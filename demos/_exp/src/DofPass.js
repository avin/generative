import {
  Color,
  MeshDepthMaterial,
  NearestFilter,
  NoBlending,
  RGBADepthPacking,
  ShaderMaterial,
  UniformsUtils,
  WebGLRenderTarget,
  Uniform,
  Vector2,
} from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import vertexShader from './shaders/dof/vert.glsl';
import fragmentShader from './shaders/dof/frag.glsl';

const DofShader = {
  defines: {
    DEPTH_PACKING: 1,
    PERSPECTIVE_CAMERA: 1,
  },

  uniforms: {
    tColor: { value: null },
    tDepth: { value: null },
    uFar: { value: 10.0 },
    radScale: { value: 0.5 },
    depthFactor: { value: 10 },
    focusPoint: { value: 88 },
    focusScale: { value: 100 },
    resolution: new Uniform(new Vector2()),
  },
  vertexShader,
  fragmentShader,
};

export class DofPass extends Pass {
  constructor(scene, camera, params = {}) {
    super();

    this.scene = scene;
    this.camera = camera;

    const { uFar, radScale, focusPoint, focusScale, depthFactor } = {
      uFar: 10,
      radScale: 0.5,
      depthFactor: 10,
      focusPoint: 88,
      focusScale: 100,
      ...params,
    };

    // render targets

    const width = params.width || window.innerWidth || 1;
    const height = params.height || window.innerHeight || 1;

    this.renderTargetDepth = new WebGLRenderTarget(width, height, {
      minFilter: NearestFilter,
      magFilter: NearestFilter,
    });

    this.renderTargetDepth.texture.name = 'Dof.depth';

    // depth material

    this.materialDepth = new MeshDepthMaterial();
    this.materialDepth.depthPacking = RGBADepthPacking;
    this.materialDepth.blending = NoBlending;
    this.materialDepth.isMeshDepthMaterial = true;

    // this.materialDepth.onBeforeCompile = (shader) => {
    //   shader.vertexShader = shader.vertexShader.replace('#include <logdepthbuf_vertex>', '');
    // };

    // dof material

    const dofShader = DofShader;
    const dofUniforms = UniformsUtils.clone(dofShader.uniforms);

    dofUniforms.tDepth.value = this.renderTargetDepth.texture;

    dofUniforms.uFar.value = uFar;
    dofUniforms.radScale.value = radScale;
    dofUniforms.depthFactor.value = depthFactor;
    dofUniforms.focusPoint.value = focusPoint;
    dofUniforms.focusScale.value = focusScale;
    dofUniforms.resolution.value.x = width;
    dofUniforms.resolution.value.y = height;

    this.materialDof = new ShaderMaterial({
      defines: { ...dofShader.defines },
      uniforms: dofUniforms,
      vertexShader: dofShader.vertexShader,
      fragmentShader: dofShader.fragmentShader,
    });

    this.uniforms = dofUniforms;
    // this.needsSwap = false;

    this.fsQuad = new FullScreenQuad(this.materialDof);

    this._oldClearColor = new Color();
  }

  render(renderer, writeBuffer, readBuffer /* , deltaTime, maskActive*/) {
    // Render depth into texture

    this.scene.overrideMaterial = this.materialDepth;

    renderer.getClearColor(this._oldClearColor);
    const oldClearAlpha = renderer.getClearAlpha();
    const oldAutoClear = renderer.autoClear;
    renderer.autoClear = false;

    renderer.setClearColor(0xffffff);
    renderer.setClearAlpha(1.0);
    renderer.setRenderTarget(this.renderTargetDepth);
    renderer.clear();
    renderer.render(this.scene, this.camera);

    // Render dof composite

    this.uniforms.tColor.value = readBuffer.texture;
    // this.uniforms.nearClip.value = this.camera.near;
    // this.uniforms.farClip.value = this.camera.far;

    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      // renderer.clear();
      if (this.clear) {
        renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
      }
      this.fsQuad.render(renderer);
    }

    this.scene.overrideMaterial = null;
    renderer.setClearColor(this._oldClearColor);
    renderer.setClearAlpha(oldClearAlpha);
    renderer.autoClear = oldAutoClear;
  }
}
