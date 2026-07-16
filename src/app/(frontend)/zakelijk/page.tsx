import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'

export const metadata = {
  title: 'Zakelijk | Veranda Zeeland',
}

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

export default async function ZakelijkPage() {
  const c = await getContent('zakelijk')

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      <div className="pt-[20px] px-[40px] max-[600px]:px-[16px] pb-0 text-[13px] text-mute">
        <a className="nav-a" href="/">Home</a> › <span className="text-navy font-semibold">Zakelijk</span>
      </div>

      {/* hero */}
      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[44px] pt-[24px] px-[40px] pb-[56px] max-[600px]:px-[16px] items-center">
        <div>
          {c.heroBadge && (
            <span className="inline-block bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full mb-[20px]">
              {c.heroBadge}
            </span>
          )}
          <h1 className="font-display font-black text-[54px] leading-[0.98] mb-[20px] tracking-[-1.8px]">{c.heroTitle}</h1>
          {c.heroText && <p className="text-[18px] leading-[1.65] text-slate mb-[28px]">{c.heroText}</p>}
          <div className="flex gap-[14px] flex-wrap">
            <a className="btn-n bg-navy text-white font-bold text-[15px] py-[15px] px-[26px] rounded-full" href="/contact">{c.heroButton1}</a>
            <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[26px] rounded-full" href="/contact">{c.heroButton2}</a>
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[420px] bg-navy">
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} className={cover} />
        </div>
      </div>

      {/* sectoren */}
      <div className="py-[56px] px-[40px] max-[600px]:px-[16px] bg-line">
        <h2 className="font-display font-extrabold text-[34px] mb-[6px] tracking-[-1px]">{c.sectorsHeading}</h2>
        {c.sectorsIntro && <p className="text-taupe text-[16.5px] mb-[32px]">{c.sectorsIntro}</p>}
        <div className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-[18px]">
          {c.sectors?.map((row) => (
            <a
              key={row.id}
              className="lift block scroll-mt-[96px] bg-panel rounded-[18px] p-[28px] shadow-[0_8px_26px_-20px_rgba(8,42,82,0.4)]"
              id={row.anchor ?? undefined}
              href={row.href ?? '#'}
            >
              <div className="w-[44px] h-[44px] rounded-[12px] bg-gold mb-[16px] flex items-center justify-center text-[22px] font-black text-navy">✓</div>
              <h3 className="font-display font-extrabold text-[19px] mb-[10px]">{row.title}</h3>
              <p className="text-[14.5px] text-taupe leading-[1.65]">{row.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* werkwijze */}
      <div className="py-[64px] px-[40px] max-[600px]:px-[16px]">
        <h2 className="font-display font-extrabold text-[34px] text-center mb-[40px] tracking-[-1px]">{c.stepsHeading}</h2>
        <div className="grid grid-cols-4 max-[820px]:grid-cols-1 gap-[20px]">
          {c.steps?.map((row) => (
            <div key={row.id} className="text-center">
              <div className="font-display font-black text-[40px] text-gold">{row.number}</div>
              <h3 className="font-display font-extrabold text-[18px] mt-[6px] mb-[8px]">{row.title}</h3>
              <p className="text-[14.5px] text-taupe leading-[1.6]">{row.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* band */}
      <div className="bg-navy text-white mb-[56px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] p-[56px] max-[600px]:p-[26px] grid grid-cols-2 max-[820px]:grid-cols-1 gap-[48px] items-center">
        <div className="relative rounded-[16px] overflow-hidden min-h-[300px] bg-navy-light">
          <img src={img(c.bandImage, c.bandImageFallback ?? '')} alt={c.bandTitle ?? ''} className={cover} />
        </div>
        <div>
          <span className="text-gold font-extrabold text-[13px] tracking-[1.5px] uppercase">{c.bandLabel}</span>
          <h2 className="font-display font-extrabold text-[34px] mt-[12px] mb-[14px] tracking-[-1px]">{c.bandTitle}</h2>
          <p className="text-[16.5px] leading-[1.7] text-sky mb-[24px]">{c.bandText}</p>
          <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[14px] px-[26px] rounded-full inline-block" href="/contact">{c.bandCta}</a>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gold p-[56px] max-[600px]:p-[26px] mb-[40px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] text-center">
        <h2 className="font-display font-black text-[38px] mb-[10px] tracking-[-1.4px] text-navy">{c.ctaTitle}</h2>
        <p className="text-[16.5px] text-slate-dark mx-auto mb-[24px] max-w-[520px]">{c.ctaText}</p>
        <a className="btn-n bg-navy text-white font-extrabold text-[16px] py-[17px] px-[32px] rounded-full inline-block" href="/offerte">{c.ctaButton}</a>
      </div>

      <Footer />
    </div>
  )
}
