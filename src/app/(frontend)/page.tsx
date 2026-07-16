import React from 'react'

import { getContent, Rich } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import SplitText from "@/components/SplitText";
import CountUp from "@/components/CountUp";

export const metadata = {
  title: "Veranda Zeeland · Veranda's, tuinkamers & glaswanden in Serooskerke",
}

// url of the uploaded image, or the design fallback shipped in public/uploads.
const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover = 'absolute inset-0 w-full h-full object-cover'
const pill =
  'bg-white rounded-full py-[13px] px-[22px] font-semibold text-[14.5px] shadow-[0_4px_14px_-8px_rgba(8,42,82,0.4)]'
const catCard = 'relative rounded-[20px] overflow-hidden bg-navy'
const catLabel = 'absolute left-[22px] bottom-[20px] text-white font-display font-extrabold text-[23px]'
const catOverlay = 'absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(8,42,82,0.82))]'

export default async function HomePage() {
  const c = await getContent('home')

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      {/* hero */}
      <div className="pt-[20px] px-[40px] pb-[40px] max-[600px]:px-[16px]">
        <div className="relative rounded-[26px] overflow-hidden min-h-[580px] flex items-end bg-navy">
          <img src={img(c.heroImage, '/uploads/foto-water-suppen.jpg')} alt={c.heroTitle} className={cover} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,82,0.78)_0%,rgba(8,42,82,0.4)_45%,transparent_72%)]" />
          <div className="relative p-[60px] max-w-[740px] text-white">
            {c.heroBadge && (
              <span className="inline-block bg-gold text-navy font-extrabold text-[12.5px] tracking-[1px] uppercase py-[7px] px-[14px] rounded-full mb-[22px]">
                {c.heroBadge}
              </span>
            )}
            <h1>
              <SplitText
                text={c.heroTitle}
                className="font-display font-black text-[74px] leading-[0.95] mb-[20px] tracking-[-2px]"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </h1>
            {c.heroSubtitle && (
              <p className="text-[19px] leading-[1.55] max-w-[500px] mb-[32px] text-[#e8eef5]">
                {c.heroSubtitle}
              </p>
            )}
            <div className="flex gap-[14px] flex-wrap">
              <a
                className="btn-y bg-gold text-navy font-extrabold text-[16px] py-[17px] px-[30px] rounded-full"
                href="/veranda-s"
              >
                {c.heroPrimaryCta}
              </a>
              <a
                className="bg-[rgba(255,255,255,0.14)] backdrop-blur-[4px] text-white font-bold text-[16px] py-[17px] px-[30px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.4)]"
                href="/contact"
              >
                {c.heroSecondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* usp pills */}
      <div className="flex flex-wrap gap-[14px] pt-[8px] px-[40px] pb-[44px] max-[600px]:px-[16px] justify-center">
        {c.usps?.map((u) => (
          <span key={u.id} className={pill}>
            {u.text}
          </span>
        ))}
        <span className="bg-navy text-gold rounded-full py-[13px] px-[22px] font-bold text-[14.5px]">
          ★ <CountUp from={0} to={9.2} direction="up" duration={3} className="count-up-text" delay={0.5} /> uit <CountUp from={0} to={327} separator="," direction="up" duration={3} className="count-up-text" delay={0.5} /> reviews
        </span>
      </div>

      {/* category grid (navigation) */}
      <div className="pt-[24px] px-[40px] pb-[60px] max-[600px]:px-[16px]">
        <div className="flex items-end justify-between mb-[28px]">
          <h2 className="font-display font-extrabold text-[44px] tracking-[-1.5px] max-w-[640px] leading-[1.02]">
            {c.categoriesHeading}
          </h2>
          <a className="nav-a font-bold text-brand-blue text-[15px] whitespace-nowrap" href="/veranda-s">
            Alle producten →
          </a>
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr] max-[820px]:grid-cols-1 auto-rows-[210px] gap-[16px]">
          <a className={`cat-card lift ${catCard} row-span-2`} href="/veranda-s">
            <img className={`cat-img ${cover}`} src="/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg" alt="Veranda's" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(8,42,82,0.85))]" />
            <div className="absolute left-[30px] bottom-[28px] text-white">
              <span className="bg-gold text-navy font-extrabold text-[11px] py-[5px] px-[11px] rounded-full uppercase tracking-[0.5px]">Populair</span>
              <div className="font-display font-extrabold text-[34px] mt-[12px]">Veranda's</div>
              <div className="text-[15px] opacity-90">Greenline · Profiline · Linea · Cube</div>
            </div>
          </a>
          <a className={`cat-card lift ${catCard}`} href="/tuinkamers">
            <img className={`cat-img ${cover}`} src="/uploads/DJI_20260527082041_0005_D.jpg" alt="Tuinkamers" />
            <div className={catOverlay} />
            <div className={catLabel}>Tuinkamers</div>
          </a>
          <a className={`cat-card lift ${catCard}`} href="/glazen-schuifwanden">
            <img className={`cat-img ${cover}`} src="/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg" alt="Schuifwanden" />
            <div className={catOverlay} />
            <div className={catLabel}>Schuifwanden</div>
          </a>
          <a className={`cat-card lift ${catCard}`} href="/zonwering">
            <img className={`cat-img ${cover}`} src="/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg" alt="Zonwering" />
            <div className={catOverlay} />
            <div className={catLabel}>Zonwering</div>
          </a>
          <a className={`cat-card lift ${catCard}`} href="/accessoires">
            <img className={`cat-img ${cover}`} src="/uploads/Lamellen_Verasol_tegels02.jpg" alt="Opties" />
            <div className={catOverlay} />
            <div className={catLabel}>Opties</div>
          </a>
        </div>
      </div>

      {/* welcome band */}
      <div className="bg-navy text-white mx-[40px] max-[600px]:mx-[16px] rounded-[26px] py-[60px] px-[56px] grid grid-cols-2 max-[820px]:grid-cols-1 gap-[56px] items-center">
        <div>
          <span className="text-gold font-extrabold text-[13px] tracking-[1.5px] uppercase">
            {c.welcomeLabel}
          </span>
          <h2 className="font-display font-extrabold text-[40px] leading-[1.05] mt-[14px] mb-[20px] tracking-[-1.2px]">
            {c.welcomeTitle}
          </h2>
          <div className="text-[17px] leading-[1.7] text-sky mb-[16px]"><Rich field={c.welkomBijVerandazeelandTekst} /></div>

          <a className="btn-y bg-gold text-navy font-extrabold text-[15px] py-[15px] px-[28px] rounded-full" href="/contact">
            {c.welcomeCta}
          </a>
        </div>
        <div className="relative rounded-[18px] overflow-hidden min-h-[340px] bg-navy-light">
          <img src={img(c.welcomeImage, '/uploads/DJI_20260527082041_0005_D.jpg')} alt={c.welcomeTitle ?? ''} className={cover} />
        </div>
      </div>

      {/* models (navigation) */}
      <div className="py-[64px] px-[40px] max-[600px]:px-[16px]">
        <h2 className="font-display font-extrabold text-[38px] text-center mb-[6px] tracking-[-1.2px]">
          {c.modelsHeading}
        </h2>
        <p className="text-center text-taupe text-[16.5px] mb-[38px]">{c.modelsSub}</p>
        <div className="grid grid-cols-4 max-[820px]:grid-cols-1 gap-[20px]">
          {[
            { href: '/veranda-greenline', name: 'Greenline', desc: 'De voordeligste lijn, betaalbaar en strak.', img: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
            { href: '/veranda-profiline', name: 'Profiline', desc: 'Veelzijdig, tot 7 meter overspanning.', img: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
            { href: '/veranda-linea', name: 'Linea', desc: 'Modern design met een optisch vlak dak.', img: '/uploads/DJI_20260527082041_0005_D.jpg' },
            { href: '/veranda-cube', name: 'Cube', desc: 'Exclusief, kubistisch met vlak dak.', img: '/uploads/Lamellen_Verasol_tegels02.jpg' },
          ].map((m) => (
            <a key={m.href} className="lift bg-panel rounded-[20px] overflow-hidden shadow-[0_8px_26px_-16px_rgba(8,42,82,0.4)] block" href={m.href}>
              <div className="h-[190px] overflow-hidden bg-navy">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-[24px]">
                <h3 className="font-display font-extrabold text-[21px] mb-[8px]">{m.name}</h3>
                <p className="text-[14.5px] text-taupe leading-[1.6] mb-[14px]">{m.desc}</p>
                <span className="font-bold text-brand-blue text-[14px]">Ontdek {m.name} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* reviews */}
      <div className="pt-[20px] px-[40px] pb-[64px] max-[600px]:px-[16px]">
        <div className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-[20px]">
          {c.reviews?.map((r) => (
            <div key={r.id} className="bg-panel rounded-[20px] p-[28px] shadow-[0_8px_26px_-18px_rgba(8,42,82,0.4)]">
              <div className="text-gold text-[16px] mb-[10px]">★★★★★</div>
              <p className="text-[15.5px] leading-[1.65] mb-[14px] text-slate-dark">&ldquo;{r.quote}&rdquo;</p>
              <div className="font-bold text-[14px]">{r.author}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gold py-[60px] px-[56px] mb-[40px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] flex items-center justify-between gap-[40px] flex-wrap">
        <div>
          <h2 className="font-display font-black text-[42px] mb-[8px] tracking-[-1.5px] text-navy">
            {c.ctaTitle}
          </h2>
          <p className="text-[17px] text-slate-dark max-w-[520px]">{c.ctaText}</p>
        </div>
        <a className="btn-n bg-navy text-white font-extrabold text-[16px] py-[19px] px-[34px] rounded-full whitespace-nowrap" href="/contact">
          {c.ctaButton}
        </a>
      </div>

      <Footer />
    </div>
  )
}
