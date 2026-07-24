import type { GlobalConfig } from 'payload'

// "Pext" product page (houten veranda + lichtstraat). Same field shape as
// veranda-cube so it reuses that route layout. Copy rewritten in the site's own
// conversational "u"-tone from the current live page. Read in
// src/app/(frontend)/veranda-pext/page.tsx.
export const verandaPext: GlobalConfig = {
  slug: 'veranda-pext',
  label: 'Pext (product)',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Houten veranda' },
    { name: 'heroPrice', type: 'text', defaultValue: 'Prijs op aanvraag' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Pext' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Houdt u van de warme, natuurlijke uitstraling van hout? De Pext veranda combineert robuust Douglas- of larikshout met slanke aluminium beglazingsprofielen. Zo krijgt u het beste van twee werelden: de sfeer van hout én het gemak van aluminium.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte Pext →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pext-overkapping-slide-veranda-zeeland.jpg' },

    // spec bar
    {
      name: 'specs',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: 'Hout + alu', label: 'Materiaal' },
        { value: 'Douglas / Lariks', label: 'Houtsoort' },
        { value: 'Glas of poly', label: 'Dakbedekking' },
        { value: 'Lichtstraat', label: 'Optie' },
      ],
    },

    // intro block
    { name: 'introTitle', type: 'text', defaultValue: 'De warmte van hout, het gemak van aluminium' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Het dak rust op duurzame aluminium beglazingsprofielen met rubber, gevuld met heldere polycarbonaat- of glasplaten. De profielen werkt u desgewenst weg met aluminium sierkliklijsten, in blank aluminium, antraciet of gebroken wit, precies passend bij uw woning. Kies voor een geïsoleerde uitvoering met grenenhout en HR++ glas voor een warme tuinkamer, of een ongeïsoleerde versie voor een sfeervolle overkapping of buitenverblijf.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Robuust Douglas- of larikshout' },
        { text: 'Slanke aluminium beglazingsprofielen' },
        { text: 'Glas of polycarbonaat als dakbedekking' },
        { text: 'Sierkliklijsten in aluminium, antraciet of gebroken wit' },
        { text: 'Geïsoleerd (HR++) of ongeïsoleerd leverbaar' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/veranda-hout-pext-veranda-zeeland.jpg' },

    // features
    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Natuurlijke uitstraling', desc: 'Hout geeft uw veranda een warme, sfeervolle look.' },
        { title: 'Geïsoleerd of niet', desc: 'Van volwaardige tuinkamer tot open overkapping.' },
        { title: 'Lichtstraat', desc: 'Extra daglicht via een lessenaar-, zadel- of daklicht.' },
        { title: 'Vakmontage', desc: 'Geplaatst door onze vaklieden, inclusief sterkteberekening.' },
      ],
    },

    // op maat band (lichtstraat)
    { name: 'ombouwLabel', type: 'text', defaultValue: 'Meer daglicht' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Voeg een Pext lichtstraat toe' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Wilt u meer daglicht in huis? Een lichtstraat haalt volop natuurlijk licht naar binnen en laat uw kamer direct ruimer ogen. Kies uit een lessenaardak, zadeldak of daklicht, elk met een eigen hellingshoek en indeling. Een echte meerwaarde voor uw woning.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk de opties →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg' },

    // gallery
    { name: 'galleryTitle', type: 'text', defaultValue: 'Pext in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
        { name: 'alt', type: 'text' },
      ],
      defaultValue: [
        { fallback: '/uploads/pext-overkapping-slide-veranda-zeeland.jpg', alt: 'Pext overkapping' },
        { fallback: '/uploads/veranda-hout-pext-veranda-zeeland.jpg', alt: 'Houten Pext veranda' },
        { fallback: '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg', alt: 'Pext lichtstraat lessenaardak' },
        { fallback: '/uploads/lichtstraat-zadeldak-schuin-pext-veranda-zeeland.jpg', alt: 'Pext lichtstraat zadeldak' },
      ],
    },

    // other models
    { name: 'othersTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'others',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'tag', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { name: 'Pext houten veranda', tag: 'Douglas of lariks', href: '/pext-veranda', fallback: '/uploads/veranda-hout-pext-veranda-zeeland.jpg' },
        { name: 'Pext lichtstraat', tag: 'Lessenaar, zadel of daklicht', href: '/pext-lichtstraat', fallback: '/uploads/lichtstraat-zadeldak-schuin-pext-veranda-zeeland.jpg' },
        { name: 'Greenline', tag: 'Voordelig & strak', href: '/veranda-greenline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/cube-kerk.jpg' },
      ],
    },

    // CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in een Pext veranda?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
