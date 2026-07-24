import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

// Seed the projects that exist as photo folders, so the client only has to
// upload the images per project in the admin (no image files in the repo).
// Idempotent: skips a slug that already exists. down() is a no-op — never wipe
// editor content on rollback.
const PROJECTS = [
  { slug: 'profiline-kamperland', title: 'Profiline veranda Kamperland', location: 'Kamperland', productLine: 'Profiline' },
  { slug: 'profiline-oostkapelle', title: 'Profiline veranda Oostkapelle', location: 'Oostkapelle', productLine: 'Profiline' },
  { slug: 'profiline-steenbergen', title: 'Profiline waaierdak Steenbergen', location: 'Steenbergen', productLine: 'Profiline' },
  { slug: 'profiline-tuinkamer-kapelle', title: 'Profiline tuinkamer Kapelle', location: 'Kapelle', productLine: 'Profiline' },
  { slug: 'profiline-tuinkamer-ouwerkerk', title: 'Profiline tuinkamer Ouwerkerk', location: 'Ouwerkerk', productLine: 'Profiline' },
  { slug: 'greenline-vlissingen', title: 'Greenline veranda Vlissingen', location: 'Vlissingen', productLine: 'Greenline' },
  { slug: 'greenline-koudekerke', title: 'Greenline op vakantiepark Duinzicht', location: 'Koudekerke', productLine: 'Greenline' },
  { slug: 'greenline-tuinkamer-helmond', title: 'Greenline tuinkamer Helmond', location: 'Helmond', productLine: 'Greenline' },
  { slug: 'cube-vlissingen', title: 'Cube veranda Vlissingen', location: 'Vlissingen', productLine: 'Cube' },
] as const

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const p of PROJECTS) {
    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: p.slug } },
      limit: 1,
      req,
    })
    if (existing.docs.length) continue
    await payload.create({ collection: 'projects', data: { ...p, published: true }, req })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: never wipe editor content on rollback
}
