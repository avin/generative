import * as THREE from 'three';
import fragment__output_fragment from './shaders/ball/fragment__output_fragment.glsl';

export const createBalls = (ctx) => {
  const {
    scene,
    randomInstance,
    options: { ballsCount },
  } = ctx;

  const ballsParams = [];

  for (let i = 0; i < ballsCount; i++) {
    ballsParams.push({
      scale: randomInstance.range(0.1, 0.75),
      rFactor1: randomInstance.range(0, 1),
      rFactor2: randomInstance.range(0, 1),
      rFactor3: randomInstance.range(0, 1),
      yPos: randomInstance.gaussian(-0.5, 0.75),
    });
  }

  const geometry = new THREE.SphereGeometry(1, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    roughness: 1.0,
    metalness: 0.5,
    color: 0xffffff,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };

    shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', fragment__output_fragment);

    ctx.ballShader = shader;
  };

  const mesh = new THREE.InstancedMesh(geometry, material, ballsCount);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(mesh);

  ctx.ballsMesh = mesh;
  ctx.ballsParams = ballsParams;
};

const dummy = new THREE.Object3D();
const PI = Math.PI;
const PI2 = PI * 2;

export const updateBallsPositions = (ctx) => {
  const {
    ballsMesh,
    ballsParams,
    time,
    options: { ballsCount },
  } = ctx;

  for (let i = 0; i < ballsCount; i++) {
    const { scale, yPos, rFactor1, rFactor2, rFactor3 } = ballsParams[i];

    const t = time * (rFactor3 * 0.75 + 0.25) * 0.25;
    dummy.position.x = Math.sin(t + rFactor1 * PI2) * (5 + 10 * rFactor2);
    dummy.position.y = yPos;
    dummy.position.z = Math.cos(t + rFactor1 * PI2) * (5 + 10 * rFactor2);
    dummy.scale.set(scale, scale, scale);
    dummy.updateMatrix();

    ballsMesh.setMatrixAt(i, dummy.matrix);
  }

  ballsMesh.instanceMatrix.needsUpdate = true;
};
