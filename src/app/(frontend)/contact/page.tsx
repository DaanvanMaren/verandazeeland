import React from 'react'

import { getContent, currentLocale } from '@/content'
import { tr } from '../_components/i18n'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Breadcrumbs } from '../_components/Breadcrumbs'
import { Header } from '../_components/Header'

export const metadata = { title: 'Contact & offerte | Veranda Zeeland' }

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

const infoLabel = 'text-gold font-bold text-[13px] uppercase tracking-[0.5px] mb-[4px]'

const chip = 'bg-white rounded-full py-[11px] px-[20px] font-semibold text-[14px] shadow-[0_4px_14px_-10px_rgba(8,42,82,0.5)]'

export default async function ContactPage() {
  const c = await getContent('contact')
  const locale = await currentLocale()
  const t = (s: string) => tr(s, locale)

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      <Breadcrumbs />

      {/* hero over ons */}
      <div id="over-ons" className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[44px] pt-[24px] px-[40px] pb-[56px] max-[600px]:px-[16px] items-center">
        <div>
          {c.heroBadge && (
            <span className="inline-block bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full mb-[20px]">
              {c.heroBadge}
            </span>
          )}
          <h1 className="font-display font-black text-[54px] leading-[0.98] mb-[20px] tracking-[-1.8px]">{c.heroTitle}</h1>
          {c.heroText && <p className="text-[18px] leading-[1.65] text-slate mb-[20px]">{c.heroText}</p>}
          <div className="flex gap-[30px] flex-wrap text-[15px]">
            {c.stats?.map((row) => (
              <div key={row.id}>
                <div className="font-extrabold font-display text-[26px]">{row.value}</div>
                <div className="text-taupe">{row.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-[22px] overflow-hidden min-h-[400px] bg-navy">
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} className={cover} />
        </div>
      </div>

      {/* contactgegevens + kaart */}
      <div id="showroom" className="grid grid-cols-[1fr_1.15fr] max-[820px]:grid-cols-1 gap-0 bg-white my-0 mx-[40px] max-[600px]:mx-[16px] rounded-[26px] overflow-hidden">
        {/* info */}
        <div className="bg-navy text-white py-[48px] px-[44px]">
          <h2 className="font-display font-extrabold text-[28px] mb-[24px] tracking-[-0.6px]">{c.contactHeading}</h2>
          <div className="flex flex-col gap-[22px] text-[15.5px] leading-[1.6]">
            <div>
              <div className={infoLabel}>{c.addressLabel}</div>
              <a className="nav-a" href={`https://maps.google.com/?q=${encodeURIComponent(`${c.addressLine1}, ${c.addressLine2}`)}`} target="_blank" rel="noopener">{c.addressLine1}<br />{c.addressLine2}</a>
            </div>
            <div>
              <div className={infoLabel}>{c.phoneLabel}</div>
              <a className="nav-a" href={`tel:${(c.phone ?? '').replace(/[^0-9+]/g, '')}`}>{c.phone}</a>
            </div>
            <div>
              <div className={infoLabel}>{c.emailLabel}</div>
              <a className="nav-a" href={`mailto:${c.email}`}>{c.email}</a>
            </div>
            <div>
              <div className={infoLabel}>{c.hoursLabel}</div>
              {c.hoursDays}<br />{c.hoursTime}<br /><span className="text-steel">{c.hoursNote}</span>
            </div>
          </div>
          <a className="btn-y inline-block mt-[30px] bg-gold text-navy font-extrabold text-[15px] py-[14px] px-[26px] rounded-full" href="/offerte">{t('Vraag een offerte aan →')}</a>
        </div>
        {/* kaart / sfeerbeeld */}
        <div className="relative min-h-[420px] bg-navy-light">
          <img src={img(c.contactImage, c.contactImageFallback ?? '')} alt={c.contactHeading ?? ''} className={cover} />
        </div>
      </div>

      {/* service area */}
      <div className="py-[60px] px-[40px] max-[600px]:px-[16px] text-center">
        <h2 className="font-display font-extrabold text-[30px] mb-[10px] tracking-[-0.8px]">{c.serviceHeading}</h2>
        {c.serviceText && <p className="text-taupe text-[16px] mt-0 mx-auto mb-[28px] max-w-[560px]">{c.serviceText}</p>}
        <div className="flex flex-wrap gap-[12px] justify-center">
          {c.serviceAreas?.map((row) => (
            <span key={row.id} className={chip}>{row.name}</span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
