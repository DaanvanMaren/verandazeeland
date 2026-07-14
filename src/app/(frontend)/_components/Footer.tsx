import React from 'react'

// Site footer. Structural/navigation — kept as the design markup, reused by
// every page.
const HTML = `
  <div class="fullbleed" style="background:#082a52;color:#9fb3ca;font-size:14px">
    <div class="bar-inner" style="padding:56px 56px 30px">
    <div style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.1)">
      <div><img src="/uploads/logo-1783333745716.png" alt="Veranda Zeeland" style="height:52px;margin-bottom:16px"><p style="line-height:1.7;margin:0;max-width:260px">Specialist in veranda's, tuinkamers en glasschuifwanden voor heel Zeeland.</p></div>
      <div><div style="color:#fff;font-weight:700;margin-bottom:14px">Producten</div><div style="display:flex;flex-direction:column;gap:9px"><a class="nav-a" href="/veranda-s">Veranda's</a><a class="nav-a" href="/tuinkamers">Tuinkamers</a><a class="nav-a" href="/glazen-schuifwanden">Schuifwanden</a><a class="nav-a" href="/zonwering">Zonwering</a><a class="nav-a" href="/accessoires">Opties</a><a class="nav-a" href="/zakelijk">Zakelijk</a></div></div>
      <div><div style="color:#fff;font-weight:700;margin-bottom:14px">Over ons</div><div style="display:flex;flex-direction:column;gap:9px"><a class="nav-a" href="/contact#over-ons">Over ons</a><a class="nav-a" href="/contact#showroom">Showroom</a><a class="nav-a" href="/offerte">Offerte aanvragen</a><a class="nav-a" href="/contact">Contact</a></div></div>
      <div><div style="color:#fff;font-weight:700;margin-bottom:14px">Contact</div><div style="line-height:1.8"><a class="nav-a" href="https://maps.google.com/?q=De+Stekelweie+2,+4353+RX+Serooskerke" target="_blank" rel="noopener">De Stekelweie 2<br>4353 RX Serooskerke</a><br><a class="nav-a" href="tel:+31118853055">T: 0118-853055</a><br><a class="nav-a" href="mailto:info@verandazeeland.nl">E: info@verandazeeland.nl</a></div><div style="margin-top:12px;color:#ffcf33">★★★★★ 9,2 · 327 reviews</div></div>
    </div>
    <div style="padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:12.5px;opacity:.7"><span>© 2019–2026 Veranda Zeeland</span><span>Algemene voorwaarden · Privacy · Disclaimer</span></div>
    </div>
  </div>
`

export function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />
}
