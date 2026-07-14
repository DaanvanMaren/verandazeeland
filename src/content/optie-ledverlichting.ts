import type { GlobalConfig } from 'payload'

// "Ledverlichting" opties detail page. Text = editable fields with the design
// copy as defaultValue; bullet list + feature cards = arrays. Read in
// src/app/(frontend)/optie-ledverlichting/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const optieLedverlichting: GlobalConfig = {
  slug: 'optie-ledverlichting',
  label: 'Opties — Ledverlichting',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Opties' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Ledverlichting' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Sfeervolle, dimbare led-spots geïntegreerd in het dak van uw veranda. Energiezuinig en te bedienen op afstand — voor gezellige avonden buiten.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Opties' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/linea-tuinkamer-a.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Sfeer tot in de late uurtjes' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Geïntegreerde led-spots maken uw veranda ook ’s avonds een fijne plek. De dimbare spots komen in sets van 6 of 9 en zijn strak weggewerkt in de dakconstructie, te bedienen via afstandsbediening of app.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Dimbare led-spots in sets van 6 of 9' },
        { text: 'Strak geïntegreerd in het dak' },
        { text: 'Energiezuinig en onderhoudsarm' },
        { text: 'Bediening via afstandsbediening of app' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/cube-rhenen-a.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Sfeervol', desc: 'Warm licht in de avond.' },
        { title: 'Dimbaar', desc: 'Regel de intensiteit.' },
        { title: 'Zuinig', desc: 'Energiezuinige leds.' },
        { title: 'Geïntegreerd', desc: 'Weggewerkt in het dak.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over ledverlichting?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
