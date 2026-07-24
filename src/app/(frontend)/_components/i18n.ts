// German for fixed UI copy that lives in JSX (nav labels, buttons, section
// eyebrows, footer) — the counterpart to field defaults, which are translated
// in the DB via the seed_de_content migration. Keyed by the Dutch source
// string. Pure (no cookies / no server-only imports) so it works in BOTH
// server components (pass currentLocale()) and the client Breadcrumbs (reads
// the locale cookie). Anything without an entry falls back to the Dutch key,
// so brand/model names (Greenline, Profiline, Linea, Cube, Screens) are simply
// left out. Machine-translated — proofread before go-live.
export const deUI: Record<string, string> = {
  // product / nav labels
  "Veranda's": 'Veranden',
  'Pergola-overkapping': 'Pergola-Überdachung',
  Tuinkamers: 'Gartenzimmer',
  'Tuinkamer met hellend dak': 'Gartenzimmer mit Schrägdach',
  'Tuinkamer met vlak dak': 'Gartenzimmer mit Flachdach',
  Schuifwanden: 'Schiebewände',
  'Glazen schuifwanden': 'Glas-Schiebewände',
  'Aluminium schuifpui': 'Aluminium-Schiebetür',
  'Lamellen schuifwanden': 'Lamellen-Schiebewände',
  'Steellook schuifwanden': 'Steellook-Schiebewände',
  Zonwering: 'Sonnenschutz',
  Onderdakzonwering: 'Unterdach-Sonnenschutz',
  Bovendakzonwering: 'Aufdach-Sonnenschutz',
  Uitvalschermen: 'Fallarmmarkisen',
  Knikarmschermen: 'Gelenkarmmarkisen',
  Rolluiken: 'Rollläden',
  Opties: 'Optionen',
  'Voor- en zijwanden': 'Vorder- und Seitenwände',
  Dakbedekking: 'Dacheindeckung',
  Ledverlichting: 'LED-Beleuchtung',
  Fundering: 'Fundament',
  Onderhoudsproducten: 'Pflegeprodukte',
  Zakelijk: 'Geschäftskunden',
  'Horeca & Leisure': 'Gastronomie & Freizeit',
  'Kantoren & Commercieel Vastgoed': 'Büros & Gewerbeimmobilien',
  'Onderwijs & Scholen': 'Bildung & Schulen',
  'Vakantieparken & Recreatie': 'Ferienparks & Freizeit',
  Zorginstellingen: 'Pflegeeinrichtungen',
  'Projectbouw & Ontwikkeling': 'Projektbau & Entwicklung',

  // SEO landing pages (breadcrumbs + footer links)
  'Veranda prijzen': 'Preise Terrassenüberdachung',
  'Veranda vergunning': 'Genehmigung Terrassenüberdachung',
  'Veranda laten plaatsen': 'Überdachung montieren lassen',
  'Veranda Middelburg': 'Überdachung Middelburg',
  'Veranda Goes': 'Überdachung Goes',
  'Veranda Vlissingen': 'Überdachung Vlissingen',
  Informatie: 'Informationen',

  // buttons / links / eyebrows
  'Offerte aanvragen': 'Angebot anfordern',
  'Offerte aanvragen →': 'Angebot anfordern →',
  'Vraag een offerte aan →': 'Angebot anfordern →',
  Contact: 'Kontakt',
  Home: 'Startseite',
  Producten: 'Produkte',
  Projecten: 'Projekte',
  'Alle projecten': 'Alle Projekte',
  'Onze projecten': 'Unsere Projekte',
  'Andere modellen': 'Andere Modelle',
  'Bekijk project': 'Projekt ansehen',
  'Houten veranda': 'Holz-Veranda',
  Lichtstraat: 'Lichtband',
  'Over ons': 'Über uns',
  Showroom: 'Ausstellungsraum',
  'Alle producten →': 'Alle Produkte →',
  Populair: 'Beliebt',
  'Bekijk de productlijnen': 'Produktlinien ansehen',
  Ontdek: 'Entdecken Sie',
  Bekijk: 'Entdecken Sie',
  'Terug naar Schuifwanden': 'Zurück zu den Schiebewänden',
  uit: 'von',
  reviews: 'Bewertungen',

  // header top bar + footer prose
  'Serooskerke · Showroom di t/m za 10.00–17.00u, bij voorkeur op afspraak':
    'Serooskerke · Ausstellungsraum Di–Sa 10.00–17.00 Uhr, bevorzugt nach Vereinbarung',
  "Specialist in veranda's, tuinkamers en glasschuifwanden voor heel Zeeland.":
    'Spezialist für Veranden, Gartenzimmer und Glas-Schiebewände in ganz Zeeland.',
  'Algemene voorwaarden · Privacy · Disclaimer': 'AGB · Datenschutz · Disclaimer',

  // offerte form
  'Vrijblijvend & op maat': 'Unverbindlich & maßgeschneidert',
  'Uw voornaam': 'Ihr Vorname',
  'Uw achternaam': 'Ihr Nachname',
  'naam@voorbeeld.nl': 'name@beispiel.de',
  Tuinkamer: 'Gartenzimmer',
  'Zakelijk project': 'Geschäftsprojekt',
  'Anders / weet ik nog niet': 'Sonstiges / weiß ich noch nicht',
  'Vertel ons over uw wensen, afmetingen of situatie...':
    'Erzählen Sie uns von Ihren Wünschen, Maßen oder Ihrer Situation...',
  'Liever direct contact? Bel': 'Lieber direkter Kontakt? Rufen Sie an:',
  of: 'oder',
  'kom langs in de showroom': 'besuchen Sie unseren Ausstellungsraum',

  // home model-card descriptions
  'De voordeligste lijn, betaalbaar en strak.': 'Die günstigste Linie, erschwinglich und schlicht.',
  'Veelzijdig, tot 7 meter overspanning.': 'Vielseitig, bis zu 7 Meter Spannweite.',
  'Modern design met een optisch vlak dak.': 'Modernes Design mit optisch flachem Dach.',
  'Exclusief, kubistisch met vlak dak.': 'Exklusiv, kubistisch mit Flachdach.',
}

export type Locale = 'nl' | 'de'

// Translate a fixed Dutch UI string. Unknown keys fall back to the Dutch source.
export const tr = (nl: string, locale: Locale): string =>
  locale === 'de' ? (deUI[nl] ?? nl) : nl
