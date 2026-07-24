import type { GlobalConfig } from 'payload'


// Pext lichtstraat (3 uitvoeringen: lessenaardak, zadeldak, daklicht). Same field
// shape as veranda-cube → rendered by the shared ProductPage; the three types
// are the `features` cards. Daklicht has no photo yet → left empty (client vult).
export const pextLichtstraat: GlobalConfig = {
  slug: 'pext-lichtstraat',
  label: 'Pext · Lichtstraat',
  access: { read: () => true },
  admin: { group: 'Verandas' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: 'Lichtstraat' },
    { name: 'heroPrice', type: 'text', defaultValue: 'Prijs op aanvraag' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Pext lichtstraat' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Meer daglicht in huis? Een Pext lichtstraat haalt volop natuurlijk licht naar binnen en laat elke ruimte direct groter ogen. Verkrijgbaar in drie uitvoeringen, het lessenaardak, het zadeldak en het daklicht, en zowel geïsoleerd als ongeïsoleerd.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte lichtstraat →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg' },

    {
      name: 'specs',
      type: 'array',
      fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }],
      defaultValue: [
        { value: '3 uitvoeringen', label: 'Lessenaar · zadel · daklicht' },
        { value: '10°', label: 'Dakhelling' },
        { value: 'Geïsoleerd of niet', label: 'Uitvoering' },
        { value: 'HR++ glas', label: 'Optie' },
      ],
    },

    { name: 'introTitle', type: 'text', defaultValue: 'Waarom een lichtstraat?' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'Een lichtstraat brengt volop daglicht op plekken waar dat anders lastig is. Uw kamer oogt meteen ruimer en lichter, en het geeft uw woning bovendien extra waarde. Kies een geïsoleerde uitvoering met grenenhout en HR++ glas voor woonruimtes, of een ongeïsoleerde met enkellaags veiligheidsglas voor een overkapping of buitenverblijf.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Veel natuurlijk licht in uw woning' },
        { text: 'Uw woning oogt direct ruimer' },
        { text: 'Meerwaarde voor uw woning' },
        { text: 'Geïsoleerd (grenen + HR++) of ongeïsoleerd' },
        { text: 'Dakhelling van 10 graden' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/lichtstraat-zadeldak-schuin-pext-veranda-zeeland.jpg' },

    { name: 'featuresTitle', type: 'text', defaultValue: 'De drie uitvoeringen' },
    {
      name: 'features',
      type: 'array',
      fields: [{ name: 'title', type: 'text' }, { name: 'desc', type: 'textarea' }],
      defaultValue: [
        { title: 'Lessenaardak', desc: 'Eén schuin dakvlak van 10°, met minimaal twee glaspanelen. Geschikt voor woning én overkapping.' },
        { title: 'Zadeldak', desc: 'Twee schuine zijden van elk 10°, altijd met een even aantal glaspanelen.' },
        { title: 'Daklicht', desc: 'Compacte variant met één glaspaneel op 10°. Ideaal waar u gericht licht wilt toevoegen.' },
      ],
    },

    { name: 'ombouwLabel', type: 'text', defaultValue: 'De basis' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Combineer met een Pext veranda' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Een lichtstraat komt het best tot zijn recht op een Pext houten veranda, maar u plaatst hem net zo goed los op uw bestaande woning of aanbouw.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk de Pext veranda →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/veranda-hout-pext-veranda-zeeland.jpg' },

    { name: 'galleryTitle', type: 'text', defaultValue: 'Lichtstraat in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }, { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } }, { name: 'alt', type: 'text' }],
      defaultValue: [
        { fallback: '/uploads/lichtstraat-lessenaar-pext-overkapping-zeeland.jpg', alt: 'Pext lichtstraat lessenaardak' },
        { fallback: '/uploads/lichtstraat-zadeldak-schuin-pext-veranda-zeeland.jpg', alt: 'Pext lichtstraat zadeldak' },
      ],
    },

    { name: 'showOtherModels', type: 'checkbox', defaultValue: true, label: 'Toon "Andere modellen"-blok', admin: { description: 'Toont automatisch de andere modellen uit dezelfde lijn (foto, titel en tag komen van die pagina).' } },

    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in een Pext lichtstraat?' },
    { name: 'ctaText', type: 'textarea', defaultValue: 'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.' },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
