import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // It is recommended to use the absolute URL for the sitemap.
  const baseUrl = 'https://sevteqsolutions.com'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // We can add logic to dynamically generate links for custom project pages if you create dynamic routes in the future
  ]
}
