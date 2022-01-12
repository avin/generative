import * as THREE from 'three';
import vertex__common from './shaders/ball/vertex__common.glsl';
import vertex__begin_vertex from './shaders/ball/vertex__begin_vertex.glsl';
import fragment__color_fragment from './shaders/ball/fragment__color_fragment.glsl';
import fragment__output_fragment from './shaders/ball/fragment__output_fragment.glsl';
import fragment__common from './shaders/ball/fragment__common.glsl';

export const createBalls = (ctx) => {
  const { scene, randomInstance } = ctx;

  const count = 1000;

  const translateArray = new Float32Array(count * 3);
  const scaleArray = new Float32Array(count * 1);
  const rFactor1Array = new Float32Array(count * 1);
  const rFactor2Array = new Float32Array(count * 1);
  const rFactor3Array = new Float32Array(count * 1);

  for (let i = 0; i < count; i += 1) {
    translateArray[i * 3 + 0] = 0;
    translateArray[i * 3 + 1] = randomInstance.gaussian(-.5, .75);
    translateArray[i * 3 + 2] = 0;

    scaleArray[i] = randomInstance.range(0.05, .75);
    rFactor1Array[i] = randomInstance.range(0, 1);
    rFactor2Array[i] = randomInstance.range(0, 1);
    rFactor3Array[i] = randomInstance.range(0, 1);
  }

  const baseGeometry = new THREE.SphereGeometry(1, 64, 64);

  const geometry = new THREE.InstancedBufferGeometry();
  geometry.index = baseGeometry.index;
  geometry.attributes = baseGeometry.attributes;

  geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(translateArray, 3));
  geometry.setAttribute('scale', new THREE.InstancedBufferAttribute(scaleArray, 1));
  geometry.setAttribute('rFactor1', new THREE.InstancedBufferAttribute(rFactor1Array, 1));
  geometry.setAttribute('rFactor2', new THREE.InstancedBufferAttribute(rFactor2Array, 1));
  geometry.setAttribute('rFactor3', new THREE.InstancedBufferAttribute(rFactor3Array, 1));

  const material = new THREE.MeshStandardMaterial({
    roughness: 2.0,
    metalness: 0.5,
    color: 0xffffff,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };

    shader.vertexShader = shader.vertexShader.replace('#include <common>', vertex__common);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertex__begin_vertex);

    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', fragment__common);
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', fragment__color_fragment);
    shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', fragment__output_fragment);

    ctx.ballShader = shader;
  };

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};
