import type { GlobalConfig } from 'payload'

// Palazzo "Sqope" model (glasdak). Same field shape as veranda-cube → rendered by
// the shared ProductPage. Copy rewritten from the live site in the site's tone.
export const palazzoSqope: GlobalConfig = {
  slug: 'palazzo-sqope',
  label: 'Palazzo · Sqope',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Glasdak' },
    { name: 'heroPrice', type: 'text', defaultValue: 'Prijs op aanvraag' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Palazzo Sqope' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'De Sqope is een kubistische terrasoverkapping met een strak glasdak. Grote glasoppervlakken zorgen voor volop natuurlijk licht en een open gevoel, terwijl de dakliggers netjes zijn weggewerkt in de constructie. Leverbaar als aanbouw of vrijstaand, met een vrije overspanning tot wel 7 meter.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte Sqope →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazo-sqope-slide-veranda-zeeland.jpg' },

    {
      name: 'specs',
      type: 'array',
      fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }],
      defaultValue: [
        { value: 'tot 7 m', label: 'Vrije overspanning' },
        { value: 'Glasdak', label: 'Daktype' },
        { value: 'Aan- of vrijstaand', label: 'Plaatsing' },
        { value: 'Made in Germany', label: 'Kwaliteit' },
      ],
    },

    { name: 'introTitle', type: 'text', defaultValue: 'Strak design, volop licht' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Scherpe lijnen, een minimalistische uitstraling en grote glasoppervlakken: de Sqope brengt licht en ruimte samen. De geïntegreerde constructie houdt het zicht vrij, dus u geniet ongestoord van uw tuin. Kies de vrijstaande variant voor een lounge- of eethoek midden op het terras, of bouw hem strak aan de gevel.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Strak kubistisch design met scherpe lijnen' },
        { text: 'Grote glasoppervlakken voor veel daglicht' },
        { text: 'Dakliggers weggewerkt in de constructie' },
        { text: 'Vrije overspanning tot 7 meter' },
        { text: 'Aanbouw of vrijstaand leverbaar' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazo-sqope-boven-veranda-zeeland.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'title', type: 'text' }, { name: 'desc', type: 'textarea' }],
      defaultValue: [
        { title: 'Strak glasdak', desc: 'Grote glasoppervlakken voor maximaal daglicht.' },
        { title: 'Kubistisch design', desc: 'Scherpe, minimalistische lijnen die overal bij passen.' },
        { title: 'Vrije overspanning', desc: 'Tot 7 meter breed, met vrij zicht op de tuin.' },
        { title: 'Vakmontage', desc: 'Inclusief sterkteberekening en montage door onze vaklieden.' },
      ],
    },

    { name: 'ombouwLabel', type: 'text', defaultValue: 'Ander daktype' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Liever een lamellendak?' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Wilt u zelf zon en schaduw kunnen doseren? Bekijk dan het Palazzo lamellendak: draai de lamellen open of dicht, precies naar wens, en blijf ook bij regen droog zitten.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk het lamellendak →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg' },

    { name: 'galleryTitle', type: 'text', defaultValue: 'Sqope in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }, { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } }, { name: 'alt', type: 'text' }],
      defaultValue: [
        { fallback: '/uploads/pallazo-sqope-boven-veranda-zeeland.jpg', alt: 'Palazzo Sqope bovenaanzicht' },
        { fallback: '/uploads/pallazo-sqope-zij-veranda-zeeland.jpg', alt: 'Palazzo Sqope zijaanzicht' },
        { fallback: '/uploads/pallazo-sqope-binnen-veranda-zeeland.jpg', alt: 'Palazzo Sqope van binnen' },
        { fallback: '/uploads/pallazo-sqope-slide-veranda-zeeland.jpg', alt: 'Palazzo Sqope veranda' },
      ],
    },

    { name: 'othersTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'others',
      type: 'array',
      fields: [{ name: 'name', type: 'text' }, { name: 'tag', type: 'text' }, { name: 'href', type: 'text' }, { name: 'image', type: 'upload', relationTo: 'media' }, { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } }],
      defaultValue: [
        { name: 'Palazzo Lamellendak', tag: 'Roterend lamellendak', href: '/palazzo-lamellendak', fallback: '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg' },
        { name: 'Profiline', tag: 'Veelzijdig maatwerk', href: '/veranda-profiline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { name: 'Linea', tag: 'Modern vlak dak', href: '/veranda-linea', fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
        { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/cube-kerk.jpg' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in een Palazzo Sqope?' },
    { name: 'ctaText', type: 'textarea', defaultValue: 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.' },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
