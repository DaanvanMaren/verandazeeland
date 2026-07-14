import type { GlobalConfig } from 'payload'

// "Screens" zonwering detail page. Text = editable fields with the design copy
// as defaultValue; bullet list + feature cards = arrays. Read in
// src/app/(frontend)/zonwering-screens/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const zonweringScreens: GlobalConfig = {
  slug: 'zonwering-screens',
  label: 'Zonwering — Screens',
  access: { read: () => true },
  admin: { group: 'Zonwering' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zonwering' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Screens' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Verticale ritsdoeken die langs de zijkanten door een geleiding lopen. Windvast, zonwerend en ideaal als flexibele zij- of voorwand van uw veranda.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Zonwering' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Windvast en veelzijdig' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Dankzij de supersterke zijgeleiding blijven screens ook bij wind strak staan. Ze houden zon, inkijk en insecten buiten en zijn er in vele kleuren en doeksoorten, met bediening via draaiknop of meerkanaals afstandsbediening.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Windvaste ritsgeleiding aan de zijkanten' },
        { text: 'Zonwering, privacy en insectenwering' },
        { text: 'Vele kleuren en doeksoorten' },
        { text: 'Bediening via knop of afstandsbediening' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Windvast', desc: 'Ritsgeleiding houdt strak.' },
        { title: 'Multifunctioneel', desc: 'Zon, inkijk en insecten.' },
        { title: 'Keuze', desc: 'Vele kleuren en doeken.' },
        { title: 'Comfort', desc: 'Elektrische bediening.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over screens?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
