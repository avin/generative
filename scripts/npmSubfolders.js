const npmInstallSubfolders = require('npm-install-subfolders');
const path = require('path');

for (const folder of ['demos', 'exp']) {
  npmInstallSubfolders({
    rootFolder: path.resolve(process.cwd(), folder),
    verbose: true,
    client: 'yarn', // npm | yarn
    postAction: (path) => {
      console.info('+++', path);
    },
  });
}
