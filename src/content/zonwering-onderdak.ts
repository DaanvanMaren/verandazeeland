import type { GlobalConfig } from 'payload'

// Onderdakzonwering detail page. Text = editable fields with the design copy as
// defaultValue; feature cards + the intro checklist = arrays. Read in
// src/app/(frontend)/zonwering-onderdak/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const zonweringOnderdak: GlobalConfig = {
  slug: 'zonwering-onderdak',
  label: 'Onderdakzonwering',
  access: { read: () => true },
  admin: { group: 'Zonwering' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zonwering' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Onderdakzonwering' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Zonwering die onder het dak van uw veranda wordt gemonteerd. Het doek blijft beschermd tegen regen en neerslag en zorgt binnen voor aangename schaduw.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Zonwering' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/banner-verasol-pergola-verasol.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Beschermd en strak weggewerkt' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De onderdakzonwering is speciaal ontwikkeld voor veranda’s en tuinkamers. Het scherm zit onder het glas, dus het doek wordt niet aangetast door weer en wind. Elektrisch bediend via schakelaar of handzender, en verkrijgbaar in vele kleuren en dessins.',
    },
    {
      name: 'introList',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Gemonteerd onder het dak, doek blijft beschermd' },
        { text: 'Aangename schaduw binnen de veranda' },
        { text: 'Elektrisch bediend via schakelaar of handzender' },
        { text: 'Vele kleuren en dessins, op maat' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC_8609.jpg' },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Beschermd', desc: 'Doek blijft uit weer en wind.' },
        { title: 'Strak', desc: 'Netjes weggewerkt onder glas.' },
        { title: 'Elektrisch', desc: 'Bediening op afstand.' },
        { title: 'Op maat', desc: 'Vele kleuren en dessins.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over onderdakzonwering?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
