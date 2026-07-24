import React from 'react'

import { getContent } from '@/content'
import type { Media } from '@/payload-types'
import { PRODUCTS } from '@/content/products'

import type { ProductContent } from './ProductPage'

const img = (f: (number | null) | Media | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

// Shared "Andere modellen" card block. Layout is fixed here; content is filled
// automatically with the OTHER pages in the same category as `slug`. A non-empty
// `override` (page slugs the client picks in Payload) wins over the auto-fill.
// Each card's image/title/subtitle come live from the target page's hero fields
// (heroImage → card image, heroTitle → title, heroBadge → subtitle).
export async function RelatedModels({
  slug,
  title,
  override,
  max = 4,
}: {
  slug: string
  title?: string | null
  override?: (string | null)[] | null
  max?: number
}) {
  const cur = PRODUCTS.find((p) => p.slug === slug)
  const slugs = override?.length
    ? (override.filter(Boolean) as string[])
    : PRODUCTS.filter((p) => p.category === cur?.category && p.slug !== slug)
        .slice(0, max)
        .map((p) => p.slug)

  const cards = (
    await Promise.all(
      slugs.map(async (s) => {
        const p = PRODUCTS.find((x) => x.slug === s)
        if (!p) return null
        const c = (await getContent(s as never)) as unknown as ProductContent
        return { href: p.href, name: c.heroTitle, tag: c.heroBadge ?? '', image: c.heroImage, fallback: c.heroImageFallback ?? '' }
      }),
    )
  ).filter(Boolean) as { href: string; name: string; tag: string; image: ProductContent['heroImage']; fallback: string }[]

  if (!cards.length) return null

  return (
    <div className="pt-[20px] px-[40px] pb-[56px] max-[600px]:px-[16px]">
      <h2 className="font-display font-extrabold text-[28px] mb-[24px] tracking-[-0.8px]">{title}</h2>
      <div className="grid grid-cols-4 max-[820px]:grid-cols-1 gap-[18px]">
        {cards.map((row) => (
          <a key={row.href} className="lift bg-panel rounded-[18px] overflow-hidden shadow-[0_8px_26px_-20px_rgba(8,42,82,0.4)] block" href={row.href}>
            <div className="h-[150px] overflow-hidden bg-navy">
              <img src={img(row.image, row.fallback)} alt={row.name} className="w-full h-full object-cover" />
            </div>
            <div className="py-[18px] px-[20px]">
              <h3 className="font-display font-extrabold text-[18px] mb-[4px]">{row.name}</h3>
              <p className="text-[13.5px] text-taupe m-0">{row.tag}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
