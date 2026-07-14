import type { GlobalConfig } from 'payload'

// Home page content — every text is an editable field with the design copy as
// defaultValue (ships in code, renders immediately, editable in /admin).
// Read in src/app/(frontend)/page.tsx. Images: upload fields with a static
// fallback in the route (public/uploads/...).
export const home: GlobalConfig = {
  slug: 'home',
  label: 'Home page',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Buitenleven aan de Zeeuwse kust' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Geniet élk seizoen buiten.' },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      defaultValue:
        "Veranda's, tuinkamers en glasschuifwanden van Duitse topkwaliteit, op maat gemaakt en gemonteerd door Veranda Zeeland in Serooskerke.",
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: "Bekijk de veranda's →" },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Bezoek de showroom' },

    {
      name: 'usps',
      type: 'array',
      defaultValue: [
        { text: 'Made in Germany' },
        { text: 'Incl. sterkteberekening' },
        { text: 'Montage door eigen vaklieden' },
        { text: 'Showroom van 800 m²' },
      ],
      fields: [{ name: 'text', type: 'text' }],
    },

    { name: 'categoriesHeading', type: 'text', defaultValue: 'Ontdek wat er buiten mogelijk is' },

    { name: 'welcomeLabel', type: 'text', defaultValue: 'Welkom bij Veranda Zeeland' },
    { name: 'welcomeTitle', type: 'text', defaultValue: 'Uw complete leverancier in Serooskerke' },
    {
      name: 'welcomeText1',
      type: 'textarea',
      defaultValue:
        "Als officieel Verasol-dealer leveren wij de complete lijn hoogwaardige aluminium veranda's: van de voordelige Greenline tot de exclusieve Cube. In Duitsland geproduceerd, betaalbaar en van perfecte kwaliteit. Een veranda kan zelfs worden omgebouwd naar een volwaardige tuinkamer voor nog meer woonplezier.",
    },
    {
      name: 'welcomeText2',
      type: 'textarea',
      defaultValue:
        'Kom langs voor deskundig en vrijblijvend advies aan De Stekelweie 2 te Serooskerke.',
    },
    { name: 'welcomeCta', type: 'text', defaultValue: 'Plan uw bezoek →' },
    { name: 'welcomeImage', type: 'upload', relationTo: 'media' },

    { name: 'modelsHeading', type: 'text', defaultValue: 'Ieder thuis verdient een echte Verasol®' },
    {
      name: 'modelsSub',
      type: 'text',
      defaultValue: 'Vijf productlijnen. Eén perfecte match voor uw woning.',
    },

    {
      name: 'reviews',
      type: 'array',
      defaultValue: [
        {
          quote:
            'Van advies tot montage vlekkeloos verlopen. De veranda is prachtig en de kwaliteit is top.',
          author: 'Familie de Visser · Middelburg',
        },
        {
          quote:
            'Deskundig advies in de showroom en netjes op tijd geplaatst. Een aanrader in Zeeland.',
          author: 'R. Janse · Goes',
        },
        {
          quote: 'Onze veranda is omgebouwd tot tuinkamer. We genieten er het hele jaar door van.',
          author: 'Familie Kramer · Vlissingen',
        },
      ],
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'author', type: 'text' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Zin in uw eigen buitenkamer?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend uw offerte op maat aan, inclusief sterkteberekening en advies.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
