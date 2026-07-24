import React from 'react'

import { getContent } from '@/content'
import { ProductPage } from '../_components/ProductPage'

export const metadata = {
  title: 'Pext lichtstraat — lessenaardak, zadeldak & daklicht | Veranda Zeeland',
  description:
    'De Pext lichtstraat haalt volop daglicht naar binnen. Verkrijgbaar als lessenaardak, zadeldak of daklicht, geïsoleerd of ongeïsoleerd, met een dakhelling van 10°.',
}

export default async function PextLichtstraatPage() {
  const c = await getContent('pext-lichtstraat')
  return <ProductPage c={c} slug="pext-lichtstraat" ombouwHref="/pext-veranda" />
}
