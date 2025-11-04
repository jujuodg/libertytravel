'use client';
import { useEffect } from 'react';
import Script from 'next/script';

// Put your Mailchimp popup snippet in an env var for safety
const MC_SNIPPET = process.env.NEXT_PUBLIC_MAILCHIMP_POPUP_SNIPPET ?? '';

export default function MailchimpPopup() {
  useEffect(() => {
    // Force the popup to show on every load/reload (clears Mailchimp’s cookies)
    document.cookie =
      'MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie =
      'MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }, []);

  if (!MC_SNIPPET) return null;
  return (
    <Script
      id='mcjs'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{ __html: MC_SNIPPET }}
    />
  );
}
