(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[41,294,295],{115:function(J,j,o){"use strict";o.r(j);var f=o(445),s=o(449),M=o(498),S=o(475),c=o(441),E=o(506),p=o(648),i=o(758),t=o(649),e=o(666),n=o(602),r=o(446),a=o(570),l=o(442),h=o(549),u=o(409),v=o(410),T=(O,L,x)=>new Promise((U,F)=>{var V=g=>{try{y(x.next(g))}catch(W){F(W)}},b=g=>{try{y(x.throw(g))}catch(W){F(W)}},y=g=>g.done?U(g.value):Promise.resolve(g.value).then(V,b);y((x=x.apply(O,L)).next())});const _={animate:!0,context:Object(h.a)()},R=O=>T(void 0,[O],function*({canvas:L,width:x,height:U}){const F=new f.a(L,!0,{preserveDrawingBuffer:!0,stencil:!0}),V=+new Date,b=new s.a(F);b.clearColor=c.a.FromHexString("#10161A");const y=new E.a("camera",0,0,14,new S.z(0,-5,0),b);y.fov=1.5,y.minZ=.1,y.wheelDeltaPercentage=.1,y.attachControl(L,!0);const g=new M.a("hemiLight",new S.z(0,1,0),b);g.diffuse=new c.a(1,1,1),g.groundColor=new c.a(.75,.75,.75),g.specular=new c.a(0,0,0),g.intensity=1;const W=(se,w)=>{const fe=(()=>{const ee=[],ce=Math.PI*2*120;for(let q=se;q<ce+se;q+=1){const X=.0125,pe=-q*X,_e=5,re=20-Math.PI/4,ve=Math.PI/2,ie=-se*X*ve-15,Ee=_e+Math.cos(pe*re+pe*Math.PI)*1,le=Math.cos(pe*re+pe*Math.PI+Math.PI/2)*Math.PI/2,B=Math.cos(pe*5)*Ee,m=pe*ve+le-ie,N=Math.sin(pe*5)*Ee;ee.push(new S.z(B,m,N))}return ee})();return p.a.CreateTube("torus",{path:fe,radius:.7,tessellation:11,sideOrientation:r.a.DOUBLESIDE,updatable:!0,instance:w},b)};let G=W(0);G.rotate(new S.z(1,0,0),Math.PI);const D=new i.a("meshMaterial",b);D.emissiveColor=c.a.Black(),D.specularColor=c.a.Black(),D.diffuseTexture=new l.a("NONE",b),G.material=D,D.Fragment_Definitions(u.default),D.Fragment_Custom_Diffuse(v.default),D.AddUniform("iTime","float"),D.AddUniform("iFrame","float"),D.AddUniform("camPos","vec3");let K=0;D.onBind=()=>{const se=(+new Date-V)*.001;D.getEffect().setFloat("iTime",se),D.getEffect().setFloat("iFrame",K),D.getEffect().setVector3("camPos",y.position)};const Y=new n.a("default",!0,b,[y]);return Y.fxaaEnabled=!0,Y.imageProcessingEnabled=!1,Y.samples=16,Y.chromaticAberrationEnabled=!0,Y.chromaticAberration.aberrationAmount=10,Y.bloomEnabled=!0,Y.bloomThreshold=.25,Y.bloomWeight=.65,Y.bloomKernel=100,Y.bloomScale=.9,Y.grainEnabled=!0,Y.grain.intensity=5,Y.grain.animated=!0,Y.depthOfFieldEnabled=!0,Y.depthOfFieldBlurLevel=a.b.Low,Y.depthOfField.fStop=.5,Y.depthOfField.focalLength=800,Y.depthOfField.focusDistance=1e4,Y.depthOfField.lensSize=10,{render({time:se,deltaTime:w}){G=W(K,G),K+=1,b.render()},resize({pixelRatio:se,width:w,height:fe}){F.resize()},unload(){F.dispose()}}});j.default={sketch:R,settings:_}},409:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
vec3 hsv2rgb_smooth(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}
`},410:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
vec2 uv = vDiffuseUV+uvOffset;

float cDot = dot(normalW, normalize(camPos));

float bz = smoothstep(1.0, .0, fract(uv.y*2.));

baseColor.rgb = hsv2rgb_smooth(vec3(uv.y + bz + iFrame*.001, .75, 1.));

baseColor *= smoothstep(1.5, .0, cDot*1.1);
`},444:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var f=o(434),s=o(490),M=o(438),S=o(436),c=o(534),E=o(445),p=o(500),i=o(439),t=o(437),e=function(){function n(r,a,l,h,u,v,T,_,R,O,L,x,U,F,V){T===void 0&&(T=1),O===void 0&&(O=null),L===void 0&&(L=0),x===void 0&&(x="postprocess"),F===void 0&&(F=!1),V===void 0&&(V=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new s.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new S.d(1,1),this._texelSize=S.d.Zero(),this.onActivateObservable=new M.c,this.onSizeChangedObservable=new M.c,this.onApplyObservable=new M.c,this.onBeforeRenderObservable=new M.c,this.onAfterRenderObservable=new M.c,this.name=r,v!=null?(this._camera=v,this._scene=v.getScene(),v.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):_&&(this._engine=_,this._engine.postProcesses.push(this)),this._options=u,this.renderTargetSamplingMode=T||1,this._reusable=R||!1,this._textureType=L,this._textureFormat=V,this._samplers=h||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=x,this._parameters=l||[],this._parameters.push("scale"),this._indexParameters=U,F||this.updateEffect(O)}return Object.defineProperty(n.prototype,"samples",{get:function(){return this._samples},set:function(r){var a=this;this._samples=Math.min(r,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(l){l.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(l,a._samples)})},enumerable:!1,configurable:!0}),n.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(n.prototype,"onActivate",{set:function(r){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),r&&(this._onActivateObserver=this.onActivateObservable.add(r))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onSizeChanged",{set:function(r){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onApply",{set:function(r){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onBeforeRender",{set:function(r){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onAfterRender",{set:function(r){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(r){this._forcedOutputTexture=r},enumerable:!1,configurable:!0}),n.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},n.prototype.getCamera=function(){return this._camera},Object.defineProperty(n.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"PostProcess"},n.prototype.getEngine=function(){return this._engine},n.prototype.getEffect=function(){return this._effect},n.prototype.shareOutputWith=function(r){return this._disposeTextures(),this._shareOutputWithPostProcess=r,this},n.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new s.a(2)),this._shareOutputWithPostProcess=null},n.prototype.updateEffect=function(r,a,l,h,u,v,T,_){r===void 0&&(r=null),a===void 0&&(a=null),l===void 0&&(l=null),this._postProcessDefines=r,this._effect=this._engine.createEffect({vertex:T!=null?T:this._vertexUrl,fragment:_!=null?_:this._fragmentUrl},["position"],a||this._parameters,l||this._samplers,r!==null?r:"",void 0,u,v,h||this._indexParameters)},n.prototype.isReusable=function(){return this._reusable},n.prototype.markTextureDirty=function(){this.width=-1},n.prototype._createRenderTargetTexture=function(r,a,l){l===void 0&&(l=0);for(var h=0;h<this._textureCache.length;h++)if(this._textureCache[h].texture.width===r.width&&this._textureCache[h].texture.height===r.height&&this._textureCache[h].postProcessChannel===l)return this._textureCache[h].texture;var u=this._engine.createRenderTargetTexture(r,a);return this._textureCache.push({texture:u,postProcessChannel:l,lastUsedRenderId:-1}),u},n.prototype._flushTextureCache=function(){for(var r=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(r-this._textureCache[a].lastUsedRenderId>100){for(var l=!1,h=0;h<this._textures.length;h++)if(this._textures.data[h]===this._textureCache[a].texture){l=!0;break}l||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},n.prototype._resize=function(r,a,l,h,u){this._textures.length>0&&this._textures.reset(),this.width=r,this.height=a;var v={width:this.width,height:this.height},T={generateMipMaps:h,generateDepthBuffer:u||l._postProcesses.indexOf(this)===0,generateStencilBuffer:(u||l._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(v,T,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(v,T,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},n.prototype.activate=function(r,a,l){var h=this;a===void 0&&(a=null),r=r||this._camera;var u=r.getScene(),v=u.getEngine(),T=v.getCaps().maxTextureSize,_=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,R=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,O=r.parent;O&&(O.leftCamera==r||O.rightCamera==r)&&(_/=2);var L=this._options.width||_,x=this._options.height||R,U=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var F=v.currentViewport;F&&(L*=F.width,x*=F.height)}(U||this.alwaysForcePOT)&&(this._options.width||(L=v.needPOTTextures?E.a.GetExponentOfTwo(L,T,this.scaleMode):L),this._options.height||(x=v.needPOTTextures?E.a.GetExponentOfTwo(x,T,this.scaleMode):x)),(this.width!==L||this.height!==x)&&this._resize(L,x,r,U,l),this._textures.forEach(function(g){g.samples!==h.samples&&h._engine.updateRenderTargetTextureSampleCount(g,h.samples)}),this._flushTextureCache(),this._renderId++}var V;if(this._shareOutputWithPostProcess)V=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)V=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{V=this.inputTexture;for(var b=void 0,y=0;y<this._textureCache.length;y++)if(this._textureCache[y].texture===V){b=this._textureCache[y];break}b&&(b.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(_/L,R/x),this._engine.bindFramebuffer(V,0,_,R,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(V,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(r),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:u.clearColor,u._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),V},Object.defineProperty(n.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),n.prototype.isReady=function(){return this._effect&&this._effect.isReady()},n.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var r;return this._shareOutputWithPostProcess?r=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?r=this._forcedOutputTexture:r=this.inputTexture,this._effect._bindTexture("textureSampler",r),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},n.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},n.prototype._disposeTextureCache=function(){for(var r=this._textureCache.length-1;r>=0;r--)this._engine._releaseTexture(this._textureCache[r].texture);this._textureCache.length=0},n.prototype.setPrePassRenderer=function(r){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=r.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},n.prototype.dispose=function(r){r=r||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!r){if(r.detachPostProcess(this),a=r._postProcesses.indexOf(this),a===0&&r._postProcesses.length>0){var l=this._camera._getFirstPostProcess();l&&l.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},n.prototype.serialize=function(){var r=i.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return r.customType="BABYLON."+this.getClassName(),r.cameraId=a?a.id:null,r.reusable=this._reusable,r.textureType=this._textureType,r.fragmentUrl=this._fragmentUrl,r.parameters=this._parameters,r.samplers=this._samplers,r.options=this._options,r.defines=this._postProcessDefines,r.textureFormat=this._textureFormat,r.vertexUrl=this._vertexUrl,r.indexParameters=this._indexParameters,r},n.prototype.clone=function(){var r=this.serialize();r._engine=this._engine,r.cameraId=null;var a=n.Parse(r,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},n.Parse=function(r,a,l){var h=t.a.GetClass(r.customType);if(!h||!h._Parse)return null;var u=a?a.getCameraByID(r.cameraId):null;return h._Parse(r,u,a,l)},n._Parse=function(r,a,l,h){return i.a.Parse(function(){return new n(r.name,r.fragmentUrl,r.parameters,r.samplers,r.options,a,r.renderTargetSamplingMode,r._engine,r.reusable,r.defines,r.textureType,r.vertexUrl,r.indexParameters,!1,r.textureFormat)},r,l,h)},Object(f.c)([Object(i.c)()],n.prototype,"uniqueId",void 0),Object(f.c)([Object(i.c)()],n.prototype,"name",void 0),Object(f.c)([Object(i.c)()],n.prototype,"width",void 0),Object(f.c)([Object(i.c)()],n.prototype,"height",void 0),Object(f.c)([Object(i.c)()],n.prototype,"renderTargetSamplingMode",void 0),Object(f.c)([Object(i.f)()],n.prototype,"clearColor",void 0),Object(f.c)([Object(i.c)()],n.prototype,"autoClear",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alphaMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alphaConstants",void 0),Object(f.c)([Object(i.c)()],n.prototype,"enablePixelPerfectMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"forceFullscreenViewport",void 0),Object(f.c)([Object(i.c)()],n.prototype,"scaleMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alwaysForcePOT",void 0),Object(f.c)([Object(i.c)("samples")],n.prototype,"_samples",void 0),Object(f.c)([Object(i.c)()],n.prototype,"adaptScaleToCurrentViewport",void 0),n}();t.a.RegisteredTypes["BABYLON.PostProcess"]=e},458:function(J,j,o){"use strict";o.d(j,"a",function(){return n});var f=o(434),s=o(438),M=o(443),S=o(436),c=o(442),E=o(590),p=o(591),i=o(500),t=o(522),e=o(445),n=function(r){Object(f.d)(a,r);function a(l,h,u,v,T,_,R,O,L,x,U,F,V,b){T===void 0&&(T=!0),_===void 0&&(_=0),R===void 0&&(R=!1),O===void 0&&(O=c.a.TRILINEAR_SAMPLINGMODE),L===void 0&&(L=!0),x===void 0&&(x=!1),U===void 0&&(U=!1),F===void 0&&(F=5),V===void 0&&(V=!1);var y,g=r.call(this,null,u,!v,void 0,O,void 0,void 0,void 0,void 0,F)||this;return g.renderParticles=!0,g.renderSprites=!1,g.ignoreCameraViewport=!1,g.onBeforeBindObservable=new s.c,g.onAfterUnbindObservable=new s.c,g.onBeforeRenderObservable=new s.c,g.onAfterRenderObservable=new s.c,g.onClearObservable=new s.c,g.onResizeObservable=new s.c,g._currentRefreshId=-1,g._refreshRate=1,g._samples=1,g.boundingBoxPosition=S.e.Zero(),u=g.getScene(),!u||(g._coordinatesMode=c.a.PROJECTION_MODE,g.renderList=new Array,g.name=l,g.isRenderTarget=!0,g._initialSizeParameter=h,g._processSizeParameter(h),g._resizeObserver=g.getScene().getEngine().onResizeObservable.add(function(){}),g._generateMipMaps=!!v,g._doNotChangeAspectRatio=T,g._renderingManager=new p.b(u),g._renderingManager._useSceneAutoClearSetup=!0,U)||(g._renderTargetOptions={generateMipMaps:v,type:_,format:(y=g._format)!==null&&y!==void 0?y:void 0,samplingMode:g.samplingMode,generateDepthBuffer:L,generateStencilBuffer:x,samples:b},g.samplingMode===c.a.NEAREST_SAMPLINGMODE&&(g.wrapU=c.a.CLAMP_ADDRESSMODE,g.wrapV=c.a.CLAMP_ADDRESSMODE),V||(R?(g._texture=u.getEngine().createRenderTargetCubeTexture(g.getRenderSize(),g._renderTargetOptions),g.coordinatesMode=c.a.INVCUBIC_MODE,g._textureMatrix=S.a.Identity()):g._texture=u.getEngine().createRenderTargetTexture(g._size,g._renderTargetOptions),b!==void 0&&(g.samples=b))),g}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(l){this._renderList=l,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(l){var h=this,u=l.push;l.push=function(){for(var T=[],_=0;_<arguments.length;_++)T[_]=arguments[_];var R=l.length===0,O=u.apply(l,T);return R&&h.getScene()&&h.getScene().meshes.forEach(function(L){L._markSubMeshesAsLightDirty()}),O};var v=l.splice;l.splice=function(T,_){var R=v.apply(l,[T,_]);return l.length===0&&h.getScene().meshes.forEach(function(O){O._markSubMeshesAsLightDirty()}),R}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(l){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(l){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(l){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(l){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(l){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(l))){this._boundingBoxSize=l;var h=this.getScene();h&&h.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var l;return((l=this.getInternalTexture())===null||l===void 0?void 0:l._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(l,h,u,v){var T;l===void 0&&(l=0),h===void 0&&(h=!0),u===void 0&&(u=!1),v===void 0&&(v=1);var _=this.getInternalTexture();if(!(!this.getScene()||!_)){(T=_._depthStencilTexture)===null||T===void 0||T.dispose();var R=this.getScene().getEngine();_._depthStencilTexture=R.createDepthStencilTexture(this._size,{bilinearFiltering:h,comparisonFunction:l,generateStencil:u,isCube:this.isCube,samples:v})}},a.prototype._processSizeParameter=function(l){if(l.ratio){this._sizeRatio=l.ratio;var h=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(h.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(h.getRenderHeight(),this._sizeRatio)}}else this._size=l},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(l){if(this._samples!==l){var h=this.getScene();!h||(this._samples=h.getEngine().updateRenderTargetTextureSampleCount(this._texture,l))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(l){this._refreshRate=l,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(l){if(!this._postProcessManager){var h=this.getScene();if(!h)return;this._postProcessManager=new E.a(h),this._postProcesses=new Array}this._postProcesses.push(l),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(l){if(l===void 0&&(l=!1),!!this._postProcesses){if(l)for(var h=0,u=this._postProcesses;h<u.length;h++){var v=u[h];v.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(l){if(!!this._postProcesses){var h=this._postProcesses.indexOf(l);h!==-1&&(this._postProcesses.splice(h,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var l=this._size.layers;return l||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(l){var h=Math.max(1,this.getRenderSize()*l);this.resize(h)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:r.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(l){var h=this.isCube;this.releaseInternalTexture();var u=this.getScene();!u||(this._processSizeParameter(l),h?this._texture=u.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=u.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(l,h){l===void 0&&(l=!1),h===void 0&&(h=!1);var u=this.getScene();if(!!u){var v=u.getEngine();if(this.useCameraPostProcesses!==void 0&&(l=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var T=0;T<this._waitingRenderList.length;T++){var _=this._waitingRenderList[T],R=u.getMeshByID(_);R&&this.renderList.push(R)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var u=this.getScene();if(!u)return;for(var O=u.meshes,T=0;T<O.length;T++){var L=O[T];this.renderListPredicate(L)&&this.renderList.push(L)}}this.onBeforeBindObservable.notifyObservers(this);var x;if(this.activeCamera?(x=this.activeCamera,v.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==u.activeCamera&&u.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(x=u.activeCamera,x&&v.setViewport(x.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var U=0;U<this.getRenderLayers();U++)this.renderToTarget(0,l,h,U,x),u.incrementRenderId(),u.resetCachedMaterial();else if(this.isCube)for(var F=0;F<6;F++)this.renderToTarget(F,l,h,void 0,x),u.incrementRenderId(),u.resetCachedMaterial();else this.renderToTarget(0,l,h,void 0,x);this.onAfterUnbindObservable.notifyObservers(this),u.activeCamera&&((u.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==u.activeCamera)&&u.setTransformMatrix(u.activeCamera.getViewMatrix(),u.activeCamera.getProjectionMatrix(!0)),v.setViewport(u.activeCamera.viewport)),u.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(l,h){var u=128,v=l*h,T=e.a.NearestPOT(v+u*u/(u+v));return Math.min(e.a.FloorPOT(l),T)},a.prototype._prepareRenderingManager=function(l,h,u,v){var T=this.getScene();if(!!T){this._renderingManager.reset();for(var _=T.getRenderId(),R=0;R<h;R++){var O=l[R];if(O&&!O.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(O,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!O.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!O._internalAbstractMeshDataInfo._currentLODIsUpToDate&&T.activeCamera&&(O._internalAbstractMeshDataInfo._currentLOD=T.customLODSelector?T.customLODSelector(O,T.activeCamera):O.getLOD(T.activeCamera),O._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!O._internalAbstractMeshDataInfo._currentLOD)continue;var L=O._internalAbstractMeshDataInfo._currentLOD;L._preActivateForIntermediateRendering(_);var x=void 0;if(v&&u?x=(O.layerMask&u.layerMask)==0:x=!1,O.isEnabled()&&O.isVisible&&O.subMeshes&&!x&&(L!==O&&L._activate(_,!0),O._activate(_,!0)&&O.subMeshes.length)){O.isAnInstance?O._internalAbstractMeshDataInfo._actAsRegularMesh&&(L=O):L._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,L._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var U=0;U<L.subMeshes.length;U++){var F=L.subMeshes[U];this._renderingManager.dispatch(F,L)}}}}for(var V=0;V<T.particleSystems.length;V++){var b=T.particleSystems[V],y=b.emitter;!b.isStarted()||!y||!y.position||!y.isEnabled()||l.indexOf(y)>=0&&this._renderingManager.dispatchParticles(b)}}},a.prototype._bindFrameBuffer=function(l,h){l===void 0&&(l=0),h===void 0&&(h=0);var u=this.getScene();if(!!u){var v=u.getEngine();this._texture&&v.bindFramebuffer(this._texture,this.isCube?l:void 0,void 0,void 0,this.ignoreCameraViewport,0,h)}},a.prototype.unbindFrameBuffer=function(l,h){var u=this;!this._texture||l.unBindFramebuffer(this._texture,this.isCube,function(){u.onAfterRenderObservable.notifyObservers(h)})},a.prototype._prepareFrame=function(l,h,u,v){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!v||!l.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(h,u)},a.prototype.renderToTarget=function(l,h,u,v,T){v===void 0&&(v=0),T===void 0&&(T=null);var _=this.getScene();if(!!_){var R=_.getEngine();if(!!this._texture){R._debugPushGroup("render to face #"+l+" layer #"+v,1),this._prepareFrame(_,l,v,h),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(v):this.onBeforeRenderObservable.notifyObservers(l);var O=null,L=this.renderList?this.renderList:_.getActiveMeshes().data,x=this.renderList?this.renderList.length:_.getActiveMeshes().length;this.getCustomRenderList&&(O=this.getCustomRenderList(this.is2DArray?v:l,L,x)),O?this._prepareRenderingManager(O,O.length,T,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(L,x,T,!this.renderList),this._defaultRenderListPrepared=!0),O=L);for(var U=0,F=_._beforeRenderTargetClearStage;U<F.length;U++){var V=F[U];V.action(this,l,v)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(R):R.clear(this.clearColor||_.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||_.updateTransformMatrix(!0);for(var b=0,y=_._beforeRenderTargetDrawStage;b<y.length;b++){var V=y[b];V.action(this,l,v)}this._renderingManager.render(this.customRenderFunction,O,this.renderParticles,this.renderSprites);for(var g=0,W=_._afterRenderTargetDrawStage;g<W.length;g++){var V=W[g];V.action(this,l,v)}var G=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,l,this._postProcesses,this.ignoreCameraViewport):h&&_.postProcessManager._finalizeFrame(!1,this._texture,l),this._texture.generateMipMaps=G,this._doNotChangeAspectRatio||_.updateTransformMatrix(!0),u&&M.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),R),this.unbindFrameBuffer(R,l),this.isCube&&l===5&&R.generateMipMapsForCubemap(this._texture),R._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(l,h,u,v){h===void 0&&(h=null),u===void 0&&(u=null),v===void 0&&(v=null),this._renderingManager.setRenderingOrder(l,h,u,v)},a.prototype.setRenderingAutoClearDepthStencil=function(l,h){this._renderingManager.setRenderingAutoClearDepthStencil(l,h),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var l=this.getSize(),h=new a(this.name,l,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return h.hasAlpha=this.hasAlpha,h.level=this.level,h.coordinatesMode=this.coordinatesMode,this.renderList&&(h.renderList=this.renderList.slice(0)),h},a.prototype.serialize=function(){if(!this.name)return null;var l=r.prototype.serialize.call(this);if(l.renderTargetSize=this.getRenderSize(),l.renderList=[],this.renderList)for(var h=0;h<this.renderList.length;h++)l.renderList.push(this.renderList[h].id);return l},a.prototype.disposeFramebufferObjects=function(){var l=this.getInternalTexture(),h=this.getScene();l&&h&&h.getEngine()._releaseFramebufferObjects(l)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var l=this.getScene();if(!!l){var h=l.customRenderTargets.indexOf(this);h>=0&&l.customRenderTargets.splice(h,1);for(var u=0,v=l.cameras;u<v.length;u++){var T=v[u];h=T.customRenderTargets.indexOf(this),h>=0&&T.customRenderTargets.splice(h,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),r.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(c.a);c.a._CreateRenderTargetTexture=function(r,a,l,h){return new n(r,a,l,h)}},466:function(J,j,o){"use strict";o.d(j,"a",function(){return s});var f=o(443),s=function(){function M(S,c,E,p){this._name=c,this._singleInstance=p||!0,this._getPostProcesses=E,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(M.prototype,"isSupported",{get:function(){for(var S in this._postProcesses)if(this._postProcesses.hasOwnProperty(S)){for(var c=this._postProcesses[S],E=0;E<c.length;E++)if(!c[E].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),M.prototype._update=function(){},M.prototype._attachCameras=function(S){var c=this,E,p=f.b.MakeArray(S||this._cameras);if(!!p)for(var i=0;i<p.length;i++){var t=p[i];if(!!t){var e=t.name;if(this._singleInstance?E=0:E=e,!this._postProcesses[E]){var n=this._getPostProcesses();n&&(this._postProcesses[E]=Array.isArray(n)?n:[n])}this._indicesForCamera[e]||(this._indicesForCamera[e]=[]),this._postProcesses[E].forEach(function(r){var a=t.attachPostProcess(r);c._indicesForCamera[e].push(a)}),this._cameras[e]||(this._cameras[e]=t)}}},M.prototype._detachCameras=function(S){var c=f.b.MakeArray(S||this._cameras);if(!!c)for(var E=0;E<c.length;E++){var p=c[E],i=p.name,t=this._postProcesses[this._singleInstance?0:i];t&&t.forEach(function(e){p.detachPostProcess(e)}),this._cameras[i]&&(this._cameras[i]=null)}},M.prototype._enable=function(S){var c=this,E=f.b.MakeArray(S||this._cameras);if(!!E)for(var p=0;p<E.length;p++)for(var i=E[p],t=i.name,e=0;e<this._indicesForCamera[t].length;e++)(i._postProcesses[this._indicesForCamera[t][e]]===void 0||i._postProcesses[this._indicesForCamera[t][e]]===null)&&this._postProcesses[this._singleInstance?0:t].forEach(function(n){E[p].attachPostProcess(n,c._indicesForCamera[t][e])})},M.prototype._disable=function(S){var c=f.b.MakeArray(S||this._cameras);if(!!c)for(var E=0;E<c.length;E++){var p=c[E],i=p.name;this._postProcesses[this._singleInstance?0:i].forEach(function(t){p.detachPostProcess(t)})}},M.prototype.getPostProcesses=function(S){return this._singleInstance?this._postProcesses[0]:S?this._postProcesses[S.name]:null},M}()},472:function(J,j,o){"use strict";o.d(j,"a",function(){return V});var f=o(434),s=o(444),M=o(442),S=o(435),c="kernelBlurVaryingDeclaration",E="varying vec2 sampleCoord{X};";S.a.IncludesShadersStore[c]=E;var p={name:c,shader:E},i=o(535),t="kernelBlurFragment",e=`#ifdef DOF
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
#endif`;S.a.IncludesShadersStore[t]=e;var n={name:t,shader:e},r="kernelBlurFragment2",a=`#ifdef DOF
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
#endif`;S.a.IncludesShadersStore[r]=a;var l={name:r,shader:a},h="kernelBlurPixelShader",u=`
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
}`;S.a.ShadersStore[h]=u;var v={name:h,shader:u},T="kernelBlurVertex",_="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";S.a.IncludesShadersStore[T]=_;var R={name:T,shader:_},O="kernelBlurVertexShader",L=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;S.a.ShadersStore[O]=L;var x={name:O,shader:L},U=o(437),F=o(439),V=function(b){Object(f.d)(y,b);function y(g,W,G,D,K,Y,se,w,fe,ne,ee){Y===void 0&&(Y=M.a.BILINEAR_SAMPLINGMODE),fe===void 0&&(fe=0),ne===void 0&&(ne=""),ee===void 0&&(ee=!1);var ce=b.call(this,g,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],D,K,Y,se,w,null,fe,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return ce.blockCompilation=ee,ce._packedFloat=!1,ce._staticDefines="",ce._staticDefines=ne,ce.direction=W,ce.onApplyObservable.add(function(q){ce._outputTexture?q.setFloat2("delta",1/ce._outputTexture.width*ce.direction.x,1/ce._outputTexture.height*ce.direction.y):q.setFloat2("delta",1/ce.width*ce.direction.x,1/ce.height*ce.direction.y)}),ce.kernel=G,ce}return Object.defineProperty(y.prototype,"kernel",{get:function(){return this._idealKernel},set:function(g){this._idealKernel!==g&&(g=Math.max(g,1),this._idealKernel=g,this._kernel=this._nearestBestKernel(g),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(g){this._packedFloat!==g&&(this._packedFloat=g,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),y.prototype.getClassName=function(){return"BlurPostProcess"},y.prototype.updateEffect=function(g,W,G,D,K,Y){g===void 0&&(g=null),W===void 0&&(W=null),G===void 0&&(G=null),this._updateParameters(K,Y)},y.prototype._updateParameters=function(g,W){for(var G=this._kernel,D=(G-1)/2,K=[],Y=[],se=0,w=0;w<G;w++){var fe=w/(G-1),ne=this._gaussianWeight(fe*2-1);K[w]=w-D,Y[w]=ne,se+=ne}for(var w=0;w<Y.length;w++)Y[w]/=se;for(var ee=[],ce=[],q=[],w=0;w<=D;w+=2){var X=Math.min(w+1,Math.floor(D)),pe=w===X;if(pe)q.push({o:K[w],w:Y[w]});else{var _e=X===D,re=Y[w]+Y[X]*(_e?.5:1),ve=K[w]+1/(1+Y[w]/Y[X]);ve===0?(q.push({o:K[w],w:Y[w]}),q.push({o:K[w+1],w:Y[w+1]})):(q.push({o:ve,w:re}),q.push({o:-ve,w:re}))}}for(var w=0;w<q.length;w++)ce[w]=q[w].o,ee[w]=q[w].w;K=ce,Y=ee;var ie=this.getEngine().getCaps().maxVaryingVectors,Ee=Math.max(ie,0)-1,le=Math.min(K.length,Ee),B="";B+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(B+="#define CENTER_WEIGHT "+this._glslFloat(Y[le-1])+`\r
`,le--);for(var w=0;w<le;w++)B+="#define KERNEL_OFFSET"+w+" "+this._glslFloat(K[w])+`\r
`,B+="#define KERNEL_WEIGHT"+w+" "+this._glslFloat(Y[w])+`\r
`;for(var m=0,w=Ee;w<K.length;w++)B+="#define KERNEL_DEP_OFFSET"+m+" "+this._glslFloat(K[w])+`\r
`,B+="#define KERNEL_DEP_WEIGHT"+m+" "+this._glslFloat(Y[w])+`\r
`,m++;this.packedFloat&&(B+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,b.prototype.updateEffect.call(this,B,null,null,{varyingCount:le,depCount:m},g,W)},y.prototype._nearestBestKernel=function(g){for(var W=Math.round(g),G=0,D=[W,W-1,W+1,W-2,W+2];G<D.length;G++){var K=D[G];if(K%2!=0&&Math.floor(K/2)%2==0&&K>0)return Math.max(K,3)}return Math.max(W,3)},y.prototype._gaussianWeight=function(g){var W=1/3,G=Math.sqrt(2*Math.PI)*W,D=-(g*g/(2*W*W)),K=1/G*Math.exp(D);return K},y.prototype._glslFloat=function(g,W){return W===void 0&&(W=8),g.toFixed(W).replace(/0+$/,"")},y._Parse=function(g,W,G,D){return F.a.Parse(function(){return new y(g.name,g.direction,g.kernel,g.options,W,g.renderTargetSamplingMode,G.getEngine(),g.reusable,g.textureType,void 0,!1)},g,G,D)},Object(f.c)([Object(F.c)("kernel")],y.prototype,"_kernel",void 0),Object(f.c)([Object(F.c)("packedFloat")],y.prototype,"_packedFloat",void 0),Object(f.c)([Object(F.n)()],y.prototype,"direction",void 0),y}(s.a);U.a.RegisteredTypes["BABYLON.BlurPostProcess"]=V},479:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var f=o(434),s=o(440),M=o(442),S=o(532),c=o(596),E=function(p){Object(f.d)(i,p);function i(t,e,n,r,a,l,h){n===void 0&&(n=null),r===void 0&&(r=!1),a===void 0&&(a=3),l===void 0&&(l=5);var u=p.call(this,null,n,!r,h,a,void 0,void 0,void 0,void 0,l)||this;u.name=t,u.wrapU=M.a.CLAMP_ADDRESSMODE,u.wrapV=M.a.CLAMP_ADDRESSMODE,u._generateMipMaps=r;var v=u._getEngine();if(!v)return u;e.getContext?(u._canvas=e,u._texture=v.createDynamicTexture(e.width,e.height,r,a)):(u._canvas=c.a.CreateCanvas(1,1),e.width||e.width===0?u._texture=v.createDynamicTexture(e.width,e.height,r,a):u._texture=v.createDynamicTexture(e,e,r,a));var T=u.getSize();return u._canvas.width=T.width,u._canvas.height=T.height,u._context=u._canvas.getContext("2d"),u}return i.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(i.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),i.prototype._recreate=function(t){this._canvas.width=t.width,this._canvas.height=t.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(t.width,t.height,this._generateMipMaps,this.samplingMode)},i.prototype.scale=function(t){var e=this.getSize();e.width*=t,e.height*=t,this._recreate(e)},i.prototype.scaleTo=function(t,e){var n=this.getSize();n.width=t,n.height=e,this._recreate(n)},i.prototype.getContext=function(){return this._context},i.prototype.clear=function(){var t=this.getSize();this._context.fillRect(0,0,t.width,t.height)},i.prototype.update=function(t,e){e===void 0&&(e=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,t===void 0?!0:t,e,this._format||void 0)},i.prototype.drawText=function(t,e,n,r,a,l,h,u){u===void 0&&(u=!0);var v=this.getSize();if(l&&(this._context.fillStyle=l,this._context.fillRect(0,0,v.width,v.height)),this._context.font=r,e==null){var T=this._context.measureText(t);e=(v.width-T.width)/2}if(n==null){var _=parseInt(r.replace(/\D/g,""));n=v.height/2+_/3.65}this._context.fillStyle=a||"",this._context.fillText(t,e,n),u&&this.update(h)},i.prototype.clone=function(){var t=this.getScene();if(!t)return this;var e=this.getSize(),n=new i(this.name,e,t,this._generateMipMaps);return n.hasAlpha=this.hasAlpha,n.level=this.level,n.wrapU=this.wrapU,n.wrapV=this.wrapV,n},i.prototype.serialize=function(){var t=this.getScene();t&&!t.isReady()&&s.a.Warn("The scene must be ready before serializing the dynamic texture");var e=p.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(e.base64String=this._canvas.toDataURL()),e.invertY=this._invertY,e.samplingMode=this.samplingMode,e},i.prototype._IsCanvasElement=function(t){return t.toDataURL!==void 0},i.prototype._rebuild=function(){this.update()},i}(M.a)},481:function(J,j,o){"use strict";o.d(j,"a",function(){return S});var f=o(434),s=o(443),M=o(439),S=function(){function c(E,p){this.engine=E,this._name=p,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(c.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(c.prototype,"isSupported",{get:function(){for(var E in this._renderEffects)if(this._renderEffects.hasOwnProperty(E)&&!this._renderEffects[E].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),c.prototype.addEffect=function(E){this._renderEffects[E._name]=E},c.prototype._rebuild=function(){},c.prototype._enableEffect=function(E,p){var i=this._renderEffects[E];!i||i._enable(s.b.MakeArray(p||this._cameras))},c.prototype._disableEffect=function(E,p){var i=this._renderEffects[E];!i||i._disable(s.b.MakeArray(p||this._cameras))},c.prototype._attachCameras=function(E,p){var i=s.b.MakeArray(E||this._cameras);if(!!i){var t=[],e;for(e=0;e<i.length;e++){var n=i[e];if(!!n){var r=n.name;this._cameras.indexOf(n)===-1?this._cameras[r]=n:p&&t.push(e)}}for(e=0;e<t.length;e++)i.splice(t[e],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(i)}},c.prototype._detachCameras=function(E){var p=s.b.MakeArray(E||this._cameras);if(!!p){for(var i in this._renderEffects)this._renderEffects.hasOwnProperty(i)&&this._renderEffects[i]._detachCameras(p);for(var t=0;t<p.length;t++)this._cameras.splice(this._cameras.indexOf(p[t]),1)}},c.prototype._update=function(){for(var E in this._renderEffects)this._renderEffects.hasOwnProperty(E)&&this._renderEffects[E]._update();for(var p=0;p<this._cameras.length;p++)if(!!this._cameras[p]){var i=this._cameras[p].name;this._renderEffectsForIsolatedPass[i]&&this._renderEffectsForIsolatedPass[i]._update()}},c.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},c.prototype._enableMSAAOnFirstPostProcess=function(E){if(!this.engine._features.supportMSAA)return!1;var p=Object.keys(this._renderEffects);if(p.length>0){var i=this._renderEffects[p[0]].getPostProcesses();i&&(i[0].samples=E)}return!0},c.prototype.setPrePassRenderer=function(E){return!1},c.prototype.dispose=function(){},Object(f.c)([Object(M.c)()],c.prototype,"_name",void 0),c}()},482:function(J,j,o){"use strict";o.d(j,"a",function(){return S});var f=o(452),s=o(548),M=o(449);Object.defineProperty(M.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var c=this._getComponent(f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);c||(c=new S(this),this._addComponent(c)),this._postProcessRenderPipelineManager=new s.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var S=function(){function c(E){this.name=f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(f.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},c.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},c.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},c}()},486:function(J,j,o){"use strict";o.d(j,"b",function(){return a}),o.d(j,"a",function(){return l});var f=o(434),s=o(444),M=o(445),S=o(435),c="passPixelShader",E=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;S.a.ShadersStore[c]=E;var p={name:c,shader:E},i="passCubePixelShader",t=`
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
}`;S.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(h){Object(f.d)(u,h);function u(v,T,_,R,O,L,x,U){return _===void 0&&(_=null),x===void 0&&(x=0),U===void 0&&(U=!1),h.call(this,v,"pass",null,null,T,_,R,O,L,void 0,x,void 0,null,U)||this}return u.prototype.getClassName=function(){return"PassPostProcess"},u._Parse=function(v,T,_,R){return r.a.Parse(function(){return new u(v.name,v.options,T,v.renderTargetSamplingMode,v._engine,v.reusable)},v,_,R)},u}(s.a);n.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var l=function(h){Object(f.d)(u,h);function u(v,T,_,R,O,L,x,U){_===void 0&&(_=null),x===void 0&&(x=0),U===void 0&&(U=!1);var F=h.call(this,v,"passCube",null,null,T,_,R,O,L,"#define POSITIVEX",x,void 0,null,U)||this;return F._face=0,F}return Object.defineProperty(u.prototype,"face",{get:function(){return this._face},set:function(v){if(!(v<0||v>5))switch(this._face=v,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),u.prototype.getClassName=function(){return"PassCubePostProcess"},u._Parse=function(v,T,_,R){return r.a.Parse(function(){return new u(v.name,v.options,T,v.renderTargetSamplingMode,v._engine,v.reusable)},v,_,R)},u}(s.a);M.a._RescalePostProcessFactory=function(h){return new a("rescale",1,null,2,h,!1,0)}},498:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var f=o(434),s=o(439),M=o(436),S=o(441),c=o(453),E=o(484);c.a.AddNodeConstructor("Light_Type_3",function(i,t){return function(){return new p(i,M.e.Zero(),t)}});var p=function(i){Object(f.d)(t,i);function t(e,n,r){var a=i.call(this,e,r)||this;return a.groundColor=new S.a(0,0,0),a.direction=n||M.e.Up(),a}return t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.getClassName=function(){return"HemisphericLight"},t.prototype.setDirectionToTarget=function(e){return this.direction=M.e.Normalize(e.subtract(M.e.Zero())),this.direction},t.prototype.getShadowGenerator=function(){return null},t.prototype.transferToEffect=function(e,n){var r=M.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",r.x,r.y,r.z,0,n),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),n),this},t.prototype.transferToNodeMaterialEffect=function(e,n){var r=M.e.Normalize(this.direction);return e.setFloat3(n,r.x,r.y,r.z),this},t.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=M.a.Identity()),this._worldMatrix},t.prototype.getTypeID=function(){return E.a.LIGHTTYPEID_HEMISPHERICLIGHT},t.prototype.prepareLightSpecificDefines=function(e,n){e["HEMILIGHT"+n]=!0},Object(f.c)([Object(s.e)()],t.prototype,"groundColor",void 0),Object(f.c)([Object(s.o)()],t.prototype,"direction",void 0),t}(E.a)},500:function(J,j,o){"use strict";var f=o(434),s=o(456),M=o(440),S=o(595),c=o(467);c.a.prototype.createRenderTargetTexture=function(E,p){var i=new S.a;p!==void 0&&typeof p=="object"?(i.generateMipMaps=p.generateMipMaps,i.generateDepthBuffer=!!p.generateDepthBuffer,i.generateStencilBuffer=!!p.generateStencilBuffer,i.type=p.type===void 0?0:p.type,i.samplingMode=p.samplingMode===void 0?3:p.samplingMode,i.format=p.format===void 0?5:p.format):(i.generateMipMaps=p,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,M.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var t=this._gl,e=new s.a(this,s.b.RenderTarget),n=E.width||E,r=E.height||E,a=E.layers||0,l=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),h=a!==0?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D,u=this._getRGBABufferInternalSizedFormat(i.type,i.format),v=this._getInternalFormat(i.format),T=this._getWebGLTextureType(i.type);this._bindTextureDirectly(h,e),a!==0?(e.is2DArray=!0,t.texImage3D(h,0,u,n,r,a,0,v,T,null)):t.texImage2D(h,0,u,n,r,0,v,T,null),t.texParameteri(h,t.TEXTURE_MAG_FILTER,l.mag),t.texParameteri(h,t.TEXTURE_MIN_FILTER,l.min),t.texParameteri(h,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(h,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(h),this._bindTextureDirectly(h,null);var _=this._currentFramebuffer,R=t.createFramebuffer();return this._bindUnboundFramebuffer(R),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,n,r),e.is2DArray||t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(_),e._framebuffer=R,e.baseWidth=n,e.baseHeight=r,e.width=n,e.height=r,e.depth=a,e.isReady=!0,e.samples=1,e.generateMipMaps=!!i.generateMipMaps,e.samplingMode=i.samplingMode,e.type=i.type,e.format=i.format,e._generateDepthBuffer=i.generateDepthBuffer,e._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(e),e},c.a.prototype.createDepthStencilTexture=function(E,p){if(p.isCube){var i=E.width||E;return this._createDepthStencilCubeTexture(i,p)}else return this._createDepthStencilTexture(E,p)},c.a.prototype._createDepthStencilTexture=function(E,p){var i=this._gl,t=E.layers||0,e=t!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,n=new s.a(this,s.b.Depth);if(!this._caps.depthTextureExtension)return M.a.Error("Depth texture is not supported by your browser or hardware."),n;var r=Object(f.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},p);this._bindTextureDirectly(e,n,!0),this._setupDepthStencilTexture(n,E,r.generateStencil,r.bilinearFiltering,r.comparisonFunction);var a=r.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,l=r.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,h=l;return this.webGLVersion>1&&(h=r.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),n.is2DArray?i.texImage3D(e,0,h,n.width,n.height,t,0,l,a,null):i.texImage2D(e,0,h,n.width,n.height,0,l,a,null),this._bindTextureDirectly(e,null),n}},502:function(J,j,o){"use strict";o.d(j,"a",function(){return ce});var f=o(436),s=o(447),M=o(442),S=o(538),c=o(454),E=o(441),p=o(455),i=o(533),t=o(476),e=o(459),n=o(435),r="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;n.a.IncludesShadersStore[r]=a;var l={name:r,shader:a},h=o(614),u=o(615),v=o(616),T="geometryPixelShader",_=`#extension GL_EXT_draw_buffers : require
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
`;n.a.ShadersStore[T]=_;var R={name:T,shader:_},O=o(487),L=o(496),x=o(497),U=o(501),F="geometryVertexDeclaration",V=`
uniform mat4 viewProjection;
uniform mat4 view;`;n.a.IncludesShadersStore[F]=V;var b={name:F,shader:V},y=o(674),g="geometryUboDeclaration",W="#include<sceneUboDeclaration>";n.a.IncludesShadersStore[g]=W;var G={name:g,shader:W},D=o(507),K=o(508),Y=o(488),se=o(489),w=o(675),fe="geometryVertexShader",ne=`precision highp float;
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
`;n.a.ShadersStore[fe]=ne;var ee={name:fe,shader:ne},ce=function(){function q(X,pe){pe===void 0&&(pe=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=X,this._ratio=pe,this._useUbo=X.getEngine().supportsUniformBuffers,q._SceneComponentInitialization(this._scene),this._createRenderTargets()}return q.prototype._linkPrePassRenderer=function(X){this._linkedWithPrePass=!0,this._prePassRenderer=X,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(pe){}))},q.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},q.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},q.prototype._forceTextureType=function(X,pe){X===q.POSITION_TEXTURE_TYPE?(this._positionIndex=pe,this._enablePosition=!0):X===q.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=pe,this._enableVelocity=!0):X===q.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=pe,this._enableReflectivity=!0):X===q.DEPTH_TEXTURE_TYPE?this._depthIndex=pe:X===q.NORMAL_TEXTURE_TYPE&&(this._normalIndex=pe)},q.prototype._setAttachments=function(X){this._attachments=X},q.prototype._linkInternalTexture=function(X){this._multiRenderTarget._texture=X},Object.defineProperty(q.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(X){this._multiRenderTarget.renderList=X},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),q.prototype.getTextureIndex=function(X){switch(X){case q.POSITION_TEXTURE_TYPE:return this._positionIndex;case q.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case q.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(q.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(X){this._enablePosition=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(X){this._enableVelocity=X,X||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(X){this._enableReflectivity=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),q.prototype.isReady=function(X,pe){var _e=X.getMaterial();if(_e&&_e.disableDepthWrite)return!1;var re=[],ve=[s.b.PositionKind,s.b.NormalKind],ie=X.getMesh();if(_e){var Ee=!1;_e.needAlphaTesting()&&_e.getAlphaTestTexture()&&(re.push("#define ALPHATEST"),re.push("#define ALPHATEST_UV"+(_e.getAlphaTestTexture().coordinatesIndex+1)),Ee=!0),_e.bumpTexture&&p.a.BumpTextureEnabled&&(re.push("#define BUMP"),re.push("#define BUMP_UV"+(_e.bumpTexture.coordinatesIndex+1)),Ee=!0),this._enableReflectivity&&(_e instanceof p.a&&_e.specularTexture?(re.push("#define HAS_SPECULAR"),re.push("#define REFLECTIVITY_UV"+(_e.specularTexture.coordinatesIndex+1)),Ee=!0):_e instanceof i.a&&_e.reflectivityTexture&&(re.push("#define HAS_REFLECTIVITY"),re.push("#define REFLECTIVITY_UV"+(_e.reflectivityTexture.coordinatesIndex+1)),Ee=!0)),Ee&&(re.push("#define NEED_UV"),ie.isVerticesDataPresent(s.b.UVKind)&&(ve.push(s.b.UVKind),re.push("#define UV1")),ie.isVerticesDataPresent(s.b.UV2Kind)&&(ve.push(s.b.UV2Kind),re.push("#define UV2")))}this._linkedWithPrePass&&(re.push("#define PREPASS"),this._depthIndex!==-1&&(re.push("#define DEPTH_INDEX "+this._depthIndex),re.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(re.push("#define NORMAL_INDEX "+this._normalIndex),re.push("#define PREPASS_NORMAL"))),this._enablePosition&&(re.push("#define POSITION"),re.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(re.push("#define VELOCITY"),re.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(ie)===-1&&re.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(re.push("#define REFLECTIVITY"),re.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),ie.useBones&&ie.computeBonesUsingShaders?(ve.push(s.b.MatricesIndicesKind),ve.push(s.b.MatricesWeightsKind),ie.numBoneInfluencers>4&&(ve.push(s.b.MatricesIndicesExtraKind),ve.push(s.b.MatricesWeightsExtraKind)),re.push("#define NUM_BONE_INFLUENCERS "+ie.numBoneInfluencers),re.push("#define BonesPerMesh "+(ie.skeleton?ie.skeleton.bones.length+1:0))):re.push("#define NUM_BONE_INFLUENCERS 0");var le=ie.morphTargetManager,B=0;le&&le.numInfluencers>0&&(B=le.numInfluencers,re.push("#define MORPHTARGETS"),re.push("#define NUM_MORPH_INFLUENCERS "+B),le.isUsingTextureForTargets&&re.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(ve,ie,B)),pe&&(re.push("#define INSTANCES"),c.a.PushAttributesForInstances(ve),X.getRenderingMesh().hasThinInstances&&re.push("#define THIN_INSTANCES")),this._linkedWithPrePass?re.push("#define RENDER_TARGET_COUNT "+this._attachments.length):re.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var m=re.join(`
`);return this._cachedDefines!==m&&(this._cachedDefines=m,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:ve,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:m,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:B}},this._scene.getEngine())),this._effect.isReady()},q.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(q.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(X){this._multiRenderTarget.samples=X},enumerable:!1,configurable:!0}),q.prototype.dispose=function(){if(this._resizeObserver){var X=this._scene.getEngine();X.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},q.prototype._assignRenderTargetIndices=function(){var X=2;return this._enablePosition&&(this._positionIndex=X,X++),this._enableVelocity&&(this._velocityIndex=X,X++),this._enableReflectivity&&(this._reflectivityIndex=X,X++),X},q.prototype._createRenderTargets=function(){var X=this,pe=this._scene.getEngine(),_e=this._assignRenderTargetIndices();if(this._multiRenderTarget=new S.a("gBuffer",{width:pe.getRenderWidth()*this._ratio,height:pe.getRenderHeight()*this._ratio},_e,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=M.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=M.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(ve){ve.clear(new E.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=pe.onResizeObservable.add(function(){X._multiRenderTarget&&X._multiRenderTarget.resize({width:pe.getRenderWidth()*X._ratio,height:pe.getRenderHeight()*X._ratio})});var re=function(ve){var ie=ve.getRenderingMesh(),Ee=ve.getEffectiveMesh(),le=X._scene,B=le.getEngine(),m=ve.getMaterial();if(!!m){if(Ee._internalAbstractMeshDataInfo._isActiveIntermediate=!1,X._enableVelocity&&!X._previousTransformationMatrices[Ee.uniqueId]&&(X._previousTransformationMatrices[Ee.uniqueId]={world:f.a.Identity(),viewProjection:le.getTransformMatrix()},ie.skeleton)){var N=ie.skeleton.getTransformMatrices(ie);X._previousBonesTransformationMatrices[ie.uniqueId]=X._copyBonesTransformationMatrices(N,new Float32Array(N.length))}var I=ie._getInstancesRenderList(ve._id,!!ve.getReplacementMesh());if(!I.mustReturn){var Z=B.getCaps().instancedArrays&&(I.visibleInstances[ve._id]!==null||ie.hasThinInstances),Q=Ee.getWorldMatrix();if(X.isReady(ve,Z)){if(B.enableEffect(X._effect),ie._bind(ve,X._effect,m.fillMode),X._useUbo?(c.a.FinalizeSceneUbo(X._scene),c.a.BindSceneUniformBuffer(X._effect,X._scene.getSceneUniformBuffer())):(X._effect.setMatrix("viewProjection",le.getTransformMatrix()),X._effect.setMatrix("view",le.getViewMatrix())),m){var C,$=ie._instanceDataStorage;if(!$.isFrozen&&(m.backFaceCulling||m.overrideMaterialSideOrientation!==null)){var me=Ee._getWorldMatrixDeterminant();C=m.overrideMaterialSideOrientation,C==null&&(C=m.sideOrientation),me<0&&(C=C===e.a.ClockWiseSideOrientation?e.a.CounterClockWiseSideOrientation:e.a.ClockWiseSideOrientation)}else C=$.sideOrientation;if(m._preBind(X._effect,C),m.needAlphaTesting()){var Te=m.getAlphaTestTexture();Te&&(X._effect.setTexture("diffuseSampler",Te),X._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}m.bumpTexture&&le.getEngine().getCaps().standardDerivatives&&p.a.BumpTextureEnabled&&(X._effect.setFloat3("vBumpInfos",m.bumpTexture.coordinatesIndex,1/m.bumpTexture.level,m.parallaxScaleBias),X._effect.setMatrix("bumpMatrix",m.bumpTexture.getTextureMatrix()),X._effect.setTexture("bumpSampler",m.bumpTexture),X._effect.setFloat2("vTangentSpaceParams",m.invertNormalMapX?-1:1,m.invertNormalMapY?-1:1)),X._enableReflectivity&&(m instanceof p.a&&m.specularTexture?(X._effect.setMatrix("reflectivityMatrix",m.specularTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",m.specularTexture)):m instanceof i.a&&m.reflectivityTexture&&(X._effect.setMatrix("reflectivityMatrix",m.reflectivityTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",m.reflectivityTexture)))}ie.useBones&&ie.computeBonesUsingShaders&&ie.skeleton&&(X._effect.setMatrices("mBones",ie.skeleton.getTransformMatrices(ie)),X._enableVelocity&&X._effect.setMatrices("mPreviousBones",X._previousBonesTransformationMatrices[ie.uniqueId])),c.a.BindMorphTargetParameters(ie,X._effect),ie.morphTargetManager&&ie.morphTargetManager.isUsingTextureForTargets&&ie.morphTargetManager._bind(X._effect),X._enableVelocity&&(X._effect.setMatrix("previousWorld",X._previousTransformationMatrices[Ee.uniqueId].world),X._effect.setMatrix("previousViewProjection",X._previousTransformationMatrices[Ee.uniqueId].viewProjection)),ie._processRendering(Ee,ve,X._effect,m.fillMode,I,Z,function(Se,Ce){return X._effect.setMatrix("world",Ce)})}X._enableVelocity&&(X._previousTransformationMatrices[Ee.uniqueId].world=Q.clone(),X._previousTransformationMatrices[Ee.uniqueId].viewProjection=X._scene.getTransformMatrix().clone(),ie.skeleton&&X._copyBonesTransformationMatrices(ie.skeleton.getTransformMatrices(ie),X._previousBonesTransformationMatrices[Ee.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(ve,ie,Ee,le){var B;if(X._linkedWithPrePass){if(!X._prePassRenderer.enabled)return;X._scene.getEngine().bindAttachments(X._attachments)}if(le.length){for(pe.setColorWrite(!1),B=0;B<le.length;B++)re(le.data[B]);pe.setColorWrite(!0)}for(B=0;B<ve.length;B++)re(ve.data[B]);for(pe.setDepthWrite(!1),B=0;B<ie.length;B++)re(ie.data[B]);if(X.renderTransparentMeshes)for(B=0;B<Ee.length;B++)re(Ee.data[B]);pe.setDepthWrite(!0)}}},q.prototype._copyBonesTransformationMatrices=function(X,pe){for(var _e=0;_e<X.length;_e++)pe[_e]=X[_e];return pe},q.DEPTH_TEXTURE_TYPE=0,q.NORMAL_TEXTURE_TYPE=1,q.POSITION_TEXTURE_TYPE=2,q.VELOCITY_TEXTURE_TYPE=3,q.REFLECTIVITY_TEXTURE_TYPE=4,q._SceneComponentInitialization=function(X){throw t.a.WarnImport("GeometryBufferRendererSceneComponent")},q}()},513:function(J,j,o){"use strict";o.d(j,"a",function(){return E}),o.d(j,"b",function(){return p});var f=o(436),s=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],M=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],S=function(i,t){return s[i]*M[i](t)},c=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],E=function(){function i(){this.preScaled=!1,this.l00=f.e.Zero(),this.l1_1=f.e.Zero(),this.l10=f.e.Zero(),this.l11=f.e.Zero(),this.l2_2=f.e.Zero(),this.l2_1=f.e.Zero(),this.l20=f.e.Zero(),this.l21=f.e.Zero(),this.l22=f.e.Zero()}return i.prototype.addLight=function(t,e,n){var r=new f.e(e.r,e.g,e.b),a=r.scale(n);this.l00=this.l00.add(a.scale(S(0,t))),this.l1_1=this.l1_1.add(a.scale(S(1,t))),this.l10=this.l10.add(a.scale(S(2,t))),this.l11=this.l11.add(a.scale(S(3,t))),this.l2_2=this.l2_2.add(a.scale(S(4,t))),this.l2_1=this.l2_1.add(a.scale(S(5,t))),this.l20=this.l20.add(a.scale(S(6,t))),this.l21=this.l21.add(a.scale(S(7,t))),this.l22=this.l22.add(a.scale(S(8,t)))},i.prototype.scaleInPlace=function(t){this.l00.scaleInPlace(t),this.l1_1.scaleInPlace(t),this.l10.scaleInPlace(t),this.l11.scaleInPlace(t),this.l2_2.scaleInPlace(t),this.l2_1.scaleInPlace(t),this.l20.scaleInPlace(t),this.l21.scaleInPlace(t),this.l22.scaleInPlace(t)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(c[0]),this.l1_1.scaleInPlace(c[1]),this.l10.scaleInPlace(c[2]),this.l11.scaleInPlace(c[3]),this.l2_2.scaleInPlace(c[4]),this.l2_1.scaleInPlace(c[5]),this.l20.scaleInPlace(c[6]),this.l21.scaleInPlace(c[7]),this.l22.scaleInPlace(c[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(s[0]),this.l1_1.scaleInPlace(s[1]),this.l10.scaleInPlace(s[2]),this.l11.scaleInPlace(s[3]),this.l2_2.scaleInPlace(s[4]),this.l2_1.scaleInPlace(s[5]),this.l20.scaleInPlace(s[6]),this.l21.scaleInPlace(s[7]),this.l22.scaleInPlace(s[8])},i.FromArray=function(t){var e=new i;return f.e.FromArrayToRef(t[0],0,e.l00),f.e.FromArrayToRef(t[1],0,e.l1_1),f.e.FromArrayToRef(t[2],0,e.l10),f.e.FromArrayToRef(t[3],0,e.l11),f.e.FromArrayToRef(t[4],0,e.l2_2),f.e.FromArrayToRef(t[5],0,e.l2_1),f.e.FromArrayToRef(t[6],0,e.l20),f.e.FromArrayToRef(t[7],0,e.l21),f.e.FromArrayToRef(t[8],0,e.l22),e},i.FromPolynomial=function(t){var e=new i;return e.l00=t.xx.scale(.376127).add(t.yy.scale(.376127)).add(t.zz.scale(.376126)),e.l1_1=t.y.scale(.977204),e.l10=t.z.scale(.977204),e.l11=t.x.scale(.977204),e.l2_2=t.xy.scale(1.16538),e.l2_1=t.yz.scale(1.16538),e.l20=t.zz.scale(1.34567).subtract(t.xx.scale(.672834)).subtract(t.yy.scale(.672834)),e.l21=t.zx.scale(1.16538),e.l22=t.xx.scale(1.16538).subtract(t.yy.scale(1.16538)),e.l1_1.scaleInPlace(-1),e.l11.scaleInPlace(-1),e.l2_1.scaleInPlace(-1),e.l21.scaleInPlace(-1),e.scaleInPlace(Math.PI),e},i}(),p=function(){function i(){this.x=f.e.Zero(),this.y=f.e.Zero(),this.z=f.e.Zero(),this.xx=f.e.Zero(),this.yy=f.e.Zero(),this.zz=f.e.Zero(),this.xy=f.e.Zero(),this.yz=f.e.Zero(),this.zx=f.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=E.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(t){var e=new f.e(t.r,t.g,t.b);this.xx=this.xx.add(e),this.yy=this.yy.add(e),this.zz=this.zz.add(e)},i.prototype.scaleInPlace=function(t){this.x.scaleInPlace(t),this.y.scaleInPlace(t),this.z.scaleInPlace(t),this.xx.scaleInPlace(t),this.yy.scaleInPlace(t),this.zz.scaleInPlace(t),this.yz.scaleInPlace(t),this.zx.scaleInPlace(t),this.xy.scaleInPlace(t)},i.FromHarmonics=function(t){var e=new i;return e._harmonics=t,e.x=t.l11.scale(1.02333).scale(-1),e.y=t.l1_1.scale(1.02333).scale(-1),e.z=t.l10.scale(1.02333),e.xx=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).add(t.l22.scale(.429043)),e.yy=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).subtract(t.l22.scale(.429043)),e.zz=t.l00.scale(.886277).add(t.l20.scale(.495417)),e.yz=t.l2_1.scale(.858086).scale(-1),e.zx=t.l21.scale(.858086).scale(-1),e.xy=t.l2_2.scale(.858086),e.scaleInPlace(1/Math.PI),e},i.FromArray=function(t){var e=new i;return f.e.FromArrayToRef(t[0],0,e.x),f.e.FromArrayToRef(t[1],0,e.y),f.e.FromArrayToRef(t[2],0,e.z),f.e.FromArrayToRef(t[3],0,e.xx),f.e.FromArrayToRef(t[4],0,e.yy),f.e.FromArrayToRef(t[5],0,e.zz),f.e.FromArrayToRef(t[6],0,e.yz),f.e.FromArrayToRef(t[7],0,e.zx),f.e.FromArrayToRef(t[8],0,e.xy),e},i}()},514:function(J,j,o){"use strict";o.d(j,"a",function(){return M});var f=o(442),s=o(545),M=function(){function S(){}return S.GetEnvironmentBRDFTexture=function(c){if(!c.environmentBRDFTexture){var E=c.useDelayedTextureLoading;c.useDelayedTextureLoading=!1;var p=c._blockEntityCollection;c._blockEntityCollection=!1;var i=f.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,c,!0,!1,f.a.BILINEAR_SAMPLINGMODE);c._blockEntityCollection=p;var t=c.getEngine().getLoadedTexturesCache(),e=t.indexOf(i.getInternalTexture());e!==-1&&t.splice(e,1),i.isRGBD=!0,i.wrapU=f.a.CLAMP_ADDRESSMODE,i.wrapV=f.a.CLAMP_ADDRESSMODE,c.environmentBRDFTexture=i,c.useDelayedTextureLoading=E,s.a.ExpandRGBDTexture(i)}return c.environmentBRDFTexture},S._instanceNumber=0,S._environmentBRDFBase64Texture="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==",S}()},516:function(J,j,o){"use strict";o.d(j,"a",function(){return W});var f=o(434),s=o(439),M=o(443),S=o(438),c=o(441),E=o(445),p=o(448),i=o(447),t=o(442),e=o(458),n=o(459),r=o(454),a=o(435),l="glowMapGenerationPixelShader",h=`#ifdef DIFFUSE
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
}`;a.a.ShadersStore[l]=h;var u={name:l,shader:h},v=o(487),T=o(496),_=o(497),R=o(501),O=o(507),L=o(508),x=o(488),U=o(489),F="glowMapGenerationVertexShader",V=`
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
}`;a.a.ShadersStore[F]=V;var b={name:F,shader:V},y=o(476),g=o(512),W=function(){function G(D,K){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new c.b},this.neutralColor=new c.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new S.c,this.onBeforeRenderMainTextureObservable=new S.c,this.onBeforeComposeObservable=new S.c,this.onBeforeRenderMeshToEffect=new S.c,this.onAfterRenderMeshToEffect=new S.c,this.onAfterComposeObservable=new S.c,this.onSizeChangedObservable=new S.c,this.name=D,this._scene=K||p.a.LastCreatedScene,G._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(G.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(D){this._effectLayerOptions.renderingGroupId=D},enumerable:!1,configurable:!0}),G.prototype._init=function(D){this._effectLayerOptions=Object(f.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},D),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},G.prototype._generateIndexBuffer=function(){var D=[];D.push(0),D.push(1),D.push(2),D.push(0),D.push(2),D.push(3),this._indexBuffer=this._engine.createIndexBuffer(D)},G.prototype._generateVertexBuffer=function(){var D=[];D.push(1,1),D.push(-1,1),D.push(-1,-1),D.push(1,-1);var K=new i.b(this._engine,D,i.b.PositionKind,!1,!1,2);this._vertexBuffers[i.b.PositionKind]=K},G.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?E.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?E.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},G.prototype._createMainTexture=function(){var D=this;if(this._mainTexture=new e.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=t.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=t.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(t.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(Y,se,w,fe){D.onBeforeRenderMainTextureObservable.notifyObservers(D);var ne,ee=D._scene.getEngine();if(fe.length){for(ee.setColorWrite(!1),ne=0;ne<fe.length;ne++)D._renderSubMesh(fe.data[ne]);ee.setColorWrite(!0)}for(ne=0;ne<Y.length;ne++)D._renderSubMesh(Y.data[ne]);for(ne=0;ne<se.length;ne++)D._renderSubMesh(se.data[ne]);var ce=ee.getAlphaMode();for(ne=0;ne<w.length;ne++)D._renderSubMesh(w.data[ne],!0);ee.setAlphaMode(ce)},this._mainTexture.onClearObservable.add(function(Y){Y.clear(D.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var K=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){D._scene.getBoundingBoxRenderer().enabled=!D.disableBoundingBoxesFromEffectLayer&&K}),this._mainTexture.onAfterUnbindObservable.add(function(){D._scene.getBoundingBoxRenderer().enabled=K})}},G.prototype._addCustomEffectDefines=function(D){},G.prototype._isReady=function(D,K,Y){var se=D.getMaterial();if(!se||!se.isReadyForSubMesh(D.getMesh(),D,K))return!1;var w=[],fe=[i.b.PositionKind],ne=D.getMesh(),ee=!1,ce=!1;if(se){var q=se.needAlphaTesting(),X=se.getAlphaTestTexture(),pe=X&&X.hasAlpha&&(se.useAlphaFromDiffuseTexture||se._useAlphaFromAlbedoTexture);X&&(q||pe)&&(w.push("#define DIFFUSE"),ne.isVerticesDataPresent(i.b.UV2Kind)&&X.coordinatesIndex===1?(w.push("#define DIFFUSEUV2"),ce=!0):ne.isVerticesDataPresent(i.b.UVKind)&&(w.push("#define DIFFUSEUV1"),ee=!0),q&&(w.push("#define ALPHATEST"),w.push("#define ALPHATESTVALUE 0.4")));var _e=se.opacityTexture;_e&&(w.push("#define OPACITY"),ne.isVerticesDataPresent(i.b.UV2Kind)&&_e.coordinatesIndex===1?(w.push("#define OPACITYUV2"),ce=!0):ne.isVerticesDataPresent(i.b.UVKind)&&(w.push("#define OPACITYUV1"),ee=!0))}Y&&(w.push("#define EMISSIVE"),ne.isVerticesDataPresent(i.b.UV2Kind)&&Y.coordinatesIndex===1?(w.push("#define EMISSIVEUV2"),ce=!0):ne.isVerticesDataPresent(i.b.UVKind)&&(w.push("#define EMISSIVEUV1"),ee=!0)),ne.isVerticesDataPresent(i.b.ColorKind)&&ne.hasVertexAlpha&&(fe.push(i.b.ColorKind),w.push("#define VERTEXALPHA")),ee&&(fe.push(i.b.UVKind),w.push("#define UV1")),ce&&(fe.push(i.b.UV2Kind),w.push("#define UV2"));var re=new g.a;if(ne.useBones&&ne.computeBonesUsingShaders){fe.push(i.b.MatricesIndicesKind),fe.push(i.b.MatricesWeightsKind),ne.numBoneInfluencers>4&&(fe.push(i.b.MatricesIndicesExtraKind),fe.push(i.b.MatricesWeightsExtraKind)),w.push("#define NUM_BONE_INFLUENCERS "+ne.numBoneInfluencers);var ve=ne.skeleton;ve&&ve.isUsingTextureForMatrices?w.push("#define BONETEXTURE"):w.push("#define BonesPerMesh "+(ve?ve.bones.length+1:0)),ne.numBoneInfluencers>0&&re.addCPUSkinningFallback(0,ne)}else w.push("#define NUM_BONE_INFLUENCERS 0");var ie=ne.morphTargetManager,Ee=0;ie&&ie.numInfluencers>0&&(w.push("#define MORPHTARGETS"),Ee=ie.numInfluencers,w.push("#define NUM_MORPH_INFLUENCERS "+Ee),ie.isUsingTextureForTargets&&w.push("#define MORPHTARGETS_TEXTURE"),r.a.PrepareAttributesForMorphTargetsInfluencers(fe,ne,Ee)),K&&(w.push("#define INSTANCES"),r.a.PushAttributesForInstances(fe),D.getRenderingMesh().hasThinInstances&&w.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(w);var le=w.join(`
`);return this._cachedDefines!==le&&(this._cachedDefines=le,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",fe,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],le,re,void 0,void 0,{maxSimultaneousMorphTargets:Ee})),this._effectLayerMapGenerationEffect.isReady()},G.prototype.render=function(){var D=this._mergeEffect;if(!!D.isReady()){for(var K=0;K<this._postProcesses.length;K++)if(!this._postProcesses[K].isReady())return;var Y=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),Y.enableEffect(D),Y.setState(!1),Y.bindBuffers(this._vertexBuffers,this._indexBuffer,D);var se=Y.getAlphaMode();Y.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(D),Y.setAlphaMode(se),this.onAfterComposeObservable.notifyObservers(this);var w=this._mainTexture.getSize();this._setMainTextureSize(),(w.width!==this._mainTextureDesiredSize.width||w.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},G.prototype.hasMesh=function(D){return this.renderingGroupId===-1||D.renderingGroupId===this.renderingGroupId},G.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},G.prototype._shouldRenderMesh=function(D){return!0},G.prototype._canRenderMesh=function(D,K){return!K.needAlphaBlendingForMesh(D)},G.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},G.prototype._renderSubMesh=function(D,K){var Y=this,se;if(K===void 0&&(K=!1),!!this.shouldRender()){var w=D.getMaterial(),fe=D.getMesh(),ne=D.getReplacementMesh(),ee=D.getRenderingMesh(),ce=D.getEffectiveMesh(),q=this._scene,X=q.getEngine();if(ce._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!w&&!!this._canRenderMesh(ee,w)){var pe=(se=ee.overrideMaterialSideOrientation)!==null&&se!==void 0?se:w.sideOrientation,_e=ee._getWorldMatrixDeterminant();_e<0&&(pe=pe===n.a.ClockWiseSideOrientation?n.a.CounterClockWiseSideOrientation:n.a.ClockWiseSideOrientation);var re=pe===n.a.ClockWiseSideOrientation;X.setState(w.backFaceCulling,w.zOffset,void 0,re);var ve=ee._getInstancesRenderList(D._id,!!ne);if(!ve.mustReturn&&!!this._shouldRenderMesh(ee)){var ie=ve.hardwareInstancedRendering[D._id]||ee.hasThinInstances;if(this._setEmissiveTextureAndColor(ee,D,w),this.onBeforeRenderMeshToEffect.notifyObservers(fe),this._useMeshMaterial(ee))ee.render(D,ie,ne||void 0);else if(this._isReady(D,ie,this._emissiveTextureAndColor.texture)){X.enableEffect(this._effectLayerMapGenerationEffect),ee._bind(D,this._effectLayerMapGenerationEffect,n.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",q.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",ce.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var Ee=w.needAlphaTesting(),le=w.getAlphaTestTexture(),B=le&&le.hasAlpha&&(w.useAlphaFromDiffuseTexture||w._useAlphaFromAlbedoTexture);if(le&&(Ee||B)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",le);var m=le.getTextureMatrix();m&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",m)}var N=w.opacityTexture;if(N){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",N),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",N.level);var m=N.getTextureMatrix();m&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",m)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),ee.useBones&&ee.computeBonesUsingShaders&&ee.skeleton){var I=ee.skeleton;if(I.isUsingTextureForMatrices){var Z=I.getTransformMatrixTexture(ee);if(!Z)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",Z),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(I.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",I.getTransformMatrices(ee))}r.a.BindMorphTargetParameters(ee,this._effectLayerMapGenerationEffect),ee.morphTargetManager&&ee.morphTargetManager.isUsingTextureForTargets&&ee.morphTargetManager._bind(this._effectLayerMapGenerationEffect),K&&X.setAlphaMode(w.alphaMode),ee._processRendering(ce,D,this._effectLayerMapGenerationEffect,w.fillMode,ve,ie,function(Q,C){return Y._effectLayerMapGenerationEffect.setMatrix("world",C)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(fe)}}}},G.prototype._useMeshMaterial=function(D){return!1},G.prototype._rebuild=function(){var D=this._vertexBuffers[i.b.PositionKind];D&&D._rebuild(),this._generateIndexBuffer()},G.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var D=0;D<this._postProcesses.length;D++)this._postProcesses[D]&&this._postProcesses[D].dispose();this._postProcesses=[];for(var D=0;D<this._textures.length;D++)this._textures[D]&&this._textures[D].dispose();this._textures=[]},G.prototype.dispose=function(){var D=this._vertexBuffers[i.b.PositionKind];D&&(D.dispose(),this._vertexBuffers[i.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var K=this._scene.effectLayers.indexOf(this,0);K>-1&&this._scene.effectLayers.splice(K,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},G.prototype.getClassName=function(){return"EffectLayer"},G.Parse=function(D,K,Y){var se=M.b.Instantiate(D.customType);return se.Parse(D,K,Y)},G._SceneComponentInitialization=function(D){throw y.a.WarnImport("EffectLayerSceneComponent")},Object(f.c)([Object(s.c)()],G.prototype,"name",void 0),Object(f.c)([Object(s.f)()],G.prototype,"neutralColor",void 0),Object(f.c)([Object(s.c)()],G.prototype,"isEnabled",void 0),Object(f.c)([Object(s.d)()],G.prototype,"camera",null),Object(f.c)([Object(s.c)()],G.prototype,"renderingGroupId",null),Object(f.c)([Object(s.c)()],G.prototype,"disableBoundingBoxesFromEffectLayer",void 0),G}()},517:function(J,j,o){"use strict";o.d(j,"a",function(){return a});var f=o(434),s=o(442),M=o(444),S=o(435),c="fxaaPixelShader",E=`uniform sampler2D textureSampler;
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
}`;S.a.ShadersStore[c]=E;var p={name:c,shader:E},i="fxaaVertexShader",t=`
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
}`;S.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(l){Object(f.d)(h,l);function h(u,v,T,_,R,O,L){T===void 0&&(T=null),L===void 0&&(L=0);var x=l.call(this,u,"fxaa",["texelSize"],null,v,T,_||s.a.BILINEAR_SAMPLINGMODE,R,O,null,L,"fxaa",void 0,!0)||this,U=x._getDefines();return x.updateEffect(U),x.onApplyObservable.add(function(F){var V=x.texelSize;F.setFloat2("texelSize",V.x,V.y)}),x}return h.prototype.getClassName=function(){return"FxaaPostProcess"},h.prototype._getDefines=function(){var u=this.getEngine();if(!u)return null;var v=u.getGlInfo();return v&&v.renderer&&v.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},h._Parse=function(u,v,T,_){return r.a.Parse(function(){return new h(u.name,u.options,v,u.renderTargetSamplingMode,T.getEngine(),u.reusable)},u,T,_)},h}(M.a);n.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var f=o(434),s=o(439),M=o(491),S=o(444),c=o(448),E=o(644),p=o(534),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,h,u,v,T){a===void 0&&(a=null),v===void 0&&(v=0);var _=t.call(this,n,"imageProcessing",[],[],r,a,l,h,u,null,v,"postprocess",null,!0)||this;return _._fromLinearSpace=!0,_._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},T?(T.applyByPostProcess=!0,_._attachImageProcessingConfiguration(T,!0),_.fromLinearSpace=!1):(_._attachImageProcessingConfiguration(null,!0),_.imageProcessingConfiguration.applyByPostProcess=!0),_.onApply=function(R){_.imageProcessingConfiguration.bind(R,_.aspectRatio)},_}return Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(n){n.applyByPostProcess=!0,this._attachImageProcessingConfiguration(n)},enumerable:!1,configurable:!0}),e.prototype._attachImageProcessingConfiguration=function(n,r){var a=this;if(r===void 0&&(r=!1),n!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),n)this._imageProcessingConfiguration=n;else{var l=null,h=this.getEngine(),u=this.getCamera();if(u)l=u.getScene();else if(h&&h.scenes){var v=h.scenes;l=v[v.length-1]}else l=c.a.LastCreatedScene;l?this._imageProcessingConfiguration=l.imageProcessingConfiguration:this._imageProcessingConfiguration=new M.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),r||this._updateParameters()}},Object.defineProperty(e.prototype,"isSupported",{get:function(){var n=this.getEffect();return!n||n.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(n){this.imageProcessingConfiguration.colorCurves=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(n){this.imageProcessingConfiguration.colorCurvesEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(n){this.imageProcessingConfiguration.colorGradingTexture=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(n){this.imageProcessingConfiguration.colorGradingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(n){this.imageProcessingConfiguration.exposure=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(n){this._imageProcessingConfiguration.toneMappingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(n){this._imageProcessingConfiguration.toneMappingType=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(n){this.imageProcessingConfiguration.contrast=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(n){this.imageProcessingConfiguration.vignetteStretch=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(n){this.imageProcessingConfiguration.vignetteCentreX=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(n){this.imageProcessingConfiguration.vignetteCentreY=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(n){this.imageProcessingConfiguration.vignetteWeight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(n){this.imageProcessingConfiguration.vignetteColor=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(n){this.imageProcessingConfiguration.vignetteCameraFov=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(n){this.imageProcessingConfiguration.vignetteBlendMode=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(n){this.imageProcessingConfiguration.vignetteEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(n){this._fromLinearSpace!==n&&(this._fromLinearSpace=n,this._updateParameters())},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"ImageProcessingPostProcess"},e.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var n="";for(var r in this._defines)this._defines[r]&&(n+="#define "+r+`;\r
`);var a=["textureSampler"],l=["scale"];M.a&&(M.a.PrepareSamplers(a,this._defines),M.a.PrepareUniforms(l,this._defines)),this.updateEffect(n,l,a)},e.prototype.dispose=function(n){t.prototype.dispose.call(this,n),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(f.c)([Object(s.c)()],e.prototype,"_fromLinearSpace",void 0),e}(S.a)},521:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var f=o(436),s=o(450),M=o(513),S=o(515),c=o(441),E=function(){function i(t,e,n,r){this.name=t,this.worldAxisForNormal=e,this.worldAxisForFileX=n,this.worldAxisForFileY=r}return i}(),p=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(t){var e=this,n;if(!t.isCube)return null;(n=t.getScene())===null||n===void 0||n.getEngine().flushFramebuffer();var r=t.getSize().width,a=t.readPixels(0,void 0,void 0,!1),l=t.readPixels(1,void 0,void 0,!1),h,u;t.isRenderTarget?(h=t.readPixels(3,void 0,void 0,!1),u=t.readPixels(2,void 0,void 0,!1)):(h=t.readPixels(2,void 0,void 0,!1),u=t.readPixels(3,void 0,void 0,!1));var v=t.readPixels(4,void 0,void 0,!1),T=t.readPixels(5,void 0,void 0,!1),_=t.gammaSpace,R=5,O=0;return(t.textureType==1||t.textureType==2)&&(O=1),new Promise(function(L,x){Promise.all([l,a,h,u,v,T]).then(function(U){var F=U[0],V=U[1],b=U[2],y=U[3],g=U[4],W=U[5],G={size:r,right:V,left:F,up:b,down:y,front:g,back:W,format:R,type:O,gammaSpace:_};L(e.ConvertCubeMapToSphericalPolynomial(G))})})},i.ConvertCubeMapToSphericalPolynomial=function(t){for(var e=new M.a,n=0,r=2/t.size,a=r,l=r*.5-1,h=0;h<6;h++)for(var u=this.FileFaces[h],v=t[u.name],T=l,_=t.format===5?4:3,R=0;R<t.size;R++){for(var O=l,L=0;L<t.size;L++){var x=u.worldAxisForFileX.scale(O).add(u.worldAxisForFileY.scale(T)).add(u.worldAxisForNormal);x.normalize();var U=Math.pow(1+O*O+T*T,-3/2),F=v[R*t.size*_+L*_+0],V=v[R*t.size*_+L*_+1],b=v[R*t.size*_+L*_+2];isNaN(F)&&(F=0),isNaN(V)&&(V=0),isNaN(b)&&(b=0),t.type===0&&(F/=255,V/=255,b/=255),t.gammaSpace&&(F=Math.pow(s.a.Clamp(F),S.c),V=Math.pow(s.a.Clamp(V),S.c),b=Math.pow(s.a.Clamp(b),S.c));var y=4096;F=s.a.Clamp(F,0,y),V=s.a.Clamp(V,0,y),b=s.a.Clamp(b,0,y);var g=new c.a(F,V,b);e.addLight(x,g,U),n+=U,O+=r}T+=a}var W=4*Math.PI,G=6,D=W*G/6,K=D/n;return e.scaleInPlace(K),e.convertIncidentRadianceToIrradiance(),e.convertIrradianceToLambertianRadiance(),M.b.FromHarmonics(e)},i.FileFaces=[new E("right",new f.e(1,0,0),new f.e(0,0,-1),new f.e(0,-1,0)),new E("left",new f.e(-1,0,0),new f.e(0,0,1),new f.e(0,-1,0)),new E("up",new f.e(0,1,0),new f.e(1,0,0),new f.e(0,0,1)),new E("down",new f.e(0,-1,0),new f.e(1,0,0),new f.e(0,0,-1)),new E("front",new f.e(0,0,1),new f.e(1,0,0),new f.e(0,-1,0)),new E("back",new f.e(0,0,-1),new f.e(-1,0,0),new f.e(0,-1,0))],i}()},522:function(J,j,o){"use strict";var f=o(434),s=o(456),M=o(440),S=o(467);S.a.prototype.createRenderTargetCubeTexture=function(c,E){var p=Object(f.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},E);p.generateStencilBuffer=p.generateDepthBuffer&&p.generateStencilBuffer,(p.type===1&&!this._caps.textureFloatLinearFiltering||p.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(p.samplingMode=1);var i=this._gl,t=new s.a(this,s.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,t,!0);var e=this._getSamplingParameters(p.samplingMode,p.generateMipMaps);p.type===1&&!this._caps.textureFloat&&(p.type=0,M.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,e.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,e.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var n=0;n<6;n++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,this._getRGBABufferInternalSizedFormat(p.type,p.format),c,c,0,this._getInternalFormat(p.format),this._getWebGLTextureType(p.type),null);var r=i.createFramebuffer();return this._bindUnboundFramebuffer(r),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(p.generateStencilBuffer,p.generateDepthBuffer,c,c),p.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),t._framebuffer=r,t.width=c,t.height=c,t.isReady=!0,t.isCube=!0,t.samples=1,t.generateMipMaps=p.generateMipMaps,t.samplingMode=p.samplingMode,t.type=p.type,t.format=p.format,t._generateDepthBuffer=p.generateDepthBuffer,t._generateStencilBuffer=p.generateStencilBuffer,this._internalTexturesCache.push(t),t}},523:function(J,j,o){"use strict";var f=o(521),s=o(477);Object.defineProperty(s.a.prototype,"sphericalPolynomial",{get:function(){var M=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=f.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(S){M._texture._sphericalPolynomial=S,M._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(M){this._texture&&(this._texture._sphericalPolynomial=M)},enumerable:!0,configurable:!0})},529:function(J,j,o){"use strict";o.d(j,"b",function(){return Be}),o.d(j,"a",function(){return Bt});var f=o(434),s=o(439),M=o(440),S=o(490),c=o(514),E=o(449),p=o(436),i=o(447),t=o(626),e=o(480),n=o(454),r=function(){function z(P){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new p.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=P}return z.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},z.prototype.isReadyForSubMesh=function(P,d){return!(P._areTexturesDirty&&d.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},z.prototype.prepareDefines=function(P,d,A){this._isEnabled?(P.ANISOTROPIC=this._isEnabled,this._isEnabled&&!d.isVerticesDataPresent(i.b.TangentKind)&&(P._needUVs=!0,P.MAINUV1=!0),P._areTexturesDirty&&A.texturesEnabled&&(this._texture&&e.a.AnisotropicTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,P,"ANISOTROPIC_TEXTURE"):P.ANISOTROPIC_TEXTURE=!1)):(P.ANISOTROPIC=!1,P.ANISOTROPIC_TEXTURE=!1)},z.prototype.bindForSubMesh=function(P,d,A){(!P.useUbo||!A||!P.isSync)&&(this._texture&&e.a.AnisotropicTextureEnabled&&(P.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),n.a.BindTextureMatrix(this._texture,P,"anisotropy")),P.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),d.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&P.setTexture("anisotropySampler",this._texture)},z.prototype.hasTexture=function(P){return this._texture===P},z.prototype.getActiveTextures=function(P){this._texture&&P.push(this._texture)},z.prototype.getAnimatables=function(P){this._texture&&this._texture.animations&&this._texture.animations.length>0&&P.push(this._texture)},z.prototype.dispose=function(P){P&&this._texture&&this._texture.dispose()},z.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},z.AddFallbacks=function(P,d,A){return P.ANISOTROPIC&&d.addFallback(A++,"ANISOTROPIC"),A},z.AddUniforms=function(P){P.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},z.PrepareUniformBuffer=function(P){P.addUniform("vAnisotropy",3),P.addUniform("vAnisotropyInfos",2),P.addUniform("anisotropyMatrix",16)},z.AddSamplers=function(P){P.push("anisotropySampler")},z.prototype.copyTo=function(P){s.a.Clone(function(){return P},this)},z.prototype.serialize=function(){return s.a.Serialize(this)},z.prototype.parse=function(P,d,A){var H=this;s.a.Parse(function(){return H},P,d,A)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)()],z.prototype,"intensity",void 0),Object(f.c)([Object(s.n)()],z.prototype,"direction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"texture",void 0),z}(),a=function(){function z(P){this._useEnergyConservation=z.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=z.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=z.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=z.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=z.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=z.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=z.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=z.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=P}return z.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},z.prototype.prepareDefines=function(P){P.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,P.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,P.SPHERICAL_HARMONICS=this._useSphericalHarmonics,P.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},z.prototype.getClassName=function(){return"PBRBRDFConfiguration"},z.prototype.copyTo=function(P){s.a.Clone(function(){return P},this)},z.prototype.serialize=function(){return s.a.Serialize(this)},z.prototype.parse=function(P,d,A){var H=this;s.a.Parse(function(){return H},P,d,A)},z.DEFAULT_USE_ENERGY_CONSERVATION=!0,z.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,z.DEFAULT_USE_SPHERICAL_HARMONICS=!0,z.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useEnergyConservation",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useSphericalHarmonics",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),z}(),l=o(441),h=function(){function z(P){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=l.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=P}return z.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},z.prototype.isReadyForSubMesh=function(P,d){return!(P._areTexturesDirty&&d.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&e.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},z.prototype.prepareDefines=function(P,d){var A;this._isEnabled?(P.SHEEN=this._isEnabled,P.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,P.SHEEN_ROUGHNESS=this._roughness!==null,P.SHEEN_ALBEDOSCALING=this._albedoScaling,P.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,P.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((A=this._textureRoughness)===null||A===void 0?void 0:A._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),P._areTexturesDirty&&d.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,P,"SHEEN_TEXTURE"):P.SHEEN_TEXTURE=!1,this._textureRoughness&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._textureRoughness,P,"SHEEN_TEXTURE_ROUGHNESS"):P.SHEEN_TEXTURE_ROUGHNESS=!1)):(P.SHEEN=!1,P.SHEEN_TEXTURE=!1,P.SHEEN_TEXTURE_ROUGHNESS=!1,P.SHEEN_LINKWITHALBEDO=!1,P.SHEEN_ROUGHNESS=!1,P.SHEEN_ALBEDOSCALING=!1,P.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,P.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},z.prototype.bindForSubMesh=function(P,d,A,H){var ae,he,te,Re,oe,k,de,ge,Ae=H._materialDefines,ue=Ae.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!P.useUbo||!A||!P.isSync)&&(ue&&e.a.SheenTextureEnabled?(P.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),n.a.BindTextureMatrix(this._texture,P,"sheen")):(this._texture||this._textureRoughness)&&e.a.SheenTextureEnabled&&(P.updateFloat4("vSheenInfos",(he=(ae=this._texture)===null||ae===void 0?void 0:ae.coordinatesIndex)!==null&&he!==void 0?he:0,(Re=(te=this._texture)===null||te===void 0?void 0:te.level)!==null&&Re!==void 0?Re:0,(k=(oe=this._textureRoughness)===null||oe===void 0?void 0:oe.coordinatesIndex)!==null&&k!==void 0?k:0,(ge=(de=this._textureRoughness)===null||de===void 0?void 0:de.level)!==null&&ge!==void 0?ge:0),this._texture&&n.a.BindTextureMatrix(this._texture,P,"sheen"),this._textureRoughness&&!ue&&!Ae.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&n.a.BindTextureMatrix(this._textureRoughness,P,"sheenRoughness")),P.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&P.updateFloat("vSheenRoughness",this._roughness)),d.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&P.setTexture("sheenSampler",this._texture),this._textureRoughness&&!ue&&!Ae.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&e.a.SheenTextureEnabled&&P.setTexture("sheenRoughnessSampler",this._textureRoughness))},z.prototype.hasTexture=function(P){return this._texture===P||this._textureRoughness===P},z.prototype.getActiveTextures=function(P){this._texture&&P.push(this._texture),this._textureRoughness&&P.push(this._textureRoughness)},z.prototype.getAnimatables=function(P){this._texture&&this._texture.animations&&this._texture.animations.length>0&&P.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&P.push(this._textureRoughness)},z.prototype.dispose=function(P){var d,A;P&&((d=this._texture)===null||d===void 0||d.dispose(),(A=this._textureRoughness)===null||A===void 0||A.dispose())},z.prototype.getClassName=function(){return"PBRSheenConfiguration"},z.AddFallbacks=function(P,d,A){return P.SHEEN&&d.addFallback(A++,"SHEEN"),A},z.AddUniforms=function(P){P.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},z.PrepareUniformBuffer=function(P){P.addUniform("vSheenColor",4),P.addUniform("vSheenRoughness",1),P.addUniform("vSheenInfos",4),P.addUniform("sheenMatrix",16),P.addUniform("sheenRoughnessMatrix",16)},z.AddSamplers=function(P){P.push("sheenSampler"),P.push("sheenRoughnessSampler")},z.prototype.copyTo=function(P){s.a.Clone(function(){return P},this)},z.prototype.serialize=function(){return s.a.Serialize(this)},z.prototype.parse=function(P,d,A){var H=this;s.a.Parse(function(){return H},P,d,A)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"linkSheenWithAlbedo",void 0),Object(f.c)([Object(s.c)()],z.prototype,"intensity",void 0),Object(f.c)([Object(s.e)()],z.prototype,"color",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"texture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"roughness",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"textureRoughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"albedoScaling",void 0),z}(),u=o(450),v=function(){function z(P,d,A){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=l.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=l.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=P,this._internalMarkScenePrePassDirty=d,this._scene=A}return Object.defineProperty(z.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(P){!this._scene.enableSubSurfaceForPrePass()||P&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(P))},enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(P){P>=1?this._volumeIndexOfRefraction=P:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),z.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},z.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},z.prototype.isReadyForSubMesh=function(P,d){if(P._areTexturesDirty&&d.texturesEnabled){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var A=this._getRefractionTexture(d);if(A&&e.a.RefractionTextureEnabled&&!A.isReadyOrNotBlocking())return!1}return!0},z.prototype.prepareDefines=function(P,d){if(P._areTexturesDirty&&(P.SUBSURFACE=!1,P.SS_TRANSLUCENCY=this._isTranslucencyEnabled,P.SS_SCATTERING=this._isScatteringEnabled,P.SS_THICKNESSANDMASK_TEXTURE=!1,P.SS_MASK_FROM_THICKNESS_TEXTURE=!1,P.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,P.SS_REFRACTION=!1,P.SS_REFRACTIONMAP_3D=!1,P.SS_GAMMAREFRACTION=!1,P.SS_RGBDREFRACTION=!1,P.SS_LINEARSPECULARREFRACTION=!1,P.SS_REFRACTIONMAP_OPPOSITEZ=!1,P.SS_LODINREFRACTIONALPHA=!1,P.SS_LINKREFRACTIONTOTRANSPARENCY=!1,P.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(P.SUBSURFACE=!0,P._areTexturesDirty&&d.texturesEnabled&&this._thicknessTexture&&e.a.ThicknessTextureEnabled&&n.a.PrepareDefinesForMergedUV(this._thicknessTexture,P,"SS_THICKNESSANDMASK_TEXTURE"),P.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,P.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&d.texturesEnabled)){var A=this._getRefractionTexture(d);A&&e.a.RefractionTextureEnabled&&(P.SS_REFRACTION=!0,P.SS_REFRACTIONMAP_3D=A.isCube,P.SS_GAMMAREFRACTION=A.gammaSpace,P.SS_RGBDREFRACTION=A.isRGBD,P.SS_LINEARSPECULARREFRACTION=A.linearSpecularLOD,P.SS_REFRACTIONMAP_OPPOSITEZ=A.invertZ,P.SS_LODINREFRACTIONALPHA=A.lodLevelInAlpha,P.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,P.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},z.prototype.bindForSubMesh=function(P,d,A,H,ae,he){var te=this._getRefractionTexture(d);if(!P.useUbo||!H||!P.isSync){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&(P.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),n.a.BindTextureMatrix(this._thicknessTexture,P,"thickness")),P.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),te&&e.a.RefractionTextureEnabled){P.updateMatrix("refractionMatrix",te.getReflectionTextureMatrix());var Re=1;te.isCube||te.depth&&(Re=te.depth);var oe=te.getSize().width,k=this.volumeIndexOfRefraction;P.updateFloat4("vRefractionInfos",te.level,1/k,Re,this._invertRefractionY?-1:1),P.updateFloat3("vRefractionMicrosurfaceInfos",oe,te.lodGenerationScale,te.lodGenerationOffset),he&&P.updateFloat2("vRefractionFilteringInfo",oe,u.a.Log2(oe))}this.isScatteringEnabled&&P.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),P.updateColor3("vDiffusionDistance",this.diffusionDistance),P.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),P.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}d.texturesEnabled&&(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&P.setTexture("thicknessSampler",this._thicknessTexture),te&&e.a.RefractionTextureEnabled&&(ae?P.setTexture("refractionSampler",te):(P.setTexture("refractionSampler",te._lodTextureMid||te),P.setTexture("refractionSamplerLow",te._lodTextureLow||te),P.setTexture("refractionSamplerHigh",te._lodTextureHigh||te))))},z.prototype.unbind=function(P){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(P.setTexture("refractionSampler",null),!0):!1},z.prototype._getRefractionTexture=function(P){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?P.environmentTexture:null},Object.defineProperty(z.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),z.prototype.fillRenderTargetTextures=function(P){e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&P.push(this._refractionTexture)},z.prototype.hasTexture=function(P){return this._thicknessTexture===P||this._refractionTexture===P},z.prototype.hasRenderTargetTextures=function(){return!!(e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},z.prototype.getActiveTextures=function(P){this._thicknessTexture&&P.push(this._thicknessTexture),this._refractionTexture&&P.push(this._refractionTexture)},z.prototype.getAnimatables=function(P){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&P.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&P.push(this._refractionTexture)},z.prototype.dispose=function(P){P&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},z.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},z.AddFallbacks=function(P,d,A){return P.SS_SCATTERING&&d.addFallback(A++,"SS_SCATTERING"),P.SS_TRANSLUCENCY&&d.addFallback(A++,"SS_TRANSLUCENCY"),A},z.AddUniforms=function(P){P.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},z.AddSamplers=function(P){P.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},z.PrepareUniformBuffer=function(P){P.addUniform("vRefractionMicrosurfaceInfos",3),P.addUniform("vRefractionFilteringInfo",2),P.addUniform("vRefractionInfos",4),P.addUniform("refractionMatrix",16),P.addUniform("vThicknessInfos",2),P.addUniform("thicknessMatrix",16),P.addUniform("vThicknessParam",2),P.addUniform("vDiffusionDistance",3),P.addUniform("vTintColor",4),P.addUniform("vSubSurfaceIntensity",3),P.addUniform("scatteringDiffusionProfile",1)},z.prototype.copyTo=function(P){s.a.Clone(function(){return P},this)},z.prototype.serialize=function(){return s.a.Serialize(this)},z.prototype.parse=function(P,d,A){var H=this;s.a.Parse(function(){return H},P,d,A)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isRefractionEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isTranslucencyEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markScenePrePassDirty")],z.prototype,"isScatteringEnabled",void 0),Object(f.c)([Object(s.c)()],z.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(f.c)([Object(s.c)()],z.prototype,"refractionIntensity",void 0),Object(f.c)([Object(s.c)()],z.prototype,"translucencyIntensity",void 0),Object(f.c)([Object(s.c)()],z.prototype,"useAlbedoToTintRefraction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"thicknessTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"refractionTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(s.c)()],z.prototype,"_volumeIndexOfRefraction",void 0),Object(f.c)([Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"volumeIndexOfRefraction",null),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"invertRefractionY",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"linkRefractionWithTransparency",void 0),Object(f.c)([Object(s.c)()],z.prototype,"minimumThickness",void 0),Object(f.c)([Object(s.c)()],z.prototype,"maximumThickness",void 0),Object(f.c)([Object(s.e)()],z.prototype,"tintColor",void 0),Object(f.c)([Object(s.c)()],z.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(s.e)()],z.prototype,"diffusionDistance",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"useMaskFromThicknessTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"useMaskFromThicknessTextureGltf",void 0),z}(),T=o(744),_=o(491),R=o(459),O=o(552),L=o(553),x=o(442),U=o(523),F=o(435),V=o(746),b="pbrFragmentDeclaration",y=`uniform vec4 vEyePosition;
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
`;F.a.IncludesShadersStore[b]=y;var g={name:b,shader:y},W=o(674),G=o(745),D="pbrUboDeclaration",K=`layout(std140,column_major) uniform;





















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
`;F.a.IncludesShadersStore[D]=K;var Y={name:D,shader:K},se="pbrFragmentExtraDeclaration",w=`
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
#endif`;F.a.IncludesShadersStore[se]=w;var fe={name:se,shader:w},ne=o(650),ee=o(651),ce="pbrFragmentSamplersDeclaration",q=`#ifdef ALBEDO
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
#endif`;F.a.IncludesShadersStore[ce]=q;var X={name:ce,shader:q},pe=o(524),_e=o(592),re=o(558),ve=o(597),ie=o(457),Ee=o(627),le=o(605),B="pbrHelperFunctions",m=`
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
#endif`;F.a.IncludesShadersStore[B]=m;var N={name:B,shader:m},I=o(525),Z=o(652),Q="harmonicsFunctions",C=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;F.a.IncludesShadersStore[Q]=C;var $={name:Q,shader:C},me="pbrDirectLightingSetupFunctions",Te=`
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
}`;F.a.IncludesShadersStore[me]=Te;var Se={name:me,shader:Te},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;F.a.IncludesShadersStore[Ce]=Oe;var Le={name:Ce,shader:Oe},Ie=o(606),xe=o(607),Me="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
`;F.a.IncludesShadersStore[Me]=Ve;var Ut={name:Me,shader:Ve},Ge="pbrIBLFunctions",we=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
`;F.a.IncludesShadersStore[We]=ze;var Wt={name:We,shader:ze},Xe="pbrBlockAmbientOcclusion",Ke=`struct ambientOcclusionOutParams
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
`;F.a.IncludesShadersStore[Xe]=Ke;var zt={name:Xe,shader:Ke},Ye="pbrBlockAlphaFresnel",Qe=`#ifdef ALPHAFRESNEL
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
`;F.a.IncludesShadersStore[Ye]=Qe;var Xt={name:Ye,shader:Qe},ke="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;F.a.IncludesShadersStore[ke]=Ze;var Kt={name:ke,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;F.a.IncludesShadersStore[Je]=qe;var Yt={name:Je,shader:qe},$e="pbrBlockSheen",et=`#ifdef SHEEN
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
`;F.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",mt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;F.a.IncludesShadersStore[vt]=mt;var on={name:vt,shader:mt},gt="pbrBlockDirectLighting",Et=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;F.a.IncludesShadersStore[gt]=Et;var sn={name:gt,shader:Et},ln=o(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;F.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},Rt="pbrBlockFinalUnlitComponents",St=`
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
`;F.a.IncludesShadersStore[Rt]=St;var cn={name:Rt,shader:St},At="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;F.a.IncludesShadersStore[At]=Pt;var un={name:At,shader:Pt},dn=o(701),hn=o(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;F.a.IncludesShadersStore[Ct]=Ot;var pn={name:Ct,shader:Ot},bt="pbrDebug",Mt=`#if DEBUGMODE>0
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
#endif`;F.a.IncludesShadersStore[bt]=Mt;var vn={name:bt,shader:Mt},It="pbrPixelShader",xt=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;F.a.ShadersStore[It]=xt;var mn={name:It,shader:xt},yt="pbrVertexDeclaration",Dt=`uniform mat4 view;
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
#endif`;F.a.IncludesShadersStore[yt]=Dt;var gn={name:yt,shader:Dt},En=o(487),_n=o(748),Tn=o(749),Rn=o(593),Sn=o(656),An=o(657),Pn=o(658),Cn=o(496),On=o(497),bn=o(507),Mn=o(508),In=o(488),xn=o(489),yn=o(750),Dn=o(675),Ln=o(551),Fn=o(702),Nn=o(659),Bn=o(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;F.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=o(512),Fe=o(751),ye={effect:null,subMesh:null},Be=function(z){Object(f.d)(P,z);function P(){var d=z.call(this)||this;return d.PBR=!0,d.NUM_SAMPLES="0",d.REALTIME_FILTERING=!1,d.MAINUV1=!1,d.MAINUV2=!1,d.UV1=!1,d.UV2=!1,d.ALBEDO=!1,d.GAMMAALBEDO=!1,d.ALBEDODIRECTUV=0,d.VERTEXCOLOR=!1,d.DETAIL=!1,d.DETAILDIRECTUV=0,d.DETAIL_NORMALBLENDMETHOD=0,d.AMBIENT=!1,d.AMBIENTDIRECTUV=0,d.AMBIENTINGRAYSCALE=!1,d.OPACITY=!1,d.VERTEXALPHA=!1,d.OPACITYDIRECTUV=0,d.OPACITYRGB=!1,d.ALPHATEST=!1,d.DEPTHPREPASS=!1,d.ALPHABLEND=!1,d.ALPHAFROMALBEDO=!1,d.ALPHATESTVALUE="0.5",d.SPECULAROVERALPHA=!1,d.RADIANCEOVERALPHA=!1,d.ALPHAFRESNEL=!1,d.LINEARALPHAFRESNEL=!1,d.PREMULTIPLYALPHA=!1,d.EMISSIVE=!1,d.EMISSIVEDIRECTUV=0,d.REFLECTIVITY=!1,d.REFLECTIVITYDIRECTUV=0,d.SPECULARTERM=!1,d.MICROSURFACEFROMREFLECTIVITYMAP=!1,d.MICROSURFACEAUTOMATIC=!1,d.LODBASEDMICROSFURACE=!1,d.MICROSURFACEMAP=!1,d.MICROSURFACEMAPDIRECTUV=0,d.METALLICWORKFLOW=!1,d.ROUGHNESSSTOREINMETALMAPALPHA=!1,d.ROUGHNESSSTOREINMETALMAPGREEN=!1,d.METALLNESSSTOREINMETALMAPBLUE=!1,d.AOSTOREINMETALMAPRED=!1,d.METALLIC_REFLECTANCE=!1,d.METALLIC_REFLECTANCEDIRECTUV=0,d.ENVIRONMENTBRDF=!1,d.ENVIRONMENTBRDF_RGBD=!1,d.NORMAL=!1,d.TANGENT=!1,d.BUMP=!1,d.BUMPDIRECTUV=0,d.OBJECTSPACE_NORMALMAP=!1,d.PARALLAX=!1,d.PARALLAXOCCLUSION=!1,d.NORMALXYSCALE=!0,d.LIGHTMAP=!1,d.LIGHTMAPDIRECTUV=0,d.USELIGHTMAPASSHADOWMAP=!1,d.GAMMALIGHTMAP=!1,d.RGBDLIGHTMAP=!1,d.REFLECTION=!1,d.REFLECTIONMAP_3D=!1,d.REFLECTIONMAP_SPHERICAL=!1,d.REFLECTIONMAP_PLANAR=!1,d.REFLECTIONMAP_CUBIC=!1,d.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,d.REFLECTIONMAP_PROJECTION=!1,d.REFLECTIONMAP_SKYBOX=!1,d.REFLECTIONMAP_EXPLICIT=!1,d.REFLECTIONMAP_EQUIRECTANGULAR=!1,d.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,d.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,d.INVERTCUBICMAP=!1,d.USESPHERICALFROMREFLECTIONMAP=!1,d.USEIRRADIANCEMAP=!1,d.SPHERICAL_HARMONICS=!1,d.USESPHERICALINVERTEX=!1,d.REFLECTIONMAP_OPPOSITEZ=!1,d.LODINREFLECTIONALPHA=!1,d.GAMMAREFLECTION=!1,d.RGBDREFLECTION=!1,d.LINEARSPECULARREFLECTION=!1,d.RADIANCEOCCLUSION=!1,d.HORIZONOCCLUSION=!1,d.INSTANCES=!1,d.THIN_INSTANCES=!1,d.PREPASS=!1,d.PREPASS_IRRADIANCE=!1,d.PREPASS_IRRADIANCE_INDEX=-1,d.PREPASS_ALBEDO=!1,d.PREPASS_ALBEDO_INDEX=-1,d.PREPASS_DEPTH=!1,d.PREPASS_DEPTH_INDEX=-1,d.PREPASS_NORMAL=!1,d.PREPASS_NORMAL_INDEX=-1,d.PREPASS_POSITION=!1,d.PREPASS_POSITION_INDEX=-1,d.PREPASS_VELOCITY=!1,d.PREPASS_VELOCITY_INDEX=-1,d.PREPASS_REFLECTIVITY=!1,d.PREPASS_REFLECTIVITY_INDEX=-1,d.SCENE_MRT_COUNT=0,d.NUM_BONE_INFLUENCERS=0,d.BonesPerMesh=0,d.BONETEXTURE=!1,d.BONES_VELOCITY_ENABLED=!1,d.NONUNIFORMSCALING=!1,d.MORPHTARGETS=!1,d.MORPHTARGETS_NORMAL=!1,d.MORPHTARGETS_TANGENT=!1,d.MORPHTARGETS_UV=!1,d.NUM_MORPH_INFLUENCERS=0,d.MORPHTARGETS_TEXTURE=!1,d.IMAGEPROCESSING=!1,d.VIGNETTE=!1,d.VIGNETTEBLENDMODEMULTIPLY=!1,d.VIGNETTEBLENDMODEOPAQUE=!1,d.TONEMAPPING=!1,d.TONEMAPPING_ACES=!1,d.CONTRAST=!1,d.COLORCURVES=!1,d.COLORGRADING=!1,d.COLORGRADING3D=!1,d.SAMPLER3DGREENDEPTH=!1,d.SAMPLER3DBGRMAP=!1,d.IMAGEPROCESSINGPOSTPROCESS=!1,d.EXPOSURE=!1,d.MULTIVIEW=!1,d.USEPHYSICALLIGHTFALLOFF=!1,d.USEGLTFLIGHTFALLOFF=!1,d.TWOSIDEDLIGHTING=!1,d.SHADOWFLOAT=!1,d.CLIPPLANE=!1,d.CLIPPLANE2=!1,d.CLIPPLANE3=!1,d.CLIPPLANE4=!1,d.CLIPPLANE5=!1,d.CLIPPLANE6=!1,d.POINTSIZE=!1,d.FOG=!1,d.LOGARITHMICDEPTH=!1,d.FORCENORMALFORWARD=!1,d.SPECULARAA=!1,d.CLEARCOAT=!1,d.CLEARCOAT_DEFAULTIOR=!1,d.CLEARCOAT_TEXTURE=!1,d.CLEARCOAT_TEXTURE_ROUGHNESS=!1,d.CLEARCOAT_TEXTUREDIRECTUV=0,d.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,d.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,d.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,d.CLEARCOAT_BUMP=!1,d.CLEARCOAT_BUMPDIRECTUV=0,d.CLEARCOAT_REMAP_F0=!0,d.CLEARCOAT_TINT=!1,d.CLEARCOAT_TINT_TEXTURE=!1,d.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,d.ANISOTROPIC=!1,d.ANISOTROPIC_TEXTURE=!1,d.ANISOTROPIC_TEXTUREDIRECTUV=0,d.BRDF_V_HEIGHT_CORRELATED=!1,d.MS_BRDF_ENERGY_CONSERVATION=!1,d.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,d.SHEEN=!1,d.SHEEN_TEXTURE=!1,d.SHEEN_TEXTURE_ROUGHNESS=!1,d.SHEEN_TEXTUREDIRECTUV=0,d.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,d.SHEEN_LINKWITHALBEDO=!1,d.SHEEN_ROUGHNESS=!1,d.SHEEN_ALBEDOSCALING=!1,d.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,d.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,d.SUBSURFACE=!1,d.SS_REFRACTION=!1,d.SS_TRANSLUCENCY=!1,d.SS_SCATTERING=!1,d.SS_THICKNESSANDMASK_TEXTURE=!1,d.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,d.SS_REFRACTIONMAP_3D=!1,d.SS_REFRACTIONMAP_OPPOSITEZ=!1,d.SS_LODINREFRACTIONALPHA=!1,d.SS_GAMMAREFRACTION=!1,d.SS_RGBDREFRACTION=!1,d.SS_LINEARSPECULARREFRACTION=!1,d.SS_LINKREFRACTIONTOTRANSPARENCY=!1,d.SS_ALBEDOFORREFRACTIONTINT=!1,d.SS_MASK_FROM_THICKNESS_TEXTURE=!1,d.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,d.UNLIT=!1,d.DEBUGMODE=0,d.rebuild(),d}return P.prototype.reset=function(){z.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},P}(O.a),Bt=function(z){Object(f.d)(P,z);function P(d,A){var H=z.call(this,d,A)||this;return H._directIntensity=1,H._emissiveIntensity=1,H._environmentIntensity=1,H._specularIntensity=1,H._lightingInfos=new p.f(H._directIntensity,H._emissiveIntensity,H._environmentIntensity,H._specularIntensity),H._disableBumpMap=!1,H._albedoTexture=null,H._ambientTexture=null,H._ambientTextureStrength=1,H._ambientTextureImpactOnAnalyticalLights=P.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,H._opacityTexture=null,H._reflectionTexture=null,H._emissiveTexture=null,H._reflectivityTexture=null,H._metallicTexture=null,H._metallic=null,H._roughness=null,H._metallicF0Factor=1,H._metallicReflectanceColor=l.a.White(),H._metallicReflectanceTexture=null,H._microSurfaceTexture=null,H._bumpTexture=null,H._lightmapTexture=null,H._ambientColor=new l.a(0,0,0),H._albedoColor=new l.a(1,1,1),H._reflectivityColor=new l.a(1,1,1),H._reflectionColor=new l.a(1,1,1),H._emissiveColor=new l.a(0,0,0),H._microSurface=.9,H._useLightmapAsShadowmap=!1,H._useHorizonOcclusion=!0,H._useRadianceOcclusion=!0,H._useAlphaFromAlbedoTexture=!1,H._useSpecularOverAlpha=!0,H._useMicroSurfaceFromReflectivityMapAlpha=!1,H._useRoughnessFromMetallicTextureAlpha=!0,H._useRoughnessFromMetallicTextureGreen=!1,H._useMetallnessFromMetallicTextureBlue=!1,H._useAmbientOcclusionFromMetallicTextureRed=!1,H._useAmbientInGrayScale=!1,H._useAutoMicroSurfaceFromReflectivityMap=!1,H._lightFalloff=P.LIGHTFALLOFF_PHYSICAL,H._useRadianceOverAlpha=!0,H._useObjectSpaceNormalMap=!1,H._useParallax=!1,H._useParallaxOcclusion=!1,H._parallaxScaleBias=.05,H._disableLighting=!1,H._maxSimultaneousLights=4,H._invertNormalMapX=!1,H._invertNormalMapY=!1,H._twoSidedLighting=!1,H._alphaCutOff=.4,H._forceAlphaTest=!1,H._useAlphaFresnel=!1,H._useLinearAlphaFresnel=!1,H._environmentBRDFTexture=null,H._forceIrradianceInFragment=!1,H._realTimeFiltering=!1,H._realTimeFilteringQuality=8,H._forceNormalForward=!1,H._enableSpecularAntiAliasing=!1,H._imageProcessingObserver=null,H._renderTargets=new S.a(16),H._globalAmbientColor=new l.a(0,0,0),H._useLogarithmicDepth=!1,H._unlit=!1,H._debugMode=0,H.debugMode=0,H.debugLimit=-1,H.debugFactor=1,H.clearCoat=new t.a(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.anisotropy=new r(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.brdf=new a(H._markAllSubMeshesAsMiscDirty.bind(H)),H.sheen=new h(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.detailMap=new Fe.a(H._markAllSubMeshesAsTexturesDirty.bind(H)),H._rebuildInParallel=!1,H._attachImageProcessingConfiguration(null),H.getRenderTargetTextures=function(){return H._renderTargets.reset(),e.a.ReflectionTextureEnabled&&H._reflectionTexture&&H._reflectionTexture.isRenderTarget&&H._renderTargets.push(H._reflectionTexture),H.subSurface.fillRenderTargetTextures(H._renderTargets),H._renderTargets},H._environmentBRDFTexture=c.a.GetEnvironmentBRDFTexture(A),H.subSurface=new v(H._markAllSubMeshesAsTexturesDirty.bind(H),H._markScenePrePassDirty.bind(H),A),H.prePassConfiguration=new T.a,H}return Object.defineProperty(P.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(d){this._realTimeFiltering=d,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(d){this._realTimeFilteringQuality=d,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),P.prototype._attachImageProcessingConfiguration=function(d){var A=this;d!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),d?this._imageProcessingConfiguration=d:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){A._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(P.prototype,"hasRenderTargetTextures",{get:function(){return e.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),P.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(P.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(d){this._useLogarithmicDepth=d&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===P.PBRMATERIAL_OPAQUE||this._transparencyMode===P.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),P.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},P.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===P.PBRMATERIAL_ALPHATEST)},P.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==P.PBRMATERIAL_OPAQUE},P.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},P.prototype.getAlphaTestTexture=function(){return this._albedoTexture},P.prototype.isReadyForSubMesh=function(d,A,H){if(A.effect&&this.isFrozen&&A.effect._wasPreviouslyReady)return!0;A._materialDefines||(A._materialDefines=new Be);var ae=A._materialDefines;if(this._isReadyForSubMesh(A))return!0;var he=this.getScene(),te=he.getEngine();if(ae._areTexturesDirty&&he.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&e.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&e.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Re=this._getReflectionTexture();if(Re&&e.a.ReflectionTextureEnabled&&(!Re.isReadyOrNotBlocking()||Re.irradianceTexture&&!Re.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&e.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&e.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(e.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(te.getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(ae,he)||!this.clearCoat.isReadyForSubMesh(ae,he,te,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(ae,he)||!this.anisotropy.isReadyForSubMesh(ae,he)||!this.detailMap.isReadyForSubMesh(ae,he)||ae._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!te.getCaps().standardDerivatives&&!d.isVerticesDataPresent(i.b.NormalKind)&&(d.createNormals(!0),M.a.Warn("PBRMaterial: Normals have been created for the mesh: "+d.name));var oe=A.effect,k=ae._areLightsDisposed,de=this._prepareEffect(d,ae,this.onCompiled,this.onError,H,null,A.getRenderingMesh().hasThinInstances);if(de)if(this._onEffectCreatedObservable&&(ye.effect=de,ye.subMesh=A,this._onEffectCreatedObservable.notifyObservers(ye)),this.allowShaderHotSwapping&&oe&&!de.isReady()){if(de=oe,this._rebuildInParallel=!0,ae.markAsUnprocessed(),k)return ae._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,he.resetCachedMaterial(),A.setEffect(de,ae),this.buildUniformLayout();return!A.effect||!A.effect.isReady()?!1:(ae._renderId=he.getRenderId(),A.effect._wasPreviouslyReady=!0,!0)},P.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},P.prototype._prepareEffect=function(d,A,H,ae,he,te,Re){if(H===void 0&&(H=null),ae===void 0&&(ae=null),he===void 0&&(he=null),te===void 0&&(te=null),this._prepareDefines(d,A,he,te,Re),!A.isDirty)return null;A.markAsProcessed();var oe=this.getScene(),k=oe.getEngine(),de=new Nt.a,ge=0;A.USESPHERICALINVERTEX&&de.addFallback(ge++,"USESPHERICALINVERTEX"),A.FOG&&de.addFallback(ge,"FOG"),A.SPECULARAA&&de.addFallback(ge,"SPECULARAA"),A.POINTSIZE&&de.addFallback(ge,"POINTSIZE"),A.LOGARITHMICDEPTH&&de.addFallback(ge,"LOGARITHMICDEPTH"),A.PARALLAX&&de.addFallback(ge,"PARALLAX"),A.PARALLAXOCCLUSION&&de.addFallback(ge++,"PARALLAXOCCLUSION"),ge=r.AddFallbacks(A,de,ge),ge=r.AddFallbacks(A,de,ge),ge=v.AddFallbacks(A,de,ge),ge=h.AddFallbacks(A,de,ge),A.ENVIRONMENTBRDF&&de.addFallback(ge++,"ENVIRONMENTBRDF"),A.TANGENT&&de.addFallback(ge++,"TANGENT"),A.BUMP&&de.addFallback(ge++,"BUMP"),ge=n.a.HandleFallbacksForShadows(A,de,this._maxSimultaneousLights,ge++),A.SPECULARTERM&&de.addFallback(ge++,"SPECULARTERM"),A.USESPHERICALFROMREFLECTIONMAP&&de.addFallback(ge++,"USESPHERICALFROMREFLECTIONMAP"),A.USEIRRADIANCEMAP&&de.addFallback(ge++,"USEIRRADIANCEMAP"),A.LIGHTMAP&&de.addFallback(ge++,"LIGHTMAP"),A.NORMAL&&de.addFallback(ge++,"NORMAL"),A.AMBIENT&&de.addFallback(ge++,"AMBIENT"),A.EMISSIVE&&de.addFallback(ge++,"EMISSIVE"),A.VERTEXCOLOR&&de.addFallback(ge++,"VERTEXCOLOR"),A.MORPHTARGETS&&de.addFallback(ge++,"MORPHTARGETS"),A.MULTIVIEW&&de.addFallback(0,"MULTIVIEW");var Ae=[i.b.PositionKind];A.NORMAL&&Ae.push(i.b.NormalKind),A.TANGENT&&Ae.push(i.b.TangentKind),A.UV1&&Ae.push(i.b.UVKind),A.UV2&&Ae.push(i.b.UV2Kind),A.VERTEXCOLOR&&Ae.push(i.b.ColorKind),n.a.PrepareAttributesForBones(Ae,d,A,de),n.a.PrepareAttributesForInstances(Ae,A),n.a.PrepareAttributesForMorphTargets(Ae,d,A);var ue="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],De=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),v.AddUniforms(Pe),v.AddSamplers(be),t.a.AddUniforms(Pe),t.a.AddSamplers(be),r.AddUniforms(Pe),r.AddSamplers(be),h.AddUniforms(Pe),h.AddSamplers(be),T.a.AddUniforms(Pe),T.a.AddSamplers(Pe),_.a&&(_.a.PrepareUniforms(Pe,A),_.a.PrepareSamplers(be,A)),n.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:De,samplers:be,defines:A,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(ue=this.customShaderNameResolve(ue,Pe,De,be,A,Ae,Ne));var Ue=A.toString();return k.createEffect(ue,{attributes:Ae,uniformsNames:Pe,uniformBuffersNames:De,samplers:be,defines:Ue,fallbacks:de,onCompiled:H,onError:ae,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:A.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:A.PREPASS},k)},P.prototype._prepareDefines=function(d,A,H,ae,he){H===void 0&&(H=null),ae===void 0&&(ae=null),he===void 0&&(he=!1);var te=this.getScene(),Re=te.getEngine();if(n.a.PrepareDefinesForLights(te,d,A,!0,this._maxSimultaneousLights,this._disableLighting),A._needNormals=!0,n.a.PrepareDefinesForMultiview(te,A),n.a.PrepareDefinesForPrePass(te,A,this.canRenderToMRT),A.METALLICWORKFLOW=this.isMetallicWorkflow(),A._areTexturesDirty){if(A._needUVs=!1,te.texturesEnabled){te.getEngine().getCaps().textureLOD&&(A.LODBASEDMICROSFURACE=!0),this._albedoTexture&&e.a.DiffuseTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._albedoTexture,A,"ALBEDO"),A.GAMMAALBEDO=this._albedoTexture.gammaSpace):A.ALBEDO=!1,this._ambientTexture&&e.a.AmbientTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._ambientTexture,A,"AMBIENT"),A.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):A.AMBIENT=!1,this._opacityTexture&&e.a.OpacityTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._opacityTexture,A,"OPACITY"),A.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):A.OPACITY=!1;var oe=this._getReflectionTexture();if(oe&&e.a.ReflectionTextureEnabled){switch(A.REFLECTION=!0,A.GAMMAREFLECTION=oe.gammaSpace,A.RGBDREFLECTION=oe.isRGBD,A.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!oe.invertZ:oe.invertZ,A.LODINREFLECTIONALPHA=oe.lodLevelInAlpha,A.LINEARSPECULARREFLECTION=oe.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(A.NUM_SAMPLES=""+this.realTimeFilteringQuality,Re._features.needTypeSuffixInShaderConstants&&(A.NUM_SAMPLES=A.NUM_SAMPLES+"u"),A.REALTIME_FILTERING=!0):A.REALTIME_FILTERING=!1,oe.coordinatesMode===x.a.INVCUBIC_MODE&&(A.INVERTCUBICMAP=!0),A.REFLECTIONMAP_3D=oe.isCube,A.REFLECTIONMAP_CUBIC=!1,A.REFLECTIONMAP_EXPLICIT=!1,A.REFLECTIONMAP_PLANAR=!1,A.REFLECTIONMAP_PROJECTION=!1,A.REFLECTIONMAP_SKYBOX=!1,A.REFLECTIONMAP_SPHERICAL=!1,A.REFLECTIONMAP_EQUIRECTANGULAR=!1,A.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,A.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,oe.coordinatesMode){case x.a.EXPLICIT_MODE:A.REFLECTIONMAP_EXPLICIT=!0;break;case x.a.PLANAR_MODE:A.REFLECTIONMAP_PLANAR=!0;break;case x.a.PROJECTION_MODE:A.REFLECTIONMAP_PROJECTION=!0;break;case x.a.SKYBOX_MODE:A.REFLECTIONMAP_SKYBOX=!0;break;case x.a.SPHERICAL_MODE:A.REFLECTIONMAP_SPHERICAL=!0;break;case x.a.EQUIRECTANGULAR_MODE:A.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case x.a.FIXED_EQUIRECTANGULAR_MODE:A.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case x.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:A.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case x.a.CUBIC_MODE:case x.a.INVCUBIC_MODE:default:A.REFLECTIONMAP_CUBIC=!0,A.USE_LOCAL_REFLECTIONMAP_CUBIC=!!oe.boundingBoxSize;break}oe.coordinatesMode!==x.a.SKYBOX_MODE&&(oe.irradianceTexture?(A.USEIRRADIANCEMAP=!0,A.USESPHERICALFROMREFLECTIONMAP=!1):oe.isCube&&(A.USESPHERICALFROMREFLECTIONMAP=!0,A.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||te.getEngine().getCaps().maxVaryingVectors<=8?A.USESPHERICALINVERTEX=!1:A.USESPHERICALINVERTEX=!0))}else A.REFLECTION=!1,A.REFLECTIONMAP_3D=!1,A.REFLECTIONMAP_SPHERICAL=!1,A.REFLECTIONMAP_PLANAR=!1,A.REFLECTIONMAP_CUBIC=!1,A.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,A.REFLECTIONMAP_PROJECTION=!1,A.REFLECTIONMAP_SKYBOX=!1,A.REFLECTIONMAP_EXPLICIT=!1,A.REFLECTIONMAP_EQUIRECTANGULAR=!1,A.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,A.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,A.INVERTCUBICMAP=!1,A.USESPHERICALFROMREFLECTIONMAP=!1,A.USEIRRADIANCEMAP=!1,A.USESPHERICALINVERTEX=!1,A.REFLECTIONMAP_OPPOSITEZ=!1,A.LODINREFLECTIONALPHA=!1,A.GAMMAREFLECTION=!1,A.RGBDREFLECTION=!1,A.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&e.a.LightmapTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._lightmapTexture,A,"LIGHTMAP"),A.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,A.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,A.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):A.LIGHTMAP=!1,this._emissiveTexture&&e.a.EmissiveTextureEnabled?n.a.PrepareDefinesForMergedUV(this._emissiveTexture,A,"EMISSIVE"):A.EMISSIVE=!1,e.a.SpecularTextureEnabled?(this._metallicTexture?(n.a.PrepareDefinesForMergedUV(this._metallicTexture,A,"REFLECTIVITY"),A.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,A.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,A.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,A.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(n.a.PrepareDefinesForMergedUV(this._reflectivityTexture,A,"REFLECTIVITY"),A.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,A.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):A.REFLECTIVITY=!1,this._metallicReflectanceTexture?n.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,A,"METALLIC_REFLECTANCE"):A.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?n.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,A,"MICROSURFACEMAP"):A.MICROSURFACEMAP=!1):(A.REFLECTIVITY=!1,A.MICROSURFACEMAP=!1),te.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap?(n.a.PrepareDefinesForMergedUV(this._bumpTexture,A,"BUMP"),this._useParallax&&this._albedoTexture&&e.a.DiffuseTextureEnabled?(A.PARALLAX=!0,A.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):A.PARALLAX=!1,A.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):A.BUMP=!1,this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled?(A.ENVIRONMENTBRDF=!0,A.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(A.ENVIRONMENTBRDF=!1,A.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?A.ALPHAFROMALBEDO=!0:A.ALPHAFROMALBEDO=!1}A.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===P.LIGHTFALLOFF_STANDARD?(A.USEPHYSICALLIGHTFALLOFF=!1,A.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===P.LIGHTFALLOFF_GLTF?(A.USEPHYSICALLIGHTFALLOFF=!1,A.USEGLTFLIGHTFALLOFF=!0):(A.USEPHYSICALLIGHTFALLOFF=!0,A.USEGLTFLIGHTFALLOFF=!1),A.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?A.TWOSIDEDLIGHTING=!0:A.TWOSIDEDLIGHTING=!1,A.SPECULARAA=te.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(A._areTexturesDirty||A._areMiscDirty)&&(A.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),A.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,A.ALPHABLEND=this.needAlphaBlendingForMesh(d),A.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,A.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),A._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(A),A.FORCENORMALFORWARD=this._forceNormalForward,A.RADIANCEOCCLUSION=this._useRadianceOcclusion,A.HORIZONOCCLUSION=this._useHorizonOcclusion,A._areMiscDirty&&(n.a.PrepareDefinesForMisc(d,te,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(d)||this._forceAlphaTest,A),A.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!d.isVerticesDataPresent(i.b.NormalKind),A.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(A,te),this.subSurface.prepareDefines(A,te),this.clearCoat.prepareDefines(A,te),this.anisotropy.prepareDefines(A,d,te),this.brdf.prepareDefines(A),this.sheen.prepareDefines(A,te),n.a.PrepareDefinesForFrameBoundValues(te,Re,A,!!H,ae,he),n.a.PrepareDefinesForAttributes(d,A,!0,!0,!0,this._transparencyMode!==P.PBRMATERIAL_OPAQUE)},P.prototype.forceCompilation=function(d,A,H){var ae=this,he=Object(f.a)({clipPlane:!1,useInstances:!1},H),te=new Be,Re=this._prepareEffect(d,te,void 0,void 0,he.useInstances,he.clipPlane,d.hasThinInstances);this._onEffectCreatedObservable&&(ye.effect=Re,ye.subMesh=null,this._onEffectCreatedObservable.notifyObservers(ye)),Re.isReady()?A&&A(this):Re.onCompileObservable.add(function(){A&&A(ae)})},P.prototype.buildUniformLayout=function(){var d=this._uniformBuffer;d.addUniform("vAlbedoInfos",2),d.addUniform("vAmbientInfos",4),d.addUniform("vOpacityInfos",2),d.addUniform("vEmissiveInfos",2),d.addUniform("vLightmapInfos",2),d.addUniform("vReflectivityInfos",3),d.addUniform("vMicroSurfaceSamplerInfos",2),d.addUniform("vReflectionInfos",2),d.addUniform("vReflectionFilteringInfo",2),d.addUniform("vReflectionPosition",3),d.addUniform("vReflectionSize",3),d.addUniform("vBumpInfos",3),d.addUniform("albedoMatrix",16),d.addUniform("ambientMatrix",16),d.addUniform("opacityMatrix",16),d.addUniform("emissiveMatrix",16),d.addUniform("lightmapMatrix",16),d.addUniform("reflectivityMatrix",16),d.addUniform("microSurfaceSamplerMatrix",16),d.addUniform("bumpMatrix",16),d.addUniform("vTangentSpaceParams",2),d.addUniform("reflectionMatrix",16),d.addUniform("vReflectionColor",3),d.addUniform("vAlbedoColor",4),d.addUniform("vLightingIntensity",4),d.addUniform("vReflectionMicrosurfaceInfos",3),d.addUniform("pointSize",1),d.addUniform("vReflectivityColor",4),d.addUniform("vEmissiveColor",3),d.addUniform("vAmbientColor",3),d.addUniform("vDebugMode",2),d.addUniform("vMetallicReflectanceFactors",4),d.addUniform("vMetallicReflectanceInfos",2),d.addUniform("metallicReflectanceMatrix",16),t.a.PrepareUniformBuffer(d),r.PrepareUniformBuffer(d),h.PrepareUniformBuffer(d),v.PrepareUniformBuffer(d),Fe.a.PrepareUniformBuffer(d),d.addUniform("vSphericalL00",3),d.addUniform("vSphericalL1_1",3),d.addUniform("vSphericalL10",3),d.addUniform("vSphericalL11",3),d.addUniform("vSphericalL2_2",3),d.addUniform("vSphericalL2_1",3),d.addUniform("vSphericalL20",3),d.addUniform("vSphericalL21",3),d.addUniform("vSphericalL22",3),d.addUniform("vSphericalX",3),d.addUniform("vSphericalY",3),d.addUniform("vSphericalZ",3),d.addUniform("vSphericalXX_ZZ",3),d.addUniform("vSphericalYY_ZZ",3),d.addUniform("vSphericalZZ",3),d.addUniform("vSphericalXY",3),d.addUniform("vSphericalYZ",3),d.addUniform("vSphericalZX",3),d.create()},P.prototype.unbind=function(){if(this._activeEffect){var d=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),d=!0),this.subSurface.unbind(this._activeEffect)&&(d=!0),d&&this._markAllSubMeshesAsTexturesDirty()}z.prototype.unbind.call(this)},P.prototype.bindForSubMesh=function(d,A,H){var ae=this.getScene(),he=H._materialDefines;if(!!he){var te=H.effect;if(!!te){this._activeEffect=te,A.getMeshUniformBuffer().bindToEffect(te,"Mesh"),A.transferToEffect(d),this.prePassConfiguration.bindForSubMesh(this._activeEffect,ae,A,d,this.isFrozen),he.OBJECTSPACE_NORMALMAP&&(d.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Re=this._mustRebind(ae,te,A.visibility);n.a.BindBonesParameters(A,this._activeEffect,this.prePassConfiguration);var oe=null,k=this._uniformBuffer;if(Re){var de=ae.getEngine();if(k.bindToEffect(te,"Material"),this.bindViewProjection(te),oe=this._getReflectionTexture(),!k.useUbo||!this.isFrozen||!k.isSync){if(ae.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&(k.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),n.a.BindTextureMatrix(this._albedoTexture,k,"albedo")),this._ambientTexture&&e.a.AmbientTextureEnabled&&(k.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),n.a.BindTextureMatrix(this._ambientTexture,k,"ambient")),this._opacityTexture&&e.a.OpacityTextureEnabled&&(k.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),n.a.BindTextureMatrix(this._opacityTexture,k,"opacity")),oe&&e.a.ReflectionTextureEnabled){if(k.updateMatrix("reflectionMatrix",oe.getReflectionTextureMatrix()),k.updateFloat2("vReflectionInfos",oe.level,0),oe.boundingBoxSize){var ge=oe;k.updateVector3("vReflectionPosition",ge.boundingBoxPosition),k.updateVector3("vReflectionSize",ge.boundingBoxSize)}if(this.realTimeFiltering){var Ae=oe.getSize().width;k.updateFloat2("vReflectionFilteringInfo",Ae,u.a.Log2(Ae))}if(!he.USEIRRADIANCEMAP){var ue=oe.sphericalPolynomial;if(he.USESPHERICALFROMREFLECTIONMAP&&ue)if(he.SPHERICAL_HARMONICS){var Pe=ue.preScaledHarmonics;k.updateVector3("vSphericalL00",Pe.l00),k.updateVector3("vSphericalL1_1",Pe.l1_1),k.updateVector3("vSphericalL10",Pe.l10),k.updateVector3("vSphericalL11",Pe.l11),k.updateVector3("vSphericalL2_2",Pe.l2_2),k.updateVector3("vSphericalL2_1",Pe.l2_1),k.updateVector3("vSphericalL20",Pe.l20),k.updateVector3("vSphericalL21",Pe.l21),k.updateVector3("vSphericalL22",Pe.l22)}else k.updateFloat3("vSphericalX",ue.x.x,ue.x.y,ue.x.z),k.updateFloat3("vSphericalY",ue.y.x,ue.y.y,ue.y.z),k.updateFloat3("vSphericalZ",ue.z.x,ue.z.y,ue.z.z),k.updateFloat3("vSphericalXX_ZZ",ue.xx.x-ue.zz.x,ue.xx.y-ue.zz.y,ue.xx.z-ue.zz.z),k.updateFloat3("vSphericalYY_ZZ",ue.yy.x-ue.zz.x,ue.yy.y-ue.zz.y,ue.yy.z-ue.zz.z),k.updateFloat3("vSphericalZZ",ue.zz.x,ue.zz.y,ue.zz.z),k.updateFloat3("vSphericalXY",ue.xy.x,ue.xy.y,ue.xy.z),k.updateFloat3("vSphericalYZ",ue.yz.x,ue.yz.y,ue.yz.z),k.updateFloat3("vSphericalZX",ue.zx.x,ue.zx.y,ue.zx.z)}k.updateFloat3("vReflectionMicrosurfaceInfos",oe.getSize().width,oe.lodGenerationScale,oe.lodGenerationOffset)}this._emissiveTexture&&e.a.EmissiveTextureEnabled&&(k.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),n.a.BindTextureMatrix(this._emissiveTexture,k,"emissive")),this._lightmapTexture&&e.a.LightmapTextureEnabled&&(k.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),n.a.BindTextureMatrix(this._lightmapTexture,k,"lightmap")),e.a.SpecularTextureEnabled&&(this._metallicTexture?(k.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),n.a.BindTextureMatrix(this._metallicTexture,k,"reflectivity")):this._reflectivityTexture&&(k.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),n.a.BindTextureMatrix(this._reflectivityTexture,k,"reflectivity")),this._metallicReflectanceTexture&&(k.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),n.a.BindTextureMatrix(this._metallicReflectanceTexture,k,"metallicReflectance")),this._microSurfaceTexture&&(k.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),n.a.BindTextureMatrix(this._microSurfaceTexture,k,"microSurfaceSampler"))),this._bumpTexture&&de.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&(k.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),n.a.BindTextureMatrix(this._bumpTexture,k,"bump"),ae._mirroredCameraPosition?k.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):k.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&k.updateFloat("pointSize",this.pointSize),he.METALLICWORKFLOW){l.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,l.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,k.updateColor4("vReflectivityColor",l.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,De=1,Ne=Math.pow((be-De)/(be+De),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,l.c.Color3[0]);var Ue=this._metallicF0Factor;k.updateColor4("vMetallicReflectanceFactors",l.c.Color3[0],Ue)}else k.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);k.updateColor3("vEmissiveColor",e.a.EmissiveTextureEnabled?this._emissiveColor:l.a.BlackReadOnly),k.updateColor3("vReflectionColor",this._reflectionColor),!he.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?k.updateColor4("vAlbedoColor",this._albedoColor,1):k.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*ae.environmentIntensity,this._lightingInfos.w=this._specularIntensity,k.updateVector4("vLightingIntensity",this._lightingInfos),ae.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),k.updateColor3("vAmbientColor",this._globalAmbientColor),k.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}ae.texturesEnabled&&(this._albedoTexture&&e.a.DiffuseTextureEnabled&&k.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&e.a.AmbientTextureEnabled&&k.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&e.a.OpacityTextureEnabled&&k.setTexture("opacitySampler",this._opacityTexture),oe&&e.a.ReflectionTextureEnabled&&(he.LODBASEDMICROSFURACE?k.setTexture("reflectionSampler",oe):(k.setTexture("reflectionSampler",oe._lodTextureMid||oe),k.setTexture("reflectionSamplerLow",oe._lodTextureLow||oe),k.setTexture("reflectionSamplerHigh",oe._lodTextureHigh||oe)),he.USEIRRADIANCEMAP&&k.setTexture("irradianceSampler",oe.irradianceTexture)),he.ENVIRONMENTBRDF&&k.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&e.a.EmissiveTextureEnabled&&k.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&e.a.LightmapTextureEnabled&&k.setTexture("lightmapSampler",this._lightmapTexture),e.a.SpecularTextureEnabled&&(this._metallicTexture?k.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&k.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&k.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&k.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&de.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&k.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(k,ae,this.isFrozen),this.subSurface.bindForSubMesh(k,ae,de,this.isFrozen,he.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(k,ae,de,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,H),this.anisotropy.bindForSubMesh(k,ae,this.isFrozen),this.sheen.bindForSubMesh(k,ae,this.isFrozen,H),n.a.BindClipPlane(this._activeEffect,ae),this.bindEyePosition(te)}(Re||!this.isFrozen)&&(ae.lightsEnabled&&!this._disableLighting&&n.a.BindLights(ae,A,this._activeEffect,he,this._maxSimultaneousLights,this._rebuildInParallel),(ae.fogEnabled&&A.applyFog&&ae.fogMode!==E.a.FOGMODE_NONE||oe)&&this.bindView(te),n.a.BindFogParameters(ae,A,this._activeEffect,!0),he.NUM_MORPH_INFLUENCERS&&n.a.BindMorphTargetParameters(A,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),n.a.BindLogDepth(he,this._activeEffect,ae)),this._afterBind(A,this._activeEffect),k.update()}}},P.prototype.getAnimatables=function(){var d=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&d.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&d.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&d.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&d.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&d.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?d.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&d.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&d.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&d.push(this._lightmapTexture),this.detailMap.getAnimatables(d),this.subSurface.getAnimatables(d),this.clearCoat.getAnimatables(d),this.sheen.getAnimatables(d),this.anisotropy.getAnimatables(d),d},P.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},P.prototype.getActiveTextures=function(){var d=z.prototype.getActiveTextures.call(this);return this._albedoTexture&&d.push(this._albedoTexture),this._ambientTexture&&d.push(this._ambientTexture),this._opacityTexture&&d.push(this._opacityTexture),this._reflectionTexture&&d.push(this._reflectionTexture),this._emissiveTexture&&d.push(this._emissiveTexture),this._reflectivityTexture&&d.push(this._reflectivityTexture),this._metallicTexture&&d.push(this._metallicTexture),this._metallicReflectanceTexture&&d.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&d.push(this._microSurfaceTexture),this._bumpTexture&&d.push(this._bumpTexture),this._lightmapTexture&&d.push(this._lightmapTexture),this.detailMap.getActiveTextures(d),this.subSurface.getActiveTextures(d),this.clearCoat.getActiveTextures(d),this.sheen.getActiveTextures(d),this.anisotropy.getActiveTextures(d),d},P.prototype.hasTexture=function(d){return z.prototype.hasTexture.call(this,d)||this._albedoTexture===d||this._ambientTexture===d||this._opacityTexture===d||this._reflectionTexture===d||this._reflectivityTexture===d||this._metallicTexture===d||this._metallicReflectanceTexture===d||this._microSurfaceTexture===d||this._bumpTexture===d||this._lightmapTexture===d?!0:this.detailMap.hasTexture(d)||this.subSurface.hasTexture(d)||this.clearCoat.hasTexture(d)||this.sheen.hasTexture(d)||this.anisotropy.hasTexture(d)},P.prototype.setPrePassRenderer=function(d){if(this.subSurface.isScatteringEnabled){var A=this.getScene().enableSubSurfaceForPrePass();return A&&(A.enabled=!0),!0}return!1},P.prototype.dispose=function(d,A){var H,ae,he,te,Re,oe,k,de,ge,Ae,ue;A&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(H=this._albedoTexture)===null||H===void 0||H.dispose(),(ae=this._ambientTexture)===null||ae===void 0||ae.dispose(),(he=this._opacityTexture)===null||he===void 0||he.dispose(),(te=this._reflectionTexture)===null||te===void 0||te.dispose(),(Re=this._emissiveTexture)===null||Re===void 0||Re.dispose(),(oe=this._metallicTexture)===null||oe===void 0||oe.dispose(),(k=this._reflectivityTexture)===null||k===void 0||k.dispose(),(de=this._bumpTexture)===null||de===void 0||de.dispose(),(ge=this._lightmapTexture)===null||ge===void 0||ge.dispose(),(Ae=this._metallicReflectanceTexture)===null||Ae===void 0||Ae.dispose(),(ue=this._microSurfaceTexture)===null||ue===void 0||ue.dispose()),this.detailMap.dispose(A),this.subSurface.dispose(A),this.clearCoat.dispose(A),this.sheen.dispose(A),this.anisotropy.dispose(A),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),z.prototype.dispose.call(this,d,A)},P.PBRMATERIAL_OPAQUE=R.a.MATERIAL_OPAQUE,P.PBRMATERIAL_ALPHATEST=R.a.MATERIAL_ALPHATEST,P.PBRMATERIAL_ALPHABLEND=R.a.MATERIAL_ALPHABLEND,P.PBRMATERIAL_ALPHATESTANDBLEND=R.a.MATERIAL_ALPHATESTANDBLEND,P.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,P.LIGHTFALLOFF_PHYSICAL=0,P.LIGHTFALLOFF_GLTF=1,P.LIGHTFALLOFF_STANDARD=2,Object(f.c)([Object(s.i)()],P.prototype,"_imageProcessingConfiguration",void 0),Object(f.c)([Object(s.b)("_markAllSubMeshesAsMiscDirty")],P.prototype,"debugMode",void 0),Object(f.c)([Object(s.c)()],P.prototype,"useLogarithmicDepth",null),P}(L.a)},530:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var f=o(483),s=o(572),M=o(438),S=o(449),c=o(436),E=o(589),p=o(542),i=function(){function t(e,n,r,a,l,h,u,v,T,_){r===void 0&&(r=0),a===void 0&&(a=100),l===void 0&&(l=!1),h===void 0&&(h=1),_===void 0&&(_=!1),this.target=n,this.fromFrame=r,this.toFrame=a,this.loopAnimation=l,this.onAnimationEnd=u,this.onAnimationLoop=T,this.isAdditive=_,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new M.c,this.onAnimationLoopObservable=new M.c,this._scene=e,v&&this.appendAnimations(n,v),this._speedRatio=h,e._activeAnimatables.push(this)}return Object.defineProperty(t.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._weight},set:function(e){if(e===-1){this._weight=-1;return}this._weight=Math.min(Math.max(e,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(e){for(var n=0;n<this._runtimeAnimations.length;n++){var r=this._runtimeAnimations[n];r._prepareForSpeedRatioChange(e)}this._speedRatio=e},enumerable:!1,configurable:!0}),t.prototype.syncWith=function(e){if(this._syncRoot=e,e){var n=this._scene._activeAnimatables.indexOf(this);n>-1&&(this._scene._activeAnimatables.splice(n,1),this._scene._activeAnimatables.push(this))}return this},t.prototype.getAnimations=function(){return this._runtimeAnimations},t.prototype.appendAnimations=function(e,n){for(var r=this,a=0;a<n.length;a++){var l=n[a],h=new s.a(e,l,this._scene,this);h._onLoop=function(){r.onAnimationLoopObservable.notifyObservers(r),r.onAnimationLoop&&r.onAnimationLoop()},this._runtimeAnimations.push(h)}},t.prototype.getAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r].animation;return null},t.prototype.getRuntimeAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r];return null},t.prototype.reset=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},t.prototype.enableBlending=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)n[r].animation.enableBlending=!0,n[r].animation.blendingSpeed=e},t.prototype.disableBlending=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].animation.enableBlending=!1},t.prototype.goToFrame=function(e){var n=this._runtimeAnimations;if(n[0]){var r=n[0].animation.framePerSecond,a=n[0].currentFrame,l=this.speedRatio===0?0:(e-a)/r*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=l}for(var h=0;h<n.length;h++)n[h].goToFrame(e)},t.prototype.pause=function(){this._paused||(this._paused=!0)},t.prototype.restart=function(){this._paused=!1},t.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},t.prototype.stop=function(e,n){if(e||n){var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){for(var a=this._runtimeAnimations,l=a.length-1;l>=0;l--){var h=a[l];e&&h.animation.name!=e||n&&!n(h.target)||(h.dispose(),a.splice(l,1))}a.length==0&&(this._scene._activeAnimatables.splice(r,1),this._raiseOnAnimationEnd())}}else{var l=this._scene._activeAnimatables.indexOf(this);if(l>-1){this._scene._activeAnimatables.splice(l,1);for(var a=this._runtimeAnimations,l=0;l<a.length;l++)a[l].dispose();this._raiseOnAnimationEnd()}}},t.prototype.waitAsync=function(){var e=this;return new Promise(function(n,r){e.onAnimationEndObservable.add(function(){n(e)},void 0,void 0,e,!0)})},t.prototype._animate=function(e){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=e),!0;if(this._localDelayOffset===null?(this._localDelayOffset=e,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=e-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var n=!1,r=this._runtimeAnimations,a;for(a=0;a<r.length;a++){var l=r[a],h=l.animate(e-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);n=n||h}if(this.animationStarted=n,!n){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<r.length;a++)r[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return n},t}();S.a.prototype._animate=function(){if(!!this.animationsEnabled){var t=E.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=t}this.deltaTime=this.useConstantAnimationDeltaTime?16:(t-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=t;var e=this._activeAnimatables;if(e.length!==0){this._animationTime+=this.deltaTime;for(var n=this._animationTime,r=0;r<e.length;r++){var a=e[r];!a._animate(n)&&a.disposeOnEnd&&r--}this._processLateAnimationBindings()}}},S.a.prototype.beginWeightedAnimation=function(t,e,n,r,a,l,h,u,v,T,_){r===void 0&&(r=1),l===void 0&&(l=1),_===void 0&&(_=!1);var R=this.beginAnimation(t,e,n,a,l,h,u,!1,v,T,_);return R.weight=r,R},S.a.prototype.beginAnimation=function(t,e,n,r,a,l,h,u,v,T,_){a===void 0&&(a=1),u===void 0&&(u=!0),_===void 0&&(_=!1),e>n&&a>0&&(a*=-1),u&&this.stopAnimation(t,void 0,v),h||(h=new i(this,t,e,n,r,a,l,void 0,T,_));var R=v?v(t):!0;if(t.animations&&R&&h.appendAnimations(t,t.animations),t.getAnimatables)for(var O=t.getAnimatables(),L=0;L<O.length;L++)this.beginAnimation(O[L],e,n,r,a,l,h,u,v,T);return h.reset(),h},S.a.prototype.beginHierarchyAnimation=function(t,e,n,r,a,l,h,u,v,T,_,R){l===void 0&&(l=1),v===void 0&&(v=!0),R===void 0&&(R=!1);var O=t.getDescendants(e),L=[];L.push(this.beginAnimation(t,n,r,a,l,h,u,v,T,void 0,R));for(var x=0,U=O;x<U.length;x++){var F=U[x];L.push(this.beginAnimation(F,n,r,a,l,h,u,v,T,void 0,R))}return L},S.a.prototype.beginDirectAnimation=function(t,e,n,r,a,l,h,u,v){v===void 0&&(v=!1),l===void 0&&(l=1),n>r&&l>0&&(l*=-1);var T=new i(this,t,n,r,a,l,h,e,u,v);return T},S.a.prototype.beginDirectHierarchyAnimation=function(t,e,n,r,a,l,h,u,v,T){T===void 0&&(T=!1);var _=t.getDescendants(e),R=[];R.push(this.beginDirectAnimation(t,n,r,a,l,h,u,v,T));for(var O=0,L=_;O<L.length;O++){var x=L[O];R.push(this.beginDirectAnimation(x,n,r,a,l,h,u,v,T))}return R},S.a.prototype.getAnimatableByTarget=function(t){for(var e=0;e<this._activeAnimatables.length;e++)if(this._activeAnimatables[e].target===t)return this._activeAnimatables[e];return null},S.a.prototype.getAllAnimatablesByTarget=function(t){for(var e=[],n=0;n<this._activeAnimatables.length;n++)this._activeAnimatables[n].target===t&&e.push(this._activeAnimatables[n]);return e},S.a.prototype.stopAnimation=function(t,e,n){for(var r=this.getAllAnimatablesByTarget(t),a=0,l=r;a<l.length;a++){var h=l[a];h.stop(e,n)}},S.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var t=0;t<this._activeAnimatables.length;t++)this._activeAnimatables[t].stop();this._activeAnimatables=[]}for(var e=0,n=this.animationGroups;e<n.length;e++){var r=n[e];r.stop()}},S.a.prototype._registerTargetForLateAnimationBinding=function(t,e){var n=t.target;this._registeredForLateAnimationBindings.pushNoDuplicate(n),n._lateAnimationHolders||(n._lateAnimationHolders={}),n._lateAnimationHolders[t.targetPath]||(n._lateAnimationHolders[t.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:e}),t.isAdditive?(n._lateAnimationHolders[t.targetPath].additiveAnimations.push(t),n._lateAnimationHolders[t.targetPath].totalAdditiveWeight+=t.weight):(n._lateAnimationHolders[t.targetPath].animations.push(t),n._lateAnimationHolders[t.targetPath].totalWeight+=t.weight)},S.a.prototype._processLateAnimationBindingsForMatrices=function(t){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return t.originalValue;var e=1,n=c.c.Vector3[0],r=c.c.Vector3[1],a=c.c.Quaternion[0],l=0,h=t.animations[0],u=t.originalValue,v=1,T=!1;if(t.totalWeight<1)v=1-t.totalWeight,u.decompose(r,a,n);else{if(l=1,e=t.totalWeight,v=h.weight/e,v==1)if(t.totalAdditiveWeight)T=!0;else return h.currentValue;h.currentValue.decompose(r,a,n)}if(!T){r.scaleInPlace(v),n.scaleInPlace(v),a.scaleInPlace(v);for(var _=l;_<t.animations.length;_++){var R=t.animations[_];if(R.weight!==0){var v=R.weight/e,O=c.c.Vector3[2],L=c.c.Vector3[3],x=c.c.Quaternion[1];R.currentValue.decompose(L,x,O),L.scaleAndAddToRef(v,r),x.scaleAndAddToRef(v,a),O.scaleAndAddToRef(v,n)}}}for(var U=0;U<t.additiveAnimations.length;U++){var R=t.additiveAnimations[U];if(R.weight!==0){var O=c.c.Vector3[2],L=c.c.Vector3[3],x=c.c.Quaternion[1];R.currentValue.decompose(L,x,O),L.multiplyToRef(r,L),c.e.LerpToRef(r,L,R.weight,r),a.multiplyToRef(x,x),c.b.SlerpToRef(a,x,R.weight,a),O.scaleAndAddToRef(R.weight,n)}}var F=h?h._animationState.workValue:c.c.Matrix[0].clone();return c.a.ComposeToRef(r,a,n,F),F},S.a.prototype._processLateAnimationBindingsForQuaternions=function(t,e){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return e;var n=t.animations[0],r=t.originalValue,a=e;if(t.totalWeight===0&&t.totalAdditiveWeight>0)a.copyFrom(r);else if(t.animations.length===1){if(c.b.SlerpToRef(r,n.currentValue,Math.min(1,t.totalWeight),a),t.totalAdditiveWeight===0)return a}else if(t.animations.length>1){var l=1,h=void 0,u=void 0;if(t.totalWeight<1){var v=1-t.totalWeight;h=[],u=[],h.push(r),u.push(v)}else{if(t.animations.length===2&&(c.b.SlerpToRef(t.animations[0].currentValue,t.animations[1].currentValue,t.animations[1].weight/t.totalWeight,e),t.totalAdditiveWeight===0))return e;h=[],u=[],l=t.totalWeight}for(var T=0;T<t.animations.length;T++){var _=t.animations[T];h.push(_.currentValue),u.push(_.weight/l)}for(var R=0,O=0;O<h.length;){if(!O){c.b.SlerpToRef(h[O],h[O+1],u[O+1]/(u[O]+u[O+1]),e),a=e,R=u[O]+u[O+1],O+=2;continue}R+=u[O],c.b.SlerpToRef(a,h[O],u[O]/R,a),O++}}for(var L=0;L<t.additiveAnimations.length;L++){var _=t.additiveAnimations[L];_.weight!==0&&(a.multiplyToRef(_.currentValue,c.c.Quaternion[0]),c.b.SlerpToRef(a,c.c.Quaternion[0],_.weight,a))}return a},S.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var t=0;t<this._registeredForLateAnimationBindings.length;t++){var e=this._registeredForLateAnimationBindings.data[t];for(var n in e._lateAnimationHolders){var r=e._lateAnimationHolders[n],a=r.animations[0],l=r.originalValue,h=f.a.AllowMatrixDecomposeForInterpolation&&l.m,u=e[n];if(h)u=this._processLateAnimationBindingsForMatrices(r);else{var v=l.w!==void 0;if(v)u=this._processLateAnimationBindingsForQuaternions(r,u||c.b.Identity());else{var T=0,_=1;if(r.totalWeight<1)a&&l.scale?u=l.scale(1-r.totalWeight):a?u=l*(1-r.totalWeight):l.clone?u=l.clone():u=l;else if(a){_=r.totalWeight;var R=a.weight/_;R!==1?a.currentValue.scale?u=a.currentValue.scale(R):u=a.currentValue*R:u=a.currentValue,T=1}for(var O=T;O<r.animations.length;O++){var L=r.animations[O],x=L.weight/_;if(x)L.currentValue.scaleAndAddToRef?L.currentValue.scaleAndAddToRef(x,u):u+=L.currentValue*x;else continue}for(var U=0;U<r.additiveAnimations.length;U++){var L=r.additiveAnimations[U],x=L.weight;if(x)L.currentValue.scaleAndAddToRef?L.currentValue.scaleAndAddToRef(x,u):u+=L.currentValue*x;else continue}}}e[n]=u}e._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},p.a.prototype.copyAnimationRange=function(t,e,n,r,a){r===void 0&&(r=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new f.a(this.name,"_matrix",t.animations[0].framePerSecond,f.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var l=t.animations[0].getRange(e);if(!l)return!1;for(var h=l.from,u=l.to,v=t.animations[0].getKeys(),T=t.length,_=t.getParent(),R=this.getParent(),O=r&&_&&T&&this.length&&T!==this.length,L=O&&R&&_?R.length/_.length:1,x=r&&!R&&a&&(a.x!==1||a.y!==1||a.z!==1),U=this.animations[0].getKeys(),F,V,b,y=0,g=v.length;y<g;y++)F=v[y],F.frame>=h&&F.frame<=u&&(r?(b=F.value.clone(),O?(V=b.getTranslation(),b.setTranslation(V.scaleInPlace(L))):x&&a?(V=b.getTranslation(),b.setTranslation(V.multiplyInPlace(a))):b=F.value):b=F.value,U.push({frame:F.frame+n,value:b}));return this.animations[0].createRange(e,h+n,u+n),!0}},532:function(J,j,o){"use strict";var f=o(467),s=o(456);f.a.prototype.createDynamicTexture=function(M,S,c,E){var p=new s.a(this,s.b.Dynamic);return p.baseWidth=M,p.baseHeight=S,c&&(M=this.needPOTTextures?f.a.GetExponentOfTwo(M,this._caps.maxTextureSize):M,S=this.needPOTTextures?f.a.GetExponentOfTwo(S,this._caps.maxTextureSize):S),p.width=M,p.height=S,p.isReady=!1,p.generateMipMaps=c,p.samplingMode=E,this.updateTextureSamplingMode(E,p),this._internalTexturesCache.push(p),p},f.a.prototype.updateDynamicTexture=function(M,S,c,E,p,i){if(E===void 0&&(E=!1),i===void 0&&(i=!1),!!M){var t=this._gl,e=t.TEXTURE_2D,n=this._bindTextureDirectly(e,M,!0,i);this._unpackFlipY(c===void 0?M.invertY:c),E&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var r=this._getWebGLTextureType(M.type),a=this._getInternalFormat(p||M.format),l=this._getRGBABufferInternalSizedFormat(M.type,a);t.texImage2D(e,0,l,a,r,S),M.generateMipMaps&&t.generateMipmap(e),n||this._bindTextureDirectly(e,null),E&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),M.isReady=!0}}},533:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var f=o(434),s=o(439),M=o(514),S=o(441),c=o(529),E=o(437),p=function(i){Object(f.d)(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.directIntensity=1,r.emissiveIntensity=1,r.environmentIntensity=1,r.specularIntensity=1,r.disableBumpMap=!1,r.ambientTextureStrength=1,r.ambientTextureImpactOnAnalyticalLights=t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,r.metallicF0Factor=1,r.metallicReflectanceColor=S.a.White(),r.ambientColor=new S.a(0,0,0),r.albedoColor=new S.a(1,1,1),r.reflectivityColor=new S.a(1,1,1),r.reflectionColor=new S.a(1,1,1),r.emissiveColor=new S.a(0,0,0),r.microSurface=1,r.useLightmapAsShadowmap=!1,r.useAlphaFromAlbedoTexture=!1,r.forceAlphaTest=!1,r.alphaCutOff=.4,r.useSpecularOverAlpha=!0,r.useMicroSurfaceFromReflectivityMapAlpha=!1,r.useRoughnessFromMetallicTextureAlpha=!0,r.useRoughnessFromMetallicTextureGreen=!1,r.useMetallnessFromMetallicTextureBlue=!1,r.useAmbientOcclusionFromMetallicTextureRed=!1,r.useAmbientInGrayScale=!1,r.useAutoMicroSurfaceFromReflectivityMap=!1,r.useRadianceOverAlpha=!0,r.useObjectSpaceNormalMap=!1,r.useParallax=!1,r.useParallaxOcclusion=!1,r.parallaxScaleBias=.05,r.disableLighting=!1,r.forceIrradianceInFragment=!1,r.maxSimultaneousLights=4,r.invertNormalMapX=!1,r.invertNormalMapY=!1,r.twoSidedLighting=!1,r.useAlphaFresnel=!1,r.useLinearAlphaFresnel=!1,r.environmentBRDFTexture=null,r.forceNormalForward=!1,r.enableSpecularAntiAliasing=!1,r.useHorizonOcclusion=!0,r.useRadianceOcclusion=!0,r.unlit=!1,r._environmentBRDFTexture=M.a.GetEnvironmentBRDFTexture(n),r}return Object.defineProperty(t.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(e){this.subSurface.refractionTexture=e,e?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(e){this.subSurface.indexOfRefraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(e){this.subSurface.invertRefractionY=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(e){this.subSurface.linkRefractionWithTransparency=e,e&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_PHYSICAL},set:function(e){e!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=c.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_GLTF},set:function(e){e!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=c.a.LIGHTFALLOFF_GLTF:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(e){this.imageProcessingConfiguration.colorCurvesEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(e){this.imageProcessingConfiguration.colorGradingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(e){this._imageProcessingConfiguration.toneMappingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(e){this._imageProcessingConfiguration.exposure=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(e){this._imageProcessingConfiguration.contrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(e){this._imageProcessingConfiguration.colorGradingTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(e){this._imageProcessingConfiguration.colorCurves=e},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"PBRMaterial"},t.prototype.clone=function(e){var n=this,r=s.a.Clone(function(){return new t(e,n.getScene())},this);return r.id=e,r.name=e,this.clearCoat.copyTo(r.clearCoat),this.anisotropy.copyTo(r.anisotropy),this.brdf.copyTo(r.brdf),this.sheen.copyTo(r.sheen),this.subSurface.copyTo(r.subSurface),r},t.prototype.serialize=function(){var e=s.a.Serialize(this);return e.customType="BABYLON.PBRMaterial",e.clearCoat=this.clearCoat.serialize(),e.anisotropy=this.anisotropy.serialize(),e.brdf=this.brdf.serialize(),e.sheen=this.sheen.serialize(),e.subSurface=this.subSurface.serialize(),e},t.Parse=function(e,n,r){var a=s.a.Parse(function(){return new t(e.name,n)},e,n,r);return e.clearCoat&&a.clearCoat.parse(e.clearCoat,n,r),e.anisotropy&&a.anisotropy.parse(e.anisotropy,n,r),e.brdf&&a.brdf.parse(e.brdf,n,r),e.sheen&&a.sheen.parse(e.sheen,n,r),e.subSurface&&a.subSurface.parse(e.subSurface,n,r),a},t.PBRMATERIAL_OPAQUE=c.a.PBRMATERIAL_OPAQUE,t.PBRMATERIAL_ALPHATEST=c.a.PBRMATERIAL_ALPHATEST,t.PBRMATERIAL_ALPHABLEND=c.a.PBRMATERIAL_ALPHABLEND,t.PBRMATERIAL_ALPHATESTANDBLEND=c.a.PBRMATERIAL_ALPHATESTANDBLEND,t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=c.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"directIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"specularIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"disableBumpMap",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureStrength",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"opacityTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallic",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"roughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicF0Factor",void 0),Object(f.c)([Object(s.e)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceColor",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurfaceTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty",null)],t.prototype,"lightmapTexture",void 0),Object(f.c)([Object(s.e)("ambient"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientColor",void 0),Object(f.c)([Object(s.e)("albedo"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoColor",void 0),Object(f.c)([Object(s.e)("reflectivity"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityColor",void 0),Object(f.c)([Object(s.e)("reflection"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionColor",void 0),Object(f.c)([Object(s.e)("emissive"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveColor",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurface",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLightmapAsShadowmap",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"useAlphaFromAlbedoTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"forceAlphaTest",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"alphaCutOff",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useSpecularOverAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientInGrayScale",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(f.c)([Object(s.c)()],t.prototype,"usePhysicalLightFalloff",null),Object(f.c)([Object(s.c)()],t.prototype,"useGLTFLightFalloff",null),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOverAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useObjectSpaceNormalMap",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallax",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallaxOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"parallaxScaleBias",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceIrradianceInFragment",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapX",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapY",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"twoSidedLighting",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAlphaFresnel",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLinearAlphaFresnel",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentBRDFTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceNormalForward",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"enableSpecularAntiAliasing",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useHorizonOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],t.prototype,"unlit",void 0),t}(c.a);E.a.RegisteredTypes["BABYLON.PBRMaterial"]=p},534:function(J,j,o){"use strict";var f=o(435),s="postprocessVertexShader",M=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[s]=M;var S={name:s,shader:M}},535:function(J,j,o){"use strict";var f=o(435),s="packingFunctions",M=`vec4 pack(float depth)
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
}`;f.a.IncludesShadersStore[s]=M;var S={name:s,shader:M}},538:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var f=o(434),s=o(442),M=o(458),S=o(574),c=function(E){Object(f.d)(p,E);function p(i,t,e,n,r){var a=this,l=r&&r.generateMipMaps?r.generateMipMaps:!1,h=r&&r.generateDepthTexture?r.generateDepthTexture:!1,u=!r||r.doNotChangeAspectRatio===void 0?!0:r.doNotChangeAspectRatio,v=r&&r.drawOnlyOnFirstAttachmentByDefault?r.drawOnlyOnFirstAttachmentByDefault:!1;if(a=E.call(this,i,t,n,l,u,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var T=[],_=[];a._initTypes(e,T,_,r);var R=!r||r.generateDepthBuffer===void 0?!0:r.generateDepthBuffer,O=!r||r.generateStencilBuffer===void 0?!1:r.generateStencilBuffer;return a._size=t,a._multiRenderTargetOptions={samplingModes:_,generateMipMaps:l,generateDepthBuffer:R,generateStencilBuffer:O,generateDepthTexture:h,types:T,textureCount:e},a._count=e,a._drawOnlyOnFirstAttachmentByDefault=v,e>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(p.prototype,"isSupported",{get:function(){var i,t;return(t=(i=this._engine)===null||i===void 0?void 0:i.getCaps().drawBuffersExtension)!==null&&t!==void 0?t:!1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapU",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapU=i},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapV",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapV=i},enumerable:!1,configurable:!0}),p.prototype._initTypes=function(i,t,e,n){for(var r=0;r<i;r++)n&&n.types&&n.types[r]!==void 0?t.push(n.types[r]):t.push(n&&n.defaultType?n.defaultType:0),n&&n.samplingModes&&n.samplingModes[r]!==void 0?e.push(n.samplingModes[r]):e.push(s.a.BILINEAR_SAMPLINGMODE)},p.prototype._rebuild=function(i){if(i===void 0&&(i=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),i&&this._createTextures();for(var t=0;t<this._internalTextures.length;t++){var e=this._textures[t];e._texture=this._internalTextures[t]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},p.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},p.prototype._createTextures=function(){this._textures=[];for(var i=0;i<this._internalTextures.length;i++){var t=new s.a(null,this.getScene());t._texture=this._internalTextures[i],this._textures.push(t)}},p.prototype.replaceTexture=function(i,t){i._texture&&(this._textures[t]=i,this._internalTextures[t]=i._texture,t===0&&(this._texture=this._internalTextures[t]))},Object.defineProperty(p.prototype,"samples",{get:function(){return this._samples},set:function(i){this._samples!==i&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,i):this._samples=i)},enumerable:!1,configurable:!0}),p.prototype.resize=function(i){this._size=i,this._rebuild()},p.prototype.updateCount=function(i,t){this._multiRenderTargetOptions.textureCount=i,this._count=i;var e=[],n=[];this._initTypes(i,e,n,t),this._multiRenderTargetOptions.types=e,this._multiRenderTargetOptions.samplingModes=n,this._rebuild(!0)},p.prototype.unbindFrameBuffer=function(i,t){var e=this;i.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){e.onAfterRenderObservable.notifyObservers(t)})},p.prototype.dispose=function(){this.releaseInternalTextures(),E.prototype.dispose.call(this)},p.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var i=this._internalTextures.length-1;i>=0;i--)this._internalTextures[i]!==void 0&&(this._internalTextures[i].dispose(),this._internalTextures.splice(i,1))},p}(M.a)},542:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var f=o(434),s=o(436),M=o(588),S=o(453),c=o(465),E=function(p){Object(f.d)(i,p);function i(t,e,n,r,a,l,h){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),l===void 0&&(l=null),h===void 0&&(h=null);var u=p.call(this,t,e.getScene())||this;return u.name=t,u.children=new Array,u.animations=new Array,u._index=null,u._absoluteTransform=new s.a,u._invertedAbsoluteTransform=new s.a,u._scalingDeterminant=1,u._worldTransform=new s.a,u._needToDecompose=!0,u._needToCompose=!1,u._linkedTransformNode=null,u._waitingTransformNodeId=null,u._skeleton=e,u._localMatrix=r?r.clone():s.a.Identity(),u._restPose=a||u._localMatrix.clone(),u._bindPose=u._localMatrix.clone(),u._baseMatrix=l||u._localMatrix.clone(),u._index=h,e.bones.push(u),u.setParent(n,!1),(l||r)&&u._updateDifferenceMatrix(),u}return Object.defineProperty(i.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(t){this._localMatrix.copyFrom(t),this._needToDecompose=!0},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"Bone"},i.prototype.getSkeleton=function(){return this._skeleton},i.prototype.getParent=function(){return this._parent},i.prototype.getChildren=function(){return this.children},i.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},i.prototype.setParent=function(t,e){if(e===void 0&&(e=!0),this._parent!==t){if(this._parent){var n=this._parent.children.indexOf(this);n!==-1&&this._parent.children.splice(n,1)}this._parent=t,this._parent&&this._parent.children.push(this),e&&this._updateDifferenceMatrix(),this.markAsDirty()}},i.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},i.prototype.getBaseMatrix=function(){return this._baseMatrix},i.prototype.getRestPose=function(){return this._restPose},i.prototype.setRestPose=function(t){this._restPose.copyFrom(t)},i.prototype.getBindPose=function(){return this._bindPose},i.prototype.setBindPose=function(t){this._bindPose.copyFrom(t)},i.prototype.getWorldMatrix=function(){return this._worldTransform},i.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},i.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},i.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},i.prototype.linkTransformNode=function(t){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=t,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},i.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(i.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(t){this._decompose(),this._localPosition.copyFrom(t),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.getRotation()},set:function(t){this.setRotation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(t){this.setRotationQuaternion(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"scaling",{get:function(){return this.getScale()},set:function(t){this.setScale(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),i.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=s.e.Zero(),this._localRotation=s.b.Zero(),this._localPosition=s.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},i.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,s.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},i.prototype.updateMatrix=function(t,e,n){e===void 0&&(e=!0),n===void 0&&(n=!0),this._baseMatrix.copyFrom(t),e&&this._updateDifferenceMatrix(),n?(this._needToCompose=!1,this._localMatrix.copyFrom(t),this._markAsDirtyAndDecompose()):this.markAsDirty()},i.prototype._updateDifferenceMatrix=function(t,e){if(e===void 0&&(e=!0),t||(t=this._baseMatrix),this._parent?t.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(t),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),e)for(var n=0;n<this.children.length;n++)this.children[n]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},i.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},i.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},i.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},i.prototype.translate=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix();if(e==c.c.LOCAL)r.addAtIndex(12,t.x),r.addAtIndex(13,t.y),r.addAtIndex(14,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0],h=i._tmpVecs[0];this._parent?n&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()):s.a.IdentityToRef(l),l.setTranslationFromFloats(0,0,0),l.invert(),s.e.TransformCoordinatesToRef(t,l,h),r.addAtIndex(12,h.x),r.addAtIndex(13,h.y),r.addAtIndex(14,h.z)}this._markAsDirtyAndDecompose()},i.prototype.setPosition=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix();if(e==c.c.LOCAL)r.setTranslationFromFloats(t.x,t.y,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0],h=i._tmpVecs[0];this._parent?(n&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()),l.invert()):s.a.IdentityToRef(l),s.e.TransformCoordinatesToRef(t,l,h),r.setTranslationFromFloats(h.x,h.y,h.z)}this._markAsDirtyAndDecompose()},i.prototype.setAbsolutePosition=function(t,e){this.setPosition(t,c.c.WORLD,e)},i.prototype.scale=function(t,e,n,r){r===void 0&&(r=!1);var a=this.getLocalMatrix(),l=i._tmpMats[0];s.a.ScalingToRef(t,e,n,l),l.multiplyToRef(a,a),l.invert();for(var h=0,u=this.children;h<u.length;h++){var v=u[h],T=v.getLocalMatrix();T.multiplyToRef(l,T),T.multiplyAtIndex(12,t),T.multiplyAtIndex(13,e),T.multiplyAtIndex(14,n),v._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var _=0,R=this.children;_<R.length;_++){var v=R[_];v.scale(t,e,n,r)}},i.prototype.setScale=function(t){this._decompose(),this._localScaling.copyFrom(t),this._markAsDirtyAndCompose()},i.prototype.getScale=function(){return this._decompose(),this._localScaling},i.prototype.getScaleToRef=function(t){this._decompose(),t.copyFrom(this._localScaling)},i.prototype.setYawPitchRoll=function(t,e,n,r,a){if(r===void 0&&(r=c.c.LOCAL),r===c.c.LOCAL){var l=i._tmpQuat;s.b.RotationYawPitchRollToRef(t,e,n,l),this.setRotationQuaternion(l,r,a);return}var h=i._tmpMats[0];if(!!this._getNegativeRotationToRef(h,a)){var u=i._tmpMats[1];s.a.RotationYawPitchRollToRef(t,e,n,u),h.multiplyToRef(u,u),this._rotateWithMatrix(u,r,a)}},i.prototype.rotate=function(t,e,n,r){n===void 0&&(n=c.c.LOCAL);var a=i._tmpMats[0];a.setTranslationFromFloats(0,0,0),s.a.RotationAxisToRef(t,e,a),this._rotateWithMatrix(a,n,r)},i.prototype.setAxisAngle=function(t,e,n,r){if(n===void 0&&(n=c.c.LOCAL),n===c.c.LOCAL){var a=i._tmpQuat;s.b.RotationAxisToRef(t,e,a),this.setRotationQuaternion(a,n,r);return}var l=i._tmpMats[0];if(!!this._getNegativeRotationToRef(l,r)){var h=i._tmpMats[1];s.a.RotationAxisToRef(t,e,h),l.multiplyToRef(h,h),this._rotateWithMatrix(h,n,r)}},i.prototype.setRotation=function(t,e,n){e===void 0&&(e=c.c.LOCAL),this.setYawPitchRoll(t.y,t.x,t.z,e,n)},i.prototype.setRotationQuaternion=function(t,e,n){if(e===void 0&&(e=c.c.LOCAL),e===c.c.LOCAL){this._decompose(),this._localRotation.copyFrom(t),this._markAsDirtyAndCompose();return}var r=i._tmpMats[0];if(!!this._getNegativeRotationToRef(r,n)){var a=i._tmpMats[1];s.a.FromQuaternionToRef(t,a),r.multiplyToRef(a,a),this._rotateWithMatrix(a,e,n)}},i.prototype.setRotationMatrix=function(t,e,n){if(e===void 0&&(e=c.c.LOCAL),e===c.c.LOCAL){var r=i._tmpQuat;s.b.FromRotationMatrixToRef(t,r),this.setRotationQuaternion(r,e,n);return}var a=i._tmpMats[0];if(!!this._getNegativeRotationToRef(a,n)){var l=i._tmpMats[1];l.copyFrom(t),a.multiplyToRef(t,l),this._rotateWithMatrix(l,e,n)}},i.prototype._rotateWithMatrix=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix(),a=r.m[12],l=r.m[13],h=r.m[14],u=this.getParent(),v=i._tmpMats[3],T=i._tmpMats[4];u&&e==c.c.WORLD?(n?(v.copyFrom(n.getWorldMatrix()),u.getAbsoluteTransform().multiplyToRef(v,v)):v.copyFrom(u.getAbsoluteTransform()),T.copyFrom(v),T.invert(),r.multiplyToRef(v,r),r.multiplyToRef(t,r),r.multiplyToRef(T,r)):e==c.c.WORLD&&n?(v.copyFrom(n.getWorldMatrix()),T.copyFrom(v),T.invert(),r.multiplyToRef(v,r),r.multiplyToRef(t,r),r.multiplyToRef(T,r)):r.multiplyToRef(t,r),r.setTranslationFromFloats(a,l,h),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},i.prototype._getNegativeRotationToRef=function(t,e){var n=i._tmpMats[2];return t.copyFrom(this.getAbsoluteTransform()),e&&(t.multiplyToRef(e.getWorldMatrix(),t),s.a.ScalingToRef(e.scaling.x,e.scaling.y,e.scaling.z,n)),t.invert(),isNaN(t.m[0])?!1:(n.multiplyAtIndex(0,this._scalingDeterminant),t.multiplyToRef(n,t),!0)},i.prototype.getPosition=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getPositionToRef(t,e,n),n},i.prototype.getPositionToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),t==c.c.LOCAL){var r=this.getLocalMatrix();n.x=r.m[12],n.y=r.m[13],n.z=r.m[14]}else{var a=null;e&&(a=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0];e&&a?(l.copyFrom(this.getAbsoluteTransform()),l.multiplyToRef(a,l)):l=this.getAbsoluteTransform(),n.x=l.m[12],n.y=l.m[13],n.z=l.m[14]}},i.prototype.getAbsolutePosition=function(t){t===void 0&&(t=null);var e=s.e.Zero();return this.getPositionToRef(c.c.WORLD,t,e),e},i.prototype.getAbsolutePositionToRef=function(t,e){this.getPositionToRef(c.c.WORLD,t,e)},i.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var t=this._skeleton.getPoseMatrix();t&&this._absoluteTransform.multiplyToRef(t,this._absoluteTransform)}for(var e=this.children,n=e.length,r=0;r<n;r++)e[r].computeAbsoluteTransforms()},i.prototype.getDirection=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getDirectionToRef(t,e,n),n},i.prototype.getDirectionToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),s.e.TransformNormalToRef(t,a,n),n.normalize()},i.prototype.getRotation=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getRotationToRef(t,e,n),n},i.prototype.getRotationToRef=function(t,e,n){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var r=i._tmpQuat;this.getRotationQuaternionToRef(t,e,r),r.toEulerAnglesToRef(n)},i.prototype.getRotationQuaternion=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.b.Identity();return this.getRotationQuaternionToRef(t,e,n),n},i.prototype.getRotationQuaternionToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null),t==c.c.LOCAL)this._decompose(),n.copyFrom(this._localRotation);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,n,void 0)}},i.prototype.getRotationMatrix=function(t,e){t===void 0&&(t=c.c.LOCAL);var n=s.a.Identity();return this.getRotationMatrixToRef(t,e,n),n},i.prototype.getRotationMatrixToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),t==c.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(n);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(n)}},i.prototype.getAbsolutePositionFromLocal=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getAbsolutePositionFromLocalToRef(t,e,n),n},i.prototype.getAbsolutePositionFromLocalToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];e&&r?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(r,a)):a=this.getAbsoluteTransform(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.getLocalPositionFromAbsolute=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getLocalPositionFromAbsoluteToRef(t,e,n),n},i.prototype.getLocalPositionFromAbsoluteToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),a.invert(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},i._tmpVecs=M.a.BuildArray(2,s.e.Zero),i._tmpQuat=s.b.Identity(),i._tmpMats=M.a.BuildArray(5,s.a.Identity),i}(S.a)},545:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var f=o(444),s=o(625),M=o(500),S=o(566),c=function(){function E(){}return E.ExpandRGBDTexture=function(p){var i=p._texture;if(!(!i||!p.isRGBD)){var t=i.getEngine(),e=t.getCaps(),n=!1;e.textureHalfFloatRender&&e.textureHalfFloatLinearFiltering?(n=!0,i.type=2):e.textureFloatRender&&e.textureFloatLinearFiltering&&(n=!0,i.type=1),n&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),p.onLoadObservable.addOnce(function(){if(n){var r=new f.a("rgbdDecode","rgbdDecode",null,null,1,null,3,t,!1,void 0,i.type,void 0,null,!1),a=t.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});r.getEffect().executeWhenCompiled(function(){r.onApply=function(l){l._bindTexture("textureSampler",i),l.setFloat2("scale",1,1)},p.getScene().postProcessManager.directRender([r],a,!0),t.restoreDefaultFramebuffer(),t._releaseTexture(i),t._releaseFramebufferObjects(a),r&&r.dispose(),a._swapAndDie(i),i.isReady=!0})}})}},E.EncodeTextureToRGBD=function(p,i,t){return t===void 0&&(t=0),S.a.ApplyPostProcess("rgbdEncode",p,i,t,1,5)},E}()},547:function(J,j,o){"use strict";o.d(j,"a",function(){return S});var f=o(449),s=o(452),M=o(502);Object.defineProperty(f.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(c){c&&c.isSupported&&(this._geometryBufferRenderer=c)},enumerable:!0,configurable:!0}),f.a.prototype.enableGeometryBufferRenderer=function(c){return c===void 0&&(c=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new M.a(this,c),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},f.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var S=function(){function c(E){this.name=s.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(s.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){},c.prototype._gatherRenderTargets=function(E){this.scene._geometryBufferRenderer&&E.push(this.scene._geometryBufferRenderer.getGBuffer())},c}();M.a._SceneComponentInitialization=function(c){var E=c._getComponent(s.a.NAME_GEOMETRYBUFFERRENDERER);E||(E=new S(c),c._addComponent(E))}},548:function(J,j,o){"use strict";o.d(j,"a",function(){return f});var f=function(){function s(){this._renderPipelines={}}return Object.defineProperty(s.prototype,"supportedPipelines",{get:function(){var M=[];for(var S in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(S)){var c=this._renderPipelines[S];c.isSupported&&M.push(c)}return M},enumerable:!1,configurable:!0}),s.prototype.addPipeline=function(M){this._renderPipelines[M._name]=M},s.prototype.attachCamerasToRenderPipeline=function(M,S,c){c===void 0&&(c=!1);var E=this._renderPipelines[M];!E||E._attachCameras(S,c)},s.prototype.detachCamerasFromRenderPipeline=function(M,S){var c=this._renderPipelines[M];!c||c._detachCameras(S)},s.prototype.enableEffectInPipeline=function(M,S,c){var E=this._renderPipelines[M];!E||E._enableEffect(S,c)},s.prototype.disableEffectInPipeline=function(M,S,c){var E=this._renderPipelines[M];!E||E._disableEffect(S,c)},s.prototype.update=function(){for(var M in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(M)){var S=this._renderPipelines[M];S.isSupported?S._update():(S.dispose(),delete this._renderPipelines[M])}},s.prototype._rebuild=function(){for(var M in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(M)){var S=this._renderPipelines[M];S._rebuild()}},s.prototype.dispose=function(){for(var M in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(M)){var S=this._renderPipelines[M];S.dispose()}},s}()},549:function(J,j,o){"use strict";o.d(j,"a",function(){return s});const f=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>f()?"webgl2":"webgl"},556:function(J,j,o){"use strict";o.d(j,"a",function(){return a});var f=o(441),s=o(447),M=o(442),S=o(458),c=o(454),E=o(435),p=o(535),i="depthPixelShader",t=`#ifdef ALPHATEST
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
void main(void)
{
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
}`;E.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(664),r=o(476),a=function(){function l(h,u,v,T){var _=this;u===void 0&&(u=1),v===void 0&&(v=null),T===void 0&&(T=!1),this.enabled=!0,this.useOnlyInActiveCamera=!1,this._scene=h,this._storeNonLinearDepth=T,this.isPacked=u===0,this.isPacked?this._clearColor=new f.b(1,1,1,1):this._clearColor=new f.b(1,0,0,1),l._SceneComponentInitialization(this._scene),this._camera=v;var R=h.getEngine(),O=this.isPacked||!R._features.supportExtendedTextureFormats?5:6;this._depthMap=new S.a("depthMap",{width:R.getRenderWidth(),height:R.getRenderHeight()},this._scene,!1,!0,u,!1,void 0,void 0,void 0,void 0,O),this._depthMap.wrapU=M.a.CLAMP_ADDRESSMODE,this._depthMap.wrapV=M.a.CLAMP_ADDRESSMODE,this._depthMap.refreshRate=1,this._depthMap.renderParticles=!1,this._depthMap.renderList=null,this._depthMap.activeCamera=this._camera,this._depthMap.ignoreCameraViewport=!0,this._depthMap.useCameraPostProcesses=!1,this._depthMap.onClearObservable.add(function(x){x.clear(_._clearColor,!0,!0,!0)}),this._depthMap.onBeforeBindObservable.add(function(){R._debugPushGroup("depth renderer",1)}),this._depthMap.onAfterUnbindObservable.add(function(){R._debugPopGroup(1)});var L=function(x){var U=x.getRenderingMesh(),F=x.getEffectiveMesh(),V=_._scene,b=V.getEngine(),y=x.getMaterial();if(F._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!(!y||F.infiniteDistance||y.disableDepthWrite||x.verticesCount===0||x._renderId===V.getRenderId())){b.setState(y.backFaceCulling,0,!1,V.useRightHandedSystem);var g=U._getInstancesRenderList(x._id,!!x.getReplacementMesh());if(!g.mustReturn){var W=b.getCaps().instancedArrays&&(g.visibleInstances[x._id]!==null&&g.visibleInstances[x._id]!==void 0||U.hasThinInstances),G=_._camera||V.activeCamera;if(_.isReady(x,W)&&G){if(x._renderId=V.getRenderId(),b.enableEffect(_._effect),U._bind(x,_._effect,y.fillMode),_._effect.setMatrix("viewProjection",V.getTransformMatrix()),_._effect.setMatrix("world",F.getWorldMatrix()),_._effect.setFloat2("depthValues",G.minZ,G.minZ+G.maxZ),y&&y.needAlphaTesting()){var D=y.getAlphaTestTexture();D&&(_._effect.setTexture("diffuseSampler",D),_._effect.setMatrix("diffuseMatrix",D.getTextureMatrix()))}if(U.useBones&&U.computeBonesUsingShaders&&U.skeleton){var K=U.skeleton;if(K.isUsingTextureForMatrices){var Y=K.getTransformMatrixTexture(U);if(!Y)return;_._effect.setTexture("boneSampler",Y),_._effect.setFloat("boneTextureWidth",4*(K.bones.length+1))}else _._effect.setMatrices("mBones",K.getTransformMatrices(U))}c.a.BindMorphTargetParameters(U,_._effect),U.morphTargetManager&&U.morphTargetManager.isUsingTextureForTargets&&U.morphTargetManager._bind(_._effect),U._processRendering(F,x,_._effect,y.fillMode,g,W,function(se,w){return _._effect.setMatrix("world",w)})}}}};this._depthMap.customRenderFunction=function(x,U,F,V){var b;if(V.length){for(R.setColorWrite(!1),b=0;b<V.length;b++)L(V.data[b]);R.setColorWrite(!0)}for(b=0;b<x.length;b++)L(x.data[b]);for(b=0;b<U.length;b++)L(U.data[b])}}return l.prototype.isReady=function(h,u){var v=h.getMaterial();if(v.disableDepthWrite)return!1;var T=[],_=[s.b.PositionKind],R=h.getMesh();v&&v.needAlphaTesting()&&v.getAlphaTestTexture()&&(T.push("#define ALPHATEST"),R.isVerticesDataPresent(s.b.UVKind)&&(_.push(s.b.UVKind),T.push("#define UV1")),R.isVerticesDataPresent(s.b.UV2Kind)&&(_.push(s.b.UV2Kind),T.push("#define UV2"))),R.useBones&&R.computeBonesUsingShaders?(_.push(s.b.MatricesIndicesKind),_.push(s.b.MatricesWeightsKind),R.numBoneInfluencers>4&&(_.push(s.b.MatricesIndicesExtraKind),_.push(s.b.MatricesWeightsExtraKind)),T.push("#define NUM_BONE_INFLUENCERS "+R.numBoneInfluencers),T.push("#define BonesPerMesh "+(R.skeleton?R.skeleton.bones.length+1:0))):T.push("#define NUM_BONE_INFLUENCERS 0");var O=R.morphTargetManager,L=0;O&&O.numInfluencers>0&&(L=O.numInfluencers,T.push("#define MORPHTARGETS"),T.push("#define NUM_MORPH_INFLUENCERS "+L),O.isUsingTextureForTargets&&T.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(_,R,L)),u&&(T.push("#define INSTANCES"),c.a.PushAttributesForInstances(_),h.getRenderingMesh().hasThinInstances&&T.push("#define THIN_INSTANCES")),this._storeNonLinearDepth&&T.push("#define NONLINEARDEPTH"),this.isPacked&&T.push("#define PACKED");var x=T.join(`
`);return this._cachedDefines!==x&&(this._cachedDefines=x,this._effect=this._scene.getEngine().createEffect("depth",_,["world","mBones","viewProjection","diffuseMatrix","depthValues","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","morphTargets"],x,void 0,void 0,void 0,{maxSimultaneousMorphTargets:L})),this._effect.isReady()},l.prototype.getDepthMap=function(){return this._depthMap},l.prototype.dispose=function(){this._depthMap.dispose()},l._SceneComponentInitialization=function(h){throw r.a.WarnImport("DepthRendererSceneComponent")},l}()},566:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var f=o(442),s=o(458),M=o(486),S=o(444),c=function(){function E(){}return E.CreateResizedCopy=function(p,i,t,e){e===void 0&&(e=!0);var n=p.getScene(),r=n.getEngine(),a=new s.a("resized"+p.name,{width:i,height:t},n,!p.noMipmap,!0,p._texture.type,!1,p.samplingMode,!1);a.wrapU=p.wrapU,a.wrapV=p.wrapV,a.uOffset=p.uOffset,a.vOffset=p.vOffset,a.uScale=p.uScale,a.vScale=p.vScale,a.uAng=p.uAng,a.vAng=p.vAng,a.wAng=p.wAng,a.coordinatesIndex=p.coordinatesIndex,a.level=p.level,a.anisotropicFilteringLevel=p.anisotropicFilteringLevel,a._texture.isReady=!1,p.wrapU=f.a.CLAMP_ADDRESSMODE,p.wrapV=f.a.CLAMP_ADDRESSMODE;var l=new M.b("pass",1,null,e?f.a.BILINEAR_SAMPLINGMODE:f.a.NEAREST_SAMPLINGMODE,r,!1,0);return l.getEffect().executeWhenCompiled(function(){l.onApply=function(u){u.setTexture("textureSampler",p)};var h=a.getInternalTexture();h&&(n.postProcessManager.directRender([l],h),r.unBindFramebuffer(h),a.disposeFramebufferObjects(),l.dispose(),h.isReady=!0)}),a},E.ApplyPostProcess=function(p,i,t,e,n,r){var a=i.getEngine();return i.isReady=!1,n=n!=null?n:i.samplingMode,e=e!=null?e:i.type,r=r!=null?r:i.format,e===-1&&(e=0),new Promise(function(l){var h=new S.a("postprocess",p,null,null,1,null,n,a,!1,void 0,e,void 0,null,!1,r),u=a.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:n,type:e,format:r});h.getEffect().executeWhenCompiled(function(){h.onApply=function(v){v._bindTexture("textureSampler",i),v.setFloat2("scale",1,1)},t.postProcessManager.directRender([h],u,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(i),a._releaseFramebufferObjects(u),h&&h.dispose(),u._swapAndDie(i),i.type=e,i.format=5,i.isReady=!0,l(i)})})},E}()},570:function(J,j,o){"use strict";o.d(j,"b",function(){return i}),o.d(j,"a",function(){return t});var f=o(434),s=o(436),M=o(442),S=o(466),c=o(582),E=o(580),p=o(583),i;(function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"})(i||(i={}));var t=function(e){Object(f.d)(n,e);function n(r,a,l,h,u){l===void 0&&(l=i.Low),h===void 0&&(h=0),u===void 0&&(u=!1);var v=e.call(this,r.getEngine(),"depth of field",function(){return v._effects},!0)||this;v._effects=[],v._circleOfConfusion=new c.a("circleOfConfusion",a,1,null,M.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u),v._depthOfFieldBlurY=[],v._depthOfFieldBlurX=[];var T=1,_=15;switch(l){case i.High:{T=3,_=51;break}case i.Medium:{T=2,_=31;break}default:{_=15,T=1;break}}for(var R=_/Math.pow(2,T-1),O=1,L=0;L<T;L++){var x=new E.a("vertical blur",r,new s.d(0,1),R,O,null,v._circleOfConfusion,L==0?v._circleOfConfusion:null,M.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u);x.autoClear=!1,O=.75/Math.pow(2,L);var U=new E.a("horizontal blur",r,new s.d(1,0),R,O,null,v._circleOfConfusion,null,M.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u);U.autoClear=!1,v._depthOfFieldBlurY.push(x),v._depthOfFieldBlurX.push(U)}v._effects=[v._circleOfConfusion];for(var L=0;L<v._depthOfFieldBlurX.length;L++)v._effects.push(v._depthOfFieldBlurY[L]),v._effects.push(v._depthOfFieldBlurX[L]);return v._dofMerge=new p.a("dofMerge",v._circleOfConfusion,v._circleOfConfusion,v._depthOfFieldBlurX,O,null,M.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u),v._dofMerge.autoClear=!1,v._effects.push(v._dofMerge),v}return Object.defineProperty(n.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(r){this._circleOfConfusion.focalLength=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(r){this._circleOfConfusion.fStop=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(r){this._circleOfConfusion.focusDistance=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(r){this._circleOfConfusion.lensSize=r},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(n.prototype,"depthTexture",{set:function(r){this._circleOfConfusion.depthTexture=r},enumerable:!1,configurable:!0}),n.prototype.disposeEffects=function(r){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(r)},n.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},n.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},n}(S.a)},571:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var f=o(434),s=o(440),M=o(436),S=o(444),c=o(502),E=function(){function u(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return u}(),p=o(530),i=o(547),t=o(435),e="motionBlurPixelShader",n=`
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
`;t.a.ShadersStore[e]=n;var r={name:e,shader:n},a=o(439),l=o(437),h=function(u){Object(f.d)(v,u);function v(T,_,R,O,L,x,U,F,V,b){F===void 0&&(F=0),V===void 0&&(V=!1),b===void 0&&(b=!1);var y=u.call(this,T,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],R,O,L,x,U,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,F,void 0,null,V)||this;return y.motionStrength=1,y._motionBlurSamples=32,y._isObjectBased=!0,y._forceGeometryBuffer=!1,y._geometryBufferRenderer=null,y._prePassRenderer=null,y._invViewProjection=null,y._previousViewProjection=null,y._forceGeometryBuffer=b,y._forceGeometryBuffer?(y._geometryBufferRenderer=_.enableGeometryBufferRenderer(),y._geometryBufferRenderer&&(y._geometryBufferRenderer.enableVelocity=!0)):(y._prePassRenderer=_.enablePrePassRenderer(),y._prePassRenderer&&(y._prePassRenderer.markAsDirty(),y._prePassEffectConfiguration=new E)),y._applyMode(),y}return Object.defineProperty(v.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(T){this._motionBlurSamples=T,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(v.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(T){this._isObjectBased!==T&&(this._isObjectBased=T,this._applyMode())},enumerable:!1,configurable:!0}),v.prototype.getClassName=function(){return"MotionBlurPostProcess"},v.prototype.excludeSkinnedMesh=function(T){if(T.skeleton){var _=void 0;if(this._geometryBufferRenderer)_=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)_=this._prePassRenderer.excludedSkinnedMesh;else return;_.push(T)}},v.prototype.removeExcludedSkinnedMesh=function(T){if(T.skeleton){var _=void 0;if(this._geometryBufferRenderer)_=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)_=this._prePassRenderer.excludedSkinnedMesh;else return;var R=_.indexOf(T);R!==-1&&_.splice(R,1)}},v.prototype.dispose=function(T){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),u.prototype.dispose.call(this,T)},v.prototype._applyMode=function(){var T=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return s.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(_){return T._onApplyObjectBased(_)}):(this._invViewProjection=M.a.Identity(),this._previousViewProjection=M.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(_){return T._onApplyScreenBased(_)})},v.prototype._onApplyObjectBased=function(T){if(T.setVector2("screenSize",new M.d(this.width,this.height)),T.setFloat("motionScale",this._scene.getAnimationRatio()),T.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var _=this._geometryBufferRenderer.getTextureIndex(c.a.VELOCITY_TEXTURE_TYPE);T.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[_])}else if(this._prePassRenderer){var _=this._prePassRenderer.getIndex(2);T.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[_])}},v.prototype._onApplyScreenBased=function(T){var _=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(_.invertToRef(this._invViewProjection),T.setMatrix("inverseViewProjection",this._invViewProjection),T.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=_,T.setVector2("screenSize",new M.d(this.width,this.height)),T.setFloat("motionScale",this._scene.getAnimationRatio()),T.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var R=this._geometryBufferRenderer.getTextureIndex(c.a.DEPTH_TEXTURE_TYPE);T.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[R])}else if(this._prePassRenderer){var R=this._prePassRenderer.getIndex(5);T.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[R])}},v.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var T=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(T.join(`
`))}},v._Parse=function(T,_,R,O){return a.a.Parse(function(){return new v(T.name,R,T.options,_,T.renderTargetSamplingMode,R.getEngine(),T.reusable,T.textureType,!1)},T,R,O)},Object(f.c)([Object(a.c)()],v.prototype,"motionStrength",void 0),Object(f.c)([Object(a.c)()],v.prototype,"motionBlurSamples",null),Object(f.c)([Object(a.c)()],v.prototype,"isObjectBased",null),v}(S.a);l.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=h},572:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var f=o(436),s=o(441),M=o(483),S=o(700),c=Object.freeze(new f.b(0,0,0,0)),E=Object.freeze(f.e.Zero()),p=Object.freeze(f.d.Zero()),i=Object.freeze(S.a.Zero()),t=Object.freeze(s.a.Black()),e=function(){function n(r,a,l,h){var u=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=r,this._scene=l,this._host=h,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===M.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=f.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var v={frame:0,value:this._minValue};this._keys.splice(0,0,v)}if(this._target instanceof Array){for(var T=0,_=0,R=this._target;_<R.length;_++){var O=R[_];this._preparePath(O,T),this._getOriginalValues(T),T++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var L=a.getEvents();L&&L.length>0&&L.forEach(function(x){u._events.push(x._clone())}),this._enableBlending=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(n.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),n.prototype._preparePath=function(r,a){a===void 0&&(a=0);var l=this._animation.targetPropertyPath;if(l.length>1){for(var h=r[l[0]],u=1;u<l.length-1;u++)h=h[l[u]];this._targetPath=l[l.length-1],this._activeTargets[a]=h}else this._targetPath=l[0],this._activeTargets[a]=r},Object.defineProperty(n.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),n.prototype.reset=function(r){if(r===void 0&&(r=!1),r)if(this._target instanceof Array)for(var a=0,l=0,h=this._target;l<h.length;l++){var u=h[l];this._originalValue[a]!==void 0&&this._setValue(u,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},n.prototype.isStopped=function(){return this._stopped},n.prototype.dispose=function(){var r=this._animation.runtimeAnimations.indexOf(this);r>-1&&this._animation.runtimeAnimations.splice(r,1)},n.prototype.setValue=function(r,a){if(this._targetIsArray){for(var l=0;l<this._target.length;l++){var h=this._target[l];this._setValue(h,this._activeTargets[l],r,a,l)}return}this._setValue(this._target,this._directTarget,r,a,0)},n.prototype._getOriginalValues=function(r){r===void 0&&(r=0);var a,l=this._activeTargets[r];l.getRestPose&&this._targetPath==="_matrix"?a=l.getRestPose():a=l[this._targetPath],a&&a.clone?this._originalValue[r]=a.clone():this._originalValue[r]=a},n.prototype._setValue=function(r,a,l,h,u){if(this._currentActiveTarget=a,this._weight=h,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var v=a[this._targetPath];v.clone?this._originalBlendValue=v.clone():this._originalBlendValue=v}this._originalBlendValue.m?M.a.AllowMatrixDecomposeForInterpolation?this._currentValue?f.a.DecomposeLerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.DecomposeLerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue?f.a.LerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.Lerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue=M.a._UniversalLerp(this._originalBlendValue,l,this._blendingFactor);var T=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=T}else this._currentValue=l;h!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[u]):a[this._targetPath]=this._currentValue,r.markAsDirty&&r.markAsDirty(this._animation.targetProperty)},n.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},n.prototype.goToFrame=function(r){var a=this._animation.getKeys();r<a[0].frame?r=a[0].frame:r>a[a.length-1].frame&&(r=a[a.length-1].frame);var l=this._events;if(l.length)for(var h=0;h<l.length;h++)l[h].onlyOnce||(l[h].isDone=l[h].frame<r);this._currentFrame=r;var u=this._animation._interpolate(r,this._animationState);this.setValue(u,-1)},n.prototype._prepareForSpeedRatioChange=function(r){var a=this._previousDelay*(this._animation.framePerSecond*r)/1e3;this._ratioOffset=this._previousRatio-a},n.prototype.animate=function(r,a,l,h,u,v){v===void 0&&(v=-1);var T=this._animation,_=T.targetPropertyPath;if(!_||_.length<1)return this._stopped=!0,!1;var R=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(l<this._minFrame||l>this._maxFrame)&&(l=this._maxFrame);var O=l-a,L,x=r*(T.framePerSecond*u)/1e3+this._ratioOffset,U=0;if(this._previousDelay=r,this._previousRatio=x,!h&&l>=a&&x>=O)R=!1,U=T._getKeyValue(this._maxValue);else if(!h&&a>=l&&x<=O)R=!1,U=T._getKeyValue(this._minValue);else if(this._animationState.loopMode!==M.a.ANIMATIONLOOPMODE_CYCLE){var F=l.toString()+a.toString();if(!this._offsetsCache[F]){this._animationState.repeatCount=0,this._animationState.loopMode=M.a.ANIMATIONLOOPMODE_CYCLE;var V=T._interpolate(a,this._animationState),b=T._interpolate(l,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),T.dataType){case M.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[F]=b-V;break;case M.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[F]=b.subtract(V);break;case M.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[F]=b.subtract(V);break;case M.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[F]=b.subtract(V);break;case M.a.ANIMATIONTYPE_SIZE:this._offsetsCache[F]=b.subtract(V);break;case M.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[F]=b.subtract(V);break;default:break}this._highLimitsCache[F]=b}U=this._highLimitsCache[F],L=this._offsetsCache[F]}if(L===void 0)switch(T.dataType){case M.a.ANIMATIONTYPE_FLOAT:L=0;break;case M.a.ANIMATIONTYPE_QUATERNION:L=c;break;case M.a.ANIMATIONTYPE_VECTOR3:L=E;break;case M.a.ANIMATIONTYPE_VECTOR2:L=p;break;case M.a.ANIMATIONTYPE_SIZE:L=i;break;case M.a.ANIMATIONTYPE_COLOR3:L=t}var y;if(this._host&&this._host.syncRoot){var g=this._host.syncRoot,W=(g.masterFrame-g.fromFrame)/(g.toFrame-g.fromFrame);y=a+(l-a)*W}else y=R&&O!==0?a+x%O:l;var G=this._events;if((O>0&&this.currentFrame>y||O<0&&this.currentFrame<y)&&(this._onLoop(),G.length))for(var D=0;D<G.length;D++)G[D].onlyOnce||(G[D].isDone=!1);this._currentFrame=y,this._animationState.repeatCount=O===0?0:x/O>>0,this._animationState.highLimitValue=U,this._animationState.offsetValue=L;var K=T._interpolate(y,this._animationState);if(this.setValue(K,v),G.length){for(var D=0;D<G.length;D++)if(O>0&&y>=G[D].frame&&G[D].frame>=a||O<0&&y<=G[D].frame&&G[D].frame<=a){var Y=G[D];Y.isDone||(Y.onlyOnce&&(G.splice(D,1),D--),Y.isDone=!0,Y.action(y))}}return R||(this._stopped=!0),R},n}()},574:function(J,j,o){"use strict";var f=o(456),s=o(440),M=o(467);M.a.prototype.restoreSingleAttachment=function(){var S=this._gl;this.bindAttachments([S.BACK])},M.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var S=this._gl;this.bindAttachments([S.COLOR_ATTACHMENT0])},M.a.prototype.buildTextureLayout=function(S){for(var c=this._gl,E=[],p=0;p<S.length;p++)S[p]?E.push(c["COLOR_ATTACHMENT"+p]):E.push(c.NONE);return E},M.a.prototype.bindAttachments=function(S){var c=this._gl;c.drawBuffers(S)},M.a.prototype.clearAttachments=function(S,c,E,p,i){if(S.length!==0){var t=this._gl;t.drawBuffers([S[0]]),this.clear(c,c!==null,p,i);var e=S[0];S[0]=t.NONE,t.drawBuffers(S),this.clear(E,E!==null,!1,!1),S[0]=e}},M.a.prototype.unBindMultiColorAttachmentFramebuffer=function(S,c,E){c===void 0&&(c=!1),this._currentRenderTarget=null;var p=this._gl,i=S[0]._attachments,t=i.length;if(S[0]._MSAAFramebuffer){p.bindFramebuffer(p.READ_FRAMEBUFFER,S[0]._MSAAFramebuffer),p.bindFramebuffer(p.DRAW_FRAMEBUFFER,S[0]._framebuffer);for(var e=0;e<t;e++){for(var n=S[e],r=0;r<t;r++)i[r]=p.NONE;i[e]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],p.readBuffer(i[e]),p.drawBuffers(i),p.blitFramebuffer(0,0,n.width,n.height,0,0,n.width,n.height,p.COLOR_BUFFER_BIT,p.NEAREST)}for(var e=0;e<t;e++)i[e]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"];p.drawBuffers(i)}for(var e=0;e<t;e++){var n=S[e];n.generateMipMaps&&!c&&!n.isCube&&(this._bindTextureDirectly(p.TEXTURE_2D,n,!0),p.generateMipmap(p.TEXTURE_2D),this._bindTextureDirectly(p.TEXTURE_2D,null))}E&&(S[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(S[0]._framebuffer),E()),this._bindUnboundFramebuffer(null)},M.a.prototype.createMultipleRenderTarget=function(S,c,E){E===void 0&&(E=!0);var p=!1,i=!0,t=!1,e=!1,n=1,r=0,a=3,l=new Array,h=new Array;c!==void 0&&(p=c.generateMipMaps===void 0?!1:c.generateMipMaps,i=c.generateDepthBuffer===void 0?!0:c.generateDepthBuffer,t=c.generateStencilBuffer===void 0?!1:c.generateStencilBuffer,e=c.generateDepthTexture===void 0?!1:c.generateDepthTexture,n=c.textureCount||1,c.types&&(l=c.types),c.samplingModes&&(h=c.samplingModes));var u=this._gl,v=u.createFramebuffer();this._bindUnboundFramebuffer(v);for(var T=S.width||S,_=S.height||S,R=[],O=[],L=this._setupFramebufferDepthAttachments(t,i,T,_),x=0;x<n;x++){var U=h[x]||a,F=l[x]||r;(F===1&&!this._caps.textureFloatLinearFiltering||F===2&&!this._caps.textureHalfFloatLinearFiltering)&&(U=1);var V=this._getSamplingParameters(U,p);F===1&&!this._caps.textureFloat&&(F=0,s.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var b=new f.a(this,f.b.MultiRenderTarget),y=u[this.webGLVersion>1?"COLOR_ATTACHMENT"+x:"COLOR_ATTACHMENT"+x+"_WEBGL"];R.push(b),O.push(y),u.activeTexture(u["TEXTURE"+x]),u.bindTexture(u.TEXTURE_2D,b._hardwareTexture.underlyingResource),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,V.mag),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,V.min),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(F),T,_,0,u.RGBA,this._getWebGLTextureType(F),null),u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,y,u.TEXTURE_2D,b._hardwareTexture.underlyingResource,0),p&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(u.TEXTURE_2D,null),b._framebuffer=v,b._depthStencilBuffer=L,b.baseWidth=T,b.baseHeight=_,b.width=T,b.height=_,b.isReady=!0,b.samples=1,b.generateMipMaps=p,b.samplingMode=U,b.type=F,b._generateDepthBuffer=i,b._generateStencilBuffer=t,b._attachments=O,b._textureArray=R,this._internalTexturesCache.push(b)}if(e&&this._caps.depthTextureExtension){var g=new f.a(this,f.b.MultiRenderTarget);u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,g._hardwareTexture.underlyingResource),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,this.webGLVersion<2?u.DEPTH_COMPONENT:u.DEPTH_COMPONENT16,T,_,0,u.DEPTH_COMPONENT,u.UNSIGNED_SHORT,null),u.framebufferTexture2D(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.TEXTURE_2D,g._hardwareTexture.underlyingResource,0),g._framebuffer=v,g.baseWidth=T,g.baseHeight=_,g.width=T,g.height=_,g.isReady=!0,g.samples=1,g.generateMipMaps=p,g.samplingMode=u.NEAREST,g._generateDepthBuffer=i,g._generateStencilBuffer=t,R.push(g),this._internalTexturesCache.push(g)}return E&&u.drawBuffers(O),this._bindUnboundFramebuffer(null),this.resetTextureCache(),R},M.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(S,c,E){if(E===void 0&&(E=!0),this.webGLVersion<2||!S)return 1;if(S[0].samples===c)return c;var p=S[0]._attachments.length;if(p===0)return 1;var i=this._gl;c=Math.min(c,this.getCaps().maxMSAASamples),S[0]._depthStencilBuffer&&(i.deleteRenderbuffer(S[0]._depthStencilBuffer),S[0]._depthStencilBuffer=null),S[0]._MSAAFramebuffer&&(i.deleteFramebuffer(S[0]._MSAAFramebuffer),S[0]._MSAAFramebuffer=null);for(var t=0;t<p;t++)S[t]._MSAARenderBuffer&&(i.deleteRenderbuffer(S[t]._MSAARenderBuffer),S[t]._MSAARenderBuffer=null);if(c>1&&i.renderbufferStorageMultisample){var e=i.createFramebuffer();if(!e)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(e);for(var n=this._setupFramebufferDepthAttachments(S[0]._generateStencilBuffer,S[0]._generateDepthBuffer,S[0].width,S[0].height,c),r=[],t=0;t<p;t++){var a=S[t],l=i[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],h=i.createRenderbuffer();if(!h)throw new Error("Unable to create multi sampled framebuffer");i.bindRenderbuffer(i.RENDERBUFFER,h),i.renderbufferStorageMultisample(i.RENDERBUFFER,c,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,l,i.RENDERBUFFER,h),a._MSAAFramebuffer=e,a._MSAARenderBuffer=h,a.samples=c,a._depthStencilBuffer=n,i.bindRenderbuffer(i.RENDERBUFFER,null),r.push(l)}E&&i.drawBuffers(r)}else this._bindUnboundFramebuffer(S[0]._framebuffer);return this._bindUnboundFramebuffer(null),c}},576:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var f=o(451),s=o(452),M=o(516),S=o(468);S.a.AddParser(s.a.NAME_EFFECTLAYER,function(E,p,i,t){if(E.effectLayers){i.effectLayers||(i.effectLayers=new Array);for(var e=0;e<E.effectLayers.length;e++){var n=M.a.Parse(E.effectLayers[e],p,t);i.effectLayers.push(n)}}}),S.a.prototype.removeEffectLayer=function(E){var p=this.effectLayers.indexOf(E);return p!==-1&&this.effectLayers.splice(p,1),p},S.a.prototype.addEffectLayer=function(E){this.effectLayers.push(E)};var c=function(){function E(p){this.name=s.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=p,this._engine=p.getEngine(),p.effectLayers=new Array}return E.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(s.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(s.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(s.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},E.prototype.rebuild=function(){for(var p=this.scene.effectLayers,i=0,t=p;i<t.length;i++){var e=t[i];e._rebuild()}},E.prototype.serialize=function(p){p.effectLayers=[];for(var i=this.scene.effectLayers,t=0,e=i;t<e.length;t++){var n=e[t];n.serialize&&p.effectLayers.push(n.serialize())}},E.prototype.addFromContainer=function(p){var i=this;!p.effectLayers||p.effectLayers.forEach(function(t){i.scene.addEffectLayer(t)})},E.prototype.removeFromContainer=function(p,i){var t=this;!p.effectLayers||p.effectLayers.forEach(function(e){t.scene.removeEffectLayer(e),i&&e.dispose()})},E.prototype.dispose=function(){for(var p=this.scene.effectLayers;p.length;)p[0].dispose()},E.prototype._isReadyForMesh=function(p,i){for(var t=this.scene.effectLayers,e=0,n=t;e<n.length;e++){var r=n[e];if(!!r.hasMesh(p))for(var a=0,l=p.subMeshes;a<l.length;a++){var h=l[a];if(!r.isReady(h,i))return!1}}return!0},E.prototype._renderMainTexture=function(p){this._renderEffects=!1,this._needStencil=!1;var i=!1,t=this.scene.effectLayers;if(t&&t.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.shouldRender()&&(!r.camera||r.camera.cameraRigMode===f.a.RIG_MODE_NONE&&p===r.camera||r.camera.cameraRigMode!==f.a.RIG_MODE_NONE&&r.camera._rigCameras.indexOf(p)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||r.needStencil();var a=r._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),i=!0)}}this.scene.incrementRenderId()}return i},E.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},E.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},E.prototype._draw=function(p){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var i=this.scene.effectLayers,t=0;t<i.length;t++){var e=i[t];e.renderingGroupId===p&&e.shouldRender()&&e.render()}this._engine.setDepthBuffer(!0)}},E.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},E.prototype._drawRenderingGroup=function(p){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(p)},E}();M.a._SceneComponentInitialization=function(E){var p=E._getComponent(s.a.NAME_EFFECTLAYER);p||(p=new c(E),E._addComponent(p))}},577:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var f=o(434),s=o(439),M=o(436),S=o(447),c=o(442),E=o(458),p=o(459),i=o(472),t=o(516),e=o(468),n=o(437),r=o(445),a=o(441),l=o(646),h=o(647),u=o(576);e.a.prototype.getGlowLayerByName=function(T){for(var _=0;_<this.effectLayers.length;_++)if(this.effectLayers[_].name===T&&this.effectLayers[_].getEffectName()===v.EffectName)return this.effectLayers[_];return null};var v=function(T){Object(f.d)(_,T);function _(R,O,L){var x=T.call(this,R,O)||this;return x._intensity=1,x._includedOnlyMeshes=[],x._excludedMeshes=[],x._meshesUsingTheirOwnMaterials=[],x.neutralColor=new a.b(0,0,0,1),x._options=Object(f.a)({mainTextureRatio:_.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},L),x._init({alphaBlendingMode:1,camera:x._options.camera,mainTextureFixedSize:x._options.mainTextureFixedSize,mainTextureRatio:x._options.mainTextureRatio,renderingGroupId:x._options.renderingGroupId}),x}return Object.defineProperty(_.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(R){this._horizontalBlurPostprocess1.kernel=R,this._verticalBlurPostprocess1.kernel=R,this._horizontalBlurPostprocess2.kernel=R,this._verticalBlurPostprocess2.kernel=R},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"intensity",{get:function(){return this._intensity},set:function(R){this._intensity=R},enumerable:!1,configurable:!0}),_.prototype.getEffectName=function(){return _.EffectName},_.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[S.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},_.prototype._createTextureAndPostProcesses=function(){var R=this,O=this._mainTextureDesiredSize.width,L=this._mainTextureDesiredSize.height;O=this._engine.needPOTTextures?r.a.GetExponentOfTwo(O,this._maxSize):O,L=this._engine.needPOTTextures?r.a.GetExponentOfTwo(L,this._maxSize):L;var x=0;this._engine.getCaps().textureHalfFloatRender?x=2:x=0,this._blurTexture1=new E.a("GlowLayerBlurRTT",{width:O,height:L},this._scene,!1,!0,x),this._blurTexture1.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var U=Math.floor(O/2),F=Math.floor(L/2);this._blurTexture2=new E.a("GlowLayerBlurRTT2",{width:U,height:F},this._scene,!1,!0,x),this._blurTexture2.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new i.a("GlowLayerHBP1",new M.d(1,0),this._options.blurKernelSize/2,{width:O,height:L},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._horizontalBlurPostprocess1.width=O,this._horizontalBlurPostprocess1.height=L,this._horizontalBlurPostprocess1.onApplyObservable.add(function(V){V.setTexture("textureSampler",R._mainTexture)}),this._verticalBlurPostprocess1=new i.a("GlowLayerVBP1",new M.d(0,1),this._options.blurKernelSize/2,{width:O,height:L},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._horizontalBlurPostprocess2=new i.a("GlowLayerHBP2",new M.d(1,0),this._options.blurKernelSize/2,{width:U,height:F},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._horizontalBlurPostprocess2.width=U,this._horizontalBlurPostprocess2.height=F,this._horizontalBlurPostprocess2.onApplyObservable.add(function(V){V.setTexture("textureSampler",R._blurTexture1)}),this._verticalBlurPostprocess2=new i.a("GlowLayerVBP2",new M.d(0,1),this._options.blurKernelSize/2,{width:U,height:F},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var V=R._blurTexture1.getInternalTexture();if(V){R._scene.postProcessManager.directRender(R._postProcesses1,V,!0);var b=R._blurTexture2.getInternalTexture();b&&R._scene.postProcessManager.directRender(R._postProcesses2,b,!0),R._engine.unBindFramebuffer(b!=null?b:V,!0)}}),this._postProcesses.map(function(V){V.autoClear=!1})},_.prototype.isReady=function(R,O){var L=R.getMaterial(),x=R.getRenderingMesh();if(!L||!x)return!1;var U=L.emissiveTexture;return T.prototype._isReady.call(this,R,O,U)},_.prototype.needStencil=function(){return!1},_.prototype._canRenderMesh=function(R,O){return!0},_.prototype._internalRender=function(R){R.setTexture("textureSampler",this._blurTexture1),R.setTexture("textureSampler2",this._blurTexture2),R.setFloat("offset",this._intensity);var O=this._engine,L=O.getStencilBuffer();O.setStencilBuffer(!1),O.drawElementsType(p.a.TriangleFillMode,0,6),O.setStencilBuffer(L)},_.prototype._setEmissiveTextureAndColor=function(R,O,L){var x=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(R,O,L):L?(this._emissiveTextureAndColor.texture=L.emissiveTexture,this._emissiveTextureAndColor.texture&&(x=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(R,O,L,this._emissiveTextureAndColor.color):L.emissiveColor?this._emissiveTextureAndColor.color.set(L.emissiveColor.r*x,L.emissiveColor.g*x,L.emissiveColor.b*x,L.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},_.prototype._shouldRenderMesh=function(R){return this.hasMesh(R)},_.prototype._addCustomEffectDefines=function(R){R.push("#define GLOW")},_.prototype.addExcludedMesh=function(R){this._excludedMeshes.indexOf(R.uniqueId)===-1&&this._excludedMeshes.push(R.uniqueId)},_.prototype.removeExcludedMesh=function(R){var O=this._excludedMeshes.indexOf(R.uniqueId);O!==-1&&this._excludedMeshes.splice(O,1)},_.prototype.addIncludedOnlyMesh=function(R){this._includedOnlyMeshes.indexOf(R.uniqueId)===-1&&this._includedOnlyMeshes.push(R.uniqueId)},_.prototype.removeIncludedOnlyMesh=function(R){var O=this._includedOnlyMeshes.indexOf(R.uniqueId);O!==-1&&this._includedOnlyMeshes.splice(O,1)},_.prototype.hasMesh=function(R){return T.prototype.hasMesh.call(this,R)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(R.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(R.uniqueId)===-1:!0:!1},_.prototype._useMeshMaterial=function(R){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId)>-1},_.prototype.referenceMeshToUseItsOwnMaterial=function(R){this._meshesUsingTheirOwnMaterials.push(R.uniqueId)},_.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(R){for(var O=this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId);O>=0;)this._meshesUsingTheirOwnMaterials.splice(O,1),O=this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId)},_.prototype._disposeMesh=function(R){this.removeIncludedOnlyMesh(R),this.removeExcludedMesh(R)},_.prototype.getClassName=function(){return"GlowLayer"},_.prototype.serialize=function(){var R=s.a.Serialize(this);R.customType="BABYLON.GlowLayer";var O;if(R.includedMeshes=[],this._includedOnlyMeshes.length)for(O=0;O<this._includedOnlyMeshes.length;O++){var L=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[O]);L&&R.includedMeshes.push(L.id)}if(R.excludedMeshes=[],this._excludedMeshes.length)for(O=0;O<this._excludedMeshes.length;O++){var L=this._scene.getMeshByUniqueID(this._excludedMeshes[O]);L&&R.excludedMeshes.push(L.id)}return R},_.Parse=function(R,O,L){var x=s.a.Parse(function(){return new _(R.name,O,R.options)},R,O,L),U;for(U=0;U<R.excludedMeshes.length;U++){var F=O.getMeshByID(R.excludedMeshes[U]);F&&x.addExcludedMesh(F)}for(U=0;U<R.includedMeshes.length;U++){var F=O.getMeshByID(R.includedMeshes[U]);F&&x.addIncludedOnlyMesh(F)}return x},_.EffectName="GlowLayer",_.DefaultBlurKernelSize=32,_.DefaultTextureRatio=.5,Object(f.c)([Object(s.c)()],_.prototype,"blurKernelSize",null),Object(f.c)([Object(s.c)()],_.prototype,"intensity",null),Object(f.c)([Object(s.c)("options")],_.prototype,"_options",void 0),_}(t.a);n.a.RegisteredTypes["BABYLON.GlowLayer"]=v},578:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var f=o(434),s=o(466),M=o(584),S=o(472),c=o(585),E=o(436),p=o(442),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,h,u){h===void 0&&(h=0),u===void 0&&(u=!1);var v=t.call(this,n.getEngine(),"bloom",function(){return v._effects},!0)||this;return v.bloomScale=r,v._effects=[],v._downscale=new M.a("highlights",1,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u),v._blurX=new S.a("horizontal blur",new E.d(1,0),10,r,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,void 0,u),v._blurX.alwaysForcePOT=!0,v._blurX.autoClear=!1,v._blurY=new S.a("vertical blur",new E.d(0,1),10,r,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,void 0,u),v._blurY.alwaysForcePOT=!0,v._blurY.autoClear=!1,v.kernel=l,v._effects=[v._downscale,v._blurX,v._blurY],v._merge=new c.a("bloomMerge",v._downscale,v._blurY,a,r,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u),v._merge.autoClear=!1,v._effects.push(v._merge),v}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(n){this._downscale.threshold=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._merge.weight},set:function(n){this._merge.weight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(n){this._blurX.kernel=n*this.bloomScale,this._blurY.kernel=n*this.bloomScale},enumerable:!1,configurable:!0}),e.prototype.disposeEffects=function(n){for(var r=0;r<this._effects.length;r++)this._effects[r].dispose(n)},e.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},e.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},e}(s.a)},579:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var f=o(434),s=o(436),M=o(444),S=o(600),c=o(437),E=o(439),p=function(i){Object(f.d)(t,i);function t(e,n,r,a,l,h,u,v,T,_){T===void 0&&(T=0),_===void 0&&(_=!1);var R=i.call(this,e,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,l,h,u,v,null,T,void 0,null,_)||this;return R.aberrationAmount=30,R.radialIntensity=0,R.direction=new s.d(.707,.707),R.centerPosition=new s.d(.5,.5),R.screenWidth=n,R.screenHeight=r,R.onApplyObservable.add(function(O){O.setFloat("chromatic_aberration",R.aberrationAmount),O.setFloat("screen_width",n),O.setFloat("screen_height",r),O.setFloat("radialIntensity",R.radialIntensity),O.setFloat2("direction",R.direction.x,R.direction.y),O.setFloat2("centerPosition",R.centerPosition.x,R.centerPosition.y)}),R}return t.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},t._Parse=function(e,n,r,a){return E.a.Parse(function(){return new t(e.name,e.screenWidth,e.screenHeight,e.options,n,e.renderTargetSamplingMode,r.getEngine(),e.reusable,e.textureType,!1)},e,r,a)},Object(f.c)([Object(E.c)()],t.prototype,"aberrationAmount",void 0),Object(f.c)([Object(E.c)()],t.prototype,"radialIntensity",void 0),Object(f.c)([Object(E.c)()],t.prototype,"direction",void 0),Object(f.c)([Object(E.c)()],t.prototype,"centerPosition",void 0),Object(f.c)([Object(E.c)()],t.prototype,"screenWidth",void 0),Object(f.c)([Object(E.c)()],t.prototype,"screenHeight",void 0),t}(M.a);c.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=p},580:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var f=o(434),s=o(442),M=o(472),S=o(437),c=o(439),E=function(p){Object(f.d)(i,p);function i(t,e,n,r,a,l,h,u,v,T,_,R,O){u===void 0&&(u=null),v===void 0&&(v=s.a.BILINEAR_SAMPLINGMODE),R===void 0&&(R=0),O===void 0&&(O=!1);var L=p.call(this,t,n,r,a,l,v=2,T,_,R=0,`#define DOF 1\r
`,O)||this;return L.direction=n,L.onApplyObservable.add(function(x){u!=null&&x.setTextureFromPostProcess("textureSampler",u),x.setTextureFromPostProcessOutput("circleOfConfusionSampler",h),e.activeCamera&&x.setFloat2("cameraMinMaxZ",e.activeCamera.minZ,e.activeCamera.maxZ)}),L}return i.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(f.c)([Object(c.c)()],i.prototype,"direction",void 0),i}(M.a);S.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=E},581:function(J,j,o){"use strict";o.d(j,"a",function(){return n});var f=o(434),s=o(444),M=o(502),S=o(439),c=function(){function r(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return r}(),E=o(435),p="screenSpaceReflectionPixelShader",i=`

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
`;E.a.ShadersStore[p]=i;var t={name:p,shader:i},e=o(437),n=function(r){Object(f.d)(a,r);function a(l,h,u,v,T,_,R,O,L,x){O===void 0&&(O=0),L===void 0&&(L=!1),x===void 0&&(x=!1);var U=r.call(this,l,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],u,v,T,_,R,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,O,void 0,null,L)||this;if(U.threshold=1.2,U.strength=1,U.reflectionSpecularFalloffExponent=3,U.step=1,U.roughnessFactor=.2,U._forceGeometryBuffer=!1,U._enableSmoothReflections=!1,U._reflectionSamples=64,U._smoothSteps=5,U._forceGeometryBuffer=x,U._forceGeometryBuffer){var F=h.enableGeometryBufferRenderer();F&&F.isSupported&&(F.enablePosition=!0,F.enableReflectivity=!0,U._geometryBufferRenderer=F)}else U._prePassRenderer=h.enablePrePassRenderer(),U._prePassRenderer.markAsDirty(),U._prePassEffectConfiguration=new c;return U._updateEffectDefines(),U.onApply=function(V){var b=U._geometryBufferRenderer,y=U._prePassRenderer;if(!(!y&&!b)){if(b){var g=b.getTextureIndex(M.a.POSITION_TEXTURE_TYPE),W=b.getTextureIndex(M.a.REFLECTIVITY_TEXTURE_TYPE);V.setTexture("normalSampler",b.getGBuffer().textures[1]),V.setTexture("positionSampler",b.getGBuffer().textures[g]),V.setTexture("reflectivitySampler",b.getGBuffer().textures[W])}else{var g=y.getIndex(1),W=y.getIndex(3),G=y.getIndex(6);V.setTexture("normalSampler",y.getRenderTarget().textures[G]),V.setTexture("positionSampler",y.getRenderTarget().textures[g]),V.setTexture("reflectivitySampler",y.getRenderTarget().textures[W])}var D=h.activeCamera;if(!!D){var K=D.getViewMatrix(!0),Y=D.getProjectionMatrix(!0);V.setMatrix("projection",Y),V.setMatrix("view",K),V.setFloat("threshold",U.threshold),V.setFloat("reflectionSpecularFalloffExponent",U.reflectionSpecularFalloffExponent),V.setFloat("strength",U.strength),V.setFloat("step",U.step),V.setFloat("roughnessFactor",U.roughnessFactor)}}},U}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(l){l!==this._enableSmoothReflections&&(this._enableSmoothReflections=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(l){l!==this._reflectionSamples&&(this._reflectionSamples=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(l){l!==this._smoothSteps&&(this._smoothSteps=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var l=[];(this._geometryBufferRenderer||this._prePassRenderer)&&l.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&l.push("#define ENABLE_SMOOTH_REFLECTIONS"),l.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),l.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(l.join(`
`))},a._Parse=function(l,h,u,v){return S.a.Parse(function(){return new a(l.name,u,l.options,h,l.renderTargetSamplingMode,u.getEngine(),l.textureType,l.reusable)},l,u,v)},Object(f.c)([Object(S.c)()],a.prototype,"threshold",void 0),Object(f.c)([Object(S.c)()],a.prototype,"strength",void 0),Object(f.c)([Object(S.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(f.c)([Object(S.c)()],a.prototype,"step",void 0),Object(f.c)([Object(S.c)()],a.prototype,"roughnessFactor",void 0),Object(f.c)([Object(S.c)()],a.prototype,"enableSmoothReflections",null),Object(f.c)([Object(S.c)()],a.prototype,"reflectionSamples",null),Object(f.c)([Object(S.c)()],a.prototype,"smoothSteps",null),a}(s.a);e.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=n},582:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var f=o(434),s=o(444),M=o(440),S=o(435),c="circleOfConfusionPixelShader",E=`
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
`;S.a.ShadersStore[c]=E;var p={name:c,shader:E},i=o(437),t=o(439),e=function(n){Object(f.d)(r,n);function r(a,l,h,u,v,T,_,R,O){R===void 0&&(R=0),O===void 0&&(O=!1);var L=n.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],h,u,v,T,_,null,R,void 0,null,O)||this;return L.lensSize=50,L.fStop=1.4,L.focusDistance=2e3,L.focalLength=50,L._depthTexture=null,L._depthTexture=l,L.onApplyObservable.add(function(x){if(!L._depthTexture){M.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}x.setTexture("depthSampler",L._depthTexture);var U=L.lensSize/L.fStop,F=U*L.focalLength/(L.focusDistance-L.focalLength);x.setFloat("focusDistance",L.focusDistance),x.setFloat("cocPrecalculation",F),x.setFloat2("cameraMinMaxZ",L._depthTexture.activeCamera.minZ,L._depthTexture.activeCamera.maxZ)}),L}return r.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(r.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(f.c)([Object(t.c)()],r.prototype,"lensSize",void 0),Object(f.c)([Object(t.c)()],r.prototype,"fStop",void 0),Object(f.c)([Object(t.c)()],r.prototype,"focusDistance",void 0),Object(f.c)([Object(t.c)()],r.prototype,"focalLength",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=e},583:function(J,j,o){"use strict";o.d(j,"b",function(){return p}),o.d(j,"a",function(){return i});var f=o(434),s=o(444),M=o(435),S="depthOfFieldMergePixelShader",c=`uniform sampler2D textureSampler;
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
`;M.a.ShadersStore[S]=c;var E={name:S,shader:c},p=function(){function t(){}return t}(),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,h,u,v,T,_,R,O){R===void 0&&(R=0),O===void 0&&(O=!1);var L=t.call(this,n,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],h,u,v,T,_,null,R,void 0,null,!0)||this;return L.blurSteps=l,L.onApplyObservable.add(function(x){x.setTextureFromPostProcess("textureSampler",r),x.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),l.forEach(function(U,F){x.setTextureFromPostProcessOutput("blurStep"+(l.length-F-1),U)})}),O||L.updateEffect(),L}return e.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},e.prototype.updateEffect=function(n,r,a,l,h,u){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),n||(n="",n+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),t.prototype.updateEffect.call(this,n,r,a,l,h,u)},e}(s.a)},584:function(J,j,o){"use strict";o.d(j,"a",function(){return n});var f=o(434),s=o(444),M=o(515),S=o(435),c=o(457),E="extractHighlightsPixelShader",p=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;S.a.ShadersStore[E]=p;var i={name:E,shader:p},t=o(439),e=o(437),n=function(r){Object(f.d)(a,r);function a(l,h,u,v,T,_,R,O){R===void 0&&(R=0),O===void 0&&(O=!1);var L=r.call(this,l,"extractHighlights",["threshold","exposure"],null,h,u,v,T,_,null,R,void 0,null,O)||this;return L.threshold=.9,L._exposure=1,L._inputPostProcess=null,L.onApplyObservable.add(function(x){L._inputPostProcess&&x.setTextureFromPostProcess("textureSampler",L._inputPostProcess),x.setFloat("threshold",Math.pow(L.threshold,M.b)),x.setFloat("exposure",L._exposure)}),L}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(f.c)([Object(t.c)()],a.prototype,"threshold",void 0),a}(s.a);e.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=n},585:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var f=o(434),s=o(444),M=o(435),S="bloomMergePixelShader",c=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;M.a.ShadersStore[S]=c;var E={name:S,shader:c},p=o(437),i=o(439),t=function(e){Object(f.d)(n,e);function n(r,a,l,h,u,v,T,_,R,O,L){O===void 0&&(O=0),L===void 0&&(L=!1);var x=e.call(this,r,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],u,v,T,_,R,null,O,void 0,null,!0)||this;return x.weight=1,x.weight=h,x.onApplyObservable.add(function(U){U.setTextureFromPostProcess("textureSampler",a),U.setTextureFromPostProcessOutput("bloomBlur",l),U.setFloat("bloomWeight",x.weight)}),L||x.updateEffect(),x}return n.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(f.c)([Object(i.c)()],n.prototype,"weight",void 0),n}(s.a);p.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=t},586:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var f=o(434),s=o(444),M=o(435),S=o(457),c="grainPixelShader",E=`#include<helperFunctions>

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
}`;M.a.ShadersStore[c]=E;var p={name:c,shader:E},i=o(437),t=o(439),e=function(n){Object(f.d)(r,n);function r(a,l,h,u,v,T,_,R){_===void 0&&(_=0),R===void 0&&(R=!1);var O=n.call(this,a,"grain",["intensity","animatedSeed"],[],l,h,u,v,T,null,_,void 0,null,R)||this;return O.intensity=30,O.animated=!1,O.onApplyObservable.add(function(L){L.setFloat("intensity",O.intensity),L.setFloat("animatedSeed",O.animated?Math.random()+1:1)}),O}return r.prototype.getClassName=function(){return"GrainPostProcess"},r._Parse=function(a,l,h,u){return t.a.Parse(function(){return new r(a.name,a.options,l,a.renderTargetSamplingMode,h.getEngine(),a.reusable)},a,h,u)},Object(f.c)([Object(t.c)()],r.prototype,"intensity",void 0),Object(f.c)([Object(t.c)()],r.prototype,"animated",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.GrainPostProcess"]=e},587:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var f=o(434),s=o(444),M=o(435),S="sharpenPixelShader",c=`
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
}`;M.a.ShadersStore[S]=c;var E={name:S,shader:c},p=o(437),i=o(439),t=function(e){Object(f.d)(n,e);function n(r,a,l,h,u,v,T,_){T===void 0&&(T=0),_===void 0&&(_=!1);var R=e.call(this,r,"sharpen",["sharpnessAmounts","screenSize"],null,a,l,h,u,v,null,T,void 0,null,_)||this;return R.colorAmount=1,R.edgeAmount=.3,R.onApply=function(O){O.setFloat2("screenSize",R.width,R.height),O.setFloat2("sharpnessAmounts",R.edgeAmount,R.colorAmount)},R}return n.prototype.getClassName=function(){return"SharpenPostProcess"},n._Parse=function(r,a,l,h){return i.a.Parse(function(){return new n(r.name,r.options,a,r.renderTargetSamplingMode,l.getEngine(),r.textureType,r.reusable)},r,l,h)},Object(f.c)([Object(i.c)()],n.prototype,"colorAmount",void 0),Object(f.c)([Object(i.c)()],n.prototype,"edgeAmount",void 0),n}(s.a);p.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=t},594:function(J,j,o){"use strict";o.d(j,"a",function(){return O});var f=o(434),s=o(440),M=o(439),S=o(436),c=o(451),E=o(442),p=o(479),i=o(444),t=o(481),e=o(466),n=o(486),r=o(437),a=o(448),l=function(){function L(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return L}(),h=o(482),u=o(435),v="ssao2PixelShader",T=`
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
`;u.a.ShadersStore[v]=T;var _={name:v,shader:T},R=o(601),O=function(L){Object(f.d)(x,L);function x(U,F,V,b,y){y===void 0&&(y=!1);var g=L.call(this,F.getEngine(),U)||this;if(g.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",g.SSAORenderEffect="SSAORenderEffect",g.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",g.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",g.SSAOCombineRenderEffect="SSAOCombineRenderEffect",g.totalStrength=1,g.maxZ=100,g.minZAspect=.2,g._samples=8,g._textureSamples=1,g._forceGeometryBuffer=!1,g._expensiveBlur=!0,g.radius=2,g.base=0,g._bits=new Uint32Array(1),g._scene=F,g._ratio=V,g._forceGeometryBuffer=y,!g.isSupported)return s.a.Error("The current engine does not support SSAO 2."),g;var W=g._ratio.ssaoRatio||V,G=g._ratio.blurRatio||V;return g._forceGeometryBuffer?F.enableGeometryBufferRenderer():g._prePassRenderer=F.enablePrePassRenderer(),g._createRandomTexture(),g._originalColorPostProcess=new n.b("SSAOOriginalSceneColor",1,null,E.a.BILINEAR_SAMPLINGMODE,F.getEngine(),!1),g._originalColorPostProcess.samples=g.textureSamples,g._createSSAOPostProcess(1),g._createBlurPostProcess(W,G),g._createSSAOCombinePostProcess(G),g.addEffect(new e.a(F.getEngine(),g.SSAOOriginalSceneColorEffect,function(){return g._originalColorPostProcess},!0)),g.addEffect(new e.a(F.getEngine(),g.SSAORenderEffect,function(){return g._ssaoPostProcess},!0)),g.addEffect(new e.a(F.getEngine(),g.SSAOBlurHRenderEffect,function(){return g._blurHPostProcess},!0)),g.addEffect(new e.a(F.getEngine(),g.SSAOBlurVRenderEffect,function(){return g._blurVPostProcess},!0)),g.addEffect(new e.a(F.getEngine(),g.SSAOCombineRenderEffect,function(){return g._ssaoCombinePostProcess},!0)),F.postProcessRenderPipelineManager.addPipeline(g),b&&F.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(U,b),g}return Object.defineProperty(x.prototype,"samples",{get:function(){return this._samples},set:function(U){this._samples=U,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(U){this._textureSamples=U,this._prePassRenderer?this._prePassRenderer.samples=U:this._originalColorPostProcess.samples=U},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(U){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=U},enumerable:!1,configurable:!0}),Object.defineProperty(x,"IsSupported",{get:function(){var U=a.a.LastCreatedEngine;return U?U._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),x.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},x.prototype.dispose=function(U){U===void 0&&(U=!1);for(var F=0;F<this._scene.cameras.length;F++){var V=this._scene.cameras[F];this._originalColorPostProcess.dispose(V),this._ssaoPostProcess.dispose(V),this._blurHPostProcess.dispose(V),this._blurVPostProcess.dispose(V),this._ssaoCombinePostProcess.dispose(V)}this._randomTexture.dispose(),U&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),L.prototype.dispose.call(this)},x.prototype._createBlurPostProcess=function(U,F){var V=this;this._samplerOffsets=[];for(var b=this.expensiveBlur,y=-8;y<8;y++)this._samplerOffsets.push(y*2+.5);this._blurHPostProcess=new i.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],U,null,E.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(b?"1":"0")+`
`),this._blurHPostProcess.onApply=function(g){!V._scene.activeCamera||(g.setFloat("outSize",V._ssaoCombinePostProcess.width>0?V._ssaoCombinePostProcess.width:V._originalColorPostProcess.width),g.setFloat("near",V._scene.activeCamera.minZ),g.setFloat("far",V._scene.activeCamera.maxZ),g.setFloat("radius",V.radius),V._forceGeometryBuffer?g.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):g.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),g.setArray("samplerOffsets",V._samplerOffsets))},this._blurVPostProcess=new i.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],F,null,E.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(b?"1":"0")+`
`),this._blurVPostProcess.onApply=function(g){!V._scene.activeCamera||(g.setFloat("outSize",V._ssaoCombinePostProcess.height>0?V._ssaoCombinePostProcess.height:V._originalColorPostProcess.height),g.setFloat("near",V._scene.activeCamera.minZ),g.setFloat("far",V._scene.activeCamera.maxZ),g.setFloat("radius",V.radius),V._forceGeometryBuffer?g.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):g.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),g.setArray("samplerOffsets",V._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},x.prototype._rebuild=function(){L.prototype._rebuild.call(this)},x.prototype._radicalInverse_VdC=function(U){return this._bits[0]=U,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},x.prototype._hammersley=function(U,F){return[U/F,this._radicalInverse_VdC(U)]},x.prototype._hemisphereSample_uniform=function(U,F){var V=F*2*Math.PI,b=1-(U*.85+.15),y=Math.sqrt(1-b*b);return new S.e(Math.cos(V)*y,Math.sin(V)*y,b)},x.prototype._generateHemisphere=function(){for(var U=this.samples,F=[],V,b=0;b<U;){if(U<16)V=this._hemisphereSample_uniform(Math.random(),Math.random());else{var y=this._hammersley(b,U);V=this._hemisphereSample_uniform(y[0],y[1])}F.push(V.x,V.y,V.z),b++}return F},x.prototype._getDefinesForSSAO=function(){var U="#define SAMPLES "+this.samples+`
#define SSAO`;return U},x.prototype._createSSAOPostProcess=function(U){var F=this;this._sampleSphere=this._generateHemisphere();var V=this._getDefinesForSSAO(),b=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new i.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],b,U,null,E.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,V),this._ssaoPostProcess.onApply=function(y){var g,W,G,D;if(!!F._scene.activeCamera){if(y.setArray3("sampleSphere",F._sampleSphere),y.setFloat("randTextureTiles",32),y.setFloat("samplesFactor",1/F.samples),y.setFloat("totalStrength",F.totalStrength),y.setFloat2("texelSize",1/F._ssaoPostProcess.width,1/F._ssaoPostProcess.height),y.setFloat("radius",F.radius),y.setFloat("maxZ",F.maxZ),y.setFloat("minZAspect",F.minZAspect),y.setFloat("base",F.base),y.setFloat("near",F._scene.activeCamera.minZ),y.setFloat("far",F._scene.activeCamera.maxZ),F._scene.activeCamera.mode===c.a.PERSPECTIVE_CAMERA)y.setMatrix3x3("depthProjection",x.PERSPECTIVE_DEPTH_PROJECTION),y.setFloat("xViewport",Math.tan(F._scene.activeCamera.fov/2)*F._scene.getEngine().getAspectRatio(F._scene.activeCamera,!0)),y.setFloat("yViewport",Math.tan(F._scene.activeCamera.fov/2));else{var K=F._scene.getEngine().getRenderWidth()/2,Y=F._scene.getEngine().getRenderHeight()/2,se=(g=F._scene.activeCamera.orthoLeft)!==null&&g!==void 0?g:-K,w=(W=F._scene.activeCamera.orthoRight)!==null&&W!==void 0?W:K,fe=(G=F._scene.activeCamera.orthoBottom)!==null&&G!==void 0?G:-Y,ne=(D=F._scene.activeCamera.orthoTop)!==null&&D!==void 0?D:Y;y.setMatrix3x3("depthProjection",x.ORTHO_DEPTH_PROJECTION),y.setFloat("xViewport",(w-se)*.5),y.setFloat("yViewport",(ne-fe)*.5)}y.setMatrix("projection",F._scene.getProjectionMatrix()),F._forceGeometryBuffer?(y.setTexture("depthSampler",F._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),y.setTexture("normalSampler",F._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(y.setTexture("depthSampler",F._prePassRenderer.getRenderTarget().textures[F._prePassRenderer.getIndex(5)]),y.setTexture("normalSampler",F._prePassRenderer.getRenderTarget().textures[F._prePassRenderer.getIndex(6)])),y.setTexture("randomSampler",F._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},x.prototype._createSSAOCombinePostProcess=function(U){var F=this;this._ssaoCombinePostProcess=new i.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],U,null,E.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(V){var b=F._scene.activeCamera.viewport;V.setVector4("viewport",S.c.Vector4[0].copyFromFloats(b.x,b.y,b.width,b.height)),V.setTextureFromPostProcessOutput("originalColor",F._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new l)},x.prototype._createRandomTexture=function(){var U=128;this._randomTexture=new p.a("SSAORandomTexture",U,this._scene,!1,E.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=E.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=E.a.WRAP_ADDRESSMODE;for(var F=this._randomTexture.getContext(),V=function(W,G){return Math.random()*(G-W)+W},b=S.e.Zero(),y=0;y<U;y++)for(var g=0;g<U;g++)b.x=V(0,1),b.y=V(0,1),b.z=0,b.normalize(),b.scaleInPlace(255),b.x=Math.floor(b.x),b.y=Math.floor(b.y),F.fillStyle="rgb("+b.x+", "+b.y+", "+b.z+")",F.fillRect(y,g,1,1);this._randomTexture.update(!1)},x.prototype.serialize=function(){var U=M.a.Serialize(this);return U.customType="SSAO2RenderingPipeline",U},x.Parse=function(U,F,V){return M.a.Parse(function(){return new x(U._name,F,U._ratio)},U,F,V)},x.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],x.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(f.c)([Object(M.c)()],x.prototype,"totalStrength",void 0),Object(f.c)([Object(M.c)()],x.prototype,"maxZ",void 0),Object(f.c)([Object(M.c)()],x.prototype,"minZAspect",void 0),Object(f.c)([Object(M.c)("samples")],x.prototype,"_samples",void 0),Object(f.c)([Object(M.c)("textureSamples")],x.prototype,"_textureSamples",void 0),Object(f.c)([Object(M.c)()],x.prototype,"_ratio",void 0),Object(f.c)([Object(M.c)("expensiveBlur")],x.prototype,"_expensiveBlur",void 0),Object(f.c)([Object(M.c)()],x.prototype,"radius",void 0),Object(f.c)([Object(M.c)()],x.prototype,"base",void 0),x}(t.a);r.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=O},598:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var f=o(434),s=o(538),M=o(518),S=function(e){Object(f.d)(n,e);function n(r,a,l,h,u,v){var T=e.call(this,r,l,h,u,v)||this;return T._beforeCompositionPostProcesses=[],T._internalTextureDirty=!1,T.enabled=!1,T.renderTargetTexture=null,T.renderTargetTexture=a,T}return n.prototype._createCompositionEffect=function(){this.imageProcessingPostProcess=new M.a("prePassComposition",1,null,void 0,this._engine),this.imageProcessingPostProcess._updateParameters()},n.prototype._checkSize=function(){var r=this._engine.getRenderWidth(!0),a=this._engine.getRenderHeight(!0),l=this.getRenderWidth(),h=this.getRenderHeight();(l!==r||h!==a)&&(this.resize({width:r,height:a}),this._internalTextureDirty=!0)},n.prototype.updateCount=function(r,a){e.prototype.updateCount.call(this,r,a),this._internalTextureDirty=!0},n.prototype._resetPostProcessChain=function(){this._beforeCompositionPostProcesses=[]},n.prototype.dispose=function(){var r=this._scene;if(e.prototype.dispose.call(this),r&&r.prePassRenderer){var a=r.prePassRenderer.renderTargets.indexOf(this);a!==-1&&r.prePassRenderer.renderTargets.splice(a,1)}this.imageProcessingPostProcess&&this.imageProcessingPostProcess.dispose()},n}(s.a),c=o(476),E=o(441),p=o(459),i=o(502),t=function(){function e(n){this.excludedSkinnedMesh=[],this.excludedMaterials=[],this.mrtCount=0,this._mrtFormats=[],this._mrtLayout=[],this._textureIndices=[],this._isDirty=!0,this._effectConfigurations=[],this.doNotUseGeometryRendererFallback=!1,this.renderTargets=[],this._clearColor=new E.b(0,0,0,0),this._enabled=!1,this._needsCompositionForThisPass=!1,this.disableGammaTransform=!1,this._scene=n,this._engine=n.getEngine(),e._SceneComponentInitialization(this._scene),this.defaultRT=this._createRenderTarget("sceneprePassRT",null),this._setRenderTarget(null)}return e.prototype.getIndex=function(n){return this._textureIndices[n]},Object.defineProperty(e.prototype,"samples",{get:function(){return this.defaultRT.samples},set:function(n){this.defaultRT.samples=n},enumerable:!1,configurable:!0}),e.prototype.getRenderTarget=function(){return this._currentTarget},e.prototype._setRenderTarget=function(n){n?this._currentTarget=n:this._currentTarget=this.defaultRT},Object.defineProperty(e.prototype,"currentRTisSceneRT",{get:function(){return this._currentTarget===this.defaultRT},enumerable:!1,configurable:!0}),e.prototype._refreshGeometryBufferRendererLink=function(){if(this.doNotUseGeometryRendererFallback)this._geometryBuffer&&this._geometryBuffer._unlinkPrePassRenderer(),this._geometryBuffer=null,this._scene.disableGeometryBufferRenderer();else{if(this._geometryBuffer=this._scene.enableGeometryBufferRenderer(),!this._geometryBuffer){this.doNotUseGeometryRendererFallback=!0;return}this._geometryBuffer._linkPrePassRenderer(this)}},Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},enumerable:!1,configurable:!0}),e.prototype._createRenderTarget=function(n,r){var a=new S(n,r,{width:this._engine.getRenderWidth(),height:this._engine.getRenderHeight()},0,this._scene,{generateMipMaps:!1,generateStencilBuffer:this._engine.isStencilEnable,defaultType:0,types:[],drawOnlyOnFirstAttachmentByDefault:!0});return this.renderTargets.push(a),a},Object.defineProperty(e.prototype,"isSupported",{get:function(){return this._scene.getEngine().getCaps().drawBuffersExtension},enumerable:!1,configurable:!0}),e.prototype.bindAttachmentsForEffect=function(n,r){if(this.enabled&&this._currentTarget.enabled){if(n._multiTarget)this._engine.bindAttachments(this._multiRenderAttachments);else if(this._engine.bindAttachments(this._defaultAttachments),this._geometryBuffer&&this.currentRTisSceneRT){var a=r.getMaterial();a&&!a.isPrePassCapable&&this.excludedMaterials.indexOf(a)===-1&&this._geometryBuffer.renderList.push(r.getRenderingMesh())}}},e.prototype._reinitializeAttachments=function(){for(var n=[],r=[!1],a=[!0],l=0;l<this.mrtCount;l++)n.push(!0),l>0&&(r.push(!0),a.push(!1));this._multiRenderAttachments=this._engine.buildTextureLayout(n),this._clearAttachments=this._engine.buildTextureLayout(r),this._defaultAttachments=this._engine.buildTextureLayout(a)},e.prototype._resetLayout=function(){for(var n=0;n<e._textureFormats.length;n++)this._textureIndices[e._textureFormats[n].type]=-1;this._textureIndices[4]=0,this._mrtLayout=[4],this._mrtFormats=[2],this.mrtCount=1},e.prototype._updateGeometryBufferLayout=function(){if(this._refreshGeometryBufferRendererLink(),this._geometryBuffer){this._geometryBuffer._resetLayout();for(var n=[],r=0;r<this._mrtLayout.length;r++)n.push(!1);this._geometryBuffer._linkInternalTexture(this.defaultRT.getInternalTexture());for(var a=[{prePassConstant:5,geometryBufferConstant:i.a.DEPTH_TEXTURE_TYPE},{prePassConstant:6,geometryBufferConstant:i.a.NORMAL_TEXTURE_TYPE},{prePassConstant:1,geometryBufferConstant:i.a.POSITION_TEXTURE_TYPE},{prePassConstant:3,geometryBufferConstant:i.a.REFLECTIVITY_TEXTURE_TYPE},{prePassConstant:2,geometryBufferConstant:i.a.VELOCITY_TEXTURE_TYPE}],r=0;r<a.length;r++){var l=this._mrtLayout.indexOf(a[r].prePassConstant);l!==-1&&(this._geometryBuffer._forceTextureType(a[r].geometryBufferConstant,l),n[l]=!0)}this._geometryBuffer._setAttachments(this._engine.buildTextureLayout(n))}},e.prototype.restoreAttachments=function(){this.enabled&&this._currentTarget.enabled&&this._defaultAttachments&&this._engine.bindAttachments(this._defaultAttachments)},e.prototype._beforeDraw=function(n,r,a){this._isDirty&&this._update(),!(!this._enabled||!this._currentTarget.enabled)&&(this._geometryBuffer&&(this._geometryBuffer.renderList=[]),this._setupOutputForThisPass(this._currentTarget,n))},e.prototype._prepareFrame=function(n,r,a){n.renderTargetTexture?n.renderTargetTexture._prepareFrame(this._scene,r,a,n.renderTargetTexture.useCameraPostProcesses):this._postProcessesSourceForThisPass.length?this._scene.postProcessManager._prepareFrame():this._engine.restoreDefaultFramebuffer()},e.prototype._renderPostProcesses=function(n,r){var a=this._postProcessesSourceForThisPass[0],l=a?a.inputTexture:n.renderTargetTexture?n.renderTargetTexture.getInternalTexture():null,h=this._currentTarget._beforeCompositionPostProcesses;this._needsCompositionForThisPass&&(h=h.concat([this._currentTarget.imageProcessingPostProcess])),h.length&&(this._scene.postProcessManager._prepareFrame(this._currentTarget.getInternalTexture(),h),this._scene.postProcessManager.directRender(h,l,!1,r))},e.prototype._afterDraw=function(n,r){this._enabled&&this._currentTarget.enabled&&(this._prepareFrame(this._currentTarget,n,r),this._renderPostProcesses(this._currentTarget,n))},e.prototype._clear=function(){this._enabled&&this._currentTarget.enabled&&(this._bindFrameBuffer(this._currentTarget),this._engine.bindAttachments(this._clearAttachments),this._engine.clear(this._clearColor,!0,!1,!1),this._engine.bindAttachments(this._defaultAttachments))},e.prototype._bindFrameBuffer=function(n){if(this._enabled&&this._currentTarget.enabled){this._currentTarget._checkSize();var r=this._currentTarget.getInternalTexture();r&&this._engine.bindFramebuffer(r)}},e.prototype._setEnabled=function(n){this._enabled=n},e.prototype._setRenderTargetEnabled=function(n,r){n.enabled=r},e.prototype.addEffectConfiguration=function(n){for(var r=0;r<this._effectConfigurations.length;r++)if(this._effectConfigurations[r].name===n.name)return this._effectConfigurations[r];return this._effectConfigurations.push(n),n},e.prototype._enable=function(){for(var n=this.mrtCount,r=0;r<this._effectConfigurations.length;r++)this._effectConfigurations[r].enabled&&this._enableTextures(this._effectConfigurations[r].texturesRequired);for(var r=0;r<this.renderTargets.length;r++){this.mrtCount!==n&&this.renderTargets[r].updateCount(this.mrtCount,{types:this._mrtFormats}),this.renderTargets[r]._resetPostProcessChain();for(var a=0;a<this._effectConfigurations.length;a++)this._effectConfigurations[a].enabled&&(!this._effectConfigurations[a].postProcess&&this._effectConfigurations[a].createPostProcess&&this._effectConfigurations[a].createPostProcess(),this._effectConfigurations[a].postProcess&&this.renderTargets[r]._beforeCompositionPostProcesses.push(this._effectConfigurations[a].postProcess))}this._reinitializeAttachments(),this._setEnabled(!0),this._updateGeometryBufferLayout()},e.prototype._disable=function(){this._setEnabled(!1);for(var n=0;n<this.renderTargets.length;n++)this._setRenderTargetEnabled(this.renderTargets[n],!1);this._resetLayout();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].enabled=!1},e.prototype._getPostProcessesSource=function(n,r){if(r)return r._postProcesses;if(n.renderTargetTexture)if(n.renderTargetTexture.useCameraPostProcesses){var a=n.renderTargetTexture.activeCamera?n.renderTargetTexture.activeCamera:this._scene.activeCamera;return a?a._postProcesses:[]}else return n.renderTargetTexture.postProcesses?n.renderTargetTexture.postProcesses:[];else return this._scene.activeCamera?this._scene.activeCamera._postProcesses:[]},e.prototype._setupOutputForThisPass=function(n,r){var a=r&&this._scene.activeCameras&&!!this._scene.activeCameras.length&&this._scene.activeCameras.indexOf(r)!==0;this._postProcessesSourceForThisPass=this._getPostProcessesSource(n,r),this._postProcessesSourceForThisPass=this._postProcessesSourceForThisPass.filter(function(T){return T!=null}),this._scene.autoClear=!0;var l=this._hasImageProcessing(this._postProcessesSourceForThisPass);this._needsCompositionForThisPass=!l&&!this.disableGammaTransform&&this._needsImageProcessing()&&!a;var h=this._getFirstPostProcess(this._postProcessesSourceForThisPass),u=n._beforeCompositionPostProcesses&&n._beforeCompositionPostProcesses[0],v=null;this._scene.imageProcessingConfiguration.applyByPostProcess=this._needsCompositionForThisPass||l,this._needsCompositionForThisPass&&!n.imageProcessingPostProcess&&n._createCompositionEffect(),u?v=u:this._needsCompositionForThisPass?v=n.imageProcessingPostProcess:h&&(v=h),this._bindFrameBuffer(n),this._linkInternalTexture(n,v)},e.prototype._linkInternalTexture=function(n,r){r&&(r.autoClear=!1,r.inputTexture=n.getInternalTexture()),n._outputPostProcess!==r&&(n._outputPostProcess&&n._outputPostProcess.restoreDefaultInputTexture(),n._outputPostProcess=r),n._internalTextureDirty&&(this._updateGeometryBufferLayout(),n._internalTextureDirty=!1)},e.prototype._needsImageProcessing=function(){for(var n=0;n<this._effectConfigurations.length;n++)if(this._effectConfigurations[n].enabled&&this._effectConfigurations[n].needsImageProcessing)return!0;return!1},e.prototype._hasImageProcessing=function(n){var r,a=!1;if(n){for(var l=0;l<n.length;l++)if(((r=n[l])===null||r===void 0?void 0:r.getClassName())==="ImageProcessingPostProcess"){a=!0;break}}return a},e.prototype._getFirstPostProcess=function(n){for(var r=0;r<n.length;r++)if(n[r]!==null)return n[r];return null},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype._enableTextures=function(n){for(var r=0;r<n.length;r++){var a=n[r];this._textureIndices[a]===-1&&(this._textureIndices[a]=this._mrtLayout.length,this._mrtLayout.push(a),this._mrtFormats.push(e._textureFormats[a].format),this.mrtCount++)}},e.prototype._update=function(){this._disable();var n=!1;this._scene.imageProcessingConfiguration.applyByPostProcess=!1;for(var r=0;r<this._scene.materials.length;r++)this._scene.materials[r].setPrePassRenderer(this)&&(n=!0);n&&this._setRenderTargetEnabled(this.defaultRT,!0);for(var a,r=0;r<this.renderTargets.length;r++){if(this.renderTargets[r].renderTargetTexture)a=this._getPostProcessesSource(this.renderTargets[r]);else{var l=this._scene.activeCamera;if(!l)continue;a=l._postProcesses}if(!!a&&(a=a.filter(function(v){return v!=null}),a)){for(var h=0;h<a.length;h++)a[h].setPrePassRenderer(this)&&(this._setRenderTargetEnabled(this.renderTargets[r],!0),n=!0);this._hasImageProcessing(a)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!0)}}this._markAllMaterialsAsPrePassDirty(),this._isDirty=!1,n&&this._enable()},e.prototype._markAllMaterialsAsPrePassDirty=function(){for(var n=this._scene.materials,r=0;r<n.length;r++)n[r].markAsDirty(p.a.PrePassDirtyFlag)},e.prototype.dispose=function(){for(var n=this.renderTargets.length-1;n>=0;n--)this.renderTargets[n].dispose();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].dispose&&this._effectConfigurations[n].dispose()},e._SceneComponentInitialization=function(n){throw c.a.WarnImport("PrePassRendererSceneComponent")},e._textureFormats=[{type:0,format:2},{type:1,format:2},{type:2,format:2},{type:3,format:0},{type:4,format:2},{type:5,format:2},{type:6,format:2},{type:7,format:0}],e}()},600:function(J,j,o){"use strict";var f=o(435),s="chromaticAberrationPixelShader",M=`
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
}`;f.a.ShadersStore[s]=M;var S={name:s,shader:M}},601:function(J,j,o){"use strict";var f=o(435),s="ssaoCombinePixelShader",M=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;f.a.ShadersStore[s]=M;var S={name:s,shader:M}},602:function(J,j,o){"use strict";o.d(j,"a",function(){return _}),o.d(j,"b",function(){return W}),o.d(j,"g",function(){return G.a}),o.d(j,"h",function(){return ee}),o.d(j,"i",function(){return ie}),o.d(j,"c",function(){return a.a}),o.d(j,"d",function(){return r.a}),o.d(j,"e",function(){return Ee.a}),o.d(j,"f",function(){return T.a});var f=o(434),s=o(439),M=o(438),S=o(440),c=o(442),E=o(577),p=o(587),i=o(518),t=o(579),e=o(586),n=o(517),r=o(481),a=o(466),l=o(570),h=o(578),u=o(437),v=o(448),T=o(482),_=function(le){Object(f.d)(B,le);function B(m,N,I,Z,Q){m===void 0&&(m=""),N===void 0&&(N=!0),I===void 0&&(I=v.a.LastCreatedScene),Q===void 0&&(Q=!0);var C=le.call(this,I.getEngine(),m)||this;C._camerasToBeAttached=[],C.SharpenPostProcessId="SharpenPostProcessEffect",C.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",C.FxaaPostProcessId="FxaaPostProcessEffect",C.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",C.GrainPostProcessId="GrainPostProcessEffect",C._glowLayer=null,C.animations=[],C._imageProcessingConfigurationObserver=null,C._sharpenEnabled=!1,C._bloomEnabled=!1,C._depthOfFieldEnabled=!1,C._depthOfFieldBlurLevel=l.b.Low,C._fxaaEnabled=!1,C._imageProcessingEnabled=!0,C._bloomScale=.5,C._chromaticAberrationEnabled=!1,C._grainEnabled=!1,C._buildAllowed=!0,C.onBuildObservable=new M.c,C._resizeObserver=null,C._hardwareScaleLevel=1,C._bloomKernel=64,C._bloomWeight=.15,C._bloomThreshold=.9,C._samples=1,C._hasCleared=!1,C._prevPostProcess=null,C._prevPrevPostProcess=null,C._depthOfFieldSceneObserver=null,C._cameras=Z||I.cameras,C._cameras=C._cameras.slice(),C._camerasToBeAttached=C._cameras.slice(),C._buildAllowed=Q,C._scene=I;var $=C._scene.getEngine().getCaps();C._hdr=N&&($.textureHalfFloatRender||$.textureFloatRender),C._hdr?$.textureHalfFloatRender?C._defaultPipelineTextureType=2:$.textureFloatRender&&(C._defaultPipelineTextureType=1):C._defaultPipelineTextureType=0,I.postProcessRenderPipelineManager.addPipeline(C);var me=C._scene.getEngine();return C.sharpen=new p.a("sharpen",1,null,c.a.BILINEAR_SAMPLINGMODE,me,!1,C._defaultPipelineTextureType,!0),C._sharpenEffect=new a.a(me,C.SharpenPostProcessId,function(){return C.sharpen},!0),C.depthOfField=new l.a(C._scene,null,C._depthOfFieldBlurLevel,C._defaultPipelineTextureType,!0),C.bloom=new h.a(C._scene,C._bloomScale,C._bloomWeight,C.bloomKernel,C._defaultPipelineTextureType,!0),C.chromaticAberration=new t.a("ChromaticAberration",me.getRenderWidth(),me.getRenderHeight(),1,null,c.a.BILINEAR_SAMPLINGMODE,me,!1,C._defaultPipelineTextureType,!0),C._chromaticAberrationEffect=new a.a(me,C.ChromaticAberrationPostProcessId,function(){return C.chromaticAberration},!0),C.grain=new e.a("Grain",1,null,c.a.BILINEAR_SAMPLINGMODE,me,!1,C._defaultPipelineTextureType,!0),C._grainEffect=new a.a(me,C.GrainPostProcessId,function(){return C.grain},!0),C._resizeObserver=me.onResizeObservable.add(function(){C._hardwareScaleLevel=me.getHardwareScalingLevel(),C.bloomKernel=C.bloomKernel}),C._imageProcessingConfigurationObserver=C._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){C.bloom._downscale._exposure=C._scene.imageProcessingConfiguration.exposure,C.imageProcessingEnabled!==C._scene.imageProcessingConfiguration.isEnabled&&(C._imageProcessingEnabled=C._scene.imageProcessingConfiguration.isEnabled,C._buildPipeline())}),C._buildPipeline(),C}return Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(m){this._sharpenEnabled!==m&&(this._sharpenEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(m){this._bloomKernel=m,this.bloom.kernel=m/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(m){this._bloomWeight!==m&&(this.bloom.weight=m,this._bloomWeight=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(m){this._bloomThreshold!==m&&(this.bloom.threshold=m,this._bloomThreshold=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(m){this._bloomScale!==m&&(this._bloomScale=m,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(m){this._bloomEnabled!==m&&(this._bloomEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype._rebuildBloom=function(){var m=this.bloom;this.bloom=new h.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=m.threshold;for(var N=0;N<this._cameras.length;N++)m.disposeEffects(this._cameras[N])},Object.defineProperty(B.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(m){this._depthOfFieldEnabled!==m&&(this._depthOfFieldEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(m){if(this._depthOfFieldBlurLevel!==m){this._depthOfFieldBlurLevel=m;var N=this.depthOfField;this.depthOfField=new l.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=N.focalLength,this.depthOfField.focusDistance=N.focusDistance,this.depthOfField.fStop=N.fStop,this.depthOfField.lensSize=N.lensSize;for(var I=0;I<this._cameras.length;I++)N.disposeEffects(this._cameras[I]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(m){this._fxaaEnabled!==m&&(this._fxaaEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"samples",{get:function(){return this._samples},set:function(m){this._samples!==m&&(this._samples=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(m){this._imageProcessingEnabled!==m&&(this._scene.imageProcessingConfiguration.isEnabled=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(m){m&&!this._glowLayer?this._glowLayer=new E.a("",this._scene):!m&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(m){this._chromaticAberrationEnabled!==m&&(this._chromaticAberrationEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(m){this._grainEnabled!==m&&(this._grainEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype.getClassName=function(){return"DefaultRenderingPipeline"},B.prototype.prepare=function(){var m=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=m},B.prototype._setAutoClearAndTextureSharing=function(m,N){N===void 0&&(N=!1),this._hasCleared?m.autoClear=!1:(m.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),N||(this._prevPrevPostProcess?m.shareOutputWith(this._prevPrevPostProcess):m.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=m)},B.prototype._buildPipeline=function(){var m=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var N=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var I=0,Z=this._cameras;I<Z.length;I++){var Q=Z[I],C=this._scene.enableDepthRenderer(Q);C.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function($){m._cameras.indexOf($.activeCamera)>-1&&(m.depthOfField.depthTexture=$.enableDepthRenderer($.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var C=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=C.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new i.a("imageProcessing",1,null,c.a.BILINEAR_SAMPLINGMODE,N,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(N,this.ImageProcessingPostProcessId,function(){return m.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new n.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,N,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(N,this.FxaaPostProcessId,function(){return m.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&S.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},B.prototype._disposePostProcesses=function(m){m===void 0&&(m=!1);for(var N=0;N<this._cameras.length;N++){var I=this._cameras[N];this.imageProcessing&&this.imageProcessing.dispose(I),this.fxaa&&this.fxaa.dispose(I),m&&(this.sharpen&&this.sharpen.dispose(I),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(I)),this.bloom&&this.bloom.disposeEffects(I),this.chromaticAberration&&this.chromaticAberration.dispose(I),this.grain&&this.grain.dispose(I),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,m&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},B.prototype.addCamera=function(m){this._camerasToBeAttached.push(m),this._buildPipeline()},B.prototype.removeCamera=function(m){var N=this._camerasToBeAttached.indexOf(m);this._camerasToBeAttached.splice(N,1),this._buildPipeline()},B.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),le.prototype.dispose.call(this)},B.prototype.serialize=function(){var m=s.a.Serialize(this);return m.customType="DefaultRenderingPipeline",m},B.Parse=function(m,N,I){return s.a.Parse(function(){return new B(m._name,m._name._hdr,N)},m,N,I)},Object(f.c)([Object(s.c)()],B.prototype,"sharpenEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"bloomKernel",null),Object(f.c)([Object(s.c)()],B.prototype,"_bloomWeight",void 0),Object(f.c)([Object(s.c)()],B.prototype,"_bloomThreshold",void 0),Object(f.c)([Object(s.c)()],B.prototype,"_hdr",void 0),Object(f.c)([Object(s.c)()],B.prototype,"bloomWeight",null),Object(f.c)([Object(s.c)()],B.prototype,"bloomThreshold",null),Object(f.c)([Object(s.c)()],B.prototype,"bloomScale",null),Object(f.c)([Object(s.c)()],B.prototype,"bloomEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"depthOfFieldEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"depthOfFieldBlurLevel",null),Object(f.c)([Object(s.c)()],B.prototype,"fxaaEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"samples",null),Object(f.c)([Object(s.c)()],B.prototype,"imageProcessingEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"glowLayerEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"chromaticAberrationEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"grainEnabled",null),B}(r.a);u.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=_;var R=o(479),O=o(444),L=o(600),x=o(435),U="lensHighlightsPixelShader",F=`
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

}`;x.a.ShadersStore[U]=F;var V={name:U,shader:F},b="depthOfFieldPixelShader",y=`




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
`;x.a.ShadersStore[b]=y;var g={name:b,shader:y},W=function(le){Object(f.d)(B,le);function B(m,N,I,Z,Q){Z===void 0&&(Z=1);var C=le.call(this,I.getEngine(),m)||this;return C.LensChromaticAberrationEffect="LensChromaticAberrationEffect",C.HighlightsEnhancingEffect="HighlightsEnhancingEffect",C.LensDepthOfFieldEffect="LensDepthOfFieldEffect",C._pentagonBokehIsEnabled=!1,C._scene=I,C._depthTexture=I.enableDepthRenderer().getDepthMap(),N.grain_texture?C._grainTexture=N.grain_texture:C._createGrainTexture(),C._edgeBlur=N.edge_blur?N.edge_blur:0,C._grainAmount=N.grain_amount?N.grain_amount:0,C._chromaticAberration=N.chromatic_aberration?N.chromatic_aberration:0,C._distortion=N.distortion?N.distortion:0,C._highlightsGain=N.dof_gain!==void 0?N.dof_gain:-1,C._highlightsThreshold=N.dof_threshold?N.dof_threshold:1,C._dofDistance=N.dof_focus_distance!==void 0?N.dof_focus_distance:-1,C._dofAperture=N.dof_aperture?N.dof_aperture:1,C._dofDarken=N.dof_darken?N.dof_darken:0,C._dofPentagon=N.dof_pentagon!==void 0?N.dof_pentagon:!0,C._blurNoise=N.blur_noise!==void 0?N.blur_noise:!0,C._createChromaticAberrationPostProcess(Z),C._createHighlightsPostProcess(Z),C._createDepthOfFieldPostProcess(Z/4),C.addEffect(new a.a(I.getEngine(),C.LensChromaticAberrationEffect,function(){return C._chromaticAberrationPostProcess},!0)),C.addEffect(new a.a(I.getEngine(),C.HighlightsEnhancingEffect,function(){return C._highlightsPostProcess},!0)),C.addEffect(new a.a(I.getEngine(),C.LensDepthOfFieldEffect,function(){return C._depthOfFieldPostProcess},!0)),C._highlightsGain===-1&&C._disableEffect(C.HighlightsEnhancingEffect,null),I.postProcessRenderPipelineManager.addPipeline(C),Q&&I.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(m,Q),C}return B.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(m){this.setEdgeBlur(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(m){this.setGrainAmount(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(m){this.setChromaticAberration(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(m){this.setAperture(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(m){this.setEdgeDistortion(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(m){this.setFocusDistance(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(m){this.setDarkenOutOfFocus(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(m){this._blurNoise=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(m){m?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(m){this.setHighlightsGain(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(m){this.setHighlightsThreshold(m)},enumerable:!1,configurable:!0}),B.prototype.setEdgeBlur=function(m){this._edgeBlur=m},B.prototype.disableEdgeBlur=function(){this._edgeBlur=0},B.prototype.setGrainAmount=function(m){this._grainAmount=m},B.prototype.disableGrain=function(){this._grainAmount=0},B.prototype.setChromaticAberration=function(m){this._chromaticAberration=m},B.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},B.prototype.setEdgeDistortion=function(m){this._distortion=m},B.prototype.disableEdgeDistortion=function(){this._distortion=0},B.prototype.setFocusDistance=function(m){this._dofDistance=m},B.prototype.disableDepthOfField=function(){this._dofDistance=-1},B.prototype.setAperture=function(m){this._dofAperture=m},B.prototype.setDarkenOutOfFocus=function(m){this._dofDarken=m},B.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},B.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},B.prototype.enableNoiseBlur=function(){this._blurNoise=!0},B.prototype.disableNoiseBlur=function(){this._blurNoise=!1},B.prototype.setHighlightsGain=function(m){this._highlightsGain=m},B.prototype.setHighlightsThreshold=function(m){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=m},B.prototype.disableHighlights=function(){this._highlightsGain=-1},B.prototype.dispose=function(m){m===void 0&&(m=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),m&&this._scene.disableDepthRenderer()},B.prototype._createChromaticAberrationPostProcess=function(m){var N=this;this._chromaticAberrationPostProcess=new O.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(I){I.setFloat("chromatic_aberration",N._chromaticAberration),I.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),I.setFloat("screen_height",N._scene.getEngine().getRenderHeight()),I.setFloat("radialIntensity",1),I.setFloat2("direction",17,17),I.setFloat2("centerPosition",.5,.5)}},B.prototype._createHighlightsPostProcess=function(m){var N=this;this._highlightsPostProcess=new O.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(I){I.setFloat("gain",N._highlightsGain),I.setFloat("threshold",N._highlightsThreshold),I.setTextureFromPostProcess("textureSampler",N._chromaticAberrationPostProcess),I.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),I.setFloat("screen_height",N._scene.getEngine().getRenderHeight())}},B.prototype._createDepthOfFieldPostProcess=function(m){var N=this;this._depthOfFieldPostProcess=new O.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(I){I.setTexture("depthSampler",N._depthTexture),I.setTexture("grainSampler",N._grainTexture),I.setTextureFromPostProcess("textureSampler",N._highlightsPostProcess),I.setTextureFromPostProcess("highlightsSampler",N._depthOfFieldPostProcess),I.setFloat("grain_amount",N._grainAmount),I.setBool("blur_noise",N._blurNoise),I.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),I.setFloat("screen_height",N._scene.getEngine().getRenderHeight()),I.setFloat("distortion",N._distortion),I.setBool("dof_enabled",N._dofDistance!==-1),I.setFloat("screen_distance",1/(.1-1/N._dofDistance)),I.setFloat("aperture",N._dofAperture),I.setFloat("darken",N._dofDarken),I.setFloat("edge_blur",N._edgeBlur),I.setBool("highlights",N._highlightsGain!==-1),N._scene.activeCamera&&(I.setFloat("near",N._scene.activeCamera.minZ),I.setFloat("far",N._scene.activeCamera.maxZ))}},B.prototype._createGrainTexture=function(){var m=512;this._grainTexture=new R.a("LensNoiseTexture",m,this._scene,!1,c.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var N=this._grainTexture.getContext(),I=function($,me){return Math.random()*(me-$)+$},Z,Q=0;Q<m;Q++)for(var C=0;C<m;C++)Z=Math.floor(I(.42,.58)*255),N.fillStyle="rgb("+Z+", "+Z+", "+Z+")",N.fillRect(Q,C,1,1);this._grainTexture.update(!1)},B}(r.a),G=o(594),D=o(436),K=o(486),Y=o(472),se="ssaoPixelShader",w=`
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
`;x.a.ShadersStore[se]=w;var fe={name:se,shader:w},ne=o(601),ee=function(le){Object(f.d)(B,le);function B(m,N,I,Z){var Q=le.call(this,N.getEngine(),m)||this;Q.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",Q.SSAORenderEffect="SSAORenderEffect",Q.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",Q.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",Q.SSAOCombineRenderEffect="SSAOCombineRenderEffect",Q.totalStrength=1,Q.radius=1e-4,Q.area=.0075,Q.fallOff=1e-6,Q.base=.5,Q._firstUpdate=!0,Q._scene=N,Q._createRandomTexture(),Q._depthTexture=N.enableDepthRenderer().getDepthMap();var C=I.ssaoRatio||I,$=I.combineRatio||I;return Q._originalColorPostProcess=new K.b("SSAOOriginalSceneColor",$,null,c.a.BILINEAR_SAMPLINGMODE,N.getEngine(),!1),Q._createSSAOPostProcess(C),Q._createBlurPostProcess(C),Q._createSSAOCombinePostProcess($),Q.addEffect(new a.a(N.getEngine(),Q.SSAOOriginalSceneColorEffect,function(){return Q._originalColorPostProcess},!0)),Q.addEffect(new a.a(N.getEngine(),Q.SSAORenderEffect,function(){return Q._ssaoPostProcess},!0)),Q.addEffect(new a.a(N.getEngine(),Q.SSAOBlurHRenderEffect,function(){return Q._blurHPostProcess},!0)),Q.addEffect(new a.a(N.getEngine(),Q.SSAOBlurVRenderEffect,function(){return Q._blurVPostProcess},!0)),Q.addEffect(new a.a(N.getEngine(),Q.SSAOCombineRenderEffect,function(){return Q._ssaoCombinePostProcess},!0)),N.postProcessRenderPipelineManager.addPipeline(Q),Z&&N.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(m,Z),Q}return Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),B.prototype.getClassName=function(){return"SSAORenderingPipeline"},B.prototype.dispose=function(m){m===void 0&&(m=!1);for(var N=0;N<this._scene.cameras.length;N++){var I=this._scene.cameras[N];this._originalColorPostProcess.dispose(I),this._ssaoPostProcess.dispose(I),this._blurHPostProcess.dispose(I),this._blurVPostProcess.dispose(I),this._ssaoCombinePostProcess.dispose(I)}this._randomTexture.dispose(),m&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),le.prototype.dispose.call(this)},B.prototype._createBlurPostProcess=function(m){var N=this,I=16;this._blurHPostProcess=new Y.a("BlurH",new D.d(1,0),I,m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new Y.a("BlurV",new D.d(0,1),I,m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var Z=N._blurHPostProcess.width/N._scene.getEngine().getRenderWidth();N._blurHPostProcess.kernel=I*Z}),this._blurVPostProcess.onActivateObservable.add(function(){var Z=N._blurVPostProcess.height/N._scene.getEngine().getRenderHeight();N._blurVPostProcess.kernel=I*Z})},B.prototype._rebuild=function(){this._firstUpdate=!0,le.prototype._rebuild.call(this)},B.prototype._createSSAOPostProcess=function(m){var N=this,I=16,Z=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],Q=1/I;this._ssaoPostProcess=new O.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+I+`
#define SSAO`),this._ssaoPostProcess.onApply=function(C){N._firstUpdate&&(C.setArray3("sampleSphere",Z),C.setFloat("samplesFactor",Q),C.setFloat("randTextureTiles",4)),C.setFloat("totalStrength",N.totalStrength),C.setFloat("radius",N.radius),C.setFloat("area",N.area),C.setFloat("fallOff",N.fallOff),C.setFloat("base",N.base),C.setTexture("textureSampler",N._depthTexture),C.setTexture("randomSampler",N._randomTexture)}},B.prototype._createSSAOCombinePostProcess=function(m){var N=this;this._ssaoCombinePostProcess=new O.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(I){I.setVector4("viewport",D.c.Vector4[0].copyFromFloats(0,0,1,1)),I.setTextureFromPostProcess("originalColor",N._originalColorPostProcess)}},B.prototype._createRandomTexture=function(){var m=512;this._randomTexture=new R.a("SSAORandomTexture",m,this._scene,!1,c.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var N=this._randomTexture.getContext(),I=function($,me){return Math.random()*(me-$)+$},Z=D.e.Zero(),Q=0;Q<m;Q++)for(var C=0;C<m;C++)Z.x=Math.floor(I(-1,1)*255),Z.y=Math.floor(I(-1,1)*255),Z.z=Math.floor(I(-1,1)*255),N.fillStyle="rgb("+Z.x+", "+Z.y+", "+Z.z+")",N.fillRect(Q,C,1,1);this._randomTexture.update(!1)},Object(f.c)([Object(s.c)()],B.prototype,"totalStrength",void 0),Object(f.c)([Object(s.c)()],B.prototype,"radius",void 0),Object(f.c)([Object(s.c)()],B.prototype,"area",void 0),Object(f.c)([Object(s.c)()],B.prototype,"fallOff",void 0),Object(f.c)([Object(s.c)()],B.prototype,"base",void 0),B}(r.a),ce=o(450),q=o(571),X=o(581),pe=o(535),_e="standardPixelShader",re=`uniform sampler2D textureSampler;
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
`;x.a.ShadersStore[_e]=re;var ve={name:_e,shader:re},ie=function(le){Object(f.d)(B,le);function B(m,N,I,Z,Q){Z===void 0&&(Z=null);var C=le.call(this,N.getEngine(),m)||this;return C.downSampleX4PostProcess=null,C.brightPassPostProcess=null,C.blurHPostProcesses=[],C.blurVPostProcesses=[],C.textureAdderPostProcess=null,C.volumetricLightPostProcess=null,C.volumetricLightSmoothXPostProcess=null,C.volumetricLightSmoothYPostProcess=null,C.volumetricLightMergePostProces=null,C.volumetricLightFinalPostProcess=null,C.luminancePostProcess=null,C.luminanceDownSamplePostProcesses=[],C.hdrPostProcess=null,C.textureAdderFinalPostProcess=null,C.lensFlareFinalPostProcess=null,C.hdrFinalPostProcess=null,C.lensFlarePostProcess=null,C.lensFlareComposePostProcess=null,C.motionBlurPostProcess=null,C.depthOfFieldPostProcess=null,C.fxaaPostProcess=null,C.screenSpaceReflectionPostProcess=null,C.brightThreshold=1,C.blurWidth=512,C.horizontalBlur=!1,C.lensTexture=null,C.volumetricLightCoefficient=.2,C.volumetricLightPower=4,C.volumetricLightBlurScale=64,C.sourceLight=null,C.hdrMinimumLuminance=1,C.hdrDecreaseRate=.5,C.hdrIncreaseRate=.5,C.lensColorTexture=null,C.lensFlareStrength=20,C.lensFlareGhostDispersal=1.4,C.lensFlareHaloWidth=.7,C.lensFlareDistortionStrength=16,C.lensFlareBlurWidth=512,C.lensStarTexture=null,C.lensFlareDirtTexture=null,C.depthOfFieldDistance=10,C.depthOfFieldBlurWidth=64,C.animations=[],C._currentDepthOfFieldSource=null,C._fixedExposure=1,C._currentExposure=1,C._hdrAutoExposure=!1,C._hdrCurrentLuminance=1,C._motionStrength=1,C._isObjectBasedMotionBlur=!1,C._camerasToBeAttached=[],C._bloomEnabled=!1,C._depthOfFieldEnabled=!1,C._vlsEnabled=!1,C._lensFlareEnabled=!1,C._hdrEnabled=!1,C._motionBlurEnabled=!1,C._fxaaEnabled=!1,C._screenSpaceReflectionsEnabled=!1,C._motionBlurSamples=64,C._volumetricLightStepsCount=50,C._samples=1,C._cameras=Q||N.cameras,C._cameras=C._cameras.slice(),C._camerasToBeAttached=C._cameras.slice(),C._scene=N,C._basePostProcess=Z,C._ratio=I,C._floatTextureType=N.getEngine().getCaps().textureFloatRender?1:2,N.postProcessRenderPipelineManager.addPipeline(C),C._buildPipeline(),C}return Object.defineProperty(B.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(m){this._fixedExposure=m,this._currentExposure=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(m){if(this._hdrAutoExposure=m,this.hdrPostProcess){var N=["#define HDR"];m&&N.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(N.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(m){this._motionStrength=m,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(m){var N=this._isObjectBasedMotionBlur!==m;this._isObjectBasedMotionBlur=m,N&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(m){this._bloomEnabled!==m&&(this._bloomEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(m){this._depthOfFieldEnabled!==m&&(this._depthOfFieldEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(m){this._lensFlareEnabled!==m&&(this._lensFlareEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(m){this._hdrEnabled!==m&&(this._hdrEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(m){if(this._vlsEnabled!==m){if(m){var N=this._scene.enableGeometryBufferRenderer();if(!N){S.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=m,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(m){this._motionBlurEnabled!==m&&(this._motionBlurEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(m){this._fxaaEnabled!==m&&(this._fxaaEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(m){this._screenSpaceReflectionsEnabled!==m&&(this._screenSpaceReflectionsEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(m){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+m.toFixed(1)),this._volumetricLightStepsCount=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(m){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=m:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+m.toFixed(1))),this._motionBlurSamples=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"samples",{get:function(){return this._samples},set:function(m){this._samples!==m&&(this._samples=m,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype._buildPipeline=function(){var m=this,N=this._ratio,I=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new X.a("HDRPass",I,N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){m._currentDepthOfFieldSource=m.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(I.getEngine(),"HDRScreenSpaceReflections",function(){return m.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new O.a("HDRPass","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){m._currentDepthOfFieldSource=m.originalPostProcess}),this.addEffect(new a.a(I.getEngine(),"HDRPassPostProcess",function(){return m.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(I,N/4),this._createBrightPassPostProcess(I,N/4),this._createBlurPostProcesses(I,N/4,1),this._createTextureAdderPostProcess(I,N),this.textureAdderFinalPostProcess=new O.a("HDRDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRBaseDepthOfFieldSource",function(){return m.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(I,N),this.volumetricLightFinalPostProcess=new O.a("HDRVLSFinal","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRVLSFinal",function(){return m.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(I,N),this.lensFlareFinalPostProcess=new O.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return m.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(I,this._floatTextureType),this._createHdrPostProcess(I,N),this.hdrFinalPostProcess=new O.a("HDRPostHDReDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(I.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return m.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(I,N/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(I,N)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(I,N),this._fxaaEnabled&&(this.fxaaPostProcess=new n.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1,0),this.addEffect(new a.a(I.getEngine(),"HDRFxaa",function(){return m.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&S.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},B.prototype._createDownSampleX4PostProcess=function(m,N){var I=this,Z=new Array(32);this.downSampleX4PostProcess=new O.a("HDRDownSampleX4","standard",["dsOffsets"],[],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(Q){for(var C=0,$=I.downSampleX4PostProcess.width,me=I.downSampleX4PostProcess.height,Te=-2;Te<2;Te++)for(var Se=-2;Se<2;Se++)Z[C]=(Te+.5)*(1/$),Z[C+1]=(Se+.5)*(1/me),C+=2;Q.setArray2("dsOffsets",Z)},this.addEffect(new a.a(m.getEngine(),"HDRDownSampleX4",function(){return I.downSampleX4PostProcess},!0))},B.prototype._createBrightPassPostProcess=function(m,N){var I=this,Z=new Array(8);this.brightPassPostProcess=new O.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(Q){var C=1/I.brightPassPostProcess.width,$=1/I.brightPassPostProcess.height;Z[0]=-.5*C,Z[1]=.5*$,Z[2]=.5*C,Z[3]=.5*$,Z[4]=-.5*C,Z[5]=-.5*$,Z[6]=.5*C,Z[7]=-.5*$,Q.setArray2("dsOffsets",Z),Q.setFloat("brightThreshold",I.brightThreshold)},this.addEffect(new a.a(m.getEngine(),"HDRBrightPass",function(){return I.brightPassPostProcess},!0))},B.prototype._createBlurPostProcesses=function(m,N,I,Z){var Q=this;Z===void 0&&(Z="blurWidth");var C=m.getEngine(),$=new Y.a("HDRBlurH_"+I,new D.d(1,0),this[Z],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,this._floatTextureType),me=new Y.a("HDRBlurV_"+I,new D.d(0,1),this[Z],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,this._floatTextureType);$.onActivateObservable.add(function(){var Te=$.width/C.getRenderWidth();$.kernel=Q[Z]*Te}),me.onActivateObservable.add(function(){var Te=me.height/C.getRenderHeight();me.kernel=Q.horizontalBlur?64*Te:Q[Z]*Te}),this.addEffect(new a.a(m.getEngine(),"HDRBlurH"+I,function(){return $},!0)),this.addEffect(new a.a(m.getEngine(),"HDRBlurV"+I,function(){return me},!0)),this.blurHPostProcesses.push($),this.blurVPostProcesses.push(me)},B.prototype._createTextureAdderPostProcess=function(m,N){var I=this;this.textureAdderPostProcess=new O.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(Z){Z.setTextureFromPostProcess("otherSampler",I._vlsEnabled?I._currentDepthOfFieldSource:I.originalPostProcess),Z.setTexture("lensSampler",I.lensTexture),Z.setFloat("exposure",I._currentExposure),I._currentDepthOfFieldSource=I.textureAdderFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDRTextureAdder",function(){return I.textureAdderPostProcess},!0))},B.prototype._createVolumetricLightPostProcess=function(m,N){var I=this,Z=m.enableGeometryBufferRenderer();Z.enablePosition=!0;var Q=Z.getGBuffer();this.volumetricLightPostProcess=new O.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],N/8,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var C=D.d.Zero();this.volumetricLightPostProcess.onApply=function($){if(I.sourceLight&&I.sourceLight.getShadowGenerator()&&I._scene.activeCamera){var me=I.sourceLight.getShadowGenerator();$.setTexture("shadowMapSampler",me.getShadowMap()),$.setTexture("positionSampler",Q.textures[2]),$.setColor3("sunColor",I.sourceLight.diffuse),$.setVector3("sunDirection",I.sourceLight.getShadowDirection()),$.setVector3("cameraPosition",I._scene.activeCamera.globalPosition),$.setMatrix("shadowViewProjection",me.getTransformMatrix()),$.setFloat("scatteringCoefficient",I.volumetricLightCoefficient),$.setFloat("scatteringPower",I.volumetricLightPower),C.x=I.sourceLight.getDepthMinZ(I._scene.activeCamera),C.y=I.sourceLight.getDepthMaxZ(I._scene.activeCamera),$.setVector2("depthValues",C)}},this.addEffect(new a.a(m.getEngine(),"HDRVLS",function(){return I.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(m,N/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new O.a("HDRVLSMerge","standard",[],["originalSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function($){$.setTextureFromPostProcess("originalSampler",I._bloomEnabled?I.textureAdderFinalPostProcess:I.originalPostProcess),I._currentDepthOfFieldSource=I.volumetricLightFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDRVLSMerge",function(){return I.volumetricLightMergePostProces},!0))},B.prototype._createLuminancePostProcesses=function(m,N){var I=this,Z=Math.pow(3,B.LuminanceSteps);this.luminancePostProcess=new O.a("HDRLuminance","standard",["lumOffsets"],[],{width:Z,height:Z},null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LUMINANCE",N);var Q=[];this.luminancePostProcess.onApply=function(Se){var Ce=1/I.luminancePostProcess.width,Oe=1/I.luminancePostProcess.height;Q[0]=-.5*Ce,Q[1]=.5*Oe,Q[2]=.5*Ce,Q[3]=.5*Oe,Q[4]=-.5*Ce,Q[5]=-.5*Oe,Q[6]=.5*Ce,Q[7]=-.5*Oe,Se.setArray2("lumOffsets",Q)},this.addEffect(new a.a(m.getEngine(),"HDRLuminance",function(){return I.luminancePostProcess},!0));for(var C=B.LuminanceSteps-1;C>=0;C--){var Z=Math.pow(3,C),$=`#define LUMINANCE_DOWN_SAMPLE
`;C===0&&($+="#define FINAL_DOWN_SAMPLER");var me=new O.a("HDRLuminanceDownSample"+C,"standard",["dsOffsets","halfDestPixelSize"],[],{width:Z,height:Z},null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,$,N);this.luminanceDownSamplePostProcesses.push(me)}var Te=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Se,Ce){var Oe=new Array(18);Se.onApply=function(Le){if(!!Te){for(var Ie=0,xe=-1;xe<2;xe++)for(var Me=-1;Me<2;Me++)Oe[Ie]=xe/Te.width,Oe[Ie+1]=Me/Te.height,Ie+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Te.width),Ce===I.luminanceDownSamplePostProcesses.length-1?Te=I.luminancePostProcess:Te=Se}},Ce===I.luminanceDownSamplePostProcesses.length-1&&(Se.onAfterRender=function(){var Le=m.getEngine().readPixels(0,0,1,1),Ie=new D.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Me=new Uint8Array(xe.buffer);I._hdrCurrentLuminance=(Me[0]*Ie.x+Me[1]*Ie.y+Me[2]*Ie.z+Me[3]*Ie.w)/100})}),I.addEffect(new a.a(m.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Se},!0))})},B.prototype._createHdrPostProcess=function(m,N){var I=this,Z=["#define HDR"];this._hdrAutoExposure&&Z.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new O.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,Z.join(`
`),0);var Q=1,C=0,$=0;this.hdrPostProcess.onApply=function(me){if(me.setTextureFromPostProcess("textureAdderSampler",I._currentDepthOfFieldSource),C+=m.getEngine().getDeltaTime(),Q<0)Q=I._hdrCurrentLuminance;else{var Te=($-C)/1e3;I._hdrCurrentLuminance<Q+I.hdrDecreaseRate*Te?Q+=I.hdrDecreaseRate*Te:I._hdrCurrentLuminance>Q-I.hdrIncreaseRate*Te?Q-=I.hdrIncreaseRate*Te:Q=I._hdrCurrentLuminance}I.hdrAutoExposure?I._currentExposure=I._fixedExposure/Q:(Q=ce.a.Clamp(Q,I.hdrMinimumLuminance,1e20),me.setFloat("averageLuminance",Q)),$=C,I._currentDepthOfFieldSource=I.hdrFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDR",function(){return I.hdrPostProcess},!0))},B.prototype._createLensFlarePostProcess=function(m,N){var I=this;this.lensFlarePostProcess=new O.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],N/2,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(m.getEngine(),"HDRLensFlare",function(){return I.lensFlarePostProcess},!0)),this._createBlurPostProcesses(m,N/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new O.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(m.getEngine(),"HDRLensFlareCompose",function(){return I.lensFlareComposePostProcess},!0));var Z=new D.d(0,0);this.lensFlarePostProcess.onApply=function($){$.setTextureFromPostProcess("textureSampler",I._bloomEnabled?I.blurHPostProcesses[0]:I.originalPostProcess),$.setTexture("lensColorSampler",I.lensColorTexture),$.setFloat("strength",I.lensFlareStrength),$.setFloat("ghostDispersal",I.lensFlareGhostDispersal),$.setFloat("haloWidth",I.lensFlareHaloWidth),Z.x=I.lensFlarePostProcess.width,Z.y=I.lensFlarePostProcess.height,$.setVector2("resolution",Z),$.setFloat("distortionStrength",I.lensFlareDistortionStrength)};var Q=D.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),C=D.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function($){if(!!I._scene.activeCamera){$.setTextureFromPostProcess("otherSampler",I.lensFlarePostProcess),$.setTexture("lensDirtSampler",I.lensFlareDirtTexture),$.setTexture("lensStarSampler",I.lensStarTexture);var me=I._scene.activeCamera.getViewMatrix().getRow(0),Te=I._scene.activeCamera.getViewMatrix().getRow(2),Se=D.e.Dot(me.toVector3(),new D.e(1,0,0))+D.e.Dot(Te.toVector3(),new D.e(0,0,1));Se*=4;var Ce=D.a.FromValues(Math.cos(Se)*.5,-Math.sin(Se),0,0,Math.sin(Se),Math.cos(Se)*.5,0,0,0,0,1,0,0,0,0,1),Oe=C.multiply(Ce).multiply(Q);$.setMatrix("lensStarMatrix",Oe),I._currentDepthOfFieldSource=I.lensFlareFinalPostProcess}}},B.prototype._createDepthOfFieldPostProcess=function(m,N){var I=this;this.depthOfFieldPostProcess=new O.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(Z){Z.setTextureFromPostProcess("otherSampler",I._currentDepthOfFieldSource),Z.setTexture("depthSampler",I._getDepthTexture()),Z.setFloat("distance",I.depthOfFieldDistance)},this.addEffect(new a.a(m.getEngine(),"HDRDepthOfField",function(){return I.depthOfFieldPostProcess},!0))},B.prototype._createMotionBlurPostProcess=function(m,N){var I=this;if(this._isObjectBasedMotionBlur){var Z=new q.a("HDRMotionBlur",m,N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,0);Z.motionStrength=this.motionStrength,Z.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=Z}else{this.motionBlurPostProcess=new O.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var Q=0,C=D.a.Identity(),$=D.a.Identity(),me=D.a.Identity(),Te=D.d.Zero();this.motionBlurPostProcess.onApply=function(Se){me=m.getProjectionMatrix().multiply(m.getViewMatrix()),me.invertToRef($),Se.setMatrix("inverseViewProjection",$),Se.setMatrix("prevViewProjection",C),C=me,Te.x=I.motionBlurPostProcess.width,Te.y=I.motionBlurPostProcess.height,Se.setVector2("screenSize",Te),Q=m.getEngine().getFps()/60,Se.setFloat("motionScale",Q),Se.setFloat("motionStrength",I.motionStrength),Se.setTexture("depthSampler",I._getDepthTexture())}}this.addEffect(new a.a(m.getEngine(),"HDRMotionBlur",function(){return I.motionBlurPostProcess},!0))},B.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var m=this._scene.enableGeometryBufferRenderer();return m.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},B.prototype._disposePostProcesses=function(){for(var m=0;m<this._cameras.length;m++){var N=this._cameras[m];this.originalPostProcess&&this.originalPostProcess.dispose(N),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(N),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(N),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(N),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(N),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(N),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(N),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(N),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(N),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(N),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(N),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(N);for(var I=0;I<this.luminanceDownSamplePostProcesses.length;I++)this.luminanceDownSamplePostProcesses[I].dispose(N);this.luminancePostProcess&&this.luminancePostProcess.dispose(N),this.hdrPostProcess&&this.hdrPostProcess.dispose(N),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(N),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(N),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(N),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(N);for(var I=0;I<this.blurHPostProcesses.length;I++)this.blurHPostProcesses[I].dispose(N);for(var I=0;I<this.blurVPostProcesses.length;I++)this.blurVPostProcesses[I].dispose(N)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},B.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),le.prototype.dispose.call(this)},B.prototype.serialize=function(){var m=s.a.Serialize(this);return this.sourceLight&&(m.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(m.screenSpaceReflectionPostProcess=s.a.Serialize(this.screenSpaceReflectionPostProcess)),m.customType="StandardRenderingPipeline",m},B.Parse=function(m,N,I){var Z=s.a.Parse(function(){return new B(m._name,N,m._ratio)},m,N,I);return m.sourceLightId&&(Z.sourceLight=N.getLightByID(m.sourceLightId)),m.screenSpaceReflectionPostProcess&&s.a.Parse(function(){return Z.screenSpaceReflectionPostProcess},m.screenSpaceReflectionPostProcess,N,I),Z},B.LuminanceSteps=6,Object(f.c)([Object(s.c)()],B.prototype,"brightThreshold",void 0),Object(f.c)([Object(s.c)()],B.prototype,"blurWidth",void 0),Object(f.c)([Object(s.c)()],B.prototype,"horizontalBlur",void 0),Object(f.c)([Object(s.c)()],B.prototype,"exposure",null),Object(f.c)([Object(s.m)("lensTexture")],B.prototype,"lensTexture",void 0),Object(f.c)([Object(s.c)()],B.prototype,"volumetricLightCoefficient",void 0),Object(f.c)([Object(s.c)()],B.prototype,"volumetricLightPower",void 0),Object(f.c)([Object(s.c)()],B.prototype,"volumetricLightBlurScale",void 0),Object(f.c)([Object(s.c)()],B.prototype,"hdrMinimumLuminance",void 0),Object(f.c)([Object(s.c)()],B.prototype,"hdrDecreaseRate",void 0),Object(f.c)([Object(s.c)()],B.prototype,"hdrIncreaseRate",void 0),Object(f.c)([Object(s.c)()],B.prototype,"hdrAutoExposure",null),Object(f.c)([Object(s.m)("lensColorTexture")],B.prototype,"lensColorTexture",void 0),Object(f.c)([Object(s.c)()],B.prototype,"lensFlareStrength",void 0),Object(f.c)([Object(s.c)()],B.prototype,"lensFlareGhostDispersal",void 0),Object(f.c)([Object(s.c)()],B.prototype,"lensFlareHaloWidth",void 0),Object(f.c)([Object(s.c)()],B.prototype,"lensFlareDistortionStrength",void 0),Object(f.c)([Object(s.c)()],B.prototype,"lensFlareBlurWidth",void 0),Object(f.c)([Object(s.m)("lensStarTexture")],B.prototype,"lensStarTexture",void 0),Object(f.c)([Object(s.m)("lensFlareDirtTexture")],B.prototype,"lensFlareDirtTexture",void 0),Object(f.c)([Object(s.c)()],B.prototype,"depthOfFieldDistance",void 0),Object(f.c)([Object(s.c)()],B.prototype,"depthOfFieldBlurWidth",void 0),Object(f.c)([Object(s.c)()],B.prototype,"motionStrength",null),Object(f.c)([Object(s.c)()],B.prototype,"objectBasedMotionBlur",null),Object(f.c)([Object(s.c)()],B.prototype,"_ratio",void 0),Object(f.c)([Object(s.c)()],B.prototype,"BloomEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"DepthOfFieldEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"LensFlareEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"HDREnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"VLSEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"MotionBlurEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"fxaaEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"screenSpaceReflectionsEnabled",null),Object(f.c)([Object(s.c)()],B.prototype,"volumetricLightStepsCount",null),Object(f.c)([Object(s.c)()],B.prototype,"motionBlurSamples",null),Object(f.c)([Object(s.c)()],B.prototype,"samples",null),B}(r.a);u.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=ie;var Ee=o(548)},605:function(J,j,o){"use strict";var f=o(435),s="importanceSampling",M=`




























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
}`;f.a.IncludesShadersStore[s]=M;var S={name:s,shader:M}},606:function(J,j,o){"use strict";var f=o(435),s="pbrBRDFFunctions",M=`
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
`;f.a.IncludesShadersStore[s]=M;var S={name:s,shader:M}},607:function(J,j,o){"use strict";var f=o(435),s="hdrFilteringFunctions",M=`#ifdef NUM_SAMPLES
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
#endif`;f.a.IncludesShadersStore[s]=M;var S={name:s,shader:M}},625:function(J,j,o){"use strict";var f=o(435),s=o(457),M="rgbdDecodePixelShader",S=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;f.a.ShadersStore[M]=S;var c={name:M,shader:S}},626:function(J,j,o){"use strict";o.d(j,"a",function(){return E});var f=o(434),s=o(439),M=o(441),S=o(480),c=o(454),E=function(){function p(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=p._DefaultIndexOfRefraction,this.indexOfRefraction=p._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=M.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return p.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},p.prototype.isReadyForSubMesh=function(i,t,e,n){return!(i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&S.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||e.getCaps().standardDerivatives&&this._bumpTexture&&S.a.ClearCoatBumpTextureEnabled&&!n&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&S.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},p.prototype.prepareDefines=function(i,t){var e;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((e=this._textureRoughness)===null||e===void 0?void 0:e._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&S.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&S.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&S.a.ClearCoatBumpTextureEnabled?c.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===p._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&S.a.ClearCoatTintTextureEnabled?c.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},p.prototype.bindForSubMesh=function(i,t,e,n,r,a,l,h){var u,v,T,_,R,O,L,x,U=h._materialDefines,F=U.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!r||!i.isSync){F&&S.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&S.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(v=(u=this._texture)===null||u===void 0?void 0:u.coordinatesIndex)!==null&&v!==void 0?v:0,(_=(T=this._texture)===null||T===void 0?void 0:T.level)!==null&&_!==void 0?_:0,(O=(R=this._textureRoughness)===null||R===void 0?void 0:R.coordinatesIndex)!==null&&O!==void 0?O:0,(x=(L=this._textureRoughness)===null||L===void 0?void 0:L.level)!==null&&x!==void 0?x:0),this._texture&&c.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!F&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&e.getCaps().standardDerivatives&&S.a.ClearCoatTextureEnabled&&!n&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),c.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),t._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,l?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,l?-1:1)),this._tintTexture&&S.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),c.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var V=1-this._indexOfRefraction,b=1+this._indexOfRefraction,y=Math.pow(-V/b,2),g=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",y,g,V,b),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}t.texturesEnabled&&(this._texture&&S.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!F&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&S.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&e.getCaps().standardDerivatives&&S.a.ClearCoatBumpTextureEnabled&&!n&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&S.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},p.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},p.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},p.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},p.prototype.dispose=function(i){var t,e,n,r;i&&((t=this._texture)===null||t===void 0||t.dispose(),(e=this._textureRoughness)===null||e===void 0||e.dispose(),(n=this._bumpTexture)===null||n===void 0||n.dispose(),(r=this._tintTexture)===null||r===void 0||r.dispose())},p.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},p.AddFallbacks=function(i,t,e){return i.CLEARCOAT_BUMP&&t.addFallback(e++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&t.addFallback(e++,"CLEARCOAT_TINT"),i.CLEARCOAT&&t.addFallback(e++,"CLEARCOAT"),e},p.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},p.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},p.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},p.prototype.copyTo=function(i){s.a.Clone(function(){return i},this)},p.prototype.serialize=function(){return s.a.Serialize(this)},p.prototype.parse=function(i,t,e){var n=this;s.a.Parse(function(){return n},i,t,e)},p._DefaultIndexOfRefraction=1.5,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)()],p.prototype,"intensity",void 0),Object(f.c)([Object(s.c)()],p.prototype,"roughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"texture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"textureRoughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"remapF0OnInterfaceChange",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"bumpTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isTintEnabled",void 0),Object(f.c)([Object(s.e)()],p.prototype,"tintColor",void 0),Object(f.c)([Object(s.c)()],p.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(s.c)()],p.prototype,"tintThickness",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"tintTexture",void 0),p}()},627:function(J,j,o){"use strict";var f=o(435),s="subSurfaceScatteringFunctions",M=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;f.a.IncludesShadersStore[s]=M;var S={name:s,shader:M}},644:function(J,j,o){"use strict";var f=o(435),s=o(524),M=o(457),S=o(525),c="imageProcessingPixelShader",E=`
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
}`;f.a.ShadersStore[c]=E;var p={name:c,shader:E}},646:function(J,j,o){"use strict";var f=o(435),s="glowMapMergePixelShader",M=`
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
}`;f.a.ShadersStore[s]=M;var S={name:s,shader:M}},647:function(J,j,o){"use strict";var f=o(435),s="glowMapMergeVertexShader",M=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[s]=M;var S={name:s,shader:M}},649:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var f=o(449),s=o(452),M=o(598),S=o(440);Object.defineProperty(f.a.prototype,"prePassRenderer",{get:function(){return this._prePassRenderer},set:function(E){E&&E.isSupported&&(this._prePassRenderer=E)},enumerable:!0,configurable:!0}),f.a.prototype.enablePrePassRenderer=function(){return this._prePassRenderer?this._prePassRenderer:(this._prePassRenderer=new M.a(this),this._prePassRenderer.isSupported||(this._prePassRenderer=null,S.a.Error(`PrePassRenderer needs WebGL 2 support.
Maybe you tried to use the following features that need the PrePassRenderer :
 + Subsurface Scattering`)),this._prePassRenderer)},f.a.prototype.disablePrePassRenderer=function(){!this._prePassRenderer||(this._prePassRenderer.dispose(),this._prePassRenderer=null)};var c=function(){function E(p){this.name=s.a.NAME_PREPASSRENDERER,this.scene=p}return E.prototype.register=function(){this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_PREPASS,this,this._beforeCameraDraw),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterCameraDraw),this.scene._beforeRenderTargetDrawStage.registerStep(s.a.STEP_BEFORERENDERTARGETDRAW_PREPASS,this,this._beforeRenderTargetDraw),this.scene._afterRenderTargetDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterRenderTargetDraw),this.scene._beforeClearStage.registerStep(s.a.STEP_BEFORECLEARSTAGE_PREPASS,this,this._beforeClearStage),this.scene._beforeRenderTargetClearStage.registerStep(s.a.STEP_BEFORERENDERTARGETCLEARSTAGE_PREPASS,this,this._beforeRenderTargetClearStage),this.scene._beforeRenderingMeshStage.registerStep(s.a.STEP_BEFORERENDERINGMESH_PREPASS,this,this._beforeRenderingMeshStage),this.scene._afterRenderingMeshStage.registerStep(s.a.STEP_AFTERRENDERINGMESH_PREPASS,this,this._afterRenderingMeshStage)},E.prototype._beforeRenderTargetDraw=function(p,i,t){this.scene.prePassRenderer&&(p._prePassRenderTarget||(p._prePassRenderTarget=this.scene.prePassRenderer._createRenderTarget(p.name+"_prePassRTT",p)),this.scene.prePassRenderer._setRenderTarget(p._prePassRenderTarget),this.scene.prePassRenderer._beforeDraw(void 0,i,t))},E.prototype._afterRenderTargetDraw=function(p,i,t){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw(i,t)},E.prototype._beforeRenderTargetClearStage=function(p,i,t){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(p._prePassRenderTarget),this.scene.prePassRenderer._clear())},E.prototype._beforeCameraDraw=function(p){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._beforeDraw(p))},E.prototype._afterCameraDraw=function(p){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw()},E.prototype._beforeClearStage=function(){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._clear())},E.prototype._beforeRenderingMeshStage=function(p,i,t,e){if(!!e){var n=p.getScene();n.prePassRenderer&&n.prePassRenderer.bindAttachmentsForEffect(e,i)}},E.prototype._afterRenderingMeshStage=function(p){var i=p.getScene();i.prePassRenderer&&i.prePassRenderer.restoreAttachments()},E.prototype.rebuild=function(){this.scene.disablePrePassRenderer(),this.scene.enablePrePassRenderer()},E.prototype.dispose=function(){this.scene.disablePrePassRenderer()},E}();M.a._SceneComponentInitialization=function(E){var p=E._getComponent(s.a.NAME_PREPASSRENDERER);p||(p=new c(E),E._addComponent(p))}},664:function(J,j,o){"use strict";var f=o(435),s=o(487),M=o(496),S=o(497),c=o(501),E=o(507),p=o(508),i=o(488),t=o(489),e="depthVertexShader",n=`
attribute vec3 position;
#include<bonesDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]

#include<instancesDeclaration>
uniform mat4 viewProjection;
uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
varying float vDepthMetric;
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
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
}
`;f.a.ShadersStore[e]=n;var r={name:e,shader:n}},666:function(J,j,o){"use strict";o.d(j,"a",function(){return S});var f=o(449),s=o(556),M=o(452);f.a.prototype.enableDepthRenderer=function(c,E,p){if(E===void 0&&(E=!1),p===void 0&&(p=!1),c=c||this.activeCamera,!c)throw"No camera available to enable depth renderer";if(this._depthRenderer||(this._depthRenderer={}),!this._depthRenderer[c.id]){var i=!!this.getEngine().getCaps().textureFloatRender,t=0;this.getEngine().getCaps().textureHalfFloatRender&&(!p||!i)?t=2:i?t=1:t=0,this._depthRenderer[c.id]=new s.a(this,t,c,E)}return this._depthRenderer[c.id]},f.a.prototype.disableDepthRenderer=function(c){c=c||this.activeCamera,!(!c||!this._depthRenderer||!this._depthRenderer[c.id])&&(this._depthRenderer[c.id].dispose(),delete this._depthRenderer[c.id])};var S=function(){function c(E){this.name=M.a.NAME_DEPTHRENDERER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(M.a.STEP_GATHERRENDERTARGETS_DEPTHRENDERER,this,this._gatherRenderTargets),this.scene._gatherActiveCameraRenderTargetsStage.registerStep(M.a.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER,this,this._gatherActiveCameraRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){for(var E in this.scene._depthRenderer)this.scene._depthRenderer[E].dispose()},c.prototype._gatherRenderTargets=function(E){if(this.scene._depthRenderer)for(var p in this.scene._depthRenderer){var i=this.scene._depthRenderer[p];i.enabled&&!i.useOnlyInActiveCamera&&E.push(i.getDepthMap())}},c.prototype._gatherActiveCameraRenderTargets=function(E){if(this.scene._depthRenderer)for(var p in this.scene._depthRenderer){var i=this.scene._depthRenderer[p];i.enabled&&i.useOnlyInActiveCamera&&this.scene.activeCamera.id===p&&E.push(i.getDepthMap())}},c}();s.a._SceneComponentInitialization=function(c){var E=c._getComponent(M.a.NAME_DEPTHRENDERER);E||(E=new S(c),c._addComponent(E))}},743:function(J,j,o){"use strict";o.d(j,"a",function(){return s});/*! *****************************************************************************
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
***************************************************************************** */var f=function(b,y){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,W){g.__proto__=W}||function(g,W){for(var G in W)Object.prototype.hasOwnProperty.call(W,G)&&(g[G]=W[G])},f(b,y)};function s(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");f(b,y);function g(){this.constructor=b}b.prototype=y===null?Object.create(y):(g.prototype=y.prototype,new g)}var M=function(){return M=Object.assign||function(y){for(var g,W=1,G=arguments.length;W<G;W++){g=arguments[W];for(var D in g)Object.prototype.hasOwnProperty.call(g,D)&&(y[D]=g[D])}return y},M.apply(this,arguments)};function S(b,y){var g={};for(var W in b)Object.prototype.hasOwnProperty.call(b,W)&&y.indexOf(W)<0&&(g[W]=b[W]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,W=Object.getOwnPropertySymbols(b);G<W.length;G++)y.indexOf(W[G])<0&&Object.prototype.propertyIsEnumerable.call(b,W[G])&&(g[W[G]]=b[W[G]]);return g}function c(b,y,g,W){var G=arguments.length,D=G<3?y:W===null?W=Object.getOwnPropertyDescriptor(y,g):W,K;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")D=Reflect.decorate(b,y,g,W);else for(var Y=b.length-1;Y>=0;Y--)(K=b[Y])&&(D=(G<3?K(D):G>3?K(y,g,D):K(y,g))||D);return G>3&&D&&Object.defineProperty(y,g,D),D}function E(b,y){return function(g,W){y(g,W,b)}}function p(b,y){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(b,y)}function i(b,y,g,W){function G(D){return D instanceof g?D:new g(function(K){K(D)})}return new(g||(g=Promise))(function(D,K){function Y(fe){try{w(W.next(fe))}catch(ne){K(ne)}}function se(fe){try{w(W.throw(fe))}catch(ne){K(ne)}}function w(fe){fe.done?D(fe.value):G(fe.value).then(Y,se)}w((W=W.apply(b,y||[])).next())})}function t(b,y){var g={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},W,G,D,K;return K={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(K[Symbol.iterator]=function(){return this}),K;function Y(w){return function(fe){return se([w,fe])}}function se(w){if(W)throw new TypeError("Generator is already executing.");for(;g;)try{if(W=1,G&&(D=w[0]&2?G.return:w[0]?G.throw||((D=G.return)&&D.call(G),0):G.next)&&!(D=D.call(G,w[1])).done)return D;switch(G=0,D&&(w=[w[0]&2,D.value]),w[0]){case 0:case 1:D=w;break;case 4:return g.label++,{value:w[1],done:!1};case 5:g.label++,G=w[1],w=[0];continue;case 7:w=g.ops.pop(),g.trys.pop();continue;default:if(D=g.trys,!(D=D.length>0&&D[D.length-1])&&(w[0]===6||w[0]===2)){g=0;continue}if(w[0]===3&&(!D||w[1]>D[0]&&w[1]<D[3])){g.label=w[1];break}if(w[0]===6&&g.label<D[1]){g.label=D[1],D=w;break}if(D&&g.label<D[2]){g.label=D[2],g.ops.push(w);break}D[2]&&g.ops.pop(),g.trys.pop();continue}w=y.call(b,g)}catch(fe){w=[6,fe],G=0}finally{W=D=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}}var e=Object.create?function(b,y,g,W){W===void 0&&(W=g),Object.defineProperty(b,W,{enumerable:!0,get:function(){return y[g]}})}:function(b,y,g,W){W===void 0&&(W=g),b[W]=y[g]};function n(b,y){for(var g in b)g!=="default"&&!Object.prototype.hasOwnProperty.call(y,g)&&e(y,b,g)}function r(b){var y=typeof Symbol=="function"&&Symbol.iterator,g=y&&b[y],W=0;if(g)return g.call(b);if(b&&typeof b.length=="number")return{next:function(){return b&&W>=b.length&&(b=void 0),{value:b&&b[W++],done:!b}}};throw new TypeError(y?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(b,y){var g=typeof Symbol=="function"&&b[Symbol.iterator];if(!g)return b;var W=g.call(b),G,D=[],K;try{for(;(y===void 0||y-- >0)&&!(G=W.next()).done;)D.push(G.value)}catch(Y){K={error:Y}}finally{try{G&&!G.done&&(g=W.return)&&g.call(W)}finally{if(K)throw K.error}}return D}function l(){for(var b=[],y=0;y<arguments.length;y++)b=b.concat(a(arguments[y]));return b}function h(){for(var b=0,y=0,g=arguments.length;y<g;y++)b+=arguments[y].length;for(var W=Array(b),G=0,y=0;y<g;y++)for(var D=arguments[y],K=0,Y=D.length;K<Y;K++,G++)W[G]=D[K];return W}function u(b,y){for(var g=0,W=y.length,G=b.length;g<W;g++,G++)b[G]=y[g];return b}function v(b){return this instanceof v?(this.v=b,this):new v(b)}function T(b,y,g){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var W=g.apply(b,y||[]),G,D=[];return G={},K("next"),K("throw"),K("return"),G[Symbol.asyncIterator]=function(){return this},G;function K(ee){W[ee]&&(G[ee]=function(ce){return new Promise(function(q,X){D.push([ee,ce,q,X])>1||Y(ee,ce)})})}function Y(ee,ce){try{se(W[ee](ce))}catch(q){ne(D[0][3],q)}}function se(ee){ee.value instanceof v?Promise.resolve(ee.value.v).then(w,fe):ne(D[0][2],ee)}function w(ee){Y("next",ee)}function fe(ee){Y("throw",ee)}function ne(ee,ce){ee(ce),D.shift(),D.length&&Y(D[0][0],D[0][1])}}function _(b){var y,g;return y={},W("next"),W("throw",function(G){throw G}),W("return"),y[Symbol.iterator]=function(){return this},y;function W(G,D){y[G]=b[G]?function(K){return(g=!g)?{value:v(b[G](K)),done:G==="return"}:D?D(K):K}:D}}function R(b){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var y=b[Symbol.asyncIterator],g;return y?y.call(b):(b=typeof r=="function"?r(b):b[Symbol.iterator](),g={},W("next"),W("throw"),W("return"),g[Symbol.asyncIterator]=function(){return this},g);function W(D){g[D]=b[D]&&function(K){return new Promise(function(Y,se){K=b[D](K),G(Y,se,K.done,K.value)})}}function G(D,K,Y,se){Promise.resolve(se).then(function(w){D({value:w,done:Y})},K)}}function O(b,y){return Object.defineProperty?Object.defineProperty(b,"raw",{value:y}):b.raw=y,b}var L=Object.create?function(b,y){Object.defineProperty(b,"default",{enumerable:!0,value:y})}:function(b,y){b.default=y};function x(b){if(b&&b.__esModule)return b;var y={};if(b!=null)for(var g in b)g!=="default"&&Object.prototype.hasOwnProperty.call(b,g)&&e(y,b,g);return L(y,b),y}function U(b){return b&&b.__esModule?b:{default:b}}function F(b,y){if(!y.has(b))throw new TypeError("attempted to get private field on non-instance");return y.get(b)}function V(b,y,g){if(!y.has(b))throw new TypeError("attempted to set private field on non-instance");return y.set(b,g),g}},758:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var f=o(743),s=o(435),M=o(455),S=o(437),c=function(){function i(){}return i}(),E=function(){function i(){}return i}(),p=function(i){Object(f.a)(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.CustomParts=new E,r.customShaderNameResolve=r.Builder,r.FragmentShader=s.a.ShadersStore.defaultPixelShader,r.VertexShader=s.a.ShadersStore.defaultVertexShader,r}return t.prototype.AttachAfterBind=function(e,n){if(this._newUniformInstances)for(var r in this._newUniformInstances){var a=r.toString().split("-");a[0]=="vec2"?n.setVector2(a[1],this._newUniformInstances[r]):a[0]=="vec3"?n.setVector3(a[1],this._newUniformInstances[r]):a[0]=="vec4"?n.setVector4(a[1],this._newUniformInstances[r]):a[0]=="mat4"?n.setMatrix(a[1],this._newUniformInstances[r]):a[0]=="float"&&n.setFloat(a[1],this._newUniformInstances[r])}if(this._newSamplerInstances)for(var r in this._newSamplerInstances){var a=r.toString().split("-");a[0]=="sampler2D"&&this._newSamplerInstances[r].isReady&&this._newSamplerInstances[r].isReady()&&n.setTexture(a[1],this._newSamplerInstances[r])}},t.prototype.ReviewUniform=function(e,n){if(e=="uniform"&&this._newUniforms)for(var r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")==-1&&n.push(this._newUniforms[r]);if(e=="sampler"&&this._newUniforms)for(var r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")!=-1&&n.push(this._newUniforms[r]);return n},t.prototype.Builder=function(e,n,r,a,l,h){var u=this;if(h&&this._customAttributes&&this._customAttributes.length>0&&h.push.apply(h,this._customAttributes),this.ReviewUniform("uniform",n),this.ReviewUniform("sampler",a),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,t.ShaderIndexer++;var v="custom_"+t.ShaderIndexer,T=this._afterBind.bind(this);return this._afterBind=function(_,R){if(!!R){u.AttachAfterBind(_,R);try{T(_,R)}catch(O){}}},s.a.ShadersStore[v+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(s.a.ShadersStore[v+"VertexShader"]=s.a.ShadersStore[v+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),s.a.ShadersStore[v+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(s.a.ShadersStore[v+"PixelShader"]=s.a.ShadersStore[v+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=v,v},t.prototype.AddUniform=function(e,n,r){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),r&&(n.indexOf("sampler")!=-1?this._newSamplerInstances[n+"-"+e]=r:this._newUniformInstances[n+"-"+e]=r),this._customUniform.push("uniform "+n+" "+e+";"),this._newUniforms.push(e),this},t.prototype.AddAttribute=function(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this},t.prototype.Fragment_Begin=function(e){return this.CustomParts.Fragment_Begin=e,this},t.prototype.Fragment_Definitions=function(e){return this.CustomParts.Fragment_Definitions=e,this},t.prototype.Fragment_MainBegin=function(e){return this.CustomParts.Fragment_MainBegin=e,this},t.prototype.Fragment_Custom_Diffuse=function(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this},t.prototype.Fragment_Custom_Alpha=function(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this},t.prototype.Fragment_Before_Lights=function(e){return this.CustomParts.Fragment_Before_Lights=e,this},t.prototype.Fragment_Before_Fog=function(e){return this.CustomParts.Fragment_Before_Fog=e,this},t.prototype.Fragment_Before_FragColor=function(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this},t.prototype.Vertex_Begin=function(e){return this.CustomParts.Vertex_Begin=e,this},t.prototype.Vertex_Definitions=function(e){return this.CustomParts.Vertex_Definitions=e,this},t.prototype.Vertex_MainBegin=function(e){return this.CustomParts.Vertex_MainBegin=e,this},t.prototype.Vertex_Before_PositionUpdated=function(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this},t.prototype.Vertex_Before_NormalUpdated=function(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this},t.prototype.Vertex_After_WorldPosComputed=function(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this},t.prototype.Vertex_MainEnd=function(e){return this.CustomParts.Vertex_MainEnd=e,this},t.ShaderIndexer=1,t}(M.a);S.a.RegisteredTypes["BABYLON.CustomMaterial"]=p}}]);
