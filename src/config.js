import preval from 'preval.macro';

const sketches = preval`
const fs = require("fs");
const files = fs.readdirSync("src/sketches");
module.exports = files`;

const expSketches = preval`
const fs = require("fs");
const files = fs.readdirSync("src/unreleased");
module.exports = files`;

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

  scenes = sketches.map(sketchName => ({
    id: sketchName,
  }));

  unreleasedScenes = expSketches.map(sketchName => ({
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
