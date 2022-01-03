import * as THREE from 'three';
import alphamapFragmentShader from './shaders/ground/alphamap_fragment.glsl';
import commonShader from './shaders/ground/common.glsl';

export const createGround = (ctx) => {
  const { randomInstance, scene, options } = ctx;

  const geometry = new THREE.PlaneGeometry(options.squareSize, options.squareSize, 200, 200);

  const count = geometry.attributes.position.count;
  for (let i = 0; i < count; i += 1) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);
    let z = geometry.attributes.position.getZ(i);

    z += randomInstance.noise2D(x * 0.1, y * 0.1) * 0.75;

    z += randomInstance.noise2D(1000 + x * 0.5, y * 0.5) * 0.125;

    geometry.attributes.position.setZ(i, z);
  }
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('hsl(197, 90%, 98%)'),
    side: THREE.DoubleSide,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 0.01,
  });

  material.defines.USE_UV = true;

  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };

    ctx.snowMaterialShader = shader;

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <alphamap_fragment>', alphamapFragmentShader)
      .replace('#include <common>', commonShader);
  };

  const ground = new THREE.Mesh(geometry, material);

  ground.rotation.x = +Math.PI * 0.5;
  ground.position.y = +0.1;

  ground.receiveShadow = true;

  scene.add(ground);
};
