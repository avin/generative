const fs = require('fs-extra');
const path = require('path');
const Mustache = require('mustache');

Mustache.escape = (text) => text;

const mustacheProcessFile = (fileSrc, customOptions, originalFileSrc) => {
  const data = fs.readFileSync(fileSrc, 'utf8');

  const demoFolderName = (originalFileSrc || fileSrc).split('/').slice(-3, -2)[0];

  return Mustache.render(data, {
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

    demoFolderName,

    ...customOptions.variables,
  });
};

module.exports = mustacheProcessFile;
