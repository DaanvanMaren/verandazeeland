import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = seoMetadata(null, {
  title: 'Wat kost een veranda? Prijzen vanaf € 1.259',
  description:
    'Wat kost een veranda? Bekijk de vanafprijzen per Verasol-productlijn en de belangrijkste prijsfactoren. Inmeten en montage door ons eigen team inbegrepen.',
  path: '/veranda-prijzen',
})

export default async function VerandaPrijzenPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-prijzen')}
      fallbackImage="/uploads/Profiline_Veenendaal_VS_20250611_423_LR.jpg"
    />
  )
}
