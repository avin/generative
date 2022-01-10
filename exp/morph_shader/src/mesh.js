import * as THREE from 'three';
import vertexShader from './shaders/mesh/vert.glsl';
import fragmentShader from './shaders/mesh/frag.glsl';
import commonShader from './shaders/mesh/common.glsl';

export const createMesh = (ctx) => {
  const { scene } = ctx;

  const dpi = 64;
  const geometry = new THREE.TorusKnotGeometry(8, 1, 10 * dpi, dpi, 5, 9);

  const loader = new THREE.TextureLoader();
  const cubeLoader = new THREE.CubeTextureLoader();

  const t = (v) => `assets/textures/${v}`;

  const material = new THREE.ShaderMaterial({
    color: 0x0066ff,
    uniforms: {
      time: { value: 0 },
      cat: { value: loader.load(t('cat.jpg')) },
      cube: {
        value: cubeLoader.load([
          t('posx.jpg'),
          t('negx.jpg'),
          t('posy.jpg'),
          t('negy.jpg'),
          t('posz.jpg'),
          t('negz.jpg'),
        ]),
      },
    },
    vertexShader: `${commonShader}\n${vertexShader}`,
    fragmentShader: `${commonShader}\n${fragmentShader}`,
  });

  const mesh = new THREE.Mesh(geometry, material);
  ctx.mesh = mesh;
  scene.add(mesh);
};
