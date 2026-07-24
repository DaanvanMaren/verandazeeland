import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Insert a soft hyphen (U+00AD, chr(173)) at the German-correct compound seam of
// "Terrassenüberdachung" → "Terrassen­überdachung", so the long word can break on
// mobile. The word only occurs in German (de) content, which lives in the DB.
// This runs AFTER all the de seed migrations, so on a fresh deploy the seeds write
// the plain word and this pass adds the break.
//
// Generic + surgical: it loops over every text/varchar/jsonb column of every
// localized table (any table with a `_locale` column) and only touches de rows
// that actually contain the word — no other content is affected. Idempotent: once
// the seam holds a soft hyphen the plain substring no longer matches, so a re-run
// is a no-op. Also covers plurals ("…ungen") and compounds ("Aluminium-…").
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    DECLARE r RECORD;
    BEGIN
      FOR r IN
        SELECT c.table_name, c.column_name, c.data_type
        FROM information_schema.columns c
        WHERE c.table_schema = 'public'
          AND c.data_type IN ('text', 'character varying', 'jsonb')
          AND EXISTS (
            SELECT 1 FROM information_schema.columns lc
            WHERE lc.table_schema = 'public'
              AND lc.table_name = c.table_name
              AND lc.column_name = '_locale'
          )
      LOOP
        IF r.data_type = 'jsonb' THEN
          EXECUTE format(
            'UPDATE %I SET %I = REPLACE(%I::text, %L, %L)::jsonb WHERE _locale = ''de'' AND %I::text LIKE %L',
            r.table_name, r.column_name, r.column_name,
            'Terrassenüberdachung', 'Terrassen' || chr(173) || 'überdachung',
            r.column_name, '%Terrassenüberdachung%');
        ELSE
          EXECUTE format(
            'UPDATE %I SET %I = REPLACE(%I, %L, %L) WHERE _locale = ''de'' AND %I LIKE %L',
            r.table_name, r.column_name, r.column_name,
            'Terrassenüberdachung', 'Terrassen' || chr(173) || 'überdachung',
            r.column_name, '%Terrassenüberdachung%');
        END IF;
      END LOOP;
    END $$;
  `)
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: harmless invisible soft hyphens, never worth reverting
}
