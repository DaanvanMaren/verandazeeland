import type { GlobalConfig } from 'payload'

// "Tuinkamer met vlak dak" page. Text = editable fields with the design copy as
// defaultValue; feature cards and gallery images = arrays. Read in
// src/app/(frontend)/tuinkamer-vlak-dak/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const tuinkamerVlakDak: GlobalConfig = {
  slug: 'tuinkamer-vlak-dak',
  label: 'Tuinkamer met vlak dak',
  access: { read: () => true },
  admin: { group: 'Tuinkamers' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Tuinkamer' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Tuinkamer met vlak dak' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Een tuinkamer met een vlak dak geeft een strakke, moderne en kubistische uitstraling. De ideale keuze voor eigentijdse woningen en wie houdt van clean design.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een bezoek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/banners-2000x800-vlak-2.png' },

    { name: 'introTitle', type: 'text', defaultValue: 'Strak en modern' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Het vlakke dak zorgt voor een minimalistisch silhouet met rechte lijnen en, bij de Cube, volledig verborgen afwatering. Gebaseerd op de Linea of Cube maakt u er een designstatement van dat naadloos aansluit op moderne architectuur, het hele jaar door te gebruiken.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Strak, kubistisch design met rechte lijnen' },
        { text: 'Verborgen afwatering (Cube)' },
        { text: 'Gebaseerd op Linea of Cube' },
        { text: 'Perfect bij moderne, eigentijdse woningen' },
        { text: 'Volledig af te sluiten met glazen schuifwanden' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Modern design', desc: 'Strak vlak dak met een kubistisch silhouet.' },
        { title: 'Verborgen goten', desc: 'Bij de Cube volledig weggewerkte afwatering.' },
        { title: 'Designstatement', desc: 'Sluit naadloos aan op moderne architectuur.' },
        { title: 'Jaarrond', desc: 'Met beglazing en verwarming het hele jaar bruikbaar.' },
      ],
    },

    { name: 'galleryTitle', type: 'text', defaultValue: 'Vlak dak in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_014_LR.jpg' },
        { fallback: '/uploads/cube-rhenen-a.jpg' },
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_070_LR.jpg' },
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_085_LR.jpg' },
      ],
    },

    { name: 'altLabel', type: 'text', defaultValue: 'Ander type?' },
    { name: 'altTitle', type: 'text', defaultValue: 'Liever een hellend dak?' },
    {
      name: 'altText',
      type: 'textarea',
      defaultValue:
        'Een tuinkamer met hellend dak is ruimtelijk en licht, met een natuurlijke waterafvoer. Bekijk de mogelijkheden.',
    },
    { name: 'altCta', type: 'text', defaultValue: 'Bekijk hellend dak →' },
    { name: 'altImage', type: 'upload', relationTo: 'media' },
    { name: 'altImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

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
