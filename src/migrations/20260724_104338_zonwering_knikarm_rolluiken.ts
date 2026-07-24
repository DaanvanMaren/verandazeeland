import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "zonwering_knikarmschermen_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "zonwering_knikarmschermen_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_knikarmschermen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_knikarmschermen_locales" (
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Knikarmschermen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Geen last van felle zon of een onverwachte zomerbui, en toch genieten van lange, lichte avonden op het terras. Een knikarmscherm rolt schaduw uit precies waar u het wilt: boven het terras, voor het raam of bij de eettafel. Zonder storende steunpalen, dus u houdt vrij zicht en alle ruimte om u heen.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"intro_title" varchar DEFAULT 'Schaduw precies waar u het wilt',
  	"intro_text" varchar DEFAULT 'Het doek spant strak tussen twee uitklapbare knikarmen, zodat u zonder palen tot wel 7,5 meter breed en 3,5 meter diep in de schaduw zit. Grotere terrassen dekt u af door meerdere schermen te koppelen. Kiezen doet u uit talloze doekdessins en kleuren, en dankzij de windsensor rolt het scherm bij een stevige wind vanzelf weer in. Smart Home Ready, dus u bedient het met een druk op de knop of gewoon via een app.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over knikarmschermen?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zonwering_rolluiken_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "zonwering_rolluiken_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_rolluiken" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_rolluiken_locales" (
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Rolluiken' NOT NULL,
  	"hero_text" varchar DEFAULT 'Soms wilt u zich even terugtrekken. Geen licht, geen lawaai, geen inkijk, gewoon rust. Met een rolluik heeft u dat helemaal zelf in de hand: over het licht, de temperatuur, uw privacy én uw veiligheid. In de zomer houdt het de warmte buiten, in de winter blijft het binnen langer behaaglijk.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg',
  	"intro_title" varchar DEFAULT 'Comfort, rust en veiligheid',
  	"intro_text" varchar DEFAULT 'Een rolluik isoleert in de winter, koelt in de zomer en werkt inbraakwerend, zodat u het hele jaar door prettig en veilig woont. Leverbaar tot wel 4 meter breed, in vele RAL-kleuren en structuurlakken, en met een ronde, vierkante of afgeschuinde kast, ook in een extra kleine uitvoering. Bedienen doet u handmatig, elektrisch, op zonne-energie of gewoon via uw smartphone.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over rolluiken?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "zonwering_knikarmschermen_intro_bullets" ADD CONSTRAINT "zonwering_knikarmschermen_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_knikarmschermen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_knikarmschermen_features" ADD CONSTRAINT "zonwering_knikarmschermen_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_knikarmschermen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_knikarmschermen" ADD CONSTRAINT "zonwering_knikarmschermen_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_knikarmschermen" ADD CONSTRAINT "zonwering_knikarmschermen_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_knikarmschermen_locales" ADD CONSTRAINT "zonwering_knikarmschermen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_knikarmschermen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_rolluiken_intro_bullets" ADD CONSTRAINT "zonwering_rolluiken_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_rolluiken"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_rolluiken_features" ADD CONSTRAINT "zonwering_rolluiken_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_rolluiken"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_rolluiken" ADD CONSTRAINT "zonwering_rolluiken_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_rolluiken" ADD CONSTRAINT "zonwering_rolluiken_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_rolluiken_locales" ADD CONSTRAINT "zonwering_rolluiken_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_rolluiken"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "zonwering_knikarmschermen_intro_bullets_order_idx" ON "zonwering_knikarmschermen_intro_bullets" USING btree ("_order");
  CREATE INDEX "zonwering_knikarmschermen_intro_bullets_parent_id_idx" ON "zonwering_knikarmschermen_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "zonwering_knikarmschermen_intro_bullets_locale_idx" ON "zonwering_knikarmschermen_intro_bullets" USING btree ("_locale");
  CREATE INDEX "zonwering_knikarmschermen_features_order_idx" ON "zonwering_knikarmschermen_features" USING btree ("_order");
  CREATE INDEX "zonwering_knikarmschermen_features_parent_id_idx" ON "zonwering_knikarmschermen_features" USING btree ("_parent_id");
  CREATE INDEX "zonwering_knikarmschermen_features_locale_idx" ON "zonwering_knikarmschermen_features" USING btree ("_locale");
  CREATE INDEX "zonwering_knikarmschermen_hero_image_idx" ON "zonwering_knikarmschermen" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_knikarmschermen_intro_image_idx" ON "zonwering_knikarmschermen" USING btree ("intro_image_id");
  CREATE UNIQUE INDEX "zonwering_knikarmschermen_locales_locale_parent_id_unique" ON "zonwering_knikarmschermen_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "zonwering_rolluiken_intro_bullets_order_idx" ON "zonwering_rolluiken_intro_bullets" USING btree ("_order");
  CREATE INDEX "zonwering_rolluiken_intro_bullets_parent_id_idx" ON "zonwering_rolluiken_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "zonwering_rolluiken_intro_bullets_locale_idx" ON "zonwering_rolluiken_intro_bullets" USING btree ("_locale");
  CREATE INDEX "zonwering_rolluiken_features_order_idx" ON "zonwering_rolluiken_features" USING btree ("_order");
  CREATE INDEX "zonwering_rolluiken_features_parent_id_idx" ON "zonwering_rolluiken_features" USING btree ("_parent_id");
  CREATE INDEX "zonwering_rolluiken_features_locale_idx" ON "zonwering_rolluiken_features" USING btree ("_locale");
  CREATE INDEX "zonwering_rolluiken_hero_image_idx" ON "zonwering_rolluiken" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_rolluiken_intro_image_idx" ON "zonwering_rolluiken" USING btree ("intro_image_id");
  CREATE UNIQUE INDEX "zonwering_rolluiken_locales_locale_parent_id_unique" ON "zonwering_rolluiken_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "zonwering_knikarmschermen_intro_bullets" CASCADE;
  DROP TABLE "zonwering_knikarmschermen_features" CASCADE;
  DROP TABLE "zonwering_knikarmschermen" CASCADE;
  DROP TABLE "zonwering_knikarmschermen_locales" CASCADE;
  DROP TABLE "zonwering_rolluiken_intro_bullets" CASCADE;
  DROP TABLE "zonwering_rolluiken_features" CASCADE;
  DROP TABLE "zonwering_rolluiken" CASCADE;
  DROP TABLE "zonwering_rolluiken_locales" CASCADE;`)
}
