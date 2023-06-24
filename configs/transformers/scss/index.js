const { makeTest } = require('multi-static');
const processScssFile = require('./processScssFile');

const scssTransformer = {
  beforeTest: ({ file, mode }) => {
    file.servePath = file.servePath.replace(/\.scss$/, '.css');
    file.srcPath = file.srcPath.replace(/\.css$/, '.scss');
  },
  test: makeTest({
    check: ({ file }) => file.srcPath.endsWith('.scss'),
    checkFirstLine: (firstLine) => firstLine.startsWith('// @process'),
  }),
  processors: [
    ({ file, mode }) => {
      const exitOnFail = mode === 'build';
      return processScssFile(file.srcPath, exitOnFail);
    },
  ],
};

module.exports.scssTransformer = scssTransformer;
