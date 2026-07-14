import type { GlobalConfig } from 'payload'

// "Veranda's" overview page. Text = editable fields with the design copy as
// defaultValue; product cards = an array. Read in
// src/app/(frontend)/veranda-s/page.tsx. Card images use an upload field with a
// static fallback path (public/uploads/...).
export const verandaS: GlobalConfig = {
  slug: 'veranda-s',
  label: "Veranda's (overzicht)",
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Onze specialiteit' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Uw veranda, op maat gemaakt' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        "Een veranda van Veranda Zeeland is een investering in comfort en woonplezier. Wij leveren de hoogwaardige aluminium veranda's van Verasol, in Duitsland geproduceerd en volledig op maat. Vijf productlijnen, van betaalbaar tot exclusief design, inclusief inmeten en montage door ons eigen team.",
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },

    { name: 'linesHeading', type: 'text', defaultValue: 'De vijf productlijnen van Verasol' },
    {
      name: 'linesIntro',
      type: 'textarea',
      defaultValue:
        'Van de voordelige Greenline tot de exclusieve Cube. Elke lijn heeft een eigen pagina met alle details, kenmerken en mogelijkheden.',
    },
    {
      name: 'lines',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'price', type: 'text' },
        { name: 'tag', type: 'text' },
        { name: 'desc', type: 'textarea' },
        { name: 'badge', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        {
          name: 'Greenline',
          price: 'vanaf € 1.259',
          tag: 'Voordelig & strak',
          desc: 'De meest voordelige lijn: sterk, stijlvol en aantrekkelijk geprijsd. Ook als bouwpakket.',
          href: '/veranda-greenline',
          fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg',
        },
        {
          name: 'Profiline',
          price: 'vanaf € 2.059',
          tag: 'Veelzijdig maatwerk',
          desc: 'Overspanningen tot 7 meter op twee staanders. Uit te bouwen tot een complete tuinkamer.',
          badge: 'Populair',
          href: '/veranda-profiline',
          fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg',
        },
        {
          name: 'Linea',
          price: 'vanaf € 5.469',
          tag: 'Modern vlak dak',
          desc: 'Strak en modern met een optisch vlak dak, ranker en toegankelijker dan de Cube.',
          href: '/veranda-linea',
          fallback: '/uploads/DJI_20260527082041_0005_D.jpg',
        },
        {
          name: 'Cube',
          price: 'vanaf € 7.149',
          tag: 'Exclusief design',
          desc: 'Het designtopmodel: volledig vlak dak, kubistisch profiel en verborgen afwatering.',
          href: '/veranda-cube',
          fallback: '/uploads/Lamellen_Verasol_tegels02.jpg',
        },
        {
          name: 'Pergola-overkapping',
          price: 'vanaf € 5.791',
          tag: 'Vrijstaand',
          desc: 'Zonwering op een vrijstaande constructie. Ideaal voor grote terrassen zonder gevelmontage.',
          href: '/veranda-pergola',
          fallback: '/uploads/foto-water-suppen.jpg',
        },
      ],
    },

    { name: 'ombouwLabel', type: 'text', defaultValue: 'Meer woonplezier' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Bouw uw veranda om tot tuinkamer' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Met glazen schuifwanden of vaste voor- en zijwanden maakt u van elke Verasol-veranda een volwaardige tuinkamer, het hele jaar te gebruiken.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Ontdek tuinkamers →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },

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
