import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Breadcrumbs } from '../_components/Breadcrumbs'
import { Header } from '../_components/Header'

export const metadata = {
  title: 'Haal meer uit je bedrijfspand | Zakelijk | Veranda Zeeland',
  description:
    'Overkappingen voor kantoren en commercieel vastgoed: buitenwerkplekken, rookruimtes en representatieve entrees. Zakelijk maatwerk van Veranda Zeeland.',
}

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

export default async function ZakelijkKantorenPage() {
  const c = await getContent('zakelijk-kantoren')

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
          <h1 className="font-display font-black text-[52px] leading-[1] mb-[20px] tracking-[-1.6px]">{c.heroTitle}</h1>
          {c.heroText && <p className="text-[18px] leading-[1.65] text-slate mb-[28px]">{c.heroText}</p>}
          <div className="flex gap-[14px] flex-wrap">
            <a className="btn-n bg-navy text-white font-bold text-[15px] py-[15px] px-[26px] rounded-full" href="/offerte">{c.heroButtonPrimary}</a>
            <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[26px] rounded-full" href="/contact">{c.heroButtonSecondary}</a>
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[420px] bg-navy">
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} className={cover} />
        </div>
      </div>

      {/* toepassingen & voordelen */}
      <div className="py-[56px] px-[40px] max-[600px]:px-[16px] bg-line">
        <h2 className="font-display font-extrabold text-[32px] mb-[30px] tracking-[-1px]">{c.benefitsHeading}</h2>
        <div className="grid grid-cols-4 max-[820px]:grid-cols-1 gap-[18px]">
          {c.benefits?.map((row) => (
            <div key={row.id} className="lift bg-panel rounded-[18px] p-[26px] shadow-[0_8px_26px_-20px_rgba(8,42,82,0.4)]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-gold mb-[16px] flex items-center justify-center text-[22px] font-black text-navy">✓</div>
              <h3 className="font-display font-extrabold text-[17px] mb-[8px]">{row.title}</h3>
              <p className="text-[14.5px] text-taupe leading-[1.6]">{row.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* quote band */}
      <div className="bg-navy text-white my-[56px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] p-[56px] max-[600px]:p-[26px] text-center">
        <p className="font-display font-extrabold text-[26px] leading-[1.3] mx-auto max-w-[760px] tracking-[-0.5px]">{c.quote}</p>
      </div>

      {/* CTA */}
      <div className="bg-gold p-[56px] max-[600px]:p-[26px] mb-[40px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] text-center">
        <h2 className="font-display font-black text-[36px] mb-[10px] tracking-[-1.4px] text-navy">{c.ctaTitle}</h2>
        <p className="text-[16.5px] text-slate-dark mx-auto mb-[24px] max-w-[520px]">{c.ctaText}</p>
        <a className="btn-n bg-navy text-white font-extrabold text-[16px] py-[17px] px-[32px] rounded-full inline-block" href="/offerte">{c.ctaButton}</a>
      </div>

      <Footer />
    </div>
  )
}
