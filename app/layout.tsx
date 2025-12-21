import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import Head from 'next/head';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://libertytravelsng.com'),
  title: {
    default: 'Liberty Hospitality Limited',
    template: '%s | Liberty Hospitality Limited',
  },
  description:
    'Your one-stop online travel agency for flights, hotels, and holiday packages.',
  keywords: [
    'travel agency',
    'flights',
    'hotel booking',
    'holiday packages',
    'Liberty Travels',
    'airport pickup',
  ],
  generator: 'Liberty Hospitality Limited',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',

  openGraph: {
    title: 'Liberty Travels - Your Trusted Travel Partner',
    description:
      'Book flights, hotels, and tours with Liberty Travels. Stress-free travel planning tailored for you.',
    url: 'https://libertytravelsng.com/',
    siteName: 'Liberty Hospitality Limited',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Liberty Travels',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const business = {
    name: 'Liberty Hospitality Limited',
    url: 'https://libertytravelsng.com',
    logo: 'https://libertytravelsng.com/logo.png',
    telephone: '+234 802 387 4076',
    email: 'info@libertytravelsng.com',
    sameAs: [
      'https://www.facebook.com/share/1BGfFGQSrC/',
      'https://www.instagram.com/libertytravels.ng?igsh=MXJmc2RxN2QzeTdtcQ==',
    ],
    address: {
      streetAddress: '1, Balogun street, off Obafemi Awolowo way, Ikeja',
      addressLocality: 'Lagos',
      addressRegion: 'LA',
      postalCode: '100281',
      addressCountry: 'NG',
    },
    openingHours: ['Mo-Fr 09:00-17:00', 'Sa 10:00-15:00'],
  };

  const travelAgencyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: business.name,
    url: business.url,
    logo: business.logo,
    image: business.logo,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      ...business.address,
    },
    sameAs: business.sameAs,
    openingHoursSpecification: business.openingHours.map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      description: oh,
    })),
    priceRange: '$$',
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: business.url,
    name: business.name,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${business.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang='en'>
      <head>
        {/* Fonts */}
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencyJsonLd),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
      </head>

      <body>
        {children}

        {/* ================= ZOHO CAMPAIGNS POPUP ================= */}

        {/* Load Zoho script */}
        <Script
          id='zoho-optin'
          src='https://campaigns.zoho.com/js/optin.min.js'
          strategy='afterInteractive'
        />

        {/* Initialize popup safely */}
        <Script
          id='zoho-popup-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function () {
                if (typeof loadZCPopup === "function") {
                  loadZCPopup(
                    "3z12f8ef8189dbda523d3d9b4d755b56e5ecb4031efddb17b5e453b32ff397e804",
                    "ZCFORMVIEW",
                    "3z82c17cbc9b9d8341d451280ecdbf8d9c"
                  );
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
