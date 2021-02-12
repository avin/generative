const fs = require('fs');

const sketches = fs.readdirSync('src/sketches');
const expSketches = fs.readdirSync('src/unreleased');

const configFile = './src/config.js';

fs.readFile(configFile, 'utf8', (err, data) => {
  if (err) {
    return;
  }

  data = data.replace(
    /\/\* START SKETCHES \*\/[\s\S]+\/\* END SKETCHES \*\//g,
    `\
/* START SKETCHES */
const sketches = ${JSON.stringify(sketches)}
/* END SKETCHES */
`,
  );

  data = data.replace(
    /\/\* START EXP_SKETCHES \*\/[\s\S]+\/\* END EXP_SKETCHES \*\//g,
    `\
/* START EXP_SKETCHES */
const expSketches = ${JSON.stringify(expSketches)}
/* END EXP_SKETCHES */
`,
  );

  fs.writeFile(configFile, data, 'utf8', () => {});
});
