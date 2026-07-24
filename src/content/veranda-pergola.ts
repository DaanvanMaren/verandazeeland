import type { GlobalConfig } from 'payload'

// Pergola-overkapping product page. Text = editable fields with the design copy
// as defaultValue; feature cards, spec stats, USP list and related-model cards =
// arrays. Read in src/app/(frontend)/veranda-pergola/page.tsx. Images use an
// upload field with a static fallback path (public/uploads/...).
export const verandaPergola: GlobalConfig = {
  slug: 'veranda-pergola',
  label: 'Veranda Pergola-overkapping',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Vrijstaand' },
    { name: 'heroPrice', type: 'text', defaultValue: 'vanaf € 5.791' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Pergola-overkapping' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Optimale beschutting met een vrijstaande constructie op staanders. Geschikt voor grotere terrassen of situaties waar gevelmontage niet mogelijk is. De Pergola-overkapping combineert zonwering én overkapping in één.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte Pergola →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20250515150039_0478_D.jpg' },

    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: '€ 5.791', label: 'Vanaf prijs' },
        { value: 'Vrijstaand', label: 'Constructie' },
        { value: 'min. 4', label: 'Staanders' },
        { value: 'Geïntegreerd', label: 'Zonwering' },
      ],
    },

    { name: 'introTitle', type: 'text', defaultValue: 'Beschutting midden in de tuin' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De Pergola-overkapping staat op een eigen constructie met minimaal vier staanders en heeft geen gevel nodig. Daarmee is het dé oplossing voor grote terrassen of tuinen waar bevestiging aan de woning niet kan of niet gewenst is. Zonwering en overkapping werken samen in één systeem, voor schaduw én beschutting waar u maar wilt.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Vrijstaande constructie, geen gevelbevestiging nodig' },
        { text: 'Ideaal voor grote terrassen en losse plekken in de tuin' },
        { text: 'Combineert zonwering en overkapping in één' },
        { text: 'Volledig op maat gemaakt en gemonteerd' },
        { text: 'Aan te vullen met wanden voor extra beschutting' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC_8609.jpg' },

    { name: 'featuresHeading', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Vrijstaand', desc: 'Plaats de overkapping overal in de tuin.' },
        { title: 'Groot formaat', desc: 'Geschikt voor ruime terrassen.' },
        { title: 'Zon & schaduw', desc: 'Geïntegreerde, regelbare zonwering.' },
        { title: 'Op maat', desc: 'Afmetingen en kleur volledig naar wens.' },
      ],
    },

    { name: 'bandLabel', type: 'text', defaultValue: 'Volledig op maat' },
    { name: 'bandTitle', type: 'text', defaultValue: 'Stel uw Pergola samen' },
    {
      name: 'bandText',
      type: 'textarea',
      defaultValue:
        'Kies afmetingen, kleur en type zonwering, en vul aan met screens, verlichting en verwarming voor een volwaardige buitenkamer.',
    },
    { name: 'bandCta', type: 'text', defaultValue: 'Bekijk alle opties →' },
    { name: 'bandImage', type: 'upload', relationTo: 'media' },
    { name: 'bandImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/banner-verasol-pergola-verasol.jpg' },

    { name: 'showOtherModels', type: 'checkbox', defaultValue: true, label: 'Toon "Andere modellen"-blok', admin: { description: 'Toont automatisch de andere modellen uit dezelfde lijn (foto, titel en tag komen van die pagina).' } },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in de Pergola?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
