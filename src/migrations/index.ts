import * as migration_20260714_073818_initial from './20260714_073818_initial';
import * as migration_20260714_113510_home_fields from './20260714_113510_home_fields';
import * as migration_20260714_114235_add_veranda_s from './20260714_114235_add_veranda_s';
import * as migration_20260714_120318_add_all_design_pages from './20260714_120318_add_all_design_pages';
import * as migration_20260716_114500_home_welcome_richtext from './20260716_114500_home_welcome_richtext';
import * as migration_20260716_123825 from './20260716_123825';
import * as migration_20260716_131322_extraveld_offerte from './20260716_131322_extraveld_offerte';
import * as migration_20260716_144856_add_de_localization from './20260716_144856_add_de_localization';
import * as migration_20260717_000001_seed_de_content from './20260717_000001_seed_de_content';
import * as migration_20260722_084049_add_seo_pages from './20260722_084049_add_seo_pages';
import * as migration_20260722_084100_seed_de_seo_pages from './20260722_084100_seed_de_seo_pages';
import * as migration_20260724_073233_add_projects from './20260724_073233_add_projects';
import * as migration_20260724_073300_seed_projects from './20260724_073300_seed_projects';
import * as migration_20260724_073439_add_project_body from './20260724_073439_add_project_body';
import * as migration_20260724_084831_add_palazzo_pext from './20260724_084831_add_palazzo_pext';
import * as migration_20260724_084900_add_palazzo_pext_to_overview from './20260724_084900_add_palazzo_pext_to_overview';
import * as migration_20260724_092304_add_palazzo_pext_models from './20260724_092304_add_palazzo_pext_models';
import * as migration_20260724_092400_palazzo_pext_own_models from './20260724_092400_palazzo_pext_own_models';
import * as migration_20260724_103439_related_models from './20260724_103439_related_models';
import * as migration_20260724_104338_zonwering_knikarm_rolluiken from './20260724_104338_zonwering_knikarm_rolluiken';
import * as migration_20260724_124530_show_other_models_toggle from './20260724_124530_show_other_models_toggle';
import * as migration_20260724_125056_drop_bespoke_related_blocks from './20260724_125056_drop_bespoke_related_blocks';
import * as migration_20260724_130000_seed_de_new_pages from './20260724_130000_seed_de_new_pages';
import * as migration_20260724_131000_hyphenate_terrassenueberdachung from './20260724_131000_hyphenate_terrassenueberdachung';

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
    name: '20260716_131322_extraveld_offerte',
  },
  {
    up: migration_20260716_144856_add_de_localization.up,
    down: migration_20260716_144856_add_de_localization.down,
    name: '20260716_144856_add_de_localization',
  },
  {
    up: migration_20260717_000001_seed_de_content.up,
    down: migration_20260717_000001_seed_de_content.down,
    name: '20260717_000001_seed_de_content',
  },
  {
    up: migration_20260722_084049_add_seo_pages.up,
    down: migration_20260722_084049_add_seo_pages.down,
    name: '20260722_084049_add_seo_pages',
  },
  {
    up: migration_20260722_084100_seed_de_seo_pages.up,
    down: migration_20260722_084100_seed_de_seo_pages.down,
    name: '20260722_084100_seed_de_seo_pages',
  },
  {
    up: migration_20260724_073233_add_projects.up,
    down: migration_20260724_073233_add_projects.down,
    name: '20260724_073233_add_projects',
  },
  {
    up: migration_20260724_073300_seed_projects.up,
    down: migration_20260724_073300_seed_projects.down,
    name: '20260724_073300_seed_projects',
  },
  {
    up: migration_20260724_073439_add_project_body.up,
    down: migration_20260724_073439_add_project_body.down,
    name: '20260724_073439_add_project_body',
  },
  {
    up: migration_20260724_084831_add_palazzo_pext.up,
    down: migration_20260724_084831_add_palazzo_pext.down,
    name: '20260724_084831_add_palazzo_pext',
  },
  {
    up: migration_20260724_084900_add_palazzo_pext_to_overview.up,
    down: migration_20260724_084900_add_palazzo_pext_to_overview.down,
    name: '20260724_084900_add_palazzo_pext_to_overview',
  },
  {
    up: migration_20260724_092304_add_palazzo_pext_models.up,
    down: migration_20260724_092304_add_palazzo_pext_models.down,
    name: '20260724_092304_add_palazzo_pext_models',
  },
  {
    up: migration_20260724_092400_palazzo_pext_own_models.up,
    down: migration_20260724_092400_palazzo_pext_own_models.down,
    name: '20260724_092400_palazzo_pext_own_models',
  },
  {
    up: migration_20260724_103439_related_models.up,
    down: migration_20260724_103439_related_models.down,
    name: '20260724_103439_related_models',
  },
  {
    up: migration_20260724_104338_zonwering_knikarm_rolluiken.up,
    down: migration_20260724_104338_zonwering_knikarm_rolluiken.down,
    name: '20260724_104338_zonwering_knikarm_rolluiken',
  },
  {
    up: migration_20260724_124530_show_other_models_toggle.up,
    down: migration_20260724_124530_show_other_models_toggle.down,
    name: '20260724_124530_show_other_models_toggle',
  },
  {
    up: migration_20260724_125056_drop_bespoke_related_blocks.up,
    down: migration_20260724_125056_drop_bespoke_related_blocks.down,
    name: '20260724_125056_drop_bespoke_related_blocks'
  },
  {
    up: migration_20260724_130000_seed_de_new_pages.up,
    down: migration_20260724_130000_seed_de_new_pages.down,
    name: '20260724_130000_seed_de_new_pages',
  },
  {
    up: migration_20260724_131000_hyphenate_terrassenueberdachung.up,
    down: migration_20260724_131000_hyphenate_terrassenueberdachung.down,
    name: '20260724_131000_hyphenate_terrassenueberdachung',
  },
];
