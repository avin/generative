const npmInstallSubfolders = require('npm-install-subfolders');
const path = require('path');

npmInstallSubfolders({
  rootFolder: path.resolve(__dirname, '..', 'demos'),
  verbose: true,
  client: 'yarn', // npm | yarn
  postAction: (path) => {
    console.info('+++', path);
  },
});
