import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "veranda_prijzen_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_prijzen_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "veranda_prijzen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_prijzen_locales" (
  	"hero_badge" varchar DEFAULT 'Prijzen & indicaties',
  	"hero_title" varchar DEFAULT 'Wat kost een veranda?' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een aluminium veranda van Verasol heeft u al vanaf € 1.259. De uiteindelijke prijs hangt af van de afmetingen, de dakbedekking en de opties die u kiest. Op deze pagina vindt u eerlijke vanafprijzen per productlijn, zodat u vooraf weet waar u aan toe bent — inclusief inmeten en montage door ons eigen team.',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"cta_title" varchar DEFAULT 'Weten wat uw veranda kost?',
  	"cta_text" varchar DEFAULT 'Vraag een vrijblijvende offerte op maat aan — u ontvangt een heldere prijs inclusief inmeten en montage.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_vergunning_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_vergunning_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "veranda_vergunning" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_vergunning_locales" (
  	"hero_badge" varchar DEFAULT 'Regels & vergunningen',
  	"hero_title" varchar DEFAULT 'Heeft u een vergunning nodig voor een veranda?' NOT NULL,
  	"hero_text" varchar DEFAULT 'In de meeste gevallen mag u een veranda aan de achterzijde van uw woning vergunningsvrij plaatsen. Toch zijn er situaties waarin wél een omgevingsvergunning nodig is. Op deze pagina leest u hoe de regels in elkaar zitten en hoe wij u helpen om het goed te regelen.',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"cta_title" varchar DEFAULT 'Eerst zeker weten waar u aan toe bent?',
  	"cta_text" varchar DEFAULT 'Vraag een vrijblijvende offerte aan — bij het inmeten beoordelen we ook meteen de vergunningssituatie van uw woning.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_laten_plaatsen_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_laten_plaatsen_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "veranda_laten_plaatsen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_laten_plaatsen_locales" (
  	"hero_badge" varchar DEFAULT 'Montage & service',
  	"hero_title" varchar DEFAULT 'Veranda laten plaatsen door ons eigen montageteam' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een veranda is zo goed als zijn montage. Daarom werkt Veranda Zeeland niet met onderaannemers: van inmeten tot oplevering wordt alles uitgevoerd door ons eigen, ervaren montageteam. Zo weet u zeker dat uw veranda waterdicht, haaks en netjes wordt opgeleverd.',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"cta_title" varchar DEFAULT 'Uw veranda vakkundig laten plaatsen?',
  	"cta_text" varchar DEFAULT 'Vraag een vrijblijvende offerte aan — inclusief gratis inmeten aan huis en montage door ons eigen team.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_middelburg_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_middelburg_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "veranda_middelburg" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_middelburg_locales" (
  	"hero_badge" varchar DEFAULT 'Uw specialist op Walcheren',
  	"hero_title" varchar DEFAULT 'Veranda kopen in Middelburg' NOT NULL,
  	"hero_text" varchar DEFAULT 'Op zoek naar een veranda in Middelburg? Veranda Zeeland zit om de hoek in Serooskerke — op tien minuten rijden. Wij leveren en monteren de aluminium veranda’s van Verasol in heel Middelburg en omgeving, volledig op maat en met montage door ons eigen team.',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"cta_title" varchar DEFAULT 'Een veranda in Middelburg?',
  	"cta_text" varchar DEFAULT 'Vraag een vrijblijvende offerte aan of kom langs in onze showroom in Serooskerke — op tien minuten van Middelburg.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_goes_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_goes_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "veranda_goes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_goes_locales" (
  	"hero_badge" varchar DEFAULT 'Actief in heel de Bevelanden',
  	"hero_title" varchar DEFAULT 'Veranda kopen in Goes' NOT NULL,
  	"hero_text" varchar DEFAULT 'Woont u in Goes of op de Bevelanden en wilt u langer genieten van uw tuin? Veranda Zeeland levert en monteert de aluminium veranda’s van Verasol in Goes en omgeving — op maat gemaakt, met gratis inmeten aan huis en montage door ons eigen team.',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"cta_title" varchar DEFAULT 'Een veranda in Goes?',
  	"cta_text" varchar DEFAULT 'Vraag een vrijblijvende offerte aan — wij komen gratis bij u thuis in Goes inmeten en adviseren.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_vlissingen_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_vlissingen_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "veranda_vlissingen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_vlissingen_locales" (
  	"hero_badge" varchar DEFAULT 'Gebouwd voor de kust',
  	"hero_title" varchar DEFAULT 'Veranda kopen in Vlissingen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een veranda in Vlissingen moet tegen zeewind en zilte lucht kunnen. De aluminium veranda’s van Verasol zijn daar perfect voor: onderhoudsarm, roestvrij en gepoedercoat voor kustklimaat. Veranda Zeeland levert en monteert ze in heel Vlissingen — vanuit onze showroom in Serooskerke, op een kwartier rijden.',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"cta_title" varchar DEFAULT 'Een veranda in Vlissingen?',
  	"cta_text" varchar DEFAULT 'Vraag een vrijblijvende offerte aan — wij komen gratis inmeten en adviseren over de beste opstelling voor uw kustlocatie.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "veranda_prijzen_sections" ADD CONSTRAINT "veranda_prijzen_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_prijzen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_prijzen_faqs" ADD CONSTRAINT "veranda_prijzen_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_prijzen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_prijzen" ADD CONSTRAINT "veranda_prijzen_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_prijzen_locales" ADD CONSTRAINT "veranda_prijzen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_prijzen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_vergunning_sections" ADD CONSTRAINT "veranda_vergunning_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_vergunning"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_vergunning_faqs" ADD CONSTRAINT "veranda_vergunning_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_vergunning"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_vergunning" ADD CONSTRAINT "veranda_vergunning_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_vergunning_locales" ADD CONSTRAINT "veranda_vergunning_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_vergunning"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_laten_plaatsen_sections" ADD CONSTRAINT "veranda_laten_plaatsen_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_laten_plaatsen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_laten_plaatsen_faqs" ADD CONSTRAINT "veranda_laten_plaatsen_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_laten_plaatsen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_laten_plaatsen" ADD CONSTRAINT "veranda_laten_plaatsen_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_laten_plaatsen_locales" ADD CONSTRAINT "veranda_laten_plaatsen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_laten_plaatsen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_middelburg_sections" ADD CONSTRAINT "veranda_middelburg_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_middelburg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_middelburg_faqs" ADD CONSTRAINT "veranda_middelburg_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_middelburg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_middelburg" ADD CONSTRAINT "veranda_middelburg_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_middelburg_locales" ADD CONSTRAINT "veranda_middelburg_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_middelburg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_goes_sections" ADD CONSTRAINT "veranda_goes_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_goes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_goes_faqs" ADD CONSTRAINT "veranda_goes_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_goes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_goes" ADD CONSTRAINT "veranda_goes_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_goes_locales" ADD CONSTRAINT "veranda_goes_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_goes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_vlissingen_sections" ADD CONSTRAINT "veranda_vlissingen_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_vlissingen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_vlissingen_faqs" ADD CONSTRAINT "veranda_vlissingen_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_vlissingen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_vlissingen" ADD CONSTRAINT "veranda_vlissingen_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_vlissingen_locales" ADD CONSTRAINT "veranda_vlissingen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_vlissingen"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "veranda_prijzen_sections_order_idx" ON "veranda_prijzen_sections" USING btree ("_order");
  CREATE INDEX "veranda_prijzen_sections_parent_id_idx" ON "veranda_prijzen_sections" USING btree ("_parent_id");
  CREATE INDEX "veranda_prijzen_sections_locale_idx" ON "veranda_prijzen_sections" USING btree ("_locale");
  CREATE INDEX "veranda_prijzen_faqs_order_idx" ON "veranda_prijzen_faqs" USING btree ("_order");
  CREATE INDEX "veranda_prijzen_faqs_parent_id_idx" ON "veranda_prijzen_faqs" USING btree ("_parent_id");
  CREATE INDEX "veranda_prijzen_faqs_locale_idx" ON "veranda_prijzen_faqs" USING btree ("_locale");
  CREATE INDEX "veranda_prijzen_hero_image_idx" ON "veranda_prijzen" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "veranda_prijzen_locales_locale_parent_id_unique" ON "veranda_prijzen_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "veranda_vergunning_sections_order_idx" ON "veranda_vergunning_sections" USING btree ("_order");
  CREATE INDEX "veranda_vergunning_sections_parent_id_idx" ON "veranda_vergunning_sections" USING btree ("_parent_id");
  CREATE INDEX "veranda_vergunning_sections_locale_idx" ON "veranda_vergunning_sections" USING btree ("_locale");
  CREATE INDEX "veranda_vergunning_faqs_order_idx" ON "veranda_vergunning_faqs" USING btree ("_order");
  CREATE INDEX "veranda_vergunning_faqs_parent_id_idx" ON "veranda_vergunning_faqs" USING btree ("_parent_id");
  CREATE INDEX "veranda_vergunning_faqs_locale_idx" ON "veranda_vergunning_faqs" USING btree ("_locale");
  CREATE INDEX "veranda_vergunning_hero_image_idx" ON "veranda_vergunning" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "veranda_vergunning_locales_locale_parent_id_unique" ON "veranda_vergunning_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "veranda_laten_plaatsen_sections_order_idx" ON "veranda_laten_plaatsen_sections" USING btree ("_order");
  CREATE INDEX "veranda_laten_plaatsen_sections_parent_id_idx" ON "veranda_laten_plaatsen_sections" USING btree ("_parent_id");
  CREATE INDEX "veranda_laten_plaatsen_sections_locale_idx" ON "veranda_laten_plaatsen_sections" USING btree ("_locale");
  CREATE INDEX "veranda_laten_plaatsen_faqs_order_idx" ON "veranda_laten_plaatsen_faqs" USING btree ("_order");
  CREATE INDEX "veranda_laten_plaatsen_faqs_parent_id_idx" ON "veranda_laten_plaatsen_faqs" USING btree ("_parent_id");
  CREATE INDEX "veranda_laten_plaatsen_faqs_locale_idx" ON "veranda_laten_plaatsen_faqs" USING btree ("_locale");
  CREATE INDEX "veranda_laten_plaatsen_hero_image_idx" ON "veranda_laten_plaatsen" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "veranda_laten_plaatsen_locales_locale_parent_id_unique" ON "veranda_laten_plaatsen_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "veranda_middelburg_sections_order_idx" ON "veranda_middelburg_sections" USING btree ("_order");
  CREATE INDEX "veranda_middelburg_sections_parent_id_idx" ON "veranda_middelburg_sections" USING btree ("_parent_id");
  CREATE INDEX "veranda_middelburg_sections_locale_idx" ON "veranda_middelburg_sections" USING btree ("_locale");
  CREATE INDEX "veranda_middelburg_faqs_order_idx" ON "veranda_middelburg_faqs" USING btree ("_order");
  CREATE INDEX "veranda_middelburg_faqs_parent_id_idx" ON "veranda_middelburg_faqs" USING btree ("_parent_id");
  CREATE INDEX "veranda_middelburg_faqs_locale_idx" ON "veranda_middelburg_faqs" USING btree ("_locale");
  CREATE INDEX "veranda_middelburg_hero_image_idx" ON "veranda_middelburg" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "veranda_middelburg_locales_locale_parent_id_unique" ON "veranda_middelburg_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "veranda_goes_sections_order_idx" ON "veranda_goes_sections" USING btree ("_order");
  CREATE INDEX "veranda_goes_sections_parent_id_idx" ON "veranda_goes_sections" USING btree ("_parent_id");
  CREATE INDEX "veranda_goes_sections_locale_idx" ON "veranda_goes_sections" USING btree ("_locale");
  CREATE INDEX "veranda_goes_faqs_order_idx" ON "veranda_goes_faqs" USING btree ("_order");
  CREATE INDEX "veranda_goes_faqs_parent_id_idx" ON "veranda_goes_faqs" USING btree ("_parent_id");
  CREATE INDEX "veranda_goes_faqs_locale_idx" ON "veranda_goes_faqs" USING btree ("_locale");
  CREATE INDEX "veranda_goes_hero_image_idx" ON "veranda_goes" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "veranda_goes_locales_locale_parent_id_unique" ON "veranda_goes_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "veranda_vlissingen_sections_order_idx" ON "veranda_vlissingen_sections" USING btree ("_order");
  CREATE INDEX "veranda_vlissingen_sections_parent_id_idx" ON "veranda_vlissingen_sections" USING btree ("_parent_id");
  CREATE INDEX "veranda_vlissingen_sections_locale_idx" ON "veranda_vlissingen_sections" USING btree ("_locale");
  CREATE INDEX "veranda_vlissingen_faqs_order_idx" ON "veranda_vlissingen_faqs" USING btree ("_order");
  CREATE INDEX "veranda_vlissingen_faqs_parent_id_idx" ON "veranda_vlissingen_faqs" USING btree ("_parent_id");
  CREATE INDEX "veranda_vlissingen_faqs_locale_idx" ON "veranda_vlissingen_faqs" USING btree ("_locale");
  CREATE INDEX "veranda_vlissingen_hero_image_idx" ON "veranda_vlissingen" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "veranda_vlissingen_locales_locale_parent_id_unique" ON "veranda_vlissingen_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "veranda_prijzen_sections" CASCADE;
  DROP TABLE "veranda_prijzen_faqs" CASCADE;
  DROP TABLE "veranda_prijzen" CASCADE;
  DROP TABLE "veranda_prijzen_locales" CASCADE;
  DROP TABLE "veranda_vergunning_sections" CASCADE;
  DROP TABLE "veranda_vergunning_faqs" CASCADE;
  DROP TABLE "veranda_vergunning" CASCADE;
  DROP TABLE "veranda_vergunning_locales" CASCADE;
  DROP TABLE "veranda_laten_plaatsen_sections" CASCADE;
  DROP TABLE "veranda_laten_plaatsen_faqs" CASCADE;
  DROP TABLE "veranda_laten_plaatsen" CASCADE;
  DROP TABLE "veranda_laten_plaatsen_locales" CASCADE;
  DROP TABLE "veranda_middelburg_sections" CASCADE;
  DROP TABLE "veranda_middelburg_faqs" CASCADE;
  DROP TABLE "veranda_middelburg" CASCADE;
  DROP TABLE "veranda_middelburg_locales" CASCADE;
  DROP TABLE "veranda_goes_sections" CASCADE;
  DROP TABLE "veranda_goes_faqs" CASCADE;
  DROP TABLE "veranda_goes" CASCADE;
  DROP TABLE "veranda_goes_locales" CASCADE;
  DROP TABLE "veranda_vlissingen_sections" CASCADE;
  DROP TABLE "veranda_vlissingen_faqs" CASCADE;
  DROP TABLE "veranda_vlissingen" CASCADE;
  DROP TABLE "veranda_vlissingen_locales" CASCADE;`)
}
