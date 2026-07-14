import type { GlobalConfig } from 'payload'

// "Bovendakzonwering" detail page. Text = editable fields with the design copy
// as defaultValue; feature cards = an array. Read in
// src/app/(frontend)/zonwering-bovendak/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const zonweringBovendak: GlobalConfig = {
  slug: 'zonwering-bovendak',
  label: 'Bovendakzonwering',
  access: { read: () => true },
  admin: { group: 'Zonwering' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zonwering' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Bovendakzonwering' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Zonwering boven op het dak van uw veranda. Groot voordeel: de warmte wordt tegengehouden vóór het glas, zodat het onder de veranda merkbaar koeler blijft.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Zonwering' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082041_0005_D.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Houd de warmte buiten' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Bovendakzonwering vangt de zon op vóór die het glas bereikt, waardoor de ruimte eronder veel minder opwarmt dan bij onderdakzonwering. Geschikt voor alle Verasol-veranda’s en tuinkamers, en volledig op maat leverbaar.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Gemonteerd boven op het dak' },
        { text: 'Houdt warmte tegen vóór het glas' },
        { text: 'Merkbaar koeler onder de veranda' },
        { text: 'Geschikt voor alle Verasol-modellen' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Koeler', desc: 'Warmte blijft buiten het glas.' },
        { title: 'Effectief', desc: 'Beste warmtewering.' },
        { title: 'Passend', desc: 'Voor alle modellen.' },
        { title: 'Op maat', desc: 'Volledig maatwerk.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over bovendakzonwering?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
