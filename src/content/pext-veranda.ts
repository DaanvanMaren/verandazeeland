import type { GlobalConfig } from 'payload'


// Pext houten veranda (met opties). Same field shape as veranda-cube → rendered
// by the shared ProductPage.
export const pextVeranda: GlobalConfig = {
  slug: 'pext-veranda',
  label: 'Pext · Houten veranda',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Houten veranda' },
    { name: 'heroPrice', type: 'text', defaultValue: 'Prijs op aanvraag' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Pext houten veranda' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Houdt u van de warme, natuurlijke uitstraling van hout? De Pext veranda combineert robuust Douglas- of larikshout met slanke aluminium beglazingsprofielen. Zo krijgt u het beste van twee werelden: de sfeer van hout én het onderhoudsgemak van aluminium.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte Pext →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pext-overkapping-slide-veranda-zeeland.jpg' },

    {
      name: 'specs',
      type: 'array',
      fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }],
      defaultValue: [
        { value: 'Hout + alu', label: 'Materiaal' },
        { value: 'Douglas / Lariks', label: 'Houtsoort' },
        { value: 'Glas of poly', label: 'Dakbedekking' },
        { value: 'Geïsoleerd?', label: 'Optioneel' },
      ],
    },

    { name: 'introTitle', type: 'text', defaultValue: 'De warmte van hout, het gemak van aluminium' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Het dak rust op duurzame aluminium beglazingsprofielen met rubber, gevuld met heldere polycarbonaat- of glasplaten. De profielen werkt u desgewenst weg met aluminium sierkliklijsten, in blank aluminium, antraciet of gebroken wit, precies passend bij uw woning. Kies voor een geïsoleerde uitvoering met grenenhout en HR++ glas voor een warme tuinkamer, of een ongeïsoleerde versie met enkellaags veiligheidsglas voor een sfeervolle overkapping of buitenverblijf.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Robuust Douglas- of larikshout' },
        { text: 'Slanke aluminium beglazingsprofielen met rubber' },
        { text: 'Dakbedekking in glas of polycarbonaat' },
        { text: 'Sierkliklijsten in blank aluminium, antraciet of gebroken wit' },
        { text: 'Geïsoleerd (grenen + HR++) of ongeïsoleerd leverbaar' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/veranda-hout-pext-veranda-zeeland.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'title', type: 'text' }, { name: 'desc', type: 'textarea' }],
      defaultValue: [
        { title: 'Natuurlijke uitstraling', desc: 'Hout geeft uw veranda een warme, sfeervolle look.' },
        { title: 'Geïsoleerd of niet', desc: 'Van volwaardige tuinkamer tot open overkapping.' },
        { title: 'Kleuren op maat', desc: 'Sierkliklijsten in blank aluminium, antraciet of gebroken wit.' },
        { title: 'Vakmontage', desc: 'Inclusief sterkteberekening en montage door onze vaklieden.' },
      ],
    },

    { name: 'ombouwLabel', type: 'text', defaultValue: 'Meer daglicht' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Voeg een Pext lichtstraat toe' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Wilt u nog meer daglicht? Combineer uw Pext veranda met een lichtstraat. Kies uit een lessenaardak, zadeldak of daklicht en haal volop natuurlijk licht naar binnen.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk de lichtstraat →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg' },

    { name: 'galleryTitle', type: 'text', defaultValue: 'Pext in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }, { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } }, { name: 'alt', type: 'text' }],
      defaultValue: [
        { fallback: '/uploads/pext-overkapping-slide-veranda-zeeland.jpg', alt: 'Pext houten overkapping' },
        { fallback: '/uploads/veranda-hout-pext-veranda-zeeland.jpg', alt: 'Houten Pext veranda' },
      ],
    },

    { name: 'showOtherModels', type: 'checkbox', defaultValue: true, label: 'Toon "Andere modellen"-blok', admin: { description: 'Toont automatisch de andere modellen uit dezelfde lijn (foto, titel en tag komen van die pagina).' } },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in een Pext veranda?' },
    { name: 'ctaText', type: 'textarea', defaultValue: 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.' },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
