import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = seoMetadata(null, {
  title: 'Veranda kopen in Goes en op de Bevelanden',
  description:
    "Veranda kopen in Goes of op de Bevelanden? Verasol-veranda's op maat, met gratis inmeten aan huis en montage door ons eigen team. Vraag een offerte aan.",
  path: '/veranda-goes',
})

export default async function VerandaGoesPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-goes')}
      fallbackImage="/uploads/Linea_Rijssen_VS_20250922_1273.jpg"
    />
  )
}
