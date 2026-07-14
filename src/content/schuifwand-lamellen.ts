import type { GlobalConfig } from 'payload'

// "Lamellen schuifwanden" detail page. Text = editable fields with the design
// copy as defaultValue; feature cards + USP list = arrays. Read in
// src/app/(frontend)/schuifwand-lamellen/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const schuifwandLamellen: GlobalConfig = {
  slug: 'schuifwand-lamellen',
  label: 'Lamellen schuifwanden',
  access: { read: () => true },
  admin: { group: 'Schuifwanden' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Schuifwanden' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Lamellen schuifwanden' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Verstelbare lamellen voor schaduw, privacy en ventilatie. Zet ze open voor frisse lucht en licht, of dicht voor beschutting. U regelt het zelf.',
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Lamellen_Verasol_tegels02.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Schaduw en privacy op maat' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Lamellen schuifwanden combineren beschutting met flexibiliteit. De verstelbare lamellen laten lucht door zonder direct inkijk, en zijn er in een strakke of houtlook-uitvoering die mooi aansluit op uw veranda.',
    },
    {
      name: 'introList',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
      defaultValue: [
        { item: 'Verstelbare lamellen voor licht en lucht' },
        { item: 'Schaduw en privacy zonder de ruimte te sluiten' },
        { item: 'Strakke of houtlook-uitvoering' },
        { item: 'Combineerbaar met glazen schuifwanden' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Verstelbaar', desc: 'Regel zelf licht en privacy.' },
        { title: 'Ventilatie', desc: 'Frisse lucht zonder inkijk.' },
        { title: 'Sfeervol', desc: 'Strak of warm in houtlook.' },
        { title: 'Flexibel', desc: 'Te combineren met glas.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over lamellen schuifwanden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
