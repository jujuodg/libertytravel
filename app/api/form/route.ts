// app/api/form/route.ts
import { extractEmail, stripFiles } from '@/lib/helper';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const RESEND_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_KEY!);

export async function POST(req: Request) {
  try {
    const ct = req.headers.get('content-type') || '';
    let body: Record<string, any> = {};
    let passportFile: File | null = null;

    if (ct.includes('multipart/form-data')) {
      const form = await req.formData();

      // Build body from *all* entries (no need to send a "json" part)
      form.forEach((val, key) => {
        if (val instanceof File) return; // handled separately
        body[key] = typeof val === 'string' ? val : String(val);
      });

      // optional: file named "passport" (match client side)
      const f = form.get('passport');
      passportFile = f instanceof File ? f : null;

      // If you instead send a nested JSON, you can support it too:
      // const jsonRaw = form.get("json");
      // if (typeof jsonRaw === "string") body = JSON.parse(jsonRaw);
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

    const safeBody = stripFiles(body);

    const html = `
      <h2>New ${body.formType || 'Form'} Submission</h2>
      <p><strong>From:</strong> ${
        body.firstName ?? body.name ?? senderEmail
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
      from: 'Liberty Travel Website <onboarding@resend.dev>', // verified sender in Resend
      to: 'info@libertytravelsng.com', // your admin inbox
      subject: `New ${body.formType || 'Form'} Submission`,
      replyTo: senderEmail, // <-- correct key
      text: JSON.stringify(safeBody, null, 2),
      html,
      // To attach the file, uncomment below:
      // attachments: passportFile ? [{
      //   filename: passportFile.name,
      //   content: Buffer.from(await passportFile.arrayBuffer()),
      //   contentType: passportFile.type,
      // }] : undefined,
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
