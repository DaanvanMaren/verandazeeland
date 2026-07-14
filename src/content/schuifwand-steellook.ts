import type { GlobalConfig } from 'payload'

// "Steellook schuifwanden" page. Text = editable fields with the design copy as
// defaultValue; the intro checklist and the feature cards = arrays. Read in
// src/app/(frontend)/schuifwand-steellook/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const schuifwandSteellook: GlobalConfig = {
  slug: 'schuifwand-steellook',
  label: 'Steellook schuifwanden',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Schuifwanden' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Steellook schuifwanden' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Het karakteristieke stalen-look design met slanke zwarte profielen en glasverdeling. Industrieel, tijdloos en verrassend licht in aluminium uitgevoerd.',
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'heroFallback',
      type: 'text',
      defaultValue: '/uploads/linea-tuinkamer-a.jpg',
      admin: { description: 'Standaard-afbeelding (pad in /uploads)' },
    },

    { name: 'introHeading', type: 'text', defaultValue: 'Industrieel karakter' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Steellook schuifwanden geven uw tuinkamer een stoere, industriële uitstraling met de warme charme van klassieke stalen puien — maar dan onderhoudsarm in aluminium. De slanke profielverdeling maakt er een echte blikvanger van.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Industriële steellook met slanke profielen' },
        { text: 'Onderhoudsarm aluminium in plaats van staal' },
        { text: 'Karakteristieke glasverdeling' },
        { text: 'Tijdloze, stoere uitstraling' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    {
      name: 'introFallback',
      type: 'text',
      defaultValue: '/uploads/cube-rhenen-a.jpg',
      admin: { description: 'Standaard-afbeelding (pad in /uploads)' },
    },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Industrieel', desc: 'Stoere stalen-look uitstraling.' },
        { title: 'Onderhoudsarm', desc: 'Aluminium, geen roest.' },
        { title: 'Slank', desc: 'Fijne profielverdeling.' },
        { title: 'Blikvanger', desc: 'Karaktervol design.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over steellook schuifwanden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
