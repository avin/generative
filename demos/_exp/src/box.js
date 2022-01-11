import * as THREE from 'three';
import vertex__common from './shaders/box/vertex__common.glsl';
import vertex__begin_vertex from './shaders/box/vertex__begin_vertex.glsl';

export const createBox = (ctx) => {
  const { scene } = ctx;

  const size = 4;
  const geometry = new THREE.BoxGeometry(size, size, size, 64, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.0,
    metalness: 0.0,
    color: 0xdb2c6f,
    envMapIntensity: 1.0,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };
    shader.uniforms.radius = { value: size / 2 };

    shader.vertexShader = shader.vertexShader.replace('#include <common>', vertex__common);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertex__begin_vertex);

    ctx.boxShader = shader;
  };
  //
  // new THREE.TextureLoader().load('assets/img/equirectangular.png', (texture) => {
  //   texture.encoding = THREE.sRGBEncoding;
  //
  //   pngCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
  //
  //   pngBackground = pngCubeRenderTarget.texture;
  //
  //   texture.dispose();
  // });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};
