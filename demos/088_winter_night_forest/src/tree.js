import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';
import alphamapFragmentShader from './shaders/tree-snow/alphamap_fragment.glsl';
import commonShader from './shaders/tree-snow/common.glsl';

let treeMaterial;
let treeSnowMaterial;

const getTreeMaterial = () => {
  if (treeMaterial) {
    return treeMaterial;
  }
  treeMaterial = new THREE.MeshLambertMaterial({
    side: THREE.DoubleSide,
    // flatShading: true,
  });

  const hue = 0.4;
  const saturation = 1;
  const luminance = 0.5;
  treeMaterial.color.setHSL(hue, saturation, luminance);

  return treeMaterial;
};

const getTreeSnowMaterial = (ctx) => {
  if (treeSnowMaterial) {
    return treeSnowMaterial;
  }

  treeSnowMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('hsl(0, 0%, 98%)'),
    side: THREE.DoubleSide,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 0.4,
  });

  treeSnowMaterial.defines.USE_UV = true;

  treeSnowMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };

    ctx.treeSnowMaterialShader = shader;

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <alphamap_fragment>', alphamapFragmentShader)
      .replace('#include <common>', commonShader);
  };

  return treeSnowMaterial;
};

const createTreeGeometry = (ctx) => {
  const { randomInstance } = ctx;

  const height = 1;
  const levels = 10;

  const geometry = new THREE.CylinderGeometry(0.4, 0, height, 20, levels);

  const count = geometry.attributes.position.count;

  for (let i = 0; i < count; i += 1) {
    let x = geometry.attributes.position.getX(i);
    let y = geometry.attributes.position.getY(i);
    let z = geometry.attributes.position.getZ(i);

    y += height * 0.5;

    const randomFactor = y * 0.1;

    const level = Math.round(y * 10);

    x += randomInstance.value() * randomFactor;
    z += randomInstance.value() * randomFactor;

    if (level % 2 === 0) {
      x *= 0.21;
      z *= 0.1;
      y -= 0.15;
    } else if (level) {
      y += (randomInstance.value() - 0.5) * 0.1;
    }

    // Пилим верхушки
    if (level <= 2) {
      x *= 0.0;
      z *= 0.0;
    }

    geometry.attributes.position.setX(i, x);
    geometry.attributes.position.setY(i, y);
    geometry.attributes.position.setZ(i, z);
  }
  geometry.rotateZ(Math.PI);
  geometry.computeVertexNormals();

  return geometry;
};

const createTree = (ctx, treeParams) => {
  const { position, scale } = treeParams;

  const treeMesh = new THREE.Mesh(createTreeGeometry(ctx));

  treeMesh.position.x = position.x;
  treeMesh.position.y = position.y;
  treeMesh.position.z = position.z;

  treeMesh.scale.y = scale.height;
  treeMesh.position.y += scale.height;

  treeMesh.scale.x = scale.wide;
  treeMesh.scale.z = scale.wide;

  const treeSnowMesh = new THREE.Mesh(createTreeGeometry(ctx));

  treeSnowMesh.position.x = treeMesh.position.x;
  treeSnowMesh.position.y = treeMesh.position.y + 0.1;
  treeSnowMesh.position.z = treeMesh.position.z;

  treeSnowMesh.scale.x = treeMesh.scale.x;
  treeSnowMesh.scale.y = treeMesh.scale.y;
  treeSnowMesh.scale.z = treeMesh.scale.z;

  return { treeMesh, treeSnowMesh };
};

export const createTrees = (ctx) => {
  const { options, scene } = ctx;
  const halfSquareSize = options.squareSize / 2;

  const treeMeshGeometries = [];
  const treeSnowMeshGeometries = [];

  const { randomInstance } = ctx;
  for (let i = 0; i < options.treesPerSquare; i += 1) {
    const position = {
      x: randomInstance.range(-halfSquareSize, halfSquareSize),
      z: randomInstance.range(-halfSquareSize, halfSquareSize),
      y: 0,
    };
    position.y -= randomInstance.noise2D(position.x * 0.1, position.z * 0.1) * 0.75;

    const { treeMesh, treeSnowMesh } = createTree(ctx, {
      position,
      scale: {
        height: 1 + randomInstance.value(),
        wide: 1 + randomInstance.value(),
      },
    });

    treeMesh.geometry.scale(treeMesh.scale.x, treeMesh.scale.y, treeMesh.scale.z);
    treeMesh.geometry.translate(treeMesh.position.x, treeMesh.position.y, treeMesh.position.z);
    treeMeshGeometries.push(treeMesh.geometry);

    treeSnowMesh.geometry.scale(treeSnowMesh.scale.x, treeSnowMesh.scale.y, treeSnowMesh.scale.z);
    treeSnowMesh.geometry.translate(treeSnowMesh.position.x, treeSnowMesh.position.y, treeSnowMesh.position.z);
    treeSnowMeshGeometries.push(treeSnowMesh.geometry);
  }

  const mergedTreeMeshGeometry = BufferGeometryUtils.mergeBufferGeometries(treeMeshGeometries);
  const mergedTreeMesh = new THREE.Mesh(mergedTreeMeshGeometry, getTreeMaterial());
  mergedTreeMesh.castShadow = true;
  mergedTreeMesh.receiveShadow = true;
  scene.add(mergedTreeMesh);
  ctx.objects.treesMesh = mergedTreeMesh;

  const mergedTreeSnowMeshGeometry = BufferGeometryUtils.mergeBufferGeometries(treeSnowMeshGeometries);
  const mergedTreeSnowMesh = new THREE.Mesh(mergedTreeSnowMeshGeometry, getTreeSnowMaterial(ctx));
  mergedTreeSnowMesh.castShadow = true;
  mergedTreeSnowMesh.receiveShadow = true;
  scene.add(mergedTreeSnowMesh);
  ctx.objects.treesShowMesh = mergedTreeSnowMesh;
};
