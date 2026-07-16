import React from 'react'

// Site footer. Structural/navigation markup, reused by every page. Layout/colour
// via Tailwind utilities; .nav-a keeps its hover transition from styles.css.
export function Footer() {
  return (
    <div className="fullbleed bg-navy text-steel text-[14px]">
      <div className="bar-inner pt-[56px] px-[56px] pb-[30px]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] max-[820px]:grid-cols-1 gap-[40px] pb-[40px] border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <img src="/uploads/logo-1783333745716.png" alt="Veranda Zeeland" className="h-[52px] mb-[16px]" />
            <p className="leading-[1.7] max-w-[260px]">
              Specialist in veranda's, tuinkamers en glasschuifwanden voor heel Zeeland.
            </p>
          </div>
          <div>
            <div className="text-white font-bold mb-[14px]">Producten</div>
            <div className="flex flex-col gap-[9px]">
              <a className="nav-a" href="/veranda-s">Veranda's</a>
              <a className="nav-a" href="/tuinkamers">Tuinkamers</a>
              <a className="nav-a" href="/glazen-schuifwanden">Schuifwanden</a>
              <a className="nav-a" href="/zonwering">Zonwering</a>
              <a className="nav-a" href="/accessoires">Opties</a>
              <a className="nav-a" href="/zakelijk">Zakelijk</a>
            </div>
          </div>
          <div>
            <div className="text-white font-bold mb-[14px]">Over ons</div>
            <div className="flex flex-col gap-[9px]">
              <a className="nav-a" href="/contact#over-ons">Over ons</a>
              <a className="nav-a" href="/contact#showroom">Showroom</a>
              <a className="nav-a" href="/offerte">Offerte aanvragen</a>
              <a className="nav-a" href="/contact">Contact</a>
            </div>
          </div>
          <div>
            <div className="text-white font-bold mb-[14px]">Contact</div>
            <div className="leading-[1.8]">
              <a className="nav-a" href="https://maps.google.com/?q=De+Stekelweie+2,+4353+RX+Serooskerke" target="_blank" rel="noopener">
                De Stekelweie 2<br />4353 RX Serooskerke
              </a>
              <br />
              <a className="nav-a" href="tel:+31118853055">T: 0118-853055</a>
              <br />
              <a className="nav-a" href="mailto:info@verandazeeland.nl">E: info@verandazeeland.nl</a>
            </div>
            <div className="mt-[12px] text-gold">★★★★★ 9,2 · 327 reviews</div>
          </div>
        </div>
        <div className="pt-[22px] flex justify-between flex-wrap gap-[8px] text-[12.5px] opacity-70">
          <span>© 2019–2026 Veranda Zeeland</span>
          <span>Algemene voorwaarden · Privacy · Disclaimer</span>
        </div>
      </div>
    </div>
  )
}
