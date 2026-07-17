import React from 'react'
import './styles.css'
import { currentLocale } from '@/content'

// Pages render static design markup (no DB at request time), but the Payload
// admin shares this app, so keep the frontend dynamic (no build-time DB access).
export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Veranda Zeeland · Veranda's, tuinkamers & glaswanden in Serooskerke",
  description:
    "Veranda's, tuinkamers en glasschuifwanden van Duitse topkwaliteit, op maat gemaakt en gemonteerd door Veranda Zeeland in Serooskerke.",
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
      </head>
      <body>{children}</body>
    </html>
  )
}
