import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'

export const metadata = {
  title: 'Tuinkamers | Veranda Zeeland',
}

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

export default async function TuinkamersPage() {
  const c = await getContent('tuinkamers')

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      <div className="pt-[20px] px-[40px] max-[600px]:px-[16px] text-[13px] text-mute">
        <a className="nav-a" href="/">Home</a> › <span className="text-navy font-semibold">Tuinkamers</span>
      </div>

      {/* page hero */}
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
            <a className="btn-n bg-navy text-white font-bold text-[15px] py-[15px] px-[26px] rounded-full" href="/offerte">{c.heroPrimaryCta}</a>
            <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[26px] rounded-full" href="/contact">{c.heroSecondaryCta}</a>
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[420px] bg-navy">
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} className={cover} />
        </div>
      </div>

      {/* 2 type tuinkamers */}
      <div className="py-[56px] px-[40px] max-[600px]:px-[16px] bg-line">
        <span className="text-gold-dark font-extrabold text-[13px] tracking-[1.5px] uppercase">{c.typesLabel}</span>
        <h2 className="font-display font-extrabold text-[34px] mt-[10px] mb-[8px] tracking-[-1px]">{c.typesHeading}</h2>
        {c.typesIntro && <p className="text-taupe text-[16.5px] mb-[32px] max-w-[640px]">{c.typesIntro}</p>}
        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[24px]">
          {c.types?.map((row) => (
            <a
              key={row.id}
              className="cat-card lift bg-panel rounded-[20px] overflow-hidden shadow-[0_8px_26px_-18px_rgba(8,42,82,0.4)] block"
              href={row.href ?? '#'}
            >
              <div className="relative h-[300px] overflow-hidden bg-navy">
                <img className="cat-img w-full h-full object-cover" src={img(row.image, row.fallback ?? '')} alt={row.title ?? ''} />
              </div>
              <div className="p-[26px] flex items-center justify-between gap-[12px]">
                <div>
                  <h3 className="font-display font-extrabold text-[24px] mb-[4px] tracking-[-0.5px]">{row.title}</h3>
                  <p className="text-[14.5px] text-taupe m-0">{row.desc}</p>
                </div>
                <span className="bg-navy text-white font-bold text-[14px] py-[12px] px-[20px] rounded-full whitespace-nowrap">{row.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* waarom een tuinkamer */}
      <div className="pt-[56px] px-[40px] pb-0 max-[600px]:px-[16px]">
        <h2 className="font-display font-extrabold text-[34px] mb-[6px] tracking-[-1px]">{c.uspHeading}</h2>
        {c.uspIntro && <p className="text-taupe text-[16.5px] mb-[32px]">{c.uspIntro}</p>}
        <div className="grid grid-cols-[repeat(4,1fr)] max-[820px]:grid-cols-1 gap-[18px]">
          {c.usps?.map((row) => (
            <div key={row.id} className="lift bg-panel rounded-[18px] p-[26px] shadow-[0_8px_26px_-20px_rgba(8,42,82,0.4)]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-gold mb-[16px] flex items-center justify-center text-[22px] font-black text-navy">✓</div>
              <h3 className="font-display font-extrabold text-[18px] mb-[8px]">{row.title}</h3>
              <p className="text-[14.5px] text-taupe leading-[1.6] m-0">{row.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* projecten uit Zeeland */}
      <div className="py-[60px] px-[40px] max-[600px]:px-[16px]">
        <h2 className="font-display font-extrabold text-[34px] text-center mb-[32px] tracking-[-1px]">{c.galleryHeading}</h2>
        <div className="grid grid-cols-[2fr_1fr_1fr] max-[820px]:grid-cols-1 auto-rows-[200px] gap-[16px]">
          {c.gallery?.map((row, i) => (
            <div key={row.id} className={`relative rounded-[18px] overflow-hidden bg-navy${i === 0 ? ' row-span-2' : ''}`}>
              <img src={img(row.image, row.fallback ?? '')} alt="Project" className={cover} />
            </div>
          ))}
        </div>
      </div>

      {/* glasschuifwanden band */}
      <div className="bg-navy text-white mb-[56px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] p-[56px] max-[600px]:p-[26px] grid grid-cols-2 max-[820px]:grid-cols-1 gap-[48px] items-center">
        <div>
          <span className="text-gold font-extrabold text-[13px] tracking-[1.5px] uppercase">{c.glasLabel}</span>
          <h2 className="font-display font-extrabold text-[34px] mt-[12px] mb-[14px] tracking-[-1px]">{c.glasTitle}</h2>
          <p className="text-[16.5px] leading-[1.7] text-sky mb-[24px]">{c.glasText}</p>
          <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[14px] px-[26px] rounded-full inline-block" href="/glazen-schuifwanden">{c.glasCta}</a>
        </div>
        <div className="relative rounded-[16px] overflow-hidden min-h-[300px] bg-navy-light">
          <img src={img(c.glasImage, c.glasImageFallback ?? '')} alt={c.glasTitle ?? ''} className={cover} />
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
