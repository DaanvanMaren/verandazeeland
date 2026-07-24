import type { GlobalConfig } from 'payload'

// "Rolluiken" zonwering detail page. Same field shape as zonwering-screens so it
// reuses that route layout. Copy rewritten in the site's conversational "u"-tone
// from verasol.nl/zonwering/rolluiken. Read in
// src/app/(frontend)/zonwering-rolluiken/page.tsx.
export const zonweringRolluiken: GlobalConfig = {
  slug: 'zonwering-rolluiken',
  label: 'Zonwering — Rolluiken',
  access: { read: () => true },
  admin: { group: 'Zonwering' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zonwering' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Rolluiken' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Soms wilt u zich even terugtrekken. Geen licht, geen lawaai, geen inkijk, gewoon rust. Met een rolluik heeft u dat helemaal zelf in de hand: over het licht, de temperatuur, uw privacy én uw veiligheid. In de zomer houdt het de warmte buiten, in de winter blijft het binnen langer behaaglijk.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Zonwering' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082035_0002_D.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Comfort, rust en veiligheid' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Een rolluik isoleert in de winter, koelt in de zomer en werkt inbraakwerend, zodat u het hele jaar door prettig en veilig woont. Leverbaar tot wel 4 meter breed, in vele RAL-kleuren en structuurlakken, en met een ronde, vierkante of afgeschuinde kast, ook in een extra kleine uitvoering. Bedienen doet u handmatig, elektrisch, op zonne-energie of gewoon via uw smartphone.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Isolerend in de winter, verkoelend in de zomer' },
        { text: 'Inbraakwerend voor extra veiligheid' },
        { text: 'Tot 4 meter breed, vele kleuren en kastvormen' },
        { text: 'Smart Home & Solar Ready' },
        { text: 'Op maat gemaakt, Nederlands fabricaat' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Isolerend', desc: 'Houdt de warmte binnen in de winter, buiten in de zomer.' },
        { title: 'Veilig', desc: 'Inbraakwerend, voor een gerust gevoel.' },
        { title: 'Rust & privacy', desc: 'Geen licht, geen lawaai, geen inkijk.' },
        { title: 'Slim bedienbaar', desc: 'Handmatig, elektrisch, op solar of via de app.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over rolluiken?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
