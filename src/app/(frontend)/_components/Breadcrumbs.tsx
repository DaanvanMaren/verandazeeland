'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { extraLabels, nav } from './nav'

// Auto breadcrumbs: derives "Home › parent › current" from the current path
// against the shared nav tree. Drop <Breadcrumbs /> into any page — no props.
export function Breadcrumbs() {
  const path = usePathname()
  if (!path || path === '/') return null

  const trail: { label: string; href?: string }[] = [{ label: 'Home', href: '/' }]

  const top = nav.find((n) => n.href === path)
  const parent = nav.find((n) => n.children?.some((c) => c.href === path))
  const child = parent?.children?.find((c) => c.href === path)

  if (top) {
    trail.push({ label: top.label })
  } else if (parent && child) {
    trail.push({ label: parent.label, href: parent.href }, { label: child.label })
  } else {
    trail.push({ label: extraLabels[path] ?? path.replace(/^\//, '') })
  }

  return (
    <div className="pt-[20px] px-[40px] pb-0 max-[600px]:px-[16px] text-[13px] text-mute">
      {trail.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && ' › '}
          {item.href ? (
            <a className="nav-a" href={item.href}>
              {item.label}
            </a>
          ) : (
            <span className="text-navy font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
