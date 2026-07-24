import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_veranda_cube_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_veranda_palazzo_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_palazzo_sqope_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_palazzo_lamellendak_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_veranda_pext_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_pext_veranda_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
  CREATE TYPE "public"."enum_pext_lichtstraat_other_models" AS ENUM('veranda-greenline', 'veranda-profiline', 'veranda-linea', 'veranda-cube', 'veranda-pergola', 'palazzo-sqope', 'palazzo-lamellendak', 'pext-veranda', 'pext-lichtstraat');
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
  
  DROP TABLE "veranda_cube_others" CASCADE;
  DROP TABLE "veranda_palazzo_others" CASCADE;
  DROP TABLE "palazzo_sqope_others" CASCADE;
  DROP TABLE "palazzo_lamellendak_others" CASCADE;
  DROP TABLE "veranda_pext_others" CASCADE;
  DROP TABLE "pext_veranda_others" CASCADE;
  DROP TABLE "pext_lichtstraat_others" CASCADE;
  ALTER TABLE "veranda_cube_other_models" ADD CONSTRAINT "veranda_cube_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_other_models" ADD CONSTRAINT "veranda_palazzo_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_other_models" ADD CONSTRAINT "palazzo_sqope_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_other_models" ADD CONSTRAINT "palazzo_lamellendak_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_other_models" ADD CONSTRAINT "veranda_pext_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_other_models" ADD CONSTRAINT "pext_veranda_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_other_models" ADD CONSTRAINT "pext_lichtstraat_other_models_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX "pext_lichtstraat_other_models_parent_idx" ON "pext_lichtstraat_other_models" USING btree ("parent_id");`)

  // Field defaults only apply to NEW global rows; existing prod globals need the
  // curated "andere modellen" seeded so the two brand overview pages keep their
  // sibling cards (the model pages auto-fill by category, so they need no seed).
  await db.execute(sql`
  INSERT INTO "veranda_palazzo_other_models" ("order", "parent_id", "value")
  SELECT v.n, p.id, v.val FROM "veranda_palazzo" p, (VALUES
    (1, 'palazzo-sqope'::enum_veranda_palazzo_other_models),
    (2, 'palazzo-lamellendak'),
    (3, 'veranda-linea'),
    (4, 'veranda-cube')
  ) AS v(n, val);
  INSERT INTO "veranda_pext_other_models" ("order", "parent_id", "value")
  SELECT v.n, p.id, v.val FROM "veranda_pext" p, (VALUES
    (1, 'pext-veranda'::enum_veranda_pext_other_models),
    (2, 'pext-lichtstraat'),
    (3, 'veranda-greenline'),
    (4, 'veranda-cube')
  ) AS v(n, val);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "veranda_cube_others" (
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
  
  DROP TABLE "veranda_cube_other_models" CASCADE;
  DROP TABLE "veranda_palazzo_other_models" CASCADE;
  DROP TABLE "palazzo_sqope_other_models" CASCADE;
  DROP TABLE "palazzo_lamellendak_other_models" CASCADE;
  DROP TABLE "veranda_pext_other_models" CASCADE;
  DROP TABLE "pext_veranda_other_models" CASCADE;
  DROP TABLE "pext_lichtstraat_other_models" CASCADE;
  ALTER TABLE "veranda_cube_others" ADD CONSTRAINT "veranda_cube_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_cube_others" ADD CONSTRAINT "veranda_cube_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_others" ADD CONSTRAINT "veranda_palazzo_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_palazzo_others" ADD CONSTRAINT "veranda_palazzo_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_palazzo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_others" ADD CONSTRAINT "palazzo_sqope_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_sqope_others" ADD CONSTRAINT "palazzo_sqope_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_sqope"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_others" ADD CONSTRAINT "palazzo_lamellendak_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "palazzo_lamellendak_others" ADD CONSTRAINT "palazzo_lamellendak_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."palazzo_lamellendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pext_others" ADD CONSTRAINT "veranda_pext_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pext_others" ADD CONSTRAINT "veranda_pext_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pext"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_veranda_others" ADD CONSTRAINT "pext_veranda_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_veranda_others" ADD CONSTRAINT "pext_veranda_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_veranda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_others" ADD CONSTRAINT "pext_lichtstraat_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pext_lichtstraat_others" ADD CONSTRAINT "pext_lichtstraat_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pext_lichtstraat"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "veranda_cube_others_order_idx" ON "veranda_cube_others" USING btree ("_order");
  CREATE INDEX "veranda_cube_others_parent_id_idx" ON "veranda_cube_others" USING btree ("_parent_id");
  CREATE INDEX "veranda_cube_others_locale_idx" ON "veranda_cube_others" USING btree ("_locale");
  CREATE INDEX "veranda_cube_others_image_idx" ON "veranda_cube_others" USING btree ("image_id");
  CREATE INDEX "veranda_palazzo_others_order_idx" ON "veranda_palazzo_others" USING btree ("_order");
  CREATE INDEX "veranda_palazzo_others_parent_id_idx" ON "veranda_palazzo_others" USING btree ("_parent_id");
  CREATE INDEX "veranda_palazzo_others_locale_idx" ON "veranda_palazzo_others" USING btree ("_locale");
  CREATE INDEX "veranda_palazzo_others_image_idx" ON "veranda_palazzo_others" USING btree ("image_id");
  CREATE INDEX "palazzo_sqope_others_order_idx" ON "palazzo_sqope_others" USING btree ("_order");
  CREATE INDEX "palazzo_sqope_others_parent_id_idx" ON "palazzo_sqope_others" USING btree ("_parent_id");
  CREATE INDEX "palazzo_sqope_others_locale_idx" ON "palazzo_sqope_others" USING btree ("_locale");
  CREATE INDEX "palazzo_sqope_others_image_idx" ON "palazzo_sqope_others" USING btree ("image_id");
  CREATE INDEX "palazzo_lamellendak_others_order_idx" ON "palazzo_lamellendak_others" USING btree ("_order");
  CREATE INDEX "palazzo_lamellendak_others_parent_id_idx" ON "palazzo_lamellendak_others" USING btree ("_parent_id");
  CREATE INDEX "palazzo_lamellendak_others_locale_idx" ON "palazzo_lamellendak_others" USING btree ("_locale");
  CREATE INDEX "palazzo_lamellendak_others_image_idx" ON "palazzo_lamellendak_others" USING btree ("image_id");
  CREATE INDEX "veranda_pext_others_order_idx" ON "veranda_pext_others" USING btree ("_order");
  CREATE INDEX "veranda_pext_others_parent_id_idx" ON "veranda_pext_others" USING btree ("_parent_id");
  CREATE INDEX "veranda_pext_others_locale_idx" ON "veranda_pext_others" USING btree ("_locale");
  CREATE INDEX "veranda_pext_others_image_idx" ON "veranda_pext_others" USING btree ("image_id");
  CREATE INDEX "pext_veranda_others_order_idx" ON "pext_veranda_others" USING btree ("_order");
  CREATE INDEX "pext_veranda_others_parent_id_idx" ON "pext_veranda_others" USING btree ("_parent_id");
  CREATE INDEX "pext_veranda_others_locale_idx" ON "pext_veranda_others" USING btree ("_locale");
  CREATE INDEX "pext_veranda_others_image_idx" ON "pext_veranda_others" USING btree ("image_id");
  CREATE INDEX "pext_lichtstraat_others_order_idx" ON "pext_lichtstraat_others" USING btree ("_order");
  CREATE INDEX "pext_lichtstraat_others_parent_id_idx" ON "pext_lichtstraat_others" USING btree ("_parent_id");
  CREATE INDEX "pext_lichtstraat_others_locale_idx" ON "pext_lichtstraat_others" USING btree ("_locale");
  CREATE INDEX "pext_lichtstraat_others_image_idx" ON "pext_lichtstraat_others" USING btree ("image_id");
  DROP TYPE "public"."enum_veranda_cube_other_models";
  DROP TYPE "public"."enum_veranda_palazzo_other_models";
  DROP TYPE "public"."enum_palazzo_sqope_other_models";
  DROP TYPE "public"."enum_palazzo_lamellendak_other_models";
  DROP TYPE "public"."enum_veranda_pext_other_models";
  DROP TYPE "public"."enum_pext_veranda_other_models";
  DROP TYPE "public"."enum_pext_lichtstraat_other_models";`)
}
