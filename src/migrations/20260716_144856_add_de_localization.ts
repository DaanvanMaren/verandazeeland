import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('nl', 'de');
  CREATE TABLE "home_locales" (
  	"hero_badge" varchar DEFAULT 'Buitenleven aan de Zeeuwse kust',
  	"hero_title" varchar DEFAULT 'Geniet élk seizoen buiten.' NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'Veranda''s, tuinkamers en glasschuifwanden van Duitse topkwaliteit, op maat gemaakt en gemonteerd door Veranda Zeeland in Serooskerke.',
  	"hero_primary_cta" varchar DEFAULT 'Bekijk de veranda''s →',
  	"hero_secondary_cta" varchar DEFAULT 'Bezoek de showroom',
  	"categories_heading" varchar DEFAULT 'Ontdek wat er buiten mogelijk is',
  	"welcome_label" varchar DEFAULT 'Welkom bij Veranda Zeeland',
  	"welcome_title" varchar DEFAULT 'Uw complete leverancier in Serooskerke',
  	"welkom_bij_verandazeeland_tekst" jsonb,
  	"welcome_cta" varchar DEFAULT 'Plan uw bezoek →',
  	"models_heading" varchar DEFAULT 'Ieder thuis verdient een echte Verasol®',
  	"models_sub" varchar DEFAULT 'Vijf productlijnen. Eén perfecte match voor uw woning.',
  	"cta_title" varchar DEFAULT 'Zin in uw eigen buitenkamer?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend uw offerte op maat aan, inclusief sterkteberekening en advies.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_s_locales" (
  	"hero_badge" varchar DEFAULT 'Onze specialiteit',
  	"hero_title" varchar DEFAULT 'Uw veranda, op maat gemaakt' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een veranda van Veranda Zeeland is een investering in comfort en woonplezier. Wij leveren de hoogwaardige aluminium veranda''s van Verasol, in Duitsland geproduceerd en volledig op maat. Vijf productlijnen, van betaalbaar tot exclusief design, inclusief inmeten en montage door ons eigen team.',
  	"lines_heading" varchar DEFAULT 'De vijf productlijnen van Verasol',
  	"lines_intro" varchar DEFAULT 'Van de voordelige Greenline tot de exclusieve Cube. Elke lijn heeft een eigen pagina met alle details, kenmerken en mogelijkheden.',
  	"ombouw_label" varchar DEFAULT 'Meer woonplezier',
  	"ombouw_title" varchar DEFAULT 'Bouw uw veranda om tot tuinkamer',
  	"ombouw_text" varchar DEFAULT 'Met glazen schuifwanden of vaste voor- en zijwanden maakt u van elke Verasol-veranda een volwaardige tuinkamer, het hele jaar te gebruiken.',
  	"ombouw_cta" varchar DEFAULT 'Ontdek tuinkamers →',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_greenline_locales" (
  	"hero_badge" varchar DEFAULT 'Instapmodel',
  	"hero_price" varchar DEFAULT 'vanaf € 1.259',
  	"hero_title" varchar DEFAULT 'Greenline' NOT NULL,
  	"hero_text" varchar DEFAULT 'De meest voordelige veranda van Verasol: sterk, stijlvol en aantrekkelijk geprijsd. Een slim profielontwerp levert maximale stevigheid met minder materiaal.',
  	"hero_button_primary" varchar DEFAULT 'Offerte Greenline →',
  	"hero_button_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DSC09382.jpg',
  	"intro_title" varchar DEFAULT 'Betaalbare kwaliteit zonder concessies',
  	"intro_text" varchar DEFAULT 'De Greenline bewijst dat een hoogwaardige aluminium veranda niet duur hoeft te zijn. Door het slimme profielontwerp is er minder materiaal nodig terwijl de constructie zeer stevig blijft, met een verstevigde goot zijn zelfs overspanningen tot 7 meter op twee staanders mogelijk. De krasvaste Qualicoat-structuurlak is onderhoudsvriendelijk en milieubewust geproduceerd.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/DSC09397.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"config_label" varchar DEFAULT 'Volledig op maat',
  	"config_title" varchar DEFAULT 'Stel uw Greenline samen',
  	"config_text" varchar DEFAULT 'Kies uw maat, kleur, dakbedekking en voeg opties toe zoals ledverlichting of glazen schuifwanden. Wij rekenen de sterkteberekening voor u door.',
  	"config_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"config_image_fallback" varchar DEFAULT '/uploads/DSC_4586-HDR.jpg',
  	"gallery_title" varchar DEFAULT 'Greenline in de praktijk',
  	"other_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Greenline?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_profiline_locales" (
  	"hero_badge" varchar DEFAULT 'Populair',
  	"hero_price" varchar DEFAULT 'vanaf € 2.059',
  	"hero_title" varchar DEFAULT 'Profiline' NOT NULL,
  	"hero_text" varchar DEFAULT 'Onze meest veelzijdige veranda. Dankzij de extra stevige constructie bouwt u breder, dieper en ruimer, met overspanningen tot 7 meter op slechts twee staanders. Volledig op maat en uit te bouwen tot een complete tuinkamer.',
  	"hero_button_primary" varchar DEFAULT 'Offerte Profiline →',
  	"hero_button_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"ruimte_title" varchar DEFAULT 'Meer ruimte, meer vrijheid',
  	"ruimte_text" varchar DEFAULT 'De Profiline heeft een schuin dak dat zorgt voor een ruimtelijk gevoel, prettige lichtinval en natuurlijke waterafvoer. Met de speciale XS-profielen en een verstevigde goot overspant u tot 7 meter op slechts twee staanders, voor een volledig vrij uitzicht zonder paal in het midden. Muurbevestigd, vrijstaand of om een hoek, en met een glasdak tot 4 meter diep.',
  	"ruimte_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"maat_label" varchar DEFAULT 'Volledig op maat',
  	"maat_title" varchar DEFAULT 'Stel uw Profiline samen',
  	"maat_text" varchar DEFAULT 'Van afmeting, kleur en gootsierlijst tot geïntegreerde verlichting, verwarming, zonwering en glazen schuifwanden: de Profiline groeit mee met uw wensen.',
  	"maat_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"maat_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_434_LR.jpg',
  	"models_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Profiline?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_linea_locales" (
  	"hero_badge" varchar DEFAULT 'Modern design',
  	"hero_price" varchar DEFAULT 'vanaf € 5.469',
  	"hero_title" varchar DEFAULT 'Linea' NOT NULL,
  	"hero_text" varchar DEFAULT 'Strak en modern met een optisch vlak dak. Ranker en toegankelijker dan de Cube, en daarmee de ideale keuze voor wie design zoekt in een iets zachtere prijsklasse.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Linea →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/linea-hero.jpg',
  	"intro_title" varchar DEFAULT 'Strak design, toegankelijk geprijsd',
  	"intro_text" varchar DEFAULT 'De Linea combineert strakke lijnen met een optisch vlak dak en een moderne uitstraling. Waar de Cube volledig kubistisch en robuust is, houdt de Linea een rankere, lichtere lijn aan. De overkapping sluit perfect aan bij een moderne bouwstijl en behoudt het buitengevoel, zowel aan de gevel als vrijstaand in de tuin.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Linea_Rijssen_VS_20250922_1273.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"opmaat_label" varchar DEFAULT 'Volledig op maat',
  	"opmaat_title" varchar DEFAULT 'Stel uw Linea samen',
  	"opmaat_text" varchar DEFAULT 'Kies dakbedekking, kleur en afmetingen, en vul aan met verlichting, zonwering en glazen schuifwanden voor een complete, moderne tuinkamer.',
  	"opmaat_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"opmaat_image_fallback" varchar DEFAULT '/uploads/Linea_Rijssen_VS_20250922_1282.jpg',
  	"gallery_title" varchar DEFAULT 'Linea in de praktijk',
  	"related_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Linea?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_cube_locales" (
  	"hero_badge" varchar DEFAULT 'Topmodel',
  	"hero_price" varchar DEFAULT 'vanaf € 7.149',
  	"hero_title" varchar DEFAULT 'Cube' NOT NULL,
  	"hero_text" varchar DEFAULT 'Geen standaard overkapping, maar een statement in uw tuin. Strak, kubistisch en met een volledig vlak dak, extra brede staanders en een krachtig ontwerp. Dé keuze voor moderne architectuur en designliefhebbers.',
  	"hero_cta_primary" varchar DEFAULT 'Offerte Cube →',
  	"hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/cube-kerk.jpg',
  	"intro_title" varchar DEFAULT 'Een blikvanger in uw tuin',
  	"intro_text" varchar DEFAULT 'De Cube valt direct op met zijn strakke lijnen, extra brede staanders en volledig vlakke dak met onzichtbare dakhelling. Modern, robuust en tot in de puntjes afgewerkt, en dankzij een verstevigde goot mogelijk tot 7 meter breed op slechts twee palen. Een designstatement dat past bij een eigentijdse tuin, en heerlijk om onder te leven.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"ombouw_label" varchar DEFAULT 'Volledig op maat',
  	"ombouw_title" varchar DEFAULT 'Stel uw Cube samen',
  	"ombouw_text" varchar DEFAULT 'Bepaal afmetingen, kleur en dakbedekking, en voeg premium opties toe zoals sfeerverlichting, verwarming en frameloze glazen schuifwanden.',
  	"ombouw_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"ombouw_image_fallback" varchar DEFAULT '/uploads/cube-rhenen-b.jpg',
  	"gallery_title" varchar DEFAULT 'Cube in de praktijk',
  	"others_title" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Cube?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "veranda_pergola_locales" (
  	"hero_badge" varchar DEFAULT 'Vrijstaand',
  	"hero_price" varchar DEFAULT 'vanaf € 5.791',
  	"hero_title" varchar DEFAULT 'Pergola-overkapping' NOT NULL,
  	"hero_text" varchar DEFAULT 'Optimale beschutting met een vrijstaande constructie op staanders. Geschikt voor grotere terrassen of situaties waar gevelmontage niet mogelijk is. De Pergola-overkapping combineert zonwering én overkapping in één.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte Pergola →',
  	"hero_secondary_cta" varchar DEFAULT 'Bezoek de showroom',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20250515150039_0478_D.jpg',
  	"intro_title" varchar DEFAULT 'Beschutting midden in de tuin',
  	"intro_text" varchar DEFAULT 'De Pergola-overkapping staat op een eigen constructie met minimaal vier staanders en heeft geen gevel nodig. Daarmee is het dé oplossing voor grote terrassen of tuinen waar bevestiging aan de woning niet kan of niet gewenst is. Zonwering en overkapping werken samen in één systeem, voor schaduw én beschutting waar u maar wilt.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"band_label" varchar DEFAULT 'Volledig op maat',
  	"band_title" varchar DEFAULT 'Stel uw Pergola samen',
  	"band_text" varchar DEFAULT 'Kies afmetingen, kleur en type zonwering, en vul aan met screens, verlichting en verwarming voor een volwaardige buitenkamer.',
  	"band_cta" varchar DEFAULT 'Bekijk alle opties →',
  	"band_image_fallback" varchar DEFAULT '/uploads/banner-verasol-pergola-verasol.jpg',
  	"related_heading" varchar DEFAULT 'Andere modellen',
  	"cta_title" varchar DEFAULT 'Interesse in de Pergola?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "tuinkamers_locales" (
  	"hero_badge" varchar DEFAULT 'Het hele jaar buiten',
  	"hero_title" varchar DEFAULT 'Uw tuinkamer, altijd het juiste seizoen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een tuinkamer is een veranda die u met glazen schuifwanden of vaste voor- en zijwanden verder afsluit: beschutter tegen wind en regen, en daardoor langer in het jaar te gebruiken. Omdat Verasol-veranda''s modulair zijn opgebouwd, bouwt u een bestaande veranda stap voor stap uit tot een volwaardige tuinkamer.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"types_label" varchar DEFAULT 'Ontdek de mogelijkheden',
  	"types_heading" varchar DEFAULT '2 type tuinkamers',
  	"types_intro" varchar DEFAULT 'De dakvorm bepaalt de uitstraling van uw tuinkamer. Een hellend dak en een vlak dak geven allebei een ander karakter. Wij zetten de verschillen voor u op een rij.',
  	"usp_heading" varchar DEFAULT 'Waarom een tuinkamer?',
  	"usp_intro" varchar DEFAULT 'Alle voordelen van buiten wonen, zonder de nadelen van het weer.',
  	"gallery_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"glas_label" varchar DEFAULT 'Glasschuifwanden',
  	"glas_title" varchar DEFAULT 'Open of dicht, u kiest',
  	"glas_text" varchar DEFAULT 'Combineer uw tuinkamer met glasschuifwanden: in de zomer volledig open, bij wind en regen in enkele seconden dicht. Zo bepaalt u zelf hoe u van uw buitenruimte geniet.',
  	"glas_cta" varchar DEFAULT 'Bekijk glaswanden →',
  	"glas_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "tuinkamer_hellend_dak_locales" (
  	"hero_badge" varchar DEFAULT 'Tuinkamer',
  	"hero_title" varchar DEFAULT 'Tuinkamer met hellend dak' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een tuinkamer met een licht hellend dak is de klassieke keuze: ruimtelijk, met veel lichtinval en een natuurlijke waterafvoer. Perfect passend bij zowel moderne als traditionele woningen.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/glazenschuifwanden-2000x800-02.png',
  	"intro_title" varchar DEFAULT 'Ruimtelijk en licht',
  	"intro_text" varchar DEFAULT 'Het schuine dak zorgt voor extra hoogte en een royaal, open gevoel. Regenwater loopt vanzelf weg via de goot, en de vorm sluit natuurlijk aan op de meeste daklijnen. Op basis van de Greenline of Profiline bouwt u zo een volwaardige, jaarrond bruikbare tuinkamer.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"gallery_heading" varchar DEFAULT 'Hellend dak in de praktijk',
  	"alt_label" varchar DEFAULT 'Ander type?',
  	"alt_title" varchar DEFAULT 'Liever een strak, vlak dak?',
  	"alt_text" varchar DEFAULT 'Een tuinkamer met vlak dak geeft een moderne, kubistische uitstraling. Bekijk de mogelijkheden.',
  	"alt_cta" varchar DEFAULT 'Bekijk vlak dak →',
  	"alt_image_fallback" varchar DEFAULT '/uploads/cube-kerk.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "tuinkamer_vlak_dak_locales" (
  	"hero_badge" varchar DEFAULT 'Tuinkamer',
  	"hero_title" varchar DEFAULT 'Tuinkamer met vlak dak' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een tuinkamer met een vlak dak geeft een strakke, moderne en kubistische uitstraling. De ideale keuze voor eigentijdse woningen en wie houdt van clean design.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/banners-2000x800-vlak-2.png',
  	"intro_title" varchar DEFAULT 'Strak en modern',
  	"intro_text" varchar DEFAULT 'Het vlakke dak zorgt voor een minimalistisch silhouet met rechte lijnen en, bij de Cube, volledig verborgen afwatering. Gebaseerd op de Linea of Cube maakt u er een designstatement van dat naadloos aansluit op moderne architectuur, het hele jaar door te gebruiken.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"gallery_title" varchar DEFAULT 'Vlak dak in de praktijk',
  	"alt_label" varchar DEFAULT 'Ander type?',
  	"alt_title" varchar DEFAULT 'Liever een hellend dak?',
  	"alt_text" varchar DEFAULT 'Een tuinkamer met hellend dak is ruimtelijk en licht, met een natuurlijke waterafvoer. Bekijk de mogelijkheden.',
  	"alt_cta" varchar DEFAULT 'Bekijk hellend dak →',
  	"alt_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "glazen_schuifwanden_locales" (
  	"hero_badge" varchar DEFAULT 'Flexibel wonen buiten',
  	"hero_title" varchar DEFAULT 'Glazen schuifwanden op maat' NOT NULL,
  	"hero_text" varchar DEFAULT 'Met de schuifwanden van Verasol bepaalt u zelf hoeveel openheid of beschutting u wilt. Van frameloze glazen schuifwanden tot aluminium schuifpuien en lamellenwanden: alles op maat gemaakt en passend op vrijwel elke veranda, ook een bestaande. Zo verlengt u uw buitenseizoen met gemak.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"types_heading" varchar DEFAULT 'Onze schuifwanden',
  	"types_intro" varchar DEFAULT '8–10 mm veiligheidsglas · onderrail van slechts 17 mm · glazen schuifwanden vanaf € 285 per meter.',
  	"projects_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"combo_label" varchar DEFAULT 'Combineer slim',
  	"combo_title" varchar DEFAULT 'Perfect met uw veranda',
  	"combo_text" varchar DEFAULT 'Glazen schuifwanden combineren naadloos met alle Verasol-modellen. Samen met een Profiline of Cube veranda creëert u een complete, jaarrond bruikbare buitenkamer.',
  	"combo_cta" varchar DEFAULT 'Bekijk veranda''s →',
  	"combo_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "schuifwand_glas_locales" (
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Glazen schuifwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Frameloze glazen schuifwanden zonder storende kozijnen, voor een volledig vrij uitzicht. Open in de zomer, in enkele seconden dicht bij wind of regen.',
  	"hero_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg',
  	"intro_title" varchar DEFAULT 'Maximaal uitzicht, maximale flexibiliteit',
  	"intro_text" varchar DEFAULT 'De glazen panelen schuiven soepel achter elkaar en worden gemaakt van 8 tot 10 mm veiligheidsglas. Dankzij de onderrail van slechts 17 mm stapt u vrijwel drempelloos naar buiten. Prijs vanaf € 285 per meter.',
  	"intro_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over glazen schuifwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "schuifwand_aluminium_locales" (
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Aluminium schuifpui' NOT NULL,
  	"hero_text" varchar DEFAULT 'Glas in een strak aluminium kozijn: extra stevig, goed te isoleren en met een moderne, rechte lijn. De robuuste keuze om uw veranda volwaardig af te sluiten.',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"intro_title" varchar DEFAULT 'Stevig en strak afgewerkt',
  	"intro_text" varchar DEFAULT 'De aluminium schuifpui combineert de transparantie van glas met de stevigheid van een aluminium frame. Ideaal voor wie de tuinkamer stevig wil isoleren en een strakke uitstraling zoekt, in dezelfde kleur als uw veranda.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over de aluminium schuifpui?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "schuifwand_lamellen_locales" (
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Lamellen schuifwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Verstelbare lamellen voor schaduw, privacy en ventilatie. Zet ze open voor frisse lucht en licht, of dicht voor beschutting. U regelt het zelf.',
  	"hero_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg',
  	"intro_title" varchar DEFAULT 'Schaduw en privacy op maat',
  	"intro_text" varchar DEFAULT 'Lamellen schuifwanden combineren beschutting met flexibiliteit. De verstelbare lamellen laten lucht door zonder direct inkijk, en zijn er in een strakke of houtlook-uitvoering die mooi aansluit op uw veranda.',
  	"intro_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over lamellen schuifwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "schuifwand_steellook_locales" (
  	"hero_badge" varchar DEFAULT 'Schuifwanden',
  	"hero_title" varchar DEFAULT 'Steellook schuifwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Het karakteristieke stalen-look design met slanke zwarte profielen en glasverdeling. Industrieel, tijdloos en verrassend licht in aluminium uitgevoerd.',
  	"hero_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg',
  	"intro_heading" varchar DEFAULT 'Industrieel karakter',
  	"intro_text" varchar DEFAULT 'Steellook schuifwanden geven uw tuinkamer een stoere, industriële uitstraling met de warme charme van klassieke stalen puien, maar dan onderhoudsarm in aluminium. De slanke profielverdeling maakt er een echte blikvanger van.',
  	"intro_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over steellook schuifwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zonwering_locales" (
  	"hero_badge" varchar DEFAULT 'Aangenaam koel',
  	"hero_title" varchar DEFAULT 'Zonwering perfect afgestemd op uw veranda' NOT NULL,
  	"hero_text" varchar DEFAULT 'Van onderdak- en bovendakzonwering tot screens en uitvalschermen: Verasol-zonwering is speciaal ontwikkeld voor veranda''s en tuinkamers. Houd de warmte buiten, creëer schaduw en privacy, en bedien alles met afstandsbediening, app of automatische zon- en windsensoren.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg',
  	"types_heading" varchar DEFAULT 'Type zonwering',
  	"types_intro" varchar DEFAULT 'Voor elke situatie de juiste oplossing.',
  	"projects_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"comfort_label" varchar DEFAULT 'Comfort',
  	"comfort_title" varchar DEFAULT 'Slimme bediening',
  	"comfort_text" varchar DEFAULT 'Bedien uw zonwering met een afstandsbediening, tijdklok of via een app. Met een zonsensor beweegt de zonwering automatisch mee met het weer, altijd de perfecte hoeveelheid schaduw.',
  	"comfort_cta" varchar DEFAULT 'Vraag advies →',
  	"comfort_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zonwering_onderdak_locales" (
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Onderdakzonwering' NOT NULL,
  	"hero_text" varchar DEFAULT 'Zonwering die onder het dak van uw veranda wordt gemonteerd. Het doek blijft beschermd tegen regen en neerslag en zorgt binnen voor aangename schaduw.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_fallback" varchar DEFAULT '/uploads/banner-verasol-pergola-verasol.jpg',
  	"intro_title" varchar DEFAULT 'Beschermd en strak weggewerkt',
  	"intro_text" varchar DEFAULT 'De onderdakzonwering is speciaal ontwikkeld voor veranda’s en tuinkamers. Het scherm zit onder het glas, dus het doek wordt niet aangetast door weer en wind. Elektrisch bediend via schakelaar of handzender, en verkrijgbaar in vele kleuren en dessins.',
  	"intro_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over onderdakzonwering?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zonwering_bovendak_locales" (
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Bovendakzonwering' NOT NULL,
  	"hero_text" varchar DEFAULT 'Zonwering boven op het dak van uw veranda. Groot voordeel: de warmte wordt tegengehouden vóór het glas, zodat het onder de veranda merkbaar koeler blijft.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"intro_title" varchar DEFAULT 'Houd de warmte buiten',
  	"intro_text" varchar DEFAULT 'Bovendakzonwering vangt de zon op vóór die het glas bereikt, waardoor de ruimte eronder veel minder opwarmt dan bij onderdakzonwering. Geschikt voor alle Verasol-veranda’s en tuinkamers, en volledig op maat leverbaar.',
  	"intro_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over bovendakzonwering?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zonwering_screens_locales" (
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Screens' NOT NULL,
  	"hero_text" varchar DEFAULT 'Verticale ritsdoeken die langs de zijkanten door een geleiding lopen. Windvast, zonwerend en ideaal als flexibele zij- of voorwand van uw veranda.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"intro_title" varchar DEFAULT 'Windvast en veelzijdig',
  	"intro_text" varchar DEFAULT 'Dankzij de supersterke zijgeleiding blijven screens ook bij wind strak staan. Ze houden zon, inkijk en insecten buiten en zijn er in vele kleuren en doeksoorten, met bediening via draaiknop of meerkanaals afstandsbediening.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over screens?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zonwering_uitvalschermen_locales" (
  	"hero_badge" varchar DEFAULT 'Zonwering',
  	"hero_title" varchar DEFAULT 'Uitvalschermen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Compacte schermen die schuin naar buiten uitvallen en zo schaduw geven voor ramen en gevels, ook op de verdieping. Strak weggewerkt in een cassette.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering',
  	"hero_fallback" varchar DEFAULT '/uploads/greenline-detail.jpg',
  	"intro_title" varchar DEFAULT 'Schaduw voor ramen en gevels',
  	"intro_text" varchar DEFAULT 'Uitvalschermen bieden gerichte schaduw op ramen en gevelpartijen en voorkomen dat ruimtes achter het glas oververhitten. In een strakke cassette weggewerkt en op maat leverbaar in vele kleuren.',
  	"intro_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over uitvalschermen?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "accessoires_locales" (
  	"hero_badge" varchar DEFAULT 'Maak het compleet',
  	"hero_title" varchar DEFAULT 'Accessoires voor uw veranda' NOT NULL,
  	"hero_text" varchar DEFAULT 'Maak uw veranda of tuinkamer helemaal af. Kies uw dakbedekking, voeg voor- en zijwanden, LED-verlichting of verwarming toe, en veranker alles met de juiste fundering en afwatering. Alle opties zijn op elkaar en op uw woning afgestemd.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een bezoek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg',
  	"options_heading" varchar DEFAULT 'Opties & accessoires',
  	"options_intro" varchar DEFAULT 'Stel uw veranda helemaal naar wens samen.',
  	"gallery_heading" varchar DEFAULT 'Projecten uit Zeeland',
  	"advies_label" varchar DEFAULT 'Advies',
  	"advies_title" varchar DEFAULT 'Wij stellen het samen',
  	"advies_text" varchar DEFAULT 'Niet zeker welke accessoires bij uw veranda passen? Onze adviseurs helpen u graag een compleet pakket samen te stellen dat aansluit op uw wensen en budget.',
  	"advies_cta" varchar DEFAULT 'Plan een bezoek →',
  	"advies_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "optie_wanden_locales" (
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Voor- en zijwanden' NOT NULL,
  	"hero_text" varchar DEFAULT 'Maak van uw veranda een volwaardige tuinkamer met voor- en zijwanden. Kies uit glazen schuifwanden, aluminium kozijnen, deuren, ramen of dichte delen.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"intro_title" varchar DEFAULT 'Van veranda naar tuinkamer',
  	"intro_text" varchar DEFAULT 'Met de juiste voor- en zijwandensluit u uw veranda helemaal af. Combineer glazen schuifwanden met kozijnen, deuren en ramen tot precies de indeling die bij uw situatie past. Het hele jaar door comfortabel.',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over voor- en zijwanden?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "optie_dakbedekking_locales" (
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Dakbedekking' NOT NULL,
  	"hero_text" varchar DEFAULT 'Kies de dakbedekking die past bij uw wensen: van helder, warmtewerend of opaal polycarbonaat tot gelaagd veiligheidsglas, elk met een eigen lichtbeleving.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
  	"intro_title" varchar DEFAULT 'Licht en warmte in balans',
  	"intro_text" varchar DEFAULT 'De dakbedekking bepaalt hoeveel licht en warmte u binnenlaat. Helder glas voor maximaal uitzicht, opaal voor gedempt licht, of warmtewerend voor koelte in de zomer. Wij adviseren u graag over de beste keuze voor uw situatie.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over dakbedekking?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "optie_ledverlichting_locales" (
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Ledverlichting' NOT NULL,
  	"hero_text" varchar DEFAULT 'Sfeervolle, dimbare led-spots geïntegreerd in het dak van uw veranda. Energiezuinig en te bedienen op afstand, voor gezellige avonden buiten.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_image_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg',
  	"intro_title" varchar DEFAULT 'Sfeer tot in de late uurtjes',
  	"intro_text" varchar DEFAULT 'Geïntegreerde led-spots maken uw veranda ook ’s avonds een fijne plek. De dimbare spots komen in sets van 6 of 9 en zijn strak weggewerkt in de dakconstructie, te bedienen via afstandsbediening of app.',
  	"intro_image_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over ledverlichting?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "optie_fundering_locales" (
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Fundering' NOT NULL,
  	"hero_text" varchar DEFAULT 'Een goede fundering is de basis van een stabiele veranda. Wij verzorgen de juiste fundering voor uw situatie, zodat uw veranda niet verzakt.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"intro_title" varchar DEFAULT 'Een stabiele basis',
  	"intro_text" varchar DEFAULT 'Afhankelijk van de bodem en uw situatie kiezen we de juiste fundering: van betonpoeren tot verstelbare schroefpalen. Zo staat uw veranda of tuinkamer jarenlang stabiel en waterpas, gegarandeerd tegen verzakken.',
  	"features_title" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over de fundering?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "optie_onderhoud_locales" (
  	"hero_badge" varchar DEFAULT 'Opties',
  	"hero_title" varchar DEFAULT 'Onderhoudsproducten' NOT NULL,
  	"hero_text" varchar DEFAULT 'Houd uw veranda jarenlang mooi met de juiste onderhoudsproducten. Speciaal voor aluminium, glas en polycarbonaat: onderhoudsarm, maar niet onderhoudsvrij.',
  	"hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →',
  	"hero_secondary_cta" varchar DEFAULT 'Terug naar Opties',
  	"hero_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"intro_title" varchar DEFAULT 'Langdurig stralend',
  	"intro_text" varchar DEFAULT 'Aluminium is onderhoudsarm, maar met de juiste reinigingsmiddelen voor glas, polycarbonaat en aluminium blijft uw veranda er jaren als nieuw uitzien. Wij adviseren u graag over het beste onderhoud voor uw materialen.',
  	"intro_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"features_heading" varchar DEFAULT 'Kenmerken & voordelen',
  	"cta_title" varchar DEFAULT 'Meer weten over onderhoudsproducten?',
  	"cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
  	"cta_button" varchar DEFAULT 'Offerte aanvragen →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_locales" (
  	"hero_badge" varchar DEFAULT 'Zakelijk & projecten',
  	"hero_title" varchar DEFAULT 'Overkappingen voor uw onderneming' NOT NULL,
  	"hero_text" varchar DEFAULT 'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en de functionaliteit van je pand. Onze veranda''s, tuinkamers, carports en zonwering zijn ontwikkeld als één doordacht systeem, volledig op maat gemaakt in onze eigen fabriek.',
  	"hero_button1" varchar DEFAULT 'Neem contact op →',
  	"hero_button2" varchar DEFAULT 'Plan een gesprek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"sectors_heading" varchar DEFAULT 'Haal meer uit je locatie',
  	"sectors_intro" varchar DEFAULT 'Bij Veranda Zeeland geloven we niet in standaardoplossingen. Voor elke branche een passend systeem.',
  	"steps_heading" varchar DEFAULT 'Onze werkwijze',
  	"band_label" varchar DEFAULT 'Uw partner in Zeeland',
  	"band_title" varchar DEFAULT 'Eén aanspreekpunt, van begin tot eind',
  	"band_text" varchar DEFAULT 'U werkt met vaste contactpersonen die uw project van advies tot oplevering begeleiden. Betrouwbaar, planmatig en met oog voor kwaliteit.',
  	"band_cta" varchar DEFAULT 'Vraag een projectgesprek aan →',
  	"band_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
  	"cta_title" varchar DEFAULT 'Een zakelijk project bespreken?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw onderneming.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_horeca_locales" (
  	"hero_badge" varchar DEFAULT 'Horeca & Leisure',
  	"hero_title" varchar DEFAULT 'Meer terras, langer seizoen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Vergroot de bedrijfsruimte van je horecazaak het hele jaar door en behoud het buitengevoel. Een glazen overkapping beschermt tegen kou en regen, terwijl gasten heerlijk buiten blijven zitten vanaf de eerste zonnestralen.',
  	"hero_button1" varchar DEFAULT 'Neem contact op →',
  	"hero_button2" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_fallback" varchar DEFAULT '/uploads/foto-horeca.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Met de juiste overkapping wordt je terras een plek waar gasten graag langer blijven zitten, ongeacht het weer."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_kantoren_locales" (
  	"hero_badge" varchar DEFAULT 'Kantoren & Commercieel Vastgoed',
  	"hero_title" varchar DEFAULT 'Haal meer uit je bedrijfspand' NOT NULL,
  	"hero_text" varchar DEFAULT 'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en functionaliteit van je pand. Van representatieve entrees tot beschutte buitenruimtes voor personeel.',
  	"hero_button_primary" varchar DEFAULT 'Neem contact op →',
  	"hero_button_secondary" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Robuuste aluminium systemen, volledig op maat gemaakt in onze eigen fabriek."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_onderwijs_locales" (
  	"hero_badge" varchar DEFAULT 'Onderwijs & Scholen',
  	"hero_title" varchar DEFAULT 'Veilig, comfortabel en inspirerend' NOT NULL,
  	"hero_text" varchar DEFAULT 'Op een school moet de omgeving veilig, inspirerend en comfortabel zijn. Wij leveren robuuste systemen die ervoor zorgen dat leerlingen zich optimaal kunnen concentreren en dat het buitenterrein functioneler wordt ingezet.',
  	"hero_primary_cta" varchar DEFAULT 'Neem contact op →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_fallback" varchar DEFAULT '/uploads/DSC_7667-HDR.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Veilige en duurzame constructies die voldoen aan alle normen en bestand zijn tegen intensief gebruik door leerlingen."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_vakantieparken_locales" (
  	"hero_badge" varchar DEFAULT 'Vakantieparken & Recreatie',
  	"hero_title" varchar DEFAULT 'Comfort dat gasten waarderen' NOT NULL,
  	"hero_text" varchar DEFAULT 'Bied gasten het hele seizoen een beschutte buitenruimte. Onze robuuste, onderhoudsarme systemen zijn bestand tegen intensief gebruik en geven accommodaties een verzorgde, uitnodigende uitstraling.',
  	"hero_primary_cta" varchar DEFAULT 'Neem contact op →',
  	"hero_secondary_cta" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_fallback" varchar DEFAULT '/uploads/6623.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Extra leefruimte die het hele jaar door gebruikt kan worden, voor een verzorgde en uitnodigende beleving."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_zorg_locales" (
  	"hero_badge" varchar DEFAULT 'Zorginstellingen',
  	"hero_title" varchar DEFAULT 'Rust, comfort en veiligheid voorop' NOT NULL,
  	"hero_text" varchar DEFAULT 'In de zorg draait alles om welzijn. Met slimme oplossingen zoals overkappingen, glaswanden en zonwering realiseer je comfortabele, toegankelijke en beschutte binnen- en buitenruimtes voor bewoners, cliënten en medewerkers.',
  	"hero_button1" varchar DEFAULT 'Neem contact op →',
  	"hero_button2" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Zo ontstaat extra leefruimte die het hele jaar door gebruikt kan worden, veilig en comfortabel."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "zakelijk_projectbouw_locales" (
  	"hero_badge" varchar DEFAULT 'Projectbouw & Ontwikkeling',
  	"hero_title" varchar DEFAULT 'Series op maat voor uw project' NOT NULL,
  	"hero_text" varchar DEFAULT 'Voor woningbouw- en nieuwbouwprojecten leveren we series veranda''s en overkappingen als één doordacht systeem. Robuuste aluminium constructies, volledig op maat gemaakt in onze eigen fabriek en vakkundig gemonteerd.',
  	"hero_button_primary" varchar DEFAULT 'Neem contact op →',
  	"hero_button_secondary" varchar DEFAULT 'Plan een adviesgesprek',
  	"hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg',
  	"benefits_heading" varchar DEFAULT 'Toepassingen & voordelen',
  	"quote" varchar DEFAULT '"Van technisch advies en nauwkeurige inmeetservice tot vakkundige montage door onze eigen professionals."',
  	"cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?',
  	"cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
  	"cta_button" varchar DEFAULT 'Neem contact op →',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "contact_locales" (
  	"hero_badge" varchar DEFAULT 'Welkom in Serooskerke',
  	"hero_title" varchar DEFAULT 'Kom langs in onze showroom' NOT NULL,
  	"hero_text" varchar DEFAULT 'Veranda Zeeland is uw complete leverancier van veranda''s, tuinkamers en glasschuifwanden. In onze showroom van 800 m² ervaart u alle modellen in het echt en krijgt u deskundig, vrijblijvend advies op maat.',
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
  	"contact_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
  	"form_heading" varchar DEFAULT 'Vraag een offerte aan',
  	"form_intro" varchar DEFAULT 'Vul het formulier in en wij nemen binnen 2 werkdagen contact met u op.',
  	"form_intro2" varchar DEFAULT 'En ontvang indien gewenst onze brochure.',
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
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "home_usps" ADD COLUMN "_locale" "_locales";
  UPDATE "home_usps" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "home_usps" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "home_reviews" ADD COLUMN "_locale" "_locales";
  UPDATE "home_reviews" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "home_reviews" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_s_lines" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_s_lines" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_s_lines" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_greenline_specs" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_greenline_specs" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_greenline_specs" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_greenline_intro_bullets" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_greenline_intro_bullets" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_greenline_intro_bullets" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_greenline_features" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_greenline_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_greenline_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_greenline_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_greenline_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_greenline_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_greenline_other_models" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_greenline_other_models" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_greenline_other_models" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_profiline_stats" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_profiline_stats" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_profiline_stats" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_profiline_ruimte_points" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_profiline_ruimte_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_profiline_ruimte_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_profiline_features" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_profiline_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_profiline_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_profiline_models" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_profiline_models" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_profiline_models" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_linea_specs" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_linea_specs" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_linea_specs" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_linea_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_linea_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_linea_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_linea_features" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_linea_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_linea_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_linea_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_linea_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_linea_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_linea_related" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_linea_related" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_linea_related" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_cube_specs" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_cube_specs" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_cube_specs" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_cube_intro_bullets" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_cube_intro_bullets" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_cube_intro_bullets" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_cube_features" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_cube_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_cube_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_cube_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_cube_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_cube_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_cube_others" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_cube_others" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_cube_others" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_pergola_stats" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_pergola_stats" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_pergola_stats" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_pergola_intro_bullets" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_pergola_intro_bullets" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_pergola_intro_bullets" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_pergola_features" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_pergola_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_pergola_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "veranda_pergola_related" ADD COLUMN "_locale" "_locales";
  UPDATE "veranda_pergola_related" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "veranda_pergola_related" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamers_types" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamers_types" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamers_types" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamers_usps" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamers_usps" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamers_usps" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamers_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamers_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamers_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamer_hellend_dak_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamer_hellend_dak_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamer_hellend_dak_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamer_hellend_dak_features" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamer_hellend_dak_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamer_hellend_dak_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamer_hellend_dak_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamer_hellend_dak_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamer_hellend_dak_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamer_vlak_dak_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamer_vlak_dak_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamer_vlak_dak_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamer_vlak_dak_features" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamer_vlak_dak_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamer_vlak_dak_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "tuinkamer_vlak_dak_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "tuinkamer_vlak_dak_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "tuinkamer_vlak_dak_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "glazen_schuifwanden_types" ADD COLUMN "_locale" "_locales";
  UPDATE "glazen_schuifwanden_types" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "glazen_schuifwanden_types" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "glazen_schuifwanden_projects" ADD COLUMN "_locale" "_locales";
  UPDATE "glazen_schuifwanden_projects" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "glazen_schuifwanden_projects" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_glas_intro_list" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_glas_intro_list" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_glas_intro_list" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_glas_features" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_glas_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_glas_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_aluminium_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_aluminium_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_aluminium_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_aluminium_features" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_aluminium_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_aluminium_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_lamellen_intro_list" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_lamellen_intro_list" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_lamellen_intro_list" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_lamellen_features" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_lamellen_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_lamellen_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_steellook_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_steellook_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_steellook_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "schuifwand_steellook_features" ADD COLUMN "_locale" "_locales";
  UPDATE "schuifwand_steellook_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "schuifwand_steellook_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_types" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_types" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_types" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_projects" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_projects" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_projects" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_onderdak_intro_list" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_onderdak_intro_list" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_onderdak_intro_list" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_onderdak_features" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_onderdak_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_onderdak_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_bovendak_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_bovendak_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_bovendak_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_bovendak_features" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_bovendak_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_bovendak_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_screens_intro_bullets" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_screens_intro_bullets" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_screens_intro_bullets" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_screens_features" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_screens_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_screens_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_uitvalschermen_intro_usps" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_uitvalschermen_intro_usps" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_uitvalschermen_intro_usps" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zonwering_uitvalschermen_features" ADD COLUMN "_locale" "_locales";
  UPDATE "zonwering_uitvalschermen_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zonwering_uitvalschermen_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "accessoires_options" ADD COLUMN "_locale" "_locales";
  UPDATE "accessoires_options" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "accessoires_options" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "accessoires_gallery" ADD COLUMN "_locale" "_locales";
  UPDATE "accessoires_gallery" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "accessoires_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_wanden_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_wanden_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_wanden_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_wanden_features" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_wanden_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_wanden_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_dakbedekking_intro_points" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_dakbedekking_intro_points" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_dakbedekking_intro_points" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_dakbedekking_features" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_dakbedekking_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_dakbedekking_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_ledverlichting_intro_bullets" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_ledverlichting_intro_bullets" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_ledverlichting_intro_bullets" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_ledverlichting_features" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_ledverlichting_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_ledverlichting_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_fundering_intro_list" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_fundering_intro_list" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_fundering_intro_list" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_fundering_features" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_fundering_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_fundering_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_onderhoud_intro_checklist" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_onderhoud_intro_checklist" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_onderhoud_intro_checklist" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "optie_onderhoud_features" ADD COLUMN "_locale" "_locales";
  UPDATE "optie_onderhoud_features" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "optie_onderhoud_features" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_sectors" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_sectors" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_sectors" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_steps" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_steps" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_steps" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_horeca_benefits" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_horeca_benefits" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_horeca_benefits" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_kantoren_benefits" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_kantoren_benefits" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_kantoren_benefits" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_onderwijs_benefits" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_onderwijs_benefits" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_onderwijs_benefits" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_vakantieparken_benefits" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_vakantieparken_benefits" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_vakantieparken_benefits" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_zorg_benefits" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_zorg_benefits" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_zorg_benefits" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "zakelijk_projectbouw_benefits" ADD COLUMN "_locale" "_locales";
  UPDATE "zakelijk_projectbouw_benefits" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "zakelijk_projectbouw_benefits" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "contact_stats" ADD COLUMN "_locale" "_locales";
  UPDATE "contact_stats" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "contact_stats" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "contact_service_areas" ADD COLUMN "_locale" "_locales";
  UPDATE "contact_service_areas" SET "_locale" = 'nl' WHERE "_locale" IS NULL;
  ALTER TABLE "contact_service_areas" ALTER COLUMN "_locale" SET NOT NULL;
  ALTER TABLE "home_locales" ADD CONSTRAINT "home_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_s_locales" ADD CONSTRAINT "veranda_s_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_s"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_greenline_locales" ADD CONSTRAINT "veranda_greenline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_greenline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_profiline_locales" ADD CONSTRAINT "veranda_profiline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_profiline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_linea_locales" ADD CONSTRAINT "veranda_linea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_linea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_cube_locales" ADD CONSTRAINT "veranda_cube_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_cube"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "veranda_pergola_locales" ADD CONSTRAINT "veranda_pergola_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."veranda_pergola"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamers_locales" ADD CONSTRAINT "tuinkamers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_hellend_dak_locales" ADD CONSTRAINT "tuinkamer_hellend_dak_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_hellend_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tuinkamer_vlak_dak_locales" ADD CONSTRAINT "tuinkamer_vlak_dak_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tuinkamer_vlak_dak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glazen_schuifwanden_locales" ADD CONSTRAINT "glazen_schuifwanden_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glazen_schuifwanden"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_glas_locales" ADD CONSTRAINT "schuifwand_glas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_glas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_aluminium_locales" ADD CONSTRAINT "schuifwand_aluminium_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_aluminium"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_lamellen_locales" ADD CONSTRAINT "schuifwand_lamellen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_lamellen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "schuifwand_steellook_locales" ADD CONSTRAINT "schuifwand_steellook_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schuifwand_steellook"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_locales" ADD CONSTRAINT "zonwering_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_onderdak_locales" ADD CONSTRAINT "zonwering_onderdak_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_onderdak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_bovendak_locales" ADD CONSTRAINT "zonwering_bovendak_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_bovendak"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_screens_locales" ADD CONSTRAINT "zonwering_screens_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zonwering_uitvalschermen_locales" ADD CONSTRAINT "zonwering_uitvalschermen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zonwering_uitvalschermen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "accessoires_locales" ADD CONSTRAINT "accessoires_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."accessoires"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_wanden_locales" ADD CONSTRAINT "optie_wanden_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_wanden"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_dakbedekking_locales" ADD CONSTRAINT "optie_dakbedekking_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_dakbedekking"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_ledverlichting_locales" ADD CONSTRAINT "optie_ledverlichting_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_ledverlichting"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_fundering_locales" ADD CONSTRAINT "optie_fundering_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_fundering"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "optie_onderhoud_locales" ADD CONSTRAINT "optie_onderhoud_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."optie_onderhoud"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_locales" ADD CONSTRAINT "zakelijk_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_horeca_locales" ADD CONSTRAINT "zakelijk_horeca_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_horeca"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_kantoren_locales" ADD CONSTRAINT "zakelijk_kantoren_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_kantoren"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_onderwijs_locales" ADD CONSTRAINT "zakelijk_onderwijs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_onderwijs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_vakantieparken_locales" ADD CONSTRAINT "zakelijk_vakantieparken_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_vakantieparken"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_zorg_locales" ADD CONSTRAINT "zakelijk_zorg_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_zorg"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "zakelijk_projectbouw_locales" ADD CONSTRAINT "zakelijk_projectbouw_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."zakelijk_projectbouw"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_locales" ADD CONSTRAINT "contact_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "home_locales_locale_parent_id_unique" ON "home_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "veranda_s_locales_locale_parent_id_unique" ON "veranda_s_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "veranda_greenline_locales_locale_parent_id_unique" ON "veranda_greenline_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "veranda_profiline_locales_locale_parent_id_unique" ON "veranda_profiline_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "veranda_linea_locales_locale_parent_id_unique" ON "veranda_linea_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "veranda_cube_locales_locale_parent_id_unique" ON "veranda_cube_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "veranda_pergola_locales_locale_parent_id_unique" ON "veranda_pergola_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "tuinkamers_locales_locale_parent_id_unique" ON "tuinkamers_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "tuinkamer_hellend_dak_locales_locale_parent_id_unique" ON "tuinkamer_hellend_dak_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "tuinkamer_vlak_dak_locales_locale_parent_id_unique" ON "tuinkamer_vlak_dak_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "glazen_schuifwanden_locales_locale_parent_id_unique" ON "glazen_schuifwanden_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "schuifwand_glas_locales_locale_parent_id_unique" ON "schuifwand_glas_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "schuifwand_aluminium_locales_locale_parent_id_unique" ON "schuifwand_aluminium_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "schuifwand_lamellen_locales_locale_parent_id_unique" ON "schuifwand_lamellen_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "schuifwand_steellook_locales_locale_parent_id_unique" ON "schuifwand_steellook_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zonwering_locales_locale_parent_id_unique" ON "zonwering_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zonwering_onderdak_locales_locale_parent_id_unique" ON "zonwering_onderdak_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zonwering_bovendak_locales_locale_parent_id_unique" ON "zonwering_bovendak_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zonwering_screens_locales_locale_parent_id_unique" ON "zonwering_screens_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zonwering_uitvalschermen_locales_locale_parent_id_unique" ON "zonwering_uitvalschermen_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "accessoires_locales_locale_parent_id_unique" ON "accessoires_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "optie_wanden_locales_locale_parent_id_unique" ON "optie_wanden_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "optie_dakbedekking_locales_locale_parent_id_unique" ON "optie_dakbedekking_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "optie_ledverlichting_locales_locale_parent_id_unique" ON "optie_ledverlichting_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "optie_fundering_locales_locale_parent_id_unique" ON "optie_fundering_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "optie_onderhoud_locales_locale_parent_id_unique" ON "optie_onderhoud_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_locales_locale_parent_id_unique" ON "zakelijk_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_horeca_locales_locale_parent_id_unique" ON "zakelijk_horeca_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_kantoren_locales_locale_parent_id_unique" ON "zakelijk_kantoren_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_onderwijs_locales_locale_parent_id_unique" ON "zakelijk_onderwijs_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_vakantieparken_locales_locale_parent_id_unique" ON "zakelijk_vakantieparken_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_zorg_locales_locale_parent_id_unique" ON "zakelijk_zorg_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "zakelijk_projectbouw_locales_locale_parent_id_unique" ON "zakelijk_projectbouw_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "contact_locales_locale_parent_id_unique" ON "contact_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_usps_locale_idx" ON "home_usps" USING btree ("_locale");
  CREATE INDEX "home_reviews_locale_idx" ON "home_reviews" USING btree ("_locale");
  CREATE INDEX "veranda_s_lines_locale_idx" ON "veranda_s_lines" USING btree ("_locale");
  CREATE INDEX "veranda_greenline_specs_locale_idx" ON "veranda_greenline_specs" USING btree ("_locale");
  CREATE INDEX "veranda_greenline_intro_bullets_locale_idx" ON "veranda_greenline_intro_bullets" USING btree ("_locale");
  CREATE INDEX "veranda_greenline_features_locale_idx" ON "veranda_greenline_features" USING btree ("_locale");
  CREATE INDEX "veranda_greenline_gallery_locale_idx" ON "veranda_greenline_gallery" USING btree ("_locale");
  CREATE INDEX "veranda_greenline_other_models_locale_idx" ON "veranda_greenline_other_models" USING btree ("_locale");
  CREATE INDEX "veranda_profiline_stats_locale_idx" ON "veranda_profiline_stats" USING btree ("_locale");
  CREATE INDEX "veranda_profiline_ruimte_points_locale_idx" ON "veranda_profiline_ruimte_points" USING btree ("_locale");
  CREATE INDEX "veranda_profiline_features_locale_idx" ON "veranda_profiline_features" USING btree ("_locale");
  CREATE INDEX "veranda_profiline_models_locale_idx" ON "veranda_profiline_models" USING btree ("_locale");
  CREATE INDEX "veranda_linea_specs_locale_idx" ON "veranda_linea_specs" USING btree ("_locale");
  CREATE INDEX "veranda_linea_intro_points_locale_idx" ON "veranda_linea_intro_points" USING btree ("_locale");
  CREATE INDEX "veranda_linea_features_locale_idx" ON "veranda_linea_features" USING btree ("_locale");
  CREATE INDEX "veranda_linea_gallery_locale_idx" ON "veranda_linea_gallery" USING btree ("_locale");
  CREATE INDEX "veranda_linea_related_locale_idx" ON "veranda_linea_related" USING btree ("_locale");
  CREATE INDEX "veranda_cube_specs_locale_idx" ON "veranda_cube_specs" USING btree ("_locale");
  CREATE INDEX "veranda_cube_intro_bullets_locale_idx" ON "veranda_cube_intro_bullets" USING btree ("_locale");
  CREATE INDEX "veranda_cube_features_locale_idx" ON "veranda_cube_features" USING btree ("_locale");
  CREATE INDEX "veranda_cube_gallery_locale_idx" ON "veranda_cube_gallery" USING btree ("_locale");
  CREATE INDEX "veranda_cube_others_locale_idx" ON "veranda_cube_others" USING btree ("_locale");
  CREATE INDEX "veranda_pergola_stats_locale_idx" ON "veranda_pergola_stats" USING btree ("_locale");
  CREATE INDEX "veranda_pergola_intro_bullets_locale_idx" ON "veranda_pergola_intro_bullets" USING btree ("_locale");
  CREATE INDEX "veranda_pergola_features_locale_idx" ON "veranda_pergola_features" USING btree ("_locale");
  CREATE INDEX "veranda_pergola_related_locale_idx" ON "veranda_pergola_related" USING btree ("_locale");
  CREATE INDEX "tuinkamers_types_locale_idx" ON "tuinkamers_types" USING btree ("_locale");
  CREATE INDEX "tuinkamers_usps_locale_idx" ON "tuinkamers_usps" USING btree ("_locale");
  CREATE INDEX "tuinkamers_gallery_locale_idx" ON "tuinkamers_gallery" USING btree ("_locale");
  CREATE INDEX "tuinkamer_hellend_dak_intro_points_locale_idx" ON "tuinkamer_hellend_dak_intro_points" USING btree ("_locale");
  CREATE INDEX "tuinkamer_hellend_dak_features_locale_idx" ON "tuinkamer_hellend_dak_features" USING btree ("_locale");
  CREATE INDEX "tuinkamer_hellend_dak_gallery_locale_idx" ON "tuinkamer_hellend_dak_gallery" USING btree ("_locale");
  CREATE INDEX "tuinkamer_vlak_dak_intro_points_locale_idx" ON "tuinkamer_vlak_dak_intro_points" USING btree ("_locale");
  CREATE INDEX "tuinkamer_vlak_dak_features_locale_idx" ON "tuinkamer_vlak_dak_features" USING btree ("_locale");
  CREATE INDEX "tuinkamer_vlak_dak_gallery_locale_idx" ON "tuinkamer_vlak_dak_gallery" USING btree ("_locale");
  CREATE INDEX "glazen_schuifwanden_types_locale_idx" ON "glazen_schuifwanden_types" USING btree ("_locale");
  CREATE INDEX "glazen_schuifwanden_projects_locale_idx" ON "glazen_schuifwanden_projects" USING btree ("_locale");
  CREATE INDEX "schuifwand_glas_intro_list_locale_idx" ON "schuifwand_glas_intro_list" USING btree ("_locale");
  CREATE INDEX "schuifwand_glas_features_locale_idx" ON "schuifwand_glas_features" USING btree ("_locale");
  CREATE INDEX "schuifwand_aluminium_intro_points_locale_idx" ON "schuifwand_aluminium_intro_points" USING btree ("_locale");
  CREATE INDEX "schuifwand_aluminium_features_locale_idx" ON "schuifwand_aluminium_features" USING btree ("_locale");
  CREATE INDEX "schuifwand_lamellen_intro_list_locale_idx" ON "schuifwand_lamellen_intro_list" USING btree ("_locale");
  CREATE INDEX "schuifwand_lamellen_features_locale_idx" ON "schuifwand_lamellen_features" USING btree ("_locale");
  CREATE INDEX "schuifwand_steellook_intro_points_locale_idx" ON "schuifwand_steellook_intro_points" USING btree ("_locale");
  CREATE INDEX "schuifwand_steellook_features_locale_idx" ON "schuifwand_steellook_features" USING btree ("_locale");
  CREATE INDEX "zonwering_types_locale_idx" ON "zonwering_types" USING btree ("_locale");
  CREATE INDEX "zonwering_projects_locale_idx" ON "zonwering_projects" USING btree ("_locale");
  CREATE INDEX "zonwering_onderdak_intro_list_locale_idx" ON "zonwering_onderdak_intro_list" USING btree ("_locale");
  CREATE INDEX "zonwering_onderdak_features_locale_idx" ON "zonwering_onderdak_features" USING btree ("_locale");
  CREATE INDEX "zonwering_bovendak_intro_points_locale_idx" ON "zonwering_bovendak_intro_points" USING btree ("_locale");
  CREATE INDEX "zonwering_bovendak_features_locale_idx" ON "zonwering_bovendak_features" USING btree ("_locale");
  CREATE INDEX "zonwering_screens_intro_bullets_locale_idx" ON "zonwering_screens_intro_bullets" USING btree ("_locale");
  CREATE INDEX "zonwering_screens_features_locale_idx" ON "zonwering_screens_features" USING btree ("_locale");
  CREATE INDEX "zonwering_uitvalschermen_intro_usps_locale_idx" ON "zonwering_uitvalschermen_intro_usps" USING btree ("_locale");
  CREATE INDEX "zonwering_uitvalschermen_features_locale_idx" ON "zonwering_uitvalschermen_features" USING btree ("_locale");
  CREATE INDEX "accessoires_options_locale_idx" ON "accessoires_options" USING btree ("_locale");
  CREATE INDEX "accessoires_gallery_locale_idx" ON "accessoires_gallery" USING btree ("_locale");
  CREATE INDEX "optie_wanden_intro_points_locale_idx" ON "optie_wanden_intro_points" USING btree ("_locale");
  CREATE INDEX "optie_wanden_features_locale_idx" ON "optie_wanden_features" USING btree ("_locale");
  CREATE INDEX "optie_dakbedekking_intro_points_locale_idx" ON "optie_dakbedekking_intro_points" USING btree ("_locale");
  CREATE INDEX "optie_dakbedekking_features_locale_idx" ON "optie_dakbedekking_features" USING btree ("_locale");
  CREATE INDEX "optie_ledverlichting_intro_bullets_locale_idx" ON "optie_ledverlichting_intro_bullets" USING btree ("_locale");
  CREATE INDEX "optie_ledverlichting_features_locale_idx" ON "optie_ledverlichting_features" USING btree ("_locale");
  CREATE INDEX "optie_fundering_intro_list_locale_idx" ON "optie_fundering_intro_list" USING btree ("_locale");
  CREATE INDEX "optie_fundering_features_locale_idx" ON "optie_fundering_features" USING btree ("_locale");
  CREATE INDEX "optie_onderhoud_intro_checklist_locale_idx" ON "optie_onderhoud_intro_checklist" USING btree ("_locale");
  CREATE INDEX "optie_onderhoud_features_locale_idx" ON "optie_onderhoud_features" USING btree ("_locale");
  CREATE INDEX "zakelijk_sectors_locale_idx" ON "zakelijk_sectors" USING btree ("_locale");
  CREATE INDEX "zakelijk_steps_locale_idx" ON "zakelijk_steps" USING btree ("_locale");
  CREATE INDEX "zakelijk_horeca_benefits_locale_idx" ON "zakelijk_horeca_benefits" USING btree ("_locale");
  CREATE INDEX "zakelijk_kantoren_benefits_locale_idx" ON "zakelijk_kantoren_benefits" USING btree ("_locale");
  CREATE INDEX "zakelijk_onderwijs_benefits_locale_idx" ON "zakelijk_onderwijs_benefits" USING btree ("_locale");
  CREATE INDEX "zakelijk_vakantieparken_benefits_locale_idx" ON "zakelijk_vakantieparken_benefits" USING btree ("_locale");
  CREATE INDEX "zakelijk_zorg_benefits_locale_idx" ON "zakelijk_zorg_benefits" USING btree ("_locale");
  CREATE INDEX "zakelijk_projectbouw_benefits_locale_idx" ON "zakelijk_projectbouw_benefits" USING btree ("_locale");
  CREATE INDEX "contact_stats_locale_idx" ON "contact_stats" USING btree ("_locale");
  CREATE INDEX "contact_service_areas_locale_idx" ON "contact_service_areas" USING btree ("_locale");
  ALTER TABLE "home" DROP COLUMN "hero_badge";
  ALTER TABLE "home" DROP COLUMN "hero_title";
  ALTER TABLE "home" DROP COLUMN "hero_subtitle";
  ALTER TABLE "home" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "home" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "home" DROP COLUMN "categories_heading";
  ALTER TABLE "home" DROP COLUMN "welcome_label";
  ALTER TABLE "home" DROP COLUMN "welcome_title";
  ALTER TABLE "home" DROP COLUMN "welkom_bij_verandazeeland_tekst";
  ALTER TABLE "home" DROP COLUMN "welcome_cta";
  ALTER TABLE "home" DROP COLUMN "models_heading";
  ALTER TABLE "home" DROP COLUMN "models_sub";
  ALTER TABLE "home" DROP COLUMN "cta_title";
  ALTER TABLE "home" DROP COLUMN "cta_text";
  ALTER TABLE "home" DROP COLUMN "cta_button";
  ALTER TABLE "veranda_s" DROP COLUMN "hero_badge";
  ALTER TABLE "veranda_s" DROP COLUMN "hero_title";
  ALTER TABLE "veranda_s" DROP COLUMN "hero_text";
  ALTER TABLE "veranda_s" DROP COLUMN "lines_heading";
  ALTER TABLE "veranda_s" DROP COLUMN "lines_intro";
  ALTER TABLE "veranda_s" DROP COLUMN "ombouw_label";
  ALTER TABLE "veranda_s" DROP COLUMN "ombouw_title";
  ALTER TABLE "veranda_s" DROP COLUMN "ombouw_text";
  ALTER TABLE "veranda_s" DROP COLUMN "ombouw_cta";
  ALTER TABLE "veranda_s" DROP COLUMN "cta_title";
  ALTER TABLE "veranda_s" DROP COLUMN "cta_text";
  ALTER TABLE "veranda_s" DROP COLUMN "cta_button";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_badge";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_price";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_text";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_button_primary";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_button_secondary";
  ALTER TABLE "veranda_greenline" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "veranda_greenline" DROP COLUMN "intro_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "intro_text";
  ALTER TABLE "veranda_greenline" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "veranda_greenline" DROP COLUMN "features_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "config_label";
  ALTER TABLE "veranda_greenline" DROP COLUMN "config_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "config_text";
  ALTER TABLE "veranda_greenline" DROP COLUMN "config_cta";
  ALTER TABLE "veranda_greenline" DROP COLUMN "config_image_fallback";
  ALTER TABLE "veranda_greenline" DROP COLUMN "gallery_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "other_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "cta_title";
  ALTER TABLE "veranda_greenline" DROP COLUMN "cta_text";
  ALTER TABLE "veranda_greenline" DROP COLUMN "cta_button";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_badge";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_price";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_title";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_text";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_button_primary";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_button_secondary";
  ALTER TABLE "veranda_profiline" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "veranda_profiline" DROP COLUMN "ruimte_title";
  ALTER TABLE "veranda_profiline" DROP COLUMN "ruimte_text";
  ALTER TABLE "veranda_profiline" DROP COLUMN "ruimte_image_fallback";
  ALTER TABLE "veranda_profiline" DROP COLUMN "features_title";
  ALTER TABLE "veranda_profiline" DROP COLUMN "maat_label";
  ALTER TABLE "veranda_profiline" DROP COLUMN "maat_title";
  ALTER TABLE "veranda_profiline" DROP COLUMN "maat_text";
  ALTER TABLE "veranda_profiline" DROP COLUMN "maat_cta";
  ALTER TABLE "veranda_profiline" DROP COLUMN "maat_image_fallback";
  ALTER TABLE "veranda_profiline" DROP COLUMN "models_title";
  ALTER TABLE "veranda_profiline" DROP COLUMN "cta_title";
  ALTER TABLE "veranda_profiline" DROP COLUMN "cta_text";
  ALTER TABLE "veranda_profiline" DROP COLUMN "cta_button";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_badge";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_price";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_text";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_cta_primary";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_cta_secondary";
  ALTER TABLE "veranda_linea" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "veranda_linea" DROP COLUMN "intro_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "intro_text";
  ALTER TABLE "veranda_linea" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "veranda_linea" DROP COLUMN "features_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "opmaat_label";
  ALTER TABLE "veranda_linea" DROP COLUMN "opmaat_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "opmaat_text";
  ALTER TABLE "veranda_linea" DROP COLUMN "opmaat_cta";
  ALTER TABLE "veranda_linea" DROP COLUMN "opmaat_image_fallback";
  ALTER TABLE "veranda_linea" DROP COLUMN "gallery_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "related_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "cta_title";
  ALTER TABLE "veranda_linea" DROP COLUMN "cta_text";
  ALTER TABLE "veranda_linea" DROP COLUMN "cta_button";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_badge";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_price";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_text";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_cta_primary";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_cta_secondary";
  ALTER TABLE "veranda_cube" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "veranda_cube" DROP COLUMN "intro_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "intro_text";
  ALTER TABLE "veranda_cube" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "veranda_cube" DROP COLUMN "features_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "ombouw_label";
  ALTER TABLE "veranda_cube" DROP COLUMN "ombouw_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "ombouw_text";
  ALTER TABLE "veranda_cube" DROP COLUMN "ombouw_cta";
  ALTER TABLE "veranda_cube" DROP COLUMN "ombouw_image_fallback";
  ALTER TABLE "veranda_cube" DROP COLUMN "gallery_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "others_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "cta_title";
  ALTER TABLE "veranda_cube" DROP COLUMN "cta_text";
  ALTER TABLE "veranda_cube" DROP COLUMN "cta_button";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_badge";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_price";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_title";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_text";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "veranda_pergola" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "veranda_pergola" DROP COLUMN "intro_title";
  ALTER TABLE "veranda_pergola" DROP COLUMN "intro_text";
  ALTER TABLE "veranda_pergola" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "veranda_pergola" DROP COLUMN "features_heading";
  ALTER TABLE "veranda_pergola" DROP COLUMN "band_label";
  ALTER TABLE "veranda_pergola" DROP COLUMN "band_title";
  ALTER TABLE "veranda_pergola" DROP COLUMN "band_text";
  ALTER TABLE "veranda_pergola" DROP COLUMN "band_cta";
  ALTER TABLE "veranda_pergola" DROP COLUMN "band_image_fallback";
  ALTER TABLE "veranda_pergola" DROP COLUMN "related_heading";
  ALTER TABLE "veranda_pergola" DROP COLUMN "cta_title";
  ALTER TABLE "veranda_pergola" DROP COLUMN "cta_text";
  ALTER TABLE "veranda_pergola" DROP COLUMN "cta_button";
  ALTER TABLE "tuinkamers" DROP COLUMN "hero_badge";
  ALTER TABLE "tuinkamers" DROP COLUMN "hero_title";
  ALTER TABLE "tuinkamers" DROP COLUMN "hero_text";
  ALTER TABLE "tuinkamers" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "tuinkamers" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "tuinkamers" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "tuinkamers" DROP COLUMN "types_label";
  ALTER TABLE "tuinkamers" DROP COLUMN "types_heading";
  ALTER TABLE "tuinkamers" DROP COLUMN "types_intro";
  ALTER TABLE "tuinkamers" DROP COLUMN "usp_heading";
  ALTER TABLE "tuinkamers" DROP COLUMN "usp_intro";
  ALTER TABLE "tuinkamers" DROP COLUMN "gallery_heading";
  ALTER TABLE "tuinkamers" DROP COLUMN "glas_label";
  ALTER TABLE "tuinkamers" DROP COLUMN "glas_title";
  ALTER TABLE "tuinkamers" DROP COLUMN "glas_text";
  ALTER TABLE "tuinkamers" DROP COLUMN "glas_cta";
  ALTER TABLE "tuinkamers" DROP COLUMN "glas_image_fallback";
  ALTER TABLE "tuinkamers" DROP COLUMN "cta_title";
  ALTER TABLE "tuinkamers" DROP COLUMN "cta_text";
  ALTER TABLE "tuinkamers" DROP COLUMN "cta_button";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "hero_badge";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "hero_title";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "hero_text";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "intro_title";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "intro_text";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "features_heading";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "gallery_heading";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "alt_label";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "alt_title";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "alt_text";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "alt_cta";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "alt_image_fallback";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "cta_title";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "cta_text";
  ALTER TABLE "tuinkamer_hellend_dak" DROP COLUMN "cta_button";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "hero_badge";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "hero_title";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "hero_text";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "intro_title";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "intro_text";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "features_title";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "gallery_title";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "alt_label";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "alt_title";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "alt_text";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "alt_cta";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "alt_image_fallback";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "cta_title";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "cta_text";
  ALTER TABLE "tuinkamer_vlak_dak" DROP COLUMN "cta_button";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "hero_badge";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "hero_title";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "hero_text";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "types_heading";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "types_intro";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "projects_heading";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "combo_label";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "combo_title";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "combo_text";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "combo_cta";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "combo_image_fallback";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "cta_title";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "cta_text";
  ALTER TABLE "glazen_schuifwanden" DROP COLUMN "cta_button";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "hero_badge";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "hero_title";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "hero_text";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "hero_fallback";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "intro_title";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "intro_text";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "intro_fallback";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "features_heading";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "cta_title";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "cta_text";
  ALTER TABLE "schuifwand_glas" DROP COLUMN "cta_button";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "hero_badge";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "hero_title";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "hero_text";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "intro_title";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "intro_text";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "features_title";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "cta_title";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "cta_text";
  ALTER TABLE "schuifwand_aluminium" DROP COLUMN "cta_button";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "hero_badge";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "hero_title";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "hero_text";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "hero_fallback";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "intro_title";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "intro_text";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "intro_fallback";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "features_heading";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "cta_title";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "cta_text";
  ALTER TABLE "schuifwand_lamellen" DROP COLUMN "cta_button";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "hero_badge";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "hero_title";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "hero_text";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "hero_fallback";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "intro_heading";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "intro_text";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "intro_fallback";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "features_heading";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "cta_title";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "cta_text";
  ALTER TABLE "schuifwand_steellook" DROP COLUMN "cta_button";
  ALTER TABLE "zonwering" DROP COLUMN "hero_badge";
  ALTER TABLE "zonwering" DROP COLUMN "hero_title";
  ALTER TABLE "zonwering" DROP COLUMN "hero_text";
  ALTER TABLE "zonwering" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zonwering" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zonwering" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "zonwering" DROP COLUMN "types_heading";
  ALTER TABLE "zonwering" DROP COLUMN "types_intro";
  ALTER TABLE "zonwering" DROP COLUMN "projects_heading";
  ALTER TABLE "zonwering" DROP COLUMN "comfort_label";
  ALTER TABLE "zonwering" DROP COLUMN "comfort_title";
  ALTER TABLE "zonwering" DROP COLUMN "comfort_text";
  ALTER TABLE "zonwering" DROP COLUMN "comfort_cta";
  ALTER TABLE "zonwering" DROP COLUMN "comfort_image_fallback";
  ALTER TABLE "zonwering" DROP COLUMN "cta_title";
  ALTER TABLE "zonwering" DROP COLUMN "cta_text";
  ALTER TABLE "zonwering" DROP COLUMN "cta_button";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "hero_badge";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "hero_title";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "hero_text";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "hero_fallback";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "intro_title";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "intro_text";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "intro_fallback";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "features_heading";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "cta_title";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "cta_text";
  ALTER TABLE "zonwering_onderdak" DROP COLUMN "cta_button";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "hero_badge";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "hero_title";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "hero_text";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "hero_fallback";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "intro_title";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "intro_text";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "intro_fallback";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "features_title";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "cta_title";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "cta_text";
  ALTER TABLE "zonwering_bovendak" DROP COLUMN "cta_button";
  ALTER TABLE "zonwering_screens" DROP COLUMN "hero_badge";
  ALTER TABLE "zonwering_screens" DROP COLUMN "hero_title";
  ALTER TABLE "zonwering_screens" DROP COLUMN "hero_text";
  ALTER TABLE "zonwering_screens" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zonwering_screens" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zonwering_screens" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "zonwering_screens" DROP COLUMN "intro_title";
  ALTER TABLE "zonwering_screens" DROP COLUMN "intro_text";
  ALTER TABLE "zonwering_screens" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "zonwering_screens" DROP COLUMN "features_title";
  ALTER TABLE "zonwering_screens" DROP COLUMN "cta_title";
  ALTER TABLE "zonwering_screens" DROP COLUMN "cta_text";
  ALTER TABLE "zonwering_screens" DROP COLUMN "cta_button";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "hero_badge";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "hero_title";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "hero_text";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "hero_fallback";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "intro_title";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "intro_text";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "intro_fallback";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "features_heading";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "cta_title";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "cta_text";
  ALTER TABLE "zonwering_uitvalschermen" DROP COLUMN "cta_button";
  ALTER TABLE "accessoires" DROP COLUMN "hero_badge";
  ALTER TABLE "accessoires" DROP COLUMN "hero_title";
  ALTER TABLE "accessoires" DROP COLUMN "hero_text";
  ALTER TABLE "accessoires" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "accessoires" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "accessoires" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "accessoires" DROP COLUMN "options_heading";
  ALTER TABLE "accessoires" DROP COLUMN "options_intro";
  ALTER TABLE "accessoires" DROP COLUMN "gallery_heading";
  ALTER TABLE "accessoires" DROP COLUMN "advies_label";
  ALTER TABLE "accessoires" DROP COLUMN "advies_title";
  ALTER TABLE "accessoires" DROP COLUMN "advies_text";
  ALTER TABLE "accessoires" DROP COLUMN "advies_cta";
  ALTER TABLE "accessoires" DROP COLUMN "advies_image_fallback";
  ALTER TABLE "accessoires" DROP COLUMN "cta_title";
  ALTER TABLE "accessoires" DROP COLUMN "cta_text";
  ALTER TABLE "accessoires" DROP COLUMN "cta_button";
  ALTER TABLE "optie_wanden" DROP COLUMN "hero_badge";
  ALTER TABLE "optie_wanden" DROP COLUMN "hero_title";
  ALTER TABLE "optie_wanden" DROP COLUMN "hero_text";
  ALTER TABLE "optie_wanden" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "optie_wanden" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "optie_wanden" DROP COLUMN "intro_title";
  ALTER TABLE "optie_wanden" DROP COLUMN "intro_text";
  ALTER TABLE "optie_wanden" DROP COLUMN "features_title";
  ALTER TABLE "optie_wanden" DROP COLUMN "cta_title";
  ALTER TABLE "optie_wanden" DROP COLUMN "cta_text";
  ALTER TABLE "optie_wanden" DROP COLUMN "cta_button";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "hero_badge";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "hero_title";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "hero_text";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "intro_title";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "intro_text";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "features_title";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "cta_title";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "cta_text";
  ALTER TABLE "optie_dakbedekking" DROP COLUMN "cta_button";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "hero_badge";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "hero_title";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "hero_text";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "intro_title";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "intro_text";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "intro_image_fallback";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "features_title";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "cta_title";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "cta_text";
  ALTER TABLE "optie_ledverlichting" DROP COLUMN "cta_button";
  ALTER TABLE "optie_fundering" DROP COLUMN "hero_badge";
  ALTER TABLE "optie_fundering" DROP COLUMN "hero_title";
  ALTER TABLE "optie_fundering" DROP COLUMN "hero_text";
  ALTER TABLE "optie_fundering" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "optie_fundering" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "optie_fundering" DROP COLUMN "intro_title";
  ALTER TABLE "optie_fundering" DROP COLUMN "intro_text";
  ALTER TABLE "optie_fundering" DROP COLUMN "features_title";
  ALTER TABLE "optie_fundering" DROP COLUMN "cta_title";
  ALTER TABLE "optie_fundering" DROP COLUMN "cta_text";
  ALTER TABLE "optie_fundering" DROP COLUMN "cta_button";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "hero_badge";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "hero_title";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "hero_text";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "hero_fallback";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "intro_title";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "intro_text";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "intro_fallback";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "features_heading";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "cta_title";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "cta_text";
  ALTER TABLE "optie_onderhoud" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk" DROP COLUMN "hero_button1";
  ALTER TABLE "zakelijk" DROP COLUMN "hero_button2";
  ALTER TABLE "zakelijk" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "zakelijk" DROP COLUMN "sectors_heading";
  ALTER TABLE "zakelijk" DROP COLUMN "sectors_intro";
  ALTER TABLE "zakelijk" DROP COLUMN "steps_heading";
  ALTER TABLE "zakelijk" DROP COLUMN "band_label";
  ALTER TABLE "zakelijk" DROP COLUMN "band_title";
  ALTER TABLE "zakelijk" DROP COLUMN "band_text";
  ALTER TABLE "zakelijk" DROP COLUMN "band_cta";
  ALTER TABLE "zakelijk" DROP COLUMN "band_image_fallback";
  ALTER TABLE "zakelijk" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "hero_button1";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "hero_button2";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "hero_fallback";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "benefits_heading";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "quote";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk_horeca" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "hero_button_primary";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "hero_button_secondary";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "benefits_heading";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "quote";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk_kantoren" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "hero_fallback";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "benefits_heading";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "quote";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk_onderwijs" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "hero_primary_cta";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "hero_secondary_cta";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "hero_fallback";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "benefits_heading";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "quote";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk_vakantieparken" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "hero_button1";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "hero_button2";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "benefits_heading";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "quote";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk_zorg" DROP COLUMN "cta_button";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "hero_badge";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "hero_title";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "hero_text";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "hero_button_primary";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "hero_button_secondary";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "benefits_heading";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "quote";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "cta_title";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "cta_text";
  ALTER TABLE "zakelijk_projectbouw" DROP COLUMN "cta_button";
  ALTER TABLE "contact" DROP COLUMN "hero_badge";
  ALTER TABLE "contact" DROP COLUMN "hero_title";
  ALTER TABLE "contact" DROP COLUMN "hero_text";
  ALTER TABLE "contact" DROP COLUMN "hero_image_fallback";
  ALTER TABLE "contact" DROP COLUMN "contact_heading";
  ALTER TABLE "contact" DROP COLUMN "address_label";
  ALTER TABLE "contact" DROP COLUMN "address_line1";
  ALTER TABLE "contact" DROP COLUMN "address_line2";
  ALTER TABLE "contact" DROP COLUMN "phone_label";
  ALTER TABLE "contact" DROP COLUMN "phone";
  ALTER TABLE "contact" DROP COLUMN "email_label";
  ALTER TABLE "contact" DROP COLUMN "email";
  ALTER TABLE "contact" DROP COLUMN "hours_label";
  ALTER TABLE "contact" DROP COLUMN "hours_days";
  ALTER TABLE "contact" DROP COLUMN "hours_time";
  ALTER TABLE "contact" DROP COLUMN "hours_note";
  ALTER TABLE "contact" DROP COLUMN "contact_image_fallback";
  ALTER TABLE "contact" DROP COLUMN "form_heading";
  ALTER TABLE "contact" DROP COLUMN "form_intro";
  ALTER TABLE "contact" DROP COLUMN "form_intro2";
  ALTER TABLE "contact" DROP COLUMN "form_first_name";
  ALTER TABLE "contact" DROP COLUMN "form_last_name";
  ALTER TABLE "contact" DROP COLUMN "form_email";
  ALTER TABLE "contact" DROP COLUMN "form_phone";
  ALTER TABLE "contact" DROP COLUMN "form_interest";
  ALTER TABLE "contact" DROP COLUMN "form_message";
  ALTER TABLE "contact" DROP COLUMN "form_button";
  ALTER TABLE "contact" DROP COLUMN "form_disclaimer";
  ALTER TABLE "contact" DROP COLUMN "service_heading";
  ALTER TABLE "contact" DROP COLUMN "service_text";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "veranda_s_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "veranda_greenline_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "veranda_profiline_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "veranda_linea_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "veranda_cube_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "veranda_pergola_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tuinkamers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tuinkamer_hellend_dak_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tuinkamer_vlak_dak_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glazen_schuifwanden_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "schuifwand_glas_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "schuifwand_aluminium_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "schuifwand_lamellen_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "schuifwand_steellook_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zonwering_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zonwering_onderdak_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zonwering_bovendak_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zonwering_screens_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zonwering_uitvalschermen_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "accessoires_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "optie_wanden_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "optie_dakbedekking_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "optie_ledverlichting_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "optie_fundering_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "optie_onderhoud_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_horeca_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_kantoren_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_onderwijs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_vakantieparken_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_zorg_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "zakelijk_projectbouw_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "home_locales" CASCADE;
  DROP TABLE "veranda_s_locales" CASCADE;
  DROP TABLE "veranda_greenline_locales" CASCADE;
  DROP TABLE "veranda_profiline_locales" CASCADE;
  DROP TABLE "veranda_linea_locales" CASCADE;
  DROP TABLE "veranda_cube_locales" CASCADE;
  DROP TABLE "veranda_pergola_locales" CASCADE;
  DROP TABLE "tuinkamers_locales" CASCADE;
  DROP TABLE "tuinkamer_hellend_dak_locales" CASCADE;
  DROP TABLE "tuinkamer_vlak_dak_locales" CASCADE;
  DROP TABLE "glazen_schuifwanden_locales" CASCADE;
  DROP TABLE "schuifwand_glas_locales" CASCADE;
  DROP TABLE "schuifwand_aluminium_locales" CASCADE;
  DROP TABLE "schuifwand_lamellen_locales" CASCADE;
  DROP TABLE "schuifwand_steellook_locales" CASCADE;
  DROP TABLE "zonwering_locales" CASCADE;
  DROP TABLE "zonwering_onderdak_locales" CASCADE;
  DROP TABLE "zonwering_bovendak_locales" CASCADE;
  DROP TABLE "zonwering_screens_locales" CASCADE;
  DROP TABLE "zonwering_uitvalschermen_locales" CASCADE;
  DROP TABLE "accessoires_locales" CASCADE;
  DROP TABLE "optie_wanden_locales" CASCADE;
  DROP TABLE "optie_dakbedekking_locales" CASCADE;
  DROP TABLE "optie_ledverlichting_locales" CASCADE;
  DROP TABLE "optie_fundering_locales" CASCADE;
  DROP TABLE "optie_onderhoud_locales" CASCADE;
  DROP TABLE "zakelijk_locales" CASCADE;
  DROP TABLE "zakelijk_horeca_locales" CASCADE;
  DROP TABLE "zakelijk_kantoren_locales" CASCADE;
  DROP TABLE "zakelijk_onderwijs_locales" CASCADE;
  DROP TABLE "zakelijk_vakantieparken_locales" CASCADE;
  DROP TABLE "zakelijk_zorg_locales" CASCADE;
  DROP TABLE "zakelijk_projectbouw_locales" CASCADE;
  DROP TABLE "contact_locales" CASCADE;
  DROP INDEX "home_usps_locale_idx";
  DROP INDEX "home_reviews_locale_idx";
  DROP INDEX "veranda_s_lines_locale_idx";
  DROP INDEX "veranda_greenline_specs_locale_idx";
  DROP INDEX "veranda_greenline_intro_bullets_locale_idx";
  DROP INDEX "veranda_greenline_features_locale_idx";
  DROP INDEX "veranda_greenline_gallery_locale_idx";
  DROP INDEX "veranda_greenline_other_models_locale_idx";
  DROP INDEX "veranda_profiline_stats_locale_idx";
  DROP INDEX "veranda_profiline_ruimte_points_locale_idx";
  DROP INDEX "veranda_profiline_features_locale_idx";
  DROP INDEX "veranda_profiline_models_locale_idx";
  DROP INDEX "veranda_linea_specs_locale_idx";
  DROP INDEX "veranda_linea_intro_points_locale_idx";
  DROP INDEX "veranda_linea_features_locale_idx";
  DROP INDEX "veranda_linea_gallery_locale_idx";
  DROP INDEX "veranda_linea_related_locale_idx";
  DROP INDEX "veranda_cube_specs_locale_idx";
  DROP INDEX "veranda_cube_intro_bullets_locale_idx";
  DROP INDEX "veranda_cube_features_locale_idx";
  DROP INDEX "veranda_cube_gallery_locale_idx";
  DROP INDEX "veranda_cube_others_locale_idx";
  DROP INDEX "veranda_pergola_stats_locale_idx";
  DROP INDEX "veranda_pergola_intro_bullets_locale_idx";
  DROP INDEX "veranda_pergola_features_locale_idx";
  DROP INDEX "veranda_pergola_related_locale_idx";
  DROP INDEX "tuinkamers_types_locale_idx";
  DROP INDEX "tuinkamers_usps_locale_idx";
  DROP INDEX "tuinkamers_gallery_locale_idx";
  DROP INDEX "tuinkamer_hellend_dak_intro_points_locale_idx";
  DROP INDEX "tuinkamer_hellend_dak_features_locale_idx";
  DROP INDEX "tuinkamer_hellend_dak_gallery_locale_idx";
  DROP INDEX "tuinkamer_vlak_dak_intro_points_locale_idx";
  DROP INDEX "tuinkamer_vlak_dak_features_locale_idx";
  DROP INDEX "tuinkamer_vlak_dak_gallery_locale_idx";
  DROP INDEX "glazen_schuifwanden_types_locale_idx";
  DROP INDEX "glazen_schuifwanden_projects_locale_idx";
  DROP INDEX "schuifwand_glas_intro_list_locale_idx";
  DROP INDEX "schuifwand_glas_features_locale_idx";
  DROP INDEX "schuifwand_aluminium_intro_points_locale_idx";
  DROP INDEX "schuifwand_aluminium_features_locale_idx";
  DROP INDEX "schuifwand_lamellen_intro_list_locale_idx";
  DROP INDEX "schuifwand_lamellen_features_locale_idx";
  DROP INDEX "schuifwand_steellook_intro_points_locale_idx";
  DROP INDEX "schuifwand_steellook_features_locale_idx";
  DROP INDEX "zonwering_types_locale_idx";
  DROP INDEX "zonwering_projects_locale_idx";
  DROP INDEX "zonwering_onderdak_intro_list_locale_idx";
  DROP INDEX "zonwering_onderdak_features_locale_idx";
  DROP INDEX "zonwering_bovendak_intro_points_locale_idx";
  DROP INDEX "zonwering_bovendak_features_locale_idx";
  DROP INDEX "zonwering_screens_intro_bullets_locale_idx";
  DROP INDEX "zonwering_screens_features_locale_idx";
  DROP INDEX "zonwering_uitvalschermen_intro_usps_locale_idx";
  DROP INDEX "zonwering_uitvalschermen_features_locale_idx";
  DROP INDEX "accessoires_options_locale_idx";
  DROP INDEX "accessoires_gallery_locale_idx";
  DROP INDEX "optie_wanden_intro_points_locale_idx";
  DROP INDEX "optie_wanden_features_locale_idx";
  DROP INDEX "optie_dakbedekking_intro_points_locale_idx";
  DROP INDEX "optie_dakbedekking_features_locale_idx";
  DROP INDEX "optie_ledverlichting_intro_bullets_locale_idx";
  DROP INDEX "optie_ledverlichting_features_locale_idx";
  DROP INDEX "optie_fundering_intro_list_locale_idx";
  DROP INDEX "optie_fundering_features_locale_idx";
  DROP INDEX "optie_onderhoud_intro_checklist_locale_idx";
  DROP INDEX "optie_onderhoud_features_locale_idx";
  DROP INDEX "zakelijk_sectors_locale_idx";
  DROP INDEX "zakelijk_steps_locale_idx";
  DROP INDEX "zakelijk_horeca_benefits_locale_idx";
  DROP INDEX "zakelijk_kantoren_benefits_locale_idx";
  DROP INDEX "zakelijk_onderwijs_benefits_locale_idx";
  DROP INDEX "zakelijk_vakantieparken_benefits_locale_idx";
  DROP INDEX "zakelijk_zorg_benefits_locale_idx";
  DROP INDEX "zakelijk_projectbouw_benefits_locale_idx";
  DROP INDEX "contact_stats_locale_idx";
  DROP INDEX "contact_service_areas_locale_idx";
  ALTER TABLE "home" ADD COLUMN "hero_badge" varchar DEFAULT 'Buitenleven aan de Zeeuwse kust';
  ALTER TABLE "home" ADD COLUMN "hero_title" varchar DEFAULT 'Geniet élk seizoen buiten.' NOT NULL;
  ALTER TABLE "home" ADD COLUMN "hero_subtitle" varchar DEFAULT 'Veranda''s, tuinkamers en glasschuifwanden van Duitse topkwaliteit, op maat gemaakt en gemonteerd door Veranda Zeeland in Serooskerke.';
  ALTER TABLE "home" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Bekijk de veranda''s →';
  ALTER TABLE "home" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "home" ADD COLUMN "categories_heading" varchar DEFAULT 'Ontdek wat er buiten mogelijk is';
  ALTER TABLE "home" ADD COLUMN "welcome_label" varchar DEFAULT 'Welkom bij Veranda Zeeland';
  ALTER TABLE "home" ADD COLUMN "welcome_title" varchar DEFAULT 'Uw complete leverancier in Serooskerke';
  ALTER TABLE "home" ADD COLUMN "welkom_bij_verandazeeland_tekst" jsonb;
  ALTER TABLE "home" ADD COLUMN "welcome_cta" varchar DEFAULT 'Plan uw bezoek →';
  ALTER TABLE "home" ADD COLUMN "models_heading" varchar DEFAULT 'Ieder thuis verdient een echte Verasol®';
  ALTER TABLE "home" ADD COLUMN "models_sub" varchar DEFAULT 'Vijf productlijnen. Eén perfecte match voor uw woning.';
  ALTER TABLE "home" ADD COLUMN "cta_title" varchar DEFAULT 'Zin in uw eigen buitenkamer?';
  ALTER TABLE "home" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend uw offerte op maat aan, inclusief sterkteberekening en advies.';
  ALTER TABLE "home" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "veranda_s" ADD COLUMN "hero_badge" varchar DEFAULT 'Onze specialiteit';
  ALTER TABLE "veranda_s" ADD COLUMN "hero_title" varchar DEFAULT 'Uw veranda, op maat gemaakt' NOT NULL;
  ALTER TABLE "veranda_s" ADD COLUMN "hero_text" varchar DEFAULT 'Een veranda van Veranda Zeeland is een investering in comfort en woonplezier. Wij leveren de hoogwaardige aluminium veranda''s van Verasol, in Duitsland geproduceerd en volledig op maat. Vijf productlijnen, van betaalbaar tot exclusief design, inclusief inmeten en montage door ons eigen team.';
  ALTER TABLE "veranda_s" ADD COLUMN "lines_heading" varchar DEFAULT 'De vijf productlijnen van Verasol';
  ALTER TABLE "veranda_s" ADD COLUMN "lines_intro" varchar DEFAULT 'Van de voordelige Greenline tot de exclusieve Cube. Elke lijn heeft een eigen pagina met alle details, kenmerken en mogelijkheden.';
  ALTER TABLE "veranda_s" ADD COLUMN "ombouw_label" varchar DEFAULT 'Meer woonplezier';
  ALTER TABLE "veranda_s" ADD COLUMN "ombouw_title" varchar DEFAULT 'Bouw uw veranda om tot tuinkamer';
  ALTER TABLE "veranda_s" ADD COLUMN "ombouw_text" varchar DEFAULT 'Met glazen schuifwanden of vaste voor- en zijwanden maakt u van elke Verasol-veranda een volwaardige tuinkamer, het hele jaar te gebruiken.';
  ALTER TABLE "veranda_s" ADD COLUMN "ombouw_cta" varchar DEFAULT 'Ontdek tuinkamers →';
  ALTER TABLE "veranda_s" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "veranda_s" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "veranda_s" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_badge" varchar DEFAULT 'Instapmodel';
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_price" varchar DEFAULT 'vanaf € 1.259';
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_title" varchar DEFAULT 'Greenline' NOT NULL;
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_text" varchar DEFAULT 'De meest voordelige veranda van Verasol: sterk, stijlvol en aantrekkelijk geprijsd. Een slim profielontwerp levert maximale stevigheid met minder materiaal.';
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_button_primary" varchar DEFAULT 'Offerte Greenline →';
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_button_secondary" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "veranda_greenline" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DSC09382.jpg';
  ALTER TABLE "veranda_greenline" ADD COLUMN "intro_title" varchar DEFAULT 'Betaalbare kwaliteit zonder concessies';
  ALTER TABLE "veranda_greenline" ADD COLUMN "intro_text" varchar DEFAULT 'De Greenline bewijst dat een hoogwaardige aluminium veranda niet duur hoeft te zijn. Door het slimme profielontwerp is er minder materiaal nodig terwijl de constructie zeer stevig blijft, met een verstevigde goot zijn zelfs overspanningen tot 7 meter op twee staanders mogelijk. De krasvaste Qualicoat-structuurlak is onderhoudsvriendelijk en milieubewust geproduceerd.';
  ALTER TABLE "veranda_greenline" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/DSC09397.jpg';
  ALTER TABLE "veranda_greenline" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "veranda_greenline" ADD COLUMN "config_label" varchar DEFAULT 'Volledig op maat';
  ALTER TABLE "veranda_greenline" ADD COLUMN "config_title" varchar DEFAULT 'Stel uw Greenline samen';
  ALTER TABLE "veranda_greenline" ADD COLUMN "config_text" varchar DEFAULT 'Kies uw maat, kleur, dakbedekking en voeg opties toe zoals ledverlichting of glazen schuifwanden. Wij rekenen de sterkteberekening voor u door.';
  ALTER TABLE "veranda_greenline" ADD COLUMN "config_cta" varchar DEFAULT 'Bekijk alle opties →';
  ALTER TABLE "veranda_greenline" ADD COLUMN "config_image_fallback" varchar DEFAULT '/uploads/DSC_4586-HDR.jpg';
  ALTER TABLE "veranda_greenline" ADD COLUMN "gallery_title" varchar DEFAULT 'Greenline in de praktijk';
  ALTER TABLE "veranda_greenline" ADD COLUMN "other_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_greenline" ADD COLUMN "cta_title" varchar DEFAULT 'Interesse in de Greenline?';
  ALTER TABLE "veranda_greenline" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "veranda_greenline" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_badge" varchar DEFAULT 'Populair';
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_price" varchar DEFAULT 'vanaf € 2.059';
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_title" varchar DEFAULT 'Profiline' NOT NULL;
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_text" varchar DEFAULT 'Onze meest veelzijdige veranda. Dankzij de extra stevige constructie bouwt u breder, dieper en ruimer, met overspanningen tot 7 meter op slechts twee staanders. Volledig op maat en uit te bouwen tot een complete tuinkamer.';
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_button_primary" varchar DEFAULT 'Offerte Profiline →';
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_button_secondary" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "veranda_profiline" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "veranda_profiline" ADD COLUMN "ruimte_title" varchar DEFAULT 'Meer ruimte, meer vrijheid';
  ALTER TABLE "veranda_profiline" ADD COLUMN "ruimte_text" varchar DEFAULT 'De Profiline heeft een schuin dak dat zorgt voor een ruimtelijk gevoel, prettige lichtinval en natuurlijke waterafvoer. Met de speciale XS-profielen en een verstevigde goot overspant u tot 7 meter op slechts twee staanders, voor een volledig vrij uitzicht zonder paal in het midden. Muurbevestigd, vrijstaand of om een hoek, en met een glasdak tot 4 meter diep.';
  ALTER TABLE "veranda_profiline" ADD COLUMN "ruimte_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg';
  ALTER TABLE "veranda_profiline" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "veranda_profiline" ADD COLUMN "maat_label" varchar DEFAULT 'Volledig op maat';
  ALTER TABLE "veranda_profiline" ADD COLUMN "maat_title" varchar DEFAULT 'Stel uw Profiline samen';
  ALTER TABLE "veranda_profiline" ADD COLUMN "maat_text" varchar DEFAULT 'Van afmeting, kleur en gootsierlijst tot geïntegreerde verlichting, verwarming, zonwering en glazen schuifwanden: de Profiline groeit mee met uw wensen.';
  ALTER TABLE "veranda_profiline" ADD COLUMN "maat_cta" varchar DEFAULT 'Bekijk alle opties →';
  ALTER TABLE "veranda_profiline" ADD COLUMN "maat_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_434_LR.jpg';
  ALTER TABLE "veranda_profiline" ADD COLUMN "models_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_profiline" ADD COLUMN "cta_title" varchar DEFAULT 'Interesse in de Profiline?';
  ALTER TABLE "veranda_profiline" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "veranda_profiline" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_badge" varchar DEFAULT 'Modern design';
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_price" varchar DEFAULT 'vanaf € 5.469';
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_title" varchar DEFAULT 'Linea' NOT NULL;
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_text" varchar DEFAULT 'Strak en modern met een optisch vlak dak. Ranker en toegankelijker dan de Cube, en daarmee de ideale keuze voor wie design zoekt in een iets zachtere prijsklasse.';
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_cta_primary" varchar DEFAULT 'Offerte Linea →';
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "veranda_linea" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/linea-hero.jpg';
  ALTER TABLE "veranda_linea" ADD COLUMN "intro_title" varchar DEFAULT 'Strak design, toegankelijk geprijsd';
  ALTER TABLE "veranda_linea" ADD COLUMN "intro_text" varchar DEFAULT 'De Linea combineert strakke lijnen met een optisch vlak dak en een moderne uitstraling. Waar de Cube volledig kubistisch en robuust is, houdt de Linea een rankere, lichtere lijn aan. De overkapping sluit perfect aan bij een moderne bouwstijl en behoudt het buitengevoel, zowel aan de gevel als vrijstaand in de tuin.';
  ALTER TABLE "veranda_linea" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Linea_Rijssen_VS_20250922_1273.jpg';
  ALTER TABLE "veranda_linea" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "veranda_linea" ADD COLUMN "opmaat_label" varchar DEFAULT 'Volledig op maat';
  ALTER TABLE "veranda_linea" ADD COLUMN "opmaat_title" varchar DEFAULT 'Stel uw Linea samen';
  ALTER TABLE "veranda_linea" ADD COLUMN "opmaat_text" varchar DEFAULT 'Kies dakbedekking, kleur en afmetingen, en vul aan met verlichting, zonwering en glazen schuifwanden voor een complete, moderne tuinkamer.';
  ALTER TABLE "veranda_linea" ADD COLUMN "opmaat_cta" varchar DEFAULT 'Bekijk alle opties →';
  ALTER TABLE "veranda_linea" ADD COLUMN "opmaat_image_fallback" varchar DEFAULT '/uploads/Linea_Rijssen_VS_20250922_1282.jpg';
  ALTER TABLE "veranda_linea" ADD COLUMN "gallery_title" varchar DEFAULT 'Linea in de praktijk';
  ALTER TABLE "veranda_linea" ADD COLUMN "related_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_linea" ADD COLUMN "cta_title" varchar DEFAULT 'Interesse in de Linea?';
  ALTER TABLE "veranda_linea" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "veranda_linea" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_badge" varchar DEFAULT 'Topmodel';
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_price" varchar DEFAULT 'vanaf € 7.149';
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_title" varchar DEFAULT 'Cube' NOT NULL;
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_text" varchar DEFAULT 'Geen standaard overkapping, maar een statement in uw tuin. Strak, kubistisch en met een volledig vlak dak, extra brede staanders en een krachtig ontwerp. Dé keuze voor moderne architectuur en designliefhebbers.';
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_cta_primary" varchar DEFAULT 'Offerte Cube →';
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_cta_secondary" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "veranda_cube" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/cube-kerk.jpg';
  ALTER TABLE "veranda_cube" ADD COLUMN "intro_title" varchar DEFAULT 'Een blikvanger in uw tuin';
  ALTER TABLE "veranda_cube" ADD COLUMN "intro_text" varchar DEFAULT 'De Cube valt direct op met zijn strakke lijnen, extra brede staanders en volledig vlakke dak met onzichtbare dakhelling. Modern, robuust en tot in de puntjes afgewerkt, en dankzij een verstevigde goot mogelijk tot 7 meter breed op slechts twee palen. Een designstatement dat past bij een eigentijdse tuin, en heerlijk om onder te leven.';
  ALTER TABLE "veranda_cube" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg';
  ALTER TABLE "veranda_cube" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "veranda_cube" ADD COLUMN "ombouw_label" varchar DEFAULT 'Volledig op maat';
  ALTER TABLE "veranda_cube" ADD COLUMN "ombouw_title" varchar DEFAULT 'Stel uw Cube samen';
  ALTER TABLE "veranda_cube" ADD COLUMN "ombouw_text" varchar DEFAULT 'Bepaal afmetingen, kleur en dakbedekking, en voeg premium opties toe zoals sfeerverlichting, verwarming en frameloze glazen schuifwanden.';
  ALTER TABLE "veranda_cube" ADD COLUMN "ombouw_cta" varchar DEFAULT 'Bekijk alle opties →';
  ALTER TABLE "veranda_cube" ADD COLUMN "ombouw_image_fallback" varchar DEFAULT '/uploads/cube-rhenen-b.jpg';
  ALTER TABLE "veranda_cube" ADD COLUMN "gallery_title" varchar DEFAULT 'Cube in de praktijk';
  ALTER TABLE "veranda_cube" ADD COLUMN "others_title" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_cube" ADD COLUMN "cta_title" varchar DEFAULT 'Interesse in de Cube?';
  ALTER TABLE "veranda_cube" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "veranda_cube" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_badge" varchar DEFAULT 'Vrijstaand';
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_price" varchar DEFAULT 'vanaf € 5.791';
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_title" varchar DEFAULT 'Pergola-overkapping' NOT NULL;
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_text" varchar DEFAULT 'Optimale beschutting met een vrijstaande constructie op staanders. Geschikt voor grotere terrassen of situaties waar gevelmontage niet mogelijk is. De Pergola-overkapping combineert zonwering én overkapping in één.';
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte Pergola →';
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Bezoek de showroom';
  ALTER TABLE "veranda_pergola" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20250515150039_0478_D.jpg';
  ALTER TABLE "veranda_pergola" ADD COLUMN "intro_title" varchar DEFAULT 'Beschutting midden in de tuin';
  ALTER TABLE "veranda_pergola" ADD COLUMN "intro_text" varchar DEFAULT 'De Pergola-overkapping staat op een eigen constructie met minimaal vier staanders en heeft geen gevel nodig. Daarmee is het dé oplossing voor grote terrassen of tuinen waar bevestiging aan de woning niet kan of niet gewenst is. Zonwering en overkapping werken samen in één systeem, voor schaduw én beschutting waar u maar wilt.';
  ALTER TABLE "veranda_pergola" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg';
  ALTER TABLE "veranda_pergola" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "veranda_pergola" ADD COLUMN "band_label" varchar DEFAULT 'Volledig op maat';
  ALTER TABLE "veranda_pergola" ADD COLUMN "band_title" varchar DEFAULT 'Stel uw Pergola samen';
  ALTER TABLE "veranda_pergola" ADD COLUMN "band_text" varchar DEFAULT 'Kies afmetingen, kleur en type zonwering, en vul aan met screens, verlichting en verwarming voor een volwaardige buitenkamer.';
  ALTER TABLE "veranda_pergola" ADD COLUMN "band_cta" varchar DEFAULT 'Bekijk alle opties →';
  ALTER TABLE "veranda_pergola" ADD COLUMN "band_image_fallback" varchar DEFAULT '/uploads/banner-verasol-pergola-verasol.jpg';
  ALTER TABLE "veranda_pergola" ADD COLUMN "related_heading" varchar DEFAULT 'Andere modellen';
  ALTER TABLE "veranda_pergola" ADD COLUMN "cta_title" varchar DEFAULT 'Interesse in de Pergola?';
  ALTER TABLE "veranda_pergola" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "veranda_pergola" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "tuinkamers" ADD COLUMN "hero_badge" varchar DEFAULT 'Het hele jaar buiten';
  ALTER TABLE "tuinkamers" ADD COLUMN "hero_title" varchar DEFAULT 'Uw tuinkamer, altijd het juiste seizoen' NOT NULL;
  ALTER TABLE "tuinkamers" ADD COLUMN "hero_text" varchar DEFAULT 'Een tuinkamer is een veranda die u met glazen schuifwanden of vaste voor- en zijwanden verder afsluit: beschutter tegen wind en regen, en daardoor langer in het jaar te gebruiken. Omdat Verasol-veranda''s modulair zijn opgebouwd, bouwt u een bestaande veranda stap voor stap uit tot een volwaardige tuinkamer.';
  ALTER TABLE "tuinkamers" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "tuinkamers" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een bezoek';
  ALTER TABLE "tuinkamers" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "tuinkamers" ADD COLUMN "types_label" varchar DEFAULT 'Ontdek de mogelijkheden';
  ALTER TABLE "tuinkamers" ADD COLUMN "types_heading" varchar DEFAULT '2 type tuinkamers';
  ALTER TABLE "tuinkamers" ADD COLUMN "types_intro" varchar DEFAULT 'De dakvorm bepaalt de uitstraling van uw tuinkamer. Een hellend dak en een vlak dak geven allebei een ander karakter. Wij zetten de verschillen voor u op een rij.';
  ALTER TABLE "tuinkamers" ADD COLUMN "usp_heading" varchar DEFAULT 'Waarom een tuinkamer?';
  ALTER TABLE "tuinkamers" ADD COLUMN "usp_intro" varchar DEFAULT 'Alle voordelen van buiten wonen, zonder de nadelen van het weer.';
  ALTER TABLE "tuinkamers" ADD COLUMN "gallery_heading" varchar DEFAULT 'Projecten uit Zeeland';
  ALTER TABLE "tuinkamers" ADD COLUMN "glas_label" varchar DEFAULT 'Glasschuifwanden';
  ALTER TABLE "tuinkamers" ADD COLUMN "glas_title" varchar DEFAULT 'Open of dicht, u kiest';
  ALTER TABLE "tuinkamers" ADD COLUMN "glas_text" varchar DEFAULT 'Combineer uw tuinkamer met glasschuifwanden: in de zomer volledig open, bij wind en regen in enkele seconden dicht. Zo bepaalt u zelf hoe u van uw buitenruimte geniet.';
  ALTER TABLE "tuinkamers" ADD COLUMN "glas_cta" varchar DEFAULT 'Bekijk glaswanden →';
  ALTER TABLE "tuinkamers" ADD COLUMN "glas_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "tuinkamers" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "tuinkamers" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "tuinkamers" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "hero_badge" varchar DEFAULT 'Tuinkamer';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "hero_title" varchar DEFAULT 'Tuinkamer met hellend dak' NOT NULL;
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "hero_text" varchar DEFAULT 'Een tuinkamer met een licht hellend dak is de klassieke keuze: ruimtelijk, met veel lichtinval en een natuurlijke waterafvoer. Perfect passend bij zowel moderne als traditionele woningen.';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een bezoek';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/glazenschuifwanden-2000x800-02.png';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "intro_title" varchar DEFAULT 'Ruimtelijk en licht';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "intro_text" varchar DEFAULT 'Het schuine dak zorgt voor extra hoogte en een royaal, open gevoel. Regenwater loopt vanzelf weg via de goot, en de vorm sluit natuurlijk aan op de meeste daklijnen. Op basis van de Greenline of Profiline bouwt u zo een volwaardige, jaarrond bruikbare tuinkamer.';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "gallery_heading" varchar DEFAULT 'Hellend dak in de praktijk';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "alt_label" varchar DEFAULT 'Ander type?';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "alt_title" varchar DEFAULT 'Liever een strak, vlak dak?';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "alt_text" varchar DEFAULT 'Een tuinkamer met vlak dak geeft een moderne, kubistische uitstraling. Bekijk de mogelijkheden.';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "alt_cta" varchar DEFAULT 'Bekijk vlak dak →';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "alt_image_fallback" varchar DEFAULT '/uploads/cube-kerk.jpg';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "tuinkamer_hellend_dak" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "hero_badge" varchar DEFAULT 'Tuinkamer';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "hero_title" varchar DEFAULT 'Tuinkamer met vlak dak' NOT NULL;
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "hero_text" varchar DEFAULT 'Een tuinkamer met een vlak dak geeft een strakke, moderne en kubistische uitstraling. De ideale keuze voor eigentijdse woningen en wie houdt van clean design.';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een bezoek';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/banners-2000x800-vlak-2.png';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "intro_title" varchar DEFAULT 'Strak en modern';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "intro_text" varchar DEFAULT 'Het vlakke dak zorgt voor een minimalistisch silhouet met rechte lijnen en, bij de Cube, volledig verborgen afwatering. Gebaseerd op de Linea of Cube maakt u er een designstatement van dat naadloos aansluit op moderne architectuur, het hele jaar door te gebruiken.';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "gallery_title" varchar DEFAULT 'Vlak dak in de praktijk';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "alt_label" varchar DEFAULT 'Ander type?';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "alt_title" varchar DEFAULT 'Liever een hellend dak?';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "alt_text" varchar DEFAULT 'Een tuinkamer met hellend dak is ruimtelijk en licht, met een natuurlijke waterafvoer. Bekijk de mogelijkheden.';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "alt_cta" varchar DEFAULT 'Bekijk hellend dak →';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "alt_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "tuinkamer_vlak_dak" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "hero_badge" varchar DEFAULT 'Flexibel wonen buiten';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "hero_title" varchar DEFAULT 'Glazen schuifwanden op maat' NOT NULL;
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "hero_text" varchar DEFAULT 'Met de schuifwanden van Verasol bepaalt u zelf hoeveel openheid of beschutting u wilt. Van frameloze glazen schuifwanden tot aluminium schuifpuien en lamellenwanden: alles op maat gemaakt en passend op vrijwel elke veranda, ook een bestaande. Zo verlengt u uw buitenseizoen met gemak.';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een bezoek';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "types_heading" varchar DEFAULT 'Onze schuifwanden';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "types_intro" varchar DEFAULT '8–10 mm veiligheidsglas · onderrail van slechts 17 mm · glazen schuifwanden vanaf € 285 per meter.';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "projects_heading" varchar DEFAULT 'Projecten uit Zeeland';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "combo_label" varchar DEFAULT 'Combineer slim';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "combo_title" varchar DEFAULT 'Perfect met uw veranda';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "combo_text" varchar DEFAULT 'Glazen schuifwanden combineren naadloos met alle Verasol-modellen. Samen met een Profiline of Cube veranda creëert u een complete, jaarrond bruikbare buitenkamer.';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "combo_cta" varchar DEFAULT 'Bekijk veranda''s →';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "combo_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "glazen_schuifwanden" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "hero_badge" varchar DEFAULT 'Schuifwanden';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "hero_title" varchar DEFAULT 'Glazen schuifwanden' NOT NULL;
  ALTER TABLE "schuifwand_glas" ADD COLUMN "hero_text" varchar DEFAULT 'Frameloze glazen schuifwanden zonder storende kozijnen, voor een volledig vrij uitzicht. Open in de zomer, in enkele seconden dicht bij wind of regen.';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "intro_title" varchar DEFAULT 'Maximaal uitzicht, maximale flexibiliteit';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "intro_text" varchar DEFAULT 'De glazen panelen schuiven soepel achter elkaar en worden gemaakt van 8 tot 10 mm veiligheidsglas. Dankzij de onderrail van slechts 17 mm stapt u vrijwel drempelloos naar buiten. Prijs vanaf € 285 per meter.';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over glazen schuifwanden?';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "schuifwand_glas" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "hero_badge" varchar DEFAULT 'Schuifwanden';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "hero_title" varchar DEFAULT 'Aluminium schuifpui' NOT NULL;
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "hero_text" varchar DEFAULT 'Glas in een strak aluminium kozijn: extra stevig, goed te isoleren en met een moderne, rechte lijn. De robuuste keuze om uw veranda volwaardig af te sluiten.';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "intro_title" varchar DEFAULT 'Stevig en strak afgewerkt';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "intro_text" varchar DEFAULT 'De aluminium schuifpui combineert de transparantie van glas met de stevigheid van een aluminium frame. Ideaal voor wie de tuinkamer stevig wil isoleren en een strakke uitstraling zoekt, in dezelfde kleur als uw veranda.';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over de aluminium schuifpui?';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "schuifwand_aluminium" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "hero_badge" varchar DEFAULT 'Schuifwanden';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "hero_title" varchar DEFAULT 'Lamellen schuifwanden' NOT NULL;
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "hero_text" varchar DEFAULT 'Verstelbare lamellen voor schaduw, privacy en ventilatie. Zet ze open voor frisse lucht en licht, of dicht voor beschutting. U regelt het zelf.';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "intro_title" varchar DEFAULT 'Schaduw en privacy op maat';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "intro_text" varchar DEFAULT 'Lamellen schuifwanden combineren beschutting met flexibiliteit. De verstelbare lamellen laten lucht door zonder direct inkijk, en zijn er in een strakke of houtlook-uitvoering die mooi aansluit op uw veranda.';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over lamellen schuifwanden?';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "schuifwand_lamellen" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "hero_badge" varchar DEFAULT 'Schuifwanden';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "hero_title" varchar DEFAULT 'Steellook schuifwanden' NOT NULL;
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "hero_text" varchar DEFAULT 'Het karakteristieke stalen-look design met slanke zwarte profielen en glasverdeling. Industrieel, tijdloos en verrassend licht in aluminium uitgevoerd.';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "intro_heading" varchar DEFAULT 'Industrieel karakter';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "intro_text" varchar DEFAULT 'Steellook schuifwanden geven uw tuinkamer een stoere, industriële uitstraling met de warme charme van klassieke stalen puien, maar dan onderhoudsarm in aluminium. De slanke profielverdeling maakt er een echte blikvanger van.';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over steellook schuifwanden?';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "schuifwand_steellook" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering" ADD COLUMN "hero_badge" varchar DEFAULT 'Aangenaam koel';
  ALTER TABLE "zonwering" ADD COLUMN "hero_title" varchar DEFAULT 'Zonwering perfect afgestemd op uw veranda' NOT NULL;
  ALTER TABLE "zonwering" ADD COLUMN "hero_text" varchar DEFAULT 'Van onderdak- en bovendakzonwering tot screens en uitvalschermen: Verasol-zonwering is speciaal ontwikkeld voor veranda''s en tuinkamers. Houd de warmte buiten, creëer schaduw en privacy, en bedien alles met afstandsbediening, app of automatische zon- en windsensoren.';
  ALTER TABLE "zonwering" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een bezoek';
  ALTER TABLE "zonwering" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg';
  ALTER TABLE "zonwering" ADD COLUMN "types_heading" varchar DEFAULT 'Type zonwering';
  ALTER TABLE "zonwering" ADD COLUMN "types_intro" varchar DEFAULT 'Voor elke situatie de juiste oplossing.';
  ALTER TABLE "zonwering" ADD COLUMN "projects_heading" varchar DEFAULT 'Projecten uit Zeeland';
  ALTER TABLE "zonwering" ADD COLUMN "comfort_label" varchar DEFAULT 'Comfort';
  ALTER TABLE "zonwering" ADD COLUMN "comfort_title" varchar DEFAULT 'Slimme bediening';
  ALTER TABLE "zonwering" ADD COLUMN "comfort_text" varchar DEFAULT 'Bedien uw zonwering met een afstandsbediening, tijdklok of via een app. Met een zonsensor beweegt de zonwering automatisch mee met het weer, altijd de perfecte hoeveelheid schaduw.';
  ALTER TABLE "zonwering" ADD COLUMN "comfort_cta" varchar DEFAULT 'Vraag advies →';
  ALTER TABLE "zonwering" ADD COLUMN "comfort_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "zonwering" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zonwering" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "zonwering" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "hero_badge" varchar DEFAULT 'Zonwering';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "hero_title" varchar DEFAULT 'Onderdakzonwering' NOT NULL;
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "hero_text" varchar DEFAULT 'Zonwering die onder het dak van uw veranda wordt gemonteerd. Het doek blijft beschermd tegen regen en neerslag en zorgt binnen voor aangename schaduw.';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/banner-verasol-pergola-verasol.jpg';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "intro_title" varchar DEFAULT 'Beschermd en strak weggewerkt';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "intro_text" varchar DEFAULT 'De onderdakzonwering is speciaal ontwikkeld voor veranda’s en tuinkamers. Het scherm zit onder het glas, dus het doek wordt niet aangetast door weer en wind. Elektrisch bediend via schakelaar of handzender, en verkrijgbaar in vele kleuren en dessins.';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/DSC_8609.jpg';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over onderdakzonwering?';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "zonwering_onderdak" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "hero_badge" varchar DEFAULT 'Zonwering';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "hero_title" varchar DEFAULT 'Bovendakzonwering' NOT NULL;
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "hero_text" varchar DEFAULT 'Zonwering boven op het dak van uw veranda. Groot voordeel: de warmte wordt tegengehouden vóór het glas, zodat het onder de veranda merkbaar koeler blijft.';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "intro_title" varchar DEFAULT 'Houd de warmte buiten';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "intro_text" varchar DEFAULT 'Bovendakzonwering vangt de zon op vóór die het glas bereikt, waardoor de ruimte eronder veel minder opwarmt dan bij onderdakzonwering. Geschikt voor alle Verasol-veranda’s en tuinkamers, en volledig op maat leverbaar.';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over bovendakzonwering?';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "zonwering_bovendak" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_screens" ADD COLUMN "hero_badge" varchar DEFAULT 'Zonwering';
  ALTER TABLE "zonwering_screens" ADD COLUMN "hero_title" varchar DEFAULT 'Screens' NOT NULL;
  ALTER TABLE "zonwering_screens" ADD COLUMN "hero_text" varchar DEFAULT 'Verticale ritsdoeken die langs de zijkanten door een geleiding lopen. Windvast, zonwerend en ideaal als flexibele zij- of voorwand van uw veranda.';
  ALTER TABLE "zonwering_screens" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_screens" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering';
  ALTER TABLE "zonwering_screens" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "zonwering_screens" ADD COLUMN "intro_title" varchar DEFAULT 'Windvast en veelzijdig';
  ALTER TABLE "zonwering_screens" ADD COLUMN "intro_text" varchar DEFAULT 'Dankzij de supersterke zijgeleiding blijven screens ook bij wind strak staan. Ze houden zon, inkijk en insecten buiten en zijn er in vele kleuren en doeksoorten, met bediening via draaiknop of meerkanaals afstandsbediening.';
  ALTER TABLE "zonwering_screens" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "zonwering_screens" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "zonwering_screens" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over screens?';
  ALTER TABLE "zonwering_screens" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "zonwering_screens" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "hero_badge" varchar DEFAULT 'Zonwering';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "hero_title" varchar DEFAULT 'Uitvalschermen' NOT NULL;
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "hero_text" varchar DEFAULT 'Compacte schermen die schuin naar buiten uitvallen en zo schaduw geven voor ramen en gevels, ook op de verdieping. Strak weggewerkt in een cassette.';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Zonwering';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/greenline-detail.jpg';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "intro_title" varchar DEFAULT 'Schaduw voor ramen en gevels';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "intro_text" varchar DEFAULT 'Uitvalschermen bieden gerichte schaduw op ramen en gevelpartijen en voorkomen dat ruimtes achter het glas oververhitten. In een strakke cassette weggewerkt en op maat leverbaar in vele kleuren.';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over uitvalschermen?';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "zonwering_uitvalschermen" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "accessoires" ADD COLUMN "hero_badge" varchar DEFAULT 'Maak het compleet';
  ALTER TABLE "accessoires" ADD COLUMN "hero_title" varchar DEFAULT 'Accessoires voor uw veranda' NOT NULL;
  ALTER TABLE "accessoires" ADD COLUMN "hero_text" varchar DEFAULT 'Maak uw veranda of tuinkamer helemaal af. Kies uw dakbedekking, voeg voor- en zijwanden, LED-verlichting of verwarming toe, en veranker alles met de juiste fundering en afwatering. Alle opties zijn op elkaar en op uw woning afgestemd.';
  ALTER TABLE "accessoires" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "accessoires" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een bezoek';
  ALTER TABLE "accessoires" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg';
  ALTER TABLE "accessoires" ADD COLUMN "options_heading" varchar DEFAULT 'Opties & accessoires';
  ALTER TABLE "accessoires" ADD COLUMN "options_intro" varchar DEFAULT 'Stel uw veranda helemaal naar wens samen.';
  ALTER TABLE "accessoires" ADD COLUMN "gallery_heading" varchar DEFAULT 'Projecten uit Zeeland';
  ALTER TABLE "accessoires" ADD COLUMN "advies_label" varchar DEFAULT 'Advies';
  ALTER TABLE "accessoires" ADD COLUMN "advies_title" varchar DEFAULT 'Wij stellen het samen';
  ALTER TABLE "accessoires" ADD COLUMN "advies_text" varchar DEFAULT 'Niet zeker welke accessoires bij uw veranda passen? Onze adviseurs helpen u graag een compleet pakket samen te stellen dat aansluit op uw wensen en budget.';
  ALTER TABLE "accessoires" ADD COLUMN "advies_cta" varchar DEFAULT 'Plan een bezoek →';
  ALTER TABLE "accessoires" ADD COLUMN "advies_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "accessoires" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "accessoires" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "accessoires" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_wanden" ADD COLUMN "hero_badge" varchar DEFAULT 'Opties';
  ALTER TABLE "optie_wanden" ADD COLUMN "hero_title" varchar DEFAULT 'Voor- en zijwanden' NOT NULL;
  ALTER TABLE "optie_wanden" ADD COLUMN "hero_text" varchar DEFAULT 'Maak van uw veranda een volwaardige tuinkamer met voor- en zijwanden. Kies uit glazen schuifwanden, aluminium kozijnen, deuren, ramen of dichte delen.';
  ALTER TABLE "optie_wanden" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_wanden" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Opties';
  ALTER TABLE "optie_wanden" ADD COLUMN "intro_title" varchar DEFAULT 'Van veranda naar tuinkamer';
  ALTER TABLE "optie_wanden" ADD COLUMN "intro_text" varchar DEFAULT 'Met de juiste voor- en zijwandensluit u uw veranda helemaal af. Combineer glazen schuifwanden met kozijnen, deuren en ramen tot precies de indeling die bij uw situatie past. Het hele jaar door comfortabel.';
  ALTER TABLE "optie_wanden" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "optie_wanden" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over voor- en zijwanden?';
  ALTER TABLE "optie_wanden" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "optie_wanden" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "hero_badge" varchar DEFAULT 'Opties';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "hero_title" varchar DEFAULT 'Dakbedekking' NOT NULL;
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "hero_text" varchar DEFAULT 'Kies de dakbedekking die past bij uw wensen: van helder, warmtewerend of opaal polycarbonaat tot gelaagd veiligheidsglas, elk met een eigen lichtbeleving.';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Opties';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "intro_title" varchar DEFAULT 'Licht en warmte in balans';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "intro_text" varchar DEFAULT 'De dakbedekking bepaalt hoeveel licht en warmte u binnenlaat. Helder glas voor maximaal uitzicht, opaal voor gedempt licht, of warmtewerend voor koelte in de zomer. Wij adviseren u graag over de beste keuze voor uw situatie.';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/Lamellen_Verasol_tegels02.jpg';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over dakbedekking?';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "optie_dakbedekking" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "hero_badge" varchar DEFAULT 'Opties';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "hero_title" varchar DEFAULT 'Ledverlichting' NOT NULL;
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "hero_text" varchar DEFAULT 'Sfeervolle, dimbare led-spots geïntegreerd in het dak van uw veranda. Energiezuinig en te bedienen op afstand, voor gezellige avonden buiten.';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Opties';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/linea-tuinkamer-a.jpg';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "intro_title" varchar DEFAULT 'Sfeer tot in de late uurtjes';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "intro_text" varchar DEFAULT 'Geïntegreerde led-spots maken uw veranda ook ’s avonds een fijne plek. De dimbare spots komen in sets van 6 of 9 en zijn strak weggewerkt in de dakconstructie, te bedienen via afstandsbediening of app.';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "intro_image_fallback" varchar DEFAULT '/uploads/cube-rhenen-a.jpg';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over ledverlichting?';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "optie_ledverlichting" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_fundering" ADD COLUMN "hero_badge" varchar DEFAULT 'Opties';
  ALTER TABLE "optie_fundering" ADD COLUMN "hero_title" varchar DEFAULT 'Fundering' NOT NULL;
  ALTER TABLE "optie_fundering" ADD COLUMN "hero_text" varchar DEFAULT 'Een goede fundering is de basis van een stabiele veranda. Wij verzorgen de juiste fundering voor uw situatie, zodat uw veranda niet verzakt.';
  ALTER TABLE "optie_fundering" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_fundering" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Opties';
  ALTER TABLE "optie_fundering" ADD COLUMN "intro_title" varchar DEFAULT 'Een stabiele basis';
  ALTER TABLE "optie_fundering" ADD COLUMN "intro_text" varchar DEFAULT 'Afhankelijk van de bodem en uw situatie kiezen we de juiste fundering: van betonpoeren tot verstelbare schroefpalen. Zo staat uw veranda of tuinkamer jarenlang stabiel en waterpas, gegarandeerd tegen verzakken.';
  ALTER TABLE "optie_fundering" ADD COLUMN "features_title" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "optie_fundering" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over de fundering?';
  ALTER TABLE "optie_fundering" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "optie_fundering" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "hero_badge" varchar DEFAULT 'Opties';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "hero_title" varchar DEFAULT 'Onderhoudsproducten' NOT NULL;
  ALTER TABLE "optie_onderhoud" ADD COLUMN "hero_text" varchar DEFAULT 'Houd uw veranda jarenlang mooi met de juiste onderhoudsproducten. Speciaal voor aluminium, glas en polycarbonaat: onderhoudsarm, maar niet onderhoudsvrij.';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Terug naar Opties';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "intro_title" varchar DEFAULT 'Langdurig stralend';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "intro_text" varchar DEFAULT 'Aluminium is onderhoudsarm, maar met de juiste reinigingsmiddelen voor glas, polycarbonaat en aluminium blijft uw veranda er jaren als nieuw uitzien. Wij adviseren u graag over het beste onderhoud voor uw materialen.';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "intro_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "features_heading" varchar DEFAULT 'Kenmerken & voordelen';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "cta_title" varchar DEFAULT 'Meer weten over onderhoudsproducten?';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "cta_text" varchar DEFAULT 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.';
  ALTER TABLE "optie_onderhoud" ADD COLUMN "cta_button" varchar DEFAULT 'Offerte aanvragen →';
  ALTER TABLE "zakelijk" ADD COLUMN "hero_badge" varchar DEFAULT 'Zakelijk & projecten';
  ALTER TABLE "zakelijk" ADD COLUMN "hero_title" varchar DEFAULT 'Overkappingen voor uw onderneming' NOT NULL;
  ALTER TABLE "zakelijk" ADD COLUMN "hero_text" varchar DEFAULT 'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en de functionaliteit van je pand. Onze veranda''s, tuinkamers, carports en zonwering zijn ontwikkeld als één doordacht systeem, volledig op maat gemaakt in onze eigen fabriek.';
  ALTER TABLE "zakelijk" ADD COLUMN "hero_button1" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk" ADD COLUMN "hero_button2" varchar DEFAULT 'Plan een gesprek';
  ALTER TABLE "zakelijk" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "zakelijk" ADD COLUMN "sectors_heading" varchar DEFAULT 'Haal meer uit je locatie';
  ALTER TABLE "zakelijk" ADD COLUMN "sectors_intro" varchar DEFAULT 'Bij Veranda Zeeland geloven we niet in standaardoplossingen. Voor elke branche een passend systeem.';
  ALTER TABLE "zakelijk" ADD COLUMN "steps_heading" varchar DEFAULT 'Onze werkwijze';
  ALTER TABLE "zakelijk" ADD COLUMN "band_label" varchar DEFAULT 'Uw partner in Zeeland';
  ALTER TABLE "zakelijk" ADD COLUMN "band_title" varchar DEFAULT 'Eén aanspreekpunt, van begin tot eind';
  ALTER TABLE "zakelijk" ADD COLUMN "band_text" varchar DEFAULT 'U werkt met vaste contactpersonen die uw project van advies tot oplevering begeleiden. Betrouwbaar, planmatig en met oog voor kwaliteit.';
  ALTER TABLE "zakelijk" ADD COLUMN "band_cta" varchar DEFAULT 'Vraag een projectgesprek aan →';
  ALTER TABLE "zakelijk" ADD COLUMN "band_image_fallback" varchar DEFAULT '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg';
  ALTER TABLE "zakelijk" ADD COLUMN "cta_title" varchar DEFAULT 'Een zakelijk project bespreken?';
  ALTER TABLE "zakelijk" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw onderneming.';
  ALTER TABLE "zakelijk" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "hero_badge" varchar DEFAULT 'Horeca & Leisure';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "hero_title" varchar DEFAULT 'Meer terras, langer seizoen' NOT NULL;
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "hero_text" varchar DEFAULT 'Vergroot de bedrijfsruimte van je horecazaak het hele jaar door en behoud het buitengevoel. Een glazen overkapping beschermt tegen kou en regen, terwijl gasten heerlijk buiten blijven zitten vanaf de eerste zonnestralen.';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "hero_button1" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "hero_button2" varchar DEFAULT 'Plan een adviesgesprek';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/foto-horeca.jpg';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "benefits_heading" varchar DEFAULT 'Toepassingen & voordelen';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "quote" varchar DEFAULT '"Met de juiste overkapping wordt je terras een plek waar gasten graag langer blijven zitten, ongeacht het weer."';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.';
  ALTER TABLE "zakelijk_horeca" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "hero_badge" varchar DEFAULT 'Kantoren & Commercieel Vastgoed';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "hero_title" varchar DEFAULT 'Haal meer uit je bedrijfspand' NOT NULL;
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "hero_text" varchar DEFAULT 'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en functionaliteit van je pand. Van representatieve entrees tot beschutte buitenruimtes voor personeel.';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "hero_button_primary" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "hero_button_secondary" varchar DEFAULT 'Plan een adviesgesprek';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "benefits_heading" varchar DEFAULT 'Toepassingen & voordelen';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "quote" varchar DEFAULT '"Robuuste aluminium systemen, volledig op maat gemaakt in onze eigen fabriek."';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.';
  ALTER TABLE "zakelijk_kantoren" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "hero_badge" varchar DEFAULT 'Onderwijs & Scholen';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "hero_title" varchar DEFAULT 'Veilig, comfortabel en inspirerend' NOT NULL;
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "hero_text" varchar DEFAULT 'Op een school moet de omgeving veilig, inspirerend en comfortabel zijn. Wij leveren robuuste systemen die ervoor zorgen dat leerlingen zich optimaal kunnen concentreren en dat het buitenterrein functioneler wordt ingezet.';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een adviesgesprek';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/DSC_7667-HDR.jpg';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "benefits_heading" varchar DEFAULT 'Toepassingen & voordelen';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "quote" varchar DEFAULT '"Veilige en duurzame constructies die voldoen aan alle normen en bestand zijn tegen intensief gebruik door leerlingen."';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.';
  ALTER TABLE "zakelijk_onderwijs" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "hero_badge" varchar DEFAULT 'Vakantieparken & Recreatie';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "hero_title" varchar DEFAULT 'Comfort dat gasten waarderen' NOT NULL;
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "hero_text" varchar DEFAULT 'Bied gasten het hele seizoen een beschutte buitenruimte. Onze robuuste, onderhoudsarme systemen zijn bestand tegen intensief gebruik en geven accommodaties een verzorgde, uitnodigende uitstraling.';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "hero_primary_cta" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "hero_secondary_cta" varchar DEFAULT 'Plan een adviesgesprek';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "hero_fallback" varchar DEFAULT '/uploads/6623.jpg';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "benefits_heading" varchar DEFAULT 'Toepassingen & voordelen';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "quote" varchar DEFAULT '"Extra leefruimte die het hele jaar door gebruikt kan worden, voor een verzorgde en uitnodigende beleving."';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.';
  ALTER TABLE "zakelijk_vakantieparken" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "hero_badge" varchar DEFAULT 'Zorginstellingen';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "hero_title" varchar DEFAULT 'Rust, comfort en veiligheid voorop' NOT NULL;
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "hero_text" varchar DEFAULT 'In de zorg draait alles om welzijn. Met slimme oplossingen zoals overkappingen, glaswanden en zonwering realiseer je comfortabele, toegankelijke en beschutte binnen- en buitenruimtes voor bewoners, cliënten en medewerkers.';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "hero_button1" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "hero_button2" varchar DEFAULT 'Plan een adviesgesprek';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "benefits_heading" varchar DEFAULT 'Toepassingen & voordelen';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "quote" varchar DEFAULT '"Zo ontstaat extra leefruimte die het hele jaar door gebruikt kan worden, veilig en comfortabel."';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.';
  ALTER TABLE "zakelijk_zorg" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "hero_badge" varchar DEFAULT 'Projectbouw & Ontwikkeling';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "hero_title" varchar DEFAULT 'Series op maat voor uw project' NOT NULL;
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "hero_text" varchar DEFAULT 'Voor woningbouw- en nieuwbouwprojecten leveren we series veranda''s en overkappingen als één doordacht systeem. Robuuste aluminium constructies, volledig op maat gemaakt in onze eigen fabriek en vakkundig gemonteerd.';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "hero_button_primary" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "hero_button_secondary" varchar DEFAULT 'Plan een adviesgesprek';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082035_0002_D.jpg';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "benefits_heading" varchar DEFAULT 'Toepassingen & voordelen';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "quote" varchar DEFAULT '"Van technisch advies en nauwkeurige inmeetservice tot vakkundige montage door onze eigen professionals."';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "cta_title" varchar DEFAULT 'Benieuwd naar de mogelijkheden?';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "cta_text" varchar DEFAULT 'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.';
  ALTER TABLE "zakelijk_projectbouw" ADD COLUMN "cta_button" varchar DEFAULT 'Neem contact op →';
  ALTER TABLE "contact" ADD COLUMN "hero_badge" varchar DEFAULT 'Welkom in Serooskerke';
  ALTER TABLE "contact" ADD COLUMN "hero_title" varchar DEFAULT 'Kom langs in onze showroom' NOT NULL;
  ALTER TABLE "contact" ADD COLUMN "hero_text" varchar DEFAULT 'Veranda Zeeland is uw complete leverancier van veranda''s, tuinkamers en glasschuifwanden. In onze showroom van 800 m² ervaart u alle modellen in het echt en krijgt u deskundig, vrijblijvend advies op maat.';
  ALTER TABLE "contact" ADD COLUMN "hero_image_fallback" varchar DEFAULT '/uploads/DJI_20260527082041_0005_D.jpg';
  ALTER TABLE "contact" ADD COLUMN "contact_heading" varchar DEFAULT 'Contactgegevens';
  ALTER TABLE "contact" ADD COLUMN "address_label" varchar DEFAULT 'Adres';
  ALTER TABLE "contact" ADD COLUMN "address_line1" varchar DEFAULT 'De Stekelweie 2';
  ALTER TABLE "contact" ADD COLUMN "address_line2" varchar DEFAULT '4353 RX Serooskerke';
  ALTER TABLE "contact" ADD COLUMN "phone_label" varchar DEFAULT 'Telefoon';
  ALTER TABLE "contact" ADD COLUMN "phone" varchar DEFAULT '0118-853055';
  ALTER TABLE "contact" ADD COLUMN "email_label" varchar DEFAULT 'E-mail';
  ALTER TABLE "contact" ADD COLUMN "email" varchar DEFAULT 'info@verandazeeland.nl';
  ALTER TABLE "contact" ADD COLUMN "hours_label" varchar DEFAULT 'Openingstijden';
  ALTER TABLE "contact" ADD COLUMN "hours_days" varchar DEFAULT 'Dinsdag t/m zaterdag';
  ALTER TABLE "contact" ADD COLUMN "hours_time" varchar DEFAULT '10.00–17.00 uur';
  ALTER TABLE "contact" ADD COLUMN "hours_note" varchar DEFAULT 'Bij voorkeur op afspraak';
  ALTER TABLE "contact" ADD COLUMN "contact_image_fallback" varchar DEFAULT '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg';
  ALTER TABLE "contact" ADD COLUMN "form_heading" varchar DEFAULT 'Vraag een offerte aan';
  ALTER TABLE "contact" ADD COLUMN "form_intro" varchar DEFAULT 'Vul het formulier in en wij nemen binnen 2 werkdagen contact met u op.';
  ALTER TABLE "contact" ADD COLUMN "form_intro2" varchar DEFAULT 'En ontvang indien gewenst onze brochure.';
  ALTER TABLE "contact" ADD COLUMN "form_first_name" varchar DEFAULT 'Voornaam';
  ALTER TABLE "contact" ADD COLUMN "form_last_name" varchar DEFAULT 'Achternaam';
  ALTER TABLE "contact" ADD COLUMN "form_email" varchar DEFAULT 'E-mailadres';
  ALTER TABLE "contact" ADD COLUMN "form_phone" varchar DEFAULT 'Telefoonnummer';
  ALTER TABLE "contact" ADD COLUMN "form_interest" varchar DEFAULT 'Ik ben geïnteresseerd in';
  ALTER TABLE "contact" ADD COLUMN "form_message" varchar DEFAULT 'Uw bericht';
  ALTER TABLE "contact" ADD COLUMN "form_button" varchar DEFAULT 'Verstuur aanvraag →';
  ALTER TABLE "contact" ADD COLUMN "form_disclaimer" varchar DEFAULT 'Wij gaan zorgvuldig om met uw gegevens. Zie ons privacybeleid.';
  ALTER TABLE "contact" ADD COLUMN "service_heading" varchar DEFAULT 'Actief in heel Zeeland';
  ALTER TABLE "contact" ADD COLUMN "service_text" varchar DEFAULT 'Van Walcheren tot Zeeuws-Vlaanderen en de Bevelanden: wij leveren en monteren in de hele provincie.';
  ALTER TABLE "home_usps" DROP COLUMN "_locale";
  ALTER TABLE "home_reviews" DROP COLUMN "_locale";
  ALTER TABLE "veranda_s_lines" DROP COLUMN "_locale";
  ALTER TABLE "veranda_greenline_specs" DROP COLUMN "_locale";
  ALTER TABLE "veranda_greenline_intro_bullets" DROP COLUMN "_locale";
  ALTER TABLE "veranda_greenline_features" DROP COLUMN "_locale";
  ALTER TABLE "veranda_greenline_gallery" DROP COLUMN "_locale";
  ALTER TABLE "veranda_greenline_other_models" DROP COLUMN "_locale";
  ALTER TABLE "veranda_profiline_stats" DROP COLUMN "_locale";
  ALTER TABLE "veranda_profiline_ruimte_points" DROP COLUMN "_locale";
  ALTER TABLE "veranda_profiline_features" DROP COLUMN "_locale";
  ALTER TABLE "veranda_profiline_models" DROP COLUMN "_locale";
  ALTER TABLE "veranda_linea_specs" DROP COLUMN "_locale";
  ALTER TABLE "veranda_linea_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "veranda_linea_features" DROP COLUMN "_locale";
  ALTER TABLE "veranda_linea_gallery" DROP COLUMN "_locale";
  ALTER TABLE "veranda_linea_related" DROP COLUMN "_locale";
  ALTER TABLE "veranda_cube_specs" DROP COLUMN "_locale";
  ALTER TABLE "veranda_cube_intro_bullets" DROP COLUMN "_locale";
  ALTER TABLE "veranda_cube_features" DROP COLUMN "_locale";
  ALTER TABLE "veranda_cube_gallery" DROP COLUMN "_locale";
  ALTER TABLE "veranda_cube_others" DROP COLUMN "_locale";
  ALTER TABLE "veranda_pergola_stats" DROP COLUMN "_locale";
  ALTER TABLE "veranda_pergola_intro_bullets" DROP COLUMN "_locale";
  ALTER TABLE "veranda_pergola_features" DROP COLUMN "_locale";
  ALTER TABLE "veranda_pergola_related" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamers_types" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamers_usps" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamers_gallery" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamer_hellend_dak_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamer_hellend_dak_features" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamer_hellend_dak_gallery" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamer_vlak_dak_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamer_vlak_dak_features" DROP COLUMN "_locale";
  ALTER TABLE "tuinkamer_vlak_dak_gallery" DROP COLUMN "_locale";
  ALTER TABLE "glazen_schuifwanden_types" DROP COLUMN "_locale";
  ALTER TABLE "glazen_schuifwanden_projects" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_glas_intro_list" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_glas_features" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_aluminium_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_aluminium_features" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_lamellen_intro_list" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_lamellen_features" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_steellook_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "schuifwand_steellook_features" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_types" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_projects" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_onderdak_intro_list" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_onderdak_features" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_bovendak_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_bovendak_features" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_screens_intro_bullets" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_screens_features" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_uitvalschermen_intro_usps" DROP COLUMN "_locale";
  ALTER TABLE "zonwering_uitvalschermen_features" DROP COLUMN "_locale";
  ALTER TABLE "accessoires_options" DROP COLUMN "_locale";
  ALTER TABLE "accessoires_gallery" DROP COLUMN "_locale";
  ALTER TABLE "optie_wanden_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "optie_wanden_features" DROP COLUMN "_locale";
  ALTER TABLE "optie_dakbedekking_intro_points" DROP COLUMN "_locale";
  ALTER TABLE "optie_dakbedekking_features" DROP COLUMN "_locale";
  ALTER TABLE "optie_ledverlichting_intro_bullets" DROP COLUMN "_locale";
  ALTER TABLE "optie_ledverlichting_features" DROP COLUMN "_locale";
  ALTER TABLE "optie_fundering_intro_list" DROP COLUMN "_locale";
  ALTER TABLE "optie_fundering_features" DROP COLUMN "_locale";
  ALTER TABLE "optie_onderhoud_intro_checklist" DROP COLUMN "_locale";
  ALTER TABLE "optie_onderhoud_features" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_sectors" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_steps" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_horeca_benefits" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_kantoren_benefits" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_onderwijs_benefits" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_vakantieparken_benefits" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_zorg_benefits" DROP COLUMN "_locale";
  ALTER TABLE "zakelijk_projectbouw_benefits" DROP COLUMN "_locale";
  ALTER TABLE "contact_stats" DROP COLUMN "_locale";
  ALTER TABLE "contact_service_areas" DROP COLUMN "_locale";
  DROP TYPE "public"."_locales";`)
}
