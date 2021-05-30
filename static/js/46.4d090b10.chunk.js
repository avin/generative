(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[46],{107:function(Z,H,o){"use strict";o.r(H);var f=o(445),s=o(449),P=o(498),v=o(475),c=o(441),E=o(506),h=o(648),i=o(649),t=o(555),e=o(602),n=o(446),r=o(455),a=o(594),l=o(549),p=(S,C,R)=>new Promise((O,I)=>{var M=N=>{try{x(R.next(N))}catch(G){I(G)}},F=N=>{try{x(R.throw(N))}catch(G){I(G)}},x=N=>N.done?O(N.value):Promise.resolve(N.value).then(M,F);x((R=R.apply(S,C)).next())});const d={animate:!0,context:Object(l.a)()},m=S=>p(void 0,[S],function*({canvas:C,width:R,height:O}){const I=new f.a(C,!0,{preserveDrawingBuffer:!0,stencil:!0}),M=new s.a(I);M.clearColor=c.a.FromHexString("#10161A");const F=-Math.PI/2,x=Math.PI/3,N=new E.a("camera",F,x,30,new v.z(0,0,0),M);N.minZ=.1,N.fov=1,N.attachControl(C,!0);const G=new P.a("hemiLight",new v.z(-1,1,0),M);G.diffuse=new c.a(1,1,1),G.groundColor=new c.a(.75,.75,.75),G.specular=new c.a(.25,.25,.25);const V=Math.PI,L=Math.PI*2,ne=10,K=16,B=400,J=ie=>{const k=[];for(let de=0;de<=B+1;de+=1){const te=de/B,y=Math.cos(te*L)*(ne+Math.cos(te*V*K+Math.PI*ie)),g=Math.sin(te*L)*(ne+Math.cos(te*V*K+Math.PI*ie)),D=0;k.push(new v.z(y,g,D))}return k},re=ie=>{const k=ie/B;return Math.cos(k*Math.PI*2)/2},Ee=h.a.CreateTube("tube1",{path:J(0),radiusFunction:re,tessellation:16},M),W=h.a.CreateTube("tube2",{path:J(1),radiusFunction:re,tessellation:16},M),_e=new r.a("mat",M);Ee.material=_e,W.material=_e,_e.diffuseColor=c.a.FromHexString("#FFC940"),_e.emissiveColor=c.a.Black(),_e.specularColor=new c.a(.25,.25,.25);const ae=[],ce=64;for(let ie=0;ie<ce;ie+=1){const k=ie/ce,de=new v.r.RotationAxis(new v.z(0,1,0),k*Math.PI*2);let te;ie%2?te=Ee.clone(""):te=W.clone(""),te.rotationQuaternion=de,ae.push(te)}Ee.dispose(),W.dispose(),n.a.MergeMeshes(ae,!0,!0);const pe=1.5,q=[];for(let ie=0;ie<=K;ie+=1){if(ie%2)continue;const k=Math.cos(ie/K*V)*ne,de=Math.sqrt(ne*ne-k*k),te=h.a.CreateTorus("torus",{diameter:de*2,thickness:pe,tessellation:32},M);te.position.y=k,q.push(te)}const j=n.a.MergeMeshes(q,!0),ge=new r.a("mat",M);j.material=ge,ge.diffuseColor=c.a.FromHexString("#48AFF0"),ge.specularColor=new c.a(.25,.25,.25);const me=new a.a("ssao",M,{ssaoRatio:1.5,blurRatio:1});me.radius=.5,me.totalStrength=.75,me.expensiveBlur=!0,me.samples=32,me.maxZ=100,M.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssao",N);const ee=new e.a("default",!0,M,[N]);return ee.fxaaEnabled=!0,ee.imageProcessingEnabled=!1,ee.samples=8,ee.bloomEnabled=!0,ee.bloomThreshold=0,ee.bloomWeight=.25,ee.bloomKernel=50,ee.bloomScale=.9,{render({time:ie,width:k,height:de,frame:te,deltaTime:y}){M.render()},resize({pixelRatio:ie,width:k,height:de}){I.resize()},unload(){I.dispose()}}});H.default={sketch:m,settings:d}},444:function(Z,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(434),s=o(490),P=o(438),v=o(436),c=o(534),E=o(445),h=o(500),i=o(439),t=o(437),e=function(){function n(r,a,l,p,d,m,S,C,R,O,I,M,F,x,N){S===void 0&&(S=1),O===void 0&&(O=null),I===void 0&&(I=0),M===void 0&&(M="postprocess"),x===void 0&&(x=!1),N===void 0&&(N=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new s.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new v.d(1,1),this._texelSize=v.d.Zero(),this.onActivateObservable=new P.c,this.onSizeChangedObservable=new P.c,this.onApplyObservable=new P.c,this.onBeforeRenderObservable=new P.c,this.onAfterRenderObservable=new P.c,this.name=r,m!=null?(this._camera=m,this._scene=m.getScene(),m.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):C&&(this._engine=C,this._engine.postProcesses.push(this)),this._options=d,this.renderTargetSamplingMode=S||1,this._reusable=R||!1,this._textureType=I,this._textureFormat=N,this._samplers=p||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=M,this._parameters=l||[],this._parameters.push("scale"),this._indexParameters=F,x||this.updateEffect(O)}return Object.defineProperty(n.prototype,"samples",{get:function(){return this._samples},set:function(r){var a=this;this._samples=Math.min(r,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(l){l.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(l,a._samples)})},enumerable:!1,configurable:!0}),n.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(n.prototype,"onActivate",{set:function(r){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),r&&(this._onActivateObserver=this.onActivateObservable.add(r))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onSizeChanged",{set:function(r){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onApply",{set:function(r){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onBeforeRender",{set:function(r){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onAfterRender",{set:function(r){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(r){this._forcedOutputTexture=r},enumerable:!1,configurable:!0}),n.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},n.prototype.getCamera=function(){return this._camera},Object.defineProperty(n.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"PostProcess"},n.prototype.getEngine=function(){return this._engine},n.prototype.getEffect=function(){return this._effect},n.prototype.shareOutputWith=function(r){return this._disposeTextures(),this._shareOutputWithPostProcess=r,this},n.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new s.a(2)),this._shareOutputWithPostProcess=null},n.prototype.updateEffect=function(r,a,l,p,d,m,S,C){r===void 0&&(r=null),a===void 0&&(a=null),l===void 0&&(l=null),this._postProcessDefines=r,this._effect=this._engine.createEffect({vertex:S!=null?S:this._vertexUrl,fragment:C!=null?C:this._fragmentUrl},["position"],a||this._parameters,l||this._samplers,r!==null?r:"",void 0,d,m,p||this._indexParameters)},n.prototype.isReusable=function(){return this._reusable},n.prototype.markTextureDirty=function(){this.width=-1},n.prototype._createRenderTargetTexture=function(r,a,l){l===void 0&&(l=0);for(var p=0;p<this._textureCache.length;p++)if(this._textureCache[p].texture.width===r.width&&this._textureCache[p].texture.height===r.height&&this._textureCache[p].postProcessChannel===l)return this._textureCache[p].texture;var d=this._engine.createRenderTargetTexture(r,a);return this._textureCache.push({texture:d,postProcessChannel:l,lastUsedRenderId:-1}),d},n.prototype._flushTextureCache=function(){for(var r=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(r-this._textureCache[a].lastUsedRenderId>100){for(var l=!1,p=0;p<this._textures.length;p++)if(this._textures.data[p]===this._textureCache[a].texture){l=!0;break}l||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},n.prototype._resize=function(r,a,l,p,d){this._textures.length>0&&this._textures.reset(),this.width=r,this.height=a;var m={width:this.width,height:this.height},S={generateMipMaps:p,generateDepthBuffer:d||l._postProcesses.indexOf(this)===0,generateStencilBuffer:(d||l._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(m,S,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(m,S,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},n.prototype.activate=function(r,a,l){var p=this;a===void 0&&(a=null),r=r||this._camera;var d=r.getScene(),m=d.getEngine(),S=m.getCaps().maxTextureSize,C=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,R=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,O=r.parent;O&&(O.leftCamera==r||O.rightCamera==r)&&(C/=2);var I=this._options.width||C,M=this._options.height||R,F=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var x=m.currentViewport;x&&(I*=x.width,M*=x.height)}(F||this.alwaysForcePOT)&&(this._options.width||(I=m.needPOTTextures?E.a.GetExponentOfTwo(I,S,this.scaleMode):I),this._options.height||(M=m.needPOTTextures?E.a.GetExponentOfTwo(M,S,this.scaleMode):M)),(this.width!==I||this.height!==M)&&this._resize(I,M,r,F,l),this._textures.forEach(function(L){L.samples!==p.samples&&p._engine.updateRenderTargetTextureSampleCount(L,p.samples)}),this._flushTextureCache(),this._renderId++}var N;if(this._shareOutputWithPostProcess)N=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)N=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{N=this.inputTexture;for(var G=void 0,V=0;V<this._textureCache.length;V++)if(this._textureCache[V].texture===N){G=this._textureCache[V];break}G&&(G.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(C/I,R/M),this._engine.bindFramebuffer(N,0,C,R,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(N,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(r),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:d.clearColor,d._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),N},Object.defineProperty(n.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),n.prototype.isReady=function(){return this._effect&&this._effect.isReady()},n.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var r;return this._shareOutputWithPostProcess?r=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?r=this._forcedOutputTexture:r=this.inputTexture,this._effect._bindTexture("textureSampler",r),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},n.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},n.prototype._disposeTextureCache=function(){for(var r=this._textureCache.length-1;r>=0;r--)this._engine._releaseTexture(this._textureCache[r].texture);this._textureCache.length=0},n.prototype.setPrePassRenderer=function(r){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=r.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},n.prototype.dispose=function(r){r=r||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!r){if(r.detachPostProcess(this),a=r._postProcesses.indexOf(this),a===0&&r._postProcesses.length>0){var l=this._camera._getFirstPostProcess();l&&l.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},n.prototype.serialize=function(){var r=i.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return r.customType="BABYLON."+this.getClassName(),r.cameraId=a?a.id:null,r.reusable=this._reusable,r.textureType=this._textureType,r.fragmentUrl=this._fragmentUrl,r.parameters=this._parameters,r.samplers=this._samplers,r.options=this._options,r.defines=this._postProcessDefines,r.textureFormat=this._textureFormat,r.vertexUrl=this._vertexUrl,r.indexParameters=this._indexParameters,r},n.prototype.clone=function(){var r=this.serialize();r._engine=this._engine,r.cameraId=null;var a=n.Parse(r,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},n.Parse=function(r,a,l){var p=t.a.GetClass(r.customType);if(!p||!p._Parse)return null;var d=a?a.getCameraByID(r.cameraId):null;return p._Parse(r,d,a,l)},n._Parse=function(r,a,l,p){return i.a.Parse(function(){return new n(r.name,r.fragmentUrl,r.parameters,r.samplers,r.options,a,r.renderTargetSamplingMode,r._engine,r.reusable,r.defines,r.textureType,r.vertexUrl,r.indexParameters,!1,r.textureFormat)},r,l,p)},Object(f.c)([Object(i.c)()],n.prototype,"uniqueId",void 0),Object(f.c)([Object(i.c)()],n.prototype,"name",void 0),Object(f.c)([Object(i.c)()],n.prototype,"width",void 0),Object(f.c)([Object(i.c)()],n.prototype,"height",void 0),Object(f.c)([Object(i.c)()],n.prototype,"renderTargetSamplingMode",void 0),Object(f.c)([Object(i.f)()],n.prototype,"clearColor",void 0),Object(f.c)([Object(i.c)()],n.prototype,"autoClear",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alphaMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alphaConstants",void 0),Object(f.c)([Object(i.c)()],n.prototype,"enablePixelPerfectMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"forceFullscreenViewport",void 0),Object(f.c)([Object(i.c)()],n.prototype,"scaleMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alwaysForcePOT",void 0),Object(f.c)([Object(i.c)("samples")],n.prototype,"_samples",void 0),Object(f.c)([Object(i.c)()],n.prototype,"adaptScaleToCurrentViewport",void 0),n}();t.a.RegisteredTypes["BABYLON.PostProcess"]=e},458:function(Z,H,o){"use strict";o.d(H,"a",function(){return n});var f=o(434),s=o(438),P=o(443),v=o(436),c=o(442),E=o(590),h=o(591),i=o(500),t=o(522),e=o(445),n=function(r){Object(f.d)(a,r);function a(l,p,d,m,S,C,R,O,I,M,F,x,N,G){S===void 0&&(S=!0),C===void 0&&(C=0),R===void 0&&(R=!1),O===void 0&&(O=c.a.TRILINEAR_SAMPLINGMODE),I===void 0&&(I=!0),M===void 0&&(M=!1),F===void 0&&(F=!1),x===void 0&&(x=5),N===void 0&&(N=!1);var V,L=r.call(this,null,d,!m,void 0,O,void 0,void 0,void 0,void 0,x)||this;return L.renderParticles=!0,L.renderSprites=!1,L.ignoreCameraViewport=!1,L.onBeforeBindObservable=new s.c,L.onAfterUnbindObservable=new s.c,L.onBeforeRenderObservable=new s.c,L.onAfterRenderObservable=new s.c,L.onClearObservable=new s.c,L.onResizeObservable=new s.c,L._currentRefreshId=-1,L._refreshRate=1,L._samples=1,L.boundingBoxPosition=v.e.Zero(),d=L.getScene(),!d||(L._coordinatesMode=c.a.PROJECTION_MODE,L.renderList=new Array,L.name=l,L.isRenderTarget=!0,L._initialSizeParameter=p,L._processSizeParameter(p),L._resizeObserver=L.getScene().getEngine().onResizeObservable.add(function(){}),L._generateMipMaps=!!m,L._doNotChangeAspectRatio=S,L._renderingManager=new h.b(d),L._renderingManager._useSceneAutoClearSetup=!0,F)||(L._renderTargetOptions={generateMipMaps:m,type:C,format:(V=L._format)!==null&&V!==void 0?V:void 0,samplingMode:L.samplingMode,generateDepthBuffer:I,generateStencilBuffer:M,samples:G},L.samplingMode===c.a.NEAREST_SAMPLINGMODE&&(L.wrapU=c.a.CLAMP_ADDRESSMODE,L.wrapV=c.a.CLAMP_ADDRESSMODE),N||(R?(L._texture=d.getEngine().createRenderTargetCubeTexture(L.getRenderSize(),L._renderTargetOptions),L.coordinatesMode=c.a.INVCUBIC_MODE,L._textureMatrix=v.a.Identity()):L._texture=d.getEngine().createRenderTargetTexture(L._size,L._renderTargetOptions),G!==void 0&&(L.samples=G))),L}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(l){this._renderList=l,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(l){var p=this,d=l.push;l.push=function(){for(var S=[],C=0;C<arguments.length;C++)S[C]=arguments[C];var R=l.length===0,O=d.apply(l,S);return R&&p.getScene()&&p.getScene().meshes.forEach(function(I){I._markSubMeshesAsLightDirty()}),O};var m=l.splice;l.splice=function(S,C){var R=m.apply(l,[S,C]);return l.length===0&&p.getScene().meshes.forEach(function(O){O._markSubMeshesAsLightDirty()}),R}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(l){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(l){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(l){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(l){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(l){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(l))){this._boundingBoxSize=l;var p=this.getScene();p&&p.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var l;return((l=this.getInternalTexture())===null||l===void 0?void 0:l._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(l,p,d,m){var S;l===void 0&&(l=0),p===void 0&&(p=!0),d===void 0&&(d=!1),m===void 0&&(m=1);var C=this.getInternalTexture();if(!(!this.getScene()||!C)){(S=C._depthStencilTexture)===null||S===void 0||S.dispose();var R=this.getScene().getEngine();C._depthStencilTexture=R.createDepthStencilTexture(this._size,{bilinearFiltering:p,comparisonFunction:l,generateStencil:d,isCube:this.isCube,samples:m})}},a.prototype._processSizeParameter=function(l){if(l.ratio){this._sizeRatio=l.ratio;var p=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(p.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(p.getRenderHeight(),this._sizeRatio)}}else this._size=l},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(l){if(this._samples!==l){var p=this.getScene();!p||(this._samples=p.getEngine().updateRenderTargetTextureSampleCount(this._texture,l))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(l){this._refreshRate=l,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(l){if(!this._postProcessManager){var p=this.getScene();if(!p)return;this._postProcessManager=new E.a(p),this._postProcesses=new Array}this._postProcesses.push(l),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(l){if(l===void 0&&(l=!1),!!this._postProcesses){if(l)for(var p=0,d=this._postProcesses;p<d.length;p++){var m=d[p];m.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(l){if(!!this._postProcesses){var p=this._postProcesses.indexOf(l);p!==-1&&(this._postProcesses.splice(p,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var l=this._size.layers;return l||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(l){var p=Math.max(1,this.getRenderSize()*l);this.resize(p)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:r.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(l){var p=this.isCube;this.releaseInternalTexture();var d=this.getScene();!d||(this._processSizeParameter(l),p?this._texture=d.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=d.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(l,p){l===void 0&&(l=!1),p===void 0&&(p=!1);var d=this.getScene();if(!!d){var m=d.getEngine();if(this.useCameraPostProcesses!==void 0&&(l=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var S=0;S<this._waitingRenderList.length;S++){var C=this._waitingRenderList[S],R=d.getMeshByID(C);R&&this.renderList.push(R)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var d=this.getScene();if(!d)return;for(var O=d.meshes,S=0;S<O.length;S++){var I=O[S];this.renderListPredicate(I)&&this.renderList.push(I)}}this.onBeforeBindObservable.notifyObservers(this);var M;if(this.activeCamera?(M=this.activeCamera,m.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==d.activeCamera&&d.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(M=d.activeCamera,M&&m.setViewport(M.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var F=0;F<this.getRenderLayers();F++)this.renderToTarget(0,l,p,F,M),d.incrementRenderId(),d.resetCachedMaterial();else if(this.isCube)for(var x=0;x<6;x++)this.renderToTarget(x,l,p,void 0,M),d.incrementRenderId(),d.resetCachedMaterial();else this.renderToTarget(0,l,p,void 0,M);this.onAfterUnbindObservable.notifyObservers(this),d.activeCamera&&((d.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==d.activeCamera)&&d.setTransformMatrix(d.activeCamera.getViewMatrix(),d.activeCamera.getProjectionMatrix(!0)),m.setViewport(d.activeCamera.viewport)),d.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(l,p){var d=128,m=l*p,S=e.a.NearestPOT(m+d*d/(d+m));return Math.min(e.a.FloorPOT(l),S)},a.prototype._prepareRenderingManager=function(l,p,d,m){var S=this.getScene();if(!!S){this._renderingManager.reset();for(var C=S.getRenderId(),R=0;R<p;R++){var O=l[R];if(O&&!O.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(O,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!O.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!O._internalAbstractMeshDataInfo._currentLODIsUpToDate&&S.activeCamera&&(O._internalAbstractMeshDataInfo._currentLOD=S.customLODSelector?S.customLODSelector(O,S.activeCamera):O.getLOD(S.activeCamera),O._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!O._internalAbstractMeshDataInfo._currentLOD)continue;var I=O._internalAbstractMeshDataInfo._currentLOD;I._preActivateForIntermediateRendering(C);var M=void 0;if(m&&d?M=(O.layerMask&d.layerMask)==0:M=!1,O.isEnabled()&&O.isVisible&&O.subMeshes&&!M&&(I!==O&&I._activate(C,!0),O._activate(C,!0)&&O.subMeshes.length)){O.isAnInstance?O._internalAbstractMeshDataInfo._actAsRegularMesh&&(I=O):I._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,I._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var F=0;F<I.subMeshes.length;F++){var x=I.subMeshes[F];this._renderingManager.dispatch(x,I)}}}}for(var N=0;N<S.particleSystems.length;N++){var G=S.particleSystems[N],V=G.emitter;!G.isStarted()||!V||!V.position||!V.isEnabled()||l.indexOf(V)>=0&&this._renderingManager.dispatchParticles(G)}}},a.prototype._bindFrameBuffer=function(l,p){l===void 0&&(l=0),p===void 0&&(p=0);var d=this.getScene();if(!!d){var m=d.getEngine();this._texture&&m.bindFramebuffer(this._texture,this.isCube?l:void 0,void 0,void 0,this.ignoreCameraViewport,0,p)}},a.prototype.unbindFrameBuffer=function(l,p){var d=this;!this._texture||l.unBindFramebuffer(this._texture,this.isCube,function(){d.onAfterRenderObservable.notifyObservers(p)})},a.prototype._prepareFrame=function(l,p,d,m){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!m||!l.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(p,d)},a.prototype.renderToTarget=function(l,p,d,m,S){m===void 0&&(m=0),S===void 0&&(S=null);var C=this.getScene();if(!!C){var R=C.getEngine();if(!!this._texture){R._debugPushGroup("render to face #"+l+" layer #"+m,1),this._prepareFrame(C,l,m,p),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(m):this.onBeforeRenderObservable.notifyObservers(l);var O=null,I=this.renderList?this.renderList:C.getActiveMeshes().data,M=this.renderList?this.renderList.length:C.getActiveMeshes().length;this.getCustomRenderList&&(O=this.getCustomRenderList(this.is2DArray?m:l,I,M)),O?this._prepareRenderingManager(O,O.length,S,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(I,M,S,!this.renderList),this._defaultRenderListPrepared=!0),O=I);for(var F=0,x=C._beforeRenderTargetClearStage;F<x.length;F++){var N=x[F];N.action(this,l,m)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(R):R.clear(this.clearColor||C.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||C.updateTransformMatrix(!0);for(var G=0,V=C._beforeRenderTargetDrawStage;G<V.length;G++){var N=V[G];N.action(this,l,m)}this._renderingManager.render(this.customRenderFunction,O,this.renderParticles,this.renderSprites);for(var L=0,ne=C._afterRenderTargetDrawStage;L<ne.length;L++){var N=ne[L];N.action(this,l,m)}var K=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,l,this._postProcesses,this.ignoreCameraViewport):p&&C.postProcessManager._finalizeFrame(!1,this._texture,l),this._texture.generateMipMaps=K,this._doNotChangeAspectRatio||C.updateTransformMatrix(!0),d&&P.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),R),this.unbindFrameBuffer(R,l),this.isCube&&l===5&&R.generateMipMapsForCubemap(this._texture),R._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(l,p,d,m){p===void 0&&(p=null),d===void 0&&(d=null),m===void 0&&(m=null),this._renderingManager.setRenderingOrder(l,p,d,m)},a.prototype.setRenderingAutoClearDepthStencil=function(l,p){this._renderingManager.setRenderingAutoClearDepthStencil(l,p),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var l=this.getSize(),p=new a(this.name,l,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return p.hasAlpha=this.hasAlpha,p.level=this.level,p.coordinatesMode=this.coordinatesMode,this.renderList&&(p.renderList=this.renderList.slice(0)),p},a.prototype.serialize=function(){if(!this.name)return null;var l=r.prototype.serialize.call(this);if(l.renderTargetSize=this.getRenderSize(),l.renderList=[],this.renderList)for(var p=0;p<this.renderList.length;p++)l.renderList.push(this.renderList[p].id);return l},a.prototype.disposeFramebufferObjects=function(){var l=this.getInternalTexture(),p=this.getScene();l&&p&&p.getEngine()._releaseFramebufferObjects(l)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var l=this.getScene();if(!!l){var p=l.customRenderTargets.indexOf(this);p>=0&&l.customRenderTargets.splice(p,1);for(var d=0,m=l.cameras;d<m.length;d++){var S=m[d];p=S.customRenderTargets.indexOf(this),p>=0&&S.customRenderTargets.splice(p,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),r.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(c.a);c.a._CreateRenderTargetTexture=function(r,a,l,p){return new n(r,a,l,p)}},466:function(Z,H,o){"use strict";o.d(H,"a",function(){return s});var f=o(443),s=function(){function P(v,c,E,h){this._name=c,this._singleInstance=h||!0,this._getPostProcesses=E,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(P.prototype,"isSupported",{get:function(){for(var v in this._postProcesses)if(this._postProcesses.hasOwnProperty(v)){for(var c=this._postProcesses[v],E=0;E<c.length;E++)if(!c[E].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),P.prototype._update=function(){},P.prototype._attachCameras=function(v){var c=this,E,h=f.b.MakeArray(v||this._cameras);if(!!h)for(var i=0;i<h.length;i++){var t=h[i];if(!!t){var e=t.name;if(this._singleInstance?E=0:E=e,!this._postProcesses[E]){var n=this._getPostProcesses();n&&(this._postProcesses[E]=Array.isArray(n)?n:[n])}this._indicesForCamera[e]||(this._indicesForCamera[e]=[]),this._postProcesses[E].forEach(function(r){var a=t.attachPostProcess(r);c._indicesForCamera[e].push(a)}),this._cameras[e]||(this._cameras[e]=t)}}},P.prototype._detachCameras=function(v){var c=f.b.MakeArray(v||this._cameras);if(!!c)for(var E=0;E<c.length;E++){var h=c[E],i=h.name,t=this._postProcesses[this._singleInstance?0:i];t&&t.forEach(function(e){h.detachPostProcess(e)}),this._cameras[i]&&(this._cameras[i]=null)}},P.prototype._enable=function(v){var c=this,E=f.b.MakeArray(v||this._cameras);if(!!E)for(var h=0;h<E.length;h++)for(var i=E[h],t=i.name,e=0;e<this._indicesForCamera[t].length;e++)(i._postProcesses[this._indicesForCamera[t][e]]===void 0||i._postProcesses[this._indicesForCamera[t][e]]===null)&&this._postProcesses[this._singleInstance?0:t].forEach(function(n){E[h].attachPostProcess(n,c._indicesForCamera[t][e])})},P.prototype._disable=function(v){var c=f.b.MakeArray(v||this._cameras);if(!!c)for(var E=0;E<c.length;E++){var h=c[E],i=h.name;this._postProcesses[this._singleInstance?0:i].forEach(function(t){h.detachPostProcess(t)})}},P.prototype.getPostProcesses=function(v){return this._singleInstance?this._postProcesses[0]:v?this._postProcesses[v.name]:null},P}()},472:function(Z,H,o){"use strict";o.d(H,"a",function(){return N});var f=o(434),s=o(444),P=o(442),v=o(435),c="kernelBlurVaryingDeclaration",E="varying vec2 sampleCoord{X};";v.a.IncludesShadersStore[c]=E;var h={name:c,shader:E},i=o(535),t="kernelBlurFragment",e=`#ifdef DOF
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
#endif`;v.a.IncludesShadersStore[r]=a;var l={name:r,shader:a},p="kernelBlurPixelShader",d=`
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
}`;v.a.ShadersStore[p]=d;var m={name:p,shader:d},S="kernelBlurVertex",C="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";v.a.IncludesShadersStore[S]=C;var R={name:S,shader:C},O="kernelBlurVertexShader",I=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;v.a.ShadersStore[O]=I;var M={name:O,shader:I},F=o(437),x=o(439),N=function(G){Object(f.d)(V,G);function V(L,ne,K,B,J,re,Ee,W,_e,ae,ce){re===void 0&&(re=P.a.BILINEAR_SAMPLINGMODE),_e===void 0&&(_e=0),ae===void 0&&(ae=""),ce===void 0&&(ce=!1);var pe=G.call(this,L,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],B,J,re,Ee,W,null,_e,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return pe.blockCompilation=ce,pe._packedFloat=!1,pe._staticDefines="",pe._staticDefines=ae,pe.direction=ne,pe.onApplyObservable.add(function(q){pe._outputTexture?q.setFloat2("delta",1/pe._outputTexture.width*pe.direction.x,1/pe._outputTexture.height*pe.direction.y):q.setFloat2("delta",1/pe.width*pe.direction.x,1/pe.height*pe.direction.y)}),pe.kernel=K,pe}return Object.defineProperty(V.prototype,"kernel",{get:function(){return this._idealKernel},set:function(L){this._idealKernel!==L&&(L=Math.max(L,1),this._idealKernel=L,this._kernel=this._nearestBestKernel(L),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(L){this._packedFloat!==L&&(this._packedFloat=L,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),V.prototype.getClassName=function(){return"BlurPostProcess"},V.prototype.updateEffect=function(L,ne,K,B,J,re){L===void 0&&(L=null),ne===void 0&&(ne=null),K===void 0&&(K=null),this._updateParameters(J,re)},V.prototype._updateParameters=function(L,ne){for(var K=this._kernel,B=(K-1)/2,J=[],re=[],Ee=0,W=0;W<K;W++){var _e=W/(K-1),ae=this._gaussianWeight(_e*2-1);J[W]=W-B,re[W]=ae,Ee+=ae}for(var W=0;W<re.length;W++)re[W]/=Ee;for(var ce=[],pe=[],q=[],W=0;W<=B;W+=2){var j=Math.min(W+1,Math.floor(B)),ge=W===j;if(ge)q.push({o:J[W],w:re[W]});else{var me=j===B,ee=re[W]+re[j]*(me?.5:1),ie=J[W]+1/(1+re[W]/re[j]);ie===0?(q.push({o:J[W],w:re[W]}),q.push({o:J[W+1],w:re[W+1]})):(q.push({o:ie,w:ee}),q.push({o:-ie,w:ee}))}}for(var W=0;W<q.length;W++)pe[W]=q[W].o,ce[W]=q[W].w;J=pe,re=ce;var k=this.getEngine().getCaps().maxVaryingVectors,de=Math.max(k,0)-1,te=Math.min(J.length,de),y="";y+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(y+="#define CENTER_WEIGHT "+this._glslFloat(re[te-1])+`\r
`,te--);for(var W=0;W<te;W++)y+="#define KERNEL_OFFSET"+W+" "+this._glslFloat(J[W])+`\r
`,y+="#define KERNEL_WEIGHT"+W+" "+this._glslFloat(re[W])+`\r
`;for(var g=0,W=de;W<J.length;W++)y+="#define KERNEL_DEP_OFFSET"+g+" "+this._glslFloat(J[W])+`\r
`,y+="#define KERNEL_DEP_WEIGHT"+g+" "+this._glslFloat(re[W])+`\r
`,g++;this.packedFloat&&(y+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,G.prototype.updateEffect.call(this,y,null,null,{varyingCount:te,depCount:g},L,ne)},V.prototype._nearestBestKernel=function(L){for(var ne=Math.round(L),K=0,B=[ne,ne-1,ne+1,ne-2,ne+2];K<B.length;K++){var J=B[K];if(J%2!=0&&Math.floor(J/2)%2==0&&J>0)return Math.max(J,3)}return Math.max(ne,3)},V.prototype._gaussianWeight=function(L){var ne=1/3,K=Math.sqrt(2*Math.PI)*ne,B=-(L*L/(2*ne*ne)),J=1/K*Math.exp(B);return J},V.prototype._glslFloat=function(L,ne){return ne===void 0&&(ne=8),L.toFixed(ne).replace(/0+$/,"")},V._Parse=function(L,ne,K,B){return x.a.Parse(function(){return new V(L.name,L.direction,L.kernel,L.options,ne,L.renderTargetSamplingMode,K.getEngine(),L.reusable,L.textureType,void 0,!1)},L,K,B)},Object(f.c)([Object(x.c)("kernel")],V.prototype,"_kernel",void 0),Object(f.c)([Object(x.c)("packedFloat")],V.prototype,"_packedFloat",void 0),Object(f.c)([Object(x.n)()],V.prototype,"direction",void 0),V}(s.a);F.a.RegisteredTypes["BABYLON.BlurPostProcess"]=N},479:function(Z,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(434),s=o(440),P=o(442),v=o(532),c=o(596),E=function(h){Object(f.d)(i,h);function i(t,e,n,r,a,l,p){n===void 0&&(n=null),r===void 0&&(r=!1),a===void 0&&(a=3),l===void 0&&(l=5);var d=h.call(this,null,n,!r,p,a,void 0,void 0,void 0,void 0,l)||this;d.name=t,d.wrapU=P.a.CLAMP_ADDRESSMODE,d.wrapV=P.a.CLAMP_ADDRESSMODE,d._generateMipMaps=r;var m=d._getEngine();if(!m)return d;e.getContext?(d._canvas=e,d._texture=m.createDynamicTexture(e.width,e.height,r,a)):(d._canvas=c.a.CreateCanvas(1,1),e.width||e.width===0?d._texture=m.createDynamicTexture(e.width,e.height,r,a):d._texture=m.createDynamicTexture(e,e,r,a));var S=d.getSize();return d._canvas.width=S.width,d._canvas.height=S.height,d._context=d._canvas.getContext("2d"),d}return i.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(i.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),i.prototype._recreate=function(t){this._canvas.width=t.width,this._canvas.height=t.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(t.width,t.height,this._generateMipMaps,this.samplingMode)},i.prototype.scale=function(t){var e=this.getSize();e.width*=t,e.height*=t,this._recreate(e)},i.prototype.scaleTo=function(t,e){var n=this.getSize();n.width=t,n.height=e,this._recreate(n)},i.prototype.getContext=function(){return this._context},i.prototype.clear=function(){var t=this.getSize();this._context.fillRect(0,0,t.width,t.height)},i.prototype.update=function(t,e){e===void 0&&(e=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,t===void 0?!0:t,e,this._format||void 0)},i.prototype.drawText=function(t,e,n,r,a,l,p,d){d===void 0&&(d=!0);var m=this.getSize();if(l&&(this._context.fillStyle=l,this._context.fillRect(0,0,m.width,m.height)),this._context.font=r,e==null){var S=this._context.measureText(t);e=(m.width-S.width)/2}if(n==null){var C=parseInt(r.replace(/\D/g,""));n=m.height/2+C/3.65}this._context.fillStyle=a||"",this._context.fillText(t,e,n),d&&this.update(p)},i.prototype.clone=function(){var t=this.getScene();if(!t)return this;var e=this.getSize(),n=new i(this.name,e,t,this._generateMipMaps);return n.hasAlpha=this.hasAlpha,n.level=this.level,n.wrapU=this.wrapU,n.wrapV=this.wrapV,n},i.prototype.serialize=function(){var t=this.getScene();t&&!t.isReady()&&s.a.Warn("The scene must be ready before serializing the dynamic texture");var e=h.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(e.base64String=this._canvas.toDataURL()),e.invertY=this._invertY,e.samplingMode=this.samplingMode,e},i.prototype._IsCanvasElement=function(t){return t.toDataURL!==void 0},i.prototype._rebuild=function(){this.update()},i}(P.a)},481:function(Z,H,o){"use strict";o.d(H,"a",function(){return v});var f=o(434),s=o(443),P=o(439),v=function(){function c(E,h){this.engine=E,this._name=h,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(c.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(c.prototype,"isSupported",{get:function(){for(var E in this._renderEffects)if(this._renderEffects.hasOwnProperty(E)&&!this._renderEffects[E].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),c.prototype.addEffect=function(E){this._renderEffects[E._name]=E},c.prototype._rebuild=function(){},c.prototype._enableEffect=function(E,h){var i=this._renderEffects[E];!i||i._enable(s.b.MakeArray(h||this._cameras))},c.prototype._disableEffect=function(E,h){var i=this._renderEffects[E];!i||i._disable(s.b.MakeArray(h||this._cameras))},c.prototype._attachCameras=function(E,h){var i=s.b.MakeArray(E||this._cameras);if(!!i){var t=[],e;for(e=0;e<i.length;e++){var n=i[e];if(!!n){var r=n.name;this._cameras.indexOf(n)===-1?this._cameras[r]=n:h&&t.push(e)}}for(e=0;e<t.length;e++)i.splice(t[e],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(i)}},c.prototype._detachCameras=function(E){var h=s.b.MakeArray(E||this._cameras);if(!!h){for(var i in this._renderEffects)this._renderEffects.hasOwnProperty(i)&&this._renderEffects[i]._detachCameras(h);for(var t=0;t<h.length;t++)this._cameras.splice(this._cameras.indexOf(h[t]),1)}},c.prototype._update=function(){for(var E in this._renderEffects)this._renderEffects.hasOwnProperty(E)&&this._renderEffects[E]._update();for(var h=0;h<this._cameras.length;h++)if(!!this._cameras[h]){var i=this._cameras[h].name;this._renderEffectsForIsolatedPass[i]&&this._renderEffectsForIsolatedPass[i]._update()}},c.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},c.prototype._enableMSAAOnFirstPostProcess=function(E){if(!this.engine._features.supportMSAA)return!1;var h=Object.keys(this._renderEffects);if(h.length>0){var i=this._renderEffects[h[0]].getPostProcesses();i&&(i[0].samples=E)}return!0},c.prototype.setPrePassRenderer=function(E){return!1},c.prototype.dispose=function(){},Object(f.c)([Object(P.c)()],c.prototype,"_name",void 0),c}()},482:function(Z,H,o){"use strict";o.d(H,"a",function(){return v});var f=o(452),s=o(548),P=o(449);Object.defineProperty(P.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var c=this._getComponent(f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);c||(c=new v(this),this._addComponent(c)),this._postProcessRenderPipelineManager=new s.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var v=function(){function c(E){this.name=f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(f.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},c.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},c.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},c}()},486:function(Z,H,o){"use strict";o.d(H,"b",function(){return a}),o.d(H,"a",function(){return l});var f=o(434),s=o(444),P=o(445),v=o(435),c="passPixelShader",E=`
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
}`;v.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(p){Object(f.d)(d,p);function d(m,S,C,R,O,I,M,F){return C===void 0&&(C=null),M===void 0&&(M=0),F===void 0&&(F=!1),p.call(this,m,"pass",null,null,S,C,R,O,I,void 0,M,void 0,null,F)||this}return d.prototype.getClassName=function(){return"PassPostProcess"},d._Parse=function(m,S,C,R){return r.a.Parse(function(){return new d(m.name,m.options,S,m.renderTargetSamplingMode,m._engine,m.reusable)},m,C,R)},d}(s.a);n.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var l=function(p){Object(f.d)(d,p);function d(m,S,C,R,O,I,M,F){C===void 0&&(C=null),M===void 0&&(M=0),F===void 0&&(F=!1);var x=p.call(this,m,"passCube",null,null,S,C,R,O,I,"#define POSITIVEX",M,void 0,null,F)||this;return x._face=0,x}return Object.defineProperty(d.prototype,"face",{get:function(){return this._face},set:function(m){if(!(m<0||m>5))switch(this._face=m,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),d.prototype.getClassName=function(){return"PassCubePostProcess"},d._Parse=function(m,S,C,R){return r.a.Parse(function(){return new d(m.name,m.options,S,m.renderTargetSamplingMode,m._engine,m.reusable)},m,C,R)},d}(s.a);P.a._RescalePostProcessFactory=function(p){return new a("rescale",1,null,2,p,!1,0)}},498:function(Z,H,o){"use strict";o.d(H,"a",function(){return h});var f=o(434),s=o(439),P=o(436),v=o(441),c=o(453),E=o(484);c.a.AddNodeConstructor("Light_Type_3",function(i,t){return function(){return new h(i,P.e.Zero(),t)}});var h=function(i){Object(f.d)(t,i);function t(e,n,r){var a=i.call(this,e,r)||this;return a.groundColor=new v.a(0,0,0),a.direction=n||P.e.Up(),a}return t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.getClassName=function(){return"HemisphericLight"},t.prototype.setDirectionToTarget=function(e){return this.direction=P.e.Normalize(e.subtract(P.e.Zero())),this.direction},t.prototype.getShadowGenerator=function(){return null},t.prototype.transferToEffect=function(e,n){var r=P.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",r.x,r.y,r.z,0,n),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),n),this},t.prototype.transferToNodeMaterialEffect=function(e,n){var r=P.e.Normalize(this.direction);return e.setFloat3(n,r.x,r.y,r.z),this},t.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=P.a.Identity()),this._worldMatrix},t.prototype.getTypeID=function(){return E.a.LIGHTTYPEID_HEMISPHERICLIGHT},t.prototype.prepareLightSpecificDefines=function(e,n){e["HEMILIGHT"+n]=!0},Object(f.c)([Object(s.e)()],t.prototype,"groundColor",void 0),Object(f.c)([Object(s.o)()],t.prototype,"direction",void 0),t}(E.a)},500:function(Z,H,o){"use strict";var f=o(434),s=o(456),P=o(440),v=o(595),c=o(467);c.a.prototype.createRenderTargetTexture=function(E,h){var i=new v.a;h!==void 0&&typeof h=="object"?(i.generateMipMaps=h.generateMipMaps,i.generateDepthBuffer=!!h.generateDepthBuffer,i.generateStencilBuffer=!!h.generateStencilBuffer,i.type=h.type===void 0?0:h.type,i.samplingMode=h.samplingMode===void 0?3:h.samplingMode,i.format=h.format===void 0?5:h.format):(i.generateMipMaps=h,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,P.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var t=this._gl,e=new s.a(this,s.b.RenderTarget),n=E.width||E,r=E.height||E,a=E.layers||0,l=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),p=a!==0?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D,d=this._getRGBABufferInternalSizedFormat(i.type,i.format),m=this._getInternalFormat(i.format),S=this._getWebGLTextureType(i.type);this._bindTextureDirectly(p,e),a!==0?(e.is2DArray=!0,t.texImage3D(p,0,d,n,r,a,0,m,S,null)):t.texImage2D(p,0,d,n,r,0,m,S,null),t.texParameteri(p,t.TEXTURE_MAG_FILTER,l.mag),t.texParameteri(p,t.TEXTURE_MIN_FILTER,l.min),t.texParameteri(p,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(p,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(p),this._bindTextureDirectly(p,null);var C=this._currentFramebuffer,R=t.createFramebuffer();return this._bindUnboundFramebuffer(R),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,n,r),e.is2DArray||t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(C),e._framebuffer=R,e.baseWidth=n,e.baseHeight=r,e.width=n,e.height=r,e.depth=a,e.isReady=!0,e.samples=1,e.generateMipMaps=!!i.generateMipMaps,e.samplingMode=i.samplingMode,e.type=i.type,e.format=i.format,e._generateDepthBuffer=i.generateDepthBuffer,e._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(e),e},c.a.prototype.createDepthStencilTexture=function(E,h){if(h.isCube){var i=E.width||E;return this._createDepthStencilCubeTexture(i,h)}else return this._createDepthStencilTexture(E,h)},c.a.prototype._createDepthStencilTexture=function(E,h){var i=this._gl,t=E.layers||0,e=t!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,n=new s.a(this,s.b.Depth);if(!this._caps.depthTextureExtension)return P.a.Error("Depth texture is not supported by your browser or hardware."),n;var r=Object(f.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},h);this._bindTextureDirectly(e,n,!0),this._setupDepthStencilTexture(n,E,r.generateStencil,r.bilinearFiltering,r.comparisonFunction);var a=r.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,l=r.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,p=l;return this.webGLVersion>1&&(p=r.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),n.is2DArray?i.texImage3D(e,0,p,n.width,n.height,t,0,l,a,null):i.texImage2D(e,0,p,n.width,n.height,0,l,a,null),this._bindTextureDirectly(e,null),n}},502:function(Z,H,o){"use strict";o.d(H,"a",function(){return pe});var f=o(436),s=o(447),P=o(442),v=o(538),c=o(454),E=o(441),h=o(455),i=o(533),t=o(476),e=o(459),n=o(435),r="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;n.a.IncludesShadersStore[r]=a;var l={name:r,shader:a},p=o(614),d=o(615),m=o(616),S="geometryPixelShader",C=`#extension GL_EXT_draw_buffers : require
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
`;n.a.ShadersStore[S]=C;var R={name:S,shader:C},O=o(487),I=o(496),M=o(497),F=o(501),x="geometryVertexDeclaration",N=`
uniform mat4 viewProjection;
uniform mat4 view;`;n.a.IncludesShadersStore[x]=N;var G={name:x,shader:N},V=o(674),L="geometryUboDeclaration",ne="#include<sceneUboDeclaration>";n.a.IncludesShadersStore[L]=ne;var K={name:L,shader:ne},B=o(507),J=o(508),re=o(488),Ee=o(489),W=o(675),_e="geometryVertexShader",ae=`precision highp float;
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
`;n.a.ShadersStore[_e]=ae;var ce={name:_e,shader:ae},pe=function(){function q(j,ge){ge===void 0&&(ge=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=j,this._ratio=ge,this._useUbo=j.getEngine().supportsUniformBuffers,q._SceneComponentInitialization(this._scene),this._createRenderTargets()}return q.prototype._linkPrePassRenderer=function(j){this._linkedWithPrePass=!0,this._prePassRenderer=j,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(ge){}))},q.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},q.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},q.prototype._forceTextureType=function(j,ge){j===q.POSITION_TEXTURE_TYPE?(this._positionIndex=ge,this._enablePosition=!0):j===q.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=ge,this._enableVelocity=!0):j===q.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=ge,this._enableReflectivity=!0):j===q.DEPTH_TEXTURE_TYPE?this._depthIndex=ge:j===q.NORMAL_TEXTURE_TYPE&&(this._normalIndex=ge)},q.prototype._setAttachments=function(j){this._attachments=j},q.prototype._linkInternalTexture=function(j){this._multiRenderTarget._texture=j},Object.defineProperty(q.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(j){this._multiRenderTarget.renderList=j},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),q.prototype.getTextureIndex=function(j){switch(j){case q.POSITION_TEXTURE_TYPE:return this._positionIndex;case q.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case q.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(q.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(j){this._enablePosition=j,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(j){this._enableVelocity=j,j||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(j){this._enableReflectivity=j,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),q.prototype.isReady=function(j,ge){var me=j.getMaterial();if(me&&me.disableDepthWrite)return!1;var ee=[],ie=[s.b.PositionKind,s.b.NormalKind],k=j.getMesh();if(me){var de=!1;me.needAlphaTesting()&&me.getAlphaTestTexture()&&(ee.push("#define ALPHATEST"),ee.push("#define ALPHATEST_UV"+(me.getAlphaTestTexture().coordinatesIndex+1)),de=!0),me.bumpTexture&&h.a.BumpTextureEnabled&&(ee.push("#define BUMP"),ee.push("#define BUMP_UV"+(me.bumpTexture.coordinatesIndex+1)),de=!0),this._enableReflectivity&&(me instanceof h.a&&me.specularTexture?(ee.push("#define HAS_SPECULAR"),ee.push("#define REFLECTIVITY_UV"+(me.specularTexture.coordinatesIndex+1)),de=!0):me instanceof i.a&&me.reflectivityTexture&&(ee.push("#define HAS_REFLECTIVITY"),ee.push("#define REFLECTIVITY_UV"+(me.reflectivityTexture.coordinatesIndex+1)),de=!0)),de&&(ee.push("#define NEED_UV"),k.isVerticesDataPresent(s.b.UVKind)&&(ie.push(s.b.UVKind),ee.push("#define UV1")),k.isVerticesDataPresent(s.b.UV2Kind)&&(ie.push(s.b.UV2Kind),ee.push("#define UV2")))}this._linkedWithPrePass&&(ee.push("#define PREPASS"),this._depthIndex!==-1&&(ee.push("#define DEPTH_INDEX "+this._depthIndex),ee.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(ee.push("#define NORMAL_INDEX "+this._normalIndex),ee.push("#define PREPASS_NORMAL"))),this._enablePosition&&(ee.push("#define POSITION"),ee.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(ee.push("#define VELOCITY"),ee.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(k)===-1&&ee.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(ee.push("#define REFLECTIVITY"),ee.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),k.useBones&&k.computeBonesUsingShaders?(ie.push(s.b.MatricesIndicesKind),ie.push(s.b.MatricesWeightsKind),k.numBoneInfluencers>4&&(ie.push(s.b.MatricesIndicesExtraKind),ie.push(s.b.MatricesWeightsExtraKind)),ee.push("#define NUM_BONE_INFLUENCERS "+k.numBoneInfluencers),ee.push("#define BonesPerMesh "+(k.skeleton?k.skeleton.bones.length+1:0))):ee.push("#define NUM_BONE_INFLUENCERS 0");var te=k.morphTargetManager,y=0;te&&te.numInfluencers>0&&(y=te.numInfluencers,ee.push("#define MORPHTARGETS"),ee.push("#define NUM_MORPH_INFLUENCERS "+y),te.isUsingTextureForTargets&&ee.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(ie,k,y)),ge&&(ee.push("#define INSTANCES"),c.a.PushAttributesForInstances(ie),j.getRenderingMesh().hasThinInstances&&ee.push("#define THIN_INSTANCES")),this._linkedWithPrePass?ee.push("#define RENDER_TARGET_COUNT "+this._attachments.length):ee.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var g=ee.join(`
`);return this._cachedDefines!==g&&(this._cachedDefines=g,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:ie,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:g,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:y}},this._scene.getEngine())),this._effect.isReady()},q.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(q.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(j){this._multiRenderTarget.samples=j},enumerable:!1,configurable:!0}),q.prototype.dispose=function(){if(this._resizeObserver){var j=this._scene.getEngine();j.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},q.prototype._assignRenderTargetIndices=function(){var j=2;return this._enablePosition&&(this._positionIndex=j,j++),this._enableVelocity&&(this._velocityIndex=j,j++),this._enableReflectivity&&(this._reflectivityIndex=j,j++),j},q.prototype._createRenderTargets=function(){var j=this,ge=this._scene.getEngine(),me=this._assignRenderTargetIndices();if(this._multiRenderTarget=new v.a("gBuffer",{width:ge.getRenderWidth()*this._ratio,height:ge.getRenderHeight()*this._ratio},me,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=P.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=P.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(ie){ie.clear(new E.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=ge.onResizeObservable.add(function(){j._multiRenderTarget&&j._multiRenderTarget.resize({width:ge.getRenderWidth()*j._ratio,height:ge.getRenderHeight()*j._ratio})});var ee=function(ie){var k=ie.getRenderingMesh(),de=ie.getEffectiveMesh(),te=j._scene,y=te.getEngine(),g=ie.getMaterial();if(!!g){if(de._internalAbstractMeshDataInfo._isActiveIntermediate=!1,j._enableVelocity&&!j._previousTransformationMatrices[de.uniqueId]&&(j._previousTransformationMatrices[de.uniqueId]={world:f.a.Identity(),viewProjection:te.getTransformMatrix()},k.skeleton)){var D=k.skeleton.getTransformMatrices(k);j._previousBonesTransformationMatrices[k.uniqueId]=j._copyBonesTransformationMatrices(D,new Float32Array(D.length))}var b=k._getInstancesRenderList(ie._id,!!ie.getReplacementMesh());if(!b.mustReturn){var Y=y.getCaps().instancedArrays&&(b.visibleInstances[ie._id]!==null||k.hasThinInstances),z=de.getWorldMatrix();if(j.isReady(ie,Y)){if(y.enableEffect(j._effect),k._bind(ie,j._effect,g.fillMode),j._useUbo?(c.a.FinalizeSceneUbo(j._scene),c.a.BindSceneUniformBuffer(j._effect,j._scene.getSceneUniformBuffer())):(j._effect.setMatrix("viewProjection",te.getTransformMatrix()),j._effect.setMatrix("view",te.getViewMatrix())),g){var A,Q=k._instanceDataStorage;if(!Q.isFrozen&&(g.backFaceCulling||g.overrideMaterialSideOrientation!==null)){var he=de._getWorldMatrixDeterminant();A=g.overrideMaterialSideOrientation,A==null&&(A=g.sideOrientation),he<0&&(A=A===e.a.ClockWiseSideOrientation?e.a.CounterClockWiseSideOrientation:e.a.ClockWiseSideOrientation)}else A=Q.sideOrientation;if(g._preBind(j._effect,A),g.needAlphaTesting()){var Te=g.getAlphaTestTexture();Te&&(j._effect.setTexture("diffuseSampler",Te),j._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}g.bumpTexture&&te.getEngine().getCaps().standardDerivatives&&h.a.BumpTextureEnabled&&(j._effect.setFloat3("vBumpInfos",g.bumpTexture.coordinatesIndex,1/g.bumpTexture.level,g.parallaxScaleBias),j._effect.setMatrix("bumpMatrix",g.bumpTexture.getTextureMatrix()),j._effect.setTexture("bumpSampler",g.bumpTexture),j._effect.setFloat2("vTangentSpaceParams",g.invertNormalMapX?-1:1,g.invertNormalMapY?-1:1)),j._enableReflectivity&&(g instanceof h.a&&g.specularTexture?(j._effect.setMatrix("reflectivityMatrix",g.specularTexture.getTextureMatrix()),j._effect.setTexture("reflectivitySampler",g.specularTexture)):g instanceof i.a&&g.reflectivityTexture&&(j._effect.setMatrix("reflectivityMatrix",g.reflectivityTexture.getTextureMatrix()),j._effect.setTexture("reflectivitySampler",g.reflectivityTexture)))}k.useBones&&k.computeBonesUsingShaders&&k.skeleton&&(j._effect.setMatrices("mBones",k.skeleton.getTransformMatrices(k)),j._enableVelocity&&j._effect.setMatrices("mPreviousBones",j._previousBonesTransformationMatrices[k.uniqueId])),c.a.BindMorphTargetParameters(k,j._effect),k.morphTargetManager&&k.morphTargetManager.isUsingTextureForTargets&&k.morphTargetManager._bind(j._effect),j._enableVelocity&&(j._effect.setMatrix("previousWorld",j._previousTransformationMatrices[de.uniqueId].world),j._effect.setMatrix("previousViewProjection",j._previousTransformationMatrices[de.uniqueId].viewProjection)),k._processRendering(de,ie,j._effect,g.fillMode,b,Y,function(Re,Ce){return j._effect.setMatrix("world",Ce)})}j._enableVelocity&&(j._previousTransformationMatrices[de.uniqueId].world=z.clone(),j._previousTransformationMatrices[de.uniqueId].viewProjection=j._scene.getTransformMatrix().clone(),k.skeleton&&j._copyBonesTransformationMatrices(k.skeleton.getTransformMatrices(k),j._previousBonesTransformationMatrices[de.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(ie,k,de,te){var y;if(j._linkedWithPrePass){if(!j._prePassRenderer.enabled)return;j._scene.getEngine().bindAttachments(j._attachments)}if(te.length){for(ge.setColorWrite(!1),y=0;y<te.length;y++)ee(te.data[y]);ge.setColorWrite(!0)}for(y=0;y<ie.length;y++)ee(ie.data[y]);for(ge.setDepthWrite(!1),y=0;y<k.length;y++)ee(k.data[y]);if(j.renderTransparentMeshes)for(y=0;y<de.length;y++)ee(de.data[y]);ge.setDepthWrite(!0)}}},q.prototype._copyBonesTransformationMatrices=function(j,ge){for(var me=0;me<j.length;me++)ge[me]=j[me];return ge},q.DEPTH_TEXTURE_TYPE=0,q.NORMAL_TEXTURE_TYPE=1,q.POSITION_TEXTURE_TYPE=2,q.VELOCITY_TEXTURE_TYPE=3,q.REFLECTIVITY_TEXTURE_TYPE=4,q._SceneComponentInitialization=function(j){throw t.a.WarnImport("GeometryBufferRendererSceneComponent")},q}()},513:function(Z,H,o){"use strict";o.d(H,"a",function(){return E}),o.d(H,"b",function(){return h});var f=o(436),s=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],P=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],v=function(i,t){return s[i]*P[i](t)},c=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],E=function(){function i(){this.preScaled=!1,this.l00=f.e.Zero(),this.l1_1=f.e.Zero(),this.l10=f.e.Zero(),this.l11=f.e.Zero(),this.l2_2=f.e.Zero(),this.l2_1=f.e.Zero(),this.l20=f.e.Zero(),this.l21=f.e.Zero(),this.l22=f.e.Zero()}return i.prototype.addLight=function(t,e,n){var r=new f.e(e.r,e.g,e.b),a=r.scale(n);this.l00=this.l00.add(a.scale(v(0,t))),this.l1_1=this.l1_1.add(a.scale(v(1,t))),this.l10=this.l10.add(a.scale(v(2,t))),this.l11=this.l11.add(a.scale(v(3,t))),this.l2_2=this.l2_2.add(a.scale(v(4,t))),this.l2_1=this.l2_1.add(a.scale(v(5,t))),this.l20=this.l20.add(a.scale(v(6,t))),this.l21=this.l21.add(a.scale(v(7,t))),this.l22=this.l22.add(a.scale(v(8,t)))},i.prototype.scaleInPlace=function(t){this.l00.scaleInPlace(t),this.l1_1.scaleInPlace(t),this.l10.scaleInPlace(t),this.l11.scaleInPlace(t),this.l2_2.scaleInPlace(t),this.l2_1.scaleInPlace(t),this.l20.scaleInPlace(t),this.l21.scaleInPlace(t),this.l22.scaleInPlace(t)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(c[0]),this.l1_1.scaleInPlace(c[1]),this.l10.scaleInPlace(c[2]),this.l11.scaleInPlace(c[3]),this.l2_2.scaleInPlace(c[4]),this.l2_1.scaleInPlace(c[5]),this.l20.scaleInPlace(c[6]),this.l21.scaleInPlace(c[7]),this.l22.scaleInPlace(c[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(s[0]),this.l1_1.scaleInPlace(s[1]),this.l10.scaleInPlace(s[2]),this.l11.scaleInPlace(s[3]),this.l2_2.scaleInPlace(s[4]),this.l2_1.scaleInPlace(s[5]),this.l20.scaleInPlace(s[6]),this.l21.scaleInPlace(s[7]),this.l22.scaleInPlace(s[8])},i.FromArray=function(t){var e=new i;return f.e.FromArrayToRef(t[0],0,e.l00),f.e.FromArrayToRef(t[1],0,e.l1_1),f.e.FromArrayToRef(t[2],0,e.l10),f.e.FromArrayToRef(t[3],0,e.l11),f.e.FromArrayToRef(t[4],0,e.l2_2),f.e.FromArrayToRef(t[5],0,e.l2_1),f.e.FromArrayToRef(t[6],0,e.l20),f.e.FromArrayToRef(t[7],0,e.l21),f.e.FromArrayToRef(t[8],0,e.l22),e},i.FromPolynomial=function(t){var e=new i;return e.l00=t.xx.scale(.376127).add(t.yy.scale(.376127)).add(t.zz.scale(.376126)),e.l1_1=t.y.scale(.977204),e.l10=t.z.scale(.977204),e.l11=t.x.scale(.977204),e.l2_2=t.xy.scale(1.16538),e.l2_1=t.yz.scale(1.16538),e.l20=t.zz.scale(1.34567).subtract(t.xx.scale(.672834)).subtract(t.yy.scale(.672834)),e.l21=t.zx.scale(1.16538),e.l22=t.xx.scale(1.16538).subtract(t.yy.scale(1.16538)),e.l1_1.scaleInPlace(-1),e.l11.scaleInPlace(-1),e.l2_1.scaleInPlace(-1),e.l21.scaleInPlace(-1),e.scaleInPlace(Math.PI),e},i}(),h=function(){function i(){this.x=f.e.Zero(),this.y=f.e.Zero(),this.z=f.e.Zero(),this.xx=f.e.Zero(),this.yy=f.e.Zero(),this.zz=f.e.Zero(),this.xy=f.e.Zero(),this.yz=f.e.Zero(),this.zx=f.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=E.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(t){var e=new f.e(t.r,t.g,t.b);this.xx=this.xx.add(e),this.yy=this.yy.add(e),this.zz=this.zz.add(e)},i.prototype.scaleInPlace=function(t){this.x.scaleInPlace(t),this.y.scaleInPlace(t),this.z.scaleInPlace(t),this.xx.scaleInPlace(t),this.yy.scaleInPlace(t),this.zz.scaleInPlace(t),this.yz.scaleInPlace(t),this.zx.scaleInPlace(t),this.xy.scaleInPlace(t)},i.FromHarmonics=function(t){var e=new i;return e._harmonics=t,e.x=t.l11.scale(1.02333).scale(-1),e.y=t.l1_1.scale(1.02333).scale(-1),e.z=t.l10.scale(1.02333),e.xx=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).add(t.l22.scale(.429043)),e.yy=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).subtract(t.l22.scale(.429043)),e.zz=t.l00.scale(.886277).add(t.l20.scale(.495417)),e.yz=t.l2_1.scale(.858086).scale(-1),e.zx=t.l21.scale(.858086).scale(-1),e.xy=t.l2_2.scale(.858086),e.scaleInPlace(1/Math.PI),e},i.FromArray=function(t){var e=new i;return f.e.FromArrayToRef(t[0],0,e.x),f.e.FromArrayToRef(t[1],0,e.y),f.e.FromArrayToRef(t[2],0,e.z),f.e.FromArrayToRef(t[3],0,e.xx),f.e.FromArrayToRef(t[4],0,e.yy),f.e.FromArrayToRef(t[5],0,e.zz),f.e.FromArrayToRef(t[6],0,e.yz),f.e.FromArrayToRef(t[7],0,e.zx),f.e.FromArrayToRef(t[8],0,e.xy),e},i}()},514:function(Z,H,o){"use strict";o.d(H,"a",function(){return P});var f=o(442),s=o(545),P=function(){function v(){}return v.GetEnvironmentBRDFTexture=function(c){if(!c.environmentBRDFTexture){var E=c.useDelayedTextureLoading;c.useDelayedTextureLoading=!1;var h=c._blockEntityCollection;c._blockEntityCollection=!1;var i=f.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,c,!0,!1,f.a.BILINEAR_SAMPLINGMODE);c._blockEntityCollection=h;var t=c.getEngine().getLoadedTexturesCache(),e=t.indexOf(i.getInternalTexture());e!==-1&&t.splice(e,1),i.isRGBD=!0,i.wrapU=f.a.CLAMP_ADDRESSMODE,i.wrapV=f.a.CLAMP_ADDRESSMODE,c.environmentBRDFTexture=i,c.useDelayedTextureLoading=E,s.a.ExpandRGBDTexture(i)}return c.environmentBRDFTexture},v._instanceNumber=0,v._environmentBRDFBase64Texture="data:image/png;base64,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",v}()},516:function(Z,H,o){"use strict";o.d(H,"a",function(){return ne});var f=o(434),s=o(439),P=o(443),v=o(438),c=o(441),E=o(445),h=o(448),i=o(447),t=o(442),e=o(458),n=o(459),r=o(454),a=o(435),l="glowMapGenerationPixelShader",p=`#ifdef DIFFUSE
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
}`;a.a.ShadersStore[l]=p;var d={name:l,shader:p},m=o(487),S=o(496),C=o(497),R=o(501),O=o(507),I=o(508),M=o(488),F=o(489),x="glowMapGenerationVertexShader",N=`
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
}`;a.a.ShadersStore[x]=N;var G={name:x,shader:N},V=o(476),L=o(512),ne=function(){function K(B,J){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new c.b},this.neutralColor=new c.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new v.c,this.onBeforeRenderMainTextureObservable=new v.c,this.onBeforeComposeObservable=new v.c,this.onBeforeRenderMeshToEffect=new v.c,this.onAfterRenderMeshToEffect=new v.c,this.onAfterComposeObservable=new v.c,this.onSizeChangedObservable=new v.c,this.name=B,this._scene=J||h.a.LastCreatedScene,K._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(K.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(K.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(B){this._effectLayerOptions.renderingGroupId=B},enumerable:!1,configurable:!0}),K.prototype._init=function(B){this._effectLayerOptions=Object(f.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},B),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},K.prototype._generateIndexBuffer=function(){var B=[];B.push(0),B.push(1),B.push(2),B.push(0),B.push(2),B.push(3),this._indexBuffer=this._engine.createIndexBuffer(B)},K.prototype._generateVertexBuffer=function(){var B=[];B.push(1,1),B.push(-1,1),B.push(-1,-1),B.push(1,-1);var J=new i.b(this._engine,B,i.b.PositionKind,!1,!1,2);this._vertexBuffers[i.b.PositionKind]=J},K.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?E.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?E.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},K.prototype._createMainTexture=function(){var B=this;if(this._mainTexture=new e.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=t.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=t.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(t.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(re,Ee,W,_e){B.onBeforeRenderMainTextureObservable.notifyObservers(B);var ae,ce=B._scene.getEngine();if(_e.length){for(ce.setColorWrite(!1),ae=0;ae<_e.length;ae++)B._renderSubMesh(_e.data[ae]);ce.setColorWrite(!0)}for(ae=0;ae<re.length;ae++)B._renderSubMesh(re.data[ae]);for(ae=0;ae<Ee.length;ae++)B._renderSubMesh(Ee.data[ae]);var pe=ce.getAlphaMode();for(ae=0;ae<W.length;ae++)B._renderSubMesh(W.data[ae],!0);ce.setAlphaMode(pe)},this._mainTexture.onClearObservable.add(function(re){re.clear(B.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var J=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){B._scene.getBoundingBoxRenderer().enabled=!B.disableBoundingBoxesFromEffectLayer&&J}),this._mainTexture.onAfterUnbindObservable.add(function(){B._scene.getBoundingBoxRenderer().enabled=J})}},K.prototype._addCustomEffectDefines=function(B){},K.prototype._isReady=function(B,J,re){var Ee=B.getMaterial();if(!Ee||!Ee.isReadyForSubMesh(B.getMesh(),B,J))return!1;var W=[],_e=[i.b.PositionKind],ae=B.getMesh(),ce=!1,pe=!1;if(Ee){var q=Ee.needAlphaTesting(),j=Ee.getAlphaTestTexture(),ge=j&&j.hasAlpha&&(Ee.useAlphaFromDiffuseTexture||Ee._useAlphaFromAlbedoTexture);j&&(q||ge)&&(W.push("#define DIFFUSE"),ae.isVerticesDataPresent(i.b.UV2Kind)&&j.coordinatesIndex===1?(W.push("#define DIFFUSEUV2"),pe=!0):ae.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define DIFFUSEUV1"),ce=!0),q&&(W.push("#define ALPHATEST"),W.push("#define ALPHATESTVALUE 0.4")));var me=Ee.opacityTexture;me&&(W.push("#define OPACITY"),ae.isVerticesDataPresent(i.b.UV2Kind)&&me.coordinatesIndex===1?(W.push("#define OPACITYUV2"),pe=!0):ae.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define OPACITYUV1"),ce=!0))}re&&(W.push("#define EMISSIVE"),ae.isVerticesDataPresent(i.b.UV2Kind)&&re.coordinatesIndex===1?(W.push("#define EMISSIVEUV2"),pe=!0):ae.isVerticesDataPresent(i.b.UVKind)&&(W.push("#define EMISSIVEUV1"),ce=!0)),ae.isVerticesDataPresent(i.b.ColorKind)&&ae.hasVertexAlpha&&(_e.push(i.b.ColorKind),W.push("#define VERTEXALPHA")),ce&&(_e.push(i.b.UVKind),W.push("#define UV1")),pe&&(_e.push(i.b.UV2Kind),W.push("#define UV2"));var ee=new L.a;if(ae.useBones&&ae.computeBonesUsingShaders){_e.push(i.b.MatricesIndicesKind),_e.push(i.b.MatricesWeightsKind),ae.numBoneInfluencers>4&&(_e.push(i.b.MatricesIndicesExtraKind),_e.push(i.b.MatricesWeightsExtraKind)),W.push("#define NUM_BONE_INFLUENCERS "+ae.numBoneInfluencers);var ie=ae.skeleton;ie&&ie.isUsingTextureForMatrices?W.push("#define BONETEXTURE"):W.push("#define BonesPerMesh "+(ie?ie.bones.length+1:0)),ae.numBoneInfluencers>0&&ee.addCPUSkinningFallback(0,ae)}else W.push("#define NUM_BONE_INFLUENCERS 0");var k=ae.morphTargetManager,de=0;k&&k.numInfluencers>0&&(W.push("#define MORPHTARGETS"),de=k.numInfluencers,W.push("#define NUM_MORPH_INFLUENCERS "+de),k.isUsingTextureForTargets&&W.push("#define MORPHTARGETS_TEXTURE"),r.a.PrepareAttributesForMorphTargetsInfluencers(_e,ae,de)),J&&(W.push("#define INSTANCES"),r.a.PushAttributesForInstances(_e),B.getRenderingMesh().hasThinInstances&&W.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(W);var te=W.join(`
`);return this._cachedDefines!==te&&(this._cachedDefines=te,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",_e,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],te,ee,void 0,void 0,{maxSimultaneousMorphTargets:de})),this._effectLayerMapGenerationEffect.isReady()},K.prototype.render=function(){var B=this._mergeEffect;if(!!B.isReady()){for(var J=0;J<this._postProcesses.length;J++)if(!this._postProcesses[J].isReady())return;var re=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),re.enableEffect(B),re.setState(!1),re.bindBuffers(this._vertexBuffers,this._indexBuffer,B);var Ee=re.getAlphaMode();re.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(B),re.setAlphaMode(Ee),this.onAfterComposeObservable.notifyObservers(this);var W=this._mainTexture.getSize();this._setMainTextureSize(),(W.width!==this._mainTextureDesiredSize.width||W.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},K.prototype.hasMesh=function(B){return this.renderingGroupId===-1||B.renderingGroupId===this.renderingGroupId},K.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},K.prototype._shouldRenderMesh=function(B){return!0},K.prototype._canRenderMesh=function(B,J){return!J.needAlphaBlendingForMesh(B)},K.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},K.prototype._renderSubMesh=function(B,J){var re=this,Ee;if(J===void 0&&(J=!1),!!this.shouldRender()){var W=B.getMaterial(),_e=B.getMesh(),ae=B.getReplacementMesh(),ce=B.getRenderingMesh(),pe=B.getEffectiveMesh(),q=this._scene,j=q.getEngine();if(pe._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!W&&!!this._canRenderMesh(ce,W)){var ge=(Ee=ce.overrideMaterialSideOrientation)!==null&&Ee!==void 0?Ee:W.sideOrientation,me=ce._getWorldMatrixDeterminant();me<0&&(ge=ge===n.a.ClockWiseSideOrientation?n.a.CounterClockWiseSideOrientation:n.a.ClockWiseSideOrientation);var ee=ge===n.a.ClockWiseSideOrientation;j.setState(W.backFaceCulling,W.zOffset,void 0,ee);var ie=ce._getInstancesRenderList(B._id,!!ae);if(!ie.mustReturn&&!!this._shouldRenderMesh(ce)){var k=ie.hardwareInstancedRendering[B._id]||ce.hasThinInstances;if(this._setEmissiveTextureAndColor(ce,B,W),this.onBeforeRenderMeshToEffect.notifyObservers(_e),this._useMeshMaterial(ce))ce.render(B,k,ae||void 0);else if(this._isReady(B,k,this._emissiveTextureAndColor.texture)){j.enableEffect(this._effectLayerMapGenerationEffect),ce._bind(B,this._effectLayerMapGenerationEffect,n.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",q.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",pe.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var de=W.needAlphaTesting(),te=W.getAlphaTestTexture(),y=te&&te.hasAlpha&&(W.useAlphaFromDiffuseTexture||W._useAlphaFromAlbedoTexture);if(te&&(de||y)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",te);var g=te.getTextureMatrix();g&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",g)}var D=W.opacityTexture;if(D){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",D),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",D.level);var g=D.getTextureMatrix();g&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",g)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),ce.useBones&&ce.computeBonesUsingShaders&&ce.skeleton){var b=ce.skeleton;if(b.isUsingTextureForMatrices){var Y=b.getTransformMatrixTexture(ce);if(!Y)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",Y),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(b.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",b.getTransformMatrices(ce))}r.a.BindMorphTargetParameters(ce,this._effectLayerMapGenerationEffect),ce.morphTargetManager&&ce.morphTargetManager.isUsingTextureForTargets&&ce.morphTargetManager._bind(this._effectLayerMapGenerationEffect),J&&j.setAlphaMode(W.alphaMode),ce._processRendering(pe,B,this._effectLayerMapGenerationEffect,W.fillMode,ie,k,function(z,A){return re._effectLayerMapGenerationEffect.setMatrix("world",A)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(_e)}}}},K.prototype._useMeshMaterial=function(B){return!1},K.prototype._rebuild=function(){var B=this._vertexBuffers[i.b.PositionKind];B&&B._rebuild(),this._generateIndexBuffer()},K.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var B=0;B<this._postProcesses.length;B++)this._postProcesses[B]&&this._postProcesses[B].dispose();this._postProcesses=[];for(var B=0;B<this._textures.length;B++)this._textures[B]&&this._textures[B].dispose();this._textures=[]},K.prototype.dispose=function(){var B=this._vertexBuffers[i.b.PositionKind];B&&(B.dispose(),this._vertexBuffers[i.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var J=this._scene.effectLayers.indexOf(this,0);J>-1&&this._scene.effectLayers.splice(J,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},K.prototype.getClassName=function(){return"EffectLayer"},K.Parse=function(B,J,re){var Ee=P.b.Instantiate(B.customType);return Ee.Parse(B,J,re)},K._SceneComponentInitialization=function(B){throw V.a.WarnImport("EffectLayerSceneComponent")},Object(f.c)([Object(s.c)()],K.prototype,"name",void 0),Object(f.c)([Object(s.f)()],K.prototype,"neutralColor",void 0),Object(f.c)([Object(s.c)()],K.prototype,"isEnabled",void 0),Object(f.c)([Object(s.d)()],K.prototype,"camera",null),Object(f.c)([Object(s.c)()],K.prototype,"renderingGroupId",null),Object(f.c)([Object(s.c)()],K.prototype,"disableBoundingBoxesFromEffectLayer",void 0),K}()},517:function(Z,H,o){"use strict";o.d(H,"a",function(){return a});var f=o(434),s=o(442),P=o(444),v=o(435),c="fxaaPixelShader",E=`uniform sampler2D textureSampler;
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
}`;v.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(l){Object(f.d)(p,l);function p(d,m,S,C,R,O,I){S===void 0&&(S=null),I===void 0&&(I=0);var M=l.call(this,d,"fxaa",["texelSize"],null,m,S,C||s.a.BILINEAR_SAMPLINGMODE,R,O,null,I,"fxaa",void 0,!0)||this,F=M._getDefines();return M.updateEffect(F),M.onApplyObservable.add(function(x){var N=M.texelSize;x.setFloat2("texelSize",N.x,N.y)}),M}return p.prototype.getClassName=function(){return"FxaaPostProcess"},p.prototype._getDefines=function(){var d=this.getEngine();if(!d)return null;var m=d.getGlInfo();return m&&m.renderer&&m.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},p._Parse=function(d,m,S,C){return r.a.Parse(function(){return new p(d.name,d.options,m,d.renderTargetSamplingMode,S.getEngine(),d.reusable)},d,S,C)},p}(P.a);n.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function(Z,H,o){"use strict";o.d(H,"a",function(){return i});var f=o(434),s=o(439),P=o(491),v=o(444),c=o(448),E=o(644),h=o(534),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,p,d,m,S){a===void 0&&(a=null),m===void 0&&(m=0);var C=t.call(this,n,"imageProcessing",[],[],r,a,l,p,d,null,m,"postprocess",null,!0)||this;return C._fromLinearSpace=!0,C._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},S?(S.applyByPostProcess=!0,C._attachImageProcessingConfiguration(S,!0),C.fromLinearSpace=!1):(C._attachImageProcessingConfiguration(null,!0),C.imageProcessingConfiguration.applyByPostProcess=!0),C.onApply=function(R){C.imageProcessingConfiguration.bind(R,C.aspectRatio)},C}return Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(n){n.applyByPostProcess=!0,this._attachImageProcessingConfiguration(n)},enumerable:!1,configurable:!0}),e.prototype._attachImageProcessingConfiguration=function(n,r){var a=this;if(r===void 0&&(r=!1),n!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),n)this._imageProcessingConfiguration=n;else{var l=null,p=this.getEngine(),d=this.getCamera();if(d)l=d.getScene();else if(p&&p.scenes){var m=p.scenes;l=m[m.length-1]}else l=c.a.LastCreatedScene;l?this._imageProcessingConfiguration=l.imageProcessingConfiguration:this._imageProcessingConfiguration=new P.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),r||this._updateParameters()}},Object.defineProperty(e.prototype,"isSupported",{get:function(){var n=this.getEffect();return!n||n.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(n){this.imageProcessingConfiguration.colorCurves=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(n){this.imageProcessingConfiguration.colorCurvesEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(n){this.imageProcessingConfiguration.colorGradingTexture=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(n){this.imageProcessingConfiguration.colorGradingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(n){this.imageProcessingConfiguration.exposure=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(n){this._imageProcessingConfiguration.toneMappingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(n){this._imageProcessingConfiguration.toneMappingType=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(n){this.imageProcessingConfiguration.contrast=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(n){this.imageProcessingConfiguration.vignetteStretch=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(n){this.imageProcessingConfiguration.vignetteCentreX=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(n){this.imageProcessingConfiguration.vignetteCentreY=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(n){this.imageProcessingConfiguration.vignetteWeight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(n){this.imageProcessingConfiguration.vignetteColor=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(n){this.imageProcessingConfiguration.vignetteCameraFov=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(n){this.imageProcessingConfiguration.vignetteBlendMode=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(n){this.imageProcessingConfiguration.vignetteEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(n){this._fromLinearSpace!==n&&(this._fromLinearSpace=n,this._updateParameters())},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"ImageProcessingPostProcess"},e.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var n="";for(var r in this._defines)this._defines[r]&&(n+="#define "+r+`;\r
`);var a=["textureSampler"],l=["scale"];P.a&&(P.a.PrepareSamplers(a,this._defines),P.a.PrepareUniforms(l,this._defines)),this.updateEffect(n,l,a)},e.prototype.dispose=function(n){t.prototype.dispose.call(this,n),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(f.c)([Object(s.c)()],e.prototype,"_fromLinearSpace",void 0),e}(v.a)},521:function(Z,H,o){"use strict";o.d(H,"a",function(){return h});var f=o(436),s=o(450),P=o(513),v=o(515),c=o(441),E=function(){function i(t,e,n,r){this.name=t,this.worldAxisForNormal=e,this.worldAxisForFileX=n,this.worldAxisForFileY=r}return i}(),h=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(t){var e=this,n;if(!t.isCube)return null;(n=t.getScene())===null||n===void 0||n.getEngine().flushFramebuffer();var r=t.getSize().width,a=t.readPixels(0,void 0,void 0,!1),l=t.readPixels(1,void 0,void 0,!1),p,d;t.isRenderTarget?(p=t.readPixels(3,void 0,void 0,!1),d=t.readPixels(2,void 0,void 0,!1)):(p=t.readPixels(2,void 0,void 0,!1),d=t.readPixels(3,void 0,void 0,!1));var m=t.readPixels(4,void 0,void 0,!1),S=t.readPixels(5,void 0,void 0,!1),C=t.gammaSpace,R=5,O=0;return(t.textureType==1||t.textureType==2)&&(O=1),new Promise(function(I,M){Promise.all([l,a,p,d,m,S]).then(function(F){var x=F[0],N=F[1],G=F[2],V=F[3],L=F[4],ne=F[5],K={size:r,right:N,left:x,up:G,down:V,front:L,back:ne,format:R,type:O,gammaSpace:C};I(e.ConvertCubeMapToSphericalPolynomial(K))})})},i.ConvertCubeMapToSphericalPolynomial=function(t){for(var e=new P.a,n=0,r=2/t.size,a=r,l=r*.5-1,p=0;p<6;p++)for(var d=this.FileFaces[p],m=t[d.name],S=l,C=t.format===5?4:3,R=0;R<t.size;R++){for(var O=l,I=0;I<t.size;I++){var M=d.worldAxisForFileX.scale(O).add(d.worldAxisForFileY.scale(S)).add(d.worldAxisForNormal);M.normalize();var F=Math.pow(1+O*O+S*S,-3/2),x=m[R*t.size*C+I*C+0],N=m[R*t.size*C+I*C+1],G=m[R*t.size*C+I*C+2];isNaN(x)&&(x=0),isNaN(N)&&(N=0),isNaN(G)&&(G=0),t.type===0&&(x/=255,N/=255,G/=255),t.gammaSpace&&(x=Math.pow(s.a.Clamp(x),v.c),N=Math.pow(s.a.Clamp(N),v.c),G=Math.pow(s.a.Clamp(G),v.c));var V=4096;x=s.a.Clamp(x,0,V),N=s.a.Clamp(N,0,V),G=s.a.Clamp(G,0,V);var L=new c.a(x,N,G);e.addLight(M,L,F),n+=F,O+=r}S+=a}var ne=4*Math.PI,K=6,B=ne*K/6,J=B/n;return e.scaleInPlace(J),e.convertIncidentRadianceToIrradiance(),e.convertIrradianceToLambertianRadiance(),P.b.FromHarmonics(e)},i.FileFaces=[new E("right",new f.e(1,0,0),new f.e(0,0,-1),new f.e(0,-1,0)),new E("left",new f.e(-1,0,0),new f.e(0,0,1),new f.e(0,-1,0)),new E("up",new f.e(0,1,0),new f.e(1,0,0),new f.e(0,0,1)),new E("down",new f.e(0,-1,0),new f.e(1,0,0),new f.e(0,0,-1)),new E("front",new f.e(0,0,1),new f.e(1,0,0),new f.e(0,-1,0)),new E("back",new f.e(0,0,-1),new f.e(-1,0,0),new f.e(0,-1,0))],i}()},522:function(Z,H,o){"use strict";var f=o(434),s=o(456),P=o(440),v=o(467);v.a.prototype.createRenderTargetCubeTexture=function(c,E){var h=Object(f.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},E);h.generateStencilBuffer=h.generateDepthBuffer&&h.generateStencilBuffer,(h.type===1&&!this._caps.textureFloatLinearFiltering||h.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(h.samplingMode=1);var i=this._gl,t=new s.a(this,s.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,t,!0);var e=this._getSamplingParameters(h.samplingMode,h.generateMipMaps);h.type===1&&!this._caps.textureFloat&&(h.type=0,P.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,e.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,e.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var n=0;n<6;n++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,this._getRGBABufferInternalSizedFormat(h.type,h.format),c,c,0,this._getInternalFormat(h.format),this._getWebGLTextureType(h.type),null);var r=i.createFramebuffer();return this._bindUnboundFramebuffer(r),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(h.generateStencilBuffer,h.generateDepthBuffer,c,c),h.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),t._framebuffer=r,t.width=c,t.height=c,t.isReady=!0,t.isCube=!0,t.samples=1,t.generateMipMaps=h.generateMipMaps,t.samplingMode=h.samplingMode,t.type=h.type,t.format=h.format,t._generateDepthBuffer=h.generateDepthBuffer,t._generateStencilBuffer=h.generateStencilBuffer,this._internalTexturesCache.push(t),t}},523:function(Z,H,o){"use strict";var f=o(521),s=o(477);Object.defineProperty(s.a.prototype,"sphericalPolynomial",{get:function(){var P=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=f.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(v){P._texture._sphericalPolynomial=v,P._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(P){this._texture&&(this._texture._sphericalPolynomial=P)},enumerable:!0,configurable:!0})},529:function(Z,H,o){"use strict";o.d(H,"b",function(){return Be}),o.d(H,"a",function(){return Bt});var f=o(434),s=o(439),P=o(440),v=o(490),c=o(514),E=o(449),h=o(436),i=o(447),t=o(626),e=o(480),n=o(454),r=function(){function w(T){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new h.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=T}return w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype.isReadyForSubMesh=function(T,u){return!(T._areTexturesDirty&&u.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},w.prototype.prepareDefines=function(T,u,_){this._isEnabled?(T.ANISOTROPIC=this._isEnabled,this._isEnabled&&!u.isVerticesDataPresent(i.b.TangentKind)&&(T._needUVs=!0,T.MAINUV1=!0),T._areTexturesDirty&&_.texturesEnabled&&(this._texture&&e.a.AnisotropicTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,T,"ANISOTROPIC_TEXTURE"):T.ANISOTROPIC_TEXTURE=!1)):(T.ANISOTROPIC=!1,T.ANISOTROPIC_TEXTURE=!1)},w.prototype.bindForSubMesh=function(T,u,_){(!T.useUbo||!_||!T.isSync)&&(this._texture&&e.a.AnisotropicTextureEnabled&&(T.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),n.a.BindTextureMatrix(this._texture,T,"anisotropy")),T.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),u.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&T.setTexture("anisotropySampler",this._texture)},w.prototype.hasTexture=function(T){return this._texture===T},w.prototype.getActiveTextures=function(T){this._texture&&T.push(this._texture)},w.prototype.getAnimatables=function(T){this._texture&&this._texture.animations&&this._texture.animations.length>0&&T.push(this._texture)},w.prototype.dispose=function(T){T&&this._texture&&this._texture.dispose()},w.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},w.AddFallbacks=function(T,u,_){return T.ANISOTROPIC&&u.addFallback(_++,"ANISOTROPIC"),_},w.AddUniforms=function(T){T.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},w.PrepareUniformBuffer=function(T){T.addUniform("vAnisotropy",3),T.addUniform("vAnisotropyInfos",2),T.addUniform("anisotropyMatrix",16)},w.AddSamplers=function(T){T.push("anisotropySampler")},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,_){var U=this;s.a.Parse(function(){return U},T,u,_)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)()],w.prototype,"intensity",void 0),Object(f.c)([Object(s.n)()],w.prototype,"direction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"texture",void 0),w}(),a=function(){function w(T){this._useEnergyConservation=w.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=w.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=w.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=w.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=T}return w.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},w.prototype.prepareDefines=function(T){T.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,T.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,T.SPHERICAL_HARMONICS=this._useSphericalHarmonics,T.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},w.prototype.getClassName=function(){return"PBRBRDFConfiguration"},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,_){var U=this;s.a.Parse(function(){return U},T,u,_)},w.DEFAULT_USE_ENERGY_CONSERVATION=!0,w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,w.DEFAULT_USE_SPHERICAL_HARMONICS=!0,w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useEnergyConservation",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSphericalHarmonics",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),w}(),l=o(441),p=function(){function w(T){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=l.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=T}return w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype.isReadyForSubMesh=function(T,u){return!(T._areTexturesDirty&&u.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&e.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},w.prototype.prepareDefines=function(T,u){var _;this._isEnabled?(T.SHEEN=this._isEnabled,T.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,T.SHEEN_ROUGHNESS=this._roughness!==null,T.SHEEN_ALBEDOSCALING=this._albedoScaling,T.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,T.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((_=this._textureRoughness)===null||_===void 0?void 0:_._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),T._areTexturesDirty&&u.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,T,"SHEEN_TEXTURE"):T.SHEEN_TEXTURE=!1,this._textureRoughness&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._textureRoughness,T,"SHEEN_TEXTURE_ROUGHNESS"):T.SHEEN_TEXTURE_ROUGHNESS=!1)):(T.SHEEN=!1,T.SHEEN_TEXTURE=!1,T.SHEEN_TEXTURE_ROUGHNESS=!1,T.SHEEN_LINKWITHALBEDO=!1,T.SHEEN_ROUGHNESS=!1,T.SHEEN_ALBEDOSCALING=!1,T.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,T.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},w.prototype.bindForSubMesh=function(T,u,_,U){var oe,ue,$,Se,se,X,fe,ve,Ae=U._materialDefines,le=Ae.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!T.useUbo||!_||!T.isSync)&&(le&&e.a.SheenTextureEnabled?(T.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),n.a.BindTextureMatrix(this._texture,T,"sheen")):(this._texture||this._textureRoughness)&&e.a.SheenTextureEnabled&&(T.updateFloat4("vSheenInfos",(ue=(oe=this._texture)===null||oe===void 0?void 0:oe.coordinatesIndex)!==null&&ue!==void 0?ue:0,(Se=($=this._texture)===null||$===void 0?void 0:$.level)!==null&&Se!==void 0?Se:0,(X=(se=this._textureRoughness)===null||se===void 0?void 0:se.coordinatesIndex)!==null&&X!==void 0?X:0,(ve=(fe=this._textureRoughness)===null||fe===void 0?void 0:fe.level)!==null&&ve!==void 0?ve:0),this._texture&&n.a.BindTextureMatrix(this._texture,T,"sheen"),this._textureRoughness&&!le&&!Ae.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&n.a.BindTextureMatrix(this._textureRoughness,T,"sheenRoughness")),T.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&T.updateFloat("vSheenRoughness",this._roughness)),u.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&T.setTexture("sheenSampler",this._texture),this._textureRoughness&&!le&&!Ae.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&e.a.SheenTextureEnabled&&T.setTexture("sheenRoughnessSampler",this._textureRoughness))},w.prototype.hasTexture=function(T){return this._texture===T||this._textureRoughness===T},w.prototype.getActiveTextures=function(T){this._texture&&T.push(this._texture),this._textureRoughness&&T.push(this._textureRoughness)},w.prototype.getAnimatables=function(T){this._texture&&this._texture.animations&&this._texture.animations.length>0&&T.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&T.push(this._textureRoughness)},w.prototype.dispose=function(T){var u,_;T&&((u=this._texture)===null||u===void 0||u.dispose(),(_=this._textureRoughness)===null||_===void 0||_.dispose())},w.prototype.getClassName=function(){return"PBRSheenConfiguration"},w.AddFallbacks=function(T,u,_){return T.SHEEN&&u.addFallback(_++,"SHEEN"),_},w.AddUniforms=function(T){T.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},w.PrepareUniformBuffer=function(T){T.addUniform("vSheenColor",4),T.addUniform("vSheenRoughness",1),T.addUniform("vSheenInfos",4),T.addUniform("sheenMatrix",16),T.addUniform("sheenRoughnessMatrix",16)},w.AddSamplers=function(T){T.push("sheenSampler"),T.push("sheenRoughnessSampler")},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,_){var U=this;s.a.Parse(function(){return U},T,u,_)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"linkSheenWithAlbedo",void 0),Object(f.c)([Object(s.c)()],w.prototype,"intensity",void 0),Object(f.c)([Object(s.e)()],w.prototype,"color",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"texture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"roughness",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"textureRoughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"albedoScaling",void 0),w}(),d=o(450),m=function(){function w(T,u,_){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=l.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=l.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=T,this._internalMarkScenePrePassDirty=u,this._scene=_}return Object.defineProperty(w.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(T){!this._scene.enableSubSurfaceForPrePass()||T&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(T))},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(T){T>=1?this._volumeIndexOfRefraction=T:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},w.prototype.isReadyForSubMesh=function(T,u){if(T._areTexturesDirty&&u.texturesEnabled){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var _=this._getRefractionTexture(u);if(_&&e.a.RefractionTextureEnabled&&!_.isReadyOrNotBlocking())return!1}return!0},w.prototype.prepareDefines=function(T,u){if(T._areTexturesDirty&&(T.SUBSURFACE=!1,T.SS_TRANSLUCENCY=this._isTranslucencyEnabled,T.SS_SCATTERING=this._isScatteringEnabled,T.SS_THICKNESSANDMASK_TEXTURE=!1,T.SS_MASK_FROM_THICKNESS_TEXTURE=!1,T.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,T.SS_REFRACTION=!1,T.SS_REFRACTIONMAP_3D=!1,T.SS_GAMMAREFRACTION=!1,T.SS_RGBDREFRACTION=!1,T.SS_LINEARSPECULARREFRACTION=!1,T.SS_REFRACTIONMAP_OPPOSITEZ=!1,T.SS_LODINREFRACTIONALPHA=!1,T.SS_LINKREFRACTIONTOTRANSPARENCY=!1,T.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(T.SUBSURFACE=!0,T._areTexturesDirty&&u.texturesEnabled&&this._thicknessTexture&&e.a.ThicknessTextureEnabled&&n.a.PrepareDefinesForMergedUV(this._thicknessTexture,T,"SS_THICKNESSANDMASK_TEXTURE"),T.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,T.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&u.texturesEnabled)){var _=this._getRefractionTexture(u);_&&e.a.RefractionTextureEnabled&&(T.SS_REFRACTION=!0,T.SS_REFRACTIONMAP_3D=_.isCube,T.SS_GAMMAREFRACTION=_.gammaSpace,T.SS_RGBDREFRACTION=_.isRGBD,T.SS_LINEARSPECULARREFRACTION=_.linearSpecularLOD,T.SS_REFRACTIONMAP_OPPOSITEZ=_.invertZ,T.SS_LODINREFRACTIONALPHA=_.lodLevelInAlpha,T.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,T.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},w.prototype.bindForSubMesh=function(T,u,_,U,oe,ue){var $=this._getRefractionTexture(u);if(!T.useUbo||!U||!T.isSync){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&(T.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),n.a.BindTextureMatrix(this._thicknessTexture,T,"thickness")),T.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),$&&e.a.RefractionTextureEnabled){T.updateMatrix("refractionMatrix",$.getReflectionTextureMatrix());var Se=1;$.isCube||$.depth&&(Se=$.depth);var se=$.getSize().width,X=this.volumeIndexOfRefraction;T.updateFloat4("vRefractionInfos",$.level,1/X,Se,this._invertRefractionY?-1:1),T.updateFloat3("vRefractionMicrosurfaceInfos",se,$.lodGenerationScale,$.lodGenerationOffset),ue&&T.updateFloat2("vRefractionFilteringInfo",se,d.a.Log2(se))}this.isScatteringEnabled&&T.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),T.updateColor3("vDiffusionDistance",this.diffusionDistance),T.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),T.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}u.texturesEnabled&&(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&T.setTexture("thicknessSampler",this._thicknessTexture),$&&e.a.RefractionTextureEnabled&&(oe?T.setTexture("refractionSampler",$):(T.setTexture("refractionSampler",$._lodTextureMid||$),T.setTexture("refractionSamplerLow",$._lodTextureLow||$),T.setTexture("refractionSamplerHigh",$._lodTextureHigh||$))))},w.prototype.unbind=function(T){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(T.setTexture("refractionSampler",null),!0):!1},w.prototype._getRefractionTexture=function(T){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?T.environmentTexture:null},Object.defineProperty(w.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),w.prototype.fillRenderTargetTextures=function(T){e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&T.push(this._refractionTexture)},w.prototype.hasTexture=function(T){return this._thicknessTexture===T||this._refractionTexture===T},w.prototype.hasRenderTargetTextures=function(){return!!(e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},w.prototype.getActiveTextures=function(T){this._thicknessTexture&&T.push(this._thicknessTexture),this._refractionTexture&&T.push(this._refractionTexture)},w.prototype.getAnimatables=function(T){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&T.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&T.push(this._refractionTexture)},w.prototype.dispose=function(T){T&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},w.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},w.AddFallbacks=function(T,u,_){return T.SS_SCATTERING&&u.addFallback(_++,"SS_SCATTERING"),T.SS_TRANSLUCENCY&&u.addFallback(_++,"SS_TRANSLUCENCY"),_},w.AddUniforms=function(T){T.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},w.AddSamplers=function(T){T.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},w.PrepareUniformBuffer=function(T){T.addUniform("vRefractionMicrosurfaceInfos",3),T.addUniform("vRefractionFilteringInfo",2),T.addUniform("vRefractionInfos",4),T.addUniform("refractionMatrix",16),T.addUniform("vThicknessInfos",2),T.addUniform("thicknessMatrix",16),T.addUniform("vThicknessParam",2),T.addUniform("vDiffusionDistance",3),T.addUniform("vTintColor",4),T.addUniform("vSubSurfaceIntensity",3),T.addUniform("scatteringDiffusionProfile",1)},w.prototype.copyTo=function(T){s.a.Clone(function(){return T},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(T,u,_){var U=this;s.a.Parse(function(){return U},T,u,_)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isRefractionEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isTranslucencyEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markScenePrePassDirty")],w.prototype,"isScatteringEnabled",void 0),Object(f.c)([Object(s.c)()],w.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(f.c)([Object(s.c)()],w.prototype,"refractionIntensity",void 0),Object(f.c)([Object(s.c)()],w.prototype,"translucencyIntensity",void 0),Object(f.c)([Object(s.c)()],w.prototype,"useAlbedoToTintRefraction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"thicknessTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"refractionTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(s.c)()],w.prototype,"_volumeIndexOfRefraction",void 0),Object(f.c)([Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"volumeIndexOfRefraction",null),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"invertRefractionY",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"linkRefractionWithTransparency",void 0),Object(f.c)([Object(s.c)()],w.prototype,"minimumThickness",void 0),Object(f.c)([Object(s.c)()],w.prototype,"maximumThickness",void 0),Object(f.c)([Object(s.e)()],w.prototype,"tintColor",void 0),Object(f.c)([Object(s.c)()],w.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(s.e)()],w.prototype,"diffusionDistance",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useMaskFromThicknessTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useMaskFromThicknessTextureGltf",void 0),w}(),S=o(744),C=o(491),R=o(459),O=o(552),I=o(553),M=o(442),F=o(523),x=o(435),N=o(746),G="pbrFragmentDeclaration",V=`uniform vec4 vEyePosition;
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
`;x.a.IncludesShadersStore[G]=V;var L={name:G,shader:V},ne=o(674),K=o(745),B="pbrUboDeclaration",J=`layout(std140,column_major) uniform;





















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
`;x.a.IncludesShadersStore[B]=J;var re={name:B,shader:J},Ee="pbrFragmentExtraDeclaration",W=`
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
#endif`;x.a.IncludesShadersStore[Ee]=W;var _e={name:Ee,shader:W},ae=o(650),ce=o(651),pe="pbrFragmentSamplersDeclaration",q=`#ifdef ALBEDO
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
#endif`;x.a.IncludesShadersStore[pe]=q;var j={name:pe,shader:q},ge=o(524),me=o(592),ee=o(558),ie=o(597),k=o(457),de=o(627),te=o(605),y="pbrHelperFunctions",g=`
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
#endif`;x.a.IncludesShadersStore[y]=g;var D={name:y,shader:g},b=o(525),Y=o(652),z="harmonicsFunctions",A=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;x.a.IncludesShadersStore[z]=A;var Q={name:z,shader:A},he="pbrDirectLightingSetupFunctions",Te=`
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
}`;x.a.IncludesShadersStore[he]=Te;var Re={name:he,shader:Te},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;x.a.IncludesShadersStore[Ce]=Oe;var Le={name:Ce,shader:Oe},Ie=o(606),xe=o(607),Me="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
`;x.a.IncludesShadersStore[Me]=Ve;var Ut={name:Me,shader:Ve},Ge="pbrIBLFunctions",we=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
#endif`;x.a.IncludesShadersStore[Ge]=we;var Vt={name:Ge,shader:we},Gt=o(614),wt=o(615),Ht=o(653),He="pbrBlockAlbedoOpacity",je=`struct albedoOpacityOutParams
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
`;x.a.IncludesShadersStore[He]=je;var jt={name:He,shader:je},We="pbrBlockReflectivity",ze=`struct reflectivityOutParams
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
`;x.a.IncludesShadersStore[We]=ze;var Wt={name:We,shader:ze},Xe="pbrBlockAmbientOcclusion",Ye=`struct ambientOcclusionOutParams
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
`;x.a.IncludesShadersStore[Xe]=Ye;var zt={name:Xe,shader:Ye},Ke="pbrBlockAlphaFresnel",Qe=`#ifdef ALPHAFRESNEL
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
`;x.a.IncludesShadersStore[Ke]=Qe;var Xt={name:Ke,shader:Qe},ke="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;x.a.IncludesShadersStore[ke]=Ze;var Yt={name:ke,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;x.a.IncludesShadersStore[Je]=qe;var Kt={name:Je,shader:qe},$e="pbrBlockSheen",et=`#ifdef SHEEN
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
`;x.a.IncludesShadersStore[$e]=et;var Qt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;x.a.IncludesShadersStore[tt]=nt;var kt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;x.a.IncludesShadersStore[rt]=it;var Zt={name:rt,shader:it},Jt=o(550),at="pbrBlockNormalGeometric",ot=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;x.a.IncludesShadersStore[at]=ot;var qt={name:at,shader:ot},$t=o(616),st="pbrBlockNormalFinal",lt=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;x.a.IncludesShadersStore[st]=lt;var en={name:st,shader:lt},tn=o(747),ft="pbrBlockLightmapInit",ct=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;x.a.IncludesShadersStore[ft]=ct;var nn={name:ft,shader:ct},ut="pbrBlockGeometryInfo",dt=`float NdotVUnclamped=dot(normalW,viewDirectionW);

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
`;x.a.IncludesShadersStore[ut]=dt;var rn={name:ut,shader:dt},ht="pbrBlockReflectance0",pt=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
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
`;x.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",gt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;x.a.IncludesShadersStore[vt]=gt;var on={name:vt,shader:gt},mt="pbrBlockDirectLighting",Et=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;x.a.IncludesShadersStore[mt]=Et;var sn={name:mt,shader:Et},ln=o(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;x.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},St="pbrBlockFinalUnlitComponents",Rt=`
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
`;x.a.IncludesShadersStore[St]=Rt;var cn={name:St,shader:Rt},At="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;x.a.IncludesShadersStore[At]=Pt;var un={name:At,shader:Pt},dn=o(701),hn=o(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;x.a.IncludesShadersStore[Ct]=Ot;var pn={name:Ct,shader:Ot},bt="pbrDebug",Mt=`#if DEBUGMODE>0
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
#endif`;x.a.IncludesShadersStore[bt]=Mt;var vn={name:bt,shader:Mt},It="pbrPixelShader",xt=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;x.a.ShadersStore[It]=xt;var gn={name:It,shader:xt},Dt="pbrVertexDeclaration",yt=`uniform mat4 view;
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
#endif`;x.a.IncludesShadersStore[Dt]=yt;var mn={name:Dt,shader:yt},En=o(487),_n=o(748),Tn=o(749),Sn=o(593),Rn=o(656),An=o(657),Pn=o(658),Cn=o(496),On=o(497),bn=o(507),Mn=o(508),In=o(488),xn=o(489),Dn=o(750),yn=o(675),Ln=o(551),Fn=o(702),Nn=o(659),Bn=o(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;x.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=o(512),Fe=o(751),De={effect:null,subMesh:null},Be=function(w){Object(f.d)(T,w);function T(){var u=w.call(this)||this;return u.PBR=!0,u.NUM_SAMPLES="0",u.REALTIME_FILTERING=!1,u.MAINUV1=!1,u.MAINUV2=!1,u.UV1=!1,u.UV2=!1,u.ALBEDO=!1,u.GAMMAALBEDO=!1,u.ALBEDODIRECTUV=0,u.VERTEXCOLOR=!1,u.DETAIL=!1,u.DETAILDIRECTUV=0,u.DETAIL_NORMALBLENDMETHOD=0,u.AMBIENT=!1,u.AMBIENTDIRECTUV=0,u.AMBIENTINGRAYSCALE=!1,u.OPACITY=!1,u.VERTEXALPHA=!1,u.OPACITYDIRECTUV=0,u.OPACITYRGB=!1,u.ALPHATEST=!1,u.DEPTHPREPASS=!1,u.ALPHABLEND=!1,u.ALPHAFROMALBEDO=!1,u.ALPHATESTVALUE="0.5",u.SPECULAROVERALPHA=!1,u.RADIANCEOVERALPHA=!1,u.ALPHAFRESNEL=!1,u.LINEARALPHAFRESNEL=!1,u.PREMULTIPLYALPHA=!1,u.EMISSIVE=!1,u.EMISSIVEDIRECTUV=0,u.REFLECTIVITY=!1,u.REFLECTIVITYDIRECTUV=0,u.SPECULARTERM=!1,u.MICROSURFACEFROMREFLECTIVITYMAP=!1,u.MICROSURFACEAUTOMATIC=!1,u.LODBASEDMICROSFURACE=!1,u.MICROSURFACEMAP=!1,u.MICROSURFACEMAPDIRECTUV=0,u.METALLICWORKFLOW=!1,u.ROUGHNESSSTOREINMETALMAPALPHA=!1,u.ROUGHNESSSTOREINMETALMAPGREEN=!1,u.METALLNESSSTOREINMETALMAPBLUE=!1,u.AOSTOREINMETALMAPRED=!1,u.METALLIC_REFLECTANCE=!1,u.METALLIC_REFLECTANCEDIRECTUV=0,u.ENVIRONMENTBRDF=!1,u.ENVIRONMENTBRDF_RGBD=!1,u.NORMAL=!1,u.TANGENT=!1,u.BUMP=!1,u.BUMPDIRECTUV=0,u.OBJECTSPACE_NORMALMAP=!1,u.PARALLAX=!1,u.PARALLAXOCCLUSION=!1,u.NORMALXYSCALE=!0,u.LIGHTMAP=!1,u.LIGHTMAPDIRECTUV=0,u.USELIGHTMAPASSHADOWMAP=!1,u.GAMMALIGHTMAP=!1,u.RGBDLIGHTMAP=!1,u.REFLECTION=!1,u.REFLECTIONMAP_3D=!1,u.REFLECTIONMAP_SPHERICAL=!1,u.REFLECTIONMAP_PLANAR=!1,u.REFLECTIONMAP_CUBIC=!1,u.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,u.REFLECTIONMAP_PROJECTION=!1,u.REFLECTIONMAP_SKYBOX=!1,u.REFLECTIONMAP_EXPLICIT=!1,u.REFLECTIONMAP_EQUIRECTANGULAR=!1,u.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,u.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,u.INVERTCUBICMAP=!1,u.USESPHERICALFROMREFLECTIONMAP=!1,u.USEIRRADIANCEMAP=!1,u.SPHERICAL_HARMONICS=!1,u.USESPHERICALINVERTEX=!1,u.REFLECTIONMAP_OPPOSITEZ=!1,u.LODINREFLECTIONALPHA=!1,u.GAMMAREFLECTION=!1,u.RGBDREFLECTION=!1,u.LINEARSPECULARREFLECTION=!1,u.RADIANCEOCCLUSION=!1,u.HORIZONOCCLUSION=!1,u.INSTANCES=!1,u.THIN_INSTANCES=!1,u.PREPASS=!1,u.PREPASS_IRRADIANCE=!1,u.PREPASS_IRRADIANCE_INDEX=-1,u.PREPASS_ALBEDO=!1,u.PREPASS_ALBEDO_INDEX=-1,u.PREPASS_DEPTH=!1,u.PREPASS_DEPTH_INDEX=-1,u.PREPASS_NORMAL=!1,u.PREPASS_NORMAL_INDEX=-1,u.PREPASS_POSITION=!1,u.PREPASS_POSITION_INDEX=-1,u.PREPASS_VELOCITY=!1,u.PREPASS_VELOCITY_INDEX=-1,u.PREPASS_REFLECTIVITY=!1,u.PREPASS_REFLECTIVITY_INDEX=-1,u.SCENE_MRT_COUNT=0,u.NUM_BONE_INFLUENCERS=0,u.BonesPerMesh=0,u.BONETEXTURE=!1,u.BONES_VELOCITY_ENABLED=!1,u.NONUNIFORMSCALING=!1,u.MORPHTARGETS=!1,u.MORPHTARGETS_NORMAL=!1,u.MORPHTARGETS_TANGENT=!1,u.MORPHTARGETS_UV=!1,u.NUM_MORPH_INFLUENCERS=0,u.MORPHTARGETS_TEXTURE=!1,u.IMAGEPROCESSING=!1,u.VIGNETTE=!1,u.VIGNETTEBLENDMODEMULTIPLY=!1,u.VIGNETTEBLENDMODEOPAQUE=!1,u.TONEMAPPING=!1,u.TONEMAPPING_ACES=!1,u.CONTRAST=!1,u.COLORCURVES=!1,u.COLORGRADING=!1,u.COLORGRADING3D=!1,u.SAMPLER3DGREENDEPTH=!1,u.SAMPLER3DBGRMAP=!1,u.IMAGEPROCESSINGPOSTPROCESS=!1,u.EXPOSURE=!1,u.MULTIVIEW=!1,u.USEPHYSICALLIGHTFALLOFF=!1,u.USEGLTFLIGHTFALLOFF=!1,u.TWOSIDEDLIGHTING=!1,u.SHADOWFLOAT=!1,u.CLIPPLANE=!1,u.CLIPPLANE2=!1,u.CLIPPLANE3=!1,u.CLIPPLANE4=!1,u.CLIPPLANE5=!1,u.CLIPPLANE6=!1,u.POINTSIZE=!1,u.FOG=!1,u.LOGARITHMICDEPTH=!1,u.FORCENORMALFORWARD=!1,u.SPECULARAA=!1,u.CLEARCOAT=!1,u.CLEARCOAT_DEFAULTIOR=!1,u.CLEARCOAT_TEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS=!1,u.CLEARCOAT_TEXTUREDIRECTUV=0,u.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,u.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.CLEARCOAT_BUMP=!1,u.CLEARCOAT_BUMPDIRECTUV=0,u.CLEARCOAT_REMAP_F0=!0,u.CLEARCOAT_TINT=!1,u.CLEARCOAT_TINT_TEXTURE=!1,u.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,u.ANISOTROPIC=!1,u.ANISOTROPIC_TEXTURE=!1,u.ANISOTROPIC_TEXTUREDIRECTUV=0,u.BRDF_V_HEIGHT_CORRELATED=!1,u.MS_BRDF_ENERGY_CONSERVATION=!1,u.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,u.SHEEN=!1,u.SHEEN_TEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS=!1,u.SHEEN_TEXTUREDIRECTUV=0,u.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,u.SHEEN_LINKWITHALBEDO=!1,u.SHEEN_ROUGHNESS=!1,u.SHEEN_ALBEDOSCALING=!1,u.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.SUBSURFACE=!1,u.SS_REFRACTION=!1,u.SS_TRANSLUCENCY=!1,u.SS_SCATTERING=!1,u.SS_THICKNESSANDMASK_TEXTURE=!1,u.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,u.SS_REFRACTIONMAP_3D=!1,u.SS_REFRACTIONMAP_OPPOSITEZ=!1,u.SS_LODINREFRACTIONALPHA=!1,u.SS_GAMMAREFRACTION=!1,u.SS_RGBDREFRACTION=!1,u.SS_LINEARSPECULARREFRACTION=!1,u.SS_LINKREFRACTIONTOTRANSPARENCY=!1,u.SS_ALBEDOFORREFRACTIONTINT=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,u.UNLIT=!1,u.DEBUGMODE=0,u.rebuild(),u}return T.prototype.reset=function(){w.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},T}(O.a),Bt=function(w){Object(f.d)(T,w);function T(u,_){var U=w.call(this,u,_)||this;return U._directIntensity=1,U._emissiveIntensity=1,U._environmentIntensity=1,U._specularIntensity=1,U._lightingInfos=new h.f(U._directIntensity,U._emissiveIntensity,U._environmentIntensity,U._specularIntensity),U._disableBumpMap=!1,U._albedoTexture=null,U._ambientTexture=null,U._ambientTextureStrength=1,U._ambientTextureImpactOnAnalyticalLights=T.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,U._opacityTexture=null,U._reflectionTexture=null,U._emissiveTexture=null,U._reflectivityTexture=null,U._metallicTexture=null,U._metallic=null,U._roughness=null,U._metallicF0Factor=1,U._metallicReflectanceColor=l.a.White(),U._metallicReflectanceTexture=null,U._microSurfaceTexture=null,U._bumpTexture=null,U._lightmapTexture=null,U._ambientColor=new l.a(0,0,0),U._albedoColor=new l.a(1,1,1),U._reflectivityColor=new l.a(1,1,1),U._reflectionColor=new l.a(1,1,1),U._emissiveColor=new l.a(0,0,0),U._microSurface=.9,U._useLightmapAsShadowmap=!1,U._useHorizonOcclusion=!0,U._useRadianceOcclusion=!0,U._useAlphaFromAlbedoTexture=!1,U._useSpecularOverAlpha=!0,U._useMicroSurfaceFromReflectivityMapAlpha=!1,U._useRoughnessFromMetallicTextureAlpha=!0,U._useRoughnessFromMetallicTextureGreen=!1,U._useMetallnessFromMetallicTextureBlue=!1,U._useAmbientOcclusionFromMetallicTextureRed=!1,U._useAmbientInGrayScale=!1,U._useAutoMicroSurfaceFromReflectivityMap=!1,U._lightFalloff=T.LIGHTFALLOFF_PHYSICAL,U._useRadianceOverAlpha=!0,U._useObjectSpaceNormalMap=!1,U._useParallax=!1,U._useParallaxOcclusion=!1,U._parallaxScaleBias=.05,U._disableLighting=!1,U._maxSimultaneousLights=4,U._invertNormalMapX=!1,U._invertNormalMapY=!1,U._twoSidedLighting=!1,U._alphaCutOff=.4,U._forceAlphaTest=!1,U._useAlphaFresnel=!1,U._useLinearAlphaFresnel=!1,U._environmentBRDFTexture=null,U._forceIrradianceInFragment=!1,U._realTimeFiltering=!1,U._realTimeFilteringQuality=8,U._forceNormalForward=!1,U._enableSpecularAntiAliasing=!1,U._imageProcessingObserver=null,U._renderTargets=new v.a(16),U._globalAmbientColor=new l.a(0,0,0),U._useLogarithmicDepth=!1,U._unlit=!1,U._debugMode=0,U.debugMode=0,U.debugLimit=-1,U.debugFactor=1,U.clearCoat=new t.a(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.anisotropy=new r(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.brdf=new a(U._markAllSubMeshesAsMiscDirty.bind(U)),U.sheen=new p(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.detailMap=new Fe.a(U._markAllSubMeshesAsTexturesDirty.bind(U)),U._rebuildInParallel=!1,U._attachImageProcessingConfiguration(null),U.getRenderTargetTextures=function(){return U._renderTargets.reset(),e.a.ReflectionTextureEnabled&&U._reflectionTexture&&U._reflectionTexture.isRenderTarget&&U._renderTargets.push(U._reflectionTexture),U.subSurface.fillRenderTargetTextures(U._renderTargets),U._renderTargets},U._environmentBRDFTexture=c.a.GetEnvironmentBRDFTexture(_),U.subSurface=new m(U._markAllSubMeshesAsTexturesDirty.bind(U),U._markScenePrePassDirty.bind(U),_),U.prePassConfiguration=new S.a,U}return Object.defineProperty(T.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(u){this._realTimeFiltering=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(u){this._realTimeFilteringQuality=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),T.prototype._attachImageProcessingConfiguration=function(u){var _=this;u!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),u?this._imageProcessingConfiguration=u:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){_._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(T.prototype,"hasRenderTargetTextures",{get:function(){return e.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),T.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(T.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(u){this._useLogarithmicDepth=u&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===T.PBRMATERIAL_OPAQUE||this._transparencyMode===T.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),T.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},T.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===T.PBRMATERIAL_ALPHATEST)},T.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==T.PBRMATERIAL_OPAQUE},T.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},T.prototype.getAlphaTestTexture=function(){return this._albedoTexture},T.prototype.isReadyForSubMesh=function(u,_,U){if(_.effect&&this.isFrozen&&_.effect._wasPreviouslyReady)return!0;_._materialDefines||(_._materialDefines=new Be);var oe=_._materialDefines;if(this._isReadyForSubMesh(_))return!0;var ue=this.getScene(),$=ue.getEngine();if(oe._areTexturesDirty&&ue.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&e.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&e.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Se=this._getReflectionTexture();if(Se&&e.a.ReflectionTextureEnabled&&(!Se.isReadyOrNotBlocking()||Se.irradianceTexture&&!Se.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&e.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&e.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(e.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if($.getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(oe,ue)||!this.clearCoat.isReadyForSubMesh(oe,ue,$,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(oe,ue)||!this.anisotropy.isReadyForSubMesh(oe,ue)||!this.detailMap.isReadyForSubMesh(oe,ue)||oe._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!$.getCaps().standardDerivatives&&!u.isVerticesDataPresent(i.b.NormalKind)&&(u.createNormals(!0),P.a.Warn("PBRMaterial: Normals have been created for the mesh: "+u.name));var se=_.effect,X=oe._areLightsDisposed,fe=this._prepareEffect(u,oe,this.onCompiled,this.onError,U,null,_.getRenderingMesh().hasThinInstances);if(fe)if(this._onEffectCreatedObservable&&(De.effect=fe,De.subMesh=_,this._onEffectCreatedObservable.notifyObservers(De)),this.allowShaderHotSwapping&&se&&!fe.isReady()){if(fe=se,this._rebuildInParallel=!0,oe.markAsUnprocessed(),X)return oe._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,ue.resetCachedMaterial(),_.setEffect(fe,oe),this.buildUniformLayout();return!_.effect||!_.effect.isReady()?!1:(oe._renderId=ue.getRenderId(),_.effect._wasPreviouslyReady=!0,!0)},T.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},T.prototype._prepareEffect=function(u,_,U,oe,ue,$,Se){if(U===void 0&&(U=null),oe===void 0&&(oe=null),ue===void 0&&(ue=null),$===void 0&&($=null),this._prepareDefines(u,_,ue,$,Se),!_.isDirty)return null;_.markAsProcessed();var se=this.getScene(),X=se.getEngine(),fe=new Nt.a,ve=0;_.USESPHERICALINVERTEX&&fe.addFallback(ve++,"USESPHERICALINVERTEX"),_.FOG&&fe.addFallback(ve,"FOG"),_.SPECULARAA&&fe.addFallback(ve,"SPECULARAA"),_.POINTSIZE&&fe.addFallback(ve,"POINTSIZE"),_.LOGARITHMICDEPTH&&fe.addFallback(ve,"LOGARITHMICDEPTH"),_.PARALLAX&&fe.addFallback(ve,"PARALLAX"),_.PARALLAXOCCLUSION&&fe.addFallback(ve++,"PARALLAXOCCLUSION"),ve=r.AddFallbacks(_,fe,ve),ve=r.AddFallbacks(_,fe,ve),ve=m.AddFallbacks(_,fe,ve),ve=p.AddFallbacks(_,fe,ve),_.ENVIRONMENTBRDF&&fe.addFallback(ve++,"ENVIRONMENTBRDF"),_.TANGENT&&fe.addFallback(ve++,"TANGENT"),_.BUMP&&fe.addFallback(ve++,"BUMP"),ve=n.a.HandleFallbacksForShadows(_,fe,this._maxSimultaneousLights,ve++),_.SPECULARTERM&&fe.addFallback(ve++,"SPECULARTERM"),_.USESPHERICALFROMREFLECTIONMAP&&fe.addFallback(ve++,"USESPHERICALFROMREFLECTIONMAP"),_.USEIRRADIANCEMAP&&fe.addFallback(ve++,"USEIRRADIANCEMAP"),_.LIGHTMAP&&fe.addFallback(ve++,"LIGHTMAP"),_.NORMAL&&fe.addFallback(ve++,"NORMAL"),_.AMBIENT&&fe.addFallback(ve++,"AMBIENT"),_.EMISSIVE&&fe.addFallback(ve++,"EMISSIVE"),_.VERTEXCOLOR&&fe.addFallback(ve++,"VERTEXCOLOR"),_.MORPHTARGETS&&fe.addFallback(ve++,"MORPHTARGETS"),_.MULTIVIEW&&fe.addFallback(0,"MULTIVIEW");var Ae=[i.b.PositionKind];_.NORMAL&&Ae.push(i.b.NormalKind),_.TANGENT&&Ae.push(i.b.TangentKind),_.UV1&&Ae.push(i.b.UVKind),_.UV2&&Ae.push(i.b.UV2Kind),_.VERTEXCOLOR&&Ae.push(i.b.ColorKind),n.a.PrepareAttributesForBones(Ae,u,_,fe),n.a.PrepareAttributesForInstances(Ae,_),n.a.PrepareAttributesForMorphTargets(Ae,u,_);var le="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],ye=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),m.AddUniforms(Pe),m.AddSamplers(be),t.a.AddUniforms(Pe),t.a.AddSamplers(be),r.AddUniforms(Pe),r.AddSamplers(be),p.AddUniforms(Pe),p.AddSamplers(be),S.a.AddUniforms(Pe),S.a.AddSamplers(Pe),C.a&&(C.a.PrepareUniforms(Pe,_),C.a.PrepareSamplers(be,_)),n.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:_,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(le=this.customShaderNameResolve(le,Pe,ye,be,_,Ae,Ne));var Ue=_.toString();return X.createEffect(le,{attributes:Ae,uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:Ue,fallbacks:fe,onCompiled:U,onError:oe,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:_.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:_.PREPASS},X)},T.prototype._prepareDefines=function(u,_,U,oe,ue){U===void 0&&(U=null),oe===void 0&&(oe=null),ue===void 0&&(ue=!1);var $=this.getScene(),Se=$.getEngine();if(n.a.PrepareDefinesForLights($,u,_,!0,this._maxSimultaneousLights,this._disableLighting),_._needNormals=!0,n.a.PrepareDefinesForMultiview($,_),n.a.PrepareDefinesForPrePass($,_,this.canRenderToMRT),_.METALLICWORKFLOW=this.isMetallicWorkflow(),_._areTexturesDirty){if(_._needUVs=!1,$.texturesEnabled){$.getEngine().getCaps().textureLOD&&(_.LODBASEDMICROSFURACE=!0),this._albedoTexture&&e.a.DiffuseTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._albedoTexture,_,"ALBEDO"),_.GAMMAALBEDO=this._albedoTexture.gammaSpace):_.ALBEDO=!1,this._ambientTexture&&e.a.AmbientTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._ambientTexture,_,"AMBIENT"),_.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):_.AMBIENT=!1,this._opacityTexture&&e.a.OpacityTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._opacityTexture,_,"OPACITY"),_.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):_.OPACITY=!1;var se=this._getReflectionTexture();if(se&&e.a.ReflectionTextureEnabled){switch(_.REFLECTION=!0,_.GAMMAREFLECTION=se.gammaSpace,_.RGBDREFLECTION=se.isRGBD,_.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!se.invertZ:se.invertZ,_.LODINREFLECTIONALPHA=se.lodLevelInAlpha,_.LINEARSPECULARREFLECTION=se.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(_.NUM_SAMPLES=""+this.realTimeFilteringQuality,Se._features.needTypeSuffixInShaderConstants&&(_.NUM_SAMPLES=_.NUM_SAMPLES+"u"),_.REALTIME_FILTERING=!0):_.REALTIME_FILTERING=!1,se.coordinatesMode===M.a.INVCUBIC_MODE&&(_.INVERTCUBICMAP=!0),_.REFLECTIONMAP_3D=se.isCube,_.REFLECTIONMAP_CUBIC=!1,_.REFLECTIONMAP_EXPLICIT=!1,_.REFLECTIONMAP_PLANAR=!1,_.REFLECTIONMAP_PROJECTION=!1,_.REFLECTIONMAP_SKYBOX=!1,_.REFLECTIONMAP_SPHERICAL=!1,_.REFLECTIONMAP_EQUIRECTANGULAR=!1,_.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,_.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,se.coordinatesMode){case M.a.EXPLICIT_MODE:_.REFLECTIONMAP_EXPLICIT=!0;break;case M.a.PLANAR_MODE:_.REFLECTIONMAP_PLANAR=!0;break;case M.a.PROJECTION_MODE:_.REFLECTIONMAP_PROJECTION=!0;break;case M.a.SKYBOX_MODE:_.REFLECTIONMAP_SKYBOX=!0;break;case M.a.SPHERICAL_MODE:_.REFLECTIONMAP_SPHERICAL=!0;break;case M.a.EQUIRECTANGULAR_MODE:_.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case M.a.FIXED_EQUIRECTANGULAR_MODE:_.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case M.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:_.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case M.a.CUBIC_MODE:case M.a.INVCUBIC_MODE:default:_.REFLECTIONMAP_CUBIC=!0,_.USE_LOCAL_REFLECTIONMAP_CUBIC=!!se.boundingBoxSize;break}se.coordinatesMode!==M.a.SKYBOX_MODE&&(se.irradianceTexture?(_.USEIRRADIANCEMAP=!0,_.USESPHERICALFROMREFLECTIONMAP=!1):se.isCube&&(_.USESPHERICALFROMREFLECTIONMAP=!0,_.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||$.getEngine().getCaps().maxVaryingVectors<=8?_.USESPHERICALINVERTEX=!1:_.USESPHERICALINVERTEX=!0))}else _.REFLECTION=!1,_.REFLECTIONMAP_3D=!1,_.REFLECTIONMAP_SPHERICAL=!1,_.REFLECTIONMAP_PLANAR=!1,_.REFLECTIONMAP_CUBIC=!1,_.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,_.REFLECTIONMAP_PROJECTION=!1,_.REFLECTIONMAP_SKYBOX=!1,_.REFLECTIONMAP_EXPLICIT=!1,_.REFLECTIONMAP_EQUIRECTANGULAR=!1,_.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,_.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,_.INVERTCUBICMAP=!1,_.USESPHERICALFROMREFLECTIONMAP=!1,_.USEIRRADIANCEMAP=!1,_.USESPHERICALINVERTEX=!1,_.REFLECTIONMAP_OPPOSITEZ=!1,_.LODINREFLECTIONALPHA=!1,_.GAMMAREFLECTION=!1,_.RGBDREFLECTION=!1,_.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&e.a.LightmapTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._lightmapTexture,_,"LIGHTMAP"),_.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,_.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,_.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):_.LIGHTMAP=!1,this._emissiveTexture&&e.a.EmissiveTextureEnabled?n.a.PrepareDefinesForMergedUV(this._emissiveTexture,_,"EMISSIVE"):_.EMISSIVE=!1,e.a.SpecularTextureEnabled?(this._metallicTexture?(n.a.PrepareDefinesForMergedUV(this._metallicTexture,_,"REFLECTIVITY"),_.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,_.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,_.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,_.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(n.a.PrepareDefinesForMergedUV(this._reflectivityTexture,_,"REFLECTIVITY"),_.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,_.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):_.REFLECTIVITY=!1,this._metallicReflectanceTexture?n.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,_,"METALLIC_REFLECTANCE"):_.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?n.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,_,"MICROSURFACEMAP"):_.MICROSURFACEMAP=!1):(_.REFLECTIVITY=!1,_.MICROSURFACEMAP=!1),$.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap?(n.a.PrepareDefinesForMergedUV(this._bumpTexture,_,"BUMP"),this._useParallax&&this._albedoTexture&&e.a.DiffuseTextureEnabled?(_.PARALLAX=!0,_.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):_.PARALLAX=!1,_.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):_.BUMP=!1,this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled?(_.ENVIRONMENTBRDF=!0,_.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(_.ENVIRONMENTBRDF=!1,_.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?_.ALPHAFROMALBEDO=!0:_.ALPHAFROMALBEDO=!1}_.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===T.LIGHTFALLOFF_STANDARD?(_.USEPHYSICALLIGHTFALLOFF=!1,_.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===T.LIGHTFALLOFF_GLTF?(_.USEPHYSICALLIGHTFALLOFF=!1,_.USEGLTFLIGHTFALLOFF=!0):(_.USEPHYSICALLIGHTFALLOFF=!0,_.USEGLTFLIGHTFALLOFF=!1),_.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?_.TWOSIDEDLIGHTING=!0:_.TWOSIDEDLIGHTING=!1,_.SPECULARAA=$.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(_._areTexturesDirty||_._areMiscDirty)&&(_.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),_.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,_.ALPHABLEND=this.needAlphaBlendingForMesh(u),_.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,_.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),_._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(_),_.FORCENORMALFORWARD=this._forceNormalForward,_.RADIANCEOCCLUSION=this._useRadianceOcclusion,_.HORIZONOCCLUSION=this._useHorizonOcclusion,_._areMiscDirty&&(n.a.PrepareDefinesForMisc(u,$,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(u)||this._forceAlphaTest,_),_.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!u.isVerticesDataPresent(i.b.NormalKind),_.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(_,$),this.subSurface.prepareDefines(_,$),this.clearCoat.prepareDefines(_,$),this.anisotropy.prepareDefines(_,u,$),this.brdf.prepareDefines(_),this.sheen.prepareDefines(_,$),n.a.PrepareDefinesForFrameBoundValues($,Se,_,!!U,oe,ue),n.a.PrepareDefinesForAttributes(u,_,!0,!0,!0,this._transparencyMode!==T.PBRMATERIAL_OPAQUE)},T.prototype.forceCompilation=function(u,_,U){var oe=this,ue=Object(f.a)({clipPlane:!1,useInstances:!1},U),$=new Be,Se=this._prepareEffect(u,$,void 0,void 0,ue.useInstances,ue.clipPlane,u.hasThinInstances);this._onEffectCreatedObservable&&(De.effect=Se,De.subMesh=null,this._onEffectCreatedObservable.notifyObservers(De)),Se.isReady()?_&&_(this):Se.onCompileObservable.add(function(){_&&_(oe)})},T.prototype.buildUniformLayout=function(){var u=this._uniformBuffer;u.addUniform("vAlbedoInfos",2),u.addUniform("vAmbientInfos",4),u.addUniform("vOpacityInfos",2),u.addUniform("vEmissiveInfos",2),u.addUniform("vLightmapInfos",2),u.addUniform("vReflectivityInfos",3),u.addUniform("vMicroSurfaceSamplerInfos",2),u.addUniform("vReflectionInfos",2),u.addUniform("vReflectionFilteringInfo",2),u.addUniform("vReflectionPosition",3),u.addUniform("vReflectionSize",3),u.addUniform("vBumpInfos",3),u.addUniform("albedoMatrix",16),u.addUniform("ambientMatrix",16),u.addUniform("opacityMatrix",16),u.addUniform("emissiveMatrix",16),u.addUniform("lightmapMatrix",16),u.addUniform("reflectivityMatrix",16),u.addUniform("microSurfaceSamplerMatrix",16),u.addUniform("bumpMatrix",16),u.addUniform("vTangentSpaceParams",2),u.addUniform("reflectionMatrix",16),u.addUniform("vReflectionColor",3),u.addUniform("vAlbedoColor",4),u.addUniform("vLightingIntensity",4),u.addUniform("vReflectionMicrosurfaceInfos",3),u.addUniform("pointSize",1),u.addUniform("vReflectivityColor",4),u.addUniform("vEmissiveColor",3),u.addUniform("vAmbientColor",3),u.addUniform("vDebugMode",2),u.addUniform("vMetallicReflectanceFactors",4),u.addUniform("vMetallicReflectanceInfos",2),u.addUniform("metallicReflectanceMatrix",16),t.a.PrepareUniformBuffer(u),r.PrepareUniformBuffer(u),p.PrepareUniformBuffer(u),m.PrepareUniformBuffer(u),Fe.a.PrepareUniformBuffer(u),u.addUniform("vSphericalL00",3),u.addUniform("vSphericalL1_1",3),u.addUniform("vSphericalL10",3),u.addUniform("vSphericalL11",3),u.addUniform("vSphericalL2_2",3),u.addUniform("vSphericalL2_1",3),u.addUniform("vSphericalL20",3),u.addUniform("vSphericalL21",3),u.addUniform("vSphericalL22",3),u.addUniform("vSphericalX",3),u.addUniform("vSphericalY",3),u.addUniform("vSphericalZ",3),u.addUniform("vSphericalXX_ZZ",3),u.addUniform("vSphericalYY_ZZ",3),u.addUniform("vSphericalZZ",3),u.addUniform("vSphericalXY",3),u.addUniform("vSphericalYZ",3),u.addUniform("vSphericalZX",3),u.create()},T.prototype.unbind=function(){if(this._activeEffect){var u=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),u=!0),this.subSurface.unbind(this._activeEffect)&&(u=!0),u&&this._markAllSubMeshesAsTexturesDirty()}w.prototype.unbind.call(this)},T.prototype.bindForSubMesh=function(u,_,U){var oe=this.getScene(),ue=U._materialDefines;if(!!ue){var $=U.effect;if(!!$){this._activeEffect=$,_.getMeshUniformBuffer().bindToEffect($,"Mesh"),_.transferToEffect(u),this.prePassConfiguration.bindForSubMesh(this._activeEffect,oe,_,u,this.isFrozen),ue.OBJECTSPACE_NORMALMAP&&(u.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Se=this._mustRebind(oe,$,_.visibility);n.a.BindBonesParameters(_,this._activeEffect,this.prePassConfiguration);var se=null,X=this._uniformBuffer;if(Se){var fe=oe.getEngine();if(X.bindToEffect($,"Material"),this.bindViewProjection($),se=this._getReflectionTexture(),!X.useUbo||!this.isFrozen||!X.isSync){if(oe.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&(X.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),n.a.BindTextureMatrix(this._albedoTexture,X,"albedo")),this._ambientTexture&&e.a.AmbientTextureEnabled&&(X.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),n.a.BindTextureMatrix(this._ambientTexture,X,"ambient")),this._opacityTexture&&e.a.OpacityTextureEnabled&&(X.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),n.a.BindTextureMatrix(this._opacityTexture,X,"opacity")),se&&e.a.ReflectionTextureEnabled){if(X.updateMatrix("reflectionMatrix",se.getReflectionTextureMatrix()),X.updateFloat2("vReflectionInfos",se.level,0),se.boundingBoxSize){var ve=se;X.updateVector3("vReflectionPosition",ve.boundingBoxPosition),X.updateVector3("vReflectionSize",ve.boundingBoxSize)}if(this.realTimeFiltering){var Ae=se.getSize().width;X.updateFloat2("vReflectionFilteringInfo",Ae,d.a.Log2(Ae))}if(!ue.USEIRRADIANCEMAP){var le=se.sphericalPolynomial;if(ue.USESPHERICALFROMREFLECTIONMAP&&le)if(ue.SPHERICAL_HARMONICS){var Pe=le.preScaledHarmonics;X.updateVector3("vSphericalL00",Pe.l00),X.updateVector3("vSphericalL1_1",Pe.l1_1),X.updateVector3("vSphericalL10",Pe.l10),X.updateVector3("vSphericalL11",Pe.l11),X.updateVector3("vSphericalL2_2",Pe.l2_2),X.updateVector3("vSphericalL2_1",Pe.l2_1),X.updateVector3("vSphericalL20",Pe.l20),X.updateVector3("vSphericalL21",Pe.l21),X.updateVector3("vSphericalL22",Pe.l22)}else X.updateFloat3("vSphericalX",le.x.x,le.x.y,le.x.z),X.updateFloat3("vSphericalY",le.y.x,le.y.y,le.y.z),X.updateFloat3("vSphericalZ",le.z.x,le.z.y,le.z.z),X.updateFloat3("vSphericalXX_ZZ",le.xx.x-le.zz.x,le.xx.y-le.zz.y,le.xx.z-le.zz.z),X.updateFloat3("vSphericalYY_ZZ",le.yy.x-le.zz.x,le.yy.y-le.zz.y,le.yy.z-le.zz.z),X.updateFloat3("vSphericalZZ",le.zz.x,le.zz.y,le.zz.z),X.updateFloat3("vSphericalXY",le.xy.x,le.xy.y,le.xy.z),X.updateFloat3("vSphericalYZ",le.yz.x,le.yz.y,le.yz.z),X.updateFloat3("vSphericalZX",le.zx.x,le.zx.y,le.zx.z)}X.updateFloat3("vReflectionMicrosurfaceInfos",se.getSize().width,se.lodGenerationScale,se.lodGenerationOffset)}this._emissiveTexture&&e.a.EmissiveTextureEnabled&&(X.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),n.a.BindTextureMatrix(this._emissiveTexture,X,"emissive")),this._lightmapTexture&&e.a.LightmapTextureEnabled&&(X.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),n.a.BindTextureMatrix(this._lightmapTexture,X,"lightmap")),e.a.SpecularTextureEnabled&&(this._metallicTexture?(X.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),n.a.BindTextureMatrix(this._metallicTexture,X,"reflectivity")):this._reflectivityTexture&&(X.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),n.a.BindTextureMatrix(this._reflectivityTexture,X,"reflectivity")),this._metallicReflectanceTexture&&(X.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),n.a.BindTextureMatrix(this._metallicReflectanceTexture,X,"metallicReflectance")),this._microSurfaceTexture&&(X.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),n.a.BindTextureMatrix(this._microSurfaceTexture,X,"microSurfaceSampler"))),this._bumpTexture&&fe.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&(X.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),n.a.BindTextureMatrix(this._bumpTexture,X,"bump"),oe._mirroredCameraPosition?X.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):X.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&X.updateFloat("pointSize",this.pointSize),ue.METALLICWORKFLOW){l.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,l.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,X.updateColor4("vReflectivityColor",l.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,ye=1,Ne=Math.pow((be-ye)/(be+ye),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,l.c.Color3[0]);var Ue=this._metallicF0Factor;X.updateColor4("vMetallicReflectanceFactors",l.c.Color3[0],Ue)}else X.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);X.updateColor3("vEmissiveColor",e.a.EmissiveTextureEnabled?this._emissiveColor:l.a.BlackReadOnly),X.updateColor3("vReflectionColor",this._reflectionColor),!ue.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?X.updateColor4("vAlbedoColor",this._albedoColor,1):X.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*oe.environmentIntensity,this._lightingInfos.w=this._specularIntensity,X.updateVector4("vLightingIntensity",this._lightingInfos),oe.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),X.updateColor3("vAmbientColor",this._globalAmbientColor),X.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}oe.texturesEnabled&&(this._albedoTexture&&e.a.DiffuseTextureEnabled&&X.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&e.a.AmbientTextureEnabled&&X.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&e.a.OpacityTextureEnabled&&X.setTexture("opacitySampler",this._opacityTexture),se&&e.a.ReflectionTextureEnabled&&(ue.LODBASEDMICROSFURACE?X.setTexture("reflectionSampler",se):(X.setTexture("reflectionSampler",se._lodTextureMid||se),X.setTexture("reflectionSamplerLow",se._lodTextureLow||se),X.setTexture("reflectionSamplerHigh",se._lodTextureHigh||se)),ue.USEIRRADIANCEMAP&&X.setTexture("irradianceSampler",se.irradianceTexture)),ue.ENVIRONMENTBRDF&&X.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&e.a.EmissiveTextureEnabled&&X.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&e.a.LightmapTextureEnabled&&X.setTexture("lightmapSampler",this._lightmapTexture),e.a.SpecularTextureEnabled&&(this._metallicTexture?X.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&X.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&X.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&X.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&fe.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&X.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(X,oe,this.isFrozen),this.subSurface.bindForSubMesh(X,oe,fe,this.isFrozen,ue.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(X,oe,fe,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,U),this.anisotropy.bindForSubMesh(X,oe,this.isFrozen),this.sheen.bindForSubMesh(X,oe,this.isFrozen,U),n.a.BindClipPlane(this._activeEffect,oe),this.bindEyePosition($)}(Se||!this.isFrozen)&&(oe.lightsEnabled&&!this._disableLighting&&n.a.BindLights(oe,_,this._activeEffect,ue,this._maxSimultaneousLights,this._rebuildInParallel),(oe.fogEnabled&&_.applyFog&&oe.fogMode!==E.a.FOGMODE_NONE||se)&&this.bindView($),n.a.BindFogParameters(oe,_,this._activeEffect,!0),ue.NUM_MORPH_INFLUENCERS&&n.a.BindMorphTargetParameters(_,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),n.a.BindLogDepth(ue,this._activeEffect,oe)),this._afterBind(_,this._activeEffect),X.update()}}},T.prototype.getAnimatables=function(){var u=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&u.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&u.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&u.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&u.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&u.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?u.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&u.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&u.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&u.push(this._lightmapTexture),this.detailMap.getAnimatables(u),this.subSurface.getAnimatables(u),this.clearCoat.getAnimatables(u),this.sheen.getAnimatables(u),this.anisotropy.getAnimatables(u),u},T.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},T.prototype.getActiveTextures=function(){var u=w.prototype.getActiveTextures.call(this);return this._albedoTexture&&u.push(this._albedoTexture),this._ambientTexture&&u.push(this._ambientTexture),this._opacityTexture&&u.push(this._opacityTexture),this._reflectionTexture&&u.push(this._reflectionTexture),this._emissiveTexture&&u.push(this._emissiveTexture),this._reflectivityTexture&&u.push(this._reflectivityTexture),this._metallicTexture&&u.push(this._metallicTexture),this._metallicReflectanceTexture&&u.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&u.push(this._microSurfaceTexture),this._bumpTexture&&u.push(this._bumpTexture),this._lightmapTexture&&u.push(this._lightmapTexture),this.detailMap.getActiveTextures(u),this.subSurface.getActiveTextures(u),this.clearCoat.getActiveTextures(u),this.sheen.getActiveTextures(u),this.anisotropy.getActiveTextures(u),u},T.prototype.hasTexture=function(u){return w.prototype.hasTexture.call(this,u)||this._albedoTexture===u||this._ambientTexture===u||this._opacityTexture===u||this._reflectionTexture===u||this._reflectivityTexture===u||this._metallicTexture===u||this._metallicReflectanceTexture===u||this._microSurfaceTexture===u||this._bumpTexture===u||this._lightmapTexture===u?!0:this.detailMap.hasTexture(u)||this.subSurface.hasTexture(u)||this.clearCoat.hasTexture(u)||this.sheen.hasTexture(u)||this.anisotropy.hasTexture(u)},T.prototype.setPrePassRenderer=function(u){if(this.subSurface.isScatteringEnabled){var _=this.getScene().enableSubSurfaceForPrePass();return _&&(_.enabled=!0),!0}return!1},T.prototype.dispose=function(u,_){var U,oe,ue,$,Se,se,X,fe,ve,Ae,le;_&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(U=this._albedoTexture)===null||U===void 0||U.dispose(),(oe=this._ambientTexture)===null||oe===void 0||oe.dispose(),(ue=this._opacityTexture)===null||ue===void 0||ue.dispose(),($=this._reflectionTexture)===null||$===void 0||$.dispose(),(Se=this._emissiveTexture)===null||Se===void 0||Se.dispose(),(se=this._metallicTexture)===null||se===void 0||se.dispose(),(X=this._reflectivityTexture)===null||X===void 0||X.dispose(),(fe=this._bumpTexture)===null||fe===void 0||fe.dispose(),(ve=this._lightmapTexture)===null||ve===void 0||ve.dispose(),(Ae=this._metallicReflectanceTexture)===null||Ae===void 0||Ae.dispose(),(le=this._microSurfaceTexture)===null||le===void 0||le.dispose()),this.detailMap.dispose(_),this.subSurface.dispose(_),this.clearCoat.dispose(_),this.sheen.dispose(_),this.anisotropy.dispose(_),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),w.prototype.dispose.call(this,u,_)},T.PBRMATERIAL_OPAQUE=R.a.MATERIAL_OPAQUE,T.PBRMATERIAL_ALPHATEST=R.a.MATERIAL_ALPHATEST,T.PBRMATERIAL_ALPHABLEND=R.a.MATERIAL_ALPHABLEND,T.PBRMATERIAL_ALPHATESTANDBLEND=R.a.MATERIAL_ALPHATESTANDBLEND,T.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,T.LIGHTFALLOFF_PHYSICAL=0,T.LIGHTFALLOFF_GLTF=1,T.LIGHTFALLOFF_STANDARD=2,Object(f.c)([Object(s.i)()],T.prototype,"_imageProcessingConfiguration",void 0),Object(f.c)([Object(s.b)("_markAllSubMeshesAsMiscDirty")],T.prototype,"debugMode",void 0),Object(f.c)([Object(s.c)()],T.prototype,"useLogarithmicDepth",null),T}(I.a)},530:function(Z,H,o){"use strict";o.d(H,"a",function(){return i});var f=o(483),s=o(572),P=o(438),v=o(449),c=o(436),E=o(589),h=o(542),i=function(){function t(e,n,r,a,l,p,d,m,S,C){r===void 0&&(r=0),a===void 0&&(a=100),l===void 0&&(l=!1),p===void 0&&(p=1),C===void 0&&(C=!1),this.target=n,this.fromFrame=r,this.toFrame=a,this.loopAnimation=l,this.onAnimationEnd=d,this.onAnimationLoop=S,this.isAdditive=C,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new P.c,this.onAnimationLoopObservable=new P.c,this._scene=e,m&&this.appendAnimations(n,m),this._speedRatio=p,e._activeAnimatables.push(this)}return Object.defineProperty(t.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._weight},set:function(e){if(e===-1){this._weight=-1;return}this._weight=Math.min(Math.max(e,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(e){for(var n=0;n<this._runtimeAnimations.length;n++){var r=this._runtimeAnimations[n];r._prepareForSpeedRatioChange(e)}this._speedRatio=e},enumerable:!1,configurable:!0}),t.prototype.syncWith=function(e){if(this._syncRoot=e,e){var n=this._scene._activeAnimatables.indexOf(this);n>-1&&(this._scene._activeAnimatables.splice(n,1),this._scene._activeAnimatables.push(this))}return this},t.prototype.getAnimations=function(){return this._runtimeAnimations},t.prototype.appendAnimations=function(e,n){for(var r=this,a=0;a<n.length;a++){var l=n[a],p=new s.a(e,l,this._scene,this);p._onLoop=function(){r.onAnimationLoopObservable.notifyObservers(r),r.onAnimationLoop&&r.onAnimationLoop()},this._runtimeAnimations.push(p)}},t.prototype.getAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r].animation;return null},t.prototype.getRuntimeAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r];return null},t.prototype.reset=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},t.prototype.enableBlending=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)n[r].animation.enableBlending=!0,n[r].animation.blendingSpeed=e},t.prototype.disableBlending=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].animation.enableBlending=!1},t.prototype.goToFrame=function(e){var n=this._runtimeAnimations;if(n[0]){var r=n[0].animation.framePerSecond,a=n[0].currentFrame,l=this.speedRatio===0?0:(e-a)/r*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=l}for(var p=0;p<n.length;p++)n[p].goToFrame(e)},t.prototype.pause=function(){this._paused||(this._paused=!0)},t.prototype.restart=function(){this._paused=!1},t.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},t.prototype.stop=function(e,n){if(e||n){var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){for(var a=this._runtimeAnimations,l=a.length-1;l>=0;l--){var p=a[l];e&&p.animation.name!=e||n&&!n(p.target)||(p.dispose(),a.splice(l,1))}a.length==0&&(this._scene._activeAnimatables.splice(r,1),this._raiseOnAnimationEnd())}}else{var l=this._scene._activeAnimatables.indexOf(this);if(l>-1){this._scene._activeAnimatables.splice(l,1);for(var a=this._runtimeAnimations,l=0;l<a.length;l++)a[l].dispose();this._raiseOnAnimationEnd()}}},t.prototype.waitAsync=function(){var e=this;return new Promise(function(n,r){e.onAnimationEndObservable.add(function(){n(e)},void 0,void 0,e,!0)})},t.prototype._animate=function(e){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=e),!0;if(this._localDelayOffset===null?(this._localDelayOffset=e,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=e-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var n=!1,r=this._runtimeAnimations,a;for(a=0;a<r.length;a++){var l=r[a],p=l.animate(e-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);n=n||p}if(this.animationStarted=n,!n){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<r.length;a++)r[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return n},t}();v.a.prototype._animate=function(){if(!!this.animationsEnabled){var t=E.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=t}this.deltaTime=this.useConstantAnimationDeltaTime?16:(t-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=t;var e=this._activeAnimatables;if(e.length!==0){this._animationTime+=this.deltaTime;for(var n=this._animationTime,r=0;r<e.length;r++){var a=e[r];!a._animate(n)&&a.disposeOnEnd&&r--}this._processLateAnimationBindings()}}},v.a.prototype.beginWeightedAnimation=function(t,e,n,r,a,l,p,d,m,S,C){r===void 0&&(r=1),l===void 0&&(l=1),C===void 0&&(C=!1);var R=this.beginAnimation(t,e,n,a,l,p,d,!1,m,S,C);return R.weight=r,R},v.a.prototype.beginAnimation=function(t,e,n,r,a,l,p,d,m,S,C){a===void 0&&(a=1),d===void 0&&(d=!0),C===void 0&&(C=!1),e>n&&a>0&&(a*=-1),d&&this.stopAnimation(t,void 0,m),p||(p=new i(this,t,e,n,r,a,l,void 0,S,C));var R=m?m(t):!0;if(t.animations&&R&&p.appendAnimations(t,t.animations),t.getAnimatables)for(var O=t.getAnimatables(),I=0;I<O.length;I++)this.beginAnimation(O[I],e,n,r,a,l,p,d,m,S);return p.reset(),p},v.a.prototype.beginHierarchyAnimation=function(t,e,n,r,a,l,p,d,m,S,C,R){l===void 0&&(l=1),m===void 0&&(m=!0),R===void 0&&(R=!1);var O=t.getDescendants(e),I=[];I.push(this.beginAnimation(t,n,r,a,l,p,d,m,S,void 0,R));for(var M=0,F=O;M<F.length;M++){var x=F[M];I.push(this.beginAnimation(x,n,r,a,l,p,d,m,S,void 0,R))}return I},v.a.prototype.beginDirectAnimation=function(t,e,n,r,a,l,p,d,m){m===void 0&&(m=!1),l===void 0&&(l=1),n>r&&l>0&&(l*=-1);var S=new i(this,t,n,r,a,l,p,e,d,m);return S},v.a.prototype.beginDirectHierarchyAnimation=function(t,e,n,r,a,l,p,d,m,S){S===void 0&&(S=!1);var C=t.getDescendants(e),R=[];R.push(this.beginDirectAnimation(t,n,r,a,l,p,d,m,S));for(var O=0,I=C;O<I.length;O++){var M=I[O];R.push(this.beginDirectAnimation(M,n,r,a,l,p,d,m,S))}return R},v.a.prototype.getAnimatableByTarget=function(t){for(var e=0;e<this._activeAnimatables.length;e++)if(this._activeAnimatables[e].target===t)return this._activeAnimatables[e];return null},v.a.prototype.getAllAnimatablesByTarget=function(t){for(var e=[],n=0;n<this._activeAnimatables.length;n++)this._activeAnimatables[n].target===t&&e.push(this._activeAnimatables[n]);return e},v.a.prototype.stopAnimation=function(t,e,n){for(var r=this.getAllAnimatablesByTarget(t),a=0,l=r;a<l.length;a++){var p=l[a];p.stop(e,n)}},v.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var t=0;t<this._activeAnimatables.length;t++)this._activeAnimatables[t].stop();this._activeAnimatables=[]}for(var e=0,n=this.animationGroups;e<n.length;e++){var r=n[e];r.stop()}},v.a.prototype._registerTargetForLateAnimationBinding=function(t,e){var n=t.target;this._registeredForLateAnimationBindings.pushNoDuplicate(n),n._lateAnimationHolders||(n._lateAnimationHolders={}),n._lateAnimationHolders[t.targetPath]||(n._lateAnimationHolders[t.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:e}),t.isAdditive?(n._lateAnimationHolders[t.targetPath].additiveAnimations.push(t),n._lateAnimationHolders[t.targetPath].totalAdditiveWeight+=t.weight):(n._lateAnimationHolders[t.targetPath].animations.push(t),n._lateAnimationHolders[t.targetPath].totalWeight+=t.weight)},v.a.prototype._processLateAnimationBindingsForMatrices=function(t){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return t.originalValue;var e=1,n=c.c.Vector3[0],r=c.c.Vector3[1],a=c.c.Quaternion[0],l=0,p=t.animations[0],d=t.originalValue,m=1,S=!1;if(t.totalWeight<1)m=1-t.totalWeight,d.decompose(r,a,n);else{if(l=1,e=t.totalWeight,m=p.weight/e,m==1)if(t.totalAdditiveWeight)S=!0;else return p.currentValue;p.currentValue.decompose(r,a,n)}if(!S){r.scaleInPlace(m),n.scaleInPlace(m),a.scaleInPlace(m);for(var C=l;C<t.animations.length;C++){var R=t.animations[C];if(R.weight!==0){var m=R.weight/e,O=c.c.Vector3[2],I=c.c.Vector3[3],M=c.c.Quaternion[1];R.currentValue.decompose(I,M,O),I.scaleAndAddToRef(m,r),M.scaleAndAddToRef(m,a),O.scaleAndAddToRef(m,n)}}}for(var F=0;F<t.additiveAnimations.length;F++){var R=t.additiveAnimations[F];if(R.weight!==0){var O=c.c.Vector3[2],I=c.c.Vector3[3],M=c.c.Quaternion[1];R.currentValue.decompose(I,M,O),I.multiplyToRef(r,I),c.e.LerpToRef(r,I,R.weight,r),a.multiplyToRef(M,M),c.b.SlerpToRef(a,M,R.weight,a),O.scaleAndAddToRef(R.weight,n)}}var x=p?p._animationState.workValue:c.c.Matrix[0].clone();return c.a.ComposeToRef(r,a,n,x),x},v.a.prototype._processLateAnimationBindingsForQuaternions=function(t,e){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return e;var n=t.animations[0],r=t.originalValue,a=e;if(t.totalWeight===0&&t.totalAdditiveWeight>0)a.copyFrom(r);else if(t.animations.length===1){if(c.b.SlerpToRef(r,n.currentValue,Math.min(1,t.totalWeight),a),t.totalAdditiveWeight===0)return a}else if(t.animations.length>1){var l=1,p=void 0,d=void 0;if(t.totalWeight<1){var m=1-t.totalWeight;p=[],d=[],p.push(r),d.push(m)}else{if(t.animations.length===2&&(c.b.SlerpToRef(t.animations[0].currentValue,t.animations[1].currentValue,t.animations[1].weight/t.totalWeight,e),t.totalAdditiveWeight===0))return e;p=[],d=[],l=t.totalWeight}for(var S=0;S<t.animations.length;S++){var C=t.animations[S];p.push(C.currentValue),d.push(C.weight/l)}for(var R=0,O=0;O<p.length;){if(!O){c.b.SlerpToRef(p[O],p[O+1],d[O+1]/(d[O]+d[O+1]),e),a=e,R=d[O]+d[O+1],O+=2;continue}R+=d[O],c.b.SlerpToRef(a,p[O],d[O]/R,a),O++}}for(var I=0;I<t.additiveAnimations.length;I++){var C=t.additiveAnimations[I];C.weight!==0&&(a.multiplyToRef(C.currentValue,c.c.Quaternion[0]),c.b.SlerpToRef(a,c.c.Quaternion[0],C.weight,a))}return a},v.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var t=0;t<this._registeredForLateAnimationBindings.length;t++){var e=this._registeredForLateAnimationBindings.data[t];for(var n in e._lateAnimationHolders){var r=e._lateAnimationHolders[n],a=r.animations[0],l=r.originalValue,p=f.a.AllowMatrixDecomposeForInterpolation&&l.m,d=e[n];if(p)d=this._processLateAnimationBindingsForMatrices(r);else{var m=l.w!==void 0;if(m)d=this._processLateAnimationBindingsForQuaternions(r,d||c.b.Identity());else{var S=0,C=1;if(r.totalWeight<1)a&&l.scale?d=l.scale(1-r.totalWeight):a?d=l*(1-r.totalWeight):l.clone?d=l.clone():d=l;else if(a){C=r.totalWeight;var R=a.weight/C;R!==1?a.currentValue.scale?d=a.currentValue.scale(R):d=a.currentValue*R:d=a.currentValue,S=1}for(var O=S;O<r.animations.length;O++){var I=r.animations[O],M=I.weight/C;if(M)I.currentValue.scaleAndAddToRef?I.currentValue.scaleAndAddToRef(M,d):d+=I.currentValue*M;else continue}for(var F=0;F<r.additiveAnimations.length;F++){var I=r.additiveAnimations[F],M=I.weight;if(M)I.currentValue.scaleAndAddToRef?I.currentValue.scaleAndAddToRef(M,d):d+=I.currentValue*M;else continue}}}e[n]=d}e._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},h.a.prototype.copyAnimationRange=function(t,e,n,r,a){r===void 0&&(r=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new f.a(this.name,"_matrix",t.animations[0].framePerSecond,f.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var l=t.animations[0].getRange(e);if(!l)return!1;for(var p=l.from,d=l.to,m=t.animations[0].getKeys(),S=t.length,C=t.getParent(),R=this.getParent(),O=r&&C&&S&&this.length&&S!==this.length,I=O&&R&&C?R.length/C.length:1,M=r&&!R&&a&&(a.x!==1||a.y!==1||a.z!==1),F=this.animations[0].getKeys(),x,N,G,V=0,L=m.length;V<L;V++)x=m[V],x.frame>=p&&x.frame<=d&&(r?(G=x.value.clone(),O?(N=G.getTranslation(),G.setTranslation(N.scaleInPlace(I))):M&&a?(N=G.getTranslation(),G.setTranslation(N.multiplyInPlace(a))):G=x.value):G=x.value,F.push({frame:x.frame+n,value:G}));return this.animations[0].createRange(e,p+n,d+n),!0}},532:function(Z,H,o){"use strict";var f=o(467),s=o(456);f.a.prototype.createDynamicTexture=function(P,v,c,E){var h=new s.a(this,s.b.Dynamic);return h.baseWidth=P,h.baseHeight=v,c&&(P=this.needPOTTextures?f.a.GetExponentOfTwo(P,this._caps.maxTextureSize):P,v=this.needPOTTextures?f.a.GetExponentOfTwo(v,this._caps.maxTextureSize):v),h.width=P,h.height=v,h.isReady=!1,h.generateMipMaps=c,h.samplingMode=E,this.updateTextureSamplingMode(E,h),this._internalTexturesCache.push(h),h},f.a.prototype.updateDynamicTexture=function(P,v,c,E,h,i){if(E===void 0&&(E=!1),i===void 0&&(i=!1),!!P){var t=this._gl,e=t.TEXTURE_2D,n=this._bindTextureDirectly(e,P,!0,i);this._unpackFlipY(c===void 0?P.invertY:c),E&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var r=this._getWebGLTextureType(P.type),a=this._getInternalFormat(h||P.format),l=this._getRGBABufferInternalSizedFormat(P.type,a);t.texImage2D(e,0,l,a,r,v),P.generateMipMaps&&t.generateMipmap(e),n||this._bindTextureDirectly(e,null),E&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),P.isReady=!0}}},533:function(Z,H,o){"use strict";o.d(H,"a",function(){return h});var f=o(434),s=o(439),P=o(514),v=o(441),c=o(529),E=o(437),h=function(i){Object(f.d)(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.directIntensity=1,r.emissiveIntensity=1,r.environmentIntensity=1,r.specularIntensity=1,r.disableBumpMap=!1,r.ambientTextureStrength=1,r.ambientTextureImpactOnAnalyticalLights=t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,r.metallicF0Factor=1,r.metallicReflectanceColor=v.a.White(),r.ambientColor=new v.a(0,0,0),r.albedoColor=new v.a(1,1,1),r.reflectivityColor=new v.a(1,1,1),r.reflectionColor=new v.a(1,1,1),r.emissiveColor=new v.a(0,0,0),r.microSurface=1,r.useLightmapAsShadowmap=!1,r.useAlphaFromAlbedoTexture=!1,r.forceAlphaTest=!1,r.alphaCutOff=.4,r.useSpecularOverAlpha=!0,r.useMicroSurfaceFromReflectivityMapAlpha=!1,r.useRoughnessFromMetallicTextureAlpha=!0,r.useRoughnessFromMetallicTextureGreen=!1,r.useMetallnessFromMetallicTextureBlue=!1,r.useAmbientOcclusionFromMetallicTextureRed=!1,r.useAmbientInGrayScale=!1,r.useAutoMicroSurfaceFromReflectivityMap=!1,r.useRadianceOverAlpha=!0,r.useObjectSpaceNormalMap=!1,r.useParallax=!1,r.useParallaxOcclusion=!1,r.parallaxScaleBias=.05,r.disableLighting=!1,r.forceIrradianceInFragment=!1,r.maxSimultaneousLights=4,r.invertNormalMapX=!1,r.invertNormalMapY=!1,r.twoSidedLighting=!1,r.useAlphaFresnel=!1,r.useLinearAlphaFresnel=!1,r.environmentBRDFTexture=null,r.forceNormalForward=!1,r.enableSpecularAntiAliasing=!1,r.useHorizonOcclusion=!0,r.useRadianceOcclusion=!0,r.unlit=!1,r._environmentBRDFTexture=P.a.GetEnvironmentBRDFTexture(n),r}return Object.defineProperty(t.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(e){this.subSurface.refractionTexture=e,e?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(e){this.subSurface.indexOfRefraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(e){this.subSurface.invertRefractionY=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(e){this.subSurface.linkRefractionWithTransparency=e,e&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_PHYSICAL},set:function(e){e!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=c.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_GLTF},set:function(e){e!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=c.a.LIGHTFALLOFF_GLTF:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(e){this.imageProcessingConfiguration.colorCurvesEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(e){this.imageProcessingConfiguration.colorGradingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(e){this._imageProcessingConfiguration.toneMappingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(e){this._imageProcessingConfiguration.exposure=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(e){this._imageProcessingConfiguration.contrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(e){this._imageProcessingConfiguration.colorGradingTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(e){this._imageProcessingConfiguration.colorCurves=e},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"PBRMaterial"},t.prototype.clone=function(e){var n=this,r=s.a.Clone(function(){return new t(e,n.getScene())},this);return r.id=e,r.name=e,this.clearCoat.copyTo(r.clearCoat),this.anisotropy.copyTo(r.anisotropy),this.brdf.copyTo(r.brdf),this.sheen.copyTo(r.sheen),this.subSurface.copyTo(r.subSurface),r},t.prototype.serialize=function(){var e=s.a.Serialize(this);return e.customType="BABYLON.PBRMaterial",e.clearCoat=this.clearCoat.serialize(),e.anisotropy=this.anisotropy.serialize(),e.brdf=this.brdf.serialize(),e.sheen=this.sheen.serialize(),e.subSurface=this.subSurface.serialize(),e},t.Parse=function(e,n,r){var a=s.a.Parse(function(){return new t(e.name,n)},e,n,r);return e.clearCoat&&a.clearCoat.parse(e.clearCoat,n,r),e.anisotropy&&a.anisotropy.parse(e.anisotropy,n,r),e.brdf&&a.brdf.parse(e.brdf,n,r),e.sheen&&a.sheen.parse(e.sheen,n,r),e.subSurface&&a.subSurface.parse(e.subSurface,n,r),a},t.PBRMATERIAL_OPAQUE=c.a.PBRMATERIAL_OPAQUE,t.PBRMATERIAL_ALPHATEST=c.a.PBRMATERIAL_ALPHATEST,t.PBRMATERIAL_ALPHABLEND=c.a.PBRMATERIAL_ALPHABLEND,t.PBRMATERIAL_ALPHATESTANDBLEND=c.a.PBRMATERIAL_ALPHATESTANDBLEND,t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=c.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"directIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"specularIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"disableBumpMap",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureStrength",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"opacityTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallic",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"roughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicF0Factor",void 0),Object(f.c)([Object(s.e)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceColor",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurfaceTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty",null)],t.prototype,"lightmapTexture",void 0),Object(f.c)([Object(s.e)("ambient"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientColor",void 0),Object(f.c)([Object(s.e)("albedo"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoColor",void 0),Object(f.c)([Object(s.e)("reflectivity"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityColor",void 0),Object(f.c)([Object(s.e)("reflection"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionColor",void 0),Object(f.c)([Object(s.e)("emissive"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveColor",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurface",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLightmapAsShadowmap",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"useAlphaFromAlbedoTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"forceAlphaTest",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"alphaCutOff",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useSpecularOverAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientInGrayScale",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(f.c)([Object(s.c)()],t.prototype,"usePhysicalLightFalloff",null),Object(f.c)([Object(s.c)()],t.prototype,"useGLTFLightFalloff",null),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOverAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useObjectSpaceNormalMap",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallax",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallaxOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"parallaxScaleBias",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceIrradianceInFragment",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapX",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapY",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"twoSidedLighting",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAlphaFresnel",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLinearAlphaFresnel",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentBRDFTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceNormalForward",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"enableSpecularAntiAliasing",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useHorizonOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],t.prototype,"unlit",void 0),t}(c.a);E.a.RegisteredTypes["BABYLON.PBRMaterial"]=h},534:function(Z,H,o){"use strict";var f=o(435),s="postprocessVertexShader",P=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[s]=P;var v={name:s,shader:P}},535:function(Z,H,o){"use strict";var f=o(435),s="packingFunctions",P=`vec4 pack(float depth)
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
}`;f.a.IncludesShadersStore[s]=P;var v={name:s,shader:P}},538:function(Z,H,o){"use strict";o.d(H,"a",function(){return c});var f=o(434),s=o(442),P=o(458),v=o(574),c=function(E){Object(f.d)(h,E);function h(i,t,e,n,r){var a=this,l=r&&r.generateMipMaps?r.generateMipMaps:!1,p=r&&r.generateDepthTexture?r.generateDepthTexture:!1,d=!r||r.doNotChangeAspectRatio===void 0?!0:r.doNotChangeAspectRatio,m=r&&r.drawOnlyOnFirstAttachmentByDefault?r.drawOnlyOnFirstAttachmentByDefault:!1;if(a=E.call(this,i,t,n,l,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var S=[],C=[];a._initTypes(e,S,C,r);var R=!r||r.generateDepthBuffer===void 0?!0:r.generateDepthBuffer,O=!r||r.generateStencilBuffer===void 0?!1:r.generateStencilBuffer;return a._size=t,a._multiRenderTargetOptions={samplingModes:C,generateMipMaps:l,generateDepthBuffer:R,generateStencilBuffer:O,generateDepthTexture:p,types:S,textureCount:e},a._count=e,a._drawOnlyOnFirstAttachmentByDefault=m,e>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(h.prototype,"isSupported",{get:function(){var i,t;return(t=(i=this._engine)===null||i===void 0?void 0:i.getCaps().drawBuffersExtension)!==null&&t!==void 0?t:!1},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"wrapU",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapU=i},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"wrapV",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapV=i},enumerable:!1,configurable:!0}),h.prototype._initTypes=function(i,t,e,n){for(var r=0;r<i;r++)n&&n.types&&n.types[r]!==void 0?t.push(n.types[r]):t.push(n&&n.defaultType?n.defaultType:0),n&&n.samplingModes&&n.samplingModes[r]!==void 0?e.push(n.samplingModes[r]):e.push(s.a.BILINEAR_SAMPLINGMODE)},h.prototype._rebuild=function(i){if(i===void 0&&(i=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),i&&this._createTextures();for(var t=0;t<this._internalTextures.length;t++){var e=this._textures[t];e._texture=this._internalTextures[t]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},h.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},h.prototype._createTextures=function(){this._textures=[];for(var i=0;i<this._internalTextures.length;i++){var t=new s.a(null,this.getScene());t._texture=this._internalTextures[i],this._textures.push(t)}},h.prototype.replaceTexture=function(i,t){i._texture&&(this._textures[t]=i,this._internalTextures[t]=i._texture,t===0&&(this._texture=this._internalTextures[t]))},Object.defineProperty(h.prototype,"samples",{get:function(){return this._samples},set:function(i){this._samples!==i&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,i):this._samples=i)},enumerable:!1,configurable:!0}),h.prototype.resize=function(i){this._size=i,this._rebuild()},h.prototype.updateCount=function(i,t){this._multiRenderTargetOptions.textureCount=i,this._count=i;var e=[],n=[];this._initTypes(i,e,n,t),this._multiRenderTargetOptions.types=e,this._multiRenderTargetOptions.samplingModes=n,this._rebuild(!0)},h.prototype.unbindFrameBuffer=function(i,t){var e=this;i.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){e.onAfterRenderObservable.notifyObservers(t)})},h.prototype.dispose=function(){this.releaseInternalTextures(),E.prototype.dispose.call(this)},h.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var i=this._internalTextures.length-1;i>=0;i--)this._internalTextures[i]!==void 0&&(this._internalTextures[i].dispose(),this._internalTextures.splice(i,1))},h}(P.a)},542:function(Z,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(434),s=o(436),P=o(588),v=o(453),c=o(465),E=function(h){Object(f.d)(i,h);function i(t,e,n,r,a,l,p){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),l===void 0&&(l=null),p===void 0&&(p=null);var d=h.call(this,t,e.getScene())||this;return d.name=t,d.children=new Array,d.animations=new Array,d._index=null,d._absoluteTransform=new s.a,d._invertedAbsoluteTransform=new s.a,d._scalingDeterminant=1,d._worldTransform=new s.a,d._needToDecompose=!0,d._needToCompose=!1,d._linkedTransformNode=null,d._waitingTransformNodeId=null,d._skeleton=e,d._localMatrix=r?r.clone():s.a.Identity(),d._restPose=a||d._localMatrix.clone(),d._bindPose=d._localMatrix.clone(),d._baseMatrix=l||d._localMatrix.clone(),d._index=p,e.bones.push(d),d.setParent(n,!1),(l||r)&&d._updateDifferenceMatrix(),d}return Object.defineProperty(i.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(t){this._localMatrix.copyFrom(t),this._needToDecompose=!0},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"Bone"},i.prototype.getSkeleton=function(){return this._skeleton},i.prototype.getParent=function(){return this._parent},i.prototype.getChildren=function(){return this.children},i.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},i.prototype.setParent=function(t,e){if(e===void 0&&(e=!0),this._parent!==t){if(this._parent){var n=this._parent.children.indexOf(this);n!==-1&&this._parent.children.splice(n,1)}this._parent=t,this._parent&&this._parent.children.push(this),e&&this._updateDifferenceMatrix(),this.markAsDirty()}},i.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},i.prototype.getBaseMatrix=function(){return this._baseMatrix},i.prototype.getRestPose=function(){return this._restPose},i.prototype.setRestPose=function(t){this._restPose.copyFrom(t)},i.prototype.getBindPose=function(){return this._bindPose},i.prototype.setBindPose=function(t){this._bindPose.copyFrom(t)},i.prototype.getWorldMatrix=function(){return this._worldTransform},i.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},i.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},i.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},i.prototype.linkTransformNode=function(t){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=t,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},i.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(i.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(t){this._decompose(),this._localPosition.copyFrom(t),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.getRotation()},set:function(t){this.setRotation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(t){this.setRotationQuaternion(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"scaling",{get:function(){return this.getScale()},set:function(t){this.setScale(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),i.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=s.e.Zero(),this._localRotation=s.b.Zero(),this._localPosition=s.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},i.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,s.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},i.prototype.updateMatrix=function(t,e,n){e===void 0&&(e=!0),n===void 0&&(n=!0),this._baseMatrix.copyFrom(t),e&&this._updateDifferenceMatrix(),n?(this._needToCompose=!1,this._localMatrix.copyFrom(t),this._markAsDirtyAndDecompose()):this.markAsDirty()},i.prototype._updateDifferenceMatrix=function(t,e){if(e===void 0&&(e=!0),t||(t=this._baseMatrix),this._parent?t.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(t),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),e)for(var n=0;n<this.children.length;n++)this.children[n]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},i.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},i.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},i.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},i.prototype.translate=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix();if(e==c.c.LOCAL)r.addAtIndex(12,t.x),r.addAtIndex(13,t.y),r.addAtIndex(14,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0],p=i._tmpVecs[0];this._parent?n&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()):s.a.IdentityToRef(l),l.setTranslationFromFloats(0,0,0),l.invert(),s.e.TransformCoordinatesToRef(t,l,p),r.addAtIndex(12,p.x),r.addAtIndex(13,p.y),r.addAtIndex(14,p.z)}this._markAsDirtyAndDecompose()},i.prototype.setPosition=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix();if(e==c.c.LOCAL)r.setTranslationFromFloats(t.x,t.y,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0],p=i._tmpVecs[0];this._parent?(n&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()),l.invert()):s.a.IdentityToRef(l),s.e.TransformCoordinatesToRef(t,l,p),r.setTranslationFromFloats(p.x,p.y,p.z)}this._markAsDirtyAndDecompose()},i.prototype.setAbsolutePosition=function(t,e){this.setPosition(t,c.c.WORLD,e)},i.prototype.scale=function(t,e,n,r){r===void 0&&(r=!1);var a=this.getLocalMatrix(),l=i._tmpMats[0];s.a.ScalingToRef(t,e,n,l),l.multiplyToRef(a,a),l.invert();for(var p=0,d=this.children;p<d.length;p++){var m=d[p],S=m.getLocalMatrix();S.multiplyToRef(l,S),S.multiplyAtIndex(12,t),S.multiplyAtIndex(13,e),S.multiplyAtIndex(14,n),m._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var C=0,R=this.children;C<R.length;C++){var m=R[C];m.scale(t,e,n,r)}},i.prototype.setScale=function(t){this._decompose(),this._localScaling.copyFrom(t),this._markAsDirtyAndCompose()},i.prototype.getScale=function(){return this._decompose(),this._localScaling},i.prototype.getScaleToRef=function(t){this._decompose(),t.copyFrom(this._localScaling)},i.prototype.setYawPitchRoll=function(t,e,n,r,a){if(r===void 0&&(r=c.c.LOCAL),r===c.c.LOCAL){var l=i._tmpQuat;s.b.RotationYawPitchRollToRef(t,e,n,l),this.setRotationQuaternion(l,r,a);return}var p=i._tmpMats[0];if(!!this._getNegativeRotationToRef(p,a)){var d=i._tmpMats[1];s.a.RotationYawPitchRollToRef(t,e,n,d),p.multiplyToRef(d,d),this._rotateWithMatrix(d,r,a)}},i.prototype.rotate=function(t,e,n,r){n===void 0&&(n=c.c.LOCAL);var a=i._tmpMats[0];a.setTranslationFromFloats(0,0,0),s.a.RotationAxisToRef(t,e,a),this._rotateWithMatrix(a,n,r)},i.prototype.setAxisAngle=function(t,e,n,r){if(n===void 0&&(n=c.c.LOCAL),n===c.c.LOCAL){var a=i._tmpQuat;s.b.RotationAxisToRef(t,e,a),this.setRotationQuaternion(a,n,r);return}var l=i._tmpMats[0];if(!!this._getNegativeRotationToRef(l,r)){var p=i._tmpMats[1];s.a.RotationAxisToRef(t,e,p),l.multiplyToRef(p,p),this._rotateWithMatrix(p,n,r)}},i.prototype.setRotation=function(t,e,n){e===void 0&&(e=c.c.LOCAL),this.setYawPitchRoll(t.y,t.x,t.z,e,n)},i.prototype.setRotationQuaternion=function(t,e,n){if(e===void 0&&(e=c.c.LOCAL),e===c.c.LOCAL){this._decompose(),this._localRotation.copyFrom(t),this._markAsDirtyAndCompose();return}var r=i._tmpMats[0];if(!!this._getNegativeRotationToRef(r,n)){var a=i._tmpMats[1];s.a.FromQuaternionToRef(t,a),r.multiplyToRef(a,a),this._rotateWithMatrix(a,e,n)}},i.prototype.setRotationMatrix=function(t,e,n){if(e===void 0&&(e=c.c.LOCAL),e===c.c.LOCAL){var r=i._tmpQuat;s.b.FromRotationMatrixToRef(t,r),this.setRotationQuaternion(r,e,n);return}var a=i._tmpMats[0];if(!!this._getNegativeRotationToRef(a,n)){var l=i._tmpMats[1];l.copyFrom(t),a.multiplyToRef(t,l),this._rotateWithMatrix(l,e,n)}},i.prototype._rotateWithMatrix=function(t,e,n){e===void 0&&(e=c.c.LOCAL);var r=this.getLocalMatrix(),a=r.m[12],l=r.m[13],p=r.m[14],d=this.getParent(),m=i._tmpMats[3],S=i._tmpMats[4];d&&e==c.c.WORLD?(n?(m.copyFrom(n.getWorldMatrix()),d.getAbsoluteTransform().multiplyToRef(m,m)):m.copyFrom(d.getAbsoluteTransform()),S.copyFrom(m),S.invert(),r.multiplyToRef(m,r),r.multiplyToRef(t,r),r.multiplyToRef(S,r)):e==c.c.WORLD&&n?(m.copyFrom(n.getWorldMatrix()),S.copyFrom(m),S.invert(),r.multiplyToRef(m,r),r.multiplyToRef(t,r),r.multiplyToRef(S,r)):r.multiplyToRef(t,r),r.setTranslationFromFloats(a,l,p),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},i.prototype._getNegativeRotationToRef=function(t,e){var n=i._tmpMats[2];return t.copyFrom(this.getAbsoluteTransform()),e&&(t.multiplyToRef(e.getWorldMatrix(),t),s.a.ScalingToRef(e.scaling.x,e.scaling.y,e.scaling.z,n)),t.invert(),isNaN(t.m[0])?!1:(n.multiplyAtIndex(0,this._scalingDeterminant),t.multiplyToRef(n,t),!0)},i.prototype.getPosition=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getPositionToRef(t,e,n),n},i.prototype.getPositionToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),t==c.c.LOCAL){var r=this.getLocalMatrix();n.x=r.m[12],n.y=r.m[13],n.z=r.m[14]}else{var a=null;e&&(a=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0];e&&a?(l.copyFrom(this.getAbsoluteTransform()),l.multiplyToRef(a,l)):l=this.getAbsoluteTransform(),n.x=l.m[12],n.y=l.m[13],n.z=l.m[14]}},i.prototype.getAbsolutePosition=function(t){t===void 0&&(t=null);var e=s.e.Zero();return this.getPositionToRef(c.c.WORLD,t,e),e},i.prototype.getAbsolutePositionToRef=function(t,e){this.getPositionToRef(c.c.WORLD,t,e)},i.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var t=this._skeleton.getPoseMatrix();t&&this._absoluteTransform.multiplyToRef(t,this._absoluteTransform)}for(var e=this.children,n=e.length,r=0;r<n;r++)e[r].computeAbsoluteTransforms()},i.prototype.getDirection=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getDirectionToRef(t,e,n),n},i.prototype.getDirectionToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),s.e.TransformNormalToRef(t,a,n),n.normalize()},i.prototype.getRotation=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getRotationToRef(t,e,n),n},i.prototype.getRotationToRef=function(t,e,n){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var r=i._tmpQuat;this.getRotationQuaternionToRef(t,e,r),r.toEulerAnglesToRef(n)},i.prototype.getRotationQuaternion=function(t,e){t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null);var n=s.b.Identity();return this.getRotationQuaternionToRef(t,e,n),n},i.prototype.getRotationQuaternionToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),e===void 0&&(e=null),t==c.c.LOCAL)this._decompose(),n.copyFrom(this._localRotation);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,n,void 0)}},i.prototype.getRotationMatrix=function(t,e){t===void 0&&(t=c.c.LOCAL);var n=s.a.Identity();return this.getRotationMatrixToRef(t,e,n),n},i.prototype.getRotationMatrixToRef=function(t,e,n){if(t===void 0&&(t=c.c.LOCAL),t==c.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(n);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(n)}},i.prototype.getAbsolutePositionFromLocal=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getAbsolutePositionFromLocalToRef(t,e,n),n},i.prototype.getAbsolutePositionFromLocalToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];e&&r?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(r,a)):a=this.getAbsoluteTransform(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.getLocalPositionFromAbsolute=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getLocalPositionFromAbsoluteToRef(t,e,n),n},i.prototype.getLocalPositionFromAbsoluteToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),a.invert(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},i._tmpVecs=P.a.BuildArray(2,s.e.Zero),i._tmpQuat=s.b.Identity(),i._tmpMats=P.a.BuildArray(5,s.a.Identity),i}(v.a)},545:function(Z,H,o){"use strict";o.d(H,"a",function(){return c});var f=o(444),s=o(625),P=o(500),v=o(566),c=function(){function E(){}return E.ExpandRGBDTexture=function(h){var i=h._texture;if(!(!i||!h.isRGBD)){var t=i.getEngine(),e=t.getCaps(),n=!1;e.textureHalfFloatRender&&e.textureHalfFloatLinearFiltering?(n=!0,i.type=2):e.textureFloatRender&&e.textureFloatLinearFiltering&&(n=!0,i.type=1),n&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),h.onLoadObservable.addOnce(function(){if(n){var r=new f.a("rgbdDecode","rgbdDecode",null,null,1,null,3,t,!1,void 0,i.type,void 0,null,!1),a=t.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});r.getEffect().executeWhenCompiled(function(){r.onApply=function(l){l._bindTexture("textureSampler",i),l.setFloat2("scale",1,1)},h.getScene().postProcessManager.directRender([r],a,!0),t.restoreDefaultFramebuffer(),t._releaseTexture(i),t._releaseFramebufferObjects(a),r&&r.dispose(),a._swapAndDie(i),i.isReady=!0})}})}},E.EncodeTextureToRGBD=function(h,i,t){return t===void 0&&(t=0),v.a.ApplyPostProcess("rgbdEncode",h,i,t,1,5)},E}()},547:function(Z,H,o){"use strict";o.d(H,"a",function(){return v});var f=o(449),s=o(452),P=o(502);Object.defineProperty(f.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(c){c&&c.isSupported&&(this._geometryBufferRenderer=c)},enumerable:!0,configurable:!0}),f.a.prototype.enableGeometryBufferRenderer=function(c){return c===void 0&&(c=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new P.a(this,c),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},f.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var v=function(){function c(E){this.name=s.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=E}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(s.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){},c.prototype._gatherRenderTargets=function(E){this.scene._geometryBufferRenderer&&E.push(this.scene._geometryBufferRenderer.getGBuffer())},c}();P.a._SceneComponentInitialization=function(c){var E=c._getComponent(s.a.NAME_GEOMETRYBUFFERRENDERER);E||(E=new v(c),c._addComponent(E))}},548:function(Z,H,o){"use strict";o.d(H,"a",function(){return f});var f=function(){function s(){this._renderPipelines={}}return Object.defineProperty(s.prototype,"supportedPipelines",{get:function(){var P=[];for(var v in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(v)){var c=this._renderPipelines[v];c.isSupported&&P.push(c)}return P},enumerable:!1,configurable:!0}),s.prototype.addPipeline=function(P){this._renderPipelines[P._name]=P},s.prototype.attachCamerasToRenderPipeline=function(P,v,c){c===void 0&&(c=!1);var E=this._renderPipelines[P];!E||E._attachCameras(v,c)},s.prototype.detachCamerasFromRenderPipeline=function(P,v){var c=this._renderPipelines[P];!c||c._detachCameras(v)},s.prototype.enableEffectInPipeline=function(P,v,c){var E=this._renderPipelines[P];!E||E._enableEffect(v,c)},s.prototype.disableEffectInPipeline=function(P,v,c){var E=this._renderPipelines[P];!E||E._disableEffect(v,c)},s.prototype.update=function(){for(var P in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(P)){var v=this._renderPipelines[P];v.isSupported?v._update():(v.dispose(),delete this._renderPipelines[P])}},s.prototype._rebuild=function(){for(var P in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(P)){var v=this._renderPipelines[P];v._rebuild()}},s.prototype.dispose=function(){for(var P in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(P)){var v=this._renderPipelines[P];v.dispose()}},s}()},549:function(Z,H,o){"use strict";o.d(H,"a",function(){return s});const f=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>f()?"webgl2":"webgl"},555:function(Z,H,o){"use strict";var f=o(446),s=o(447),P=o(436);f.a.prototype.thinInstanceAdd=function(v,c){c===void 0&&(c=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(v)?v.length:1);var E=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(v))for(var h=0;h<v.length;++h)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v[h],h===v.length-1&&c);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v,c);return E},f.a.prototype.thinInstanceAddSelf=function(v){return v===void 0&&(v=!0),this.thinInstanceAdd(P.a.IdentityReadOnly,v)},f.a.prototype.thinInstanceRegisterAttribute=function(v,c){this.removeVerticesData(v),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[v]=c,this._userThinInstanceBuffersStorage.sizes[v]=c*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[v]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[v]),this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[v],v,!0,!1,c,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])},f.a.prototype.thinInstanceSetMatrixAt=function(v,c,E){if(E===void 0&&(E=!0),!this._thinInstanceDataStorage.matrixData||v>=this._thinInstanceDataStorage.instancesCount)return!1;var h=this._thinInstanceDataStorage.matrixData;return c.copyToArray(h,v*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[v]=c),E&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},f.a.prototype.thinInstanceSetAttributeAt=function(v,c,E,h){return h===void 0&&(h=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[v]||c>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(v,0),this._userThinInstanceBuffersStorage.data[v].set(E,c*this._userThinInstanceBuffersStorage.strides[v]),h&&this.thinInstanceBufferUpdated(v),!0)},Object.defineProperty(f.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(v){var c,E,h=((E=(c=this._thinInstanceDataStorage.matrixData)===null||c===void 0?void 0:c.length)!==null&&E!==void 0?E:0)/16;v<=h&&(this._thinInstanceDataStorage.instancesCount=v)},enumerable:!0,configurable:!0}),f.a.prototype.thinInstanceSetBuffer=function(v,c,E,h){var i,t;if(E===void 0&&(E=0),h===void 0&&(h=!1),E=E||16,v==="matrix")if((i=this._thinInstanceDataStorage.matrixBuffer)===null||i===void 0||i.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=c?c.length:32*E,this._thinInstanceDataStorage.matrixData=c,this._thinInstanceDataStorage.worldMatrices=null,c!==null){this._thinInstanceDataStorage.instancesCount=c.length/E;var e=new s.a(this.getEngine(),c,!h,E,!1,!0);this._thinInstanceDataStorage.matrixBuffer=e,this.setVerticesBuffer(e.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(e.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(e.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(e.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else c===null?((t=this._userThinInstanceBuffersStorage)===null||t===void 0?void 0:t.data[v])&&(this.removeVerticesData(v),delete this._userThinInstanceBuffersStorage.data[v],delete this._userThinInstanceBuffersStorage.strides[v],delete this._userThinInstanceBuffersStorage.sizes[v],delete this._userThinInstanceBuffersStorage.vertexBuffers[v]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[v]=c,this._userThinInstanceBuffersStorage.strides[v]=E,this._userThinInstanceBuffersStorage.sizes[v]=c.length,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),c,v,!h,!1,E,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v]))},f.a.prototype.thinInstanceBufferUpdated=function(v){var c;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((c=this._userThinInstanceBuffersStorage)===null||c===void 0?void 0:c.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(this._userThinInstanceBuffersStorage.data[v],0)},f.a.prototype.thinInstancePartialBufferUpdate=function(v,c,E){var h;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(c,E):((h=this._userThinInstanceBuffersStorage)===null||h===void 0?void 0:h.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(c,E)},f.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var v=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var c=0;c<this._thinInstanceDataStorage.instancesCount;++c)this._thinInstanceDataStorage.worldMatrices[c]=P.a.FromArray(v,c*16)}return this._thinInstanceDataStorage.worldMatrices},f.a.prototype.thinInstanceRefreshBoundingInfo=function(v){if(v===void 0&&(v=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var c=this._thinInstanceDataStorage.boundingVectors;v&&(c.length=0,this.refreshBoundingInfo(!0));var E=this.getBoundingInfo(),h=this._thinInstanceDataStorage.matrixData;if(c.length===0)for(var i=0;i<E.boundingBox.vectors.length;++i)c.push(E.boundingBox.vectors[i].clone());P.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),P.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var t=0;t<this._thinInstanceDataStorage.instancesCount;++t){P.a.FromArrayToRef(h,t*16,P.c.Matrix[0]);for(var i=0;i<c.length;++i)P.e.TransformCoordinatesToRef(c[i],P.c.Matrix[0],P.c.Vector3[2]),P.c.Vector3[0].minimizeInPlace(P.c.Vector3[2]),P.c.Vector3[1].maximizeInPlace(P.c.Vector3[2])}E.reConstruct(P.c.Vector3[0],P.c.Vector3[1]),this._updateBoundingInfo()}},f.a.prototype._thinInstanceUpdateBufferSize=function(v,c){var E,h;c===void 0&&(c=1);var i=v==="matrix";if(!(!i&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[v]))){for(var t=i?16:this._userThinInstanceBuffersStorage.strides[v],e=i?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[v],n=i?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[v],r=(this._thinInstanceDataStorage.instancesCount+c)*t,a=e;a<r;)a*=2;if(!n||e!=a){if(!n)n=new Float32Array(a);else{var l=new Float32Array(a);l.set(n,0),n=l}if(i){(E=this._thinInstanceDataStorage.matrixBuffer)===null||E===void 0||E.dispose();var p=new s.a(this.getEngine(),n,!0,t,!1,!0);this._thinInstanceDataStorage.matrixBuffer=p,this._thinInstanceDataStorage.matrixData=n,this._thinInstanceDataStorage.matrixBufferSize=a,this.setVerticesBuffer(p.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(p.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(p.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(p.createVertexBuffer("world3",12,4))}else(h=this._userThinInstanceBuffersStorage.vertexBuffers[v])===null||h===void 0||h.dispose(),this._userThinInstanceBuffersStorage.data[v]=n,this._userThinInstanceBuffersStorage.sizes[v]=a,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),n,v,!0,!1,t,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])}}},f.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},f.a.prototype._disposeThinInstanceSpecificData=function(){var v;((v=this._thinInstanceDataStorage)===null||v===void 0?void 0:v.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},566:function(Z,H,o){"use strict";o.d(H,"a",function(){return c});var f=o(442),s=o(458),P=o(486),v=o(444),c=function(){function E(){}return E.CreateResizedCopy=function(h,i,t,e){e===void 0&&(e=!0);var n=h.getScene(),r=n.getEngine(),a=new s.a("resized"+h.name,{width:i,height:t},n,!h.noMipmap,!0,h._texture.type,!1,h.samplingMode,!1);a.wrapU=h.wrapU,a.wrapV=h.wrapV,a.uOffset=h.uOffset,a.vOffset=h.vOffset,a.uScale=h.uScale,a.vScale=h.vScale,a.uAng=h.uAng,a.vAng=h.vAng,a.wAng=h.wAng,a.coordinatesIndex=h.coordinatesIndex,a.level=h.level,a.anisotropicFilteringLevel=h.anisotropicFilteringLevel,a._texture.isReady=!1,h.wrapU=f.a.CLAMP_ADDRESSMODE,h.wrapV=f.a.CLAMP_ADDRESSMODE;var l=new P.b("pass",1,null,e?f.a.BILINEAR_SAMPLINGMODE:f.a.NEAREST_SAMPLINGMODE,r,!1,0);return l.getEffect().executeWhenCompiled(function(){l.onApply=function(d){d.setTexture("textureSampler",h)};var p=a.getInternalTexture();p&&(n.postProcessManager.directRender([l],p),r.unBindFramebuffer(p),a.disposeFramebufferObjects(),l.dispose(),p.isReady=!0)}),a},E.ApplyPostProcess=function(h,i,t,e,n,r){var a=i.getEngine();return i.isReady=!1,n=n!=null?n:i.samplingMode,e=e!=null?e:i.type,r=r!=null?r:i.format,e===-1&&(e=0),new Promise(function(l){var p=new v.a("postprocess",h,null,null,1,null,n,a,!1,void 0,e,void 0,null,!1,r),d=a.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:n,type:e,format:r});p.getEffect().executeWhenCompiled(function(){p.onApply=function(m){m._bindTexture("textureSampler",i),m.setFloat2("scale",1,1)},t.postProcessManager.directRender([p],d,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(i),a._releaseFramebufferObjects(d),p&&p.dispose(),d._swapAndDie(i),i.type=e,i.format=5,i.isReady=!0,l(i)})})},E}()},570:function(Z,H,o){"use strict";o.d(H,"b",function(){return i}),o.d(H,"a",function(){return t});var f=o(434),s=o(436),P=o(442),v=o(466),c=o(582),E=o(580),h=o(583),i;(function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"})(i||(i={}));var t=function(e){Object(f.d)(n,e);function n(r,a,l,p,d){l===void 0&&(l=i.Low),p===void 0&&(p=0),d===void 0&&(d=!1);var m=e.call(this,r.getEngine(),"depth of field",function(){return m._effects},!0)||this;m._effects=[],m._circleOfConfusion=new c.a("circleOfConfusion",a,1,null,P.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d),m._depthOfFieldBlurY=[],m._depthOfFieldBlurX=[];var S=1,C=15;switch(l){case i.High:{S=3,C=51;break}case i.Medium:{S=2,C=31;break}default:{C=15,S=1;break}}for(var R=C/Math.pow(2,S-1),O=1,I=0;I<S;I++){var M=new E.a("vertical blur",r,new s.d(0,1),R,O,null,m._circleOfConfusion,I==0?m._circleOfConfusion:null,P.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d);M.autoClear=!1,O=.75/Math.pow(2,I);var F=new E.a("horizontal blur",r,new s.d(1,0),R,O,null,m._circleOfConfusion,null,P.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d);F.autoClear=!1,m._depthOfFieldBlurY.push(M),m._depthOfFieldBlurX.push(F)}m._effects=[m._circleOfConfusion];for(var I=0;I<m._depthOfFieldBlurX.length;I++)m._effects.push(m._depthOfFieldBlurY[I]),m._effects.push(m._depthOfFieldBlurX[I]);return m._dofMerge=new h.a("dofMerge",m._circleOfConfusion,m._circleOfConfusion,m._depthOfFieldBlurX,O,null,P.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,p,d),m._dofMerge.autoClear=!1,m._effects.push(m._dofMerge),m}return Object.defineProperty(n.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(r){this._circleOfConfusion.focalLength=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(r){this._circleOfConfusion.fStop=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(r){this._circleOfConfusion.focusDistance=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(r){this._circleOfConfusion.lensSize=r},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(n.prototype,"depthTexture",{set:function(r){this._circleOfConfusion.depthTexture=r},enumerable:!1,configurable:!0}),n.prototype.disposeEffects=function(r){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(r)},n.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},n.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},n}(v.a)},571:function(Z,H,o){"use strict";o.d(H,"a",function(){return p});var f=o(434),s=o(440),P=o(436),v=o(444),c=o(502),E=function(){function d(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return d}(),h=o(530),i=o(547),t=o(435),e="motionBlurPixelShader",n=`
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
`;t.a.ShadersStore[e]=n;var r={name:e,shader:n},a=o(439),l=o(437),p=function(d){Object(f.d)(m,d);function m(S,C,R,O,I,M,F,x,N,G){x===void 0&&(x=0),N===void 0&&(N=!1),G===void 0&&(G=!1);var V=d.call(this,S,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],R,O,I,M,F,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,x,void 0,null,N)||this;return V.motionStrength=1,V._motionBlurSamples=32,V._isObjectBased=!0,V._forceGeometryBuffer=!1,V._geometryBufferRenderer=null,V._prePassRenderer=null,V._invViewProjection=null,V._previousViewProjection=null,V._forceGeometryBuffer=G,V._forceGeometryBuffer?(V._geometryBufferRenderer=C.enableGeometryBufferRenderer(),V._geometryBufferRenderer&&(V._geometryBufferRenderer.enableVelocity=!0)):(V._prePassRenderer=C.enablePrePassRenderer(),V._prePassRenderer&&(V._prePassRenderer.markAsDirty(),V._prePassEffectConfiguration=new E)),V._applyMode(),V}return Object.defineProperty(m.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(S){this._motionBlurSamples=S,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(S){this._isObjectBased!==S&&(this._isObjectBased=S,this._applyMode())},enumerable:!1,configurable:!0}),m.prototype.getClassName=function(){return"MotionBlurPostProcess"},m.prototype.excludeSkinnedMesh=function(S){if(S.skeleton){var C=void 0;if(this._geometryBufferRenderer)C=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)C=this._prePassRenderer.excludedSkinnedMesh;else return;C.push(S)}},m.prototype.removeExcludedSkinnedMesh=function(S){if(S.skeleton){var C=void 0;if(this._geometryBufferRenderer)C=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)C=this._prePassRenderer.excludedSkinnedMesh;else return;var R=C.indexOf(S);R!==-1&&C.splice(R,1)}},m.prototype.dispose=function(S){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),d.prototype.dispose.call(this,S)},m.prototype._applyMode=function(){var S=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return s.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(C){return S._onApplyObjectBased(C)}):(this._invViewProjection=P.a.Identity(),this._previousViewProjection=P.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(C){return S._onApplyScreenBased(C)})},m.prototype._onApplyObjectBased=function(S){if(S.setVector2("screenSize",new P.d(this.width,this.height)),S.setFloat("motionScale",this._scene.getAnimationRatio()),S.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var C=this._geometryBufferRenderer.getTextureIndex(c.a.VELOCITY_TEXTURE_TYPE);S.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[C])}else if(this._prePassRenderer){var C=this._prePassRenderer.getIndex(2);S.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[C])}},m.prototype._onApplyScreenBased=function(S){var C=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(C.invertToRef(this._invViewProjection),S.setMatrix("inverseViewProjection",this._invViewProjection),S.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=C,S.setVector2("screenSize",new P.d(this.width,this.height)),S.setFloat("motionScale",this._scene.getAnimationRatio()),S.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var R=this._geometryBufferRenderer.getTextureIndex(c.a.DEPTH_TEXTURE_TYPE);S.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[R])}else if(this._prePassRenderer){var R=this._prePassRenderer.getIndex(5);S.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[R])}},m.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var S=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(S.join(`
`))}},m._Parse=function(S,C,R,O){return a.a.Parse(function(){return new m(S.name,R,S.options,C,S.renderTargetSamplingMode,R.getEngine(),S.reusable,S.textureType,!1)},S,R,O)},Object(f.c)([Object(a.c)()],m.prototype,"motionStrength",void 0),Object(f.c)([Object(a.c)()],m.prototype,"motionBlurSamples",null),Object(f.c)([Object(a.c)()],m.prototype,"isObjectBased",null),m}(v.a);l.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=p},572:function(Z,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(436),s=o(441),P=o(483),v=o(700),c=Object.freeze(new f.b(0,0,0,0)),E=Object.freeze(f.e.Zero()),h=Object.freeze(f.d.Zero()),i=Object.freeze(v.a.Zero()),t=Object.freeze(s.a.Black()),e=function(){function n(r,a,l,p){var d=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=r,this._scene=l,this._host=p,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===P.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=f.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var m={frame:0,value:this._minValue};this._keys.splice(0,0,m)}if(this._target instanceof Array){for(var S=0,C=0,R=this._target;C<R.length;C++){var O=R[C];this._preparePath(O,S),this._getOriginalValues(S),S++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var I=a.getEvents();I&&I.length>0&&I.forEach(function(M){d._events.push(M._clone())}),this._enableBlending=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(n.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),n.prototype._preparePath=function(r,a){a===void 0&&(a=0);var l=this._animation.targetPropertyPath;if(l.length>1){for(var p=r[l[0]],d=1;d<l.length-1;d++)p=p[l[d]];this._targetPath=l[l.length-1],this._activeTargets[a]=p}else this._targetPath=l[0],this._activeTargets[a]=r},Object.defineProperty(n.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),n.prototype.reset=function(r){if(r===void 0&&(r=!1),r)if(this._target instanceof Array)for(var a=0,l=0,p=this._target;l<p.length;l++){var d=p[l];this._originalValue[a]!==void 0&&this._setValue(d,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},n.prototype.isStopped=function(){return this._stopped},n.prototype.dispose=function(){var r=this._animation.runtimeAnimations.indexOf(this);r>-1&&this._animation.runtimeAnimations.splice(r,1)},n.prototype.setValue=function(r,a){if(this._targetIsArray){for(var l=0;l<this._target.length;l++){var p=this._target[l];this._setValue(p,this._activeTargets[l],r,a,l)}return}this._setValue(this._target,this._directTarget,r,a,0)},n.prototype._getOriginalValues=function(r){r===void 0&&(r=0);var a,l=this._activeTargets[r];l.getRestPose&&this._targetPath==="_matrix"?a=l.getRestPose():a=l[this._targetPath],a&&a.clone?this._originalValue[r]=a.clone():this._originalValue[r]=a},n.prototype._setValue=function(r,a,l,p,d){if(this._currentActiveTarget=a,this._weight=p,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var m=a[this._targetPath];m.clone?this._originalBlendValue=m.clone():this._originalBlendValue=m}this._originalBlendValue.m?P.a.AllowMatrixDecomposeForInterpolation?this._currentValue?f.a.DecomposeLerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.DecomposeLerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue?f.a.LerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.Lerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue=P.a._UniversalLerp(this._originalBlendValue,l,this._blendingFactor);var S=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=S}else this._currentValue=l;p!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[d]):a[this._targetPath]=this._currentValue,r.markAsDirty&&r.markAsDirty(this._animation.targetProperty)},n.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},n.prototype.goToFrame=function(r){var a=this._animation.getKeys();r<a[0].frame?r=a[0].frame:r>a[a.length-1].frame&&(r=a[a.length-1].frame);var l=this._events;if(l.length)for(var p=0;p<l.length;p++)l[p].onlyOnce||(l[p].isDone=l[p].frame<r);this._currentFrame=r;var d=this._animation._interpolate(r,this._animationState);this.setValue(d,-1)},n.prototype._prepareForSpeedRatioChange=function(r){var a=this._previousDelay*(this._animation.framePerSecond*r)/1e3;this._ratioOffset=this._previousRatio-a},n.prototype.animate=function(r,a,l,p,d,m){m===void 0&&(m=-1);var S=this._animation,C=S.targetPropertyPath;if(!C||C.length<1)return this._stopped=!0,!1;var R=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(l<this._minFrame||l>this._maxFrame)&&(l=this._maxFrame);var O=l-a,I,M=r*(S.framePerSecond*d)/1e3+this._ratioOffset,F=0;if(this._previousDelay=r,this._previousRatio=M,!p&&l>=a&&M>=O)R=!1,F=S._getKeyValue(this._maxValue);else if(!p&&a>=l&&M<=O)R=!1,F=S._getKeyValue(this._minValue);else if(this._animationState.loopMode!==P.a.ANIMATIONLOOPMODE_CYCLE){var x=l.toString()+a.toString();if(!this._offsetsCache[x]){this._animationState.repeatCount=0,this._animationState.loopMode=P.a.ANIMATIONLOOPMODE_CYCLE;var N=S._interpolate(a,this._animationState),G=S._interpolate(l,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),S.dataType){case P.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[x]=G-N;break;case P.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[x]=G.subtract(N);break;case P.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[x]=G.subtract(N);break;case P.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[x]=G.subtract(N);break;case P.a.ANIMATIONTYPE_SIZE:this._offsetsCache[x]=G.subtract(N);break;case P.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[x]=G.subtract(N);break;default:break}this._highLimitsCache[x]=G}F=this._highLimitsCache[x],I=this._offsetsCache[x]}if(I===void 0)switch(S.dataType){case P.a.ANIMATIONTYPE_FLOAT:I=0;break;case P.a.ANIMATIONTYPE_QUATERNION:I=c;break;case P.a.ANIMATIONTYPE_VECTOR3:I=E;break;case P.a.ANIMATIONTYPE_VECTOR2:I=h;break;case P.a.ANIMATIONTYPE_SIZE:I=i;break;case P.a.ANIMATIONTYPE_COLOR3:I=t}var V;if(this._host&&this._host.syncRoot){var L=this._host.syncRoot,ne=(L.masterFrame-L.fromFrame)/(L.toFrame-L.fromFrame);V=a+(l-a)*ne}else V=R&&O!==0?a+M%O:l;var K=this._events;if((O>0&&this.currentFrame>V||O<0&&this.currentFrame<V)&&(this._onLoop(),K.length))for(var B=0;B<K.length;B++)K[B].onlyOnce||(K[B].isDone=!1);this._currentFrame=V,this._animationState.repeatCount=O===0?0:M/O>>0,this._animationState.highLimitValue=F,this._animationState.offsetValue=I;var J=S._interpolate(V,this._animationState);if(this.setValue(J,m),K.length){for(var B=0;B<K.length;B++)if(O>0&&V>=K[B].frame&&K[B].frame>=a||O<0&&V<=K[B].frame&&K[B].frame<=a){var re=K[B];re.isDone||(re.onlyOnce&&(K.splice(B,1),B--),re.isDone=!0,re.action(V))}}return R||(this._stopped=!0),R},n}()},574:function(Z,H,o){"use strict";var f=o(456),s=o(440),P=o(467);P.a.prototype.restoreSingleAttachment=function(){var v=this._gl;this.bindAttachments([v.BACK])},P.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var v=this._gl;this.bindAttachments([v.COLOR_ATTACHMENT0])},P.a.prototype.buildTextureLayout=function(v){for(var c=this._gl,E=[],h=0;h<v.length;h++)v[h]?E.push(c["COLOR_ATTACHMENT"+h]):E.push(c.NONE);return E},P.a.prototype.bindAttachments=function(v){var c=this._gl;c.drawBuffers(v)},P.a.prototype.clearAttachments=function(v,c,E,h,i){if(v.length!==0){var t=this._gl;t.drawBuffers([v[0]]),this.clear(c,c!==null,h,i);var e=v[0];v[0]=t.NONE,t.drawBuffers(v),this.clear(E,E!==null,!1,!1),v[0]=e}},P.a.prototype.unBindMultiColorAttachmentFramebuffer=function(v,c,E){c===void 0&&(c=!1),this._currentRenderTarget=null;var h=this._gl,i=v[0]._attachments,t=i.length;if(v[0]._MSAAFramebuffer){h.bindFramebuffer(h.READ_FRAMEBUFFER,v[0]._MSAAFramebuffer),h.bindFramebuffer(h.DRAW_FRAMEBUFFER,v[0]._framebuffer);for(var e=0;e<t;e++){for(var n=v[e],r=0;r<t;r++)i[r]=h.NONE;i[e]=h[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],h.readBuffer(i[e]),h.drawBuffers(i),h.blitFramebuffer(0,0,n.width,n.height,0,0,n.width,n.height,h.COLOR_BUFFER_BIT,h.NEAREST)}for(var e=0;e<t;e++)i[e]=h[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"];h.drawBuffers(i)}for(var e=0;e<t;e++){var n=v[e];n.generateMipMaps&&!c&&!n.isCube&&(this._bindTextureDirectly(h.TEXTURE_2D,n,!0),h.generateMipmap(h.TEXTURE_2D),this._bindTextureDirectly(h.TEXTURE_2D,null))}E&&(v[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(v[0]._framebuffer),E()),this._bindUnboundFramebuffer(null)},P.a.prototype.createMultipleRenderTarget=function(v,c,E){E===void 0&&(E=!0);var h=!1,i=!0,t=!1,e=!1,n=1,r=0,a=3,l=new Array,p=new Array;c!==void 0&&(h=c.generateMipMaps===void 0?!1:c.generateMipMaps,i=c.generateDepthBuffer===void 0?!0:c.generateDepthBuffer,t=c.generateStencilBuffer===void 0?!1:c.generateStencilBuffer,e=c.generateDepthTexture===void 0?!1:c.generateDepthTexture,n=c.textureCount||1,c.types&&(l=c.types),c.samplingModes&&(p=c.samplingModes));var d=this._gl,m=d.createFramebuffer();this._bindUnboundFramebuffer(m);for(var S=v.width||v,C=v.height||v,R=[],O=[],I=this._setupFramebufferDepthAttachments(t,i,S,C),M=0;M<n;M++){var F=p[M]||a,x=l[M]||r;(x===1&&!this._caps.textureFloatLinearFiltering||x===2&&!this._caps.textureHalfFloatLinearFiltering)&&(F=1);var N=this._getSamplingParameters(F,h);x===1&&!this._caps.textureFloat&&(x=0,s.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var G=new f.a(this,f.b.MultiRenderTarget),V=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+M:"COLOR_ATTACHMENT"+M+"_WEBGL"];R.push(G),O.push(V),d.activeTexture(d["TEXTURE"+M]),d.bindTexture(d.TEXTURE_2D,G._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,N.mag),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,N.min),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(x),S,C,0,d.RGBA,this._getWebGLTextureType(x),null),d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,V,d.TEXTURE_2D,G._hardwareTexture.underlyingResource,0),h&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(d.TEXTURE_2D,null),G._framebuffer=m,G._depthStencilBuffer=I,G.baseWidth=S,G.baseHeight=C,G.width=S,G.height=C,G.isReady=!0,G.samples=1,G.generateMipMaps=h,G.samplingMode=F,G.type=x,G._generateDepthBuffer=i,G._generateStencilBuffer=t,G._attachments=O,G._textureArray=R,this._internalTexturesCache.push(G)}if(e&&this._caps.depthTextureExtension){var L=new f.a(this,f.b.MultiRenderTarget);d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,L._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this.webGLVersion<2?d.DEPTH_COMPONENT:d.DEPTH_COMPONENT16,S,C,0,d.DEPTH_COMPONENT,d.UNSIGNED_SHORT,null),d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,L._hardwareTexture.underlyingResource,0),L._framebuffer=m,L.baseWidth=S,L.baseHeight=C,L.width=S,L.height=C,L.isReady=!0,L.samples=1,L.generateMipMaps=h,L.samplingMode=d.NEAREST,L._generateDepthBuffer=i,L._generateStencilBuffer=t,R.push(L),this._internalTexturesCache.push(L)}return E&&d.drawBuffers(O),this._bindUnboundFramebuffer(null),this.resetTextureCache(),R},P.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(v,c,E){if(E===void 0&&(E=!0),this.webGLVersion<2||!v)return 1;if(v[0].samples===c)return c;var h=v[0]._attachments.length;if(h===0)return 1;var i=this._gl;c=Math.min(c,this.getCaps().maxMSAASamples),v[0]._depthStencilBuffer&&(i.deleteRenderbuffer(v[0]._depthStencilBuffer),v[0]._depthStencilBuffer=null),v[0]._MSAAFramebuffer&&(i.deleteFramebuffer(v[0]._MSAAFramebuffer),v[0]._MSAAFramebuffer=null);for(var t=0;t<h;t++)v[t]._MSAARenderBuffer&&(i.deleteRenderbuffer(v[t]._MSAARenderBuffer),v[t]._MSAARenderBuffer=null);if(c>1&&i.renderbufferStorageMultisample){var e=i.createFramebuffer();if(!e)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(e);for(var n=this._setupFramebufferDepthAttachments(v[0]._generateStencilBuffer,v[0]._generateDepthBuffer,v[0].width,v[0].height,c),r=[],t=0;t<h;t++){var a=v[t],l=i[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],p=i.createRenderbuffer();if(!p)throw new Error("Unable to create multi sampled framebuffer");i.bindRenderbuffer(i.RENDERBUFFER,p),i.renderbufferStorageMultisample(i.RENDERBUFFER,c,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,l,i.RENDERBUFFER,p),a._MSAAFramebuffer=e,a._MSAARenderBuffer=p,a.samples=c,a._depthStencilBuffer=n,i.bindRenderbuffer(i.RENDERBUFFER,null),r.push(l)}E&&i.drawBuffers(r)}else this._bindUnboundFramebuffer(v[0]._framebuffer);return this._bindUnboundFramebuffer(null),c}},576:function(Z,H,o){"use strict";o.d(H,"a",function(){return c});var f=o(451),s=o(452),P=o(516),v=o(468);v.a.AddParser(s.a.NAME_EFFECTLAYER,function(E,h,i,t){if(E.effectLayers){i.effectLayers||(i.effectLayers=new Array);for(var e=0;e<E.effectLayers.length;e++){var n=P.a.Parse(E.effectLayers[e],h,t);i.effectLayers.push(n)}}}),v.a.prototype.removeEffectLayer=function(E){var h=this.effectLayers.indexOf(E);return h!==-1&&this.effectLayers.splice(h,1),h},v.a.prototype.addEffectLayer=function(E){this.effectLayers.push(E)};var c=function(){function E(h){this.name=s.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=h,this._engine=h.getEngine(),h.effectLayers=new Array}return E.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(s.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(s.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(s.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},E.prototype.rebuild=function(){for(var h=this.scene.effectLayers,i=0,t=h;i<t.length;i++){var e=t[i];e._rebuild()}},E.prototype.serialize=function(h){h.effectLayers=[];for(var i=this.scene.effectLayers,t=0,e=i;t<e.length;t++){var n=e[t];n.serialize&&h.effectLayers.push(n.serialize())}},E.prototype.addFromContainer=function(h){var i=this;!h.effectLayers||h.effectLayers.forEach(function(t){i.scene.addEffectLayer(t)})},E.prototype.removeFromContainer=function(h,i){var t=this;!h.effectLayers||h.effectLayers.forEach(function(e){t.scene.removeEffectLayer(e),i&&e.dispose()})},E.prototype.dispose=function(){for(var h=this.scene.effectLayers;h.length;)h[0].dispose()},E.prototype._isReadyForMesh=function(h,i){for(var t=this.scene.effectLayers,e=0,n=t;e<n.length;e++){var r=n[e];if(!!r.hasMesh(h))for(var a=0,l=h.subMeshes;a<l.length;a++){var p=l[a];if(!r.isReady(p,i))return!1}}return!0},E.prototype._renderMainTexture=function(h){this._renderEffects=!1,this._needStencil=!1;var i=!1,t=this.scene.effectLayers;if(t&&t.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.shouldRender()&&(!r.camera||r.camera.cameraRigMode===f.a.RIG_MODE_NONE&&h===r.camera||r.camera.cameraRigMode!==f.a.RIG_MODE_NONE&&r.camera._rigCameras.indexOf(h)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||r.needStencil();var a=r._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),i=!0)}}this.scene.incrementRenderId()}return i},E.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},E.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},E.prototype._draw=function(h){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var i=this.scene.effectLayers,t=0;t<i.length;t++){var e=i[t];e.renderingGroupId===h&&e.shouldRender()&&e.render()}this._engine.setDepthBuffer(!0)}},E.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},E.prototype._drawRenderingGroup=function(h){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(h)},E}();P.a._SceneComponentInitialization=function(E){var h=E._getComponent(s.a.NAME_EFFECTLAYER);h||(h=new c(E),E._addComponent(h))}},577:function(Z,H,o){"use strict";o.d(H,"a",function(){return m});var f=o(434),s=o(439),P=o(436),v=o(447),c=o(442),E=o(458),h=o(459),i=o(472),t=o(516),e=o(468),n=o(437),r=o(445),a=o(441),l=o(646),p=o(647),d=o(576);e.a.prototype.getGlowLayerByName=function(S){for(var C=0;C<this.effectLayers.length;C++)if(this.effectLayers[C].name===S&&this.effectLayers[C].getEffectName()===m.EffectName)return this.effectLayers[C];return null};var m=function(S){Object(f.d)(C,S);function C(R,O,I){var M=S.call(this,R,O)||this;return M._intensity=1,M._includedOnlyMeshes=[],M._excludedMeshes=[],M._meshesUsingTheirOwnMaterials=[],M.neutralColor=new a.b(0,0,0,1),M._options=Object(f.a)({mainTextureRatio:C.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},I),M._init({alphaBlendingMode:1,camera:M._options.camera,mainTextureFixedSize:M._options.mainTextureFixedSize,mainTextureRatio:M._options.mainTextureRatio,renderingGroupId:M._options.renderingGroupId}),M}return Object.defineProperty(C.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(R){this._horizontalBlurPostprocess1.kernel=R,this._verticalBlurPostprocess1.kernel=R,this._horizontalBlurPostprocess2.kernel=R,this._verticalBlurPostprocess2.kernel=R},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"intensity",{get:function(){return this._intensity},set:function(R){this._intensity=R},enumerable:!1,configurable:!0}),C.prototype.getEffectName=function(){return C.EffectName},C.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[v.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},C.prototype._createTextureAndPostProcesses=function(){var R=this,O=this._mainTextureDesiredSize.width,I=this._mainTextureDesiredSize.height;O=this._engine.needPOTTextures?r.a.GetExponentOfTwo(O,this._maxSize):O,I=this._engine.needPOTTextures?r.a.GetExponentOfTwo(I,this._maxSize):I;var M=0;this._engine.getCaps().textureHalfFloatRender?M=2:M=0,this._blurTexture1=new E.a("GlowLayerBlurRTT",{width:O,height:I},this._scene,!1,!0,M),this._blurTexture1.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var F=Math.floor(O/2),x=Math.floor(I/2);this._blurTexture2=new E.a("GlowLayerBlurRTT2",{width:F,height:x},this._scene,!1,!0,M),this._blurTexture2.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new i.a("GlowLayerHBP1",new P.d(1,0),this._options.blurKernelSize/2,{width:O,height:I},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,M),this._horizontalBlurPostprocess1.width=O,this._horizontalBlurPostprocess1.height=I,this._horizontalBlurPostprocess1.onApplyObservable.add(function(N){N.setTexture("textureSampler",R._mainTexture)}),this._verticalBlurPostprocess1=new i.a("GlowLayerVBP1",new P.d(0,1),this._options.blurKernelSize/2,{width:O,height:I},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,M),this._horizontalBlurPostprocess2=new i.a("GlowLayerHBP2",new P.d(1,0),this._options.blurKernelSize/2,{width:F,height:x},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,M),this._horizontalBlurPostprocess2.width=F,this._horizontalBlurPostprocess2.height=x,this._horizontalBlurPostprocess2.onApplyObservable.add(function(N){N.setTexture("textureSampler",R._blurTexture1)}),this._verticalBlurPostprocess2=new i.a("GlowLayerVBP2",new P.d(0,1),this._options.blurKernelSize/2,{width:F,height:x},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,M),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var N=R._blurTexture1.getInternalTexture();if(N){R._scene.postProcessManager.directRender(R._postProcesses1,N,!0);var G=R._blurTexture2.getInternalTexture();G&&R._scene.postProcessManager.directRender(R._postProcesses2,G,!0),R._engine.unBindFramebuffer(G!=null?G:N,!0)}}),this._postProcesses.map(function(N){N.autoClear=!1})},C.prototype.isReady=function(R,O){var I=R.getMaterial(),M=R.getRenderingMesh();if(!I||!M)return!1;var F=I.emissiveTexture;return S.prototype._isReady.call(this,R,O,F)},C.prototype.needStencil=function(){return!1},C.prototype._canRenderMesh=function(R,O){return!0},C.prototype._internalRender=function(R){R.setTexture("textureSampler",this._blurTexture1),R.setTexture("textureSampler2",this._blurTexture2),R.setFloat("offset",this._intensity);var O=this._engine,I=O.getStencilBuffer();O.setStencilBuffer(!1),O.drawElementsType(h.a.TriangleFillMode,0,6),O.setStencilBuffer(I)},C.prototype._setEmissiveTextureAndColor=function(R,O,I){var M=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(R,O,I):I?(this._emissiveTextureAndColor.texture=I.emissiveTexture,this._emissiveTextureAndColor.texture&&(M=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(R,O,I,this._emissiveTextureAndColor.color):I.emissiveColor?this._emissiveTextureAndColor.color.set(I.emissiveColor.r*M,I.emissiveColor.g*M,I.emissiveColor.b*M,I.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},C.prototype._shouldRenderMesh=function(R){return this.hasMesh(R)},C.prototype._addCustomEffectDefines=function(R){R.push("#define GLOW")},C.prototype.addExcludedMesh=function(R){this._excludedMeshes.indexOf(R.uniqueId)===-1&&this._excludedMeshes.push(R.uniqueId)},C.prototype.removeExcludedMesh=function(R){var O=this._excludedMeshes.indexOf(R.uniqueId);O!==-1&&this._excludedMeshes.splice(O,1)},C.prototype.addIncludedOnlyMesh=function(R){this._includedOnlyMeshes.indexOf(R.uniqueId)===-1&&this._includedOnlyMeshes.push(R.uniqueId)},C.prototype.removeIncludedOnlyMesh=function(R){var O=this._includedOnlyMeshes.indexOf(R.uniqueId);O!==-1&&this._includedOnlyMeshes.splice(O,1)},C.prototype.hasMesh=function(R){return S.prototype.hasMesh.call(this,R)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(R.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(R.uniqueId)===-1:!0:!1},C.prototype._useMeshMaterial=function(R){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId)>-1},C.prototype.referenceMeshToUseItsOwnMaterial=function(R){this._meshesUsingTheirOwnMaterials.push(R.uniqueId)},C.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(R){for(var O=this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId);O>=0;)this._meshesUsingTheirOwnMaterials.splice(O,1),O=this._meshesUsingTheirOwnMaterials.indexOf(R.uniqueId)},C.prototype._disposeMesh=function(R){this.removeIncludedOnlyMesh(R),this.removeExcludedMesh(R)},C.prototype.getClassName=function(){return"GlowLayer"},C.prototype.serialize=function(){var R=s.a.Serialize(this);R.customType="BABYLON.GlowLayer";var O;if(R.includedMeshes=[],this._includedOnlyMeshes.length)for(O=0;O<this._includedOnlyMeshes.length;O++){var I=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[O]);I&&R.includedMeshes.push(I.id)}if(R.excludedMeshes=[],this._excludedMeshes.length)for(O=0;O<this._excludedMeshes.length;O++){var I=this._scene.getMeshByUniqueID(this._excludedMeshes[O]);I&&R.excludedMeshes.push(I.id)}return R},C.Parse=function(R,O,I){var M=s.a.Parse(function(){return new C(R.name,O,R.options)},R,O,I),F;for(F=0;F<R.excludedMeshes.length;F++){var x=O.getMeshByID(R.excludedMeshes[F]);x&&M.addExcludedMesh(x)}for(F=0;F<R.includedMeshes.length;F++){var x=O.getMeshByID(R.includedMeshes[F]);x&&M.addIncludedOnlyMesh(x)}return M},C.EffectName="GlowLayer",C.DefaultBlurKernelSize=32,C.DefaultTextureRatio=.5,Object(f.c)([Object(s.c)()],C.prototype,"blurKernelSize",null),Object(f.c)([Object(s.c)()],C.prototype,"intensity",null),Object(f.c)([Object(s.c)("options")],C.prototype,"_options",void 0),C}(t.a);n.a.RegisteredTypes["BABYLON.GlowLayer"]=m},578:function(Z,H,o){"use strict";o.d(H,"a",function(){return i});var f=o(434),s=o(466),P=o(584),v=o(472),c=o(585),E=o(436),h=o(442),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,p,d){p===void 0&&(p=0),d===void 0&&(d=!1);var m=t.call(this,n.getEngine(),"bloom",function(){return m._effects},!0)||this;return m.bloomScale=r,m._effects=[],m._downscale=new P.a("highlights",1,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d),m._blurX=new v.a("horizontal blur",new E.d(1,0),10,r,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,void 0,d),m._blurX.alwaysForcePOT=!0,m._blurX.autoClear=!1,m._blurY=new v.a("vertical blur",new E.d(0,1),10,r,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,void 0,d),m._blurY.alwaysForcePOT=!0,m._blurY.autoClear=!1,m.kernel=l,m._effects=[m._downscale,m._blurX,m._blurY],m._merge=new c.a("bloomMerge",m._downscale,m._blurY,a,r,null,h.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,p,d),m._merge.autoClear=!1,m._effects.push(m._merge),m}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(n){this._downscale.threshold=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._merge.weight},set:function(n){this._merge.weight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(n){this._blurX.kernel=n*this.bloomScale,this._blurY.kernel=n*this.bloomScale},enumerable:!1,configurable:!0}),e.prototype.disposeEffects=function(n){for(var r=0;r<this._effects.length;r++)this._effects[r].dispose(n)},e.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},e.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},e}(s.a)},579:function(Z,H,o){"use strict";o.d(H,"a",function(){return h});var f=o(434),s=o(436),P=o(444),v=o(600),c=o(437),E=o(439),h=function(i){Object(f.d)(t,i);function t(e,n,r,a,l,p,d,m,S,C){S===void 0&&(S=0),C===void 0&&(C=!1);var R=i.call(this,e,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,l,p,d,m,null,S,void 0,null,C)||this;return R.aberrationAmount=30,R.radialIntensity=0,R.direction=new s.d(.707,.707),R.centerPosition=new s.d(.5,.5),R.screenWidth=n,R.screenHeight=r,R.onApplyObservable.add(function(O){O.setFloat("chromatic_aberration",R.aberrationAmount),O.setFloat("screen_width",n),O.setFloat("screen_height",r),O.setFloat("radialIntensity",R.radialIntensity),O.setFloat2("direction",R.direction.x,R.direction.y),O.setFloat2("centerPosition",R.centerPosition.x,R.centerPosition.y)}),R}return t.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},t._Parse=function(e,n,r,a){return E.a.Parse(function(){return new t(e.name,e.screenWidth,e.screenHeight,e.options,n,e.renderTargetSamplingMode,r.getEngine(),e.reusable,e.textureType,!1)},e,r,a)},Object(f.c)([Object(E.c)()],t.prototype,"aberrationAmount",void 0),Object(f.c)([Object(E.c)()],t.prototype,"radialIntensity",void 0),Object(f.c)([Object(E.c)()],t.prototype,"direction",void 0),Object(f.c)([Object(E.c)()],t.prototype,"centerPosition",void 0),Object(f.c)([Object(E.c)()],t.prototype,"screenWidth",void 0),Object(f.c)([Object(E.c)()],t.prototype,"screenHeight",void 0),t}(P.a);c.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=h},580:function(Z,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(434),s=o(442),P=o(472),v=o(437),c=o(439),E=function(h){Object(f.d)(i,h);function i(t,e,n,r,a,l,p,d,m,S,C,R,O){d===void 0&&(d=null),m===void 0&&(m=s.a.BILINEAR_SAMPLINGMODE),R===void 0&&(R=0),O===void 0&&(O=!1);var I=h.call(this,t,n,r,a,l,m=2,S,C,R=0,`#define DOF 1\r
`,O)||this;return I.direction=n,I.onApplyObservable.add(function(M){d!=null&&M.setTextureFromPostProcess("textureSampler",d),M.setTextureFromPostProcessOutput("circleOfConfusionSampler",p),e.activeCamera&&M.setFloat2("cameraMinMaxZ",e.activeCamera.minZ,e.activeCamera.maxZ)}),I}return i.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(f.c)([Object(c.c)()],i.prototype,"direction",void 0),i}(P.a);v.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=E},581:function(Z,H,o){"use strict";o.d(H,"a",function(){return n});var f=o(434),s=o(444),P=o(502),v=o(439),c=function(){function r(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return r}(),E=o(435),h="screenSpaceReflectionPixelShader",i=`

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
`;E.a.ShadersStore[h]=i;var t={name:h,shader:i},e=o(437),n=function(r){Object(f.d)(a,r);function a(l,p,d,m,S,C,R,O,I,M){O===void 0&&(O=0),I===void 0&&(I=!1),M===void 0&&(M=!1);var F=r.call(this,l,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],d,m,S,C,R,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,O,void 0,null,I)||this;if(F.threshold=1.2,F.strength=1,F.reflectionSpecularFalloffExponent=3,F.step=1,F.roughnessFactor=.2,F._forceGeometryBuffer=!1,F._enableSmoothReflections=!1,F._reflectionSamples=64,F._smoothSteps=5,F._forceGeometryBuffer=M,F._forceGeometryBuffer){var x=p.enableGeometryBufferRenderer();x&&x.isSupported&&(x.enablePosition=!0,x.enableReflectivity=!0,F._geometryBufferRenderer=x)}else F._prePassRenderer=p.enablePrePassRenderer(),F._prePassRenderer.markAsDirty(),F._prePassEffectConfiguration=new c;return F._updateEffectDefines(),F.onApply=function(N){var G=F._geometryBufferRenderer,V=F._prePassRenderer;if(!(!V&&!G)){if(G){var L=G.getTextureIndex(P.a.POSITION_TEXTURE_TYPE),ne=G.getTextureIndex(P.a.REFLECTIVITY_TEXTURE_TYPE);N.setTexture("normalSampler",G.getGBuffer().textures[1]),N.setTexture("positionSampler",G.getGBuffer().textures[L]),N.setTexture("reflectivitySampler",G.getGBuffer().textures[ne])}else{var L=V.getIndex(1),ne=V.getIndex(3),K=V.getIndex(6);N.setTexture("normalSampler",V.getRenderTarget().textures[K]),N.setTexture("positionSampler",V.getRenderTarget().textures[L]),N.setTexture("reflectivitySampler",V.getRenderTarget().textures[ne])}var B=p.activeCamera;if(!!B){var J=B.getViewMatrix(!0),re=B.getProjectionMatrix(!0);N.setMatrix("projection",re),N.setMatrix("view",J),N.setFloat("threshold",F.threshold),N.setFloat("reflectionSpecularFalloffExponent",F.reflectionSpecularFalloffExponent),N.setFloat("strength",F.strength),N.setFloat("step",F.step),N.setFloat("roughnessFactor",F.roughnessFactor)}}},F}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(l){l!==this._enableSmoothReflections&&(this._enableSmoothReflections=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(l){l!==this._reflectionSamples&&(this._reflectionSamples=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(l){l!==this._smoothSteps&&(this._smoothSteps=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var l=[];(this._geometryBufferRenderer||this._prePassRenderer)&&l.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&l.push("#define ENABLE_SMOOTH_REFLECTIONS"),l.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),l.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(l.join(`
`))},a._Parse=function(l,p,d,m){return v.a.Parse(function(){return new a(l.name,d,l.options,p,l.renderTargetSamplingMode,d.getEngine(),l.textureType,l.reusable)},l,d,m)},Object(f.c)([Object(v.c)()],a.prototype,"threshold",void 0),Object(f.c)([Object(v.c)()],a.prototype,"strength",void 0),Object(f.c)([Object(v.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(f.c)([Object(v.c)()],a.prototype,"step",void 0),Object(f.c)([Object(v.c)()],a.prototype,"roughnessFactor",void 0),Object(f.c)([Object(v.c)()],a.prototype,"enableSmoothReflections",null),Object(f.c)([Object(v.c)()],a.prototype,"reflectionSamples",null),Object(f.c)([Object(v.c)()],a.prototype,"smoothSteps",null),a}(s.a);e.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=n},582:function(Z,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(434),s=o(444),P=o(440),v=o(435),c="circleOfConfusionPixelShader",E=`
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
`;v.a.ShadersStore[c]=E;var h={name:c,shader:E},i=o(437),t=o(439),e=function(n){Object(f.d)(r,n);function r(a,l,p,d,m,S,C,R,O){R===void 0&&(R=0),O===void 0&&(O=!1);var I=n.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],p,d,m,S,C,null,R,void 0,null,O)||this;return I.lensSize=50,I.fStop=1.4,I.focusDistance=2e3,I.focalLength=50,I._depthTexture=null,I._depthTexture=l,I.onApplyObservable.add(function(M){if(!I._depthTexture){P.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}M.setTexture("depthSampler",I._depthTexture);var F=I.lensSize/I.fStop,x=F*I.focalLength/(I.focusDistance-I.focalLength);M.setFloat("focusDistance",I.focusDistance),M.setFloat("cocPrecalculation",x),M.setFloat2("cameraMinMaxZ",I._depthTexture.activeCamera.minZ,I._depthTexture.activeCamera.maxZ)}),I}return r.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(r.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(f.c)([Object(t.c)()],r.prototype,"lensSize",void 0),Object(f.c)([Object(t.c)()],r.prototype,"fStop",void 0),Object(f.c)([Object(t.c)()],r.prototype,"focusDistance",void 0),Object(f.c)([Object(t.c)()],r.prototype,"focalLength",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=e},583:function(Z,H,o){"use strict";o.d(H,"b",function(){return h}),o.d(H,"a",function(){return i});var f=o(434),s=o(444),P=o(435),v="depthOfFieldMergePixelShader",c=`uniform sampler2D textureSampler;
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
`;P.a.ShadersStore[v]=c;var E={name:v,shader:c},h=function(){function t(){}return t}(),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,p,d,m,S,C,R,O){R===void 0&&(R=0),O===void 0&&(O=!1);var I=t.call(this,n,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],p,d,m,S,C,null,R,void 0,null,!0)||this;return I.blurSteps=l,I.onApplyObservable.add(function(M){M.setTextureFromPostProcess("textureSampler",r),M.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),l.forEach(function(F,x){M.setTextureFromPostProcessOutput("blurStep"+(l.length-x-1),F)})}),O||I.updateEffect(),I}return e.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},e.prototype.updateEffect=function(n,r,a,l,p,d){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),n||(n="",n+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),t.prototype.updateEffect.call(this,n,r,a,l,p,d)},e}(s.a)},584:function(Z,H,o){"use strict";o.d(H,"a",function(){return n});var f=o(434),s=o(444),P=o(515),v=o(435),c=o(457),E="extractHighlightsPixelShader",h=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;v.a.ShadersStore[E]=h;var i={name:E,shader:h},t=o(439),e=o(437),n=function(r){Object(f.d)(a,r);function a(l,p,d,m,S,C,R,O){R===void 0&&(R=0),O===void 0&&(O=!1);var I=r.call(this,l,"extractHighlights",["threshold","exposure"],null,p,d,m,S,C,null,R,void 0,null,O)||this;return I.threshold=.9,I._exposure=1,I._inputPostProcess=null,I.onApplyObservable.add(function(M){I._inputPostProcess&&M.setTextureFromPostProcess("textureSampler",I._inputPostProcess),M.setFloat("threshold",Math.pow(I.threshold,P.b)),M.setFloat("exposure",I._exposure)}),I}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(f.c)([Object(t.c)()],a.prototype,"threshold",void 0),a}(s.a);e.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=n},585:function(Z,H,o){"use strict";o.d(H,"a",function(){return t});var f=o(434),s=o(444),P=o(435),v="bloomMergePixelShader",c=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;P.a.ShadersStore[v]=c;var E={name:v,shader:c},h=o(437),i=o(439),t=function(e){Object(f.d)(n,e);function n(r,a,l,p,d,m,S,C,R,O,I){O===void 0&&(O=0),I===void 0&&(I=!1);var M=e.call(this,r,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],d,m,S,C,R,null,O,void 0,null,!0)||this;return M.weight=1,M.weight=p,M.onApplyObservable.add(function(F){F.setTextureFromPostProcess("textureSampler",a),F.setTextureFromPostProcessOutput("bloomBlur",l),F.setFloat("bloomWeight",M.weight)}),I||M.updateEffect(),M}return n.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(f.c)([Object(i.c)()],n.prototype,"weight",void 0),n}(s.a);h.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=t},586:function(Z,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(434),s=o(444),P=o(435),v=o(457),c="grainPixelShader",E=`#include<helperFunctions>

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
}`;P.a.ShadersStore[c]=E;var h={name:c,shader:E},i=o(437),t=o(439),e=function(n){Object(f.d)(r,n);function r(a,l,p,d,m,S,C,R){C===void 0&&(C=0),R===void 0&&(R=!1);var O=n.call(this,a,"grain",["intensity","animatedSeed"],[],l,p,d,m,S,null,C,void 0,null,R)||this;return O.intensity=30,O.animated=!1,O.onApplyObservable.add(function(I){I.setFloat("intensity",O.intensity),I.setFloat("animatedSeed",O.animated?Math.random()+1:1)}),O}return r.prototype.getClassName=function(){return"GrainPostProcess"},r._Parse=function(a,l,p,d){return t.a.Parse(function(){return new r(a.name,a.options,l,a.renderTargetSamplingMode,p.getEngine(),a.reusable)},a,p,d)},Object(f.c)([Object(t.c)()],r.prototype,"intensity",void 0),Object(f.c)([Object(t.c)()],r.prototype,"animated",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.GrainPostProcess"]=e},587:function(Z,H,o){"use strict";o.d(H,"a",function(){return t});var f=o(434),s=o(444),P=o(435),v="sharpenPixelShader",c=`
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
}`;P.a.ShadersStore[v]=c;var E={name:v,shader:c},h=o(437),i=o(439),t=function(e){Object(f.d)(n,e);function n(r,a,l,p,d,m,S,C){S===void 0&&(S=0),C===void 0&&(C=!1);var R=e.call(this,r,"sharpen",["sharpnessAmounts","screenSize"],null,a,l,p,d,m,null,S,void 0,null,C)||this;return R.colorAmount=1,R.edgeAmount=.3,R.onApply=function(O){O.setFloat2("screenSize",R.width,R.height),O.setFloat2("sharpnessAmounts",R.edgeAmount,R.colorAmount)},R}return n.prototype.getClassName=function(){return"SharpenPostProcess"},n._Parse=function(r,a,l,p){return i.a.Parse(function(){return new n(r.name,r.options,a,r.renderTargetSamplingMode,l.getEngine(),r.textureType,r.reusable)},r,l,p)},Object(f.c)([Object(i.c)()],n.prototype,"colorAmount",void 0),Object(f.c)([Object(i.c)()],n.prototype,"edgeAmount",void 0),n}(s.a);h.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=t},594:function(Z,H,o){"use strict";o.d(H,"a",function(){return O});var f=o(434),s=o(440),P=o(439),v=o(436),c=o(451),E=o(442),h=o(479),i=o(444),t=o(481),e=o(466),n=o(486),r=o(437),a=o(448),l=function(){function I(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return I}(),p=o(482),d=o(435),m="ssao2PixelShader",S=`
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
`;d.a.ShadersStore[m]=S;var C={name:m,shader:S},R=o(601),O=function(I){Object(f.d)(M,I);function M(F,x,N,G,V){V===void 0&&(V=!1);var L=I.call(this,x.getEngine(),F)||this;if(L.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",L.SSAORenderEffect="SSAORenderEffect",L.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",L.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",L.SSAOCombineRenderEffect="SSAOCombineRenderEffect",L.totalStrength=1,L.maxZ=100,L.minZAspect=.2,L._samples=8,L._textureSamples=1,L._forceGeometryBuffer=!1,L._expensiveBlur=!0,L.radius=2,L.base=0,L._bits=new Uint32Array(1),L._scene=x,L._ratio=N,L._forceGeometryBuffer=V,!L.isSupported)return s.a.Error("The current engine does not support SSAO 2."),L;var ne=L._ratio.ssaoRatio||N,K=L._ratio.blurRatio||N;return L._forceGeometryBuffer?x.enableGeometryBufferRenderer():L._prePassRenderer=x.enablePrePassRenderer(),L._createRandomTexture(),L._originalColorPostProcess=new n.b("SSAOOriginalSceneColor",1,null,E.a.BILINEAR_SAMPLINGMODE,x.getEngine(),!1),L._originalColorPostProcess.samples=L.textureSamples,L._createSSAOPostProcess(1),L._createBlurPostProcess(ne,K),L._createSSAOCombinePostProcess(K),L.addEffect(new e.a(x.getEngine(),L.SSAOOriginalSceneColorEffect,function(){return L._originalColorPostProcess},!0)),L.addEffect(new e.a(x.getEngine(),L.SSAORenderEffect,function(){return L._ssaoPostProcess},!0)),L.addEffect(new e.a(x.getEngine(),L.SSAOBlurHRenderEffect,function(){return L._blurHPostProcess},!0)),L.addEffect(new e.a(x.getEngine(),L.SSAOBlurVRenderEffect,function(){return L._blurVPostProcess},!0)),L.addEffect(new e.a(x.getEngine(),L.SSAOCombineRenderEffect,function(){return L._ssaoCombinePostProcess},!0)),x.postProcessRenderPipelineManager.addPipeline(L),G&&x.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(F,G),L}return Object.defineProperty(M.prototype,"samples",{get:function(){return this._samples},set:function(F){this._samples=F,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(F){this._textureSamples=F,this._prePassRenderer?this._prePassRenderer.samples=F:this._originalColorPostProcess.samples=F},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(F){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(F?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(F?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=F},enumerable:!1,configurable:!0}),Object.defineProperty(M,"IsSupported",{get:function(){var F=a.a.LastCreatedEngine;return F?F._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),M.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},M.prototype.dispose=function(F){F===void 0&&(F=!1);for(var x=0;x<this._scene.cameras.length;x++){var N=this._scene.cameras[x];this._originalColorPostProcess.dispose(N),this._ssaoPostProcess.dispose(N),this._blurHPostProcess.dispose(N),this._blurVPostProcess.dispose(N),this._ssaoCombinePostProcess.dispose(N)}this._randomTexture.dispose(),F&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),I.prototype.dispose.call(this)},M.prototype._createBlurPostProcess=function(F,x){var N=this;this._samplerOffsets=[];for(var G=this.expensiveBlur,V=-8;V<8;V++)this._samplerOffsets.push(V*2+.5);this._blurHPostProcess=new i.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],F,null,E.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(G?"1":"0")+`
`),this._blurHPostProcess.onApply=function(L){!N._scene.activeCamera||(L.setFloat("outSize",N._ssaoCombinePostProcess.width>0?N._ssaoCombinePostProcess.width:N._originalColorPostProcess.width),L.setFloat("near",N._scene.activeCamera.minZ),L.setFloat("far",N._scene.activeCamera.maxZ),L.setFloat("radius",N.radius),N._forceGeometryBuffer?L.setTexture("depthSampler",N._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):L.setTexture("depthSampler",N._prePassRenderer.getRenderTarget().textures[N._prePassRenderer.getIndex(5)]),L.setArray("samplerOffsets",N._samplerOffsets))},this._blurVPostProcess=new i.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],x,null,E.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(G?"1":"0")+`
`),this._blurVPostProcess.onApply=function(L){!N._scene.activeCamera||(L.setFloat("outSize",N._ssaoCombinePostProcess.height>0?N._ssaoCombinePostProcess.height:N._originalColorPostProcess.height),L.setFloat("near",N._scene.activeCamera.minZ),L.setFloat("far",N._scene.activeCamera.maxZ),L.setFloat("radius",N.radius),N._forceGeometryBuffer?L.setTexture("depthSampler",N._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):L.setTexture("depthSampler",N._prePassRenderer.getRenderTarget().textures[N._prePassRenderer.getIndex(5)]),L.setArray("samplerOffsets",N._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},M.prototype._rebuild=function(){I.prototype._rebuild.call(this)},M.prototype._radicalInverse_VdC=function(F){return this._bits[0]=F,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},M.prototype._hammersley=function(F,x){return[F/x,this._radicalInverse_VdC(F)]},M.prototype._hemisphereSample_uniform=function(F,x){var N=x*2*Math.PI,G=1-(F*.85+.15),V=Math.sqrt(1-G*G);return new v.e(Math.cos(N)*V,Math.sin(N)*V,G)},M.prototype._generateHemisphere=function(){for(var F=this.samples,x=[],N,G=0;G<F;){if(F<16)N=this._hemisphereSample_uniform(Math.random(),Math.random());else{var V=this._hammersley(G,F);N=this._hemisphereSample_uniform(V[0],V[1])}x.push(N.x,N.y,N.z),G++}return x},M.prototype._getDefinesForSSAO=function(){var F="#define SAMPLES "+this.samples+`
#define SSAO`;return F},M.prototype._createSSAOPostProcess=function(F){var x=this;this._sampleSphere=this._generateHemisphere();var N=this._getDefinesForSSAO(),G=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new i.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],G,F,null,E.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,N),this._ssaoPostProcess.onApply=function(V){var L,ne,K,B;if(!!x._scene.activeCamera){if(V.setArray3("sampleSphere",x._sampleSphere),V.setFloat("randTextureTiles",32),V.setFloat("samplesFactor",1/x.samples),V.setFloat("totalStrength",x.totalStrength),V.setFloat2("texelSize",1/x._ssaoPostProcess.width,1/x._ssaoPostProcess.height),V.setFloat("radius",x.radius),V.setFloat("maxZ",x.maxZ),V.setFloat("minZAspect",x.minZAspect),V.setFloat("base",x.base),V.setFloat("near",x._scene.activeCamera.minZ),V.setFloat("far",x._scene.activeCamera.maxZ),x._scene.activeCamera.mode===c.a.PERSPECTIVE_CAMERA)V.setMatrix3x3("depthProjection",M.PERSPECTIVE_DEPTH_PROJECTION),V.setFloat("xViewport",Math.tan(x._scene.activeCamera.fov/2)*x._scene.getEngine().getAspectRatio(x._scene.activeCamera,!0)),V.setFloat("yViewport",Math.tan(x._scene.activeCamera.fov/2));else{var J=x._scene.getEngine().getRenderWidth()/2,re=x._scene.getEngine().getRenderHeight()/2,Ee=(L=x._scene.activeCamera.orthoLeft)!==null&&L!==void 0?L:-J,W=(ne=x._scene.activeCamera.orthoRight)!==null&&ne!==void 0?ne:J,_e=(K=x._scene.activeCamera.orthoBottom)!==null&&K!==void 0?K:-re,ae=(B=x._scene.activeCamera.orthoTop)!==null&&B!==void 0?B:re;V.setMatrix3x3("depthProjection",M.ORTHO_DEPTH_PROJECTION),V.setFloat("xViewport",(W-Ee)*.5),V.setFloat("yViewport",(ae-_e)*.5)}V.setMatrix("projection",x._scene.getProjectionMatrix()),x._forceGeometryBuffer?(V.setTexture("depthSampler",x._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),V.setTexture("normalSampler",x._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(V.setTexture("depthSampler",x._prePassRenderer.getRenderTarget().textures[x._prePassRenderer.getIndex(5)]),V.setTexture("normalSampler",x._prePassRenderer.getRenderTarget().textures[x._prePassRenderer.getIndex(6)])),V.setTexture("randomSampler",x._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},M.prototype._createSSAOCombinePostProcess=function(F){var x=this;this._ssaoCombinePostProcess=new i.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],F,null,E.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(N){var G=x._scene.activeCamera.viewport;N.setVector4("viewport",v.c.Vector4[0].copyFromFloats(G.x,G.y,G.width,G.height)),N.setTextureFromPostProcessOutput("originalColor",x._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new l)},M.prototype._createRandomTexture=function(){var F=128;this._randomTexture=new h.a("SSAORandomTexture",F,this._scene,!1,E.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=E.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=E.a.WRAP_ADDRESSMODE;for(var x=this._randomTexture.getContext(),N=function(ne,K){return Math.random()*(K-ne)+ne},G=v.e.Zero(),V=0;V<F;V++)for(var L=0;L<F;L++)G.x=N(0,1),G.y=N(0,1),G.z=0,G.normalize(),G.scaleInPlace(255),G.x=Math.floor(G.x),G.y=Math.floor(G.y),x.fillStyle="rgb("+G.x+", "+G.y+", "+G.z+")",x.fillRect(V,L,1,1);this._randomTexture.update(!1)},M.prototype.serialize=function(){var F=P.a.Serialize(this);return F.customType="SSAO2RenderingPipeline",F},M.Parse=function(F,x,N){return P.a.Parse(function(){return new M(F._name,x,F._ratio)},F,x,N)},M.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],M.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(f.c)([Object(P.c)()],M.prototype,"totalStrength",void 0),Object(f.c)([Object(P.c)()],M.prototype,"maxZ",void 0),Object(f.c)([Object(P.c)()],M.prototype,"minZAspect",void 0),Object(f.c)([Object(P.c)("samples")],M.prototype,"_samples",void 0),Object(f.c)([Object(P.c)("textureSamples")],M.prototype,"_textureSamples",void 0),Object(f.c)([Object(P.c)()],M.prototype,"_ratio",void 0),Object(f.c)([Object(P.c)("expensiveBlur")],M.prototype,"_expensiveBlur",void 0),Object(f.c)([Object(P.c)()],M.prototype,"radius",void 0),Object(f.c)([Object(P.c)()],M.prototype,"base",void 0),M}(t.a);r.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=O},598:function(Z,H,o){"use strict";o.d(H,"a",function(){return t});var f=o(434),s=o(538),P=o(518),v=function(e){Object(f.d)(n,e);function n(r,a,l,p,d,m){var S=e.call(this,r,l,p,d,m)||this;return S._beforeCompositionPostProcesses=[],S._internalTextureDirty=!1,S.enabled=!1,S.renderTargetTexture=null,S.renderTargetTexture=a,S}return n.prototype._createCompositionEffect=function(){this.imageProcessingPostProcess=new P.a("prePassComposition",1,null,void 0,this._engine),this.imageProcessingPostProcess._updateParameters()},n.prototype._checkSize=function(){var r=this._engine.getRenderWidth(!0),a=this._engine.getRenderHeight(!0),l=this.getRenderWidth(),p=this.getRenderHeight();(l!==r||p!==a)&&(this.resize({width:r,height:a}),this._internalTextureDirty=!0)},n.prototype.updateCount=function(r,a){e.prototype.updateCount.call(this,r,a),this._internalTextureDirty=!0},n.prototype._resetPostProcessChain=function(){this._beforeCompositionPostProcesses=[]},n.prototype.dispose=function(){var r=this._scene;if(e.prototype.dispose.call(this),r&&r.prePassRenderer){var a=r.prePassRenderer.renderTargets.indexOf(this);a!==-1&&r.prePassRenderer.renderTargets.splice(a,1)}this.imageProcessingPostProcess&&this.imageProcessingPostProcess.dispose()},n}(s.a),c=o(476),E=o(441),h=o(459),i=o(502),t=function(){function e(n){this.excludedSkinnedMesh=[],this.excludedMaterials=[],this.mrtCount=0,this._mrtFormats=[],this._mrtLayout=[],this._textureIndices=[],this._isDirty=!0,this._effectConfigurations=[],this.doNotUseGeometryRendererFallback=!1,this.renderTargets=[],this._clearColor=new E.b(0,0,0,0),this._enabled=!1,this._needsCompositionForThisPass=!1,this.disableGammaTransform=!1,this._scene=n,this._engine=n.getEngine(),e._SceneComponentInitialization(this._scene),this.defaultRT=this._createRenderTarget("sceneprePassRT",null),this._setRenderTarget(null)}return e.prototype.getIndex=function(n){return this._textureIndices[n]},Object.defineProperty(e.prototype,"samples",{get:function(){return this.defaultRT.samples},set:function(n){this.defaultRT.samples=n},enumerable:!1,configurable:!0}),e.prototype.getRenderTarget=function(){return this._currentTarget},e.prototype._setRenderTarget=function(n){n?this._currentTarget=n:this._currentTarget=this.defaultRT},Object.defineProperty(e.prototype,"currentRTisSceneRT",{get:function(){return this._currentTarget===this.defaultRT},enumerable:!1,configurable:!0}),e.prototype._refreshGeometryBufferRendererLink=function(){if(this.doNotUseGeometryRendererFallback)this._geometryBuffer&&this._geometryBuffer._unlinkPrePassRenderer(),this._geometryBuffer=null,this._scene.disableGeometryBufferRenderer();else{if(this._geometryBuffer=this._scene.enableGeometryBufferRenderer(),!this._geometryBuffer){this.doNotUseGeometryRendererFallback=!0;return}this._geometryBuffer._linkPrePassRenderer(this)}},Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},enumerable:!1,configurable:!0}),e.prototype._createRenderTarget=function(n,r){var a=new v(n,r,{width:this._engine.getRenderWidth(),height:this._engine.getRenderHeight()},0,this._scene,{generateMipMaps:!1,generateStencilBuffer:this._engine.isStencilEnable,defaultType:0,types:[],drawOnlyOnFirstAttachmentByDefault:!0});return this.renderTargets.push(a),a},Object.defineProperty(e.prototype,"isSupported",{get:function(){return this._scene.getEngine().getCaps().drawBuffersExtension},enumerable:!1,configurable:!0}),e.prototype.bindAttachmentsForEffect=function(n,r){if(this.enabled&&this._currentTarget.enabled){if(n._multiTarget)this._engine.bindAttachments(this._multiRenderAttachments);else if(this._engine.bindAttachments(this._defaultAttachments),this._geometryBuffer&&this.currentRTisSceneRT){var a=r.getMaterial();a&&!a.isPrePassCapable&&this.excludedMaterials.indexOf(a)===-1&&this._geometryBuffer.renderList.push(r.getRenderingMesh())}}},e.prototype._reinitializeAttachments=function(){for(var n=[],r=[!1],a=[!0],l=0;l<this.mrtCount;l++)n.push(!0),l>0&&(r.push(!0),a.push(!1));this._multiRenderAttachments=this._engine.buildTextureLayout(n),this._clearAttachments=this._engine.buildTextureLayout(r),this._defaultAttachments=this._engine.buildTextureLayout(a)},e.prototype._resetLayout=function(){for(var n=0;n<e._textureFormats.length;n++)this._textureIndices[e._textureFormats[n].type]=-1;this._textureIndices[4]=0,this._mrtLayout=[4],this._mrtFormats=[2],this.mrtCount=1},e.prototype._updateGeometryBufferLayout=function(){if(this._refreshGeometryBufferRendererLink(),this._geometryBuffer){this._geometryBuffer._resetLayout();for(var n=[],r=0;r<this._mrtLayout.length;r++)n.push(!1);this._geometryBuffer._linkInternalTexture(this.defaultRT.getInternalTexture());for(var a=[{prePassConstant:5,geometryBufferConstant:i.a.DEPTH_TEXTURE_TYPE},{prePassConstant:6,geometryBufferConstant:i.a.NORMAL_TEXTURE_TYPE},{prePassConstant:1,geometryBufferConstant:i.a.POSITION_TEXTURE_TYPE},{prePassConstant:3,geometryBufferConstant:i.a.REFLECTIVITY_TEXTURE_TYPE},{prePassConstant:2,geometryBufferConstant:i.a.VELOCITY_TEXTURE_TYPE}],r=0;r<a.length;r++){var l=this._mrtLayout.indexOf(a[r].prePassConstant);l!==-1&&(this._geometryBuffer._forceTextureType(a[r].geometryBufferConstant,l),n[l]=!0)}this._geometryBuffer._setAttachments(this._engine.buildTextureLayout(n))}},e.prototype.restoreAttachments=function(){this.enabled&&this._currentTarget.enabled&&this._defaultAttachments&&this._engine.bindAttachments(this._defaultAttachments)},e.prototype._beforeDraw=function(n,r,a){this._isDirty&&this._update(),!(!this._enabled||!this._currentTarget.enabled)&&(this._geometryBuffer&&(this._geometryBuffer.renderList=[]),this._setupOutputForThisPass(this._currentTarget,n))},e.prototype._prepareFrame=function(n,r,a){n.renderTargetTexture?n.renderTargetTexture._prepareFrame(this._scene,r,a,n.renderTargetTexture.useCameraPostProcesses):this._postProcessesSourceForThisPass.length?this._scene.postProcessManager._prepareFrame():this._engine.restoreDefaultFramebuffer()},e.prototype._renderPostProcesses=function(n,r){var a=this._postProcessesSourceForThisPass[0],l=a?a.inputTexture:n.renderTargetTexture?n.renderTargetTexture.getInternalTexture():null,p=this._currentTarget._beforeCompositionPostProcesses;this._needsCompositionForThisPass&&(p=p.concat([this._currentTarget.imageProcessingPostProcess])),p.length&&(this._scene.postProcessManager._prepareFrame(this._currentTarget.getInternalTexture(),p),this._scene.postProcessManager.directRender(p,l,!1,r))},e.prototype._afterDraw=function(n,r){this._enabled&&this._currentTarget.enabled&&(this._prepareFrame(this._currentTarget,n,r),this._renderPostProcesses(this._currentTarget,n))},e.prototype._clear=function(){this._enabled&&this._currentTarget.enabled&&(this._bindFrameBuffer(this._currentTarget),this._engine.bindAttachments(this._clearAttachments),this._engine.clear(this._clearColor,!0,!1,!1),this._engine.bindAttachments(this._defaultAttachments))},e.prototype._bindFrameBuffer=function(n){if(this._enabled&&this._currentTarget.enabled){this._currentTarget._checkSize();var r=this._currentTarget.getInternalTexture();r&&this._engine.bindFramebuffer(r)}},e.prototype._setEnabled=function(n){this._enabled=n},e.prototype._setRenderTargetEnabled=function(n,r){n.enabled=r},e.prototype.addEffectConfiguration=function(n){for(var r=0;r<this._effectConfigurations.length;r++)if(this._effectConfigurations[r].name===n.name)return this._effectConfigurations[r];return this._effectConfigurations.push(n),n},e.prototype._enable=function(){for(var n=this.mrtCount,r=0;r<this._effectConfigurations.length;r++)this._effectConfigurations[r].enabled&&this._enableTextures(this._effectConfigurations[r].texturesRequired);for(var r=0;r<this.renderTargets.length;r++){this.mrtCount!==n&&this.renderTargets[r].updateCount(this.mrtCount,{types:this._mrtFormats}),this.renderTargets[r]._resetPostProcessChain();for(var a=0;a<this._effectConfigurations.length;a++)this._effectConfigurations[a].enabled&&(!this._effectConfigurations[a].postProcess&&this._effectConfigurations[a].createPostProcess&&this._effectConfigurations[a].createPostProcess(),this._effectConfigurations[a].postProcess&&this.renderTargets[r]._beforeCompositionPostProcesses.push(this._effectConfigurations[a].postProcess))}this._reinitializeAttachments(),this._setEnabled(!0),this._updateGeometryBufferLayout()},e.prototype._disable=function(){this._setEnabled(!1);for(var n=0;n<this.renderTargets.length;n++)this._setRenderTargetEnabled(this.renderTargets[n],!1);this._resetLayout();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].enabled=!1},e.prototype._getPostProcessesSource=function(n,r){if(r)return r._postProcesses;if(n.renderTargetTexture)if(n.renderTargetTexture.useCameraPostProcesses){var a=n.renderTargetTexture.activeCamera?n.renderTargetTexture.activeCamera:this._scene.activeCamera;return a?a._postProcesses:[]}else return n.renderTargetTexture.postProcesses?n.renderTargetTexture.postProcesses:[];else return this._scene.activeCamera?this._scene.activeCamera._postProcesses:[]},e.prototype._setupOutputForThisPass=function(n,r){var a=r&&this._scene.activeCameras&&!!this._scene.activeCameras.length&&this._scene.activeCameras.indexOf(r)!==0;this._postProcessesSourceForThisPass=this._getPostProcessesSource(n,r),this._postProcessesSourceForThisPass=this._postProcessesSourceForThisPass.filter(function(S){return S!=null}),this._scene.autoClear=!0;var l=this._hasImageProcessing(this._postProcessesSourceForThisPass);this._needsCompositionForThisPass=!l&&!this.disableGammaTransform&&this._needsImageProcessing()&&!a;var p=this._getFirstPostProcess(this._postProcessesSourceForThisPass),d=n._beforeCompositionPostProcesses&&n._beforeCompositionPostProcesses[0],m=null;this._scene.imageProcessingConfiguration.applyByPostProcess=this._needsCompositionForThisPass||l,this._needsCompositionForThisPass&&!n.imageProcessingPostProcess&&n._createCompositionEffect(),d?m=d:this._needsCompositionForThisPass?m=n.imageProcessingPostProcess:p&&(m=p),this._bindFrameBuffer(n),this._linkInternalTexture(n,m)},e.prototype._linkInternalTexture=function(n,r){r&&(r.autoClear=!1,r.inputTexture=n.getInternalTexture()),n._outputPostProcess!==r&&(n._outputPostProcess&&n._outputPostProcess.restoreDefaultInputTexture(),n._outputPostProcess=r),n._internalTextureDirty&&(this._updateGeometryBufferLayout(),n._internalTextureDirty=!1)},e.prototype._needsImageProcessing=function(){for(var n=0;n<this._effectConfigurations.length;n++)if(this._effectConfigurations[n].enabled&&this._effectConfigurations[n].needsImageProcessing)return!0;return!1},e.prototype._hasImageProcessing=function(n){var r,a=!1;if(n){for(var l=0;l<n.length;l++)if(((r=n[l])===null||r===void 0?void 0:r.getClassName())==="ImageProcessingPostProcess"){a=!0;break}}return a},e.prototype._getFirstPostProcess=function(n){for(var r=0;r<n.length;r++)if(n[r]!==null)return n[r];return null},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype._enableTextures=function(n){for(var r=0;r<n.length;r++){var a=n[r];this._textureIndices[a]===-1&&(this._textureIndices[a]=this._mrtLayout.length,this._mrtLayout.push(a),this._mrtFormats.push(e._textureFormats[a].format),this.mrtCount++)}},e.prototype._update=function(){this._disable();var n=!1;this._scene.imageProcessingConfiguration.applyByPostProcess=!1;for(var r=0;r<this._scene.materials.length;r++)this._scene.materials[r].setPrePassRenderer(this)&&(n=!0);n&&this._setRenderTargetEnabled(this.defaultRT,!0);for(var a,r=0;r<this.renderTargets.length;r++){if(this.renderTargets[r].renderTargetTexture)a=this._getPostProcessesSource(this.renderTargets[r]);else{var l=this._scene.activeCamera;if(!l)continue;a=l._postProcesses}if(!!a&&(a=a.filter(function(m){return m!=null}),a)){for(var p=0;p<a.length;p++)a[p].setPrePassRenderer(this)&&(this._setRenderTargetEnabled(this.renderTargets[r],!0),n=!0);this._hasImageProcessing(a)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!0)}}this._markAllMaterialsAsPrePassDirty(),this._isDirty=!1,n&&this._enable()},e.prototype._markAllMaterialsAsPrePassDirty=function(){for(var n=this._scene.materials,r=0;r<n.length;r++)n[r].markAsDirty(h.a.PrePassDirtyFlag)},e.prototype.dispose=function(){for(var n=this.renderTargets.length-1;n>=0;n--)this.renderTargets[n].dispose();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].dispose&&this._effectConfigurations[n].dispose()},e._SceneComponentInitialization=function(n){throw c.a.WarnImport("PrePassRendererSceneComponent")},e._textureFormats=[{type:0,format:2},{type:1,format:2},{type:2,format:2},{type:3,format:0},{type:4,format:2},{type:5,format:2},{type:6,format:2},{type:7,format:0}],e}()},600:function(Z,H,o){"use strict";var f=o(435),s="chromaticAberrationPixelShader",P=`
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
}`;f.a.ShadersStore[s]=P;var v={name:s,shader:P}},601:function(Z,H,o){"use strict";var f=o(435),s="ssaoCombinePixelShader",P=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;f.a.ShadersStore[s]=P;var v={name:s,shader:P}},602:function(Z,H,o){"use strict";o.d(H,"a",function(){return C}),o.d(H,"b",function(){return ne}),o.d(H,"g",function(){return K.a}),o.d(H,"h",function(){return ce}),o.d(H,"i",function(){return k}),o.d(H,"c",function(){return a.a}),o.d(H,"d",function(){return r.a}),o.d(H,"e",function(){return de.a}),o.d(H,"f",function(){return S.a});var f=o(434),s=o(439),P=o(438),v=o(440),c=o(442),E=o(577),h=o(587),i=o(518),t=o(579),e=o(586),n=o(517),r=o(481),a=o(466),l=o(570),p=o(578),d=o(437),m=o(448),S=o(482),C=function(te){Object(f.d)(y,te);function y(g,D,b,Y,z){g===void 0&&(g=""),D===void 0&&(D=!0),b===void 0&&(b=m.a.LastCreatedScene),z===void 0&&(z=!0);var A=te.call(this,b.getEngine(),g)||this;A._camerasToBeAttached=[],A.SharpenPostProcessId="SharpenPostProcessEffect",A.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",A.FxaaPostProcessId="FxaaPostProcessEffect",A.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",A.GrainPostProcessId="GrainPostProcessEffect",A._glowLayer=null,A.animations=[],A._imageProcessingConfigurationObserver=null,A._sharpenEnabled=!1,A._bloomEnabled=!1,A._depthOfFieldEnabled=!1,A._depthOfFieldBlurLevel=l.b.Low,A._fxaaEnabled=!1,A._imageProcessingEnabled=!0,A._bloomScale=.5,A._chromaticAberrationEnabled=!1,A._grainEnabled=!1,A._buildAllowed=!0,A.onBuildObservable=new P.c,A._resizeObserver=null,A._hardwareScaleLevel=1,A._bloomKernel=64,A._bloomWeight=.15,A._bloomThreshold=.9,A._samples=1,A._hasCleared=!1,A._prevPostProcess=null,A._prevPrevPostProcess=null,A._depthOfFieldSceneObserver=null,A._cameras=Y||b.cameras,A._cameras=A._cameras.slice(),A._camerasToBeAttached=A._cameras.slice(),A._buildAllowed=z,A._scene=b;var Q=A._scene.getEngine().getCaps();A._hdr=D&&(Q.textureHalfFloatRender||Q.textureFloatRender),A._hdr?Q.textureHalfFloatRender?A._defaultPipelineTextureType=2:Q.textureFloatRender&&(A._defaultPipelineTextureType=1):A._defaultPipelineTextureType=0,b.postProcessRenderPipelineManager.addPipeline(A);var he=A._scene.getEngine();return A.sharpen=new h.a("sharpen",1,null,c.a.BILINEAR_SAMPLINGMODE,he,!1,A._defaultPipelineTextureType,!0),A._sharpenEffect=new a.a(he,A.SharpenPostProcessId,function(){return A.sharpen},!0),A.depthOfField=new l.a(A._scene,null,A._depthOfFieldBlurLevel,A._defaultPipelineTextureType,!0),A.bloom=new p.a(A._scene,A._bloomScale,A._bloomWeight,A.bloomKernel,A._defaultPipelineTextureType,!0),A.chromaticAberration=new t.a("ChromaticAberration",he.getRenderWidth(),he.getRenderHeight(),1,null,c.a.BILINEAR_SAMPLINGMODE,he,!1,A._defaultPipelineTextureType,!0),A._chromaticAberrationEffect=new a.a(he,A.ChromaticAberrationPostProcessId,function(){return A.chromaticAberration},!0),A.grain=new e.a("Grain",1,null,c.a.BILINEAR_SAMPLINGMODE,he,!1,A._defaultPipelineTextureType,!0),A._grainEffect=new a.a(he,A.GrainPostProcessId,function(){return A.grain},!0),A._resizeObserver=he.onResizeObservable.add(function(){A._hardwareScaleLevel=he.getHardwareScalingLevel(),A.bloomKernel=A.bloomKernel}),A._imageProcessingConfigurationObserver=A._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){A.bloom._downscale._exposure=A._scene.imageProcessingConfiguration.exposure,A.imageProcessingEnabled!==A._scene.imageProcessingConfiguration.isEnabled&&(A._imageProcessingEnabled=A._scene.imageProcessingConfiguration.isEnabled,A._buildPipeline())}),A._buildPipeline(),A}return Object.defineProperty(y.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(g){this._sharpenEnabled!==g&&(this._sharpenEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(g){this._bloomKernel=g,this.bloom.kernel=g/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(g){this._bloomWeight!==g&&(this.bloom.weight=g,this._bloomWeight=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(g){this._bloomThreshold!==g&&(this.bloom.threshold=g,this._bloomThreshold=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(g){this._bloomScale!==g&&(this._bloomScale=g,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(g){this._bloomEnabled!==g&&(this._bloomEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),y.prototype._rebuildBloom=function(){var g=this.bloom;this.bloom=new p.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=g.threshold;for(var D=0;D<this._cameras.length;D++)g.disposeEffects(this._cameras[D])},Object.defineProperty(y.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(g){this._depthOfFieldEnabled!==g&&(this._depthOfFieldEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(g){if(this._depthOfFieldBlurLevel!==g){this._depthOfFieldBlurLevel=g;var D=this.depthOfField;this.depthOfField=new l.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=D.focalLength,this.depthOfField.focusDistance=D.focusDistance,this.depthOfField.fStop=D.fStop,this.depthOfField.lensSize=D.lensSize;for(var b=0;b<this._cameras.length;b++)D.disposeEffects(this._cameras[b]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(g){this._fxaaEnabled!==g&&(this._fxaaEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"samples",{get:function(){return this._samples},set:function(g){this._samples!==g&&(this._samples=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(g){this._imageProcessingEnabled!==g&&(this._scene.imageProcessingConfiguration.isEnabled=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(g){g&&!this._glowLayer?this._glowLayer=new E.a("",this._scene):!g&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(g){this._chromaticAberrationEnabled!==g&&(this._chromaticAberrationEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(g){this._grainEnabled!==g&&(this._grainEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),y.prototype.getClassName=function(){return"DefaultRenderingPipeline"},y.prototype.prepare=function(){var g=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=g},y.prototype._setAutoClearAndTextureSharing=function(g,D){D===void 0&&(D=!1),this._hasCleared?g.autoClear=!1:(g.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),D||(this._prevPrevPostProcess?g.shareOutputWith(this._prevPrevPostProcess):g.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=g)},y.prototype._buildPipeline=function(){var g=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var D=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var b=0,Y=this._cameras;b<Y.length;b++){var z=Y[b],A=this._scene.enableDepthRenderer(z);A.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(Q){g._cameras.indexOf(Q.activeCamera)>-1&&(g.depthOfField.depthTexture=Q.enableDepthRenderer(Q.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var A=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=A.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new i.a("imageProcessing",1,null,c.a.BILINEAR_SAMPLINGMODE,D,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(D,this.ImageProcessingPostProcessId,function(){return g.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new n.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,D,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(D,this.FxaaPostProcessId,function(){return g.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},y.prototype._disposePostProcesses=function(g){g===void 0&&(g=!1);for(var D=0;D<this._cameras.length;D++){var b=this._cameras[D];this.imageProcessing&&this.imageProcessing.dispose(b),this.fxaa&&this.fxaa.dispose(b),g&&(this.sharpen&&this.sharpen.dispose(b),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(b)),this.bloom&&this.bloom.disposeEffects(b),this.chromaticAberration&&this.chromaticAberration.dispose(b),this.grain&&this.grain.dispose(b),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,g&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},y.prototype.addCamera=function(g){this._camerasToBeAttached.push(g),this._buildPipeline()},y.prototype.removeCamera=function(g){var D=this._camerasToBeAttached.indexOf(g);this._camerasToBeAttached.splice(D,1),this._buildPipeline()},y.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),te.prototype.dispose.call(this)},y.prototype.serialize=function(){var g=s.a.Serialize(this);return g.customType="DefaultRenderingPipeline",g},y.Parse=function(g,D,b){return s.a.Parse(function(){return new y(g._name,g._name._hdr,D)},g,D,b)},Object(f.c)([Object(s.c)()],y.prototype,"sharpenEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"bloomKernel",null),Object(f.c)([Object(s.c)()],y.prototype,"_bloomWeight",void 0),Object(f.c)([Object(s.c)()],y.prototype,"_bloomThreshold",void 0),Object(f.c)([Object(s.c)()],y.prototype,"_hdr",void 0),Object(f.c)([Object(s.c)()],y.prototype,"bloomWeight",null),Object(f.c)([Object(s.c)()],y.prototype,"bloomThreshold",null),Object(f.c)([Object(s.c)()],y.prototype,"bloomScale",null),Object(f.c)([Object(s.c)()],y.prototype,"bloomEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"depthOfFieldEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"depthOfFieldBlurLevel",null),Object(f.c)([Object(s.c)()],y.prototype,"fxaaEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"samples",null),Object(f.c)([Object(s.c)()],y.prototype,"imageProcessingEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"glowLayerEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"chromaticAberrationEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"grainEnabled",null),y}(r.a);d.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=C;var R=o(479),O=o(444),I=o(600),M=o(435),F="lensHighlightsPixelShader",x=`
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

}`;M.a.ShadersStore[F]=x;var N={name:F,shader:x},G="depthOfFieldPixelShader",V=`




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
`;M.a.ShadersStore[G]=V;var L={name:G,shader:V},ne=function(te){Object(f.d)(y,te);function y(g,D,b,Y,z){Y===void 0&&(Y=1);var A=te.call(this,b.getEngine(),g)||this;return A.LensChromaticAberrationEffect="LensChromaticAberrationEffect",A.HighlightsEnhancingEffect="HighlightsEnhancingEffect",A.LensDepthOfFieldEffect="LensDepthOfFieldEffect",A._pentagonBokehIsEnabled=!1,A._scene=b,A._depthTexture=b.enableDepthRenderer().getDepthMap(),D.grain_texture?A._grainTexture=D.grain_texture:A._createGrainTexture(),A._edgeBlur=D.edge_blur?D.edge_blur:0,A._grainAmount=D.grain_amount?D.grain_amount:0,A._chromaticAberration=D.chromatic_aberration?D.chromatic_aberration:0,A._distortion=D.distortion?D.distortion:0,A._highlightsGain=D.dof_gain!==void 0?D.dof_gain:-1,A._highlightsThreshold=D.dof_threshold?D.dof_threshold:1,A._dofDistance=D.dof_focus_distance!==void 0?D.dof_focus_distance:-1,A._dofAperture=D.dof_aperture?D.dof_aperture:1,A._dofDarken=D.dof_darken?D.dof_darken:0,A._dofPentagon=D.dof_pentagon!==void 0?D.dof_pentagon:!0,A._blurNoise=D.blur_noise!==void 0?D.blur_noise:!0,A._createChromaticAberrationPostProcess(Y),A._createHighlightsPostProcess(Y),A._createDepthOfFieldPostProcess(Y/4),A.addEffect(new a.a(b.getEngine(),A.LensChromaticAberrationEffect,function(){return A._chromaticAberrationPostProcess},!0)),A.addEffect(new a.a(b.getEngine(),A.HighlightsEnhancingEffect,function(){return A._highlightsPostProcess},!0)),A.addEffect(new a.a(b.getEngine(),A.LensDepthOfFieldEffect,function(){return A._depthOfFieldPostProcess},!0)),A._highlightsGain===-1&&A._disableEffect(A.HighlightsEnhancingEffect,null),b.postProcessRenderPipelineManager.addPipeline(A),z&&b.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(g,z),A}return y.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(y.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(g){this.setEdgeBlur(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(g){this.setGrainAmount(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(g){this.setChromaticAberration(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(g){this.setAperture(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(g){this.setEdgeDistortion(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(g){this.setFocusDistance(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(g){this.setDarkenOutOfFocus(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(g){this._blurNoise=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(g){g?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(g){this.setHighlightsGain(g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(g){this.setHighlightsThreshold(g)},enumerable:!1,configurable:!0}),y.prototype.setEdgeBlur=function(g){this._edgeBlur=g},y.prototype.disableEdgeBlur=function(){this._edgeBlur=0},y.prototype.setGrainAmount=function(g){this._grainAmount=g},y.prototype.disableGrain=function(){this._grainAmount=0},y.prototype.setChromaticAberration=function(g){this._chromaticAberration=g},y.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},y.prototype.setEdgeDistortion=function(g){this._distortion=g},y.prototype.disableEdgeDistortion=function(){this._distortion=0},y.prototype.setFocusDistance=function(g){this._dofDistance=g},y.prototype.disableDepthOfField=function(){this._dofDistance=-1},y.prototype.setAperture=function(g){this._dofAperture=g},y.prototype.setDarkenOutOfFocus=function(g){this._dofDarken=g},y.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},y.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},y.prototype.enableNoiseBlur=function(){this._blurNoise=!0},y.prototype.disableNoiseBlur=function(){this._blurNoise=!1},y.prototype.setHighlightsGain=function(g){this._highlightsGain=g},y.prototype.setHighlightsThreshold=function(g){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=g},y.prototype.disableHighlights=function(){this._highlightsGain=-1},y.prototype.dispose=function(g){g===void 0&&(g=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),g&&this._scene.disableDepthRenderer()},y.prototype._createChromaticAberrationPostProcess=function(g){var D=this;this._chromaticAberrationPostProcess=new O.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(b){b.setFloat("chromatic_aberration",D._chromaticAberration),b.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),b.setFloat("screen_height",D._scene.getEngine().getRenderHeight()),b.setFloat("radialIntensity",1),b.setFloat2("direction",17,17),b.setFloat2("centerPosition",.5,.5)}},y.prototype._createHighlightsPostProcess=function(g){var D=this;this._highlightsPostProcess=new O.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(b){b.setFloat("gain",D._highlightsGain),b.setFloat("threshold",D._highlightsThreshold),b.setTextureFromPostProcess("textureSampler",D._chromaticAberrationPostProcess),b.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),b.setFloat("screen_height",D._scene.getEngine().getRenderHeight())}},y.prototype._createDepthOfFieldPostProcess=function(g){var D=this;this._depthOfFieldPostProcess=new O.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],g,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(b){b.setTexture("depthSampler",D._depthTexture),b.setTexture("grainSampler",D._grainTexture),b.setTextureFromPostProcess("textureSampler",D._highlightsPostProcess),b.setTextureFromPostProcess("highlightsSampler",D._depthOfFieldPostProcess),b.setFloat("grain_amount",D._grainAmount),b.setBool("blur_noise",D._blurNoise),b.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),b.setFloat("screen_height",D._scene.getEngine().getRenderHeight()),b.setFloat("distortion",D._distortion),b.setBool("dof_enabled",D._dofDistance!==-1),b.setFloat("screen_distance",1/(.1-1/D._dofDistance)),b.setFloat("aperture",D._dofAperture),b.setFloat("darken",D._dofDarken),b.setFloat("edge_blur",D._edgeBlur),b.setBool("highlights",D._highlightsGain!==-1),D._scene.activeCamera&&(b.setFloat("near",D._scene.activeCamera.minZ),b.setFloat("far",D._scene.activeCamera.maxZ))}},y.prototype._createGrainTexture=function(){var g=512;this._grainTexture=new R.a("LensNoiseTexture",g,this._scene,!1,c.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var D=this._grainTexture.getContext(),b=function(Q,he){return Math.random()*(he-Q)+Q},Y,z=0;z<g;z++)for(var A=0;A<g;A++)Y=Math.floor(b(.42,.58)*255),D.fillStyle="rgb("+Y+", "+Y+", "+Y+")",D.fillRect(z,A,1,1);this._grainTexture.update(!1)},y}(r.a),K=o(594),B=o(436),J=o(486),re=o(472),Ee="ssaoPixelShader",W=`
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
`;M.a.ShadersStore[Ee]=W;var _e={name:Ee,shader:W},ae=o(601),ce=function(te){Object(f.d)(y,te);function y(g,D,b,Y){var z=te.call(this,D.getEngine(),g)||this;z.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",z.SSAORenderEffect="SSAORenderEffect",z.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",z.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",z.SSAOCombineRenderEffect="SSAOCombineRenderEffect",z.totalStrength=1,z.radius=1e-4,z.area=.0075,z.fallOff=1e-6,z.base=.5,z._firstUpdate=!0,z._scene=D,z._createRandomTexture(),z._depthTexture=D.enableDepthRenderer().getDepthMap();var A=b.ssaoRatio||b,Q=b.combineRatio||b;return z._originalColorPostProcess=new J.b("SSAOOriginalSceneColor",Q,null,c.a.BILINEAR_SAMPLINGMODE,D.getEngine(),!1),z._createSSAOPostProcess(A),z._createBlurPostProcess(A),z._createSSAOCombinePostProcess(Q),z.addEffect(new a.a(D.getEngine(),z.SSAOOriginalSceneColorEffect,function(){return z._originalColorPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAORenderEffect,function(){return z._ssaoPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOBlurHRenderEffect,function(){return z._blurHPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOBlurVRenderEffect,function(){return z._blurVPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOCombineRenderEffect,function(){return z._ssaoCombinePostProcess},!0)),D.postProcessRenderPipelineManager.addPipeline(z),Y&&D.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(g,Y),z}return Object.defineProperty(y.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),y.prototype.getClassName=function(){return"SSAORenderingPipeline"},y.prototype.dispose=function(g){g===void 0&&(g=!1);for(var D=0;D<this._scene.cameras.length;D++){var b=this._scene.cameras[D];this._originalColorPostProcess.dispose(b),this._ssaoPostProcess.dispose(b),this._blurHPostProcess.dispose(b),this._blurVPostProcess.dispose(b),this._ssaoCombinePostProcess.dispose(b)}this._randomTexture.dispose(),g&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),te.prototype.dispose.call(this)},y.prototype._createBlurPostProcess=function(g){var D=this,b=16;this._blurHPostProcess=new re.a("BlurH",new B.d(1,0),b,g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new re.a("BlurV",new B.d(0,1),b,g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var Y=D._blurHPostProcess.width/D._scene.getEngine().getRenderWidth();D._blurHPostProcess.kernel=b*Y}),this._blurVPostProcess.onActivateObservable.add(function(){var Y=D._blurVPostProcess.height/D._scene.getEngine().getRenderHeight();D._blurVPostProcess.kernel=b*Y})},y.prototype._rebuild=function(){this._firstUpdate=!0,te.prototype._rebuild.call(this)},y.prototype._createSSAOPostProcess=function(g){var D=this,b=16,Y=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],z=1/b;this._ssaoPostProcess=new O.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+b+`
#define SSAO`),this._ssaoPostProcess.onApply=function(A){D._firstUpdate&&(A.setArray3("sampleSphere",Y),A.setFloat("samplesFactor",z),A.setFloat("randTextureTiles",4)),A.setFloat("totalStrength",D.totalStrength),A.setFloat("radius",D.radius),A.setFloat("area",D.area),A.setFloat("fallOff",D.fallOff),A.setFloat("base",D.base),A.setTexture("textureSampler",D._depthTexture),A.setTexture("randomSampler",D._randomTexture)}},y.prototype._createSSAOCombinePostProcess=function(g){var D=this;this._ssaoCombinePostProcess=new O.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],g,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(b){b.setVector4("viewport",B.c.Vector4[0].copyFromFloats(0,0,1,1)),b.setTextureFromPostProcess("originalColor",D._originalColorPostProcess)}},y.prototype._createRandomTexture=function(){var g=512;this._randomTexture=new R.a("SSAORandomTexture",g,this._scene,!1,c.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var D=this._randomTexture.getContext(),b=function(Q,he){return Math.random()*(he-Q)+Q},Y=B.e.Zero(),z=0;z<g;z++)for(var A=0;A<g;A++)Y.x=Math.floor(b(-1,1)*255),Y.y=Math.floor(b(-1,1)*255),Y.z=Math.floor(b(-1,1)*255),D.fillStyle="rgb("+Y.x+", "+Y.y+", "+Y.z+")",D.fillRect(z,A,1,1);this._randomTexture.update(!1)},Object(f.c)([Object(s.c)()],y.prototype,"totalStrength",void 0),Object(f.c)([Object(s.c)()],y.prototype,"radius",void 0),Object(f.c)([Object(s.c)()],y.prototype,"area",void 0),Object(f.c)([Object(s.c)()],y.prototype,"fallOff",void 0),Object(f.c)([Object(s.c)()],y.prototype,"base",void 0),y}(r.a),pe=o(450),q=o(571),j=o(581),ge=o(535),me="standardPixelShader",ee=`uniform sampler2D textureSampler;
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
`;M.a.ShadersStore[me]=ee;var ie={name:me,shader:ee},k=function(te){Object(f.d)(y,te);function y(g,D,b,Y,z){Y===void 0&&(Y=null);var A=te.call(this,D.getEngine(),g)||this;return A.downSampleX4PostProcess=null,A.brightPassPostProcess=null,A.blurHPostProcesses=[],A.blurVPostProcesses=[],A.textureAdderPostProcess=null,A.volumetricLightPostProcess=null,A.volumetricLightSmoothXPostProcess=null,A.volumetricLightSmoothYPostProcess=null,A.volumetricLightMergePostProces=null,A.volumetricLightFinalPostProcess=null,A.luminancePostProcess=null,A.luminanceDownSamplePostProcesses=[],A.hdrPostProcess=null,A.textureAdderFinalPostProcess=null,A.lensFlareFinalPostProcess=null,A.hdrFinalPostProcess=null,A.lensFlarePostProcess=null,A.lensFlareComposePostProcess=null,A.motionBlurPostProcess=null,A.depthOfFieldPostProcess=null,A.fxaaPostProcess=null,A.screenSpaceReflectionPostProcess=null,A.brightThreshold=1,A.blurWidth=512,A.horizontalBlur=!1,A.lensTexture=null,A.volumetricLightCoefficient=.2,A.volumetricLightPower=4,A.volumetricLightBlurScale=64,A.sourceLight=null,A.hdrMinimumLuminance=1,A.hdrDecreaseRate=.5,A.hdrIncreaseRate=.5,A.lensColorTexture=null,A.lensFlareStrength=20,A.lensFlareGhostDispersal=1.4,A.lensFlareHaloWidth=.7,A.lensFlareDistortionStrength=16,A.lensFlareBlurWidth=512,A.lensStarTexture=null,A.lensFlareDirtTexture=null,A.depthOfFieldDistance=10,A.depthOfFieldBlurWidth=64,A.animations=[],A._currentDepthOfFieldSource=null,A._fixedExposure=1,A._currentExposure=1,A._hdrAutoExposure=!1,A._hdrCurrentLuminance=1,A._motionStrength=1,A._isObjectBasedMotionBlur=!1,A._camerasToBeAttached=[],A._bloomEnabled=!1,A._depthOfFieldEnabled=!1,A._vlsEnabled=!1,A._lensFlareEnabled=!1,A._hdrEnabled=!1,A._motionBlurEnabled=!1,A._fxaaEnabled=!1,A._screenSpaceReflectionsEnabled=!1,A._motionBlurSamples=64,A._volumetricLightStepsCount=50,A._samples=1,A._cameras=z||D.cameras,A._cameras=A._cameras.slice(),A._camerasToBeAttached=A._cameras.slice(),A._scene=D,A._basePostProcess=Y,A._ratio=b,A._floatTextureType=D.getEngine().getCaps().textureFloatRender?1:2,D.postProcessRenderPipelineManager.addPipeline(A),A._buildPipeline(),A}return Object.defineProperty(y.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(g){this._fixedExposure=g,this._currentExposure=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(g){if(this._hdrAutoExposure=g,this.hdrPostProcess){var D=["#define HDR"];g&&D.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(D.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(g){this._motionStrength=g,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=g)},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(g){var D=this._isObjectBasedMotionBlur!==g;this._isObjectBasedMotionBlur=g,D&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(g){this._bloomEnabled!==g&&(this._bloomEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(g){this._depthOfFieldEnabled!==g&&(this._depthOfFieldEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(g){this._lensFlareEnabled!==g&&(this._lensFlareEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(g){this._hdrEnabled!==g&&(this._hdrEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(g){if(this._vlsEnabled!==g){if(g){var D=this._scene.enableGeometryBufferRenderer();if(!D){v.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=g,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(g){this._motionBlurEnabled!==g&&(this._motionBlurEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(g){this._fxaaEnabled!==g&&(this._fxaaEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(g){this._screenSpaceReflectionsEnabled!==g&&(this._screenSpaceReflectionsEnabled=g,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(g){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+g.toFixed(1)),this._volumetricLightStepsCount=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(g){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=g:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+g.toFixed(1))),this._motionBlurSamples=g},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"samples",{get:function(){return this._samples},set:function(g){this._samples!==g&&(this._samples=g,this._buildPipeline())},enumerable:!1,configurable:!0}),y.prototype._buildPipeline=function(){var g=this,D=this._ratio,b=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new j.a("HDRPass",b,D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){g._currentDepthOfFieldSource=g.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(b.getEngine(),"HDRScreenSpaceReflections",function(){return g.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new O.a("HDRPass","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){g._currentDepthOfFieldSource=g.originalPostProcess}),this.addEffect(new a.a(b.getEngine(),"HDRPassPostProcess",function(){return g.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(b,D/4),this._createBrightPassPostProcess(b,D/4),this._createBlurPostProcesses(b,D/4,1),this._createTextureAdderPostProcess(b,D),this.textureAdderFinalPostProcess=new O.a("HDRDepthOfFieldSource","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRBaseDepthOfFieldSource",function(){return g.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(b,D),this.volumetricLightFinalPostProcess=new O.a("HDRVLSFinal","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRVLSFinal",function(){return g.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(b,D),this.lensFlareFinalPostProcess=new O.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return g.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(b,this._floatTextureType),this._createHdrPostProcess(b,D),this.hdrFinalPostProcess=new O.a("HDRPostHDReDepthOfFieldSource","standard",[],[],D,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(b.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return g.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(b,D/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(b,D)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(b,D),this._fxaaEnabled&&(this.fxaaPostProcess=new n.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,b.getEngine(),!1,0),this.addEffect(new a.a(b.getEngine(),"HDRFxaa",function(){return g.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},y.prototype._createDownSampleX4PostProcess=function(g,D){var b=this,Y=new Array(32);this.downSampleX4PostProcess=new O.a("HDRDownSampleX4","standard",["dsOffsets"],[],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(z){for(var A=0,Q=b.downSampleX4PostProcess.width,he=b.downSampleX4PostProcess.height,Te=-2;Te<2;Te++)for(var Re=-2;Re<2;Re++)Y[A]=(Te+.5)*(1/Q),Y[A+1]=(Re+.5)*(1/he),A+=2;z.setArray2("dsOffsets",Y)},this.addEffect(new a.a(g.getEngine(),"HDRDownSampleX4",function(){return b.downSampleX4PostProcess},!0))},y.prototype._createBrightPassPostProcess=function(g,D){var b=this,Y=new Array(8);this.brightPassPostProcess=new O.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(z){var A=1/b.brightPassPostProcess.width,Q=1/b.brightPassPostProcess.height;Y[0]=-.5*A,Y[1]=.5*Q,Y[2]=.5*A,Y[3]=.5*Q,Y[4]=-.5*A,Y[5]=-.5*Q,Y[6]=.5*A,Y[7]=-.5*Q,z.setArray2("dsOffsets",Y),z.setFloat("brightThreshold",b.brightThreshold)},this.addEffect(new a.a(g.getEngine(),"HDRBrightPass",function(){return b.brightPassPostProcess},!0))},y.prototype._createBlurPostProcesses=function(g,D,b,Y){var z=this;Y===void 0&&(Y="blurWidth");var A=g.getEngine(),Q=new re.a("HDRBlurH_"+b,new B.d(1,0),this[Y],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,this._floatTextureType),he=new re.a("HDRBlurV_"+b,new B.d(0,1),this[Y],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,this._floatTextureType);Q.onActivateObservable.add(function(){var Te=Q.width/A.getRenderWidth();Q.kernel=z[Y]*Te}),he.onActivateObservable.add(function(){var Te=he.height/A.getRenderHeight();he.kernel=z.horizontalBlur?64*Te:z[Y]*Te}),this.addEffect(new a.a(g.getEngine(),"HDRBlurH"+b,function(){return Q},!0)),this.addEffect(new a.a(g.getEngine(),"HDRBlurV"+b,function(){return he},!0)),this.blurHPostProcesses.push(Q),this.blurVPostProcesses.push(he)},y.prototype._createTextureAdderPostProcess=function(g,D){var b=this;this.textureAdderPostProcess=new O.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(Y){Y.setTextureFromPostProcess("otherSampler",b._vlsEnabled?b._currentDepthOfFieldSource:b.originalPostProcess),Y.setTexture("lensSampler",b.lensTexture),Y.setFloat("exposure",b._currentExposure),b._currentDepthOfFieldSource=b.textureAdderFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDRTextureAdder",function(){return b.textureAdderPostProcess},!0))},y.prototype._createVolumetricLightPostProcess=function(g,D){var b=this,Y=g.enableGeometryBufferRenderer();Y.enablePosition=!0;var z=Y.getGBuffer();this.volumetricLightPostProcess=new O.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],D/8,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var A=B.d.Zero();this.volumetricLightPostProcess.onApply=function(Q){if(b.sourceLight&&b.sourceLight.getShadowGenerator()&&b._scene.activeCamera){var he=b.sourceLight.getShadowGenerator();Q.setTexture("shadowMapSampler",he.getShadowMap()),Q.setTexture("positionSampler",z.textures[2]),Q.setColor3("sunColor",b.sourceLight.diffuse),Q.setVector3("sunDirection",b.sourceLight.getShadowDirection()),Q.setVector3("cameraPosition",b._scene.activeCamera.globalPosition),Q.setMatrix("shadowViewProjection",he.getTransformMatrix()),Q.setFloat("scatteringCoefficient",b.volumetricLightCoefficient),Q.setFloat("scatteringPower",b.volumetricLightPower),A.x=b.sourceLight.getDepthMinZ(b._scene.activeCamera),A.y=b.sourceLight.getDepthMaxZ(b._scene.activeCamera),Q.setVector2("depthValues",A)}},this.addEffect(new a.a(g.getEngine(),"HDRVLS",function(){return b.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(g,D/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new O.a("HDRVLSMerge","standard",[],["originalSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(Q){Q.setTextureFromPostProcess("originalSampler",b._bloomEnabled?b.textureAdderFinalPostProcess:b.originalPostProcess),b._currentDepthOfFieldSource=b.volumetricLightFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDRVLSMerge",function(){return b.volumetricLightMergePostProces},!0))},y.prototype._createLuminancePostProcesses=function(g,D){var b=this,Y=Math.pow(3,y.LuminanceSteps);this.luminancePostProcess=new O.a("HDRLuminance","standard",["lumOffsets"],[],{width:Y,height:Y},null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LUMINANCE",D);var z=[];this.luminancePostProcess.onApply=function(Re){var Ce=1/b.luminancePostProcess.width,Oe=1/b.luminancePostProcess.height;z[0]=-.5*Ce,z[1]=.5*Oe,z[2]=.5*Ce,z[3]=.5*Oe,z[4]=-.5*Ce,z[5]=-.5*Oe,z[6]=.5*Ce,z[7]=-.5*Oe,Re.setArray2("lumOffsets",z)},this.addEffect(new a.a(g.getEngine(),"HDRLuminance",function(){return b.luminancePostProcess},!0));for(var A=y.LuminanceSteps-1;A>=0;A--){var Y=Math.pow(3,A),Q=`#define LUMINANCE_DOWN_SAMPLE
`;A===0&&(Q+="#define FINAL_DOWN_SAMPLER");var he=new O.a("HDRLuminanceDownSample"+A,"standard",["dsOffsets","halfDestPixelSize"],[],{width:Y,height:Y},null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,Q,D);this.luminanceDownSamplePostProcesses.push(he)}var Te=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Re,Ce){var Oe=new Array(18);Re.onApply=function(Le){if(!!Te){for(var Ie=0,xe=-1;xe<2;xe++)for(var Me=-1;Me<2;Me++)Oe[Ie]=xe/Te.width,Oe[Ie+1]=Me/Te.height,Ie+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Te.width),Ce===b.luminanceDownSamplePostProcesses.length-1?Te=b.luminancePostProcess:Te=Re}},Ce===b.luminanceDownSamplePostProcesses.length-1&&(Re.onAfterRender=function(){var Le=g.getEngine().readPixels(0,0,1,1),Ie=new B.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Me=new Uint8Array(xe.buffer);b._hdrCurrentLuminance=(Me[0]*Ie.x+Me[1]*Ie.y+Me[2]*Ie.z+Me[3]*Ie.w)/100})}),b.addEffect(new a.a(g.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Re},!0))})},y.prototype._createHdrPostProcess=function(g,D){var b=this,Y=["#define HDR"];this._hdrAutoExposure&&Y.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new O.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,Y.join(`
`),0);var z=1,A=0,Q=0;this.hdrPostProcess.onApply=function(he){if(he.setTextureFromPostProcess("textureAdderSampler",b._currentDepthOfFieldSource),A+=g.getEngine().getDeltaTime(),z<0)z=b._hdrCurrentLuminance;else{var Te=(Q-A)/1e3;b._hdrCurrentLuminance<z+b.hdrDecreaseRate*Te?z+=b.hdrDecreaseRate*Te:b._hdrCurrentLuminance>z-b.hdrIncreaseRate*Te?z-=b.hdrIncreaseRate*Te:z=b._hdrCurrentLuminance}b.hdrAutoExposure?b._currentExposure=b._fixedExposure/z:(z=pe.a.Clamp(z,b.hdrMinimumLuminance,1e20),he.setFloat("averageLuminance",z)),Q=A,b._currentDepthOfFieldSource=b.hdrFinalPostProcess},this.addEffect(new a.a(g.getEngine(),"HDR",function(){return b.hdrPostProcess},!0))},y.prototype._createLensFlarePostProcess=function(g,D){var b=this;this.lensFlarePostProcess=new O.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],D/2,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(g.getEngine(),"HDRLensFlare",function(){return b.lensFlarePostProcess},!0)),this._createBlurPostProcesses(g,D/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new O.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(g.getEngine(),"HDRLensFlareCompose",function(){return b.lensFlareComposePostProcess},!0));var Y=new B.d(0,0);this.lensFlarePostProcess.onApply=function(Q){Q.setTextureFromPostProcess("textureSampler",b._bloomEnabled?b.blurHPostProcesses[0]:b.originalPostProcess),Q.setTexture("lensColorSampler",b.lensColorTexture),Q.setFloat("strength",b.lensFlareStrength),Q.setFloat("ghostDispersal",b.lensFlareGhostDispersal),Q.setFloat("haloWidth",b.lensFlareHaloWidth),Y.x=b.lensFlarePostProcess.width,Y.y=b.lensFlarePostProcess.height,Q.setVector2("resolution",Y),Q.setFloat("distortionStrength",b.lensFlareDistortionStrength)};var z=B.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),A=B.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(Q){if(!!b._scene.activeCamera){Q.setTextureFromPostProcess("otherSampler",b.lensFlarePostProcess),Q.setTexture("lensDirtSampler",b.lensFlareDirtTexture),Q.setTexture("lensStarSampler",b.lensStarTexture);var he=b._scene.activeCamera.getViewMatrix().getRow(0),Te=b._scene.activeCamera.getViewMatrix().getRow(2),Re=B.e.Dot(he.toVector3(),new B.e(1,0,0))+B.e.Dot(Te.toVector3(),new B.e(0,0,1));Re*=4;var Ce=B.a.FromValues(Math.cos(Re)*.5,-Math.sin(Re),0,0,Math.sin(Re),Math.cos(Re)*.5,0,0,0,0,1,0,0,0,0,1),Oe=A.multiply(Ce).multiply(z);Q.setMatrix("lensStarMatrix",Oe),b._currentDepthOfFieldSource=b.lensFlareFinalPostProcess}}},y.prototype._createDepthOfFieldPostProcess=function(g,D){var b=this;this.depthOfFieldPostProcess=new O.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(Y){Y.setTextureFromPostProcess("otherSampler",b._currentDepthOfFieldSource),Y.setTexture("depthSampler",b._getDepthTexture()),Y.setFloat("distance",b.depthOfFieldDistance)},this.addEffect(new a.a(g.getEngine(),"HDRDepthOfField",function(){return b.depthOfFieldPostProcess},!0))},y.prototype._createMotionBlurPostProcess=function(g,D){var b=this;if(this._isObjectBasedMotionBlur){var Y=new q.a("HDRMotionBlur",g,D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,0);Y.motionStrength=this.motionStrength,Y.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=Y}else{this.motionBlurPostProcess=new O.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],D,null,c.a.BILINEAR_SAMPLINGMODE,g.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var z=0,A=B.a.Identity(),Q=B.a.Identity(),he=B.a.Identity(),Te=B.d.Zero();this.motionBlurPostProcess.onApply=function(Re){he=g.getProjectionMatrix().multiply(g.getViewMatrix()),he.invertToRef(Q),Re.setMatrix("inverseViewProjection",Q),Re.setMatrix("prevViewProjection",A),A=he,Te.x=b.motionBlurPostProcess.width,Te.y=b.motionBlurPostProcess.height,Re.setVector2("screenSize",Te),z=g.getEngine().getFps()/60,Re.setFloat("motionScale",z),Re.setFloat("motionStrength",b.motionStrength),Re.setTexture("depthSampler",b._getDepthTexture())}}this.addEffect(new a.a(g.getEngine(),"HDRMotionBlur",function(){return b.motionBlurPostProcess},!0))},y.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var g=this._scene.enableGeometryBufferRenderer();return g.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},y.prototype._disposePostProcesses=function(){for(var g=0;g<this._cameras.length;g++){var D=this._cameras[g];this.originalPostProcess&&this.originalPostProcess.dispose(D),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(D),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(D),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(D),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(D),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(D),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(D),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(D),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(D),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(D),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(D),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(D);for(var b=0;b<this.luminanceDownSamplePostProcesses.length;b++)this.luminanceDownSamplePostProcesses[b].dispose(D);this.luminancePostProcess&&this.luminancePostProcess.dispose(D),this.hdrPostProcess&&this.hdrPostProcess.dispose(D),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(D),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(D),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(D),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(D);for(var b=0;b<this.blurHPostProcesses.length;b++)this.blurHPostProcesses[b].dispose(D);for(var b=0;b<this.blurVPostProcesses.length;b++)this.blurVPostProcesses[b].dispose(D)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},y.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),te.prototype.dispose.call(this)},y.prototype.serialize=function(){var g=s.a.Serialize(this);return this.sourceLight&&(g.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(g.screenSpaceReflectionPostProcess=s.a.Serialize(this.screenSpaceReflectionPostProcess)),g.customType="StandardRenderingPipeline",g},y.Parse=function(g,D,b){var Y=s.a.Parse(function(){return new y(g._name,D,g._ratio)},g,D,b);return g.sourceLightId&&(Y.sourceLight=D.getLightByID(g.sourceLightId)),g.screenSpaceReflectionPostProcess&&s.a.Parse(function(){return Y.screenSpaceReflectionPostProcess},g.screenSpaceReflectionPostProcess,D,b),Y},y.LuminanceSteps=6,Object(f.c)([Object(s.c)()],y.prototype,"brightThreshold",void 0),Object(f.c)([Object(s.c)()],y.prototype,"blurWidth",void 0),Object(f.c)([Object(s.c)()],y.prototype,"horizontalBlur",void 0),Object(f.c)([Object(s.c)()],y.prototype,"exposure",null),Object(f.c)([Object(s.m)("lensTexture")],y.prototype,"lensTexture",void 0),Object(f.c)([Object(s.c)()],y.prototype,"volumetricLightCoefficient",void 0),Object(f.c)([Object(s.c)()],y.prototype,"volumetricLightPower",void 0),Object(f.c)([Object(s.c)()],y.prototype,"volumetricLightBlurScale",void 0),Object(f.c)([Object(s.c)()],y.prototype,"hdrMinimumLuminance",void 0),Object(f.c)([Object(s.c)()],y.prototype,"hdrDecreaseRate",void 0),Object(f.c)([Object(s.c)()],y.prototype,"hdrIncreaseRate",void 0),Object(f.c)([Object(s.c)()],y.prototype,"hdrAutoExposure",null),Object(f.c)([Object(s.m)("lensColorTexture")],y.prototype,"lensColorTexture",void 0),Object(f.c)([Object(s.c)()],y.prototype,"lensFlareStrength",void 0),Object(f.c)([Object(s.c)()],y.prototype,"lensFlareGhostDispersal",void 0),Object(f.c)([Object(s.c)()],y.prototype,"lensFlareHaloWidth",void 0),Object(f.c)([Object(s.c)()],y.prototype,"lensFlareDistortionStrength",void 0),Object(f.c)([Object(s.c)()],y.prototype,"lensFlareBlurWidth",void 0),Object(f.c)([Object(s.m)("lensStarTexture")],y.prototype,"lensStarTexture",void 0),Object(f.c)([Object(s.m)("lensFlareDirtTexture")],y.prototype,"lensFlareDirtTexture",void 0),Object(f.c)([Object(s.c)()],y.prototype,"depthOfFieldDistance",void 0),Object(f.c)([Object(s.c)()],y.prototype,"depthOfFieldBlurWidth",void 0),Object(f.c)([Object(s.c)()],y.prototype,"motionStrength",null),Object(f.c)([Object(s.c)()],y.prototype,"objectBasedMotionBlur",null),Object(f.c)([Object(s.c)()],y.prototype,"_ratio",void 0),Object(f.c)([Object(s.c)()],y.prototype,"BloomEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"DepthOfFieldEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"LensFlareEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"HDREnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"VLSEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"MotionBlurEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"fxaaEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"screenSpaceReflectionsEnabled",null),Object(f.c)([Object(s.c)()],y.prototype,"volumetricLightStepsCount",null),Object(f.c)([Object(s.c)()],y.prototype,"motionBlurSamples",null),Object(f.c)([Object(s.c)()],y.prototype,"samples",null),y}(r.a);d.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=k;var de=o(548)},605:function(Z,H,o){"use strict";var f=o(435),s="importanceSampling",P=`




























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
}`;f.a.IncludesShadersStore[s]=P;var v={name:s,shader:P}},606:function(Z,H,o){"use strict";var f=o(435),s="pbrBRDFFunctions",P=`
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
`;f.a.IncludesShadersStore[s]=P;var v={name:s,shader:P}},607:function(Z,H,o){"use strict";var f=o(435),s="hdrFilteringFunctions",P=`#ifdef NUM_SAMPLES
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
#endif`;f.a.IncludesShadersStore[s]=P;var v={name:s,shader:P}},625:function(Z,H,o){"use strict";var f=o(435),s=o(457),P="rgbdDecodePixelShader",v=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;f.a.ShadersStore[P]=v;var c={name:P,shader:v}},626:function(Z,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(434),s=o(439),P=o(441),v=o(480),c=o(454),E=function(){function h(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=h._DefaultIndexOfRefraction,this.indexOfRefraction=h._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=P.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return h.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},h.prototype.isReadyForSubMesh=function(i,t,e,n){return!(i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&v.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||e.getCaps().standardDerivatives&&this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled&&!n&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},h.prototype.prepareDefines=function(i,t){var e;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((e=this._textureRoughness)===null||e===void 0?void 0:e._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled?c.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===h._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&v.a.ClearCoatTintTextureEnabled?c.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},h.prototype.bindForSubMesh=function(i,t,e,n,r,a,l,p){var d,m,S,C,R,O,I,M,F=p._materialDefines,x=F.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!r||!i.isSync){x&&v.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&v.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(m=(d=this._texture)===null||d===void 0?void 0:d.coordinatesIndex)!==null&&m!==void 0?m:0,(C=(S=this._texture)===null||S===void 0?void 0:S.level)!==null&&C!==void 0?C:0,(O=(R=this._textureRoughness)===null||R===void 0?void 0:R.coordinatesIndex)!==null&&O!==void 0?O:0,(M=(I=this._textureRoughness)===null||I===void 0?void 0:I.level)!==null&&M!==void 0?M:0),this._texture&&c.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!x&&!F.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&e.getCaps().standardDerivatives&&v.a.ClearCoatTextureEnabled&&!n&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),c.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),t._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,l?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,l?-1:1)),this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),c.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var N=1-this._indexOfRefraction,G=1+this._indexOfRefraction,V=Math.pow(-N/G,2),L=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",V,L,N,G),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}t.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!x&&!F.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&e.getCaps().standardDerivatives&&v.a.ClearCoatBumpTextureEnabled&&!n&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},h.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},h.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},h.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},h.prototype.dispose=function(i){var t,e,n,r;i&&((t=this._texture)===null||t===void 0||t.dispose(),(e=this._textureRoughness)===null||e===void 0||e.dispose(),(n=this._bumpTexture)===null||n===void 0||n.dispose(),(r=this._tintTexture)===null||r===void 0||r.dispose())},h.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},h.AddFallbacks=function(i,t,e){return i.CLEARCOAT_BUMP&&t.addFallback(e++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&t.addFallback(e++,"CLEARCOAT_TINT"),i.CLEARCOAT&&t.addFallback(e++,"CLEARCOAT"),e},h.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},h.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},h.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},h.prototype.copyTo=function(i){s.a.Clone(function(){return i},this)},h.prototype.serialize=function(){return s.a.Serialize(this)},h.prototype.parse=function(i,t,e){var n=this;s.a.Parse(function(){return n},i,t,e)},h._DefaultIndexOfRefraction=1.5,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)()],h.prototype,"intensity",void 0),Object(f.c)([Object(s.c)()],h.prototype,"roughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"texture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"textureRoughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"remapF0OnInterfaceChange",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"bumpTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"isTintEnabled",void 0),Object(f.c)([Object(s.e)()],h.prototype,"tintColor",void 0),Object(f.c)([Object(s.c)()],h.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(s.c)()],h.prototype,"tintThickness",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],h.prototype,"tintTexture",void 0),h}()},627:function(Z,H,o){"use strict";var f=o(435),s="subSurfaceScatteringFunctions",P=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;f.a.IncludesShadersStore[s]=P;var v={name:s,shader:P}},644:function(Z,H,o){"use strict";var f=o(435),s=o(524),P=o(457),v=o(525),c="imageProcessingPixelShader",E=`
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
}`;f.a.ShadersStore[c]=E;var h={name:c,shader:E}},646:function(Z,H,o){"use strict";var f=o(435),s="glowMapMergePixelShader",P=`
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
}`;f.a.ShadersStore[s]=P;var v={name:s,shader:P}},647:function(Z,H,o){"use strict";var f=o(435),s="glowMapMergeVertexShader",P=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[s]=P;var v={name:s,shader:P}},649:function(Z,H,o){"use strict";o.d(H,"a",function(){return c});var f=o(449),s=o(452),P=o(598),v=o(440);Object.defineProperty(f.a.prototype,"prePassRenderer",{get:function(){return this._prePassRenderer},set:function(E){E&&E.isSupported&&(this._prePassRenderer=E)},enumerable:!0,configurable:!0}),f.a.prototype.enablePrePassRenderer=function(){return this._prePassRenderer?this._prePassRenderer:(this._prePassRenderer=new P.a(this),this._prePassRenderer.isSupported||(this._prePassRenderer=null,v.a.Error(`PrePassRenderer needs WebGL 2 support.
Maybe you tried to use the following features that need the PrePassRenderer :
 + Subsurface Scattering`)),this._prePassRenderer)},f.a.prototype.disablePrePassRenderer=function(){!this._prePassRenderer||(this._prePassRenderer.dispose(),this._prePassRenderer=null)};var c=function(){function E(h){this.name=s.a.NAME_PREPASSRENDERER,this.scene=h}return E.prototype.register=function(){this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_PREPASS,this,this._beforeCameraDraw),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterCameraDraw),this.scene._beforeRenderTargetDrawStage.registerStep(s.a.STEP_BEFORERENDERTARGETDRAW_PREPASS,this,this._beforeRenderTargetDraw),this.scene._afterRenderTargetDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterRenderTargetDraw),this.scene._beforeClearStage.registerStep(s.a.STEP_BEFORECLEARSTAGE_PREPASS,this,this._beforeClearStage),this.scene._beforeRenderTargetClearStage.registerStep(s.a.STEP_BEFORERENDERTARGETCLEARSTAGE_PREPASS,this,this._beforeRenderTargetClearStage),this.scene._beforeRenderingMeshStage.registerStep(s.a.STEP_BEFORERENDERINGMESH_PREPASS,this,this._beforeRenderingMeshStage),this.scene._afterRenderingMeshStage.registerStep(s.a.STEP_AFTERRENDERINGMESH_PREPASS,this,this._afterRenderingMeshStage)},E.prototype._beforeRenderTargetDraw=function(h,i,t){this.scene.prePassRenderer&&(h._prePassRenderTarget||(h._prePassRenderTarget=this.scene.prePassRenderer._createRenderTarget(h.name+"_prePassRTT",h)),this.scene.prePassRenderer._setRenderTarget(h._prePassRenderTarget),this.scene.prePassRenderer._beforeDraw(void 0,i,t))},E.prototype._afterRenderTargetDraw=function(h,i,t){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw(i,t)},E.prototype._beforeRenderTargetClearStage=function(h,i,t){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(h._prePassRenderTarget),this.scene.prePassRenderer._clear())},E.prototype._beforeCameraDraw=function(h){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._beforeDraw(h))},E.prototype._afterCameraDraw=function(h){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw()},E.prototype._beforeClearStage=function(){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._clear())},E.prototype._beforeRenderingMeshStage=function(h,i,t,e){if(!!e){var n=h.getScene();n.prePassRenderer&&n.prePassRenderer.bindAttachmentsForEffect(e,i)}},E.prototype._afterRenderingMeshStage=function(h){var i=h.getScene();i.prePassRenderer&&i.prePassRenderer.restoreAttachments()},E.prototype.rebuild=function(){this.scene.disablePrePassRenderer(),this.scene.enablePrePassRenderer()},E.prototype.dispose=function(){this.scene.disablePrePassRenderer()},E}();P.a._SceneComponentInitialization=function(E){var h=E._getComponent(s.a.NAME_PREPASSRENDERER);h||(h=new c(E),E._addComponent(h))}}}]);
