import type { GlobalConfig } from 'payload'

// "Zakelijk › Onderwijs & Scholen" page. Text = editable fields with the design
// copy as defaultValue; the benefit cards = an array. Read in
// src/app/(frontend)/zakelijk-onderwijs/page.tsx. The hero image uses an upload
// field with a static fallback path (public/uploads/...).
export const zakelijkOnderwijs: GlobalConfig = {
  slug: 'zakelijk-onderwijs',
  label: 'Zakelijk — Onderwijs & Scholen',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Onderwijs & Scholen' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Veilig, comfortabel en inspirerend' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Op een school moet de omgeving veilig, inspirerend en comfortabel zijn. Wij leveren robuuste systemen die ervoor zorgen dat leerlingen zich optimaal kunnen concentreren en dat het buitenterrein functioneler wordt ingezet.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een adviesgesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC_7667-HDR.jpg' },

    { name: 'benefitsHeading', type: 'text', defaultValue: 'Toepassingen & voordelen' },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
      defaultValue: [
        {
          title: 'Gezond binnenklimaat',
          text: 'Effectieve warmtewering voor klaslokalen en entrees, zonder verlies van daglicht.',
        },
        {
          title: 'Geen verblinding',
          text: 'Onze zonwering voorkomt oververhitting en verblinding op digitale schermen.',
        },
        {
          title: 'Meer buitenruimte',
          text: 'Op het schoolplein bieden overkappingen beschutting tegen regen en felle zon, voor beweging en buitenlessen.',
        },
        {
          title: 'Ontzorging',
          text: 'Van inmeten tot montage regelen wij het, zodat jij je kunt focussen op het onderwijs.',
        },
      ],
    },

    {
      name: 'quote',
      type: 'textarea',
      defaultValue:
        '"Veilige en duurzame constructies die voldoen aan alle normen en bestand zijn tegen intensief gebruik door leerlingen."',
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Benieuwd naar de mogelijkheden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw locatie.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Neem contact op →' },
  ],
}
