import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'
import { ProductPage } from '../_components/ProductPage'

export const metadata = seoMetadata(null, {
  title: 'Palazzo Sqope: kubistische veranda met glasdak',
  description:
    'De Palazzo Sqope is een kubistische terrasoverkapping met een strak glasdak en grote glasoppervlakken. Tot 7 meter breed, met vrij zicht op de tuin.',
  path: '/palazzo-sqope',
})

export default async function PalazzoSqopePage() {
  const c = await getContent('palazzo-sqope')
  return <ProductPage c={c} slug="palazzo-sqope" ombouwHref="/palazzo-lamellendak" />
}
