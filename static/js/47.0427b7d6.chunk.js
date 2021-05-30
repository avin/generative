(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[47],{444:function($,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(434),s=o(490),b=o(438),E=o(436),d=o(534),T=o(445),p=o(500),i=o(439),t=o(437),e=function(){function n(r,a,l,h,u,g,R,P,A,C,x,I,F,y,N){R===void 0&&(R=1),C===void 0&&(C=null),x===void 0&&(x=0),I===void 0&&(I="postprocess"),y===void 0&&(y=!1),N===void 0&&(N=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new s.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new E.d(1,1),this._texelSize=E.d.Zero(),this.onActivateObservable=new b.c,this.onSizeChangedObservable=new b.c,this.onApplyObservable=new b.c,this.onBeforeRenderObservable=new b.c,this.onAfterRenderObservable=new b.c,this.name=r,g!=null?(this._camera=g,this._scene=g.getScene(),g.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):P&&(this._engine=P,this._engine.postProcesses.push(this)),this._options=u,this.renderTargetSamplingMode=R||1,this._reusable=A||!1,this._textureType=x,this._textureFormat=N,this._samplers=h||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=I,this._parameters=l||[],this._parameters.push("scale"),this._indexParameters=F,y||this.updateEffect(C)}return Object.defineProperty(n.prototype,"samples",{get:function(){return this._samples},set:function(r){var a=this;this._samples=Math.min(r,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(l){l.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(l,a._samples)})},enumerable:!1,configurable:!0}),n.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(n.prototype,"onActivate",{set:function(r){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),r&&(this._onActivateObserver=this.onActivateObservable.add(r))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onSizeChanged",{set:function(r){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onApply",{set:function(r){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onBeforeRender",{set:function(r){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onAfterRender",{set:function(r){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(r){this._forcedOutputTexture=r},enumerable:!1,configurable:!0}),n.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},n.prototype.getCamera=function(){return this._camera},Object.defineProperty(n.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"PostProcess"},n.prototype.getEngine=function(){return this._engine},n.prototype.getEffect=function(){return this._effect},n.prototype.shareOutputWith=function(r){return this._disposeTextures(),this._shareOutputWithPostProcess=r,this},n.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new s.a(2)),this._shareOutputWithPostProcess=null},n.prototype.updateEffect=function(r,a,l,h,u,g,R,P){r===void 0&&(r=null),a===void 0&&(a=null),l===void 0&&(l=null),this._postProcessDefines=r,this._effect=this._engine.createEffect({vertex:R!=null?R:this._vertexUrl,fragment:P!=null?P:this._fragmentUrl},["position"],a||this._parameters,l||this._samplers,r!==null?r:"",void 0,u,g,h||this._indexParameters)},n.prototype.isReusable=function(){return this._reusable},n.prototype.markTextureDirty=function(){this.width=-1},n.prototype._createRenderTargetTexture=function(r,a,l){l===void 0&&(l=0);for(var h=0;h<this._textureCache.length;h++)if(this._textureCache[h].texture.width===r.width&&this._textureCache[h].texture.height===r.height&&this._textureCache[h].postProcessChannel===l)return this._textureCache[h].texture;var u=this._engine.createRenderTargetTexture(r,a);return this._textureCache.push({texture:u,postProcessChannel:l,lastUsedRenderId:-1}),u},n.prototype._flushTextureCache=function(){for(var r=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(r-this._textureCache[a].lastUsedRenderId>100){for(var l=!1,h=0;h<this._textures.length;h++)if(this._textures.data[h]===this._textureCache[a].texture){l=!0;break}l||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},n.prototype._resize=function(r,a,l,h,u){this._textures.length>0&&this._textures.reset(),this.width=r,this.height=a;var g={width:this.width,height:this.height},R={generateMipMaps:h,generateDepthBuffer:u||l._postProcesses.indexOf(this)===0,generateStencilBuffer:(u||l._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(g,R,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(g,R,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},n.prototype.activate=function(r,a,l){var h=this;a===void 0&&(a=null),r=r||this._camera;var u=r.getScene(),g=u.getEngine(),R=g.getCaps().maxTextureSize,P=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,A=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,C=r.parent;C&&(C.leftCamera==r||C.rightCamera==r)&&(P/=2);var x=this._options.width||P,I=this._options.height||A,F=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var y=g.currentViewport;y&&(x*=y.width,I*=y.height)}(F||this.alwaysForcePOT)&&(this._options.width||(x=g.needPOTTextures?T.a.GetExponentOfTwo(x,R,this.scaleMode):x),this._options.height||(I=g.needPOTTextures?T.a.GetExponentOfTwo(I,R,this.scaleMode):I)),(this.width!==x||this.height!==I)&&this._resize(x,I,r,F,l),this._textures.forEach(function(L){L.samples!==h.samples&&h._engine.updateRenderTargetTextureSampleCount(L,h.samples)}),this._flushTextureCache(),this._renderId++}var N;if(this._shareOutputWithPostProcess)N=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)N=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{N=this.inputTexture;for(var G=void 0,V=0;V<this._textureCache.length;V++)if(this._textureCache[V].texture===N){G=this._textureCache[V];break}G&&(G.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(P/x,A/I),this._engine.bindFramebuffer(N,0,P,A,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(N,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(r),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:u.clearColor,u._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),N},Object.defineProperty(n.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),n.prototype.isReady=function(){return this._effect&&this._effect.isReady()},n.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var r;return this._shareOutputWithPostProcess?r=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?r=this._forcedOutputTexture:r=this.inputTexture,this._effect._bindTexture("textureSampler",r),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},n.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},n.prototype._disposeTextureCache=function(){for(var r=this._textureCache.length-1;r>=0;r--)this._engine._releaseTexture(this._textureCache[r].texture);this._textureCache.length=0},n.prototype.setPrePassRenderer=function(r){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=r.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},n.prototype.dispose=function(r){r=r||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!r){if(r.detachPostProcess(this),a=r._postProcesses.indexOf(this),a===0&&r._postProcesses.length>0){var l=this._camera._getFirstPostProcess();l&&l.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},n.prototype.serialize=function(){var r=i.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return r.customType="BABYLON."+this.getClassName(),r.cameraId=a?a.id:null,r.reusable=this._reusable,r.textureType=this._textureType,r.fragmentUrl=this._fragmentUrl,r.parameters=this._parameters,r.samplers=this._samplers,r.options=this._options,r.defines=this._postProcessDefines,r.textureFormat=this._textureFormat,r.vertexUrl=this._vertexUrl,r.indexParameters=this._indexParameters,r},n.prototype.clone=function(){var r=this.serialize();r._engine=this._engine,r.cameraId=null;var a=n.Parse(r,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},n.Parse=function(r,a,l){var h=t.a.GetClass(r.customType);if(!h||!h._Parse)return null;var u=a?a.getCameraByID(r.cameraId):null;return h._Parse(r,u,a,l)},n._Parse=function(r,a,l,h){return i.a.Parse(function(){return new n(r.name,r.fragmentUrl,r.parameters,r.samplers,r.options,a,r.renderTargetSamplingMode,r._engine,r.reusable,r.defines,r.textureType,r.vertexUrl,r.indexParameters,!1,r.textureFormat)},r,l,h)},Object(f.c)([Object(i.c)()],n.prototype,"uniqueId",void 0),Object(f.c)([Object(i.c)()],n.prototype,"name",void 0),Object(f.c)([Object(i.c)()],n.prototype,"width",void 0),Object(f.c)([Object(i.c)()],n.prototype,"height",void 0),Object(f.c)([Object(i.c)()],n.prototype,"renderTargetSamplingMode",void 0),Object(f.c)([Object(i.f)()],n.prototype,"clearColor",void 0),Object(f.c)([Object(i.c)()],n.prototype,"autoClear",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alphaMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alphaConstants",void 0),Object(f.c)([Object(i.c)()],n.prototype,"enablePixelPerfectMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"forceFullscreenViewport",void 0),Object(f.c)([Object(i.c)()],n.prototype,"scaleMode",void 0),Object(f.c)([Object(i.c)()],n.prototype,"alwaysForcePOT",void 0),Object(f.c)([Object(i.c)("samples")],n.prototype,"_samples",void 0),Object(f.c)([Object(i.c)()],n.prototype,"adaptScaleToCurrentViewport",void 0),n}();t.a.RegisteredTypes["BABYLON.PostProcess"]=e},458:function($,H,o){"use strict";o.d(H,"a",function(){return n});var f=o(434),s=o(438),b=o(443),E=o(436),d=o(442),T=o(590),p=o(591),i=o(500),t=o(522),e=o(445),n=function(r){Object(f.d)(a,r);function a(l,h,u,g,R,P,A,C,x,I,F,y,N,G){R===void 0&&(R=!0),P===void 0&&(P=0),A===void 0&&(A=!1),C===void 0&&(C=d.a.TRILINEAR_SAMPLINGMODE),x===void 0&&(x=!0),I===void 0&&(I=!1),F===void 0&&(F=!1),y===void 0&&(y=5),N===void 0&&(N=!1);var V,L=r.call(this,null,u,!g,void 0,C,void 0,void 0,void 0,void 0,y)||this;return L.renderParticles=!0,L.renderSprites=!1,L.ignoreCameraViewport=!1,L.onBeforeBindObservable=new s.c,L.onAfterUnbindObservable=new s.c,L.onBeforeRenderObservable=new s.c,L.onAfterRenderObservable=new s.c,L.onClearObservable=new s.c,L.onResizeObservable=new s.c,L._currentRefreshId=-1,L._refreshRate=1,L._samples=1,L.boundingBoxPosition=E.e.Zero(),u=L.getScene(),!u||(L._coordinatesMode=d.a.PROJECTION_MODE,L.renderList=new Array,L.name=l,L.isRenderTarget=!0,L._initialSizeParameter=h,L._processSizeParameter(h),L._resizeObserver=L.getScene().getEngine().onResizeObservable.add(function(){}),L._generateMipMaps=!!g,L._doNotChangeAspectRatio=R,L._renderingManager=new p.b(u),L._renderingManager._useSceneAutoClearSetup=!0,F)||(L._renderTargetOptions={generateMipMaps:g,type:P,format:(V=L._format)!==null&&V!==void 0?V:void 0,samplingMode:L.samplingMode,generateDepthBuffer:x,generateStencilBuffer:I,samples:G},L.samplingMode===d.a.NEAREST_SAMPLINGMODE&&(L.wrapU=d.a.CLAMP_ADDRESSMODE,L.wrapV=d.a.CLAMP_ADDRESSMODE),N||(A?(L._texture=u.getEngine().createRenderTargetCubeTexture(L.getRenderSize(),L._renderTargetOptions),L.coordinatesMode=d.a.INVCUBIC_MODE,L._textureMatrix=E.a.Identity()):L._texture=u.getEngine().createRenderTargetTexture(L._size,L._renderTargetOptions),G!==void 0&&(L.samples=G))),L}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(l){this._renderList=l,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(l){var h=this,u=l.push;l.push=function(){for(var R=[],P=0;P<arguments.length;P++)R[P]=arguments[P];var A=l.length===0,C=u.apply(l,R);return A&&h.getScene()&&h.getScene().meshes.forEach(function(x){x._markSubMeshesAsLightDirty()}),C};var g=l.splice;l.splice=function(R,P){var A=g.apply(l,[R,P]);return l.length===0&&h.getScene().meshes.forEach(function(C){C._markSubMeshesAsLightDirty()}),A}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(l){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(l){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(l){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(l){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(l){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(l))){this._boundingBoxSize=l;var h=this.getScene();h&&h.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var l;return((l=this.getInternalTexture())===null||l===void 0?void 0:l._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(l,h,u,g){var R;l===void 0&&(l=0),h===void 0&&(h=!0),u===void 0&&(u=!1),g===void 0&&(g=1);var P=this.getInternalTexture();if(!(!this.getScene()||!P)){(R=P._depthStencilTexture)===null||R===void 0||R.dispose();var A=this.getScene().getEngine();P._depthStencilTexture=A.createDepthStencilTexture(this._size,{bilinearFiltering:h,comparisonFunction:l,generateStencil:u,isCube:this.isCube,samples:g})}},a.prototype._processSizeParameter=function(l){if(l.ratio){this._sizeRatio=l.ratio;var h=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(h.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(h.getRenderHeight(),this._sizeRatio)}}else this._size=l},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(l){if(this._samples!==l){var h=this.getScene();!h||(this._samples=h.getEngine().updateRenderTargetTextureSampleCount(this._texture,l))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(l){this._refreshRate=l,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(l){if(!this._postProcessManager){var h=this.getScene();if(!h)return;this._postProcessManager=new T.a(h),this._postProcesses=new Array}this._postProcesses.push(l),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(l){if(l===void 0&&(l=!1),!!this._postProcesses){if(l)for(var h=0,u=this._postProcesses;h<u.length;h++){var g=u[h];g.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(l){if(!!this._postProcesses){var h=this._postProcesses.indexOf(l);h!==-1&&(this._postProcesses.splice(h,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var l=this._size.layers;return l||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(l){var h=Math.max(1,this.getRenderSize()*l);this.resize(h)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:r.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(l){var h=this.isCube;this.releaseInternalTexture();var u=this.getScene();!u||(this._processSizeParameter(l),h?this._texture=u.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=u.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(l,h){l===void 0&&(l=!1),h===void 0&&(h=!1);var u=this.getScene();if(!!u){var g=u.getEngine();if(this.useCameraPostProcesses!==void 0&&(l=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var R=0;R<this._waitingRenderList.length;R++){var P=this._waitingRenderList[R],A=u.getMeshByID(P);A&&this.renderList.push(A)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var u=this.getScene();if(!u)return;for(var C=u.meshes,R=0;R<C.length;R++){var x=C[R];this.renderListPredicate(x)&&this.renderList.push(x)}}this.onBeforeBindObservable.notifyObservers(this);var I;if(this.activeCamera?(I=this.activeCamera,g.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==u.activeCamera&&u.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(I=u.activeCamera,I&&g.setViewport(I.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var F=0;F<this.getRenderLayers();F++)this.renderToTarget(0,l,h,F,I),u.incrementRenderId(),u.resetCachedMaterial();else if(this.isCube)for(var y=0;y<6;y++)this.renderToTarget(y,l,h,void 0,I),u.incrementRenderId(),u.resetCachedMaterial();else this.renderToTarget(0,l,h,void 0,I);this.onAfterUnbindObservable.notifyObservers(this),u.activeCamera&&((u.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==u.activeCamera)&&u.setTransformMatrix(u.activeCamera.getViewMatrix(),u.activeCamera.getProjectionMatrix(!0)),g.setViewport(u.activeCamera.viewport)),u.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(l,h){var u=128,g=l*h,R=e.a.NearestPOT(g+u*u/(u+g));return Math.min(e.a.FloorPOT(l),R)},a.prototype._prepareRenderingManager=function(l,h,u,g){var R=this.getScene();if(!!R){this._renderingManager.reset();for(var P=R.getRenderId(),A=0;A<h;A++){var C=l[A];if(C&&!C.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(C,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!C.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!C._internalAbstractMeshDataInfo._currentLODIsUpToDate&&R.activeCamera&&(C._internalAbstractMeshDataInfo._currentLOD=R.customLODSelector?R.customLODSelector(C,R.activeCamera):C.getLOD(R.activeCamera),C._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!C._internalAbstractMeshDataInfo._currentLOD)continue;var x=C._internalAbstractMeshDataInfo._currentLOD;x._preActivateForIntermediateRendering(P);var I=void 0;if(g&&u?I=(C.layerMask&u.layerMask)==0:I=!1,C.isEnabled()&&C.isVisible&&C.subMeshes&&!I&&(x!==C&&x._activate(P,!0),C._activate(P,!0)&&C.subMeshes.length)){C.isAnInstance?C._internalAbstractMeshDataInfo._actAsRegularMesh&&(x=C):x._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,x._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var F=0;F<x.subMeshes.length;F++){var y=x.subMeshes[F];this._renderingManager.dispatch(y,x)}}}}for(var N=0;N<R.particleSystems.length;N++){var G=R.particleSystems[N],V=G.emitter;!G.isStarted()||!V||!V.position||!V.isEnabled()||l.indexOf(V)>=0&&this._renderingManager.dispatchParticles(G)}}},a.prototype._bindFrameBuffer=function(l,h){l===void 0&&(l=0),h===void 0&&(h=0);var u=this.getScene();if(!!u){var g=u.getEngine();this._texture&&g.bindFramebuffer(this._texture,this.isCube?l:void 0,void 0,void 0,this.ignoreCameraViewport,0,h)}},a.prototype.unbindFrameBuffer=function(l,h){var u=this;!this._texture||l.unBindFramebuffer(this._texture,this.isCube,function(){u.onAfterRenderObservable.notifyObservers(h)})},a.prototype._prepareFrame=function(l,h,u,g){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!g||!l.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(h,u)},a.prototype.renderToTarget=function(l,h,u,g,R){g===void 0&&(g=0),R===void 0&&(R=null);var P=this.getScene();if(!!P){var A=P.getEngine();if(!!this._texture){A._debugPushGroup("render to face #"+l+" layer #"+g,1),this._prepareFrame(P,l,g,h),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(g):this.onBeforeRenderObservable.notifyObservers(l);var C=null,x=this.renderList?this.renderList:P.getActiveMeshes().data,I=this.renderList?this.renderList.length:P.getActiveMeshes().length;this.getCustomRenderList&&(C=this.getCustomRenderList(this.is2DArray?g:l,x,I)),C?this._prepareRenderingManager(C,C.length,R,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(x,I,R,!this.renderList),this._defaultRenderListPrepared=!0),C=x);for(var F=0,y=P._beforeRenderTargetClearStage;F<y.length;F++){var N=y[F];N.action(this,l,g)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(A):A.clear(this.clearColor||P.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||P.updateTransformMatrix(!0);for(var G=0,V=P._beforeRenderTargetDrawStage;G<V.length;G++){var N=V[G];N.action(this,l,g)}this._renderingManager.render(this.customRenderFunction,C,this.renderParticles,this.renderSprites);for(var L=0,ne=P._afterRenderTargetDrawStage;L<ne.length;L++){var N=ne[L];N.action(this,l,g)}var K=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,l,this._postProcesses,this.ignoreCameraViewport):h&&P.postProcessManager._finalizeFrame(!1,this._texture,l),this._texture.generateMipMaps=K,this._doNotChangeAspectRatio||P.updateTransformMatrix(!0),u&&b.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),A),this.unbindFrameBuffer(A,l),this.isCube&&l===5&&A.generateMipMapsForCubemap(this._texture),A._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(l,h,u,g){h===void 0&&(h=null),u===void 0&&(u=null),g===void 0&&(g=null),this._renderingManager.setRenderingOrder(l,h,u,g)},a.prototype.setRenderingAutoClearDepthStencil=function(l,h){this._renderingManager.setRenderingAutoClearDepthStencil(l,h),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var l=this.getSize(),h=new a(this.name,l,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return h.hasAlpha=this.hasAlpha,h.level=this.level,h.coordinatesMode=this.coordinatesMode,this.renderList&&(h.renderList=this.renderList.slice(0)),h},a.prototype.serialize=function(){if(!this.name)return null;var l=r.prototype.serialize.call(this);if(l.renderTargetSize=this.getRenderSize(),l.renderList=[],this.renderList)for(var h=0;h<this.renderList.length;h++)l.renderList.push(this.renderList[h].id);return l},a.prototype.disposeFramebufferObjects=function(){var l=this.getInternalTexture(),h=this.getScene();l&&h&&h.getEngine()._releaseFramebufferObjects(l)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var l=this.getScene();if(!!l){var h=l.customRenderTargets.indexOf(this);h>=0&&l.customRenderTargets.splice(h,1);for(var u=0,g=l.cameras;u<g.length;u++){var R=g[u];h=R.customRenderTargets.indexOf(this),h>=0&&R.customRenderTargets.splice(h,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),r.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(d.a);d.a._CreateRenderTargetTexture=function(r,a,l,h){return new n(r,a,l,h)}},466:function($,H,o){"use strict";o.d(H,"a",function(){return s});var f=o(443),s=function(){function b(E,d,T,p){this._name=d,this._singleInstance=p||!0,this._getPostProcesses=T,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(b.prototype,"isSupported",{get:function(){for(var E in this._postProcesses)if(this._postProcesses.hasOwnProperty(E)){for(var d=this._postProcesses[E],T=0;T<d.length;T++)if(!d[T].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),b.prototype._update=function(){},b.prototype._attachCameras=function(E){var d=this,T,p=f.b.MakeArray(E||this._cameras);if(!!p)for(var i=0;i<p.length;i++){var t=p[i];if(!!t){var e=t.name;if(this._singleInstance?T=0:T=e,!this._postProcesses[T]){var n=this._getPostProcesses();n&&(this._postProcesses[T]=Array.isArray(n)?n:[n])}this._indicesForCamera[e]||(this._indicesForCamera[e]=[]),this._postProcesses[T].forEach(function(r){var a=t.attachPostProcess(r);d._indicesForCamera[e].push(a)}),this._cameras[e]||(this._cameras[e]=t)}}},b.prototype._detachCameras=function(E){var d=f.b.MakeArray(E||this._cameras);if(!!d)for(var T=0;T<d.length;T++){var p=d[T],i=p.name,t=this._postProcesses[this._singleInstance?0:i];t&&t.forEach(function(e){p.detachPostProcess(e)}),this._cameras[i]&&(this._cameras[i]=null)}},b.prototype._enable=function(E){var d=this,T=f.b.MakeArray(E||this._cameras);if(!!T)for(var p=0;p<T.length;p++)for(var i=T[p],t=i.name,e=0;e<this._indicesForCamera[t].length;e++)(i._postProcesses[this._indicesForCamera[t][e]]===void 0||i._postProcesses[this._indicesForCamera[t][e]]===null)&&this._postProcesses[this._singleInstance?0:t].forEach(function(n){T[p].attachPostProcess(n,d._indicesForCamera[t][e])})},b.prototype._disable=function(E){var d=f.b.MakeArray(E||this._cameras);if(!!d)for(var T=0;T<d.length;T++){var p=d[T],i=p.name;this._postProcesses[this._singleInstance?0:i].forEach(function(t){p.detachPostProcess(t)})}},b.prototype.getPostProcesses=function(E){return this._singleInstance?this._postProcesses[0]:E?this._postProcesses[E.name]:null},b}()},472:function($,H,o){"use strict";o.d(H,"a",function(){return N});var f=o(434),s=o(444),b=o(442),E=o(435),d="kernelBlurVaryingDeclaration",T="varying vec2 sampleCoord{X};";E.a.IncludesShadersStore[d]=T;var p={name:d,shader:T},i=o(535),t="kernelBlurFragment",e=`#ifdef DOF
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
#endif`;E.a.IncludesShadersStore[t]=e;var n={name:t,shader:e},r="kernelBlurFragment2",a=`#ifdef DOF
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
#endif`;E.a.IncludesShadersStore[r]=a;var l={name:r,shader:a},h="kernelBlurPixelShader",u=`
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
}`;E.a.ShadersStore[h]=u;var g={name:h,shader:u},R="kernelBlurVertex",P="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";E.a.IncludesShadersStore[R]=P;var A={name:R,shader:P},C="kernelBlurVertexShader",x=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;E.a.ShadersStore[C]=x;var I={name:C,shader:x},F=o(437),y=o(439),N=function(G){Object(f.d)(V,G);function V(L,ne,K,B,J,k,le,j,de,q,re){k===void 0&&(k=b.a.BILINEAR_SAMPLINGMODE),de===void 0&&(de=0),q===void 0&&(q=""),re===void 0&&(re=!1);var fe=G.call(this,L,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],B,J,k,le,j,null,de,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return fe.blockCompilation=re,fe._packedFloat=!1,fe._staticDefines="",fe._staticDefines=q,fe.direction=ne,fe.onApplyObservable.add(function(ee){fe._outputTexture?ee.setFloat2("delta",1/fe._outputTexture.width*fe.direction.x,1/fe._outputTexture.height*fe.direction.y):ee.setFloat2("delta",1/fe.width*fe.direction.x,1/fe.height*fe.direction.y)}),fe.kernel=K,fe}return Object.defineProperty(V.prototype,"kernel",{get:function(){return this._idealKernel},set:function(L){this._idealKernel!==L&&(L=Math.max(L,1),this._idealKernel=L,this._kernel=this._nearestBestKernel(L),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(L){this._packedFloat!==L&&(this._packedFloat=L,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),V.prototype.getClassName=function(){return"BlurPostProcess"},V.prototype.updateEffect=function(L,ne,K,B,J,k){L===void 0&&(L=null),ne===void 0&&(ne=null),K===void 0&&(K=null),this._updateParameters(J,k)},V.prototype._updateParameters=function(L,ne){for(var K=this._kernel,B=(K-1)/2,J=[],k=[],le=0,j=0;j<K;j++){var de=j/(K-1),q=this._gaussianWeight(de*2-1);J[j]=j-B,k[j]=q,le+=q}for(var j=0;j<k.length;j++)k[j]/=le;for(var re=[],fe=[],ee=[],j=0;j<=B;j+=2){var W=Math.min(j+1,Math.floor(B)),Ee=j===W;if(Ee)ee.push({o:J[j],w:k[j]});else{var _e=W===B,oe=k[j]+k[W]*(_e?.5:1),ge=J[j]+1/(1+k[j]/k[W]);ge===0?(ee.push({o:J[j],w:k[j]}),ee.push({o:J[j+1],w:k[j+1]})):(ee.push({o:ge,w:oe}),ee.push({o:-ge,w:oe}))}}for(var j=0;j<ee.length;j++)fe[j]=ee[j].o,re[j]=ee[j].w;J=fe,k=re;var Q=this.getEngine().getCaps().maxVaryingVectors,pe=Math.max(Q,0)-1,ie=Math.min(J.length,pe),M="";M+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(M+="#define CENTER_WEIGHT "+this._glslFloat(k[ie-1])+`\r
`,ie--);for(var j=0;j<ie;j++)M+="#define KERNEL_OFFSET"+j+" "+this._glslFloat(J[j])+`\r
`,M+="#define KERNEL_WEIGHT"+j+" "+this._glslFloat(k[j])+`\r
`;for(var v=0,j=pe;j<J.length;j++)M+="#define KERNEL_DEP_OFFSET"+v+" "+this._glslFloat(J[j])+`\r
`,M+="#define KERNEL_DEP_WEIGHT"+v+" "+this._glslFloat(k[j])+`\r
`,v++;this.packedFloat&&(M+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,G.prototype.updateEffect.call(this,M,null,null,{varyingCount:ie,depCount:v},L,ne)},V.prototype._nearestBestKernel=function(L){for(var ne=Math.round(L),K=0,B=[ne,ne-1,ne+1,ne-2,ne+2];K<B.length;K++){var J=B[K];if(J%2!=0&&Math.floor(J/2)%2==0&&J>0)return Math.max(J,3)}return Math.max(ne,3)},V.prototype._gaussianWeight=function(L){var ne=1/3,K=Math.sqrt(2*Math.PI)*ne,B=-(L*L/(2*ne*ne)),J=1/K*Math.exp(B);return J},V.prototype._glslFloat=function(L,ne){return ne===void 0&&(ne=8),L.toFixed(ne).replace(/0+$/,"")},V._Parse=function(L,ne,K,B){return y.a.Parse(function(){return new V(L.name,L.direction,L.kernel,L.options,ne,L.renderTargetSamplingMode,K.getEngine(),L.reusable,L.textureType,void 0,!1)},L,K,B)},Object(f.c)([Object(y.c)("kernel")],V.prototype,"_kernel",void 0),Object(f.c)([Object(y.c)("packedFloat")],V.prototype,"_packedFloat",void 0),Object(f.c)([Object(y.n)()],V.prototype,"direction",void 0),V}(s.a);F.a.RegisteredTypes["BABYLON.BlurPostProcess"]=N},479:function($,H,o){"use strict";o.d(H,"a",function(){return T});var f=o(434),s=o(440),b=o(442),E=o(532),d=o(596),T=function(p){Object(f.d)(i,p);function i(t,e,n,r,a,l,h){n===void 0&&(n=null),r===void 0&&(r=!1),a===void 0&&(a=3),l===void 0&&(l=5);var u=p.call(this,null,n,!r,h,a,void 0,void 0,void 0,void 0,l)||this;u.name=t,u.wrapU=b.a.CLAMP_ADDRESSMODE,u.wrapV=b.a.CLAMP_ADDRESSMODE,u._generateMipMaps=r;var g=u._getEngine();if(!g)return u;e.getContext?(u._canvas=e,u._texture=g.createDynamicTexture(e.width,e.height,r,a)):(u._canvas=d.a.CreateCanvas(1,1),e.width||e.width===0?u._texture=g.createDynamicTexture(e.width,e.height,r,a):u._texture=g.createDynamicTexture(e,e,r,a));var R=u.getSize();return u._canvas.width=R.width,u._canvas.height=R.height,u._context=u._canvas.getContext("2d"),u}return i.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(i.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),i.prototype._recreate=function(t){this._canvas.width=t.width,this._canvas.height=t.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(t.width,t.height,this._generateMipMaps,this.samplingMode)},i.prototype.scale=function(t){var e=this.getSize();e.width*=t,e.height*=t,this._recreate(e)},i.prototype.scaleTo=function(t,e){var n=this.getSize();n.width=t,n.height=e,this._recreate(n)},i.prototype.getContext=function(){return this._context},i.prototype.clear=function(){var t=this.getSize();this._context.fillRect(0,0,t.width,t.height)},i.prototype.update=function(t,e){e===void 0&&(e=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,t===void 0?!0:t,e,this._format||void 0)},i.prototype.drawText=function(t,e,n,r,a,l,h,u){u===void 0&&(u=!0);var g=this.getSize();if(l&&(this._context.fillStyle=l,this._context.fillRect(0,0,g.width,g.height)),this._context.font=r,e==null){var R=this._context.measureText(t);e=(g.width-R.width)/2}if(n==null){var P=parseInt(r.replace(/\D/g,""));n=g.height/2+P/3.65}this._context.fillStyle=a||"",this._context.fillText(t,e,n),u&&this.update(h)},i.prototype.clone=function(){var t=this.getScene();if(!t)return this;var e=this.getSize(),n=new i(this.name,e,t,this._generateMipMaps);return n.hasAlpha=this.hasAlpha,n.level=this.level,n.wrapU=this.wrapU,n.wrapV=this.wrapV,n},i.prototype.serialize=function(){var t=this.getScene();t&&!t.isReady()&&s.a.Warn("The scene must be ready before serializing the dynamic texture");var e=p.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(e.base64String=this._canvas.toDataURL()),e.invertY=this._invertY,e.samplingMode=this.samplingMode,e},i.prototype._IsCanvasElement=function(t){return t.toDataURL!==void 0},i.prototype._rebuild=function(){this.update()},i}(b.a)},481:function($,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(434),s=o(443),b=o(439),E=function(){function d(T,p){this.engine=T,this._name=p,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(d.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),d.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(d.prototype,"isSupported",{get:function(){for(var T in this._renderEffects)if(this._renderEffects.hasOwnProperty(T)&&!this._renderEffects[T].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),d.prototype.addEffect=function(T){this._renderEffects[T._name]=T},d.prototype._rebuild=function(){},d.prototype._enableEffect=function(T,p){var i=this._renderEffects[T];!i||i._enable(s.b.MakeArray(p||this._cameras))},d.prototype._disableEffect=function(T,p){var i=this._renderEffects[T];!i||i._disable(s.b.MakeArray(p||this._cameras))},d.prototype._attachCameras=function(T,p){var i=s.b.MakeArray(T||this._cameras);if(!!i){var t=[],e;for(e=0;e<i.length;e++){var n=i[e];if(!!n){var r=n.name;this._cameras.indexOf(n)===-1?this._cameras[r]=n:p&&t.push(e)}}for(e=0;e<t.length;e++)i.splice(t[e],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(i)}},d.prototype._detachCameras=function(T){var p=s.b.MakeArray(T||this._cameras);if(!!p){for(var i in this._renderEffects)this._renderEffects.hasOwnProperty(i)&&this._renderEffects[i]._detachCameras(p);for(var t=0;t<p.length;t++)this._cameras.splice(this._cameras.indexOf(p[t]),1)}},d.prototype._update=function(){for(var T in this._renderEffects)this._renderEffects.hasOwnProperty(T)&&this._renderEffects[T]._update();for(var p=0;p<this._cameras.length;p++)if(!!this._cameras[p]){var i=this._cameras[p].name;this._renderEffectsForIsolatedPass[i]&&this._renderEffectsForIsolatedPass[i]._update()}},d.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},d.prototype._enableMSAAOnFirstPostProcess=function(T){if(!this.engine._features.supportMSAA)return!1;var p=Object.keys(this._renderEffects);if(p.length>0){var i=this._renderEffects[p[0]].getPostProcesses();i&&(i[0].samples=T)}return!0},d.prototype.setPrePassRenderer=function(T){return!1},d.prototype.dispose=function(){},Object(f.c)([Object(b.c)()],d.prototype,"_name",void 0),d}()},482:function($,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(452),s=o(548),b=o(449);Object.defineProperty(b.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var d=this._getComponent(f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);d||(d=new E(this),this._addComponent(d)),this._postProcessRenderPipelineManager=new s.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var E=function(){function d(T){this.name=f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=T}return d.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(f.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},d.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},d.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},d.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},d}()},486:function($,H,o){"use strict";o.d(H,"b",function(){return a}),o.d(H,"a",function(){return l});var f=o(434),s=o(444),b=o(445),E=o(435),d="passPixelShader",T=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;E.a.ShadersStore[d]=T;var p={name:d,shader:T},i="passCubePixelShader",t=`
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
}`;E.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(h){Object(f.d)(u,h);function u(g,R,P,A,C,x,I,F){return P===void 0&&(P=null),I===void 0&&(I=0),F===void 0&&(F=!1),h.call(this,g,"pass",null,null,R,P,A,C,x,void 0,I,void 0,null,F)||this}return u.prototype.getClassName=function(){return"PassPostProcess"},u._Parse=function(g,R,P,A){return r.a.Parse(function(){return new u(g.name,g.options,R,g.renderTargetSamplingMode,g._engine,g.reusable)},g,P,A)},u}(s.a);n.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var l=function(h){Object(f.d)(u,h);function u(g,R,P,A,C,x,I,F){P===void 0&&(P=null),I===void 0&&(I=0),F===void 0&&(F=!1);var y=h.call(this,g,"passCube",null,null,R,P,A,C,x,"#define POSITIVEX",I,void 0,null,F)||this;return y._face=0,y}return Object.defineProperty(u.prototype,"face",{get:function(){return this._face},set:function(g){if(!(g<0||g>5))switch(this._face=g,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),u.prototype.getClassName=function(){return"PassCubePostProcess"},u._Parse=function(g,R,P,A){return r.a.Parse(function(){return new u(g.name,g.options,R,g.renderTargetSamplingMode,g._engine,g.reusable)},g,P,A)},u}(s.a);b.a._RescalePostProcessFactory=function(h){return new a("rescale",1,null,2,h,!1,0)}},498:function($,H,o){"use strict";o.d(H,"a",function(){return p});var f=o(434),s=o(439),b=o(436),E=o(441),d=o(453),T=o(484);d.a.AddNodeConstructor("Light_Type_3",function(i,t){return function(){return new p(i,b.e.Zero(),t)}});var p=function(i){Object(f.d)(t,i);function t(e,n,r){var a=i.call(this,e,r)||this;return a.groundColor=new E.a(0,0,0),a.direction=n||b.e.Up(),a}return t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.getClassName=function(){return"HemisphericLight"},t.prototype.setDirectionToTarget=function(e){return this.direction=b.e.Normalize(e.subtract(b.e.Zero())),this.direction},t.prototype.getShadowGenerator=function(){return null},t.prototype.transferToEffect=function(e,n){var r=b.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",r.x,r.y,r.z,0,n),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),n),this},t.prototype.transferToNodeMaterialEffect=function(e,n){var r=b.e.Normalize(this.direction);return e.setFloat3(n,r.x,r.y,r.z),this},t.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=b.a.Identity()),this._worldMatrix},t.prototype.getTypeID=function(){return T.a.LIGHTTYPEID_HEMISPHERICLIGHT},t.prototype.prepareLightSpecificDefines=function(e,n){e["HEMILIGHT"+n]=!0},Object(f.c)([Object(s.e)()],t.prototype,"groundColor",void 0),Object(f.c)([Object(s.o)()],t.prototype,"direction",void 0),t}(T.a)},500:function($,H,o){"use strict";var f=o(434),s=o(456),b=o(440),E=o(595),d=o(467);d.a.prototype.createRenderTargetTexture=function(T,p){var i=new E.a;p!==void 0&&typeof p=="object"?(i.generateMipMaps=p.generateMipMaps,i.generateDepthBuffer=!!p.generateDepthBuffer,i.generateStencilBuffer=!!p.generateStencilBuffer,i.type=p.type===void 0?0:p.type,i.samplingMode=p.samplingMode===void 0?3:p.samplingMode,i.format=p.format===void 0?5:p.format):(i.generateMipMaps=p,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,b.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var t=this._gl,e=new s.a(this,s.b.RenderTarget),n=T.width||T,r=T.height||T,a=T.layers||0,l=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),h=a!==0?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D,u=this._getRGBABufferInternalSizedFormat(i.type,i.format),g=this._getInternalFormat(i.format),R=this._getWebGLTextureType(i.type);this._bindTextureDirectly(h,e),a!==0?(e.is2DArray=!0,t.texImage3D(h,0,u,n,r,a,0,g,R,null)):t.texImage2D(h,0,u,n,r,0,g,R,null),t.texParameteri(h,t.TEXTURE_MAG_FILTER,l.mag),t.texParameteri(h,t.TEXTURE_MIN_FILTER,l.min),t.texParameteri(h,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(h,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(h),this._bindTextureDirectly(h,null);var P=this._currentFramebuffer,A=t.createFramebuffer();return this._bindUnboundFramebuffer(A),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,n,r),e.is2DArray||t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(P),e._framebuffer=A,e.baseWidth=n,e.baseHeight=r,e.width=n,e.height=r,e.depth=a,e.isReady=!0,e.samples=1,e.generateMipMaps=!!i.generateMipMaps,e.samplingMode=i.samplingMode,e.type=i.type,e.format=i.format,e._generateDepthBuffer=i.generateDepthBuffer,e._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(e),e},d.a.prototype.createDepthStencilTexture=function(T,p){if(p.isCube){var i=T.width||T;return this._createDepthStencilCubeTexture(i,p)}else return this._createDepthStencilTexture(T,p)},d.a.prototype._createDepthStencilTexture=function(T,p){var i=this._gl,t=T.layers||0,e=t!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,n=new s.a(this,s.b.Depth);if(!this._caps.depthTextureExtension)return b.a.Error("Depth texture is not supported by your browser or hardware."),n;var r=Object(f.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},p);this._bindTextureDirectly(e,n,!0),this._setupDepthStencilTexture(n,T,r.generateStencil,r.bilinearFiltering,r.comparisonFunction);var a=r.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,l=r.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,h=l;return this.webGLVersion>1&&(h=r.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),n.is2DArray?i.texImage3D(e,0,h,n.width,n.height,t,0,l,a,null):i.texImage2D(e,0,h,n.width,n.height,0,l,a,null),this._bindTextureDirectly(e,null),n}},502:function($,H,o){"use strict";o.d(H,"a",function(){return fe});var f=o(436),s=o(447),b=o(442),E=o(538),d=o(454),T=o(441),p=o(455),i=o(533),t=o(476),e=o(459),n=o(435),r="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;n.a.IncludesShadersStore[r]=a;var l={name:r,shader:a},h=o(614),u=o(615),g=o(616),R="geometryPixelShader",P=`#extension GL_EXT_draw_buffers : require
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
`;n.a.ShadersStore[R]=P;var A={name:R,shader:P},C=o(487),x=o(496),I=o(497),F=o(501),y="geometryVertexDeclaration",N=`
uniform mat4 viewProjection;
uniform mat4 view;`;n.a.IncludesShadersStore[y]=N;var G={name:y,shader:N},V=o(674),L="geometryUboDeclaration",ne="#include<sceneUboDeclaration>";n.a.IncludesShadersStore[L]=ne;var K={name:L,shader:ne},B=o(507),J=o(508),k=o(488),le=o(489),j=o(675),de="geometryVertexShader",q=`precision highp float;
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
`;n.a.ShadersStore[de]=q;var re={name:de,shader:q},fe=function(){function ee(W,Ee){Ee===void 0&&(Ee=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=W,this._ratio=Ee,this._useUbo=W.getEngine().supportsUniformBuffers,ee._SceneComponentInitialization(this._scene),this._createRenderTargets()}return ee.prototype._linkPrePassRenderer=function(W){this._linkedWithPrePass=!0,this._prePassRenderer=W,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(Ee){}))},ee.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},ee.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},ee.prototype._forceTextureType=function(W,Ee){W===ee.POSITION_TEXTURE_TYPE?(this._positionIndex=Ee,this._enablePosition=!0):W===ee.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=Ee,this._enableVelocity=!0):W===ee.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=Ee,this._enableReflectivity=!0):W===ee.DEPTH_TEXTURE_TYPE?this._depthIndex=Ee:W===ee.NORMAL_TEXTURE_TYPE&&(this._normalIndex=Ee)},ee.prototype._setAttachments=function(W){this._attachments=W},ee.prototype._linkInternalTexture=function(W){this._multiRenderTarget._texture=W},Object.defineProperty(ee.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(W){this._multiRenderTarget.renderList=W},enumerable:!1,configurable:!0}),Object.defineProperty(ee.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),ee.prototype.getTextureIndex=function(W){switch(W){case ee.POSITION_TEXTURE_TYPE:return this._positionIndex;case ee.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case ee.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(ee.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(W){this._enablePosition=W,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(ee.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(W){this._enableVelocity=W,W||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(ee.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(W){this._enableReflectivity=W,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(ee.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(ee.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),ee.prototype.isReady=function(W,Ee){var _e=W.getMaterial();if(_e&&_e.disableDepthWrite)return!1;var oe=[],ge=[s.b.PositionKind,s.b.NormalKind],Q=W.getMesh();if(_e){var pe=!1;_e.needAlphaTesting()&&_e.getAlphaTestTexture()&&(oe.push("#define ALPHATEST"),oe.push("#define ALPHATEST_UV"+(_e.getAlphaTestTexture().coordinatesIndex+1)),pe=!0),_e.bumpTexture&&p.a.BumpTextureEnabled&&(oe.push("#define BUMP"),oe.push("#define BUMP_UV"+(_e.bumpTexture.coordinatesIndex+1)),pe=!0),this._enableReflectivity&&(_e instanceof p.a&&_e.specularTexture?(oe.push("#define HAS_SPECULAR"),oe.push("#define REFLECTIVITY_UV"+(_e.specularTexture.coordinatesIndex+1)),pe=!0):_e instanceof i.a&&_e.reflectivityTexture&&(oe.push("#define HAS_REFLECTIVITY"),oe.push("#define REFLECTIVITY_UV"+(_e.reflectivityTexture.coordinatesIndex+1)),pe=!0)),pe&&(oe.push("#define NEED_UV"),Q.isVerticesDataPresent(s.b.UVKind)&&(ge.push(s.b.UVKind),oe.push("#define UV1")),Q.isVerticesDataPresent(s.b.UV2Kind)&&(ge.push(s.b.UV2Kind),oe.push("#define UV2")))}this._linkedWithPrePass&&(oe.push("#define PREPASS"),this._depthIndex!==-1&&(oe.push("#define DEPTH_INDEX "+this._depthIndex),oe.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(oe.push("#define NORMAL_INDEX "+this._normalIndex),oe.push("#define PREPASS_NORMAL"))),this._enablePosition&&(oe.push("#define POSITION"),oe.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(oe.push("#define VELOCITY"),oe.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(Q)===-1&&oe.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(oe.push("#define REFLECTIVITY"),oe.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),Q.useBones&&Q.computeBonesUsingShaders?(ge.push(s.b.MatricesIndicesKind),ge.push(s.b.MatricesWeightsKind),Q.numBoneInfluencers>4&&(ge.push(s.b.MatricesIndicesExtraKind),ge.push(s.b.MatricesWeightsExtraKind)),oe.push("#define NUM_BONE_INFLUENCERS "+Q.numBoneInfluencers),oe.push("#define BonesPerMesh "+(Q.skeleton?Q.skeleton.bones.length+1:0))):oe.push("#define NUM_BONE_INFLUENCERS 0");var ie=Q.morphTargetManager,M=0;ie&&ie.numInfluencers>0&&(M=ie.numInfluencers,oe.push("#define MORPHTARGETS"),oe.push("#define NUM_MORPH_INFLUENCERS "+M),ie.isUsingTextureForTargets&&oe.push("#define MORPHTARGETS_TEXTURE"),d.a.PrepareAttributesForMorphTargetsInfluencers(ge,Q,M)),Ee&&(oe.push("#define INSTANCES"),d.a.PushAttributesForInstances(ge),W.getRenderingMesh().hasThinInstances&&oe.push("#define THIN_INSTANCES")),this._linkedWithPrePass?oe.push("#define RENDER_TARGET_COUNT "+this._attachments.length):oe.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var v=oe.join(`
`);return this._cachedDefines!==v&&(this._cachedDefines=v,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:ge,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:v,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:M}},this._scene.getEngine())),this._effect.isReady()},ee.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(ee.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(W){this._multiRenderTarget.samples=W},enumerable:!1,configurable:!0}),ee.prototype.dispose=function(){if(this._resizeObserver){var W=this._scene.getEngine();W.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},ee.prototype._assignRenderTargetIndices=function(){var W=2;return this._enablePosition&&(this._positionIndex=W,W++),this._enableVelocity&&(this._velocityIndex=W,W++),this._enableReflectivity&&(this._reflectivityIndex=W,W++),W},ee.prototype._createRenderTargets=function(){var W=this,Ee=this._scene.getEngine(),_e=this._assignRenderTargetIndices();if(this._multiRenderTarget=new E.a("gBuffer",{width:Ee.getRenderWidth()*this._ratio,height:Ee.getRenderHeight()*this._ratio},_e,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=b.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=b.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(ge){ge.clear(new T.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=Ee.onResizeObservable.add(function(){W._multiRenderTarget&&W._multiRenderTarget.resize({width:Ee.getRenderWidth()*W._ratio,height:Ee.getRenderHeight()*W._ratio})});var oe=function(ge){var Q=ge.getRenderingMesh(),pe=ge.getEffectiveMesh(),ie=W._scene,M=ie.getEngine(),v=ge.getMaterial();if(!!v){if(pe._internalAbstractMeshDataInfo._isActiveIntermediate=!1,W._enableVelocity&&!W._previousTransformationMatrices[pe.uniqueId]&&(W._previousTransformationMatrices[pe.uniqueId]={world:f.a.Identity(),viewProjection:ie.getTransformMatrix()},Q.skeleton)){var D=Q.skeleton.getTransformMatrices(Q);W._previousBonesTransformationMatrices[Q.uniqueId]=W._copyBonesTransformationMatrices(D,new Float32Array(D.length))}var O=Q._getInstancesRenderList(ge._id,!!ge.getReplacementMesh());if(!O.mustReturn){var Y=M.getCaps().instancedArrays&&(O.visibleInstances[ge._id]!==null||Q.hasThinInstances),z=pe.getWorldMatrix();if(W.isReady(ge,Y)){if(M.enableEffect(W._effect),Q._bind(ge,W._effect,v.fillMode),W._useUbo?(d.a.FinalizeSceneUbo(W._scene),d.a.BindSceneUniformBuffer(W._effect,W._scene.getSceneUniformBuffer())):(W._effect.setMatrix("viewProjection",ie.getTransformMatrix()),W._effect.setMatrix("view",ie.getViewMatrix())),v){var S,Z=Q._instanceDataStorage;if(!Z.isFrozen&&(v.backFaceCulling||v.overrideMaterialSideOrientation!==null)){var ve=pe._getWorldMatrixDeterminant();S=v.overrideMaterialSideOrientation,S==null&&(S=v.sideOrientation),ve<0&&(S=S===e.a.ClockWiseSideOrientation?e.a.CounterClockWiseSideOrientation:e.a.ClockWiseSideOrientation)}else S=Z.sideOrientation;if(v._preBind(W._effect,S),v.needAlphaTesting()){var Te=v.getAlphaTestTexture();Te&&(W._effect.setTexture("diffuseSampler",Te),W._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}v.bumpTexture&&ie.getEngine().getCaps().standardDerivatives&&p.a.BumpTextureEnabled&&(W._effect.setFloat3("vBumpInfos",v.bumpTexture.coordinatesIndex,1/v.bumpTexture.level,v.parallaxScaleBias),W._effect.setMatrix("bumpMatrix",v.bumpTexture.getTextureMatrix()),W._effect.setTexture("bumpSampler",v.bumpTexture),W._effect.setFloat2("vTangentSpaceParams",v.invertNormalMapX?-1:1,v.invertNormalMapY?-1:1)),W._enableReflectivity&&(v instanceof p.a&&v.specularTexture?(W._effect.setMatrix("reflectivityMatrix",v.specularTexture.getTextureMatrix()),W._effect.setTexture("reflectivitySampler",v.specularTexture)):v instanceof i.a&&v.reflectivityTexture&&(W._effect.setMatrix("reflectivityMatrix",v.reflectivityTexture.getTextureMatrix()),W._effect.setTexture("reflectivitySampler",v.reflectivityTexture)))}Q.useBones&&Q.computeBonesUsingShaders&&Q.skeleton&&(W._effect.setMatrices("mBones",Q.skeleton.getTransformMatrices(Q)),W._enableVelocity&&W._effect.setMatrices("mPreviousBones",W._previousBonesTransformationMatrices[Q.uniqueId])),d.a.BindMorphTargetParameters(Q,W._effect),Q.morphTargetManager&&Q.morphTargetManager.isUsingTextureForTargets&&Q.morphTargetManager._bind(W._effect),W._enableVelocity&&(W._effect.setMatrix("previousWorld",W._previousTransformationMatrices[pe.uniqueId].world),W._effect.setMatrix("previousViewProjection",W._previousTransformationMatrices[pe.uniqueId].viewProjection)),Q._processRendering(pe,ge,W._effect,v.fillMode,O,Y,function(Ae,Ce){return W._effect.setMatrix("world",Ce)})}W._enableVelocity&&(W._previousTransformationMatrices[pe.uniqueId].world=z.clone(),W._previousTransformationMatrices[pe.uniqueId].viewProjection=W._scene.getTransformMatrix().clone(),Q.skeleton&&W._copyBonesTransformationMatrices(Q.skeleton.getTransformMatrices(Q),W._previousBonesTransformationMatrices[pe.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(ge,Q,pe,ie){var M;if(W._linkedWithPrePass){if(!W._prePassRenderer.enabled)return;W._scene.getEngine().bindAttachments(W._attachments)}if(ie.length){for(Ee.setColorWrite(!1),M=0;M<ie.length;M++)oe(ie.data[M]);Ee.setColorWrite(!0)}for(M=0;M<ge.length;M++)oe(ge.data[M]);for(Ee.setDepthWrite(!1),M=0;M<Q.length;M++)oe(Q.data[M]);if(W.renderTransparentMeshes)for(M=0;M<pe.length;M++)oe(pe.data[M]);Ee.setDepthWrite(!0)}}},ee.prototype._copyBonesTransformationMatrices=function(W,Ee){for(var _e=0;_e<W.length;_e++)Ee[_e]=W[_e];return Ee},ee.DEPTH_TEXTURE_TYPE=0,ee.NORMAL_TEXTURE_TYPE=1,ee.POSITION_TEXTURE_TYPE=2,ee.VELOCITY_TEXTURE_TYPE=3,ee.REFLECTIVITY_TEXTURE_TYPE=4,ee._SceneComponentInitialization=function(W){throw t.a.WarnImport("GeometryBufferRendererSceneComponent")},ee}()},513:function($,H,o){"use strict";o.d(H,"a",function(){return T}),o.d(H,"b",function(){return p});var f=o(436),s=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],b=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],E=function(i,t){return s[i]*b[i](t)},d=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],T=function(){function i(){this.preScaled=!1,this.l00=f.e.Zero(),this.l1_1=f.e.Zero(),this.l10=f.e.Zero(),this.l11=f.e.Zero(),this.l2_2=f.e.Zero(),this.l2_1=f.e.Zero(),this.l20=f.e.Zero(),this.l21=f.e.Zero(),this.l22=f.e.Zero()}return i.prototype.addLight=function(t,e,n){var r=new f.e(e.r,e.g,e.b),a=r.scale(n);this.l00=this.l00.add(a.scale(E(0,t))),this.l1_1=this.l1_1.add(a.scale(E(1,t))),this.l10=this.l10.add(a.scale(E(2,t))),this.l11=this.l11.add(a.scale(E(3,t))),this.l2_2=this.l2_2.add(a.scale(E(4,t))),this.l2_1=this.l2_1.add(a.scale(E(5,t))),this.l20=this.l20.add(a.scale(E(6,t))),this.l21=this.l21.add(a.scale(E(7,t))),this.l22=this.l22.add(a.scale(E(8,t)))},i.prototype.scaleInPlace=function(t){this.l00.scaleInPlace(t),this.l1_1.scaleInPlace(t),this.l10.scaleInPlace(t),this.l11.scaleInPlace(t),this.l2_2.scaleInPlace(t),this.l2_1.scaleInPlace(t),this.l20.scaleInPlace(t),this.l21.scaleInPlace(t),this.l22.scaleInPlace(t)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(d[0]),this.l1_1.scaleInPlace(d[1]),this.l10.scaleInPlace(d[2]),this.l11.scaleInPlace(d[3]),this.l2_2.scaleInPlace(d[4]),this.l2_1.scaleInPlace(d[5]),this.l20.scaleInPlace(d[6]),this.l21.scaleInPlace(d[7]),this.l22.scaleInPlace(d[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(s[0]),this.l1_1.scaleInPlace(s[1]),this.l10.scaleInPlace(s[2]),this.l11.scaleInPlace(s[3]),this.l2_2.scaleInPlace(s[4]),this.l2_1.scaleInPlace(s[5]),this.l20.scaleInPlace(s[6]),this.l21.scaleInPlace(s[7]),this.l22.scaleInPlace(s[8])},i.FromArray=function(t){var e=new i;return f.e.FromArrayToRef(t[0],0,e.l00),f.e.FromArrayToRef(t[1],0,e.l1_1),f.e.FromArrayToRef(t[2],0,e.l10),f.e.FromArrayToRef(t[3],0,e.l11),f.e.FromArrayToRef(t[4],0,e.l2_2),f.e.FromArrayToRef(t[5],0,e.l2_1),f.e.FromArrayToRef(t[6],0,e.l20),f.e.FromArrayToRef(t[7],0,e.l21),f.e.FromArrayToRef(t[8],0,e.l22),e},i.FromPolynomial=function(t){var e=new i;return e.l00=t.xx.scale(.376127).add(t.yy.scale(.376127)).add(t.zz.scale(.376126)),e.l1_1=t.y.scale(.977204),e.l10=t.z.scale(.977204),e.l11=t.x.scale(.977204),e.l2_2=t.xy.scale(1.16538),e.l2_1=t.yz.scale(1.16538),e.l20=t.zz.scale(1.34567).subtract(t.xx.scale(.672834)).subtract(t.yy.scale(.672834)),e.l21=t.zx.scale(1.16538),e.l22=t.xx.scale(1.16538).subtract(t.yy.scale(1.16538)),e.l1_1.scaleInPlace(-1),e.l11.scaleInPlace(-1),e.l2_1.scaleInPlace(-1),e.l21.scaleInPlace(-1),e.scaleInPlace(Math.PI),e},i}(),p=function(){function i(){this.x=f.e.Zero(),this.y=f.e.Zero(),this.z=f.e.Zero(),this.xx=f.e.Zero(),this.yy=f.e.Zero(),this.zz=f.e.Zero(),this.xy=f.e.Zero(),this.yz=f.e.Zero(),this.zx=f.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=T.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(t){var e=new f.e(t.r,t.g,t.b);this.xx=this.xx.add(e),this.yy=this.yy.add(e),this.zz=this.zz.add(e)},i.prototype.scaleInPlace=function(t){this.x.scaleInPlace(t),this.y.scaleInPlace(t),this.z.scaleInPlace(t),this.xx.scaleInPlace(t),this.yy.scaleInPlace(t),this.zz.scaleInPlace(t),this.yz.scaleInPlace(t),this.zx.scaleInPlace(t),this.xy.scaleInPlace(t)},i.FromHarmonics=function(t){var e=new i;return e._harmonics=t,e.x=t.l11.scale(1.02333).scale(-1),e.y=t.l1_1.scale(1.02333).scale(-1),e.z=t.l10.scale(1.02333),e.xx=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).add(t.l22.scale(.429043)),e.yy=t.l00.scale(.886277).subtract(t.l20.scale(.247708)).subtract(t.l22.scale(.429043)),e.zz=t.l00.scale(.886277).add(t.l20.scale(.495417)),e.yz=t.l2_1.scale(.858086).scale(-1),e.zx=t.l21.scale(.858086).scale(-1),e.xy=t.l2_2.scale(.858086),e.scaleInPlace(1/Math.PI),e},i.FromArray=function(t){var e=new i;return f.e.FromArrayToRef(t[0],0,e.x),f.e.FromArrayToRef(t[1],0,e.y),f.e.FromArrayToRef(t[2],0,e.z),f.e.FromArrayToRef(t[3],0,e.xx),f.e.FromArrayToRef(t[4],0,e.yy),f.e.FromArrayToRef(t[5],0,e.zz),f.e.FromArrayToRef(t[6],0,e.yz),f.e.FromArrayToRef(t[7],0,e.zx),f.e.FromArrayToRef(t[8],0,e.xy),e},i}()},514:function($,H,o){"use strict";o.d(H,"a",function(){return b});var f=o(442),s=o(545),b=function(){function E(){}return E.GetEnvironmentBRDFTexture=function(d){if(!d.environmentBRDFTexture){var T=d.useDelayedTextureLoading;d.useDelayedTextureLoading=!1;var p=d._blockEntityCollection;d._blockEntityCollection=!1;var i=f.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,d,!0,!1,f.a.BILINEAR_SAMPLINGMODE);d._blockEntityCollection=p;var t=d.getEngine().getLoadedTexturesCache(),e=t.indexOf(i.getInternalTexture());e!==-1&&t.splice(e,1),i.isRGBD=!0,i.wrapU=f.a.CLAMP_ADDRESSMODE,i.wrapV=f.a.CLAMP_ADDRESSMODE,d.environmentBRDFTexture=i,d.useDelayedTextureLoading=T,s.a.ExpandRGBDTexture(i)}return d.environmentBRDFTexture},E._instanceNumber=0,E._environmentBRDFBase64Texture="data:image/png;base64,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",E}()},516:function($,H,o){"use strict";o.d(H,"a",function(){return ne});var f=o(434),s=o(439),b=o(443),E=o(438),d=o(441),T=o(445),p=o(448),i=o(447),t=o(442),e=o(458),n=o(459),r=o(454),a=o(435),l="glowMapGenerationPixelShader",h=`#ifdef DIFFUSE
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
}`;a.a.ShadersStore[l]=h;var u={name:l,shader:h},g=o(487),R=o(496),P=o(497),A=o(501),C=o(507),x=o(508),I=o(488),F=o(489),y="glowMapGenerationVertexShader",N=`
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
}`;a.a.ShadersStore[y]=N;var G={name:y,shader:N},V=o(476),L=o(512),ne=function(){function K(B,J){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new d.b},this.neutralColor=new d.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new E.c,this.onBeforeRenderMainTextureObservable=new E.c,this.onBeforeComposeObservable=new E.c,this.onBeforeRenderMeshToEffect=new E.c,this.onAfterRenderMeshToEffect=new E.c,this.onAfterComposeObservable=new E.c,this.onSizeChangedObservable=new E.c,this.name=B,this._scene=J||p.a.LastCreatedScene,K._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(K.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(K.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(B){this._effectLayerOptions.renderingGroupId=B},enumerable:!1,configurable:!0}),K.prototype._init=function(B){this._effectLayerOptions=Object(f.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},B),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},K.prototype._generateIndexBuffer=function(){var B=[];B.push(0),B.push(1),B.push(2),B.push(0),B.push(2),B.push(3),this._indexBuffer=this._engine.createIndexBuffer(B)},K.prototype._generateVertexBuffer=function(){var B=[];B.push(1,1),B.push(-1,1),B.push(-1,-1),B.push(1,-1);var J=new i.b(this._engine,B,i.b.PositionKind,!1,!1,2);this._vertexBuffers[i.b.PositionKind]=J},K.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?T.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?T.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},K.prototype._createMainTexture=function(){var B=this;if(this._mainTexture=new e.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=t.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=t.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(t.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(k,le,j,de){B.onBeforeRenderMainTextureObservable.notifyObservers(B);var q,re=B._scene.getEngine();if(de.length){for(re.setColorWrite(!1),q=0;q<de.length;q++)B._renderSubMesh(de.data[q]);re.setColorWrite(!0)}for(q=0;q<k.length;q++)B._renderSubMesh(k.data[q]);for(q=0;q<le.length;q++)B._renderSubMesh(le.data[q]);var fe=re.getAlphaMode();for(q=0;q<j.length;q++)B._renderSubMesh(j.data[q],!0);re.setAlphaMode(fe)},this._mainTexture.onClearObservable.add(function(k){k.clear(B.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var J=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){B._scene.getBoundingBoxRenderer().enabled=!B.disableBoundingBoxesFromEffectLayer&&J}),this._mainTexture.onAfterUnbindObservable.add(function(){B._scene.getBoundingBoxRenderer().enabled=J})}},K.prototype._addCustomEffectDefines=function(B){},K.prototype._isReady=function(B,J,k){var le=B.getMaterial();if(!le||!le.isReadyForSubMesh(B.getMesh(),B,J))return!1;var j=[],de=[i.b.PositionKind],q=B.getMesh(),re=!1,fe=!1;if(le){var ee=le.needAlphaTesting(),W=le.getAlphaTestTexture(),Ee=W&&W.hasAlpha&&(le.useAlphaFromDiffuseTexture||le._useAlphaFromAlbedoTexture);W&&(ee||Ee)&&(j.push("#define DIFFUSE"),q.isVerticesDataPresent(i.b.UV2Kind)&&W.coordinatesIndex===1?(j.push("#define DIFFUSEUV2"),fe=!0):q.isVerticesDataPresent(i.b.UVKind)&&(j.push("#define DIFFUSEUV1"),re=!0),ee&&(j.push("#define ALPHATEST"),j.push("#define ALPHATESTVALUE 0.4")));var _e=le.opacityTexture;_e&&(j.push("#define OPACITY"),q.isVerticesDataPresent(i.b.UV2Kind)&&_e.coordinatesIndex===1?(j.push("#define OPACITYUV2"),fe=!0):q.isVerticesDataPresent(i.b.UVKind)&&(j.push("#define OPACITYUV1"),re=!0))}k&&(j.push("#define EMISSIVE"),q.isVerticesDataPresent(i.b.UV2Kind)&&k.coordinatesIndex===1?(j.push("#define EMISSIVEUV2"),fe=!0):q.isVerticesDataPresent(i.b.UVKind)&&(j.push("#define EMISSIVEUV1"),re=!0)),q.isVerticesDataPresent(i.b.ColorKind)&&q.hasVertexAlpha&&(de.push(i.b.ColorKind),j.push("#define VERTEXALPHA")),re&&(de.push(i.b.UVKind),j.push("#define UV1")),fe&&(de.push(i.b.UV2Kind),j.push("#define UV2"));var oe=new L.a;if(q.useBones&&q.computeBonesUsingShaders){de.push(i.b.MatricesIndicesKind),de.push(i.b.MatricesWeightsKind),q.numBoneInfluencers>4&&(de.push(i.b.MatricesIndicesExtraKind),de.push(i.b.MatricesWeightsExtraKind)),j.push("#define NUM_BONE_INFLUENCERS "+q.numBoneInfluencers);var ge=q.skeleton;ge&&ge.isUsingTextureForMatrices?j.push("#define BONETEXTURE"):j.push("#define BonesPerMesh "+(ge?ge.bones.length+1:0)),q.numBoneInfluencers>0&&oe.addCPUSkinningFallback(0,q)}else j.push("#define NUM_BONE_INFLUENCERS 0");var Q=q.morphTargetManager,pe=0;Q&&Q.numInfluencers>0&&(j.push("#define MORPHTARGETS"),pe=Q.numInfluencers,j.push("#define NUM_MORPH_INFLUENCERS "+pe),Q.isUsingTextureForTargets&&j.push("#define MORPHTARGETS_TEXTURE"),r.a.PrepareAttributesForMorphTargetsInfluencers(de,q,pe)),J&&(j.push("#define INSTANCES"),r.a.PushAttributesForInstances(de),B.getRenderingMesh().hasThinInstances&&j.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(j);var ie=j.join(`
`);return this._cachedDefines!==ie&&(this._cachedDefines=ie,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",de,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],ie,oe,void 0,void 0,{maxSimultaneousMorphTargets:pe})),this._effectLayerMapGenerationEffect.isReady()},K.prototype.render=function(){var B=this._mergeEffect;if(!!B.isReady()){for(var J=0;J<this._postProcesses.length;J++)if(!this._postProcesses[J].isReady())return;var k=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),k.enableEffect(B),k.setState(!1),k.bindBuffers(this._vertexBuffers,this._indexBuffer,B);var le=k.getAlphaMode();k.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(B),k.setAlphaMode(le),this.onAfterComposeObservable.notifyObservers(this);var j=this._mainTexture.getSize();this._setMainTextureSize(),(j.width!==this._mainTextureDesiredSize.width||j.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},K.prototype.hasMesh=function(B){return this.renderingGroupId===-1||B.renderingGroupId===this.renderingGroupId},K.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},K.prototype._shouldRenderMesh=function(B){return!0},K.prototype._canRenderMesh=function(B,J){return!J.needAlphaBlendingForMesh(B)},K.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},K.prototype._renderSubMesh=function(B,J){var k=this,le;if(J===void 0&&(J=!1),!!this.shouldRender()){var j=B.getMaterial(),de=B.getMesh(),q=B.getReplacementMesh(),re=B.getRenderingMesh(),fe=B.getEffectiveMesh(),ee=this._scene,W=ee.getEngine();if(fe._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!j&&!!this._canRenderMesh(re,j)){var Ee=(le=re.overrideMaterialSideOrientation)!==null&&le!==void 0?le:j.sideOrientation,_e=re._getWorldMatrixDeterminant();_e<0&&(Ee=Ee===n.a.ClockWiseSideOrientation?n.a.CounterClockWiseSideOrientation:n.a.ClockWiseSideOrientation);var oe=Ee===n.a.ClockWiseSideOrientation;W.setState(j.backFaceCulling,j.zOffset,void 0,oe);var ge=re._getInstancesRenderList(B._id,!!q);if(!ge.mustReturn&&!!this._shouldRenderMesh(re)){var Q=ge.hardwareInstancedRendering[B._id]||re.hasThinInstances;if(this._setEmissiveTextureAndColor(re,B,j),this.onBeforeRenderMeshToEffect.notifyObservers(de),this._useMeshMaterial(re))re.render(B,Q,q||void 0);else if(this._isReady(B,Q,this._emissiveTextureAndColor.texture)){W.enableEffect(this._effectLayerMapGenerationEffect),re._bind(B,this._effectLayerMapGenerationEffect,n.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",ee.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",fe.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var pe=j.needAlphaTesting(),ie=j.getAlphaTestTexture(),M=ie&&ie.hasAlpha&&(j.useAlphaFromDiffuseTexture||j._useAlphaFromAlbedoTexture);if(ie&&(pe||M)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",ie);var v=ie.getTextureMatrix();v&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",v)}var D=j.opacityTexture;if(D){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",D),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",D.level);var v=D.getTextureMatrix();v&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",v)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),re.useBones&&re.computeBonesUsingShaders&&re.skeleton){var O=re.skeleton;if(O.isUsingTextureForMatrices){var Y=O.getTransformMatrixTexture(re);if(!Y)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",Y),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(O.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",O.getTransformMatrices(re))}r.a.BindMorphTargetParameters(re,this._effectLayerMapGenerationEffect),re.morphTargetManager&&re.morphTargetManager.isUsingTextureForTargets&&re.morphTargetManager._bind(this._effectLayerMapGenerationEffect),J&&W.setAlphaMode(j.alphaMode),re._processRendering(fe,B,this._effectLayerMapGenerationEffect,j.fillMode,ge,Q,function(z,S){return k._effectLayerMapGenerationEffect.setMatrix("world",S)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(de)}}}},K.prototype._useMeshMaterial=function(B){return!1},K.prototype._rebuild=function(){var B=this._vertexBuffers[i.b.PositionKind];B&&B._rebuild(),this._generateIndexBuffer()},K.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var B=0;B<this._postProcesses.length;B++)this._postProcesses[B]&&this._postProcesses[B].dispose();this._postProcesses=[];for(var B=0;B<this._textures.length;B++)this._textures[B]&&this._textures[B].dispose();this._textures=[]},K.prototype.dispose=function(){var B=this._vertexBuffers[i.b.PositionKind];B&&(B.dispose(),this._vertexBuffers[i.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var J=this._scene.effectLayers.indexOf(this,0);J>-1&&this._scene.effectLayers.splice(J,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},K.prototype.getClassName=function(){return"EffectLayer"},K.Parse=function(B,J,k){var le=b.b.Instantiate(B.customType);return le.Parse(B,J,k)},K._SceneComponentInitialization=function(B){throw V.a.WarnImport("EffectLayerSceneComponent")},Object(f.c)([Object(s.c)()],K.prototype,"name",void 0),Object(f.c)([Object(s.f)()],K.prototype,"neutralColor",void 0),Object(f.c)([Object(s.c)()],K.prototype,"isEnabled",void 0),Object(f.c)([Object(s.d)()],K.prototype,"camera",null),Object(f.c)([Object(s.c)()],K.prototype,"renderingGroupId",null),Object(f.c)([Object(s.c)()],K.prototype,"disableBoundingBoxesFromEffectLayer",void 0),K}()},517:function($,H,o){"use strict";o.d(H,"a",function(){return a});var f=o(434),s=o(442),b=o(444),E=o(435),d="fxaaPixelShader",T=`uniform sampler2D textureSampler;
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
}`;E.a.ShadersStore[d]=T;var p={name:d,shader:T},i="fxaaVertexShader",t=`
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
}`;E.a.ShadersStore[i]=t;var e={name:i,shader:t},n=o(437),r=o(439),a=function(l){Object(f.d)(h,l);function h(u,g,R,P,A,C,x){R===void 0&&(R=null),x===void 0&&(x=0);var I=l.call(this,u,"fxaa",["texelSize"],null,g,R,P||s.a.BILINEAR_SAMPLINGMODE,A,C,null,x,"fxaa",void 0,!0)||this,F=I._getDefines();return I.updateEffect(F),I.onApplyObservable.add(function(y){var N=I.texelSize;y.setFloat2("texelSize",N.x,N.y)}),I}return h.prototype.getClassName=function(){return"FxaaPostProcess"},h.prototype._getDefines=function(){var u=this.getEngine();if(!u)return null;var g=u.getGlInfo();return g&&g.renderer&&g.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},h._Parse=function(u,g,R,P){return r.a.Parse(function(){return new h(u.name,u.options,g,u.renderTargetSamplingMode,R.getEngine(),u.reusable)},u,R,P)},h}(b.a);n.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function($,H,o){"use strict";o.d(H,"a",function(){return i});var f=o(434),s=o(439),b=o(491),E=o(444),d=o(448),T=o(644),p=o(534),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,h,u,g,R){a===void 0&&(a=null),g===void 0&&(g=0);var P=t.call(this,n,"imageProcessing",[],[],r,a,l,h,u,null,g,"postprocess",null,!0)||this;return P._fromLinearSpace=!0,P._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},R?(R.applyByPostProcess=!0,P._attachImageProcessingConfiguration(R,!0),P.fromLinearSpace=!1):(P._attachImageProcessingConfiguration(null,!0),P.imageProcessingConfiguration.applyByPostProcess=!0),P.onApply=function(A){P.imageProcessingConfiguration.bind(A,P.aspectRatio)},P}return Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(n){n.applyByPostProcess=!0,this._attachImageProcessingConfiguration(n)},enumerable:!1,configurable:!0}),e.prototype._attachImageProcessingConfiguration=function(n,r){var a=this;if(r===void 0&&(r=!1),n!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),n)this._imageProcessingConfiguration=n;else{var l=null,h=this.getEngine(),u=this.getCamera();if(u)l=u.getScene();else if(h&&h.scenes){var g=h.scenes;l=g[g.length-1]}else l=d.a.LastCreatedScene;l?this._imageProcessingConfiguration=l.imageProcessingConfiguration:this._imageProcessingConfiguration=new b.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),r||this._updateParameters()}},Object.defineProperty(e.prototype,"isSupported",{get:function(){var n=this.getEffect();return!n||n.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(n){this.imageProcessingConfiguration.colorCurves=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(n){this.imageProcessingConfiguration.colorCurvesEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(n){this.imageProcessingConfiguration.colorGradingTexture=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(n){this.imageProcessingConfiguration.colorGradingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(n){this.imageProcessingConfiguration.exposure=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(n){this._imageProcessingConfiguration.toneMappingEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(n){this._imageProcessingConfiguration.toneMappingType=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(n){this.imageProcessingConfiguration.contrast=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(n){this.imageProcessingConfiguration.vignetteStretch=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(n){this.imageProcessingConfiguration.vignetteCentreX=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(n){this.imageProcessingConfiguration.vignetteCentreY=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(n){this.imageProcessingConfiguration.vignetteWeight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(n){this.imageProcessingConfiguration.vignetteColor=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(n){this.imageProcessingConfiguration.vignetteCameraFov=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(n){this.imageProcessingConfiguration.vignetteBlendMode=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(n){this.imageProcessingConfiguration.vignetteEnabled=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(n){this._fromLinearSpace!==n&&(this._fromLinearSpace=n,this._updateParameters())},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"ImageProcessingPostProcess"},e.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var n="";for(var r in this._defines)this._defines[r]&&(n+="#define "+r+`;\r
`);var a=["textureSampler"],l=["scale"];b.a&&(b.a.PrepareSamplers(a,this._defines),b.a.PrepareUniforms(l,this._defines)),this.updateEffect(n,l,a)},e.prototype.dispose=function(n){t.prototype.dispose.call(this,n),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(f.c)([Object(s.c)()],e.prototype,"_fromLinearSpace",void 0),e}(E.a)},521:function($,H,o){"use strict";o.d(H,"a",function(){return p});var f=o(436),s=o(450),b=o(513),E=o(515),d=o(441),T=function(){function i(t,e,n,r){this.name=t,this.worldAxisForNormal=e,this.worldAxisForFileX=n,this.worldAxisForFileY=r}return i}(),p=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(t){var e=this,n;if(!t.isCube)return null;(n=t.getScene())===null||n===void 0||n.getEngine().flushFramebuffer();var r=t.getSize().width,a=t.readPixels(0,void 0,void 0,!1),l=t.readPixels(1,void 0,void 0,!1),h,u;t.isRenderTarget?(h=t.readPixels(3,void 0,void 0,!1),u=t.readPixels(2,void 0,void 0,!1)):(h=t.readPixels(2,void 0,void 0,!1),u=t.readPixels(3,void 0,void 0,!1));var g=t.readPixels(4,void 0,void 0,!1),R=t.readPixels(5,void 0,void 0,!1),P=t.gammaSpace,A=5,C=0;return(t.textureType==1||t.textureType==2)&&(C=1),new Promise(function(x,I){Promise.all([l,a,h,u,g,R]).then(function(F){var y=F[0],N=F[1],G=F[2],V=F[3],L=F[4],ne=F[5],K={size:r,right:N,left:y,up:G,down:V,front:L,back:ne,format:A,type:C,gammaSpace:P};x(e.ConvertCubeMapToSphericalPolynomial(K))})})},i.ConvertCubeMapToSphericalPolynomial=function(t){for(var e=new b.a,n=0,r=2/t.size,a=r,l=r*.5-1,h=0;h<6;h++)for(var u=this.FileFaces[h],g=t[u.name],R=l,P=t.format===5?4:3,A=0;A<t.size;A++){for(var C=l,x=0;x<t.size;x++){var I=u.worldAxisForFileX.scale(C).add(u.worldAxisForFileY.scale(R)).add(u.worldAxisForNormal);I.normalize();var F=Math.pow(1+C*C+R*R,-3/2),y=g[A*t.size*P+x*P+0],N=g[A*t.size*P+x*P+1],G=g[A*t.size*P+x*P+2];isNaN(y)&&(y=0),isNaN(N)&&(N=0),isNaN(G)&&(G=0),t.type===0&&(y/=255,N/=255,G/=255),t.gammaSpace&&(y=Math.pow(s.a.Clamp(y),E.c),N=Math.pow(s.a.Clamp(N),E.c),G=Math.pow(s.a.Clamp(G),E.c));var V=4096;y=s.a.Clamp(y,0,V),N=s.a.Clamp(N,0,V),G=s.a.Clamp(G,0,V);var L=new d.a(y,N,G);e.addLight(I,L,F),n+=F,C+=r}R+=a}var ne=4*Math.PI,K=6,B=ne*K/6,J=B/n;return e.scaleInPlace(J),e.convertIncidentRadianceToIrradiance(),e.convertIrradianceToLambertianRadiance(),b.b.FromHarmonics(e)},i.FileFaces=[new T("right",new f.e(1,0,0),new f.e(0,0,-1),new f.e(0,-1,0)),new T("left",new f.e(-1,0,0),new f.e(0,0,1),new f.e(0,-1,0)),new T("up",new f.e(0,1,0),new f.e(1,0,0),new f.e(0,0,1)),new T("down",new f.e(0,-1,0),new f.e(1,0,0),new f.e(0,0,-1)),new T("front",new f.e(0,0,1),new f.e(1,0,0),new f.e(0,-1,0)),new T("back",new f.e(0,0,-1),new f.e(-1,0,0),new f.e(0,-1,0))],i}()},522:function($,H,o){"use strict";var f=o(434),s=o(456),b=o(440),E=o(467);E.a.prototype.createRenderTargetCubeTexture=function(d,T){var p=Object(f.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},T);p.generateStencilBuffer=p.generateDepthBuffer&&p.generateStencilBuffer,(p.type===1&&!this._caps.textureFloatLinearFiltering||p.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(p.samplingMode=1);var i=this._gl,t=new s.a(this,s.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,t,!0);var e=this._getSamplingParameters(p.samplingMode,p.generateMipMaps);p.type===1&&!this._caps.textureFloat&&(p.type=0,b.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,e.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,e.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var n=0;n<6;n++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,this._getRGBABufferInternalSizedFormat(p.type,p.format),d,d,0,this._getInternalFormat(p.format),this._getWebGLTextureType(p.type),null);var r=i.createFramebuffer();return this._bindUnboundFramebuffer(r),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(p.generateStencilBuffer,p.generateDepthBuffer,d,d),p.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),t._framebuffer=r,t.width=d,t.height=d,t.isReady=!0,t.isCube=!0,t.samples=1,t.generateMipMaps=p.generateMipMaps,t.samplingMode=p.samplingMode,t.type=p.type,t.format=p.format,t._generateDepthBuffer=p.generateDepthBuffer,t._generateStencilBuffer=p.generateStencilBuffer,this._internalTexturesCache.push(t),t}},523:function($,H,o){"use strict";var f=o(521),s=o(477);Object.defineProperty(s.a.prototype,"sphericalPolynomial",{get:function(){var b=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=f.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(E){b._texture._sphericalPolynomial=E,b._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(b){this._texture&&(this._texture._sphericalPolynomial=b)},enumerable:!0,configurable:!0})},529:function($,H,o){"use strict";o.d(H,"b",function(){return Be}),o.d(H,"a",function(){return Bt});var f=o(434),s=o(439),b=o(440),E=o(490),d=o(514),T=o(449),p=o(436),i=o(447),t=o(626),e=o(480),n=o(454),r=function(){function w(_){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new p.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=_}return w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype.isReadyForSubMesh=function(_,c){return!(_._areTexturesDirty&&c.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},w.prototype.prepareDefines=function(_,c,m){this._isEnabled?(_.ANISOTROPIC=this._isEnabled,this._isEnabled&&!c.isVerticesDataPresent(i.b.TangentKind)&&(_._needUVs=!0,_.MAINUV1=!0),_._areTexturesDirty&&m.texturesEnabled&&(this._texture&&e.a.AnisotropicTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,_,"ANISOTROPIC_TEXTURE"):_.ANISOTROPIC_TEXTURE=!1)):(_.ANISOTROPIC=!1,_.ANISOTROPIC_TEXTURE=!1)},w.prototype.bindForSubMesh=function(_,c,m){(!_.useUbo||!m||!_.isSync)&&(this._texture&&e.a.AnisotropicTextureEnabled&&(_.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),n.a.BindTextureMatrix(this._texture,_,"anisotropy")),_.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),c.texturesEnabled&&this._texture&&e.a.AnisotropicTextureEnabled&&_.setTexture("anisotropySampler",this._texture)},w.prototype.hasTexture=function(_){return this._texture===_},w.prototype.getActiveTextures=function(_){this._texture&&_.push(this._texture)},w.prototype.getAnimatables=function(_){this._texture&&this._texture.animations&&this._texture.animations.length>0&&_.push(this._texture)},w.prototype.dispose=function(_){_&&this._texture&&this._texture.dispose()},w.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},w.AddFallbacks=function(_,c,m){return _.ANISOTROPIC&&c.addFallback(m++,"ANISOTROPIC"),m},w.AddUniforms=function(_){_.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},w.PrepareUniformBuffer=function(_){_.addUniform("vAnisotropy",3),_.addUniform("vAnisotropyInfos",2),_.addUniform("anisotropyMatrix",16)},w.AddSamplers=function(_){_.push("anisotropySampler")},w.prototype.copyTo=function(_){s.a.Clone(function(){return _},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(_,c,m){var U=this;s.a.Parse(function(){return U},_,c,m)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)()],w.prototype,"intensity",void 0),Object(f.c)([Object(s.n)()],w.prototype,"direction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"texture",void 0),w}(),a=function(){function w(_){this._useEnergyConservation=w.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=w.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=w.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=w.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=_}return w.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},w.prototype.prepareDefines=function(_){_.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,_.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,_.SPHERICAL_HARMONICS=this._useSphericalHarmonics,_.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},w.prototype.getClassName=function(){return"PBRBRDFConfiguration"},w.prototype.copyTo=function(_){s.a.Clone(function(){return _},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(_,c,m){var U=this;s.a.Parse(function(){return U},_,c,m)},w.DEFAULT_USE_ENERGY_CONSERVATION=!0,w.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,w.DEFAULT_USE_SPHERICAL_HARMONICS=!0,w.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useEnergyConservation",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSphericalHarmonics",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],w.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),w}(),l=o(441),h=function(){function w(_){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=l.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=_}return w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype.isReadyForSubMesh=function(_,c){return!(_._areTexturesDirty&&c.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&e.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},w.prototype.prepareDefines=function(_,c){var m;this._isEnabled?(_.SHEEN=this._isEnabled,_.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,_.SHEEN_ROUGHNESS=this._roughness!==null,_.SHEEN_ALBEDOSCALING=this._albedoScaling,_.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,_.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((m=this._textureRoughness)===null||m===void 0?void 0:m._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),_._areTexturesDirty&&c.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._texture,_,"SHEEN_TEXTURE"):_.SHEEN_TEXTURE=!1,this._textureRoughness&&e.a.SheenTextureEnabled?n.a.PrepareDefinesForMergedUV(this._textureRoughness,_,"SHEEN_TEXTURE_ROUGHNESS"):_.SHEEN_TEXTURE_ROUGHNESS=!1)):(_.SHEEN=!1,_.SHEEN_TEXTURE=!1,_.SHEEN_TEXTURE_ROUGHNESS=!1,_.SHEEN_LINKWITHALBEDO=!1,_.SHEEN_ROUGHNESS=!1,_.SHEEN_ALBEDOSCALING=!1,_.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,_.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},w.prototype.bindForSubMesh=function(_,c,m,U){var ae,he,te,Re,se,X,ue,me,Se=U._materialDefines,ce=Se.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!_.useUbo||!m||!_.isSync)&&(ce&&e.a.SheenTextureEnabled?(_.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),n.a.BindTextureMatrix(this._texture,_,"sheen")):(this._texture||this._textureRoughness)&&e.a.SheenTextureEnabled&&(_.updateFloat4("vSheenInfos",(he=(ae=this._texture)===null||ae===void 0?void 0:ae.coordinatesIndex)!==null&&he!==void 0?he:0,(Re=(te=this._texture)===null||te===void 0?void 0:te.level)!==null&&Re!==void 0?Re:0,(X=(se=this._textureRoughness)===null||se===void 0?void 0:se.coordinatesIndex)!==null&&X!==void 0?X:0,(me=(ue=this._textureRoughness)===null||ue===void 0?void 0:ue.level)!==null&&me!==void 0?me:0),this._texture&&n.a.BindTextureMatrix(this._texture,_,"sheen"),this._textureRoughness&&!ce&&!Se.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&n.a.BindTextureMatrix(this._textureRoughness,_,"sheenRoughness")),_.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&_.updateFloat("vSheenRoughness",this._roughness)),c.texturesEnabled&&(this._texture&&e.a.SheenTextureEnabled&&_.setTexture("sheenSampler",this._texture),this._textureRoughness&&!ce&&!Se.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&e.a.SheenTextureEnabled&&_.setTexture("sheenRoughnessSampler",this._textureRoughness))},w.prototype.hasTexture=function(_){return this._texture===_||this._textureRoughness===_},w.prototype.getActiveTextures=function(_){this._texture&&_.push(this._texture),this._textureRoughness&&_.push(this._textureRoughness)},w.prototype.getAnimatables=function(_){this._texture&&this._texture.animations&&this._texture.animations.length>0&&_.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&_.push(this._textureRoughness)},w.prototype.dispose=function(_){var c,m;_&&((c=this._texture)===null||c===void 0||c.dispose(),(m=this._textureRoughness)===null||m===void 0||m.dispose())},w.prototype.getClassName=function(){return"PBRSheenConfiguration"},w.AddFallbacks=function(_,c,m){return _.SHEEN&&c.addFallback(m++,"SHEEN"),m},w.AddUniforms=function(_){_.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},w.PrepareUniformBuffer=function(_){_.addUniform("vSheenColor",4),_.addUniform("vSheenRoughness",1),_.addUniform("vSheenInfos",4),_.addUniform("sheenMatrix",16),_.addUniform("sheenRoughnessMatrix",16)},w.AddSamplers=function(_){_.push("sheenSampler"),_.push("sheenRoughnessSampler")},w.prototype.copyTo=function(_){s.a.Clone(function(){return _},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(_,c,m){var U=this;s.a.Parse(function(){return U},_,c,m)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"linkSheenWithAlbedo",void 0),Object(f.c)([Object(s.c)()],w.prototype,"intensity",void 0),Object(f.c)([Object(s.e)()],w.prototype,"color",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"texture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"roughness",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"textureRoughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"albedoScaling",void 0),w}(),u=o(450),g=function(){function w(_,c,m){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=l.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=l.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=_,this._internalMarkScenePrePassDirty=c,this._scene=m}return Object.defineProperty(w.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(_){!this._scene.enableSubSurfaceForPrePass()||_&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(_))},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(_){_>=1?this._volumeIndexOfRefraction=_:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),w.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},w.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},w.prototype.isReadyForSubMesh=function(_,c){if(_._areTexturesDirty&&c.texturesEnabled){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var m=this._getRefractionTexture(c);if(m&&e.a.RefractionTextureEnabled&&!m.isReadyOrNotBlocking())return!1}return!0},w.prototype.prepareDefines=function(_,c){if(_._areTexturesDirty&&(_.SUBSURFACE=!1,_.SS_TRANSLUCENCY=this._isTranslucencyEnabled,_.SS_SCATTERING=this._isScatteringEnabled,_.SS_THICKNESSANDMASK_TEXTURE=!1,_.SS_MASK_FROM_THICKNESS_TEXTURE=!1,_.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,_.SS_REFRACTION=!1,_.SS_REFRACTIONMAP_3D=!1,_.SS_GAMMAREFRACTION=!1,_.SS_RGBDREFRACTION=!1,_.SS_LINEARSPECULARREFRACTION=!1,_.SS_REFRACTIONMAP_OPPOSITEZ=!1,_.SS_LODINREFRACTIONALPHA=!1,_.SS_LINKREFRACTIONTOTRANSPARENCY=!1,_.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(_.SUBSURFACE=!0,_._areTexturesDirty&&c.texturesEnabled&&this._thicknessTexture&&e.a.ThicknessTextureEnabled&&n.a.PrepareDefinesForMergedUV(this._thicknessTexture,_,"SS_THICKNESSANDMASK_TEXTURE"),_.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,_.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&c.texturesEnabled)){var m=this._getRefractionTexture(c);m&&e.a.RefractionTextureEnabled&&(_.SS_REFRACTION=!0,_.SS_REFRACTIONMAP_3D=m.isCube,_.SS_GAMMAREFRACTION=m.gammaSpace,_.SS_RGBDREFRACTION=m.isRGBD,_.SS_LINEARSPECULARREFRACTION=m.linearSpecularLOD,_.SS_REFRACTIONMAP_OPPOSITEZ=m.invertZ,_.SS_LODINREFRACTIONALPHA=m.lodLevelInAlpha,_.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,_.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},w.prototype.bindForSubMesh=function(_,c,m,U,ae,he){var te=this._getRefractionTexture(c);if(!_.useUbo||!U||!_.isSync){if(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&(_.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),n.a.BindTextureMatrix(this._thicknessTexture,_,"thickness")),_.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),te&&e.a.RefractionTextureEnabled){_.updateMatrix("refractionMatrix",te.getReflectionTextureMatrix());var Re=1;te.isCube||te.depth&&(Re=te.depth);var se=te.getSize().width,X=this.volumeIndexOfRefraction;_.updateFloat4("vRefractionInfos",te.level,1/X,Re,this._invertRefractionY?-1:1),_.updateFloat3("vRefractionMicrosurfaceInfos",se,te.lodGenerationScale,te.lodGenerationOffset),he&&_.updateFloat2("vRefractionFilteringInfo",se,u.a.Log2(se))}this.isScatteringEnabled&&_.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),_.updateColor3("vDiffusionDistance",this.diffusionDistance),_.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),_.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}c.texturesEnabled&&(this._thicknessTexture&&e.a.ThicknessTextureEnabled&&_.setTexture("thicknessSampler",this._thicknessTexture),te&&e.a.RefractionTextureEnabled&&(ae?_.setTexture("refractionSampler",te):(_.setTexture("refractionSampler",te._lodTextureMid||te),_.setTexture("refractionSamplerLow",te._lodTextureLow||te),_.setTexture("refractionSamplerHigh",te._lodTextureHigh||te))))},w.prototype.unbind=function(_){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(_.setTexture("refractionSampler",null),!0):!1},w.prototype._getRefractionTexture=function(_){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?_.environmentTexture:null},Object.defineProperty(w.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),w.prototype.fillRenderTargetTextures=function(_){e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&_.push(this._refractionTexture)},w.prototype.hasTexture=function(_){return this._thicknessTexture===_||this._refractionTexture===_},w.prototype.hasRenderTargetTextures=function(){return!!(e.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},w.prototype.getActiveTextures=function(_){this._thicknessTexture&&_.push(this._thicknessTexture),this._refractionTexture&&_.push(this._refractionTexture)},w.prototype.getAnimatables=function(_){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&_.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&_.push(this._refractionTexture)},w.prototype.dispose=function(_){_&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},w.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},w.AddFallbacks=function(_,c,m){return _.SS_SCATTERING&&c.addFallback(m++,"SS_SCATTERING"),_.SS_TRANSLUCENCY&&c.addFallback(m++,"SS_TRANSLUCENCY"),m},w.AddUniforms=function(_){_.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},w.AddSamplers=function(_){_.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},w.PrepareUniformBuffer=function(_){_.addUniform("vRefractionMicrosurfaceInfos",3),_.addUniform("vRefractionFilteringInfo",2),_.addUniform("vRefractionInfos",4),_.addUniform("refractionMatrix",16),_.addUniform("vThicknessInfos",2),_.addUniform("thicknessMatrix",16),_.addUniform("vThicknessParam",2),_.addUniform("vDiffusionDistance",3),_.addUniform("vTintColor",4),_.addUniform("vSubSurfaceIntensity",3),_.addUniform("scatteringDiffusionProfile",1)},w.prototype.copyTo=function(_){s.a.Clone(function(){return _},this)},w.prototype.serialize=function(){return s.a.Serialize(this)},w.prototype.parse=function(_,c,m){var U=this;s.a.Parse(function(){return U},_,c,m)},Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isRefractionEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"isTranslucencyEnabled",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markScenePrePassDirty")],w.prototype,"isScatteringEnabled",void 0),Object(f.c)([Object(s.c)()],w.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(f.c)([Object(s.c)()],w.prototype,"refractionIntensity",void 0),Object(f.c)([Object(s.c)()],w.prototype,"translucencyIntensity",void 0),Object(f.c)([Object(s.c)()],w.prototype,"useAlbedoToTintRefraction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"thicknessTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"refractionTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(s.c)()],w.prototype,"_volumeIndexOfRefraction",void 0),Object(f.c)([Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"volumeIndexOfRefraction",null),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"invertRefractionY",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"linkRefractionWithTransparency",void 0),Object(f.c)([Object(s.c)()],w.prototype,"minimumThickness",void 0),Object(f.c)([Object(s.c)()],w.prototype,"maximumThickness",void 0),Object(f.c)([Object(s.e)()],w.prototype,"tintColor",void 0),Object(f.c)([Object(s.c)()],w.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(s.e)()],w.prototype,"diffusionDistance",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useMaskFromThicknessTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],w.prototype,"useMaskFromThicknessTextureGltf",void 0),w}(),R=o(744),P=o(491),A=o(459),C=o(552),x=o(553),I=o(442),F=o(523),y=o(435),N=o(746),G="pbrFragmentDeclaration",V=`uniform vec4 vEyePosition;
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
`;y.a.IncludesShadersStore[G]=V;var L={name:G,shader:V},ne=o(674),K=o(745),B="pbrUboDeclaration",J=`layout(std140,column_major) uniform;





















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
`;y.a.IncludesShadersStore[B]=J;var k={name:B,shader:J},le="pbrFragmentExtraDeclaration",j=`
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
#endif`;y.a.IncludesShadersStore[le]=j;var de={name:le,shader:j},q=o(650),re=o(651),fe="pbrFragmentSamplersDeclaration",ee=`#ifdef ALBEDO
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
#endif`;y.a.IncludesShadersStore[fe]=ee;var W={name:fe,shader:ee},Ee=o(524),_e=o(592),oe=o(558),ge=o(597),Q=o(457),pe=o(627),ie=o(605),M="pbrHelperFunctions",v=`
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
#endif`;y.a.IncludesShadersStore[M]=v;var D={name:M,shader:v},O=o(525),Y=o(652),z="harmonicsFunctions",S=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;y.a.IncludesShadersStore[z]=S;var Z={name:z,shader:S},ve="pbrDirectLightingSetupFunctions",Te=`
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
}`;y.a.IncludesShadersStore[ve]=Te;var Ae={name:ve,shader:Te},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;y.a.IncludesShadersStore[Ce]=Oe;var Le={name:Ce,shader:Oe},Ie=o(606),xe=o(607),Me="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
`;y.a.IncludesShadersStore[Me]=Ve;var Ut={name:Me,shader:Ve},Ge="pbrIBLFunctions",we=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
#endif`;y.a.IncludesShadersStore[Ge]=we;var Vt={name:Ge,shader:we},Gt=o(614),wt=o(615),Ht=o(653),He="pbrBlockAlbedoOpacity",je=`struct albedoOpacityOutParams
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
`;y.a.IncludesShadersStore[He]=je;var jt={name:He,shader:je},We="pbrBlockReflectivity",ze=`struct reflectivityOutParams
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
`;y.a.IncludesShadersStore[We]=ze;var Wt={name:We,shader:ze},Xe="pbrBlockAmbientOcclusion",Ye=`struct ambientOcclusionOutParams
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
`;y.a.IncludesShadersStore[Xe]=Ye;var zt={name:Xe,shader:Ye},Ke="pbrBlockAlphaFresnel",ke=`#ifdef ALPHAFRESNEL
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
`;y.a.IncludesShadersStore[Ke]=ke;var Xt={name:Ke,shader:ke},Qe="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;y.a.IncludesShadersStore[Qe]=Ze;var Yt={name:Qe,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;y.a.IncludesShadersStore[Je]=qe;var Kt={name:Je,shader:qe},$e="pbrBlockSheen",et=`#ifdef SHEEN
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
`;y.a.IncludesShadersStore[$e]=et;var kt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;y.a.IncludesShadersStore[tt]=nt;var Qt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;y.a.IncludesShadersStore[rt]=it;var Zt={name:rt,shader:it},Jt=o(550),at="pbrBlockNormalGeometric",ot=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;y.a.IncludesShadersStore[at]=ot;var qt={name:at,shader:ot},$t=o(616),st="pbrBlockNormalFinal",lt=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;y.a.IncludesShadersStore[st]=lt;var en={name:st,shader:lt},tn=o(747),ft="pbrBlockLightmapInit",ct=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;y.a.IncludesShadersStore[ft]=ct;var nn={name:ft,shader:ct},ut="pbrBlockGeometryInfo",dt=`float NdotVUnclamped=dot(normalW,viewDirectionW);

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
`;y.a.IncludesShadersStore[ut]=dt;var rn={name:ut,shader:dt},ht="pbrBlockReflectance0",pt=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
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
`;y.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",gt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;y.a.IncludesShadersStore[vt]=gt;var on={name:vt,shader:gt},mt="pbrBlockDirectLighting",Et=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;y.a.IncludesShadersStore[mt]=Et;var sn={name:mt,shader:Et},ln=o(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;y.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},Rt="pbrBlockFinalUnlitComponents",At=`
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
`;y.a.IncludesShadersStore[Rt]=At;var cn={name:Rt,shader:At},St="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;y.a.IncludesShadersStore[St]=Pt;var un={name:St,shader:Pt},dn=o(701),hn=o(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;y.a.IncludesShadersStore[Ct]=Ot;var pn={name:Ct,shader:Ot},bt="pbrDebug",Mt=`#if DEBUGMODE>0
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
#endif`;y.a.IncludesShadersStore[bt]=Mt;var vn={name:bt,shader:Mt},It="pbrPixelShader",xt=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;y.a.ShadersStore[It]=xt;var gn={name:It,shader:xt},yt="pbrVertexDeclaration",Dt=`uniform mat4 view;
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
#endif`;y.a.IncludesShadersStore[yt]=Dt;var mn={name:yt,shader:Dt},En=o(487),_n=o(748),Tn=o(749),Rn=o(593),An=o(656),Sn=o(657),Pn=o(658),Cn=o(496),On=o(497),bn=o(507),Mn=o(508),In=o(488),xn=o(489),yn=o(750),Dn=o(675),Ln=o(551),Fn=o(702),Nn=o(659),Bn=o(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;y.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=o(512),Fe=o(751),ye={effect:null,subMesh:null},Be=function(w){Object(f.d)(_,w);function _(){var c=w.call(this)||this;return c.PBR=!0,c.NUM_SAMPLES="0",c.REALTIME_FILTERING=!1,c.MAINUV1=!1,c.MAINUV2=!1,c.UV1=!1,c.UV2=!1,c.ALBEDO=!1,c.GAMMAALBEDO=!1,c.ALBEDODIRECTUV=0,c.VERTEXCOLOR=!1,c.DETAIL=!1,c.DETAILDIRECTUV=0,c.DETAIL_NORMALBLENDMETHOD=0,c.AMBIENT=!1,c.AMBIENTDIRECTUV=0,c.AMBIENTINGRAYSCALE=!1,c.OPACITY=!1,c.VERTEXALPHA=!1,c.OPACITYDIRECTUV=0,c.OPACITYRGB=!1,c.ALPHATEST=!1,c.DEPTHPREPASS=!1,c.ALPHABLEND=!1,c.ALPHAFROMALBEDO=!1,c.ALPHATESTVALUE="0.5",c.SPECULAROVERALPHA=!1,c.RADIANCEOVERALPHA=!1,c.ALPHAFRESNEL=!1,c.LINEARALPHAFRESNEL=!1,c.PREMULTIPLYALPHA=!1,c.EMISSIVE=!1,c.EMISSIVEDIRECTUV=0,c.REFLECTIVITY=!1,c.REFLECTIVITYDIRECTUV=0,c.SPECULARTERM=!1,c.MICROSURFACEFROMREFLECTIVITYMAP=!1,c.MICROSURFACEAUTOMATIC=!1,c.LODBASEDMICROSFURACE=!1,c.MICROSURFACEMAP=!1,c.MICROSURFACEMAPDIRECTUV=0,c.METALLICWORKFLOW=!1,c.ROUGHNESSSTOREINMETALMAPALPHA=!1,c.ROUGHNESSSTOREINMETALMAPGREEN=!1,c.METALLNESSSTOREINMETALMAPBLUE=!1,c.AOSTOREINMETALMAPRED=!1,c.METALLIC_REFLECTANCE=!1,c.METALLIC_REFLECTANCEDIRECTUV=0,c.ENVIRONMENTBRDF=!1,c.ENVIRONMENTBRDF_RGBD=!1,c.NORMAL=!1,c.TANGENT=!1,c.BUMP=!1,c.BUMPDIRECTUV=0,c.OBJECTSPACE_NORMALMAP=!1,c.PARALLAX=!1,c.PARALLAXOCCLUSION=!1,c.NORMALXYSCALE=!0,c.LIGHTMAP=!1,c.LIGHTMAPDIRECTUV=0,c.USELIGHTMAPASSHADOWMAP=!1,c.GAMMALIGHTMAP=!1,c.RGBDLIGHTMAP=!1,c.REFLECTION=!1,c.REFLECTIONMAP_3D=!1,c.REFLECTIONMAP_SPHERICAL=!1,c.REFLECTIONMAP_PLANAR=!1,c.REFLECTIONMAP_CUBIC=!1,c.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,c.REFLECTIONMAP_PROJECTION=!1,c.REFLECTIONMAP_SKYBOX=!1,c.REFLECTIONMAP_EXPLICIT=!1,c.REFLECTIONMAP_EQUIRECTANGULAR=!1,c.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,c.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,c.INVERTCUBICMAP=!1,c.USESPHERICALFROMREFLECTIONMAP=!1,c.USEIRRADIANCEMAP=!1,c.SPHERICAL_HARMONICS=!1,c.USESPHERICALINVERTEX=!1,c.REFLECTIONMAP_OPPOSITEZ=!1,c.LODINREFLECTIONALPHA=!1,c.GAMMAREFLECTION=!1,c.RGBDREFLECTION=!1,c.LINEARSPECULARREFLECTION=!1,c.RADIANCEOCCLUSION=!1,c.HORIZONOCCLUSION=!1,c.INSTANCES=!1,c.THIN_INSTANCES=!1,c.PREPASS=!1,c.PREPASS_IRRADIANCE=!1,c.PREPASS_IRRADIANCE_INDEX=-1,c.PREPASS_ALBEDO=!1,c.PREPASS_ALBEDO_INDEX=-1,c.PREPASS_DEPTH=!1,c.PREPASS_DEPTH_INDEX=-1,c.PREPASS_NORMAL=!1,c.PREPASS_NORMAL_INDEX=-1,c.PREPASS_POSITION=!1,c.PREPASS_POSITION_INDEX=-1,c.PREPASS_VELOCITY=!1,c.PREPASS_VELOCITY_INDEX=-1,c.PREPASS_REFLECTIVITY=!1,c.PREPASS_REFLECTIVITY_INDEX=-1,c.SCENE_MRT_COUNT=0,c.NUM_BONE_INFLUENCERS=0,c.BonesPerMesh=0,c.BONETEXTURE=!1,c.BONES_VELOCITY_ENABLED=!1,c.NONUNIFORMSCALING=!1,c.MORPHTARGETS=!1,c.MORPHTARGETS_NORMAL=!1,c.MORPHTARGETS_TANGENT=!1,c.MORPHTARGETS_UV=!1,c.NUM_MORPH_INFLUENCERS=0,c.MORPHTARGETS_TEXTURE=!1,c.IMAGEPROCESSING=!1,c.VIGNETTE=!1,c.VIGNETTEBLENDMODEMULTIPLY=!1,c.VIGNETTEBLENDMODEOPAQUE=!1,c.TONEMAPPING=!1,c.TONEMAPPING_ACES=!1,c.CONTRAST=!1,c.COLORCURVES=!1,c.COLORGRADING=!1,c.COLORGRADING3D=!1,c.SAMPLER3DGREENDEPTH=!1,c.SAMPLER3DBGRMAP=!1,c.IMAGEPROCESSINGPOSTPROCESS=!1,c.EXPOSURE=!1,c.MULTIVIEW=!1,c.USEPHYSICALLIGHTFALLOFF=!1,c.USEGLTFLIGHTFALLOFF=!1,c.TWOSIDEDLIGHTING=!1,c.SHADOWFLOAT=!1,c.CLIPPLANE=!1,c.CLIPPLANE2=!1,c.CLIPPLANE3=!1,c.CLIPPLANE4=!1,c.CLIPPLANE5=!1,c.CLIPPLANE6=!1,c.POINTSIZE=!1,c.FOG=!1,c.LOGARITHMICDEPTH=!1,c.FORCENORMALFORWARD=!1,c.SPECULARAA=!1,c.CLEARCOAT=!1,c.CLEARCOAT_DEFAULTIOR=!1,c.CLEARCOAT_TEXTURE=!1,c.CLEARCOAT_TEXTURE_ROUGHNESS=!1,c.CLEARCOAT_TEXTUREDIRECTUV=0,c.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,c.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,c.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,c.CLEARCOAT_BUMP=!1,c.CLEARCOAT_BUMPDIRECTUV=0,c.CLEARCOAT_REMAP_F0=!0,c.CLEARCOAT_TINT=!1,c.CLEARCOAT_TINT_TEXTURE=!1,c.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,c.ANISOTROPIC=!1,c.ANISOTROPIC_TEXTURE=!1,c.ANISOTROPIC_TEXTUREDIRECTUV=0,c.BRDF_V_HEIGHT_CORRELATED=!1,c.MS_BRDF_ENERGY_CONSERVATION=!1,c.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,c.SHEEN=!1,c.SHEEN_TEXTURE=!1,c.SHEEN_TEXTURE_ROUGHNESS=!1,c.SHEEN_TEXTUREDIRECTUV=0,c.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,c.SHEEN_LINKWITHALBEDO=!1,c.SHEEN_ROUGHNESS=!1,c.SHEEN_ALBEDOSCALING=!1,c.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,c.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,c.SUBSURFACE=!1,c.SS_REFRACTION=!1,c.SS_TRANSLUCENCY=!1,c.SS_SCATTERING=!1,c.SS_THICKNESSANDMASK_TEXTURE=!1,c.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,c.SS_REFRACTIONMAP_3D=!1,c.SS_REFRACTIONMAP_OPPOSITEZ=!1,c.SS_LODINREFRACTIONALPHA=!1,c.SS_GAMMAREFRACTION=!1,c.SS_RGBDREFRACTION=!1,c.SS_LINEARSPECULARREFRACTION=!1,c.SS_LINKREFRACTIONTOTRANSPARENCY=!1,c.SS_ALBEDOFORREFRACTIONTINT=!1,c.SS_MASK_FROM_THICKNESS_TEXTURE=!1,c.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,c.UNLIT=!1,c.DEBUGMODE=0,c.rebuild(),c}return _.prototype.reset=function(){w.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},_}(C.a),Bt=function(w){Object(f.d)(_,w);function _(c,m){var U=w.call(this,c,m)||this;return U._directIntensity=1,U._emissiveIntensity=1,U._environmentIntensity=1,U._specularIntensity=1,U._lightingInfos=new p.f(U._directIntensity,U._emissiveIntensity,U._environmentIntensity,U._specularIntensity),U._disableBumpMap=!1,U._albedoTexture=null,U._ambientTexture=null,U._ambientTextureStrength=1,U._ambientTextureImpactOnAnalyticalLights=_.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,U._opacityTexture=null,U._reflectionTexture=null,U._emissiveTexture=null,U._reflectivityTexture=null,U._metallicTexture=null,U._metallic=null,U._roughness=null,U._metallicF0Factor=1,U._metallicReflectanceColor=l.a.White(),U._metallicReflectanceTexture=null,U._microSurfaceTexture=null,U._bumpTexture=null,U._lightmapTexture=null,U._ambientColor=new l.a(0,0,0),U._albedoColor=new l.a(1,1,1),U._reflectivityColor=new l.a(1,1,1),U._reflectionColor=new l.a(1,1,1),U._emissiveColor=new l.a(0,0,0),U._microSurface=.9,U._useLightmapAsShadowmap=!1,U._useHorizonOcclusion=!0,U._useRadianceOcclusion=!0,U._useAlphaFromAlbedoTexture=!1,U._useSpecularOverAlpha=!0,U._useMicroSurfaceFromReflectivityMapAlpha=!1,U._useRoughnessFromMetallicTextureAlpha=!0,U._useRoughnessFromMetallicTextureGreen=!1,U._useMetallnessFromMetallicTextureBlue=!1,U._useAmbientOcclusionFromMetallicTextureRed=!1,U._useAmbientInGrayScale=!1,U._useAutoMicroSurfaceFromReflectivityMap=!1,U._lightFalloff=_.LIGHTFALLOFF_PHYSICAL,U._useRadianceOverAlpha=!0,U._useObjectSpaceNormalMap=!1,U._useParallax=!1,U._useParallaxOcclusion=!1,U._parallaxScaleBias=.05,U._disableLighting=!1,U._maxSimultaneousLights=4,U._invertNormalMapX=!1,U._invertNormalMapY=!1,U._twoSidedLighting=!1,U._alphaCutOff=.4,U._forceAlphaTest=!1,U._useAlphaFresnel=!1,U._useLinearAlphaFresnel=!1,U._environmentBRDFTexture=null,U._forceIrradianceInFragment=!1,U._realTimeFiltering=!1,U._realTimeFilteringQuality=8,U._forceNormalForward=!1,U._enableSpecularAntiAliasing=!1,U._imageProcessingObserver=null,U._renderTargets=new E.a(16),U._globalAmbientColor=new l.a(0,0,0),U._useLogarithmicDepth=!1,U._unlit=!1,U._debugMode=0,U.debugMode=0,U.debugLimit=-1,U.debugFactor=1,U.clearCoat=new t.a(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.anisotropy=new r(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.brdf=new a(U._markAllSubMeshesAsMiscDirty.bind(U)),U.sheen=new h(U._markAllSubMeshesAsTexturesDirty.bind(U)),U.detailMap=new Fe.a(U._markAllSubMeshesAsTexturesDirty.bind(U)),U._rebuildInParallel=!1,U._attachImageProcessingConfiguration(null),U.getRenderTargetTextures=function(){return U._renderTargets.reset(),e.a.ReflectionTextureEnabled&&U._reflectionTexture&&U._reflectionTexture.isRenderTarget&&U._renderTargets.push(U._reflectionTexture),U.subSurface.fillRenderTargetTextures(U._renderTargets),U._renderTargets},U._environmentBRDFTexture=d.a.GetEnvironmentBRDFTexture(m),U.subSurface=new g(U._markAllSubMeshesAsTexturesDirty.bind(U),U._markScenePrePassDirty.bind(U),m),U.prePassConfiguration=new R.a,U}return Object.defineProperty(_.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(c){this._realTimeFiltering=c,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(c){this._realTimeFilteringQuality=c,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),_.prototype._attachImageProcessingConfiguration=function(c){var m=this;c!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),c?this._imageProcessingConfiguration=c:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){m._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(_.prototype,"hasRenderTargetTextures",{get:function(){return e.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),_.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(_.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(c){this._useLogarithmicDepth=c&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(_.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===_.PBRMATERIAL_OPAQUE||this._transparencyMode===_.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),_.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},_.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===_.PBRMATERIAL_ALPHATEST)},_.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==_.PBRMATERIAL_OPAQUE},_.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},_.prototype.getAlphaTestTexture=function(){return this._albedoTexture},_.prototype.isReadyForSubMesh=function(c,m,U){if(m.effect&&this.isFrozen&&m.effect._wasPreviouslyReady)return!0;m._materialDefines||(m._materialDefines=new Be);var ae=m._materialDefines;if(this._isReadyForSubMesh(m))return!0;var he=this.getScene(),te=he.getEngine();if(ae._areTexturesDirty&&he.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&e.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&e.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Re=this._getReflectionTexture();if(Re&&e.a.ReflectionTextureEnabled&&(!Re.isReadyOrNotBlocking()||Re.irradianceTexture&&!Re.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&e.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&e.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(e.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(te.getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(ae,he)||!this.clearCoat.isReadyForSubMesh(ae,he,te,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(ae,he)||!this.anisotropy.isReadyForSubMesh(ae,he)||!this.detailMap.isReadyForSubMesh(ae,he)||ae._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!te.getCaps().standardDerivatives&&!c.isVerticesDataPresent(i.b.NormalKind)&&(c.createNormals(!0),b.a.Warn("PBRMaterial: Normals have been created for the mesh: "+c.name));var se=m.effect,X=ae._areLightsDisposed,ue=this._prepareEffect(c,ae,this.onCompiled,this.onError,U,null,m.getRenderingMesh().hasThinInstances);if(ue)if(this._onEffectCreatedObservable&&(ye.effect=ue,ye.subMesh=m,this._onEffectCreatedObservable.notifyObservers(ye)),this.allowShaderHotSwapping&&se&&!ue.isReady()){if(ue=se,this._rebuildInParallel=!0,ae.markAsUnprocessed(),X)return ae._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,he.resetCachedMaterial(),m.setEffect(ue,ae),this.buildUniformLayout();return!m.effect||!m.effect.isReady()?!1:(ae._renderId=he.getRenderId(),m.effect._wasPreviouslyReady=!0,!0)},_.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},_.prototype._prepareEffect=function(c,m,U,ae,he,te,Re){if(U===void 0&&(U=null),ae===void 0&&(ae=null),he===void 0&&(he=null),te===void 0&&(te=null),this._prepareDefines(c,m,he,te,Re),!m.isDirty)return null;m.markAsProcessed();var se=this.getScene(),X=se.getEngine(),ue=new Nt.a,me=0;m.USESPHERICALINVERTEX&&ue.addFallback(me++,"USESPHERICALINVERTEX"),m.FOG&&ue.addFallback(me,"FOG"),m.SPECULARAA&&ue.addFallback(me,"SPECULARAA"),m.POINTSIZE&&ue.addFallback(me,"POINTSIZE"),m.LOGARITHMICDEPTH&&ue.addFallback(me,"LOGARITHMICDEPTH"),m.PARALLAX&&ue.addFallback(me,"PARALLAX"),m.PARALLAXOCCLUSION&&ue.addFallback(me++,"PARALLAXOCCLUSION"),me=r.AddFallbacks(m,ue,me),me=r.AddFallbacks(m,ue,me),me=g.AddFallbacks(m,ue,me),me=h.AddFallbacks(m,ue,me),m.ENVIRONMENTBRDF&&ue.addFallback(me++,"ENVIRONMENTBRDF"),m.TANGENT&&ue.addFallback(me++,"TANGENT"),m.BUMP&&ue.addFallback(me++,"BUMP"),me=n.a.HandleFallbacksForShadows(m,ue,this._maxSimultaneousLights,me++),m.SPECULARTERM&&ue.addFallback(me++,"SPECULARTERM"),m.USESPHERICALFROMREFLECTIONMAP&&ue.addFallback(me++,"USESPHERICALFROMREFLECTIONMAP"),m.USEIRRADIANCEMAP&&ue.addFallback(me++,"USEIRRADIANCEMAP"),m.LIGHTMAP&&ue.addFallback(me++,"LIGHTMAP"),m.NORMAL&&ue.addFallback(me++,"NORMAL"),m.AMBIENT&&ue.addFallback(me++,"AMBIENT"),m.EMISSIVE&&ue.addFallback(me++,"EMISSIVE"),m.VERTEXCOLOR&&ue.addFallback(me++,"VERTEXCOLOR"),m.MORPHTARGETS&&ue.addFallback(me++,"MORPHTARGETS"),m.MULTIVIEW&&ue.addFallback(0,"MULTIVIEW");var Se=[i.b.PositionKind];m.NORMAL&&Se.push(i.b.NormalKind),m.TANGENT&&Se.push(i.b.TangentKind),m.UV1&&Se.push(i.b.UVKind),m.UV2&&Se.push(i.b.UV2Kind),m.VERTEXCOLOR&&Se.push(i.b.ColorKind),n.a.PrepareAttributesForBones(Se,c,m,ue),n.a.PrepareAttributesForInstances(Se,m),n.a.PrepareAttributesForMorphTargets(Se,c,m);var ce="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],De=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),g.AddUniforms(Pe),g.AddSamplers(be),t.a.AddUniforms(Pe),t.a.AddSamplers(be),r.AddUniforms(Pe),r.AddSamplers(be),h.AddUniforms(Pe),h.AddSamplers(be),R.a.AddUniforms(Pe),R.a.AddSamplers(Pe),P.a&&(P.a.PrepareUniforms(Pe,m),P.a.PrepareSamplers(be,m)),n.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:De,samplers:be,defines:m,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(ce=this.customShaderNameResolve(ce,Pe,De,be,m,Se,Ne));var Ue=m.toString();return X.createEffect(ce,{attributes:Se,uniformsNames:Pe,uniformBuffersNames:De,samplers:be,defines:Ue,fallbacks:ue,onCompiled:U,onError:ae,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:m.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:m.PREPASS},X)},_.prototype._prepareDefines=function(c,m,U,ae,he){U===void 0&&(U=null),ae===void 0&&(ae=null),he===void 0&&(he=!1);var te=this.getScene(),Re=te.getEngine();if(n.a.PrepareDefinesForLights(te,c,m,!0,this._maxSimultaneousLights,this._disableLighting),m._needNormals=!0,n.a.PrepareDefinesForMultiview(te,m),n.a.PrepareDefinesForPrePass(te,m,this.canRenderToMRT),m.METALLICWORKFLOW=this.isMetallicWorkflow(),m._areTexturesDirty){if(m._needUVs=!1,te.texturesEnabled){te.getEngine().getCaps().textureLOD&&(m.LODBASEDMICROSFURACE=!0),this._albedoTexture&&e.a.DiffuseTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._albedoTexture,m,"ALBEDO"),m.GAMMAALBEDO=this._albedoTexture.gammaSpace):m.ALBEDO=!1,this._ambientTexture&&e.a.AmbientTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._ambientTexture,m,"AMBIENT"),m.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):m.AMBIENT=!1,this._opacityTexture&&e.a.OpacityTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._opacityTexture,m,"OPACITY"),m.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):m.OPACITY=!1;var se=this._getReflectionTexture();if(se&&e.a.ReflectionTextureEnabled){switch(m.REFLECTION=!0,m.GAMMAREFLECTION=se.gammaSpace,m.RGBDREFLECTION=se.isRGBD,m.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!se.invertZ:se.invertZ,m.LODINREFLECTIONALPHA=se.lodLevelInAlpha,m.LINEARSPECULARREFLECTION=se.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(m.NUM_SAMPLES=""+this.realTimeFilteringQuality,Re._features.needTypeSuffixInShaderConstants&&(m.NUM_SAMPLES=m.NUM_SAMPLES+"u"),m.REALTIME_FILTERING=!0):m.REALTIME_FILTERING=!1,se.coordinatesMode===I.a.INVCUBIC_MODE&&(m.INVERTCUBICMAP=!0),m.REFLECTIONMAP_3D=se.isCube,m.REFLECTIONMAP_CUBIC=!1,m.REFLECTIONMAP_EXPLICIT=!1,m.REFLECTIONMAP_PLANAR=!1,m.REFLECTIONMAP_PROJECTION=!1,m.REFLECTIONMAP_SKYBOX=!1,m.REFLECTIONMAP_SPHERICAL=!1,m.REFLECTIONMAP_EQUIRECTANGULAR=!1,m.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,m.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,se.coordinatesMode){case I.a.EXPLICIT_MODE:m.REFLECTIONMAP_EXPLICIT=!0;break;case I.a.PLANAR_MODE:m.REFLECTIONMAP_PLANAR=!0;break;case I.a.PROJECTION_MODE:m.REFLECTIONMAP_PROJECTION=!0;break;case I.a.SKYBOX_MODE:m.REFLECTIONMAP_SKYBOX=!0;break;case I.a.SPHERICAL_MODE:m.REFLECTIONMAP_SPHERICAL=!0;break;case I.a.EQUIRECTANGULAR_MODE:m.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case I.a.FIXED_EQUIRECTANGULAR_MODE:m.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case I.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:m.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case I.a.CUBIC_MODE:case I.a.INVCUBIC_MODE:default:m.REFLECTIONMAP_CUBIC=!0,m.USE_LOCAL_REFLECTIONMAP_CUBIC=!!se.boundingBoxSize;break}se.coordinatesMode!==I.a.SKYBOX_MODE&&(se.irradianceTexture?(m.USEIRRADIANCEMAP=!0,m.USESPHERICALFROMREFLECTIONMAP=!1):se.isCube&&(m.USESPHERICALFROMREFLECTIONMAP=!0,m.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||te.getEngine().getCaps().maxVaryingVectors<=8?m.USESPHERICALINVERTEX=!1:m.USESPHERICALINVERTEX=!0))}else m.REFLECTION=!1,m.REFLECTIONMAP_3D=!1,m.REFLECTIONMAP_SPHERICAL=!1,m.REFLECTIONMAP_PLANAR=!1,m.REFLECTIONMAP_CUBIC=!1,m.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,m.REFLECTIONMAP_PROJECTION=!1,m.REFLECTIONMAP_SKYBOX=!1,m.REFLECTIONMAP_EXPLICIT=!1,m.REFLECTIONMAP_EQUIRECTANGULAR=!1,m.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,m.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,m.INVERTCUBICMAP=!1,m.USESPHERICALFROMREFLECTIONMAP=!1,m.USEIRRADIANCEMAP=!1,m.USESPHERICALINVERTEX=!1,m.REFLECTIONMAP_OPPOSITEZ=!1,m.LODINREFLECTIONALPHA=!1,m.GAMMAREFLECTION=!1,m.RGBDREFLECTION=!1,m.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&e.a.LightmapTextureEnabled?(n.a.PrepareDefinesForMergedUV(this._lightmapTexture,m,"LIGHTMAP"),m.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,m.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,m.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):m.LIGHTMAP=!1,this._emissiveTexture&&e.a.EmissiveTextureEnabled?n.a.PrepareDefinesForMergedUV(this._emissiveTexture,m,"EMISSIVE"):m.EMISSIVE=!1,e.a.SpecularTextureEnabled?(this._metallicTexture?(n.a.PrepareDefinesForMergedUV(this._metallicTexture,m,"REFLECTIVITY"),m.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,m.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,m.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,m.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(n.a.PrepareDefinesForMergedUV(this._reflectivityTexture,m,"REFLECTIVITY"),m.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,m.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):m.REFLECTIVITY=!1,this._metallicReflectanceTexture?n.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,m,"METALLIC_REFLECTANCE"):m.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?n.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,m,"MICROSURFACEMAP"):m.MICROSURFACEMAP=!1):(m.REFLECTIVITY=!1,m.MICROSURFACEMAP=!1),te.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&e.a.BumpTextureEnabled&&!this._disableBumpMap?(n.a.PrepareDefinesForMergedUV(this._bumpTexture,m,"BUMP"),this._useParallax&&this._albedoTexture&&e.a.DiffuseTextureEnabled?(m.PARALLAX=!0,m.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):m.PARALLAX=!1,m.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):m.BUMP=!1,this._environmentBRDFTexture&&e.a.ReflectionTextureEnabled?(m.ENVIRONMENTBRDF=!0,m.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(m.ENVIRONMENTBRDF=!1,m.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?m.ALPHAFROMALBEDO=!0:m.ALPHAFROMALBEDO=!1}m.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===_.LIGHTFALLOFF_STANDARD?(m.USEPHYSICALLIGHTFALLOFF=!1,m.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===_.LIGHTFALLOFF_GLTF?(m.USEPHYSICALLIGHTFALLOFF=!1,m.USEGLTFLIGHTFALLOFF=!0):(m.USEPHYSICALLIGHTFALLOFF=!0,m.USEGLTFLIGHTFALLOFF=!1),m.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?m.TWOSIDEDLIGHTING=!0:m.TWOSIDEDLIGHTING=!1,m.SPECULARAA=te.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(m._areTexturesDirty||m._areMiscDirty)&&(m.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),m.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,m.ALPHABLEND=this.needAlphaBlendingForMesh(c),m.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,m.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),m._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(m),m.FORCENORMALFORWARD=this._forceNormalForward,m.RADIANCEOCCLUSION=this._useRadianceOcclusion,m.HORIZONOCCLUSION=this._useHorizonOcclusion,m._areMiscDirty&&(n.a.PrepareDefinesForMisc(c,te,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(c)||this._forceAlphaTest,m),m.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!c.isVerticesDataPresent(i.b.NormalKind),m.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(m,te),this.subSurface.prepareDefines(m,te),this.clearCoat.prepareDefines(m,te),this.anisotropy.prepareDefines(m,c,te),this.brdf.prepareDefines(m),this.sheen.prepareDefines(m,te),n.a.PrepareDefinesForFrameBoundValues(te,Re,m,!!U,ae,he),n.a.PrepareDefinesForAttributes(c,m,!0,!0,!0,this._transparencyMode!==_.PBRMATERIAL_OPAQUE)},_.prototype.forceCompilation=function(c,m,U){var ae=this,he=Object(f.a)({clipPlane:!1,useInstances:!1},U),te=new Be,Re=this._prepareEffect(c,te,void 0,void 0,he.useInstances,he.clipPlane,c.hasThinInstances);this._onEffectCreatedObservable&&(ye.effect=Re,ye.subMesh=null,this._onEffectCreatedObservable.notifyObservers(ye)),Re.isReady()?m&&m(this):Re.onCompileObservable.add(function(){m&&m(ae)})},_.prototype.buildUniformLayout=function(){var c=this._uniformBuffer;c.addUniform("vAlbedoInfos",2),c.addUniform("vAmbientInfos",4),c.addUniform("vOpacityInfos",2),c.addUniform("vEmissiveInfos",2),c.addUniform("vLightmapInfos",2),c.addUniform("vReflectivityInfos",3),c.addUniform("vMicroSurfaceSamplerInfos",2),c.addUniform("vReflectionInfos",2),c.addUniform("vReflectionFilteringInfo",2),c.addUniform("vReflectionPosition",3),c.addUniform("vReflectionSize",3),c.addUniform("vBumpInfos",3),c.addUniform("albedoMatrix",16),c.addUniform("ambientMatrix",16),c.addUniform("opacityMatrix",16),c.addUniform("emissiveMatrix",16),c.addUniform("lightmapMatrix",16),c.addUniform("reflectivityMatrix",16),c.addUniform("microSurfaceSamplerMatrix",16),c.addUniform("bumpMatrix",16),c.addUniform("vTangentSpaceParams",2),c.addUniform("reflectionMatrix",16),c.addUniform("vReflectionColor",3),c.addUniform("vAlbedoColor",4),c.addUniform("vLightingIntensity",4),c.addUniform("vReflectionMicrosurfaceInfos",3),c.addUniform("pointSize",1),c.addUniform("vReflectivityColor",4),c.addUniform("vEmissiveColor",3),c.addUniform("vAmbientColor",3),c.addUniform("vDebugMode",2),c.addUniform("vMetallicReflectanceFactors",4),c.addUniform("vMetallicReflectanceInfos",2),c.addUniform("metallicReflectanceMatrix",16),t.a.PrepareUniformBuffer(c),r.PrepareUniformBuffer(c),h.PrepareUniformBuffer(c),g.PrepareUniformBuffer(c),Fe.a.PrepareUniformBuffer(c),c.addUniform("vSphericalL00",3),c.addUniform("vSphericalL1_1",3),c.addUniform("vSphericalL10",3),c.addUniform("vSphericalL11",3),c.addUniform("vSphericalL2_2",3),c.addUniform("vSphericalL2_1",3),c.addUniform("vSphericalL20",3),c.addUniform("vSphericalL21",3),c.addUniform("vSphericalL22",3),c.addUniform("vSphericalX",3),c.addUniform("vSphericalY",3),c.addUniform("vSphericalZ",3),c.addUniform("vSphericalXX_ZZ",3),c.addUniform("vSphericalYY_ZZ",3),c.addUniform("vSphericalZZ",3),c.addUniform("vSphericalXY",3),c.addUniform("vSphericalYZ",3),c.addUniform("vSphericalZX",3),c.create()},_.prototype.unbind=function(){if(this._activeEffect){var c=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),c=!0),this.subSurface.unbind(this._activeEffect)&&(c=!0),c&&this._markAllSubMeshesAsTexturesDirty()}w.prototype.unbind.call(this)},_.prototype.bindForSubMesh=function(c,m,U){var ae=this.getScene(),he=U._materialDefines;if(!!he){var te=U.effect;if(!!te){this._activeEffect=te,m.getMeshUniformBuffer().bindToEffect(te,"Mesh"),m.transferToEffect(c),this.prePassConfiguration.bindForSubMesh(this._activeEffect,ae,m,c,this.isFrozen),he.OBJECTSPACE_NORMALMAP&&(c.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Re=this._mustRebind(ae,te,m.visibility);n.a.BindBonesParameters(m,this._activeEffect,this.prePassConfiguration);var se=null,X=this._uniformBuffer;if(Re){var ue=ae.getEngine();if(X.bindToEffect(te,"Material"),this.bindViewProjection(te),se=this._getReflectionTexture(),!X.useUbo||!this.isFrozen||!X.isSync){if(ae.texturesEnabled){if(this._albedoTexture&&e.a.DiffuseTextureEnabled&&(X.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),n.a.BindTextureMatrix(this._albedoTexture,X,"albedo")),this._ambientTexture&&e.a.AmbientTextureEnabled&&(X.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),n.a.BindTextureMatrix(this._ambientTexture,X,"ambient")),this._opacityTexture&&e.a.OpacityTextureEnabled&&(X.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),n.a.BindTextureMatrix(this._opacityTexture,X,"opacity")),se&&e.a.ReflectionTextureEnabled){if(X.updateMatrix("reflectionMatrix",se.getReflectionTextureMatrix()),X.updateFloat2("vReflectionInfos",se.level,0),se.boundingBoxSize){var me=se;X.updateVector3("vReflectionPosition",me.boundingBoxPosition),X.updateVector3("vReflectionSize",me.boundingBoxSize)}if(this.realTimeFiltering){var Se=se.getSize().width;X.updateFloat2("vReflectionFilteringInfo",Se,u.a.Log2(Se))}if(!he.USEIRRADIANCEMAP){var ce=se.sphericalPolynomial;if(he.USESPHERICALFROMREFLECTIONMAP&&ce)if(he.SPHERICAL_HARMONICS){var Pe=ce.preScaledHarmonics;X.updateVector3("vSphericalL00",Pe.l00),X.updateVector3("vSphericalL1_1",Pe.l1_1),X.updateVector3("vSphericalL10",Pe.l10),X.updateVector3("vSphericalL11",Pe.l11),X.updateVector3("vSphericalL2_2",Pe.l2_2),X.updateVector3("vSphericalL2_1",Pe.l2_1),X.updateVector3("vSphericalL20",Pe.l20),X.updateVector3("vSphericalL21",Pe.l21),X.updateVector3("vSphericalL22",Pe.l22)}else X.updateFloat3("vSphericalX",ce.x.x,ce.x.y,ce.x.z),X.updateFloat3("vSphericalY",ce.y.x,ce.y.y,ce.y.z),X.updateFloat3("vSphericalZ",ce.z.x,ce.z.y,ce.z.z),X.updateFloat3("vSphericalXX_ZZ",ce.xx.x-ce.zz.x,ce.xx.y-ce.zz.y,ce.xx.z-ce.zz.z),X.updateFloat3("vSphericalYY_ZZ",ce.yy.x-ce.zz.x,ce.yy.y-ce.zz.y,ce.yy.z-ce.zz.z),X.updateFloat3("vSphericalZZ",ce.zz.x,ce.zz.y,ce.zz.z),X.updateFloat3("vSphericalXY",ce.xy.x,ce.xy.y,ce.xy.z),X.updateFloat3("vSphericalYZ",ce.yz.x,ce.yz.y,ce.yz.z),X.updateFloat3("vSphericalZX",ce.zx.x,ce.zx.y,ce.zx.z)}X.updateFloat3("vReflectionMicrosurfaceInfos",se.getSize().width,se.lodGenerationScale,se.lodGenerationOffset)}this._emissiveTexture&&e.a.EmissiveTextureEnabled&&(X.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),n.a.BindTextureMatrix(this._emissiveTexture,X,"emissive")),this._lightmapTexture&&e.a.LightmapTextureEnabled&&(X.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),n.a.BindTextureMatrix(this._lightmapTexture,X,"lightmap")),e.a.SpecularTextureEnabled&&(this._metallicTexture?(X.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),n.a.BindTextureMatrix(this._metallicTexture,X,"reflectivity")):this._reflectivityTexture&&(X.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),n.a.BindTextureMatrix(this._reflectivityTexture,X,"reflectivity")),this._metallicReflectanceTexture&&(X.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),n.a.BindTextureMatrix(this._metallicReflectanceTexture,X,"metallicReflectance")),this._microSurfaceTexture&&(X.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),n.a.BindTextureMatrix(this._microSurfaceTexture,X,"microSurfaceSampler"))),this._bumpTexture&&ue.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&(X.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),n.a.BindTextureMatrix(this._bumpTexture,X,"bump"),ae._mirroredCameraPosition?X.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):X.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&X.updateFloat("pointSize",this.pointSize),he.METALLICWORKFLOW){l.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,l.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,X.updateColor4("vReflectivityColor",l.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,De=1,Ne=Math.pow((be-De)/(be+De),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,l.c.Color3[0]);var Ue=this._metallicF0Factor;X.updateColor4("vMetallicReflectanceFactors",l.c.Color3[0],Ue)}else X.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);X.updateColor3("vEmissiveColor",e.a.EmissiveTextureEnabled?this._emissiveColor:l.a.BlackReadOnly),X.updateColor3("vReflectionColor",this._reflectionColor),!he.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?X.updateColor4("vAlbedoColor",this._albedoColor,1):X.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*ae.environmentIntensity,this._lightingInfos.w=this._specularIntensity,X.updateVector4("vLightingIntensity",this._lightingInfos),ae.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),X.updateColor3("vAmbientColor",this._globalAmbientColor),X.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}ae.texturesEnabled&&(this._albedoTexture&&e.a.DiffuseTextureEnabled&&X.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&e.a.AmbientTextureEnabled&&X.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&e.a.OpacityTextureEnabled&&X.setTexture("opacitySampler",this._opacityTexture),se&&e.a.ReflectionTextureEnabled&&(he.LODBASEDMICROSFURACE?X.setTexture("reflectionSampler",se):(X.setTexture("reflectionSampler",se._lodTextureMid||se),X.setTexture("reflectionSamplerLow",se._lodTextureLow||se),X.setTexture("reflectionSamplerHigh",se._lodTextureHigh||se)),he.USEIRRADIANCEMAP&&X.setTexture("irradianceSampler",se.irradianceTexture)),he.ENVIRONMENTBRDF&&X.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&e.a.EmissiveTextureEnabled&&X.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&e.a.LightmapTextureEnabled&&X.setTexture("lightmapSampler",this._lightmapTexture),e.a.SpecularTextureEnabled&&(this._metallicTexture?X.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&X.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&X.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&X.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&ue.getCaps().standardDerivatives&&e.a.BumpTextureEnabled&&!this._disableBumpMap&&X.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(X,ae,this.isFrozen),this.subSurface.bindForSubMesh(X,ae,ue,this.isFrozen,he.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(X,ae,ue,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,U),this.anisotropy.bindForSubMesh(X,ae,this.isFrozen),this.sheen.bindForSubMesh(X,ae,this.isFrozen,U),n.a.BindClipPlane(this._activeEffect,ae),this.bindEyePosition(te)}(Re||!this.isFrozen)&&(ae.lightsEnabled&&!this._disableLighting&&n.a.BindLights(ae,m,this._activeEffect,he,this._maxSimultaneousLights,this._rebuildInParallel),(ae.fogEnabled&&m.applyFog&&ae.fogMode!==T.a.FOGMODE_NONE||se)&&this.bindView(te),n.a.BindFogParameters(ae,m,this._activeEffect,!0),he.NUM_MORPH_INFLUENCERS&&n.a.BindMorphTargetParameters(m,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),n.a.BindLogDepth(he,this._activeEffect,ae)),this._afterBind(m,this._activeEffect),X.update()}}},_.prototype.getAnimatables=function(){var c=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&c.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&c.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&c.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&c.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&c.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?c.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&c.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&c.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&c.push(this._lightmapTexture),this.detailMap.getAnimatables(c),this.subSurface.getAnimatables(c),this.clearCoat.getAnimatables(c),this.sheen.getAnimatables(c),this.anisotropy.getAnimatables(c),c},_.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},_.prototype.getActiveTextures=function(){var c=w.prototype.getActiveTextures.call(this);return this._albedoTexture&&c.push(this._albedoTexture),this._ambientTexture&&c.push(this._ambientTexture),this._opacityTexture&&c.push(this._opacityTexture),this._reflectionTexture&&c.push(this._reflectionTexture),this._emissiveTexture&&c.push(this._emissiveTexture),this._reflectivityTexture&&c.push(this._reflectivityTexture),this._metallicTexture&&c.push(this._metallicTexture),this._metallicReflectanceTexture&&c.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&c.push(this._microSurfaceTexture),this._bumpTexture&&c.push(this._bumpTexture),this._lightmapTexture&&c.push(this._lightmapTexture),this.detailMap.getActiveTextures(c),this.subSurface.getActiveTextures(c),this.clearCoat.getActiveTextures(c),this.sheen.getActiveTextures(c),this.anisotropy.getActiveTextures(c),c},_.prototype.hasTexture=function(c){return w.prototype.hasTexture.call(this,c)||this._albedoTexture===c||this._ambientTexture===c||this._opacityTexture===c||this._reflectionTexture===c||this._reflectivityTexture===c||this._metallicTexture===c||this._metallicReflectanceTexture===c||this._microSurfaceTexture===c||this._bumpTexture===c||this._lightmapTexture===c?!0:this.detailMap.hasTexture(c)||this.subSurface.hasTexture(c)||this.clearCoat.hasTexture(c)||this.sheen.hasTexture(c)||this.anisotropy.hasTexture(c)},_.prototype.setPrePassRenderer=function(c){if(this.subSurface.isScatteringEnabled){var m=this.getScene().enableSubSurfaceForPrePass();return m&&(m.enabled=!0),!0}return!1},_.prototype.dispose=function(c,m){var U,ae,he,te,Re,se,X,ue,me,Se,ce;m&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(U=this._albedoTexture)===null||U===void 0||U.dispose(),(ae=this._ambientTexture)===null||ae===void 0||ae.dispose(),(he=this._opacityTexture)===null||he===void 0||he.dispose(),(te=this._reflectionTexture)===null||te===void 0||te.dispose(),(Re=this._emissiveTexture)===null||Re===void 0||Re.dispose(),(se=this._metallicTexture)===null||se===void 0||se.dispose(),(X=this._reflectivityTexture)===null||X===void 0||X.dispose(),(ue=this._bumpTexture)===null||ue===void 0||ue.dispose(),(me=this._lightmapTexture)===null||me===void 0||me.dispose(),(Se=this._metallicReflectanceTexture)===null||Se===void 0||Se.dispose(),(ce=this._microSurfaceTexture)===null||ce===void 0||ce.dispose()),this.detailMap.dispose(m),this.subSurface.dispose(m),this.clearCoat.dispose(m),this.sheen.dispose(m),this.anisotropy.dispose(m),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),w.prototype.dispose.call(this,c,m)},_.PBRMATERIAL_OPAQUE=A.a.MATERIAL_OPAQUE,_.PBRMATERIAL_ALPHATEST=A.a.MATERIAL_ALPHATEST,_.PBRMATERIAL_ALPHABLEND=A.a.MATERIAL_ALPHABLEND,_.PBRMATERIAL_ALPHATESTANDBLEND=A.a.MATERIAL_ALPHATESTANDBLEND,_.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,_.LIGHTFALLOFF_PHYSICAL=0,_.LIGHTFALLOFF_GLTF=1,_.LIGHTFALLOFF_STANDARD=2,Object(f.c)([Object(s.i)()],_.prototype,"_imageProcessingConfiguration",void 0),Object(f.c)([Object(s.b)("_markAllSubMeshesAsMiscDirty")],_.prototype,"debugMode",void 0),Object(f.c)([Object(s.c)()],_.prototype,"useLogarithmicDepth",null),_}(x.a)},530:function($,H,o){"use strict";o.d(H,"a",function(){return i});var f=o(483),s=o(572),b=o(438),E=o(449),d=o(436),T=o(589),p=o(542),i=function(){function t(e,n,r,a,l,h,u,g,R,P){r===void 0&&(r=0),a===void 0&&(a=100),l===void 0&&(l=!1),h===void 0&&(h=1),P===void 0&&(P=!1),this.target=n,this.fromFrame=r,this.toFrame=a,this.loopAnimation=l,this.onAnimationEnd=u,this.onAnimationLoop=R,this.isAdditive=P,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new b.c,this.onAnimationLoopObservable=new b.c,this._scene=e,g&&this.appendAnimations(n,g),this._speedRatio=h,e._activeAnimatables.push(this)}return Object.defineProperty(t.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._weight},set:function(e){if(e===-1){this._weight=-1;return}this._weight=Math.min(Math.max(e,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(e){for(var n=0;n<this._runtimeAnimations.length;n++){var r=this._runtimeAnimations[n];r._prepareForSpeedRatioChange(e)}this._speedRatio=e},enumerable:!1,configurable:!0}),t.prototype.syncWith=function(e){if(this._syncRoot=e,e){var n=this._scene._activeAnimatables.indexOf(this);n>-1&&(this._scene._activeAnimatables.splice(n,1),this._scene._activeAnimatables.push(this))}return this},t.prototype.getAnimations=function(){return this._runtimeAnimations},t.prototype.appendAnimations=function(e,n){for(var r=this,a=0;a<n.length;a++){var l=n[a],h=new s.a(e,l,this._scene,this);h._onLoop=function(){r.onAnimationLoopObservable.notifyObservers(r),r.onAnimationLoop&&r.onAnimationLoop()},this._runtimeAnimations.push(h)}},t.prototype.getAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r].animation;return null},t.prototype.getRuntimeAnimationByTargetProperty=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)if(n[r].animation.targetProperty===e)return n[r];return null},t.prototype.reset=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},t.prototype.enableBlending=function(e){for(var n=this._runtimeAnimations,r=0;r<n.length;r++)n[r].animation.enableBlending=!0,n[r].animation.blendingSpeed=e},t.prototype.disableBlending=function(){for(var e=this._runtimeAnimations,n=0;n<e.length;n++)e[n].animation.enableBlending=!1},t.prototype.goToFrame=function(e){var n=this._runtimeAnimations;if(n[0]){var r=n[0].animation.framePerSecond,a=n[0].currentFrame,l=this.speedRatio===0?0:(e-a)/r*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=l}for(var h=0;h<n.length;h++)n[h].goToFrame(e)},t.prototype.pause=function(){this._paused||(this._paused=!0)},t.prototype.restart=function(){this._paused=!1},t.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},t.prototype.stop=function(e,n){if(e||n){var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){for(var a=this._runtimeAnimations,l=a.length-1;l>=0;l--){var h=a[l];e&&h.animation.name!=e||n&&!n(h.target)||(h.dispose(),a.splice(l,1))}a.length==0&&(this._scene._activeAnimatables.splice(r,1),this._raiseOnAnimationEnd())}}else{var l=this._scene._activeAnimatables.indexOf(this);if(l>-1){this._scene._activeAnimatables.splice(l,1);for(var a=this._runtimeAnimations,l=0;l<a.length;l++)a[l].dispose();this._raiseOnAnimationEnd()}}},t.prototype.waitAsync=function(){var e=this;return new Promise(function(n,r){e.onAnimationEndObservable.add(function(){n(e)},void 0,void 0,e,!0)})},t.prototype._animate=function(e){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=e),!0;if(this._localDelayOffset===null?(this._localDelayOffset=e,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=e-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var n=!1,r=this._runtimeAnimations,a;for(a=0;a<r.length;a++){var l=r[a],h=l.animate(e-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);n=n||h}if(this.animationStarted=n,!n){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<r.length;a++)r[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return n},t}();E.a.prototype._animate=function(){if(!!this.animationsEnabled){var t=T.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=t}this.deltaTime=this.useConstantAnimationDeltaTime?16:(t-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=t;var e=this._activeAnimatables;if(e.length!==0){this._animationTime+=this.deltaTime;for(var n=this._animationTime,r=0;r<e.length;r++){var a=e[r];!a._animate(n)&&a.disposeOnEnd&&r--}this._processLateAnimationBindings()}}},E.a.prototype.beginWeightedAnimation=function(t,e,n,r,a,l,h,u,g,R,P){r===void 0&&(r=1),l===void 0&&(l=1),P===void 0&&(P=!1);var A=this.beginAnimation(t,e,n,a,l,h,u,!1,g,R,P);return A.weight=r,A},E.a.prototype.beginAnimation=function(t,e,n,r,a,l,h,u,g,R,P){a===void 0&&(a=1),u===void 0&&(u=!0),P===void 0&&(P=!1),e>n&&a>0&&(a*=-1),u&&this.stopAnimation(t,void 0,g),h||(h=new i(this,t,e,n,r,a,l,void 0,R,P));var A=g?g(t):!0;if(t.animations&&A&&h.appendAnimations(t,t.animations),t.getAnimatables)for(var C=t.getAnimatables(),x=0;x<C.length;x++)this.beginAnimation(C[x],e,n,r,a,l,h,u,g,R);return h.reset(),h},E.a.prototype.beginHierarchyAnimation=function(t,e,n,r,a,l,h,u,g,R,P,A){l===void 0&&(l=1),g===void 0&&(g=!0),A===void 0&&(A=!1);var C=t.getDescendants(e),x=[];x.push(this.beginAnimation(t,n,r,a,l,h,u,g,R,void 0,A));for(var I=0,F=C;I<F.length;I++){var y=F[I];x.push(this.beginAnimation(y,n,r,a,l,h,u,g,R,void 0,A))}return x},E.a.prototype.beginDirectAnimation=function(t,e,n,r,a,l,h,u,g){g===void 0&&(g=!1),l===void 0&&(l=1),n>r&&l>0&&(l*=-1);var R=new i(this,t,n,r,a,l,h,e,u,g);return R},E.a.prototype.beginDirectHierarchyAnimation=function(t,e,n,r,a,l,h,u,g,R){R===void 0&&(R=!1);var P=t.getDescendants(e),A=[];A.push(this.beginDirectAnimation(t,n,r,a,l,h,u,g,R));for(var C=0,x=P;C<x.length;C++){var I=x[C];A.push(this.beginDirectAnimation(I,n,r,a,l,h,u,g,R))}return A},E.a.prototype.getAnimatableByTarget=function(t){for(var e=0;e<this._activeAnimatables.length;e++)if(this._activeAnimatables[e].target===t)return this._activeAnimatables[e];return null},E.a.prototype.getAllAnimatablesByTarget=function(t){for(var e=[],n=0;n<this._activeAnimatables.length;n++)this._activeAnimatables[n].target===t&&e.push(this._activeAnimatables[n]);return e},E.a.prototype.stopAnimation=function(t,e,n){for(var r=this.getAllAnimatablesByTarget(t),a=0,l=r;a<l.length;a++){var h=l[a];h.stop(e,n)}},E.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var t=0;t<this._activeAnimatables.length;t++)this._activeAnimatables[t].stop();this._activeAnimatables=[]}for(var e=0,n=this.animationGroups;e<n.length;e++){var r=n[e];r.stop()}},E.a.prototype._registerTargetForLateAnimationBinding=function(t,e){var n=t.target;this._registeredForLateAnimationBindings.pushNoDuplicate(n),n._lateAnimationHolders||(n._lateAnimationHolders={}),n._lateAnimationHolders[t.targetPath]||(n._lateAnimationHolders[t.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:e}),t.isAdditive?(n._lateAnimationHolders[t.targetPath].additiveAnimations.push(t),n._lateAnimationHolders[t.targetPath].totalAdditiveWeight+=t.weight):(n._lateAnimationHolders[t.targetPath].animations.push(t),n._lateAnimationHolders[t.targetPath].totalWeight+=t.weight)},E.a.prototype._processLateAnimationBindingsForMatrices=function(t){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return t.originalValue;var e=1,n=d.c.Vector3[0],r=d.c.Vector3[1],a=d.c.Quaternion[0],l=0,h=t.animations[0],u=t.originalValue,g=1,R=!1;if(t.totalWeight<1)g=1-t.totalWeight,u.decompose(r,a,n);else{if(l=1,e=t.totalWeight,g=h.weight/e,g==1)if(t.totalAdditiveWeight)R=!0;else return h.currentValue;h.currentValue.decompose(r,a,n)}if(!R){r.scaleInPlace(g),n.scaleInPlace(g),a.scaleInPlace(g);for(var P=l;P<t.animations.length;P++){var A=t.animations[P];if(A.weight!==0){var g=A.weight/e,C=d.c.Vector3[2],x=d.c.Vector3[3],I=d.c.Quaternion[1];A.currentValue.decompose(x,I,C),x.scaleAndAddToRef(g,r),I.scaleAndAddToRef(g,a),C.scaleAndAddToRef(g,n)}}}for(var F=0;F<t.additiveAnimations.length;F++){var A=t.additiveAnimations[F];if(A.weight!==0){var C=d.c.Vector3[2],x=d.c.Vector3[3],I=d.c.Quaternion[1];A.currentValue.decompose(x,I,C),x.multiplyToRef(r,x),d.e.LerpToRef(r,x,A.weight,r),a.multiplyToRef(I,I),d.b.SlerpToRef(a,I,A.weight,a),C.scaleAndAddToRef(A.weight,n)}}var y=h?h._animationState.workValue:d.c.Matrix[0].clone();return d.a.ComposeToRef(r,a,n,y),y},E.a.prototype._processLateAnimationBindingsForQuaternions=function(t,e){if(t.totalWeight===0&&t.totalAdditiveWeight===0)return e;var n=t.animations[0],r=t.originalValue,a=e;if(t.totalWeight===0&&t.totalAdditiveWeight>0)a.copyFrom(r);else if(t.animations.length===1){if(d.b.SlerpToRef(r,n.currentValue,Math.min(1,t.totalWeight),a),t.totalAdditiveWeight===0)return a}else if(t.animations.length>1){var l=1,h=void 0,u=void 0;if(t.totalWeight<1){var g=1-t.totalWeight;h=[],u=[],h.push(r),u.push(g)}else{if(t.animations.length===2&&(d.b.SlerpToRef(t.animations[0].currentValue,t.animations[1].currentValue,t.animations[1].weight/t.totalWeight,e),t.totalAdditiveWeight===0))return e;h=[],u=[],l=t.totalWeight}for(var R=0;R<t.animations.length;R++){var P=t.animations[R];h.push(P.currentValue),u.push(P.weight/l)}for(var A=0,C=0;C<h.length;){if(!C){d.b.SlerpToRef(h[C],h[C+1],u[C+1]/(u[C]+u[C+1]),e),a=e,A=u[C]+u[C+1],C+=2;continue}A+=u[C],d.b.SlerpToRef(a,h[C],u[C]/A,a),C++}}for(var x=0;x<t.additiveAnimations.length;x++){var P=t.additiveAnimations[x];P.weight!==0&&(a.multiplyToRef(P.currentValue,d.c.Quaternion[0]),d.b.SlerpToRef(a,d.c.Quaternion[0],P.weight,a))}return a},E.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var t=0;t<this._registeredForLateAnimationBindings.length;t++){var e=this._registeredForLateAnimationBindings.data[t];for(var n in e._lateAnimationHolders){var r=e._lateAnimationHolders[n],a=r.animations[0],l=r.originalValue,h=f.a.AllowMatrixDecomposeForInterpolation&&l.m,u=e[n];if(h)u=this._processLateAnimationBindingsForMatrices(r);else{var g=l.w!==void 0;if(g)u=this._processLateAnimationBindingsForQuaternions(r,u||d.b.Identity());else{var R=0,P=1;if(r.totalWeight<1)a&&l.scale?u=l.scale(1-r.totalWeight):a?u=l*(1-r.totalWeight):l.clone?u=l.clone():u=l;else if(a){P=r.totalWeight;var A=a.weight/P;A!==1?a.currentValue.scale?u=a.currentValue.scale(A):u=a.currentValue*A:u=a.currentValue,R=1}for(var C=R;C<r.animations.length;C++){var x=r.animations[C],I=x.weight/P;if(I)x.currentValue.scaleAndAddToRef?x.currentValue.scaleAndAddToRef(I,u):u+=x.currentValue*I;else continue}for(var F=0;F<r.additiveAnimations.length;F++){var x=r.additiveAnimations[F],I=x.weight;if(I)x.currentValue.scaleAndAddToRef?x.currentValue.scaleAndAddToRef(I,u):u+=x.currentValue*I;else continue}}}e[n]=u}e._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},p.a.prototype.copyAnimationRange=function(t,e,n,r,a){r===void 0&&(r=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new f.a(this.name,"_matrix",t.animations[0].framePerSecond,f.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var l=t.animations[0].getRange(e);if(!l)return!1;for(var h=l.from,u=l.to,g=t.animations[0].getKeys(),R=t.length,P=t.getParent(),A=this.getParent(),C=r&&P&&R&&this.length&&R!==this.length,x=C&&A&&P?A.length/P.length:1,I=r&&!A&&a&&(a.x!==1||a.y!==1||a.z!==1),F=this.animations[0].getKeys(),y,N,G,V=0,L=g.length;V<L;V++)y=g[V],y.frame>=h&&y.frame<=u&&(r?(G=y.value.clone(),C?(N=G.getTranslation(),G.setTranslation(N.scaleInPlace(x))):I&&a?(N=G.getTranslation(),G.setTranslation(N.multiplyInPlace(a))):G=y.value):G=y.value,F.push({frame:y.frame+n,value:G}));return this.animations[0].createRange(e,h+n,u+n),!0}},532:function($,H,o){"use strict";var f=o(467),s=o(456);f.a.prototype.createDynamicTexture=function(b,E,d,T){var p=new s.a(this,s.b.Dynamic);return p.baseWidth=b,p.baseHeight=E,d&&(b=this.needPOTTextures?f.a.GetExponentOfTwo(b,this._caps.maxTextureSize):b,E=this.needPOTTextures?f.a.GetExponentOfTwo(E,this._caps.maxTextureSize):E),p.width=b,p.height=E,p.isReady=!1,p.generateMipMaps=d,p.samplingMode=T,this.updateTextureSamplingMode(T,p),this._internalTexturesCache.push(p),p},f.a.prototype.updateDynamicTexture=function(b,E,d,T,p,i){if(T===void 0&&(T=!1),i===void 0&&(i=!1),!!b){var t=this._gl,e=t.TEXTURE_2D,n=this._bindTextureDirectly(e,b,!0,i);this._unpackFlipY(d===void 0?b.invertY:d),T&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var r=this._getWebGLTextureType(b.type),a=this._getInternalFormat(p||b.format),l=this._getRGBABufferInternalSizedFormat(b.type,a);t.texImage2D(e,0,l,a,r,E),b.generateMipMaps&&t.generateMipmap(e),n||this._bindTextureDirectly(e,null),T&&t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),b.isReady=!0}}},533:function($,H,o){"use strict";o.d(H,"a",function(){return p});var f=o(434),s=o(439),b=o(514),E=o(441),d=o(529),T=o(437),p=function(i){Object(f.d)(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.directIntensity=1,r.emissiveIntensity=1,r.environmentIntensity=1,r.specularIntensity=1,r.disableBumpMap=!1,r.ambientTextureStrength=1,r.ambientTextureImpactOnAnalyticalLights=t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,r.metallicF0Factor=1,r.metallicReflectanceColor=E.a.White(),r.ambientColor=new E.a(0,0,0),r.albedoColor=new E.a(1,1,1),r.reflectivityColor=new E.a(1,1,1),r.reflectionColor=new E.a(1,1,1),r.emissiveColor=new E.a(0,0,0),r.microSurface=1,r.useLightmapAsShadowmap=!1,r.useAlphaFromAlbedoTexture=!1,r.forceAlphaTest=!1,r.alphaCutOff=.4,r.useSpecularOverAlpha=!0,r.useMicroSurfaceFromReflectivityMapAlpha=!1,r.useRoughnessFromMetallicTextureAlpha=!0,r.useRoughnessFromMetallicTextureGreen=!1,r.useMetallnessFromMetallicTextureBlue=!1,r.useAmbientOcclusionFromMetallicTextureRed=!1,r.useAmbientInGrayScale=!1,r.useAutoMicroSurfaceFromReflectivityMap=!1,r.useRadianceOverAlpha=!0,r.useObjectSpaceNormalMap=!1,r.useParallax=!1,r.useParallaxOcclusion=!1,r.parallaxScaleBias=.05,r.disableLighting=!1,r.forceIrradianceInFragment=!1,r.maxSimultaneousLights=4,r.invertNormalMapX=!1,r.invertNormalMapY=!1,r.twoSidedLighting=!1,r.useAlphaFresnel=!1,r.useLinearAlphaFresnel=!1,r.environmentBRDFTexture=null,r.forceNormalForward=!1,r.enableSpecularAntiAliasing=!1,r.useHorizonOcclusion=!0,r.useRadianceOcclusion=!0,r.unlit=!1,r._environmentBRDFTexture=b.a.GetEnvironmentBRDFTexture(n),r}return Object.defineProperty(t.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(e){this.subSurface.refractionTexture=e,e?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(e){this.subSurface.indexOfRefraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(e){this.subSurface.invertRefractionY=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(e){this.subSurface.linkRefractionWithTransparency=e,e&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===d.a.LIGHTFALLOFF_PHYSICAL},set:function(e){e!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=d.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=d.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===d.a.LIGHTFALLOFF_GLTF},set:function(e){e!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),e?this._lightFalloff=d.a.LIGHTFALLOFF_GLTF:this._lightFalloff=d.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(e){this._attachImageProcessingConfiguration(e),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(e){this.imageProcessingConfiguration.colorCurvesEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(e){this.imageProcessingConfiguration.colorGradingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(e){this._imageProcessingConfiguration.toneMappingEnabled=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(e){this._imageProcessingConfiguration.exposure=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(e){this._imageProcessingConfiguration.contrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(e){this._imageProcessingConfiguration.colorGradingTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(e){this._imageProcessingConfiguration.colorCurves=e},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"PBRMaterial"},t.prototype.clone=function(e){var n=this,r=s.a.Clone(function(){return new t(e,n.getScene())},this);return r.id=e,r.name=e,this.clearCoat.copyTo(r.clearCoat),this.anisotropy.copyTo(r.anisotropy),this.brdf.copyTo(r.brdf),this.sheen.copyTo(r.sheen),this.subSurface.copyTo(r.subSurface),r},t.prototype.serialize=function(){var e=s.a.Serialize(this);return e.customType="BABYLON.PBRMaterial",e.clearCoat=this.clearCoat.serialize(),e.anisotropy=this.anisotropy.serialize(),e.brdf=this.brdf.serialize(),e.sheen=this.sheen.serialize(),e.subSurface=this.subSurface.serialize(),e},t.Parse=function(e,n,r){var a=s.a.Parse(function(){return new t(e.name,n)},e,n,r);return e.clearCoat&&a.clearCoat.parse(e.clearCoat,n,r),e.anisotropy&&a.anisotropy.parse(e.anisotropy,n,r),e.brdf&&a.brdf.parse(e.brdf,n,r),e.sheen&&a.sheen.parse(e.sheen,n,r),e.subSurface&&a.subSurface.parse(e.subSurface,n,r),a},t.PBRMATERIAL_OPAQUE=d.a.PBRMATERIAL_OPAQUE,t.PBRMATERIAL_ALPHATEST=d.a.PBRMATERIAL_ALPHATEST,t.PBRMATERIAL_ALPHABLEND=d.a.PBRMATERIAL_ALPHABLEND,t.PBRMATERIAL_ALPHATESTANDBLEND=d.a.PBRMATERIAL_ALPHATESTANDBLEND,t.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=d.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"directIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"specularIntensity",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"disableBumpMap",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureStrength",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"opacityTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallic",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"roughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicF0Factor",void 0),Object(f.c)([Object(s.e)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceColor",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"metallicReflectanceTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurfaceTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty",null)],t.prototype,"lightmapTexture",void 0),Object(f.c)([Object(s.e)("ambient"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"ambientColor",void 0),Object(f.c)([Object(s.e)("albedo"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"albedoColor",void 0),Object(f.c)([Object(s.e)("reflectivity"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectivityColor",void 0),Object(f.c)([Object(s.e)("reflection"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"reflectionColor",void 0),Object(f.c)([Object(s.e)("emissive"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"emissiveColor",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"microSurface",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLightmapAsShadowmap",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"useAlphaFromAlbedoTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"forceAlphaTest",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],t.prototype,"alphaCutOff",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useSpecularOverAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAmbientInGrayScale",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(f.c)([Object(s.c)()],t.prototype,"usePhysicalLightFalloff",null),Object(f.c)([Object(s.c)()],t.prototype,"useGLTFLightFalloff",null),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOverAlpha",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useObjectSpaceNormalMap",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallax",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useParallaxOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"parallaxScaleBias",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceIrradianceInFragment",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapX",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"invertNormalMapY",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"twoSidedLighting",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useAlphaFresnel",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useLinearAlphaFresnel",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"environmentBRDFTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"forceNormalForward",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"enableSpecularAntiAliasing",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useHorizonOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"useRadianceOcclusion",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],t.prototype,"unlit",void 0),t}(d.a);T.a.RegisteredTypes["BABYLON.PBRMaterial"]=p},534:function($,H,o){"use strict";var f=o(435),s="postprocessVertexShader",b=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[s]=b;var E={name:s,shader:b}},535:function($,H,o){"use strict";var f=o(435),s="packingFunctions",b=`vec4 pack(float depth)
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
}`;f.a.IncludesShadersStore[s]=b;var E={name:s,shader:b}},538:function($,H,o){"use strict";o.d(H,"a",function(){return d});var f=o(434),s=o(442),b=o(458),E=o(574),d=function(T){Object(f.d)(p,T);function p(i,t,e,n,r){var a=this,l=r&&r.generateMipMaps?r.generateMipMaps:!1,h=r&&r.generateDepthTexture?r.generateDepthTexture:!1,u=!r||r.doNotChangeAspectRatio===void 0?!0:r.doNotChangeAspectRatio,g=r&&r.drawOnlyOnFirstAttachmentByDefault?r.drawOnlyOnFirstAttachmentByDefault:!1;if(a=T.call(this,i,t,n,l,u,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var R=[],P=[];a._initTypes(e,R,P,r);var A=!r||r.generateDepthBuffer===void 0?!0:r.generateDepthBuffer,C=!r||r.generateStencilBuffer===void 0?!1:r.generateStencilBuffer;return a._size=t,a._multiRenderTargetOptions={samplingModes:P,generateMipMaps:l,generateDepthBuffer:A,generateStencilBuffer:C,generateDepthTexture:h,types:R,textureCount:e},a._count=e,a._drawOnlyOnFirstAttachmentByDefault=g,e>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(p.prototype,"isSupported",{get:function(){var i,t;return(t=(i=this._engine)===null||i===void 0?void 0:i.getCaps().drawBuffersExtension)!==null&&t!==void 0?t:!1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapU",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapU=i},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapV",{set:function(i){if(this._textures)for(var t=0;t<this._textures.length;t++)this._textures[t].wrapV=i},enumerable:!1,configurable:!0}),p.prototype._initTypes=function(i,t,e,n){for(var r=0;r<i;r++)n&&n.types&&n.types[r]!==void 0?t.push(n.types[r]):t.push(n&&n.defaultType?n.defaultType:0),n&&n.samplingModes&&n.samplingModes[r]!==void 0?e.push(n.samplingModes[r]):e.push(s.a.BILINEAR_SAMPLINGMODE)},p.prototype._rebuild=function(i){if(i===void 0&&(i=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),i&&this._createTextures();for(var t=0;t<this._internalTextures.length;t++){var e=this._textures[t];e._texture=this._internalTextures[t]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},p.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},p.prototype._createTextures=function(){this._textures=[];for(var i=0;i<this._internalTextures.length;i++){var t=new s.a(null,this.getScene());t._texture=this._internalTextures[i],this._textures.push(t)}},p.prototype.replaceTexture=function(i,t){i._texture&&(this._textures[t]=i,this._internalTextures[t]=i._texture,t===0&&(this._texture=this._internalTextures[t]))},Object.defineProperty(p.prototype,"samples",{get:function(){return this._samples},set:function(i){this._samples!==i&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,i):this._samples=i)},enumerable:!1,configurable:!0}),p.prototype.resize=function(i){this._size=i,this._rebuild()},p.prototype.updateCount=function(i,t){this._multiRenderTargetOptions.textureCount=i,this._count=i;var e=[],n=[];this._initTypes(i,e,n,t),this._multiRenderTargetOptions.types=e,this._multiRenderTargetOptions.samplingModes=n,this._rebuild(!0)},p.prototype.unbindFrameBuffer=function(i,t){var e=this;i.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){e.onAfterRenderObservable.notifyObservers(t)})},p.prototype.dispose=function(){this.releaseInternalTextures(),T.prototype.dispose.call(this)},p.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var i=this._internalTextures.length-1;i>=0;i--)this._internalTextures[i]!==void 0&&(this._internalTextures[i].dispose(),this._internalTextures.splice(i,1))},p}(b.a)},542:function($,H,o){"use strict";o.d(H,"a",function(){return T});var f=o(434),s=o(436),b=o(588),E=o(453),d=o(465),T=function(p){Object(f.d)(i,p);function i(t,e,n,r,a,l,h){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),l===void 0&&(l=null),h===void 0&&(h=null);var u=p.call(this,t,e.getScene())||this;return u.name=t,u.children=new Array,u.animations=new Array,u._index=null,u._absoluteTransform=new s.a,u._invertedAbsoluteTransform=new s.a,u._scalingDeterminant=1,u._worldTransform=new s.a,u._needToDecompose=!0,u._needToCompose=!1,u._linkedTransformNode=null,u._waitingTransformNodeId=null,u._skeleton=e,u._localMatrix=r?r.clone():s.a.Identity(),u._restPose=a||u._localMatrix.clone(),u._bindPose=u._localMatrix.clone(),u._baseMatrix=l||u._localMatrix.clone(),u._index=h,e.bones.push(u),u.setParent(n,!1),(l||r)&&u._updateDifferenceMatrix(),u}return Object.defineProperty(i.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(t){this._localMatrix.copyFrom(t),this._needToDecompose=!0},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"Bone"},i.prototype.getSkeleton=function(){return this._skeleton},i.prototype.getParent=function(){return this._parent},i.prototype.getChildren=function(){return this.children},i.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},i.prototype.setParent=function(t,e){if(e===void 0&&(e=!0),this._parent!==t){if(this._parent){var n=this._parent.children.indexOf(this);n!==-1&&this._parent.children.splice(n,1)}this._parent=t,this._parent&&this._parent.children.push(this),e&&this._updateDifferenceMatrix(),this.markAsDirty()}},i.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},i.prototype.getBaseMatrix=function(){return this._baseMatrix},i.prototype.getRestPose=function(){return this._restPose},i.prototype.setRestPose=function(t){this._restPose.copyFrom(t)},i.prototype.getBindPose=function(){return this._bindPose},i.prototype.setBindPose=function(t){this._bindPose.copyFrom(t)},i.prototype.getWorldMatrix=function(){return this._worldTransform},i.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},i.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},i.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},i.prototype.linkTransformNode=function(t){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=t,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},i.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(i.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(t){this._decompose(),this._localPosition.copyFrom(t),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.getRotation()},set:function(t){this.setRotation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(t){this.setRotationQuaternion(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"scaling",{get:function(){return this.getScale()},set:function(t){this.setScale(t)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),i.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=s.e.Zero(),this._localRotation=s.b.Zero(),this._localPosition=s.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},i.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,s.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},i.prototype.updateMatrix=function(t,e,n){e===void 0&&(e=!0),n===void 0&&(n=!0),this._baseMatrix.copyFrom(t),e&&this._updateDifferenceMatrix(),n?(this._needToCompose=!1,this._localMatrix.copyFrom(t),this._markAsDirtyAndDecompose()):this.markAsDirty()},i.prototype._updateDifferenceMatrix=function(t,e){if(e===void 0&&(e=!0),t||(t=this._baseMatrix),this._parent?t.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(t),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),e)for(var n=0;n<this.children.length;n++)this.children[n]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},i.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},i.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},i.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},i.prototype.translate=function(t,e,n){e===void 0&&(e=d.c.LOCAL);var r=this.getLocalMatrix();if(e==d.c.LOCAL)r.addAtIndex(12,t.x),r.addAtIndex(13,t.y),r.addAtIndex(14,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0],h=i._tmpVecs[0];this._parent?n&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()):s.a.IdentityToRef(l),l.setTranslationFromFloats(0,0,0),l.invert(),s.e.TransformCoordinatesToRef(t,l,h),r.addAtIndex(12,h.x),r.addAtIndex(13,h.y),r.addAtIndex(14,h.z)}this._markAsDirtyAndDecompose()},i.prototype.setPosition=function(t,e,n){e===void 0&&(e=d.c.LOCAL);var r=this.getLocalMatrix();if(e==d.c.LOCAL)r.setTranslationFromFloats(t.x,t.y,t.z);else{var a=null;n&&(a=n.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0],h=i._tmpVecs[0];this._parent?(n&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()),l.invert()):s.a.IdentityToRef(l),s.e.TransformCoordinatesToRef(t,l,h),r.setTranslationFromFloats(h.x,h.y,h.z)}this._markAsDirtyAndDecompose()},i.prototype.setAbsolutePosition=function(t,e){this.setPosition(t,d.c.WORLD,e)},i.prototype.scale=function(t,e,n,r){r===void 0&&(r=!1);var a=this.getLocalMatrix(),l=i._tmpMats[0];s.a.ScalingToRef(t,e,n,l),l.multiplyToRef(a,a),l.invert();for(var h=0,u=this.children;h<u.length;h++){var g=u[h],R=g.getLocalMatrix();R.multiplyToRef(l,R),R.multiplyAtIndex(12,t),R.multiplyAtIndex(13,e),R.multiplyAtIndex(14,n),g._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var P=0,A=this.children;P<A.length;P++){var g=A[P];g.scale(t,e,n,r)}},i.prototype.setScale=function(t){this._decompose(),this._localScaling.copyFrom(t),this._markAsDirtyAndCompose()},i.prototype.getScale=function(){return this._decompose(),this._localScaling},i.prototype.getScaleToRef=function(t){this._decompose(),t.copyFrom(this._localScaling)},i.prototype.setYawPitchRoll=function(t,e,n,r,a){if(r===void 0&&(r=d.c.LOCAL),r===d.c.LOCAL){var l=i._tmpQuat;s.b.RotationYawPitchRollToRef(t,e,n,l),this.setRotationQuaternion(l,r,a);return}var h=i._tmpMats[0];if(!!this._getNegativeRotationToRef(h,a)){var u=i._tmpMats[1];s.a.RotationYawPitchRollToRef(t,e,n,u),h.multiplyToRef(u,u),this._rotateWithMatrix(u,r,a)}},i.prototype.rotate=function(t,e,n,r){n===void 0&&(n=d.c.LOCAL);var a=i._tmpMats[0];a.setTranslationFromFloats(0,0,0),s.a.RotationAxisToRef(t,e,a),this._rotateWithMatrix(a,n,r)},i.prototype.setAxisAngle=function(t,e,n,r){if(n===void 0&&(n=d.c.LOCAL),n===d.c.LOCAL){var a=i._tmpQuat;s.b.RotationAxisToRef(t,e,a),this.setRotationQuaternion(a,n,r);return}var l=i._tmpMats[0];if(!!this._getNegativeRotationToRef(l,r)){var h=i._tmpMats[1];s.a.RotationAxisToRef(t,e,h),l.multiplyToRef(h,h),this._rotateWithMatrix(h,n,r)}},i.prototype.setRotation=function(t,e,n){e===void 0&&(e=d.c.LOCAL),this.setYawPitchRoll(t.y,t.x,t.z,e,n)},i.prototype.setRotationQuaternion=function(t,e,n){if(e===void 0&&(e=d.c.LOCAL),e===d.c.LOCAL){this._decompose(),this._localRotation.copyFrom(t),this._markAsDirtyAndCompose();return}var r=i._tmpMats[0];if(!!this._getNegativeRotationToRef(r,n)){var a=i._tmpMats[1];s.a.FromQuaternionToRef(t,a),r.multiplyToRef(a,a),this._rotateWithMatrix(a,e,n)}},i.prototype.setRotationMatrix=function(t,e,n){if(e===void 0&&(e=d.c.LOCAL),e===d.c.LOCAL){var r=i._tmpQuat;s.b.FromRotationMatrixToRef(t,r),this.setRotationQuaternion(r,e,n);return}var a=i._tmpMats[0];if(!!this._getNegativeRotationToRef(a,n)){var l=i._tmpMats[1];l.copyFrom(t),a.multiplyToRef(t,l),this._rotateWithMatrix(l,e,n)}},i.prototype._rotateWithMatrix=function(t,e,n){e===void 0&&(e=d.c.LOCAL);var r=this.getLocalMatrix(),a=r.m[12],l=r.m[13],h=r.m[14],u=this.getParent(),g=i._tmpMats[3],R=i._tmpMats[4];u&&e==d.c.WORLD?(n?(g.copyFrom(n.getWorldMatrix()),u.getAbsoluteTransform().multiplyToRef(g,g)):g.copyFrom(u.getAbsoluteTransform()),R.copyFrom(g),R.invert(),r.multiplyToRef(g,r),r.multiplyToRef(t,r),r.multiplyToRef(R,r)):e==d.c.WORLD&&n?(g.copyFrom(n.getWorldMatrix()),R.copyFrom(g),R.invert(),r.multiplyToRef(g,r),r.multiplyToRef(t,r),r.multiplyToRef(R,r)):r.multiplyToRef(t,r),r.setTranslationFromFloats(a,l,h),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},i.prototype._getNegativeRotationToRef=function(t,e){var n=i._tmpMats[2];return t.copyFrom(this.getAbsoluteTransform()),e&&(t.multiplyToRef(e.getWorldMatrix(),t),s.a.ScalingToRef(e.scaling.x,e.scaling.y,e.scaling.z,n)),t.invert(),isNaN(t.m[0])?!1:(n.multiplyAtIndex(0,this._scalingDeterminant),t.multiplyToRef(n,t),!0)},i.prototype.getPosition=function(t,e){t===void 0&&(t=d.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getPositionToRef(t,e,n),n},i.prototype.getPositionToRef=function(t,e,n){if(t===void 0&&(t=d.c.LOCAL),t==d.c.LOCAL){var r=this.getLocalMatrix();n.x=r.m[12],n.y=r.m[13],n.z=r.m[14]}else{var a=null;e&&(a=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=i._tmpMats[0];e&&a?(l.copyFrom(this.getAbsoluteTransform()),l.multiplyToRef(a,l)):l=this.getAbsoluteTransform(),n.x=l.m[12],n.y=l.m[13],n.z=l.m[14]}},i.prototype.getAbsolutePosition=function(t){t===void 0&&(t=null);var e=s.e.Zero();return this.getPositionToRef(d.c.WORLD,t,e),e},i.prototype.getAbsolutePositionToRef=function(t,e){this.getPositionToRef(d.c.WORLD,t,e)},i.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var t=this._skeleton.getPoseMatrix();t&&this._absoluteTransform.multiplyToRef(t,this._absoluteTransform)}for(var e=this.children,n=e.length,r=0;r<n;r++)e[r].computeAbsoluteTransforms()},i.prototype.getDirection=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getDirectionToRef(t,e,n),n},i.prototype.getDirectionToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),s.e.TransformNormalToRef(t,a,n),n.normalize()},i.prototype.getRotation=function(t,e){t===void 0&&(t=d.c.LOCAL),e===void 0&&(e=null);var n=s.e.Zero();return this.getRotationToRef(t,e,n),n},i.prototype.getRotationToRef=function(t,e,n){t===void 0&&(t=d.c.LOCAL),e===void 0&&(e=null);var r=i._tmpQuat;this.getRotationQuaternionToRef(t,e,r),r.toEulerAnglesToRef(n)},i.prototype.getRotationQuaternion=function(t,e){t===void 0&&(t=d.c.LOCAL),e===void 0&&(e=null);var n=s.b.Identity();return this.getRotationQuaternionToRef(t,e,n),n},i.prototype.getRotationQuaternionToRef=function(t,e,n){if(t===void 0&&(t=d.c.LOCAL),e===void 0&&(e=null),t==d.c.LOCAL)this._decompose(),n.copyFrom(this._localRotation);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,n,void 0)}},i.prototype.getRotationMatrix=function(t,e){t===void 0&&(t=d.c.LOCAL);var n=s.a.Identity();return this.getRotationMatrixToRef(t,e,n),n},i.prototype.getRotationMatrixToRef=function(t,e,n){if(t===void 0&&(t=d.c.LOCAL),t==d.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(n);else{var r=i._tmpMats[0],a=this.getAbsoluteTransform();e?a.multiplyToRef(e.getWorldMatrix(),r):r.copyFrom(a),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(n)}},i.prototype.getAbsolutePositionFromLocal=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getAbsolutePositionFromLocalToRef(t,e,n),n},i.prototype.getAbsolutePositionFromLocalToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];e&&r?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(r,a)):a=this.getAbsoluteTransform(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.getLocalPositionFromAbsolute=function(t,e){e===void 0&&(e=null);var n=s.e.Zero();return this.getLocalPositionFromAbsoluteToRef(t,e,n),n},i.prototype.getLocalPositionFromAbsoluteToRef=function(t,e,n){e===void 0&&(e=null);var r=null;e&&(r=e.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),e&&r&&a.multiplyToRef(r,a),a.invert(),s.e.TransformCoordinatesToRef(t,a,n)},i.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},i._tmpVecs=b.a.BuildArray(2,s.e.Zero),i._tmpQuat=s.b.Identity(),i._tmpMats=b.a.BuildArray(5,s.a.Identity),i}(E.a)},545:function($,H,o){"use strict";o.d(H,"a",function(){return d});var f=o(444),s=o(625),b=o(500),E=o(566),d=function(){function T(){}return T.ExpandRGBDTexture=function(p){var i=p._texture;if(!(!i||!p.isRGBD)){var t=i.getEngine(),e=t.getCaps(),n=!1;e.textureHalfFloatRender&&e.textureHalfFloatLinearFiltering?(n=!0,i.type=2):e.textureFloatRender&&e.textureFloatLinearFiltering&&(n=!0,i.type=1),n&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),p.onLoadObservable.addOnce(function(){if(n){var r=new f.a("rgbdDecode","rgbdDecode",null,null,1,null,3,t,!1,void 0,i.type,void 0,null,!1),a=t.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});r.getEffect().executeWhenCompiled(function(){r.onApply=function(l){l._bindTexture("textureSampler",i),l.setFloat2("scale",1,1)},p.getScene().postProcessManager.directRender([r],a,!0),t.restoreDefaultFramebuffer(),t._releaseTexture(i),t._releaseFramebufferObjects(a),r&&r.dispose(),a._swapAndDie(i),i.isReady=!0})}})}},T.EncodeTextureToRGBD=function(p,i,t){return t===void 0&&(t=0),E.a.ApplyPostProcess("rgbdEncode",p,i,t,1,5)},T}()},547:function($,H,o){"use strict";o.d(H,"a",function(){return E});var f=o(449),s=o(452),b=o(502);Object.defineProperty(f.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(d){d&&d.isSupported&&(this._geometryBufferRenderer=d)},enumerable:!0,configurable:!0}),f.a.prototype.enableGeometryBufferRenderer=function(d){return d===void 0&&(d=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new b.a(this,d),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},f.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var E=function(){function d(T){this.name=s.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=T}return d.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(s.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},d.prototype.rebuild=function(){},d.prototype.dispose=function(){},d.prototype._gatherRenderTargets=function(T){this.scene._geometryBufferRenderer&&T.push(this.scene._geometryBufferRenderer.getGBuffer())},d}();b.a._SceneComponentInitialization=function(d){var T=d._getComponent(s.a.NAME_GEOMETRYBUFFERRENDERER);T||(T=new E(d),d._addComponent(T))}},548:function($,H,o){"use strict";o.d(H,"a",function(){return f});var f=function(){function s(){this._renderPipelines={}}return Object.defineProperty(s.prototype,"supportedPipelines",{get:function(){var b=[];for(var E in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(E)){var d=this._renderPipelines[E];d.isSupported&&b.push(d)}return b},enumerable:!1,configurable:!0}),s.prototype.addPipeline=function(b){this._renderPipelines[b._name]=b},s.prototype.attachCamerasToRenderPipeline=function(b,E,d){d===void 0&&(d=!1);var T=this._renderPipelines[b];!T||T._attachCameras(E,d)},s.prototype.detachCamerasFromRenderPipeline=function(b,E){var d=this._renderPipelines[b];!d||d._detachCameras(E)},s.prototype.enableEffectInPipeline=function(b,E,d){var T=this._renderPipelines[b];!T||T._enableEffect(E,d)},s.prototype.disableEffectInPipeline=function(b,E,d){var T=this._renderPipelines[b];!T||T._disableEffect(E,d)},s.prototype.update=function(){for(var b in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(b)){var E=this._renderPipelines[b];E.isSupported?E._update():(E.dispose(),delete this._renderPipelines[b])}},s.prototype._rebuild=function(){for(var b in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(b)){var E=this._renderPipelines[b];E._rebuild()}},s.prototype.dispose=function(){for(var b in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(b)){var E=this._renderPipelines[b];E.dispose()}},s}()},549:function($,H,o){"use strict";o.d(H,"a",function(){return s});const f=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>f()?"webgl2":"webgl"},566:function($,H,o){"use strict";o.d(H,"a",function(){return d});var f=o(442),s=o(458),b=o(486),E=o(444),d=function(){function T(){}return T.CreateResizedCopy=function(p,i,t,e){e===void 0&&(e=!0);var n=p.getScene(),r=n.getEngine(),a=new s.a("resized"+p.name,{width:i,height:t},n,!p.noMipmap,!0,p._texture.type,!1,p.samplingMode,!1);a.wrapU=p.wrapU,a.wrapV=p.wrapV,a.uOffset=p.uOffset,a.vOffset=p.vOffset,a.uScale=p.uScale,a.vScale=p.vScale,a.uAng=p.uAng,a.vAng=p.vAng,a.wAng=p.wAng,a.coordinatesIndex=p.coordinatesIndex,a.level=p.level,a.anisotropicFilteringLevel=p.anisotropicFilteringLevel,a._texture.isReady=!1,p.wrapU=f.a.CLAMP_ADDRESSMODE,p.wrapV=f.a.CLAMP_ADDRESSMODE;var l=new b.b("pass",1,null,e?f.a.BILINEAR_SAMPLINGMODE:f.a.NEAREST_SAMPLINGMODE,r,!1,0);return l.getEffect().executeWhenCompiled(function(){l.onApply=function(u){u.setTexture("textureSampler",p)};var h=a.getInternalTexture();h&&(n.postProcessManager.directRender([l],h),r.unBindFramebuffer(h),a.disposeFramebufferObjects(),l.dispose(),h.isReady=!0)}),a},T.ApplyPostProcess=function(p,i,t,e,n,r){var a=i.getEngine();return i.isReady=!1,n=n!=null?n:i.samplingMode,e=e!=null?e:i.type,r=r!=null?r:i.format,e===-1&&(e=0),new Promise(function(l){var h=new E.a("postprocess",p,null,null,1,null,n,a,!1,void 0,e,void 0,null,!1,r),u=a.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:n,type:e,format:r});h.getEffect().executeWhenCompiled(function(){h.onApply=function(g){g._bindTexture("textureSampler",i),g.setFloat2("scale",1,1)},t.postProcessManager.directRender([h],u,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(i),a._releaseFramebufferObjects(u),h&&h.dispose(),u._swapAndDie(i),i.type=e,i.format=5,i.isReady=!0,l(i)})})},T}()},570:function($,H,o){"use strict";o.d(H,"b",function(){return i}),o.d(H,"a",function(){return t});var f=o(434),s=o(436),b=o(442),E=o(466),d=o(582),T=o(580),p=o(583),i;(function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"})(i||(i={}));var t=function(e){Object(f.d)(n,e);function n(r,a,l,h,u){l===void 0&&(l=i.Low),h===void 0&&(h=0),u===void 0&&(u=!1);var g=e.call(this,r.getEngine(),"depth of field",function(){return g._effects},!0)||this;g._effects=[],g._circleOfConfusion=new d.a("circleOfConfusion",a,1,null,b.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u),g._depthOfFieldBlurY=[],g._depthOfFieldBlurX=[];var R=1,P=15;switch(l){case i.High:{R=3,P=51;break}case i.Medium:{R=2,P=31;break}default:{P=15,R=1;break}}for(var A=P/Math.pow(2,R-1),C=1,x=0;x<R;x++){var I=new T.a("vertical blur",r,new s.d(0,1),A,C,null,g._circleOfConfusion,x==0?g._circleOfConfusion:null,b.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u);I.autoClear=!1,C=.75/Math.pow(2,x);var F=new T.a("horizontal blur",r,new s.d(1,0),A,C,null,g._circleOfConfusion,null,b.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u);F.autoClear=!1,g._depthOfFieldBlurY.push(I),g._depthOfFieldBlurX.push(F)}g._effects=[g._circleOfConfusion];for(var x=0;x<g._depthOfFieldBlurX.length;x++)g._effects.push(g._depthOfFieldBlurY[x]),g._effects.push(g._depthOfFieldBlurX[x]);return g._dofMerge=new p.a("dofMerge",g._circleOfConfusion,g._circleOfConfusion,g._depthOfFieldBlurX,C,null,b.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,u),g._dofMerge.autoClear=!1,g._effects.push(g._dofMerge),g}return Object.defineProperty(n.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(r){this._circleOfConfusion.focalLength=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(r){this._circleOfConfusion.fStop=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(r){this._circleOfConfusion.focusDistance=r},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(r){this._circleOfConfusion.lensSize=r},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(n.prototype,"depthTexture",{set:function(r){this._circleOfConfusion.depthTexture=r},enumerable:!1,configurable:!0}),n.prototype.disposeEffects=function(r){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(r)},n.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},n.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},n}(E.a)},571:function($,H,o){"use strict";o.d(H,"a",function(){return h});var f=o(434),s=o(440),b=o(436),E=o(444),d=o(502),T=function(){function u(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return u}(),p=o(530),i=o(547),t=o(435),e="motionBlurPixelShader",n=`
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
`;t.a.ShadersStore[e]=n;var r={name:e,shader:n},a=o(439),l=o(437),h=function(u){Object(f.d)(g,u);function g(R,P,A,C,x,I,F,y,N,G){y===void 0&&(y=0),N===void 0&&(N=!1),G===void 0&&(G=!1);var V=u.call(this,R,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],A,C,x,I,F,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,y,void 0,null,N)||this;return V.motionStrength=1,V._motionBlurSamples=32,V._isObjectBased=!0,V._forceGeometryBuffer=!1,V._geometryBufferRenderer=null,V._prePassRenderer=null,V._invViewProjection=null,V._previousViewProjection=null,V._forceGeometryBuffer=G,V._forceGeometryBuffer?(V._geometryBufferRenderer=P.enableGeometryBufferRenderer(),V._geometryBufferRenderer&&(V._geometryBufferRenderer.enableVelocity=!0)):(V._prePassRenderer=P.enablePrePassRenderer(),V._prePassRenderer&&(V._prePassRenderer.markAsDirty(),V._prePassEffectConfiguration=new T)),V._applyMode(),V}return Object.defineProperty(g.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(R){this._motionBlurSamples=R,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(R){this._isObjectBased!==R&&(this._isObjectBased=R,this._applyMode())},enumerable:!1,configurable:!0}),g.prototype.getClassName=function(){return"MotionBlurPostProcess"},g.prototype.excludeSkinnedMesh=function(R){if(R.skeleton){var P=void 0;if(this._geometryBufferRenderer)P=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)P=this._prePassRenderer.excludedSkinnedMesh;else return;P.push(R)}},g.prototype.removeExcludedSkinnedMesh=function(R){if(R.skeleton){var P=void 0;if(this._geometryBufferRenderer)P=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)P=this._prePassRenderer.excludedSkinnedMesh;else return;var A=P.indexOf(R);A!==-1&&P.splice(A,1)}},g.prototype.dispose=function(R){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),u.prototype.dispose.call(this,R)},g.prototype._applyMode=function(){var R=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return s.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(P){return R._onApplyObjectBased(P)}):(this._invViewProjection=b.a.Identity(),this._previousViewProjection=b.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(P){return R._onApplyScreenBased(P)})},g.prototype._onApplyObjectBased=function(R){if(R.setVector2("screenSize",new b.d(this.width,this.height)),R.setFloat("motionScale",this._scene.getAnimationRatio()),R.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var P=this._geometryBufferRenderer.getTextureIndex(d.a.VELOCITY_TEXTURE_TYPE);R.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[P])}else if(this._prePassRenderer){var P=this._prePassRenderer.getIndex(2);R.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[P])}},g.prototype._onApplyScreenBased=function(R){var P=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(P.invertToRef(this._invViewProjection),R.setMatrix("inverseViewProjection",this._invViewProjection),R.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=P,R.setVector2("screenSize",new b.d(this.width,this.height)),R.setFloat("motionScale",this._scene.getAnimationRatio()),R.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var A=this._geometryBufferRenderer.getTextureIndex(d.a.DEPTH_TEXTURE_TYPE);R.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[A])}else if(this._prePassRenderer){var A=this._prePassRenderer.getIndex(5);R.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[A])}},g.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var R=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(R.join(`
`))}},g._Parse=function(R,P,A,C){return a.a.Parse(function(){return new g(R.name,A,R.options,P,R.renderTargetSamplingMode,A.getEngine(),R.reusable,R.textureType,!1)},R,A,C)},Object(f.c)([Object(a.c)()],g.prototype,"motionStrength",void 0),Object(f.c)([Object(a.c)()],g.prototype,"motionBlurSamples",null),Object(f.c)([Object(a.c)()],g.prototype,"isObjectBased",null),g}(E.a);l.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=h},572:function($,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(436),s=o(441),b=o(483),E=o(700),d=Object.freeze(new f.b(0,0,0,0)),T=Object.freeze(f.e.Zero()),p=Object.freeze(f.d.Zero()),i=Object.freeze(E.a.Zero()),t=Object.freeze(s.a.Black()),e=function(){function n(r,a,l,h){var u=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=r,this._scene=l,this._host=h,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===b.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=f.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var g={frame:0,value:this._minValue};this._keys.splice(0,0,g)}if(this._target instanceof Array){for(var R=0,P=0,A=this._target;P<A.length;P++){var C=A[P];this._preparePath(C,R),this._getOriginalValues(R),R++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var x=a.getEvents();x&&x.length>0&&x.forEach(function(I){u._events.push(I._clone())}),this._enableBlending=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(n.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),n.prototype._preparePath=function(r,a){a===void 0&&(a=0);var l=this._animation.targetPropertyPath;if(l.length>1){for(var h=r[l[0]],u=1;u<l.length-1;u++)h=h[l[u]];this._targetPath=l[l.length-1],this._activeTargets[a]=h}else this._targetPath=l[0],this._activeTargets[a]=r},Object.defineProperty(n.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),n.prototype.reset=function(r){if(r===void 0&&(r=!1),r)if(this._target instanceof Array)for(var a=0,l=0,h=this._target;l<h.length;l++){var u=h[l];this._originalValue[a]!==void 0&&this._setValue(u,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},n.prototype.isStopped=function(){return this._stopped},n.prototype.dispose=function(){var r=this._animation.runtimeAnimations.indexOf(this);r>-1&&this._animation.runtimeAnimations.splice(r,1)},n.prototype.setValue=function(r,a){if(this._targetIsArray){for(var l=0;l<this._target.length;l++){var h=this._target[l];this._setValue(h,this._activeTargets[l],r,a,l)}return}this._setValue(this._target,this._directTarget,r,a,0)},n.prototype._getOriginalValues=function(r){r===void 0&&(r=0);var a,l=this._activeTargets[r];l.getRestPose&&this._targetPath==="_matrix"?a=l.getRestPose():a=l[this._targetPath],a&&a.clone?this._originalValue[r]=a.clone():this._originalValue[r]=a},n.prototype._setValue=function(r,a,l,h,u){if(this._currentActiveTarget=a,this._weight=h,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var g=a[this._targetPath];g.clone?this._originalBlendValue=g.clone():this._originalBlendValue=g}this._originalBlendValue.m?b.a.AllowMatrixDecomposeForInterpolation?this._currentValue?f.a.DecomposeLerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.DecomposeLerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue?f.a.LerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.Lerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue=b.a._UniversalLerp(this._originalBlendValue,l,this._blendingFactor);var R=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=R}else this._currentValue=l;h!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[u]):a[this._targetPath]=this._currentValue,r.markAsDirty&&r.markAsDirty(this._animation.targetProperty)},n.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},n.prototype.goToFrame=function(r){var a=this._animation.getKeys();r<a[0].frame?r=a[0].frame:r>a[a.length-1].frame&&(r=a[a.length-1].frame);var l=this._events;if(l.length)for(var h=0;h<l.length;h++)l[h].onlyOnce||(l[h].isDone=l[h].frame<r);this._currentFrame=r;var u=this._animation._interpolate(r,this._animationState);this.setValue(u,-1)},n.prototype._prepareForSpeedRatioChange=function(r){var a=this._previousDelay*(this._animation.framePerSecond*r)/1e3;this._ratioOffset=this._previousRatio-a},n.prototype.animate=function(r,a,l,h,u,g){g===void 0&&(g=-1);var R=this._animation,P=R.targetPropertyPath;if(!P||P.length<1)return this._stopped=!0,!1;var A=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(l<this._minFrame||l>this._maxFrame)&&(l=this._maxFrame);var C=l-a,x,I=r*(R.framePerSecond*u)/1e3+this._ratioOffset,F=0;if(this._previousDelay=r,this._previousRatio=I,!h&&l>=a&&I>=C)A=!1,F=R._getKeyValue(this._maxValue);else if(!h&&a>=l&&I<=C)A=!1,F=R._getKeyValue(this._minValue);else if(this._animationState.loopMode!==b.a.ANIMATIONLOOPMODE_CYCLE){var y=l.toString()+a.toString();if(!this._offsetsCache[y]){this._animationState.repeatCount=0,this._animationState.loopMode=b.a.ANIMATIONLOOPMODE_CYCLE;var N=R._interpolate(a,this._animationState),G=R._interpolate(l,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),R.dataType){case b.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[y]=G-N;break;case b.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[y]=G.subtract(N);break;case b.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[y]=G.subtract(N);break;case b.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[y]=G.subtract(N);break;case b.a.ANIMATIONTYPE_SIZE:this._offsetsCache[y]=G.subtract(N);break;case b.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[y]=G.subtract(N);break;default:break}this._highLimitsCache[y]=G}F=this._highLimitsCache[y],x=this._offsetsCache[y]}if(x===void 0)switch(R.dataType){case b.a.ANIMATIONTYPE_FLOAT:x=0;break;case b.a.ANIMATIONTYPE_QUATERNION:x=d;break;case b.a.ANIMATIONTYPE_VECTOR3:x=T;break;case b.a.ANIMATIONTYPE_VECTOR2:x=p;break;case b.a.ANIMATIONTYPE_SIZE:x=i;break;case b.a.ANIMATIONTYPE_COLOR3:x=t}var V;if(this._host&&this._host.syncRoot){var L=this._host.syncRoot,ne=(L.masterFrame-L.fromFrame)/(L.toFrame-L.fromFrame);V=a+(l-a)*ne}else V=A&&C!==0?a+I%C:l;var K=this._events;if((C>0&&this.currentFrame>V||C<0&&this.currentFrame<V)&&(this._onLoop(),K.length))for(var B=0;B<K.length;B++)K[B].onlyOnce||(K[B].isDone=!1);this._currentFrame=V,this._animationState.repeatCount=C===0?0:I/C>>0,this._animationState.highLimitValue=F,this._animationState.offsetValue=x;var J=R._interpolate(V,this._animationState);if(this.setValue(J,g),K.length){for(var B=0;B<K.length;B++)if(C>0&&V>=K[B].frame&&K[B].frame>=a||C<0&&V<=K[B].frame&&K[B].frame<=a){var k=K[B];k.isDone||(k.onlyOnce&&(K.splice(B,1),B--),k.isDone=!0,k.action(V))}}return A||(this._stopped=!0),A},n}()},574:function($,H,o){"use strict";var f=o(456),s=o(440),b=o(467);b.a.prototype.restoreSingleAttachment=function(){var E=this._gl;this.bindAttachments([E.BACK])},b.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var E=this._gl;this.bindAttachments([E.COLOR_ATTACHMENT0])},b.a.prototype.buildTextureLayout=function(E){for(var d=this._gl,T=[],p=0;p<E.length;p++)E[p]?T.push(d["COLOR_ATTACHMENT"+p]):T.push(d.NONE);return T},b.a.prototype.bindAttachments=function(E){var d=this._gl;d.drawBuffers(E)},b.a.prototype.clearAttachments=function(E,d,T,p,i){if(E.length!==0){var t=this._gl;t.drawBuffers([E[0]]),this.clear(d,d!==null,p,i);var e=E[0];E[0]=t.NONE,t.drawBuffers(E),this.clear(T,T!==null,!1,!1),E[0]=e}},b.a.prototype.unBindMultiColorAttachmentFramebuffer=function(E,d,T){d===void 0&&(d=!1),this._currentRenderTarget=null;var p=this._gl,i=E[0]._attachments,t=i.length;if(E[0]._MSAAFramebuffer){p.bindFramebuffer(p.READ_FRAMEBUFFER,E[0]._MSAAFramebuffer),p.bindFramebuffer(p.DRAW_FRAMEBUFFER,E[0]._framebuffer);for(var e=0;e<t;e++){for(var n=E[e],r=0;r<t;r++)i[r]=p.NONE;i[e]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],p.readBuffer(i[e]),p.drawBuffers(i),p.blitFramebuffer(0,0,n.width,n.height,0,0,n.width,n.height,p.COLOR_BUFFER_BIT,p.NEAREST)}for(var e=0;e<t;e++)i[e]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"];p.drawBuffers(i)}for(var e=0;e<t;e++){var n=E[e];n.generateMipMaps&&!d&&!n.isCube&&(this._bindTextureDirectly(p.TEXTURE_2D,n,!0),p.generateMipmap(p.TEXTURE_2D),this._bindTextureDirectly(p.TEXTURE_2D,null))}T&&(E[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(E[0]._framebuffer),T()),this._bindUnboundFramebuffer(null)},b.a.prototype.createMultipleRenderTarget=function(E,d,T){T===void 0&&(T=!0);var p=!1,i=!0,t=!1,e=!1,n=1,r=0,a=3,l=new Array,h=new Array;d!==void 0&&(p=d.generateMipMaps===void 0?!1:d.generateMipMaps,i=d.generateDepthBuffer===void 0?!0:d.generateDepthBuffer,t=d.generateStencilBuffer===void 0?!1:d.generateStencilBuffer,e=d.generateDepthTexture===void 0?!1:d.generateDepthTexture,n=d.textureCount||1,d.types&&(l=d.types),d.samplingModes&&(h=d.samplingModes));var u=this._gl,g=u.createFramebuffer();this._bindUnboundFramebuffer(g);for(var R=E.width||E,P=E.height||E,A=[],C=[],x=this._setupFramebufferDepthAttachments(t,i,R,P),I=0;I<n;I++){var F=h[I]||a,y=l[I]||r;(y===1&&!this._caps.textureFloatLinearFiltering||y===2&&!this._caps.textureHalfFloatLinearFiltering)&&(F=1);var N=this._getSamplingParameters(F,p);y===1&&!this._caps.textureFloat&&(y=0,s.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var G=new f.a(this,f.b.MultiRenderTarget),V=u[this.webGLVersion>1?"COLOR_ATTACHMENT"+I:"COLOR_ATTACHMENT"+I+"_WEBGL"];A.push(G),C.push(V),u.activeTexture(u["TEXTURE"+I]),u.bindTexture(u.TEXTURE_2D,G._hardwareTexture.underlyingResource),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,N.mag),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,N.min),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(y),R,P,0,u.RGBA,this._getWebGLTextureType(y),null),u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,V,u.TEXTURE_2D,G._hardwareTexture.underlyingResource,0),p&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(u.TEXTURE_2D,null),G._framebuffer=g,G._depthStencilBuffer=x,G.baseWidth=R,G.baseHeight=P,G.width=R,G.height=P,G.isReady=!0,G.samples=1,G.generateMipMaps=p,G.samplingMode=F,G.type=y,G._generateDepthBuffer=i,G._generateStencilBuffer=t,G._attachments=C,G._textureArray=A,this._internalTexturesCache.push(G)}if(e&&this._caps.depthTextureExtension){var L=new f.a(this,f.b.MultiRenderTarget);u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,L._hardwareTexture.underlyingResource),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,this.webGLVersion<2?u.DEPTH_COMPONENT:u.DEPTH_COMPONENT16,R,P,0,u.DEPTH_COMPONENT,u.UNSIGNED_SHORT,null),u.framebufferTexture2D(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.TEXTURE_2D,L._hardwareTexture.underlyingResource,0),L._framebuffer=g,L.baseWidth=R,L.baseHeight=P,L.width=R,L.height=P,L.isReady=!0,L.samples=1,L.generateMipMaps=p,L.samplingMode=u.NEAREST,L._generateDepthBuffer=i,L._generateStencilBuffer=t,A.push(L),this._internalTexturesCache.push(L)}return T&&u.drawBuffers(C),this._bindUnboundFramebuffer(null),this.resetTextureCache(),A},b.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(E,d,T){if(T===void 0&&(T=!0),this.webGLVersion<2||!E)return 1;if(E[0].samples===d)return d;var p=E[0]._attachments.length;if(p===0)return 1;var i=this._gl;d=Math.min(d,this.getCaps().maxMSAASamples),E[0]._depthStencilBuffer&&(i.deleteRenderbuffer(E[0]._depthStencilBuffer),E[0]._depthStencilBuffer=null),E[0]._MSAAFramebuffer&&(i.deleteFramebuffer(E[0]._MSAAFramebuffer),E[0]._MSAAFramebuffer=null);for(var t=0;t<p;t++)E[t]._MSAARenderBuffer&&(i.deleteRenderbuffer(E[t]._MSAARenderBuffer),E[t]._MSAARenderBuffer=null);if(d>1&&i.renderbufferStorageMultisample){var e=i.createFramebuffer();if(!e)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(e);for(var n=this._setupFramebufferDepthAttachments(E[0]._generateStencilBuffer,E[0]._generateDepthBuffer,E[0].width,E[0].height,d),r=[],t=0;t<p;t++){var a=E[t],l=i[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],h=i.createRenderbuffer();if(!h)throw new Error("Unable to create multi sampled framebuffer");i.bindRenderbuffer(i.RENDERBUFFER,h),i.renderbufferStorageMultisample(i.RENDERBUFFER,d,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,l,i.RENDERBUFFER,h),a._MSAAFramebuffer=e,a._MSAARenderBuffer=h,a.samples=d,a._depthStencilBuffer=n,i.bindRenderbuffer(i.RENDERBUFFER,null),r.push(l)}T&&i.drawBuffers(r)}else this._bindUnboundFramebuffer(E[0]._framebuffer);return this._bindUnboundFramebuffer(null),d}},576:function($,H,o){"use strict";o.d(H,"a",function(){return d});var f=o(451),s=o(452),b=o(516),E=o(468);E.a.AddParser(s.a.NAME_EFFECTLAYER,function(T,p,i,t){if(T.effectLayers){i.effectLayers||(i.effectLayers=new Array);for(var e=0;e<T.effectLayers.length;e++){var n=b.a.Parse(T.effectLayers[e],p,t);i.effectLayers.push(n)}}}),E.a.prototype.removeEffectLayer=function(T){var p=this.effectLayers.indexOf(T);return p!==-1&&this.effectLayers.splice(p,1),p},E.a.prototype.addEffectLayer=function(T){this.effectLayers.push(T)};var d=function(){function T(p){this.name=s.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=p,this._engine=p.getEngine(),p.effectLayers=new Array}return T.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(s.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(s.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(s.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},T.prototype.rebuild=function(){for(var p=this.scene.effectLayers,i=0,t=p;i<t.length;i++){var e=t[i];e._rebuild()}},T.prototype.serialize=function(p){p.effectLayers=[];for(var i=this.scene.effectLayers,t=0,e=i;t<e.length;t++){var n=e[t];n.serialize&&p.effectLayers.push(n.serialize())}},T.prototype.addFromContainer=function(p){var i=this;!p.effectLayers||p.effectLayers.forEach(function(t){i.scene.addEffectLayer(t)})},T.prototype.removeFromContainer=function(p,i){var t=this;!p.effectLayers||p.effectLayers.forEach(function(e){t.scene.removeEffectLayer(e),i&&e.dispose()})},T.prototype.dispose=function(){for(var p=this.scene.effectLayers;p.length;)p[0].dispose()},T.prototype._isReadyForMesh=function(p,i){for(var t=this.scene.effectLayers,e=0,n=t;e<n.length;e++){var r=n[e];if(!!r.hasMesh(p))for(var a=0,l=p.subMeshes;a<l.length;a++){var h=l[a];if(!r.isReady(h,i))return!1}}return!0},T.prototype._renderMainTexture=function(p){this._renderEffects=!1,this._needStencil=!1;var i=!1,t=this.scene.effectLayers;if(t&&t.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var e=0,n=t;e<n.length;e++){var r=n[e];if(r.shouldRender()&&(!r.camera||r.camera.cameraRigMode===f.a.RIG_MODE_NONE&&p===r.camera||r.camera.cameraRigMode!==f.a.RIG_MODE_NONE&&r.camera._rigCameras.indexOf(p)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||r.needStencil();var a=r._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),i=!0)}}this.scene.incrementRenderId()}return i},T.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},T.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},T.prototype._draw=function(p){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var i=this.scene.effectLayers,t=0;t<i.length;t++){var e=i[t];e.renderingGroupId===p&&e.shouldRender()&&e.render()}this._engine.setDepthBuffer(!0)}},T.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},T.prototype._drawRenderingGroup=function(p){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(p)},T}();b.a._SceneComponentInitialization=function(T){var p=T._getComponent(s.a.NAME_EFFECTLAYER);p||(p=new d(T),T._addComponent(p))}},577:function($,H,o){"use strict";o.d(H,"a",function(){return g});var f=o(434),s=o(439),b=o(436),E=o(447),d=o(442),T=o(458),p=o(459),i=o(472),t=o(516),e=o(468),n=o(437),r=o(445),a=o(441),l=o(646),h=o(647),u=o(576);e.a.prototype.getGlowLayerByName=function(R){for(var P=0;P<this.effectLayers.length;P++)if(this.effectLayers[P].name===R&&this.effectLayers[P].getEffectName()===g.EffectName)return this.effectLayers[P];return null};var g=function(R){Object(f.d)(P,R);function P(A,C,x){var I=R.call(this,A,C)||this;return I._intensity=1,I._includedOnlyMeshes=[],I._excludedMeshes=[],I._meshesUsingTheirOwnMaterials=[],I.neutralColor=new a.b(0,0,0,1),I._options=Object(f.a)({mainTextureRatio:P.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},x),I._init({alphaBlendingMode:1,camera:I._options.camera,mainTextureFixedSize:I._options.mainTextureFixedSize,mainTextureRatio:I._options.mainTextureRatio,renderingGroupId:I._options.renderingGroupId}),I}return Object.defineProperty(P.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(A){this._horizontalBlurPostprocess1.kernel=A,this._verticalBlurPostprocess1.kernel=A,this._horizontalBlurPostprocess2.kernel=A,this._verticalBlurPostprocess2.kernel=A},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"intensity",{get:function(){return this._intensity},set:function(A){this._intensity=A},enumerable:!1,configurable:!0}),P.prototype.getEffectName=function(){return P.EffectName},P.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[E.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},P.prototype._createTextureAndPostProcesses=function(){var A=this,C=this._mainTextureDesiredSize.width,x=this._mainTextureDesiredSize.height;C=this._engine.needPOTTextures?r.a.GetExponentOfTwo(C,this._maxSize):C,x=this._engine.needPOTTextures?r.a.GetExponentOfTwo(x,this._maxSize):x;var I=0;this._engine.getCaps().textureHalfFloatRender?I=2:I=0,this._blurTexture1=new T.a("GlowLayerBlurRTT",{width:C,height:x},this._scene,!1,!0,I),this._blurTexture1.wrapU=d.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=d.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(d.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var F=Math.floor(C/2),y=Math.floor(x/2);this._blurTexture2=new T.a("GlowLayerBlurRTT2",{width:F,height:y},this._scene,!1,!0,I),this._blurTexture2.wrapU=d.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=d.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(d.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new i.a("GlowLayerHBP1",new b.d(1,0),this._options.blurKernelSize/2,{width:C,height:x},null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,I),this._horizontalBlurPostprocess1.width=C,this._horizontalBlurPostprocess1.height=x,this._horizontalBlurPostprocess1.onApplyObservable.add(function(N){N.setTexture("textureSampler",A._mainTexture)}),this._verticalBlurPostprocess1=new i.a("GlowLayerVBP1",new b.d(0,1),this._options.blurKernelSize/2,{width:C,height:x},null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,I),this._horizontalBlurPostprocess2=new i.a("GlowLayerHBP2",new b.d(1,0),this._options.blurKernelSize/2,{width:F,height:y},null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,I),this._horizontalBlurPostprocess2.width=F,this._horizontalBlurPostprocess2.height=y,this._horizontalBlurPostprocess2.onApplyObservable.add(function(N){N.setTexture("textureSampler",A._blurTexture1)}),this._verticalBlurPostprocess2=new i.a("GlowLayerVBP2",new b.d(0,1),this._options.blurKernelSize/2,{width:F,height:y},null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,I),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var N=A._blurTexture1.getInternalTexture();if(N){A._scene.postProcessManager.directRender(A._postProcesses1,N,!0);var G=A._blurTexture2.getInternalTexture();G&&A._scene.postProcessManager.directRender(A._postProcesses2,G,!0),A._engine.unBindFramebuffer(G!=null?G:N,!0)}}),this._postProcesses.map(function(N){N.autoClear=!1})},P.prototype.isReady=function(A,C){var x=A.getMaterial(),I=A.getRenderingMesh();if(!x||!I)return!1;var F=x.emissiveTexture;return R.prototype._isReady.call(this,A,C,F)},P.prototype.needStencil=function(){return!1},P.prototype._canRenderMesh=function(A,C){return!0},P.prototype._internalRender=function(A){A.setTexture("textureSampler",this._blurTexture1),A.setTexture("textureSampler2",this._blurTexture2),A.setFloat("offset",this._intensity);var C=this._engine,x=C.getStencilBuffer();C.setStencilBuffer(!1),C.drawElementsType(p.a.TriangleFillMode,0,6),C.setStencilBuffer(x)},P.prototype._setEmissiveTextureAndColor=function(A,C,x){var I=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(A,C,x):x?(this._emissiveTextureAndColor.texture=x.emissiveTexture,this._emissiveTextureAndColor.texture&&(I=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(A,C,x,this._emissiveTextureAndColor.color):x.emissiveColor?this._emissiveTextureAndColor.color.set(x.emissiveColor.r*I,x.emissiveColor.g*I,x.emissiveColor.b*I,x.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},P.prototype._shouldRenderMesh=function(A){return this.hasMesh(A)},P.prototype._addCustomEffectDefines=function(A){A.push("#define GLOW")},P.prototype.addExcludedMesh=function(A){this._excludedMeshes.indexOf(A.uniqueId)===-1&&this._excludedMeshes.push(A.uniqueId)},P.prototype.removeExcludedMesh=function(A){var C=this._excludedMeshes.indexOf(A.uniqueId);C!==-1&&this._excludedMeshes.splice(C,1)},P.prototype.addIncludedOnlyMesh=function(A){this._includedOnlyMeshes.indexOf(A.uniqueId)===-1&&this._includedOnlyMeshes.push(A.uniqueId)},P.prototype.removeIncludedOnlyMesh=function(A){var C=this._includedOnlyMeshes.indexOf(A.uniqueId);C!==-1&&this._includedOnlyMeshes.splice(C,1)},P.prototype.hasMesh=function(A){return R.prototype.hasMesh.call(this,A)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(A.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(A.uniqueId)===-1:!0:!1},P.prototype._useMeshMaterial=function(A){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId)>-1},P.prototype.referenceMeshToUseItsOwnMaterial=function(A){this._meshesUsingTheirOwnMaterials.push(A.uniqueId)},P.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(A){for(var C=this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId);C>=0;)this._meshesUsingTheirOwnMaterials.splice(C,1),C=this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId)},P.prototype._disposeMesh=function(A){this.removeIncludedOnlyMesh(A),this.removeExcludedMesh(A)},P.prototype.getClassName=function(){return"GlowLayer"},P.prototype.serialize=function(){var A=s.a.Serialize(this);A.customType="BABYLON.GlowLayer";var C;if(A.includedMeshes=[],this._includedOnlyMeshes.length)for(C=0;C<this._includedOnlyMeshes.length;C++){var x=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[C]);x&&A.includedMeshes.push(x.id)}if(A.excludedMeshes=[],this._excludedMeshes.length)for(C=0;C<this._excludedMeshes.length;C++){var x=this._scene.getMeshByUniqueID(this._excludedMeshes[C]);x&&A.excludedMeshes.push(x.id)}return A},P.Parse=function(A,C,x){var I=s.a.Parse(function(){return new P(A.name,C,A.options)},A,C,x),F;for(F=0;F<A.excludedMeshes.length;F++){var y=C.getMeshByID(A.excludedMeshes[F]);y&&I.addExcludedMesh(y)}for(F=0;F<A.includedMeshes.length;F++){var y=C.getMeshByID(A.includedMeshes[F]);y&&I.addIncludedOnlyMesh(y)}return I},P.EffectName="GlowLayer",P.DefaultBlurKernelSize=32,P.DefaultTextureRatio=.5,Object(f.c)([Object(s.c)()],P.prototype,"blurKernelSize",null),Object(f.c)([Object(s.c)()],P.prototype,"intensity",null),Object(f.c)([Object(s.c)("options")],P.prototype,"_options",void 0),P}(t.a);n.a.RegisteredTypes["BABYLON.GlowLayer"]=g},578:function($,H,o){"use strict";o.d(H,"a",function(){return i});var f=o(434),s=o(466),b=o(584),E=o(472),d=o(585),T=o(436),p=o(442),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,h,u){h===void 0&&(h=0),u===void 0&&(u=!1);var g=t.call(this,n.getEngine(),"bloom",function(){return g._effects},!0)||this;return g.bloomScale=r,g._effects=[],g._downscale=new b.a("highlights",1,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u),g._blurX=new E.a("horizontal blur",new T.d(1,0),10,r,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,void 0,u),g._blurX.alwaysForcePOT=!0,g._blurX.autoClear=!1,g._blurY=new E.a("vertical blur",new T.d(0,1),10,r,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,void 0,u),g._blurY.alwaysForcePOT=!0,g._blurY.autoClear=!1,g.kernel=l,g._effects=[g._downscale,g._blurX,g._blurY],g._merge=new d.a("bloomMerge",g._downscale,g._blurY,a,r,null,p.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u),g._merge.autoClear=!1,g._effects.push(g._merge),g}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(n){this._downscale.threshold=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._merge.weight},set:function(n){this._merge.weight=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(n){this._blurX.kernel=n*this.bloomScale,this._blurY.kernel=n*this.bloomScale},enumerable:!1,configurable:!0}),e.prototype.disposeEffects=function(n){for(var r=0;r<this._effects.length;r++)this._effects[r].dispose(n)},e.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},e.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},e}(s.a)},579:function($,H,o){"use strict";o.d(H,"a",function(){return p});var f=o(434),s=o(436),b=o(444),E=o(600),d=o(437),T=o(439),p=function(i){Object(f.d)(t,i);function t(e,n,r,a,l,h,u,g,R,P){R===void 0&&(R=0),P===void 0&&(P=!1);var A=i.call(this,e,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,l,h,u,g,null,R,void 0,null,P)||this;return A.aberrationAmount=30,A.radialIntensity=0,A.direction=new s.d(.707,.707),A.centerPosition=new s.d(.5,.5),A.screenWidth=n,A.screenHeight=r,A.onApplyObservable.add(function(C){C.setFloat("chromatic_aberration",A.aberrationAmount),C.setFloat("screen_width",n),C.setFloat("screen_height",r),C.setFloat("radialIntensity",A.radialIntensity),C.setFloat2("direction",A.direction.x,A.direction.y),C.setFloat2("centerPosition",A.centerPosition.x,A.centerPosition.y)}),A}return t.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},t._Parse=function(e,n,r,a){return T.a.Parse(function(){return new t(e.name,e.screenWidth,e.screenHeight,e.options,n,e.renderTargetSamplingMode,r.getEngine(),e.reusable,e.textureType,!1)},e,r,a)},Object(f.c)([Object(T.c)()],t.prototype,"aberrationAmount",void 0),Object(f.c)([Object(T.c)()],t.prototype,"radialIntensity",void 0),Object(f.c)([Object(T.c)()],t.prototype,"direction",void 0),Object(f.c)([Object(T.c)()],t.prototype,"centerPosition",void 0),Object(f.c)([Object(T.c)()],t.prototype,"screenWidth",void 0),Object(f.c)([Object(T.c)()],t.prototype,"screenHeight",void 0),t}(b.a);d.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=p},580:function($,H,o){"use strict";o.d(H,"a",function(){return T});var f=o(434),s=o(442),b=o(472),E=o(437),d=o(439),T=function(p){Object(f.d)(i,p);function i(t,e,n,r,a,l,h,u,g,R,P,A,C){u===void 0&&(u=null),g===void 0&&(g=s.a.BILINEAR_SAMPLINGMODE),A===void 0&&(A=0),C===void 0&&(C=!1);var x=p.call(this,t,n,r,a,l,g=2,R,P,A=0,`#define DOF 1\r
`,C)||this;return x.direction=n,x.onApplyObservable.add(function(I){u!=null&&I.setTextureFromPostProcess("textureSampler",u),I.setTextureFromPostProcessOutput("circleOfConfusionSampler",h),e.activeCamera&&I.setFloat2("cameraMinMaxZ",e.activeCamera.minZ,e.activeCamera.maxZ)}),x}return i.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(f.c)([Object(d.c)()],i.prototype,"direction",void 0),i}(b.a);E.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=T},581:function($,H,o){"use strict";o.d(H,"a",function(){return n});var f=o(434),s=o(444),b=o(502),E=o(439),d=function(){function r(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return r}(),T=o(435),p="screenSpaceReflectionPixelShader",i=`

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
`;T.a.ShadersStore[p]=i;var t={name:p,shader:i},e=o(437),n=function(r){Object(f.d)(a,r);function a(l,h,u,g,R,P,A,C,x,I){C===void 0&&(C=0),x===void 0&&(x=!1),I===void 0&&(I=!1);var F=r.call(this,l,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],u,g,R,P,A,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,C,void 0,null,x)||this;if(F.threshold=1.2,F.strength=1,F.reflectionSpecularFalloffExponent=3,F.step=1,F.roughnessFactor=.2,F._forceGeometryBuffer=!1,F._enableSmoothReflections=!1,F._reflectionSamples=64,F._smoothSteps=5,F._forceGeometryBuffer=I,F._forceGeometryBuffer){var y=h.enableGeometryBufferRenderer();y&&y.isSupported&&(y.enablePosition=!0,y.enableReflectivity=!0,F._geometryBufferRenderer=y)}else F._prePassRenderer=h.enablePrePassRenderer(),F._prePassRenderer.markAsDirty(),F._prePassEffectConfiguration=new d;return F._updateEffectDefines(),F.onApply=function(N){var G=F._geometryBufferRenderer,V=F._prePassRenderer;if(!(!V&&!G)){if(G){var L=G.getTextureIndex(b.a.POSITION_TEXTURE_TYPE),ne=G.getTextureIndex(b.a.REFLECTIVITY_TEXTURE_TYPE);N.setTexture("normalSampler",G.getGBuffer().textures[1]),N.setTexture("positionSampler",G.getGBuffer().textures[L]),N.setTexture("reflectivitySampler",G.getGBuffer().textures[ne])}else{var L=V.getIndex(1),ne=V.getIndex(3),K=V.getIndex(6);N.setTexture("normalSampler",V.getRenderTarget().textures[K]),N.setTexture("positionSampler",V.getRenderTarget().textures[L]),N.setTexture("reflectivitySampler",V.getRenderTarget().textures[ne])}var B=h.activeCamera;if(!!B){var J=B.getViewMatrix(!0),k=B.getProjectionMatrix(!0);N.setMatrix("projection",k),N.setMatrix("view",J),N.setFloat("threshold",F.threshold),N.setFloat("reflectionSpecularFalloffExponent",F.reflectionSpecularFalloffExponent),N.setFloat("strength",F.strength),N.setFloat("step",F.step),N.setFloat("roughnessFactor",F.roughnessFactor)}}},F}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(l){l!==this._enableSmoothReflections&&(this._enableSmoothReflections=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(l){l!==this._reflectionSamples&&(this._reflectionSamples=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(l){l!==this._smoothSteps&&(this._smoothSteps=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var l=[];(this._geometryBufferRenderer||this._prePassRenderer)&&l.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&l.push("#define ENABLE_SMOOTH_REFLECTIONS"),l.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),l.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(l.join(`
`))},a._Parse=function(l,h,u,g){return E.a.Parse(function(){return new a(l.name,u,l.options,h,l.renderTargetSamplingMode,u.getEngine(),l.textureType,l.reusable)},l,u,g)},Object(f.c)([Object(E.c)()],a.prototype,"threshold",void 0),Object(f.c)([Object(E.c)()],a.prototype,"strength",void 0),Object(f.c)([Object(E.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(f.c)([Object(E.c)()],a.prototype,"step",void 0),Object(f.c)([Object(E.c)()],a.prototype,"roughnessFactor",void 0),Object(f.c)([Object(E.c)()],a.prototype,"enableSmoothReflections",null),Object(f.c)([Object(E.c)()],a.prototype,"reflectionSamples",null),Object(f.c)([Object(E.c)()],a.prototype,"smoothSteps",null),a}(s.a);e.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=n},582:function($,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(434),s=o(444),b=o(440),E=o(435),d="circleOfConfusionPixelShader",T=`
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
`;E.a.ShadersStore[d]=T;var p={name:d,shader:T},i=o(437),t=o(439),e=function(n){Object(f.d)(r,n);function r(a,l,h,u,g,R,P,A,C){A===void 0&&(A=0),C===void 0&&(C=!1);var x=n.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],h,u,g,R,P,null,A,void 0,null,C)||this;return x.lensSize=50,x.fStop=1.4,x.focusDistance=2e3,x.focalLength=50,x._depthTexture=null,x._depthTexture=l,x.onApplyObservable.add(function(I){if(!x._depthTexture){b.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}I.setTexture("depthSampler",x._depthTexture);var F=x.lensSize/x.fStop,y=F*x.focalLength/(x.focusDistance-x.focalLength);I.setFloat("focusDistance",x.focusDistance),I.setFloat("cocPrecalculation",y),I.setFloat2("cameraMinMaxZ",x._depthTexture.activeCamera.minZ,x._depthTexture.activeCamera.maxZ)}),x}return r.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(r.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(f.c)([Object(t.c)()],r.prototype,"lensSize",void 0),Object(f.c)([Object(t.c)()],r.prototype,"fStop",void 0),Object(f.c)([Object(t.c)()],r.prototype,"focusDistance",void 0),Object(f.c)([Object(t.c)()],r.prototype,"focalLength",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=e},583:function($,H,o){"use strict";o.d(H,"b",function(){return p}),o.d(H,"a",function(){return i});var f=o(434),s=o(444),b=o(435),E="depthOfFieldMergePixelShader",d=`uniform sampler2D textureSampler;
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
`;b.a.ShadersStore[E]=d;var T={name:E,shader:d},p=function(){function t(){}return t}(),i=function(t){Object(f.d)(e,t);function e(n,r,a,l,h,u,g,R,P,A,C){A===void 0&&(A=0),C===void 0&&(C=!1);var x=t.call(this,n,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],h,u,g,R,P,null,A,void 0,null,!0)||this;return x.blurSteps=l,x.onApplyObservable.add(function(I){I.setTextureFromPostProcess("textureSampler",r),I.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),l.forEach(function(F,y){I.setTextureFromPostProcessOutput("blurStep"+(l.length-y-1),F)})}),C||x.updateEffect(),x}return e.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},e.prototype.updateEffect=function(n,r,a,l,h,u){n===void 0&&(n=null),r===void 0&&(r=null),a===void 0&&(a=null),n||(n="",n+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),t.prototype.updateEffect.call(this,n,r,a,l,h,u)},e}(s.a)},584:function($,H,o){"use strict";o.d(H,"a",function(){return n});var f=o(434),s=o(444),b=o(515),E=o(435),d=o(457),T="extractHighlightsPixelShader",p=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;E.a.ShadersStore[T]=p;var i={name:T,shader:p},t=o(439),e=o(437),n=function(r){Object(f.d)(a,r);function a(l,h,u,g,R,P,A,C){A===void 0&&(A=0),C===void 0&&(C=!1);var x=r.call(this,l,"extractHighlights",["threshold","exposure"],null,h,u,g,R,P,null,A,void 0,null,C)||this;return x.threshold=.9,x._exposure=1,x._inputPostProcess=null,x.onApplyObservable.add(function(I){x._inputPostProcess&&I.setTextureFromPostProcess("textureSampler",x._inputPostProcess),I.setFloat("threshold",Math.pow(x.threshold,b.b)),I.setFloat("exposure",x._exposure)}),x}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(f.c)([Object(t.c)()],a.prototype,"threshold",void 0),a}(s.a);e.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=n},585:function($,H,o){"use strict";o.d(H,"a",function(){return t});var f=o(434),s=o(444),b=o(435),E="bloomMergePixelShader",d=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;b.a.ShadersStore[E]=d;var T={name:E,shader:d},p=o(437),i=o(439),t=function(e){Object(f.d)(n,e);function n(r,a,l,h,u,g,R,P,A,C,x){C===void 0&&(C=0),x===void 0&&(x=!1);var I=e.call(this,r,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],u,g,R,P,A,null,C,void 0,null,!0)||this;return I.weight=1,I.weight=h,I.onApplyObservable.add(function(F){F.setTextureFromPostProcess("textureSampler",a),F.setTextureFromPostProcessOutput("bloomBlur",l),F.setFloat("bloomWeight",I.weight)}),x||I.updateEffect(),I}return n.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(f.c)([Object(i.c)()],n.prototype,"weight",void 0),n}(s.a);p.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=t},586:function($,H,o){"use strict";o.d(H,"a",function(){return e});var f=o(434),s=o(444),b=o(435),E=o(457),d="grainPixelShader",T=`#include<helperFunctions>

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
}`;b.a.ShadersStore[d]=T;var p={name:d,shader:T},i=o(437),t=o(439),e=function(n){Object(f.d)(r,n);function r(a,l,h,u,g,R,P,A){P===void 0&&(P=0),A===void 0&&(A=!1);var C=n.call(this,a,"grain",["intensity","animatedSeed"],[],l,h,u,g,R,null,P,void 0,null,A)||this;return C.intensity=30,C.animated=!1,C.onApplyObservable.add(function(x){x.setFloat("intensity",C.intensity),x.setFloat("animatedSeed",C.animated?Math.random()+1:1)}),C}return r.prototype.getClassName=function(){return"GrainPostProcess"},r._Parse=function(a,l,h,u){return t.a.Parse(function(){return new r(a.name,a.options,l,a.renderTargetSamplingMode,h.getEngine(),a.reusable)},a,h,u)},Object(f.c)([Object(t.c)()],r.prototype,"intensity",void 0),Object(f.c)([Object(t.c)()],r.prototype,"animated",void 0),r}(s.a);i.a.RegisteredTypes["BABYLON.GrainPostProcess"]=e},587:function($,H,o){"use strict";o.d(H,"a",function(){return t});var f=o(434),s=o(444),b=o(435),E="sharpenPixelShader",d=`
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
}`;b.a.ShadersStore[E]=d;var T={name:E,shader:d},p=o(437),i=o(439),t=function(e){Object(f.d)(n,e);function n(r,a,l,h,u,g,R,P){R===void 0&&(R=0),P===void 0&&(P=!1);var A=e.call(this,r,"sharpen",["sharpnessAmounts","screenSize"],null,a,l,h,u,g,null,R,void 0,null,P)||this;return A.colorAmount=1,A.edgeAmount=.3,A.onApply=function(C){C.setFloat2("screenSize",A.width,A.height),C.setFloat2("sharpnessAmounts",A.edgeAmount,A.colorAmount)},A}return n.prototype.getClassName=function(){return"SharpenPostProcess"},n._Parse=function(r,a,l,h){return i.a.Parse(function(){return new n(r.name,r.options,a,r.renderTargetSamplingMode,l.getEngine(),r.textureType,r.reusable)},r,l,h)},Object(f.c)([Object(i.c)()],n.prototype,"colorAmount",void 0),Object(f.c)([Object(i.c)()],n.prototype,"edgeAmount",void 0),n}(s.a);p.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=t},594:function($,H,o){"use strict";o.d(H,"a",function(){return C});var f=o(434),s=o(440),b=o(439),E=o(436),d=o(451),T=o(442),p=o(479),i=o(444),t=o(481),e=o(466),n=o(486),r=o(437),a=o(448),l=function(){function x(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return x}(),h=o(482),u=o(435),g="ssao2PixelShader",R=`
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
`;u.a.ShadersStore[g]=R;var P={name:g,shader:R},A=o(601),C=function(x){Object(f.d)(I,x);function I(F,y,N,G,V){V===void 0&&(V=!1);var L=x.call(this,y.getEngine(),F)||this;if(L.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",L.SSAORenderEffect="SSAORenderEffect",L.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",L.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",L.SSAOCombineRenderEffect="SSAOCombineRenderEffect",L.totalStrength=1,L.maxZ=100,L.minZAspect=.2,L._samples=8,L._textureSamples=1,L._forceGeometryBuffer=!1,L._expensiveBlur=!0,L.radius=2,L.base=0,L._bits=new Uint32Array(1),L._scene=y,L._ratio=N,L._forceGeometryBuffer=V,!L.isSupported)return s.a.Error("The current engine does not support SSAO 2."),L;var ne=L._ratio.ssaoRatio||N,K=L._ratio.blurRatio||N;return L._forceGeometryBuffer?y.enableGeometryBufferRenderer():L._prePassRenderer=y.enablePrePassRenderer(),L._createRandomTexture(),L._originalColorPostProcess=new n.b("SSAOOriginalSceneColor",1,null,T.a.BILINEAR_SAMPLINGMODE,y.getEngine(),!1),L._originalColorPostProcess.samples=L.textureSamples,L._createSSAOPostProcess(1),L._createBlurPostProcess(ne,K),L._createSSAOCombinePostProcess(K),L.addEffect(new e.a(y.getEngine(),L.SSAOOriginalSceneColorEffect,function(){return L._originalColorPostProcess},!0)),L.addEffect(new e.a(y.getEngine(),L.SSAORenderEffect,function(){return L._ssaoPostProcess},!0)),L.addEffect(new e.a(y.getEngine(),L.SSAOBlurHRenderEffect,function(){return L._blurHPostProcess},!0)),L.addEffect(new e.a(y.getEngine(),L.SSAOBlurVRenderEffect,function(){return L._blurVPostProcess},!0)),L.addEffect(new e.a(y.getEngine(),L.SSAOCombineRenderEffect,function(){return L._ssaoCombinePostProcess},!0)),y.postProcessRenderPipelineManager.addPipeline(L),G&&y.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(F,G),L}return Object.defineProperty(I.prototype,"samples",{get:function(){return this._samples},set:function(F){this._samples=F,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(F){this._textureSamples=F,this._prePassRenderer?this._prePassRenderer.samples=F:this._originalColorPostProcess.samples=F},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(F){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(F?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(F?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=F},enumerable:!1,configurable:!0}),Object.defineProperty(I,"IsSupported",{get:function(){var F=a.a.LastCreatedEngine;return F?F._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(I.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),I.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},I.prototype.dispose=function(F){F===void 0&&(F=!1);for(var y=0;y<this._scene.cameras.length;y++){var N=this._scene.cameras[y];this._originalColorPostProcess.dispose(N),this._ssaoPostProcess.dispose(N),this._blurHPostProcess.dispose(N),this._blurVPostProcess.dispose(N),this._ssaoCombinePostProcess.dispose(N)}this._randomTexture.dispose(),F&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),x.prototype.dispose.call(this)},I.prototype._createBlurPostProcess=function(F,y){var N=this;this._samplerOffsets=[];for(var G=this.expensiveBlur,V=-8;V<8;V++)this._samplerOffsets.push(V*2+.5);this._blurHPostProcess=new i.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],F,null,T.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(G?"1":"0")+`
`),this._blurHPostProcess.onApply=function(L){!N._scene.activeCamera||(L.setFloat("outSize",N._ssaoCombinePostProcess.width>0?N._ssaoCombinePostProcess.width:N._originalColorPostProcess.width),L.setFloat("near",N._scene.activeCamera.minZ),L.setFloat("far",N._scene.activeCamera.maxZ),L.setFloat("radius",N.radius),N._forceGeometryBuffer?L.setTexture("depthSampler",N._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):L.setTexture("depthSampler",N._prePassRenderer.getRenderTarget().textures[N._prePassRenderer.getIndex(5)]),L.setArray("samplerOffsets",N._samplerOffsets))},this._blurVPostProcess=new i.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],y,null,T.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(G?"1":"0")+`
`),this._blurVPostProcess.onApply=function(L){!N._scene.activeCamera||(L.setFloat("outSize",N._ssaoCombinePostProcess.height>0?N._ssaoCombinePostProcess.height:N._originalColorPostProcess.height),L.setFloat("near",N._scene.activeCamera.minZ),L.setFloat("far",N._scene.activeCamera.maxZ),L.setFloat("radius",N.radius),N._forceGeometryBuffer?L.setTexture("depthSampler",N._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):L.setTexture("depthSampler",N._prePassRenderer.getRenderTarget().textures[N._prePassRenderer.getIndex(5)]),L.setArray("samplerOffsets",N._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},I.prototype._rebuild=function(){x.prototype._rebuild.call(this)},I.prototype._radicalInverse_VdC=function(F){return this._bits[0]=F,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},I.prototype._hammersley=function(F,y){return[F/y,this._radicalInverse_VdC(F)]},I.prototype._hemisphereSample_uniform=function(F,y){var N=y*2*Math.PI,G=1-(F*.85+.15),V=Math.sqrt(1-G*G);return new E.e(Math.cos(N)*V,Math.sin(N)*V,G)},I.prototype._generateHemisphere=function(){for(var F=this.samples,y=[],N,G=0;G<F;){if(F<16)N=this._hemisphereSample_uniform(Math.random(),Math.random());else{var V=this._hammersley(G,F);N=this._hemisphereSample_uniform(V[0],V[1])}y.push(N.x,N.y,N.z),G++}return y},I.prototype._getDefinesForSSAO=function(){var F="#define SAMPLES "+this.samples+`
#define SSAO`;return F},I.prototype._createSSAOPostProcess=function(F){var y=this;this._sampleSphere=this._generateHemisphere();var N=this._getDefinesForSSAO(),G=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new i.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],G,F,null,T.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,N),this._ssaoPostProcess.onApply=function(V){var L,ne,K,B;if(!!y._scene.activeCamera){if(V.setArray3("sampleSphere",y._sampleSphere),V.setFloat("randTextureTiles",32),V.setFloat("samplesFactor",1/y.samples),V.setFloat("totalStrength",y.totalStrength),V.setFloat2("texelSize",1/y._ssaoPostProcess.width,1/y._ssaoPostProcess.height),V.setFloat("radius",y.radius),V.setFloat("maxZ",y.maxZ),V.setFloat("minZAspect",y.minZAspect),V.setFloat("base",y.base),V.setFloat("near",y._scene.activeCamera.minZ),V.setFloat("far",y._scene.activeCamera.maxZ),y._scene.activeCamera.mode===d.a.PERSPECTIVE_CAMERA)V.setMatrix3x3("depthProjection",I.PERSPECTIVE_DEPTH_PROJECTION),V.setFloat("xViewport",Math.tan(y._scene.activeCamera.fov/2)*y._scene.getEngine().getAspectRatio(y._scene.activeCamera,!0)),V.setFloat("yViewport",Math.tan(y._scene.activeCamera.fov/2));else{var J=y._scene.getEngine().getRenderWidth()/2,k=y._scene.getEngine().getRenderHeight()/2,le=(L=y._scene.activeCamera.orthoLeft)!==null&&L!==void 0?L:-J,j=(ne=y._scene.activeCamera.orthoRight)!==null&&ne!==void 0?ne:J,de=(K=y._scene.activeCamera.orthoBottom)!==null&&K!==void 0?K:-k,q=(B=y._scene.activeCamera.orthoTop)!==null&&B!==void 0?B:k;V.setMatrix3x3("depthProjection",I.ORTHO_DEPTH_PROJECTION),V.setFloat("xViewport",(j-le)*.5),V.setFloat("yViewport",(q-de)*.5)}V.setMatrix("projection",y._scene.getProjectionMatrix()),y._forceGeometryBuffer?(V.setTexture("depthSampler",y._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),V.setTexture("normalSampler",y._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(V.setTexture("depthSampler",y._prePassRenderer.getRenderTarget().textures[y._prePassRenderer.getIndex(5)]),V.setTexture("normalSampler",y._prePassRenderer.getRenderTarget().textures[y._prePassRenderer.getIndex(6)])),V.setTexture("randomSampler",y._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},I.prototype._createSSAOCombinePostProcess=function(F){var y=this;this._ssaoCombinePostProcess=new i.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],F,null,T.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(N){var G=y._scene.activeCamera.viewport;N.setVector4("viewport",E.c.Vector4[0].copyFromFloats(G.x,G.y,G.width,G.height)),N.setTextureFromPostProcessOutput("originalColor",y._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new l)},I.prototype._createRandomTexture=function(){var F=128;this._randomTexture=new p.a("SSAORandomTexture",F,this._scene,!1,T.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=T.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=T.a.WRAP_ADDRESSMODE;for(var y=this._randomTexture.getContext(),N=function(ne,K){return Math.random()*(K-ne)+ne},G=E.e.Zero(),V=0;V<F;V++)for(var L=0;L<F;L++)G.x=N(0,1),G.y=N(0,1),G.z=0,G.normalize(),G.scaleInPlace(255),G.x=Math.floor(G.x),G.y=Math.floor(G.y),y.fillStyle="rgb("+G.x+", "+G.y+", "+G.z+")",y.fillRect(V,L,1,1);this._randomTexture.update(!1)},I.prototype.serialize=function(){var F=b.a.Serialize(this);return F.customType="SSAO2RenderingPipeline",F},I.Parse=function(F,y,N){return b.a.Parse(function(){return new I(F._name,y,F._ratio)},F,y,N)},I.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],I.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(f.c)([Object(b.c)()],I.prototype,"totalStrength",void 0),Object(f.c)([Object(b.c)()],I.prototype,"maxZ",void 0),Object(f.c)([Object(b.c)()],I.prototype,"minZAspect",void 0),Object(f.c)([Object(b.c)("samples")],I.prototype,"_samples",void 0),Object(f.c)([Object(b.c)("textureSamples")],I.prototype,"_textureSamples",void 0),Object(f.c)([Object(b.c)()],I.prototype,"_ratio",void 0),Object(f.c)([Object(b.c)("expensiveBlur")],I.prototype,"_expensiveBlur",void 0),Object(f.c)([Object(b.c)()],I.prototype,"radius",void 0),Object(f.c)([Object(b.c)()],I.prototype,"base",void 0),I}(t.a);r.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=C},598:function($,H,o){"use strict";o.d(H,"a",function(){return t});var f=o(434),s=o(538),b=o(518),E=function(e){Object(f.d)(n,e);function n(r,a,l,h,u,g){var R=e.call(this,r,l,h,u,g)||this;return R._beforeCompositionPostProcesses=[],R._internalTextureDirty=!1,R.enabled=!1,R.renderTargetTexture=null,R.renderTargetTexture=a,R}return n.prototype._createCompositionEffect=function(){this.imageProcessingPostProcess=new b.a("prePassComposition",1,null,void 0,this._engine),this.imageProcessingPostProcess._updateParameters()},n.prototype._checkSize=function(){var r=this._engine.getRenderWidth(!0),a=this._engine.getRenderHeight(!0),l=this.getRenderWidth(),h=this.getRenderHeight();(l!==r||h!==a)&&(this.resize({width:r,height:a}),this._internalTextureDirty=!0)},n.prototype.updateCount=function(r,a){e.prototype.updateCount.call(this,r,a),this._internalTextureDirty=!0},n.prototype._resetPostProcessChain=function(){this._beforeCompositionPostProcesses=[]},n.prototype.dispose=function(){var r=this._scene;if(e.prototype.dispose.call(this),r&&r.prePassRenderer){var a=r.prePassRenderer.renderTargets.indexOf(this);a!==-1&&r.prePassRenderer.renderTargets.splice(a,1)}this.imageProcessingPostProcess&&this.imageProcessingPostProcess.dispose()},n}(s.a),d=o(476),T=o(441),p=o(459),i=o(502),t=function(){function e(n){this.excludedSkinnedMesh=[],this.excludedMaterials=[],this.mrtCount=0,this._mrtFormats=[],this._mrtLayout=[],this._textureIndices=[],this._isDirty=!0,this._effectConfigurations=[],this.doNotUseGeometryRendererFallback=!1,this.renderTargets=[],this._clearColor=new T.b(0,0,0,0),this._enabled=!1,this._needsCompositionForThisPass=!1,this.disableGammaTransform=!1,this._scene=n,this._engine=n.getEngine(),e._SceneComponentInitialization(this._scene),this.defaultRT=this._createRenderTarget("sceneprePassRT",null),this._setRenderTarget(null)}return e.prototype.getIndex=function(n){return this._textureIndices[n]},Object.defineProperty(e.prototype,"samples",{get:function(){return this.defaultRT.samples},set:function(n){this.defaultRT.samples=n},enumerable:!1,configurable:!0}),e.prototype.getRenderTarget=function(){return this._currentTarget},e.prototype._setRenderTarget=function(n){n?this._currentTarget=n:this._currentTarget=this.defaultRT},Object.defineProperty(e.prototype,"currentRTisSceneRT",{get:function(){return this._currentTarget===this.defaultRT},enumerable:!1,configurable:!0}),e.prototype._refreshGeometryBufferRendererLink=function(){if(this.doNotUseGeometryRendererFallback)this._geometryBuffer&&this._geometryBuffer._unlinkPrePassRenderer(),this._geometryBuffer=null,this._scene.disableGeometryBufferRenderer();else{if(this._geometryBuffer=this._scene.enableGeometryBufferRenderer(),!this._geometryBuffer){this.doNotUseGeometryRendererFallback=!0;return}this._geometryBuffer._linkPrePassRenderer(this)}},Object.defineProperty(e.prototype,"enabled",{get:function(){return this._enabled},enumerable:!1,configurable:!0}),e.prototype._createRenderTarget=function(n,r){var a=new E(n,r,{width:this._engine.getRenderWidth(),height:this._engine.getRenderHeight()},0,this._scene,{generateMipMaps:!1,generateStencilBuffer:this._engine.isStencilEnable,defaultType:0,types:[],drawOnlyOnFirstAttachmentByDefault:!0});return this.renderTargets.push(a),a},Object.defineProperty(e.prototype,"isSupported",{get:function(){return this._scene.getEngine().getCaps().drawBuffersExtension},enumerable:!1,configurable:!0}),e.prototype.bindAttachmentsForEffect=function(n,r){if(this.enabled&&this._currentTarget.enabled){if(n._multiTarget)this._engine.bindAttachments(this._multiRenderAttachments);else if(this._engine.bindAttachments(this._defaultAttachments),this._geometryBuffer&&this.currentRTisSceneRT){var a=r.getMaterial();a&&!a.isPrePassCapable&&this.excludedMaterials.indexOf(a)===-1&&this._geometryBuffer.renderList.push(r.getRenderingMesh())}}},e.prototype._reinitializeAttachments=function(){for(var n=[],r=[!1],a=[!0],l=0;l<this.mrtCount;l++)n.push(!0),l>0&&(r.push(!0),a.push(!1));this._multiRenderAttachments=this._engine.buildTextureLayout(n),this._clearAttachments=this._engine.buildTextureLayout(r),this._defaultAttachments=this._engine.buildTextureLayout(a)},e.prototype._resetLayout=function(){for(var n=0;n<e._textureFormats.length;n++)this._textureIndices[e._textureFormats[n].type]=-1;this._textureIndices[4]=0,this._mrtLayout=[4],this._mrtFormats=[2],this.mrtCount=1},e.prototype._updateGeometryBufferLayout=function(){if(this._refreshGeometryBufferRendererLink(),this._geometryBuffer){this._geometryBuffer._resetLayout();for(var n=[],r=0;r<this._mrtLayout.length;r++)n.push(!1);this._geometryBuffer._linkInternalTexture(this.defaultRT.getInternalTexture());for(var a=[{prePassConstant:5,geometryBufferConstant:i.a.DEPTH_TEXTURE_TYPE},{prePassConstant:6,geometryBufferConstant:i.a.NORMAL_TEXTURE_TYPE},{prePassConstant:1,geometryBufferConstant:i.a.POSITION_TEXTURE_TYPE},{prePassConstant:3,geometryBufferConstant:i.a.REFLECTIVITY_TEXTURE_TYPE},{prePassConstant:2,geometryBufferConstant:i.a.VELOCITY_TEXTURE_TYPE}],r=0;r<a.length;r++){var l=this._mrtLayout.indexOf(a[r].prePassConstant);l!==-1&&(this._geometryBuffer._forceTextureType(a[r].geometryBufferConstant,l),n[l]=!0)}this._geometryBuffer._setAttachments(this._engine.buildTextureLayout(n))}},e.prototype.restoreAttachments=function(){this.enabled&&this._currentTarget.enabled&&this._defaultAttachments&&this._engine.bindAttachments(this._defaultAttachments)},e.prototype._beforeDraw=function(n,r,a){this._isDirty&&this._update(),!(!this._enabled||!this._currentTarget.enabled)&&(this._geometryBuffer&&(this._geometryBuffer.renderList=[]),this._setupOutputForThisPass(this._currentTarget,n))},e.prototype._prepareFrame=function(n,r,a){n.renderTargetTexture?n.renderTargetTexture._prepareFrame(this._scene,r,a,n.renderTargetTexture.useCameraPostProcesses):this._postProcessesSourceForThisPass.length?this._scene.postProcessManager._prepareFrame():this._engine.restoreDefaultFramebuffer()},e.prototype._renderPostProcesses=function(n,r){var a=this._postProcessesSourceForThisPass[0],l=a?a.inputTexture:n.renderTargetTexture?n.renderTargetTexture.getInternalTexture():null,h=this._currentTarget._beforeCompositionPostProcesses;this._needsCompositionForThisPass&&(h=h.concat([this._currentTarget.imageProcessingPostProcess])),h.length&&(this._scene.postProcessManager._prepareFrame(this._currentTarget.getInternalTexture(),h),this._scene.postProcessManager.directRender(h,l,!1,r))},e.prototype._afterDraw=function(n,r){this._enabled&&this._currentTarget.enabled&&(this._prepareFrame(this._currentTarget,n,r),this._renderPostProcesses(this._currentTarget,n))},e.prototype._clear=function(){this._enabled&&this._currentTarget.enabled&&(this._bindFrameBuffer(this._currentTarget),this._engine.bindAttachments(this._clearAttachments),this._engine.clear(this._clearColor,!0,!1,!1),this._engine.bindAttachments(this._defaultAttachments))},e.prototype._bindFrameBuffer=function(n){if(this._enabled&&this._currentTarget.enabled){this._currentTarget._checkSize();var r=this._currentTarget.getInternalTexture();r&&this._engine.bindFramebuffer(r)}},e.prototype._setEnabled=function(n){this._enabled=n},e.prototype._setRenderTargetEnabled=function(n,r){n.enabled=r},e.prototype.addEffectConfiguration=function(n){for(var r=0;r<this._effectConfigurations.length;r++)if(this._effectConfigurations[r].name===n.name)return this._effectConfigurations[r];return this._effectConfigurations.push(n),n},e.prototype._enable=function(){for(var n=this.mrtCount,r=0;r<this._effectConfigurations.length;r++)this._effectConfigurations[r].enabled&&this._enableTextures(this._effectConfigurations[r].texturesRequired);for(var r=0;r<this.renderTargets.length;r++){this.mrtCount!==n&&this.renderTargets[r].updateCount(this.mrtCount,{types:this._mrtFormats}),this.renderTargets[r]._resetPostProcessChain();for(var a=0;a<this._effectConfigurations.length;a++)this._effectConfigurations[a].enabled&&(!this._effectConfigurations[a].postProcess&&this._effectConfigurations[a].createPostProcess&&this._effectConfigurations[a].createPostProcess(),this._effectConfigurations[a].postProcess&&this.renderTargets[r]._beforeCompositionPostProcesses.push(this._effectConfigurations[a].postProcess))}this._reinitializeAttachments(),this._setEnabled(!0),this._updateGeometryBufferLayout()},e.prototype._disable=function(){this._setEnabled(!1);for(var n=0;n<this.renderTargets.length;n++)this._setRenderTargetEnabled(this.renderTargets[n],!1);this._resetLayout();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].enabled=!1},e.prototype._getPostProcessesSource=function(n,r){if(r)return r._postProcesses;if(n.renderTargetTexture)if(n.renderTargetTexture.useCameraPostProcesses){var a=n.renderTargetTexture.activeCamera?n.renderTargetTexture.activeCamera:this._scene.activeCamera;return a?a._postProcesses:[]}else return n.renderTargetTexture.postProcesses?n.renderTargetTexture.postProcesses:[];else return this._scene.activeCamera?this._scene.activeCamera._postProcesses:[]},e.prototype._setupOutputForThisPass=function(n,r){var a=r&&this._scene.activeCameras&&!!this._scene.activeCameras.length&&this._scene.activeCameras.indexOf(r)!==0;this._postProcessesSourceForThisPass=this._getPostProcessesSource(n,r),this._postProcessesSourceForThisPass=this._postProcessesSourceForThisPass.filter(function(R){return R!=null}),this._scene.autoClear=!0;var l=this._hasImageProcessing(this._postProcessesSourceForThisPass);this._needsCompositionForThisPass=!l&&!this.disableGammaTransform&&this._needsImageProcessing()&&!a;var h=this._getFirstPostProcess(this._postProcessesSourceForThisPass),u=n._beforeCompositionPostProcesses&&n._beforeCompositionPostProcesses[0],g=null;this._scene.imageProcessingConfiguration.applyByPostProcess=this._needsCompositionForThisPass||l,this._needsCompositionForThisPass&&!n.imageProcessingPostProcess&&n._createCompositionEffect(),u?g=u:this._needsCompositionForThisPass?g=n.imageProcessingPostProcess:h&&(g=h),this._bindFrameBuffer(n),this._linkInternalTexture(n,g)},e.prototype._linkInternalTexture=function(n,r){r&&(r.autoClear=!1,r.inputTexture=n.getInternalTexture()),n._outputPostProcess!==r&&(n._outputPostProcess&&n._outputPostProcess.restoreDefaultInputTexture(),n._outputPostProcess=r),n._internalTextureDirty&&(this._updateGeometryBufferLayout(),n._internalTextureDirty=!1)},e.prototype._needsImageProcessing=function(){for(var n=0;n<this._effectConfigurations.length;n++)if(this._effectConfigurations[n].enabled&&this._effectConfigurations[n].needsImageProcessing)return!0;return!1},e.prototype._hasImageProcessing=function(n){var r,a=!1;if(n){for(var l=0;l<n.length;l++)if(((r=n[l])===null||r===void 0?void 0:r.getClassName())==="ImageProcessingPostProcess"){a=!0;break}}return a},e.prototype._getFirstPostProcess=function(n){for(var r=0;r<n.length;r++)if(n[r]!==null)return n[r];return null},e.prototype.markAsDirty=function(){this._isDirty=!0},e.prototype._enableTextures=function(n){for(var r=0;r<n.length;r++){var a=n[r];this._textureIndices[a]===-1&&(this._textureIndices[a]=this._mrtLayout.length,this._mrtLayout.push(a),this._mrtFormats.push(e._textureFormats[a].format),this.mrtCount++)}},e.prototype._update=function(){this._disable();var n=!1;this._scene.imageProcessingConfiguration.applyByPostProcess=!1;for(var r=0;r<this._scene.materials.length;r++)this._scene.materials[r].setPrePassRenderer(this)&&(n=!0);n&&this._setRenderTargetEnabled(this.defaultRT,!0);for(var a,r=0;r<this.renderTargets.length;r++){if(this.renderTargets[r].renderTargetTexture)a=this._getPostProcessesSource(this.renderTargets[r]);else{var l=this._scene.activeCamera;if(!l)continue;a=l._postProcesses}if(!!a&&(a=a.filter(function(g){return g!=null}),a)){for(var h=0;h<a.length;h++)a[h].setPrePassRenderer(this)&&(this._setRenderTargetEnabled(this.renderTargets[r],!0),n=!0);this._hasImageProcessing(a)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!0)}}this._markAllMaterialsAsPrePassDirty(),this._isDirty=!1,n&&this._enable()},e.prototype._markAllMaterialsAsPrePassDirty=function(){for(var n=this._scene.materials,r=0;r<n.length;r++)n[r].markAsDirty(p.a.PrePassDirtyFlag)},e.prototype.dispose=function(){for(var n=this.renderTargets.length-1;n>=0;n--)this.renderTargets[n].dispose();for(var n=0;n<this._effectConfigurations.length;n++)this._effectConfigurations[n].dispose&&this._effectConfigurations[n].dispose()},e._SceneComponentInitialization=function(n){throw d.a.WarnImport("PrePassRendererSceneComponent")},e._textureFormats=[{type:0,format:2},{type:1,format:2},{type:2,format:2},{type:3,format:0},{type:4,format:2},{type:5,format:2},{type:6,format:2},{type:7,format:0}],e}()},600:function($,H,o){"use strict";var f=o(435),s="chromaticAberrationPixelShader",b=`
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
}`;f.a.ShadersStore[s]=b;var E={name:s,shader:b}},601:function($,H,o){"use strict";var f=o(435),s="ssaoCombinePixelShader",b=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;f.a.ShadersStore[s]=b;var E={name:s,shader:b}},602:function($,H,o){"use strict";o.d(H,"a",function(){return P}),o.d(H,"b",function(){return ne}),o.d(H,"g",function(){return K.a}),o.d(H,"h",function(){return re}),o.d(H,"i",function(){return Q}),o.d(H,"c",function(){return a.a}),o.d(H,"d",function(){return r.a}),o.d(H,"e",function(){return pe.a}),o.d(H,"f",function(){return R.a});var f=o(434),s=o(439),b=o(438),E=o(440),d=o(442),T=o(577),p=o(587),i=o(518),t=o(579),e=o(586),n=o(517),r=o(481),a=o(466),l=o(570),h=o(578),u=o(437),g=o(448),R=o(482),P=function(ie){Object(f.d)(M,ie);function M(v,D,O,Y,z){v===void 0&&(v=""),D===void 0&&(D=!0),O===void 0&&(O=g.a.LastCreatedScene),z===void 0&&(z=!0);var S=ie.call(this,O.getEngine(),v)||this;S._camerasToBeAttached=[],S.SharpenPostProcessId="SharpenPostProcessEffect",S.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",S.FxaaPostProcessId="FxaaPostProcessEffect",S.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",S.GrainPostProcessId="GrainPostProcessEffect",S._glowLayer=null,S.animations=[],S._imageProcessingConfigurationObserver=null,S._sharpenEnabled=!1,S._bloomEnabled=!1,S._depthOfFieldEnabled=!1,S._depthOfFieldBlurLevel=l.b.Low,S._fxaaEnabled=!1,S._imageProcessingEnabled=!0,S._bloomScale=.5,S._chromaticAberrationEnabled=!1,S._grainEnabled=!1,S._buildAllowed=!0,S.onBuildObservable=new b.c,S._resizeObserver=null,S._hardwareScaleLevel=1,S._bloomKernel=64,S._bloomWeight=.15,S._bloomThreshold=.9,S._samples=1,S._hasCleared=!1,S._prevPostProcess=null,S._prevPrevPostProcess=null,S._depthOfFieldSceneObserver=null,S._cameras=Y||O.cameras,S._cameras=S._cameras.slice(),S._camerasToBeAttached=S._cameras.slice(),S._buildAllowed=z,S._scene=O;var Z=S._scene.getEngine().getCaps();S._hdr=D&&(Z.textureHalfFloatRender||Z.textureFloatRender),S._hdr?Z.textureHalfFloatRender?S._defaultPipelineTextureType=2:Z.textureFloatRender&&(S._defaultPipelineTextureType=1):S._defaultPipelineTextureType=0,O.postProcessRenderPipelineManager.addPipeline(S);var ve=S._scene.getEngine();return S.sharpen=new p.a("sharpen",1,null,d.a.BILINEAR_SAMPLINGMODE,ve,!1,S._defaultPipelineTextureType,!0),S._sharpenEffect=new a.a(ve,S.SharpenPostProcessId,function(){return S.sharpen},!0),S.depthOfField=new l.a(S._scene,null,S._depthOfFieldBlurLevel,S._defaultPipelineTextureType,!0),S.bloom=new h.a(S._scene,S._bloomScale,S._bloomWeight,S.bloomKernel,S._defaultPipelineTextureType,!0),S.chromaticAberration=new t.a("ChromaticAberration",ve.getRenderWidth(),ve.getRenderHeight(),1,null,d.a.BILINEAR_SAMPLINGMODE,ve,!1,S._defaultPipelineTextureType,!0),S._chromaticAberrationEffect=new a.a(ve,S.ChromaticAberrationPostProcessId,function(){return S.chromaticAberration},!0),S.grain=new e.a("Grain",1,null,d.a.BILINEAR_SAMPLINGMODE,ve,!1,S._defaultPipelineTextureType,!0),S._grainEffect=new a.a(ve,S.GrainPostProcessId,function(){return S.grain},!0),S._resizeObserver=ve.onResizeObservable.add(function(){S._hardwareScaleLevel=ve.getHardwareScalingLevel(),S.bloomKernel=S.bloomKernel}),S._imageProcessingConfigurationObserver=S._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){S.bloom._downscale._exposure=S._scene.imageProcessingConfiguration.exposure,S.imageProcessingEnabled!==S._scene.imageProcessingConfiguration.isEnabled&&(S._imageProcessingEnabled=S._scene.imageProcessingConfiguration.isEnabled,S._buildPipeline())}),S._buildPipeline(),S}return Object.defineProperty(M.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(v){this._sharpenEnabled!==v&&(this._sharpenEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(v){this._bloomKernel=v,this.bloom.kernel=v/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(v){this._bloomWeight!==v&&(this.bloom.weight=v,this._bloomWeight=v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(v){this._bloomThreshold!==v&&(this.bloom.threshold=v,this._bloomThreshold=v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(v){this._bloomScale!==v&&(this._bloomScale=v,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(v){this._bloomEnabled!==v&&(this._bloomEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),M.prototype._rebuildBloom=function(){var v=this.bloom;this.bloom=new h.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=v.threshold;for(var D=0;D<this._cameras.length;D++)v.disposeEffects(this._cameras[D])},Object.defineProperty(M.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(v){this._depthOfFieldEnabled!==v&&(this._depthOfFieldEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(v){if(this._depthOfFieldBlurLevel!==v){this._depthOfFieldBlurLevel=v;var D=this.depthOfField;this.depthOfField=new l.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=D.focalLength,this.depthOfField.focusDistance=D.focusDistance,this.depthOfField.fStop=D.fStop,this.depthOfField.lensSize=D.lensSize;for(var O=0;O<this._cameras.length;O++)D.disposeEffects(this._cameras[O]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(v){this._fxaaEnabled!==v&&(this._fxaaEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"samples",{get:function(){return this._samples},set:function(v){this._samples!==v&&(this._samples=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(v){this._imageProcessingEnabled!==v&&(this._scene.imageProcessingConfiguration.isEnabled=v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(v){v&&!this._glowLayer?this._glowLayer=new T.a("",this._scene):!v&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(v){this._chromaticAberrationEnabled!==v&&(this._chromaticAberrationEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(v){this._grainEnabled!==v&&(this._grainEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),M.prototype.getClassName=function(){return"DefaultRenderingPipeline"},M.prototype.prepare=function(){var v=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=v},M.prototype._setAutoClearAndTextureSharing=function(v,D){D===void 0&&(D=!1),this._hasCleared?v.autoClear=!1:(v.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),D||(this._prevPrevPostProcess?v.shareOutputWith(this._prevPrevPostProcess):v.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=v)},M.prototype._buildPipeline=function(){var v=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var D=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var O=0,Y=this._cameras;O<Y.length;O++){var z=Y[O],S=this._scene.enableDepthRenderer(z);S.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(Z){v._cameras.indexOf(Z.activeCamera)>-1&&(v.depthOfField.depthTexture=Z.enableDepthRenderer(Z.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var S=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=S.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new i.a("imageProcessing",1,null,d.a.BILINEAR_SAMPLINGMODE,D,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(D,this.ImageProcessingPostProcessId,function(){return v.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new n.a("fxaa",1,null,d.a.BILINEAR_SAMPLINGMODE,D,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(D,this.FxaaPostProcessId,function(){return v.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&E.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},M.prototype._disposePostProcesses=function(v){v===void 0&&(v=!1);for(var D=0;D<this._cameras.length;D++){var O=this._cameras[D];this.imageProcessing&&this.imageProcessing.dispose(O),this.fxaa&&this.fxaa.dispose(O),v&&(this.sharpen&&this.sharpen.dispose(O),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(O)),this.bloom&&this.bloom.disposeEffects(O),this.chromaticAberration&&this.chromaticAberration.dispose(O),this.grain&&this.grain.dispose(O),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,v&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},M.prototype.addCamera=function(v){this._camerasToBeAttached.push(v),this._buildPipeline()},M.prototype.removeCamera=function(v){var D=this._camerasToBeAttached.indexOf(v);this._camerasToBeAttached.splice(D,1),this._buildPipeline()},M.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),ie.prototype.dispose.call(this)},M.prototype.serialize=function(){var v=s.a.Serialize(this);return v.customType="DefaultRenderingPipeline",v},M.Parse=function(v,D,O){return s.a.Parse(function(){return new M(v._name,v._name._hdr,D)},v,D,O)},Object(f.c)([Object(s.c)()],M.prototype,"sharpenEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"bloomKernel",null),Object(f.c)([Object(s.c)()],M.prototype,"_bloomWeight",void 0),Object(f.c)([Object(s.c)()],M.prototype,"_bloomThreshold",void 0),Object(f.c)([Object(s.c)()],M.prototype,"_hdr",void 0),Object(f.c)([Object(s.c)()],M.prototype,"bloomWeight",null),Object(f.c)([Object(s.c)()],M.prototype,"bloomThreshold",null),Object(f.c)([Object(s.c)()],M.prototype,"bloomScale",null),Object(f.c)([Object(s.c)()],M.prototype,"bloomEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"depthOfFieldEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"depthOfFieldBlurLevel",null),Object(f.c)([Object(s.c)()],M.prototype,"fxaaEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"samples",null),Object(f.c)([Object(s.c)()],M.prototype,"imageProcessingEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"glowLayerEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"chromaticAberrationEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"grainEnabled",null),M}(r.a);u.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=P;var A=o(479),C=o(444),x=o(600),I=o(435),F="lensHighlightsPixelShader",y=`
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

}`;I.a.ShadersStore[F]=y;var N={name:F,shader:y},G="depthOfFieldPixelShader",V=`




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
`;I.a.ShadersStore[G]=V;var L={name:G,shader:V},ne=function(ie){Object(f.d)(M,ie);function M(v,D,O,Y,z){Y===void 0&&(Y=1);var S=ie.call(this,O.getEngine(),v)||this;return S.LensChromaticAberrationEffect="LensChromaticAberrationEffect",S.HighlightsEnhancingEffect="HighlightsEnhancingEffect",S.LensDepthOfFieldEffect="LensDepthOfFieldEffect",S._pentagonBokehIsEnabled=!1,S._scene=O,S._depthTexture=O.enableDepthRenderer().getDepthMap(),D.grain_texture?S._grainTexture=D.grain_texture:S._createGrainTexture(),S._edgeBlur=D.edge_blur?D.edge_blur:0,S._grainAmount=D.grain_amount?D.grain_amount:0,S._chromaticAberration=D.chromatic_aberration?D.chromatic_aberration:0,S._distortion=D.distortion?D.distortion:0,S._highlightsGain=D.dof_gain!==void 0?D.dof_gain:-1,S._highlightsThreshold=D.dof_threshold?D.dof_threshold:1,S._dofDistance=D.dof_focus_distance!==void 0?D.dof_focus_distance:-1,S._dofAperture=D.dof_aperture?D.dof_aperture:1,S._dofDarken=D.dof_darken?D.dof_darken:0,S._dofPentagon=D.dof_pentagon!==void 0?D.dof_pentagon:!0,S._blurNoise=D.blur_noise!==void 0?D.blur_noise:!0,S._createChromaticAberrationPostProcess(Y),S._createHighlightsPostProcess(Y),S._createDepthOfFieldPostProcess(Y/4),S.addEffect(new a.a(O.getEngine(),S.LensChromaticAberrationEffect,function(){return S._chromaticAberrationPostProcess},!0)),S.addEffect(new a.a(O.getEngine(),S.HighlightsEnhancingEffect,function(){return S._highlightsPostProcess},!0)),S.addEffect(new a.a(O.getEngine(),S.LensDepthOfFieldEffect,function(){return S._depthOfFieldPostProcess},!0)),S._highlightsGain===-1&&S._disableEffect(S.HighlightsEnhancingEffect,null),O.postProcessRenderPipelineManager.addPipeline(S),z&&O.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(v,z),S}return M.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(M.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(v){this.setEdgeBlur(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(v){this.setGrainAmount(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(v){this.setChromaticAberration(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(v){this.setAperture(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(v){this.setEdgeDistortion(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(v){this.setFocusDistance(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(v){this.setDarkenOutOfFocus(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(v){this._blurNoise=v},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(v){v?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(v){this.setHighlightsGain(v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(v){this.setHighlightsThreshold(v)},enumerable:!1,configurable:!0}),M.prototype.setEdgeBlur=function(v){this._edgeBlur=v},M.prototype.disableEdgeBlur=function(){this._edgeBlur=0},M.prototype.setGrainAmount=function(v){this._grainAmount=v},M.prototype.disableGrain=function(){this._grainAmount=0},M.prototype.setChromaticAberration=function(v){this._chromaticAberration=v},M.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},M.prototype.setEdgeDistortion=function(v){this._distortion=v},M.prototype.disableEdgeDistortion=function(){this._distortion=0},M.prototype.setFocusDistance=function(v){this._dofDistance=v},M.prototype.disableDepthOfField=function(){this._dofDistance=-1},M.prototype.setAperture=function(v){this._dofAperture=v},M.prototype.setDarkenOutOfFocus=function(v){this._dofDarken=v},M.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},M.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},M.prototype.enableNoiseBlur=function(){this._blurNoise=!0},M.prototype.disableNoiseBlur=function(){this._blurNoise=!1},M.prototype.setHighlightsGain=function(v){this._highlightsGain=v},M.prototype.setHighlightsThreshold=function(v){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=v},M.prototype.disableHighlights=function(){this._highlightsGain=-1},M.prototype.dispose=function(v){v===void 0&&(v=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),v&&this._scene.disableDepthRenderer()},M.prototype._createChromaticAberrationPostProcess=function(v){var D=this;this._chromaticAberrationPostProcess=new C.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],v,null,d.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(O){O.setFloat("chromatic_aberration",D._chromaticAberration),O.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),O.setFloat("screen_height",D._scene.getEngine().getRenderHeight()),O.setFloat("radialIntensity",1),O.setFloat2("direction",17,17),O.setFloat2("centerPosition",.5,.5)}},M.prototype._createHighlightsPostProcess=function(v){var D=this;this._highlightsPostProcess=new C.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],v,null,d.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(O){O.setFloat("gain",D._highlightsGain),O.setFloat("threshold",D._highlightsThreshold),O.setTextureFromPostProcess("textureSampler",D._chromaticAberrationPostProcess),O.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),O.setFloat("screen_height",D._scene.getEngine().getRenderHeight())}},M.prototype._createDepthOfFieldPostProcess=function(v){var D=this;this._depthOfFieldPostProcess=new C.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],v,null,d.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(O){O.setTexture("depthSampler",D._depthTexture),O.setTexture("grainSampler",D._grainTexture),O.setTextureFromPostProcess("textureSampler",D._highlightsPostProcess),O.setTextureFromPostProcess("highlightsSampler",D._depthOfFieldPostProcess),O.setFloat("grain_amount",D._grainAmount),O.setBool("blur_noise",D._blurNoise),O.setFloat("screen_width",D._scene.getEngine().getRenderWidth()),O.setFloat("screen_height",D._scene.getEngine().getRenderHeight()),O.setFloat("distortion",D._distortion),O.setBool("dof_enabled",D._dofDistance!==-1),O.setFloat("screen_distance",1/(.1-1/D._dofDistance)),O.setFloat("aperture",D._dofAperture),O.setFloat("darken",D._dofDarken),O.setFloat("edge_blur",D._edgeBlur),O.setBool("highlights",D._highlightsGain!==-1),D._scene.activeCamera&&(O.setFloat("near",D._scene.activeCamera.minZ),O.setFloat("far",D._scene.activeCamera.maxZ))}},M.prototype._createGrainTexture=function(){var v=512;this._grainTexture=new A.a("LensNoiseTexture",v,this._scene,!1,d.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=d.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=d.a.WRAP_ADDRESSMODE;for(var D=this._grainTexture.getContext(),O=function(Z,ve){return Math.random()*(ve-Z)+Z},Y,z=0;z<v;z++)for(var S=0;S<v;S++)Y=Math.floor(O(.42,.58)*255),D.fillStyle="rgb("+Y+", "+Y+", "+Y+")",D.fillRect(z,S,1,1);this._grainTexture.update(!1)},M}(r.a),K=o(594),B=o(436),J=o(486),k=o(472),le="ssaoPixelShader",j=`
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
`;I.a.ShadersStore[le]=j;var de={name:le,shader:j},q=o(601),re=function(ie){Object(f.d)(M,ie);function M(v,D,O,Y){var z=ie.call(this,D.getEngine(),v)||this;z.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",z.SSAORenderEffect="SSAORenderEffect",z.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",z.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",z.SSAOCombineRenderEffect="SSAOCombineRenderEffect",z.totalStrength=1,z.radius=1e-4,z.area=.0075,z.fallOff=1e-6,z.base=.5,z._firstUpdate=!0,z._scene=D,z._createRandomTexture(),z._depthTexture=D.enableDepthRenderer().getDepthMap();var S=O.ssaoRatio||O,Z=O.combineRatio||O;return z._originalColorPostProcess=new J.b("SSAOOriginalSceneColor",Z,null,d.a.BILINEAR_SAMPLINGMODE,D.getEngine(),!1),z._createSSAOPostProcess(S),z._createBlurPostProcess(S),z._createSSAOCombinePostProcess(Z),z.addEffect(new a.a(D.getEngine(),z.SSAOOriginalSceneColorEffect,function(){return z._originalColorPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAORenderEffect,function(){return z._ssaoPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOBlurHRenderEffect,function(){return z._blurHPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOBlurVRenderEffect,function(){return z._blurVPostProcess},!0)),z.addEffect(new a.a(D.getEngine(),z.SSAOCombineRenderEffect,function(){return z._ssaoCombinePostProcess},!0)),D.postProcessRenderPipelineManager.addPipeline(z),Y&&D.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(v,Y),z}return Object.defineProperty(M.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),M.prototype.getClassName=function(){return"SSAORenderingPipeline"},M.prototype.dispose=function(v){v===void 0&&(v=!1);for(var D=0;D<this._scene.cameras.length;D++){var O=this._scene.cameras[D];this._originalColorPostProcess.dispose(O),this._ssaoPostProcess.dispose(O),this._blurHPostProcess.dispose(O),this._blurVPostProcess.dispose(O),this._ssaoCombinePostProcess.dispose(O)}this._randomTexture.dispose(),v&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),ie.prototype.dispose.call(this)},M.prototype._createBlurPostProcess=function(v){var D=this,O=16;this._blurHPostProcess=new k.a("BlurH",new B.d(1,0),O,v,null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new k.a("BlurV",new B.d(0,1),O,v,null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var Y=D._blurHPostProcess.width/D._scene.getEngine().getRenderWidth();D._blurHPostProcess.kernel=O*Y}),this._blurVPostProcess.onActivateObservable.add(function(){var Y=D._blurVPostProcess.height/D._scene.getEngine().getRenderHeight();D._blurVPostProcess.kernel=O*Y})},M.prototype._rebuild=function(){this._firstUpdate=!0,ie.prototype._rebuild.call(this)},M.prototype._createSSAOPostProcess=function(v){var D=this,O=16,Y=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],z=1/O;this._ssaoPostProcess=new C.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],v,null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+O+`
#define SSAO`),this._ssaoPostProcess.onApply=function(S){D._firstUpdate&&(S.setArray3("sampleSphere",Y),S.setFloat("samplesFactor",z),S.setFloat("randTextureTiles",4)),S.setFloat("totalStrength",D.totalStrength),S.setFloat("radius",D.radius),S.setFloat("area",D.area),S.setFloat("fallOff",D.fallOff),S.setFloat("base",D.base),S.setTexture("textureSampler",D._depthTexture),S.setTexture("randomSampler",D._randomTexture)}},M.prototype._createSSAOCombinePostProcess=function(v){var D=this;this._ssaoCombinePostProcess=new C.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],v,null,d.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(O){O.setVector4("viewport",B.c.Vector4[0].copyFromFloats(0,0,1,1)),O.setTextureFromPostProcess("originalColor",D._originalColorPostProcess)}},M.prototype._createRandomTexture=function(){var v=512;this._randomTexture=new A.a("SSAORandomTexture",v,this._scene,!1,d.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=d.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=d.a.WRAP_ADDRESSMODE;for(var D=this._randomTexture.getContext(),O=function(Z,ve){return Math.random()*(ve-Z)+Z},Y=B.e.Zero(),z=0;z<v;z++)for(var S=0;S<v;S++)Y.x=Math.floor(O(-1,1)*255),Y.y=Math.floor(O(-1,1)*255),Y.z=Math.floor(O(-1,1)*255),D.fillStyle="rgb("+Y.x+", "+Y.y+", "+Y.z+")",D.fillRect(z,S,1,1);this._randomTexture.update(!1)},Object(f.c)([Object(s.c)()],M.prototype,"totalStrength",void 0),Object(f.c)([Object(s.c)()],M.prototype,"radius",void 0),Object(f.c)([Object(s.c)()],M.prototype,"area",void 0),Object(f.c)([Object(s.c)()],M.prototype,"fallOff",void 0),Object(f.c)([Object(s.c)()],M.prototype,"base",void 0),M}(r.a),fe=o(450),ee=o(571),W=o(581),Ee=o(535),_e="standardPixelShader",oe=`uniform sampler2D textureSampler;
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
`;I.a.ShadersStore[_e]=oe;var ge={name:_e,shader:oe},Q=function(ie){Object(f.d)(M,ie);function M(v,D,O,Y,z){Y===void 0&&(Y=null);var S=ie.call(this,D.getEngine(),v)||this;return S.downSampleX4PostProcess=null,S.brightPassPostProcess=null,S.blurHPostProcesses=[],S.blurVPostProcesses=[],S.textureAdderPostProcess=null,S.volumetricLightPostProcess=null,S.volumetricLightSmoothXPostProcess=null,S.volumetricLightSmoothYPostProcess=null,S.volumetricLightMergePostProces=null,S.volumetricLightFinalPostProcess=null,S.luminancePostProcess=null,S.luminanceDownSamplePostProcesses=[],S.hdrPostProcess=null,S.textureAdderFinalPostProcess=null,S.lensFlareFinalPostProcess=null,S.hdrFinalPostProcess=null,S.lensFlarePostProcess=null,S.lensFlareComposePostProcess=null,S.motionBlurPostProcess=null,S.depthOfFieldPostProcess=null,S.fxaaPostProcess=null,S.screenSpaceReflectionPostProcess=null,S.brightThreshold=1,S.blurWidth=512,S.horizontalBlur=!1,S.lensTexture=null,S.volumetricLightCoefficient=.2,S.volumetricLightPower=4,S.volumetricLightBlurScale=64,S.sourceLight=null,S.hdrMinimumLuminance=1,S.hdrDecreaseRate=.5,S.hdrIncreaseRate=.5,S.lensColorTexture=null,S.lensFlareStrength=20,S.lensFlareGhostDispersal=1.4,S.lensFlareHaloWidth=.7,S.lensFlareDistortionStrength=16,S.lensFlareBlurWidth=512,S.lensStarTexture=null,S.lensFlareDirtTexture=null,S.depthOfFieldDistance=10,S.depthOfFieldBlurWidth=64,S.animations=[],S._currentDepthOfFieldSource=null,S._fixedExposure=1,S._currentExposure=1,S._hdrAutoExposure=!1,S._hdrCurrentLuminance=1,S._motionStrength=1,S._isObjectBasedMotionBlur=!1,S._camerasToBeAttached=[],S._bloomEnabled=!1,S._depthOfFieldEnabled=!1,S._vlsEnabled=!1,S._lensFlareEnabled=!1,S._hdrEnabled=!1,S._motionBlurEnabled=!1,S._fxaaEnabled=!1,S._screenSpaceReflectionsEnabled=!1,S._motionBlurSamples=64,S._volumetricLightStepsCount=50,S._samples=1,S._cameras=z||D.cameras,S._cameras=S._cameras.slice(),S._camerasToBeAttached=S._cameras.slice(),S._scene=D,S._basePostProcess=Y,S._ratio=O,S._floatTextureType=D.getEngine().getCaps().textureFloatRender?1:2,D.postProcessRenderPipelineManager.addPipeline(S),S._buildPipeline(),S}return Object.defineProperty(M.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(v){this._fixedExposure=v,this._currentExposure=v},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(v){if(this._hdrAutoExposure=v,this.hdrPostProcess){var D=["#define HDR"];v&&D.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(D.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(v){this._motionStrength=v,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=v)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(v){var D=this._isObjectBasedMotionBlur!==v;this._isObjectBasedMotionBlur=v,D&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(v){this._bloomEnabled!==v&&(this._bloomEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(v){this._depthOfFieldEnabled!==v&&(this._depthOfFieldEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(v){this._lensFlareEnabled!==v&&(this._lensFlareEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(v){this._hdrEnabled!==v&&(this._hdrEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(v){if(this._vlsEnabled!==v){if(v){var D=this._scene.enableGeometryBufferRenderer();if(!D){E.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=v,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(v){this._motionBlurEnabled!==v&&(this._motionBlurEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(v){this._fxaaEnabled!==v&&(this._fxaaEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(v){this._screenSpaceReflectionsEnabled!==v&&(this._screenSpaceReflectionsEnabled=v,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(v){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+v.toFixed(1)),this._volumetricLightStepsCount=v},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(v){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=v:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+v.toFixed(1))),this._motionBlurSamples=v},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"samples",{get:function(){return this._samples},set:function(v){this._samples!==v&&(this._samples=v,this._buildPipeline())},enumerable:!1,configurable:!0}),M.prototype._buildPipeline=function(){var v=this,D=this._ratio,O=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new W.a("HDRPass",O,D,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){v._currentDepthOfFieldSource=v.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(O.getEngine(),"HDRScreenSpaceReflections",function(){return v.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new C.a("HDRPass","standard",[],[],D,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){v._currentDepthOfFieldSource=v.originalPostProcess}),this.addEffect(new a.a(O.getEngine(),"HDRPassPostProcess",function(){return v.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(O,D/4),this._createBrightPassPostProcess(O,D/4),this._createBlurPostProcesses(O,D/4,1),this._createTextureAdderPostProcess(O,D),this.textureAdderFinalPostProcess=new C.a("HDRDepthOfFieldSource","standard",[],[],D,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(O.getEngine(),"HDRBaseDepthOfFieldSource",function(){return v.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(O,D),this.volumetricLightFinalPostProcess=new C.a("HDRVLSFinal","standard",[],[],D,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(O.getEngine(),"HDRVLSFinal",function(){return v.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(O,D),this.lensFlareFinalPostProcess=new C.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],D,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(O.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return v.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(O,this._floatTextureType),this._createHdrPostProcess(O,D),this.hdrFinalPostProcess=new C.a("HDRPostHDReDepthOfFieldSource","standard",[],[],D,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(O.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return v.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(O,D/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(O,D)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(O,D),this._fxaaEnabled&&(this.fxaaPostProcess=new n.a("fxaa",1,null,d.a.BILINEAR_SAMPLINGMODE,O.getEngine(),!1,0),this.addEffect(new a.a(O.getEngine(),"HDRFxaa",function(){return v.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&E.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},M.prototype._createDownSampleX4PostProcess=function(v,D){var O=this,Y=new Array(32);this.downSampleX4PostProcess=new C.a("HDRDownSampleX4","standard",["dsOffsets"],[],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(z){for(var S=0,Z=O.downSampleX4PostProcess.width,ve=O.downSampleX4PostProcess.height,Te=-2;Te<2;Te++)for(var Ae=-2;Ae<2;Ae++)Y[S]=(Te+.5)*(1/Z),Y[S+1]=(Ae+.5)*(1/ve),S+=2;z.setArray2("dsOffsets",Y)},this.addEffect(new a.a(v.getEngine(),"HDRDownSampleX4",function(){return O.downSampleX4PostProcess},!0))},M.prototype._createBrightPassPostProcess=function(v,D){var O=this,Y=new Array(8);this.brightPassPostProcess=new C.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(z){var S=1/O.brightPassPostProcess.width,Z=1/O.brightPassPostProcess.height;Y[0]=-.5*S,Y[1]=.5*Z,Y[2]=.5*S,Y[3]=.5*Z,Y[4]=-.5*S,Y[5]=-.5*Z,Y[6]=.5*S,Y[7]=-.5*Z,z.setArray2("dsOffsets",Y),z.setFloat("brightThreshold",O.brightThreshold)},this.addEffect(new a.a(v.getEngine(),"HDRBrightPass",function(){return O.brightPassPostProcess},!0))},M.prototype._createBlurPostProcesses=function(v,D,O,Y){var z=this;Y===void 0&&(Y="blurWidth");var S=v.getEngine(),Z=new k.a("HDRBlurH_"+O,new B.d(1,0),this[Y],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,this._floatTextureType),ve=new k.a("HDRBlurV_"+O,new B.d(0,1),this[Y],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,this._floatTextureType);Z.onActivateObservable.add(function(){var Te=Z.width/S.getRenderWidth();Z.kernel=z[Y]*Te}),ve.onActivateObservable.add(function(){var Te=ve.height/S.getRenderHeight();ve.kernel=z.horizontalBlur?64*Te:z[Y]*Te}),this.addEffect(new a.a(v.getEngine(),"HDRBlurH"+O,function(){return Z},!0)),this.addEffect(new a.a(v.getEngine(),"HDRBlurV"+O,function(){return ve},!0)),this.blurHPostProcesses.push(Z),this.blurVPostProcesses.push(ve)},M.prototype._createTextureAdderPostProcess=function(v,D){var O=this;this.textureAdderPostProcess=new C.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(Y){Y.setTextureFromPostProcess("otherSampler",O._vlsEnabled?O._currentDepthOfFieldSource:O.originalPostProcess),Y.setTexture("lensSampler",O.lensTexture),Y.setFloat("exposure",O._currentExposure),O._currentDepthOfFieldSource=O.textureAdderFinalPostProcess},this.addEffect(new a.a(v.getEngine(),"HDRTextureAdder",function(){return O.textureAdderPostProcess},!0))},M.prototype._createVolumetricLightPostProcess=function(v,D){var O=this,Y=v.enableGeometryBufferRenderer();Y.enablePosition=!0;var z=Y.getGBuffer();this.volumetricLightPostProcess=new C.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],D/8,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var S=B.d.Zero();this.volumetricLightPostProcess.onApply=function(Z){if(O.sourceLight&&O.sourceLight.getShadowGenerator()&&O._scene.activeCamera){var ve=O.sourceLight.getShadowGenerator();Z.setTexture("shadowMapSampler",ve.getShadowMap()),Z.setTexture("positionSampler",z.textures[2]),Z.setColor3("sunColor",O.sourceLight.diffuse),Z.setVector3("sunDirection",O.sourceLight.getShadowDirection()),Z.setVector3("cameraPosition",O._scene.activeCamera.globalPosition),Z.setMatrix("shadowViewProjection",ve.getTransformMatrix()),Z.setFloat("scatteringCoefficient",O.volumetricLightCoefficient),Z.setFloat("scatteringPower",O.volumetricLightPower),S.x=O.sourceLight.getDepthMinZ(O._scene.activeCamera),S.y=O.sourceLight.getDepthMaxZ(O._scene.activeCamera),Z.setVector2("depthValues",S)}},this.addEffect(new a.a(v.getEngine(),"HDRVLS",function(){return O.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(v,D/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new C.a("HDRVLSMerge","standard",[],["originalSampler"],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(Z){Z.setTextureFromPostProcess("originalSampler",O._bloomEnabled?O.textureAdderFinalPostProcess:O.originalPostProcess),O._currentDepthOfFieldSource=O.volumetricLightFinalPostProcess},this.addEffect(new a.a(v.getEngine(),"HDRVLSMerge",function(){return O.volumetricLightMergePostProces},!0))},M.prototype._createLuminancePostProcesses=function(v,D){var O=this,Y=Math.pow(3,M.LuminanceSteps);this.luminancePostProcess=new C.a("HDRLuminance","standard",["lumOffsets"],[],{width:Y,height:Y},null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define LUMINANCE",D);var z=[];this.luminancePostProcess.onApply=function(Ae){var Ce=1/O.luminancePostProcess.width,Oe=1/O.luminancePostProcess.height;z[0]=-.5*Ce,z[1]=.5*Oe,z[2]=.5*Ce,z[3]=.5*Oe,z[4]=-.5*Ce,z[5]=-.5*Oe,z[6]=.5*Ce,z[7]=-.5*Oe,Ae.setArray2("lumOffsets",z)},this.addEffect(new a.a(v.getEngine(),"HDRLuminance",function(){return O.luminancePostProcess},!0));for(var S=M.LuminanceSteps-1;S>=0;S--){var Y=Math.pow(3,S),Z=`#define LUMINANCE_DOWN_SAMPLE
`;S===0&&(Z+="#define FINAL_DOWN_SAMPLER");var ve=new C.a("HDRLuminanceDownSample"+S,"standard",["dsOffsets","halfDestPixelSize"],[],{width:Y,height:Y},null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,Z,D);this.luminanceDownSamplePostProcesses.push(ve)}var Te=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Ae,Ce){var Oe=new Array(18);Ae.onApply=function(Le){if(!!Te){for(var Ie=0,xe=-1;xe<2;xe++)for(var Me=-1;Me<2;Me++)Oe[Ie]=xe/Te.width,Oe[Ie+1]=Me/Te.height,Ie+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Te.width),Ce===O.luminanceDownSamplePostProcesses.length-1?Te=O.luminancePostProcess:Te=Ae}},Ce===O.luminanceDownSamplePostProcesses.length-1&&(Ae.onAfterRender=function(){var Le=v.getEngine().readPixels(0,0,1,1),Ie=new B.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Me=new Uint8Array(xe.buffer);O._hdrCurrentLuminance=(Me[0]*Ie.x+Me[1]*Ie.y+Me[2]*Ie.z+Me[3]*Ie.w)/100})}),O.addEffect(new a.a(v.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Ae},!0))})},M.prototype._createHdrPostProcess=function(v,D){var O=this,Y=["#define HDR"];this._hdrAutoExposure&&Y.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new C.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,Y.join(`
`),0);var z=1,S=0,Z=0;this.hdrPostProcess.onApply=function(ve){if(ve.setTextureFromPostProcess("textureAdderSampler",O._currentDepthOfFieldSource),S+=v.getEngine().getDeltaTime(),z<0)z=O._hdrCurrentLuminance;else{var Te=(Z-S)/1e3;O._hdrCurrentLuminance<z+O.hdrDecreaseRate*Te?z+=O.hdrDecreaseRate*Te:O._hdrCurrentLuminance>z-O.hdrIncreaseRate*Te?z-=O.hdrIncreaseRate*Te:z=O._hdrCurrentLuminance}O.hdrAutoExposure?O._currentExposure=O._fixedExposure/z:(z=fe.a.Clamp(z,O.hdrMinimumLuminance,1e20),ve.setFloat("averageLuminance",z)),Z=S,O._currentDepthOfFieldSource=O.hdrFinalPostProcess},this.addEffect(new a.a(v.getEngine(),"HDR",function(){return O.hdrPostProcess},!0))},M.prototype._createLensFlarePostProcess=function(v,D){var O=this;this.lensFlarePostProcess=new C.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],D/2,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(v.getEngine(),"HDRLensFlare",function(){return O.lensFlarePostProcess},!0)),this._createBlurPostProcesses(v,D/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new C.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(v.getEngine(),"HDRLensFlareCompose",function(){return O.lensFlareComposePostProcess},!0));var Y=new B.d(0,0);this.lensFlarePostProcess.onApply=function(Z){Z.setTextureFromPostProcess("textureSampler",O._bloomEnabled?O.blurHPostProcesses[0]:O.originalPostProcess),Z.setTexture("lensColorSampler",O.lensColorTexture),Z.setFloat("strength",O.lensFlareStrength),Z.setFloat("ghostDispersal",O.lensFlareGhostDispersal),Z.setFloat("haloWidth",O.lensFlareHaloWidth),Y.x=O.lensFlarePostProcess.width,Y.y=O.lensFlarePostProcess.height,Z.setVector2("resolution",Y),Z.setFloat("distortionStrength",O.lensFlareDistortionStrength)};var z=B.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),S=B.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(Z){if(!!O._scene.activeCamera){Z.setTextureFromPostProcess("otherSampler",O.lensFlarePostProcess),Z.setTexture("lensDirtSampler",O.lensFlareDirtTexture),Z.setTexture("lensStarSampler",O.lensStarTexture);var ve=O._scene.activeCamera.getViewMatrix().getRow(0),Te=O._scene.activeCamera.getViewMatrix().getRow(2),Ae=B.e.Dot(ve.toVector3(),new B.e(1,0,0))+B.e.Dot(Te.toVector3(),new B.e(0,0,1));Ae*=4;var Ce=B.a.FromValues(Math.cos(Ae)*.5,-Math.sin(Ae),0,0,Math.sin(Ae),Math.cos(Ae)*.5,0,0,0,0,1,0,0,0,0,1),Oe=S.multiply(Ce).multiply(z);Z.setMatrix("lensStarMatrix",Oe),O._currentDepthOfFieldSource=O.lensFlareFinalPostProcess}}},M.prototype._createDepthOfFieldPostProcess=function(v,D){var O=this;this.depthOfFieldPostProcess=new C.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(Y){Y.setTextureFromPostProcess("otherSampler",O._currentDepthOfFieldSource),Y.setTexture("depthSampler",O._getDepthTexture()),Y.setFloat("distance",O.depthOfFieldDistance)},this.addEffect(new a.a(v.getEngine(),"HDRDepthOfField",function(){return O.depthOfFieldPostProcess},!0))},M.prototype._createMotionBlurPostProcess=function(v,D){var O=this;if(this._isObjectBasedMotionBlur){var Y=new ee.a("HDRMotionBlur",v,D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,0);Y.motionStrength=this.motionStrength,Y.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=Y}else{this.motionBlurPostProcess=new C.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],D,null,d.a.BILINEAR_SAMPLINGMODE,v.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var z=0,S=B.a.Identity(),Z=B.a.Identity(),ve=B.a.Identity(),Te=B.d.Zero();this.motionBlurPostProcess.onApply=function(Ae){ve=v.getProjectionMatrix().multiply(v.getViewMatrix()),ve.invertToRef(Z),Ae.setMatrix("inverseViewProjection",Z),Ae.setMatrix("prevViewProjection",S),S=ve,Te.x=O.motionBlurPostProcess.width,Te.y=O.motionBlurPostProcess.height,Ae.setVector2("screenSize",Te),z=v.getEngine().getFps()/60,Ae.setFloat("motionScale",z),Ae.setFloat("motionStrength",O.motionStrength),Ae.setTexture("depthSampler",O._getDepthTexture())}}this.addEffect(new a.a(v.getEngine(),"HDRMotionBlur",function(){return O.motionBlurPostProcess},!0))},M.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var v=this._scene.enableGeometryBufferRenderer();return v.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},M.prototype._disposePostProcesses=function(){for(var v=0;v<this._cameras.length;v++){var D=this._cameras[v];this.originalPostProcess&&this.originalPostProcess.dispose(D),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(D),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(D),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(D),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(D),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(D),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(D),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(D),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(D),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(D),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(D),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(D);for(var O=0;O<this.luminanceDownSamplePostProcesses.length;O++)this.luminanceDownSamplePostProcesses[O].dispose(D);this.luminancePostProcess&&this.luminancePostProcess.dispose(D),this.hdrPostProcess&&this.hdrPostProcess.dispose(D),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(D),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(D),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(D),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(D);for(var O=0;O<this.blurHPostProcesses.length;O++)this.blurHPostProcesses[O].dispose(D);for(var O=0;O<this.blurVPostProcesses.length;O++)this.blurVPostProcesses[O].dispose(D)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},M.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),ie.prototype.dispose.call(this)},M.prototype.serialize=function(){var v=s.a.Serialize(this);return this.sourceLight&&(v.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(v.screenSpaceReflectionPostProcess=s.a.Serialize(this.screenSpaceReflectionPostProcess)),v.customType="StandardRenderingPipeline",v},M.Parse=function(v,D,O){var Y=s.a.Parse(function(){return new M(v._name,D,v._ratio)},v,D,O);return v.sourceLightId&&(Y.sourceLight=D.getLightByID(v.sourceLightId)),v.screenSpaceReflectionPostProcess&&s.a.Parse(function(){return Y.screenSpaceReflectionPostProcess},v.screenSpaceReflectionPostProcess,D,O),Y},M.LuminanceSteps=6,Object(f.c)([Object(s.c)()],M.prototype,"brightThreshold",void 0),Object(f.c)([Object(s.c)()],M.prototype,"blurWidth",void 0),Object(f.c)([Object(s.c)()],M.prototype,"horizontalBlur",void 0),Object(f.c)([Object(s.c)()],M.prototype,"exposure",null),Object(f.c)([Object(s.m)("lensTexture")],M.prototype,"lensTexture",void 0),Object(f.c)([Object(s.c)()],M.prototype,"volumetricLightCoefficient",void 0),Object(f.c)([Object(s.c)()],M.prototype,"volumetricLightPower",void 0),Object(f.c)([Object(s.c)()],M.prototype,"volumetricLightBlurScale",void 0),Object(f.c)([Object(s.c)()],M.prototype,"hdrMinimumLuminance",void 0),Object(f.c)([Object(s.c)()],M.prototype,"hdrDecreaseRate",void 0),Object(f.c)([Object(s.c)()],M.prototype,"hdrIncreaseRate",void 0),Object(f.c)([Object(s.c)()],M.prototype,"hdrAutoExposure",null),Object(f.c)([Object(s.m)("lensColorTexture")],M.prototype,"lensColorTexture",void 0),Object(f.c)([Object(s.c)()],M.prototype,"lensFlareStrength",void 0),Object(f.c)([Object(s.c)()],M.prototype,"lensFlareGhostDispersal",void 0),Object(f.c)([Object(s.c)()],M.prototype,"lensFlareHaloWidth",void 0),Object(f.c)([Object(s.c)()],M.prototype,"lensFlareDistortionStrength",void 0),Object(f.c)([Object(s.c)()],M.prototype,"lensFlareBlurWidth",void 0),Object(f.c)([Object(s.m)("lensStarTexture")],M.prototype,"lensStarTexture",void 0),Object(f.c)([Object(s.m)("lensFlareDirtTexture")],M.prototype,"lensFlareDirtTexture",void 0),Object(f.c)([Object(s.c)()],M.prototype,"depthOfFieldDistance",void 0),Object(f.c)([Object(s.c)()],M.prototype,"depthOfFieldBlurWidth",void 0),Object(f.c)([Object(s.c)()],M.prototype,"motionStrength",null),Object(f.c)([Object(s.c)()],M.prototype,"objectBasedMotionBlur",null),Object(f.c)([Object(s.c)()],M.prototype,"_ratio",void 0),Object(f.c)([Object(s.c)()],M.prototype,"BloomEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"DepthOfFieldEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"LensFlareEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"HDREnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"VLSEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"MotionBlurEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"fxaaEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"screenSpaceReflectionsEnabled",null),Object(f.c)([Object(s.c)()],M.prototype,"volumetricLightStepsCount",null),Object(f.c)([Object(s.c)()],M.prototype,"motionBlurSamples",null),Object(f.c)([Object(s.c)()],M.prototype,"samples",null),M}(r.a);u.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=Q;var pe=o(548)},605:function($,H,o){"use strict";var f=o(435),s="importanceSampling",b=`




























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
}`;f.a.IncludesShadersStore[s]=b;var E={name:s,shader:b}},606:function($,H,o){"use strict";var f=o(435),s="pbrBRDFFunctions",b=`
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
`;f.a.IncludesShadersStore[s]=b;var E={name:s,shader:b}},607:function($,H,o){"use strict";var f=o(435),s="hdrFilteringFunctions",b=`#ifdef NUM_SAMPLES
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
#endif`;f.a.IncludesShadersStore[s]=b;var E={name:s,shader:b}},625:function($,H,o){"use strict";var f=o(435),s=o(457),b="rgbdDecodePixelShader",E=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;f.a.ShadersStore[b]=E;var d={name:b,shader:E}},626:function($,H,o){"use strict";o.d(H,"a",function(){return T});var f=o(434),s=o(439),b=o(441),E=o(480),d=o(454),T=function(){function p(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=p._DefaultIndexOfRefraction,this.indexOfRefraction=p._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=b.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return p.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},p.prototype.isReadyForSubMesh=function(i,t,e,n){return!(i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&E.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&E.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||e.getCaps().standardDerivatives&&this._bumpTexture&&E.a.ClearCoatBumpTextureEnabled&&!n&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&E.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},p.prototype.prepareDefines=function(i,t){var e;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((e=this._textureRoughness)===null||e===void 0?void 0:e._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&t.texturesEnabled&&(this._texture&&E.a.ClearCoatTextureEnabled?d.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&E.a.ClearCoatTextureEnabled?d.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&E.a.ClearCoatBumpTextureEnabled?d.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===p._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&E.a.ClearCoatTintTextureEnabled?d.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},p.prototype.bindForSubMesh=function(i,t,e,n,r,a,l,h){var u,g,R,P,A,C,x,I,F=h._materialDefines,y=F.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!r||!i.isSync){y&&E.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),d.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&E.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(g=(u=this._texture)===null||u===void 0?void 0:u.coordinatesIndex)!==null&&g!==void 0?g:0,(P=(R=this._texture)===null||R===void 0?void 0:R.level)!==null&&P!==void 0?P:0,(C=(A=this._textureRoughness)===null||A===void 0?void 0:A.coordinatesIndex)!==null&&C!==void 0?C:0,(I=(x=this._textureRoughness)===null||x===void 0?void 0:x.level)!==null&&I!==void 0?I:0),this._texture&&d.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!y&&!F.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&d.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&e.getCaps().standardDerivatives&&E.a.ClearCoatTextureEnabled&&!n&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),d.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),t._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,l?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,l?-1:1)),this._tintTexture&&E.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),d.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var N=1-this._indexOfRefraction,G=1+this._indexOfRefraction,V=Math.pow(-N/G,2),L=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",V,L,N,G),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}t.texturesEnabled&&(this._texture&&E.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!y&&!F.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&E.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&e.getCaps().standardDerivatives&&E.a.ClearCoatBumpTextureEnabled&&!n&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&E.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},p.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},p.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},p.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},p.prototype.dispose=function(i){var t,e,n,r;i&&((t=this._texture)===null||t===void 0||t.dispose(),(e=this._textureRoughness)===null||e===void 0||e.dispose(),(n=this._bumpTexture)===null||n===void 0||n.dispose(),(r=this._tintTexture)===null||r===void 0||r.dispose())},p.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},p.AddFallbacks=function(i,t,e){return i.CLEARCOAT_BUMP&&t.addFallback(e++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&t.addFallback(e++,"CLEARCOAT_TINT"),i.CLEARCOAT&&t.addFallback(e++,"CLEARCOAT"),e},p.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},p.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},p.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},p.prototype.copyTo=function(i){s.a.Clone(function(){return i},this)},p.prototype.serialize=function(){return s.a.Serialize(this)},p.prototype.parse=function(i,t,e){var n=this;s.a.Parse(function(){return n},i,t,e)},p._DefaultIndexOfRefraction=1.5,Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isEnabled",void 0),Object(f.c)([Object(s.c)()],p.prototype,"intensity",void 0),Object(f.c)([Object(s.c)()],p.prototype,"roughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"texture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"textureRoughness",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"remapF0OnInterfaceChange",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"bumpTexture",void 0),Object(f.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isTintEnabled",void 0),Object(f.c)([Object(s.e)()],p.prototype,"tintColor",void 0),Object(f.c)([Object(s.c)()],p.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(s.c)()],p.prototype,"tintThickness",void 0),Object(f.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"tintTexture",void 0),p}()},627:function($,H,o){"use strict";var f=o(435),s="subSurfaceScatteringFunctions",b=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;f.a.IncludesShadersStore[s]=b;var E={name:s,shader:b}},644:function($,H,o){"use strict";var f=o(435),s=o(524),b=o(457),E=o(525),d="imageProcessingPixelShader",T=`
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
}`;f.a.ShadersStore[d]=T;var p={name:d,shader:T}},646:function($,H,o){"use strict";var f=o(435),s="glowMapMergePixelShader",b=`
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
}`;f.a.ShadersStore[s]=b;var E={name:s,shader:b}},647:function($,H,o){"use strict";var f=o(435),s="glowMapMergeVertexShader",b=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[s]=b;var E={name:s,shader:b}},649:function($,H,o){"use strict";o.d(H,"a",function(){return d});var f=o(449),s=o(452),b=o(598),E=o(440);Object.defineProperty(f.a.prototype,"prePassRenderer",{get:function(){return this._prePassRenderer},set:function(T){T&&T.isSupported&&(this._prePassRenderer=T)},enumerable:!0,configurable:!0}),f.a.prototype.enablePrePassRenderer=function(){return this._prePassRenderer?this._prePassRenderer:(this._prePassRenderer=new b.a(this),this._prePassRenderer.isSupported||(this._prePassRenderer=null,E.a.Error(`PrePassRenderer needs WebGL 2 support.
Maybe you tried to use the following features that need the PrePassRenderer :
 + Subsurface Scattering`)),this._prePassRenderer)},f.a.prototype.disablePrePassRenderer=function(){!this._prePassRenderer||(this._prePassRenderer.dispose(),this._prePassRenderer=null)};var d=function(){function T(p){this.name=s.a.NAME_PREPASSRENDERER,this.scene=p}return T.prototype.register=function(){this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_PREPASS,this,this._beforeCameraDraw),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterCameraDraw),this.scene._beforeRenderTargetDrawStage.registerStep(s.a.STEP_BEFORERENDERTARGETDRAW_PREPASS,this,this._beforeRenderTargetDraw),this.scene._afterRenderTargetDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_PREPASS,this,this._afterRenderTargetDraw),this.scene._beforeClearStage.registerStep(s.a.STEP_BEFORECLEARSTAGE_PREPASS,this,this._beforeClearStage),this.scene._beforeRenderTargetClearStage.registerStep(s.a.STEP_BEFORERENDERTARGETCLEARSTAGE_PREPASS,this,this._beforeRenderTargetClearStage),this.scene._beforeRenderingMeshStage.registerStep(s.a.STEP_BEFORERENDERINGMESH_PREPASS,this,this._beforeRenderingMeshStage),this.scene._afterRenderingMeshStage.registerStep(s.a.STEP_AFTERRENDERINGMESH_PREPASS,this,this._afterRenderingMeshStage)},T.prototype._beforeRenderTargetDraw=function(p,i,t){this.scene.prePassRenderer&&(p._prePassRenderTarget||(p._prePassRenderTarget=this.scene.prePassRenderer._createRenderTarget(p.name+"_prePassRTT",p)),this.scene.prePassRenderer._setRenderTarget(p._prePassRenderTarget),this.scene.prePassRenderer._beforeDraw(void 0,i,t))},T.prototype._afterRenderTargetDraw=function(p,i,t){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw(i,t)},T.prototype._beforeRenderTargetClearStage=function(p,i,t){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(p._prePassRenderTarget),this.scene.prePassRenderer._clear())},T.prototype._beforeCameraDraw=function(p){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._beforeDraw(p))},T.prototype._afterCameraDraw=function(p){this.scene.prePassRenderer&&this.scene.prePassRenderer._afterDraw()},T.prototype._beforeClearStage=function(){this.scene.prePassRenderer&&(this.scene.prePassRenderer._setRenderTarget(null),this.scene.prePassRenderer._clear())},T.prototype._beforeRenderingMeshStage=function(p,i,t,e){if(!!e){var n=p.getScene();n.prePassRenderer&&n.prePassRenderer.bindAttachmentsForEffect(e,i)}},T.prototype._afterRenderingMeshStage=function(p){var i=p.getScene();i.prePassRenderer&&i.prePassRenderer.restoreAttachments()},T.prototype.rebuild=function(){this.scene.disablePrePassRenderer(),this.scene.enablePrePassRenderer()},T.prototype.dispose=function(){this.scene.disablePrePassRenderer()},T}();b.a._SceneComponentInitialization=function(T){var p=T._getComponent(s.a.NAME_PREPASSRENDERER);p||(p=new d(T),T._addComponent(p))}},89:function($,H,o){"use strict";o.r(H);var f=o(445),s=o(449),b=o(498),E=o(475),d=o(441),T=o(506),p=o(648),i=o(447),t=o(594),e=o(602),n=o(533),r=o(649),a=o(549),l=Object.assign,h=(R,P,A)=>new Promise((C,x)=>{var I=N=>{try{y(A.next(N))}catch(G){x(G)}},F=N=>{try{y(A.throw(N))}catch(G){x(G)}},y=N=>N.done?C(N.value):Promise.resolve(N.value).then(I,F);y((A=A.apply(R,P)).next())});const u={animate:!0,context:Object(a.a)()},g=R=>h(void 0,[R],function*({canvas:P,width:A,height:C}){const x=new f.a(P,!0,{preserveDrawingBuffer:!0,stencil:!0}),I=new s.a(x);I.clearColor=d.b.FromColor3(new d.a(245/255,248/255,250/255));const F=Math.PI/4,y=Math.PI/3,N=new T.a("camera",F,y,3,new E.z(0,0,0),I);N.wheelPrecision=50,N.minZ=.2,N.attachControl(P,!0);const G=new b.a("hemiLight",new E.z(-1,1,0),I);G.diffuse=new d.a(1,1,1),G.groundColor=new d.a(.5,.5,.5),G.specular=new d.a(.25,.25,.25);const V=le=>{le=l({bevelSize:.05,boxWidth:2,bevelSegments:30,mainSegments:200,k:1,instance:null,time:0},le);const{bevelSize:j,boxWidth:de,bevelSegments:q,mainSegments:re,k:fe,instance:ee,time:W}=le,Ee=(()=>{const Q=[],pe=j/q,ie=(de-j*2)/re;for(let M=0;M<q;M+=1)Q.push(new E.z(M*pe-de/2,0,0));for(let M=1;M<re;M+=1)Q.push(new E.z(M*ie+j-de/2,0,0));for(let M=1;M<=q;M+=1)Q.push(new E.z(M*pe+de-j-de/2,0,0));return Q})(),_e=fe%2?1:-1;Ee.forEach(Q=>{const pe=Q.x+W;Q.y=Math.sin(pe*Math.PI*_e)*.5,Q.z=Math.cos(pe*Math.PI*_e)*.5,Q.y+=Math.sin(pe*Math.PI*_e*9+Math.PI*fe)*j*1.125,Q.z+=Math.cos(pe*Math.PI*_e*9+Math.PI*fe)*j*1.125});const oe=(Q,pe)=>{if(Q<q){const ie=(1-Q/q)*j;return Math.sqrt(Math.abs(j*j-ie*ie))}if(Q>q+re-1){const ie=(1-(Q-re+2)/q)*j;return Math.sqrt(Math.abs(j*j-ie*ie))}return j};return new p.a.CreateTube("sphere",{path:Ee,radiusFunction:oe,cap:0,tessellation:q,instance:ee,updatable:!0},I)};let L=V({k:0});L.setEnabled(!1);let ne=V({k:1});ne.setEnabled(!1);const K=new n.a("plastic",I);K.baseColor=new d.a(1,.766,.336),K.metallic=.1,K.roughness=.1,L.material=K,ne.material=K;const B=8;for(let le=0;le<B;le+=1)L.createInstance(`i1-${le}`).rotate(new E.z(1,0,0),le*(Math.PI*2/B)*1),ne.createInstance(`i2-${le}`).rotate(new E.z(1,0,0),le*(Math.PI*2/B)*-1);[L,ne].forEach(le=>{const j=B,de=new Float32Array(4*j);for(let re=0;re<j;re+=1){const fe=new d.a;d.a.HSVtoRGBToRef(Math.random()*360,.75,1,fe),de[re*4]=fe.r,de[re*4+1]=fe.g,de[re*4+2]=fe.b,de[re*4+3]=1}const q=new i.b(x,de,i.b.ColorKind,!1,!1,4,!0);le.setVerticesBuffer(q)});const J=new t.a("ssao",I,{ssaoRatio:1,blurRatio:1});J.radius=1,J.totalStrength=1.3,J.expensiveBlur=!0,J.samples=16,J.maxZ=100,I.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssao",N);const k=new e.a("default",!0,I,[N]);return k.fxaaEnabled=!0,k.samples=8,k.MotionBlurEnabled=!0,k.motionStrength=.5,k.motionBlurSamples=32,k.bloomEnabled=!0,k.bloomThreshold=.17,k.bloomWeight=.2,k.bloomKernel=100,k.bloomScale=.9,k.imageProcessing.vignetteEnabled=!0,k.imageProcessing.vignetteColor=new d.a(24/255,32/255,38/255),k.imageProcessing.vignetteCameraFov=.2,k.imageProcessing.vignetteWeight=10,{render({time:le,width:j,height:de}){const q=le*.2;L=V({k:0,instance:L,time:q}),ne=V({k:1,instance:ne,time:q}),I.render()},resize({pixelRatio:le,width:j,height:de}){x.resize()},unload(){x.dispose()}}});H.default={sketch:g,settings:u}}}]);
