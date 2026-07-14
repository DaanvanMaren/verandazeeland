import type { GlobalConfig } from 'payload'

// Greenline — single product page (Verasol instapmodel). Text = editable fields
// with the design copy as defaultValue; repeating items (specs, kenmerken,
// gallery, andere modellen) = arrays. Read in
// src/app/(frontend)/veranda-greenline/page.tsx. Images use an upload field with
// a static fallback path (public/uploads/...).
export const verandaGreenline: GlobalConfig = {
  slug: 'veranda-greenline',
  label: 'Greenline',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Instapmodel' },
    { name: 'heroPrice', type: 'text', defaultValue: 'vanaf € 1.259' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Greenline' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'De meest voordelige veranda van Verasol: sterk, stijlvol en aantrekkelijk geprijsd. Een slim profielontwerp levert maximale stevigheid met minder materiaal.',
    },
    { name: 'heroButtonPrimary', type: 'text', defaultValue: 'Offerte Greenline →' },
    { name: 'heroButtonSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC09382.jpg' },

    // specs strip
    {
      name: 'specs',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: '€ 1.259', label: 'Vanaf prijs' },
        { value: '2', label: 'Kleuren' },
        { value: '5', label: 'Daksoorten' },
        { value: 'Ja', label: 'Bouwpakket' },
        { value: '5–10 jaar', label: 'Garantie' },
      ],
    },

    // intro text block
    { name: 'introTitle', type: 'text', defaultValue: 'Betaalbare kwaliteit zonder concessies' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De Greenline bewijst dat een hoogwaardige aluminium veranda niet duur hoeft te zijn. Door het slimme profielontwerp is er minder materiaal nodig terwijl de constructie zeer stevig blijft — met een verstevigde goot zijn zelfs overspanningen tot 7 meter op twee staanders mogelijk. De krasvaste Qualicoat-structuurlak is onderhoudsvriendelijk en milieubewust geproduceerd.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Twee kleuren: wit (RAL 9010) en antraciet structuurlak' },
        { text: 'Drie gootsierlijsten: vlak, rond en klassiek' },
        { text: 'Vijf daksoorten: van polycarbonaat tot gelaagd veiligheidsglas' },
        { text: 'Standaardmaten van 3 tot 7 meter breed, of volledig op maat' },
        { text: 'Ook als compleet bouwpakket voor zelfmontage' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC09397.jpg' },

    // features / kenmerken
    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Onderhoudsarm', text: 'Aluminium roest niet en hoeft nooit geschilderd te worden.' },
        { title: 'Slim ontwerp', text: 'Maximale sterkte met een minimum aan materiaal.' },
        { title: 'Snel te plaatsen', text: 'Ook geschikt voor doe-het-zelvers als bouwpakket.' },
        { title: 'Duitse kwaliteit', text: 'Geproduceerd in de eigen fabriek van Verasol.' },
      ],
    },

    // config / op maat band
    { name: 'configLabel', type: 'text', defaultValue: 'Volledig op maat' },
    { name: 'configTitle', type: 'text', defaultValue: 'Stel uw Greenline samen' },
    {
      name: 'configText',
      type: 'textarea',
      defaultValue:
        'Kies uw maat, kleur, dakbedekking en voeg opties toe zoals ledverlichting of glazen schuifwanden. Wij rekenen de sterkteberekening voor u door.',
    },
    { name: 'configCta', type: 'text', defaultValue: 'Bekijk alle opties →' },
    { name: 'configImage', type: 'upload', relationTo: 'media' },
    { name: 'configImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC_4586-HDR.jpg' },

    // gallery
    { name: 'galleryTitle', type: 'text', defaultValue: 'Greenline in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
        { name: 'alt', type: 'text' },
      ],
      defaultValue: [
        { fallback: '/uploads/greenline-hottub.jpg', alt: 'Greenline tuinkamer' },
        { fallback: '/uploads/greenline-detail.jpg', alt: 'Greenline detail' },
        { fallback: '/uploads/IMG_9393.jpg', alt: 'Greenline met houten wand' },
      ],
    },

    // andere modellen
    { name: 'otherTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'otherModels',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'tag', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { name: 'Profiline', tag: 'Veelzijdig maatwerk', href: '/veranda-profiline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { name: 'Linea', tag: 'Modern vlak dak', href: '/veranda-linea', fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
        { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/Lamellen_Verasol_tegels02.jpg' },
        { name: 'Pergola', tag: 'Vrijstaand', href: '/veranda-pergola', fallback: '/uploads/foto-water-suppen.jpg' },
      ],
    },

    // CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in de Greenline?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
