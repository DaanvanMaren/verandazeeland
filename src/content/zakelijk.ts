import type { GlobalConfig } from 'payload'

// "Zakelijk" (business & projects) page. Text = editable fields with the design
// copy as defaultValue; sector cards + workflow steps = arrays. Read in
// src/app/(frontend)/zakelijk/page.tsx. Images use an upload field with a static
// fallback path (public/uploads/...).
export const zakelijk: GlobalConfig = {
  slug: 'zakelijk',
  label: 'Zakelijk',
  access: { read: () => true },
  admin: { group: 'Zakelijk' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Zakelijk & projecten' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Overkappingen voor uw onderneming' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'We combineren Duitse degelijkheid met een persoonlijke aanpak, zodat je zorgeloos kunt investeren in de uitstraling en de functionaliteit van je pand. Onze veranda\'s, tuinkamers, carports en zonwering zijn ontwikkeld als één doordacht systeem, volledig op maat gemaakt in onze eigen fabriek.',
    },
    { name: 'heroButton1', type: 'text', defaultValue: 'Neem contact op →' },
    { name: 'heroButton2', type: 'text', defaultValue: 'Plan een gesprek' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082041_0005_D.jpg' },

    { name: 'sectorsHeading', type: 'text', defaultValue: 'Haal meer uit je locatie' },
    {
      name: 'sectorsIntro',
      type: 'textarea',
      defaultValue:
        'Bij Veranda Zeeland geloven we niet in standaardoplossingen. Voor elke branche een passend systeem.',
    },
    {
      name: 'sectors',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
        { name: 'href', type: 'text' },
        { name: 'anchor', type: 'text', admin: { description: 'HTML id (voor #anker-links)' } },
      ],
      defaultValue: [
        {
          title: 'Horeca & Leisure',
          desc: 'Vergroot de bedrijfsruimte van je horecazaak het hele jaar door en behoud het buitengevoel. Met glazen wanden, zonwering, verlichting en verwarming tover je een overkapping om tot een buitenkamer die het hele jaar ruimte toevoegt aan je zaak.',
          href: '/zakelijk-horeca',
          anchor: 'horeca',
        },
        {
          title: 'Kantoren & Commercieel Vastgoed',
          desc: 'Upgrade je buitenterrein met hoogwaardige overkappingen die zorgen voor extra facilitaire mogelijkheden rondom het pand. Bescherm bovendien je wagenpark en bedrijfsmiddelen tegen weersinvloeden met onze duurzame carports.',
          href: '/zakelijk-kantoren',
          anchor: 'kantoren',
        },
        {
          title: 'Onderwijs & Scholen',
          desc: 'Onze zonwering voorkomt oververhitting en verblinding op digitale schermen. Op het schoolplein bieden onze overkappingen beschutting tegen regen en felle zon, waardoor er meer ruimte ontstaat voor beweging en buitenlessen.',
          href: '/zakelijk-onderwijs',
          anchor: 'onderwijs',
        },
        {
          title: 'Vakantieparken & Recreatie',
          desc: 'Bied gasten het hele seizoen een beschutte buitenruimte. Onze robuuste, onderhoudsarme systemen zijn bestand tegen intensief gebruik en geven accommodaties een verzorgde, uitnodigende uitstraling.',
          href: '/zakelijk-vakantieparken',
          anchor: 'vakantieparken',
        },
        {
          title: 'Zorginstellingen',
          desc: 'In de zorg draait alles om welzijn. Met effectieve zonwering wordt fel licht gedempt en oververhitting voorkomen, terwijl daglicht behouden blijft. Overkappingen en afsluitbare glaswanden maken het mogelijk om ook bij minder weer veilig en comfortabel naar buiten te gaan.',
          href: '/zakelijk-zorg',
          anchor: 'zorg',
        },
        {
          title: 'Projectbouw & Ontwikkeling',
          desc: 'Voor woningbouw- en nieuwbouwprojecten leveren we series veranda\'s en overkappingen als één doordacht systeem. Robuuste aluminium constructies, volledig op maat gemaakt in onze eigen fabriek en vakkundig gemonteerd.',
          href: '/zakelijk-projectbouw',
          anchor: 'projectbouw',
        },
      ],
    },

    { name: 'stepsHeading', type: 'text', defaultValue: 'Onze werkwijze' },
    {
      name: 'steps',
      type: 'array',
      fields: [
        { name: 'number', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { number: '01', title: 'Advies', desc: 'Kennismaking en inventarisatie van uw wensen en locatie.' },
        { number: '02', title: 'Ontwerp', desc: 'Maatwerkontwerp met sterkteberekening en offerte.' },
        { number: '03', title: 'Productie', desc: 'Duitse kwaliteitsproductie, op maat voor uw project.' },
        { number: '04', title: 'Montage', desc: 'Vakkundige plaatsing door onze eigen monteurs.' },
      ],
    },

    { name: 'bandLabel', type: 'text', defaultValue: 'Uw partner in Zeeland' },
    { name: 'bandTitle', type: 'text', defaultValue: 'Eén aanspreekpunt, van begin tot eind' },
    {
      name: 'bandText',
      type: 'textarea',
      defaultValue:
        'U werkt met vaste contactpersonen die uw project van advies tot oplevering begeleiden. Betrouwbaar, planmatig en met oog voor kwaliteit.',
    },
    { name: 'bandCta', type: 'text', defaultValue: 'Vraag een projectgesprek aan →' },
    { name: 'bandImage', type: 'upload', relationTo: 'media' },
    { name: 'bandImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Een zakelijk project bespreken?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw onderneming.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Neem contact op →' },
  ],
}
