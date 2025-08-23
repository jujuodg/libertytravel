export async function zohoGetContact(email: string) {
  const url =
    `https://campaigns.zoho.com/api/v1.1/getcontactdetails?resfmt=JSON` +
    `&email=${encodeURIComponent(email)}` +
    `&listkey=${process.env.ZOHO_LIST_KEY}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) return { exists: false, raw: await res.text() };
  const data = await res.json().catch(() => ({}));
  return { exists: data?.code === 0, raw: data };
}

export async function zohoAdd(
  email: string,
  firstName: string | undefined,
  tags: string[]
) {
  const res = await fetch(
    'https://campaigns.zoho.com/api/v1.1/addlistsubscribers',
    {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listkey: process.env.ZOHO_LIST_KEY,
        contactinfo: [
          {
            EmailAddress: email,
            FirstName: firstName ?? '',
            Tags: tags,
          },
        ],
      }),
    }
  );
  return res.ok;
}

export async function zohoUpdateTags(email: string, tags: string[]) {
  const res = await fetch(
    'https://campaigns.zoho.com/api/v1.1/updatelistcontact',
    {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        listkey: process.env.ZOHO_LIST_KEY,
        contactinfo: [
          {
            EmailAddress: email,
            Tags: tags,
          },
        ],
      }),
    }
  );
  return res.ok;
}
