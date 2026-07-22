import React from 'react'

import { getContent } from '@/content'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = {
  title: 'Veranda kopen in Vlissingen | Veranda Zeeland',
  description:
    'Veranda kopen in Vlissingen? Aluminium Verasol-veranda’s, bestand tegen het kustklimaat. Gratis inmeten, montage door eigen team en showroom op een kwartier rijden.',
}

export default async function VerandaVlissingenPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-vlissingen')}
      fallbackImage="/uploads/DSC_4586-HDR.jpg"
    />
  )
}
