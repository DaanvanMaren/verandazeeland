import type { GlobalConfig } from 'payload'

// "Knikarmschermen" zonwering detail page. Same field shape as zonwering-screens
// so it reuses that route layout. Copy rewritten in the site's conversational
// "u"-tone from verasol.nl/zonwering/knikarmschermen. Read in
// src/app/(frontend)/zonwering-knikarmschermen/page.tsx.
export const zonweringKnikarmschermen: GlobalConfig = {
  slug: 'zonwering-knikarmschermen',
  label: 'Zonwering — Knikarmschermen',
  access: { read: () => true },
  admin: { group: 'Zonwering' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zonwering' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Knikarmschermen' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Geen last van felle zon of een onverwachte zomerbui, en toch genieten van lange, lichte avonden op het terras. Een knikarmscherm rolt schaduw uit precies waar u het wilt: boven het terras, voor het raam of bij de eettafel. Zonder storende steunpalen, dus u houdt vrij zicht en alle ruimte om u heen.',
    },
    { name: 'heroPrimaryCta', type: 'text', defaultValue: 'Offerte aanvragen →' },
    { name: 'heroSecondaryCta', type: 'text', defaultValue: 'Terug naar Zonwering' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

    { name: 'introTitle', type: 'text', defaultValue: 'Schaduw precies waar u het wilt' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Het doek spant strak tussen twee uitklapbare knikarmen, zodat u zonder palen tot wel 7,5 meter breed en 3,5 meter diep in de schaduw zit. Grotere terrassen dekt u af door meerdere schermen te koppelen. Kiezen doet u uit talloze doekdessins en kleuren, en dankzij de windsensor rolt het scherm bij een stevige wind vanzelf weer in. Smart Home Ready, dus u bedient het met een druk op de knop of gewoon via een app.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Vrij zicht: geen steunpalen nodig' },
        { text: 'Tot 7,5 meter breed en 3,5 meter diep' },
        { text: 'Keuze uit vele doekdessins en kleuren' },
        { text: 'Windsensor rolt bij harde wind automatisch in' },
        { text: 'Smart Home Ready, te koppelen met LED-verlichting' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DSC_8609.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Vrij terras', desc: 'Het doek spant tussen de knikarmen, geheel zonder palen.' },
        { title: 'Tot 7,5 m breed', desc: 'Grotere terrassen dekt u af met gekoppelde schermen.' },
        { title: 'Slim bedienbaar', desc: 'Draaiknop, afstandsbediening of app, met windsensor.' },
        { title: 'Sfeer & keuze', desc: 'Optionele LED-verlichting en vele doekkleuren.' },
      ],
    },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Meer weten over knikarmschermen?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
