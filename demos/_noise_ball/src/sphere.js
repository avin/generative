import * as THREE from 'three';
import alphamapFragmentShader from './shaders/sphere/alphamap_fragment.glsl';
import commonShader from './shaders/sphere/common.glsl';

export const createSphere = (ctx) => {
  const { scene } = ctx;

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('hsl(197, 90%, 98%)'),
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 0.1,
  });
  material.defines.USE_UV = true;
  // material.defines.USE_EMISSIVEMAP = true;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };

    ctx.sphereMaterialShader = shader;

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <alphamap_fragment>', alphamapFragmentShader)
      .replace('#include <common>', commonShader);
  };

  const geometry = new THREE.SphereGeometry(5, 64, 64);

  const mesh = new THREE.Mesh(geometry, material);
  ctx.sphereMesh = mesh;

  mesh.rotation.x = 0.1;

  scene.add(mesh);
};
