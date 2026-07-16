import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home" ADD COLUMN IF NOT EXISTS "welkom_bij_verandazeeland_tekst" jsonb;
   ALTER TABLE "home" DROP COLUMN IF EXISTS "welcome_text1";
   ALTER TABLE "home" DROP COLUMN IF EXISTS "welcome_text2";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home" DROP COLUMN IF EXISTS "welkom_bij_verandazeeland_tekst";
   ALTER TABLE "home" ADD COLUMN IF NOT EXISTS "welcome_text1" varchar;
   ALTER TABLE "home" ADD COLUMN IF NOT EXISTS "welcome_text2" varchar;`)
}
