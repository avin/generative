import * as THREE from 'three';

export const createEnv = (ctx) => {
  const { renderer, scene } = ctx;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  new THREE.TextureLoader().load('assets/img/equirectangular.png', (texture) => {
    texture.encoding = THREE.sRGBEncoding;

    const pngCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);

    ctx.background = pngCubeRenderTarget.texture;
    // scene.background = ctx.background;

    ctx.boxMesh.material.envMap = ctx.background;
    // ctx.boxMesh.material.map = ctx.background;

    texture.dispose();
  });
};
