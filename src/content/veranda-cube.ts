import type { GlobalConfig } from 'payload'

// "Cube" product page. Text = editable fields with the design copy as
// defaultValue; repeating things (spec bar, feature cards, gallery, other
// models) = arrays. Read in src/app/(frontend)/veranda-cube/page.tsx. Images
// use an upload field with a static fallback path (public/uploads/...).
export const verandaCube: GlobalConfig = {
  slug: 'veranda-cube',
  label: 'Cube (product)',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Topmodel' },
    { name: 'heroPrice', type: 'text', defaultValue: 'vanaf € 7.149' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Cube' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        'Geen standaard overkapping, maar een statement in uw tuin. Strak, kubistisch en met een volledig vlak dak, extra brede staanders en een krachtig ontwerp. Dé keuze voor moderne architectuur en designliefhebbers.',
    },
    { name: 'heroCtaPrimary', type: 'text', defaultValue: 'Offerte Cube →' },
    { name: 'heroCtaSecondary', type: 'text', defaultValue: 'Bezoek de showroom' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/cube-kerk.jpg' },

    // spec bar
    {
      name: 'specs',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: '€ 7.149', label: 'Vanaf prijs' },
        { value: 'Volledig vlak', label: 'Dak' },
        { value: 'Verborgen', label: 'Afwatering' },
        { value: 'tot 7 m', label: 'Overspanning' },
      ],
    },

    // intro block
    { name: 'introTitle', type: 'text', defaultValue: 'Een blikvanger in uw tuin' },
    {
      name: 'introText',
      type: 'textarea',
      defaultValue:
        'De Cube valt direct op met zijn strakke lijnen, extra brede staanders en volledig vlakke dak met onzichtbare dakhelling. Modern, robuust en tot in de puntjes afgewerkt — en dankzij een verstevigde goot mogelijk tot 7 meter breed op slechts twee palen. Een designstatement dat past bij een eigentijdse tuin, en heerlijk om onder te leven.',
    },
    {
      name: 'introBullets',
      type: 'array',
      fields: [{ name: 'text', type: 'text' }],
      defaultValue: [
        { text: 'Volledig vlak dak met onzichtbare dakhelling' },
        { text: 'Kubistisch profiel met extra brede staanders' },
        { text: 'Verborgen goten en afwatering' },
        { text: 'Overspanningen tot 7 meter op twee palen' },
        { text: 'Perfect te combineren met glazen schuifwanden' },
      ],
    },
    { name: 'introImage', type: 'upload', relationTo: 'media' },
    { name: 'introImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Cube_Zaltbommel_VS_20260511_053_LR.jpg' },

    // features
    { name: 'featuresTitle', type: 'text', defaultValue: 'Kenmerken & voordelen' },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'desc', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Kubistisch design', desc: 'Strak, rechthoekig en minimalistisch afgewerkt.' },
        { title: 'Verborgen afwatering', desc: 'Goten en pijpen volledig weggewerkt.' },
        { title: 'Premium', desc: 'Het exclusieve designtopmodel van Verasol.' },
        { title: 'Vakmontage', desc: 'Geplaatst door ons gecertificeerde montageteam.' },
      ],
    },

    // op maat band
    { name: 'ombouwLabel', type: 'text', defaultValue: 'Volledig op maat' },
    { name: 'ombouwTitle', type: 'text', defaultValue: 'Stel uw Cube samen' },
    {
      name: 'ombouwText',
      type: 'textarea',
      defaultValue:
        'Bepaal afmetingen, kleur en dakbedekking, en voeg premium opties toe zoals sfeerverlichting, verwarming en frameloze glazen schuifwanden.',
    },
    { name: 'ombouwCta', type: 'text', defaultValue: 'Bekijk alle opties →' },
    { name: 'ombouwImage', type: 'upload', relationTo: 'media' },
    { name: 'ombouwImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/cube-rhenen-b.jpg' },

    // gallery
    { name: 'galleryTitle', type: 'text', defaultValue: 'Cube in de praktijk' },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'fallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' } },
        { name: 'alt', type: 'text' },
      ],
      defaultValue: [
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_014_LR.jpg', alt: 'Cube tuinkamer' },
        { fallback: '/uploads/cube-rhenen-a.jpg', alt: 'Cube interieur' },
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_070_LR.jpg', alt: 'Cube lounge' },
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_085_LR.jpg', alt: 'Cube in de tuin' },
        { fallback: '/uploads/Cube_Zaltbommel_VS_20260511_114_LR.jpg', alt: 'Cube overkapping' },
      ],
    },

    // other models
    { name: 'othersTitle', type: 'text', defaultValue: 'Andere modellen' },
    {
      name: 'others',
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
        { name: 'Profiline', tag: 'Veelzijdig maatwerk', href: '/veranda-profiline', fallback: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
        { name: 'Linea', tag: 'Modern vlak dak', href: '/veranda-linea', fallback: '/uploads/DJI_20260527082041_0005_D.jpg' },
        { name: 'Pergola', tag: 'Vrijstaand', href: '/veranda-pergola', fallback: '/uploads/foto-water-suppen.jpg' },
      ],
    },

    // CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Interesse in de Cube?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: 'Offerte aanvragen →' },
  ],
}
