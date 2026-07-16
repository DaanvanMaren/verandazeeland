import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Breadcrumbs } from '../_components/Breadcrumbs'
import { Header } from '../_components/Header'

export const metadata = {
  title: "Veranda's — Greenline, Profiline, Linea & Cube | Veranda Zeeland",
}

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

export default async function VerandasPage() {
  const c = await getContent('veranda-s')

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
          <h1 className="font-display font-black text-[56px] leading-[0.98] mb-[20px] tracking-[-1.8px]">{c.heroTitle}</h1>
          {c.heroText && <p className="text-[18px] leading-[1.65] text-slate mb-[28px]">{c.heroText}</p>}
          <div className="flex gap-[14px] flex-wrap">
            <a className="btn-n bg-navy text-white font-bold text-[15px] py-[15px] px-[26px] rounded-full" href="/offerte">Offerte aanvragen →</a>
            <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[26px] rounded-full" href="#lijnen">Bekijk de productlijnen</a>
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[420px] bg-navy">
          <img src={img(c.heroImage, '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg')} alt={c.heroTitle} className={cover} />
        </div>
      </div>

      {/* productlijnen */}
      <div id="lijnen" className="pt-[56px] px-[40px] pb-[20px] max-[600px]:px-[16px] bg-white">
        <h2 className="font-display font-extrabold text-[34px] mb-[6px] tracking-[-1px]">{c.linesHeading}</h2>
        {c.linesIntro && <p className="text-taupe text-[16.5px] mb-[34px] max-w-[640px]">{c.linesIntro}</p>}
        <div className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-[22px]">
          {c.lines?.map((row) => (
            <a
              key={row.id}
              className="lift bg-panel rounded-[20px] overflow-hidden shadow-[0_8px_26px_-18px_rgba(8,42,82,0.4)] flex flex-col"
              href={row.href ?? '#'}
            >
              <div className="relative h-[210px] overflow-hidden bg-navy">
                {row.badge && (
                  <span className="absolute top-[16px] left-[16px] z-[1] bg-gold text-navy font-extrabold text-[11px] py-[5px] px-[11px] rounded-full uppercase tracking-[0.5px]">
                    {row.badge}
                  </span>
                )}
                <img src={img(row.image, row.fallback ?? '')} alt={row.name ?? ''} className="w-full h-full object-cover" />
              </div>
              <div className="p-[24px] flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-[10px] mb-[8px]">
                  <h3 className="font-display font-extrabold text-[22px] tracking-[-0.5px]">{row.name}</h3>
                  {row.price && <span className="text-brand-blue font-bold text-[13px] whitespace-nowrap">{row.price}</span>}
                </div>
                {row.tag && <div className="font-bold text-[13px] text-gold-dark uppercase tracking-[0.5px] mb-[10px]">{row.tag}</div>}
                <p className="text-[14.5px] text-taupe leading-[1.6] mb-[16px] flex-1">{row.desc}</p>
                <span className="font-bold text-brand-blue text-[14.5px]">Bekijk {row.name} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ombouw band */}
      <div className="bg-navy text-white my-[56px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] p-[56px] max-[600px]:p-[26px] grid grid-cols-2 max-[820px]:grid-cols-1 gap-[48px] items-center">
        <div className="relative rounded-[16px] overflow-hidden min-h-[300px] bg-navy-light">
          <img src={img(c.ombouwImage, '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg')} alt={c.ombouwTitle ?? ''} className={cover} />
        </div>
        <div>
          <span className="text-gold font-extrabold text-[13px] tracking-[1.5px] uppercase">{c.ombouwLabel}</span>
          <h2 className="font-display font-extrabold text-[34px] mt-[12px] mb-[14px] tracking-[-1px]">{c.ombouwTitle}</h2>
          <p className="text-[16.5px] leading-[1.7] text-sky mb-[24px]">{c.ombouwText}</p>
          <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[14px] px-[26px] rounded-full inline-block" href="/tuinkamers">{c.ombouwCta}</a>
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
