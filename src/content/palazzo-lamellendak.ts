import type { GlobalConfig } from 'payload'

// Palazzo "Lamellendak" model (roterend lamellendak). Same field shape as
// veranda-cube → rendered by the shared ProductPage.
export const palazzoLamellendak: GlobalConfig = {
  slug: 'palazzo-lamellendak',
  label: 'Palazzo · Lamellendak',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Lamellendak' },
    { name: 'heroPrice', type: 'text', defaultValue: 'Prijs op aanvraag' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Palazzo Lamellendak' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Zelf bepalen hoeveel zon of schaduw u onder uw overkapping wilt? Met het lamellendak van Palazzo draait u de lamellen simpelweg open of dicht. Strak, kubistisch design en het hele jaar door een aangenaam terras.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte lamellendak →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg' },

    {
      name: 'specs',
      type: 'array',
      fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }],
      defaultValue: [
        { value: 'tot 7 m', label: 'Vrije overspanning' },
        { value: 'Roterend', label: 'Lamellendak' },
        { value: 'Waterdicht', label: 'Bij regen' },
        { value: 'Made in Germany', label: 'Kwaliteit' },
      ],
    },

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

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'title', type: 'text' }, { name: 'desc', type: 'textarea' }],
      defaultValue: [
        { title: 'Roterende lamellen', desc: 'Draai open voor licht, dicht voor schaduw, precies naar wens.' },
        { title: 'Waterdicht', desc: 'Gesloten lamellen voeren regen af naar de goten.' },
        { title: 'Natuurlijke ventilatie', desc: 'Warme lucht ontsnapt tussen de lamellen door.' },
        { title: 'Vakmontage', desc: 'Inclusief sterkteberekening en montage door onze vaklieden.' },
      ],
    },

    { name: 'ombouwLabel', type: 'text', defaultValue: 'Ander daktype' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Liever een glasdak?' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Wilt u juist zo veel mogelijk daglicht? Bekijk dan de Palazzo Sqope: een kubistische overkapping met een strak glasdak en grote glasoppervlakken, in open én gesloten varianten.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk de Sqope →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/pallazo-sqope-zij-veranda-zeeland.jpg' },

    { name: 'galleryTitle', type: 'text', defaultValue: 'Lamellendak in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }, { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } }, { name: 'alt', type: 'text' }],
      defaultValue: [
        { fallback: '/uploads/pallazzo-lamellendak-oirschot-veranda-zeeland.jpg', alt: 'Palazzo lamellendak Oirschot' },
        { fallback: '/uploads/pallazzo-lamellendak-front-veranda-zeeland.jpg', alt: 'Palazzo lamellendak vooraanzicht' },
      ],
    },

    { name: 'othersTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'others',
      type: 'array',
      fields: [{ name: 'name', type: 'text' }, { name: 'tag', type: 'text' }, { name: 'href', type: 'text' }, { name: 'image', type: 'upload', relationTo: 'media' }, { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } }],
      defaultValue: [
        { name: 'Palazzo Sqope', tag: 'Strak glasdak', href: '/palazzo-sqope', fallback: '/uploads/pallazo-sqope-slide-veranda-zeeland.jpg' },
        { name: 'Profiline', tag: 'Veelzijdig maatwerk', href: '/veranda-profiline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { name: 'Linea', tag: 'Modern vlak dak', href: '/veranda-linea', fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
        { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/cube-kerk.jpg' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in een Palazzo lamellendak?' },
    { name: 'ctaText', type: 'textarea', defaultValue: 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.' },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
