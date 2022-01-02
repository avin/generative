const jimp = require('jimp');

const maxWidth = 300;
const maxHeight = 300;

const preparePreviews = async (demos) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const demo of demos) {
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
  }
};

module.exports = preparePreviews;
