import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "veranda_s_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"tag" varchar,
  	"desc" varchar,
  	"badge" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_s" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Onze specialiteit',
  	"hero_title" varchar DEFAULT 'Uw veranda, op maat gemaakt' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een veranda van Veranda Zeeland is een investering in comfort en woonplezier. Wij leveren de hoogwaardige aluminium veranda''s van Verasol, in Duitsland geproduceerd en volledig op maat. Vijf productlijnen, van betaalbaar tot exclusief design, inclusief inmeten en montage door ons eigen team.',
  	"hero_image_id" integer,
  	"lines_heading" varchar DEFAULT 'De vijf productlijnen van Verasol',
  	"lines_intro" varchar DEFAULT 'Van de voordelige Greenline tot de exclusieve Cube. Elke lijn heeft een eigen pagina met alle details, kenmerken en mogelijkheden.',
  	"ombouw_label" varchar DEFAULT 'Meer woonplezier',
  	"ombouw_title" varchar DEFAULT 'Bouw uw veranda om tot tuinkamer',
  	"ombouw_text" varchar DEFAULT 'Met glazen schuifwanden of vaste voor- en zijwanden maakt u van elke Verasol-veranda een volwaardige tuinkamer, het hele jaar te gebruiken.',
  	"ombouw_cta" varchar DEFAULT 'Ontdek tuinkamers →',
  	"ombouw_image_id" integer,
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "veranda_s_lines" ADD CONSTRAINT "veranda_s_lines_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_s_lines" ADD CONSTRAINT "veranda_s_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_s"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_s" ADD CONSTRAINT "veranda_s_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_s" ADD CONSTRAINT "veranda_s_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "veranda_s_lines_order_idx" ON "veranda_s_lines" USING btree ("_order");
  CREATE INDEX "veranda_s_lines_parent_id_idx" ON "veranda_s_lines" USING btree ("_parent_id");
  CREATE INDEX "veranda_s_lines_image_idx" ON "veranda_s_lines" USING btree ("image_id");
  CREATE INDEX "veranda_s_hero_image_idx" ON "veranda_s" USING btree ("hero_image_id");
  CREATE INDEX "veranda_s_ombouw_image_idx" ON "veranda_s" USING btree ("ombouw_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "veranda_s_lines" CASCADE;
  DROP TABLE "veranda_s" CASCADE;`)
}
