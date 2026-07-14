import type { GlobalConfig } from 'payload'

// "Uitvalschermen" (Zonwering) page. Text = editable fields with the design copy
// as defaultValue; feature cards + usp list = arrays. Read in
// src/app/(frontend)/zonwering-uitvalschermen/page.tsx. Images use an upload
// field with a static fallback path (public/uploads/...).
export const zonweringUitvalschermen: GlobalConfig = {
  slug: 'zonwering-uitvalschermen',
  label: 'Uitvalschermen',
  access: { read: () => true },
  admin: { group: 'Zonwering' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zonwering' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Uitvalschermen' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Compacte schermen die schuin naar buiten uitvallen en zo schaduw geven voor ramen en gevels, ook op de verdieping. Strak weggewerkt in een cassette.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Zonwering' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/greenline-detail.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Schaduw voor ramen en gevels' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Uitvalschermen bieden gerichte schaduw op ramen en gevelpartijen en voorkomen dat ruimtes achter het glas oververhitten. In een strakke cassette weggewerkt en op maat leverbaar in vele kleuren.',
    },
    {
      name: 'introUsps',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Gerichte schaduw voor ramen en gevels' },
        { text: 'Ook geschikt voor verdiepingen' },
        { text: 'Strak weggewerkt in een cassette' },
        { text: 'Op maat in vele kleuren' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082041_0005_D.jpg' },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Gericht', desc: 'Schaduw precies waar nodig.' },
        { title: 'Overal', desc: 'Ook op de verdieping.' },
        { title: 'Strak', desc: 'Nette cassette-afwerking.' },
        { title: 'Op maat', desc: 'Vele kleuren mogelijk.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over uitvalschermen?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
