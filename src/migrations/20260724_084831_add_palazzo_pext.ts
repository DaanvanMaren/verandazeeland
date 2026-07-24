import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "veranda_palazzo_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_palazzo_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_palazzo_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "veranda_palazzo_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "veranda_palazzo_others" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_palazzo" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"ombouw_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_palazzo_locales" (
  	"hero_badge" varchar DEFAULT 'Lamellendak',
  	"hero_price" varchar DEFAULT 'Prijs op aanvraag',
  	"hero_title" varchar DEFAULT 'Palazzo' NOT NULL,
  	"hero_text" varchar DEFAULT 'Zelf bepalen hoeveel zon of schaduw u onder uw overkapping wilt? Met het lamellendak van Palazzo draait u de lamellen simpelweg open of dicht. Strak, kubistisch design en het hele jaar door een aangenaam terras.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Palazzo →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/pallazzo-slide-top-veranda-zeeland.jpg',
  	"intro_title" varchar DEFAULT 'Zelf de baas over zon en schaduw',
  	"intro_text" varchar DEFAULT 'Het lamellendak van Palazzo is heerlijk veelzijdig: dicht voor schaduw, open voor volop licht. Doordat warme lucht tussen de lamellen ontsnapt, blijft het er ook op een warme dag prettig toeven. En regent het? Dan sluiten de aluminium lamellen waterdicht en voeren ze het water netjes af via de goten. De dakliggers zijn weggewerkt in de constructie, dus u houdt een rustige, minimalistische uitstraling die bij vrijwel elke woning past.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/pallazzo-lamellendak-oirschot-veranda-zeeland.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Open of gesloten',
  	"ombouw_title" varchar DEFAULT 'Ook als Sqope met glasdak',
  	"ombouw_text" varchar DEFAULT 'Naast het lamellendak levert Palazzo de Veranda Sqope: een kubistische overkapping met een strak glasdak en grote glasoppervlakken. Volop natuurlijk licht en een open gevoel, verkrijgbaar in open én gesloten varianten.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/pallazo-sqope-zij-veranda-zeeland.jpg',
  	"gallery_title" varchar DEFAULT 'Palazzo in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in een Palazzo veranda?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_pext_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_pext_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_pext_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "veranda_pext_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "veranda_pext_others" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_pext" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"ombouw_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_pext_locales" (
  	"hero_badge" varchar DEFAULT 'Houten veranda',
  	"hero_price" varchar DEFAULT 'Prijs op aanvraag',
  	"hero_title" varchar DEFAULT 'Pext' NOT NULL,
  	"hero_text" varchar DEFAULT 'Houdt u van de warme, natuurlijke uitstraling van hout? De Pext veranda combineert robuust Douglas- of larikshout met slanke aluminium beglazingsprofielen. Zo krijgt u het beste van twee werelden: de sfeer van hout én het gemak van aluminium.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Pext →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/pext-overkapping-slide-veranda-zeeland.jpg',
  	"intro_title" varchar DEFAULT 'De warmte van hout, het gemak van aluminium',
  	"intro_text" varchar DEFAULT 'Het dak rust op duurzame aluminium beglazingsprofielen met rubber, gevuld met heldere polycarbonaat- of glasplaten. De profielen werkt u desgewenst weg met aluminium sierkliklijsten, in blank aluminium, antraciet of gebroken wit, precies passend bij uw woning. Kies voor een geïsoleerde uitvoering met grenenhout en HR++ glas voor een warme tuinkamer, of een ongeïsoleerde versie voor een sfeervolle overkapping of buitenverblijf.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/veranda-hout-pext-veranda-zeeland.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Meer daglicht',
  	"ombouw_title" varchar DEFAULT 'Voeg een Pext lichtstraat toe',
  	"ombouw_text" varchar DEFAULT 'Wilt u meer daglicht in huis? Een lichtstraat haalt volop natuurlijk licht naar binnen en laat uw kamer direct ruimer ogen. Kies uit een lessenaardak, zadeldak of daklicht, elk met een eigen hellingshoek en indeling. Een echte meerwaarde voor uw woning.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk de opties →',
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg',
  	"gallery_title" varchar DEFAULT 'Pext in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in een Pext veranda?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "veranda_palazzo_specs" ADD CONSTRAINT "veranda_palazzo_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_intro_bullets" ADD CONSTRAINT "veranda_palazzo_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_features" ADD CONSTRAINT "veranda_palazzo_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_gallery" ADD CONSTRAINT "veranda_palazzo_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_gallery" ADD CONSTRAINT "veranda_palazzo_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_others" ADD CONSTRAINT "veranda_palazzo_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_others" ADD CONSTRAINT "veranda_palazzo_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo" ADD CONSTRAINT "veranda_palazzo_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_palazzo" ADD CONSTRAINT "veranda_palazzo_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_palazzo" ADD CONSTRAINT "veranda_palazzo_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_locales" ADD CONSTRAINT "veranda_palazzo_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_specs" ADD CONSTRAINT "veranda_pext_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_intro_bullets" ADD CONSTRAINT "veranda_pext_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_features" ADD CONSTRAINT "veranda_pext_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_gallery" ADD CONSTRAINT "veranda_pext_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pext_gallery" ADD CONSTRAINT "veranda_pext_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_others" ADD CONSTRAINT "veranda_pext_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pext_others" ADD CONSTRAINT "veranda_pext_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext" ADD CONSTRAINT "veranda_pext_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pext" ADD CONSTRAINT "veranda_pext_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pext" ADD CONSTRAINT "veranda_pext_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pext_locales" ADD CONSTRAINT "veranda_pext_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "veranda_palazzo_specs_order_idx" ON "veranda_palazzo_specs" USING btree ("_order");
  CREATE INDEX "veranda_palazzo_specs_parent_id_idx" ON "veranda_palazzo_specs" USING btree ("_parent_id");
  CREATE INDEX "veranda_palazzo_specs_locale_idx" ON "veranda_palazzo_specs" USING btree ("_locale");
  CREATE INDEX "veranda_palazzo_intro_bullets_order_idx" ON "veranda_palazzo_intro_bullets" USING btree ("_order");
  CREATE INDEX "veranda_palazzo_intro_bullets_parent_id_idx" ON "veranda_palazzo_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "veranda_palazzo_intro_bullets_locale_idx" ON "veranda_palazzo_intro_bullets" USING btree ("_locale");
  CREATE INDEX "veranda_palazzo_features_order_idx" ON "veranda_palazzo_features" USING btree ("_order");
  CREATE INDEX "veranda_palazzo_features_parent_id_idx" ON "veranda_palazzo_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_palazzo_features_locale_idx" ON "veranda_palazzo_features" USING btree ("_locale");
  CREATE INDEX "veranda_palazzo_gallery_order_idx" ON "veranda_palazzo_gallery" USING btree ("_order");
  CREATE INDEX "veranda_palazzo_gallery_parent_id_idx" ON "veranda_palazzo_gallery" USING btree ("_parent_id");
  CREATE INDEX "veranda_palazzo_gallery_locale_idx" ON "veranda_palazzo_gallery" USING btree ("_locale");
  CREATE INDEX "veranda_palazzo_gallery_image_idx" ON "veranda_palazzo_gallery" USING btree ("image_id");
  CREATE INDEX "veranda_palazzo_others_order_idx" ON "veranda_palazzo_others" USING btree ("_order");
  CREATE INDEX "veranda_palazzo_others_parent_id_idx" ON "veranda_palazzo_others" USING btree ("_parent_id");
  CREATE INDEX "veranda_palazzo_others_locale_idx" ON "veranda_palazzo_others" USING btree ("_locale");
  CREATE INDEX "veranda_palazzo_others_image_idx" ON "veranda_palazzo_others" USING btree ("image_id");
  CREATE INDEX "veranda_palazzo_hero_image_idx" ON "veranda_palazzo" USING btree ("hero_image_id");
  CREATE INDEX "veranda_palazzo_intro_image_idx" ON "veranda_palazzo" USING btree ("intro_image_id");
  CREATE INDEX "veranda_palazzo_ombouw_image_idx" ON "veranda_palazzo" USING btree ("ombouw_image_id");
  CREATE UNIQUE INDEX "veranda_palazzo_locales_locale_parent_id_unique" ON "veranda_palazzo_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "veranda_pext_specs_order_idx" ON "veranda_pext_specs" USING btree ("_order");
  CREATE INDEX "veranda_pext_specs_parent_id_idx" ON "veranda_pext_specs" USING btree ("_parent_id");
  CREATE INDEX "veranda_pext_specs_locale_idx" ON "veranda_pext_specs" USING btree ("_locale");
  CREATE INDEX "veranda_pext_intro_bullets_order_idx" ON "veranda_pext_intro_bullets" USING btree ("_order");
  CREATE INDEX "veranda_pext_intro_bullets_parent_id_idx" ON "veranda_pext_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "veranda_pext_intro_bullets_locale_idx" ON "veranda_pext_intro_bullets" USING btree ("_locale");
  CREATE INDEX "veranda_pext_features_order_idx" ON "veranda_pext_features" USING btree ("_order");
  CREATE INDEX "veranda_pext_features_parent_id_idx" ON "veranda_pext_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_pext_features_locale_idx" ON "veranda_pext_features" USING btree ("_locale");
  CREATE INDEX "veranda_pext_gallery_order_idx" ON "veranda_pext_gallery" USING btree ("_order");
  CREATE INDEX "veranda_pext_gallery_parent_id_idx" ON "veranda_pext_gallery" USING btree ("_parent_id");
  CREATE INDEX "veranda_pext_gallery_locale_idx" ON "veranda_pext_gallery" USING btree ("_locale");
  CREATE INDEX "veranda_pext_gallery_image_idx" ON "veranda_pext_gallery" USING btree ("image_id");
  CREATE INDEX "veranda_pext_others_order_idx" ON "veranda_pext_others" USING btree ("_order");
  CREATE INDEX "veranda_pext_others_parent_id_idx" ON "veranda_pext_others" USING btree ("_parent_id");
  CREATE INDEX "veranda_pext_others_locale_idx" ON "veranda_pext_others" USING btree ("_locale");
  CREATE INDEX "veranda_pext_others_image_idx" ON "veranda_pext_others" USING btree ("image_id");
  CREATE INDEX "veranda_pext_hero_image_idx" ON "veranda_pext" USING btree ("hero_image_id");
  CREATE INDEX "veranda_pext_intro_image_idx" ON "veranda_pext" USING btree ("intro_image_id");
  CREATE INDEX "veranda_pext_ombouw_image_idx" ON "veranda_pext" USING btree ("ombouw_image_id");
  CREATE UNIQUE INDEX "veranda_pext_locales_locale_parent_id_unique" ON "veranda_pext_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "veranda_palazzo_specs" CASCADE;
  DROP TABLE "veranda_palazzo_intro_bullets" CASCADE;
  DROP TABLE "veranda_palazzo_features" CASCADE;
  DROP TABLE "veranda_palazzo_gallery" CASCADE;
  DROP TABLE "veranda_palazzo_others" CASCADE;
  DROP TABLE "veranda_palazzo" CASCADE;
  DROP TABLE "veranda_palazzo_locales" CASCADE;
  DROP TABLE "veranda_pext_specs" CASCADE;
  DROP TABLE "veranda_pext_intro_bullets" CASCADE;
  DROP TABLE "veranda_pext_features" CASCADE;
  DROP TABLE "veranda_pext_gallery" CASCADE;
  DROP TABLE "veranda_pext_others" CASCADE;
  DROP TABLE "veranda_pext" CASCADE;
  DROP TABLE "veranda_pext_locales" CASCADE;`)
}
