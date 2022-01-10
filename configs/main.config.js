const fs = require('fs-extra');
const shell = require('shelljs');
const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const { defaultFileDevProcessing, defaultFileBuildProcessing, getFilesList } = require('multi-static/common');
const readFirstLine = require('read-first-line');
const klawSync = require('klaw-sync');
const generateWebpackConfig = require('./utils/generateWebpackConfig');
const webpackDevMiddleware = require('webpack-dev-middleware');
const processScssFile = require('./utils/processScssFile');
const staticHashVersion = require('static-hash-version');
const mustacheProcessFile = require('./utils/mustacheProcessFile');
const preparePreviews = require('./utils/preparePreviews');
const argv = require('yargs').argv;

const isBuilding = argv.$0.includes('multi-static-build');

const _webpackMiddlewaresCache = {};

const mapping = [['./root', '/']];

const demos = [];
const demosToBuild = [];

klawSync('./demos', { depthLimit: 0 }).forEach(({ path }) => {
  const folder = _.last(path.split('/'));

  const addDemoToMapping = () => {
    demos.push(folder);
    mapping.push([`./demos/${folder}/static`, `/${folder}`]);
  };

  if (folder.startsWith('_')) {
    if (!isBuilding) {
      addDemoToMapping();
    }
  } else {
    addDemoToMapping();
  }

  if (fs.existsSync(`./demos/${folder}/BUILD`) || argv.all) {
    demosToBuild.push(folder);
  }
});

if (!isBuilding) {
  klawSync('./exp', { depthLimit: 0 }).forEach(({ path }) => {
    const folder = _.last(path.split('/'));

    const addExpDemoToMapping = () => {
      demos.push(folder);
      mapping.push([`./exp/${folder}/static`, `/exp/${folder}`]);
    };

    addExpDemoToMapping();
  });
}

module.exports = {
  mapping,

  http: {
    port: 8080,
    https: true,
    key: fs.readFileSync('./node_modules/localhost-certs/files/server.key', 'utf8'),
    cert: fs.readFileSync('./node_modules/localhost-certs/files/server.crt', 'utf8'),
  },

  customOptions: {
    variables: {
      demos: _.reverse(demos),
    },
  },

  async fileDevProcessing(params) {
    const { fileSrc, req, res, next } = params;

    // ------------
    // *.SCSS -> CSS
    // ------------
    if (fileSrc.endsWith('.css')) {
      const scssFile = fileSrc.replace(new RegExp(`${_.escapeRegExp('.css')}$`), '.scss');
      if (fs.pathExistsSync(scssFile)) {
        const firstLine = await readFirstLine(scssFile);
        if (firstLine === '// @process') {
          const cssContent = processScssFile(scssFile);

          res.setHeader('Content-Type', 'text/css');
          res.send(cssContent.toString());

          return true;
        }
      }
    }

    // ------------
    // *.JS Webpack
    // ------------
    if (fileSrc.endsWith('.js') && fs.pathExistsSync(fileSrc)) {
      const firstLine = await readFirstLine(fileSrc);
      if (firstLine === '// @process') {
        let cachedWebpackMiddleware = _webpackMiddlewaresCache[fileSrc];

        if (!cachedWebpackMiddleware) {
          const dstArr = req.path.split('/');
          const dstFileName = dstArr.slice(-1)[0];
          const dstPath = dstArr.slice(0, -1).join('/');

          const config = generateWebpackConfig({
            mode: 'development',
            src: fileSrc,

            filename: dstFileName,
            publicPath: dstPath,
          });

          cachedWebpackMiddleware = webpackDevMiddleware(webpack(config), {
            publicPath: config.output.publicPath,
            stats: 'errors-only',
          });
          _webpackMiddlewaresCache[fileSrc] = cachedWebpackMiddleware;
        }

        cachedWebpackMiddleware(req, res, next);

        return true;
      }
    }

    // ------------
    // *.HTML Mustache
    // ------------
    if (fileSrc.endsWith('.html') && fs.pathExistsSync(fileSrc)) {
      const data = mustacheProcessFile(fileSrc, this.customOptions);

      res.setHeader('Content-Type', 'text/html');
      res.send(data);

      return true;
    }

    return defaultFileDevProcessing(params);
  },
  async fileBuildProcessing(params) {
    const { fileSrc, destinationFileSrc } = params;

    // ------------
    // *.SCSS -> CSS
    // ------------
    if (fileSrc.endsWith('.scss')) {
      const scssFileSrc = fileSrc;
      const cssDestinationFileSrc = destinationFileSrc.replace(new RegExp(`${_.escapeRegExp('.scss')}$`), '.css');

      if (fs.pathExistsSync(scssFileSrc)) {
        if (!fs.pathExistsSync(cssDestinationFileSrc)) {
          const firstLine = await readFirstLine(scssFileSrc);
          if (firstLine === '// @process') {
            const cssContent = processScssFile(scssFileSrc);

            fs.ensureFileSync(cssDestinationFileSrc);
            fs.writeFileSync(cssDestinationFileSrc, cssContent);
            return;
          }
        } else {
          // Если css с таким именем есть, то scss копировать уже не надо
          return;
        }
      }
    }

    // ------------
    // *.JS Webpack
    // ------------
    if (fileSrc.endsWith('.js')) {
      if (!fs.pathExistsSync(destinationFileSrc)) {
        const firstLine = await readFirstLine(fileSrc);
        if (firstLine === '// @process') {
          const dstArr = destinationFileSrc.split(path.sep);
          const dstFileName = dstArr.slice(-1)[0];
          const dstPath = dstArr.slice(0, -1).join('/');

          const config = generateWebpackConfig({
            mode: 'production',
            src: fileSrc,

            filename: dstFileName,
            dstPath: path.resolve(dstPath),
            publicPath: '',
          });

          await new Promise((resolve, reject) => {
            webpack(config, (err, stats) => {
              const errorsText = stats.toString({ all: false, errors: true });
              if (errorsText) {
                console.warn(errorsText);
              }

              if (err) {
                return reject();
              }
              resolve();
            });
          });

          return;
        }
      }
    }

    // ------------
    // *.HTML Mustache
    // ------------
    if (fileSrc.endsWith('.html') && !fs.pathExistsSync(destinationFileSrc)) {
      const data = mustacheProcessFile(fileSrc, this.customOptions);

      fs.ensureFileSync(destinationFileSrc);
      fs.writeFileSync(destinationFileSrc, data);
      return;
    }

    return defaultFileBuildProcessing(params);
  },

  async beforeBuild() {
    fs.removeSync(path.join(this.buildPath, 'index.html'));
    fs.removeSync(path.join(this.buildPath, 'assets'));

    // eslint-disable-next-line no-restricted-syntax
    for (const demo of demosToBuild) {
      fs.removeSync(path.join(this.buildPath, demo));
    }

    await preparePreviews(demos);
  },

  afterBuild() {
    // Process tags with links to files and substitute prefixes with hashes for links
    getFilesList('./build')
      .filter((i) => i.endsWith('.html'))
      .forEach((htmlFile) => {
        staticHashVersion({
          htmlFilePath: htmlFile,
          writeToFile: true,
        });
      });

    shell.exec(`git add -A ${this.buildPath}`);
  },
};
