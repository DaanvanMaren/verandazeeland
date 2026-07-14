import type { GlobalConfig } from 'payload'

// "Accessoires" page. Text = editable fields with the design copy as
// defaultValue; option cards + project gallery = arrays. Read in
// src/app/(frontend)/accessoires/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...).
export const accessoires: GlobalConfig = {
  slug: 'accessoires',
  label: 'Accessoires',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Maak het compleet' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Accessoires voor uw veranda' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Maak uw veranda of tuinkamer helemaal af. Kies uw dakbedekking, voeg voor- en zijwanden, LED-verlichting of verwarming toe, en veranker alles met de juiste fundering en afwatering. Alle opties zijn op elkaar en op uw woning afgestemd.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een bezoek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Lamellen_Verasol_tegels02.jpg' },

    { name: 'optionsHeading', type: 'text', defaultValue: 'Opties & accessoires' },
    { name: 'optionsIntro', type: 'textarea', defaultValue: 'Stel uw veranda helemaal naar wens samen.' },
    {
      name: 'options',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Dakbedekking', desc: 'Helder, zonwerend of opaal glas of polycarbonaat.' },
        { title: 'Voor- en zijwanden', desc: 'Bouw uw veranda uit tot een beschutte tuinkamer.' },
        { title: 'LED-verlichting', desc: 'Dimbare spots in sets van 6 of 9, energiezuinig.' },
        { title: 'Verwarming', desc: 'Infrarood terrasstralers voor warme avonden.' },
      ],
    },

    { name: 'galleryHeading', type: 'text', defaultValue: 'Projecten uit Zeeland' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { fallback: '/uploads/Lamellen_Verasol_tegels02.jpg' },
        { fallback: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
      ],
    },

    { name: 'adviesLabel', type: 'text', defaultValue: 'Advies' },
    { name: 'adviesTitle', type: 'text', defaultValue: 'Wij stellen het samen' },
    {
      name: 'adviesText',
      type: 'textarea',
      defaultValue:
        'Niet zeker welke accessoires bij uw veranda passen? Onze adviseurs helpen u graag een compleet pakket samen te stellen dat aansluit op uw wensen en budget.',
    },
    { name: 'adviesCta', type: 'text', defaultValue: 'Plan een bezoek →' },
    { name: 'adviesImage', type: 'upload', relationTo: 'media' },
    { name: 'adviesImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

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
