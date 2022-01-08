import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import vertex__begin_vertex from './shaders/line/vertex__begin_vertex.glsl';
import vertex__common from './shaders/line/vertex__common.glsl';
import fragment__common from './shaders/line/fragment__common.glsl';
import fragment__output_fragment from './shaders/line/fragment__output_fragment.glsl';

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

  camera.position.set(0, 7, 5);

  camera.lookAt(new THREE.Vector3());

  // ***************
  // CONTROLS
  // ***************

  const controls = new OrbitControls(camera, ctx.renderer.domElement);
  ctx.plusScene.controls = controls;
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI / 3 - 0.1;
  controls.update();

  // ***************
  // MESH
  // ***************

  const material = new THREE.LineBasicMaterial({ color: 0x666666, vertexColors: false });
  ctx.linesScene.material = material;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.iTime = { value: 0 };
    shader.uniforms.tDiffuse = { value: THREE.Texture };
    shader.uniforms.tDepth = { value: THREE.Texture };

    shader.vertexShader = shader.vertexShader.replace('#include <common>', vertex__common);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', vertex__begin_vertex);

    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', fragment__common);
    shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', fragment__output_fragment);

    ctx.linesScene.materialShader = shader;
  };

  const totalLines = 300;
  const totalPoints = 400;
  const size = 20;
  const geometry = new THREE.BufferGeometry();

  const vertices = [];

  for (let i = 0; i < totalLines; i += 1) {
    const ti = (i - totalLines / 2) / totalLines;

    for (let n = 0; n < totalPoints; n++) {
      const tn = i % 2 ? (n - totalPoints / 2) / totalPoints : (totalPoints - n - totalPoints / 2) / totalPoints;
      vertices.push(tn * size, 0, ti * size);
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const line = new THREE.Line(geometry, material);

  scene.add(line);
};
