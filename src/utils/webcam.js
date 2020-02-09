class WebCam {
  constructor() {
    this.canvas = document.createElement('canvas');

    this.webcamStream = null;

    this.canvas.width = 480;
    this.canvas.height = 360;

    this.video = document.createElement('video');
    this.video.setAttribute('playsInline', '');
    this.video.setAttribute('autoPlay', '');
  }

  start() {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false,
        })
        .then(stream => {
          this.video.srcObject = stream;

          const { height, width } = stream.getVideoTracks()[0].getSettings();

          this.canvas.width = width;
          this.canvas.height = height;

          this.webcamStream = stream;
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  stop() {
    if (this.webcamStream) {
      this.webcamStream.getTracks()[0].stop();
      this.webcamStream = null;
    }
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  getImageData() {
    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    return context.getImageData(0, 0, this.width, this.height);
  }

  getSnapshot() {
    this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    return this.canvas.toDataURL();
  }
}

export default WebCam;
