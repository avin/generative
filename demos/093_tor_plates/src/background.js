import * as THREE from 'three';
import fragmentShader from './shaders/background/frag.glsl';

export const createBackground = (ctx) => {
  const camera = new THREE.OrthographicCamera(
    -1, // left
    1, // right
    1, // top
    -1, // bottom
    -1, // near,
    0, // far
  );
  const scene = new THREE.Scene();
  const plane = new THREE.PlaneBufferGeometry(2, 2);

  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
  };
  const material = new THREE.ShaderMaterial({
    fragmentShader,
    uniforms,
  });
  scene.add(new THREE.Mesh(plane, material));

  ctx.backScene = scene;
  ctx.backCamera = camera;
  ctx.backMaterial = material;
};
