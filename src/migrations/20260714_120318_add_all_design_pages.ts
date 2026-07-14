import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "veranda_greenline_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_greenline_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_greenline_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_greenline_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "veranda_greenline_other_models" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_greenline" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Instapmodel',
  	"hero_price" varchar DEFAULT 'vanaf € 1.259',
  	"hero_title" varchar DEFAULT 'Greenline' NOT NULL,
  	"hero_text" varchar DEFAULT 'De meest voordelige veranda van Verasol: sterk, stijlvol en aantrekkelijk geprijsd. Een slim profielontwerp levert maximale stevigheid met minder materiaal.',
  	"hero_button_primary" varchar DEFAULT 'Offerte Greenline →',
  	"hero_button_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DSC09382.jpg',
  	"intro_title" varchar DEFAULT 'Betaalbare kwaliteit zonder concessies',
  	"intro_text" varchar DEFAULT 'De Greenline bewijst dat een hoogwaardige aluminium veranda niet duur hoeft te zijn. Door het slimme profielontwerp is er minder materiaal nodig terwijl de constructie zeer stevig blijft — met een verstevigde goot zijn zelfs overspanningen tot 7 meter op twee staanders mogelijk. De krasvaste Qualicoat-structuurlak is onderhoudsvriendelijk en milieubewust geproduceerd.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/DSC09397.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"config_label" varchar DEFAULT 'Volledig op maat',
  	"config_title" varchar DEFAULT 'Stel uw Greenline samen',
  	"config_text" varchar DEFAULT 'Kies uw maat, kleur, dakbedekking en voeg opties toe zoals ledverlichting of glazen schuifwanden. Wij rekenen de sterkteberekening voor u door.',
  	"config_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"config_image_id" integer,
  	"config_image_fallback" varchar DEFAULT '/uploads/DSC_4586-HDR.jpg',
  	"gallery_title" varchar DEFAULT 'Greenline in de praktijk',
  	"other_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Greenline?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_profiline_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_profiline_ruimte_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_profiline_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_profiline_models" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_profiline" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Populair',
  	"hero_price" varchar DEFAULT 'vanaf € 2.059',
  	"hero_title" varchar DEFAULT 'Profiline' NOT NULL,
  	"hero_text" varchar DEFAULT 'Onze meest veelzijdige veranda. Dankzij de extra stevige constructie bouwt u breder, dieper en ruimer — met overspanningen tot 7 meter op slechts twee staanders. Volledig op maat en uit te bouwen tot een complete tuinkamer.',
  	"hero_button_primary" varchar DEFAULT 'Offerte Profiline →',
  	"hero_button_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"ruimte_title" varchar DEFAULT 'Meer ruimte, meer vrijheid',
  	"ruimte_text" varchar DEFAULT 'De Profiline heeft een schuin dak dat zorgt voor een ruimtelijk gevoel, prettige lichtinval en natuurlijke waterafvoer. Met de speciale XS-profielen en een verstevigde goot overspant u tot 7 meter op slechts twee staanders, voor een volledig vrij uitzicht zonder paal in het midden. Muurbevestigd, vrijstaand of om een hoek, en met een glasdak tot 4 meter diep.',
  	"ruimte_image_id" integer,
  	"ruimte_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"maat_label" varchar DEFAULT 'Volledig op maat',
  	"maat_title" varchar DEFAULT 'Stel uw Profiline samen',
  	"maat_text" varchar DEFAULT 'Van afmeting, kleur en gootsierlijst tot geïntegreerde verlichting, verwarming, zonwering en glazen schuifwanden — de Profiline groeit mee met uw wensen.',
  	"maat_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"maat_image_id" integer,
  	"maat_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_434_LR.jpg',
  	"models_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Profiline?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_linea_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_linea_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_linea_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "veranda_linea_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "veranda_linea_related" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_linea" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Modern design',
  	"hero_price" varchar DEFAULT 'vanaf € 5.469',
  	"hero_title" varchar DEFAULT 'Linea' NOT NULL,
  	"hero_text" varchar DEFAULT 'Strak en modern met een optisch vlak dak. Ranker en toegankelijker dan de Cube, en daarmee de ideale keuze voor wie design zoekt in een iets zachtere prijsklasse.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Linea →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/linea-hero.jpg',
  	"intro_title" varchar DEFAULT 'Strak design, toegankelijk geprijsd',
  	"intro_text" varchar DEFAULT 'De Linea combineert strakke lijnen met een optisch vlak dak en een moderne uitstraling. Waar de Cube volledig kubistisch en robuust is, houdt de Linea een rankere, lichtere lijn aan. De overkapping sluit perfect aan bij een moderne bouwstijl en behoudt het buitengevoel — zowel aan de gevel als vrijstaand in de tuin.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Linea_Rijssen_VS_20250922_1273.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"opmaat_label" varchar DEFAULT 'Volledig op maat',
  	"opmaat_title" varchar DEFAULT 'Stel uw Linea samen',
  	"opmaat_text" varchar DEFAULT 'Kies dakbedekking, kleur en afmetingen, en vul aan met verlichting, zonwering en glazen schuifwanden voor een complete, moderne tuinkamer.',
  	"opmaat_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"opmaat_image_id" integer,
  	"opmaat_image_fallback" varchar DEFAULT '/uploads/Linea_Rijssen_VS_20250922_1282.jpg',
  	"gallery_title" varchar DEFAULT 'Linea in de praktijk',
  	"related_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Linea?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_cube_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_cube_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_cube_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "veranda_cube_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar,
  	"alt" varchar
  );
  
  CREATE TABLE "veranda_cube_others" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_cube" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Topmodel',
  	"hero_price" varchar DEFAULT 'vanaf € 7.149',
  	"hero_title" varchar DEFAULT 'Cube' NOT NULL,
  	"hero_text" varchar DEFAULT 'Geen standaard overkapping, maar een statement in uw tuin. Strak, kubistisch en met een volledig vlak dak, extra brede staanders en een krachtig ontwerp. Dé keuze voor moderne architectuur en designliefhebbers.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Cube →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/cube-kerk.jpg',
  	"intro_title" varchar DEFAULT 'Een blikvanger in uw tuin',
  	"intro_text" varchar DEFAULT 'De Cube valt direct op met zijn strakke lijnen, extra brede staanders en volledig vlakke dak met onzichtbare dakhelling. Modern, robuust en tot in de puntjes afgewerkt — en dankzij een verstevigde goot mogelijk tot 7 meter breed op slechts twee palen. Een designstatement dat past bij een eigentijdse tuin, en heerlijk om onder te leven.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Volledig op maat',
  	"ombouw_title" varchar DEFAULT 'Stel uw Cube samen',
  	"ombouw_text" varchar DEFAULT 'Bepaal afmetingen, kleur en dakbedekking, en voeg premium opties toe zoals sfeerverlichting, verwarming en frameloze glazen schuifwanden.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"ombouw_image_id" integer,
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/cube-rhenen-b.jpg',
  	"gallery_title" varchar DEFAULT 'Cube in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Cube?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "veranda_pergola_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "veranda_pergola_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "veranda_pergola_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "veranda_pergola_related" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"tag" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "veranda_pergola" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Vrijstaand',
  	"hero_price" varchar DEFAULT 'vanaf € 5.791',
  	"hero_title" varchar DEFAULT 'Pergola-overkapping' NOT NULL,
  	"hero_text" varchar DEFAULT 'Optimale beschutting met een vrijstaande constructie op staanders. Geschikt voor grotere terrassen of situaties waar gevelmontage niet mogelijk is. De Pergola-overkapping combineert zonwering én overkapping in één.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte Pergola →',
  	"hero_secondary_cta" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20250515150039_0478_D.jpg',
  	"intro_title" varchar DEFAULT 'Beschutting midden in de tuin',
  	"intro_text" varchar DEFAULT 'De Pergola-overkapping staat op een eigen constructie met minimaal vier staanders en heeft geen gevel nodig. Daarmee is het dé oplossing voor grote terrassen of tuinen waar bevestiging aan de woning niet kan of niet gewenst is. Zonwering en overkapping werken samen in één systeem, voor schaduw én beschutting waar u maar wilt.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"band_label" varchar DEFAULT 'Volledig op maat',
  	"band_title" varchar DEFAULT 'Stel uw Pergola samen',
  	"band_text" varchar DEFAULT 'Kies afmetingen, kleur en type zonwering, en vul aan met screens, verlichting en verwarming voor een volwaardige buitenkamer.',
  	"band_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"band_image_id" integer,
  	"band_image_fallback" varchar DEFAULT '/uploads/banner-verasol-pergola-verasol.jpg',
  	"related_heading" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Pergola?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "tuinkamers_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"cta" varchar,
  	"href" varchar,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "tuinkamers_usps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "tuinkamers_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "tuinkamers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Het hele jaar buiten',
  	"hero_title" varchar DEFAULT 'Uw tuinkamer, altijd het juiste seizoen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een tuinkamer is een veranda die u met glazen schuifwanden of vaste voor- en zijwanden verder afsluit: beschutter tegen wind en regen, en daardoor langer in het jaar te gebruiken. Omdat Verasol-veranda''s modulair zijn opgebouwd, bouwt u een bestaande veranda stap voor stap uit tot een volwaardige tuinkamer.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"types_label" varchar DEFAULT 'Ontdek de mogelijkheden',
  	"types_heading" varchar DEFAULT '2 type tuinkamers',
  	"types_intro" varchar DEFAULT 'De dakvorm bepaalt de uitstraling van uw tuinkamer. Een hellend dak en een vlak dak geven allebei een ander karakter — wij zetten de verschillen voor u op een rij.',
  	"usp_heading" varchar DEFAULT 'Waarom een tuinkamer?',
  	"usp_intro" varchar DEFAULT 'Alle voordelen van buiten wonen, zonder de nadelen van het weer.',
  	"gallery_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"glas_label" varchar DEFAULT 'Glasschuifwanden',
  	"glas_title" varchar DEFAULT 'Open of dicht, u kiest',
  	"glas_text" varchar DEFAULT 'Combineer uw tuinkamer met glasschuifwanden: in de zomer volledig open, bij wind en regen in enkele seconden dicht. Zo bepaalt u zelf hoe u van uw buitenruimte geniet.',
  	"glas_cta" varchar DEFAULT 'Bekijk glaswanden →',
  	"glas_image_id" integer,
  	"glas_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "tuinkamer_hellend_dak_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "tuinkamer_hellend_dak_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "tuinkamer_hellend_dak_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "tuinkamer_hellend_dak" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Tuinkamer',
  	"hero_title" varchar DEFAULT 'Tuinkamer met hellend dak' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een tuinkamer met een licht hellend dak is de klassieke keuze: ruimtelijk, met veel lichtinval en een natuurlijke waterafvoer. Perfect passend bij zowel moderne als traditionele woningen.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/glazenschuifwanden-2000x800-02.png',
  	"intro_title" varchar DEFAULT 'Ruimtelijk en licht',
  	"intro_text" varchar DEFAULT 'Het schuine dak zorgt voor extra hoogte en een royaal, open gevoel. Regenwater loopt vanzelf weg via de goot, en de vorm sluit natuurlijk aan op de meeste daklijnen. Op basis van de Greenline of Profiline bouwt u zo een volwaardige, jaarrond bruikbare tuinkamer.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"gallery_heading" varchar DEFAULT 'Hellend dak in de praktijk',
  	"alt_label" varchar DEFAULT 'Ander type?',
  	"alt_title" varchar DEFAULT 'Liever een strak, vlak dak?',
  	"alt_text" varchar DEFAULT 'Een tuinkamer met vlak dak geeft een moderne, kubistische uitstraling. Bekijk de mogelijkheden.',
  	"alt_cta" varchar DEFAULT 'Bekijk vlak dak →',
  	"alt_image_id" integer,
  	"alt_image_fallback" varchar DEFAULT '/uploads/cube-kerk.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "tuinkamer_vlak_dak_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "tuinkamer_vlak_dak_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "tuinkamer_vlak_dak_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "tuinkamer_vlak_dak" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Tuinkamer',
  	"hero_title" varchar DEFAULT 'Tuinkamer met vlak dak' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een tuinkamer met een vlak dak geeft een strakke, moderne en kubistische uitstraling. De ideale keuze voor eigentijdse woningen en wie houdt van clean design.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/banners-2000x800-vlak-2.png',
  	"intro_title" varchar DEFAULT 'Strak en modern',
  	"intro_text" varchar DEFAULT 'Het vlakke dak zorgt voor een minimalistisch silhouet met rechte lijnen en, bij de Cube, volledig verborgen afwatering. Gebaseerd op de Linea of Cube maakt u er een designstatement van dat naadloos aansluit op moderne architectuur — het hele jaar door te gebruiken.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"gallery_title" varchar DEFAULT 'Vlak dak in de praktijk',
  	"alt_label" varchar DEFAULT 'Ander type?',
  	"alt_title" varchar DEFAULT 'Liever een hellend dak?',
  	"alt_text" varchar DEFAULT 'Een tuinkamer met hellend dak is ruimtelijk en licht, met een natuurlijke waterafvoer. Bekijk de mogelijkheden.',
  	"alt_cta" varchar DEFAULT 'Bekijk hellend dak →',
  	"alt_image_id" integer,
  	"alt_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "glazen_schuifwanden_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "glazen_schuifwanden_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "glazen_schuifwanden" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Flexibel wonen buiten',
  	"hero_title" varchar DEFAULT 'Glazen schuifwanden op maat' NOT NULL,
  	"hero_text" varchar DEFAULT 'Met de schuifwanden van Verasol bepaalt u zelf hoeveel openheid of beschutting u wilt. Van frameloze glazen schuifwanden tot aluminium schuifpuien en lamellenwanden: alles op maat gemaakt en passend op vrijwel elke veranda, ook een bestaande. Zo verlengt u uw buitenseizoen met gemak.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"types_heading" varchar DEFAULT 'Onze schuifwanden',
  	"types_intro" varchar DEFAULT '8–10 mm veiligheidsglas · onderrail van slechts 17 mm · glazen schuifwanden vanaf € 285 per meter.',
  	"projects_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"combo_label" varchar DEFAULT 'Combineer slim',
  	"combo_title" varchar DEFAULT 'Perfect met uw veranda',
  	"combo_text" varchar DEFAULT 'Glazen schuifwanden combineren naadloos met alle Verasol-modellen. Samen met een Profiline of Cube veranda creëert u een complete, jaarrond bruikbare buitenkamer.',
  	"combo_cta" varchar DEFAULT 'Bekijk veranda''s →',
  	"combo_image_id" integer,
  	"combo_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "schuifwand_glas_intro_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "schuifwand_glas_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "schuifwand_glas" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Glazen schuifwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Frameloze glazen schuifwanden zonder storende kozijnen, voor een volledig vrij uitzicht. Open in de zomer, in enkele seconden dicht bij wind of regen.',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg',
  	"intro_title" varchar DEFAULT 'Maximaal uitzicht, maximale flexibiliteit',
  	"intro_text" varchar DEFAULT 'De glazen panelen schuiven soepel achter elkaar en worden gemaakt van 8 tot 10 mm veiligheidsglas. Dankzij de onderrail van slechts 17 mm stapt u vrijwel drempelloos naar buiten. Prijs vanaf € 285 per meter.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over glazen schuifwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "schuifwand_aluminium_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point" varchar
  );
  
  CREATE TABLE "schuifwand_aluminium_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "schuifwand_aluminium" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Aluminium schuifpui' NOT NULL,
  	"hero_text" varchar DEFAULT 'Glas in een strak aluminium kozijn: extra stevig, goed te isoleren en met een moderne, rechte lijn. De robuuste keuze om uw veranda volwaardig af te sluiten.',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"intro_title" varchar DEFAULT 'Stevig en strak afgewerkt',
  	"intro_text" varchar DEFAULT 'De aluminium schuifpui combineert de transparantie van glas met de stevigheid van een aluminium frame. Ideaal voor wie de tuinkamer stevig wil isoleren en een strakke uitstraling zoekt, in dezelfde kleur als uw veranda.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over de aluminium schuifpui?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "schuifwand_lamellen_intro_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "schuifwand_lamellen_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "schuifwand_lamellen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Lamellen schuifwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Verstelbare lamellen voor schaduw, privacy en ventilatie. Zet ze open voor frisse lucht en licht, of dicht voor beschutting — u regelt het zelf.',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg',
  	"intro_title" varchar DEFAULT 'Schaduw en privacy op maat',
  	"intro_text" varchar DEFAULT 'Lamellen schuifwanden combineren beschutting met flexibiliteit. De verstelbare lamellen laten lucht door zonder direct inkijk, en zijn er in een strakke of houtlook-uitvoering die mooi aansluit op uw veranda.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over lamellen schuifwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "schuifwand_steellook_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "schuifwand_steellook_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "schuifwand_steellook" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Steellook schuifwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Het karakteristieke stalen-look design met slanke zwarte profielen en glasverdeling. Industrieel, tijdloos en verrassend licht in aluminium uitgevoerd.',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg',
  	"intro_heading" varchar DEFAULT 'Industrieel karakter',
  	"intro_text" varchar DEFAULT 'Steellook schuifwanden geven uw tuinkamer een stoere, industriële uitstraling met de warme charme van klassieke stalen puien — maar dan onderhoudsarm in aluminium. De slanke profielverdeling maakt er een echte blikvanger van.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over steellook schuifwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "zonwering" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Aangenaam koel',
  	"hero_title" varchar DEFAULT 'Zonwering perfect afgestemd op uw veranda' NOT NULL,
  	"hero_text" varchar DEFAULT 'Van onderdak- en bovendakzonwering tot screens en uitvalschermen: Verasol-zonwering is speciaal ontwikkeld voor veranda''s en tuinkamers. Houd de warmte buiten, creëer schaduw en privacy, en bedien alles met afstandsbediening, app of automatische zon- en windsensoren.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg',
  	"types_heading" varchar DEFAULT 'Type zonwering',
  	"types_intro" varchar DEFAULT 'Voor elke situatie de juiste oplossing.',
  	"projects_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"comfort_label" varchar DEFAULT 'Comfort',
  	"comfort_title" varchar DEFAULT 'Slimme bediening',
  	"comfort_text" varchar DEFAULT 'Bedien uw zonwering met een afstandsbediening, tijdklok of via een app. Met een zonsensor beweegt de zonwering automatisch mee met het weer, altijd de perfecte hoeveelheid schaduw.',
  	"comfort_cta" varchar DEFAULT 'Vraag advies →',
  	"comfort_image_id" integer,
  	"comfort_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_onderdak_intro_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "zonwering_onderdak_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_onderdak" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Onderdakzonwering' NOT NULL,
  	"hero_text" varchar DEFAULT 'Zonwering die onder het dak van uw veranda wordt gemonteerd. Het doek blijft beschermd tegen regen en neerslag en zorgt binnen voor aangename schaduw.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/banner-verasol-pergola-verasol.jpg',
  	"intro_title" varchar DEFAULT 'Beschermd en strak weggewerkt',
  	"intro_text" varchar DEFAULT 'De onderdakzonwering is speciaal ontwikkeld voor veranda’s en tuinkamers. Het scherm zit onder het glas, dus het doek wordt niet aangetast door weer en wind. Elektrisch bediend via schakelaar of handzender, en verkrijgbaar in vele kleuren en dessins.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over onderdakzonwering?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_bovendak_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "zonwering_bovendak_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_bovendak" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Bovendakzonwering' NOT NULL,
  	"hero_text" varchar DEFAULT 'Zonwering boven op het dak van uw veranda. Groot voordeel: de warmte wordt tegengehouden vóór het glas, zodat het onder de veranda merkbaar koeler blijft.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"intro_title" varchar DEFAULT 'Houd de warmte buiten',
  	"intro_text" varchar DEFAULT 'Bovendakzonwering vangt de zon op vóór die het glas bereikt, waardoor de ruimte eronder veel minder opwarmt dan bij onderdakzonwering. Geschikt voor alle Verasol-veranda’s en tuinkamers, en volledig op maat leverbaar.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over bovendakzonwering?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_screens_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "zonwering_screens_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_screens" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Screens' NOT NULL,
  	"hero_text" varchar DEFAULT 'Verticale ritsdoeken die langs de zijkanten door een geleiding lopen. Windvast, zonwerend en ideaal als flexibele zij- of voorwand van uw veranda.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"intro_title" varchar DEFAULT 'Windvast en veelzijdig',
  	"intro_text" varchar DEFAULT 'Dankzij de supersterke zijgeleiding blijven screens ook bij wind strak staan. Ze houden zon, inkijk en insecten buiten en zijn er in vele kleuren en doeksoorten, met bediening via draaiknop of meerkanaals afstandsbediening.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over screens?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zonwering_uitvalschermen_intro_usps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "zonwering_uitvalschermen_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zonwering_uitvalschermen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Uitvalschermen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Compacte schermen die schuin naar buiten uitvallen en zo schaduw geven voor ramen en gevels — ook op de verdieping. Strak weggewerkt in een cassette.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/greenline-detail.jpg',
  	"intro_title" varchar DEFAULT 'Schaduw voor ramen en gevels',
  	"intro_text" varchar DEFAULT 'Uitvalschermen bieden gerichte schaduw op ramen en gevelpartijen en voorkomen dat ruimtes achter het glas oververhitten. In een strakke cassette weggewerkt en op maat leverbaar in vele kleuren.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over uitvalschermen?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "accessoires_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "accessoires_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"fallback" varchar
  );
  
  CREATE TABLE "accessoires" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Maak het compleet',
  	"hero_title" varchar DEFAULT 'Accessoires voor uw veranda' NOT NULL,
  	"hero_text" varchar DEFAULT 'Maak uw veranda of tuinkamer helemaal af. Kies uw dakbedekking, voeg voor- en zijwanden, LED-verlichting of verwarming toe, en veranker alles met de juiste fundering en afwatering. Alle opties zijn op elkaar en op uw woning afgestemd.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg',
  	"options_heading" varchar DEFAULT 'Opties & accessoires',
  	"options_intro" varchar DEFAULT 'Stel uw veranda helemaal naar wens samen.',
  	"gallery_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"advies_label" varchar DEFAULT 'Advies',
  	"advies_title" varchar DEFAULT 'Wij stellen het samen',
  	"advies_text" varchar DEFAULT 'Niet zeker welke accessoires bij uw veranda passen? Onze adviseurs helpen u graag een compleet pakket samen te stellen dat aansluit op uw wensen en budget.',
  	"advies_cta" varchar DEFAULT 'Plan een bezoek →',
  	"advies_image_id" integer,
  	"advies_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "optie_wanden_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "optie_wanden_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "optie_wanden" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Voor- en zijwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Maak van uw veranda een volwaardige tuinkamer met voor- en zijwanden. Kies uit glazen schuifwanden, aluminium kozijnen, deuren, ramen of dichte delen.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_id" integer,
  	"intro_title" varchar DEFAULT 'Van veranda naar tuinkamer',
  	"intro_text" varchar DEFAULT 'Met de juiste voor- en zijwandensluit u uw veranda helemaal af. Combineer glazen schuifwanden met kozijnen, deuren en ramen tot precies de indeling die bij uw situatie past — het hele jaar door comfortabel.',
  	"intro_image_id" integer,
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over voor- en zijwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "optie_dakbedekking_intro_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "optie_dakbedekking_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "optie_dakbedekking" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Dakbedekking' NOT NULL,
  	"hero_text" varchar DEFAULT 'Kies de dakbedekking die past bij uw wensen: van helder, warmtewerend of opaal polycarbonaat tot gelaagd veiligheidsglas — elk met een eigen lichtbeleving.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
  	"intro_title" varchar DEFAULT 'Licht en warmte in balans',
  	"intro_text" varchar DEFAULT 'De dakbedekking bepaalt hoeveel licht en warmte u binnenlaat. Helder glas voor maximaal uitzicht, opaal voor gedempt licht, of warmtewerend voor koelte in de zomer. Wij adviseren u graag over de beste keuze voor uw situatie.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over dakbedekking?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "optie_ledverlichting_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "optie_ledverlichting_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "optie_ledverlichting" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Ledverlichting' NOT NULL,
  	"hero_text" varchar DEFAULT 'Sfeervolle, dimbare led-spots geïntegreerd in het dak van uw veranda. Energiezuinig en te bedienen op afstand — voor gezellige avonden buiten.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg',
  	"intro_title" varchar DEFAULT 'Sfeer tot in de late uurtjes',
  	"intro_text" varchar DEFAULT 'Geïntegreerde led-spots maken uw veranda ook ’s avonds een fijne plek. De dimbare spots komen in sets van 6 of 9 en zijn strak weggewerkt in de dakconstructie, te bedienen via afstandsbediening of app.',
  	"intro_image_id" integer,
  	"intro_image_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over ledverlichting?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "optie_fundering_intro_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "optie_fundering_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "optie_fundering" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Fundering' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een goede fundering is de basis van een stabiele veranda. Wij verzorgen de juiste fundering voor uw situatie, zodat uw veranda niet verzakt.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_id" integer,
  	"intro_title" varchar DEFAULT 'Een stabiele basis',
  	"intro_text" varchar DEFAULT 'Afhankelijk van de bodem en uw situatie kiezen we de juiste fundering: van betonpoeren tot verstelbare schroefpalen. Zo staat uw veranda of tuinkamer jarenlang stabiel en waterpas, gegarandeerd tegen verzakken.',
  	"intro_image_id" integer,
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over de fundering?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "optie_onderhoud_intro_checklist" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "optie_onderhoud_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "optie_onderhoud" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Onderhoudsproducten' NOT NULL,
  	"hero_text" varchar DEFAULT 'Houd uw veranda jarenlang mooi met de juiste onderhoudsproducten. Speciaal voor aluminium, glas en polycarbonaat — onderhoudsarm, maar niet onderhoudsvrij.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"intro_title" varchar DEFAULT 'Langdurig stralend',
  	"intro_text" varchar DEFAULT 'Aluminium is onderhoudsarm, maar met de juiste reinigingsmiddelen voor glas, polycarbonaat en aluminium blijft uw veranda er jaren als nieuw uitzien. Wij adviseren u graag over het beste onderhoud voor uw materialen.',
  	"intro_image_id" integer,
  	"intro_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over onderhoudsproducten?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"href" varchar,
  	"anchor" varchar
  );
  
  CREATE TABLE "zakelijk_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zakelijk" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Zakelijk & projecten',
  	"hero_title" varchar DEFAULT 'Overkappingen voor uw onderneming' NOT NULL,
  	"hero_text" varchar DEFAULT 'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en de functionaliteit van je pand. Onze veranda''s, tuinkamers, carports en zonwering zijn ontwikkeld als één doordacht systeem, volledig op maat gemaakt in onze eigen fabriek.',
  	"hero_button1" varchar DEFAULT 'Neem contact op →',
  	"hero_button2" varchar DEFAULT 'Plan een gesprek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"sectors_heading" varchar DEFAULT 'Haal meer uit je locatie',
  	"sectors_intro" varchar DEFAULT 'Bij Veranda Zeeland geloven we niet in standaardoplossingen. Voor elke branche een passend systeem.',
  	"steps_heading" varchar DEFAULT 'Onze werkwijze',
  	"band_label" varchar DEFAULT 'Uw partner in Zeeland',
  	"band_title" varchar DEFAULT 'Eén aanspreekpunt, van begin tot eind',
  	"band_text" varchar DEFAULT 'U werkt met vaste contactpersonen die uw project van advies tot oplevering begeleiden. Betrouwbaar, planmatig en met oog voor kwaliteit.',
  	"band_cta" varchar DEFAULT 'Vraag een projectgesprek aan →',
  	"band_image_id" integer,
  	"band_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Een zakelijk project bespreken?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw onderneming.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_horeca_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "zakelijk_horeca" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Horeca & Leisure',
  	"hero_title" varchar DEFAULT 'Meer terras, langer seizoen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Vergroot de bedrijfsruimte van je horecazaak het hele jaar door en behoud het buitengevoel. Een glazen overkapping beschermt tegen kou en regen, terwijl gasten heerlijk buiten blijven zitten vanaf de eerste zonnestralen.',
  	"hero_button1" varchar DEFAULT 'Neem contact op →',
  	"hero_button2" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/foto-horeca.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Met de juiste overkapping wordt je terras een plek waar gasten graag langer blijven zitten, ongeacht het weer."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_kantoren_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zakelijk_kantoren" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Kantoren & Commercieel Vastgoed',
  	"hero_title" varchar DEFAULT 'Haal meer uit je bedrijfspand' NOT NULL,
  	"hero_text" varchar DEFAULT 'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en functionaliteit van je pand. Van representatieve entrees tot beschutte buitenruimtes voor personeel.',
  	"hero_button_primary" varchar DEFAULT 'Neem contact op →',
  	"hero_button_secondary" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Robuuste aluminium systemen, volledig op maat gemaakt in onze eigen fabriek."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_onderwijs_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "zakelijk_onderwijs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Onderwijs & Scholen',
  	"hero_title" varchar DEFAULT 'Veilig, comfortabel en inspirerend' NOT NULL,
  	"hero_text" varchar DEFAULT 'Op een school moet de omgeving veilig, inspirerend en comfortabel zijn. Wij leveren robuuste systemen die ervoor zorgen dat leerlingen zich optimaal kunnen concentreren en dat het buitenterrein functioneler wordt ingezet.',
  	"hero_primary_cta" varchar DEFAULT 'Neem contact op →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/DSC_7667-HDR.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Veilige en duurzame constructies die voldoen aan alle normen en bestand zijn tegen intensief gebruik door leerlingen."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_vakantieparken_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "zakelijk_vakantieparken" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Vakantieparken & Recreatie',
  	"hero_title" varchar DEFAULT 'Comfort dat gasten waarderen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Bied gasten het hele seizoen een beschutte buitenruimte. Onze robuuste, onderhoudsarme systemen zijn bestand tegen intensief gebruik en geven accommodaties een verzorgde, uitnodigende uitstraling.',
  	"hero_primary_cta" varchar DEFAULT 'Neem contact op →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_id" integer,
  	"hero_fallback" varchar DEFAULT '/uploads/6623.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Extra leefruimte die het hele jaar door gebruikt kan worden, voor een verzorgde en uitnodigende beleving."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_zorg_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zakelijk_zorg" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Zorginstellingen',
  	"hero_title" varchar DEFAULT 'Rust, comfort en veiligheid voorop' NOT NULL,
  	"hero_text" varchar DEFAULT 'In de zorg draait alles om welzijn. Met slimme oplossingen zoals overkappingen, glaswanden en zonwering realiseer je comfortabele, toegankelijke en beschutte binnen- en buitenruimtes voor bewoners, cliënten en medewerkers.',
  	"hero_button1" varchar DEFAULT 'Neem contact op →',
  	"hero_button2" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Zo ontstaat extra leefruimte die het hele jaar door gebruikt kan worden, veilig en comfortabel."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "zakelijk_projectbouw_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE "zakelijk_projectbouw" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Projectbouw & Ontwikkeling',
  	"hero_title" varchar DEFAULT 'Series op maat voor uw project' NOT NULL,
  	"hero_text" varchar DEFAULT 'Voor woningbouw- en nieuwbouwprojecten leveren we series veranda''s en overkappingen als één doordacht systeem. Robuuste aluminium constructies, volledig op maat gemaakt in onze eigen fabriek en vakkundig gemonteerd.',
  	"hero_button_primary" varchar DEFAULT 'Neem contact op →',
  	"hero_button_secondary" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Van technisch advies en nauwkeurige inmeetservice tot vakkundige montage door onze eigen professionals."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "contact_service_areas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Welkom in Serooskerke',
  	"hero_title" varchar DEFAULT 'Kom langs in onze showroom' NOT NULL,
  	"hero_text" varchar DEFAULT 'Veranda Zeeland is uw complete leverancier van veranda''s, tuinkamers en glasschuifwanden. In onze showroom van 800 m² ervaart u alle modellen in het echt en krijgt u deskundig, vrijblijvend advies op maat.',
  	"hero_image_id" integer,
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"contact_heading" varchar DEFAULT 'Contactgegevens',
  	"address_label" varchar DEFAULT 'Adres',
  	"address_line1" varchar DEFAULT 'De Stekelweie 2',
  	"address_line2" varchar DEFAULT '4353 RX Serooskerke',
  	"phone_label" varchar DEFAULT 'Telefoon',
  	"phone" varchar DEFAULT '0118-853055',
  	"email_label" varchar DEFAULT 'E-mail',
  	"email" varchar DEFAULT 'info@verandazeeland.nl',
  	"hours_label" varchar DEFAULT 'Openingstijden',
  	"hours_days" varchar DEFAULT 'Dinsdag t/m zaterdag',
  	"hours_time" varchar DEFAULT '10.00–17.00 uur',
  	"hours_note" varchar DEFAULT 'Bij voorkeur op afspraak',
  	"contact_image_id" integer,
  	"contact_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"form_heading" varchar DEFAULT 'Vraag een offerte aan',
  	"form_intro" varchar DEFAULT 'Vul het formulier in en wij nemen binnen 2 werkdagen contact met u op.',
  	"form_first_name" varchar DEFAULT 'Voornaam',
  	"form_last_name" varchar DEFAULT 'Achternaam',
  	"form_email" varchar DEFAULT 'E-mailadres',
  	"form_phone" varchar DEFAULT 'Telefoonnummer',
  	"form_interest" varchar DEFAULT 'Ik ben geïnteresseerd in',
  	"form_message" varchar DEFAULT 'Uw bericht',
  	"form_button" varchar DEFAULT 'Verstuur aanvraag →',
  	"form_disclaimer" varchar DEFAULT 'Wij gaan zorgvuldig om met uw gegevens. Zie ons privacybeleid.',
  	"service_heading" varchar DEFAULT 'Actief in heel Zeeland',
  	"service_text" varchar DEFAULT 'Van Walcheren tot Zeeuws-Vlaanderen en de Bevelanden: wij leveren en monteren in de hele provincie.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "veranda_greenline_specs" ADD CONSTRAINT "veranda_greenline_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_greenline_intro_bullets" ADD CONSTRAINT "veranda_greenline_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_greenline_features" ADD CONSTRAINT "veranda_greenline_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_greenline_gallery" ADD CONSTRAINT "veranda_greenline_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_greenline_gallery" ADD CONSTRAINT "veranda_greenline_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_greenline_other_models" ADD CONSTRAINT "veranda_greenline_other_models_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_greenline_other_models" ADD CONSTRAINT "veranda_greenline_other_models_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_greenline" ADD CONSTRAINT "veranda_greenline_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_greenline" ADD CONSTRAINT "veranda_greenline_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_greenline" ADD CONSTRAINT "veranda_greenline_config_image_id_media_id_fk" FOREIGN KEY ("config_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_profiline_stats" ADD CONSTRAINT "veranda_profiline_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_profiline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_profiline_ruimte_points" ADD CONSTRAINT "veranda_profiline_ruimte_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_profiline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_profiline_features" ADD CONSTRAINT "veranda_profiline_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_profiline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_profiline_models" ADD CONSTRAINT "veranda_profiline_models_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_profiline_models" ADD CONSTRAINT "veranda_profiline_models_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_profiline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_profiline" ADD CONSTRAINT "veranda_profiline_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_profiline" ADD CONSTRAINT "veranda_profiline_ruimte_image_id_media_id_fk" FOREIGN KEY ("ruimte_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_profiline" ADD CONSTRAINT "veranda_profiline_maat_image_id_media_id_fk" FOREIGN KEY ("maat_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_linea_specs" ADD CONSTRAINT "veranda_linea_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea_intro_points" ADD CONSTRAINT "veranda_linea_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea_features" ADD CONSTRAINT "veranda_linea_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea_gallery" ADD CONSTRAINT "veranda_linea_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_linea_gallery" ADD CONSTRAINT "veranda_linea_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea_related" ADD CONSTRAINT "veranda_linea_related_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_linea_related" ADD CONSTRAINT "veranda_linea_related_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea" ADD CONSTRAINT "veranda_linea_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_linea" ADD CONSTRAINT "veranda_linea_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_linea" ADD CONSTRAINT "veranda_linea_opmaat_image_id_media_id_fk" FOREIGN KEY ("opmaat_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_cube_specs" ADD CONSTRAINT "veranda_cube_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube_intro_bullets" ADD CONSTRAINT "veranda_cube_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube_features" ADD CONSTRAINT "veranda_cube_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube_gallery" ADD CONSTRAINT "veranda_cube_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_cube_gallery" ADD CONSTRAINT "veranda_cube_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube_others" ADD CONSTRAINT "veranda_cube_others_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_cube_others" ADD CONSTRAINT "veranda_cube_others_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube" ADD CONSTRAINT "veranda_cube_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_cube" ADD CONSTRAINT "veranda_cube_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_cube" ADD CONSTRAINT "veranda_cube_ombouw_image_id_media_id_fk" FOREIGN KEY ("ombouw_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pergola_stats" ADD CONSTRAINT "veranda_pergola_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pergola"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pergola_intro_bullets" ADD CONSTRAINT "veranda_pergola_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pergola"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pergola_features" ADD CONSTRAINT "veranda_pergola_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pergola"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pergola_related" ADD CONSTRAINT "veranda_pergola_related_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pergola_related" ADD CONSTRAINT "veranda_pergola_related_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pergola"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pergola" ADD CONSTRAINT "veranda_pergola_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pergola" ADD CONSTRAINT "veranda_pergola_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "veranda_pergola" ADD CONSTRAINT "veranda_pergola_band_image_id_media_id_fk" FOREIGN KEY ("band_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamers_types" ADD CONSTRAINT "tuinkamers_types_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamers_types" ADD CONSTRAINT "tuinkamers_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamers_usps" ADD CONSTRAINT "tuinkamers_usps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamers_gallery" ADD CONSTRAINT "tuinkamers_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamers_gallery" ADD CONSTRAINT "tuinkamers_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamers" ADD CONSTRAINT "tuinkamers_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamers" ADD CONSTRAINT "tuinkamers_glas_image_id_media_id_fk" FOREIGN KEY ("glas_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak_intro_points" ADD CONSTRAINT "tuinkamer_hellend_dak_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_hellend_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak_features" ADD CONSTRAINT "tuinkamer_hellend_dak_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_hellend_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak_gallery" ADD CONSTRAINT "tuinkamer_hellend_dak_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak_gallery" ADD CONSTRAINT "tuinkamer_hellend_dak_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_hellend_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak" ADD CONSTRAINT "tuinkamer_hellend_dak_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak" ADD CONSTRAINT "tuinkamer_hellend_dak_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak" ADD CONSTRAINT "tuinkamer_hellend_dak_alt_image_id_media_id_fk" FOREIGN KEY ("alt_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak_intro_points" ADD CONSTRAINT "tuinkamer_vlak_dak_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_vlak_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak_features" ADD CONSTRAINT "tuinkamer_vlak_dak_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_vlak_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak_gallery" ADD CONSTRAINT "tuinkamer_vlak_dak_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak_gallery" ADD CONSTRAINT "tuinkamer_vlak_dak_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_vlak_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak" ADD CONSTRAINT "tuinkamer_vlak_dak_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak" ADD CONSTRAINT "tuinkamer_vlak_dak_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak" ADD CONSTRAINT "tuinkamer_vlak_dak_alt_image_id_media_id_fk" FOREIGN KEY ("alt_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glazen_schuifwanden_types" ADD CONSTRAINT "glazen_schuifwanden_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glazen_schuifwanden"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glazen_schuifwanden_projects" ADD CONSTRAINT "glazen_schuifwanden_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glazen_schuifwanden_projects" ADD CONSTRAINT "glazen_schuifwanden_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glazen_schuifwanden"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glazen_schuifwanden" ADD CONSTRAINT "glazen_schuifwanden_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glazen_schuifwanden" ADD CONSTRAINT "glazen_schuifwanden_combo_image_id_media_id_fk" FOREIGN KEY ("combo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_glas_intro_list" ADD CONSTRAINT "schuifwand_glas_intro_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_glas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_glas_features" ADD CONSTRAINT "schuifwand_glas_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_glas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_glas" ADD CONSTRAINT "schuifwand_glas_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_glas" ADD CONSTRAINT "schuifwand_glas_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_aluminium_intro_points" ADD CONSTRAINT "schuifwand_aluminium_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_aluminium"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_aluminium_features" ADD CONSTRAINT "schuifwand_aluminium_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_aluminium"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_aluminium" ADD CONSTRAINT "schuifwand_aluminium_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_aluminium" ADD CONSTRAINT "schuifwand_aluminium_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_lamellen_intro_list" ADD CONSTRAINT "schuifwand_lamellen_intro_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_lamellen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_lamellen_features" ADD CONSTRAINT "schuifwand_lamellen_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_lamellen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_lamellen" ADD CONSTRAINT "schuifwand_lamellen_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_lamellen" ADD CONSTRAINT "schuifwand_lamellen_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_steellook_intro_points" ADD CONSTRAINT "schuifwand_steellook_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_steellook"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_steellook_features" ADD CONSTRAINT "schuifwand_steellook_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_steellook"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_steellook" ADD CONSTRAINT "schuifwand_steellook_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "schuifwand_steellook" ADD CONSTRAINT "schuifwand_steellook_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_types" ADD CONSTRAINT "zonwering_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_projects" ADD CONSTRAINT "zonwering_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_projects" ADD CONSTRAINT "zonwering_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering" ADD CONSTRAINT "zonwering_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering" ADD CONSTRAINT "zonwering_comfort_image_id_media_id_fk" FOREIGN KEY ("comfort_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_onderdak_intro_list" ADD CONSTRAINT "zonwering_onderdak_intro_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_onderdak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_onderdak_features" ADD CONSTRAINT "zonwering_onderdak_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_onderdak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_onderdak" ADD CONSTRAINT "zonwering_onderdak_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_onderdak" ADD CONSTRAINT "zonwering_onderdak_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_bovendak_intro_points" ADD CONSTRAINT "zonwering_bovendak_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_bovendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_bovendak_features" ADD CONSTRAINT "zonwering_bovendak_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_bovendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_bovendak" ADD CONSTRAINT "zonwering_bovendak_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_bovendak" ADD CONSTRAINT "zonwering_bovendak_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_screens_intro_bullets" ADD CONSTRAINT "zonwering_screens_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_screens_features" ADD CONSTRAINT "zonwering_screens_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_screens" ADD CONSTRAINT "zonwering_screens_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_screens" ADD CONSTRAINT "zonwering_screens_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_uitvalschermen_intro_usps" ADD CONSTRAINT "zonwering_uitvalschermen_intro_usps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_uitvalschermen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_uitvalschermen_features" ADD CONSTRAINT "zonwering_uitvalschermen_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_uitvalschermen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_uitvalschermen" ADD CONSTRAINT "zonwering_uitvalschermen_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zonwering_uitvalschermen" ADD CONSTRAINT "zonwering_uitvalschermen_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "accessoires_options" ADD CONSTRAINT "accessoires_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."accessoires"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "accessoires_gallery" ADD CONSTRAINT "accessoires_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "accessoires_gallery" ADD CONSTRAINT "accessoires_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."accessoires"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "accessoires" ADD CONSTRAINT "accessoires_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "accessoires" ADD CONSTRAINT "accessoires_advies_image_id_media_id_fk" FOREIGN KEY ("advies_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_wanden_intro_points" ADD CONSTRAINT "optie_wanden_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_wanden"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_wanden_features" ADD CONSTRAINT "optie_wanden_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_wanden"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_wanden" ADD CONSTRAINT "optie_wanden_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_wanden" ADD CONSTRAINT "optie_wanden_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_dakbedekking_intro_points" ADD CONSTRAINT "optie_dakbedekking_intro_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_dakbedekking"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_dakbedekking_features" ADD CONSTRAINT "optie_dakbedekking_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_dakbedekking"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_dakbedekking" ADD CONSTRAINT "optie_dakbedekking_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_dakbedekking" ADD CONSTRAINT "optie_dakbedekking_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_ledverlichting_intro_bullets" ADD CONSTRAINT "optie_ledverlichting_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_ledverlichting"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_ledverlichting_features" ADD CONSTRAINT "optie_ledverlichting_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_ledverlichting"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_ledverlichting" ADD CONSTRAINT "optie_ledverlichting_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_ledverlichting" ADD CONSTRAINT "optie_ledverlichting_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_fundering_intro_list" ADD CONSTRAINT "optie_fundering_intro_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_fundering"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_fundering_features" ADD CONSTRAINT "optie_fundering_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_fundering"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_fundering" ADD CONSTRAINT "optie_fundering_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_fundering" ADD CONSTRAINT "optie_fundering_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_onderhoud_intro_checklist" ADD CONSTRAINT "optie_onderhoud_intro_checklist_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_onderhoud"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_onderhoud_features" ADD CONSTRAINT "optie_onderhoud_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_onderhoud"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_onderhoud" ADD CONSTRAINT "optie_onderhoud_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "optie_onderhoud" ADD CONSTRAINT "optie_onderhoud_intro_image_id_media_id_fk" FOREIGN KEY ("intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_sectors" ADD CONSTRAINT "zakelijk_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_steps" ADD CONSTRAINT "zakelijk_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk" ADD CONSTRAINT "zakelijk_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk" ADD CONSTRAINT "zakelijk_band_image_id_media_id_fk" FOREIGN KEY ("band_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_horeca_benefits" ADD CONSTRAINT "zakelijk_horeca_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_horeca"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_horeca" ADD CONSTRAINT "zakelijk_horeca_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_kantoren_benefits" ADD CONSTRAINT "zakelijk_kantoren_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_kantoren"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_kantoren" ADD CONSTRAINT "zakelijk_kantoren_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_onderwijs_benefits" ADD CONSTRAINT "zakelijk_onderwijs_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_onderwijs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_onderwijs" ADD CONSTRAINT "zakelijk_onderwijs_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_vakantieparken_benefits" ADD CONSTRAINT "zakelijk_vakantieparken_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_vakantieparken"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_vakantieparken" ADD CONSTRAINT "zakelijk_vakantieparken_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_zorg_benefits" ADD CONSTRAINT "zakelijk_zorg_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_zorg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_zorg" ADD CONSTRAINT "zakelijk_zorg_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "zakelijk_projectbouw_benefits" ADD CONSTRAINT "zakelijk_projectbouw_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_projectbouw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_projectbouw" ADD CONSTRAINT "zakelijk_projectbouw_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_stats" ADD CONSTRAINT "contact_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_service_areas" ADD CONSTRAINT "contact_service_areas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact" ADD CONSTRAINT "contact_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact" ADD CONSTRAINT "contact_contact_image_id_media_id_fk" FOREIGN KEY ("contact_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "veranda_greenline_specs_order_idx" ON "veranda_greenline_specs" USING btree ("_order");
  CREATE INDEX "veranda_greenline_specs_parent_id_idx" ON "veranda_greenline_specs" USING btree ("_parent_id");
  CREATE INDEX "veranda_greenline_intro_bullets_order_idx" ON "veranda_greenline_intro_bullets" USING btree ("_order");
  CREATE INDEX "veranda_greenline_intro_bullets_parent_id_idx" ON "veranda_greenline_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "veranda_greenline_features_order_idx" ON "veranda_greenline_features" USING btree ("_order");
  CREATE INDEX "veranda_greenline_features_parent_id_idx" ON "veranda_greenline_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_greenline_gallery_order_idx" ON "veranda_greenline_gallery" USING btree ("_order");
  CREATE INDEX "veranda_greenline_gallery_parent_id_idx" ON "veranda_greenline_gallery" USING btree ("_parent_id");
  CREATE INDEX "veranda_greenline_gallery_image_idx" ON "veranda_greenline_gallery" USING btree ("image_id");
  CREATE INDEX "veranda_greenline_other_models_order_idx" ON "veranda_greenline_other_models" USING btree ("_order");
  CREATE INDEX "veranda_greenline_other_models_parent_id_idx" ON "veranda_greenline_other_models" USING btree ("_parent_id");
  CREATE INDEX "veranda_greenline_other_models_image_idx" ON "veranda_greenline_other_models" USING btree ("image_id");
  CREATE INDEX "veranda_greenline_hero_image_idx" ON "veranda_greenline" USING btree ("hero_image_id");
  CREATE INDEX "veranda_greenline_intro_image_idx" ON "veranda_greenline" USING btree ("intro_image_id");
  CREATE INDEX "veranda_greenline_config_image_idx" ON "veranda_greenline" USING btree ("config_image_id");
  CREATE INDEX "veranda_profiline_stats_order_idx" ON "veranda_profiline_stats" USING btree ("_order");
  CREATE INDEX "veranda_profiline_stats_parent_id_idx" ON "veranda_profiline_stats" USING btree ("_parent_id");
  CREATE INDEX "veranda_profiline_ruimte_points_order_idx" ON "veranda_profiline_ruimte_points" USING btree ("_order");
  CREATE INDEX "veranda_profiline_ruimte_points_parent_id_idx" ON "veranda_profiline_ruimte_points" USING btree ("_parent_id");
  CREATE INDEX "veranda_profiline_features_order_idx" ON "veranda_profiline_features" USING btree ("_order");
  CREATE INDEX "veranda_profiline_features_parent_id_idx" ON "veranda_profiline_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_profiline_models_order_idx" ON "veranda_profiline_models" USING btree ("_order");
  CREATE INDEX "veranda_profiline_models_parent_id_idx" ON "veranda_profiline_models" USING btree ("_parent_id");
  CREATE INDEX "veranda_profiline_models_image_idx" ON "veranda_profiline_models" USING btree ("image_id");
  CREATE INDEX "veranda_profiline_hero_image_idx" ON "veranda_profiline" USING btree ("hero_image_id");
  CREATE INDEX "veranda_profiline_ruimte_image_idx" ON "veranda_profiline" USING btree ("ruimte_image_id");
  CREATE INDEX "veranda_profiline_maat_image_idx" ON "veranda_profiline" USING btree ("maat_image_id");
  CREATE INDEX "veranda_linea_specs_order_idx" ON "veranda_linea_specs" USING btree ("_order");
  CREATE INDEX "veranda_linea_specs_parent_id_idx" ON "veranda_linea_specs" USING btree ("_parent_id");
  CREATE INDEX "veranda_linea_intro_points_order_idx" ON "veranda_linea_intro_points" USING btree ("_order");
  CREATE INDEX "veranda_linea_intro_points_parent_id_idx" ON "veranda_linea_intro_points" USING btree ("_parent_id");
  CREATE INDEX "veranda_linea_features_order_idx" ON "veranda_linea_features" USING btree ("_order");
  CREATE INDEX "veranda_linea_features_parent_id_idx" ON "veranda_linea_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_linea_gallery_order_idx" ON "veranda_linea_gallery" USING btree ("_order");
  CREATE INDEX "veranda_linea_gallery_parent_id_idx" ON "veranda_linea_gallery" USING btree ("_parent_id");
  CREATE INDEX "veranda_linea_gallery_image_idx" ON "veranda_linea_gallery" USING btree ("image_id");
  CREATE INDEX "veranda_linea_related_order_idx" ON "veranda_linea_related" USING btree ("_order");
  CREATE INDEX "veranda_linea_related_parent_id_idx" ON "veranda_linea_related" USING btree ("_parent_id");
  CREATE INDEX "veranda_linea_related_image_idx" ON "veranda_linea_related" USING btree ("image_id");
  CREATE INDEX "veranda_linea_hero_image_idx" ON "veranda_linea" USING btree ("hero_image_id");
  CREATE INDEX "veranda_linea_intro_image_idx" ON "veranda_linea" USING btree ("intro_image_id");
  CREATE INDEX "veranda_linea_opmaat_image_idx" ON "veranda_linea" USING btree ("opmaat_image_id");
  CREATE INDEX "veranda_cube_specs_order_idx" ON "veranda_cube_specs" USING btree ("_order");
  CREATE INDEX "veranda_cube_specs_parent_id_idx" ON "veranda_cube_specs" USING btree ("_parent_id");
  CREATE INDEX "veranda_cube_intro_bullets_order_idx" ON "veranda_cube_intro_bullets" USING btree ("_order");
  CREATE INDEX "veranda_cube_intro_bullets_parent_id_idx" ON "veranda_cube_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "veranda_cube_features_order_idx" ON "veranda_cube_features" USING btree ("_order");
  CREATE INDEX "veranda_cube_features_parent_id_idx" ON "veranda_cube_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_cube_gallery_order_idx" ON "veranda_cube_gallery" USING btree ("_order");
  CREATE INDEX "veranda_cube_gallery_parent_id_idx" ON "veranda_cube_gallery" USING btree ("_parent_id");
  CREATE INDEX "veranda_cube_gallery_image_idx" ON "veranda_cube_gallery" USING btree ("image_id");
  CREATE INDEX "veranda_cube_others_order_idx" ON "veranda_cube_others" USING btree ("_order");
  CREATE INDEX "veranda_cube_others_parent_id_idx" ON "veranda_cube_others" USING btree ("_parent_id");
  CREATE INDEX "veranda_cube_others_image_idx" ON "veranda_cube_others" USING btree ("image_id");
  CREATE INDEX "veranda_cube_hero_image_idx" ON "veranda_cube" USING btree ("hero_image_id");
  CREATE INDEX "veranda_cube_intro_image_idx" ON "veranda_cube" USING btree ("intro_image_id");
  CREATE INDEX "veranda_cube_ombouw_image_idx" ON "veranda_cube" USING btree ("ombouw_image_id");
  CREATE INDEX "veranda_pergola_stats_order_idx" ON "veranda_pergola_stats" USING btree ("_order");
  CREATE INDEX "veranda_pergola_stats_parent_id_idx" ON "veranda_pergola_stats" USING btree ("_parent_id");
  CREATE INDEX "veranda_pergola_intro_bullets_order_idx" ON "veranda_pergola_intro_bullets" USING btree ("_order");
  CREATE INDEX "veranda_pergola_intro_bullets_parent_id_idx" ON "veranda_pergola_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "veranda_pergola_features_order_idx" ON "veranda_pergola_features" USING btree ("_order");
  CREATE INDEX "veranda_pergola_features_parent_id_idx" ON "veranda_pergola_features" USING btree ("_parent_id");
  CREATE INDEX "veranda_pergola_related_order_idx" ON "veranda_pergola_related" USING btree ("_order");
  CREATE INDEX "veranda_pergola_related_parent_id_idx" ON "veranda_pergola_related" USING btree ("_parent_id");
  CREATE INDEX "veranda_pergola_related_image_idx" ON "veranda_pergola_related" USING btree ("image_id");
  CREATE INDEX "veranda_pergola_hero_image_idx" ON "veranda_pergola" USING btree ("hero_image_id");
  CREATE INDEX "veranda_pergola_intro_image_idx" ON "veranda_pergola" USING btree ("intro_image_id");
  CREATE INDEX "veranda_pergola_band_image_idx" ON "veranda_pergola" USING btree ("band_image_id");
  CREATE INDEX "tuinkamers_types_order_idx" ON "tuinkamers_types" USING btree ("_order");
  CREATE INDEX "tuinkamers_types_parent_id_idx" ON "tuinkamers_types" USING btree ("_parent_id");
  CREATE INDEX "tuinkamers_types_image_idx" ON "tuinkamers_types" USING btree ("image_id");
  CREATE INDEX "tuinkamers_usps_order_idx" ON "tuinkamers_usps" USING btree ("_order");
  CREATE INDEX "tuinkamers_usps_parent_id_idx" ON "tuinkamers_usps" USING btree ("_parent_id");
  CREATE INDEX "tuinkamers_gallery_order_idx" ON "tuinkamers_gallery" USING btree ("_order");
  CREATE INDEX "tuinkamers_gallery_parent_id_idx" ON "tuinkamers_gallery" USING btree ("_parent_id");
  CREATE INDEX "tuinkamers_gallery_image_idx" ON "tuinkamers_gallery" USING btree ("image_id");
  CREATE INDEX "tuinkamers_hero_image_idx" ON "tuinkamers" USING btree ("hero_image_id");
  CREATE INDEX "tuinkamers_glas_image_idx" ON "tuinkamers" USING btree ("glas_image_id");
  CREATE INDEX "tuinkamer_hellend_dak_intro_points_order_idx" ON "tuinkamer_hellend_dak_intro_points" USING btree ("_order");
  CREATE INDEX "tuinkamer_hellend_dak_intro_points_parent_id_idx" ON "tuinkamer_hellend_dak_intro_points" USING btree ("_parent_id");
  CREATE INDEX "tuinkamer_hellend_dak_features_order_idx" ON "tuinkamer_hellend_dak_features" USING btree ("_order");
  CREATE INDEX "tuinkamer_hellend_dak_features_parent_id_idx" ON "tuinkamer_hellend_dak_features" USING btree ("_parent_id");
  CREATE INDEX "tuinkamer_hellend_dak_gallery_order_idx" ON "tuinkamer_hellend_dak_gallery" USING btree ("_order");
  CREATE INDEX "tuinkamer_hellend_dak_gallery_parent_id_idx" ON "tuinkamer_hellend_dak_gallery" USING btree ("_parent_id");
  CREATE INDEX "tuinkamer_hellend_dak_gallery_image_idx" ON "tuinkamer_hellend_dak_gallery" USING btree ("image_id");
  CREATE INDEX "tuinkamer_hellend_dak_hero_image_idx" ON "tuinkamer_hellend_dak" USING btree ("hero_image_id");
  CREATE INDEX "tuinkamer_hellend_dak_intro_image_idx" ON "tuinkamer_hellend_dak" USING btree ("intro_image_id");
  CREATE INDEX "tuinkamer_hellend_dak_alt_image_idx" ON "tuinkamer_hellend_dak" USING btree ("alt_image_id");
  CREATE INDEX "tuinkamer_vlak_dak_intro_points_order_idx" ON "tuinkamer_vlak_dak_intro_points" USING btree ("_order");
  CREATE INDEX "tuinkamer_vlak_dak_intro_points_parent_id_idx" ON "tuinkamer_vlak_dak_intro_points" USING btree ("_parent_id");
  CREATE INDEX "tuinkamer_vlak_dak_features_order_idx" ON "tuinkamer_vlak_dak_features" USING btree ("_order");
  CREATE INDEX "tuinkamer_vlak_dak_features_parent_id_idx" ON "tuinkamer_vlak_dak_features" USING btree ("_parent_id");
  CREATE INDEX "tuinkamer_vlak_dak_gallery_order_idx" ON "tuinkamer_vlak_dak_gallery" USING btree ("_order");
  CREATE INDEX "tuinkamer_vlak_dak_gallery_parent_id_idx" ON "tuinkamer_vlak_dak_gallery" USING btree ("_parent_id");
  CREATE INDEX "tuinkamer_vlak_dak_gallery_image_idx" ON "tuinkamer_vlak_dak_gallery" USING btree ("image_id");
  CREATE INDEX "tuinkamer_vlak_dak_hero_image_idx" ON "tuinkamer_vlak_dak" USING btree ("hero_image_id");
  CREATE INDEX "tuinkamer_vlak_dak_intro_image_idx" ON "tuinkamer_vlak_dak" USING btree ("intro_image_id");
  CREATE INDEX "tuinkamer_vlak_dak_alt_image_idx" ON "tuinkamer_vlak_dak" USING btree ("alt_image_id");
  CREATE INDEX "glazen_schuifwanden_types_order_idx" ON "glazen_schuifwanden_types" USING btree ("_order");
  CREATE INDEX "glazen_schuifwanden_types_parent_id_idx" ON "glazen_schuifwanden_types" USING btree ("_parent_id");
  CREATE INDEX "glazen_schuifwanden_projects_order_idx" ON "glazen_schuifwanden_projects" USING btree ("_order");
  CREATE INDEX "glazen_schuifwanden_projects_parent_id_idx" ON "glazen_schuifwanden_projects" USING btree ("_parent_id");
  CREATE INDEX "glazen_schuifwanden_projects_image_idx" ON "glazen_schuifwanden_projects" USING btree ("image_id");
  CREATE INDEX "glazen_schuifwanden_hero_image_idx" ON "glazen_schuifwanden" USING btree ("hero_image_id");
  CREATE INDEX "glazen_schuifwanden_combo_image_idx" ON "glazen_schuifwanden" USING btree ("combo_image_id");
  CREATE INDEX "schuifwand_glas_intro_list_order_idx" ON "schuifwand_glas_intro_list" USING btree ("_order");
  CREATE INDEX "schuifwand_glas_intro_list_parent_id_idx" ON "schuifwand_glas_intro_list" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_glas_features_order_idx" ON "schuifwand_glas_features" USING btree ("_order");
  CREATE INDEX "schuifwand_glas_features_parent_id_idx" ON "schuifwand_glas_features" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_glas_hero_image_idx" ON "schuifwand_glas" USING btree ("hero_image_id");
  CREATE INDEX "schuifwand_glas_intro_image_idx" ON "schuifwand_glas" USING btree ("intro_image_id");
  CREATE INDEX "schuifwand_aluminium_intro_points_order_idx" ON "schuifwand_aluminium_intro_points" USING btree ("_order");
  CREATE INDEX "schuifwand_aluminium_intro_points_parent_id_idx" ON "schuifwand_aluminium_intro_points" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_aluminium_features_order_idx" ON "schuifwand_aluminium_features" USING btree ("_order");
  CREATE INDEX "schuifwand_aluminium_features_parent_id_idx" ON "schuifwand_aluminium_features" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_aluminium_hero_image_idx" ON "schuifwand_aluminium" USING btree ("hero_image_id");
  CREATE INDEX "schuifwand_aluminium_intro_image_idx" ON "schuifwand_aluminium" USING btree ("intro_image_id");
  CREATE INDEX "schuifwand_lamellen_intro_list_order_idx" ON "schuifwand_lamellen_intro_list" USING btree ("_order");
  CREATE INDEX "schuifwand_lamellen_intro_list_parent_id_idx" ON "schuifwand_lamellen_intro_list" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_lamellen_features_order_idx" ON "schuifwand_lamellen_features" USING btree ("_order");
  CREATE INDEX "schuifwand_lamellen_features_parent_id_idx" ON "schuifwand_lamellen_features" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_lamellen_hero_image_idx" ON "schuifwand_lamellen" USING btree ("hero_image_id");
  CREATE INDEX "schuifwand_lamellen_intro_image_idx" ON "schuifwand_lamellen" USING btree ("intro_image_id");
  CREATE INDEX "schuifwand_steellook_intro_points_order_idx" ON "schuifwand_steellook_intro_points" USING btree ("_order");
  CREATE INDEX "schuifwand_steellook_intro_points_parent_id_idx" ON "schuifwand_steellook_intro_points" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_steellook_features_order_idx" ON "schuifwand_steellook_features" USING btree ("_order");
  CREATE INDEX "schuifwand_steellook_features_parent_id_idx" ON "schuifwand_steellook_features" USING btree ("_parent_id");
  CREATE INDEX "schuifwand_steellook_hero_image_idx" ON "schuifwand_steellook" USING btree ("hero_image_id");
  CREATE INDEX "schuifwand_steellook_intro_image_idx" ON "schuifwand_steellook" USING btree ("intro_image_id");
  CREATE INDEX "zonwering_types_order_idx" ON "zonwering_types" USING btree ("_order");
  CREATE INDEX "zonwering_types_parent_id_idx" ON "zonwering_types" USING btree ("_parent_id");
  CREATE INDEX "zonwering_projects_order_idx" ON "zonwering_projects" USING btree ("_order");
  CREATE INDEX "zonwering_projects_parent_id_idx" ON "zonwering_projects" USING btree ("_parent_id");
  CREATE INDEX "zonwering_projects_image_idx" ON "zonwering_projects" USING btree ("image_id");
  CREATE INDEX "zonwering_hero_image_idx" ON "zonwering" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_comfort_image_idx" ON "zonwering" USING btree ("comfort_image_id");
  CREATE INDEX "zonwering_onderdak_intro_list_order_idx" ON "zonwering_onderdak_intro_list" USING btree ("_order");
  CREATE INDEX "zonwering_onderdak_intro_list_parent_id_idx" ON "zonwering_onderdak_intro_list" USING btree ("_parent_id");
  CREATE INDEX "zonwering_onderdak_features_order_idx" ON "zonwering_onderdak_features" USING btree ("_order");
  CREATE INDEX "zonwering_onderdak_features_parent_id_idx" ON "zonwering_onderdak_features" USING btree ("_parent_id");
  CREATE INDEX "zonwering_onderdak_hero_image_idx" ON "zonwering_onderdak" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_onderdak_intro_image_idx" ON "zonwering_onderdak" USING btree ("intro_image_id");
  CREATE INDEX "zonwering_bovendak_intro_points_order_idx" ON "zonwering_bovendak_intro_points" USING btree ("_order");
  CREATE INDEX "zonwering_bovendak_intro_points_parent_id_idx" ON "zonwering_bovendak_intro_points" USING btree ("_parent_id");
  CREATE INDEX "zonwering_bovendak_features_order_idx" ON "zonwering_bovendak_features" USING btree ("_order");
  CREATE INDEX "zonwering_bovendak_features_parent_id_idx" ON "zonwering_bovendak_features" USING btree ("_parent_id");
  CREATE INDEX "zonwering_bovendak_hero_image_idx" ON "zonwering_bovendak" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_bovendak_intro_image_idx" ON "zonwering_bovendak" USING btree ("intro_image_id");
  CREATE INDEX "zonwering_screens_intro_bullets_order_idx" ON "zonwering_screens_intro_bullets" USING btree ("_order");
  CREATE INDEX "zonwering_screens_intro_bullets_parent_id_idx" ON "zonwering_screens_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "zonwering_screens_features_order_idx" ON "zonwering_screens_features" USING btree ("_order");
  CREATE INDEX "zonwering_screens_features_parent_id_idx" ON "zonwering_screens_features" USING btree ("_parent_id");
  CREATE INDEX "zonwering_screens_hero_image_idx" ON "zonwering_screens" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_screens_intro_image_idx" ON "zonwering_screens" USING btree ("intro_image_id");
  CREATE INDEX "zonwering_uitvalschermen_intro_usps_order_idx" ON "zonwering_uitvalschermen_intro_usps" USING btree ("_order");
  CREATE INDEX "zonwering_uitvalschermen_intro_usps_parent_id_idx" ON "zonwering_uitvalschermen_intro_usps" USING btree ("_parent_id");
  CREATE INDEX "zonwering_uitvalschermen_features_order_idx" ON "zonwering_uitvalschermen_features" USING btree ("_order");
  CREATE INDEX "zonwering_uitvalschermen_features_parent_id_idx" ON "zonwering_uitvalschermen_features" USING btree ("_parent_id");
  CREATE INDEX "zonwering_uitvalschermen_hero_image_idx" ON "zonwering_uitvalschermen" USING btree ("hero_image_id");
  CREATE INDEX "zonwering_uitvalschermen_intro_image_idx" ON "zonwering_uitvalschermen" USING btree ("intro_image_id");
  CREATE INDEX "accessoires_options_order_idx" ON "accessoires_options" USING btree ("_order");
  CREATE INDEX "accessoires_options_parent_id_idx" ON "accessoires_options" USING btree ("_parent_id");
  CREATE INDEX "accessoires_gallery_order_idx" ON "accessoires_gallery" USING btree ("_order");
  CREATE INDEX "accessoires_gallery_parent_id_idx" ON "accessoires_gallery" USING btree ("_parent_id");
  CREATE INDEX "accessoires_gallery_image_idx" ON "accessoires_gallery" USING btree ("image_id");
  CREATE INDEX "accessoires_hero_image_idx" ON "accessoires" USING btree ("hero_image_id");
  CREATE INDEX "accessoires_advies_image_idx" ON "accessoires" USING btree ("advies_image_id");
  CREATE INDEX "optie_wanden_intro_points_order_idx" ON "optie_wanden_intro_points" USING btree ("_order");
  CREATE INDEX "optie_wanden_intro_points_parent_id_idx" ON "optie_wanden_intro_points" USING btree ("_parent_id");
  CREATE INDEX "optie_wanden_features_order_idx" ON "optie_wanden_features" USING btree ("_order");
  CREATE INDEX "optie_wanden_features_parent_id_idx" ON "optie_wanden_features" USING btree ("_parent_id");
  CREATE INDEX "optie_wanden_hero_image_idx" ON "optie_wanden" USING btree ("hero_image_id");
  CREATE INDEX "optie_wanden_intro_image_idx" ON "optie_wanden" USING btree ("intro_image_id");
  CREATE INDEX "optie_dakbedekking_intro_points_order_idx" ON "optie_dakbedekking_intro_points" USING btree ("_order");
  CREATE INDEX "optie_dakbedekking_intro_points_parent_id_idx" ON "optie_dakbedekking_intro_points" USING btree ("_parent_id");
  CREATE INDEX "optie_dakbedekking_features_order_idx" ON "optie_dakbedekking_features" USING btree ("_order");
  CREATE INDEX "optie_dakbedekking_features_parent_id_idx" ON "optie_dakbedekking_features" USING btree ("_parent_id");
  CREATE INDEX "optie_dakbedekking_hero_image_idx" ON "optie_dakbedekking" USING btree ("hero_image_id");
  CREATE INDEX "optie_dakbedekking_intro_image_idx" ON "optie_dakbedekking" USING btree ("intro_image_id");
  CREATE INDEX "optie_ledverlichting_intro_bullets_order_idx" ON "optie_ledverlichting_intro_bullets" USING btree ("_order");
  CREATE INDEX "optie_ledverlichting_intro_bullets_parent_id_idx" ON "optie_ledverlichting_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "optie_ledverlichting_features_order_idx" ON "optie_ledverlichting_features" USING btree ("_order");
  CREATE INDEX "optie_ledverlichting_features_parent_id_idx" ON "optie_ledverlichting_features" USING btree ("_parent_id");
  CREATE INDEX "optie_ledverlichting_hero_image_idx" ON "optie_ledverlichting" USING btree ("hero_image_id");
  CREATE INDEX "optie_ledverlichting_intro_image_idx" ON "optie_ledverlichting" USING btree ("intro_image_id");
  CREATE INDEX "optie_fundering_intro_list_order_idx" ON "optie_fundering_intro_list" USING btree ("_order");
  CREATE INDEX "optie_fundering_intro_list_parent_id_idx" ON "optie_fundering_intro_list" USING btree ("_parent_id");
  CREATE INDEX "optie_fundering_features_order_idx" ON "optie_fundering_features" USING btree ("_order");
  CREATE INDEX "optie_fundering_features_parent_id_idx" ON "optie_fundering_features" USING btree ("_parent_id");
  CREATE INDEX "optie_fundering_hero_image_idx" ON "optie_fundering" USING btree ("hero_image_id");
  CREATE INDEX "optie_fundering_intro_image_idx" ON "optie_fundering" USING btree ("intro_image_id");
  CREATE INDEX "optie_onderhoud_intro_checklist_order_idx" ON "optie_onderhoud_intro_checklist" USING btree ("_order");
  CREATE INDEX "optie_onderhoud_intro_checklist_parent_id_idx" ON "optie_onderhoud_intro_checklist" USING btree ("_parent_id");
  CREATE INDEX "optie_onderhoud_features_order_idx" ON "optie_onderhoud_features" USING btree ("_order");
  CREATE INDEX "optie_onderhoud_features_parent_id_idx" ON "optie_onderhoud_features" USING btree ("_parent_id");
  CREATE INDEX "optie_onderhoud_hero_image_idx" ON "optie_onderhoud" USING btree ("hero_image_id");
  CREATE INDEX "optie_onderhoud_intro_image_idx" ON "optie_onderhoud" USING btree ("intro_image_id");
  CREATE INDEX "zakelijk_sectors_order_idx" ON "zakelijk_sectors" USING btree ("_order");
  CREATE INDEX "zakelijk_sectors_parent_id_idx" ON "zakelijk_sectors" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_steps_order_idx" ON "zakelijk_steps" USING btree ("_order");
  CREATE INDEX "zakelijk_steps_parent_id_idx" ON "zakelijk_steps" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_hero_image_idx" ON "zakelijk" USING btree ("hero_image_id");
  CREATE INDEX "zakelijk_band_image_idx" ON "zakelijk" USING btree ("band_image_id");
  CREATE INDEX "zakelijk_horeca_benefits_order_idx" ON "zakelijk_horeca_benefits" USING btree ("_order");
  CREATE INDEX "zakelijk_horeca_benefits_parent_id_idx" ON "zakelijk_horeca_benefits" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_horeca_hero_image_idx" ON "zakelijk_horeca" USING btree ("hero_image_id");
  CREATE INDEX "zakelijk_kantoren_benefits_order_idx" ON "zakelijk_kantoren_benefits" USING btree ("_order");
  CREATE INDEX "zakelijk_kantoren_benefits_parent_id_idx" ON "zakelijk_kantoren_benefits" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_kantoren_hero_image_idx" ON "zakelijk_kantoren" USING btree ("hero_image_id");
  CREATE INDEX "zakelijk_onderwijs_benefits_order_idx" ON "zakelijk_onderwijs_benefits" USING btree ("_order");
  CREATE INDEX "zakelijk_onderwijs_benefits_parent_id_idx" ON "zakelijk_onderwijs_benefits" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_onderwijs_hero_image_idx" ON "zakelijk_onderwijs" USING btree ("hero_image_id");
  CREATE INDEX "zakelijk_vakantieparken_benefits_order_idx" ON "zakelijk_vakantieparken_benefits" USING btree ("_order");
  CREATE INDEX "zakelijk_vakantieparken_benefits_parent_id_idx" ON "zakelijk_vakantieparken_benefits" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_vakantieparken_hero_image_idx" ON "zakelijk_vakantieparken" USING btree ("hero_image_id");
  CREATE INDEX "zakelijk_zorg_benefits_order_idx" ON "zakelijk_zorg_benefits" USING btree ("_order");
  CREATE INDEX "zakelijk_zorg_benefits_parent_id_idx" ON "zakelijk_zorg_benefits" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_zorg_hero_image_idx" ON "zakelijk_zorg" USING btree ("hero_image_id");
  CREATE INDEX "zakelijk_projectbouw_benefits_order_idx" ON "zakelijk_projectbouw_benefits" USING btree ("_order");
  CREATE INDEX "zakelijk_projectbouw_benefits_parent_id_idx" ON "zakelijk_projectbouw_benefits" USING btree ("_parent_id");
  CREATE INDEX "zakelijk_projectbouw_hero_image_idx" ON "zakelijk_projectbouw" USING btree ("hero_image_id");
  CREATE INDEX "contact_stats_order_idx" ON "contact_stats" USING btree ("_order");
  CREATE INDEX "contact_stats_parent_id_idx" ON "contact_stats" USING btree ("_parent_id");
  CREATE INDEX "contact_service_areas_order_idx" ON "contact_service_areas" USING btree ("_order");
  CREATE INDEX "contact_service_areas_parent_id_idx" ON "contact_service_areas" USING btree ("_parent_id");
  CREATE INDEX "contact_hero_image_idx" ON "contact" USING btree ("hero_image_id");
  CREATE INDEX "contact_contact_image_idx" ON "contact" USING btree ("contact_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "veranda_greenline_specs" CASCADE;
  DROP TABLE "veranda_greenline_intro_bullets" CASCADE;
  DROP TABLE "veranda_greenline_features" CASCADE;
  DROP TABLE "veranda_greenline_gallery" CASCADE;
  DROP TABLE "veranda_greenline_other_models" CASCADE;
  DROP TABLE "veranda_greenline" CASCADE;
  DROP TABLE "veranda_profiline_stats" CASCADE;
  DROP TABLE "veranda_profiline_ruimte_points" CASCADE;
  DROP TABLE "veranda_profiline_features" CASCADE;
  DROP TABLE "veranda_profiline_models" CASCADE;
  DROP TABLE "veranda_profiline" CASCADE;
  DROP TABLE "veranda_linea_specs" CASCADE;
  DROP TABLE "veranda_linea_intro_points" CASCADE;
  DROP TABLE "veranda_linea_features" CASCADE;
  DROP TABLE "veranda_linea_gallery" CASCADE;
  DROP TABLE "veranda_linea_related" CASCADE;
  DROP TABLE "veranda_linea" CASCADE;
  DROP TABLE "veranda_cube_specs" CASCADE;
  DROP TABLE "veranda_cube_intro_bullets" CASCADE;
  DROP TABLE "veranda_cube_features" CASCADE;
  DROP TABLE "veranda_cube_gallery" CASCADE;
  DROP TABLE "veranda_cube_others" CASCADE;
  DROP TABLE "veranda_cube" CASCADE;
  DROP TABLE "veranda_pergola_stats" CASCADE;
  DROP TABLE "veranda_pergola_intro_bullets" CASCADE;
  DROP TABLE "veranda_pergola_features" CASCADE;
  DROP TABLE "veranda_pergola_related" CASCADE;
  DROP TABLE "veranda_pergola" CASCADE;
  DROP TABLE "tuinkamers_types" CASCADE;
  DROP TABLE "tuinkamers_usps" CASCADE;
  DROP TABLE "tuinkamers_gallery" CASCADE;
  DROP TABLE "tuinkamers" CASCADE;
  DROP TABLE "tuinkamer_hellend_dak_intro_points" CASCADE;
  DROP TABLE "tuinkamer_hellend_dak_features" CASCADE;
  DROP TABLE "tuinkamer_hellend_dak_gallery" CASCADE;
  DROP TABLE "tuinkamer_hellend_dak" CASCADE;
  DROP TABLE "tuinkamer_vlak_dak_intro_points" CASCADE;
  DROP TABLE "tuinkamer_vlak_dak_features" CASCADE;
  DROP TABLE "tuinkamer_vlak_dak_gallery" CASCADE;
  DROP TABLE "tuinkamer_vlak_dak" CASCADE;
  DROP TABLE "glazen_schuifwanden_types" CASCADE;
  DROP TABLE "glazen_schuifwanden_projects" CASCADE;
  DROP TABLE "glazen_schuifwanden" CASCADE;
  DROP TABLE "schuifwand_glas_intro_list" CASCADE;
  DROP TABLE "schuifwand_glas_features" CASCADE;
  DROP TABLE "schuifwand_glas" CASCADE;
  DROP TABLE "schuifwand_aluminium_intro_points" CASCADE;
  DROP TABLE "schuifwand_aluminium_features" CASCADE;
  DROP TABLE "schuifwand_aluminium" CASCADE;
  DROP TABLE "schuifwand_lamellen_intro_list" CASCADE;
  DROP TABLE "schuifwand_lamellen_features" CASCADE;
  DROP TABLE "schuifwand_lamellen" CASCADE;
  DROP TABLE "schuifwand_steellook_intro_points" CASCADE;
  DROP TABLE "schuifwand_steellook_features" CASCADE;
  DROP TABLE "schuifwand_steellook" CASCADE;
  DROP TABLE "zonwering_types" CASCADE;
  DROP TABLE "zonwering_projects" CASCADE;
  DROP TABLE "zonwering" CASCADE;
  DROP TABLE "zonwering_onderdak_intro_list" CASCADE;
  DROP TABLE "zonwering_onderdak_features" CASCADE;
  DROP TABLE "zonwering_onderdak" CASCADE;
  DROP TABLE "zonwering_bovendak_intro_points" CASCADE;
  DROP TABLE "zonwering_bovendak_features" CASCADE;
  DROP TABLE "zonwering_bovendak" CASCADE;
  DROP TABLE "zonwering_screens_intro_bullets" CASCADE;
  DROP TABLE "zonwering_screens_features" CASCADE;
  DROP TABLE "zonwering_screens" CASCADE;
  DROP TABLE "zonwering_uitvalschermen_intro_usps" CASCADE;
  DROP TABLE "zonwering_uitvalschermen_features" CASCADE;
  DROP TABLE "zonwering_uitvalschermen" CASCADE;
  DROP TABLE "accessoires_options" CASCADE;
  DROP TABLE "accessoires_gallery" CASCADE;
  DROP TABLE "accessoires" CASCADE;
  DROP TABLE "optie_wanden_intro_points" CASCADE;
  DROP TABLE "optie_wanden_features" CASCADE;
  DROP TABLE "optie_wanden" CASCADE;
  DROP TABLE "optie_dakbedekking_intro_points" CASCADE;
  DROP TABLE "optie_dakbedekking_features" CASCADE;
  DROP TABLE "optie_dakbedekking" CASCADE;
  DROP TABLE "optie_ledverlichting_intro_bullets" CASCADE;
  DROP TABLE "optie_ledverlichting_features" CASCADE;
  DROP TABLE "optie_ledverlichting" CASCADE;
  DROP TABLE "optie_fundering_intro_list" CASCADE;
  DROP TABLE "optie_fundering_features" CASCADE;
  DROP TABLE "optie_fundering" CASCADE;
  DROP TABLE "optie_onderhoud_intro_checklist" CASCADE;
  DROP TABLE "optie_onderhoud_features" CASCADE;
  DROP TABLE "optie_onderhoud" CASCADE;
  DROP TABLE "zakelijk_sectors" CASCADE;
  DROP TABLE "zakelijk_steps" CASCADE;
  DROP TABLE "zakelijk" CASCADE;
  DROP TABLE "zakelijk_horeca_benefits" CASCADE;
  DROP TABLE "zakelijk_horeca" CASCADE;
  DROP TABLE "zakelijk_kantoren_benefits" CASCADE;
  DROP TABLE "zakelijk_kantoren" CASCADE;
  DROP TABLE "zakelijk_onderwijs_benefits" CASCADE;
  DROP TABLE "zakelijk_onderwijs" CASCADE;
  DROP TABLE "zakelijk_vakantieparken_benefits" CASCADE;
  DROP TABLE "zakelijk_vakantieparken" CASCADE;
  DROP TABLE "zakelijk_zorg_benefits" CASCADE;
  DROP TABLE "zakelijk_zorg" CASCADE;
  DROP TABLE "zakelijk_projectbouw_benefits" CASCADE;
  DROP TABLE "zakelijk_projectbouw" CASCADE;
  DROP TABLE "contact_stats" CASCADE;
  DROP TABLE "contact_service_areas" CASCADE;
  DROP TABLE "contact" CASCADE;`)
}
