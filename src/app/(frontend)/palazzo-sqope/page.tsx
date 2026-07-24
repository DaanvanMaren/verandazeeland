import React from 'react'

import { getContent } from '@/content'
import { ProductPage } from '../_components/ProductPage'

export const metadata = {
  title: 'Palazzo Sqope — kubistische veranda met glasdak | Veranda Zeeland',
  description:
    'De Palazzo Sqope: een strakke kubistische terrasoverkapping met glasdak, grote glasoppervlakken en een vrije overspanning tot 7 meter. Aanbouw of vrijstaand.',
}

export default async function PalazzoSqopePage() {
  const c = await getContent('palazzo-sqope')
  return <ProductPage c={c} ombouwHref="/palazzo-lamellendak" />
}
