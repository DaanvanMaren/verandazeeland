import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "veranda_greenline_other_models" CASCADE;
  DROP TABLE "veranda_cube_other_models" CASCADE;
  DROP TABLE "veranda_palazzo_other_models" CASCADE;
  DROP TABLE "palazzo_sqope_other_models" CASCADE;
  DROP TABLE "palazzo_lamellendak_other_models" CASCADE;
  DROP TABLE "veranda_pext_other_models" CASCADE;
  DROP TABLE "pext_veranda_other_models" CASCADE;
  DROP TABLE "pext_lichtstraat_other_models" CASCADE;
  ALTER TABLE "veranda_greenline" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_profiline" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_linea" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_cube" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_pergola" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_palazzo" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "palazzo_sqope" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "palazzo_lamellendak" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_pext" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "pext_veranda" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "pext_lichtstraat" ADD COLUMN "show_other_models" boolean DEFAULT true;
  ALTER TABLE "veranda_greenline_locales" DROP COLUMN "other_title";
  ALTER TABLE "veranda_cube_locales" DROP COLUMN "others_title";
  ALTER TABLE "veranda_palazzo_locales" DROP COLUMN "others_title";
  ALTER TABLE "palazzo_sqope_locales" DROP COLUMN "others_title";
  ALTER TABLE "palazzo_lamellendak_locales" DROP COLUMN "others_title";
  ALTER TABLE "veranda_pext_locales" DROP COLUMN "others_title";
  ALTER TABLE "pext_veranda_locales" DROP COLUMN "others_title";
  ALTER TABLE "pext_lichtstraat_locales" DROP COLUMN "others_title";
  DROP TYPE "public"."enum_veranda_cube_other_models";
  DROP TYPE "public"."enum_veranda_palazzo_other_models";
  DROP TYPE "public"."enum_palazzo_sqope_other_models";
  DROP TYPE "public"."enum_palazzo_lamellendak_other_models";
  DROP TYPE "public"."enum_veranda_pext_other_models";
  DROP TYPE "public"."enum_pext_veranda_other_models";
  DROP TYPE "public"."enum_pext_lichtstraat_other_models";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_veranda_cube_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_veranda_palazzo_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_palazzo_sqope_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_palazzo_lamellendak_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_veranda_pext_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_pext_veranda_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_pext_lichtstraat_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TABLE "veranda_greenline_other_models" (
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
  
  CREATE TABLE "veranda_cube_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_veranda_cube_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "veranda_palazzo_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_veranda_palazzo_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "palazzo_sqope_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_palazzo_sqope_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "palazzo_lamellendak_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_palazzo_lamellendak_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "veranda_pext_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_veranda_pext_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pext_veranda_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_pext_veranda_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pext_lichtstraat_other_models" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_pext_lichtstraat_other_models",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  ALTER TABLE "veranda_greenline_locales" ADD COLUMN "other_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_cube_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_palazzo_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "palazzo_sqope_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "palazzo_lamellendak_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_pext_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "pext_veranda_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "pext_lichtstraat_locales" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_greenline_other_models" ADD CONSTRAINT "veranda_greenline_other_models_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_greenline_other_models" ADD CONSTRAINT "veranda_greenline_other_models_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube_other_models" ADD CONSTRAINT "veranda_cube_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_other_models" ADD CONSTRAINT "veranda_palazzo_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_other_models" ADD CONSTRAINT "palazzo_sqope_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_other_models" ADD CONSTRAINT "palazzo_lamellendak_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_other_models" ADD CONSTRAINT "veranda_pext_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_other_models" ADD CONSTRAINT "pext_veranda_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_other_models" ADD CONSTRAINT "pext_lichtstraat_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "veranda_greenline_other_models_order_idx" ON "veranda_greenline_other_models" USING btree ("_order");
  CREATE INDEX "veranda_greenline_other_models_parent_id_idx" ON "veranda_greenline_other_models" USING btree ("_parent_id");
  CREATE INDEX "veranda_greenline_other_models_locale_idx" ON "veranda_greenline_other_models" USING btree ("_locale");
  CREATE INDEX "veranda_greenline_other_models_image_idx" ON "veranda_greenline_other_models" USING btree ("image_id");
  CREATE INDEX "veranda_cube_other_models_order_idx" ON "veranda_cube_other_models" USING btree ("order");
  CREATE INDEX "veranda_cube_other_models_parent_idx" ON "veranda_cube_other_models" USING btree ("parent_id");
  CREATE INDEX "veranda_palazzo_other_models_order_idx" ON "veranda_palazzo_other_models" USING btree ("order");
  CREATE INDEX "veranda_palazzo_other_models_parent_idx" ON "veranda_palazzo_other_models" USING btree ("parent_id");
  CREATE INDEX "palazzo_sqope_other_models_order_idx" ON "palazzo_sqope_other_models" USING btree ("order");
  CREATE INDEX "palazzo_sqope_other_models_parent_idx" ON "palazzo_sqope_other_models" USING btree ("parent_id");
  CREATE INDEX "palazzo_lamellendak_other_models_order_idx" ON "palazzo_lamellendak_other_models" USING btree ("order");
  CREATE INDEX "palazzo_lamellendak_other_models_parent_idx" ON "palazzo_lamellendak_other_models" USING btree ("parent_id");
  CREATE INDEX "veranda_pext_other_models_order_idx" ON "veranda_pext_other_models" USING btree ("order");
  CREATE INDEX "veranda_pext_other_models_parent_idx" ON "veranda_pext_other_models" USING btree ("parent_id");
  CREATE INDEX "pext_veranda_other_models_order_idx" ON "pext_veranda_other_models" USING btree ("order");
  CREATE INDEX "pext_veranda_other_models_parent_idx" ON "pext_veranda_other_models" USING btree ("parent_id");
  CREATE INDEX "pext_lichtstraat_other_models_order_idx" ON "pext_lichtstraat_other_models" USING btree ("order");
  CREATE INDEX "pext_lichtstraat_other_models_parent_idx" ON "pext_lichtstraat_other_models" USING btree ("parent_id");
  ALTER TABLE "veranda_greenline" DROP COLUMN "show_other_models";
  ALTER TABLE "veranda_profiline" DROP COLUMN "show_other_models";
  ALTER TABLE "veranda_linea" DROP COLUMN "show_other_models";
  ALTER TABLE "veranda_cube" DROP COLUMN "show_other_models";
  ALTER TABLE "veranda_pergola" DROP COLUMN "show_other_models";
  ALTER TABLE "veranda_palazzo" DROP COLUMN "show_other_models";
  ALTER TABLE "palazzo_sqope" DROP COLUMN "show_other_models";
  ALTER TABLE "palazzo_lamellendak" DROP COLUMN "show_other_models";
  ALTER TABLE "veranda_pext" DROP COLUMN "show_other_models";
  ALTER TABLE "pext_veranda" DROP COLUMN "show_other_models";
  ALTER TABLE "pext_lichtstraat" DROP COLUMN "show_other_models";`)
}
