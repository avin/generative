const sass = require('sass');

const processScssFile = (scssFile, exitOnFail = false) => {
  try {
    const sassResult = sass.compile(scssFile);
    return sassResult.css;
  } catch (e) {
    console.warn(`process ${scssFile} error`);
    console.warn(e);

    if (exitOnFail) {
      process.exit(1);
    }
  }

  return '';
};

module.exports = processScssFile;
