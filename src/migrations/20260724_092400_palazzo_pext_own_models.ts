import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

// The veranda-palazzo/veranda-pext brand pages were first seeded with Verasol
// lines in their "andere modellen" section; now that each brand has its own model
// pages, point that section at them. Only nl is written — these globals have no de
// value, so de falls back to nl (fallback:true). Idempotent overwrite; no-op down.
const OTHERS = {
  'veranda-palazzo': [
    { name: 'Palazzo Sqope', tag: 'Strak glasdak', href: '/palazzo-sqope', fallback: '/uploads/pallazo-sqope-slide-veranda-zeeland.jpg' },
    { name: 'Palazzo Lamellendak', tag: 'Roterend lamellendak', href: '/palazzo-lamellendak', fallback: '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg' },
    { name: 'Linea', tag: 'Modern vlak dak', href: '/veranda-linea', fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
    { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/cube-kerk.jpg' },
  ],
  'veranda-pext': [
    { name: 'Pext houten veranda', tag: 'Douglas of lariks', href: '/pext-veranda', fallback: '/uploads/veranda-hout-pext-veranda-zeeland.jpg' },
    { name: 'Pext lichtstraat', tag: 'Lessenaar, zadel of daklicht', href: '/pext-lichtstraat', fallback: '/uploads/lichtstraat-zadeldak-schuin-pext-veranda-zeeland.jpg' },
    { name: 'Greenline', tag: 'Voordelig & strak', href: '/veranda-greenline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
    { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/cube-kerk.jpg' },
  ],
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const [slug, others] of Object.entries(OTHERS)) {
    await payload.updateGlobal({ slug: slug as 'veranda-palazzo', locale: 'nl', req, data: { others } })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op
}
