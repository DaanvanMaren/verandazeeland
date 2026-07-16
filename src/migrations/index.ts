import * as migration_20260714_073818_initial from './20260714_073818_initial';
import * as migration_20260714_113510_home_fields from './20260714_113510_home_fields';
import * as migration_20260714_114235_add_veranda_s from './20260714_114235_add_veranda_s';
import * as migration_20260714_120318_add_all_design_pages from './20260714_120318_add_all_design_pages';
import * as migration_20260716_114500_home_welcome_richtext from './20260716_114500_home_welcome_richtext';
import * as migration_20260716_123825 from './20260716_123825';
import * as migration_20260716_131322_extraveld_offerte from './20260716_131322_extraveld_offerte';

export const migrations = [
  {
    up: migration_20260714_073818_initial.up,
    down: migration_20260714_073818_initial.down,
    name: '20260714_073818_initial',
  },
  {
    up: migration_20260714_113510_home_fields.up,
    down: migration_20260714_113510_home_fields.down,
    name: '20260714_113510_home_fields',
  },
  {
    up: migration_20260714_114235_add_veranda_s.up,
    down: migration_20260714_114235_add_veranda_s.down,
    name: '20260714_114235_add_veranda_s',
  },
  {
    up: migration_20260714_120318_add_all_design_pages.up,
    down: migration_20260714_120318_add_all_design_pages.down,
    name: '20260714_120318_add_all_design_pages',
  },
  {
    up: migration_20260716_114500_home_welcome_richtext.up,
    down: migration_20260716_114500_home_welcome_richtext.down,
    name: '20260716_114500_home_welcome_richtext',
  },
  {
    up: migration_20260716_123825.up,
    down: migration_20260716_123825.down,
    name: '20260716_123825',
  },
  {
    up: migration_20260716_131322_extraveld_offerte.up,
    down: migration_20260716_131322_extraveld_offerte.down,
    name: '20260716_131322_extraveld_offerte'
  },
];
