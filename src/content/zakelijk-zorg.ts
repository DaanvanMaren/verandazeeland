import type { GlobalConfig } from 'payload'

// "Zakelijk › Zorg" page. Text = editable fields with the design copy as
// defaultValue; the toepassingen/voordelen cards = an array. Read in
// src/app/(frontend)/zakelijk-zorg/page.tsx. The hero image uses an upload
// field with a static fallback path (public/uploads/...).
export const zakelijkZorg: GlobalConfig = {
  slug: 'zakelijk-zorg',
  label: 'Zakelijk · Zorg',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zorginstellingen' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Rust, comfort en veiligheid voorop' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'In de zorg draait alles om welzijn. Met slimme oplossingen zoals overkappingen, glaswanden en zonwering realiseer je comfortabele, toegankelijke en beschutte binnen- en buitenruimtes voor bewoners, cliënten en medewerkers.',
    },
    { name: 'heroButton1', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroButton2', type: 'text', defaultValue: 'Plan een adviesgesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'heroImageFallback',
      type: 'text',
      defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg',
      admin: { description: 'Standaard-afbeelding (pad in /uploads)' },
    },

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
          title: 'Welzijn en klimaat in balans',
          desc: 'Effectieve zonwering dempt fel licht en voorkomt oververhitting, terwijl daglicht behouden blijft.',
        },
        {
          title: 'Altijd naar buiten',
          desc: 'Overkappingen en afsluitbare glaswanden maken het mogelijk om ook bij minder weer veilig naar buiten te gaan.',
        },
        {
          title: 'Toegankelijk',
          desc: 'Dankzij de extreem lage rail ook prima geschikt voor rolstoel of rollator.',
        },
        {
          title: 'Duurzaam gebruik',
          desc: 'Systemen die geschikt zijn voor intensief gebruik en bijdragen aan een prettige leefomgeving.',
        },
      ],
    },

    {
      name: 'quote',
      type: 'textarea',
      defaultValue:
        '"Zo ontstaat extra leefruimte die het hele jaar door gebruikt kan worden, veilig en comfortabel."',
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
