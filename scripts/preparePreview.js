const jimp = require('jimp');
const shell = require('shelljs');

const maxWidth = 300;
const maxHeight = 300;

(async () => {
  const file = process.argv[2];

  const image = await jimp.read(file);

  const {
    bitmap: { width, height },
  } = image;

  if (width >= maxWidth || height >= maxHeight) {
    if (width >= height) {
      const ratio = height / width;
      await image.resize(maxWidth, maxHeight * ratio);
    } else {
      const ratio = width/height;
      await image.resize(maxWidth* ratio, maxHeight );
    }

    const resultFileName = file.replace(/\.(png|jpg|jpeg)$/, '_sm.jpg');
    await image.quality(90).writeAsync(resultFileName);

    shell.exec(`git add ${resultFileName}`);
  }
})();
