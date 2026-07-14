import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'

export const metadata = { title: 'Contact & offerte | Veranda Zeeland' }

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover: React.CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const infoLabel: React.CSSProperties = { color: '#ffcf33', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 4 }

const chip: React.CSSProperties = { background: '#fff', borderRadius: 999, padding: '11px 20px', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 14px -10px rgba(8,42,82,.5)' }

export default async function ContactPage() {
  const c = await getContent('contact')

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', background: '#f6f0e6' }}>
      <Header />

      <div style={{ padding: '20px 40px 0', fontSize: 13, color: '#8a94a0' }}>
        <a className="nav-a" href="/">Home</a> › <span style={{ color: '#082a52', fontWeight: 600 }}>Contact</span>
      </div>

      {/* hero over ons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, padding: '24px 40px 56px', alignItems: 'center' }}>
        <div>
          {c.heroBadge && (
            <span style={{ display: 'inline-block', background: '#ffcf33', color: '#082a52', fontWeight: 800, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', padding: '6px 13px', borderRadius: 999, marginBottom: 20 }}>
              {c.heroBadge}
            </span>
          )}
          <h1 style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 54, lineHeight: 0.98, margin: '0 0 20px', letterSpacing: '-1.8px' }}>{c.heroTitle}</h1>
          {c.heroText && <p style={{ fontSize: 18, lineHeight: 1.65, color: '#42586c', margin: '0 0 20px' }}>{c.heroText}</p>}
          <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', fontSize: 15 }}>
            {c.stats?.map((row) => (
              <div key={row.id}>
                <div style={{ fontWeight: 800, fontFamily: 'Archivo', fontSize: 26 }}>{row.value}</div>
                <div style={{ color: '#6b6152' }}>{row.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', minHeight: 400, background: '#082a52' }}>
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} style={cover} />
        </div>
      </div>

      {/* contact + form */}
      <div id="offerte" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 0, background: '#fff', margin: '0 40px', borderRadius: 26, overflow: 'hidden' }}>
        {/* info */}
        <div style={{ background: '#082a52', color: '#fff', padding: '48px 44px' }}>
          <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 28, margin: '0 0 24px', letterSpacing: '-.6px' }}>{c.contactHeading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: '15.5px', lineHeight: 1.6 }}>
            <div>
              <div style={infoLabel}>{c.addressLabel}</div>
              {c.addressLine1}<br />{c.addressLine2}
            </div>
            <div>
              <div style={infoLabel}>{c.phoneLabel}</div>
              {c.phone}
            </div>
            <div>
              <div style={infoLabel}>{c.emailLabel}</div>
              {c.email}
            </div>
            <div>
              <div style={infoLabel}>{c.hoursLabel}</div>
              {c.hoursDays}<br />{c.hoursTime}<br /><span style={{ color: '#9fb3ca' }}>{c.hoursNote}</span>
            </div>
          </div>
          <div style={{ marginTop: 30, borderRadius: 14, overflow: 'hidden', minHeight: 150, position: 'relative', background: '#33547d' }}>
            <img src={img(c.contactImage, c.contactImageFallback ?? '')} alt={c.contactHeading ?? ''} style={cover} />
          </div>
        </div>
        {/* form */}
        <div style={{ padding: '48px 44px' }}>
          <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 28, margin: '0 0 6px', letterSpacing: '-.6px' }}>{c.formHeading}</h2>
          {c.formIntro && <p style={{ color: '#6b6152', fontSize: 15, margin: '0 0 26px' }}>{c.formIntro}</p>}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div><label>{c.formFirstName}</label><input type="text" placeholder="Uw voornaam" /></div>
            <div><label>{c.formLastName}</label><input type="text" placeholder="Uw achternaam" /></div>
            <div><label>{c.formEmail}</label><input type="email" placeholder="naam@voorbeeld.nl" /></div>
            <div><label>{c.formPhone}</label><input type="tel" placeholder="06 - ..." /></div>
            <div style={{ gridColumn: 'span 2' }}>
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
            <div style={{ gridColumn: 'span 2' }}><label>{c.formMessage}</label><textarea rows={4} placeholder="Vertel ons over uw wensen, afmetingen of situatie..." /></div>
          </div>
          <button className="btn-n" style={{ marginTop: 20, background: '#082a52', color: '#fff', fontWeight: 800, fontSize: 15, padding: '15px 30px', border: 'none', borderRadius: 999, cursor: 'pointer', fontFamily: 'inherit' }}>{c.formButton}</button>
          {c.formDisclaimer && <p style={{ fontSize: '12.5px', color: '#9a9078', margin: '14px 0 0' }}>{c.formDisclaimer}</p>}
        </div>
      </div>

      {/* service area */}
      <div style={{ padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 30, margin: '0 0 10px', letterSpacing: '-.8px' }}>{c.serviceHeading}</h2>
        {c.serviceText && <p style={{ color: '#6b6152', fontSize: 16, margin: '0 auto 28px', maxWidth: 560 }}>{c.serviceText}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {c.serviceAreas?.map((row) => (
            <span key={row.id} style={chip}>{row.name}</span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
