import type { GlobalConfig } from 'payload'

// Profiline product page. Every visible text/image = editable field with the
// design copy as defaultValue; repeating items (stats, checklist, features,
// other models) = arrays. Read in
// src/app/(frontend)/veranda-profiline/page.tsx. Images use an upload field
// with a static fallback path (public/uploads/...).
export const verandaProfiline: GlobalConfig = {
  slug: 'veranda-profiline',
  label: 'Profiline (product)',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Populair' },
    { name: 'heroPrice', type: 'text', defaultValue: 'vanaf € 2.059' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Profiline' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Onze meest veelzijdige veranda. Dankzij de extra stevige constructie bouwt u breder, dieper en ruimer — met overspanningen tot 7 meter op slechts twee staanders. Volledig op maat en uit te bouwen tot een complete tuinkamer.',
    },
    { name: 'heroButtonPrimary', type: 'text', defaultValue: 'Offerte Profiline →' },
    { name: 'heroButtonSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

    // stat bar
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: '€ 2.059', label: 'Vanaf prijs' },
        { value: 'tot 7 m', label: 'Overspanning' },
        { value: '20+', label: 'Standaardmaten' },
        { value: '5–10 jaar', label: 'Garantie' },
      ],
    },

    // "meer ruimte" split section
    { name: 'ruimteTitle', type: 'text', defaultValue: 'Meer ruimte, meer vrijheid' },
    {
      name: 'ruimteText',
      type: 'textarea',
      defaultValue:
        'De Profiline heeft een schuin dak dat zorgt voor een ruimtelijk gevoel, prettige lichtinval en natuurlijke waterafvoer. Met de speciale XS-profielen en een verstevigde goot overspant u tot 7 meter op slechts twee staanders, voor een volledig vrij uitzicht zonder paal in het midden. Muurbevestigd, vrijstaand of om een hoek, en met een glasdak tot 4 meter diep.',
    },
    {
      name: 'ruimtePoints',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Overspanningen tot 7 meter op twee staanders' },
        { text: 'Schuin dak: ruimtelijk, veel licht, natuurlijke waterafvoer' },
        { text: 'Meerdere standaardkleuren plus Verasol special-kleuren' },
        { text: '20+ standaardafmetingen, daarnaast volledig maatwerk' },
        { text: 'Uit te bouwen tot tuinkamer met glazen schuifwanden of kozijnen' },
      ],
    },
    { name: 'ruimteImage', type: 'upload', relationTo: 'media' },
    { name: 'ruimteImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg' },

    // features
    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Grote overspanning', text: 'Tot 7 meter breed op slechts twee staanders, vrij uitzicht.' },
        { title: 'Robuust', text: 'Extra stevige constructie, geschikt voor intensief gebruik.' },
        { title: 'Uitbreidbaar', text: 'Nu of later eenvoudig om te bouwen tot tuinkamer.' },
        { title: 'Vakmontage', text: 'Geplaatst door ons gecertificeerde montageteam.' },
      ],
    },

    // "op maat" navy band
    { name: 'maatLabel', type: 'text', defaultValue: 'Volledig op maat' },
    { name: 'maatTitle', type: 'text', defaultValue: 'Stel uw Profiline samen' },
    {
      name: 'maatText',
      type: 'textarea',
      defaultValue:
        'Van afmeting, kleur en gootsierlijst tot geïntegreerde verlichting, verwarming, zonwering en glazen schuifwanden — de Profiline groeit mee met uw wensen.',
    },
    { name: 'maatCta', type: 'text', defaultValue: 'Bekijk alle opties →' },
    { name: 'maatImage', type: 'upload', relationTo: 'media' },
    { name: 'maatImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_434_LR.jpg' },

    // other models
    { name: 'modelsTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'models',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'tag', type: 'text' },
        { name: 'href', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
      ],
      defaultValue: [
        { name: 'Greenline', tag: 'Voordelig & strak', href: '/veranda-greenline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
        { name: 'Linea', tag: 'Modern vlak dak', href: '/veranda-linea', fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
        { name: 'Cube', tag: 'Exclusief design', href: '/veranda-cube', fallback: '/uploads/Lamellen_Verasol_tegels02.jpg' },
        { name: 'Pergola', tag: 'Vrijstaand', href: '/veranda-pergola', fallback: '/uploads/foto-water-suppen.jpg' },
      ],
    },

    // CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in de Profiline?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
