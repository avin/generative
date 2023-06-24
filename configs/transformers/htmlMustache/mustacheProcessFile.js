const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const safeEval = require('./safeEval');
const Mustache = require('mustache');

// Отключаем экранирование строк, нам важно хранить в переменных HTML
Mustache.escape = (text) => text;

/**
 * Пропустить файл через mustache
 * @param fileSrc
 * @param customOptions
 * @param originalFileSrc - изначальный обрабатываемый файл (для случаев когда происходит обработка внутренних чанков)
 * @returns {*}
 */
const mustacheProcessFile = (fileSrc, customOptions = {}, originalFileSrc) => {
  let data = fs.readFileSync(fileSrc, 'utf8');

  const fileLanguage = (() => {
    const execResult = /_([a-z]+)\.html/.exec(originalFileSrc || fileSrc);
    return execResult && execResult[1];
  })();

  return Mustache.render(data, {
    /**
     * Выполнить код
     */
    eval: () => {
      return (text, render) => {
        return render(String(safeEval(text, customOptions)));
      };
    },

    /**
     * Подгрузить содержимое чанк-файла
     */
    chunk: () => {
      return (text, render) => {
        const chunkLocation = fileSrc.split(path.sep).slice(0, -1).join(path.sep);
        const chunkFile = path.join(chunkLocation, text);
        let chunkContent;
        try {
          chunkContent = mustacheProcessFile(chunkFile, customOptions, originalFileSrc || fileSrc);
        } catch (e) {
          console.warn(`(!) Chunk read error. ${chunkFile}`);
        }

        return chunkContent || '';
      };
    },

    /**
     * Перевести фразу используя словарь из customOptions.translations.
     * Язык определяет по имени файла по наличию приставки '_ru', '_en' и т.д
     */
    translate: () => {
      return (text, render) => {
        if (fileLanguage) {
          return render(
            _.get(customOptions, ['translations', ...text.split('.'), fileLanguage], text)
          );
        }

        return text;
      };
    },

    /**
     * Признак языка у текущего файла (определяет по приставке '_ru', '_en' и т.д)
     */
    language: fileLanguage,

    ...customOptions.variables,
  });
};

module.exports = mustacheProcessFile;
