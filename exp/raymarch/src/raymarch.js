import * as THREE from 'three';
import fragmentShader from './shaders/raymarch/frag.glsl';
import vertexShader from './shaders/raymarch/vert.glsl';

export const createRaymarch = (ctx) => {
  const { scene } = ctx;

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
    },
    fragmentShader,
    vertexShader,
  });
  material.transparent = true;

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // wireframe
  const wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry),
    new THREE.LineBasicMaterial({ color: 0xffffff }),
  );
  mesh.add(wireframe);

  ctx.raymarchMesh = mesh;
};
