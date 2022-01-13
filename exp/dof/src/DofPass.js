import {
  Color,
  MeshDepthMaterial,
  NearestFilter,
  NoBlending,
  RGBADepthPacking,
  ShaderMaterial,
  UniformsUtils,
  WebGLRenderTarget,
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
    focus: { value: 1.0 },
    aspect: { value: 1.0 },
    aperture: { value: 0.025 },
    maxblur: { value: 0.01 },
    nearClip: { value: 1.0 },
    farClip: { value: 1000.0 },
  },
  vertexShader,
  fragmentShader,
};

export class DofPass extends Pass {
  constructor(scene, camera, params = {}) {
    super();

    this.scene = scene;
    this.camera = camera;

    const { focus, aspect, aperture, maxblur } = {
      focus: 1,
      aspect: camera.aspect,
      aperture: 0.025,
      maxblur: 1,
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

    // dof material

    const dofShader = DofShader;
    const dofUniforms = UniformsUtils.clone(dofShader.uniforms);

    dofUniforms.tDepth.value = this.renderTargetDepth.texture;

    dofUniforms.focus.value = focus;
    dofUniforms.aspect.value = aspect;
    dofUniforms.aperture.value = aperture;
    dofUniforms.maxblur.value = maxblur;
    dofUniforms.nearClip.value = camera.near;
    dofUniforms.farClip.value = camera.far;

    this.materialDof = new ShaderMaterial({
      defines: { ...dofShader.defines },
      uniforms: dofUniforms,
      vertexShader: dofShader.vertexShader,
      fragmentShader: dofShader.fragmentShader,
    });

    this.uniforms = dofUniforms;
    this.needsSwap = false;

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
    this.uniforms.nearClip.value = this.camera.near;
    this.uniforms.farClip.value = this.camera.far;

    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      renderer.clear();
      this.fsQuad.render(renderer);
    }

    this.scene.overrideMaterial = null;
    renderer.setClearColor(this._oldClearColor);
    renderer.setClearAlpha(oldClearAlpha);
    renderer.autoClear = oldAutoClear;
  }
}
