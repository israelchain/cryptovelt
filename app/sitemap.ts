import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

const routes = ['', '/blockchain', '/buy-crypto', '/wallet', '/investment', '/bitcoin']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}/`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
