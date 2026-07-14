import { accessoires } from './accessoires'
import { contact } from './contact'
import { glazenSchuifwanden } from './glazen-schuifwanden'
import { home } from './home'
import { optieDakbedekking } from './optie-dakbedekking'
import { optieFundering } from './optie-fundering'
import { optieLedverlichting } from './optie-ledverlichting'
import { optieOnderhoud } from './optie-onderhoud'
import { optieWanden } from './optie-wanden'
import { schuifwandAluminium } from './schuifwand-aluminium'
import { schuifwandGlas } from './schuifwand-glas'
import { schuifwandLamellen } from './schuifwand-lamellen'
import { schuifwandSteellook } from './schuifwand-steellook'
import { tuinkamerHellendDak } from './tuinkamer-hellend-dak'
import { tuinkamerVlakDak } from './tuinkamer-vlak-dak'
import { tuinkamers } from './tuinkamers'
import { verandaCube } from './veranda-cube'
import { verandaGreenline } from './veranda-greenline'
import { verandaLinea } from './veranda-linea'
import { verandaPergola } from './veranda-pergola'
import { verandaProfiline } from './veranda-profiline'
import { verandaS } from './veranda-s'
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
import { zonweringScreens } from './zonwering-screens'
import { zonweringUitvalschermen } from './zonwering-uitvalschermen'

// Register every content group (= editable page) here.
// payload.config.ts reads this array automatically.
//
// Add a page the easy way:   npm run new:page
// Or by hand: create src/content/<slug>.ts, import it above, add it below,
// then run `npm run generate:types`. See docs/content-fields.md.
export const contentGlobals = [
  home,
  //Verandas
  verandaS,
  verandaGreenline,
  verandaProfiline,
  verandaLinea,
  verandaCube,
  verandaPergola,
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
]
