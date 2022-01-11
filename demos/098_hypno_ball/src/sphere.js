import * as THREE from 'three';
import fragment__color_fragment from './shaders/sphere/fragment__color_fragment.glsl';
import fragment__common from './shaders/sphere/fragment__common.glsl';

export const createSphere = (ctx) => {
  const { scene } = ctx;

  const geometry = new THREE.SphereGeometry(6, 128, 64);

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.0,
    metalness: 0.0,
    color: 0xdb2c6f,
  });

  material.side = THREE.DoubleSide;
  material.transparent = true;
  material.defines.USE_UV = true;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };

    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', fragment__common);
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', fragment__color_fragment);

    ctx.sphereShader = shader;
  };

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};
