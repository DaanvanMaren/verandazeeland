// Single source of truth for the site's menu tree. Drives <Breadcrumbs />.
// Keep in sync with Header.tsx (its nav JSX has per-item styling so it isn't
// generated from this yet — ponytail: dedupe Header into this list if it drifts).
export type NavNode = { label: string; href: string; children?: NavNode[] }

export const nav: NavNode[] = [
  {
    label: "Veranda's",
    href: '/veranda-s',
    children: [
      { label: 'Greenline', href: '/veranda-greenline' },
      { label: 'Profiline', href: '/veranda-profiline' },
      { label: 'Linea', href: '/veranda-linea' },
      { label: 'Cube', href: '/veranda-cube' },
      { label: 'Pergola-overkapping', href: '/veranda-pergola' },
    ],
  },
  {
    label: 'Tuinkamers',
    href: '/tuinkamers',
    children: [
      { label: 'Tuinkamer met hellend dak', href: '/tuinkamer-hellend-dak' },
      { label: 'Tuinkamer met vlak dak', href: '/tuinkamer-vlak-dak' },
    ],
  },
  {
    label: 'Schuifwanden',
    href: '/glazen-schuifwanden',
    children: [
      { label: 'Glazen schuifwanden', href: '/schuifwand-glas' },
      { label: 'Aluminium schuifpui', href: '/schuifwand-aluminium' },
      { label: 'Lamellen schuifwanden', href: '/schuifwand-lamellen' },
      { label: 'Steellook schuifwanden', href: '/schuifwand-steellook' },
    ],
  },
  {
    label: 'Zonwering',
    href: '/zonwering',
    children: [
      { label: 'Onderdakzonwering', href: '/zonwering-onderdak' },
      { label: 'Bovendakzonwering', href: '/zonwering-bovendak' },
      { label: 'Screens', href: '/zonwering-screens' },
      { label: 'Uitvalschermen', href: '/zonwering-uitvalschermen' },
    ],
  },
  {
    label: 'Opties',
    href: '/accessoires',
    children: [
      { label: 'Voor- en zijwanden', href: '/optie-wanden' },
      { label: 'Dakbedekking', href: '/optie-dakbedekking' },
      { label: 'Ledverlichting', href: '/optie-ledverlichting' },
      { label: 'Fundering', href: '/optie-fundering' },
      { label: 'Onderhoudsproducten', href: '/optie-onderhoud' },
    ],
  },
  {
    label: 'Zakelijk',
    href: '/zakelijk',
    children: [
      { label: 'Horeca & Leisure', href: '/zakelijk-horeca' },
      { label: 'Kantoren & Commercieel Vastgoed', href: '/zakelijk-kantoren' },
      { label: 'Onderwijs & Scholen', href: '/zakelijk-onderwijs' },
      { label: 'Vakantieparken & Recreatie', href: '/zakelijk-vakantieparken' },
      { label: 'Zorginstellingen', href: '/zakelijk-zorg' },
      { label: 'Projectbouw & Ontwikkeling', href: '/zakelijk-projectbouw' },
    ],
  },
]

// Pages that aren't in the menu but still need a breadcrumb label.
export const extraLabels: Record<string, string> = {
  '/offerte': 'Offerte aanvragen',
  '/contact': 'Contact',
  '/veranda-prijzen': 'Veranda prijzen',
  '/veranda-vergunning': 'Veranda vergunning',
  '/veranda-laten-plaatsen': 'Veranda laten plaatsen',
  '/veranda-middelburg': 'Veranda Middelburg',
  '/veranda-goes': 'Veranda Goes',
  '/veranda-vlissingen': 'Veranda Vlissingen',
}
