import React from 'react'

import { getContent } from '@/content'
import { ProductPage } from '../_components/ProductPage'

export const metadata = {
  title: 'Pext houten veranda — Douglas & lariks | Veranda Zeeland',
  description:
    'De Pext houten veranda combineert robuust Douglas- of larikshout met aluminium beglazingsprofielen. Glas of polycarbonaat, geïsoleerd of ongeïsoleerd, in meerdere kleuren.',
}

export default async function PextVerandaPage() {
  const c = await getContent('pext-veranda')
  return <ProductPage c={c} ombouwHref="/pext-lichtstraat" />
}
