(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[48],{106:function(q,H,o){"use strict";o.r(H);var l=o(445),s=o(449),O=o(498),v=o(475),c=o(441),_=o(506),h=o(648),i=o(555),e=o(602),t=o(446),r=o(455),n=o(549),a=Math.pow,f=(m,P,R)=>new Promise((A,C)=>{var M=I=>{try{F(R.next(I))}catch(N){C(N)}},x=I=>{try{F(R.throw(I))}catch(N){C(N)}},F=I=>I.done?A(I.value):Promise.resolve(I.value).then(M,x);F((R=R.apply(m,P)).next())});const p={animate:!0,context:Object(n.a)()},d=m=>f(void 0,[m],function*({canvas:P,width:R,height:A}){const C=new l.a(P,!0,{preserveDrawingBuffer:!0,stencil:!0}),M=new s.a(C);M.clearColor=c.b.FromColor3(new c.a(17/255,22/255,26/255));const x=Math.PI,F=Math.PI/2,I=new _.a("camera",x,F,50,new v.z(0,0,0),M);I.minZ=.1,I.fov=1,I.attachControl(P,!0);const N=new O.a("hemiLight",new v.z(-1,1,0),M);N.diffuse=new c.a(1,1,1),N.groundColor=new c.a(.75,.75,.75),N.specular=new c.a(1,1,1);const G=8,V=32,L=12,ee=2e3,K=h.a.CreateTube("tube",{path:(()=>{const Z=[];for(let ue=0;ue<ee;ue+=1){const W=ue/ee,ge=W*Math.PI*G,te=(Math.cos(W*Math.PI+Math.PI/2)*.5+.6)*a(10,1.25),se=Math.cos(ge)*te,de=Math.sin(ge)*te;Z.push(new v.z(se,(W-.5)*V,de))}return Z})(),radiusFunction:Z=>Math.abs(Z/ee-.5)*.5+.1,tessellation:16,cap:t.a.CAP_ALL},M);K.thinInstanceRegisterAttribute("color",4);for(let Z=0;Z<L;Z+=1){const ue=Z/L,W=new v.z.Zero,ge=new v.r.RotationAxis(new v.z(0,1,0),ue*Math.PI*2),te=new v.z(1,1,1),se=v.k.Compose(te,ge,W),de=K.thinInstanceAdd(se),J=new c.a;c.a.HSVtoRGBToRef(360*ue,.75,1,J),K.thinInstanceSetAttributeAt("color",de,[J.r,J.g,J.b,1])}const B=new r.a("mat",M);K.material=B,B.specularColor=new c.a(.25,.25,.25);const Q=new e.a("default",!0,M,[I]);return Q.fxaaEnabled=!0,Q.imageProcessingEnabled=!1,Q.samples=8,Q.bloomEnabled=!0,Q.bloomThreshold=0,Q.bloomWeight=.25,Q.bloomKernel=50,Q.bloomScale=.9,{render({time:Z,width:ue,height:W,frame:ge,deltaTime:te}){M.render()},resize({pixelRatio:Z,width:ue,height:W}){C.resize()},unload(){C.dispose()}}});H.default={sketch:d,settings:p}},444:function(q,H,o){"use strict";o.d(H,"a",function(){return t});var l=o(434),s=o(490),O=o(438),v=o(436),c=o(534),_=o(445),h=o(500),i=o(439),e=o(437),t=function(){function r(n,a,f,p,d,m,P,R,A,C,M,x,F,I,N){P===void 0&&(P=1),C===void 0&&(C=null),M===void 0&&(M=0),x===void 0&&(x="postprocess"),I===void 0&&(I=!1),N===void 0&&(N=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new s.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new v.d(1,1),this._texelSize=v.d.Zero(),this.onActivateObservable=new O.c,this.onSizeChangedObservable=new O.c,this.onApplyObservable=new O.c,this.onBeforeRenderObservable=new O.c,this.onAfterRenderObservable=new O.c,this.name=n,m!=null?(this._camera=m,this._scene=m.getScene(),m.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):R&&(this._engine=R,this._engine.postProcesses.push(this)),this._options=d,this.renderTargetSamplingMode=P||1,this._reusable=A||!1,this._textureType=M,this._textureFormat=N,this._samplers=p||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=x,this._parameters=f||[],this._parameters.push("scale"),this._indexParameters=F,I||this.updateEffect(C)}return Object.defineProperty(r.prototype,"samples",{get:function(){return this._samples},set:function(n){var a=this;this._samples=Math.min(n,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(f){f.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(f,a._samples)})},enumerable:!1,configurable:!0}),r.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(r.prototype,"onActivate",{set:function(n){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),n&&(this._onActivateObserver=this.onActivateObservable.add(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onSizeChanged",{set:function(n){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onApply",{set:function(n){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onBeforeRender",{set:function(n){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onAfterRender",{set:function(n){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(n){this._forcedOutputTexture=n},enumerable:!1,configurable:!0}),r.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},r.prototype.getCamera=function(){return this._camera},Object.defineProperty(r.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),r.prototype.getClassName=function(){return"PostProcess"},r.prototype.getEngine=function(){return this._engine},r.prototype.getEffect=function(){return this._effect},r.prototype.shareOutputWith=function(n){return this._disposeTextures(),this._shareOutputWithPostProcess=n,this},r.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new s.a(2)),this._shareOutputWithPostProcess=null},r.prototype.updateEffect=function(n,a,f,p,d,m,P,R){n===void 0&&(n=null),a===void 0&&(a=null),f===void 0&&(f=null),this._postProcessDefines=n,this._effect=this._engine.createEffect({vertex:P!=null?P:this._vertexUrl,fragment:R!=null?R:this._fragmentUrl},["position"],a||this._parameters,f||this._samplers,n!==null?n:"",void 0,d,m,p||this._indexParameters)},r.prototype.isReusable=function(){return this._reusable},r.prototype.markTextureDirty=function(){this.width=-1},r.prototype._createRenderTargetTexture=function(n,a,f){f===void 0&&(f=0);for(var p=0;p<this._textureCache.length;p++)if(this._textureCache[p].texture.width===n.width&&this._textureCache[p].texture.height===n.height&&this._textureCache[p].postProcessChannel===f)return this._textureCache[p].texture;var d=this._engine.createRenderTargetTexture(n,a);return this._textureCache.push({texture:d,postProcessChannel:f,lastUsedRenderId:-1}),d},r.prototype._flushTextureCache=function(){for(var n=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(n-this._textureCache[a].lastUsedRenderId>100){for(var f=!1,p=0;p<this._textures.length;p++)if(this._textures.data[p]===this._textureCache[a].texture){f=!0;break}f||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},r.prototype._resize=function(n,a,f,p,d){this._textures.length>0&&this._textures.reset(),this.width=n,this.height=a;var m={width:this.width,height:this.height},P={generateMipMaps:p,generateDepthBuffer:d||f._postProcesses.indexOf(this)===0,generateStencilBuffer:(d||f._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(m,P,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(m,P,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},r.prototype.activate=function(n,a,f){var p=this;a===void 0&&(a=null),n=n||this._camera;var d=n.getScene(),m=d.getEngine(),P=m.getCaps().maxTextureSize,R=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,A=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,C=n.parent;C&&(C.leftCamera==n||C.rightCamera==n)&&(R/=2);var M=this._options.width||R,x=this._options.height||A,F=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var I=m.currentViewport;I&&(M*=I.width,x*=I.height)}(F||this.alwaysForcePOT)&&(this._options.width||(M=m.needPOTTextures?_.a.GetExponentOfTwo(M,P,this.scaleMode):M),this._options.height||(x=m.needPOTTextures?_.a.GetExponentOfTwo(x,P,this.scaleMode):x)),(this.width!==M||this.height!==x)&&this._resize(M,x,n,F,f),this._textures.forEach(function(L){L.samples!==p.samples&&p._engine.updateRenderTargetTextureSampleCount(L,p.samples)}),this._flushTextureCache(),this._renderId++}var N;if(this._shareOutputWithPostProcess)N=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)N=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{N=this.inputTexture;for(var G=void 0,V=0;V<this._textureCache.length;V++)if(this._textureCache[V].texture===N){G=this._textureCache[V];break}G&&(G.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(R/M,A/x),this._engine.bindFramebuffer(N,0,R,A,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(N,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(n),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:d.clearColor,d._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),N},Object.defineProperty(r.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),r.prototype.isReady=function(){return this._effect&&this._effect.isReady()},r.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var n;return this._shareOutputWithPostProcess?n=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?n=this._forcedOutputTexture:n=this.inputTexture,this._effect._bindTexture("textureSampler",n),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},r.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},r.prototype._disposeTextureCache=function(){for(var n=this._textureCache.length-1;n>=0;n--)this._engine._releaseTexture(this._textureCache[n].texture);this._textureCache.length=0},r.prototype.setPrePassRenderer=function(n){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=n.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},r.prototype.dispose=function(n){n=n||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!n){if(n.detachPostProcess(this),a=n._postProcesses.indexOf(this),a===0&&n._postProcesses.length>0){var f=this._camera._getFirstPostProcess();f&&f.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},r.prototype.serialize=function(){var n=i.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return n.customType="BABYLON."+this.getClassName(),n.cameraId=a?a.id:null,n.reusable=this._reusable,n.textureType=this._textureType,n.fragmentUrl=this._fragmentUrl,n.parameters=this._parameters,n.samplers=this._samplers,n.options=this._options,n.defines=this._postProcessDefines,n.textureFormat=this._textureFormat,n.vertexUrl=this._vertexUrl,n.indexParameters=this._indexParameters,n},r.prototype.clone=function(){var n=this.serialize();n._engine=this._engine,n.cameraId=null;var a=r.Parse(n,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},r.Parse=function(n,a,f){var p=e.a.GetClass(n.customType);if(!p||!p._Parse)return null;var d=a?a.getCameraByID(n.cameraId):null;return p._Parse(n,d,a,f)},r._Parse=function(n,a,f,p){return i.a.Parse(function(){return new r(n.name,n.fragmentUrl,n.parameters,n.samplers,n.options,a,n.renderTargetSamplingMode,n._engine,n.reusable,n.defines,n.textureType,n.vertexUrl,n.indexParameters,!1,n.textureFormat)},n,f,p)},Object(l.c)([Object(i.c)()],r.prototype,"uniqueId",void 0),Object(l.c)([Object(i.c)()],r.prototype,"name",void 0),Object(l.c)([Object(i.c)()],r.prototype,"width",void 0),Object(l.c)([Object(i.c)()],r.prototype,"height",void 0),Object(l.c)([Object(i.c)()],r.prototype,"renderTargetSamplingMode",void 0),Object(l.c)([Object(i.f)()],r.prototype,"clearColor",void 0),Object(l.c)([Object(i.c)()],r.prototype,"autoClear",void 0),Object(l.c)([Object(i.c)()],r.prototype,"alphaMode",void 0),Object(l.c)([Object(i.c)()],r.prototype,"alphaConstants",void 0),Object(l.c)([Object(i.c)()],r.prototype,"enablePixelPerfectMode",void 0),Object(l.c)([Object(i.c)()],r.prototype,"forceFullscreenViewport",void 0),Object(l.c)([Object(i.c)()],r.prototype,"scaleMode",void 0),Object(l.c)([Object(i.c)()],r.prototype,"alwaysForcePOT",void 0),Object(l.c)([Object(i.c)("samples")],r.prototype,"_samples",void 0),Object(l.c)([Object(i.c)()],r.prototype,"adaptScaleToCurrentViewport",void 0),r}();e.a.RegisteredTypes["BABYLON.PostProcess"]=t},458:function(q,H,o){"use strict";o.d(H,"a",function(){return r});var l=o(434),s=o(438),O=o(443),v=o(436),c=o(442),_=o(590),h=o(591),i=o(500),e=o(522),t=o(445),r=function(n){Object(l.d)(a,n);function a(f,p,d,m,P,R,A,C,M,x,F,I,N,G){P===void 0&&(P=!0),R===void 0&&(R=0),A===void 0&&(A=!1),C===void 0&&(C=c.a.TRILINEAR_SAMPLINGMODE),M===void 0&&(M=!0),x===void 0&&(x=!1),F===void 0&&(F=!1),I===void 0&&(I=5),N===void 0&&(N=!1);var V,L=n.call(this,null,d,!m,void 0,C,void 0,void 0,void 0,void 0,I)||this;return L.renderParticles=!0,L.renderSprites=!1,L.ignoreCameraViewport=!1,L.onBeforeBindObservable=new s.c,L.onAfterUnbindObservable=new s.c,L.onBeforeRenderObservable=new s.c,L.onAfterRenderObservable=new s.c,L.onClearObservable=new s.c,L.onResizeObservable=new s.c,L._currentRefreshId=-1,L._refreshRate=1,L._samples=1,L.boundingBoxPosition=v.e.Zero(),d=L.getScene(),!d||(L._coordinatesMode=c.a.PROJECTION_MODE,L.renderList=new Array,L.name=f,L.isRenderTarget=!0,L._initialSizeParameter=p,L._processSizeParameter(p),L._resizeObserver=L.getScene().getEngine().onResizeObservable.add(function(){}),L._generateMipMaps=!!m,L._doNotChangeAspectRatio=P,L._renderingManager=new h.b(d),L._renderingManager._useSceneAutoClearSetup=!0,F)||(L._renderTargetOptions={generateMipMaps:m,type:R,format:(V=L._format)!==null&&V!==void 0?V:void 0,samplingMode:L.samplingMode,generateDepthBuffer:M,generateStencilBuffer:x,samples:G},L.samplingMode===c.a.NEAREST_SAMPLINGMODE&&(L.wrapU=c.a.CLAMP_ADDRESSMODE,L.wrapV=c.a.CLAMP_ADDRESSMODE),N||(A?(L._texture=d.getEngine().createRenderTargetCubeTexture(L.getRenderSize(),L._renderTargetOptions),L.coordinatesMode=c.a.INVCUBIC_MODE,L._textureMatrix=v.a.Identity()):L._texture=d.getEngine().createRenderTargetTexture(L._size,L._renderTargetOptions),G!==void 0&&(L.samples=G))),L}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(f){this._renderList=f,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(f){var p=this,d=f.push;f.push=function(){for(var P=[],R=0;R<arguments.length;R++)P[R]=arguments[R];var A=f.length===0,C=d.apply(f,P);return A&&p.getScene()&&p.getScene().meshes.forEach(function(M){M._markSubMeshesAsLightDirty()}),C};var m=f.splice;f.splice=function(P,R){var A=m.apply(f,[P,R]);return f.length===0&&p.getScene().meshes.forEach(function(C){C._markSubMeshesAsLightDirty()}),A}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(f){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(f){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(f){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(f){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(f){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(f))){this._boundingBoxSize=f;var p=this.getScene();p&&p.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var f;return((f=this.getInternalTexture())===null||f===void 0?void 0:f._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(f,p,d,m){var P;f===void 0&&(f=0),p===void 0&&(p=!0),d===void 0&&(d=!1),m===void 0&&(m=1);var R=this.getInternalTexture();if(!(!this.getScene()||!R)){(P=R._depthStencilTexture)===null||P===void 0||P.dispose();var A=this.getScene().getEngine();R._depthStencilTexture=A.createDepthStencilTexture(this._size,{bilinearFiltering:p,comparisonFunction:f,generateStencil:d,isCube:this.isCube,samples:m})}},a.prototype._processSizeParameter=function(f){if(f.ratio){this._sizeRatio=f.ratio;var p=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(p.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(p.getRenderHeight(),this._sizeRatio)}}else this._size=f},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(f){if(this._samples!==f){var p=this.getScene();!p||(this._samples=p.getEngine().updateRenderTargetTextureSampleCount(this._texture,f))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(f){this._refreshRate=f,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(f){if(!this._postProcessManager){var p=this.getScene();if(!p)return;this._postProcessManager=new _.a(p),this._postProcesses=new Array}this._postProcesses.push(f),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(f){if(f===void 0&&(f=!1),!!this._postProcesses){if(f)for(var p=0,d=this._postProcesses;p<d.length;p++){var m=d[p];m.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(f){if(!!this._postProcesses){var p=this._postProcesses.indexOf(f);p!==-1&&(this._postProcesses.splice(p,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var f=this._size.layers;return f||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(f){var p=Math.max(1,this.getRenderSize()*f);this.resize(p)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:n.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(f){var p=this.isCube;this.releaseInternalTexture();var d=this.getScene();!d||(this._processSizeParameter(f),p?this._texture=d.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=d.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(f,p){f===void 0&&(f=!1),p===void 0&&(p=!1);var d=this.getScene();if(!!d){var m=d.getEngine();if(this.useCameraPostProcesses!==void 0&&(f=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var P=0;P<this._waitingRenderList.length;P++){var R=this._waitingRenderList[P],A=d.getMeshByID(R);A&&this.renderList.push(A)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var d=this.getScene();if(!d)return;for(var C=d.meshes,P=0;P<C.length;P++){var M=C[P];this.renderListPredicate(M)&&this.renderList.push(M)}}this.onBeforeBindObservable.notifyObservers(this);var x;if(this.activeCamera?(x=this.activeCamera,m.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==d.activeCamera&&d.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(x=d.activeCamera,x&&m.setViewport(x.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var F=0;F<this.getRenderLayers();F++)this.renderToTarget(0,f,p,F,x),d.incrementRenderId(),d.resetCachedMaterial();else if(this.isCube)for(var I=0;I<6;I++)this.renderToTarget(I,f,p,void 0,x),d.incrementRenderId(),d.resetCachedMaterial();else this.renderToTarget(0,f,p,void 0,x);this.onAfterUnbindObservable.notifyObservers(this),d.activeCamera&&((d.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==d.activeCamera)&&d.setTransformMatrix(d.activeCamera.getViewMatrix(),d.activeCamera.getProjectionMatrix(!0)),m.setViewport(d.activeCamera.viewport)),d.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(f,p){var d=128,m=f*p,P=t.a.NearestPOT(m+d*d/(d+m));return Math.min(t.a.FloorPOT(f),P)},a.prototype._prepareRenderingManager=function(f,p,d,m){var P=this.getScene();if(!!P){this._renderingManager.reset();for(var R=P.getRenderId(),A=0;A<p;A++){var C=f[A];if(C&&!C.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(C,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!C.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!C._internalAbstractMeshDataInfo._currentLODIsUpToDate&&P.activeCamera&&(C._internalAbstractMeshDataInfo._currentLOD=P.customLODSelector?P.customLODSelector(C,P.activeCamera):C.getLOD(P.activeCamera),C._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!C._internalAbstractMeshDataInfo._currentLOD)continue;var M=C._internalAbstractMeshDataInfo._currentLOD;M._preActivateForIntermediateRendering(R);var x=void 0;if(m&&d?x=(C.layerMask&d.layerMask)==0:x=!1,C.isEnabled()&&C.isVisible&&C.subMeshes&&!x&&(M!==C&&M._activate(R,!0),C._activate(R,!0)&&C.subMeshes.length)){C.isAnInstance?C._internalAbstractMeshDataInfo._actAsRegularMesh&&(M=C):M._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,M._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var F=0;F<M.subMeshes.length;F++){var I=M.subMeshes[F];this._renderingManager.dispatch(I,M)}}}}for(var N=0;N<P.particleSystems.length;N++){var G=P.particleSystems[N],V=G.emitter;!G.isStarted()||!V||!V.position||!V.isEnabled()||f.indexOf(V)>=0&&this._renderingManager.dispatchParticles(G)}}},a.prototype._bindFrameBuffer=function(f,p){f===void 0&&(f=0),p===void 0&&(p=0);var d=this.getScene();if(!!d){var m=d.getEngine();this._texture&&m.bindFramebuffer(this._texture,this.isCube?f:void 0,void 0,void 0,this.ignoreCameraViewport,0,p)}},a.prototype.unbindFrameBuffer=function(f,p){var d=this;!this._texture||f.unBindFramebuffer(this._texture,this.isCube,function(){d.onAfterRenderObservable.notifyObservers(p)})},a.prototype._prepareFrame=function(f,p,d,m){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!m||!f.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(p,d)},a.prototype.renderToTarget=function(f,p,d,m,P){m===void 0&&(m=0),P===void 0&&(P=null);var R=this.getScene();if(!!R){var A=R.getEngine();if(!!this._texture){A._debugPushGroup("render to face #"+f+" layer #"+m,1),this._prepareFrame(R,f,m,p),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(m):this.onBeforeRenderObservable.notifyObservers(f);var C=null,M=this.renderList?this.renderList:R.getActiveMeshes().data,x=this.renderList?this.renderList.length:R.getActiveMeshes().length;this.getCustomRenderList&&(C=this.getCustomRenderList(this.is2DArray?m:f,M,x)),C?this._prepareRenderingManager(C,C.length,P,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(M,x,P,!this.renderList),this._defaultRenderListPrepared=!0),C=M);for(var F=0,I=R._beforeRenderTargetClearStage;F<I.length;F++){var N=I[F];N.action(this,f,m)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(A):A.clear(this.clearColor||R.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||R.updateTransformMatrix(!0);for(var G=0,V=R._beforeRenderTargetDrawStage;G<V.length;G++){var N=V[G];N.action(this,f,m)}this._renderingManager.render(this.customRenderFunction,C,this.renderParticles,this.renderSprites);for(var L=0,ee=R._afterRenderTargetDrawStage;L<ee.length;L++){var N=ee[L];N.action(this,f,m)}var K=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,f,this._postProcesses,this.ignoreCameraViewport):p&&R.postProcessManager._finalizeFrame(!1,this._texture,f),this._texture.generateMipMaps=K,this._doNotChangeAspectRatio||R.updateTransformMatrix(!0),d&&O.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),A),this.unbindFrameBuffer(A,f),this.isCube&&f===5&&A.generateMipMapsForCubemap(this._texture),A._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(f,p,d,m){p===void 0&&(p=null),d===void 0&&(d=null),m===void 0&&(m=null),this._renderingManager.setRenderingOrder(f,p,d,m)},a.prototype.setRenderingAutoClearDepthStencil=function(f,p){this._renderingManager.setRenderingAutoClearDepthStencil(f,p),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var f=this.getSize(),p=new a(this.name,f,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return p.hasAlpha=this.hasAlpha,p.level=this.level,p.coordinatesMode=this.coordinatesMode,this.renderList&&(p.renderList=this.renderList.slice(0)),p},a.prototype.serialize=function(){if(!this.name)return null;var f=n.prototype.serialize.call(this);if(f.renderTargetSize=this.getRenderSize(),f.renderList=[],this.renderList)for(var p=0;p<this.renderList.length;p++)f.renderList.push(this.renderList[p].id);return f},a.prototype.disposeFramebufferObjects=function(){var f=this.getInternalTexture(),p=this.getScene();f&&p&&p.getEngine()._releaseFramebufferObjects(f)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var f=this.getScene();if(!!f){var p=f.customRenderTargets.indexOf(this);p>=0&&f.customRenderTargets.splice(p,1);for(var d=0,m=f.cameras;d<m.length;d++){var P=m[d];p=P.customRenderTargets.indexOf(this),p>=0&&P.customRenderTargets.splice(p,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),n.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(c.a);c.a._CreateRenderTargetTexture=function(n,a,f,p){return new r(n,a,f,p)}},466:function(q,H,o){"use strict";o.d(H,"a",function(){return s});var l=o(443),s=function(){function O(v,c,_,h){this._name=c,this._singleInstance=h||!0,this._getPostProcesses=_,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(O.prototype,"isSupported",{get:function(){for(var v in this._postProcesses)if(this._postProcesses.hasOwnProperty(v)){for(var c=this._postProcesses[v],_=0;_<c.length;_++)if(!c[_].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),O.prototype._update=function(){},O.prototype._attachCameras=function(v){var c=this,_,h=l.b.MakeArray(v||this._cameras);if(!!h)for(var i=0;i<h.length;i++){var e=h[i];if(!!e){var t=e.name;if(this._singleInstance?_=0:_=t,!this._postProcesses[_]){var r=this._getPostProcesses();r&&(this._postProcesses[_]=Array.isArray(r)?r:[r])}this._indicesForCamera[t]||(this._indicesForCamera[t]=[]),this._postProcesses[_].forEach(function(n){var a=e.attachPostProcess(n);c._indicesForCamera[t].push(a)}),this._cameras[t]||(this._cameras[t]=e)}}},O.prototype._detachCameras=function(v){var c=l.b.MakeArray(v||this._cameras);if(!!c)for(var _=0;_<c.length;_++){var h=c[_],i=h.name,e=this._postProcesses[this._singleInstance?0:i];e&&e.forEach(function(t){h.detachPostProcess(t)}),this._cameras[i]&&(this._cameras[i]=null)}},O.prototype._enable=function(v){var c=this,_=l.b.MakeArray(v||this._cameras);if(!!_)for(var h=0;h<_.length;h++)for(var i=_[h],e=i.name,t=0;t<this._indicesForCamera[e].length;t++)(i._postProcesses[this._indicesForCamera[e][t]]===void 0||i._postProcesses[this._indicesForCamera[e][t]]===null)&&this._postProcesses[this._singleInstance?0:e].forEach(function(r){_[h].attachPostProcess(r,c._indicesForCamera[e][t])})},O.prototype._disable=function(v){var c=l.b.MakeArray(v||this._cameras);if(!!c)for(var _=0;_<c.length;_++){var h=c[_],i=h.name;this._postProcesses[this._singleInstance?0:i].forEach(function(e){h.detachPostProcess(e)})}},O.prototype.getPostProcesses=function(v){return this._singleInstance?this._postProcesses[0]:v?this._postProcesses[v.name]:null},O}()},472:function(q,H,o){"use strict";o.d(H,"a",function(){return N});var l=o(434),s=o(444),O=o(442),v=o(435),c="kernelBlurVaryingDeclaration",_="varying vec2 sampleCoord{X};";v.a.IncludesShadersStore[c]=_;var h={name:c,shader:_},i=o(535),e="kernelBlurFragment",t=`#ifdef DOF
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
#endif`;v.a.IncludesShadersStore[e]=t;var r={name:e,shader:t},n="kernelBlurFragment2",a=`#ifdef DOF
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
#endif`;v.a.IncludesShadersStore[n]=a;var f={name:n,shader:a},p="kernelBlurPixelShader",d=`
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
}`;v.a.ShadersStore[p]=d;var m={name:p,shader:d},P="kernelBlurVertex",R="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";v.a.IncludesShadersStore[P]=R;var A={name:P,shader:R},C="kernelBlurVertexShader",M=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;v.a.ShadersStore[C]=M;var x={name:C,shader:M},F=o(437),I=o(439),N=function(G){Object(l.d)(V,G);function V(L,ee,K,B,Q,Z,ue,W,ge,te,se){Z===void 0&&(Z=O.a.BILINEAR_SAMPLINGMODE),ge===void 0&&(ge=0),te===void 0&&(te=""),se===void 0&&(se=!1);var de=G.call(this,L,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],B,Q,Z,ue,W,null,ge,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return de.blockCompilation=se,de._packedFloat=!1,de._staticDefines="",de._staticDefines=te,de.direction=ee,de.onApplyObservable.add(function(J){de._outputTexture?J.setFloat2("delta",1/de._outputTexture.width*de.direction.x,1/de._outputTexture.height*de.direction.y):J.setFloat2("delta",1/de.width*de.direction.x,1/de.height*de.direction.y)}),de.kernel=K,de}return Object.defineProperty(V.prototype,"kernel",{get:function(){return this._idealKernel},set:function(L){this._idealKernel!==L&&(L=Math.max(L,1),this._idealKernel=L,this._kernel=this._nearestBestKernel(L),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(L){this._packedFloat!==L&&(this._packedFloat=L,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),V.prototype.getClassName=function(){return"BlurPostProcess"},V.prototype.updateEffect=function(L,ee,K,B,Q,Z){L===void 0&&(L=null),ee===void 0&&(ee=null),K===void 0&&(K=null),this._updateParameters(Q,Z)},V.prototype._updateParameters=function(L,ee){for(var K=this._kernel,B=(K-1)/2,Q=[],Z=[],ue=0,W=0;W<K;W++){var ge=W/(K-1),te=this._gaussianWeight(ge*2-1);Q[W]=W-B,Z[W]=te,ue+=te}for(var W=0;W<Z.length;W++)Z[W]/=ue;for(var se=[],de=[],J=[],W=0;W<=B;W+=2){var j=Math.min(W+1,Math.floor(B)),me=W===j;if(me)J.push({o:Q[W],w:Z[W]});else{var Te=j===B,ae=Z[W]+Z[j]*(Te?.5:1),ve=Q[W]+1/(1+Z[W]/Z[j]);ve===0?(J.push({o:Q[W],w:Z[W]}),J.push({o:Q[W+1],w:Z[W+1]})):(J.push({o:ve,w:ae}),J.push({o:-ve,w:ae}))}}for(var W=0;W<J.length;W++)de[W]=J[W].o,se[W]=J[W].w;Q=de,Z=se;var ie=this.getEngine().getCaps().maxVaryingVectors,Ee=Math.max(ie,0)-1,le=Math.min(Q.length,Ee),y="";y+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(y+="#define CENTER_WEIGHT "+this._glslFloat(Z[le-1])+`\r
`,le--);for(var W=0;W<le;W++)y+="#define KERNEL_OFFSET"+W+" "+this._glslFloat(Q[W])+`\r
`,y+="#define KERNEL_WEIGHT"+W+" "+this._glslFloat(Z[W])+`\r
`;for(var g=0,W=Ee;W<Q.length;W++)y+="#define KERNEL_DEP_OFFSET"+g+" "+this._glslFloat(Q[W])+`\r
`,y+="#define KERNEL_DEP_WEIGHT"+g+" "+this._glslFloat(Z[W])+`\r
`,g++;this.packedFloat&&(y+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,G.prototype.updateEffect.call(this,y,null,null,{varyingCount:le,depCount:g},L,ee)},V.prototype._nearestBestKernel=function(L){for(var ee=Math.round(L),K=0,B=[ee,ee-1,ee+1,ee-2,ee+2];K<B.length;K++){var Q=B[K];if(Q%2!=0&&Math.floor(Q/2)%2==0&&Q>0)return Math.max(Q,3)}return Math.max(ee,3)},V.prototype._gaussianWeight=function(L){var ee=1/3,K=Math.sqrt(2*Math.PI)*ee,B=-(L*L/(2*ee*ee)),Q=1/K*Math.exp(B);return Q},V.prototype._glslFloat=function(L,ee){return ee===void 0&&(ee=8),L.toFixed(ee).replace(/0+$/,"")},V._Parse=function(L,ee,K,B){return I.a.Parse(function(){return new V(L.name,L.direction,L.kernel,L.options,ee,L.renderTargetSamplingMode,K.getEngine(),L.reusable,L.textureType,void 0,!1)},L,K,B)},Object(l.c)([Object(I.c)("kernel")],V.prototype,"_kernel",void 0),Object(l.c)([Object(I.c)("packedFloat")],V.prototype,"_packedFloat",void 0),Object(l.c)([Object(I.n)()],V.prototype,"direction",void 0),V}(s.a);F.a.RegisteredTypes["BABYLON.BlurPostProcess"]=N},479:function(q,H,o){"use strict";o.d(H,"a",function(){return _});var l=o(434),s=o(440),O=o(442),v=o(532),c=o(596),_=function(h){Object(l.d)(i,h);function i(e,t,r,n,a,f,p){r===void 0&&(r=null),n===void 0&&(n=!1),a===void 0&&(a=3),f===void 0&&(f=5);var d=h.call(this,null,r,!n,p,a,void 0,void 0,void 0,void 0,f)||this;d.name=e,d.wrapU=O.a.CLAMP_ADDRESSMODE,d.wrapV=O.a.CLAMP_ADDRESSMODE,d._generateMipMaps=n;var m=d._getEngine();if(!m)return d;t.getContext?(d._canvas=t,d._texture=m.createDynamicTexture(t.width,t.height,n,a)):(d._canvas=c.a.CreateCanvas(1,1),t.width||t.width===0?d._texture=m.createDynamicTexture(t.width,t.height,n,a):d._texture=m.createDynamicTexture(t,t,n,a));var P=d.getSize();return d._canvas.width=P.width,d._canvas.height=P.height,d._context=d._canvas.getContext("2d"),d}return i.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(i.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),i.prototype._recreate=function(e){this._canvas.width=e.width,this._canvas.height=e.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(e.width,e.height,this._generateMipMaps,this.samplingMode)},i.prototype.scale=function(e){var t=this.getSize();t.width*=e,t.height*=e,this._recreate(t)},i.prototype.scaleTo=function(e,t){var r=this.getSize();r.width=e,r.height=t,this._recreate(r)},i.prototype.getContext=function(){return this._context},i.prototype.clear=function(){var e=this.getSize();this._context.fillRect(0,0,e.width,e.height)},i.prototype.update=function(e,t){t===void 0&&(t=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,e===void 0?!0:e,t,this._format||void 0)},i.prototype.drawText=function(e,t,r,n,a,f,p,d){d===void 0&&(d=!0);var m=this.getSize();if(f&&(this._context.fillStyle=f,this._context.fillRect(0,0,m.width,m.height)),this._context.font=n,t==null){var P=this._context.measureText(e);t=(m.width-P.width)/2}if(r==null){var R=parseInt(n.replace(/\D/g,""));r=m.height/2+R/3.65}this._context.fillStyle=a||"",this._context.fillText(e,t,r),d&&this.update(p)},i.prototype.clone=function(){var e=this.getScene();if(!e)return this;var t=this.getSize(),r=new i(this.name,t,e,this._generateMipMaps);return r.hasAlpha=this.hasAlpha,r.level=this.level,r.wrapU=this.wrapU,r.wrapV=this.wrapV,r},i.prototype.serialize=function(){var e=this.getScene();e&&!e.isReady()&&s.a.Warn("The scene must be ready before serializing the dynamic texture");var t=h.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(t.base64String=this._canvas.toDataURL()),t.invertY=this._invertY,t.samplingMode=this.samplingMode,t},i.prototype._IsCanvasElement=function(e){return e.toDataURL!==void 0},i.prototype._rebuild=function(){this.update()},i}(O.a)},481:function(q,H,o){"use strict";o.d(H,"a",function(){return v});var l=o(434),s=o(443),O=o(439),v=function(){function c(_,h){this.engine=_,this._name=h,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(c.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(c.prototype,"isSupported",{get:function(){for(var _ in this._renderEffects)if(this._renderEffects.hasOwnProperty(_)&&!this._renderEffects[_].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),c.prototype.addEffect=function(_){this._renderEffects[_._name]=_},c.prototype._rebuild=function(){},c.prototype._enableEffect=function(_,h){var i=this._renderEffects[_];!i||i._enable(s.b.MakeArray(h||this._cameras))},c.prototype._disableEffect=function(_,h){var i=this._renderEffects[_];!i||i._disable(s.b.MakeArray(h||this._cameras))},c.prototype._attachCameras=function(_,h){var i=s.b.MakeArray(_||this._cameras);if(!!i){var e=[],t;for(t=0;t<i.length;t++){var r=i[t];if(!!r){var n=r.name;this._cameras.indexOf(r)===-1?this._cameras[n]=r:h&&e.push(t)}}for(t=0;t<e.length;t++)i.splice(e[t],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(i)}},c.prototype._detachCameras=function(_){var h=s.b.MakeArray(_||this._cameras);if(!!h){for(var i in this._renderEffects)this._renderEffects.hasOwnProperty(i)&&this._renderEffects[i]._detachCameras(h);for(var e=0;e<h.length;e++)this._cameras.splice(this._cameras.indexOf(h[e]),1)}},c.prototype._update=function(){for(var _ in this._renderEffects)this._renderEffects.hasOwnProperty(_)&&this._renderEffects[_]._update();for(var h=0;h<this._cameras.length;h++)if(!!this._cameras[h]){var i=this._cameras[h].name;this._renderEffectsForIsolatedPass[i]&&this._renderEffectsForIsolatedPass[i]._update()}},c.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},c.prototype._enableMSAAOnFirstPostProcess=function(_){if(!this.engine._features.supportMSAA)return!1;var h=Object.keys(this._renderEffects);if(h.length>0){var i=this._renderEffects[h[0]].getPostProcesses();i&&(i[0].samples=_)}return!0},c.prototype.setPrePassRenderer=function(_){return!1},c.prototype.dispose=function(){},Object(l.c)([Object(O.c)()],c.prototype,"_name",void 0),c}()},482:function(q,H,o){"use strict";o.d(H,"a",function(){return v});var l=o(452),s=o(548),O=o(449);Object.defineProperty(O.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var c=this._getComponent(l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);c||(c=new v(this),this._addComponent(c)),this._postProcessRenderPipelineManager=new s.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var v=function(){function c(_){this.name=l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=_}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(l.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},c.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},c.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},c}()},486:function(q,H,o){"use strict";o.d(H,"b",function(){return a}),o.d(H,"a",function(){return f});var l=o(434),s=o(444),O=o(445),v=o(435),c="passPixelShader",_=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;v.a.ShadersStore[c]=_;var h={name:c,shader:_},i="passCubePixelShader",e=`
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
}`;v.a.ShadersStore[i]=e;var t={name:i,shader:e},r=o(437),n=o(439),a=function(p){Object(l.d)(d,p);function d(m,P,R,A,C,M,x,F){return R===void 0&&(R=null),x===void 0&&(x=0),F===void 0&&(F=!1),p.call(this,m,"pass",null,null,P,R,A,C,M,void 0,x,void 0,null,F)||this}return d.prototype.getClassName=function(){return"PassPostProcess"},d._Parse=function(m,P,R,A){return n.a.Parse(function(){return new d(m.name,m.options,P,m.renderTargetSamplingMode,m._engine,m.reusable)},m,R,A)},d}(s.a);r.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var f=function(p){Object(l.d)(d,p);function d(m,P,R,A,C,M,x,F){R===void 0&&(R=null),x===void 0&&(x=0),F===void 0&&(F=!1);var I=p.call(this,m,"passCube",null,null,P,R,A,C,M,"#define POSITIVEX",x,void 0,null,F)||this;return I._face=0,I}return Object.defineProperty(d.prototype,"face",{get:function(){return this._face},set:function(m){if(!(m<0||m>5))switch(this._face=m,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),d.prototype.getClassName=function(){return"PassCubePostProcess"},d._Parse=function(m,P,R,A){return n.a.Parse(function(){return new d(m.name,m.options,P,m.renderTargetSamplingMode,m._engine,m.reusable)},m,R,A)},d}(s.a);O.a._RescalePostProcessFactory=function(p){return new a("rescale",1,null,2,p,!1,0)}},498:function(q,H,o){"use strict";o.d(H,"a",function(){return h});var l=o(434),s=o(439),O=o(436),v=o(441),c=o(453),_=o(484);c.a.AddNodeConstructor("Light_Type_3",function(i,e){return function(){return new h(i,O.e.Zero(),e)}});var h=function(i){Object(l.d)(e,i);function e(t,r,n){var a=i.call(this,t,n)||this;return a.groundColor=new v.a(0,0,0),a.direction=r||O.e.Up(),a}return e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.getClassName=function(){return"HemisphericLight"},e.prototype.setDirectionToTarget=function(t){return this.direction=O.e.Normalize(t.subtract(O.e.Zero())),this.direction},e.prototype.getShadowGenerator=function(){return null},e.prototype.transferToEffect=function(t,r){var n=O.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",n.x,n.y,n.z,0,r),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),r),this},e.prototype.transferToNodeMaterialEffect=function(t,r){var n=O.e.Normalize(this.direction);return t.setFloat3(r,n.x,n.y,n.z),this},e.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=O.a.Identity()),this._worldMatrix},e.prototype.getTypeID=function(){return _.a.LIGHTTYPEID_HEMISPHERICLIGHT},e.prototype.prepareLightSpecificDefines=function(t,r){t["HEMILIGHT"+r]=!0},Object(l.c)([Object(s.e)()],e.prototype,"groundColor",void 0),Object(l.c)([Object(s.o)()],e.prototype,"direction",void 0),e}(_.a)},500:function(q,H,o){"use strict";var l=o(434),s=o(456),O=o(440),v=o(595),c=o(467);c.a.prototype.createRenderTargetTexture=function(_,h){var i=new v.a;h!==void 0&&typeof h=="object"?(i.generateMipMaps=h.generateMipMaps,i.generateDepthBuffer=!!h.generateDepthBuffer,i.generateStencilBuffer=!!h.generateStencilBuffer,i.type=h.type===void 0?0:h.type,i.samplingMode=h.samplingMode===void 0?3:h.samplingMode,i.format=h.format===void 0?5:h.format):(i.generateMipMaps=h,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,O.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var e=this._gl,t=new s.a(this,s.b.RenderTarget),r=_.width||_,n=_.height||_,a=_.layers||0,f=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),p=a!==0?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,d=this._getRGBABufferInternalSizedFormat(i.type,i.format),m=this._getInternalFormat(i.format),P=this._getWebGLTextureType(i.type);this._bindTextureDirectly(p,t),a!==0?(t.is2DArray=!0,e.texImage3D(p,0,d,r,n,a,0,m,P,null)):e.texImage2D(p,0,d,r,n,0,m,P,null),e.texParameteri(p,e.TEXTURE_MAG_FILTER,f.mag),e.texParameteri(p,e.TEXTURE_MIN_FILTER,f.min),e.texParameteri(p,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(p,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(p),this._bindTextureDirectly(p,null);var R=this._currentFramebuffer,A=e.createFramebuffer();return this._bindUnboundFramebuffer(A),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,r,n),t.is2DArray||e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(R),t._framebuffer=A,t.baseWidth=r,t.baseHeight=n,t.width=r,t.height=n,t.depth=a,t.isReady=!0,t.samples=1,t.generateMipMaps=!!i.generateMipMaps,t.samplingMode=i.samplingMode,t.type=i.type,t.format=i.format,t._generateDepthBuffer=i.generateDepthBuffer,t._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(t),t},c.a.prototype.createDepthStencilTexture=function(_,h){if(h.isCube){var i=_.width||_;return this._createDepthStencilCubeTexture(i,h)}else return this._createDepthStencilTexture(_,h)},c.a.prototype._createDepthStencilTexture=function(_,h){var i=this._gl,e=_.layers||0,t=e!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,r=new s.a(this,s.b.Depth);if(!this._caps.depthTextureExtension)return O.a.Error("Depth texture is not supported by your browser or hardware."),r;var n=Object(l.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},h);this._bindTextureDirectly(t,r,!0),this._setupDepthStencilTexture(r,_,n.generateStencil,n.bilinearFiltering,n.comparisonFunction);var a=n.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,f=n.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,p=f;return this.webGLVersion>1&&(p=n.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),r.is2DArray?i.texImage3D(t,0,p,r.width,r.height,e,0,f,a,null):i.texImage2D(t,0,p,r.width,r.height,0,f,a,null),this._bindTextureDirectly(t,null),r}},502:function(q,H,o){"use strict";o.d(H,"a",function(){return de});var l=o(436),s=o(447),O=o(442),v=o(538),c=o(454),_=o(441),h=o(455),i=o(533),e=o(476),t=o(459),r=o(435),n="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;r.a.IncludesShadersStore[n]=a;var f={name:n,shader:a},p=o(614),d=o(615),m=o(616),P="geometryPixelShader",R=`#extension GL_EXT_draw_buffers : require
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
`;r.a.ShadersStore[P]=R;var A={name:P,shader:R},C=o(487),M=o(496),x=o(497),F=o(501),I="geometryVertexDeclaration",N=`
uniform mat4 viewProjection;
uniform mat4 view;`;r.a.IncludesShadersStore[I]=N;var G={name:I,shader:N},V=o(674),L="geometryUboDeclaration",ee="#include<sceneUboDeclaration>";r.a.IncludesShadersStore[L]=ee;var K={name:L,shader:ee},B=o(507),Q=o(508),Z=o(488),ue=o(489),W=o(675),ge="geometryVertexShader",te=`precision highp float;
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
`;r.a.ShadersStore[ge]=te;var se={name:ge,shader:te},de=function(){function J(j,me){me===void 0&&(me=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=j,this._ratio=me,this._useUbo=j.getEngine().supportsUniformBuffers,J._SceneComponentInitialization(this._scene),this._createRenderTargets()}return J.prototype._linkPrePassRenderer=function(j){this._linkedWithPrePass=!0,this._prePassRenderer=j,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(me){}))},J.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},J.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},J.prototype._forceTextureType=function(j,me){j===J.POSITION_TEXTURE_TYPE?(this._positionIndex=me,this._enablePosition=!0):j===J.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=me,this._enableVelocity=!0):j===J.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=me,this._enableReflectivity=!0):j===J.DEPTH_TEXTURE_TYPE?this._depthIndex=me:j===J.NORMAL_TEXTURE_TYPE&&(this._normalIndex=me)},J.prototype._setAttachments=function(j){this._attachments=j},J.prototype._linkInternalTexture=function(j){this._multiRenderTarget._texture=j},Object.defineProperty(J.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(j){this._multiRenderTarget.renderList=j},enumerable:!1,configurable:!0}),Object.defineProperty(J.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),J.prototype.getTextureIndex=function(j){switch(j){case J.POSITION_TEXTURE_TYPE:return this._positionIndex;case J.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case J.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(J.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(j){this._enablePosition=j,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(J.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(j){this._enableVelocity=j,j||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(J.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(j){this._enableReflectivity=j,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(J.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(J.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),J.prototype.isReady=function(j,me){var Te=j.getMaterial();if(Te&&Te.disableDepthWrite)return!1;var ae=[],ve=[s.b.PositionKind,s.b.NormalKind],ie=j.getMesh();if(Te){var Ee=!1;Te.needAlphaTesting()&&Te.getAlphaTestTexture()&&(ae.push("#define ALPHATEST"),ae.push("#define ALPHATEST_UV"+(Te.getAlphaTestTexture().coordinatesIndex+1)),Ee=!0),Te.bumpTexture&&h.a.BumpTextureEnabled&&(ae.push("#define BUMP"),ae.push("#define BUMP_UV"+(Te.bumpTexture.coordinatesIndex+1)),Ee=!0),this._enableReflectivity&&(Te instanceof h.a&&Te.specularTexture?(ae.push("#define HAS_SPECULAR"),ae.push("#define REFLECTIVITY_UV"+(Te.specularTexture.coordinatesIndex+1)),Ee=!0):Te instanceof i.a&&Te.reflectivityTexture&&(ae.push("#define HAS_REFLECTIVITY"),ae.push("#define REFLECTIVITY_UV"+(Te.reflectivityTexture.coordinatesIndex+1)),Ee=!0)),Ee&&(ae.push("#define NEED_UV"),ie.isVerticesDataPresent(s.b.UVKind)&&(ve.push(s.b.UVKind),ae.push("#define UV1")),ie.isVerticesDataPresent(s.b.UV2Kind)&&(ve.push(s.b.UV2Kind),ae.push("#define UV2")))}this._linkedWithPrePass&&(ae.push("#define PREPASS"),this._depthIndex!==-1&&(ae.push("#define DEPTH_INDEX "+this._depthIndex),ae.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(ae.push("#define NORMAL_INDEX "+this._normalIndex),ae.push("#define PREPASS_NORMAL"))),this._enablePosition&&(ae.push("#define POSITION"),ae.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(ae.push("#define VELOCITY"),ae.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(ie)===-1&&ae.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(ae.push("#define REFLECTIVITY"),ae.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),ie.useBones&&ie.computeBonesUsingShaders?(ve.push(s.b.MatricesIndicesKind),ve.push(s.b.MatricesWeightsKind),ie.numBoneInfluencers>4&&(ve.push(s.b.MatricesIndicesExtraKind),ve.push(s.b.MatricesWeightsExtraKind)),ae.push("#define NUM_BONE_INFLUENCERS "+ie.numBoneInfluencers),ae.push("#define BonesPerMesh "+(ie.skeleton?ie.skeleton.bones.length+1:0))):ae.push("#define NUM_BONE_INFLUENCERS 0");var le=ie.morphTargetManager,y=0;le&&le.numInfluencers>0&&(y=le.numInfluencers,ae.push("#define MORPHTARGETS"),ae.push("#define NUM_MORPH_INFLUENCERS "+y),le.isUsingTextureForTargets&&ae.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(ve,ie,y)),me&&(ae.push("#define INSTANCES"),c.a.PushAttributesForInstances(ve),j.getRenderingMesh().hasThinInstances&&ae.push("#define THIN_INSTANCES")),this._linkedWithPrePass?ae.push("#define RENDER_TARGET_COUNT "+this._attachments.length):ae.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var g=ae.join(`
`);return this._cachedDefines!==g&&(this._cachedDefines=g,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:ve,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:g,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:y}},this._scene.getEngine())),this._effect.isReady()},J.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(J.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(j){this._multiRenderTarget.samples=j},enumerable:!1,configurable:!0}),J.prototype.dispose=function(){if(this._resizeObserver){var j=this._scene.getEngine();j.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},J.prototype._assignRenderTargetIndices=function(){var j=2;return this._enablePosition&&(this._positionIndex=j,j++),this._enableVelocity&&(this._velocityIndex=j,j++),this._enableReflectivity&&(this._reflectivityIndex=j,j++),j},J.prototype._createRenderTargets=function(){var j=this,me=this._scene.getEngine(),Te=this._assignRenderTargetIndices();if(this._multiRenderTarget=new v.a("gBuffer",{width:me.getRenderWidth()*this._ratio,height:me.getRenderHeight()*this._ratio},Te,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=O.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=O.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(ve){ve.clear(new _.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=me.onResizeObservable.add(function(){j._multiRenderTarget&&j._multiRenderTarget.resize({width:me.getRenderWidth()*j._ratio,height:me.getRenderHeight()*j._ratio})});var ae=function(ve){var ie=ve.getRenderingMesh(),Ee=ve.getEffectiveMesh(),le=j._scene,y=le.getEngine(),g=ve.getMaterial();if(!!g){if(Ee._internalAbstractMeshDataInfo._isActiveIntermediate=!1,j._enableVelocity&&!j._previousTransformationMatrices[Ee.uniqueId]&&(j._previousTransformationMatrices[Ee.uniqueId]={world:l.a.Identity(),viewProjection:le.getTransformMatrix()},ie.skeleton)){var D=ie.skeleton.getTransformMatrices(ie);j._previousBonesTransformationMatrices[ie.uniqueId]=j._copyBonesTransformationMatrices(D,new Float32Array(D.length))}var b=ie._getInstancesRenderList(ve._id,!!ve.getReplacementMesh());if(!b.mustReturn){var Y=y.getCaps().instancedArrays&&(b.visibleInstances[ve._id]!==null||ie.hasThinInstances),z=Ee.getWorldMatrix();if(j.isReady(ve,Y)){if(y.enableEffect(j._effect),ie._bind(ve,j._effect,g.fillMode),j._useUbo?(c.a.FinalizeSceneUbo(j._scene),c.a.BindSceneUniformBuffer(j._effect,j._scene.getSceneUniformBuffer())):(j._effect.setMatrix("viewProjection",le.getTransformMatrix()),j._effect.setMatrix("view",le.getViewMatrix())),g){var S,k=ie._instanceDataStorage;if(!k.isFrozen&&(g.backFaceCulling||g.overrideMaterialSideOrientation!==null)){var he=Ee._getWorldMatrixDeterminant();S=g.overrideMaterialSideOrientation,S==null&&(S=g.sideOrientation),he<0&&(S=S===t.a.ClockWiseSideOrientation?t.a.CounterClockWiseSideOrientation:t.a.ClockWiseSideOrientation)}else S=k.sideOrientation;if(g._preBind(j._effect,S),g.needAlphaTesting()){var _e=g.getAlphaTestTexture();_e&&(j._effect.setTexture("diffuseSampler",_e),j._effect.setMatrix("diffuseMatrix",_e.getTextureMatrix()))}g.bumpTexture&&le.getEngine().getCaps().standardDerivatives&&h.a.BumpTextureEnabled&&(j._effect.setFloat3("vBumpInfos",g.bumpTexture.coordinatesIndex,1/g.bumpTexture.level,g.parallaxScaleBias),j._effect.setMatrix("bumpMatrix",g.bumpTexture.getTextureMatrix()),j._effect.setTexture("bumpSampler",g.bumpTexture),j._effect.setFloat2("vTangentSpaceParams",g.invertNormalMapX?-1:1,g.invertNormalMapY?-1:1)),j._enableReflectivity&&(g instanceof h.a&&g.specularTexture?(j._effect.setMatrix("reflectivityMatrix",g.specularTexture.getTextureMatrix()),j._effect.setTexture("reflectivitySampler",g.specularTexture)):g instanceof i.a&&g.reflectivityTexture&&(j._effect.setMatrix("reflectivityMatrix",g.reflectivityTexture.getTextureMatrix()),j._effect.setTexture("reflectivitySampler",g.reflectivityTexture)))}ie.useBones&&ie.computeBonesUsingShaders&&ie.skeleton&&(j._effect.setMatrices("mBones",ie.skeleton.getTransformMatrices(ie)),j._enableVelocity&&j._effect.setMatrices("mPreviousBones",j._previousBonesTransformationMatrices[ie.uniqueId])),c.a.BindMorphTargetParameters(ie,j._effect),ie.morphTargetManager&&ie.morphTargetManager.isUsingTextureForTargets&&ie.morphTargetManager._bind(j._effect),j._enableVelocity&&(j._effect.setMatrix("previousWorld",j._previousTransformationMatrices[Ee.uniqueId].world),j._effect.setMatrix("previousViewProjection",j._previousTransformationMatrices[Ee.uniqueId].viewProjection)),ie._processRendering(Ee,ve,j._effect,g.fillMode,b,Y,function(Ae,Ce){return j._effect.setMatrix("world",Ce)})}j._enableVelocity&&(j._previousTransformationMatrices[Ee.uniqueId].world=z.clone(),j._previousTransformationMatrices[Ee.uniqueId].viewProjection=j._scene.getTransformMatrix().clone(),ie.skeleton&&j._copyBonesTransformationMatrices(ie.skeleton.getTransformMatrices(ie),j._previousBonesTransformationMatrices[Ee.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(ve,ie,Ee,le){var y;if(j._linkedWithPrePass){if(!j._prePassRenderer.enabled)return;j._scene.getEngine().bindAttachments(j._attachments)}if(le.length){for(me.setColorWrite(!1),y=0;y<le.length;y++)ae(le.data[y]);me.setColorWrite(!0)}for(y=0;y<ve.length;y++)ae(ve.data[y]);for(me.setDepthWrite(!1),y=0;y<ie.length;y++)ae(ie.data[y]);if(j.renderTransparentMeshes)for(y=0;y<Ee.length;y++)ae(Ee.data[y]);me.setDepthWrite(!0)}}},J.prototype._copyBonesTransformationMatrices=function(j,me){for(var Te=0;Te<j.length;Te++)me[Te]=j[Te];return me},J.DEPTH_TEXTURE_TYPE=0,J.NORMAL_TEXTURE_TYPE=1,J.POSITION_TEXTURE_TYPE=2,J.VELOCITY_TEXTURE_TYPE=3,J.REFLECTIVITY_TEXTURE_TYPE=4,J._SceneComponentInitialization=function(j){throw e.a.WarnImport("GeometryBufferRendererSceneComponent")},J}()},513:function(q,H,o){"use strict";o.d(H,"a",function(){return _}),o.d(H,"b",function(){return h});var l=o(436),s=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],O=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],v=function(i,e){return s[i]*O[i](e)},c=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],_=function(){function i(){this.preScaled=!1,this.l00=l.e.Zero(),this.l1_1=l.e.Zero(),this.l10=l.e.Zero(),this.l11=l.e.Zero(),this.l2_2=l.e.Zero(),this.l2_1=l.e.Zero(),this.l20=l.e.Zero(),this.l21=l.e.Zero(),this.l22=l.e.Zero()}return i.prototype.addLight=function(e,t,r){var n=new l.e(t.r,t.g,t.b),a=n.scale(r);this.l00=this.l00.add(a.scale(v(0,e))),this.l1_1=this.l1_1.add(a.scale(v(1,e))),this.l10=this.l10.add(a.scale(v(2,e))),this.l11=this.l11.add(a.scale(v(3,e))),this.l2_2=this.l2_2.add(a.scale(v(4,e))),this.l2_1=this.l2_1.add(a.scale(v(5,e))),this.l20=this.l20.add(a.scale(v(6,e))),this.l21=this.l21.add(a.scale(v(7,e))),this.l22=this.l22.add(a.scale(v(8,e)))},i.prototype.scaleInPlace=function(e){this.l00.scaleInPlace(e),this.l1_1.scaleInPlace(e),this.l10.scaleInPlace(e),this.l11.scaleInPlace(e),this.l2_2.scaleInPlace(e),this.l2_1.scaleInPlace(e),this.l20.scaleInPlace(e),this.l21.scaleInPlace(e),this.l22.scaleInPlace(e)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(c[0]),this.l1_1.scaleInPlace(c[1]),this.l10.scaleInPlace(c[2]),this.l11.scaleInPlace(c[3]),this.l2_2.scaleInPlace(c[4]),this.l2_1.scaleInPlace(c[5]),this.l20.scaleInPlace(c[6]),this.l21.scaleInPlace(c[7]),this.l22.scaleInPlace(c[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(s[0]),this.l1_1.scaleInPlace(s[1]),this.l10.scaleInPlace(s[2]),this.l11.scaleInPlace(s[3]),this.l2_2.scaleInPlace(s[4]),this.l2_1.scaleInPlace(s[5]),this.l20.scaleInPlace(s[6]),this.l21.scaleInPlace(s[7]),this.l22.scaleInPlace(s[8])},i.FromArray=function(e){var t=new i;return l.e.FromArrayToRef(e[0],0,t.l00),l.e.FromArrayToRef(e[1],0,t.l1_1),l.e.FromArrayToRef(e[2],0,t.l10),l.e.FromArrayToRef(e[3],0,t.l11),l.e.FromArrayToRef(e[4],0,t.l2_2),l.e.FromArrayToRef(e[5],0,t.l2_1),l.e.FromArrayToRef(e[6],0,t.l20),l.e.FromArrayToRef(e[7],0,t.l21),l.e.FromArrayToRef(e[8],0,t.l22),t},i.FromPolynomial=function(e){var t=new i;return t.l00=e.xx.scale(.376127).add(e.yy.scale(.376127)).add(e.zz.scale(.376126)),t.l1_1=e.y.scale(.977204),t.l10=e.z.scale(.977204),t.l11=e.x.scale(.977204),t.l2_2=e.xy.scale(1.16538),t.l2_1=e.yz.scale(1.16538),t.l20=e.zz.scale(1.34567).subtract(e.xx.scale(.672834)).subtract(e.yy.scale(.672834)),t.l21=e.zx.scale(1.16538),t.l22=e.xx.scale(1.16538).subtract(e.yy.scale(1.16538)),t.l1_1.scaleInPlace(-1),t.l11.scaleInPlace(-1),t.l2_1.scaleInPlace(-1),t.l21.scaleInPlace(-1),t.scaleInPlace(Math.PI),t},i}(),h=function(){function i(){this.x=l.e.Zero(),this.y=l.e.Zero(),this.z=l.e.Zero(),this.xx=l.e.Zero(),this.yy=l.e.Zero(),this.zz=l.e.Zero(),this.xy=l.e.Zero(),this.yz=l.e.Zero(),this.zx=l.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=_.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(e){var t=new l.e(e.r,e.g,e.b);this.xx=this.xx.add(t),this.yy=this.yy.add(t),this.zz=this.zz.add(t)},i.prototype.scaleInPlace=function(e){this.x.scaleInPlace(e),this.y.scaleInPlace(e),this.z.scaleInPlace(e),this.xx.scaleInPlace(e),this.yy.scaleInPlace(e),this.zz.scaleInPlace(e),this.yz.scaleInPlace(e),this.zx.scaleInPlace(e),this.xy.scaleInPlace(e)},i.FromHarmonics=function(e){var t=new i;return t._harmonics=e,t.x=e.l11.scale(1.02333).scale(-1),t.y=e.l1_1.scale(1.02333).scale(-1),t.z=e.l10.scale(1.02333),t.xx=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).add(e.l22.scale(.429043)),t.yy=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).subtract(e.l22.scale(.429043)),t.zz=e.l00.scale(.886277).add(e.l20.scale(.495417)),t.yz=e.l2_1.scale(.858086).scale(-1),t.zx=e.l21.scale(.858086).scale(-1),t.xy=e.l2_2.scale(.858086),t.scaleInPlace(1/Math.PI),t},i.FromArray=function(e){var t=new i;return l.e.FromArrayToRef(e[0],0,t.x),l.e.FromArrayToRef(e[1],0,t.y),l.e.FromArrayToRef(e[2],0,t.z),l.e.FromArrayToRef(e[3],0,t.xx),l.e.FromArrayToRef(e[4],0,t.yy),l.e.FromArrayToRef(e[5],0,t.zz),l.e.FromArrayToRef(e[6],0,t.yz),l.e.FromArrayToRef(e[7],0,t.zx),l.e.FromArrayToRef(e[8],0,t.xy),t},i}()},514:function(q,H,o){"use strict";o.d(H,"a",function(){return O});var l=o(442),s=o(545),O=function(){function v(){}return v.GetEnvironmentBRDFTexture=function(c){if(!c.environmentBRDFTexture){var _=c.useDelayedTextureLoading;c.useDelayedTextureLoading=!1;var h=c._blockEntityCollection;c._blockEntityCollection=!1;var i=l.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,c,!0,!1,l.a.BILINEAR_SAMPLINGMODE);c._blockEntityCollection=h;var e=c.getEngine().getLoadedTexturesCache(),t=e.indexOf(i.getInternalTexture());t!==-1&&e.splice(t,1),i.isRGBD=!0,i.wrapU=l.a.CLAMP_ADDRESSMODE,i.wrapV=l.a.CLAMP_ADDRESSMODE,c.environmentBRDFTexture=i,c.useDelayedTextureLoading=_,s.a.ExpandRGBDTexture(i)}return c.environmentBRDFTexture},v._instanceNumber=0,v._environmentBRDFBase64Texture="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==",v}()},516:function(q,H,o){"use strict";o.d(H,"a",function(){return ee});var l=o(434),s=o(439),O=o(443),v=o(438),c=o(441),_=o(445),h=o(448),i=o(447),e=o(442),t=o(458),r=o(459),n=o(454),a=o(435),f="glowMapGenerationPixelShader",p=`#ifdef DIFFUSE
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
}`;a.a.ShadersStore[f]=p;var d={name:f,shader:p},m=o(487),P=o(496),R=o(497),A=o(501),C=o(507),M=o(508),x=o(488),F=o(489),I="glowMapGenerationVertexShader",N=`
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
}`;a.a.ShadersStore[I]=N;var G={name:I,shader:N},V=o(476),L=o(512),ee=function(){function K(B,Q){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new c.b},this.neutralColor=new c.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new v.c,this.onBeforeRenderMainTextureObservable=new v.c,this.onBeforeComposeObservable=new v.c,this.onBeforeRenderMeshToEffect=new v.c,this.onAfterRenderMeshToEffect=new v.c,this.onAfterComposeObservable=new v.c,this.onSizeChangedObservable=new v.c,this.name=B,this._scene=Q||h.a.LastCreatedScene,K._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(K.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(K.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(B){this._effectLayerOptions.renderingGroupId=B},enumerable:!1,configurable:!0}),K.prototype._init=function(B){this._effectLayerOptions=Object(l.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},B),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},K.prototype._generateIndexBuffer=function(){var B=[];B.push(0),B.push(1),B.push(2),B.push(0),B.push(2),B.push(3),this._indexBuffer=this._engine.createIndexBuffer(B)},K.prototype._generateVertexBuffer=function(){var B=[];B.push(1,1),B.push(-1,1),B.push(-1,-1),B.push(1,-1);var Q=new i.b(this._engine,B,i.b.PositionKind,!1,!1,2);this._vertexBuffers[i.b.PositionKind]=Q},K.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?_.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?_.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},K.prototype._createMainTexture=function(){var B=this;if(this._mainTexture=new t.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=e.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=e.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(e.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(Z,ue,W,ge){B.onBeforeRenderMainTextureObservable.notifyObservers(B);var te,se=B._scene.getEngine();if(ge.length){for(se.setColorWrite(!1),te=0;te<ge.length;te++)B._renderSubMesh(ge.data[te]);se.setColorWrite(!0)}for(te=0;te<Z.length;te++)B._renderSubMesh(Z.data[te]);for(te=0;te<ue.length;te++)B._renderSubMesh(ue.data[te]);var de=se.getAlphaMode();for(te=0;te<W.length;te++)B._renderSubMesh(W.data[te],!0);se.setAlphaMode(de)},this._mainTexture.onClearObservable.add(function(Z){Z.clear(B.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var Q=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){B._scene.getBoundingBoxRenderer().enabled=!B.disableBoundingBoxesFromEffectLayer&&Q}),this._mainTexture.onAfterUnbindObservable.add(function(){B._scene.getBoundingBoxRenderer().enabled=Q})}},K.prototype._addCustomEffectDefines=function(B){},K.prototype._isReady=function(B,Q,Z){var ue=B.getMaterial();if(!ue||!ue.isReadyForSubMesh(B.getMesh(),B,Q))return!1;var W=[],ge=[i.b.PositionKind],te=B.getMesh(),se=!1,de=!1;if(ue){var J=ue.needAlphaTesting(),j=ue.getAlphaTestTexture(),me=j&&j.hasAlpha&&(ue.useAlphaFromDiffuseTexture||ue._useAlphaFromAlbedoTexture);j&&(J||me)&&(W.push("#define DIFFUSE"),te.isVerticesDataPresent(i.b.UV2Kind)&&j.coordinatesIndex===1?(W.push("#define DIFFUSEUV2"),de=!0):te.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define DIFFUSEUV1"),se=!0),J&&(W.push("#define ALPHATEST"),W.push("#define ALPHATESTVALUE 0.4")));var Te=ue.opacityTexture;Te&&(W.push("#define OPACITY"),te.isVerticesDataPresent(i.b.UV2Kind)&&Te.coordinatesIndex===1?(W.push("#define OPACITYUV2"),de=!0):te.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define OPACITYUV1"),se=!0))}Z&&(W.push("#define EMISSIVE"),te.isVerticesDataPresent(i.b.UV2Kind)&&Z.coordinatesIndex===1?(W.push("#define EMISSIVEUV2"),de=!0):te.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define EMISSIVEUV1"),se=!0)),te.isVerticesDataPresent(i.b.ColorKind)&&te.hasVertexAlpha&&(ge.push(i.b.ColorKind),W.push("#define VERTEXALPHA")),se&&(ge.push(i.b.UVKind),W.push("#define UV1")),de&&(ge.push(i.b.UV2Kind),W.push("#define UV2"));var ae=new L.a;if(te.useBones&&te.computeBonesUsingShaders){ge.push(i.b.MatricesIndicesKind),ge.push(i.b.MatricesWeightsKind),te.numBoneInfluencers>4&&(ge.push(i.b.MatricesIndicesExtraKind),ge.push(i.b.MatricesWeightsExtraKind)),W.push("#define NUM_BONE_INFLUENCERS "+te.numBoneInfluencers);var ve=te.skeleton;ve&&ve.isUsingTextureForMatrices?W.push("#define BONETEXTURE"):W.push("#define BonesPerMesh "+(ve?ve.bones.length+1:0)),te.numBoneInfluencers>0&&ae.addCPUSkinningFallback(0,te)}else W.push("#define NUM_BONE_INFLUENCERS 0");var ie=te.morphTargetManager,Ee=0;ie&&ie.numInfluencers>0&&(W.push("#define MORPHTARGETS"),Ee=ie.numInfluencers,W.push("#define NUM_MORPH_INFLUENCERS "+Ee),ie.isUsingTextureForTargets&&W.push("#define MORPHTARGETS_TEXTURE"),n.a.PrepareAttributesForMorphTargetsInfluencers(ge,te,Ee)),Q&&(W.push("#define INSTANCES"),n.a.PushAttributesForInstances(ge),B.getRenderingMesh().hasThinInstances&&W.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(W);var le=W.join(`
`);return this._cachedDefines!==le&&(this._cachedDefines=le,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",ge,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],le,ae,void 0,void 0,{maxSimultaneousMorphTargets:Ee})),this._effectLayerMapGenerationEffect.isReady()},K.prototype.render=function(){var B=this._mergeEffect;if(!!B.isReady()){for(var Q=0;Q<this._postProcesses.length;Q++)if(!this._postProcesses[Q].isReady())return;var Z=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),Z.enableEffect(B),Z.setState(!1),Z.bindBuffers(this._vertexBuffers,this._indexBuffer,B);var ue=Z.getAlphaMode();Z.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(B),Z.setAlphaMode(ue),this.onAfterComposeObservable.notifyObservers(this);var W=this._mainTexture.getSize();this._setMainTextureSize(),(W.width!==this._mainTextureDesiredSize.width||W.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},K.prototype.hasMesh=function(B){return this.renderingGroupId===-1||B.renderingGroupId===this.renderingGroupId},K.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},K.prototype._shouldRenderMesh=function(B){return!0},K.prototype._canRenderMesh=function(B,Q){return!Q.needAlphaBlendingForMesh(B)},K.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},K.prototype._renderSubMesh=function(B,Q){var Z=this,ue;if(Q===void 0&&(Q=!1),!!this.shouldRender()){var W=B.getMaterial(),ge=B.getMesh(),te=B.getReplacementMesh(),se=B.getRenderingMesh(),de=B.getEffectiveMesh(),J=this._scene,j=J.getEngine();if(de._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!W&&!!this._canRenderMesh(se,W)){var me=(ue=se.overrideMaterialSideOrientation)!==null&&ue!==void 0?ue:W.sideOrientation,Te=se._getWorldMatrixDeterminant();Te<0&&(me=me===r.a.ClockWiseSideOrientation?r.a.CounterClockWiseSideOrientation:r.a.ClockWiseSideOrientation);var ae=me===r.a.ClockWiseSideOrientation;j.setState(W.backFaceCulling,W.zOffset,void 0,ae);var ve=se._getInstancesRenderList(B._id,!!te);if(!ve.mustReturn&&!!this._shouldRenderMesh(se)){var ie=ve.hardwareInstancedRendering[B._id]||se.hasThinInstances;if(this._setEmissiveTextureAndColor(se,B,W),this.onBeforeRenderMeshToEffect.notifyObservers(ge),this._useMeshMaterial(se))se.render(B,ie,te||void 0);else if(this._isReady(B,ie,this._emissiveTextureAndColor.texture)){j.enableEffect(this._effectLayerMapGenerationEffect),se._bind(B,this._effectLayerMapGenerationEffect,r.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",J.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",de.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var Ee=W.needAlphaTesting(),le=W.getAlphaTestTexture(),y=le&&le.hasAlpha&&(W.useAlphaFromDiffuseTexture||W._useAlphaFromAlbedoTexture);if(le&&(Ee||y)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",le);var g=le.getTextureMatrix();g&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",g)}var D=W.opacityTexture;if(D){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",D),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",D.level);var g=D.getTextureMatrix();g&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",g)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),se.useBones&&se.computeBonesUsingShaders&&se.skeleton){var b=se.skeleton;if(b.isUsingTextureForMatrices){var Y=b.getTransformMatrixTexture(se);if(!Y)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",Y),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(b.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",b.getTransformMatrices(se))}n.a.BindMorphTargetParameters(se,this._effectLayerMapGenerationEffect),se.morphTargetManager&&se.morphTargetManager.isUsingTextureForTargets&&se.morphTargetManager._bind(this._effectLayerMapGenerationEffect),Q&&j.setAlphaMode(W.alphaMode),se._processRendering(de,B,this._effectLayerMapGenerationEffect,W.fillMode,ve,ie,function(z,S){return Z._effectLayerMapGenerationEffect.setMatrix("world",S)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(ge)}}}},K.prototype._useMeshMaterial=function(B){return!1},K.prototype._rebuild=function(){var B=this._vertexBuffers[i.b.PositionKind];B&&B._rebuild(),this._generateIndexBuffer()},K.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var B=0;B<this._postProcesses.length;B++)this._postProcesses[B]&&this._postProcesses[B].dispose();this._postProcesses=[];for(var B=0;B<this._textures.length;B++)this._textures[B]&&this._textures[B].dispose();this._textures=[]},K.prototype.dispose=function(){var B=this._vertexBuffers[i.b.PositionKind];B&&(B.dispose(),this._vertexBuffers[i.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var Q=this._scene.effectLayers.indexOf(this,0);Q>-1&&this._scene.effectLayers.splice(Q,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},K.prototype.getClassName=function(){return"EffectLayer"},K.Parse=function(B,Q,Z){var ue=O.b.Instantiate(B.customType);return ue.Parse(B,Q,Z)},K._SceneComponentInitialization=function(B){throw V.a.WarnImport("EffectLayerSceneComponent")},Object(l.c)([Object(s.c)()],K.prototype,"name",void 0),Object(l.c)([Object(s.f)()],K.prototype,"neutralColor",void 0),Object(l.c)([Object(s.c)()],K.prototype,"isEnabled",void 0),Object(l.c)([Object(s.d)()],K.prototype,"camera",null),Object(l.c)([Object(s.c)()],K.prototype,"renderingGroupId",null),Object(l.c)([Object(s.c)()],K.prototype,"disableBoundingBoxesFromEffectLayer",void 0),K}()},517:function(q,H,o){"use strict";o.d(H,"a",function(){return a});var l=o(434),s=o(442),O=o(444),v=o(435),c="fxaaPixelShader",_=`uniform sampler2D textureSampler;
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
}`;v.a.ShadersStore[c]=_;var h={name:c,shader:_},i="fxaaVertexShader",e=`
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
}`;v.a.ShadersStore[i]=e;var t={name:i,shader:e},r=o(437),n=o(439),a=function(f){Object(l.d)(p,f);function p(d,m,P,R,A,C,M){P===void 0&&(P=null),M===void 0&&(M=0);var x=f.call(this,d,"fxaa",["texelSize"],null,m,P,R||s.a.BILINEAR_SAMPLINGMODE,A,C,null,M,"fxaa",void 0,!0)||this,F=x._getDefines();return x.updateEffect(F),x.onApplyObservable.add(function(I){var N=x.texelSize;I.setFloat2("texelSize",N.x,N.y)}),x}return p.prototype.getClassName=function(){return"FxaaPostProcess"},p.prototype._getDefines=function(){var d=this.getEngine();if(!d)return null;var m=d.getGlInfo();return m&&m.renderer&&m.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},p._Parse=function(d,m,P,R){return n.a.Parse(function(){return new p(d.name,d.options,m,d.renderTargetSamplingMode,P.getEngine(),d.reusable)},d,P,R)},p}(O.a);r.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function(q,H,o){"use strict";o.d(H,"a",function(){return i});var l=o(434),s=o(439),O=o(491),v=o(444),c=o(448),_=o(644),h=o(534),i=function(e){Object(l.d)(t,e);function t(r,n,a,f,p,d,m,P){a===void 0&&(a=null),m===void 0&&(m=0);var R=e.call(this,r,"imageProcessing",[],[],n,a,f,p,d,null,m,"postprocess",null,!0)||this;return R._fromLinearSpace=!0,R._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},P?(P.applyByPostProcess=!0,R._attachImageProcessingConfiguration(P,!0),R.fromLinearSpace=!1):(R._attachImageProcessingConfiguration(null,!0),R.imageProcessingConfiguration.applyByPostProcess=!0),R.onApply=function(A){R.imageProcessingConfiguration.bind(A,R.aspectRatio)},R}return Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(r){r.applyByPostProcess=!0,this._attachImageProcessingConfiguration(r)},enumerable:!1,configurable:!0}),t.prototype._attachImageProcessingConfiguration=function(r,n){var a=this;if(n===void 0&&(n=!1),r!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),r)this._imageProcessingConfiguration=r;else{var f=null,p=this.getEngine(),d=this.getCamera();if(d)f=d.getScene();else if(p&&p.scenes){var m=p.scenes;f=m[m.length-1]}else f=c.a.LastCreatedScene;f?this._imageProcessingConfiguration=f.imageProcessingConfiguration:this._imageProcessingConfiguration=new O.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),n||this._updateParameters()}},Object.defineProperty(t.prototype,"isSupported",{get:function(){var r=this.getEffect();return!r||r.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(r){this.imageProcessingConfiguration.colorCurves=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(r){this.imageProcessingConfiguration.colorCurvesEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(r){this.imageProcessingConfiguration.colorGradingTexture=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(r){this.imageProcessingConfiguration.colorGradingEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(r){this.imageProcessingConfiguration.exposure=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(r){this._imageProcessingConfiguration.toneMappingEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(r){this._imageProcessingConfiguration.toneMappingType=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(r){this.imageProcessingConfiguration.contrast=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(r){this.imageProcessingConfiguration.vignetteStretch=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(r){this.imageProcessingConfiguration.vignetteCentreX=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(r){this.imageProcessingConfiguration.vignetteCentreY=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(r){this.imageProcessingConfiguration.vignetteWeight=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(r){this.imageProcessingConfiguration.vignetteColor=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(r){this.imageProcessingConfiguration.vignetteCameraFov=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(r){this.imageProcessingConfiguration.vignetteBlendMode=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(r){this.imageProcessingConfiguration.vignetteEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(r){this._fromLinearSpace!==r&&(this._fromLinearSpace=r,this._updateParameters())},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"ImageProcessingPostProcess"},t.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var r="";for(var n in this._defines)this._defines[n]&&(r+="#define "+n+`;\r
`);var a=["textureSampler"],f=["scale"];O.a&&(O.a.PrepareSamplers(a,this._defines),O.a.PrepareUniforms(f,this._defines)),this.updateEffect(r,f,a)},t.prototype.dispose=function(r){e.prototype.dispose.call(this,r),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(l.c)([Object(s.c)()],t.prototype,"_fromLinearSpace",void 0),t}(v.a)},521:function(q,H,o){"use strict";o.d(H,"a",function(){return h});var l=o(436),s=o(450),O=o(513),v=o(515),c=o(441),_=function(){function i(e,t,r,n){this.name=e,this.worldAxisForNormal=t,this.worldAxisForFileX=r,this.worldAxisForFileY=n}return i}(),h=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(e){var t=this,r;if(!e.isCube)return null;(r=e.getScene())===null||r===void 0||r.getEngine().flushFramebuffer();var n=e.getSize().width,a=e.readPixels(0,void 0,void 0,!1),f=e.readPixels(1,void 0,void 0,!1),p,d;e.isRenderTarget?(p=e.readPixels(3,void 0,void 0,!1),d=e.readPixels(2,void 0,void 0,!1)):(p=e.readPixels(2,void 0,void 0,!1),d=e.readPixels(3,void 0,void 0,!1));var m=e.readPixels(4,void 0,void 0,!1),P=e.readPixels(5,void 0,void 0,!1),R=e.gammaSpace,A=5,C=0;return(e.textureType==1||e.textureType==2)&&(C=1),new Promise(function(M,x){Promise.all([f,a,p,d,m,P]).then(function(F){var I=F[0],N=F[1],G=F[2],V=F[3],L=F[4],ee=F[5],K={size:n,right:N,left:I,up:G,down:V,front:L,back:ee,format:A,type:C,gammaSpace:R};M(t.ConvertCubeMapToSphericalPolynomial(K))})})},i.ConvertCubeMapToSphericalPolynomial=function(e){for(var t=new O.a,r=0,n=2/e.size,a=n,f=n*.5-1,p=0;p<6;p++)for(var d=this.FileFaces[p],m=e[d.name],P=f,R=e.format===5?4:3,A=0;A<e.size;A++){for(var C=f,M=0;M<e.size;M++){var x=d.worldAxisForFileX.scale(C).add(d.worldAxisForFileY.scale(P)).add(d.worldAxisForNormal);x.normalize();var F=Math.pow(1+C*C+P*P,-3/2),I=m[A*e.size*R+M*R+0],N=m[A*e.size*R+M*R+1],G=m[A*e.size*R+M*R+2];isNaN(I)&&(I=0),isNaN(N)&&(N=0),isNaN(G)&&(G=0),e.type===0&&(I/=255,N/=255,G/=255),e.gammaSpace&&(I=Math.pow(s.a.Clamp(I),v.c),N=Math.pow(s.a.Clamp(N),v.c),G=Math.pow(s.a.Clamp(G),v.c));var V=4096;I=s.a.Clamp(I,0,V),N=s.a.Clamp(N,0,V),G=s.a.Clamp(G,0,V);var L=new c.a(I,N,G);t.addLight(x,L,F),r+=F,C+=n}P+=a}var ee=4*Math.PI,K=6,B=ee*K/6,Q=B/r;return t.scaleInPlace(Q),t.convertIncidentRadianceToIrradiance(),t.convertIrradianceToLambertianRadiance(),O.b.FromHarmonics(t)},i.FileFaces=[new _("right",new l.e(1,0,0),new l.e(0,0,-1),new l.e(0,-1,0)),new _("left",new l.e(-1,0,0),new l.e(0,0,1),new l.e(0,-1,0)),new _("up",new l.e(0,1,0),new l.e(1,0,0),new l.e(0,0,1)),new _("down",new l.e(0,-1,0),new l.e(1,0,0),new l.e(0,0,-1)),new _("front",new l.e(0,0,1),new l.e(1,0,0),new l.e(0,-1,0)),new _("back",new l.e(0,0,-1),new l.e(-1,0,0),new l.e(0,-1,0))],i}()},522:function(q,H,o){"use strict";var l=o(434),s=o(456),O=o(440),v=o(467);v.a.prototype.createRenderTargetCubeTexture=function(c,_){var h=Object(l.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},_);h.generateStencilBuffer=h.generateDepthBuffer&&h.generateStencilBuffer,(h.type===1&&!this._caps.textureFloatLinearFiltering||h.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(h.samplingMode=1);var i=this._gl,e=new s.a(this,s.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,e,!0);var t=this._getSamplingParameters(h.samplingMode,h.generateMipMaps);h.type===1&&!this._caps.textureFloat&&(h.type=0,O.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,t.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,t.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var r=0;r<6;r++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this._getRGBABufferInternalSizedFormat(h.type,h.format),c,c,0,this._getInternalFormat(h.format),this._getWebGLTextureType(h.type),null);var n=i.createFramebuffer();return this._bindUnboundFramebuffer(n),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(h.generateStencilBuffer,h.generateDepthBuffer,c,c),h.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),e._framebuffer=n,e.width=c,e.height=c,e.isReady=!0,e.isCube=!0,e.samples=1,e.generateMipMaps=h.generateMipMaps,e.samplingMode=h.samplingMode,e.type=h.type,e.format=h.format,e._generateDepthBuffer=h.generateDepthBuffer,e._generateStencilBuffer=h.generateStencilBuffer,this._internalTexturesCache.push(e),e}},523:function(q,H,o){"use strict";var l=o(521),s=o(477);Object.defineProperty(s.a.prototype,"sphericalPolynomial",{get:function(){var O=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=l.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(v){O._texture._sphericalPolynomial=v,O._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(O){this._texture&&(this._texture._sphericalPolynomial=O)},enumerable:!0,configurable:!0})},529:function(q,H,o){"use strict";o.d(H,"b",function(){return Be}),o.d(H,"a",function(){return Bt});var l=o(434),s=o(439),O=o(440),v=o(490),c=o(514),_=o(449),h=o(436),i=o(447),e=o(626),t=o(480),r=o(454),n=function(){function w(T){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new h.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=T}return w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype.isReadyForSubMesh=function(T,u){return!(T._areTexturesDirty&&u.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},w.prototype.prepareDefines=function(T,u,E){this._isEnabled?(T.ANISOTROPIC=this._isEnabled,this._isEnabled&&!u.isVerticesDataPresent(i.b.TangentKind)&&(T._needUVs=!0,T.MAINUV1=!0),T._areTexturesDirty&&E.texturesEnabled&&(this._texture&&t.a.AnisotropicTextureEnabled?r.a.PrepareDefinesForMergedUV(this._texture,T,"ANISOTROPIC_TEXTURE"):T.ANISOTROPIC_TEXTURE=!1)):(T.ANISOTROPIC=!1,T.ANISOTROPIC_TEXTURE=!1)},w.prototype.bindForSubMesh=function(T,u,E){(!T.useUbo||!E||!T.isSync)&&(this._texture&&t.a.AnisotropicTextureEnabled&&(T.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),r.a.BindTextureMatrix(this._texture,T,"anisotropy")),T.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),u.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&T.setTexture("anisotropySampler",this._texture)},w.prototype.hasTexture=function(T){return this._texture===T},w.prototype.getActiveTextures=function(T){this._texture&&T.push(this._texture)},w.prototype.getAnimatables=function(T){this._texture&&this._texture.animations&&this._texture.animations.length>0&&T.push(this._texture)},w.prototype.dispose=function(T){T&&this._texture&&this._texture.dispose()},w.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},w.AddFallbacks=function(T,u,E){return T.ANISOTROPIC&&u.addFallback(E++,"ANISOTROPIC"),E},w.AddUniforms=function(T){T.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},w.PrepareUniformBuffer=function(T){T.addUniform("vAnisotropy",3),T.addUniform("vAnisotropyInfos",2),T.addUniform("anisotropyMatrix",16)},w.AddSamplers=function(T){T.push("anisotropySampler")},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,E){var U=this;s.a.Parse(function(){return U},T,u,E)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)()],w.prototype,"intensity",void 0),Object(l.c)([Object(s.n)()],w.prototype,"direction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"texture",void 0),w}(),a=function(){function w(T){this._useEnergyConservation=w.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=w.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=w.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=w.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=T}return w.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},w.prototype.prepareDefines=function(T){T.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,T.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,T.SPHERICAL_HARMONICS=this._useSphericalHarmonics,T.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},w.prototype.getClassName=function(){return"PBRBRDFConfiguration"},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,E){var U=this;s.a.Parse(function(){return U},T,u,E)},w.DEFAULT_USE_ENERGY_CONSERVATION=!0,w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,w.DEFAULT_USE_SPHERICAL_HARMONICS=!0,w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useEnergyConservation",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSphericalHarmonics",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),w}(),f=o(441),p=function(){function w(T){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=f.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=T}return w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype.isReadyForSubMesh=function(T,u){return!(T._areTexturesDirty&&u.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&t.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},w.prototype.prepareDefines=function(T,u){var E;this._isEnabled?(T.SHEEN=this._isEnabled,T.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,T.SHEEN_ROUGHNESS=this._roughness!==null,T.SHEEN_ALBEDOSCALING=this._albedoScaling,T.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,T.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((E=this._textureRoughness)===null||E===void 0?void 0:E._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),T._areTexturesDirty&&u.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled?r.a.PrepareDefinesForMergedUV(this._texture,T,"SHEEN_TEXTURE"):T.SHEEN_TEXTURE=!1,this._textureRoughness&&t.a.SheenTextureEnabled?r.a.PrepareDefinesForMergedUV(this._textureRoughness,T,"SHEEN_TEXTURE_ROUGHNESS"):T.SHEEN_TEXTURE_ROUGHNESS=!1)):(T.SHEEN=!1,T.SHEEN_TEXTURE=!1,T.SHEEN_TEXTURE_ROUGHNESS=!1,T.SHEEN_LINKWITHALBEDO=!1,T.SHEEN_ROUGHNESS=!1,T.SHEEN_ALBEDOSCALING=!1,T.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,T.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},w.prototype.bindForSubMesh=function(T,u,E,U){var ne,ce,$,Se,re,X,fe,pe,Re=U._materialDefines,oe=Re.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!T.useUbo||!E||!T.isSync)&&(oe&&t.a.SheenTextureEnabled?(T.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),r.a.BindTextureMatrix(this._texture,T,"sheen")):(this._texture||this._textureRoughness)&&t.a.SheenTextureEnabled&&(T.updateFloat4("vSheenInfos",(ce=(ne=this._texture)===null||ne===void 0?void 0:ne.coordinatesIndex)!==null&&ce!==void 0?ce:0,(Se=($=this._texture)===null||$===void 0?void 0:$.level)!==null&&Se!==void 0?Se:0,(X=(re=this._textureRoughness)===null||re===void 0?void 0:re.coordinatesIndex)!==null&&X!==void 0?X:0,(pe=(fe=this._textureRoughness)===null||fe===void 0?void 0:fe.level)!==null&&pe!==void 0?pe:0),this._texture&&r.a.BindTextureMatrix(this._texture,T,"sheen"),this._textureRoughness&&!oe&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&r.a.BindTextureMatrix(this._textureRoughness,T,"sheenRoughness")),T.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&T.updateFloat("vSheenRoughness",this._roughness)),u.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&T.setTexture("sheenSampler",this._texture),this._textureRoughness&&!oe&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&t.a.SheenTextureEnabled&&T.setTexture("sheenRoughnessSampler",this._textureRoughness))},w.prototype.hasTexture=function(T){return this._texture===T||this._textureRoughness===T},w.prototype.getActiveTextures=function(T){this._texture&&T.push(this._texture),this._textureRoughness&&T.push(this._textureRoughness)},w.prototype.getAnimatables=function(T){this._texture&&this._texture.animations&&this._texture.animations.length>0&&T.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&T.push(this._textureRoughness)},w.prototype.dispose=function(T){var u,E;T&&((u=this._texture)===null||u===void 0||u.dispose(),(E=this._textureRoughness)===null||E===void 0||E.dispose())},w.prototype.getClassName=function(){return"PBRSheenConfiguration"},w.AddFallbacks=function(T,u,E){return T.SHEEN&&u.addFallback(E++,"SHEEN"),E},w.AddUniforms=function(T){T.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},w.PrepareUniformBuffer=function(T){T.addUniform("vSheenColor",4),T.addUniform("vSheenRoughness",1),T.addUniform("vSheenInfos",4),T.addUniform("sheenMatrix",16),T.addUniform("sheenRoughnessMatrix",16)},w.AddSamplers=function(T){T.push("sheenSampler"),T.push("sheenRoughnessSampler")},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,E){var U=this;s.a.Parse(function(){return U},T,u,E)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"linkSheenWithAlbedo",void 0),Object(l.c)([Object(s.c)()],w.prototype,"intensity",void 0),Object(l.c)([Object(s.e)()],w.prototype,"color",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"texture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"roughness",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"textureRoughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"albedoScaling",void 0),w}(),d=o(450),m=function(){function w(T,u,E){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=f.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=f.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=T,this._internalMarkScenePrePassDirty=u,this._scene=E}return Object.defineProperty(w.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(T){!this._scene.enableSubSurfaceForPrePass()||T&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(T))},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(T){T>=1?this._volumeIndexOfRefraction=T:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},w.prototype.isReadyForSubMesh=function(T,u){if(T._areTexturesDirty&&u.texturesEnabled){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var E=this._getRefractionTexture(u);if(E&&t.a.RefractionTextureEnabled&&!E.isReadyOrNotBlocking())return!1}return!0},w.prototype.prepareDefines=function(T,u){if(T._areTexturesDirty&&(T.SUBSURFACE=!1,T.SS_TRANSLUCENCY=this._isTranslucencyEnabled,T.SS_SCATTERING=this._isScatteringEnabled,T.SS_THICKNESSANDMASK_TEXTURE=!1,T.SS_MASK_FROM_THICKNESS_TEXTURE=!1,T.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,T.SS_REFRACTION=!1,T.SS_REFRACTIONMAP_3D=!1,T.SS_GAMMAREFRACTION=!1,T.SS_RGBDREFRACTION=!1,T.SS_LINEARSPECULARREFRACTION=!1,T.SS_REFRACTIONMAP_OPPOSITEZ=!1,T.SS_LODINREFRACTIONALPHA=!1,T.SS_LINKREFRACTIONTOTRANSPARENCY=!1,T.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(T.SUBSURFACE=!0,T._areTexturesDirty&&u.texturesEnabled&&this._thicknessTexture&&t.a.ThicknessTextureEnabled&&r.a.PrepareDefinesForMergedUV(this._thicknessTexture,T,"SS_THICKNESSANDMASK_TEXTURE"),T.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,T.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&u.texturesEnabled)){var E=this._getRefractionTexture(u);E&&t.a.RefractionTextureEnabled&&(T.SS_REFRACTION=!0,T.SS_REFRACTIONMAP_3D=E.isCube,T.SS_GAMMAREFRACTION=E.gammaSpace,T.SS_RGBDREFRACTION=E.isRGBD,T.SS_LINEARSPECULARREFRACTION=E.linearSpecularLOD,T.SS_REFRACTIONMAP_OPPOSITEZ=E.invertZ,T.SS_LODINREFRACTIONALPHA=E.lodLevelInAlpha,T.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,T.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},w.prototype.bindForSubMesh=function(T,u,E,U,ne,ce){var $=this._getRefractionTexture(u);if(!T.useUbo||!U||!T.isSync){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&(T.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),r.a.BindTextureMatrix(this._thicknessTexture,T,"thickness")),T.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),$&&t.a.RefractionTextureEnabled){T.updateMatrix("refractionMatrix",$.getReflectionTextureMatrix());var Se=1;$.isCube||$.depth&&(Se=$.depth);var re=$.getSize().width,X=this.volumeIndexOfRefraction;T.updateFloat4("vRefractionInfos",$.level,1/X,Se,this._invertRefractionY?-1:1),T.updateFloat3("vRefractionMicrosurfaceInfos",re,$.lodGenerationScale,$.lodGenerationOffset),ce&&T.updateFloat2("vRefractionFilteringInfo",re,d.a.Log2(re))}this.isScatteringEnabled&&T.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),T.updateColor3("vDiffusionDistance",this.diffusionDistance),T.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),T.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}u.texturesEnabled&&(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&T.setTexture("thicknessSampler",this._thicknessTexture),$&&t.a.RefractionTextureEnabled&&(ne?T.setTexture("refractionSampler",$):(T.setTexture("refractionSampler",$._lodTextureMid||$),T.setTexture("refractionSamplerLow",$._lodTextureLow||$),T.setTexture("refractionSamplerHigh",$._lodTextureHigh||$))))},w.prototype.unbind=function(T){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(T.setTexture("refractionSampler",null),!0):!1},w.prototype._getRefractionTexture=function(T){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?T.environmentTexture:null},Object.defineProperty(w.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),w.prototype.fillRenderTargetTextures=function(T){t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&T.push(this._refractionTexture)},w.prototype.hasTexture=function(T){return this._thicknessTexture===T||this._refractionTexture===T},w.prototype.hasRenderTargetTextures=function(){return!!(t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},w.prototype.getActiveTextures=function(T){this._thicknessTexture&&T.push(this._thicknessTexture),this._refractionTexture&&T.push(this._refractionTexture)},w.prototype.getAnimatables=function(T){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&T.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&T.push(this._refractionTexture)},w.prototype.dispose=function(T){T&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},w.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},w.AddFallbacks=function(T,u,E){return T.SS_SCATTERING&&u.addFallback(E++,"SS_SCATTERING"),T.SS_TRANSLUCENCY&&u.addFallback(E++,"SS_TRANSLUCENCY"),E},w.AddUniforms=function(T){T.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},w.AddSamplers=function(T){T.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},w.PrepareUniformBuffer=function(T){T.addUniform("vRefractionMicrosurfaceInfos",3),T.addUniform("vRefractionFilteringInfo",2),T.addUniform("vRefractionInfos",4),T.addUniform("refractionMatrix",16),T.addUniform("vThicknessInfos",2),T.addUniform("thicknessMatrix",16),T.addUniform("vThicknessParam",2),T.addUniform("vDiffusionDistance",3),T.addUniform("vTintColor",4),T.addUniform("vSubSurfaceIntensity",3),T.addUniform("scatteringDiffusionProfile",1)},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,E){var U=this;s.a.Parse(function(){return U},T,u,E)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isRefractionEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isTranslucencyEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markScenePrePassDirty")],w.prototype,"isScatteringEnabled",void 0),Object(l.c)([Object(s.c)()],w.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(l.c)([Object(s.c)()],w.prototype,"refractionIntensity",void 0),Object(l.c)([Object(s.c)()],w.prototype,"translucencyIntensity",void 0),Object(l.c)([Object(s.c)()],w.prototype,"useAlbedoToTintRefraction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"thicknessTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"refractionTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(s.c)()],w.prototype,"_volumeIndexOfRefraction",void 0),Object(l.c)([Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"volumeIndexOfRefraction",null),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"invertRefractionY",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"linkRefractionWithTransparency",void 0),Object(l.c)([Object(s.c)()],w.prototype,"minimumThickness",void 0),Object(l.c)([Object(s.c)()],w.prototype,"maximumThickness",void 0),Object(l.c)([Object(s.e)()],w.prototype,"tintColor",void 0),Object(l.c)([Object(s.c)()],w.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(s.e)()],w.prototype,"diffusionDistance",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useMaskFromThicknessTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useMaskFromThicknessTextureGltf",void 0),w}(),P=o(744),R=o(491),A=o(459),C=o(552),M=o(553),x=o(442),F=o(523),I=o(435),N=o(746),G="pbrFragmentDeclaration",V=`uniform vec4 vEyePosition;
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
`;I.a.IncludesShadersStore[G]=V;var L={name:G,shader:V},ee=o(674),K=o(745),B="pbrUboDeclaration",Q=`layout(std140,column_major) uniform;





















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
`;I.a.IncludesShadersStore[B]=Q;var Z={name:B,shader:Q},ue="pbrFragmentExtraDeclaration",W=`
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
#endif`;I.a.IncludesShadersStore[ue]=W;var ge={name:ue,shader:W},te=o(650),se=o(651),de="pbrFragmentSamplersDeclaration",J=`#ifdef ALBEDO
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
#endif`;I.a.IncludesShadersStore[de]=J;var j={name:de,shader:J},me=o(524),Te=o(592),ae=o(558),ve=o(597),ie=o(457),Ee=o(627),le=o(605),y="pbrHelperFunctions",g=`
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
#endif`;I.a.IncludesShadersStore[y]=g;var D={name:y,shader:g},b=o(525),Y=o(652),z="harmonicsFunctions",S=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;I.a.IncludesShadersStore[z]=S;var k={name:z,shader:S},he="pbrDirectLightingSetupFunctions",_e=`
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
}`;I.a.IncludesShadersStore[he]=_e;var Ae={name:he,shader:_e},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;I.a.IncludesShadersStore[Ce]=Oe;var Le={name:Ce,shader:Oe},Me=o(606),xe=o(607),Ie="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
`;I.a.IncludesShadersStore[Ie]=Ve;var Ut={name:Ie,shader:Ve},Ge="pbrIBLFunctions",we=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
#endif`;I.a.IncludesShadersStore[Ge]=we;var Vt={name:Ge,shader:we},Gt=o(614),wt=o(615),Ht=o(653),He="pbrBlockAlbedoOpacity",je=`struct albedoOpacityOutParams
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
`;I.a.IncludesShadersStore[He]=je;var jt={name:He,shader:je},We="pbrBlockReflectivity",ze=`struct reflectivityOutParams
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
`;I.a.IncludesShadersStore[We]=ze;var Wt={name:We,shader:ze},Xe="pbrBlockAmbientOcclusion",Ye=`struct ambientOcclusionOutParams
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
`;I.a.IncludesShadersStore[Xe]=Ye;var zt={name:Xe,shader:Ye},Ke="pbrBlockAlphaFresnel",Qe=`#ifdef ALPHAFRESNEL
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
`;I.a.IncludesShadersStore[Ke]=Qe;var Xt={name:Ke,shader:Qe},ke="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;I.a.IncludesShadersStore[ke]=Ze;var Yt={name:ke,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;I.a.IncludesShadersStore[Je]=qe;var Kt={name:Je,shader:qe},$e="pbrBlockSheen",et=`#ifdef SHEEN
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
`;I.a.IncludesShadersStore[$e]=et;var Qt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;I.a.IncludesShadersStore[tt]=nt;var kt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;I.a.IncludesShadersStore[rt]=it;var Zt={name:rt,shader:it},Jt=o(550),at="pbrBlockNormalGeometric",ot=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;I.a.IncludesShadersStore[at]=ot;var qt={name:at,shader:ot},$t=o(616),st="pbrBlockNormalFinal",lt=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;I.a.IncludesShadersStore[st]=lt;var en={name:st,shader:lt},tn=o(747),ft="pbrBlockLightmapInit",ct=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;I.a.IncludesShadersStore[ft]=ct;var nn={name:ft,shader:ct},ut="pbrBlockGeometryInfo",dt=`float NdotVUnclamped=dot(normalW,viewDirectionW);

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
`;I.a.IncludesShadersStore[ut]=dt;var rn={name:ut,shader:dt},ht="pbrBlockReflectance0",pt=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
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
`;I.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",gt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;I.a.IncludesShadersStore[vt]=gt;var on={name:vt,shader:gt},mt="pbrBlockDirectLighting",Et=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;I.a.IncludesShadersStore[mt]=Et;var sn={name:mt,shader:Et},ln=o(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;I.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},St="pbrBlockFinalUnlitComponents",At=`
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
`;I.a.IncludesShadersStore[St]=At;var cn={name:St,shader:At},Rt="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;I.a.IncludesShadersStore[Rt]=Pt;var un={name:Rt,shader:Pt},dn=o(701),hn=o(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;I.a.IncludesShadersStore[Ct]=Ot;var pn={name:Ct,shader:Ot},bt="pbrDebug",It=`#if DEBUGMODE>0
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
#endif`;I.a.IncludesShadersStore[bt]=It;var vn={name:bt,shader:It},Mt="pbrPixelShader",xt=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;I.a.ShadersStore[Mt]=xt;var gn={name:Mt,shader:xt},Dt="pbrVertexDeclaration",yt=`uniform mat4 view;
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
#endif`;I.a.IncludesShadersStore[Dt]=yt;var mn={name:Dt,shader:yt},En=o(487),_n=o(748),Tn=o(749),Sn=o(593),An=o(656),Rn=o(657),Pn=o(658),Cn=o(496),On=o(497),bn=o(507),In=o(508),Mn=o(488),xn=o(489),Dn=o(750),yn=o(675),Ln=o(551),Fn=o(702),Nn=o(659),Bn=o(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;I.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=o(512),Fe=o(751),De={effect:null,subMesh:null},Be=function(w){Object(l.d)(T,w);function T(){var u=w.call(this)||this;return u.PBR=!0,u.NUM_SAMPLES="0",u.REALTIME_FILTERING=!1,u.MAINUV1=!1,u.MAINUV2=!1,u.UV1=!1,u.UV2=!1,u.ALBEDO=!1,u.GAMMAALBEDO=!1,u.ALBEDODIRECTUV=0,u.VERTEXCOLOR=!1,u.DETAIL=!1,u.DETAILDIRECTUV=0,u.DETAIL_NORMALBLENDMETHOD=0,u.AMBIENT=!1,u.AMBIENTDIRECTUV=0,u.AMBIENTINGRAYSCALE=!1,u.OPACITY=!1,u.VERTEXALPHA=!1,u.OPACITYDIRECTUV=0,u.OPACITYRGB=!1,u.ALPHATEST=!1,u.DEPTHPREPASS=!1,u.ALPHABLEND=!1,u.ALPHAFROMALBEDO=!1,u.ALPHATESTVALUE="0.5",u.SPECULAROVERALPHA=!1,u.RADIANCEOVERALPHA=!1,u.ALPHAFRESNEL=!1,u.LINEARALPHAFRESNEL=!1,u.PREMULTIPLYALPHA=!1,u.EMISSIVE=!1,u.EMISSIVEDIRECTUV=0,u.REFLECTIVITY=!1,u.REFLECTIVITYDIRECTUV=0,u.SPECULARTERM=!1,u.MICROSURFACEFROMREFLECTIVITYMAP=!1,u.MICROSURFACEAUTOMATIC=!1,u.LODBASEDMICROSFURACE=!1,u.MICROSURFACEMAP=!1,u.MICROSURFACEMAPDIRECTUV=0,u.METALLICWORKFLOW=!1,u.ROUGHNESSSTOREINMETALMAPALPHA=!1,u.ROUGHNESSSTOREINMETALMAPGREEN=!1,u.METALLNESSSTOREINMETALMAPBLUE=!1,u.AOSTOREINMETALMAPRED=!1,u.METALLIC_REFLECTANCE=!1,u.METALLIC_REFLECTANCEDIRECTUV=0,u.ENVIRONMENTBRDF=!1,u.ENVIRONMENTBRDF_RGBD=!1,u.NORMAL=!1,u.TANGENT=!1,u.BUMP=!1,u.BUMPDIRECTUV=0,u.OBJECTSPACE_NORMALMAP=!1,u.PARALLAX=!1,u.PARALLAXOCCLUSION=!1,u.NORMALXYSCALE=!0,u.LIGHTMAP=!1,u.LIGHTMAPDIRECTUV=0,u.USELIGHTMAPASSHADOWMAP=!1,u.GAMMALIGHTMAP=!1,u.RGBDLIGHTMAP=!1,u.REFLECTION=!1,u.REFLECTIONMAP_3D=!1,u.REFLECTIONMAP_SPHERICAL=!1,u.REFLECTIONMAP_PLANAR=!1,u.REFLECTIONMAP_CUBIC=!1,u.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,u.REFLECTIONMAP_PROJECTION=!1,u.REFLECTIONMAP_SKYBOX=!1,u.REFLECTIONMAP_EXPLICIT=!1,u.REFLECTIONMAP_EQUIRECTANGULAR=!1,u.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,u.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,u.INVERTCUBICMAP=!1,u.USESPHERICALFROMREFLECTIONMAP=!1,u.USEIRRADIANCEMAP=!1,u.SPHERICAL_HARMONICS=!1,u.USESPHERICALINVERTEX=!1,u.REFLECTIONMAP_OPPOSITEZ=!1,u.LODINREFLECTIONALPHA=!1,u.GAMMAREFLECTION=!1,u.RGBDREFLECTION=!1,u.LINEARSPECULARREFLECTION=!1,u.RADIANCEOCCLUSION=!1,u.HORIZONOCCLUSION=!1,u.INSTANCES=!1,u.THIN_INSTANCES=!1,u.PREPASS=!1,u.PREPASS_IRRADIANCE=!1,u.PREPASS_IRRADIANCE_INDEX=-1,u.PREPASS_ALBEDO=!1,u.PREPASS_ALBEDO_INDEX=-1,u.PREPASS_DEPTH=!1,u.PREPASS_DEPTH_INDEX=-1,u.PREPASS_NORMAL=!1,u.PREPASS_NORMAL_INDEX=-1,u.PREPASS_POSITION=!1,u.PREPASS_POSITION_INDEX=-1,u.PREPASS_VELOCITY=!1,u.PREPASS_VELOCITY_INDEX=-1,u.PREPASS_REFLECTIVITY=!1,u.PREPASS_REFLECTIVITY_INDEX=-1,u.SCENE_MRT_COUNT=0,u.NUM_BONE_INFLUENCERS=0,u.BonesPerMesh=0,u.BONETEXTURE=!1,u.BONES_VELOCITY_ENABLED=!1,u.NONUNIFORMSCALING=!1,u.MORPHTARGETS=!1,u.MORPHTARGETS_NORMAL=!1,u.MORPHTARGETS_TANGENT=!1,u.MORPHTARGETS_UV=!1,u.NUM_MORPH_INFLUENCERS=0,u.MORPHTARGETS_TEXTURE=!1,u.IMAGEPROCESSING=!1,u.VIGNETTE=!1,u.VIGNETTEBLENDMODEMULTIPLY=!1,u.VIGNETTEBLENDMODEOPAQUE=!1,u.TONEMAPPING=!1,u.TONEMAPPING_ACES=!1,u.CONTRAST=!1,u.COLORCURVES=!1,u.COLORGRADING=!1,u.COLORGRADING3D=!1,u.SAMPLER3DGREENDEPTH=!1,u.SAMPLER3DBGRMAP=!1,u.IMAGEPROCESSINGPOSTPROCESS=!1,u.EXPOSURE=!1,u.MULTIVIEW=!1,u.USEPHYSICALLIGHTFALLOFF=!1,u.USEGLTFLIGHTFALLOFF=!1,u.TWOSIDEDLIGHTING=!1,u.SHADOWFLOAT=!1,u.CLIPPLANE=!1,u.CLIPPLANE2=!1,u.CLIPPLANE3=!1,u.CLIPPLANE4=!1,u.CLIPPLANE5=!1,u.CLIPPLANE6=!1,u.POINTSIZE=!1,u.FOG=!1,u.LOGARITHMICDEPTH=!1,u.FORCENORMALFORWARD=!1,u.SPECULARAA=!1,u.CLEARCOAT=!1,u.CLEARCOAT_DEFAULTIOR=!1,u.CLEARCOAT_TEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS=!1,u.CLEARCOAT_TEXTUREDIRECTUV=0,u.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,u.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.CLEARCOAT_BUMP=!1,u.CLEARCOAT_BUMPDIRECTUV=0,u.CLEARCOAT_REMAP_F0=!0,u.CLEARCOAT_TINT=!1,u.CLEARCOAT_TINT_TEXTURE=!1,u.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,u.ANISOTROPIC=!1,u.ANISOTROPIC_TEXTURE=!1,u.ANISOTROPIC_TEXTUREDIRECTUV=0,u.BRDF_V_HEIGHT_CORRELATED=!1,u.MS_BRDF_ENERGY_CONSERVATION=!1,u.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,u.SHEEN=!1,u.SHEEN_TEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS=!1,u.SHEEN_TEXTUREDIRECTUV=0,u.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,u.SHEEN_LINKWITHALBEDO=!1,u.SHEEN_ROUGHNESS=!1,u.SHEEN_ALBEDOSCALING=!1,u.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.SUBSURFACE=!1,u.SS_REFRACTION=!1,u.SS_TRANSLUCENCY=!1,u.SS_SCATTERING=!1,u.SS_THICKNESSANDMASK_TEXTURE=!1,u.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,u.SS_REFRACTIONMAP_3D=!1,u.SS_REFRACTIONMAP_OPPOSITEZ=!1,u.SS_LODINREFRACTIONALPHA=!1,u.SS_GAMMAREFRACTION=!1,u.SS_RGBDREFRACTION=!1,u.SS_LINEARSPECULARREFRACTION=!1,u.SS_LINKREFRACTIONTOTRANSPARENCY=!1,u.SS_ALBEDOFORREFRACTIONTINT=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,u.UNLIT=!1,u.DEBUGMODE=0,u.rebuild(),u}return T.prototype.reset=function(){w.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},T}(C.a),Bt=function(w){Object(l.d)(T,w);function T(u,E){var U=w.call(this,u,E)||this;return U._directIntensity=1,U._emissiveIntensity=1,U._environmentIntensity=1,U._specularIntensity=1,U._lightingInfos=new h.f(U._directIntensity,U._emissiveIntensity,U._environmentIntensity,U._specularIntensity),U._disableBumpMap=!1,U._albedoTexture=null,U._ambientTexture=null,U._ambientTextureStrength=1,U._ambientTextureImpactOnAnalyticalLights=T.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,U._opacityTexture=null,U._reflectionTexture=null,U._emissiveTexture=null,U._reflectivityTexture=null,U._metallicTexture=null,U._metallic=null,U._roughness=null,U._metallicF0Factor=1,U._metallicReflectanceColor=f.a.White(),U._metallicReflectanceTexture=null,U._microSurfaceTexture=null,U._bumpTexture=null,U._lightmapTexture=null,U._ambientColor=new f.a(0,0,0),U._albedoColor=new f.a(1,1,1),U._reflectivityColor=new f.a(1,1,1),U._reflectionColor=new f.a(1,1,1),U._emissiveColor=new f.a(0,0,0),U._microSurface=.9,U._useLightmapAsShadowmap=!1,U._useHorizonOcclusion=!0,U._useRadianceOcclusion=!0,U._useAlphaFromAlbedoTexture=!1,U._useSpecularOverAlpha=!0,U._useMicroSurfaceFromReflectivityMapAlpha=!1,U._useRoughnessFromMetallicTextureAlpha=!0,U._useRoughnessFromMetallicTextureGreen=!1,U._useMetallnessFromMetallicTextureBlue=!1,U._useAmbientOcclusionFromMetallicTextureRed=!1,U._useAmbientInGrayScale=!1,U._useAutoMicroSurfaceFromReflectivityMap=!1,U._lightFalloff=T.LIGHTFALLOFF_PHYSICAL,U._useRadianceOverAlpha=!0,U._useObjectSpaceNormalMap=!1,U._useParallax=!1,U._useParallaxOcclusion=!1,U._parallaxScaleBias=.05,U._disableLighting=!1,U._maxSimultaneousLights=4,U._invertNormalMapX=!1,U._invertNormalMapY=!1,U._twoSidedLighting=!1,U._alphaCutOff=.4,U._forceAlphaTest=!1,U._useAlphaFresnel=!1,U._useLinearAlphaFresnel=!1,U._environmentBRDFTexture=null,U._forceIrradianceInFragment=!1,U._realTimeFiltering=!1,U._realTimeFilteringQuality=8,U._forceNormalForward=!1,U._enableSpecularAntiAliasing=!1,U._imageProcessingObserver=null,U._renderTargets=new v.a(16),U._globalAmbientColor=new f.a(0,0,0),U._useLogarithmicDepth=!1,U._unlit=!1,U._debugMode=0,U.debugMode=0,U.debugLimit=-1,U.debugFactor=1,U.clearCoat=new e.a(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.anisotropy=new n(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.brdf=new a(U._markAllSubMeshesAsMiscDirty.bind(U)),U.sheen=new p(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.detailMap=new Fe.a(U._markAllSubMeshesAsTexturesDirty.bind(U)),U._rebuildInParallel=!1,U._attachImageProcessingConfiguration(null),U.getRenderTargetTextures=function(){return U._renderTargets.reset(),t.a.ReflectionTextureEnabled&&U._reflectionTexture&&U._reflectionTexture.isRenderTarget&&U._renderTargets.push(U._reflectionTexture),U.subSurface.fillRenderTargetTextures(U._renderTargets),U._renderTargets},U._environmentBRDFTexture=c.a.GetEnvironmentBRDFTexture(E),U.subSurface=new m(U._markAllSubMeshesAsTexturesDirty.bind(U),U._markScenePrePassDirty.bind(U),E),U.prePassConfiguration=new P.a,U}return Object.defineProperty(T.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(u){this._realTimeFiltering=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(u){this._realTimeFilteringQuality=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),T.prototype._attachImageProcessingConfiguration=function(u){var E=this;u!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),u?this._imageProcessingConfiguration=u:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){E._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(T.prototype,"hasRenderTargetTextures",{get:function(){return t.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),T.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(T.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(u){this._useLogarithmicDepth=u&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===T.PBRMATERIAL_OPAQUE||this._transparencyMode===T.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),T.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},T.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===T.PBRMATERIAL_ALPHATEST)},T.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==T.PBRMATERIAL_OPAQUE},T.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},T.prototype.getAlphaTestTexture=function(){return this._albedoTexture},T.prototype.isReadyForSubMesh=function(u,E,U){if(E.effect&&this.isFrozen&&E.effect._wasPreviouslyReady)return!0;E._materialDefines||(E._materialDefines=new Be);var ne=E._materialDefines;if(this._isReadyForSubMesh(E))return!0;var ce=this.getScene(),$=ce.getEngine();if(ne._areTexturesDirty&&ce.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&t.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&t.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Se=this._getReflectionTexture();if(Se&&t.a.ReflectionTextureEnabled&&(!Se.isReadyOrNotBlocking()||Se.irradianceTexture&&!Se.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&t.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&t.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(t.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if($.getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(ne,ce)||!this.clearCoat.isReadyForSubMesh(ne,ce,$,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(ne,ce)||!this.anisotropy.isReadyForSubMesh(ne,ce)||!this.detailMap.isReadyForSubMesh(ne,ce)||ne._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!$.getCaps().standardDerivatives&&!u.isVerticesDataPresent(i.b.NormalKind)&&(u.createNormals(!0),O.a.Warn("PBRMaterial: Normals have been created for the mesh: "+u.name));var re=E.effect,X=ne._areLightsDisposed,fe=this._prepareEffect(u,ne,this.onCompiled,this.onError,U,null,E.getRenderingMesh().hasThinInstances);if(fe)if(this._onEffectCreatedObservable&&(De.effect=fe,De.subMesh=E,this._onEffectCreatedObservable.notifyObservers(De)),this.allowShaderHotSwapping&&re&&!fe.isReady()){if(fe=re,this._rebuildInParallel=!0,ne.markAsUnprocessed(),X)return ne._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,ce.resetCachedMaterial(),E.setEffect(fe,ne),this.buildUniformLayout();return!E.effect||!E.effect.isReady()?!1:(ne._renderId=ce.getRenderId(),E.effect._wasPreviouslyReady=!0,!0)},T.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},T.prototype._prepareEffect=function(u,E,U,ne,ce,$,Se){if(U===void 0&&(U=null),ne===void 0&&(ne=null),ce===void 0&&(ce=null),$===void 0&&($=null),this._prepareDefines(u,E,ce,$,Se),!E.isDirty)return null;E.markAsProcessed();var re=this.getScene(),X=re.getEngine(),fe=new Nt.a,pe=0;E.USESPHERICALINVERTEX&&fe.addFallback(pe++,"USESPHERICALINVERTEX"),E.FOG&&fe.addFallback(pe,"FOG"),E.SPECULARAA&&fe.addFallback(pe,"SPECULARAA"),E.POINTSIZE&&fe.addFallback(pe,"POINTSIZE"),E.LOGARITHMICDEPTH&&fe.addFallback(pe,"LOGARITHMICDEPTH"),E.PARALLAX&&fe.addFallback(pe,"PARALLAX"),E.PARALLAXOCCLUSION&&fe.addFallback(pe++,"PARALLAXOCCLUSION"),pe=n.AddFallbacks(E,fe,pe),pe=n.AddFallbacks(E,fe,pe),pe=m.AddFallbacks(E,fe,pe),pe=p.AddFallbacks(E,fe,pe),E.ENVIRONMENTBRDF&&fe.addFallback(pe++,"ENVIRONMENTBRDF"),E.TANGENT&&fe.addFallback(pe++,"TANGENT"),E.BUMP&&fe.addFallback(pe++,"BUMP"),pe=r.a.HandleFallbacksForShadows(E,fe,this._maxSimultaneousLights,pe++),E.SPECULARTERM&&fe.addFallback(pe++,"SPECULARTERM"),E.USESPHERICALFROMREFLECTIONMAP&&fe.addFallback(pe++,"USESPHERICALFROMREFLECTIONMAP"),E.USEIRRADIANCEMAP&&fe.addFallback(pe++,"USEIRRADIANCEMAP"),E.LIGHTMAP&&fe.addFallback(pe++,"LIGHTMAP"),E.NORMAL&&fe.addFallback(pe++,"NORMAL"),E.AMBIENT&&fe.addFallback(pe++,"AMBIENT"),E.EMISSIVE&&fe.addFallback(pe++,"EMISSIVE"),E.VERTEXCOLOR&&fe.addFallback(pe++,"VERTEXCOLOR"),E.MORPHTARGETS&&fe.addFallback(pe++,"MORPHTARGETS"),E.MULTIVIEW&&fe.addFallback(0,"MULTIVIEW");var Re=[i.b.PositionKind];E.NORMAL&&Re.push(i.b.NormalKind),E.TANGENT&&Re.push(i.b.TangentKind),E.UV1&&Re.push(i.b.UVKind),E.UV2&&Re.push(i.b.UV2Kind),E.VERTEXCOLOR&&Re.push(i.b.ColorKind),r.a.PrepareAttributesForBones(Re,u,E,fe),r.a.PrepareAttributesForInstances(Re,E),r.a.PrepareAttributesForMorphTargets(Re,u,E);var oe="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],ye=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),m.AddUniforms(Pe),m.AddSamplers(be),e.a.AddUniforms(Pe),e.a.AddSamplers(be),n.AddUniforms(Pe),n.AddSamplers(be),p.AddUniforms(Pe),p.AddSamplers(be),P.a.AddUniforms(Pe),P.a.AddSamplers(Pe),R.a&&(R.a.PrepareUniforms(Pe,E),R.a.PrepareSamplers(be,E)),r.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:E,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(oe=this.customShaderNameResolve(oe,Pe,ye,be,E,Re,Ne));var Ue=E.toString();return X.createEffect(oe,{attributes:Re,uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:Ue,fallbacks:fe,onCompiled:U,onError:ne,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:E.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:E.PREPASS},X)},T.prototype._prepareDefines=function(u,E,U,ne,ce){U===void 0&&(U=null),ne===void 0&&(ne=null),ce===void 0&&(ce=!1);var $=this.getScene(),Se=$.getEngine();if(r.a.PrepareDefinesForLights($,u,E,!0,this._maxSimultaneousLights,this._disableLighting),E._needNormals=!0,r.a.PrepareDefinesForMultiview($,E),r.a.PrepareDefinesForPrePass($,E,this.canRenderToMRT),E.METALLICWORKFLOW=this.isMetallicWorkflow(),E._areTexturesDirty){if(E._needUVs=!1,$.texturesEnabled){$.getEngine().getCaps().textureLOD&&(E.LODBASEDMICROSFURACE=!0),this._albedoTexture&&t.a.DiffuseTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._albedoTexture,E,"ALBEDO"),E.GAMMAALBEDO=this._albedoTexture.gammaSpace):E.ALBEDO=!1,this._ambientTexture&&t.a.AmbientTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._ambientTexture,E,"AMBIENT"),E.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):E.AMBIENT=!1,this._opacityTexture&&t.a.OpacityTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._opacityTexture,E,"OPACITY"),E.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):E.OPACITY=!1;var re=this._getReflectionTexture();if(re&&t.a.ReflectionTextureEnabled){switch(E.REFLECTION=!0,E.GAMMAREFLECTION=re.gammaSpace,E.RGBDREFLECTION=re.isRGBD,E.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!re.invertZ:re.invertZ,E.LODINREFLECTIONALPHA=re.lodLevelInAlpha,E.LINEARSPECULARREFLECTION=re.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(E.NUM_SAMPLES=""+this.realTimeFilteringQuality,Se._features.needTypeSuffixInShaderConstants&&(E.NUM_SAMPLES=E.NUM_SAMPLES+"u"),E.REALTIME_FILTERING=!0):E.REALTIME_FILTERING=!1,re.coordinatesMode===x.a.INVCUBIC_MODE&&(E.INVERTCUBICMAP=!0),E.REFLECTIONMAP_3D=re.isCube,E.REFLECTIONMAP_CUBIC=!1,E.REFLECTIONMAP_EXPLICIT=!1,E.REFLECTIONMAP_PLANAR=!1,E.REFLECTIONMAP_PROJECTION=!1,E.REFLECTIONMAP_SKYBOX=!1,E.REFLECTIONMAP_SPHERICAL=!1,E.REFLECTIONMAP_EQUIRECTANGULAR=!1,E.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,E.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,re.coordinatesMode){case x.a.EXPLICIT_MODE:E.REFLECTIONMAP_EXPLICIT=!0;break;case x.a.PLANAR_MODE:E.REFLECTIONMAP_PLANAR=!0;break;case x.a.PROJECTION_MODE:E.REFLECTIONMAP_PROJECTION=!0;break;case x.a.SKYBOX_MODE:E.REFLECTIONMAP_SKYBOX=!0;break;case x.a.SPHERICAL_MODE:E.REFLECTIONMAP_SPHERICAL=!0;break;case x.a.EQUIRECTANGULAR_MODE:E.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case x.a.FIXED_EQUIRECTANGULAR_MODE:E.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case x.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:E.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case x.a.CUBIC_MODE:case x.a.INVCUBIC_MODE:default:E.REFLECTIONMAP_CUBIC=!0,E.USE_LOCAL_REFLECTIONMAP_CUBIC=!!re.boundingBoxSize;break}re.coordinatesMode!==x.a.SKYBOX_MODE&&(re.irradianceTexture?(E.USEIRRADIANCEMAP=!0,E.USESPHERICALFROMREFLECTIONMAP=!1):re.isCube&&(E.USESPHERICALFROMREFLECTIONMAP=!0,E.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||$.getEngine().getCaps().maxVaryingVectors<=8?E.USESPHERICALINVERTEX=!1:E.USESPHERICALINVERTEX=!0))}else E.REFLECTION=!1,E.REFLECTIONMAP_3D=!1,E.REFLECTIONMAP_SPHERICAL=!1,E.REFLECTIONMAP_PLANAR=!1,E.REFLECTIONMAP_CUBIC=!1,E.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,E.REFLECTIONMAP_PROJECTION=!1,E.REFLECTIONMAP_SKYBOX=!1,E.REFLECTIONMAP_EXPLICIT=!1,E.REFLECTIONMAP_EQUIRECTANGULAR=!1,E.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,E.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,E.INVERTCUBICMAP=!1,E.USESPHERICALFROMREFLECTIONMAP=!1,E.USEIRRADIANCEMAP=!1,E.USESPHERICALINVERTEX=!1,E.REFLECTIONMAP_OPPOSITEZ=!1,E.LODINREFLECTIONALPHA=!1,E.GAMMAREFLECTION=!1,E.RGBDREFLECTION=!1,E.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&t.a.LightmapTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._lightmapTexture,E,"LIGHTMAP"),E.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,E.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,E.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):E.LIGHTMAP=!1,this._emissiveTexture&&t.a.EmissiveTextureEnabled?r.a.PrepareDefinesForMergedUV(this._emissiveTexture,E,"EMISSIVE"):E.EMISSIVE=!1,t.a.SpecularTextureEnabled?(this._metallicTexture?(r.a.PrepareDefinesForMergedUV(this._metallicTexture,E,"REFLECTIVITY"),E.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,E.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,E.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,E.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(r.a.PrepareDefinesForMergedUV(this._reflectivityTexture,E,"REFLECTIVITY"),E.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,E.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):E.REFLECTIVITY=!1,this._metallicReflectanceTexture?r.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,E,"METALLIC_REFLECTANCE"):E.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?r.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,E,"MICROSURFACEMAP"):E.MICROSURFACEMAP=!1):(E.REFLECTIVITY=!1,E.MICROSURFACEMAP=!1),$.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap?(r.a.PrepareDefinesForMergedUV(this._bumpTexture,E,"BUMP"),this._useParallax&&this._albedoTexture&&t.a.DiffuseTextureEnabled?(E.PARALLAX=!0,E.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):E.PARALLAX=!1,E.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):E.BUMP=!1,this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled?(E.ENVIRONMENTBRDF=!0,E.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(E.ENVIRONMENTBRDF=!1,E.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?E.ALPHAFROMALBEDO=!0:E.ALPHAFROMALBEDO=!1}E.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===T.LIGHTFALLOFF_STANDARD?(E.USEPHYSICALLIGHTFALLOFF=!1,E.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===T.LIGHTFALLOFF_GLTF?(E.USEPHYSICALLIGHTFALLOFF=!1,E.USEGLTFLIGHTFALLOFF=!0):(E.USEPHYSICALLIGHTFALLOFF=!0,E.USEGLTFLIGHTFALLOFF=!1),E.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?E.TWOSIDEDLIGHTING=!0:E.TWOSIDEDLIGHTING=!1,E.SPECULARAA=$.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(E._areTexturesDirty||E._areMiscDirty)&&(E.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),E.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,E.ALPHABLEND=this.needAlphaBlendingForMesh(u),E.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,E.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),E._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(E),E.FORCENORMALFORWARD=this._forceNormalForward,E.RADIANCEOCCLUSION=this._useRadianceOcclusion,E.HORIZONOCCLUSION=this._useHorizonOcclusion,E._areMiscDirty&&(r.a.PrepareDefinesForMisc(u,$,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(u)||this._forceAlphaTest,E),E.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!u.isVerticesDataPresent(i.b.NormalKind),E.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(E,$),this.subSurface.prepareDefines(E,$),this.clearCoat.prepareDefines(E,$),this.anisotropy.prepareDefines(E,u,$),this.brdf.prepareDefines(E),this.sheen.prepareDefines(E,$),r.a.PrepareDefinesForFrameBoundValues($,Se,E,!!U,ne,ce),r.a.PrepareDefinesForAttributes(u,E,!0,!0,!0,this._transparencyMode!==T.PBRMATERIAL_OPAQUE)},T.prototype.forceCompilation=function(u,E,U){var ne=this,ce=Object(l.a)({clipPlane:!1,useInstances:!1},U),$=new Be,Se=this._prepareEffect(u,$,void 0,void 0,ce.useInstances,ce.clipPlane,u.hasThinInstances);this._onEffectCreatedObservable&&(De.effect=Se,De.subMesh=null,this._onEffectCreatedObservable.notifyObservers(De)),Se.isReady()?E&&E(this):Se.onCompileObservable.add(function(){E&&E(ne)})},T.prototype.buildUniformLayout=function(){var u=this._uniformBuffer;u.addUniform("vAlbedoInfos",2),u.addUniform("vAmbientInfos",4),u.addUniform("vOpacityInfos",2),u.addUniform("vEmissiveInfos",2),u.addUniform("vLightmapInfos",2),u.addUniform("vReflectivityInfos",3),u.addUniform("vMicroSurfaceSamplerInfos",2),u.addUniform("vReflectionInfos",2),u.addUniform("vReflectionFilteringInfo",2),u.addUniform("vReflectionPosition",3),u.addUniform("vReflectionSize",3),u.addUniform("vBumpInfos",3),u.addUniform("albedoMatrix",16),u.addUniform("ambientMatrix",16),u.addUniform("opacityMatrix",16),u.addUniform("emissiveMatrix",16),u.addUniform("lightmapMatrix",16),u.addUniform("reflectivityMatrix",16),u.addUniform("microSurfaceSamplerMatrix",16),u.addUniform("bumpMatrix",16),u.addUniform("vTangentSpaceParams",2),u.addUniform("reflectionMatrix",16),u.addUniform("vReflectionColor",3),u.addUniform("vAlbedoColor",4),u.addUniform("vLightingIntensity",4),u.addUniform("vReflectionMicrosurfaceInfos",3),u.addUniform("pointSize",1),u.addUniform("vReflectivityColor",4),u.addUniform("vEmissiveColor",3),u.addUniform("vAmbientColor",3),u.addUniform("vDebugMode",2),u.addUniform("vMetallicReflectanceFactors",4),u.addUniform("vMetallicReflectanceInfos",2),u.addUniform("metallicReflectanceMatrix",16),e.a.PrepareUniformBuffer(u),n.PrepareUniformBuffer(u),p.PrepareUniformBuffer(u),m.PrepareUniformBuffer(u),Fe.a.PrepareUniformBuffer(u),u.addUniform("vSphericalL00",3),u.addUniform("vSphericalL1_1",3),u.addUniform("vSphericalL10",3),u.addUniform("vSphericalL11",3),u.addUniform("vSphericalL2_2",3),u.addUniform("vSphericalL2_1",3),u.addUniform("vSphericalL20",3),u.addUniform("vSphericalL21",3),u.addUniform("vSphericalL22",3),u.addUniform("vSphericalX",3),u.addUniform("vSphericalY",3),u.addUniform("vSphericalZ",3),u.addUniform("vSphericalXX_ZZ",3),u.addUniform("vSphericalYY_ZZ",3),u.addUniform("vSphericalZZ",3),u.addUniform("vSphericalXY",3),u.addUniform("vSphericalYZ",3),u.addUniform("vSphericalZX",3),u.create()},T.prototype.unbind=function(){if(this._activeEffect){var u=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),u=!0),this.subSurface.unbind(this._activeEffect)&&(u=!0),u&&this._markAllSubMeshesAsTexturesDirty()}w.prototype.unbind.call(this)},T.prototype.bindForSubMesh=function(u,E,U){var ne=this.getScene(),ce=U._materialDefines;if(!!ce){var $=U.effect;if(!!$){this._activeEffect=$,E.getMeshUniformBuffer().bindToEffect($,"Mesh"),E.transferToEffect(u),this.prePassConfiguration.bindForSubMesh(this._activeEffect,ne,E,u,this.isFrozen),ce.OBJECTSPACE_NORMALMAP&&(u.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Se=this._mustRebind(ne,$,E.visibility);r.a.BindBonesParameters(E,this._activeEffect,this.prePassConfiguration);var re=null,X=this._uniformBuffer;if(Se){var fe=ne.getEngine();if(X.bindToEffect($,"Material"),this.bindViewProjection($),re=this._getReflectionTexture(),!X.useUbo||!this.isFrozen||!X.isSync){if(ne.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&(X.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),r.a.BindTextureMatrix(this._albedoTexture,X,"albedo")),this._ambientTexture&&t.a.AmbientTextureEnabled&&(X.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),r.a.BindTextureMatrix(this._ambientTexture,X,"ambient")),this._opacityTexture&&t.a.OpacityTextureEnabled&&(X.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),r.a.BindTextureMatrix(this._opacityTexture,X,"opacity")),re&&t.a.ReflectionTextureEnabled){if(X.updateMatrix("reflectionMatrix",re.getReflectionTextureMatrix()),X.updateFloat2("vReflectionInfos",re.level,0),re.boundingBoxSize){var pe=re;X.updateVector3("vReflectionPosition",pe.boundingBoxPosition),X.updateVector3("vReflectionSize",pe.boundingBoxSize)}if(this.realTimeFiltering){var Re=re.getSize().width;X.updateFloat2("vReflectionFilteringInfo",Re,d.a.Log2(Re))}if(!ce.USEIRRADIANCEMAP){var oe=re.sphericalPolynomial;if(ce.USESPHERICALFROMREFLECTIONMAP&&oe)if(ce.SPHERICAL_HARMONICS){var Pe=oe.preScaledHarmonics;X.updateVector3("vSphericalL00",Pe.l00),X.updateVector3("vSphericalL1_1",Pe.l1_1),X.updateVector3("vSphericalL10",Pe.l10),X.updateVector3("vSphericalL11",Pe.l11),X.updateVector3("vSphericalL2_2",Pe.l2_2),X.updateVector3("vSphericalL2_1",Pe.l2_1),X.updateVector3("vSphericalL20",Pe.l20),X.updateVector3("vSphericalL21",Pe.l21),X.updateVector3("vSphericalL22",Pe.l22)}else X.updateFloat3("vSphericalX",oe.x.x,oe.x.y,oe.x.z),X.updateFloat3("vSphericalY",oe.y.x,oe.y.y,oe.y.z),X.updateFloat3("vSphericalZ",oe.z.x,oe.z.y,oe.z.z),X.updateFloat3("vSphericalXX_ZZ",oe.xx.x-oe.zz.x,oe.xx.y-oe.zz.y,oe.xx.z-oe.zz.z),X.updateFloat3("vSphericalYY_ZZ",oe.yy.x-oe.zz.x,oe.yy.y-oe.zz.y,oe.yy.z-oe.zz.z),X.updateFloat3("vSphericalZZ",oe.zz.x,oe.zz.y,oe.zz.z),X.updateFloat3("vSphericalXY",oe.xy.x,oe.xy.y,oe.xy.z),X.updateFloat3("vSphericalYZ",oe.yz.x,oe.yz.y,oe.yz.z),X.updateFloat3("vSphericalZX",oe.zx.x,oe.zx.y,oe.zx.z)}X.updateFloat3("vReflectionMicrosurfaceInfos",re.getSize().width,re.lodGenerationScale,re.lodGenerationOffset)}this._emissiveTexture&&t.a.EmissiveTextureEnabled&&(X.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),r.a.BindTextureMatrix(this._emissiveTexture,X,"emissive")),this._lightmapTexture&&t.a.LightmapTextureEnabled&&(X.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),r.a.BindTextureMatrix(this._lightmapTexture,X,"lightmap")),t.a.SpecularTextureEnabled&&(this._metallicTexture?(X.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),r.a.BindTextureMatrix(this._metallicTexture,X,"reflectivity")):this._reflectivityTexture&&(X.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),r.a.BindTextureMatrix(this._reflectivityTexture,X,"reflectivity")),this._metallicReflectanceTexture&&(X.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),r.a.BindTextureMatrix(this._metallicReflectanceTexture,X,"metallicReflectance")),this._microSurfaceTexture&&(X.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),r.a.BindTextureMatrix(this._microSurfaceTexture,X,"microSurfaceSampler"))),this._bumpTexture&&fe.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&(X.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),r.a.BindTextureMatrix(this._bumpTexture,X,"bump"),ne._mirroredCameraPosition?X.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):X.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&X.updateFloat("pointSize",this.pointSize),ce.METALLICWORKFLOW){f.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,f.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,X.updateColor4("vReflectivityColor",f.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,ye=1,Ne=Math.pow((be-ye)/(be+ye),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,f.c.Color3[0]);var Ue=this._metallicF0Factor;X.updateColor4("vMetallicReflectanceFactors",f.c.Color3[0],Ue)}else X.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);X.updateColor3("vEmissiveColor",t.a.EmissiveTextureEnabled?this._emissiveColor:f.a.BlackReadOnly),X.updateColor3("vReflectionColor",this._reflectionColor),!ce.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?X.updateColor4("vAlbedoColor",this._albedoColor,1):X.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*ne.environmentIntensity,this._lightingInfos.w=this._specularIntensity,X.updateVector4("vLightingIntensity",this._lightingInfos),ne.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),X.updateColor3("vAmbientColor",this._globalAmbientColor),X.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}ne.texturesEnabled&&(this._albedoTexture&&t.a.DiffuseTextureEnabled&&X.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&t.a.AmbientTextureEnabled&&X.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.a.OpacityTextureEnabled&&X.setTexture("opacitySampler",this._opacityTexture),re&&t.a.ReflectionTextureEnabled&&(ce.LODBASEDMICROSFURACE?X.setTexture("reflectionSampler",re):(X.setTexture("reflectionSampler",re._lodTextureMid||re),X.setTexture("reflectionSamplerLow",re._lodTextureLow||re),X.setTexture("reflectionSamplerHigh",re._lodTextureHigh||re)),ce.USEIRRADIANCEMAP&&X.setTexture("irradianceSampler",re.irradianceTexture)),ce.ENVIRONMENTBRDF&&X.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&t.a.EmissiveTextureEnabled&&X.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.a.LightmapTextureEnabled&&X.setTexture("lightmapSampler",this._lightmapTexture),t.a.SpecularTextureEnabled&&(this._metallicTexture?X.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&X.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&X.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&X.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&fe.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&X.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(X,ne,this.isFrozen),this.subSurface.bindForSubMesh(X,ne,fe,this.isFrozen,ce.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(X,ne,fe,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,U),this.anisotropy.bindForSubMesh(X,ne,this.isFrozen),this.sheen.bindForSubMesh(X,ne,this.isFrozen,U),r.a.BindClipPlane(this._activeEffect,ne),this.bindEyePosition($)}(Se||!this.isFrozen)&&(ne.lightsEnabled&&!this._disableLighting&&r.a.BindLights(ne,E,this._activeEffect,ce,this._maxSimultaneousLights,this._rebuildInParallel),(ne.fogEnabled&&E.applyFog&&ne.fogMode!==_.a.FOGMODE_NONE||re)&&this.bindView($),r.a.BindFogParameters(ne,E,this._activeEffect,!0),ce.NUM_MORPH_INFLUENCERS&&r.a.BindMorphTargetParameters(E,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),r.a.BindLogDepth(ce,this._activeEffect,ne)),this._afterBind(E,this._activeEffect),X.update()}}},T.prototype.getAnimatables=function(){var u=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&u.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&u.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&u.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&u.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&u.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?u.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&u.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&u.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&u.push(this._lightmapTexture),this.detailMap.getAnimatables(u),this.subSurface.getAnimatables(u),this.clearCoat.getAnimatables(u),this.sheen.getAnimatables(u),this.anisotropy.getAnimatables(u),u},T.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},T.prototype.getActiveTextures=function(){var u=w.prototype.getActiveTextures.call(this);return this._albedoTexture&&u.push(this._albedoTexture),this._ambientTexture&&u.push(this._ambientTexture),this._opacityTexture&&u.push(this._opacityTexture),this._reflectionTexture&&u.push(this._reflectionTexture),this._emissiveTexture&&u.push(this._emissiveTexture),this._reflectivityTexture&&u.push(this._reflectivityTexture),this._metallicTexture&&u.push(this._metallicTexture),this._metallicReflectanceTexture&&u.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&u.push(this._microSurfaceTexture),this._bumpTexture&&u.push(this._bumpTexture),this._lightmapTexture&&u.push(this._lightmapTexture),this.detailMap.getActiveTextures(u),this.subSurface.getActiveTextures(u),this.clearCoat.getActiveTextures(u),this.sheen.getActiveTextures(u),this.anisotropy.getActiveTextures(u),u},T.prototype.hasTexture=function(u){return w.prototype.hasTexture.call(this,u)||this._albedoTexture===u||this._ambientTexture===u||this._opacityTexture===u||this._reflectionTexture===u||this._reflectivityTexture===u||this._metallicTexture===u||this._metallicReflectanceTexture===u||this._microSurfaceTexture===u||this._bumpTexture===u||this._lightmapTexture===u?!0:this.detailMap.hasTexture(u)||this.subSurface.hasTexture(u)||this.clearCoat.hasTexture(u)||this.sheen.hasTexture(u)||this.anisotropy.hasTexture(u)},T.prototype.setPrePassRenderer=function(u){if(this.subSurface.isScatteringEnabled){var E=this.getScene().enableSubSurfaceForPrePass();return E&&(E.enabled=!0),!0}return!1},T.prototype.dispose=function(u,E){var U,ne,ce,$,Se,re,X,fe,pe,Re,oe;E&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(U=this._albedoTexture)===null||U===void 0||U.dispose(),(ne=this._ambientTexture)===null||ne===void 0||ne.dispose(),(ce=this._opacityTexture)===null||ce===void 0||ce.dispose(),($=this._reflectionTexture)===null||$===void 0||$.dispose(),(Se=this._emissiveTexture)===null||Se===void 0||Se.dispose(),(re=this._metallicTexture)===null||re===void 0||re.dispose(),(X=this._reflectivityTexture)===null||X===void 0||X.dispose(),(fe=this._bumpTexture)===null||fe===void 0||fe.dispose(),(pe=this._lightmapTexture)===null||pe===void 0||pe.dispose(),(Re=this._metallicReflectanceTexture)===null||Re===void 0||Re.dispose(),(oe=this._microSurfaceTexture)===null||oe===void 0||oe.dispose()),this.detailMap.dispose(E),this.subSurface.dispose(E),this.clearCoat.dispose(E),this.sheen.dispose(E),this.anisotropy.dispose(E),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),w.prototype.dispose.call(this,u,E)},T.PBRMATERIAL_OPAQUE=A.a.MATERIAL_OPAQUE,T.PBRMATERIAL_ALPHATEST=A.a.MATERIAL_ALPHATEST,T.PBRMATERIAL_ALPHABLEND=A.a.MATERIAL_ALPHABLEND,T.PBRMATERIAL_ALPHATESTANDBLEND=A.a.MATERIAL_ALPHATESTANDBLEND,T.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,T.LIGHTFALLOFF_PHYSICAL=0,T.LIGHTFALLOFF_GLTF=1,T.LIGHTFALLOFF_STANDARD=2,Object(l.c)([Object(s.i)()],T.prototype,"_imageProcessingConfiguration",void 0),Object(l.c)([Object(s.b)("_markAllSubMeshesAsMiscDirty")],T.prototype,"debugMode",void 0),Object(l.c)([Object(s.c)()],T.prototype,"useLogarithmicDepth",null),T}(M.a)},530:function(q,H,o){"use strict";o.d(H,"a",function(){return i});var l=o(483),s=o(572),O=o(438),v=o(449),c=o(436),_=o(589),h=o(542),i=function(){function e(t,r,n,a,f,p,d,m,P,R){n===void 0&&(n=0),a===void 0&&(a=100),f===void 0&&(f=!1),p===void 0&&(p=1),R===void 0&&(R=!1),this.target=r,this.fromFrame=n,this.toFrame=a,this.loopAnimation=f,this.onAnimationEnd=d,this.onAnimationLoop=P,this.isAdditive=R,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new O.c,this.onAnimationLoopObservable=new O.c,this._scene=t,m&&this.appendAnimations(r,m),this._speedRatio=p,t._activeAnimatables.push(this)}return Object.defineProperty(e.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._weight},set:function(t){if(t===-1){this._weight=-1;return}this._weight=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(t){for(var r=0;r<this._runtimeAnimations.length;r++){var n=this._runtimeAnimations[r];n._prepareForSpeedRatioChange(t)}this._speedRatio=t},enumerable:!1,configurable:!0}),e.prototype.syncWith=function(t){if(this._syncRoot=t,t){var r=this._scene._activeAnimatables.indexOf(this);r>-1&&(this._scene._activeAnimatables.splice(r,1),this._scene._activeAnimatables.push(this))}return this},e.prototype.getAnimations=function(){return this._runtimeAnimations},e.prototype.appendAnimations=function(t,r){for(var n=this,a=0;a<r.length;a++){var f=r[a],p=new s.a(t,f,this._scene,this);p._onLoop=function(){n.onAnimationLoopObservable.notifyObservers(n),n.onAnimationLoop&&n.onAnimationLoop()},this._runtimeAnimations.push(p)}},e.prototype.getAnimationByTargetProperty=function(t){for(var r=this._runtimeAnimations,n=0;n<r.length;n++)if(r[n].animation.targetProperty===t)return r[n].animation;return null},e.prototype.getRuntimeAnimationByTargetProperty=function(t){for(var r=this._runtimeAnimations,n=0;n<r.length;n++)if(r[n].animation.targetProperty===t)return r[n];return null},e.prototype.reset=function(){for(var t=this._runtimeAnimations,r=0;r<t.length;r++)t[r].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},e.prototype.enableBlending=function(t){for(var r=this._runtimeAnimations,n=0;n<r.length;n++)r[n].animation.enableBlending=!0,r[n].animation.blendingSpeed=t},e.prototype.disableBlending=function(){for(var t=this._runtimeAnimations,r=0;r<t.length;r++)t[r].animation.enableBlending=!1},e.prototype.goToFrame=function(t){var r=this._runtimeAnimations;if(r[0]){var n=r[0].animation.framePerSecond,a=r[0].currentFrame,f=this.speedRatio===0?0:(t-a)/n*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=f}for(var p=0;p<r.length;p++)r[p].goToFrame(t)},e.prototype.pause=function(){this._paused||(this._paused=!0)},e.prototype.restart=function(){this._paused=!1},e.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},e.prototype.stop=function(t,r){if(t||r){var n=this._scene._activeAnimatables.indexOf(this);if(n>-1){for(var a=this._runtimeAnimations,f=a.length-1;f>=0;f--){var p=a[f];t&&p.animation.name!=t||r&&!r(p.target)||(p.dispose(),a.splice(f,1))}a.length==0&&(this._scene._activeAnimatables.splice(n,1),this._raiseOnAnimationEnd())}}else{var f=this._scene._activeAnimatables.indexOf(this);if(f>-1){this._scene._activeAnimatables.splice(f,1);for(var a=this._runtimeAnimations,f=0;f<a.length;f++)a[f].dispose();this._raiseOnAnimationEnd()}}},e.prototype.waitAsync=function(){var t=this;return new Promise(function(r,n){t.onAnimationEndObservable.add(function(){r(t)},void 0,void 0,t,!0)})},e.prototype._animate=function(t){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=t),!0;if(this._localDelayOffset===null?(this._localDelayOffset=t,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=t-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var r=!1,n=this._runtimeAnimations,a;for(a=0;a<n.length;a++){var f=n[a],p=f.animate(t-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);r=r||p}if(this.animationStarted=r,!r){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<n.length;a++)n[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return r},e}();v.a.prototype._animate=function(){if(!!this.animationsEnabled){var e=_.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=e}this.deltaTime=this.useConstantAnimationDeltaTime?16:(e-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=e;var t=this._activeAnimatables;if(t.length!==0){this._animationTime+=this.deltaTime;for(var r=this._animationTime,n=0;n<t.length;n++){var a=t[n];!a._animate(r)&&a.disposeOnEnd&&n--}this._processLateAnimationBindings()}}},v.a.prototype.beginWeightedAnimation=function(e,t,r,n,a,f,p,d,m,P,R){n===void 0&&(n=1),f===void 0&&(f=1),R===void 0&&(R=!1);var A=this.beginAnimation(e,t,r,a,f,p,d,!1,m,P,R);return A.weight=n,A},v.a.prototype.beginAnimation=function(e,t,r,n,a,f,p,d,m,P,R){a===void 0&&(a=1),d===void 0&&(d=!0),R===void 0&&(R=!1),t>r&&a>0&&(a*=-1),d&&this.stopAnimation(e,void 0,m),p||(p=new i(this,e,t,r,n,a,f,void 0,P,R));var A=m?m(e):!0;if(e.animations&&A&&p.appendAnimations(e,e.animations),e.getAnimatables)for(var C=e.getAnimatables(),M=0;M<C.length;M++)this.beginAnimation(C[M],t,r,n,a,f,p,d,m,P);return p.reset(),p},v.a.prototype.beginHierarchyAnimation=function(e,t,r,n,a,f,p,d,m,P,R,A){f===void 0&&(f=1),m===void 0&&(m=!0),A===void 0&&(A=!1);var C=e.getDescendants(t),M=[];M.push(this.beginAnimation(e,r,n,a,f,p,d,m,P,void 0,A));for(var x=0,F=C;x<F.length;x++){var I=F[x];M.push(this.beginAnimation(I,r,n,a,f,p,d,m,P,void 0,A))}return M},v.a.prototype.beginDirectAnimation=function(e,t,r,n,a,f,p,d,m){m===void 0&&(m=!1),f===void 0&&(f=1),r>n&&f>0&&(f*=-1);var P=new i(this,e,r,n,a,f,p,t,d,m);return P},v.a.prototype.beginDirectHierarchyAnimation=function(e,t,r,n,a,f,p,d,m,P){P===void 0&&(P=!1);var R=e.getDescendants(t),A=[];A.push(this.beginDirectAnimation(e,r,n,a,f,p,d,m,P));for(var C=0,M=R;C<M.length;C++){var x=M[C];A.push(this.beginDirectAnimation(x,r,n,a,f,p,d,m,P))}return A},v.a.prototype.getAnimatableByTarget=function(e){for(var t=0;t<this._activeAnimatables.length;t++)if(this._activeAnimatables[t].target===e)return this._activeAnimatables[t];return null},v.a.prototype.getAllAnimatablesByTarget=function(e){for(var t=[],r=0;r<this._activeAnimatables.length;r++)this._activeAnimatables[r].target===e&&t.push(this._activeAnimatables[r]);return t},v.a.prototype.stopAnimation=function(e,t,r){for(var n=this.getAllAnimatablesByTarget(e),a=0,f=n;a<f.length;a++){var p=f[a];p.stop(t,r)}},v.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var e=0;e<this._activeAnimatables.length;e++)this._activeAnimatables[e].stop();this._activeAnimatables=[]}for(var t=0,r=this.animationGroups;t<r.length;t++){var n=r[t];n.stop()}},v.a.prototype._registerTargetForLateAnimationBinding=function(e,t){var r=e.target;this._registeredForLateAnimationBindings.pushNoDuplicate(r),r._lateAnimationHolders||(r._lateAnimationHolders={}),r._lateAnimationHolders[e.targetPath]||(r._lateAnimationHolders[e.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:t}),e.isAdditive?(r._lateAnimationHolders[e.targetPath].additiveAnimations.push(e),r._lateAnimationHolders[e.targetPath].totalAdditiveWeight+=e.weight):(r._lateAnimationHolders[e.targetPath].animations.push(e),r._lateAnimationHolders[e.targetPath].totalWeight+=e.weight)},v.a.prototype._processLateAnimationBindingsForMatrices=function(e){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return e.originalValue;var t=1,r=c.c.Vector3[0],n=c.c.Vector3[1],a=c.c.Quaternion[0],f=0,p=e.animations[0],d=e.originalValue,m=1,P=!1;if(e.totalWeight<1)m=1-e.totalWeight,d.decompose(n,a,r);else{if(f=1,t=e.totalWeight,m=p.weight/t,m==1)if(e.totalAdditiveWeight)P=!0;else return p.currentValue;p.currentValue.decompose(n,a,r)}if(!P){n.scaleInPlace(m),r.scaleInPlace(m),a.scaleInPlace(m);for(var R=f;R<e.animations.length;R++){var A=e.animations[R];if(A.weight!==0){var m=A.weight/t,C=c.c.Vector3[2],M=c.c.Vector3[3],x=c.c.Quaternion[1];A.currentValue.decompose(M,x,C),M.scaleAndAddToRef(m,n),x.scaleAndAddToRef(m,a),C.scaleAndAddToRef(m,r)}}}for(var F=0;F<e.additiveAnimations.length;F++){var A=e.additiveAnimations[F];if(A.weight!==0){var C=c.c.Vector3[2],M=c.c.Vector3[3],x=c.c.Quaternion[1];A.currentValue.decompose(M,x,C),M.multiplyToRef(n,M),c.e.LerpToRef(n,M,A.weight,n),a.multiplyToRef(x,x),c.b.SlerpToRef(a,x,A.weight,a),C.scaleAndAddToRef(A.weight,r)}}var I=p?p._animationState.workValue:c.c.Matrix[0].clone();return c.a.ComposeToRef(n,a,r,I),I},v.a.prototype._processLateAnimationBindingsForQuaternions=function(e,t){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return t;var r=e.animations[0],n=e.originalValue,a=t;if(e.totalWeight===0&&e.totalAdditiveWeight>0)a.copyFrom(n);else if(e.animations.length===1){if(c.b.SlerpToRef(n,r.currentValue,Math.min(1,e.totalWeight),a),e.totalAdditiveWeight===0)return a}else if(e.animations.length>1){var f=1,p=void 0,d=void 0;if(e.totalWeight<1){var m=1-e.totalWeight;p=[],d=[],p.push(n),d.push(m)}else{if(e.animations.length===2&&(c.b.SlerpToRef(e.animations[0].currentValue,e.animations[1].currentValue,e.animations[1].weight/e.totalWeight,t),e.totalAdditiveWeight===0))return t;p=[],d=[],f=e.totalWeight}for(var P=0;P<e.animations.length;P++){var R=e.animations[P];p.push(R.currentValue),d.push(R.weight/f)}for(var A=0,C=0;C<p.length;){if(!C){c.b.SlerpToRef(p[C],p[C+1],d[C+1]/(d[C]+d[C+1]),t),a=t,A=d[C]+d[C+1],C+=2;continue}A+=d[C],c.b.SlerpToRef(a,p[C],d[C]/A,a),C++}}for(var M=0;M<e.additiveAnimations.length;M++){var R=e.additiveAnimations[M];R.weight!==0&&(a.multiplyToRef(R.currentValue,c.c.Quaternion[0]),c.b.SlerpToRef(a,c.c.Quaternion[0],R.weight,a))}return a},v.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var e=0;e<this._registeredForLateAnimationBindings.length;e++){var t=this._registeredForLateAnimationBindings.data[e];for(var r in t._lateAnimationHolders){var n=t._lateAnimationHolders[r],a=n.animations[0],f=n.originalValue,p=l.a.AllowMatrixDecomposeForInterpolation&&f.m,d=t[r];if(p)d=this._processLateAnimationBindingsForMatrices(n);else{var m=f.w!==void 0;if(m)d=this._processLateAnimationBindingsForQuaternions(n,d||c.b.Identity());else{var P=0,R=1;if(n.totalWeight<1)a&&f.scale?d=f.scale(1-n.totalWeight):a?d=f*(1-n.totalWeight):f.clone?d=f.clone():d=f;else if(a){R=n.totalWeight;var A=a.weight/R;A!==1?a.currentValue.scale?d=a.currentValue.scale(A):d=a.currentValue*A:d=a.currentValue,P=1}for(var C=P;C<n.animations.length;C++){var M=n.animations[C],x=M.weight/R;if(x)M.currentValue.scaleAndAddToRef?M.currentValue.scaleAndAddToRef(x,d):d+=M.currentValue*x;else continue}for(var F=0;F<n.additiveAnimations.length;F++){var M=n.additiveAnimations[F],x=M.weight;if(x)M.currentValue.scaleAndAddToRef?M.currentValue.scaleAndAddToRef(x,d):d+=M.currentValue*x;else continue}}}t[r]=d}t._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},h.a.prototype.copyAnimationRange=function(e,t,r,n,a){n===void 0&&(n=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new l.a(this.name,"_matrix",e.animations[0].framePerSecond,l.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var f=e.animations[0].getRange(t);if(!f)return!1;for(var p=f.from,d=f.to,m=e.animations[0].getKeys(),P=e.length,R=e.getParent(),A=this.getParent(),C=n&&R&&P&&this.length&&P!==this.length,M=C&&A&&R?A.length/R.length:1,x=n&&!A&&a&&(a.x!==1||a.y!==1||a.z!==1),F=this.animations[0].getKeys(),I,N,G,V=0,L=m.length;V<L;V++)I=m[V],I.frame>=p&&I.frame<=d&&(n?(G=I.value.clone(),C?(N=G.getTranslation(),G.setTranslation(N.scaleInPlace(M))):x&&a?(N=G.getTranslation(),G.setTranslation(N.multiplyInPlace(a))):G=I.value):G=I.value,F.push({frame:I.frame+r,value:G}));return this.animations[0].createRange(t,p+r,d+r),!0}},532:function(q,H,o){"use strict";var l=o(467),s=o(456);l.a.prototype.createDynamicTexture=function(O,v,c,_){var h=new s.a(this,s.b.Dynamic);return h.baseWidth=O,h.baseHeight=v,c&&(O=this.needPOTTextures?l.a.GetExponentOfTwo(O,this._caps.maxTextureSize):O,v=this.needPOTTextures?l.a.GetExponentOfTwo(v,this._caps.maxTextureSize):v),h.width=O,h.height=v,h.isReady=!1,h.generateMipMaps=c,h.samplingMode=_,this.updateTextureSamplingMode(_,h),this._internalTexturesCache.push(h),h},l.a.prototype.updateDynamicTexture=function(O,v,c,_,h,i){if(_===void 0&&(_=!1),i===void 0&&(i=!1),!!O){var e=this._gl,t=e.TEXTURE_2D,r=this._bindTextureDirectly(t,O,!0,i);this._unpackFlipY(c===void 0?O.invertY:c),_&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var n=this._getWebGLTextureType(O.type),a=this._getInternalFormat(h||O.format),f=this._getRGBABufferInternalSizedFormat(O.type,a);e.texImage2D(t,0,f,a,n,v),O.generateMipMaps&&e.generateMipmap(t),r||this._bindTextureDirectly(t,null),_&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),O.isReady=!0}}},533:function(q,H,o){"use strict";o.d(H,"a",function(){return h});var l=o(434),s=o(439),O=o(514),v=o(441),c=o(529),_=o(437),h=function(i){Object(l.d)(e,i);function e(t,r){var n=i.call(this,t,r)||this;return n.directIntensity=1,n.emissiveIntensity=1,n.environmentIntensity=1,n.specularIntensity=1,n.disableBumpMap=!1,n.ambientTextureStrength=1,n.ambientTextureImpactOnAnalyticalLights=e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,n.metallicF0Factor=1,n.metallicReflectanceColor=v.a.White(),n.ambientColor=new v.a(0,0,0),n.albedoColor=new v.a(1,1,1),n.reflectivityColor=new v.a(1,1,1),n.reflectionColor=new v.a(1,1,1),n.emissiveColor=new v.a(0,0,0),n.microSurface=1,n.useLightmapAsShadowmap=!1,n.useAlphaFromAlbedoTexture=!1,n.forceAlphaTest=!1,n.alphaCutOff=.4,n.useSpecularOverAlpha=!0,n.useMicroSurfaceFromReflectivityMapAlpha=!1,n.useRoughnessFromMetallicTextureAlpha=!0,n.useRoughnessFromMetallicTextureGreen=!1,n.useMetallnessFromMetallicTextureBlue=!1,n.useAmbientOcclusionFromMetallicTextureRed=!1,n.useAmbientInGrayScale=!1,n.useAutoMicroSurfaceFromReflectivityMap=!1,n.useRadianceOverAlpha=!0,n.useObjectSpaceNormalMap=!1,n.useParallax=!1,n.useParallaxOcclusion=!1,n.parallaxScaleBias=.05,n.disableLighting=!1,n.forceIrradianceInFragment=!1,n.maxSimultaneousLights=4,n.invertNormalMapX=!1,n.invertNormalMapY=!1,n.twoSidedLighting=!1,n.useAlphaFresnel=!1,n.useLinearAlphaFresnel=!1,n.environmentBRDFTexture=null,n.forceNormalForward=!1,n.enableSpecularAntiAliasing=!1,n.useHorizonOcclusion=!0,n.useRadianceOcclusion=!0,n.unlit=!1,n._environmentBRDFTexture=O.a.GetEnvironmentBRDFTexture(r),n}return Object.defineProperty(e.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(t){this.subSurface.refractionTexture=t,t?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(t){this.subSurface.indexOfRefraction=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(t){this.subSurface.invertRefractionY=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(t){this.subSurface.linkRefractionWithTransparency=t,t&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_PHYSICAL},set:function(t){t!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=c.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_GLTF},set:function(t){t!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=c.a.LIGHTFALLOFF_GLTF:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(t){this._attachImageProcessingConfiguration(t),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(t){this.imageProcessingConfiguration.colorCurvesEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(t){this.imageProcessingConfiguration.colorGradingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(t){this._imageProcessingConfiguration.toneMappingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(t){this._imageProcessingConfiguration.exposure=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(t){this._imageProcessingConfiguration.contrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(t){this._imageProcessingConfiguration.colorGradingTexture=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(t){this._imageProcessingConfiguration.colorCurves=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"PBRMaterial"},e.prototype.clone=function(t){var r=this,n=s.a.Clone(function(){return new e(t,r.getScene())},this);return n.id=t,n.name=t,this.clearCoat.copyTo(n.clearCoat),this.anisotropy.copyTo(n.anisotropy),this.brdf.copyTo(n.brdf),this.sheen.copyTo(n.sheen),this.subSurface.copyTo(n.subSurface),n},e.prototype.serialize=function(){var t=s.a.Serialize(this);return t.customType="BABYLON.PBRMaterial",t.clearCoat=this.clearCoat.serialize(),t.anisotropy=this.anisotropy.serialize(),t.brdf=this.brdf.serialize(),t.sheen=this.sheen.serialize(),t.subSurface=this.subSurface.serialize(),t},e.Parse=function(t,r,n){var a=s.a.Parse(function(){return new e(t.name,r)},t,r,n);return t.clearCoat&&a.clearCoat.parse(t.clearCoat,r,n),t.anisotropy&&a.anisotropy.parse(t.anisotropy,r,n),t.brdf&&a.brdf.parse(t.brdf,r,n),t.sheen&&a.sheen.parse(t.sheen,r,n),t.subSurface&&a.subSurface.parse(t.subSurface,r,n),a},e.PBRMATERIAL_OPAQUE=c.a.PBRMATERIAL_OPAQUE,e.PBRMATERIAL_ALPHATEST=c.a.PBRMATERIAL_ALPHATEST,e.PBRMATERIAL_ALPHABLEND=c.a.PBRMATERIAL_ALPHABLEND,e.PBRMATERIAL_ALPHATESTANDBLEND=c.a.PBRMATERIAL_ALPHATESTANDBLEND,e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=c.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"directIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"specularIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"disableBumpMap",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureStrength",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"opacityTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallic",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"roughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicF0Factor",void 0),Object(l.c)([Object(s.e)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceColor",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurfaceTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"bumpTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty",null)],e.prototype,"lightmapTexture",void 0),Object(l.c)([Object(s.e)("ambient"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientColor",void 0),Object(l.c)([Object(s.e)("albedo"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoColor",void 0),Object(l.c)([Object(s.e)("reflectivity"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityColor",void 0),Object(l.c)([Object(s.e)("reflection"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionColor",void 0),Object(l.c)([Object(s.e)("emissive"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveColor",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurface",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLightmapAsShadowmap",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"useAlphaFromAlbedoTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"forceAlphaTest",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"alphaCutOff",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useSpecularOverAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientInGrayScale",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(l.c)([Object(s.c)()],e.prototype,"usePhysicalLightFalloff",null),Object(l.c)([Object(s.c)()],e.prototype,"useGLTFLightFalloff",null),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOverAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useObjectSpaceNormalMap",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallax",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallaxOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"parallaxScaleBias",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"disableLighting",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceIrradianceInFragment",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"maxSimultaneousLights",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapX",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapY",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"twoSidedLighting",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAlphaFresnel",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLinearAlphaFresnel",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentBRDFTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceNormalForward",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"enableSpecularAntiAliasing",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useHorizonOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],e.prototype,"unlit",void 0),e}(c.a);_.a.RegisteredTypes["BABYLON.PBRMaterial"]=h},534:function(q,H,o){"use strict";var l=o(435),s="postprocessVertexShader",O=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[s]=O;var v={name:s,shader:O}},535:function(q,H,o){"use strict";var l=o(435),s="packingFunctions",O=`vec4 pack(float depth)
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
}`;l.a.IncludesShadersStore[s]=O;var v={name:s,shader:O}},538:function(q,H,o){"use strict";o.d(H,"a",function(){return c});var l=o(434),s=o(442),O=o(458),v=o(574),c=function(_){Object(l.d)(h,_);function h(i,e,t,r,n){var a=this,f=n&&n.generateMipMaps?n.generateMipMaps:!1,p=n&&n.generateDepthTexture?n.generateDepthTexture:!1,d=!n||n.doNotChangeAspectRatio===void 0?!0:n.doNotChangeAspectRatio,m=n&&n.drawOnlyOnFirstAttachmentByDefault?n.drawOnlyOnFirstAttachmentByDefault:!1;if(a=_.call(this,i,e,r,f,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var P=[],R=[];a._initTypes(t,P,R,n);var A=!n||n.generateDepthBuffer===void 0?!0:n.generateDepthBuffer,C=!n||n.generateStencilBuffer===void 0?!1:n.generateStencilBuffer;return a._size=e,a._multiRenderTargetOptions={samplingModes:R,generateMipMaps:f,generateDepthBuffer:A,generateStencilBuffer:C,generateDepthTexture:p,types:P,textureCount:t},a._count=t,a._drawOnlyOnFirstAttachmentByDefault=m,t>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(h.prototype,"isSupported",{get:function(){var i,e;return(e=(i=this._engine)===null||i===void 0?void 0:i.getCaps().drawBuffersExtension)!==null&&e!==void 0?e:!1},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"wrapU",{set:function(i){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapU=i},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"wrapV",{set:function(i){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapV=i},enumerable:!1,configurable:!0}),h.prototype._initTypes=function(i,e,t,r){for(var n=0;n<i;n++)r&&r.types&&r.types[n]!==void 0?e.push(r.types[n]):e.push(r&&r.defaultType?r.defaultType:0),r&&r.samplingModes&&r.samplingModes[n]!==void 0?t.push(r.samplingModes[n]):t.push(s.a.BILINEAR_SAMPLINGMODE)},h.prototype._rebuild=function(i){if(i===void 0&&(i=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),i&&this._createTextures();for(var e=0;e<this._internalTextures.length;e++){var t=this._textures[e];t._texture=this._internalTextures[e]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},h.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},h.prototype._createTextures=function(){this._textures=[];for(var i=0;i<this._internalTextures.length;i++){var e=new s.a(null,this.getScene());e._texture=this._internalTextures[i],this._textures.push(e)}},h.prototype.replaceTexture=function(i,e){i._texture&&(this._textures[e]=i,this._internalTextures[e]=i._texture,e===0&&(this._texture=this._internalTextures[e]))},Object.defineProperty(h.prototype,"samples",{get:function(){return this._samples},set:function(i){this._samples!==i&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,i):this._samples=i)},enumerable:!1,configurable:!0}),h.prototype.resize=function(i){this._size=i,this._rebuild()},h.prototype.updateCount=function(i,e){this._multiRenderTargetOptions.textureCount=i,this._count=i;var t=[],r=[];this._initTypes(i,t,r,e),this._multiRenderTargetOptions.types=t,this._multiRenderTargetOptions.samplingModes=r,this._rebuild(!0)},h.prototype.unbindFrameBuffer=function(i,e){var t=this;i.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){t.onAfterRenderObservable.notifyObservers(e)})},h.prototype.dispose=function(){this.releaseInternalTextures(),_.prototype.dispose.call(this)},h.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var i=this._internalTextures.length-1;i>=0;i--)this._internalTextures[i]!==void 0&&(this._internalTextures[i].dispose(),this._internalTextures.splice(i,1))},h}(O.a)},542:function(q,H,o){"use strict";o.d(H,"a",function(){return _});var l=o(434),s=o(436),O=o(588),v=o(453),c=o(465),_=function(h){Object(l.d)(i,h);function i(e,t,r,n,a,f,p){r===void 0&&(r=null),n===void 0&&(n=null),a===void 0&&(a=null),f===void 0&&(f=null),p===void 0&&(p=null);var d=h.call(this,e,t.getScene())||this;return d.name=e,d.children=new Array,d.animations=new Array,d._index=null,d._absoluteTransform=new s.a,d._invertedAbsoluteTransform=new s.a,d._scalingDeterminant=1,d._worldTransform=new s.a,d._needToDecompose=!0,d._needToCompose=!1,d._linkedTransformNode=null,d._waitingTransformNodeId=null,d._skeleton=t,d._localMatrix=n?n.clone():s.a.Identity(),d._restPose=a||d._localMatrix.clone(),d._bindPose=d._localMatrix.clone(),d._baseMatrix=f||d._localMatrix.clone(),d._index=p,t.bones.push(d),d.setParent(r,!1),(f||n)&&d._updateDifferenceMatrix(),d}return Object.defineProperty(i.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(e){this._localMatrix.copyFrom(e),this._needToDecompose=!0},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"Bone"},i.prototype.getSkeleton=function(){return this._skeleton},i.prototype.getParent=function(){return this._parent},i.prototype.getChildren=function(){return this.children},i.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},i.prototype.setParent=function(e,t){if(t===void 0&&(t=!0),this._parent!==e){if(this._parent){var r=this._parent.children.indexOf(this);r!==-1&&this._parent.children.splice(r,1)}this._parent=e,this._parent&&this._parent.children.push(this),t&&this._updateDifferenceMatrix(),this.markAsDirty()}},i.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},i.prototype.getBaseMatrix=function(){return this._baseMatrix},i.prototype.getRestPose=function(){return this._restPose},i.prototype.setRestPose=function(e){this._restPose.copyFrom(e)},i.prototype.getBindPose=function(){return this._bindPose},i.prototype.setBindPose=function(e){this._bindPose.copyFrom(e)},i.prototype.getWorldMatrix=function(){return this._worldTransform},i.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},i.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},i.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},i.prototype.linkTransformNode=function(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},i.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(i.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.getRotation()},set:function(e){this.setRotation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(e){this.setRotationQuaternion(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"scaling",{get:function(){return this.getScale()},set:function(e){this.setScale(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),i.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=s.e.Zero(),this._localRotation=s.b.Zero(),this._localPosition=s.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},i.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,s.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},i.prototype.updateMatrix=function(e,t,r){t===void 0&&(t=!0),r===void 0&&(r=!0),this._baseMatrix.copyFrom(e),t&&this._updateDifferenceMatrix(),r?(this._needToCompose=!1,this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose()):this.markAsDirty()},i.prototype._updateDifferenceMatrix=function(e,t){if(t===void 0&&(t=!0),e||(e=this._baseMatrix),this._parent?e.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),t)for(var r=0;r<this.children.length;r++)this.children[r]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},i.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},i.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},i.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},i.prototype.translate=function(e,t,r){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix();if(t==c.c.LOCAL)n.addAtIndex(12,e.x),n.addAtIndex(13,e.y),n.addAtIndex(14,e.z);else{var a=null;r&&(a=r.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0],p=i._tmpVecs[0];this._parent?r&&a?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(a,f)):f.copyFrom(this._parent.getAbsoluteTransform()):s.a.IdentityToRef(f),f.setTranslationFromFloats(0,0,0),f.invert(),s.e.TransformCoordinatesToRef(e,f,p),n.addAtIndex(12,p.x),n.addAtIndex(13,p.y),n.addAtIndex(14,p.z)}this._markAsDirtyAndDecompose()},i.prototype.setPosition=function(e,t,r){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix();if(t==c.c.LOCAL)n.setTranslationFromFloats(e.x,e.y,e.z);else{var a=null;r&&(a=r.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0],p=i._tmpVecs[0];this._parent?(r&&a?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(a,f)):f.copyFrom(this._parent.getAbsoluteTransform()),f.invert()):s.a.IdentityToRef(f),s.e.TransformCoordinatesToRef(e,f,p),n.setTranslationFromFloats(p.x,p.y,p.z)}this._markAsDirtyAndDecompose()},i.prototype.setAbsolutePosition=function(e,t){this.setPosition(e,c.c.WORLD,t)},i.prototype.scale=function(e,t,r,n){n===void 0&&(n=!1);var a=this.getLocalMatrix(),f=i._tmpMats[0];s.a.ScalingToRef(e,t,r,f),f.multiplyToRef(a,a),f.invert();for(var p=0,d=this.children;p<d.length;p++){var m=d[p],P=m.getLocalMatrix();P.multiplyToRef(f,P),P.multiplyAtIndex(12,e),P.multiplyAtIndex(13,t),P.multiplyAtIndex(14,r),m._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),n)for(var R=0,A=this.children;R<A.length;R++){var m=A[R];m.scale(e,t,r,n)}},i.prototype.setScale=function(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()},i.prototype.getScale=function(){return this._decompose(),this._localScaling},i.prototype.getScaleToRef=function(e){this._decompose(),e.copyFrom(this._localScaling)},i.prototype.setYawPitchRoll=function(e,t,r,n,a){if(n===void 0&&(n=c.c.LOCAL),n===c.c.LOCAL){var f=i._tmpQuat;s.b.RotationYawPitchRollToRef(e,t,r,f),this.setRotationQuaternion(f,n,a);return}var p=i._tmpMats[0];if(!!this._getNegativeRotationToRef(p,a)){var d=i._tmpMats[1];s.a.RotationYawPitchRollToRef(e,t,r,d),p.multiplyToRef(d,d),this._rotateWithMatrix(d,n,a)}},i.prototype.rotate=function(e,t,r,n){r===void 0&&(r=c.c.LOCAL);var a=i._tmpMats[0];a.setTranslationFromFloats(0,0,0),s.a.RotationAxisToRef(e,t,a),this._rotateWithMatrix(a,r,n)},i.prototype.setAxisAngle=function(e,t,r,n){if(r===void 0&&(r=c.c.LOCAL),r===c.c.LOCAL){var a=i._tmpQuat;s.b.RotationAxisToRef(e,t,a),this.setRotationQuaternion(a,r,n);return}var f=i._tmpMats[0];if(!!this._getNegativeRotationToRef(f,n)){var p=i._tmpMats[1];s.a.RotationAxisToRef(e,t,p),f.multiplyToRef(p,p),this._rotateWithMatrix(p,r,n)}},i.prototype.setRotation=function(e,t,r){t===void 0&&(t=c.c.LOCAL),this.setYawPitchRoll(e.y,e.x,e.z,t,r)},i.prototype.setRotationQuaternion=function(e,t,r){if(t===void 0&&(t=c.c.LOCAL),t===c.c.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}var n=i._tmpMats[0];if(!!this._getNegativeRotationToRef(n,r)){var a=i._tmpMats[1];s.a.FromQuaternionToRef(e,a),n.multiplyToRef(a,a),this._rotateWithMatrix(a,t,r)}},i.prototype.setRotationMatrix=function(e,t,r){if(t===void 0&&(t=c.c.LOCAL),t===c.c.LOCAL){var n=i._tmpQuat;s.b.FromRotationMatrixToRef(e,n),this.setRotationQuaternion(n,t,r);return}var a=i._tmpMats[0];if(!!this._getNegativeRotationToRef(a,r)){var f=i._tmpMats[1];f.copyFrom(e),a.multiplyToRef(e,f),this._rotateWithMatrix(f,t,r)}},i.prototype._rotateWithMatrix=function(e,t,r){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix(),a=n.m[12],f=n.m[13],p=n.m[14],d=this.getParent(),m=i._tmpMats[3],P=i._tmpMats[4];d&&t==c.c.WORLD?(r?(m.copyFrom(r.getWorldMatrix()),d.getAbsoluteTransform().multiplyToRef(m,m)):m.copyFrom(d.getAbsoluteTransform()),P.copyFrom(m),P.invert(),n.multiplyToRef(m,n),n.multiplyToRef(e,n),n.multiplyToRef(P,n)):t==c.c.WORLD&&r?(m.copyFrom(r.getWorldMatrix()),P.copyFrom(m),P.invert(),n.multiplyToRef(m,n),n.multiplyToRef(e,n),n.multiplyToRef(P,n)):n.multiplyToRef(e,n),n.setTranslationFromFloats(a,f,p),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},i.prototype._getNegativeRotationToRef=function(e,t){var r=i._tmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),t&&(e.multiplyToRef(t.getWorldMatrix(),e),s.a.ScalingToRef(t.scaling.x,t.scaling.y,t.scaling.z,r)),e.invert(),isNaN(e.m[0])?!1:(r.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(r,e),!0)},i.prototype.getPosition=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var r=s.e.Zero();return this.getPositionToRef(e,t,r),r},i.prototype.getPositionToRef=function(e,t,r){if(e===void 0&&(e=c.c.LOCAL),e==c.c.LOCAL){var n=this.getLocalMatrix();r.x=n.m[12],r.y=n.m[13],r.z=n.m[14]}else{var a=null;t&&(a=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0];t&&a?(f.copyFrom(this.getAbsoluteTransform()),f.multiplyToRef(a,f)):f=this.getAbsoluteTransform(),r.x=f.m[12],r.y=f.m[13],r.z=f.m[14]}},i.prototype.getAbsolutePosition=function(e){e===void 0&&(e=null);var t=s.e.Zero();return this.getPositionToRef(c.c.WORLD,e,t),t},i.prototype.getAbsolutePositionToRef=function(e,t){this.getPositionToRef(c.c.WORLD,e,t)},i.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var e=this._skeleton.getPoseMatrix();e&&this._absoluteTransform.multiplyToRef(e,this._absoluteTransform)}for(var t=this.children,r=t.length,n=0;n<r;n++)t[n].computeAbsoluteTransforms()},i.prototype.getDirection=function(e,t){t===void 0&&(t=null);var r=s.e.Zero();return this.getDirectionToRef(e,t,r),r},i.prototype.getDirectionToRef=function(e,t,r){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),t&&n&&a.multiplyToRef(n,a),s.e.TransformNormalToRef(e,a,r),r.normalize()},i.prototype.getRotation=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var r=s.e.Zero();return this.getRotationToRef(e,t,r),r},i.prototype.getRotationToRef=function(e,t,r){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var n=i._tmpQuat;this.getRotationQuaternionToRef(e,t,n),n.toEulerAnglesToRef(r)},i.prototype.getRotationQuaternion=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var r=s.b.Identity();return this.getRotationQuaternionToRef(e,t,r),r},i.prototype.getRotationQuaternionToRef=function(e,t,r){if(e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null),e==c.c.LOCAL)this._decompose(),r.copyFrom(this._localRotation);else{var n=i._tmpMats[0],a=this.getAbsoluteTransform();t?a.multiplyToRef(t.getWorldMatrix(),n):n.copyFrom(a),n.multiplyAtIndex(0,this._scalingDeterminant),n.multiplyAtIndex(1,this._scalingDeterminant),n.multiplyAtIndex(2,this._scalingDeterminant),n.decompose(void 0,r,void 0)}},i.prototype.getRotationMatrix=function(e,t){e===void 0&&(e=c.c.LOCAL);var r=s.a.Identity();return this.getRotationMatrixToRef(e,t,r),r},i.prototype.getRotationMatrixToRef=function(e,t,r){if(e===void 0&&(e=c.c.LOCAL),e==c.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(r);else{var n=i._tmpMats[0],a=this.getAbsoluteTransform();t?a.multiplyToRef(t.getWorldMatrix(),n):n.copyFrom(a),n.multiplyAtIndex(0,this._scalingDeterminant),n.multiplyAtIndex(1,this._scalingDeterminant),n.multiplyAtIndex(2,this._scalingDeterminant),n.getRotationMatrixToRef(r)}},i.prototype.getAbsolutePositionFromLocal=function(e,t){t===void 0&&(t=null);var r=s.e.Zero();return this.getAbsolutePositionFromLocalToRef(e,t,r),r},i.prototype.getAbsolutePositionFromLocalToRef=function(e,t,r){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];t&&n?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(n,a)):a=this.getAbsoluteTransform(),s.e.TransformCoordinatesToRef(e,a,r)},i.prototype.getLocalPositionFromAbsolute=function(e,t){t===void 0&&(t=null);var r=s.e.Zero();return this.getLocalPositionFromAbsoluteToRef(e,t,r),r},i.prototype.getLocalPositionFromAbsoluteToRef=function(e,t,r){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),t&&n&&a.multiplyToRef(n,a),a.invert(),s.e.TransformCoordinatesToRef(e,a,r)},i.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},i._tmpVecs=O.a.BuildArray(2,s.e.Zero),i._tmpQuat=s.b.Identity(),i._tmpMats=O.a.BuildArray(5,s.a.Identity),i}(v.a)},545:function(q,H,o){"use strict";o.d(H,"a",function(){return c});var l=o(444),s=o(625),O=o(500),v=o(566),c=function(){function _(){}return _.ExpandRGBDTexture=function(h){var i=h._texture;if(!(!i||!h.isRGBD)){var e=i.getEngine(),t=e.getCaps(),r=!1;t.textureHalfFloatRender&&t.textureHalfFloatLinearFiltering?(r=!0,i.type=2):t.textureFloatRender&&t.textureFloatLinearFiltering&&(r=!0,i.type=1),r&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),h.onLoadObservable.addOnce(function(){if(r){var n=new l.a("rgbdDecode","rgbdDecode",null,null,1,null,3,e,!1,void 0,i.type,void 0,null,!1),a=e.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});n.getEffect().executeWhenCompiled(function(){n.onApply=function(f){f._bindTexture("textureSampler",i),f.setFloat2("scale",1,1)},h.getScene().postProcessManager.directRender([n],a,!0),e.restoreDefaultFramebuffer(),e._releaseTexture(i),e._releaseFramebufferObjects(a),n&&n.dispose(),a._swapAndDie(i),i.isReady=!0})}})}},_.EncodeTextureToRGBD=function(h,i,e){return e===void 0&&(e=0),v.a.ApplyPostProcess("rgbdEncode",h,i,e,1,5)},_}()},547:function(q,H,o){"use strict";o.d(H,"a",function(){return v});var l=o(449),s=o(452),O=o(502);Object.defineProperty(l.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(c){c&&c.isSupported&&(this._geometryBufferRenderer=c)},enumerable:!0,configurable:!0}),l.a.prototype.enableGeometryBufferRenderer=function(c){return c===void 0&&(c=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new O.a(this,c),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},l.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var v=function(){function c(_){this.name=s.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=_}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(s.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){},c.prototype._gatherRenderTargets=function(_){this.scene._geometryBufferRenderer&&_.push(this.scene._geometryBufferRenderer.getGBuffer())},c}();O.a._SceneComponentInitialization=function(c){var _=c._getComponent(s.a.NAME_GEOMETRYBUFFERRENDERER);_||(_=new v(c),c._addComponent(_))}},548:function(q,H,o){"use strict";o.d(H,"a",function(){return l});var l=function(){function s(){this._renderPipelines={}}return Object.defineProperty(s.prototype,"supportedPipelines",{get:function(){var O=[];for(var v in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(v)){var c=this._renderPipelines[v];c.isSupported&&O.push(c)}return O},enumerable:!1,configurable:!0}),s.prototype.addPipeline=function(O){this._renderPipelines[O._name]=O},s.prototype.attachCamerasToRenderPipeline=function(O,v,c){c===void 0&&(c=!1);var _=this._renderPipelines[O];!_||_._attachCameras(v,c)},s.prototype.detachCamerasFromRenderPipeline=function(O,v){var c=this._renderPipelines[O];!c||c._detachCameras(v)},s.prototype.enableEffectInPipeline=function(O,v,c){var _=this._renderPipelines[O];!_||_._enableEffect(v,c)},s.prototype.disableEffectInPipeline=function(O,v,c){var _=this._renderPipelines[O];!_||_._disableEffect(v,c)},s.prototype.update=function(){for(var O in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(O)){var v=this._renderPipelines[O];v.isSupported?v._update():(v.dispose(),delete this._renderPipelines[O])}},s.prototype._rebuild=function(){for(var O in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(O)){var v=this._renderPipelines[O];v._rebuild()}},s.prototype.dispose=function(){for(var O in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(O)){var v=this._renderPipelines[O];v.dispose()}},s}()},549:function(q,H,o){"use strict";o.d(H,"a",function(){return s});const l=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>l()?"webgl2":"webgl"},555:function(q,H,o){"use strict";var l=o(446),s=o(447),O=o(436);l.a.prototype.thinInstanceAdd=function(v,c){c===void 0&&(c=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(v)?v.length:1);var _=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(v))for(var h=0;h<v.length;++h)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v[h],h===v.length-1&&c);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v,c);return _},l.a.prototype.thinInstanceAddSelf=function(v){return v===void 0&&(v=!0),this.thinInstanceAdd(O.a.IdentityReadOnly,v)},l.a.prototype.thinInstanceRegisterAttribute=function(v,c){this.removeVerticesData(v),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[v]=c,this._userThinInstanceBuffersStorage.sizes[v]=c*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[v]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[v]),this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[v],v,!0,!1,c,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])},l.a.prototype.thinInstanceSetMatrixAt=function(v,c,_){if(_===void 0&&(_=!0),!this._thinInstanceDataStorage.matrixData||v>=this._thinInstanceDataStorage.instancesCount)return!1;var h=this._thinInstanceDataStorage.matrixData;return c.copyToArray(h,v*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[v]=c),_&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},l.a.prototype.thinInstanceSetAttributeAt=function(v,c,_,h){return h===void 0&&(h=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[v]||c>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(v,0),this._userThinInstanceBuffersStorage.data[v].set(_,c*this._userThinInstanceBuffersStorage.strides[v]),h&&this.thinInstanceBufferUpdated(v),!0)},Object.defineProperty(l.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(v){var c,_,h=((_=(c=this._thinInstanceDataStorage.matrixData)===null||c===void 0?void 0:c.length)!==null&&_!==void 0?_:0)/16;v<=h&&(this._thinInstanceDataStorage.instancesCount=v)},enumerable:!0,configurable:!0}),l.a.prototype.thinInstanceSetBuffer=function(v,c,_,h){var i,e;if(_===void 0&&(_=0),h===void 0&&(h=!1),_=_||16,v==="matrix")if((i=this._thinInstanceDataStorage.matrixBuffer)===null||i===void 0||i.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=c?c.length:32*_,this._thinInstanceDataStorage.matrixData=c,this._thinInstanceDataStorage.worldMatrices=null,c!==null){this._thinInstanceDataStorage.instancesCount=c.length/_;var t=new s.a(this.getEngine(),c,!h,_,!1,!0);this._thinInstanceDataStorage.matrixBuffer=t,this.setVerticesBuffer(t.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(t.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(t.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(t.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else c===null?((e=this._userThinInstanceBuffersStorage)===null||e===void 0?void 0:e.data[v])&&(this.removeVerticesData(v),delete this._userThinInstanceBuffersStorage.data[v],delete this._userThinInstanceBuffersStorage.strides[v],delete this._userThinInstanceBuffersStorage.sizes[v],delete this._userThinInstanceBuffersStorage.vertexBuffers[v]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[v]=c,this._userThinInstanceBuffersStorage.strides[v]=_,this._userThinInstanceBuffersStorage.sizes[v]=c.length,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),c,v,!h,!1,_,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v]))},l.a.prototype.thinInstanceBufferUpdated=function(v){var c;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((c=this._userThinInstanceBuffersStorage)===null||c===void 0?void 0:c.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(this._userThinInstanceBuffersStorage.data[v],0)},l.a.prototype.thinInstancePartialBufferUpdate=function(v,c,_){var h;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(c,_):((h=this._userThinInstanceBuffersStorage)===null||h===void 0?void 0:h.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(c,_)},l.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var v=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var c=0;c<this._thinInstanceDataStorage.instancesCount;++c)this._thinInstanceDataStorage.worldMatrices[c]=O.a.FromArray(v,c*16)}return this._thinInstanceDataStorage.worldMatrices},l.a.prototype.thinInstanceRefreshBoundingInfo=function(v){if(v===void 0&&(v=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var c=this._thinInstanceDataStorage.boundingVectors;v&&(c.length=0,this.refreshBoundingInfo(!0));var _=this.getBoundingInfo(),h=this._thinInstanceDataStorage.matrixData;if(c.length===0)for(var i=0;i<_.boundingBox.vectors.length;++i)c.push(_.boundingBox.vectors[i].clone());O.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),O.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var e=0;e<this._thinInstanceDataStorage.instancesCount;++e){O.a.FromArrayToRef(h,e*16,O.c.Matrix[0]);for(var i=0;i<c.length;++i)O.e.TransformCoordinatesToRef(c[i],O.c.Matrix[0],O.c.Vector3[2]),O.c.Vector3[0].minimizeInPlace(O.c.Vector3[2]),O.c.Vector3[1].maximizeInPlace(O.c.Vector3[2])}_.reConstruct(O.c.Vector3[0],O.c.Vector3[1]),this._updateBoundingInfo()}},l.a.prototype._thinInstanceUpdateBufferSize=function(v,c){var _,h;c===void 0&&(c=1);var i=v==="matrix";if(!(!i&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[v]))){for(var e=i?16:this._userThinInstanceBuffersStorage.strides[v],t=i?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[v],r=i?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[v],n=(this._thinInstanceDataStorage.instancesCount+c)*e,a=t;a<n;)a*=2;if(!r||t!=a){if(!r)r=new Float32Array(a);else{var f=new Float32Array(a);f.set(r,0),r=f}if(i){(_=this._thinInstanceDataStorage.matrixBuffer)===null||_===void 0||_.dispose();var p=new s.a(this.getEngine(),r,!0,e,!1,!0);this._thinInstanceDataStorage.matrixBuffer=p,this._thinInstanceDataStorage.matrixData=r,this._thinInstanceDataStorage.matrixBufferSize=a,this.setVerticesBuffer(p.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(p.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(p.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(p.createVertexBuffer("world3",12,4))}else(h=this._userThinInstanceBuffersStorage.vertexBuffers[v])===null||h===void 0||h.dispose(),this._userThinInstanceBuffersStorage.data[v]=r,this._userThinInstanceBuffersStorage.sizes[v]=a,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),r,v,!0,!1,e,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])}}},l.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},l.a.prototype._disposeThinInstanceSpecificData=function(){var v;((v=this._thinInstanceDataStorage)===null||v===void 0?void 0:v.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},566:function(q,H,o){"use strict";o.d(H,"a",function(){return c});var l=o(442),s=o(458),O=o(486),v=o(444),c=function(){function _(){}return _.CreateResizedCopy=function(h,i,e,t){t===void 0&&(t=!0);var r=h.getScene(),n=r.getEngine(),a=new s.a("resized"+h.name,{width:i,height:e},r,!h.noMipmap,!0,h._texture.type,!1,h.samplingMode,!1);a.wrapU=h.wrapU,a.wrapV=h.wrapV,a.uOffset=h.uOffset,a.vOffset=h.vOffset,a.uScale=h.uScale,a.vScale=h.vScale,a.uAng=h.uAng,a.vAng=h.vAng,a.wAng=h.wAng,a.coordinatesIndex=h.coordinatesIndex,a.level=h.level,a.anisotropicFilteringLevel=h.anisotropicFilteringLevel,a._texture.isReady=!1,h.wrapU=l.a.CLAMP_ADDRESSMODE,h.wrapV=l.a.CLAMP_ADDRESSMODE;var f=new O.b("pass",1,null,t?l.a.BILINEAR_SAMPLINGMODE:l.a.NEAREST_SAMPLINGMODE,n,!1,0);return f.getEffect().executeWhenCompiled(function(){f.onApply=function(d){d.setTexture("textureSampler",h)};var p=a.getInternalTexture();p&&(r.postProcessManager.directRender([f],p),n.unBindFramebuffer(p),a.disposeFramebufferObjects(),f.dispose(),p.isReady=!0)}),a},_.ApplyPostProcess=function(h,i,e,t,r,n){var a=i.getEngine();return i.isReady=!1,r=r!=null?r:i.samplingMode,t=t!=null?t:i.type,n=n!=null?n:i.format,t===-1&&(t=0),new Promise(function(f){var p=new v.a("postprocess",h,null,null,1,null,r,a,!1,void 0,t,void 0,null,!1,n),d=a.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:r,type:t,format:n});p.getEffect().executeWhenCompiled(function(){p.onApply=function(m){m._bindTexture("textureSampler",i),m.setFloat2("scale",1,1)},e.postProcessManager.directRender([p],d,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(i),a._releaseFramebufferObjects(d),p&&p.dispose(),d._swapAndDie(i),i.type=t,i.format=5,i.isReady=!0,f(i)})})},_}()},570:function(q,H,o){"use strict";o.d(H,"b",function(){return i}),o.d(H,"a",function(){return e});var l=o(434),s=o(436),O=o(442),v=o(466),c=o(582),_=o(580),h=o(583),i;(function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"})(i||(i={}));var e=function(t){Object(l.d)(r,t);function r(n,a,f,p,d){f===void 0&&(f=i.Low),p===void 0&&(p=0),d===void 0&&(d=!1);var m=t.call(this,n.getEngine(),"depth of field",function(){return m._effects},!0)||this;m._effects=[],m._circleOfConfusion=new c.a("circleOfConfusion",a,1,null,O.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d),m._depthOfFieldBlurY=[],m._depthOfFieldBlurX=[];var P=1,R=15;switch(f){case i.High:{P=3,R=51;break}case i.Medium:{P=2,R=31;break}default:{R=15,P=1;break}}for(var A=R/Math.pow(2,P-1),C=1,M=0;M<P;M++){var x=new _.a("vertical blur",n,new s.d(0,1),A,C,null,m._circleOfConfusion,M==0?m._circleOfConfusion:null,O.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d);x.autoClear=!1,C=.75/Math.pow(2,M);var F=new _.a("horizontal blur",n,new s.d(1,0),A,C,null,m._circleOfConfusion,null,O.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d);F.autoClear=!1,m._depthOfFieldBlurY.push(x),m._depthOfFieldBlurX.push(F)}m._effects=[m._circleOfConfusion];for(var M=0;M<m._depthOfFieldBlurX.length;M++)m._effects.push(m._depthOfFieldBlurY[M]),m._effects.push(m._depthOfFieldBlurX[M]);return m._dofMerge=new h.a("dofMerge",m._circleOfConfusion,m._circleOfConfusion,m._depthOfFieldBlurX,C,null,O.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d),m._dofMerge.autoClear=!1,m._effects.push(m._dofMerge),m}return Object.defineProperty(r.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(n){this._circleOfConfusion.focalLength=n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(n){this._circleOfConfusion.fStop=n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(n){this._circleOfConfusion.focusDistance=n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(n){this._circleOfConfusion.lensSize=n},enumerable:!1,configurable:!0}),r.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(r.prototype,"depthTexture",{set:function(n){this._circleOfConfusion.depthTexture=n},enumerable:!1,configurable:!0}),r.prototype.disposeEffects=function(n){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(n)},r.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},r.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},r}(v.a)},571:function(q,H,o){"use strict";o.d(H,"a",function(){return p});var l=o(434),s=o(440),O=o(436),v=o(444),c=o(502),_=function(){function d(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return d}(),h=o(530),i=o(547),e=o(435),t="motionBlurPixelShader",r=`
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
`;e.a.ShadersStore[t]=r;var n={name:t,shader:r},a=o(439),f=o(437),p=function(d){Object(l.d)(m,d);function m(P,R,A,C,M,x,F,I,N,G){I===void 0&&(I=0),N===void 0&&(N=!1),G===void 0&&(G=!1);var V=d.call(this,P,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],A,C,M,x,F,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,I,void 0,null,N)||this;return V.motionStrength=1,V._motionBlurSamples=32,V._isObjectBased=!0,V._forceGeometryBuffer=!1,V._geometryBufferRenderer=null,V._prePassRenderer=null,V._invViewProjection=null,V._previousViewProjection=null,V._forceGeometryBuffer=G,V._forceGeometryBuffer?(V._geometryBufferRenderer=R.enableGeometryBufferRenderer(),V._geometryBufferRenderer&&(V._geometryBufferRenderer.enableVelocity=!0)):(V._prePassRenderer=R.enablePrePassRenderer(),V._prePassRenderer&&(V._prePassRenderer.markAsDirty(),V._prePassEffectConfiguration=new _)),V._applyMode(),V}return Object.defineProperty(m.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(P){this._motionBlurSamples=P,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(P){this._isObjectBased!==P&&(this._isObjectBased=P,this._applyMode())},enumerable:!1,configurable:!0}),m.prototype.getClassName=function(){return"MotionBlurPostProcess"},m.prototype.excludeSkinnedMesh=function(P){if(P.skeleton){var R=void 0;if(this._geometryBufferRenderer)R=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)R=this._prePassRenderer.excludedSkinnedMesh;else return;R.push(P)}},m.prototype.removeExcludedSkinnedMesh=function(P){if(P.skeleton){var R=void 0;if(this._geometryBufferRenderer)R=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)R=this._prePassRenderer.excludedSkinnedMesh;else return;var A=R.indexOf(P);A!==-1&&R.splice(A,1)}},m.prototype.dispose=function(P){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),d.prototype.dispose.call(this,P)},m.prototype._applyMode=function(){var P=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return s.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(R){return P._onApplyObjectBased(R)}):(this._invViewProjection=O.a.Identity(),this._previousViewProjection=O.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(R){return P._onApplyScreenBased(R)})},m.prototype._onApplyObjectBased=function(P){if(P.setVector2("screenSize",new O.d(this.width,this.height)),P.setFloat("motionScale",this._scene.getAnimationRatio()),P.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var R=this._geometryBufferRenderer.getTextureIndex(c.a.VELOCITY_TEXTURE_TYPE);P.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[R])}else if(this._prePassRenderer){var R=this._prePassRenderer.getIndex(2);P.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[R])}},m.prototype._onApplyScreenBased=function(P){var R=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(R.invertToRef(this._invViewProjection),P.setMatrix("inverseViewProjection",this._invViewProjection),P.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=R,P.setVector2("screenSize",new O.d(this.width,this.height)),P.setFloat("motionScale",this._scene.getAnimationRatio()),P.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var A=this._geometryBufferRenderer.getTextureIndex(c.a.DEPTH_TEXTURE_TYPE);P.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[A])}else if(this._prePassRenderer){var A=this._prePassRenderer.getIndex(5);P.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[A])}},m.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var P=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(P.join(`
`))}},m._Parse=function(P,R,A,C){return a.a.Parse(function(){return new m(P.name,A,P.options,R,P.renderTargetSamplingMode,A.getEngine(),P.reusable,P.textureType,!1)},P,A,C)},Object(l.c)([Object(a.c)()],m.prototype,"motionStrength",void 0),Object(l.c)([Object(a.c)()],m.prototype,"motionBlurSamples",null),Object(l.c)([Object(a.c)()],m.prototype,"isObjectBased",null),m}(v.a);f.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=p},572:function(q,H,o){"use strict";o.d(H,"a",function(){return t});var l=o(436),s=o(441),O=o(483),v=o(700),c=Object.freeze(new l.b(0,0,0,0)),_=Object.freeze(l.e.Zero()),h=Object.freeze(l.d.Zero()),i=Object.freeze(v.a.Zero()),e=Object.freeze(s.a.Black()),t=function(){function r(n,a,f,p){var d=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=n,this._scene=f,this._host=p,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===O.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=l.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var m={frame:0,value:this._minValue};this._keys.splice(0,0,m)}if(this._target instanceof Array){for(var P=0,R=0,A=this._target;R<A.length;R++){var C=A[R];this._preparePath(C,P),this._getOriginalValues(P),P++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var M=a.getEvents();M&&M.length>0&&M.forEach(function(x){d._events.push(x._clone())}),this._enableBlending=n&&n.animationPropertiesOverride?n.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(r.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),r.prototype._preparePath=function(n,a){a===void 0&&(a=0);var f=this._animation.targetPropertyPath;if(f.length>1){for(var p=n[f[0]],d=1;d<f.length-1;d++)p=p[f[d]];this._targetPath=f[f.length-1],this._activeTargets[a]=p}else this._targetPath=f[0],this._activeTargets[a]=n},Object.defineProperty(r.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),r.prototype.reset=function(n){if(n===void 0&&(n=!1),n)if(this._target instanceof Array)for(var a=0,f=0,p=this._target;f<p.length;f++){var d=p[f];this._originalValue[a]!==void 0&&this._setValue(d,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},r.prototype.isStopped=function(){return this._stopped},r.prototype.dispose=function(){var n=this._animation.runtimeAnimations.indexOf(this);n>-1&&this._animation.runtimeAnimations.splice(n,1)},r.prototype.setValue=function(n,a){if(this._targetIsArray){for(var f=0;f<this._target.length;f++){var p=this._target[f];this._setValue(p,this._activeTargets[f],n,a,f)}return}this._setValue(this._target,this._directTarget,n,a,0)},r.prototype._getOriginalValues=function(n){n===void 0&&(n=0);var a,f=this._activeTargets[n];f.getRestPose&&this._targetPath==="_matrix"?a=f.getRestPose():a=f[this._targetPath],a&&a.clone?this._originalValue[n]=a.clone():this._originalValue[n]=a},r.prototype._setValue=function(n,a,f,p,d){if(this._currentActiveTarget=a,this._weight=p,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var m=a[this._targetPath];m.clone?this._originalBlendValue=m.clone():this._originalBlendValue=m}this._originalBlendValue.m?O.a.AllowMatrixDecomposeForInterpolation?this._currentValue?l.a.DecomposeLerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.DecomposeLerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue?l.a.LerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.Lerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue=O.a._UniversalLerp(this._originalBlendValue,f,this._blendingFactor);var P=n&&n.animationPropertiesOverride?n.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=P}else this._currentValue=f;p!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[d]):a[this._targetPath]=this._currentValue,n.markAsDirty&&n.markAsDirty(this._animation.targetProperty)},r.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},r.prototype.goToFrame=function(n){var a=this._animation.getKeys();n<a[0].frame?n=a[0].frame:n>a[a.length-1].frame&&(n=a[a.length-1].frame);var f=this._events;if(f.length)for(var p=0;p<f.length;p++)f[p].onlyOnce||(f[p].isDone=f[p].frame<n);this._currentFrame=n;var d=this._animation._interpolate(n,this._animationState);this.setValue(d,-1)},r.prototype._prepareForSpeedRatioChange=function(n){var a=this._previousDelay*(this._animation.framePerSecond*n)/1e3;this._ratioOffset=this._previousRatio-a},r.prototype.animate=function(n,a,f,p,d,m){m===void 0&&(m=-1);var P=this._animation,R=P.targetPropertyPath;if(!R||R.length<1)return this._stopped=!0,!1;var A=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(f<this._minFrame||f>this._maxFrame)&&(f=this._maxFrame);var C=f-a,M,x=n*(P.framePerSecond*d)/1e3+this._ratioOffset,F=0;if(this._previousDelay=n,this._previousRatio=x,!p&&f>=a&&x>=C)A=!1,F=P._getKeyValue(this._maxValue);else if(!p&&a>=f&&x<=C)A=!1,F=P._getKeyValue(this._minValue);else if(this._animationState.loopMode!==O.a.ANIMATIONLOOPMODE_CYCLE){var I=f.toString()+a.toString();if(!this._offsetsCache[I]){this._animationState.repeatCount=0,this._animationState.loopMode=O.a.ANIMATIONLOOPMODE_CYCLE;var N=P._interpolate(a,this._animationState),G=P._interpolate(f,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),P.dataType){case O.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[I]=G-N;break;case O.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[I]=G.subtract(N);break;case O.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[I]=G.subtract(N);break;case O.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[I]=G.subtract(N);break;case O.a.ANIMATIONTYPE_SIZE:this._offsetsCache[I]=G.subtract(N);break;case O.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[I]=G.subtract(N);break;default:break}this._highLimitsCache[I]=G}F=this._highLimitsCache[I],M=this._offsetsCache[I]}if(M===void 0)switch(P.dataType){case O.a.ANIMATIONTYPE_FLOAT:M=0;break;case O.a.ANIMATIONTYPE_QUATERNION:M=c;break;case O.a.ANIMATIONTYPE_VECTOR3:M=_;break;case O.a.ANIMATIONTYPE_VECTOR2:M=h;break;case O.a.ANIMATIONTYPE_SIZE:M=i;break;case O.a.ANIMATIONTYPE_COLOR3:M=e}var V;if(this._host&&this._host.syncRoot){var L=this._host.syncRoot,ee=(L.masterFrame-L.fromFrame)/(L.toFrame-L.fromFrame);V=a+(f-a)*ee}else V=A&&C!==0?a+x%C:f;var K=this._events;if((C>0&&this.currentFrame>V||C<0&&this.currentFrame<V)&&(this._onLoop(),K.length))for(var B=0;B<K.length;B++)K[B].onlyOnce||(K[B].isDone=!1);this._currentFrame=V,this._animationState.repeatCount=C===0?0:x/C>>0,this._animationState.highLimitValue=F,this._animationState.offsetValue=M;var Q=P._interpolate(V,this._animationState);if(this.setValue(Q,m),K.length){for(var B=0;B<K.length;B++)if(C>0&&V>=K[B].frame&&K[B].frame>=a||C<0&&V<=K[B].frame&&K[B].frame<=a){var Z=K[B];Z.isDone||(Z.onlyOnce&&(K.splice(B,1),B--),Z.isDone=!0,Z.action(V))}}return A||(this._stopped=!0),A},r}()},574:function(q,H,o){"use strict";var l=o(456),s=o(440),O=o(467);O.a.prototype.restoreSingleAttachment=function(){var v=this._gl;this.bindAttachments([v.BACK])},O.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var v=this._gl;this.bindAttachments([v.COLOR_ATTACHMENT0])},O.a.prototype.buildTextureLayout=function(v){for(var c=this._gl,_=[],h=0;h<v.length;h++)v[h]?_.push(c["COLOR_ATTACHMENT"+h]):_.push(c.NONE);return _},O.a.prototype.bindAttachments=function(v){var c=this._gl;c.drawBuffers(v)},O.a.prototype.clearAttachments=function(v,c,_,h,i){if(v.length!==0){var e=this._gl;e.drawBuffers([v[0]]),this.clear(c,c!==null,h,i);var t=v[0];v[0]=e.NONE,e.drawBuffers(v),this.clear(_,_!==null,!1,!1),v[0]=t}},O.a.prototype.unBindMultiColorAttachmentFramebuffer=function(v,c,_){c===void 0&&(c=!1),this._currentRenderTarget=null;var h=this._gl,i=v[0]._attachments,e=i.length;if(v[0]._MSAAFramebuffer){h.bindFramebuffer(h.READ_FRAMEBUFFER,v[0]._MSAAFramebuffer),h.bindFramebuffer(h.DRAW_FRAMEBUFFER,v[0]._framebuffer);for(var t=0;t<e;t++){for(var r=v[t],n=0;n<e;n++)i[n]=h.NONE;i[t]=h[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],h.readBuffer(i[t]),h.drawBuffers(i),h.blitFramebuffer(0,0,r.width,r.height,0,0,r.width,r.height,h.COLOR_BUFFER_BIT,h.NEAREST)}for(var t=0;t<e;t++)i[t]=h[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"];h.drawBuffers(i)}for(var t=0;t<e;t++){var r=v[t];r.generateMipMaps&&!c&&!r.isCube&&(this._bindTextureDirectly(h.TEXTURE_2D,r,!0),h.generateMipmap(h.TEXTURE_2D),this._bindTextureDirectly(h.TEXTURE_2D,null))}_&&(v[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(v[0]._framebuffer),_()),this._bindUnboundFramebuffer(null)},O.a.prototype.createMultipleRenderTarget=function(v,c,_){_===void 0&&(_=!0);var h=!1,i=!0,e=!1,t=!1,r=1,n=0,a=3,f=new Array,p=new Array;c!==void 0&&(h=c.generateMipMaps===void 0?!1:c.generateMipMaps,i=c.generateDepthBuffer===void 0?!0:c.generateDepthBuffer,e=c.generateStencilBuffer===void 0?!1:c.generateStencilBuffer,t=c.generateDepthTexture===void 0?!1:c.generateDepthTexture,r=c.textureCount||1,c.types&&(f=c.types),c.samplingModes&&(p=c.samplingModes));var d=this._gl,m=d.createFramebuffer();this._bindUnboundFramebuffer(m);for(var P=v.width||v,R=v.height||v,A=[],C=[],M=this._setupFramebufferDepthAttachments(e,i,P,R),x=0;x<r;x++){var F=p[x]||a,I=f[x]||n;(I===1&&!this._caps.textureFloatLinearFiltering||I===2&&!this._caps.textureHalfFloatLinearFiltering)&&(F=1);var N=this._getSamplingParameters(F,h);I===1&&!this._caps.textureFloat&&(I=0,s.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var G=new l.a(this,l.b.MultiRenderTarget),V=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+x:"COLOR_ATTACHMENT"+x+"_WEBGL"];A.push(G),C.push(V),d.activeTexture(d["TEXTURE"+x]),d.bindTexture(d.TEXTURE_2D,G._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,N.mag),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,N.min),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(I),P,R,0,d.RGBA,this._getWebGLTextureType(I),null),d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,V,d.TEXTURE_2D,G._hardwareTexture.underlyingResource,0),h&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(d.TEXTURE_2D,null),G._framebuffer=m,G._depthStencilBuffer=M,G.baseWidth=P,G.baseHeight=R,G.width=P,G.height=R,G.isReady=!0,G.samples=1,G.generateMipMaps=h,G.samplingMode=F,G.type=I,G._generateDepthBuffer=i,G._generateStencilBuffer=e,G._attachments=C,G._textureArray=A,this._internalTexturesCache.push(G)}if(t&&this._caps.depthTextureExtension){var L=new l.a(this,l.b.MultiRenderTarget);d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,L._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this.webGLVersion<2?d.DEPTH_COMPONENT:d.DEPTH_COMPONENT16,P,R,0,d.DEPTH_COMPONENT,d.UNSIGNED_SHORT,null),d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,L._hardwareTexture.underlyingResource,0),L._framebuffer=m,L.baseWidth=P,L.baseHeight=R,L.width=P,L.height=R,L.isReady=!0,L.samples=1,L.generateMipMaps=h,L.samplingMode=d.NEAREST,L._generateDepthBuffer=i,L._generateStencilBuffer=e,A.push(L),this._internalTexturesCache.push(L)}return _&&d.drawBuffers(C),this._bindUnboundFramebuffer(null),this.resetTextureCache(),A},O.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(v,c,_){if(_===void 0&&(_=!0),this.webGLVersion<2||!v)return 1;if(v[0].samples===c)return c;var h=v[0]._attachments.length;if(h===0)return 1;var i=this._gl;c=Math.min(c,this.getCaps().maxMSAASamples),v[0]._depthStencilBuffer&&(i.deleteRenderbuffer(v[0]._depthStencilBuffer),v[0]._depthStencilBuffer=null),v[0]._MSAAFramebuffer&&(i.deleteFramebuffer(v[0]._MSAAFramebuffer),v[0]._MSAAFramebuffer=null);for(var e=0;e<h;e++)v[e]._MSAARenderBuffer&&(i.deleteRenderbuffer(v[e]._MSAARenderBuffer),v[e]._MSAARenderBuffer=null);if(c>1&&i.renderbufferStorageMultisample){var t=i.createFramebuffer();if(!t)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(t);for(var r=this._setupFramebufferDepthAttachments(v[0]._generateStencilBuffer,v[0]._generateDepthBuffer,v[0].width,v[0].height,c),n=[],e=0;e<h;e++){var a=v[e],f=i[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],p=i.createRenderbuffer();if(!p)throw new Error("Unable to create multi sampled framebuffer");i.bindRenderbuffer(i.RENDERBUFFER,p),i.renderbufferStorageMultisample(i.RENDERBUFFER,c,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,f,i.RENDERBUFFER,p),a._MSAAFramebuffer=t,a._MSAARenderBuffer=p,a.samples=c,a._depthStencilBuffer=r,i.bindRenderbuffer(i.RENDERBUFFER,null),n.push(f)}_&&i.drawBuffers(n)}else this._bindUnboundFramebuffer(v[0]._framebuffer);return this._bindUnboundFramebuffer(null),c}},576:function(q,H,o){"use strict";o.d(H,"a",function(){return c});var l=o(451),s=o(452),O=o(516),v=o(468);v.a.AddParser(s.a.NAME_EFFECTLAYER,function(_,h,i,e){if(_.effectLayers){i.effectLayers||(i.effectLayers=new Array);for(var t=0;t<_.effectLayers.length;t++){var r=O.a.Parse(_.effectLayers[t],h,e);i.effectLayers.push(r)}}}),v.a.prototype.removeEffectLayer=function(_){var h=this.effectLayers.indexOf(_);return h!==-1&&this.effectLayers.splice(h,1),h},v.a.prototype.addEffectLayer=function(_){this.effectLayers.push(_)};var c=function(){function _(h){this.name=s.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=h,this._engine=h.getEngine(),h.effectLayers=new Array}return _.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(s.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(s.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(s.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},_.prototype.rebuild=function(){for(var h=this.scene.effectLayers,i=0,e=h;i<e.length;i++){var t=e[i];t._rebuild()}},_.prototype.serialize=function(h){h.effectLayers=[];for(var i=this.scene.effectLayers,e=0,t=i;e<t.length;e++){var r=t[e];r.serialize&&h.effectLayers.push(r.serialize())}},_.prototype.addFromContainer=function(h){var i=this;!h.effectLayers||h.effectLayers.forEach(function(e){i.scene.addEffectLayer(e)})},_.prototype.removeFromContainer=function(h,i){var e=this;!h.effectLayers||h.effectLayers.forEach(function(t){e.scene.removeEffectLayer(t),i&&t.dispose()})},_.prototype.dispose=function(){for(var h=this.scene.effectLayers;h.length;)h[0].dispose()},_.prototype._isReadyForMesh=function(h,i){for(var e=this.scene.effectLayers,t=0,r=e;t<r.length;t++){var n=r[t];if(!!n.hasMesh(h))for(var a=0,f=h.subMeshes;a<f.length;a++){var p=f[a];if(!n.isReady(p,i))return!1}}return!0},_.prototype._renderMainTexture=function(h){this._renderEffects=!1,this._needStencil=!1;var i=!1,e=this.scene.effectLayers;if(e&&e.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var t=0,r=e;t<r.length;t++){var n=r[t];if(n.shouldRender()&&(!n.camera||n.camera.cameraRigMode===l.a.RIG_MODE_NONE&&h===n.camera||n.camera.cameraRigMode!==l.a.RIG_MODE_NONE&&n.camera._rigCameras.indexOf(h)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||n.needStencil();var a=n._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),i=!0)}}this.scene.incrementRenderId()}return i},_.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},_.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},_.prototype._draw=function(h){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var i=this.scene.effectLayers,e=0;e<i.length;e++){var t=i[e];t.renderingGroupId===h&&t.shouldRender()&&t.render()}this._engine.setDepthBuffer(!0)}},_.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},_.prototype._drawRenderingGroup=function(h){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(h)},_}();O.a._SceneComponentInitialization=function(_){var h=_._getComponent(s.a.NAME_EFFECTLAYER);h||(h=new c(_),_._addComponent(h))}},577:function(q,H,o){"use strict";o.d(H,"a",function(){return m});var l=o(434),s=o(439),O=o(436),v=o(447),c=o(442),_=o(458),h=o(459),i=o(472),e=o(516),t=o(468),r=o(437),n=o(445),a=o(441),f=o(646),p=o(647),d=o(576);t.a.prototype.getGlowLayerByName=function(P){for(var R=0;R<this.effectLayers.length;R++)if(this.effectLayers[R].name===P&&this.effectLayers[R].getEffectName()===m.EffectName)return this.effectLayers[R];return null};var m=function(P){Object(l.d)(R,P);function R(A,C,M){var x=P.call(this,A,C)||this;return x._intensity=1,x._includedOnlyMeshes=[],x._excludedMeshes=[],x._meshesUsingTheirOwnMaterials=[],x.neutralColor=new a.b(0,0,0,1),x._options=Object(l.a)({mainTextureRatio:R.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},M),x._init({alphaBlendingMode:1,camera:x._options.camera,mainTextureFixedSize:x._options.mainTextureFixedSize,mainTextureRatio:x._options.mainTextureRatio,renderingGroupId:x._options.renderingGroupId}),x}return Object.defineProperty(R.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(A){this._horizontalBlurPostprocess1.kernel=A,this._verticalBlurPostprocess1.kernel=A,this._horizontalBlurPostprocess2.kernel=A,this._verticalBlurPostprocess2.kernel=A},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"intensity",{get:function(){return this._intensity},set:function(A){this._intensity=A},enumerable:!1,configurable:!0}),R.prototype.getEffectName=function(){return R.EffectName},R.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[v.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},R.prototype._createTextureAndPostProcesses=function(){var A=this,C=this._mainTextureDesiredSize.width,M=this._mainTextureDesiredSize.height;C=this._engine.needPOTTextures?n.a.GetExponentOfTwo(C,this._maxSize):C,M=this._engine.needPOTTextures?n.a.GetExponentOfTwo(M,this._maxSize):M;var x=0;this._engine.getCaps().textureHalfFloatRender?x=2:x=0,this._blurTexture1=new _.a("GlowLayerBlurRTT",{width:C,height:M},this._scene,!1,!0,x),this._blurTexture1.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var F=Math.floor(C/2),I=Math.floor(M/2);this._blurTexture2=new _.a("GlowLayerBlurRTT2",{width:F,height:I},this._scene,!1,!0,x),this._blurTexture2.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new i.a("GlowLayerHBP1",new O.d(1,0),this._options.blurKernelSize/2,{width:C,height:M},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._horizontalBlurPostprocess1.width=C,this._horizontalBlurPostprocess1.height=M,this._horizontalBlurPostprocess1.onApplyObservable.add(function(N){N.setTexture("textureSampler",A._mainTexture)}),this._verticalBlurPostprocess1=new i.a("GlowLayerVBP1",new O.d(0,1),this._options.blurKernelSize/2,{width:C,height:M},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._horizontalBlurPostprocess2=new i.a("GlowLayerHBP2",new O.d(1,0),this._options.blurKernelSize/2,{width:F,height:I},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._horizontalBlurPostprocess2.width=F,this._horizontalBlurPostprocess2.height=I,this._horizontalBlurPostprocess2.onApplyObservable.add(function(N){N.setTexture("textureSampler",A._blurTexture1)}),this._verticalBlurPostprocess2=new i.a("GlowLayerVBP2",new O.d(0,1),this._options.blurKernelSize/2,{width:F,height:I},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,x),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var N=A._blurTexture1.getInternalTexture();if(N){A._scene.postProcessManager.directRender(A._postProcesses1,N,!0);var G=A._blurTexture2.getInternalTexture();G&&A._scene.postProcessManager.directRender(A._postProcesses2,G,!0),A._engine.unBindFramebuffer(G!=null?G:N,!0)}}),this._postProcesses.map(function(N){N.autoClear=!1})},R.prototype.isReady=function(A,C){var M=A.getMaterial(),x=A.getRenderingMesh();if(!M||!x)return!1;var F=M.emissiveTexture;return P.prototype._isReady.call(this,A,C,F)},R.prototype.needStencil=function(){return!1},R.prototype._canRenderMesh=function(A,C){return!0},R.prototype._internalRender=function(A){A.setTexture("textureSampler",this._blurTexture1),A.setTexture("textureSampler2",this._blurTexture2),A.setFloat("offset",this._intensity);var C=this._engine,M=C.getStencilBuffer();C.setStencilBuffer(!1),C.drawElementsType(h.a.TriangleFillMode,0,6),C.setStencilBuffer(M)},R.prototype._setEmissiveTextureAndColor=function(A,C,M){var x=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(A,C,M):M?(this._emissiveTextureAndColor.texture=M.emissiveTexture,this._emissiveTextureAndColor.texture&&(x=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(A,C,M,this._emissiveTextureAndColor.color):M.emissiveColor?this._emissiveTextureAndColor.color.set(M.emissiveColor.r*x,M.emissiveColor.g*x,M.emissiveColor.b*x,M.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},R.prototype._shouldRenderMesh=function(A){return this.hasMesh(A)},R.prototype._addCustomEffectDefines=function(A){A.push("#define GLOW")},R.prototype.addExcludedMesh=function(A){this._excludedMeshes.indexOf(A.uniqueId)===-1&&this._excludedMeshes.push(A.uniqueId)},R.prototype.removeExcludedMesh=function(A){var C=this._excludedMeshes.indexOf(A.uniqueId);C!==-1&&this._excludedMeshes.splice(C,1)},R.prototype.addIncludedOnlyMesh=function(A){this._includedOnlyMeshes.indexOf(A.uniqueId)===-1&&this._includedOnlyMeshes.push(A.uniqueId)},R.prototype.removeIncludedOnlyMesh=function(A){var C=this._includedOnlyMeshes.indexOf(A.uniqueId);C!==-1&&this._includedOnlyMeshes.splice(C,1)},R.prototype.hasMesh=function(A){return P.prototype.hasMesh.call(this,A)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(A.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(A.uniqueId)===-1:!0:!1},R.prototype._useMeshMaterial=function(A){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId)>-1},R.prototype.referenceMeshToUseItsOwnMaterial=function(A){this._meshesUsingTheirOwnMaterials.push(A.uniqueId)},R.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(A){for(var C=this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId);C>=0;)this._meshesUsingTheirOwnMaterials.splice(C,1),C=this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId)},R.prototype._disposeMesh=function(A){this.removeIncludedOnlyMesh(A),this.removeExcludedMesh(A)},R.prototype.getClassName=function(){return"GlowLayer"},R.prototype.serialize=function(){var A=s.a.Serialize(this);A.customType="BABYLON.GlowLayer";var C;if(A.includedMeshes=[],this._includedOnlyMeshes.length)for(C=0;C<this._includedOnlyMeshes.length;C++){var M=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[C]);M&&A.includedMeshes.push(M.id)}if(A.excludedMeshes=[],this._excludedMeshes.length)for(C=0;C<this._excludedMeshes.length;C++){var M=this._scene.getMeshByUniqueID(this._excludedMeshes[C]);M&&A.excludedMeshes.push(M.id)}return A},R.Parse=function(A,C,M){var x=s.a.Parse(function(){return new R(A.name,C,A.options)},A,C,M),F;for(F=0;F<A.excludedMeshes.length;F++){var I=C.getMeshByID(A.excludedMeshes[F]);I&&x.addExcludedMesh(I)}for(F=0;F<A.includedMeshes.length;F++){var I=C.getMeshByID(A.includedMeshes[F]);I&&x.addIncludedOnlyMesh(I)}return x},R.EffectName="GlowLayer",R.DefaultBlurKernelSize=32,R.DefaultTextureRatio=.5,Object(l.c)([Object(s.c)()],R.prototype,"blurKernelSize",null),Object(l.c)([Object(s.c)()],R.prototype,"intensity",null),Object(l.c)([Object(s.c)("options")],R.prototype,"_options",void 0),R}(e.a);r.a.RegisteredTypes["BABYLON.GlowLayer"]=m},578:function(q,H,o){"use strict";o.d(H,"a",function(){return i});var l=o(434),s=o(466),O=o(584),v=o(472),c=o(585),_=o(436),h=o(442),i=function(e){Object(l.d)(t,e);function t(r,n,a,f,p,d){p===void 0&&(p=0),d===void 0&&(d=!1);var m=e.call(this,r.getEngine(),"bloom",function(){return m._effects},!0)||this;return m.bloomScale=n,m._effects=[],m._downscale=new O.a("highlights",1,null,h.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d),m._blurX=new v.a("horizontal blur",new _.d(1,0),10,n,null,h.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,void 0,d),m._blurX.alwaysForcePOT=!0,m._blurX.autoClear=!1,m._blurY=new v.a("vertical blur",new _.d(0,1),10,n,null,h.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,void 0,d),m._blurY.alwaysForcePOT=!0,m._blurY.autoClear=!1,m.kernel=f,m._effects=[m._downscale,m._blurX,m._blurY],m._merge=new c.a("bloomMerge",m._downscale,m._blurY,a,n,null,h.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d),m._merge.autoClear=!1,m._effects.push(m._merge),m}return Object.defineProperty(t.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(r){this._downscale.threshold=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._merge.weight},set:function(r){this._merge.weight=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(r){this._blurX.kernel=r*this.bloomScale,this._blurY.kernel=r*this.bloomScale},enumerable:!1,configurable:!0}),t.prototype.disposeEffects=function(r){for(var n=0;n<this._effects.length;n++)this._effects[n].dispose(r)},t.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},t.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},t}(s.a)},579:function(q,H,o){"use strict";o.d(H,"a",function(){return h});var l=o(434),s=o(436),O=o(444),v=o(600),c=o(437),_=o(439),h=function(i){Object(l.d)(e,i);function e(t,r,n,a,f,p,d,m,P,R){P===void 0&&(P=0),R===void 0&&(R=!1);var A=i.call(this,t,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,f,p,d,m,null,P,void 0,null,R)||this;return A.aberrationAmount=30,A.radialIntensity=0,A.direction=new s.d(.707,.707),A.centerPosition=new s.d(.5,.5),A.screenWidth=r,A.screenHeight=n,A.onApplyObservable.add(function(C){C.setFloat("chromatic_aberration",A.aberrationAmount),C.setFloat("screen_width",r),C.setFloat("screen_height",n),C.setFloat("radialIntensity",A.radialIntensity),C.setFloat2("direction",A.direction.x,A.direction.y),C.setFloat2("centerPosition",A.centerPosition.x,A.centerPosition.y)}),A}return e.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},e._Parse=function(t,r,n,a){return _.a.Parse(function(){return new e(t.name,t.screenWidth,t.screenHeight,t.options,r,t.renderTargetSamplingMode,n.getEngine(),t.reusable,t.textureType,!1)},t,n,a)},Object(l.c)([Object(_.c)()],e.prototype,"aberrationAmount",void 0),Object(l.c)([Object(_.c)()],e.prototype,"radialIntensity",void 0),Object(l.c)([Object(_.c)()],e.prototype,"direction",void 0),Object(l.c)([Object(_.c)()],e.prototype,"centerPosition",void 0),Object(l.c)([Object(_.c)()],e.prototype,"screenWidth",void 0),Object(l.c)([Object(_.c)()],e.prototype,"screenHeight",void 0),e}(O.a);c.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=h},580:function(q,H,o){"use strict";o.d(H,"a",function(){return _});var l=o(434),s=o(442),O=o(472),v=o(437),c=o(439),_=function(h){Object(l.d)(i,h);function i(e,t,r,n,a,f,p,d,m,P,R,A,C){d===void 0&&(d=null),m===void 0&&(m=s.a.BILINEAR_SAMPLINGMODE),A===void 0&&(A=0),C===void 0&&(C=!1);var M=h.call(this,e,r,n,a,f,m=2,P,R,A=0,`#define DOF 1\r
`,C)||this;return M.direction=r,M.onApplyObservable.add(function(x){d!=null&&x.setTextureFromPostProcess("textureSampler",d),x.setTextureFromPostProcessOutput("circleOfConfusionSampler",p),t.activeCamera&&x.setFloat2("cameraMinMaxZ",t.activeCamera.minZ,t.activeCamera.maxZ)}),M}return i.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(l.c)([Object(c.c)()],i.prototype,"direction",void 0),i}(O.a);v.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=_},581:function(q,H,o){"use strict";o.d(H,"a",function(){return r});var l=o(434),s=o(444),O=o(502),v=o(439),c=function(){function n(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return n}(),_=o(435),h="screenSpaceReflectionPixelShader",i=`

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
`;_.a.ShadersStore[h]=i;var e={name:h,shader:i},t=o(437),r=function(n){Object(l.d)(a,n);function a(f,p,d,m,P,R,A,C,M,x){C===void 0&&(C=0),M===void 0&&(M=!1),x===void 0&&(x=!1);var F=n.call(this,f,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],d,m,P,R,A,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,C,void 0,null,M)||this;if(F.threshold=1.2,F.strength=1,F.reflectionSpecularFalloffExponent=3,F.step=1,F.roughnessFactor=.2,F._forceGeometryBuffer=!1,F._enableSmoothReflections=!1,F._reflectionSamples=64,F._smoothSteps=5,F._forceGeometryBuffer=x,F._forceGeometryBuffer){var I=p.enableGeometryBufferRenderer();I&&I.isSupported&&(I.enablePosition=!0,I.enableReflectivity=!0,F._geometryBufferRenderer=I)}else F._prePassRenderer=p.enablePrePassRenderer(),F._prePassRenderer.markAsDirty(),F._prePassEffectConfiguration=new c;return F._updateEffectDefines(),F.onApply=function(N){var G=F._geometryBufferRenderer,V=F._prePassRenderer;if(!(!V&&!G)){if(G){var L=G.getTextureIndex(O.a.POSITION_TEXTURE_TYPE),ee=G.getTextureIndex(O.a.REFLECTIVITY_TEXTURE_TYPE);N.setTexture("normalSampler",G.getGBuffer().textures[1]),N.setTexture("positionSampler",G.getGBuffer().textures[L]),N.setTexture("reflectivitySampler",G.getGBuffer().textures[ee])}else{var L=V.getIndex(1),ee=V.getIndex(3),K=V.getIndex(6);N.setTexture("normalSampler",V.getRenderTarget().textures[K]),N.setTexture("positionSampler",V.getRenderTarget().textures[L]),N.setTexture("reflectivitySampler",V.getRenderTarget().textures[ee])}var B=p.activeCamera;if(!!B){var Q=B.getViewMatrix(!0),Z=B.getProjectionMatrix(!0);N.setMatrix("projection",Z),N.setMatrix("view",Q),N.setFloat("threshold",F.threshold),N.setFloat("reflectionSpecularFalloffExponent",F.reflectionSpecularFalloffExponent),N.setFloat("strength",F.strength),N.setFloat("step",F.step),N.setFloat("roughnessFactor",F.roughnessFactor)}}},F}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(f){f!==this._enableSmoothReflections&&(this._enableSmoothReflections=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(f){f!==this._reflectionSamples&&(this._reflectionSamples=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(f){f!==this._smoothSteps&&(this._smoothSteps=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var f=[];(this._geometryBufferRenderer||this._prePassRenderer)&&f.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&f.push("#define ENABLE_SMOOTH_REFLECTIONS"),f.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),f.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(f.join(`
`))},a._Parse=function(f,p,d,m){return v.a.Parse(function(){return new a(f.name,d,f.options,p,f.renderTargetSamplingMode,d.getEngine(),f.textureType,f.reusable)},f,d,m)},Object(l.c)([Object(v.c)()],a.prototype,"threshold",void 0),Object(l.c)([Object(v.c)()],a.prototype,"strength",void 0),Object(l.c)([Object(v.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(l.c)([Object(v.c)()],a.prototype,"step",void 0),Object(l.c)([Object(v.c)()],a.prototype,"roughnessFactor",void 0),Object(l.c)([Object(v.c)()],a.prototype,"enableSmoothReflections",null),Object(l.c)([Object(v.c)()],a.prototype,"reflectionSamples",null),Object(l.c)([Object(v.c)()],a.prototype,"smoothSteps",null),a}(s.a);t.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=r},582:function(q,H,o){"use strict";o.d(H,"a",function(){return t});var l=o(434),s=o(444),O=o(440),v=o(435),c="circleOfConfusionPixelShader",_=`
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
`;v.a.ShadersStore[c]=_;var h={name:c,shader:_},i=o(437),e=o(439),t=function(r){Object(l.d)(n,r);function n(a,f,p,d,m,P,R,A,C){A===void 0&&(A=0),C===void 0&&(C=!1);var M=r.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],p,d,m,P,R,null,A,void 0,null,C)||this;return M.lensSize=50,M.fStop=1.4,M.focusDistance=2e3,M.focalLength=50,M._depthTexture=null,M._depthTexture=f,M.onApplyObservable.add(function(x){if(!M._depthTexture){O.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}x.setTexture("depthSampler",M._depthTexture);var F=M.lensSize/M.fStop,I=F*M.focalLength/(M.focusDistance-M.focalLength);x.setFloat("focusDistance",M.focusDistance),x.setFloat("cocPrecalculation",I),x.setFloat2("cameraMinMaxZ",M._depthTexture.activeCamera.minZ,M._depthTexture.activeCamera.maxZ)}),M}return n.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(n.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(l.c)([Object(e.c)()],n.prototype,"lensSize",void 0),Object(l.c)([Object(e.c)()],n.prototype,"fStop",void 0),Object(l.c)([Object(e.c)()],n.prototype,"focusDistance",void 0),Object(l.c)([Object(e.c)()],n.prototype,"focalLength",void 0),n}(s.a);i.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=t},583:function(q,H,o){"use strict";o.d(H,"b",function(){return h}),o.d(H,"a",function(){return i});var l=o(434),s=o(444),O=o(435),v="depthOfFieldMergePixelShader",c=`uniform sampler2D textureSampler;
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
`;O.a.ShadersStore[v]=c;var _={name:v,shader:c},h=function(){function e(){}return e}(),i=function(e){Object(l.d)(t,e);function t(r,n,a,f,p,d,m,P,R,A,C){A===void 0&&(A=0),C===void 0&&(C=!1);var M=e.call(this,r,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],p,d,m,P,R,null,A,void 0,null,!0)||this;return M.blurSteps=f,M.onApplyObservable.add(function(x){x.setTextureFromPostProcess("textureSampler",n),x.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),f.forEach(function(F,I){x.setTextureFromPostProcessOutput("blurStep"+(f.length-I-1),F)})}),C||M.updateEffect(),M}return t.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},t.prototype.updateEffect=function(r,n,a,f,p,d){r===void 0&&(r=null),n===void 0&&(n=null),a===void 0&&(a=null),r||(r="",r+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),e.prototype.updateEffect.call(this,r,n,a,f,p,d)},t}(s.a)},584:function(q,H,o){"use strict";o.d(H,"a",function(){return r});var l=o(434),s=o(444),O=o(515),v=o(435),c=o(457),_="extractHighlightsPixelShader",h=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;v.a.ShadersStore[_]=h;var i={name:_,shader:h},e=o(439),t=o(437),r=function(n){Object(l.d)(a,n);function a(f,p,d,m,P,R,A,C){A===void 0&&(A=0),C===void 0&&(C=!1);var M=n.call(this,f,"extractHighlights",["threshold","exposure"],null,p,d,m,P,R,null,A,void 0,null,C)||this;return M.threshold=.9,M._exposure=1,M._inputPostProcess=null,M.onApplyObservable.add(function(x){M._inputPostProcess&&x.setTextureFromPostProcess("textureSampler",M._inputPostProcess),x.setFloat("threshold",Math.pow(M.threshold,O.b)),x.setFloat("exposure",M._exposure)}),M}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(l.c)([Object(e.c)()],a.prototype,"threshold",void 0),a}(s.a);t.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=r},585:function(q,H,o){"use strict";o.d(H,"a",function(){return e});var l=o(434),s=o(444),O=o(435),v="bloomMergePixelShader",c=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;O.a.ShadersStore[v]=c;var _={name:v,shader:c},h=o(437),i=o(439),e=function(t){Object(l.d)(r,t);function r(n,a,f,p,d,m,P,R,A,C,M){C===void 0&&(C=0),M===void 0&&(M=!1);var x=t.call(this,n,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],d,m,P,R,A,null,C,void 0,null,!0)||this;return x.weight=1,x.weight=p,x.onApplyObservable.add(function(F){F.setTextureFromPostProcess("textureSampler",a),F.setTextureFromPostProcessOutput("bloomBlur",f),F.setFloat("bloomWeight",x.weight)}),M||x.updateEffect(),x}return r.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(l.c)([Object(i.c)()],r.prototype,"weight",void 0),r}(s.a);h.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=e},586:function(q,H,o){"use strict";o.d(H,"a",function(){return t});var l=o(434),s=o(444),O=o(435),v=o(457),c="grainPixelShader",_=`#include<helperFunctions>

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
}`;O.a.ShadersStore[c]=_;var h={name:c,shader:_},i=o(437),e=o(439),t=function(r){Object(l.d)(n,r);function n(a,f,p,d,m,P,R,A){R===void 0&&(R=0),A===void 0&&(A=!1);var C=r.call(this,a,"grain",["intensity","animatedSeed"],[],f,p,d,m,P,null,R,void 0,null,A)||this;return C.intensity=30,C.animated=!1,C.onApplyObservable.add(function(M){M.setFloat("intensity",C.intensity),M.setFloat("animatedSeed",C.animated?Math.random()+1:1)}),C}return n.prototype.getClassName=function(){return"GrainPostProcess"},n._Parse=function(a,f,p,d){return e.a.Parse(function(){return new n(a.name,a.options,f,a.renderTargetSamplingMode,p.getEngine(),a.reusable)},a,p,d)},Object(l.c)([Object(e.c)()],n.prototype,"intensity",void 0),Object(l.c)([Object(e.c)()],n.prototype,"animated",void 0),n}(s.a);i.a.RegisteredTypes["BABYLON.GrainPostProcess"]=t},587:function(q,H,o){"use strict";o.d(H,"a",function(){return e});var l=o(434),s=o(444),O=o(435),v="sharpenPixelShader",c=`
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
}`;O.a.ShadersStore[v]=c;var _={name:v,shader:c},h=o(437),i=o(439),e=function(t){Object(l.d)(r,t);function r(n,a,f,p,d,m,P,R){P===void 0&&(P=0),R===void 0&&(R=!1);var A=t.call(this,n,"sharpen",["sharpnessAmounts","screenSize"],null,a,f,p,d,m,null,P,void 0,null,R)||this;return A.colorAmount=1,A.edgeAmount=.3,A.onApply=function(C){C.setFloat2("screenSize",A.width,A.height),C.setFloat2("sharpnessAmounts",A.edgeAmount,A.colorAmount)},A}return r.prototype.getClassName=function(){return"SharpenPostProcess"},r._Parse=function(n,a,f,p){return i.a.Parse(function(){return new r(n.name,n.options,a,n.renderTargetSamplingMode,f.getEngine(),n.textureType,n.reusable)},n,f,p)},Object(l.c)([Object(i.c)()],r.prototype,"colorAmount",void 0),Object(l.c)([Object(i.c)()],r.prototype,"edgeAmount",void 0),r}(s.a);h.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=e},594:function(q,H,o){"use strict";o.d(H,"a",function(){return C});var l=o(434),s=o(440),O=o(439),v=o(436),c=o(451),_=o(442),h=o(479),i=o(444),e=o(481),t=o(466),r=o(486),n=o(437),a=o(448),f=function(){function M(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return M}(),p=o(482),d=o(435),m="ssao2PixelShader",P=`
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
`;d.a.ShadersStore[m]=P;var R={name:m,shader:P},A=o(601),C=function(M){Object(l.d)(x,M);function x(F,I,N,G,V){V===void 0&&(V=!1);var L=M.call(this,I.getEngine(),F)||this;if(L.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",L.SSAORenderEffect="SSAORenderEffect",L.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",L.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",L.SSAOCombineRenderEffect="SSAOCombineRenderEffect",L.totalStrength=1,L.maxZ=100,L.minZAspect=.2,L._samples=8,L._textureSamples=1,L._forceGeometryBuffer=!1,L._expensiveBlur=!0,L.radius=2,L.base=0,L._bits=new Uint32Array(1),L._scene=I,L._ratio=N,L._forceGeometryBuffer=V,!L.isSupported)return s.a.Error("The current engine does not support SSAO 2."),L;var ee=L._ratio.ssaoRatio||N,K=L._ratio.blurRatio||N;return L._forceGeometryBuffer?I.enableGeometryBufferRenderer():L._prePassRenderer=I.enablePrePassRenderer(),L._createRandomTexture(),L._originalColorPostProcess=new r.b("SSAOOriginalSceneColor",1,null,_.a.BILINEAR_SAMPLINGMODE,I.getEngine(),!1),L._originalColorPostProcess.samples=L.textureSamples,L._createSSAOPostProcess(1),L._createBlurPostProcess(ee,K),L._createSSAOCombinePostProcess(K),L.addEffect(new t.a(I.getEngine(),L.SSAOOriginalSceneColorEffect,function(){return L._originalColorPostProcess},!0)),L.addEffect(new t.a(I.getEngine(),L.SSAORenderEffect,function(){return L._ssaoPostProcess},!0)),L.addEffect(new t.a(I.getEngine(),L.SSAOBlurHRenderEffect,function(){return L._blurHPostProcess},!0)),L.addEffect(new t.a(I.getEngine(),L.SSAOBlurVRenderEffect,function(){return L._blurVPostProcess},!0)),L.addEffect(new t.a(I.getEngine(),L.SSAOCombineRenderEffect,function(){return L._ssaoCombinePostProcess},!0)),I.postProcessRenderPipelineManager.addPipeline(L),G&&I.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(F,G),L}return Object.defineProperty(x.prototype,"samples",{get:function(){return this._samples},set:function(F){this._samples=F,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(F){this._textureSamples=F,this._prePassRenderer?this._prePassRenderer.samples=F:this._originalColorPostProcess.samples=F},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(F){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(F?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(F?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=F},enumerable:!1,configurable:!0}),Object.defineProperty(x,"IsSupported",{get:function(){var F=a.a.LastCreatedEngine;return F?F._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),x.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},x.prototype.dispose=function(F){F===void 0&&(F=!1);for(var I=0;I<this._scene.cameras.length;I++){var N=this._scene.cameras[I];this._originalColorPostProcess.dispose(N),this._ssaoPostProcess.dispose(N),this._blurHPostProcess.dispose(N),this._blurVPostProcess.dispose(N),this._ssaoCombinePostProcess.dispose(N)}this._randomTexture.dispose(),F&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),M.prototype.dispose.call(this)},x.prototype._createBlurPostProcess=function(F,I){var N=this;this._samplerOffsets=[];for(var G=this.expensiveBlur,V=-8;V<8;V++)this._samplerOffsets.push(V*2+.5);this._blurHPostProcess=new i.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],F,null,_.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(G?"1":"0")+`
`),this._blurHPostProcess.onApply=function(L){!N._scene.activeCamera||(L.setFloat("outSize",N._ssaoCombinePostProcess.width>0?N._ssaoCombinePostProcess.width:N._originalColorPostProcess.width),L.setFloat("near",N._scene.activeCamera.minZ),L.setFloat("far",N._scene.activeCamera.maxZ),L.setFloat("radius",N.radius),N._forceGeometryBuffer?L.setTexture("depthSampler",N._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):L.setTexture("depthSampler",N._prePassRenderer.getRenderTarget().textures[N._prePassRenderer.getIndex(5)]),L.setArray("samplerOffsets",N._samplerOffsets))},this._blurVPostProcess=new i.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],I,null,_.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(G?"1":"0")+`
`),this._blurVPostProcess.onApply=function(L){!N._scene.activeCamera||(L.setFloat("outSize",N._ssaoCombinePostProcess.height>0?N._ssaoCombinePostProcess.height:N._originalColorPostProcess.height),L.setFloat("near",N._scene.activeCamera.minZ),L.setFloat("far",N._scene.activeCamera.maxZ),L.setFloat("radius",N.radius),N._forceGeometryBuffer?L.setTexture("depthSampler",N._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):L.setTexture("depthSampler",N._prePassRenderer.getRenderTarget().textures[N._prePassRenderer.getIndex(5)]),L.setArray("samplerOffsets",N._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},x.prototype._rebuild=function(){M.prototype._rebuild.call(this)},x.prototype._radicalInverse_VdC=function(F){return this._bits[0]=F,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},x.prototype._hammersley=function(F,I){return[F/I,this._radicalInverse_VdC(F)]},x.prototype._hemisphereSample_uniform=function(F,I){var N=I*2*Math.PI,G=1-(F*.85+.15),V=Math.sqrt(1-G*G);return new v.e(Math.cos(N)*V,Math.sin(N)*V,G)},x.prototype._generateHemisphere=function(){for(var F=this.samples,I=[],N,G=0;G<F;){if(F<16)N=this._hemisphereSample_uniform(Math.random(),Math.random());else{var V=this._hammersley(G,F);N=this._hemisphereSample_uniform(V[0],V[1])}I.push(N.x,N.y,N.z),G++}return I},x.prototype._getDefinesForSSAO=function(){var F="#define SAMPLES "+this.samples+`
#define SSAO`;return F},x.prototype._createSSAOPostProcess=function(F){var I=this;this._sampleSphere=this._generateHemisphere();var N=this._getDefinesForSSAO(),G=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new i.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],G,F,null,_.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,N),this._ssaoPostProcess.onApply=function(V){var L,ee,K,B;if(!!I._scene.activeCamera){if(V.setArray3("sampleSphere",I._sampleSphere),V.setFloat("randTextureTiles",32),V.setFloat("samplesFactor",1/I.samples),V.setFloat("totalStrength",I.totalStrength),V.setFloat2("texelSize",1/I._ssaoPostProcess.width,1/I._ssaoPostProcess.height),V.setFloat("radius",I.radius),V.setFloat("maxZ",I.maxZ),V.setFloat("minZAspect",I.minZAspect),V.setFloat("base",I.base),V.setFloat("near",I._scene.activeCamera.minZ),V.setFloat("far",I._scene.activeCamera.maxZ),I._scene.activeCamera.mode===c.a.PERSPECTIVE_CAMERA)V.setMatrix3x3("depthProjection",x.PERSPECTIVE_DEPTH_PROJECTION),V.setFloat("xViewport",Math.tan(I._scene.activeCamera.fov/2)*I._scene.getEngine().getAspectRatio(I._scene.activeCamera,!0)),V.setFloat("yViewport",Math.tan(I._scene.activeCamera.fov/2));else{var Q=I._scene.getEngine().getRenderWidth()/2,Z=I._scene.getEngine().getRenderHeight()/2,ue=(L=I._scene.activeCamera.orthoLeft)!==null&&L!==void 0?L:-Q,W=(ee=I._scene.activeCamera.orthoRight)!==null&&ee!==void 0?ee:Q,ge=(K=I._scene.activeCamera.orthoBottom)!==null&&K!==void 0?K:-Z,te=(B=I._scene.activeCamera.orthoTop)!==null&&B!==void 0?B:Z;V.setMatrix3x3("depthProjection",x.ORTHO_DEPTH_PROJECTION),V.setFloat("xViewport",(W-ue)*.5),V.setFloat("yViewport",(te-ge)*.5)}V.setMatrix("projection",I._scene.getProjectionMatrix()),I._forceGeometryBuffer?(V.setTexture("depthSampler",I._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),V.setTexture("normalSampler",I._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(V.setTexture("depthSampler",I._prePassRenderer.getRenderTarget().textures[I._prePassRenderer.getIndex(5)]),V.setTexture("normalSampler",I._prePassRenderer.getRenderTarget().textures[I._prePassRenderer.getIndex(6)])),V.setTexture("randomSampler",I._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},x.prototype._createSSAOCombinePostProcess=function(F){var I=this;this._ssaoCombinePostProcess=new i.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],F,null,_.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(N){var G=I._scene.activeCamera.viewport;N.setVector4("viewport",v.c.Vector4[0].copyFromFloats(G.x,G.y,G.width,G.height)),N.setTextureFromPostProcessOutput("originalColor",I._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new f)},x.prototype._createRandomTexture=function(){var F=128;this._randomTexture=new h.a("SSAORandomTexture",F,this._scene,!1,_.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=_.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=_.a.WRAP_ADDRESSMODE;for(var I=this._randomTexture.getContext(),N=function(ee,K){return Math.random()*(K-ee)+ee},G=v.e.Zero(),V=0;V<F;V++)for(var L=0;L<F;L++)G.x=N(0,1),G.y=N(0,1),G.z=0,G.normalize(),G.scaleInPlace(255),G.x=Math.floor(G.x),G.y=Math.floor(G.y),I.fillStyle="rgb("+G.x+", "+G.y+", "+G.z+")",I.fillRect(V,L,1,1);this._randomTexture.update(!1)},x.prototype.serialize=function(){var F=O.a.Serialize(this);return F.customType="SSAO2RenderingPipeline",F},x.Parse=function(F,I,N){return O.a.Parse(function(){return new x(F._name,I,F._ratio)},F,I,N)},x.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],x.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(l.c)([Object(O.c)()],x.prototype,"totalStrength",void 0),Object(l.c)([Object(O.c)()],x.prototype,"maxZ",void 0),Object(l.c)([Object(O.c)()],x.prototype,"minZAspect",void 0),Object(l.c)([Object(O.c)("samples")],x.prototype,"_samples",void 0),Object(l.c)([Object(O.c)("textureSamples")],x.prototype,"_textureSamples",void 0),Object(l.c)([Object(O.c)()],x.prototype,"_ratio",void 0),Object(l.c)([Object(O.c)("expensiveBlur")],x.prototype,"_expensiveBlur",void 0),Object(l.c)([Object(O.c)()],x.prototype,"radius",void 0),Object(l.c)([Object(O.c)()],x.prototype,"base",void 0),x}(e.a);n.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=C},600:function(q,H,o){"use strict";var l=o(435),s="chromaticAberrationPixelShader",O=`
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
}`;l.a.ShadersStore[s]=O;var v={name:s,shader:O}},601:function(q,H,o){"use strict";var l=o(435),s="ssaoCombinePixelShader",O=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;l.a.ShadersStore[s]=O;var v={name:s,shader:O}},602:function(q,H,o){"use strict";o.d(H,"a",function(){return R}),o.d(H,"b",function(){return ee}),o.d(H,"g",function(){return K.a}),o.d(H,"h",function(){return se}),o.d(H,"i",function(){return ie}),o.d(H,"c",function(){return a.a}),o.d(H,"d",function(){return n.a}),o.d(H,"e",function(){return Ee.a}),o.d(H,"f",function(){return P.a});var l=o(434),s=o(439),O=o(438),v=o(440),c=o(442),_=o(577),h=o(587),i=o(518),e=o(579),t=o(586),r=o(517),n=o(481),a=o(466),f=o(570),p=o(578),d=o(437),m=o(448),P=o(482),R=function(le){Object(l.d)(y,le);function y(g,D,b,Y,z){g===void 0&&(g=""),D===void 0&&(D=!0),b===void 0&&(b=m.a.LastCreatedScene),z===void 0&&(z=!0);var S=le.call(this,b.getEngine(),g)||this;S._camerasToBeAttached=[],S.SharpenPostProcessId="SharpenPostProcessEffect",S.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",S.FxaaPostProcessId="FxaaPostProcessEffect",S.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",S.GrainPostProcessId="GrainPostProcessEffect",S._glowLayer=null,S.animations=[],S._imageProcessingConfigurationObserver=null,S._sharpenEnabled=!1,S._bloomEnabled=!1,S._depthOfFieldEnabled=!1,S._depthOfFieldBlurLevel=f.b.Low,S._fxaaEnabled=!1,S._imageProcessingEnabled=!0,S._bloomScale=.5,S._chromaticAberrationEnabled=!1,S._grainEnabled=!1,S._buildAllowed=!0,S.onBuildObservable=new O.c,S._resizeObserver=null,S._hardwareScaleLevel=1,S._bloomKernel=64,S._bloomWeight=.15,S._bloomThreshold=.9,S._samples=1,S._hasCleared=!1,S._prevPostProcess=null,S._prevPrevPostProcess=null,S._depthOfFieldSceneObserver=null,S._cameras=Y||b.cameras,S._cameras=S._cameras.slice(),S._camerasToBeAttached=S._cameras.slice(),S._buildAllowed=z,S._scene=b;var k=S._scene.getEngine().getCaps();S._hdr=D&&(k.textureHalfFloatRender||k.textureFloatRender),S._hdr?k.textureHalfFloatRender?S._defaultPipelineTextureType=2:k.textureFloatRender&&(S._defaultPipelineTextureType=1):S._defaultPipelineTextureType=0,b.postProcessRenderPipelineManager.addPipeline(S);var he=S._scene.getEngine();return S.sharpen=new h.a("sharpen",1,null,c.a.BILINEAR_SAMPLINGMODE,he,!1,S._defaultPipelineTextureType,!0),S._sharpenEffect=new a.a(he,S.SharpenPostProcessId,function(){return S.sharpen},!0),S.depthOfField=new f.a(S._scene,null,S._depthOfFieldBlurLevel,S._defaultPipelineTextureType,!0),S.bloom=new p.a(S._scene,S._bloomScale,S._bloomWeight,S.bloomKernel,S._defaultPipelineTextureType,!0),S.chromaticAberration=new e.a("ChromaticAberration",he.getRenderWidth(),he.getRenderHeight(),1,null,c.a.BILINEAR_SAMPLINGMODE,he,!1,S._defaultPipelineTextureType,!0),S._chromaticAberrationEffect=new a.a(he,S.ChromaticAberrationPostProcessId,function(){return S.chromaticAberration},!0),S.grain=new t.a("Grain",1,null,c.a.BILINEAR_SAMPLINGMODE,he,!1,S._defaultPipelineTextureType,!0),S._grainEffect=new a.a(he,S.GrainPostProcessId,function(){return S.grain},!0),S._resizeObserver=he.onResizeObservable.add(function(){S._hardwareScaleLevel=he.getHardwareScalingLevel(),S.bloomKernel=S.bloomKernel}),S._imageProcessingConfigurationObserver=S._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){S.bloom._downscale._exposure=S._scene.imageProcessingConfiguration.exposure,S.imageProcessingEnabled!==S._scene.imageProcessingConfiguration.isEnabled&&(S._imageProcessingEnabled=S._scene.imageProcessingConfiguration.isEnabled,S._buildPipeline())}),S._buildPipeline(),S}return Object.defineProperty(y.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(g){this._sharpenEnabled!==g&&(this._sharpenEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(g){this._bloomKernel=g,this.bloom.kernel=g/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(g){this._bloomWeight!==g&&(this.bloom.weight=g,this._bloomWeight=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(g){this._bloomThreshold!==g&&(this.bloom.threshold=g,this._bloomThreshold=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(g){this._bloomScale!==g&&(this._bloomScale=g,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(g){this._bloomEnabled!==g&&(this._bloomEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),y.prototype._rebuildBloom=function(){var g=this.bloom;this.bloom=new p.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=g.threshold;for(var D=0;D<this._cameras.length;D++)g.disposeEffects(this._cameras[D])},Object.defineProperty(y.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(g){this._depthOfFieldEnabled!==g&&(this._depthOfFieldEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(g){if(this._depthOfFieldBlurLevel!==g){this._depthOfFieldBlurLevel=g;var D=this.depthOfField;this.depthOfField=new f.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=D.focalLength,this.depthOfField.focusDistance=D.focusDistance,this.depthOfField.fStop=D.fStop,this.depthOfField.lensSize=D.lensSize;for(var b=0;b<this._cameras.length;b++)D.disposeEffects(this._cameras[b]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(g){this._fxaaEnabled!==g&&(this._fxaaEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"samples",{get:function(){return this._samples},set:function(g){this._samples!==g&&(this._samples=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(g){this._imageProcessingEnabled!==g&&(this._scene.imageProcessingConfiguration.isEnabled=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(g){g&&!this._glowLayer?this._glowLayer=new _.a("",this._scene):!g&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(g){this._chromaticAberrationEnabled!==g&&(this._chromaticAberrationEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(g){this._grainEnabled!==g&&(this._grainEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),y.prototype.getClassName=function(){return"DefaultRenderingPipeline"},y.prototype.prepare=function(){var g=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=g},y.prototype._setAutoClearAndTextureSharing=function(g,D){D===void 0&&(D=!1),this._hasCleared?g.autoClear=!1:(g.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),D||(this._prevPrevPostProcess?g.shareOutputWith(this._prevPrevPostProcess):g.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=g)},y.prototype._buildPipeline=function(){var g=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var D=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var b=0,Y=this._cameras;b<Y.length;b++){var z=Y[b],S=this._scene.enableDepthRenderer(z);S.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(k){g._cameras.indexOf(k.activeCamera)>-1&&(g.depthOfField.depthTexture=k.enableDepthRenderer(k.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var S=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=S.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new i.a("imageProcessing",1,null,c.a.BILINEAR_SAMPLINGMODE,D,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(D,this.ImageProcessingPostProcessId,function(){return g.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new r.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,D,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(D,this.FxaaPostProcessId,function(){return g.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},y.prototype._disposePostProcesses=function(g){g===void 0&&(g=!1);for(var D=0;D<this._cameras.length;D++){var b=this._cameras[D];this.imageProcessing&&this.imageProcessing.dispose(b),this.fxaa&&this.fxaa.dispose(b),g&&(this.sharpen&&this.sharpen.dispose(b),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(b)),this.bloom&&this.bloom.disposeEffects(b),this.chromaticAberration&&this.chromaticAberration.dispose(b),this.grain&&this.grain.dispose(b),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,g&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},y.prototype.addCamera=function(g){this._camerasToBeAttached.push(g),this._buildPipeline()},y.prototype.removeCamera=function(g){var D=this._camerasToBeAttached.indexOf(g);this._camerasToBeAttached.splice(D,1),this._buildPipeline()},y.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),le.prototype.dispose.call(this)},y.prototype.serialize=function(){var g=s.a.Serialize(this);return g.customType="DefaultRenderingPipeline",g},y.Parse=function(g,D,b){return s.a.Parse(function(){return new y(g._name,g._name._hdr,D)},g,D,b)},Object(l.c)([Object(s.c)()],y.prototype,"sharpenEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"bloomKernel",null),Object(l.c)([Object(s.c)()],y.prototype,"_bloomWeight",void 0),Object(l.c)([Object(s.c)()],y.prototype,"_bloomThreshold",void 0),Object(l.c)([Object(s.c)()],y.prototype,"_hdr",void 0),Object(l.c)([Object(s.c)()],y.prototype,"bloomWeight",null),Object(l.c)([Object(s.c)()],y.prototype,"bloomThreshold",null),Object(l.c)([Object(s.c)()],y.prototype,"bloomScale",null),Object(l.c)([Object(s.c)()],y.prototype,"bloomEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"depthOfFieldEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"depthOfFieldBlurLevel",null),Object(l.c)([Object(s.c)()],y.prototype,"fxaaEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"samples",null),Object(l.c)([Object(s.c)()],y.prototype,"imageProcessingEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"glowLayerEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"chromaticAberrationEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"grainEnabled",null),y}(n.a);d.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=R;var A=o(479),C=o(444),M=o(600),x=o(435),F="lensHighlightsPixelShader",I=`
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

}`;x.a.ShadersStore[F]=I;var N={name:F,shader:I},G="depthOfFieldPixelShader",V=`




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
`;x.a.ShadersStore[G]=V;var L={name:G,shader:V},ee=function(le){Object(l.d)(y,le);function y(g,D,b,Y,z){Y===void 0&&(Y=1);var S=le.call(this,b.getEngine(),g)||this;return S.LensChromaticAberrationEffect="LensChromaticAberrationEffect",S.HighlightsEnhancingEffect="HighlightsEnhancingEffect",S.LensDepthOfFieldEffect="LensDepthOfFieldEffect",S._pentagonBokehIsEnabled=!1,S._scene=b,S._depthTexture=b.enableDepthRenderer().getDepthMap(),D.grain_texture?S._grainTexture=D.grain_texture:S._createGrainTexture(),S._edgeBlur=D.edge_blur?D.edge_blur:0,S._grainAmount=D.grain_amount?D.grain_amount:0,S._chromaticAberration=D.chromatic_aberration?D.chromatic_aberration:0,S._distortion=D.distortion?D.distortion:0,S._highlightsGain=D.dof_gain!==void 0?D.dof_gain:-1,S._highlightsThreshold=D.dof_threshold?D.dof_threshold:1,S._dofDistance=D.dof_focus_distance!==void 0?D.dof_focus_distance:-1,S._dofAperture=D.dof_aperture?D.dof_aperture:1,S._dofDarken=D.dof_darken?D.dof_darken:0,S._dofPentagon=D.dof_pentagon!==void 0?D.dof_pentagon:!0,S._blurNoise=D.blur_noise!==void 0?D.blur_noise:!0,S._createChromaticAberrationPostProcess(Y),S._createHighlightsPostProcess(Y),S._createDepthOfFieldPostProcess(Y/4),S.addEffect(new a.a(b.getEngine(),S.LensChromaticAberrationEffect,function(){return S._chromaticAberrationPostProcess},!0)),S.addEffect(new a.a(b.getEngine(),S.HighlightsEnhancingEffect,function(){return S._highlightsPostProcess},!0)),S.addEffect(new a.a(b.getEngine(),S.LensDepthOfFieldEffect,function(){return S._depthOfFieldPostProcess},!0)),S._highlightsGain===-1&&S._disableEffect(S.HighlightsEnhancingEffect,null),b.postProcessRenderPipelineManager.addPipeline(S),z&&b.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(g,z),S}return y.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(y.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(g){this.setEdgeBlur(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(g){this.setGrainAmount(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(g){this.setChromaticAberration(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(g){this.setAperture(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(g){this.setEdgeDistortion(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(g){this.setFocusDistance(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(g){this.setDarkenOutOfFocus(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(g){this._blurNoise=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(g){g?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(g){this.setHighlightsGain(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(g){this.setHighlightsThreshold(g)},enumerable:!1,configurable:!0}),y.prototype.setEdgeBlur=function(g){this._edgeBlur=g},y.prototype.disableEdgeBlur=function(){this._edgeBlur=0},y.prototype.setGrainAmount=function(g){this._grainAmount=g},y.prototype.disableGrain=function(){this._grainAmount=0},y.prototype.setChromaticAberration=function(g){this._chromaticAberration=g},y.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},y.prototype.setEdgeDistortion=function(g){this._distortion=g},y.prototype.disableEdgeDistortion=function(){this._distortion=0},y.prototype.setFocusDistance=function(g){this._dofDistance=g},y.prototype.disableDepthOfField=function(){this._dofDistance=-1},y.prototype.setAperture=function(g){this._dofAperture=g},y.prototype.setDarkenOutOfFocus=function(g){this._dofDarken=g},y.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},y.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},y.prototype.enableNoiseBlur=function(){this._blurNoise=!0},y.prototype.disableNoiseBlur=function(){this._blurNoise=!1},y.prototype.setHighlightsGain=function(g){this._highlightsGain=g},y.prototype.setHighlightsThreshold=function(g){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=g},y.prototype.disableHighlights=function(){this._highlightsGain=-1},y.prototype.dispose=function(g){g===void 0&&(g=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),g&&this._scene.disableDepthRenderer()},y.prototype._createChromaticAberrationPostProcess=function(g){var D=this;this._chromaticAberrationPostProcess=new C.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(b){b.setFloat("chromatic_aberration",D._chromaticAberration),b.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),b.setFloat("screen_height",D._scene.getEngine().getRenderHeight()),b.setFloat("radialIntensity",1),b.setFloat2("direction",17,17),b.setFloat2("centerPosition",.5,.5)}},y.prototype._createHighlightsPostProcess=function(g){var D=this;this._highlightsPostProcess=new C.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(b){b.setFloat("gain",D._highlightsGain),b.setFloat("threshold",D._highlightsThreshold),b.setTextureFromPostProcess("textureSampler",D._chromaticAberrationPostProcess),b.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),b.setFloat("screen_height",D._scene.getEngine().getRenderHeight())}},y.prototype._createDepthOfFieldPostProcess=function(g){var D=this;this._depthOfFieldPostProcess=new C.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(b){b.setTexture("depthSampler",D._depthTexture),b.setTexture("grainSampler",D._grainTexture),b.setTextureFromPostProcess("textureSampler",D._highlightsPostProcess),b.setTextureFromPostProcess("highlightsSampler",D._depthOfFieldPostProcess),b.setFloat("grain_amount",D._grainAmount),b.setBool("blur_noise",D._blurNoise),b.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),b.setFloat("screen_height",D._scene.getEngine().getRenderHeight()),b.setFloat("distortion",D._distortion),b.setBool("dof_enabled",D._dofDistance!==-1),b.setFloat("screen_distance",1/(.1-1/D._dofDistance)),b.setFloat("aperture",D._dofAperture),b.setFloat("darken",D._dofDarken),b.setFloat("edge_blur",D._edgeBlur),b.setBool("highlights",D._highlightsGain!==-1),D._scene.activeCamera&&(b.setFloat("near",D._scene.activeCamera.minZ),b.setFloat("far",D._scene.activeCamera.maxZ))}},y.prototype._createGrainTexture=function(){var g=512;this._grainTexture=new A.a("LensNoiseTexture",g,this._scene,!1,c.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var D=this._grainTexture.getContext(),b=function(k,he){return Math.random()*(he-k)+k},Y,z=0;z<g;z++)for(var S=0;S<g;S++)Y=Math.floor(b(.42,.58)*255),D.fillStyle="rgb("+Y+", "+Y+", "+Y+")",D.fillRect(z,S,1,1);this._grainTexture.update(!1)},y}(n.a),K=o(594),B=o(436),Q=o(486),Z=o(472),ue="ssaoPixelShader",W=`
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
`;x.a.ShadersStore[ue]=W;var ge={name:ue,shader:W},te=o(601),se=function(le){Object(l.d)(y,le);function y(g,D,b,Y){var z=le.call(this,D.getEngine(),g)||this;z.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",z.SSAORenderEffect="SSAORenderEffect",z.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",z.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",z.SSAOCombineRenderEffect="SSAOCombineRenderEffect",z.totalStrength=1,z.radius=1e-4,z.area=.0075,z.fallOff=1e-6,z.base=.5,z._firstUpdate=!0,z._scene=D,z._createRandomTexture(),z._depthTexture=D.enableDepthRenderer().getDepthMap();var S=b.ssaoRatio||b,k=b.combineRatio||b;return z._originalColorPostProcess=new Q.b("SSAOOriginalSceneColor",k,null,c.a.BILINEAR_SAMPLINGMODE,D.getEngine(),!1),z._createSSAOPostProcess(S),z._createBlurPostProcess(S),z._createSSAOCombinePostProcess(k),z.addEffect(new a.a(D.getEngine(),z.SSAOOriginalSceneColorEffect,function(){return z._originalColorPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAORenderEffect,function(){return z._ssaoPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOBlurHRenderEffect,function(){return z._blurHPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOBlurVRenderEffect,function(){return z._blurVPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOCombineRenderEffect,function(){return z._ssaoCombinePostProcess},!0)),D.postProcessRenderPipelineManager.addPipeline(z),Y&&D.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(g,Y),z}return Object.defineProperty(y.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),y.prototype.getClassName=function(){return"SSAORenderingPipeline"},y.prototype.dispose=function(g){g===void 0&&(g=!1);for(var D=0;D<this._scene.cameras.length;D++){var b=this._scene.cameras[D];this._originalColorPostProcess.dispose(b),this._ssaoPostProcess.dispose(b),this._blurHPostProcess.dispose(b),this._blurVPostProcess.dispose(b),this._ssaoCombinePostProcess.dispose(b)}this._randomTexture.dispose(),g&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),le.prototype.dispose.call(this)},y.prototype._createBlurPostProcess=function(g){var D=this,b=16;this._blurHPostProcess=new Z.a("BlurH",new B.d(1,0),b,g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new Z.a("BlurV",new B.d(0,1),b,g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var Y=D._blurHPostProcess.width/D._scene.getEngine().getRenderWidth();D._blurHPostProcess.kernel=b*Y}),this._blurVPostProcess.onActivateObservable.add(function(){var Y=D._blurVPostProcess.height/D._scene.getEngine().getRenderHeight();D._blurVPostProcess.kernel=b*Y})},y.prototype._rebuild=function(){this._firstUpdate=!0,le.prototype._rebuild.call(this)},y.prototype._createSSAOPostProcess=function(g){var D=this,b=16,Y=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],z=1/b;this._ssaoPostProcess=new C.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+b+`
#define SSAO`),this._ssaoPostProcess.onApply=function(S){D._firstUpdate&&(S.setArray3("sampleSphere",Y),S.setFloat("samplesFactor",z),S.setFloat("randTextureTiles",4)),S.setFloat("totalStrength",D.totalStrength),S.setFloat("radius",D.radius),S.setFloat("area",D.area),S.setFloat("fallOff",D.fallOff),S.setFloat("base",D.base),S.setTexture("textureSampler",D._depthTexture),S.setTexture("randomSampler",D._randomTexture)}},y.prototype._createSSAOCombinePostProcess=function(g){var D=this;this._ssaoCombinePostProcess=new C.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(b){b.setVector4("viewport",B.c.Vector4[0].copyFromFloats(0,0,1,1)),b.setTextureFromPostProcess("originalColor",D._originalColorPostProcess)}},y.prototype._createRandomTexture=function(){var g=512;this._randomTexture=new A.a("SSAORandomTexture",g,this._scene,!1,c.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var D=this._randomTexture.getContext(),b=function(k,he){return Math.random()*(he-k)+k},Y=B.e.Zero(),z=0;z<g;z++)for(var S=0;S<g;S++)Y.x=Math.floor(b(-1,1)*255),Y.y=Math.floor(b(-1,1)*255),Y.z=Math.floor(b(-1,1)*255),D.fillStyle="rgb("+Y.x+", "+Y.y+", "+Y.z+")",D.fillRect(z,S,1,1);this._randomTexture.update(!1)},Object(l.c)([Object(s.c)()],y.prototype,"totalStrength",void 0),Object(l.c)([Object(s.c)()],y.prototype,"radius",void 0),Object(l.c)([Object(s.c)()],y.prototype,"area",void 0),Object(l.c)([Object(s.c)()],y.prototype,"fallOff",void 0),Object(l.c)([Object(s.c)()],y.prototype,"base",void 0),y}(n.a),de=o(450),J=o(571),j=o(581),me=o(535),Te="standardPixelShader",ae=`uniform sampler2D textureSampler;
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
`;x.a.ShadersStore[Te]=ae;var ve={name:Te,shader:ae},ie=function(le){Object(l.d)(y,le);function y(g,D,b,Y,z){Y===void 0&&(Y=null);var S=le.call(this,D.getEngine(),g)||this;return S.downSampleX4PostProcess=null,S.brightPassPostProcess=null,S.blurHPostProcesses=[],S.blurVPostProcesses=[],S.textureAdderPostProcess=null,S.volumetricLightPostProcess=null,S.volumetricLightSmoothXPostProcess=null,S.volumetricLightSmoothYPostProcess=null,S.volumetricLightMergePostProces=null,S.volumetricLightFinalPostProcess=null,S.luminancePostProcess=null,S.luminanceDownSamplePostProcesses=[],S.hdrPostProcess=null,S.textureAdderFinalPostProcess=null,S.lensFlareFinalPostProcess=null,S.hdrFinalPostProcess=null,S.lensFlarePostProcess=null,S.lensFlareComposePostProcess=null,S.motionBlurPostProcess=null,S.depthOfFieldPostProcess=null,S.fxaaPostProcess=null,S.screenSpaceReflectionPostProcess=null,S.brightThreshold=1,S.blurWidth=512,S.horizontalBlur=!1,S.lensTexture=null,S.volumetricLightCoefficient=.2,S.volumetricLightPower=4,S.volumetricLightBlurScale=64,S.sourceLight=null,S.hdrMinimumLuminance=1,S.hdrDecreaseRate=.5,S.hdrIncreaseRate=.5,S.lensColorTexture=null,S.lensFlareStrength=20,S.lensFlareGhostDispersal=1.4,S.lensFlareHaloWidth=.7,S.lensFlareDistortionStrength=16,S.lensFlareBlurWidth=512,S.lensStarTexture=null,S.lensFlareDirtTexture=null,S.depthOfFieldDistance=10,S.depthOfFieldBlurWidth=64,S.animations=[],S._currentDepthOfFieldSource=null,S._fixedExposure=1,S._currentExposure=1,S._hdrAutoExposure=!1,S._hdrCurrentLuminance=1,S._motionStrength=1,S._isObjectBasedMotionBlur=!1,S._camerasToBeAttached=[],S._bloomEnabled=!1,S._depthOfFieldEnabled=!1,S._vlsEnabled=!1,S._lensFlareEnabled=!1,S._hdrEnabled=!1,S._motionBlurEnabled=!1,S._fxaaEnabled=!1,S._screenSpaceReflectionsEnabled=!1,S._motionBlurSamples=64,S._volumetricLightStepsCount=50,S._samples=1,S._cameras=z||D.cameras,S._cameras=S._cameras.slice(),S._camerasToBeAttached=S._cameras.slice(),S._scene=D,S._basePostProcess=Y,S._ratio=b,S._floatTextureType=D.getEngine().getCaps().textureFloatRender?1:2,D.postProcessRenderPipelineManager.addPipeline(S),S._buildPipeline(),S}return Object.defineProperty(y.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(g){this._fixedExposure=g,this._currentExposure=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(g){if(this._hdrAutoExposure=g,this.hdrPostProcess){var D=["#define HDR"];g&&D.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(D.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(g){this._motionStrength=g,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(g){var D=this._isObjectBasedMotionBlur!==g;this._isObjectBasedMotionBlur=g,D&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(g){this._bloomEnabled!==g&&(this._bloomEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(g){this._depthOfFieldEnabled!==g&&(this._depthOfFieldEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(g){this._lensFlareEnabled!==g&&(this._lensFlareEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(g){this._hdrEnabled!==g&&(this._hdrEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(g){if(this._vlsEnabled!==g){if(g){var D=this._scene.enableGeometryBufferRenderer();if(!D){v.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=g,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(g){this._motionBlurEnabled!==g&&(this._motionBlurEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(g){this._fxaaEnabled!==g&&(this._fxaaEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(g){this._screenSpaceReflectionsEnabled!==g&&(this._screenSpaceReflectionsEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(g){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+g.toFixed(1)),this._volumetricLightStepsCount=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(g){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=g:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+g.toFixed(1))),this._motionBlurSamples=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"samples",{get:function(){return this._samples},set:function(g){this._samples!==g&&(this._samples=g,this._buildPipeline())},enumerable:!1,configurable:!0}),y.prototype._buildPipeline=function(){var g=this,D=this._ratio,b=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new j.a("HDRPass",b,D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){g._currentDepthOfFieldSource=g.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(b.getEngine(),"HDRScreenSpaceReflections",function(){return g.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new C.a("HDRPass","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){g._currentDepthOfFieldSource=g.originalPostProcess}),this.addEffect(new a.a(b.getEngine(),"HDRPassPostProcess",function(){return g.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(b,D/4),this._createBrightPassPostProcess(b,D/4),this._createBlurPostProcesses(b,D/4,1),this._createTextureAdderPostProcess(b,D),this.textureAdderFinalPostProcess=new C.a("HDRDepthOfFieldSource","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRBaseDepthOfFieldSource",function(){return g.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(b,D),this.volumetricLightFinalPostProcess=new C.a("HDRVLSFinal","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRVLSFinal",function(){return g.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(b,D),this.lensFlareFinalPostProcess=new C.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return g.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(b,this._floatTextureType),this._createHdrPostProcess(b,D),this.hdrFinalPostProcess=new C.a("HDRPostHDReDepthOfFieldSource","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return g.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(b,D/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(b,D)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(b,D),this._fxaaEnabled&&(this.fxaaPostProcess=new r.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,0),this.addEffect(new a.a(b.getEngine(),"HDRFxaa",function(){return g.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},y.prototype._createDownSampleX4PostProcess=function(g,D){var b=this,Y=new Array(32);this.downSampleX4PostProcess=new C.a("HDRDownSampleX4","standard",["dsOffsets"],[],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(z){for(var S=0,k=b.downSampleX4PostProcess.width,he=b.downSampleX4PostProcess.height,_e=-2;_e<2;_e++)for(var Ae=-2;Ae<2;Ae++)Y[S]=(_e+.5)*(1/k),Y[S+1]=(Ae+.5)*(1/he),S+=2;z.setArray2("dsOffsets",Y)},this.addEffect(new a.a(g.getEngine(),"HDRDownSampleX4",function(){return b.downSampleX4PostProcess},!0))},y.prototype._createBrightPassPostProcess=function(g,D){var b=this,Y=new Array(8);this.brightPassPostProcess=new C.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(z){var S=1/b.brightPassPostProcess.width,k=1/b.brightPassPostProcess.height;Y[0]=-.5*S,Y[1]=.5*k,Y[2]=.5*S,Y[3]=.5*k,Y[4]=-.5*S,Y[5]=-.5*k,Y[6]=.5*S,Y[7]=-.5*k,z.setArray2("dsOffsets",Y),z.setFloat("brightThreshold",b.brightThreshold)},this.addEffect(new a.a(g.getEngine(),"HDRBrightPass",function(){return b.brightPassPostProcess},!0))},y.prototype._createBlurPostProcesses=function(g,D,b,Y){var z=this;Y===void 0&&(Y="blurWidth");var S=g.getEngine(),k=new Z.a("HDRBlurH_"+b,new B.d(1,0),this[Y],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,this._floatTextureType),he=new Z.a("HDRBlurV_"+b,new B.d(0,1),this[Y],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,this._floatTextureType);k.onActivateObservable.add(function(){var _e=k.width/S.getRenderWidth();k.kernel=z[Y]*_e}),he.onActivateObservable.add(function(){var _e=he.height/S.getRenderHeight();he.kernel=z.horizontalBlur?64*_e:z[Y]*_e}),this.addEffect(new a.a(g.getEngine(),"HDRBlurH"+b,function(){return k},!0)),this.addEffect(new a.a(g.getEngine(),"HDRBlurV"+b,function(){return he},!0)),this.blurHPostProcesses.push(k),this.blurVPostProcesses.push(he)},y.prototype._createTextureAdderPostProcess=function(g,D){var b=this;this.textureAdderPostProcess=new C.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(Y){Y.setTextureFromPostProcess("otherSampler",b._vlsEnabled?b._currentDepthOfFieldSource:b.originalPostProcess),Y.setTexture("lensSampler",b.lensTexture),Y.setFloat("exposure",b._currentExposure),b._currentDepthOfFieldSource=b.textureAdderFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDRTextureAdder",function(){return b.textureAdderPostProcess},!0))},y.prototype._createVolumetricLightPostProcess=function(g,D){var b=this,Y=g.enableGeometryBufferRenderer();Y.enablePosition=!0;var z=Y.getGBuffer();this.volumetricLightPostProcess=new C.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],D/8,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var S=B.d.Zero();this.volumetricLightPostProcess.onApply=function(k){if(b.sourceLight&&b.sourceLight.getShadowGenerator()&&b._scene.activeCamera){var he=b.sourceLight.getShadowGenerator();k.setTexture("shadowMapSampler",he.getShadowMap()),k.setTexture("positionSampler",z.textures[2]),k.setColor3("sunColor",b.sourceLight.diffuse),k.setVector3("sunDirection",b.sourceLight.getShadowDirection()),k.setVector3("cameraPosition",b._scene.activeCamera.globalPosition),k.setMatrix("shadowViewProjection",he.getTransformMatrix()),k.setFloat("scatteringCoefficient",b.volumetricLightCoefficient),k.setFloat("scatteringPower",b.volumetricLightPower),S.x=b.sourceLight.getDepthMinZ(b._scene.activeCamera),S.y=b.sourceLight.getDepthMaxZ(b._scene.activeCamera),k.setVector2("depthValues",S)}},this.addEffect(new a.a(g.getEngine(),"HDRVLS",function(){return b.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(g,D/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new C.a("HDRVLSMerge","standard",[],["originalSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(k){k.setTextureFromPostProcess("originalSampler",b._bloomEnabled?b.textureAdderFinalPostProcess:b.originalPostProcess),b._currentDepthOfFieldSource=b.volumetricLightFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDRVLSMerge",function(){return b.volumetricLightMergePostProces},!0))},y.prototype._createLuminancePostProcesses=function(g,D){var b=this,Y=Math.pow(3,y.LuminanceSteps);this.luminancePostProcess=new C.a("HDRLuminance","standard",["lumOffsets"],[],{width:Y,height:Y},null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LUMINANCE",D);var z=[];this.luminancePostProcess.onApply=function(Ae){var Ce=1/b.luminancePostProcess.width,Oe=1/b.luminancePostProcess.height;z[0]=-.5*Ce,z[1]=.5*Oe,z[2]=.5*Ce,z[3]=.5*Oe,z[4]=-.5*Ce,z[5]=-.5*Oe,z[6]=.5*Ce,z[7]=-.5*Oe,Ae.setArray2("lumOffsets",z)},this.addEffect(new a.a(g.getEngine(),"HDRLuminance",function(){return b.luminancePostProcess},!0));for(var S=y.LuminanceSteps-1;S>=0;S--){var Y=Math.pow(3,S),k=`#define LUMINANCE_DOWN_SAMPLE
`;S===0&&(k+="#define FINAL_DOWN_SAMPLER");var he=new C.a("HDRLuminanceDownSample"+S,"standard",["dsOffsets","halfDestPixelSize"],[],{width:Y,height:Y},null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,k,D);this.luminanceDownSamplePostProcesses.push(he)}var _e=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Ae,Ce){var Oe=new Array(18);Ae.onApply=function(Le){if(!!_e){for(var Me=0,xe=-1;xe<2;xe++)for(var Ie=-1;Ie<2;Ie++)Oe[Me]=xe/_e.width,Oe[Me+1]=Ie/_e.height,Me+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/_e.width),Ce===b.luminanceDownSamplePostProcesses.length-1?_e=b.luminancePostProcess:_e=Ae}},Ce===b.luminanceDownSamplePostProcesses.length-1&&(Ae.onAfterRender=function(){var Le=g.getEngine().readPixels(0,0,1,1),Me=new B.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Ie=new Uint8Array(xe.buffer);b._hdrCurrentLuminance=(Ie[0]*Me.x+Ie[1]*Me.y+Ie[2]*Me.z+Ie[3]*Me.w)/100})}),b.addEffect(new a.a(g.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Ae},!0))})},y.prototype._createHdrPostProcess=function(g,D){var b=this,Y=["#define HDR"];this._hdrAutoExposure&&Y.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new C.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,Y.join(`
`),0);var z=1,S=0,k=0;this.hdrPostProcess.onApply=function(he){if(he.setTextureFromPostProcess("textureAdderSampler",b._currentDepthOfFieldSource),S+=g.getEngine().getDeltaTime(),z<0)z=b._hdrCurrentLuminance;else{var _e=(k-S)/1e3;b._hdrCurrentLuminance<z+b.hdrDecreaseRate*_e?z+=b.hdrDecreaseRate*_e:b._hdrCurrentLuminance>z-b.hdrIncreaseRate*_e?z-=b.hdrIncreaseRate*_e:z=b._hdrCurrentLuminance}b.hdrAutoExposure?b._currentExposure=b._fixedExposure/z:(z=de.a.Clamp(z,b.hdrMinimumLuminance,1e20),he.setFloat("averageLuminance",z)),k=S,b._currentDepthOfFieldSource=b.hdrFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDR",function(){return b.hdrPostProcess},!0))},y.prototype._createLensFlarePostProcess=function(g,D){var b=this;this.lensFlarePostProcess=new C.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],D/2,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(g.getEngine(),"HDRLensFlare",function(){return b.lensFlarePostProcess},!0)),this._createBlurPostProcesses(g,D/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new C.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(g.getEngine(),"HDRLensFlareCompose",function(){return b.lensFlareComposePostProcess},!0));var Y=new B.d(0,0);this.lensFlarePostProcess.onApply=function(k){k.setTextureFromPostProcess("textureSampler",b._bloomEnabled?b.blurHPostProcesses[0]:b.originalPostProcess),k.setTexture("lensColorSampler",b.lensColorTexture),k.setFloat("strength",b.lensFlareStrength),k.setFloat("ghostDispersal",b.lensFlareGhostDispersal),k.setFloat("haloWidth",b.lensFlareHaloWidth),Y.x=b.lensFlarePostProcess.width,Y.y=b.lensFlarePostProcess.height,k.setVector2("resolution",Y),k.setFloat("distortionStrength",b.lensFlareDistortionStrength)};var z=B.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),S=B.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(k){if(!!b._scene.activeCamera){k.setTextureFromPostProcess("otherSampler",b.lensFlarePostProcess),k.setTexture("lensDirtSampler",b.lensFlareDirtTexture),k.setTexture("lensStarSampler",b.lensStarTexture);var he=b._scene.activeCamera.getViewMatrix().getRow(0),_e=b._scene.activeCamera.getViewMatrix().getRow(2),Ae=B.e.Dot(he.toVector3(),new B.e(1,0,0))+B.e.Dot(_e.toVector3(),new B.e(0,0,1));Ae*=4;var Ce=B.a.FromValues(Math.cos(Ae)*.5,-Math.sin(Ae),0,0,Math.sin(Ae),Math.cos(Ae)*.5,0,0,0,0,1,0,0,0,0,1),Oe=S.multiply(Ce).multiply(z);k.setMatrix("lensStarMatrix",Oe),b._currentDepthOfFieldSource=b.lensFlareFinalPostProcess}}},y.prototype._createDepthOfFieldPostProcess=function(g,D){var b=this;this.depthOfFieldPostProcess=new C.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(Y){Y.setTextureFromPostProcess("otherSampler",b._currentDepthOfFieldSource),Y.setTexture("depthSampler",b._getDepthTexture()),Y.setFloat("distance",b.depthOfFieldDistance)},this.addEffect(new a.a(g.getEngine(),"HDRDepthOfField",function(){return b.depthOfFieldPostProcess},!0))},y.prototype._createMotionBlurPostProcess=function(g,D){var b=this;if(this._isObjectBasedMotionBlur){var Y=new J.a("HDRMotionBlur",g,D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,0);Y.motionStrength=this.motionStrength,Y.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=Y}else{this.motionBlurPostProcess=new C.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var z=0,S=B.a.Identity(),k=B.a.Identity(),he=B.a.Identity(),_e=B.d.Zero();this.motionBlurPostProcess.onApply=function(Ae){he=g.getProjectionMatrix().multiply(g.getViewMatrix()),he.invertToRef(k),Ae.setMatrix("inverseViewProjection",k),Ae.setMatrix("prevViewProjection",S),S=he,_e.x=b.motionBlurPostProcess.width,_e.y=b.motionBlurPostProcess.height,Ae.setVector2("screenSize",_e),z=g.getEngine().getFps()/60,Ae.setFloat("motionScale",z),Ae.setFloat("motionStrength",b.motionStrength),Ae.setTexture("depthSampler",b._getDepthTexture())}}this.addEffect(new a.a(g.getEngine(),"HDRMotionBlur",function(){return b.motionBlurPostProcess},!0))},y.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var g=this._scene.enableGeometryBufferRenderer();return g.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},y.prototype._disposePostProcesses=function(){for(var g=0;g<this._cameras.length;g++){var D=this._cameras[g];this.originalPostProcess&&this.originalPostProcess.dispose(D),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(D),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(D),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(D),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(D),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(D),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(D),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(D),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(D),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(D),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(D),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(D);for(var b=0;b<this.luminanceDownSamplePostProcesses.length;b++)this.luminanceDownSamplePostProcesses[b].dispose(D);this.luminancePostProcess&&this.luminancePostProcess.dispose(D),this.hdrPostProcess&&this.hdrPostProcess.dispose(D),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(D),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(D),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(D),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(D);for(var b=0;b<this.blurHPostProcesses.length;b++)this.blurHPostProcesses[b].dispose(D);for(var b=0;b<this.blurVPostProcesses.length;b++)this.blurVPostProcesses[b].dispose(D)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},y.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),le.prototype.dispose.call(this)},y.prototype.serialize=function(){var g=s.a.Serialize(this);return this.sourceLight&&(g.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(g.screenSpaceReflectionPostProcess=s.a.Serialize(this.screenSpaceReflectionPostProcess)),g.customType="StandardRenderingPipeline",g},y.Parse=function(g,D,b){var Y=s.a.Parse(function(){return new y(g._name,D,g._ratio)},g,D,b);return g.sourceLightId&&(Y.sourceLight=D.getLightByID(g.sourceLightId)),g.screenSpaceReflectionPostProcess&&s.a.Parse(function(){return Y.screenSpaceReflectionPostProcess},g.screenSpaceReflectionPostProcess,D,b),Y},y.LuminanceSteps=6,Object(l.c)([Object(s.c)()],y.prototype,"brightThreshold",void 0),Object(l.c)([Object(s.c)()],y.prototype,"blurWidth",void 0),Object(l.c)([Object(s.c)()],y.prototype,"horizontalBlur",void 0),Object(l.c)([Object(s.c)()],y.prototype,"exposure",null),Object(l.c)([Object(s.m)("lensTexture")],y.prototype,"lensTexture",void 0),Object(l.c)([Object(s.c)()],y.prototype,"volumetricLightCoefficient",void 0),Object(l.c)([Object(s.c)()],y.prototype,"volumetricLightPower",void 0),Object(l.c)([Object(s.c)()],y.prototype,"volumetricLightBlurScale",void 0),Object(l.c)([Object(s.c)()],y.prototype,"hdrMinimumLuminance",void 0),Object(l.c)([Object(s.c)()],y.prototype,"hdrDecreaseRate",void 0),Object(l.c)([Object(s.c)()],y.prototype,"hdrIncreaseRate",void 0),Object(l.c)([Object(s.c)()],y.prototype,"hdrAutoExposure",null),Object(l.c)([Object(s.m)("lensColorTexture")],y.prototype,"lensColorTexture",void 0),Object(l.c)([Object(s.c)()],y.prototype,"lensFlareStrength",void 0),Object(l.c)([Object(s.c)()],y.prototype,"lensFlareGhostDispersal",void 0),Object(l.c)([Object(s.c)()],y.prototype,"lensFlareHaloWidth",void 0),Object(l.c)([Object(s.c)()],y.prototype,"lensFlareDistortionStrength",void 0),Object(l.c)([Object(s.c)()],y.prototype,"lensFlareBlurWidth",void 0),Object(l.c)([Object(s.m)("lensStarTexture")],y.prototype,"lensStarTexture",void 0),Object(l.c)([Object(s.m)("lensFlareDirtTexture")],y.prototype,"lensFlareDirtTexture",void 0),Object(l.c)([Object(s.c)()],y.prototype,"depthOfFieldDistance",void 0),Object(l.c)([Object(s.c)()],y.prototype,"depthOfFieldBlurWidth",void 0),Object(l.c)([Object(s.c)()],y.prototype,"motionStrength",null),Object(l.c)([Object(s.c)()],y.prototype,"objectBasedMotionBlur",null),Object(l.c)([Object(s.c)()],y.prototype,"_ratio",void 0),Object(l.c)([Object(s.c)()],y.prototype,"BloomEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"DepthOfFieldEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"LensFlareEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"HDREnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"VLSEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"MotionBlurEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"fxaaEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"screenSpaceReflectionsEnabled",null),Object(l.c)([Object(s.c)()],y.prototype,"volumetricLightStepsCount",null),Object(l.c)([Object(s.c)()],y.prototype,"motionBlurSamples",null),Object(l.c)([Object(s.c)()],y.prototype,"samples",null),y}(n.a);d.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=ie;var Ee=o(548)},605:function(q,H,o){"use strict";var l=o(435),s="importanceSampling",O=`




























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
}`;l.a.IncludesShadersStore[s]=O;var v={name:s,shader:O}},606:function(q,H,o){"use strict";var l=o(435),s="pbrBRDFFunctions",O=`
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
`;l.a.IncludesShadersStore[s]=O;var v={name:s,shader:O}},607:function(q,H,o){"use strict";var l=o(435),s="hdrFilteringFunctions",O=`#ifdef NUM_SAMPLES
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
#endif`;l.a.IncludesShadersStore[s]=O;var v={name:s,shader:O}},625:function(q,H,o){"use strict";var l=o(435),s=o(457),O="rgbdDecodePixelShader",v=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;l.a.ShadersStore[O]=v;var c={name:O,shader:v}},626:function(q,H,o){"use strict";o.d(H,"a",function(){return _});var l=o(434),s=o(439),O=o(441),v=o(480),c=o(454),_=function(){function h(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=h._DefaultIndexOfRefraction,this.indexOfRefraction=h._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=O.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return h.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},h.prototype.isReadyForSubMesh=function(i,e,t,r){return!(i._areTexturesDirty&&e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&v.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||t.getCaps().standardDerivatives&&this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled&&!r&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},h.prototype.prepareDefines=function(i,e){var t;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((t=this._textureRoughness)===null||t===void 0?void 0:t._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled?c.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===h._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&v.a.ClearCoatTintTextureEnabled?c.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},h.prototype.bindForSubMesh=function(i,e,t,r,n,a,f,p){var d,m,P,R,A,C,M,x,F=p._materialDefines,I=F.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!n||!i.isSync){I&&v.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&v.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(m=(d=this._texture)===null||d===void 0?void 0:d.coordinatesIndex)!==null&&m!==void 0?m:0,(R=(P=this._texture)===null||P===void 0?void 0:P.level)!==null&&R!==void 0?R:0,(C=(A=this._textureRoughness)===null||A===void 0?void 0:A.coordinatesIndex)!==null&&C!==void 0?C:0,(x=(M=this._textureRoughness)===null||M===void 0?void 0:M.level)!==null&&x!==void 0?x:0),this._texture&&c.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!I&&!F.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&t.getCaps().standardDerivatives&&v.a.ClearCoatTextureEnabled&&!r&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),c.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),e._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,f?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,f?-1:1)),this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),c.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var N=1-this._indexOfRefraction,G=1+this._indexOfRefraction,V=Math.pow(-N/G,2),L=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",V,L,N,G),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!I&&!F.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&t.getCaps().standardDerivatives&&v.a.ClearCoatBumpTextureEnabled&&!r&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},h.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},h.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},h.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},h.prototype.dispose=function(i){var e,t,r,n;i&&((e=this._texture)===null||e===void 0||e.dispose(),(t=this._textureRoughness)===null||t===void 0||t.dispose(),(r=this._bumpTexture)===null||r===void 0||r.dispose(),(n=this._tintTexture)===null||n===void 0||n.dispose())},h.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},h.AddFallbacks=function(i,e,t){return i.CLEARCOAT_BUMP&&e.addFallback(t++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&e.addFallback(t++,"CLEARCOAT_TINT"),i.CLEARCOAT&&e.addFallback(t++,"CLEARCOAT"),t},h.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},h.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},h.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},h.prototype.copyTo=function(i){s.a.Clone(function(){return i},this)},h.prototype.serialize=function(){return s.a.Serialize(this)},h.prototype.parse=function(i,e,t){var r=this;s.a.Parse(function(){return r},i,e,t)},h._DefaultIndexOfRefraction=1.5,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)()],h.prototype,"intensity",void 0),Object(l.c)([Object(s.c)()],h.prototype,"roughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"texture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"textureRoughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"remapF0OnInterfaceChange",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"bumpTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"isTintEnabled",void 0),Object(l.c)([Object(s.e)()],h.prototype,"tintColor",void 0),Object(l.c)([Object(s.c)()],h.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(s.c)()],h.prototype,"tintThickness",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"tintTexture",void 0),h}()},627:function(q,H,o){"use strict";var l=o(435),s="subSurfaceScatteringFunctions",O=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;l.a.IncludesShadersStore[s]=O;var v={name:s,shader:O}},644:function(q,H,o){"use strict";var l=o(435),s=o(524),O=o(457),v=o(525),c="imageProcessingPixelShader",_=`
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
}`;l.a.ShadersStore[c]=_;var h={name:c,shader:_}},646:function(q,H,o){"use strict";var l=o(435),s="glowMapMergePixelShader",O=`
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
}`;l.a.ShadersStore[s]=O;var v={name:s,shader:O}},647:function(q,H,o){"use strict";var l=o(435),s="glowMapMergeVertexShader",O=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[s]=O;var v={name:s,shader:O}}}]);
