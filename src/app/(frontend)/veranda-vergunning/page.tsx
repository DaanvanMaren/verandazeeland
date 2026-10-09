import React from 'react'

import { getContent } from '@/content'
import { seoMetadata } from '@/content/seo'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = seoMetadata(null, {
  title: 'Veranda vergunning nodig? De regels op een rij',
  description:
    'Heeft u een omgevingsvergunning nodig voor een veranda? Lees wanneer u vergunningsvrij mag bouwen, wanneer niet, en hoe wij helpen bij de aanvraag.',
  path: '/veranda-vergunning',
})

export default async function VerandaVergunningPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-vergunning')}
      fallbackImage="/uploads/Cube_Zaltbommel_VS_20260511_014_LR.jpg"
    />
  )
}
