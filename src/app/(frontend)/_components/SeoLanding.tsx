import React from 'react'

import { currentLocale } from '@/content'
import type { Media } from '@/payload-types'

import { Breadcrumbs } from './Breadcrumbs'
import { Footer } from './Footer'
import { Header } from './Header'
import { tr } from './i18n'

// Shared renderer for the SEO landing pages (see src/content/seo-page.ts).
// All six content groups share this field shape; typed structurally so one
// component serves every slug. Emits FAQPage JSON-LD from the faqs array.
type SeoContent = {
  heroBadge?: string | null
  heroTitle: string
  heroText?: string | null
  heroImage?: number | Media | null
  sections?: { title?: string | null; text?: string | null; id?: string | null }[] | null
  faqHeading?: string | null
  faqs?: { question?: string | null; answer?: string | null; id?: string | null }[] | null
  ctaTitle?: string | null
  ctaText?: string | null
  ctaButton?: string | null
}

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

export async function SeoLanding({ c, fallbackImage }: { c: SeoContent; fallbackImage: string }) {
  const locale = await currentLocale()
  const t = (s: string) => tr(s, locale)
  const faqs = (c.faqs ?? []).filter((f) => f.question && f.answer)

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      <Breadcrumbs />

      {/* page hero */}
      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[44px] pt-[24px] px-[40px] pb-[56px] max-[600px]:px-[16px] items-center">
        <div>
          {c.heroBadge && (
            <span className="inline-block bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full mb-[20px]">
              {c.heroBadge}
            </span>
          )}
          <h1 className="font-display font-black text-[48px] leading-[1.02] mb-[20px] tracking-[-1.6px]">{c.heroTitle}</h1>
          {c.heroText && <p className="text-[18px] leading-[1.65] text-slate mb-[28px]">{c.heroText}</p>}
          <div className="flex gap-[14px] flex-wrap">
            <a className="btn-n bg-navy text-white font-bold text-[15px] py-[15px] px-[26px] rounded-full" href="/offerte">{t('Offerte aanvragen →')}</a>
            <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[26px] rounded-full" href="/contact">{t('Contact')}</a>
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[420px] bg-navy">
          <img src={img(c.heroImage, fallbackImage)} alt={c.heroTitle} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* tekstsecties */}
      <div className="pt-[56px] px-[40px] pb-[40px] max-[600px]:px-[16px] bg-white">
        <div className="max-w-[760px]">
          {c.sections?.map((s) => (
            <div key={s.id} className="mb-[36px]">
              <h2 className="font-display font-extrabold text-[28px] mb-[10px] tracking-[-0.8px]">{s.title}</h2>
              <p className="text-[16.5px] leading-[1.75] text-slate">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      {faqs.length > 0 && (
        <div className="pt-[16px] px-[40px] pb-[56px] max-[600px]:px-[16px] bg-white">
          <h2 className="font-display font-extrabold text-[34px] mb-[24px] tracking-[-1px]">{c.faqHeading}</h2>
          <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[22px]">
            {faqs.map((f) => (
              <div key={f.id} className="bg-panel rounded-[20px] p-[24px]">
                <h3 className="font-display font-extrabold text-[18px] mb-[8px] tracking-[-0.3px]">{f.question}</h3>
                <p className="text-[15px] leading-[1.7] text-taupe">{f.answer}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              }),
            }}
          />
        </div>
      )}

      {/* CTA */}
      <div className="bg-gold p-[56px] max-[600px]:p-[26px] my-[40px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] text-center">
        <h2 className="font-display font-black text-[38px] mb-[10px] tracking-[-1.4px] text-navy">{c.ctaTitle}</h2>
        <p className="text-[16.5px] text-slate-dark mx-auto mb-[24px] max-w-[520px]">{c.ctaText}</p>
        <a className="btn-n bg-navy text-white font-extrabold text-[16px] py-[17px] px-[32px] rounded-full inline-block" href="/offerte">{c.ctaButton}</a>
      </div>

      <Footer />
    </div>
  )
}
