import type { GlobalConfig } from 'payload'

// "Tuinkamers" overview page. Text = editable fields with the design copy as
// defaultValue; the two dak-type cards, the USP grid and the project gallery are
// array fields. Read in src/app/(frontend)/tuinkamers/page.tsx. Images use an
// upload field with a static fallback path (public/uploads/...).
export const tuinkamers: GlobalConfig = {
  slug: 'tuinkamers',
  label: 'Tuinkamers (overzicht)',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Het hele jaar buiten' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Uw tuinkamer, altijd het juiste seizoen' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        "Een tuinkamer is een veranda die u met glazen schuifwanden of vaste voor- en zijwanden verder afsluit: beschutter tegen wind en regen, en daardoor langer in het jaar te gebruiken. Omdat Verasol-veranda's modulair zijn opgebouwd, bouwt u een bestaande veranda stap voor stap uit tot een volwaardige tuinkamer.",
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een bezoek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082041_0005_D.jpg' },

    { name: 'typesLabel', type: 'text', defaultValue: 'Ontdek de mogelijkheden' },
    { name: 'typesHeading', type: 'text', defaultValue: '2 type tuinkamers' },
    {
      name: 'typesIntro',
      type: 'textarea',
      defaultValue:
        'De dakvorm bepaalt de uitstraling van uw tuinkamer. Een hellend dak en een vlak dak geven allebei een ander karakter — wij zetten de verschillen voor u op een rij.',
    },
    {
      name: 'types',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'text' },
        { name: 'cta', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        {
          title: 'Hellend dak',
          desc: 'Ruimtelijk, veel licht en natuurlijke afwatering',
          cta: 'Bekijk →',
          href: '/tuinkamer-hellend-dak',
          fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
        },
        {
          title: 'Vlak dak',
          desc: 'Strak, modern en kubistisch van vorm',
          cta: 'Bekijk →',
          href: '/tuinkamer-vlak-dak',
          fallback: '/uploads/cube-kerk.jpg',
        },
      ],
    },

    { name: 'uspHeading', type: 'text', defaultValue: 'Waarom een tuinkamer?' },
    { name: 'uspIntro', type: 'text', defaultValue: 'Alle voordelen van buiten wonen, zonder de nadelen van het weer.' },
    {
      name: 'usps',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Jaarrond comfort', desc: 'Met beglazing en optionele verwarming het hele jaar bruikbaar.' },
        { title: 'Meer leefruimte', desc: 'Een volwaardige extra kamer aan uw woning, zonder verbouwing.' },
        { title: 'Volledig op maat', desc: 'Afgestemd op uw woning, tuin en wensen.' },
        { title: 'Ombouw mogelijk', desc: 'Bestaande veranda eenvoudig uit te breiden tot tuinkamer.' },
      ],
    },

    { name: 'galleryHeading', type: 'text', defaultValue: 'Projecten uit Zeeland' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { fallback: '/uploads/foto-water-suppen.jpg' },
        { fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
      ],
    },

    { name: 'glasLabel', type: 'text', defaultValue: 'Glasschuifwanden' },
    { name: 'glasTitle', type: 'text', defaultValue: 'Open of dicht, u kiest' },
    {
      name: 'glasText',
      type: 'textarea',
      defaultValue:
        'Combineer uw tuinkamer met glasschuifwanden: in de zomer volledig open, bij wind en regen in enkele seconden dicht. Zo bepaalt u zelf hoe u van uw buitenruimte geniet.',
    },
    { name: 'glasCta', type: 'text', defaultValue: 'Bekijk glaswanden →' },
    { name: 'glasImage', type: 'upload', relationTo: 'media' },
    { name: 'glasImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Benieuwd naar de mogelijkheden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
