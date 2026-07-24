import { cookies } from 'next/headers'
import React from 'react'

import { currentLocale } from '@/content'

import { tr } from './i18n'

// Set the visitor's language. getContent() reads this cookie, so switching it
// re-renders every page's content in that locale (see src/content/index.tsx).
async function setLocale(formData: FormData) {
  'use server'
  const l = formData.get('l') === 'de' ? 'de' : 'nl'
  ;(await cookies()).set('locale', l, { path: '/', maxAge: 60 * 60 * 24 * 365 })
}

// Site header (utility bar + nav). Structural/navigation markup, reused by every
// page. Layout/colour come from Tailwind utilities; the interactive bits
// (hover dropdowns, the checkbox mobile-nav) stay on the component classes in
// styles.css (.menu-item/.dropdown/.mainnav/.hamburger/.navtoggle/.nav-a).
// Site-wide editable bits (hours, reviews) can move to a `site` global later.
export async function Header() {
  const locale = await currentLocale()
  const t = (s: string) => tr(s, locale)
  return (
    <>
      <div className="fullbleed bg-navy text-[#c3d4e6] text-[12.5px]">
        <div className="bar-inner topbar-inner flex justify-between items-center py-[9px] px-[40px]">
          <span>{t('Serooskerke · Showroom di t/m za 10.00–17.00u, bij voorkeur op afspraak')}</span>
          <div className="flex gap-[18px] items-center">
            <span>
              <span className="text-gold">★★★★★</span> 9,2 / 327 {t('reviews')}
            </span>
            <span className="opacity-40">|</span>
            <form action={setLocale} className="flex gap-[6px] items-center">
              <button type="submit" name="l" value="nl" className={locale === 'nl' ? 'text-white font-bold' : 'hover:text-white'}>
                NL
              </button>
              <span className="opacity-40">·</span>
              <button type="submit" name="l" value="de" className={locale === 'de' ? 'text-white font-bold' : 'hover:text-white'}>
                DE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fullbleed bg-cream sticky top-0 z-20 border-b border-[rgba(8,42,82,0.08)]">
        <div className="bar-inner navbar-inner flex items-center justify-between py-[18px] px-[40px]">
          <a href="/">
            <img src="/uploads/logo-1783333745716.png" alt="Veranda Zeeland" className="h-[56px] w-auto block" />
          </a>
          <input type="checkbox" id="navtoggle" className="navtoggle" />
          <label htmlFor="navtoggle" className="hamburger" aria-label="Menu openen">
            ☰
          </label>
          <nav className="mainnav flex gap-[24px] text-[15px] font-semibold items-center">
            <div className="menu-item">
              <a className="nav-a" href="/veranda-s">{t("Veranda's")}</a>
              <div className="dropdown">
                <div className="dropdown-inner">
                  <a href="/veranda-greenline">Greenline</a>
                  <a href="/veranda-profiline">Profiline</a>
                  <a href="/veranda-linea">Linea</a>
                  <a href="/veranda-cube">Cube</a>
                  <a href="/veranda-pergola">{t('Pergola-overkapping')}</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a className="nav-a" href="/tuinkamers">{t('Tuinkamers')}</a>
              <div className="dropdown">
                <div className="dropdown-inner">
                  <a href="/tuinkamer-hellend-dak">{t('Tuinkamer met hellend dak')}</a>
                  <a href="/tuinkamer-vlak-dak">{t('Tuinkamer met vlak dak')}</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a className="nav-a" href="/glazen-schuifwanden">{t('Schuifwanden')}</a>
              <div className="dropdown">
                <div className="dropdown-inner">
                  <a href="/schuifwand-glas">{t('Glazen schuifwanden')}</a>
                  <a href="/schuifwand-aluminium">{t('Aluminium schuifpui')}</a>
                  <a href="/schuifwand-lamellen">{t('Lamellen schuifwanden')}</a>
                  <a href="/schuifwand-steellook">{t('Steellook schuifwanden')}</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a className="nav-a" href="/zonwering">{t('Zonwering')}</a>
              <div className="dropdown">
                <div className="dropdown-inner">
                  <a href="/zonwering-onderdak">{t('Onderdakzonwering')}</a>
                  <a href="/zonwering-bovendak">{t('Bovendakzonwering')}</a>
                  <a href="/zonwering-screens">Screens</a>
                  <a href="/zonwering-uitvalschermen">{t('Uitvalschermen')}</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a className="nav-a" href="/accessoires">{t('Opties')}</a>
              <div className="dropdown">
                <div className="dropdown-inner">
                  <a href="/optie-wanden">{t('Voor- en zijwanden')}</a>
                  <a href="/optie-dakbedekking">{t('Dakbedekking')}</a>
                  <a href="/optie-ledverlichting">{t('Ledverlichting')}</a>
                  <a href="/optie-fundering">{t('Fundering')}</a>
                  <a href="/optie-onderhoud">{t('Onderhoudsproducten')}</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a className="nav-a" href="/zakelijk">{t('Zakelijk')}</a>
              {/* right-aligned so the wide submenu doesn't overflow the viewport;
                  inline style beats the unlayered .dropdown rule's left offset */}
              <div className="dropdown" style={{ left: 'auto', right: -14 }}>
                <div className="dropdown-inner">
                  <a href="/zakelijk-horeca">{t('Horeca & Leisure')}</a>
                  <a href="/zakelijk-kantoren">{t('Kantoren & Commercieel Vastgoed')}</a>
                  <a href="/zakelijk-onderwijs">{t('Onderwijs & Scholen')}</a>
                  <a href="/zakelijk-vakantieparken">{t('Vakantieparken & Recreatie')}</a>
                  <a href="/zakelijk-zorg">{t('Zorginstellingen')}</a>
                  <a href="/zakelijk-projectbouw">{t('Projectbouw & Ontwikkeling')}</a>
                </div>
              </div>
            </div>
            <div className="menu-item">
              <a className="nav-a" href="/projecten">{t('Projecten')}</a>
            </div>
          </nav>
          <a className="btn-n bg-navy text-white font-bold text-[14px] py-[13px] px-[22px] rounded-full" href="/offerte">
            {t('Offerte aanvragen')}
          </a>
        </div>
      </div>
    </>
  )
}
