import * as THREE from 'three';
import vertex__common from './shaders/box/vertex__common.glsl';
import vertex__begin_vertex from './shaders/box/vertex__begin_vertex.glsl';
import fragment__color_fragment from './shaders/box/fragment__color_fragment.glsl';
import fragment__common from './shaders/box/fragment__common.glsl';

export const createBoxes = (ctx) => {
  const { scene } = ctx;

  const size = 31;
  const count = size * size;

  const halfSize = size / 2;

  const translateArray = new Float32Array(count * 3);
  const idxArray = new Float32Array(count);

  let i = 0;
  for (let x = 0; x < size; x += 1) {
    for (let z = 0; z < size; z += 1) {
      translateArray[i * 3 + 0] = x - halfSize;
      translateArray[i * 3 + 1] = 0;
      translateArray[i * 3 + 2] = z - halfSize;

      idxArray[i] = i;

      i++;
    }
  }

  const baseGeometry = new THREE.BoxGeometry();

  const geometry = new THREE.InstancedBufferGeometry();
  geometry.index = baseGeometry.index;
  geometry.attributes = baseGeometry.attributes;

  geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(translateArray, 3));
  geometry.setAttribute('idx', new THREE.InstancedBufferAttribute(idxArray, 1));

  const material = new THREE.MeshStandardMaterial({
    roughness: 0.9,
    metalness: 0.0,
    color: 0xdb2c6f,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };
    shader.uniforms.rowSize = { value: size };

    shader.vertexShader = shader.vertexShader.replace('#include <common>', vertex__common);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertex__begin_vertex);

    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', fragment__common);
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', fragment__color_fragment);

    ctx.boxShader = shader;
  };

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};
