(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[51],{31:function(Q,U,u){"use strict";u.r(U);var l=u(445),o=u(449),S=u(498),E=u(475),T=u(441),R=u(506),d=u(648),e=u(649),i=u(555),n=u(549),t=(h,v,p)=>new Promise((m,C)=>{var _=N=>{try{M(p.next(N))}catch(L){C(L)}},D=N=>{try{M(p.throw(N))}catch(L){C(L)}},M=N=>N.done?m(N.value):Promise.resolve(N.value).then(_,D);M((p=p.apply(h,v)).next())});const a={animate:!0,context:Object(n.a)()},s=h=>t(void 0,[h],function*({canvas:v,width:p,height:m}){const C=new l.a(v,!0,{preserveDrawingBuffer:!0,stencil:!0}),_=new o.a(C);_.clearColor=T.a.FromHexString("#10161A");const D=-Math.PI/2,M=Math.PI/2,N=new R.a("camera",D,M,2,new E.z(0,0,0),_);N.minZ=.1,N.fov=1.2;const L=new S.a("hemiLight",new E.z(-.25,1,0),_);L.diffuse=new T.a(1,1,1),L.groundColor=new T.a(.75,.75,.75),L.specular=new T.a(.25,.25,.25);const B=Array(6).fill(0).map((b,re)=>{const ae=new T.a;return T.a.HSVtoRGBToRef(360/6*re,.75,1,ae),ae}),P=d.a.CreateBox("box",{faceColors:B},_),G=d.a.CreateBox("box",{faceColors:B},_);G.position.x=-1.5;const y=d.a.CreateBox("box",{faceColors:B},_);y.position.x=1.5;function K(b,re=.005){let ae=!1,le,ce;function De(se,ue,w){const O=E.k.RotationAxis(ue.normalize(),w);se.bakeTransformIntoVertices(O)}function Ee(se,ue){b.rMatrix=b.rMatrix||E.k.Identity();const w=E.k.RotationAxis(se.normalize(),ue);b.rMatrix.multiplyToRef(w,b.rMatrix),b.rotationQuaternion=E.r.FromRotationMatrix(b.rMatrix)}const ve=se=>{ae=!0,le=se.clientX,ce=se.clientY},pe=se=>{if(ae){const ue=(le-se.clientX)*re,w=(ce-se.clientY)*re;le=se.clientX,ce=se.clientY,Ee(new E.z(0,1,0),ue),Ee(new E.z(1,0,0),w)}},he=se=>{ae=!1};return v.addEventListener("pointerdown",ve),v.addEventListener("pointermove",pe),v.addEventListener("pointerup",he),v.addEventListener("pointerleave",he),{dispose:()=>{v.removeEventListener("pointerdown",ve),v.removeEventListener("pointermove",pe),v.removeEventListener("pointerup",he),v.removeEventListener("pointerleave",he)}}}return K(P),{render({time:b,width:re,height:ae,frame:le,deltaTime:ce}){_.render()},resize({pixelRatio:b,width:re,height:ae}){C.resize()},unload(){C.dispose()}}});U.default={sketch:s,settings:a}},444:function(Q,U,u){"use strict";u.d(U,"a",function(){return n});var l=u(434),o=u(490),S=u(438),E=u(436),T=u(534),R=u(445),d=u(500),e=u(439),i=u(437),n=function(){function t(a,s,h,v,p,m,C,_,D,M,N,L,B,P,G){C===void 0&&(C=1),M===void 0&&(M=null),N===void 0&&(N=0),L===void 0&&(L="postprocess"),P===void 0&&(P=!1),G===void 0&&(G=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new o.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new E.d(1,1),this._texelSize=E.d.Zero(),this.onActivateObservable=new S.c,this.onSizeChangedObservable=new S.c,this.onApplyObservable=new S.c,this.onBeforeRenderObservable=new S.c,this.onAfterRenderObservable=new S.c,this.name=a,m!=null?(this._camera=m,this._scene=m.getScene(),m.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):_&&(this._engine=_,this._engine.postProcesses.push(this)),this._options=p,this.renderTargetSamplingMode=C||1,this._reusable=D||!1,this._textureType=N,this._textureFormat=G,this._samplers=v||[],this._samplers.push("textureSampler"),this._fragmentUrl=s,this._vertexUrl=L,this._parameters=h||[],this._parameters.push("scale"),this._indexParameters=B,P||this.updateEffect(M)}return Object.defineProperty(t.prototype,"samples",{get:function(){return this._samples},set:function(a){var s=this;this._samples=Math.min(a,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(h){h.samples!==s._samples&&s._engine.updateRenderTargetTextureSampleCount(h,s._samples)})},enumerable:!1,configurable:!0}),t.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(t.prototype,"onActivate",{set:function(a){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),a&&(this._onActivateObserver=this.onActivateObservable.add(a))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onSizeChanged",{set:function(a){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onApply",{set:function(a){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBeforeRender",{set:function(a){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onAfterRender",{set:function(a){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(a)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(a){this._forcedOutputTexture=a},enumerable:!1,configurable:!0}),t.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},t.prototype.getCamera=function(){return this._camera},Object.defineProperty(t.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"PostProcess"},t.prototype.getEngine=function(){return this._engine},t.prototype.getEffect=function(){return this._effect},t.prototype.shareOutputWith=function(a){return this._disposeTextures(),this._shareOutputWithPostProcess=a,this},t.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new o.a(2)),this._shareOutputWithPostProcess=null},t.prototype.updateEffect=function(a,s,h,v,p,m,C,_){a===void 0&&(a=null),s===void 0&&(s=null),h===void 0&&(h=null),this._postProcessDefines=a,this._effect=this._engine.createEffect({vertex:C!=null?C:this._vertexUrl,fragment:_!=null?_:this._fragmentUrl},["position"],s||this._parameters,h||this._samplers,a!==null?a:"",void 0,p,m,v||this._indexParameters)},t.prototype.isReusable=function(){return this._reusable},t.prototype.markTextureDirty=function(){this.width=-1},t.prototype._createRenderTargetTexture=function(a,s,h){h===void 0&&(h=0);for(var v=0;v<this._textureCache.length;v++)if(this._textureCache[v].texture.width===a.width&&this._textureCache[v].texture.height===a.height&&this._textureCache[v].postProcessChannel===h)return this._textureCache[v].texture;var p=this._engine.createRenderTargetTexture(a,s);return this._textureCache.push({texture:p,postProcessChannel:h,lastUsedRenderId:-1}),p},t.prototype._flushTextureCache=function(){for(var a=this._renderId,s=this._textureCache.length-1;s>=0;s--)if(a-this._textureCache[s].lastUsedRenderId>100){for(var h=!1,v=0;v<this._textures.length;v++)if(this._textures.data[v]===this._textureCache[s].texture){h=!0;break}h||(this._engine._releaseTexture(this._textureCache[s].texture),this._textureCache.splice(s,1))}},t.prototype._resize=function(a,s,h,v,p){this._textures.length>0&&this._textures.reset(),this.width=a,this.height=s;var m={width:this.width,height:this.height},C={generateMipMaps:v,generateDepthBuffer:p||h._postProcesses.indexOf(this)===0,generateStencilBuffer:(p||h._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(m,C,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(m,C,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},t.prototype.activate=function(a,s,h){var v=this;s===void 0&&(s=null),a=a||this._camera;var p=a.getScene(),m=p.getEngine(),C=m.getCaps().maxTextureSize,_=(s?s.width:this._engine.getRenderWidth(!0))*this._options|0,D=(s?s.height:this._engine.getRenderHeight(!0))*this._options|0,M=a.parent;M&&(M.leftCamera==a||M.rightCamera==a)&&(_/=2);var N=this._options.width||_,L=this._options.height||D,B=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var P=m.currentViewport;P&&(N*=P.width,L*=P.height)}(B||this.alwaysForcePOT)&&(this._options.width||(N=m.needPOTTextures?R.a.GetExponentOfTwo(N,C,this.scaleMode):N),this._options.height||(L=m.needPOTTextures?R.a.GetExponentOfTwo(L,C,this.scaleMode):L)),(this.width!==N||this.height!==L)&&this._resize(N,L,a,B,h),this._textures.forEach(function(b){b.samples!==v.samples&&v._engine.updateRenderTargetTextureSampleCount(b,v.samples)}),this._flushTextureCache(),this._renderId++}var G;if(this._shareOutputWithPostProcess)G=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)G=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{G=this.inputTexture;for(var y=void 0,K=0;K<this._textureCache.length;K++)if(this._textureCache[K].texture===G){y=this._textureCache[K];break}y&&(y.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(_/N,D/L),this._engine.bindFramebuffer(G,0,_,D,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(G,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(a),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:p.clearColor,p._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),G},Object.defineProperty(t.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),t.prototype.isReady=function(){return this._effect&&this._effect.isReady()},t.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var a;return this._shareOutputWithPostProcess?a=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?a=this._forcedOutputTexture:a=this.inputTexture,this._effect._bindTexture("textureSampler",a),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},t.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},t.prototype._disposeTextureCache=function(){for(var a=this._textureCache.length-1;a>=0;a--)this._engine._releaseTexture(this._textureCache[a].texture);this._textureCache.length=0},t.prototype.setPrePassRenderer=function(a){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=a.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},t.prototype.dispose=function(a){a=a||this._camera,this._disposeTextures();var s;if(this._scene&&(s=this._scene.postProcesses.indexOf(this),s!==-1&&this._scene.postProcesses.splice(s,1)),s=this._engine.postProcesses.indexOf(this),s!==-1&&this._engine.postProcesses.splice(s,1),!!a){if(a.detachPostProcess(this),s=a._postProcesses.indexOf(this),s===0&&a._postProcesses.length>0){var h=this._camera._getFirstPostProcess();h&&h.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},t.prototype.serialize=function(){var a=e.a.Serialize(this),s=this.getCamera()||this._scene&&this._scene.activeCamera;return a.customType="BABYLON."+this.getClassName(),a.cameraId=s?s.id:null,a.reusable=this._reusable,a.textureType=this._textureType,a.fragmentUrl=this._fragmentUrl,a.parameters=this._parameters,a.samplers=this._samplers,a.options=this._options,a.defines=this._postProcessDefines,a.textureFormat=this._textureFormat,a.vertexUrl=this._vertexUrl,a.indexParameters=this._indexParameters,a},t.prototype.clone=function(){var a=this.serialize();a._engine=this._engine,a.cameraId=null;var s=t.Parse(a,this._scene,"");return s?(s.onActivateObservable=this.onActivateObservable.clone(),s.onSizeChangedObservable=this.onSizeChangedObservable.clone(),s.onApplyObservable=this.onApplyObservable.clone(),s.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),s.onAfterRenderObservable=this.onAfterRenderObservable.clone(),s._prePassEffectConfiguration=this._prePassEffectConfiguration,s):null},t.Parse=function(a,s,h){var v=i.a.GetClass(a.customType);if(!v||!v._Parse)return null;var p=s?s.getCameraByID(a.cameraId):null;return v._Parse(a,p,s,h)},t._Parse=function(a,s,h,v){return e.a.Parse(function(){return new t(a.name,a.fragmentUrl,a.parameters,a.samplers,a.options,s,a.renderTargetSamplingMode,a._engine,a.reusable,a.defines,a.textureType,a.vertexUrl,a.indexParameters,!1,a.textureFormat)},a,h,v)},Object(l.c)([Object(e.c)()],t.prototype,"uniqueId",void 0),Object(l.c)([Object(e.c)()],t.prototype,"name",void 0),Object(l.c)([Object(e.c)()],t.prototype,"width",void 0),Object(l.c)([Object(e.c)()],t.prototype,"height",void 0),Object(l.c)([Object(e.c)()],t.prototype,"renderTargetSamplingMode",void 0),Object(l.c)([Object(e.f)()],t.prototype,"clearColor",void 0),Object(l.c)([Object(e.c)()],t.prototype,"autoClear",void 0),Object(l.c)([Object(e.c)()],t.prototype,"alphaMode",void 0),Object(l.c)([Object(e.c)()],t.prototype,"alphaConstants",void 0),Object(l.c)([Object(e.c)()],t.prototype,"enablePixelPerfectMode",void 0),Object(l.c)([Object(e.c)()],t.prototype,"forceFullscreenViewport",void 0),Object(l.c)([Object(e.c)()],t.prototype,"scaleMode",void 0),Object(l.c)([Object(e.c)()],t.prototype,"alwaysForcePOT",void 0),Object(l.c)([Object(e.c)("samples")],t.prototype,"_samples",void 0),Object(l.c)([Object(e.c)()],t.prototype,"adaptScaleToCurrentViewport",void 0),t}();i.a.RegisteredTypes["BABYLON.PostProcess"]=n},458:function(Q,U,u){"use strict";u.d(U,"a",function(){return t});var l=u(434),o=u(438),S=u(443),E=u(436),T=u(442),R=u(590),d=u(591),e=u(500),i=u(522),n=u(445),t=function(a){Object(l.d)(s,a);function s(h,v,p,m,C,_,D,M,N,L,B,P,G,y){C===void 0&&(C=!0),_===void 0&&(_=0),D===void 0&&(D=!1),M===void 0&&(M=T.a.TRILINEAR_SAMPLINGMODE),N===void 0&&(N=!0),L===void 0&&(L=!1),B===void 0&&(B=!1),P===void 0&&(P=5),G===void 0&&(G=!1);var K,b=a.call(this,null,p,!m,void 0,M,void 0,void 0,void 0,void 0,P)||this;return b.renderParticles=!0,b.renderSprites=!1,b.ignoreCameraViewport=!1,b.onBeforeBindObservable=new o.c,b.onAfterUnbindObservable=new o.c,b.onBeforeRenderObservable=new o.c,b.onAfterRenderObservable=new o.c,b.onClearObservable=new o.c,b.onResizeObservable=new o.c,b._currentRefreshId=-1,b._refreshRate=1,b._samples=1,b.boundingBoxPosition=E.e.Zero(),p=b.getScene(),!p||(b._coordinatesMode=T.a.PROJECTION_MODE,b.renderList=new Array,b.name=h,b.isRenderTarget=!0,b._initialSizeParameter=v,b._processSizeParameter(v),b._resizeObserver=b.getScene().getEngine().onResizeObservable.add(function(){}),b._generateMipMaps=!!m,b._doNotChangeAspectRatio=C,b._renderingManager=new d.b(p),b._renderingManager._useSceneAutoClearSetup=!0,B)||(b._renderTargetOptions={generateMipMaps:m,type:_,format:(K=b._format)!==null&&K!==void 0?K:void 0,samplingMode:b.samplingMode,generateDepthBuffer:N,generateStencilBuffer:L,samples:y},b.samplingMode===T.a.NEAREST_SAMPLINGMODE&&(b.wrapU=T.a.CLAMP_ADDRESSMODE,b.wrapV=T.a.CLAMP_ADDRESSMODE),G||(D?(b._texture=p.getEngine().createRenderTargetCubeTexture(b.getRenderSize(),b._renderTargetOptions),b.coordinatesMode=T.a.INVCUBIC_MODE,b._textureMatrix=E.a.Identity()):b._texture=p.getEngine().createRenderTargetTexture(b._size,b._renderTargetOptions),y!==void 0&&(b.samples=y))),b}return Object.defineProperty(s.prototype,"renderList",{get:function(){return this._renderList},set:function(h){this._renderList=h,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),s.prototype._hookArray=function(h){var v=this,p=h.push;h.push=function(){for(var C=[],_=0;_<arguments.length;_++)C[_]=arguments[_];var D=h.length===0,M=p.apply(h,C);return D&&v.getScene()&&v.getScene().meshes.forEach(function(N){N._markSubMeshesAsLightDirty()}),M};var m=h.splice;h.splice=function(C,_){var D=m.apply(h,[C,_]);return h.length===0&&v.getScene().meshes.forEach(function(M){M._markSubMeshesAsLightDirty()}),D}},Object.defineProperty(s.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onAfterUnbind",{set:function(h){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(h)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onBeforeRender",{set:function(h){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(h)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onAfterRender",{set:function(h){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(h)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onClear",{set:function(h){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(h)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),s.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(s.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(h){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(h))){this._boundingBoxSize=h;var v=this.getScene();v&&v.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"depthStencilTexture",{get:function(){var h;return((h=this.getInternalTexture())===null||h===void 0?void 0:h._depthStencilTexture)||null},enumerable:!1,configurable:!0}),s.prototype.createDepthStencilTexture=function(h,v,p,m){var C;h===void 0&&(h=0),v===void 0&&(v=!0),p===void 0&&(p=!1),m===void 0&&(m=1);var _=this.getInternalTexture();if(!(!this.getScene()||!_)){(C=_._depthStencilTexture)===null||C===void 0||C.dispose();var D=this.getScene().getEngine();_._depthStencilTexture=D.createDepthStencilTexture(this._size,{bilinearFiltering:v,comparisonFunction:h,generateStencil:p,isCube:this.isCube,samples:m})}},s.prototype._processSizeParameter=function(h){if(h.ratio){this._sizeRatio=h.ratio;var v=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(v.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(v.getRenderHeight(),this._sizeRatio)}}else this._size=h},Object.defineProperty(s.prototype,"samples",{get:function(){return this._samples},set:function(h){if(this._samples!==h){var v=this.getScene();!v||(this._samples=v.getEngine().updateRenderTargetTextureSampleCount(this._texture,h))}},enumerable:!1,configurable:!0}),s.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(s.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(h){this._refreshRate=h,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),s.prototype.addPostProcess=function(h){if(!this._postProcessManager){var v=this.getScene();if(!v)return;this._postProcessManager=new R.a(v),this._postProcesses=new Array}this._postProcesses.push(h),this._postProcesses[0].autoClear=!1},s.prototype.clearPostProcesses=function(h){if(h===void 0&&(h=!1),!!this._postProcesses){if(h)for(var v=0,p=this._postProcesses;v<p.length;v++){var m=p[v];m.dispose()}this._postProcesses=[]}},s.prototype.removePostProcess=function(h){if(!!this._postProcesses){var v=this._postProcesses.indexOf(h);v!==-1&&(this._postProcesses.splice(v,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},s.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},s.prototype.getRenderSize=function(){return this.getRenderWidth()},s.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},s.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},s.prototype.getRenderLayers=function(){var h=this._size.layers;return h||0},Object.defineProperty(s.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),s.prototype.scale=function(h){var v=Math.max(1,this.getRenderSize()*h);this.resize(v)},s.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:a.prototype.getReflectionTextureMatrix.call(this)},s.prototype.resize=function(h){var v=this.isCube;this.releaseInternalTexture();var p=this.getScene();!p||(this._processSizeParameter(h),v?this._texture=p.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=p.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},s.prototype.render=function(h,v){h===void 0&&(h=!1),v===void 0&&(v=!1);var p=this.getScene();if(!!p){var m=p.getEngine();if(this.useCameraPostProcesses!==void 0&&(h=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var C=0;C<this._waitingRenderList.length;C++){var _=this._waitingRenderList[C],D=p.getMeshByID(_);D&&this.renderList.push(D)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var p=this.getScene();if(!p)return;for(var M=p.meshes,C=0;C<M.length;C++){var N=M[C];this.renderListPredicate(N)&&this.renderList.push(N)}}this.onBeforeBindObservable.notifyObservers(this);var L;if(this.activeCamera?(L=this.activeCamera,m.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==p.activeCamera&&p.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(L=p.activeCamera,L&&m.setViewport(L.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var B=0;B<this.getRenderLayers();B++)this.renderToTarget(0,h,v,B,L),p.incrementRenderId(),p.resetCachedMaterial();else if(this.isCube)for(var P=0;P<6;P++)this.renderToTarget(P,h,v,void 0,L),p.incrementRenderId(),p.resetCachedMaterial();else this.renderToTarget(0,h,v,void 0,L);this.onAfterUnbindObservable.notifyObservers(this),p.activeCamera&&((p.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==p.activeCamera)&&p.setTransformMatrix(p.activeCamera.getViewMatrix(),p.activeCamera.getProjectionMatrix(!0)),m.setViewport(p.activeCamera.viewport)),p.resetCachedMaterial()}},s.prototype._bestReflectionRenderTargetDimension=function(h,v){var p=128,m=h*v,C=n.a.NearestPOT(m+p*p/(p+m));return Math.min(n.a.FloorPOT(h),C)},s.prototype._prepareRenderingManager=function(h,v,p,m){var C=this.getScene();if(!!C){this._renderingManager.reset();for(var _=C.getRenderId(),D=0;D<v;D++){var M=h[D];if(M&&!M.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(M,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!M.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!M._internalAbstractMeshDataInfo._currentLODIsUpToDate&&C.activeCamera&&(M._internalAbstractMeshDataInfo._currentLOD=C.customLODSelector?C.customLODSelector(M,C.activeCamera):M.getLOD(C.activeCamera),M._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!M._internalAbstractMeshDataInfo._currentLOD)continue;var N=M._internalAbstractMeshDataInfo._currentLOD;N._preActivateForIntermediateRendering(_);var L=void 0;if(m&&p?L=(M.layerMask&p.layerMask)==0:L=!1,M.isEnabled()&&M.isVisible&&M.subMeshes&&!L&&(N!==M&&N._activate(_,!0),M._activate(_,!0)&&M.subMeshes.length)){M.isAnInstance?M._internalAbstractMeshDataInfo._actAsRegularMesh&&(N=M):N._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,N._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var B=0;B<N.subMeshes.length;B++){var P=N.subMeshes[B];this._renderingManager.dispatch(P,N)}}}}for(var G=0;G<C.particleSystems.length;G++){var y=C.particleSystems[G],K=y.emitter;!y.isStarted()||!K||!K.position||!K.isEnabled()||h.indexOf(K)>=0&&this._renderingManager.dispatchParticles(y)}}},s.prototype._bindFrameBuffer=function(h,v){h===void 0&&(h=0),v===void 0&&(v=0);var p=this.getScene();if(!!p){var m=p.getEngine();this._texture&&m.bindFramebuffer(this._texture,this.isCube?h:void 0,void 0,void 0,this.ignoreCameraViewport,0,v)}},s.prototype.unbindFrameBuffer=function(h,v){var p=this;!this._texture||h.unBindFramebuffer(this._texture,this.isCube,function(){p.onAfterRenderObservable.notifyObservers(v)})},s.prototype._prepareFrame=function(h,v,p,m){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!m||!h.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(v,p)},s.prototype.renderToTarget=function(h,v,p,m,C){m===void 0&&(m=0),C===void 0&&(C=null);var _=this.getScene();if(!!_){var D=_.getEngine();if(!!this._texture){D._debugPushGroup("render to face #"+h+" layer #"+m,1),this._prepareFrame(_,h,m,v),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(m):this.onBeforeRenderObservable.notifyObservers(h);var M=null,N=this.renderList?this.renderList:_.getActiveMeshes().data,L=this.renderList?this.renderList.length:_.getActiveMeshes().length;this.getCustomRenderList&&(M=this.getCustomRenderList(this.is2DArray?m:h,N,L)),M?this._prepareRenderingManager(M,M.length,C,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(N,L,C,!this.renderList),this._defaultRenderListPrepared=!0),M=N);for(var B=0,P=_._beforeRenderTargetClearStage;B<P.length;B++){var G=P[B];G.action(this,h,m)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(D):D.clear(this.clearColor||_.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||_.updateTransformMatrix(!0);for(var y=0,K=_._beforeRenderTargetDrawStage;y<K.length;y++){var G=K[y];G.action(this,h,m)}this._renderingManager.render(this.customRenderFunction,M,this.renderParticles,this.renderSprites);for(var b=0,re=_._afterRenderTargetDrawStage;b<re.length;b++){var G=re[b];G.action(this,h,m)}var ae=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,h,this._postProcesses,this.ignoreCameraViewport):v&&_.postProcessManager._finalizeFrame(!1,this._texture,h),this._texture.generateMipMaps=ae,this._doNotChangeAspectRatio||_.updateTransformMatrix(!0),p&&S.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),D),this.unbindFrameBuffer(D,h),this.isCube&&h===5&&D.generateMipMapsForCubemap(this._texture),D._debugPopGroup(1)}}},s.prototype.setRenderingOrder=function(h,v,p,m){v===void 0&&(v=null),p===void 0&&(p=null),m===void 0&&(m=null),this._renderingManager.setRenderingOrder(h,v,p,m)},s.prototype.setRenderingAutoClearDepthStencil=function(h,v){this._renderingManager.setRenderingAutoClearDepthStencil(h,v),this._renderingManager._useSceneAutoClearSetup=!1},s.prototype.clone=function(){var h=this.getSize(),v=new s(this.name,h,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return v.hasAlpha=this.hasAlpha,v.level=this.level,v.coordinatesMode=this.coordinatesMode,this.renderList&&(v.renderList=this.renderList.slice(0)),v},s.prototype.serialize=function(){if(!this.name)return null;var h=a.prototype.serialize.call(this);if(h.renderTargetSize=this.getRenderSize(),h.renderList=[],this.renderList)for(var v=0;v<this.renderList.length;v++)h.renderList.push(this.renderList[v].id);return h},s.prototype.disposeFramebufferObjects=function(){var h=this.getInternalTexture(),v=this.getScene();h&&v&&v.getEngine()._releaseFramebufferObjects(h)},s.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var h=this.getScene();if(!!h){var v=h.customRenderTargets.indexOf(this);v>=0&&h.customRenderTargets.splice(v,1);for(var p=0,m=h.cameras;p<m.length;p++){var C=m[p];v=C.customRenderTargets.indexOf(this),v>=0&&C.customRenderTargets.splice(v,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),a.prototype.dispose.call(this)}},s.prototype._rebuild=function(){this.refreshRate===s.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=s.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},s.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},s.prototype.getViewCount=function(){return 1},s.REFRESHRATE_RENDER_ONCE=0,s.REFRESHRATE_RENDER_ONEVERYFRAME=1,s.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,s}(T.a);T.a._CreateRenderTargetTexture=function(a,s,h,v){return new t(a,s,h,v)}},486:function(Q,U,u){"use strict";u.d(U,"b",function(){return s}),u.d(U,"a",function(){return h});var l=u(434),o=u(444),S=u(445),E=u(435),T="passPixelShader",R=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;E.a.ShadersStore[T]=R;var d={name:T,shader:R},e="passCubePixelShader",i=`
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
}`;E.a.ShadersStore[e]=i;var n={name:e,shader:i},t=u(437),a=u(439),s=function(v){Object(l.d)(p,v);function p(m,C,_,D,M,N,L,B){return _===void 0&&(_=null),L===void 0&&(L=0),B===void 0&&(B=!1),v.call(this,m,"pass",null,null,C,_,D,M,N,void 0,L,void 0,null,B)||this}return p.prototype.getClassName=function(){return"PassPostProcess"},p._Parse=function(m,C,_,D){return a.a.Parse(function(){return new p(m.name,m.options,C,m.renderTargetSamplingMode,m._engine,m.reusable)},m,_,D)},p}(o.a);t.a.RegisteredTypes["BABYLON.PassPostProcess"]=s;var h=function(v){Object(l.d)(p,v);function p(m,C,_,D,M,N,L,B){_===void 0&&(_=null),L===void 0&&(L=0),B===void 0&&(B=!1);var P=v.call(this,m,"passCube",null,null,C,_,D,M,N,"#define POSITIVEX",L,void 0,null,B)||this;return P._face=0,P}return Object.defineProperty(p.prototype,"face",{get:function(){return this._face},set:function(m){if(!(m<0||m>5))switch(this._face=m,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),p.prototype.getClassName=function(){return"PassCubePostProcess"},p._Parse=function(m,C,_,D){return a.a.Parse(function(){return new p(m.name,m.options,C,m.renderTargetSamplingMode,m._engine,m.reusable)},m,_,D)},p}(o.a);S.a._RescalePostProcessFactory=function(v){return new s("rescale",1,null,2,v,!1,0)}},498:function(Q,U,u){"use strict";u.d(U,"a",function(){return d});var l=u(434),o=u(439),S=u(436),E=u(441),T=u(453),R=u(484);T.a.AddNodeConstructor("Light_Type_3",function(e,i){return function(){return new d(e,S.e.Zero(),i)}});var d=function(e){Object(l.d)(i,e);function i(n,t,a){var s=e.call(this,n,a)||this;return s.groundColor=new E.a(0,0,0),s.direction=t||S.e.Up(),s}return i.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},i.prototype.getClassName=function(){return"HemisphericLight"},i.prototype.setDirectionToTarget=function(n){return this.direction=S.e.Normalize(n.subtract(S.e.Zero())),this.direction},i.prototype.getShadowGenerator=function(){return null},i.prototype.transferToEffect=function(n,t){var a=S.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",a.x,a.y,a.z,0,t),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),t),this},i.prototype.transferToNodeMaterialEffect=function(n,t){var a=S.e.Normalize(this.direction);return n.setFloat3(t,a.x,a.y,a.z),this},i.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=S.a.Identity()),this._worldMatrix},i.prototype.getTypeID=function(){return R.a.LIGHTTYPEID_HEMISPHERICLIGHT},i.prototype.prepareLightSpecificDefines=function(n,t){n["HEMILIGHT"+t]=!0},Object(l.c)([Object(o.e)()],i.prototype,"groundColor",void 0),Object(l.c)([Object(o.o)()],i.prototype,"direction",void 0),i}(R.a)},500:function(Q,U,u){"use strict";var l=u(434),o=u(456),S=u(440),E=u(595),T=u(467);T.a.prototype.createRenderTargetTexture=function(R,d){var e=new E.a;d!==void 0&&typeof d=="object"?(e.generateMipMaps=d.generateMipMaps,e.generateDepthBuffer=!!d.generateDepthBuffer,e.generateStencilBuffer=!!d.generateStencilBuffer,e.type=d.type===void 0?0:d.type,e.samplingMode=d.samplingMode===void 0?3:d.samplingMode,e.format=d.format===void 0?5:d.format):(e.generateMipMaps=d,e.generateDepthBuffer=!0,e.generateStencilBuffer=!1,e.type=0,e.samplingMode=3,e.format=5),(e.type===1&&!this._caps.textureFloatLinearFiltering||e.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(e.samplingMode=1),e.type===1&&!this._caps.textureFloat&&(e.type=0,S.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var i=this._gl,n=new o.a(this,o.b.RenderTarget),t=R.width||R,a=R.height||R,s=R.layers||0,h=this._getSamplingParameters(e.samplingMode,!!e.generateMipMaps),v=s!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,p=this._getRGBABufferInternalSizedFormat(e.type,e.format),m=this._getInternalFormat(e.format),C=this._getWebGLTextureType(e.type);this._bindTextureDirectly(v,n),s!==0?(n.is2DArray=!0,i.texImage3D(v,0,p,t,a,s,0,m,C,null)):i.texImage2D(v,0,p,t,a,0,m,C,null),i.texParameteri(v,i.TEXTURE_MAG_FILTER,h.mag),i.texParameteri(v,i.TEXTURE_MIN_FILTER,h.min),i.texParameteri(v,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(v,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),e.generateMipMaps&&this._gl.generateMipmap(v),this._bindTextureDirectly(v,null);var _=this._currentFramebuffer,D=i.createFramebuffer();return this._bindUnboundFramebuffer(D),n._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!e.generateStencilBuffer,e.generateDepthBuffer,t,a),n.is2DArray||i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,n._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(_),n._framebuffer=D,n.baseWidth=t,n.baseHeight=a,n.width=t,n.height=a,n.depth=s,n.isReady=!0,n.samples=1,n.generateMipMaps=!!e.generateMipMaps,n.samplingMode=e.samplingMode,n.type=e.type,n.format=e.format,n._generateDepthBuffer=e.generateDepthBuffer,n._generateStencilBuffer=!!e.generateStencilBuffer,this._internalTexturesCache.push(n),n},T.a.prototype.createDepthStencilTexture=function(R,d){if(d.isCube){var e=R.width||R;return this._createDepthStencilCubeTexture(e,d)}else return this._createDepthStencilTexture(R,d)},T.a.prototype._createDepthStencilTexture=function(R,d){var e=this._gl,i=R.layers||0,n=i!==0?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,t=new o.a(this,o.b.Depth);if(!this._caps.depthTextureExtension)return S.a.Error("Depth texture is not supported by your browser or hardware."),t;var a=Object(l.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},d);this._bindTextureDirectly(n,t,!0),this._setupDepthStencilTexture(t,R,a.generateStencil,a.bilinearFiltering,a.comparisonFunction);var s=a.generateStencil?e.UNSIGNED_INT_24_8:e.UNSIGNED_INT,h=a.generateStencil?e.DEPTH_STENCIL:e.DEPTH_COMPONENT,v=h;return this.webGLVersion>1&&(v=a.generateStencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24),t.is2DArray?e.texImage3D(n,0,v,t.width,t.height,i,0,h,s,null):e.texImage2D(n,0,v,t.width,t.height,0,h,s,null),this._bindTextureDirectly(n,null),t}},502:function(Q,U,u){"use strict";u.d(U,"a",function(){return ue});var l=u(436),o=u(447),S=u(442),E=u(538),T=u(454),R=u(441),d=u(455),e=u(533),i=u(476),n=u(459),t=u(435),a="mrtFragmentDeclaration",s=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;t.a.IncludesShadersStore[a]=s;var h={name:a,shader:s},v=u(614),p=u(615),m=u(616),C="geometryPixelShader",_=`#extension GL_EXT_draw_buffers : require
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
`;t.a.ShadersStore[C]=_;var D={name:C,shader:_},M=u(487),N=u(496),L=u(497),B=u(501),P="geometryVertexDeclaration",G=`
uniform mat4 viewProjection;
uniform mat4 view;`;t.a.IncludesShadersStore[P]=G;var y={name:P,shader:G},K=u(674),b="geometryUboDeclaration",re="#include<sceneUboDeclaration>";t.a.IncludesShadersStore[b]=re;var ae={name:b,shader:re},le=u(507),ce=u(508),De=u(488),Ee=u(489),ve=u(675),pe="geometryVertexShader",he=`precision highp float;
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
`;t.a.ShadersStore[pe]=he;var se={name:pe,shader:he},ue=function(){function w(O,q){q===void 0&&(q=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=O,this._ratio=q,this._useUbo=O.getEngine().supportsUniformBuffers,w._SceneComponentInitialization(this._scene),this._createRenderTargets()}return w.prototype._linkPrePassRenderer=function(O){this._linkedWithPrePass=!0,this._prePassRenderer=O,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(q){}))},w.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},w.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},w.prototype._forceTextureType=function(O,q){O===w.POSITION_TEXTURE_TYPE?(this._positionIndex=q,this._enablePosition=!0):O===w.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=q,this._enableVelocity=!0):O===w.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=q,this._enableReflectivity=!0):O===w.DEPTH_TEXTURE_TYPE?this._depthIndex=q:O===w.NORMAL_TEXTURE_TYPE&&(this._normalIndex=q)},w.prototype._setAttachments=function(O){this._attachments=O},w.prototype._linkInternalTexture=function(O){this._multiRenderTarget._texture=O},Object.defineProperty(w.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(O){this._multiRenderTarget.renderList=O},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),w.prototype.getTextureIndex=function(O){switch(O){case w.POSITION_TEXTURE_TYPE:return this._positionIndex;case w.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case w.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(w.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(O){this._enablePosition=O,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(O){this._enableVelocity=O,O||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(O){this._enableReflectivity=O,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),w.prototype.isReady=function(O,q){var ee=O.getMaterial();if(ee&&ee.disableDepthWrite)return!1;var W=[],$=[o.b.PositionKind,o.b.NormalKind],Y=O.getMesh();if(ee){var ne=!1;ee.needAlphaTesting()&&ee.getAlphaTestTexture()&&(W.push("#define ALPHATEST"),W.push("#define ALPHATEST_UV"+(ee.getAlphaTestTexture().coordinatesIndex+1)),ne=!0),ee.bumpTexture&&d.a.BumpTextureEnabled&&(W.push("#define BUMP"),W.push("#define BUMP_UV"+(ee.bumpTexture.coordinatesIndex+1)),ne=!0),this._enableReflectivity&&(ee instanceof d.a&&ee.specularTexture?(W.push("#define HAS_SPECULAR"),W.push("#define REFLECTIVITY_UV"+(ee.specularTexture.coordinatesIndex+1)),ne=!0):ee instanceof e.a&&ee.reflectivityTexture&&(W.push("#define HAS_REFLECTIVITY"),W.push("#define REFLECTIVITY_UV"+(ee.reflectivityTexture.coordinatesIndex+1)),ne=!0)),ne&&(W.push("#define NEED_UV"),Y.isVerticesDataPresent(o.b.UVKind)&&($.push(o.b.UVKind),W.push("#define UV1")),Y.isVerticesDataPresent(o.b.UV2Kind)&&($.push(o.b.UV2Kind),W.push("#define UV2")))}this._linkedWithPrePass&&(W.push("#define PREPASS"),this._depthIndex!==-1&&(W.push("#define DEPTH_INDEX "+this._depthIndex),W.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(W.push("#define NORMAL_INDEX "+this._normalIndex),W.push("#define PREPASS_NORMAL"))),this._enablePosition&&(W.push("#define POSITION"),W.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(W.push("#define VELOCITY"),W.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(Y)===-1&&W.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(W.push("#define REFLECTIVITY"),W.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),Y.useBones&&Y.computeBonesUsingShaders?($.push(o.b.MatricesIndicesKind),$.push(o.b.MatricesWeightsKind),Y.numBoneInfluencers>4&&($.push(o.b.MatricesIndicesExtraKind),$.push(o.b.MatricesWeightsExtraKind)),W.push("#define NUM_BONE_INFLUENCERS "+Y.numBoneInfluencers),W.push("#define BonesPerMesh "+(Y.skeleton?Y.skeleton.bones.length+1:0))):W.push("#define NUM_BONE_INFLUENCERS 0");var oe=Y.morphTargetManager,J=0;oe&&oe.numInfluencers>0&&(J=oe.numInfluencers,W.push("#define MORPHTARGETS"),W.push("#define NUM_MORPH_INFLUENCERS "+J),oe.isUsingTextureForTargets&&W.push("#define MORPHTARGETS_TEXTURE"),T.a.PrepareAttributesForMorphTargetsInfluencers($,Y,J)),q&&(W.push("#define INSTANCES"),T.a.PushAttributesForInstances($),O.getRenderingMesh().hasThinInstances&&W.push("#define THIN_INSTANCES")),this._linkedWithPrePass?W.push("#define RENDER_TARGET_COUNT "+this._attachments.length):W.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var k=W.join(`
`);return this._cachedDefines!==k&&(this._cachedDefines=k,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:$,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:k,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:J}},this._scene.getEngine())),this._effect.isReady()},w.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(w.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(O){this._multiRenderTarget.samples=O},enumerable:!1,configurable:!0}),w.prototype.dispose=function(){if(this._resizeObserver){var O=this._scene.getEngine();O.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},w.prototype._assignRenderTargetIndices=function(){var O=2;return this._enablePosition&&(this._positionIndex=O,O++),this._enableVelocity&&(this._velocityIndex=O,O++),this._enableReflectivity&&(this._reflectivityIndex=O,O++),O},w.prototype._createRenderTargets=function(){var O=this,q=this._scene.getEngine(),ee=this._assignRenderTargetIndices();if(this._multiRenderTarget=new E.a("gBuffer",{width:q.getRenderWidth()*this._ratio,height:q.getRenderHeight()*this._ratio},ee,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=S.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=S.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function($){$.clear(new R.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=q.onResizeObservable.add(function(){O._multiRenderTarget&&O._multiRenderTarget.resize({width:q.getRenderWidth()*O._ratio,height:q.getRenderHeight()*O._ratio})});var W=function($){var Y=$.getRenderingMesh(),ne=$.getEffectiveMesh(),oe=O._scene,J=oe.getEngine(),k=$.getMaterial();if(!!k){if(ne._internalAbstractMeshDataInfo._isActiveIntermediate=!1,O._enableVelocity&&!O._previousTransformationMatrices[ne.uniqueId]&&(O._previousTransformationMatrices[ne.uniqueId]={world:l.a.Identity(),viewProjection:oe.getTransformMatrix()},Y.skeleton)){var Ie=Y.skeleton.getTransformMatrices(Y);O._previousBonesTransformationMatrices[Y.uniqueId]=O._copyBonesTransformationMatrices(Ie,new Float32Array(Ie.length))}var Ae=Y._getInstancesRenderList($._id,!!$.getReplacementMesh());if(!Ae.mustReturn){var be=J.getCaps().instancedArrays&&(Ae.visibleInstances[$._id]!==null||Y.hasThinInstances),me=ne.getWorldMatrix();if(O.isReady($,be)){if(J.enableEffect(O._effect),Y._bind($,O._effect,k.fillMode),O._useUbo?(T.a.FinalizeSceneUbo(O._scene),T.a.BindSceneUniformBuffer(O._effect,O._scene.getSceneUniformBuffer())):(O._effect.setMatrix("viewProjection",oe.getTransformMatrix()),O._effect.setMatrix("view",oe.getViewMatrix())),k){var de,Pe=Y._instanceDataStorage;if(!Pe.isFrozen&&(k.backFaceCulling||k.overrideMaterialSideOrientation!==null)){var Ce=ne._getWorldMatrixDeterminant();de=k.overrideMaterialSideOrientation,de==null&&(de=k.sideOrientation),Ce<0&&(de=de===n.a.ClockWiseSideOrientation?n.a.CounterClockWiseSideOrientation:n.a.ClockWiseSideOrientation)}else de=Pe.sideOrientation;if(k._preBind(O._effect,de),k.needAlphaTesting()){var Te=k.getAlphaTestTexture();Te&&(O._effect.setTexture("diffuseSampler",Te),O._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}k.bumpTexture&&oe.getEngine().getCaps().standardDerivatives&&d.a.BumpTextureEnabled&&(O._effect.setFloat3("vBumpInfos",k.bumpTexture.coordinatesIndex,1/k.bumpTexture.level,k.parallaxScaleBias),O._effect.setMatrix("bumpMatrix",k.bumpTexture.getTextureMatrix()),O._effect.setTexture("bumpSampler",k.bumpTexture),O._effect.setFloat2("vTangentSpaceParams",k.invertNormalMapX?-1:1,k.invertNormalMapY?-1:1)),O._enableReflectivity&&(k instanceof d.a&&k.specularTexture?(O._effect.setMatrix("reflectivityMatrix",k.specularTexture.getTextureMatrix()),O._effect.setTexture("reflectivitySampler",k.specularTexture)):k instanceof e.a&&k.reflectivityTexture&&(O._effect.setMatrix("reflectivityMatrix",k.reflectivityTexture.getTextureMatrix()),O._effect.setTexture("reflectivitySampler",k.reflectivityTexture)))}Y.useBones&&Y.computeBonesUsingShaders&&Y.skeleton&&(O._effect.setMatrices("mBones",Y.skeleton.getTransformMatrices(Y)),O._enableVelocity&&O._effect.setMatrices("mPreviousBones",O._previousBonesTransformationMatrices[Y.uniqueId])),T.a.BindMorphTargetParameters(Y,O._effect),Y.morphTargetManager&&Y.morphTargetManager.isUsingTextureForTargets&&Y.morphTargetManager._bind(O._effect),O._enableVelocity&&(O._effect.setMatrix("previousWorld",O._previousTransformationMatrices[ne.uniqueId].world),O._effect.setMatrix("previousViewProjection",O._previousTransformationMatrices[ne.uniqueId].viewProjection)),Y._processRendering(ne,$,O._effect,k.fillMode,Ae,be,function(Nn,_e){return O._effect.setMatrix("world",_e)})}O._enableVelocity&&(O._previousTransformationMatrices[ne.uniqueId].world=me.clone(),O._previousTransformationMatrices[ne.uniqueId].viewProjection=O._scene.getTransformMatrix().clone(),Y.skeleton&&O._copyBonesTransformationMatrices(Y.skeleton.getTransformMatrices(Y),O._previousBonesTransformationMatrices[ne.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function($,Y,ne,oe){var J;if(O._linkedWithPrePass){if(!O._prePassRenderer.enabled)return;O._scene.getEngine().bindAttachments(O._attachments)}if(oe.length){for(q.setColorWrite(!1),J=0;J<oe.length;J++)W(oe.data[J]);q.setColorWrite(!0)}for(J=0;J<$.length;J++)W($.data[J]);for(q.setDepthWrite(!1),J=0;J<Y.length;J++)W(Y.data[J]);if(O.renderTransparentMeshes)for(J=0;J<ne.length;J++)W(ne.data[J]);q.setDepthWrite(!0)}}},w.prototype._copyBonesTransformationMatrices=function(O,q){for(var ee=0;ee<O.length;ee++)q[ee]=O[ee];return q},w.DEPTH_TEXTURE_TYPE=0,w.NORMAL_TEXTURE_TYPE=1,w.POSITION_TEXTURE_TYPE=2,w.VELOCITY_TEXTURE_TYPE=3,w.REFLECTIVITY_TEXTURE_TYPE=4,w._SceneComponentInitialization=function(O){throw i.a.WarnImport("GeometryBufferRendererSceneComponent")},w}()},513:function(Q,U,u){"use strict";u.d(U,"a",function(){return R}),u.d(U,"b",function(){return d});var l=u(436),o=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],S=[function(e){return 1},function(e){return e.y},function(e){return e.z},function(e){return e.x},function(e){return e.x*e.y},function(e){return e.y*e.z},function(e){return 3*e.z*e.z-1},function(e){return e.x*e.z},function(e){return e.x*e.x-e.y*e.y}],E=function(e,i){return o[e]*S[e](i)},T=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],R=function(){function e(){this.preScaled=!1,this.l00=l.e.Zero(),this.l1_1=l.e.Zero(),this.l10=l.e.Zero(),this.l11=l.e.Zero(),this.l2_2=l.e.Zero(),this.l2_1=l.e.Zero(),this.l20=l.e.Zero(),this.l21=l.e.Zero(),this.l22=l.e.Zero()}return e.prototype.addLight=function(i,n,t){var a=new l.e(n.r,n.g,n.b),s=a.scale(t);this.l00=this.l00.add(s.scale(E(0,i))),this.l1_1=this.l1_1.add(s.scale(E(1,i))),this.l10=this.l10.add(s.scale(E(2,i))),this.l11=this.l11.add(s.scale(E(3,i))),this.l2_2=this.l2_2.add(s.scale(E(4,i))),this.l2_1=this.l2_1.add(s.scale(E(5,i))),this.l20=this.l20.add(s.scale(E(6,i))),this.l21=this.l21.add(s.scale(E(7,i))),this.l22=this.l22.add(s.scale(E(8,i)))},e.prototype.scaleInPlace=function(i){this.l00.scaleInPlace(i),this.l1_1.scaleInPlace(i),this.l10.scaleInPlace(i),this.l11.scaleInPlace(i),this.l2_2.scaleInPlace(i),this.l2_1.scaleInPlace(i),this.l20.scaleInPlace(i),this.l21.scaleInPlace(i),this.l22.scaleInPlace(i)},e.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(T[0]),this.l1_1.scaleInPlace(T[1]),this.l10.scaleInPlace(T[2]),this.l11.scaleInPlace(T[3]),this.l2_2.scaleInPlace(T[4]),this.l2_1.scaleInPlace(T[5]),this.l20.scaleInPlace(T[6]),this.l21.scaleInPlace(T[7]),this.l22.scaleInPlace(T[8])},e.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},e.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(o[0]),this.l1_1.scaleInPlace(o[1]),this.l10.scaleInPlace(o[2]),this.l11.scaleInPlace(o[3]),this.l2_2.scaleInPlace(o[4]),this.l2_1.scaleInPlace(o[5]),this.l20.scaleInPlace(o[6]),this.l21.scaleInPlace(o[7]),this.l22.scaleInPlace(o[8])},e.FromArray=function(i){var n=new e;return l.e.FromArrayToRef(i[0],0,n.l00),l.e.FromArrayToRef(i[1],0,n.l1_1),l.e.FromArrayToRef(i[2],0,n.l10),l.e.FromArrayToRef(i[3],0,n.l11),l.e.FromArrayToRef(i[4],0,n.l2_2),l.e.FromArrayToRef(i[5],0,n.l2_1),l.e.FromArrayToRef(i[6],0,n.l20),l.e.FromArrayToRef(i[7],0,n.l21),l.e.FromArrayToRef(i[8],0,n.l22),n},e.FromPolynomial=function(i){var n=new e;return n.l00=i.xx.scale(.376127).add(i.yy.scale(.376127)).add(i.zz.scale(.376126)),n.l1_1=i.y.scale(.977204),n.l10=i.z.scale(.977204),n.l11=i.x.scale(.977204),n.l2_2=i.xy.scale(1.16538),n.l2_1=i.yz.scale(1.16538),n.l20=i.zz.scale(1.34567).subtract(i.xx.scale(.672834)).subtract(i.yy.scale(.672834)),n.l21=i.zx.scale(1.16538),n.l22=i.xx.scale(1.16538).subtract(i.yy.scale(1.16538)),n.l1_1.scaleInPlace(-1),n.l11.scaleInPlace(-1),n.l2_1.scaleInPlace(-1),n.l21.scaleInPlace(-1),n.scaleInPlace(Math.PI),n},e}(),d=function(){function e(){this.x=l.e.Zero(),this.y=l.e.Zero(),this.z=l.e.Zero(),this.xx=l.e.Zero(),this.yy=l.e.Zero(),this.zz=l.e.Zero(),this.xy=l.e.Zero(),this.yz=l.e.Zero(),this.zx=l.e.Zero()}return Object.defineProperty(e.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=R.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),e.prototype.addAmbient=function(i){var n=new l.e(i.r,i.g,i.b);this.xx=this.xx.add(n),this.yy=this.yy.add(n),this.zz=this.zz.add(n)},e.prototype.scaleInPlace=function(i){this.x.scaleInPlace(i),this.y.scaleInPlace(i),this.z.scaleInPlace(i),this.xx.scaleInPlace(i),this.yy.scaleInPlace(i),this.zz.scaleInPlace(i),this.yz.scaleInPlace(i),this.zx.scaleInPlace(i),this.xy.scaleInPlace(i)},e.FromHarmonics=function(i){var n=new e;return n._harmonics=i,n.x=i.l11.scale(1.02333).scale(-1),n.y=i.l1_1.scale(1.02333).scale(-1),n.z=i.l10.scale(1.02333),n.xx=i.l00.scale(.886277).subtract(i.l20.scale(.247708)).add(i.l22.scale(.429043)),n.yy=i.l00.scale(.886277).subtract(i.l20.scale(.247708)).subtract(i.l22.scale(.429043)),n.zz=i.l00.scale(.886277).add(i.l20.scale(.495417)),n.yz=i.l2_1.scale(.858086).scale(-1),n.zx=i.l21.scale(.858086).scale(-1),n.xy=i.l2_2.scale(.858086),n.scaleInPlace(1/Math.PI),n},e.FromArray=function(i){var n=new e;return l.e.FromArrayToRef(i[0],0,n.x),l.e.FromArrayToRef(i[1],0,n.y),l.e.FromArrayToRef(i[2],0,n.z),l.e.FromArrayToRef(i[3],0,n.xx),l.e.FromArrayToRef(i[4],0,n.yy),l.e.FromArrayToRef(i[5],0,n.zz),l.e.FromArrayToRef(i[6],0,n.yz),l.e.FromArrayToRef(i[7],0,n.zx),l.e.FromArrayToRef(i[8],0,n.xy),n},e}()},514:function(Q,U,u){"use strict";u.d(U,"a",function(){return S});var l=u(442),o=u(545),S=function(){function E(){}return E.GetEnvironmentBRDFTexture=function(T){if(!T.environmentBRDFTexture){var R=T.useDelayedTextureLoading;T.useDelayedTextureLoading=!1;var d=T._blockEntityCollection;T._blockEntityCollection=!1;var e=l.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,T,!0,!1,l.a.BILINEAR_SAMPLINGMODE);T._blockEntityCollection=d;var i=T.getEngine().getLoadedTexturesCache(),n=i.indexOf(e.getInternalTexture());n!==-1&&i.splice(n,1),e.isRGBD=!0,e.wrapU=l.a.CLAMP_ADDRESSMODE,e.wrapV=l.a.CLAMP_ADDRESSMODE,T.environmentBRDFTexture=e,T.useDelayedTextureLoading=R,o.a.ExpandRGBDTexture(e)}return T.environmentBRDFTexture},E._instanceNumber=0,E._environmentBRDFBase64Texture="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==",E}()},518:function(Q,U,u){"use strict";u.d(U,"a",function(){return e});var l=u(434),o=u(439),S=u(491),E=u(444),T=u(448),R=u(644),d=u(534),e=function(i){Object(l.d)(n,i);function n(t,a,s,h,v,p,m,C){s===void 0&&(s=null),m===void 0&&(m=0);var _=i.call(this,t,"imageProcessing",[],[],a,s,h,v,p,null,m,"postprocess",null,!0)||this;return _._fromLinearSpace=!0,_._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},C?(C.applyByPostProcess=!0,_._attachImageProcessingConfiguration(C,!0),_.fromLinearSpace=!1):(_._attachImageProcessingConfiguration(null,!0),_.imageProcessingConfiguration.applyByPostProcess=!0),_.onApply=function(D){_.imageProcessingConfiguration.bind(D,_.aspectRatio)},_}return Object.defineProperty(n.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(t){t.applyByPostProcess=!0,this._attachImageProcessingConfiguration(t)},enumerable:!1,configurable:!0}),n.prototype._attachImageProcessingConfiguration=function(t,a){var s=this;if(a===void 0&&(a=!1),t!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),t)this._imageProcessingConfiguration=t;else{var h=null,v=this.getEngine(),p=this.getCamera();if(p)h=p.getScene();else if(v&&v.scenes){var m=v.scenes;h=m[m.length-1]}else h=T.a.LastCreatedScene;h?this._imageProcessingConfiguration=h.imageProcessingConfiguration:this._imageProcessingConfiguration=new S.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){s._updateParameters()})),a||this._updateParameters()}},Object.defineProperty(n.prototype,"isSupported",{get:function(){var t=this.getEffect();return!t||t.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(t){this.imageProcessingConfiguration.colorCurves=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(t){this.imageProcessingConfiguration.colorCurvesEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(t){this.imageProcessingConfiguration.colorGradingTexture=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(t){this.imageProcessingConfiguration.colorGradingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(t){this.imageProcessingConfiguration.exposure=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(t){this._imageProcessingConfiguration.toneMappingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(t){this._imageProcessingConfiguration.toneMappingType=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(t){this.imageProcessingConfiguration.contrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(t){this.imageProcessingConfiguration.vignetteStretch=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(t){this.imageProcessingConfiguration.vignetteCentreX=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(t){this.imageProcessingConfiguration.vignetteCentreY=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(t){this.imageProcessingConfiguration.vignetteWeight=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(t){this.imageProcessingConfiguration.vignetteColor=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(t){this.imageProcessingConfiguration.vignetteCameraFov=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(t){this.imageProcessingConfiguration.vignetteBlendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(t){this.imageProcessingConfiguration.vignetteEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(t){this._fromLinearSpace!==t&&(this._fromLinearSpace=t,this._updateParameters())},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"ImageProcessingPostProcess"},n.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var t="";for(var a in this._defines)this._defines[a]&&(t+="#define "+a+`;\r
`);var s=["textureSampler"],h=["scale"];S.a&&(S.a.PrepareSamplers(s,this._defines),S.a.PrepareUniforms(h,this._defines)),this.updateEffect(t,h,s)},n.prototype.dispose=function(t){i.prototype.dispose.call(this,t),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(l.c)([Object(o.c)()],n.prototype,"_fromLinearSpace",void 0),n}(E.a)},521:function(Q,U,u){"use strict";u.d(U,"a",function(){return d});var l=u(436),o=u(450),S=u(513),E=u(515),T=u(441),R=function(){function e(i,n,t,a){this.name=i,this.worldAxisForNormal=n,this.worldAxisForFileX=t,this.worldAxisForFileY=a}return e}(),d=function(){function e(){}return e.ConvertCubeMapTextureToSphericalPolynomial=function(i){var n=this,t;if(!i.isCube)return null;(t=i.getScene())===null||t===void 0||t.getEngine().flushFramebuffer();var a=i.getSize().width,s=i.readPixels(0,void 0,void 0,!1),h=i.readPixels(1,void 0,void 0,!1),v,p;i.isRenderTarget?(v=i.readPixels(3,void 0,void 0,!1),p=i.readPixels(2,void 0,void 0,!1)):(v=i.readPixels(2,void 0,void 0,!1),p=i.readPixels(3,void 0,void 0,!1));var m=i.readPixels(4,void 0,void 0,!1),C=i.readPixels(5,void 0,void 0,!1),_=i.gammaSpace,D=5,M=0;return(i.textureType==1||i.textureType==2)&&(M=1),new Promise(function(N,L){Promise.all([h,s,v,p,m,C]).then(function(B){var P=B[0],G=B[1],y=B[2],K=B[3],b=B[4],re=B[5],ae={size:a,right:G,left:P,up:y,down:K,front:b,back:re,format:D,type:M,gammaSpace:_};N(n.ConvertCubeMapToSphericalPolynomial(ae))})})},e.ConvertCubeMapToSphericalPolynomial=function(i){for(var n=new S.a,t=0,a=2/i.size,s=a,h=a*.5-1,v=0;v<6;v++)for(var p=this.FileFaces[v],m=i[p.name],C=h,_=i.format===5?4:3,D=0;D<i.size;D++){for(var M=h,N=0;N<i.size;N++){var L=p.worldAxisForFileX.scale(M).add(p.worldAxisForFileY.scale(C)).add(p.worldAxisForNormal);L.normalize();var B=Math.pow(1+M*M+C*C,-3/2),P=m[D*i.size*_+N*_+0],G=m[D*i.size*_+N*_+1],y=m[D*i.size*_+N*_+2];isNaN(P)&&(P=0),isNaN(G)&&(G=0),isNaN(y)&&(y=0),i.type===0&&(P/=255,G/=255,y/=255),i.gammaSpace&&(P=Math.pow(o.a.Clamp(P),E.c),G=Math.pow(o.a.Clamp(G),E.c),y=Math.pow(o.a.Clamp(y),E.c));var K=4096;P=o.a.Clamp(P,0,K),G=o.a.Clamp(G,0,K),y=o.a.Clamp(y,0,K);var b=new T.a(P,G,y);n.addLight(L,b,B),t+=B,M+=a}C+=s}var re=4*Math.PI,ae=6,le=re*ae/6,ce=le/t;return n.scaleInPlace(ce),n.convertIncidentRadianceToIrradiance(),n.convertIrradianceToLambertianRadiance(),S.b.FromHarmonics(n)},e.FileFaces=[new R("right",new l.e(1,0,0),new l.e(0,0,-1),new l.e(0,-1,0)),new R("left",new l.e(-1,0,0),new l.e(0,0,1),new l.e(0,-1,0)),new R("up",new l.e(0,1,0),new l.e(1,0,0),new l.e(0,0,1)),new R("down",new l.e(0,-1,0),new l.e(1,0,0),new l.e(0,0,-1)),new R("front",new l.e(0,0,1),new l.e(1,0,0),new l.e(0,-1,0)),new R("back",new l.e(0,0,-1),new l.e(-1,0,0),new l.e(0,-1,0))],e}()},522:function(Q,U,u){"use strict";var l=u(434),o=u(456),S=u(440),E=u(467);E.a.prototype.createRenderTargetCubeTexture=function(T,R){var d=Object(l.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},R);d.generateStencilBuffer=d.generateDepthBuffer&&d.generateStencilBuffer,(d.type===1&&!this._caps.textureFloatLinearFiltering||d.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(d.samplingMode=1);var e=this._gl,i=new o.a(this,o.b.RenderTarget);this._bindTextureDirectly(e.TEXTURE_CUBE_MAP,i,!0);var n=this._getSamplingParameters(d.samplingMode,d.generateMipMaps);d.type===1&&!this._caps.textureFloat&&(d.type=0,S.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,n.mag),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,n.min),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);for(var t=0;t<6;t++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,this._getRGBABufferInternalSizedFormat(d.type,d.format),T,T,0,this._getInternalFormat(d.format),this._getWebGLTextureType(d.type),null);var a=e.createFramebuffer();return this._bindUnboundFramebuffer(a),i._depthStencilBuffer=this._setupFramebufferDepthAttachments(d.generateStencilBuffer,d.generateDepthBuffer,T,T),d.generateMipMaps&&e.generateMipmap(e.TEXTURE_CUBE_MAP),this._bindTextureDirectly(e.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),i._framebuffer=a,i.width=T,i.height=T,i.isReady=!0,i.isCube=!0,i.samples=1,i.generateMipMaps=d.generateMipMaps,i.samplingMode=d.samplingMode,i.type=d.type,i.format=d.format,i._generateDepthBuffer=d.generateDepthBuffer,i._generateStencilBuffer=d.generateStencilBuffer,this._internalTexturesCache.push(i),i}},523:function(Q,U,u){"use strict";var l=u(521),o=u(477);Object.defineProperty(o.a.prototype,"sphericalPolynomial",{get:function(){var S=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=l.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(E){S._texture._sphericalPolynomial=E,S._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(S){this._texture&&(this._texture._sphericalPolynomial=S)},enumerable:!0,configurable:!0})},529:function(Q,U,u){"use strict";u.d(U,"b",function(){return Me}),u.d(U,"a",function(){return yn});var l=u(434),o=u(439),S=u(440),E=u(490),T=u(514),R=u(449),d=u(436),e=u(447),i=u(626),n=u(480),t=u(454),a=function(){function A(c){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new d.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=c}return A.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},A.prototype.isReadyForSubMesh=function(c,r){return!(c._areTexturesDirty&&r.texturesEnabled&&this._texture&&n.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},A.prototype.prepareDefines=function(c,r,f){this._isEnabled?(c.ANISOTROPIC=this._isEnabled,this._isEnabled&&!r.isVerticesDataPresent(e.b.TangentKind)&&(c._needUVs=!0,c.MAINUV1=!0),c._areTexturesDirty&&f.texturesEnabled&&(this._texture&&n.a.AnisotropicTextureEnabled?t.a.PrepareDefinesForMergedUV(this._texture,c,"ANISOTROPIC_TEXTURE"):c.ANISOTROPIC_TEXTURE=!1)):(c.ANISOTROPIC=!1,c.ANISOTROPIC_TEXTURE=!1)},A.prototype.bindForSubMesh=function(c,r,f){(!c.useUbo||!f||!c.isSync)&&(this._texture&&n.a.AnisotropicTextureEnabled&&(c.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),t.a.BindTextureMatrix(this._texture,c,"anisotropy")),c.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),r.texturesEnabled&&this._texture&&n.a.AnisotropicTextureEnabled&&c.setTexture("anisotropySampler",this._texture)},A.prototype.hasTexture=function(c){return this._texture===c},A.prototype.getActiveTextures=function(c){this._texture&&c.push(this._texture)},A.prototype.getAnimatables=function(c){this._texture&&this._texture.animations&&this._texture.animations.length>0&&c.push(this._texture)},A.prototype.dispose=function(c){c&&this._texture&&this._texture.dispose()},A.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},A.AddFallbacks=function(c,r,f){return c.ANISOTROPIC&&r.addFallback(f++,"ANISOTROPIC"),f},A.AddUniforms=function(c){c.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},A.PrepareUniformBuffer=function(c){c.addUniform("vAnisotropy",3),c.addUniform("vAnisotropyInfos",2),c.addUniform("anisotropyMatrix",16)},A.AddSamplers=function(c){c.push("anisotropySampler")},A.prototype.copyTo=function(c){o.a.Clone(function(){return c},this)},A.prototype.serialize=function(){return o.a.Serialize(this)},A.prototype.parse=function(c,r,f){var g=this;o.a.Parse(function(){return g},c,r,f)},Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"isEnabled",void 0),Object(l.c)([Object(o.c)()],A.prototype,"intensity",void 0),Object(l.c)([Object(o.n)()],A.prototype,"direction",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"texture",void 0),A}(),s=function(){function A(c){this._useEnergyConservation=A.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=A.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=A.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=A.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=A.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=A.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=A.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=A.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=c}return A.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},A.prototype.prepareDefines=function(c){c.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,c.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,c.SPHERICAL_HARMONICS=this._useSphericalHarmonics,c.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},A.prototype.getClassName=function(){return"PBRBRDFConfiguration"},A.prototype.copyTo=function(c){o.a.Clone(function(){return c},this)},A.prototype.serialize=function(){return o.a.Serialize(this)},A.prototype.parse=function(c,r,f){var g=this;o.a.Parse(function(){return g},c,r,f)},A.DEFAULT_USE_ENERGY_CONSERVATION=!0,A.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,A.DEFAULT_USE_SPHERICAL_HARMONICS=!0,A.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],A.prototype,"useEnergyConservation",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],A.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],A.prototype,"useSphericalHarmonics",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],A.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),A}(),h=u(441),v=function(){function A(c){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=h.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=c}return A.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},A.prototype.isReadyForSubMesh=function(c,r){return!(c._areTexturesDirty&&r.texturesEnabled&&(this._texture&&n.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&n.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},A.prototype.prepareDefines=function(c,r){var f;this._isEnabled?(c.SHEEN=this._isEnabled,c.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,c.SHEEN_ROUGHNESS=this._roughness!==null,c.SHEEN_ALBEDOSCALING=this._albedoScaling,c.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,c.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((f=this._textureRoughness)===null||f===void 0?void 0:f._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),c._areTexturesDirty&&r.texturesEnabled&&(this._texture&&n.a.SheenTextureEnabled?t.a.PrepareDefinesForMergedUV(this._texture,c,"SHEEN_TEXTURE"):c.SHEEN_TEXTURE=!1,this._textureRoughness&&n.a.SheenTextureEnabled?t.a.PrepareDefinesForMergedUV(this._textureRoughness,c,"SHEEN_TEXTURE_ROUGHNESS"):c.SHEEN_TEXTURE_ROUGHNESS=!1)):(c.SHEEN=!1,c.SHEEN_TEXTURE=!1,c.SHEEN_TEXTURE_ROUGHNESS=!1,c.SHEEN_LINKWITHALBEDO=!1,c.SHEEN_ROUGHNESS=!1,c.SHEEN_ALBEDOSCALING=!1,c.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,c.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},A.prototype.bindForSubMesh=function(c,r,f,g){var F,j,x,Z,V,I,X,z,te=g._materialDefines,H=te.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!c.useUbo||!f||!c.isSync)&&(H&&n.a.SheenTextureEnabled?(c.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),t.a.BindTextureMatrix(this._texture,c,"sheen")):(this._texture||this._textureRoughness)&&n.a.SheenTextureEnabled&&(c.updateFloat4("vSheenInfos",(j=(F=this._texture)===null||F===void 0?void 0:F.coordinatesIndex)!==null&&j!==void 0?j:0,(Z=(x=this._texture)===null||x===void 0?void 0:x.level)!==null&&Z!==void 0?Z:0,(I=(V=this._textureRoughness)===null||V===void 0?void 0:V.coordinatesIndex)!==null&&I!==void 0?I:0,(z=(X=this._textureRoughness)===null||X===void 0?void 0:X.level)!==null&&z!==void 0?z:0),this._texture&&t.a.BindTextureMatrix(this._texture,c,"sheen"),this._textureRoughness&&!H&&!te.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&t.a.BindTextureMatrix(this._textureRoughness,c,"sheenRoughness")),c.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&c.updateFloat("vSheenRoughness",this._roughness)),r.texturesEnabled&&(this._texture&&n.a.SheenTextureEnabled&&c.setTexture("sheenSampler",this._texture),this._textureRoughness&&!H&&!te.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&n.a.SheenTextureEnabled&&c.setTexture("sheenRoughnessSampler",this._textureRoughness))},A.prototype.hasTexture=function(c){return this._texture===c||this._textureRoughness===c},A.prototype.getActiveTextures=function(c){this._texture&&c.push(this._texture),this._textureRoughness&&c.push(this._textureRoughness)},A.prototype.getAnimatables=function(c){this._texture&&this._texture.animations&&this._texture.animations.length>0&&c.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&c.push(this._textureRoughness)},A.prototype.dispose=function(c){var r,f;c&&((r=this._texture)===null||r===void 0||r.dispose(),(f=this._textureRoughness)===null||f===void 0||f.dispose())},A.prototype.getClassName=function(){return"PBRSheenConfiguration"},A.AddFallbacks=function(c,r,f){return c.SHEEN&&r.addFallback(f++,"SHEEN"),f},A.AddUniforms=function(c){c.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},A.PrepareUniformBuffer=function(c){c.addUniform("vSheenColor",4),c.addUniform("vSheenRoughness",1),c.addUniform("vSheenInfos",4),c.addUniform("sheenMatrix",16),c.addUniform("sheenRoughnessMatrix",16)},A.AddSamplers=function(c){c.push("sheenSampler"),c.push("sheenRoughnessSampler")},A.prototype.copyTo=function(c){o.a.Clone(function(){return c},this)},A.prototype.serialize=function(){return o.a.Serialize(this)},A.prototype.parse=function(c,r,f){var g=this;o.a.Parse(function(){return g},c,r,f)},Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"isEnabled",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"linkSheenWithAlbedo",void 0),Object(l.c)([Object(o.c)()],A.prototype,"intensity",void 0),Object(l.c)([Object(o.e)()],A.prototype,"color",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"texture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"roughness",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"textureRoughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"albedoScaling",void 0),A}(),p=u(450),m=function(){function A(c,r,f){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=h.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=h.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=c,this._internalMarkScenePrePassDirty=r,this._scene=f}return Object.defineProperty(A.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(c){!this._scene.enableSubSurfaceForPrePass()||c&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(c))},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(c){c>=1?this._volumeIndexOfRefraction=c:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),A.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},A.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},A.prototype.isReadyForSubMesh=function(c,r){if(c._areTexturesDirty&&r.texturesEnabled){if(this._thicknessTexture&&n.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var f=this._getRefractionTexture(r);if(f&&n.a.RefractionTextureEnabled&&!f.isReadyOrNotBlocking())return!1}return!0},A.prototype.prepareDefines=function(c,r){if(c._areTexturesDirty&&(c.SUBSURFACE=!1,c.SS_TRANSLUCENCY=this._isTranslucencyEnabled,c.SS_SCATTERING=this._isScatteringEnabled,c.SS_THICKNESSANDMASK_TEXTURE=!1,c.SS_MASK_FROM_THICKNESS_TEXTURE=!1,c.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,c.SS_REFRACTION=!1,c.SS_REFRACTIONMAP_3D=!1,c.SS_GAMMAREFRACTION=!1,c.SS_RGBDREFRACTION=!1,c.SS_LINEARSPECULARREFRACTION=!1,c.SS_REFRACTIONMAP_OPPOSITEZ=!1,c.SS_LODINREFRACTIONALPHA=!1,c.SS_LINKREFRACTIONTOTRANSPARENCY=!1,c.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(c.SUBSURFACE=!0,c._areTexturesDirty&&r.texturesEnabled&&this._thicknessTexture&&n.a.ThicknessTextureEnabled&&t.a.PrepareDefinesForMergedUV(this._thicknessTexture,c,"SS_THICKNESSANDMASK_TEXTURE"),c.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,c.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&r.texturesEnabled)){var f=this._getRefractionTexture(r);f&&n.a.RefractionTextureEnabled&&(c.SS_REFRACTION=!0,c.SS_REFRACTIONMAP_3D=f.isCube,c.SS_GAMMAREFRACTION=f.gammaSpace,c.SS_RGBDREFRACTION=f.isRGBD,c.SS_LINEARSPECULARREFRACTION=f.linearSpecularLOD,c.SS_REFRACTIONMAP_OPPOSITEZ=f.invertZ,c.SS_LODINREFRACTIONALPHA=f.lodLevelInAlpha,c.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,c.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},A.prototype.bindForSubMesh=function(c,r,f,g,F,j){var x=this._getRefractionTexture(r);if(!c.useUbo||!g||!c.isSync){if(this._thicknessTexture&&n.a.ThicknessTextureEnabled&&(c.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),t.a.BindTextureMatrix(this._thicknessTexture,c,"thickness")),c.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),x&&n.a.RefractionTextureEnabled){c.updateMatrix("refractionMatrix",x.getReflectionTextureMatrix());var Z=1;x.isCube||x.depth&&(Z=x.depth);var V=x.getSize().width,I=this.volumeIndexOfRefraction;c.updateFloat4("vRefractionInfos",x.level,1/I,Z,this._invertRefractionY?-1:1),c.updateFloat3("vRefractionMicrosurfaceInfos",V,x.lodGenerationScale,x.lodGenerationOffset),j&&c.updateFloat2("vRefractionFilteringInfo",V,p.a.Log2(V))}this.isScatteringEnabled&&c.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),c.updateColor3("vDiffusionDistance",this.diffusionDistance),c.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),c.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}r.texturesEnabled&&(this._thicknessTexture&&n.a.ThicknessTextureEnabled&&c.setTexture("thicknessSampler",this._thicknessTexture),x&&n.a.RefractionTextureEnabled&&(F?c.setTexture("refractionSampler",x):(c.setTexture("refractionSampler",x._lodTextureMid||x),c.setTexture("refractionSamplerLow",x._lodTextureLow||x),c.setTexture("refractionSamplerHigh",x._lodTextureHigh||x))))},A.prototype.unbind=function(c){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(c.setTexture("refractionSampler",null),!0):!1},A.prototype._getRefractionTexture=function(c){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?c.environmentTexture:null},Object.defineProperty(A.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),A.prototype.fillRenderTargetTextures=function(c){n.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&c.push(this._refractionTexture)},A.prototype.hasTexture=function(c){return this._thicknessTexture===c||this._refractionTexture===c},A.prototype.hasRenderTargetTextures=function(){return!!(n.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},A.prototype.getActiveTextures=function(c){this._thicknessTexture&&c.push(this._thicknessTexture),this._refractionTexture&&c.push(this._refractionTexture)},A.prototype.getAnimatables=function(c){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&c.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&c.push(this._refractionTexture)},A.prototype.dispose=function(c){c&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},A.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},A.AddFallbacks=function(c,r,f){return c.SS_SCATTERING&&r.addFallback(f++,"SS_SCATTERING"),c.SS_TRANSLUCENCY&&r.addFallback(f++,"SS_TRANSLUCENCY"),f},A.AddUniforms=function(c){c.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},A.AddSamplers=function(c){c.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},A.PrepareUniformBuffer=function(c){c.addUniform("vRefractionMicrosurfaceInfos",3),c.addUniform("vRefractionFilteringInfo",2),c.addUniform("vRefractionInfos",4),c.addUniform("refractionMatrix",16),c.addUniform("vThicknessInfos",2),c.addUniform("thicknessMatrix",16),c.addUniform("vThicknessParam",2),c.addUniform("vDiffusionDistance",3),c.addUniform("vTintColor",4),c.addUniform("vSubSurfaceIntensity",3),c.addUniform("scatteringDiffusionProfile",1)},A.prototype.copyTo=function(c){o.a.Clone(function(){return c},this)},A.prototype.serialize=function(){return o.a.Serialize(this)},A.prototype.parse=function(c,r,f){var g=this;o.a.Parse(function(){return g},c,r,f)},Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"isRefractionEnabled",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"isTranslucencyEnabled",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markScenePrePassDirty")],A.prototype,"isScatteringEnabled",void 0),Object(l.c)([Object(o.c)()],A.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(l.c)([Object(o.c)()],A.prototype,"refractionIntensity",void 0),Object(l.c)([Object(o.c)()],A.prototype,"translucencyIntensity",void 0),Object(l.c)([Object(o.c)()],A.prototype,"useAlbedoToTintRefraction",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"thicknessTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"refractionTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(o.c)()],A.prototype,"_volumeIndexOfRefraction",void 0),Object(l.c)([Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"volumeIndexOfRefraction",null),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"invertRefractionY",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"linkRefractionWithTransparency",void 0),Object(l.c)([Object(o.c)()],A.prototype,"minimumThickness",void 0),Object(l.c)([Object(o.c)()],A.prototype,"maximumThickness",void 0),Object(l.c)([Object(o.e)()],A.prototype,"tintColor",void 0),Object(l.c)([Object(o.c)()],A.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(o.e)()],A.prototype,"diffusionDistance",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"useMaskFromThicknessTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],A.prototype,"useMaskFromThicknessTextureGltf",void 0),A}(),C=u(744),_=u(491),D=u(459),M=u(552),N=u(553),L=u(442),B=u(523),P=u(435),G=u(746),y="pbrFragmentDeclaration",K=`uniform vec4 vEyePosition;
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
`;P.a.IncludesShadersStore[y]=K;var b={name:y,shader:K},re=u(674),ae=u(745),le="pbrUboDeclaration",ce=`layout(std140,column_major) uniform;





















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
`;P.a.IncludesShadersStore[le]=ce;var De={name:le,shader:ce},Ee="pbrFragmentExtraDeclaration",ve=`
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
#endif`;P.a.IncludesShadersStore[Ee]=ve;var pe={name:Ee,shader:ve},he=u(650),se=u(651),ue="pbrFragmentSamplersDeclaration",w=`#ifdef ALBEDO
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
#endif`;P.a.IncludesShadersStore[ue]=w;var O={name:ue,shader:w},q=u(524),ee=u(592),W=u(558),$=u(597),Y=u(457),ne=u(627),oe=u(605),J="pbrHelperFunctions",k=`
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
#endif`;P.a.IncludesShadersStore[J]=k;var Ie={name:J,shader:k},Ae=u(525),be=u(652),me="harmonicsFunctions",de=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;P.a.IncludesShadersStore[me]=de;var Pe={name:me,shader:de},Ce="pbrDirectLightingSetupFunctions",Te=`
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
}`;P.a.IncludesShadersStore[Ce]=Te;var Nn={name:Ce,shader:Te},_e="pbrDirectLightingFalloffFunctions",Ne=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;P.a.IncludesShadersStore[_e]=Ne;var Fn={name:_e,shader:Ne},Un=u(606),Bn=u(607),xe="pbrDirectLightingFunctions",ye=`#define CLEARCOATREFLECTANCE90 1.0

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
`;P.a.IncludesShadersStore[xe]=ye;var Vn={name:xe,shader:ye},Fe="pbrIBLFunctions",Ue=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
#endif`;P.a.IncludesShadersStore[Fe]=Ue;var Gn={name:Fe,shader:Ue},Hn=u(614),wn=u(615),Xn=u(653),Be="pbrBlockAlbedoOpacity",Ve=`struct albedoOpacityOutParams
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
`;P.a.IncludesShadersStore[Be]=Ve;var jn={name:Be,shader:Ve},Ge="pbrBlockReflectivity",He=`struct reflectivityOutParams
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
`;P.a.IncludesShadersStore[Ge]=He;var Wn={name:Ge,shader:He},we="pbrBlockAmbientOcclusion",Xe=`struct ambientOcclusionOutParams
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
`;P.a.IncludesShadersStore[we]=Xe;var zn={name:we,shader:Xe},je="pbrBlockAlphaFresnel",We=`#ifdef ALPHAFRESNEL
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
`;P.a.IncludesShadersStore[je]=We;var Yn={name:je,shader:We},ze="pbrBlockAnisotropic",Ye=`#ifdef ANISOTROPIC
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
`;P.a.IncludesShadersStore[ze]=Ye;var kn={name:ze,shader:Ye},ke="pbrBlockReflection",Ke=`#ifdef REFLECTION
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
`;P.a.IncludesShadersStore[ke]=Ke;var Kn={name:ke,shader:Ke},Qe="pbrBlockSheen",Je=`#ifdef SHEEN
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
`;P.a.IncludesShadersStore[Qe]=Je;var Qn={name:Qe,shader:Je},Ze="pbrBlockClearcoat",qe=`struct clearcoatOutParams
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
`;P.a.IncludesShadersStore[Ze]=qe;var Jn={name:Ze,shader:qe},$e="pbrBlockSubSurface",en=`struct subSurfaceOutParams
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
`;P.a.IncludesShadersStore[$e]=en;var Zn={name:$e,shader:en},qn=u(550),nn="pbrBlockNormalGeometric",tn=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;P.a.IncludesShadersStore[nn]=tn;var $n={name:nn,shader:tn},et=u(616),rn="pbrBlockNormalFinal",an=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;P.a.IncludesShadersStore[rn]=an;var nt={name:rn,shader:an},tt=u(747),on="pbrBlockLightmapInit",sn=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;P.a.IncludesShadersStore[on]=sn;var it={name:on,shader:sn},fn="pbrBlockGeometryInfo",ln=`float NdotVUnclamped=dot(normalW,viewDirectionW);

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
`;P.a.IncludesShadersStore[fn]=ln;var rt={name:fn,shader:ln},cn="pbrBlockReflectance0",un=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
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
`;P.a.IncludesShadersStore[cn]=un;var at={name:cn,shader:un},dn="pbrBlockReflectance",hn=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;P.a.IncludesShadersStore[dn]=hn;var ot={name:dn,shader:hn},En="pbrBlockDirectLighting",vn=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;P.a.IncludesShadersStore[En]=vn;var st={name:En,shader:vn},ft=u(654),pn="pbrBlockFinalLitComponents",Tn=`



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
`;P.a.IncludesShadersStore[pn]=Tn;var lt={name:pn,shader:Tn},gn="pbrBlockFinalUnlitComponents",Rn=`
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
`;P.a.IncludesShadersStore[gn]=Rn;var ct={name:gn,shader:Rn},An="pbrBlockFinalColorComposition",mn=`vec4 finalColor=vec4(
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
`;P.a.IncludesShadersStore[An]=mn;var ut={name:An,shader:mn},dt=u(701),ht=u(655),Cn="pbrBlockImageProcessing",_n=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;P.a.IncludesShadersStore[Cn]=_n;var Et={name:Cn,shader:_n},Sn="pbrDebug",On=`#if DEBUGMODE>0
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
#endif`;P.a.IncludesShadersStore[Sn]=On;var vt={name:Sn,shader:On},In="pbrPixelShader",bn=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;P.a.ShadersStore[In]=bn;var pt={name:In,shader:bn},Pn="pbrVertexDeclaration",Mn=`uniform mat4 view;
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
#endif`;P.a.IncludesShadersStore[Pn]=Mn;var Tt={name:Pn,shader:Mn},gt=u(487),Rt=u(748),At=u(749),mt=u(593),Ct=u(656),_t=u(657),St=u(658),Ot=u(496),It=u(497),bt=u(507),Pt=u(508),Mt=u(488),Lt=u(489),Dt=u(750),Nt=u(675),xt=u(551),yt=u(702),Ft=u(659),Ut=u(703),Ln="pbrVertexShader",Dn=`precision highp float;
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
}`;P.a.ShadersStore[Ln]=Dn;var Bt={name:Ln,shader:Dn},xn=u(512),Se=u(751),ge={effect:null,subMesh:null},Me=function(A){Object(l.d)(c,A);function c(){var r=A.call(this)||this;return r.PBR=!0,r.NUM_SAMPLES="0",r.REALTIME_FILTERING=!1,r.MAINUV1=!1,r.MAINUV2=!1,r.UV1=!1,r.UV2=!1,r.ALBEDO=!1,r.GAMMAALBEDO=!1,r.ALBEDODIRECTUV=0,r.VERTEXCOLOR=!1,r.DETAIL=!1,r.DETAILDIRECTUV=0,r.DETAIL_NORMALBLENDMETHOD=0,r.AMBIENT=!1,r.AMBIENTDIRECTUV=0,r.AMBIENTINGRAYSCALE=!1,r.OPACITY=!1,r.VERTEXALPHA=!1,r.OPACITYDIRECTUV=0,r.OPACITYRGB=!1,r.ALPHATEST=!1,r.DEPTHPREPASS=!1,r.ALPHABLEND=!1,r.ALPHAFROMALBEDO=!1,r.ALPHATESTVALUE="0.5",r.SPECULAROVERALPHA=!1,r.RADIANCEOVERALPHA=!1,r.ALPHAFRESNEL=!1,r.LINEARALPHAFRESNEL=!1,r.PREMULTIPLYALPHA=!1,r.EMISSIVE=!1,r.EMISSIVEDIRECTUV=0,r.REFLECTIVITY=!1,r.REFLECTIVITYDIRECTUV=0,r.SPECULARTERM=!1,r.MICROSURFACEFROMREFLECTIVITYMAP=!1,r.MICROSURFACEAUTOMATIC=!1,r.LODBASEDMICROSFURACE=!1,r.MICROSURFACEMAP=!1,r.MICROSURFACEMAPDIRECTUV=0,r.METALLICWORKFLOW=!1,r.ROUGHNESSSTOREINMETALMAPALPHA=!1,r.ROUGHNESSSTOREINMETALMAPGREEN=!1,r.METALLNESSSTOREINMETALMAPBLUE=!1,r.AOSTOREINMETALMAPRED=!1,r.METALLIC_REFLECTANCE=!1,r.METALLIC_REFLECTANCEDIRECTUV=0,r.ENVIRONMENTBRDF=!1,r.ENVIRONMENTBRDF_RGBD=!1,r.NORMAL=!1,r.TANGENT=!1,r.BUMP=!1,r.BUMPDIRECTUV=0,r.OBJECTSPACE_NORMALMAP=!1,r.PARALLAX=!1,r.PARALLAXOCCLUSION=!1,r.NORMALXYSCALE=!0,r.LIGHTMAP=!1,r.LIGHTMAPDIRECTUV=0,r.USELIGHTMAPASSHADOWMAP=!1,r.GAMMALIGHTMAP=!1,r.RGBDLIGHTMAP=!1,r.REFLECTION=!1,r.REFLECTIONMAP_3D=!1,r.REFLECTIONMAP_SPHERICAL=!1,r.REFLECTIONMAP_PLANAR=!1,r.REFLECTIONMAP_CUBIC=!1,r.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,r.REFLECTIONMAP_PROJECTION=!1,r.REFLECTIONMAP_SKYBOX=!1,r.REFLECTIONMAP_EXPLICIT=!1,r.REFLECTIONMAP_EQUIRECTANGULAR=!1,r.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,r.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,r.INVERTCUBICMAP=!1,r.USESPHERICALFROMREFLECTIONMAP=!1,r.USEIRRADIANCEMAP=!1,r.SPHERICAL_HARMONICS=!1,r.USESPHERICALINVERTEX=!1,r.REFLECTIONMAP_OPPOSITEZ=!1,r.LODINREFLECTIONALPHA=!1,r.GAMMAREFLECTION=!1,r.RGBDREFLECTION=!1,r.LINEARSPECULARREFLECTION=!1,r.RADIANCEOCCLUSION=!1,r.HORIZONOCCLUSION=!1,r.INSTANCES=!1,r.THIN_INSTANCES=!1,r.PREPASS=!1,r.PREPASS_IRRADIANCE=!1,r.PREPASS_IRRADIANCE_INDEX=-1,r.PREPASS_ALBEDO=!1,r.PREPASS_ALBEDO_INDEX=-1,r.PREPASS_DEPTH=!1,r.PREPASS_DEPTH_INDEX=-1,r.PREPASS_NORMAL=!1,r.PREPASS_NORMAL_INDEX=-1,r.PREPASS_POSITION=!1,r.PREPASS_POSITION_INDEX=-1,r.PREPASS_VELOCITY=!1,r.PREPASS_VELOCITY_INDEX=-1,r.PREPASS_REFLECTIVITY=!1,r.PREPASS_REFLECTIVITY_INDEX=-1,r.SCENE_MRT_COUNT=0,r.NUM_BONE_INFLUENCERS=0,r.BonesPerMesh=0,r.BONETEXTURE=!1,r.BONES_VELOCITY_ENABLED=!1,r.NONUNIFORMSCALING=!1,r.MORPHTARGETS=!1,r.MORPHTARGETS_NORMAL=!1,r.MORPHTARGETS_TANGENT=!1,r.MORPHTARGETS_UV=!1,r.NUM_MORPH_INFLUENCERS=0,r.MORPHTARGETS_TEXTURE=!1,r.IMAGEPROCESSING=!1,r.VIGNETTE=!1,r.VIGNETTEBLENDMODEMULTIPLY=!1,r.VIGNETTEBLENDMODEOPAQUE=!1,r.TONEMAPPING=!1,r.TONEMAPPING_ACES=!1,r.CONTRAST=!1,r.COLORCURVES=!1,r.COLORGRADING=!1,r.COLORGRADING3D=!1,r.SAMPLER3DGREENDEPTH=!1,r.SAMPLER3DBGRMAP=!1,r.IMAGEPROCESSINGPOSTPROCESS=!1,r.EXPOSURE=!1,r.MULTIVIEW=!1,r.USEPHYSICALLIGHTFALLOFF=!1,r.USEGLTFLIGHTFALLOFF=!1,r.TWOSIDEDLIGHTING=!1,r.SHADOWFLOAT=!1,r.CLIPPLANE=!1,r.CLIPPLANE2=!1,r.CLIPPLANE3=!1,r.CLIPPLANE4=!1,r.CLIPPLANE5=!1,r.CLIPPLANE6=!1,r.POINTSIZE=!1,r.FOG=!1,r.LOGARITHMICDEPTH=!1,r.FORCENORMALFORWARD=!1,r.SPECULARAA=!1,r.CLEARCOAT=!1,r.CLEARCOAT_DEFAULTIOR=!1,r.CLEARCOAT_TEXTURE=!1,r.CLEARCOAT_TEXTURE_ROUGHNESS=!1,r.CLEARCOAT_TEXTUREDIRECTUV=0,r.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,r.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,r.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,r.CLEARCOAT_BUMP=!1,r.CLEARCOAT_BUMPDIRECTUV=0,r.CLEARCOAT_REMAP_F0=!0,r.CLEARCOAT_TINT=!1,r.CLEARCOAT_TINT_TEXTURE=!1,r.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,r.ANISOTROPIC=!1,r.ANISOTROPIC_TEXTURE=!1,r.ANISOTROPIC_TEXTUREDIRECTUV=0,r.BRDF_V_HEIGHT_CORRELATED=!1,r.MS_BRDF_ENERGY_CONSERVATION=!1,r.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,r.SHEEN=!1,r.SHEEN_TEXTURE=!1,r.SHEEN_TEXTURE_ROUGHNESS=!1,r.SHEEN_TEXTUREDIRECTUV=0,r.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,r.SHEEN_LINKWITHALBEDO=!1,r.SHEEN_ROUGHNESS=!1,r.SHEEN_ALBEDOSCALING=!1,r.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,r.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,r.SUBSURFACE=!1,r.SS_REFRACTION=!1,r.SS_TRANSLUCENCY=!1,r.SS_SCATTERING=!1,r.SS_THICKNESSANDMASK_TEXTURE=!1,r.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,r.SS_REFRACTIONMAP_3D=!1,r.SS_REFRACTIONMAP_OPPOSITEZ=!1,r.SS_LODINREFRACTIONALPHA=!1,r.SS_GAMMAREFRACTION=!1,r.SS_RGBDREFRACTION=!1,r.SS_LINEARSPECULARREFRACTION=!1,r.SS_LINKREFRACTIONTOTRANSPARENCY=!1,r.SS_ALBEDOFORREFRACTIONTINT=!1,r.SS_MASK_FROM_THICKNESS_TEXTURE=!1,r.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,r.UNLIT=!1,r.DEBUGMODE=0,r.rebuild(),r}return c.prototype.reset=function(){A.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},c}(M.a),yn=function(A){Object(l.d)(c,A);function c(r,f){var g=A.call(this,r,f)||this;return g._directIntensity=1,g._emissiveIntensity=1,g._environmentIntensity=1,g._specularIntensity=1,g._lightingInfos=new d.f(g._directIntensity,g._emissiveIntensity,g._environmentIntensity,g._specularIntensity),g._disableBumpMap=!1,g._albedoTexture=null,g._ambientTexture=null,g._ambientTextureStrength=1,g._ambientTextureImpactOnAnalyticalLights=c.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,g._opacityTexture=null,g._reflectionTexture=null,g._emissiveTexture=null,g._reflectivityTexture=null,g._metallicTexture=null,g._metallic=null,g._roughness=null,g._metallicF0Factor=1,g._metallicReflectanceColor=h.a.White(),g._metallicReflectanceTexture=null,g._microSurfaceTexture=null,g._bumpTexture=null,g._lightmapTexture=null,g._ambientColor=new h.a(0,0,0),g._albedoColor=new h.a(1,1,1),g._reflectivityColor=new h.a(1,1,1),g._reflectionColor=new h.a(1,1,1),g._emissiveColor=new h.a(0,0,0),g._microSurface=.9,g._useLightmapAsShadowmap=!1,g._useHorizonOcclusion=!0,g._useRadianceOcclusion=!0,g._useAlphaFromAlbedoTexture=!1,g._useSpecularOverAlpha=!0,g._useMicroSurfaceFromReflectivityMapAlpha=!1,g._useRoughnessFromMetallicTextureAlpha=!0,g._useRoughnessFromMetallicTextureGreen=!1,g._useMetallnessFromMetallicTextureBlue=!1,g._useAmbientOcclusionFromMetallicTextureRed=!1,g._useAmbientInGrayScale=!1,g._useAutoMicroSurfaceFromReflectivityMap=!1,g._lightFalloff=c.LIGHTFALLOFF_PHYSICAL,g._useRadianceOverAlpha=!0,g._useObjectSpaceNormalMap=!1,g._useParallax=!1,g._useParallaxOcclusion=!1,g._parallaxScaleBias=.05,g._disableLighting=!1,g._maxSimultaneousLights=4,g._invertNormalMapX=!1,g._invertNormalMapY=!1,g._twoSidedLighting=!1,g._alphaCutOff=.4,g._forceAlphaTest=!1,g._useAlphaFresnel=!1,g._useLinearAlphaFresnel=!1,g._environmentBRDFTexture=null,g._forceIrradianceInFragment=!1,g._realTimeFiltering=!1,g._realTimeFilteringQuality=8,g._forceNormalForward=!1,g._enableSpecularAntiAliasing=!1,g._imageProcessingObserver=null,g._renderTargets=new E.a(16),g._globalAmbientColor=new h.a(0,0,0),g._useLogarithmicDepth=!1,g._unlit=!1,g._debugMode=0,g.debugMode=0,g.debugLimit=-1,g.debugFactor=1,g.clearCoat=new i.a(g._markAllSubMeshesAsTexturesDirty.bind(g)),g.anisotropy=new a(g._markAllSubMeshesAsTexturesDirty.bind(g)),g.brdf=new s(g._markAllSubMeshesAsMiscDirty.bind(g)),g.sheen=new v(g._markAllSubMeshesAsTexturesDirty.bind(g)),g.detailMap=new Se.a(g._markAllSubMeshesAsTexturesDirty.bind(g)),g._rebuildInParallel=!1,g._attachImageProcessingConfiguration(null),g.getRenderTargetTextures=function(){return g._renderTargets.reset(),n.a.ReflectionTextureEnabled&&g._reflectionTexture&&g._reflectionTexture.isRenderTarget&&g._renderTargets.push(g._reflectionTexture),g.subSurface.fillRenderTargetTextures(g._renderTargets),g._renderTargets},g._environmentBRDFTexture=T.a.GetEnvironmentBRDFTexture(f),g.subSurface=new m(g._markAllSubMeshesAsTexturesDirty.bind(g),g._markScenePrePassDirty.bind(g),f),g.prePassConfiguration=new C.a,g}return Object.defineProperty(c.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(r){this._realTimeFiltering=r,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(r){this._realTimeFilteringQuality=r,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),c.prototype._attachImageProcessingConfiguration=function(r){var f=this;r!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),r?this._imageProcessingConfiguration=r:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){f._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(c.prototype,"hasRenderTargetTextures",{get:function(){return n.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(c.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(r){this._useLogarithmicDepth=r&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===c.PBRMATERIAL_OPAQUE||this._transparencyMode===c.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),c.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},c.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===c.PBRMATERIAL_ALPHATEST)},c.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==c.PBRMATERIAL_OPAQUE},c.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},c.prototype.getAlphaTestTexture=function(){return this._albedoTexture},c.prototype.isReadyForSubMesh=function(r,f,g){if(f.effect&&this.isFrozen&&f.effect._wasPreviouslyReady)return!0;f._materialDefines||(f._materialDefines=new Me);var F=f._materialDefines;if(this._isReadyForSubMesh(f))return!0;var j=this.getScene(),x=j.getEngine();if(F._areTexturesDirty&&j.texturesEnabled){if(this._albedoTexture&&n.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&n.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&n.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Z=this._getReflectionTexture();if(Z&&n.a.ReflectionTextureEnabled&&(!Z.isReadyOrNotBlocking()||Z.irradianceTexture&&!Z.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&n.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&n.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(n.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(x.getCaps().standardDerivatives&&this._bumpTexture&&n.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&n.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(F,j)||!this.clearCoat.isReadyForSubMesh(F,j,x,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(F,j)||!this.anisotropy.isReadyForSubMesh(F,j)||!this.detailMap.isReadyForSubMesh(F,j)||F._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!x.getCaps().standardDerivatives&&!r.isVerticesDataPresent(e.b.NormalKind)&&(r.createNormals(!0),S.a.Warn("PBRMaterial: Normals have been created for the mesh: "+r.name));var V=f.effect,I=F._areLightsDisposed,X=this._prepareEffect(r,F,this.onCompiled,this.onError,g,null,f.getRenderingMesh().hasThinInstances);if(X)if(this._onEffectCreatedObservable&&(ge.effect=X,ge.subMesh=f,this._onEffectCreatedObservable.notifyObservers(ge)),this.allowShaderHotSwapping&&V&&!X.isReady()){if(X=V,this._rebuildInParallel=!0,F.markAsUnprocessed(),I)return F._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,j.resetCachedMaterial(),f.setEffect(X,F),this.buildUniformLayout();return!f.effect||!f.effect.isReady()?!1:(F._renderId=j.getRenderId(),f.effect._wasPreviouslyReady=!0,!0)},c.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},c.prototype._prepareEffect=function(r,f,g,F,j,x,Z){if(g===void 0&&(g=null),F===void 0&&(F=null),j===void 0&&(j=null),x===void 0&&(x=null),this._prepareDefines(r,f,j,x,Z),!f.isDirty)return null;f.markAsProcessed();var V=this.getScene(),I=V.getEngine(),X=new xn.a,z=0;f.USESPHERICALINVERTEX&&X.addFallback(z++,"USESPHERICALINVERTEX"),f.FOG&&X.addFallback(z,"FOG"),f.SPECULARAA&&X.addFallback(z,"SPECULARAA"),f.POINTSIZE&&X.addFallback(z,"POINTSIZE"),f.LOGARITHMICDEPTH&&X.addFallback(z,"LOGARITHMICDEPTH"),f.PARALLAX&&X.addFallback(z,"PARALLAX"),f.PARALLAXOCCLUSION&&X.addFallback(z++,"PARALLAXOCCLUSION"),z=a.AddFallbacks(f,X,z),z=a.AddFallbacks(f,X,z),z=m.AddFallbacks(f,X,z),z=v.AddFallbacks(f,X,z),f.ENVIRONMENTBRDF&&X.addFallback(z++,"ENVIRONMENTBRDF"),f.TANGENT&&X.addFallback(z++,"TANGENT"),f.BUMP&&X.addFallback(z++,"BUMP"),z=t.a.HandleFallbacksForShadows(f,X,this._maxSimultaneousLights,z++),f.SPECULARTERM&&X.addFallback(z++,"SPECULARTERM"),f.USESPHERICALFROMREFLECTIONMAP&&X.addFallback(z++,"USESPHERICALFROMREFLECTIONMAP"),f.USEIRRADIANCEMAP&&X.addFallback(z++,"USEIRRADIANCEMAP"),f.LIGHTMAP&&X.addFallback(z++,"LIGHTMAP"),f.NORMAL&&X.addFallback(z++,"NORMAL"),f.AMBIENT&&X.addFallback(z++,"AMBIENT"),f.EMISSIVE&&X.addFallback(z++,"EMISSIVE"),f.VERTEXCOLOR&&X.addFallback(z++,"VERTEXCOLOR"),f.MORPHTARGETS&&X.addFallback(z++,"MORPHTARGETS"),f.MULTIVIEW&&X.addFallback(0,"MULTIVIEW");var te=[e.b.PositionKind];f.NORMAL&&te.push(e.b.NormalKind),f.TANGENT&&te.push(e.b.TangentKind),f.UV1&&te.push(e.b.UVKind),f.UV2&&te.push(e.b.UV2Kind),f.VERTEXCOLOR&&te.push(e.b.ColorKind),t.a.PrepareAttributesForBones(te,r,f,X),t.a.PrepareAttributesForInstances(te,f),t.a.PrepareAttributesForMorphTargets(te,r,f);var H="pbr",ie=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],fe=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],Re=["Material","Scene","Mesh"];Se.a.AddUniforms(ie),Se.a.AddSamplers(fe),m.AddUniforms(ie),m.AddSamplers(fe),i.a.AddUniforms(ie),i.a.AddSamplers(fe),a.AddUniforms(ie),a.AddSamplers(fe),v.AddUniforms(ie),v.AddSamplers(fe),C.a.AddUniforms(ie),C.a.AddSamplers(ie),_.a&&(_.a.PrepareUniforms(ie,f),_.a.PrepareSamplers(fe,f)),t.a.PrepareUniformsAndSamplersList({uniformsNames:ie,uniformBuffersNames:Re,samplers:fe,defines:f,maxSimultaneousLights:this._maxSimultaneousLights});var Oe={};this.customShaderNameResolve&&(H=this.customShaderNameResolve(H,ie,Re,fe,f,te,Oe));var Le=f.toString();return I.createEffect(H,{attributes:te,uniformsNames:ie,uniformBuffersNames:Re,samplers:fe,defines:Le,fallbacks:X,onCompiled:g,onError:F,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:f.NUM_MORPH_INFLUENCERS},processFinalCode:Oe.processFinalCode,multiTarget:f.PREPASS},I)},c.prototype._prepareDefines=function(r,f,g,F,j){g===void 0&&(g=null),F===void 0&&(F=null),j===void 0&&(j=!1);var x=this.getScene(),Z=x.getEngine();if(t.a.PrepareDefinesForLights(x,r,f,!0,this._maxSimultaneousLights,this._disableLighting),f._needNormals=!0,t.a.PrepareDefinesForMultiview(x,f),t.a.PrepareDefinesForPrePass(x,f,this.canRenderToMRT),f.METALLICWORKFLOW=this.isMetallicWorkflow(),f._areTexturesDirty){if(f._needUVs=!1,x.texturesEnabled){x.getEngine().getCaps().textureLOD&&(f.LODBASEDMICROSFURACE=!0),this._albedoTexture&&n.a.DiffuseTextureEnabled?(t.a.PrepareDefinesForMergedUV(this._albedoTexture,f,"ALBEDO"),f.GAMMAALBEDO=this._albedoTexture.gammaSpace):f.ALBEDO=!1,this._ambientTexture&&n.a.AmbientTextureEnabled?(t.a.PrepareDefinesForMergedUV(this._ambientTexture,f,"AMBIENT"),f.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):f.AMBIENT=!1,this._opacityTexture&&n.a.OpacityTextureEnabled?(t.a.PrepareDefinesForMergedUV(this._opacityTexture,f,"OPACITY"),f.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):f.OPACITY=!1;var V=this._getReflectionTexture();if(V&&n.a.ReflectionTextureEnabled){switch(f.REFLECTION=!0,f.GAMMAREFLECTION=V.gammaSpace,f.RGBDREFLECTION=V.isRGBD,f.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!V.invertZ:V.invertZ,f.LODINREFLECTIONALPHA=V.lodLevelInAlpha,f.LINEARSPECULARREFLECTION=V.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(f.NUM_SAMPLES=""+this.realTimeFilteringQuality,Z._features.needTypeSuffixInShaderConstants&&(f.NUM_SAMPLES=f.NUM_SAMPLES+"u"),f.REALTIME_FILTERING=!0):f.REALTIME_FILTERING=!1,V.coordinatesMode===L.a.INVCUBIC_MODE&&(f.INVERTCUBICMAP=!0),f.REFLECTIONMAP_3D=V.isCube,f.REFLECTIONMAP_CUBIC=!1,f.REFLECTIONMAP_EXPLICIT=!1,f.REFLECTIONMAP_PLANAR=!1,f.REFLECTIONMAP_PROJECTION=!1,f.REFLECTIONMAP_SKYBOX=!1,f.REFLECTIONMAP_SPHERICAL=!1,f.REFLECTIONMAP_EQUIRECTANGULAR=!1,f.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,f.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,V.coordinatesMode){case L.a.EXPLICIT_MODE:f.REFLECTIONMAP_EXPLICIT=!0;break;case L.a.PLANAR_MODE:f.REFLECTIONMAP_PLANAR=!0;break;case L.a.PROJECTION_MODE:f.REFLECTIONMAP_PROJECTION=!0;break;case L.a.SKYBOX_MODE:f.REFLECTIONMAP_SKYBOX=!0;break;case L.a.SPHERICAL_MODE:f.REFLECTIONMAP_SPHERICAL=!0;break;case L.a.EQUIRECTANGULAR_MODE:f.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case L.a.FIXED_EQUIRECTANGULAR_MODE:f.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case L.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:f.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case L.a.CUBIC_MODE:case L.a.INVCUBIC_MODE:default:f.REFLECTIONMAP_CUBIC=!0,f.USE_LOCAL_REFLECTIONMAP_CUBIC=!!V.boundingBoxSize;break}V.coordinatesMode!==L.a.SKYBOX_MODE&&(V.irradianceTexture?(f.USEIRRADIANCEMAP=!0,f.USESPHERICALFROMREFLECTIONMAP=!1):V.isCube&&(f.USESPHERICALFROMREFLECTIONMAP=!0,f.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||x.getEngine().getCaps().maxVaryingVectors<=8?f.USESPHERICALINVERTEX=!1:f.USESPHERICALINVERTEX=!0))}else f.REFLECTION=!1,f.REFLECTIONMAP_3D=!1,f.REFLECTIONMAP_SPHERICAL=!1,f.REFLECTIONMAP_PLANAR=!1,f.REFLECTIONMAP_CUBIC=!1,f.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,f.REFLECTIONMAP_PROJECTION=!1,f.REFLECTIONMAP_SKYBOX=!1,f.REFLECTIONMAP_EXPLICIT=!1,f.REFLECTIONMAP_EQUIRECTANGULAR=!1,f.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,f.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,f.INVERTCUBICMAP=!1,f.USESPHERICALFROMREFLECTIONMAP=!1,f.USEIRRADIANCEMAP=!1,f.USESPHERICALINVERTEX=!1,f.REFLECTIONMAP_OPPOSITEZ=!1,f.LODINREFLECTIONALPHA=!1,f.GAMMAREFLECTION=!1,f.RGBDREFLECTION=!1,f.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&n.a.LightmapTextureEnabled?(t.a.PrepareDefinesForMergedUV(this._lightmapTexture,f,"LIGHTMAP"),f.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,f.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,f.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):f.LIGHTMAP=!1,this._emissiveTexture&&n.a.EmissiveTextureEnabled?t.a.PrepareDefinesForMergedUV(this._emissiveTexture,f,"EMISSIVE"):f.EMISSIVE=!1,n.a.SpecularTextureEnabled?(this._metallicTexture?(t.a.PrepareDefinesForMergedUV(this._metallicTexture,f,"REFLECTIVITY"),f.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,f.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,f.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,f.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(t.a.PrepareDefinesForMergedUV(this._reflectivityTexture,f,"REFLECTIVITY"),f.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,f.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):f.REFLECTIVITY=!1,this._metallicReflectanceTexture?t.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,f,"METALLIC_REFLECTANCE"):f.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?t.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,f,"MICROSURFACEMAP"):f.MICROSURFACEMAP=!1):(f.REFLECTIVITY=!1,f.MICROSURFACEMAP=!1),x.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&n.a.BumpTextureEnabled&&!this._disableBumpMap?(t.a.PrepareDefinesForMergedUV(this._bumpTexture,f,"BUMP"),this._useParallax&&this._albedoTexture&&n.a.DiffuseTextureEnabled?(f.PARALLAX=!0,f.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):f.PARALLAX=!1,f.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):f.BUMP=!1,this._environmentBRDFTexture&&n.a.ReflectionTextureEnabled?(f.ENVIRONMENTBRDF=!0,f.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(f.ENVIRONMENTBRDF=!1,f.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?f.ALPHAFROMALBEDO=!0:f.ALPHAFROMALBEDO=!1}f.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===c.LIGHTFALLOFF_STANDARD?(f.USEPHYSICALLIGHTFALLOFF=!1,f.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===c.LIGHTFALLOFF_GLTF?(f.USEPHYSICALLIGHTFALLOFF=!1,f.USEGLTFLIGHTFALLOFF=!0):(f.USEPHYSICALLIGHTFALLOFF=!0,f.USEGLTFLIGHTFALLOFF=!1),f.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?f.TWOSIDEDLIGHTING=!0:f.TWOSIDEDLIGHTING=!1,f.SPECULARAA=x.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(f._areTexturesDirty||f._areMiscDirty)&&(f.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),f.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,f.ALPHABLEND=this.needAlphaBlendingForMesh(r),f.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,f.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),f._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(f),f.FORCENORMALFORWARD=this._forceNormalForward,f.RADIANCEOCCLUSION=this._useRadianceOcclusion,f.HORIZONOCCLUSION=this._useHorizonOcclusion,f._areMiscDirty&&(t.a.PrepareDefinesForMisc(r,x,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(r)||this._forceAlphaTest,f),f.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!r.isVerticesDataPresent(e.b.NormalKind),f.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(f,x),this.subSurface.prepareDefines(f,x),this.clearCoat.prepareDefines(f,x),this.anisotropy.prepareDefines(f,r,x),this.brdf.prepareDefines(f),this.sheen.prepareDefines(f,x),t.a.PrepareDefinesForFrameBoundValues(x,Z,f,!!g,F,j),t.a.PrepareDefinesForAttributes(r,f,!0,!0,!0,this._transparencyMode!==c.PBRMATERIAL_OPAQUE)},c.prototype.forceCompilation=function(r,f,g){var F=this,j=Object(l.a)({clipPlane:!1,useInstances:!1},g),x=new Me,Z=this._prepareEffect(r,x,void 0,void 0,j.useInstances,j.clipPlane,r.hasThinInstances);this._onEffectCreatedObservable&&(ge.effect=Z,ge.subMesh=null,this._onEffectCreatedObservable.notifyObservers(ge)),Z.isReady()?f&&f(this):Z.onCompileObservable.add(function(){f&&f(F)})},c.prototype.buildUniformLayout=function(){var r=this._uniformBuffer;r.addUniform("vAlbedoInfos",2),r.addUniform("vAmbientInfos",4),r.addUniform("vOpacityInfos",2),r.addUniform("vEmissiveInfos",2),r.addUniform("vLightmapInfos",2),r.addUniform("vReflectivityInfos",3),r.addUniform("vMicroSurfaceSamplerInfos",2),r.addUniform("vReflectionInfos",2),r.addUniform("vReflectionFilteringInfo",2),r.addUniform("vReflectionPosition",3),r.addUniform("vReflectionSize",3),r.addUniform("vBumpInfos",3),r.addUniform("albedoMatrix",16),r.addUniform("ambientMatrix",16),r.addUniform("opacityMatrix",16),r.addUniform("emissiveMatrix",16),r.addUniform("lightmapMatrix",16),r.addUniform("reflectivityMatrix",16),r.addUniform("microSurfaceSamplerMatrix",16),r.addUniform("bumpMatrix",16),r.addUniform("vTangentSpaceParams",2),r.addUniform("reflectionMatrix",16),r.addUniform("vReflectionColor",3),r.addUniform("vAlbedoColor",4),r.addUniform("vLightingIntensity",4),r.addUniform("vReflectionMicrosurfaceInfos",3),r.addUniform("pointSize",1),r.addUniform("vReflectivityColor",4),r.addUniform("vEmissiveColor",3),r.addUniform("vAmbientColor",3),r.addUniform("vDebugMode",2),r.addUniform("vMetallicReflectanceFactors",4),r.addUniform("vMetallicReflectanceInfos",2),r.addUniform("metallicReflectanceMatrix",16),i.a.PrepareUniformBuffer(r),a.PrepareUniformBuffer(r),v.PrepareUniformBuffer(r),m.PrepareUniformBuffer(r),Se.a.PrepareUniformBuffer(r),r.addUniform("vSphericalL00",3),r.addUniform("vSphericalL1_1",3),r.addUniform("vSphericalL10",3),r.addUniform("vSphericalL11",3),r.addUniform("vSphericalL2_2",3),r.addUniform("vSphericalL2_1",3),r.addUniform("vSphericalL20",3),r.addUniform("vSphericalL21",3),r.addUniform("vSphericalL22",3),r.addUniform("vSphericalX",3),r.addUniform("vSphericalY",3),r.addUniform("vSphericalZ",3),r.addUniform("vSphericalXX_ZZ",3),r.addUniform("vSphericalYY_ZZ",3),r.addUniform("vSphericalZZ",3),r.addUniform("vSphericalXY",3),r.addUniform("vSphericalYZ",3),r.addUniform("vSphericalZX",3),r.create()},c.prototype.unbind=function(){if(this._activeEffect){var r=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),r=!0),this.subSurface.unbind(this._activeEffect)&&(r=!0),r&&this._markAllSubMeshesAsTexturesDirty()}A.prototype.unbind.call(this)},c.prototype.bindForSubMesh=function(r,f,g){var F=this.getScene(),j=g._materialDefines;if(!!j){var x=g.effect;if(!!x){this._activeEffect=x,f.getMeshUniformBuffer().bindToEffect(x,"Mesh"),f.transferToEffect(r),this.prePassConfiguration.bindForSubMesh(this._activeEffect,F,f,r,this.isFrozen),j.OBJECTSPACE_NORMALMAP&&(r.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Z=this._mustRebind(F,x,f.visibility);t.a.BindBonesParameters(f,this._activeEffect,this.prePassConfiguration);var V=null,I=this._uniformBuffer;if(Z){var X=F.getEngine();if(I.bindToEffect(x,"Material"),this.bindViewProjection(x),V=this._getReflectionTexture(),!I.useUbo||!this.isFrozen||!I.isSync){if(F.texturesEnabled){if(this._albedoTexture&&n.a.DiffuseTextureEnabled&&(I.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),t.a.BindTextureMatrix(this._albedoTexture,I,"albedo")),this._ambientTexture&&n.a.AmbientTextureEnabled&&(I.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),t.a.BindTextureMatrix(this._ambientTexture,I,"ambient")),this._opacityTexture&&n.a.OpacityTextureEnabled&&(I.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),t.a.BindTextureMatrix(this._opacityTexture,I,"opacity")),V&&n.a.ReflectionTextureEnabled){if(I.updateMatrix("reflectionMatrix",V.getReflectionTextureMatrix()),I.updateFloat2("vReflectionInfos",V.level,0),V.boundingBoxSize){var z=V;I.updateVector3("vReflectionPosition",z.boundingBoxPosition),I.updateVector3("vReflectionSize",z.boundingBoxSize)}if(this.realTimeFiltering){var te=V.getSize().width;I.updateFloat2("vReflectionFilteringInfo",te,p.a.Log2(te))}if(!j.USEIRRADIANCEMAP){var H=V.sphericalPolynomial;if(j.USESPHERICALFROMREFLECTIONMAP&&H)if(j.SPHERICAL_HARMONICS){var ie=H.preScaledHarmonics;I.updateVector3("vSphericalL00",ie.l00),I.updateVector3("vSphericalL1_1",ie.l1_1),I.updateVector3("vSphericalL10",ie.l10),I.updateVector3("vSphericalL11",ie.l11),I.updateVector3("vSphericalL2_2",ie.l2_2),I.updateVector3("vSphericalL2_1",ie.l2_1),I.updateVector3("vSphericalL20",ie.l20),I.updateVector3("vSphericalL21",ie.l21),I.updateVector3("vSphericalL22",ie.l22)}else I.updateFloat3("vSphericalX",H.x.x,H.x.y,H.x.z),I.updateFloat3("vSphericalY",H.y.x,H.y.y,H.y.z),I.updateFloat3("vSphericalZ",H.z.x,H.z.y,H.z.z),I.updateFloat3("vSphericalXX_ZZ",H.xx.x-H.zz.x,H.xx.y-H.zz.y,H.xx.z-H.zz.z),I.updateFloat3("vSphericalYY_ZZ",H.yy.x-H.zz.x,H.yy.y-H.zz.y,H.yy.z-H.zz.z),I.updateFloat3("vSphericalZZ",H.zz.x,H.zz.y,H.zz.z),I.updateFloat3("vSphericalXY",H.xy.x,H.xy.y,H.xy.z),I.updateFloat3("vSphericalYZ",H.yz.x,H.yz.y,H.yz.z),I.updateFloat3("vSphericalZX",H.zx.x,H.zx.y,H.zx.z)}I.updateFloat3("vReflectionMicrosurfaceInfos",V.getSize().width,V.lodGenerationScale,V.lodGenerationOffset)}this._emissiveTexture&&n.a.EmissiveTextureEnabled&&(I.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),t.a.BindTextureMatrix(this._emissiveTexture,I,"emissive")),this._lightmapTexture&&n.a.LightmapTextureEnabled&&(I.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),t.a.BindTextureMatrix(this._lightmapTexture,I,"lightmap")),n.a.SpecularTextureEnabled&&(this._metallicTexture?(I.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),t.a.BindTextureMatrix(this._metallicTexture,I,"reflectivity")):this._reflectivityTexture&&(I.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),t.a.BindTextureMatrix(this._reflectivityTexture,I,"reflectivity")),this._metallicReflectanceTexture&&(I.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),t.a.BindTextureMatrix(this._metallicReflectanceTexture,I,"metallicReflectance")),this._microSurfaceTexture&&(I.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),t.a.BindTextureMatrix(this._microSurfaceTexture,I,"microSurfaceSampler"))),this._bumpTexture&&X.getCaps().standardDerivatives&&n.a.BumpTextureEnabled&&!this._disableBumpMap&&(I.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),t.a.BindTextureMatrix(this._bumpTexture,I,"bump"),F._mirroredCameraPosition?I.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):I.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&I.updateFloat("pointSize",this.pointSize),j.METALLICWORKFLOW){h.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,h.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,I.updateColor4("vReflectivityColor",h.c.Color3[0],1);var fe=this.subSurface.indexOfRefraction,Re=1,Oe=Math.pow((fe-Re)/(fe+Re),2);this._metallicReflectanceColor.scaleToRef(Oe*this._metallicF0Factor,h.c.Color3[0]);var Le=this._metallicF0Factor;I.updateColor4("vMetallicReflectanceFactors",h.c.Color3[0],Le)}else I.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);I.updateColor3("vEmissiveColor",n.a.EmissiveTextureEnabled?this._emissiveColor:h.a.BlackReadOnly),I.updateColor3("vReflectionColor",this._reflectionColor),!j.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?I.updateColor4("vAlbedoColor",this._albedoColor,1):I.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*F.environmentIntensity,this._lightingInfos.w=this._specularIntensity,I.updateVector4("vLightingIntensity",this._lightingInfos),F.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),I.updateColor3("vAmbientColor",this._globalAmbientColor),I.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}F.texturesEnabled&&(this._albedoTexture&&n.a.DiffuseTextureEnabled&&I.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&n.a.AmbientTextureEnabled&&I.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&n.a.OpacityTextureEnabled&&I.setTexture("opacitySampler",this._opacityTexture),V&&n.a.ReflectionTextureEnabled&&(j.LODBASEDMICROSFURACE?I.setTexture("reflectionSampler",V):(I.setTexture("reflectionSampler",V._lodTextureMid||V),I.setTexture("reflectionSamplerLow",V._lodTextureLow||V),I.setTexture("reflectionSamplerHigh",V._lodTextureHigh||V)),j.USEIRRADIANCEMAP&&I.setTexture("irradianceSampler",V.irradianceTexture)),j.ENVIRONMENTBRDF&&I.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&n.a.EmissiveTextureEnabled&&I.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&n.a.LightmapTextureEnabled&&I.setTexture("lightmapSampler",this._lightmapTexture),n.a.SpecularTextureEnabled&&(this._metallicTexture?I.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&I.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&I.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&I.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&X.getCaps().standardDerivatives&&n.a.BumpTextureEnabled&&!this._disableBumpMap&&I.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(I,F,this.isFrozen),this.subSurface.bindForSubMesh(I,F,X,this.isFrozen,j.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(I,F,X,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,g),this.anisotropy.bindForSubMesh(I,F,this.isFrozen),this.sheen.bindForSubMesh(I,F,this.isFrozen,g),t.a.BindClipPlane(this._activeEffect,F),this.bindEyePosition(x)}(Z||!this.isFrozen)&&(F.lightsEnabled&&!this._disableLighting&&t.a.BindLights(F,f,this._activeEffect,j,this._maxSimultaneousLights,this._rebuildInParallel),(F.fogEnabled&&f.applyFog&&F.fogMode!==R.a.FOGMODE_NONE||V)&&this.bindView(x),t.a.BindFogParameters(F,f,this._activeEffect,!0),j.NUM_MORPH_INFLUENCERS&&t.a.BindMorphTargetParameters(f,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),t.a.BindLogDepth(j,this._activeEffect,F)),this._afterBind(f,this._activeEffect),I.update()}}},c.prototype.getAnimatables=function(){var r=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&r.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&r.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&r.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&r.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&r.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?r.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&r.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&r.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&r.push(this._lightmapTexture),this.detailMap.getAnimatables(r),this.subSurface.getAnimatables(r),this.clearCoat.getAnimatables(r),this.sheen.getAnimatables(r),this.anisotropy.getAnimatables(r),r},c.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},c.prototype.getActiveTextures=function(){var r=A.prototype.getActiveTextures.call(this);return this._albedoTexture&&r.push(this._albedoTexture),this._ambientTexture&&r.push(this._ambientTexture),this._opacityTexture&&r.push(this._opacityTexture),this._reflectionTexture&&r.push(this._reflectionTexture),this._emissiveTexture&&r.push(this._emissiveTexture),this._reflectivityTexture&&r.push(this._reflectivityTexture),this._metallicTexture&&r.push(this._metallicTexture),this._metallicReflectanceTexture&&r.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&r.push(this._microSurfaceTexture),this._bumpTexture&&r.push(this._bumpTexture),this._lightmapTexture&&r.push(this._lightmapTexture),this.detailMap.getActiveTextures(r),this.subSurface.getActiveTextures(r),this.clearCoat.getActiveTextures(r),this.sheen.getActiveTextures(r),this.anisotropy.getActiveTextures(r),r},c.prototype.hasTexture=function(r){return A.prototype.hasTexture.call(this,r)||this._albedoTexture===r||this._ambientTexture===r||this._opacityTexture===r||this._reflectionTexture===r||this._reflectivityTexture===r||this._metallicTexture===r||this._metallicReflectanceTexture===r||this._microSurfaceTexture===r||this._bumpTexture===r||this._lightmapTexture===r?!0:this.detailMap.hasTexture(r)||this.subSurface.hasTexture(r)||this.clearCoat.hasTexture(r)||this.sheen.hasTexture(r)||this.anisotropy.hasTexture(r)},c.prototype.setPrePassRenderer=function(r){if(this.subSurface.isScatteringEnabled){var f=this.getScene().enableSubSurfaceForPrePass();return f&&(f.enabled=!0),!0}return!1},c.prototype.dispose=function(r,f){var g,F,j,x,Z,V,I,X,z,te,H;f&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(g=this._albedoTexture)===null||g===void 0||g.dispose(),(F=this._ambientTexture)===null||F===void 0||F.dispose(),(j=this._opacityTexture)===null||j===void 0||j.dispose(),(x=this._reflectionTexture)===null||x===void 0||x.dispose(),(Z=this._emissiveTexture)===null||Z===void 0||Z.dispose(),(V=this._metallicTexture)===null||V===void 0||V.dispose(),(I=this._reflectivityTexture)===null||I===void 0||I.dispose(),(X=this._bumpTexture)===null||X===void 0||X.dispose(),(z=this._lightmapTexture)===null||z===void 0||z.dispose(),(te=this._metallicReflectanceTexture)===null||te===void 0||te.dispose(),(H=this._microSurfaceTexture)===null||H===void 0||H.dispose()),this.detailMap.dispose(f),this.subSurface.dispose(f),this.clearCoat.dispose(f),this.sheen.dispose(f),this.anisotropy.dispose(f),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),A.prototype.dispose.call(this,r,f)},c.PBRMATERIAL_OPAQUE=D.a.MATERIAL_OPAQUE,c.PBRMATERIAL_ALPHATEST=D.a.MATERIAL_ALPHATEST,c.PBRMATERIAL_ALPHABLEND=D.a.MATERIAL_ALPHABLEND,c.PBRMATERIAL_ALPHATESTANDBLEND=D.a.MATERIAL_ALPHATESTANDBLEND,c.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,c.LIGHTFALLOFF_PHYSICAL=0,c.LIGHTFALLOFF_GLTF=1,c.LIGHTFALLOFF_STANDARD=2,Object(l.c)([Object(o.i)()],c.prototype,"_imageProcessingConfiguration",void 0),Object(l.c)([Object(o.b)("_markAllSubMeshesAsMiscDirty")],c.prototype,"debugMode",void 0),Object(l.c)([Object(o.c)()],c.prototype,"useLogarithmicDepth",null),c}(N.a)},533:function(Q,U,u){"use strict";u.d(U,"a",function(){return d});var l=u(434),o=u(439),S=u(514),E=u(441),T=u(529),R=u(437),d=function(e){Object(l.d)(i,e);function i(n,t){var a=e.call(this,n,t)||this;return a.directIntensity=1,a.emissiveIntensity=1,a.environmentIntensity=1,a.specularIntensity=1,a.disableBumpMap=!1,a.ambientTextureStrength=1,a.ambientTextureImpactOnAnalyticalLights=i.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,a.metallicF0Factor=1,a.metallicReflectanceColor=E.a.White(),a.ambientColor=new E.a(0,0,0),a.albedoColor=new E.a(1,1,1),a.reflectivityColor=new E.a(1,1,1),a.reflectionColor=new E.a(1,1,1),a.emissiveColor=new E.a(0,0,0),a.microSurface=1,a.useLightmapAsShadowmap=!1,a.useAlphaFromAlbedoTexture=!1,a.forceAlphaTest=!1,a.alphaCutOff=.4,a.useSpecularOverAlpha=!0,a.useMicroSurfaceFromReflectivityMapAlpha=!1,a.useRoughnessFromMetallicTextureAlpha=!0,a.useRoughnessFromMetallicTextureGreen=!1,a.useMetallnessFromMetallicTextureBlue=!1,a.useAmbientOcclusionFromMetallicTextureRed=!1,a.useAmbientInGrayScale=!1,a.useAutoMicroSurfaceFromReflectivityMap=!1,a.useRadianceOverAlpha=!0,a.useObjectSpaceNormalMap=!1,a.useParallax=!1,a.useParallaxOcclusion=!1,a.parallaxScaleBias=.05,a.disableLighting=!1,a.forceIrradianceInFragment=!1,a.maxSimultaneousLights=4,a.invertNormalMapX=!1,a.invertNormalMapY=!1,a.twoSidedLighting=!1,a.useAlphaFresnel=!1,a.useLinearAlphaFresnel=!1,a.environmentBRDFTexture=null,a.forceNormalForward=!1,a.enableSpecularAntiAliasing=!1,a.useHorizonOcclusion=!0,a.useRadianceOcclusion=!0,a.unlit=!1,a._environmentBRDFTexture=S.a.GetEnvironmentBRDFTexture(t),a}return Object.defineProperty(i.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(n){this.subSurface.refractionTexture=n,n?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(n){this.subSurface.indexOfRefraction=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(n){this.subSurface.invertRefractionY=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(n){this.subSurface.linkRefractionWithTransparency=n,n&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===T.a.LIGHTFALLOFF_PHYSICAL},set:function(n){n!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),n?this._lightFalloff=T.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=T.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===T.a.LIGHTFALLOFF_GLTF},set:function(n){n!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),n?this._lightFalloff=T.a.LIGHTFALLOFF_GLTF:this._lightFalloff=T.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(n){this._attachImageProcessingConfiguration(n),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(n){this.imageProcessingConfiguration.colorCurvesEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(n){this.imageProcessingConfiguration.colorGradingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(n){this._imageProcessingConfiguration.toneMappingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(n){this._imageProcessingConfiguration.exposure=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(n){this._imageProcessingConfiguration.contrast=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(n){this._imageProcessingConfiguration.colorGradingTexture=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(n){this._imageProcessingConfiguration.colorCurves=n},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"PBRMaterial"},i.prototype.clone=function(n){var t=this,a=o.a.Clone(function(){return new i(n,t.getScene())},this);return a.id=n,a.name=n,this.clearCoat.copyTo(a.clearCoat),this.anisotropy.copyTo(a.anisotropy),this.brdf.copyTo(a.brdf),this.sheen.copyTo(a.sheen),this.subSurface.copyTo(a.subSurface),a},i.prototype.serialize=function(){var n=o.a.Serialize(this);return n.customType="BABYLON.PBRMaterial",n.clearCoat=this.clearCoat.serialize(),n.anisotropy=this.anisotropy.serialize(),n.brdf=this.brdf.serialize(),n.sheen=this.sheen.serialize(),n.subSurface=this.subSurface.serialize(),n},i.Parse=function(n,t,a){var s=o.a.Parse(function(){return new i(n.name,t)},n,t,a);return n.clearCoat&&s.clearCoat.parse(n.clearCoat,t,a),n.anisotropy&&s.anisotropy.parse(n.anisotropy,t,a),n.brdf&&s.brdf.parse(n.brdf,t,a),n.sheen&&s.sheen.parse(n.sheen,t,a),n.subSurface&&s.subSurface.parse(n.subSurface,t,a),s},i.PBRMATERIAL_OPAQUE=T.a.PBRMATERIAL_OPAQUE,i.PBRMATERIAL_ALPHATEST=T.a.PBRMATERIAL_ALPHATEST,i.PBRMATERIAL_ALPHABLEND=T.a.PBRMATERIAL_ALPHABLEND,i.PBRMATERIAL_ALPHATESTANDBLEND=T.a.PBRMATERIAL_ALPHATESTANDBLEND,i.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=T.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"directIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"emissiveIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"environmentIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"specularIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"disableBumpMap",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"albedoTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"ambientTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"ambientTextureStrength",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],i.prototype,"opacityTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"reflectionTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"emissiveTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"reflectivityTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"metallicTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"metallic",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"roughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"metallicF0Factor",void 0),Object(l.c)([Object(o.e)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"metallicReflectanceColor",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"metallicReflectanceTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"microSurfaceTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"bumpTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty",null)],i.prototype,"lightmapTexture",void 0),Object(l.c)([Object(o.e)("ambient"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"ambientColor",void 0),Object(l.c)([Object(o.e)("albedo"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"albedoColor",void 0),Object(l.c)([Object(o.e)("reflectivity"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"reflectivityColor",void 0),Object(l.c)([Object(o.e)("reflection"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"reflectionColor",void 0),Object(l.c)([Object(o.e)("emissive"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"emissiveColor",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"microSurface",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useLightmapAsShadowmap",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],i.prototype,"useAlphaFromAlbedoTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],i.prototype,"forceAlphaTest",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],i.prototype,"alphaCutOff",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useSpecularOverAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useAmbientInGrayScale",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(l.c)([Object(o.c)()],i.prototype,"usePhysicalLightFalloff",null),Object(l.c)([Object(o.c)()],i.prototype,"useGLTFLightFalloff",null),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useRadianceOverAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useObjectSpaceNormalMap",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useParallax",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useParallaxOcclusion",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"parallaxScaleBias",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsLightsDirty")],i.prototype,"disableLighting",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"forceIrradianceInFragment",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsLightsDirty")],i.prototype,"maxSimultaneousLights",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"invertNormalMapX",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"invertNormalMapY",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"twoSidedLighting",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useAlphaFresnel",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useLinearAlphaFresnel",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"environmentBRDFTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"forceNormalForward",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"enableSpecularAntiAliasing",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useHorizonOcclusion",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],i.prototype,"useRadianceOcclusion",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],i.prototype,"unlit",void 0),i}(T.a);R.a.RegisteredTypes["BABYLON.PBRMaterial"]=d},534:function(Q,U,u){"use strict";var l=u(435),o="postprocessVertexShader",S=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[o]=S;var E={name:o,shader:S}},538:function(Q,U,u){"use strict";u.d(U,"a",function(){return T});var l=u(434),o=u(442),S=u(458),E=u(574),T=function(R){Object(l.d)(d,R);function d(e,i,n,t,a){var s=this,h=a&&a.generateMipMaps?a.generateMipMaps:!1,v=a&&a.generateDepthTexture?a.generateDepthTexture:!1,p=!a||a.doNotChangeAspectRatio===void 0?!0:a.doNotChangeAspectRatio,m=a&&a.drawOnlyOnFirstAttachmentByDefault?a.drawOnlyOnFirstAttachmentByDefault:!1;if(s=R.call(this,e,i,t,h,p,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!s.isSupported){s.dispose();return}var C=[],_=[];s._initTypes(n,C,_,a);var D=!a||a.generateDepthBuffer===void 0?!0:a.generateDepthBuffer,M=!a||a.generateStencilBuffer===void 0?!1:a.generateStencilBuffer;return s._size=i,s._multiRenderTargetOptions={samplingModes:_,generateMipMaps:h,generateDepthBuffer:D,generateStencilBuffer:M,generateDepthTexture:v,types:C,textureCount:n},s._count=n,s._drawOnlyOnFirstAttachmentByDefault=m,n>0&&(s._createInternalTextures(),s._createTextures()),s}return Object.defineProperty(d.prototype,"isSupported",{get:function(){var e,i;return(i=(e=this._engine)===null||e===void 0?void 0:e.getCaps().drawBuffersExtension)!==null&&i!==void 0?i:!1},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"wrapU",{set:function(e){if(this._textures)for(var i=0;i<this._textures.length;i++)this._textures[i].wrapU=e},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"wrapV",{set:function(e){if(this._textures)for(var i=0;i<this._textures.length;i++)this._textures[i].wrapV=e},enumerable:!1,configurable:!0}),d.prototype._initTypes=function(e,i,n,t){for(var a=0;a<e;a++)t&&t.types&&t.types[a]!==void 0?i.push(t.types[a]):i.push(t&&t.defaultType?t.defaultType:0),t&&t.samplingModes&&t.samplingModes[a]!==void 0?n.push(t.samplingModes[a]):n.push(o.a.BILINEAR_SAMPLINGMODE)},d.prototype._rebuild=function(e){if(e===void 0&&(e=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),e&&this._createTextures();for(var i=0;i<this._internalTextures.length;i++){var n=this._textures[i];n._texture=this._internalTextures[i]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},d.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},d.prototype._createTextures=function(){this._textures=[];for(var e=0;e<this._internalTextures.length;e++){var i=new o.a(null,this.getScene());i._texture=this._internalTextures[e],this._textures.push(i)}},d.prototype.replaceTexture=function(e,i){e._texture&&(this._textures[i]=e,this._internalTextures[i]=e._texture,i===0&&(this._texture=this._internalTextures[i]))},Object.defineProperty(d.prototype,"samples",{get:function(){return this._samples},set:function(e){this._samples!==e&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,e):this._samples=e)},enumerable:!1,configurable:!0}),d.prototype.resize=function(e){this._size=e,this._rebuild()},d.prototype.updateCount=function(e,i){this._multiRenderTargetOptions.textureCount=e,this._count=e;var n=[],t=[];this._initTypes(e,n,t,i),this._multiRenderTargetOptions.types=n,this._multiRenderTargetOptions.samplingModes=t,this._rebuild(!0)},d.prototype.unbindFrameBuffer=function(e,i){var n=this;e.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){n.onAfterRenderObservable.notifyObservers(i)})},d.prototype.dispose=function(){this.releaseInternalTextures(),R.prototype.dispose.call(this)},d.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var e=this._internalTextures.length-1;e>=0;e--)this._internalTextures[e]!==void 0&&(this._internalTextures[e].dispose(),this._internalTextures.splice(e,1))},d}(S.a)},545:function(Q,U,u){"use strict";u.d(U,"a",function(){return T});var l=u(444),o=u(625),S=u(500),E=u(566),T=function(){function R(){}return R.ExpandRGBDTexture=function(d){var e=d._texture;if(!(!e||!d.isRGBD)){var i=e.getEngine(),n=i.getCaps(),t=!1;n.textureHalfFloatRender&&n.textureHalfFloatLinearFiltering?(t=!0,e.type=2):n.textureFloatRender&&n.textureFloatLinearFiltering&&(t=!0,e.type=1),t&&(e.isReady=!1,e._isRGBD=!1,e.invertY=!1),d.onLoadObservable.addOnce(function(){if(t){var a=new l.a("rgbdDecode","rgbdDecode",null,null,1,null,3,i,!1,void 0,e.type,void 0,null,!1),s=i.createRenderTargetTexture(e.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:e.samplingMode,type:e.type,format:5});a.getEffect().executeWhenCompiled(function(){a.onApply=function(h){h._bindTexture("textureSampler",e),h.setFloat2("scale",1,1)},d.getScene().postProcessManager.directRender([a],s,!0),i.restoreDefaultFramebuffer(),i._releaseTexture(e),i._releaseFramebufferObjects(s),a&&a.dispose(),s._swapAndDie(e),e.isReady=!0})}})}},R.EncodeTextureToRGBD=function(d,e,i){return i===void 0&&(i=0),E.a.ApplyPostProcess("rgbdEncode",d,e,i,1,5)},R}()},549:function(Q,U,u){"use strict";u.d(U,"a",function(){return o});const l=()=>!!document.createElement("canvas").getContext("webgl2"),o=()=>l()?"webgl2":"webgl"},555:function(Q,U,u){"use strict";var l=u(446),o=u(447),S=u(436);l.a.prototype.thinInstanceAdd=function(E,T){T===void 0&&(T=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(E)?E.length:1);var R=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(E))for(var d=0;d<E.length;++d)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,E[d],d===E.length-1&&T);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,E,T);return R},l.a.prototype.thinInstanceAddSelf=function(E){return E===void 0&&(E=!0),this.thinInstanceAdd(S.a.IdentityReadOnly,E)},l.a.prototype.thinInstanceRegisterAttribute=function(E,T){this.removeVerticesData(E),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[E]=T,this._userThinInstanceBuffersStorage.sizes[E]=T*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[E]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[E]),this._userThinInstanceBuffersStorage.vertexBuffers[E]=new o.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[E],E,!0,!1,T,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[E])},l.a.prototype.thinInstanceSetMatrixAt=function(E,T,R){if(R===void 0&&(R=!0),!this._thinInstanceDataStorage.matrixData||E>=this._thinInstanceDataStorage.instancesCount)return!1;var d=this._thinInstanceDataStorage.matrixData;return T.copyToArray(d,E*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[E]=T),R&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},l.a.prototype.thinInstanceSetAttributeAt=function(E,T,R,d){return d===void 0&&(d=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[E]||T>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(E,0),this._userThinInstanceBuffersStorage.data[E].set(R,T*this._userThinInstanceBuffersStorage.strides[E]),d&&this.thinInstanceBufferUpdated(E),!0)},Object.defineProperty(l.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(E){var T,R,d=((R=(T=this._thinInstanceDataStorage.matrixData)===null||T===void 0?void 0:T.length)!==null&&R!==void 0?R:0)/16;E<=d&&(this._thinInstanceDataStorage.instancesCount=E)},enumerable:!0,configurable:!0}),l.a.prototype.thinInstanceSetBuffer=function(E,T,R,d){var e,i;if(R===void 0&&(R=0),d===void 0&&(d=!1),R=R||16,E==="matrix")if((e=this._thinInstanceDataStorage.matrixBuffer)===null||e===void 0||e.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=T?T.length:32*R,this._thinInstanceDataStorage.matrixData=T,this._thinInstanceDataStorage.worldMatrices=null,T!==null){this._thinInstanceDataStorage.instancesCount=T.length/R;var n=new o.a(this.getEngine(),T,!d,R,!1,!0);this._thinInstanceDataStorage.matrixBuffer=n,this.setVerticesBuffer(n.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(n.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(n.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(n.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else T===null?((i=this._userThinInstanceBuffersStorage)===null||i===void 0?void 0:i.data[E])&&(this.removeVerticesData(E),delete this._userThinInstanceBuffersStorage.data[E],delete this._userThinInstanceBuffersStorage.strides[E],delete this._userThinInstanceBuffersStorage.sizes[E],delete this._userThinInstanceBuffersStorage.vertexBuffers[E]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[E]=T,this._userThinInstanceBuffersStorage.strides[E]=R,this._userThinInstanceBuffersStorage.sizes[E]=T.length,this._userThinInstanceBuffersStorage.vertexBuffers[E]=new o.b(this.getEngine(),T,E,!d,!1,R,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[E]))},l.a.prototype.thinInstanceBufferUpdated=function(E){var T;E==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((T=this._userThinInstanceBuffersStorage)===null||T===void 0?void 0:T.vertexBuffers[E])&&this._userThinInstanceBuffersStorage.vertexBuffers[E].updateDirectly(this._userThinInstanceBuffersStorage.data[E],0)},l.a.prototype.thinInstancePartialBufferUpdate=function(E,T,R){var d;E==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(T,R):((d=this._userThinInstanceBuffersStorage)===null||d===void 0?void 0:d.vertexBuffers[E])&&this._userThinInstanceBuffersStorage.vertexBuffers[E].updateDirectly(T,R)},l.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var E=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var T=0;T<this._thinInstanceDataStorage.instancesCount;++T)this._thinInstanceDataStorage.worldMatrices[T]=S.a.FromArray(E,T*16)}return this._thinInstanceDataStorage.worldMatrices},l.a.prototype.thinInstanceRefreshBoundingInfo=function(E){if(E===void 0&&(E=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var T=this._thinInstanceDataStorage.boundingVectors;E&&(T.length=0,this.refreshBoundingInfo(!0));var R=this.getBoundingInfo(),d=this._thinInstanceDataStorage.matrixData;if(T.length===0)for(var e=0;e<R.boundingBox.vectors.length;++e)T.push(R.boundingBox.vectors[e].clone());S.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),S.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var i=0;i<this._thinInstanceDataStorage.instancesCount;++i){S.a.FromArrayToRef(d,i*16,S.c.Matrix[0]);for(var e=0;e<T.length;++e)S.e.TransformCoordinatesToRef(T[e],S.c.Matrix[0],S.c.Vector3[2]),S.c.Vector3[0].minimizeInPlace(S.c.Vector3[2]),S.c.Vector3[1].maximizeInPlace(S.c.Vector3[2])}R.reConstruct(S.c.Vector3[0],S.c.Vector3[1]),this._updateBoundingInfo()}},l.a.prototype._thinInstanceUpdateBufferSize=function(E,T){var R,d;T===void 0&&(T=1);var e=E==="matrix";if(!(!e&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[E]))){for(var i=e?16:this._userThinInstanceBuffersStorage.strides[E],n=e?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[E],t=e?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[E],a=(this._thinInstanceDataStorage.instancesCount+T)*i,s=n;s<a;)s*=2;if(!t||n!=s){if(!t)t=new Float32Array(s);else{var h=new Float32Array(s);h.set(t,0),t=h}if(e){(R=this._thinInstanceDataStorage.matrixBuffer)===null||R===void 0||R.dispose();var v=new o.a(this.getEngine(),t,!0,i,!1,!0);this._thinInstanceDataStorage.matrixBuffer=v,this._thinInstanceDataStorage.matrixData=t,this._thinInstanceDataStorage.matrixBufferSize=s,this.setVerticesBuffer(v.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(v.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(v.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(v.createVertexBuffer("world3",12,4))}else(d=this._userThinInstanceBuffersStorage.vertexBuffers[E])===null||d===void 0||d.dispose(),this._userThinInstanceBuffersStorage.data[E]=t,this._userThinInstanceBuffersStorage.sizes[E]=s,this._userThinInstanceBuffersStorage.vertexBuffers[E]=new o.b(this.getEngine(),t,E,!0,!1,i,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[E])}}},l.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},l.a.prototype._disposeThinInstanceSpecificData=function(){var E;((E=this._thinInstanceDataStorage)===null||E===void 0?void 0:E.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},566:function(Q,U,u){"use strict";u.d(U,"a",function(){return T});var l=u(442),o=u(458),S=u(486),E=u(444),T=function(){function R(){}return R.CreateResizedCopy=function(d,e,i,n){n===void 0&&(n=!0);var t=d.getScene(),a=t.getEngine(),s=new o.a("resized"+d.name,{width:e,height:i},t,!d.noMipmap,!0,d._texture.type,!1,d.samplingMode,!1);s.wrapU=d.wrapU,s.wrapV=d.wrapV,s.uOffset=d.uOffset,s.vOffset=d.vOffset,s.uScale=d.uScale,s.vScale=d.vScale,s.uAng=d.uAng,s.vAng=d.vAng,s.wAng=d.wAng,s.coordinatesIndex=d.coordinatesIndex,s.level=d.level,s.anisotropicFilteringLevel=d.anisotropicFilteringLevel,s._texture.isReady=!1,d.wrapU=l.a.CLAMP_ADDRESSMODE,d.wrapV=l.a.CLAMP_ADDRESSMODE;var h=new S.b("pass",1,null,n?l.a.BILINEAR_SAMPLINGMODE:l.a.NEAREST_SAMPLINGMODE,a,!1,0);return h.getEffect().executeWhenCompiled(function(){h.onApply=function(p){p.setTexture("textureSampler",d)};var v=s.getInternalTexture();v&&(t.postProcessManager.directRender([h],v),a.unBindFramebuffer(v),s.disposeFramebufferObjects(),h.dispose(),v.isReady=!0)}),s},R.ApplyPostProcess=function(d,e,i,n,t,a){var s=e.getEngine();return e.isReady=!1,t=t!=null?t:e.samplingMode,n=n!=null?n:e.type,a=a!=null?a:e.format,n===-1&&(n=0),new Promise(function(h){var v=new E.a("postprocess",d,null,null,1,null,t,s,!1,void 0,n,void 0,null,!1,a),p=s.createRenderTargetTexture({width:e.width,height:e.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:t,type:n,format:a});v.getEffect().executeWhenCompiled(function(){v.onApply=function(m){m._bindTexture("textureSampler",e),m.setFloat2("scale",1,1)},i.postProcessManager.directRender([v],p,!0),s.restoreDefaultFramebuffer(),s._releaseTexture(e),s._releaseFramebufferObjects(p),v&&v.dispose(),p._swapAndDie(e),e.type=n,e.format=5,e.isReady=!0,h(e)})})},R}()},574:function(Q,U,u){"use strict";var l=u(456),o=u(440),S=u(467);S.a.prototype.restoreSingleAttachment=function(){var E=this._gl;this.bindAttachments([E.BACK])},S.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var E=this._gl;this.bindAttachments([E.COLOR_ATTACHMENT0])},S.a.prototype.buildTextureLayout=function(E){for(var T=this._gl,R=[],d=0;d<E.length;d++)E[d]?R.push(T["COLOR_ATTACHMENT"+d]):R.push(T.NONE);return R},S.a.prototype.bindAttachments=function(E){var T=this._gl;T.drawBuffers(E)},S.a.prototype.clearAttachments=function(E,T,R,d,e){if(E.length!==0){var i=this._gl;i.drawBuffers([E[0]]),this.clear(T,T!==null,d,e);var n=E[0];E[0]=i.NONE,i.drawBuffers(E),this.clear(R,R!==null,!1,!1),E[0]=n}},S.a.prototype.unBindMultiColorAttachmentFramebuffer=function(E,T,R){T===void 0&&(T=!1),this._currentRenderTarget=null;var d=this._gl,e=E[0]._attachments,i=e.length;if(E[0]._MSAAFramebuffer){d.bindFramebuffer(d.READ_FRAMEBUFFER,E[0]._MSAAFramebuffer),d.bindFramebuffer(d.DRAW_FRAMEBUFFER,E[0]._framebuffer);for(var n=0;n<i;n++){for(var t=E[n],a=0;a<i;a++)e[a]=d.NONE;e[n]=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+n:"COLOR_ATTACHMENT"+n+"_WEBGL"],d.readBuffer(e[n]),d.drawBuffers(e),d.blitFramebuffer(0,0,t.width,t.height,0,0,t.width,t.height,d.COLOR_BUFFER_BIT,d.NEAREST)}for(var n=0;n<i;n++)e[n]=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+n:"COLOR_ATTACHMENT"+n+"_WEBGL"];d.drawBuffers(e)}for(var n=0;n<i;n++){var t=E[n];t.generateMipMaps&&!T&&!t.isCube&&(this._bindTextureDirectly(d.TEXTURE_2D,t,!0),d.generateMipmap(d.TEXTURE_2D),this._bindTextureDirectly(d.TEXTURE_2D,null))}R&&(E[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(E[0]._framebuffer),R()),this._bindUnboundFramebuffer(null)},S.a.prototype.createMultipleRenderTarget=function(E,T,R){R===void 0&&(R=!0);var d=!1,e=!0,i=!1,n=!1,t=1,a=0,s=3,h=new Array,v=new Array;T!==void 0&&(d=T.generateMipMaps===void 0?!1:T.generateMipMaps,e=T.generateDepthBuffer===void 0?!0:T.generateDepthBuffer,i=T.generateStencilBuffer===void 0?!1:T.generateStencilBuffer,n=T.generateDepthTexture===void 0?!1:T.generateDepthTexture,t=T.textureCount||1,T.types&&(h=T.types),T.samplingModes&&(v=T.samplingModes));var p=this._gl,m=p.createFramebuffer();this._bindUnboundFramebuffer(m);for(var C=E.width||E,_=E.height||E,D=[],M=[],N=this._setupFramebufferDepthAttachments(i,e,C,_),L=0;L<t;L++){var B=v[L]||s,P=h[L]||a;(P===1&&!this._caps.textureFloatLinearFiltering||P===2&&!this._caps.textureHalfFloatLinearFiltering)&&(B=1);var G=this._getSamplingParameters(B,d);P===1&&!this._caps.textureFloat&&(P=0,o.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var y=new l.a(this,l.b.MultiRenderTarget),K=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+L:"COLOR_ATTACHMENT"+L+"_WEBGL"];D.push(y),M.push(K),p.activeTexture(p["TEXTURE"+L]),p.bindTexture(p.TEXTURE_2D,y._hardwareTexture.underlyingResource),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,G.mag),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,G.min),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texImage2D(p.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(P),C,_,0,p.RGBA,this._getWebGLTextureType(P),null),p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,K,p.TEXTURE_2D,y._hardwareTexture.underlyingResource,0),d&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(p.TEXTURE_2D,null),y._framebuffer=m,y._depthStencilBuffer=N,y.baseWidth=C,y.baseHeight=_,y.width=C,y.height=_,y.isReady=!0,y.samples=1,y.generateMipMaps=d,y.samplingMode=B,y.type=P,y._generateDepthBuffer=e,y._generateStencilBuffer=i,y._attachments=M,y._textureArray=D,this._internalTexturesCache.push(y)}if(n&&this._caps.depthTextureExtension){var b=new l.a(this,l.b.MultiRenderTarget);p.activeTexture(p.TEXTURE0),p.bindTexture(p.TEXTURE_2D,b._hardwareTexture.underlyingResource),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texImage2D(p.TEXTURE_2D,0,this.webGLVersion<2?p.DEPTH_COMPONENT:p.DEPTH_COMPONENT16,C,_,0,p.DEPTH_COMPONENT,p.UNSIGNED_SHORT,null),p.framebufferTexture2D(p.FRAMEBUFFER,p.DEPTH_ATTACHMENT,p.TEXTURE_2D,b._hardwareTexture.underlyingResource,0),b._framebuffer=m,b.baseWidth=C,b.baseHeight=_,b.width=C,b.height=_,b.isReady=!0,b.samples=1,b.generateMipMaps=d,b.samplingMode=p.NEAREST,b._generateDepthBuffer=e,b._generateStencilBuffer=i,D.push(b),this._internalTexturesCache.push(b)}return R&&p.drawBuffers(M),this._bindUnboundFramebuffer(null),this.resetTextureCache(),D},S.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(E,T,R){if(R===void 0&&(R=!0),this.webGLVersion<2||!E)return 1;if(E[0].samples===T)return T;var d=E[0]._attachments.length;if(d===0)return 1;var e=this._gl;T=Math.min(T,this.getCaps().maxMSAASamples),E[0]._depthStencilBuffer&&(e.deleteRenderbuffer(E[0]._depthStencilBuffer),E[0]._depthStencilBuffer=null),E[0]._MSAAFramebuffer&&(e.deleteFramebuffer(E[0]._MSAAFramebuffer),E[0]._MSAAFramebuffer=null);for(var i=0;i<d;i++)E[i]._MSAARenderBuffer&&(e.deleteRenderbuffer(E[i]._MSAARenderBuffer),E[i]._MSAARenderBuffer=null);if(T>1&&e.renderbufferStorageMultisample){var n=e.createFramebuffer();if(!n)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(n);for(var t=this._setupFramebufferDepthAttachments(E[0]._generateStencilBuffer,E[0]._generateDepthBuffer,E[0].width,E[0].height,T),a=[],i=0;i<d;i++){var s=E[i],h=e[this.webGLVersion>1?"COLOR_ATTACHMENT"+i:"COLOR_ATTACHMENT"+i+"_WEBGL"],v=e.createRenderbuffer();if(!v)throw new Error("Unable to create multi sampled framebuffer");e.bindRenderbuffer(e.RENDERBUFFER,v),e.renderbufferStorageMultisample(e.RENDERBUFFER,T,this._getRGBAMultiSampleBufferFormat(s.type),s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,h,e.RENDERBUFFER,v),s._MSAAFramebuffer=n,s._MSAARenderBuffer=v,s.samples=T,s._depthStencilBuffer=t,e.bindRenderbuffer(e.RENDERBUFFER,null),a.push(h)}R&&e.drawBuffers(a)}else this._bindUnboundFramebuffer(E[0]._framebuffer);return this._bindUnboundFramebuffer(null),T}},598:function(Q,U,u){"use strict";u.d(U,"a",function(){return i});var l=u(434),o=u(538),S=u(518),E=function(n){Object(l.d)(t,n);function t(a,s,h,v,p,m){var C=n.call(this,a,h,v,p,m)||this;return C._beforeCompositionPostProcesses=[],C._internalTextureDirty=!1,C.enabled=!1,C.renderTargetTexture=null,C.renderTargetTexture=s,C}return t.prototype._createCompositionEffect=function(){this.imageProcessingPostProcess=new S.a("prePassComposition",1,null,void 0,this._engine),this.imageProcessingPostProcess._updateParameters()},t.prototype._checkSize=function(){var a=this._engine.getRenderWidth(!0),s=this._engine.getRenderHeight(!0),h=this.getRenderWidth(),v=this.getRenderHeight();(h!==a||v!==s)&&(this.resize({width:a,height:s}),this._internalTextureDirty=!0)},t.prototype.updateCount=function(a,s){n.prototype.updateCount.call(this,a,s),this._internalTextureDirty=!0},t.prototype._resetPostProcessChain=function(){this._beforeCompositionPostProcesses=[]},t.prototype.dispose=function(){var a=this._scene;if(n.prototype.dispose.call(this),a&&a.prePassRenderer){var s=a.prePassRenderer.renderTargets.indexOf(this);s!==-1&&a.prePassRenderer.renderTargets.splice(s,1)}this.imageProcessingPostProcess&&this.imageProcessingPostProcess.dispose()},t}(o.a),T=u(476),R=u(441),d=u(459),e=u(502),i=function(){function n(t){this.excludedSkinnedMesh=[],this.excludedMaterials=[],this.mrtCount=0,this._mrtFormats=[],this._mrtLayout=[],this._textureIndices=[],this._isDirty=!0,this._effectConfigurations=[],this.doNotUseGeometryRendererFallback=!1,this.renderTargets=[],this._clearColor=new R.b(0,0,0,0),this._enabled=!1,this._needsCompositionForThisPass=!1,this.disableGammaTransform=!1,this._scene=t,this._engine=t.getEngine(),n._SceneComponentInitialization(this._scene),this.defaultRT=this._createRenderTarget("sceneprePassRT",null),this._setRenderTarget(null)}return n.prototype.getIndex=function(t){return this._textureIndices[t]},Object.defineProperty(n.prototype,"samples",{get:function(){return this.defaultRT.samples},set:function(t){this.defaultRT.samples=t},enumerable:!1,configurable:!0}),n.prototype.getRenderTarget=function(){return this._currentTarget},n.prototype._setRenderTarget=function(t){t?this._currentTarget=t:this._currentTarget=this.defaultRT},Object.defineProperty(n.prototype,"currentRTisSceneRT",{get:function(){return this._currentTarget===this.defaultRT},enumerable:!1,configurable:!0}),n.prototype._refreshGeometryBufferRendererLink=function(){if(this.doNotUseGeometryRendererFallback)this._geometryBuffer&&this._geometryBuffer._unlinkPrePassRenderer(),this._geometryBuffer=null,this._scene.disableGeometryBufferRenderer();else{if(this._geometryBuffer=this._scene.enableGeometryBufferRenderer(),!this._geometryBuffer){this.doNotUseGeometryRendererFallback=!0;return}this._geometryBuffer._linkPrePassRenderer(this)}},Object.defineProperty(n.prototype,"enabled",{get:function(){return this._enabled},enumerable:!1,configurable:!0}),n.prototype._createRenderTarget=function(t,a){var s=new E(t,a,{width:this._engine.getRenderWidth(),height:this._engine.getRenderHeight()},0,this._scene,{generateMipMaps:!1,generateStencilBuffer:this._engine.isStencilEnable,defaultType:0,types:[],drawOnlyOnFirstAttachmentByDefault:!0});return this.renderTargets.push(s),s},Object.defineProperty(n.prototype,"isSupported",{get:function(){return this._scene.getEngine().getCaps().drawBuffersExtension},enumerable:!1,configurable:!0}),n.prototype.bindAttachmentsForEffect=function(t,a){if(this.enabled&&this._currentTarget.enabled){if(t._multiTarget)this._engine.bindAttachments(this._multiRenderAttachments);else if(this._engine.bindAttachments(this._defaultAttachments),this._geometryBuffer&&this.currentRTisSceneRT){var s=a.getMaterial();s&&!s.isPrePassCapable&&this.excludedMaterials.indexOf(s)===-1&&this._geometryBuffer.renderList.push(a.getRenderingMesh())}}},n.prototype._reinitializeAttachments=function(){for(var t=[],a=[!1],s=[!0],h=0;h<this.mrtCount;h++)t.push(!0),h>0&&(a.push(!0),s.push(!1));this._multiRenderAttachments=this._engine.buildTextureLayout(t),this._clearAttachments=this._engine.buildTextureLayout(a),this._defaultAttachments=this._engine.buildTextureLayout(s)},n.prototype._resetLayout=function(){for(var t=0;t<n._textureFormats.length;t++)this._textureIndices[n._textureFormats[t].type]=-1;this._textureIndices[4]=0,this._mrtLayout=[4],this._mrtFormats=[2],this.mrtCount=1},n.prototype._updateGeometryBufferLayout=function(){if(this._refreshGeometryBufferRendererLink(),this._geometryBuffer){this._geometryBuffer._resetLayout();for(var t=[],a=0;a<this._mrtLayout.length;a++)t.push(!1);this._geometryBuffer._linkInternalTexture(this.defaultRT.getInternalTexture());for(var s=[{prePassConstant:5,geometryBufferConstant:e.a.DEPTH_TEXTURE_TYPE},{prePassConstant:6,geometryBufferConstant:e.a.NORMAL_TEXTURE_TYPE},{prePassConstant:1,geometryBufferConstant:e.a.POSITION_TEXTURE_TYPE},{prePassConstant:3,geometryBufferConstant:e.a.REFLECTIVITY_TEXTURE_TYPE},{prePassConstant:2,geometryBufferConstant:e.a.VELOCITY_TEXTURE_TYPE}],a=0;a<s.length;a++){var h=this._mrtLayout.indexOf(s[a].prePassConstant);h!==-1&&(this._geometryBuffer._forceTextureType(s[a].geometryBufferConstant,h),t[h]=!0)}this._geometryBuffer._setAttachments(this._engine.buildTextureLayout(t))}},n.prototype.restoreAttachments=function(){this.enabled&&this._currentTarget.enabled&&this._defaultAttachments&&this._engine.bindAttachments(this._defaultAttachments)},n.prototype._beforeDraw=function(t,a,s){this._isDirty&&this._update(),!(!this._enabled||!this._currentTarget.enabled)&&(this._geometryBuffer&&(this._geometryBuffer.renderList=[]),this._setupOutputForThisPass(this._currentTarget,t))},n.prototype._prepareFrame=function(t,a,s){t.renderTargetTexture?t.renderTargetTexture._prepareFrame(this._scene,a,s,t.renderTargetTexture.useCameraPostProcesses):this._postProcessesSourceForThisPass.length?this._scene.postProcessManager._prepareFrame():this._engine.restoreDefaultFramebuffer()},n.prototype._renderPostProcesses=function(t,a){var s=this._postProcessesSourceForThisPass[0],h=s?s.inputTexture:t.renderTargetTexture?t.renderTargetTexture.getInternalTexture():null,v=this._currentTarget._beforeCompositionPostProcesses;this._needsCompositionForThisPass&&(v=v.concat([this._currentTarget.imageProcessingPostProcess])),v.length&&(this._scene.postProcessManager._prepareFrame(this._currentTarget.getInternalTexture(),v),this._scene.postProcessManager.directRender(v,h,!1,a))},n.prototype._afterDraw=function(t,a){this._enabled&&this._currentTarget.enabled&&(this._prepareFrame(this._currentTarget,t,a),this._renderPostProcesses(this._currentTarget,t))},n.prototype._clear=function(){this._enabled&&this._currentTarget.enabled&&(this._bindFrameBuffer(this._currentTarget),this._engine.bindAttachments(this._clearAttachments),this._engine.clear(this._clearColor,!0,!1,!1),this._engine.bindAttachments(this._defaultAttachments))},n.prototype._bindFrameBuffer=function(t){if(this._enabled&&this._currentTarget.enabled){this._currentTarget._checkSize();var a=this._currentTarget.getInternalTexture();a&&this._engine.bindFramebuffer(a)}},n.prototype._setEnabled=function(t){this._enabled=t},n.prototype._setRenderTargetEnabled=function(t,a){t.enabled=a},n.prototype.addEffectConfiguration=function(t){for(var a=0;a<this._effectConfigurations.length;a++)if(this._effectConfigurations[a].name===t.name)return this._effectConfigurations[a];return this._effectConfigurations.push(t),t},n.prototype._enable=function(){for(var t=this.mrtCount,a=0;a<this._effectConfigurations.length;a++)this._effectConfigurations[a].enabled&&this._enableTextures(this._effectConfigurations[a].texturesRequired);for(var a=0;a<this.renderTargets.length;a++){this.mrtCount!==t&&this.renderTargets[a].updateCount(this.mrtCount,{types:this._mrtFormats}),this.renderTargets[a]._resetPostProcessChain();for(var s=0;s<this._effectConfigurations.length;s++)this._effectConfigurations[s].enabled&&(!this._effectConfigurations[s].postProcess&&this._effectConfigurations[s].createPostProcess&&this._effectConfigurations[s].createPostProcess(),this._effectConfigurations[s].postProcess&&this.renderTargets[a]._beforeCompositionPostProcesses.push(this._effectConfigurations[s].postProcess))}this._reinitializeAttachments(),this._setEnabled(!0),this._updateGeometryBufferLayout()},n.prototype._disable=function(){this._setEnabled(!1);for(var t=0;t<this.renderTargets.length;t++)this._setRenderTargetEnabled(this.renderTargets[t],!1);this._resetLayout();for(var t=0;t<this._effectConfigurations.length;t++)this._effectConfigurations[t].enabled=!1},n.prototype._getPostProcessesSource=function(t,a){if(a)return a._postProcesses;if(t.renderTargetTexture)if(t.renderTargetTexture.useCameraPostProcesses){var s=t.renderTargetTexture.activeCamera?t.renderTargetTexture.activeCamera:this._scene.activeCamera;return s?s._postProcesses:[]}else return t.renderTargetTexture.postProcesses?t.renderTargetTexture.postProcesses:[];else return this._scene.activeCamera?this._scene.activeCamera._postProcesses:[]},n.prototype._setupOutputForThisPass=function(t,a){var s=a&&this._scene.activeCameras&&!!this._scene.activeCameras.length&&this._scene.activeCameras.indexOf(a)!==0;this._postProcessesSourceForThisPass=this._getPostProcessesSource(t,a),this._postProcessesSourceForThisPass=this._postProcessesSourceForThisPass.filter(function(C){return C!=null}),this._scene.autoClear=!0;var h=this._hasImageProcessing(this._postProcessesSourceForThisPass);this._needsCompositionForThisPass=!h&&!this.disableGammaTransform&&this._needsImageProcessing()&&!s;var v=this._getFirstPostProcess(this._postProcessesSourceForThisPass),p=t._beforeCompositionPostProcesses&&t._beforeCompositionPostProcesses[0],m=null;this._scene.imageProcessingConfiguration.applyByPostProcess=this._needsCompositionForThisPass||h,this._needsCompositionForThisPass&&!t.imageProcessingPostProcess&&t._createCompositionEffect(),p?m=p:this._needsCompositionForThisPass?m=t.imageProcessingPostProcess:v&&(m=v),this._bindFrameBuffer(t),this._linkInternalTexture(t,m)},n.prototype._linkInternalTexture=function(t,a){a&&(a.autoClear=!1,a.inputTexture=t.getInternalTexture()),t._outputPostProcess!==a&&(t._outputPostProcess&&t._outputPostProcess.restoreDefaultInputTexture(),t._outputPostProcess=a),t._internalTextureDirty&&(this._updateGeometryBufferLayout(),t._internalTextureDirty=!1)},n.prototype._needsImageProcessing=function(){for(var t=0;t<this._effectConfigurations.length;t++)if(this._effectConfigurations[t].enabled&&this._effectConfigurations[t].needsImageProcessing)return!0;return!1},n.prototype._hasImageProcessing=function(t){var a,s=!1;if(t){for(var h=0;h<t.length;h++)if(((a=t[h])===null||a===void 0?void 0:a.getClassName())==="ImageProcessingPostProcess"){s=!0;break}}return s},n.prototype._getFirstPostProcess=function(t){for(var a=0;a<t.length;a++)if(t[a]!==null)return t[a];return null},n.prototype.markAsDirty=function(){this._isDirty=!0},n.prototype._enableTextures=function(t){for(var a=0;a<t.length;a++){var s=t[a];this._textureIndices[s]===-1&&(this._textureIndices[s]=this._mrtLayout.length,this._mrtLayout.push(s),this._mrtFormats.push(n._textureFormats[s].format),this.mrtCount++)}},n.prototype._update=function(){this._disable();var t=!1;this._scene.imageProcessingConfiguration.applyByPostProcess=!1;for(var a=0;a<this._scene.materials.length;a++)this._scene.materials[a].setPrePassRenderer(this)&&(t=!0);t&&this._setRenderTargetEnabled(this.defaultRT,!0);for(var s,a=0;a<this.renderTargets.length;a++){if(this.renderTargets[a].renderTargetTexture)s=this._getPostProcessesSource(this.renderTargets[a]);else{var h=this._scene.activeCamera;if(!h)continue;s=h._postProcesses}if(!!s&&(s=s.filter(function(m){return m!=null}),s)){for(var v=0;v<s.length;v++)s[v].setPrePassRenderer(this)&&(this._setRenderTargetEnabled(this.renderTargets[a],!0),t=!0);this._hasImageProcessing(s)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!0)}}this._markAllMaterialsAsPrePassDirty(),this._isDirty=!1,t&&this._enable()},n.prototype._markAllMaterialsAsPrePassDirty=function(){for(var t=this._scene.materials,a=0;a<t.length;a++)t[a].markAsDirty(d.a.PrePassDirtyFlag)},n.prototype.dispose=function(){for(var t=this.renderTargets.length-1;t>=0;t--)this.renderTargets[t].dispose();for(var t=0;t<this._effectConfigurations.length;t++)this._effectConfigurations[t].dispose&&this._effectConfigurations[t].dispose()},n._SceneComponentInitialization=function(t){throw T.a.WarnImport("PrePassRendererSceneComponent")},n._textureFormats=[{type:0,format:2},{type:1,format:2},{type:2,format:2},{type:3,format:0},{type:4,format:2},{type:5,format:2},{type:6,format:2},{type:7,format:0}],n}()},605:function(Q,U,u){"use strict";var l=u(435),o="importanceSampling",S=`




























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
}`;l.a.IncludesShadersStore[o]=S;var E={name:o,shader:S}},606:function(Q,U,u){"use strict";var l=u(435),o="pbrBRDFFunctions",S=`
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
`;l.a.IncludesShadersStore[o]=S;var E={name:o,shader:S}},607:function(Q,U,u){"use strict";var l=u(435),o="hdrFilteringFunctions",S=`#ifdef NUM_SAMPLES
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
#endif`;l.a.IncludesShadersStore[o]=S;var E={name:o,shader:S}},625:function(Q,U,u){"use strict";var l=u(435),o=u(457),S="rgbdDecodePixelShader",E=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;l.a.ShadersStore[S]=E;var T={name:S,shader:E}},626:function(Q,U,u){"use strict";u.d(U,"a",function(){return R});var l=u(434),o=u(439),S=u(441),E=u(480),T=u(454),R=function(){function d(e){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=d._DefaultIndexOfRefraction,this.indexOfRefraction=d._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=S.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=e}return d.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},d.prototype.isReadyForSubMesh=function(e,i,n,t){return!(e._areTexturesDirty&&i.texturesEnabled&&(this._texture&&E.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&E.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||n.getCaps().standardDerivatives&&this._bumpTexture&&E.a.ClearCoatBumpTextureEnabled&&!t&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&E.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},d.prototype.prepareDefines=function(e,i){var n;this._isEnabled?(e.CLEARCOAT=!0,e.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,e.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((n=this._textureRoughness)===null||n===void 0?void 0:n._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),e.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,e._areTexturesDirty&&i.texturesEnabled&&(this._texture&&E.a.ClearCoatTextureEnabled?T.a.PrepareDefinesForMergedUV(this._texture,e,"CLEARCOAT_TEXTURE"):e.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&E.a.ClearCoatTextureEnabled?T.a.PrepareDefinesForMergedUV(this._textureRoughness,e,"CLEARCOAT_TEXTURE_ROUGHNESS"):e.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&E.a.ClearCoatBumpTextureEnabled?T.a.PrepareDefinesForMergedUV(this._bumpTexture,e,"CLEARCOAT_BUMP"):e.CLEARCOAT_BUMP=!1,e.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===d._DefaultIndexOfRefraction,this._isTintEnabled?(e.CLEARCOAT_TINT=!0,this._tintTexture&&E.a.ClearCoatTintTextureEnabled?T.a.PrepareDefinesForMergedUV(this._tintTexture,e,"CLEARCOAT_TINT_TEXTURE"):e.CLEARCOAT_TINT_TEXTURE=!1):(e.CLEARCOAT_TINT=!1,e.CLEARCOAT_TINT_TEXTURE=!1))):(e.CLEARCOAT=!1,e.CLEARCOAT_TEXTURE=!1,e.CLEARCOAT_TEXTURE_ROUGHNESS=!1,e.CLEARCOAT_BUMP=!1,e.CLEARCOAT_TINT=!1,e.CLEARCOAT_TINT_TEXTURE=!1,e.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,e.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},d.prototype.bindForSubMesh=function(e,i,n,t,a,s,h,v){var p,m,C,_,D,M,N,L,B=v._materialDefines,P=B.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!e.useUbo||!a||!e.isSync){P&&E.a.ClearCoatTextureEnabled?(e.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),T.a.BindTextureMatrix(this._texture,e,"clearCoat")):(this._texture||this._textureRoughness)&&E.a.ClearCoatTextureEnabled&&(e.updateFloat4("vClearCoatInfos",(m=(p=this._texture)===null||p===void 0?void 0:p.coordinatesIndex)!==null&&m!==void 0?m:0,(_=(C=this._texture)===null||C===void 0?void 0:C.level)!==null&&_!==void 0?_:0,(M=(D=this._textureRoughness)===null||D===void 0?void 0:D.coordinatesIndex)!==null&&M!==void 0?M:0,(L=(N=this._textureRoughness)===null||N===void 0?void 0:N.level)!==null&&L!==void 0?L:0),this._texture&&T.a.BindTextureMatrix(this._texture,e,"clearCoat"),this._textureRoughness&&!P&&!B.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&T.a.BindTextureMatrix(this._textureRoughness,e,"clearCoatRoughness")),this._bumpTexture&&n.getCaps().standardDerivatives&&E.a.ClearCoatTextureEnabled&&!t&&(e.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),T.a.BindTextureMatrix(this._bumpTexture,e,"clearCoatBump"),i._mirroredCameraPosition?e.updateFloat2("vClearCoatTangentSpaceParams",s?1:-1,h?1:-1):e.updateFloat2("vClearCoatTangentSpaceParams",s?-1:1,h?-1:1)),this._tintTexture&&E.a.ClearCoatTintTextureEnabled&&(e.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),T.a.BindTextureMatrix(this._tintTexture,e,"clearCoatTint")),e.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var G=1-this._indexOfRefraction,y=1+this._indexOfRefraction,K=Math.pow(-G/y,2),b=1/this._indexOfRefraction;e.updateFloat4("vClearCoatRefractionParams",K,b,G,y),this._isTintEnabled&&(e.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),e.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}i.texturesEnabled&&(this._texture&&E.a.ClearCoatTextureEnabled&&e.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!P&&!B.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&E.a.ClearCoatTextureEnabled&&e.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&n.getCaps().standardDerivatives&&E.a.ClearCoatBumpTextureEnabled&&!t&&e.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&E.a.ClearCoatTintTextureEnabled&&e.setTexture("clearCoatTintSampler",this._tintTexture))},d.prototype.hasTexture=function(e){return this._texture===e||this._textureRoughness===e||this._bumpTexture===e||this._tintTexture===e},d.prototype.getActiveTextures=function(e){this._texture&&e.push(this._texture),this._textureRoughness&&e.push(this._textureRoughness),this._bumpTexture&&e.push(this._bumpTexture),this._tintTexture&&e.push(this._tintTexture)},d.prototype.getAnimatables=function(e){this._texture&&this._texture.animations&&this._texture.animations.length>0&&e.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&e.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&e.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&e.push(this._tintTexture)},d.prototype.dispose=function(e){var i,n,t,a;e&&((i=this._texture)===null||i===void 0||i.dispose(),(n=this._textureRoughness)===null||n===void 0||n.dispose(),(t=this._bumpTexture)===null||t===void 0||t.dispose(),(a=this._tintTexture)===null||a===void 0||a.dispose())},d.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},d.AddFallbacks=function(e,i,n){return e.CLEARCOAT_BUMP&&i.addFallback(n++,"CLEARCOAT_BUMP"),e.CLEARCOAT_TINT&&i.addFallback(n++,"CLEARCOAT_TINT"),e.CLEARCOAT&&i.addFallback(n++,"CLEARCOAT"),n},d.AddUniforms=function(e){e.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},d.AddSamplers=function(e){e.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},d.PrepareUniformBuffer=function(e){e.addUniform("vClearCoatParams",2),e.addUniform("vClearCoatRefractionParams",4),e.addUniform("vClearCoatInfos",4),e.addUniform("clearCoatMatrix",16),e.addUniform("clearCoatRoughnessMatrix",16),e.addUniform("vClearCoatBumpInfos",2),e.addUniform("vClearCoatTangentSpaceParams",2),e.addUniform("clearCoatBumpMatrix",16),e.addUniform("vClearCoatTintParams",4),e.addUniform("clearCoatColorAtDistance",1),e.addUniform("vClearCoatTintInfos",2),e.addUniform("clearCoatTintMatrix",16)},d.prototype.copyTo=function(e){o.a.Clone(function(){return e},this)},d.prototype.serialize=function(){return o.a.Serialize(this)},d.prototype.parse=function(e,i,n){var t=this;o.a.Parse(function(){return t},e,i,n)},d._DefaultIndexOfRefraction=1.5,Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"isEnabled",void 0),Object(l.c)([Object(o.c)()],d.prototype,"intensity",void 0),Object(l.c)([Object(o.c)()],d.prototype,"roughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"texture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"textureRoughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"remapF0OnInterfaceChange",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"bumpTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"isTintEnabled",void 0),Object(l.c)([Object(o.e)()],d.prototype,"tintColor",void 0),Object(l.c)([Object(o.c)()],d.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(o.c)()],d.prototype,"tintThickness",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],d.prototype,"tintTexture",void 0),d}()},627:function(Q,U,u){"use strict";var l=u(435),o="subSurfaceScatteringFunctions",S=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;l.a.IncludesShadersStore[o]=S;var E={name:o,shader:S}},644:function(Q,U,u){"use strict";var l=u(435),o=u(524),S=u(457),E=u(525),T="imageProcessingPixelShader",R=`
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
}`;l.a.ShadersStore[T]=R;var d={name:T,shader:R}},649:function(Q,U,u){"use strict";u.d(U,"a",function(){return T});var l=u(449),o=u(452),S=u(598),E=u(440);Object.defineProperty(l.a.prototype,"prePassRenderer",{get:function(){return this._prePassRenderer},set:function(R){R&&R.isSupported&&(this._prePassRenderer=R)},enumerable:!0,configurable:!0}),l.a.prototype.enablePrePassRenderer=function(){return this._prePassRenderer?this._prePassRenderer:(this._prePassRenderer=new S.a(this),this._prePassRenderer.isSupported||(this._prePassRenderer=null,E.a.Error(`PrePassRenderer needs WebGL 2 support.
Maybe you tried to use the following features that need the PrePassRenderer :
 + Subsurface Scattering`)),this._prePassRenderer)},l.a.prototype.disablePrePassRenderer=function(){!this._prePassRenderer||(this._prePassRenderer.dispose(),this._prePassRenderer=null)};var T=function(){function R(d){this.name=o.a.NAME_PREPASSRENDERER,this.scene=d}return R.prototype.register=function(){this.scene._beforeCameraDrawStage.registerStep(o.a.STEP_BEFORECAMERADRAW_PREPASS,this,this._beforeCameraDraw),this.scene._afterCameraDrawStage.registerStep(o.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterCameraDraw),this.scene._beforeRenderTargetDrawStage.registerStep(o.a.STEP_BEFORERENDERTARGETDRAW_PREPASS,this,this._beforeRenderTargetDraw),this.scene._afterRenderTargetDrawStage.registerStep(o.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterRenderTargetDraw),this.scene._beforeClearStage.registerStep(o.a.STEP_BEFORECLEARSTAGE_PREPASS,this,this._beforeClearStage),this.scene._beforeRenderTargetClearStage.registerStep(o.a.STEP_BEFORERENDERTARGETCLEARSTAGE_PREPASS,this,this._beforeRenderTargetClearStage),this.scene._beforeRenderingMeshStage.registerStep(o.a.STEP_BEFORERENDERINGMESH_PREPASS,this,this._beforeRenderingMeshStage),this.scene._afterRenderingMeshStage.registerStep(o.a.STEP_AFTERRENDERINGMESH_PREPASS,this,this._afterRenderingMeshStage)},R.prototype._beforeRenderTargetDraw=function(d,e,i){this.scene.prePassRenderer&&(d._prePassRenderTarget||(d._prePassRenderTarget=this.scene.prePassRenderer._createRenderTarget(d.name+"_prePassRTT",d)),this.scene.prePassRenderer._setRenderTarget(d._prePassRenderTarget),this.scene.prePassRenderer._beforeDraw(void 0,e,i))},R.prototype._afterRenderTargetDraw=function(d,e,i){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw(e,i)},R.prototype._beforeRenderTargetClearStage=function(d,e,i){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(d._prePassRenderTarget),this.scene.prePassRenderer._clear())},R.prototype._beforeCameraDraw=function(d){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._beforeDraw(d))},R.prototype._afterCameraDraw=function(d){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw()},R.prototype._beforeClearStage=function(){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._clear())},R.prototype._beforeRenderingMeshStage=function(d,e,i,n){if(!!n){var t=d.getScene();t.prePassRenderer&&t.prePassRenderer.bindAttachmentsForEffect(n,e)}},R.prototype._afterRenderingMeshStage=function(d){var e=d.getScene();e.prePassRenderer&&e.prePassRenderer.restoreAttachments()},R.prototype.rebuild=function(){this.scene.disablePrePassRenderer(),this.scene.enablePrePassRenderer()},R.prototype.dispose=function(){this.scene.disablePrePassRenderer()},R}();S.a._SceneComponentInitialization=function(R){var d=R._getComponent(o.a.NAME_PREPASSRENDERER);d||(d=new T(R),R._addComponent(d))}}}]);
