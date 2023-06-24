const fs = require('fs-extra');
const shell = require('shelljs');
const nodePath = require('path');
const _ = require('lodash');
const { defineConfig, getFilesList } = require('multi-static');
const klawSync = require('klaw-sync');
const staticHashVersion = require('static-hash-version');
const preparePreviews = require('./utils/preparePreviews');
const argv = require('yargs').argv;
const localhostCerts = require('localhost-certs');
const { scssTransformer } = require('./transformers/scss');
const { htmlMustacheTransformer } = require('./transformers/htmlMustache');
const { jsWebpackTransformer, tsWebpackTransformer } = require('./transformers/jsWebpack');

const isBuilding = argv.$0.includes('multi-static-build');

const mapping = [['./root', '/']];

const demos = [];
const expDemos = [];
const demosToBuild = [];

klawSync('./demos', { depthLimit: 0 }).forEach(({ path }) => {
  const folder = _.last(path.split(nodePath.sep));

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
    const folder = _.last(path.split(nodePath.sep));

    const addExpDemoToMapping = () => {
      expDemos.push(folder);
      mapping.push([`./exp/${folder}/static`, `/exp/${folder}`]);
    };

    addExpDemoToMapping();
  });
}

module.exports = defineConfig({
  mapping,

  http: {
    port: 8080,
    https: true,
    ...localhostCerts(),
  },

  customOptions: {
    variables: {
      demos: _.reverse(demos),
      expDemos: _.reverse(expDemos),
    },
  },

  transformers: [scssTransformer, jsWebpackTransformer, tsWebpackTransformer, htmlMustacheTransformer],

  async beforeBuild() {
    fs.removeSync(nodePath.join(this.buildPath, 'index.html'));
    fs.removeSync(nodePath.join(this.buildPath, 'assets'));

    // eslint-disable-next-line no-restricted-syntax
    for (const demo of demosToBuild) {
      fs.removeSync(nodePath.join(this.buildPath, demo));
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

  onBeforeSetupMiddleware({ app }) {
    app.use('/', (req, res, next) => {
      if (req.path === '/') {
        return res.redirect(307, '/index.html');
      }
      return next();
    });
  },
});
