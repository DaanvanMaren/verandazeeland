import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = seoMetadata(null, {
  title: 'Veranda kopen in Middelburg en op Walcheren',
  description:
    "Veranda kopen in Middelburg? Veranda Zeeland levert en monteert Verasol-veranda's op maat, met showroom op 10 minuten in Serooskerke. Gratis inmeten.",
  path: '/veranda-middelburg',
})

export default async function VerandaMiddelburgPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-middelburg')}
      fallbackImage="/uploads/DJI_20260527082041_0005_D.jpg"
    />
  )
}
