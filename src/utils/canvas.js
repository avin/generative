/**
 * A utility that blurs the render() function by averaging samples over many frames
 * @param render
 * @param opts
 * @returns {Function}
 */
export function createMotionBlur(render, opts = {}) {
  const { samplesPerFrame = 4, shutterAngle = 0.5, onlyExporting = false } = opts;
  const otherCanvas = document.createElement('canvas');
  const otherContext = otherCanvas.getContext('2d');

  return (props = {}) => {
    const { context, canvasWidth, canvasHeight, totalFrames, exporting, frame } = props;

    if (!exporting && onlyExporting) {
      return render(props);
    }

    otherCanvas.width = canvasWidth;
    otherCanvas.height = canvasHeight;
    otherContext.clearRect(0, 0, canvasWidth, canvasHeight);

    const size = canvasWidth * canvasHeight * 4;
    const composite = new Float32Array(size);
    for (let i = 0; i < size; i += 1) {
      composite[i] = 0;
    }

    // For every sample, run the render function and add the new pixel values to
    // the composite array
    for (let sample = 0; sample < samplesPerFrame; sample += 1) {
      const sampleFrame = frame + (sample * shutterAngle) / samplesPerFrame;
      render({
        ...props,
        frame: sampleFrame % totalFrames,
        playhead: (sampleFrame / (totalFrames - 1)) % 1,
      });

      const pixels = context.getImageData(0, 0, canvasWidth, canvasHeight).data;
      for (let idx = 0; idx < pixels.length; idx += 1) {
        composite[idx] += pixels[idx];
      }
    }

    // Fill the pixels in `imageData` with averaged values from `composite`
    const imageData = context.createImageData(canvasWidth, canvasHeight);
    for (let idx = 0; idx < imageData.data.length; idx += 1) {
      imageData.data[idx] = composite[idx] / samplesPerFrame;
    }

    // Draw the averaged image data to the canvas
    context.putImageData(imageData, 0, 0);
  };
}
