export const isWebGL2Supported = () => !!document.createElement('canvas').getContext('webgl2');

export const getWebGLContext = () => (isWebGL2Supported() ? 'webgl2' : 'webgl');
