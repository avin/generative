(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[37],{444:function(te,j,a){"use strict";a.d(j,"a",function(){return t});var l=a(434),o=a(490),y=a(438),O=a(436),h=a(534),D=a(445),m=a(500),n=a(439),e=a(437),t=function(){function i(r,s,f,v,d,T,x,M,b,C,u,S,R,p,c){x===void 0&&(x=1),C===void 0&&(C=null),u===void 0&&(u=0),S===void 0&&(S="postprocess"),p===void 0&&(p=!1),c===void 0&&(c=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new o.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new O.d(1,1),this._texelSize=O.d.Zero(),this.onActivateObservable=new y.c,this.onSizeChangedObservable=new y.c,this.onApplyObservable=new y.c,this.onBeforeRenderObservable=new y.c,this.onAfterRenderObservable=new y.c,this.name=r,T!=null?(this._camera=T,this._scene=T.getScene(),T.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):M&&(this._engine=M,this._engine.postProcesses.push(this)),this._options=d,this.renderTargetSamplingMode=x||1,this._reusable=b||!1,this._textureType=u,this._textureFormat=c,this._samplers=v||[],this._samplers.push("textureSampler"),this._fragmentUrl=s,this._vertexUrl=S,this._parameters=f||[],this._parameters.push("scale"),this._indexParameters=R,p||this.updateEffect(C)}return Object.defineProperty(i.prototype,"samples",{get:function(){return this._samples},set:function(r){var s=this;this._samples=Math.min(r,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(f){f.samples!==s._samples&&s._engine.updateRenderTargetTextureSampleCount(f,s._samples)})},enumerable:!1,configurable:!0}),i.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(i.prototype,"onActivate",{set:function(r){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),r&&(this._onActivateObserver=this.onActivateObservable.add(r))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onSizeChanged",{set:function(r){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onApply",{set:function(r){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onBeforeRender",{set:function(r){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onAfterRender",{set:function(r){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(r)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(r){this._forcedOutputTexture=r},enumerable:!1,configurable:!0}),i.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},i.prototype.getCamera=function(){return this._camera},Object.defineProperty(i.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"PostProcess"},i.prototype.getEngine=function(){return this._engine},i.prototype.getEffect=function(){return this._effect},i.prototype.shareOutputWith=function(r){return this._disposeTextures(),this._shareOutputWithPostProcess=r,this},i.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new o.a(2)),this._shareOutputWithPostProcess=null},i.prototype.updateEffect=function(r,s,f,v,d,T,x,M){r===void 0&&(r=null),s===void 0&&(s=null),f===void 0&&(f=null),this._postProcessDefines=r,this._effect=this._engine.createEffect({vertex:x!=null?x:this._vertexUrl,fragment:M!=null?M:this._fragmentUrl},["position"],s||this._parameters,f||this._samplers,r!==null?r:"",void 0,d,T,v||this._indexParameters)},i.prototype.isReusable=function(){return this._reusable},i.prototype.markTextureDirty=function(){this.width=-1},i.prototype._createRenderTargetTexture=function(r,s,f){f===void 0&&(f=0);for(var v=0;v<this._textureCache.length;v++)if(this._textureCache[v].texture.width===r.width&&this._textureCache[v].texture.height===r.height&&this._textureCache[v].postProcessChannel===f)return this._textureCache[v].texture;var d=this._engine.createRenderTargetTexture(r,s);return this._textureCache.push({texture:d,postProcessChannel:f,lastUsedRenderId:-1}),d},i.prototype._flushTextureCache=function(){for(var r=this._renderId,s=this._textureCache.length-1;s>=0;s--)if(r-this._textureCache[s].lastUsedRenderId>100){for(var f=!1,v=0;v<this._textures.length;v++)if(this._textures.data[v]===this._textureCache[s].texture){f=!0;break}f||(this._engine._releaseTexture(this._textureCache[s].texture),this._textureCache.splice(s,1))}},i.prototype._resize=function(r,s,f,v,d){this._textures.length>0&&this._textures.reset(),this.width=r,this.height=s;var T={width:this.width,height:this.height},x={generateMipMaps:v,generateDepthBuffer:d||f._postProcesses.indexOf(this)===0,generateStencilBuffer:(d||f._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(T,x,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(T,x,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},i.prototype.activate=function(r,s,f){var v=this;s===void 0&&(s=null),r=r||this._camera;var d=r.getScene(),T=d.getEngine(),x=T.getCaps().maxTextureSize,M=(s?s.width:this._engine.getRenderWidth(!0))*this._options|0,b=(s?s.height:this._engine.getRenderHeight(!0))*this._options|0,C=r.parent;C&&(C.leftCamera==r||C.rightCamera==r)&&(M/=2);var u=this._options.width||M,S=this._options.height||b,R=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var p=T.currentViewport;p&&(u*=p.width,S*=p.height)}(R||this.alwaysForcePOT)&&(this._options.width||(u=T.needPOTTextures?D.a.GetExponentOfTwo(u,x,this.scaleMode):u),this._options.height||(S=T.needPOTTextures?D.a.GetExponentOfTwo(S,x,this.scaleMode):S)),(this.width!==u||this.height!==S)&&this._resize(u,S,r,R,f),this._textures.forEach(function(g){g.samples!==v.samples&&v._engine.updateRenderTargetTextureSampleCount(g,v.samples)}),this._flushTextureCache(),this._renderId++}var c;if(this._shareOutputWithPostProcess)c=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)c=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{c=this.inputTexture;for(var E=void 0,A=0;A<this._textureCache.length;A++)if(this._textureCache[A].texture===c){E=this._textureCache[A];break}E&&(E.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(M/u,b/S),this._engine.bindFramebuffer(c,0,M,b,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(c,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(r),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:d.clearColor,d._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),c},Object.defineProperty(i.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),i.prototype.isReady=function(){return this._effect&&this._effect.isReady()},i.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var r;return this._shareOutputWithPostProcess?r=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?r=this._forcedOutputTexture:r=this.inputTexture,this._effect._bindTexture("textureSampler",r),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},i.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},i.prototype._disposeTextureCache=function(){for(var r=this._textureCache.length-1;r>=0;r--)this._engine._releaseTexture(this._textureCache[r].texture);this._textureCache.length=0},i.prototype.setPrePassRenderer=function(r){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=r.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},i.prototype.dispose=function(r){r=r||this._camera,this._disposeTextures();var s;if(this._scene&&(s=this._scene.postProcesses.indexOf(this),s!==-1&&this._scene.postProcesses.splice(s,1)),s=this._engine.postProcesses.indexOf(this),s!==-1&&this._engine.postProcesses.splice(s,1),!!r){if(r.detachPostProcess(this),s=r._postProcesses.indexOf(this),s===0&&r._postProcesses.length>0){var f=this._camera._getFirstPostProcess();f&&f.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},i.prototype.serialize=function(){var r=n.a.Serialize(this),s=this.getCamera()||this._scene&&this._scene.activeCamera;return r.customType="BABYLON."+this.getClassName(),r.cameraId=s?s.id:null,r.reusable=this._reusable,r.textureType=this._textureType,r.fragmentUrl=this._fragmentUrl,r.parameters=this._parameters,r.samplers=this._samplers,r.options=this._options,r.defines=this._postProcessDefines,r.textureFormat=this._textureFormat,r.vertexUrl=this._vertexUrl,r.indexParameters=this._indexParameters,r},i.prototype.clone=function(){var r=this.serialize();r._engine=this._engine,r.cameraId=null;var s=i.Parse(r,this._scene,"");return s?(s.onActivateObservable=this.onActivateObservable.clone(),s.onSizeChangedObservable=this.onSizeChangedObservable.clone(),s.onApplyObservable=this.onApplyObservable.clone(),s.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),s.onAfterRenderObservable=this.onAfterRenderObservable.clone(),s._prePassEffectConfiguration=this._prePassEffectConfiguration,s):null},i.Parse=function(r,s,f){var v=e.a.GetClass(r.customType);if(!v||!v._Parse)return null;var d=s?s.getCameraByID(r.cameraId):null;return v._Parse(r,d,s,f)},i._Parse=function(r,s,f,v){return n.a.Parse(function(){return new i(r.name,r.fragmentUrl,r.parameters,r.samplers,r.options,s,r.renderTargetSamplingMode,r._engine,r.reusable,r.defines,r.textureType,r.vertexUrl,r.indexParameters,!1,r.textureFormat)},r,f,v)},Object(l.c)([Object(n.c)()],i.prototype,"uniqueId",void 0),Object(l.c)([Object(n.c)()],i.prototype,"name",void 0),Object(l.c)([Object(n.c)()],i.prototype,"width",void 0),Object(l.c)([Object(n.c)()],i.prototype,"height",void 0),Object(l.c)([Object(n.c)()],i.prototype,"renderTargetSamplingMode",void 0),Object(l.c)([Object(n.f)()],i.prototype,"clearColor",void 0),Object(l.c)([Object(n.c)()],i.prototype,"autoClear",void 0),Object(l.c)([Object(n.c)()],i.prototype,"alphaMode",void 0),Object(l.c)([Object(n.c)()],i.prototype,"alphaConstants",void 0),Object(l.c)([Object(n.c)()],i.prototype,"enablePixelPerfectMode",void 0),Object(l.c)([Object(n.c)()],i.prototype,"forceFullscreenViewport",void 0),Object(l.c)([Object(n.c)()],i.prototype,"scaleMode",void 0),Object(l.c)([Object(n.c)()],i.prototype,"alwaysForcePOT",void 0),Object(l.c)([Object(n.c)("samples")],i.prototype,"_samples",void 0),Object(l.c)([Object(n.c)()],i.prototype,"adaptScaleToCurrentViewport",void 0),i}();e.a.RegisteredTypes["BABYLON.PostProcess"]=t},458:function(te,j,a){"use strict";a.d(j,"a",function(){return i});var l=a(434),o=a(438),y=a(443),O=a(436),h=a(442),D=a(590),m=a(591),n=a(500),e=a(522),t=a(445),i=function(r){Object(l.d)(s,r);function s(f,v,d,T,x,M,b,C,u,S,R,p,c,E){x===void 0&&(x=!0),M===void 0&&(M=0),b===void 0&&(b=!1),C===void 0&&(C=h.a.TRILINEAR_SAMPLINGMODE),u===void 0&&(u=!0),S===void 0&&(S=!1),R===void 0&&(R=!1),p===void 0&&(p=5),c===void 0&&(c=!1);var A,g=r.call(this,null,d,!T,void 0,C,void 0,void 0,void 0,void 0,p)||this;return g.renderParticles=!0,g.renderSprites=!1,g.ignoreCameraViewport=!1,g.onBeforeBindObservable=new o.c,g.onAfterUnbindObservable=new o.c,g.onBeforeRenderObservable=new o.c,g.onAfterRenderObservable=new o.c,g.onClearObservable=new o.c,g.onResizeObservable=new o.c,g._currentRefreshId=-1,g._refreshRate=1,g._samples=1,g.boundingBoxPosition=O.e.Zero(),d=g.getScene(),!d||(g._coordinatesMode=h.a.PROJECTION_MODE,g.renderList=new Array,g.name=f,g.isRenderTarget=!0,g._initialSizeParameter=v,g._processSizeParameter(v),g._resizeObserver=g.getScene().getEngine().onResizeObservable.add(function(){}),g._generateMipMaps=!!T,g._doNotChangeAspectRatio=x,g._renderingManager=new m.b(d),g._renderingManager._useSceneAutoClearSetup=!0,R)||(g._renderTargetOptions={generateMipMaps:T,type:M,format:(A=g._format)!==null&&A!==void 0?A:void 0,samplingMode:g.samplingMode,generateDepthBuffer:u,generateStencilBuffer:S,samples:E},g.samplingMode===h.a.NEAREST_SAMPLINGMODE&&(g.wrapU=h.a.CLAMP_ADDRESSMODE,g.wrapV=h.a.CLAMP_ADDRESSMODE),c||(b?(g._texture=d.getEngine().createRenderTargetCubeTexture(g.getRenderSize(),g._renderTargetOptions),g.coordinatesMode=h.a.INVCUBIC_MODE,g._textureMatrix=O.a.Identity()):g._texture=d.getEngine().createRenderTargetTexture(g._size,g._renderTargetOptions),E!==void 0&&(g.samples=E))),g}return Object.defineProperty(s.prototype,"renderList",{get:function(){return this._renderList},set:function(f){this._renderList=f,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),s.prototype._hookArray=function(f){var v=this,d=f.push;f.push=function(){for(var x=[],M=0;M<arguments.length;M++)x[M]=arguments[M];var b=f.length===0,C=d.apply(f,x);return b&&v.getScene()&&v.getScene().meshes.forEach(function(u){u._markSubMeshesAsLightDirty()}),C};var T=f.splice;f.splice=function(x,M){var b=T.apply(f,[x,M]);return f.length===0&&v.getScene().meshes.forEach(function(C){C._markSubMeshesAsLightDirty()}),b}},Object.defineProperty(s.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onAfterUnbind",{set:function(f){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onBeforeRender",{set:function(f){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onAfterRender",{set:function(f){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"onClear",{set:function(f){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),s.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(s.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(f){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(f))){this._boundingBoxSize=f;var v=this.getScene();v&&v.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"depthStencilTexture",{get:function(){var f;return((f=this.getInternalTexture())===null||f===void 0?void 0:f._depthStencilTexture)||null},enumerable:!1,configurable:!0}),s.prototype.createDepthStencilTexture=function(f,v,d,T){var x;f===void 0&&(f=0),v===void 0&&(v=!0),d===void 0&&(d=!1),T===void 0&&(T=1);var M=this.getInternalTexture();if(!(!this.getScene()||!M)){(x=M._depthStencilTexture)===null||x===void 0||x.dispose();var b=this.getScene().getEngine();M._depthStencilTexture=b.createDepthStencilTexture(this._size,{bilinearFiltering:v,comparisonFunction:f,generateStencil:d,isCube:this.isCube,samples:T})}},s.prototype._processSizeParameter=function(f){if(f.ratio){this._sizeRatio=f.ratio;var v=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(v.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(v.getRenderHeight(),this._sizeRatio)}}else this._size=f},Object.defineProperty(s.prototype,"samples",{get:function(){return this._samples},set:function(f){if(this._samples!==f){var v=this.getScene();!v||(this._samples=v.getEngine().updateRenderTargetTextureSampleCount(this._texture,f))}},enumerable:!1,configurable:!0}),s.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(s.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(f){this._refreshRate=f,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),s.prototype.addPostProcess=function(f){if(!this._postProcessManager){var v=this.getScene();if(!v)return;this._postProcessManager=new D.a(v),this._postProcesses=new Array}this._postProcesses.push(f),this._postProcesses[0].autoClear=!1},s.prototype.clearPostProcesses=function(f){if(f===void 0&&(f=!1),!!this._postProcesses){if(f)for(var v=0,d=this._postProcesses;v<d.length;v++){var T=d[v];T.dispose()}this._postProcesses=[]}},s.prototype.removePostProcess=function(f){if(!!this._postProcesses){var v=this._postProcesses.indexOf(f);v!==-1&&(this._postProcesses.splice(v,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},s.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},s.prototype.getRenderSize=function(){return this.getRenderWidth()},s.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},s.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},s.prototype.getRenderLayers=function(){var f=this._size.layers;return f||0},Object.defineProperty(s.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),s.prototype.scale=function(f){var v=Math.max(1,this.getRenderSize()*f);this.resize(v)},s.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:r.prototype.getReflectionTextureMatrix.call(this)},s.prototype.resize=function(f){var v=this.isCube;this.releaseInternalTexture();var d=this.getScene();!d||(this._processSizeParameter(f),v?this._texture=d.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=d.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},s.prototype.render=function(f,v){f===void 0&&(f=!1),v===void 0&&(v=!1);var d=this.getScene();if(!!d){var T=d.getEngine();if(this.useCameraPostProcesses!==void 0&&(f=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var x=0;x<this._waitingRenderList.length;x++){var M=this._waitingRenderList[x],b=d.getMeshByID(M);b&&this.renderList.push(b)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var d=this.getScene();if(!d)return;for(var C=d.meshes,x=0;x<C.length;x++){var u=C[x];this.renderListPredicate(u)&&this.renderList.push(u)}}this.onBeforeBindObservable.notifyObservers(this);var S;if(this.activeCamera?(S=this.activeCamera,T.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==d.activeCamera&&d.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(S=d.activeCamera,S&&T.setViewport(S.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var R=0;R<this.getRenderLayers();R++)this.renderToTarget(0,f,v,R,S),d.incrementRenderId(),d.resetCachedMaterial();else if(this.isCube)for(var p=0;p<6;p++)this.renderToTarget(p,f,v,void 0,S),d.incrementRenderId(),d.resetCachedMaterial();else this.renderToTarget(0,f,v,void 0,S);this.onAfterUnbindObservable.notifyObservers(this),d.activeCamera&&((d.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==d.activeCamera)&&d.setTransformMatrix(d.activeCamera.getViewMatrix(),d.activeCamera.getProjectionMatrix(!0)),T.setViewport(d.activeCamera.viewport)),d.resetCachedMaterial()}},s.prototype._bestReflectionRenderTargetDimension=function(f,v){var d=128,T=f*v,x=t.a.NearestPOT(T+d*d/(d+T));return Math.min(t.a.FloorPOT(f),x)},s.prototype._prepareRenderingManager=function(f,v,d,T){var x=this.getScene();if(!!x){this._renderingManager.reset();for(var M=x.getRenderId(),b=0;b<v;b++){var C=f[b];if(C&&!C.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(C,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!C.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!C._internalAbstractMeshDataInfo._currentLODIsUpToDate&&x.activeCamera&&(C._internalAbstractMeshDataInfo._currentLOD=x.customLODSelector?x.customLODSelector(C,x.activeCamera):C.getLOD(x.activeCamera),C._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!C._internalAbstractMeshDataInfo._currentLOD)continue;var u=C._internalAbstractMeshDataInfo._currentLOD;u._preActivateForIntermediateRendering(M);var S=void 0;if(T&&d?S=(C.layerMask&d.layerMask)==0:S=!1,C.isEnabled()&&C.isVisible&&C.subMeshes&&!S&&(u!==C&&u._activate(M,!0),C._activate(M,!0)&&C.subMeshes.length)){C.isAnInstance?C._internalAbstractMeshDataInfo._actAsRegularMesh&&(u=C):u._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,u._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var R=0;R<u.subMeshes.length;R++){var p=u.subMeshes[R];this._renderingManager.dispatch(p,u)}}}}for(var c=0;c<x.particleSystems.length;c++){var E=x.particleSystems[c],A=E.emitter;!E.isStarted()||!A||!A.position||!A.isEnabled()||f.indexOf(A)>=0&&this._renderingManager.dispatchParticles(E)}}},s.prototype._bindFrameBuffer=function(f,v){f===void 0&&(f=0),v===void 0&&(v=0);var d=this.getScene();if(!!d){var T=d.getEngine();this._texture&&T.bindFramebuffer(this._texture,this.isCube?f:void 0,void 0,void 0,this.ignoreCameraViewport,0,v)}},s.prototype.unbindFrameBuffer=function(f,v){var d=this;!this._texture||f.unBindFramebuffer(this._texture,this.isCube,function(){d.onAfterRenderObservable.notifyObservers(v)})},s.prototype._prepareFrame=function(f,v,d,T){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!T||!f.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(v,d)},s.prototype.renderToTarget=function(f,v,d,T,x){T===void 0&&(T=0),x===void 0&&(x=null);var M=this.getScene();if(!!M){var b=M.getEngine();if(!!this._texture){b._debugPushGroup("render to face #"+f+" layer #"+T,1),this._prepareFrame(M,f,T,v),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(T):this.onBeforeRenderObservable.notifyObservers(f);var C=null,u=this.renderList?this.renderList:M.getActiveMeshes().data,S=this.renderList?this.renderList.length:M.getActiveMeshes().length;this.getCustomRenderList&&(C=this.getCustomRenderList(this.is2DArray?T:f,u,S)),C?this._prepareRenderingManager(C,C.length,x,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(u,S,x,!this.renderList),this._defaultRenderListPrepared=!0),C=u);for(var R=0,p=M._beforeRenderTargetClearStage;R<p.length;R++){var c=p[R];c.action(this,f,T)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(b):b.clear(this.clearColor||M.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||M.updateTransformMatrix(!0);for(var E=0,A=M._beforeRenderTargetDrawStage;E<A.length;E++){var c=A[E];c.action(this,f,T)}this._renderingManager.render(this.customRenderFunction,C,this.renderParticles,this.renderSprites);for(var g=0,H=M._afterRenderTargetDrawStage;g<H.length;g++){var c=H[g];c.action(this,f,T)}var U=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,f,this._postProcesses,this.ignoreCameraViewport):v&&M.postProcessManager._finalizeFrame(!1,this._texture,f),this._texture.generateMipMaps=U,this._doNotChangeAspectRatio||M.updateTransformMatrix(!0),d&&y.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),b),this.unbindFrameBuffer(b,f),this.isCube&&f===5&&b.generateMipMapsForCubemap(this._texture),b._debugPopGroup(1)}}},s.prototype.setRenderingOrder=function(f,v,d,T){v===void 0&&(v=null),d===void 0&&(d=null),T===void 0&&(T=null),this._renderingManager.setRenderingOrder(f,v,d,T)},s.prototype.setRenderingAutoClearDepthStencil=function(f,v){this._renderingManager.setRenderingAutoClearDepthStencil(f,v),this._renderingManager._useSceneAutoClearSetup=!1},s.prototype.clone=function(){var f=this.getSize(),v=new s(this.name,f,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return v.hasAlpha=this.hasAlpha,v.level=this.level,v.coordinatesMode=this.coordinatesMode,this.renderList&&(v.renderList=this.renderList.slice(0)),v},s.prototype.serialize=function(){if(!this.name)return null;var f=r.prototype.serialize.call(this);if(f.renderTargetSize=this.getRenderSize(),f.renderList=[],this.renderList)for(var v=0;v<this.renderList.length;v++)f.renderList.push(this.renderList[v].id);return f},s.prototype.disposeFramebufferObjects=function(){var f=this.getInternalTexture(),v=this.getScene();f&&v&&v.getEngine()._releaseFramebufferObjects(f)},s.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var f=this.getScene();if(!!f){var v=f.customRenderTargets.indexOf(this);v>=0&&f.customRenderTargets.splice(v,1);for(var d=0,T=f.cameras;d<T.length;d++){var x=T[d];v=x.customRenderTargets.indexOf(this),v>=0&&x.customRenderTargets.splice(v,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),r.prototype.dispose.call(this)}},s.prototype._rebuild=function(){this.refreshRate===s.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=s.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},s.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},s.prototype.getViewCount=function(){return 1},s.REFRESHRATE_RENDER_ONCE=0,s.REFRESHRATE_RENDER_ONEVERYFRAME=1,s.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,s}(h.a);h.a._CreateRenderTargetTexture=function(r,s,f,v){return new i(r,s,f,v)}},466:function(te,j,a){"use strict";a.d(j,"a",function(){return o});var l=a(443),o=function(){function y(O,h,D,m){this._name=h,this._singleInstance=m||!0,this._getPostProcesses=D,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(y.prototype,"isSupported",{get:function(){for(var O in this._postProcesses)if(this._postProcesses.hasOwnProperty(O)){for(var h=this._postProcesses[O],D=0;D<h.length;D++)if(!h[D].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),y.prototype._update=function(){},y.prototype._attachCameras=function(O){var h=this,D,m=l.b.MakeArray(O||this._cameras);if(!!m)for(var n=0;n<m.length;n++){var e=m[n];if(!!e){var t=e.name;if(this._singleInstance?D=0:D=t,!this._postProcesses[D]){var i=this._getPostProcesses();i&&(this._postProcesses[D]=Array.isArray(i)?i:[i])}this._indicesForCamera[t]||(this._indicesForCamera[t]=[]),this._postProcesses[D].forEach(function(r){var s=e.attachPostProcess(r);h._indicesForCamera[t].push(s)}),this._cameras[t]||(this._cameras[t]=e)}}},y.prototype._detachCameras=function(O){var h=l.b.MakeArray(O||this._cameras);if(!!h)for(var D=0;D<h.length;D++){var m=h[D],n=m.name,e=this._postProcesses[this._singleInstance?0:n];e&&e.forEach(function(t){m.detachPostProcess(t)}),this._cameras[n]&&(this._cameras[n]=null)}},y.prototype._enable=function(O){var h=this,D=l.b.MakeArray(O||this._cameras);if(!!D)for(var m=0;m<D.length;m++)for(var n=D[m],e=n.name,t=0;t<this._indicesForCamera[e].length;t++)(n._postProcesses[this._indicesForCamera[e][t]]===void 0||n._postProcesses[this._indicesForCamera[e][t]]===null)&&this._postProcesses[this._singleInstance?0:e].forEach(function(i){D[m].attachPostProcess(i,h._indicesForCamera[e][t])})},y.prototype._disable=function(O){var h=l.b.MakeArray(O||this._cameras);if(!!h)for(var D=0;D<h.length;D++){var m=h[D],n=m.name;this._postProcesses[this._singleInstance?0:n].forEach(function(e){m.detachPostProcess(e)})}},y.prototype.getPostProcesses=function(O){return this._singleInstance?this._postProcesses[0]:O?this._postProcesses[O.name]:null},y}()},472:function(te,j,a){"use strict";a.d(j,"a",function(){return c});var l=a(434),o=a(444),y=a(442),O=a(435),h="kernelBlurVaryingDeclaration",D="varying vec2 sampleCoord{X};";O.a.IncludesShadersStore[h]=D;var m={name:h,shader:D},n=a(535),e="kernelBlurFragment",t=`#ifdef DOF
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
#endif`;O.a.IncludesShadersStore[e]=t;var i={name:e,shader:t},r="kernelBlurFragment2",s=`#ifdef DOF
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
#endif`;O.a.IncludesShadersStore[r]=s;var f={name:r,shader:s},v="kernelBlurPixelShader",d=`
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
}`;O.a.ShadersStore[v]=d;var T={name:v,shader:d},x="kernelBlurVertex",M="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";O.a.IncludesShadersStore[x]=M;var b={name:x,shader:M},C="kernelBlurVertexShader",u=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;O.a.ShadersStore[C]=u;var S={name:C,shader:u},R=a(437),p=a(439),c=function(E){Object(l.d)(A,E);function A(g,H,U,I,W,Y,$,G,J,ne,ee){Y===void 0&&(Y=y.a.BILINEAR_SAMPLINGMODE),J===void 0&&(J=0),ne===void 0&&(ne=""),ee===void 0&&(ee=!1);var oe=E.call(this,g,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],I,W,Y,$,G,null,J,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return oe.blockCompilation=ee,oe._packedFloat=!1,oe._staticDefines="",oe._staticDefines=ne,oe.direction=H,oe.onApplyObservable.add(function(q){oe._outputTexture?q.setFloat2("delta",1/oe._outputTexture.width*oe.direction.x,1/oe._outputTexture.height*oe.direction.y):q.setFloat2("delta",1/oe.width*oe.direction.x,1/oe.height*oe.direction.y)}),oe.kernel=U,oe}return Object.defineProperty(A.prototype,"kernel",{get:function(){return this._idealKernel},set:function(g){this._idealKernel!==g&&(g=Math.max(g,1),this._idealKernel=g,this._kernel=this._nearestBestKernel(g),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(g){this._packedFloat!==g&&(this._packedFloat=g,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),A.prototype.getClassName=function(){return"BlurPostProcess"},A.prototype.updateEffect=function(g,H,U,I,W,Y){g===void 0&&(g=null),H===void 0&&(H=null),U===void 0&&(U=null),this._updateParameters(W,Y)},A.prototype._updateParameters=function(g,H){for(var U=this._kernel,I=(U-1)/2,W=[],Y=[],$=0,G=0;G<U;G++){var J=G/(U-1),ne=this._gaussianWeight(J*2-1);W[G]=G-I,Y[G]=ne,$+=ne}for(var G=0;G<Y.length;G++)Y[G]/=$;for(var ee=[],oe=[],q=[],G=0;G<=I;G+=2){var X=Math.min(G+1,Math.floor(I)),ge=G===X;if(ge)q.push({o:W[G],w:Y[G]});else{var _e=X===I,ie=Y[G]+Y[X]*(_e?.5:1),de=W[G]+1/(1+Y[G]/Y[X]);de===0?(q.push({o:W[G],w:Y[G]}),q.push({o:W[G+1],w:Y[G+1]})):(q.push({o:de,w:ie}),q.push({o:-de,w:ie}))}}for(var G=0;G<q.length;G++)oe[G]=q[G].o,ee[G]=q[G].w;W=oe,Y=ee;var se=this.getEngine().getCaps().maxVaryingVectors,me=Math.max(se,0)-1,le=Math.min(W.length,me),V="";V+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(V+="#define CENTER_WEIGHT "+this._glslFloat(Y[le-1])+`\r
`,le--);for(var G=0;G<le;G++)V+="#define KERNEL_OFFSET"+G+" "+this._glslFloat(W[G])+`\r
`,V+="#define KERNEL_WEIGHT"+G+" "+this._glslFloat(Y[G])+`\r
`;for(var P=0,G=me;G<W.length;G++)V+="#define KERNEL_DEP_OFFSET"+P+" "+this._glslFloat(W[G])+`\r
`,V+="#define KERNEL_DEP_WEIGHT"+P+" "+this._glslFloat(Y[G])+`\r
`,P++;this.packedFloat&&(V+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,E.prototype.updateEffect.call(this,V,null,null,{varyingCount:le,depCount:P},g,H)},A.prototype._nearestBestKernel=function(g){for(var H=Math.round(g),U=0,I=[H,H-1,H+1,H-2,H+2];U<I.length;U++){var W=I[U];if(W%2!=0&&Math.floor(W/2)%2==0&&W>0)return Math.max(W,3)}return Math.max(H,3)},A.prototype._gaussianWeight=function(g){var H=1/3,U=Math.sqrt(2*Math.PI)*H,I=-(g*g/(2*H*H)),W=1/U*Math.exp(I);return W},A.prototype._glslFloat=function(g,H){return H===void 0&&(H=8),g.toFixed(H).replace(/0+$/,"")},A._Parse=function(g,H,U,I){return p.a.Parse(function(){return new A(g.name,g.direction,g.kernel,g.options,H,g.renderTargetSamplingMode,U.getEngine(),g.reusable,g.textureType,void 0,!1)},g,U,I)},Object(l.c)([Object(p.c)("kernel")],A.prototype,"_kernel",void 0),Object(l.c)([Object(p.c)("packedFloat")],A.prototype,"_packedFloat",void 0),Object(l.c)([Object(p.n)()],A.prototype,"direction",void 0),A}(o.a);R.a.RegisteredTypes["BABYLON.BlurPostProcess"]=c},479:function(te,j,a){"use strict";a.d(j,"a",function(){return D});var l=a(434),o=a(440),y=a(442),O=a(532),h=a(596),D=function(m){Object(l.d)(n,m);function n(e,t,i,r,s,f,v){i===void 0&&(i=null),r===void 0&&(r=!1),s===void 0&&(s=3),f===void 0&&(f=5);var d=m.call(this,null,i,!r,v,s,void 0,void 0,void 0,void 0,f)||this;d.name=e,d.wrapU=y.a.CLAMP_ADDRESSMODE,d.wrapV=y.a.CLAMP_ADDRESSMODE,d._generateMipMaps=r;var T=d._getEngine();if(!T)return d;t.getContext?(d._canvas=t,d._texture=T.createDynamicTexture(t.width,t.height,r,s)):(d._canvas=h.a.CreateCanvas(1,1),t.width||t.width===0?d._texture=T.createDynamicTexture(t.width,t.height,r,s):d._texture=T.createDynamicTexture(t,t,r,s));var x=d.getSize();return d._canvas.width=x.width,d._canvas.height=x.height,d._context=d._canvas.getContext("2d"),d}return n.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(n.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype._recreate=function(e){this._canvas.width=e.width,this._canvas.height=e.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(e.width,e.height,this._generateMipMaps,this.samplingMode)},n.prototype.scale=function(e){var t=this.getSize();t.width*=e,t.height*=e,this._recreate(t)},n.prototype.scaleTo=function(e,t){var i=this.getSize();i.width=e,i.height=t,this._recreate(i)},n.prototype.getContext=function(){return this._context},n.prototype.clear=function(){var e=this.getSize();this._context.fillRect(0,0,e.width,e.height)},n.prototype.update=function(e,t){t===void 0&&(t=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,e===void 0?!0:e,t,this._format||void 0)},n.prototype.drawText=function(e,t,i,r,s,f,v,d){d===void 0&&(d=!0);var T=this.getSize();if(f&&(this._context.fillStyle=f,this._context.fillRect(0,0,T.width,T.height)),this._context.font=r,t==null){var x=this._context.measureText(e);t=(T.width-x.width)/2}if(i==null){var M=parseInt(r.replace(/\D/g,""));i=T.height/2+M/3.65}this._context.fillStyle=s||"",this._context.fillText(e,t,i),d&&this.update(v)},n.prototype.clone=function(){var e=this.getScene();if(!e)return this;var t=this.getSize(),i=new n(this.name,t,e,this._generateMipMaps);return i.hasAlpha=this.hasAlpha,i.level=this.level,i.wrapU=this.wrapU,i.wrapV=this.wrapV,i},n.prototype.serialize=function(){var e=this.getScene();e&&!e.isReady()&&o.a.Warn("The scene must be ready before serializing the dynamic texture");var t=m.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(t.base64String=this._canvas.toDataURL()),t.invertY=this._invertY,t.samplingMode=this.samplingMode,t},n.prototype._IsCanvasElement=function(e){return e.toDataURL!==void 0},n.prototype._rebuild=function(){this.update()},n}(y.a)},481:function(te,j,a){"use strict";a.d(j,"a",function(){return O});var l=a(434),o=a(443),y=a(439),O=function(){function h(D,m){this.engine=D,this._name=m,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(h.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),h.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(h.prototype,"isSupported",{get:function(){for(var D in this._renderEffects)if(this._renderEffects.hasOwnProperty(D)&&!this._renderEffects[D].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),h.prototype.addEffect=function(D){this._renderEffects[D._name]=D},h.prototype._rebuild=function(){},h.prototype._enableEffect=function(D,m){var n=this._renderEffects[D];!n||n._enable(o.b.MakeArray(m||this._cameras))},h.prototype._disableEffect=function(D,m){var n=this._renderEffects[D];!n||n._disable(o.b.MakeArray(m||this._cameras))},h.prototype._attachCameras=function(D,m){var n=o.b.MakeArray(D||this._cameras);if(!!n){var e=[],t;for(t=0;t<n.length;t++){var i=n[t];if(!!i){var r=i.name;this._cameras.indexOf(i)===-1?this._cameras[r]=i:m&&e.push(t)}}for(t=0;t<e.length;t++)n.splice(e[t],1);for(var s in this._renderEffects)this._renderEffects.hasOwnProperty(s)&&this._renderEffects[s]._attachCameras(n)}},h.prototype._detachCameras=function(D){var m=o.b.MakeArray(D||this._cameras);if(!!m){for(var n in this._renderEffects)this._renderEffects.hasOwnProperty(n)&&this._renderEffects[n]._detachCameras(m);for(var e=0;e<m.length;e++)this._cameras.splice(this._cameras.indexOf(m[e]),1)}},h.prototype._update=function(){for(var D in this._renderEffects)this._renderEffects.hasOwnProperty(D)&&this._renderEffects[D]._update();for(var m=0;m<this._cameras.length;m++)if(!!this._cameras[m]){var n=this._cameras[m].name;this._renderEffectsForIsolatedPass[n]&&this._renderEffectsForIsolatedPass[n]._update()}},h.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},h.prototype._enableMSAAOnFirstPostProcess=function(D){if(!this.engine._features.supportMSAA)return!1;var m=Object.keys(this._renderEffects);if(m.length>0){var n=this._renderEffects[m[0]].getPostProcesses();n&&(n[0].samples=D)}return!0},h.prototype.setPrePassRenderer=function(D){return!1},h.prototype.dispose=function(){},Object(l.c)([Object(y.c)()],h.prototype,"_name",void 0),h}()},482:function(te,j,a){"use strict";a.d(j,"a",function(){return O});var l=a(452),o=a(548),y=a(449);Object.defineProperty(y.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var h=this._getComponent(l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);h||(h=new O(this),this._addComponent(h)),this._postProcessRenderPipelineManager=new o.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var O=function(){function h(D){this.name=l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=D}return h.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(l.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},h.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},h.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},h.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},h}()},486:function(te,j,a){"use strict";a.d(j,"b",function(){return s}),a.d(j,"a",function(){return f});var l=a(434),o=a(444),y=a(445),O=a(435),h="passPixelShader",D=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;O.a.ShadersStore[h]=D;var m={name:h,shader:D},n="passCubePixelShader",e=`
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
}`;O.a.ShadersStore[n]=e;var t={name:n,shader:e},i=a(437),r=a(439),s=function(v){Object(l.d)(d,v);function d(T,x,M,b,C,u,S,R){return M===void 0&&(M=null),S===void 0&&(S=0),R===void 0&&(R=!1),v.call(this,T,"pass",null,null,x,M,b,C,u,void 0,S,void 0,null,R)||this}return d.prototype.getClassName=function(){return"PassPostProcess"},d._Parse=function(T,x,M,b){return r.a.Parse(function(){return new d(T.name,T.options,x,T.renderTargetSamplingMode,T._engine,T.reusable)},T,M,b)},d}(o.a);i.a.RegisteredTypes["BABYLON.PassPostProcess"]=s;var f=function(v){Object(l.d)(d,v);function d(T,x,M,b,C,u,S,R){M===void 0&&(M=null),S===void 0&&(S=0),R===void 0&&(R=!1);var p=v.call(this,T,"passCube",null,null,x,M,b,C,u,"#define POSITIVEX",S,void 0,null,R)||this;return p._face=0,p}return Object.defineProperty(d.prototype,"face",{get:function(){return this._face},set:function(T){if(!(T<0||T>5))switch(this._face=T,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),d.prototype.getClassName=function(){return"PassCubePostProcess"},d._Parse=function(T,x,M,b){return r.a.Parse(function(){return new d(T.name,T.options,x,T.renderTargetSamplingMode,T._engine,T.reusable)},T,M,b)},d}(o.a);y.a._RescalePostProcessFactory=function(v){return new s("rescale",1,null,2,v,!1,0)}},498:function(te,j,a){"use strict";a.d(j,"a",function(){return m});var l=a(434),o=a(439),y=a(436),O=a(441),h=a(453),D=a(484);h.a.AddNodeConstructor("Light_Type_3",function(n,e){return function(){return new m(n,y.e.Zero(),e)}});var m=function(n){Object(l.d)(e,n);function e(t,i,r){var s=n.call(this,t,r)||this;return s.groundColor=new O.a(0,0,0),s.direction=i||y.e.Up(),s}return e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.getClassName=function(){return"HemisphericLight"},e.prototype.setDirectionToTarget=function(t){return this.direction=y.e.Normalize(t.subtract(y.e.Zero())),this.direction},e.prototype.getShadowGenerator=function(){return null},e.prototype.transferToEffect=function(t,i){var r=y.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",r.x,r.y,r.z,0,i),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),i),this},e.prototype.transferToNodeMaterialEffect=function(t,i){var r=y.e.Normalize(this.direction);return t.setFloat3(i,r.x,r.y,r.z),this},e.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=y.a.Identity()),this._worldMatrix},e.prototype.getTypeID=function(){return D.a.LIGHTTYPEID_HEMISPHERICLIGHT},e.prototype.prepareLightSpecificDefines=function(t,i){t["HEMILIGHT"+i]=!0},Object(l.c)([Object(o.e)()],e.prototype,"groundColor",void 0),Object(l.c)([Object(o.o)()],e.prototype,"direction",void 0),e}(D.a)},500:function(te,j,a){"use strict";var l=a(434),o=a(456),y=a(440),O=a(595),h=a(467);h.a.prototype.createRenderTargetTexture=function(D,m){var n=new O.a;m!==void 0&&typeof m=="object"?(n.generateMipMaps=m.generateMipMaps,n.generateDepthBuffer=!!m.generateDepthBuffer,n.generateStencilBuffer=!!m.generateStencilBuffer,n.type=m.type===void 0?0:m.type,n.samplingMode=m.samplingMode===void 0?3:m.samplingMode,n.format=m.format===void 0?5:m.format):(n.generateMipMaps=m,n.generateDepthBuffer=!0,n.generateStencilBuffer=!1,n.type=0,n.samplingMode=3,n.format=5),(n.type===1&&!this._caps.textureFloatLinearFiltering||n.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(n.samplingMode=1),n.type===1&&!this._caps.textureFloat&&(n.type=0,y.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var e=this._gl,t=new o.a(this,o.b.RenderTarget),i=D.width||D,r=D.height||D,s=D.layers||0,f=this._getSamplingParameters(n.samplingMode,!!n.generateMipMaps),v=s!==0?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,d=this._getRGBABufferInternalSizedFormat(n.type,n.format),T=this._getInternalFormat(n.format),x=this._getWebGLTextureType(n.type);this._bindTextureDirectly(v,t),s!==0?(t.is2DArray=!0,e.texImage3D(v,0,d,i,r,s,0,T,x,null)):e.texImage2D(v,0,d,i,r,0,T,x,null),e.texParameteri(v,e.TEXTURE_MAG_FILTER,f.mag),e.texParameteri(v,e.TEXTURE_MIN_FILTER,f.min),e.texParameteri(v,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(v,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n.generateMipMaps&&this._gl.generateMipmap(v),this._bindTextureDirectly(v,null);var M=this._currentFramebuffer,b=e.createFramebuffer();return this._bindUnboundFramebuffer(b),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!n.generateStencilBuffer,n.generateDepthBuffer,i,r),t.is2DArray||e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(M),t._framebuffer=b,t.baseWidth=i,t.baseHeight=r,t.width=i,t.height=r,t.depth=s,t.isReady=!0,t.samples=1,t.generateMipMaps=!!n.generateMipMaps,t.samplingMode=n.samplingMode,t.type=n.type,t.format=n.format,t._generateDepthBuffer=n.generateDepthBuffer,t._generateStencilBuffer=!!n.generateStencilBuffer,this._internalTexturesCache.push(t),t},h.a.prototype.createDepthStencilTexture=function(D,m){if(m.isCube){var n=D.width||D;return this._createDepthStencilCubeTexture(n,m)}else return this._createDepthStencilTexture(D,m)},h.a.prototype._createDepthStencilTexture=function(D,m){var n=this._gl,e=D.layers||0,t=e!==0?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D,i=new o.a(this,o.b.Depth);if(!this._caps.depthTextureExtension)return y.a.Error("Depth texture is not supported by your browser or hardware."),i;var r=Object(l.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},m);this._bindTextureDirectly(t,i,!0),this._setupDepthStencilTexture(i,D,r.generateStencil,r.bilinearFiltering,r.comparisonFunction);var s=r.generateStencil?n.UNSIGNED_INT_24_8:n.UNSIGNED_INT,f=r.generateStencil?n.DEPTH_STENCIL:n.DEPTH_COMPONENT,v=f;return this.webGLVersion>1&&(v=r.generateStencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24),i.is2DArray?n.texImage3D(t,0,v,i.width,i.height,e,0,f,s,null):n.texImage2D(t,0,v,i.width,i.height,0,f,s,null),this._bindTextureDirectly(t,null),i}},502:function(te,j,a){"use strict";a.d(j,"a",function(){return oe});var l=a(436),o=a(447),y=a(442),O=a(538),h=a(454),D=a(441),m=a(455),n=a(533),e=a(476),t=a(459),i=a(435),r="mrtFragmentDeclaration",s=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;i.a.IncludesShadersStore[r]=s;var f={name:r,shader:s},v=a(614),d=a(615),T=a(616),x="geometryPixelShader",M=`#extension GL_EXT_draw_buffers : require
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
`;i.a.ShadersStore[x]=M;var b={name:x,shader:M},C=a(487),u=a(496),S=a(497),R=a(501),p="geometryVertexDeclaration",c=`
uniform mat4 viewProjection;
uniform mat4 view;`;i.a.IncludesShadersStore[p]=c;var E={name:p,shader:c},A=a(674),g="geometryUboDeclaration",H="#include<sceneUboDeclaration>";i.a.IncludesShadersStore[g]=H;var U={name:g,shader:H},I=a(507),W=a(508),Y=a(488),$=a(489),G=a(675),J="geometryVertexShader",ne=`precision highp float;
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
`;i.a.ShadersStore[J]=ne;var ee={name:J,shader:ne},oe=function(){function q(X,ge){ge===void 0&&(ge=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=X,this._ratio=ge,this._useUbo=X.getEngine().supportsUniformBuffers,q._SceneComponentInitialization(this._scene),this._createRenderTargets()}return q.prototype._linkPrePassRenderer=function(X){this._linkedWithPrePass=!0,this._prePassRenderer=X,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(ge){}))},q.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},q.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},q.prototype._forceTextureType=function(X,ge){X===q.POSITION_TEXTURE_TYPE?(this._positionIndex=ge,this._enablePosition=!0):X===q.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=ge,this._enableVelocity=!0):X===q.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=ge,this._enableReflectivity=!0):X===q.DEPTH_TEXTURE_TYPE?this._depthIndex=ge:X===q.NORMAL_TEXTURE_TYPE&&(this._normalIndex=ge)},q.prototype._setAttachments=function(X){this._attachments=X},q.prototype._linkInternalTexture=function(X){this._multiRenderTarget._texture=X},Object.defineProperty(q.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(X){this._multiRenderTarget.renderList=X},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),q.prototype.getTextureIndex=function(X){switch(X){case q.POSITION_TEXTURE_TYPE:return this._positionIndex;case q.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case q.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(q.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(X){this._enablePosition=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(X){this._enableVelocity=X,X||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(X){this._enableReflectivity=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),q.prototype.isReady=function(X,ge){var _e=X.getMaterial();if(_e&&_e.disableDepthWrite)return!1;var ie=[],de=[o.b.PositionKind,o.b.NormalKind],se=X.getMesh();if(_e){var me=!1;_e.needAlphaTesting()&&_e.getAlphaTestTexture()&&(ie.push("#define ALPHATEST"),ie.push("#define ALPHATEST_UV"+(_e.getAlphaTestTexture().coordinatesIndex+1)),me=!0),_e.bumpTexture&&m.a.BumpTextureEnabled&&(ie.push("#define BUMP"),ie.push("#define BUMP_UV"+(_e.bumpTexture.coordinatesIndex+1)),me=!0),this._enableReflectivity&&(_e instanceof m.a&&_e.specularTexture?(ie.push("#define HAS_SPECULAR"),ie.push("#define REFLECTIVITY_UV"+(_e.specularTexture.coordinatesIndex+1)),me=!0):_e instanceof n.a&&_e.reflectivityTexture&&(ie.push("#define HAS_REFLECTIVITY"),ie.push("#define REFLECTIVITY_UV"+(_e.reflectivityTexture.coordinatesIndex+1)),me=!0)),me&&(ie.push("#define NEED_UV"),se.isVerticesDataPresent(o.b.UVKind)&&(de.push(o.b.UVKind),ie.push("#define UV1")),se.isVerticesDataPresent(o.b.UV2Kind)&&(de.push(o.b.UV2Kind),ie.push("#define UV2")))}this._linkedWithPrePass&&(ie.push("#define PREPASS"),this._depthIndex!==-1&&(ie.push("#define DEPTH_INDEX "+this._depthIndex),ie.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(ie.push("#define NORMAL_INDEX "+this._normalIndex),ie.push("#define PREPASS_NORMAL"))),this._enablePosition&&(ie.push("#define POSITION"),ie.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(ie.push("#define VELOCITY"),ie.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(se)===-1&&ie.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(ie.push("#define REFLECTIVITY"),ie.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),se.useBones&&se.computeBonesUsingShaders?(de.push(o.b.MatricesIndicesKind),de.push(o.b.MatricesWeightsKind),se.numBoneInfluencers>4&&(de.push(o.b.MatricesIndicesExtraKind),de.push(o.b.MatricesWeightsExtraKind)),ie.push("#define NUM_BONE_INFLUENCERS "+se.numBoneInfluencers),ie.push("#define BonesPerMesh "+(se.skeleton?se.skeleton.bones.length+1:0))):ie.push("#define NUM_BONE_INFLUENCERS 0");var le=se.morphTargetManager,V=0;le&&le.numInfluencers>0&&(V=le.numInfluencers,ie.push("#define MORPHTARGETS"),ie.push("#define NUM_MORPH_INFLUENCERS "+V),le.isUsingTextureForTargets&&ie.push("#define MORPHTARGETS_TEXTURE"),h.a.PrepareAttributesForMorphTargetsInfluencers(de,se,V)),ge&&(ie.push("#define INSTANCES"),h.a.PushAttributesForInstances(de),X.getRenderingMesh().hasThinInstances&&ie.push("#define THIN_INSTANCES")),this._linkedWithPrePass?ie.push("#define RENDER_TARGET_COUNT "+this._attachments.length):ie.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var P=ie.join(`
`);return this._cachedDefines!==P&&(this._cachedDefines=P,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:de,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:P,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:V}},this._scene.getEngine())),this._effect.isReady()},q.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(q.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(X){this._multiRenderTarget.samples=X},enumerable:!1,configurable:!0}),q.prototype.dispose=function(){if(this._resizeObserver){var X=this._scene.getEngine();X.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},q.prototype._assignRenderTargetIndices=function(){var X=2;return this._enablePosition&&(this._positionIndex=X,X++),this._enableVelocity&&(this._velocityIndex=X,X++),this._enableReflectivity&&(this._reflectivityIndex=X,X++),X},q.prototype._createRenderTargets=function(){var X=this,ge=this._scene.getEngine(),_e=this._assignRenderTargetIndices();if(this._multiRenderTarget=new O.a("gBuffer",{width:ge.getRenderWidth()*this._ratio,height:ge.getRenderHeight()*this._ratio},_e,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=y.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=y.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(de){de.clear(new D.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=ge.onResizeObservable.add(function(){X._multiRenderTarget&&X._multiRenderTarget.resize({width:ge.getRenderWidth()*X._ratio,height:ge.getRenderHeight()*X._ratio})});var ie=function(de){var se=de.getRenderingMesh(),me=de.getEffectiveMesh(),le=X._scene,V=le.getEngine(),P=de.getMaterial();if(!!P){if(me._internalAbstractMeshDataInfo._isActiveIntermediate=!1,X._enableVelocity&&!X._previousTransformationMatrices[me.uniqueId]&&(X._previousTransformationMatrices[me.uniqueId]={world:l.a.Identity(),viewProjection:le.getTransformMatrix()},se.skeleton)){var w=se.skeleton.getTransformMatrices(se);X._previousBonesTransformationMatrices[se.uniqueId]=X._copyBonesTransformationMatrices(w,new Float32Array(w.length))}var B=se._getInstancesRenderList(de._id,!!de.getReplacementMesh());if(!B.mustReturn){var k=V.getCaps().instancedArrays&&(B.visibleInstances[de._id]!==null||se.hasThinInstances),Q=me.getWorldMatrix();if(X.isReady(de,k)){if(V.enableEffect(X._effect),se._bind(de,X._effect,P.fillMode),X._useUbo?(h.a.FinalizeSceneUbo(X._scene),h.a.BindSceneUniformBuffer(X._effect,X._scene.getSceneUniformBuffer())):(X._effect.setMatrix("viewProjection",le.getTransformMatrix()),X._effect.setMatrix("view",le.getViewMatrix())),P){var F,re=se._instanceDataStorage;if(!re.isFrozen&&(P.backFaceCulling||P.overrideMaterialSideOrientation!==null)){var ve=me._getWorldMatrixDeterminant();F=P.overrideMaterialSideOrientation,F==null&&(F=P.sideOrientation),ve<0&&(F=F===t.a.ClockWiseSideOrientation?t.a.CounterClockWiseSideOrientation:t.a.ClockWiseSideOrientation)}else F=re.sideOrientation;if(P._preBind(X._effect,F),P.needAlphaTesting()){var Se=P.getAlphaTestTexture();Se&&(X._effect.setTexture("diffuseSampler",Se),X._effect.setMatrix("diffuseMatrix",Se.getTextureMatrix()))}P.bumpTexture&&le.getEngine().getCaps().standardDerivatives&&m.a.BumpTextureEnabled&&(X._effect.setFloat3("vBumpInfos",P.bumpTexture.coordinatesIndex,1/P.bumpTexture.level,P.parallaxScaleBias),X._effect.setMatrix("bumpMatrix",P.bumpTexture.getTextureMatrix()),X._effect.setTexture("bumpSampler",P.bumpTexture),X._effect.setFloat2("vTangentSpaceParams",P.invertNormalMapX?-1:1,P.invertNormalMapY?-1:1)),X._enableReflectivity&&(P instanceof m.a&&P.specularTexture?(X._effect.setMatrix("reflectivityMatrix",P.specularTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",P.specularTexture)):P instanceof n.a&&P.reflectivityTexture&&(X._effect.setMatrix("reflectivityMatrix",P.reflectivityTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",P.reflectivityTexture)))}se.useBones&&se.computeBonesUsingShaders&&se.skeleton&&(X._effect.setMatrices("mBones",se.skeleton.getTransformMatrices(se)),X._enableVelocity&&X._effect.setMatrices("mPreviousBones",X._previousBonesTransformationMatrices[se.uniqueId])),h.a.BindMorphTargetParameters(se,X._effect),se.morphTargetManager&&se.morphTargetManager.isUsingTextureForTargets&&se.morphTargetManager._bind(X._effect),X._enableVelocity&&(X._effect.setMatrix("previousWorld",X._previousTransformationMatrices[me.uniqueId].world),X._effect.setMatrix("previousViewProjection",X._previousTransformationMatrices[me.uniqueId].viewProjection)),se._processRendering(me,de,X._effect,P.fillMode,B,k,function(Ae,Ce){return X._effect.setMatrix("world",Ce)})}X._enableVelocity&&(X._previousTransformationMatrices[me.uniqueId].world=Q.clone(),X._previousTransformationMatrices[me.uniqueId].viewProjection=X._scene.getTransformMatrix().clone(),se.skeleton&&X._copyBonesTransformationMatrices(se.skeleton.getTransformMatrices(se),X._previousBonesTransformationMatrices[me.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(de,se,me,le){var V;if(X._linkedWithPrePass){if(!X._prePassRenderer.enabled)return;X._scene.getEngine().bindAttachments(X._attachments)}if(le.length){for(ge.setColorWrite(!1),V=0;V<le.length;V++)ie(le.data[V]);ge.setColorWrite(!0)}for(V=0;V<de.length;V++)ie(de.data[V]);for(ge.setDepthWrite(!1),V=0;V<se.length;V++)ie(se.data[V]);if(X.renderTransparentMeshes)for(V=0;V<me.length;V++)ie(me.data[V]);ge.setDepthWrite(!0)}}},q.prototype._copyBonesTransformationMatrices=function(X,ge){for(var _e=0;_e<X.length;_e++)ge[_e]=X[_e];return ge},q.DEPTH_TEXTURE_TYPE=0,q.NORMAL_TEXTURE_TYPE=1,q.POSITION_TEXTURE_TYPE=2,q.VELOCITY_TEXTURE_TYPE=3,q.REFLECTIVITY_TEXTURE_TYPE=4,q._SceneComponentInitialization=function(X){throw e.a.WarnImport("GeometryBufferRendererSceneComponent")},q}()},513:function(te,j,a){"use strict";a.d(j,"a",function(){return D}),a.d(j,"b",function(){return m});var l=a(436),o=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],y=[function(n){return 1},function(n){return n.y},function(n){return n.z},function(n){return n.x},function(n){return n.x*n.y},function(n){return n.y*n.z},function(n){return 3*n.z*n.z-1},function(n){return n.x*n.z},function(n){return n.x*n.x-n.y*n.y}],O=function(n,e){return o[n]*y[n](e)},h=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],D=function(){function n(){this.preScaled=!1,this.l00=l.e.Zero(),this.l1_1=l.e.Zero(),this.l10=l.e.Zero(),this.l11=l.e.Zero(),this.l2_2=l.e.Zero(),this.l2_1=l.e.Zero(),this.l20=l.e.Zero(),this.l21=l.e.Zero(),this.l22=l.e.Zero()}return n.prototype.addLight=function(e,t,i){var r=new l.e(t.r,t.g,t.b),s=r.scale(i);this.l00=this.l00.add(s.scale(O(0,e))),this.l1_1=this.l1_1.add(s.scale(O(1,e))),this.l10=this.l10.add(s.scale(O(2,e))),this.l11=this.l11.add(s.scale(O(3,e))),this.l2_2=this.l2_2.add(s.scale(O(4,e))),this.l2_1=this.l2_1.add(s.scale(O(5,e))),this.l20=this.l20.add(s.scale(O(6,e))),this.l21=this.l21.add(s.scale(O(7,e))),this.l22=this.l22.add(s.scale(O(8,e)))},n.prototype.scaleInPlace=function(e){this.l00.scaleInPlace(e),this.l1_1.scaleInPlace(e),this.l10.scaleInPlace(e),this.l11.scaleInPlace(e),this.l2_2.scaleInPlace(e),this.l2_1.scaleInPlace(e),this.l20.scaleInPlace(e),this.l21.scaleInPlace(e),this.l22.scaleInPlace(e)},n.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(h[0]),this.l1_1.scaleInPlace(h[1]),this.l10.scaleInPlace(h[2]),this.l11.scaleInPlace(h[3]),this.l2_2.scaleInPlace(h[4]),this.l2_1.scaleInPlace(h[5]),this.l20.scaleInPlace(h[6]),this.l21.scaleInPlace(h[7]),this.l22.scaleInPlace(h[8])},n.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},n.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(o[0]),this.l1_1.scaleInPlace(o[1]),this.l10.scaleInPlace(o[2]),this.l11.scaleInPlace(o[3]),this.l2_2.scaleInPlace(o[4]),this.l2_1.scaleInPlace(o[5]),this.l20.scaleInPlace(o[6]),this.l21.scaleInPlace(o[7]),this.l22.scaleInPlace(o[8])},n.FromArray=function(e){var t=new n;return l.e.FromArrayToRef(e[0],0,t.l00),l.e.FromArrayToRef(e[1],0,t.l1_1),l.e.FromArrayToRef(e[2],0,t.l10),l.e.FromArrayToRef(e[3],0,t.l11),l.e.FromArrayToRef(e[4],0,t.l2_2),l.e.FromArrayToRef(e[5],0,t.l2_1),l.e.FromArrayToRef(e[6],0,t.l20),l.e.FromArrayToRef(e[7],0,t.l21),l.e.FromArrayToRef(e[8],0,t.l22),t},n.FromPolynomial=function(e){var t=new n;return t.l00=e.xx.scale(.376127).add(e.yy.scale(.376127)).add(e.zz.scale(.376126)),t.l1_1=e.y.scale(.977204),t.l10=e.z.scale(.977204),t.l11=e.x.scale(.977204),t.l2_2=e.xy.scale(1.16538),t.l2_1=e.yz.scale(1.16538),t.l20=e.zz.scale(1.34567).subtract(e.xx.scale(.672834)).subtract(e.yy.scale(.672834)),t.l21=e.zx.scale(1.16538),t.l22=e.xx.scale(1.16538).subtract(e.yy.scale(1.16538)),t.l1_1.scaleInPlace(-1),t.l11.scaleInPlace(-1),t.l2_1.scaleInPlace(-1),t.l21.scaleInPlace(-1),t.scaleInPlace(Math.PI),t},n}(),m=function(){function n(){this.x=l.e.Zero(),this.y=l.e.Zero(),this.z=l.e.Zero(),this.xx=l.e.Zero(),this.yy=l.e.Zero(),this.zz=l.e.Zero(),this.xy=l.e.Zero(),this.yz=l.e.Zero(),this.zx=l.e.Zero()}return Object.defineProperty(n.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=D.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),n.prototype.addAmbient=function(e){var t=new l.e(e.r,e.g,e.b);this.xx=this.xx.add(t),this.yy=this.yy.add(t),this.zz=this.zz.add(t)},n.prototype.scaleInPlace=function(e){this.x.scaleInPlace(e),this.y.scaleInPlace(e),this.z.scaleInPlace(e),this.xx.scaleInPlace(e),this.yy.scaleInPlace(e),this.zz.scaleInPlace(e),this.yz.scaleInPlace(e),this.zx.scaleInPlace(e),this.xy.scaleInPlace(e)},n.FromHarmonics=function(e){var t=new n;return t._harmonics=e,t.x=e.l11.scale(1.02333).scale(-1),t.y=e.l1_1.scale(1.02333).scale(-1),t.z=e.l10.scale(1.02333),t.xx=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).add(e.l22.scale(.429043)),t.yy=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).subtract(e.l22.scale(.429043)),t.zz=e.l00.scale(.886277).add(e.l20.scale(.495417)),t.yz=e.l2_1.scale(.858086).scale(-1),t.zx=e.l21.scale(.858086).scale(-1),t.xy=e.l2_2.scale(.858086),t.scaleInPlace(1/Math.PI),t},n.FromArray=function(e){var t=new n;return l.e.FromArrayToRef(e[0],0,t.x),l.e.FromArrayToRef(e[1],0,t.y),l.e.FromArrayToRef(e[2],0,t.z),l.e.FromArrayToRef(e[3],0,t.xx),l.e.FromArrayToRef(e[4],0,t.yy),l.e.FromArrayToRef(e[5],0,t.zz),l.e.FromArrayToRef(e[6],0,t.yz),l.e.FromArrayToRef(e[7],0,t.zx),l.e.FromArrayToRef(e[8],0,t.xy),t},n}()},514:function(te,j,a){"use strict";a.d(j,"a",function(){return y});var l=a(442),o=a(545),y=function(){function O(){}return O.GetEnvironmentBRDFTexture=function(h){if(!h.environmentBRDFTexture){var D=h.useDelayedTextureLoading;h.useDelayedTextureLoading=!1;var m=h._blockEntityCollection;h._blockEntityCollection=!1;var n=l.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,h,!0,!1,l.a.BILINEAR_SAMPLINGMODE);h._blockEntityCollection=m;var e=h.getEngine().getLoadedTexturesCache(),t=e.indexOf(n.getInternalTexture());t!==-1&&e.splice(t,1),n.isRGBD=!0,n.wrapU=l.a.CLAMP_ADDRESSMODE,n.wrapV=l.a.CLAMP_ADDRESSMODE,h.environmentBRDFTexture=n,h.useDelayedTextureLoading=D,o.a.ExpandRGBDTexture(n)}return h.environmentBRDFTexture},O._instanceNumber=0,O._environmentBRDFBase64Texture="data:image/png;base64,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",O}()},516:function(te,j,a){"use strict";a.d(j,"a",function(){return H});var l=a(434),o=a(439),y=a(443),O=a(438),h=a(441),D=a(445),m=a(448),n=a(447),e=a(442),t=a(458),i=a(459),r=a(454),s=a(435),f="glowMapGenerationPixelShader",v=`#ifdef DIFFUSE
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
}`;s.a.ShadersStore[f]=v;var d={name:f,shader:v},T=a(487),x=a(496),M=a(497),b=a(501),C=a(507),u=a(508),S=a(488),R=a(489),p="glowMapGenerationVertexShader",c=`
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
}`;s.a.ShadersStore[p]=c;var E={name:p,shader:c},A=a(476),g=a(512),H=function(){function U(I,W){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new h.b},this.neutralColor=new h.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new O.c,this.onBeforeRenderMainTextureObservable=new O.c,this.onBeforeComposeObservable=new O.c,this.onBeforeRenderMeshToEffect=new O.c,this.onAfterRenderMeshToEffect=new O.c,this.onAfterComposeObservable=new O.c,this.onSizeChangedObservable=new O.c,this.name=I,this._scene=W||m.a.LastCreatedScene,U._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(U.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(U.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(I){this._effectLayerOptions.renderingGroupId=I},enumerable:!1,configurable:!0}),U.prototype._init=function(I){this._effectLayerOptions=Object(l.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},I),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},U.prototype._generateIndexBuffer=function(){var I=[];I.push(0),I.push(1),I.push(2),I.push(0),I.push(2),I.push(3),this._indexBuffer=this._engine.createIndexBuffer(I)},U.prototype._generateVertexBuffer=function(){var I=[];I.push(1,1),I.push(-1,1),I.push(-1,-1),I.push(1,-1);var W=new n.b(this._engine,I,n.b.PositionKind,!1,!1,2);this._vertexBuffers[n.b.PositionKind]=W},U.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?D.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?D.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},U.prototype._createMainTexture=function(){var I=this;if(this._mainTexture=new t.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=e.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=e.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(e.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(Y,$,G,J){I.onBeforeRenderMainTextureObservable.notifyObservers(I);var ne,ee=I._scene.getEngine();if(J.length){for(ee.setColorWrite(!1),ne=0;ne<J.length;ne++)I._renderSubMesh(J.data[ne]);ee.setColorWrite(!0)}for(ne=0;ne<Y.length;ne++)I._renderSubMesh(Y.data[ne]);for(ne=0;ne<$.length;ne++)I._renderSubMesh($.data[ne]);var oe=ee.getAlphaMode();for(ne=0;ne<G.length;ne++)I._renderSubMesh(G.data[ne],!0);ee.setAlphaMode(oe)},this._mainTexture.onClearObservable.add(function(Y){Y.clear(I.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var W=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){I._scene.getBoundingBoxRenderer().enabled=!I.disableBoundingBoxesFromEffectLayer&&W}),this._mainTexture.onAfterUnbindObservable.add(function(){I._scene.getBoundingBoxRenderer().enabled=W})}},U.prototype._addCustomEffectDefines=function(I){},U.prototype._isReady=function(I,W,Y){var $=I.getMaterial();if(!$||!$.isReadyForSubMesh(I.getMesh(),I,W))return!1;var G=[],J=[n.b.PositionKind],ne=I.getMesh(),ee=!1,oe=!1;if($){var q=$.needAlphaTesting(),X=$.getAlphaTestTexture(),ge=X&&X.hasAlpha&&($.useAlphaFromDiffuseTexture||$._useAlphaFromAlbedoTexture);X&&(q||ge)&&(G.push("#define DIFFUSE"),ne.isVerticesDataPresent(n.b.UV2Kind)&&X.coordinatesIndex===1?(G.push("#define DIFFUSEUV2"),oe=!0):ne.isVerticesDataPresent(n.b.UVKind)&&(G.push("#define DIFFUSEUV1"),ee=!0),q&&(G.push("#define ALPHATEST"),G.push("#define ALPHATESTVALUE 0.4")));var _e=$.opacityTexture;_e&&(G.push("#define OPACITY"),ne.isVerticesDataPresent(n.b.UV2Kind)&&_e.coordinatesIndex===1?(G.push("#define OPACITYUV2"),oe=!0):ne.isVerticesDataPresent(n.b.UVKind)&&(G.push("#define OPACITYUV1"),ee=!0))}Y&&(G.push("#define EMISSIVE"),ne.isVerticesDataPresent(n.b.UV2Kind)&&Y.coordinatesIndex===1?(G.push("#define EMISSIVEUV2"),oe=!0):ne.isVerticesDataPresent(n.b.UVKind)&&(G.push("#define EMISSIVEUV1"),ee=!0)),ne.isVerticesDataPresent(n.b.ColorKind)&&ne.hasVertexAlpha&&(J.push(n.b.ColorKind),G.push("#define VERTEXALPHA")),ee&&(J.push(n.b.UVKind),G.push("#define UV1")),oe&&(J.push(n.b.UV2Kind),G.push("#define UV2"));var ie=new g.a;if(ne.useBones&&ne.computeBonesUsingShaders){J.push(n.b.MatricesIndicesKind),J.push(n.b.MatricesWeightsKind),ne.numBoneInfluencers>4&&(J.push(n.b.MatricesIndicesExtraKind),J.push(n.b.MatricesWeightsExtraKind)),G.push("#define NUM_BONE_INFLUENCERS "+ne.numBoneInfluencers);var de=ne.skeleton;de&&de.isUsingTextureForMatrices?G.push("#define BONETEXTURE"):G.push("#define BonesPerMesh "+(de?de.bones.length+1:0)),ne.numBoneInfluencers>0&&ie.addCPUSkinningFallback(0,ne)}else G.push("#define NUM_BONE_INFLUENCERS 0");var se=ne.morphTargetManager,me=0;se&&se.numInfluencers>0&&(G.push("#define MORPHTARGETS"),me=se.numInfluencers,G.push("#define NUM_MORPH_INFLUENCERS "+me),se.isUsingTextureForTargets&&G.push("#define MORPHTARGETS_TEXTURE"),r.a.PrepareAttributesForMorphTargetsInfluencers(J,ne,me)),W&&(G.push("#define INSTANCES"),r.a.PushAttributesForInstances(J),I.getRenderingMesh().hasThinInstances&&G.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(G);var le=G.join(`
`);return this._cachedDefines!==le&&(this._cachedDefines=le,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",J,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],le,ie,void 0,void 0,{maxSimultaneousMorphTargets:me})),this._effectLayerMapGenerationEffect.isReady()},U.prototype.render=function(){var I=this._mergeEffect;if(!!I.isReady()){for(var W=0;W<this._postProcesses.length;W++)if(!this._postProcesses[W].isReady())return;var Y=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),Y.enableEffect(I),Y.setState(!1),Y.bindBuffers(this._vertexBuffers,this._indexBuffer,I);var $=Y.getAlphaMode();Y.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(I),Y.setAlphaMode($),this.onAfterComposeObservable.notifyObservers(this);var G=this._mainTexture.getSize();this._setMainTextureSize(),(G.width!==this._mainTextureDesiredSize.width||G.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},U.prototype.hasMesh=function(I){return this.renderingGroupId===-1||I.renderingGroupId===this.renderingGroupId},U.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},U.prototype._shouldRenderMesh=function(I){return!0},U.prototype._canRenderMesh=function(I,W){return!W.needAlphaBlendingForMesh(I)},U.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},U.prototype._renderSubMesh=function(I,W){var Y=this,$;if(W===void 0&&(W=!1),!!this.shouldRender()){var G=I.getMaterial(),J=I.getMesh(),ne=I.getReplacementMesh(),ee=I.getRenderingMesh(),oe=I.getEffectiveMesh(),q=this._scene,X=q.getEngine();if(oe._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!G&&!!this._canRenderMesh(ee,G)){var ge=($=ee.overrideMaterialSideOrientation)!==null&&$!==void 0?$:G.sideOrientation,_e=ee._getWorldMatrixDeterminant();_e<0&&(ge=ge===i.a.ClockWiseSideOrientation?i.a.CounterClockWiseSideOrientation:i.a.ClockWiseSideOrientation);var ie=ge===i.a.ClockWiseSideOrientation;X.setState(G.backFaceCulling,G.zOffset,void 0,ie);var de=ee._getInstancesRenderList(I._id,!!ne);if(!de.mustReturn&&!!this._shouldRenderMesh(ee)){var se=de.hardwareInstancedRendering[I._id]||ee.hasThinInstances;if(this._setEmissiveTextureAndColor(ee,I,G),this.onBeforeRenderMeshToEffect.notifyObservers(J),this._useMeshMaterial(ee))ee.render(I,se,ne||void 0);else if(this._isReady(I,se,this._emissiveTextureAndColor.texture)){X.enableEffect(this._effectLayerMapGenerationEffect),ee._bind(I,this._effectLayerMapGenerationEffect,i.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",q.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",oe.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var me=G.needAlphaTesting(),le=G.getAlphaTestTexture(),V=le&&le.hasAlpha&&(G.useAlphaFromDiffuseTexture||G._useAlphaFromAlbedoTexture);if(le&&(me||V)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",le);var P=le.getTextureMatrix();P&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",P)}var w=G.opacityTexture;if(w){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",w),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",w.level);var P=w.getTextureMatrix();P&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",P)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),ee.useBones&&ee.computeBonesUsingShaders&&ee.skeleton){var B=ee.skeleton;if(B.isUsingTextureForMatrices){var k=B.getTransformMatrixTexture(ee);if(!k)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",k),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(B.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",B.getTransformMatrices(ee))}r.a.BindMorphTargetParameters(ee,this._effectLayerMapGenerationEffect),ee.morphTargetManager&&ee.morphTargetManager.isUsingTextureForTargets&&ee.morphTargetManager._bind(this._effectLayerMapGenerationEffect),W&&X.setAlphaMode(G.alphaMode),ee._processRendering(oe,I,this._effectLayerMapGenerationEffect,G.fillMode,de,se,function(Q,F){return Y._effectLayerMapGenerationEffect.setMatrix("world",F)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(J)}}}},U.prototype._useMeshMaterial=function(I){return!1},U.prototype._rebuild=function(){var I=this._vertexBuffers[n.b.PositionKind];I&&I._rebuild(),this._generateIndexBuffer()},U.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var I=0;I<this._postProcesses.length;I++)this._postProcesses[I]&&this._postProcesses[I].dispose();this._postProcesses=[];for(var I=0;I<this._textures.length;I++)this._textures[I]&&this._textures[I].dispose();this._textures=[]},U.prototype.dispose=function(){var I=this._vertexBuffers[n.b.PositionKind];I&&(I.dispose(),this._vertexBuffers[n.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var W=this._scene.effectLayers.indexOf(this,0);W>-1&&this._scene.effectLayers.splice(W,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},U.prototype.getClassName=function(){return"EffectLayer"},U.Parse=function(I,W,Y){var $=y.b.Instantiate(I.customType);return $.Parse(I,W,Y)},U._SceneComponentInitialization=function(I){throw A.a.WarnImport("EffectLayerSceneComponent")},Object(l.c)([Object(o.c)()],U.prototype,"name",void 0),Object(l.c)([Object(o.f)()],U.prototype,"neutralColor",void 0),Object(l.c)([Object(o.c)()],U.prototype,"isEnabled",void 0),Object(l.c)([Object(o.d)()],U.prototype,"camera",null),Object(l.c)([Object(o.c)()],U.prototype,"renderingGroupId",null),Object(l.c)([Object(o.c)()],U.prototype,"disableBoundingBoxesFromEffectLayer",void 0),U}()},517:function(te,j,a){"use strict";a.d(j,"a",function(){return s});var l=a(434),o=a(442),y=a(444),O=a(435),h="fxaaPixelShader",D=`uniform sampler2D textureSampler;
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
}`;O.a.ShadersStore[h]=D;var m={name:h,shader:D},n="fxaaVertexShader",e=`
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
}`;O.a.ShadersStore[n]=e;var t={name:n,shader:e},i=a(437),r=a(439),s=function(f){Object(l.d)(v,f);function v(d,T,x,M,b,C,u){x===void 0&&(x=null),u===void 0&&(u=0);var S=f.call(this,d,"fxaa",["texelSize"],null,T,x,M||o.a.BILINEAR_SAMPLINGMODE,b,C,null,u,"fxaa",void 0,!0)||this,R=S._getDefines();return S.updateEffect(R),S.onApplyObservable.add(function(p){var c=S.texelSize;p.setFloat2("texelSize",c.x,c.y)}),S}return v.prototype.getClassName=function(){return"FxaaPostProcess"},v.prototype._getDefines=function(){var d=this.getEngine();if(!d)return null;var T=d.getGlInfo();return T&&T.renderer&&T.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},v._Parse=function(d,T,x,M){return r.a.Parse(function(){return new v(d.name,d.options,T,d.renderTargetSamplingMode,x.getEngine(),d.reusable)},d,x,M)},v}(y.a);i.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=s},518:function(te,j,a){"use strict";a.d(j,"a",function(){return n});var l=a(434),o=a(439),y=a(491),O=a(444),h=a(448),D=a(644),m=a(534),n=function(e){Object(l.d)(t,e);function t(i,r,s,f,v,d,T,x){s===void 0&&(s=null),T===void 0&&(T=0);var M=e.call(this,i,"imageProcessing",[],[],r,s,f,v,d,null,T,"postprocess",null,!0)||this;return M._fromLinearSpace=!0,M._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},x?(x.applyByPostProcess=!0,M._attachImageProcessingConfiguration(x,!0),M.fromLinearSpace=!1):(M._attachImageProcessingConfiguration(null,!0),M.imageProcessingConfiguration.applyByPostProcess=!0),M.onApply=function(b){M.imageProcessingConfiguration.bind(b,M.aspectRatio)},M}return Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(i){i.applyByPostProcess=!0,this._attachImageProcessingConfiguration(i)},enumerable:!1,configurable:!0}),t.prototype._attachImageProcessingConfiguration=function(i,r){var s=this;if(r===void 0&&(r=!1),i!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),i)this._imageProcessingConfiguration=i;else{var f=null,v=this.getEngine(),d=this.getCamera();if(d)f=d.getScene();else if(v&&v.scenes){var T=v.scenes;f=T[T.length-1]}else f=h.a.LastCreatedScene;f?this._imageProcessingConfiguration=f.imageProcessingConfiguration:this._imageProcessingConfiguration=new y.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){s._updateParameters()})),r||this._updateParameters()}},Object.defineProperty(t.prototype,"isSupported",{get:function(){var i=this.getEffect();return!i||i.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(i){this.imageProcessingConfiguration.colorCurves=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(i){this.imageProcessingConfiguration.colorCurvesEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(i){this.imageProcessingConfiguration.colorGradingTexture=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(i){this.imageProcessingConfiguration.colorGradingEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(i){this.imageProcessingConfiguration.exposure=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(i){this._imageProcessingConfiguration.toneMappingEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(i){this._imageProcessingConfiguration.toneMappingType=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(i){this.imageProcessingConfiguration.contrast=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(i){this.imageProcessingConfiguration.vignetteStretch=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(i){this.imageProcessingConfiguration.vignetteCentreX=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(i){this.imageProcessingConfiguration.vignetteCentreY=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(i){this.imageProcessingConfiguration.vignetteWeight=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(i){this.imageProcessingConfiguration.vignetteColor=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(i){this.imageProcessingConfiguration.vignetteCameraFov=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(i){this.imageProcessingConfiguration.vignetteBlendMode=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(i){this.imageProcessingConfiguration.vignetteEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(i){this._fromLinearSpace!==i&&(this._fromLinearSpace=i,this._updateParameters())},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"ImageProcessingPostProcess"},t.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var i="";for(var r in this._defines)this._defines[r]&&(i+="#define "+r+`;\r
`);var s=["textureSampler"],f=["scale"];y.a&&(y.a.PrepareSamplers(s,this._defines),y.a.PrepareUniforms(f,this._defines)),this.updateEffect(i,f,s)},t.prototype.dispose=function(i){e.prototype.dispose.call(this,i),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(l.c)([Object(o.c)()],t.prototype,"_fromLinearSpace",void 0),t}(O.a)},521:function(te,j,a){"use strict";a.d(j,"a",function(){return m});var l=a(436),o=a(450),y=a(513),O=a(515),h=a(441),D=function(){function n(e,t,i,r){this.name=e,this.worldAxisForNormal=t,this.worldAxisForFileX=i,this.worldAxisForFileY=r}return n}(),m=function(){function n(){}return n.ConvertCubeMapTextureToSphericalPolynomial=function(e){var t=this,i;if(!e.isCube)return null;(i=e.getScene())===null||i===void 0||i.getEngine().flushFramebuffer();var r=e.getSize().width,s=e.readPixels(0,void 0,void 0,!1),f=e.readPixels(1,void 0,void 0,!1),v,d;e.isRenderTarget?(v=e.readPixels(3,void 0,void 0,!1),d=e.readPixels(2,void 0,void 0,!1)):(v=e.readPixels(2,void 0,void 0,!1),d=e.readPixels(3,void 0,void 0,!1));var T=e.readPixels(4,void 0,void 0,!1),x=e.readPixels(5,void 0,void 0,!1),M=e.gammaSpace,b=5,C=0;return(e.textureType==1||e.textureType==2)&&(C=1),new Promise(function(u,S){Promise.all([f,s,v,d,T,x]).then(function(R){var p=R[0],c=R[1],E=R[2],A=R[3],g=R[4],H=R[5],U={size:r,right:c,left:p,up:E,down:A,front:g,back:H,format:b,type:C,gammaSpace:M};u(t.ConvertCubeMapToSphericalPolynomial(U))})})},n.ConvertCubeMapToSphericalPolynomial=function(e){for(var t=new y.a,i=0,r=2/e.size,s=r,f=r*.5-1,v=0;v<6;v++)for(var d=this.FileFaces[v],T=e[d.name],x=f,M=e.format===5?4:3,b=0;b<e.size;b++){for(var C=f,u=0;u<e.size;u++){var S=d.worldAxisForFileX.scale(C).add(d.worldAxisForFileY.scale(x)).add(d.worldAxisForNormal);S.normalize();var R=Math.pow(1+C*C+x*x,-3/2),p=T[b*e.size*M+u*M+0],c=T[b*e.size*M+u*M+1],E=T[b*e.size*M+u*M+2];isNaN(p)&&(p=0),isNaN(c)&&(c=0),isNaN(E)&&(E=0),e.type===0&&(p/=255,c/=255,E/=255),e.gammaSpace&&(p=Math.pow(o.a.Clamp(p),O.c),c=Math.pow(o.a.Clamp(c),O.c),E=Math.pow(o.a.Clamp(E),O.c));var A=4096;p=o.a.Clamp(p,0,A),c=o.a.Clamp(c,0,A),E=o.a.Clamp(E,0,A);var g=new h.a(p,c,E);t.addLight(S,g,R),i+=R,C+=r}x+=s}var H=4*Math.PI,U=6,I=H*U/6,W=I/i;return t.scaleInPlace(W),t.convertIncidentRadianceToIrradiance(),t.convertIrradianceToLambertianRadiance(),y.b.FromHarmonics(t)},n.FileFaces=[new D("right",new l.e(1,0,0),new l.e(0,0,-1),new l.e(0,-1,0)),new D("left",new l.e(-1,0,0),new l.e(0,0,1),new l.e(0,-1,0)),new D("up",new l.e(0,1,0),new l.e(1,0,0),new l.e(0,0,1)),new D("down",new l.e(0,-1,0),new l.e(1,0,0),new l.e(0,0,-1)),new D("front",new l.e(0,0,1),new l.e(1,0,0),new l.e(0,-1,0)),new D("back",new l.e(0,0,-1),new l.e(-1,0,0),new l.e(0,-1,0))],n}()},522:function(te,j,a){"use strict";var l=a(434),o=a(456),y=a(440),O=a(467);O.a.prototype.createRenderTargetCubeTexture=function(h,D){var m=Object(l.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},D);m.generateStencilBuffer=m.generateDepthBuffer&&m.generateStencilBuffer,(m.type===1&&!this._caps.textureFloatLinearFiltering||m.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(m.samplingMode=1);var n=this._gl,e=new o.a(this,o.b.RenderTarget);this._bindTextureDirectly(n.TEXTURE_CUBE_MAP,e,!0);var t=this._getSamplingParameters(m.samplingMode,m.generateMipMaps);m.type===1&&!this._caps.textureFloat&&(m.type=0,y.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAG_FILTER,t.mag),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MIN_FILTER,t.min),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);for(var i=0;i<6;i++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this._getRGBABufferInternalSizedFormat(m.type,m.format),h,h,0,this._getInternalFormat(m.format),this._getWebGLTextureType(m.type),null);var r=n.createFramebuffer();return this._bindUnboundFramebuffer(r),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(m.generateStencilBuffer,m.generateDepthBuffer,h,h),m.generateMipMaps&&n.generateMipmap(n.TEXTURE_CUBE_MAP),this._bindTextureDirectly(n.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),e._framebuffer=r,e.width=h,e.height=h,e.isReady=!0,e.isCube=!0,e.samples=1,e.generateMipMaps=m.generateMipMaps,e.samplingMode=m.samplingMode,e.type=m.type,e.format=m.format,e._generateDepthBuffer=m.generateDepthBuffer,e._generateStencilBuffer=m.generateStencilBuffer,this._internalTexturesCache.push(e),e}},523:function(te,j,a){"use strict";var l=a(521),o=a(477);Object.defineProperty(o.a.prototype,"sphericalPolynomial",{get:function(){var y=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=l.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(O){y._texture._sphericalPolynomial=O,y._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(y){this._texture&&(this._texture._sphericalPolynomial=y)},enumerable:!0,configurable:!0})},529:function(te,j,a){"use strict";a.d(j,"b",function(){return Be}),a.d(j,"a",function(){return Bt});var l=a(434),o=a(439),y=a(440),O=a(490),h=a(514),D=a(449),m=a(436),n=a(447),e=a(626),t=a(480),i=a(454),r=function(){function K(N){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new m.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=N}return K.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},K.prototype.isReadyForSubMesh=function(N,_){return!(N._areTexturesDirty&&_.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},K.prototype.prepareDefines=function(N,_,L){this._isEnabled?(N.ANISOTROPIC=this._isEnabled,this._isEnabled&&!_.isVerticesDataPresent(n.b.TangentKind)&&(N._needUVs=!0,N.MAINUV1=!0),N._areTexturesDirty&&L.texturesEnabled&&(this._texture&&t.a.AnisotropicTextureEnabled?i.a.PrepareDefinesForMergedUV(this._texture,N,"ANISOTROPIC_TEXTURE"):N.ANISOTROPIC_TEXTURE=!1)):(N.ANISOTROPIC=!1,N.ANISOTROPIC_TEXTURE=!1)},K.prototype.bindForSubMesh=function(N,_,L){(!N.useUbo||!L||!N.isSync)&&(this._texture&&t.a.AnisotropicTextureEnabled&&(N.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),i.a.BindTextureMatrix(this._texture,N,"anisotropy")),N.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),_.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&N.setTexture("anisotropySampler",this._texture)},K.prototype.hasTexture=function(N){return this._texture===N},K.prototype.getActiveTextures=function(N){this._texture&&N.push(this._texture)},K.prototype.getAnimatables=function(N){this._texture&&this._texture.animations&&this._texture.animations.length>0&&N.push(this._texture)},K.prototype.dispose=function(N){N&&this._texture&&this._texture.dispose()},K.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},K.AddFallbacks=function(N,_,L){return N.ANISOTROPIC&&_.addFallback(L++,"ANISOTROPIC"),L},K.AddUniforms=function(N){N.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},K.PrepareUniformBuffer=function(N){N.addUniform("vAnisotropy",3),N.addUniform("vAnisotropyInfos",2),N.addUniform("anisotropyMatrix",16)},K.AddSamplers=function(N){N.push("anisotropySampler")},K.prototype.copyTo=function(N){o.a.Clone(function(){return N},this)},K.prototype.serialize=function(){return o.a.Serialize(this)},K.prototype.parse=function(N,_,L){var z=this;o.a.Parse(function(){return z},N,_,L)},Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"isEnabled",void 0),Object(l.c)([Object(o.c)()],K.prototype,"intensity",void 0),Object(l.c)([Object(o.n)()],K.prototype,"direction",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"texture",void 0),K}(),s=function(){function K(N){this._useEnergyConservation=K.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=K.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=K.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=K.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=K.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=K.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=K.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=K.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=N}return K.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},K.prototype.prepareDefines=function(N){N.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,N.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,N.SPHERICAL_HARMONICS=this._useSphericalHarmonics,N.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},K.prototype.getClassName=function(){return"PBRBRDFConfiguration"},K.prototype.copyTo=function(N){o.a.Clone(function(){return N},this)},K.prototype.serialize=function(){return o.a.Serialize(this)},K.prototype.parse=function(N,_,L){var z=this;o.a.Parse(function(){return z},N,_,L)},K.DEFAULT_USE_ENERGY_CONSERVATION=!0,K.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,K.DEFAULT_USE_SPHERICAL_HARMONICS=!0,K.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],K.prototype,"useEnergyConservation",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],K.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],K.prototype,"useSphericalHarmonics",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],K.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),K}(),f=a(441),v=function(){function K(N){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=f.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=N}return K.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},K.prototype.isReadyForSubMesh=function(N,_){return!(N._areTexturesDirty&&_.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&t.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},K.prototype.prepareDefines=function(N,_){var L;this._isEnabled?(N.SHEEN=this._isEnabled,N.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,N.SHEEN_ROUGHNESS=this._roughness!==null,N.SHEEN_ALBEDOSCALING=this._albedoScaling,N.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,N.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((L=this._textureRoughness)===null||L===void 0?void 0:L._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),N._areTexturesDirty&&_.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled?i.a.PrepareDefinesForMergedUV(this._texture,N,"SHEEN_TEXTURE"):N.SHEEN_TEXTURE=!1,this._textureRoughness&&t.a.SheenTextureEnabled?i.a.PrepareDefinesForMergedUV(this._textureRoughness,N,"SHEEN_TEXTURE_ROUGHNESS"):N.SHEEN_TEXTURE_ROUGHNESS=!1)):(N.SHEEN=!1,N.SHEEN_TEXTURE=!1,N.SHEEN_TEXTURE_ROUGHNESS=!1,N.SHEEN_LINKWITHALBEDO=!1,N.SHEEN_ROUGHNESS=!1,N.SHEEN_ALBEDOSCALING=!1,N.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,N.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},K.prototype.bindForSubMesh=function(N,_,L,z){var fe,pe,ae,Te,ce,Z,he,Ee,Re=z._materialDefines,ue=Re.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!N.useUbo||!L||!N.isSync)&&(ue&&t.a.SheenTextureEnabled?(N.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),i.a.BindTextureMatrix(this._texture,N,"sheen")):(this._texture||this._textureRoughness)&&t.a.SheenTextureEnabled&&(N.updateFloat4("vSheenInfos",(pe=(fe=this._texture)===null||fe===void 0?void 0:fe.coordinatesIndex)!==null&&pe!==void 0?pe:0,(Te=(ae=this._texture)===null||ae===void 0?void 0:ae.level)!==null&&Te!==void 0?Te:0,(Z=(ce=this._textureRoughness)===null||ce===void 0?void 0:ce.coordinatesIndex)!==null&&Z!==void 0?Z:0,(Ee=(he=this._textureRoughness)===null||he===void 0?void 0:he.level)!==null&&Ee!==void 0?Ee:0),this._texture&&i.a.BindTextureMatrix(this._texture,N,"sheen"),this._textureRoughness&&!ue&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&i.a.BindTextureMatrix(this._textureRoughness,N,"sheenRoughness")),N.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&N.updateFloat("vSheenRoughness",this._roughness)),_.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&N.setTexture("sheenSampler",this._texture),this._textureRoughness&&!ue&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&t.a.SheenTextureEnabled&&N.setTexture("sheenRoughnessSampler",this._textureRoughness))},K.prototype.hasTexture=function(N){return this._texture===N||this._textureRoughness===N},K.prototype.getActiveTextures=function(N){this._texture&&N.push(this._texture),this._textureRoughness&&N.push(this._textureRoughness)},K.prototype.getAnimatables=function(N){this._texture&&this._texture.animations&&this._texture.animations.length>0&&N.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&N.push(this._textureRoughness)},K.prototype.dispose=function(N){var _,L;N&&((_=this._texture)===null||_===void 0||_.dispose(),(L=this._textureRoughness)===null||L===void 0||L.dispose())},K.prototype.getClassName=function(){return"PBRSheenConfiguration"},K.AddFallbacks=function(N,_,L){return N.SHEEN&&_.addFallback(L++,"SHEEN"),L},K.AddUniforms=function(N){N.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},K.PrepareUniformBuffer=function(N){N.addUniform("vSheenColor",4),N.addUniform("vSheenRoughness",1),N.addUniform("vSheenInfos",4),N.addUniform("sheenMatrix",16),N.addUniform("sheenRoughnessMatrix",16)},K.AddSamplers=function(N){N.push("sheenSampler"),N.push("sheenRoughnessSampler")},K.prototype.copyTo=function(N){o.a.Clone(function(){return N},this)},K.prototype.serialize=function(){return o.a.Serialize(this)},K.prototype.parse=function(N,_,L){var z=this;o.a.Parse(function(){return z},N,_,L)},Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"isEnabled",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"linkSheenWithAlbedo",void 0),Object(l.c)([Object(o.c)()],K.prototype,"intensity",void 0),Object(l.c)([Object(o.e)()],K.prototype,"color",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"texture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"roughness",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"textureRoughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"albedoScaling",void 0),K}(),d=a(450),T=function(){function K(N,_,L){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=f.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=f.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=N,this._internalMarkScenePrePassDirty=_,this._scene=L}return Object.defineProperty(K.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(N){!this._scene.enableSubSurfaceForPrePass()||N&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(N))},enumerable:!1,configurable:!0}),Object.defineProperty(K.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(N){N>=1?this._volumeIndexOfRefraction=N:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),K.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},K.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},K.prototype.isReadyForSubMesh=function(N,_){if(N._areTexturesDirty&&_.texturesEnabled){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var L=this._getRefractionTexture(_);if(L&&t.a.RefractionTextureEnabled&&!L.isReadyOrNotBlocking())return!1}return!0},K.prototype.prepareDefines=function(N,_){if(N._areTexturesDirty&&(N.SUBSURFACE=!1,N.SS_TRANSLUCENCY=this._isTranslucencyEnabled,N.SS_SCATTERING=this._isScatteringEnabled,N.SS_THICKNESSANDMASK_TEXTURE=!1,N.SS_MASK_FROM_THICKNESS_TEXTURE=!1,N.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,N.SS_REFRACTION=!1,N.SS_REFRACTIONMAP_3D=!1,N.SS_GAMMAREFRACTION=!1,N.SS_RGBDREFRACTION=!1,N.SS_LINEARSPECULARREFRACTION=!1,N.SS_REFRACTIONMAP_OPPOSITEZ=!1,N.SS_LODINREFRACTIONALPHA=!1,N.SS_LINKREFRACTIONTOTRANSPARENCY=!1,N.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(N.SUBSURFACE=!0,N._areTexturesDirty&&_.texturesEnabled&&this._thicknessTexture&&t.a.ThicknessTextureEnabled&&i.a.PrepareDefinesForMergedUV(this._thicknessTexture,N,"SS_THICKNESSANDMASK_TEXTURE"),N.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,N.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&_.texturesEnabled)){var L=this._getRefractionTexture(_);L&&t.a.RefractionTextureEnabled&&(N.SS_REFRACTION=!0,N.SS_REFRACTIONMAP_3D=L.isCube,N.SS_GAMMAREFRACTION=L.gammaSpace,N.SS_RGBDREFRACTION=L.isRGBD,N.SS_LINEARSPECULARREFRACTION=L.linearSpecularLOD,N.SS_REFRACTIONMAP_OPPOSITEZ=L.invertZ,N.SS_LODINREFRACTIONALPHA=L.lodLevelInAlpha,N.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,N.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},K.prototype.bindForSubMesh=function(N,_,L,z,fe,pe){var ae=this._getRefractionTexture(_);if(!N.useUbo||!z||!N.isSync){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&(N.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),i.a.BindTextureMatrix(this._thicknessTexture,N,"thickness")),N.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),ae&&t.a.RefractionTextureEnabled){N.updateMatrix("refractionMatrix",ae.getReflectionTextureMatrix());var Te=1;ae.isCube||ae.depth&&(Te=ae.depth);var ce=ae.getSize().width,Z=this.volumeIndexOfRefraction;N.updateFloat4("vRefractionInfos",ae.level,1/Z,Te,this._invertRefractionY?-1:1),N.updateFloat3("vRefractionMicrosurfaceInfos",ce,ae.lodGenerationScale,ae.lodGenerationOffset),pe&&N.updateFloat2("vRefractionFilteringInfo",ce,d.a.Log2(ce))}this.isScatteringEnabled&&N.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),N.updateColor3("vDiffusionDistance",this.diffusionDistance),N.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),N.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}_.texturesEnabled&&(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&N.setTexture("thicknessSampler",this._thicknessTexture),ae&&t.a.RefractionTextureEnabled&&(fe?N.setTexture("refractionSampler",ae):(N.setTexture("refractionSampler",ae._lodTextureMid||ae),N.setTexture("refractionSamplerLow",ae._lodTextureLow||ae),N.setTexture("refractionSamplerHigh",ae._lodTextureHigh||ae))))},K.prototype.unbind=function(N){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(N.setTexture("refractionSampler",null),!0):!1},K.prototype._getRefractionTexture=function(N){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?N.environmentTexture:null},Object.defineProperty(K.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),K.prototype.fillRenderTargetTextures=function(N){t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&N.push(this._refractionTexture)},K.prototype.hasTexture=function(N){return this._thicknessTexture===N||this._refractionTexture===N},K.prototype.hasRenderTargetTextures=function(){return!!(t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},K.prototype.getActiveTextures=function(N){this._thicknessTexture&&N.push(this._thicknessTexture),this._refractionTexture&&N.push(this._refractionTexture)},K.prototype.getAnimatables=function(N){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&N.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&N.push(this._refractionTexture)},K.prototype.dispose=function(N){N&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},K.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},K.AddFallbacks=function(N,_,L){return N.SS_SCATTERING&&_.addFallback(L++,"SS_SCATTERING"),N.SS_TRANSLUCENCY&&_.addFallback(L++,"SS_TRANSLUCENCY"),L},K.AddUniforms=function(N){N.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},K.AddSamplers=function(N){N.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},K.PrepareUniformBuffer=function(N){N.addUniform("vRefractionMicrosurfaceInfos",3),N.addUniform("vRefractionFilteringInfo",2),N.addUniform("vRefractionInfos",4),N.addUniform("refractionMatrix",16),N.addUniform("vThicknessInfos",2),N.addUniform("thicknessMatrix",16),N.addUniform("vThicknessParam",2),N.addUniform("vDiffusionDistance",3),N.addUniform("vTintColor",4),N.addUniform("vSubSurfaceIntensity",3),N.addUniform("scatteringDiffusionProfile",1)},K.prototype.copyTo=function(N){o.a.Clone(function(){return N},this)},K.prototype.serialize=function(){return o.a.Serialize(this)},K.prototype.parse=function(N,_,L){var z=this;o.a.Parse(function(){return z},N,_,L)},Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"isRefractionEnabled",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"isTranslucencyEnabled",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markScenePrePassDirty")],K.prototype,"isScatteringEnabled",void 0),Object(l.c)([Object(o.c)()],K.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(l.c)([Object(o.c)()],K.prototype,"refractionIntensity",void 0),Object(l.c)([Object(o.c)()],K.prototype,"translucencyIntensity",void 0),Object(l.c)([Object(o.c)()],K.prototype,"useAlbedoToTintRefraction",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"thicknessTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"refractionTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(o.c)()],K.prototype,"_volumeIndexOfRefraction",void 0),Object(l.c)([Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"volumeIndexOfRefraction",null),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"invertRefractionY",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"linkRefractionWithTransparency",void 0),Object(l.c)([Object(o.c)()],K.prototype,"minimumThickness",void 0),Object(l.c)([Object(o.c)()],K.prototype,"maximumThickness",void 0),Object(l.c)([Object(o.e)()],K.prototype,"tintColor",void 0),Object(l.c)([Object(o.c)()],K.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(o.e)()],K.prototype,"diffusionDistance",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"useMaskFromThicknessTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],K.prototype,"useMaskFromThicknessTextureGltf",void 0),K}(),x=a(744),M=a(491),b=a(459),C=a(552),u=a(553),S=a(442),R=a(523),p=a(435),c=a(746),E="pbrFragmentDeclaration",A=`uniform vec4 vEyePosition;
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
`;p.a.IncludesShadersStore[E]=A;var g={name:E,shader:A},H=a(674),U=a(745),I="pbrUboDeclaration",W=`layout(std140,column_major) uniform;





















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
`;p.a.IncludesShadersStore[I]=W;var Y={name:I,shader:W},$="pbrFragmentExtraDeclaration",G=`
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
#endif`;p.a.IncludesShadersStore[$]=G;var J={name:$,shader:G},ne=a(650),ee=a(651),oe="pbrFragmentSamplersDeclaration",q=`#ifdef ALBEDO
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
#endif`;p.a.IncludesShadersStore[oe]=q;var X={name:oe,shader:q},ge=a(524),_e=a(592),ie=a(558),de=a(597),se=a(457),me=a(627),le=a(605),V="pbrHelperFunctions",P=`
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
#endif`;p.a.IncludesShadersStore[V]=P;var w={name:V,shader:P},B=a(525),k=a(652),Q="harmonicsFunctions",F=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;p.a.IncludesShadersStore[Q]=F;var re={name:Q,shader:F},ve="pbrDirectLightingSetupFunctions",Se=`
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
}`;p.a.IncludesShadersStore[ve]=Se;var Ae={name:ve,shader:Se},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;p.a.IncludesShadersStore[Ce]=Oe;var Le={name:Ce,shader:Oe},xe=a(606),Ie=a(607),Me="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
`;p.a.IncludesShadersStore[Me]=Ve;var Ut={name:Me,shader:Ve},we="pbrIBLFunctions",He=`#if defined(REFLECTION) || defined(SS_REFRACTION)
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
#endif`;p.a.IncludesShadersStore[we]=He;var Vt={name:we,shader:He},wt=a(614),Ht=a(615),Gt=a(653),Ge="pbrBlockAlbedoOpacity",je=`struct albedoOpacityOutParams
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
`;p.a.IncludesShadersStore[Ge]=je;var jt={name:Ge,shader:je},We="pbrBlockReflectivity",ze=`struct reflectivityOutParams
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
`;p.a.IncludesShadersStore[We]=ze;var Wt={name:We,shader:ze},Xe="pbrBlockAmbientOcclusion",Ke=`struct ambientOcclusionOutParams
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
`;p.a.IncludesShadersStore[Xe]=Ke;var zt={name:Xe,shader:Ke},Ye="pbrBlockAlphaFresnel",Qe=`#ifdef ALPHAFRESNEL
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
`;p.a.IncludesShadersStore[Ye]=Qe;var Xt={name:Ye,shader:Qe},ke="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;p.a.IncludesShadersStore[ke]=Ze;var Kt={name:ke,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;p.a.IncludesShadersStore[Je]=qe;var Yt={name:Je,shader:qe},$e="pbrBlockSheen",et=`#ifdef SHEEN
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
`;p.a.IncludesShadersStore[$e]=et;var Qt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;p.a.IncludesShadersStore[tt]=nt;var kt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;p.a.IncludesShadersStore[rt]=it;var Zt={name:rt,shader:it},Jt=a(550),at="pbrBlockNormalGeometric",ot=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;p.a.IncludesShadersStore[at]=ot;var qt={name:at,shader:ot},$t=a(616),st="pbrBlockNormalFinal",lt=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;p.a.IncludesShadersStore[st]=lt;var en={name:st,shader:lt},tn=a(747),ft="pbrBlockLightmapInit",ct=`#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;p.a.IncludesShadersStore[ft]=ct;var nn={name:ft,shader:ct},ut="pbrBlockGeometryInfo",dt=`float NdotVUnclamped=dot(normalW,viewDirectionW);

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
`;p.a.IncludesShadersStore[ut]=dt;var rn={name:ut,shader:dt},ht="pbrBlockReflectance0",pt=`float reflectance=max(max(reflectivityOut.surfaceReflectivityColor.r,reflectivityOut.surfaceReflectivityColor.g),reflectivityOut.surfaceReflectivityColor.b);
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
`;p.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",mt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;p.a.IncludesShadersStore[vt]=mt;var on={name:vt,shader:mt},gt="pbrBlockDirectLighting",_t=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;p.a.IncludesShadersStore[gt]=_t;var sn={name:gt,shader:_t},ln=a(654),Et="pbrBlockFinalLitComponents",St=`



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
`;p.a.IncludesShadersStore[Et]=St;var fn={name:Et,shader:St},Tt="pbrBlockFinalUnlitComponents",At=`
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
`;p.a.IncludesShadersStore[Tt]=At;var cn={name:Tt,shader:At},Rt="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;p.a.IncludesShadersStore[Rt]=Pt;var un={name:Rt,shader:Pt},dn=a(701),hn=a(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;p.a.IncludesShadersStore[Ct]=Ot;var pn={name:Ct,shader:Ot},bt="pbrDebug",Mt=`#if DEBUGMODE>0
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
#endif`;p.a.IncludesShadersStore[bt]=Mt;var vn={name:bt,shader:Mt},xt="pbrPixelShader",It=`#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
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
`;p.a.ShadersStore[xt]=It;var mn={name:xt,shader:It},Dt="pbrVertexDeclaration",yt=`uniform mat4 view;
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
#endif`;p.a.IncludesShadersStore[Dt]=yt;var gn={name:Dt,shader:yt},_n=a(487),En=a(748),Sn=a(749),Tn=a(593),An=a(656),Rn=a(657),Pn=a(658),Cn=a(496),On=a(497),bn=a(507),Mn=a(508),xn=a(488),In=a(489),Dn=a(750),yn=a(675),Ln=a(551),Fn=a(702),Nn=a(659),Bn=a(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;p.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=a(512),Fe=a(751),De={effect:null,subMesh:null},Be=function(K){Object(l.d)(N,K);function N(){var _=K.call(this)||this;return _.PBR=!0,_.NUM_SAMPLES="0",_.REALTIME_FILTERING=!1,_.MAINUV1=!1,_.MAINUV2=!1,_.UV1=!1,_.UV2=!1,_.ALBEDO=!1,_.GAMMAALBEDO=!1,_.ALBEDODIRECTUV=0,_.VERTEXCOLOR=!1,_.DETAIL=!1,_.DETAILDIRECTUV=0,_.DETAIL_NORMALBLENDMETHOD=0,_.AMBIENT=!1,_.AMBIENTDIRECTUV=0,_.AMBIENTINGRAYSCALE=!1,_.OPACITY=!1,_.VERTEXALPHA=!1,_.OPACITYDIRECTUV=0,_.OPACITYRGB=!1,_.ALPHATEST=!1,_.DEPTHPREPASS=!1,_.ALPHABLEND=!1,_.ALPHAFROMALBEDO=!1,_.ALPHATESTVALUE="0.5",_.SPECULAROVERALPHA=!1,_.RADIANCEOVERALPHA=!1,_.ALPHAFRESNEL=!1,_.LINEARALPHAFRESNEL=!1,_.PREMULTIPLYALPHA=!1,_.EMISSIVE=!1,_.EMISSIVEDIRECTUV=0,_.REFLECTIVITY=!1,_.REFLECTIVITYDIRECTUV=0,_.SPECULARTERM=!1,_.MICROSURFACEFROMREFLECTIVITYMAP=!1,_.MICROSURFACEAUTOMATIC=!1,_.LODBASEDMICROSFURACE=!1,_.MICROSURFACEMAP=!1,_.MICROSURFACEMAPDIRECTUV=0,_.METALLICWORKFLOW=!1,_.ROUGHNESSSTOREINMETALMAPALPHA=!1,_.ROUGHNESSSTOREINMETALMAPGREEN=!1,_.METALLNESSSTOREINMETALMAPBLUE=!1,_.AOSTOREINMETALMAPRED=!1,_.METALLIC_REFLECTANCE=!1,_.METALLIC_REFLECTANCEDIRECTUV=0,_.ENVIRONMENTBRDF=!1,_.ENVIRONMENTBRDF_RGBD=!1,_.NORMAL=!1,_.TANGENT=!1,_.BUMP=!1,_.BUMPDIRECTUV=0,_.OBJECTSPACE_NORMALMAP=!1,_.PARALLAX=!1,_.PARALLAXOCCLUSION=!1,_.NORMALXYSCALE=!0,_.LIGHTMAP=!1,_.LIGHTMAPDIRECTUV=0,_.USELIGHTMAPASSHADOWMAP=!1,_.GAMMALIGHTMAP=!1,_.RGBDLIGHTMAP=!1,_.REFLECTION=!1,_.REFLECTIONMAP_3D=!1,_.REFLECTIONMAP_SPHERICAL=!1,_.REFLECTIONMAP_PLANAR=!1,_.REFLECTIONMAP_CUBIC=!1,_.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,_.REFLECTIONMAP_PROJECTION=!1,_.REFLECTIONMAP_SKYBOX=!1,_.REFLECTIONMAP_EXPLICIT=!1,_.REFLECTIONMAP_EQUIRECTANGULAR=!1,_.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,_.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,_.INVERTCUBICMAP=!1,_.USESPHERICALFROMREFLECTIONMAP=!1,_.USEIRRADIANCEMAP=!1,_.SPHERICAL_HARMONICS=!1,_.USESPHERICALINVERTEX=!1,_.REFLECTIONMAP_OPPOSITEZ=!1,_.LODINREFLECTIONALPHA=!1,_.GAMMAREFLECTION=!1,_.RGBDREFLECTION=!1,_.LINEARSPECULARREFLECTION=!1,_.RADIANCEOCCLUSION=!1,_.HORIZONOCCLUSION=!1,_.INSTANCES=!1,_.THIN_INSTANCES=!1,_.PREPASS=!1,_.PREPASS_IRRADIANCE=!1,_.PREPASS_IRRADIANCE_INDEX=-1,_.PREPASS_ALBEDO=!1,_.PREPASS_ALBEDO_INDEX=-1,_.PREPASS_DEPTH=!1,_.PREPASS_DEPTH_INDEX=-1,_.PREPASS_NORMAL=!1,_.PREPASS_NORMAL_INDEX=-1,_.PREPASS_POSITION=!1,_.PREPASS_POSITION_INDEX=-1,_.PREPASS_VELOCITY=!1,_.PREPASS_VELOCITY_INDEX=-1,_.PREPASS_REFLECTIVITY=!1,_.PREPASS_REFLECTIVITY_INDEX=-1,_.SCENE_MRT_COUNT=0,_.NUM_BONE_INFLUENCERS=0,_.BonesPerMesh=0,_.BONETEXTURE=!1,_.BONES_VELOCITY_ENABLED=!1,_.NONUNIFORMSCALING=!1,_.MORPHTARGETS=!1,_.MORPHTARGETS_NORMAL=!1,_.MORPHTARGETS_TANGENT=!1,_.MORPHTARGETS_UV=!1,_.NUM_MORPH_INFLUENCERS=0,_.MORPHTARGETS_TEXTURE=!1,_.IMAGEPROCESSING=!1,_.VIGNETTE=!1,_.VIGNETTEBLENDMODEMULTIPLY=!1,_.VIGNETTEBLENDMODEOPAQUE=!1,_.TONEMAPPING=!1,_.TONEMAPPING_ACES=!1,_.CONTRAST=!1,_.COLORCURVES=!1,_.COLORGRADING=!1,_.COLORGRADING3D=!1,_.SAMPLER3DGREENDEPTH=!1,_.SAMPLER3DBGRMAP=!1,_.IMAGEPROCESSINGPOSTPROCESS=!1,_.EXPOSURE=!1,_.MULTIVIEW=!1,_.USEPHYSICALLIGHTFALLOFF=!1,_.USEGLTFLIGHTFALLOFF=!1,_.TWOSIDEDLIGHTING=!1,_.SHADOWFLOAT=!1,_.CLIPPLANE=!1,_.CLIPPLANE2=!1,_.CLIPPLANE3=!1,_.CLIPPLANE4=!1,_.CLIPPLANE5=!1,_.CLIPPLANE6=!1,_.POINTSIZE=!1,_.FOG=!1,_.LOGARITHMICDEPTH=!1,_.FORCENORMALFORWARD=!1,_.SPECULARAA=!1,_.CLEARCOAT=!1,_.CLEARCOAT_DEFAULTIOR=!1,_.CLEARCOAT_TEXTURE=!1,_.CLEARCOAT_TEXTURE_ROUGHNESS=!1,_.CLEARCOAT_TEXTUREDIRECTUV=0,_.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,_.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,_.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,_.CLEARCOAT_BUMP=!1,_.CLEARCOAT_BUMPDIRECTUV=0,_.CLEARCOAT_REMAP_F0=!0,_.CLEARCOAT_TINT=!1,_.CLEARCOAT_TINT_TEXTURE=!1,_.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,_.ANISOTROPIC=!1,_.ANISOTROPIC_TEXTURE=!1,_.ANISOTROPIC_TEXTUREDIRECTUV=0,_.BRDF_V_HEIGHT_CORRELATED=!1,_.MS_BRDF_ENERGY_CONSERVATION=!1,_.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,_.SHEEN=!1,_.SHEEN_TEXTURE=!1,_.SHEEN_TEXTURE_ROUGHNESS=!1,_.SHEEN_TEXTUREDIRECTUV=0,_.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,_.SHEEN_LINKWITHALBEDO=!1,_.SHEEN_ROUGHNESS=!1,_.SHEEN_ALBEDOSCALING=!1,_.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,_.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,_.SUBSURFACE=!1,_.SS_REFRACTION=!1,_.SS_TRANSLUCENCY=!1,_.SS_SCATTERING=!1,_.SS_THICKNESSANDMASK_TEXTURE=!1,_.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,_.SS_REFRACTIONMAP_3D=!1,_.SS_REFRACTIONMAP_OPPOSITEZ=!1,_.SS_LODINREFRACTIONALPHA=!1,_.SS_GAMMAREFRACTION=!1,_.SS_RGBDREFRACTION=!1,_.SS_LINEARSPECULARREFRACTION=!1,_.SS_LINKREFRACTIONTOTRANSPARENCY=!1,_.SS_ALBEDOFORREFRACTIONTINT=!1,_.SS_MASK_FROM_THICKNESS_TEXTURE=!1,_.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,_.UNLIT=!1,_.DEBUGMODE=0,_.rebuild(),_}return N.prototype.reset=function(){K.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},N}(C.a),Bt=function(K){Object(l.d)(N,K);function N(_,L){var z=K.call(this,_,L)||this;return z._directIntensity=1,z._emissiveIntensity=1,z._environmentIntensity=1,z._specularIntensity=1,z._lightingInfos=new m.f(z._directIntensity,z._emissiveIntensity,z._environmentIntensity,z._specularIntensity),z._disableBumpMap=!1,z._albedoTexture=null,z._ambientTexture=null,z._ambientTextureStrength=1,z._ambientTextureImpactOnAnalyticalLights=N.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,z._opacityTexture=null,z._reflectionTexture=null,z._emissiveTexture=null,z._reflectivityTexture=null,z._metallicTexture=null,z._metallic=null,z._roughness=null,z._metallicF0Factor=1,z._metallicReflectanceColor=f.a.White(),z._metallicReflectanceTexture=null,z._microSurfaceTexture=null,z._bumpTexture=null,z._lightmapTexture=null,z._ambientColor=new f.a(0,0,0),z._albedoColor=new f.a(1,1,1),z._reflectivityColor=new f.a(1,1,1),z._reflectionColor=new f.a(1,1,1),z._emissiveColor=new f.a(0,0,0),z._microSurface=.9,z._useLightmapAsShadowmap=!1,z._useHorizonOcclusion=!0,z._useRadianceOcclusion=!0,z._useAlphaFromAlbedoTexture=!1,z._useSpecularOverAlpha=!0,z._useMicroSurfaceFromReflectivityMapAlpha=!1,z._useRoughnessFromMetallicTextureAlpha=!0,z._useRoughnessFromMetallicTextureGreen=!1,z._useMetallnessFromMetallicTextureBlue=!1,z._useAmbientOcclusionFromMetallicTextureRed=!1,z._useAmbientInGrayScale=!1,z._useAutoMicroSurfaceFromReflectivityMap=!1,z._lightFalloff=N.LIGHTFALLOFF_PHYSICAL,z._useRadianceOverAlpha=!0,z._useObjectSpaceNormalMap=!1,z._useParallax=!1,z._useParallaxOcclusion=!1,z._parallaxScaleBias=.05,z._disableLighting=!1,z._maxSimultaneousLights=4,z._invertNormalMapX=!1,z._invertNormalMapY=!1,z._twoSidedLighting=!1,z._alphaCutOff=.4,z._forceAlphaTest=!1,z._useAlphaFresnel=!1,z._useLinearAlphaFresnel=!1,z._environmentBRDFTexture=null,z._forceIrradianceInFragment=!1,z._realTimeFiltering=!1,z._realTimeFilteringQuality=8,z._forceNormalForward=!1,z._enableSpecularAntiAliasing=!1,z._imageProcessingObserver=null,z._renderTargets=new O.a(16),z._globalAmbientColor=new f.a(0,0,0),z._useLogarithmicDepth=!1,z._unlit=!1,z._debugMode=0,z.debugMode=0,z.debugLimit=-1,z.debugFactor=1,z.clearCoat=new e.a(z._markAllSubMeshesAsTexturesDirty.bind(z)),z.anisotropy=new r(z._markAllSubMeshesAsTexturesDirty.bind(z)),z.brdf=new s(z._markAllSubMeshesAsMiscDirty.bind(z)),z.sheen=new v(z._markAllSubMeshesAsTexturesDirty.bind(z)),z.detailMap=new Fe.a(z._markAllSubMeshesAsTexturesDirty.bind(z)),z._rebuildInParallel=!1,z._attachImageProcessingConfiguration(null),z.getRenderTargetTextures=function(){return z._renderTargets.reset(),t.a.ReflectionTextureEnabled&&z._reflectionTexture&&z._reflectionTexture.isRenderTarget&&z._renderTargets.push(z._reflectionTexture),z.subSurface.fillRenderTargetTextures(z._renderTargets),z._renderTargets},z._environmentBRDFTexture=h.a.GetEnvironmentBRDFTexture(L),z.subSurface=new T(z._markAllSubMeshesAsTexturesDirty.bind(z),z._markScenePrePassDirty.bind(z),L),z.prePassConfiguration=new x.a,z}return Object.defineProperty(N.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(_){this._realTimeFiltering=_,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(_){this._realTimeFilteringQuality=_,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),N.prototype._attachImageProcessingConfiguration=function(_){var L=this;_!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),_?this._imageProcessingConfiguration=_:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){L._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(N.prototype,"hasRenderTargetTextures",{get:function(){return t.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),N.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(N.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(_){this._useLogarithmicDepth=_&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===N.PBRMATERIAL_OPAQUE||this._transparencyMode===N.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),N.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},N.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===N.PBRMATERIAL_ALPHATEST)},N.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==N.PBRMATERIAL_OPAQUE},N.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},N.prototype.getAlphaTestTexture=function(){return this._albedoTexture},N.prototype.isReadyForSubMesh=function(_,L,z){if(L.effect&&this.isFrozen&&L.effect._wasPreviouslyReady)return!0;L._materialDefines||(L._materialDefines=new Be);var fe=L._materialDefines;if(this._isReadyForSubMesh(L))return!0;var pe=this.getScene(),ae=pe.getEngine();if(fe._areTexturesDirty&&pe.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&t.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&t.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Te=this._getReflectionTexture();if(Te&&t.a.ReflectionTextureEnabled&&(!Te.isReadyOrNotBlocking()||Te.irradianceTexture&&!Te.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&t.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&t.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(t.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(ae.getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(fe,pe)||!this.clearCoat.isReadyForSubMesh(fe,pe,ae,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(fe,pe)||!this.anisotropy.isReadyForSubMesh(fe,pe)||!this.detailMap.isReadyForSubMesh(fe,pe)||fe._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!ae.getCaps().standardDerivatives&&!_.isVerticesDataPresent(n.b.NormalKind)&&(_.createNormals(!0),y.a.Warn("PBRMaterial: Normals have been created for the mesh: "+_.name));var ce=L.effect,Z=fe._areLightsDisposed,he=this._prepareEffect(_,fe,this.onCompiled,this.onError,z,null,L.getRenderingMesh().hasThinInstances);if(he)if(this._onEffectCreatedObservable&&(De.effect=he,De.subMesh=L,this._onEffectCreatedObservable.notifyObservers(De)),this.allowShaderHotSwapping&&ce&&!he.isReady()){if(he=ce,this._rebuildInParallel=!0,fe.markAsUnprocessed(),Z)return fe._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,pe.resetCachedMaterial(),L.setEffect(he,fe),this.buildUniformLayout();return!L.effect||!L.effect.isReady()?!1:(fe._renderId=pe.getRenderId(),L.effect._wasPreviouslyReady=!0,!0)},N.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},N.prototype._prepareEffect=function(_,L,z,fe,pe,ae,Te){if(z===void 0&&(z=null),fe===void 0&&(fe=null),pe===void 0&&(pe=null),ae===void 0&&(ae=null),this._prepareDefines(_,L,pe,ae,Te),!L.isDirty)return null;L.markAsProcessed();var ce=this.getScene(),Z=ce.getEngine(),he=new Nt.a,Ee=0;L.USESPHERICALINVERTEX&&he.addFallback(Ee++,"USESPHERICALINVERTEX"),L.FOG&&he.addFallback(Ee,"FOG"),L.SPECULARAA&&he.addFallback(Ee,"SPECULARAA"),L.POINTSIZE&&he.addFallback(Ee,"POINTSIZE"),L.LOGARITHMICDEPTH&&he.addFallback(Ee,"LOGARITHMICDEPTH"),L.PARALLAX&&he.addFallback(Ee,"PARALLAX"),L.PARALLAXOCCLUSION&&he.addFallback(Ee++,"PARALLAXOCCLUSION"),Ee=r.AddFallbacks(L,he,Ee),Ee=r.AddFallbacks(L,he,Ee),Ee=T.AddFallbacks(L,he,Ee),Ee=v.AddFallbacks(L,he,Ee),L.ENVIRONMENTBRDF&&he.addFallback(Ee++,"ENVIRONMENTBRDF"),L.TANGENT&&he.addFallback(Ee++,"TANGENT"),L.BUMP&&he.addFallback(Ee++,"BUMP"),Ee=i.a.HandleFallbacksForShadows(L,he,this._maxSimultaneousLights,Ee++),L.SPECULARTERM&&he.addFallback(Ee++,"SPECULARTERM"),L.USESPHERICALFROMREFLECTIONMAP&&he.addFallback(Ee++,"USESPHERICALFROMREFLECTIONMAP"),L.USEIRRADIANCEMAP&&he.addFallback(Ee++,"USEIRRADIANCEMAP"),L.LIGHTMAP&&he.addFallback(Ee++,"LIGHTMAP"),L.NORMAL&&he.addFallback(Ee++,"NORMAL"),L.AMBIENT&&he.addFallback(Ee++,"AMBIENT"),L.EMISSIVE&&he.addFallback(Ee++,"EMISSIVE"),L.VERTEXCOLOR&&he.addFallback(Ee++,"VERTEXCOLOR"),L.MORPHTARGETS&&he.addFallback(Ee++,"MORPHTARGETS"),L.MULTIVIEW&&he.addFallback(0,"MULTIVIEW");var Re=[n.b.PositionKind];L.NORMAL&&Re.push(n.b.NormalKind),L.TANGENT&&Re.push(n.b.TangentKind),L.UV1&&Re.push(n.b.UVKind),L.UV2&&Re.push(n.b.UV2Kind),L.VERTEXCOLOR&&Re.push(n.b.ColorKind),i.a.PrepareAttributesForBones(Re,_,L,he),i.a.PrepareAttributesForInstances(Re,L),i.a.PrepareAttributesForMorphTargets(Re,_,L);var ue="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],ye=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),T.AddUniforms(Pe),T.AddSamplers(be),e.a.AddUniforms(Pe),e.a.AddSamplers(be),r.AddUniforms(Pe),r.AddSamplers(be),v.AddUniforms(Pe),v.AddSamplers(be),x.a.AddUniforms(Pe),x.a.AddSamplers(Pe),M.a&&(M.a.PrepareUniforms(Pe,L),M.a.PrepareSamplers(be,L)),i.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:L,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(ue=this.customShaderNameResolve(ue,Pe,ye,be,L,Re,Ne));var Ue=L.toString();return Z.createEffect(ue,{attributes:Re,uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:Ue,fallbacks:he,onCompiled:z,onError:fe,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:L.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:L.PREPASS},Z)},N.prototype._prepareDefines=function(_,L,z,fe,pe){z===void 0&&(z=null),fe===void 0&&(fe=null),pe===void 0&&(pe=!1);var ae=this.getScene(),Te=ae.getEngine();if(i.a.PrepareDefinesForLights(ae,_,L,!0,this._maxSimultaneousLights,this._disableLighting),L._needNormals=!0,i.a.PrepareDefinesForMultiview(ae,L),i.a.PrepareDefinesForPrePass(ae,L,this.canRenderToMRT),L.METALLICWORKFLOW=this.isMetallicWorkflow(),L._areTexturesDirty){if(L._needUVs=!1,ae.texturesEnabled){ae.getEngine().getCaps().textureLOD&&(L.LODBASEDMICROSFURACE=!0),this._albedoTexture&&t.a.DiffuseTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._albedoTexture,L,"ALBEDO"),L.GAMMAALBEDO=this._albedoTexture.gammaSpace):L.ALBEDO=!1,this._ambientTexture&&t.a.AmbientTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._ambientTexture,L,"AMBIENT"),L.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):L.AMBIENT=!1,this._opacityTexture&&t.a.OpacityTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._opacityTexture,L,"OPACITY"),L.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):L.OPACITY=!1;var ce=this._getReflectionTexture();if(ce&&t.a.ReflectionTextureEnabled){switch(L.REFLECTION=!0,L.GAMMAREFLECTION=ce.gammaSpace,L.RGBDREFLECTION=ce.isRGBD,L.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!ce.invertZ:ce.invertZ,L.LODINREFLECTIONALPHA=ce.lodLevelInAlpha,L.LINEARSPECULARREFLECTION=ce.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(L.NUM_SAMPLES=""+this.realTimeFilteringQuality,Te._features.needTypeSuffixInShaderConstants&&(L.NUM_SAMPLES=L.NUM_SAMPLES+"u"),L.REALTIME_FILTERING=!0):L.REALTIME_FILTERING=!1,ce.coordinatesMode===S.a.INVCUBIC_MODE&&(L.INVERTCUBICMAP=!0),L.REFLECTIONMAP_3D=ce.isCube,L.REFLECTIONMAP_CUBIC=!1,L.REFLECTIONMAP_EXPLICIT=!1,L.REFLECTIONMAP_PLANAR=!1,L.REFLECTIONMAP_PROJECTION=!1,L.REFLECTIONMAP_SKYBOX=!1,L.REFLECTIONMAP_SPHERICAL=!1,L.REFLECTIONMAP_EQUIRECTANGULAR=!1,L.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,L.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,ce.coordinatesMode){case S.a.EXPLICIT_MODE:L.REFLECTIONMAP_EXPLICIT=!0;break;case S.a.PLANAR_MODE:L.REFLECTIONMAP_PLANAR=!0;break;case S.a.PROJECTION_MODE:L.REFLECTIONMAP_PROJECTION=!0;break;case S.a.SKYBOX_MODE:L.REFLECTIONMAP_SKYBOX=!0;break;case S.a.SPHERICAL_MODE:L.REFLECTIONMAP_SPHERICAL=!0;break;case S.a.EQUIRECTANGULAR_MODE:L.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case S.a.FIXED_EQUIRECTANGULAR_MODE:L.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case S.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:L.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case S.a.CUBIC_MODE:case S.a.INVCUBIC_MODE:default:L.REFLECTIONMAP_CUBIC=!0,L.USE_LOCAL_REFLECTIONMAP_CUBIC=!!ce.boundingBoxSize;break}ce.coordinatesMode!==S.a.SKYBOX_MODE&&(ce.irradianceTexture?(L.USEIRRADIANCEMAP=!0,L.USESPHERICALFROMREFLECTIONMAP=!1):ce.isCube&&(L.USESPHERICALFROMREFLECTIONMAP=!0,L.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||ae.getEngine().getCaps().maxVaryingVectors<=8?L.USESPHERICALINVERTEX=!1:L.USESPHERICALINVERTEX=!0))}else L.REFLECTION=!1,L.REFLECTIONMAP_3D=!1,L.REFLECTIONMAP_SPHERICAL=!1,L.REFLECTIONMAP_PLANAR=!1,L.REFLECTIONMAP_CUBIC=!1,L.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,L.REFLECTIONMAP_PROJECTION=!1,L.REFLECTIONMAP_SKYBOX=!1,L.REFLECTIONMAP_EXPLICIT=!1,L.REFLECTIONMAP_EQUIRECTANGULAR=!1,L.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,L.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,L.INVERTCUBICMAP=!1,L.USESPHERICALFROMREFLECTIONMAP=!1,L.USEIRRADIANCEMAP=!1,L.USESPHERICALINVERTEX=!1,L.REFLECTIONMAP_OPPOSITEZ=!1,L.LODINREFLECTIONALPHA=!1,L.GAMMAREFLECTION=!1,L.RGBDREFLECTION=!1,L.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&t.a.LightmapTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._lightmapTexture,L,"LIGHTMAP"),L.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,L.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,L.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):L.LIGHTMAP=!1,this._emissiveTexture&&t.a.EmissiveTextureEnabled?i.a.PrepareDefinesForMergedUV(this._emissiveTexture,L,"EMISSIVE"):L.EMISSIVE=!1,t.a.SpecularTextureEnabled?(this._metallicTexture?(i.a.PrepareDefinesForMergedUV(this._metallicTexture,L,"REFLECTIVITY"),L.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,L.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,L.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,L.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(i.a.PrepareDefinesForMergedUV(this._reflectivityTexture,L,"REFLECTIVITY"),L.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,L.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):L.REFLECTIVITY=!1,this._metallicReflectanceTexture?i.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,L,"METALLIC_REFLECTANCE"):L.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?i.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,L,"MICROSURFACEMAP"):L.MICROSURFACEMAP=!1):(L.REFLECTIVITY=!1,L.MICROSURFACEMAP=!1),ae.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap?(i.a.PrepareDefinesForMergedUV(this._bumpTexture,L,"BUMP"),this._useParallax&&this._albedoTexture&&t.a.DiffuseTextureEnabled?(L.PARALLAX=!0,L.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):L.PARALLAX=!1,L.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):L.BUMP=!1,this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled?(L.ENVIRONMENTBRDF=!0,L.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(L.ENVIRONMENTBRDF=!1,L.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?L.ALPHAFROMALBEDO=!0:L.ALPHAFROMALBEDO=!1}L.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===N.LIGHTFALLOFF_STANDARD?(L.USEPHYSICALLIGHTFALLOFF=!1,L.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===N.LIGHTFALLOFF_GLTF?(L.USEPHYSICALLIGHTFALLOFF=!1,L.USEGLTFLIGHTFALLOFF=!0):(L.USEPHYSICALLIGHTFALLOFF=!0,L.USEGLTFLIGHTFALLOFF=!1),L.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?L.TWOSIDEDLIGHTING=!0:L.TWOSIDEDLIGHTING=!1,L.SPECULARAA=ae.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(L._areTexturesDirty||L._areMiscDirty)&&(L.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),L.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,L.ALPHABLEND=this.needAlphaBlendingForMesh(_),L.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,L.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),L._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(L),L.FORCENORMALFORWARD=this._forceNormalForward,L.RADIANCEOCCLUSION=this._useRadianceOcclusion,L.HORIZONOCCLUSION=this._useHorizonOcclusion,L._areMiscDirty&&(i.a.PrepareDefinesForMisc(_,ae,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(_)||this._forceAlphaTest,L),L.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!_.isVerticesDataPresent(n.b.NormalKind),L.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(L,ae),this.subSurface.prepareDefines(L,ae),this.clearCoat.prepareDefines(L,ae),this.anisotropy.prepareDefines(L,_,ae),this.brdf.prepareDefines(L),this.sheen.prepareDefines(L,ae),i.a.PrepareDefinesForFrameBoundValues(ae,Te,L,!!z,fe,pe),i.a.PrepareDefinesForAttributes(_,L,!0,!0,!0,this._transparencyMode!==N.PBRMATERIAL_OPAQUE)},N.prototype.forceCompilation=function(_,L,z){var fe=this,pe=Object(l.a)({clipPlane:!1,useInstances:!1},z),ae=new Be,Te=this._prepareEffect(_,ae,void 0,void 0,pe.useInstances,pe.clipPlane,_.hasThinInstances);this._onEffectCreatedObservable&&(De.effect=Te,De.subMesh=null,this._onEffectCreatedObservable.notifyObservers(De)),Te.isReady()?L&&L(this):Te.onCompileObservable.add(function(){L&&L(fe)})},N.prototype.buildUniformLayout=function(){var _=this._uniformBuffer;_.addUniform("vAlbedoInfos",2),_.addUniform("vAmbientInfos",4),_.addUniform("vOpacityInfos",2),_.addUniform("vEmissiveInfos",2),_.addUniform("vLightmapInfos",2),_.addUniform("vReflectivityInfos",3),_.addUniform("vMicroSurfaceSamplerInfos",2),_.addUniform("vReflectionInfos",2),_.addUniform("vReflectionFilteringInfo",2),_.addUniform("vReflectionPosition",3),_.addUniform("vReflectionSize",3),_.addUniform("vBumpInfos",3),_.addUniform("albedoMatrix",16),_.addUniform("ambientMatrix",16),_.addUniform("opacityMatrix",16),_.addUniform("emissiveMatrix",16),_.addUniform("lightmapMatrix",16),_.addUniform("reflectivityMatrix",16),_.addUniform("microSurfaceSamplerMatrix",16),_.addUniform("bumpMatrix",16),_.addUniform("vTangentSpaceParams",2),_.addUniform("reflectionMatrix",16),_.addUniform("vReflectionColor",3),_.addUniform("vAlbedoColor",4),_.addUniform("vLightingIntensity",4),_.addUniform("vReflectionMicrosurfaceInfos",3),_.addUniform("pointSize",1),_.addUniform("vReflectivityColor",4),_.addUniform("vEmissiveColor",3),_.addUniform("vAmbientColor",3),_.addUniform("vDebugMode",2),_.addUniform("vMetallicReflectanceFactors",4),_.addUniform("vMetallicReflectanceInfos",2),_.addUniform("metallicReflectanceMatrix",16),e.a.PrepareUniformBuffer(_),r.PrepareUniformBuffer(_),v.PrepareUniformBuffer(_),T.PrepareUniformBuffer(_),Fe.a.PrepareUniformBuffer(_),_.addUniform("vSphericalL00",3),_.addUniform("vSphericalL1_1",3),_.addUniform("vSphericalL10",3),_.addUniform("vSphericalL11",3),_.addUniform("vSphericalL2_2",3),_.addUniform("vSphericalL2_1",3),_.addUniform("vSphericalL20",3),_.addUniform("vSphericalL21",3),_.addUniform("vSphericalL22",3),_.addUniform("vSphericalX",3),_.addUniform("vSphericalY",3),_.addUniform("vSphericalZ",3),_.addUniform("vSphericalXX_ZZ",3),_.addUniform("vSphericalYY_ZZ",3),_.addUniform("vSphericalZZ",3),_.addUniform("vSphericalXY",3),_.addUniform("vSphericalYZ",3),_.addUniform("vSphericalZX",3),_.create()},N.prototype.unbind=function(){if(this._activeEffect){var _=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),_=!0),this.subSurface.unbind(this._activeEffect)&&(_=!0),_&&this._markAllSubMeshesAsTexturesDirty()}K.prototype.unbind.call(this)},N.prototype.bindForSubMesh=function(_,L,z){var fe=this.getScene(),pe=z._materialDefines;if(!!pe){var ae=z.effect;if(!!ae){this._activeEffect=ae,L.getMeshUniformBuffer().bindToEffect(ae,"Mesh"),L.transferToEffect(_),this.prePassConfiguration.bindForSubMesh(this._activeEffect,fe,L,_,this.isFrozen),pe.OBJECTSPACE_NORMALMAP&&(_.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Te=this._mustRebind(fe,ae,L.visibility);i.a.BindBonesParameters(L,this._activeEffect,this.prePassConfiguration);var ce=null,Z=this._uniformBuffer;if(Te){var he=fe.getEngine();if(Z.bindToEffect(ae,"Material"),this.bindViewProjection(ae),ce=this._getReflectionTexture(),!Z.useUbo||!this.isFrozen||!Z.isSync){if(fe.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&(Z.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),i.a.BindTextureMatrix(this._albedoTexture,Z,"albedo")),this._ambientTexture&&t.a.AmbientTextureEnabled&&(Z.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),i.a.BindTextureMatrix(this._ambientTexture,Z,"ambient")),this._opacityTexture&&t.a.OpacityTextureEnabled&&(Z.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),i.a.BindTextureMatrix(this._opacityTexture,Z,"opacity")),ce&&t.a.ReflectionTextureEnabled){if(Z.updateMatrix("reflectionMatrix",ce.getReflectionTextureMatrix()),Z.updateFloat2("vReflectionInfos",ce.level,0),ce.boundingBoxSize){var Ee=ce;Z.updateVector3("vReflectionPosition",Ee.boundingBoxPosition),Z.updateVector3("vReflectionSize",Ee.boundingBoxSize)}if(this.realTimeFiltering){var Re=ce.getSize().width;Z.updateFloat2("vReflectionFilteringInfo",Re,d.a.Log2(Re))}if(!pe.USEIRRADIANCEMAP){var ue=ce.sphericalPolynomial;if(pe.USESPHERICALFROMREFLECTIONMAP&&ue)if(pe.SPHERICAL_HARMONICS){var Pe=ue.preScaledHarmonics;Z.updateVector3("vSphericalL00",Pe.l00),Z.updateVector3("vSphericalL1_1",Pe.l1_1),Z.updateVector3("vSphericalL10",Pe.l10),Z.updateVector3("vSphericalL11",Pe.l11),Z.updateVector3("vSphericalL2_2",Pe.l2_2),Z.updateVector3("vSphericalL2_1",Pe.l2_1),Z.updateVector3("vSphericalL20",Pe.l20),Z.updateVector3("vSphericalL21",Pe.l21),Z.updateVector3("vSphericalL22",Pe.l22)}else Z.updateFloat3("vSphericalX",ue.x.x,ue.x.y,ue.x.z),Z.updateFloat3("vSphericalY",ue.y.x,ue.y.y,ue.y.z),Z.updateFloat3("vSphericalZ",ue.z.x,ue.z.y,ue.z.z),Z.updateFloat3("vSphericalXX_ZZ",ue.xx.x-ue.zz.x,ue.xx.y-ue.zz.y,ue.xx.z-ue.zz.z),Z.updateFloat3("vSphericalYY_ZZ",ue.yy.x-ue.zz.x,ue.yy.y-ue.zz.y,ue.yy.z-ue.zz.z),Z.updateFloat3("vSphericalZZ",ue.zz.x,ue.zz.y,ue.zz.z),Z.updateFloat3("vSphericalXY",ue.xy.x,ue.xy.y,ue.xy.z),Z.updateFloat3("vSphericalYZ",ue.yz.x,ue.yz.y,ue.yz.z),Z.updateFloat3("vSphericalZX",ue.zx.x,ue.zx.y,ue.zx.z)}Z.updateFloat3("vReflectionMicrosurfaceInfos",ce.getSize().width,ce.lodGenerationScale,ce.lodGenerationOffset)}this._emissiveTexture&&t.a.EmissiveTextureEnabled&&(Z.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),i.a.BindTextureMatrix(this._emissiveTexture,Z,"emissive")),this._lightmapTexture&&t.a.LightmapTextureEnabled&&(Z.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),i.a.BindTextureMatrix(this._lightmapTexture,Z,"lightmap")),t.a.SpecularTextureEnabled&&(this._metallicTexture?(Z.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),i.a.BindTextureMatrix(this._metallicTexture,Z,"reflectivity")):this._reflectivityTexture&&(Z.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),i.a.BindTextureMatrix(this._reflectivityTexture,Z,"reflectivity")),this._metallicReflectanceTexture&&(Z.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),i.a.BindTextureMatrix(this._metallicReflectanceTexture,Z,"metallicReflectance")),this._microSurfaceTexture&&(Z.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),i.a.BindTextureMatrix(this._microSurfaceTexture,Z,"microSurfaceSampler"))),this._bumpTexture&&he.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&(Z.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),i.a.BindTextureMatrix(this._bumpTexture,Z,"bump"),fe._mirroredCameraPosition?Z.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):Z.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&Z.updateFloat("pointSize",this.pointSize),pe.METALLICWORKFLOW){f.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,f.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,Z.updateColor4("vReflectivityColor",f.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,ye=1,Ne=Math.pow((be-ye)/(be+ye),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,f.c.Color3[0]);var Ue=this._metallicF0Factor;Z.updateColor4("vMetallicReflectanceFactors",f.c.Color3[0],Ue)}else Z.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);Z.updateColor3("vEmissiveColor",t.a.EmissiveTextureEnabled?this._emissiveColor:f.a.BlackReadOnly),Z.updateColor3("vReflectionColor",this._reflectionColor),!pe.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?Z.updateColor4("vAlbedoColor",this._albedoColor,1):Z.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*fe.environmentIntensity,this._lightingInfos.w=this._specularIntensity,Z.updateVector4("vLightingIntensity",this._lightingInfos),fe.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),Z.updateColor3("vAmbientColor",this._globalAmbientColor),Z.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}fe.texturesEnabled&&(this._albedoTexture&&t.a.DiffuseTextureEnabled&&Z.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&t.a.AmbientTextureEnabled&&Z.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.a.OpacityTextureEnabled&&Z.setTexture("opacitySampler",this._opacityTexture),ce&&t.a.ReflectionTextureEnabled&&(pe.LODBASEDMICROSFURACE?Z.setTexture("reflectionSampler",ce):(Z.setTexture("reflectionSampler",ce._lodTextureMid||ce),Z.setTexture("reflectionSamplerLow",ce._lodTextureLow||ce),Z.setTexture("reflectionSamplerHigh",ce._lodTextureHigh||ce)),pe.USEIRRADIANCEMAP&&Z.setTexture("irradianceSampler",ce.irradianceTexture)),pe.ENVIRONMENTBRDF&&Z.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&t.a.EmissiveTextureEnabled&&Z.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.a.LightmapTextureEnabled&&Z.setTexture("lightmapSampler",this._lightmapTexture),t.a.SpecularTextureEnabled&&(this._metallicTexture?Z.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&Z.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&Z.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&Z.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&he.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&Z.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(Z,fe,this.isFrozen),this.subSurface.bindForSubMesh(Z,fe,he,this.isFrozen,pe.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(Z,fe,he,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,z),this.anisotropy.bindForSubMesh(Z,fe,this.isFrozen),this.sheen.bindForSubMesh(Z,fe,this.isFrozen,z),i.a.BindClipPlane(this._activeEffect,fe),this.bindEyePosition(ae)}(Te||!this.isFrozen)&&(fe.lightsEnabled&&!this._disableLighting&&i.a.BindLights(fe,L,this._activeEffect,pe,this._maxSimultaneousLights,this._rebuildInParallel),(fe.fogEnabled&&L.applyFog&&fe.fogMode!==D.a.FOGMODE_NONE||ce)&&this.bindView(ae),i.a.BindFogParameters(fe,L,this._activeEffect,!0),pe.NUM_MORPH_INFLUENCERS&&i.a.BindMorphTargetParameters(L,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),i.a.BindLogDepth(pe,this._activeEffect,fe)),this._afterBind(L,this._activeEffect),Z.update()}}},N.prototype.getAnimatables=function(){var _=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&_.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&_.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&_.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&_.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&_.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?_.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&_.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&_.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&_.push(this._lightmapTexture),this.detailMap.getAnimatables(_),this.subSurface.getAnimatables(_),this.clearCoat.getAnimatables(_),this.sheen.getAnimatables(_),this.anisotropy.getAnimatables(_),_},N.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},N.prototype.getActiveTextures=function(){var _=K.prototype.getActiveTextures.call(this);return this._albedoTexture&&_.push(this._albedoTexture),this._ambientTexture&&_.push(this._ambientTexture),this._opacityTexture&&_.push(this._opacityTexture),this._reflectionTexture&&_.push(this._reflectionTexture),this._emissiveTexture&&_.push(this._emissiveTexture),this._reflectivityTexture&&_.push(this._reflectivityTexture),this._metallicTexture&&_.push(this._metallicTexture),this._metallicReflectanceTexture&&_.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&_.push(this._microSurfaceTexture),this._bumpTexture&&_.push(this._bumpTexture),this._lightmapTexture&&_.push(this._lightmapTexture),this.detailMap.getActiveTextures(_),this.subSurface.getActiveTextures(_),this.clearCoat.getActiveTextures(_),this.sheen.getActiveTextures(_),this.anisotropy.getActiveTextures(_),_},N.prototype.hasTexture=function(_){return K.prototype.hasTexture.call(this,_)||this._albedoTexture===_||this._ambientTexture===_||this._opacityTexture===_||this._reflectionTexture===_||this._reflectivityTexture===_||this._metallicTexture===_||this._metallicReflectanceTexture===_||this._microSurfaceTexture===_||this._bumpTexture===_||this._lightmapTexture===_?!0:this.detailMap.hasTexture(_)||this.subSurface.hasTexture(_)||this.clearCoat.hasTexture(_)||this.sheen.hasTexture(_)||this.anisotropy.hasTexture(_)},N.prototype.setPrePassRenderer=function(_){if(this.subSurface.isScatteringEnabled){var L=this.getScene().enableSubSurfaceForPrePass();return L&&(L.enabled=!0),!0}return!1},N.prototype.dispose=function(_,L){var z,fe,pe,ae,Te,ce,Z,he,Ee,Re,ue;L&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(z=this._albedoTexture)===null||z===void 0||z.dispose(),(fe=this._ambientTexture)===null||fe===void 0||fe.dispose(),(pe=this._opacityTexture)===null||pe===void 0||pe.dispose(),(ae=this._reflectionTexture)===null||ae===void 0||ae.dispose(),(Te=this._emissiveTexture)===null||Te===void 0||Te.dispose(),(ce=this._metallicTexture)===null||ce===void 0||ce.dispose(),(Z=this._reflectivityTexture)===null||Z===void 0||Z.dispose(),(he=this._bumpTexture)===null||he===void 0||he.dispose(),(Ee=this._lightmapTexture)===null||Ee===void 0||Ee.dispose(),(Re=this._metallicReflectanceTexture)===null||Re===void 0||Re.dispose(),(ue=this._microSurfaceTexture)===null||ue===void 0||ue.dispose()),this.detailMap.dispose(L),this.subSurface.dispose(L),this.clearCoat.dispose(L),this.sheen.dispose(L),this.anisotropy.dispose(L),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),K.prototype.dispose.call(this,_,L)},N.PBRMATERIAL_OPAQUE=b.a.MATERIAL_OPAQUE,N.PBRMATERIAL_ALPHATEST=b.a.MATERIAL_ALPHATEST,N.PBRMATERIAL_ALPHABLEND=b.a.MATERIAL_ALPHABLEND,N.PBRMATERIAL_ALPHATESTANDBLEND=b.a.MATERIAL_ALPHATESTANDBLEND,N.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,N.LIGHTFALLOFF_PHYSICAL=0,N.LIGHTFALLOFF_GLTF=1,N.LIGHTFALLOFF_STANDARD=2,Object(l.c)([Object(o.i)()],N.prototype,"_imageProcessingConfiguration",void 0),Object(l.c)([Object(o.b)("_markAllSubMeshesAsMiscDirty")],N.prototype,"debugMode",void 0),Object(l.c)([Object(o.c)()],N.prototype,"useLogarithmicDepth",null),N}(u.a)},530:function(te,j,a){"use strict";a.d(j,"a",function(){return n});var l=a(483),o=a(572),y=a(438),O=a(449),h=a(436),D=a(589),m=a(542),n=function(){function e(t,i,r,s,f,v,d,T,x,M){r===void 0&&(r=0),s===void 0&&(s=100),f===void 0&&(f=!1),v===void 0&&(v=1),M===void 0&&(M=!1),this.target=i,this.fromFrame=r,this.toFrame=s,this.loopAnimation=f,this.onAnimationEnd=d,this.onAnimationLoop=x,this.isAdditive=M,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new y.c,this.onAnimationLoopObservable=new y.c,this._scene=t,T&&this.appendAnimations(i,T),this._speedRatio=v,t._activeAnimatables.push(this)}return Object.defineProperty(e.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._weight},set:function(t){if(t===-1){this._weight=-1;return}this._weight=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(t){for(var i=0;i<this._runtimeAnimations.length;i++){var r=this._runtimeAnimations[i];r._prepareForSpeedRatioChange(t)}this._speedRatio=t},enumerable:!1,configurable:!0}),e.prototype.syncWith=function(t){if(this._syncRoot=t,t){var i=this._scene._activeAnimatables.indexOf(this);i>-1&&(this._scene._activeAnimatables.splice(i,1),this._scene._activeAnimatables.push(this))}return this},e.prototype.getAnimations=function(){return this._runtimeAnimations},e.prototype.appendAnimations=function(t,i){for(var r=this,s=0;s<i.length;s++){var f=i[s],v=new o.a(t,f,this._scene,this);v._onLoop=function(){r.onAnimationLoopObservable.notifyObservers(r),r.onAnimationLoop&&r.onAnimationLoop()},this._runtimeAnimations.push(v)}},e.prototype.getAnimationByTargetProperty=function(t){for(var i=this._runtimeAnimations,r=0;r<i.length;r++)if(i[r].animation.targetProperty===t)return i[r].animation;return null},e.prototype.getRuntimeAnimationByTargetProperty=function(t){for(var i=this._runtimeAnimations,r=0;r<i.length;r++)if(i[r].animation.targetProperty===t)return i[r];return null},e.prototype.reset=function(){for(var t=this._runtimeAnimations,i=0;i<t.length;i++)t[i].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},e.prototype.enableBlending=function(t){for(var i=this._runtimeAnimations,r=0;r<i.length;r++)i[r].animation.enableBlending=!0,i[r].animation.blendingSpeed=t},e.prototype.disableBlending=function(){for(var t=this._runtimeAnimations,i=0;i<t.length;i++)t[i].animation.enableBlending=!1},e.prototype.goToFrame=function(t){var i=this._runtimeAnimations;if(i[0]){var r=i[0].animation.framePerSecond,s=i[0].currentFrame,f=this.speedRatio===0?0:(t-s)/r*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=f}for(var v=0;v<i.length;v++)i[v].goToFrame(t)},e.prototype.pause=function(){this._paused||(this._paused=!0)},e.prototype.restart=function(){this._paused=!1},e.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},e.prototype.stop=function(t,i){if(t||i){var r=this._scene._activeAnimatables.indexOf(this);if(r>-1){for(var s=this._runtimeAnimations,f=s.length-1;f>=0;f--){var v=s[f];t&&v.animation.name!=t||i&&!i(v.target)||(v.dispose(),s.splice(f,1))}s.length==0&&(this._scene._activeAnimatables.splice(r,1),this._raiseOnAnimationEnd())}}else{var f=this._scene._activeAnimatables.indexOf(this);if(f>-1){this._scene._activeAnimatables.splice(f,1);for(var s=this._runtimeAnimations,f=0;f<s.length;f++)s[f].dispose();this._raiseOnAnimationEnd()}}},e.prototype.waitAsync=function(){var t=this;return new Promise(function(i,r){t.onAnimationEndObservable.add(function(){i(t)},void 0,void 0,t,!0)})},e.prototype._animate=function(t){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=t),!0;if(this._localDelayOffset===null?(this._localDelayOffset=t,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=t-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var i=!1,r=this._runtimeAnimations,s;for(s=0;s<r.length;s++){var f=r[s],v=f.animate(t-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);i=i||v}if(this.animationStarted=i,!i){if(this.disposeOnEnd)for(s=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(s,1),s=0;s<r.length;s++)r[s].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return i},e}();O.a.prototype._animate=function(){if(!!this.animationsEnabled){var e=D.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=e}this.deltaTime=this.useConstantAnimationDeltaTime?16:(e-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=e;var t=this._activeAnimatables;if(t.length!==0){this._animationTime+=this.deltaTime;for(var i=this._animationTime,r=0;r<t.length;r++){var s=t[r];!s._animate(i)&&s.disposeOnEnd&&r--}this._processLateAnimationBindings()}}},O.a.prototype.beginWeightedAnimation=function(e,t,i,r,s,f,v,d,T,x,M){r===void 0&&(r=1),f===void 0&&(f=1),M===void 0&&(M=!1);var b=this.beginAnimation(e,t,i,s,f,v,d,!1,T,x,M);return b.weight=r,b},O.a.prototype.beginAnimation=function(e,t,i,r,s,f,v,d,T,x,M){s===void 0&&(s=1),d===void 0&&(d=!0),M===void 0&&(M=!1),t>i&&s>0&&(s*=-1),d&&this.stopAnimation(e,void 0,T),v||(v=new n(this,e,t,i,r,s,f,void 0,x,M));var b=T?T(e):!0;if(e.animations&&b&&v.appendAnimations(e,e.animations),e.getAnimatables)for(var C=e.getAnimatables(),u=0;u<C.length;u++)this.beginAnimation(C[u],t,i,r,s,f,v,d,T,x);return v.reset(),v},O.a.prototype.beginHierarchyAnimation=function(e,t,i,r,s,f,v,d,T,x,M,b){f===void 0&&(f=1),T===void 0&&(T=!0),b===void 0&&(b=!1);var C=e.getDescendants(t),u=[];u.push(this.beginAnimation(e,i,r,s,f,v,d,T,x,void 0,b));for(var S=0,R=C;S<R.length;S++){var p=R[S];u.push(this.beginAnimation(p,i,r,s,f,v,d,T,x,void 0,b))}return u},O.a.prototype.beginDirectAnimation=function(e,t,i,r,s,f,v,d,T){T===void 0&&(T=!1),f===void 0&&(f=1),i>r&&f>0&&(f*=-1);var x=new n(this,e,i,r,s,f,v,t,d,T);return x},O.a.prototype.beginDirectHierarchyAnimation=function(e,t,i,r,s,f,v,d,T,x){x===void 0&&(x=!1);var M=e.getDescendants(t),b=[];b.push(this.beginDirectAnimation(e,i,r,s,f,v,d,T,x));for(var C=0,u=M;C<u.length;C++){var S=u[C];b.push(this.beginDirectAnimation(S,i,r,s,f,v,d,T,x))}return b},O.a.prototype.getAnimatableByTarget=function(e){for(var t=0;t<this._activeAnimatables.length;t++)if(this._activeAnimatables[t].target===e)return this._activeAnimatables[t];return null},O.a.prototype.getAllAnimatablesByTarget=function(e){for(var t=[],i=0;i<this._activeAnimatables.length;i++)this._activeAnimatables[i].target===e&&t.push(this._activeAnimatables[i]);return t},O.a.prototype.stopAnimation=function(e,t,i){for(var r=this.getAllAnimatablesByTarget(e),s=0,f=r;s<f.length;s++){var v=f[s];v.stop(t,i)}},O.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var e=0;e<this._activeAnimatables.length;e++)this._activeAnimatables[e].stop();this._activeAnimatables=[]}for(var t=0,i=this.animationGroups;t<i.length;t++){var r=i[t];r.stop()}},O.a.prototype._registerTargetForLateAnimationBinding=function(e,t){var i=e.target;this._registeredForLateAnimationBindings.pushNoDuplicate(i),i._lateAnimationHolders||(i._lateAnimationHolders={}),i._lateAnimationHolders[e.targetPath]||(i._lateAnimationHolders[e.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:t}),e.isAdditive?(i._lateAnimationHolders[e.targetPath].additiveAnimations.push(e),i._lateAnimationHolders[e.targetPath].totalAdditiveWeight+=e.weight):(i._lateAnimationHolders[e.targetPath].animations.push(e),i._lateAnimationHolders[e.targetPath].totalWeight+=e.weight)},O.a.prototype._processLateAnimationBindingsForMatrices=function(e){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return e.originalValue;var t=1,i=h.c.Vector3[0],r=h.c.Vector3[1],s=h.c.Quaternion[0],f=0,v=e.animations[0],d=e.originalValue,T=1,x=!1;if(e.totalWeight<1)T=1-e.totalWeight,d.decompose(r,s,i);else{if(f=1,t=e.totalWeight,T=v.weight/t,T==1)if(e.totalAdditiveWeight)x=!0;else return v.currentValue;v.currentValue.decompose(r,s,i)}if(!x){r.scaleInPlace(T),i.scaleInPlace(T),s.scaleInPlace(T);for(var M=f;M<e.animations.length;M++){var b=e.animations[M];if(b.weight!==0){var T=b.weight/t,C=h.c.Vector3[2],u=h.c.Vector3[3],S=h.c.Quaternion[1];b.currentValue.decompose(u,S,C),u.scaleAndAddToRef(T,r),S.scaleAndAddToRef(T,s),C.scaleAndAddToRef(T,i)}}}for(var R=0;R<e.additiveAnimations.length;R++){var b=e.additiveAnimations[R];if(b.weight!==0){var C=h.c.Vector3[2],u=h.c.Vector3[3],S=h.c.Quaternion[1];b.currentValue.decompose(u,S,C),u.multiplyToRef(r,u),h.e.LerpToRef(r,u,b.weight,r),s.multiplyToRef(S,S),h.b.SlerpToRef(s,S,b.weight,s),C.scaleAndAddToRef(b.weight,i)}}var p=v?v._animationState.workValue:h.c.Matrix[0].clone();return h.a.ComposeToRef(r,s,i,p),p},O.a.prototype._processLateAnimationBindingsForQuaternions=function(e,t){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return t;var i=e.animations[0],r=e.originalValue,s=t;if(e.totalWeight===0&&e.totalAdditiveWeight>0)s.copyFrom(r);else if(e.animations.length===1){if(h.b.SlerpToRef(r,i.currentValue,Math.min(1,e.totalWeight),s),e.totalAdditiveWeight===0)return s}else if(e.animations.length>1){var f=1,v=void 0,d=void 0;if(e.totalWeight<1){var T=1-e.totalWeight;v=[],d=[],v.push(r),d.push(T)}else{if(e.animations.length===2&&(h.b.SlerpToRef(e.animations[0].currentValue,e.animations[1].currentValue,e.animations[1].weight/e.totalWeight,t),e.totalAdditiveWeight===0))return t;v=[],d=[],f=e.totalWeight}for(var x=0;x<e.animations.length;x++){var M=e.animations[x];v.push(M.currentValue),d.push(M.weight/f)}for(var b=0,C=0;C<v.length;){if(!C){h.b.SlerpToRef(v[C],v[C+1],d[C+1]/(d[C]+d[C+1]),t),s=t,b=d[C]+d[C+1],C+=2;continue}b+=d[C],h.b.SlerpToRef(s,v[C],d[C]/b,s),C++}}for(var u=0;u<e.additiveAnimations.length;u++){var M=e.additiveAnimations[u];M.weight!==0&&(s.multiplyToRef(M.currentValue,h.c.Quaternion[0]),h.b.SlerpToRef(s,h.c.Quaternion[0],M.weight,s))}return s},O.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var e=0;e<this._registeredForLateAnimationBindings.length;e++){var t=this._registeredForLateAnimationBindings.data[e];for(var i in t._lateAnimationHolders){var r=t._lateAnimationHolders[i],s=r.animations[0],f=r.originalValue,v=l.a.AllowMatrixDecomposeForInterpolation&&f.m,d=t[i];if(v)d=this._processLateAnimationBindingsForMatrices(r);else{var T=f.w!==void 0;if(T)d=this._processLateAnimationBindingsForQuaternions(r,d||h.b.Identity());else{var x=0,M=1;if(r.totalWeight<1)s&&f.scale?d=f.scale(1-r.totalWeight):s?d=f*(1-r.totalWeight):f.clone?d=f.clone():d=f;else if(s){M=r.totalWeight;var b=s.weight/M;b!==1?s.currentValue.scale?d=s.currentValue.scale(b):d=s.currentValue*b:d=s.currentValue,x=1}for(var C=x;C<r.animations.length;C++){var u=r.animations[C],S=u.weight/M;if(S)u.currentValue.scaleAndAddToRef?u.currentValue.scaleAndAddToRef(S,d):d+=u.currentValue*S;else continue}for(var R=0;R<r.additiveAnimations.length;R++){var u=r.additiveAnimations[R],S=u.weight;if(S)u.currentValue.scaleAndAddToRef?u.currentValue.scaleAndAddToRef(S,d):d+=u.currentValue*S;else continue}}}t[i]=d}t._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},m.a.prototype.copyAnimationRange=function(e,t,i,r,s){r===void 0&&(r=!1),s===void 0&&(s=null),this.animations.length===0&&(this.animations.push(new l.a(this.name,"_matrix",e.animations[0].framePerSecond,l.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var f=e.animations[0].getRange(t);if(!f)return!1;for(var v=f.from,d=f.to,T=e.animations[0].getKeys(),x=e.length,M=e.getParent(),b=this.getParent(),C=r&&M&&x&&this.length&&x!==this.length,u=C&&b&&M?b.length/M.length:1,S=r&&!b&&s&&(s.x!==1||s.y!==1||s.z!==1),R=this.animations[0].getKeys(),p,c,E,A=0,g=T.length;A<g;A++)p=T[A],p.frame>=v&&p.frame<=d&&(r?(E=p.value.clone(),C?(c=E.getTranslation(),E.setTranslation(c.scaleInPlace(u))):S&&s?(c=E.getTranslation(),E.setTranslation(c.multiplyInPlace(s))):E=p.value):E=p.value,R.push({frame:p.frame+i,value:E}));return this.animations[0].createRange(t,v+i,d+i),!0}},532:function(te,j,a){"use strict";var l=a(467),o=a(456);l.a.prototype.createDynamicTexture=function(y,O,h,D){var m=new o.a(this,o.b.Dynamic);return m.baseWidth=y,m.baseHeight=O,h&&(y=this.needPOTTextures?l.a.GetExponentOfTwo(y,this._caps.maxTextureSize):y,O=this.needPOTTextures?l.a.GetExponentOfTwo(O,this._caps.maxTextureSize):O),m.width=y,m.height=O,m.isReady=!1,m.generateMipMaps=h,m.samplingMode=D,this.updateTextureSamplingMode(D,m),this._internalTexturesCache.push(m),m},l.a.prototype.updateDynamicTexture=function(y,O,h,D,m,n){if(D===void 0&&(D=!1),n===void 0&&(n=!1),!!y){var e=this._gl,t=e.TEXTURE_2D,i=this._bindTextureDirectly(t,y,!0,n);this._unpackFlipY(h===void 0?y.invertY:h),D&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var r=this._getWebGLTextureType(y.type),s=this._getInternalFormat(m||y.format),f=this._getRGBABufferInternalSizedFormat(y.type,s);e.texImage2D(t,0,f,s,r,O),y.generateMipMaps&&e.generateMipmap(t),i||this._bindTextureDirectly(t,null),D&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),y.isReady=!0}}},533:function(te,j,a){"use strict";a.d(j,"a",function(){return m});var l=a(434),o=a(439),y=a(514),O=a(441),h=a(529),D=a(437),m=function(n){Object(l.d)(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.directIntensity=1,r.emissiveIntensity=1,r.environmentIntensity=1,r.specularIntensity=1,r.disableBumpMap=!1,r.ambientTextureStrength=1,r.ambientTextureImpactOnAnalyticalLights=e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,r.metallicF0Factor=1,r.metallicReflectanceColor=O.a.White(),r.ambientColor=new O.a(0,0,0),r.albedoColor=new O.a(1,1,1),r.reflectivityColor=new O.a(1,1,1),r.reflectionColor=new O.a(1,1,1),r.emissiveColor=new O.a(0,0,0),r.microSurface=1,r.useLightmapAsShadowmap=!1,r.useAlphaFromAlbedoTexture=!1,r.forceAlphaTest=!1,r.alphaCutOff=.4,r.useSpecularOverAlpha=!0,r.useMicroSurfaceFromReflectivityMapAlpha=!1,r.useRoughnessFromMetallicTextureAlpha=!0,r.useRoughnessFromMetallicTextureGreen=!1,r.useMetallnessFromMetallicTextureBlue=!1,r.useAmbientOcclusionFromMetallicTextureRed=!1,r.useAmbientInGrayScale=!1,r.useAutoMicroSurfaceFromReflectivityMap=!1,r.useRadianceOverAlpha=!0,r.useObjectSpaceNormalMap=!1,r.useParallax=!1,r.useParallaxOcclusion=!1,r.parallaxScaleBias=.05,r.disableLighting=!1,r.forceIrradianceInFragment=!1,r.maxSimultaneousLights=4,r.invertNormalMapX=!1,r.invertNormalMapY=!1,r.twoSidedLighting=!1,r.useAlphaFresnel=!1,r.useLinearAlphaFresnel=!1,r.environmentBRDFTexture=null,r.forceNormalForward=!1,r.enableSpecularAntiAliasing=!1,r.useHorizonOcclusion=!0,r.useRadianceOcclusion=!0,r.unlit=!1,r._environmentBRDFTexture=y.a.GetEnvironmentBRDFTexture(i),r}return Object.defineProperty(e.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(t){this.subSurface.refractionTexture=t,t?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(t){this.subSurface.indexOfRefraction=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(t){this.subSurface.invertRefractionY=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(t){this.subSurface.linkRefractionWithTransparency=t,t&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===h.a.LIGHTFALLOFF_PHYSICAL},set:function(t){t!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=h.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=h.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===h.a.LIGHTFALLOFF_GLTF},set:function(t){t!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=h.a.LIGHTFALLOFF_GLTF:this._lightFalloff=h.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(t){this._attachImageProcessingConfiguration(t),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(t){this.imageProcessingConfiguration.colorCurvesEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(t){this.imageProcessingConfiguration.colorGradingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(t){this._imageProcessingConfiguration.toneMappingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(t){this._imageProcessingConfiguration.exposure=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(t){this._imageProcessingConfiguration.contrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(t){this._imageProcessingConfiguration.colorGradingTexture=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(t){this._imageProcessingConfiguration.colorCurves=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"PBRMaterial"},e.prototype.clone=function(t){var i=this,r=o.a.Clone(function(){return new e(t,i.getScene())},this);return r.id=t,r.name=t,this.clearCoat.copyTo(r.clearCoat),this.anisotropy.copyTo(r.anisotropy),this.brdf.copyTo(r.brdf),this.sheen.copyTo(r.sheen),this.subSurface.copyTo(r.subSurface),r},e.prototype.serialize=function(){var t=o.a.Serialize(this);return t.customType="BABYLON.PBRMaterial",t.clearCoat=this.clearCoat.serialize(),t.anisotropy=this.anisotropy.serialize(),t.brdf=this.brdf.serialize(),t.sheen=this.sheen.serialize(),t.subSurface=this.subSurface.serialize(),t},e.Parse=function(t,i,r){var s=o.a.Parse(function(){return new e(t.name,i)},t,i,r);return t.clearCoat&&s.clearCoat.parse(t.clearCoat,i,r),t.anisotropy&&s.anisotropy.parse(t.anisotropy,i,r),t.brdf&&s.brdf.parse(t.brdf,i,r),t.sheen&&s.sheen.parse(t.sheen,i,r),t.subSurface&&s.subSurface.parse(t.subSurface,i,r),s},e.PBRMATERIAL_OPAQUE=h.a.PBRMATERIAL_OPAQUE,e.PBRMATERIAL_ALPHATEST=h.a.PBRMATERIAL_ALPHATEST,e.PBRMATERIAL_ALPHABLEND=h.a.PBRMATERIAL_ALPHABLEND,e.PBRMATERIAL_ALPHATESTANDBLEND=h.a.PBRMATERIAL_ALPHATESTANDBLEND,e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=h.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"directIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"specularIntensity",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"disableBumpMap",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureStrength",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"opacityTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallic",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"roughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicF0Factor",void 0),Object(l.c)([Object(o.e)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceColor",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurfaceTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"bumpTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty",null)],e.prototype,"lightmapTexture",void 0),Object(l.c)([Object(o.e)("ambient"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientColor",void 0),Object(l.c)([Object(o.e)("albedo"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoColor",void 0),Object(l.c)([Object(o.e)("reflectivity"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityColor",void 0),Object(l.c)([Object(o.e)("reflection"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionColor",void 0),Object(l.c)([Object(o.e)("emissive"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveColor",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurface",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLightmapAsShadowmap",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"useAlphaFromAlbedoTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"forceAlphaTest",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"alphaCutOff",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useSpecularOverAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientInGrayScale",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(l.c)([Object(o.c)()],e.prototype,"usePhysicalLightFalloff",null),Object(l.c)([Object(o.c)()],e.prototype,"useGLTFLightFalloff",null),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOverAlpha",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useObjectSpaceNormalMap",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallax",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallaxOcclusion",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"parallaxScaleBias",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"disableLighting",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceIrradianceInFragment",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"maxSimultaneousLights",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapX",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapY",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"twoSidedLighting",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAlphaFresnel",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLinearAlphaFresnel",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentBRDFTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceNormalForward",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"enableSpecularAntiAliasing",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useHorizonOcclusion",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOcclusion",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],e.prototype,"unlit",void 0),e}(h.a);D.a.RegisteredTypes["BABYLON.PBRMaterial"]=m},534:function(te,j,a){"use strict";var l=a(435),o="postprocessVertexShader",y=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[o]=y;var O={name:o,shader:y}},535:function(te,j,a){"use strict";var l=a(435),o="packingFunctions",y=`vec4 pack(float depth)
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
}`;l.a.IncludesShadersStore[o]=y;var O={name:o,shader:y}},537:function(te,j,a){"use strict";a.d(j,"a",function(){return D});var l=a(434),o=a(439),y=a(436),O=a(484),h=a(465),D=function(m){Object(l.d)(n,m);function n(){var e=m!==null&&m.apply(this,arguments)||this;return e._needProjectionMatrixCompute=!0,e}return n.prototype._setPosition=function(e){this._position=e},Object.defineProperty(n.prototype,"position",{get:function(){return this._position},set:function(e){this._setPosition(e)},enumerable:!1,configurable:!0}),n.prototype._setDirection=function(e){this._direction=e},Object.defineProperty(n.prototype,"direction",{get:function(){return this._direction},set:function(e){this._setDirection(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shadowMinZ",{get:function(){return this._shadowMinZ},set:function(e){this._shadowMinZ=e,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shadowMaxZ",{get:function(){return this._shadowMaxZ},set:function(e){this._shadowMaxZ=e,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),n.prototype.computeTransformedInformation=function(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||(this.transformedPosition=y.e.Zero()),y.e.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=y.e.Zero()),y.e.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1},n.prototype.getDepthScale=function(){return 50},n.prototype.getShadowDirection=function(e){return this.transformedDirection?this.transformedDirection:this.direction},n.prototype.getAbsolutePosition=function(){return this.transformedPosition?this.transformedPosition:this.position},n.prototype.setDirectionToTarget=function(e){return this.direction=y.e.Normalize(e.subtract(this.position)),this.direction},n.prototype.getRotation=function(){this.direction.normalize();var e=y.e.Cross(this.direction,h.a.Y),t=y.e.Cross(e,this.direction);return y.e.RotationFromAxis(e,t,this.direction)},n.prototype.needCube=function(){return!1},n.prototype.needProjectionMatrixCompute=function(){return this._needProjectionMatrixCompute},n.prototype.forceProjectionMatrixCompute=function(){this._needProjectionMatrixCompute=!0},n.prototype._initCache=function(){m.prototype._initCache.call(this),this._cache.position=y.e.Zero()},n.prototype._isSynchronized=function(){return!!this._cache.position.equals(this.position)},n.prototype.computeWorldMatrix=function(e){return!e&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=y.a.Identity()),y.a.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)},n.prototype.getDepthMinZ=function(e){return this.shadowMinZ!==void 0?this.shadowMinZ:e.minZ},n.prototype.getDepthMaxZ=function(e){return this.shadowMaxZ!==void 0?this.shadowMaxZ:e.maxZ},n.prototype.setShadowProjectionMatrix=function(e,t,i){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(t,i,e):this._setDefaultShadowProjectionMatrix(e,t,i),this},Object(l.c)([Object(o.o)()],n.prototype,"position",null),Object(l.c)([Object(o.o)()],n.prototype,"direction",null),Object(l.c)([Object(o.c)()],n.prototype,"shadowMinZ",null),Object(l.c)([Object(o.c)()],n.prototype,"shadowMaxZ",null),n}(O.a)},538:function(te,j,a){"use strict";a.d(j,"a",function(){return h});var l=a(434),o=a(442),y=a(458),O=a(574),h=function(D){Object(l.d)(m,D);function m(n,e,t,i,r){var s=this,f=r&&r.generateMipMaps?r.generateMipMaps:!1,v=r&&r.generateDepthTexture?r.generateDepthTexture:!1,d=!r||r.doNotChangeAspectRatio===void 0?!0:r.doNotChangeAspectRatio,T=r&&r.drawOnlyOnFirstAttachmentByDefault?r.drawOnlyOnFirstAttachmentByDefault:!1;if(s=D.call(this,n,e,i,f,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!s.isSupported){s.dispose();return}var x=[],M=[];s._initTypes(t,x,M,r);var b=!r||r.generateDepthBuffer===void 0?!0:r.generateDepthBuffer,C=!r||r.generateStencilBuffer===void 0?!1:r.generateStencilBuffer;return s._size=e,s._multiRenderTargetOptions={samplingModes:M,generateMipMaps:f,generateDepthBuffer:b,generateStencilBuffer:C,generateDepthTexture:v,types:x,textureCount:t},s._count=t,s._drawOnlyOnFirstAttachmentByDefault=T,t>0&&(s._createInternalTextures(),s._createTextures()),s}return Object.defineProperty(m.prototype,"isSupported",{get:function(){var n,e;return(e=(n=this._engine)===null||n===void 0?void 0:n.getCaps().drawBuffersExtension)!==null&&e!==void 0?e:!1},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"wrapU",{set:function(n){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapU=n},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"wrapV",{set:function(n){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapV=n},enumerable:!1,configurable:!0}),m.prototype._initTypes=function(n,e,t,i){for(var r=0;r<n;r++)i&&i.types&&i.types[r]!==void 0?e.push(i.types[r]):e.push(i&&i.defaultType?i.defaultType:0),i&&i.samplingModes&&i.samplingModes[r]!==void 0?t.push(i.samplingModes[r]):t.push(o.a.BILINEAR_SAMPLINGMODE)},m.prototype._rebuild=function(n){if(n===void 0&&(n=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),n&&this._createTextures();for(var e=0;e<this._internalTextures.length;e++){var t=this._textures[e];t._texture=this._internalTextures[e]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},m.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},m.prototype._createTextures=function(){this._textures=[];for(var n=0;n<this._internalTextures.length;n++){var e=new o.a(null,this.getScene());e._texture=this._internalTextures[n],this._textures.push(e)}},m.prototype.replaceTexture=function(n,e){n._texture&&(this._textures[e]=n,this._internalTextures[e]=n._texture,e===0&&(this._texture=this._internalTextures[e]))},Object.defineProperty(m.prototype,"samples",{get:function(){return this._samples},set:function(n){this._samples!==n&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,n):this._samples=n)},enumerable:!1,configurable:!0}),m.prototype.resize=function(n){this._size=n,this._rebuild()},m.prototype.updateCount=function(n,e){this._multiRenderTargetOptions.textureCount=n,this._count=n;var t=[],i=[];this._initTypes(n,t,i,e),this._multiRenderTargetOptions.types=t,this._multiRenderTargetOptions.samplingModes=i,this._rebuild(!0)},m.prototype.unbindFrameBuffer=function(n,e){var t=this;n.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){t.onAfterRenderObservable.notifyObservers(e)})},m.prototype.dispose=function(){this.releaseInternalTextures(),D.prototype.dispose.call(this)},m.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var n=this._internalTextures.length-1;n>=0;n--)this._internalTextures[n]!==void 0&&(this._internalTextures[n].dispose(),this._internalTextures.splice(n,1))},m}(y.a)},541:function(te,j,a){"use strict";a.d(j,"a",function(){return R});var l=a(434),o=a(436),y=a(441),O=a(447),h=a(484),D=a(454),m=a(442),n=a(458),e=a(444),t=a(472),i=a(679),r=a(680),s=a(676),f=a(435),v="shadowMapFragmentSoftTransparentShadow",d=`#if SM_SOFTTRANSPARENTSHADOW == 1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alpha) discard;
#endif
`;f.a.IncludesShadersStore[v]=d;var T={name:v,shader:d},x=a(438),M=a(476),b=a(512),C=a(591),u=new o.a,S=new o.a,R=function(){function p(c,E,A){this.onBeforeShadowMapRenderObservable=new x.c,this.onAfterShadowMapRenderObservable=new x.c,this.onBeforeShadowMapRenderMeshObservable=new x.c,this.onAfterShadowMapRenderMeshObservable=new x.c,this._bias=5e-5,this._normalBias=0,this._blurBoxOffset=1,this._blurScale=2,this._blurKernel=1,this._useKernelBlur=!1,this._filter=p.FILTER_NONE,this._filteringQuality=p.QUALITY_HIGH,this._contactHardeningLightSizeUVRatio=.1,this._darkness=0,this._transparencyShadow=!1,this.enableSoftTransparentShadow=!1,this.frustumEdgeFalloff=0,this.forceBackFacesOnly=!1,this._lightDirection=o.e.Zero(),this._viewMatrix=o.a.Zero(),this._projectionMatrix=o.a.Zero(),this._transformMatrix=o.a.Zero(),this._cachedPosition=new o.e(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cachedDirection=new o.e(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._currentFaceIndex=0,this._currentFaceIndexCache=0,this._defaultTextureMatrix=o.a.Identity(),this._mapSize=c,this._light=E,this._scene=E.getScene(),E._shadowGenerator=this,this.id=E.id,this._nameForCustomEffect="bjs_shadowgenerator_"+p._Counter++,p._SceneComponentInitialization(this._scene);var g=this._scene.getEngine().getCaps();A?g.textureFloatRender&&g.textureFloatLinearFiltering?this._textureType=1:g.textureHalfFloatRender&&g.textureHalfFloatLinearFiltering?this._textureType=2:this._textureType=0:g.textureHalfFloatRender&&g.textureHalfFloatLinearFiltering?this._textureType=2:g.textureFloatRender&&g.textureFloatLinearFiltering?this._textureType=1:this._textureType=0,this._initializeGenerator(),this._applyFilterValues()}return Object.defineProperty(p.prototype,"bias",{get:function(){return this._bias},set:function(c){this._bias=c},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"normalBias",{get:function(){return this._normalBias},set:function(c){this._normalBias=c},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"blurBoxOffset",{get:function(){return this._blurBoxOffset},set:function(c){this._blurBoxOffset!==c&&(this._blurBoxOffset=c,this._disposeBlurPostProcesses())},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"blurScale",{get:function(){return this._blurScale},set:function(c){this._blurScale!==c&&(this._blurScale=c,this._disposeBlurPostProcesses())},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"blurKernel",{get:function(){return this._blurKernel},set:function(c){this._blurKernel!==c&&(this._blurKernel=c,this._disposeBlurPostProcesses())},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"useKernelBlur",{get:function(){return this._useKernelBlur},set:function(c){this._useKernelBlur!==c&&(this._useKernelBlur=c,this._disposeBlurPostProcesses())},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"depthScale",{get:function(){return this._depthScale!==void 0?this._depthScale:this._light.getDepthScale()},set:function(c){this._depthScale=c},enumerable:!1,configurable:!0}),p.prototype._validateFilter=function(c){return c},Object.defineProperty(p.prototype,"filter",{get:function(){return this._filter},set:function(c){if(c=this._validateFilter(c),this._light.needCube()){if(c===p.FILTER_BLUREXPONENTIALSHADOWMAP){this.useExponentialShadowMap=!0;return}else if(c===p.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP){this.useCloseExponentialShadowMap=!0;return}else if(c===p.FILTER_PCF||c===p.FILTER_PCSS){this.usePoissonSampling=!0;return}}if((c===p.FILTER_PCF||c===p.FILTER_PCSS)&&!this._scene.getEngine()._features.supportShadowSamplers){this.usePoissonSampling=!0;return}this._filter!==c&&(this._filter=c,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"usePoissonSampling",{get:function(){return this.filter===p.FILTER_POISSONSAMPLING},set:function(c){var E=this._validateFilter(p.FILTER_POISSONSAMPLING);!c&&this.filter!==p.FILTER_POISSONSAMPLING||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"useExponentialShadowMap",{get:function(){return this.filter===p.FILTER_EXPONENTIALSHADOWMAP},set:function(c){var E=this._validateFilter(p.FILTER_EXPONENTIALSHADOWMAP);!c&&this.filter!==p.FILTER_EXPONENTIALSHADOWMAP||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"useBlurExponentialShadowMap",{get:function(){return this.filter===p.FILTER_BLUREXPONENTIALSHADOWMAP},set:function(c){var E=this._validateFilter(p.FILTER_BLUREXPONENTIALSHADOWMAP);!c&&this.filter!==p.FILTER_BLUREXPONENTIALSHADOWMAP||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"useCloseExponentialShadowMap",{get:function(){return this.filter===p.FILTER_CLOSEEXPONENTIALSHADOWMAP},set:function(c){var E=this._validateFilter(p.FILTER_CLOSEEXPONENTIALSHADOWMAP);!c&&this.filter!==p.FILTER_CLOSEEXPONENTIALSHADOWMAP||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"useBlurCloseExponentialShadowMap",{get:function(){return this.filter===p.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP},set:function(c){var E=this._validateFilter(p.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP);!c&&this.filter!==p.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"usePercentageCloserFiltering",{get:function(){return this.filter===p.FILTER_PCF},set:function(c){var E=this._validateFilter(p.FILTER_PCF);!c&&this.filter!==p.FILTER_PCF||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"filteringQuality",{get:function(){return this._filteringQuality},set:function(c){this._filteringQuality!==c&&(this._filteringQuality=c,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"useContactHardeningShadow",{get:function(){return this.filter===p.FILTER_PCSS},set:function(c){var E=this._validateFilter(p.FILTER_PCSS);!c&&this.filter!==p.FILTER_PCSS||(this.filter=c?E:p.FILTER_NONE)},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"contactHardeningLightSizeUVRatio",{get:function(){return this._contactHardeningLightSizeUVRatio},set:function(c){this._contactHardeningLightSizeUVRatio=c},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"darkness",{get:function(){return this._darkness},set:function(c){this.setDarkness(c)},enumerable:!1,configurable:!0}),p.prototype.getDarkness=function(){return this._darkness},p.prototype.setDarkness=function(c){return c>=1?this._darkness=1:c<=0?this._darkness=0:this._darkness=c,this},Object.defineProperty(p.prototype,"transparencyShadow",{get:function(){return this._transparencyShadow},set:function(c){this.setTransparencyShadow(c)},enumerable:!1,configurable:!0}),p.prototype.setTransparencyShadow=function(c){return this._transparencyShadow=c,this},p.prototype.getShadowMap=function(){return this._shadowMap},p.prototype.getShadowMapForRendering=function(){return this._shadowMap2?this._shadowMap2:this._shadowMap},p.prototype.getClassName=function(){return p.CLASSNAME},p.prototype.addShadowCaster=function(c,E){var A;return E===void 0&&(E=!0),this._shadowMap?(this._shadowMap.renderList||(this._shadowMap.renderList=[]),this._shadowMap.renderList.push(c),E&&(A=this._shadowMap.renderList).push.apply(A,c.getChildMeshes()),this):this},p.prototype.removeShadowCaster=function(c,E){if(E===void 0&&(E=!0),!this._shadowMap||!this._shadowMap.renderList)return this;var A=this._shadowMap.renderList.indexOf(c);if(A!==-1&&this._shadowMap.renderList.splice(A,1),E)for(var g=0,H=c.getChildren();g<H.length;g++){var U=H[g];this.removeShadowCaster(U)}return this},p.prototype.getLight=function(){return this._light},Object.defineProperty(p.prototype,"mapSize",{get:function(){return this._mapSize},set:function(c){this._mapSize=c,this._light._markMeshesAsLightDirty(),this.recreateShadowMap()},enumerable:!1,configurable:!0}),p.prototype._initializeGenerator=function(){this._light._markMeshesAsLightDirty(),this._initializeShadowMap()},p.prototype._createTargetRenderTexture=function(){this._scene.getEngine()._features.supportDepthStencilTexture?(this._shadowMap=new n.a(this._light.name+"_shadowMap",this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube(),void 0,!1,!1),this._shadowMap.createDepthStencilTexture(513,!0)):this._shadowMap=new n.a(this._light.name+"_shadowMap",this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube())},p.prototype._initializeShadowMap=function(){var c=this;if(this._createTargetRenderTexture(),this._shadowMap!==null){this._shadowMap.wrapU=m.a.CLAMP_ADDRESSMODE,this._shadowMap.wrapV=m.a.CLAMP_ADDRESSMODE,this._shadowMap.anisotropicFilteringLevel=1,this._shadowMap.updateSamplingMode(m.a.BILINEAR_SAMPLINGMODE),this._shadowMap.renderParticles=!1,this._shadowMap.ignoreCameraViewport=!0,this._storedUniqueId&&(this._shadowMap.uniqueId=this._storedUniqueId),this._shadowMap.customRenderFunction=this._renderForShadowMap.bind(this),this._shadowMap.customIsReadyFunction=function(U,I){return!0};var E=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.add(function(){E._debugPushGroup("shadow map generation for "+c._nameForCustomEffect,1)}),this._shadowMap.onBeforeRenderObservable.add(function(U){c._currentFaceIndex=U,c._filter===p.FILTER_PCF&&E.setColorWrite(!1),c.getTransformMatrix(),c._scene.setTransformMatrix(c._viewMatrix,c._projectionMatrix)}),this._shadowMap.onAfterUnbindObservable.add(function(){if(c._scene.updateTransformMatrix(),c._filter===p.FILTER_PCF&&E.setColorWrite(!0),!c.useBlurExponentialShadowMap&&!c.useBlurCloseExponentialShadowMap){E._debugPopGroup(1);return}var U=c.getShadowMapForRendering();if(U){var I=U.getInternalTexture();c._scene.postProcessManager.directRender(c._blurPostProcesses,I,!0),E.unBindFramebuffer(I,!0),E._debugPopGroup(1)}});var A=new y.b(0,0,0,0),g=new y.b(1,1,1,1);this._shadowMap.onClearObservable.add(function(U){c._filter===p.FILTER_PCF?U.clear(g,!1,!0,!1):c.useExponentialShadowMap||c.useBlurExponentialShadowMap?U.clear(A,!0,!0,!1):U.clear(g,!0,!0,!1)}),this._shadowMap.onResizeObservable.add(function(U){c._storedUniqueId=c._shadowMap.uniqueId,c._mapSize=U.getRenderSize(),c._light._markMeshesAsLightDirty(),c.recreateShadowMap()});for(var H=C.b.MIN_RENDERINGGROUPS;H<C.b.MAX_RENDERINGGROUPS;H++)this._shadowMap.setRenderingAutoClearDepthStencil(H,!1)}},p.prototype._initializeBlurRTTAndPostProcesses=function(){var c=this,E=this._scene.getEngine(),A=this._mapSize/this.blurScale;(!this.useKernelBlur||this.blurScale!==1)&&(this._shadowMap2=new n.a(this._light.name+"_shadowMap2",A,this._scene,!1,!0,this._textureType,void 0,void 0,!1),this._shadowMap2.wrapU=m.a.CLAMP_ADDRESSMODE,this._shadowMap2.wrapV=m.a.CLAMP_ADDRESSMODE,this._shadowMap2.updateSamplingMode(m.a.BILINEAR_SAMPLINGMODE)),this.useKernelBlur?(this._kernelBlurXPostprocess=new t.a(this._light.name+"KernelBlurX",new o.d(1,0),this.blurKernel,1,null,m.a.BILINEAR_SAMPLINGMODE,E,!1,this._textureType),this._kernelBlurXPostprocess.width=A,this._kernelBlurXPostprocess.height=A,this._kernelBlurXPostprocess.onApplyObservable.add(function(g){g.setTexture("textureSampler",c._shadowMap)}),this._kernelBlurYPostprocess=new t.a(this._light.name+"KernelBlurY",new o.d(0,1),this.blurKernel,1,null,m.a.BILINEAR_SAMPLINGMODE,E,!1,this._textureType),this._kernelBlurXPostprocess.autoClear=!1,this._kernelBlurYPostprocess.autoClear=!1,this._textureType===0&&(this._kernelBlurXPostprocess.packedFloat=!0,this._kernelBlurYPostprocess.packedFloat=!0),this._blurPostProcesses=[this._kernelBlurXPostprocess,this._kernelBlurYPostprocess]):(this._boxBlurPostprocess=new e.a(this._light.name+"DepthBoxBlur","depthBoxBlur",["screenSize","boxOffset"],[],1,null,m.a.BILINEAR_SAMPLINGMODE,E,!1,"#define OFFSET "+this._blurBoxOffset,this._textureType),this._boxBlurPostprocess.onApplyObservable.add(function(g){g.setFloat2("screenSize",A,A),g.setTexture("textureSampler",c._shadowMap)}),this._boxBlurPostprocess.autoClear=!1,this._blurPostProcesses=[this._boxBlurPostprocess])},p.prototype._renderForShadowMap=function(c,E,A,g){var H,U=this._scene.getEngine(),I=U.getColorWrite();if(g.length){for(U.setColorWrite(!1),H=0;H<g.length;H++)this._renderSubMeshForShadowMap(g.data[H]);U.setColorWrite(I)}for(H=0;H<c.length;H++)this._renderSubMeshForShadowMap(c.data[H]);for(H=0;H<E.length;H++)this._renderSubMeshForShadowMap(E.data[H]);if(this._transparencyShadow)for(H=0;H<A.length;H++)this._renderSubMeshForShadowMap(A.data[H],!0);else for(H=0;H<A.length;H++)A.data[H].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1},p.prototype._bindCustomEffectForRenderSubMeshForShadowMap=function(c,E,A,g){var H,U,I,W,Y,$;E.setMatrix((H=A==null?void 0:A.viewProjection)!==null&&H!==void 0?H:"viewProjection",this.getTransformMatrix()),E.setMatrix((U=A==null?void 0:A.view)!==null&&U!==void 0?U:"view",this._viewMatrix),E.setMatrix((I=A==null?void 0:A.projection)!==null&&I!==void 0?I:"projection",this._projectionMatrix);var G=g.getWorldMatrix();E.setMatrix((W=A==null?void 0:A.world)!==null&&W!==void 0?W:"world",G),G.multiplyToRef(this.getTransformMatrix(),u),E.setMatrix((Y=A==null?void 0:A.worldViewProjection)!==null&&Y!==void 0?Y:"worldViewProjection",u),G.multiplyToRef(this._viewMatrix,S),E.setMatrix(($=A==null?void 0:A.worldView)!==null&&$!==void 0?$:"worldView",S)},p.prototype._renderSubMeshForShadowMap=function(c,E){var A;E===void 0&&(E=!1);var g=c.getRenderingMesh(),H=c.getEffectiveMesh(),U=this._scene,I=U.getEngine(),W=c.getMaterial();if(H._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!(!W||c.verticesCount===0||c._renderId===U.getRenderId())){I.setState(W.backFaceCulling);var Y=g._getInstancesRenderList(c._id,!!c.getReplacementMesh());if(!Y.mustReturn){var $=I.getCaps().instancedArrays&&(Y.visibleInstances[c._id]!==null&&Y.visibleInstances[c._id]!==void 0||g.hasThinInstances);if(!(this.customAllowRendering&&!this.customAllowRendering(c)))if(this.isReady(c,$,E)){c._renderId=U.getRenderId();var G=W.shadowDepthWrapper,J=(A=G==null?void 0:G.getEffect(c,this))!==null&&A!==void 0?A:c._getCustomEffect(this._nameForCustomEffect,!1).effect;if(I.enableEffect(J),g._bind(c,J,W.fillMode),this.getTransformMatrix(),J.setFloat3("biasAndScaleSM",this.bias,this.normalBias,this.depthScale),this.getLight().getTypeID()===h.a.LIGHTTYPEID_DIRECTIONALLIGHT?J.setVector3("lightDataSM",this._cachedDirection):J.setVector3("lightDataSM",this._cachedPosition),U.activeCamera&&J.setFloat2("depthValuesSM",this.getLight().getDepthMinZ(U.activeCamera),this.getLight().getDepthMinZ(U.activeCamera)+this.getLight().getDepthMaxZ(U.activeCamera)),E&&this.enableSoftTransparentShadow&&J.setFloat("softTransparentShadowSM",H.visibility*W.alpha),G)c._effectOverride=J,G.standalone?G.baseMaterial.bindForSubMesh(H.getWorldMatrix(),g,c):W.bindForSubMesh(H.getWorldMatrix(),g,c),c._effectOverride=null;else{if(J.setMatrix("viewProjection",this.getTransformMatrix()),W&&W.needAlphaTesting()){var ne=W.getAlphaTestTexture();ne&&(J.setTexture("diffuseSampler",ne),J.setMatrix("diffuseMatrix",ne.getTextureMatrix()||this._defaultTextureMatrix))}if(g.useBones&&g.computeBonesUsingShaders&&g.skeleton){var ee=g.skeleton;if(ee.isUsingTextureForMatrices){var oe=ee.getTransformMatrixTexture(g);if(!oe)return;J.setTexture("boneSampler",oe),J.setFloat("boneTextureWidth",4*(ee.bones.length+1))}else J.setMatrices("mBones",ee.getTransformMatrices(g))}D.a.BindMorphTargetParameters(g,J),g.morphTargetManager&&g.morphTargetManager.isUsingTextureForTargets&&g.morphTargetManager._bind(J),D.a.BindClipPlane(J,U)}this._bindCustomEffectForRenderSubMeshForShadowMap(c,J,G==null?void 0:G._matriceNames,H),this.forceBackFacesOnly&&I.setState(!0,0,!1,!0),this.onBeforeShadowMapRenderMeshObservable.notifyObservers(g),this.onBeforeShadowMapRenderObservable.notifyObservers(J),g._processRendering(H,c,J,W.fillMode,Y,$,function(q,X){return J.setMatrix("world",X)}),this.forceBackFacesOnly&&I.setState(!0,0,!1,!1),this.onAfterShadowMapRenderObservable.notifyObservers(J),this.onAfterShadowMapRenderMeshObservable.notifyObservers(g)}else this._shadowMap&&this._shadowMap.resetRefreshCounter()}}},p.prototype._applyFilterValues=function(){!this._shadowMap||(this.filter===p.FILTER_NONE||this.filter===p.FILTER_PCSS?this._shadowMap.updateSamplingMode(m.a.NEAREST_SAMPLINGMODE):this._shadowMap.updateSamplingMode(m.a.BILINEAR_SAMPLINGMODE))},p.prototype.forceCompilation=function(c,E){var A=this,g=Object(l.a)({useInstances:!1},E),H=this.getShadowMap();if(!H){c&&c(this);return}var U=H.renderList;if(!U){c&&c(this);return}for(var I=new Array,W=0,Y=U;W<Y.length;W++){var $=Y[W];I.push.apply(I,$.subMeshes)}if(I.length===0){c&&c(this);return}var G=0,J=function(){var ne,ee;if(!(!A._scene||!A._scene.getEngine())){for(;A.isReady(I[G],g.useInstances,(ee=(ne=I[G].getMaterial())===null||ne===void 0?void 0:ne.needAlphaBlendingForMesh(I[G].getMesh()))!==null&&ee!==void 0?ee:!1);)if(G++,G>=I.length){c&&c(A);return}setTimeout(J,16)}};J()},p.prototype.forceCompilationAsync=function(c){var E=this;return new Promise(function(A){E.forceCompilation(function(){A()},c)})},p.prototype._isReadyCustomDefines=function(c,E,A){},p.prototype._prepareShadowDefines=function(c,E,A,g){A.push("#define SM_FLOAT "+(this._textureType!==0?"1":"0")),A.push("#define SM_ESM "+(this.useExponentialShadowMap||this.useBlurExponentialShadowMap?"1":"0")),A.push("#define SM_DEPTHTEXTURE "+(this.usePercentageCloserFiltering||this.useContactHardeningShadow?"1":"0"));var H=c.getMesh();return A.push("#define SM_NORMALBIAS "+(this.normalBias&&H.isVerticesDataPresent(O.b.NormalKind)?"1":"0")),A.push("#define SM_DIRECTIONINLIGHTDATA "+(this.getLight().getTypeID()===h.a.LIGHTTYPEID_DIRECTIONALLIGHT?"1":"0")),A.push("#define SM_USEDISTANCE "+(this._light.needCube()?"1":"0")),A.push("#define SM_SOFTTRANSPARENTSHADOW "+(this.enableSoftTransparentShadow&&g?"1":"0")),this._isReadyCustomDefines(A,c,E),A},p.prototype.isReady=function(c,E,A){var g=c.getMaterial(),H=g==null?void 0:g.shadowDepthWrapper,U=[];this._prepareShadowDefines(c,E,U,A);var I=c._getCustomEffect(this._nameForCustomEffect),W=I.effect,Y=I.defines;if(H){if(!H.isReadyForSubMesh(c,U,this,E))return!1}else{var $=[O.b.PositionKind],G=c.getMesh();if(this.normalBias&&G.isVerticesDataPresent(O.b.NormalKind)&&($.push(O.b.NormalKind),U.push("#define NORMAL"),G.nonUniformScaling&&U.push("#define NONUNIFORMSCALING")),g&&g.needAlphaTesting()){var J=g.getAlphaTestTexture();if(J){if(!J.isReady())return!1;U.push("#define ALPHATEST"),G.isVerticesDataPresent(O.b.UVKind)&&($.push(O.b.UVKind),U.push("#define UV1")),G.isVerticesDataPresent(O.b.UV2Kind)&&J.coordinatesIndex===1&&($.push(O.b.UV2Kind),U.push("#define UV2"))}}var ne=new b.a;if(G.useBones&&G.computeBonesUsingShaders&&G.skeleton){$.push(O.b.MatricesIndicesKind),$.push(O.b.MatricesWeightsKind),G.numBoneInfluencers>4&&($.push(O.b.MatricesIndicesExtraKind),$.push(O.b.MatricesWeightsExtraKind));var ee=G.skeleton;U.push("#define NUM_BONE_INFLUENCERS "+G.numBoneInfluencers),G.numBoneInfluencers>0&&ne.addCPUSkinningFallback(0,G),ee.isUsingTextureForMatrices?U.push("#define BONETEXTURE"):U.push("#define BonesPerMesh "+(ee.bones.length+1))}else U.push("#define NUM_BONE_INFLUENCERS 0");var oe=G.morphTargetManager,q=0;oe&&oe.numInfluencers>0&&(U.push("#define MORPHTARGETS"),q=oe.numInfluencers,U.push("#define NUM_MORPH_INFLUENCERS "+q),oe.isUsingTextureForTargets&&U.push("#define MORPHTARGETS_TEXTURE"),D.a.PrepareAttributesForMorphTargetsInfluencers($,G,q));var X=this._scene;if(X.clipPlane&&U.push("#define CLIPPLANE"),X.clipPlane2&&U.push("#define CLIPPLANE2"),X.clipPlane3&&U.push("#define CLIPPLANE3"),X.clipPlane4&&U.push("#define CLIPPLANE4"),X.clipPlane5&&U.push("#define CLIPPLANE5"),X.clipPlane6&&U.push("#define CLIPPLANE6"),E&&(U.push("#define INSTANCES"),D.a.PushAttributesForInstances($),c.getRenderingMesh().hasThinInstances&&U.push("#define THIN_INSTANCES")),this.customShaderOptions&&this.customShaderOptions.defines)for(var ge=0,_e=this.customShaderOptions.defines;ge<_e.length;ge++){var ie=_e[ge];U.indexOf(ie)===-1&&U.push(ie)}var de=U.join(`
`);if(Y!==de){Y=de;var se="shadowMap",me=["world","mBones","viewProjection","diffuseMatrix","lightDataSM","depthValuesSM","biasAndScaleSM","morphTargetInfluences","boneTextureWidth","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","softTransparentShadowSM","morphTargetTextureInfo","morphTargetTextureIndices"],le=["diffuseSampler","boneSampler","morphTargets"];if(this.customShaderOptions){if(se=this.customShaderOptions.shaderName,this.customShaderOptions.attributes)for(var V=0,P=this.customShaderOptions.attributes;V<P.length;V++){var w=P[V];$.indexOf(w)===-1&&$.push(w)}if(this.customShaderOptions.uniforms)for(var B=0,k=this.customShaderOptions.uniforms;B<k.length;B++){var Q=k[B];me.indexOf(Q)===-1&&me.push(Q)}if(this.customShaderOptions.samplers)for(var F=0,re=this.customShaderOptions.samplers;F<re.length;F++){var ve=re[F];le.indexOf(ve)===-1&&le.push(ve)}}var Se=this._scene.getEngine();W=Se.createEffect(se,{attributes:$,uniformsNames:me,uniformBuffersNames:[],samplers:le,defines:de,fallbacks:ne,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:q}},Se)}if(I.effect=W,I.defines=Y,!W.isReady())return!1}return(this.useBlurExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(!this._blurPostProcesses||!this._blurPostProcesses.length)&&this._initializeBlurRTTAndPostProcesses(),!(this._kernelBlurXPostprocess&&!this._kernelBlurXPostprocess.isReady()||this._kernelBlurYPostprocess&&!this._kernelBlurYPostprocess.isReady()||this._boxBlurPostprocess&&!this._boxBlurPostprocess.isReady())},p.prototype.prepareDefines=function(c,E){var A=this._scene,g=this._light;!A.shadowsEnabled||!g.shadowEnabled||(c["SHADOW"+E]=!0,this.useContactHardeningShadow?(c["SHADOWPCSS"+E]=!0,this._filteringQuality===p.QUALITY_LOW?c["SHADOWLOWQUALITY"+E]=!0:this._filteringQuality===p.QUALITY_MEDIUM&&(c["SHADOWMEDIUMQUALITY"+E]=!0)):this.usePercentageCloserFiltering?(c["SHADOWPCF"+E]=!0,this._filteringQuality===p.QUALITY_LOW?c["SHADOWLOWQUALITY"+E]=!0:this._filteringQuality===p.QUALITY_MEDIUM&&(c["SHADOWMEDIUMQUALITY"+E]=!0)):this.usePoissonSampling?c["SHADOWPOISSON"+E]=!0:this.useExponentialShadowMap||this.useBlurExponentialShadowMap?c["SHADOWESM"+E]=!0:(this.useCloseExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(c["SHADOWCLOSEESM"+E]=!0),g.needCube()&&(c["SHADOWCUBE"+E]=!0))},p.prototype.bindShadowLight=function(c,E){var A=this._light,g=this._scene;if(!(!g.shadowsEnabled||!A.shadowEnabled)){var H=g.activeCamera;if(!!H){var U=this.getShadowMap();!U||(A.needCube()||E.setMatrix("lightMatrix"+c,this.getTransformMatrix()),this._filter===p.FILTER_PCF?(E.setDepthStencilTexture("shadowSampler"+c,this.getShadowMapForRendering()),A._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),U.getSize().width,1/U.getSize().width,this.frustumEdgeFalloff,c)):this._filter===p.FILTER_PCSS?(E.setDepthStencilTexture("shadowSampler"+c,this.getShadowMapForRendering()),E.setTexture("depthSampler"+c,this.getShadowMapForRendering()),A._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),1/U.getSize().width,this._contactHardeningLightSizeUVRatio*U.getSize().width,this.frustumEdgeFalloff,c)):(E.setTexture("shadowSampler"+c,this.getShadowMapForRendering()),A._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),this.blurScale/U.getSize().width,this.depthScale,this.frustumEdgeFalloff,c)),A._uniformBuffer.updateFloat2("depthValues",this.getLight().getDepthMinZ(H),this.getLight().getDepthMinZ(H)+this.getLight().getDepthMaxZ(H),c))}}},p.prototype.getTransformMatrix=function(){var c=this._scene;if(this._currentRenderID===c.getRenderId()&&this._currentFaceIndexCache===this._currentFaceIndex)return this._transformMatrix;this._currentRenderID=c.getRenderId(),this._currentFaceIndexCache=this._currentFaceIndex;var E=this._light.position;if(this._light.computeTransformedInformation()&&(E=this._light.transformedPosition),o.e.NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex),this._lightDirection),Math.abs(o.e.Dot(this._lightDirection,o.e.Up()))===1&&(this._lightDirection.z=1e-13),this._light.needProjectionMatrixCompute()||!this._cachedPosition||!this._cachedDirection||!E.equals(this._cachedPosition)||!this._lightDirection.equals(this._cachedDirection)){this._cachedPosition.copyFrom(E),this._cachedDirection.copyFrom(this._lightDirection),o.a.LookAtLHToRef(E,E.add(this._lightDirection),o.e.Up(),this._viewMatrix);var A=this.getShadowMap();if(A){var g=A.renderList;g&&this._light.setShadowProjectionMatrix(this._projectionMatrix,this._viewMatrix,g)}this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix)}return this._transformMatrix},p.prototype.recreateShadowMap=function(){var c=this._shadowMap;if(!!c){var E=c.renderList;this._disposeRTTandPostProcesses(),this._initializeGenerator(),this.filter=this.filter,this._applyFilterValues(),this._shadowMap.renderList=E}},p.prototype._disposeBlurPostProcesses=function(){this._shadowMap2&&(this._shadowMap2.dispose(),this._shadowMap2=null),this._boxBlurPostprocess&&(this._boxBlurPostprocess.dispose(),this._boxBlurPostprocess=null),this._kernelBlurXPostprocess&&(this._kernelBlurXPostprocess.dispose(),this._kernelBlurXPostprocess=null),this._kernelBlurYPostprocess&&(this._kernelBlurYPostprocess.dispose(),this._kernelBlurYPostprocess=null),this._blurPostProcesses=[]},p.prototype._disposeRTTandPostProcesses=function(){this._shadowMap&&(this._shadowMap.dispose(),this._shadowMap=null),this._disposeBlurPostProcesses()},p.prototype.dispose=function(){this._disposeRTTandPostProcesses(),this._light&&(this._light._shadowGenerator=null,this._light._markMeshesAsLightDirty()),this.onBeforeShadowMapRenderMeshObservable.clear(),this.onBeforeShadowMapRenderObservable.clear(),this.onAfterShadowMapRenderMeshObservable.clear(),this.onAfterShadowMapRenderObservable.clear()},p.prototype.serialize=function(){var c={},E=this.getShadowMap();if(!E)return c;if(c.className=this.getClassName(),c.lightId=this._light.id,c.id=this.id,c.mapSize=E.getRenderSize(),c.forceBackFacesOnly=this.forceBackFacesOnly,c.darkness=this.getDarkness(),c.transparencyShadow=this._transparencyShadow,c.frustumEdgeFalloff=this.frustumEdgeFalloff,c.bias=this.bias,c.normalBias=this.normalBias,c.usePercentageCloserFiltering=this.usePercentageCloserFiltering,c.useContactHardeningShadow=this.useContactHardeningShadow,c.contactHardeningLightSizeUVRatio=this.contactHardeningLightSizeUVRatio,c.filteringQuality=this.filteringQuality,c.useExponentialShadowMap=this.useExponentialShadowMap,c.useBlurExponentialShadowMap=this.useBlurExponentialShadowMap,c.useCloseExponentialShadowMap=this.useBlurExponentialShadowMap,c.useBlurCloseExponentialShadowMap=this.useBlurExponentialShadowMap,c.usePoissonSampling=this.usePoissonSampling,c.depthScale=this.depthScale,c.blurBoxOffset=this.blurBoxOffset,c.blurKernel=this.blurKernel,c.blurScale=this.blurScale,c.useKernelBlur=this.useKernelBlur,c.renderList=[],E.renderList)for(var A=0;A<E.renderList.length;A++){var g=E.renderList[A];c.renderList.push(g.id)}return c},p.Parse=function(c,E,A){for(var g=E.getLightByID(c.lightId),H=A?A(c.mapSize,g):new p(c.mapSize,g),U=H.getShadowMap(),I=0;I<c.renderList.length;I++){var W=E.getMeshesByID(c.renderList[I]);W.forEach(function(Y){!U||(U.renderList||(U.renderList=[]),U.renderList.push(Y))})}return c.id!==void 0&&(H.id=c.id),H.forceBackFacesOnly=!!c.forceBackFacesOnly,c.darkness!==void 0&&H.setDarkness(c.darkness),c.transparencyShadow&&H.setTransparencyShadow(!0),c.frustumEdgeFalloff!==void 0&&(H.frustumEdgeFalloff=c.frustumEdgeFalloff),c.bias!==void 0&&(H.bias=c.bias),c.normalBias!==void 0&&(H.normalBias=c.normalBias),c.usePercentageCloserFiltering?H.usePercentageCloserFiltering=!0:c.useContactHardeningShadow?H.useContactHardeningShadow=!0:c.usePoissonSampling?H.usePoissonSampling=!0:c.useExponentialShadowMap?H.useExponentialShadowMap=!0:c.useBlurExponentialShadowMap?H.useBlurExponentialShadowMap=!0:c.useCloseExponentialShadowMap?H.useCloseExponentialShadowMap=!0:c.useBlurCloseExponentialShadowMap?H.useBlurCloseExponentialShadowMap=!0:c.useVarianceShadowMap?H.useExponentialShadowMap=!0:c.useBlurVarianceShadowMap&&(H.useBlurExponentialShadowMap=!0),c.contactHardeningLightSizeUVRatio!==void 0&&(H.contactHardeningLightSizeUVRatio=c.contactHardeningLightSizeUVRatio),c.filteringQuality!==void 0&&(H.filteringQuality=c.filteringQuality),c.depthScale&&(H.depthScale=c.depthScale),c.blurScale&&(H.blurScale=c.blurScale),c.blurBoxOffset&&(H.blurBoxOffset=c.blurBoxOffset),c.useKernelBlur&&(H.useKernelBlur=c.useKernelBlur),c.blurKernel&&(H.blurKernel=c.blurKernel),H},p._Counter=0,p.CLASSNAME="ShadowGenerator",p.FILTER_NONE=0,p.FILTER_EXPONENTIALSHADOWMAP=1,p.FILTER_POISSONSAMPLING=2,p.FILTER_BLUREXPONENTIALSHADOWMAP=3,p.FILTER_CLOSEEXPONENTIALSHADOWMAP=4,p.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP=5,p.FILTER_PCF=6,p.FILTER_PCSS=7,p.QUALITY_HIGH=0,p.QUALITY_MEDIUM=1,p.QUALITY_LOW=2,p._SceneComponentInitialization=function(c){throw M.a.WarnImport("ShadowGeneratorSceneComponent")},p}()},542:function(te,j,a){"use strict";a.d(j,"a",function(){return D});var l=a(434),o=a(436),y=a(588),O=a(453),h=a(465),D=function(m){Object(l.d)(n,m);function n(e,t,i,r,s,f,v){i===void 0&&(i=null),r===void 0&&(r=null),s===void 0&&(s=null),f===void 0&&(f=null),v===void 0&&(v=null);var d=m.call(this,e,t.getScene())||this;return d.name=e,d.children=new Array,d.animations=new Array,d._index=null,d._absoluteTransform=new o.a,d._invertedAbsoluteTransform=new o.a,d._scalingDeterminant=1,d._worldTransform=new o.a,d._needToDecompose=!0,d._needToCompose=!1,d._linkedTransformNode=null,d._waitingTransformNodeId=null,d._skeleton=t,d._localMatrix=r?r.clone():o.a.Identity(),d._restPose=s||d._localMatrix.clone(),d._bindPose=d._localMatrix.clone(),d._baseMatrix=f||d._localMatrix.clone(),d._index=v,t.bones.push(d),d.setParent(i,!1),(f||r)&&d._updateDifferenceMatrix(),d}return Object.defineProperty(n.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(e){this._localMatrix.copyFrom(e),this._needToDecompose=!0},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"Bone"},n.prototype.getSkeleton=function(){return this._skeleton},n.prototype.getParent=function(){return this._parent},n.prototype.getChildren=function(){return this.children},n.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},n.prototype.setParent=function(e,t){if(t===void 0&&(t=!0),this._parent!==e){if(this._parent){var i=this._parent.children.indexOf(this);i!==-1&&this._parent.children.splice(i,1)}this._parent=e,this._parent&&this._parent.children.push(this),t&&this._updateDifferenceMatrix(),this.markAsDirty()}},n.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},n.prototype.getBaseMatrix=function(){return this._baseMatrix},n.prototype.getRestPose=function(){return this._restPose},n.prototype.setRestPose=function(e){this._restPose.copyFrom(e)},n.prototype.getBindPose=function(){return this._bindPose},n.prototype.setBindPose=function(e){this._bindPose.copyFrom(e)},n.prototype.getWorldMatrix=function(){return this._worldTransform},n.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},n.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},n.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},n.prototype.linkTransformNode=function(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},n.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(n.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"rotation",{get:function(){return this.getRotation()},set:function(e){this.setRotation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(e){this.setRotationQuaternion(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scaling",{get:function(){return this.getScale()},set:function(e){this.setScale(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),n.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=o.e.Zero(),this._localRotation=o.b.Zero(),this._localPosition=o.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},n.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,o.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},n.prototype.updateMatrix=function(e,t,i){t===void 0&&(t=!0),i===void 0&&(i=!0),this._baseMatrix.copyFrom(e),t&&this._updateDifferenceMatrix(),i?(this._needToCompose=!1,this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose()):this.markAsDirty()},n.prototype._updateDifferenceMatrix=function(e,t){if(t===void 0&&(t=!0),e||(e=this._baseMatrix),this._parent?e.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),t)for(var i=0;i<this.children.length;i++)this.children[i]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},n.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},n.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},n.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},n.prototype.translate=function(e,t,i){t===void 0&&(t=h.c.LOCAL);var r=this.getLocalMatrix();if(t==h.c.LOCAL)r.addAtIndex(12,e.x),r.addAtIndex(13,e.y),r.addAtIndex(14,e.z);else{var s=null;i&&(s=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=n._tmpMats[0],v=n._tmpVecs[0];this._parent?i&&s?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(s,f)):f.copyFrom(this._parent.getAbsoluteTransform()):o.a.IdentityToRef(f),f.setTranslationFromFloats(0,0,0),f.invert(),o.e.TransformCoordinatesToRef(e,f,v),r.addAtIndex(12,v.x),r.addAtIndex(13,v.y),r.addAtIndex(14,v.z)}this._markAsDirtyAndDecompose()},n.prototype.setPosition=function(e,t,i){t===void 0&&(t=h.c.LOCAL);var r=this.getLocalMatrix();if(t==h.c.LOCAL)r.setTranslationFromFloats(e.x,e.y,e.z);else{var s=null;i&&(s=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=n._tmpMats[0],v=n._tmpVecs[0];this._parent?(i&&s?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(s,f)):f.copyFrom(this._parent.getAbsoluteTransform()),f.invert()):o.a.IdentityToRef(f),o.e.TransformCoordinatesToRef(e,f,v),r.setTranslationFromFloats(v.x,v.y,v.z)}this._markAsDirtyAndDecompose()},n.prototype.setAbsolutePosition=function(e,t){this.setPosition(e,h.c.WORLD,t)},n.prototype.scale=function(e,t,i,r){r===void 0&&(r=!1);var s=this.getLocalMatrix(),f=n._tmpMats[0];o.a.ScalingToRef(e,t,i,f),f.multiplyToRef(s,s),f.invert();for(var v=0,d=this.children;v<d.length;v++){var T=d[v],x=T.getLocalMatrix();x.multiplyToRef(f,x),x.multiplyAtIndex(12,e),x.multiplyAtIndex(13,t),x.multiplyAtIndex(14,i),T._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),r)for(var M=0,b=this.children;M<b.length;M++){var T=b[M];T.scale(e,t,i,r)}},n.prototype.setScale=function(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()},n.prototype.getScale=function(){return this._decompose(),this._localScaling},n.prototype.getScaleToRef=function(e){this._decompose(),e.copyFrom(this._localScaling)},n.prototype.setYawPitchRoll=function(e,t,i,r,s){if(r===void 0&&(r=h.c.LOCAL),r===h.c.LOCAL){var f=n._tmpQuat;o.b.RotationYawPitchRollToRef(e,t,i,f),this.setRotationQuaternion(f,r,s);return}var v=n._tmpMats[0];if(!!this._getNegativeRotationToRef(v,s)){var d=n._tmpMats[1];o.a.RotationYawPitchRollToRef(e,t,i,d),v.multiplyToRef(d,d),this._rotateWithMatrix(d,r,s)}},n.prototype.rotate=function(e,t,i,r){i===void 0&&(i=h.c.LOCAL);var s=n._tmpMats[0];s.setTranslationFromFloats(0,0,0),o.a.RotationAxisToRef(e,t,s),this._rotateWithMatrix(s,i,r)},n.prototype.setAxisAngle=function(e,t,i,r){if(i===void 0&&(i=h.c.LOCAL),i===h.c.LOCAL){var s=n._tmpQuat;o.b.RotationAxisToRef(e,t,s),this.setRotationQuaternion(s,i,r);return}var f=n._tmpMats[0];if(!!this._getNegativeRotationToRef(f,r)){var v=n._tmpMats[1];o.a.RotationAxisToRef(e,t,v),f.multiplyToRef(v,v),this._rotateWithMatrix(v,i,r)}},n.prototype.setRotation=function(e,t,i){t===void 0&&(t=h.c.LOCAL),this.setYawPitchRoll(e.y,e.x,e.z,t,i)},n.prototype.setRotationQuaternion=function(e,t,i){if(t===void 0&&(t=h.c.LOCAL),t===h.c.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}var r=n._tmpMats[0];if(!!this._getNegativeRotationToRef(r,i)){var s=n._tmpMats[1];o.a.FromQuaternionToRef(e,s),r.multiplyToRef(s,s),this._rotateWithMatrix(s,t,i)}},n.prototype.setRotationMatrix=function(e,t,i){if(t===void 0&&(t=h.c.LOCAL),t===h.c.LOCAL){var r=n._tmpQuat;o.b.FromRotationMatrixToRef(e,r),this.setRotationQuaternion(r,t,i);return}var s=n._tmpMats[0];if(!!this._getNegativeRotationToRef(s,i)){var f=n._tmpMats[1];f.copyFrom(e),s.multiplyToRef(e,f),this._rotateWithMatrix(f,t,i)}},n.prototype._rotateWithMatrix=function(e,t,i){t===void 0&&(t=h.c.LOCAL);var r=this.getLocalMatrix(),s=r.m[12],f=r.m[13],v=r.m[14],d=this.getParent(),T=n._tmpMats[3],x=n._tmpMats[4];d&&t==h.c.WORLD?(i?(T.copyFrom(i.getWorldMatrix()),d.getAbsoluteTransform().multiplyToRef(T,T)):T.copyFrom(d.getAbsoluteTransform()),x.copyFrom(T),x.invert(),r.multiplyToRef(T,r),r.multiplyToRef(e,r),r.multiplyToRef(x,r)):t==h.c.WORLD&&i?(T.copyFrom(i.getWorldMatrix()),x.copyFrom(T),x.invert(),r.multiplyToRef(T,r),r.multiplyToRef(e,r),r.multiplyToRef(x,r)):r.multiplyToRef(e,r),r.setTranslationFromFloats(s,f,v),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},n.prototype._getNegativeRotationToRef=function(e,t){var i=n._tmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),t&&(e.multiplyToRef(t.getWorldMatrix(),e),o.a.ScalingToRef(t.scaling.x,t.scaling.y,t.scaling.z,i)),e.invert(),isNaN(e.m[0])?!1:(i.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(i,e),!0)},n.prototype.getPosition=function(e,t){e===void 0&&(e=h.c.LOCAL),t===void 0&&(t=null);var i=o.e.Zero();return this.getPositionToRef(e,t,i),i},n.prototype.getPositionToRef=function(e,t,i){if(e===void 0&&(e=h.c.LOCAL),e==h.c.LOCAL){var r=this.getLocalMatrix();i.x=r.m[12],i.y=r.m[13],i.z=r.m[14]}else{var s=null;t&&(s=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=n._tmpMats[0];t&&s?(f.copyFrom(this.getAbsoluteTransform()),f.multiplyToRef(s,f)):f=this.getAbsoluteTransform(),i.x=f.m[12],i.y=f.m[13],i.z=f.m[14]}},n.prototype.getAbsolutePosition=function(e){e===void 0&&(e=null);var t=o.e.Zero();return this.getPositionToRef(h.c.WORLD,e,t),t},n.prototype.getAbsolutePositionToRef=function(e,t){this.getPositionToRef(h.c.WORLD,e,t)},n.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var e=this._skeleton.getPoseMatrix();e&&this._absoluteTransform.multiplyToRef(e,this._absoluteTransform)}for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].computeAbsoluteTransforms()},n.prototype.getDirection=function(e,t){t===void 0&&(t=null);var i=o.e.Zero();return this.getDirectionToRef(e,t,i),i},n.prototype.getDirectionToRef=function(e,t,i){t===void 0&&(t=null);var r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=n._tmpMats[0];s.copyFrom(this.getAbsoluteTransform()),t&&r&&s.multiplyToRef(r,s),o.e.TransformNormalToRef(e,s,i),i.normalize()},n.prototype.getRotation=function(e,t){e===void 0&&(e=h.c.LOCAL),t===void 0&&(t=null);var i=o.e.Zero();return this.getRotationToRef(e,t,i),i},n.prototype.getRotationToRef=function(e,t,i){e===void 0&&(e=h.c.LOCAL),t===void 0&&(t=null);var r=n._tmpQuat;this.getRotationQuaternionToRef(e,t,r),r.toEulerAnglesToRef(i)},n.prototype.getRotationQuaternion=function(e,t){e===void 0&&(e=h.c.LOCAL),t===void 0&&(t=null);var i=o.b.Identity();return this.getRotationQuaternionToRef(e,t,i),i},n.prototype.getRotationQuaternionToRef=function(e,t,i){if(e===void 0&&(e=h.c.LOCAL),t===void 0&&(t=null),e==h.c.LOCAL)this._decompose(),i.copyFrom(this._localRotation);else{var r=n._tmpMats[0],s=this.getAbsoluteTransform();t?s.multiplyToRef(t.getWorldMatrix(),r):r.copyFrom(s),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.decompose(void 0,i,void 0)}},n.prototype.getRotationMatrix=function(e,t){e===void 0&&(e=h.c.LOCAL);var i=o.a.Identity();return this.getRotationMatrixToRef(e,t,i),i},n.prototype.getRotationMatrixToRef=function(e,t,i){if(e===void 0&&(e=h.c.LOCAL),e==h.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(i);else{var r=n._tmpMats[0],s=this.getAbsoluteTransform();t?s.multiplyToRef(t.getWorldMatrix(),r):r.copyFrom(s),r.multiplyAtIndex(0,this._scalingDeterminant),r.multiplyAtIndex(1,this._scalingDeterminant),r.multiplyAtIndex(2,this._scalingDeterminant),r.getRotationMatrixToRef(i)}},n.prototype.getAbsolutePositionFromLocal=function(e,t){t===void 0&&(t=null);var i=o.e.Zero();return this.getAbsolutePositionFromLocalToRef(e,t,i),i},n.prototype.getAbsolutePositionFromLocalToRef=function(e,t,i){t===void 0&&(t=null);var r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=n._tmpMats[0];t&&r?(s.copyFrom(this.getAbsoluteTransform()),s.multiplyToRef(r,s)):s=this.getAbsoluteTransform(),o.e.TransformCoordinatesToRef(e,s,i)},n.prototype.getLocalPositionFromAbsolute=function(e,t){t===void 0&&(t=null);var i=o.e.Zero();return this.getLocalPositionFromAbsoluteToRef(e,t,i),i},n.prototype.getLocalPositionFromAbsoluteToRef=function(e,t,i){t===void 0&&(t=null);var r=null;t&&(r=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var s=n._tmpMats[0];s.copyFrom(this.getAbsoluteTransform()),t&&r&&s.multiplyToRef(r,s),s.invert(),o.e.TransformCoordinatesToRef(e,s,i)},n.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},n._tmpVecs=y.a.BuildArray(2,o.e.Zero),n._tmpQuat=o.b.Identity(),n._tmpMats=y.a.BuildArray(5,o.a.Identity),n}(O.a)},545:function(te,j,a){"use strict";a.d(j,"a",function(){return h});var l=a(444),o=a(625),y=a(500),O=a(566),h=function(){function D(){}return D.ExpandRGBDTexture=function(m){var n=m._texture;if(!(!n||!m.isRGBD)){var e=n.getEngine(),t=e.getCaps(),i=!1;t.textureHalfFloatRender&&t.textureHalfFloatLinearFiltering?(i=!0,n.type=2):t.textureFloatRender&&t.textureFloatLinearFiltering&&(i=!0,n.type=1),i&&(n.isReady=!1,n._isRGBD=!1,n.invertY=!1),m.onLoadObservable.addOnce(function(){if(i){var r=new l.a("rgbdDecode","rgbdDecode",null,null,1,null,3,e,!1,void 0,n.type,void 0,null,!1),s=e.createRenderTargetTexture(n.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:n.samplingMode,type:n.type,format:5});r.getEffect().executeWhenCompiled(function(){r.onApply=function(f){f._bindTexture("textureSampler",n),f.setFloat2("scale",1,1)},m.getScene().postProcessManager.directRender([r],s,!0),e.restoreDefaultFramebuffer(),e._releaseTexture(n),e._releaseFramebufferObjects(s),r&&r.dispose(),s._swapAndDie(n),n.isReady=!0})}})}},D.EncodeTextureToRGBD=function(m,n,e){return e===void 0&&(e=0),O.a.ApplyPostProcess("rgbdEncode",m,n,e,1,5)},D}()},547:function(te,j,a){"use strict";a.d(j,"a",function(){return O});var l=a(449),o=a(452),y=a(502);Object.defineProperty(l.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(h){h&&h.isSupported&&(this._geometryBufferRenderer=h)},enumerable:!0,configurable:!0}),l.a.prototype.enableGeometryBufferRenderer=function(h){return h===void 0&&(h=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new y.a(this,h),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},l.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var O=function(){function h(D){this.name=o.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=D}return h.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(o.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},h.prototype.rebuild=function(){},h.prototype.dispose=function(){},h.prototype._gatherRenderTargets=function(D){this.scene._geometryBufferRenderer&&D.push(this.scene._geometryBufferRenderer.getGBuffer())},h}();y.a._SceneComponentInitialization=function(h){var D=h._getComponent(o.a.NAME_GEOMETRYBUFFERRENDERER);D||(D=new O(h),h._addComponent(D))}},548:function(te,j,a){"use strict";a.d(j,"a",function(){return l});var l=function(){function o(){this._renderPipelines={}}return Object.defineProperty(o.prototype,"supportedPipelines",{get:function(){var y=[];for(var O in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(O)){var h=this._renderPipelines[O];h.isSupported&&y.push(h)}return y},enumerable:!1,configurable:!0}),o.prototype.addPipeline=function(y){this._renderPipelines[y._name]=y},o.prototype.attachCamerasToRenderPipeline=function(y,O,h){h===void 0&&(h=!1);var D=this._renderPipelines[y];!D||D._attachCameras(O,h)},o.prototype.detachCamerasFromRenderPipeline=function(y,O){var h=this._renderPipelines[y];!h||h._detachCameras(O)},o.prototype.enableEffectInPipeline=function(y,O,h){var D=this._renderPipelines[y];!D||D._enableEffect(O,h)},o.prototype.disableEffectInPipeline=function(y,O,h){var D=this._renderPipelines[y];!D||D._disableEffect(O,h)},o.prototype.update=function(){for(var y in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(y)){var O=this._renderPipelines[y];O.isSupported?O._update():(O.dispose(),delete this._renderPipelines[y])}},o.prototype._rebuild=function(){for(var y in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(y)){var O=this._renderPipelines[y];O._rebuild()}},o.prototype.dispose=function(){for(var y in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(y)){var O=this._renderPipelines[y];O.dispose()}},o}()},549:function(te,j,a){"use strict";a.d(j,"a",function(){return o});const l=()=>!!document.createElement("canvas").getContext("webgl2"),o=()=>l()?"webgl2":"webgl"},556:function(te,j,a){"use strict";a.d(j,"a",function(){return s});var l=a(441),o=a(447),y=a(442),O=a(458),h=a(454),D=a(435),m=a(535),n="depthPixelShader",e=`#ifdef ALPHATEST
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
}`;D.a.ShadersStore[n]=e;var t={name:n,shader:e},i=a(664),r=a(476),s=function(){function f(v,d,T,x){var M=this;d===void 0&&(d=1),T===void 0&&(T=null),x===void 0&&(x=!1),this.enabled=!0,this.useOnlyInActiveCamera=!1,this._scene=v,this._storeNonLinearDepth=x,this.isPacked=d===0,this.isPacked?this._clearColor=new l.b(1,1,1,1):this._clearColor=new l.b(1,0,0,1),f._SceneComponentInitialization(this._scene),this._camera=T;var b=v.getEngine(),C=this.isPacked||!b._features.supportExtendedTextureFormats?5:6;this._depthMap=new O.a("depthMap",{width:b.getRenderWidth(),height:b.getRenderHeight()},this._scene,!1,!0,d,!1,void 0,void 0,void 0,void 0,C),this._depthMap.wrapU=y.a.CLAMP_ADDRESSMODE,this._depthMap.wrapV=y.a.CLAMP_ADDRESSMODE,this._depthMap.refreshRate=1,this._depthMap.renderParticles=!1,this._depthMap.renderList=null,this._depthMap.activeCamera=this._camera,this._depthMap.ignoreCameraViewport=!0,this._depthMap.useCameraPostProcesses=!1,this._depthMap.onClearObservable.add(function(S){S.clear(M._clearColor,!0,!0,!0)}),this._depthMap.onBeforeBindObservable.add(function(){b._debugPushGroup("depth renderer",1)}),this._depthMap.onAfterUnbindObservable.add(function(){b._debugPopGroup(1)});var u=function(S){var R=S.getRenderingMesh(),p=S.getEffectiveMesh(),c=M._scene,E=c.getEngine(),A=S.getMaterial();if(p._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!(!A||p.infiniteDistance||A.disableDepthWrite||S.verticesCount===0||S._renderId===c.getRenderId())){E.setState(A.backFaceCulling,0,!1,c.useRightHandedSystem);var g=R._getInstancesRenderList(S._id,!!S.getReplacementMesh());if(!g.mustReturn){var H=E.getCaps().instancedArrays&&(g.visibleInstances[S._id]!==null&&g.visibleInstances[S._id]!==void 0||R.hasThinInstances),U=M._camera||c.activeCamera;if(M.isReady(S,H)&&U){if(S._renderId=c.getRenderId(),E.enableEffect(M._effect),R._bind(S,M._effect,A.fillMode),M._effect.setMatrix("viewProjection",c.getTransformMatrix()),M._effect.setMatrix("world",p.getWorldMatrix()),M._effect.setFloat2("depthValues",U.minZ,U.minZ+U.maxZ),A&&A.needAlphaTesting()){var I=A.getAlphaTestTexture();I&&(M._effect.setTexture("diffuseSampler",I),M._effect.setMatrix("diffuseMatrix",I.getTextureMatrix()))}if(R.useBones&&R.computeBonesUsingShaders&&R.skeleton){var W=R.skeleton;if(W.isUsingTextureForMatrices){var Y=W.getTransformMatrixTexture(R);if(!Y)return;M._effect.setTexture("boneSampler",Y),M._effect.setFloat("boneTextureWidth",4*(W.bones.length+1))}else M._effect.setMatrices("mBones",W.getTransformMatrices(R))}h.a.BindMorphTargetParameters(R,M._effect),R.morphTargetManager&&R.morphTargetManager.isUsingTextureForTargets&&R.morphTargetManager._bind(M._effect),R._processRendering(p,S,M._effect,A.fillMode,g,H,function($,G){return M._effect.setMatrix("world",G)})}}}};this._depthMap.customRenderFunction=function(S,R,p,c){var E;if(c.length){for(b.setColorWrite(!1),E=0;E<c.length;E++)u(c.data[E]);b.setColorWrite(!0)}for(E=0;E<S.length;E++)u(S.data[E]);for(E=0;E<R.length;E++)u(R.data[E])}}return f.prototype.isReady=function(v,d){var T=v.getMaterial();if(T.disableDepthWrite)return!1;var x=[],M=[o.b.PositionKind],b=v.getMesh();T&&T.needAlphaTesting()&&T.getAlphaTestTexture()&&(x.push("#define ALPHATEST"),b.isVerticesDataPresent(o.b.UVKind)&&(M.push(o.b.UVKind),x.push("#define UV1")),b.isVerticesDataPresent(o.b.UV2Kind)&&(M.push(o.b.UV2Kind),x.push("#define UV2"))),b.useBones&&b.computeBonesUsingShaders?(M.push(o.b.MatricesIndicesKind),M.push(o.b.MatricesWeightsKind),b.numBoneInfluencers>4&&(M.push(o.b.MatricesIndicesExtraKind),M.push(o.b.MatricesWeightsExtraKind)),x.push("#define NUM_BONE_INFLUENCERS "+b.numBoneInfluencers),x.push("#define BonesPerMesh "+(b.skeleton?b.skeleton.bones.length+1:0))):x.push("#define NUM_BONE_INFLUENCERS 0");var C=b.morphTargetManager,u=0;C&&C.numInfluencers>0&&(u=C.numInfluencers,x.push("#define MORPHTARGETS"),x.push("#define NUM_MORPH_INFLUENCERS "+u),C.isUsingTextureForTargets&&x.push("#define MORPHTARGETS_TEXTURE"),h.a.PrepareAttributesForMorphTargetsInfluencers(M,b,u)),d&&(x.push("#define INSTANCES"),h.a.PushAttributesForInstances(M),v.getRenderingMesh().hasThinInstances&&x.push("#define THIN_INSTANCES")),this._storeNonLinearDepth&&x.push("#define NONLINEARDEPTH"),this.isPacked&&x.push("#define PACKED");var S=x.join(`
`);return this._cachedDefines!==S&&(this._cachedDefines=S,this._effect=this._scene.getEngine().createEffect("depth",M,["world","mBones","viewProjection","diffuseMatrix","depthValues","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","morphTargets"],S,void 0,void 0,void 0,{maxSimultaneousMorphTargets:u})),this._effect.isReady()},f.prototype.getDepthMap=function(){return this._depthMap},f.prototype.dispose=function(){this._depthMap.dispose()},f._SceneComponentInitialization=function(v){throw r.a.WarnImport("DepthRendererSceneComponent")},f}()},566:function(te,j,a){"use strict";a.d(j,"a",function(){return h});var l=a(442),o=a(458),y=a(486),O=a(444),h=function(){function D(){}return D.CreateResizedCopy=function(m,n,e,t){t===void 0&&(t=!0);var i=m.getScene(),r=i.getEngine(),s=new o.a("resized"+m.name,{width:n,height:e},i,!m.noMipmap,!0,m._texture.type,!1,m.samplingMode,!1);s.wrapU=m.wrapU,s.wrapV=m.wrapV,s.uOffset=m.uOffset,s.vOffset=m.vOffset,s.uScale=m.uScale,s.vScale=m.vScale,s.uAng=m.uAng,s.vAng=m.vAng,s.wAng=m.wAng,s.coordinatesIndex=m.coordinatesIndex,s.level=m.level,s.anisotropicFilteringLevel=m.anisotropicFilteringLevel,s._texture.isReady=!1,m.wrapU=l.a.CLAMP_ADDRESSMODE,m.wrapV=l.a.CLAMP_ADDRESSMODE;var f=new y.b("pass",1,null,t?l.a.BILINEAR_SAMPLINGMODE:l.a.NEAREST_SAMPLINGMODE,r,!1,0);return f.getEffect().executeWhenCompiled(function(){f.onApply=function(d){d.setTexture("textureSampler",m)};var v=s.getInternalTexture();v&&(i.postProcessManager.directRender([f],v),r.unBindFramebuffer(v),s.disposeFramebufferObjects(),f.dispose(),v.isReady=!0)}),s},D.ApplyPostProcess=function(m,n,e,t,i,r){var s=n.getEngine();return n.isReady=!1,i=i!=null?i:n.samplingMode,t=t!=null?t:n.type,r=r!=null?r:n.format,t===-1&&(t=0),new Promise(function(f){var v=new O.a("postprocess",m,null,null,1,null,i,s,!1,void 0,t,void 0,null,!1,r),d=s.createRenderTargetTexture({width:n.width,height:n.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i,type:t,format:r});v.getEffect().executeWhenCompiled(function(){v.onApply=function(T){T._bindTexture("textureSampler",n),T.setFloat2("scale",1,1)},e.postProcessManager.directRender([v],d,!0),s.restoreDefaultFramebuffer(),s._releaseTexture(n),s._releaseFramebufferObjects(d),v&&v.dispose(),d._swapAndDie(n),n.type=t,n.format=5,n.isReady=!0,f(n)})})},D}()},570:function(te,j,a){"use strict";a.d(j,"b",function(){return n}),a.d(j,"a",function(){return e});var l=a(434),o=a(436),y=a(442),O=a(466),h=a(582),D=a(580),m=a(583),n;(function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"})(n||(n={}));var e=function(t){Object(l.d)(i,t);function i(r,s,f,v,d){f===void 0&&(f=n.Low),v===void 0&&(v=0),d===void 0&&(d=!1);var T=t.call(this,r.getEngine(),"depth of field",function(){return T._effects},!0)||this;T._effects=[],T._circleOfConfusion=new h.a("circleOfConfusion",s,1,null,y.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,v,d),T._depthOfFieldBlurY=[],T._depthOfFieldBlurX=[];var x=1,M=15;switch(f){case n.High:{x=3,M=51;break}case n.Medium:{x=2,M=31;break}default:{M=15,x=1;break}}for(var b=M/Math.pow(2,x-1),C=1,u=0;u<x;u++){var S=new D.a("vertical blur",r,new o.d(0,1),b,C,null,T._circleOfConfusion,u==0?T._circleOfConfusion:null,y.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,v,d);S.autoClear=!1,C=.75/Math.pow(2,u);var R=new D.a("horizontal blur",r,new o.d(1,0),b,C,null,T._circleOfConfusion,null,y.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,v,d);R.autoClear=!1,T._depthOfFieldBlurY.push(S),T._depthOfFieldBlurX.push(R)}T._effects=[T._circleOfConfusion];for(var u=0;u<T._depthOfFieldBlurX.length;u++)T._effects.push(T._depthOfFieldBlurY[u]),T._effects.push(T._depthOfFieldBlurX[u]);return T._dofMerge=new m.a("dofMerge",T._circleOfConfusion,T._circleOfConfusion,T._depthOfFieldBlurX,C,null,y.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,v,d),T._dofMerge.autoClear=!1,T._effects.push(T._dofMerge),T}return Object.defineProperty(i.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(r){this._circleOfConfusion.focalLength=r},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(r){this._circleOfConfusion.fStop=r},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(r){this._circleOfConfusion.focusDistance=r},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(r){this._circleOfConfusion.lensSize=r},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(i.prototype,"depthTexture",{set:function(r){this._circleOfConfusion.depthTexture=r},enumerable:!1,configurable:!0}),i.prototype.disposeEffects=function(r){for(var s=0;s<this._effects.length;s++)this._effects[s].dispose(r)},i.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},i.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},i}(O.a)},571:function(te,j,a){"use strict";a.d(j,"a",function(){return v});var l=a(434),o=a(440),y=a(436),O=a(444),h=a(502),D=function(){function d(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return d}(),m=a(530),n=a(547),e=a(435),t="motionBlurPixelShader",i=`
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
`;e.a.ShadersStore[t]=i;var r={name:t,shader:i},s=a(439),f=a(437),v=function(d){Object(l.d)(T,d);function T(x,M,b,C,u,S,R,p,c,E){p===void 0&&(p=0),c===void 0&&(c=!1),E===void 0&&(E=!1);var A=d.call(this,x,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],b,C,u,S,R,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,p,void 0,null,c)||this;return A.motionStrength=1,A._motionBlurSamples=32,A._isObjectBased=!0,A._forceGeometryBuffer=!1,A._geometryBufferRenderer=null,A._prePassRenderer=null,A._invViewProjection=null,A._previousViewProjection=null,A._forceGeometryBuffer=E,A._forceGeometryBuffer?(A._geometryBufferRenderer=M.enableGeometryBufferRenderer(),A._geometryBufferRenderer&&(A._geometryBufferRenderer.enableVelocity=!0)):(A._prePassRenderer=M.enablePrePassRenderer(),A._prePassRenderer&&(A._prePassRenderer.markAsDirty(),A._prePassEffectConfiguration=new D)),A._applyMode(),A}return Object.defineProperty(T.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(x){this._motionBlurSamples=x,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(T.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(x){this._isObjectBased!==x&&(this._isObjectBased=x,this._applyMode())},enumerable:!1,configurable:!0}),T.prototype.getClassName=function(){return"MotionBlurPostProcess"},T.prototype.excludeSkinnedMesh=function(x){if(x.skeleton){var M=void 0;if(this._geometryBufferRenderer)M=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)M=this._prePassRenderer.excludedSkinnedMesh;else return;M.push(x)}},T.prototype.removeExcludedSkinnedMesh=function(x){if(x.skeleton){var M=void 0;if(this._geometryBufferRenderer)M=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)M=this._prePassRenderer.excludedSkinnedMesh;else return;var b=M.indexOf(x);b!==-1&&M.splice(b,1)}},T.prototype.dispose=function(x){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),d.prototype.dispose.call(this,x)},T.prototype._applyMode=function(){var x=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return o.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(M){return x._onApplyObjectBased(M)}):(this._invViewProjection=y.a.Identity(),this._previousViewProjection=y.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(M){return x._onApplyScreenBased(M)})},T.prototype._onApplyObjectBased=function(x){if(x.setVector2("screenSize",new y.d(this.width,this.height)),x.setFloat("motionScale",this._scene.getAnimationRatio()),x.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var M=this._geometryBufferRenderer.getTextureIndex(h.a.VELOCITY_TEXTURE_TYPE);x.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[M])}else if(this._prePassRenderer){var M=this._prePassRenderer.getIndex(2);x.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[M])}},T.prototype._onApplyScreenBased=function(x){var M=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(M.invertToRef(this._invViewProjection),x.setMatrix("inverseViewProjection",this._invViewProjection),x.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=M,x.setVector2("screenSize",new y.d(this.width,this.height)),x.setFloat("motionScale",this._scene.getAnimationRatio()),x.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var b=this._geometryBufferRenderer.getTextureIndex(h.a.DEPTH_TEXTURE_TYPE);x.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[b])}else if(this._prePassRenderer){var b=this._prePassRenderer.getIndex(5);x.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[b])}},T.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var x=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(x.join(`
`))}},T._Parse=function(x,M,b,C){return s.a.Parse(function(){return new T(x.name,b,x.options,M,x.renderTargetSamplingMode,b.getEngine(),x.reusable,x.textureType,!1)},x,b,C)},Object(l.c)([Object(s.c)()],T.prototype,"motionStrength",void 0),Object(l.c)([Object(s.c)()],T.prototype,"motionBlurSamples",null),Object(l.c)([Object(s.c)()],T.prototype,"isObjectBased",null),T}(O.a);f.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=v},572:function(te,j,a){"use strict";a.d(j,"a",function(){return t});var l=a(436),o=a(441),y=a(483),O=a(700),h=Object.freeze(new l.b(0,0,0,0)),D=Object.freeze(l.e.Zero()),m=Object.freeze(l.d.Zero()),n=Object.freeze(O.a.Zero()),e=Object.freeze(o.a.Black()),t=function(){function i(r,s,f,v){var d=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=s,this._target=r,this._scene=f,this._host=v,this._activeTargets=[],s._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===y.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=l.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var T={frame:0,value:this._minValue};this._keys.splice(0,0,T)}if(this._target instanceof Array){for(var x=0,M=0,b=this._target;M<b.length;M++){var C=b[M];this._preparePath(C,x),this._getOriginalValues(x),x++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var u=s.getEvents();u&&u.length>0&&u.forEach(function(S){d._events.push(S._clone())}),this._enableBlending=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(i.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),i.prototype._preparePath=function(r,s){s===void 0&&(s=0);var f=this._animation.targetPropertyPath;if(f.length>1){for(var v=r[f[0]],d=1;d<f.length-1;d++)v=v[f[d]];this._targetPath=f[f.length-1],this._activeTargets[s]=v}else this._targetPath=f[0],this._activeTargets[s]=r},Object.defineProperty(i.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),i.prototype.reset=function(r){if(r===void 0&&(r=!1),r)if(this._target instanceof Array)for(var s=0,f=0,v=this._target;f<v.length;f++){var d=v[f];this._originalValue[s]!==void 0&&this._setValue(d,this._activeTargets[s],this._originalValue[s],-1,s),s++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var s=0;s<this._events.length;s++)this._events[s].isDone=!1},i.prototype.isStopped=function(){return this._stopped},i.prototype.dispose=function(){var r=this._animation.runtimeAnimations.indexOf(this);r>-1&&this._animation.runtimeAnimations.splice(r,1)},i.prototype.setValue=function(r,s){if(this._targetIsArray){for(var f=0;f<this._target.length;f++){var v=this._target[f];this._setValue(v,this._activeTargets[f],r,s,f)}return}this._setValue(this._target,this._directTarget,r,s,0)},i.prototype._getOriginalValues=function(r){r===void 0&&(r=0);var s,f=this._activeTargets[r];f.getRestPose&&this._targetPath==="_matrix"?s=f.getRestPose():s=f[this._targetPath],s&&s.clone?this._originalValue[r]=s.clone():this._originalValue[r]=s},i.prototype._setValue=function(r,s,f,v,d){if(this._currentActiveTarget=s,this._weight=v,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var T=s[this._targetPath];T.clone?this._originalBlendValue=T.clone():this._originalBlendValue=T}this._originalBlendValue.m?y.a.AllowMatrixDecomposeForInterpolation?this._currentValue?l.a.DecomposeLerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.DecomposeLerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue?l.a.LerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.Lerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue=y.a._UniversalLerp(this._originalBlendValue,f,this._blendingFactor);var x=r&&r.animationPropertiesOverride?r.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=x}else this._currentValue=f;v!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[d]):s[this._targetPath]=this._currentValue,r.markAsDirty&&r.markAsDirty(this._animation.targetProperty)},i.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},i.prototype.goToFrame=function(r){var s=this._animation.getKeys();r<s[0].frame?r=s[0].frame:r>s[s.length-1].frame&&(r=s[s.length-1].frame);var f=this._events;if(f.length)for(var v=0;v<f.length;v++)f[v].onlyOnce||(f[v].isDone=f[v].frame<r);this._currentFrame=r;var d=this._animation._interpolate(r,this._animationState);this.setValue(d,-1)},i.prototype._prepareForSpeedRatioChange=function(r){var s=this._previousDelay*(this._animation.framePerSecond*r)/1e3;this._ratioOffset=this._previousRatio-s},i.prototype.animate=function(r,s,f,v,d,T){T===void 0&&(T=-1);var x=this._animation,M=x.targetPropertyPath;if(!M||M.length<1)return this._stopped=!0,!1;var b=!0;(s<this._minFrame||s>this._maxFrame)&&(s=this._minFrame),(f<this._minFrame||f>this._maxFrame)&&(f=this._maxFrame);var C=f-s,u,S=r*(x.framePerSecond*d)/1e3+this._ratioOffset,R=0;if(this._previousDelay=r,this._previousRatio=S,!v&&f>=s&&S>=C)b=!1,R=x._getKeyValue(this._maxValue);else if(!v&&s>=f&&S<=C)b=!1,R=x._getKeyValue(this._minValue);else if(this._animationState.loopMode!==y.a.ANIMATIONLOOPMODE_CYCLE){var p=f.toString()+s.toString();if(!this._offsetsCache[p]){this._animationState.repeatCount=0,this._animationState.loopMode=y.a.ANIMATIONLOOPMODE_CYCLE;var c=x._interpolate(s,this._animationState),E=x._interpolate(f,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),x.dataType){case y.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[p]=E-c;break;case y.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[p]=E.subtract(c);break;case y.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[p]=E.subtract(c);break;case y.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[p]=E.subtract(c);break;case y.a.ANIMATIONTYPE_SIZE:this._offsetsCache[p]=E.subtract(c);break;case y.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[p]=E.subtract(c);break;default:break}this._highLimitsCache[p]=E}R=this._highLimitsCache[p],u=this._offsetsCache[p]}if(u===void 0)switch(x.dataType){case y.a.ANIMATIONTYPE_FLOAT:u=0;break;case y.a.ANIMATIONTYPE_QUATERNION:u=h;break;case y.a.ANIMATIONTYPE_VECTOR3:u=D;break;case y.a.ANIMATIONTYPE_VECTOR2:u=m;break;case y.a.ANIMATIONTYPE_SIZE:u=n;break;case y.a.ANIMATIONTYPE_COLOR3:u=e}var A;if(this._host&&this._host.syncRoot){var g=this._host.syncRoot,H=(g.masterFrame-g.fromFrame)/(g.toFrame-g.fromFrame);A=s+(f-s)*H}else A=b&&C!==0?s+S%C:f;var U=this._events;if((C>0&&this.currentFrame>A||C<0&&this.currentFrame<A)&&(this._onLoop(),U.length))for(var I=0;I<U.length;I++)U[I].onlyOnce||(U[I].isDone=!1);this._currentFrame=A,this._animationState.repeatCount=C===0?0:S/C>>0,this._animationState.highLimitValue=R,this._animationState.offsetValue=u;var W=x._interpolate(A,this._animationState);if(this.setValue(W,T),U.length){for(var I=0;I<U.length;I++)if(C>0&&A>=U[I].frame&&U[I].frame>=s||C<0&&A<=U[I].frame&&U[I].frame<=s){var Y=U[I];Y.isDone||(Y.onlyOnce&&(U.splice(I,1),I--),Y.isDone=!0,Y.action(A))}}return b||(this._stopped=!0),b},i}()},574:function(te,j,a){"use strict";var l=a(456),o=a(440),y=a(467);y.a.prototype.restoreSingleAttachment=function(){var O=this._gl;this.bindAttachments([O.BACK])},y.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var O=this._gl;this.bindAttachments([O.COLOR_ATTACHMENT0])},y.a.prototype.buildTextureLayout=function(O){for(var h=this._gl,D=[],m=0;m<O.length;m++)O[m]?D.push(h["COLOR_ATTACHMENT"+m]):D.push(h.NONE);return D},y.a.prototype.bindAttachments=function(O){var h=this._gl;h.drawBuffers(O)},y.a.prototype.clearAttachments=function(O,h,D,m,n){if(O.length!==0){var e=this._gl;e.drawBuffers([O[0]]),this.clear(h,h!==null,m,n);var t=O[0];O[0]=e.NONE,e.drawBuffers(O),this.clear(D,D!==null,!1,!1),O[0]=t}},y.a.prototype.unBindMultiColorAttachmentFramebuffer=function(O,h,D){h===void 0&&(h=!1),this._currentRenderTarget=null;var m=this._gl,n=O[0]._attachments,e=n.length;if(O[0]._MSAAFramebuffer){m.bindFramebuffer(m.READ_FRAMEBUFFER,O[0]._MSAAFramebuffer),m.bindFramebuffer(m.DRAW_FRAMEBUFFER,O[0]._framebuffer);for(var t=0;t<e;t++){for(var i=O[t],r=0;r<e;r++)n[r]=m.NONE;n[t]=m[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],m.readBuffer(n[t]),m.drawBuffers(n),m.blitFramebuffer(0,0,i.width,i.height,0,0,i.width,i.height,m.COLOR_BUFFER_BIT,m.NEAREST)}for(var t=0;t<e;t++)n[t]=m[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"];m.drawBuffers(n)}for(var t=0;t<e;t++){var i=O[t];i.generateMipMaps&&!h&&!i.isCube&&(this._bindTextureDirectly(m.TEXTURE_2D,i,!0),m.generateMipmap(m.TEXTURE_2D),this._bindTextureDirectly(m.TEXTURE_2D,null))}D&&(O[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(O[0]._framebuffer),D()),this._bindUnboundFramebuffer(null)},y.a.prototype.createMultipleRenderTarget=function(O,h,D){D===void 0&&(D=!0);var m=!1,n=!0,e=!1,t=!1,i=1,r=0,s=3,f=new Array,v=new Array;h!==void 0&&(m=h.generateMipMaps===void 0?!1:h.generateMipMaps,n=h.generateDepthBuffer===void 0?!0:h.generateDepthBuffer,e=h.generateStencilBuffer===void 0?!1:h.generateStencilBuffer,t=h.generateDepthTexture===void 0?!1:h.generateDepthTexture,i=h.textureCount||1,h.types&&(f=h.types),h.samplingModes&&(v=h.samplingModes));var d=this._gl,T=d.createFramebuffer();this._bindUnboundFramebuffer(T);for(var x=O.width||O,M=O.height||O,b=[],C=[],u=this._setupFramebufferDepthAttachments(e,n,x,M),S=0;S<i;S++){var R=v[S]||s,p=f[S]||r;(p===1&&!this._caps.textureFloatLinearFiltering||p===2&&!this._caps.textureHalfFloatLinearFiltering)&&(R=1);var c=this._getSamplingParameters(R,m);p===1&&!this._caps.textureFloat&&(p=0,o.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var E=new l.a(this,l.b.MultiRenderTarget),A=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+S:"COLOR_ATTACHMENT"+S+"_WEBGL"];b.push(E),C.push(A),d.activeTexture(d["TEXTURE"+S]),d.bindTexture(d.TEXTURE_2D,E._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,c.mag),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,c.min),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(p),x,M,0,d.RGBA,this._getWebGLTextureType(p),null),d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,A,d.TEXTURE_2D,E._hardwareTexture.underlyingResource,0),m&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(d.TEXTURE_2D,null),E._framebuffer=T,E._depthStencilBuffer=u,E.baseWidth=x,E.baseHeight=M,E.width=x,E.height=M,E.isReady=!0,E.samples=1,E.generateMipMaps=m,E.samplingMode=R,E.type=p,E._generateDepthBuffer=n,E._generateStencilBuffer=e,E._attachments=C,E._textureArray=b,this._internalTexturesCache.push(E)}if(t&&this._caps.depthTextureExtension){var g=new l.a(this,l.b.MultiRenderTarget);d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,g._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this.webGLVersion<2?d.DEPTH_COMPONENT:d.DEPTH_COMPONENT16,x,M,0,d.DEPTH_COMPONENT,d.UNSIGNED_SHORT,null),d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,g._hardwareTexture.underlyingResource,0),g._framebuffer=T,g.baseWidth=x,g.baseHeight=M,g.width=x,g.height=M,g.isReady=!0,g.samples=1,g.generateMipMaps=m,g.samplingMode=d.NEAREST,g._generateDepthBuffer=n,g._generateStencilBuffer=e,b.push(g),this._internalTexturesCache.push(g)}return D&&d.drawBuffers(C),this._bindUnboundFramebuffer(null),this.resetTextureCache(),b},y.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(O,h,D){if(D===void 0&&(D=!0),this.webGLVersion<2||!O)return 1;if(O[0].samples===h)return h;var m=O[0]._attachments.length;if(m===0)return 1;var n=this._gl;h=Math.min(h,this.getCaps().maxMSAASamples),O[0]._depthStencilBuffer&&(n.deleteRenderbuffer(O[0]._depthStencilBuffer),O[0]._depthStencilBuffer=null),O[0]._MSAAFramebuffer&&(n.deleteFramebuffer(O[0]._MSAAFramebuffer),O[0]._MSAAFramebuffer=null);for(var e=0;e<m;e++)O[e]._MSAARenderBuffer&&(n.deleteRenderbuffer(O[e]._MSAARenderBuffer),O[e]._MSAARenderBuffer=null);if(h>1&&n.renderbufferStorageMultisample){var t=n.createFramebuffer();if(!t)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(t);for(var i=this._setupFramebufferDepthAttachments(O[0]._generateStencilBuffer,O[0]._generateDepthBuffer,O[0].width,O[0].height,h),r=[],e=0;e<m;e++){var s=O[e],f=n[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],v=n.createRenderbuffer();if(!v)throw new Error("Unable to create multi sampled framebuffer");n.bindRenderbuffer(n.RENDERBUFFER,v),n.renderbufferStorageMultisample(n.RENDERBUFFER,h,this._getRGBAMultiSampleBufferFormat(s.type),s.width,s.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,f,n.RENDERBUFFER,v),s._MSAAFramebuffer=t,s._MSAARenderBuffer=v,s.samples=h,s._depthStencilBuffer=i,n.bindRenderbuffer(n.RENDERBUFFER,null),r.push(f)}D&&n.drawBuffers(r)}else this._bindUnboundFramebuffer(O[0]._framebuffer);return this._bindUnboundFramebuffer(null),h}},576:function(te,j,a){"use strict";a.d(j,"a",function(){return h});var l=a(451),o=a(452),y=a(516),O=a(468);O.a.AddParser(o.a.NAME_EFFECTLAYER,function(D,m,n,e){if(D.effectLayers){n.effectLayers||(n.effectLayers=new Array);for(var t=0;t<D.effectLayers.length;t++){var i=y.a.Parse(D.effectLayers[t],m,e);n.effectLayers.push(i)}}}),O.a.prototype.removeEffectLayer=function(D){var m=this.effectLayers.indexOf(D);return m!==-1&&this.effectLayers.splice(m,1),m},O.a.prototype.addEffectLayer=function(D){this.effectLayers.push(D)};var h=function(){function D(m){this.name=o.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=m,this._engine=m.getEngine(),m.effectLayers=new Array}return D.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(o.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(o.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(o.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(o.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(o.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(o.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},D.prototype.rebuild=function(){for(var m=this.scene.effectLayers,n=0,e=m;n<e.length;n++){var t=e[n];t._rebuild()}},D.prototype.serialize=function(m){m.effectLayers=[];for(var n=this.scene.effectLayers,e=0,t=n;e<t.length;e++){var i=t[e];i.serialize&&m.effectLayers.push(i.serialize())}},D.prototype.addFromContainer=function(m){var n=this;!m.effectLayers||m.effectLayers.forEach(function(e){n.scene.addEffectLayer(e)})},D.prototype.removeFromContainer=function(m,n){var e=this;!m.effectLayers||m.effectLayers.forEach(function(t){e.scene.removeEffectLayer(t),n&&t.dispose()})},D.prototype.dispose=function(){for(var m=this.scene.effectLayers;m.length;)m[0].dispose()},D.prototype._isReadyForMesh=function(m,n){for(var e=this.scene.effectLayers,t=0,i=e;t<i.length;t++){var r=i[t];if(!!r.hasMesh(m))for(var s=0,f=m.subMeshes;s<f.length;s++){var v=f[s];if(!r.isReady(v,n))return!1}}return!0},D.prototype._renderMainTexture=function(m){this._renderEffects=!1,this._needStencil=!1;var n=!1,e=this.scene.effectLayers;if(e&&e.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var t=0,i=e;t<i.length;t++){var r=i[t];if(r.shouldRender()&&(!r.camera||r.camera.cameraRigMode===l.a.RIG_MODE_NONE&&m===r.camera||r.camera.cameraRigMode!==l.a.RIG_MODE_NONE&&r.camera._rigCameras.indexOf(m)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||r.needStencil();var s=r._mainTexture;s._shouldRender()&&(this.scene.incrementRenderId(),s.render(!1,!1),n=!0)}}this.scene.incrementRenderId()}return n},D.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},D.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},D.prototype._draw=function(m){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var n=this.scene.effectLayers,e=0;e<n.length;e++){var t=n[e];t.renderingGroupId===m&&t.shouldRender()&&t.render()}this._engine.setDepthBuffer(!0)}},D.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},D.prototype._drawRenderingGroup=function(m){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(m)},D}();y.a._SceneComponentInitialization=function(D){var m=D._getComponent(o.a.NAME_EFFECTLAYER);m||(m=new h(D),D._addComponent(m))}},577:function(te,j,a){"use strict";a.d(j,"a",function(){return T});var l=a(434),o=a(439),y=a(436),O=a(447),h=a(442),D=a(458),m=a(459),n=a(472),e=a(516),t=a(468),i=a(437),r=a(445),s=a(441),f=a(646),v=a(647),d=a(576);t.a.prototype.getGlowLayerByName=function(x){for(var M=0;M<this.effectLayers.length;M++)if(this.effectLayers[M].name===x&&this.effectLayers[M].getEffectName()===T.EffectName)return this.effectLayers[M];return null};var T=function(x){Object(l.d)(M,x);function M(b,C,u){var S=x.call(this,b,C)||this;return S._intensity=1,S._includedOnlyMeshes=[],S._excludedMeshes=[],S._meshesUsingTheirOwnMaterials=[],S.neutralColor=new s.b(0,0,0,1),S._options=Object(l.a)({mainTextureRatio:M.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},u),S._init({alphaBlendingMode:1,camera:S._options.camera,mainTextureFixedSize:S._options.mainTextureFixedSize,mainTextureRatio:S._options.mainTextureRatio,renderingGroupId:S._options.renderingGroupId}),S}return Object.defineProperty(M.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(b){this._horizontalBlurPostprocess1.kernel=b,this._verticalBlurPostprocess1.kernel=b,this._horizontalBlurPostprocess2.kernel=b,this._verticalBlurPostprocess2.kernel=b},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"intensity",{get:function(){return this._intensity},set:function(b){this._intensity=b},enumerable:!1,configurable:!0}),M.prototype.getEffectName=function(){return M.EffectName},M.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[O.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},M.prototype._createTextureAndPostProcesses=function(){var b=this,C=this._mainTextureDesiredSize.width,u=this._mainTextureDesiredSize.height;C=this._engine.needPOTTextures?r.a.GetExponentOfTwo(C,this._maxSize):C,u=this._engine.needPOTTextures?r.a.GetExponentOfTwo(u,this._maxSize):u;var S=0;this._engine.getCaps().textureHalfFloatRender?S=2:S=0,this._blurTexture1=new D.a("GlowLayerBlurRTT",{width:C,height:u},this._scene,!1,!0,S),this._blurTexture1.wrapU=h.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=h.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(h.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var R=Math.floor(C/2),p=Math.floor(u/2);this._blurTexture2=new D.a("GlowLayerBlurRTT2",{width:R,height:p},this._scene,!1,!0,S),this._blurTexture2.wrapU=h.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=h.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(h.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new n.a("GlowLayerHBP1",new y.d(1,0),this._options.blurKernelSize/2,{width:C,height:u},null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,S),this._horizontalBlurPostprocess1.width=C,this._horizontalBlurPostprocess1.height=u,this._horizontalBlurPostprocess1.onApplyObservable.add(function(c){c.setTexture("textureSampler",b._mainTexture)}),this._verticalBlurPostprocess1=new n.a("GlowLayerVBP1",new y.d(0,1),this._options.blurKernelSize/2,{width:C,height:u},null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,S),this._horizontalBlurPostprocess2=new n.a("GlowLayerHBP2",new y.d(1,0),this._options.blurKernelSize/2,{width:R,height:p},null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,S),this._horizontalBlurPostprocess2.width=R,this._horizontalBlurPostprocess2.height=p,this._horizontalBlurPostprocess2.onApplyObservable.add(function(c){c.setTexture("textureSampler",b._blurTexture1)}),this._verticalBlurPostprocess2=new n.a("GlowLayerVBP2",new y.d(0,1),this._options.blurKernelSize/2,{width:R,height:p},null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,S),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var c=b._blurTexture1.getInternalTexture();if(c){b._scene.postProcessManager.directRender(b._postProcesses1,c,!0);var E=b._blurTexture2.getInternalTexture();E&&b._scene.postProcessManager.directRender(b._postProcesses2,E,!0),b._engine.unBindFramebuffer(E!=null?E:c,!0)}}),this._postProcesses.map(function(c){c.autoClear=!1})},M.prototype.isReady=function(b,C){var u=b.getMaterial(),S=b.getRenderingMesh();if(!u||!S)return!1;var R=u.emissiveTexture;return x.prototype._isReady.call(this,b,C,R)},M.prototype.needStencil=function(){return!1},M.prototype._canRenderMesh=function(b,C){return!0},M.prototype._internalRender=function(b){b.setTexture("textureSampler",this._blurTexture1),b.setTexture("textureSampler2",this._blurTexture2),b.setFloat("offset",this._intensity);var C=this._engine,u=C.getStencilBuffer();C.setStencilBuffer(!1),C.drawElementsType(m.a.TriangleFillMode,0,6),C.setStencilBuffer(u)},M.prototype._setEmissiveTextureAndColor=function(b,C,u){var S=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(b,C,u):u?(this._emissiveTextureAndColor.texture=u.emissiveTexture,this._emissiveTextureAndColor.texture&&(S=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(b,C,u,this._emissiveTextureAndColor.color):u.emissiveColor?this._emissiveTextureAndColor.color.set(u.emissiveColor.r*S,u.emissiveColor.g*S,u.emissiveColor.b*S,u.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},M.prototype._shouldRenderMesh=function(b){return this.hasMesh(b)},M.prototype._addCustomEffectDefines=function(b){b.push("#define GLOW")},M.prototype.addExcludedMesh=function(b){this._excludedMeshes.indexOf(b.uniqueId)===-1&&this._excludedMeshes.push(b.uniqueId)},M.prototype.removeExcludedMesh=function(b){var C=this._excludedMeshes.indexOf(b.uniqueId);C!==-1&&this._excludedMeshes.splice(C,1)},M.prototype.addIncludedOnlyMesh=function(b){this._includedOnlyMeshes.indexOf(b.uniqueId)===-1&&this._includedOnlyMeshes.push(b.uniqueId)},M.prototype.removeIncludedOnlyMesh=function(b){var C=this._includedOnlyMeshes.indexOf(b.uniqueId);C!==-1&&this._includedOnlyMeshes.splice(C,1)},M.prototype.hasMesh=function(b){return x.prototype.hasMesh.call(this,b)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(b.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(b.uniqueId)===-1:!0:!1},M.prototype._useMeshMaterial=function(b){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(b.uniqueId)>-1},M.prototype.referenceMeshToUseItsOwnMaterial=function(b){this._meshesUsingTheirOwnMaterials.push(b.uniqueId)},M.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(b){for(var C=this._meshesUsingTheirOwnMaterials.indexOf(b.uniqueId);C>=0;)this._meshesUsingTheirOwnMaterials.splice(C,1),C=this._meshesUsingTheirOwnMaterials.indexOf(b.uniqueId)},M.prototype._disposeMesh=function(b){this.removeIncludedOnlyMesh(b),this.removeExcludedMesh(b)},M.prototype.getClassName=function(){return"GlowLayer"},M.prototype.serialize=function(){var b=o.a.Serialize(this);b.customType="BABYLON.GlowLayer";var C;if(b.includedMeshes=[],this._includedOnlyMeshes.length)for(C=0;C<this._includedOnlyMeshes.length;C++){var u=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[C]);u&&b.includedMeshes.push(u.id)}if(b.excludedMeshes=[],this._excludedMeshes.length)for(C=0;C<this._excludedMeshes.length;C++){var u=this._scene.getMeshByUniqueID(this._excludedMeshes[C]);u&&b.excludedMeshes.push(u.id)}return b},M.Parse=function(b,C,u){var S=o.a.Parse(function(){return new M(b.name,C,b.options)},b,C,u),R;for(R=0;R<b.excludedMeshes.length;R++){var p=C.getMeshByID(b.excludedMeshes[R]);p&&S.addExcludedMesh(p)}for(R=0;R<b.includedMeshes.length;R++){var p=C.getMeshByID(b.includedMeshes[R]);p&&S.addIncludedOnlyMesh(p)}return S},M.EffectName="GlowLayer",M.DefaultBlurKernelSize=32,M.DefaultTextureRatio=.5,Object(l.c)([Object(o.c)()],M.prototype,"blurKernelSize",null),Object(l.c)([Object(o.c)()],M.prototype,"intensity",null),Object(l.c)([Object(o.c)("options")],M.prototype,"_options",void 0),M}(e.a);i.a.RegisteredTypes["BABYLON.GlowLayer"]=T},578:function(te,j,a){"use strict";a.d(j,"a",function(){return n});var l=a(434),o=a(466),y=a(584),O=a(472),h=a(585),D=a(436),m=a(442),n=function(e){Object(l.d)(t,e);function t(i,r,s,f,v,d){v===void 0&&(v=0),d===void 0&&(d=!1);var T=e.call(this,i.getEngine(),"bloom",function(){return T._effects},!0)||this;return T.bloomScale=r,T._effects=[],T._downscale=new y.a("highlights",1,null,m.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,v,d),T._blurX=new O.a("horizontal blur",new D.d(1,0),10,r,null,m.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,v,void 0,d),T._blurX.alwaysForcePOT=!0,T._blurX.autoClear=!1,T._blurY=new O.a("vertical blur",new D.d(0,1),10,r,null,m.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,v,void 0,d),T._blurY.alwaysForcePOT=!0,T._blurY.autoClear=!1,T.kernel=f,T._effects=[T._downscale,T._blurX,T._blurY],T._merge=new h.a("bloomMerge",T._downscale,T._blurY,s,r,null,m.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,v,d),T._merge.autoClear=!1,T._effects.push(T._merge),T}return Object.defineProperty(t.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(i){this._downscale.threshold=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._merge.weight},set:function(i){this._merge.weight=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(i){this._blurX.kernel=i*this.bloomScale,this._blurY.kernel=i*this.bloomScale},enumerable:!1,configurable:!0}),t.prototype.disposeEffects=function(i){for(var r=0;r<this._effects.length;r++)this._effects[r].dispose(i)},t.prototype._updateEffects=function(){for(var i=0;i<this._effects.length;i++)this._effects[i].updateEffect()},t.prototype._isReady=function(){for(var i=0;i<this._effects.length;i++)if(!this._effects[i].isReady())return!1;return!0},t}(o.a)},579:function(te,j,a){"use strict";a.d(j,"a",function(){return m});var l=a(434),o=a(436),y=a(444),O=a(600),h=a(437),D=a(439),m=function(n){Object(l.d)(e,n);function e(t,i,r,s,f,v,d,T,x,M){x===void 0&&(x=0),M===void 0&&(M=!1);var b=n.call(this,t,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],s,f,v,d,T,null,x,void 0,null,M)||this;return b.aberrationAmount=30,b.radialIntensity=0,b.direction=new o.d(.707,.707),b.centerPosition=new o.d(.5,.5),b.screenWidth=i,b.screenHeight=r,b.onApplyObservable.add(function(C){C.setFloat("chromatic_aberration",b.aberrationAmount),C.setFloat("screen_width",i),C.setFloat("screen_height",r),C.setFloat("radialIntensity",b.radialIntensity),C.setFloat2("direction",b.direction.x,b.direction.y),C.setFloat2("centerPosition",b.centerPosition.x,b.centerPosition.y)}),b}return e.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},e._Parse=function(t,i,r,s){return D.a.Parse(function(){return new e(t.name,t.screenWidth,t.screenHeight,t.options,i,t.renderTargetSamplingMode,r.getEngine(),t.reusable,t.textureType,!1)},t,r,s)},Object(l.c)([Object(D.c)()],e.prototype,"aberrationAmount",void 0),Object(l.c)([Object(D.c)()],e.prototype,"radialIntensity",void 0),Object(l.c)([Object(D.c)()],e.prototype,"direction",void 0),Object(l.c)([Object(D.c)()],e.prototype,"centerPosition",void 0),Object(l.c)([Object(D.c)()],e.prototype,"screenWidth",void 0),Object(l.c)([Object(D.c)()],e.prototype,"screenHeight",void 0),e}(y.a);h.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=m},580:function(te,j,a){"use strict";a.d(j,"a",function(){return D});var l=a(434),o=a(442),y=a(472),O=a(437),h=a(439),D=function(m){Object(l.d)(n,m);function n(e,t,i,r,s,f,v,d,T,x,M,b,C){d===void 0&&(d=null),T===void 0&&(T=o.a.BILINEAR_SAMPLINGMODE),b===void 0&&(b=0),C===void 0&&(C=!1);var u=m.call(this,e,i,r,s,f,T=2,x,M,b=0,`#define DOF 1\r
`,C)||this;return u.direction=i,u.onApplyObservable.add(function(S){d!=null&&S.setTextureFromPostProcess("textureSampler",d),S.setTextureFromPostProcessOutput("circleOfConfusionSampler",v),t.activeCamera&&S.setFloat2("cameraMinMaxZ",t.activeCamera.minZ,t.activeCamera.maxZ)}),u}return n.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(l.c)([Object(h.c)()],n.prototype,"direction",void 0),n}(y.a);O.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=D},581:function(te,j,a){"use strict";a.d(j,"a",function(){return i});var l=a(434),o=a(444),y=a(502),O=a(439),h=function(){function r(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return r}(),D=a(435),m="screenSpaceReflectionPixelShader",n=`

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
`;D.a.ShadersStore[m]=n;var e={name:m,shader:n},t=a(437),i=function(r){Object(l.d)(s,r);function s(f,v,d,T,x,M,b,C,u,S){C===void 0&&(C=0),u===void 0&&(u=!1),S===void 0&&(S=!1);var R=r.call(this,f,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],d,T,x,M,b,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,C,void 0,null,u)||this;if(R.threshold=1.2,R.strength=1,R.reflectionSpecularFalloffExponent=3,R.step=1,R.roughnessFactor=.2,R._forceGeometryBuffer=!1,R._enableSmoothReflections=!1,R._reflectionSamples=64,R._smoothSteps=5,R._forceGeometryBuffer=S,R._forceGeometryBuffer){var p=v.enableGeometryBufferRenderer();p&&p.isSupported&&(p.enablePosition=!0,p.enableReflectivity=!0,R._geometryBufferRenderer=p)}else R._prePassRenderer=v.enablePrePassRenderer(),R._prePassRenderer.markAsDirty(),R._prePassEffectConfiguration=new h;return R._updateEffectDefines(),R.onApply=function(c){var E=R._geometryBufferRenderer,A=R._prePassRenderer;if(!(!A&&!E)){if(E){var g=E.getTextureIndex(y.a.POSITION_TEXTURE_TYPE),H=E.getTextureIndex(y.a.REFLECTIVITY_TEXTURE_TYPE);c.setTexture("normalSampler",E.getGBuffer().textures[1]),c.setTexture("positionSampler",E.getGBuffer().textures[g]),c.setTexture("reflectivitySampler",E.getGBuffer().textures[H])}else{var g=A.getIndex(1),H=A.getIndex(3),U=A.getIndex(6);c.setTexture("normalSampler",A.getRenderTarget().textures[U]),c.setTexture("positionSampler",A.getRenderTarget().textures[g]),c.setTexture("reflectivitySampler",A.getRenderTarget().textures[H])}var I=v.activeCamera;if(!!I){var W=I.getViewMatrix(!0),Y=I.getProjectionMatrix(!0);c.setMatrix("projection",Y),c.setMatrix("view",W),c.setFloat("threshold",R.threshold),c.setFloat("reflectionSpecularFalloffExponent",R.reflectionSpecularFalloffExponent),c.setFloat("strength",R.strength),c.setFloat("step",R.step),c.setFloat("roughnessFactor",R.roughnessFactor)}}},R}return s.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(s.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(f){f!==this._enableSmoothReflections&&(this._enableSmoothReflections=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(f){f!==this._reflectionSamples&&(this._reflectionSamples=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(f){f!==this._smoothSteps&&(this._smoothSteps=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),s.prototype._updateEffectDefines=function(){var f=[];(this._geometryBufferRenderer||this._prePassRenderer)&&f.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&f.push("#define ENABLE_SMOOTH_REFLECTIONS"),f.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),f.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(f.join(`
`))},s._Parse=function(f,v,d,T){return O.a.Parse(function(){return new s(f.name,d,f.options,v,f.renderTargetSamplingMode,d.getEngine(),f.textureType,f.reusable)},f,d,T)},Object(l.c)([Object(O.c)()],s.prototype,"threshold",void 0),Object(l.c)([Object(O.c)()],s.prototype,"strength",void 0),Object(l.c)([Object(O.c)()],s.prototype,"reflectionSpecularFalloffExponent",void 0),Object(l.c)([Object(O.c)()],s.prototype,"step",void 0),Object(l.c)([Object(O.c)()],s.prototype,"roughnessFactor",void 0),Object(l.c)([Object(O.c)()],s.prototype,"enableSmoothReflections",null),Object(l.c)([Object(O.c)()],s.prototype,"reflectionSamples",null),Object(l.c)([Object(O.c)()],s.prototype,"smoothSteps",null),s}(o.a);t.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=i},582:function(te,j,a){"use strict";a.d(j,"a",function(){return t});var l=a(434),o=a(444),y=a(440),O=a(435),h="circleOfConfusionPixelShader",D=`
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
`;O.a.ShadersStore[h]=D;var m={name:h,shader:D},n=a(437),e=a(439),t=function(i){Object(l.d)(r,i);function r(s,f,v,d,T,x,M,b,C){b===void 0&&(b=0),C===void 0&&(C=!1);var u=i.call(this,s,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],v,d,T,x,M,null,b,void 0,null,C)||this;return u.lensSize=50,u.fStop=1.4,u.focusDistance=2e3,u.focalLength=50,u._depthTexture=null,u._depthTexture=f,u.onApplyObservable.add(function(S){if(!u._depthTexture){y.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}S.setTexture("depthSampler",u._depthTexture);var R=u.lensSize/u.fStop,p=R*u.focalLength/(u.focusDistance-u.focalLength);S.setFloat("focusDistance",u.focusDistance),S.setFloat("cocPrecalculation",p),S.setFloat2("cameraMinMaxZ",u._depthTexture.activeCamera.minZ,u._depthTexture.activeCamera.maxZ)}),u}return r.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(r.prototype,"depthTexture",{set:function(s){this._depthTexture=s},enumerable:!1,configurable:!0}),Object(l.c)([Object(e.c)()],r.prototype,"lensSize",void 0),Object(l.c)([Object(e.c)()],r.prototype,"fStop",void 0),Object(l.c)([Object(e.c)()],r.prototype,"focusDistance",void 0),Object(l.c)([Object(e.c)()],r.prototype,"focalLength",void 0),r}(o.a);n.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=t},583:function(te,j,a){"use strict";a.d(j,"b",function(){return m}),a.d(j,"a",function(){return n});var l=a(434),o=a(444),y=a(435),O="depthOfFieldMergePixelShader",h=`uniform sampler2D textureSampler;
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
`;y.a.ShadersStore[O]=h;var D={name:O,shader:h},m=function(){function e(){}return e}(),n=function(e){Object(l.d)(t,e);function t(i,r,s,f,v,d,T,x,M,b,C){b===void 0&&(b=0),C===void 0&&(C=!1);var u=e.call(this,i,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],v,d,T,x,M,null,b,void 0,null,!0)||this;return u.blurSteps=f,u.onApplyObservable.add(function(S){S.setTextureFromPostProcess("textureSampler",r),S.setTextureFromPostProcessOutput("circleOfConfusionSampler",s),f.forEach(function(R,p){S.setTextureFromPostProcessOutput("blurStep"+(f.length-p-1),R)})}),C||u.updateEffect(),u}return t.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},t.prototype.updateEffect=function(i,r,s,f,v,d){i===void 0&&(i=null),r===void 0&&(r=null),s===void 0&&(s=null),i||(i="",i+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),e.prototype.updateEffect.call(this,i,r,s,f,v,d)},t}(o.a)},584:function(te,j,a){"use strict";a.d(j,"a",function(){return i});var l=a(434),o=a(444),y=a(515),O=a(435),h=a(457),D="extractHighlightsPixelShader",m=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;O.a.ShadersStore[D]=m;var n={name:D,shader:m},e=a(439),t=a(437),i=function(r){Object(l.d)(s,r);function s(f,v,d,T,x,M,b,C){b===void 0&&(b=0),C===void 0&&(C=!1);var u=r.call(this,f,"extractHighlights",["threshold","exposure"],null,v,d,T,x,M,null,b,void 0,null,C)||this;return u.threshold=.9,u._exposure=1,u._inputPostProcess=null,u.onApplyObservable.add(function(S){u._inputPostProcess&&S.setTextureFromPostProcess("textureSampler",u._inputPostProcess),S.setFloat("threshold",Math.pow(u.threshold,y.b)),S.setFloat("exposure",u._exposure)}),u}return s.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(l.c)([Object(e.c)()],s.prototype,"threshold",void 0),s}(o.a);t.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=i},585:function(te,j,a){"use strict";a.d(j,"a",function(){return e});var l=a(434),o=a(444),y=a(435),O="bloomMergePixelShader",h=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;y.a.ShadersStore[O]=h;var D={name:O,shader:h},m=a(437),n=a(439),e=function(t){Object(l.d)(i,t);function i(r,s,f,v,d,T,x,M,b,C,u){C===void 0&&(C=0),u===void 0&&(u=!1);var S=t.call(this,r,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],d,T,x,M,b,null,C,void 0,null,!0)||this;return S.weight=1,S.weight=v,S.onApplyObservable.add(function(R){R.setTextureFromPostProcess("textureSampler",s),R.setTextureFromPostProcessOutput("bloomBlur",f),R.setFloat("bloomWeight",S.weight)}),u||S.updateEffect(),S}return i.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(l.c)([Object(n.c)()],i.prototype,"weight",void 0),i}(o.a);m.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=e},586:function(te,j,a){"use strict";a.d(j,"a",function(){return t});var l=a(434),o=a(444),y=a(435),O=a(457),h="grainPixelShader",D=`#include<helperFunctions>

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
}`;y.a.ShadersStore[h]=D;var m={name:h,shader:D},n=a(437),e=a(439),t=function(i){Object(l.d)(r,i);function r(s,f,v,d,T,x,M,b){M===void 0&&(M=0),b===void 0&&(b=!1);var C=i.call(this,s,"grain",["intensity","animatedSeed"],[],f,v,d,T,x,null,M,void 0,null,b)||this;return C.intensity=30,C.animated=!1,C.onApplyObservable.add(function(u){u.setFloat("intensity",C.intensity),u.setFloat("animatedSeed",C.animated?Math.random()+1:1)}),C}return r.prototype.getClassName=function(){return"GrainPostProcess"},r._Parse=function(s,f,v,d){return e.a.Parse(function(){return new r(s.name,s.options,f,s.renderTargetSamplingMode,v.getEngine(),s.reusable)},s,v,d)},Object(l.c)([Object(e.c)()],r.prototype,"intensity",void 0),Object(l.c)([Object(e.c)()],r.prototype,"animated",void 0),r}(o.a);n.a.RegisteredTypes["BABYLON.GrainPostProcess"]=t},587:function(te,j,a){"use strict";a.d(j,"a",function(){return e});var l=a(434),o=a(444),y=a(435),O="sharpenPixelShader",h=`
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
}`;y.a.ShadersStore[O]=h;var D={name:O,shader:h},m=a(437),n=a(439),e=function(t){Object(l.d)(i,t);function i(r,s,f,v,d,T,x,M){x===void 0&&(x=0),M===void 0&&(M=!1);var b=t.call(this,r,"sharpen",["sharpnessAmounts","screenSize"],null,s,f,v,d,T,null,x,void 0,null,M)||this;return b.colorAmount=1,b.edgeAmount=.3,b.onApply=function(C){C.setFloat2("screenSize",b.width,b.height),C.setFloat2("sharpnessAmounts",b.edgeAmount,b.colorAmount)},b}return i.prototype.getClassName=function(){return"SharpenPostProcess"},i._Parse=function(r,s,f,v){return n.a.Parse(function(){return new i(r.name,r.options,s,r.renderTargetSamplingMode,f.getEngine(),r.textureType,r.reusable)},r,f,v)},Object(l.c)([Object(n.c)()],i.prototype,"colorAmount",void 0),Object(l.c)([Object(n.c)()],i.prototype,"edgeAmount",void 0),i}(o.a);m.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=e},594:function(te,j,a){"use strict";a.d(j,"a",function(){return C});var l=a(434),o=a(440),y=a(439),O=a(436),h=a(451),D=a(442),m=a(479),n=a(444),e=a(481),t=a(466),i=a(486),r=a(437),s=a(448),f=function(){function u(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return u}(),v=a(482),d=a(435),T="ssao2PixelShader",x=`
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
`;d.a.ShadersStore[T]=x;var M={name:T,shader:x},b=a(601),C=function(u){Object(l.d)(S,u);function S(R,p,c,E,A){A===void 0&&(A=!1);var g=u.call(this,p.getEngine(),R)||this;if(g.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",g.SSAORenderEffect="SSAORenderEffect",g.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",g.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",g.SSAOCombineRenderEffect="SSAOCombineRenderEffect",g.totalStrength=1,g.maxZ=100,g.minZAspect=.2,g._samples=8,g._textureSamples=1,g._forceGeometryBuffer=!1,g._expensiveBlur=!0,g.radius=2,g.base=0,g._bits=new Uint32Array(1),g._scene=p,g._ratio=c,g._forceGeometryBuffer=A,!g.isSupported)return o.a.Error("The current engine does not support SSAO 2."),g;var H=g._ratio.ssaoRatio||c,U=g._ratio.blurRatio||c;return g._forceGeometryBuffer?p.enableGeometryBufferRenderer():g._prePassRenderer=p.enablePrePassRenderer(),g._createRandomTexture(),g._originalColorPostProcess=new i.b("SSAOOriginalSceneColor",1,null,D.a.BILINEAR_SAMPLINGMODE,p.getEngine(),!1),g._originalColorPostProcess.samples=g.textureSamples,g._createSSAOPostProcess(1),g._createBlurPostProcess(H,U),g._createSSAOCombinePostProcess(U),g.addEffect(new t.a(p.getEngine(),g.SSAOOriginalSceneColorEffect,function(){return g._originalColorPostProcess},!0)),g.addEffect(new t.a(p.getEngine(),g.SSAORenderEffect,function(){return g._ssaoPostProcess},!0)),g.addEffect(new t.a(p.getEngine(),g.SSAOBlurHRenderEffect,function(){return g._blurHPostProcess},!0)),g.addEffect(new t.a(p.getEngine(),g.SSAOBlurVRenderEffect,function(){return g._blurVPostProcess},!0)),g.addEffect(new t.a(p.getEngine(),g.SSAOCombineRenderEffect,function(){return g._ssaoCombinePostProcess},!0)),p.postProcessRenderPipelineManager.addPipeline(g),E&&p.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(R,E),g}return Object.defineProperty(S.prototype,"samples",{get:function(){return this._samples},set:function(R){this._samples=R,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(R){this._textureSamples=R,this._prePassRenderer?this._prePassRenderer.samples=R:this._originalColorPostProcess.samples=R},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(R){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(R?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(R?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=R},enumerable:!1,configurable:!0}),Object.defineProperty(S,"IsSupported",{get:function(){var R=s.a.LastCreatedEngine;return R?R._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),S.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},S.prototype.dispose=function(R){R===void 0&&(R=!1);for(var p=0;p<this._scene.cameras.length;p++){var c=this._scene.cameras[p];this._originalColorPostProcess.dispose(c),this._ssaoPostProcess.dispose(c),this._blurHPostProcess.dispose(c),this._blurVPostProcess.dispose(c),this._ssaoCombinePostProcess.dispose(c)}this._randomTexture.dispose(),R&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),u.prototype.dispose.call(this)},S.prototype._createBlurPostProcess=function(R,p){var c=this;this._samplerOffsets=[];for(var E=this.expensiveBlur,A=-8;A<8;A++)this._samplerOffsets.push(A*2+.5);this._blurHPostProcess=new n.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],R,null,D.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(E?"1":"0")+`
`),this._blurHPostProcess.onApply=function(g){!c._scene.activeCamera||(g.setFloat("outSize",c._ssaoCombinePostProcess.width>0?c._ssaoCombinePostProcess.width:c._originalColorPostProcess.width),g.setFloat("near",c._scene.activeCamera.minZ),g.setFloat("far",c._scene.activeCamera.maxZ),g.setFloat("radius",c.radius),c._forceGeometryBuffer?g.setTexture("depthSampler",c._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):g.setTexture("depthSampler",c._prePassRenderer.getRenderTarget().textures[c._prePassRenderer.getIndex(5)]),g.setArray("samplerOffsets",c._samplerOffsets))},this._blurVPostProcess=new n.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],p,null,D.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(E?"1":"0")+`
`),this._blurVPostProcess.onApply=function(g){!c._scene.activeCamera||(g.setFloat("outSize",c._ssaoCombinePostProcess.height>0?c._ssaoCombinePostProcess.height:c._originalColorPostProcess.height),g.setFloat("near",c._scene.activeCamera.minZ),g.setFloat("far",c._scene.activeCamera.maxZ),g.setFloat("radius",c.radius),c._forceGeometryBuffer?g.setTexture("depthSampler",c._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):g.setTexture("depthSampler",c._prePassRenderer.getRenderTarget().textures[c._prePassRenderer.getIndex(5)]),g.setArray("samplerOffsets",c._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},S.prototype._rebuild=function(){u.prototype._rebuild.call(this)},S.prototype._radicalInverse_VdC=function(R){return this._bits[0]=R,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},S.prototype._hammersley=function(R,p){return[R/p,this._radicalInverse_VdC(R)]},S.prototype._hemisphereSample_uniform=function(R,p){var c=p*2*Math.PI,E=1-(R*.85+.15),A=Math.sqrt(1-E*E);return new O.e(Math.cos(c)*A,Math.sin(c)*A,E)},S.prototype._generateHemisphere=function(){for(var R=this.samples,p=[],c,E=0;E<R;){if(R<16)c=this._hemisphereSample_uniform(Math.random(),Math.random());else{var A=this._hammersley(E,R);c=this._hemisphereSample_uniform(A[0],A[1])}p.push(c.x,c.y,c.z),E++}return p},S.prototype._getDefinesForSSAO=function(){var R="#define SAMPLES "+this.samples+`
#define SSAO`;return R},S.prototype._createSSAOPostProcess=function(R){var p=this;this._sampleSphere=this._generateHemisphere();var c=this._getDefinesForSSAO(),E=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new n.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],E,R,null,D.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,c),this._ssaoPostProcess.onApply=function(A){var g,H,U,I;if(!!p._scene.activeCamera){if(A.setArray3("sampleSphere",p._sampleSphere),A.setFloat("randTextureTiles",32),A.setFloat("samplesFactor",1/p.samples),A.setFloat("totalStrength",p.totalStrength),A.setFloat2("texelSize",1/p._ssaoPostProcess.width,1/p._ssaoPostProcess.height),A.setFloat("radius",p.radius),A.setFloat("maxZ",p.maxZ),A.setFloat("minZAspect",p.minZAspect),A.setFloat("base",p.base),A.setFloat("near",p._scene.activeCamera.minZ),A.setFloat("far",p._scene.activeCamera.maxZ),p._scene.activeCamera.mode===h.a.PERSPECTIVE_CAMERA)A.setMatrix3x3("depthProjection",S.PERSPECTIVE_DEPTH_PROJECTION),A.setFloat("xViewport",Math.tan(p._scene.activeCamera.fov/2)*p._scene.getEngine().getAspectRatio(p._scene.activeCamera,!0)),A.setFloat("yViewport",Math.tan(p._scene.activeCamera.fov/2));else{var W=p._scene.getEngine().getRenderWidth()/2,Y=p._scene.getEngine().getRenderHeight()/2,$=(g=p._scene.activeCamera.orthoLeft)!==null&&g!==void 0?g:-W,G=(H=p._scene.activeCamera.orthoRight)!==null&&H!==void 0?H:W,J=(U=p._scene.activeCamera.orthoBottom)!==null&&U!==void 0?U:-Y,ne=(I=p._scene.activeCamera.orthoTop)!==null&&I!==void 0?I:Y;A.setMatrix3x3("depthProjection",S.ORTHO_DEPTH_PROJECTION),A.setFloat("xViewport",(G-$)*.5),A.setFloat("yViewport",(ne-J)*.5)}A.setMatrix("projection",p._scene.getProjectionMatrix()),p._forceGeometryBuffer?(A.setTexture("depthSampler",p._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),A.setTexture("normalSampler",p._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(A.setTexture("depthSampler",p._prePassRenderer.getRenderTarget().textures[p._prePassRenderer.getIndex(5)]),A.setTexture("normalSampler",p._prePassRenderer.getRenderTarget().textures[p._prePassRenderer.getIndex(6)])),A.setTexture("randomSampler",p._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},S.prototype._createSSAOCombinePostProcess=function(R){var p=this;this._ssaoCombinePostProcess=new n.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],R,null,D.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(c){var E=p._scene.activeCamera.viewport;c.setVector4("viewport",O.c.Vector4[0].copyFromFloats(E.x,E.y,E.width,E.height)),c.setTextureFromPostProcessOutput("originalColor",p._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new f)},S.prototype._createRandomTexture=function(){var R=128;this._randomTexture=new m.a("SSAORandomTexture",R,this._scene,!1,D.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=D.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=D.a.WRAP_ADDRESSMODE;for(var p=this._randomTexture.getContext(),c=function(H,U){return Math.random()*(U-H)+H},E=O.e.Zero(),A=0;A<R;A++)for(var g=0;g<R;g++)E.x=c(0,1),E.y=c(0,1),E.z=0,E.normalize(),E.scaleInPlace(255),E.x=Math.floor(E.x),E.y=Math.floor(E.y),p.fillStyle="rgb("+E.x+", "+E.y+", "+E.z+")",p.fillRect(A,g,1,1);this._randomTexture.update(!1)},S.prototype.serialize=function(){var R=y.a.Serialize(this);return R.customType="SSAO2RenderingPipeline",R},S.Parse=function(R,p,c){return y.a.Parse(function(){return new S(R._name,p,R._ratio)},R,p,c)},S.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],S.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(l.c)([Object(y.c)()],S.prototype,"totalStrength",void 0),Object(l.c)([Object(y.c)()],S.prototype,"maxZ",void 0),Object(l.c)([Object(y.c)()],S.prototype,"minZAspect",void 0),Object(l.c)([Object(y.c)("samples")],S.prototype,"_samples",void 0),Object(l.c)([Object(y.c)("textureSamples")],S.prototype,"_textureSamples",void 0),Object(l.c)([Object(y.c)()],S.prototype,"_ratio",void 0),Object(l.c)([Object(y.c)("expensiveBlur")],S.prototype,"_expensiveBlur",void 0),Object(l.c)([Object(y.c)()],S.prototype,"radius",void 0),Object(l.c)([Object(y.c)()],S.prototype,"base",void 0),S}(e.a);r.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=C},599:function(te,j,a){"use strict";a.d(j,"a",function(){return m});var l=a(434),o=a(439),y=a(436),O=a(453),h=a(484),D=a(537);O.a.AddNodeConstructor("Light_Type_1",function(n,e){return function(){return new m(n,y.e.Zero(),e)}});var m=function(n){Object(l.d)(e,n);function e(t,i,r){var s=n.call(this,t,r)||this;return s._shadowFrustumSize=0,s._shadowOrthoScale=.1,s.autoUpdateExtends=!0,s.autoCalcShadowZBounds=!1,s._orthoLeft=Number.MAX_VALUE,s._orthoRight=Number.MIN_VALUE,s._orthoTop=Number.MIN_VALUE,s._orthoBottom=Number.MAX_VALUE,s.position=i.scale(-1),s.direction=i,s}return Object.defineProperty(e.prototype,"shadowFrustumSize",{get:function(){return this._shadowFrustumSize},set:function(t){this._shadowFrustumSize=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowOrthoScale",{get:function(){return this._shadowOrthoScale},set:function(t){this._shadowOrthoScale=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoLeft",{get:function(){return this._orthoLeft},set:function(t){this._orthoLeft=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoRight",{get:function(){return this._orthoRight},set:function(t){this._orthoRight=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoTop",{get:function(){return this._orthoTop},set:function(t){this._orthoTop=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"orthoBottom",{get:function(){return this._orthoBottom},set:function(t){this._orthoBottom=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"DirectionalLight"},e.prototype.getTypeID=function(){return h.a.LIGHTTYPEID_DIRECTIONALLIGHT},e.prototype._setDefaultShadowProjectionMatrix=function(t,i,r){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(t):this._setDefaultAutoExtendShadowProjectionMatrix(t,i,r)},e.prototype._setDefaultFixedFrustumShadowProjectionMatrix=function(t){var i=this.getScene().activeCamera;!i||y.a.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ!==void 0?this.shadowMinZ:i.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:i.maxZ,t)},e.prototype._setDefaultAutoExtendShadowProjectionMatrix=function(t,i,r){var s=this.getScene().activeCamera;if(!!s){if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){var f=y.e.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;for(var v=Number.MAX_VALUE,d=Number.MIN_VALUE,T=0;T<r.length;T++){var x=r[T];if(!!x)for(var M=x.getBoundingInfo(),b=M.boundingBox,C=0;C<b.vectorsWorld.length;C++)y.e.TransformCoordinatesToRef(b.vectorsWorld[C],i,f),f.x<this._orthoLeft&&(this._orthoLeft=f.x),f.y<this._orthoBottom&&(this._orthoBottom=f.y),f.x>this._orthoRight&&(this._orthoRight=f.x),f.y>this._orthoTop&&(this._orthoTop=f.y),this.autoCalcShadowZBounds&&(f.z<v&&(v=f.z),f.z>d&&(d=f.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=v,this._shadowMaxZ=d)}var u=this._orthoRight-this._orthoLeft,S=this._orthoTop-this._orthoBottom;y.a.OrthoOffCenterLHToRef(this._orthoLeft-u*this.shadowOrthoScale,this._orthoRight+u*this.shadowOrthoScale,this._orthoBottom-S*this.shadowOrthoScale,this._orthoTop+S*this.shadowOrthoScale,this.shadowMinZ!==void 0?this.shadowMinZ:s.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:s.maxZ,t)}},e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.transferToEffect=function(t,i){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,i),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,i),this)},e.prototype.transferToNodeMaterialEffect=function(t,i){return this.computeTransformedInformation()?(t.setFloat3(i,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(t.setFloat3(i,this.direction.x,this.direction.y,this.direction.z),this)},e.prototype.getDepthMinZ=function(t){return 1},e.prototype.getDepthMaxZ=function(t){return 1},e.prototype.prepareLightSpecificDefines=function(t,i){t["DIRLIGHT"+i]=!0},Object(l.c)([Object(o.c)()],e.prototype,"shadowFrustumSize",null),Object(l.c)([Object(o.c)()],e.prototype,"shadowOrthoScale",null),Object(l.c)([Object(o.c)()],e.prototype,"autoUpdateExtends",void 0),Object(l.c)([Object(o.c)()],e.prototype,"autoCalcShadowZBounds",void 0),Object(l.c)([Object(o.c)("orthoLeft")],e.prototype,"_orthoLeft",void 0),Object(l.c)([Object(o.c)("orthoRight")],e.prototype,"_orthoRight",void 0),Object(l.c)([Object(o.c)("orthoTop")],e.prototype,"_orthoTop",void 0),Object(l.c)([Object(o.c)("orthoBottom")],e.prototype,"_orthoBottom",void 0),e}(D.a)},600:function(te,j,a){"use strict";var l=a(435),o="chromaticAberrationPixelShader",y=`
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
}`;l.a.ShadersStore[o]=y;var O={name:o,shader:y}},601:function(te,j,a){"use strict";var l=a(435),o="ssaoCombinePixelShader",y=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;l.a.ShadersStore[o]=y;var O={name:o,shader:y}},602:function(te,j,a){"use strict";a.d(j,"a",function(){return M}),a.d(j,"b",function(){return H}),a.d(j,"g",function(){return U.a}),a.d(j,"h",function(){return ee}),a.d(j,"i",function(){return se}),a.d(j,"c",function(){return s.a}),a.d(j,"d",function(){return r.a}),a.d(j,"e",function(){return me.a}),a.d(j,"f",function(){return x.a});var l=a(434),o=a(439),y=a(438),O=a(440),h=a(442),D=a(577),m=a(587),n=a(518),e=a(579),t=a(586),i=a(517),r=a(481),s=a(466),f=a(570),v=a(578),d=a(437),T=a(448),x=a(482),M=function(le){Object(l.d)(V,le);function V(P,w,B,k,Q){P===void 0&&(P=""),w===void 0&&(w=!0),B===void 0&&(B=T.a.LastCreatedScene),Q===void 0&&(Q=!0);var F=le.call(this,B.getEngine(),P)||this;F._camerasToBeAttached=[],F.SharpenPostProcessId="SharpenPostProcessEffect",F.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",F.FxaaPostProcessId="FxaaPostProcessEffect",F.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",F.GrainPostProcessId="GrainPostProcessEffect",F._glowLayer=null,F.animations=[],F._imageProcessingConfigurationObserver=null,F._sharpenEnabled=!1,F._bloomEnabled=!1,F._depthOfFieldEnabled=!1,F._depthOfFieldBlurLevel=f.b.Low,F._fxaaEnabled=!1,F._imageProcessingEnabled=!0,F._bloomScale=.5,F._chromaticAberrationEnabled=!1,F._grainEnabled=!1,F._buildAllowed=!0,F.onBuildObservable=new y.c,F._resizeObserver=null,F._hardwareScaleLevel=1,F._bloomKernel=64,F._bloomWeight=.15,F._bloomThreshold=.9,F._samples=1,F._hasCleared=!1,F._prevPostProcess=null,F._prevPrevPostProcess=null,F._depthOfFieldSceneObserver=null,F._cameras=k||B.cameras,F._cameras=F._cameras.slice(),F._camerasToBeAttached=F._cameras.slice(),F._buildAllowed=Q,F._scene=B;var re=F._scene.getEngine().getCaps();F._hdr=w&&(re.textureHalfFloatRender||re.textureFloatRender),F._hdr?re.textureHalfFloatRender?F._defaultPipelineTextureType=2:re.textureFloatRender&&(F._defaultPipelineTextureType=1):F._defaultPipelineTextureType=0,B.postProcessRenderPipelineManager.addPipeline(F);var ve=F._scene.getEngine();return F.sharpen=new m.a("sharpen",1,null,h.a.BILINEAR_SAMPLINGMODE,ve,!1,F._defaultPipelineTextureType,!0),F._sharpenEffect=new s.a(ve,F.SharpenPostProcessId,function(){return F.sharpen},!0),F.depthOfField=new f.a(F._scene,null,F._depthOfFieldBlurLevel,F._defaultPipelineTextureType,!0),F.bloom=new v.a(F._scene,F._bloomScale,F._bloomWeight,F.bloomKernel,F._defaultPipelineTextureType,!0),F.chromaticAberration=new e.a("ChromaticAberration",ve.getRenderWidth(),ve.getRenderHeight(),1,null,h.a.BILINEAR_SAMPLINGMODE,ve,!1,F._defaultPipelineTextureType,!0),F._chromaticAberrationEffect=new s.a(ve,F.ChromaticAberrationPostProcessId,function(){return F.chromaticAberration},!0),F.grain=new t.a("Grain",1,null,h.a.BILINEAR_SAMPLINGMODE,ve,!1,F._defaultPipelineTextureType,!0),F._grainEffect=new s.a(ve,F.GrainPostProcessId,function(){return F.grain},!0),F._resizeObserver=ve.onResizeObservable.add(function(){F._hardwareScaleLevel=ve.getHardwareScalingLevel(),F.bloomKernel=F.bloomKernel}),F._imageProcessingConfigurationObserver=F._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){F.bloom._downscale._exposure=F._scene.imageProcessingConfiguration.exposure,F.imageProcessingEnabled!==F._scene.imageProcessingConfiguration.isEnabled&&(F._imageProcessingEnabled=F._scene.imageProcessingConfiguration.isEnabled,F._buildPipeline())}),F._buildPipeline(),F}return Object.defineProperty(V.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(P){this._sharpenEnabled!==P&&(this._sharpenEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(P){this._bloomKernel=P,this.bloom.kernel=P/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(P){this._bloomWeight!==P&&(this.bloom.weight=P,this._bloomWeight=P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(P){this._bloomThreshold!==P&&(this.bloom.threshold=P,this._bloomThreshold=P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(P){this._bloomScale!==P&&(this._bloomScale=P,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(P){this._bloomEnabled!==P&&(this._bloomEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),V.prototype._rebuildBloom=function(){var P=this.bloom;this.bloom=new v.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=P.threshold;for(var w=0;w<this._cameras.length;w++)P.disposeEffects(this._cameras[w])},Object.defineProperty(V.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(P){this._depthOfFieldEnabled!==P&&(this._depthOfFieldEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(P){if(this._depthOfFieldBlurLevel!==P){this._depthOfFieldBlurLevel=P;var w=this.depthOfField;this.depthOfField=new f.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=w.focalLength,this.depthOfField.focusDistance=w.focusDistance,this.depthOfField.fStop=w.fStop,this.depthOfField.lensSize=w.lensSize;for(var B=0;B<this._cameras.length;B++)w.disposeEffects(this._cameras[B]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(P){this._fxaaEnabled!==P&&(this._fxaaEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"samples",{get:function(){return this._samples},set:function(P){this._samples!==P&&(this._samples=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(P){this._imageProcessingEnabled!==P&&(this._scene.imageProcessingConfiguration.isEnabled=P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(P){P&&!this._glowLayer?this._glowLayer=new D.a("",this._scene):!P&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(P){this._chromaticAberrationEnabled!==P&&(this._chromaticAberrationEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(P){this._grainEnabled!==P&&(this._grainEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),V.prototype.getClassName=function(){return"DefaultRenderingPipeline"},V.prototype.prepare=function(){var P=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=P},V.prototype._setAutoClearAndTextureSharing=function(P,w){w===void 0&&(w=!1),this._hasCleared?P.autoClear=!1:(P.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),w||(this._prevPrevPostProcess?P.shareOutputWith(this._prevPrevPostProcess):P.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=P)},V.prototype._buildPipeline=function(){var P=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var w=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var B=0,k=this._cameras;B<k.length;B++){var Q=k[B],F=this._scene.enableDepthRenderer(Q);F.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(re){P._cameras.indexOf(re.activeCamera)>-1&&(P.depthOfField.depthTexture=re.enableDepthRenderer(re.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var F=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=F.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new n.a("imageProcessing",1,null,h.a.BILINEAR_SAMPLINGMODE,w,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new s.a(w,this.ImageProcessingPostProcessId,function(){return P.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new i.a("fxaa",1,null,h.a.BILINEAR_SAMPLINGMODE,w,!1,this._defaultPipelineTextureType),this.addEffect(new s.a(w,this.FxaaPostProcessId,function(){return P.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&O.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},V.prototype._disposePostProcesses=function(P){P===void 0&&(P=!1);for(var w=0;w<this._cameras.length;w++){var B=this._cameras[w];this.imageProcessing&&this.imageProcessing.dispose(B),this.fxaa&&this.fxaa.dispose(B),P&&(this.sharpen&&this.sharpen.dispose(B),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(B)),this.bloom&&this.bloom.disposeEffects(B),this.chromaticAberration&&this.chromaticAberration.dispose(B),this.grain&&this.grain.dispose(B),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,P&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},V.prototype.addCamera=function(P){this._camerasToBeAttached.push(P),this._buildPipeline()},V.prototype.removeCamera=function(P){var w=this._camerasToBeAttached.indexOf(P);this._camerasToBeAttached.splice(w,1),this._buildPipeline()},V.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),le.prototype.dispose.call(this)},V.prototype.serialize=function(){var P=o.a.Serialize(this);return P.customType="DefaultRenderingPipeline",P},V.Parse=function(P,w,B){return o.a.Parse(function(){return new V(P._name,P._name._hdr,w)},P,w,B)},Object(l.c)([Object(o.c)()],V.prototype,"sharpenEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"bloomKernel",null),Object(l.c)([Object(o.c)()],V.prototype,"_bloomWeight",void 0),Object(l.c)([Object(o.c)()],V.prototype,"_bloomThreshold",void 0),Object(l.c)([Object(o.c)()],V.prototype,"_hdr",void 0),Object(l.c)([Object(o.c)()],V.prototype,"bloomWeight",null),Object(l.c)([Object(o.c)()],V.prototype,"bloomThreshold",null),Object(l.c)([Object(o.c)()],V.prototype,"bloomScale",null),Object(l.c)([Object(o.c)()],V.prototype,"bloomEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"depthOfFieldEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"depthOfFieldBlurLevel",null),Object(l.c)([Object(o.c)()],V.prototype,"fxaaEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"samples",null),Object(l.c)([Object(o.c)()],V.prototype,"imageProcessingEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"glowLayerEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"chromaticAberrationEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"grainEnabled",null),V}(r.a);d.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=M;var b=a(479),C=a(444),u=a(600),S=a(435),R="lensHighlightsPixelShader",p=`
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

}`;S.a.ShadersStore[R]=p;var c={name:R,shader:p},E="depthOfFieldPixelShader",A=`




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
`;S.a.ShadersStore[E]=A;var g={name:E,shader:A},H=function(le){Object(l.d)(V,le);function V(P,w,B,k,Q){k===void 0&&(k=1);var F=le.call(this,B.getEngine(),P)||this;return F.LensChromaticAberrationEffect="LensChromaticAberrationEffect",F.HighlightsEnhancingEffect="HighlightsEnhancingEffect",F.LensDepthOfFieldEffect="LensDepthOfFieldEffect",F._pentagonBokehIsEnabled=!1,F._scene=B,F._depthTexture=B.enableDepthRenderer().getDepthMap(),w.grain_texture?F._grainTexture=w.grain_texture:F._createGrainTexture(),F._edgeBlur=w.edge_blur?w.edge_blur:0,F._grainAmount=w.grain_amount?w.grain_amount:0,F._chromaticAberration=w.chromatic_aberration?w.chromatic_aberration:0,F._distortion=w.distortion?w.distortion:0,F._highlightsGain=w.dof_gain!==void 0?w.dof_gain:-1,F._highlightsThreshold=w.dof_threshold?w.dof_threshold:1,F._dofDistance=w.dof_focus_distance!==void 0?w.dof_focus_distance:-1,F._dofAperture=w.dof_aperture?w.dof_aperture:1,F._dofDarken=w.dof_darken?w.dof_darken:0,F._dofPentagon=w.dof_pentagon!==void 0?w.dof_pentagon:!0,F._blurNoise=w.blur_noise!==void 0?w.blur_noise:!0,F._createChromaticAberrationPostProcess(k),F._createHighlightsPostProcess(k),F._createDepthOfFieldPostProcess(k/4),F.addEffect(new s.a(B.getEngine(),F.LensChromaticAberrationEffect,function(){return F._chromaticAberrationPostProcess},!0)),F.addEffect(new s.a(B.getEngine(),F.HighlightsEnhancingEffect,function(){return F._highlightsPostProcess},!0)),F.addEffect(new s.a(B.getEngine(),F.LensDepthOfFieldEffect,function(){return F._depthOfFieldPostProcess},!0)),F._highlightsGain===-1&&F._disableEffect(F.HighlightsEnhancingEffect,null),B.postProcessRenderPipelineManager.addPipeline(F),Q&&B.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(P,Q),F}return V.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(V.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(P){this.setEdgeBlur(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(P){this.setGrainAmount(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(P){this.setChromaticAberration(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(P){this.setAperture(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(P){this.setEdgeDistortion(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(P){this.setFocusDistance(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(P){this.setDarkenOutOfFocus(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(P){this._blurNoise=P},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(P){P?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(P){this.setHighlightsGain(P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(P){this.setHighlightsThreshold(P)},enumerable:!1,configurable:!0}),V.prototype.setEdgeBlur=function(P){this._edgeBlur=P},V.prototype.disableEdgeBlur=function(){this._edgeBlur=0},V.prototype.setGrainAmount=function(P){this._grainAmount=P},V.prototype.disableGrain=function(){this._grainAmount=0},V.prototype.setChromaticAberration=function(P){this._chromaticAberration=P},V.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},V.prototype.setEdgeDistortion=function(P){this._distortion=P},V.prototype.disableEdgeDistortion=function(){this._distortion=0},V.prototype.setFocusDistance=function(P){this._dofDistance=P},V.prototype.disableDepthOfField=function(){this._dofDistance=-1},V.prototype.setAperture=function(P){this._dofAperture=P},V.prototype.setDarkenOutOfFocus=function(P){this._dofDarken=P},V.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},V.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},V.prototype.enableNoiseBlur=function(){this._blurNoise=!0},V.prototype.disableNoiseBlur=function(){this._blurNoise=!1},V.prototype.setHighlightsGain=function(P){this._highlightsGain=P},V.prototype.setHighlightsThreshold=function(P){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=P},V.prototype.disableHighlights=function(){this._highlightsGain=-1},V.prototype.dispose=function(P){P===void 0&&(P=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),P&&this._scene.disableDepthRenderer()},V.prototype._createChromaticAberrationPostProcess=function(P){var w=this;this._chromaticAberrationPostProcess=new C.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],P,null,h.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(B){B.setFloat("chromatic_aberration",w._chromaticAberration),B.setFloat("screen_width",w._scene.getEngine().getRenderWidth()),B.setFloat("screen_height",w._scene.getEngine().getRenderHeight()),B.setFloat("radialIntensity",1),B.setFloat2("direction",17,17),B.setFloat2("centerPosition",.5,.5)}},V.prototype._createHighlightsPostProcess=function(P){var w=this;this._highlightsPostProcess=new C.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],P,null,h.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(B){B.setFloat("gain",w._highlightsGain),B.setFloat("threshold",w._highlightsThreshold),B.setTextureFromPostProcess("textureSampler",w._chromaticAberrationPostProcess),B.setFloat("screen_width",w._scene.getEngine().getRenderWidth()),B.setFloat("screen_height",w._scene.getEngine().getRenderHeight())}},V.prototype._createDepthOfFieldPostProcess=function(P){var w=this;this._depthOfFieldPostProcess=new C.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],P,null,h.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(B){B.setTexture("depthSampler",w._depthTexture),B.setTexture("grainSampler",w._grainTexture),B.setTextureFromPostProcess("textureSampler",w._highlightsPostProcess),B.setTextureFromPostProcess("highlightsSampler",w._depthOfFieldPostProcess),B.setFloat("grain_amount",w._grainAmount),B.setBool("blur_noise",w._blurNoise),B.setFloat("screen_width",w._scene.getEngine().getRenderWidth()),B.setFloat("screen_height",w._scene.getEngine().getRenderHeight()),B.setFloat("distortion",w._distortion),B.setBool("dof_enabled",w._dofDistance!==-1),B.setFloat("screen_distance",1/(.1-1/w._dofDistance)),B.setFloat("aperture",w._dofAperture),B.setFloat("darken",w._dofDarken),B.setFloat("edge_blur",w._edgeBlur),B.setBool("highlights",w._highlightsGain!==-1),w._scene.activeCamera&&(B.setFloat("near",w._scene.activeCamera.minZ),B.setFloat("far",w._scene.activeCamera.maxZ))}},V.prototype._createGrainTexture=function(){var P=512;this._grainTexture=new b.a("LensNoiseTexture",P,this._scene,!1,h.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=h.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=h.a.WRAP_ADDRESSMODE;for(var w=this._grainTexture.getContext(),B=function(re,ve){return Math.random()*(ve-re)+re},k,Q=0;Q<P;Q++)for(var F=0;F<P;F++)k=Math.floor(B(.42,.58)*255),w.fillStyle="rgb("+k+", "+k+", "+k+")",w.fillRect(Q,F,1,1);this._grainTexture.update(!1)},V}(r.a),U=a(594),I=a(436),W=a(486),Y=a(472),$="ssaoPixelShader",G=`
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
`;S.a.ShadersStore[$]=G;var J={name:$,shader:G},ne=a(601),ee=function(le){Object(l.d)(V,le);function V(P,w,B,k){var Q=le.call(this,w.getEngine(),P)||this;Q.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",Q.SSAORenderEffect="SSAORenderEffect",Q.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",Q.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",Q.SSAOCombineRenderEffect="SSAOCombineRenderEffect",Q.totalStrength=1,Q.radius=1e-4,Q.area=.0075,Q.fallOff=1e-6,Q.base=.5,Q._firstUpdate=!0,Q._scene=w,Q._createRandomTexture(),Q._depthTexture=w.enableDepthRenderer().getDepthMap();var F=B.ssaoRatio||B,re=B.combineRatio||B;return Q._originalColorPostProcess=new W.b("SSAOOriginalSceneColor",re,null,h.a.BILINEAR_SAMPLINGMODE,w.getEngine(),!1),Q._createSSAOPostProcess(F),Q._createBlurPostProcess(F),Q._createSSAOCombinePostProcess(re),Q.addEffect(new s.a(w.getEngine(),Q.SSAOOriginalSceneColorEffect,function(){return Q._originalColorPostProcess},!0)),Q.addEffect(new s.a(w.getEngine(),Q.SSAORenderEffect,function(){return Q._ssaoPostProcess},!0)),Q.addEffect(new s.a(w.getEngine(),Q.SSAOBlurHRenderEffect,function(){return Q._blurHPostProcess},!0)),Q.addEffect(new s.a(w.getEngine(),Q.SSAOBlurVRenderEffect,function(){return Q._blurVPostProcess},!0)),Q.addEffect(new s.a(w.getEngine(),Q.SSAOCombineRenderEffect,function(){return Q._ssaoCombinePostProcess},!0)),w.postProcessRenderPipelineManager.addPipeline(Q),k&&w.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(P,k),Q}return Object.defineProperty(V.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),V.prototype.getClassName=function(){return"SSAORenderingPipeline"},V.prototype.dispose=function(P){P===void 0&&(P=!1);for(var w=0;w<this._scene.cameras.length;w++){var B=this._scene.cameras[w];this._originalColorPostProcess.dispose(B),this._ssaoPostProcess.dispose(B),this._blurHPostProcess.dispose(B),this._blurVPostProcess.dispose(B),this._ssaoCombinePostProcess.dispose(B)}this._randomTexture.dispose(),P&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),le.prototype.dispose.call(this)},V.prototype._createBlurPostProcess=function(P){var w=this,B=16;this._blurHPostProcess=new Y.a("BlurH",new I.d(1,0),B,P,null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new Y.a("BlurV",new I.d(0,1),B,P,null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var k=w._blurHPostProcess.width/w._scene.getEngine().getRenderWidth();w._blurHPostProcess.kernel=B*k}),this._blurVPostProcess.onActivateObservable.add(function(){var k=w._blurVPostProcess.height/w._scene.getEngine().getRenderHeight();w._blurVPostProcess.kernel=B*k})},V.prototype._rebuild=function(){this._firstUpdate=!0,le.prototype._rebuild.call(this)},V.prototype._createSSAOPostProcess=function(P){var w=this,B=16,k=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],Q=1/B;this._ssaoPostProcess=new C.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],P,null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+B+`
#define SSAO`),this._ssaoPostProcess.onApply=function(F){w._firstUpdate&&(F.setArray3("sampleSphere",k),F.setFloat("samplesFactor",Q),F.setFloat("randTextureTiles",4)),F.setFloat("totalStrength",w.totalStrength),F.setFloat("radius",w.radius),F.setFloat("area",w.area),F.setFloat("fallOff",w.fallOff),F.setFloat("base",w.base),F.setTexture("textureSampler",w._depthTexture),F.setTexture("randomSampler",w._randomTexture)}},V.prototype._createSSAOCombinePostProcess=function(P){var w=this;this._ssaoCombinePostProcess=new C.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],P,null,h.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(B){B.setVector4("viewport",I.c.Vector4[0].copyFromFloats(0,0,1,1)),B.setTextureFromPostProcess("originalColor",w._originalColorPostProcess)}},V.prototype._createRandomTexture=function(){var P=512;this._randomTexture=new b.a("SSAORandomTexture",P,this._scene,!1,h.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=h.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=h.a.WRAP_ADDRESSMODE;for(var w=this._randomTexture.getContext(),B=function(re,ve){return Math.random()*(ve-re)+re},k=I.e.Zero(),Q=0;Q<P;Q++)for(var F=0;F<P;F++)k.x=Math.floor(B(-1,1)*255),k.y=Math.floor(B(-1,1)*255),k.z=Math.floor(B(-1,1)*255),w.fillStyle="rgb("+k.x+", "+k.y+", "+k.z+")",w.fillRect(Q,F,1,1);this._randomTexture.update(!1)},Object(l.c)([Object(o.c)()],V.prototype,"totalStrength",void 0),Object(l.c)([Object(o.c)()],V.prototype,"radius",void 0),Object(l.c)([Object(o.c)()],V.prototype,"area",void 0),Object(l.c)([Object(o.c)()],V.prototype,"fallOff",void 0),Object(l.c)([Object(o.c)()],V.prototype,"base",void 0),V}(r.a),oe=a(450),q=a(571),X=a(581),ge=a(535),_e="standardPixelShader",ie=`uniform sampler2D textureSampler;
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
`;S.a.ShadersStore[_e]=ie;var de={name:_e,shader:ie},se=function(le){Object(l.d)(V,le);function V(P,w,B,k,Q){k===void 0&&(k=null);var F=le.call(this,w.getEngine(),P)||this;return F.downSampleX4PostProcess=null,F.brightPassPostProcess=null,F.blurHPostProcesses=[],F.blurVPostProcesses=[],F.textureAdderPostProcess=null,F.volumetricLightPostProcess=null,F.volumetricLightSmoothXPostProcess=null,F.volumetricLightSmoothYPostProcess=null,F.volumetricLightMergePostProces=null,F.volumetricLightFinalPostProcess=null,F.luminancePostProcess=null,F.luminanceDownSamplePostProcesses=[],F.hdrPostProcess=null,F.textureAdderFinalPostProcess=null,F.lensFlareFinalPostProcess=null,F.hdrFinalPostProcess=null,F.lensFlarePostProcess=null,F.lensFlareComposePostProcess=null,F.motionBlurPostProcess=null,F.depthOfFieldPostProcess=null,F.fxaaPostProcess=null,F.screenSpaceReflectionPostProcess=null,F.brightThreshold=1,F.blurWidth=512,F.horizontalBlur=!1,F.lensTexture=null,F.volumetricLightCoefficient=.2,F.volumetricLightPower=4,F.volumetricLightBlurScale=64,F.sourceLight=null,F.hdrMinimumLuminance=1,F.hdrDecreaseRate=.5,F.hdrIncreaseRate=.5,F.lensColorTexture=null,F.lensFlareStrength=20,F.lensFlareGhostDispersal=1.4,F.lensFlareHaloWidth=.7,F.lensFlareDistortionStrength=16,F.lensFlareBlurWidth=512,F.lensStarTexture=null,F.lensFlareDirtTexture=null,F.depthOfFieldDistance=10,F.depthOfFieldBlurWidth=64,F.animations=[],F._currentDepthOfFieldSource=null,F._fixedExposure=1,F._currentExposure=1,F._hdrAutoExposure=!1,F._hdrCurrentLuminance=1,F._motionStrength=1,F._isObjectBasedMotionBlur=!1,F._camerasToBeAttached=[],F._bloomEnabled=!1,F._depthOfFieldEnabled=!1,F._vlsEnabled=!1,F._lensFlareEnabled=!1,F._hdrEnabled=!1,F._motionBlurEnabled=!1,F._fxaaEnabled=!1,F._screenSpaceReflectionsEnabled=!1,F._motionBlurSamples=64,F._volumetricLightStepsCount=50,F._samples=1,F._cameras=Q||w.cameras,F._cameras=F._cameras.slice(),F._camerasToBeAttached=F._cameras.slice(),F._scene=w,F._basePostProcess=k,F._ratio=B,F._floatTextureType=w.getEngine().getCaps().textureFloatRender?1:2,w.postProcessRenderPipelineManager.addPipeline(F),F._buildPipeline(),F}return Object.defineProperty(V.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(P){this._fixedExposure=P,this._currentExposure=P},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(P){if(this._hdrAutoExposure=P,this.hdrPostProcess){var w=["#define HDR"];P&&w.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(w.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(P){this._motionStrength=P,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=P)},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(P){var w=this._isObjectBasedMotionBlur!==P;this._isObjectBasedMotionBlur=P,w&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(P){this._bloomEnabled!==P&&(this._bloomEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(P){this._depthOfFieldEnabled!==P&&(this._depthOfFieldEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(P){this._lensFlareEnabled!==P&&(this._lensFlareEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(P){this._hdrEnabled!==P&&(this._hdrEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(P){if(this._vlsEnabled!==P){if(P){var w=this._scene.enableGeometryBufferRenderer();if(!w){O.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=P,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(P){this._motionBlurEnabled!==P&&(this._motionBlurEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(P){this._fxaaEnabled!==P&&(this._fxaaEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(P){this._screenSpaceReflectionsEnabled!==P&&(this._screenSpaceReflectionsEnabled=P,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(P){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+P.toFixed(1)),this._volumetricLightStepsCount=P},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(P){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=P:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+P.toFixed(1))),this._motionBlurSamples=P},enumerable:!1,configurable:!0}),Object.defineProperty(V.prototype,"samples",{get:function(){return this._samples},set:function(P){this._samples!==P&&(this._samples=P,this._buildPipeline())},enumerable:!1,configurable:!0}),V.prototype._buildPipeline=function(){var P=this,w=this._ratio,B=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new X.a("HDRPass",B,w,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){P._currentDepthOfFieldSource=P.screenSpaceReflectionPostProcess}),this.addEffect(new s.a(B.getEngine(),"HDRScreenSpaceReflections",function(){return P.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new C.a("HDRPass","standard",[],[],w,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){P._currentDepthOfFieldSource=P.originalPostProcess}),this.addEffect(new s.a(B.getEngine(),"HDRPassPostProcess",function(){return P.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(B,w/4),this._createBrightPassPostProcess(B,w/4),this._createBlurPostProcesses(B,w/4,1),this._createTextureAdderPostProcess(B,w),this.textureAdderFinalPostProcess=new C.a("HDRDepthOfFieldSource","standard",[],[],w,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new s.a(B.getEngine(),"HDRBaseDepthOfFieldSource",function(){return P.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(B,w),this.volumetricLightFinalPostProcess=new C.a("HDRVLSFinal","standard",[],[],w,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new s.a(B.getEngine(),"HDRVLSFinal",function(){return P.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(B,w),this.lensFlareFinalPostProcess=new C.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],w,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new s.a(B.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return P.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(B,this._floatTextureType),this._createHdrPostProcess(B,w),this.hdrFinalPostProcess=new C.a("HDRPostHDReDepthOfFieldSource","standard",[],[],w,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new s.a(B.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return P.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(B,w/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(B,w)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(B,w),this._fxaaEnabled&&(this.fxaaPostProcess=new i.a("fxaa",1,null,h.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1,0),this.addEffect(new s.a(B.getEngine(),"HDRFxaa",function(){return P.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&O.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},V.prototype._createDownSampleX4PostProcess=function(P,w){var B=this,k=new Array(32);this.downSampleX4PostProcess=new C.a("HDRDownSampleX4","standard",["dsOffsets"],[],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(Q){for(var F=0,re=B.downSampleX4PostProcess.width,ve=B.downSampleX4PostProcess.height,Se=-2;Se<2;Se++)for(var Ae=-2;Ae<2;Ae++)k[F]=(Se+.5)*(1/re),k[F+1]=(Ae+.5)*(1/ve),F+=2;Q.setArray2("dsOffsets",k)},this.addEffect(new s.a(P.getEngine(),"HDRDownSampleX4",function(){return B.downSampleX4PostProcess},!0))},V.prototype._createBrightPassPostProcess=function(P,w){var B=this,k=new Array(8);this.brightPassPostProcess=new C.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(Q){var F=1/B.brightPassPostProcess.width,re=1/B.brightPassPostProcess.height;k[0]=-.5*F,k[1]=.5*re,k[2]=.5*F,k[3]=.5*re,k[4]=-.5*F,k[5]=-.5*re,k[6]=.5*F,k[7]=-.5*re,Q.setArray2("dsOffsets",k),Q.setFloat("brightThreshold",B.brightThreshold)},this.addEffect(new s.a(P.getEngine(),"HDRBrightPass",function(){return B.brightPassPostProcess},!0))},V.prototype._createBlurPostProcesses=function(P,w,B,k){var Q=this;k===void 0&&(k="blurWidth");var F=P.getEngine(),re=new Y.a("HDRBlurH_"+B,new I.d(1,0),this[k],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,this._floatTextureType),ve=new Y.a("HDRBlurV_"+B,new I.d(0,1),this[k],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,this._floatTextureType);re.onActivateObservable.add(function(){var Se=re.width/F.getRenderWidth();re.kernel=Q[k]*Se}),ve.onActivateObservable.add(function(){var Se=ve.height/F.getRenderHeight();ve.kernel=Q.horizontalBlur?64*Se:Q[k]*Se}),this.addEffect(new s.a(P.getEngine(),"HDRBlurH"+B,function(){return re},!0)),this.addEffect(new s.a(P.getEngine(),"HDRBlurV"+B,function(){return ve},!0)),this.blurHPostProcesses.push(re),this.blurVPostProcesses.push(ve)},V.prototype._createTextureAdderPostProcess=function(P,w){var B=this;this.textureAdderPostProcess=new C.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(k){k.setTextureFromPostProcess("otherSampler",B._vlsEnabled?B._currentDepthOfFieldSource:B.originalPostProcess),k.setTexture("lensSampler",B.lensTexture),k.setFloat("exposure",B._currentExposure),B._currentDepthOfFieldSource=B.textureAdderFinalPostProcess},this.addEffect(new s.a(P.getEngine(),"HDRTextureAdder",function(){return B.textureAdderPostProcess},!0))},V.prototype._createVolumetricLightPostProcess=function(P,w){var B=this,k=P.enableGeometryBufferRenderer();k.enablePosition=!0;var Q=k.getGBuffer();this.volumetricLightPostProcess=new C.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],w/8,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var F=I.d.Zero();this.volumetricLightPostProcess.onApply=function(re){if(B.sourceLight&&B.sourceLight.getShadowGenerator()&&B._scene.activeCamera){var ve=B.sourceLight.getShadowGenerator();re.setTexture("shadowMapSampler",ve.getShadowMap()),re.setTexture("positionSampler",Q.textures[2]),re.setColor3("sunColor",B.sourceLight.diffuse),re.setVector3("sunDirection",B.sourceLight.getShadowDirection()),re.setVector3("cameraPosition",B._scene.activeCamera.globalPosition),re.setMatrix("shadowViewProjection",ve.getTransformMatrix()),re.setFloat("scatteringCoefficient",B.volumetricLightCoefficient),re.setFloat("scatteringPower",B.volumetricLightPower),F.x=B.sourceLight.getDepthMinZ(B._scene.activeCamera),F.y=B.sourceLight.getDepthMaxZ(B._scene.activeCamera),re.setVector2("depthValues",F)}},this.addEffect(new s.a(P.getEngine(),"HDRVLS",function(){return B.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(P,w/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new C.a("HDRVLSMerge","standard",[],["originalSampler"],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(re){re.setTextureFromPostProcess("originalSampler",B._bloomEnabled?B.textureAdderFinalPostProcess:B.originalPostProcess),B._currentDepthOfFieldSource=B.volumetricLightFinalPostProcess},this.addEffect(new s.a(P.getEngine(),"HDRVLSMerge",function(){return B.volumetricLightMergePostProces},!0))},V.prototype._createLuminancePostProcesses=function(P,w){var B=this,k=Math.pow(3,V.LuminanceSteps);this.luminancePostProcess=new C.a("HDRLuminance","standard",["lumOffsets"],[],{width:k,height:k},null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define LUMINANCE",w);var Q=[];this.luminancePostProcess.onApply=function(Ae){var Ce=1/B.luminancePostProcess.width,Oe=1/B.luminancePostProcess.height;Q[0]=-.5*Ce,Q[1]=.5*Oe,Q[2]=.5*Ce,Q[3]=.5*Oe,Q[4]=-.5*Ce,Q[5]=-.5*Oe,Q[6]=.5*Ce,Q[7]=-.5*Oe,Ae.setArray2("lumOffsets",Q)},this.addEffect(new s.a(P.getEngine(),"HDRLuminance",function(){return B.luminancePostProcess},!0));for(var F=V.LuminanceSteps-1;F>=0;F--){var k=Math.pow(3,F),re=`#define LUMINANCE_DOWN_SAMPLE
`;F===0&&(re+="#define FINAL_DOWN_SAMPLER");var ve=new C.a("HDRLuminanceDownSample"+F,"standard",["dsOffsets","halfDestPixelSize"],[],{width:k,height:k},null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,re,w);this.luminanceDownSamplePostProcesses.push(ve)}var Se=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Ae,Ce){var Oe=new Array(18);Ae.onApply=function(Le){if(!!Se){for(var xe=0,Ie=-1;Ie<2;Ie++)for(var Me=-1;Me<2;Me++)Oe[xe]=Ie/Se.width,Oe[xe+1]=Me/Se.height,xe+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Se.width),Ce===B.luminanceDownSamplePostProcesses.length-1?Se=B.luminancePostProcess:Se=Ae}},Ce===B.luminanceDownSamplePostProcesses.length-1&&(Ae.onAfterRender=function(){var Le=P.getEngine().readPixels(0,0,1,1),xe=new I.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(Ie){var Me=new Uint8Array(Ie.buffer);B._hdrCurrentLuminance=(Me[0]*xe.x+Me[1]*xe.y+Me[2]*xe.z+Me[3]*xe.w)/100})}),B.addEffect(new s.a(P.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Ae},!0))})},V.prototype._createHdrPostProcess=function(P,w){var B=this,k=["#define HDR"];this._hdrAutoExposure&&k.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new C.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,k.join(`
`),0);var Q=1,F=0,re=0;this.hdrPostProcess.onApply=function(ve){if(ve.setTextureFromPostProcess("textureAdderSampler",B._currentDepthOfFieldSource),F+=P.getEngine().getDeltaTime(),Q<0)Q=B._hdrCurrentLuminance;else{var Se=(re-F)/1e3;B._hdrCurrentLuminance<Q+B.hdrDecreaseRate*Se?Q+=B.hdrDecreaseRate*Se:B._hdrCurrentLuminance>Q-B.hdrIncreaseRate*Se?Q-=B.hdrIncreaseRate*Se:Q=B._hdrCurrentLuminance}B.hdrAutoExposure?B._currentExposure=B._fixedExposure/Q:(Q=oe.a.Clamp(Q,B.hdrMinimumLuminance,1e20),ve.setFloat("averageLuminance",Q)),re=F,B._currentDepthOfFieldSource=B.hdrFinalPostProcess},this.addEffect(new s.a(P.getEngine(),"HDR",function(){return B.hdrPostProcess},!0))},V.prototype._createLensFlarePostProcess=function(P,w){var B=this;this.lensFlarePostProcess=new C.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],w/2,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new s.a(P.getEngine(),"HDRLensFlare",function(){return B.lensFlarePostProcess},!0)),this._createBlurPostProcesses(P,w/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new C.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new s.a(P.getEngine(),"HDRLensFlareCompose",function(){return B.lensFlareComposePostProcess},!0));var k=new I.d(0,0);this.lensFlarePostProcess.onApply=function(re){re.setTextureFromPostProcess("textureSampler",B._bloomEnabled?B.blurHPostProcesses[0]:B.originalPostProcess),re.setTexture("lensColorSampler",B.lensColorTexture),re.setFloat("strength",B.lensFlareStrength),re.setFloat("ghostDispersal",B.lensFlareGhostDispersal),re.setFloat("haloWidth",B.lensFlareHaloWidth),k.x=B.lensFlarePostProcess.width,k.y=B.lensFlarePostProcess.height,re.setVector2("resolution",k),re.setFloat("distortionStrength",B.lensFlareDistortionStrength)};var Q=I.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),F=I.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(re){if(!!B._scene.activeCamera){re.setTextureFromPostProcess("otherSampler",B.lensFlarePostProcess),re.setTexture("lensDirtSampler",B.lensFlareDirtTexture),re.setTexture("lensStarSampler",B.lensStarTexture);var ve=B._scene.activeCamera.getViewMatrix().getRow(0),Se=B._scene.activeCamera.getViewMatrix().getRow(2),Ae=I.e.Dot(ve.toVector3(),new I.e(1,0,0))+I.e.Dot(Se.toVector3(),new I.e(0,0,1));Ae*=4;var Ce=I.a.FromValues(Math.cos(Ae)*.5,-Math.sin(Ae),0,0,Math.sin(Ae),Math.cos(Ae)*.5,0,0,0,0,1,0,0,0,0,1),Oe=F.multiply(Ce).multiply(Q);re.setMatrix("lensStarMatrix",Oe),B._currentDepthOfFieldSource=B.lensFlareFinalPostProcess}}},V.prototype._createDepthOfFieldPostProcess=function(P,w){var B=this;this.depthOfFieldPostProcess=new C.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(k){k.setTextureFromPostProcess("otherSampler",B._currentDepthOfFieldSource),k.setTexture("depthSampler",B._getDepthTexture()),k.setFloat("distance",B.depthOfFieldDistance)},this.addEffect(new s.a(P.getEngine(),"HDRDepthOfField",function(){return B.depthOfFieldPostProcess},!0))},V.prototype._createMotionBlurPostProcess=function(P,w){var B=this;if(this._isObjectBasedMotionBlur){var k=new q.a("HDRMotionBlur",P,w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,0);k.motionStrength=this.motionStrength,k.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=k}else{this.motionBlurPostProcess=new C.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],w,null,h.a.BILINEAR_SAMPLINGMODE,P.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var Q=0,F=I.a.Identity(),re=I.a.Identity(),ve=I.a.Identity(),Se=I.d.Zero();this.motionBlurPostProcess.onApply=function(Ae){ve=P.getProjectionMatrix().multiply(P.getViewMatrix()),ve.invertToRef(re),Ae.setMatrix("inverseViewProjection",re),Ae.setMatrix("prevViewProjection",F),F=ve,Se.x=B.motionBlurPostProcess.width,Se.y=B.motionBlurPostProcess.height,Ae.setVector2("screenSize",Se),Q=P.getEngine().getFps()/60,Ae.setFloat("motionScale",Q),Ae.setFloat("motionStrength",B.motionStrength),Ae.setTexture("depthSampler",B._getDepthTexture())}}this.addEffect(new s.a(P.getEngine(),"HDRMotionBlur",function(){return B.motionBlurPostProcess},!0))},V.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var P=this._scene.enableGeometryBufferRenderer();return P.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},V.prototype._disposePostProcesses=function(){for(var P=0;P<this._cameras.length;P++){var w=this._cameras[P];this.originalPostProcess&&this.originalPostProcess.dispose(w),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(w),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(w),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(w),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(w),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(w),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(w),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(w),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(w),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(w),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(w),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(w);for(var B=0;B<this.luminanceDownSamplePostProcesses.length;B++)this.luminanceDownSamplePostProcesses[B].dispose(w);this.luminancePostProcess&&this.luminancePostProcess.dispose(w),this.hdrPostProcess&&this.hdrPostProcess.dispose(w),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(w),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(w),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(w),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(w);for(var B=0;B<this.blurHPostProcesses.length;B++)this.blurHPostProcesses[B].dispose(w);for(var B=0;B<this.blurVPostProcesses.length;B++)this.blurVPostProcesses[B].dispose(w)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},V.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),le.prototype.dispose.call(this)},V.prototype.serialize=function(){var P=o.a.Serialize(this);return this.sourceLight&&(P.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(P.screenSpaceReflectionPostProcess=o.a.Serialize(this.screenSpaceReflectionPostProcess)),P.customType="StandardRenderingPipeline",P},V.Parse=function(P,w,B){var k=o.a.Parse(function(){return new V(P._name,w,P._ratio)},P,w,B);return P.sourceLightId&&(k.sourceLight=w.getLightByID(P.sourceLightId)),P.screenSpaceReflectionPostProcess&&o.a.Parse(function(){return k.screenSpaceReflectionPostProcess},P.screenSpaceReflectionPostProcess,w,B),k},V.LuminanceSteps=6,Object(l.c)([Object(o.c)()],V.prototype,"brightThreshold",void 0),Object(l.c)([Object(o.c)()],V.prototype,"blurWidth",void 0),Object(l.c)([Object(o.c)()],V.prototype,"horizontalBlur",void 0),Object(l.c)([Object(o.c)()],V.prototype,"exposure",null),Object(l.c)([Object(o.m)("lensTexture")],V.prototype,"lensTexture",void 0),Object(l.c)([Object(o.c)()],V.prototype,"volumetricLightCoefficient",void 0),Object(l.c)([Object(o.c)()],V.prototype,"volumetricLightPower",void 0),Object(l.c)([Object(o.c)()],V.prototype,"volumetricLightBlurScale",void 0),Object(l.c)([Object(o.c)()],V.prototype,"hdrMinimumLuminance",void 0),Object(l.c)([Object(o.c)()],V.prototype,"hdrDecreaseRate",void 0),Object(l.c)([Object(o.c)()],V.prototype,"hdrIncreaseRate",void 0),Object(l.c)([Object(o.c)()],V.prototype,"hdrAutoExposure",null),Object(l.c)([Object(o.m)("lensColorTexture")],V.prototype,"lensColorTexture",void 0),Object(l.c)([Object(o.c)()],V.prototype,"lensFlareStrength",void 0),Object(l.c)([Object(o.c)()],V.prototype,"lensFlareGhostDispersal",void 0),Object(l.c)([Object(o.c)()],V.prototype,"lensFlareHaloWidth",void 0),Object(l.c)([Object(o.c)()],V.prototype,"lensFlareDistortionStrength",void 0),Object(l.c)([Object(o.c)()],V.prototype,"lensFlareBlurWidth",void 0),Object(l.c)([Object(o.m)("lensStarTexture")],V.prototype,"lensStarTexture",void 0),Object(l.c)([Object(o.m)("lensFlareDirtTexture")],V.prototype,"lensFlareDirtTexture",void 0),Object(l.c)([Object(o.c)()],V.prototype,"depthOfFieldDistance",void 0),Object(l.c)([Object(o.c)()],V.prototype,"depthOfFieldBlurWidth",void 0),Object(l.c)([Object(o.c)()],V.prototype,"motionStrength",null),Object(l.c)([Object(o.c)()],V.prototype,"objectBasedMotionBlur",null),Object(l.c)([Object(o.c)()],V.prototype,"_ratio",void 0),Object(l.c)([Object(o.c)()],V.prototype,"BloomEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"DepthOfFieldEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"LensFlareEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"HDREnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"VLSEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"MotionBlurEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"fxaaEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"screenSpaceReflectionsEnabled",null),Object(l.c)([Object(o.c)()],V.prototype,"volumetricLightStepsCount",null),Object(l.c)([Object(o.c)()],V.prototype,"motionBlurSamples",null),Object(l.c)([Object(o.c)()],V.prototype,"samples",null),V}(r.a);d.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=se;var me=a(548)},605:function(te,j,a){"use strict";var l=a(435),o="importanceSampling",y=`




























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
}`;l.a.IncludesShadersStore[o]=y;var O={name:o,shader:y}},606:function(te,j,a){"use strict";var l=a(435),o="pbrBRDFFunctions",y=`
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
`;l.a.IncludesShadersStore[o]=y;var O={name:o,shader:y}},607:function(te,j,a){"use strict";var l=a(435),o="hdrFilteringFunctions",y=`#ifdef NUM_SAMPLES
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
#endif`;l.a.IncludesShadersStore[o]=y;var O={name:o,shader:y}},625:function(te,j,a){"use strict";var l=a(435),o=a(457),y="rgbdDecodePixelShader",O=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;l.a.ShadersStore[y]=O;var h={name:y,shader:O}},626:function(te,j,a){"use strict";a.d(j,"a",function(){return D});var l=a(434),o=a(439),y=a(441),O=a(480),h=a(454),D=function(){function m(n){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=m._DefaultIndexOfRefraction,this.indexOfRefraction=m._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=y.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=n}return m.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},m.prototype.isReadyForSubMesh=function(n,e,t,i){return!(n._areTexturesDirty&&e.texturesEnabled&&(this._texture&&O.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&O.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||t.getCaps().standardDerivatives&&this._bumpTexture&&O.a.ClearCoatBumpTextureEnabled&&!i&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&O.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},m.prototype.prepareDefines=function(n,e){var t;this._isEnabled?(n.CLEARCOAT=!0,n.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,n.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((t=this._textureRoughness)===null||t===void 0?void 0:t._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),n.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,n._areTexturesDirty&&e.texturesEnabled&&(this._texture&&O.a.ClearCoatTextureEnabled?h.a.PrepareDefinesForMergedUV(this._texture,n,"CLEARCOAT_TEXTURE"):n.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&O.a.ClearCoatTextureEnabled?h.a.PrepareDefinesForMergedUV(this._textureRoughness,n,"CLEARCOAT_TEXTURE_ROUGHNESS"):n.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&O.a.ClearCoatBumpTextureEnabled?h.a.PrepareDefinesForMergedUV(this._bumpTexture,n,"CLEARCOAT_BUMP"):n.CLEARCOAT_BUMP=!1,n.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===m._DefaultIndexOfRefraction,this._isTintEnabled?(n.CLEARCOAT_TINT=!0,this._tintTexture&&O.a.ClearCoatTintTextureEnabled?h.a.PrepareDefinesForMergedUV(this._tintTexture,n,"CLEARCOAT_TINT_TEXTURE"):n.CLEARCOAT_TINT_TEXTURE=!1):(n.CLEARCOAT_TINT=!1,n.CLEARCOAT_TINT_TEXTURE=!1))):(n.CLEARCOAT=!1,n.CLEARCOAT_TEXTURE=!1,n.CLEARCOAT_TEXTURE_ROUGHNESS=!1,n.CLEARCOAT_BUMP=!1,n.CLEARCOAT_TINT=!1,n.CLEARCOAT_TINT_TEXTURE=!1,n.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,n.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},m.prototype.bindForSubMesh=function(n,e,t,i,r,s,f,v){var d,T,x,M,b,C,u,S,R=v._materialDefines,p=R.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!n.useUbo||!r||!n.isSync){p&&O.a.ClearCoatTextureEnabled?(n.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),h.a.BindTextureMatrix(this._texture,n,"clearCoat")):(this._texture||this._textureRoughness)&&O.a.ClearCoatTextureEnabled&&(n.updateFloat4("vClearCoatInfos",(T=(d=this._texture)===null||d===void 0?void 0:d.coordinatesIndex)!==null&&T!==void 0?T:0,(M=(x=this._texture)===null||x===void 0?void 0:x.level)!==null&&M!==void 0?M:0,(C=(b=this._textureRoughness)===null||b===void 0?void 0:b.coordinatesIndex)!==null&&C!==void 0?C:0,(S=(u=this._textureRoughness)===null||u===void 0?void 0:u.level)!==null&&S!==void 0?S:0),this._texture&&h.a.BindTextureMatrix(this._texture,n,"clearCoat"),this._textureRoughness&&!p&&!R.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&h.a.BindTextureMatrix(this._textureRoughness,n,"clearCoatRoughness")),this._bumpTexture&&t.getCaps().standardDerivatives&&O.a.ClearCoatTextureEnabled&&!i&&(n.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),h.a.BindTextureMatrix(this._bumpTexture,n,"clearCoatBump"),e._mirroredCameraPosition?n.updateFloat2("vClearCoatTangentSpaceParams",s?1:-1,f?1:-1):n.updateFloat2("vClearCoatTangentSpaceParams",s?-1:1,f?-1:1)),this._tintTexture&&O.a.ClearCoatTintTextureEnabled&&(n.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),h.a.BindTextureMatrix(this._tintTexture,n,"clearCoatTint")),n.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var c=1-this._indexOfRefraction,E=1+this._indexOfRefraction,A=Math.pow(-c/E,2),g=1/this._indexOfRefraction;n.updateFloat4("vClearCoatRefractionParams",A,g,c,E),this._isTintEnabled&&(n.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),n.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}e.texturesEnabled&&(this._texture&&O.a.ClearCoatTextureEnabled&&n.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!p&&!R.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&O.a.ClearCoatTextureEnabled&&n.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&t.getCaps().standardDerivatives&&O.a.ClearCoatBumpTextureEnabled&&!i&&n.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&O.a.ClearCoatTintTextureEnabled&&n.setTexture("clearCoatTintSampler",this._tintTexture))},m.prototype.hasTexture=function(n){return this._texture===n||this._textureRoughness===n||this._bumpTexture===n||this._tintTexture===n},m.prototype.getActiveTextures=function(n){this._texture&&n.push(this._texture),this._textureRoughness&&n.push(this._textureRoughness),this._bumpTexture&&n.push(this._bumpTexture),this._tintTexture&&n.push(this._tintTexture)},m.prototype.getAnimatables=function(n){this._texture&&this._texture.animations&&this._texture.animations.length>0&&n.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&n.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&n.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&n.push(this._tintTexture)},m.prototype.dispose=function(n){var e,t,i,r;n&&((e=this._texture)===null||e===void 0||e.dispose(),(t=this._textureRoughness)===null||t===void 0||t.dispose(),(i=this._bumpTexture)===null||i===void 0||i.dispose(),(r=this._tintTexture)===null||r===void 0||r.dispose())},m.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},m.AddFallbacks=function(n,e,t){return n.CLEARCOAT_BUMP&&e.addFallback(t++,"CLEARCOAT_BUMP"),n.CLEARCOAT_TINT&&e.addFallback(t++,"CLEARCOAT_TINT"),n.CLEARCOAT&&e.addFallback(t++,"CLEARCOAT"),t},m.AddUniforms=function(n){n.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},m.AddSamplers=function(n){n.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},m.PrepareUniformBuffer=function(n){n.addUniform("vClearCoatParams",2),n.addUniform("vClearCoatRefractionParams",4),n.addUniform("vClearCoatInfos",4),n.addUniform("clearCoatMatrix",16),n.addUniform("clearCoatRoughnessMatrix",16),n.addUniform("vClearCoatBumpInfos",2),n.addUniform("vClearCoatTangentSpaceParams",2),n.addUniform("clearCoatBumpMatrix",16),n.addUniform("vClearCoatTintParams",4),n.addUniform("clearCoatColorAtDistance",1),n.addUniform("vClearCoatTintInfos",2),n.addUniform("clearCoatTintMatrix",16)},m.prototype.copyTo=function(n){o.a.Clone(function(){return n},this)},m.prototype.serialize=function(){return o.a.Serialize(this)},m.prototype.parse=function(n,e,t){var i=this;o.a.Parse(function(){return i},n,e,t)},m._DefaultIndexOfRefraction=1.5,Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"isEnabled",void 0),Object(l.c)([Object(o.c)()],m.prototype,"intensity",void 0),Object(l.c)([Object(o.c)()],m.prototype,"roughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"texture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"textureRoughness",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"remapF0OnInterfaceChange",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"bumpTexture",void 0),Object(l.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"isTintEnabled",void 0),Object(l.c)([Object(o.e)()],m.prototype,"tintColor",void 0),Object(l.c)([Object(o.c)()],m.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(o.c)()],m.prototype,"tintThickness",void 0),Object(l.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],m.prototype,"tintTexture",void 0),m}()},627:function(te,j,a){"use strict";var l=a(435),o="subSurfaceScatteringFunctions",y=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;l.a.IncludesShadersStore[o]=y;var O={name:o,shader:y}},628:function(te,j,a){"use strict";a.d(j,"a",function(){return M});var l=a(434),o=a(436),y=a(458),O=a(679),h=a(680),D=a(676),m=a(476),n=a(541),e=a(536),t=a(629),i=a(440),r=a(448),s=o.e.Up(),f=o.e.Zero(),v=new o.e,d=new o.e,T=new o.a,x=new o.a,M=function(b){Object(l.d)(C,b);function C(u,S,R){var p=this;if(!C.IsSupported){i.a.Error("CascadedShadowMap is not supported by the current engine.");return}return p=b.call(this,u,S,R)||this,p.usePercentageCloserFiltering=!0,p}return C.prototype._validateFilter=function(u){return u===n.a.FILTER_NONE||u===n.a.FILTER_PCF||u===n.a.FILTER_PCSS?u:(console.error('Unsupported filter "'+u+'"!'),n.a.FILTER_NONE)},Object.defineProperty(C.prototype,"numCascades",{get:function(){return this._numCascades},set:function(u){u=Math.min(Math.max(u,C.MIN_CASCADES_COUNT),C.MAX_CASCADES_COUNT),u!==this._numCascades&&(this._numCascades=u,this.recreateShadowMap())},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"freezeShadowCastersBoundingInfo",{get:function(){return this._freezeShadowCastersBoundingInfo},set:function(u){this._freezeShadowCastersBoundingInfoObservable&&u&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),!this._freezeShadowCastersBoundingInfoObservable&&!u&&(this._freezeShadowCastersBoundingInfoObservable=this._scene.onBeforeRenderObservable.add(this._computeShadowCastersBoundingInfo.bind(this))),this._freezeShadowCastersBoundingInfo=u,u&&this._computeShadowCastersBoundingInfo()},enumerable:!1,configurable:!0}),C.prototype._computeShadowCastersBoundingInfo=function(){if(this._scbiMin.copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._scbiMax.copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._shadowMap&&this._shadowMap.renderList){for(var u=this._shadowMap.renderList,S=0;S<u.length;S++){var R=u[S];if(!!R){var p=R.getBoundingInfo(),c=p.boundingBox;this._scbiMin.minimizeInPlace(c.minimumWorld),this._scbiMax.maximizeInPlace(c.maximumWorld)}}for(var E=this._scene.meshes,S=0;S<E.length;S++){var R=E[S];if(!(!R||!R.isVisible||!R.isEnabled||!R.receiveShadows)){var p=R.getBoundingInfo(),c=p.boundingBox;this._scbiMin.minimizeInPlace(c.minimumWorld),this._scbiMax.maximizeInPlace(c.maximumWorld)}}}this._shadowCastersBoundingInfo.reConstruct(this._scbiMin,this._scbiMax)},Object.defineProperty(C.prototype,"shadowCastersBoundingInfo",{get:function(){return this._shadowCastersBoundingInfo},set:function(u){this._shadowCastersBoundingInfo=u},enumerable:!1,configurable:!0}),C.prototype.setMinMaxDistance=function(u,S){this._minDistance===u&&this._maxDistance===S||(u>S&&(u=0,S=1),u<0&&(u=0),S>1&&(S=1),this._minDistance=u,this._maxDistance=S,this._breaksAreDirty=!0)},Object.defineProperty(C.prototype,"minDistance",{get:function(){return this._minDistance},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"maxDistance",{get:function(){return this._maxDistance},enumerable:!1,configurable:!0}),C.prototype.getClassName=function(){return C.CLASSNAME},C.prototype.getCascadeMinExtents=function(u){return u>=0&&u<this._numCascades?this._cascadeMinExtents[u]:null},C.prototype.getCascadeMaxExtents=function(u){return u>=0&&u<this._numCascades?this._cascadeMaxExtents[u]:null},Object.defineProperty(C.prototype,"shadowMaxZ",{get:function(){return!this._scene||!this._scene.activeCamera?0:this._shadowMaxZ},set:function(u){if(!this._scene||!this._scene.activeCamera){this._shadowMaxZ=u;return}this._shadowMaxZ===u||u<this._scene.activeCamera.minZ||u>this._scene.activeCamera.maxZ||(this._shadowMaxZ=u,this._light._markMeshesAsLightDirty(),this._breaksAreDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"debug",{get:function(){return this._debug},set:function(u){this._debug=u,this._light._markMeshesAsLightDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"depthClamp",{get:function(){return this._depthClamp},set:function(u){this._depthClamp=u},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"cascadeBlendPercentage",{get:function(){return this._cascadeBlendPercentage},set:function(u){this._cascadeBlendPercentage=u,this._light._markMeshesAsLightDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"lambda",{get:function(){return this._lambda},set:function(u){var S=Math.min(Math.max(u,0),1);this._lambda!=S&&(this._lambda=S,this._breaksAreDirty=!0)},enumerable:!1,configurable:!0}),C.prototype.getCascadeViewMatrix=function(u){return u>=0&&u<this._numCascades?this._viewMatrices[u]:null},C.prototype.getCascadeProjectionMatrix=function(u){return u>=0&&u<this._numCascades?this._projectionMatrices[u]:null},C.prototype.getCascadeTransformMatrix=function(u){return u>=0&&u<this._numCascades?this._transformMatrices[u]:null},C.prototype.setDepthRenderer=function(u){this._depthRenderer=u,this._depthReducer&&this._depthReducer.setDepthRenderer(this._depthRenderer)},Object.defineProperty(C.prototype,"autoCalcDepthBounds",{get:function(){return this._autoCalcDepthBounds},set:function(u){var S=this,R=this._scene.activeCamera;if(!!R){if(this._autoCalcDepthBounds=u,!u){this._depthReducer&&this._depthReducer.deactivate(),this.setMinMaxDistance(0,1);return}this._depthReducer||(this._depthReducer=new t.a(R),this._depthReducer.onAfterReductionPerformed.add(function(p){var c=p.min,E=p.max;c>=E&&(c=0,E=1),(c!=S._minDistance||E!=S._maxDistance)&&S.setMinMaxDistance(c,E)}),this._depthReducer.setDepthRenderer(this._depthRenderer)),this._depthReducer.activate()}},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"autoCalcDepthBoundsRefreshRate",{get:function(){var u,S,R;return(R=(S=(u=this._depthReducer)===null||u===void 0?void 0:u.depthRenderer)===null||S===void 0?void 0:S.getDepthMap().refreshRate)!==null&&R!==void 0?R:-1},set:function(u){var S;((S=this._depthReducer)===null||S===void 0?void 0:S.depthRenderer)&&(this._depthReducer.depthRenderer.getDepthMap().refreshRate=u)},enumerable:!1,configurable:!0}),C.prototype.splitFrustum=function(){this._breaksAreDirty=!0},C.prototype._splitFrustum=function(){var u=this._scene.activeCamera;if(!!u){for(var S=u.minZ,R=u.maxZ,p=R-S,c=this._minDistance,E=this._shadowMaxZ<R&&this._shadowMaxZ>=S?Math.min((this._shadowMaxZ-S)/(R-S),this._maxDistance):this._maxDistance,A=S+c*p,g=S+E*p,H=g-A,U=g/A,I=0;I<this._cascades.length;++I){var W=(I+1)/this._numCascades,Y=A*Math.pow(U,W),$=A+H*W,G=this._lambda*(Y-$)+$;this._cascades[I].prevBreakDistance=I===0?c:this._cascades[I-1].breakDistance,this._cascades[I].breakDistance=(G-S)/p,this._viewSpaceFrustumsZ[I]=S+this._cascades[I].breakDistance*p,this._frustumLengths[I]=(this._cascades[I].breakDistance-this._cascades[I].prevBreakDistance)*p}this._breaksAreDirty=!1}},C.prototype._computeMatrices=function(){var u=this._scene,S=u.activeCamera;if(!!S){o.e.NormalizeToRef(this._light.getShadowDirection(0),this._lightDirection),Math.abs(o.e.Dot(this._lightDirection,o.e.Up()))===1&&(this._lightDirection.z=1e-13),this._cachedDirection.copyFrom(this._lightDirection);for(var R=0;R<this._numCascades;++R){this._computeFrustumInWorldSpace(R),this._computeCascadeFrustum(R),this._cascadeMaxExtents[R].subtractToRef(this._cascadeMinExtents[R],v),this._frustumCenter[R].addToRef(this._lightDirection.scale(this._cascadeMinExtents[R].z),this._shadowCameraPos[R]),o.a.LookAtLHToRef(this._shadowCameraPos[R],this._frustumCenter[R],s,this._viewMatrices[R]);var p=0,c=v.z,E=this._shadowCastersBoundingInfo;E.update(this._viewMatrices[R]),c=Math.min(c,E.boundingBox.maximumWorld.z),!this._depthClamp||this.filter===n.a.FILTER_PCSS?p=Math.min(p,E.boundingBox.minimumWorld.z):p=Math.max(p,E.boundingBox.minimumWorld.z),o.a.OrthoOffCenterLHToRef(this._cascadeMinExtents[R].x,this._cascadeMaxExtents[R].x,this._cascadeMinExtents[R].y,this._cascadeMaxExtents[R].y,p,c,this._projectionMatrices[R]),this._cascadeMinExtents[R].z=p,this._cascadeMaxExtents[R].z=c,this._viewMatrices[R].multiplyToRef(this._projectionMatrices[R],this._transformMatrices[R]),o.e.TransformCoordinatesToRef(f,this._transformMatrices[R],v),v.scaleInPlace(this._mapSize/2),d.copyFromFloats(Math.round(v.x),Math.round(v.y),Math.round(v.z)),d.subtractInPlace(v).scaleInPlace(2/this._mapSize),o.a.TranslationToRef(d.x,d.y,0,T),this._projectionMatrices[R].multiplyToRef(T,this._projectionMatrices[R]),this._viewMatrices[R].multiplyToRef(this._projectionMatrices[R],this._transformMatrices[R]),this._transformMatrices[R].copyToArray(this._transformMatricesAsArray,R*16)}}},C.prototype._computeFrustumInWorldSpace=function(u){if(!!this._scene.activeCamera){var S=this._cascades[u].prevBreakDistance,R=this._cascades[u].breakDistance;this._scene.activeCamera.getViewMatrix();for(var p=o.a.Invert(this._scene.activeCamera.getTransformationMatrix()),c=0;c<C.frustumCornersNDCSpace.length;++c)o.e.TransformCoordinatesToRef(C.frustumCornersNDCSpace[c],p,this._frustumCornersWorldSpace[u][c]);for(var c=0;c<C.frustumCornersNDCSpace.length/2;++c)v.copyFrom(this._frustumCornersWorldSpace[u][c+4]).subtractInPlace(this._frustumCornersWorldSpace[u][c]),d.copyFrom(v).scaleInPlace(S),v.scaleInPlace(R),v.addInPlace(this._frustumCornersWorldSpace[u][c]),this._frustumCornersWorldSpace[u][c+4].copyFrom(v),this._frustumCornersWorldSpace[u][c].addInPlace(d)}},C.prototype._computeCascadeFrustum=function(u){this._cascadeMinExtents[u].copyFromFloats(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cascadeMaxExtents[u].copyFromFloats(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),this._frustumCenter[u].copyFromFloats(0,0,0);var S=this._scene.activeCamera;if(!!S){for(var R=0;R<this._frustumCornersWorldSpace[u].length;++R)this._frustumCenter[u].addInPlace(this._frustumCornersWorldSpace[u][R]);if(this._frustumCenter[u].scaleInPlace(1/this._frustumCornersWorldSpace[u].length),this.stabilizeCascades){for(var p=0,R=0;R<this._frustumCornersWorldSpace[u].length;++R){var c=this._frustumCornersWorldSpace[u][R].subtractToRef(this._frustumCenter[u],v).length();p=Math.max(p,c)}p=Math.ceil(p*16)/16,this._cascadeMaxExtents[u].copyFromFloats(p,p,p),this._cascadeMinExtents[u].copyFromFloats(-p,-p,-p)}else{var E=this._frustumCenter[u];this._frustumCenter[u].addToRef(this._lightDirection,v),o.a.LookAtLHToRef(E,v,s,T);for(var R=0;R<this._frustumCornersWorldSpace[u].length;++R)o.e.TransformCoordinatesToRef(this._frustumCornersWorldSpace[u][R],T,v),this._cascadeMinExtents[u].minimizeInPlace(v),this._cascadeMaxExtents[u].maximizeInPlace(v)}}},Object.defineProperty(C,"IsSupported",{get:function(){var u=r.a.LastCreatedEngine;return u?u._features.supportCSM:!1},enumerable:!1,configurable:!0}),C.prototype._initializeGenerator=function(){var u,S,R,p,c,E,A,g,H,U,I,W,Y,$,G,J,ne,ee,oe,q;this.penumbraDarkness=(u=this.penumbraDarkness)!==null&&u!==void 0?u:1,this._numCascades=(S=this._numCascades)!==null&&S!==void 0?S:C.DEFAULT_CASCADES_COUNT,this.stabilizeCascades=(R=this.stabilizeCascades)!==null&&R!==void 0?R:!1,this._freezeShadowCastersBoundingInfoObservable=(p=this._freezeShadowCastersBoundingInfoObservable)!==null&&p!==void 0?p:null,this.freezeShadowCastersBoundingInfo=(c=this.freezeShadowCastersBoundingInfo)!==null&&c!==void 0?c:!1,this._scbiMin=(E=this._scbiMin)!==null&&E!==void 0?E:new o.e(0,0,0),this._scbiMax=(A=this._scbiMax)!==null&&A!==void 0?A:new o.e(0,0,0),this._shadowCastersBoundingInfo=(g=this._shadowCastersBoundingInfo)!==null&&g!==void 0?g:new e.a(new o.e(0,0,0),new o.e(0,0,0)),this._breaksAreDirty=(H=this._breaksAreDirty)!==null&&H!==void 0?H:!0,this._minDistance=(U=this._minDistance)!==null&&U!==void 0?U:0,this._maxDistance=(I=this._maxDistance)!==null&&I!==void 0?I:1,this._currentLayer=(W=this._currentLayer)!==null&&W!==void 0?W:0,this._shadowMaxZ=(G=(Y=this._shadowMaxZ)!==null&&Y!==void 0?Y:($=this._scene.activeCamera)===null||$===void 0?void 0:$.maxZ)!==null&&G!==void 0?G:1e4,this._debug=(J=this._debug)!==null&&J!==void 0?J:!1,this._depthClamp=(ne=this._depthClamp)!==null&&ne!==void 0?ne:!0,this._cascadeBlendPercentage=(ee=this._cascadeBlendPercentage)!==null&&ee!==void 0?ee:.1,this._lambda=(oe=this._lambda)!==null&&oe!==void 0?oe:.5,this._autoCalcDepthBounds=(q=this._autoCalcDepthBounds)!==null&&q!==void 0?q:!1,b.prototype._initializeGenerator.call(this)},C.prototype._createTargetRenderTexture=function(){var u={width:this._mapSize,height:this._mapSize,layers:this.numCascades};this._shadowMap=new y.a(this._light.name+"_shadowMap",u,this._scene,!1,!0,this._textureType,!1,void 0,!1,!1,void 0),this._shadowMap.createDepthStencilTexture(513,!0)},C.prototype._initializeShadowMap=function(){var u=this;if(b.prototype._initializeShadowMap.call(this),this._shadowMap!==null){this._transformMatricesAsArray=new Float32Array(this._numCascades*16),this._viewSpaceFrustumsZ=new Array(this._numCascades),this._frustumLengths=new Array(this._numCascades),this._lightSizeUVCorrection=new Array(this._numCascades*2),this._depthCorrection=new Array(this._numCascades),this._cascades=[],this._viewMatrices=[],this._projectionMatrices=[],this._transformMatrices=[],this._cascadeMinExtents=[],this._cascadeMaxExtents=[],this._frustumCenter=[],this._shadowCameraPos=[],this._frustumCornersWorldSpace=[];for(var S=0;S<this._numCascades;++S){this._cascades[S]={prevBreakDistance:0,breakDistance:0},this._viewMatrices[S]=o.a.Zero(),this._projectionMatrices[S]=o.a.Zero(),this._transformMatrices[S]=o.a.Zero(),this._cascadeMinExtents[S]=new o.e,this._cascadeMaxExtents[S]=new o.e,this._frustumCenter[S]=new o.e,this._shadowCameraPos[S]=new o.e,this._frustumCornersWorldSpace[S]=new Array(C.frustumCornersNDCSpace.length);for(var R=0;R<C.frustumCornersNDCSpace.length;++R)this._frustumCornersWorldSpace[S][R]=new o.e}var p=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.clear(),this._shadowMap.onBeforeRenderObservable.clear(),this._shadowMap.onBeforeRenderObservable.add(function(c){u._currentLayer=c,u._filter===n.a.FILTER_PCF&&p.setColorWrite(!1),u._scene.setTransformMatrix(u.getCascadeViewMatrix(c),u.getCascadeProjectionMatrix(c))}),this._shadowMap.onBeforeBindObservable.add(function(){p._debugPushGroup("cascaded shadow map generation for "+u._nameForCustomEffect,1),u._breaksAreDirty&&u._splitFrustum(),u._computeMatrices()}),this._splitFrustum()}},C.prototype._bindCustomEffectForRenderSubMeshForShadowMap=function(u,S,R,p){var c,E,A,g,H,U;S.setMatrix((c=R==null?void 0:R.viewProjection)!==null&&c!==void 0?c:"viewProjection",this.getCascadeTransformMatrix(this._currentLayer)),S.setMatrix((E=R==null?void 0:R.view)!==null&&E!==void 0?E:"view",this.getCascadeViewMatrix(this._currentLayer)),S.setMatrix((A=R==null?void 0:R.projection)!==null&&A!==void 0?A:"projection",this.getCascadeProjectionMatrix(this._currentLayer));var I=p.getWorldMatrix();S.setMatrix((g=R==null?void 0:R.world)!==null&&g!==void 0?g:"world",I),I.multiplyToRef(this.getCascadeTransformMatrix(this._currentLayer),T),S.setMatrix((H=R==null?void 0:R.worldViewProjection)!==null&&H!==void 0?H:"worldViewProjection",T),I.multiplyToRef(this.getCascadeViewMatrix(this._currentLayer),x),S.setMatrix((U=R==null?void 0:R.worldView)!==null&&U!==void 0?U:"worldView",x)},C.prototype._isReadyCustomDefines=function(u,S,R){u.push("#define SM_DEPTHCLAMP "+(this._depthClamp&&this._filter!==n.a.FILTER_PCSS?"1":"0"))},C.prototype.prepareDefines=function(u,S){b.prototype.prepareDefines.call(this,u,S);var R=this._scene,p=this._light;if(!(!R.shadowsEnabled||!p.shadowEnabled)){u["SHADOWCSM"+S]=!0,u["SHADOWCSMDEBUG"+S]=this.debug,u["SHADOWCSMNUM_CASCADES"+S]=this.numCascades,u["SHADOWCSM_RIGHTHANDED"+S]=R.useRightHandedSystem;var c=R.activeCamera;c&&this._shadowMaxZ<c.maxZ&&(u["SHADOWCSMUSESHADOWMAXZ"+S]=!0),this.cascadeBlendPercentage===0&&(u["SHADOWCSMNOBLEND"+S]=!0)}},C.prototype.bindShadowLight=function(u,S){var R=this._light,p=this._scene;if(!(!p.shadowsEnabled||!R.shadowEnabled)){var c=p.activeCamera;if(!!c){var E=this.getShadowMap();if(!!E){var A=E.getSize().width;if(S.setMatrices("lightMatrix"+u,this._transformMatricesAsArray),S.setArray("viewFrustumZ"+u,this._viewSpaceFrustumsZ),S.setFloat("cascadeBlendFactor"+u,this.cascadeBlendPercentage===0?1e4:1/this.cascadeBlendPercentage),S.setArray("frustumLengths"+u,this._frustumLengths),this._filter===n.a.FILTER_PCF)S.setDepthStencilTexture("shadowSampler"+u,E),R._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),A,1/A,this.frustumEdgeFalloff,u);else if(this._filter===n.a.FILTER_PCSS){for(var g=0;g<this._numCascades;++g)this._lightSizeUVCorrection[g*2+0]=g===0?1:(this._cascadeMaxExtents[0].x-this._cascadeMinExtents[0].x)/(this._cascadeMaxExtents[g].x-this._cascadeMinExtents[g].x),this._lightSizeUVCorrection[g*2+1]=g===0?1:(this._cascadeMaxExtents[0].y-this._cascadeMinExtents[0].y)/(this._cascadeMaxExtents[g].y-this._cascadeMinExtents[g].y),this._depthCorrection[g]=g===0?1:(this._cascadeMaxExtents[g].z-this._cascadeMinExtents[g].z)/(this._cascadeMaxExtents[0].z-this._cascadeMinExtents[0].z);S.setDepthStencilTexture("shadowSampler"+u,E),S.setTexture("depthSampler"+u,E),S.setArray2("lightSizeUVCorrection"+u,this._lightSizeUVCorrection),S.setArray("depthCorrection"+u,this._depthCorrection),S.setFloat("penumbraDarkness"+u,this.penumbraDarkness),R._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),1/A,this._contactHardeningLightSizeUVRatio*A,this.frustumEdgeFalloff,u)}else S.setTexture("shadowSampler"+u,E),R._uniformBuffer.updateFloat4("shadowsInfo",this.getDarkness(),A,1/A,this.frustumEdgeFalloff,u);R._uniformBuffer.updateFloat2("depthValues",this.getLight().getDepthMinZ(c),this.getLight().getDepthMinZ(c)+this.getLight().getDepthMaxZ(c),u)}}}},C.prototype.getTransformMatrix=function(){return this.getCascadeTransformMatrix(0)},C.prototype.dispose=function(){b.prototype.dispose.call(this),this._freezeShadowCastersBoundingInfoObservable&&(this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable),this._freezeShadowCastersBoundingInfoObservable=null),this._depthReducer&&(this._depthReducer.dispose(),this._depthReducer=null)},C.prototype.serialize=function(){var u=b.prototype.serialize.call(this),S=this.getShadowMap();if(!S)return u;if(u.numCascades=this._numCascades,u.debug=this._debug,u.stabilizeCascades=this.stabilizeCascades,u.lambda=this._lambda,u.cascadeBlendPercentage=this.cascadeBlendPercentage,u.depthClamp=this._depthClamp,u.autoCalcDepthBounds=this.autoCalcDepthBounds,u.shadowMaxZ=this._shadowMaxZ,u.penumbraDarkness=this.penumbraDarkness,u.freezeShadowCastersBoundingInfo=this._freezeShadowCastersBoundingInfo,u.minDistance=this.minDistance,u.maxDistance=this.maxDistance,u.renderList=[],S.renderList)for(var R=0;R<S.renderList.length;R++){var p=S.renderList[R];u.renderList.push(p.id)}return u},C.Parse=function(u,S){var R=n.a.Parse(u,S,function(p,c){return new C(p,c)});return u.numCascades!==void 0&&(R.numCascades=u.numCascades),u.debug!==void 0&&(R.debug=u.debug),u.stabilizeCascades!==void 0&&(R.stabilizeCascades=u.stabilizeCascades),u.lambda!==void 0&&(R.lambda=u.lambda),u.cascadeBlendPercentage!==void 0&&(R.cascadeBlendPercentage=u.cascadeBlendPercentage),u.depthClamp!==void 0&&(R.depthClamp=u.depthClamp),u.autoCalcDepthBounds!==void 0&&(R.autoCalcDepthBounds=u.autoCalcDepthBounds),u.shadowMaxZ!==void 0&&(R.shadowMaxZ=u.shadowMaxZ),u.penumbraDarkness!==void 0&&(R.penumbraDarkness=u.penumbraDarkness),u.freezeShadowCastersBoundingInfo!==void 0&&(R.freezeShadowCastersBoundingInfo=u.freezeShadowCastersBoundingInfo),u.minDistance!==void 0&&u.maxDistance!==void 0&&R.setMinMaxDistance(u.minDistance,u.maxDistance),R},C.frustumCornersNDCSpace=[new o.e(-1,1,-1),new o.e(1,1,-1),new o.e(1,-1,-1),new o.e(-1,-1,-1),new o.e(-1,1,1),new o.e(1,1,1),new o.e(1,-1,1),new o.e(-1,-1,1)],C.CLASSNAME="CascadedShadowGenerator",C.DEFAULT_CASCADES_COUNT=4,C.MIN_CASCADES_COUNT=2,C.MAX_CASCADES_COUNT=4,C._SceneComponentInitialization=function(u){throw m.a.WarnImport("ShadowGeneratorSceneComponent")},C}(n.a)},629:function(te,j,a){"use strict";a.d(j,"a",function(){return O});var l=a(434),o=a(556),y=a(638),O=function(h){Object(l.d)(D,h);function D(m){return h.call(this,m)||this}return Object.defineProperty(D.prototype,"depthRenderer",{get:function(){return this._depthRenderer},enumerable:!1,configurable:!0}),D.prototype.setDepthRenderer=function(m,n,e){m===void 0&&(m=null),n===void 0&&(n=2),e===void 0&&(e=!0);var t=this._camera.getScene();this._depthRenderer&&(delete t._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null),m===null&&(t._depthRenderer||(t._depthRenderer={}),m=this._depthRenderer=new o.a(t,n,this._camera,!1),m.enabled=!1,this._depthRendererId="minmax"+this._camera.id,t._depthRenderer[this._depthRendererId]=m),h.prototype.setSourceTexture.call(this,m.getDepthMap(),!0,n,e)},D.prototype.setSourceTexture=function(m,n,e,t){e===void 0&&(e=2),t===void 0&&(t=!0),h.prototype.setSourceTexture.call(this,m,n,e,t)},D.prototype.activate=function(){this._depthRenderer&&(this._depthRenderer.enabled=!0),h.prototype.activate.call(this)},D.prototype.deactivate=function(){h.prototype.deactivate.call(this),this._depthRenderer&&(this._depthRenderer.enabled=!1)},D.prototype.dispose=function(m){if(m===void 0&&(m=!0),h.prototype.dispose.call(this,m),this._depthRenderer&&m){var n=this._depthRenderer.getDepthMap().getScene();n&&delete n._depthRenderer[this._depthRendererId],this._depthRenderer.dispose(),this._depthRenderer=null}},D}(y.a)},638:function(te,j,a){"use strict";a.d(j,"a",function(){return n});var l=a(444),o=a(590),y=a(438),O=a(435),h="minmaxReduxPixelShader",D=`varying vec2 vUV;
uniform sampler2D textureSampler;
#if defined(INITIAL)
uniform sampler2D sourceTexture;
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
float f1=texelFetch(sourceTexture,coord,0).r;
float f2=texelFetch(sourceTexture,coord+ivec2(1,0),0).r;
float f3=texelFetch(sourceTexture,coord+ivec2(1,1),0).r;
float f4=texelFetch(sourceTexture,coord+ivec2(0,1),0).r;
float minz=min(min(min(f1,f2),f3),f4);
#ifdef DEPTH_REDUX
float maxz=max(max(max(sign(1.0-f1)*f1,sign(1.0-f2)*f2),sign(1.0-f3)*f3),sign(1.0-f4)*f4);
#else
float maxz=max(max(max(f1,f2),f3),f4);
#endif
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(MAIN)
uniform vec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*(texSize-1.0));
vec2 f1=texelFetch(textureSampler,coord,0).rg;
vec2 f2=texelFetch(textureSampler,coord+ivec2(1,0),0).rg;
vec2 f3=texelFetch(textureSampler,coord+ivec2(1,1),0).rg;
vec2 f4=texelFetch(textureSampler,coord+ivec2(0,1),0).rg;
float minz=min(min(min(f1.x,f2.x),f3.x),f4.x);
float maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(ONEBEFORELAST)
uniform ivec2 texSize;
void main(void)
{
ivec2 coord=ivec2(vUV*vec2(texSize-1));
vec2 f1=texelFetch(textureSampler,coord % texSize,0).rg;
vec2 f2=texelFetch(textureSampler,(coord+ivec2(1,0)) % texSize,0).rg;
vec2 f3=texelFetch(textureSampler,(coord+ivec2(1,1)) % texSize,0).rg;
vec2 f4=texelFetch(textureSampler,(coord+ivec2(0,1)) % texSize,0).rg;
float minz=min(f1.x,f2.x);
float maxz=max(f1.y,f2.y);
glFragColor=vec4(minz,maxz,0.,0.);
}
#elif defined(LAST)
void main(void)
{
discard;
glFragColor=vec4(0.);
}
#endif
`;O.a.ShadersStore[h]=D;var m={name:h,shader:D},n=function(){function e(t){this.onAfterReductionPerformed=new y.c,this._forceFullscreenViewport=!0,this._activated=!1,this._camera=t,this._postProcessManager=new o.a(t.getScene())}return Object.defineProperty(e.prototype,"sourceTexture",{get:function(){return this._sourceTexture},enumerable:!1,configurable:!0}),e.prototype.setSourceTexture=function(t,i,r,s){var f=this;if(r===void 0&&(r=2),s===void 0&&(s=!0),t!==this._sourceTexture){this.dispose(!1),this._sourceTexture=t,this._reductionSteps=[],this._forceFullscreenViewport=s;var v=this._camera.getScene(),d=new l.a("Initial reduction phase","minmaxRedux",["texSize"],["sourceTexture"],1,null,1,v.getEngine(),!1,"#define INITIAL"+(i?`
#define DEPTH_REDUX`:""),r,void 0,void 0,void 0,7);d.autoClear=!1,d.forceFullscreenViewport=s;var T=this._sourceTexture.getRenderWidth(),x=this._sourceTexture.getRenderHeight();d.onApply=function(u,S){return function(R){R.setTexture("sourceTexture",f._sourceTexture),R.setFloat2("texSize",u,S)}}(T,x),this._reductionSteps.push(d);for(var M=1;T>1||x>1;){T=Math.max(Math.round(T/2),1),x=Math.max(Math.round(x/2),1);var b=new l.a("Reduction phase "+M,"minmaxRedux",["texSize"],null,{width:T,height:x},null,1,v.getEngine(),!1,"#define "+(T==1&&x==1?"LAST":T==1||x==1?"ONEBEFORELAST":"MAIN"),r,void 0,void 0,void 0,7);if(b.autoClear=!1,b.forceFullscreenViewport=s,b.onApply=function(u,S){return function(R){u==1||S==1?R.setInt2("texSize",u,S):R.setFloat2("texSize",u,S)}}(T,x),this._reductionSteps.push(b),M++,T==1&&x==1){var C=function(u,S,R){var p=new Float32Array(4*u*S),c={min:0,max:0};return function(){v.getEngine()._readTexturePixels(R.inputTexture,u,S,-1,0,p,!1),c.min=p[0],c.max=p[1],f.onAfterReductionPerformed.notifyObservers(c)}};b.onAfterRenderObservable.add(C(T,x,b))}}}},Object.defineProperty(e.prototype,"refreshRate",{get:function(){return this._sourceTexture?this._sourceTexture.refreshRate:-1},set:function(t){this._sourceTexture&&(this._sourceTexture.refreshRate=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activated",{get:function(){return this._activated},enumerable:!1,configurable:!0}),e.prototype.activate=function(){var t=this;this._onAfterUnbindObserver||!this._sourceTexture||(this._onAfterUnbindObserver=this._sourceTexture.onAfterUnbindObservable.add(function(){var i=t._camera.getScene().getEngine();i._debugPushGroup("min max reduction",1),t._reductionSteps[0].activate(t._camera),t._postProcessManager.directRender(t._reductionSteps,t._reductionSteps[0].inputTexture,t._forceFullscreenViewport),i.unBindFramebuffer(t._reductionSteps[0].inputTexture,!1),i._debugPopGroup(1)}),this._activated=!0)},e.prototype.deactivate=function(){!this._onAfterUnbindObserver||!this._sourceTexture||(this._sourceTexture.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=null,this._activated=!1)},e.prototype.dispose=function(t){if(t===void 0&&(t=!0),t&&this.onAfterReductionPerformed.clear(),this.deactivate(),this._reductionSteps){for(var i=0;i<this._reductionSteps.length;++i)this._reductionSteps[i].dispose();this._reductionSteps=null}this._postProcessManager&&t&&this._postProcessManager.dispose(),this._sourceTexture=null},e}()},644:function(te,j,a){"use strict";var l=a(435),o=a(524),y=a(457),O=a(525),h="imageProcessingPixelShader",D=`
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
}`;l.a.ShadersStore[h]=D;var m={name:h,shader:D}},646:function(te,j,a){"use strict";var l=a(435),o="glowMapMergePixelShader",y=`
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
}`;l.a.ShadersStore[o]=y;var O={name:o,shader:y}},647:function(te,j,a){"use strict";var l=a(435),o="glowMapMergeVertexShader",y=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;l.a.ShadersStore[o]=y;var O={name:o,shader:y}},664:function(te,j,a){"use strict";var l=a(435),o=a(487),y=a(496),O=a(497),h=a(501),D=a(507),m=a(508),n=a(488),e=a(489),t="depthVertexShader",i=`
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
`;l.a.ShadersStore[t]=i;var r={name:t,shader:i}},676:function(te,j,a){"use strict";var l=a(435),o="depthBoxBlurPixelShader",y=`
varying vec2 vUV;
uniform sampler2D textureSampler;

uniform vec2 screenSize;
void main(void)
{
vec4 colorDepth=vec4(0.0);
for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);
gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));
}`;l.a.ShadersStore[o]=y;var O={name:o,shader:y}},679:function(te,j,a){"use strict";var l=a(435),o=a(535),y="bayerDitherFunctions",O=`




float bayerDither2(vec2 _P) {
return mod(2.0*_P.y+_P.x+1.0,4.0);
}


float bayerDither4(vec2 _P) {
vec2 P1=mod(_P,2.0);
vec2 P2=floor(0.5*mod(_P,4.0));
return 4.0*bayerDither2(P1)+bayerDither2(P2);
}

float bayerDither8(vec2 _P) {
vec2 P1=mod(_P,2.0);
vec2 P2=floor(0.5*mod(_P,4.0));
vec2 P4=floor(0.25*mod(_P,8.0));
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);
}
`;l.a.IncludesShadersStore[y]=O;var h={name:y,shader:O},D="shadowMapFragmentDeclaration",m=`#if SM_FLOAT == 0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW == 1
#include<bayerDitherFunctions>
uniform float softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE == 1
uniform vec3 lightDataSM;
varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP == 1
varying float zSM;
#endif
`;l.a.IncludesShadersStore[D]=m;var n={name:D,shader:m},e=a(592),t=a(550),i="shadowMapFragment",r=` float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP == 1
#if SM_USEDISTANCE == 1
depthSM=clamp(((length(vPositionWSM-lightDataSM)+depthValuesSM.x)/(depthValuesSM.y))+biasAndScaleSM.x,0.0,1.0);
#else
depthSM=clamp(((zSM+depthValuesSM.x)/(depthValuesSM.y))+biasAndScaleSM.x,0.0,1.0);
#endif
gl_FragDepth=depthSM;
#elif SM_USEDISTANCE == 1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/(depthValuesSM.y)+biasAndScaleSM.x;
#endif
#if SM_ESM == 1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT == 1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;l.a.IncludesShadersStore[i]=r;var s={name:i,shader:r},f="shadowMapPixelShader",v=`#include<shadowMapFragmentDeclaration>
#ifdef ALPHATEST
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
float alphaFromAlphaTexture=texture2D(diffuseSampler,vUV).a;
if (alphaFromAlphaTexture<0.4)
discard;
#endif
#if SM_SOFTTRANSPARENTSHADOW == 1
#ifdef ALPHATEST
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM) discard;
#endif
#endif
#include<shadowMapFragment>
}`;l.a.ShadersStore[f]=v;var d={name:f,shader:v}},680:function(te,j,a){"use strict";var l=a(435),o=a(487),y=a(496),O=a(497),h=a(501),D=a(457),m="shadowMapVertexDeclaration",n=`#if SM_NORMALBIAS == 1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;
uniform vec2 depthValuesSM;
varying float vDepthMetricSM;
#if SM_USEDISTANCE == 1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP == 1
varying float zSM;
#endif
`;l.a.IncludesShadersStore[m]=n;var e={name:m,shader:n},t=a(593),i=a(507),r=a(508),s=a(488),f=a(489),v="shadowMapVertexNormalBias",d=`
#if SM_NORMALBIAS == 1
#if SM_DIRECTIONINLIGHTDATA == 1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;
vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);
float sinNLSM=sqrt(1.0-ndlSM*ndlSM);
float normalBiasSM=biasAndScaleSM.y*sinNLSM;
worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;l.a.IncludesShadersStore[v]=d;var T={name:v,shader:d},x="shadowMapVertexMetric",M=`#if SM_USEDISTANCE == 1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE == 1

gl_Position.z+=biasAndScaleSM.x*gl_Position.w;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP == 1
zSM=gl_Position.z;
gl_Position.z=0.0;
#elif SM_USEDISTANCE == 0

vDepthMetricSM=((gl_Position.z+depthValuesSM.x)/(depthValuesSM.y))+biasAndScaleSM.x;
#endif
`;l.a.IncludesShadersStore[x]=M;var b={name:x,shader:M},C=a(551),u="shadowMapVertexShader",S=`
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]

#include<instancesDeclaration>
#include<helperFunctions>
uniform mat4 viewProjection;
#ifdef ALPHATEST
varying vec2 vUV;
uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexDeclaration>
#include<clipPlaneVertexDeclaration>
void main(void)
{
vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));
vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>

gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEST
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;l.a.ShadersStore[u]=S;var R={name:u,shader:S}},694:function(te,j,a){"use strict";a.d(j,"a",function(){return h});var l=a(541),o=a(628),y=a(452),O=a(468);O.a.AddParser(y.a.NAME_SHADOWGENERATOR,function(D,m){if(D.shadowGenerators!==void 0&&D.shadowGenerators!==null)for(var n=0,e=D.shadowGenerators.length;n<e;n++){var t=D.shadowGenerators[n];t.className===o.a.CLASSNAME?o.a.Parse(t,m):l.a.Parse(t,m)}});var h=function(){function D(m){this.name=y.a.NAME_SHADOWGENERATOR,this.scene=m}return D.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(y.a.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR,this,this._gatherRenderTargets)},D.prototype.rebuild=function(){},D.prototype.serialize=function(m){m.shadowGenerators=[];for(var n=this.scene.lights,e=0,t=n;e<t.length;e++){var i=t[e],r=i.getShadowGenerator();r&&m.shadowGenerators.push(r.serialize())}},D.prototype.addFromContainer=function(m){},D.prototype.removeFromContainer=function(m,n){},D.prototype.dispose=function(){},D.prototype._gatherRenderTargets=function(m){var n=this.scene;if(this.scene.shadowsEnabled)for(var e=0;e<n.lights.length;e++){var t=n.lights[e],i=t.getShadowGenerator();if(t.isEnabled()&&t.shadowEnabled&&i){var r=i.getShadowMap();n.textures.indexOf(r)!==-1&&m.push(r)}}},D}();l.a._SceneComponentInitialization=function(D){var m=D._getComponent(y.a.NAME_SHADOWGENERATOR);m||(m=new h(D),D._addComponent(m))}},743:function(te,j,a){"use strict";a.d(j,"a",function(){return o});/*! *****************************************************************************
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
***************************************************************************** */var l=function(E,A){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,H){g.__proto__=H}||function(g,H){for(var U in H)Object.prototype.hasOwnProperty.call(H,U)&&(g[U]=H[U])},l(E,A)};function o(E,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");l(E,A);function g(){this.constructor=E}E.prototype=A===null?Object.create(A):(g.prototype=A.prototype,new g)}var y=function(){return y=Object.assign||function(A){for(var g,H=1,U=arguments.length;H<U;H++){g=arguments[H];for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&(A[I]=g[I])}return A},y.apply(this,arguments)};function O(E,A){var g={};for(var H in E)Object.prototype.hasOwnProperty.call(E,H)&&A.indexOf(H)<0&&(g[H]=E[H]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,H=Object.getOwnPropertySymbols(E);U<H.length;U++)A.indexOf(H[U])<0&&Object.prototype.propertyIsEnumerable.call(E,H[U])&&(g[H[U]]=E[H[U]]);return g}function h(E,A,g,H){var U=arguments.length,I=U<3?A:H===null?H=Object.getOwnPropertyDescriptor(A,g):H,W;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")I=Reflect.decorate(E,A,g,H);else for(var Y=E.length-1;Y>=0;Y--)(W=E[Y])&&(I=(U<3?W(I):U>3?W(A,g,I):W(A,g))||I);return U>3&&I&&Object.defineProperty(A,g,I),I}function D(E,A){return function(g,H){A(g,H,E)}}function m(E,A){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(E,A)}function n(E,A,g,H){function U(I){return I instanceof g?I:new g(function(W){W(I)})}return new(g||(g=Promise))(function(I,W){function Y(J){try{G(H.next(J))}catch(ne){W(ne)}}function $(J){try{G(H.throw(J))}catch(ne){W(ne)}}function G(J){J.done?I(J.value):U(J.value).then(Y,$)}G((H=H.apply(E,A||[])).next())})}function e(E,A){var g={label:0,sent:function(){if(I[0]&1)throw I[1];return I[1]},trys:[],ops:[]},H,U,I,W;return W={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(W[Symbol.iterator]=function(){return this}),W;function Y(G){return function(J){return $([G,J])}}function $(G){if(H)throw new TypeError("Generator is already executing.");for(;g;)try{if(H=1,U&&(I=G[0]&2?U.return:G[0]?U.throw||((I=U.return)&&I.call(U),0):U.next)&&!(I=I.call(U,G[1])).done)return I;switch(U=0,I&&(G=[G[0]&2,I.value]),G[0]){case 0:case 1:I=G;break;case 4:return g.label++,{value:G[1],done:!1};case 5:g.label++,U=G[1],G=[0];continue;case 7:G=g.ops.pop(),g.trys.pop();continue;default:if(I=g.trys,!(I=I.length>0&&I[I.length-1])&&(G[0]===6||G[0]===2)){g=0;continue}if(G[0]===3&&(!I||G[1]>I[0]&&G[1]<I[3])){g.label=G[1];break}if(G[0]===6&&g.label<I[1]){g.label=I[1],I=G;break}if(I&&g.label<I[2]){g.label=I[2],g.ops.push(G);break}I[2]&&g.ops.pop(),g.trys.pop();continue}G=A.call(E,g)}catch(J){G=[6,J],U=0}finally{H=I=0}if(G[0]&5)throw G[1];return{value:G[0]?G[1]:void 0,done:!0}}}var t=Object.create?function(E,A,g,H){H===void 0&&(H=g),Object.defineProperty(E,H,{enumerable:!0,get:function(){return A[g]}})}:function(E,A,g,H){H===void 0&&(H=g),E[H]=A[g]};function i(E,A){for(var g in E)g!=="default"&&!Object.prototype.hasOwnProperty.call(A,g)&&t(A,E,g)}function r(E){var A=typeof Symbol=="function"&&Symbol.iterator,g=A&&E[A],H=0;if(g)return g.call(E);if(E&&typeof E.length=="number")return{next:function(){return E&&H>=E.length&&(E=void 0),{value:E&&E[H++],done:!E}}};throw new TypeError(A?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(E,A){var g=typeof Symbol=="function"&&E[Symbol.iterator];if(!g)return E;var H=g.call(E),U,I=[],W;try{for(;(A===void 0||A-- >0)&&!(U=H.next()).done;)I.push(U.value)}catch(Y){W={error:Y}}finally{try{U&&!U.done&&(g=H.return)&&g.call(H)}finally{if(W)throw W.error}}return I}function f(){for(var E=[],A=0;A<arguments.length;A++)E=E.concat(s(arguments[A]));return E}function v(){for(var E=0,A=0,g=arguments.length;A<g;A++)E+=arguments[A].length;for(var H=Array(E),U=0,A=0;A<g;A++)for(var I=arguments[A],W=0,Y=I.length;W<Y;W++,U++)H[U]=I[W];return H}function d(E,A){for(var g=0,H=A.length,U=E.length;g<H;g++,U++)E[U]=A[g];return E}function T(E){return this instanceof T?(this.v=E,this):new T(E)}function x(E,A,g){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var H=g.apply(E,A||[]),U,I=[];return U={},W("next"),W("throw"),W("return"),U[Symbol.asyncIterator]=function(){return this},U;function W(ee){H[ee]&&(U[ee]=function(oe){return new Promise(function(q,X){I.push([ee,oe,q,X])>1||Y(ee,oe)})})}function Y(ee,oe){try{$(H[ee](oe))}catch(q){ne(I[0][3],q)}}function $(ee){ee.value instanceof T?Promise.resolve(ee.value.v).then(G,J):ne(I[0][2],ee)}function G(ee){Y("next",ee)}function J(ee){Y("throw",ee)}function ne(ee,oe){ee(oe),I.shift(),I.length&&Y(I[0][0],I[0][1])}}function M(E){var A,g;return A={},H("next"),H("throw",function(U){throw U}),H("return"),A[Symbol.iterator]=function(){return this},A;function H(U,I){A[U]=E[U]?function(W){return(g=!g)?{value:T(E[U](W)),done:U==="return"}:I?I(W):W}:I}}function b(E){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var A=E[Symbol.asyncIterator],g;return A?A.call(E):(E=typeof r=="function"?r(E):E[Symbol.iterator](),g={},H("next"),H("throw"),H("return"),g[Symbol.asyncIterator]=function(){return this},g);function H(I){g[I]=E[I]&&function(W){return new Promise(function(Y,$){W=E[I](W),U(Y,$,W.done,W.value)})}}function U(I,W,Y,$){Promise.resolve($).then(function(G){I({value:G,done:Y})},W)}}function C(E,A){return Object.defineProperty?Object.defineProperty(E,"raw",{value:A}):E.raw=A,E}var u=Object.create?function(E,A){Object.defineProperty(E,"default",{enumerable:!0,value:A})}:function(E,A){E.default=A};function S(E){if(E&&E.__esModule)return E;var A={};if(E!=null)for(var g in E)g!=="default"&&Object.prototype.hasOwnProperty.call(E,g)&&t(A,E,g);return u(A,E),A}function R(E){return E&&E.__esModule?E:{default:E}}function p(E,A){if(!A.has(E))throw new TypeError("attempted to get private field on non-instance");return A.get(E)}function c(E,A,g){if(!A.has(E))throw new TypeError("attempted to set private field on non-instance");return A.set(E,g),g}},758:function(te,j,a){"use strict";a.d(j,"a",function(){return m});var l=a(743),o=a(435),y=a(455),O=a(437),h=function(){function n(){}return n}(),D=function(){function n(){}return n}(),m=function(n){Object(l.a)(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.CustomParts=new D,r.customShaderNameResolve=r.Builder,r.FragmentShader=o.a.ShadersStore.defaultPixelShader,r.VertexShader=o.a.ShadersStore.defaultVertexShader,r}return e.prototype.AttachAfterBind=function(t,i){if(this._newUniformInstances)for(var r in this._newUniformInstances){var s=r.toString().split("-");s[0]=="vec2"?i.setVector2(s[1],this._newUniformInstances[r]):s[0]=="vec3"?i.setVector3(s[1],this._newUniformInstances[r]):s[0]=="vec4"?i.setVector4(s[1],this._newUniformInstances[r]):s[0]=="mat4"?i.setMatrix(s[1],this._newUniformInstances[r]):s[0]=="float"&&i.setFloat(s[1],this._newUniformInstances[r])}if(this._newSamplerInstances)for(var r in this._newSamplerInstances){var s=r.toString().split("-");s[0]=="sampler2D"&&this._newSamplerInstances[r].isReady&&this._newSamplerInstances[r].isReady()&&i.setTexture(s[1],this._newSamplerInstances[r])}},e.prototype.ReviewUniform=function(t,i){if(t=="uniform"&&this._newUniforms)for(var r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")==-1&&i.push(this._newUniforms[r]);if(t=="sampler"&&this._newUniforms)for(var r=0;r<this._newUniforms.length;r++)this._customUniform[r].indexOf("sampler")!=-1&&i.push(this._newUniforms[r]);return i},e.prototype.Builder=function(t,i,r,s,f,v){var d=this;if(v&&this._customAttributes&&this._customAttributes.length>0&&v.push.apply(v,this._customAttributes),this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",s),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,e.ShaderIndexer++;var T="custom_"+e.ShaderIndexer,x=this._afterBind.bind(this);return this._afterBind=function(M,b){if(!!b){d.AttachAfterBind(M,b);try{x(M,b)}catch(C){}}},o.a.ShadersStore[T+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(o.a.ShadersStore[T+"VertexShader"]=o.a.ShadersStore[T+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),o.a.ShadersStore[T+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(o.a.ShadersStore[T+"PixelShader"]=o.a.ShadersStore[T+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=T,T},e.prototype.AddUniform=function(t,i,r){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),r&&(i.indexOf("sampler")!=-1?this._newSamplerInstances[i+"-"+t]=r:this._newUniformInstances[i+"-"+t]=r),this._customUniform.push("uniform "+i+" "+t+";"),this._newUniforms.push(t),this},e.prototype.AddAttribute=function(t){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(t),this},e.prototype.Fragment_Begin=function(t){return this.CustomParts.Fragment_Begin=t,this},e.prototype.Fragment_Definitions=function(t){return this.CustomParts.Fragment_Definitions=t,this},e.prototype.Fragment_MainBegin=function(t){return this.CustomParts.Fragment_MainBegin=t,this},e.prototype.Fragment_Custom_Diffuse=function(t){return this.CustomParts.Fragment_Custom_Diffuse=t.replace("result","diffuseColor"),this},e.prototype.Fragment_Custom_Alpha=function(t){return this.CustomParts.Fragment_Custom_Alpha=t.replace("result","alpha"),this},e.prototype.Fragment_Before_Lights=function(t){return this.CustomParts.Fragment_Before_Lights=t,this},e.prototype.Fragment_Before_Fog=function(t){return this.CustomParts.Fragment_Before_Fog=t,this},e.prototype.Fragment_Before_FragColor=function(t){return this.CustomParts.Fragment_Before_FragColor=t.replace("result","color"),this},e.prototype.Vertex_Begin=function(t){return this.CustomParts.Vertex_Begin=t,this},e.prototype.Vertex_Definitions=function(t){return this.CustomParts.Vertex_Definitions=t,this},e.prototype.Vertex_MainBegin=function(t){return this.CustomParts.Vertex_MainBegin=t,this},e.prototype.Vertex_Before_PositionUpdated=function(t){return this.CustomParts.Vertex_Before_PositionUpdated=t.replace("result","positionUpdated"),this},e.prototype.Vertex_Before_NormalUpdated=function(t){return this.CustomParts.Vertex_Before_NormalUpdated=t.replace("result","normalUpdated"),this},e.prototype.Vertex_After_WorldPosComputed=function(t){return this.CustomParts.Vertex_After_WorldPosComputed=t,this},e.prototype.Vertex_MainEnd=function(t){return this.CustomParts.Vertex_MainEnd=t,this},e.ShaderIndexer=1,e}(y.a);O.a.RegisteredTypes["BABYLON.CustomMaterial"]=m},93:function(te,j,a){"use strict";a.r(j);var l=a(445),o=a(449),y=a(498),O=a(475),h=a(441),D=a(506),m=a(648),n=a(485),e=a(447),t=a(758),i=a(599),r=a(455),s=a(694),f=a(547),v=a(541),d=a(594),T=a(602),x=a(549),M=Math.pow,b=(R,p,c)=>new Promise((E,A)=>{var g=I=>{try{U(c.next(I))}catch(W){A(W)}},H=I=>{try{U(c.throw(I))}catch(W){A(W)}},U=I=>I.done?E(I.value):Promise.resolve(I.value).then(g,H);U((c=c.apply(R,p)).next())});const C=(R,p,c,E)=>Math.sqrt(M(c-R,2)+M(E-p,2)),u={animate:!0,context:Object(x.a)()},S=R=>b(void 0,[R],function*({canvas:p,width:c,height:E}){const A=new l.a(p,!0,{preserveDrawingBuffer:!0,stencil:!0}),g=h.a.FromHexString("#FFB366"),H=h.a.FromHexString("#F5F8FA"),U=new o.a(A);U.clearColor=g,U.fogMode=o.a.FOGMODE_EXP2,U.fogDensity=.05,U.fogColor=g;const I=new D.a("camera",-2.19,1.2,3.9,new O.z(0,0,0),U);I.fov=1,I.minZ=.1,I.lowerRadiusLimit=3,I.upperRadiusLimit=15,I.wheelDeltaPercentage=.01,I.pinchDeltaPercentage=.01,I.lowerBetaLimit=0,I.upperBetaLimit=1.2,I.attachControl(p,!0);const W=new y.a("hemiLight",new O.z(-1,1,0),U);W.diffuse=new h.a(1,1,1),W.groundColor=new h.a(0,0,0),W.specular=new h.a(0,0,0),W.intensity=.4;const Y=new i.a("dir01",new O.z(-1,-1.5,-1),U);Y.position=new O.z(20,20,20),Y.intensity=.5;const $=new v.a(1024,Y);$.usePercentageCloserFiltering=!0,$.filteringQuality=v.a.QUALITY_HIGH;const G=new t.a("groundMaterial",U);G.diffuseColor=g,G.specularColor=new h.a(-.1,-.1,-.1),G.emissiveColor=h.a.Black();const J=m.a.CreateGround("ground",{width:7,height:4,subdivisions:150,updatable:!0});J.renderingGroupId=1,J.isPickable=!1,J.material=G,J.receiveShadows=!0;const ne=m.a.CreateGround("ground",{width:200,height:200,subdivisions:1,updatable:!1});ne.material=G;const ee=.5,oe=.075,q=m.a.CreateSphere("ball",{diameter:ee*2,segments:64},U);q.renderingGroupId=1,q.position.y=oe,$.addShadowCaster(q);const X=new r.a("material",U);X.diffuseColor=H,X.specularColor=new h.a(.1,.1,.1),X.emissiveColor=new h.a(.1,.1,.1),q.material=X,X.specularPower=16;function ge(se){const me=q.position.x,le=q.position.z,V=J.getVerticesData(e.b.PositionKind);for(let B=0;B<V.length/3;B+=1){const k=V[B*3+0],Q=V[B*3+2],F=C(k,Q,me,le),re=.5-oe;V[B*3+1]=Math.min(-(re-1*M(F,2))*Math.exp(-5*M(F,2)),V[B*3+1]),V[B*3+1]+=-Math.sign(V[B*3+1])*(Math.abs(.1-V[B*3+1])*se*.5)}J.updateVerticesData(e.b.PositionKind,V);const P=J.getIndices(),w=[];n.a.ComputeNormals(V,P,w),J.updateVerticesData(e.b.NormalKind,w)}const _e=new d.a("ssao",U,{ssaoRatio:1.5,blurRatio:1});_e.radius=.25,_e.totalStrength=.75,_e.expensiveBlur=!0,_e.samples=16,_e.maxZ=100,U.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssao",I);const ie=new T.a("default",!1,U,[I]);ie.fxaaEnabled=!0,ie.samples=8,ie.bloomEnabled=!0,ie.bloomThreshold=.17,ie.bloomWeight=.2,ie.bloomKernel=100,ie.bloomScale=.9;let de=0;return{render({time:se,deltaTime:me}){const le=Math.min(me,.1);de+=le;const V=de,P=2,w=2/(3-Math.cos(2*V)),B=w*Math.cos(V)*P,k=w*Math.sin(2*V)/2*P;q.position.x=B,q.position.z=k,ge(le),U.render()},resize({pixelRatio:se,width:me,height:le}){A.resize()},unload(){A.dispose()}}});j.default={sketch:S,settings:u}}}]);
