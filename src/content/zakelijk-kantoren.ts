import type { GlobalConfig } from 'payload'

// Zakelijk › Kantoren & Commercieel Vastgoed. Text = editable fields with the
// design copy as defaultValue; the benefit cards = an array. Read in
// src/app/(frontend)/zakelijk-kantoren/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const zakelijkKantoren: GlobalConfig = {
  slug: 'zakelijk-kantoren',
  label: 'Zakelijk — Kantoren & Commercieel Vastgoed',
  access: { read: () => true },
  admin: { group: 'Zakelijk' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Kantoren & Commercieel Vastgoed' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Haal meer uit je bedrijfspand' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en functionaliteit van je pand. Van representatieve entrees tot beschutte buitenruimtes voor personeel.',
    },
    { name: 'heroButtonPrimary', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroButtonSecondary', type: 'text', defaultValue: 'Plan een adviesgesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', defaultValue: '/uploads/DJI_20260527082041_0005_D.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

    { name: 'benefitsHeading', type: 'text', defaultValue: 'Toepassingen & voordelen' },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        {
          title: 'Upgrade je buitenterrein',
          desc: 'Hoogwaardige overkappingen die zorgen voor extra facilitaire mogelijkheden rondom het pand.',
        },
        {
          title: 'Veilig parkeren',
          desc: 'Bescherm je wagenpark en bedrijfsmiddelen tegen weersinvloeden met onze duurzame carports.',
        },
        {
          title: 'Representatieve uitstraling',
          desc: 'Strakke aluminium systemen die passen bij de architectuur van uw pand.',
        },
        {
          title: 'Comfort voor personeel',
          desc: 'Beschutte buitenruimtes voor pauzes, overleg of ontvangst.',
        },
      ],
    },

    {
      name: 'quote',
      type: 'textarea',
      defaultValue: '"Robuuste aluminium systemen, volledig op maat gemaakt in onze eigen fabriek."',
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
