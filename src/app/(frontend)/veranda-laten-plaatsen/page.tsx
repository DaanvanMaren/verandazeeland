import React from 'react'

import { getContent } from '@/content'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = {
  title: 'Veranda laten plaatsen — eigen montageteam | Veranda Zeeland',
  description:
    'Uw veranda laten plaatsen in Zeeland? Gratis inmeten aan huis, montage door ons eigen team en meestal binnen één dag geplaatst. Lees hoe het werkt, stap voor stap.',
}

export default async function VerandaLatenPlaatsenPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-laten-plaatsen')}
      fallbackImage="/uploads/Profiline_Ommeren_VS_20260529_237_LR.jpg"
    />
  )
}
