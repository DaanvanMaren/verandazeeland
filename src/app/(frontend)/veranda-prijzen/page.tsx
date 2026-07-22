import React from 'react'

import { getContent } from '@/content'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = {
  title: 'Wat kost een veranda? Prijzen vanaf € 1.259 | Veranda Zeeland',
  description:
    'Wat kost een veranda? Bekijk de vanafprijzen per Verasol-productlijn, de belangrijkste prijsfactoren en wat er standaard is inbegrepen — inclusief inmeten en montage.',
}

export default async function VerandaPrijzenPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-prijzen')}
      fallbackImage="/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg"
    />
  )
}
