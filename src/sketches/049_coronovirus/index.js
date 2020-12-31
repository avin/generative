import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Meshes/thinInstanceMesh';
import { Vector3, Matrix } from '@babylonjs/core/Maths/math';
import { CustomMaterial } from '@babylonjs/materials/custom/customMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline';
import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';

const settings = {
  animate: true,
  context: 'webgl',
};

const sketch = async ({ canvas, width, height }) => {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });

  const scene = new Scene(engine);
  scene.clearColor = new Color3(16 / 255, 22 / 255, 26 / 255);

  const camera = new ArcRotateCamera('camera', -Math.PI / 1.7, Math.PI / 3.5, 1.1, new Vector3(0, 0, 0), scene);
  camera.lowerBetaLimit = null;
  camera.upperBetaLimit = null;
  camera.lowerAlphaLimit = null;
  camera.upperAlphaLimit = null;
  camera.allowUpsideDown = true
  camera.attachControl(canvas, true);
  camera.fov = 1.0; // field of view
  camera.minZ = 0.1; // near plane
  camera.wheelPrecision = 150.0;

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight("hemiLight", new Vector3(-1, 1, 0), scene);
  light.diffuse = new Color3(1, 1, 1);
  light.specular = new Color3(1, 1, 1);
  light.groundColor = new Color3(1, 1, 1);

  // Material

  const mat = new CustomMaterial('s', scene);

  const meshesCount = 2000;

  // Tubes here

  const sideOrientation = Mesh.DEFAULTSIDE;
  const radius = 0.2;

  const path = [];
  const maxSegments = 100;
  for (let i = 0; i < maxSegments; i += 1) {
    const x = i;
    const y = 0;
    const z = 0;
    path.push(new Vector3(x, y, z));
  }
  const mesh = Mesh.CreateTube('tube', path, radius, 5, null, 0, scene, true, sideOrientation);
  mesh.material = mat;

  mesh.thinInstanceRegisterAttribute('idx', 1);

  for (let n = 0; n <= meshesCount; n += 1) {
    const matrix = Matrix.Translation(0, 0, 0);

    const idx = mesh.thinInstanceAdd(matrix);
    mesh.thinInstanceSetAttributeAt('idx', idx, [n]);
  }

  mat.AddUniform('iTime', 'float');
  mat.AddUniform('maxSegments', 'float');
  mat.AddUniform('meshesCount', 'float');
  mat.AddUniform('cameraPosition', 'vec3');
  mat.AddAttribute('idx');


  mat.Vertex_Definitions(`
varying float vIdx;
varying float vR;
attribute float idx;

#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3)
{
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float hash11(float p)
{
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

float noise(vec3 p)
{
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;

  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);

  vec3 d1 = d0 - (i1 - 1.0 * K2);
  vec3 d2 = d0 - (i2 - 2.0 * K2);
  vec3 d3 = d0 - (1.0 - 3.0 * K2);

  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

float rad2deg(float r) { return 180.0 * r / PI; }
float deg2rad(float d) { return PI * d / 180.0; }

mat3 rotMat(vec3 u, float angle)
{
    float s = sin(deg2rad(angle));
    float c = cos(deg2rad(angle));
    float i = 1.0-c;

    return mat3(
    c+u.x*u.x*i, u.x*u.y*i-u.z*s, u.x*u.z*i+u.y*s,
    u.y*u.x*i+u.z*s, c+u.y*u.y*i, u.y*u.z*i-u.x*s,
    u.z*u.x*i-u.y*s, u.z*u.y*i+u.x*s, c+u.z*u.z*i
    );
}

vec3 rotAxisAngle(vec3 position, vec3 axis, float angle)
{
    mat3 m = rotMat(axis, angle);
    return m * position;
}

vec3 rotY(vec3 v, float d)
{
    float r = deg2rad(d);
    float c = cos(r);
    float s = sin(r);
    return vec3(v.x*c+v.z*s, v.y, v.z*c+v.x*s);
}

vec3 rotX(vec3 v, float d)
{
    float r = deg2rad(d);
    float c = cos(r);
    float s = sin(r);
    return vec3(v.x, v.y*c+v.z*s, v.z*c+v.y*s);
}

vec3 rotZ(vec3 v, float d)
{
    float r = deg2rad(d);
    float c = cos(r);
    float s = sin(r);
    return vec3(v.x*c+v.y*s, v.y*c+v.x*s, v.z);
}
    `);
  mat.Vertex_Before_PositionUpdated(`

vIdx = idx;

vec3 vpos = position;

// float t = mod(iTime*.5, 1.)*2.;
float t = iTime*.5;

t+=t;

float k = .1 + noise(vec3(idx,idx+iTime*.1,0.))*.025;

// float lr = max(vpos.x-(maxSegments-2.) + t*1000., 1.)*.01;
float l = vpos.x*k*.9;
// l = max(5.5, l);

float maxL = maxSegments * k;

float lm = l/maxL;
float lmn = 1.-lm;

vR = lm;

vpos.x = l;

vpos.x = l + (sin(noise(vec3(-l + 100.,idx,l)))*.5 + .5)*.25;
vpos.y = vpos.y*lmn + noise(vec3(-l + iTime,idx,l))*.25;
vpos.z = vpos.z*lmn + noise(vec3(-l + iTime,idx+meshesCount,l))*.25;

float raX = hash11((idx/meshesCount + 1.033))*360.;
float raY = hash11((idx/meshesCount + 2.071))*360.;
float raZ = hash11((idx/meshesCount + 3.85))*360.;

mat3 rot = rotMat (vec3(idx*10., idx*10., idx*10.), idx*10.);

vpos = rotAxisAngle(vpos, vec3(1.,0., 0.), raX);
vpos = rotAxisAngle(vpos, vec3(0.,1., 0.), raY);
vpos = rotAxisAngle(vpos, vec3(0.,0., 1.), raZ);

normalUpdated = rotAxisAngle(normalUpdated, vec3(1.,0., 0.), raX);
normalUpdated = rotAxisAngle(normalUpdated, vec3(0.,1., 0.), raY);
normalUpdated = rotAxisAngle(normalUpdated, vec3(0.,0., 1.), raZ);

vpos *= .05;

positionUpdated = vpos;

  `);

  mat.Fragment_Definitions(`
varying float vIdx;
varying float vR;

#define COL vec3(235, 241, 245) / 255.0

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

float hash11(float p)
{
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
  `)

  mat.Fragment_Before_FragColor(`
vec3 col = hue(hash11(vIdx*.01) * sin(vR*20.*hash11(vIdx*.0132))).rgb;
color = vec4(col, 1.);
  `)

  const initTime = +new Date();
  let time = 0;
  mat.onBind = () => {
    mat.getEffect().setFloat('maxSegments', maxSegments);
    mat.getEffect().setFloat('meshesCount', meshesCount);
    mat.getEffect().setFloat('cameraPosition', Vector3.Zero());

    time=(+new Date() - initTime)*.001;
    mat.getEffect().setFloat('iTime', time);
  };

  // postprocess

  const pipeline = new DefaultRenderingPipeline(
    'defaultPipeline', // The name of the pipeline
    true,
    scene,
    [camera],
  );

  pipeline.imageProcessingEnabled = false;

  // Chromatic Aberration
  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 10; // 30 by default

  // Bloom
  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = .5;
  pipeline.bloomWeight = 1.0;
  pipeline.bloomKernel = 70;
  pipeline.bloomScale = 0.5;

  // Grain
  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 50;
  pipeline.grain.animated = true;
  //
  const motionblur = new MotionBlurPostProcess('mb', scene, 2.0, camera);
  motionblur.motionStrength = 1.5;
  motionblur.isObjectBased = false;


  return {
    render({ time, width, height }) {
      scene.render();
    },
    resize({ pixelRatio, width, height }) {
      engine.resize();
    },
    unload() {
      engine.dispose();
    },
  };
};

export default { sketch, settings };
