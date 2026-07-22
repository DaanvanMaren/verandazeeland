import React from 'react'

import { getContent } from '@/content'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = {
  title: 'Veranda kopen in Goes | Veranda Zeeland',
  description:
    'Veranda kopen in Goes of op de Bevelanden? Verasol-veranda’s op maat, gratis inmeten aan huis en montage door ons eigen team. Vraag een vrijblijvende offerte aan.',
}

export default async function VerandaGoesPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-goes')}
      fallbackImage="/uploads/Linea_Rijssen_VS_20250922_1273.jpg"
    />
  )
}
