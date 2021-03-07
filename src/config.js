/* START SKETCHES */
const sketches = [
  '001_maze_lines',
  '002_maze',
  '003_broken_space',
  '004_hair',
  '005_color_daub',
  '006_ragged_canvas',
  '007_lines_rain',
  '008_handwrite',
  '009_lines_magic',
  '010_rotate_geometry',
  '011_dla',
  '012_hypno_multi_spiral',
  '013_tree',
  '014_infinity',
  '015_pixel_mania_game',
  '016_bloody_canvas_game',
  '017_wave',
  '018_firefly_rabbit',
  '019_particles_sphere',
  '020_unstable_sphere',
  '021_snow_forest',
  '022_snowman',
  '023_square_tunnel',
  '024_skull_destroy',
  '025_jokers_cage',
  '026_rising_bubles',
  '027_land_flow',
  '028_particles_sphere_2',
  '029_eclipse',
  '030_pasta_wires',
  '031_synth_waves',
  '032_color_arcs',
  '033_circle_behind_lines',
  '034_fall_in_deep',
  '035_sphere_drilling',
  '036_water_bubbles',
  '037_cells',
  '038_colorello',
  '039_matress',
  '040_rotation_headpain',
  '041_eggs',
  '042_squares_fall',
  '043_waves',
  '044_2x2',
  '045_circle_worms',
  '046_floating_color_bubbles',
  '047_cyberskin2000',
  '048_lines',
  '049_coronovirus',
  '050_biomix',
  '051_furball',
  '052_dna',
  '053_linear_mushroom',
  '054_neon_sphere',
  '055_lined_tubes',
  '056_balloon_knitting',
  '057_ride_ball',
  '058_spiral_rotation',
  '059_liquid_ball',
  '060_ball_in_sands',
  '061_night_rain',
  '062_star_track',
  '063_color_twist',
  '064_skull_face',
  '065_cubes_cluster',
  '066_synth_waves_vertex',
  '067_disco_disk',
  '068_blood_waves',
  '069_hypno_tunnel',
  '070_sphere_spiral',
  '071_elastic_cube',
  '072_rotten_bagel',
  '073_color_tornado',
  '074_chandelier',
  '075_bouquet',
  '076_trail_rotation',
  '077_metallic_rotation',
  '078_bio_ball',
  '079_soft_touch',
  '080_black_sun',
  '081_dot_waves',
];
/* END SKETCHES */

/* START EXP_SKETCHES */
const expSketches = [
  'black_hole',
  'bloom',
  'dots_wave',
  'foo',
  'foo2',
  'goldenflower',
  'lowpoly_waves',
  'particles_tornado',
  'plane',
  'rotate',
  'three-exp',
  'torus',
  'yellow_snow',
];
/* END EXP_SKETCHES */

class Config {
  // Язык по умолчанию
  defaultLanguage = 'en';

  // Список поддерживаемых языков
  availableLanguages = [
    {
      id: 'ru',
      shortName: 'РУС',
      fullName: 'Русский',
    },
    {
      id: 'en',
      shortName: 'ENG',
      fullName: 'English',
    },
  ];

  scenes = sketches.map((sketchName) => ({
    id: sketchName,
  }));

  unreleasedScenes = expSketches.map((sketchName) => ({
    id: sketchName,
  }));

  /**
   * Расширить параметры конфигурации
   * @param newConfigParams
   */
  extendConfig(newConfigParams) {
    Object.assign(this, newConfigParams);
  }
}

const config = new Config();

export default config;
