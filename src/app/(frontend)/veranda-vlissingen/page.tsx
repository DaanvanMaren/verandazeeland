import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = seoMetadata(null, {
  title: 'Veranda kopen in Vlissingen, bestand tegen kustklimaat',
  description:
    "Veranda kopen in Vlissingen? Aluminium Verasol-veranda's, onderhoudsarm en gepoedercoat voor het kustklimaat. Gratis inmeten, showroom op een kwartier.",
  path: '/veranda-vlissingen',
})

export default async function VerandaVlissingenPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-vlissingen')}
      fallbackImage="/uploads/DSC_4586-HDR.jpg"
    />
  )
}
