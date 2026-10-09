import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = seoMetadata(null, {
  title: 'Veranda laten plaatsen door ons eigen montageteam',
  description:
    'Uw veranda laten plaatsen in Zeeland? Gratis inmeten aan huis en montage door ons eigen team, meestal in één dag. Lees hoe het werkt in vier stappen.',
  path: '/veranda-laten-plaatsen',
})

export default async function VerandaLatenPlaatsenPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-laten-plaatsen')}
      fallbackImage="/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg"
    />
  )
}
