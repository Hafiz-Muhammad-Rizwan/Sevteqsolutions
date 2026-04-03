import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Add any paths you don't want search engines to look at inside the array
      disallow: ['/private/'],
    },
    // Specify the sitemap URL directly for Google Search Console integrations
    sitemap: 'https://sevteqsolutions.com/sitemap.xml',
  }
}
