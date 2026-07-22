import type { GlobalConfig } from 'payload'

// Factory for SEO landing pages (prijzen, vergunning, montage, plaatsnamen).
// All six share the same field shape: hero + tekstsecties + FAQ + CTA. The
// copy comes in as defaults per page; the shared renderer is
// src/app/(frontend)/_components/SeoLanding.tsx.
export type SeoPageDefaults = {
  heroBadge: string
  heroTitle: string
  heroText: string
  sections: { title: string; text: string }[]
  faqHeading?: string
  faqs: { question: string; answer: string }[]
  ctaTitle?: string
  ctaText?: string
  ctaButton?: string
}

export const seoPage = (slug: string, label: string, d: SeoPageDefaults): GlobalConfig => ({
  slug,
  label,
  access: { read: () => true },
  admin: { group: 'SEO paginas' },
  fields: [
    { name: 'heroBadge', type: 'text', defaultValue: d.heroBadge },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: d.heroTitle },
    { name: 'heroText', type: 'textarea', defaultValue: d.heroText },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'sections',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
      defaultValue: d.sections,
    },
    { name: 'faqHeading', type: 'text', defaultValue: d.faqHeading ?? 'Veelgestelde vragen' },
    {
      name: 'faqs',
      type: 'array',
      fields: [
        { name: 'question', type: 'text' },
        { name: 'answer', type: 'textarea' },
      ],
      defaultValue: d.faqs,
    },
    { name: 'ctaTitle', type: 'text', defaultValue: d.ctaTitle ?? 'Benieuwd naar de mogelijkheden?' },
    {
      name: 'ctaText',
      type: 'textarea',
      defaultValue:
        d.ctaText ??
        'Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.',
    },
    { name: 'ctaButton', type: 'text', defaultValue: d.ctaButton ?? 'Offerte aanvragen →' },
  ],
})
