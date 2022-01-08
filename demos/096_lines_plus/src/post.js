import * as THREE from 'three';
import vertexShader from './shaders/post/vert.glsl';
import fragmentShader from './shaders/post/frag.glsl';

export const createPostScene = (ctx) => {
  ctx.postScene = {};

  // ***************
  // POST
  // ***************

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  ctx.postScene.camera = camera;

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      iTime: { value: 0 },
      tDiffuse: { value: null },
    },
  });
  ctx.postScene.material = material;
  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  const scene = new THREE.Scene();
  scene.add(mesh);

  ctx.postScene.scene = scene;
};
