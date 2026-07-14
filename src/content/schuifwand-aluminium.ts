import type { GlobalConfig } from 'payload'

// "Aluminium schuifpui" detail page. Text = editable fields with the design copy
// as defaultValue; feature cards = an array. Read in
// src/app/(frontend)/schuifwand-aluminium/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const schuifwandAluminium: GlobalConfig = {
  slug: 'schuifwand-aluminium',
  label: 'Aluminium schuifpui',
  access: { read: () => true },
  admin: { group: 'Schuifwanden' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Schuifwanden' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Aluminium schuifpui' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Glas in een strak aluminium kozijn: extra stevig, goed te isoleren en met een moderne, rechte lijn. De robuuste keuze om uw veranda volwaardig af te sluiten.',
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    { name: 'introTitle', type: 'text', defaultValue: 'Stevig en strak afgewerkt' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De aluminium schuifpui combineert de transparantie van glas met de stevigheid van een aluminium frame. Ideaal voor wie de tuinkamer stevig wil isoleren en een strakke uitstraling zoekt, in dezelfde kleur als uw veranda.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'point', type: 'text' }],
      defaultValue: [
        { point: 'Glas in een stevig aluminium kozijn' },
        { point: 'Uitstekend af te sluiten en te isoleren' },
        { point: 'Strakke, moderne uitstraling' },
        { point: 'Kleur afgestemd op uw veranda' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Stevig', desc: 'Robuust aluminium frame.' },
        { title: 'Isolerend', desc: 'Sluit de tuinkamer goed af.' },
        { title: 'Strak', desc: 'Rechte, moderne lijnen.' },
        { title: 'Op maat', desc: 'Kleur en afmeting naar wens.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over de aluminium schuifpui?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
