const jimp = require('jimp');
const Promise = require('bluebird');

const maxWidth = 300;
const maxHeight = 300;

const preparePreviews = (demos) => {
  return Promise.map(
    demos,
    async (demo) => {
      const file = `./demos/${demo}/preview.png`;

      const image = await jimp.read(file);

      const {
        bitmap: { width, height },
      } = image;

      if (width >= height) {
        const ratio = width / height;
        await image.resize(maxWidth * ratio, maxHeight);
      } else {
        const ratio = height / width;
        await image.resize(maxWidth, maxHeight * ratio);
      }

      const resultFileName = `./root/assets/previews/${demo}.jpg`;
      await image.quality(90).writeAsync(resultFileName);
    },
    {
      concurrency: 2,
    },
  );
};

module.exports = preparePreviews;
