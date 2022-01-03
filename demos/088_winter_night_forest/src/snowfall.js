import * as THREE from 'three';
import vertexShader from './shaders/snowfall/vert.glsl';
import fragmentShader from './shaders/snowfall/frag.glsl';

export const createSnowfall = (ctx) => {
  const { randomInstance, scene, camera, options } = ctx;

  const geometry = new THREE.BufferGeometry();

  const positions = [];

  for (let i = 0; i < options.snowfallParticlesCount; i += 1) {
    positions.push((randomInstance.value() - 0.5) * options.squareSize);
    positions.push((randomInstance.value() - 0.5) * 4 + 6);
    positions.push((randomInstance.value() - 0.5) * options.squareSize);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const shaderPoint = THREE.ShaderLib.points;
  const uniforms = {
    ...shaderPoint.uniforms,
    iTime: { value: 0 },
    pSize: { value: 10 },
    camPosition: new THREE.Uniform(camera.position),

    fogColor: { type: 'c', value: scene.fog.color },
    fogNear: { type: 'f', value: scene.fog.near },
    fogFar: { type: 'f', value: scene.fog.far },
  };

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,

    blending: THREE.NormalBlending,

    vertexShader,
    fragmentShader,

    fog: true,
  });

  const snowfall = new THREE.Points(geometry, shaderMaterial);
  snowfall.position.y += 4;
  snowfall.sortParticles = true;

  scene.add(snowfall);

  ctx.objects.snowfall = snowfall;
};
