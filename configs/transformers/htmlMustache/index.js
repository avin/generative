const { makeTest } = require('multi-static');
const mustacheProcessFile = require('./mustacheProcessFile');

const htmlMustacheTransformer = {
  test: makeTest({
    check: ({ file }) => file.srcPath.endsWith('.html'),
  }),
  processors: [
    ({ file, customOptions }) => {
      return mustacheProcessFile(file.srcPath, customOptions);
    },
  ],
};

module.exports.htmlMustacheTransformer = htmlMustacheTransformer;
