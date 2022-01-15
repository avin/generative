import * as THREE from 'three';
import fragment__output_fragment from './shaders/centerBall/fragment__output_fragment.glsl';

export const createCenterBall = (ctx) => {
  const {
    scene,
    options: { lightColor },
  } = ctx;

  const geometry = new THREE.SphereGeometry(4, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: lightColor,
  });

  material.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', fragment__output_fragment);

    ctx.centerBallShader = shader;
  };

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};
