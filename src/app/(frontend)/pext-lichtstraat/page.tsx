import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'
import { ProductPage } from '../_components/ProductPage'

export const metadata = seoMetadata(null, {
  title: 'Pext lichtstraat: lessenaardak, zadeldak of daklicht',
  description:
    'Een Pext lichtstraat haalt volop daglicht naar binnen. Kies lessenaardak, zadeldak of daklicht met een dakhelling van 10°, geïsoleerd of ongeïsoleerd.',
  path: '/pext-lichtstraat',
})

export default async function PextLichtstraatPage() {
  const c = await getContent('pext-lichtstraat')
  return <ProductPage c={c} slug="pext-lichtstraat" ombouwHref="/pext-veranda" />
}
