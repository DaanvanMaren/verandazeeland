import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'
import { ProductPage } from '../_components/ProductPage'

export const metadata = seoMetadata(null, {
  title: 'Pext houten veranda van Douglas- of larikshout',
  description:
    'De Pext houten veranda combineert Douglas- of larikshout met slanke aluminium beglazingsprofielen. Met glas of polycarbonaat, geïsoleerd of ongeïsoleerd.',
  path: '/pext-veranda',
})

export default async function PextVerandaPage() {
  const c = await getContent('pext-veranda')
  return <ProductPage c={c} slug="pext-veranda" ombouwHref="/pext-lichtstraat" />
}
