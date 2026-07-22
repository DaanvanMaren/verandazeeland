import React from 'react'

import { getContent } from '@/content'

import { SeoLanding } from '../_components/SeoLanding'

export const metadata = {
  title: 'Veranda vergunning nodig? De regels op een rij | Veranda Zeeland',
  description:
    'Heeft u een omgevingsvergunning nodig voor een veranda? Lees wanneer u vergunningsvrij mag bouwen, wanneer niet, en hoe Veranda Zeeland u helpt bij de aanvraag.',
}

export default async function VerandaVergunningPage() {
  return (
    <SeoLanding
      c={await getContent('veranda-vergunning')}
      fallbackImage="/uploads/Cube_Zaltbommel_VS_20260511_014_LR.jpg"
    />
  )
}
