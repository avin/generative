const sass = require('sass');

const processScssFile = (scssFile) => {
  try {
    const sassResult = sass.compile(scssFile);
    return sassResult.css;
  } catch (e) {
    console.warn(`process ${scssFile} error`);
    console.warn(e);
  }

  return '';
};

module.exports = processScssFile;
