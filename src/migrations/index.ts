import * as migration_20260714_073818_initial from './20260714_073818_initial';
import * as migration_20260714_113510_home_fields from './20260714_113510_home_fields';

export const migrations = [
  {
    up: migration_20260714_073818_initial.up,
    down: migration_20260714_073818_initial.down,
    name: '20260714_073818_initial',
  },
  {
    up: migration_20260714_113510_home_fields.up,
    down: migration_20260714_113510_home_fields.down,
    name: '20260714_113510_home_fields'
  },
];
