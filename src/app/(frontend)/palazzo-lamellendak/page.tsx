import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'
import { ProductPage } from '../_components/ProductPage'

export const metadata = seoMetadata(null, {
  title: 'Palazzo lamellendak: zelf zon en schaduw regelen',
  description:
    'Het Palazzo lamellendak: draai de lamellen open voor licht of dicht voor schaduw. Gesloten voeren ze regen af naar de goten. Strak, kubistisch design.',
  path: '/palazzo-lamellendak',
})

export default async function PalazzoLamellendakPage() {
  const c = await getContent('palazzo-lamellendak')
  return <ProductPage c={c} slug="palazzo-lamellendak" ombouwHref="/palazzo-sqope" />
}
