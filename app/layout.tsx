import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
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

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Liberty Travels - Your Trusted Travel Partner',
  //   description:
  //     'Book flights, hotels, and tours with Liberty Travels. Stress-free travel planning tailored for you.',
  //   images: ['/images/og-image.jpg'],
  //   creator: '@yourtwitterhandle',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Liberty Hospitality Limited',
    url: 'https://libertytravelsng.com',
    logo: 'https://libertytravelsng.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2348023874076',
      contactType: 'Customer Service',
      areaServed: 'Worldwide',
    },
  };

  return (
    <html lang='en'>
      <head>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

// import type React from 'react';
// import type { Metadata } from 'next';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import './globals.css';

// export const metadata: Metadata = {
//   title: 'Liberty Travels',
//   description: 'your one-stop online travel agency',
//   generator: 'Liberty Travels',
//   icons: {
//     icon: [
//       { url: '/favicon.ico', sizes: 'any' },
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
//     ],
//   },
//   manifest: '/site.webmanifest',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang='en'>
//       <head>
//         <style>{`
// html {
//   font-family: ${GeistSans.style.fontFamily};
//   --font-sans: ${GeistSans.variable};
//   --font-mono: ${GeistMono.variable};
// }
//         `}</style>
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
