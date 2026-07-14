import type { GlobalConfig } from 'payload'

// "Tuinkamer met hellend dak" page. Text = editable fields with the design copy
// as defaultValue; feature cards + gallery images = arrays. Read in
// src/app/(frontend)/tuinkamer-hellend-dak/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const tuinkamerHellendDak: GlobalConfig = {
  slug: 'tuinkamer-hellend-dak',
  label: 'Tuinkamer met hellend dak',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Tuinkamer' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Tuinkamer met hellend dak' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Een tuinkamer met een licht hellend dak is de klassieke keuze: ruimtelijk, met veel lichtinval en een natuurlijke waterafvoer. Perfect passend bij zowel moderne als traditionele woningen.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een bezoek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/glazenschuifwanden-2000x800-02.png' },

    { name: 'introTitle', type: 'text', defaultValue: 'Ruimtelijk en licht' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Het schuine dak zorgt voor extra hoogte en een royaal, open gevoel. Regenwater loopt vanzelf weg via de goot, en de vorm sluit natuurlijk aan op de meeste daklijnen. Op basis van de Greenline of Profiline bouwt u zo een volwaardige, jaarrond bruikbare tuinkamer.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Ruimtelijk gevoel door extra dakhoogte' },
        { text: 'Veel lichtinval en een open uitstraling' },
        { text: 'Natuurlijke waterafvoer via de goot' },
        { text: 'Gebaseerd op Greenline of Profiline' },
        { text: 'Volledig af te sluiten met glazen schuifwanden' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Veel licht', desc: 'Het hellende glasdak laat maximaal daglicht binnen.' },
        { title: 'Natuurlijke afwatering', desc: 'Regenwater stroomt vanzelf weg via de goot.' },
        { title: 'Passend', desc: 'Sluit mooi aan op vrijwel elke woningstijl.' },
        { title: 'Jaarrond', desc: 'Met beglazing en verwarming het hele jaar bruikbaar.' },
      ],
    },

    { name: 'galleryHeading', type: 'text', defaultValue: 'Hellend dak in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg' },
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250814_0041_LR.jpg' },
      ],
    },

    { name: 'altLabel', type: 'text', defaultValue: 'Ander type?' },
    { name: 'altTitle', type: 'text', defaultValue: 'Liever een strak, vlak dak?' },
    {
      name: 'altText',
      type: 'textarea',
      defaultValue:
        'Een tuinkamer met vlak dak geeft een moderne, kubistische uitstraling. Bekijk de mogelijkheden.',
    },
    { name: 'altCta', type: 'text', defaultValue: 'Bekijk vlak dak →' },
    { name: 'altImage', type: 'upload', relationTo: 'media' },
    { name: 'altImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/cube-kerk.jpg' },

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
