import type { Metadata } from 'next'
import React from 'react'
import './styles.css'
import { currentLocale } from '@/content'
import { siteUrl } from '@/content/seo'

// Pages render static design markup (no DB at request time), but the Payload
// admin shares this app, so keep the frontend dynamic (no build-time DB access).
export const dynamic = 'force-dynamic'

const BASE = 'https://www.verandazeeland.nl'

export const metadata: Metadata = {
  // SITE_URL (het echte domein) of de Railway-URL; canonical per pagina via seoMetadata().
  metadataBase: siteUrl,
  title: {
    default: "Veranda Zeeland | Veranda's & tuinkamers op maat in Zeeland",
    template: '%s | Veranda Zeeland',
  },
  description:
    "Veranda's, tuinkamers en glasschuifwanden van Duitse topkwaliteit, op maat gemaakt en gemonteerd door Veranda Zeeland in Serooskerke.",
  openGraph: {
    siteName: 'Veranda Zeeland',
    type: 'website',
    locale: 'nl_NL',
    images: ['/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg'],
  },
}

// LocalBusiness structured data — NAP identical to the footer.
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Veranda Zeeland',
  url: BASE,
  telephone: '+31118853055',
  email: 'info@verandazeeland.nl',
  image: `${BASE}/uploads/Profiline_Ommeren_VS_20260529_003_LR.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'De Stekelweie 2',
    postalCode: '4353 RX',
    addressLocality: 'Serooskerke',
    addressRegion: 'Zeeland',
    addressCountry: 'NL',
  },
  openingHours: 'Tu-Sa 10:00-17:00',
  areaServed: 'Zeeland',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={await currentLocale()}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
