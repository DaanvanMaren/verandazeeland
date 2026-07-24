// Registry of veranda product pages that can appear as a card in the shared
// "Andere modellen" block. slug = its content global; href = its route.
// `category` groups the auto-fill: a page's block auto-shows the OTHER pages in
// the same category. Card image/title/subtitle are read live from each target
// page's hero fields (heroImage/heroTitle/heroBadge) — see RelatedModels.
export type ProductCategory = 'veranda'

export const PRODUCTS: { slug: string; href: string; label: string; category: ProductCategory }[] = [
  { slug: 'veranda-greenline', href: '/veranda-greenline', label: 'Greenline', category: 'veranda' },
  { slug: 'veranda-profiline', href: '/veranda-profiline', label: 'Profiline', category: 'veranda' },
  { slug: 'veranda-linea', href: '/veranda-linea', label: 'Linea', category: 'veranda' },
  { slug: 'veranda-cube', href: '/veranda-cube', label: 'Cube', category: 'veranda' },
  { slug: 'veranda-pergola', href: '/veranda-pergola', label: 'Pergola-overkapping', category: 'veranda' },
  { slug: 'palazzo-sqope', href: '/palazzo-sqope', label: 'Palazzo Sqope', category: 'veranda' },
  { slug: 'palazzo-lamellendak', href: '/palazzo-lamellendak', label: 'Palazzo Lamellendak', category: 'veranda' },
  { slug: 'pext-veranda', href: '/pext-veranda', label: 'Pext houten veranda', category: 'veranda' },
  { slug: 'pext-lichtstraat', href: '/pext-lichtstraat', label: 'Pext lichtstraat', category: 'veranda' },
]

// Options for the "otherModels" select field in the content globals.
export const productOptions = PRODUCTS.map((p) => ({ label: p.label, value: p.slug }))
