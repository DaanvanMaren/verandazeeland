import type { GlobalConfig } from 'payload'

// Zakelijk › Vakantieparken & Recreatie page. Text = editable fields with the
// design copy as defaultValue; the "toepassingen & voordelen" cards = an array.
// Read in src/app/(frontend)/zakelijk-vakantieparken/page.tsx. The hero image
// uses an upload field with a static fallback path (public/uploads/...).
export const zakelijkVakantieparken: GlobalConfig = {
  slug: 'zakelijk-vakantieparken',
  label: 'Zakelijk — Vakantieparken',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Vakantieparken & Recreatie' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Comfort dat gasten waarderen' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Bied gasten het hele seizoen een beschutte buitenruimte. Onze robuuste, onderhoudsarme systemen zijn bestand tegen intensief gebruik en geven accommodaties een verzorgde, uitnodigende uitstraling.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Plan een adviesgesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/6623.jpg' },

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
          title: 'Langer verhuurseizoen',
          text: 'Overdekte terrassen maken accommodaties aantrekkelijker, ook buiten de zomer.',
        },
        {
          title: 'Bestand tegen intensief gebruik',
          text: 'Duurzame aluminium constructies die jarenlang meegaan met minimaal onderhoud.',
        },
        {
          title: 'Uniforme uitstraling',
          text: 'Series in dezelfde stijl en kleur voor een verzorgd totaalbeeld op het park.',
        },
        {
          title: 'Beschutting bij elk weer',
          text: 'Glaswanden en zonwering maken de buitenruimte het hele jaar bruikbaar.',
        },
      ],
    },

    {
      name: 'quote',
      type: 'textarea',
      defaultValue:
        '"Extra leefruimte die het hele jaar door gebruikt kan worden, voor een verzorgde en uitnodigende beleving."',
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
