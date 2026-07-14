import React from 'react'

// Site header (utility bar + nav). Structural/navigation — kept as the design
// markup. Reused by every page. Site-wide editable bits (hours, reviews) can
// move to a `site` global later.
const HTML = `
  <div class="fullbleed" style="background:#082a52;color:#c3d4e6;font-size:12.5px">
    <div class="bar-inner topbar-inner" style="display:flex;justify-content:space-between;align-items:center;padding:9px 40px">
      <span>Serooskerke · Showroom di t/m za 10.00–17.00u, bij voorkeur op afspraak</span>
      <div style="display:flex;gap:18px;align-items:center"><span><span style="color:#ffcf33">★★★★★</span> 9,2 / 327 reviews</span><span style="opacity:.4">|</span><span><strong style="color:#fff">NL</strong> · DE</span></div>
    </div>
  </div>
  <div class="fullbleed" style="background:#f6f0e6;position:sticky;top:0;z-index:20;border-bottom:1px solid rgba(8,42,82,.08)">
    <div class="bar-inner navbar-inner" style="display:flex;align-items:center;justify-content:space-between;padding:18px 40px">
      <a href="/"><img src="/uploads/logo-1783333745716.png" alt="Veranda Zeeland" style="height:56px;width:auto;display:block"></a>
      <input type="checkbox" id="navtoggle" class="navtoggle">
      <label for="navtoggle" class="hamburger" aria-label="Menu openen">☰</label>
      <nav class="mainnav" style="display:flex;gap:24px;font-size:15px;font-weight:600;align-items:center">
        <div class="menu-item"><a class="nav-a" href="/veranda-s">Veranda's</a><div class="dropdown"><div class="dropdown-inner"><a href="/veranda-greenline">Greenline</a><a href="/veranda-profiline">Profiline</a><a href="/veranda-linea">Linea</a><a href="/veranda-cube">Cube</a><a href="/veranda-pergola">Pergola-overkapping</a></div></div></div>
        <div class="menu-item"><a class="nav-a" href="/tuinkamers">Tuinkamers</a><div class="dropdown"><div class="dropdown-inner"><a href="/tuinkamer-hellend-dak">Tuinkamer met hellend dak</a><a href="/tuinkamer-vlak-dak">Tuinkamer met vlak dak</a></div></div></div>
        <div class="menu-item"><a class="nav-a" href="/glazen-schuifwanden">Schuifwanden</a><div class="dropdown"><div class="dropdown-inner"><a href="/schuifwand-glas">Glazen schuifwanden</a><a href="/schuifwand-aluminium">Aluminium schuifpui</a><a href="/schuifwand-lamellen">Lamellen schuifwanden</a><a href="/schuifwand-steellook">Steellook schuifwanden</a></div></div></div>
        <div class="menu-item"><a class="nav-a" href="/zonwering">Zonwering</a><div class="dropdown"><div class="dropdown-inner"><a href="/zonwering-onderdak">Onderdakzonwering</a><a href="/zonwering-bovendak">Bovendakzonwering</a><a href="/zonwering-screens">Screens</a><a href="/zonwering-uitvalschermen">Uitvalschermen</a></div></div></div>
        <div class="menu-item"><a class="nav-a" href="/accessoires">Opties</a><div class="dropdown"><div class="dropdown-inner"><a href="/optie-wanden">Voor- en zijwanden</a><a href="/optie-dakbedekking">Dakbedekking</a><a href="/optie-ledverlichting">Ledverlichting</a><a href="/optie-fundering">Fundering</a><a href="/optie-onderhoud">Onderhoudsproducten</a></div></div></div>
        <div class="menu-item"><a class="nav-a" href="/zakelijk">Zakelijk</a><div class="dropdown" style="left:auto;right:-14px"><div class="dropdown-inner"><a href="/zakelijk-horeca">Horeca & Leisure</a><a href="/zakelijk-kantoren">Kantoren & Commercieel Vastgoed</a><a href="/zakelijk-onderwijs">Onderwijs & Scholen</a><a href="/zakelijk-vakantieparken">Vakantieparken & Recreatie</a><a href="/zakelijk-zorg">Zorginstellingen</a><a href="/zakelijk-projectbouw">Projectbouw & Ontwikkeling</a></div></div></div>
      </nav>
      <a class="btn-n" href="/offerte" style="background:#082a52;color:#fff;font-weight:700;font-size:14px;padding:13px 22px;border-radius:999px">Offerte aanvragen</a>
    </div>
  </div>
`

export function Header() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />
}
