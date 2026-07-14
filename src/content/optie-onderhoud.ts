import type { GlobalConfig } from 'payload'

// "Onderhoudsproducten" option page. Text = editable fields with the design copy
// as defaultValue; the checklist and feature cards = arrays. Read in
// src/app/(frontend)/optie-onderhoud/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...).
export const optieOnderhoud: GlobalConfig = {
  slug: 'optie-onderhoud',
  label: 'Onderhoudsproducten (optie)',
  access: { read: () => true },
  admin: { group: 'Opties & accessoires' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Opties' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Onderhoudsproducten' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Houd uw veranda jarenlang mooi met de juiste onderhoudsproducten. Speciaal voor aluminium, glas en polycarbonaat: onderhoudsarm, maar niet onderhoudsvrij.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Opties' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Langdurig stralend' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Aluminium is onderhoudsarm, maar met de juiste reinigingsmiddelen voor glas, polycarbonaat en aluminium blijft uw veranda er jaren als nieuw uitzien. Wij adviseren u graag over het beste onderhoud voor uw materialen.',
    },
    {
      name: 'introChecklist',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
      defaultValue: [
        { item: 'Reinigers voor aluminium, glas en polycarbonaat' },
        { item: 'Houdt de veranda langdurig als nieuw' },
        { item: 'Veilig voor coating en profielen' },
        { item: 'Advies op maat over onderhoud' },
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
        { title: 'Effectief', desc: 'Speciaal voor uw materialen.' },
        { title: 'Veilig', desc: 'Tast de coating niet aan.' },
        { title: 'Langdurig', desc: 'Jaren als nieuw.' },
        { title: 'Advies', desc: 'Wij helpen u kiezen.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over onderhoudsproducten?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
