import type { GlobalConfig } from 'payload'

// "Dakbedekking" option page. Text = editable fields with the design copy as
// defaultValue; benefit points and feature cards = arrays. Read in
// src/app/(frontend)/optie-dakbedekking/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const optieDakbedekking: GlobalConfig = {
  slug: 'optie-dakbedekking',
  label: 'Optie: Dakbedekking',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Opties' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Dakbedekking' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Kies de dakbedekking die past bij uw wensen: van helder, warmtewerend of opaal polycarbonaat tot gelaagd veiligheidsglas — elk met een eigen lichtbeleving.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Opties' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    { name: 'introTitle', type: 'text', defaultValue: 'Licht en warmte in balans' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De dakbedekking bepaalt hoeveel licht en warmte u binnenlaat. Helder glas voor maximaal uitzicht, opaal voor gedempt licht, of warmtewerend voor koelte in de zomer. Wij adviseren u graag over de beste keuze voor uw situatie.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Helder, opaal of warmtewerend polycarbonaat' },
        { text: 'Gelaagd veiligheidsglas' },
        { text: 'Elk met een eigen lichtdoorlaat' },
        { text: 'Inclusief dak- en windlastberekening' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', defaultValue: '/uploads/Lamellen_Verasol_tegels02.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Keuze', desc: 'Glas of polycarbonaat.' },
        { title: 'Lichtbeleving', desc: 'Helder tot gedempt.' },
        { title: 'Warmtewerend', desc: 'Koeler in de zomer.' },
        { title: 'Berekend', desc: 'Incl. daklastberekening.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over dakbedekking?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
