import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "veranda_profiline_models" CASCADE;
  DROP TABLE "veranda_linea_related" CASCADE;
  DROP TABLE "veranda_pergola_related" CASCADE;
  ALTER TABLE "veranda_profiline_locales" DROP COLUMN "models_title";
  ALTER TABLE "veranda_linea_locales" DROP COLUMN "related_title";
  ALTER TABLE "veranda_pergola_locales" DROP COLUMN "related_heading";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "veranda_profiline_models" (
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
  
  CREATE TABLE "veranda_linea_related" (
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
  
  CREATE TABLE "veranda_pergola_related" (
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
  
  ALTER TABLE "veranda_profiline_locales" ADD COLUMN "models_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_linea_locales" ADD COLUMN "related_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_pergola_locales" ADD COLUMN "related_heading" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_profiline_models" ADD CONSTRAINT "veranda_profiline_models_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_profiline_models" ADD CONSTRAINT "veranda_profiline_models_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_profiline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea_related" ADD CONSTRAINT "veranda_linea_related_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_linea_related" ADD CONSTRAINT "veranda_linea_related_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pergola_related" ADD CONSTRAINT "veranda_pergola_related_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pergola_related" ADD CONSTRAINT "veranda_pergola_related_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pergola"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "veranda_profiline_models_order_idx" ON "veranda_profiline_models" USING btree ("_order");
  CREATE INDEX "veranda_profiline_models_parent_id_idx" ON "veranda_profiline_models" USING btree ("_parent_id");
  CREATE INDEX "veranda_profiline_models_locale_idx" ON "veranda_profiline_models" USING btree ("_locale");
  CREATE INDEX "veranda_profiline_models_image_idx" ON "veranda_profiline_models" USING btree ("image_id");
  CREATE INDEX "veranda_linea_related_order_idx" ON "veranda_linea_related" USING btree ("_order");
  CREATE INDEX "veranda_linea_related_parent_id_idx" ON "veranda_linea_related" USING btree ("_parent_id");
  CREATE INDEX "veranda_linea_related_locale_idx" ON "veranda_linea_related" USING btree ("_locale");
  CREATE INDEX "veranda_linea_related_image_idx" ON "veranda_linea_related" USING btree ("image_id");
  CREATE INDEX "veranda_pergola_related_order_idx" ON "veranda_pergola_related" USING btree ("_order");
  CREATE INDEX "veranda_pergola_related_parent_id_idx" ON "veranda_pergola_related" USING btree ("_parent_id");
  CREATE INDEX "veranda_pergola_related_locale_idx" ON "veranda_pergola_related" USING btree ("_locale");
  CREATE INDEX "veranda_pergola_related_image_idx" ON "veranda_pergola_related" USING btree ("image_id");`)
}
