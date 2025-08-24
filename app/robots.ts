import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // allow crawling everywhere
      },
    ],
    sitemap: 'https://libertytravelsng.com/sitemap.xml',
    host: 'https://libertytravelsng.com',
  };
}
