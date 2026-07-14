import type { GlobalConfig } from 'payload'

// "Voor- en zijwanden" option page. Text = editable fields with the design copy
// as defaultValue; feature cards = an array. Read in
// src/app/(frontend)/optie-wanden/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...).
export const optieWanden: GlobalConfig = {
  slug: 'optie-wanden',
  label: 'Voor- en zijwanden (optie)',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Opties' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Voor- en zijwanden' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Maak van uw veranda een volwaardige tuinkamer met voor- en zijwanden. Kies uit glazen schuifwanden, aluminium kozijnen, deuren, ramen of dichte delen.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Opties' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },

    { name: 'introTitle', type: 'text', defaultValue: 'Van veranda naar tuinkamer' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Met de juiste voor- en zijwandensluit u uw veranda helemaal af. Combineer glazen schuifwanden met kozijnen, deuren en ramen tot precies de indeling die bij uw situatie past — het hele jaar door comfortabel.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Glazen schuifwanden, kozijnen, deuren en ramen' },
        { text: 'Volledig af te sluiten tot tuinkamer' },
        { text: 'Links, rechts en aan de voorzijde' },
        { text: 'Op maat afgestemd op uw veranda' },
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
        { title: 'Compleet', desc: 'Alles om af te sluiten.' },
        { title: 'Flexibel', desc: 'Combineer naar wens.' },
        { title: 'Jaarrond', desc: 'Comfortabel in elk seizoen.' },
        { title: 'Op maat', desc: 'Passend bij uw situatie.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over voor- en zijwanden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
