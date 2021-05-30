(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[52,222,223],{343:function(Q,G,u){"use strict";u.r(G),G.default=`#define GLSLIFY 1
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float noise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x +
                   vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

vec3 distortFunct(vec3 transformed) {
  float rv = -noise(transformed * radiusNoiseFrequency + iTime + 100.) * radiusVariationAmplitude;

  return normalize(transformed) * (rv + radius);
}

vec3 orthogonal(vec3 v) { return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y)); }

vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal) {
  vec3 tangent1 = normalize(orthogonal(normal));
  vec3 tangent2 = normalize(cross(normal, tangent1));
  vec3 nearby1 = position + tangent1 * 0.013;
  vec3 nearby2 = position + tangent2 * 0.013;
  vec3 distorted1 = distortFunct(nearby1);
  vec3 distorted2 = distortFunct(nearby2);
  return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
}
`},344:function(Q,G,u){"use strict";u.r(G),G.default=`#define GLSLIFY 1
float updateTime = iTime * .1;
positionUpdated = distortFunct(positionUpdated);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
// normalUpdated = normalize(normalUpdated + distortedNormal);
normalUpdated = distortedNormal;

`},444:function(Q,G,u){"use strict";u.d(G,"a",function(){return t});var l=u(434),r=u(490),C=u(438),T=u(436),m=u(534),D=u(445),E=u(500),i=u(439),e=u(437),t=function(){function c(a,f,d,h,A,S,O,I,x,P,y,F,V,L,j){O===void 0&&(O=1),P===void 0&&(P=null),y===void 0&&(y=0),F===void 0&&(F="postprocess"),L===void 0&&(L=!1),j===void 0&&(j=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new r.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new T.d(1,1),this._texelSize=T.d.Zero(),this.onActivateObservable=new C.c,this.onSizeChangedObservable=new C.c,this.onApplyObservable=new C.c,this.onBeforeRenderObservable=new C.c,this.onAfterRenderObservable=new C.c,this.name=a,S!=null?(this._camera=S,this._scene=S.getScene(),S.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):I&&(this._engine=I,this._engine.postProcesses.push(this)),this._options=A,this.renderTargetSamplingMode=O||1,this._reusable=x||!1,this._textureType=y,this._textureFormat=j,this._samplers=h||[],this._samplers.push("textureSampler"),this._fragmentUrl=f,this._vertexUrl=F,this._parameters=d||[],this._parameters.push("scale"),this._indexParameters=V,L||this.updateEffect(P)}return Object.defineProperty(c.prototype,"samples",{get:function(){return this._samples},set:function(a){var f=this;this._samples=Math.min(a,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(d){d.samples!==f._samples&&f._engine.updateRenderTargetTextureSampleCount(d,f._samples)})},enumerable:!1,configurable:!0}),c.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(c.prototype,"onActivate",{set:function(a){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),a&&(this._onActivateObserver=this.onActivateObservable.add(a))},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"onSizeChanged",{set:function(a){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"onApply",{set:function(a){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"onBeforeRender",{set:function(a){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"onAfterRender",{set:function(a){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(a){this._forcedOutputTexture=a},enumerable:!1,configurable:!0}),c.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},c.prototype.getCamera=function(){return this._camera},Object.defineProperty(c.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcess"},c.prototype.getEngine=function(){return this._engine},c.prototype.getEffect=function(){return this._effect},c.prototype.shareOutputWith=function(a){return this._disposeTextures(),this._shareOutputWithPostProcess=a,this},c.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new r.a(2)),this._shareOutputWithPostProcess=null},c.prototype.updateEffect=function(a,f,d,h,A,S,O,I){a===void 0&&(a=null),f===void 0&&(f=null),d===void 0&&(d=null),this._postProcessDefines=a,this._effect=this._engine.createEffect({vertex:O!=null?O:this._vertexUrl,fragment:I!=null?I:this._fragmentUrl},["position"],f||this._parameters,d||this._samplers,a!==null?a:"",void 0,A,S,h||this._indexParameters)},c.prototype.isReusable=function(){return this._reusable},c.prototype.markTextureDirty=function(){this.width=-1},c.prototype._createRenderTargetTexture=function(a,f,d){d===void 0&&(d=0);for(var h=0;h<this._textureCache.length;h++)if(this._textureCache[h].texture.width===a.width&&this._textureCache[h].texture.height===a.height&&this._textureCache[h].postProcessChannel===d)return this._textureCache[h].texture;var A=this._engine.createRenderTargetTexture(a,f);return this._textureCache.push({texture:A,postProcessChannel:d,lastUsedRenderId:-1}),A},c.prototype._flushTextureCache=function(){for(var a=this._renderId,f=this._textureCache.length-1;f>=0;f--)if(a-this._textureCache[f].lastUsedRenderId>100){for(var d=!1,h=0;h<this._textures.length;h++)if(this._textures.data[h]===this._textureCache[f].texture){d=!0;break}d||(this._engine._releaseTexture(this._textureCache[f].texture),this._textureCache.splice(f,1))}},c.prototype._resize=function(a,f,d,h,A){this._textures.length>0&&this._textures.reset(),this.width=a,this.height=f;var S={width:this.width,height:this.height},O={generateMipMaps:h,generateDepthBuffer:A||d._postProcesses.indexOf(this)===0,generateStencilBuffer:(A||d._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(S,O,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(S,O,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},c.prototype.activate=function(a,f,d){var h=this;f===void 0&&(f=null),a=a||this._camera;var A=a.getScene(),S=A.getEngine(),O=S.getCaps().maxTextureSize,I=(f?f.width:this._engine.getRenderWidth(!0))*this._options|0,x=(f?f.height:this._engine.getRenderHeight(!0))*this._options|0,P=a.parent;P&&(P.leftCamera==a||P.rightCamera==a)&&(I/=2);var y=this._options.width||I,F=this._options.height||x,V=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var L=S.currentViewport;L&&(y*=L.width,F*=L.height)}(V||this.alwaysForcePOT)&&(this._options.width||(y=S.needPOTTextures?D.a.GetExponentOfTwo(y,O,this.scaleMode):y),this._options.height||(F=S.needPOTTextures?D.a.GetExponentOfTwo(F,O,this.scaleMode):F)),(this.width!==y||this.height!==F)&&this._resize(y,F,a,V,d),this._textures.forEach(function(v){v.samples!==h.samples&&h._engine.updateRenderTargetTextureSampleCount(v,h.samples)}),this._flushTextureCache(),this._renderId++}var j;if(this._shareOutputWithPostProcess)j=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)j=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{j=this.inputTexture;for(var R=void 0,_=0;_<this._textureCache.length;_++)if(this._textureCache[_].texture===j){R=this._textureCache[_];break}R&&(R.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(I/y,x/F),this._engine.bindFramebuffer(j,0,I,x,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(j,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(a),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:A.clearColor,A._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),j},Object.defineProperty(c.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),c.prototype.isReady=function(){return this._effect&&this._effect.isReady()},c.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var a;return this._shareOutputWithPostProcess?a=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?a=this._forcedOutputTexture:a=this.inputTexture,this._effect._bindTexture("textureSampler",a),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},c.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},c.prototype._disposeTextureCache=function(){for(var a=this._textureCache.length-1;a>=0;a--)this._engine._releaseTexture(this._textureCache[a].texture);this._textureCache.length=0},c.prototype.setPrePassRenderer=function(a){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=a.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},c.prototype.dispose=function(a){a=a||this._camera,this._disposeTextures();var f;if(this._scene&&(f=this._scene.postProcesses.indexOf(this),f!==-1&&this._scene.postProcesses.splice(f,1)),f=this._engine.postProcesses.indexOf(this),f!==-1&&this._engine.postProcesses.splice(f,1),!!a){if(a.detachPostProcess(this),f=a._postProcesses.indexOf(this),f===0&&a._postProcesses.length>0){var d=this._camera._getFirstPostProcess();d&&d.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},c.prototype.serialize=function(){var a=i.a.Serialize(this),f=this.getCamera()||this._scene&&this._scene.activeCamera;return a.customType="BABYLON."+this.getClassName(),a.cameraId=f?f.id:null,a.reusable=this._reusable,a.textureType=this._textureType,a.fragmentUrl=this._fragmentUrl,a.parameters=this._parameters,a.samplers=this._samplers,a.options=this._options,a.defines=this._postProcessDefines,a.textureFormat=this._textureFormat,a.vertexUrl=this._vertexUrl,a.indexParameters=this._indexParameters,a},c.prototype.clone=function(){var a=this.serialize();a._engine=this._engine,a.cameraId=null;var f=c.Parse(a,this._scene,"");return f?(f.onActivateObservable=this.onActivateObservable.clone(),f.onSizeChangedObservable=this.onSizeChangedObservable.clone(),f.onApplyObservable=this.onApplyObservable.clone(),f.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),f.onAfterRenderObservable=this.onAfterRenderObservable.clone(),f._prePassEffectConfiguration=this._prePassEffectConfiguration,f):null},c.Parse=function(a,f,d){var h=e.a.GetClass(a.customType);if(!h||!h._Parse)return null;var A=f?f.getCameraByID(a.cameraId):null;return h._Parse(a,A,f,d)},c._Parse=function(a,f,d,h){return i.a.Parse(function(){return new c(a.name,a.fragmentUrl,a.parameters,a.samplers,a.options,f,a.renderTargetSamplingMode,a._engine,a.reusable,a.defines,a.textureType,a.vertexUrl,a.indexParameters,!1,a.textureFormat)},a,d,h)},Object(l.c)([Object(i.c)()],c.prototype,"uniqueId",void 0),Object(l.c)([Object(i.c)()],c.prototype,"name",void 0),Object(l.c)([Object(i.c)()],c.prototype,"width",void 0),Object(l.c)([Object(i.c)()],c.prototype,"height",void 0),Object(l.c)([Object(i.c)()],c.prototype,"renderTargetSamplingMode",void 0),Object(l.c)([Object(i.f)()],c.prototype,"clearColor",void 0),Object(l.c)([Object(i.c)()],c.prototype,"autoClear",void 0),Object(l.c)([Object(i.c)()],c.prototype,"alphaMode",void 0),Object(l.c)([Object(i.c)()],c.prototype,"alphaConstants",void 0),Object(l.c)([Object(i.c)()],c.prototype,"enablePixelPerfectMode",void 0),Object(l.c)([Object(i.c)()],c.prototype,"forceFullscreenViewport",void 0),Object(l.c)([Object(i.c)()],c.prototype,"scaleMode",void 0),Object(l.c)([Object(i.c)()],c.prototype,"alwaysForcePOT",void 0),Object(l.c)([Object(i.c)("samples")],c.prototype,"_samples",void 0),Object(l.c)([Object(i.c)()],c.prototype,"adaptScaleToCurrentViewport",void 0),c}();e.a.RegisteredTypes["BABYLON.PostProcess"]=t},458:function(Q,G,u){"use strict";u.d(G,"a",function(){return c});var l=u(434),r=u(438),C=u(443),T=u(436),m=u(442),D=u(590),E=u(591),i=u(500),e=u(522),t=u(445),c=function(a){Object(l.d)(f,a);function f(d,h,A,S,O,I,x,P,y,F,V,L,j,R){O===void 0&&(O=!0),I===void 0&&(I=0),x===void 0&&(x=!1),P===void 0&&(P=m.a.TRILINEAR_SAMPLINGMODE),y===void 0&&(y=!0),F===void 0&&(F=!1),V===void 0&&(V=!1),L===void 0&&(L=5),j===void 0&&(j=!1);var _,v=a.call(this,null,A,!S,void 0,P,void 0,void 0,void 0,void 0,L)||this;return v.renderParticles=!0,v.renderSprites=!1,v.ignoreCameraViewport=!1,v.onBeforeBindObservable=new r.c,v.onAfterUnbindObservable=new r.c,v.onBeforeRenderObservable=new r.c,v.onAfterRenderObservable=new r.c,v.onClearObservable=new r.c,v.onResizeObservable=new r.c,v._currentRefreshId=-1,v._refreshRate=1,v._samples=1,v.boundingBoxPosition=T.e.Zero(),A=v.getScene(),!A||(v._coordinatesMode=m.a.PROJECTION_MODE,v.renderList=new Array,v.name=d,v.isRenderTarget=!0,v._initialSizeParameter=h,v._processSizeParameter(h),v._resizeObserver=v.getScene().getEngine().onResizeObservable.add(function(){}),v._generateMipMaps=!!S,v._doNotChangeAspectRatio=O,v._renderingManager=new E.b(A),v._renderingManager._useSceneAutoClearSetup=!0,V)||(v._renderTargetOptions={generateMipMaps:S,type:I,format:(_=v._format)!==null&&_!==void 0?_:void 0,samplingMode:v.samplingMode,generateDepthBuffer:y,generateStencilBuffer:F,samples:R},v.samplingMode===m.a.NEAREST_SAMPLINGMODE&&(v.wrapU=m.a.CLAMP_ADDRESSMODE,v.wrapV=m.a.CLAMP_ADDRESSMODE),j||(x?(v._texture=A.getEngine().createRenderTargetCubeTexture(v.getRenderSize(),v._renderTargetOptions),v.coordinatesMode=m.a.INVCUBIC_MODE,v._textureMatrix=T.a.Identity()):v._texture=A.getEngine().createRenderTargetTexture(v._size,v._renderTargetOptions),R!==void 0&&(v.samples=R))),v}return Object.defineProperty(f.prototype,"renderList",{get:function(){return this._renderList},set:function(d){this._renderList=d,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),f.prototype._hookArray=function(d){var h=this,A=d.push;d.push=function(){for(var O=[],I=0;I<arguments.length;I++)O[I]=arguments[I];var x=d.length===0,P=A.apply(d,O);return x&&h.getScene()&&h.getScene().meshes.forEach(function(y){y._markSubMeshesAsLightDirty()}),P};var S=d.splice;d.splice=function(O,I){var x=S.apply(d,[O,I]);return d.length===0&&h.getScene().meshes.forEach(function(P){P._markSubMeshesAsLightDirty()}),x}},Object.defineProperty(f.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onAfterUnbind",{set:function(d){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onBeforeRender",{set:function(d){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onAfterRender",{set:function(d){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onClear",{set:function(d){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(d)},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),f.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(f.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(d){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(d))){this._boundingBoxSize=d;var h=this.getScene();h&&h.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"depthStencilTexture",{get:function(){var d;return((d=this.getInternalTexture())===null||d===void 0?void 0:d._depthStencilTexture)||null},enumerable:!1,configurable:!0}),f.prototype.createDepthStencilTexture=function(d,h,A,S){var O;d===void 0&&(d=0),h===void 0&&(h=!0),A===void 0&&(A=!1),S===void 0&&(S=1);var I=this.getInternalTexture();if(!(!this.getScene()||!I)){(O=I._depthStencilTexture)===null||O===void 0||O.dispose();var x=this.getScene().getEngine();I._depthStencilTexture=x.createDepthStencilTexture(this._size,{bilinearFiltering:h,comparisonFunction:d,generateStencil:A,isCube:this.isCube,samples:S})}},f.prototype._processSizeParameter=function(d){if(d.ratio){this._sizeRatio=d.ratio;var h=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(h.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(h.getRenderHeight(),this._sizeRatio)}}else this._size=d},Object.defineProperty(f.prototype,"samples",{get:function(){return this._samples},set:function(d){if(this._samples!==d){var h=this.getScene();!h||(this._samples=h.getEngine().updateRenderTargetTextureSampleCount(this._texture,d))}},enumerable:!1,configurable:!0}),f.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(f.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(d){this._refreshRate=d,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),f.prototype.addPostProcess=function(d){if(!this._postProcessManager){var h=this.getScene();if(!h)return;this._postProcessManager=new D.a(h),this._postProcesses=new Array}this._postProcesses.push(d),this._postProcesses[0].autoClear=!1},f.prototype.clearPostProcesses=function(d){if(d===void 0&&(d=!1),!!this._postProcesses){if(d)for(var h=0,A=this._postProcesses;h<A.length;h++){var S=A[h];S.dispose()}this._postProcesses=[]}},f.prototype.removePostProcess=function(d){if(!!this._postProcesses){var h=this._postProcesses.indexOf(d);h!==-1&&(this._postProcesses.splice(h,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},f.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},f.prototype.getRenderSize=function(){return this.getRenderWidth()},f.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},f.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},f.prototype.getRenderLayers=function(){var d=this._size.layers;return d||0},Object.defineProperty(f.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),f.prototype.scale=function(d){var h=Math.max(1,this.getRenderSize()*d);this.resize(h)},f.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:a.prototype.getReflectionTextureMatrix.call(this)},f.prototype.resize=function(d){var h=this.isCube;this.releaseInternalTexture();var A=this.getScene();!A||(this._processSizeParameter(d),h?this._texture=A.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=A.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},f.prototype.render=function(d,h){d===void 0&&(d=!1),h===void 0&&(h=!1);var A=this.getScene();if(!!A){var S=A.getEngine();if(this.useCameraPostProcesses!==void 0&&(d=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var O=0;O<this._waitingRenderList.length;O++){var I=this._waitingRenderList[O],x=A.getMeshByID(I);x&&this.renderList.push(x)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var A=this.getScene();if(!A)return;for(var P=A.meshes,O=0;O<P.length;O++){var y=P[O];this.renderListPredicate(y)&&this.renderList.push(y)}}this.onBeforeBindObservable.notifyObservers(this);var F;if(this.activeCamera?(F=this.activeCamera,S.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==A.activeCamera&&A.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(F=A.activeCamera,F&&S.setViewport(F.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var V=0;V<this.getRenderLayers();V++)this.renderToTarget(0,d,h,V,F),A.incrementRenderId(),A.resetCachedMaterial();else if(this.isCube)for(var L=0;L<6;L++)this.renderToTarget(L,d,h,void 0,F),A.incrementRenderId(),A.resetCachedMaterial();else this.renderToTarget(0,d,h,void 0,F);this.onAfterUnbindObservable.notifyObservers(this),A.activeCamera&&((A.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==A.activeCamera)&&A.setTransformMatrix(A.activeCamera.getViewMatrix(),A.activeCamera.getProjectionMatrix(!0)),S.setViewport(A.activeCamera.viewport)),A.resetCachedMaterial()}},f.prototype._bestReflectionRenderTargetDimension=function(d,h){var A=128,S=d*h,O=t.a.NearestPOT(S+A*A/(A+S));return Math.min(t.a.FloorPOT(d),O)},f.prototype._prepareRenderingManager=function(d,h,A,S){var O=this.getScene();if(!!O){this._renderingManager.reset();for(var I=O.getRenderId(),x=0;x<h;x++){var P=d[x];if(P&&!P.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(P,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!P.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!P._internalAbstractMeshDataInfo._currentLODIsUpToDate&&O.activeCamera&&(P._internalAbstractMeshDataInfo._currentLOD=O.customLODSelector?O.customLODSelector(P,O.activeCamera):P.getLOD(O.activeCamera),P._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!P._internalAbstractMeshDataInfo._currentLOD)continue;var y=P._internalAbstractMeshDataInfo._currentLOD;y._preActivateForIntermediateRendering(I);var F=void 0;if(S&&A?F=(P.layerMask&A.layerMask)==0:F=!1,P.isEnabled()&&P.isVisible&&P.subMeshes&&!F&&(y!==P&&y._activate(I,!0),P._activate(I,!0)&&P.subMeshes.length)){P.isAnInstance?P._internalAbstractMeshDataInfo._actAsRegularMesh&&(y=P):y._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,y._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var V=0;V<y.subMeshes.length;V++){var L=y.subMeshes[V];this._renderingManager.dispatch(L,y)}}}}for(var j=0;j<O.particleSystems.length;j++){var R=O.particleSystems[j],_=R.emitter;!R.isStarted()||!_||!_.position||!_.isEnabled()||d.indexOf(_)>=0&&this._renderingManager.dispatchParticles(R)}}},f.prototype._bindFrameBuffer=function(d,h){d===void 0&&(d=0),h===void 0&&(h=0);var A=this.getScene();if(!!A){var S=A.getEngine();this._texture&&S.bindFramebuffer(this._texture,this.isCube?d:void 0,void 0,void 0,this.ignoreCameraViewport,0,h)}},f.prototype.unbindFrameBuffer=function(d,h){var A=this;!this._texture||d.unBindFramebuffer(this._texture,this.isCube,function(){A.onAfterRenderObservable.notifyObservers(h)})},f.prototype._prepareFrame=function(d,h,A,S){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!S||!d.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(h,A)},f.prototype.renderToTarget=function(d,h,A,S,O){S===void 0&&(S=0),O===void 0&&(O=null);var I=this.getScene();if(!!I){var x=I.getEngine();if(!!this._texture){x._debugPushGroup("render to face #"+d+" layer #"+S,1),this._prepareFrame(I,d,S,h),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(S):this.onBeforeRenderObservable.notifyObservers(d);var P=null,y=this.renderList?this.renderList:I.getActiveMeshes().data,F=this.renderList?this.renderList.length:I.getActiveMeshes().length;this.getCustomRenderList&&(P=this.getCustomRenderList(this.is2DArray?S:d,y,F)),P?this._prepareRenderingManager(P,P.length,O,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(y,F,O,!this.renderList),this._defaultRenderListPrepared=!0),P=y);for(var V=0,L=I._beforeRenderTargetClearStage;V<L.length;V++){var j=L[V];j.action(this,d,S)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(x):x.clear(this.clearColor||I.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||I.updateTransformMatrix(!0);for(var R=0,_=I._beforeRenderTargetDrawStage;R<_.length;R++){var j=_[R];j.action(this,d,S)}this._renderingManager.render(this.customRenderFunction,P,this.renderParticles,this.renderSprites);for(var v=0,M=I._afterRenderTargetDrawStage;v<M.length;v++){var j=M[v];j.action(this,d,S)}var U=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,d,this._postProcesses,this.ignoreCameraViewport):h&&I.postProcessManager._finalizeFrame(!1,this._texture,d),this._texture.generateMipMaps=U,this._doNotChangeAspectRatio||I.updateTransformMatrix(!0),A&&C.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),x),this.unbindFrameBuffer(x,d),this.isCube&&d===5&&x.generateMipMapsForCubemap(this._texture),x._debugPopGroup(1)}}},f.prototype.setRenderingOrder=function(d,h,A,S){h===void 0&&(h=null),A===void 0&&(A=null),S===void 0&&(S=null),this._renderingManager.setRenderingOrder(d,h,A,S)},f.prototype.setRenderingAutoClearDepthStencil=function(d,h){this._renderingManager.setRenderingAutoClearDepthStencil(d,h),this._renderingManager._useSceneAutoClearSetup=!1},f.prototype.clone=function(){var d=this.getSize(),h=new f(this.name,d,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return h.hasAlpha=this.hasAlpha,h.level=this.level,h.coordinatesMode=this.coordinatesMode,this.renderList&&(h.renderList=this.renderList.slice(0)),h},f.prototype.serialize=function(){if(!this.name)return null;var d=a.prototype.serialize.call(this);if(d.renderTargetSize=this.getRenderSize(),d.renderList=[],this.renderList)for(var h=0;h<this.renderList.length;h++)d.renderList.push(this.renderList[h].id);return d},f.prototype.disposeFramebufferObjects=function(){var d=this.getInternalTexture(),h=this.getScene();d&&h&&h.getEngine()._releaseFramebufferObjects(d)},f.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var d=this.getScene();if(!!d){var h=d.customRenderTargets.indexOf(this);h>=0&&d.customRenderTargets.splice(h,1);for(var A=0,S=d.cameras;A<S.length;A++){var O=S[A];h=O.customRenderTargets.indexOf(this),h>=0&&O.customRenderTargets.splice(h,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),a.prototype.dispose.call(this)}},f.prototype._rebuild=function(){this.refreshRate===f.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=f.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},f.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},f.prototype.getViewCount=function(){return 1},f.REFRESHRATE_RENDER_ONCE=0,f.REFRESHRATE_RENDER_ONEVERYFRAME=1,f.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,f}(m.a);m.a._CreateRenderTargetTexture=function(a,f,d,h){return new c(a,f,d,h)}},486:function(Q,G,u){"use strict";u.d(G,"b",function(){return f}),u.d(G,"a",function(){return d});var l=u(434),r=u(444),C=u(445),T=u(435),m="passPixelShader",D=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;T.a.ShadersStore[m]=D;var E={name:m,shader:D},i="passCubePixelShader",e=`
varying vec2 vUV;
uniform samplerCube textureSampler;
void main(void)
{
vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001));
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));
#endif
}`;T.a.ShadersStore[i]=e;var t={name:i,shader:e},c=u(437),a=u(439),f=function(h){Object(l.d)(A,h);function A(S,O,I,x,P,y,F,V){return I===void 0&&(I=null),F===void 0&&(F=0),V===void 0&&(V=!1),h.call(this,S,"pass",null,null,O,I,x,P,y,void 0,F,void 0,null,V)||this}return A.prototype.getClassName=function(){return"PassPostProcess"},A._Parse=function(S,O,I,x){return a.a.Parse(function(){return new A(S.name,S.options,O,S.renderTargetSamplingMode,S._engine,S.reusable)},S,I,x)},A}(r.a);c.a.RegisteredTypes["BABYLON.PassPostProcess"]=f;var d=function(h){Object(l.d)(A,h);function A(S,O,I,x,P,y,F,V){I===void 0&&(I=null),F===void 0&&(F=0),V===void 0&&(V=!1);var L=h.call(this,S,"passCube",null,null,O,I,x,P,y,"#define POSITIVEX",F,void 0,null,V)||this;return L._face=0,L}return Object.defineProperty(A.prototype,"face",{get:function(){return this._face},set:function(S){if(!(S<0||S>5))switch(this._face=S,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),A.prototype.getClassName=function(){return"PassCubePostProcess"},A._Parse=function(S,O,I,x){return a.a.Parse(function(){return new A(S.name,S.options,O,S.renderTargetSamplingMode,S._engine,S.reusable)},S,I,x)},A}(r.a);C.a._RescalePostProcessFactory=function(h){return new f("rescale",1,null,2,h,!1,0)}},498:function(Q,G,u){"use strict";u.d(G,"a",function(){return E});var l=u(434),r=u(439),C=u(436),T=u(441),m=u(453),D=u(484);m.a.AddNodeConstructor("Light_Type_3",function(i,e){return function(){return new E(i,C.e.Zero(),e)}});var E=function(i){Object(l.d)(e,i);function e(t,c,a){var f=i.call(this,t,a)||this;return f.groundColor=new T.a(0,0,0),f.direction=c||C.e.Up(),f}return e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.getClassName=function(){return"HemisphericLight"},e.prototype.setDirectionToTarget=function(t){return this.direction=C.e.Normalize(t.subtract(C.e.Zero())),this.direction},e.prototype.getShadowGenerator=function(){return null},e.prototype.transferToEffect=function(t,c){var a=C.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",a.x,a.y,a.z,0,c),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),c),this},e.prototype.transferToNodeMaterialEffect=function(t,c){var a=C.e.Normalize(this.direction);return t.setFloat3(c,a.x,a.y,a.z),this},e.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=C.a.Identity()),this._worldMatrix},e.prototype.getTypeID=function(){return D.a.LIGHTTYPEID_HEMISPHERICLIGHT},e.prototype.prepareLightSpecificDefines=function(t,c){t["HEMILIGHT"+c]=!0},Object(l.c)([Object(r.e)()],e.prototype,"groundColor",void 0),Object(l.c)([Object(r.o)()],e.prototype,"direction",void 0),e}(D.a)},500:function(Q,G,u){"use strict";var l=u(434),r=u(456),C=u(440),T=u(595),m=u(467);m.a.prototype.createRenderTargetTexture=function(D,E){var i=new T.a;E!==void 0&&typeof E=="object"?(i.generateMipMaps=E.generateMipMaps,i.generateDepthBuffer=!!E.generateDepthBuffer,i.generateStencilBuffer=!!E.generateStencilBuffer,i.type=E.type===void 0?0:E.type,i.samplingMode=E.samplingMode===void 0?3:E.samplingMode,i.format=E.format===void 0?5:E.format):(i.generateMipMaps=E,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,C.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var e=this._gl,t=new r.a(this,r.b.RenderTarget),c=D.width||D,a=D.height||D,f=D.layers||0,d=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),h=f!==0?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,A=this._getRGBABufferInternalSizedFormat(i.type,i.format),S=this._getInternalFormat(i.format),O=this._getWebGLTextureType(i.type);this._bindTextureDirectly(h,t),f!==0?(t.is2DArray=!0,e.texImage3D(h,0,A,c,a,f,0,S,O,null)):e.texImage2D(h,0,A,c,a,0,S,O,null),e.texParameteri(h,e.TEXTURE_MAG_FILTER,d.mag),e.texParameteri(h,e.TEXTURE_MIN_FILTER,d.min),e.texParameteri(h,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(h,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(h),this._bindTextureDirectly(h,null);var I=this._currentFramebuffer,x=e.createFramebuffer();return this._bindUnboundFramebuffer(x),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,c,a),t.is2DArray||e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(I),t._framebuffer=x,t.baseWidth=c,t.baseHeight=a,t.width=c,t.height=a,t.depth=f,t.isReady=!0,t.samples=1,t.generateMipMaps=!!i.generateMipMaps,t.samplingMode=i.samplingMode,t.type=i.type,t.format=i.format,t._generateDepthBuffer=i.generateDepthBuffer,t._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(t),t},m.a.prototype.createDepthStencilTexture=function(D,E){if(E.isCube){var i=D.width||D;return this._createDepthStencilCubeTexture(i,E)}else return this._createDepthStencilTexture(D,E)},m.a.prototype._createDepthStencilTexture=function(D,E){var i=this._gl,e=D.layers||0,t=e!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,c=new r.a(this,r.b.Depth);if(!this._caps.depthTextureExtension)return C.a.Error("Depth texture is not supported by your browser or hardware."),c;var a=Object(l.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},E);this._bindTextureDirectly(t,c,!0),this._setupDepthStencilTexture(c,D,a.generateStencil,a.bilinearFiltering,a.comparisonFunction);var f=a.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,d=a.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,h=d;return this.webGLVersion>1&&(h=a.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),c.is2DArray?i.texImage3D(t,0,h,c.width,c.height,e,0,d,f,null):i.texImage2D(t,0,h,c.width,c.height,0,d,f,null),this._bindTextureDirectly(t,null),c}},513:function(Q,G,u){"use strict";u.d(G,"a",function(){return D}),u.d(G,"b",function(){return E});var l=u(436),r=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],C=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],T=function(i,e){return r[i]*C[i](e)},m=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],D=function(){function i(){this.preScaled=!1,this.l00=l.e.Zero(),this.l1_1=l.e.Zero(),this.l10=l.e.Zero(),this.l11=l.e.Zero(),this.l2_2=l.e.Zero(),this.l2_1=l.e.Zero(),this.l20=l.e.Zero(),this.l21=l.e.Zero(),this.l22=l.e.Zero()}return i.prototype.addLight=function(e,t,c){var a=new l.e(t.r,t.g,t.b),f=a.scale(c);this.l00=this.l00.add(f.scale(T(0,e))),this.l1_1=this.l1_1.add(f.scale(T(1,e))),this.l10=this.l10.add(f.scale(T(2,e))),this.l11=this.l11.add(f.scale(T(3,e))),this.l2_2=this.l2_2.add(f.scale(T(4,e))),this.l2_1=this.l2_1.add(f.scale(T(5,e))),this.l20=this.l20.add(f.scale(T(6,e))),this.l21=this.l21.add(f.scale(T(7,e))),this.l22=this.l22.add(f.scale(T(8,e)))},i.prototype.scaleInPlace=function(e){this.l00.scaleInPlace(e),this.l1_1.scaleInPlace(e),this.l10.scaleInPlace(e),this.l11.scaleInPlace(e),this.l2_2.scaleInPlace(e),this.l2_1.scaleInPlace(e),this.l20.scaleInPlace(e),this.l21.scaleInPlace(e),this.l22.scaleInPlace(e)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(m[0]),this.l1_1.scaleInPlace(m[1]),this.l10.scaleInPlace(m[2]),this.l11.scaleInPlace(m[3]),this.l2_2.scaleInPlace(m[4]),this.l2_1.scaleInPlace(m[5]),this.l20.scaleInPlace(m[6]),this.l21.scaleInPlace(m[7]),this.l22.scaleInPlace(m[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(r[0]),this.l1_1.scaleInPlace(r[1]),this.l10.scaleInPlace(r[2]),this.l11.scaleInPlace(r[3]),this.l2_2.scaleInPlace(r[4]),this.l2_1.scaleInPlace(r[5]),this.l20.scaleInPlace(r[6]),this.l21.scaleInPlace(r[7]),this.l22.scaleInPlace(r[8])},i.FromArray=function(e){var t=new i;return l.e.FromArrayToRef(e[0],0,t.l00),l.e.FromArrayToRef(e[1],0,t.l1_1),l.e.FromArrayToRef(e[2],0,t.l10),l.e.FromArrayToRef(e[3],0,t.l11),l.e.FromArrayToRef(e[4],0,t.l2_2),l.e.FromArrayToRef(e[5],0,t.l2_1),l.e.FromArrayToRef(e[6],0,t.l20),l.e.FromArrayToRef(e[7],0,t.l21),l.e.FromArrayToRef(e[8],0,t.l22),t},i.FromPolynomial=function(e){var t=new i;return t.l00=e.xx.scale(.376127).add(e.yy.scale(.376127)).add(e.zz.scale(.376126)),t.l1_1=e.y.scale(.977204),t.l10=e.z.scale(.977204),t.l11=e.x.scale(.977204),t.l2_2=e.xy.scale(1.16538),t.l2_1=e.yz.scale(1.16538),t.l20=e.zz.scale(1.34567).subtract(e.xx.scale(.672834)).subtract(e.yy.scale(.672834)),t.l21=e.zx.scale(1.16538),t.l22=e.xx.scale(1.16538).subtract(e.yy.scale(1.16538)),t.l1_1.scaleInPlace(-1),t.l11.scaleInPlace(-1),t.l2_1.scaleInPlace(-1),t.l21.scaleInPlace(-1),t.scaleInPlace(Math.PI),t},i}(),E=function(){function i(){this.x=l.e.Zero(),this.y=l.e.Zero(),this.z=l.e.Zero(),this.xx=l.e.Zero(),this.yy=l.e.Zero(),this.zz=l.e.Zero(),this.xy=l.e.Zero(),this.yz=l.e.Zero(),this.zx=l.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=D.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(e){var t=new l.e(e.r,e.g,e.b);this.xx=this.xx.add(t),this.yy=this.yy.add(t),this.zz=this.zz.add(t)},i.prototype.scaleInPlace=function(e){this.x.scaleInPlace(e),this.y.scaleInPlace(e),this.z.scaleInPlace(e),this.xx.scaleInPlace(e),this.yy.scaleInPlace(e),this.zz.scaleInPlace(e),this.yz.scaleInPlace(e),this.zx.scaleInPlace(e),this.xy.scaleInPlace(e)},i.FromHarmonics=function(e){var t=new i;return t._harmonics=e,t.x=e.l11.scale(1.02333).scale(-1),t.y=e.l1_1.scale(1.02333).scale(-1),t.z=e.l10.scale(1.02333),t.xx=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).add(e.l22.scale(.429043)),t.yy=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).subtract(e.l22.scale(.429043)),t.zz=e.l00.scale(.886277).add(e.l20.scale(.495417)),t.yz=e.l2_1.scale(.858086).scale(-1),t.zx=e.l21.scale(.858086).scale(-1),t.xy=e.l2_2.scale(.858086),t.scaleInPlace(1/Math.PI),t},i.FromArray=function(e){var t=new i;return l.e.FromArrayToRef(e[0],0,t.x),l.e.FromArrayToRef(e[1],0,t.y),l.e.FromArrayToRef(e[2],0,t.z),l.e.FromArrayToRef(e[3],0,t.xx),l.e.FromArrayToRef(e[4],0,t.yy),l.e.FromArrayToRef(e[5],0,t.zz),l.e.FromArrayToRef(e[6],0,t.yz),l.e.FromArrayToRef(e[7],0,t.zx),l.e.FromArrayToRef(e[8],0,t.xy),t},i}()},514:function(Q,G,u){"use strict";u.d(G,"a",function(){return C});var l=u(442),r=u(545),C=function(){function T(){}return T.GetEnvironmentBRDFTexture=function(m){if(!m.environmentBRDFTexture){var D=m.useDelayedTextureLoading;m.useDelayedTextureLoading=!1;var E=m._blockEntityCollection;m._blockEntityCollection=!1;var i=l.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,m,!0,!1,l.a.BILINEAR_SAMPLINGMODE);m._blockEntityCollection=E;var e=m.getEngine().getLoadedTexturesCache(),t=e.indexOf(i.getInternalTexture());t!==-1&&e.splice(t,1),i.isRGBD=!0,i.wrapU=l.a.CLAMP_ADDRESSMODE,i.wrapV=l.a.CLAMP_ADDRESSMODE,m.environmentBRDFTexture=i,m.useDelayedTextureLoading=D,r.a.ExpandRGBDTexture(i)}return m.environmentBRDFTexture},T._instanceNumber=0,T._environmentBRDFBase64Texture="data:image/png;base64,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",T}()},521:function(Q,G,u){"use strict";u.d(G,"a",function(){return E});var l=u(436),r=u(450),C=u(513),T=u(515),m=u(441),D=function(){function i(e,t,c,a){this.name=e,this.worldAxisForNormal=t,this.worldAxisForFileX=c,this.worldAxisForFileY=a}return i}(),E=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(e){var t=this,c;if(!e.isCube)return null;(c=e.getScene())===null||c===void 0||c.getEngine().flushFramebuffer();var a=e.getSize().width,f=e.readPixels(0,void 0,void 0,!1),d=e.readPixels(1,void 0,void 0,!1),h,A;e.isRenderTarget?(h=e.readPixels(3,void 0,void 0,!1),A=e.readPixels(2,void 0,void 0,!1)):(h=e.readPixels(2,void 0,void 0,!1),A=e.readPixels(3,void 0,void 0,!1));var S=e.readPixels(4,void 0,void 0,!1),O=e.readPixels(5,void 0,void 0,!1),I=e.gammaSpace,x=5,P=0;return(e.textureType==1||e.textureType==2)&&(P=1),new Promise(function(y,F){Promise.all([d,f,h,A,S,O]).then(function(V){var L=V[0],j=V[1],R=V[2],_=V[3],v=V[4],M=V[5],U={size:a,right:j,left:L,up:R,down:_,front:v,back:M,format:x,type:P,gammaSpace:I};y(t.ConvertCubeMapToSphericalPolynomial(U))})})},i.ConvertCubeMapToSphericalPolynomial=function(e){for(var t=new C.a,c=0,a=2/e.size,f=a,d=a*.5-1,h=0;h<6;h++)for(var A=this.FileFaces[h],S=e[A.name],O=d,I=e.format===5?4:3,x=0;x<e.size;x++){for(var P=d,y=0;y<e.size;y++){var F=A.worldAxisForFileX.scale(P).add(A.worldAxisForFileY.scale(O)).add(A.worldAxisForNormal);F.normalize();var V=Math.pow(1+P*P+O*O,-3/2),L=S[x*e.size*I+y*I+0],j=S[x*e.size*I+y*I+1],R=S[x*e.size*I+y*I+2];isNaN(L)&&(L=0),isNaN(j)&&(j=0),isNaN(R)&&(R=0),e.type===0&&(L/=255,j/=255,R/=255),e.gammaSpace&&(L=Math.pow(r.a.Clamp(L),T.c),j=Math.pow(r.a.Clamp(j),T.c),R=Math.pow(r.a.Clamp(R),T.c));var _=4096;L=r.a.Clamp(L,0,_),j=r.a.Clamp(j,0,_),R=r.a.Clamp(R,0,_);var v=new m.a(L,j,R);t.addLight(F,v,V),c+=V,P+=a}O+=f}var M=4*Math.PI,U=6,N=M*U/6,k=N/c;return t.scaleInPlace(k),t.convertIncidentRadianceToIrradiance(),t.convertIrradianceToLambertianRadiance(),C.b.FromHarmonics(t)},i.FileFaces=[new D("right",new l.e(1,0,0),new l.e(0,0,-1),new l.e(0,-1,0)),new D("left",new l.e(-1,0,0),new l.e(0,0,1),new l.e(0,-1,0)),new D("up",new l.e(0,1,0),new l.e(1,0,0),new l.e(0,0,1)),new D("down",new l.e(0,-1,0),new l.e(1,0,0),new l.e(0,0,-1)),new D("front",new l.e(0,0,1),new l.e(1,0,0),new l.e(0,-1,0)),new D("back",new l.e(0,0,-1),new l.e(-1,0,0),new l.e(0,-1,0))],i}()},522:function(Q,G,u){"use strict";var l=u(434),r=u(456),C=u(440),T=u(467);T.a.prototype.createRenderTargetCubeTexture=function(m,D){var E=Object(l.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},D);E.generateStencilBuffer=E.generateDepthBuffer&&E.generateStencilBuffer,(E.type===1&&!this._caps.textureFloatLinearFiltering||E.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(E.samplingMode=1);var i=this._gl,e=new r.a(this,r.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,e,!0);var t=this._getSamplingParameters(E.samplingMode,E.generateMipMaps);E.type===1&&!this._caps.textureFloat&&(E.type=0,C.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,t.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,t.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var c=0;c<6;c++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,this._getRGBABufferInternalSizedFormat(E.type,E.format),m,m,0,this._getInternalFormat(E.format),this._getWebGLTextureType(E.type),null);var a=i.createFramebuffer();return this._bindUnboundFramebuffer(a),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(E.generateStencilBuffer,E.generateDepthBuffer,m,m),E.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),e._framebuffer=a,e.width=m,e.height=m,e.isReady=!0,e.isCube=!0,e.samples=1,e.generateMipMaps=E.generateMipMaps,e.samplingMode=E.samplingMode,e.type=E.type,e.format=E.format,e._generateDepthBuffer=E.generateDepthBuffer,e._generateStencilBuffer=E.generateStencilBuffer,this._internalTexturesCache.push(e),e}},523:function(Q,G,u){"use strict";var l=u(521),r=u(477);Object.defineProperty(r.a.prototype,"sphericalPolynomial",{get:function(){var C=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=l.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(T){C._texture._sphericalPolynomial=T,C._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(C){this._texture&&(this._texture._sphericalPolynomial=C)},enumerable:!0,configurable:!0})},529:function(Q,G,u){"use strict";u.d(G,"b",function(){return ue}),u.d(G,"a",function(){return gn});var l=u(434),r=u(439),C=u(440),T=u(490),m=u(514),D=u(449),E=u(436),i=u(447),e=u(626),t=u(480),c=u(454),a=function(){function g(s){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new E.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=s}return g.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},g.prototype.isReadyForSubMesh=function(s,n){return!(s._areTexturesDirty&&n.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},g.prototype.prepareDefines=function(s,n,o){this._isEnabled?(s.ANISOTROPIC=this._isEnabled,this._isEnabled&&!n.isVerticesDataPresent(i.b.TangentKind)&&(s._needUVs=!0,s.MAINUV1=!0),s._areTexturesDirty&&o.texturesEnabled&&(this._texture&&t.a.AnisotropicTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,s,"ANISOTROPIC_TEXTURE"):s.ANISOTROPIC_TEXTURE=!1)):(s.ANISOTROPIC=!1,s.ANISOTROPIC_TEXTURE=!1)},g.prototype.bindForSubMesh=function(s,n,o){(!s.useUbo||!o||!s.isSync)&&(this._texture&&t.a.AnisotropicTextureEnabled&&(s.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),c.a.BindTextureMatrix(this._texture,s,"anisotropy")),s.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),n.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&s.setTexture("anisotropySampler",this._texture)},g.prototype.hasTexture=function(s){return this._texture===s},g.prototype.getActiveTextures=function(s){this._texture&&s.push(this._texture)},g.prototype.getAnimatables=function(s){this._texture&&this._texture.animations&&this._texture.animations.length>0&&s.push(this._texture)},g.prototype.dispose=function(s){s&&this._texture&&this._texture.dispose()},g.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},g.AddFallbacks=function(s,n,o){return s.ANISOTROPIC&&n.addFallback(o++,"ANISOTROPIC"),o},g.AddUniforms=function(s){s.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},g.PrepareUniformBuffer=function(s){s.addUniform("vAnisotropy",3),s.addUniform("vAnisotropyInfos",2),s.addUniform("anisotropyMatrix",16)},g.AddSamplers=function(s){s.push("anisotropySampler")},g.prototype.copyTo=function(s){r.a.Clone(function(){return s},this)},g.prototype.serialize=function(){return r.a.Serialize(this)},g.prototype.parse=function(s,n,o){var p=this;r.a.Parse(function(){return p},s,n,o)},Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"isEnabled",void 0),Object(l.c)([Object(r.c)()],g.prototype,"intensity",void 0),Object(l.c)([Object(r.n)()],g.prototype,"direction",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"texture",void 0),g}(),f=function(){function g(s){this._useEnergyConservation=g.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=g.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=g.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=g.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=g.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=g.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=g.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=g.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=s}return g.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},g.prototype.prepareDefines=function(s){s.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,s.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,s.SPHERICAL_HARMONICS=this._useSphericalHarmonics,s.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},g.prototype.getClassName=function(){return"PBRBRDFConfiguration"},g.prototype.copyTo=function(s){r.a.Clone(function(){return s},this)},g.prototype.serialize=function(){return r.a.Serialize(this)},g.prototype.parse=function(s,n,o){var p=this;r.a.Parse(function(){return p},s,n,o)},g.DEFAULT_USE_ENERGY_CONSERVATION=!0,g.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,g.DEFAULT_USE_SPHERICAL_HARMONICS=!0,g.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsMiscDirty")],g.prototype,"useEnergyConservation",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsMiscDirty")],g.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsMiscDirty")],g.prototype,"useSphericalHarmonics",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsMiscDirty")],g.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),g}(),d=u(441),h=function(){function g(s){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=d.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=s}return g.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},g.prototype.isReadyForSubMesh=function(s,n){return!(s._areTexturesDirty&&n.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&t.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},g.prototype.prepareDefines=function(s,n){var o;this._isEnabled?(s.SHEEN=this._isEnabled,s.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,s.SHEEN_ROUGHNESS=this._roughness!==null,s.SHEEN_ALBEDOSCALING=this._albedoScaling,s.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,s.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((o=this._textureRoughness)===null||o===void 0?void 0:o._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),s._areTexturesDirty&&n.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,s,"SHEEN_TEXTURE"):s.SHEEN_TEXTURE=!1,this._textureRoughness&&t.a.SheenTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,s,"SHEEN_TEXTURE_ROUGHNESS"):s.SHEEN_TEXTURE_ROUGHNESS=!1)):(s.SHEEN=!1,s.SHEEN_TEXTURE=!1,s.SHEEN_TEXTURE_ROUGHNESS=!1,s.SHEEN_LINKWITHALBEDO=!1,s.SHEEN_ROUGHNESS=!1,s.SHEEN_ALBEDOSCALING=!1,s.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,s.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},g.prototype.bindForSubMesh=function(s,n,o,p){var H,W,B,Z,w,b,z,Y,q=p._materialDefines,X=q.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!s.useUbo||!o||!s.isSync)&&(X&&t.a.SheenTextureEnabled?(s.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,s,"sheen")):(this._texture||this._textureRoughness)&&t.a.SheenTextureEnabled&&(s.updateFloat4("vSheenInfos",(W=(H=this._texture)===null||H===void 0?void 0:H.coordinatesIndex)!==null&&W!==void 0?W:0,(Z=(B=this._texture)===null||B===void 0?void 0:B.level)!==null&&Z!==void 0?Z:0,(b=(w=this._textureRoughness)===null||w===void 0?void 0:w.coordinatesIndex)!==null&&b!==void 0?b:0,(Y=(z=this._textureRoughness)===null||z===void 0?void 0:z.level)!==null&&Y!==void 0?Y:0),this._texture&&c.a.BindTextureMatrix(this._texture,s,"sheen"),this._textureRoughness&&!X&&!q.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,s,"sheenRoughness")),s.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&s.updateFloat("vSheenRoughness",this._roughness)),n.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&s.setTexture("sheenSampler",this._texture),this._textureRoughness&&!X&&!q.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&t.a.SheenTextureEnabled&&s.setTexture("sheenRoughnessSampler",this._textureRoughness))},g.prototype.hasTexture=function(s){return this._texture===s||this._textureRoughness===s},g.prototype.getActiveTextures=function(s){this._texture&&s.push(this._texture),this._textureRoughness&&s.push(this._textureRoughness)},g.prototype.getAnimatables=function(s){this._texture&&this._texture.animations&&this._texture.animations.length>0&&s.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&s.push(this._textureRoughness)},g.prototype.dispose=function(s){var n,o;s&&((n=this._texture)===null||n===void 0||n.dispose(),(o=this._textureRoughness)===null||o===void 0||o.dispose())},g.prototype.getClassName=function(){return"PBRSheenConfiguration"},g.AddFallbacks=function(s,n,o){return s.SHEEN&&n.addFallback(o++,"SHEEN"),o},g.AddUniforms=function(s){s.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},g.PrepareUniformBuffer=function(s){s.addUniform("vSheenColor",4),s.addUniform("vSheenRoughness",1),s.addUniform("vSheenInfos",4),s.addUniform("sheenMatrix",16),s.addUniform("sheenRoughnessMatrix",16)},g.AddSamplers=function(s){s.push("sheenSampler"),s.push("sheenRoughnessSampler")},g.prototype.copyTo=function(s){r.a.Clone(function(){return s},this)},g.prototype.serialize=function(){return r.a.Serialize(this)},g.prototype.parse=function(s,n,o){var p=this;r.a.Parse(function(){return p},s,n,o)},Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"isEnabled",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"linkSheenWithAlbedo",void 0),Object(l.c)([Object(r.c)()],g.prototype,"intensity",void 0),Object(l.c)([Object(r.e)()],g.prototype,"color",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"texture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"roughness",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"textureRoughness",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"albedoScaling",void 0),g}(),A=u(450),S=function(){function g(s,n,o){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=d.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=d.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=s,this._internalMarkScenePrePassDirty=n,this._scene=o}return Object.defineProperty(g.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(s){!this._scene.enableSubSurfaceForPrePass()||s&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(s))},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(s){s>=1?this._volumeIndexOfRefraction=s:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),g.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},g.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},g.prototype.isReadyForSubMesh=function(s,n){if(s._areTexturesDirty&&n.texturesEnabled){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var o=this._getRefractionTexture(n);if(o&&t.a.RefractionTextureEnabled&&!o.isReadyOrNotBlocking())return!1}return!0},g.prototype.prepareDefines=function(s,n){if(s._areTexturesDirty&&(s.SUBSURFACE=!1,s.SS_TRANSLUCENCY=this._isTranslucencyEnabled,s.SS_SCATTERING=this._isScatteringEnabled,s.SS_THICKNESSANDMASK_TEXTURE=!1,s.SS_MASK_FROM_THICKNESS_TEXTURE=!1,s.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,s.SS_REFRACTION=!1,s.SS_REFRACTIONMAP_3D=!1,s.SS_GAMMAREFRACTION=!1,s.SS_RGBDREFRACTION=!1,s.SS_LINEARSPECULARREFRACTION=!1,s.SS_REFRACTIONMAP_OPPOSITEZ=!1,s.SS_LODINREFRACTIONALPHA=!1,s.SS_LINKREFRACTIONTOTRANSPARENCY=!1,s.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(s.SUBSURFACE=!0,s._areTexturesDirty&&n.texturesEnabled&&this._thicknessTexture&&t.a.ThicknessTextureEnabled&&c.a.PrepareDefinesForMergedUV(this._thicknessTexture,s,"SS_THICKNESSANDMASK_TEXTURE"),s.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,s.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&n.texturesEnabled)){var o=this._getRefractionTexture(n);o&&t.a.RefractionTextureEnabled&&(s.SS_REFRACTION=!0,s.SS_REFRACTIONMAP_3D=o.isCube,s.SS_GAMMAREFRACTION=o.gammaSpace,s.SS_RGBDREFRACTION=o.isRGBD,s.SS_LINEARSPECULARREFRACTION=o.linearSpecularLOD,s.SS_REFRACTIONMAP_OPPOSITEZ=o.invertZ,s.SS_LODINREFRACTIONALPHA=o.lodLevelInAlpha,s.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,s.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},g.prototype.bindForSubMesh=function(s,n,o,p,H,W){var B=this._getRefractionTexture(n);if(!s.useUbo||!p||!s.isSync){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&(s.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),c.a.BindTextureMatrix(this._thicknessTexture,s,"thickness")),s.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),B&&t.a.RefractionTextureEnabled){s.updateMatrix("refractionMatrix",B.getReflectionTextureMatrix());var Z=1;B.isCube||B.depth&&(Z=B.depth);var w=B.getSize().width,b=this.volumeIndexOfRefraction;s.updateFloat4("vRefractionInfos",B.level,1/b,Z,this._invertRefractionY?-1:1),s.updateFloat3("vRefractionMicrosurfaceInfos",w,B.lodGenerationScale,B.lodGenerationOffset),W&&s.updateFloat2("vRefractionFilteringInfo",w,A.a.Log2(w))}this.isScatteringEnabled&&s.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),s.updateColor3("vDiffusionDistance",this.diffusionDistance),s.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),s.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}n.texturesEnabled&&(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&s.setTexture("thicknessSampler",this._thicknessTexture),B&&t.a.RefractionTextureEnabled&&(H?s.setTexture("refractionSampler",B):(s.setTexture("refractionSampler",B._lodTextureMid||B),s.setTexture("refractionSamplerLow",B._lodTextureLow||B),s.setTexture("refractionSamplerHigh",B._lodTextureHigh||B))))},g.prototype.unbind=function(s){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(s.setTexture("refractionSampler",null),!0):!1},g.prototype._getRefractionTexture=function(s){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?s.environmentTexture:null},Object.defineProperty(g.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),g.prototype.fillRenderTargetTextures=function(s){t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&s.push(this._refractionTexture)},g.prototype.hasTexture=function(s){return this._thicknessTexture===s||this._refractionTexture===s},g.prototype.hasRenderTargetTextures=function(){return!!(t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},g.prototype.getActiveTextures=function(s){this._thicknessTexture&&s.push(this._thicknessTexture),this._refractionTexture&&s.push(this._refractionTexture)},g.prototype.getAnimatables=function(s){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&s.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&s.push(this._refractionTexture)},g.prototype.dispose=function(s){s&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},g.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},g.AddFallbacks=function(s,n,o){return s.SS_SCATTERING&&n.addFallback(o++,"SS_SCATTERING"),s.SS_TRANSLUCENCY&&n.addFallback(o++,"SS_TRANSLUCENCY"),o},g.AddUniforms=function(s){s.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},g.AddSamplers=function(s){s.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},g.PrepareUniformBuffer=function(s){s.addUniform("vRefractionMicrosurfaceInfos",3),s.addUniform("vRefractionFilteringInfo",2),s.addUniform("vRefractionInfos",4),s.addUniform("refractionMatrix",16),s.addUniform("vThicknessInfos",2),s.addUniform("thicknessMatrix",16),s.addUniform("vThicknessParam",2),s.addUniform("vDiffusionDistance",3),s.addUniform("vTintColor",4),s.addUniform("vSubSurfaceIntensity",3),s.addUniform("scatteringDiffusionProfile",1)},g.prototype.copyTo=function(s){r.a.Clone(function(){return s},this)},g.prototype.serialize=function(){return r.a.Serialize(this)},g.prototype.parse=function(s,n,o){var p=this;r.a.Parse(function(){return p},s,n,o)},Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"isRefractionEnabled",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"isTranslucencyEnabled",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markScenePrePassDirty")],g.prototype,"isScatteringEnabled",void 0),Object(l.c)([Object(r.c)()],g.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(l.c)([Object(r.c)()],g.prototype,"refractionIntensity",void 0),Object(l.c)([Object(r.c)()],g.prototype,"translucencyIntensity",void 0),Object(l.c)([Object(r.c)()],g.prototype,"useAlbedoToTintRefraction",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"thicknessTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"refractionTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(r.c)()],g.prototype,"_volumeIndexOfRefraction",void 0),Object(l.c)([Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"volumeIndexOfRefraction",null),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"invertRefractionY",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"linkRefractionWithTransparency",void 0),Object(l.c)([Object(r.c)()],g.prototype,"minimumThickness",void 0),Object(l.c)([Object(r.c)()],g.prototype,"maximumThickness",void 0),Object(l.c)([Object(r.e)()],g.prototype,"tintColor",void 0),Object(l.c)([Object(r.c)()],g.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(r.e)()],g.prototype,"diffusionDistance",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"useMaskFromThicknessTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],g.prototype,"useMaskFromThicknessTextureGltf",void 0),g}(),O=u(744),I=u(491),x=u(459),P=u(552),y=u(553),F=u(442),V=u(523),L=u(435),j=u(746),R="pbrFragmentDeclaration",_=`uniform vec4 vEyePosition;
uniform vec3 vReflectionColor;
uniform vec4 vAlbedoColor;

uniform vec4 vLightingIntensity;
uniform vec4 vReflectivityColor;
uniform vec4 vMetallicReflectanceFactors;
uniform vec3 vEmissiveColor;
uniform float visibility;
uniform vec3 vAmbientColor;

#ifdef ALBEDO
uniform vec2 vAlbedoInfos;
#endif
#ifdef AMBIENT
uniform vec4 vAmbientInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#ifdef OPACITY
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
#endif

#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(SS_REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif

#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#ifdef REALTIME_FILTERING
uniform vec2 vReflectionFilteringInfo;
#endif
uniform mat4 reflectionMatrix;
uniform vec3 vReflectionMicrosurfaceInfos;
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;
uniform vec3 vReflectionSize;
#endif
#endif

#ifdef CLEARCOAT
uniform vec2 vClearCoatParams;
uniform vec4 vClearCoatRefractionParams;
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;
uniform vec2 vClearCoatTangentSpaceParams;
uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT
uniform vec4 vClearCoatTintParams;
uniform float clearCoatColorAtDistance;
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;
uniform mat4 clearCoatTintMatrix;
#endif
#endif
#endif

#ifdef ANISOTROPIC
uniform vec3 vAnisotropy;
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;
uniform mat4 anisotropyMatrix;
#endif
#endif

#ifdef SHEEN
uniform vec4 vSheenColor;
#ifdef SHEEN_ROUGHNESS
uniform float vSheenRoughness;
#endif
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif

#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec3 vRefractionMicrosurfaceInfos;
uniform vec4 vRefractionInfos;
uniform mat4 refractionMatrix;
#ifdef REALTIME_FILTERING
uniform vec2 vRefractionFilteringInfo;
#endif
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;
uniform mat4 thicknessMatrix;
#endif
uniform vec2 vThicknessParam;
uniform vec3 vDiffusionDistance;
uniform vec4 vTintColor;
uniform vec3 vSubSurfaceIntensity;
#endif
#ifdef PREPASS
#ifdef SS_SCATTERING
uniform float scatteringDiffusionProfile;
#endif
#endif
#if DEBUGMODE>0
uniform vec2 vDebugMode;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;
uniform vec3 vSphericalL1_1;
uniform vec3 vSphericalL10;
uniform vec3 vSphericalL11;
uniform vec3 vSphericalL2_2;
uniform vec3 vSphericalL2_1;
uniform vec3 vSphericalL20;
uniform vec3 vSphericalL21;
uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;
uniform vec3 vSphericalY;
uniform vec3 vSphericalZ;
uniform vec3 vSphericalXX_ZZ;
uniform vec3 vSphericalYY_ZZ;
uniform vec3 vSphericalZZ;
uniform vec3 vSphericalXY;
uniform vec3 vSphericalYZ;
uniform vec3 vSphericalZX;
#endif
#endif
`;L.a.IncludesShadersStore[R]=_;var v={name:R,shader:_},M=u(674),U=u(745),N="pbrUboDeclaration",k=`layout(std140,column_major) uniform;





















uniform Material {
vec2 vAlbedoInfos;
vec4 vAmbientInfos;
vec2 vOpacityInfos;
vec2 vEmissiveInfos;
vec2 vLightmapInfos;
vec3 vReflectivityInfos;
vec2 vMicroSurfaceSamplerInfos;
vec2 vReflectionInfos;
vec2 vReflectionFilteringInfo;
vec3 vReflectionPosition;
vec3 vReflectionSize;
vec3 vBumpInfos;
mat4 albedoMatrix;
mat4 ambientMatrix;
mat4 opacityMatrix;
mat4 emissiveMatrix;
mat4 lightmapMatrix;
mat4 reflectivityMatrix;
mat4 microSurfaceSamplerMatrix;
mat4 bumpMatrix;
vec2 vTangentSpaceParams;
mat4 reflectionMatrix;
vec3 vReflectionColor;
vec4 vAlbedoColor;
vec4 vLightingIntensity;
vec3 vReflectionMicrosurfaceInfos;
float pointSize;
vec4 vReflectivityColor;
vec3 vEmissiveColor;
vec3 vAmbientColor;
vec2 vDebugMode;
vec4 vMetallicReflectanceFactors;
vec2 vMetallicReflectanceInfos;
mat4 metallicReflectanceMatrix;
vec2 vClearCoatParams;
vec4 vClearCoatRefractionParams;
vec4 vClearCoatInfos;
mat4 clearCoatMatrix;
mat4 clearCoatRoughnessMatrix;
vec2 vClearCoatBumpInfos;
vec2 vClearCoatTangentSpaceParams;
mat4 clearCoatBumpMatrix;
vec4 vClearCoatTintParams;
float clearCoatColorAtDistance;
vec2 vClearCoatTintInfos;
mat4 clearCoatTintMatrix;
vec3 vAnisotropy;
vec2 vAnisotropyInfos;
mat4 anisotropyMatrix;
vec4 vSheenColor;
float vSheenRoughness;
vec4 vSheenInfos;
mat4 sheenMatrix;
mat4 sheenRoughnessMatrix;
vec3 vRefractionMicrosurfaceInfos;
vec2 vRefractionFilteringInfo;
vec4 vRefractionInfos;
mat4 refractionMatrix;
vec2 vThicknessInfos;
mat4 thicknessMatrix;
vec2 vThicknessParam;
vec3 vDiffusionDistance;
vec4 vTintColor;
vec3 vSubSurfaceIntensity;
float scatteringDiffusionProfile;
vec4 vDetailInfos;
mat4 detailMatrix;
vec3 vSphericalL00;
vec3 vSphericalL1_1;
vec3 vSphericalL10;
vec3 vSphericalL11;
vec3 vSphericalL2_2;
vec3 vSphericalL2_1;
vec3 vSphericalL20;
vec3 vSphericalL21;
vec3 vSphericalL22;
vec3 vSphericalX;
vec3 vSphericalY;
vec3 vSphericalZ;
vec3 vSphericalXX_ZZ;
vec3 vSphericalYY_ZZ;
vec3 vSphericalZZ;
vec3 vSphericalXY;
vec3 vSphericalYZ;
vec3 vSphericalZX;
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;L.a.IncludesShadersStore[N]=k;var J={name:N,shader:k},te="pbrFragmentExtraDeclaration",K=`
varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#endif
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif`;L.a.IncludesShadersStore[te]=K;var ne={name:te,shader:K},ae=u(650),ee=u(651),re="pbrFragmentSamplersDeclaration",oe=`#ifdef ALBEDO
#if ALBEDODIRECTUV == 1
#define vAlbedoUV vMainUV1
#elif ALBEDODIRECTUV == 2
#define vAlbedoUV vMainUV2
#else
varying vec2 vAlbedoUV;
#endif
uniform sampler2D albedoSampler;
#endif
#ifdef AMBIENT
#if AMBIENTDIRECTUV == 1
#define vAmbientUV vMainUV1
#elif AMBIENTDIRECTUV == 2
#define vAmbientUV vMainUV2
#else
varying vec2 vAmbientUV;
#endif
uniform sampler2D ambientSampler;
#endif
#ifdef OPACITY
#if OPACITYDIRECTUV == 1
#define vOpacityUV vMainUV1
#elif OPACITYDIRECTUV == 2
#define vOpacityUV vMainUV2
#else
varying vec2 vOpacityUV;
#endif
uniform sampler2D opacitySampler;
#endif
#ifdef EMISSIVE
#if EMISSIVEDIRECTUV == 1
#define vEmissiveUV vMainUV1
#elif EMISSIVEDIRECTUV == 2
#define vEmissiveUV vMainUV2
#else
varying vec2 vEmissiveUV;
#endif
uniform sampler2D emissiveSampler;
#endif
#ifdef LIGHTMAP
#if LIGHTMAPDIRECTUV == 1
#define vLightmapUV vMainUV1
#elif LIGHTMAPDIRECTUV == 2
#define vLightmapUV vMainUV2
#else
varying vec2 vLightmapUV;
#endif
uniform sampler2D lightmapSampler;
#endif
#ifdef REFLECTIVITY
#if REFLECTIVITYDIRECTUV == 1
#define vReflectivityUV vMainUV1
#elif REFLECTIVITYDIRECTUV == 2
#define vReflectivityUV vMainUV2
#else
varying vec2 vReflectivityUV;
#endif
uniform sampler2D reflectivitySampler;
#endif
#ifdef MICROSURFACEMAP
#if MICROSURFACEMAPDIRECTUV == 1
#define vMicroSurfaceSamplerUV vMainUV1
#elif MICROSURFACEMAPDIRECTUV == 2
#define vMicroSurfaceSamplerUV vMainUV2
#else
varying vec2 vMicroSurfaceSamplerUV;
#endif
uniform sampler2D microSurfaceSampler;
#endif
#ifdef METALLIC_REFLECTANCE
#if METALLIC_REFLECTANCEDIRECTUV == 1
#define vMetallicReflectanceUV vMainUV1
#elif METALLIC_REFLECTANCEDIRECTUV == 2
#define vMetallicReflectanceUV vMainUV2
#else
varying vec2 vMetallicReflectanceUV;
#endif
uniform sampler2D metallicReflectanceSampler;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE)
#if CLEARCOAT_TEXTUREDIRECTUV == 1
#define vClearCoatUV vMainUV1
#elif CLEARCOAT_TEXTUREDIRECTUV == 2
#define vClearCoatUV vMainUV2
#else
varying vec2 vClearCoatUV;
#endif
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS)
#if CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV == 1
#define vClearCoatRoughnessUV vMainUV1
#elif CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV == 2
#define vClearCoatRoughnessUV vMainUV2
#else
varying vec2 vClearCoatRoughnessUV;
#endif
#endif
#ifdef CLEARCOAT_TEXTURE
uniform sampler2D clearCoatSampler;
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL)
uniform sampler2D clearCoatRoughnessSampler;
#endif
#ifdef CLEARCOAT_BUMP
#if CLEARCOAT_BUMPDIRECTUV == 1
#define vClearCoatBumpUV vMainUV1
#elif CLEARCOAT_BUMPDIRECTUV == 2
#define vClearCoatBumpUV vMainUV2
#else
varying vec2 vClearCoatBumpUV;
#endif
uniform sampler2D clearCoatBumpSampler;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
#if CLEARCOAT_TINT_TEXTUREDIRECTUV == 1
#define vClearCoatTintUV vMainUV1
#elif CLEARCOAT_TINT_TEXTUREDIRECTUV == 2
#define vClearCoatTintUV vMainUV2
#else
varying vec2 vClearCoatTintUV;
#endif
uniform sampler2D clearCoatTintSampler;
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_TEXTURE
#if SHEEN_TEXTUREDIRECTUV == 1
#define vSheenUV vMainUV1
#elif SHEEN_TEXTUREDIRECTUV == 2
#define vSheenUV vMainUV2
#else
varying vec2 vSheenUV;
#endif
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
#if SHEEN_TEXTURE_ROUGHNESSDIRECTUV == 1
#define vSheenRoughnessUV vMainUV1
#elif SHEEN_TEXTURE_ROUGHNESSDIRECTUV == 2
#define vSheenRoughnessUV vMainUV2
#else
varying vec2 vSheenRoughnessUV;
#endif
#endif
#ifdef SHEEN_TEXTURE
uniform sampler2D sheenSampler;
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL)
uniform sampler2D sheenRoughnessSampler;
#endif
#endif
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
#if ANISOTROPIC_TEXTUREDIRECTUV == 1
#define vAnisotropyUV vMainUV1
#elif ANISOTROPIC_TEXTUREDIRECTUV == 2
#define vAnisotropyUV vMainUV2
#else
varying vec2 vAnisotropyUV;
#endif
uniform sampler2D anisotropySampler;
#endif
#endif

#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;
uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;
uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
uniform sampler2D environmentBrdfSampler;
#endif

#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
#define sampleRefraction(s,c) textureCube(s,c)
uniform samplerCube refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube refractionSamplerLow;
uniform samplerCube refractionSamplerHigh;
#endif
#else
#define sampleRefraction(s,c) texture2D(s,c)
uniform sampler2D refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D refractionSamplerLow;
uniform sampler2D refractionSamplerHigh;
#endif
#endif
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#if SS_THICKNESSANDMASK_TEXTUREDIRECTUV == 1
#define vThicknessUV vMainUV1
#elif SS_THICKNESSANDMASK_TEXTUREDIRECTUV == 2
#define vThicknessUV vMainUV2
#else
varying vec2 vThicknessUV;
#endif
uniform sampler2D thicknessSampler;
#endif
#endif`;L.a.IncludesShadersStore[re]=oe;var he={name:re,shader:oe},_n=u(524),Sn=u(592),On=u(558),In=u(597),bn=u(457),Mn=u(627),Ln=u(605),Ee="pbrHelperFunctions",ve=`
#define RECIPROCAL_PI2 0.15915494
#define RECIPROCAL_PI 0.31830988618

#define MINIMUMVARIANCE 0.0005
float convertRoughnessToAverageSlope(float roughness)
{

return square(roughness)+MINIMUMVARIANCE;
}
float fresnelGrazingReflectance(float reflectance0) {


float reflectance90=saturate(reflectance0*25.0);
return reflectance90;
}
vec2 getAARoughnessFactors(vec3 normalVector) {
#ifdef SPECULARAA
vec3 nDfdx=dFdx(normalVector.xyz);
vec3 nDfdy=dFdy(normalVector.xyz);
float slopeSquare=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));

float geometricRoughnessFactor=pow(saturate(slopeSquare),0.333);

float geometricAlphaGFactor=sqrt(slopeSquare);

geometricAlphaGFactor*=0.75;
return vec2(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2(0.);
#endif
}
#ifdef ANISOTROPIC


vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {
float alphaT=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);
float alphaB=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);
return vec2(alphaT,alphaB);
}


vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy) {
vec3 anisotropicFrameDirection=anisotropy>=0.0 ? B : T;
vec3 anisotropicFrameTangent=cross(normalize(anisotropicFrameDirection),V);
vec3 anisotropicFrameNormal=cross(anisotropicFrameTangent,anisotropicFrameDirection);
vec3 anisotropicNormal=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));
return anisotropicNormal;

}
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)



vec3 cocaLambert(vec3 alpha,float distance) {
return exp(-alpha*distance);
}

vec3 cocaLambert(float NdotVRefract,float NdotLRefract,vec3 alpha,float thickness) {
return cocaLambert(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));
}

vec3 computeColorAtDistanceInMedia(vec3 color,float distance) {
return -log(color)/distance;
}
vec3 computeClearCoatAbsorption(float NdotVRefract,float NdotLRefract,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {
vec3 clearCoatAbsorption=mix(vec3(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);
return clearCoatAbsorption;
}
#endif




#ifdef MICROSURFACEAUTOMATIC
float computeDefaultMicroSurface(float microSurface,vec3 reflectivityColor)
{
const float kReflectivityNoAlphaWorkflow_SmoothnessMax=0.95;
float reflectivityLuminance=getLuminance(reflectivityColor);
float reflectivityLuma=sqrt(reflectivityLuminance);
microSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;
return microSurface;
}
#endif`;L.a.IncludesShadersStore[Ee]=ve;var Pn={name:Ee,shader:ve},Dn=u(525),Nn=u(652),pe="harmonicsFunctions",Ae=`#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS







vec3 computeEnvironmentIrradiance(vec3 normal) {
return vSphericalL00
+vSphericalL1_1*(normal.y)
+vSphericalL10*(normal.z)
+vSphericalL11*(normal.x)
+vSphericalL2_2*(normal.y*normal.x)
+vSphericalL2_1*(normal.y*normal.z)
+vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+vSphericalL21*(normal.z*normal.x)
+vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));
}
#else

vec3 computeEnvironmentIrradiance(vec3 normal) {









float Nx=normal.x;
float Ny=normal.y;
float Nz=normal.z;
vec3 C1=vSphericalZZ.rgb;
vec3 Cx=vSphericalX.rgb;
vec3 Cy=vSphericalY.rgb;
vec3 Cz=vSphericalZ.rgb;
vec3 Cxx_zz=vSphericalXX_ZZ.rgb;
vec3 Cyy_zz=vSphericalYY_ZZ.rgb;
vec3 Cxy=vSphericalXY.rgb;
vec3 Cyz=vSphericalYZ.rgb;
vec3 Czx=vSphericalZX.rgb;
vec3 a1=Cyy_zz*Ny+Cy;
vec3 a2=Cyz*Nz+a1;
vec3 b1=Czx*Nz+Cx;
vec3 b2=Cxy*Ny+b1;
vec3 b3=Cxx_zz*Nx+b2;
vec3 t1=Cz*Nz+C1;
vec3 t2=a2*Ny+t1;
vec3 t3=b3*Nx+t2;
return t3;
}
#endif
#endif`;L.a.IncludesShadersStore[pe]=Ae;var xn={name:pe,shader:Ae},Re="pbrDirectLightingSetupFunctions",Te=`
struct preLightingInfo
{

vec3 lightOffset;
float lightDistanceSquared;
float lightDistance;

float attenuation;

vec3 L;
vec3 H;
float NdotV;
float NdotLUnclamped;
float NdotL;
float VdotH;
float roughness;
};
preLightingInfo computePointAndSpotPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {
preLightingInfo result;

result.lightOffset=lightData.xyz-vPositionW;
result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);

result.lightDistance=sqrt(result.lightDistanceSquared);

result.L=normalize(result.lightOffset);
result.H=normalize(V+result.L);
result.VdotH=saturate(dot(V,result.H));
result.NdotLUnclamped=dot(N,result.L);
result.NdotL=saturateEps(result.NdotLUnclamped);
return result;
}
preLightingInfo computeDirectionalPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {
preLightingInfo result;

result.lightDistance=length(-lightData.xyz);

result.L=normalize(-lightData.xyz);
result.H=normalize(V+result.L);
result.VdotH=saturate(dot(V,result.H));
result.NdotLUnclamped=dot(N,result.L);
result.NdotL=saturateEps(result.NdotLUnclamped);
return result;
}
preLightingInfo computeHemisphericPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {
preLightingInfo result;


result.NdotL=dot(N,lightData.xyz)*0.5+0.5;
result.NdotL=saturateEps(result.NdotL);
result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);
result.H=normalize(V+result.L);
result.VdotH=saturate(dot(V,result.H));
#endif
return result;
}`;L.a.IncludesShadersStore[Re]=Te;var Fn={name:Re,shader:Te},Ce="pbrDirectLightingFalloffFunctions",me=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
{
return max(0.,1.0-length(lightOffset)/range);
}
float computeDistanceLightFalloff_Physical(float lightDistanceSquared)
{
return 1.0/maxEps(lightDistanceSquared);
}
float computeDistanceLightFalloff_GLTF(float lightDistanceSquared,float inverseSquaredRange)
{
float lightDistanceFalloff=1.0/maxEps(lightDistanceSquared);
float factor=lightDistanceSquared*inverseSquaredRange;
float attenuation=saturate(1.0-factor*factor);
attenuation*=attenuation;

lightDistanceFalloff*=attenuation;
return lightDistanceFalloff;
}
float computeDistanceLightFalloff(vec3 lightOffset,float lightDistanceSquared,float range,float inverseSquaredRange)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
float computeDirectionalLightFalloff_Standard(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent)
{
float falloff=0.0;
float cosAngle=maxEps(dot(-lightDirection,directionToLightCenterW));
if (cosAngle>=cosHalfAngle)
{
falloff=max(0.,pow(cosAngle,exponent));
}
return falloff;
}
float computeDirectionalLightFalloff_Physical(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle)
{
const float kMinusLog2ConeAngleIntensityRatio=6.64385618977;





float concentrationKappa=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);


vec4 lightDirectionSpreadSG=vec4(-lightDirection*concentrationKappa,-concentrationKappa);
float falloff=exp2(dot(vec4(directionToLightCenterW,1.0),lightDirectionSpreadSG));
return falloff;
}
float computeDirectionalLightFalloff_GLTF(vec3 lightDirection,vec3 directionToLightCenterW,float lightAngleScale,float lightAngleOffset)
{



float cd=dot(-lightDirection,directionToLightCenterW);
float falloff=saturate(cd*lightAngleScale+lightAngleOffset);

falloff*=falloff;
return falloff;
}
float computeDirectionalLightFalloff(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent,float lightAngleScale,float lightAngleOffset)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDirectionalLightFalloff_Physical(lightDirection,directionToLightCenterW,cosHalfAngle);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDirectionalLightFalloff_GLTF(lightDirection,directionToLightCenterW,lightAngleScale,lightAngleOffset);
#else
return computeDirectionalLightFalloff_Standard(lightDirection,directionToLightCenterW,cosHalfAngle,exponent);
#endif
}`;L.a.IncludesShadersStore[Ce]=me;var yn={name:Ce,shader:me},Un=u(606),Bn=u(607),ge="pbrDirectLightingFunctions",_e=`#define CLEARCOATREFLECTANCE90 1.0

struct lightingInfo
{
vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef CLEARCOAT


vec4 clearCoat;
#endif
#ifdef SHEEN
vec3 sheen;
#endif
};

float adjustRoughnessFromLightProperties(float roughness,float lightRadius,float lightDistance) {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)

float lightRoughness=lightRadius/lightDistance;

float totalRoughness=saturate(lightRoughness+roughness);
return totalRoughness;
#else
return roughness;
#endif
}
vec3 computeHemisphericDiffuseLighting(preLightingInfo info,vec3 lightColor,vec3 groundColor) {
return mix(groundColor,lightColor,info.NdotL);
}
vec3 computeDiffuseLighting(preLightingInfo info,vec3 lightColor) {
float diffuseTerm=diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness);
return diffuseTerm*info.attenuation*info.NdotL*lightColor;
}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix){
vec4 strq=textureProjectionMatrix*vec4(vPositionW,1.0);
strq/=strq.w;
vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;
return toLinearSpace(textureColor);
}
#ifdef SS_TRANSLUCENCY
vec3 computeDiffuseAndTransmittedLighting(preLightingInfo info,vec3 lightColor,vec3 transmittance) {
float NdotL=absEps(info.NdotLUnclamped);

float wrapNdotL=computeWrappedDiffuseNdotL(NdotL,0.02);

float trAdapt=step(0.,info.NdotLUnclamped);
vec3 transmittanceNdotL=mix(transmittance*wrapNdotL,vec3(wrapNdotL),trAdapt);
float diffuseTerm=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);
return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;
}
#endif
#ifdef SPECULARTERM
vec3 computeSpecularLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {
float NdotH=saturateEps(dot(N,info.H));
float roughness=max(info.roughness,geometricRoughnessFactor);
float alphaG=convertRoughnessToAverageSlope(roughness);
vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
float smithVisibility=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
vec3 specTerm=fresnel*distribution*smithVisibility;
return specTerm*info.attenuation*info.NdotL*lightColor;
}
#endif
#ifdef ANISOTROPIC
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {
float NdotH=saturateEps(dot(N,info.H));
float TdotH=dot(T,info.H);
float BdotH=dot(B,info.H);
float TdotV=dot(T,V);
float BdotV=dot(B,V);
float TdotL=dot(T,info.L);
float BdotL=dot(B,info.L);
float alphaG=convertRoughnessToAverageSlope(info.roughness);
vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);
alphaTB=max(alphaTB,square(geometricRoughnessFactor));
vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);
float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);
vec3 specTerm=fresnel*distribution*smithVisibility;
return specTerm*info.attenuation*info.NdotL*lightColor;
}
#endif
#ifdef CLEARCOAT
vec4 computeClearCoatLighting(preLightingInfo info,vec3 Ncc,float geometricRoughnessFactor,float clearCoatIntensity,vec3 lightColor) {
float NccdotL=saturateEps(dot(Ncc,info.L));
float NccdotH=saturateEps(dot(Ncc,info.H));
float clearCoatRoughness=max(info.roughness,geometricRoughnessFactor);
float alphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
float fresnel=fresnelSchlickGGX(info.VdotH,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);
fresnel*=clearCoatIntensity;
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);
float kelemenVisibility=visibility_Kelemen(info.VdotH);
float clearCoatTerm=fresnel*distribution*kelemenVisibility;
return vec4(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);
}
vec3 computeClearCoatLightingAbsorption(float NdotVRefract,vec3 L,vec3 Ncc,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {
vec3 LRefract=-refract(L,Ncc,vClearCoatRefractionParams.y);
float NdotLRefract=saturateEps(dot(Ncc,LRefract));
vec3 absorption=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);
return absorption;
}
#endif
#ifdef SHEEN
vec3 computeSheenLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {
float NdotH=saturateEps(dot(N,info.H));
float roughness=max(info.roughness,geometricRoughnessFactor);
float alphaG=convertRoughnessToAverageSlope(roughness);


float fresnel=1.;
float distribution=normalDistributionFunction_CharlieSheen(NdotH,alphaG);

float visibility=visibility_Ashikhmin(info.NdotL,info.NdotV);

float sheenTerm=fresnel*distribution*visibility;
return sheenTerm*info.attenuation*info.NdotL*lightColor;
}
#endif
`;L.a.IncludesShadersStore[ge]=_e;var Gn={name:ge,shader:_e},Se="pbrIBLFunctions",Oe=`#if defined(REFLECTION) || defined(SS_REFRACTION)
float getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {
float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;
float lod=log2(microsurfaceAverageSlopeTexels);
return lod;
}
float getLinearLodFromRoughness(float cubeMapDimensionPixels,float roughness) {
float lod=log2(cubeMapDimensionPixels)*roughness;
return lod;
}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
float environmentRadianceOcclusion(float ambientOcclusion,float NdotVUnclamped) {


float temp=NdotVUnclamped+ambientOcclusion;
return saturate(square(temp)-1.0+ambientOcclusion);
}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
float environmentHorizonOcclusion(vec3 view,vec3 normal,vec3 geometricNormal) {

vec3 reflection=reflect(view,normal);
float temp=saturate(1.0+1.1*dot(reflection,geometricNormal));
return square(temp);
}
#endif




#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)


#define UNPACK_LOD(x) (1.0-x)*255.0
float getLodFromAlphaG(float cubeMapDimensionPixels,float alphaG,float NdotV) {
float microsurfaceAverageSlope=alphaG;






microsurfaceAverageSlope*=sqrt(abs(NdotV));
return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);
}
#endif`;L.a.IncludesShadersStore[Se]=Oe;var Vn={name:Se,shader:Oe},Hn=u(614),wn=u(615),jn=u(653),Ie="pbrBlockAlbedoOpacity",be=`struct albedoOpacityOutParams
{
vec3 surfaceAlbedo;
float alpha;
};
#define pbr_inline
void albedoOpacityBlock(
const in vec4 vAlbedoColor,
#ifdef ALBEDO
const in vec4 albedoTexture,
const in vec2 albedoInfos,
#endif
#ifdef OPACITY
const in vec4 opacityMap,
const in vec2 vOpacityInfos,
#endif
#ifdef DETAIL
const in vec4 detailColor,
const in vec4 vDetailInfos,
#endif
out albedoOpacityOutParams outParams
)
{

vec3 surfaceAlbedo=vAlbedoColor.rgb;
float alpha=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpace(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#ifdef VERTEXCOLOR
surfaceAlbedo*=vColor.rgb;
#endif
#ifdef DETAIL
float detailAlbedo=2.0*mix(0.5,detailColor.r,vDetailInfos.y);
surfaceAlbedo.rgb=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALBEDO

#ifdef OPACITY
#ifdef OPACITYRGB
alpha=getLuminance(opacityMap.rgb);
#else
alpha*=opacityMap.a;
#endif
alpha*=vOpacityInfos.y;
#endif
#ifdef VERTEXALPHA
alpha*=vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST
if (alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND

alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;
outParams.alpha=alpha;
}
`;L.a.IncludesShadersStore[Ie]=be;var Xn={name:Ie,shader:be},Me="pbrBlockReflectivity",Le=`struct reflectivityOutParams
{
float microSurface;
float roughness;
vec3 surfaceReflectivityColor;
#ifdef METALLICWORKFLOW
vec3 surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
vec3 ambientOcclusionColor;
#endif
#if DEBUGMODE>0
vec4 surfaceMetallicColorMap;
vec4 surfaceReflectivityColorMap;
vec2 metallicRoughness;
vec3 metallicF0;
#endif
};
#define pbr_inline
void reflectivityBlock(
const in vec4 vReflectivityColor,
#ifdef METALLICWORKFLOW
const in vec3 surfaceAlbedo,
const in vec4 metallicReflectanceFactors,
#endif
#ifdef REFLECTIVITY
const in vec3 reflectivityInfos,
const in vec4 surfaceMetallicOrReflectivityColorMap,
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
const in vec3 ambientOcclusionColorIn,
#endif
#ifdef MICROSURFACEMAP
const in vec4 microSurfaceTexel,
#endif
#ifdef DETAIL
const in vec4 detailColor,
const in vec4 vDetailInfos,
#endif
out reflectivityOutParams outParams
)
{
float microSurface=vReflectivityColor.a;
vec3 surfaceReflectivityColor=vReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec2 metallicRoughness=surfaceReflectivityColor.rg;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
vec3 aoStoreInMetalMap=vec3(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);
outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
#endif
#ifdef METALLNESSSTOREINMETALMAPBLUE
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.b;
#else
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.r;
#endif
#ifdef ROUGHNESSSTOREINMETALMAPALPHA
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.a;
#else
#ifdef ROUGHNESSSTOREINMETALMAPGREEN
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.g;
#endif
#endif
#endif
#ifdef DETAIL
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);
float loLerp=mix(0.,metallicRoughness.g,detailRoughness*2.);
float hiLerp=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);
metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#if DEBUGMODE>0
outParams.metallicRoughness=metallicRoughness;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS

microSurface=1.0-metallicRoughness.g;

vec3 baseColor=surfaceAlbedo;
#ifdef FROSTBITE_REFLECTANCE






outParams.surfaceAlbedo=baseColor.rgb*(1.0-metallicRoughness.r);

surfaceReflectivityColor=mix(0.16*reflectance*reflectance,baseColor,metallicRoughness.r);
#else
vec3 metallicF0=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=metallicF0;
#endif

outParams.surfaceAlbedo=mix(baseColor.rgb*(1.0-metallicF0),vec3(0.,0.,0.),metallicRoughness.r);

surfaceReflectivityColor=mix(metallicF0,baseColor,metallicRoughness.r);
#endif
#else
#ifdef REFLECTIVITY
surfaceReflectivityColor*=surfaceMetallicOrReflectivityColorMap.rgb;
#if DEBUGMODE>0
outParams.surfaceReflectivityColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef MICROSURFACEFROMREFLECTIVITYMAP
microSurface*=surfaceMetallicOrReflectivityColorMap.a;
microSurface*=reflectivityInfos.z;
#else
#ifdef MICROSURFACEAUTOMATIC
microSurface*=computeDefaultMicroSurface(microSurface,surfaceReflectivityColor);
#endif
#ifdef MICROSURFACEMAP
microSurface*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE
#endif
#endif
#endif

microSurface=saturate(microSurface);

float roughness=1.-microSurface;
outParams.microSurface=microSurface;
outParams.roughness=roughness;
outParams.surfaceReflectivityColor=surfaceReflectivityColor;
}
`;L.a.IncludesShadersStore[Me]=Le;var zn={name:Me,shader:Le},Pe="pbrBlockAmbientOcclusion",De=`struct ambientOcclusionOutParams
{
vec3 ambientOcclusionColor;
#if DEBUGMODE>0
vec3 ambientOcclusionColorMap;
#endif
};
#define pbr_inline
void ambientOcclusionBlock(
#ifdef AMBIENT
const in vec3 ambientOcclusionColorMap_,
const in vec4 vAmbientInfos,
#endif
out ambientOcclusionOutParams outParams
)
{
vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;
}
`;L.a.IncludesShadersStore[Pe]=De;var Wn={name:Pe,shader:De},Ne="pbrBlockAlphaFresnel",xe=`#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{
float alpha;
};
#define pbr_inline
void alphaFresnelBlock(
const in vec3 normalW,
const in vec3 viewDirectionW,
const in float alpha,
const in float microSurface,
out alphaFresnelOutParams outParams
)
{



float opacityPerceptual=alpha;
#ifdef LINEARALPHAFRESNEL
float opacity0=opacityPerceptual;
#else
float opacity0=opacityPerceptual*opacityPerceptual;
#endif
float opacity90=fresnelGrazingReflectance(opacity0);
vec3 normalForward=faceforward(normalW,-viewDirectionW,normalW);

outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)),vec3(opacity0),vec3(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND

outParams.alpha=1.0;
#endif
#endif
}
#endif
#endif
`;L.a.IncludesShadersStore[Ne]=xe;var kn={name:Ne,shader:xe},Fe="pbrBlockAnisotropic",ye=`#ifdef ANISOTROPIC
struct anisotropicOutParams
{
float anisotropy;
vec3 anisotropicTangent;
vec3 anisotropicBitangent;
vec3 anisotropicNormal;
#if DEBUGMODE>0
vec3 anisotropyMapData;
#endif
};
#define pbr_inline
void anisotropicBlock(
const in vec3 vAnisotropy,
#ifdef ANISOTROPIC_TEXTURE
const in vec3 anisotropyMapData,
#endif
const in mat3 TBN,
const in vec3 normalW,
const in vec3 viewDirectionW,
out anisotropicOutParams outParams
)
{
float anisotropy=vAnisotropy.b;
vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
anisotropy*=anisotropyMapData.b;
anisotropyDirection.rg*=anisotropyMapData.rg*2.0-1.0;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
#endif
mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));
vec3 anisotropicTangent=normalize(anisoTBN*anisotropyDirection);
vec3 anisotropicBitangent=normalize(cross(anisoTBN[2],anisotropicTangent));
outParams.anisotropy=anisotropy;
outParams.anisotropicTangent=anisotropicTangent;
outParams.anisotropicBitangent=anisotropicBitangent;
outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy);
}
#endif
`;L.a.IncludesShadersStore[Fe]=ye;var Yn={name:Fe,shader:ye},Ue="pbrBlockReflection",Be=`#ifdef REFLECTION
struct reflectionOutParams
{
vec4 environmentRadiance;
vec3 environmentIrradiance;
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords;
#else
vec2 reflectionCoords;
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
vec3 irradianceVector;
#endif
#endif
#endif
};
#define pbr_inline
void createReflectionCoords(
const in vec3 vPositionW,
const in vec3 normalW,
#ifdef ANISOTROPIC
const in anisotropicOutParams anisotropicOut,
#endif
#ifdef REFLECTIONMAP_3D
out vec3 reflectionCoords
#else
out vec2 reflectionCoords
#endif
)
{
#ifdef ANISOTROPIC
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif

#ifdef REFLECTIONMAP_3D
reflectionCoords=reflectionVector;
#else
reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
}
#define pbr_inline
#define inline
void sampleReflectionTexture(
const in float alphaG,
const in vec3 vReflectionMicrosurfaceInfos,
const in vec2 vReflectionInfos,
const in vec3 vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
const in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
const in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSampler,
const vec3 reflectionCoords,
#else
const in sampler2D reflectionSampler,
const vec2 reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSamplerLow,
const in samplerCube reflectionSamplerHigh,
#else
const in sampler2D reflectionSamplerLow,
const in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
const in vec2 vReflectionFilteringInfo,
#endif
out vec4 environmentRadiance
)
{

#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE

reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA









float automaticReflectionLOD=UNPACK_LOD(sampleReflection(reflectionSampler,reflectionCoords).a);
float requestedReflectionLOD=max(automaticReflectionLOD,reflectionLOD);
#else
float requestedReflectionLOD=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#else
float lodReflectionNormalized=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));
float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;
vec4 environmentMid=sampleReflection(reflectionSampler,reflectionCoords);
if (lodReflectionNormalizedDoubled<1.0){
environmentRadiance=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);
} else {
environmentRadiance=mix(
environmentMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);
}
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif

environmentRadiance.rgb*=vReflectionInfos.x;
environmentRadiance.rgb*=vReflectionColor.rgb;
}
#define pbr_inline
#define inline
void reflectionBlock(
const in vec3 vPositionW,
const in vec3 normalW,
const in float alphaG,
const in vec3 vReflectionMicrosurfaceInfos,
const in vec2 vReflectionInfos,
const in vec3 vReflectionColor,
#ifdef ANISOTROPIC
const in anisotropicOutParams anisotropicOut,
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
const in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
const in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSampler,
#else
const in sampler2D reflectionSampler,
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
const in vec3 vEnvironmentIrradiance,
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
const in mat4 reflectionMatrix,
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
const in samplerCube irradianceSampler,
#else
const in sampler2D irradianceSampler,
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSamplerLow,
const in samplerCube reflectionSamplerHigh,
#else
const in sampler2D reflectionSamplerLow,
const in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
const in vec2 vReflectionFilteringInfo,
#endif
out reflectionOutParams outParams
)
{

vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.);
#else
vec2 reflectionCoords=vec2(0.);
#endif
createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
reflectionCoords
);
sampleReflectionTexture(
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
#ifdef REFLECTIONMAP_3D
reflectionSampler,
reflectionCoords,
#else
reflectionSampler,
reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentRadiance
);

vec3 environmentIrradiance=vec3(0.,0.,0.);
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradiance;
#else
#ifdef ANISOTROPIC
vec3 irradianceVector=vec3(reflectionMatrix*vec4(anisotropicOut.anisotropicNormal,0)).xyz;
#else
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,irradianceVector,vReflectionFilteringInfo);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#ifdef SS_TRANSLUCENCY
outParams.irradianceVector=irradianceVector;
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,reflectionCoords);
environmentIrradiance=environmentIrradiance4.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb;
outParams.environmentRadiance=environmentRadiance;
outParams.environmentIrradiance=environmentIrradiance;
outParams.reflectionCoords=reflectionCoords;
}
#endif
`;L.a.IncludesShadersStore[Ue]=Be;var Kn={name:Ue,shader:Be},Ge="pbrBlockSheen",Ve=`#ifdef SHEEN
struct sheenOutParams
{
float sheenIntensity;
vec3 sheenColor;
float sheenRoughness;
#ifdef SHEEN_LINKWITHALBEDO
vec3 surfaceAlbedo;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
float sheenAlbedoScaling;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 finalSheenRadianceScaled;
#endif
#if DEBUGMODE>0
vec4 sheenMapData;
vec3 sheenEnvironmentReflectance;
#endif
};
#define pbr_inline
#define inline
void sheenBlock(
const in vec4 vSheenColor,
#ifdef SHEEN_ROUGHNESS
const in float vSheenRoughness,
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
const in vec4 sheenMapRoughnessData,
#endif
#endif
const in float roughness,
#ifdef SHEEN_TEXTURE
const in vec4 sheenMapData,
#endif
const in float reflectance,
#ifdef SHEEN_LINKWITHALBEDO
const in vec3 baseColor,
const in vec3 surfaceAlbedo,
#endif
#ifdef ENVIRONMENTBRDF
const in float NdotV,
const in vec3 environmentBrdf,
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
const in vec2 AARoughnessFactors,
const in vec3 vReflectionMicrosurfaceInfos,
const in vec2 vReflectionInfos,
const in vec3 vReflectionColor,
const in vec4 vLightingIntensity,
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSampler,
const in vec3 reflectionCoords,
#else
const in sampler2D reflectionSampler,
const in vec2 reflectionCoords,
#endif
const in float NdotVUnclamped,
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSamplerLow,
const in samplerCube reflectionSamplerHigh,
#else
const in sampler2D reflectionSamplerLow,
const in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
const in vec2 vReflectionFilteringInfo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
const in float seo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
const in float eho,
#endif
#endif
out sheenOutParams outParams
)
{
float sheenIntensity=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
float sheenFactor=pow5(1.0-sheenIntensity);
vec3 sheenColor=baseColor.rgb*(1.0-sheenFactor);
float sheenRoughness=sheenIntensity;
outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
vec3 sheenColor=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
sheenColor.rgb*=sheenMapData.rgb;
#endif
#ifdef SHEEN_ROUGHNESS
float sheenRoughness=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
#ifdef SHEEN_TEXTURE_ROUGHNESS_IDENTICAL
sheenRoughness*=sheenMapData.a;
#else
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#endif
#else
float sheenRoughness=roughness;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#endif

#if !defined(SHEEN_ALBEDOSCALING)
sheenIntensity*=(1.-reflectance);
#endif

sheenColor*=sheenIntensity;
#endif

#ifdef ENVIRONMENTBRDF

#ifdef SHEEN_ROUGHNESS
vec3 environmentSheenBrdf=getBRDFLookup(NdotV,sheenRoughness);
#else
vec3 environmentSheenBrdf=environmentBrdf;
#endif

#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
float sheenAlphaG=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA

sheenAlphaG+=AARoughnessFactors.y;
#endif
vec4 environmentSheenRadiance=vec4(0.,0.,0.,0.);
sampleReflectionTexture(
sheenAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
sheenRoughness,
#endif
reflectionSampler,
reflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentSheenRadiance
);
vec3 sheenEnvironmentReflectance=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
sheenEnvironmentReflectance*=seo;
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
sheenEnvironmentReflectance*=eho;
#endif
#if DEBUGMODE>0
outParams.sheenEnvironmentReflectance=sheenEnvironmentReflectance;
#endif
outParams.finalSheenRadianceScaled=
environmentSheenRadiance.rgb *
sheenEnvironmentReflectance *
vLightingIntensity.z;





#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)



outParams.sheenAlbedoScaling=1.0-sheenIntensity*max(max(sheenColor.r,sheenColor.g),sheenColor.b)*environmentSheenBrdf.b;
#endif

outParams.sheenIntensity=sheenIntensity;
outParams.sheenColor=sheenColor;
outParams.sheenRoughness=sheenRoughness;
}
#endif
`;L.a.IncludesShadersStore[Ge]=Ve;var Qn={name:Ge,shader:Ve},He="pbrBlockClearcoat",we=`struct clearcoatOutParams
{
vec3 specularEnvironmentR0;
float conservationFactor;
vec3 clearCoatNormalW;
vec2 clearCoatAARoughnessFactors;
float clearCoatIntensity;
float clearCoatRoughness;
#ifdef REFLECTION
vec3 finalClearCoatRadianceScaled;
#endif
#ifdef CLEARCOAT_TINT
vec3 absorption;
float clearCoatNdotVRefract;
vec3 clearCoatColor;
float clearCoatThickness;
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
vec3 energyConservationFactorClearCoat;
#endif
#if DEBUGMODE>0
mat3 TBNClearCoat;
vec2 clearCoatMapData;
vec4 clearCoatTintMapData;
vec4 environmentClearCoatRadiance;
float clearCoatNdotV;
vec3 clearCoatEnvironmentReflectance;
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
#define inline
void clearcoatBlock(
const in vec3 vPositionW,
const in vec3 geometricNormalW,
const in vec3 viewDirectionW,
const in vec2 vClearCoatParams,
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
const in vec4 clearCoatMapRoughnessData,
#endif
const in vec3 specularEnvironmentR0,
#ifdef CLEARCOAT_TEXTURE
const in vec2 clearCoatMapData,
#endif
#ifdef CLEARCOAT_TINT
const in vec4 vClearCoatTintParams,
const in float clearCoatColorAtDistance,
const in vec4 vClearCoatRefractionParams,
#ifdef CLEARCOAT_TINT_TEXTURE
const in vec4 clearCoatTintMapData,
#endif
#endif
#ifdef CLEARCOAT_BUMP
const in vec2 vClearCoatBumpInfos,
const in vec4 clearCoatBumpMapData,
const in vec2 vClearCoatBumpUV,
#if defined(TANGENT) && defined(NORMAL)
const in mat3 vTBN,
#else
const in vec2 vClearCoatTangentSpaceParams,
#endif
#ifdef OBJECTSPACE_NORMALMAP
const in mat4 normalMatrix,
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
const in vec3 faceNormal,
#endif
#ifdef REFLECTION
const in vec3 vReflectionMicrosurfaceInfos,
const in vec2 vReflectionInfos,
const in vec3 vReflectionColor,
const in vec4 vLightingIntensity,
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSampler,
#else
const in sampler2D reflectionSampler,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
const in samplerCube reflectionSamplerLow,
const in samplerCube reflectionSamplerHigh,
#else
const in sampler2D reflectionSamplerLow,
const in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
const in vec2 vReflectionFilteringInfo,
#endif
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
const in float ambientMonochrome,
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
const in float frontFacingMultiplier,
#endif
out clearcoatOutParams outParams
)
{

float clearCoatIntensity=vClearCoatParams.x;
float clearCoatRoughness=vClearCoatParams.y;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#ifdef CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE
clearCoatRoughness*=clearCoatMapData.y;
#endif
#if DEBUGMODE>0
outParams.clearCoatMapData=clearCoatMapData;
#endif
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL
clearCoatRoughness*=clearCoatMapData.y;
#else
clearCoatRoughness*=clearCoatMapRoughnessData.y;
#endif
#endif
outParams.clearCoatIntensity=clearCoatIntensity;
outParams.clearCoatRoughness=clearCoatRoughness;
#ifdef CLEARCOAT_TINT
vec3 clearCoatColor=vClearCoatTintParams.rgb;
float clearCoatThickness=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
clearCoatColor*=clearCoatTintMapData.rgb;
clearCoatThickness*=clearCoatTintMapData.a;
#if DEBUGMODE>0
outParams.clearCoatTintMapData=clearCoatTintMapData;
#endif
#endif
outParams.clearCoatColor=computeColorAtDistanceInMedia(clearCoatColor,clearCoatColorAtDistance);
outParams.clearCoatThickness=clearCoatThickness;
#endif




#ifdef CLEARCOAT_REMAP_F0
vec3 specularEnvironmentR0Updated=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
vec3 specularEnvironmentR0Updated=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);

vec3 clearCoatNormalW=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
float clearCoatNormalScale=1.0;
#else
float clearCoatNormalScale=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBNClearCoat=vTBN;
#else

vec2 TBNClearCoatUV=vClearCoatBumpUV*frontFacingMultiplier;
mat3 TBNClearCoat=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz*2.0-1.0);
clearCoatNormalW=normalize(mat3(normalMatrix)*clearCoatNormalW);
#else
clearCoatNormalW=perturbNormal(TBNClearCoat,clearCoatBumpMapData.xyz,vClearCoatBumpInfos.y);
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
clearCoatNormalW*=sign(dot(clearCoatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
clearCoatNormalW=clearCoatNormalW*frontFacingMultiplier;
#endif
outParams.clearCoatNormalW=clearCoatNormalW;

outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);

float clearCoatNdotVUnclamped=dot(clearCoatNormalW,viewDirectionW);

float clearCoatNdotV=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT

vec3 clearCoatVRefract=-refract(vPositionW,clearCoatNormalW,vClearCoatRefractionParams.y);

outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))

vec3 environmentClearCoatBrdf=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif

#if defined(REFLECTION)
float clearCoatAlphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA

clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
vec4 environmentClearCoatRadiance=vec4(0.,0.,0.,0.);
vec3 clearCoatReflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif

#ifdef REFLECTIONMAP_3D
vec3 clearCoatReflectionCoords=clearCoatReflectionVector;
#else
vec2 clearCoatReflectionCoords=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
sampleReflectionTexture(
clearCoatAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
clearCoatNdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
clearCoatRoughness,
#endif
reflectionSampler,
clearCoatReflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentClearCoatRadiance
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif

#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 clearCoatEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef RADIANCEOCCLUSION
float clearCoatSeo=environmentRadianceOcclusion(ambientMonochrome,clearCoatNdotVUnclamped);
clearCoatEnvironmentReflectance*=clearCoatSeo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float clearCoatEho=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);
clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else

vec3 clearCoatEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV,vec3(1.),vec3(1.),sqrt(1.-clearCoatRoughness));
#endif
clearCoatEnvironmentReflectance*=clearCoatIntensity;
#if DEBUGMODE>0
outParams.clearCoatEnvironmentReflectance=clearCoatEnvironmentReflectance;
#endif
outParams.finalClearCoatRadianceScaled=
environmentClearCoatRadiance.rgb *
clearCoatEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(CLEARCOAT_TINT)

outParams.absorption=computeClearCoatAbsorption(outParams.clearCoatNdotVRefract,outParams.clearCoatNdotVRefract,outParams.clearCoatColor,clearCoatThickness,clearCoatIntensity);
#endif

float fresnelIBLClearCoat=fresnelSchlickGGX(clearCoatNdotV,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);
fresnelIBLClearCoat*=clearCoatIntensity;
outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
}
#endif
`;L.a.IncludesShadersStore[He]=we;var Zn={name:He,shader:we},je="pbrBlockSubSurface",Xe=`struct subSurfaceOutParams
{
vec3 specularEnvironmentReflectance;
#ifdef SS_REFRACTION
vec3 finalRefraction;
vec3 surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
float alpha;
#endif
#ifdef REFLECTION
float refractionFactorForIrradiance;
#endif
#endif
#ifdef SS_TRANSLUCENCY
vec3 transmittance;
float translucencyIntensity;
#ifdef REFLECTION
vec3 refractionIrradiance;
#endif
#endif
#if DEBUGMODE>0
vec4 thicknessMap;
vec4 environmentRefraction;
vec3 refractionTransmittance;
#endif
};
#ifdef SUBSURFACE
#define pbr_inline
#define inline
void subSurfaceBlock(
const in vec3 vSubSurfaceIntensity,
const in vec2 vThicknessParam,
const in vec4 vTintColor,
const in vec3 normalW,
const in vec3 specularEnvironmentReflectance,
#ifdef SS_THICKNESSANDMASK_TEXTURE
const in vec4 thicknessMap,
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
const in mat4 reflectionMatrix,
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
const in vec3 irradianceVector_,
#endif
#if defined(REALTIME_FILTERING)
const in samplerCube reflectionSampler,
const in vec2 vReflectionFilteringInfo,
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
const in samplerCube irradianceSampler,
#else
const in sampler2D irradianceSampler,
#endif
#endif
#endif
#endif
#ifdef SS_REFRACTION
const in vec3 vPositionW,
const in vec3 viewDirectionW,
const in mat4 view,
const in vec3 surfaceAlbedo,
const in vec4 vRefractionInfos,
const in mat4 refractionMatrix,
const in vec3 vRefractionMicrosurfaceInfos,
const in vec4 vLightingIntensity,
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
const in float alpha,
#endif
#ifdef SS_LODINREFRACTIONALPHA
const in float NdotVUnclamped,
#endif
#ifdef SS_LINEARSPECULARREFRACTION
const in float roughness,
#else
const in float alphaG,
#endif
#ifdef SS_REFRACTIONMAP_3D
const in samplerCube refractionSampler,
#ifndef LODBASEDMICROSFURACE
const in samplerCube refractionSamplerLow,
const in samplerCube refractionSamplerHigh,
#endif
#else
const in sampler2D refractionSampler,
#ifndef LODBASEDMICROSFURACE
const in sampler2D refractionSamplerLow,
const in sampler2D refractionSamplerHigh,
#endif
#endif
#ifdef ANISOTROPIC
const in anisotropicOutParams anisotropicOut,
#endif
#ifdef REALTIME_FILTERING
const in vec2 vRefractionFilteringInfo,
#endif
#endif
#ifdef SS_TRANSLUCENCY
const in vec3 vDiffusionDistance,
#endif
out subSurfaceOutParams outParams
)
{
outParams.specularEnvironmentReflectance=specularEnvironmentReflectance;



#ifdef SS_REFRACTION
float refractionIntensity=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);

outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
float translucencyIntensity=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
float thickness=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
#if DEBUGMODE>0
outParams.thicknessMap=thicknessMap;
#endif
#ifdef SS_MASK_FROM_THICKNESS_TEXTURE
#ifdef SS_REFRACTION
refractionIntensity*=thicknessMap.g;
#endif
#ifdef SS_TRANSLUCENCY
translucencyIntensity*=thicknessMap.b;
#endif
#elif defined(SS_MASK_FROM_THICKNESS_TEXTURE_GLTF)
#ifdef SS_REFRACTION
refractionIntensity*=thicknessMap.r;
#elif defined(SS_TRANSLUCENCY)
translucencyIntensity*=thicknessMap.r;
#endif
thickness=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#endif
#else
float thickness=vThicknessParam.y;
#endif



#ifdef SS_TRANSLUCENCY
thickness=maxEps(thickness);
vec3 transmittance=transmittanceBRDF_Burley(vTintColor.rgb,vDiffusionDistance,thickness);
transmittance*=translucencyIntensity;
outParams.transmittance=transmittance;
outParams.translucencyIntensity=translucencyIntensity;
#endif



#ifdef SS_REFRACTION
vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef ANISOTROPIC
vec3 refractionVector=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,vRefractionInfos.y);
#else
vec3 refractionVector=refract(-viewDirectionW,normalW,vRefractionInfos.y);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif

#ifdef SS_REFRACTIONMAP_3D
refractionVector.y=refractionVector.y*vRefractionInfos.w;
vec3 refractionCoords=refractionVector;
refractionCoords=vec3(refractionMatrix*vec4(refractionCoords,0));
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;
refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef SS_LODINREFRACTIONALPHA
float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
float refractionLOD=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,roughness);
#else
float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE

refractionLOD=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA









float automaticRefractionLOD=UNPACK_LOD(sampleRefraction(refractionSampler,refractionCoords).a);
float requestedRefractionLOD=max(automaticRefractionLOD,refractionLOD);
#else
float requestedRefractionLOD=refractionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRefraction=vec4(radiance(alphaG,refractionSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=sampleRefractionLod(refractionSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
float lodRefractionNormalized=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));
float lodRefractionNormalizedDoubled=lodRefractionNormalized*2.0;
vec4 environmentRefractionMid=sampleRefraction(refractionSampler,refractionCoords);
if (lodRefractionNormalizedDoubled<1.0){
environmentRefraction=mix(
sampleRefraction(refractionSamplerHigh,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);
} else {
environmentRefraction=mix(
environmentRefractionMid,
sampleRefraction(refractionSamplerLow,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);
}
#endif
#ifdef SS_RGBDREFRACTION
environmentRefraction.rgb=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
environmentRefraction.rgb=toLinearSpace(environmentRefraction.rgb);
#endif

environmentRefraction.rgb*=vRefractionInfos.x;
#endif



#ifdef SS_REFRACTION
vec3 refractionTransmittance=vec3(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);





refractionTransmittance*=cocaLambert(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)

float maxChannel=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);
vec3 volumeAlbedo=saturate(maxChannel*surfaceAlbedo);

environmentRefraction.rgb*=volumeAlbedo;
#else

vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);
refractionTransmittance*=cocaLambert(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT

environmentRefraction.rgb*=surfaceAlbedo.rgb;
#endif

outParams.surfaceAlbedo=surfaceAlbedo*(1.-refractionIntensity);
#ifdef REFLECTION

outParams.refractionFactorForIrradiance=(1.-refractionIntensity);

#endif

vec3 bounceSpecularEnvironmentReflectance=(2.0*specularEnvironmentReflectance)/(1.0+specularEnvironmentReflectance);
outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,specularEnvironmentReflectance,refractionIntensity);

refractionTransmittance*=1.0-outParams.specularEnvironmentReflectance;
#if DEBUGMODE>0
outParams.refractionTransmittance=refractionTransmittance;
#endif
outParams.finalRefraction=environmentRefraction.rgb*refractionTransmittance*vLightingIntensity.z;
#if DEBUGMODE>0
outParams.environmentRefraction=environmentRefraction;
#endif
#endif



#if defined(REFLECTION) && defined(SS_TRANSLUCENCY)
#if defined(NORMAL) && defined(USESPHERICALINVERTEX) || !defined(USESPHERICALFROMREFLECTIONMAP)
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
vec3 irradianceVector=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
vec3 refractionIrradiance=irradiance(reflectionSampler,-irradianceVector,vReflectionFilteringInfo);
#else
vec3 refractionIrradiance=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec3 irradianceCoords=irradianceVector;
#else
vec2 irradianceCoords=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
vec4 refractionIrradiance=sampleReflection(irradianceSampler,-irradianceCoords);
#ifdef RGBDREFLECTION
refractionIrradiance.rgb=fromRGBD(refractionIrradiance);
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance.rgb=toLinearSpace(refractionIrradiance.rgb);
#endif
#else
vec4 refractionIrradiance=vec4(0.);
#endif
refractionIrradiance.rgb*=transmittance;
outParams.refractionIrradiance=refractionIrradiance.rgb;
#endif
}
#endif
`;L.a.IncludesShadersStore[je]=Xe;var Jn={name:je,shader:Xe},qn=u(550),ze="pbrBlockNormalGeometric",We=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;L.a.IncludesShadersStore[ze]=We;var $n={name:ze,shader:We},et=u(616),ke="pbrBlockNormalFinal",Ye=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;L.a.IncludesShadersStore[ke]=Ye;var nt={name:ke,shader:Ye},tt=u(747),Ke="pbrBlockLightmapInit",Qe=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;L.a.IncludesShadersStore[Ke]=Qe;var it={name:Ke,shader:Qe},Ze="pbrBlockGeometryInfo",Je=`float NdotVUnclamped=dot(normalW,viewDirectionW);

float NdotV=absEps(NdotVUnclamped);
float alphaG=convertRoughnessToAverageSlope(roughness);
vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA

alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)

vec3 environmentBrdf=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
float ambientMonochrome=aoOut.ambientOcclusionColor.r;
#else
float ambientMonochrome=getLuminance(aoOut.ambientOcclusionColor);
#endif
float seo=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float eho=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;L.a.IncludesShadersStore[Ze]=Je;var rt={name:Ze,shader:Je},qe="pbrBlockReflectance0",$e=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
vec3 specularEnvironmentR0=reflectivityOut.surfaceReflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec3 specularEnvironmentR90=vec3(metallicReflectanceFactors.a);
#else
vec3 specularEnvironmentR90=vec3(1.0,1.0,1.0);
#endif

#ifdef ALPHAFRESNEL
float reflectance90=fresnelGrazingReflectance(reflectance);
specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;L.a.IncludesShadersStore[qe]=$e;var at={name:qe,shader:$e},en="pbrBlockReflectance",nn=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 specularEnvironmentReflectance=getReflectanceFromBRDFLookup(clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,environmentBrdf);
#ifdef RADIANCEOCCLUSION
specularEnvironmentReflectance*=seo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
specularEnvironmentReflectance*=eho;
#endif
#endif
#endif
#else

vec3 specularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));
#endif
#ifdef CLEARCOAT
specularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
specularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;L.a.IncludesShadersStore[en]=nn;var ot={name:en,shader:nn},tn="pbrBlockDirectLighting",rn=`vec3 diffuseBase=vec3(0.,0.,0.);
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#ifdef CLEARCOAT
vec3 clearCoatBase=vec3(0.,0.,0.);
#endif
#ifdef SHEEN
vec3 sheenBase=vec3(0.,0.,0.);
#endif

preLightingInfo preInfo;
lightingInfo info;
float shadow=1.;
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
vec3 absorption=vec3(0.);
#endif
`;L.a.IncludesShadersStore[tn]=rn;var st={name:tn,shader:rn},lt=u(654),an="pbrBlockFinalLitComponents",on=`



#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 energyConservationFactor=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo.rgb=(1.-reflectance)*surfaceAlbedo.rgb;
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo.rgb=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif

#ifdef REFLECTION
vec3 finalIrradiance=reflectionOut.environmentIrradiance;
#if defined(CLEARCOAT)
finalIrradiance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
finalIrradiance*=clearcoatOut.absorption;
#endif
#endif
#if defined(SS_REFRACTION)
finalIrradiance*=subSurfaceOut.refractionFactorForIrradiance;
#endif
#if defined(SS_TRANSLUCENCY)
finalIrradiance*=(1.0-subSurfaceOut.translucencyIntensity);
finalIrradiance+=subSurfaceOut.refractionIrradiance;
#endif
finalIrradiance*=surfaceAlbedo.rgb;
finalIrradiance*=vLightingIntensity.z;
finalIrradiance*=aoOut.ambientOcclusionColor;
#endif

#ifdef SPECULARTERM
vec3 finalSpecular=specularBase;
finalSpecular=max(finalSpecular,0.0);
vec3 finalSpecularScaled=finalSpecular*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif

#ifdef REFLECTION
vec3 finalRadiance=reflectionOut.environmentRadiance.rgb;
finalRadiance*=subSurfaceOut.specularEnvironmentReflectance;
vec3 finalRadianceScaled=finalRadiance*vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=energyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif

#ifdef SHEEN
vec3 finalSheen=sheenBase*sheenOut.sheenColor;
finalSheen=max(finalSheen,0.0);
vec3 finalSheenScaled=finalSheen*vLightingIntensity.x*vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif

#ifdef CLEARCOAT
vec3 finalClearCoat=clearCoatBase;
finalClearCoat=max(finalClearCoat,0.0);
vec3 finalClearCoatScaled=finalClearCoat*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalClearCoatScaled*=clearcoatOut.energyConservationFactorClearCoat;
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction*=clearcoatOut.conservationFactor;
#ifdef CLEARCOAT_TINT
subSurfaceOut.finalRefraction*=clearcoatOut.absorption;
#endif
#endif
#endif

#ifdef ALPHABLEND
float luminanceOverAlpha=0.0;
#if defined(REFLECTION) && defined(RADIANCEOVERALPHA)
luminanceOverAlpha+=getLuminance(finalRadianceScaled);
#if defined(CLEARCOAT)
luminanceOverAlpha+=getLuminance(clearcoatOut.finalClearCoatRadianceScaled);
#endif
#endif
#if defined(SPECULARTERM) && defined(SPECULAROVERALPHA)
luminanceOverAlpha+=getLuminance(finalSpecularScaled);
#endif
#if defined(CLEARCOAT) && defined(CLEARCOATOVERALPHA)
luminanceOverAlpha+=getLuminance(finalClearCoatScaled);
#endif
#if defined(RADIANCEOVERALPHA) || defined(SPECULAROVERALPHA) || defined(CLEARCOATOVERALPHA)
alpha=saturate(alpha+luminanceOverAlpha*luminanceOverAlpha);
#endif
#endif
`;L.a.IncludesShadersStore[an]=on;var ft={name:an,shader:on},sn="pbrBlockFinalUnlitComponents",ln=`
vec3 finalDiffuse=diffuseBase;
finalDiffuse*=surfaceAlbedo.rgb;
finalDiffuse=max(finalDiffuse,0.0);
finalDiffuse*=vLightingIntensity.x;

vec3 finalAmbient=vAmbientColor;
finalAmbient*=surfaceAlbedo.rgb;

vec3 finalEmissive=vEmissiveColor;
#ifdef EMISSIVE
vec3 emissiveColorTex=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb;
finalEmissive*=toLinearSpace(emissiveColorTex.rgb);
finalEmissive*=vEmissiveInfos.y;
#endif
finalEmissive*=vLightingIntensity.y;

#ifdef AMBIENT
vec3 ambientOcclusionForDirectDiffuse=mix(vec3(1.),aoOut.ambientOcclusionColor,vAmbientInfos.w);
#else
vec3 ambientOcclusionForDirectDiffuse=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;
finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;L.a.IncludesShadersStore[sn]=ln;var ct={name:sn,shader:ln},fn="pbrBlockFinalColorComposition",cn=`vec4 finalColor=vec4(
finalAmbient +
finalDiffuse +
#ifndef UNLIT
#ifdef REFLECTION
finalIrradiance +
#endif
#ifdef SPECULARTERM
finalSpecularScaled +
#endif
#ifdef SHEEN
finalSheenScaled +
#endif
#ifdef CLEARCOAT
finalClearCoatScaled +
#endif
#ifdef REFLECTION
finalRadianceScaled +
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled +
#endif
#ifdef CLEARCOAT
clearcoatOut.finalClearCoatRadianceScaled +
#endif
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction +
#endif
#endif
finalEmissive,
alpha);

#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
finalColor.rgb*=lightmapColor.rgb;
#else
finalColor.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG

finalColor=max(finalColor,0.0);
`;L.a.IncludesShadersStore[fn]=cn;var ut={name:fn,shader:cn},dt=u(701),ht=u(655),un="pbrBlockImageProcessing",dn=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;L.a.IncludesShadersStore[un]=dn;var Et={name:un,shader:dn},hn="pbrDebug",En=`#if DEBUGMODE>0
if (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {

#if DEBUGMODE == 1
gl_FragColor.rgb=vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 2 && defined(NORMAL)
gl_FragColor.rgb=vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 3 && defined(BUMP) || DEBUGMODE == 3 && defined(PARALLAX) || DEBUGMODE == 3 && defined(ANISOTROPIC)

gl_FragColor.rgb=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 4 && defined(BUMP) || DEBUGMODE == 4 && defined(PARALLAX) || DEBUGMODE == 4 && defined(ANISOTROPIC)

gl_FragColor.rgb=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 5

gl_FragColor.rgb=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 6 && defined(MAINUV1)
gl_FragColor.rgb=vec3(vMainUV1,0.0);
#elif DEBUGMODE == 7 && defined(MAINUV2)
gl_FragColor.rgb=vec3(vMainUV2,0.0);
#elif DEBUGMODE == 8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)

gl_FragColor.rgb=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)

gl_FragColor.rgb=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 10 && defined(CLEARCOAT)

gl_FragColor.rgb=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 11 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 12 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE == 13 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE

#elif DEBUGMODE == 20 && defined(ALBEDO)
gl_FragColor.rgb=albedoTexture.rgb;
#elif DEBUGMODE == 21 && defined(AMBIENT)
gl_FragColor.rgb=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE == 22 && defined(OPACITY)
gl_FragColor.rgb=opacityMap.rgb;
#elif DEBUGMODE == 23 && defined(EMISSIVE)
gl_FragColor.rgb=emissiveColorTex.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 24 && defined(LIGHTMAP)
gl_FragColor.rgb=lightmapColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE == 26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE == 28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
gl_FragColor.rgb=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE == 29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
gl_FragColor.rgb=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE == 30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
gl_FragColor.rgb=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE == 31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
gl_FragColor.rgb=subSurfaceOut.thicknessMap.rgb;

#elif DEBUGMODE == 40 && defined(SS_REFRACTION)

gl_FragColor.rgb=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 41 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 42 && defined(CLEARCOAT) && defined(REFLECTION)
gl_FragColor.rgb=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA

#elif DEBUGMODE == 50
gl_FragColor.rgb=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 51 && defined(SPECULARTERM)
gl_FragColor.rgb=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 52 && defined(CLEARCOAT)
gl_FragColor.rgb=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 53 && defined(SHEEN)
gl_FragColor.rgb=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 54 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentIrradiance.rgb;
#define DEBUGMODE_GAMMA

#elif DEBUGMODE == 60
gl_FragColor.rgb=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 61
gl_FragColor.rgb=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 62 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=vec3(reflectivityOut.metallicRoughness.r);
#elif DEBUGMODE == 71 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.metallicF0;
#elif DEBUGMODE == 63
gl_FragColor.rgb=vec3(roughness);
#elif DEBUGMODE == 64
gl_FragColor.rgb=vec3(alphaG);
#elif DEBUGMODE == 65
gl_FragColor.rgb=vec3(NdotV);
#elif DEBUGMODE == 66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
gl_FragColor.rgb=clearcoatOut.clearCoatColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 67 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE == 68 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE == 69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
gl_FragColor.rgb=subSurfaceOut.transmittance;
#elif DEBUGMODE == 70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.refractionTransmittance;

#elif DEBUGMODE == 80 && defined(RADIANCEOCCLUSION)
gl_FragColor.rgb=vec3(seo);
#elif DEBUGMODE == 81 && defined(HORIZONOCCLUSION)
gl_FragColor.rgb=vec3(eho);
#elif DEBUGMODE == 82 && defined(MS_BRDF_ENERGY_CONSERVATION)
gl_FragColor.rgb=vec3(energyConservationFactor);
#elif DEBUGMODE == 83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=specularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 85 && defined(SHEEN) && defined(REFLECTION)
gl_FragColor.rgb=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE == 86 && defined(ALPHABLEND)
gl_FragColor.rgb=vec3(luminanceOverAlpha);
#elif DEBUGMODE == 87
gl_FragColor.rgb=vec3(alpha);
#endif
gl_FragColor.rgb*=vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
gl_FragColor.rgb=normalize(gl_FragColor.rgb)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
gl_FragColor.rgb=toGammaSpace(gl_FragColor.rgb);
#endif
gl_FragColor.a=1.0;
#ifdef PREPASS
gl_FragData[0]=toLinearSpace(gl_FragColor);
gl_FragData[1]=vec4(0.,0.,0.,0.);
#endif
return;
}
#endif`;L.a.IncludesShadersStore[hn]=En;var vt={name:hn,shader:En},vn="pbrPixelShader",pn=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef LODBASEDMICROSFURACE
#extension GL_EXT_shader_texture_lod : enable
#endif
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
precision highp float;

#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif

#include<__decl__pbrFragment>
#include<pbrFragmentExtraDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<pbrFragmentSamplersDeclaration>
#include<imageProcessingDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>

#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<importanceSampling>
#include<pbrHelperFunctions>
#include<imageProcessingFunctions>
#include<shadowsFragmentFunctions>
#include<harmonicsFunctions>
#include<pbrDirectLightingSetupFunctions>
#include<pbrDirectLightingFalloffFunctions>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
#include<pbrDirectLightingFunctions>
#include<pbrIBLFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<pbrBlockAlbedoOpacity>
#include<pbrBlockReflectivity>
#include<pbrBlockAmbientOcclusion>
#include<pbrBlockAlphaFresnel>
#include<pbrBlockAnisotropic>
#include<pbrBlockReflection>
#include<pbrBlockSheen>
#include<pbrBlockClearcoat>
#include<pbrBlockSubSurface>

void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>

#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>

albedoOpacityOutParams albedoOpacityOut;
#ifdef ALBEDO
vec4 albedoTexture=texture2D(albedoSampler,vAlbedoUV+uvOffset);
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#endif
albedoOpacityBlock(
vAlbedoColor,
#ifdef ALBEDO
albedoTexture,
vAlbedoInfos,
#endif
#ifdef OPACITY
opacityMap,
vOpacityInfos,
#endif
#ifdef DETAIL
detailColor,
vDetailInfos,
#endif
albedoOpacityOut
);
vec3 surfaceAlbedo=albedoOpacityOut.surfaceAlbedo;
float alpha=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS

ambientOcclusionOutParams aoOut;
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb;
#endif
ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
vAmbientInfos,
#endif
aoOut
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else

vec3 baseColor=surfaceAlbedo;
reflectivityOutParams reflectivityOut;
#if defined(REFLECTIVITY)
vec4 surfaceMetallicOrReflectivityColorMap=texture2D(reflectivitySampler,vReflectivityUV+uvOffset);
vec4 baseReflectivity=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
surfaceMetallicOrReflectivityColorMap=toLinearSpace(surfaceMetallicOrReflectivityColorMap);
surfaceMetallicOrReflectivityColorMap.rgb*=vReflectivityInfos.y;
#endif
#endif
#if defined(MICROSURFACEMAP)
vec4 microSurfaceTexel=texture2D(microSurfaceSampler,vMicroSurfaceSamplerUV+uvOffset)*vMicroSurfaceSamplerInfos.y;
#endif
#ifdef METALLICWORKFLOW
vec4 metallicReflectanceFactors=vMetallicReflectanceFactors;
#ifdef METALLIC_REFLECTANCE
vec4 metallicReflectanceFactorsMap=texture2D(metallicReflectanceSampler,vMetallicReflectanceUV+uvOffset);
metallicReflectanceFactorsMap=toLinearSpace(metallicReflectanceFactorsMap);
metallicReflectanceFactors*=metallicReflectanceFactorsMap;
#endif
#endif
reflectivityBlock(
vReflectivityColor,
#ifdef METALLICWORKFLOW
surfaceAlbedo,
metallicReflectanceFactors,
#endif
#ifdef REFLECTIVITY
vReflectivityInfos,
surfaceMetallicOrReflectivityColorMap,
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor,
#endif
#ifdef MICROSURFACEMAP
microSurfaceTexel,
#endif
#ifdef DETAIL
detailColor,
vDetailInfos,
#endif
reflectivityOut
);
float microSurface=reflectivityOut.microSurface;
float roughness=reflectivityOut.roughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif

#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
alphaFresnelOutParams alphaFresnelOut;
alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface,
alphaFresnelOut
);
alpha=alphaFresnelOut.alpha;
#endif
#endif

#include<pbrBlockGeometryInfo>

#ifdef ANISOTROPIC
anisotropicOutParams anisotropicOut;
#ifdef ANISOTROPIC_TEXTURE
vec3 anisotropyMapData=texture2D(anisotropySampler,vAnisotropyUV+uvOffset).rgb*vAnisotropyInfos.y;
#endif
anisotropicBlock(
vAnisotropy,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData,
#endif
TBN,
normalW,
viewDirectionW,
anisotropicOut
);
#endif

#ifdef REFLECTION
reflectionOutParams reflectionOut;
reflectionBlock(
vPositionW,
normalW,
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
reflectionSampler,
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
vEnvironmentIrradiance,
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
reflectionMatrix,
#endif
#endif
#ifdef USEIRRADIANCEMAP
irradianceSampler,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
reflectionOut
);
#endif

#include<pbrBlockReflectance0>

#ifdef SHEEN
sheenOutParams sheenOut;
#ifdef SHEEN_TEXTURE
vec4 sheenMapData=toLinearSpace(texture2D(sheenSampler,vSheenUV+uvOffset))*vSheenInfos.y;
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 sheenMapRoughnessData=texture2D(sheenRoughnessSampler,vSheenRoughnessUV+uvOffset)*vSheenInfos.w;
#endif
sheenBlock(
vSheenColor,
#ifdef SHEEN_ROUGHNESS
vSheenRoughness,
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
sheenMapRoughnessData,
#endif
#endif
roughness,
#ifdef SHEEN_TEXTURE
sheenMapData,
#endif
reflectance,
#ifdef SHEEN_LINKWITHALBEDO
baseColor,
surfaceAlbedo,
#endif
#ifdef ENVIRONMENTBRDF
NdotV,
environmentBrdf,
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
AARoughnessFactors,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
vLightingIntensity,
reflectionSampler,
reflectionOut.reflectionCoords,
NdotVUnclamped,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
seo,
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
eho,
#endif
#endif
sheenOut
);
#ifdef SHEEN_LINKWITHALBEDO
surfaceAlbedo=sheenOut.surfaceAlbedo;
#endif
#endif

clearcoatOutParams clearcoatOut;
#ifdef CLEARCOAT
#ifdef CLEARCOAT_TEXTURE
vec2 clearCoatMapData=texture2D(clearCoatSampler,vClearCoatUV+uvOffset).rg*vClearCoatInfos.y;
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 clearCoatMapRoughnessData=texture2D(clearCoatRoughnessSampler,vClearCoatRoughnessUV+uvOffset)*vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData=toLinearSpace(texture2D(clearCoatTintSampler,vClearCoatTintUV+uvOffset));
#endif
#ifdef CLEARCOAT_BUMP
vec4 clearCoatBumpMapData=texture2D(clearCoatBumpSampler,vClearCoatBumpUV+uvOffset);
#endif
clearcoatBlock(
vPositionW,
geometricNormalW,
viewDirectionW,
vClearCoatParams,
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
clearCoatMapRoughnessData,
#endif
specularEnvironmentR0,
#ifdef CLEARCOAT_TEXTURE
clearCoatMapData,
#endif
#ifdef CLEARCOAT_TINT
vClearCoatTintParams,
clearCoatColorAtDistance,
vClearCoatRefractionParams,
#ifdef CLEARCOAT_TINT_TEXTURE
clearCoatTintMapData,
#endif
#endif
#ifdef CLEARCOAT_BUMP
vClearCoatBumpInfos,
clearCoatBumpMapData,
vClearCoatBumpUV,
#if defined(TANGENT) && defined(NORMAL)
vTBN,
#else
vClearCoatTangentSpaceParams,
#endif
#ifdef OBJECTSPACE_NORMALMAP
normalMatrix,
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
faceNormal,
#endif
#ifdef REFLECTION
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
vLightingIntensity,
reflectionSampler,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
ambientMonochrome,
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
(gl_FrontFacing ? 1. : -1.),
#endif
clearcoatOut
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif

#include<pbrBlockReflectance>

subSurfaceOutParams subSurfaceOut;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap=texture2D(thicknessSampler,vThicknessUV+uvOffset);
#endif
subSurfaceBlock(
vSubSurfaceIntensity,
vThicknessParam,
vTintColor,
normalW,
specularEnvironmentReflectance,
#ifdef SS_THICKNESSANDMASK_TEXTURE
thicknessMap,
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
reflectionMatrix,
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
reflectionOut.irradianceVector,
#endif
#if defined(REALTIME_FILTERING)
reflectionSampler,
vReflectionFilteringInfo,
#endif
#endif
#ifdef USEIRRADIANCEMAP
irradianceSampler,
#endif
#endif
#endif
#ifdef SS_REFRACTION
vPositionW,
viewDirectionW,
view,
surfaceAlbedo,
vRefractionInfos,
refractionMatrix,
vRefractionMicrosurfaceInfos,
vLightingIntensity,
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha,
#endif
#ifdef SS_LODINREFRACTIONALPHA
NdotVUnclamped,
#endif
#ifdef SS_LINEARSPECULARREFRACTION
roughness,
#else
alphaG,
#endif
refractionSampler,
#ifndef LODBASEDMICROSFURACE
refractionSamplerLow,
refractionSamplerHigh,
#endif
#ifdef ANISOTROPIC
anisotropicOut,
#endif
#ifdef REALTIME_FILTERING
vRefractionFilteringInfo,
#endif
#endif
#ifdef SS_TRANSLUCENCY
vDiffusionDistance,
#endif
subSurfaceOut
);
#ifdef SS_REFRACTION
surfaceAlbedo=subSurfaceOut.surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha=subSurfaceOut.alpha;
#endif
#endif
#else
subSurfaceOut.specularEnvironmentReflectance=specularEnvironmentReflectance;
#endif

#include<pbrBlockDirectLighting>
#include<lightFragment>[0..maxSimultaneousLights]

#include<pbrBlockFinalLitComponents>
#endif
#include<pbrBlockFinalUnlitComponents>
#include<pbrBlockFinalColorComposition>
#include<logDepthFragment>
#include<fogFragment>(color,finalColor)
#include<pbrBlockImageProcessing>
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
float writeGeometryInfo=finalColor.a>0.4 ? 1.0 : 0.0;
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
vec3 irradiance=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
vec3 sqAlbedo=sqrt(surfaceAlbedo);
#ifdef SS_SCATTERING
gl_FragData[0]=vec4(finalColor.rgb-irradiance,finalColor.a);
irradiance/=sqAlbedo;
#else
gl_FragData[0]=finalColor;
float scatteringDiffusionProfile=255.;
#endif
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(clamp(irradiance,vec3(0.),vec3(1.)),scatteringDiffusionProfile/255.);
#else
gl_FragData[0]=vec4(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
gl_FragData[PREPASS_NORMAL_INDEX]=vec4((view*vec4(normalW,0.0)).rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(sqAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(REFLECTIVITY)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(baseReflectivity.rgb,writeGeometryInfo);
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo);
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=finalColor;
#endif
#include<pbrDebug>
}
`;L.a.ShadersStore[vn]=pn;var pt={name:vn,shader:pn},An="pbrVertexDeclaration",Rn=`uniform mat4 view;
uniform mat4 viewProjection;
uniform mat4 world;
#ifdef ALBEDO
uniform mat4 albedoMatrix;
uniform vec2 vAlbedoInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;
uniform vec4 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
uniform mat4 lightmapMatrix;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;
uniform mat4 reflectivityMatrix;
#endif
#ifdef METALLIC_REFLECTANCE
uniform vec2 vMetallicReflectanceInfos;
uniform mat4 metallicReflectanceMatrix;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
uniform mat4 microSurfaceSamplerMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform mat4 bumpMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif

#ifdef REFLECTION
uniform vec2 vReflectionInfos;
uniform mat4 reflectionMatrix;
#endif

#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;
uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;
uniform mat4 clearCoatTintMatrix;
#endif
#endif

#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;
uniform mat4 anisotropyMatrix;
#endif
#endif

#ifdef SHEEN
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif

#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionInfos;
uniform mat4 refractionMatrix;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;
uniform mat4 thicknessMatrix;
#endif
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;
uniform vec3 vSphericalL1_1;
uniform vec3 vSphericalL10;
uniform vec3 vSphericalL11;
uniform vec3 vSphericalL2_2;
uniform vec3 vSphericalL2_1;
uniform vec3 vSphericalL20;
uniform vec3 vSphericalL21;
uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;
uniform vec3 vSphericalY;
uniform vec3 vSphericalZ;
uniform vec3 vSphericalXX_ZZ;
uniform vec3 vSphericalYY_ZZ;
uniform vec3 vSphericalZZ;
uniform vec3 vSphericalXY;
uniform vec3 vSphericalYZ;
uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
uniform mat4 detailMatrix;
#endif`;L.a.IncludesShadersStore[An]=Rn;var At={name:An,shader:Rn},Rt=u(487),Tt=u(748),Ct=u(749),mt=u(593),gt=u(656),_t=u(657),St=u(658),Ot=u(496),It=u(497),bt=u(507),Mt=u(508),Lt=u(488),Pt=u(489),Dt=u(750),Nt=u(675),xt=u(551),Ft=u(702),yt=u(659),Ut=u(703),Tn="pbrVertexShader",Cn=`precision highp float;
#include<__decl__pbrVertex>
#define CUSTOM_VERTEX_BEGIN

attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>

#ifdef INSTANCES
attribute vec4 world0;
attribute vec4 world1;
attribute vec4 world2;
attribute vec4 world3;
#endif
#include<prePassVertexDeclaration>
#if defined(ALBEDO) && ALBEDODIRECTUV == 0
varying vec2 vAlbedoUV;
#endif
#if defined(DETAIL) && DETAILDIRECTUV == 0
varying vec2 vDetailUV;
#endif
#if defined(AMBIENT) && AMBIENTDIRECTUV == 0
varying vec2 vAmbientUV;
#endif
#if defined(OPACITY) && OPACITYDIRECTUV == 0
varying vec2 vOpacityUV;
#endif
#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0
varying vec2 vEmissiveUV;
#endif
#if defined(LIGHTMAP) && LIGHTMAPDIRECTUV == 0
varying vec2 vLightmapUV;
#endif
#if defined(REFLECTIVITY) && REFLECTIVITYDIRECTUV == 0
varying vec2 vReflectivityUV;
#endif
#if defined(MICROSURFACEMAP) && MICROSURFACEMAPDIRECTUV == 0
varying vec2 vMicroSurfaceSamplerUV;
#endif
#if defined(METALLIC_REFLECTANCE) && METALLIC_REFLECTANCEDIRECTUV == 0
varying vec2 vMetallicReflectanceUV;
#endif
#if defined(BUMP) && BUMPDIRECTUV == 0
varying vec2 vBumpUV;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) && CLEARCOAT_TEXTUREDIRECTUV == 0
varying vec2 vClearCoatUV;
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV == 0
varying vec2 vClearCoatRoughnessUV;
#endif
#if defined(CLEARCOAT_BUMP) && CLEARCOAT_BUMPDIRECTUV == 0
varying vec2 vClearCoatBumpUV;
#endif
#if defined(CLEARCOAT_TINT_TEXTURE) && CLEARCOAT_TINT_TEXTUREDIRECTUV == 0
varying vec2 vClearCoatTintUV;
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) && SHEEN_TEXTUREDIRECTUV == 0
varying vec2 vSheenUV;
#endif
#if defined(SHEEN_TEXTURE_ROUGHNESS) && SHEEN_TEXTURE_ROUGHNESSDIRECTUV == 0
varying vec2 vSheenRoughnessUV;
#endif
#endif
#ifdef ANISOTROPIC
#if defined(ANISOTROPIC_TEXTURE) && ANISOTROPIC_TEXTUREDIRECTUV == 0
varying vec2 vAnisotropyUV;
#endif
#endif
#ifdef SUBSURFACE
#if defined(SS_THICKNESSANDMASK_TEXTURE) && SS_THICKNESSANDMASK_TEXTUREDIRECTUV == 0
varying vec2 vThicknessUV;
#endif
#endif

varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#include<harmonicsFunctions>
#endif
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)

vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*previousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
vPositionW=vec3(worldPos);
#include<prePassVertex>
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));
vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
vec3 reflectionVector=vec3(reflectionMatrix*vec4(vNormalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR == 0u) {
gl_Position=viewProjection*worldPos;
} else {
gl_Position=viewProjectionR*worldPos;
}
#else
gl_Position=viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vClipSpacePosition=gl_Position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif

#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2;
#endif
#if defined(ALBEDO) && ALBEDODIRECTUV == 0
if (vAlbedoInfos.x == 0.)
{
vAlbedoUV=vec2(albedoMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vAlbedoUV=vec2(albedoMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(DETAIL) && DETAILDIRECTUV == 0
if (vDetailInfos.x == 0.)
{
vDetailUV=vec2(detailMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vDetailUV=vec2(detailMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(AMBIENT) && AMBIENTDIRECTUV == 0
if (vAmbientInfos.x == 0.)
{
vAmbientUV=vec2(ambientMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vAmbientUV=vec2(ambientMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(OPACITY) && OPACITYDIRECTUV == 0
if (vOpacityInfos.x == 0.)
{
vOpacityUV=vec2(opacityMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(EMISSIVE) && EMISSIVEDIRECTUV == 0
if (vEmissiveInfos.x == 0.)
{
vEmissiveUV=vec2(emissiveMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vEmissiveUV=vec2(emissiveMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(LIGHTMAP) && LIGHTMAPDIRECTUV == 0
if (vLightmapInfos.x == 0.)
{
vLightmapUV=vec2(lightmapMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vLightmapUV=vec2(lightmapMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(REFLECTIVITY) && REFLECTIVITYDIRECTUV == 0
if (vReflectivityInfos.x == 0.)
{
vReflectivityUV=vec2(reflectivityMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vReflectivityUV=vec2(reflectivityMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(MICROSURFACEMAP) && MICROSURFACEMAPDIRECTUV == 0
if (vMicroSurfaceSamplerInfos.x == 0.)
{
vMicroSurfaceSamplerUV=vec2(microSurfaceSamplerMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vMicroSurfaceSamplerUV=vec2(microSurfaceSamplerMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(METALLIC_REFLECTANCE) && METALLIC_REFLECTANCEDIRECTUV == 0
if (vMetallicReflectanceInfos.x == 0.)
{
vMetallicReflectanceUV=vec2(metallicReflectanceMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vMetallicReflectanceUV=vec2(metallicReflectanceMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(BUMP) && BUMPDIRECTUV == 0
if (vBumpInfos.x == 0.)
{
vBumpUV=vec2(bumpMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vBumpUV=vec2(bumpMatrix*vec4(uv2,1.0,0.0));
}
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) && CLEARCOAT_TEXTUREDIRECTUV == 0
if (vClearCoatInfos.x == 0.)
{
vClearCoatUV=vec2(clearCoatMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vClearCoatUV=vec2(clearCoatMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV == 0
if (vClearCoatInfos.z == 0.)
{
vClearCoatRoughnessUV=vec2(clearCoatRoughnessMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vClearCoatRoughnessUV=vec2(clearCoatRoughnessMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(CLEARCOAT_BUMP) && CLEARCOAT_BUMPDIRECTUV == 0
if (vClearCoatBumpInfos.x == 0.)
{
vClearCoatBumpUV=vec2(clearCoatBumpMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vClearCoatBumpUV=vec2(clearCoatBumpMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(CLEARCOAT_TINT_TEXTURE) && CLEARCOAT_TINT_TEXTUREDIRECTUV == 0
if (vClearCoatTintInfos.x == 0.)
{
vClearCoatTintUV=vec2(clearCoatTintMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vClearCoatTintUV=vec2(clearCoatTintMatrix*vec4(uv2,1.0,0.0));
}
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) && SHEEN_TEXTUREDIRECTUV == 0
if (vSheenInfos.x == 0.)
{
vSheenUV=vec2(sheenMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vSheenUV=vec2(sheenMatrix*vec4(uv2,1.0,0.0));
}
#endif
#if defined(SHEEN_TEXTURE_ROUGHNESS) && SHEEN_TEXTURE_ROUGHNESSDIRECTUV == 0
if (vSheenInfos.z == 0.)
{
vSheenRoughnessUV=vec2(sheenRoughnessMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vSheenRoughnessUV=vec2(sheenRoughnessMatrix*vec4(uv2,1.0,0.0));
}
#endif
#endif
#ifdef ANISOTROPIC
#if defined(ANISOTROPIC_TEXTURE) && ANISOTROPIC_TEXTUREDIRECTUV == 0
if (vAnisotropyInfos.x == 0.)
{
vAnisotropyUV=vec2(anisotropyMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vAnisotropyUV=vec2(anisotropyMatrix*vec4(uv2,1.0,0.0));
}
#endif
#endif
#ifdef SUBSURFACE
#if defined(SS_THICKNESSANDMASK_TEXTURE) && SS_THICKNESSANDMASK_TEXTUREDIRECTUV == 0
if (vThicknessInfos.x == 0.)
{
vThicknessUV=vec2(thicknessMatrix*vec4(uvUpdated,1.0,0.0));
}
else
{
vThicknessUV=vec2(thicknessMatrix*vec4(uv2,1.0,0.0));
}
#endif
#endif

#include<bumpVertex>

#include<clipPlaneVertex>

#include<fogVertex>

#include<shadowsVertex>[0..maxSimultaneousLights]

#ifdef VERTEXCOLOR
vColor=color;
#endif

#ifdef POINTSIZE
gl_PointSize=pointSize;
#endif

#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;L.a.ShadersStore[Tn]=Cn;var Bt={name:Tn,shader:Cn},mn=u(512),fe=u(751),se={effect:null,subMesh:null},ue=function(g){Object(l.d)(s,g);function s(){var n=g.call(this)||this;return n.PBR=!0,n.NUM_SAMPLES="0",n.REALTIME_FILTERING=!1,n.MAINUV1=!1,n.MAINUV2=!1,n.UV1=!1,n.UV2=!1,n.ALBEDO=!1,n.GAMMAALBEDO=!1,n.ALBEDODIRECTUV=0,n.VERTEXCOLOR=!1,n.DETAIL=!1,n.DETAILDIRECTUV=0,n.DETAIL_NORMALBLENDMETHOD=0,n.AMBIENT=!1,n.AMBIENTDIRECTUV=0,n.AMBIENTINGRAYSCALE=!1,n.OPACITY=!1,n.VERTEXALPHA=!1,n.OPACITYDIRECTUV=0,n.OPACITYRGB=!1,n.ALPHATEST=!1,n.DEPTHPREPASS=!1,n.ALPHABLEND=!1,n.ALPHAFROMALBEDO=!1,n.ALPHATESTVALUE="0.5",n.SPECULAROVERALPHA=!1,n.RADIANCEOVERALPHA=!1,n.ALPHAFRESNEL=!1,n.LINEARALPHAFRESNEL=!1,n.PREMULTIPLYALPHA=!1,n.EMISSIVE=!1,n.EMISSIVEDIRECTUV=0,n.REFLECTIVITY=!1,n.REFLECTIVITYDIRECTUV=0,n.SPECULARTERM=!1,n.MICROSURFACEFROMREFLECTIVITYMAP=!1,n.MICROSURFACEAUTOMATIC=!1,n.LODBASEDMICROSFURACE=!1,n.MICROSURFACEMAP=!1,n.MICROSURFACEMAPDIRECTUV=0,n.METALLICWORKFLOW=!1,n.ROUGHNESSSTOREINMETALMAPALPHA=!1,n.ROUGHNESSSTOREINMETALMAPGREEN=!1,n.METALLNESSSTOREINMETALMAPBLUE=!1,n.AOSTOREINMETALMAPRED=!1,n.METALLIC_REFLECTANCE=!1,n.METALLIC_REFLECTANCEDIRECTUV=0,n.ENVIRONMENTBRDF=!1,n.ENVIRONMENTBRDF_RGBD=!1,n.NORMAL=!1,n.TANGENT=!1,n.BUMP=!1,n.BUMPDIRECTUV=0,n.OBJECTSPACE_NORMALMAP=!1,n.PARALLAX=!1,n.PARALLAXOCCLUSION=!1,n.NORMALXYSCALE=!0,n.LIGHTMAP=!1,n.LIGHTMAPDIRECTUV=0,n.USELIGHTMAPASSHADOWMAP=!1,n.GAMMALIGHTMAP=!1,n.RGBDLIGHTMAP=!1,n.REFLECTION=!1,n.REFLECTIONMAP_3D=!1,n.REFLECTIONMAP_SPHERICAL=!1,n.REFLECTIONMAP_PLANAR=!1,n.REFLECTIONMAP_CUBIC=!1,n.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,n.REFLECTIONMAP_PROJECTION=!1,n.REFLECTIONMAP_SKYBOX=!1,n.REFLECTIONMAP_EXPLICIT=!1,n.REFLECTIONMAP_EQUIRECTANGULAR=!1,n.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,n.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,n.INVERTCUBICMAP=!1,n.USESPHERICALFROMREFLECTIONMAP=!1,n.USEIRRADIANCEMAP=!1,n.SPHERICAL_HARMONICS=!1,n.USESPHERICALINVERTEX=!1,n.REFLECTIONMAP_OPPOSITEZ=!1,n.LODINREFLECTIONALPHA=!1,n.GAMMAREFLECTION=!1,n.RGBDREFLECTION=!1,n.LINEARSPECULARREFLECTION=!1,n.RADIANCEOCCLUSION=!1,n.HORIZONOCCLUSION=!1,n.INSTANCES=!1,n.THIN_INSTANCES=!1,n.PREPASS=!1,n.PREPASS_IRRADIANCE=!1,n.PREPASS_IRRADIANCE_INDEX=-1,n.PREPASS_ALBEDO=!1,n.PREPASS_ALBEDO_INDEX=-1,n.PREPASS_DEPTH=!1,n.PREPASS_DEPTH_INDEX=-1,n.PREPASS_NORMAL=!1,n.PREPASS_NORMAL_INDEX=-1,n.PREPASS_POSITION=!1,n.PREPASS_POSITION_INDEX=-1,n.PREPASS_VELOCITY=!1,n.PREPASS_VELOCITY_INDEX=-1,n.PREPASS_REFLECTIVITY=!1,n.PREPASS_REFLECTIVITY_INDEX=-1,n.SCENE_MRT_COUNT=0,n.NUM_BONE_INFLUENCERS=0,n.BonesPerMesh=0,n.BONETEXTURE=!1,n.BONES_VELOCITY_ENABLED=!1,n.NONUNIFORMSCALING=!1,n.MORPHTARGETS=!1,n.MORPHTARGETS_NORMAL=!1,n.MORPHTARGETS_TANGENT=!1,n.MORPHTARGETS_UV=!1,n.NUM_MORPH_INFLUENCERS=0,n.MORPHTARGETS_TEXTURE=!1,n.IMAGEPROCESSING=!1,n.VIGNETTE=!1,n.VIGNETTEBLENDMODEMULTIPLY=!1,n.VIGNETTEBLENDMODEOPAQUE=!1,n.TONEMAPPING=!1,n.TONEMAPPING_ACES=!1,n.CONTRAST=!1,n.COLORCURVES=!1,n.COLORGRADING=!1,n.COLORGRADING3D=!1,n.SAMPLER3DGREENDEPTH=!1,n.SAMPLER3DBGRMAP=!1,n.IMAGEPROCESSINGPOSTPROCESS=!1,n.EXPOSURE=!1,n.MULTIVIEW=!1,n.USEPHYSICALLIGHTFALLOFF=!1,n.USEGLTFLIGHTFALLOFF=!1,n.TWOSIDEDLIGHTING=!1,n.SHADOWFLOAT=!1,n.CLIPPLANE=!1,n.CLIPPLANE2=!1,n.CLIPPLANE3=!1,n.CLIPPLANE4=!1,n.CLIPPLANE5=!1,n.CLIPPLANE6=!1,n.POINTSIZE=!1,n.FOG=!1,n.LOGARITHMICDEPTH=!1,n.FORCENORMALFORWARD=!1,n.SPECULARAA=!1,n.CLEARCOAT=!1,n.CLEARCOAT_DEFAULTIOR=!1,n.CLEARCOAT_TEXTURE=!1,n.CLEARCOAT_TEXTURE_ROUGHNESS=!1,n.CLEARCOAT_TEXTUREDIRECTUV=0,n.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,n.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,n.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,n.CLEARCOAT_BUMP=!1,n.CLEARCOAT_BUMPDIRECTUV=0,n.CLEARCOAT_REMAP_F0=!0,n.CLEARCOAT_TINT=!1,n.CLEARCOAT_TINT_TEXTURE=!1,n.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,n.ANISOTROPIC=!1,n.ANISOTROPIC_TEXTURE=!1,n.ANISOTROPIC_TEXTUREDIRECTUV=0,n.BRDF_V_HEIGHT_CORRELATED=!1,n.MS_BRDF_ENERGY_CONSERVATION=!1,n.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,n.SHEEN=!1,n.SHEEN_TEXTURE=!1,n.SHEEN_TEXTURE_ROUGHNESS=!1,n.SHEEN_TEXTUREDIRECTUV=0,n.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,n.SHEEN_LINKWITHALBEDO=!1,n.SHEEN_ROUGHNESS=!1,n.SHEEN_ALBEDOSCALING=!1,n.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,n.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,n.SUBSURFACE=!1,n.SS_REFRACTION=!1,n.SS_TRANSLUCENCY=!1,n.SS_SCATTERING=!1,n.SS_THICKNESSANDMASK_TEXTURE=!1,n.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,n.SS_REFRACTIONMAP_3D=!1,n.SS_REFRACTIONMAP_OPPOSITEZ=!1,n.SS_LODINREFRACTIONALPHA=!1,n.SS_GAMMAREFRACTION=!1,n.SS_RGBDREFRACTION=!1,n.SS_LINEARSPECULARREFRACTION=!1,n.SS_LINKREFRACTIONTOTRANSPARENCY=!1,n.SS_ALBEDOFORREFRACTIONTINT=!1,n.SS_MASK_FROM_THICKNESS_TEXTURE=!1,n.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,n.UNLIT=!1,n.DEBUGMODE=0,n.rebuild(),n}return s.prototype.reset=function(){g.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},s}(P.a),gn=function(g){Object(l.d)(s,g);function s(n,o){var p=g.call(this,n,o)||this;return p._directIntensity=1,p._emissiveIntensity=1,p._environmentIntensity=1,p._specularIntensity=1,p._lightingInfos=new E.f(p._directIntensity,p._emissiveIntensity,p._environmentIntensity,p._specularIntensity),p._disableBumpMap=!1,p._albedoTexture=null,p._ambientTexture=null,p._ambientTextureStrength=1,p._ambientTextureImpactOnAnalyticalLights=s.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,p._opacityTexture=null,p._reflectionTexture=null,p._emissiveTexture=null,p._reflectivityTexture=null,p._metallicTexture=null,p._metallic=null,p._roughness=null,p._metallicF0Factor=1,p._metallicReflectanceColor=d.a.White(),p._metallicReflectanceTexture=null,p._microSurfaceTexture=null,p._bumpTexture=null,p._lightmapTexture=null,p._ambientColor=new d.a(0,0,0),p._albedoColor=new d.a(1,1,1),p._reflectivityColor=new d.a(1,1,1),p._reflectionColor=new d.a(1,1,1),p._emissiveColor=new d.a(0,0,0),p._microSurface=.9,p._useLightmapAsShadowmap=!1,p._useHorizonOcclusion=!0,p._useRadianceOcclusion=!0,p._useAlphaFromAlbedoTexture=!1,p._useSpecularOverAlpha=!0,p._useMicroSurfaceFromReflectivityMapAlpha=!1,p._useRoughnessFromMetallicTextureAlpha=!0,p._useRoughnessFromMetallicTextureGreen=!1,p._useMetallnessFromMetallicTextureBlue=!1,p._useAmbientOcclusionFromMetallicTextureRed=!1,p._useAmbientInGrayScale=!1,p._useAutoMicroSurfaceFromReflectivityMap=!1,p._lightFalloff=s.LIGHTFALLOFF_PHYSICAL,p._useRadianceOverAlpha=!0,p._useObjectSpaceNormalMap=!1,p._useParallax=!1,p._useParallaxOcclusion=!1,p._parallaxScaleBias=.05,p._disableLighting=!1,p._maxSimultaneousLights=4,p._invertNormalMapX=!1,p._invertNormalMapY=!1,p._twoSidedLighting=!1,p._alphaCutOff=.4,p._forceAlphaTest=!1,p._useAlphaFresnel=!1,p._useLinearAlphaFresnel=!1,p._environmentBRDFTexture=null,p._forceIrradianceInFragment=!1,p._realTimeFiltering=!1,p._realTimeFilteringQuality=8,p._forceNormalForward=!1,p._enableSpecularAntiAliasing=!1,p._imageProcessingObserver=null,p._renderTargets=new T.a(16),p._globalAmbientColor=new d.a(0,0,0),p._useLogarithmicDepth=!1,p._unlit=!1,p._debugMode=0,p.debugMode=0,p.debugLimit=-1,p.debugFactor=1,p.clearCoat=new e.a(p._markAllSubMeshesAsTexturesDirty.bind(p)),p.anisotropy=new a(p._markAllSubMeshesAsTexturesDirty.bind(p)),p.brdf=new f(p._markAllSubMeshesAsMiscDirty.bind(p)),p.sheen=new h(p._markAllSubMeshesAsTexturesDirty.bind(p)),p.detailMap=new fe.a(p._markAllSubMeshesAsTexturesDirty.bind(p)),p._rebuildInParallel=!1,p._attachImageProcessingConfiguration(null),p.getRenderTargetTextures=function(){return p._renderTargets.reset(),t.a.ReflectionTextureEnabled&&p._reflectionTexture&&p._reflectionTexture.isRenderTarget&&p._renderTargets.push(p._reflectionTexture),p.subSurface.fillRenderTargetTextures(p._renderTargets),p._renderTargets},p._environmentBRDFTexture=m.a.GetEnvironmentBRDFTexture(o),p.subSurface=new S(p._markAllSubMeshesAsTexturesDirty.bind(p),p._markScenePrePassDirty.bind(p),o),p.prePassConfiguration=new O.a,p}return Object.defineProperty(s.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(n){this._realTimeFiltering=n,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(n){this._realTimeFilteringQuality=n,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),s.prototype._attachImageProcessingConfiguration=function(n){var o=this;n!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),n?this._imageProcessingConfiguration=n:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){o._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(s.prototype,"hasRenderTargetTextures",{get:function(){return t.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),s.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(s.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(n){this._useLogarithmicDepth=n&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===s.PBRMATERIAL_OPAQUE||this._transparencyMode===s.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),s.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},s.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===s.PBRMATERIAL_ALPHATEST)},s.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==s.PBRMATERIAL_OPAQUE},s.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},s.prototype.getAlphaTestTexture=function(){return this._albedoTexture},s.prototype.isReadyForSubMesh=function(n,o,p){if(o.effect&&this.isFrozen&&o.effect._wasPreviouslyReady)return!0;o._materialDefines||(o._materialDefines=new ue);var H=o._materialDefines;if(this._isReadyForSubMesh(o))return!0;var W=this.getScene(),B=W.getEngine();if(H._areTexturesDirty&&W.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&t.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&t.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Z=this._getReflectionTexture();if(Z&&t.a.ReflectionTextureEnabled&&(!Z.isReadyOrNotBlocking()||Z.irradianceTexture&&!Z.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&t.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&t.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(t.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(B.getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(H,W)||!this.clearCoat.isReadyForSubMesh(H,W,B,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(H,W)||!this.anisotropy.isReadyForSubMesh(H,W)||!this.detailMap.isReadyForSubMesh(H,W)||H._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!B.getCaps().standardDerivatives&&!n.isVerticesDataPresent(i.b.NormalKind)&&(n.createNormals(!0),C.a.Warn("PBRMaterial: Normals have been created for the mesh: "+n.name));var w=o.effect,b=H._areLightsDisposed,z=this._prepareEffect(n,H,this.onCompiled,this.onError,p,null,o.getRenderingMesh().hasThinInstances);if(z)if(this._onEffectCreatedObservable&&(se.effect=z,se.subMesh=o,this._onEffectCreatedObservable.notifyObservers(se)),this.allowShaderHotSwapping&&w&&!z.isReady()){if(z=w,this._rebuildInParallel=!0,H.markAsUnprocessed(),b)return H._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,W.resetCachedMaterial(),o.setEffect(z,H),this.buildUniformLayout();return!o.effect||!o.effect.isReady()?!1:(H._renderId=W.getRenderId(),o.effect._wasPreviouslyReady=!0,!0)},s.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},s.prototype._prepareEffect=function(n,o,p,H,W,B,Z){if(p===void 0&&(p=null),H===void 0&&(H=null),W===void 0&&(W=null),B===void 0&&(B=null),this._prepareDefines(n,o,W,B,Z),!o.isDirty)return null;o.markAsProcessed();var w=this.getScene(),b=w.getEngine(),z=new mn.a,Y=0;o.USESPHERICALINVERTEX&&z.addFallback(Y++,"USESPHERICALINVERTEX"),o.FOG&&z.addFallback(Y,"FOG"),o.SPECULARAA&&z.addFallback(Y,"SPECULARAA"),o.POINTSIZE&&z.addFallback(Y,"POINTSIZE"),o.LOGARITHMICDEPTH&&z.addFallback(Y,"LOGARITHMICDEPTH"),o.PARALLAX&&z.addFallback(Y,"PARALLAX"),o.PARALLAXOCCLUSION&&z.addFallback(Y++,"PARALLAXOCCLUSION"),Y=a.AddFallbacks(o,z,Y),Y=a.AddFallbacks(o,z,Y),Y=S.AddFallbacks(o,z,Y),Y=h.AddFallbacks(o,z,Y),o.ENVIRONMENTBRDF&&z.addFallback(Y++,"ENVIRONMENTBRDF"),o.TANGENT&&z.addFallback(Y++,"TANGENT"),o.BUMP&&z.addFallback(Y++,"BUMP"),Y=c.a.HandleFallbacksForShadows(o,z,this._maxSimultaneousLights,Y++),o.SPECULARTERM&&z.addFallback(Y++,"SPECULARTERM"),o.USESPHERICALFROMREFLECTIONMAP&&z.addFallback(Y++,"USESPHERICALFROMREFLECTIONMAP"),o.USEIRRADIANCEMAP&&z.addFallback(Y++,"USEIRRADIANCEMAP"),o.LIGHTMAP&&z.addFallback(Y++,"LIGHTMAP"),o.NORMAL&&z.addFallback(Y++,"NORMAL"),o.AMBIENT&&z.addFallback(Y++,"AMBIENT"),o.EMISSIVE&&z.addFallback(Y++,"EMISSIVE"),o.VERTEXCOLOR&&z.addFallback(Y++,"VERTEXCOLOR"),o.MORPHTARGETS&&z.addFallback(Y++,"MORPHTARGETS"),o.MULTIVIEW&&z.addFallback(0,"MULTIVIEW");var q=[i.b.PositionKind];o.NORMAL&&q.push(i.b.NormalKind),o.TANGENT&&q.push(i.b.TangentKind),o.UV1&&q.push(i.b.UVKind),o.UV2&&q.push(i.b.UV2Kind),o.VERTEXCOLOR&&q.push(i.b.ColorKind),c.a.PrepareAttributesForBones(q,n,o,z),c.a.PrepareAttributesForInstances(q,o),c.a.PrepareAttributesForMorphTargets(q,n,o);var X="pbr",$=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],ie=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],le=["Material","Scene","Mesh"];fe.a.AddUniforms($),fe.a.AddSamplers(ie),S.AddUniforms($),S.AddSamplers(ie),e.a.AddUniforms($),e.a.AddSamplers(ie),a.AddUniforms($),a.AddSamplers(ie),h.AddUniforms($),h.AddSamplers(ie),O.a.AddUniforms($),O.a.AddSamplers($),I.a&&(I.a.PrepareUniforms($,o),I.a.PrepareSamplers(ie,o)),c.a.PrepareUniformsAndSamplersList({uniformsNames:$,uniformBuffersNames:le,samplers:ie,defines:o,maxSimultaneousLights:this._maxSimultaneousLights});var ce={};this.customShaderNameResolve&&(X=this.customShaderNameResolve(X,$,le,ie,o,q,ce));var de=o.toString();return b.createEffect(X,{attributes:q,uniformsNames:$,uniformBuffersNames:le,samplers:ie,defines:de,fallbacks:z,onCompiled:p,onError:H,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:o.NUM_MORPH_INFLUENCERS},processFinalCode:ce.processFinalCode,multiTarget:o.PREPASS},b)},s.prototype._prepareDefines=function(n,o,p,H,W){p===void 0&&(p=null),H===void 0&&(H=null),W===void 0&&(W=!1);var B=this.getScene(),Z=B.getEngine();if(c.a.PrepareDefinesForLights(B,n,o,!0,this._maxSimultaneousLights,this._disableLighting),o._needNormals=!0,c.a.PrepareDefinesForMultiview(B,o),c.a.PrepareDefinesForPrePass(B,o,this.canRenderToMRT),o.METALLICWORKFLOW=this.isMetallicWorkflow(),o._areTexturesDirty){if(o._needUVs=!1,B.texturesEnabled){B.getEngine().getCaps().textureLOD&&(o.LODBASEDMICROSFURACE=!0),this._albedoTexture&&t.a.DiffuseTextureEnabled?(c.a.PrepareDefinesForMergedUV(this._albedoTexture,o,"ALBEDO"),o.GAMMAALBEDO=this._albedoTexture.gammaSpace):o.ALBEDO=!1,this._ambientTexture&&t.a.AmbientTextureEnabled?(c.a.PrepareDefinesForMergedUV(this._ambientTexture,o,"AMBIENT"),o.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):o.AMBIENT=!1,this._opacityTexture&&t.a.OpacityTextureEnabled?(c.a.PrepareDefinesForMergedUV(this._opacityTexture,o,"OPACITY"),o.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):o.OPACITY=!1;var w=this._getReflectionTexture();if(w&&t.a.ReflectionTextureEnabled){switch(o.REFLECTION=!0,o.GAMMAREFLECTION=w.gammaSpace,o.RGBDREFLECTION=w.isRGBD,o.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!w.invertZ:w.invertZ,o.LODINREFLECTIONALPHA=w.lodLevelInAlpha,o.LINEARSPECULARREFLECTION=w.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(o.NUM_SAMPLES=""+this.realTimeFilteringQuality,Z._features.needTypeSuffixInShaderConstants&&(o.NUM_SAMPLES=o.NUM_SAMPLES+"u"),o.REALTIME_FILTERING=!0):o.REALTIME_FILTERING=!1,w.coordinatesMode===F.a.INVCUBIC_MODE&&(o.INVERTCUBICMAP=!0),o.REFLECTIONMAP_3D=w.isCube,o.REFLECTIONMAP_CUBIC=!1,o.REFLECTIONMAP_EXPLICIT=!1,o.REFLECTIONMAP_PLANAR=!1,o.REFLECTIONMAP_PROJECTION=!1,o.REFLECTIONMAP_SKYBOX=!1,o.REFLECTIONMAP_SPHERICAL=!1,o.REFLECTIONMAP_EQUIRECTANGULAR=!1,o.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,o.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,w.coordinatesMode){case F.a.EXPLICIT_MODE:o.REFLECTIONMAP_EXPLICIT=!0;break;case F.a.PLANAR_MODE:o.REFLECTIONMAP_PLANAR=!0;break;case F.a.PROJECTION_MODE:o.REFLECTIONMAP_PROJECTION=!0;break;case F.a.SKYBOX_MODE:o.REFLECTIONMAP_SKYBOX=!0;break;case F.a.SPHERICAL_MODE:o.REFLECTIONMAP_SPHERICAL=!0;break;case F.a.EQUIRECTANGULAR_MODE:o.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case F.a.FIXED_EQUIRECTANGULAR_MODE:o.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case F.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:o.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case F.a.CUBIC_MODE:case F.a.INVCUBIC_MODE:default:o.REFLECTIONMAP_CUBIC=!0,o.USE_LOCAL_REFLECTIONMAP_CUBIC=!!w.boundingBoxSize;break}w.coordinatesMode!==F.a.SKYBOX_MODE&&(w.irradianceTexture?(o.USEIRRADIANCEMAP=!0,o.USESPHERICALFROMREFLECTIONMAP=!1):w.isCube&&(o.USESPHERICALFROMREFLECTIONMAP=!0,o.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||B.getEngine().getCaps().maxVaryingVectors<=8?o.USESPHERICALINVERTEX=!1:o.USESPHERICALINVERTEX=!0))}else o.REFLECTION=!1,o.REFLECTIONMAP_3D=!1,o.REFLECTIONMAP_SPHERICAL=!1,o.REFLECTIONMAP_PLANAR=!1,o.REFLECTIONMAP_CUBIC=!1,o.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,o.REFLECTIONMAP_PROJECTION=!1,o.REFLECTIONMAP_SKYBOX=!1,o.REFLECTIONMAP_EXPLICIT=!1,o.REFLECTIONMAP_EQUIRECTANGULAR=!1,o.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,o.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,o.INVERTCUBICMAP=!1,o.USESPHERICALFROMREFLECTIONMAP=!1,o.USEIRRADIANCEMAP=!1,o.USESPHERICALINVERTEX=!1,o.REFLECTIONMAP_OPPOSITEZ=!1,o.LODINREFLECTIONALPHA=!1,o.GAMMAREFLECTION=!1,o.RGBDREFLECTION=!1,o.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&t.a.LightmapTextureEnabled?(c.a.PrepareDefinesForMergedUV(this._lightmapTexture,o,"LIGHTMAP"),o.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,o.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,o.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):o.LIGHTMAP=!1,this._emissiveTexture&&t.a.EmissiveTextureEnabled?c.a.PrepareDefinesForMergedUV(this._emissiveTexture,o,"EMISSIVE"):o.EMISSIVE=!1,t.a.SpecularTextureEnabled?(this._metallicTexture?(c.a.PrepareDefinesForMergedUV(this._metallicTexture,o,"REFLECTIVITY"),o.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,o.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,o.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,o.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(c.a.PrepareDefinesForMergedUV(this._reflectivityTexture,o,"REFLECTIVITY"),o.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,o.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):o.REFLECTIVITY=!1,this._metallicReflectanceTexture?c.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,o,"METALLIC_REFLECTANCE"):o.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?c.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,o,"MICROSURFACEMAP"):o.MICROSURFACEMAP=!1):(o.REFLECTIVITY=!1,o.MICROSURFACEMAP=!1),B.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap?(c.a.PrepareDefinesForMergedUV(this._bumpTexture,o,"BUMP"),this._useParallax&&this._albedoTexture&&t.a.DiffuseTextureEnabled?(o.PARALLAX=!0,o.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):o.PARALLAX=!1,o.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):o.BUMP=!1,this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled?(o.ENVIRONMENTBRDF=!0,o.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(o.ENVIRONMENTBRDF=!1,o.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?o.ALPHAFROMALBEDO=!0:o.ALPHAFROMALBEDO=!1}o.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===s.LIGHTFALLOFF_STANDARD?(o.USEPHYSICALLIGHTFALLOFF=!1,o.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===s.LIGHTFALLOFF_GLTF?(o.USEPHYSICALLIGHTFALLOFF=!1,o.USEGLTFLIGHTFALLOFF=!0):(o.USEPHYSICALLIGHTFALLOFF=!0,o.USEGLTFLIGHTFALLOFF=!1),o.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?o.TWOSIDEDLIGHTING=!0:o.TWOSIDEDLIGHTING=!1,o.SPECULARAA=B.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(o._areTexturesDirty||o._areMiscDirty)&&(o.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),o.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,o.ALPHABLEND=this.needAlphaBlendingForMesh(n),o.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,o.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),o._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(o),o.FORCENORMALFORWARD=this._forceNormalForward,o.RADIANCEOCCLUSION=this._useRadianceOcclusion,o.HORIZONOCCLUSION=this._useHorizonOcclusion,o._areMiscDirty&&(c.a.PrepareDefinesForMisc(n,B,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(n)||this._forceAlphaTest,o),o.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!n.isVerticesDataPresent(i.b.NormalKind),o.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(o,B),this.subSurface.prepareDefines(o,B),this.clearCoat.prepareDefines(o,B),this.anisotropy.prepareDefines(o,n,B),this.brdf.prepareDefines(o),this.sheen.prepareDefines(o,B),c.a.PrepareDefinesForFrameBoundValues(B,Z,o,!!p,H,W),c.a.PrepareDefinesForAttributes(n,o,!0,!0,!0,this._transparencyMode!==s.PBRMATERIAL_OPAQUE)},s.prototype.forceCompilation=function(n,o,p){var H=this,W=Object(l.a)({clipPlane:!1,useInstances:!1},p),B=new ue,Z=this._prepareEffect(n,B,void 0,void 0,W.useInstances,W.clipPlane,n.hasThinInstances);this._onEffectCreatedObservable&&(se.effect=Z,se.subMesh=null,this._onEffectCreatedObservable.notifyObservers(se)),Z.isReady()?o&&o(this):Z.onCompileObservable.add(function(){o&&o(H)})},s.prototype.buildUniformLayout=function(){var n=this._uniformBuffer;n.addUniform("vAlbedoInfos",2),n.addUniform("vAmbientInfos",4),n.addUniform("vOpacityInfos",2),n.addUniform("vEmissiveInfos",2),n.addUniform("vLightmapInfos",2),n.addUniform("vReflectivityInfos",3),n.addUniform("vMicroSurfaceSamplerInfos",2),n.addUniform("vReflectionInfos",2),n.addUniform("vReflectionFilteringInfo",2),n.addUniform("vReflectionPosition",3),n.addUniform("vReflectionSize",3),n.addUniform("vBumpInfos",3),n.addUniform("albedoMatrix",16),n.addUniform("ambientMatrix",16),n.addUniform("opacityMatrix",16),n.addUniform("emissiveMatrix",16),n.addUniform("lightmapMatrix",16),n.addUniform("reflectivityMatrix",16),n.addUniform("microSurfaceSamplerMatrix",16),n.addUniform("bumpMatrix",16),n.addUniform("vTangentSpaceParams",2),n.addUniform("reflectionMatrix",16),n.addUniform("vReflectionColor",3),n.addUniform("vAlbedoColor",4),n.addUniform("vLightingIntensity",4),n.addUniform("vReflectionMicrosurfaceInfos",3),n.addUniform("pointSize",1),n.addUniform("vReflectivityColor",4),n.addUniform("vEmissiveColor",3),n.addUniform("vAmbientColor",3),n.addUniform("vDebugMode",2),n.addUniform("vMetallicReflectanceFactors",4),n.addUniform("vMetallicReflectanceInfos",2),n.addUniform("metallicReflectanceMatrix",16),e.a.PrepareUniformBuffer(n),a.PrepareUniformBuffer(n),h.PrepareUniformBuffer(n),S.PrepareUniformBuffer(n),fe.a.PrepareUniformBuffer(n),n.addUniform("vSphericalL00",3),n.addUniform("vSphericalL1_1",3),n.addUniform("vSphericalL10",3),n.addUniform("vSphericalL11",3),n.addUniform("vSphericalL2_2",3),n.addUniform("vSphericalL2_1",3),n.addUniform("vSphericalL20",3),n.addUniform("vSphericalL21",3),n.addUniform("vSphericalL22",3),n.addUniform("vSphericalX",3),n.addUniform("vSphericalY",3),n.addUniform("vSphericalZ",3),n.addUniform("vSphericalXX_ZZ",3),n.addUniform("vSphericalYY_ZZ",3),n.addUniform("vSphericalZZ",3),n.addUniform("vSphericalXY",3),n.addUniform("vSphericalYZ",3),n.addUniform("vSphericalZX",3),n.create()},s.prototype.unbind=function(){if(this._activeEffect){var n=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),n=!0),this.subSurface.unbind(this._activeEffect)&&(n=!0),n&&this._markAllSubMeshesAsTexturesDirty()}g.prototype.unbind.call(this)},s.prototype.bindForSubMesh=function(n,o,p){var H=this.getScene(),W=p._materialDefines;if(!!W){var B=p.effect;if(!!B){this._activeEffect=B,o.getMeshUniformBuffer().bindToEffect(B,"Mesh"),o.transferToEffect(n),this.prePassConfiguration.bindForSubMesh(this._activeEffect,H,o,n,this.isFrozen),W.OBJECTSPACE_NORMALMAP&&(n.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Z=this._mustRebind(H,B,o.visibility);c.a.BindBonesParameters(o,this._activeEffect,this.prePassConfiguration);var w=null,b=this._uniformBuffer;if(Z){var z=H.getEngine();if(b.bindToEffect(B,"Material"),this.bindViewProjection(B),w=this._getReflectionTexture(),!b.useUbo||!this.isFrozen||!b.isSync){if(H.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&(b.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),c.a.BindTextureMatrix(this._albedoTexture,b,"albedo")),this._ambientTexture&&t.a.AmbientTextureEnabled&&(b.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),c.a.BindTextureMatrix(this._ambientTexture,b,"ambient")),this._opacityTexture&&t.a.OpacityTextureEnabled&&(b.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),c.a.BindTextureMatrix(this._opacityTexture,b,"opacity")),w&&t.a.ReflectionTextureEnabled){if(b.updateMatrix("reflectionMatrix",w.getReflectionTextureMatrix()),b.updateFloat2("vReflectionInfos",w.level,0),w.boundingBoxSize){var Y=w;b.updateVector3("vReflectionPosition",Y.boundingBoxPosition),b.updateVector3("vReflectionSize",Y.boundingBoxSize)}if(this.realTimeFiltering){var q=w.getSize().width;b.updateFloat2("vReflectionFilteringInfo",q,A.a.Log2(q))}if(!W.USEIRRADIANCEMAP){var X=w.sphericalPolynomial;if(W.USESPHERICALFROMREFLECTIONMAP&&X)if(W.SPHERICAL_HARMONICS){var $=X.preScaledHarmonics;b.updateVector3("vSphericalL00",$.l00),b.updateVector3("vSphericalL1_1",$.l1_1),b.updateVector3("vSphericalL10",$.l10),b.updateVector3("vSphericalL11",$.l11),b.updateVector3("vSphericalL2_2",$.l2_2),b.updateVector3("vSphericalL2_1",$.l2_1),b.updateVector3("vSphericalL20",$.l20),b.updateVector3("vSphericalL21",$.l21),b.updateVector3("vSphericalL22",$.l22)}else b.updateFloat3("vSphericalX",X.x.x,X.x.y,X.x.z),b.updateFloat3("vSphericalY",X.y.x,X.y.y,X.y.z),b.updateFloat3("vSphericalZ",X.z.x,X.z.y,X.z.z),b.updateFloat3("vSphericalXX_ZZ",X.xx.x-X.zz.x,X.xx.y-X.zz.y,X.xx.z-X.zz.z),b.updateFloat3("vSphericalYY_ZZ",X.yy.x-X.zz.x,X.yy.y-X.zz.y,X.yy.z-X.zz.z),b.updateFloat3("vSphericalZZ",X.zz.x,X.zz.y,X.zz.z),b.updateFloat3("vSphericalXY",X.xy.x,X.xy.y,X.xy.z),b.updateFloat3("vSphericalYZ",X.yz.x,X.yz.y,X.yz.z),b.updateFloat3("vSphericalZX",X.zx.x,X.zx.y,X.zx.z)}b.updateFloat3("vReflectionMicrosurfaceInfos",w.getSize().width,w.lodGenerationScale,w.lodGenerationOffset)}this._emissiveTexture&&t.a.EmissiveTextureEnabled&&(b.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),c.a.BindTextureMatrix(this._emissiveTexture,b,"emissive")),this._lightmapTexture&&t.a.LightmapTextureEnabled&&(b.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),c.a.BindTextureMatrix(this._lightmapTexture,b,"lightmap")),t.a.SpecularTextureEnabled&&(this._metallicTexture?(b.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),c.a.BindTextureMatrix(this._metallicTexture,b,"reflectivity")):this._reflectivityTexture&&(b.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),c.a.BindTextureMatrix(this._reflectivityTexture,b,"reflectivity")),this._metallicReflectanceTexture&&(b.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),c.a.BindTextureMatrix(this._metallicReflectanceTexture,b,"metallicReflectance")),this._microSurfaceTexture&&(b.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),c.a.BindTextureMatrix(this._microSurfaceTexture,b,"microSurfaceSampler"))),this._bumpTexture&&z.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&(b.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),c.a.BindTextureMatrix(this._bumpTexture,b,"bump"),H._mirroredCameraPosition?b.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):b.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&b.updateFloat("pointSize",this.pointSize),W.METALLICWORKFLOW){d.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,d.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,b.updateColor4("vReflectivityColor",d.c.Color3[0],1);var ie=this.subSurface.indexOfRefraction,le=1,ce=Math.pow((ie-le)/(ie+le),2);this._metallicReflectanceColor.scaleToRef(ce*this._metallicF0Factor,d.c.Color3[0]);var de=this._metallicF0Factor;b.updateColor4("vMetallicReflectanceFactors",d.c.Color3[0],de)}else b.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);b.updateColor3("vEmissiveColor",t.a.EmissiveTextureEnabled?this._emissiveColor:d.a.BlackReadOnly),b.updateColor3("vReflectionColor",this._reflectionColor),!W.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?b.updateColor4("vAlbedoColor",this._albedoColor,1):b.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*H.environmentIntensity,this._lightingInfos.w=this._specularIntensity,b.updateVector4("vLightingIntensity",this._lightingInfos),H.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),b.updateColor3("vAmbientColor",this._globalAmbientColor),b.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}H.texturesEnabled&&(this._albedoTexture&&t.a.DiffuseTextureEnabled&&b.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&t.a.AmbientTextureEnabled&&b.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.a.OpacityTextureEnabled&&b.setTexture("opacitySampler",this._opacityTexture),w&&t.a.ReflectionTextureEnabled&&(W.LODBASEDMICROSFURACE?b.setTexture("reflectionSampler",w):(b.setTexture("reflectionSampler",w._lodTextureMid||w),b.setTexture("reflectionSamplerLow",w._lodTextureLow||w),b.setTexture("reflectionSamplerHigh",w._lodTextureHigh||w)),W.USEIRRADIANCEMAP&&b.setTexture("irradianceSampler",w.irradianceTexture)),W.ENVIRONMENTBRDF&&b.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&t.a.EmissiveTextureEnabled&&b.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.a.LightmapTextureEnabled&&b.setTexture("lightmapSampler",this._lightmapTexture),t.a.SpecularTextureEnabled&&(this._metallicTexture?b.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&b.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&b.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&b.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&z.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&b.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(b,H,this.isFrozen),this.subSurface.bindForSubMesh(b,H,z,this.isFrozen,W.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(b,H,z,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,p),this.anisotropy.bindForSubMesh(b,H,this.isFrozen),this.sheen.bindForSubMesh(b,H,this.isFrozen,p),c.a.BindClipPlane(this._activeEffect,H),this.bindEyePosition(B)}(Z||!this.isFrozen)&&(H.lightsEnabled&&!this._disableLighting&&c.a.BindLights(H,o,this._activeEffect,W,this._maxSimultaneousLights,this._rebuildInParallel),(H.fogEnabled&&o.applyFog&&H.fogMode!==D.a.FOGMODE_NONE||w)&&this.bindView(B),c.a.BindFogParameters(H,o,this._activeEffect,!0),W.NUM_MORPH_INFLUENCERS&&c.a.BindMorphTargetParameters(o,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),c.a.BindLogDepth(W,this._activeEffect,H)),this._afterBind(o,this._activeEffect),b.update()}}},s.prototype.getAnimatables=function(){var n=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&n.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&n.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&n.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&n.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&n.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?n.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&n.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&n.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&n.push(this._lightmapTexture),this.detailMap.getAnimatables(n),this.subSurface.getAnimatables(n),this.clearCoat.getAnimatables(n),this.sheen.getAnimatables(n),this.anisotropy.getAnimatables(n),n},s.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},s.prototype.getActiveTextures=function(){var n=g.prototype.getActiveTextures.call(this);return this._albedoTexture&&n.push(this._albedoTexture),this._ambientTexture&&n.push(this._ambientTexture),this._opacityTexture&&n.push(this._opacityTexture),this._reflectionTexture&&n.push(this._reflectionTexture),this._emissiveTexture&&n.push(this._emissiveTexture),this._reflectivityTexture&&n.push(this._reflectivityTexture),this._metallicTexture&&n.push(this._metallicTexture),this._metallicReflectanceTexture&&n.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&n.push(this._microSurfaceTexture),this._bumpTexture&&n.push(this._bumpTexture),this._lightmapTexture&&n.push(this._lightmapTexture),this.detailMap.getActiveTextures(n),this.subSurface.getActiveTextures(n),this.clearCoat.getActiveTextures(n),this.sheen.getActiveTextures(n),this.anisotropy.getActiveTextures(n),n},s.prototype.hasTexture=function(n){return g.prototype.hasTexture.call(this,n)||this._albedoTexture===n||this._ambientTexture===n||this._opacityTexture===n||this._reflectionTexture===n||this._reflectivityTexture===n||this._metallicTexture===n||this._metallicReflectanceTexture===n||this._microSurfaceTexture===n||this._bumpTexture===n||this._lightmapTexture===n?!0:this.detailMap.hasTexture(n)||this.subSurface.hasTexture(n)||this.clearCoat.hasTexture(n)||this.sheen.hasTexture(n)||this.anisotropy.hasTexture(n)},s.prototype.setPrePassRenderer=function(n){if(this.subSurface.isScatteringEnabled){var o=this.getScene().enableSubSurfaceForPrePass();return o&&(o.enabled=!0),!0}return!1},s.prototype.dispose=function(n,o){var p,H,W,B,Z,w,b,z,Y,q,X;o&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(p=this._albedoTexture)===null||p===void 0||p.dispose(),(H=this._ambientTexture)===null||H===void 0||H.dispose(),(W=this._opacityTexture)===null||W===void 0||W.dispose(),(B=this._reflectionTexture)===null||B===void 0||B.dispose(),(Z=this._emissiveTexture)===null||Z===void 0||Z.dispose(),(w=this._metallicTexture)===null||w===void 0||w.dispose(),(b=this._reflectivityTexture)===null||b===void 0||b.dispose(),(z=this._bumpTexture)===null||z===void 0||z.dispose(),(Y=this._lightmapTexture)===null||Y===void 0||Y.dispose(),(q=this._metallicReflectanceTexture)===null||q===void 0||q.dispose(),(X=this._microSurfaceTexture)===null||X===void 0||X.dispose()),this.detailMap.dispose(o),this.subSurface.dispose(o),this.clearCoat.dispose(o),this.sheen.dispose(o),this.anisotropy.dispose(o),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),g.prototype.dispose.call(this,n,o)},s.PBRMATERIAL_OPAQUE=x.a.MATERIAL_OPAQUE,s.PBRMATERIAL_ALPHATEST=x.a.MATERIAL_ALPHATEST,s.PBRMATERIAL_ALPHABLEND=x.a.MATERIAL_ALPHABLEND,s.PBRMATERIAL_ALPHATESTANDBLEND=x.a.MATERIAL_ALPHATESTANDBLEND,s.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,s.LIGHTFALLOFF_PHYSICAL=0,s.LIGHTFALLOFF_GLTF=1,s.LIGHTFALLOFF_STANDARD=2,Object(l.c)([Object(r.i)()],s.prototype,"_imageProcessingConfiguration",void 0),Object(l.c)([Object(r.b)("_markAllSubMeshesAsMiscDirty")],s.prototype,"debugMode",void 0),Object(l.c)([Object(r.c)()],s.prototype,"useLogarithmicDepth",null),s}(y.a)},533:function(Q,G,u){"use strict";u.d(G,"a",function(){return E});var l=u(434),r=u(439),C=u(514),T=u(441),m=u(529),D=u(437),E=function(i){Object(l.d)(e,i);function e(t,c){var a=i.call(this,t,c)||this;return a.directIntensity=1,a.emissiveIntensity=1,a.environmentIntensity=1,a.specularIntensity=1,a.disableBumpMap=!1,a.ambientTextureStrength=1,a.ambientTextureImpactOnAnalyticalLights=e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,a.metallicF0Factor=1,a.metallicReflectanceColor=T.a.White(),a.ambientColor=new T.a(0,0,0),a.albedoColor=new T.a(1,1,1),a.reflectivityColor=new T.a(1,1,1),a.reflectionColor=new T.a(1,1,1),a.emissiveColor=new T.a(0,0,0),a.microSurface=1,a.useLightmapAsShadowmap=!1,a.useAlphaFromAlbedoTexture=!1,a.forceAlphaTest=!1,a.alphaCutOff=.4,a.useSpecularOverAlpha=!0,a.useMicroSurfaceFromReflectivityMapAlpha=!1,a.useRoughnessFromMetallicTextureAlpha=!0,a.useRoughnessFromMetallicTextureGreen=!1,a.useMetallnessFromMetallicTextureBlue=!1,a.useAmbientOcclusionFromMetallicTextureRed=!1,a.useAmbientInGrayScale=!1,a.useAutoMicroSurfaceFromReflectivityMap=!1,a.useRadianceOverAlpha=!0,a.useObjectSpaceNormalMap=!1,a.useParallax=!1,a.useParallaxOcclusion=!1,a.parallaxScaleBias=.05,a.disableLighting=!1,a.forceIrradianceInFragment=!1,a.maxSimultaneousLights=4,a.invertNormalMapX=!1,a.invertNormalMapY=!1,a.twoSidedLighting=!1,a.useAlphaFresnel=!1,a.useLinearAlphaFresnel=!1,a.environmentBRDFTexture=null,a.forceNormalForward=!1,a.enableSpecularAntiAliasing=!1,a.useHorizonOcclusion=!0,a.useRadianceOcclusion=!0,a.unlit=!1,a._environmentBRDFTexture=C.a.GetEnvironmentBRDFTexture(c),a}return Object.defineProperty(e.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(t){this.subSurface.refractionTexture=t,t?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(t){this.subSurface.indexOfRefraction=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(t){this.subSurface.invertRefractionY=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(t){this.subSurface.linkRefractionWithTransparency=t,t&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===m.a.LIGHTFALLOFF_PHYSICAL},set:function(t){t!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=m.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=m.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===m.a.LIGHTFALLOFF_GLTF},set:function(t){t!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=m.a.LIGHTFALLOFF_GLTF:this._lightFalloff=m.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(t){this._attachImageProcessingConfiguration(t),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(t){this.imageProcessingConfiguration.colorCurvesEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(t){this.imageProcessingConfiguration.colorGradingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(t){this._imageProcessingConfiguration.toneMappingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(t){this._imageProcessingConfiguration.exposure=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(t){this._imageProcessingConfiguration.contrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(t){this._imageProcessingConfiguration.colorGradingTexture=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(t){this._imageProcessingConfiguration.colorCurves=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"PBRMaterial"},e.prototype.clone=function(t){var c=this,a=r.a.Clone(function(){return new e(t,c.getScene())},this);return a.id=t,a.name=t,this.clearCoat.copyTo(a.clearCoat),this.anisotropy.copyTo(a.anisotropy),this.brdf.copyTo(a.brdf),this.sheen.copyTo(a.sheen),this.subSurface.copyTo(a.subSurface),a},e.prototype.serialize=function(){var t=r.a.Serialize(this);return t.customType="BABYLON.PBRMaterial",t.clearCoat=this.clearCoat.serialize(),t.anisotropy=this.anisotropy.serialize(),t.brdf=this.brdf.serialize(),t.sheen=this.sheen.serialize(),t.subSurface=this.subSurface.serialize(),t},e.Parse=function(t,c,a){var f=r.a.Parse(function(){return new e(t.name,c)},t,c,a);return t.clearCoat&&f.clearCoat.parse(t.clearCoat,c,a),t.anisotropy&&f.anisotropy.parse(t.anisotropy,c,a),t.brdf&&f.brdf.parse(t.brdf,c,a),t.sheen&&f.sheen.parse(t.sheen,c,a),t.subSurface&&f.subSurface.parse(t.subSurface,c,a),f},e.PBRMATERIAL_OPAQUE=m.a.PBRMATERIAL_OPAQUE,e.PBRMATERIAL_ALPHATEST=m.a.PBRMATERIAL_ALPHATEST,e.PBRMATERIAL_ALPHABLEND=m.a.PBRMATERIAL_ALPHABLEND,e.PBRMATERIAL_ALPHATESTANDBLEND=m.a.PBRMATERIAL_ALPHATESTANDBLEND,e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=m.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"directIntensity",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveIntensity",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentIntensity",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"specularIntensity",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"disableBumpMap",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureStrength",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"opacityTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallic",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"roughness",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicF0Factor",void 0),Object(l.c)([Object(r.e)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceColor",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurfaceTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"bumpTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty",null)],e.prototype,"lightmapTexture",void 0),Object(l.c)([Object(r.e)("ambient"),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientColor",void 0),Object(l.c)([Object(r.e)("albedo"),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoColor",void 0),Object(l.c)([Object(r.e)("reflectivity"),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityColor",void 0),Object(l.c)([Object(r.e)("reflection"),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionColor",void 0),Object(l.c)([Object(r.e)("emissive"),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveColor",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurface",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLightmapAsShadowmap",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"useAlphaFromAlbedoTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"forceAlphaTest",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"alphaCutOff",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useSpecularOverAlpha",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientInGrayScale",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(l.c)([Object(r.c)()],e.prototype,"usePhysicalLightFalloff",null),Object(l.c)([Object(r.c)()],e.prototype,"useGLTFLightFalloff",null),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOverAlpha",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useObjectSpaceNormalMap",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallax",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallaxOcclusion",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"parallaxScaleBias",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"disableLighting",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceIrradianceInFragment",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"maxSimultaneousLights",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapX",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapY",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"twoSidedLighting",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAlphaFresnel",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLinearAlphaFresnel",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentBRDFTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceNormalForward",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"enableSpecularAntiAliasing",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useHorizonOcclusion",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOcclusion",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsMiscDirty")],e.prototype,"unlit",void 0),e}(m.a);D.a.RegisteredTypes["BABYLON.PBRMaterial"]=E},534:function(Q,G,u){"use strict";var l=u(435),r="postprocessVertexShader",C=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[r]=C;var T={name:r,shader:C}},537:function(Q,G,u){"use strict";u.d(G,"a",function(){return D});var l=u(434),r=u(439),C=u(436),T=u(484),m=u(465),D=function(E){Object(l.d)(i,E);function i(){var e=E!==null&&E.apply(this,arguments)||this;return e._needProjectionMatrixCompute=!0,e}return i.prototype._setPosition=function(e){this._position=e},Object.defineProperty(i.prototype,"position",{get:function(){return this._position},set:function(e){this._setPosition(e)},enumerable:!1,configurable:!0}),i.prototype._setDirection=function(e){this._direction=e},Object.defineProperty(i.prototype,"direction",{get:function(){return this._direction},set:function(e){this._setDirection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shadowMinZ",{get:function(){return this._shadowMinZ},set:function(e){this._shadowMinZ=e,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shadowMaxZ",{get:function(){return this._shadowMaxZ},set:function(e){this._shadowMaxZ=e,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),i.prototype.computeTransformedInformation=function(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||(this.transformedPosition=C.e.Zero()),C.e.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=C.e.Zero()),C.e.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1},i.prototype.getDepthScale=function(){return 50},i.prototype.getShadowDirection=function(e){return this.transformedDirection?this.transformedDirection:this.direction},i.prototype.getAbsolutePosition=function(){return this.transformedPosition?this.transformedPosition:this.position},i.prototype.setDirectionToTarget=function(e){return this.direction=C.e.Normalize(e.subtract(this.position)),this.direction},i.prototype.getRotation=function(){this.direction.normalize();var e=C.e.Cross(this.direction,m.a.Y),t=C.e.Cross(e,this.direction);return C.e.RotationFromAxis(e,t,this.direction)},i.prototype.needCube=function(){return!1},i.prototype.needProjectionMatrixCompute=function(){return this._needProjectionMatrixCompute},i.prototype.forceProjectionMatrixCompute=function(){this._needProjectionMatrixCompute=!0},i.prototype._initCache=function(){E.prototype._initCache.call(this),this._cache.position=C.e.Zero()},i.prototype._isSynchronized=function(){return!!this._cache.position.equals(this.position)},i.prototype.computeWorldMatrix=function(e){return!e&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=C.a.Identity()),C.a.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)},i.prototype.getDepthMinZ=function(e){return this.shadowMinZ!==void 0?this.shadowMinZ:e.minZ},i.prototype.getDepthMaxZ=function(e){return this.shadowMaxZ!==void 0?this.shadowMaxZ:e.maxZ},i.prototype.setShadowProjectionMatrix=function(e,t,c){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(t,c,e):this._setDefaultShadowProjectionMatrix(e,t,c),this},Object(l.c)([Object(r.o)()],i.prototype,"position",null),Object(l.c)([Object(r.o)()],i.prototype,"direction",null),Object(l.c)([Object(r.c)()],i.prototype,"shadowMinZ",null),Object(l.c)([Object(r.c)()],i.prototype,"shadowMaxZ",null),i}(T.a)},545:function(Q,G,u){"use strict";u.d(G,"a",function(){return m});var l=u(444),r=u(625),C=u(500),T=u(566),m=function(){function D(){}return D.ExpandRGBDTexture=function(E){var i=E._texture;if(!(!i||!E.isRGBD)){var e=i.getEngine(),t=e.getCaps(),c=!1;t.textureHalfFloatRender&&t.textureHalfFloatLinearFiltering?(c=!0,i.type=2):t.textureFloatRender&&t.textureFloatLinearFiltering&&(c=!0,i.type=1),c&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),E.onLoadObservable.addOnce(function(){if(c){var a=new l.a("rgbdDecode","rgbdDecode",null,null,1,null,3,e,!1,void 0,i.type,void 0,null,!1),f=e.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});a.getEffect().executeWhenCompiled(function(){a.onApply=function(d){d._bindTexture("textureSampler",i),d.setFloat2("scale",1,1)},E.getScene().postProcessManager.directRender([a],f,!0),e.restoreDefaultFramebuffer(),e._releaseTexture(i),e._releaseFramebufferObjects(f),a&&a.dispose(),f._swapAndDie(i),i.isReady=!0})}})}},D.EncodeTextureToRGBD=function(E,i,e){return e===void 0&&(e=0),T.a.ApplyPostProcess("rgbdEncode",E,i,e,1,5)},D}()},549:function(Q,G,u){"use strict";u.d(G,"a",function(){return r});const l=()=>!!document.createElement("canvas").getContext("webgl2"),r=()=>l()?"webgl2":"webgl"},554:function(Q,G,u){"use strict";u.d(G,"a",function(){return l});var l=function(){function r(C,T){T===void 0&&(T=20),this.debug=!1,this._sourceCode=C,this._numMaxIterations=T,this._functionDescr=[],this.inlineToken="#define inline"}return Object.defineProperty(r.prototype,"code",{get:function(){return this._sourceCode},enumerable:!1,configurable:!0}),r.prototype.processCode=function(){this.debug&&console.log("Start inlining process (code size="+this._sourceCode.length+")..."),this._collectFunctions(),this._processInlining(this._numMaxIterations),this.debug&&console.log("End of inlining process.")},r.prototype._collectFunctions=function(){for(var C=0;C<this._sourceCode.length;){var T=this._sourceCode.indexOf(this.inlineToken,C);if(T<0)break;var m=this._sourceCode.indexOf("(",T+this.inlineToken.length);if(m<0){this.debug&&console.warn("Could not find the opening parenthesis after the token. startIndex="+C),C=T+this.inlineToken.length;continue}var D=r._RegexpFindFunctionNameAndType.exec(this._sourceCode.substring(T+this.inlineToken.length,m));if(!D){this.debug&&console.warn("Could not extract the name/type of the function from: "+this._sourceCode.substring(T+this.inlineToken.length,m)),C=T+this.inlineToken.length;continue}var E=[D[3],D[4]],i=E[0],e=E[1],t=this._extractBetweenMarkers("(",")",this._sourceCode,m);if(t<0){this.debug&&console.warn("Could not extract the parameters the function '"+e+"' (type="+i+"). funcParamsStartIndex="+m),C=T+this.inlineToken.length;continue}var c=this._sourceCode.substring(m+1,t),a=this._skipWhitespaces(this._sourceCode,t+1);if(a===this._sourceCode.length){this.debug&&console.warn("Could not extract the body of the function '"+e+"' (type="+i+"). funcParamsEndIndex="+t),C=T+this.inlineToken.length;continue}var f=this._extractBetweenMarkers("{","}",this._sourceCode,a);if(f<0){this.debug&&console.warn("Could not extract the body of the function '"+e+"' (type="+i+"). funcBodyStartIndex="+a),C=T+this.inlineToken.length;continue}for(var d=this._sourceCode.substring(a,f+1),h=this._removeComments(c).split(","),A=[],S=0;S<h.length;++S){var O=h[S].trim(),I=O.lastIndexOf(" ");I>=0&&A.push(O.substring(I+1))}i!=="void"&&A.push("return"),this._functionDescr.push({name:e,type:i,parameters:A,body:d,callIndex:0}),C=f+1;var x=T>0?this._sourceCode.substring(0,T):"",P=f+1<this._sourceCode.length-1?this._sourceCode.substring(f+1):"";this._sourceCode=x+P,C-=f+1-T}this.debug&&console.log("Collect functions: "+this._functionDescr.length+" functions found. functionDescr=",this._functionDescr)},r.prototype._processInlining=function(C){for(C===void 0&&(C=20);C-->=0&&this._replaceFunctionCallsByCode(););return this.debug&&console.log("numMaxIterations is "+C+" after inlining process"),C>=0},r.prototype._extractBetweenMarkers=function(C,T,m,D){for(var E=D,i=0,e="";E<m.length;){var t=m.charAt(E);if(e)t===e?e==='"'||e==="'"?m.charAt(E-1)!=="\\"&&(e=""):e="":e==="*/"&&t==="*"&&E+1<m.length&&(m.charAt(E+1)==="/"&&(e=""),e===""&&E++);else switch(t){case C:i++;break;case T:i--;break;case'"':case"'":case"`":e=t;break;case"/":if(E+1<m.length){var c=m.charAt(E+1);c==="/"?e=`
`:c==="*"&&(e="*/")}break}if(E++,i===0)break}return i===0?E-1:-1},r.prototype._skipWhitespaces=function(C,T){for(;T<C.length;){var m=C[T];if(m!==" "&&m!==`
`&&m!=="\r"&&m!=="	"&&m!==`
`&&m!=="\xA0")break;T++}return T},r.prototype._isIdentifierChar=function(C){var T=C.charCodeAt(0);return T>=48&&T<=57||T>=65&&T<=90||T>=97&&T<=122||T==95},r.prototype._removeComments=function(C){for(var T=0,m="",D=!1,E=[];T<C.length;){var i=C.charAt(T);if(m)i===m?m==='"'||m==="'"?(C.charAt(T-1)!=="\\"&&(m=""),E.push(i)):(m="",D=!1):m==="*/"&&i==="*"&&T+1<C.length?(C.charAt(T+1)==="/"&&(m=""),m===""&&(D=!1,T++)):D||E.push(i);else{switch(i){case'"':case"'":case"`":m=i;break;case"/":if(T+1<C.length){var e=C.charAt(T+1);e==="/"?(m=`
`,D=!0):e==="*"&&(m="*/",D=!0)}break}D||E.push(i)}T++}return E.join("")},r.prototype._replaceFunctionCallsByCode=function(){for(var C=this,T=!1,m=0,D=this._functionDescr;m<D.length;m++)for(var E=D[m],i=E.name,e=E.type,t=E.parameters,c=E.body,a=0;a<this._sourceCode.length;){var f=this._sourceCode.indexOf(i,a);if(f<0)break;if(f===0||this._isIdentifierChar(this._sourceCode.charAt(f-1))){a=f+i.length;continue}var d=this._skipWhitespaces(this._sourceCode,f+i.length);if(d===this._sourceCode.length||this._sourceCode.charAt(d)!=="("){a=f+i.length;continue}var h=this._extractBetweenMarkers("(",")",this._sourceCode,d);if(h<0){this.debug&&console.warn("Could not extract the parameters of the function call. Function '"+i+"' (type="+e+"). callParamsStartIndex="+d),a=f+i.length;continue}var A=this._sourceCode.substring(d+1,h),S=function(_){for(var v=[],M=0,U=0;M<_.length;){if(_.charAt(M)==="("){var N=C._extractBetweenMarkers("(",")",_,M);if(N<0)return null;M=N}else _.charAt(M)===","&&(v.push(_.substring(U,M)),U=M+1);M++}return U<M&&v.push(_.substring(U,M)),v},O=S(this._removeComments(A));if(O===null){this.debug&&console.warn("Invalid function call: can't extract the parameters of the function call. Function '"+i+"' (type="+e+"). callParamsStartIndex="+d+", callParams="+A),a=f+i.length;continue}for(var I=[],x=0;x<O.length;++x){var P=O[x].trim();I.push(P)}var y=e!=="void"?i+"_"+E.callIndex++:null;if(y&&I.push(y+" ="),I.length!==t.length){this.debug&&console.warn("Invalid function call: not the same number of parameters for the call than the number expected by the function. Function '"+i+"' (type="+e+"). function parameters="+t+", call parameters="+I),a=f+i.length;continue}a=h+1;var F=this._replaceNames(c,t,I),V=f>0?this._sourceCode.substring(0,f):"",L=h+1<this._sourceCode.length-1?this._sourceCode.substring(h+1):"";if(y){var j=this._findBackward(this._sourceCode,f-1,`
`);V=this._sourceCode.substring(0,j+1);var R=this._sourceCode.substring(j+1,f);this._sourceCode=V+e+" "+y+`;
`+F+`
`+R+y+L,this.debug&&console.log("Replace function call by code. Function '"+i+"' (type="+e+"). injectDeclarationIndex="+j+", call parameters="+I)}else this._sourceCode=V+F+L,a+=F.length-(h+1-f),this.debug&&console.log("Replace function call by code. Function '"+i+"' (type="+e+"). functionCallIndex="+f+", call parameters="+I);T=!0}return T},r.prototype._findBackward=function(C,T,m){for(;T>=0&&C.charAt(T)!==m;)T--;return T},r.prototype._escapeRegExp=function(C){return C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},r.prototype._replaceNames=function(C,T,m){for(var D=this,E=function(t){var c=new RegExp(i._escapeRegExp(T[t]),"g"),a=T[t].length,f=m[t];C=C.replace(c,function(d){for(var h=[],A=1;A<arguments.length;A++)h[A-1]=arguments[A];var S=h[0];return D._isIdentifierChar(C.charAt(S-1))||D._isIdentifierChar(C.charAt(S+a))?T[t]:f})},i=this,e=0;e<T.length;++e)E(e);return C},r._RegexpFindFunctionNameAndType=/((\s+?)(\w+)\s+(\w+)\s*?)$/,r}()},566:function(Q,G,u){"use strict";u.d(G,"a",function(){return m});var l=u(442),r=u(458),C=u(486),T=u(444),m=function(){function D(){}return D.CreateResizedCopy=function(E,i,e,t){t===void 0&&(t=!0);var c=E.getScene(),a=c.getEngine(),f=new r.a("resized"+E.name,{width:i,height:e},c,!E.noMipmap,!0,E._texture.type,!1,E.samplingMode,!1);f.wrapU=E.wrapU,f.wrapV=E.wrapV,f.uOffset=E.uOffset,f.vOffset=E.vOffset,f.uScale=E.uScale,f.vScale=E.vScale,f.uAng=E.uAng,f.vAng=E.vAng,f.wAng=E.wAng,f.coordinatesIndex=E.coordinatesIndex,f.level=E.level,f.anisotropicFilteringLevel=E.anisotropicFilteringLevel,f._texture.isReady=!1,E.wrapU=l.a.CLAMP_ADDRESSMODE,E.wrapV=l.a.CLAMP_ADDRESSMODE;var d=new C.b("pass",1,null,t?l.a.BILINEAR_SAMPLINGMODE:l.a.NEAREST_SAMPLINGMODE,a,!1,0);return d.getEffect().executeWhenCompiled(function(){d.onApply=function(A){A.setTexture("textureSampler",E)};var h=f.getInternalTexture();h&&(c.postProcessManager.directRender([d],h),a.unBindFramebuffer(h),f.disposeFramebufferObjects(),d.dispose(),h.isReady=!0)}),f},D.ApplyPostProcess=function(E,i,e,t,c,a){var f=i.getEngine();return i.isReady=!1,c=c!=null?c:i.samplingMode,t=t!=null?t:i.type,a=a!=null?a:i.format,t===-1&&(t=0),new Promise(function(d){var h=new T.a("postprocess",E,null,null,1,null,c,f,!1,void 0,t,void 0,null,!1,a),A=f.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:c,type:t,format:a});h.getEffect().executeWhenCompiled(function(){h.onApply=function(S){S._bindTexture("textureSampler",i),S.setFloat2("scale",1,1)},e.postProcessManager.directRender([h],A,!0),f.restoreDefaultFramebuffer(),f._releaseTexture(i),f._releaseFramebufferObjects(A),h&&h.dispose(),A._swapAndDie(i),i.type=t,i.format=5,i.isReady=!0,d(i)})})},D}()},599:function(Q,G,u){"use strict";u.d(G,"a",function(){return E});var l=u(434),r=u(439),C=u(436),T=u(453),m=u(484),D=u(537);T.a.AddNodeConstructor("Light_Type_1",function(i,e){return function(){return new E(i,C.e.Zero(),e)}});var E=function(i){Object(l.d)(e,i);function e(t,c,a){var f=i.call(this,t,a)||this;return f._shadowFrustumSize=0,f._shadowOrthoScale=.1,f.autoUpdateExtends=!0,f.autoCalcShadowZBounds=!1,f._orthoLeft=Number.MAX_VALUE,f._orthoRight=Number.MIN_VALUE,f._orthoTop=Number.MIN_VALUE,f._orthoBottom=Number.MAX_VALUE,f.position=c.scale(-1),f.direction=c,f}return Object.defineProperty(e.prototype,"shadowFrustumSize",{get:function(){return this._shadowFrustumSize},set:function(t){this._shadowFrustumSize=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowOrthoScale",{get:function(){return this._shadowOrthoScale},set:function(t){this._shadowOrthoScale=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoLeft",{get:function(){return this._orthoLeft},set:function(t){this._orthoLeft=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoRight",{get:function(){return this._orthoRight},set:function(t){this._orthoRight=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoTop",{get:function(){return this._orthoTop},set:function(t){this._orthoTop=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoBottom",{get:function(){return this._orthoBottom},set:function(t){this._orthoBottom=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"DirectionalLight"},e.prototype.getTypeID=function(){return m.a.LIGHTTYPEID_DIRECTIONALLIGHT},e.prototype._setDefaultShadowProjectionMatrix=function(t,c,a){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(t):this._setDefaultAutoExtendShadowProjectionMatrix(t,c,a)},e.prototype._setDefaultFixedFrustumShadowProjectionMatrix=function(t){var c=this.getScene().activeCamera;!c||C.a.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ!==void 0?this.shadowMinZ:c.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:c.maxZ,t)},e.prototype._setDefaultAutoExtendShadowProjectionMatrix=function(t,c,a){var f=this.getScene().activeCamera;if(!!f){if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){var d=C.e.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;for(var h=Number.MAX_VALUE,A=Number.MIN_VALUE,S=0;S<a.length;S++){var O=a[S];if(!!O)for(var I=O.getBoundingInfo(),x=I.boundingBox,P=0;P<x.vectorsWorld.length;P++)C.e.TransformCoordinatesToRef(x.vectorsWorld[P],c,d),d.x<this._orthoLeft&&(this._orthoLeft=d.x),d.y<this._orthoBottom&&(this._orthoBottom=d.y),d.x>this._orthoRight&&(this._orthoRight=d.x),d.y>this._orthoTop&&(this._orthoTop=d.y),this.autoCalcShadowZBounds&&(d.z<h&&(h=d.z),d.z>A&&(A=d.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=h,this._shadowMaxZ=A)}var y=this._orthoRight-this._orthoLeft,F=this._orthoTop-this._orthoBottom;C.a.OrthoOffCenterLHToRef(this._orthoLeft-y*this.shadowOrthoScale,this._orthoRight+y*this.shadowOrthoScale,this._orthoBottom-F*this.shadowOrthoScale,this._orthoTop+F*this.shadowOrthoScale,this.shadowMinZ!==void 0?this.shadowMinZ:f.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:f.maxZ,t)}},e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.transferToEffect=function(t,c){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,c),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,c),this)},e.prototype.transferToNodeMaterialEffect=function(t,c){return this.computeTransformedInformation()?(t.setFloat3(c,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(t.setFloat3(c,this.direction.x,this.direction.y,this.direction.z),this)},e.prototype.getDepthMinZ=function(t){return 1},e.prototype.getDepthMaxZ=function(t){return 1},e.prototype.prepareLightSpecificDefines=function(t,c){t["DIRLIGHT"+c]=!0},Object(l.c)([Object(r.c)()],e.prototype,"shadowFrustumSize",null),Object(l.c)([Object(r.c)()],e.prototype,"shadowOrthoScale",null),Object(l.c)([Object(r.c)()],e.prototype,"autoUpdateExtends",void 0),Object(l.c)([Object(r.c)()],e.prototype,"autoCalcShadowZBounds",void 0),Object(l.c)([Object(r.c)("orthoLeft")],e.prototype,"_orthoLeft",void 0),Object(l.c)([Object(r.c)("orthoRight")],e.prototype,"_orthoRight",void 0),Object(l.c)([Object(r.c)("orthoTop")],e.prototype,"_orthoTop",void 0),Object(l.c)([Object(r.c)("orthoBottom")],e.prototype,"_orthoBottom",void 0),e}(D.a)},605:function(Q,G,u){"use strict";var l=u(435),r="importanceSampling",C=`




























vec3 hemisphereCosSample(vec2 u) {

float phi=2.*PI*u.x;
float cosTheta2=1.-u.y;
float cosTheta=sqrt(cosTheta2);
float sinTheta=sqrt(1.-cosTheta2);
return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);
}





































vec3 hemisphereImportanceSampleDggx(vec2 u,float a) {

float phi=2.*PI*u.x;

float cosTheta2=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));
float cosTheta=sqrt(cosTheta2);
float sinTheta=sqrt(1.-cosTheta2);
return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);
}

























































vec3 hemisphereImportanceSampleDCharlie(vec2 u,float a) {

float phi=2.*PI*u.x;
float sinTheta=pow(u.y,a/(2.*a+1.));
float cosTheta=sqrt(1.-sinTheta*sinTheta);
return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);
}`;l.a.IncludesShadersStore[r]=C;var T={name:r,shader:C}},606:function(Q,G,u){"use strict";var l=u(435),r="pbrBRDFFunctions",C=`
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25




#ifdef MS_BRDF_ENERGY_CONSERVATION


vec3 getEnergyConservationFactor(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {
return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);
}
#endif
#ifdef ENVIRONMENTBRDF
vec3 getBRDFLookup(float NdotV,float perceptualRoughness) {

vec2 UV=vec2(NdotV,perceptualRoughness);

vec4 brdfLookup=texture2D(environmentBrdfSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup.rgb=fromRGBD(brdfLookup.rgba);
#endif
return brdfLookup.rgb;
}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 specularEnvironmentR90,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;

#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;
}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;
}
#endif

#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
vec3 getReflectanceFromAnalyticalBRDFLookup_Jones(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{

float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);
return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));
}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)

vec3 getSheenReflectanceFromBRDFLookup(const vec3 reflectance0,const vec3 environmentBrdf) {
vec3 sheenEnvironmentReflectance=reflectance0*environmentBrdf.b;
return sheenEnvironmentReflectance;
}
#endif
























vec3 fresnelSchlickGGX(float VdotH,vec3 reflectance0,vec3 reflectance90)
{
return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);
}
float fresnelSchlickGGX(float VdotH,float reflectance0,float reflectance90)
{
return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);
}
#ifdef CLEARCOAT





vec3 getR0RemappedForClearCoat(vec3 f0) {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturate(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturate(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
vec3 s=sqrt(f0);
vec3 t=(vClearCoatRefractionParams.z+vClearCoatRefractionParams.w*s)/(vClearCoatRefractionParams.w+vClearCoatRefractionParams.z*s);
return t*t;
#endif
}
#endif






float normalDistributionFunction_TrowbridgeReitzGGX(float NdotH,float alphaG)
{



float a2=square(alphaG);
float d=NdotH*NdotH*(a2-1.0)+1.0;
return a2/(PI*d*d);
}
#ifdef SHEEN


float normalDistributionFunction_CharlieSheen(float NdotH,float alphaG)
{
float invR=1./alphaG;
float cos2h=NdotH*NdotH;
float sin2h=1.-cos2h;
return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);
}
#endif
#ifdef ANISOTROPIC


float normalDistributionFunction_BurleyGGX_Anisotropic(float NdotH,float TdotH,float BdotH,const vec2 alphaTB) {
float a2=alphaTB.x*alphaTB.y;
vec3 v=vec3(alphaTB.y*TdotH,alphaTB.x*BdotH,a2*NdotH);
float v2=dot(v,v);
float w2=a2/v2;
return a2*w2*w2*RECIPROCAL_PI;
}
#endif




#ifdef BRDF_V_HEIGHT_CORRELATED



float smithVisibility_GGXCorrelated(float NdotL,float NdotV,float alphaG) {
#ifdef MOBILE

float GGXV=NdotL*(NdotV*(1.0-alphaG)+alphaG);
float GGXL=NdotV*(NdotL*(1.0-alphaG)+alphaG);
return 0.5/(GGXV+GGXL);
#else
float a2=alphaG*alphaG;
float GGXV=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);
float GGXL=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);
return 0.5/(GGXV+GGXL);
#endif
}
#else















float smithVisibilityG1_TrowbridgeReitzGGXFast(float dot,float alphaG)
{
#ifdef MOBILE

return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
float alphaSquared=alphaG*alphaG;
return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
float smithVisibility_TrowbridgeReitzGGXFast(float NdotL,float NdotV,float alphaG)
{
float visibility=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);

return visibility;
}
#endif
#ifdef ANISOTROPIC


float smithVisibility_GGXCorrelated_Anisotropic(float NdotL,float NdotV,float TdotV,float BdotV,float TdotL,float BdotL,const vec2 alphaTB) {
float lambdaV=NdotL*length(vec3(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));
float lambdaL=NdotV*length(vec3(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));
float v=0.5/(lambdaV+lambdaL);
return v;
}
#endif
#ifdef CLEARCOAT
float visibility_Kelemen(float VdotH) {



return 0.25/(VdotH*VdotH);
}
#endif
#ifdef SHEEN



float visibility_Ashikhmin(float NdotL,float NdotV)
{
return 1./(4.*(NdotL+NdotV-NdotL*NdotV));
}

#endif







float diffuseBRDF_Burley(float NdotL,float NdotV,float VdotH,float roughness) {


float diffuseFresnelNV=pow5(saturateEps(1.0-NdotL));
float diffuseFresnelNL=pow5(saturateEps(1.0-NdotV));
float diffuseFresnel90=0.5+2.0*VdotH*VdotH*roughness;
float fresnel =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);
return fresnel/PI;
}
#ifdef SS_TRANSLUCENCY


vec3 transmittanceBRDF_Burley(const vec3 tintColor,const vec3 diffusionDistance,float thickness) {
vec3 S=1./maxEps(diffusionDistance);
vec3 temp=exp((-0.333333333*thickness)*S);
return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);
}


float computeWrappedDiffuseNdotL(float NdotL,float w) {
float t=1.0+w;
float invt2=1.0/square(t);
return saturate((NdotL+w)*invt2);
}
#endif
`;l.a.IncludesShadersStore[r]=C;var T={name:r,shader:C}},607:function(Q,G,u){"use strict";var l=u(435),r="hdrFilteringFunctions",C=`#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
#if defined(WEBGL2) || defined(WEBGPU)


float radicalInverse_VdC(uint bits)
{
bits=(bits << 16u) | (bits >> 16u);
bits=((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
bits=((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
bits=((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
bits=((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
return float(bits)*2.3283064365386963e-10;
}
vec2 hammersley(uint i,uint N)
{
return vec2(float(i)/float(N),radicalInverse_VdC(i));
}
#else
float vanDerCorpus(int n,int base)
{
float invBase=1.0/float(base);
float denom=1.0;
float result=0.0;
for(int i=0; i<32; ++i)
{
if(n>0)
{
denom=mod(float(n),2.0);
result+=denom*invBase;
invBase=invBase/2.0;
n=int(float(n)/2.0);
}
}
return result;
}
vec2 hammersley(int i,int N)
{
return vec2(float(i)/float(N),vanDerCorpus(i,2));
}
#endif
float log4(float x) {
return log2(x)/2.;
}
const float NUM_SAMPLES_FLOAT=float(NUM_SAMPLES);
const float NUM_SAMPLES_FLOAT_INVERSED=1./NUM_SAMPLES_FLOAT;
const float K=4.;



















































































































#define inline
vec3 irradiance(samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{
vec3 n=normalize(inputN);
vec3 result=vec3(0.0);
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);
tangent=normalize(cross(tangent,n));
vec3 bitangent=cross(n,tangent);
mat3 tbn=mat3(tangent,bitangent,n);
float maxLevel=filteringInfo.y;
float dim0=filteringInfo.x;
float omegaP=(4.*PI)/(6.*dim0*dim0);
#if defined(WEBGL2) || defined(WEBGPU)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{
vec2 Xi=hammersley(i,NUM_SAMPLES);
vec3 Ls=hemisphereCosSample(Xi);
Ls=normalize(Ls);
vec3 Ns=vec3(0.,0.,1.);
float NoL=dot(Ns,Ls);
if (NoL>0.) {
float pdf_inversed=PI/NoL;
float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;
float l=log4(omegaS)-log4(omegaP)+log4(K);
float mipLevel=clamp(l,0.0,maxLevel);
vec3 c=textureCubeLodEXT(inputTexture,tbn*Ls,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c;
}
}
result=result*NUM_SAMPLES_FLOAT_INVERSED;
return result;
}
#define inline
vec3 radiance(float alphaG,samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{
vec3 n=normalize(inputN);
if (alphaG == 0.) {
vec3 c=textureCube(inputTexture,n).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;
} else {
vec3 result=vec3(0.);
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);
tangent=normalize(cross(tangent,n));
vec3 bitangent=cross(n,tangent);
mat3 tbn=mat3(tangent,bitangent,n);
float maxLevel=filteringInfo.y;
float dim0=filteringInfo.x;
float omegaP=(4.*PI)/(6.*dim0*dim0);
float weight=0.;
#if defined(WEBGL2) || defined(WEBGPU)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{
vec2 Xi=hammersley(i,NUM_SAMPLES);
vec3 H=hemisphereImportanceSampleDggx(Xi,alphaG);
float NoV=1.;
float NoH=H.z;
float NoH2=H.z*H.z;
float NoL=2.*NoH2-1.;
vec3 L=vec3(2.*NoH*H.x,2.*NoH*H.y,NoL);
L=normalize(L);
if (NoL>0.) {
float pdf_inversed=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);
float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;
float l=log4(omegaS)-log4(omegaP)+log4(K);
float mipLevel=clamp(float(l),0.0,maxLevel);
weight+=NoL;
vec3 c=textureCubeLodEXT(inputTexture,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;
}
}
result=result/weight;
return result;
}
}
#endif
#endif`;l.a.IncludesShadersStore[r]=C;var T={name:r,shader:C}},625:function(Q,G,u){"use strict";var l=u(435),r=u(457),C="rgbdDecodePixelShader",T=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;l.a.ShadersStore[C]=T;var m={name:C,shader:T}},626:function(Q,G,u){"use strict";u.d(G,"a",function(){return D});var l=u(434),r=u(439),C=u(441),T=u(480),m=u(454),D=function(){function E(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=E._DefaultIndexOfRefraction,this.indexOfRefraction=E._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=C.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return E.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},E.prototype.isReadyForSubMesh=function(i,e,t,c){return!(i._areTexturesDirty&&e.texturesEnabled&&(this._texture&&T.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&T.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||t.getCaps().standardDerivatives&&this._bumpTexture&&T.a.ClearCoatBumpTextureEnabled&&!c&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&T.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},E.prototype.prepareDefines=function(i,e){var t;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((t=this._textureRoughness)===null||t===void 0?void 0:t._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&e.texturesEnabled&&(this._texture&&T.a.ClearCoatTextureEnabled?m.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&T.a.ClearCoatTextureEnabled?m.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&T.a.ClearCoatBumpTextureEnabled?m.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===E._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&T.a.ClearCoatTintTextureEnabled?m.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},E.prototype.bindForSubMesh=function(i,e,t,c,a,f,d,h){var A,S,O,I,x,P,y,F,V=h._materialDefines,L=V.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!a||!i.isSync){L&&T.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),m.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&T.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(S=(A=this._texture)===null||A===void 0?void 0:A.coordinatesIndex)!==null&&S!==void 0?S:0,(I=(O=this._texture)===null||O===void 0?void 0:O.level)!==null&&I!==void 0?I:0,(P=(x=this._textureRoughness)===null||x===void 0?void 0:x.coordinatesIndex)!==null&&P!==void 0?P:0,(F=(y=this._textureRoughness)===null||y===void 0?void 0:y.level)!==null&&F!==void 0?F:0),this._texture&&m.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!L&&!V.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&m.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&t.getCaps().standardDerivatives&&T.a.ClearCoatTextureEnabled&&!c&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),m.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),e._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",f?1:-1,d?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",f?-1:1,d?-1:1)),this._tintTexture&&T.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),m.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var j=1-this._indexOfRefraction,R=1+this._indexOfRefraction,_=Math.pow(-j/R,2),v=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",_,v,j,R),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}e.texturesEnabled&&(this._texture&&T.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!L&&!V.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&T.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&t.getCaps().standardDerivatives&&T.a.ClearCoatBumpTextureEnabled&&!c&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&T.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},E.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},E.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},E.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},E.prototype.dispose=function(i){var e,t,c,a;i&&((e=this._texture)===null||e===void 0||e.dispose(),(t=this._textureRoughness)===null||t===void 0||t.dispose(),(c=this._bumpTexture)===null||c===void 0||c.dispose(),(a=this._tintTexture)===null||a===void 0||a.dispose())},E.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},E.AddFallbacks=function(i,e,t){return i.CLEARCOAT_BUMP&&e.addFallback(t++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&e.addFallback(t++,"CLEARCOAT_TINT"),i.CLEARCOAT&&e.addFallback(t++,"CLEARCOAT"),t},E.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},E.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},E.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},E.prototype.copyTo=function(i){r.a.Clone(function(){return i},this)},E.prototype.serialize=function(){return r.a.Serialize(this)},E.prototype.parse=function(i,e,t){var c=this;r.a.Parse(function(){return c},i,e,t)},E._DefaultIndexOfRefraction=1.5,Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"isEnabled",void 0),Object(l.c)([Object(r.c)()],E.prototype,"intensity",void 0),Object(l.c)([Object(r.c)()],E.prototype,"roughness",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"texture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"textureRoughness",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"remapF0OnInterfaceChange",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"bumpTexture",void 0),Object(l.c)([Object(r.c)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"isTintEnabled",void 0),Object(l.c)([Object(r.e)()],E.prototype,"tintColor",void 0),Object(l.c)([Object(r.c)()],E.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(r.c)()],E.prototype,"tintThickness",void 0),Object(l.c)([Object(r.m)(),Object(r.b)("_markAllSubMeshesAsTexturesDirty")],E.prototype,"tintTexture",void 0),E}()},627:function(Q,G,u){"use strict";var l=u(435),r="subSurfaceScatteringFunctions",C=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;l.a.IncludesShadersStore[r]=C;var T={name:r,shader:C}},743:function(Q,G,u){"use strict";u.d(G,"a",function(){return r});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var l=function(R,_){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,M){v.__proto__=M}||function(v,M){for(var U in M)Object.prototype.hasOwnProperty.call(M,U)&&(v[U]=M[U])},l(R,_)};function r(R,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");l(R,_);function v(){this.constructor=R}R.prototype=_===null?Object.create(_):(v.prototype=_.prototype,new v)}var C=function(){return C=Object.assign||function(_){for(var v,M=1,U=arguments.length;M<U;M++){v=arguments[M];for(var N in v)Object.prototype.hasOwnProperty.call(v,N)&&(_[N]=v[N])}return _},C.apply(this,arguments)};function T(R,_){var v={};for(var M in R)Object.prototype.hasOwnProperty.call(R,M)&&_.indexOf(M)<0&&(v[M]=R[M]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,M=Object.getOwnPropertySymbols(R);U<M.length;U++)_.indexOf(M[U])<0&&Object.prototype.propertyIsEnumerable.call(R,M[U])&&(v[M[U]]=R[M[U]]);return v}function m(R,_,v,M){var U=arguments.length,N=U<3?_:M===null?M=Object.getOwnPropertyDescriptor(_,v):M,k;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")N=Reflect.decorate(R,_,v,M);else for(var J=R.length-1;J>=0;J--)(k=R[J])&&(N=(U<3?k(N):U>3?k(_,v,N):k(_,v))||N);return U>3&&N&&Object.defineProperty(_,v,N),N}function D(R,_){return function(v,M){_(v,M,R)}}function E(R,_){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(R,_)}function i(R,_,v,M){function U(N){return N instanceof v?N:new v(function(k){k(N)})}return new(v||(v=Promise))(function(N,k){function J(ne){try{K(M.next(ne))}catch(ae){k(ae)}}function te(ne){try{K(M.throw(ne))}catch(ae){k(ae)}}function K(ne){ne.done?N(ne.value):U(ne.value).then(J,te)}K((M=M.apply(R,_||[])).next())})}function e(R,_){var v={label:0,sent:function(){if(N[0]&1)throw N[1];return N[1]},trys:[],ops:[]},M,U,N,k;return k={next:J(0),throw:J(1),return:J(2)},typeof Symbol=="function"&&(k[Symbol.iterator]=function(){return this}),k;function J(K){return function(ne){return te([K,ne])}}function te(K){if(M)throw new TypeError("Generator is already executing.");for(;v;)try{if(M=1,U&&(N=K[0]&2?U.return:K[0]?U.throw||((N=U.return)&&N.call(U),0):U.next)&&!(N=N.call(U,K[1])).done)return N;switch(U=0,N&&(K=[K[0]&2,N.value]),K[0]){case 0:case 1:N=K;break;case 4:return v.label++,{value:K[1],done:!1};case 5:v.label++,U=K[1],K=[0];continue;case 7:K=v.ops.pop(),v.trys.pop();continue;default:if(N=v.trys,!(N=N.length>0&&N[N.length-1])&&(K[0]===6||K[0]===2)){v=0;continue}if(K[0]===3&&(!N||K[1]>N[0]&&K[1]<N[3])){v.label=K[1];break}if(K[0]===6&&v.label<N[1]){v.label=N[1],N=K;break}if(N&&v.label<N[2]){v.label=N[2],v.ops.push(K);break}N[2]&&v.ops.pop(),v.trys.pop();continue}K=_.call(R,v)}catch(ne){K=[6,ne],U=0}finally{M=N=0}if(K[0]&5)throw K[1];return{value:K[0]?K[1]:void 0,done:!0}}}var t=Object.create?function(R,_,v,M){M===void 0&&(M=v),Object.defineProperty(R,M,{enumerable:!0,get:function(){return _[v]}})}:function(R,_,v,M){M===void 0&&(M=v),R[M]=_[v]};function c(R,_){for(var v in R)v!=="default"&&!Object.prototype.hasOwnProperty.call(_,v)&&t(_,R,v)}function a(R){var _=typeof Symbol=="function"&&Symbol.iterator,v=_&&R[_],M=0;if(v)return v.call(R);if(R&&typeof R.length=="number")return{next:function(){return R&&M>=R.length&&(R=void 0),{value:R&&R[M++],done:!R}}};throw new TypeError(_?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(R,_){var v=typeof Symbol=="function"&&R[Symbol.iterator];if(!v)return R;var M=v.call(R),U,N=[],k;try{for(;(_===void 0||_-- >0)&&!(U=M.next()).done;)N.push(U.value)}catch(J){k={error:J}}finally{try{U&&!U.done&&(v=M.return)&&v.call(M)}finally{if(k)throw k.error}}return N}function d(){for(var R=[],_=0;_<arguments.length;_++)R=R.concat(f(arguments[_]));return R}function h(){for(var R=0,_=0,v=arguments.length;_<v;_++)R+=arguments[_].length;for(var M=Array(R),U=0,_=0;_<v;_++)for(var N=arguments[_],k=0,J=N.length;k<J;k++,U++)M[U]=N[k];return M}function A(R,_){for(var v=0,M=_.length,U=R.length;v<M;v++,U++)R[U]=_[v];return R}function S(R){return this instanceof S?(this.v=R,this):new S(R)}function O(R,_,v){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var M=v.apply(R,_||[]),U,N=[];return U={},k("next"),k("throw"),k("return"),U[Symbol.asyncIterator]=function(){return this},U;function k(ee){M[ee]&&(U[ee]=function(re){return new Promise(function(oe,he){N.push([ee,re,oe,he])>1||J(ee,re)})})}function J(ee,re){try{te(M[ee](re))}catch(oe){ae(N[0][3],oe)}}function te(ee){ee.value instanceof S?Promise.resolve(ee.value.v).then(K,ne):ae(N[0][2],ee)}function K(ee){J("next",ee)}function ne(ee){J("throw",ee)}function ae(ee,re){ee(re),N.shift(),N.length&&J(N[0][0],N[0][1])}}function I(R){var _,v;return _={},M("next"),M("throw",function(U){throw U}),M("return"),_[Symbol.iterator]=function(){return this},_;function M(U,N){_[U]=R[U]?function(k){return(v=!v)?{value:S(R[U](k)),done:U==="return"}:N?N(k):k}:N}}function x(R){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var _=R[Symbol.asyncIterator],v;return _?_.call(R):(R=typeof a=="function"?a(R):R[Symbol.iterator](),v={},M("next"),M("throw"),M("return"),v[Symbol.asyncIterator]=function(){return this},v);function M(N){v[N]=R[N]&&function(k){return new Promise(function(J,te){k=R[N](k),U(J,te,k.done,k.value)})}}function U(N,k,J,te){Promise.resolve(te).then(function(K){N({value:K,done:J})},k)}}function P(R,_){return Object.defineProperty?Object.defineProperty(R,"raw",{value:_}):R.raw=_,R}var y=Object.create?function(R,_){Object.defineProperty(R,"default",{enumerable:!0,value:_})}:function(R,_){R.default=_};function F(R){if(R&&R.__esModule)return R;var _={};if(R!=null)for(var v in R)v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)&&t(_,R,v);return y(_,R),_}function V(R){return R&&R.__esModule?R:{default:R}}function L(R,_){if(!_.has(R))throw new TypeError("attempted to get private field on non-instance");return _.get(R)}function j(R,_,v){if(!_.has(R))throw new TypeError("attempted to set private field on non-instance");return _.set(R,v),v}},766:function(Q,G,u){"use strict";u.d(G,"a",function(){return E});var l=u(743),r=u(435),C=u(533),T=u(437),m=u(554),D=function(){function i(){}return i}(),E=function(i){Object(l.a)(e,i);function e(t,c){var a=i.call(this,t,c)||this;return a.CustomParts=new D,a.customShaderNameResolve=a.Builder,a.FragmentShader=r.a.ShadersStore.pbrPixelShader,a.VertexShader=r.a.ShadersStore.pbrVertexShader,a.FragmentShader=a.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g,r.a.IncludesShadersStore.pbrBlockAlbedoOpacity),a.FragmentShader=a.FragmentShader.replace(/#include<pbrBlockReflectivity>/g,r.a.IncludesShadersStore.pbrBlockReflectivity),a.FragmentShader=a.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g,r.a.IncludesShadersStore.pbrBlockFinalColorComposition),a}return e.prototype.AttachAfterBind=function(t,c){if(this._newUniformInstances)for(var a in this._newUniformInstances){var f=a.toString().split("-");f[0]=="vec2"?c.setVector2(f[1],this._newUniformInstances[a]):f[0]=="vec3"?c.setVector3(f[1],this._newUniformInstances[a]):f[0]=="vec4"?c.setVector4(f[1],this._newUniformInstances[a]):f[0]=="mat4"?c.setMatrix(f[1],this._newUniformInstances[a]):f[0]=="float"&&c.setFloat(f[1],this._newUniformInstances[a])}if(this._newSamplerInstances)for(var a in this._newSamplerInstances){var f=a.toString().split("-");f[0]=="sampler2D"&&this._newSamplerInstances[a].isReady&&this._newSamplerInstances[a].isReady()&&c.setTexture(f[1],this._newSamplerInstances[a])}},e.prototype.ReviewUniform=function(t,c){if(t=="uniform"&&this._newUniforms)for(var a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")==-1&&c.push(this._newUniforms[a]);if(t=="sampler"&&this._newUniforms)for(var a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")!=-1&&c.push(this._newUniforms[a]);return c},e.prototype.Builder=function(t,c,a,f,d,h,A){var S=this;if(A&&(A.processFinalCode=function(x,P){if(x==="vertex")return P;var y=new m.a(P);return y.inlineToken="#define pbr_inline",y.processCode(),y.code}),h&&this._customAttributes&&this._customAttributes.length>0&&h.push.apply(h,this._customAttributes),this.ReviewUniform("uniform",c),this.ReviewUniform("sampler",f),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,e.ShaderIndexer++;var O="custom_"+e.ShaderIndexer,I=this._afterBind.bind(this);return this._afterBind=function(x,P){if(!!P){S.AttachAfterBind(x,P);try{I(x,P)}catch(y){}}},r.a.ShadersStore[O+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(r.a.ShadersStore[O+"VertexShader"]=r.a.ShadersStore[O+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),r.a.ShadersStore[O+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_ALBEDO",this.CustomParts.Fragment_Custom_Albedo?this.CustomParts.Fragment_Custom_Albedo:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS",this.CustomParts.Fragment_Custom_MetallicRoughness?this.CustomParts.Fragment_Custom_MetallicRoughness:"").replace("#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE",this.CustomParts.Fragment_Custom_MicroSurface?this.CustomParts.Fragment_Custom_MicroSurface:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(r.a.ShadersStore[O+"PixelShader"]=r.a.ShadersStore[O+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=O,O},e.prototype.AddUniform=function(t,c,a){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),a&&(c.indexOf("sampler")!=-1?this._newSamplerInstances[c+"-"+t]=a:this._newUniformInstances[c+"-"+t]=a),this._customUniform.push("uniform "+c+" "+t+";"),this._newUniforms.push(t),this},e.prototype.AddAttribute=function(t){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(t),this},e.prototype.Fragment_Begin=function(t){return this.CustomParts.Fragment_Begin=t,this},e.prototype.Fragment_Definitions=function(t){return this.CustomParts.Fragment_Definitions=t,this},e.prototype.Fragment_MainBegin=function(t){return this.CustomParts.Fragment_MainBegin=t,this},e.prototype.Fragment_Custom_Albedo=function(t){return this.CustomParts.Fragment_Custom_Albedo=t.replace("result","surfaceAlbedo"),this},e.prototype.Fragment_Custom_Alpha=function(t){return this.CustomParts.Fragment_Custom_Alpha=t.replace("result","alpha"),this},e.prototype.Fragment_Before_Lights=function(t){return this.CustomParts.Fragment_Before_Lights=t,this},e.prototype.Fragment_Custom_MetallicRoughness=function(t){return this.CustomParts.Fragment_Custom_MetallicRoughness=t,this},e.prototype.Fragment_Custom_MicroSurface=function(t){return this.CustomParts.Fragment_Custom_MicroSurface=t,this},e.prototype.Fragment_Before_Fog=function(t){return this.CustomParts.Fragment_Before_Fog=t,this},e.prototype.Fragment_Before_FragColor=function(t){return this.CustomParts.Fragment_Before_FragColor=t.replace("result","color"),this},e.prototype.Vertex_Begin=function(t){return this.CustomParts.Vertex_Begin=t,this},e.prototype.Vertex_Definitions=function(t){return this.CustomParts.Vertex_Definitions=t,this},e.prototype.Vertex_MainBegin=function(t){return this.CustomParts.Vertex_MainBegin=t,this},e.prototype.Vertex_Before_PositionUpdated=function(t){return this.CustomParts.Vertex_Before_PositionUpdated=t.replace("result","positionUpdated"),this},e.prototype.Vertex_Before_NormalUpdated=function(t){return this.CustomParts.Vertex_Before_NormalUpdated=t.replace("result","normalUpdated"),this},e.prototype.Vertex_After_WorldPosComputed=function(t){return this.CustomParts.Vertex_After_WorldPosComputed=t,this},e.prototype.Vertex_MainEnd=function(t){return this.CustomParts.Vertex_MainEnd=t,this},e.ShaderIndexer=1,e}(C.a);T.a.RegisteredTypes["BABYLON.PBRCustomMaterial"]=E},92:function(Q,G,u){"use strict";u.r(G);var l=u(445),r=u(449),C=u(455),T=u(498),m=u(599),D=u(475),E=u(441),i=u(506),e=u(648),t=u(766),c=u(549),a=u(343),f=u(344),d=(S,O,I)=>new Promise((x,P)=>{var y=L=>{try{V(I.next(L))}catch(j){P(j)}},F=L=>{try{V(I.throw(L))}catch(j){P(j)}},V=L=>L.done?x(L.value):Promise.resolve(L.value).then(y,F);V((I=I.apply(S,O)).next())});const h={animate:!0,context:Object(c.a)()},A=S=>d(void 0,[S],function*({canvas:O,width:I,height:x}){const P=new l.a(O,!0,{preserveDrawingBuffer:!0,stencil:!0}),y=+new Date,F=new r.a(P);F.clearColor=E.a.FromHexString("#10161A");const V=new i.a("camera",-1,.5,20,new D.z(0,0,0),F);V.wheelPrecision=50,V.minZ=.2,V.attachControl(O,!0);const L=new T.a("hemiLight",new D.z(-1,1,0),F);L.diffuse=new E.a(1,1,1),L.groundColor=new E.a(.5,.5,.5),L.intensity=.25;const j=new m.a("dirLight",new D.z(-1,-2,1),F);j.position=new D.z(20,40,-20);const R=5,_=e.a.CreateSphere("sphere",{diameter:R*2,segments:512});_.isPickable=!1,_.doNotSyncBoundingInfo=!1,_.freezeWorldMatrix();const v=new t.a("sphereMaterial",F);return v.metallic=.1,v.roughness=.075,v.emissiveColor=new E.a.FromHexString("#293742"),_.material=v,v.Vertex_Definitions(a.default),v.Vertex_Before_PositionUpdated(f.default),v.AddUniform("iTime","float"),v.AddUniform("radius","float"),v.AddUniform("radiusVariationAmplitude","float"),v.AddUniform("radiusNoiseFrequency","float"),v.onBind=()=>{const M=(+new Date-y)*.001;v.getEffect().setFloat("iTime",M),v.getEffect().setFloat("radius",R),v.getEffect().setFloat("radiusVariationAmplitude",1.2),v.getEffect().setFloat("radiusNoiseFrequency",.33)},{render({time:M,width:U,height:N}){F.render()},resize({pixelRatio:M,width:U,height:N}){P.resize()},unload(){P.dispose()}}});G.default={sketch:A,settings:h}}}]);
