import React from 'react'

import { currentLocale, getContent } from '@/content'
import type { Media } from '@/payload-types'
import { PRODUCTS } from '@/content/products'

import { tr } from './i18n'
import type { ProductContent } from './ProductPage'

const img = (f: (number | null) | Media | undefined, fallback: string) =>
  f && typeof f === 'object' && f.url ? f.url : fallback

// Shared "Andere modellen" card block. Fully automatic: it shows the OTHER model
// pages in the same brand as `slug` (verasol/palazzo/pext), and reads each card's
// image, title and tag live from that page's hero fields. The only thing the
// client controls in Payload is on/off via `show` (the showOtherModels checkbox).
export async function RelatedModels({ slug, show = true }: { slug: string; show?: boolean | null }) {
  if (show === false) return null

  const cur = PRODUCTS.find((p) => p.slug === slug)
  if (!cur) return null

  const siblings = PRODUCTS.filter((p) => p.category === cur.category && p.slug !== slug && !p.overview)
  if (!siblings.length) return null

  const locale = await currentLocale()
  const cards = await Promise.all(
    siblings.map(async (p) => {
      const c = (await getContent(p.slug as never)) as unknown as ProductContent
      return { href: p.href, name: c.heroTitle, tag: c.heroBadge ?? '', image: c.heroImage, fallback: c.heroImageFallback ?? '' }
    }),
  )

  // Fit the column count to the number of cards so a single sibling isn't stretched.
  const cols = Math.min(Math.max(cards.length, 2), 4)
  const gridCls = cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-4'

  return (
    <div className="pt-[20px] px-[40px] pb-[56px] max-[600px]:px-[16px]">
      <h2 className="font-display font-extrabold text-[28px] mb-[24px] tracking-[-0.8px]">{tr('Andere modellen', locale)}</h2>
      <div className={`grid ${gridCls} max-[820px]:grid-cols-1 gap-[18px]`}>
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
