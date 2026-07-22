import type { MetadataRoute } from 'next'

import { nav, extraLabels } from './_components/nav'

const BASE = 'https://www.verandazeeland.nl'

// All indexable routes: home + the nav tree + the non-menu pages (offerte,
// contact, SEO landing pages). Static list derived from nav.ts so a new menu
// item lands in the sitemap automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    '/',
    ...nav.flatMap((n) => [n.href, ...(n.children?.map((c) => c.href) ?? [])]),
    ...Object.keys(extraLabels),
  ]
  return urls.map((path) => ({
    url: `${BASE}${path === '/' ? '' : path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
