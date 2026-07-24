import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

// Append the Palazzo & Pext cards to the veranda-s overview `lines` array in the
// already-seeded DB (nl + de each have their own localized array). Idempotent:
// skips a locale that already has the Palazzo card. down() is a no-op.
const CARDS = {
  nl: [
    { name: 'Palazzo', price: 'Prijs op aanvraag', tag: 'Lamellendak', desc: 'Roterend lamellendak: zelf zon en schaduw doseren, waterdicht bij regen. Ook als Sqope met glasdak.', href: '/veranda-palazzo', fallback: '/uploads/pallazzo-slide-top-veranda-zeeland.jpg' },
    { name: 'Pext', price: 'Prijs op aanvraag', tag: 'Houten veranda', desc: 'Warme houten veranda van Douglas- of larikshout met aluminium profielen. Geïsoleerd of ongeïsoleerd.', href: '/veranda-pext', fallback: '/uploads/pext-overkapping-slide-veranda-zeeland.jpg' },
  ],
  de: [
    { name: 'Palazzo', price: 'Preis auf Anfrage', tag: 'Lamellendach', desc: 'Drehbares Lamellendach: Sonne und Schatten selbst dosieren, wasserdicht bei Regen. Auch als Sqope mit Glasdach.', href: '/veranda-palazzo', fallback: '/uploads/pallazzo-slide-top-veranda-zeeland.jpg' },
    { name: 'Pext', price: 'Preis auf Anfrage', tag: 'Holz-Veranda', desc: 'Warme Holz-Veranda aus Douglasie oder Lärche mit Aluminiumprofilen. Isoliert oder nicht isoliert.', href: '/veranda-pext', fallback: '/uploads/pext-overkapping-slide-veranda-zeeland.jpg' },
  ],
} as const

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const locale of ['nl', 'de'] as const) {
    const current = await payload.findGlobal({ slug: 'veranda-s', locale, depth: 0, req })
    const lines = (current.lines ?? []) as Array<{ href?: string | null }>
    if (lines.some((l) => l.href === '/veranda-palazzo')) continue
    await payload.updateGlobal({
      slug: 'veranda-s',
      locale,
      req,
      data: { lines: [...lines, ...CARDS[locale]] },
    })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: never wipe editor content on rollback
}
