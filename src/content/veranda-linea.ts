import type { GlobalConfig } from 'payload'

// Linea product page. Text = editable fields with the design copy as
// defaultValue; repeating things (specs / features / gallery / related
// models) = arrays. Read in src/app/(frontend)/veranda-linea/page.tsx. Images
// use an upload field with a static fallback path (public/uploads/...).
export const verandaLinea: GlobalConfig = {
  slug: 'veranda-linea',
  label: 'Veranda Linea',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Modern design' },
    { name: 'heroPrice', type: 'text', defaultValue: 'vanaf € 5.469' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Linea' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Strak en modern met een optisch vlak dak. Ranker en toegankelijker dan de Cube, en daarmee de ideale keuze voor wie design zoekt in een iets zachtere prijsklasse.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte Linea →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', defaultValue: '/uploads/linea-hero.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    // specs strip
    {
      name: 'specs',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: '€ 5.469', label: 'Vanaf prijs' },
        { value: 'Optisch vlak', label: 'Dak' },
        { value: 'Modern', label: 'Uitstraling' },
        { value: 'Mogelijk', label: 'Vrijstaand' },
      ],
    },

    // intro + checklist
    { name: 'introTitle', type: 'text', defaultValue: 'Strak design, toegankelijk geprijsd' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De Linea combineert strakke lijnen met een optisch vlak dak en een moderne uitstraling. Waar de Cube volledig kubistisch en robuust is, houdt de Linea een rankere, lichtere lijn aan. De overkapping sluit perfect aan bij een moderne bouwstijl en behoudt het buitengevoel, zowel aan de gevel als vrijstaand in de tuin.',
    },
    {
      name: 'introPoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Optisch vlak dak met strakke, moderne lijnen' },
        { text: 'Ranker en toegankelijker dan de Cube' },
        { text: 'Sluit mooi aan bij een moderne bouwstijl' },
        { text: 'Ook als vrijstaande veranda of tuinkamer' },
        { text: 'Keuze uit glas of polycarbonaat dakbedekking' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', defaultValue: '/uploads/Linea_Rijssen_VS_20250922_1273.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    // features
    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Vlak daklook', desc: 'Strak silhouet zonder zichtbare schuinte.' },
        { title: 'Ranker profiel', desc: 'Lichter en toegankelijker dan de Cube.' },
        { title: 'Modern', desc: 'Perfecte match met eigentijdse architectuur.' },
        { title: 'Vrijstaand', desc: 'Ook los van de gevel te plaatsen.' },
      ],
    },

    // op maat band
    { name: 'opmaatLabel', type: 'text', defaultValue: 'Volledig op maat' },
    { name: 'opmaatTitle', type: 'text', defaultValue: 'Stel uw Linea samen' },
    {
      name: 'opmaatText',
      type: 'textarea',
      defaultValue:
        'Kies dakbedekking, kleur en afmetingen, en vul aan met verlichting, zonwering en glazen schuifwanden voor een complete, moderne tuinkamer.',
    },
    { name: 'opmaatCta', type: 'text', defaultValue: 'Bekijk alle opties →' },
    { name: 'opmaatImage', type: 'upload', relationTo: 'media' },
    { name: 'opmaatImageFallback', type: 'text', defaultValue: '/uploads/Linea_Rijssen_VS_20250922_1282.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    // gallery
    { name: 'galleryTitle', type: 'text', defaultValue: 'Linea in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
        { name: 'alt', type: 'text' },
      ],
      defaultValue: [
        { fallback: '/uploads/linea-tuinkamer-a.jpg', alt: 'Linea tuinkamer' },
        { fallback: '/uploads/Linea_Rijssen_VS_20250922_1293.jpg', alt: 'Linea veranda' },
        { fallback: '/uploads/Linea_Tuinkamer_Rijssen_VS_20250611_112_LR.jpg', alt: 'Linea tuinkamer interieur' },
        { fallback: '/uploads/linea-tuinkamer-b.jpg', alt: 'Linea tuinkamer met uitzicht' },
      ],
    },

    // related models
    { name: 'relatedTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'related',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'tag', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { name: 'Greenline', tag: 'Voordelig & strak', href: '/veranda-greenline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { name: 'Profiline', tag: 'Veelzijdig maatwerk', href: '/veranda-profiline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/Lamellen_Verasol_tegels02.jpg' },
        { name: 'Pergola', tag: 'Vrijstaand', href: '/veranda-pergola', fallback: '/uploads/foto-water-suppen.jpg' },
      ],
    },

    // CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in de Linea?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
