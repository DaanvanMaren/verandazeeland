import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import type { GlobalSlug } from 'payload'

// Data migration: fill the German (de) locale for the six SEO landing pages
// added by 20260722_084049_add_seo_pages. Same pattern as
// 20260717_000001_seed_de_content — only the de locale is written; nl comes
// from the field defaults. down() is a no-op: never wipe locale content.
import verandaGoes from './de/veranda-goes'
import verandaLatenPlaatsen from './de/veranda-laten-plaatsen'
import verandaMiddelburg from './de/veranda-middelburg'
import verandaPrijzen from './de/veranda-prijzen'
import verandaVergunning from './de/veranda-vergunning'
import verandaVlissingen from './de/veranda-vlissingen'

const DE: Partial<Record<GlobalSlug, Record<string, unknown>>> = {
  'veranda-prijzen': verandaPrijzen,
  'veranda-vergunning': verandaVergunning,
  'veranda-laten-plaatsen': verandaLatenPlaatsen,
  'veranda-middelburg': verandaMiddelburg,
  'veranda-goes': verandaGoes,
  'veranda-vlissingen': verandaVlissingen,
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const [slug, data] of Object.entries(DE)) {
    await payload.updateGlobal({ slug: slug as GlobalSlug, locale: 'de', data, req })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: never wipe locale content on rollback
}
