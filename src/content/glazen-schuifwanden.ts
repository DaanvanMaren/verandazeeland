import type { GlobalConfig } from 'payload'

// "Glazen schuifwanden" page. Text = editable fields with the design copy as
// defaultValue; the product cards and project gallery = arrays. Read in
// src/app/(frontend)/glazen-schuifwanden/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const glazenSchuifwanden: GlobalConfig = {
  slug: 'glazen-schuifwanden',
  label: 'Glazen schuifwanden',
  access: { read: () => true },
  admin: { group: 'Schuifwanden' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Flexibel wonen buiten' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Glazen schuifwanden op maat' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Met de schuifwanden van Verasol bepaalt u zelf hoeveel openheid of beschutting u wilt. Van frameloze glazen schuifwanden tot aluminium schuifpuien en lamellenwanden: alles op maat gemaakt en passend op vrijwel elke veranda, ook een bestaande. Zo verlengt u uw buitenseizoen met gemak.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een bezoek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'heroImageFallback',
      type: 'text',
      defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
      admin: { description: 'Standaard-afbeelding (pad in /uploads)' },
    },

    { name: 'typesHeading', type: 'text', defaultValue: 'Onze schuifwanden' },
    {
      name: 'typesIntro',
      type: 'textarea',
      defaultValue:
        '8–10 mm veiligheidsglas · onderrail van slechts 17 mm · glazen schuifwanden vanaf € 285 per meter.',
    },
    {
      name: 'types',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        {
          title: 'Glazen schuifwanden',
          desc: 'Frameloze panelen zonder kozijn, voor een volledig vrij uitzicht.',
        },
        {
          title: 'Aluminium schuifpui',
          desc: 'Glas in een aluminium kozijn: extra stevig en strak afgewerkt.',
        },
        {
          title: 'Lamellen schuifwanden',
          desc: 'Verstelbare lamellen voor schaduw en privacy, strak of in houtlook.',
        },
        {
          title: 'Steellook schuifwanden',
          desc: 'Slanke, zwarte profielen met een industriële, stalen uitstraling.',
        },
      ],
    },

    { name: 'projectsHeading', type: 'text', defaultValue: 'Projecten uit Zeeland' },
    {
      name: 'projects',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },
        { fallback: '/uploads/foto-water-suppen.jpg' },
        { fallback: '/uploads/Lamellen_Verasol_tegels02.jpg' },
      ],
    },

    { name: 'comboLabel', type: 'text', defaultValue: 'Combineer slim' },
    { name: 'comboTitle', type: 'text', defaultValue: 'Perfect met uw veranda' },
    {
      name: 'comboText',
      type: 'textarea',
      defaultValue:
        'Glazen schuifwanden combineren naadloos met alle Verasol-modellen. Samen met een Profiline of Cube veranda creëert u een complete, jaarrond bruikbare buitenkamer.',
    },
    { name: 'comboCta', type: 'text', defaultValue: "Bekijk veranda's →" },
    { name: 'comboImage', type: 'upload', relationTo: 'media' },
    {
      name: 'comboImageFallback',
      type: 'text',
      defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
      admin: { description: 'Standaard-afbeelding (pad in /uploads)' },
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Benieuwd naar de mogelijkheden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
