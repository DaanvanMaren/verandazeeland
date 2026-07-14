import type { GlobalConfig } from 'payload'

// "Zakelijk › Horeca & Leisure" page. Text = editable fields with the design
// copy as defaultValue; benefit cards = an array. Read in
// src/app/(frontend)/zakelijk-horeca/page.tsx. The hero image uses an upload
// field with a static fallback path (public/uploads/...).
export const zakelijkHoreca: GlobalConfig = {
  slug: 'zakelijk-horeca',
  label: 'Zakelijk — Horeca & Leisure',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Horeca & Leisure' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Meer terras, langer seizoen' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Vergroot de bedrijfsruimte van je horecazaak het hele jaar door en behoud het buitengevoel. Een glazen overkapping beschermt tegen kou en regen, terwijl gasten heerlijk buiten blijven zitten vanaf de eerste zonnestralen.',
    },
    { name: 'heroButton1', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroButton2', type: 'text', defaultValue: 'Plan een adviesgesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/foto-horeca.jpg' },

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
          title: 'Meer omzetcapaciteit',
          text: 'Een overdekt terras is langer bruikbaar, van vroeg in het voorjaar tot laat in de herfst.',
        },
        {
          title: 'Buitengevoel behouden',
          text: 'Een glazen overkapping biedt bescherming zonder het openluchtgevoel te verliezen.',
        },
        {
          title: 'Compleet af te werken',
          text: 'Met glazen wanden, zonwering, verlichting en verwarming maak je er een echte buitenkamer van.',
        },
        {
          title: 'Uitstraling',
          text: 'Strak aluminium in de kleur van je zaak versterkt de eerste indruk.',
        },
      ],
    },

    {
      name: 'quote',
      type: 'textarea',
      defaultValue:
        '"Met de juiste overkapping wordt je terras een plek waar gasten graag langer blijven zitten, ongeacht het weer."',
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
