// app/api/form/route.ts
import { extractEmail, stripFiles } from '@/lib/helper';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import mailchimp from '@mailchimp/mailchimp_marketing';

export const dynamic = 'force-dynamic';

const RESEND_KEY = process.env.RESEND_API_KEY!;
const resend = new Resend(RESEND_KEY!);

// ---- Mailchimp envs ----
// Required:
// MAILCHIMP_API_KEY=xxxx
// MAILCHIMP_LIST_ID=xxxx
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY!;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID!;

// Initialize Mailchimp client
mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: 'us12', // Replace 'usX' with your Mailchimp datacenter (e.g., 'us19')
});

// --- Subscribe to Mailchimp ---
async function addToMailchimp(params: {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
}) {
  try {
    const response = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: params.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: params.firstName ?? '',
        LNAME: params.lastName ?? '',
      },
    });
    return response;
  } catch (error) {
    throw new Error(
      `Mailchimp subscribe failed: ${error ? error : 'Unknown error'}`
    );
  }
}

// --- Small helpers to be resilient with different field names ---
function getFirstName(body: Record<string, any>) {
  if (typeof body.firstName === 'string') return body.firstName;
  if (typeof body.firstname === 'string') return body.firstname;
  if (typeof body.fname === 'string') return body.fname;
  if (typeof body.name === 'string') return body.name.split(' ')[0];
  return undefined;
}

function getLastName(body: Record<string, any>) {
  if (typeof body.lastName === 'string') return body.lastName;
  if (typeof body.lastname === 'string') return body.lastname;
  if (typeof body.lname === 'string') return body.lname;
  if (typeof body.name === 'string') {
    const parts = body.name.trim().split(/\s+/);
    return parts.length > 1 ? parts.slice(1).join(' ') : undefined;
  }
  return undefined;
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get('content-type') || '';
    let body: Record<string, any> = {};
    let passportFile: File | null = null;

    if (ct.includes('multipart/form-data')) {
      const form = await req.formData();

      form.forEach((val, key) => {
        if (val instanceof File) return;
        body[key] = typeof val === 'string' ? val : String(val);
      });

      const f = form.get('passport');
      passportFile = f instanceof File ? f : null;
    } else {
      body = await req.json();
    }

    const senderEmail = extractEmail(body);
    if (!senderEmail) {
      return NextResponse.json(
        { error: 'Email is required (top-level or nested)' },
        { status: 400 }
      );
    }

    // Names (best-effort)
    const firstName = getFirstName(body);
    const lastName = getLastName(body);

    // Try to subscribe to Mailchimp
    try {
      await addToMailchimp({
        email: senderEmail,
        firstName,
        lastName,
        source: body.formType || 'Website Form',
      });
    } catch (mErr) {
      console.error('Mailchimp error:', mErr);
      // If Mailchimp fails, continue without blocking the user flow
    }

    const safeBody = stripFiles(body);

    const html = `
      <h2>New ${body.formType || 'Form'} Submission</h2>
      <p><strong>From:</strong> ${
        firstName ?? body.name ?? senderEmail
      } &lt;${senderEmail}&gt;</p>
      ${
        passportFile
          ? `<p><strong>Passport file:</strong> ${passportFile.name} (${passportFile.type}, ${passportFile.size} bytes)</p>`
          : ''
      }
      <pre style="white-space:pre-wrap;background:#f6f8fa;padding:12px;border:1px solid #eaecef;border-radius:8px;">
${JSON.stringify(safeBody, null, 2)}
      </pre>
    `;

    const { data } = await resend.emails.send({
      from: 'Liberty Travel Website <onboarding@resend.dev>',
      to: 'info@libertytravelsng.com',
      subject: `New ${body.formType || 'Form'} Submission`,
      replyTo: senderEmail,
      text: JSON.stringify(safeBody, null, 2),
      html,
    });

    return NextResponse.json({ ok: true, data });
  } catch (err: any) {
    console.error('Send Email Error:', err);
    return NextResponse.json(
      { error: err?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// // app/api/form/route.ts
// import { extractEmail, stripFiles } from '@/lib/helper';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// export const dynamic = 'force-dynamic';

// const RESEND_KEY = process.env.RESEND_API_KEY!;
// const resend = new Resend(RESEND_KEY!);

// // ---- Zoho envs (set these in .env.local) ----
// // Required:
// // ZOHO_CLIENT_ID=xxxx
// // ZOHO_CLIENT_SECRET=xxxx
// // ZOHO_REFRESH_TOKEN=xxxx   // long-lived, does not expire unless revoked
// // ZOHO_CAMPAIGNS_LIST_KEY=xxxx
// //
// // Optional (defaults below cover .com region):
// // ZOHO_ACCOUNTS_BASE=https://accounts.zoho.com
// // ZOHO_CAMPAIGNS_BASE=https://campaigns.zoho.com

// const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID!;
// const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET!;
// const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN!;
// const ZOHO_LIST_KEY = process.env.ZOHO_CAMPAIGNS_LIST_KEY!;

// const ZOHO_ACCOUNTS_BASE =
//   process.env.ZOHO_ACCOUNTS_BASE || 'https://accounts.zoho.com';
// const ZOHO_CAMPAIGNS_BASE =
//   process.env.ZOHO_CAMPAIGNS_BASE || 'https://campaigns.zoho.com';

// // --- Token refresh (called per request; caches naturally via short route lifetime) ---
// async function getZohoAccessToken(): Promise<string> {
//   const resp = await fetch(`${ZOHO_ACCOUNTS_BASE}/oauth/v2/token`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams({
//       grant_type: 'refresh_token',
//       refresh_token: ZOHO_REFRESH_TOKEN,
//       client_id: ZOHO_CLIENT_ID,
//       client_secret: ZOHO_CLIENT_SECRET,
//     }).toString(),
//   });

//   const json: any = await resp.json().catch(() => ({}));
//   if (!resp.ok || !json?.access_token) {
//     throw new Error(
//       `Zoho token refresh failed: ${resp.status} ${JSON.stringify(json)}`
//     );
//   }
//   return json.access_token as string;
// }

// // --- Check if the email already exists in Zoho Campaigns ---
// async function checkIfEmailExists(email: string): Promise<boolean> {
//   const accessToken = await getZohoAccessToken();

//   const resp = await fetch(
//     `${ZOHO_CAMPAIGNS_BASE}/api/v1.1/json/getsubscriber`,
//     {
//       method: 'POST',
//       headers: {
//         Authorization: `Zoho-oauthtoken ${accessToken}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         listkey: ZOHO_LIST_KEY,
//         email: email,
//       }).toString(),
//     }
//   );

//   const json = await resp.json().catch(() => ({}));
//   return resp.ok && json?.data?.length > 0;
// }

// // --- Subscribe helper (First Name, Last Name, Contact Email) ---
// async function addToZohoCampaigns(params: {
//   email: string;
//   firstName?: string;
//   lastName?: string;
//   source?: string;
// }) {
//   const accessToken = await getZohoAccessToken();

//   const contactinfo = {
//     'First Name': params.firstName ?? '',
//     'Last Name': params.lastName ?? '',
//     'Contact Email': params.email,
//   };

//   const body = new URLSearchParams();
//   body.set('resfmt', 'JSON');
//   body.set('listkey', ZOHO_LIST_KEY);
//   body.set('contactinfo', JSON.stringify(contactinfo));
//   if (params.source) body.set('source', params.source);

//   const resp = await fetch(
//     `${ZOHO_CAMPAIGNS_BASE}/api/v1.1/json/listsubscribe`,
//     {
//       method: 'POST',
//       headers: {
//         Authorization: `Zoho-oauthtoken ${accessToken}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: body.toString(),
//     }
//   );

//   const json: any = await resp.json().catch(() => ({}));
//   if (!resp.ok || json?.status !== 'success') {
//     throw new Error(
//       `Zoho subscribe failed: ${resp.status} ${JSON.stringify(json)}`
//     );
//   }

//   return json;
// }

// // --- Small helpers to be resilient with different field names ---
// function getFirstName(body: Record<string, any>) {
//   if (typeof body.firstName === 'string') return body.firstName;
//   if (typeof body.firstname === 'string') return body.firstname;
//   if (typeof body.fname === 'string') return body.fname;
//   if (typeof body.name === 'string') return body.name.split(' ')[0];
//   return undefined;
// }

// function getLastName(body: Record<string, any>) {
//   if (typeof body.lastName === 'string') return body.lastName;
//   if (typeof body.lastname === 'string') return body.lastname;
//   if (typeof body.lname === 'string') return body.lname;
//   if (typeof body.name === 'string') {
//     const parts = body.name.trim().split(/\s+/);
//     return parts.length > 1 ? parts.slice(1).join(' ') : undefined;
//   }
//   return undefined;
// }

// export async function POST(req: Request) {
//   try {
//     const ct = req.headers.get('content-type') || '';
//     let body: Record<string, any> = {};
//     let passportFile: File | null = null;

//     if (ct.includes('multipart/form-data')) {
//       const form = await req.formData();

//       form.forEach((val, key) => {
//         if (val instanceof File) return;
//         body[key] = typeof val === 'string' ? val : String(val);
//       });

//       const f = form.get('passport');
//       passportFile = f instanceof File ? f : null;
//     } else {
//       body = await req.json();
//     }

//     const senderEmail = extractEmail(body);
//     if (!senderEmail) {
//       return NextResponse.json(
//         { error: 'Email is required (top-level or nested)' },
//         { status: 400 }
//       );
//     }

//     // Names (best-effort)
//     const firstName = getFirstName(body);
//     const lastName = getLastName(body);

//     // Check if the email already exists in Zoho Campaigns
//     const emailExists = await checkIfEmailExists(senderEmail);
//     if (emailExists) {
//       return NextResponse.json(
//         { message: 'Email already exists in Zoho list' },
//         { status: 200 }
//       );
//     }

//     // Try to subscribe to Zoho, but do not block the user flow if it fails
//     try {
//       await addToZohoCampaigns({
//         email: senderEmail,
//         firstName,
//         lastName,
//         source: body.formType || 'Website Form',
//       });
//     } catch (zErr) {
//       console.error('Zoho Campaigns error:', zErr);
//     }

//     const safeBody = stripFiles(body);

//     const html = `
//       <h2>New ${body.formType || 'Form'} Submission</h2>
//       <p><strong>From:</strong> ${
//         firstName ?? body.name ?? senderEmail
//       } &lt;${senderEmail}&gt;</p>
//       ${
//         passportFile
//           ? `<p><strong>Passport file:</strong> ${passportFile.name} (${passportFile.type}, ${passportFile.size} bytes)</p>`
//           : ''
//       }
//       <pre style="white-space:pre-wrap;background:#f6f8fa;padding:12px;border:1px solid #eaecef;border-radius:8px;">
// ${JSON.stringify(safeBody, null, 2)}
//       </pre>
//     `;

//     const { data } = await resend.emails.send({
//       from: 'Liberty Travel Website <onboarding@resend.dev>',
//       to: 'info@libertytravelsng.com',
//       subject: `New ${body.formType || 'Form'} Submission`,
//       replyTo: senderEmail,
//       text: JSON.stringify(safeBody, null, 2),
//       html,
//       // attachments: passportFile
//       //   ? [
//       //       {
//       //         filename: passportFile.name,
//       //         content: Buffer.from(await passportFile.arrayBuffer()),
//       //         contentType: passportFile.type,
//       //       },
//       //     ]
//       //   : undefined,
//     });

//     return NextResponse.json({ ok: true, data });
//   } catch (err: any) {
//     console.error('Send Email Error:', err);
//     return NextResponse.json(
//       { error: err?.message || 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }
