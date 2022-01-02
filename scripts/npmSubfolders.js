const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const argv = require('yargs').argv;

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) {
      return done(err);
    }
    let i = 0;
    (function next() {
      // eslint-disable-next-line no-plusplus
      let file = list[i++];
      if (!file) {
        return done(null, results);
      }
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};

(async () => {
  const rootFolder = path.resolve(process.cwd(), 'demos');

  const files = await new Promise((resolve, reject) => {
    walk(rootFolder, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const fileSrc of files) {
    if (fileSrc.endsWith(`${path.sep}package.json`) && !/node_modules/.exec(fileSrc)) {
      const filePath = fileSrc.replace(`${path.sep}package.json`, '');

      if (!argv.all && fs.existsSync(path.join(filePath, 'SKIP_BUILD'))) {
        continue;
      }

      console.info('===================================================================');
      console.info(`Performing install inside ${filePath}`);
      console.info('===================================================================');

      shell.exec(`yarn --cwd=${filePath}`);
    }
  }
})();
