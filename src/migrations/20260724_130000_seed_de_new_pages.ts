import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import type { GlobalSlug } from 'payload'

// Data migration: fill the German (de) locale for the pages added this cycle
// (Palazzo & Pext brand + model pages, and the two new Zonwering pages). Same
// pattern as 20260717_000001_seed_de_content / 20260722_084100_seed_de_seo_pages
// — only the de locale is written; nl comes from the field defaults. down() is a
// no-op: never wipe locale content.
import palazzoLamellendak from './de/palazzo-lamellendak'
import palazzoSqope from './de/palazzo-sqope'
import pextLichtstraat from './de/pext-lichtstraat'
import pextVeranda from './de/pext-veranda'
import verandaPalazzo from './de/veranda-palazzo'
import verandaPext from './de/veranda-pext'
import zonweringKnikarmschermen from './de/zonwering-knikarmschermen'
import zonweringRolluiken from './de/zonwering-rolluiken'

const DE: Partial<Record<GlobalSlug, Record<string, unknown>>> = {
  'veranda-palazzo': verandaPalazzo,
  'palazzo-sqope': palazzoSqope,
  'palazzo-lamellendak': palazzoLamellendak,
  'veranda-pext': verandaPext,
  'pext-veranda': pextVeranda,
  'pext-lichtstraat': pextLichtstraat,
  'zonwering-knikarmschermen': zonweringKnikarmschermen,
  'zonwering-rolluiken': zonweringRolluiken,
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const [slug, data] of Object.entries(DE)) {
    await payload.updateGlobal({ slug: slug as GlobalSlug, locale: 'de', data, req })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: never wipe locale content on rollback
}
