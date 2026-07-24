import type { CollectionConfig } from 'payload'

// Uitgevoerde projecten (referenties). One document = one project, with its own
// detail page at /projecten/<slug>. Unlike the content globals, projects are a
// growing list of entities, so they live in a collection the client fills in the
// admin. Images are uploaded in the admin (multi-select on `images`) — they live
// in the S3 bucket, NOT the repo, exactly as requested.
export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Project', plural: 'Projecten' },
  access: { read: () => true },
  admin: {
    group: 'Projecten',
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'productLine', 'published'],
  },
  fields: [
    { name: 'title', type: 'text', required: true, admin: { description: 'Naam van het project, bv. "Profiline veranda Kamperland".' } },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'URL-deel: /projecten/<slug>. Kleine letters, koppeltekens.' },
    },
    { name: 'location', type: 'text', admin: { description: 'Plaats, bv. "Kamperland".' } },
    {
      name: 'productLine',
      type: 'select',
      options: ['Greenline', 'Profiline', 'Linea', 'Cube', 'Pergola'],
      admin: { description: 'Productlijn van de veranda.' },
    },
    { name: 'year', type: 'text', admin: { description: 'Jaar van oplevering (optioneel).' } },
    {
      name: 'intro',
      type: 'textarea',
      localized: true,
      admin: { description: 'Korte omschrijving bovenaan de detailpagina (1–2 zinnen).' },
    },
    {
      name: 'body',
      type: 'richText',
      localized: true,
      admin: { description: 'Uitgebreide tekst over het project (koppen, alinea’s, opsommingen).' },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Uitgelichte foto op de overzichtspagina. Leeg = eerste foto uit de galerij.' },
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      admin: { description: 'Alle foto’s van dit project. Sleep meerdere bestanden tegelijk om ze samen te uploaden.' },
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Uit = verborgen op de website.', position: 'sidebar' },
    },
  ],
}
