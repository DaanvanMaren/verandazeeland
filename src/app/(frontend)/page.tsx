import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'

import { Footer } from './_components/Footer'
import { Header } from './_components/Header'

export const metadata = {
  title: "Veranda Zeeland · Veranda's, tuinkamers & glaswanden in Serooskerke",
}

// url of the uploaded image, or the design fallback shipped in public/uploads.
const img = (f: number | Media | null | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

const cover: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}
const pill: React.CSSProperties = {
  background: '#fff',
  borderRadius: 999,
  padding: '13px 22px',
  fontWeight: 600,
  fontSize: '14.5px',
  boxShadow: '0 4px 14px -8px rgba(8,42,82,.4)',
}
const catCard: React.CSSProperties = {
  position: 'relative',
  borderRadius: 20,
  overflow: 'hidden',
  background: '#082a52',
}
const catLabel: React.CSSProperties = {
  position: 'absolute',
  left: 22,
  bottom: 20,
  color: '#fff',
  fontFamily: 'Archivo',
  fontWeight: 800,
  fontSize: 23,
}
const catOverlay: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg,transparent 45%,rgba(8,42,82,.82))',
}

export default async function HomePage() {
  const c = await getContent('home')

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', background: '#f6f0e6' }}>
      <Header />

      {/* hero */}
      <div style={{ padding: '20px 40px 40px' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: 26,
            overflow: 'hidden',
            minHeight: 580,
            display: 'flex',
            alignItems: 'flex-end',
            background: '#082a52',
          }}
        >
          <img src={img(c.heroImage, '/uploads/foto-water-suppen.jpg')} alt={c.heroTitle} style={cover} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg,rgba(8,42,82,.78) 0%,rgba(8,42,82,.4) 45%,transparent 72%)',
            }}
          />
          <div style={{ position: 'relative', padding: 60, maxWidth: 740, color: '#fff' }}>
            {c.heroBadge && (
              <span
                style={{
                  display: 'inline-block',
                  background: '#ffcf33',
                  color: '#082a52',
                  fontWeight: 800,
                  fontSize: '12.5px',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  padding: '7px 14px',
                  borderRadius: 999,
                  marginBottom: 22,
                }}
              >
                {c.heroBadge}
              </span>
            )}
            <h1
              style={{
                fontFamily: 'Archivo',
                fontWeight: 900,
                fontSize: 74,
                lineHeight: 0.95,
                margin: '0 0 20px',
                letterSpacing: '-2px',
              }}
            >
              {c.heroTitle}
            </h1>
            {c.heroSubtitle && (
              <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 500, margin: '0 0 32px', color: '#e8eef5' }}>
                {c.heroSubtitle}
              </p>
            )}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                className="btn-y"
                href="/veranda-s"
                style={{
                  background: '#ffcf33',
                  color: '#082a52',
                  fontWeight: 800,
                  fontSize: 16,
                  padding: '17px 30px',
                  borderRadius: 999,
                }}
              >
                {c.heroPrimaryCta}
              </a>
              <a
                href="/contact"
                style={{
                  background: 'rgba(255,255,255,.14)',
                  backdropFilter: 'blur(4px)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '17px 30px',
                  borderRadius: 999,
                  border: '1.5px solid rgba(255,255,255,.4)',
                }}
              >
                {c.heroSecondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* usp pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 14,
          padding: '8px 40px 44px',
          justifyContent: 'center',
        }}
      >
        {c.usps?.map((u) => (
          <span key={u.id} style={pill}>
            {u.text}
          </span>
        ))}
        <span
          style={{
            background: '#082a52',
            color: '#ffcf33',
            borderRadius: 999,
            padding: '13px 22px',
            fontWeight: 700,
            fontSize: '14.5px',
          }}
        >
          ★ 9,2 uit 327 reviews
        </span>
      </div>

      {/* category grid (navigation) */}
      <div style={{ padding: '24px 40px 60px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 28,
          }}
        >
          <h2
            style={{
              fontFamily: 'Archivo',
              fontWeight: 800,
              fontSize: 44,
              margin: 0,
              letterSpacing: '-1.5px',
              maxWidth: 640,
              lineHeight: 1.02,
            }}
          >
            {c.categoriesHeading}
          </h2>
          <a className="nav-a" href="/veranda-s" style={{ fontWeight: 700, color: '#0053a1', fontSize: 15, whiteSpace: 'nowrap' }}>
            Alle producten →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridAutoRows: '210px', gap: 16 }}>
          <a className="cat-card lift" href="/veranda-s" style={{ ...catCard, gridRow: 'span 2' }}>
            <img className="cat-img" src="/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg" alt="Veranda's" style={cover} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(8,42,82,.85))' }} />
            <div style={{ position: 'absolute', left: 30, bottom: 28, color: '#fff' }}>
              <span style={{ background: '#ffcf33', color: '#082a52', fontWeight: 800, fontSize: 11, padding: '5px 11px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '.5px' }}>Populair</span>
              <div style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 34, marginTop: 12 }}>Veranda's</div>
              <div style={{ fontSize: 15, opacity: 0.9 }}>Greenline · Profiline · Linea · Cube</div>
            </div>
          </a>
          <a className="cat-card lift" href="/tuinkamers" style={catCard}>
            <img className="cat-img" src="/uploads/DJI_20260527082041_0005_D.jpg" alt="Tuinkamers" style={cover} />
            <div style={catOverlay} />
            <div style={catLabel}>Tuinkamers</div>
          </a>
          <a className="cat-card lift" href="/glazen-schuifwanden" style={catCard}>
            <img className="cat-img" src="/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg" alt="Schuifwanden" style={cover} />
            <div style={catOverlay} />
            <div style={catLabel}>Schuifwanden</div>
          </a>
          <a className="cat-card lift" href="/zonwering" style={catCard}>
            <img className="cat-img" src="/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg" alt="Zonwering" style={cover} />
            <div style={catOverlay} />
            <div style={catLabel}>Zonwering</div>
          </a>
          <a className="cat-card lift" href="/accessoires" style={catCard}>
            <img className="cat-img" src="/uploads/Lamellen_Verasol_tegels02.jpg" alt="Opties" style={cover} />
            <div style={catOverlay} />
            <div style={catLabel}>Opties</div>
          </a>
        </div>
      </div>

      {/* welcome band */}
      <div
        style={{
          background: '#082a52',
          color: '#fff',
          margin: '0 40px',
          borderRadius: 26,
          padding: '60px 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <span style={{ color: '#ffcf33', fontWeight: 800, fontSize: 13, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {c.welcomeLabel}
          </span>
          <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 40, lineHeight: 1.05, margin: '14px 0 20px', letterSpacing: '-1.2px' }}>
            {c.welcomeTitle}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#c9d6e6', margin: '0 0 16px' }}>{c.welcomeText1}</p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#c9d6e6', margin: '0 0 26px' }}>{c.welcomeText2}</p>
          <a className="btn-y" href="/contact" style={{ background: '#ffcf33', color: '#082a52', fontWeight: 800, fontSize: 15, padding: '15px 28px', borderRadius: 999 }}>
            {c.welcomeCta}
          </a>
        </div>
        <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', minHeight: 340, background: '#33547d' }}>
          <img src={img(c.welcomeImage, '/uploads/DJI_20260527082041_0005_D.jpg')} alt={c.welcomeTitle ?? ''} style={cover} />
        </div>
      </div>

      {/* models (navigation) */}
      <div style={{ padding: '64px 40px' }}>
        <h2 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 38, textAlign: 'center', margin: '0 0 6px', letterSpacing: '-1.2px' }}>
          {c.modelsHeading}
        </h2>
        <p style={{ textAlign: 'center', color: '#6b6152', fontSize: '16.5px', margin: '0 0 38px' }}>{c.modelsSub}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {[
            { href: '/veranda-greenline', name: 'Greenline', desc: 'De voordeligste lijn, betaalbaar en strak.', img: '/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg' },
            { href: '/veranda-profiline', name: 'Profiline', desc: 'Veelzijdig, tot 7 meter overspanning.', img: '/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg' },
            { href: '/veranda-linea', name: 'Linea', desc: 'Modern design met een optisch vlak dak.', img: '/uploads/DJI_20260527082041_0005_D.jpg' },
            { href: '/veranda-cube', name: 'Cube', desc: 'Exclusief, kubistisch met vlak dak.', img: '/uploads/Lamellen_Verasol_tegels02.jpg' },
          ].map((m) => (
            <a key={m.href} className="lift" href={m.href} style={{ background: '#fffdf9', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 26px -16px rgba(8,42,82,.4)', display: 'block' }}>
              <div style={{ height: 190, overflow: 'hidden', background: '#082a52' }}>
                <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: 'Archivo', fontWeight: 800, fontSize: 21, margin: '0 0 8px' }}>{m.name}</h3>
                <p style={{ fontSize: '14.5px', color: '#6b6152', lineHeight: 1.6, margin: '0 0 14px' }}>{m.desc}</p>
                <span style={{ fontWeight: 700, color: '#0053a1', fontSize: 14 }}>Ontdek {m.name} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* reviews */}
      <div style={{ padding: '20px 40px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {c.reviews?.map((r) => (
            <div key={r.id} style={{ background: '#fffdf9', borderRadius: 20, padding: 28, boxShadow: '0 8px 26px -18px rgba(8,42,82,.4)' }}>
              <div style={{ color: '#ffcf33', fontSize: 16, marginBottom: 10 }}>★★★★★</div>
              <p style={{ fontSize: '15.5px', lineHeight: 1.65, margin: '0 0 14px', color: '#3a4d63' }}>&ldquo;{r.quote}&rdquo;</p>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{r.author}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          background: '#ffcf33',
          padding: '60px 56px',
          margin: '0 40px 40px',
          borderRadius: 26,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2 style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 42, margin: '0 0 8px', letterSpacing: '-1.5px', color: '#082a52' }}>
            {c.ctaTitle}
          </h2>
          <p style={{ fontSize: 17, color: '#3a4d63', margin: 0, maxWidth: 520 }}>{c.ctaText}</p>
        </div>
        <a className="btn-n" href="/contact" style={{ background: '#082a52', color: '#fff', fontWeight: 800, fontSize: 16, padding: '19px 34px', borderRadius: 999, whiteSpace: 'nowrap' }}>
          {c.ctaButton}
        </a>
      </div>

      <Footer />
    </div>
  )
}
