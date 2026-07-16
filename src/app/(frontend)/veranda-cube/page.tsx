import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Breadcrumbs } from '../_components/Breadcrumbs'
import { Header } from '../_components/Header'

export const metadata = { title: 'Cube veranda | Veranda Zeeland' }

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

export default async function VerandaCubePage() {
  const c = await getContent('veranda-cube')

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      <Breadcrumbs />

      {/* hero */}
      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[44px] pt-[24px] px-[40px] pb-[48px] max-[600px]:px-[16px] items-center">
        <div>
          <div className="flex items-center gap-[12px] mb-[18px]">
            {c.heroBadge && <span className="bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full">{c.heroBadge}</span>}
            {c.heroPrice && <span className="bg-sky-light text-brand-blue font-bold text-[13px] py-[6px] px-[12px] rounded-full">{c.heroPrice}</span>}
          </div>
          <h1 className="font-display font-black text-[58px] leading-[0.96] mb-[18px] tracking-[-2px]">{c.heroTitle}</h1>
          {c.heroText && <p className="text-[18px] leading-[1.65] text-slate mb-[26px]">{c.heroText}</p>}
          <div className="flex gap-[14px] flex-wrap">
            <a className="btn-n bg-navy text-white font-bold text-[15px] py-[15px] px-[26px] rounded-full" href="/offerte">{c.heroCtaPrimary}</a>
            <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[26px] rounded-full" href="/contact">{c.heroCtaSecondary}</a>
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[440px] bg-navy">
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} className={cover} />
        </div>
      </div>

      {/* spec bar */}
      <div className="mx-[40px] max-[600px]:mx-[16px] bg-white border border-line-alt rounded-[18px] overflow-hidden grid grid-cols-4 max-[820px]:grid-cols-1">
        {c.specs?.map((row, i) => (
          <div key={row.id} className="py-[22px] px-[24px]" style={{ borderRight: i < (c.specs?.length ?? 0) - 1 ? '1px solid #eee4d2' : 'none' }}>
            <div className="font-display font-extrabold text-[24px] text-navy">{row.value}</div>
            <div className="text-[13.5px] text-taupe mt-[4px]">{row.label}</div>
          </div>
        ))}
      </div>

      {/* intro */}
      <div className="grid grid-cols-[1.15fr_1fr] max-[820px]:grid-cols-1 gap-[48px] py-[56px] px-[40px] max-[600px]:px-[16px] items-center">
        <div>
          <h2 className="font-display font-extrabold text-[32px] mb-[16px] tracking-[-1px]">{c.introTitle}</h2>
          {c.introText && <p className="text-[16.5px] leading-[1.75] text-slate mb-[18px]">{c.introText}</p>}
          <ul className="m-0 p-0 list-none flex flex-col gap-[10px] text-[15.5px] text-slate">
            {c.introBullets?.map((row) => (
              <li key={row.id}>✓ {row.text}</li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[18px] overflow-hidden min-h-[340px] bg-navy">
          <img src={img(c.introImage, c.introImageFallback ?? '')} alt={c.introTitle ?? ''} className={cover} />
        </div>
      </div>

      {/* features */}
      <div className="pt-[40px] px-[40px] pb-[56px] max-[600px]:px-[16px] bg-line">
        <h2 className="font-display font-extrabold text-[32px] mb-[30px] tracking-[-1px]">{c.featuresTitle}</h2>
        <div className="grid grid-cols-4 max-[820px]:grid-cols-1 gap-[18px]">
          {c.features?.map((row) => (
            <div key={row.id} className="lift bg-panel rounded-[18px] p-[26px] shadow-[0_8px_26px_-20px_rgba(8,42,82,0.4)]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-gold mb-[16px] flex items-center justify-center text-[22px] font-black text-navy">✓</div>
              <h3 className="font-display font-extrabold text-[17px] mb-[8px]">{row.title}</h3>
              <p className="text-[14.5px] text-taupe leading-[1.6] m-0">{row.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* op maat band */}
      <div className="bg-navy text-white my-[56px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] p-[56px] max-[600px]:p-[26px] grid grid-cols-2 max-[820px]:grid-cols-1 gap-[48px] items-center">
        <div>
          <span className="text-gold font-extrabold text-[13px] tracking-[1.5px] uppercase">{c.ombouwLabel}</span>
          <h2 className="font-display font-extrabold text-[32px] mt-[12px] mb-[14px] tracking-[-1px]">{c.ombouwTitle}</h2>
          <p className="text-[16.5px] leading-[1.7] text-sky mb-[24px]">{c.ombouwText}</p>
          <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[14px] px-[26px] rounded-full inline-block" href="/accessoires">{c.ombouwCta}</a>
        </div>
        <div className="relative rounded-[16px] overflow-hidden min-h-[300px] bg-navy-light">
          <img src={img(c.ombouwImage, c.ombouwImageFallback ?? '')} alt={c.ombouwTitle ?? ''} className={cover} />
        </div>
      </div>

      {/* gallery */}
      <div className="pt-[20px] px-[40px] pb-[40px] max-[600px]:px-[16px]">
        <h2 className="font-display font-extrabold text-[28px] mb-[24px] tracking-[-0.8px]">{c.galleryTitle}</h2>
        <div className="grid grid-cols-[2fr_1fr_1fr] max-[820px]:grid-cols-1 auto-rows-[220px] gap-[16px]">
          {c.gallery?.map((row, i) => (
            <div key={row.id} className={`relative rounded-[18px] overflow-hidden bg-navy${i === 0 ? ' row-span-2' : ''}`}>
              <img src={img(row.image, row.fallback ?? '')} alt={row.alt ?? ''} className={cover} />
            </div>
          ))}
        </div>
      </div>

      {/* other models */}
      <div className="pt-[20px] px-[40px] pb-[56px] max-[600px]:px-[16px]">
        <h2 className="font-display font-extrabold text-[28px] mb-[24px] tracking-[-0.8px]">{c.othersTitle}</h2>
        <div className="grid grid-cols-4 max-[820px]:grid-cols-1 gap-[18px]">
          {c.others?.map((row) => (
            <a key={row.id} className="lift bg-panel rounded-[18px] overflow-hidden shadow-[0_8px_26px_-20px_rgba(8,42,82,0.4)] block" href={row.href ?? '#'}>
              <div className="h-[150px] overflow-hidden bg-navy">
                <img src={img(row.image, row.fallback ?? '')} alt={row.name ?? ''} className="w-full h-full object-cover" />
              </div>
              <div className="py-[18px] px-[20px]">
                <h3 className="font-display font-extrabold text-[18px] mb-[4px]">{row.name}</h3>
                <p className="text-[13.5px] text-taupe m-0">{row.tag}</p>
              </div>
            </a>
          ))}
        </div>
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
