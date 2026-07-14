import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "home_usps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "home_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar
  );
  
  ALTER TABLE "home" ALTER COLUMN "hero_title" SET DEFAULT 'Geniet élk seizoen buiten.';
  ALTER TABLE "home" ALTER COLUMN "hero_subtitle" SET DEFAULT 'Veranda''s, tuinkamers en glasschuifwanden van Duitse topkwaliteit, op maat gemaakt en gemonteerd door Veranda Zeeland in Serooskerke.';
  ALTER TABLE "home" ADD COLUMN "hero_badge" varchar DEFAULT 'Buitenleven aan de Zeeuwse kust';
  ALTER TABLE "home" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Bekijk de veranda''s →';
  ALTER TABLE "home" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "home" ADD COLUMN "categories_heading" varchar DEFAULT 'Ontdek wat er buiten mogelijk is';
  ALTER TABLE "home" ADD COLUMN "welcome_label" varchar DEFAULT 'Welkom bij Veranda Zeeland';
  ALTER TABLE "home" ADD COLUMN "welcome_title" varchar DEFAULT 'Uw complete leverancier in Serooskerke';
  ALTER TABLE "home" ADD COLUMN "welcome_text1" varchar DEFAULT 'Als officieel Verasol-dealer leveren wij de complete lijn hoogwaardige aluminium veranda''s: van de voordelige Greenline tot de exclusieve Cube. In Duitsland geproduceerd, betaalbaar en van perfecte kwaliteit. Een veranda kan zelfs worden omgebouwd naar een volwaardige tuinkamer voor nog meer woonplezier.';
  ALTER TABLE "home" ADD COLUMN "welcome_text2" varchar DEFAULT 'Kom langs voor deskundig en vrijblijvend advies aan De Stekelweie 2 te Serooskerke.';
  ALTER TABLE "home" ADD COLUMN "welcome_cta" varchar DEFAULT 'Plan uw bezoek →';
  ALTER TABLE "home" ADD COLUMN "welcome_image_id" integer;
  ALTER TABLE "home" ADD COLUMN "models_heading" varchar DEFAULT 'Ieder thuis verdient een echte Verasol®';
  ALTER TABLE "home" ADD COLUMN "models_sub" varchar DEFAULT 'Vijf productlijnen. Eén perfecte match voor uw woning.';
  ALTER TABLE "home" ADD COLUMN "cta_title" varchar DEFAULT 'Zin in uw eigen buitenkamer?';
  ALTER TABLE "home" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend uw offerte op maat aan, inclusief sterkteberekening en advies.';
  ALTER TABLE "home" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "home_usps" ADD CONSTRAINT "home_usps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_reviews" ADD CONSTRAINT "home_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "home_usps_order_idx" ON "home_usps" USING btree ("_order");
  CREATE INDEX "home_usps_parent_id_idx" ON "home_usps" USING btree ("_parent_id");
  CREATE INDEX "home_reviews_order_idx" ON "home_reviews" USING btree ("_order");
  CREATE INDEX "home_reviews_parent_id_idx" ON "home_reviews" USING btree ("_parent_id");
  ALTER TABLE "home" ADD CONSTRAINT "home_welcome_image_id_media_id_fk" FOREIGN KEY ("welcome_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "home_welcome_image_idx" ON "home" USING btree ("welcome_image_id");
  ALTER TABLE "home" DROP COLUMN "intro";
  ALTER TABLE "home" DROP COLUMN "text2";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_usps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_reviews" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "home_usps" CASCADE;
  DROP TABLE "home_reviews" CASCADE;
  ALTER TABLE "home" DROP CONSTRAINT "home_welcome_image_id_media_id_fk";
  
  DROP INDEX "home_welcome_image_idx";
  ALTER TABLE "home" ALTER COLUMN "hero_title" DROP DEFAULT;
  ALTER TABLE "home" ALTER COLUMN "hero_subtitle" DROP DEFAULT;
  ALTER TABLE "home" ADD COLUMN "intro" jsonb;
  ALTER TABLE "home" ADD COLUMN "text2" jsonb;
  ALTER TABLE "home" DROP COLUMN "hero_badge";
  ALTER TABLE "home" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "home" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "home" DROP COLUMN "categories_heading";
  ALTER TABLE "home" DROP COLUMN "welcome_label";
  ALTER TABLE "home" DROP COLUMN "welcome_title";
  ALTER TABLE "home" DROP COLUMN "welcome_text1";
  ALTER TABLE "home" DROP COLUMN "welcome_text2";
  ALTER TABLE "home" DROP COLUMN "welcome_cta";
  ALTER TABLE "home" DROP COLUMN "welcome_image_id";
  ALTER TABLE "home" DROP COLUMN "models_heading";
  ALTER TABLE "home" DROP COLUMN "models_sub";
  ALTER TABLE "home" DROP COLUMN "cta_title";
  ALTER TABLE "home" DROP COLUMN "cta_text";
  ALTER TABLE "home" DROP COLUMN "cta_button";`)
}
