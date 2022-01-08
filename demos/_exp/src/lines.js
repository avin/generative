import * as THREE from 'three';
import vertex__begin_vertex from './shaders/line/vertex__begin_vertex.glsl';
import vertex__common from './shaders/line/vertex__common.glsl';

export const createLinesScene = (ctx) => {
  ctx.linesScene = {};

  // ***************
  // SCENE
  // ***************

  const scene = new THREE.Scene();
  ctx.linesScene.scene = scene;

  // ***************
  // CAMERA
  // ***************

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20);
  ctx.linesScene.camera = camera;

  camera.position.set(0, 5, 3);

  camera.lookAt(new THREE.Vector3());

  // ***************
  // MESH
  // ***************

  const material = new THREE.LineBasicMaterial({ color: 0xffffff, vertexColors: true });
  ctx.linesScene.material = material;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };
    shader.uniforms.tDiffuse = { value: THREE.Texture };
    shader.uniforms.tDepth = { value: THREE.Texture };

    shader.vertexShader = shader.vertexShader.replace('#include <common>', vertex__common);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertex__begin_vertex);

    ctx.linesScene.materialShader = shader;
  };

  const totalLines = 100;
  const totalPoints = 200;
  const size = 10;
  for (let i = 0; i < totalLines; i += 1) {
    const ti = (i - totalLines / 2) / totalLines;
    const geometry = new THREE.BufferGeometry();

    const vertices = [];

    for (let n = 0; n < totalPoints; n++) {
      const tn = (n - totalPoints / 2) / totalPoints;
      vertices.push(tn * size, 0, ti * size);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const line = new THREE.Line(geometry, material);

    scene.add(line);
  }
};
