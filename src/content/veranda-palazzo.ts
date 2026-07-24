import type { GlobalConfig } from 'payload'

import { productOptions } from './products'

// "Palazzo" product page (lamellendak + Sqope glasdak). Same field shape as
// veranda-cube so it reuses that route layout. Copy rewritten in the site's own
// conversational "u"-tone from the current live page. Read in
// src/app/(frontend)/veranda-palazzo/page.tsx.
export const verandaPalazzo: GlobalConfig = {
  slug: 'veranda-palazzo',
  label: 'Palazzo (product)',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Lamellendak' },
    { name: 'heroPrice', type: 'text', defaultValue: 'Prijs op aanvraag' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Palazzo' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Zelf bepalen hoeveel zon of schaduw u onder uw overkapping wilt? Met het lamellendak van Palazzo draait u de lamellen simpelweg open of dicht. Strak, kubistisch design en het hele jaar door een aangenaam terras.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte Palazzo →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazzo-slide-top-veranda-zeeland.jpg' },

    // spec bar
    {
      name: 'specs',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: 'tot 7 m', label: 'Vrije overspanning' },
        { value: 'Roterend', label: 'Lamellendak' },
        { value: 'Aan- of vrijstaand', label: 'Plaatsing' },
        { value: 'Made in Germany', label: 'Kwaliteit' },
      ],
    },

    // intro block
    { name: 'introTitle', type: 'text', defaultValue: 'Zelf de baas over zon en schaduw' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Het lamellendak van Palazzo is heerlijk veelzijdig: dicht voor schaduw, open voor volop licht. Doordat warme lucht tussen de lamellen ontsnapt, blijft het er ook op een warme dag prettig toeven. En regent het? Dan sluiten de aluminium lamellen waterdicht en voeren ze het water netjes af via de goten. De dakliggers zijn weggewerkt in de constructie, dus u houdt een rustige, minimalistische uitstraling die bij vrijwel elke woning past.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Roterende lamellen: zelf zon en schaduw doseren' },
        { text: 'Waterdicht dak dat regen netjes afvoert' },
        { text: 'Warme lucht ontsnapt tussen de lamellen door' },
        { text: 'Vrije overspanning tot 7 meter' },
        { text: 'Aanbouw of vrijstaand, precies zoals u wilt' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazzo-lamellendak-oirschot-veranda-zeeland.jpg' },

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
        { title: 'Roterende lamellen', desc: 'Draai open voor licht, dicht voor schaduw, precies naar wens.' },
        { title: 'Waterdicht', desc: 'Gesloten lamellen voeren regen af naar de goten.' },
        { title: 'Sqope glasdak', desc: 'Liever een strak glasdak? Ook dat kan bij Palazzo.' },
        { title: 'Vakmontage', desc: 'Geplaatst door onze vaklieden, inclusief sterkteberekening.' },
      ],
    },

    // op maat band
    { name: 'ombouwLabel', type: 'text', defaultValue: 'Open of gesloten' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Ook als Sqope met glasdak' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Naast het lamellendak levert Palazzo de Veranda Sqope: een kubistische overkapping met een strak glasdak en grote glasoppervlakken. Volop natuurlijk licht en een open gevoel, verkrijgbaar in open én gesloten varianten.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk alle opties →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazo-sqope-zij-veranda-zeeland.jpg' },

    // gallery
    { name: 'galleryTitle', type: 'text', defaultValue: 'Palazzo in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
        { name: 'alt', type: 'text' },
      ],
      defaultValue: [
        { fallback: '/uploads/pallazo-sqope-boven-veranda-zeeland.jpg', alt: 'Palazzo Sqope bovenaanzicht' },
        { fallback: '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg', alt: 'Palazzo lamellendak' },
        { fallback: '/uploads/pallazo-sqope-binnen-veranda-zeeland.jpg', alt: 'Palazzo Sqope van binnen' },
        { fallback: '/uploads/pallazo-sqope-slide-veranda-zeeland.jpg', alt: 'Palazzo Sqope veranda' },
        { fallback: '/uploads/pallazzo-lamellendak-oirschot-veranda-zeeland.jpg', alt: 'Palazzo lamellendak Oirschot' },
      ],
    },

    // other models
    { name: 'othersTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'otherModels',
      type: 'select',
      hasMany: true,
      options: productOptions,
      defaultValue: ['palazzo-sqope', 'palazzo-lamellendak', 'veranda-linea', 'veranda-cube'],
      admin: { description: 'Laat leeg voor automatische vulling. Of kies zelf welke pagina’s als kaart verschijnen (afbeelding = hoofdafbeelding van die pagina, tekstje = de badge).' },
    },

    // CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in een Palazzo veranda?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
