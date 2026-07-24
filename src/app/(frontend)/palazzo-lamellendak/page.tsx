import React from 'react'

import { getContent } from '@/content'
import { ProductPage } from '../_components/ProductPage'

export const metadata = {
  title: 'Palazzo Lamellendak — roterend lamellendak | Veranda Zeeland',
  description:
    'Het Palazzo lamellendak: draai de lamellen open of dicht en doseer zelf zon en schaduw. Waterdicht bij regen, met natuurlijke ventilatie en een strak design.',
}

export default async function PalazzoLamellendakPage() {
  const c = await getContent('palazzo-lamellendak')
  return <ProductPage c={c} slug="palazzo-lamellendak" ombouwHref="/palazzo-sqope" />
}
