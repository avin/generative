(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[39,188,189,190,191],{309:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
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
`},310:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
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
`},311:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
varying float vIdx;
varying float vR;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

float hash11(float p)
{
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
`},312:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
vec3 col = hue(hash11(vIdx*.01) * sin(vR*20.*hash11(vIdx*.0132))).rgb;
color = vec4(col, 1.);
`},444:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var l=o(434),s=o(490),C=o(438),v=o(436),c=o(534),E=o(445),h=o(500),i=o(439),t=o(437),e=function(){function n(r,a,f,p,d,m,A,O,R,b,D,L,U,F,V){A===void 0&&(A=1),b===void 0&&(b=null),D===void 0&&(D=0),L===void 0&&(L="postprocess"),F===void 0&&(F=!1),V===void 0&&(V=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new s.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new v.d(1,1),this._texelSize=v.d.Zero(),this.onActivateObservable=new C.c,this.onSizeChangedObservable=new C.c,this.onApplyObservable=new C.c,this.onBeforeRenderObservable=new C.c,this.onAfterRenderObservable=new C.c,this.name=r,m!=null?(this._camera=m,this._scene=m.getScene(),m.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):O&&(this._engine=O,this._engine.postProcesses.push(this)),this._options=d,this.renderTargetSamplingMode=A||1,this._reusable=R||!1,this._textureType=D,this._textureFormat=V,this._samplers=p||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=L,this._parameters=f||[],this._parameters.push("scale"),this._indexParameters=U,F||this.updateEffect(b)}return Object.defineProperty(n.prototype,"samples",{get:function(){return this._samples},set:function(r){var a=this;this._samples=Math.min(r,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(f){f.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(f,a._samples)})},enumerable:!1,configurable:!0}),n.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(n.prototype,"onActivate",{set:function(r){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),r&&(this._onActivateObserver=this.onActivateObservable.add(r))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onSizeChanged",{set:function(r){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onApply",{set:function(r){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onBeforeRender",{set:function(r){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onAfterRender",{set:function(r){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(r){this._forcedOutputTexture=r},enumerable:!1,configurable:!0}),n.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},n.prototype.getCamera=function(){return this._camera},Object.defineProperty(n.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"PostProcess"},n.prototype.getEngine=function(){return this._engine},n.prototype.getEffect=function(){return this._effect},n.prototype.shareOutputWith=function(r){return this._disposeTextures(),this._shareOutputWithPostProcess=r,this},n.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new s.a(2)),this._shareOutputWithPostProcess=null},n.prototype.updateEffect=function(r,a,f,p,d,m,A,O){r===void 0&&(r=null),a===void 0&&(a=null),f===void 0&&(f=null),this._postProcessDefines=r,this._effect=this._engine.createEffect({vertex:A!=null?A:this._vertexUrl,fragment:O!=null?O:this._fragmentUrl},["position"],a||this._parameters,f||this._samplers,r!==null?r:"",void 0,d,m,p||this._indexParameters)},n.prototype.isReusable=function(){return this._reusable},n.prototype.markTextureDirty=function(){this.width=-1},n.prototype._createRenderTargetTexture=function(r,a,f){f===void 0&&(f=0);for(var p=0;p<this._textureCache.length;p++)if(this._textureCache[p].texture.width===r.width&&this._textureCache[p].texture.height===r.height&&this._textureCache[p].postProcessChannel===f)return this._textureCache[p].texture;var d=this._engine.createRenderTargetTexture(r,a);return this._textureCache.push({texture:d,postProcessChannel:f,lastUsedRenderId:-1}),d},n.prototype._flushTextureCache=function(){for(var r=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(r-this._textureCache[a].lastUsedRenderId>100){for(var f=!1,p=0;p<this._textures.length;p++)if(this._textures.data[p]===this._textureCache[a].texture){f=!0;break}f||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},n.prototype._resize=function(r,a,f,p,d){this._textures.length>0&&this._textures.reset(),this.width=r,this.height=a;var m={width:this.width,height:this.height},A={generateMipMaps:p,generateDepthBuffer:d||f._postProcesses.indexOf(this)===0,generateStencilBuffer:(d||f._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(m,A,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(m,A,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},n.prototype.activate=function(r,a,f){var p=this;a===void 0&&(a=null),r=r||this._camera;var d=r.getScene(),m=d.getEngine(),A=m.getCaps().maxTextureSize,O=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,R=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,b=r.parent;b&&(b.leftCamera==r||b.rightCamera==r)&&(O/=2);var D=this._options.width||O,L=this._options.height||R,U=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var F=m.currentViewport;F&&(D*=F.width,L*=F.height)}(U||this.alwaysForcePOT)&&(this._options.width||(D=m.needPOTTextures?E.a.GetExponentOfTwo(D,A,this.scaleMode):D),this._options.height||(L=m.needPOTTextures?E.a.GetExponentOfTwo(L,A,this.scaleMode):L)),(this.width!==D||this.height!==L)&&this._resize(D,L,r,U,f),this._textures.forEach(function(_){_.samples!==p.samples&&p._engine.updateRenderTargetTextureSampleCount(_,p.samples)}),this._flushTextureCache(),this._renderId++}var V;if(this._shareOutputWithPostProcess)V=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)V=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{V=this.inputTexture;for(var M=void 0,x=0;x<this._textureCache.length;x++)if(this._textureCache[x].texture===V){M=this._textureCache[x];break}M&&(M.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(O/D,R/L),this._engine.bindFramebuffer(V,0,O,R,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(V,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(r),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:d.clearColor,d._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),V},Object.defineProperty(n.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),n.prototype.isReady=function(){return this._effect&&this._effect.isReady()},n.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var r;return this._shareOutputWithPostProcess?r=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?r=this._forcedOutputTexture:r=this.inputTexture,this._effect._bindTexture("textureSampler",r),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},n.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},n.prototype._disposeTextureCache=function(){for(var r=this._textureCache.length-1;r>=0;r--)this._engine._releaseTexture(this._textureCache[r].texture);this._textureCache.length=0},n.prototype.setPrePassRenderer=function(r){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=r.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},n.prototype.dispose=function(r){r=r||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!r){if(r.detachPostProcess(this),a=r._postProcesses.indexOf(this),a===0&&r._postProcesses.length>0){var f=this._camera._getFirstPostProcess();f&&f.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},n.prototype.serialize=function(){var r=i.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return r.customType="BABYLON."+this.getClassName(),r.cameraId=a?a.id:null,r.reusable=this._reusable,r.textureType=this._textureType,r.fragmentUrl=this._fragmentUrl,r.parameters=this._parameters,r.samplers=this._samplers,r.options=this._options,r.defines=this._postProcessDefines,r.textureFormat=this._textureFormat,r.vertexUrl=this._vertexUrl,r.indexParameters=this._indexParameters,r},n.prototype.clone=function(){var r=this.serialize();r._engine=this._engine,r.cameraId=null;var a=n.Parse(r,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},n.Parse=function(r,a,f){var p=t.a.GetClass(r.customType);if(!p||!p._Parse)return null;var d=a?a.getCameraByID(r.cameraId):null;return p._Parse(r,d,a,f)},n._Parse=function(r,a,f,p){return i.a.Parse(function(){return new n(r.name,r.fragmentUrl,r.parameters,r.samplers,r.options,a,r.renderTargetSamplingMode,r._engine,r.reusable,r.defines,r.textureType,r.vertexUrl,r.indexParameters,!1,r.textureFormat)},r,f,p)},Object(l.c)([Object(i.c)()],n.prototype,"uniqueId",void 0),Object(l.c)([Object(i.c)()],n.prototype,"name",void 0),Object(l.c)([Object(i.c)()],n.prototype,"width",void 0),Object(l.c)([Object(i.c)()],n.prototype,"height",void 0),Object(l.c)([Object(i.c)()],n.prototype,"renderTargetSamplingMode",void 0),Object(l.c)([Object(i.f)()],n.prototype,"clearColor",void 0),Object(l.c)([Object(i.c)()],n.prototype,"autoClear",void 0),Object(l.c)([Object(i.c)()],n.prototype,"alphaMode",void 0),Object(l.c)([Object(i.c)()],n.prototype,"alphaConstants",void 0),Object(l.c)([Object(i.c)()],n.prototype,"enablePixelPerfectMode",void 0),Object(l.c)([Object(i.c)()],n.prototype,"forceFullscreenViewport",void 0),Object(l.c)([Object(i.c)()],n.prototype,"scaleMode",void 0),Object(l.c)([Object(i.c)()],n.prototype,"alwaysForcePOT",void 0),Object(l.c)([Object(i.c)("samples")],n.prototype,"_samples",void 0),Object(l.c)([Object(i.c)()],n.prototype,"adaptScaleToCurrentViewport",void 0),n}();t.a.RegisteredTypes["BABYLON.PostProcess"]=e},458:function(J,j,o){"use strict";o.d(j,"a",function(){return n});var l=o(434),s=o(438),C=o(443),v=o(436),c=o(442),E=o(590),h=o(591),i=o(500),t=o(522),e=o(445),n=function(r){Object(l.d)(a,r);function a(f,p,d,m,A,O,R,b,D,L,U,F,V,M){A===void 0&&(A=!0),O===void 0&&(O=0),R===void 0&&(R=!1),b===void 0&&(b=c.a.TRILINEAR_SAMPLINGMODE),D===void 0&&(D=!0),L===void 0&&(L=!1),U===void 0&&(U=!1),F===void 0&&(F=5),V===void 0&&(V=!1);var x,_=r.call(this,null,d,!m,void 0,b,void 0,void 0,void 0,void 0,F)||this;return _.renderParticles=!0,_.renderSprites=!1,_.ignoreCameraViewport=!1,_.onBeforeBindObservable=new s.c,_.onAfterUnbindObservable=new s.c,_.onBeforeRenderObservable=new s.c,_.onAfterRenderObservable=new s.c,_.onClearObservable=new s.c,_.onResizeObservable=new s.c,_._currentRefreshId=-1,_._refreshRate=1,_._samples=1,_.boundingBoxPosition=v.e.Zero(),d=_.getScene(),!d||(_._coordinatesMode=c.a.PROJECTION_MODE,_.renderList=new Array,_.name=f,_.isRenderTarget=!0,_._initialSizeParameter=p,_._processSizeParameter(p),_._resizeObserver=_.getScene().getEngine().onResizeObservable.add(function(){}),_._generateMipMaps=!!m,_._doNotChangeAspectRatio=A,_._renderingManager=new h.b(d),_._renderingManager._useSceneAutoClearSetup=!0,U)||(_._renderTargetOptions={generateMipMaps:m,type:O,format:(x=_._format)!==null&&x!==void 0?x:void 0,samplingMode:_.samplingMode,generateDepthBuffer:D,generateStencilBuffer:L,samples:M},_.samplingMode===c.a.NEAREST_SAMPLINGMODE&&(_.wrapU=c.a.CLAMP_ADDRESSMODE,_.wrapV=c.a.CLAMP_ADDRESSMODE),V||(R?(_._texture=d.getEngine().createRenderTargetCubeTexture(_.getRenderSize(),_._renderTargetOptions),_.coordinatesMode=c.a.INVCUBIC_MODE,_._textureMatrix=v.a.Identity()):_._texture=d.getEngine().createRenderTargetTexture(_._size,_._renderTargetOptions),M!==void 0&&(_.samples=M))),_}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(f){this._renderList=f,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(f){var p=this,d=f.push;f.push=function(){for(var A=[],O=0;O<arguments.length;O++)A[O]=arguments[O];var R=f.length===0,b=d.apply(f,A);return R&&p.getScene()&&p.getScene().meshes.forEach(function(D){D._markSubMeshesAsLightDirty()}),b};var m=f.splice;f.splice=function(A,O){var R=m.apply(f,[A,O]);return f.length===0&&p.getScene().meshes.forEach(function(b){b._markSubMeshesAsLightDirty()}),R}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(f){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(f){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(f){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(f){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(f){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(f))){this._boundingBoxSize=f;var p=this.getScene();p&&p.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var f;return((f=this.getInternalTexture())===null||f===void 0?void 0:f._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(f,p,d,m){var A;f===void 0&&(f=0),p===void 0&&(p=!0),d===void 0&&(d=!1),m===void 0&&(m=1);var O=this.getInternalTexture();if(!(!this.getScene()||!O)){(A=O._depthStencilTexture)===null||A===void 0||A.dispose();var R=this.getScene().getEngine();O._depthStencilTexture=R.createDepthStencilTexture(this._size,{bilinearFiltering:p,comparisonFunction:f,generateStencil:d,isCube:this.isCube,samples:m})}},a.prototype._processSizeParameter=function(f){if(f.ratio){this._sizeRatio=f.ratio;var p=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(p.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(p.getRenderHeight(),this._sizeRatio)}}else this._size=f},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(f){if(this._samples!==f){var p=this.getScene();!p||(this._samples=p.getEngine().updateRenderTargetTextureSampleCount(this._texture,f))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(f){this._refreshRate=f,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(f){if(!this._postProcessManager){var p=this.getScene();if(!p)return;this._postProcessManager=new E.a(p),this._postProcesses=new Array}this._postProcesses.push(f),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(f){if(f===void 0&&(f=!1),!!this._postProcesses){if(f)for(var p=0,d=this._postProcesses;p<d.length;p++){var m=d[p];m.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(f){if(!!this._postProcesses){var p=this._postProcesses.indexOf(f);p!==-1&&(this._postProcesses.splice(p,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var f=this._size.layers;return f||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(f){var p=Math.max(1,this.getRenderSize()*f);this.resize(p)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:r.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(f){var p=this.isCube;this.releaseInternalTexture();var d=this.getScene();!d||(this._processSizeParameter(f),p?this._texture=d.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=d.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(f,p){f===void 0&&(f=!1),p===void 0&&(p=!1);var d=this.getScene();if(!!d){var m=d.getEngine();if(this.useCameraPostProcesses!==void 0&&(f=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var A=0;A<this._waitingRenderList.length;A++){var O=this._waitingRenderList[A],R=d.getMeshByID(O);R&&this.renderList.push(R)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var d=this.getScene();if(!d)return;for(var b=d.meshes,A=0;A<b.length;A++){var D=b[A];this.renderListPredicate(D)&&this.renderList.push(D)}}this.onBeforeBindObservable.notifyObservers(this);var L;if(this.activeCamera?(L=this.activeCamera,m.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==d.activeCamera&&d.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(L=d.activeCamera,L&&m.setViewport(L.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var U=0;U<this.getRenderLayers();U++)this.renderToTarget(0,f,p,U,L),d.incrementRenderId(),d.resetCachedMaterial();else if(this.isCube)for(var F=0;F<6;F++)this.renderToTarget(F,f,p,void 0,L),d.incrementRenderId(),d.resetCachedMaterial();else this.renderToTarget(0,f,p,void 0,L);this.onAfterUnbindObservable.notifyObservers(this),d.activeCamera&&((d.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==d.activeCamera)&&d.setTransformMatrix(d.activeCamera.getViewMatrix(),d.activeCamera.getProjectionMatrix(!0)),m.setViewport(d.activeCamera.viewport)),d.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(f,p){var d=128,m=f*p,A=e.a.NearestPOT(m+d*d/(d+m));return Math.min(e.a.FloorPOT(f),A)},a.prototype._prepareRenderingManager=function(f,p,d,m){var A=this.getScene();if(!!A){this._renderingManager.reset();for(var O=A.getRenderId(),R=0;R<p;R++){var b=f[R];if(b&&!b.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(b,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!b.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!b._internalAbstractMeshDataInfo._currentLODIsUpToDate&&A.activeCamera&&(b._internalAbstractMeshDataInfo._currentLOD=A.customLODSelector?A.customLODSelector(b,A.activeCamera):b.getLOD(A.activeCamera),b._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!b._internalAbstractMeshDataInfo._currentLOD)continue;var D=b._internalAbstractMeshDataInfo._currentLOD;D._preActivateForIntermediateRendering(O);var L=void 0;if(m&&d?L=(b.layerMask&d.layerMask)==0:L=!1,b.isEnabled()&&b.isVisible&&b.subMeshes&&!L&&(D!==b&&D._activate(O,!0),b._activate(O,!0)&&b.subMeshes.length)){b.isAnInstance?b._internalAbstractMeshDataInfo._actAsRegularMesh&&(D=b):D._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,D._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var U=0;U<D.subMeshes.length;U++){var F=D.subMeshes[U];this._renderingManager.dispatch(F,D)}}}}for(var V=0;V<A.particleSystems.length;V++){var M=A.particleSystems[V],x=M.emitter;!M.isStarted()||!x||!x.position||!x.isEnabled()||f.indexOf(x)>=0&&this._renderingManager.dispatchParticles(M)}}},a.prototype._bindFrameBuffer=function(f,p){f===void 0&&(f=0),p===void 0&&(p=0);var d=this.getScene();if(!!d){var m=d.getEngine();this._texture&&m.bindFramebuffer(this._texture,this.isCube?f:void 0,void 0,void 0,this.ignoreCameraViewport,0,p)}},a.prototype.unbindFrameBuffer=function(f,p){var d=this;!this._texture||f.unBindFramebuffer(this._texture,this.isCube,function(){d.onAfterRenderObservable.notifyObservers(p)})},a.prototype._prepareFrame=function(f,p,d,m){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!m||!f.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(p,d)},a.prototype.renderToTarget=function(f,p,d,m,A){m===void 0&&(m=0),A===void 0&&(A=null);var O=this.getScene();if(!!O){var R=O.getEngine();if(!!this._texture){R._debugPushGroup("render to face #"+f+" layer #"+m,1),this._prepareFrame(O,f,m,p),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(m):this.onBeforeRenderObservable.notifyObservers(f);var b=null,D=this.renderList?this.renderList:O.getActiveMeshes().data,L=this.renderList?this.renderList.length:O.getActiveMeshes().length;this.getCustomRenderList&&(b=this.getCustomRenderList(this.is2DArray?m:f,D,L)),b?this._prepareRenderingManager(b,b.length,A,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(D,L,A,!this.renderList),this._defaultRenderListPrepared=!0),b=D);for(var U=0,F=O._beforeRenderTargetClearStage;U<F.length;U++){var V=F[U];V.action(this,f,m)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(R):R.clear(this.clearColor||O.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||O.updateTransformMatrix(!0);for(var M=0,x=O._beforeRenderTargetDrawStage;M<x.length;M++){var V=x[M];V.action(this,f,m)}this._renderingManager.render(this.customRenderFunction,b,this.renderParticles,this.renderSprites);for(var _=0,w=O._afterRenderTargetDrawStage;_<w.length;_++){var V=w[_];V.action(this,f,m)}var G=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,f,this._postProcesses,this.ignoreCameraViewport):p&&O.postProcessManager._finalizeFrame(!1,this._texture,f),this._texture.generateMipMaps=G,this._doNotChangeAspectRatio||O.updateTransformMatrix(!0),d&&C.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),R),this.unbindFrameBuffer(R,f),this.isCube&&f===5&&R.generateMipMapsForCubemap(this._texture),R._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(f,p,d,m){p===void 0&&(p=null),d===void 0&&(d=null),m===void 0&&(m=null),this._renderingManager.setRenderingOrder(f,p,d,m)},a.prototype.setRenderingAutoClearDepthStencil=function(f,p){this._renderingManager.setRenderingAutoClearDepthStencil(f,p),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var f=this.getSize(),p=new a(this.name,f,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return p.hasAlpha=this.hasAlpha,p.level=this.level,p.coordinatesMode=this.coordinatesMode,this.renderList&&(p.renderList=this.renderList.slice(0)),p},a.prototype.serialize=function(){if(!this.name)return null;var f=r.prototype.serialize.call(this);if(f.renderTargetSize=this.getRenderSize(),f.renderList=[],this.renderList)for(var p=0;p<this.renderList.length;p++)f.renderList.push(this.renderList[p].id);return f},a.prototype.disposeFramebufferObjects=function(){var f=this.getInternalTexture(),p=this.getScene();f&&p&&p.getEngine()._releaseFramebufferObjects(f)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var f=this.getScene();if(!!f){var p=f.customRenderTargets.indexOf(this);p>=0&&f.customRenderTargets.splice(p,1);for(var d=0,m=f.cameras;d<m.length;d++){var A=m[d];p=A.customRenderTargets.indexOf(this),p>=0&&A.customRenderTargets.splice(p,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),r.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(c.a);c.a._CreateRenderTargetTexture=function(r,a,f,p){return new n(r,a,f,p)}},466:function(J,j,o){"use strict";o.d(j,"a",function(){return s});var l=o(443),s=function(){function C(v,c,E,h){this._name=c,this._singleInstance=h||!0,this._getPostProcesses=E,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(C.prototype,"isSupported",{get:function(){for(var v in this._postProcesses)if(this._postProcesses.hasOwnProperty(v)){for(var c=this._postProcesses[v],E=0;E<c.length;E++)if(!c[E].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),C.prototype._update=function(){},C.prototype._attachCameras=function(v){var c=this,E,h=l.b.MakeArray(v||this._cameras);if(!!h)for(var i=0;i<h.length;i++){var t=h[i];if(!!t){var e=t.name;if(this._singleInstance?E=0:E=e,!this._postProcesses[E]){var n=this._getPostProcesses();n&&(this._postProcesses[E]=Array.isArray(n)?n:[n])}this._indicesForCamera[e]||(this._indicesForCamera[e]=[]),this._postProcesses[E].forEach(function(r){var a=t.attachPostProcess(r);c._indicesForCamera[e].push(a)}),this._cameras[e]||(this._cameras[e]=t)}}},C.prototype._detachCameras=function(v){var c=l.b.MakeArray(v||this._cameras);if(!!c)for(var E=0;E<c.length;E++){var h=c[E],i=h.name,t=this._postProcesses[this._singleInstance?0:i];t&&t.forEach(function(e){h.detachPostProcess(e)}),this._cameras[i]&&(this._cameras[i]=null)}},C.prototype._enable=function(v){var c=this,E=l.b.MakeArray(v||this._cameras);if(!!E)for(var h=0;h<E.length;h++)for(var i=E[h],t=i.name,e=0;e<this._indicesForCamera[t].length;e++)(i._postProcesses[this._indicesForCamera[t][e]]===void 0||i._postProcesses[this._indicesForCamera[t][e]]===null)&&this._postProcesses[this._singleInstance?0:t].forEach(function(n){E[h].attachPostProcess(n,c._indicesForCamera[t][e])})},C.prototype._disable=function(v){var c=l.b.MakeArray(v||this._cameras);if(!!c)for(var E=0;E<c.length;E++){var h=c[E],i=h.name;this._postProcesses[this._singleInstance?0:i].forEach(function(t){h.detachPostProcess(t)})}},C.prototype.getPostProcesses=function(v){return this._singleInstance?this._postProcesses[0]:v?this._postProcesses[v.name]:null},C}()},472:function(J,j,o){"use strict";o.d(j,"a",function(){return V});var l=o(434),s=o(444),C=o(442),v=o(435),c="kernelBlurVaryingDeclaration",E="varying vec2 sampleCoord{X};";v.a.IncludesShadersStore[c]=E;var h={name:c,shader:E},i=o(535),t="kernelBlurFragment",e=`#ifdef DOF
factor=sampleCoC(sampleCoord{X});
computedWeight=KERNEL_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif`;v.a.IncludesShadersStore[t]=e;var n={name:t,shader:e},r="kernelBlurFragment2",a=`#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});
computedWeight=KERNEL_DEP_WEIGHT{X}*factor;
sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif`;v.a.IncludesShadersStore[r]=a;var f={name:r,shader:a},p="kernelBlurPixelShader",d=`
uniform sampler2D textureSampler;
uniform vec2 delta;

varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;
uniform vec2 cameraMinMaxZ;
float sampleDistance(const in vec2 offset) {
float depth=texture2D(circleOfConfusionSampler,offset).g;
return cameraMinMaxZ.x+(cameraMinMaxZ.y-cameraMinMaxZ.x)*depth;
}
float sampleCoC(const in vec2 offset) {
float coc=texture2D(circleOfConfusionSampler,offset).r;
return coc;
}
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
void main(void)
{
float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT;
float factor=0.0;

#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;v.a.ShadersStore[p]=d;var m={name:p,shader:d},A="kernelBlurVertex",O="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";v.a.IncludesShadersStore[A]=O;var R={name:A,shader:O},b="kernelBlurVertexShader",D=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;v.a.ShadersStore[b]=D;var L={name:b,shader:D},U=o(437),F=o(439),V=function(M){Object(l.d)(x,M);function x(_,w,G,y,Y,Z,ce,W,le,ne,ee){Z===void 0&&(Z=C.a.BILINEAR_SAMPLINGMODE),le===void 0&&(le=0),ne===void 0&&(ne=""),ee===void 0&&(ee=!1);var ae=M.call(this,_,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],y,Y,Z,ce,W,null,le,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return ae.blockCompilation=ee,ae._packedFloat=!1,ae._staticDefines="",ae._staticDefines=ne,ae.direction=w,ae.onApplyObservable.add(function($){ae._outputTexture?$.setFloat2("delta",1/ae._outputTexture.width*ae.direction.x,1/ae._outputTexture.height*ae.direction.y):$.setFloat2("delta",1/ae.width*ae.direction.x,1/ae.height*ae.direction.y)}),ae.kernel=G,ae}return Object.defineProperty(x.prototype,"kernel",{get:function(){return this._idealKernel},set:function(_){this._idealKernel!==_&&(_=Math.max(_,1),this._idealKernel=_,this._kernel=this._nearestBestKernel(_),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(_){this._packedFloat!==_&&(this._packedFloat=_,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),x.prototype.getClassName=function(){return"BlurPostProcess"},x.prototype.updateEffect=function(_,w,G,y,Y,Z){_===void 0&&(_=null),w===void 0&&(w=null),G===void 0&&(G=null),this._updateParameters(Y,Z)},x.prototype._updateParameters=function(_,w){for(var G=this._kernel,y=(G-1)/2,Y=[],Z=[],ce=0,W=0;W<G;W++){var le=W/(G-1),ne=this._gaussianWeight(le*2-1);Y[W]=W-y,Z[W]=ne,ce+=ne}for(var W=0;W<Z.length;W++)Z[W]/=ce;for(var ee=[],ae=[],$=[],W=0;W<=y;W+=2){var z=Math.min(W+1,Math.floor(y)),me=W===z;if(me)$.push({o:Y[W],w:Z[W]});else{var Ee=z===y,se=Z[W]+Z[z]*(Ee?.5:1),ge=Y[W]+1/(1+Z[W]/Z[z]);ge===0?($.push({o:Y[W],w:Z[W]}),$.push({o:Y[W+1],w:Z[W+1]})):($.push({o:ge,w:se}),$.push({o:-ge,w:se}))}}for(var W=0;W<$.length;W++)ae[W]=$[W].o,ee[W]=$[W].w;Y=ae,Z=ee;var oe=this.getEngine().getCaps().maxVaryingVectors,_e=Math.max(oe,0)-1,ue=Math.min(Y.length,_e),B="";B+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(B+="#define CENTER_WEIGHT "+this._glslFloat(Z[ue-1])+`\r
`,ue--);for(var W=0;W<ue;W++)B+="#define KERNEL_OFFSET"+W+" "+this._glslFloat(Y[W])+`\r
`,B+="#define KERNEL_WEIGHT"+W+" "+this._glslFloat(Z[W])+`\r
`;for(var g=0,W=_e;W<Y.length;W++)B+="#define KERNEL_DEP_OFFSET"+g+" "+this._glslFloat(Y[W])+`\r
`,B+="#define KERNEL_DEP_WEIGHT"+g+" "+this._glslFloat(Z[W])+`\r
`,g++;this.packedFloat&&(B+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,M.prototype.updateEffect.call(this,B,null,null,{varyingCount:ue,depCount:g},_,w)},x.prototype._nearestBestKernel=function(_){for(var w=Math.round(_),G=0,y=[w,w-1,w+1,w-2,w+2];G<y.length;G++){var Y=y[G];if(Y%2!=0&&Math.floor(Y/2)%2==0&&Y>0)return Math.max(Y,3)}return Math.max(w,3)},x.prototype._gaussianWeight=function(_){var w=1/3,G=Math.sqrt(2*Math.PI)*w,y=-(_*_/(2*w*w)),Y=1/G*Math.exp(y);return Y},x.prototype._glslFloat=function(_,w){return w===void 0&&(w=8),_.toFixed(w).replace(/0+$/,"")},x._Parse=function(_,w,G,y){return F.a.Parse(function(){return new x(_.name,_.direction,_.kernel,_.options,w,_.renderTargetSamplingMode,G.getEngine(),_.reusable,_.textureType,void 0,!1)},_,G,y)},Object(l.c)([Object(F.c)("kernel")],x.prototype,"_kernel",void 0),Object(l.c)([Object(F.c)("packedFloat")],x.prototype,"_packedFloat",void 0),Object(l.c)([Object(F.n)()],x.prototype,"direction",void 0),x}(s.a);U.a.RegisteredTypes["BABYLON.BlurPostProcess"]=V},479:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var l=o(434),s=o(440),C=o(442),v=o(532),c=o(596),E=function(h){Object(l.d)(i,h);function i(t,e,n,r,a,f,p){n===void 0&&(n=null),r===void 0&&(r=!1),a===void 0&&(a=3),f===void 0&&(f=5);var d=h.call(this,null,n,!r,p,a,void 0,void 0,void 0,void 0,f)||this;d.name=t,d.wrapU=C.a.CLAMP_ADDRESSMODE,d.wrapV=C.a.CLAMP_ADDRESSMODE,d._generateMipMaps=r;var m=d._getEngine();if(!m)return d;e.getContext?(d._canvas=e,d._texture=m.createDynamicTexture(e.width,e.height,r,a)):(d._canvas=c.a.CreateCanvas(1,1),e.width||e.width===0?d._texture=m.createDynamicTexture(e.width,e.height,r,a):d._texture=m.createDynamicTexture(e,e,r,a));var A=d.getSize();return d._canvas.width=A.width,d._canvas.height=A.height,d._context=d._canvas.getContext("2d"),d}return i.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(i.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),i.prototype._recreate=function(t){this._canvas.width=t.width,this._canvas.height=t.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(t.width,t.height,this._generateMipMaps,this.samplingMode)},i.prototype.scale=function(t){var e=this.getSize();e.width*=t,e.height*=t,this._recreate(e)},i.prototype.scaleTo=function(t,e){var n=this.getSize();n.width=t,n.height=e,this._recreate(n)},i.prototype.getContext=function(){return this._context},i.prototype.clear=function(){var t=this.getSize();this._context.fillRect(0,0,t.width,t.height)},i.prototype.update=function(t,e){e===void 0&&(e=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,t===void 0?!0:t,e,this._format||void 0)},i.prototype.drawText=function(t,e,n,r,a,f,p,d){d===void 0&&(d=!0);var m=this.getSize();if(f&&(this._context.fillStyle=f,this._context.fillRect(0,0,m.width,m.height)),this._context.font=r,e==null){var A=this._context.measureText(t);e=(m.width-A.width)/2}if(n==null){var O=parseInt(r.replace(/\D/g,""));n=m.height/2+O/3.65}this._context.fillStyle=a||"",this._context.fillText(t,e,n),d&&this.update(p)},i.prototype.clone=function(){var t=this.getScene();if(!t)return this;var e=this.getSize(),n=new i(this.name,e,t,this._generateMipMaps);return n.hasAlpha=this.hasAlpha,n.level=this.level,n.wrapU=this.wrapU,n.wrapV=this.wrapV,n},i.prototype.serialize=function(){var t=this.getScene();t&&!t.isReady()&&s.a.Warn("The scene must be ready before serializing the dynamic texture");var e=h.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(e.base64String=this._canvas.toDataURL()),e.invertY=this._invertY,e.samplingMode=this.samplingMode,e},i.prototype._IsCanvasElement=function(t){return t.toDataURL!==void 0},i.prototype._rebuild=function(){this.update()},i}(C.a)},481:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var l=o(434),s=o(443),C=o(439),v=function(){function c(E,h){this.engine=E,this._name=h,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(c.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(c.prototype,"isSupported",{get:function(){for(var E in this._renderEffects)if(this._renderEffects.hasOwnProperty(E)&&!this._renderEffects[E].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),c.prototype.addEffect=function(E){this._renderEffects[E._name]=E},c.prototype._rebuild=function(){},c.prototype._enableEffect=function(E,h){var i=this._renderEffects[E];!i||i._enable(s.b.MakeArray(h||this._cameras))},c.prototype._disableEffect=function(E,h){var i=this._renderEffects[E];!i||i._disable(s.b.MakeArray(h||this._cameras))},c.prototype._attachCameras=function(E,h){var i=s.b.MakeArray(E||this._cameras);if(!!i){var t=[],e;for(e=0;e<i.length;e++){var n=i[e];if(!!n){var r=n.name;this._cameras.indexOf(n)===-1?this._cameras[r]=n:h&&t.push(e)}}for(e=0;e<t.length;e++)i.splice(t[e],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(i)}},c.prototype._detachCameras=function(E){var h=s.b.MakeArray(E||this._cameras);if(!!h){for(var i in this._renderEffects)this._renderEffects.hasOwnProperty(i)&&this._renderEffects[i]._detachCameras(h);for(var t=0;t<h.length;t++)this._cameras.splice(this._cameras.indexOf(h[t]),1)}},c.prototype._update=function(){for(var E in this._renderEffects)this._renderEffects.hasOwnProperty(E)&&this._renderEffects[E]._update();for(var h=0;h<this._cameras.length;h++)if(!!this._cameras[h]){var i=this._cameras[h].name;this._renderEffectsForIsolatedPass[i]&&this._renderEffectsForIsolatedPass[i]._update()}},c.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},c.prototype._enableMSAAOnFirstPostProcess=function(E){if(!this.engine._features.supportMSAA)return!1;var h=Object.keys(this._renderEffects);if(h.length>0){var i=this._renderEffects[h[0]].getPostProcesses();i&&(i[0].samples=E)}return!0},c.prototype.setPrePassRenderer=function(E){return!1},c.prototype.dispose=function(){},Object(l.c)([Object(C.c)()],c.prototype,"_name",void 0),c}()},482:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var l=o(452),s=o(548),C=o(449);Object.defineProperty(C.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var c=this._getComponent(l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);c||(c=new v(this),this._addComponent(c)),this._postProcessRenderPipelineManager=new s.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var v=function(){function c(E){this.name=l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(l.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},c.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},c.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},c}()},486:function(J,j,o){"use strict";o.d(j,"b",function(){return a}),o.d(j,"a",function(){return f});var l=o(434),s=o(444),C=o(445),v=o(435),c="passPixelShader",E=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;v.a.ShadersStore[c]=E;var h={name:c,shader:E},i="passCubePixelShader",t=`
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
}`;v.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(p){Object(l.d)(d,p);function d(m,A,O,R,b,D,L,U){return O===void 0&&(O=null),L===void 0&&(L=0),U===void 0&&(U=!1),p.call(this,m,"pass",null,null,A,O,R,b,D,void 0,L,void 0,null,U)||this}return d.prototype.getClassName=function(){return"PassPostProcess"},d._Parse=function(m,A,O,R){return r.a.Parse(function(){return new d(m.name,m.options,A,m.renderTargetSamplingMode,m._engine,m.reusable)},m,O,R)},d}(s.a);n.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var f=function(p){Object(l.d)(d,p);function d(m,A,O,R,b,D,L,U){O===void 0&&(O=null),L===void 0&&(L=0),U===void 0&&(U=!1);var F=p.call(this,m,"passCube",null,null,A,O,R,b,D,"#define POSITIVEX",L,void 0,null,U)||this;return F._face=0,F}return Object.defineProperty(d.prototype,"face",{get:function(){return this._face},set:function(m){if(!(m<0||m>5))switch(this._face=m,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),d.prototype.getClassName=function(){return"PassCubePostProcess"},d._Parse=function(m,A,O,R){return r.a.Parse(function(){return new d(m.name,m.options,A,m.renderTargetSamplingMode,m._engine,m.reusable)},m,O,R)},d}(s.a);C.a._RescalePostProcessFactory=function(p){return new a("rescale",1,null,2,p,!1,0)}},498:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var l=o(434),s=o(439),C=o(436),v=o(441),c=o(453),E=o(484);c.a.AddNodeConstructor("Light_Type_3",function(i,t){return function(){return new h(i,C.e.Zero(),t)}});var h=function(i){Object(l.d)(t,i);function t(e,n,r){var a=i.call(this,e,r)||this;return a.groundColor=new v.a(0,0,0),a.direction=n||C.e.Up(),a}return t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.getClassName=function(){return"HemisphericLight"},t.prototype.setDirectionToTarget=function(e){return this.direction=C.e.Normalize(e.subtract(C.e.Zero())),this.direction},t.prototype.getShadowGenerator=function(){return null},t.prototype.transferToEffect=function(e,n){var r=C.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",r.x,r.y,r.z,0,n),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),n),this},t.prototype.transferToNodeMaterialEffect=function(e,n){var r=C.e.Normalize(this.direction);return e.setFloat3(n,r.x,r.y,r.z),this},t.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=C.a.Identity()),this._worldMatrix},t.prototype.getTypeID=function(){return E.a.LIGHTTYPEID_HEMISPHERICLIGHT},t.prototype.prepareLightSpecificDefines=function(e,n){e["HEMILIGHT"+n]=!0},Object(l.c)([Object(s.e)()],t.prototype,"groundColor",void 0),Object(l.c)([Object(s.o)()],t.prototype,"direction",void 0),t}(E.a)},500:function(J,j,o){"use strict";var l=o(434),s=o(456),C=o(440),v=o(595),c=o(467);c.a.prototype.createRenderTargetTexture=function(E,h){var i=new v.a;h!==void 0&&typeof h=="object"?(i.generateMipMaps=h.generateMipMaps,i.generateDepthBuffer=!!h.generateDepthBuffer,i.generateStencilBuffer=!!h.generateStencilBuffer,i.type=h.type===void 0?0:h.type,i.samplingMode=h.samplingMode===void 0?3:h.samplingMode,i.format=h.format===void 0?5:h.format):(i.generateMipMaps=h,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,C.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var t=this._gl,e=new s.a(this,s.b.RenderTarget),n=E.width||E,r=E.height||E,a=E.layers||0,f=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),p=a!==0?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D,d=this._getRGBABufferInternalSizedFormat(i.type,i.format),m=this._getInternalFormat(i.format),A=this._getWebGLTextureType(i.type);this._bindTextureDirectly(p,e),a!==0?(e.is2DArray=!0,t.texImage3D(p,0,d,n,r,a,0,m,A,null)):t.texImage2D(p,0,d,n,r,0,m,A,null),t.texParameteri(p,t.TEXTURE_MAG_FILTER,f.mag),t.texParameteri(p,t.TEXTURE_MIN_FILTER,f.min),t.texParameteri(p,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(p,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(p),this._bindTextureDirectly(p,null);var O=this._currentFramebuffer,R=t.createFramebuffer();return this._bindUnboundFramebuffer(R),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,n,r),e.is2DArray||t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(O),e._framebuffer=R,e.baseWidth=n,e.baseHeight=r,e.width=n,e.height=r,e.depth=a,e.isReady=!0,e.samples=1,e.generateMipMaps=!!i.generateMipMaps,e.samplingMode=i.samplingMode,e.type=i.type,e.format=i.format,e._generateDepthBuffer=i.generateDepthBuffer,e._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(e),e},c.a.prototype.createDepthStencilTexture=function(E,h){if(h.isCube){var i=E.width||E;return this._createDepthStencilCubeTexture(i,h)}else return this._createDepthStencilTexture(E,h)},c.a.prototype._createDepthStencilTexture=function(E,h){var i=this._gl,t=E.layers||0,e=t!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,n=new s.a(this,s.b.Depth);if(!this._caps.depthTextureExtension)return C.a.Error("Depth texture is not supported by your browser or hardware."),n;var r=Object(l.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},h);this._bindTextureDirectly(e,n,!0),this._setupDepthStencilTexture(n,E,r.generateStencil,r.bilinearFiltering,r.comparisonFunction);var a=r.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,f=r.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,p=f;return this.webGLVersion>1&&(p=r.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),n.is2DArray?i.texImage3D(e,0,p,n.width,n.height,t,0,f,a,null):i.texImage2D(e,0,p,n.width,n.height,0,f,a,null),this._bindTextureDirectly(e,null),n}},502:function(J,j,o){"use strict";o.d(j,"a",function(){return ae});var l=o(436),s=o(447),C=o(442),v=o(538),c=o(454),E=o(441),h=o(455),i=o(533),t=o(476),e=o(459),n=o(435),r="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;n.a.IncludesShadersStore[r]=a;var f={name:r,shader:a},p=o(614),d=o(615),m=o(616),A="geometryPixelShader",O=`#extension GL_EXT_draw_buffers : require
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
#ifdef BUMP
varying mat4 vWorldView;
varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#ifdef VELOCITY
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
#ifdef NEED_UV
varying vec2 vUV;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;
uniform vec2 vTangentSpaceParams;
#endif
#if defined(REFLECTIVITY) && (defined(HAS_SPECULAR) || defined(HAS_REFLECTIVITY))
varying vec2 vReflectivityUV;
uniform sampler2D reflectivitySampler;
#endif
#ifdef ALPHATEST
uniform sampler2D diffuseSampler;
#endif
#include<mrtFragmentDeclaration>[RENDER_TARGET_COUNT]
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
void main() {
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
vec3 normalOutput;
#ifdef BUMP
vec3 normalW=normalize(vNormalW);
#include<bumpFragment>
normalOutput=normalize(vec3(vWorldView*vec4(normalW,0.0)));
#else
normalOutput=normalize(vNormalV);
#endif
#ifdef PREPASS
#ifdef PREPASS_DEPTH
gl_FragData[DEPTH_INDEX]=vec4(vViewPos.z/vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef PREPASS_NORMAL
gl_FragData[NORMAL_INDEX]=vec4(normalOutput,1.0);
#endif
#else
gl_FragData[0]=vec4(vViewPos.z/vViewPos.w,0.0,0.0,1.0);
gl_FragData[1]=vec4(normalOutput,1.0);
#endif
#ifdef POSITION
gl_FragData[POSITION_INDEX]=vec4(vPositionW,1.0);
#endif
#ifdef VELOCITY
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;
vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;
vec2 velocity=abs(a-b);
velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;
gl_FragData[VELOCITY_INDEX]=vec4(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
#ifdef HAS_SPECULAR

vec4 reflectivity=texture2D(reflectivitySampler,vReflectivityUV);
#elif HAS_REFLECTIVITY

vec4 reflectivity=vec4(texture2D(reflectivitySampler,vReflectivityUV).rgb,1.0);
#else
vec4 reflectivity=vec4(0.0,0.0,0.0,1.0);
#endif
gl_FragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
}
`;n.a.ShadersStore[A]=O;var R={name:A,shader:O},b=o(487),D=o(496),L=o(497),U=o(501),F="geometryVertexDeclaration",V=`
uniform mat4 viewProjection;
uniform mat4 view;`;n.a.IncludesShadersStore[F]=V;var M={name:F,shader:V},x=o(674),_="geometryUboDeclaration",w="#include<sceneUboDeclaration>";n.a.IncludesShadersStore[_]=w;var G={name:_,shader:w},y=o(507),Y=o(508),Z=o(488),ce=o(489),W=o(675),le="geometryVertexShader",ne=`precision highp float;
#include<bonesDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<__decl__geometryVertex>
attribute vec3 position;
attribute vec3 normal;
#ifdef NEED_UV
varying vec2 vUV;
#ifdef ALPHATEST
uniform mat4 diffuseMatrix;
#endif
#ifdef BUMP
uniform mat4 bumpMatrix;
varying vec2 vBumpUV;
#endif
#ifdef REFLECTIVITY
uniform mat4 reflectivityMatrix;
varying vec2 vReflectivityUV;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef BUMP
varying mat4 vWorldView;
#endif
#ifdef BUMP
varying vec3 vNormalW;
#else
varying vec3 vNormalV;
#endif
varying vec4 vViewPos;
#if defined(POSITION) || defined(BUMP)
varying vec3 vPositionW;
#endif
#ifdef VELOCITY
uniform mat4 previousWorld;
uniform mat4 previousViewProjection;
#ifdef BONES_VELOCITY_ENABLED
#if NUM_BONE_INFLUENCERS>0
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#endif
varying vec4 vCurrentPosition;
varying vec4 vPreviousPosition;
#endif
void main(void)
{
vec3 positionUpdated=position;
vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if defined(VELOCITY) && !defined(BONES_VELOCITY_ENABLED)

vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vPreviousPosition=previousViewProjection*previousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
vec4 pos=vec4(finalWorld*vec4(positionUpdated,1.0));
#ifdef BUMP
vWorldView=view*finalWorld;
vNormalW=normalUpdated;
#else
vNormalV=normalize(vec3((view*finalWorld)*vec4(normalUpdated,0.0)));
#endif
vViewPos=view*pos;
#if defined(VELOCITY) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;
previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*previousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*previousWorld*vec4(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vPositionW=pos.xyz/pos.w;
#endif
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#else
vUV=uv;
#endif
#ifdef BUMP_UV1
vBumpUV=vec2(bumpMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV1
vReflectivityUV=vec2(reflectivityMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#else
vUV=uv2;
#endif
#ifdef BUMP_UV2
vBumpUV=vec2(bumpMatrix*vec4(uv2,1.0,0.0));
#endif
#ifdef REFLECTIVITY_UV2
vReflectivityUV=vec2(reflectivityMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#endif
#include<bumpVertex>
}
`;n.a.ShadersStore[le]=ne;var ee={name:le,shader:ne},ae=function(){function $(z,me){me===void 0&&(me=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=z,this._ratio=me,this._useUbo=z.getEngine().supportsUniformBuffers,$._SceneComponentInitialization(this._scene),this._createRenderTargets()}return $.prototype._linkPrePassRenderer=function(z){this._linkedWithPrePass=!0,this._prePassRenderer=z,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(me){}))},$.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},$.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},$.prototype._forceTextureType=function(z,me){z===$.POSITION_TEXTURE_TYPE?(this._positionIndex=me,this._enablePosition=!0):z===$.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=me,this._enableVelocity=!0):z===$.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=me,this._enableReflectivity=!0):z===$.DEPTH_TEXTURE_TYPE?this._depthIndex=me:z===$.NORMAL_TEXTURE_TYPE&&(this._normalIndex=me)},$.prototype._setAttachments=function(z){this._attachments=z},$.prototype._linkInternalTexture=function(z){this._multiRenderTarget._texture=z},Object.defineProperty($.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(z){this._multiRenderTarget.renderList=z},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),$.prototype.getTextureIndex=function(z){switch(z){case $.POSITION_TEXTURE_TYPE:return this._positionIndex;case $.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case $.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty($.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(z){this._enablePosition=z,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(z){this._enableVelocity=z,z||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(z){this._enableReflectivity=z,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),$.prototype.isReady=function(z,me){var Ee=z.getMaterial();if(Ee&&Ee.disableDepthWrite)return!1;var se=[],ge=[s.b.PositionKind,s.b.NormalKind],oe=z.getMesh();if(Ee){var _e=!1;Ee.needAlphaTesting()&&Ee.getAlphaTestTexture()&&(se.push("#define ALPHATEST"),se.push("#define ALPHATEST_UV"+(Ee.getAlphaTestTexture().coordinatesIndex+1)),_e=!0),Ee.bumpTexture&&h.a.BumpTextureEnabled&&(se.push("#define BUMP"),se.push("#define BUMP_UV"+(Ee.bumpTexture.coordinatesIndex+1)),_e=!0),this._enableReflectivity&&(Ee instanceof h.a&&Ee.specularTexture?(se.push("#define HAS_SPECULAR"),se.push("#define REFLECTIVITY_UV"+(Ee.specularTexture.coordinatesIndex+1)),_e=!0):Ee instanceof i.a&&Ee.reflectivityTexture&&(se.push("#define HAS_REFLECTIVITY"),se.push("#define REFLECTIVITY_UV"+(Ee.reflectivityTexture.coordinatesIndex+1)),_e=!0)),_e&&(se.push("#define NEED_UV"),oe.isVerticesDataPresent(s.b.UVKind)&&(ge.push(s.b.UVKind),se.push("#define UV1")),oe.isVerticesDataPresent(s.b.UV2Kind)&&(ge.push(s.b.UV2Kind),se.push("#define UV2")))}this._linkedWithPrePass&&(se.push("#define PREPASS"),this._depthIndex!==-1&&(se.push("#define DEPTH_INDEX "+this._depthIndex),se.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(se.push("#define NORMAL_INDEX "+this._normalIndex),se.push("#define PREPASS_NORMAL"))),this._enablePosition&&(se.push("#define POSITION"),se.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(se.push("#define VELOCITY"),se.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(oe)===-1&&se.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(se.push("#define REFLECTIVITY"),se.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),oe.useBones&&oe.computeBonesUsingShaders?(ge.push(s.b.MatricesIndicesKind),ge.push(s.b.MatricesWeightsKind),oe.numBoneInfluencers>4&&(ge.push(s.b.MatricesIndicesExtraKind),ge.push(s.b.MatricesWeightsExtraKind)),se.push("#define NUM_BONE_INFLUENCERS "+oe.numBoneInfluencers),se.push("#define BonesPerMesh "+(oe.skeleton?oe.skeleton.bones.length+1:0))):se.push("#define NUM_BONE_INFLUENCERS 0");var ue=oe.morphTargetManager,B=0;ue&&ue.numInfluencers>0&&(B=ue.numInfluencers,se.push("#define MORPHTARGETS"),se.push("#define NUM_MORPH_INFLUENCERS "+B),ue.isUsingTextureForTargets&&se.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(ge,oe,B)),me&&(se.push("#define INSTANCES"),c.a.PushAttributesForInstances(ge),z.getRenderingMesh().hasThinInstances&&se.push("#define THIN_INSTANCES")),this._linkedWithPrePass?se.push("#define RENDER_TARGET_COUNT "+this._attachments.length):se.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var g=se.join(`
`);return this._cachedDefines!==g&&(this._cachedDefines=g,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:ge,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:g,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:B}},this._scene.getEngine())),this._effect.isReady()},$.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty($.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(z){this._multiRenderTarget.samples=z},enumerable:!1,configurable:!0}),$.prototype.dispose=function(){if(this._resizeObserver){var z=this._scene.getEngine();z.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},$.prototype._assignRenderTargetIndices=function(){var z=2;return this._enablePosition&&(this._positionIndex=z,z++),this._enableVelocity&&(this._velocityIndex=z,z++),this._enableReflectivity&&(this._reflectivityIndex=z,z++),z},$.prototype._createRenderTargets=function(){var z=this,me=this._scene.getEngine(),Ee=this._assignRenderTargetIndices();if(this._multiRenderTarget=new v.a("gBuffer",{width:me.getRenderWidth()*this._ratio,height:me.getRenderHeight()*this._ratio},Ee,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=C.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=C.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(ge){ge.clear(new E.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=me.onResizeObservable.add(function(){z._multiRenderTarget&&z._multiRenderTarget.resize({width:me.getRenderWidth()*z._ratio,height:me.getRenderHeight()*z._ratio})});var se=function(ge){var oe=ge.getRenderingMesh(),_e=ge.getEffectiveMesh(),ue=z._scene,B=ue.getEngine(),g=ge.getMaterial();if(!!g){if(_e._internalAbstractMeshDataInfo._isActiveIntermediate=!1,z._enableVelocity&&!z._previousTransformationMatrices[_e.uniqueId]&&(z._previousTransformationMatrices[_e.uniqueId]={world:l.a.Identity(),viewProjection:ue.getTransformMatrix()},oe.skeleton)){var N=oe.skeleton.getTransformMatrices(oe);z._previousBonesTransformationMatrices[oe.uniqueId]=z._copyBonesTransformationMatrices(N,new Float32Array(N.length))}var I=oe._getInstancesRenderList(ge._id,!!ge.getReplacementMesh());if(!I.mustReturn){var k=B.getCaps().instancedArrays&&(I.visibleInstances[ge._id]!==null||oe.hasThinInstances),K=_e.getWorldMatrix();if(z.isReady(ge,k)){if(B.enableEffect(z._effect),oe._bind(ge,z._effect,g.fillMode),z._useUbo?(c.a.FinalizeSceneUbo(z._scene),c.a.BindSceneUniformBuffer(z._effect,z._scene.getSceneUniformBuffer())):(z._effect.setMatrix("viewProjection",ue.getTransformMatrix()),z._effect.setMatrix("view",ue.getViewMatrix())),g){var P,q=oe._instanceDataStorage;if(!q.isFrozen&&(g.backFaceCulling||g.overrideMaterialSideOrientation!==null)){var pe=_e._getWorldMatrixDeterminant();P=g.overrideMaterialSideOrientation,P==null&&(P=g.sideOrientation),pe<0&&(P=P===e.a.ClockWiseSideOrientation?e.a.CounterClockWiseSideOrientation:e.a.ClockWiseSideOrientation)}else P=q.sideOrientation;if(g._preBind(z._effect,P),g.needAlphaTesting()){var Te=g.getAlphaTestTexture();Te&&(z._effect.setTexture("diffuseSampler",Te),z._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}g.bumpTexture&&ue.getEngine().getCaps().standardDerivatives&&h.a.BumpTextureEnabled&&(z._effect.setFloat3("vBumpInfos",g.bumpTexture.coordinatesIndex,1/g.bumpTexture.level,g.parallaxScaleBias),z._effect.setMatrix("bumpMatrix",g.bumpTexture.getTextureMatrix()),z._effect.setTexture("bumpSampler",g.bumpTexture),z._effect.setFloat2("vTangentSpaceParams",g.invertNormalMapX?-1:1,g.invertNormalMapY?-1:1)),z._enableReflectivity&&(g instanceof h.a&&g.specularTexture?(z._effect.setMatrix("reflectivityMatrix",g.specularTexture.getTextureMatrix()),z._effect.setTexture("reflectivitySampler",g.specularTexture)):g instanceof i.a&&g.reflectivityTexture&&(z._effect.setMatrix("reflectivityMatrix",g.reflectivityTexture.getTextureMatrix()),z._effect.setTexture("reflectivitySampler",g.reflectivityTexture)))}oe.useBones&&oe.computeBonesUsingShaders&&oe.skeleton&&(z._effect.setMatrices("mBones",oe.skeleton.getTransformMatrices(oe)),z._enableVelocity&&z._effect.setMatrices("mPreviousBones",z._previousBonesTransformationMatrices[oe.uniqueId])),c.a.BindMorphTargetParameters(oe,z._effect),oe.morphTargetManager&&oe.morphTargetManager.isUsingTextureForTargets&&oe.morphTargetManager._bind(z._effect),z._enableVelocity&&(z._effect.setMatrix("previousWorld",z._previousTransformationMatrices[_e.uniqueId].world),z._effect.setMatrix("previousViewProjection",z._previousTransformationMatrices[_e.uniqueId].viewProjection)),oe._processRendering(_e,ge,z._effect,g.fillMode,I,k,function(Ae,Ce){return z._effect.setMatrix("world",Ce)})}z._enableVelocity&&(z._previousTransformationMatrices[_e.uniqueId].world=K.clone(),z._previousTransformationMatrices[_e.uniqueId].viewProjection=z._scene.getTransformMatrix().clone(),oe.skeleton&&z._copyBonesTransformationMatrices(oe.skeleton.getTransformMatrices(oe),z._previousBonesTransformationMatrices[_e.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(ge,oe,_e,ue){var B;if(z._linkedWithPrePass){if(!z._prePassRenderer.enabled)return;z._scene.getEngine().bindAttachments(z._attachments)}if(ue.length){for(me.setColorWrite(!1),B=0;B<ue.length;B++)se(ue.data[B]);me.setColorWrite(!0)}for(B=0;B<ge.length;B++)se(ge.data[B]);for(me.setDepthWrite(!1),B=0;B<oe.length;B++)se(oe.data[B]);if(z.renderTransparentMeshes)for(B=0;B<_e.length;B++)se(_e.data[B]);me.setDepthWrite(!0)}}},$.prototype._copyBonesTransformationMatrices=function(z,me){for(var Ee=0;Ee<z.length;Ee++)me[Ee]=z[Ee];return me},$.DEPTH_TEXTURE_TYPE=0,$.NORMAL_TEXTURE_TYPE=1,$.POSITION_TEXTURE_TYPE=2,$.VELOCITY_TEXTURE_TYPE=3,$.REFLECTIVITY_TEXTURE_TYPE=4,$._SceneComponentInitialization=function(z){throw t.a.WarnImport("GeometryBufferRendererSceneComponent")},$}()},513:function(J,j,o){"use strict";o.d(j,"a",function(){return E}),o.d(j,"b",function(){return h});var l=o(436),s=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],C=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],v=function(i,t){return s[i]*C[i](t)},c=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],E=function(){function i(){this.preScaled=!1,this.l00=l.e.Zero(),this.l1_1=l.e.Zero(),this.l10=l.e.Zero(),this.l11=l.e.Zero(),this.l2_2=l.e.Zero(),this.l2_1=l.e.Zero(),this.l20=l.e.Zero(),this.l21=l.e.Zero(),this.l22=l.e.Zero()}return i.prototype.addLight=function(t,e,n){var r=new l.e(e.r,e.g,e.b),a=r.scale(n);this.l00=this.l00.add(a.scale(v(0,t))),this.l1_1=this.l1_1.add(a.scale(v(1,t))),this.l10=this.l10.add(a.scale(v(2,t))),this.l11=this.l11.add(a.scale(v(3,t))),this.l2_2=this.l2_2.add(a.scale(v(4,t))),this.l2_1=this.l2_1.add(a.scale(v(5,t))),this.l20=this.l20.add(a.scale(v(6,t))),this.l21=this.l21.add(a.scale(v(7,t))),this.l22=this.l22.add(a.scale(v(8,t)))},i.prototype.scaleInPlace=function(t){this.l00.scaleInPlace(t),this.l1_1.scaleInPlace(t),this.l10.scaleInPlace(t),this.l11.scaleInPlace(t),this.l2_2.scaleInPlace(t),this.l2_1.scaleInPlace(t),this.l20.scaleInPlace(t),this.l21.scaleInPlace(t),this.l22.scaleInPlace(t)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(c[0]),this.l1_1.scaleInPlace(c[1]),this.l10.scaleInPlace(c[2]),this.l11.scaleInPlace(c[3]),this.l2_2.scaleInPlace(c[4]),this.l2_1.scaleInPlace(c[5]),this.l20.scaleInPlace(c[6]),this.l21.scaleInPlace(c[7]),this.l22.scaleInPlace(c[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(s[0]),this.l1_1.scaleInPlace(s[1]),this.l10.scaleInPlace(s[2]),this.l11.scaleInPlace(s[3]),this.l2_2.scaleInPlace(s[4]),this.l2_1.scaleInPlace(s[5]),this.l20.scaleInPlace(s[6]),this.l21.scaleInPlace(s[7]),this.l22.scaleInPlace(s[8])},i.FromArray=function(t){var e=new i;return l.e.FromArrayToRef(t[0],0,e.l00),l.e.FromArrayToRef(t[1],0,e.l1_1),l.e.FromArrayToRef(t[2],0,e.l10),l.e.FromArrayToRef(t[3],0,e.l11),l.e.FromArrayToRef(t[4],0,e.l2_2),l.e.FromArrayToRef(t[5],0,e.l2_1),l.e.FromArrayToRef(t[6],0,e.l20),l.e.FromArrayToRef(t[7],0,e.l21),l.e.FromArrayToRef(t[8],0,e.l22),e},i.FromPolynomial=function(t){var e=new i;return e.l00=t.xx.scale(.376127).add(t.yy.scale(.376127)).add(t.zz.scale(.376126)),e.l1_1=t.y.scale(.977204),e.l10=t.z.scale(.977204),e.l11=t.x.scale(.977204),e.l2_2=t.xy.scale(1.16538),e.l2_1=t.yz.scale(1.16538),e.l20=t.zz.scale(1.34567).subtract(t.xx.scale(.672834)).subtract(t.yy.scale(.672834)),e.l21=t.zx.scale(1.16538),e.l22=t.xx.scale(1.16538).subtract(t.yy.scale(1.16538)),e.l1_1.scaleInPlace(-1),e.l11.scaleInPlace(-1),e.l2_1.scaleInPlace(-1),e.l21.scaleInPlace(-1),e.scaleInPlace(Math.PI),e},i}(),h=function(){function i(){this.x=l.e.Zero(),this.y=l.e.Zero(),this.z=l.e.Zero(),this.xx=l.e.Zero(),this.yy=l.e.Zero(),this.zz=l.e.Zero(),this.xy=l.e.Zero(),this.yz=l.e.Zero(),this.zx=l.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=E.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(t){var e=new l.e(t.r,t.g,t.b);this.xx=this.xx.add(e),this.yy=this.yy.add(e),this.zz=this.zz.add(e)},i.prototype.scaleInPlace=function(t){this.x.scaleInPlace(t),this.y.scaleInPlace(t),this.z.scaleInPlace(t),this.xx.scaleInPlace(t),this.yy.scaleInPlace(t),this.zz.scaleInPlace(t),this.yz.scaleInPlace(t),this.zx.scaleInPlace(t),this.xy.scaleInPlace(t)},i.FromHarmonics=function(t){var e=new i;return e._harmonics=t,e.x=t.l11.scale(1.02333).scale(-1),e.y=t.l1_1.scale(1.02333).scale(-1),e.z=t.l10.scale(1.02333),e.xx=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).add(t.l22.scale(.429043)),e.yy=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).subtract(t.l22.scale(.429043)),e.zz=t.l00.scale(.886277).add(t.l20.scale(.495417)),e.yz=t.l2_1.scale(.858086).scale(-1),e.zx=t.l21.scale(.858086).scale(-1),e.xy=t.l2_2.scale(.858086),e.scaleInPlace(1/Math.PI),e},i.FromArray=function(t){var e=new i;return l.e.FromArrayToRef(t[0],0,e.x),l.e.FromArrayToRef(t[1],0,e.y),l.e.FromArrayToRef(t[2],0,e.z),l.e.FromArrayToRef(t[3],0,e.xx),l.e.FromArrayToRef(t[4],0,e.yy),l.e.FromArrayToRef(t[5],0,e.zz),l.e.FromArrayToRef(t[6],0,e.yz),l.e.FromArrayToRef(t[7],0,e.zx),l.e.FromArrayToRef(t[8],0,e.xy),e},i}()},514:function(J,j,o){"use strict";o.d(j,"a",function(){return C});var l=o(442),s=o(545),C=function(){function v(){}return v.GetEnvironmentBRDFTexture=function(c){if(!c.environmentBRDFTexture){var E=c.useDelayedTextureLoading;c.useDelayedTextureLoading=!1;var h=c._blockEntityCollection;c._blockEntityCollection=!1;var i=l.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,c,!0,!1,l.a.BILINEAR_SAMPLINGMODE);c._blockEntityCollection=h;var t=c.getEngine().getLoadedTexturesCache(),e=t.indexOf(i.getInternalTexture());e!==-1&&t.splice(e,1),i.isRGBD=!0,i.wrapU=l.a.CLAMP_ADDRESSMODE,i.wrapV=l.a.CLAMP_ADDRESSMODE,c.environmentBRDFTexture=i,c.useDelayedTextureLoading=E,s.a.ExpandRGBDTexture(i)}return c.environmentBRDFTexture},v._instanceNumber=0,v._environmentBRDFBase64Texture="data:image/png;base64,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",v}()},516:function(J,j,o){"use strict";o.d(j,"a",function(){return w});var l=o(434),s=o(439),C=o(443),v=o(438),c=o(441),E=o(445),h=o(448),i=o(447),t=o(442),e=o(458),n=o(459),r=o(454),a=o(435),f="glowMapGenerationPixelShader",p=`#ifdef DIFFUSE
varying vec2 vUVDiffuse;
uniform sampler2D diffuseSampler;
#endif
#ifdef OPACITY
varying vec2 vUVOpacity;
uniform sampler2D opacitySampler;
uniform float opacityIntensity;
#endif
#ifdef EMISSIVE
varying vec2 vUVEmissive;
uniform sampler2D emissiveSampler;
#endif
#ifdef VERTEXALPHA
varying vec4 vColor;
#endif
uniform vec4 glowColor;
void main(void)
{
vec4 finalColor=glowColor;

#ifdef DIFFUSE
vec4 albedoTexture=texture2D(diffuseSampler,vUVDiffuse);
#ifdef GLOW

finalColor.a*=albedoTexture.a;
#endif
#ifdef HIGHLIGHT

finalColor.a=albedoTexture.a;
#endif
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vUVOpacity);
#ifdef OPACITYRGB
finalColor.a*=getLuminance(opacityMap.rgb);
#else
finalColor.a*=opacityMap.a;
#endif
finalColor.a*=opacityIntensity;
#endif
#ifdef VERTEXALPHA
finalColor.a*=vColor.a;
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE)
discard;
#endif
#ifdef EMISSIVE
gl_FragColor=texture2D(emissiveSampler,vUVEmissive)*finalColor;
#else
gl_FragColor=finalColor;
#endif
#ifdef HIGHLIGHT

gl_FragColor.a=glowColor.a;
#endif
}`;a.a.ShadersStore[f]=p;var d={name:f,shader:p},m=o(487),A=o(496),O=o(497),R=o(501),b=o(507),D=o(508),L=o(488),U=o(489),F="glowMapGenerationVertexShader",V=`
attribute vec3 position;
#include<bonesDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]

#include<instancesDeclaration>
uniform mat4 viewProjection;
varying vec4 vPosition;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef DIFFUSE
varying vec2 vUVDiffuse;
uniform mat4 diffuseMatrix;
#endif
#ifdef OPACITY
varying vec2 vUVOpacity;
uniform mat4 opacityMatrix;
#endif
#ifdef EMISSIVE
varying vec2 vUVEmissive;
uniform mat4 emissiveMatrix;
#endif
#ifdef VERTEXALPHA
attribute vec4 color;
varying vec4 vColor;
#endif
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#ifdef CUBEMAP
vPosition=finalWorld*vec4(positionUpdated,1.0);
gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#else
vPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);
gl_Position=vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vUVDiffuse=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef DIFFUSEUV2
vUVDiffuse=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vUVOpacity=vec2(opacityMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef OPACITYUV2
vUVOpacity=vec2(opacityMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vUVEmissive=vec2(emissiveMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef EMISSIVEUV2
vUVEmissive=vec2(emissiveMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#ifdef VERTEXALPHA
vColor=color;
#endif
}`;a.a.ShadersStore[F]=V;var M={name:F,shader:V},x=o(476),_=o(512),w=function(){function G(y,Y){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new c.b},this.neutralColor=new c.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new v.c,this.onBeforeRenderMainTextureObservable=new v.c,this.onBeforeComposeObservable=new v.c,this.onBeforeRenderMeshToEffect=new v.c,this.onAfterRenderMeshToEffect=new v.c,this.onAfterComposeObservable=new v.c,this.onSizeChangedObservable=new v.c,this.name=y,this._scene=Y||h.a.LastCreatedScene,G._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(G.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(y){this._effectLayerOptions.renderingGroupId=y},enumerable:!1,configurable:!0}),G.prototype._init=function(y){this._effectLayerOptions=Object(l.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},y),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},G.prototype._generateIndexBuffer=function(){var y=[];y.push(0),y.push(1),y.push(2),y.push(0),y.push(2),y.push(3),this._indexBuffer=this._engine.createIndexBuffer(y)},G.prototype._generateVertexBuffer=function(){var y=[];y.push(1,1),y.push(-1,1),y.push(-1,-1),y.push(1,-1);var Y=new i.b(this._engine,y,i.b.PositionKind,!1,!1,2);this._vertexBuffers[i.b.PositionKind]=Y},G.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?E.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?E.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},G.prototype._createMainTexture=function(){var y=this;if(this._mainTexture=new e.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=t.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=t.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(t.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(Z,ce,W,le){y.onBeforeRenderMainTextureObservable.notifyObservers(y);var ne,ee=y._scene.getEngine();if(le.length){for(ee.setColorWrite(!1),ne=0;ne<le.length;ne++)y._renderSubMesh(le.data[ne]);ee.setColorWrite(!0)}for(ne=0;ne<Z.length;ne++)y._renderSubMesh(Z.data[ne]);for(ne=0;ne<ce.length;ne++)y._renderSubMesh(ce.data[ne]);var ae=ee.getAlphaMode();for(ne=0;ne<W.length;ne++)y._renderSubMesh(W.data[ne],!0);ee.setAlphaMode(ae)},this._mainTexture.onClearObservable.add(function(Z){Z.clear(y.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var Y=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){y._scene.getBoundingBoxRenderer().enabled=!y.disableBoundingBoxesFromEffectLayer&&Y}),this._mainTexture.onAfterUnbindObservable.add(function(){y._scene.getBoundingBoxRenderer().enabled=Y})}},G.prototype._addCustomEffectDefines=function(y){},G.prototype._isReady=function(y,Y,Z){var ce=y.getMaterial();if(!ce||!ce.isReadyForSubMesh(y.getMesh(),y,Y))return!1;var W=[],le=[i.b.PositionKind],ne=y.getMesh(),ee=!1,ae=!1;if(ce){var $=ce.needAlphaTesting(),z=ce.getAlphaTestTexture(),me=z&&z.hasAlpha&&(ce.useAlphaFromDiffuseTexture||ce._useAlphaFromAlbedoTexture);z&&($||me)&&(W.push("#define DIFFUSE"),ne.isVerticesDataPresent(i.b.UV2Kind)&&z.coordinatesIndex===1?(W.push("#define DIFFUSEUV2"),ae=!0):ne.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define DIFFUSEUV1"),ee=!0),$&&(W.push("#define ALPHATEST"),W.push("#define ALPHATESTVALUE 0.4")));var Ee=ce.opacityTexture;Ee&&(W.push("#define OPACITY"),ne.isVerticesDataPresent(i.b.UV2Kind)&&Ee.coordinatesIndex===1?(W.push("#define OPACITYUV2"),ae=!0):ne.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define OPACITYUV1"),ee=!0))}Z&&(W.push("#define EMISSIVE"),ne.isVerticesDataPresent(i.b.UV2Kind)&&Z.coordinatesIndex===1?(W.push("#define EMISSIVEUV2"),ae=!0):ne.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define EMISSIVEUV1"),ee=!0)),ne.isVerticesDataPresent(i.b.ColorKind)&&ne.hasVertexAlpha&&(le.push(i.b.ColorKind),W.push("#define VERTEXALPHA")),ee&&(le.push(i.b.UVKind),W.push("#define UV1")),ae&&(le.push(i.b.UV2Kind),W.push("#define UV2"));var se=new _.a;if(ne.useBones&&ne.computeBonesUsingShaders){le.push(i.b.MatricesIndicesKind),le.push(i.b.MatricesWeightsKind),ne.numBoneInfluencers>4&&(le.push(i.b.MatricesIndicesExtraKind),le.push(i.b.MatricesWeightsExtraKind)),W.push("#define NUM_BONE_INFLUENCERS "+ne.numBoneInfluencers);var ge=ne.skeleton;ge&&ge.isUsingTextureForMatrices?W.push("#define BONETEXTURE"):W.push("#define BonesPerMesh "+(ge?ge.bones.length+1:0)),ne.numBoneInfluencers>0&&se.addCPUSkinningFallback(0,ne)}else W.push("#define NUM_BONE_INFLUENCERS 0");var oe=ne.morphTargetManager,_e=0;oe&&oe.numInfluencers>0&&(W.push("#define MORPHTARGETS"),_e=oe.numInfluencers,W.push("#define NUM_MORPH_INFLUENCERS "+_e),oe.isUsingTextureForTargets&&W.push("#define MORPHTARGETS_TEXTURE"),r.a.PrepareAttributesForMorphTargetsInfluencers(le,ne,_e)),Y&&(W.push("#define INSTANCES"),r.a.PushAttributesForInstances(le),y.getRenderingMesh().hasThinInstances&&W.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(W);var ue=W.join(`
`);return this._cachedDefines!==ue&&(this._cachedDefines=ue,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",le,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],ue,se,void 0,void 0,{maxSimultaneousMorphTargets:_e})),this._effectLayerMapGenerationEffect.isReady()},G.prototype.render=function(){var y=this._mergeEffect;if(!!y.isReady()){for(var Y=0;Y<this._postProcesses.length;Y++)if(!this._postProcesses[Y].isReady())return;var Z=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),Z.enableEffect(y),Z.setState(!1),Z.bindBuffers(this._vertexBuffers,this._indexBuffer,y);var ce=Z.getAlphaMode();Z.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(y),Z.setAlphaMode(ce),this.onAfterComposeObservable.notifyObservers(this);var W=this._mainTexture.getSize();this._setMainTextureSize(),(W.width!==this._mainTextureDesiredSize.width||W.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},G.prototype.hasMesh=function(y){return this.renderingGroupId===-1||y.renderingGroupId===this.renderingGroupId},G.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},G.prototype._shouldRenderMesh=function(y){return!0},G.prototype._canRenderMesh=function(y,Y){return!Y.needAlphaBlendingForMesh(y)},G.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},G.prototype._renderSubMesh=function(y,Y){var Z=this,ce;if(Y===void 0&&(Y=!1),!!this.shouldRender()){var W=y.getMaterial(),le=y.getMesh(),ne=y.getReplacementMesh(),ee=y.getRenderingMesh(),ae=y.getEffectiveMesh(),$=this._scene,z=$.getEngine();if(ae._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!W&&!!this._canRenderMesh(ee,W)){var me=(ce=ee.overrideMaterialSideOrientation)!==null&&ce!==void 0?ce:W.sideOrientation,Ee=ee._getWorldMatrixDeterminant();Ee<0&&(me=me===n.a.ClockWiseSideOrientation?n.a.CounterClockWiseSideOrientation:n.a.ClockWiseSideOrientation);var se=me===n.a.ClockWiseSideOrientation;z.setState(W.backFaceCulling,W.zOffset,void 0,se);var ge=ee._getInstancesRenderList(y._id,!!ne);if(!ge.mustReturn&&!!this._shouldRenderMesh(ee)){var oe=ge.hardwareInstancedRendering[y._id]||ee.hasThinInstances;if(this._setEmissiveTextureAndColor(ee,y,W),this.onBeforeRenderMeshToEffect.notifyObservers(le),this._useMeshMaterial(ee))ee.render(y,oe,ne||void 0);else if(this._isReady(y,oe,this._emissiveTextureAndColor.texture)){z.enableEffect(this._effectLayerMapGenerationEffect),ee._bind(y,this._effectLayerMapGenerationEffect,n.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",$.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",ae.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var _e=W.needAlphaTesting(),ue=W.getAlphaTestTexture(),B=ue&&ue.hasAlpha&&(W.useAlphaFromDiffuseTexture||W._useAlphaFromAlbedoTexture);if(ue&&(_e||B)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",ue);var g=ue.getTextureMatrix();g&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",g)}var N=W.opacityTexture;if(N){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",N),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",N.level);var g=N.getTextureMatrix();g&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",g)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),ee.useBones&&ee.computeBonesUsingShaders&&ee.skeleton){var I=ee.skeleton;if(I.isUsingTextureForMatrices){var k=I.getTransformMatrixTexture(ee);if(!k)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",k),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(I.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",I.getTransformMatrices(ee))}r.a.BindMorphTargetParameters(ee,this._effectLayerMapGenerationEffect),ee.morphTargetManager&&ee.morphTargetManager.isUsingTextureForTargets&&ee.morphTargetManager._bind(this._effectLayerMapGenerationEffect),Y&&z.setAlphaMode(W.alphaMode),ee._processRendering(ae,y,this._effectLayerMapGenerationEffect,W.fillMode,ge,oe,function(K,P){return Z._effectLayerMapGenerationEffect.setMatrix("world",P)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(le)}}}},G.prototype._useMeshMaterial=function(y){return!1},G.prototype._rebuild=function(){var y=this._vertexBuffers[i.b.PositionKind];y&&y._rebuild(),this._generateIndexBuffer()},G.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var y=0;y<this._postProcesses.length;y++)this._postProcesses[y]&&this._postProcesses[y].dispose();this._postProcesses=[];for(var y=0;y<this._textures.length;y++)this._textures[y]&&this._textures[y].dispose();this._textures=[]},G.prototype.dispose=function(){var y=this._vertexBuffers[i.b.PositionKind];y&&(y.dispose(),this._vertexBuffers[i.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var Y=this._scene.effectLayers.indexOf(this,0);Y>-1&&this._scene.effectLayers.splice(Y,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},G.prototype.getClassName=function(){return"EffectLayer"},G.Parse=function(y,Y,Z){var ce=C.b.Instantiate(y.customType);return ce.Parse(y,Y,Z)},G._SceneComponentInitialization=function(y){throw x.a.WarnImport("EffectLayerSceneComponent")},Object(l.c)([Object(s.c)()],G.prototype,"name",void 0),Object(l.c)([Object(s.f)()],G.prototype,"neutralColor",void 0),Object(l.c)([Object(s.c)()],G.prototype,"isEnabled",void 0),Object(l.c)([Object(s.d)()],G.prototype,"camera",null),Object(l.c)([Object(s.c)()],G.prototype,"renderingGroupId",null),Object(l.c)([Object(s.c)()],G.prototype,"disableBoundingBoxesFromEffectLayer",void 0),G}()},517:function(J,j,o){"use strict";o.d(j,"a",function(){return a});var l=o(434),s=o(442),C=o(444),v=o(435),c="fxaaPixelShader",E=`uniform sampler2D textureSampler;
uniform vec2 texelSize;
varying vec2 vUV;
varying vec2 sampleCoordS;
varying vec2 sampleCoordE;
varying vec2 sampleCoordN;
varying vec2 sampleCoordW;
varying vec2 sampleCoordNW;
varying vec2 sampleCoordSE;
varying vec2 sampleCoordNE;
varying vec2 sampleCoordSW;
const float fxaaQualitySubpix=1.0;
const float fxaaQualityEdgeThreshold=0.166;
const float fxaaQualityEdgeThresholdMin=0.0833;
const vec3 kLumaCoefficients=vec3(0.2126,0.7152,0.0722);
#define FxaaLuma(rgba) dot(rgba.rgb,kLumaCoefficients)
void main(){
vec2 posM;
posM.x=vUV.x;
posM.y=vUV.y;
vec4 rgbyM=texture2D(textureSampler,vUV,0.0);
float lumaM=FxaaLuma(rgbyM);
float lumaS=FxaaLuma(texture2D(textureSampler,sampleCoordS,0.0));
float lumaE=FxaaLuma(texture2D(textureSampler,sampleCoordE,0.0));
float lumaN=FxaaLuma(texture2D(textureSampler,sampleCoordN,0.0));
float lumaW=FxaaLuma(texture2D(textureSampler,sampleCoordW,0.0));
float maxSM=max(lumaS,lumaM);
float minSM=min(lumaS,lumaM);
float maxESM=max(lumaE,maxSM);
float minESM=min(lumaE,minSM);
float maxWN=max(lumaN,lumaW);
float minWN=min(lumaN,lumaW);
float rangeMax=max(maxWN,maxESM);
float rangeMin=min(minWN,minESM);
float rangeMaxScaled=rangeMax*fxaaQualityEdgeThreshold;
float range=rangeMax-rangeMin;
float rangeMaxClamped=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);
#ifndef MALI
if(range<rangeMaxClamped)
{
gl_FragColor=rgbyM;
return;
}
#endif
float lumaNW=FxaaLuma(texture2D(textureSampler,sampleCoordNW,0.0));
float lumaSE=FxaaLuma(texture2D(textureSampler,sampleCoordSE,0.0));
float lumaNE=FxaaLuma(texture2D(textureSampler,sampleCoordNE,0.0));
float lumaSW=FxaaLuma(texture2D(textureSampler,sampleCoordSW,0.0));
float lumaNS=lumaN+lumaS;
float lumaWE=lumaW+lumaE;
float subpixRcpRange=1.0/range;
float subpixNSWE=lumaNS+lumaWE;
float edgeHorz1=(-2.0*lumaM)+lumaNS;
float edgeVert1=(-2.0*lumaM)+lumaWE;
float lumaNESE=lumaNE+lumaSE;
float lumaNWNE=lumaNW+lumaNE;
float edgeHorz2=(-2.0*lumaE)+lumaNESE;
float edgeVert2=(-2.0*lumaN)+lumaNWNE;
float lumaNWSW=lumaNW+lumaSW;
float lumaSWSE=lumaSW+lumaSE;
float edgeHorz4=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);
float edgeVert4=(abs(edgeVert1)*2.0)+abs(edgeVert2);
float edgeHorz3=(-2.0*lumaW)+lumaNWSW;
float edgeVert3=(-2.0*lumaS)+lumaSWSE;
float edgeHorz=abs(edgeHorz3)+edgeHorz4;
float edgeVert=abs(edgeVert3)+edgeVert4;
float subpixNWSWNESE=lumaNWSW+lumaNESE;
float lengthSign=texelSize.x;
bool horzSpan=edgeHorz>=edgeVert;
float subpixA=subpixNSWE*2.0+subpixNWSWNESE;
if (!horzSpan)
{
lumaN=lumaW;
}
if (!horzSpan)
{
lumaS=lumaE;
}
if (horzSpan)
{
lengthSign=texelSize.y;
}
float subpixB=(subpixA*(1.0/12.0))-lumaM;
float gradientN=lumaN-lumaM;
float gradientS=lumaS-lumaM;
float lumaNN=lumaN+lumaM;
float lumaSS=lumaS+lumaM;
bool pairN=abs(gradientN)>=abs(gradientS);
float gradient=max(abs(gradientN),abs(gradientS));
if (pairN)
{
lengthSign=-lengthSign;
}
float subpixC=clamp(abs(subpixB)*subpixRcpRange,0.0,1.0);
vec2 posB;
posB.x=posM.x;
posB.y=posM.y;
vec2 offNP;
offNP.x=(!horzSpan) ? 0.0 : texelSize.x;
offNP.y=(horzSpan) ? 0.0 : texelSize.y;
if (!horzSpan)
{
posB.x+=lengthSign*0.5;
}
if (horzSpan)
{
posB.y+=lengthSign*0.5;
}
vec2 posN;
posN.x=posB.x-offNP.x*1.5;
posN.y=posB.y-offNP.y*1.5;
vec2 posP;
posP.x=posB.x+offNP.x*1.5;
posP.y=posB.y+offNP.y*1.5;
float subpixD=((-2.0)*subpixC)+3.0;
float lumaEndN=FxaaLuma(texture2D(textureSampler,posN,0.0));
float subpixE=subpixC*subpixC;
float lumaEndP=FxaaLuma(texture2D(textureSampler,posP,0.0));
if (!pairN)
{
lumaNN=lumaSS;
}
float gradientScaled=gradient*1.0/4.0;
float lumaMM=lumaM-lumaNN*0.5;
float subpixF=subpixD*subpixE;
bool lumaMLTZero=lumaMM<0.0;
lumaEndN-=lumaNN*0.5;
lumaEndP-=lumaNN*0.5;
bool doneN=abs(lumaEndN)>=gradientScaled;
bool doneP=abs(lumaEndP)>=gradientScaled;
if (!doneN)
{
posN.x-=offNP.x*3.0;
}
if (!doneN)
{
posN.y-=offNP.y*3.0;
}
bool doneNP=(!doneN) || (!doneP);
if (!doneP)
{
posP.x+=offNP.x*3.0;
}
if (!doneP)
{
posP.y+=offNP.y*3.0;
}
if (doneNP)
{
if (!doneN) lumaEndN=FxaaLuma(texture2D(textureSampler,posN.xy,0.0));
if (!doneP) lumaEndP=FxaaLuma(texture2D(textureSampler,posP.xy,0.0));
if (!doneN) lumaEndN=lumaEndN-lumaNN*0.5;
if (!doneP) lumaEndP=lumaEndP-lumaNN*0.5;
doneN=abs(lumaEndN)>=gradientScaled;
doneP=abs(lumaEndP)>=gradientScaled;
if (!doneN) posN.x-=offNP.x*12.0;
if (!doneN) posN.y-=offNP.y*12.0;
doneNP=(!doneN) || (!doneP);
if (!doneP) posP.x+=offNP.x*12.0;
if (!doneP) posP.y+=offNP.y*12.0;
}
float dstN=posM.x-posN.x;
float dstP=posP.x-posM.x;
if (!horzSpan)
{
dstN=posM.y-posN.y;
}
if (!horzSpan)
{
dstP=posP.y-posM.y;
}
bool goodSpanN=(lumaEndN<0.0) != lumaMLTZero;
float spanLength=(dstP+dstN);
bool goodSpanP=(lumaEndP<0.0) != lumaMLTZero;
float spanLengthRcp=1.0/spanLength;
bool directionN=dstN<dstP;
float dst=min(dstN,dstP);
bool goodSpan=directionN ? goodSpanN : goodSpanP;
float subpixG=subpixF*subpixF;
float pixelOffset=(dst*(-spanLengthRcp))+0.5;
float subpixH=subpixG*fxaaQualitySubpix;
float pixelOffsetGood=goodSpan ? pixelOffset : 0.0;
float pixelOffsetSubpix=max(pixelOffsetGood,subpixH);
if (!horzSpan)
{
posM.x+=pixelOffsetSubpix*lengthSign;
}
if (horzSpan)
{
posM.y+=pixelOffsetSubpix*lengthSign;
}
#ifdef MALI
if(range<rangeMaxClamped)
{
gl_FragColor=rgbyM;
}
else
{
gl_FragColor=texture2D(textureSampler,posM,0.0);
}
#else
gl_FragColor=texture2D(textureSampler,posM,0.0);
#endif
}`;v.a.ShadersStore[c]=E;var h={name:c,shader:E},i="fxaaVertexShader",t=`
attribute vec2 position;
uniform vec2 texelSize;

varying vec2 vUV;
varying vec2 sampleCoordS;
varying vec2 sampleCoordE;
varying vec2 sampleCoordN;
varying vec2 sampleCoordW;
varying vec2 sampleCoordNW;
varying vec2 sampleCoordSE;
varying vec2 sampleCoordNE;
varying vec2 sampleCoordSW;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd);
sampleCoordS=vUV+vec2( 0.0,1.0)*texelSize;
sampleCoordE=vUV+vec2( 1.0,0.0)*texelSize;
sampleCoordN=vUV+vec2( 0.0,-1.0)*texelSize;
sampleCoordW=vUV+vec2(-1.0,0.0)*texelSize;
sampleCoordNW=vUV+vec2(-1.0,-1.0)*texelSize;
sampleCoordSE=vUV+vec2( 1.0,1.0)*texelSize;
sampleCoordNE=vUV+vec2( 1.0,-1.0)*texelSize;
sampleCoordSW=vUV+vec2(-1.0,1.0)*texelSize;
gl_Position=vec4(position,0.0,1.0);
}`;v.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(f){Object(l.d)(p,f);function p(d,m,A,O,R,b,D){A===void 0&&(A=null),D===void 0&&(D=0);var L=f.call(this,d,"fxaa",["texelSize"],null,m,A,O||s.a.BILINEAR_SAMPLINGMODE,R,b,null,D,"fxaa",void 0,!0)||this,U=L._getDefines();return L.updateEffect(U),L.onApplyObservable.add(function(F){var V=L.texelSize;F.setFloat2("texelSize",V.x,V.y)}),L}return p.prototype.getClassName=function(){return"FxaaPostProcess"},p.prototype._getDefines=function(){var d=this.getEngine();if(!d)return null;var m=d.getGlInfo();return m&&m.renderer&&m.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},p._Parse=function(d,m,A,O){return r.a.Parse(function(){return new p(d.name,d.options,m,d.renderTargetSamplingMode,A.getEngine(),d.reusable)},d,A,O)},p}(C.a);n.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var l=o(434),s=o(439),C=o(491),v=o(444),c=o(448),E=o(644),h=o(534),i=function(t){Object(l.d)(e,t);function e(n,r,a,f,p,d,m,A){a===void 0&&(a=null),m===void 0&&(m=0);var O=t.call(this,n,"imageProcessing",[],[],r,a,f,p,d,null,m,"postprocess",null,!0)||this;return O._fromLinearSpace=!0,O._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},A?(A.applyByPostProcess=!0,O._attachImageProcessingConfiguration(A,!0),O.fromLinearSpace=!1):(O._attachImageProcessingConfiguration(null,!0),O.imageProcessingConfiguration.applyByPostProcess=!0),O.onApply=function(R){O.imageProcessingConfiguration.bind(R,O.aspectRatio)},O}return Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(n){n.applyByPostProcess=!0,this._attachImageProcessingConfiguration(n)},enumerable:!1,configurable:!0}),e.prototype._attachImageProcessingConfiguration=function(n,r){var a=this;if(r===void 0&&(r=!1),n!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),n)this._imageProcessingConfiguration=n;else{var f=null,p=this.getEngine(),d=this.getCamera();if(d)f=d.getScene();else if(p&&p.scenes){var m=p.scenes;f=m[m.length-1]}else f=c.a.LastCreatedScene;f?this._imageProcessingConfiguration=f.imageProcessingConfiguration:this._imageProcessingConfiguration=new C.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),r||this._updateParameters()}},Object.defineProperty(e.prototype,"isSupported",{get:function(){var n=this.getEffect();return!n||n.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(n){this.imageProcessingConfiguration.colorCurves=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(n){this.imageProcessingConfiguration.colorCurvesEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(n){this.imageProcessingConfiguration.colorGradingTexture=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(n){this.imageProcessingConfiguration.colorGradingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(n){this.imageProcessingConfiguration.exposure=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(n){this._imageProcessingConfiguration.toneMappingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(n){this._imageProcessingConfiguration.toneMappingType=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(n){this.imageProcessingConfiguration.contrast=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(n){this.imageProcessingConfiguration.vignetteStretch=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(n){this.imageProcessingConfiguration.vignetteCentreX=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(n){this.imageProcessingConfiguration.vignetteCentreY=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(n){this.imageProcessingConfiguration.vignetteWeight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(n){this.imageProcessingConfiguration.vignetteColor=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(n){this.imageProcessingConfiguration.vignetteCameraFov=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(n){this.imageProcessingConfiguration.vignetteBlendMode=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(n){this.imageProcessingConfiguration.vignetteEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(n){this._fromLinearSpace!==n&&(this._fromLinearSpace=n,this._updateParameters())},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"ImageProcessingPostProcess"},e.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var n="";for(var r in this._defines)this._defines[r]&&(n+="#define "+r+`;\r
`);var a=["textureSampler"],f=["scale"];C.a&&(C.a.PrepareSamplers(a,this._defines),C.a.PrepareUniforms(f,this._defines)),this.updateEffect(n,f,a)},e.prototype.dispose=function(n){t.prototype.dispose.call(this,n),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(l.c)([Object(s.c)()],e.prototype,"_fromLinearSpace",void 0),e}(v.a)},521:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var l=o(436),s=o(450),C=o(513),v=o(515),c=o(441),E=function(){function i(t,e,n,r){this.name=t,this.worldAxisForNormal=e,this.worldAxisForFileX=n,this.worldAxisForFileY=r}return i}(),h=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(t){var e=this,n;if(!t.isCube)return null;(n=t.getScene())===null||n===void 0||n.getEngine().flushFramebuffer();var r=t.getSize().width,a=t.readPixels(0,void 0,void 0,!1),f=t.readPixels(1,void 0,void 0,!1),p,d;t.isRenderTarget?(p=t.readPixels(3,void 0,void 0,!1),d=t.readPixels(2,void 0,void 0,!1)):(p=t.readPixels(2,void 0,void 0,!1),d=t.readPixels(3,void 0,void 0,!1));var m=t.readPixels(4,void 0,void 0,!1),A=t.readPixels(5,void 0,void 0,!1),O=t.gammaSpace,R=5,b=0;return(t.textureType==1||t.textureType==2)&&(b=1),new Promise(function(D,L){Promise.all([f,a,p,d,m,A]).then(function(U){var F=U[0],V=U[1],M=U[2],x=U[3],_=U[4],w=U[5],G={size:r,right:V,left:F,up:M,down:x,front:_,back:w,format:R,type:b,gammaSpace:O};D(e.ConvertCubeMapToSphericalPolynomial(G))})})},i.ConvertCubeMapToSphericalPolynomial=function(t){for(var e=new C.a,n=0,r=2/t.size,a=r,f=r*.5-1,p=0;p<6;p++)for(var d=this.FileFaces[p],m=t[d.name],A=f,O=t.format===5?4:3,R=0;R<t.size;R++){for(var b=f,D=0;D<t.size;D++){var L=d.worldAxisForFileX.scale(b).add(d.worldAxisForFileY.scale(A)).add(d.worldAxisForNormal);L.normalize();var U=Math.pow(1+b*b+A*A,-3/2),F=m[R*t.size*O+D*O+0],V=m[R*t.size*O+D*O+1],M=m[R*t.size*O+D*O+2];isNaN(F)&&(F=0),isNaN(V)&&(V=0),isNaN(M)&&(M=0),t.type===0&&(F/=255,V/=255,M/=255),t.gammaSpace&&(F=Math.pow(s.a.Clamp(F),v.c),V=Math.pow(s.a.Clamp(V),v.c),M=Math.pow(s.a.Clamp(M),v.c));var x=4096;F=s.a.Clamp(F,0,x),V=s.a.Clamp(V,0,x),M=s.a.Clamp(M,0,x);var _=new c.a(F,V,M);e.addLight(L,_,U),n+=U,b+=r}A+=a}var w=4*Math.PI,G=6,y=w*G/6,Y=y/n;return e.scaleInPlace(Y),e.convertIncidentRadianceToIrradiance(),e.convertIrradianceToLambertianRadiance(),C.b.FromHarmonics(e)},i.FileFaces=[new E("right",new l.e(1,0,0),new l.e(0,0,-1),new l.e(0,-1,0)),new E("left",new l.e(-1,0,0),new l.e(0,0,1),new l.e(0,-1,0)),new E("up",new l.e(0,1,0),new l.e(1,0,0),new l.e(0,0,1)),new E("down",new l.e(0,-1,0),new l.e(1,0,0),new l.e(0,0,-1)),new E("front",new l.e(0,0,1),new l.e(1,0,0),new l.e(0,-1,0)),new E("back",new l.e(0,0,-1),new l.e(-1,0,0),new l.e(0,-1,0))],i}()},522:function(J,j,o){"use strict";var l=o(434),s=o(456),C=o(440),v=o(467);v.a.prototype.createRenderTargetCubeTexture=function(c,E){var h=Object(l.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},E);h.generateStencilBuffer=h.generateDepthBuffer&&h.generateStencilBuffer,(h.type===1&&!this._caps.textureFloatLinearFiltering||h.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(h.samplingMode=1);var i=this._gl,t=new s.a(this,s.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,t,!0);var e=this._getSamplingParameters(h.samplingMode,h.generateMipMaps);h.type===1&&!this._caps.textureFloat&&(h.type=0,C.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,e.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,e.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var n=0;n<6;n++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,this._getRGBABufferInternalSizedFormat(h.type,h.format),c,c,0,this._getInternalFormat(h.format),this._getWebGLTextureType(h.type),null);var r=i.createFramebuffer();return this._bindUnboundFramebuffer(r),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(h.generateStencilBuffer,h.generateDepthBuffer,c,c),h.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),t._framebuffer=r,t.width=c,t.height=c,t.isReady=!0,t.isCube=!0,t.samples=1,t.generateMipMaps=h.generateMipMaps,t.samplingMode=h.samplingMode,t.type=h.type,t.format=h.format,t._generateDepthBuffer=h.generateDepthBuffer,t._generateStencilBuffer=h.generateStencilBuffer,this._internalTexturesCache.push(t),t}},523:function(J,j,o){"use strict";var l=o(521),s=o(477);Object.defineProperty(s.a.prototype,"sphericalPolynomial",{get:function(){var C=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=l.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(v){C._texture._sphericalPolynomial=v,C._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(C){this._texture&&(this._texture._sphericalPolynomial=C)},enumerable:!0,configurable:!0})},529:function(J,j,o){"use strict";o.d(j,"b",function(){return Be}),o.d(j,"a",function(){return Bt});var l=o(434),s=o(439),C=o(440),v=o(490),c=o(514),E=o(449),h=o(436),i=o(447),t=o(626),e=o(480),n=o(454),r=function(){function X(S){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new h.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=S}return X.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},X.prototype.isReadyForSubMesh=function(S,u){return!(S._areTexturesDirty&&u.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},X.prototype.prepareDefines=function(S,u,T){this._isEnabled?(S.ANISOTROPIC=this._isEnabled,this._isEnabled&&!u.isVerticesDataPresent(i.b.TangentKind)&&(S._needUVs=!0,S.MAINUV1=!0),S._areTexturesDirty&&T.texturesEnabled&&(this._texture&&e.a.AnisotropicTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,S,"ANISOTROPIC_TEXTURE"):S.ANISOTROPIC_TEXTURE=!1)):(S.ANISOTROPIC=!1,S.ANISOTROPIC_TEXTURE=!1)},X.prototype.bindForSubMesh=function(S,u,T){(!S.useUbo||!T||!S.isSync)&&(this._texture&&e.a.AnisotropicTextureEnabled&&(S.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),n.a.BindTextureMatrix(this._texture,S,"anisotropy")),S.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),u.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&S.setTexture("anisotropySampler",this._texture)},X.prototype.hasTexture=function(S){return this._texture===S},X.prototype.getActiveTextures=function(S){this._texture&&S.push(this._texture)},X.prototype.getAnimatables=function(S){this._texture&&this._texture.animations&&this._texture.animations.length>0&&S.push(this._texture)},X.prototype.dispose=function(S){S&&this._texture&&this._texture.dispose()},X.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},X.AddFallbacks=function(S,u,T){return S.ANISOTROPIC&&u.addFallback(T++,"ANISOTROPIC"),T},X.AddUniforms=function(S){S.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},X.PrepareUniformBuffer=function(S){S.addUniform("vAnisotropy",3),S.addUniform("vAnisotropyInfos",2),S.addUniform("anisotropyMatrix",16)},X.AddSamplers=function(S){S.push("anisotropySampler")},X.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},X.prototype.serialize=function(){return s.a.Serialize(this)},X.prototype.parse=function(S,u,T){var H=this;s.a.Parse(function(){return H},S,u,T)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)()],X.prototype,"intensity",void 0),Object(l.c)([Object(s.n)()],X.prototype,"direction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"texture",void 0),X}(),a=function(){function X(S){this._useEnergyConservation=X.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=X.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=X.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=X.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=X.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=X.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=X.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=X.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=S}return X.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},X.prototype.prepareDefines=function(S){S.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,S.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,S.SPHERICAL_HARMONICS=this._useSphericalHarmonics,S.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},X.prototype.getClassName=function(){return"PBRBRDFConfiguration"},X.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},X.prototype.serialize=function(){return s.a.Serialize(this)},X.prototype.parse=function(S,u,T){var H=this;s.a.Parse(function(){return H},S,u,T)},X.DEFAULT_USE_ENERGY_CONSERVATION=!0,X.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,X.DEFAULT_USE_SPHERICAL_HARMONICS=!0,X.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],X.prototype,"useEnergyConservation",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],X.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],X.prototype,"useSphericalHarmonics",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],X.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),X}(),f=o(441),p=function(){function X(S){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=f.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=S}return X.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},X.prototype.isReadyForSubMesh=function(S,u){return!(S._areTexturesDirty&&u.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&e.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},X.prototype.prepareDefines=function(S,u){var T;this._isEnabled?(S.SHEEN=this._isEnabled,S.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,S.SHEEN_ROUGHNESS=this._roughness!==null,S.SHEEN_ALBEDOSCALING=this._albedoScaling,S.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,S.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((T=this._textureRoughness)===null||T===void 0?void 0:T._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),S._areTexturesDirty&&u.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,S,"SHEEN_TEXTURE"):S.SHEEN_TEXTURE=!1,this._textureRoughness&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._textureRoughness,S,"SHEEN_TEXTURE_ROUGHNESS"):S.SHEEN_TEXTURE_ROUGHNESS=!1)):(S.SHEEN=!1,S.SHEEN_TEXTURE=!1,S.SHEEN_TEXTURE_ROUGHNESS=!1,S.SHEEN_LINKWITHALBEDO=!1,S.SHEEN_ROUGHNESS=!1,S.SHEEN_ALBEDOSCALING=!1,S.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,S.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},X.prototype.bindForSubMesh=function(S,u,T,H){var re,he,te,Se,ie,Q,de,ve,Re=H._materialDefines,fe=Re.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!S.useUbo||!T||!S.isSync)&&(fe&&e.a.SheenTextureEnabled?(S.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),n.a.BindTextureMatrix(this._texture,S,"sheen")):(this._texture||this._textureRoughness)&&e.a.SheenTextureEnabled&&(S.updateFloat4("vSheenInfos",(he=(re=this._texture)===null||re===void 0?void 0:re.coordinatesIndex)!==null&&he!==void 0?he:0,(Se=(te=this._texture)===null||te===void 0?void 0:te.level)!==null&&Se!==void 0?Se:0,(Q=(ie=this._textureRoughness)===null||ie===void 0?void 0:ie.coordinatesIndex)!==null&&Q!==void 0?Q:0,(ve=(de=this._textureRoughness)===null||de===void 0?void 0:de.level)!==null&&ve!==void 0?ve:0),this._texture&&n.a.BindTextureMatrix(this._texture,S,"sheen"),this._textureRoughness&&!fe&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&n.a.BindTextureMatrix(this._textureRoughness,S,"sheenRoughness")),S.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&S.updateFloat("vSheenRoughness",this._roughness)),u.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&S.setTexture("sheenSampler",this._texture),this._textureRoughness&&!fe&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&e.a.SheenTextureEnabled&&S.setTexture("sheenRoughnessSampler",this._textureRoughness))},X.prototype.hasTexture=function(S){return this._texture===S||this._textureRoughness===S},X.prototype.getActiveTextures=function(S){this._texture&&S.push(this._texture),this._textureRoughness&&S.push(this._textureRoughness)},X.prototype.getAnimatables=function(S){this._texture&&this._texture.animations&&this._texture.animations.length>0&&S.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&S.push(this._textureRoughness)},X.prototype.dispose=function(S){var u,T;S&&((u=this._texture)===null||u===void 0||u.dispose(),(T=this._textureRoughness)===null||T===void 0||T.dispose())},X.prototype.getClassName=function(){return"PBRSheenConfiguration"},X.AddFallbacks=function(S,u,T){return S.SHEEN&&u.addFallback(T++,"SHEEN"),T},X.AddUniforms=function(S){S.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},X.PrepareUniformBuffer=function(S){S.addUniform("vSheenColor",4),S.addUniform("vSheenRoughness",1),S.addUniform("vSheenInfos",4),S.addUniform("sheenMatrix",16),S.addUniform("sheenRoughnessMatrix",16)},X.AddSamplers=function(S){S.push("sheenSampler"),S.push("sheenRoughnessSampler")},X.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},X.prototype.serialize=function(){return s.a.Serialize(this)},X.prototype.parse=function(S,u,T){var H=this;s.a.Parse(function(){return H},S,u,T)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"linkSheenWithAlbedo",void 0),Object(l.c)([Object(s.c)()],X.prototype,"intensity",void 0),Object(l.c)([Object(s.e)()],X.prototype,"color",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"texture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"roughness",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"textureRoughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"albedoScaling",void 0),X}(),d=o(450),m=function(){function X(S,u,T){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=f.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=f.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=S,this._internalMarkScenePrePassDirty=u,this._scene=T}return Object.defineProperty(X.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(S){!this._scene.enableSubSurfaceForPrePass()||S&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(S))},enumerable:!1,configurable:!0}),Object.defineProperty(X.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(S){S>=1?this._volumeIndexOfRefraction=S:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),X.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},X.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},X.prototype.isReadyForSubMesh=function(S,u){if(S._areTexturesDirty&&u.texturesEnabled){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var T=this._getRefractionTexture(u);if(T&&e.a.RefractionTextureEnabled&&!T.isReadyOrNotBlocking())return!1}return!0},X.prototype.prepareDefines=function(S,u){if(S._areTexturesDirty&&(S.SUBSURFACE=!1,S.SS_TRANSLUCENCY=this._isTranslucencyEnabled,S.SS_SCATTERING=this._isScatteringEnabled,S.SS_THICKNESSANDMASK_TEXTURE=!1,S.SS_MASK_FROM_THICKNESS_TEXTURE=!1,S.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,S.SS_REFRACTION=!1,S.SS_REFRACTIONMAP_3D=!1,S.SS_GAMMAREFRACTION=!1,S.SS_RGBDREFRACTION=!1,S.SS_LINEARSPECULARREFRACTION=!1,S.SS_REFRACTIONMAP_OPPOSITEZ=!1,S.SS_LODINREFRACTIONALPHA=!1,S.SS_LINKREFRACTIONTOTRANSPARENCY=!1,S.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(S.SUBSURFACE=!0,S._areTexturesDirty&&u.texturesEnabled&&this._thicknessTexture&&e.a.ThicknessTextureEnabled&&n.a.PrepareDefinesForMergedUV(this._thicknessTexture,S,"SS_THICKNESSANDMASK_TEXTURE"),S.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,S.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&u.texturesEnabled)){var T=this._getRefractionTexture(u);T&&e.a.RefractionTextureEnabled&&(S.SS_REFRACTION=!0,S.SS_REFRACTIONMAP_3D=T.isCube,S.SS_GAMMAREFRACTION=T.gammaSpace,S.SS_RGBDREFRACTION=T.isRGBD,S.SS_LINEARSPECULARREFRACTION=T.linearSpecularLOD,S.SS_REFRACTIONMAP_OPPOSITEZ=T.invertZ,S.SS_LODINREFRACTIONALPHA=T.lodLevelInAlpha,S.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,S.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},X.prototype.bindForSubMesh=function(S,u,T,H,re,he){var te=this._getRefractionTexture(u);if(!S.useUbo||!H||!S.isSync){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&(S.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),n.a.BindTextureMatrix(this._thicknessTexture,S,"thickness")),S.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),te&&e.a.RefractionTextureEnabled){S.updateMatrix("refractionMatrix",te.getReflectionTextureMatrix());var Se=1;te.isCube||te.depth&&(Se=te.depth);var ie=te.getSize().width,Q=this.volumeIndexOfRefraction;S.updateFloat4("vRefractionInfos",te.level,1/Q,Se,this._invertRefractionY?-1:1),S.updateFloat3("vRefractionMicrosurfaceInfos",ie,te.lodGenerationScale,te.lodGenerationOffset),he&&S.updateFloat2("vRefractionFilteringInfo",ie,d.a.Log2(ie))}this.isScatteringEnabled&&S.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),S.updateColor3("vDiffusionDistance",this.diffusionDistance),S.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),S.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}u.texturesEnabled&&(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&S.setTexture("thicknessSampler",this._thicknessTexture),te&&e.a.RefractionTextureEnabled&&(re?S.setTexture("refractionSampler",te):(S.setTexture("refractionSampler",te._lodTextureMid||te),S.setTexture("refractionSamplerLow",te._lodTextureLow||te),S.setTexture("refractionSamplerHigh",te._lodTextureHigh||te))))},X.prototype.unbind=function(S){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(S.setTexture("refractionSampler",null),!0):!1},X.prototype._getRefractionTexture=function(S){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?S.environmentTexture:null},Object.defineProperty(X.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),X.prototype.fillRenderTargetTextures=function(S){e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&S.push(this._refractionTexture)},X.prototype.hasTexture=function(S){return this._thicknessTexture===S||this._refractionTexture===S},X.prototype.hasRenderTargetTextures=function(){return!!(e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},X.prototype.getActiveTextures=function(S){this._thicknessTexture&&S.push(this._thicknessTexture),this._refractionTexture&&S.push(this._refractionTexture)},X.prototype.getAnimatables=function(S){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&S.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&S.push(this._refractionTexture)},X.prototype.dispose=function(S){S&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},X.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},X.AddFallbacks=function(S,u,T){return S.SS_SCATTERING&&u.addFallback(T++,"SS_SCATTERING"),S.SS_TRANSLUCENCY&&u.addFallback(T++,"SS_TRANSLUCENCY"),T},X.AddUniforms=function(S){S.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},X.AddSamplers=function(S){S.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},X.PrepareUniformBuffer=function(S){S.addUniform("vRefractionMicrosurfaceInfos",3),S.addUniform("vRefractionFilteringInfo",2),S.addUniform("vRefractionInfos",4),S.addUniform("refractionMatrix",16),S.addUniform("vThicknessInfos",2),S.addUniform("thicknessMatrix",16),S.addUniform("vThicknessParam",2),S.addUniform("vDiffusionDistance",3),S.addUniform("vTintColor",4),S.addUniform("vSubSurfaceIntensity",3),S.addUniform("scatteringDiffusionProfile",1)},X.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},X.prototype.serialize=function(){return s.a.Serialize(this)},X.prototype.parse=function(S,u,T){var H=this;s.a.Parse(function(){return H},S,u,T)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"isRefractionEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"isTranslucencyEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markScenePrePassDirty")],X.prototype,"isScatteringEnabled",void 0),Object(l.c)([Object(s.c)()],X.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(l.c)([Object(s.c)()],X.prototype,"refractionIntensity",void 0),Object(l.c)([Object(s.c)()],X.prototype,"translucencyIntensity",void 0),Object(l.c)([Object(s.c)()],X.prototype,"useAlbedoToTintRefraction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"thicknessTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"refractionTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(s.c)()],X.prototype,"_volumeIndexOfRefraction",void 0),Object(l.c)([Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"volumeIndexOfRefraction",null),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"invertRefractionY",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"linkRefractionWithTransparency",void 0),Object(l.c)([Object(s.c)()],X.prototype,"minimumThickness",void 0),Object(l.c)([Object(s.c)()],X.prototype,"maximumThickness",void 0),Object(l.c)([Object(s.e)()],X.prototype,"tintColor",void 0),Object(l.c)([Object(s.c)()],X.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(s.e)()],X.prototype,"diffusionDistance",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"useMaskFromThicknessTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],X.prototype,"useMaskFromThicknessTextureGltf",void 0),X}(),A=o(744),O=o(491),R=o(459),b=o(552),D=o(553),L=o(442),U=o(523),F=o(435),V=o(746),M="pbrFragmentDeclaration",x=`uniform vec4 vEyePosition;
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
`;F.a.IncludesShadersStore[M]=x;var _={name:M,shader:x},w=o(674),G=o(745),y="pbrUboDeclaration",Y=`layout(std140,column_major) uniform;





















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
`;F.a.IncludesShadersStore[y]=Y;var Z={name:y,shader:Y},ce="pbrFragmentExtraDeclaration",W=`
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
#endif`;F.a.IncludesShadersStore[ce]=W;var le={name:ce,shader:W},ne=o(650),ee=o(651),ae="pbrFragmentSamplersDeclaration",$=`#ifdef ALBEDO
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
#endif`;F.a.IncludesShadersStore[ae]=$;var z={name:ae,shader:$},me=o(524),Ee=o(592),se=o(558),ge=o(597),oe=o(457),_e=o(627),ue=o(605),B="pbrHelperFunctions",g=`
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
#endif`;F.a.IncludesShadersStore[B]=g;var N={name:B,shader:g},I=o(525),k=o(652),K="harmonicsFunctions",P=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;F.a.IncludesShadersStore[K]=P;var q={name:K,shader:P},pe="pbrDirectLightingSetupFunctions",Te=`
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
}`;F.a.IncludesShadersStore[pe]=Te;var Ae={name:pe,shader:Te},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;F.a.IncludesShadersStore[Ce]=Oe;var Le={name:Ce,shader:Oe},Me=o(606),xe=o(607),Ie="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
`;F.a.IncludesShadersStore[Ie]=Ve;var Ut={name:Ie,shader:Ve},Ge="pbrIBLFunctions",we=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
#endif`;F.a.IncludesShadersStore[Ge]=we;var Vt={name:Ge,shader:we},Gt=o(614),wt=o(615),Ht=o(653),He="pbrBlockAlbedoOpacity",je=`struct albedoOpacityOutParams
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
`;F.a.IncludesShadersStore[He]=je;var jt={name:He,shader:je},We="pbrBlockReflectivity",ze=`struct reflectivityOutParams
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
`;F.a.IncludesShadersStore[We]=ze;var Wt={name:We,shader:ze},Xe="pbrBlockAmbientOcclusion",Ye=`struct ambientOcclusionOutParams
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
`;F.a.IncludesShadersStore[Xe]=Ye;var zt={name:Xe,shader:Ye},Ke="pbrBlockAlphaFresnel",Qe=`#ifdef ALPHAFRESNEL
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
`;F.a.IncludesShadersStore[Ke]=Qe;var Xt={name:Ke,shader:Qe},ke="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;F.a.IncludesShadersStore[ke]=Ze;var Yt={name:ke,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;F.a.IncludesShadersStore[Je]=qe;var Kt={name:Je,shader:qe},$e="pbrBlockSheen",et=`#ifdef SHEEN
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
`;F.a.IncludesShadersStore[$e]=et;var Qt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;F.a.IncludesShadersStore[tt]=nt;var kt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;F.a.IncludesShadersStore[rt]=it;var Zt={name:rt,shader:it},Jt=o(550),at="pbrBlockNormalGeometric",ot=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;F.a.IncludesShadersStore[at]=ot;var qt={name:at,shader:ot},$t=o(616),st="pbrBlockNormalFinal",lt=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;F.a.IncludesShadersStore[st]=lt;var en={name:st,shader:lt},tn=o(747),ft="pbrBlockLightmapInit",ct=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;F.a.IncludesShadersStore[ft]=ct;var nn={name:ft,shader:ct},ut="pbrBlockGeometryInfo",dt=`float NdotVUnclamped=dot(normalW,viewDirectionW);

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
`;F.a.IncludesShadersStore[ut]=dt;var rn={name:ut,shader:dt},ht="pbrBlockReflectance0",pt=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
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
`;F.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",gt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;F.a.IncludesShadersStore[vt]=gt;var on={name:vt,shader:gt},mt="pbrBlockDirectLighting",Et=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;F.a.IncludesShadersStore[mt]=Et;var sn={name:mt,shader:Et},ln=o(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;F.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},St="pbrBlockFinalUnlitComponents",At=`
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
`;F.a.IncludesShadersStore[St]=At;var cn={name:St,shader:At},Rt="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;F.a.IncludesShadersStore[Rt]=Pt;var un={name:Rt,shader:Pt},dn=o(701),hn=o(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;F.a.IncludesShadersStore[Ct]=Ot;var pn={name:Ct,shader:Ot},bt="pbrDebug",It=`#if DEBUGMODE>0
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
#endif`;F.a.IncludesShadersStore[bt]=It;var vn={name:bt,shader:It},Mt="pbrPixelShader",xt=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;F.a.ShadersStore[Mt]=xt;var gn={name:Mt,shader:xt},yt="pbrVertexDeclaration",Dt=`uniform mat4 view;
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
#endif`;F.a.IncludesShadersStore[yt]=Dt;var mn={name:yt,shader:Dt},En=o(487),_n=o(748),Tn=o(749),Sn=o(593),An=o(656),Rn=o(657),Pn=o(658),Cn=o(496),On=o(497),bn=o(507),In=o(508),Mn=o(488),xn=o(489),yn=o(750),Dn=o(675),Ln=o(551),Fn=o(702),Nn=o(659),Bn=o(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;F.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=o(512),Fe=o(751),ye={effect:null,subMesh:null},Be=function(X){Object(l.d)(S,X);function S(){var u=X.call(this)||this;return u.PBR=!0,u.NUM_SAMPLES="0",u.REALTIME_FILTERING=!1,u.MAINUV1=!1,u.MAINUV2=!1,u.UV1=!1,u.UV2=!1,u.ALBEDO=!1,u.GAMMAALBEDO=!1,u.ALBEDODIRECTUV=0,u.VERTEXCOLOR=!1,u.DETAIL=!1,u.DETAILDIRECTUV=0,u.DETAIL_NORMALBLENDMETHOD=0,u.AMBIENT=!1,u.AMBIENTDIRECTUV=0,u.AMBIENTINGRAYSCALE=!1,u.OPACITY=!1,u.VERTEXALPHA=!1,u.OPACITYDIRECTUV=0,u.OPACITYRGB=!1,u.ALPHATEST=!1,u.DEPTHPREPASS=!1,u.ALPHABLEND=!1,u.ALPHAFROMALBEDO=!1,u.ALPHATESTVALUE="0.5",u.SPECULAROVERALPHA=!1,u.RADIANCEOVERALPHA=!1,u.ALPHAFRESNEL=!1,u.LINEARALPHAFRESNEL=!1,u.PREMULTIPLYALPHA=!1,u.EMISSIVE=!1,u.EMISSIVEDIRECTUV=0,u.REFLECTIVITY=!1,u.REFLECTIVITYDIRECTUV=0,u.SPECULARTERM=!1,u.MICROSURFACEFROMREFLECTIVITYMAP=!1,u.MICROSURFACEAUTOMATIC=!1,u.LODBASEDMICROSFURACE=!1,u.MICROSURFACEMAP=!1,u.MICROSURFACEMAPDIRECTUV=0,u.METALLICWORKFLOW=!1,u.ROUGHNESSSTOREINMETALMAPALPHA=!1,u.ROUGHNESSSTOREINMETALMAPGREEN=!1,u.METALLNESSSTOREINMETALMAPBLUE=!1,u.AOSTOREINMETALMAPRED=!1,u.METALLIC_REFLECTANCE=!1,u.METALLIC_REFLECTANCEDIRECTUV=0,u.ENVIRONMENTBRDF=!1,u.ENVIRONMENTBRDF_RGBD=!1,u.NORMAL=!1,u.TANGENT=!1,u.BUMP=!1,u.BUMPDIRECTUV=0,u.OBJECTSPACE_NORMALMAP=!1,u.PARALLAX=!1,u.PARALLAXOCCLUSION=!1,u.NORMALXYSCALE=!0,u.LIGHTMAP=!1,u.LIGHTMAPDIRECTUV=0,u.USELIGHTMAPASSHADOWMAP=!1,u.GAMMALIGHTMAP=!1,u.RGBDLIGHTMAP=!1,u.REFLECTION=!1,u.REFLECTIONMAP_3D=!1,u.REFLECTIONMAP_SPHERICAL=!1,u.REFLECTIONMAP_PLANAR=!1,u.REFLECTIONMAP_CUBIC=!1,u.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,u.REFLECTIONMAP_PROJECTION=!1,u.REFLECTIONMAP_SKYBOX=!1,u.REFLECTIONMAP_EXPLICIT=!1,u.REFLECTIONMAP_EQUIRECTANGULAR=!1,u.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,u.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,u.INVERTCUBICMAP=!1,u.USESPHERICALFROMREFLECTIONMAP=!1,u.USEIRRADIANCEMAP=!1,u.SPHERICAL_HARMONICS=!1,u.USESPHERICALINVERTEX=!1,u.REFLECTIONMAP_OPPOSITEZ=!1,u.LODINREFLECTIONALPHA=!1,u.GAMMAREFLECTION=!1,u.RGBDREFLECTION=!1,u.LINEARSPECULARREFLECTION=!1,u.RADIANCEOCCLUSION=!1,u.HORIZONOCCLUSION=!1,u.INSTANCES=!1,u.THIN_INSTANCES=!1,u.PREPASS=!1,u.PREPASS_IRRADIANCE=!1,u.PREPASS_IRRADIANCE_INDEX=-1,u.PREPASS_ALBEDO=!1,u.PREPASS_ALBEDO_INDEX=-1,u.PREPASS_DEPTH=!1,u.PREPASS_DEPTH_INDEX=-1,u.PREPASS_NORMAL=!1,u.PREPASS_NORMAL_INDEX=-1,u.PREPASS_POSITION=!1,u.PREPASS_POSITION_INDEX=-1,u.PREPASS_VELOCITY=!1,u.PREPASS_VELOCITY_INDEX=-1,u.PREPASS_REFLECTIVITY=!1,u.PREPASS_REFLECTIVITY_INDEX=-1,u.SCENE_MRT_COUNT=0,u.NUM_BONE_INFLUENCERS=0,u.BonesPerMesh=0,u.BONETEXTURE=!1,u.BONES_VELOCITY_ENABLED=!1,u.NONUNIFORMSCALING=!1,u.MORPHTARGETS=!1,u.MORPHTARGETS_NORMAL=!1,u.MORPHTARGETS_TANGENT=!1,u.MORPHTARGETS_UV=!1,u.NUM_MORPH_INFLUENCERS=0,u.MORPHTARGETS_TEXTURE=!1,u.IMAGEPROCESSING=!1,u.VIGNETTE=!1,u.VIGNETTEBLENDMODEMULTIPLY=!1,u.VIGNETTEBLENDMODEOPAQUE=!1,u.TONEMAPPING=!1,u.TONEMAPPING_ACES=!1,u.CONTRAST=!1,u.COLORCURVES=!1,u.COLORGRADING=!1,u.COLORGRADING3D=!1,u.SAMPLER3DGREENDEPTH=!1,u.SAMPLER3DBGRMAP=!1,u.IMAGEPROCESSINGPOSTPROCESS=!1,u.EXPOSURE=!1,u.MULTIVIEW=!1,u.USEPHYSICALLIGHTFALLOFF=!1,u.USEGLTFLIGHTFALLOFF=!1,u.TWOSIDEDLIGHTING=!1,u.SHADOWFLOAT=!1,u.CLIPPLANE=!1,u.CLIPPLANE2=!1,u.CLIPPLANE3=!1,u.CLIPPLANE4=!1,u.CLIPPLANE5=!1,u.CLIPPLANE6=!1,u.POINTSIZE=!1,u.FOG=!1,u.LOGARITHMICDEPTH=!1,u.FORCENORMALFORWARD=!1,u.SPECULARAA=!1,u.CLEARCOAT=!1,u.CLEARCOAT_DEFAULTIOR=!1,u.CLEARCOAT_TEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS=!1,u.CLEARCOAT_TEXTUREDIRECTUV=0,u.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,u.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.CLEARCOAT_BUMP=!1,u.CLEARCOAT_BUMPDIRECTUV=0,u.CLEARCOAT_REMAP_F0=!0,u.CLEARCOAT_TINT=!1,u.CLEARCOAT_TINT_TEXTURE=!1,u.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,u.ANISOTROPIC=!1,u.ANISOTROPIC_TEXTURE=!1,u.ANISOTROPIC_TEXTUREDIRECTUV=0,u.BRDF_V_HEIGHT_CORRELATED=!1,u.MS_BRDF_ENERGY_CONSERVATION=!1,u.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,u.SHEEN=!1,u.SHEEN_TEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS=!1,u.SHEEN_TEXTUREDIRECTUV=0,u.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,u.SHEEN_LINKWITHALBEDO=!1,u.SHEEN_ROUGHNESS=!1,u.SHEEN_ALBEDOSCALING=!1,u.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.SUBSURFACE=!1,u.SS_REFRACTION=!1,u.SS_TRANSLUCENCY=!1,u.SS_SCATTERING=!1,u.SS_THICKNESSANDMASK_TEXTURE=!1,u.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,u.SS_REFRACTIONMAP_3D=!1,u.SS_REFRACTIONMAP_OPPOSITEZ=!1,u.SS_LODINREFRACTIONALPHA=!1,u.SS_GAMMAREFRACTION=!1,u.SS_RGBDREFRACTION=!1,u.SS_LINEARSPECULARREFRACTION=!1,u.SS_LINKREFRACTIONTOTRANSPARENCY=!1,u.SS_ALBEDOFORREFRACTIONTINT=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,u.UNLIT=!1,u.DEBUGMODE=0,u.rebuild(),u}return S.prototype.reset=function(){X.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},S}(b.a),Bt=function(X){Object(l.d)(S,X);function S(u,T){var H=X.call(this,u,T)||this;return H._directIntensity=1,H._emissiveIntensity=1,H._environmentIntensity=1,H._specularIntensity=1,H._lightingInfos=new h.f(H._directIntensity,H._emissiveIntensity,H._environmentIntensity,H._specularIntensity),H._disableBumpMap=!1,H._albedoTexture=null,H._ambientTexture=null,H._ambientTextureStrength=1,H._ambientTextureImpactOnAnalyticalLights=S.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,H._opacityTexture=null,H._reflectionTexture=null,H._emissiveTexture=null,H._reflectivityTexture=null,H._metallicTexture=null,H._metallic=null,H._roughness=null,H._metallicF0Factor=1,H._metallicReflectanceColor=f.a.White(),H._metallicReflectanceTexture=null,H._microSurfaceTexture=null,H._bumpTexture=null,H._lightmapTexture=null,H._ambientColor=new f.a(0,0,0),H._albedoColor=new f.a(1,1,1),H._reflectivityColor=new f.a(1,1,1),H._reflectionColor=new f.a(1,1,1),H._emissiveColor=new f.a(0,0,0),H._microSurface=.9,H._useLightmapAsShadowmap=!1,H._useHorizonOcclusion=!0,H._useRadianceOcclusion=!0,H._useAlphaFromAlbedoTexture=!1,H._useSpecularOverAlpha=!0,H._useMicroSurfaceFromReflectivityMapAlpha=!1,H._useRoughnessFromMetallicTextureAlpha=!0,H._useRoughnessFromMetallicTextureGreen=!1,H._useMetallnessFromMetallicTextureBlue=!1,H._useAmbientOcclusionFromMetallicTextureRed=!1,H._useAmbientInGrayScale=!1,H._useAutoMicroSurfaceFromReflectivityMap=!1,H._lightFalloff=S.LIGHTFALLOFF_PHYSICAL,H._useRadianceOverAlpha=!0,H._useObjectSpaceNormalMap=!1,H._useParallax=!1,H._useParallaxOcclusion=!1,H._parallaxScaleBias=.05,H._disableLighting=!1,H._maxSimultaneousLights=4,H._invertNormalMapX=!1,H._invertNormalMapY=!1,H._twoSidedLighting=!1,H._alphaCutOff=.4,H._forceAlphaTest=!1,H._useAlphaFresnel=!1,H._useLinearAlphaFresnel=!1,H._environmentBRDFTexture=null,H._forceIrradianceInFragment=!1,H._realTimeFiltering=!1,H._realTimeFilteringQuality=8,H._forceNormalForward=!1,H._enableSpecularAntiAliasing=!1,H._imageProcessingObserver=null,H._renderTargets=new v.a(16),H._globalAmbientColor=new f.a(0,0,0),H._useLogarithmicDepth=!1,H._unlit=!1,H._debugMode=0,H.debugMode=0,H.debugLimit=-1,H.debugFactor=1,H.clearCoat=new t.a(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.anisotropy=new r(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.brdf=new a(H._markAllSubMeshesAsMiscDirty.bind(H)),H.sheen=new p(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.detailMap=new Fe.a(H._markAllSubMeshesAsTexturesDirty.bind(H)),H._rebuildInParallel=!1,H._attachImageProcessingConfiguration(null),H.getRenderTargetTextures=function(){return H._renderTargets.reset(),e.a.ReflectionTextureEnabled&&H._reflectionTexture&&H._reflectionTexture.isRenderTarget&&H._renderTargets.push(H._reflectionTexture),H.subSurface.fillRenderTargetTextures(H._renderTargets),H._renderTargets},H._environmentBRDFTexture=c.a.GetEnvironmentBRDFTexture(T),H.subSurface=new m(H._markAllSubMeshesAsTexturesDirty.bind(H),H._markScenePrePassDirty.bind(H),T),H.prePassConfiguration=new A.a,H}return Object.defineProperty(S.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(u){this._realTimeFiltering=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(u){this._realTimeFilteringQuality=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),S.prototype._attachImageProcessingConfiguration=function(u){var T=this;u!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),u?this._imageProcessingConfiguration=u:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){T._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(S.prototype,"hasRenderTargetTextures",{get:function(){return e.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),S.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(S.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(u){this._useLogarithmicDepth=u&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===S.PBRMATERIAL_OPAQUE||this._transparencyMode===S.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),S.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},S.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===S.PBRMATERIAL_ALPHATEST)},S.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==S.PBRMATERIAL_OPAQUE},S.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},S.prototype.getAlphaTestTexture=function(){return this._albedoTexture},S.prototype.isReadyForSubMesh=function(u,T,H){if(T.effect&&this.isFrozen&&T.effect._wasPreviouslyReady)return!0;T._materialDefines||(T._materialDefines=new Be);var re=T._materialDefines;if(this._isReadyForSubMesh(T))return!0;var he=this.getScene(),te=he.getEngine();if(re._areTexturesDirty&&he.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&e.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&e.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Se=this._getReflectionTexture();if(Se&&e.a.ReflectionTextureEnabled&&(!Se.isReadyOrNotBlocking()||Se.irradianceTexture&&!Se.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&e.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&e.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(e.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(te.getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(re,he)||!this.clearCoat.isReadyForSubMesh(re,he,te,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(re,he)||!this.anisotropy.isReadyForSubMesh(re,he)||!this.detailMap.isReadyForSubMesh(re,he)||re._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!te.getCaps().standardDerivatives&&!u.isVerticesDataPresent(i.b.NormalKind)&&(u.createNormals(!0),C.a.Warn("PBRMaterial: Normals have been created for the mesh: "+u.name));var ie=T.effect,Q=re._areLightsDisposed,de=this._prepareEffect(u,re,this.onCompiled,this.onError,H,null,T.getRenderingMesh().hasThinInstances);if(de)if(this._onEffectCreatedObservable&&(ye.effect=de,ye.subMesh=T,this._onEffectCreatedObservable.notifyObservers(ye)),this.allowShaderHotSwapping&&ie&&!de.isReady()){if(de=ie,this._rebuildInParallel=!0,re.markAsUnprocessed(),Q)return re._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,he.resetCachedMaterial(),T.setEffect(de,re),this.buildUniformLayout();return!T.effect||!T.effect.isReady()?!1:(re._renderId=he.getRenderId(),T.effect._wasPreviouslyReady=!0,!0)},S.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},S.prototype._prepareEffect=function(u,T,H,re,he,te,Se){if(H===void 0&&(H=null),re===void 0&&(re=null),he===void 0&&(he=null),te===void 0&&(te=null),this._prepareDefines(u,T,he,te,Se),!T.isDirty)return null;T.markAsProcessed();var ie=this.getScene(),Q=ie.getEngine(),de=new Nt.a,ve=0;T.USESPHERICALINVERTEX&&de.addFallback(ve++,"USESPHERICALINVERTEX"),T.FOG&&de.addFallback(ve,"FOG"),T.SPECULARAA&&de.addFallback(ve,"SPECULARAA"),T.POINTSIZE&&de.addFallback(ve,"POINTSIZE"),T.LOGARITHMICDEPTH&&de.addFallback(ve,"LOGARITHMICDEPTH"),T.PARALLAX&&de.addFallback(ve,"PARALLAX"),T.PARALLAXOCCLUSION&&de.addFallback(ve++,"PARALLAXOCCLUSION"),ve=r.AddFallbacks(T,de,ve),ve=r.AddFallbacks(T,de,ve),ve=m.AddFallbacks(T,de,ve),ve=p.AddFallbacks(T,de,ve),T.ENVIRONMENTBRDF&&de.addFallback(ve++,"ENVIRONMENTBRDF"),T.TANGENT&&de.addFallback(ve++,"TANGENT"),T.BUMP&&de.addFallback(ve++,"BUMP"),ve=n.a.HandleFallbacksForShadows(T,de,this._maxSimultaneousLights,ve++),T.SPECULARTERM&&de.addFallback(ve++,"SPECULARTERM"),T.USESPHERICALFROMREFLECTIONMAP&&de.addFallback(ve++,"USESPHERICALFROMREFLECTIONMAP"),T.USEIRRADIANCEMAP&&de.addFallback(ve++,"USEIRRADIANCEMAP"),T.LIGHTMAP&&de.addFallback(ve++,"LIGHTMAP"),T.NORMAL&&de.addFallback(ve++,"NORMAL"),T.AMBIENT&&de.addFallback(ve++,"AMBIENT"),T.EMISSIVE&&de.addFallback(ve++,"EMISSIVE"),T.VERTEXCOLOR&&de.addFallback(ve++,"VERTEXCOLOR"),T.MORPHTARGETS&&de.addFallback(ve++,"MORPHTARGETS"),T.MULTIVIEW&&de.addFallback(0,"MULTIVIEW");var Re=[i.b.PositionKind];T.NORMAL&&Re.push(i.b.NormalKind),T.TANGENT&&Re.push(i.b.TangentKind),T.UV1&&Re.push(i.b.UVKind),T.UV2&&Re.push(i.b.UV2Kind),T.VERTEXCOLOR&&Re.push(i.b.ColorKind),n.a.PrepareAttributesForBones(Re,u,T,de),n.a.PrepareAttributesForInstances(Re,T),n.a.PrepareAttributesForMorphTargets(Re,u,T);var fe="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],De=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),m.AddUniforms(Pe),m.AddSamplers(be),t.a.AddUniforms(Pe),t.a.AddSamplers(be),r.AddUniforms(Pe),r.AddSamplers(be),p.AddUniforms(Pe),p.AddSamplers(be),A.a.AddUniforms(Pe),A.a.AddSamplers(Pe),O.a&&(O.a.PrepareUniforms(Pe,T),O.a.PrepareSamplers(be,T)),n.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:De,samplers:be,defines:T,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(fe=this.customShaderNameResolve(fe,Pe,De,be,T,Re,Ne));var Ue=T.toString();return Q.createEffect(fe,{attributes:Re,uniformsNames:Pe,uniformBuffersNames:De,samplers:be,defines:Ue,fallbacks:de,onCompiled:H,onError:re,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:T.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:T.PREPASS},Q)},S.prototype._prepareDefines=function(u,T,H,re,he){H===void 0&&(H=null),re===void 0&&(re=null),he===void 0&&(he=!1);var te=this.getScene(),Se=te.getEngine();if(n.a.PrepareDefinesForLights(te,u,T,!0,this._maxSimultaneousLights,this._disableLighting),T._needNormals=!0,n.a.PrepareDefinesForMultiview(te,T),n.a.PrepareDefinesForPrePass(te,T,this.canRenderToMRT),T.METALLICWORKFLOW=this.isMetallicWorkflow(),T._areTexturesDirty){if(T._needUVs=!1,te.texturesEnabled){te.getEngine().getCaps().textureLOD&&(T.LODBASEDMICROSFURACE=!0),this._albedoTexture&&e.a.DiffuseTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._albedoTexture,T,"ALBEDO"),T.GAMMAALBEDO=this._albedoTexture.gammaSpace):T.ALBEDO=!1,this._ambientTexture&&e.a.AmbientTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._ambientTexture,T,"AMBIENT"),T.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):T.AMBIENT=!1,this._opacityTexture&&e.a.OpacityTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._opacityTexture,T,"OPACITY"),T.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):T.OPACITY=!1;var ie=this._getReflectionTexture();if(ie&&e.a.ReflectionTextureEnabled){switch(T.REFLECTION=!0,T.GAMMAREFLECTION=ie.gammaSpace,T.RGBDREFLECTION=ie.isRGBD,T.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!ie.invertZ:ie.invertZ,T.LODINREFLECTIONALPHA=ie.lodLevelInAlpha,T.LINEARSPECULARREFLECTION=ie.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(T.NUM_SAMPLES=""+this.realTimeFilteringQuality,Se._features.needTypeSuffixInShaderConstants&&(T.NUM_SAMPLES=T.NUM_SAMPLES+"u"),T.REALTIME_FILTERING=!0):T.REALTIME_FILTERING=!1,ie.coordinatesMode===L.a.INVCUBIC_MODE&&(T.INVERTCUBICMAP=!0),T.REFLECTIONMAP_3D=ie.isCube,T.REFLECTIONMAP_CUBIC=!1,T.REFLECTIONMAP_EXPLICIT=!1,T.REFLECTIONMAP_PLANAR=!1,T.REFLECTIONMAP_PROJECTION=!1,T.REFLECTIONMAP_SKYBOX=!1,T.REFLECTIONMAP_SPHERICAL=!1,T.REFLECTIONMAP_EQUIRECTANGULAR=!1,T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,ie.coordinatesMode){case L.a.EXPLICIT_MODE:T.REFLECTIONMAP_EXPLICIT=!0;break;case L.a.PLANAR_MODE:T.REFLECTIONMAP_PLANAR=!0;break;case L.a.PROJECTION_MODE:T.REFLECTIONMAP_PROJECTION=!0;break;case L.a.SKYBOX_MODE:T.REFLECTIONMAP_SKYBOX=!0;break;case L.a.SPHERICAL_MODE:T.REFLECTIONMAP_SPHERICAL=!0;break;case L.a.EQUIRECTANGULAR_MODE:T.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case L.a.FIXED_EQUIRECTANGULAR_MODE:T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case L.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case L.a.CUBIC_MODE:case L.a.INVCUBIC_MODE:default:T.REFLECTIONMAP_CUBIC=!0,T.USE_LOCAL_REFLECTIONMAP_CUBIC=!!ie.boundingBoxSize;break}ie.coordinatesMode!==L.a.SKYBOX_MODE&&(ie.irradianceTexture?(T.USEIRRADIANCEMAP=!0,T.USESPHERICALFROMREFLECTIONMAP=!1):ie.isCube&&(T.USESPHERICALFROMREFLECTIONMAP=!0,T.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||te.getEngine().getCaps().maxVaryingVectors<=8?T.USESPHERICALINVERTEX=!1:T.USESPHERICALINVERTEX=!0))}else T.REFLECTION=!1,T.REFLECTIONMAP_3D=!1,T.REFLECTIONMAP_SPHERICAL=!1,T.REFLECTIONMAP_PLANAR=!1,T.REFLECTIONMAP_CUBIC=!1,T.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,T.REFLECTIONMAP_PROJECTION=!1,T.REFLECTIONMAP_SKYBOX=!1,T.REFLECTIONMAP_EXPLICIT=!1,T.REFLECTIONMAP_EQUIRECTANGULAR=!1,T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,T.INVERTCUBICMAP=!1,T.USESPHERICALFROMREFLECTIONMAP=!1,T.USEIRRADIANCEMAP=!1,T.USESPHERICALINVERTEX=!1,T.REFLECTIONMAP_OPPOSITEZ=!1,T.LODINREFLECTIONALPHA=!1,T.GAMMAREFLECTION=!1,T.RGBDREFLECTION=!1,T.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&e.a.LightmapTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._lightmapTexture,T,"LIGHTMAP"),T.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,T.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,T.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):T.LIGHTMAP=!1,this._emissiveTexture&&e.a.EmissiveTextureEnabled?n.a.PrepareDefinesForMergedUV(this._emissiveTexture,T,"EMISSIVE"):T.EMISSIVE=!1,e.a.SpecularTextureEnabled?(this._metallicTexture?(n.a.PrepareDefinesForMergedUV(this._metallicTexture,T,"REFLECTIVITY"),T.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,T.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,T.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,T.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(n.a.PrepareDefinesForMergedUV(this._reflectivityTexture,T,"REFLECTIVITY"),T.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,T.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):T.REFLECTIVITY=!1,this._metallicReflectanceTexture?n.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,T,"METALLIC_REFLECTANCE"):T.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?n.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,T,"MICROSURFACEMAP"):T.MICROSURFACEMAP=!1):(T.REFLECTIVITY=!1,T.MICROSURFACEMAP=!1),te.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap?(n.a.PrepareDefinesForMergedUV(this._bumpTexture,T,"BUMP"),this._useParallax&&this._albedoTexture&&e.a.DiffuseTextureEnabled?(T.PARALLAX=!0,T.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):T.PARALLAX=!1,T.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):T.BUMP=!1,this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled?(T.ENVIRONMENTBRDF=!0,T.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(T.ENVIRONMENTBRDF=!1,T.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?T.ALPHAFROMALBEDO=!0:T.ALPHAFROMALBEDO=!1}T.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===S.LIGHTFALLOFF_STANDARD?(T.USEPHYSICALLIGHTFALLOFF=!1,T.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===S.LIGHTFALLOFF_GLTF?(T.USEPHYSICALLIGHTFALLOFF=!1,T.USEGLTFLIGHTFALLOFF=!0):(T.USEPHYSICALLIGHTFALLOFF=!0,T.USEGLTFLIGHTFALLOFF=!1),T.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?T.TWOSIDEDLIGHTING=!0:T.TWOSIDEDLIGHTING=!1,T.SPECULARAA=te.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(T._areTexturesDirty||T._areMiscDirty)&&(T.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),T.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,T.ALPHABLEND=this.needAlphaBlendingForMesh(u),T.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,T.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),T._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(T),T.FORCENORMALFORWARD=this._forceNormalForward,T.RADIANCEOCCLUSION=this._useRadianceOcclusion,T.HORIZONOCCLUSION=this._useHorizonOcclusion,T._areMiscDirty&&(n.a.PrepareDefinesForMisc(u,te,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(u)||this._forceAlphaTest,T),T.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!u.isVerticesDataPresent(i.b.NormalKind),T.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(T,te),this.subSurface.prepareDefines(T,te),this.clearCoat.prepareDefines(T,te),this.anisotropy.prepareDefines(T,u,te),this.brdf.prepareDefines(T),this.sheen.prepareDefines(T,te),n.a.PrepareDefinesForFrameBoundValues(te,Se,T,!!H,re,he),n.a.PrepareDefinesForAttributes(u,T,!0,!0,!0,this._transparencyMode!==S.PBRMATERIAL_OPAQUE)},S.prototype.forceCompilation=function(u,T,H){var re=this,he=Object(l.a)({clipPlane:!1,useInstances:!1},H),te=new Be,Se=this._prepareEffect(u,te,void 0,void 0,he.useInstances,he.clipPlane,u.hasThinInstances);this._onEffectCreatedObservable&&(ye.effect=Se,ye.subMesh=null,this._onEffectCreatedObservable.notifyObservers(ye)),Se.isReady()?T&&T(this):Se.onCompileObservable.add(function(){T&&T(re)})},S.prototype.buildUniformLayout=function(){var u=this._uniformBuffer;u.addUniform("vAlbedoInfos",2),u.addUniform("vAmbientInfos",4),u.addUniform("vOpacityInfos",2),u.addUniform("vEmissiveInfos",2),u.addUniform("vLightmapInfos",2),u.addUniform("vReflectivityInfos",3),u.addUniform("vMicroSurfaceSamplerInfos",2),u.addUniform("vReflectionInfos",2),u.addUniform("vReflectionFilteringInfo",2),u.addUniform("vReflectionPosition",3),u.addUniform("vReflectionSize",3),u.addUniform("vBumpInfos",3),u.addUniform("albedoMatrix",16),u.addUniform("ambientMatrix",16),u.addUniform("opacityMatrix",16),u.addUniform("emissiveMatrix",16),u.addUniform("lightmapMatrix",16),u.addUniform("reflectivityMatrix",16),u.addUniform("microSurfaceSamplerMatrix",16),u.addUniform("bumpMatrix",16),u.addUniform("vTangentSpaceParams",2),u.addUniform("reflectionMatrix",16),u.addUniform("vReflectionColor",3),u.addUniform("vAlbedoColor",4),u.addUniform("vLightingIntensity",4),u.addUniform("vReflectionMicrosurfaceInfos",3),u.addUniform("pointSize",1),u.addUniform("vReflectivityColor",4),u.addUniform("vEmissiveColor",3),u.addUniform("vAmbientColor",3),u.addUniform("vDebugMode",2),u.addUniform("vMetallicReflectanceFactors",4),u.addUniform("vMetallicReflectanceInfos",2),u.addUniform("metallicReflectanceMatrix",16),t.a.PrepareUniformBuffer(u),r.PrepareUniformBuffer(u),p.PrepareUniformBuffer(u),m.PrepareUniformBuffer(u),Fe.a.PrepareUniformBuffer(u),u.addUniform("vSphericalL00",3),u.addUniform("vSphericalL1_1",3),u.addUniform("vSphericalL10",3),u.addUniform("vSphericalL11",3),u.addUniform("vSphericalL2_2",3),u.addUniform("vSphericalL2_1",3),u.addUniform("vSphericalL20",3),u.addUniform("vSphericalL21",3),u.addUniform("vSphericalL22",3),u.addUniform("vSphericalX",3),u.addUniform("vSphericalY",3),u.addUniform("vSphericalZ",3),u.addUniform("vSphericalXX_ZZ",3),u.addUniform("vSphericalYY_ZZ",3),u.addUniform("vSphericalZZ",3),u.addUniform("vSphericalXY",3),u.addUniform("vSphericalYZ",3),u.addUniform("vSphericalZX",3),u.create()},S.prototype.unbind=function(){if(this._activeEffect){var u=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),u=!0),this.subSurface.unbind(this._activeEffect)&&(u=!0),u&&this._markAllSubMeshesAsTexturesDirty()}X.prototype.unbind.call(this)},S.prototype.bindForSubMesh=function(u,T,H){var re=this.getScene(),he=H._materialDefines;if(!!he){var te=H.effect;if(!!te){this._activeEffect=te,T.getMeshUniformBuffer().bindToEffect(te,"Mesh"),T.transferToEffect(u),this.prePassConfiguration.bindForSubMesh(this._activeEffect,re,T,u,this.isFrozen),he.OBJECTSPACE_NORMALMAP&&(u.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Se=this._mustRebind(re,te,T.visibility);n.a.BindBonesParameters(T,this._activeEffect,this.prePassConfiguration);var ie=null,Q=this._uniformBuffer;if(Se){var de=re.getEngine();if(Q.bindToEffect(te,"Material"),this.bindViewProjection(te),ie=this._getReflectionTexture(),!Q.useUbo||!this.isFrozen||!Q.isSync){if(re.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&(Q.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),n.a.BindTextureMatrix(this._albedoTexture,Q,"albedo")),this._ambientTexture&&e.a.AmbientTextureEnabled&&(Q.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),n.a.BindTextureMatrix(this._ambientTexture,Q,"ambient")),this._opacityTexture&&e.a.OpacityTextureEnabled&&(Q.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),n.a.BindTextureMatrix(this._opacityTexture,Q,"opacity")),ie&&e.a.ReflectionTextureEnabled){if(Q.updateMatrix("reflectionMatrix",ie.getReflectionTextureMatrix()),Q.updateFloat2("vReflectionInfos",ie.level,0),ie.boundingBoxSize){var ve=ie;Q.updateVector3("vReflectionPosition",ve.boundingBoxPosition),Q.updateVector3("vReflectionSize",ve.boundingBoxSize)}if(this.realTimeFiltering){var Re=ie.getSize().width;Q.updateFloat2("vReflectionFilteringInfo",Re,d.a.Log2(Re))}if(!he.USEIRRADIANCEMAP){var fe=ie.sphericalPolynomial;if(he.USESPHERICALFROMREFLECTIONMAP&&fe)if(he.SPHERICAL_HARMONICS){var Pe=fe.preScaledHarmonics;Q.updateVector3("vSphericalL00",Pe.l00),Q.updateVector3("vSphericalL1_1",Pe.l1_1),Q.updateVector3("vSphericalL10",Pe.l10),Q.updateVector3("vSphericalL11",Pe.l11),Q.updateVector3("vSphericalL2_2",Pe.l2_2),Q.updateVector3("vSphericalL2_1",Pe.l2_1),Q.updateVector3("vSphericalL20",Pe.l20),Q.updateVector3("vSphericalL21",Pe.l21),Q.updateVector3("vSphericalL22",Pe.l22)}else Q.updateFloat3("vSphericalX",fe.x.x,fe.x.y,fe.x.z),Q.updateFloat3("vSphericalY",fe.y.x,fe.y.y,fe.y.z),Q.updateFloat3("vSphericalZ",fe.z.x,fe.z.y,fe.z.z),Q.updateFloat3("vSphericalXX_ZZ",fe.xx.x-fe.zz.x,fe.xx.y-fe.zz.y,fe.xx.z-fe.zz.z),Q.updateFloat3("vSphericalYY_ZZ",fe.yy.x-fe.zz.x,fe.yy.y-fe.zz.y,fe.yy.z-fe.zz.z),Q.updateFloat3("vSphericalZZ",fe.zz.x,fe.zz.y,fe.zz.z),Q.updateFloat3("vSphericalXY",fe.xy.x,fe.xy.y,fe.xy.z),Q.updateFloat3("vSphericalYZ",fe.yz.x,fe.yz.y,fe.yz.z),Q.updateFloat3("vSphericalZX",fe.zx.x,fe.zx.y,fe.zx.z)}Q.updateFloat3("vReflectionMicrosurfaceInfos",ie.getSize().width,ie.lodGenerationScale,ie.lodGenerationOffset)}this._emissiveTexture&&e.a.EmissiveTextureEnabled&&(Q.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),n.a.BindTextureMatrix(this._emissiveTexture,Q,"emissive")),this._lightmapTexture&&e.a.LightmapTextureEnabled&&(Q.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),n.a.BindTextureMatrix(this._lightmapTexture,Q,"lightmap")),e.a.SpecularTextureEnabled&&(this._metallicTexture?(Q.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),n.a.BindTextureMatrix(this._metallicTexture,Q,"reflectivity")):this._reflectivityTexture&&(Q.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),n.a.BindTextureMatrix(this._reflectivityTexture,Q,"reflectivity")),this._metallicReflectanceTexture&&(Q.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),n.a.BindTextureMatrix(this._metallicReflectanceTexture,Q,"metallicReflectance")),this._microSurfaceTexture&&(Q.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),n.a.BindTextureMatrix(this._microSurfaceTexture,Q,"microSurfaceSampler"))),this._bumpTexture&&de.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&(Q.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),n.a.BindTextureMatrix(this._bumpTexture,Q,"bump"),re._mirroredCameraPosition?Q.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):Q.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&Q.updateFloat("pointSize",this.pointSize),he.METALLICWORKFLOW){f.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,f.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,Q.updateColor4("vReflectivityColor",f.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,De=1,Ne=Math.pow((be-De)/(be+De),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,f.c.Color3[0]);var Ue=this._metallicF0Factor;Q.updateColor4("vMetallicReflectanceFactors",f.c.Color3[0],Ue)}else Q.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);Q.updateColor3("vEmissiveColor",e.a.EmissiveTextureEnabled?this._emissiveColor:f.a.BlackReadOnly),Q.updateColor3("vReflectionColor",this._reflectionColor),!he.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?Q.updateColor4("vAlbedoColor",this._albedoColor,1):Q.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*re.environmentIntensity,this._lightingInfos.w=this._specularIntensity,Q.updateVector4("vLightingIntensity",this._lightingInfos),re.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),Q.updateColor3("vAmbientColor",this._globalAmbientColor),Q.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}re.texturesEnabled&&(this._albedoTexture&&e.a.DiffuseTextureEnabled&&Q.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&e.a.AmbientTextureEnabled&&Q.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&e.a.OpacityTextureEnabled&&Q.setTexture("opacitySampler",this._opacityTexture),ie&&e.a.ReflectionTextureEnabled&&(he.LODBASEDMICROSFURACE?Q.setTexture("reflectionSampler",ie):(Q.setTexture("reflectionSampler",ie._lodTextureMid||ie),Q.setTexture("reflectionSamplerLow",ie._lodTextureLow||ie),Q.setTexture("reflectionSamplerHigh",ie._lodTextureHigh||ie)),he.USEIRRADIANCEMAP&&Q.setTexture("irradianceSampler",ie.irradianceTexture)),he.ENVIRONMENTBRDF&&Q.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&e.a.EmissiveTextureEnabled&&Q.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&e.a.LightmapTextureEnabled&&Q.setTexture("lightmapSampler",this._lightmapTexture),e.a.SpecularTextureEnabled&&(this._metallicTexture?Q.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&Q.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&Q.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&Q.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&de.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&Q.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(Q,re,this.isFrozen),this.subSurface.bindForSubMesh(Q,re,de,this.isFrozen,he.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(Q,re,de,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,H),this.anisotropy.bindForSubMesh(Q,re,this.isFrozen),this.sheen.bindForSubMesh(Q,re,this.isFrozen,H),n.a.BindClipPlane(this._activeEffect,re),this.bindEyePosition(te)}(Se||!this.isFrozen)&&(re.lightsEnabled&&!this._disableLighting&&n.a.BindLights(re,T,this._activeEffect,he,this._maxSimultaneousLights,this._rebuildInParallel),(re.fogEnabled&&T.applyFog&&re.fogMode!==E.a.FOGMODE_NONE||ie)&&this.bindView(te),n.a.BindFogParameters(re,T,this._activeEffect,!0),he.NUM_MORPH_INFLUENCERS&&n.a.BindMorphTargetParameters(T,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),n.a.BindLogDepth(he,this._activeEffect,re)),this._afterBind(T,this._activeEffect),Q.update()}}},S.prototype.getAnimatables=function(){var u=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&u.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&u.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&u.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&u.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&u.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?u.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&u.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&u.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&u.push(this._lightmapTexture),this.detailMap.getAnimatables(u),this.subSurface.getAnimatables(u),this.clearCoat.getAnimatables(u),this.sheen.getAnimatables(u),this.anisotropy.getAnimatables(u),u},S.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},S.prototype.getActiveTextures=function(){var u=X.prototype.getActiveTextures.call(this);return this._albedoTexture&&u.push(this._albedoTexture),this._ambientTexture&&u.push(this._ambientTexture),this._opacityTexture&&u.push(this._opacityTexture),this._reflectionTexture&&u.push(this._reflectionTexture),this._emissiveTexture&&u.push(this._emissiveTexture),this._reflectivityTexture&&u.push(this._reflectivityTexture),this._metallicTexture&&u.push(this._metallicTexture),this._metallicReflectanceTexture&&u.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&u.push(this._microSurfaceTexture),this._bumpTexture&&u.push(this._bumpTexture),this._lightmapTexture&&u.push(this._lightmapTexture),this.detailMap.getActiveTextures(u),this.subSurface.getActiveTextures(u),this.clearCoat.getActiveTextures(u),this.sheen.getActiveTextures(u),this.anisotropy.getActiveTextures(u),u},S.prototype.hasTexture=function(u){return X.prototype.hasTexture.call(this,u)||this._albedoTexture===u||this._ambientTexture===u||this._opacityTexture===u||this._reflectionTexture===u||this._reflectivityTexture===u||this._metallicTexture===u||this._metallicReflectanceTexture===u||this._microSurfaceTexture===u||this._bumpTexture===u||this._lightmapTexture===u?!0:this.detailMap.hasTexture(u)||this.subSurface.hasTexture(u)||this.clearCoat.hasTexture(u)||this.sheen.hasTexture(u)||this.anisotropy.hasTexture(u)},S.prototype.setPrePassRenderer=function(u){if(this.subSurface.isScatteringEnabled){var T=this.getScene().enableSubSurfaceForPrePass();return T&&(T.enabled=!0),!0}return!1},S.prototype.dispose=function(u,T){var H,re,he,te,Se,ie,Q,de,ve,Re,fe;T&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(H=this._albedoTexture)===null||H===void 0||H.dispose(),(re=this._ambientTexture)===null||re===void 0||re.dispose(),(he=this._opacityTexture)===null||he===void 0||he.dispose(),(te=this._reflectionTexture)===null||te===void 0||te.dispose(),(Se=this._emissiveTexture)===null||Se===void 0||Se.dispose(),(ie=this._metallicTexture)===null||ie===void 0||ie.dispose(),(Q=this._reflectivityTexture)===null||Q===void 0||Q.dispose(),(de=this._bumpTexture)===null||de===void 0||de.dispose(),(ve=this._lightmapTexture)===null||ve===void 0||ve.dispose(),(Re=this._metallicReflectanceTexture)===null||Re===void 0||Re.dispose(),(fe=this._microSurfaceTexture)===null||fe===void 0||fe.dispose()),this.detailMap.dispose(T),this.subSurface.dispose(T),this.clearCoat.dispose(T),this.sheen.dispose(T),this.anisotropy.dispose(T),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),X.prototype.dispose.call(this,u,T)},S.PBRMATERIAL_OPAQUE=R.a.MATERIAL_OPAQUE,S.PBRMATERIAL_ALPHATEST=R.a.MATERIAL_ALPHATEST,S.PBRMATERIAL_ALPHABLEND=R.a.MATERIAL_ALPHABLEND,S.PBRMATERIAL_ALPHATESTANDBLEND=R.a.MATERIAL_ALPHATESTANDBLEND,S.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,S.LIGHTFALLOFF_PHYSICAL=0,S.LIGHTFALLOFF_GLTF=1,S.LIGHTFALLOFF_STANDARD=2,Object(l.c)([Object(s.i)()],S.prototype,"_imageProcessingConfiguration",void 0),Object(l.c)([Object(s.b)("_markAllSubMeshesAsMiscDirty")],S.prototype,"debugMode",void 0),Object(l.c)([Object(s.c)()],S.prototype,"useLogarithmicDepth",null),S}(D.a)},530:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var l=o(483),s=o(572),C=o(438),v=o(449),c=o(436),E=o(589),h=o(542),i=function(){function t(e,n,r,a,f,p,d,m,A,O){r===void 0&&(r=0),a===void 0&&(a=100),f===void 0&&(f=!1),p===void 0&&(p=1),O===void 0&&(O=!1),this.target=n,this.fromFrame=r,this.toFrame=a,this.loopAnimation=f,this.onAnimationEnd=d,this.onAnimationLoop=A,this.isAdditive=O,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new C.c,this.onAnimationLoopObservable=new C.c,this._scene=e,m&&this.appendAnimations(n,m),this._speedRatio=p,e._activeAnimatables.push(this)}return Object.defineProperty(t.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._weight},set:function(e){if(e===-1){this._weight=-1;return}this._weight=Math.min(Math.max(e,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(e){for(var n=0;n<this._runtimeAnimations.length;n++){var r=this._runtimeAnimations[n];r._prepareForSpeedRatioChange(e)}this._speedRatio=e},enumerable:!1,configurable:!0}),t.prototype.syncWith=function(e){if(this._syncRoot=e,e){var n=this._scene._activeAnimatables.indexOf(this);n>-1&&(this._scene._activeAnimatables.splice(n,1),this._scene._activeAnimatables.push(this))}return this},t.prototype.getAnimations=function(){return this._runtimeAnimations},t.prototype.appendAnimations=function(e,n){for(var r=this,a=0;a<n.length;a++){var f=n[a],p=new s.a(e,f,this._scene,this);p._onLoop=function(){r.onAnimationLoopObservable.notifyObservers(r),r.onAnimationLoop&&r.onAnimationLoop()},this._runtimeAnimations.push(p)}},t.prototype.getAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r].animation;return null},t.prototype.getRuntimeAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r];return null},t.prototype.reset=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},t.prototype.enableBlending=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)n[r].animation.enableBlending=!0,n[r].animation.blendingSpeed=e},t.prototype.disableBlending=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].animation.enableBlending=!1},t.prototype.goToFrame=function(e){var n=this._runtimeAnimations;if(n[0]){var r=n[0].animation.framePerSecond,a=n[0].currentFrame,f=this.speedRatio===0?0:(e-a)/r*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=f}for(var p=0;p<n.length;p++)n[p].goToFrame(e)},t.prototype.pause=function(){this._paused||(this._paused=!0)},t.prototype.restart=function(){this._paused=!1},t.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},t.prototype.stop=function(e,n){if(e||n){var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){for(var a=this._runtimeAnimations,f=a.length-1;f>=0;f--){var p=a[f];e&&p.animation.name!=e||n&&!n(p.target)||(p.dispose(),a.splice(f,1))}a.length==0&&(this._scene._activeAnimatables.splice(r,1),this._raiseOnAnimationEnd())}}else{var f=this._scene._activeAnimatables.indexOf(this);if(f>-1){this._scene._activeAnimatables.splice(f,1);for(var a=this._runtimeAnimations,f=0;f<a.length;f++)a[f].dispose();this._raiseOnAnimationEnd()}}},t.prototype.waitAsync=function(){var e=this;return new Promise(function(n,r){e.onAnimationEndObservable.add(function(){n(e)},void 0,void 0,e,!0)})},t.prototype._animate=function(e){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=e),!0;if(this._localDelayOffset===null?(this._localDelayOffset=e,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=e-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var n=!1,r=this._runtimeAnimations,a;for(a=0;a<r.length;a++){var f=r[a],p=f.animate(e-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);n=n||p}if(this.animationStarted=n,!n){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<r.length;a++)r[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return n},t}();v.a.prototype._animate=function(){if(!!this.animationsEnabled){var t=E.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=t}this.deltaTime=this.useConstantAnimationDeltaTime?16:(t-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=t;var e=this._activeAnimatables;if(e.length!==0){this._animationTime+=this.deltaTime;for(var n=this._animationTime,r=0;r<e.length;r++){var a=e[r];!a._animate(n)&&a.disposeOnEnd&&r--}this._processLateAnimationBindings()}}},v.a.prototype.beginWeightedAnimation=function(t,e,n,r,a,f,p,d,m,A,O){r===void 0&&(r=1),f===void 0&&(f=1),O===void 0&&(O=!1);var R=this.beginAnimation(t,e,n,a,f,p,d,!1,m,A,O);return R.weight=r,R},v.a.prototype.beginAnimation=function(t,e,n,r,a,f,p,d,m,A,O){a===void 0&&(a=1),d===void 0&&(d=!0),O===void 0&&(O=!1),e>n&&a>0&&(a*=-1),d&&this.stopAnimation(t,void 0,m),p||(p=new i(this,t,e,n,r,a,f,void 0,A,O));var R=m?m(t):!0;if(t.animations&&R&&p.appendAnimations(t,t.animations),t.getAnimatables)for(var b=t.getAnimatables(),D=0;D<b.length;D++)this.beginAnimation(b[D],e,n,r,a,f,p,d,m,A);return p.reset(),p},v.a.prototype.beginHierarchyAnimation=function(t,e,n,r,a,f,p,d,m,A,O,R){f===void 0&&(f=1),m===void 0&&(m=!0),R===void 0&&(R=!1);var b=t.getDescendants(e),D=[];D.push(this.beginAnimation(t,n,r,a,f,p,d,m,A,void 0,R));for(var L=0,U=b;L<U.length;L++){var F=U[L];D.push(this.beginAnimation(F,n,r,a,f,p,d,m,A,void 0,R))}return D},v.a.prototype.beginDirectAnimation=function(t,e,n,r,a,f,p,d,m){m===void 0&&(m=!1),f===void 0&&(f=1),n>r&&f>0&&(f*=-1);var A=new i(this,t,n,r,a,f,p,e,d,m);return A},v.a.prototype.beginDirectHierarchyAnimation=function(t,e,n,r,a,f,p,d,m,A){A===void 0&&(A=!1);var O=t.getDescendants(e),R=[];R.push(this.beginDirectAnimation(t,n,r,a,f,p,d,m,A));for(var b=0,D=O;b<D.length;b++){var L=D[b];R.push(this.beginDirectAnimation(L,n,r,a,f,p,d,m,A))}return R},v.a.prototype.getAnimatableByTarget=function(t){for(var e=0;e<this._activeAnimatables.length;e++)if(this._activeAnimatables[e].target===t)return this._activeAnimatables[e];return null},v.a.prototype.getAllAnimatablesByTarget=function(t){for(var e=[],n=0;n<this._activeAnimatables.length;n++)this._activeAnimatables[n].target===t&&e.push(this._activeAnimatables[n]);return e},v.a.prototype.stopAnimation=function(t,e,n){for(var r=this.getAllAnimatablesByTarget(t),a=0,f=r;a<f.length;a++){var p=f[a];p.stop(e,n)}},v.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var t=0;t<this._activeAnimatables.length;t++)this._activeAnimatables[t].stop();this._activeAnimatables=[]}for(var e=0,n=this.animationGroups;e<n.length;e++){var r=n[e];r.stop()}},v.a.prototype._registerTargetForLateAnimationBinding=function(t,e){var n=t.target;this._registeredForLateAnimationBindings.pushNoDuplicate(n),n._lateAnimationHolders||(n._lateAnimationHolders={}),n._lateAnimationHolders[t.targetPath]||(n._lateAnimationHolders[t.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:e}),t.isAdditive?(n._lateAnimationHolders[t.targetPath].additiveAnimations.push(t),n._lateAnimationHolders[t.targetPath].totalAdditiveWeight+=t.weight):(n._lateAnimationHolders[t.targetPath].animations.push(t),n._lateAnimationHolders[t.targetPath].totalWeight+=t.weight)},v.a.prototype._processLateAnimationBindingsForMatrices=function(t){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return t.originalValue;var e=1,n=c.c.Vector3[0],r=c.c.Vector3[1],a=c.c.Quaternion[0],f=0,p=t.animations[0],d=t.originalValue,m=1,A=!1;if(t.totalWeight<1)m=1-t.totalWeight,d.decompose(r,a,n);else{if(f=1,e=t.totalWeight,m=p.weight/e,m==1)if(t.totalAdditiveWeight)A=!0;else return p.currentValue;p.currentValue.decompose(r,a,n)}if(!A){r.scaleInPlace(m),n.scaleInPlace(m),a.scaleInPlace(m);for(var O=f;O<t.animations.length;O++){var R=t.animations[O];if(R.weight!==0){var m=R.weight/e,b=c.c.Vector3[2],D=c.c.Vector3[3],L=c.c.Quaternion[1];R.currentValue.decompose(D,L,b),D.scaleAndAddToRef(m,r),L.scaleAndAddToRef(m,a),b.scaleAndAddToRef(m,n)}}}for(var U=0;U<t.additiveAnimations.length;U++){var R=t.additiveAnimations[U];if(R.weight!==0){var b=c.c.Vector3[2],D=c.c.Vector3[3],L=c.c.Quaternion[1];R.currentValue.decompose(D,L,b),D.multiplyToRef(r,D),c.e.LerpToRef(r,D,R.weight,r),a.multiplyToRef(L,L),c.b.SlerpToRef(a,L,R.weight,a),b.scaleAndAddToRef(R.weight,n)}}var F=p?p._animationState.workValue:c.c.Matrix[0].clone();return c.a.ComposeToRef(r,a,n,F),F},v.a.prototype._processLateAnimationBindingsForQuaternions=function(t,e){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return e;var n=t.animations[0],r=t.originalValue,a=e;if(t.totalWeight===0&&t.totalAdditiveWeight>0)a.copyFrom(r);else if(t.animations.length===1){if(c.b.SlerpToRef(r,n.currentValue,Math.min(1,t.totalWeight),a),t.totalAdditiveWeight===0)return a}else if(t.animations.length>1){var f=1,p=void 0,d=void 0;if(t.totalWeight<1){var m=1-t.totalWeight;p=[],d=[],p.push(r),d.push(m)}else{if(t.animations.length===2&&(c.b.SlerpToRef(t.animations[0].currentValue,t.animations[1].currentValue,t.animations[1].weight/t.totalWeight,e),t.totalAdditiveWeight===0))return e;p=[],d=[],f=t.totalWeight}for(var A=0;A<t.animations.length;A++){var O=t.animations[A];p.push(O.currentValue),d.push(O.weight/f)}for(var R=0,b=0;b<p.length;){if(!b){c.b.SlerpToRef(p[b],p[b+1],d[b+1]/(d[b]+d[b+1]),e),a=e,R=d[b]+d[b+1],b+=2;continue}R+=d[b],c.b.SlerpToRef(a,p[b],d[b]/R,a),b++}}for(var D=0;D<t.additiveAnimations.length;D++){var O=t.additiveAnimations[D];O.weight!==0&&(a.multiplyToRef(O.currentValue,c.c.Quaternion[0]),c.b.SlerpToRef(a,c.c.Quaternion[0],O.weight,a))}return a},v.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var t=0;t<this._registeredForLateAnimationBindings.length;t++){var e=this._registeredForLateAnimationBindings.data[t];for(var n in e._lateAnimationHolders){var r=e._lateAnimationHolders[n],a=r.animations[0],f=r.originalValue,p=l.a.AllowMatrixDecomposeForInterpolation&&f.m,d=e[n];if(p)d=this._processLateAnimationBindingsForMatrices(r);else{var m=f.w!==void 0;if(m)d=this._processLateAnimationBindingsForQuaternions(r,d||c.b.Identity());else{var A=0,O=1;if(r.totalWeight<1)a&&f.scale?d=f.scale(1-r.totalWeight):a?d=f*(1-r.totalWeight):f.clone?d=f.clone():d=f;else if(a){O=r.totalWeight;var R=a.weight/O;R!==1?a.currentValue.scale?d=a.currentValue.scale(R):d=a.currentValue*R:d=a.currentValue,A=1}for(var b=A;b<r.animations.length;b++){var D=r.animations[b],L=D.weight/O;if(L)D.currentValue.scaleAndAddToRef?D.currentValue.scaleAndAddToRef(L,d):d+=D.currentValue*L;else continue}for(var U=0;U<r.additiveAnimations.length;U++){var D=r.additiveAnimations[U],L=D.weight;if(L)D.currentValue.scaleAndAddToRef?D.currentValue.scaleAndAddToRef(L,d):d+=D.currentValue*L;else continue}}}e[n]=d}e._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},h.a.prototype.copyAnimationRange=function(t,e,n,r,a){r===void 0&&(r=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new l.a(this.name,"_matrix",t.animations[0].framePerSecond,l.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var f=t.animations[0].getRange(e);if(!f)return!1;for(var p=f.from,d=f.to,m=t.animations[0].getKeys(),A=t.length,O=t.getParent(),R=this.getParent(),b=r&&O&&A&&this.length&&A!==this.length,D=b&&R&&O?R.length/O.length:1,L=r&&!R&&a&&(a.x!==1||a.y!==1||a.z!==1),U=this.animations[0].getKeys(),F,V,M,x=0,_=m.length;x<_;x++)F=m[x],F.frame>=p&&F.frame<=d&&(r?(M=F.value.clone(),b?(V=M.getTranslation(),M.setTranslation(V.scaleInPlace(D))):L&&a?(V=M.getTranslation(),M.setTranslation(V.multiplyInPlace(a))):M=F.value):M=F.value,U.push({frame:F.frame+n,value:M}));return this.animations[0].createRange(e,p+n,d+n),!0}},532:function(J,j,o){"use strict";var l=o(467),s=o(456);l.a.prototype.createDynamicTexture=function(C,v,c,E){var h=new s.a(this,s.b.Dynamic);return h.baseWidth=C,h.baseHeight=v,c&&(C=this.needPOTTextures?l.a.GetExponentOfTwo(C,this._caps.maxTextureSize):C,v=this.needPOTTextures?l.a.GetExponentOfTwo(v,this._caps.maxTextureSize):v),h.width=C,h.height=v,h.isReady=!1,h.generateMipMaps=c,h.samplingMode=E,this.updateTextureSamplingMode(E,h),this._internalTexturesCache.push(h),h},l.a.prototype.updateDynamicTexture=function(C,v,c,E,h,i){if(E===void 0&&(E=!1),i===void 0&&(i=!1),!!C){var t=this._gl,e=t.TEXTURE_2D,n=this._bindTextureDirectly(e,C,!0,i);this._unpackFlipY(c===void 0?C.invertY:c),E&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var r=this._getWebGLTextureType(C.type),a=this._getInternalFormat(h||C.format),f=this._getRGBABufferInternalSizedFormat(C.type,a);t.texImage2D(e,0,f,a,r,v),C.generateMipMaps&&t.generateMipmap(e),n||this._bindTextureDirectly(e,null),E&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),C.isReady=!0}}},533:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var l=o(434),s=o(439),C=o(514),v=o(441),c=o(529),E=o(437),h=function(i){Object(l.d)(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.directIntensity=1,r.emissiveIntensity=1,r.environmentIntensity=1,r.specularIntensity=1,r.disableBumpMap=!1,r.ambientTextureStrength=1,r.ambientTextureImpactOnAnalyticalLights=t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,r.metallicF0Factor=1,r.metallicReflectanceColor=v.a.White(),r.ambientColor=new v.a(0,0,0),r.albedoColor=new v.a(1,1,1),r.reflectivityColor=new v.a(1,1,1),r.reflectionColor=new v.a(1,1,1),r.emissiveColor=new v.a(0,0,0),r.microSurface=1,r.useLightmapAsShadowmap=!1,r.useAlphaFromAlbedoTexture=!1,r.forceAlphaTest=!1,r.alphaCutOff=.4,r.useSpecularOverAlpha=!0,r.useMicroSurfaceFromReflectivityMapAlpha=!1,r.useRoughnessFromMetallicTextureAlpha=!0,r.useRoughnessFromMetallicTextureGreen=!1,r.useMetallnessFromMetallicTextureBlue=!1,r.useAmbientOcclusionFromMetallicTextureRed=!1,r.useAmbientInGrayScale=!1,r.useAutoMicroSurfaceFromReflectivityMap=!1,r.useRadianceOverAlpha=!0,r.useObjectSpaceNormalMap=!1,r.useParallax=!1,r.useParallaxOcclusion=!1,r.parallaxScaleBias=.05,r.disableLighting=!1,r.forceIrradianceInFragment=!1,r.maxSimultaneousLights=4,r.invertNormalMapX=!1,r.invertNormalMapY=!1,r.twoSidedLighting=!1,r.useAlphaFresnel=!1,r.useLinearAlphaFresnel=!1,r.environmentBRDFTexture=null,r.forceNormalForward=!1,r.enableSpecularAntiAliasing=!1,r.useHorizonOcclusion=!0,r.useRadianceOcclusion=!0,r.unlit=!1,r._environmentBRDFTexture=C.a.GetEnvironmentBRDFTexture(n),r}return Object.defineProperty(t.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(e){this.subSurface.refractionTexture=e,e?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(e){this.subSurface.indexOfRefraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(e){this.subSurface.invertRefractionY=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(e){this.subSurface.linkRefractionWithTransparency=e,e&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_PHYSICAL},set:function(e){e!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=c.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_GLTF},set:function(e){e!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=c.a.LIGHTFALLOFF_GLTF:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(e){this.imageProcessingConfiguration.colorCurvesEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(e){this.imageProcessingConfiguration.colorGradingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(e){this._imageProcessingConfiguration.toneMappingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(e){this._imageProcessingConfiguration.exposure=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(e){this._imageProcessingConfiguration.contrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(e){this._imageProcessingConfiguration.colorGradingTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(e){this._imageProcessingConfiguration.colorCurves=e},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"PBRMaterial"},t.prototype.clone=function(e){var n=this,r=s.a.Clone(function(){return new t(e,n.getScene())},this);return r.id=e,r.name=e,this.clearCoat.copyTo(r.clearCoat),this.anisotropy.copyTo(r.anisotropy),this.brdf.copyTo(r.brdf),this.sheen.copyTo(r.sheen),this.subSurface.copyTo(r.subSurface),r},t.prototype.serialize=function(){var e=s.a.Serialize(this);return e.customType="BABYLON.PBRMaterial",e.clearCoat=this.clearCoat.serialize(),e.anisotropy=this.anisotropy.serialize(),e.brdf=this.brdf.serialize(),e.sheen=this.sheen.serialize(),e.subSurface=this.subSurface.serialize(),e},t.Parse=function(e,n,r){var a=s.a.Parse(function(){return new t(e.name,n)},e,n,r);return e.clearCoat&&a.clearCoat.parse(e.clearCoat,n,r),e.anisotropy&&a.anisotropy.parse(e.anisotropy,n,r),e.brdf&&a.brdf.parse(e.brdf,n,r),e.sheen&&a.sheen.parse(e.sheen,n,r),e.subSurface&&a.subSurface.parse(e.subSurface,n,r),a},t.PBRMATERIAL_OPAQUE=c.a.PBRMATERIAL_OPAQUE,t.PBRMATERIAL_ALPHATEST=c.a.PBRMATERIAL_ALPHATEST,t.PBRMATERIAL_ALPHABLEND=c.a.PBRMATERIAL_ALPHABLEND,t.PBRMATERIAL_ALPHATESTANDBLEND=c.a.PBRMATERIAL_ALPHATESTANDBLEND,t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=c.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"directIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"specularIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"disableBumpMap",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureStrength",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"opacityTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallic",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"roughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicF0Factor",void 0),Object(l.c)([Object(s.e)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceColor",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurfaceTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty",null)],t.prototype,"lightmapTexture",void 0),Object(l.c)([Object(s.e)("ambient"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientColor",void 0),Object(l.c)([Object(s.e)("albedo"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoColor",void 0),Object(l.c)([Object(s.e)("reflectivity"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityColor",void 0),Object(l.c)([Object(s.e)("reflection"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionColor",void 0),Object(l.c)([Object(s.e)("emissive"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveColor",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurface",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLightmapAsShadowmap",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"useAlphaFromAlbedoTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"forceAlphaTest",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"alphaCutOff",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useSpecularOverAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientInGrayScale",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(l.c)([Object(s.c)()],t.prototype,"usePhysicalLightFalloff",null),Object(l.c)([Object(s.c)()],t.prototype,"useGLTFLightFalloff",null),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOverAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useObjectSpaceNormalMap",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallax",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallaxOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"parallaxScaleBias",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceIrradianceInFragment",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapX",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapY",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"twoSidedLighting",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAlphaFresnel",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLinearAlphaFresnel",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentBRDFTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceNormalForward",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"enableSpecularAntiAliasing",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useHorizonOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],t.prototype,"unlit",void 0),t}(c.a);E.a.RegisteredTypes["BABYLON.PBRMaterial"]=h},534:function(J,j,o){"use strict";var l=o(435),s="postprocessVertexShader",C=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},535:function(J,j,o){"use strict";var l=o(435),s="packingFunctions",C=`vec4 pack(float depth)
{
const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);
const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);
vec4 res=fract(depth*bit_shift);
res-=res.xxyz*bit_mask;
return res;
}
float unpack(vec4 color)
{
const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);
return dot(color,bit_shift);
}`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},538:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(434),s=o(442),C=o(458),v=o(574),c=function(E){Object(l.d)(h,E);function h(i,t,e,n,r){var a=this,f=r&&r.generateMipMaps?r.generateMipMaps:!1,p=r&&r.generateDepthTexture?r.generateDepthTexture:!1,d=!r||r.doNotChangeAspectRatio===void 0?!0:r.doNotChangeAspectRatio,m=r&&r.drawOnlyOnFirstAttachmentByDefault?r.drawOnlyOnFirstAttachmentByDefault:!1;if(a=E.call(this,i,t,n,f,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var A=[],O=[];a._initTypes(e,A,O,r);var R=!r||r.generateDepthBuffer===void 0?!0:r.generateDepthBuffer,b=!r||r.generateStencilBuffer===void 0?!1:r.generateStencilBuffer;return a._size=t,a._multiRenderTargetOptions={samplingModes:O,generateMipMaps:f,generateDepthBuffer:R,generateStencilBuffer:b,generateDepthTexture:p,types:A,textureCount:e},a._count=e,a._drawOnlyOnFirstAttachmentByDefault=m,e>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(h.prototype,"isSupported",{get:function(){var i,t;return(t=(i=this._engine)===null||i===void 0?void 0:i.getCaps().drawBuffersExtension)!==null&&t!==void 0?t:!1},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"wrapU",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapU=i},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"wrapV",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapV=i},enumerable:!1,configurable:!0}),h.prototype._initTypes=function(i,t,e,n){for(var r=0;r<i;r++)n&&n.types&&n.types[r]!==void 0?t.push(n.types[r]):t.push(n&&n.defaultType?n.defaultType:0),n&&n.samplingModes&&n.samplingModes[r]!==void 0?e.push(n.samplingModes[r]):e.push(s.a.BILINEAR_SAMPLINGMODE)},h.prototype._rebuild=function(i){if(i===void 0&&(i=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),i&&this._createTextures();for(var t=0;t<this._internalTextures.length;t++){var e=this._textures[t];e._texture=this._internalTextures[t]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},h.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},h.prototype._createTextures=function(){this._textures=[];for(var i=0;i<this._internalTextures.length;i++){var t=new s.a(null,this.getScene());t._texture=this._internalTextures[i],this._textures.push(t)}},h.prototype.replaceTexture=function(i,t){i._texture&&(this._textures[t]=i,this._internalTextures[t]=i._texture,t===0&&(this._texture=this._internalTextures[t]))},Object.defineProperty(h.prototype,"samples",{get:function(){return this._samples},set:function(i){this._samples!==i&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,i):this._samples=i)},enumerable:!1,configurable:!0}),h.prototype.resize=function(i){this._size=i,this._rebuild()},h.prototype.updateCount=function(i,t){this._multiRenderTargetOptions.textureCount=i,this._count=i;var e=[],n=[];this._initTypes(i,e,n,t),this._multiRenderTargetOptions.types=e,this._multiRenderTargetOptions.samplingModes=n,this._rebuild(!0)},h.prototype.unbindFrameBuffer=function(i,t){var e=this;i.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){e.onAfterRenderObservable.notifyObservers(t)})},h.prototype.dispose=function(){this.releaseInternalTextures(),E.prototype.dispose.call(this)},h.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var i=this._internalTextures.length-1;i>=0;i--)this._internalTextures[i]!==void 0&&(this._internalTextures[i].dispose(),this._internalTextures.splice(i,1))},h}(C.a)},542:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var l=o(434),s=o(436),C=o(588),v=o(453),c=o(465),E=function(h){Object(l.d)(i,h);function i(t,e,n,r,a,f,p){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),f===void 0&&(f=null),p===void 0&&(p=null);var d=h.call(this,t,e.getScene())||this;return d.name=t,d.children=new Array,d.animations=new Array,d._index=null,d._absoluteTransform=new s.a,d._invertedAbsoluteTransform=new s.a,d._scalingDeterminant=1,d._worldTransform=new s.a,d._needToDecompose=!0,d._needToCompose=!1,d._linkedTransformNode=null,d._waitingTransformNodeId=null,d._skeleton=e,d._localMatrix=r?r.clone():s.a.Identity(),d._restPose=a||d._localMatrix.clone(),d._bindPose=d._localMatrix.clone(),d._baseMatrix=f||d._localMatrix.clone(),d._index=p,e.bones.push(d),d.setParent(n,!1),(f||r)&&d._updateDifferenceMatrix(),d}return Object.defineProperty(i.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(t){this._localMatrix.copyFrom(t),this._needToDecompose=!0},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"Bone"},i.prototype.getSkeleton=function(){return this._skeleton},i.prototype.getParent=function(){return this._parent},i.prototype.getChildren=function(){return this.children},i.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},i.prototype.setParent=function(t,e){if(e===void 0&&(e=!0),this._parent!==t){if(this._parent){var n=this._parent.children.indexOf(this);n!==-1&&this._parent.children.splice(n,1)}this._parent=t,this._parent&&this._parent.children.push(this),e&&this._updateDifferenceMatrix(),this.markAsDirty()}},i.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},i.prototype.getBaseMatrix=function(){return this._baseMatrix},i.prototype.getRestPose=function(){return this._restPose},i.prototype.setRestPose=function(t){this._restPose.copyFrom(t)},i.prototype.getBindPose=function(){return this._bindPose},i.prototype.setBindPose=function(t){this._bindPose.copyFrom(t)},i.prototype.getWorldMatrix=function(){return this._worldTransform},i.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},i.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},i.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},i.prototype.linkTransformNode=function(t){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=t,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},i.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(i.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(t){this._decompose(),this._localPosition.copyFrom(t),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.getRotation()},set:function(t){this.setRotation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(t){this.setRotationQuaternion(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"scaling",{get:function(){return this.getScale()},set:function(t){this.setScale(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),i.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=s.e.Zero(),this._localRotation=s.b.Zero(),this._localPosition=s.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},i.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,s.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},i.prototype.updateMatrix=function(t,e,n){e===void 0&&(e=!0),n===void 0&&(n=!0),this._baseMatrix.copyFrom(t),e&&this._updateDifferenceMatrix(),n?(this._needToCompose=!1,this._localMatrix.copyFrom(t),this._markAsDirtyAndDecompose()):this.markAsDirty()},i.prototype._updateDifferenceMatrix=function(t,e){if(e===void 0&&(e=!0),t||(t=this._baseMatrix),this._parent?t.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(t),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),e)for(var n=0;n<this.children.length;n++)this.children[n]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},i.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},i.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},i.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},i.prototype.translate=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix();if(e==c.c.LOCAL)r.addAtIndex(12,t.x),r.addAtIndex(13,t.y),r.addAtIndex(14,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0],p=i._tmpVecs[0];this._parent?n&&a?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(a,f)):f.copyFrom(this._parent.getAbsoluteTransform()):s.a.IdentityToRef(f),f.setTranslationFromFloats(0,0,0),f.invert(),s.e.TransformCoordinatesToRef(t,f,p),r.addAtIndex(12,p.x),r.addAtIndex(13,p.y),r.addAtIndex(14,p.z)}this._markAsDirtyAndDecompose()},i.prototype.setPosition=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix();if(e==c.c.LOCAL)r.setTranslationFromFloats(t.x,t.y,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0],p=i._tmpVecs[0];this._parent?(n&&a?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(a,f)):f.copyFrom(this._parent.getAbsoluteTransform()),f.invert()):s.a.IdentityToRef(f),s.e.TransformCoordinatesToRef(t,f,p),r.setTranslationFromFloats(p.x,p.y,p.z)}this._markAsDirtyAndDecompose()},i.prototype.setAbsolutePosition=function(t,e){this.setPosition(t,c.c.WORLD,e)},i.prototype.scale=function(t,e,n,r){r===void 0&&(r=!1);var a=this.getLocalMatrix(),f=i._tmpMats[0];s.a.ScalingToRef(t,e,n,f),f.multiplyToRef(a,a),f.invert();for(var p=0,d=this.children;p<d.length;p++){var m=d[p],A=m.getLocalMatrix();A.multiplyToRef(f,A),A.multiplyAtIndex(12,t),A.multiplyAtIndex(13,e),A.multiplyAtIndex(14,n),m._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var O=0,R=this.children;O<R.length;O++){var m=R[O];m.scale(t,e,n,r)}},i.prototype.setScale=function(t){this._decompose(),this._localScaling.copyFrom(t),this._markAsDirtyAndCompose()},i.prototype.getScale=function(){return this._decompose(),this._localScaling},i.prototype.getScaleToRef=function(t){this._decompose(),t.copyFrom(this._localScaling)},i.prototype.setYawPitchRoll=function(t,e,n,r,a){if(r===void 0&&(r=c.c.LOCAL),r===c.c.LOCAL){var f=i._tmpQuat;s.b.RotationYawPitchRollToRef(t,e,n,f),this.setRotationQuaternion(f,r,a);return}var p=i._tmpMats[0];if(!!this._getNegativeRotationToRef(p,a)){var d=i._tmpMats[1];s.a.RotationYawPitchRollToRef(t,e,n,d),p.multiplyToRef(d,d),this._rotateWithMatrix(d,r,a)}},i.prototype.rotate=function(t,e,n,r){n===void 0&&(n=c.c.LOCAL);var a=i._tmpMats[0];a.setTranslationFromFloats(0,0,0),s.a.RotationAxisToRef(t,e,a),this._rotateWithMatrix(a,n,r)},i.prototype.setAxisAngle=function(t,e,n,r){if(n===void 0&&(n=c.c.LOCAL),n===c.c.LOCAL){var a=i._tmpQuat;s.b.RotationAxisToRef(t,e,a),this.setRotationQuaternion(a,n,r);return}var f=i._tmpMats[0];if(!!this._getNegativeRotationToRef(f,r)){var p=i._tmpMats[1];s.a.RotationAxisToRef(t,e,p),f.multiplyToRef(p,p),this._rotateWithMatrix(p,n,r)}},i.prototype.setRotation=function(t,e,n){e===void 0&&(e=c.c.LOCAL),this.setYawPitchRoll(t.y,t.x,t.z,e,n)},i.prototype.setRotationQuaternion=function(t,e,n){if(e===void 0&&(e=c.c.LOCAL),e===c.c.LOCAL){this._decompose(),this._localRotation.copyFrom(t),this._markAsDirtyAndCompose();return}var r=i._tmpMats[0];if(!!this._getNegativeRotationToRef(r,n)){var a=i._tmpMats[1];s.a.FromQuaternionToRef(t,a),r.multiplyToRef(a,a),this._rotateWithMatrix(a,e,n)}},i.prototype.setRotationMatrix=function(t,e,n){if(e===void 0&&(e=c.c.LOCAL),e===c.c.LOCAL){var r=i._tmpQuat;s.b.FromRotationMatrixToRef(t,r),this.setRotationQuaternion(r,e,n);return}var a=i._tmpMats[0];if(!!this._getNegativeRotationToRef(a,n)){var f=i._tmpMats[1];f.copyFrom(t),a.multiplyToRef(t,f),this._rotateWithMatrix(f,e,n)}},i.prototype._rotateWithMatrix=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix(),a=r.m[12],f=r.m[13],p=r.m[14],d=this.getParent(),m=i._tmpMats[3],A=i._tmpMats[4];d&&e==c.c.WORLD?(n?(m.copyFrom(n.getWorldMatrix()),d.getAbsoluteTransform().multiplyToRef(m,m)):m.copyFrom(d.getAbsoluteTransform()),A.copyFrom(m),A.invert(),r.multiplyToRef(m,r),r.multiplyToRef(t,r),r.multiplyToRef(A,r)):e==c.c.WORLD&&n?(m.copyFrom(n.getWorldMatrix()),A.copyFrom(m),A.invert(),r.multiplyToRef(m,r),r.multiplyToRef(t,r),r.multiplyToRef(A,r)):r.multiplyToRef(t,r),r.setTranslationFromFloats(a,f,p),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},i.prototype._getNegativeRotationToRef=function(t,e){var n=i._tmpMats[2];return t.copyFrom(this.getAbsoluteTransform()),e&&(t.multiplyToRef(e.getWorldMatrix(),t),s.a.ScalingToRef(e.scaling.x,e.scaling.y,e.scaling.z,n)),t.invert(),isNaN(t.m[0])?!1:(n.multiplyAtIndex(0,this._scalingDeterminant),t.multiplyToRef(n,t),!0)},i.prototype.getPosition=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getPositionToRef(t,e,n),n},i.prototype.getPositionToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),t==c.c.LOCAL){var r=this.getLocalMatrix();n.x=r.m[12],n.y=r.m[13],n.z=r.m[14]}else{var a=null;e&&(a=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0];e&&a?(f.copyFrom(this.getAbsoluteTransform()),f.multiplyToRef(a,f)):f=this.getAbsoluteTransform(),n.x=f.m[12],n.y=f.m[13],n.z=f.m[14]}},i.prototype.getAbsolutePosition=function(t){t===void 0&&(t=null);var e=s.e.Zero();return this.getPositionToRef(c.c.WORLD,t,e),e},i.prototype.getAbsolutePositionToRef=function(t,e){this.getPositionToRef(c.c.WORLD,t,e)},i.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var t=this._skeleton.getPoseMatrix();t&&this._absoluteTransform.multiplyToRef(t,this._absoluteTransform)}for(var e=this.children,n=e.length,r=0;r<n;r++)e[r].computeAbsoluteTransforms()},i.prototype.getDirection=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getDirectionToRef(t,e,n),n},i.prototype.getDirectionToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),s.e.TransformNormalToRef(t,a,n),n.normalize()},i.prototype.getRotation=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getRotationToRef(t,e,n),n},i.prototype.getRotationToRef=function(t,e,n){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var r=i._tmpQuat;this.getRotationQuaternionToRef(t,e,r),r.toEulerAnglesToRef(n)},i.prototype.getRotationQuaternion=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.b.Identity();return this.getRotationQuaternionToRef(t,e,n),n},i.prototype.getRotationQuaternionToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null),t==c.c.LOCAL)this._decompose(),n.copyFrom(this._localRotation);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,n,void 0)}},i.prototype.getRotationMatrix=function(t,e){t===void 0&&(t=c.c.LOCAL);var n=s.a.Identity();return this.getRotationMatrixToRef(t,e,n),n},i.prototype.getRotationMatrixToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),t==c.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(n);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(n)}},i.prototype.getAbsolutePositionFromLocal=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getAbsolutePositionFromLocalToRef(t,e,n),n},i.prototype.getAbsolutePositionFromLocalToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];e&&r?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(r,a)):a=this.getAbsoluteTransform(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.getLocalPositionFromAbsolute=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getLocalPositionFromAbsoluteToRef(t,e,n),n},i.prototype.getLocalPositionFromAbsoluteToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),a.invert(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},i._tmpVecs=C.a.BuildArray(2,s.e.Zero),i._tmpQuat=s.b.Identity(),i._tmpMats=C.a.BuildArray(5,s.a.Identity),i}(v.a)},545:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(444),s=o(625),C=o(500),v=o(566),c=function(){function E(){}return E.ExpandRGBDTexture=function(h){var i=h._texture;if(!(!i||!h.isRGBD)){var t=i.getEngine(),e=t.getCaps(),n=!1;e.textureHalfFloatRender&&e.textureHalfFloatLinearFiltering?(n=!0,i.type=2):e.textureFloatRender&&e.textureFloatLinearFiltering&&(n=!0,i.type=1),n&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),h.onLoadObservable.addOnce(function(){if(n){var r=new l.a("rgbdDecode","rgbdDecode",null,null,1,null,3,t,!1,void 0,i.type,void 0,null,!1),a=t.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});r.getEffect().executeWhenCompiled(function(){r.onApply=function(f){f._bindTexture("textureSampler",i),f.setFloat2("scale",1,1)},h.getScene().postProcessManager.directRender([r],a,!0),t.restoreDefaultFramebuffer(),t._releaseTexture(i),t._releaseFramebufferObjects(a),r&&r.dispose(),a._swapAndDie(i),i.isReady=!0})}})}},E.EncodeTextureToRGBD=function(h,i,t){return t===void 0&&(t=0),v.a.ApplyPostProcess("rgbdEncode",h,i,t,1,5)},E}()},547:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var l=o(449),s=o(452),C=o(502);Object.defineProperty(l.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(c){c&&c.isSupported&&(this._geometryBufferRenderer=c)},enumerable:!0,configurable:!0}),l.a.prototype.enableGeometryBufferRenderer=function(c){return c===void 0&&(c=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new C.a(this,c),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},l.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var v=function(){function c(E){this.name=s.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(s.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){},c.prototype._gatherRenderTargets=function(E){this.scene._geometryBufferRenderer&&E.push(this.scene._geometryBufferRenderer.getGBuffer())},c}();C.a._SceneComponentInitialization=function(c){var E=c._getComponent(s.a.NAME_GEOMETRYBUFFERRENDERER);E||(E=new v(c),c._addComponent(E))}},548:function(J,j,o){"use strict";o.d(j,"a",function(){return l});var l=function(){function s(){this._renderPipelines={}}return Object.defineProperty(s.prototype,"supportedPipelines",{get:function(){var C=[];for(var v in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(v)){var c=this._renderPipelines[v];c.isSupported&&C.push(c)}return C},enumerable:!1,configurable:!0}),s.prototype.addPipeline=function(C){this._renderPipelines[C._name]=C},s.prototype.attachCamerasToRenderPipeline=function(C,v,c){c===void 0&&(c=!1);var E=this._renderPipelines[C];!E||E._attachCameras(v,c)},s.prototype.detachCamerasFromRenderPipeline=function(C,v){var c=this._renderPipelines[C];!c||c._detachCameras(v)},s.prototype.enableEffectInPipeline=function(C,v,c){var E=this._renderPipelines[C];!E||E._enableEffect(v,c)},s.prototype.disableEffectInPipeline=function(C,v,c){var E=this._renderPipelines[C];!E||E._disableEffect(v,c)},s.prototype.update=function(){for(var C in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(C)){var v=this._renderPipelines[C];v.isSupported?v._update():(v.dispose(),delete this._renderPipelines[C])}},s.prototype._rebuild=function(){for(var C in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(C)){var v=this._renderPipelines[C];v._rebuild()}},s.prototype.dispose=function(){for(var C in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(C)){var v=this._renderPipelines[C];v.dispose()}},s}()},549:function(J,j,o){"use strict";o.d(j,"a",function(){return s});const l=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>l()?"webgl2":"webgl"},555:function(J,j,o){"use strict";var l=o(446),s=o(447),C=o(436);l.a.prototype.thinInstanceAdd=function(v,c){c===void 0&&(c=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(v)?v.length:1);var E=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(v))for(var h=0;h<v.length;++h)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v[h],h===v.length-1&&c);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v,c);return E},l.a.prototype.thinInstanceAddSelf=function(v){return v===void 0&&(v=!0),this.thinInstanceAdd(C.a.IdentityReadOnly,v)},l.a.prototype.thinInstanceRegisterAttribute=function(v,c){this.removeVerticesData(v),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[v]=c,this._userThinInstanceBuffersStorage.sizes[v]=c*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[v]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[v]),this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[v],v,!0,!1,c,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])},l.a.prototype.thinInstanceSetMatrixAt=function(v,c,E){if(E===void 0&&(E=!0),!this._thinInstanceDataStorage.matrixData||v>=this._thinInstanceDataStorage.instancesCount)return!1;var h=this._thinInstanceDataStorage.matrixData;return c.copyToArray(h,v*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[v]=c),E&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},l.a.prototype.thinInstanceSetAttributeAt=function(v,c,E,h){return h===void 0&&(h=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[v]||c>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(v,0),this._userThinInstanceBuffersStorage.data[v].set(E,c*this._userThinInstanceBuffersStorage.strides[v]),h&&this.thinInstanceBufferUpdated(v),!0)},Object.defineProperty(l.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(v){var c,E,h=((E=(c=this._thinInstanceDataStorage.matrixData)===null||c===void 0?void 0:c.length)!==null&&E!==void 0?E:0)/16;v<=h&&(this._thinInstanceDataStorage.instancesCount=v)},enumerable:!0,configurable:!0}),l.a.prototype.thinInstanceSetBuffer=function(v,c,E,h){var i,t;if(E===void 0&&(E=0),h===void 0&&(h=!1),E=E||16,v==="matrix")if((i=this._thinInstanceDataStorage.matrixBuffer)===null||i===void 0||i.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=c?c.length:32*E,this._thinInstanceDataStorage.matrixData=c,this._thinInstanceDataStorage.worldMatrices=null,c!==null){this._thinInstanceDataStorage.instancesCount=c.length/E;var e=new s.a(this.getEngine(),c,!h,E,!1,!0);this._thinInstanceDataStorage.matrixBuffer=e,this.setVerticesBuffer(e.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(e.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(e.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(e.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else c===null?((t=this._userThinInstanceBuffersStorage)===null||t===void 0?void 0:t.data[v])&&(this.removeVerticesData(v),delete this._userThinInstanceBuffersStorage.data[v],delete this._userThinInstanceBuffersStorage.strides[v],delete this._userThinInstanceBuffersStorage.sizes[v],delete this._userThinInstanceBuffersStorage.vertexBuffers[v]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[v]=c,this._userThinInstanceBuffersStorage.strides[v]=E,this._userThinInstanceBuffersStorage.sizes[v]=c.length,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),c,v,!h,!1,E,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v]))},l.a.prototype.thinInstanceBufferUpdated=function(v){var c;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((c=this._userThinInstanceBuffersStorage)===null||c===void 0?void 0:c.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(this._userThinInstanceBuffersStorage.data[v],0)},l.a.prototype.thinInstancePartialBufferUpdate=function(v,c,E){var h;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(c,E):((h=this._userThinInstanceBuffersStorage)===null||h===void 0?void 0:h.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(c,E)},l.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var v=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var c=0;c<this._thinInstanceDataStorage.instancesCount;++c)this._thinInstanceDataStorage.worldMatrices[c]=C.a.FromArray(v,c*16)}return this._thinInstanceDataStorage.worldMatrices},l.a.prototype.thinInstanceRefreshBoundingInfo=function(v){if(v===void 0&&(v=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var c=this._thinInstanceDataStorage.boundingVectors;v&&(c.length=0,this.refreshBoundingInfo(!0));var E=this.getBoundingInfo(),h=this._thinInstanceDataStorage.matrixData;if(c.length===0)for(var i=0;i<E.boundingBox.vectors.length;++i)c.push(E.boundingBox.vectors[i].clone());C.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),C.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var t=0;t<this._thinInstanceDataStorage.instancesCount;++t){C.a.FromArrayToRef(h,t*16,C.c.Matrix[0]);for(var i=0;i<c.length;++i)C.e.TransformCoordinatesToRef(c[i],C.c.Matrix[0],C.c.Vector3[2]),C.c.Vector3[0].minimizeInPlace(C.c.Vector3[2]),C.c.Vector3[1].maximizeInPlace(C.c.Vector3[2])}E.reConstruct(C.c.Vector3[0],C.c.Vector3[1]),this._updateBoundingInfo()}},l.a.prototype._thinInstanceUpdateBufferSize=function(v,c){var E,h;c===void 0&&(c=1);var i=v==="matrix";if(!(!i&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[v]))){for(var t=i?16:this._userThinInstanceBuffersStorage.strides[v],e=i?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[v],n=i?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[v],r=(this._thinInstanceDataStorage.instancesCount+c)*t,a=e;a<r;)a*=2;if(!n||e!=a){if(!n)n=new Float32Array(a);else{var f=new Float32Array(a);f.set(n,0),n=f}if(i){(E=this._thinInstanceDataStorage.matrixBuffer)===null||E===void 0||E.dispose();var p=new s.a(this.getEngine(),n,!0,t,!1,!0);this._thinInstanceDataStorage.matrixBuffer=p,this._thinInstanceDataStorage.matrixData=n,this._thinInstanceDataStorage.matrixBufferSize=a,this.setVerticesBuffer(p.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(p.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(p.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(p.createVertexBuffer("world3",12,4))}else(h=this._userThinInstanceBuffersStorage.vertexBuffers[v])===null||h===void 0||h.dispose(),this._userThinInstanceBuffersStorage.data[v]=n,this._userThinInstanceBuffersStorage.sizes[v]=a,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),n,v,!0,!1,t,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])}}},l.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},l.a.prototype._disposeThinInstanceSpecificData=function(){var v;((v=this._thinInstanceDataStorage)===null||v===void 0?void 0:v.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},566:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(442),s=o(458),C=o(486),v=o(444),c=function(){function E(){}return E.CreateResizedCopy=function(h,i,t,e){e===void 0&&(e=!0);var n=h.getScene(),r=n.getEngine(),a=new s.a("resized"+h.name,{width:i,height:t},n,!h.noMipmap,!0,h._texture.type,!1,h.samplingMode,!1);a.wrapU=h.wrapU,a.wrapV=h.wrapV,a.uOffset=h.uOffset,a.vOffset=h.vOffset,a.uScale=h.uScale,a.vScale=h.vScale,a.uAng=h.uAng,a.vAng=h.vAng,a.wAng=h.wAng,a.coordinatesIndex=h.coordinatesIndex,a.level=h.level,a.anisotropicFilteringLevel=h.anisotropicFilteringLevel,a._texture.isReady=!1,h.wrapU=l.a.CLAMP_ADDRESSMODE,h.wrapV=l.a.CLAMP_ADDRESSMODE;var f=new C.b("pass",1,null,e?l.a.BILINEAR_SAMPLINGMODE:l.a.NEAREST_SAMPLINGMODE,r,!1,0);return f.getEffect().executeWhenCompiled(function(){f.onApply=function(d){d.setTexture("textureSampler",h)};var p=a.getInternalTexture();p&&(n.postProcessManager.directRender([f],p),r.unBindFramebuffer(p),a.disposeFramebufferObjects(),f.dispose(),p.isReady=!0)}),a},E.ApplyPostProcess=function(h,i,t,e,n,r){var a=i.getEngine();return i.isReady=!1,n=n!=null?n:i.samplingMode,e=e!=null?e:i.type,r=r!=null?r:i.format,e===-1&&(e=0),new Promise(function(f){var p=new v.a("postprocess",h,null,null,1,null,n,a,!1,void 0,e,void 0,null,!1,r),d=a.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:n,type:e,format:r});p.getEffect().executeWhenCompiled(function(){p.onApply=function(m){m._bindTexture("textureSampler",i),m.setFloat2("scale",1,1)},t.postProcessManager.directRender([p],d,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(i),a._releaseFramebufferObjects(d),p&&p.dispose(),d._swapAndDie(i),i.type=e,i.format=5,i.isReady=!0,f(i)})})},E}()},570:function(J,j,o){"use strict";o.d(j,"b",function(){return i}),o.d(j,"a",function(){return t});var l=o(434),s=o(436),C=o(442),v=o(466),c=o(582),E=o(580),h=o(583),i;(function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"})(i||(i={}));var t=function(e){Object(l.d)(n,e);function n(r,a,f,p,d){f===void 0&&(f=i.Low),p===void 0&&(p=0),d===void 0&&(d=!1);var m=e.call(this,r.getEngine(),"depth of field",function(){return m._effects},!0)||this;m._effects=[],m._circleOfConfusion=new c.a("circleOfConfusion",a,1,null,C.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d),m._depthOfFieldBlurY=[],m._depthOfFieldBlurX=[];var A=1,O=15;switch(f){case i.High:{A=3,O=51;break}case i.Medium:{A=2,O=31;break}default:{O=15,A=1;break}}for(var R=O/Math.pow(2,A-1),b=1,D=0;D<A;D++){var L=new E.a("vertical blur",r,new s.d(0,1),R,b,null,m._circleOfConfusion,D==0?m._circleOfConfusion:null,C.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d);L.autoClear=!1,b=.75/Math.pow(2,D);var U=new E.a("horizontal blur",r,new s.d(1,0),R,b,null,m._circleOfConfusion,null,C.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d);U.autoClear=!1,m._depthOfFieldBlurY.push(L),m._depthOfFieldBlurX.push(U)}m._effects=[m._circleOfConfusion];for(var D=0;D<m._depthOfFieldBlurX.length;D++)m._effects.push(m._depthOfFieldBlurY[D]),m._effects.push(m._depthOfFieldBlurX[D]);return m._dofMerge=new h.a("dofMerge",m._circleOfConfusion,m._circleOfConfusion,m._depthOfFieldBlurX,b,null,C.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d),m._dofMerge.autoClear=!1,m._effects.push(m._dofMerge),m}return Object.defineProperty(n.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(r){this._circleOfConfusion.focalLength=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(r){this._circleOfConfusion.fStop=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(r){this._circleOfConfusion.focusDistance=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(r){this._circleOfConfusion.lensSize=r},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(n.prototype,"depthTexture",{set:function(r){this._circleOfConfusion.depthTexture=r},enumerable:!1,configurable:!0}),n.prototype.disposeEffects=function(r){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(r)},n.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},n.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},n}(v.a)},571:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var l=o(434),s=o(440),C=o(436),v=o(444),c=o(502),E=function(){function d(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return d}(),h=o(530),i=o(547),t=o(435),e="motionBlurPixelShader",n=`
varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float motionStrength;
uniform float motionScale;
uniform vec2 screenSize;
#ifdef OBJECT_BASED
uniform sampler2D velocitySampler;
#else
uniform sampler2D depthSampler;
uniform mat4 inverseViewProjection;
uniform mat4 prevViewProjection;
#endif
void main(void)
{
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
vec2 texelSize=1.0/screenSize;
vec2 velocityColor=texture2D(velocitySampler,vUV).rg*2.0-1.0;
vec2 velocity=vec2(pow(velocityColor.r,3.0),pow(velocityColor.g,3.0));
velocity*=motionScale*motionStrength;
float speed=length(velocity/texelSize);
int samplesCount=int(clamp(speed,1.0,SAMPLES));
velocity=normalize(velocity)*texelSize;
float hlim=float(-samplesCount)*0.5+0.5;
vec4 result=texture2D(textureSampler,vUV);
for (int i=1; i<int(SAMPLES); ++i)
{
if (i>=samplesCount)
break;
vec2 offset=vUV+velocity*(hlim+float(i));
result+=texture2D(textureSampler,offset);
}
gl_FragColor=result/float(samplesCount);
gl_FragColor.a=1.0;
#else
vec2 texelSize=1.0/screenSize;
float depth=texture2D(depthSampler,vUV).r;
vec4 cpos=vec4(vUV*2.0-1.0,depth,1.0);
cpos=cpos*inverseViewProjection;
vec4 ppos=cpos*prevViewProjection;
ppos.xyz/=ppos.w;
ppos.xy=ppos.xy*0.5+0.5;
vec2 velocity=(ppos.xy-vUV)*motionScale*motionStrength;
float speed=length(velocity/texelSize);
int nSamples=int(clamp(speed,1.0,SAMPLES));
vec4 result=texture2D(textureSampler,vUV);
for (int i=1; i<int(SAMPLES); ++i) {
if (i>=nSamples)
break;
vec2 offset1=vUV+velocity*(float(i)/float(nSamples-1)-0.5);
result+=texture2D(textureSampler,offset1);
}
gl_FragColor=result/float(nSamples);
#endif
#else
gl_FragColor=texture2D(textureSampler,vUV);
#endif
}
`;t.a.ShadersStore[e]=n;var r={name:e,shader:n},a=o(439),f=o(437),p=function(d){Object(l.d)(m,d);function m(A,O,R,b,D,L,U,F,V,M){F===void 0&&(F=0),V===void 0&&(V=!1),M===void 0&&(M=!1);var x=d.call(this,A,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],R,b,D,L,U,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,F,void 0,null,V)||this;return x.motionStrength=1,x._motionBlurSamples=32,x._isObjectBased=!0,x._forceGeometryBuffer=!1,x._geometryBufferRenderer=null,x._prePassRenderer=null,x._invViewProjection=null,x._previousViewProjection=null,x._forceGeometryBuffer=M,x._forceGeometryBuffer?(x._geometryBufferRenderer=O.enableGeometryBufferRenderer(),x._geometryBufferRenderer&&(x._geometryBufferRenderer.enableVelocity=!0)):(x._prePassRenderer=O.enablePrePassRenderer(),x._prePassRenderer&&(x._prePassRenderer.markAsDirty(),x._prePassEffectConfiguration=new E)),x._applyMode(),x}return Object.defineProperty(m.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(A){this._motionBlurSamples=A,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(A){this._isObjectBased!==A&&(this._isObjectBased=A,this._applyMode())},enumerable:!1,configurable:!0}),m.prototype.getClassName=function(){return"MotionBlurPostProcess"},m.prototype.excludeSkinnedMesh=function(A){if(A.skeleton){var O=void 0;if(this._geometryBufferRenderer)O=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)O=this._prePassRenderer.excludedSkinnedMesh;else return;O.push(A)}},m.prototype.removeExcludedSkinnedMesh=function(A){if(A.skeleton){var O=void 0;if(this._geometryBufferRenderer)O=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)O=this._prePassRenderer.excludedSkinnedMesh;else return;var R=O.indexOf(A);R!==-1&&O.splice(R,1)}},m.prototype.dispose=function(A){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),d.prototype.dispose.call(this,A)},m.prototype._applyMode=function(){var A=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return s.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(O){return A._onApplyObjectBased(O)}):(this._invViewProjection=C.a.Identity(),this._previousViewProjection=C.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(O){return A._onApplyScreenBased(O)})},m.prototype._onApplyObjectBased=function(A){if(A.setVector2("screenSize",new C.d(this.width,this.height)),A.setFloat("motionScale",this._scene.getAnimationRatio()),A.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var O=this._geometryBufferRenderer.getTextureIndex(c.a.VELOCITY_TEXTURE_TYPE);A.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[O])}else if(this._prePassRenderer){var O=this._prePassRenderer.getIndex(2);A.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[O])}},m.prototype._onApplyScreenBased=function(A){var O=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(O.invertToRef(this._invViewProjection),A.setMatrix("inverseViewProjection",this._invViewProjection),A.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=O,A.setVector2("screenSize",new C.d(this.width,this.height)),A.setFloat("motionScale",this._scene.getAnimationRatio()),A.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var R=this._geometryBufferRenderer.getTextureIndex(c.a.DEPTH_TEXTURE_TYPE);A.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[R])}else if(this._prePassRenderer){var R=this._prePassRenderer.getIndex(5);A.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[R])}},m.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var A=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(A.join(`
`))}},m._Parse=function(A,O,R,b){return a.a.Parse(function(){return new m(A.name,R,A.options,O,A.renderTargetSamplingMode,R.getEngine(),A.reusable,A.textureType,!1)},A,R,b)},Object(l.c)([Object(a.c)()],m.prototype,"motionStrength",void 0),Object(l.c)([Object(a.c)()],m.prototype,"motionBlurSamples",null),Object(l.c)([Object(a.c)()],m.prototype,"isObjectBased",null),m}(v.a);f.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=p},572:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var l=o(436),s=o(441),C=o(483),v=o(700),c=Object.freeze(new l.b(0,0,0,0)),E=Object.freeze(l.e.Zero()),h=Object.freeze(l.d.Zero()),i=Object.freeze(v.a.Zero()),t=Object.freeze(s.a.Black()),e=function(){function n(r,a,f,p){var d=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=r,this._scene=f,this._host=p,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===C.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=l.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var m={frame:0,value:this._minValue};this._keys.splice(0,0,m)}if(this._target instanceof Array){for(var A=0,O=0,R=this._target;O<R.length;O++){var b=R[O];this._preparePath(b,A),this._getOriginalValues(A),A++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var D=a.getEvents();D&&D.length>0&&D.forEach(function(L){d._events.push(L._clone())}),this._enableBlending=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(n.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),n.prototype._preparePath=function(r,a){a===void 0&&(a=0);var f=this._animation.targetPropertyPath;if(f.length>1){for(var p=r[f[0]],d=1;d<f.length-1;d++)p=p[f[d]];this._targetPath=f[f.length-1],this._activeTargets[a]=p}else this._targetPath=f[0],this._activeTargets[a]=r},Object.defineProperty(n.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),n.prototype.reset=function(r){if(r===void 0&&(r=!1),r)if(this._target instanceof Array)for(var a=0,f=0,p=this._target;f<p.length;f++){var d=p[f];this._originalValue[a]!==void 0&&this._setValue(d,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},n.prototype.isStopped=function(){return this._stopped},n.prototype.dispose=function(){var r=this._animation.runtimeAnimations.indexOf(this);r>-1&&this._animation.runtimeAnimations.splice(r,1)},n.prototype.setValue=function(r,a){if(this._targetIsArray){for(var f=0;f<this._target.length;f++){var p=this._target[f];this._setValue(p,this._activeTargets[f],r,a,f)}return}this._setValue(this._target,this._directTarget,r,a,0)},n.prototype._getOriginalValues=function(r){r===void 0&&(r=0);var a,f=this._activeTargets[r];f.getRestPose&&this._targetPath==="_matrix"?a=f.getRestPose():a=f[this._targetPath],a&&a.clone?this._originalValue[r]=a.clone():this._originalValue[r]=a},n.prototype._setValue=function(r,a,f,p,d){if(this._currentActiveTarget=a,this._weight=p,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var m=a[this._targetPath];m.clone?this._originalBlendValue=m.clone():this._originalBlendValue=m}this._originalBlendValue.m?C.a.AllowMatrixDecomposeForInterpolation?this._currentValue?l.a.DecomposeLerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.DecomposeLerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue?l.a.LerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.Lerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue=C.a._UniversalLerp(this._originalBlendValue,f,this._blendingFactor);var A=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=A}else this._currentValue=f;p!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[d]):a[this._targetPath]=this._currentValue,r.markAsDirty&&r.markAsDirty(this._animation.targetProperty)},n.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},n.prototype.goToFrame=function(r){var a=this._animation.getKeys();r<a[0].frame?r=a[0].frame:r>a[a.length-1].frame&&(r=a[a.length-1].frame);var f=this._events;if(f.length)for(var p=0;p<f.length;p++)f[p].onlyOnce||(f[p].isDone=f[p].frame<r);this._currentFrame=r;var d=this._animation._interpolate(r,this._animationState);this.setValue(d,-1)},n.prototype._prepareForSpeedRatioChange=function(r){var a=this._previousDelay*(this._animation.framePerSecond*r)/1e3;this._ratioOffset=this._previousRatio-a},n.prototype.animate=function(r,a,f,p,d,m){m===void 0&&(m=-1);var A=this._animation,O=A.targetPropertyPath;if(!O||O.length<1)return this._stopped=!0,!1;var R=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(f<this._minFrame||f>this._maxFrame)&&(f=this._maxFrame);var b=f-a,D,L=r*(A.framePerSecond*d)/1e3+this._ratioOffset,U=0;if(this._previousDelay=r,this._previousRatio=L,!p&&f>=a&&L>=b)R=!1,U=A._getKeyValue(this._maxValue);else if(!p&&a>=f&&L<=b)R=!1,U=A._getKeyValue(this._minValue);else if(this._animationState.loopMode!==C.a.ANIMATIONLOOPMODE_CYCLE){var F=f.toString()+a.toString();if(!this._offsetsCache[F]){this._animationState.repeatCount=0,this._animationState.loopMode=C.a.ANIMATIONLOOPMODE_CYCLE;var V=A._interpolate(a,this._animationState),M=A._interpolate(f,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),A.dataType){case C.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[F]=M-V;break;case C.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[F]=M.subtract(V);break;case C.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[F]=M.subtract(V);break;case C.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[F]=M.subtract(V);break;case C.a.ANIMATIONTYPE_SIZE:this._offsetsCache[F]=M.subtract(V);break;case C.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[F]=M.subtract(V);break;default:break}this._highLimitsCache[F]=M}U=this._highLimitsCache[F],D=this._offsetsCache[F]}if(D===void 0)switch(A.dataType){case C.a.ANIMATIONTYPE_FLOAT:D=0;break;case C.a.ANIMATIONTYPE_QUATERNION:D=c;break;case C.a.ANIMATIONTYPE_VECTOR3:D=E;break;case C.a.ANIMATIONTYPE_VECTOR2:D=h;break;case C.a.ANIMATIONTYPE_SIZE:D=i;break;case C.a.ANIMATIONTYPE_COLOR3:D=t}var x;if(this._host&&this._host.syncRoot){var _=this._host.syncRoot,w=(_.masterFrame-_.fromFrame)/(_.toFrame-_.fromFrame);x=a+(f-a)*w}else x=R&&b!==0?a+L%b:f;var G=this._events;if((b>0&&this.currentFrame>x||b<0&&this.currentFrame<x)&&(this._onLoop(),G.length))for(var y=0;y<G.length;y++)G[y].onlyOnce||(G[y].isDone=!1);this._currentFrame=x,this._animationState.repeatCount=b===0?0:L/b>>0,this._animationState.highLimitValue=U,this._animationState.offsetValue=D;var Y=A._interpolate(x,this._animationState);if(this.setValue(Y,m),G.length){for(var y=0;y<G.length;y++)if(b>0&&x>=G[y].frame&&G[y].frame>=a||b<0&&x<=G[y].frame&&G[y].frame<=a){var Z=G[y];Z.isDone||(Z.onlyOnce&&(G.splice(y,1),y--),Z.isDone=!0,Z.action(x))}}return R||(this._stopped=!0),R},n}()},574:function(J,j,o){"use strict";var l=o(456),s=o(440),C=o(467);C.a.prototype.restoreSingleAttachment=function(){var v=this._gl;this.bindAttachments([v.BACK])},C.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var v=this._gl;this.bindAttachments([v.COLOR_ATTACHMENT0])},C.a.prototype.buildTextureLayout=function(v){for(var c=this._gl,E=[],h=0;h<v.length;h++)v[h]?E.push(c["COLOR_ATTACHMENT"+h]):E.push(c.NONE);return E},C.a.prototype.bindAttachments=function(v){var c=this._gl;c.drawBuffers(v)},C.a.prototype.clearAttachments=function(v,c,E,h,i){if(v.length!==0){var t=this._gl;t.drawBuffers([v[0]]),this.clear(c,c!==null,h,i);var e=v[0];v[0]=t.NONE,t.drawBuffers(v),this.clear(E,E!==null,!1,!1),v[0]=e}},C.a.prototype.unBindMultiColorAttachmentFramebuffer=function(v,c,E){c===void 0&&(c=!1),this._currentRenderTarget=null;var h=this._gl,i=v[0]._attachments,t=i.length;if(v[0]._MSAAFramebuffer){h.bindFramebuffer(h.READ_FRAMEBUFFER,v[0]._MSAAFramebuffer),h.bindFramebuffer(h.DRAW_FRAMEBUFFER,v[0]._framebuffer);for(var e=0;e<t;e++){for(var n=v[e],r=0;r<t;r++)i[r]=h.NONE;i[e]=h[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],h.readBuffer(i[e]),h.drawBuffers(i),h.blitFramebuffer(0,0,n.width,n.height,0,0,n.width,n.height,h.COLOR_BUFFER_BIT,h.NEAREST)}for(var e=0;e<t;e++)i[e]=h[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"];h.drawBuffers(i)}for(var e=0;e<t;e++){var n=v[e];n.generateMipMaps&&!c&&!n.isCube&&(this._bindTextureDirectly(h.TEXTURE_2D,n,!0),h.generateMipmap(h.TEXTURE_2D),this._bindTextureDirectly(h.TEXTURE_2D,null))}E&&(v[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(v[0]._framebuffer),E()),this._bindUnboundFramebuffer(null)},C.a.prototype.createMultipleRenderTarget=function(v,c,E){E===void 0&&(E=!0);var h=!1,i=!0,t=!1,e=!1,n=1,r=0,a=3,f=new Array,p=new Array;c!==void 0&&(h=c.generateMipMaps===void 0?!1:c.generateMipMaps,i=c.generateDepthBuffer===void 0?!0:c.generateDepthBuffer,t=c.generateStencilBuffer===void 0?!1:c.generateStencilBuffer,e=c.generateDepthTexture===void 0?!1:c.generateDepthTexture,n=c.textureCount||1,c.types&&(f=c.types),c.samplingModes&&(p=c.samplingModes));var d=this._gl,m=d.createFramebuffer();this._bindUnboundFramebuffer(m);for(var A=v.width||v,O=v.height||v,R=[],b=[],D=this._setupFramebufferDepthAttachments(t,i,A,O),L=0;L<n;L++){var U=p[L]||a,F=f[L]||r;(F===1&&!this._caps.textureFloatLinearFiltering||F===2&&!this._caps.textureHalfFloatLinearFiltering)&&(U=1);var V=this._getSamplingParameters(U,h);F===1&&!this._caps.textureFloat&&(F=0,s.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var M=new l.a(this,l.b.MultiRenderTarget),x=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+L:"COLOR_ATTACHMENT"+L+"_WEBGL"];R.push(M),b.push(x),d.activeTexture(d["TEXTURE"+L]),d.bindTexture(d.TEXTURE_2D,M._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,V.mag),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,V.min),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(F),A,O,0,d.RGBA,this._getWebGLTextureType(F),null),d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,x,d.TEXTURE_2D,M._hardwareTexture.underlyingResource,0),h&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(d.TEXTURE_2D,null),M._framebuffer=m,M._depthStencilBuffer=D,M.baseWidth=A,M.baseHeight=O,M.width=A,M.height=O,M.isReady=!0,M.samples=1,M.generateMipMaps=h,M.samplingMode=U,M.type=F,M._generateDepthBuffer=i,M._generateStencilBuffer=t,M._attachments=b,M._textureArray=R,this._internalTexturesCache.push(M)}if(e&&this._caps.depthTextureExtension){var _=new l.a(this,l.b.MultiRenderTarget);d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,_._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this.webGLVersion<2?d.DEPTH_COMPONENT:d.DEPTH_COMPONENT16,A,O,0,d.DEPTH_COMPONENT,d.UNSIGNED_SHORT,null),d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,_._hardwareTexture.underlyingResource,0),_._framebuffer=m,_.baseWidth=A,_.baseHeight=O,_.width=A,_.height=O,_.isReady=!0,_.samples=1,_.generateMipMaps=h,_.samplingMode=d.NEAREST,_._generateDepthBuffer=i,_._generateStencilBuffer=t,R.push(_),this._internalTexturesCache.push(_)}return E&&d.drawBuffers(b),this._bindUnboundFramebuffer(null),this.resetTextureCache(),R},C.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(v,c,E){if(E===void 0&&(E=!0),this.webGLVersion<2||!v)return 1;if(v[0].samples===c)return c;var h=v[0]._attachments.length;if(h===0)return 1;var i=this._gl;c=Math.min(c,this.getCaps().maxMSAASamples),v[0]._depthStencilBuffer&&(i.deleteRenderbuffer(v[0]._depthStencilBuffer),v[0]._depthStencilBuffer=null),v[0]._MSAAFramebuffer&&(i.deleteFramebuffer(v[0]._MSAAFramebuffer),v[0]._MSAAFramebuffer=null);for(var t=0;t<h;t++)v[t]._MSAARenderBuffer&&(i.deleteRenderbuffer(v[t]._MSAARenderBuffer),v[t]._MSAARenderBuffer=null);if(c>1&&i.renderbufferStorageMultisample){var e=i.createFramebuffer();if(!e)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(e);for(var n=this._setupFramebufferDepthAttachments(v[0]._generateStencilBuffer,v[0]._generateDepthBuffer,v[0].width,v[0].height,c),r=[],t=0;t<h;t++){var a=v[t],f=i[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],p=i.createRenderbuffer();if(!p)throw new Error("Unable to create multi sampled framebuffer");i.bindRenderbuffer(i.RENDERBUFFER,p),i.renderbufferStorageMultisample(i.RENDERBUFFER,c,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,f,i.RENDERBUFFER,p),a._MSAAFramebuffer=e,a._MSAARenderBuffer=p,a.samples=c,a._depthStencilBuffer=n,i.bindRenderbuffer(i.RENDERBUFFER,null),r.push(f)}E&&i.drawBuffers(r)}else this._bindUnboundFramebuffer(v[0]._framebuffer);return this._bindUnboundFramebuffer(null),c}},576:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(451),s=o(452),C=o(516),v=o(468);v.a.AddParser(s.a.NAME_EFFECTLAYER,function(E,h,i,t){if(E.effectLayers){i.effectLayers||(i.effectLayers=new Array);for(var e=0;e<E.effectLayers.length;e++){var n=C.a.Parse(E.effectLayers[e],h,t);i.effectLayers.push(n)}}}),v.a.prototype.removeEffectLayer=function(E){var h=this.effectLayers.indexOf(E);return h!==-1&&this.effectLayers.splice(h,1),h},v.a.prototype.addEffectLayer=function(E){this.effectLayers.push(E)};var c=function(){function E(h){this.name=s.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=h,this._engine=h.getEngine(),h.effectLayers=new Array}return E.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(s.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(s.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(s.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},E.prototype.rebuild=function(){for(var h=this.scene.effectLayers,i=0,t=h;i<t.length;i++){var e=t[i];e._rebuild()}},E.prototype.serialize=function(h){h.effectLayers=[];for(var i=this.scene.effectLayers,t=0,e=i;t<e.length;t++){var n=e[t];n.serialize&&h.effectLayers.push(n.serialize())}},E.prototype.addFromContainer=function(h){var i=this;!h.effectLayers||h.effectLayers.forEach(function(t){i.scene.addEffectLayer(t)})},E.prototype.removeFromContainer=function(h,i){var t=this;!h.effectLayers||h.effectLayers.forEach(function(e){t.scene.removeEffectLayer(e),i&&e.dispose()})},E.prototype.dispose=function(){for(var h=this.scene.effectLayers;h.length;)h[0].dispose()},E.prototype._isReadyForMesh=function(h,i){for(var t=this.scene.effectLayers,e=0,n=t;e<n.length;e++){var r=n[e];if(!!r.hasMesh(h))for(var a=0,f=h.subMeshes;a<f.length;a++){var p=f[a];if(!r.isReady(p,i))return!1}}return!0},E.prototype._renderMainTexture=function(h){this._renderEffects=!1,this._needStencil=!1;var i=!1,t=this.scene.effectLayers;if(t&&t.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.shouldRender()&&(!r.camera||r.camera.cameraRigMode===l.a.RIG_MODE_NONE&&h===r.camera||r.camera.cameraRigMode!==l.a.RIG_MODE_NONE&&r.camera._rigCameras.indexOf(h)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||r.needStencil();var a=r._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),i=!0)}}this.scene.incrementRenderId()}return i},E.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},E.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},E.prototype._draw=function(h){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var i=this.scene.effectLayers,t=0;t<i.length;t++){var e=i[t];e.renderingGroupId===h&&e.shouldRender()&&e.render()}this._engine.setDepthBuffer(!0)}},E.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},E.prototype._drawRenderingGroup=function(h){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(h)},E}();C.a._SceneComponentInitialization=function(E){var h=E._getComponent(s.a.NAME_EFFECTLAYER);h||(h=new c(E),E._addComponent(h))}},577:function(J,j,o){"use strict";o.d(j,"a",function(){return m});var l=o(434),s=o(439),C=o(436),v=o(447),c=o(442),E=o(458),h=o(459),i=o(472),t=o(516),e=o(468),n=o(437),r=o(445),a=o(441),f=o(646),p=o(647),d=o(576);e.a.prototype.getGlowLayerByName=function(A){for(var O=0;O<this.effectLayers.length;O++)if(this.effectLayers[O].name===A&&this.effectLayers[O].getEffectName()===m.EffectName)return this.effectLayers[O];return null};var m=function(A){Object(l.d)(O,A);function O(R,b,D){var L=A.call(this,R,b)||this;return L._intensity=1,L._includedOnlyMeshes=[],L._excludedMeshes=[],L._meshesUsingTheirOwnMaterials=[],L.neutralColor=new a.b(0,0,0,1),L._options=Object(l.a)({mainTextureRatio:O.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},D),L._init({alphaBlendingMode:1,camera:L._options.camera,mainTextureFixedSize:L._options.mainTextureFixedSize,mainTextureRatio:L._options.mainTextureRatio,renderingGroupId:L._options.renderingGroupId}),L}return Object.defineProperty(O.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(R){this._horizontalBlurPostprocess1.kernel=R,this._verticalBlurPostprocess1.kernel=R,this._horizontalBlurPostprocess2.kernel=R,this._verticalBlurPostprocess2.kernel=R},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"intensity",{get:function(){return this._intensity},set:function(R){this._intensity=R},enumerable:!1,configurable:!0}),O.prototype.getEffectName=function(){return O.EffectName},O.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[v.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},O.prototype._createTextureAndPostProcesses=function(){var R=this,b=this._mainTextureDesiredSize.width,D=this._mainTextureDesiredSize.height;b=this._engine.needPOTTextures?r.a.GetExponentOfTwo(b,this._maxSize):b,D=this._engine.needPOTTextures?r.a.GetExponentOfTwo(D,this._maxSize):D;var L=0;this._engine.getCaps().textureHalfFloatRender?L=2:L=0,this._blurTexture1=new E.a("GlowLayerBlurRTT",{width:b,height:D},this._scene,!1,!0,L),this._blurTexture1.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var U=Math.floor(b/2),F=Math.floor(D/2);this._blurTexture2=new E.a("GlowLayerBlurRTT2",{width:U,height:F},this._scene,!1,!0,L),this._blurTexture2.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new i.a("GlowLayerHBP1",new C.d(1,0),this._options.blurKernelSize/2,{width:b,height:D},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._horizontalBlurPostprocess1.width=b,this._horizontalBlurPostprocess1.height=D,this._horizontalBlurPostprocess1.onApplyObservable.add(function(V){V.setTexture("textureSampler",R._mainTexture)}),this._verticalBlurPostprocess1=new i.a("GlowLayerVBP1",new C.d(0,1),this._options.blurKernelSize/2,{width:b,height:D},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._horizontalBlurPostprocess2=new i.a("GlowLayerHBP2",new C.d(1,0),this._options.blurKernelSize/2,{width:U,height:F},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._horizontalBlurPostprocess2.width=U,this._horizontalBlurPostprocess2.height=F,this._horizontalBlurPostprocess2.onApplyObservable.add(function(V){V.setTexture("textureSampler",R._blurTexture1)}),this._verticalBlurPostprocess2=new i.a("GlowLayerVBP2",new C.d(0,1),this._options.blurKernelSize/2,{width:U,height:F},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var V=R._blurTexture1.getInternalTexture();if(V){R._scene.postProcessManager.directRender(R._postProcesses1,V,!0);var M=R._blurTexture2.getInternalTexture();M&&R._scene.postProcessManager.directRender(R._postProcesses2,M,!0),R._engine.unBindFramebuffer(M!=null?M:V,!0)}}),this._postProcesses.map(function(V){V.autoClear=!1})},O.prototype.isReady=function(R,b){var D=R.getMaterial(),L=R.getRenderingMesh();if(!D||!L)return!1;var U=D.emissiveTexture;return A.prototype._isReady.call(this,R,b,U)},O.prototype.needStencil=function(){return!1},O.prototype._canRenderMesh=function(R,b){return!0},O.prototype._internalRender=function(R){R.setTexture("textureSampler",this._blurTexture1),R.setTexture("textureSampler2",this._blurTexture2),R.setFloat("offset",this._intensity);var b=this._engine,D=b.getStencilBuffer();b.setStencilBuffer(!1),b.drawElementsType(h.a.TriangleFillMode,0,6),b.setStencilBuffer(D)},O.prototype._setEmissiveTextureAndColor=function(R,b,D){var L=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(R,b,D):D?(this._emissiveTextureAndColor.texture=D.emissiveTexture,this._emissiveTextureAndColor.texture&&(L=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(R,b,D,this._emissiveTextureAndColor.color):D.emissiveColor?this._emissiveTextureAndColor.color.set(D.emissiveColor.r*L,D.emissiveColor.g*L,D.emissiveColor.b*L,D.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},O.prototype._shouldRenderMesh=function(R){return this.hasMesh(R)},O.prototype._addCustomEffectDefines=function(R){R.push("#define GLOW")},O.prototype.addExcludedMesh=function(R){this._excludedMeshes.indexOf(R.uniqueId)===-1&&this._excludedMeshes.push(R.uniqueId)},O.prototype.removeExcludedMesh=function(R){var b=this._excludedMeshes.indexOf(R.uniqueId);b!==-1&&this._excludedMeshes.splice(b,1)},O.prototype.addIncludedOnlyMesh=function(R){this._includedOnlyMeshes.indexOf(R.uniqueId)===-1&&this._includedOnlyMeshes.push(R.uniqueId)},O.prototype.removeIncludedOnlyMesh=function(R){var b=this._includedOnlyMeshes.indexOf(R.uniqueId);b!==-1&&this._includedOnlyMeshes.splice(b,1)},O.prototype.hasMesh=function(R){return A.prototype.hasMesh.call(this,R)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(R.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(R.uniqueId)===-1:!0:!1},O.prototype._useMeshMaterial=function(R){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId)>-1},O.prototype.referenceMeshToUseItsOwnMaterial=function(R){this._meshesUsingTheirOwnMaterials.push(R.uniqueId)},O.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(R){for(var b=this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId);b>=0;)this._meshesUsingTheirOwnMaterials.splice(b,1),b=this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId)},O.prototype._disposeMesh=function(R){this.removeIncludedOnlyMesh(R),this.removeExcludedMesh(R)},O.prototype.getClassName=function(){return"GlowLayer"},O.prototype.serialize=function(){var R=s.a.Serialize(this);R.customType="BABYLON.GlowLayer";var b;if(R.includedMeshes=[],this._includedOnlyMeshes.length)for(b=0;b<this._includedOnlyMeshes.length;b++){var D=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[b]);D&&R.includedMeshes.push(D.id)}if(R.excludedMeshes=[],this._excludedMeshes.length)for(b=0;b<this._excludedMeshes.length;b++){var D=this._scene.getMeshByUniqueID(this._excludedMeshes[b]);D&&R.excludedMeshes.push(D.id)}return R},O.Parse=function(R,b,D){var L=s.a.Parse(function(){return new O(R.name,b,R.options)},R,b,D),U;for(U=0;U<R.excludedMeshes.length;U++){var F=b.getMeshByID(R.excludedMeshes[U]);F&&L.addExcludedMesh(F)}for(U=0;U<R.includedMeshes.length;U++){var F=b.getMeshByID(R.includedMeshes[U]);F&&L.addIncludedOnlyMesh(F)}return L},O.EffectName="GlowLayer",O.DefaultBlurKernelSize=32,O.DefaultTextureRatio=.5,Object(l.c)([Object(s.c)()],O.prototype,"blurKernelSize",null),Object(l.c)([Object(s.c)()],O.prototype,"intensity",null),Object(l.c)([Object(s.c)("options")],O.prototype,"_options",void 0),O}(t.a);n.a.RegisteredTypes["BABYLON.GlowLayer"]=m},578:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var l=o(434),s=o(466),C=o(584),v=o(472),c=o(585),E=o(436),h=o(442),i=function(t){Object(l.d)(e,t);function e(n,r,a,f,p,d){p===void 0&&(p=0),d===void 0&&(d=!1);var m=t.call(this,n.getEngine(),"bloom",function(){return m._effects},!0)||this;return m.bloomScale=r,m._effects=[],m._downscale=new C.a("highlights",1,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d),m._blurX=new v.a("horizontal blur",new E.d(1,0),10,r,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,void 0,d),m._blurX.alwaysForcePOT=!0,m._blurX.autoClear=!1,m._blurY=new v.a("vertical blur",new E.d(0,1),10,r,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,void 0,d),m._blurY.alwaysForcePOT=!0,m._blurY.autoClear=!1,m.kernel=f,m._effects=[m._downscale,m._blurX,m._blurY],m._merge=new c.a("bloomMerge",m._downscale,m._blurY,a,r,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d),m._merge.autoClear=!1,m._effects.push(m._merge),m}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(n){this._downscale.threshold=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._merge.weight},set:function(n){this._merge.weight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(n){this._blurX.kernel=n*this.bloomScale,this._blurY.kernel=n*this.bloomScale},enumerable:!1,configurable:!0}),e.prototype.disposeEffects=function(n){for(var r=0;r<this._effects.length;r++)this._effects[r].dispose(n)},e.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},e.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},e}(s.a)},579:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var l=o(434),s=o(436),C=o(444),v=o(600),c=o(437),E=o(439),h=function(i){Object(l.d)(t,i);function t(e,n,r,a,f,p,d,m,A,O){A===void 0&&(A=0),O===void 0&&(O=!1);var R=i.call(this,e,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,f,p,d,m,null,A,void 0,null,O)||this;return R.aberrationAmount=30,R.radialIntensity=0,R.direction=new s.d(.707,.707),R.centerPosition=new s.d(.5,.5),R.screenWidth=n,R.screenHeight=r,R.onApplyObservable.add(function(b){b.setFloat("chromatic_aberration",R.aberrationAmount),b.setFloat("screen_width",n),b.setFloat("screen_height",r),b.setFloat("radialIntensity",R.radialIntensity),b.setFloat2("direction",R.direction.x,R.direction.y),b.setFloat2("centerPosition",R.centerPosition.x,R.centerPosition.y)}),R}return t.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},t._Parse=function(e,n,r,a){return E.a.Parse(function(){return new t(e.name,e.screenWidth,e.screenHeight,e.options,n,e.renderTargetSamplingMode,r.getEngine(),e.reusable,e.textureType,!1)},e,r,a)},Object(l.c)([Object(E.c)()],t.prototype,"aberrationAmount",void 0),Object(l.c)([Object(E.c)()],t.prototype,"radialIntensity",void 0),Object(l.c)([Object(E.c)()],t.prototype,"direction",void 0),Object(l.c)([Object(E.c)()],t.prototype,"centerPosition",void 0),Object(l.c)([Object(E.c)()],t.prototype,"screenWidth",void 0),Object(l.c)([Object(E.c)()],t.prototype,"screenHeight",void 0),t}(C.a);c.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=h},580:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var l=o(434),s=o(442),C=o(472),v=o(437),c=o(439),E=function(h){Object(l.d)(i,h);function i(t,e,n,r,a,f,p,d,m,A,O,R,b){d===void 0&&(d=null),m===void 0&&(m=s.a.BILINEAR_SAMPLINGMODE),R===void 0&&(R=0),b===void 0&&(b=!1);var D=h.call(this,t,n,r,a,f,m=2,A,O,R=0,`#define DOF 1\r
`,b)||this;return D.direction=n,D.onApplyObservable.add(function(L){d!=null&&L.setTextureFromPostProcess("textureSampler",d),L.setTextureFromPostProcessOutput("circleOfConfusionSampler",p),e.activeCamera&&L.setFloat2("cameraMinMaxZ",e.activeCamera.minZ,e.activeCamera.maxZ)}),D}return i.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(l.c)([Object(c.c)()],i.prototype,"direction",void 0),i}(C.a);v.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=E},581:function(J,j,o){"use strict";o.d(j,"a",function(){return n});var l=o(434),s=o(444),C=o(502),v=o(439),c=function(){function r(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return r}(),E=o(435),h="screenSpaceReflectionPixelShader",i=`

uniform sampler2D textureSampler;
#ifdef SSR_SUPPORTED
uniform sampler2D reflectivitySampler;
uniform sampler2D normalSampler;
uniform sampler2D positionSampler;
#endif
uniform mat4 view;
uniform mat4 projection;
uniform float step;
uniform float strength;
uniform float threshold;
uniform float roughnessFactor;
uniform float reflectionSpecularFalloffExponent;

varying vec2 vUV;
#ifdef SSR_SUPPORTED

struct ReflectionInfo {
vec3 color;
vec4 coords;
};

vec3 fresnelSchlick(float cosTheta,vec3 F0)
{
return F0+(1.0-F0)*pow(1.0-cosTheta,5.0);
}

ReflectionInfo smoothReflectionInfo(vec3 dir,vec3 hitCoord)
{
ReflectionInfo info;
info.color=vec3(0.0);
vec4 projectedCoord;
float sampledDepth;
for(int i=0; i<SMOOTH_STEPS; i++)
{
projectedCoord=projection*vec4(hitCoord,1.0);
projectedCoord.xy/=projectedCoord.w;
projectedCoord.xy=0.5*projectedCoord.xy+vec2(0.5);
sampledDepth=(view*texture2D(positionSampler,projectedCoord.xy)).z;
float depth=sampledDepth-hitCoord.z;
dir*=0.5;
if(depth>0.0)
hitCoord-=dir;
else
hitCoord+=dir;
info.color+=texture2D(textureSampler,projectedCoord.xy).rgb;
}
projectedCoord=projection*vec4(hitCoord,1.0);
projectedCoord.xy/=projectedCoord.w;
projectedCoord.xy=0.5*projectedCoord.xy+vec2(0.5);

info.coords=vec4(projectedCoord.xy,sampledDepth,1.0);
info.color+=texture2D(textureSampler,projectedCoord.xy).rgb;
info.color/=float(SMOOTH_STEPS+1);
return info;
}

ReflectionInfo getReflectionInfo(vec3 dir,vec3 hitCoord)
{
ReflectionInfo info;
vec4 projectedCoord;
float sampledDepth;
dir*=step;
for(int i=0; i<REFLECTION_SAMPLES; i++)
{
hitCoord+=dir;
projectedCoord=projection*vec4(hitCoord,1.0);
projectedCoord.xy/=projectedCoord.w;
projectedCoord.xy=0.5*projectedCoord.xy+vec2(0.5);
sampledDepth=(view*texture2D(positionSampler,projectedCoord.xy)).z;
float depth=sampledDepth-hitCoord.z;
if(((depth-dir.z)<threshold) && depth<=0.0)
{
#ifdef ENABLE_SMOOTH_REFLECTIONS
return smoothReflectionInfo(dir,hitCoord);
#else
info.color=texture2D(textureSampler,projectedCoord.xy).rgb;
info.coords=vec4(projectedCoord.xy,sampledDepth,0.0);
return info;
#endif
}
}
info.color=texture2D(textureSampler,projectedCoord.xy).rgb;
info.coords=vec4(projectedCoord.xy,sampledDepth,0.0);
return info;
}
vec3 hash(vec3 a)
{
a=fract(a*0.8);
a+=dot(a,a.yxz+19.19);
return fract((a.xxy+a.yxx)*a.zyx);
}
#endif
void main()
{
#ifdef SSR_SUPPORTED

vec4 albedoFull=texture2D(textureSampler,vUV);
vec3 albedo=albedoFull.rgb;
float spec=texture2D(reflectivitySampler,vUV).r;
if (spec == 0.0) {
gl_FragColor=albedoFull;
return;
}

vec3 normal=(texture2D(normalSampler,vUV)).xyz;
vec3 position=(view*texture2D(positionSampler,vUV)).xyz;
vec3 reflected=normalize(reflect(normalize(position),normalize(normal)));
float roughness=1.0-texture2D(reflectivitySampler,vUV).a;
vec3 jitt=mix(vec3(0.0),hash(position),roughness)*roughnessFactor;
ReflectionInfo info=getReflectionInfo(jitt+reflected,position);

vec2 dCoords=smoothstep(0.2,0.6,abs(vec2(0.5,0.5)-info.coords.xy));
float screenEdgefactor=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);

vec3 F0=vec3(0.04);
F0=mix(F0,albedo,spec);
vec3 fresnel=fresnelSchlick(max(dot(normalize(normal),normalize(position)),0.0),F0);

float reflectionMultiplier=clamp(pow(spec*strength,reflectionSpecularFalloffExponent)*screenEdgefactor*reflected.z,0.0,0.9);
float albedoMultiplier=1.0-reflectionMultiplier;
vec3 SSR=info.color*fresnel;
gl_FragColor=vec4((albedo*albedoMultiplier)+(SSR*reflectionMultiplier),albedoFull.a);
#else
gl_FragColor=texture2D(textureSampler,vUV);
#endif
}
`;E.a.ShadersStore[h]=i;var t={name:h,shader:i},e=o(437),n=function(r){Object(l.d)(a,r);function a(f,p,d,m,A,O,R,b,D,L){b===void 0&&(b=0),D===void 0&&(D=!1),L===void 0&&(L=!1);var U=r.call(this,f,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],d,m,A,O,R,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,b,void 0,null,D)||this;if(U.threshold=1.2,U.strength=1,U.reflectionSpecularFalloffExponent=3,U.step=1,U.roughnessFactor=.2,U._forceGeometryBuffer=!1,U._enableSmoothReflections=!1,U._reflectionSamples=64,U._smoothSteps=5,U._forceGeometryBuffer=L,U._forceGeometryBuffer){var F=p.enableGeometryBufferRenderer();F&&F.isSupported&&(F.enablePosition=!0,F.enableReflectivity=!0,U._geometryBufferRenderer=F)}else U._prePassRenderer=p.enablePrePassRenderer(),U._prePassRenderer.markAsDirty(),U._prePassEffectConfiguration=new c;return U._updateEffectDefines(),U.onApply=function(V){var M=U._geometryBufferRenderer,x=U._prePassRenderer;if(!(!x&&!M)){if(M){var _=M.getTextureIndex(C.a.POSITION_TEXTURE_TYPE),w=M.getTextureIndex(C.a.REFLECTIVITY_TEXTURE_TYPE);V.setTexture("normalSampler",M.getGBuffer().textures[1]),V.setTexture("positionSampler",M.getGBuffer().textures[_]),V.setTexture("reflectivitySampler",M.getGBuffer().textures[w])}else{var _=x.getIndex(1),w=x.getIndex(3),G=x.getIndex(6);V.setTexture("normalSampler",x.getRenderTarget().textures[G]),V.setTexture("positionSampler",x.getRenderTarget().textures[_]),V.setTexture("reflectivitySampler",x.getRenderTarget().textures[w])}var y=p.activeCamera;if(!!y){var Y=y.getViewMatrix(!0),Z=y.getProjectionMatrix(!0);V.setMatrix("projection",Z),V.setMatrix("view",Y),V.setFloat("threshold",U.threshold),V.setFloat("reflectionSpecularFalloffExponent",U.reflectionSpecularFalloffExponent),V.setFloat("strength",U.strength),V.setFloat("step",U.step),V.setFloat("roughnessFactor",U.roughnessFactor)}}},U}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(f){f!==this._enableSmoothReflections&&(this._enableSmoothReflections=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(f){f!==this._reflectionSamples&&(this._reflectionSamples=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(f){f!==this._smoothSteps&&(this._smoothSteps=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var f=[];(this._geometryBufferRenderer||this._prePassRenderer)&&f.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&f.push("#define ENABLE_SMOOTH_REFLECTIONS"),f.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),f.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(f.join(`
`))},a._Parse=function(f,p,d,m){return v.a.Parse(function(){return new a(f.name,d,f.options,p,f.renderTargetSamplingMode,d.getEngine(),f.textureType,f.reusable)},f,d,m)},Object(l.c)([Object(v.c)()],a.prototype,"threshold",void 0),Object(l.c)([Object(v.c)()],a.prototype,"strength",void 0),Object(l.c)([Object(v.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(l.c)([Object(v.c)()],a.prototype,"step",void 0),Object(l.c)([Object(v.c)()],a.prototype,"roughnessFactor",void 0),Object(l.c)([Object(v.c)()],a.prototype,"enableSmoothReflections",null),Object(l.c)([Object(v.c)()],a.prototype,"reflectionSamples",null),Object(l.c)([Object(v.c)()],a.prototype,"smoothSteps",null),a}(s.a);e.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=n},582:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var l=o(434),s=o(444),C=o(440),v=o(435),c="circleOfConfusionPixelShader",E=`
uniform sampler2D depthSampler;

varying vec2 vUV;

uniform vec2 cameraMinMaxZ;

uniform float focusDistance;
uniform float cocPrecalculation;
void main(void)
{
float depth=texture2D(depthSampler,vUV).r;
float pixelDistance=(cameraMinMaxZ.x+(cameraMinMaxZ.y-cameraMinMaxZ.x)*depth)*1000.0;
float coc=abs(cocPrecalculation* ((focusDistance-pixelDistance)/pixelDistance));
coc=clamp(coc,0.0,1.0);
gl_FragColor=vec4(coc,depth,coc,1.0);
}
`;v.a.ShadersStore[c]=E;var h={name:c,shader:E},i=o(437),t=o(439),e=function(n){Object(l.d)(r,n);function r(a,f,p,d,m,A,O,R,b){R===void 0&&(R=0),b===void 0&&(b=!1);var D=n.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],p,d,m,A,O,null,R,void 0,null,b)||this;return D.lensSize=50,D.fStop=1.4,D.focusDistance=2e3,D.focalLength=50,D._depthTexture=null,D._depthTexture=f,D.onApplyObservable.add(function(L){if(!D._depthTexture){C.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}L.setTexture("depthSampler",D._depthTexture);var U=D.lensSize/D.fStop,F=U*D.focalLength/(D.focusDistance-D.focalLength);L.setFloat("focusDistance",D.focusDistance),L.setFloat("cocPrecalculation",F),L.setFloat2("cameraMinMaxZ",D._depthTexture.activeCamera.minZ,D._depthTexture.activeCamera.maxZ)}),D}return r.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(r.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(l.c)([Object(t.c)()],r.prototype,"lensSize",void 0),Object(l.c)([Object(t.c)()],r.prototype,"fStop",void 0),Object(l.c)([Object(t.c)()],r.prototype,"focusDistance",void 0),Object(l.c)([Object(t.c)()],r.prototype,"focalLength",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=e},583:function(J,j,o){"use strict";o.d(j,"b",function(){return h}),o.d(j,"a",function(){return i});var l=o(434),s=o(444),C=o(435),v="depthOfFieldMergePixelShader",c=`uniform sampler2D textureSampler;
varying vec2 vUV;
uniform sampler2D circleOfConfusionSampler;
uniform sampler2D blurStep0;
#if BLUR_LEVEL>0
uniform sampler2D blurStep1;
#endif
#if BLUR_LEVEL>1
uniform sampler2D blurStep2;
#endif
void main(void)
{
float coc=texture2D(circleOfConfusionSampler,vUV).r;
#if BLUR_LEVEL == 0
vec4 original=texture2D(textureSampler,vUV);
vec4 blurred0=texture2D(blurStep0,vUV);
gl_FragColor=mix(original,blurred0,coc);
#endif
#if BLUR_LEVEL == 1
if(coc<0.5){
vec4 original=texture2D(textureSampler,vUV);
vec4 blurred1=texture2D(blurStep1,vUV);
gl_FragColor=mix(original,blurred1,coc/0.5);
}else{
vec4 blurred0=texture2D(blurStep0,vUV);
vec4 blurred1=texture2D(blurStep1,vUV);
gl_FragColor=mix(blurred1,blurred0,(coc-0.5)/0.5);
}
#endif
#if BLUR_LEVEL == 2
if(coc<0.33){
vec4 original=texture2D(textureSampler,vUV);
vec4 blurred2=texture2D(blurStep2,vUV);
gl_FragColor=mix(original,blurred2,coc/0.33);
}else if(coc<0.66){
vec4 blurred1=texture2D(blurStep1,vUV);
vec4 blurred2=texture2D(blurStep2,vUV);
gl_FragColor=mix(blurred2,blurred1,(coc-0.33)/0.33);
}else{
vec4 blurred0=texture2D(blurStep0,vUV);
vec4 blurred1=texture2D(blurStep1,vUV);
gl_FragColor=mix(blurred1,blurred0,(coc-0.66)/0.34);
}
#endif
}
`;C.a.ShadersStore[v]=c;var E={name:v,shader:c},h=function(){function t(){}return t}(),i=function(t){Object(l.d)(e,t);function e(n,r,a,f,p,d,m,A,O,R,b){R===void 0&&(R=0),b===void 0&&(b=!1);var D=t.call(this,n,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],p,d,m,A,O,null,R,void 0,null,!0)||this;return D.blurSteps=f,D.onApplyObservable.add(function(L){L.setTextureFromPostProcess("textureSampler",r),L.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),f.forEach(function(U,F){L.setTextureFromPostProcessOutput("blurStep"+(f.length-F-1),U)})}),b||D.updateEffect(),D}return e.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},e.prototype.updateEffect=function(n,r,a,f,p,d){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),n||(n="",n+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),t.prototype.updateEffect.call(this,n,r,a,f,p,d)},e}(s.a)},584:function(J,j,o){"use strict";o.d(j,"a",function(){return n});var l=o(434),s=o(444),C=o(515),v=o(435),c=o(457),E="extractHighlightsPixelShader",h=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;v.a.ShadersStore[E]=h;var i={name:E,shader:h},t=o(439),e=o(437),n=function(r){Object(l.d)(a,r);function a(f,p,d,m,A,O,R,b){R===void 0&&(R=0),b===void 0&&(b=!1);var D=r.call(this,f,"extractHighlights",["threshold","exposure"],null,p,d,m,A,O,null,R,void 0,null,b)||this;return D.threshold=.9,D._exposure=1,D._inputPostProcess=null,D.onApplyObservable.add(function(L){D._inputPostProcess&&L.setTextureFromPostProcess("textureSampler",D._inputPostProcess),L.setFloat("threshold",Math.pow(D.threshold,C.b)),L.setFloat("exposure",D._exposure)}),D}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(l.c)([Object(t.c)()],a.prototype,"threshold",void 0),a}(s.a);e.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=n},585:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(434),s=o(444),C=o(435),v="bloomMergePixelShader",c=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;C.a.ShadersStore[v]=c;var E={name:v,shader:c},h=o(437),i=o(439),t=function(e){Object(l.d)(n,e);function n(r,a,f,p,d,m,A,O,R,b,D){b===void 0&&(b=0),D===void 0&&(D=!1);var L=e.call(this,r,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],d,m,A,O,R,null,b,void 0,null,!0)||this;return L.weight=1,L.weight=p,L.onApplyObservable.add(function(U){U.setTextureFromPostProcess("textureSampler",a),U.setTextureFromPostProcessOutput("bloomBlur",f),U.setFloat("bloomWeight",L.weight)}),D||L.updateEffect(),L}return n.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(l.c)([Object(i.c)()],n.prototype,"weight",void 0),n}(s.a);h.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=t},586:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var l=o(434),s=o(444),C=o(435),v=o(457),c="grainPixelShader",E=`#include<helperFunctions>

uniform sampler2D textureSampler;

uniform float intensity;
uniform float animatedSeed;

varying vec2 vUV;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec2 seed=vUV*(animatedSeed);
float grain=dither(seed,intensity);

float lum=getLuminance(gl_FragColor.rgb);
float grainAmount=(cos(-PI+(lum*PI*2.))+1.)/2.;
gl_FragColor.rgb+=grain*grainAmount;
gl_FragColor.rgb=max(gl_FragColor.rgb,0.0);
}`;C.a.ShadersStore[c]=E;var h={name:c,shader:E},i=o(437),t=o(439),e=function(n){Object(l.d)(r,n);function r(a,f,p,d,m,A,O,R){O===void 0&&(O=0),R===void 0&&(R=!1);var b=n.call(this,a,"grain",["intensity","animatedSeed"],[],f,p,d,m,A,null,O,void 0,null,R)||this;return b.intensity=30,b.animated=!1,b.onApplyObservable.add(function(D){D.setFloat("intensity",b.intensity),D.setFloat("animatedSeed",b.animated?Math.random()+1:1)}),b}return r.prototype.getClassName=function(){return"GrainPostProcess"},r._Parse=function(a,f,p,d){return t.a.Parse(function(){return new r(a.name,a.options,f,a.renderTargetSamplingMode,p.getEngine(),a.reusable)},a,p,d)},Object(l.c)([Object(t.c)()],r.prototype,"intensity",void 0),Object(l.c)([Object(t.c)()],r.prototype,"animated",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.GrainPostProcess"]=e},587:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(434),s=o(444),C=o(435),v="sharpenPixelShader",c=`
varying vec2 vUV;
uniform sampler2D textureSampler;
uniform vec2 screenSize;
uniform vec2 sharpnessAmounts;
void main(void)
{
vec2 onePixel=vec2(1.0,1.0)/screenSize;
vec4 color=texture2D(textureSampler,vUV);
vec4 edgeDetection=texture2D(textureSampler,vUV+onePixel*vec2(0,-1)) +
texture2D(textureSampler,vUV+onePixel*vec2(-1,0)) +
texture2D(textureSampler,vUV+onePixel*vec2(1,0)) +
texture2D(textureSampler,vUV+onePixel*vec2(0,1)) -
color*4.0;
gl_FragColor=max(vec4(color.rgb*sharpnessAmounts.y,color.a)-(sharpnessAmounts.x*vec4(edgeDetection.rgb,0)),0.);
}`;C.a.ShadersStore[v]=c;var E={name:v,shader:c},h=o(437),i=o(439),t=function(e){Object(l.d)(n,e);function n(r,a,f,p,d,m,A,O){A===void 0&&(A=0),O===void 0&&(O=!1);var R=e.call(this,r,"sharpen",["sharpnessAmounts","screenSize"],null,a,f,p,d,m,null,A,void 0,null,O)||this;return R.colorAmount=1,R.edgeAmount=.3,R.onApply=function(b){b.setFloat2("screenSize",R.width,R.height),b.setFloat2("sharpnessAmounts",R.edgeAmount,R.colorAmount)},R}return n.prototype.getClassName=function(){return"SharpenPostProcess"},n._Parse=function(r,a,f,p){return i.a.Parse(function(){return new n(r.name,r.options,a,r.renderTargetSamplingMode,f.getEngine(),r.textureType,r.reusable)},r,f,p)},Object(l.c)([Object(i.c)()],n.prototype,"colorAmount",void 0),Object(l.c)([Object(i.c)()],n.prototype,"edgeAmount",void 0),n}(s.a);h.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=t},594:function(J,j,o){"use strict";o.d(j,"a",function(){return b});var l=o(434),s=o(440),C=o(439),v=o(436),c=o(451),E=o(442),h=o(479),i=o(444),t=o(481),e=o(466),n=o(486),r=o(437),a=o(448),f=function(){function D(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return D}(),p=o(482),d=o(435),m="ssao2PixelShader",A=`
precision highp float;
uniform sampler2D textureSampler;
uniform float near;
uniform float far;
uniform float radius;
float scales[16]=float[16](
0.1,
0.11406250000000001,
0.131640625,
0.15625,
0.187890625,
0.2265625,
0.272265625,
0.325,
0.384765625,
0.4515625,
0.525390625,
0.60625,
0.694140625,
0.7890625,
0.891015625,
1.0
);
varying vec2 vUV;
float perspectiveDepthToViewZ( const in float invClipZ,const in float near,const in float far ) {
return ( near*far )/( ( far-near )*invClipZ-far );
}
float viewZToPerspectiveDepth( const in float viewZ,const in float near,const in float far ) {
return ( near*far/viewZ+far)/( far-near );
}
float viewZToOrthographicDepth( const in float viewZ,const in float near,const in float far ) {
return ( viewZ+near )/( near-far );
}
#ifdef SSAO
uniform sampler2D randomSampler;
uniform sampler2D depthSampler;
uniform sampler2D normalSampler;
uniform float randTextureTiles;
uniform float samplesFactor;
uniform vec3 sampleSphere[SAMPLES];
uniform float totalStrength;
uniform float base;
uniform float xViewport;
uniform float yViewport;
uniform mat3 depthProjection;
uniform float maxZ;
uniform float minZAspect;
uniform vec2 texelSize;
uniform mat4 projection;
void main()
{
vec3 random=texture2D(randomSampler,vUV*randTextureTiles).rgb;
float depth=texture2D(depthSampler,vUV).r;
float depthSign=depth/abs(depth);
depth=depth*depthSign;
vec3 normal=texture2D(normalSampler,vUV).rgb;
float occlusion=0.0;
float correctedRadius=min(radius,minZAspect*depth/near);
vec3 vViewRay=vec3((vUV.x*2.0-1.0)*xViewport,(vUV.y*2.0-1.0)*yViewport,depthSign);
vec3 vDepthFactor=depthProjection*vec3(1.0,1.0,depth);
vec3 origin=vViewRay*vDepthFactor;
vec3 rvec=random*2.0-1.0;
rvec.z=0.0;

float dotProduct=dot(rvec,normal);
rvec=1.0-abs(dotProduct)>1e-2 ? rvec : vec3(-rvec.y,0.0,rvec.x);
vec3 tangent=normalize(rvec-normal*dot(rvec,normal));
vec3 bitangent=cross(normal,tangent);
mat3 tbn=mat3(tangent,bitangent,normal);
float difference;
for (int i=0; i<SAMPLES; ++i) {

vec3 samplePosition=scales[(i+int(random.x*16.0)) % 16]*tbn*sampleSphere[(i+int(random.y*16.0)) % 16];
samplePosition=samplePosition*correctedRadius+origin;

vec4 offset=vec4(samplePosition,1.0);
offset=projection*offset;
offset.xyz/=offset.w;
offset.xy=offset.xy*0.5+0.5;
if (offset.x<0.0 || offset.y<0.0 || offset.x>1.0 || offset.y>1.0) {
continue;
}

float sampleDepth=abs(texture2D(depthSampler,offset.xy).r);

difference=depthSign*samplePosition.z-sampleDepth;
float rangeCheck=1.0-smoothstep(correctedRadius*0.5,correctedRadius,difference);
occlusion+=(difference>=0.0 ? 1.0 : 0.0)*rangeCheck;
}
occlusion=occlusion*(1.0-smoothstep(maxZ*0.75,maxZ,depth));
float ao=1.0-totalStrength*occlusion*samplesFactor;
float result=clamp(ao+base,0.0,1.0);
gl_FragColor=vec4(vec3(result),1.0);
}
#endif
#ifdef BILATERAL_BLUR
uniform sampler2D depthSampler;
uniform float outSize;
uniform float samplerOffsets[SAMPLES];
vec4 blur9(sampler2D image,vec2 uv,float resolution,vec2 direction) {
vec4 color=vec4(0.0);
vec2 off1=vec2(1.3846153846)*direction;
vec2 off2=vec2(3.2307692308)*direction;
color+=texture2D(image,uv)*0.2270270270;
color+=texture2D(image,uv+(off1/resolution))*0.3162162162;
color+=texture2D(image,uv-(off1/resolution))*0.3162162162;
color+=texture2D(image,uv+(off2/resolution))*0.0702702703;
color+=texture2D(image,uv-(off2/resolution))*0.0702702703;
return color;
}
vec4 blur13(sampler2D image,vec2 uv,float resolution,vec2 direction) {
vec4 color=vec4(0.0);
vec2 off1=vec2(1.411764705882353)*direction;
vec2 off2=vec2(3.2941176470588234)*direction;
vec2 off3=vec2(5.176470588235294)*direction;
color+=texture2D(image,uv)*0.1964825501511404;
color+=texture2D(image,uv+(off1/resolution))*0.2969069646728344;
color+=texture2D(image,uv-(off1/resolution))*0.2969069646728344;
color+=texture2D(image,uv+(off2/resolution))*0.09447039785044732;
color+=texture2D(image,uv-(off2/resolution))*0.09447039785044732;
color+=texture2D(image,uv+(off3/resolution))*0.010381362401148057;
color+=texture2D(image,uv-(off3/resolution))*0.010381362401148057;
return color;
}
vec4 blur13Bilateral(sampler2D image,vec2 uv,float resolution,vec2 direction) {
vec4 color=vec4(0.0);
vec2 off1=vec2(1.411764705882353)*direction;
vec2 off2=vec2(3.2941176470588234)*direction;
vec2 off3=vec2(5.176470588235294)*direction;
float compareDepth=abs(texture2D(depthSampler,uv).r);
float sampleDepth;
float weight;
float weightSum=30.0;
color+=texture2D(image,uv)*30.0;
sampleDepth=abs(texture2D(depthSampler,uv+(off1/resolution)).r);
weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);
weightSum+=weight;
color+=texture2D(image,uv+(off1/resolution))*weight;
sampleDepth=abs(texture2D(depthSampler,uv-(off1/resolution)).r);
weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);
weightSum+=weight;
color+=texture2D(image,uv-(off1/resolution))*weight;
sampleDepth=abs(texture2D(depthSampler,uv+(off2/resolution)).r);
weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);
weightSum+=weight;
color+=texture2D(image,uv+(off2/resolution))*weight;
sampleDepth=abs(texture2D(depthSampler,uv-(off2/resolution)).r);
weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);
weightSum+=weight;
color+=texture2D(image,uv-(off2/resolution))*weight;
sampleDepth=abs(texture2D(depthSampler,uv+(off3/resolution)).r);
weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);
weightSum+=weight;
color+=texture2D(image,uv+(off3/resolution))*weight;
sampleDepth=abs(texture2D(depthSampler,uv-(off3/resolution)).r);
weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);
weightSum+=weight;
color+=texture2D(image,uv-(off3/resolution))*weight;
return color/weightSum;
}
void main()
{
#if EXPENSIVE
float compareDepth=abs(texture2D(depthSampler,vUV).r);
float texelsize=1.0/outSize;
float result=0.0;
float weightSum=0.0;
for (int i=0; i<SAMPLES; ++i)
{
#ifdef BILATERAL_BLUR_H
vec2 direction=vec2(1.0,0.0);
vec2 sampleOffset=vec2(texelsize*samplerOffsets[i],0.0);
#else
vec2 direction=vec2(0.0,1.0);
vec2 sampleOffset=vec2(0.0,texelsize*samplerOffsets[i]);
#endif
vec2 samplePos=vUV+sampleOffset;
float sampleDepth=abs(texture2D(depthSampler,samplePos).r);
float weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30000.0);
result+=texture2D(textureSampler,samplePos).r*weight;
weightSum+=weight;
}
result/=weightSum;
gl_FragColor.rgb=vec3(result);
gl_FragColor.a=1.0;
#else
vec4 color;
#ifdef BILATERAL_BLUR_H
vec2 direction=vec2(1.0,0.0);
color=blur13Bilateral(textureSampler,vUV,outSize,direction);
#else
vec2 direction=vec2(0.0,1.0);
color=blur13Bilateral(textureSampler,vUV,outSize,direction);
#endif
gl_FragColor.rgb=vec3(color.r);
gl_FragColor.a=1.0;
#endif
}
#endif
`;d.a.ShadersStore[m]=A;var O={name:m,shader:A},R=o(601),b=function(D){Object(l.d)(L,D);function L(U,F,V,M,x){x===void 0&&(x=!1);var _=D.call(this,F.getEngine(),U)||this;if(_.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",_.SSAORenderEffect="SSAORenderEffect",_.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",_.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",_.SSAOCombineRenderEffect="SSAOCombineRenderEffect",_.totalStrength=1,_.maxZ=100,_.minZAspect=.2,_._samples=8,_._textureSamples=1,_._forceGeometryBuffer=!1,_._expensiveBlur=!0,_.radius=2,_.base=0,_._bits=new Uint32Array(1),_._scene=F,_._ratio=V,_._forceGeometryBuffer=x,!_.isSupported)return s.a.Error("The current engine does not support SSAO 2."),_;var w=_._ratio.ssaoRatio||V,G=_._ratio.blurRatio||V;return _._forceGeometryBuffer?F.enableGeometryBufferRenderer():_._prePassRenderer=F.enablePrePassRenderer(),_._createRandomTexture(),_._originalColorPostProcess=new n.b("SSAOOriginalSceneColor",1,null,E.a.BILINEAR_SAMPLINGMODE,F.getEngine(),!1),_._originalColorPostProcess.samples=_.textureSamples,_._createSSAOPostProcess(1),_._createBlurPostProcess(w,G),_._createSSAOCombinePostProcess(G),_.addEffect(new e.a(F.getEngine(),_.SSAOOriginalSceneColorEffect,function(){return _._originalColorPostProcess},!0)),_.addEffect(new e.a(F.getEngine(),_.SSAORenderEffect,function(){return _._ssaoPostProcess},!0)),_.addEffect(new e.a(F.getEngine(),_.SSAOBlurHRenderEffect,function(){return _._blurHPostProcess},!0)),_.addEffect(new e.a(F.getEngine(),_.SSAOBlurVRenderEffect,function(){return _._blurVPostProcess},!0)),_.addEffect(new e.a(F.getEngine(),_.SSAOCombineRenderEffect,function(){return _._ssaoCombinePostProcess},!0)),F.postProcessRenderPipelineManager.addPipeline(_),M&&F.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(U,M),_}return Object.defineProperty(L.prototype,"samples",{get:function(){return this._samples},set:function(U){this._samples=U,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(U){this._textureSamples=U,this._prePassRenderer?this._prePassRenderer.samples=U:this._originalColorPostProcess.samples=U},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(U){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=U},enumerable:!1,configurable:!0}),Object.defineProperty(L,"IsSupported",{get:function(){var U=a.a.LastCreatedEngine;return U?U._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),L.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},L.prototype.dispose=function(U){U===void 0&&(U=!1);for(var F=0;F<this._scene.cameras.length;F++){var V=this._scene.cameras[F];this._originalColorPostProcess.dispose(V),this._ssaoPostProcess.dispose(V),this._blurHPostProcess.dispose(V),this._blurVPostProcess.dispose(V),this._ssaoCombinePostProcess.dispose(V)}this._randomTexture.dispose(),U&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),D.prototype.dispose.call(this)},L.prototype._createBlurPostProcess=function(U,F){var V=this;this._samplerOffsets=[];for(var M=this.expensiveBlur,x=-8;x<8;x++)this._samplerOffsets.push(x*2+.5);this._blurHPostProcess=new i.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],U,null,E.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(M?"1":"0")+`
`),this._blurHPostProcess.onApply=function(_){!V._scene.activeCamera||(_.setFloat("outSize",V._ssaoCombinePostProcess.width>0?V._ssaoCombinePostProcess.width:V._originalColorPostProcess.width),_.setFloat("near",V._scene.activeCamera.minZ),_.setFloat("far",V._scene.activeCamera.maxZ),_.setFloat("radius",V.radius),V._forceGeometryBuffer?_.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):_.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),_.setArray("samplerOffsets",V._samplerOffsets))},this._blurVPostProcess=new i.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],F,null,E.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(M?"1":"0")+`
`),this._blurVPostProcess.onApply=function(_){!V._scene.activeCamera||(_.setFloat("outSize",V._ssaoCombinePostProcess.height>0?V._ssaoCombinePostProcess.height:V._originalColorPostProcess.height),_.setFloat("near",V._scene.activeCamera.minZ),_.setFloat("far",V._scene.activeCamera.maxZ),_.setFloat("radius",V.radius),V._forceGeometryBuffer?_.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):_.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),_.setArray("samplerOffsets",V._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},L.prototype._rebuild=function(){D.prototype._rebuild.call(this)},L.prototype._radicalInverse_VdC=function(U){return this._bits[0]=U,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},L.prototype._hammersley=function(U,F){return[U/F,this._radicalInverse_VdC(U)]},L.prototype._hemisphereSample_uniform=function(U,F){var V=F*2*Math.PI,M=1-(U*.85+.15),x=Math.sqrt(1-M*M);return new v.e(Math.cos(V)*x,Math.sin(V)*x,M)},L.prototype._generateHemisphere=function(){for(var U=this.samples,F=[],V,M=0;M<U;){if(U<16)V=this._hemisphereSample_uniform(Math.random(),Math.random());else{var x=this._hammersley(M,U);V=this._hemisphereSample_uniform(x[0],x[1])}F.push(V.x,V.y,V.z),M++}return F},L.prototype._getDefinesForSSAO=function(){var U="#define SAMPLES "+this.samples+`
#define SSAO`;return U},L.prototype._createSSAOPostProcess=function(U){var F=this;this._sampleSphere=this._generateHemisphere();var V=this._getDefinesForSSAO(),M=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new i.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],M,U,null,E.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,V),this._ssaoPostProcess.onApply=function(x){var _,w,G,y;if(!!F._scene.activeCamera){if(x.setArray3("sampleSphere",F._sampleSphere),x.setFloat("randTextureTiles",32),x.setFloat("samplesFactor",1/F.samples),x.setFloat("totalStrength",F.totalStrength),x.setFloat2("texelSize",1/F._ssaoPostProcess.width,1/F._ssaoPostProcess.height),x.setFloat("radius",F.radius),x.setFloat("maxZ",F.maxZ),x.setFloat("minZAspect",F.minZAspect),x.setFloat("base",F.base),x.setFloat("near",F._scene.activeCamera.minZ),x.setFloat("far",F._scene.activeCamera.maxZ),F._scene.activeCamera.mode===c.a.PERSPECTIVE_CAMERA)x.setMatrix3x3("depthProjection",L.PERSPECTIVE_DEPTH_PROJECTION),x.setFloat("xViewport",Math.tan(F._scene.activeCamera.fov/2)*F._scene.getEngine().getAspectRatio(F._scene.activeCamera,!0)),x.setFloat("yViewport",Math.tan(F._scene.activeCamera.fov/2));else{var Y=F._scene.getEngine().getRenderWidth()/2,Z=F._scene.getEngine().getRenderHeight()/2,ce=(_=F._scene.activeCamera.orthoLeft)!==null&&_!==void 0?_:-Y,W=(w=F._scene.activeCamera.orthoRight)!==null&&w!==void 0?w:Y,le=(G=F._scene.activeCamera.orthoBottom)!==null&&G!==void 0?G:-Z,ne=(y=F._scene.activeCamera.orthoTop)!==null&&y!==void 0?y:Z;x.setMatrix3x3("depthProjection",L.ORTHO_DEPTH_PROJECTION),x.setFloat("xViewport",(W-ce)*.5),x.setFloat("yViewport",(ne-le)*.5)}x.setMatrix("projection",F._scene.getProjectionMatrix()),F._forceGeometryBuffer?(x.setTexture("depthSampler",F._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),x.setTexture("normalSampler",F._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(x.setTexture("depthSampler",F._prePassRenderer.getRenderTarget().textures[F._prePassRenderer.getIndex(5)]),x.setTexture("normalSampler",F._prePassRenderer.getRenderTarget().textures[F._prePassRenderer.getIndex(6)])),x.setTexture("randomSampler",F._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},L.prototype._createSSAOCombinePostProcess=function(U){var F=this;this._ssaoCombinePostProcess=new i.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],U,null,E.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(V){var M=F._scene.activeCamera.viewport;V.setVector4("viewport",v.c.Vector4[0].copyFromFloats(M.x,M.y,M.width,M.height)),V.setTextureFromPostProcessOutput("originalColor",F._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new f)},L.prototype._createRandomTexture=function(){var U=128;this._randomTexture=new h.a("SSAORandomTexture",U,this._scene,!1,E.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=E.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=E.a.WRAP_ADDRESSMODE;for(var F=this._randomTexture.getContext(),V=function(w,G){return Math.random()*(G-w)+w},M=v.e.Zero(),x=0;x<U;x++)for(var _=0;_<U;_++)M.x=V(0,1),M.y=V(0,1),M.z=0,M.normalize(),M.scaleInPlace(255),M.x=Math.floor(M.x),M.y=Math.floor(M.y),F.fillStyle="rgb("+M.x+", "+M.y+", "+M.z+")",F.fillRect(x,_,1,1);this._randomTexture.update(!1)},L.prototype.serialize=function(){var U=C.a.Serialize(this);return U.customType="SSAO2RenderingPipeline",U},L.Parse=function(U,F,V){return C.a.Parse(function(){return new L(U._name,F,U._ratio)},U,F,V)},L.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],L.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(l.c)([Object(C.c)()],L.prototype,"totalStrength",void 0),Object(l.c)([Object(C.c)()],L.prototype,"maxZ",void 0),Object(l.c)([Object(C.c)()],L.prototype,"minZAspect",void 0),Object(l.c)([Object(C.c)("samples")],L.prototype,"_samples",void 0),Object(l.c)([Object(C.c)("textureSamples")],L.prototype,"_textureSamples",void 0),Object(l.c)([Object(C.c)()],L.prototype,"_ratio",void 0),Object(l.c)([Object(C.c)("expensiveBlur")],L.prototype,"_expensiveBlur",void 0),Object(l.c)([Object(C.c)()],L.prototype,"radius",void 0),Object(l.c)([Object(C.c)()],L.prototype,"base",void 0),L}(t.a);r.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=b},598:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(434),s=o(538),C=o(518),v=function(e){Object(l.d)(n,e);function n(r,a,f,p,d,m){var A=e.call(this,r,f,p,d,m)||this;return A._beforeCompositionPostProcesses=[],A._internalTextureDirty=!1,A.enabled=!1,A.renderTargetTexture=null,A.renderTargetTexture=a,A}return n.prototype._createCompositionEffect=function(){this.imageProcessingPostProcess=new C.a("prePassComposition",1,null,void 0,this._engine),this.imageProcessingPostProcess._updateParameters()},n.prototype._checkSize=function(){var r=this._engine.getRenderWidth(!0),a=this._engine.getRenderHeight(!0),f=this.getRenderWidth(),p=this.getRenderHeight();(f!==r||p!==a)&&(this.resize({width:r,height:a}),this._internalTextureDirty=!0)},n.prototype.updateCount=function(r,a){e.prototype.updateCount.call(this,r,a),this._internalTextureDirty=!0},n.prototype._resetPostProcessChain=function(){this._beforeCompositionPostProcesses=[]},n.prototype.dispose=function(){var r=this._scene;if(e.prototype.dispose.call(this),r&&r.prePassRenderer){var a=r.prePassRenderer.renderTargets.indexOf(this);a!==-1&&r.prePassRenderer.renderTargets.splice(a,1)}this.imageProcessingPostProcess&&this.imageProcessingPostProcess.dispose()},n}(s.a),c=o(476),E=o(441),h=o(459),i=o(502),t=function(){function e(n){this.excludedSkinnedMesh=[],this.excludedMaterials=[],this.mrtCount=0,this._mrtFormats=[],this._mrtLayout=[],this._textureIndices=[],this._isDirty=!0,this._effectConfigurations=[],this.doNotUseGeometryRendererFallback=!1,this.renderTargets=[],this._clearColor=new E.b(0,0,0,0),this._enabled=!1,this._needsCompositionForThisPass=!1,this.disableGammaTransform=!1,this._scene=n,this._engine=n.getEngine(),e._SceneComponentInitialization(this._scene),this.defaultRT=this._createRenderTarget("sceneprePassRT",null),this._setRenderTarget(null)}return e.prototype.getIndex=function(n){return this._textureIndices[n]},Object.defineProperty(e.prototype,"samples",{get:function(){return this.defaultRT.samples},set:function(n){this.defaultRT.samples=n},enumerable:!1,configurable:!0}),e.prototype.getRenderTarget=function(){return this._currentTarget},e.prototype._setRenderTarget=function(n){n?this._currentTarget=n:this._currentTarget=this.defaultRT},Object.defineProperty(e.prototype,"currentRTisSceneRT",{get:function(){return this._currentTarget===this.defaultRT},enumerable:!1,configurable:!0}),e.prototype._refreshGeometryBufferRendererLink=function(){if(this.doNotUseGeometryRendererFallback)this._geometryBuffer&&this._geometryBuffer._unlinkPrePassRenderer(),this._geometryBuffer=null,this._scene.disableGeometryBufferRenderer();else{if(this._geometryBuffer=this._scene.enableGeometryBufferRenderer(),!this._geometryBuffer){this.doNotUseGeometryRendererFallback=!0;return}this._geometryBuffer._linkPrePassRenderer(this)}},Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},enumerable:!1,configurable:!0}),e.prototype._createRenderTarget=function(n,r){var a=new v(n,r,{width:this._engine.getRenderWidth(),height:this._engine.getRenderHeight()},0,this._scene,{generateMipMaps:!1,generateStencilBuffer:this._engine.isStencilEnable,defaultType:0,types:[],drawOnlyOnFirstAttachmentByDefault:!0});return this.renderTargets.push(a),a},Object.defineProperty(e.prototype,"isSupported",{get:function(){return this._scene.getEngine().getCaps().drawBuffersExtension},enumerable:!1,configurable:!0}),e.prototype.bindAttachmentsForEffect=function(n,r){if(this.enabled&&this._currentTarget.enabled){if(n._multiTarget)this._engine.bindAttachments(this._multiRenderAttachments);else if(this._engine.bindAttachments(this._defaultAttachments),this._geometryBuffer&&this.currentRTisSceneRT){var a=r.getMaterial();a&&!a.isPrePassCapable&&this.excludedMaterials.indexOf(a)===-1&&this._geometryBuffer.renderList.push(r.getRenderingMesh())}}},e.prototype._reinitializeAttachments=function(){for(var n=[],r=[!1],a=[!0],f=0;f<this.mrtCount;f++)n.push(!0),f>0&&(r.push(!0),a.push(!1));this._multiRenderAttachments=this._engine.buildTextureLayout(n),this._clearAttachments=this._engine.buildTextureLayout(r),this._defaultAttachments=this._engine.buildTextureLayout(a)},e.prototype._resetLayout=function(){for(var n=0;n<e._textureFormats.length;n++)this._textureIndices[e._textureFormats[n].type]=-1;this._textureIndices[4]=0,this._mrtLayout=[4],this._mrtFormats=[2],this.mrtCount=1},e.prototype._updateGeometryBufferLayout=function(){if(this._refreshGeometryBufferRendererLink(),this._geometryBuffer){this._geometryBuffer._resetLayout();for(var n=[],r=0;r<this._mrtLayout.length;r++)n.push(!1);this._geometryBuffer._linkInternalTexture(this.defaultRT.getInternalTexture());for(var a=[{prePassConstant:5,geometryBufferConstant:i.a.DEPTH_TEXTURE_TYPE},{prePassConstant:6,geometryBufferConstant:i.a.NORMAL_TEXTURE_TYPE},{prePassConstant:1,geometryBufferConstant:i.a.POSITION_TEXTURE_TYPE},{prePassConstant:3,geometryBufferConstant:i.a.REFLECTIVITY_TEXTURE_TYPE},{prePassConstant:2,geometryBufferConstant:i.a.VELOCITY_TEXTURE_TYPE}],r=0;r<a.length;r++){var f=this._mrtLayout.indexOf(a[r].prePassConstant);f!==-1&&(this._geometryBuffer._forceTextureType(a[r].geometryBufferConstant,f),n[f]=!0)}this._geometryBuffer._setAttachments(this._engine.buildTextureLayout(n))}},e.prototype.restoreAttachments=function(){this.enabled&&this._currentTarget.enabled&&this._defaultAttachments&&this._engine.bindAttachments(this._defaultAttachments)},e.prototype._beforeDraw=function(n,r,a){this._isDirty&&this._update(),!(!this._enabled||!this._currentTarget.enabled)&&(this._geometryBuffer&&(this._geometryBuffer.renderList=[]),this._setupOutputForThisPass(this._currentTarget,n))},e.prototype._prepareFrame=function(n,r,a){n.renderTargetTexture?n.renderTargetTexture._prepareFrame(this._scene,r,a,n.renderTargetTexture.useCameraPostProcesses):this._postProcessesSourceForThisPass.length?this._scene.postProcessManager._prepareFrame():this._engine.restoreDefaultFramebuffer()},e.prototype._renderPostProcesses=function(n,r){var a=this._postProcessesSourceForThisPass[0],f=a?a.inputTexture:n.renderTargetTexture?n.renderTargetTexture.getInternalTexture():null,p=this._currentTarget._beforeCompositionPostProcesses;this._needsCompositionForThisPass&&(p=p.concat([this._currentTarget.imageProcessingPostProcess])),p.length&&(this._scene.postProcessManager._prepareFrame(this._currentTarget.getInternalTexture(),p),this._scene.postProcessManager.directRender(p,f,!1,r))},e.prototype._afterDraw=function(n,r){this._enabled&&this._currentTarget.enabled&&(this._prepareFrame(this._currentTarget,n,r),this._renderPostProcesses(this._currentTarget,n))},e.prototype._clear=function(){this._enabled&&this._currentTarget.enabled&&(this._bindFrameBuffer(this._currentTarget),this._engine.bindAttachments(this._clearAttachments),this._engine.clear(this._clearColor,!0,!1,!1),this._engine.bindAttachments(this._defaultAttachments))},e.prototype._bindFrameBuffer=function(n){if(this._enabled&&this._currentTarget.enabled){this._currentTarget._checkSize();var r=this._currentTarget.getInternalTexture();r&&this._engine.bindFramebuffer(r)}},e.prototype._setEnabled=function(n){this._enabled=n},e.prototype._setRenderTargetEnabled=function(n,r){n.enabled=r},e.prototype.addEffectConfiguration=function(n){for(var r=0;r<this._effectConfigurations.length;r++)if(this._effectConfigurations[r].name===n.name)return this._effectConfigurations[r];return this._effectConfigurations.push(n),n},e.prototype._enable=function(){for(var n=this.mrtCount,r=0;r<this._effectConfigurations.length;r++)this._effectConfigurations[r].enabled&&this._enableTextures(this._effectConfigurations[r].texturesRequired);for(var r=0;r<this.renderTargets.length;r++){this.mrtCount!==n&&this.renderTargets[r].updateCount(this.mrtCount,{types:this._mrtFormats}),this.renderTargets[r]._resetPostProcessChain();for(var a=0;a<this._effectConfigurations.length;a++)this._effectConfigurations[a].enabled&&(!this._effectConfigurations[a].postProcess&&this._effectConfigurations[a].createPostProcess&&this._effectConfigurations[a].createPostProcess(),this._effectConfigurations[a].postProcess&&this.renderTargets[r]._beforeCompositionPostProcesses.push(this._effectConfigurations[a].postProcess))}this._reinitializeAttachments(),this._setEnabled(!0),this._updateGeometryBufferLayout()},e.prototype._disable=function(){this._setEnabled(!1);for(var n=0;n<this.renderTargets.length;n++)this._setRenderTargetEnabled(this.renderTargets[n],!1);this._resetLayout();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].enabled=!1},e.prototype._getPostProcessesSource=function(n,r){if(r)return r._postProcesses;if(n.renderTargetTexture)if(n.renderTargetTexture.useCameraPostProcesses){var a=n.renderTargetTexture.activeCamera?n.renderTargetTexture.activeCamera:this._scene.activeCamera;return a?a._postProcesses:[]}else return n.renderTargetTexture.postProcesses?n.renderTargetTexture.postProcesses:[];else return this._scene.activeCamera?this._scene.activeCamera._postProcesses:[]},e.prototype._setupOutputForThisPass=function(n,r){var a=r&&this._scene.activeCameras&&!!this._scene.activeCameras.length&&this._scene.activeCameras.indexOf(r)!==0;this._postProcessesSourceForThisPass=this._getPostProcessesSource(n,r),this._postProcessesSourceForThisPass=this._postProcessesSourceForThisPass.filter(function(A){return A!=null}),this._scene.autoClear=!0;var f=this._hasImageProcessing(this._postProcessesSourceForThisPass);this._needsCompositionForThisPass=!f&&!this.disableGammaTransform&&this._needsImageProcessing()&&!a;var p=this._getFirstPostProcess(this._postProcessesSourceForThisPass),d=n._beforeCompositionPostProcesses&&n._beforeCompositionPostProcesses[0],m=null;this._scene.imageProcessingConfiguration.applyByPostProcess=this._needsCompositionForThisPass||f,this._needsCompositionForThisPass&&!n.imageProcessingPostProcess&&n._createCompositionEffect(),d?m=d:this._needsCompositionForThisPass?m=n.imageProcessingPostProcess:p&&(m=p),this._bindFrameBuffer(n),this._linkInternalTexture(n,m)},e.prototype._linkInternalTexture=function(n,r){r&&(r.autoClear=!1,r.inputTexture=n.getInternalTexture()),n._outputPostProcess!==r&&(n._outputPostProcess&&n._outputPostProcess.restoreDefaultInputTexture(),n._outputPostProcess=r),n._internalTextureDirty&&(this._updateGeometryBufferLayout(),n._internalTextureDirty=!1)},e.prototype._needsImageProcessing=function(){for(var n=0;n<this._effectConfigurations.length;n++)if(this._effectConfigurations[n].enabled&&this._effectConfigurations[n].needsImageProcessing)return!0;return!1},e.prototype._hasImageProcessing=function(n){var r,a=!1;if(n){for(var f=0;f<n.length;f++)if(((r=n[f])===null||r===void 0?void 0:r.getClassName())==="ImageProcessingPostProcess"){a=!0;break}}return a},e.prototype._getFirstPostProcess=function(n){for(var r=0;r<n.length;r++)if(n[r]!==null)return n[r];return null},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype._enableTextures=function(n){for(var r=0;r<n.length;r++){var a=n[r];this._textureIndices[a]===-1&&(this._textureIndices[a]=this._mrtLayout.length,this._mrtLayout.push(a),this._mrtFormats.push(e._textureFormats[a].format),this.mrtCount++)}},e.prototype._update=function(){this._disable();var n=!1;this._scene.imageProcessingConfiguration.applyByPostProcess=!1;for(var r=0;r<this._scene.materials.length;r++)this._scene.materials[r].setPrePassRenderer(this)&&(n=!0);n&&this._setRenderTargetEnabled(this.defaultRT,!0);for(var a,r=0;r<this.renderTargets.length;r++){if(this.renderTargets[r].renderTargetTexture)a=this._getPostProcessesSource(this.renderTargets[r]);else{var f=this._scene.activeCamera;if(!f)continue;a=f._postProcesses}if(!!a&&(a=a.filter(function(m){return m!=null}),a)){for(var p=0;p<a.length;p++)a[p].setPrePassRenderer(this)&&(this._setRenderTargetEnabled(this.renderTargets[r],!0),n=!0);this._hasImageProcessing(a)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!0)}}this._markAllMaterialsAsPrePassDirty(),this._isDirty=!1,n&&this._enable()},e.prototype._markAllMaterialsAsPrePassDirty=function(){for(var n=this._scene.materials,r=0;r<n.length;r++)n[r].markAsDirty(h.a.PrePassDirtyFlag)},e.prototype.dispose=function(){for(var n=this.renderTargets.length-1;n>=0;n--)this.renderTargets[n].dispose();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].dispose&&this._effectConfigurations[n].dispose()},e._SceneComponentInitialization=function(n){throw c.a.WarnImport("PrePassRendererSceneComponent")},e._textureFormats=[{type:0,format:2},{type:1,format:2},{type:2,format:2},{type:3,format:0},{type:4,format:2},{type:5,format:2},{type:6,format:2},{type:7,format:0}],e}()},600:function(J,j,o){"use strict";var l=o(435),s="chromaticAberrationPixelShader",C=`
uniform sampler2D textureSampler;

uniform float chromatic_aberration;
uniform float radialIntensity;
uniform vec2 direction;
uniform vec2 centerPosition;
uniform float screen_width;
uniform float screen_height;

varying vec2 vUV;
void main(void)
{
vec2 centered_screen_pos=vec2(vUV.x-centerPosition.x,vUV.y-centerPosition.y);
vec2 directionOfEffect=direction;
if(directionOfEffect.x == 0. && directionOfEffect.y == 0.){
directionOfEffect=normalize(centered_screen_pos);
}
float radius2=centered_screen_pos.x*centered_screen_pos.x
+centered_screen_pos.y*centered_screen_pos.y;
float radius=sqrt(radius2);
vec4 original=texture2D(textureSampler,vUV);

vec3 ref_indices=vec3(-0.3,0.0,0.3);
float ref_shiftX=chromatic_aberration*pow(radius,radialIntensity)*directionOfEffect.x/screen_width;
float ref_shiftY=chromatic_aberration*pow(radius,radialIntensity)*directionOfEffect.y/screen_height;

vec2 ref_coords_r=vec2(vUV.x+ref_indices.r*ref_shiftX,vUV.y+ref_indices.r*ref_shiftY*0.5);
vec2 ref_coords_g=vec2(vUV.x+ref_indices.g*ref_shiftX,vUV.y+ref_indices.g*ref_shiftY*0.5);
vec2 ref_coords_b=vec2(vUV.x+ref_indices.b*ref_shiftX,vUV.y+ref_indices.b*ref_shiftY*0.5);
original.r=texture2D(textureSampler,ref_coords_r).r;
original.g=texture2D(textureSampler,ref_coords_g).g;
original.b=texture2D(textureSampler,ref_coords_b).b;
original.a=clamp(texture2D(textureSampler,ref_coords_r).a+texture2D(textureSampler,ref_coords_g).a+texture2D(textureSampler,ref_coords_b).a,0.,1.);
gl_FragColor=original;
}`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},601:function(J,j,o){"use strict";var l=o(435),s="ssaoCombinePixelShader",C=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},602:function(J,j,o){"use strict";o.d(j,"a",function(){return O}),o.d(j,"b",function(){return w}),o.d(j,"g",function(){return G.a}),o.d(j,"h",function(){return ee}),o.d(j,"i",function(){return oe}),o.d(j,"c",function(){return a.a}),o.d(j,"d",function(){return r.a}),o.d(j,"e",function(){return _e.a}),o.d(j,"f",function(){return A.a});var l=o(434),s=o(439),C=o(438),v=o(440),c=o(442),E=o(577),h=o(587),i=o(518),t=o(579),e=o(586),n=o(517),r=o(481),a=o(466),f=o(570),p=o(578),d=o(437),m=o(448),A=o(482),O=function(ue){Object(l.d)(B,ue);function B(g,N,I,k,K){g===void 0&&(g=""),N===void 0&&(N=!0),I===void 0&&(I=m.a.LastCreatedScene),K===void 0&&(K=!0);var P=ue.call(this,I.getEngine(),g)||this;P._camerasToBeAttached=[],P.SharpenPostProcessId="SharpenPostProcessEffect",P.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",P.FxaaPostProcessId="FxaaPostProcessEffect",P.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",P.GrainPostProcessId="GrainPostProcessEffect",P._glowLayer=null,P.animations=[],P._imageProcessingConfigurationObserver=null,P._sharpenEnabled=!1,P._bloomEnabled=!1,P._depthOfFieldEnabled=!1,P._depthOfFieldBlurLevel=f.b.Low,P._fxaaEnabled=!1,P._imageProcessingEnabled=!0,P._bloomScale=.5,P._chromaticAberrationEnabled=!1,P._grainEnabled=!1,P._buildAllowed=!0,P.onBuildObservable=new C.c,P._resizeObserver=null,P._hardwareScaleLevel=1,P._bloomKernel=64,P._bloomWeight=.15,P._bloomThreshold=.9,P._samples=1,P._hasCleared=!1,P._prevPostProcess=null,P._prevPrevPostProcess=null,P._depthOfFieldSceneObserver=null,P._cameras=k||I.cameras,P._cameras=P._cameras.slice(),P._camerasToBeAttached=P._cameras.slice(),P._buildAllowed=K,P._scene=I;var q=P._scene.getEngine().getCaps();P._hdr=N&&(q.textureHalfFloatRender||q.textureFloatRender),P._hdr?q.textureHalfFloatRender?P._defaultPipelineTextureType=2:q.textureFloatRender&&(P._defaultPipelineTextureType=1):P._defaultPipelineTextureType=0,I.postProcessRenderPipelineManager.addPipeline(P);var pe=P._scene.getEngine();return P.sharpen=new h.a("sharpen",1,null,c.a.BILINEAR_SAMPLINGMODE,pe,!1,P._defaultPipelineTextureType,!0),P._sharpenEffect=new a.a(pe,P.SharpenPostProcessId,function(){return P.sharpen},!0),P.depthOfField=new f.a(P._scene,null,P._depthOfFieldBlurLevel,P._defaultPipelineTextureType,!0),P.bloom=new p.a(P._scene,P._bloomScale,P._bloomWeight,P.bloomKernel,P._defaultPipelineTextureType,!0),P.chromaticAberration=new t.a("ChromaticAberration",pe.getRenderWidth(),pe.getRenderHeight(),1,null,c.a.BILINEAR_SAMPLINGMODE,pe,!1,P._defaultPipelineTextureType,!0),P._chromaticAberrationEffect=new a.a(pe,P.ChromaticAberrationPostProcessId,function(){return P.chromaticAberration},!0),P.grain=new e.a("Grain",1,null,c.a.BILINEAR_SAMPLINGMODE,pe,!1,P._defaultPipelineTextureType,!0),P._grainEffect=new a.a(pe,P.GrainPostProcessId,function(){return P.grain},!0),P._resizeObserver=pe.onResizeObservable.add(function(){P._hardwareScaleLevel=pe.getHardwareScalingLevel(),P.bloomKernel=P.bloomKernel}),P._imageProcessingConfigurationObserver=P._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){P.bloom._downscale._exposure=P._scene.imageProcessingConfiguration.exposure,P.imageProcessingEnabled!==P._scene.imageProcessingConfiguration.isEnabled&&(P._imageProcessingEnabled=P._scene.imageProcessingConfiguration.isEnabled,P._buildPipeline())}),P._buildPipeline(),P}return Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(g){this._sharpenEnabled!==g&&(this._sharpenEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(g){this._bloomKernel=g,this.bloom.kernel=g/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(g){this._bloomWeight!==g&&(this.bloom.weight=g,this._bloomWeight=g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(g){this._bloomThreshold!==g&&(this.bloom.threshold=g,this._bloomThreshold=g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(g){this._bloomScale!==g&&(this._bloomScale=g,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(g){this._bloomEnabled!==g&&(this._bloomEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype._rebuildBloom=function(){var g=this.bloom;this.bloom=new p.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=g.threshold;for(var N=0;N<this._cameras.length;N++)g.disposeEffects(this._cameras[N])},Object.defineProperty(B.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(g){this._depthOfFieldEnabled!==g&&(this._depthOfFieldEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(g){if(this._depthOfFieldBlurLevel!==g){this._depthOfFieldBlurLevel=g;var N=this.depthOfField;this.depthOfField=new f.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=N.focalLength,this.depthOfField.focusDistance=N.focusDistance,this.depthOfField.fStop=N.fStop,this.depthOfField.lensSize=N.lensSize;for(var I=0;I<this._cameras.length;I++)N.disposeEffects(this._cameras[I]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(g){this._fxaaEnabled!==g&&(this._fxaaEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"samples",{get:function(){return this._samples},set:function(g){this._samples!==g&&(this._samples=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(g){this._imageProcessingEnabled!==g&&(this._scene.imageProcessingConfiguration.isEnabled=g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(g){g&&!this._glowLayer?this._glowLayer=new E.a("",this._scene):!g&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(g){this._chromaticAberrationEnabled!==g&&(this._chromaticAberrationEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(g){this._grainEnabled!==g&&(this._grainEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype.getClassName=function(){return"DefaultRenderingPipeline"},B.prototype.prepare=function(){var g=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=g},B.prototype._setAutoClearAndTextureSharing=function(g,N){N===void 0&&(N=!1),this._hasCleared?g.autoClear=!1:(g.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),N||(this._prevPrevPostProcess?g.shareOutputWith(this._prevPrevPostProcess):g.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=g)},B.prototype._buildPipeline=function(){var g=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var N=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var I=0,k=this._cameras;I<k.length;I++){var K=k[I],P=this._scene.enableDepthRenderer(K);P.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(q){g._cameras.indexOf(q.activeCamera)>-1&&(g.depthOfField.depthTexture=q.enableDepthRenderer(q.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var P=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=P.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new i.a("imageProcessing",1,null,c.a.BILINEAR_SAMPLINGMODE,N,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(N,this.ImageProcessingPostProcessId,function(){return g.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new n.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,N,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(N,this.FxaaPostProcessId,function(){return g.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},B.prototype._disposePostProcesses=function(g){g===void 0&&(g=!1);for(var N=0;N<this._cameras.length;N++){var I=this._cameras[N];this.imageProcessing&&this.imageProcessing.dispose(I),this.fxaa&&this.fxaa.dispose(I),g&&(this.sharpen&&this.sharpen.dispose(I),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(I)),this.bloom&&this.bloom.disposeEffects(I),this.chromaticAberration&&this.chromaticAberration.dispose(I),this.grain&&this.grain.dispose(I),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,g&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},B.prototype.addCamera=function(g){this._camerasToBeAttached.push(g),this._buildPipeline()},B.prototype.removeCamera=function(g){var N=this._camerasToBeAttached.indexOf(g);this._camerasToBeAttached.splice(N,1),this._buildPipeline()},B.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),ue.prototype.dispose.call(this)},B.prototype.serialize=function(){var g=s.a.Serialize(this);return g.customType="DefaultRenderingPipeline",g},B.Parse=function(g,N,I){return s.a.Parse(function(){return new B(g._name,g._name._hdr,N)},g,N,I)},Object(l.c)([Object(s.c)()],B.prototype,"sharpenEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"bloomKernel",null),Object(l.c)([Object(s.c)()],B.prototype,"_bloomWeight",void 0),Object(l.c)([Object(s.c)()],B.prototype,"_bloomThreshold",void 0),Object(l.c)([Object(s.c)()],B.prototype,"_hdr",void 0),Object(l.c)([Object(s.c)()],B.prototype,"bloomWeight",null),Object(l.c)([Object(s.c)()],B.prototype,"bloomThreshold",null),Object(l.c)([Object(s.c)()],B.prototype,"bloomScale",null),Object(l.c)([Object(s.c)()],B.prototype,"bloomEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"depthOfFieldEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"depthOfFieldBlurLevel",null),Object(l.c)([Object(s.c)()],B.prototype,"fxaaEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"samples",null),Object(l.c)([Object(s.c)()],B.prototype,"imageProcessingEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"glowLayerEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"chromaticAberrationEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"grainEnabled",null),B}(r.a);d.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=O;var R=o(479),b=o(444),D=o(600),L=o(435),U="lensHighlightsPixelShader",F=`
uniform sampler2D textureSampler;

uniform float gain;
uniform float threshold;
uniform float screen_width;
uniform float screen_height;

varying vec2 vUV;

vec4 highlightColor(vec4 color) {
vec4 highlight=color;
float luminance=dot(highlight.rgb,vec3(0.2125,0.7154,0.0721));
float lum_threshold;
if (threshold>1.0) { lum_threshold=0.94+0.01*threshold; }
else { lum_threshold=0.5+0.44*threshold; }
luminance=clamp((luminance-lum_threshold)*(1.0/(1.0-lum_threshold)),0.0,1.0);
highlight*=luminance*gain;
highlight.a=1.0;
return highlight;
}
void main(void)
{
vec4 original=texture2D(textureSampler,vUV);

if (gain == -1.0) {
gl_FragColor=vec4(0.0,0.0,0.0,1.0);
return;
}
float w=2.0/screen_width;
float h=2.0/screen_height;
float weight=1.0;

vec4 blurred=vec4(0.0,0.0,0.0,0.0);
#ifdef PENTAGON
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.84*w,0.43*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.48*w,-1.29*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.61*w,1.51*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.55*w,-0.74*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.71*w,-0.52*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.94*w,1.59*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.40*w,-1.87*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.62*w,1.16*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.09*w,0.25*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.46*w,-1.71*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.08*w,2.42*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.85*w,-1.89*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.89*w,0.16*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.29*w,1.88*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.40*w,-2.81*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.54*w,2.26*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.60*w,-0.61*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.31*w,-1.30*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.83*w,2.53*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.12*w,-2.48*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.60*w,1.11*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.82*w,0.99*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.50*w,-2.81*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.85*w,3.33*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.94*w,-1.92*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.27*w,-0.53*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.95*w,2.48*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.23*w,-3.04*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.17*w,2.05*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.97*w,-0.04*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.25*w,-2.00*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.31*w,3.08*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.94*w,-2.59*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.37*w,0.64*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-3.13*w,1.93*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.03*w,-3.65*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.60*w,3.17*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-3.14*w,-1.19*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.00*w,-1.19*h)));
#else
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.85*w,0.36*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.52*w,-1.14*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.46*w,1.42*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.46*w,-0.83*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.79*w,-0.42*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.11*w,1.62*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.29*w,-2.07*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.69*w,1.39*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.28*w,0.12*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.65*w,-1.69*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.08*w,2.44*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.63*w,-1.90*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.55*w,0.31*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.13*w,1.52*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.56*w,-2.61*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.38*w,2.34*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.64*w,-0.81*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.53*w,-1.21*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.06*w,2.63*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.00*w,-2.69*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.59*w,1.32*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.82*w,0.78*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.57*w,-2.50*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(0.54*w,2.93*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.39*w,-1.81*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.01*w,-0.28*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.04*w,2.25*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.02*w,-3.05*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.09*w,2.25*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-3.07*w,-0.25*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.44*w,-1.90*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-0.52*w,3.05*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-1.68*w,-2.61*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(3.01*w,0.79*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.76*w,1.46*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.05*w,-2.94*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(1.21*w,2.88*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(-2.84*w,-1.30*h)));
blurred+=highlightColor(texture2D(textureSampler,vUV+vec2(2.98*w,-0.96*h)));
#endif
blurred/=39.0;
gl_FragColor=blurred;

}`;L.a.ShadersStore[U]=F;var V={name:U,shader:F},M="depthOfFieldPixelShader",x=`




uniform sampler2D textureSampler;
uniform sampler2D highlightsSampler;
uniform sampler2D depthSampler;
uniform sampler2D grainSampler;

uniform float grain_amount;
uniform bool blur_noise;
uniform float screen_width;
uniform float screen_height;
uniform float distortion;
uniform bool dof_enabled;

uniform float screen_distance;
uniform float aperture;
uniform float darken;
uniform float edge_blur;
uniform bool highlights;

uniform float near;
uniform float far;

varying vec2 vUV;

#define PI 3.14159265
#define TWOPI 6.28318530
#define inverse_focal_length 0.1

vec2 centered_screen_pos;
vec2 distorted_coords;
float radius2;
float radius;

vec2 rand(vec2 co)
{
float noise1=(fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453));
float noise2=(fract(sin(dot(co,vec2(12.9898,78.233)*2.0))*43758.5453));
return clamp(vec2(noise1,noise2),0.0,1.0);
}

vec2 getDistortedCoords(vec2 coords) {
if (distortion == 0.0) { return coords; }
vec2 direction=1.0*normalize(centered_screen_pos);
vec2 dist_coords=vec2(0.5,0.5);
dist_coords.x=0.5+direction.x*radius2*1.0;
dist_coords.y=0.5+direction.y*radius2*1.0;
float dist_amount=clamp(distortion*0.23,0.0,1.0);
dist_coords=mix(coords,dist_coords,dist_amount);
return dist_coords;
}

float sampleScreen(inout vec4 color,const in vec2 offset,const in float weight) {

vec2 coords=distorted_coords;
float angle=rand(coords*100.0).x*TWOPI;
coords+=vec2(offset.x*cos(angle)-offset.y*sin(angle),offset.x*sin(angle)+offset.y*cos(angle));
color+=texture2D(textureSampler,coords)*weight;
return weight;
}

float getBlurLevel(float size) {
return min(3.0,ceil(size/1.0));
}

vec4 getBlurColor(float size) {
vec4 col=texture2D(textureSampler,distorted_coords);


float blur_level=getBlurLevel(size);
float w=(size/screen_width);
float h=(size/screen_height);
float total_weight=1.0;
vec2 sample_coords;
total_weight+=sampleScreen(col,vec2(-0.50*w,0.24*h),0.93);
total_weight+=sampleScreen(col,vec2(0.30*w,-0.75*h),0.90);
total_weight+=sampleScreen(col,vec2(0.36*w,0.96*h),0.87);
total_weight+=sampleScreen(col,vec2(-1.08*w,-0.55*h),0.85);
total_weight+=sampleScreen(col,vec2(1.33*w,-0.37*h),0.83);
total_weight+=sampleScreen(col,vec2(-0.82*w,1.31*h),0.80);
total_weight+=sampleScreen(col,vec2(-0.31*w,-1.67*h),0.78);
total_weight+=sampleScreen(col,vec2(1.47*w,1.11*h),0.76);
total_weight+=sampleScreen(col,vec2(-1.97*w,0.19*h),0.74);
total_weight+=sampleScreen(col,vec2(1.42*w,-1.57*h),0.72);
if (blur_level>1.0) {
total_weight+=sampleScreen(col,vec2(0.01*w,2.25*h),0.70);
total_weight+=sampleScreen(col,vec2(-1.62*w,-1.74*h),0.67);
total_weight+=sampleScreen(col,vec2(2.49*w,0.20*h),0.65);
total_weight+=sampleScreen(col,vec2(-2.07*w,1.61*h),0.63);
total_weight+=sampleScreen(col,vec2(0.46*w,-2.70*h),0.61);
total_weight+=sampleScreen(col,vec2(1.55*w,2.40*h),0.59);
total_weight+=sampleScreen(col,vec2(-2.88*w,-0.75*h),0.56);
total_weight+=sampleScreen(col,vec2(2.73*w,-1.44*h),0.54);
total_weight+=sampleScreen(col,vec2(-1.08*w,3.02*h),0.52);
total_weight+=sampleScreen(col,vec2(-1.28*w,-3.05*h),0.49);
}
if (blur_level>2.0) {
total_weight+=sampleScreen(col,vec2(3.11*w,1.43*h),0.46);
total_weight+=sampleScreen(col,vec2(-3.36*w,1.08*h),0.44);
total_weight+=sampleScreen(col,vec2(1.80*w,-3.16*h),0.41);
total_weight+=sampleScreen(col,vec2(0.83*w,3.65*h),0.38);
total_weight+=sampleScreen(col,vec2(-3.16*w,-2.19*h),0.34);
total_weight+=sampleScreen(col,vec2(3.92*w,-0.53*h),0.31);
total_weight+=sampleScreen(col,vec2(-2.59*w,3.12*h),0.26);
total_weight+=sampleScreen(col,vec2(-0.20*w,-4.15*h),0.22);
total_weight+=sampleScreen(col,vec2(3.02*w,3.00*h),0.15);
}
col/=total_weight;

if (darken>0.0) {
col.rgb*=clamp(0.3,1.0,1.05-size*0.5*darken);
}




return col;
}
void main(void)
{

centered_screen_pos=vec2(vUV.x-0.5,vUV.y-0.5);
radius2=centered_screen_pos.x*centered_screen_pos.x+centered_screen_pos.y*centered_screen_pos.y;
radius=sqrt(radius2);
distorted_coords=getDistortedCoords(vUV);
vec2 texels_coords=vec2(vUV.x*screen_width,vUV.y*screen_height);
float depth=texture2D(depthSampler,distorted_coords).r;
float distance=near+(far-near)*depth;
vec4 color=texture2D(textureSampler,vUV);


float coc=abs(aperture*(screen_distance*(inverse_focal_length-1.0/distance)-1.0));

if (dof_enabled == false || coc<0.07) { coc=0.0; }

float edge_blur_amount=0.0;
if (edge_blur>0.0) {
edge_blur_amount=clamp((radius*2.0-1.0+0.15*edge_blur)*1.5,0.0,1.0)*1.3;
}

float blur_amount=max(edge_blur_amount,coc);

if (blur_amount == 0.0) {
gl_FragColor=texture2D(textureSampler,distorted_coords);
}
else {

gl_FragColor=getBlurColor(blur_amount*1.7);

if (highlights) {
gl_FragColor.rgb+=clamp(coc,0.0,1.0)*texture2D(highlightsSampler,distorted_coords).rgb;
}
if (blur_noise) {

vec2 noise=rand(distorted_coords)*0.01*blur_amount;
vec2 blurred_coord=vec2(distorted_coords.x+noise.x,distorted_coords.y+noise.y);
gl_FragColor=0.04*texture2D(textureSampler,blurred_coord)+0.96*gl_FragColor;
}
}

if (grain_amount>0.0) {
vec4 grain_color=texture2D(grainSampler,texels_coords*0.003);
gl_FragColor.rgb+=(-0.5+grain_color.rgb)*0.30*grain_amount;
}
}
`;L.a.ShadersStore[M]=x;var _={name:M,shader:x},w=function(ue){Object(l.d)(B,ue);function B(g,N,I,k,K){k===void 0&&(k=1);var P=ue.call(this,I.getEngine(),g)||this;return P.LensChromaticAberrationEffect="LensChromaticAberrationEffect",P.HighlightsEnhancingEffect="HighlightsEnhancingEffect",P.LensDepthOfFieldEffect="LensDepthOfFieldEffect",P._pentagonBokehIsEnabled=!1,P._scene=I,P._depthTexture=I.enableDepthRenderer().getDepthMap(),N.grain_texture?P._grainTexture=N.grain_texture:P._createGrainTexture(),P._edgeBlur=N.edge_blur?N.edge_blur:0,P._grainAmount=N.grain_amount?N.grain_amount:0,P._chromaticAberration=N.chromatic_aberration?N.chromatic_aberration:0,P._distortion=N.distortion?N.distortion:0,P._highlightsGain=N.dof_gain!==void 0?N.dof_gain:-1,P._highlightsThreshold=N.dof_threshold?N.dof_threshold:1,P._dofDistance=N.dof_focus_distance!==void 0?N.dof_focus_distance:-1,P._dofAperture=N.dof_aperture?N.dof_aperture:1,P._dofDarken=N.dof_darken?N.dof_darken:0,P._dofPentagon=N.dof_pentagon!==void 0?N.dof_pentagon:!0,P._blurNoise=N.blur_noise!==void 0?N.blur_noise:!0,P._createChromaticAberrationPostProcess(k),P._createHighlightsPostProcess(k),P._createDepthOfFieldPostProcess(k/4),P.addEffect(new a.a(I.getEngine(),P.LensChromaticAberrationEffect,function(){return P._chromaticAberrationPostProcess},!0)),P.addEffect(new a.a(I.getEngine(),P.HighlightsEnhancingEffect,function(){return P._highlightsPostProcess},!0)),P.addEffect(new a.a(I.getEngine(),P.LensDepthOfFieldEffect,function(){return P._depthOfFieldPostProcess},!0)),P._highlightsGain===-1&&P._disableEffect(P.HighlightsEnhancingEffect,null),I.postProcessRenderPipelineManager.addPipeline(P),K&&I.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(g,K),P}return B.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(g){this.setEdgeBlur(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(g){this.setGrainAmount(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(g){this.setChromaticAberration(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(g){this.setAperture(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(g){this.setEdgeDistortion(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(g){this.setFocusDistance(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(g){this.setDarkenOutOfFocus(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(g){this._blurNoise=g},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(g){g?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(g){this.setHighlightsGain(g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(g){this.setHighlightsThreshold(g)},enumerable:!1,configurable:!0}),B.prototype.setEdgeBlur=function(g){this._edgeBlur=g},B.prototype.disableEdgeBlur=function(){this._edgeBlur=0},B.prototype.setGrainAmount=function(g){this._grainAmount=g},B.prototype.disableGrain=function(){this._grainAmount=0},B.prototype.setChromaticAberration=function(g){this._chromaticAberration=g},B.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},B.prototype.setEdgeDistortion=function(g){this._distortion=g},B.prototype.disableEdgeDistortion=function(){this._distortion=0},B.prototype.setFocusDistance=function(g){this._dofDistance=g},B.prototype.disableDepthOfField=function(){this._dofDistance=-1},B.prototype.setAperture=function(g){this._dofAperture=g},B.prototype.setDarkenOutOfFocus=function(g){this._dofDarken=g},B.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},B.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},B.prototype.enableNoiseBlur=function(){this._blurNoise=!0},B.prototype.disableNoiseBlur=function(){this._blurNoise=!1},B.prototype.setHighlightsGain=function(g){this._highlightsGain=g},B.prototype.setHighlightsThreshold=function(g){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=g},B.prototype.disableHighlights=function(){this._highlightsGain=-1},B.prototype.dispose=function(g){g===void 0&&(g=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),g&&this._scene.disableDepthRenderer()},B.prototype._createChromaticAberrationPostProcess=function(g){var N=this;this._chromaticAberrationPostProcess=new b.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(I){I.setFloat("chromatic_aberration",N._chromaticAberration),I.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),I.setFloat("screen_height",N._scene.getEngine().getRenderHeight()),I.setFloat("radialIntensity",1),I.setFloat2("direction",17,17),I.setFloat2("centerPosition",.5,.5)}},B.prototype._createHighlightsPostProcess=function(g){var N=this;this._highlightsPostProcess=new b.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(I){I.setFloat("gain",N._highlightsGain),I.setFloat("threshold",N._highlightsThreshold),I.setTextureFromPostProcess("textureSampler",N._chromaticAberrationPostProcess),I.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),I.setFloat("screen_height",N._scene.getEngine().getRenderHeight())}},B.prototype._createDepthOfFieldPostProcess=function(g){var N=this;this._depthOfFieldPostProcess=new b.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(I){I.setTexture("depthSampler",N._depthTexture),I.setTexture("grainSampler",N._grainTexture),I.setTextureFromPostProcess("textureSampler",N._highlightsPostProcess),I.setTextureFromPostProcess("highlightsSampler",N._depthOfFieldPostProcess),I.setFloat("grain_amount",N._grainAmount),I.setBool("blur_noise",N._blurNoise),I.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),I.setFloat("screen_height",N._scene.getEngine().getRenderHeight()),I.setFloat("distortion",N._distortion),I.setBool("dof_enabled",N._dofDistance!==-1),I.setFloat("screen_distance",1/(.1-1/N._dofDistance)),I.setFloat("aperture",N._dofAperture),I.setFloat("darken",N._dofDarken),I.setFloat("edge_blur",N._edgeBlur),I.setBool("highlights",N._highlightsGain!==-1),N._scene.activeCamera&&(I.setFloat("near",N._scene.activeCamera.minZ),I.setFloat("far",N._scene.activeCamera.maxZ))}},B.prototype._createGrainTexture=function(){var g=512;this._grainTexture=new R.a("LensNoiseTexture",g,this._scene,!1,c.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var N=this._grainTexture.getContext(),I=function(q,pe){return Math.random()*(pe-q)+q},k,K=0;K<g;K++)for(var P=0;P<g;P++)k=Math.floor(I(.42,.58)*255),N.fillStyle="rgb("+k+", "+k+", "+k+")",N.fillRect(K,P,1,1);this._grainTexture.update(!1)},B}(r.a),G=o(594),y=o(436),Y=o(486),Z=o(472),ce="ssaoPixelShader",W=`
uniform sampler2D textureSampler;
varying vec2 vUV;
#ifdef SSAO
uniform sampler2D randomSampler;
uniform float randTextureTiles;
uniform float samplesFactor;
uniform vec3 sampleSphere[SAMPLES];
uniform float totalStrength;
uniform float radius;
uniform float area;
uniform float fallOff;
uniform float base;
vec3 normalFromDepth(float depth,vec2 coords)
{
vec2 offset1=vec2(0.0,radius);
vec2 offset2=vec2(radius,0.0);
float depth1=texture2D(textureSampler,coords+offset1).r;
float depth2=texture2D(textureSampler,coords+offset2).r;
vec3 p1=vec3(offset1,depth1-depth);
vec3 p2=vec3(offset2,depth2-depth);
vec3 normal=cross(p1,p2);
normal.z=-normal.z;
return normalize(normal);
}
void main()
{
vec3 random=normalize(texture2D(randomSampler,vUV*randTextureTiles).rgb);
float depth=texture2D(textureSampler,vUV).r;
vec3 position=vec3(vUV,depth);
vec3 normal=normalFromDepth(depth,vUV);
float radiusDepth=radius/depth;
float occlusion=0.0;
vec3 ray;
vec3 hemiRay;
float occlusionDepth;
float difference;
for (int i=0; i<SAMPLES; i++)
{
ray=radiusDepth*reflect(sampleSphere[i],random);
hemiRay=position+sign(dot(ray,normal))*ray;
occlusionDepth=texture2D(textureSampler,clamp(hemiRay.xy,vec2(0.001,0.001),vec2(0.999,0.999))).r;
difference=depth-occlusionDepth;
occlusion+=step(fallOff,difference)*(1.0-smoothstep(fallOff,area,difference));
}
float ao=1.0-totalStrength*occlusion*samplesFactor;
float result=clamp(ao+base,0.0,1.0);
gl_FragColor.r=result;
gl_FragColor.g=result;
gl_FragColor.b=result;
gl_FragColor.a=1.0;
}
#endif
`;L.a.ShadersStore[ce]=W;var le={name:ce,shader:W},ne=o(601),ee=function(ue){Object(l.d)(B,ue);function B(g,N,I,k){var K=ue.call(this,N.getEngine(),g)||this;K.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",K.SSAORenderEffect="SSAORenderEffect",K.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",K.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",K.SSAOCombineRenderEffect="SSAOCombineRenderEffect",K.totalStrength=1,K.radius=1e-4,K.area=.0075,K.fallOff=1e-6,K.base=.5,K._firstUpdate=!0,K._scene=N,K._createRandomTexture(),K._depthTexture=N.enableDepthRenderer().getDepthMap();var P=I.ssaoRatio||I,q=I.combineRatio||I;return K._originalColorPostProcess=new Y.b("SSAOOriginalSceneColor",q,null,c.a.BILINEAR_SAMPLINGMODE,N.getEngine(),!1),K._createSSAOPostProcess(P),K._createBlurPostProcess(P),K._createSSAOCombinePostProcess(q),K.addEffect(new a.a(N.getEngine(),K.SSAOOriginalSceneColorEffect,function(){return K._originalColorPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAORenderEffect,function(){return K._ssaoPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAOBlurHRenderEffect,function(){return K._blurHPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAOBlurVRenderEffect,function(){return K._blurVPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAOCombineRenderEffect,function(){return K._ssaoCombinePostProcess},!0)),N.postProcessRenderPipelineManager.addPipeline(K),k&&N.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(g,k),K}return Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),B.prototype.getClassName=function(){return"SSAORenderingPipeline"},B.prototype.dispose=function(g){g===void 0&&(g=!1);for(var N=0;N<this._scene.cameras.length;N++){var I=this._scene.cameras[N];this._originalColorPostProcess.dispose(I),this._ssaoPostProcess.dispose(I),this._blurHPostProcess.dispose(I),this._blurVPostProcess.dispose(I),this._ssaoCombinePostProcess.dispose(I)}this._randomTexture.dispose(),g&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),ue.prototype.dispose.call(this)},B.prototype._createBlurPostProcess=function(g){var N=this,I=16;this._blurHPostProcess=new Z.a("BlurH",new y.d(1,0),I,g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new Z.a("BlurV",new y.d(0,1),I,g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var k=N._blurHPostProcess.width/N._scene.getEngine().getRenderWidth();N._blurHPostProcess.kernel=I*k}),this._blurVPostProcess.onActivateObservable.add(function(){var k=N._blurVPostProcess.height/N._scene.getEngine().getRenderHeight();N._blurVPostProcess.kernel=I*k})},B.prototype._rebuild=function(){this._firstUpdate=!0,ue.prototype._rebuild.call(this)},B.prototype._createSSAOPostProcess=function(g){var N=this,I=16,k=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],K=1/I;this._ssaoPostProcess=new b.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+I+`
#define SSAO`),this._ssaoPostProcess.onApply=function(P){N._firstUpdate&&(P.setArray3("sampleSphere",k),P.setFloat("samplesFactor",K),P.setFloat("randTextureTiles",4)),P.setFloat("totalStrength",N.totalStrength),P.setFloat("radius",N.radius),P.setFloat("area",N.area),P.setFloat("fallOff",N.fallOff),P.setFloat("base",N.base),P.setTexture("textureSampler",N._depthTexture),P.setTexture("randomSampler",N._randomTexture)}},B.prototype._createSSAOCombinePostProcess=function(g){var N=this;this._ssaoCombinePostProcess=new b.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(I){I.setVector4("viewport",y.c.Vector4[0].copyFromFloats(0,0,1,1)),I.setTextureFromPostProcess("originalColor",N._originalColorPostProcess)}},B.prototype._createRandomTexture=function(){var g=512;this._randomTexture=new R.a("SSAORandomTexture",g,this._scene,!1,c.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var N=this._randomTexture.getContext(),I=function(q,pe){return Math.random()*(pe-q)+q},k=y.e.Zero(),K=0;K<g;K++)for(var P=0;P<g;P++)k.x=Math.floor(I(-1,1)*255),k.y=Math.floor(I(-1,1)*255),k.z=Math.floor(I(-1,1)*255),N.fillStyle="rgb("+k.x+", "+k.y+", "+k.z+")",N.fillRect(K,P,1,1);this._randomTexture.update(!1)},Object(l.c)([Object(s.c)()],B.prototype,"totalStrength",void 0),Object(l.c)([Object(s.c)()],B.prototype,"radius",void 0),Object(l.c)([Object(s.c)()],B.prototype,"area",void 0),Object(l.c)([Object(s.c)()],B.prototype,"fallOff",void 0),Object(l.c)([Object(s.c)()],B.prototype,"base",void 0),B}(r.a),ae=o(450),$=o(571),z=o(581),me=o(535),Ee="standardPixelShader",se=`uniform sampler2D textureSampler;
varying vec2 vUV;
#if defined(PASS_POST_PROCESS)
void main(void)
{
vec4 color=texture2D(textureSampler,vUV);
gl_FragColor=color;
}
#endif
#if defined(DOWN_SAMPLE_X4)
uniform vec2 dsOffsets[16];
void main(void)
{
vec4 average=vec4(0.0,0.0,0.0,0.0);
average=texture2D(textureSampler,vUV+dsOffsets[0]);
average+=texture2D(textureSampler,vUV+dsOffsets[1]);
average+=texture2D(textureSampler,vUV+dsOffsets[2]);
average+=texture2D(textureSampler,vUV+dsOffsets[3]);
average+=texture2D(textureSampler,vUV+dsOffsets[4]);
average+=texture2D(textureSampler,vUV+dsOffsets[5]);
average+=texture2D(textureSampler,vUV+dsOffsets[6]);
average+=texture2D(textureSampler,vUV+dsOffsets[7]);
average+=texture2D(textureSampler,vUV+dsOffsets[8]);
average+=texture2D(textureSampler,vUV+dsOffsets[9]);
average+=texture2D(textureSampler,vUV+dsOffsets[10]);
average+=texture2D(textureSampler,vUV+dsOffsets[11]);
average+=texture2D(textureSampler,vUV+dsOffsets[12]);
average+=texture2D(textureSampler,vUV+dsOffsets[13]);
average+=texture2D(textureSampler,vUV+dsOffsets[14]);
average+=texture2D(textureSampler,vUV+dsOffsets[15]);
average/=16.0;
gl_FragColor=average;
}
#endif
#if defined(BRIGHT_PASS)
uniform vec2 dsOffsets[4];
uniform float brightThreshold;
void main(void)
{
vec4 average=vec4(0.0,0.0,0.0,0.0);
average=texture2D(textureSampler,vUV+vec2(dsOffsets[0].x,dsOffsets[0].y));
average+=texture2D(textureSampler,vUV+vec2(dsOffsets[1].x,dsOffsets[1].y));
average+=texture2D(textureSampler,vUV+vec2(dsOffsets[2].x,dsOffsets[2].y));
average+=texture2D(textureSampler,vUV+vec2(dsOffsets[3].x,dsOffsets[3].y));
average*=0.25;
float luminance=length(average.rgb);
if (luminance<brightThreshold) {
average=vec4(0.0,0.0,0.0,1.0);
}
gl_FragColor=average;
}
#endif
#if defined(TEXTURE_ADDER)
uniform sampler2D otherSampler;
uniform sampler2D lensSampler;
uniform float exposure;
void main(void)
{
vec3 colour=texture2D(textureSampler,vUV).rgb;
colour*=exposure;
vec3 X=max(vec3(0.0,0.0,0.0),colour-0.004);
vec3 retColor=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);
colour=retColor*retColor;
colour+=colour*texture2D(lensSampler,vUV).rgb;
vec4 finalColor=vec4(colour.rgb,1.0)+texture2D(otherSampler,vUV);
gl_FragColor=finalColor;
}
#endif
#if defined(VLS)
#define PI 3.1415926535897932384626433832795
uniform mat4 shadowViewProjection;
uniform mat4 lightWorld;
uniform vec3 cameraPosition;
uniform vec3 sunDirection;
uniform vec3 sunColor;
uniform vec2 depthValues;
uniform float scatteringCoefficient;
uniform float scatteringPower;
uniform sampler2D shadowMapSampler;
uniform sampler2D positionSampler;
float computeScattering(float lightDotView)
{
float result=1.0-scatteringCoefficient*scatteringCoefficient;
result/=(4.0*PI*pow(1.0+scatteringCoefficient*scatteringCoefficient-(2.0*scatteringCoefficient)*lightDotView,1.5));
return result;
}
void main(void)
{

vec3 worldPos=texture2D(positionSampler,vUV).rgb;
vec3 startPosition=cameraPosition;
vec3 rayVector=worldPos-startPosition;
float rayLength=length(rayVector);
vec3 rayDirection=rayVector/rayLength;
float stepLength=rayLength/NB_STEPS;
vec3 stepL=rayDirection*stepLength;
vec3 currentPosition=startPosition;
vec3 accumFog=vec3(0.0);
for (int i=0; i<int(NB_STEPS); i++)
{
vec4 worldInShadowCameraSpace=shadowViewProjection*vec4(currentPosition,1.0);
float depthMetric=(worldInShadowCameraSpace.z+depthValues.x)/(depthValues.y);
float shadowPixelDepth=clamp(depthMetric,0.0,1.0);
worldInShadowCameraSpace.xyz/=worldInShadowCameraSpace.w;
worldInShadowCameraSpace.xyz=0.5*worldInShadowCameraSpace.xyz+vec3(0.5);
float shadowMapValue=texture2D(shadowMapSampler,worldInShadowCameraSpace.xy).r;
if (shadowMapValue>shadowPixelDepth)
accumFog+=sunColor*computeScattering(dot(rayDirection,sunDirection));
currentPosition+=stepL;
}
accumFog/=NB_STEPS;
vec3 color=accumFog*scatteringPower;
gl_FragColor=vec4(color*exp(color) ,1.0);
}
#endif
#if defined(VLSMERGE)
uniform sampler2D originalSampler;
void main(void)
{
gl_FragColor=texture2D(originalSampler,vUV)+texture2D(textureSampler,vUV);
}
#endif
#if defined(LUMINANCE)
uniform vec2 lumOffsets[4];
void main()
{
float average=0.0;
vec4 color=vec4(0.0);
float maximum=-1e20;
vec3 weight=vec3(0.299,0.587,0.114);
for (int i=0; i<4; i++)
{
color=texture2D(textureSampler,vUV+ lumOffsets[i]);

float GreyValue=dot(color.rgb,vec3(0.33,0.33,0.33));

#ifdef WEIGHTED_AVERAGE
float GreyValue=dot(color.rgb,weight);
#endif
#ifdef BRIGHTNESS
float GreyValue=max(color.r,max(color.g,color.b));
#endif
#ifdef HSL_COMPONENT
float GreyValue=0.5*(max(color.r,max(color.g,color.b))+min(color.r,min(color.g,color.b)));
#endif
#ifdef MAGNITUDE
float GreyValue=length(color.rgb);
#endif
maximum=max(maximum,GreyValue);
average+=(0.25*log(1e-5+GreyValue));
}
average=exp(average);
gl_FragColor=vec4(average,maximum,0.0,1.0);
}
#endif
#if defined(LUMINANCE_DOWN_SAMPLE)
uniform vec2 dsOffsets[9];
uniform float halfDestPixelSize;
#ifdef FINAL_DOWN_SAMPLER
#include<packingFunctions>
#endif
void main()
{
vec4 color=vec4(0.0);
float average=0.0;
for (int i=0; i<9; i++)
{
color=texture2D(textureSampler,vUV+vec2(halfDestPixelSize,halfDestPixelSize)+dsOffsets[i]);
average+=color.r;
}
average/=9.0;
#ifdef FINAL_DOWN_SAMPLER
gl_FragColor=pack(average);
#else
gl_FragColor=vec4(average,average,0.0,1.0);
#endif
}
#endif
#if defined(HDR)
uniform sampler2D textureAdderSampler;
uniform float averageLuminance;
void main()
{
vec4 color=texture2D(textureAdderSampler,vUV);
#ifndef AUTO_EXPOSURE
vec4 adjustedColor=color/averageLuminance;
color=adjustedColor;
color.a=1.0;
#endif
gl_FragColor=color;
}
#endif
#if defined(LENS_FLARE)
#define GHOSTS 3
uniform sampler2D lensColorSampler;
uniform float strength;
uniform float ghostDispersal;
uniform float haloWidth;
uniform vec2 resolution;
uniform float distortionStrength;
float hash(vec2 p)
{
float h=dot(p,vec2(127.1,311.7));
return -1.0+2.0*fract(sin(h)*43758.5453123);
}
float noise(in vec2 p)
{
vec2 i=floor(p);
vec2 f=fract(p);
vec2 u=f*f*(3.0-2.0*f);
return mix(mix(hash(i+vec2(0.0,0.0)),
hash(i+vec2(1.0,0.0)),u.x),
mix(hash(i+vec2(0.0,1.0)),
hash(i+vec2(1.0,1.0)),u.x),u.y);
}
float fbm(vec2 p)
{
float f=0.0;
f+=0.5000*noise(p); p*=2.02;
f+=0.2500*noise(p); p*=2.03;
f+=0.1250*noise(p); p*=2.01;
f+=0.0625*noise(p); p*=2.04;
f/=0.9375;
return f;
}
vec3 pattern(vec2 uv)
{
vec2 p=-1.0+2.0*uv;
float p2=dot(p,p);
float f=fbm(vec2(15.0*p2))/2.0;
float r=0.2+0.6*sin(12.5*length(uv-vec2(0.5)));
float g=0.2+0.6*sin(20.5*length(uv-vec2(0.5)));
float b=0.2+0.6*sin(17.2*length(uv-vec2(0.5)));
return (1.0-f)*vec3(r,g,b);
}
float luminance(vec3 color)
{
return dot(color.rgb,vec3(0.2126,0.7152,0.0722));
}
vec4 textureDistorted(sampler2D tex,vec2 texcoord,vec2 direction,vec3 distortion)
{
return vec4(
texture2D(tex,texcoord+direction*distortion.r).r,
texture2D(tex,texcoord+direction*distortion.g).g,
texture2D(tex,texcoord+direction*distortion.b).b,
1.0
);
}
void main(void)
{
vec2 uv=-vUV+vec2(1.0);
vec2 ghostDir=(vec2(0.5)-uv)*ghostDispersal;
vec2 texelSize=1.0/resolution;
vec3 distortion=vec3(-texelSize.x*distortionStrength,0.0,texelSize.x*distortionStrength);
vec4 result=vec4(0.0);
float ghostIndice=1.0;
for (int i=0; i<GHOSTS; ++i)
{
vec2 offset=fract(uv+ghostDir*ghostIndice);
float weight=length(vec2(0.5)-offset)/length(vec2(0.5));
weight=pow(1.0-weight,10.0);
result+=textureDistorted(textureSampler,offset,normalize(ghostDir),distortion)*weight*strength;
ghostIndice+=1.0;
}
vec2 haloVec=normalize(ghostDir)*haloWidth;
float weight=length(vec2(0.5)-fract(uv+haloVec))/length(vec2(0.5));
weight=pow(1.0-weight,10.0);
result+=textureDistorted(textureSampler,fract(uv+haloVec),normalize(ghostDir),distortion)*weight*strength;
result*=texture2D(lensColorSampler,vec2(length(vec2(0.5)-uv)/length(vec2(0.5))));
gl_FragColor=result;
}
#endif
#if defined(LENS_FLARE_COMPOSE)
uniform sampler2D otherSampler;
uniform sampler2D lensDirtSampler;
uniform sampler2D lensStarSampler;
uniform mat4 lensStarMatrix;
void main(void)
{
vec2 lensFlareCoords=(lensStarMatrix*vec4(vUV,1.0,1.0)).xy;
vec4 lensMod=texture2D(lensDirtSampler,vUV);
lensMod+=texture2D(lensStarSampler,vUV);
vec4 result=texture2D(textureSampler,vUV)*lensMod;
gl_FragColor=texture2D(otherSampler,vUV)+result;
}
#endif
#if defined(DEPTH_OF_FIELD)
uniform sampler2D otherSampler;
uniform sampler2D depthSampler;
uniform float distance;
void main(void)
{
vec4 sharp=texture2D(otherSampler,vUV);
vec4 blur=texture2D(textureSampler,vUV);
float dist=clamp(texture2D(depthSampler,vUV).r*distance,0.0,1.0);
float factor=0.0;
if (dist<0.05)
factor=1.0;
else if (dist<0.1)
factor=20.0*(0.1-dist);
else if (dist<0.5)
factor=0.0;
else
factor=2.0*(dist-0.5);
factor=clamp(factor,0.0,0.90);
gl_FragColor=mix(sharp,blur,factor);
}
#endif
#if defined(MOTION_BLUR)
uniform mat4 inverseViewProjection;
uniform mat4 prevViewProjection;
uniform vec2 screenSize;
uniform float motionScale;
uniform float motionStrength;
uniform sampler2D depthSampler;
void main(void)
{
vec2 texelSize=1.0/screenSize;
float depth=texture2D(depthSampler,vUV).r;
vec4 cpos=vec4(vUV*2.0-1.0,depth,1.0);
cpos=cpos*inverseViewProjection;
vec4 ppos=cpos*prevViewProjection;
ppos.xyz/=ppos.w;
ppos.xy=ppos.xy*0.5+0.5;
vec2 velocity=(ppos.xy-vUV)*motionScale*motionStrength;
float speed=length(velocity/texelSize);
int nSamples=int(clamp(speed,1.0,MAX_MOTION_SAMPLES));
vec4 result=texture2D(textureSampler,vUV);
for (int i=1; i<int(MAX_MOTION_SAMPLES); ++i) {
if (i>=nSamples)
break;
vec2 offset1=vUV+velocity*(float(i)/float(nSamples-1)-0.5);
result+=texture2D(textureSampler,offset1);
}
gl_FragColor=result/float(nSamples);
}
#endif
`;L.a.ShadersStore[Ee]=se;var ge={name:Ee,shader:se},oe=function(ue){Object(l.d)(B,ue);function B(g,N,I,k,K){k===void 0&&(k=null);var P=ue.call(this,N.getEngine(),g)||this;return P.downSampleX4PostProcess=null,P.brightPassPostProcess=null,P.blurHPostProcesses=[],P.blurVPostProcesses=[],P.textureAdderPostProcess=null,P.volumetricLightPostProcess=null,P.volumetricLightSmoothXPostProcess=null,P.volumetricLightSmoothYPostProcess=null,P.volumetricLightMergePostProces=null,P.volumetricLightFinalPostProcess=null,P.luminancePostProcess=null,P.luminanceDownSamplePostProcesses=[],P.hdrPostProcess=null,P.textureAdderFinalPostProcess=null,P.lensFlareFinalPostProcess=null,P.hdrFinalPostProcess=null,P.lensFlarePostProcess=null,P.lensFlareComposePostProcess=null,P.motionBlurPostProcess=null,P.depthOfFieldPostProcess=null,P.fxaaPostProcess=null,P.screenSpaceReflectionPostProcess=null,P.brightThreshold=1,P.blurWidth=512,P.horizontalBlur=!1,P.lensTexture=null,P.volumetricLightCoefficient=.2,P.volumetricLightPower=4,P.volumetricLightBlurScale=64,P.sourceLight=null,P.hdrMinimumLuminance=1,P.hdrDecreaseRate=.5,P.hdrIncreaseRate=.5,P.lensColorTexture=null,P.lensFlareStrength=20,P.lensFlareGhostDispersal=1.4,P.lensFlareHaloWidth=.7,P.lensFlareDistortionStrength=16,P.lensFlareBlurWidth=512,P.lensStarTexture=null,P.lensFlareDirtTexture=null,P.depthOfFieldDistance=10,P.depthOfFieldBlurWidth=64,P.animations=[],P._currentDepthOfFieldSource=null,P._fixedExposure=1,P._currentExposure=1,P._hdrAutoExposure=!1,P._hdrCurrentLuminance=1,P._motionStrength=1,P._isObjectBasedMotionBlur=!1,P._camerasToBeAttached=[],P._bloomEnabled=!1,P._depthOfFieldEnabled=!1,P._vlsEnabled=!1,P._lensFlareEnabled=!1,P._hdrEnabled=!1,P._motionBlurEnabled=!1,P._fxaaEnabled=!1,P._screenSpaceReflectionsEnabled=!1,P._motionBlurSamples=64,P._volumetricLightStepsCount=50,P._samples=1,P._cameras=K||N.cameras,P._cameras=P._cameras.slice(),P._camerasToBeAttached=P._cameras.slice(),P._scene=N,P._basePostProcess=k,P._ratio=I,P._floatTextureType=N.getEngine().getCaps().textureFloatRender?1:2,N.postProcessRenderPipelineManager.addPipeline(P),P._buildPipeline(),P}return Object.defineProperty(B.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(g){this._fixedExposure=g,this._currentExposure=g},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(g){if(this._hdrAutoExposure=g,this.hdrPostProcess){var N=["#define HDR"];g&&N.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(N.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(g){this._motionStrength=g,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=g)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(g){var N=this._isObjectBasedMotionBlur!==g;this._isObjectBasedMotionBlur=g,N&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(g){this._bloomEnabled!==g&&(this._bloomEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(g){this._depthOfFieldEnabled!==g&&(this._depthOfFieldEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(g){this._lensFlareEnabled!==g&&(this._lensFlareEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(g){this._hdrEnabled!==g&&(this._hdrEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(g){if(this._vlsEnabled!==g){if(g){var N=this._scene.enableGeometryBufferRenderer();if(!N){v.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=g,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(g){this._motionBlurEnabled!==g&&(this._motionBlurEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(g){this._fxaaEnabled!==g&&(this._fxaaEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(g){this._screenSpaceReflectionsEnabled!==g&&(this._screenSpaceReflectionsEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(g){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+g.toFixed(1)),this._volumetricLightStepsCount=g},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(g){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=g:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+g.toFixed(1))),this._motionBlurSamples=g},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"samples",{get:function(){return this._samples},set:function(g){this._samples!==g&&(this._samples=g,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype._buildPipeline=function(){var g=this,N=this._ratio,I=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new z.a("HDRPass",I,N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){g._currentDepthOfFieldSource=g.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(I.getEngine(),"HDRScreenSpaceReflections",function(){return g.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new b.a("HDRPass","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){g._currentDepthOfFieldSource=g.originalPostProcess}),this.addEffect(new a.a(I.getEngine(),"HDRPassPostProcess",function(){return g.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(I,N/4),this._createBrightPassPostProcess(I,N/4),this._createBlurPostProcesses(I,N/4,1),this._createTextureAdderPostProcess(I,N),this.textureAdderFinalPostProcess=new b.a("HDRDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRBaseDepthOfFieldSource",function(){return g.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(I,N),this.volumetricLightFinalPostProcess=new b.a("HDRVLSFinal","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRVLSFinal",function(){return g.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(I,N),this.lensFlareFinalPostProcess=new b.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return g.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(I,this._floatTextureType),this._createHdrPostProcess(I,N),this.hdrFinalPostProcess=new b.a("HDRPostHDReDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return g.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(I,N/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(I,N)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(I,N),this._fxaaEnabled&&(this.fxaaPostProcess=new n.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,0),this.addEffect(new a.a(I.getEngine(),"HDRFxaa",function(){return g.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},B.prototype._createDownSampleX4PostProcess=function(g,N){var I=this,k=new Array(32);this.downSampleX4PostProcess=new b.a("HDRDownSampleX4","standard",["dsOffsets"],[],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(K){for(var P=0,q=I.downSampleX4PostProcess.width,pe=I.downSampleX4PostProcess.height,Te=-2;Te<2;Te++)for(var Ae=-2;Ae<2;Ae++)k[P]=(Te+.5)*(1/q),k[P+1]=(Ae+.5)*(1/pe),P+=2;K.setArray2("dsOffsets",k)},this.addEffect(new a.a(g.getEngine(),"HDRDownSampleX4",function(){return I.downSampleX4PostProcess},!0))},B.prototype._createBrightPassPostProcess=function(g,N){var I=this,k=new Array(8);this.brightPassPostProcess=new b.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(K){var P=1/I.brightPassPostProcess.width,q=1/I.brightPassPostProcess.height;k[0]=-.5*P,k[1]=.5*q,k[2]=.5*P,k[3]=.5*q,k[4]=-.5*P,k[5]=-.5*q,k[6]=.5*P,k[7]=-.5*q,K.setArray2("dsOffsets",k),K.setFloat("brightThreshold",I.brightThreshold)},this.addEffect(new a.a(g.getEngine(),"HDRBrightPass",function(){return I.brightPassPostProcess},!0))},B.prototype._createBlurPostProcesses=function(g,N,I,k){var K=this;k===void 0&&(k="blurWidth");var P=g.getEngine(),q=new Z.a("HDRBlurH_"+I,new y.d(1,0),this[k],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,this._floatTextureType),pe=new Z.a("HDRBlurV_"+I,new y.d(0,1),this[k],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,this._floatTextureType);q.onActivateObservable.add(function(){var Te=q.width/P.getRenderWidth();q.kernel=K[k]*Te}),pe.onActivateObservable.add(function(){var Te=pe.height/P.getRenderHeight();pe.kernel=K.horizontalBlur?64*Te:K[k]*Te}),this.addEffect(new a.a(g.getEngine(),"HDRBlurH"+I,function(){return q},!0)),this.addEffect(new a.a(g.getEngine(),"HDRBlurV"+I,function(){return pe},!0)),this.blurHPostProcesses.push(q),this.blurVPostProcesses.push(pe)},B.prototype._createTextureAdderPostProcess=function(g,N){var I=this;this.textureAdderPostProcess=new b.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(k){k.setTextureFromPostProcess("otherSampler",I._vlsEnabled?I._currentDepthOfFieldSource:I.originalPostProcess),k.setTexture("lensSampler",I.lensTexture),k.setFloat("exposure",I._currentExposure),I._currentDepthOfFieldSource=I.textureAdderFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDRTextureAdder",function(){return I.textureAdderPostProcess},!0))},B.prototype._createVolumetricLightPostProcess=function(g,N){var I=this,k=g.enableGeometryBufferRenderer();k.enablePosition=!0;var K=k.getGBuffer();this.volumetricLightPostProcess=new b.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],N/8,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var P=y.d.Zero();this.volumetricLightPostProcess.onApply=function(q){if(I.sourceLight&&I.sourceLight.getShadowGenerator()&&I._scene.activeCamera){var pe=I.sourceLight.getShadowGenerator();q.setTexture("shadowMapSampler",pe.getShadowMap()),q.setTexture("positionSampler",K.textures[2]),q.setColor3("sunColor",I.sourceLight.diffuse),q.setVector3("sunDirection",I.sourceLight.getShadowDirection()),q.setVector3("cameraPosition",I._scene.activeCamera.globalPosition),q.setMatrix("shadowViewProjection",pe.getTransformMatrix()),q.setFloat("scatteringCoefficient",I.volumetricLightCoefficient),q.setFloat("scatteringPower",I.volumetricLightPower),P.x=I.sourceLight.getDepthMinZ(I._scene.activeCamera),P.y=I.sourceLight.getDepthMaxZ(I._scene.activeCamera),q.setVector2("depthValues",P)}},this.addEffect(new a.a(g.getEngine(),"HDRVLS",function(){return I.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(g,N/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new b.a("HDRVLSMerge","standard",[],["originalSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(q){q.setTextureFromPostProcess("originalSampler",I._bloomEnabled?I.textureAdderFinalPostProcess:I.originalPostProcess),I._currentDepthOfFieldSource=I.volumetricLightFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDRVLSMerge",function(){return I.volumetricLightMergePostProces},!0))},B.prototype._createLuminancePostProcesses=function(g,N){var I=this,k=Math.pow(3,B.LuminanceSteps);this.luminancePostProcess=new b.a("HDRLuminance","standard",["lumOffsets"],[],{width:k,height:k},null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LUMINANCE",N);var K=[];this.luminancePostProcess.onApply=function(Ae){var Ce=1/I.luminancePostProcess.width,Oe=1/I.luminancePostProcess.height;K[0]=-.5*Ce,K[1]=.5*Oe,K[2]=.5*Ce,K[3]=.5*Oe,K[4]=-.5*Ce,K[5]=-.5*Oe,K[6]=.5*Ce,K[7]=-.5*Oe,Ae.setArray2("lumOffsets",K)},this.addEffect(new a.a(g.getEngine(),"HDRLuminance",function(){return I.luminancePostProcess},!0));for(var P=B.LuminanceSteps-1;P>=0;P--){var k=Math.pow(3,P),q=`#define LUMINANCE_DOWN_SAMPLE
`;P===0&&(q+="#define FINAL_DOWN_SAMPLER");var pe=new b.a("HDRLuminanceDownSample"+P,"standard",["dsOffsets","halfDestPixelSize"],[],{width:k,height:k},null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,q,N);this.luminanceDownSamplePostProcesses.push(pe)}var Te=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Ae,Ce){var Oe=new Array(18);Ae.onApply=function(Le){if(!!Te){for(var Me=0,xe=-1;xe<2;xe++)for(var Ie=-1;Ie<2;Ie++)Oe[Me]=xe/Te.width,Oe[Me+1]=Ie/Te.height,Me+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Te.width),Ce===I.luminanceDownSamplePostProcesses.length-1?Te=I.luminancePostProcess:Te=Ae}},Ce===I.luminanceDownSamplePostProcesses.length-1&&(Ae.onAfterRender=function(){var Le=g.getEngine().readPixels(0,0,1,1),Me=new y.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Ie=new Uint8Array(xe.buffer);I._hdrCurrentLuminance=(Ie[0]*Me.x+Ie[1]*Me.y+Ie[2]*Me.z+Ie[3]*Me.w)/100})}),I.addEffect(new a.a(g.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Ae},!0))})},B.prototype._createHdrPostProcess=function(g,N){var I=this,k=["#define HDR"];this._hdrAutoExposure&&k.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new b.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,k.join(`
`),0);var K=1,P=0,q=0;this.hdrPostProcess.onApply=function(pe){if(pe.setTextureFromPostProcess("textureAdderSampler",I._currentDepthOfFieldSource),P+=g.getEngine().getDeltaTime(),K<0)K=I._hdrCurrentLuminance;else{var Te=(q-P)/1e3;I._hdrCurrentLuminance<K+I.hdrDecreaseRate*Te?K+=I.hdrDecreaseRate*Te:I._hdrCurrentLuminance>K-I.hdrIncreaseRate*Te?K-=I.hdrIncreaseRate*Te:K=I._hdrCurrentLuminance}I.hdrAutoExposure?I._currentExposure=I._fixedExposure/K:(K=ae.a.Clamp(K,I.hdrMinimumLuminance,1e20),pe.setFloat("averageLuminance",K)),q=P,I._currentDepthOfFieldSource=I.hdrFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDR",function(){return I.hdrPostProcess},!0))},B.prototype._createLensFlarePostProcess=function(g,N){var I=this;this.lensFlarePostProcess=new b.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],N/2,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(g.getEngine(),"HDRLensFlare",function(){return I.lensFlarePostProcess},!0)),this._createBlurPostProcesses(g,N/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new b.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(g.getEngine(),"HDRLensFlareCompose",function(){return I.lensFlareComposePostProcess},!0));var k=new y.d(0,0);this.lensFlarePostProcess.onApply=function(q){q.setTextureFromPostProcess("textureSampler",I._bloomEnabled?I.blurHPostProcesses[0]:I.originalPostProcess),q.setTexture("lensColorSampler",I.lensColorTexture),q.setFloat("strength",I.lensFlareStrength),q.setFloat("ghostDispersal",I.lensFlareGhostDispersal),q.setFloat("haloWidth",I.lensFlareHaloWidth),k.x=I.lensFlarePostProcess.width,k.y=I.lensFlarePostProcess.height,q.setVector2("resolution",k),q.setFloat("distortionStrength",I.lensFlareDistortionStrength)};var K=y.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),P=y.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(q){if(!!I._scene.activeCamera){q.setTextureFromPostProcess("otherSampler",I.lensFlarePostProcess),q.setTexture("lensDirtSampler",I.lensFlareDirtTexture),q.setTexture("lensStarSampler",I.lensStarTexture);var pe=I._scene.activeCamera.getViewMatrix().getRow(0),Te=I._scene.activeCamera.getViewMatrix().getRow(2),Ae=y.e.Dot(pe.toVector3(),new y.e(1,0,0))+y.e.Dot(Te.toVector3(),new y.e(0,0,1));Ae*=4;var Ce=y.a.FromValues(Math.cos(Ae)*.5,-Math.sin(Ae),0,0,Math.sin(Ae),Math.cos(Ae)*.5,0,0,0,0,1,0,0,0,0,1),Oe=P.multiply(Ce).multiply(K);q.setMatrix("lensStarMatrix",Oe),I._currentDepthOfFieldSource=I.lensFlareFinalPostProcess}}},B.prototype._createDepthOfFieldPostProcess=function(g,N){var I=this;this.depthOfFieldPostProcess=new b.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(k){k.setTextureFromPostProcess("otherSampler",I._currentDepthOfFieldSource),k.setTexture("depthSampler",I._getDepthTexture()),k.setFloat("distance",I.depthOfFieldDistance)},this.addEffect(new a.a(g.getEngine(),"HDRDepthOfField",function(){return I.depthOfFieldPostProcess},!0))},B.prototype._createMotionBlurPostProcess=function(g,N){var I=this;if(this._isObjectBasedMotionBlur){var k=new $.a("HDRMotionBlur",g,N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,0);k.motionStrength=this.motionStrength,k.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=k}else{this.motionBlurPostProcess=new b.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var K=0,P=y.a.Identity(),q=y.a.Identity(),pe=y.a.Identity(),Te=y.d.Zero();this.motionBlurPostProcess.onApply=function(Ae){pe=g.getProjectionMatrix().multiply(g.getViewMatrix()),pe.invertToRef(q),Ae.setMatrix("inverseViewProjection",q),Ae.setMatrix("prevViewProjection",P),P=pe,Te.x=I.motionBlurPostProcess.width,Te.y=I.motionBlurPostProcess.height,Ae.setVector2("screenSize",Te),K=g.getEngine().getFps()/60,Ae.setFloat("motionScale",K),Ae.setFloat("motionStrength",I.motionStrength),Ae.setTexture("depthSampler",I._getDepthTexture())}}this.addEffect(new a.a(g.getEngine(),"HDRMotionBlur",function(){return I.motionBlurPostProcess},!0))},B.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var g=this._scene.enableGeometryBufferRenderer();return g.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},B.prototype._disposePostProcesses=function(){for(var g=0;g<this._cameras.length;g++){var N=this._cameras[g];this.originalPostProcess&&this.originalPostProcess.dispose(N),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(N),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(N),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(N),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(N),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(N),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(N),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(N),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(N),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(N),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(N),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(N);for(var I=0;I<this.luminanceDownSamplePostProcesses.length;I++)this.luminanceDownSamplePostProcesses[I].dispose(N);this.luminancePostProcess&&this.luminancePostProcess.dispose(N),this.hdrPostProcess&&this.hdrPostProcess.dispose(N),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(N),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(N),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(N),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(N);for(var I=0;I<this.blurHPostProcesses.length;I++)this.blurHPostProcesses[I].dispose(N);for(var I=0;I<this.blurVPostProcesses.length;I++)this.blurVPostProcesses[I].dispose(N)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},B.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),ue.prototype.dispose.call(this)},B.prototype.serialize=function(){var g=s.a.Serialize(this);return this.sourceLight&&(g.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(g.screenSpaceReflectionPostProcess=s.a.Serialize(this.screenSpaceReflectionPostProcess)),g.customType="StandardRenderingPipeline",g},B.Parse=function(g,N,I){var k=s.a.Parse(function(){return new B(g._name,N,g._ratio)},g,N,I);return g.sourceLightId&&(k.sourceLight=N.getLightByID(g.sourceLightId)),g.screenSpaceReflectionPostProcess&&s.a.Parse(function(){return k.screenSpaceReflectionPostProcess},g.screenSpaceReflectionPostProcess,N,I),k},B.LuminanceSteps=6,Object(l.c)([Object(s.c)()],B.prototype,"brightThreshold",void 0),Object(l.c)([Object(s.c)()],B.prototype,"blurWidth",void 0),Object(l.c)([Object(s.c)()],B.prototype,"horizontalBlur",void 0),Object(l.c)([Object(s.c)()],B.prototype,"exposure",null),Object(l.c)([Object(s.m)("lensTexture")],B.prototype,"lensTexture",void 0),Object(l.c)([Object(s.c)()],B.prototype,"volumetricLightCoefficient",void 0),Object(l.c)([Object(s.c)()],B.prototype,"volumetricLightPower",void 0),Object(l.c)([Object(s.c)()],B.prototype,"volumetricLightBlurScale",void 0),Object(l.c)([Object(s.c)()],B.prototype,"hdrMinimumLuminance",void 0),Object(l.c)([Object(s.c)()],B.prototype,"hdrDecreaseRate",void 0),Object(l.c)([Object(s.c)()],B.prototype,"hdrIncreaseRate",void 0),Object(l.c)([Object(s.c)()],B.prototype,"hdrAutoExposure",null),Object(l.c)([Object(s.m)("lensColorTexture")],B.prototype,"lensColorTexture",void 0),Object(l.c)([Object(s.c)()],B.prototype,"lensFlareStrength",void 0),Object(l.c)([Object(s.c)()],B.prototype,"lensFlareGhostDispersal",void 0),Object(l.c)([Object(s.c)()],B.prototype,"lensFlareHaloWidth",void 0),Object(l.c)([Object(s.c)()],B.prototype,"lensFlareDistortionStrength",void 0),Object(l.c)([Object(s.c)()],B.prototype,"lensFlareBlurWidth",void 0),Object(l.c)([Object(s.m)("lensStarTexture")],B.prototype,"lensStarTexture",void 0),Object(l.c)([Object(s.m)("lensFlareDirtTexture")],B.prototype,"lensFlareDirtTexture",void 0),Object(l.c)([Object(s.c)()],B.prototype,"depthOfFieldDistance",void 0),Object(l.c)([Object(s.c)()],B.prototype,"depthOfFieldBlurWidth",void 0),Object(l.c)([Object(s.c)()],B.prototype,"motionStrength",null),Object(l.c)([Object(s.c)()],B.prototype,"objectBasedMotionBlur",null),Object(l.c)([Object(s.c)()],B.prototype,"_ratio",void 0),Object(l.c)([Object(s.c)()],B.prototype,"BloomEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"DepthOfFieldEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"LensFlareEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"HDREnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"VLSEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"MotionBlurEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"fxaaEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"screenSpaceReflectionsEnabled",null),Object(l.c)([Object(s.c)()],B.prototype,"volumetricLightStepsCount",null),Object(l.c)([Object(s.c)()],B.prototype,"motionBlurSamples",null),Object(l.c)([Object(s.c)()],B.prototype,"samples",null),B}(r.a);d.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=oe;var _e=o(548)},605:function(J,j,o){"use strict";var l=o(435),s="importanceSampling",C=`




























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
}`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},606:function(J,j,o){"use strict";var l=o(435),s="pbrBRDFFunctions",C=`
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
`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},607:function(J,j,o){"use strict";var l=o(435),s="hdrFilteringFunctions",C=`#ifdef NUM_SAMPLES
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
#endif`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},625:function(J,j,o){"use strict";var l=o(435),s=o(457),C="rgbdDecodePixelShader",v=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;l.a.ShadersStore[C]=v;var c={name:C,shader:v}},626:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var l=o(434),s=o(439),C=o(441),v=o(480),c=o(454),E=function(){function h(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=h._DefaultIndexOfRefraction,this.indexOfRefraction=h._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=C.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return h.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},h.prototype.isReadyForSubMesh=function(i,t,e,n){return!(i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&v.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||e.getCaps().standardDerivatives&&this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled&&!n&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},h.prototype.prepareDefines=function(i,t){var e;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((e=this._textureRoughness)===null||e===void 0?void 0:e._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled?c.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===h._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&v.a.ClearCoatTintTextureEnabled?c.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},h.prototype.bindForSubMesh=function(i,t,e,n,r,a,f,p){var d,m,A,O,R,b,D,L,U=p._materialDefines,F=U.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!r||!i.isSync){F&&v.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&v.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(m=(d=this._texture)===null||d===void 0?void 0:d.coordinatesIndex)!==null&&m!==void 0?m:0,(O=(A=this._texture)===null||A===void 0?void 0:A.level)!==null&&O!==void 0?O:0,(b=(R=this._textureRoughness)===null||R===void 0?void 0:R.coordinatesIndex)!==null&&b!==void 0?b:0,(L=(D=this._textureRoughness)===null||D===void 0?void 0:D.level)!==null&&L!==void 0?L:0),this._texture&&c.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!F&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&e.getCaps().standardDerivatives&&v.a.ClearCoatTextureEnabled&&!n&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),c.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),t._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,f?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,f?-1:1)),this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),c.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var V=1-this._indexOfRefraction,M=1+this._indexOfRefraction,x=Math.pow(-V/M,2),_=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",x,_,V,M),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}t.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!F&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&e.getCaps().standardDerivatives&&v.a.ClearCoatBumpTextureEnabled&&!n&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},h.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},h.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},h.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},h.prototype.dispose=function(i){var t,e,n,r;i&&((t=this._texture)===null||t===void 0||t.dispose(),(e=this._textureRoughness)===null||e===void 0||e.dispose(),(n=this._bumpTexture)===null||n===void 0||n.dispose(),(r=this._tintTexture)===null||r===void 0||r.dispose())},h.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},h.AddFallbacks=function(i,t,e){return i.CLEARCOAT_BUMP&&t.addFallback(e++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&t.addFallback(e++,"CLEARCOAT_TINT"),i.CLEARCOAT&&t.addFallback(e++,"CLEARCOAT"),e},h.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},h.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},h.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},h.prototype.copyTo=function(i){s.a.Clone(function(){return i},this)},h.prototype.serialize=function(){return s.a.Serialize(this)},h.prototype.parse=function(i,t,e){var n=this;s.a.Parse(function(){return n},i,t,e)},h._DefaultIndexOfRefraction=1.5,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)()],h.prototype,"intensity",void 0),Object(l.c)([Object(s.c)()],h.prototype,"roughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"texture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"textureRoughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"remapF0OnInterfaceChange",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"bumpTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"isTintEnabled",void 0),Object(l.c)([Object(s.e)()],h.prototype,"tintColor",void 0),Object(l.c)([Object(s.c)()],h.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(s.c)()],h.prototype,"tintThickness",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"tintTexture",void 0),h}()},627:function(J,j,o){"use strict";var l=o(435),s="subSurfaceScatteringFunctions",C=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},644:function(J,j,o){"use strict";var l=o(435),s=o(524),C=o(457),v=o(525),c="imageProcessingPixelShader",E=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
void main(void)
{
vec4 result=texture2D(textureSampler,vUV);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE

result.rgb=toLinearSpace(result.rgb);
#endif
result=applyImageProcessing(result);
#else

#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
gl_FragColor=result;
}`;l.a.ShadersStore[c]=E;var h={name:c,shader:E}},646:function(J,j,o){"use strict";var l=o(435),s="glowMapMergePixelShader",C=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#ifdef EMISSIVE
uniform sampler2D textureSampler2;
#endif

uniform float offset;
void main(void) {
vec4 baseColor=texture2D(textureSampler,vUV);
#ifdef EMISSIVE
baseColor+=texture2D(textureSampler2,vUV);
baseColor*=offset;
#else
baseColor.a=abs(offset-baseColor.a);
#ifdef STROKE
float alpha=smoothstep(.0,.1,baseColor.a);
baseColor.a=alpha;
baseColor.rgb=baseColor.rgb*alpha;
#endif
#endif
gl_FragColor=baseColor;
}`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},647:function(J,j,o){"use strict";var l=o(435),s="glowMapMergeVertexShader",C=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},649:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(449),s=o(452),C=o(598),v=o(440);Object.defineProperty(l.a.prototype,"prePassRenderer",{get:function(){return this._prePassRenderer},set:function(E){E&&E.isSupported&&(this._prePassRenderer=E)},enumerable:!0,configurable:!0}),l.a.prototype.enablePrePassRenderer=function(){return this._prePassRenderer?this._prePassRenderer:(this._prePassRenderer=new C.a(this),this._prePassRenderer.isSupported||(this._prePassRenderer=null,v.a.Error(`PrePassRenderer needs WebGL 2 support.
Maybe you tried to use the following features that need the PrePassRenderer :
 + Subsurface Scattering`)),this._prePassRenderer)},l.a.prototype.disablePrePassRenderer=function(){!this._prePassRenderer||(this._prePassRenderer.dispose(),this._prePassRenderer=null)};var c=function(){function E(h){this.name=s.a.NAME_PREPASSRENDERER,this.scene=h}return E.prototype.register=function(){this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_PREPASS,this,this._beforeCameraDraw),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterCameraDraw),this.scene._beforeRenderTargetDrawStage.registerStep(s.a.STEP_BEFORERENDERTARGETDRAW_PREPASS,this,this._beforeRenderTargetDraw),this.scene._afterRenderTargetDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterRenderTargetDraw),this.scene._beforeClearStage.registerStep(s.a.STEP_BEFORECLEARSTAGE_PREPASS,this,this._beforeClearStage),this.scene._beforeRenderTargetClearStage.registerStep(s.a.STEP_BEFORERENDERTARGETCLEARSTAGE_PREPASS,this,this._beforeRenderTargetClearStage),this.scene._beforeRenderingMeshStage.registerStep(s.a.STEP_BEFORERENDERINGMESH_PREPASS,this,this._beforeRenderingMeshStage),this.scene._afterRenderingMeshStage.registerStep(s.a.STEP_AFTERRENDERINGMESH_PREPASS,this,this._afterRenderingMeshStage)},E.prototype._beforeRenderTargetDraw=function(h,i,t){this.scene.prePassRenderer&&(h._prePassRenderTarget||(h._prePassRenderTarget=this.scene.prePassRenderer._createRenderTarget(h.name+"_prePassRTT",h)),this.scene.prePassRenderer._setRenderTarget(h._prePassRenderTarget),this.scene.prePassRenderer._beforeDraw(void 0,i,t))},E.prototype._afterRenderTargetDraw=function(h,i,t){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw(i,t)},E.prototype._beforeRenderTargetClearStage=function(h,i,t){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(h._prePassRenderTarget),this.scene.prePassRenderer._clear())},E.prototype._beforeCameraDraw=function(h){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._beforeDraw(h))},E.prototype._afterCameraDraw=function(h){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw()},E.prototype._beforeClearStage=function(){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._clear())},E.prototype._beforeRenderingMeshStage=function(h,i,t,e){if(!!e){var n=h.getScene();n.prePassRenderer&&n.prePassRenderer.bindAttachmentsForEffect(e,i)}},E.prototype._afterRenderingMeshStage=function(h){var i=h.getScene();i.prePassRenderer&&i.prePassRenderer.restoreAttachments()},E.prototype.rebuild=function(){this.scene.disablePrePassRenderer(),this.scene.enablePrePassRenderer()},E.prototype.dispose=function(){this.scene.disablePrePassRenderer()},E}();C.a._SceneComponentInitialization=function(E){var h=E._getComponent(s.a.NAME_PREPASSRENDERER);h||(h=new c(E),E._addComponent(h))}},743:function(J,j,o){"use strict";o.d(j,"a",function(){return s});/*! *****************************************************************************
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
***************************************************************************** */var l=function(M,x){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,w){_.__proto__=w}||function(_,w){for(var G in w)Object.prototype.hasOwnProperty.call(w,G)&&(_[G]=w[G])},l(M,x)};function s(M,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");l(M,x);function _(){this.constructor=M}M.prototype=x===null?Object.create(x):(_.prototype=x.prototype,new _)}var C=function(){return C=Object.assign||function(x){for(var _,w=1,G=arguments.length;w<G;w++){_=arguments[w];for(var y in _)Object.prototype.hasOwnProperty.call(_,y)&&(x[y]=_[y])}return x},C.apply(this,arguments)};function v(M,x){var _={};for(var w in M)Object.prototype.hasOwnProperty.call(M,w)&&x.indexOf(w)<0&&(_[w]=M[w]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,w=Object.getOwnPropertySymbols(M);G<w.length;G++)x.indexOf(w[G])<0&&Object.prototype.propertyIsEnumerable.call(M,w[G])&&(_[w[G]]=M[w[G]]);return _}function c(M,x,_,w){var G=arguments.length,y=G<3?x:w===null?w=Object.getOwnPropertyDescriptor(x,_):w,Y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")y=Reflect.decorate(M,x,_,w);else for(var Z=M.length-1;Z>=0;Z--)(Y=M[Z])&&(y=(G<3?Y(y):G>3?Y(x,_,y):Y(x,_))||y);return G>3&&y&&Object.defineProperty(x,_,y),y}function E(M,x){return function(_,w){x(_,w,M)}}function h(M,x){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(M,x)}function i(M,x,_,w){function G(y){return y instanceof _?y:new _(function(Y){Y(y)})}return new(_||(_=Promise))(function(y,Y){function Z(le){try{W(w.next(le))}catch(ne){Y(ne)}}function ce(le){try{W(w.throw(le))}catch(ne){Y(ne)}}function W(le){le.done?y(le.value):G(le.value).then(Z,ce)}W((w=w.apply(M,x||[])).next())})}function t(M,x){var _={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},w,G,y,Y;return Y={next:Z(0),throw:Z(1),return:Z(2)},typeof Symbol=="function"&&(Y[Symbol.iterator]=function(){return this}),Y;function Z(W){return function(le){return ce([W,le])}}function ce(W){if(w)throw new TypeError("Generator is already executing.");for(;_;)try{if(w=1,G&&(y=W[0]&2?G.return:W[0]?G.throw||((y=G.return)&&y.call(G),0):G.next)&&!(y=y.call(G,W[1])).done)return y;switch(G=0,y&&(W=[W[0]&2,y.value]),W[0]){case 0:case 1:y=W;break;case 4:return _.label++,{value:W[1],done:!1};case 5:_.label++,G=W[1],W=[0];continue;case 7:W=_.ops.pop(),_.trys.pop();continue;default:if(y=_.trys,!(y=y.length>0&&y[y.length-1])&&(W[0]===6||W[0]===2)){_=0;continue}if(W[0]===3&&(!y||W[1]>y[0]&&W[1]<y[3])){_.label=W[1];break}if(W[0]===6&&_.label<y[1]){_.label=y[1],y=W;break}if(y&&_.label<y[2]){_.label=y[2],_.ops.push(W);break}y[2]&&_.ops.pop(),_.trys.pop();continue}W=x.call(M,_)}catch(le){W=[6,le],G=0}finally{w=y=0}if(W[0]&5)throw W[1];return{value:W[0]?W[1]:void 0,done:!0}}}var e=Object.create?function(M,x,_,w){w===void 0&&(w=_),Object.defineProperty(M,w,{enumerable:!0,get:function(){return x[_]}})}:function(M,x,_,w){w===void 0&&(w=_),M[w]=x[_]};function n(M,x){for(var _ in M)_!=="default"&&!Object.prototype.hasOwnProperty.call(x,_)&&e(x,M,_)}function r(M){var x=typeof Symbol=="function"&&Symbol.iterator,_=x&&M[x],w=0;if(_)return _.call(M);if(M&&typeof M.length=="number")return{next:function(){return M&&w>=M.length&&(M=void 0),{value:M&&M[w++],done:!M}}};throw new TypeError(x?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(M,x){var _=typeof Symbol=="function"&&M[Symbol.iterator];if(!_)return M;var w=_.call(M),G,y=[],Y;try{for(;(x===void 0||x-- >0)&&!(G=w.next()).done;)y.push(G.value)}catch(Z){Y={error:Z}}finally{try{G&&!G.done&&(_=w.return)&&_.call(w)}finally{if(Y)throw Y.error}}return y}function f(){for(var M=[],x=0;x<arguments.length;x++)M=M.concat(a(arguments[x]));return M}function p(){for(var M=0,x=0,_=arguments.length;x<_;x++)M+=arguments[x].length;for(var w=Array(M),G=0,x=0;x<_;x++)for(var y=arguments[x],Y=0,Z=y.length;Y<Z;Y++,G++)w[G]=y[Y];return w}function d(M,x){for(var _=0,w=x.length,G=M.length;_<w;_++,G++)M[G]=x[_];return M}function m(M){return this instanceof m?(this.v=M,this):new m(M)}function A(M,x,_){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var w=_.apply(M,x||[]),G,y=[];return G={},Y("next"),Y("throw"),Y("return"),G[Symbol.asyncIterator]=function(){return this},G;function Y(ee){w[ee]&&(G[ee]=function(ae){return new Promise(function($,z){y.push([ee,ae,$,z])>1||Z(ee,ae)})})}function Z(ee,ae){try{ce(w[ee](ae))}catch($){ne(y[0][3],$)}}function ce(ee){ee.value instanceof m?Promise.resolve(ee.value.v).then(W,le):ne(y[0][2],ee)}function W(ee){Z("next",ee)}function le(ee){Z("throw",ee)}function ne(ee,ae){ee(ae),y.shift(),y.length&&Z(y[0][0],y[0][1])}}function O(M){var x,_;return x={},w("next"),w("throw",function(G){throw G}),w("return"),x[Symbol.iterator]=function(){return this},x;function w(G,y){x[G]=M[G]?function(Y){return(_=!_)?{value:m(M[G](Y)),done:G==="return"}:y?y(Y):Y}:y}}function R(M){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var x=M[Symbol.asyncIterator],_;return x?x.call(M):(M=typeof r=="function"?r(M):M[Symbol.iterator](),_={},w("next"),w("throw"),w("return"),_[Symbol.asyncIterator]=function(){return this},_);function w(y){_[y]=M[y]&&function(Y){return new Promise(function(Z,ce){Y=M[y](Y),G(Z,ce,Y.done,Y.value)})}}function G(y,Y,Z,ce){Promise.resolve(ce).then(function(W){y({value:W,done:Z})},Y)}}function b(M,x){return Object.defineProperty?Object.defineProperty(M,"raw",{value:x}):M.raw=x,M}var D=Object.create?function(M,x){Object.defineProperty(M,"default",{enumerable:!0,value:x})}:function(M,x){M.default=x};function L(M){if(M&&M.__esModule)return M;var x={};if(M!=null)for(var _ in M)_!=="default"&&Object.prototype.hasOwnProperty.call(M,_)&&e(x,M,_);return D(x,M),x}function U(M){return M&&M.__esModule?M:{default:M}}function F(M,x){if(!x.has(M))throw new TypeError("attempted to get private field on non-instance");return x.get(M)}function V(M,x,_){if(!x.has(M))throw new TypeError("attempted to set private field on non-instance");return x.set(M,_),_}},758:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var l=o(743),s=o(435),C=o(455),v=o(437),c=function(){function i(){}return i}(),E=function(){function i(){}return i}(),h=function(i){Object(l.a)(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.CustomParts=new E,r.customShaderNameResolve=r.Builder,r.FragmentShader=s.a.ShadersStore.defaultPixelShader,r.VertexShader=s.a.ShadersStore.defaultVertexShader,r}return t.prototype.AttachAfterBind=function(e,n){if(this._newUniformInstances)for(var r in this._newUniformInstances){var a=r.toString().split("-");a[0]=="vec2"?n.setVector2(a[1],this._newUniformInstances[r]):a[0]=="vec3"?n.setVector3(a[1],this._newUniformInstances[r]):a[0]=="vec4"?n.setVector4(a[1],this._newUniformInstances[r]):a[0]=="mat4"?n.setMatrix(a[1],this._newUniformInstances[r]):a[0]=="float"&&n.setFloat(a[1],this._newUniformInstances[r])}if(this._newSamplerInstances)for(var r in this._newSamplerInstances){var a=r.toString().split("-");a[0]=="sampler2D"&&this._newSamplerInstances[r].isReady&&this._newSamplerInstances[r].isReady()&&n.setTexture(a[1],this._newSamplerInstances[r])}},t.prototype.ReviewUniform=function(e,n){if(e=="uniform"&&this._newUniforms)for(var r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")==-1&&n.push(this._newUniforms[r]);if(e=="sampler"&&this._newUniforms)for(var r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")!=-1&&n.push(this._newUniforms[r]);return n},t.prototype.Builder=function(e,n,r,a,f,p){var d=this;if(p&&this._customAttributes&&this._customAttributes.length>0&&p.push.apply(p,this._customAttributes),this.ReviewUniform("uniform",n),this.ReviewUniform("sampler",a),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,t.ShaderIndexer++;var m="custom_"+t.ShaderIndexer,A=this._afterBind.bind(this);return this._afterBind=function(O,R){if(!!R){d.AttachAfterBind(O,R);try{A(O,R)}catch(b){}}},s.a.ShadersStore[m+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(s.a.ShadersStore[m+"VertexShader"]=s.a.ShadersStore[m+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),s.a.ShadersStore[m+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(s.a.ShadersStore[m+"PixelShader"]=s.a.ShadersStore[m+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=m,m},t.prototype.AddUniform=function(e,n,r){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),r&&(n.indexOf("sampler")!=-1?this._newSamplerInstances[n+"-"+e]=r:this._newUniformInstances[n+"-"+e]=r),this._customUniform.push("uniform "+n+" "+e+";"),this._newUniforms.push(e),this},t.prototype.AddAttribute=function(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this},t.prototype.Fragment_Begin=function(e){return this.CustomParts.Fragment_Begin=e,this},t.prototype.Fragment_Definitions=function(e){return this.CustomParts.Fragment_Definitions=e,this},t.prototype.Fragment_MainBegin=function(e){return this.CustomParts.Fragment_MainBegin=e,this},t.prototype.Fragment_Custom_Diffuse=function(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this},t.prototype.Fragment_Custom_Alpha=function(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this},t.prototype.Fragment_Before_Lights=function(e){return this.CustomParts.Fragment_Before_Lights=e,this},t.prototype.Fragment_Before_Fog=function(e){return this.CustomParts.Fragment_Before_Fog=e,this},t.prototype.Fragment_Before_FragColor=function(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this},t.prototype.Vertex_Begin=function(e){return this.CustomParts.Vertex_Begin=e,this},t.prototype.Vertex_Definitions=function(e){return this.CustomParts.Vertex_Definitions=e,this},t.prototype.Vertex_MainBegin=function(e){return this.CustomParts.Vertex_MainBegin=e,this},t.prototype.Vertex_Before_PositionUpdated=function(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this},t.prototype.Vertex_Before_NormalUpdated=function(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this},t.prototype.Vertex_After_WorldPosComputed=function(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this},t.prototype.Vertex_MainEnd=function(e){return this.CustomParts.Vertex_MainEnd=e,this},t.ShaderIndexer=1,t}(C.a);v.a.RegisteredTypes["BABYLON.CustomMaterial"]=h},82:function(J,j,o){"use strict";o.r(j);var l=o(445),s=o(449),C=o(446),v=o(498),c=o(648),E=o(555),h=o(649),i=o(475),t=o(758),e=o(441),n=o(506),r=o(602),a=o(571),f=o(549),p=o(309),d=o(310),m=o(311),A=o(312),O=(D,L,U)=>new Promise((F,V)=>{var M=w=>{try{_(U.next(w))}catch(G){V(G)}},x=w=>{try{_(U.throw(w))}catch(G){V(G)}},_=w=>w.done?F(w.value):Promise.resolve(w.value).then(M,x);_((U=U.apply(D,L)).next())});const R={animate:!0,context:Object(f.a)()},b=D=>O(void 0,[D],function*({canvas:L,width:U,height:F}){const V=new l.a(L,!0),M=new s.a(V);M.clearColor=new e.a(16/255,22/255,26/255);const x=new n.a("camera",-Math.PI/1.7,Math.PI/3.5,1.1,new i.z(0,0,0),M);x.lowerBetaLimit=null,x.upperBetaLimit=null,x.lowerAlphaLimit=null,x.upperAlphaLimit=null,x.allowUpsideDown=!0,x.attachControl(L,!0),x.fov=1,x.minZ=.1,x.wheelPrecision=150;const _=new v.a("hemiLight",new i.z(-1,1,0),M);_.diffuse=new e.a(1,1,1),_.specular=new e.a(1,1,1),_.groundColor=new e.a(1,1,1);const w=new t.a("s",M),G=2e3,y=[],Y=100;for(let z=0;z<Y;z+=1)y.push(new i.z(z,0,0));const Z=C.a.CreateTube("tube",y,.2,5,null,0,M,!0,C.a.DEFAULTSIDE);Z.material=w;const ce=new Float32Array(16*G),W=new Float32Array(G),le=[];for(let z=0;z<G;z+=1)i.k.Translation(0,0,0).copyToArray(ce,z*16),le.push(z);W.set(le),Z.thinInstanceSetBuffer("matrix",ce,16),Z.thinInstanceSetBuffer("idx",W,1),w.AddUniform("iTime","float"),w.AddUniform("maxSegments","float"),w.AddUniform("meshesCount","float"),w.AddUniform("cameraPosition","vec3"),w.AddAttribute("idx"),w.Vertex_Definitions(p.default),w.Vertex_Before_PositionUpdated(d.default),w.Fragment_Definitions(m.default),w.Fragment_Before_FragColor(A.default);const ne=+new Date;let ee=0;w.onBind=()=>{w.getEffect().setFloat("maxSegments",Y),w.getEffect().setFloat("meshesCount",G),w.getEffect().setFloat("cameraPosition",i.z.Zero()),ee=(+new Date-ne)*.001,w.getEffect().setFloat("iTime",ee)};const ae=new r.a("defaultPipeline",!0,M,[x]);ae.imageProcessingEnabled=!1,ae.chromaticAberrationEnabled=!0,ae.chromaticAberration.aberrationAmount=10,ae.grainEnabled=!0,ae.grain.intensity=50,ae.grain.animated=!0;const $=new a.a("mb",M,2,x);return $.motionStrength=1.5,$.isObjectBased=!1,{render({time:z,width:me,height:Ee}){M.render()},resize({pixelRatio:z,width:me,height:Ee}){V.resize()},unload(){V.dispose()}}});j.default={sketch:b,settings:R}}}]);
