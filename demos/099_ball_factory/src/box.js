import * as THREE from 'three';
import vertex__common from './shaders/box/vertex__common.glsl';
import vertex__begin_vertex from './shaders/box/vertex__begin_vertex.glsl';
import fragment__output_fragment from './shaders/box/fragment__output_fragment.glsl';

export const createBox = (ctx) => {
  const {
    scene,
    options: { countPerRow, size },
  } = ctx;

  const count = countPerRow ** 3;

  const offsetArray = new Float32Array(count * 3);

  let i = 0;
  for (let x = 0; x < countPerRow; x += 1) {
    for (let y = 0; y < countPerRow; y += 1) {
      for (let z = 0; z < countPerRow; z += 1) {
        offsetArray[i * 3 + 0] = (x - countPerRow / 2) * size + size / 2;
        offsetArray[i * 3 + 1] = y * size;
        offsetArray[i * 3 + 2] = (z - countPerRow / 2) * size + size / 2;

        i++;
      }
    }
  }

  const baseGeometry = new THREE.BoxGeometry(size, size, size, 64, 64, 64);
  baseGeometry.scale(0.9, 0.9, 0.9);

  const geometry = new THREE.InstancedBufferGeometry();
  geometry.index = baseGeometry.index;
  geometry.attributes = baseGeometry.attributes;

  geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(offsetArray, 3));

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.2,
    metalness: 0.7,
    color: 0xeeeeaa,
    envMapIntensity: 1.0,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };
    shader.uniforms.countPerRow = { value: countPerRow };
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
