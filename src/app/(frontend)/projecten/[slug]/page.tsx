import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { currentLocale, Rich } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../../_components/Footer'
import { Header } from '../../_components/Header'
import { tr } from '../../_components/i18n'

const asMedia = (m: unknown): Media | null => (m && typeof m === 'object' && 'url' in m ? (m as Media) : null)

// Bento tile sizes, cycled by index; grid-flow-dense packs the holes so any
// number of photos fills neatly. Every 6th photo is a large 2×2 feature tile,
// the 5th in each cycle spans 2 wide, the rest are 1×1.
const bento = (i: number) =>
  i % 6 === 0 ? 'col-span-2 row-span-2' : i % 6 === 4 ? 'col-span-2' : 'col-span-1'

async function getProject(slug: string, locale: 'nl' | 'de') {
  const payload = await getPayload({ config: await config })
  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug }, published: { equals: true } },
    depth: 1,
    limit: 1,
    locale,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = await getProject(slug, 'nl')
  if (!p) return { title: 'Project | Veranda Zeeland' }
  return {
    title: `${p.title} | Veranda Zeeland`,
    description: p.intro ?? `${p.title}${p.location ? ` in ${p.location}` : ''} — uitgevoerd project van Veranda Zeeland.`,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const locale = await currentLocale()
  const t = (s: string) => tr(s, locale)
  const p = await getProject(slug, locale)
  if (!p) notFound()

  const gallery = (p.images ?? []).map(asMedia).filter((m): m is Media => Boolean(m?.url))
  const cover = asMedia(p.coverImage) ?? gallery[0] ?? null
  const rest = gallery.filter((m) => m.id !== cover?.id)

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />

      {/* breadcrumb */}
      <div className="pt-[20px] px-[40px] pb-0 max-[600px]:px-[16px] text-[13px] text-mute">
        <a className="nav-a" href="/">
          Home
        </a>{' '}
        ›{' '}
        <a className="nav-a" href="/projecten">
          {t('Projecten')}
        </a>{' '}
        › <span className="text-navy font-semibold">{p.title}</span>
      </div>

      {/* header */}
      <div className="pt-[24px] px-[40px] pb-[32px] max-[600px]:px-[16px]">
        {p.productLine && (
          <span className="inline-block bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full mb-[16px]">
            {p.productLine}
          </span>
        )}
        <h1 className="font-display font-black text-[48px] max-[600px]:text-[34px] leading-[1] mb-[12px] tracking-[-1.6px]">{p.title}</h1>
        <div className="flex gap-[18px] flex-wrap text-[14px] font-bold text-gold-dark uppercase tracking-[0.5px] mb-[18px]">
          {p.location && <span>{p.location}</span>}
          {p.year && <span>{p.year}</span>}
        </div>
        {p.intro && <p className="text-[18px] leading-[1.65] text-slate max-w-[720px]">{p.intro}</p>}
      </div>

      {/* cover */}
      {cover?.url && (
        <div className="px-[40px] max-[600px]:px-[16px]">
          <div className="relative rounded-[22px] overflow-hidden bg-navy aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover.url} alt={cover.alt ?? p.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* body text */}
      {p.body && (
        <div className="px-[40px] max-[600px]:px-[16px] pt-[36px] max-w-[760px] rich text-[17px] leading-[1.7] text-slate">
          <Rich field={p.body} />
        </div>
      )}

      {/* bento gallery */}
      {rest.length > 0 && (
        <div className="grid grid-cols-4 max-[820px]:grid-cols-3 max-[600px]:grid-cols-2 grid-flow-dense auto-rows-[190px] max-[600px]:auto-rows-[150px] gap-[14px] px-[40px] max-[600px]:px-[16px] pt-[24px] pb-[40px]">
          {rest.map((m, i) => (
            <div key={m.id} className={`${bento(i)} relative rounded-[16px] overflow-hidden bg-navy`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.url!} alt={m.alt ?? p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {gallery.length === 0 && (
        <p className="px-[40px] max-[600px]:px-[16px] pt-[36px] pb-[40px] text-taupe text-[16px]">{t('Foto’s volgen binnenkort.')}</p>
      )}

      {/* CTA */}
      <div className="bg-gold p-[56px] max-[600px]:p-[26px] my-[24px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] text-center">
        <h2 className="font-display font-black text-[38px] mb-[10px] tracking-[-1.4px] text-navy">{t('Zelf zo’n project?')}</h2>
        <p className="text-[16.5px] text-slate-dark mx-auto mb-[24px] max-w-[520px]">
          {t('Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.')}
        </p>
        <div className="flex gap-[14px] justify-center flex-wrap">
          <a className="btn-n bg-navy text-white font-extrabold text-[16px] py-[17px] px-[32px] rounded-full inline-block" href="/offerte">
            {t('Offerte aanvragen →')}
          </a>
          <a className="btn-y bg-white text-navy font-extrabold text-[16px] py-[17px] px-[32px] rounded-full inline-block" href="/projecten">
            ← {t('Alle projecten')}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
