import { getWebGLContext } from '@/utils/webgl';
import * as T from 'three125';
import { OrbitControls } from 'three125/examples/jsm/controls/OrbitControls';
// import { Geometry } from 'three125/examples/jsm/deprecated/Geometry';
import * as dat from 'dat.gui';
import anime from 'animejs';

const settings = {
  animate: true,
  context: getWebGLContext(),
};

const sketch = ({ canvas, context, viewportWidth, viewportHeight, pixelRatio }) => {
  const gui = new dat.GUI({ autoPlace: false });
  document.querySelector('#debugger').append(gui.domElement);

  // ------------------------

  const renderer = new T.WebGLRenderer({
    canvas: context.canvas,
    antialias: true,
  });
  renderer.setClearColor('hsl(0, 0%, 98%)', 1);
  renderer.setClearColor('hsl(0, 0%, 10%)', 1);

  const aRatio = viewportWidth / viewportHeight;
  const camera = new T.PerspectiveCamera(50, aRatio, 0.01, 10);
  // const camera = new T.OrthographicCamera(-1 * aRatio, 1 * aRatio, 1, -1, 0.1, 100);
  camera.position.z = 5;
  camera.position.y = 2;
  camera.lookAt(new T.Vector3(0, 0, 0));

  const scene = new T.Scene();

  const material = new T.MeshStandardMaterial({
    color: 0xff9900,
    roughness: 0.01,
    metalness: 0,
    wireframe: false,
    side: T.DoubleSide,
  });
  // const material = new T.MeshToonMaterial({ color: 0xff0000 });
  // const material = new T.MeshDepthMaterial();

  // const textureLoader = new T.TextureLoader();
  // const matcapTexture = textureLoader.load('static/assets/matcaps/pack2/00007.png');
  // material.matcap = matcapTexture;

  const cubeTextureLoader = new T.CubeTextureLoader();

  const environmentMapTexture = cubeTextureLoader.load([
    'static/assets/env/4/px.png',
    'static/assets/env/4/nx.png',
    'static/assets/env/4/py.png',
    'static/assets/env/4/ny.png',
    'static/assets/env/4/pz.png',
    'static/assets/env/4/nz.png',
  ]);
  material.envMap = environmentMapTexture;

  const mesh1 = new T.Mesh(new T.SphereBufferGeometry(0.5, 50, 50), material);
  scene.add(mesh1);

  const mesh2 = new T.Mesh(new T.BoxGeometry(1, 1, 1), material);
  mesh2.position.x = 1;
  scene.add(mesh2);

  const mesh3 = new T.Mesh(new T.TorusGeometry(0.5, 0.2, 20, 50), material);
  mesh3.position.x = -1;
  scene.add(mesh3);

  const light = new T.HemisphereLight(new T.Color(1, 1, 1), new T.Color(0.0, 0.0, 0.0), 1);
  const helper = new T.HemisphereLightHelper(light, 5);
  scene.add(light);
  scene.add(helper);

  // const light2 = new T.AmbientLight(new T.Color(1, 1, 1), .1);
  // scene.add(light2);
  //
  const light3 = new T.PointLight(new T.Color(1, 1, 1), 1);
  light3.position.set(0, 3, 0);
  scene.add(light3);
  const pHelper = new T.PointLightHelper(light3, 0.2);
  scene.add(pHelper);

  const axesHelper = new T.AxesHelper(2);
  scene.add(axesHelper);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  gui.add(light3.position, 'y').min(0).max(10).step(0.01);
  gui.add(material, 'metalness').min(0).max(1).step(0.01);
  gui.add(material, 'roughness').min(0).max(1).step(0.01);
  // gui.add(mesh, 'visible');
  //
  // const parameters = {
  //   color: 0xff0000,
  //   spin: () => {
  //     anime({ targets: mesh.rotation, y: mesh.rotation.y + Math.PI * 2, duration: 2000 });
  //   },
  // };
  //
  // gui.addColor(parameters, 'color').onChange(() => {
  //   material.color.set(parameters.color);
  // });
  //
  // gui.add(parameters, 'spin');

  return {
    render({ time, dimensions }) {
      // mesh.rotation.x = time / 2;
      // mesh.rotation.y = time;

      controls.update();

      renderer.render(scene, camera);
    },
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    unload() {
      renderer.dispose();
    },
  };
};

export default { sketch, settings };
