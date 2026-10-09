import { readdirSync } from 'node:fs'
import path from 'node:path'

import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

import { SITE_URL } from '@/content/seo'
import config from '@/payload.config'

// /sitemap.xml — alle vaste routes onder (frontend), automatisch bij de build.
// Dynamische routes ([slug]) en privé-mappen (_components) tellen niet mee; voeg
// die per site toe aan `extra` hieronder. Zonder SITE_URL: lege sitemap.
const extra: string[] = []

// Site: /projecten/<slug> komt uit de projects-collectie (zelfde query als de
// route), dus bij elke request opvragen i.p.v. bij de build (geen DB tijdens build).
export const dynamic = 'force-dynamic'

async function projectUrls(): Promise<string[]> {
  try {
    const payload = await getPayload({ config: await config })
    const { docs } = await payload.find({
      collection: 'projects',
      where: { published: { equals: true } },
      depth: 0,
      limit: 1000,
    })
    return docs.map((p) => `/projecten/${p.slug}`)
  } catch {
    return [] // geen DB bereikbaar: alleen de vaste routes
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!SITE_URL) return []
  const dir = path.join(process.cwd(), 'src/app/(frontend)')
  const routes = (readdirSync(dir, { recursive: true }) as string[])
    .map((f) => f.split(path.sep))
    .filter((s) => s.at(-1) === 'page.tsx' && !s.some((p) => /^[_[@]/.test(p)))
    .map((s) => '/' + s.slice(0, -1).filter((p) => !p.startsWith('(')).join('/'))
  return [...new Set([...routes, ...extra, ...(await projectUrls())])].sort().map((r) => ({ url: SITE_URL + r }))
}
