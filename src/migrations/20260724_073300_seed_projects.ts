import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Seed the projects that exist as photo folders, so the client only has to
// upload the images per project in the admin (no image files in the repo).
//
// Raw SQL on purpose: payload.create/find run against the *current* config, which
// already has fields (body) added by a LATER migration — so an ORM call here 500s
// on a fresh DB ("column projects__locales.body does not exist"). Plain INSERT
// only touches columns that exist at this point. ON CONFLICT (slug) makes it
// idempotent; down() is a no-op — never wipe editor content on rollback.
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    INSERT INTO "projects" ("title", "slug", "location", "product_line", "published") VALUES
      ('Profiline veranda Kamperland', 'profiline-kamperland', 'Kamperland', 'Profiline', true),
      ('Profiline veranda Oostkapelle', 'profiline-oostkapelle', 'Oostkapelle', 'Profiline', true),
      ('Profiline waaierdak Steenbergen', 'profiline-steenbergen', 'Steenbergen', 'Profiline', true),
      ('Profiline tuinkamer Kapelle', 'profiline-tuinkamer-kapelle', 'Kapelle', 'Profiline', true),
      ('Profiline tuinkamer Ouwerkerk', 'profiline-tuinkamer-ouwerkerk', 'Ouwerkerk', 'Profiline', true),
      ('Greenline veranda Vlissingen', 'greenline-vlissingen', 'Vlissingen', 'Greenline', true),
      ('Greenline op vakantiepark Duinzicht', 'greenline-koudekerke', 'Koudekerke', 'Greenline', true),
      ('Greenline tuinkamer Helmond', 'greenline-tuinkamer-helmond', 'Helmond', 'Greenline', true),
      ('Cube veranda Vlissingen', 'cube-vlissingen', 'Vlissingen', 'Cube', true)
    ON CONFLICT ("slug") DO NOTHING;
  `)
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: never wipe editor content on rollback
}
