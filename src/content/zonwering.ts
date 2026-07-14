import type { GlobalConfig } from 'payload'

// "Zonwering" page. Text = editable fields with the design copy as defaultValue;
// the type-of-shading cards and the project gallery are arrays. Read in
// src/app/(frontend)/zonwering/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...).
export const zonwering: GlobalConfig = {
  slug: 'zonwering',
  label: 'Zonwering',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Aangenaam koel' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Zonwering perfect afgestemd op uw veranda' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        "Van onderdak- en bovendakzonwering tot screens en uitvalschermen: Verasol-zonwering is speciaal ontwikkeld voor veranda's en tuinkamers. Houd de warmte buiten, creëer schaduw en privacy, en bedien alles met afstandsbediening, app of automatische zon- en windsensoren.",
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een bezoek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082035_0002_D.jpg' },

    { name: 'typesHeading', type: 'text', defaultValue: 'Type zonwering' },
    { name: 'typesIntro', type: 'textarea', defaultValue: 'Voor elke situatie de juiste oplossing.' },
    {
      name: 'types',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Onderdakzonwering', desc: 'Onder het dak gemonteerd: strak weggewerkt en beschermd tegen weer.' },
        { title: 'Bovendakzonwering', desc: 'Boven op het dak: houdt de warmte tegen vóór het glas warm wordt.' },
        { title: 'Screens', desc: 'Verticale ritsdoeken voor schaduw, privacy en windvastheid.' },
        { title: 'Uitvalschermen', desc: 'Compacte schaduw voor ramen en gevels, ook op verdiepingen.' },
      ],
    },

    { name: 'projectsHeading', type: 'text', defaultValue: 'Projecten uit Zeeland' },
    {
      name: 'projects',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { fallback: '/uploads/6623.jpg' },
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg' },
        { fallback: '/uploads/foto-horeca.jpg' },
        { fallback: '/uploads/DSC_7667-HDR.jpg' },
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250814_0041_LR.jpg' },
      ],
    },

    { name: 'comfortLabel', type: 'text', defaultValue: 'Comfort' },
    { name: 'comfortTitle', type: 'text', defaultValue: 'Slimme bediening' },
    {
      name: 'comfortText',
      type: 'textarea',
      defaultValue:
        'Bedien uw zonwering met een afstandsbediening, tijdklok of via een app. Met een zonsensor beweegt de zonwering automatisch mee met het weer, altijd de perfecte hoeveelheid schaduw.',
    },
    { name: 'comfortCta', type: 'text', defaultValue: 'Vraag advies →' },
    { name: 'comfortImage', type: 'upload', relationTo: 'media' },
    { name: 'comfortImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

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
