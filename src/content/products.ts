// Registry of product pages for the shared "Andere modellen" block. slug = its
// content global; href = its route; category = its brand line. The block on a
// page auto-shows ONLY the other pages in the SAME brand (verasol ↔ verasol,
// palazzo ↔ palazzo, pext ↔ pext). Card image/title/tag are read live from each
// target page's hero fields (heroImage/heroTitle/heroBadge) — see RelatedModels.
// `overview` marks a brand landing page: it uses the category to list its models
// but never appears itself as a card.
export type ProductCategory = 'verasol' | 'palazzo' | 'pext'

export const PRODUCTS: {
  slug: string
  href: string
  category: ProductCategory
  overview?: boolean
}[] = [
  // Verasol
  { slug: 'veranda-greenline', href: '/veranda-greenline', category: 'verasol' },
  { slug: 'veranda-profiline', href: '/veranda-profiline', category: 'verasol' },
  { slug: 'veranda-linea', href: '/veranda-linea', category: 'verasol' },
  { slug: 'veranda-cube', href: '/veranda-cube', category: 'verasol' },
  { slug: 'veranda-pergola', href: '/veranda-pergola', category: 'verasol' },
  // Palazzo
  { slug: 'veranda-palazzo', href: '/veranda-palazzo', category: 'palazzo', overview: true },
  { slug: 'palazzo-sqope', href: '/palazzo-sqope', category: 'palazzo' },
  { slug: 'palazzo-lamellendak', href: '/palazzo-lamellendak', category: 'palazzo' },
  // Pext
  { slug: 'veranda-pext', href: '/veranda-pext', category: 'pext', overview: true },
  { slug: 'pext-veranda', href: '/pext-veranda', category: 'pext' },
  { slug: 'pext-lichtstraat', href: '/pext-lichtstraat', category: 'pext' },
]
