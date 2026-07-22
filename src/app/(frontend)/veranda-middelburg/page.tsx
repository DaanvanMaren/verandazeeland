import React from 'react'

import { getContent } from '@/content'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = {
  title: 'Veranda kopen in Middelburg | Veranda Zeeland',
  description:
    'Veranda kopen in Middelburg? Veranda Zeeland levert en monteert Verasol-veranda’s op maat, met showroom op 10 minuten in Serooskerke. Gratis inmeten aan huis.',
}

export default async function VerandaMiddelburgPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-middelburg')}
      fallbackImage="/uploads/DJI_20260527082041_0005_D.jpg"
    />
  )
}
