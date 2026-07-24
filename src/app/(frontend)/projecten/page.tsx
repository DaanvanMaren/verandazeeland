import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { currentLocale } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Breadcrumbs } from '../_components/Breadcrumbs'
import { Header } from '../_components/Header'
import { tr } from '../_components/i18n'

export const metadata = {
  title: 'Projecten — uitgevoerde veranda’s & tuinkamers | Veranda Zeeland',
  description:
    'Bekijk uitgevoerde projecten van Veranda Zeeland: veranda’s, tuinkamers en overkappingen in heel Zeeland. Greenline, Profiline, Linea en Cube op maat gemaakt en gemonteerd.',
}

const img = (m: number | Media | null | undefined, fallback: string) =>
  m && typeof m === 'object' && m.url ? m.url : fallback

export default async function ProjectenPage() {
  const locale = await currentLocale()
  const t = (s: string) => tr(s, locale)
  const payload = await getPayload({ config: await config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: { published: { equals: true } },
    sort: '-createdAt',
    depth: 1,
    limit: 100,
    locale,
  })

  return (
    <div className="max-w-[1280px] mx-auto bg-cream">
      <Header />
      <Breadcrumbs />

      {/* hero */}
      <div className="pt-[24px] px-[40px] pb-[40px] max-[600px]:px-[16px]">
        <span className="inline-block bg-gold text-navy font-extrabold text-[12px] tracking-[1px] uppercase py-[6px] px-[13px] rounded-full mb-[20px]">
          {t('Onze projecten')}
        </span>
        <h1 className="font-display font-black text-[56px] max-[600px]:text-[38px] leading-[0.98] mb-[20px] tracking-[-1.8px]">
          {t('Uitgevoerde projecten')}
        </h1>
        <p className="text-[18px] leading-[1.65] text-slate max-w-[720px]">
          {t(
            'Een greep uit de veranda’s, tuinkamers en overkappingen die wij in heel Zeeland en daarbuiten realiseerden. Volledig op maat, inclusief inmeten en montage door ons eigen team.',
          )}
        </p>
      </div>

      {/* grid */}
      <div className="px-[40px] pb-[56px] max-[600px]:px-[16px] bg-white pt-[40px]">
        {projects.length === 0 ? (
          <p className="text-taupe text-[16px]">{t('Binnenkort meer projecten.')}</p>
        ) : (
          <div className="grid grid-cols-3 max-[820px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[22px]">
            {projects.map((p) => {
              const cover = img(p.coverImage ?? p.images?.[0], '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg')
              return (
                <a
                  key={p.id}
                  className="lift bg-panel rounded-[20px] overflow-hidden shadow-[0_8px_26px_-18px_rgba(8,42,82,0.4)] flex flex-col"
                  href={`/projecten/${p.slug}`}
                >
                  <div className="relative h-[220px] overflow-hidden bg-navy">
                    {p.productLine && (
                      <span className="absolute top-[16px] left-[16px] z-[1] bg-gold text-navy font-extrabold text-[11px] py-[5px] px-[11px] rounded-full uppercase tracking-[0.5px]">
                        {p.productLine}
                      </span>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cover} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-[24px] flex flex-col flex-1">
                    <h2 className="font-display font-extrabold text-[22px] tracking-[-0.5px] mb-[6px]">{p.title}</h2>
                    {p.location && <div className="font-bold text-[13px] text-gold-dark uppercase tracking-[0.5px] mb-[12px]">{p.location}</div>}
                    <span className="font-bold text-brand-blue text-[14.5px] mt-auto">{t('Bekijk project')} →</span>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gold p-[56px] max-[600px]:p-[26px] mb-[40px] mx-[40px] max-[600px]:mx-[16px] rounded-[26px] text-center">
        <h2 className="font-display font-black text-[38px] mb-[10px] tracking-[-1.4px] text-navy">{t('Zelf zo’n project?')}</h2>
        <p className="text-[16.5px] text-slate-dark mx-auto mb-[24px] max-w-[520px]">
          {t('Vraag vrijblijvend een offerte op maat aan of kom langs in onze showroom in Serooskerke.')}
        </p>
        <a className="btn-n bg-navy text-white font-extrabold text-[16px] py-[17px] px-[32px] rounded-full inline-block" href="/offerte">
          {t('Offerte aanvragen →')}
        </a>
      </div>

      <Footer />
    </div>
  )
}
