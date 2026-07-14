import type { GlobalConfig } from 'payload'

// "Glazen schuifwanden" detail page. Text = editable fields with the design copy
// as defaultValue; feature cards + USP list = arrays. Read in
// src/app/(frontend)/schuifwand-glas/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...).
export const schuifwandGlas: GlobalConfig = {
  slug: 'schuifwand-glas',
  label: 'Glazen schuifwanden',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Schuifwanden' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Glazen schuifwanden' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Frameloze glazen schuifwanden zonder storende kozijnen, voor een volledig vrij uitzicht. Open in de zomer, in enkele seconden dicht bij wind of regen.',
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/cube-rhenen-a.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Maximaal uitzicht, maximale flexibiliteit' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De glazen panelen schuiven soepel achter elkaar en worden gemaakt van 8 tot 10 mm veiligheidsglas. Dankzij de onderrail van slechts 17 mm stapt u vrijwel drempelloos naar buiten. Prijs vanaf € 285 per meter.',
    },
    {
      name: 'introList',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
      defaultValue: [
        { item: 'Frameloos, glashelder en volledig vrij uitzicht' },
        { item: '8–10 mm gehard veiligheidsglas' },
        { item: 'Extreem lage onderrail van 17 mm' },
        { item: 'Past ook op een bestaande veranda' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/linea-tuinkamer-a.jpg' },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Frameloos', desc: 'Geen kozijnen, alleen glas.' },
        { title: 'Windvrij', desc: 'Beschutting zonder verlies van licht.' },
        { title: 'Ruimtebesparend', desc: 'Panelen schuiven achter elkaar.' },
        { title: 'Veilig glas', desc: 'Gehard en eenvoudig schoon te maken.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over glazen schuifwanden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
