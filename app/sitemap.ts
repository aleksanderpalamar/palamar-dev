import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aleksanderpalamar.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://aleksanderpalamar.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aleksanderpalamar.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://aleksanderpalamar.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ]
}