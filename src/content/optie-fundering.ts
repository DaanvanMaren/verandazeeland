import type { GlobalConfig } from 'payload'

// "Fundering" option page. Text = editable fields with the design copy as
// defaultValue; the checklist and feature cards = arrays. Read in
// src/app/(frontend)/optie-fundering/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...).
export const optieFundering: GlobalConfig = {
  slug: 'optie-fundering',
  label: 'Fundering (optie)',
  access: { read: () => true },
  admin: { group: 'Opties & accessoires' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Opties' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Fundering' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Een goede fundering is de basis van een stabiele veranda. Wij verzorgen de juiste fundering voor uw situatie, zodat uw veranda niet verzakt.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Opties' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },

    { name: 'introTitle', type: 'text', defaultValue: 'Een stabiele basis' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Afhankelijk van de bodem en uw situatie kiezen we de juiste fundering: van betonpoeren tot verstelbare schroefpalen. Zo staat uw veranda of tuinkamer jarenlang stabiel en waterpas, gegarandeerd tegen verzakken.',
    },
    {
      name: 'introList',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Afgestemd op bodem en situatie' },
        { text: 'Betonpoeren of verstelbare schroefpalen' },
        { text: 'Voorkomt verzakken van de constructie' },
        { text: 'Inclusief professionele plaatsing' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Stabiel', desc: 'Stevige basis die niet verzakt.' },
        { title: 'Passend', desc: 'Afgestemd op de bodem.' },
        { title: 'Waterpas', desc: 'Nauwkeurig geplaatst.' },
        { title: 'Vakwerk', desc: 'Door eigen monteurs.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over de fundering?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
