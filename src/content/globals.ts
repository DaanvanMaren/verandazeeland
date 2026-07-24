import type { GlobalConfig } from 'payload'

import { accessoires } from './accessoires'
import { contact } from './contact'
import { glazenSchuifwanden } from './glazen-schuifwanden'
import { home } from './home'
import { optieDakbedekking } from './optie-dakbedekking'
import { optieFundering } from './optie-fundering'
import { optieLedverlichting } from './optie-ledverlichting'
import { optieOnderhoud } from './optie-onderhoud'
import { optieWanden } from './optie-wanden'
import { palazzoLamellendak } from './palazzo-lamellendak'
import { palazzoSqope } from './palazzo-sqope'
import { pextLichtstraat } from './pext-lichtstraat'
import { pextVeranda } from './pext-veranda'
import { schuifwandAluminium } from './schuifwand-aluminium'
import { schuifwandGlas } from './schuifwand-glas'
import { schuifwandLamellen } from './schuifwand-lamellen'
import { schuifwandSteellook } from './schuifwand-steellook'
import { tuinkamerHellendDak } from './tuinkamer-hellend-dak'
import { tuinkamerVlakDak } from './tuinkamer-vlak-dak'
import { tuinkamers } from './tuinkamers'
import { verandaCube } from './veranda-cube'
import { verandaGoes } from './veranda-goes'
import { verandaGreenline } from './veranda-greenline'
import { verandaLatenPlaatsen } from './veranda-laten-plaatsen'
import { verandaLinea } from './veranda-linea'
import { verandaMiddelburg } from './veranda-middelburg'
import { verandaPalazzo } from './veranda-palazzo'
import { verandaPergola } from './veranda-pergola'
import { verandaPext } from './veranda-pext'
import { verandaPrijzen } from './veranda-prijzen'
import { verandaProfiline } from './veranda-profiline'
import { verandaS } from './veranda-s'
import { verandaVergunning } from './veranda-vergunning'
import { verandaVlissingen } from './veranda-vlissingen'
import { zakelijk } from './zakelijk'
import { zakelijkHoreca } from './zakelijk-horeca'
import { zakelijkKantoren } from './zakelijk-kantoren'
import { zakelijkOnderwijs } from './zakelijk-onderwijs'
import { zakelijkProjectbouw } from './zakelijk-projectbouw'
import { zakelijkVakantieparken } from './zakelijk-vakantieparken'
import { zakelijkZorg } from './zakelijk-zorg'
import { zonwering } from './zonwering'
import { zonweringBovendak } from './zonwering-bovendak'
import { zonweringOnderdak } from './zonwering-onderdak'
import { zonweringKnikarmschermen } from './zonwering-knikarmschermen'
import { zonweringRolluiken } from './zonwering-rolluiken'
import { zonweringScreens } from './zonwering-screens'
import { zonweringUitvalschermen } from './zonwering-uitvalschermen'

// Register every content group (= editable page) here.
// payload.config.ts reads this array automatically.
//
// Add a page the easy way:   npm run new:page
// Or by hand: create src/content/<slug>.ts, import it above, add it below,
// then run `npm run generate:types`. See docs/content-fields.md.
//
// Field-level i18n (see localization in payload.config.ts): mark every copy
// field translatable so each gets an nl + de value in /admin. Images (upload)
// stay shared across locales. Done here so the 34 content files stay
// locale-agnostic — no per-field `localized: true` to maintain.
// ponytail: localize by type here instead of editing ~800 fields by hand.
const TRANSLATE = new Set(['text', 'textarea', 'richText', 'array'])
const localize = (g: GlobalConfig): GlobalConfig => ({
  ...g,
  fields: g.fields.map((f) =>
    'name' in f && TRANSLATE.has(f.type) ? { ...f, localized: true } : f,
  ),
})

export const contentGlobals = [
  home,
  verandaS,
  verandaGreenline,
  verandaProfiline,
  verandaLinea,
  verandaCube,
  verandaPergola,
  verandaPalazzo,
  palazzoSqope,
  palazzoLamellendak,
  verandaPext,
  pextVeranda,
  pextLichtstraat,
  tuinkamers,
  tuinkamerHellendDak,
  tuinkamerVlakDak,
  glazenSchuifwanden,
  schuifwandGlas,
  schuifwandAluminium,
  schuifwandLamellen,
  schuifwandSteellook,
  zonwering,
  zonweringOnderdak,
  zonweringBovendak,
  zonweringScreens,
  zonweringUitvalschermen,
  zonweringKnikarmschermen,
  zonweringRolluiken,
  accessoires,
  optieWanden,
  optieDakbedekking,
  optieLedverlichting,
  optieFundering,
  optieOnderhoud,
  zakelijk,
  zakelijkHoreca,
  zakelijkKantoren,
  zakelijkOnderwijs,
  zakelijkVakantieparken,
  zakelijkZorg,
  zakelijkProjectbouw,
  contact,
  verandaPrijzen,
  verandaVergunning,
  verandaLatenPlaatsen,
  verandaMiddelburg,
  verandaGoes,
  verandaVlissingen,
].map(localize)
