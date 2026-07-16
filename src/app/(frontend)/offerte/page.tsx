import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'

export const metadata = { title: 'Offerte aanvragen | Veranda Zeeland' }

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'

const infoLabel = 'text-gold font-bold text-[13px] uppercase tracking-[0.5px] mb-[4px]'

// Reads the shared `contact` global — the offerte form fields live there.
export default async function OffertePage() {
  const c = await getContent('contact')

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      <div className="pt-[20px] px-[40px] pb-0 max-[600px]:px-[16px] text-[13px] text-mute">
        <a className="nav-a" href="/">Home</a> › <span className="text-navy font-semibold">Offerte aanvragen</span>
      </div>

      {/* intro */}
      <div className="pt-[24px] px-[40px] pb-[8px] max-[600px]:px-[16px] max-w-[720px]">
        <span className="inline-block bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full mb-[18px]">
          Vrijblijvend & op maat
        </span>
        <h1 className="font-display font-black text-[48px] leading-[1] mb-[14px] tracking-[-1.6px]">{c.formHeading}</h1>
        {c.formIntro && <p className="text-[18px] leading-[1.65] text-slate m-0">{c.formIntro}</p>}
      </div>

      {/* info + form */}
      <div className="grid grid-cols-[1fr_1.15fr] max-[820px]:grid-cols-1 gap-0 bg-white mt-[24px] mx-[40px] mb-0 max-[600px]:mx-[16px] rounded-[26px] overflow-hidden">
        {/* info */}
        <div className="bg-navy text-white py-[48px] px-[44px]">
          <h2 className="font-display font-extrabold text-[26px] mb-[24px] tracking-[-0.6px]">{c.contactHeading}</h2>
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
          <div className="mt-[30px] rounded-[14px] overflow-hidden min-h-[150px] relative bg-navy-light">
            <img src={img(c.contactImage, c.contactImageFallback ?? '')} alt={c.contactHeading ?? ''} className={cover} />
          </div>
        </div>
        {/* form */}
        <div className="py-[48px] px-[44px]">
          <h2 className="font-display font-extrabold text-[28px] mb-[6px] tracking-[-0.6px]">{c.formHeading}</h2>
          {c.formIntro && <p className="text-taupe text-[15px] mb-[26px]">{c.formIntro}</p>}
          <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-[16px]">
            <div><label>{c.formFirstName}</label><input type="text" placeholder="Uw voornaam" /></div>
            <div><label>{c.formLastName}</label><input type="text" placeholder="Uw achternaam" /></div>
            <div><label>{c.formEmail}</label><input type="text" placeholder="naam@voorbeeld.nl" /></div>
            <div><label>{c.formPhone}</label><input type="tel" placeholder="06 - ..." /></div>
            <div className="col-span-2 max-[820px]:col-auto">
              <label>{c.formInterest}</label>
              <select>
                <option>Veranda</option>
                <option>Tuinkamer</option>
                <option>Schuifwanden</option>
                <option>Zonwering</option>
                <option>Opties</option>
                <option>Zakelijk project</option>
                <option>Anders / weet ik nog niet</option>
              </select>
            </div>
            <div className="col-span-2 max-[820px]:col-auto"><label>{c.formMessage}</label><textarea rows={4} placeholder="Vertel ons over uw wensen, afmetingen of situatie..." /></div>
          </div>
          <button className="btn-n mt-[20px] bg-navy text-white font-extrabold text-[15px] py-[15px] px-[30px] border-none rounded-full cursor-pointer font-[inherit]">{c.formButton}</button>
          {c.formDisclaimer && <p className="text-[12.5px] text-[#9a9078] mt-[14px] mx-0 mb-0">{c.formDisclaimer}</p>}
        </div>
      </div>

      {/* liever bellen / langskomen */}
      <div className="pt-[28px] px-[40px] pb-[60px] max-[600px]:px-[16px] text-center text-taupe text-[15px]">
        Liever direct contact? Bel <a className="nav-a font-bold text-brand-blue" href={`tel:${(c.phone ?? '').replace(/[^0-9+]/g, '')}`}>{c.phone}</a> of <a className="nav-a font-bold text-brand-blue" href="/contact">kom langs in de showroom</a>.
      </div>

      <Footer />
    </div>
  )
}
