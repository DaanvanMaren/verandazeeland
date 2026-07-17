import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import type { GlobalSlug } from 'payload'

// Data migration: fill the German (de) locale for every content global.
// The de locale was added empty by 20260716_144856_add_de_localization; this
// writes the machine-translated copy into it. Runs once per environment on
// deploy (prodMigrations), so German ships to Railway automatically. Only the
// de locale is written — Dutch (nl) content is left untouched, and any field
// left out here simply falls back to nl. Translations live in ./de/<slug>.ts.
// down() intentionally does nothing: we don't wipe editor content on rollback.
import accessoires from './de/accessoires'
import contact from './de/contact'
import glazenSchuifwanden from './de/glazen-schuifwanden'
import home from './de/home'
import optieDakbedekking from './de/optie-dakbedekking'
import optieFundering from './de/optie-fundering'
import optieLedverlichting from './de/optie-ledverlichting'
import optieOnderhoud from './de/optie-onderhoud'
import optieWanden from './de/optie-wanden'
import schuifwandAluminium from './de/schuifwand-aluminium'
import schuifwandGlas from './de/schuifwand-glas'
import schuifwandLamellen from './de/schuifwand-lamellen'
import schuifwandSteellook from './de/schuifwand-steellook'
import tuinkamerHellendDak from './de/tuinkamer-hellend-dak'
import tuinkamerVlakDak from './de/tuinkamer-vlak-dak'
import tuinkamers from './de/tuinkamers'
import verandaCube from './de/veranda-cube'
import verandaGreenline from './de/veranda-greenline'
import verandaLinea from './de/veranda-linea'
import verandaPergola from './de/veranda-pergola'
import verandaProfiline from './de/veranda-profiline'
import verandaS from './de/veranda-s'
import zakelijk from './de/zakelijk'
import zakelijkHoreca from './de/zakelijk-horeca'
import zakelijkKantoren from './de/zakelijk-kantoren'
import zakelijkOnderwijs from './de/zakelijk-onderwijs'
import zakelijkProjectbouw from './de/zakelijk-projectbouw'
import zakelijkVakantieparken from './de/zakelijk-vakantieparken'
import zakelijkZorg from './de/zakelijk-zorg'
import zonwering from './de/zonwering'
import zonweringBovendak from './de/zonwering-bovendak'
import zonweringOnderdak from './de/zonwering-onderdak'
import zonweringScreens from './de/zonwering-screens'
import zonweringUitvalschermen from './de/zonwering-uitvalschermen'

const DE: Partial<Record<GlobalSlug, Record<string, unknown>>> = {
  home,
  'veranda-s': verandaS,
  'veranda-greenline': verandaGreenline,
  'veranda-profiline': verandaProfiline,
  'veranda-linea': verandaLinea,
  'veranda-cube': verandaCube,
  'veranda-pergola': verandaPergola,
  tuinkamers,
  'tuinkamer-hellend-dak': tuinkamerHellendDak,
  'tuinkamer-vlak-dak': tuinkamerVlakDak,
  'glazen-schuifwanden': glazenSchuifwanden,
  'schuifwand-glas': schuifwandGlas,
  'schuifwand-aluminium': schuifwandAluminium,
  'schuifwand-lamellen': schuifwandLamellen,
  'schuifwand-steellook': schuifwandSteellook,
  zonwering,
  'zonwering-onderdak': zonweringOnderdak,
  'zonwering-bovendak': zonweringBovendak,
  'zonwering-screens': zonweringScreens,
  'zonwering-uitvalschermen': zonweringUitvalschermen,
  accessoires,
  'optie-wanden': optieWanden,
  'optie-dakbedekking': optieDakbedekking,
  'optie-ledverlichting': optieLedverlichting,
  'optie-fundering': optieFundering,
  'optie-onderhoud': optieOnderhoud,
  zakelijk,
  'zakelijk-horeca': zakelijkHoreca,
  'zakelijk-kantoren': zakelijkKantoren,
  'zakelijk-onderwijs': zakelijkOnderwijs,
  'zakelijk-vakantieparken': zakelijkVakantieparken,
  'zakelijk-zorg': zakelijkZorg,
  'zakelijk-projectbouw': zakelijkProjectbouw,
  contact,
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const [slug, data] of Object.entries(DE)) {
    await payload.updateGlobal({ slug: slug as GlobalSlug, locale: 'de', data, req })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // no-op: never wipe locale content on rollback
}
