import type { GlobalConfig } from 'payload'

// "Zakelijk › Projectbouw" page. Text = editable fields with the design copy as
// defaultValue; the four benefit cards = an array. Read in
// src/app/(frontend)/zakelijk-projectbouw/page.tsx. The hero image uses an
// upload field with a static fallback path (public/uploads/...).
export const zakelijkProjectbouw: GlobalConfig = {
  slug: 'zakelijk-projectbouw',
  label: 'Zakelijk — Projectbouw',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Projectbouw & Ontwikkeling' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Series op maat voor uw project' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        "Voor woningbouw- en nieuwbouwprojecten leveren we series veranda's en overkappingen als één doordacht systeem. Robuuste aluminium constructies, volledig op maat gemaakt in onze eigen fabriek en vakkundig gemonteerd.",
    },
    { name: 'heroButtonPrimary', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroButtonSecondary', type: 'text', defaultValue: 'Plan een adviesgesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', defaultValue: '/uploads/DJI_20260527082035_0002_D.jpg', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },

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
          title: 'Eén doordacht systeem',
          desc: "Veranda's, tuinkamers, carports en zonwering die naadloos op elkaar aansluiten.",
        },
        {
          title: 'Eigen fabriek',
          desc: 'Volledig op maat gemaakt in Duitsland, met grip op kwaliteit en levertijd.',
        },
        {
          title: 'Planmatig',
          desc: 'Series in strakke planning, afgestemd op de fasering van uw project.',
        },
        {
          title: 'Eén aanspreekpunt',
          desc: 'Vaste contactpersonen die het project van ontwerp tot oplevering begeleiden.',
        },
      ],
    },

    {
      name: 'quote',
      type: 'textarea',
      defaultValue:
        '"Van technisch advies en nauwkeurige inmeetservice tot vakkundige montage door onze eigen professionals."',
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
