import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "palazzo_sqope_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "palazzo_sqope_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "palazzo_sqope_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "palazzo_sqope_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "palazzo_sqope_others" (
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
  
  CREATE TABLE "palazzo_sqope" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"ombouw_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "palazzo_sqope_locales" (
  	"hero_badge" varchar DEFAULT 'Glasdak',
  	"hero_price" varchar DEFAULT 'Prijs op aanvraag',
  	"hero_title" varchar DEFAULT 'Palazzo Sqope' NOT NULL,
  	"hero_text" varchar DEFAULT 'De Sqope is een kubistische terrasoverkapping met een strak glasdak. Grote glasoppervlakken zorgen voor volop natuurlijk licht en een open gevoel, terwijl de dakliggers netjes zijn weggewerkt in de constructie. Leverbaar als aanbouw of vrijstaand, met een vrije overspanning tot wel 7 meter.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Sqope →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/pallazo-sqope-slide-veranda-zeeland.jpg',
  	"intro_title" varchar DEFAULT 'Strak design, volop licht',
  	"intro_text" varchar DEFAULT 'Scherpe lijnen, een minimalistische uitstraling en grote glasoppervlakken: de Sqope brengt licht en ruimte samen. De geïntegreerde constructie houdt het zicht vrij, dus u geniet ongestoord van uw tuin. Kies de vrijstaande variant voor een lounge- of eethoek midden op het terras, of bouw hem strak aan de gevel.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/pallazo-sqope-boven-veranda-zeeland.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Ander daktype',
  	"ombouw_title" varchar DEFAULT 'Liever een lamellendak?',
  	"ombouw_text" varchar DEFAULT 'Wilt u zelf zon en schaduw kunnen doseren? Bekijk dan het Palazzo lamellendak: draai de lamellen open of dicht, precies naar wens, en blijf ook bij regen droog zitten.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk het lamellendak →',
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg',
  	"gallery_title" varchar DEFAULT 'Sqope in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in een Palazzo Sqope?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "palazzo_lamellendak_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "palazzo_lamellendak_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "palazzo_lamellendak_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "palazzo_lamellendak_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "palazzo_lamellendak_others" (
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
  
  CREATE TABLE "palazzo_lamellendak" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"ombouw_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "palazzo_lamellendak_locales" (
  	"hero_badge" varchar DEFAULT 'Lamellendak',
  	"hero_price" varchar DEFAULT 'Prijs op aanvraag',
  	"hero_title" varchar DEFAULT 'Palazzo Lamellendak' NOT NULL,
  	"hero_text" varchar DEFAULT 'Zelf bepalen hoeveel zon of schaduw u onder uw overkapping wilt? Met het lamellendak van Palazzo draait u de lamellen simpelweg open of dicht. Strak, kubistisch design en het hele jaar door een aangenaam terras.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte lamellendak →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg',
  	"intro_title" varchar DEFAULT 'Zelf de baas over zon en schaduw',
  	"intro_text" varchar DEFAULT 'Het lamellendak van Palazzo is heerlijk veelzijdig: dicht voor schaduw, open voor volop licht. Doordat warme lucht tussen de lamellen ontsnapt, blijft het er ook op een warme dag prettig toeven. En regent het? Dan sluiten de aluminium lamellen waterdicht en voeren ze het water netjes af via de goten. De dakliggers zijn weggewerkt in de constructie, dus u houdt een rustige, minimalistische uitstraling die bij vrijwel elke woning past.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/pallazzo-lamellendak-oirschot-veranda-zeeland.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Ander daktype',
  	"ombouw_title" varchar DEFAULT 'Liever een glasdak?',
  	"ombouw_text" varchar DEFAULT 'Wilt u juist zo veel mogelijk daglicht? Bekijk dan de Palazzo Sqope: een kubistische overkapping met een strak glasdak en grote glasoppervlakken, in open én gesloten varianten.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk de Sqope →',
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/pallazo-sqope-zij-veranda-zeeland.jpg',
  	"gallery_title" varchar DEFAULT 'Lamellendak in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in een Palazzo lamellendak?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pext_veranda_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pext_veranda_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pext_veranda_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "pext_veranda_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "pext_veranda_others" (
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
  
  CREATE TABLE "pext_veranda" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"ombouw_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "pext_veranda_locales" (
  	"hero_badge" varchar DEFAULT 'Houten veranda',
  	"hero_price" varchar DEFAULT 'Prijs op aanvraag',
  	"hero_title" varchar DEFAULT 'Pext houten veranda' NOT NULL,
  	"hero_text" varchar DEFAULT 'Houdt u van de warme, natuurlijke uitstraling van hout? De Pext veranda combineert robuust Douglas- of larikshout met slanke aluminium beglazingsprofielen. Zo krijgt u het beste van twee werelden: de sfeer van hout én het onderhoudsgemak van aluminium.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Pext →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/pext-overkapping-slide-veranda-zeeland.jpg',
  	"intro_title" varchar DEFAULT 'De warmte van hout, het gemak van aluminium',
  	"intro_text" varchar DEFAULT 'Het dak rust op duurzame aluminium beglazingsprofielen met rubber, gevuld met heldere polycarbonaat- of glasplaten. De profielen werkt u desgewenst weg met aluminium sierkliklijsten, in blank aluminium, antraciet of gebroken wit, precies passend bij uw woning. Kies voor een geïsoleerde uitvoering met grenenhout en HR++ glas voor een warme tuinkamer, of een ongeïsoleerde versie met enkellaags veiligheidsglas voor een sfeervolle overkapping of buitenverblijf.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/veranda-hout-pext-veranda-zeeland.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Meer daglicht',
  	"ombouw_title" varchar DEFAULT 'Voeg een Pext lichtstraat toe',
  	"ombouw_text" varchar DEFAULT 'Wilt u nog meer daglicht? Combineer uw Pext veranda met een lichtstraat. Kies uit een lessenaardak, zadeldak of daklicht en haal volop natuurlijk licht naar binnen.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk de lichtstraat →',
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
  
  CREATE TABLE "pext_lichtstraat_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pext_lichtstraat_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pext_lichtstraat_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "pext_lichtstraat_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "pext_lichtstraat_others" (
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
  
  CREATE TABLE "pext_lichtstraat" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"intro_image_id" integer,
  	"ombouw_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "pext_lichtstraat_locales" (
  	"hero_badge" varchar DEFAULT 'Lichtstraat',
  	"hero_price" varchar DEFAULT 'Prijs op aanvraag',
  	"hero_title" varchar DEFAULT 'Pext lichtstraat' NOT NULL,
  	"hero_text" varchar DEFAULT 'Meer daglicht in huis? Een Pext lichtstraat haalt volop natuurlijk licht naar binnen en laat elke ruimte direct groter ogen. Verkrijgbaar in drie uitvoeringen, het lessenaardak, het zadeldak en het daklicht, en zowel geïsoleerd als ongeïsoleerd.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte lichtstraat →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg',
  	"intro_title" varchar DEFAULT 'Waarom een lichtstraat?',
  	"intro_text" varchar DEFAULT 'Een lichtstraat brengt volop daglicht op plekken waar dat anders lastig is. Uw kamer oogt meteen ruimer en lichter, en het geeft uw woning bovendien extra waarde. Kies een geïsoleerde uitvoering met grenenhout en HR++ glas voor woonruimtes, of een ongeïsoleerde met enkellaags veiligheidsglas voor een overkapping of buitenverblijf.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/lichtstraat-zadeldak-schuin-pext-veranda-zeeland.jpg',
  	"features_title" varchar DEFAULT 'De drie uitvoeringen',
  	"ombouw_label" varchar DEFAULT 'De basis',
  	"ombouw_title" varchar DEFAULT 'Combineer met een Pext veranda',
  	"ombouw_text" varchar DEFAULT 'Een lichtstraat komt het best tot zijn recht op een Pext houten veranda, maar u plaatst hem net zo goed los op uw bestaande woning of aanbouw.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk de Pext veranda →',
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/veranda-hout-pext-veranda-zeeland.jpg',
  	"gallery_title" varchar DEFAULT 'Lichtstraat in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in een Pext lichtstraat?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "palazzo_sqope_specs" ADD CONSTRAINT "palazzo_sqope_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_intro_bullets" ADD CONSTRAINT "palazzo_sqope_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_features" ADD CONSTRAINT "palazzo_sqope_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_gallery" ADD CONSTRAINT "palazzo_sqope_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_gallery" ADD CONSTRAINT "palazzo_sqope_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_others" ADD CONSTRAINT "palazzo_sqope_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_others" ADD CONSTRAINT "palazzo_sqope_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope" ADD CONSTRAINT "palazzo_sqope_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_sqope" ADD CONSTRAINT "palazzo_sqope_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_sqope" ADD CONSTRAINT "palazzo_sqope_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_locales" ADD CONSTRAINT "palazzo_sqope_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_specs" ADD CONSTRAINT "palazzo_lamellendak_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_intro_bullets" ADD CONSTRAINT "palazzo_lamellendak_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_features" ADD CONSTRAINT "palazzo_lamellendak_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_gallery" ADD CONSTRAINT "palazzo_lamellendak_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_gallery" ADD CONSTRAINT "palazzo_lamellendak_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_others" ADD CONSTRAINT "palazzo_lamellendak_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_others" ADD CONSTRAINT "palazzo_lamellendak_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak" ADD CONSTRAINT "palazzo_lamellendak_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak" ADD CONSTRAINT "palazzo_lamellendak_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak" ADD CONSTRAINT "palazzo_lamellendak_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_locales" ADD CONSTRAINT "palazzo_lamellendak_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_specs" ADD CONSTRAINT "pext_veranda_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_intro_bullets" ADD CONSTRAINT "pext_veranda_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_features" ADD CONSTRAINT "pext_veranda_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_gallery" ADD CONSTRAINT "pext_veranda_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_veranda_gallery" ADD CONSTRAINT "pext_veranda_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_others" ADD CONSTRAINT "pext_veranda_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_veranda_others" ADD CONSTRAINT "pext_veranda_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda" ADD CONSTRAINT "pext_veranda_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_veranda" ADD CONSTRAINT "pext_veranda_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_veranda" ADD CONSTRAINT "pext_veranda_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_veranda_locales" ADD CONSTRAINT "pext_veranda_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_specs" ADD CONSTRAINT "pext_lichtstraat_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_intro_bullets" ADD CONSTRAINT "pext_lichtstraat_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_features" ADD CONSTRAINT "pext_lichtstraat_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_gallery" ADD CONSTRAINT "pext_lichtstraat_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_gallery" ADD CONSTRAINT "pext_lichtstraat_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_others" ADD CONSTRAINT "pext_lichtstraat_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_others" ADD CONSTRAINT "pext_lichtstraat_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat" ADD CONSTRAINT "pext_lichtstraat_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat" ADD CONSTRAINT "pext_lichtstraat_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat" ADD CONSTRAINT "pext_lichtstraat_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_locales" ADD CONSTRAINT "pext_lichtstraat_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "palazzo_sqope_specs_order_idx" ON "palazzo_sqope_specs" USING btree ("_order");
  CREATE INDEX "palazzo_sqope_specs_parent_id_idx" ON "palazzo_sqope_specs" USING btree ("_parent_id");
  CREATE INDEX "palazzo_sqope_specs_locale_idx" ON "palazzo_sqope_specs" USING btree ("_locale");
  CREATE INDEX "palazzo_sqope_intro_bullets_order_idx" ON "palazzo_sqope_intro_bullets" USING btree ("_order");
  CREATE INDEX "palazzo_sqope_intro_bullets_parent_id_idx" ON "palazzo_sqope_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "palazzo_sqope_intro_bullets_locale_idx" ON "palazzo_sqope_intro_bullets" USING btree ("_locale");
  CREATE INDEX "palazzo_sqope_features_order_idx" ON "palazzo_sqope_features" USING btree ("_order");
  CREATE INDEX "palazzo_sqope_features_parent_id_idx" ON "palazzo_sqope_features" USING btree ("_parent_id");
  CREATE INDEX "palazzo_sqope_features_locale_idx" ON "palazzo_sqope_features" USING btree ("_locale");
  CREATE INDEX "palazzo_sqope_gallery_order_idx" ON "palazzo_sqope_gallery" USING btree ("_order");
  CREATE INDEX "palazzo_sqope_gallery_parent_id_idx" ON "palazzo_sqope_gallery" USING btree ("_parent_id");
  CREATE INDEX "palazzo_sqope_gallery_locale_idx" ON "palazzo_sqope_gallery" USING btree ("_locale");
  CREATE INDEX "palazzo_sqope_gallery_image_idx" ON "palazzo_sqope_gallery" USING btree ("image_id");
  CREATE INDEX "palazzo_sqope_others_order_idx" ON "palazzo_sqope_others" USING btree ("_order");
  CREATE INDEX "palazzo_sqope_others_parent_id_idx" ON "palazzo_sqope_others" USING btree ("_parent_id");
  CREATE INDEX "palazzo_sqope_others_locale_idx" ON "palazzo_sqope_others" USING btree ("_locale");
  CREATE INDEX "palazzo_sqope_others_image_idx" ON "palazzo_sqope_others" USING btree ("image_id");
  CREATE INDEX "palazzo_sqope_hero_image_idx" ON "palazzo_sqope" USING btree ("hero_image_id");
  CREATE INDEX "palazzo_sqope_intro_image_idx" ON "palazzo_sqope" USING btree ("intro_image_id");
  CREATE INDEX "palazzo_sqope_ombouw_image_idx" ON "palazzo_sqope" USING btree ("ombouw_image_id");
  CREATE UNIQUE INDEX "palazzo_sqope_locales_locale_parent_id_unique" ON "palazzo_sqope_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "palazzo_lamellendak_specs_order_idx" ON "palazzo_lamellendak_specs" USING btree ("_order");
  CREATE INDEX "palazzo_lamellendak_specs_parent_id_idx" ON "palazzo_lamellendak_specs" USING btree ("_parent_id");
  CREATE INDEX "palazzo_lamellendak_specs_locale_idx" ON "palazzo_lamellendak_specs" USING btree ("_locale");
  CREATE INDEX "palazzo_lamellendak_intro_bullets_order_idx" ON "palazzo_lamellendak_intro_bullets" USING btree ("_order");
  CREATE INDEX "palazzo_lamellendak_intro_bullets_parent_id_idx" ON "palazzo_lamellendak_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "palazzo_lamellendak_intro_bullets_locale_idx" ON "palazzo_lamellendak_intro_bullets" USING btree ("_locale");
  CREATE INDEX "palazzo_lamellendak_features_order_idx" ON "palazzo_lamellendak_features" USING btree ("_order");
  CREATE INDEX "palazzo_lamellendak_features_parent_id_idx" ON "palazzo_lamellendak_features" USING btree ("_parent_id");
  CREATE INDEX "palazzo_lamellendak_features_locale_idx" ON "palazzo_lamellendak_features" USING btree ("_locale");
  CREATE INDEX "palazzo_lamellendak_gallery_order_idx" ON "palazzo_lamellendak_gallery" USING btree ("_order");
  CREATE INDEX "palazzo_lamellendak_gallery_parent_id_idx" ON "palazzo_lamellendak_gallery" USING btree ("_parent_id");
  CREATE INDEX "palazzo_lamellendak_gallery_locale_idx" ON "palazzo_lamellendak_gallery" USING btree ("_locale");
  CREATE INDEX "palazzo_lamellendak_gallery_image_idx" ON "palazzo_lamellendak_gallery" USING btree ("image_id");
  CREATE INDEX "palazzo_lamellendak_others_order_idx" ON "palazzo_lamellendak_others" USING btree ("_order");
  CREATE INDEX "palazzo_lamellendak_others_parent_id_idx" ON "palazzo_lamellendak_others" USING btree ("_parent_id");
  CREATE INDEX "palazzo_lamellendak_others_locale_idx" ON "palazzo_lamellendak_others" USING btree ("_locale");
  CREATE INDEX "palazzo_lamellendak_others_image_idx" ON "palazzo_lamellendak_others" USING btree ("image_id");
  CREATE INDEX "palazzo_lamellendak_hero_image_idx" ON "palazzo_lamellendak" USING btree ("hero_image_id");
  CREATE INDEX "palazzo_lamellendak_intro_image_idx" ON "palazzo_lamellendak" USING btree ("intro_image_id");
  CREATE INDEX "palazzo_lamellendak_ombouw_image_idx" ON "palazzo_lamellendak" USING btree ("ombouw_image_id");
  CREATE UNIQUE INDEX "palazzo_lamellendak_locales_locale_parent_id_unique" ON "palazzo_lamellendak_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pext_veranda_specs_order_idx" ON "pext_veranda_specs" USING btree ("_order");
  CREATE INDEX "pext_veranda_specs_parent_id_idx" ON "pext_veranda_specs" USING btree ("_parent_id");
  CREATE INDEX "pext_veranda_specs_locale_idx" ON "pext_veranda_specs" USING btree ("_locale");
  CREATE INDEX "pext_veranda_intro_bullets_order_idx" ON "pext_veranda_intro_bullets" USING btree ("_order");
  CREATE INDEX "pext_veranda_intro_bullets_parent_id_idx" ON "pext_veranda_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "pext_veranda_intro_bullets_locale_idx" ON "pext_veranda_intro_bullets" USING btree ("_locale");
  CREATE INDEX "pext_veranda_features_order_idx" ON "pext_veranda_features" USING btree ("_order");
  CREATE INDEX "pext_veranda_features_parent_id_idx" ON "pext_veranda_features" USING btree ("_parent_id");
  CREATE INDEX "pext_veranda_features_locale_idx" ON "pext_veranda_features" USING btree ("_locale");
  CREATE INDEX "pext_veranda_gallery_order_idx" ON "pext_veranda_gallery" USING btree ("_order");
  CREATE INDEX "pext_veranda_gallery_parent_id_idx" ON "pext_veranda_gallery" USING btree ("_parent_id");
  CREATE INDEX "pext_veranda_gallery_locale_idx" ON "pext_veranda_gallery" USING btree ("_locale");
  CREATE INDEX "pext_veranda_gallery_image_idx" ON "pext_veranda_gallery" USING btree ("image_id");
  CREATE INDEX "pext_veranda_others_order_idx" ON "pext_veranda_others" USING btree ("_order");
  CREATE INDEX "pext_veranda_others_parent_id_idx" ON "pext_veranda_others" USING btree ("_parent_id");
  CREATE INDEX "pext_veranda_others_locale_idx" ON "pext_veranda_others" USING btree ("_locale");
  CREATE INDEX "pext_veranda_others_image_idx" ON "pext_veranda_others" USING btree ("image_id");
  CREATE INDEX "pext_veranda_hero_image_idx" ON "pext_veranda" USING btree ("hero_image_id");
  CREATE INDEX "pext_veranda_intro_image_idx" ON "pext_veranda" USING btree ("intro_image_id");
  CREATE INDEX "pext_veranda_ombouw_image_idx" ON "pext_veranda" USING btree ("ombouw_image_id");
  CREATE UNIQUE INDEX "pext_veranda_locales_locale_parent_id_unique" ON "pext_veranda_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pext_lichtstraat_specs_order_idx" ON "pext_lichtstraat_specs" USING btree ("_order");
  CREATE INDEX "pext_lichtstraat_specs_parent_id_idx" ON "pext_lichtstraat_specs" USING btree ("_parent_id");
  CREATE INDEX "pext_lichtstraat_specs_locale_idx" ON "pext_lichtstraat_specs" USING btree ("_locale");
  CREATE INDEX "pext_lichtstraat_intro_bullets_order_idx" ON "pext_lichtstraat_intro_bullets" USING btree ("_order");
  CREATE INDEX "pext_lichtstraat_intro_bullets_parent_id_idx" ON "pext_lichtstraat_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "pext_lichtstraat_intro_bullets_locale_idx" ON "pext_lichtstraat_intro_bullets" USING btree ("_locale");
  CREATE INDEX "pext_lichtstraat_features_order_idx" ON "pext_lichtstraat_features" USING btree ("_order");
  CREATE INDEX "pext_lichtstraat_features_parent_id_idx" ON "pext_lichtstraat_features" USING btree ("_parent_id");
  CREATE INDEX "pext_lichtstraat_features_locale_idx" ON "pext_lichtstraat_features" USING btree ("_locale");
  CREATE INDEX "pext_lichtstraat_gallery_order_idx" ON "pext_lichtstraat_gallery" USING btree ("_order");
  CREATE INDEX "pext_lichtstraat_gallery_parent_id_idx" ON "pext_lichtstraat_gallery" USING btree ("_parent_id");
  CREATE INDEX "pext_lichtstraat_gallery_locale_idx" ON "pext_lichtstraat_gallery" USING btree ("_locale");
  CREATE INDEX "pext_lichtstraat_gallery_image_idx" ON "pext_lichtstraat_gallery" USING btree ("image_id");
  CREATE INDEX "pext_lichtstraat_others_order_idx" ON "pext_lichtstraat_others" USING btree ("_order");
  CREATE INDEX "pext_lichtstraat_others_parent_id_idx" ON "pext_lichtstraat_others" USING btree ("_parent_id");
  CREATE INDEX "pext_lichtstraat_others_locale_idx" ON "pext_lichtstraat_others" USING btree ("_locale");
  CREATE INDEX "pext_lichtstraat_others_image_idx" ON "pext_lichtstraat_others" USING btree ("image_id");
  CREATE INDEX "pext_lichtstraat_hero_image_idx" ON "pext_lichtstraat" USING btree ("hero_image_id");
  CREATE INDEX "pext_lichtstraat_intro_image_idx" ON "pext_lichtstraat" USING btree ("intro_image_id");
  CREATE INDEX "pext_lichtstraat_ombouw_image_idx" ON "pext_lichtstraat" USING btree ("ombouw_image_id");
  CREATE UNIQUE INDEX "pext_lichtstraat_locales_locale_parent_id_unique" ON "pext_lichtstraat_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "palazzo_sqope_specs" CASCADE;
  DROP TABLE "palazzo_sqope_intro_bullets" CASCADE;
  DROP TABLE "palazzo_sqope_features" CASCADE;
  DROP TABLE "palazzo_sqope_gallery" CASCADE;
  DROP TABLE "palazzo_sqope_others" CASCADE;
  DROP TABLE "palazzo_sqope" CASCADE;
  DROP TABLE "palazzo_sqope_locales" CASCADE;
  DROP TABLE "palazzo_lamellendak_specs" CASCADE;
  DROP TABLE "palazzo_lamellendak_intro_bullets" CASCADE;
  DROP TABLE "palazzo_lamellendak_features" CASCADE;
  DROP TABLE "palazzo_lamellendak_gallery" CASCADE;
  DROP TABLE "palazzo_lamellendak_others" CASCADE;
  DROP TABLE "palazzo_lamellendak" CASCADE;
  DROP TABLE "palazzo_lamellendak_locales" CASCADE;
  DROP TABLE "pext_veranda_specs" CASCADE;
  DROP TABLE "pext_veranda_intro_bullets" CASCADE;
  DROP TABLE "pext_veranda_features" CASCADE;
  DROP TABLE "pext_veranda_gallery" CASCADE;
  DROP TABLE "pext_veranda_others" CASCADE;
  DROP TABLE "pext_veranda" CASCADE;
  DROP TABLE "pext_veranda_locales" CASCADE;
  DROP TABLE "pext_lichtstraat_specs" CASCADE;
  DROP TABLE "pext_lichtstraat_intro_bullets" CASCADE;
  DROP TABLE "pext_lichtstraat_features" CASCADE;
  DROP TABLE "pext_lichtstraat_gallery" CASCADE;
  DROP TABLE "pext_lichtstraat_others" CASCADE;
  DROP TABLE "pext_lichtstraat" CASCADE;
  DROP TABLE "pext_lichtstraat_locales" CASCADE;`)
}
