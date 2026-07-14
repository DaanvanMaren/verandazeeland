import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'

export const metadata = {
  title: 'Tuinkamer met vlak dak | Veranda Zeeland',
}

const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover: React.CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

export default async function TuinkamerVlakDakPage() {
  const c = await getContent('tuinkamer-vlak-dak')

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', background: '#f6f0e6' }}>
      <Header />

      <div style={{ padding: '20px 40px 0', fontSize: 13, color: '#8a94a0' }}>
        <a className="nav-a" href="/">Home</a> ›{' '}
        <a className="nav-a" href="/tuinkamers">Tuinkamers</a> ›{' '}
        <span style={{ color: '#082a52', fontWeight: 600 }}>Vlak dak</span>
      </div>

      {/* page hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, padding: '24px 40px 56px', alignItems: 'center' }}>
        <div>
          {c.heroBadge && (
            <span style={{ display: 'inline-block', background: '#ffcf33', color: '#082a52', fontWeight: 800, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', padding: '6px 13px', borderRadius: 999, marginBottom: 20 }}>
              {c.heroBadge}
            </span>
          )}
          <h1 style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 52, lineHeight: 1, margin: '0 0 20px', letterSpacing: '-1.7px' }}>{c.heroTitle}</h1>
          {c.heroText && <p style={{ fontSize: 18, lineHeight: 1.65, color: '#42586c', margin: '0 0 28px' }}>{c.heroText}</p>}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a className="btn-n" href="/contact" style={{ background: '#082a52', color: '#fff', fontWeight: 700, fontSize: 15, padding: '15px 26px', borderRadius: 999 }}>{c.heroPrimaryCta}</a>
            <a className="btn-y" href="/contact" style={{ background: '#ffcf33', color: '#082a52', fontWeight: 800, fontSize: 15, padding: '15px 26px', borderRadius: 999 }}>{c.heroSecondaryCta}</a>
          </div>
        </div>
        <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', minHeight: 440, background: '#082a52' }}>
          <img src={img(c.heroImage, c.heroImageFallback ?? '')} alt={c.heroTitle} style={cover} />
        </div>
      </div>

      {/* intro */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, padding: '20px 40px 56px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 32, margin: '0 0 16px', letterSpacing: '-1px' }}>{c.introTitle}</h2>
          {c.introText && <p style={{ fontSize: '16.5px', lineHeight: 1.75, color: '#42586c', margin: '0 0 18px' }}>{c.introText}</p>}
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '15.5px', color: '#42586c' }}>
            {c.introPoints?.map((row) => (
              <li key={row.id}>✓ {row.text}</li>
            ))}
          </ul>
        </div>
        <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', minHeight: 360, background: '#082a52' }}>
          <img src={img(c.introImage, c.introImageFallback ?? '')} alt={c.introTitle ?? ''} style={cover} />
        </div>
      </div>

      {/* kenmerken & voordelen */}
      <div style={{ padding: '40px 40px 56px', background: '#efe6d4' }}>
        <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 32, margin: '0 0 30px', letterSpacing: '-1px' }}>{c.featuresTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {c.features?.map((row) => (
            <div key={row.id} className="lift" style={{ background: '#fffdf9', borderRadius: 18, padding: 26, boxShadow: '0 8px 26px -20px rgba(8,42,82,.4)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#ffcf33', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 900, color: '#082a52' }}>✓</div>
              <h3 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 17, margin: '0 0 8px' }}>{row.title}</h3>
              <p style={{ fontSize: '14.5px', color: '#6b6152', lineHeight: 1.6, margin: 0 }}>{row.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* gallery */}
      <div style={{ padding: '56px 40px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 28, margin: '0 0 24px', letterSpacing: '-.8px' }}>{c.galleryTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridAutoRows: 220, gap: 16 }}>
          {c.gallery?.map((row, i) => (
            <div
              key={row.id}
              style={{
                ...(i === 0 ? { gridRow: 'span 2' } : {}),
                ...(i === 3 ? { gridColumn: 'span 2' } : {}),
                position: 'relative',
                borderRadius: 18,
                overflow: 'hidden',
                background: '#082a52',
              }}
            >
              <img src={img(row.image, row.fallback ?? '')} alt="Project" style={cover} />
            </div>
          ))}
        </div>
      </div>

      {/* alternatief type band */}
      <div style={{ background: '#082a52', color: '#fff', margin: '0 40px 56px', borderRadius: 26, padding: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span style={{ color: '#ffcf33', fontWeight: 800, fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>{c.altLabel}</span>
          <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 32, margin: '12px 0 14px', letterSpacing: '-1px' }}>{c.altTitle}</h2>
          <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#c9d6e6', margin: '0 0 24px' }}>{c.altText}</p>
          <a className="btn-y" href="/tuinkamer-hellend-dak" style={{ background: '#ffcf33', color: '#082a52', fontWeight: 800, fontSize: 15, padding: '14px 26px', borderRadius: 999, display: 'inline-block' }}>{c.altCta}</a>
        </div>
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, background: '#33547d' }}>
          <img src={img(c.altImage, c.altImageFallback ?? '')} alt={c.altTitle ?? ''} style={cover} />
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#ffcf33', padding: 56, margin: '0 40px 40px', borderRadius: 26, textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 36, margin: '0 0 10px', letterSpacing: '-1.4px', color: '#082a52' }}>{c.ctaTitle}</h2>
        <p style={{ fontSize: '16.5px', color: '#3a4d63', margin: '0 auto 24px', maxWidth: 520 }}>{c.ctaText}</p>
        <a className="btn-n" href="/contact" style={{ background: '#082a52', color: '#fff', fontWeight: 800, fontSize: 16, padding: '17px 32px', borderRadius: 999, display: 'inline-block' }}>{c.ctaButton}</a>
      </div>

      <Footer />
    </div>
  )
}
