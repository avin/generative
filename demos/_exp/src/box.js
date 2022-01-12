import * as THREE from 'three';
import vertex__common from './shaders/box/vertex__common.glsl';
import vertex__begin_vertex from './shaders/box/vertex__begin_vertex.glsl';
import fragment__output_fragment from './shaders/box/fragment__output_fragment.glsl';

export const createBox = (ctx) => {
  const { scene } = ctx;

  const size = 2;
  const geometry = new THREE.BoxGeometry(size, size, size, 64, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.2,
    metalness: 0.9,
    color: 0xeeeeee,
    envMapIntensity: 1.0,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };
    shader.uniforms.radius = { value: size / 2 };

    shader.vertexShader = shader.vertexShader.replace('#include <common>', vertex__common);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertex__begin_vertex);
    shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', fragment__output_fragment);

    ctx.boxShader = shader;
  };

  const mesh = new THREE.Mesh(geometry, material);
  ctx.boxMesh = mesh;
  scene.add(mesh);
};
