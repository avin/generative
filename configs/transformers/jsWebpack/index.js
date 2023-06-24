const { makeTest } = require('multi-static');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const generateWebpackConfig = require('./generateWebpackConfig');

const _webpackMiddlewaresCache = {};

const jsWebpackTransformer = {
  test: makeTest({
    check: ({ file }) => file.srcPath.endsWith('.js'),
    checkFirstLine: (firstLine) => firstLine.startsWith('// @process'),
  }),
  processors: [],
  sendResponse: ({ file, req, res, next, customOptions }) => {
    let cachedWebpackMiddleware = _webpackMiddlewaresCache[file.srcPath];

    if (!cachedWebpackMiddleware) {
      const servePathArr = file.servePath.split('/');
      const reqFileName = servePathArr.slice(-1)[0];
      const reqFolder = servePathArr.slice(0, -1).join('/');

      const config = generateWebpackConfig({
        mode: 'development',
        src: file.srcPath,

        filename: reqFileName,
        publicPath: reqFolder,
        customOptions,
      });

      cachedWebpackMiddleware = webpackDevMiddleware(webpack(config), {
        publicPath: config.output.publicPath,
        stats: 'errors-only',
      });
      _webpackMiddlewaresCache[file.srcPath] = cachedWebpackMiddleware;
    }

    cachedWebpackMiddleware(req, res, next);
  },
  writeContent: async ({ file, buildPath, customOptions }) => {
    const dstArr = file.servePath.split('/');
    const dstFileName = dstArr.slice(-1)[0];
    const dstFolder = dstArr.slice(0, -1).join('/');

    const config = generateWebpackConfig({
      mode: 'production',
      src: file.srcPath,

      filename: dstFileName,
      dstPath: path.join(buildPath, dstFolder),
      publicPath: '',
      customOptions,
    });

    await new Promise((resolve, reject) => {
      webpack(config, (err, stats) => {
        const errorsText = stats.toString({ all: false, errors: true });
        if (errorsText) {
          console.error(errorsText);
          return reject();
        }

        if (err) {
          console.error(err);
          return reject();
        }

        resolve();
      });
    });
  },
};

const tsWebpackTransformer = {
  ...jsWebpackTransformer,
  beforeTest: ({ file, mode }) => {
    file.servePath = file.servePath.replace(/\.ts$/, '.js');
    file.srcPath = file.srcPath.replace(/\.js$/, '.ts');
  },
  test: makeTest({
    check: ({ file }) => file.srcPath.endsWith('.ts'),
    checkFirstLine: (firstLine) => firstLine.startsWith('// @process'),
  }),
};

module.exports.jsWebpackTransformer = jsWebpackTransformer;
module.exports.tsWebpackTransformer = tsWebpackTransformer;
