(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[42,235,236,237,238,239],{356:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
attribute float idx;
attribute float rFactor1;
`},357:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
float t = iTime*speedFactor;

positionUpdated.y -= (fract(t + rFactor1) - 1.0)*rainHeight;
`},358:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
`},359:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
`},360:function(J,j,o){"use strict";o.r(j),j.default=`#define GLSLIFY 1
`},444:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(434),s=o(490),C=o(438),v=o(436),c=o(534),_=o(445),p=o(500),i=o(439),e=o(437),t=function(){function r(n,a,f,h,d,g,O,P,A,b,L,D,U,y,V){O===void 0&&(O=1),b===void 0&&(b=null),L===void 0&&(L=0),D===void 0&&(D="postprocess"),y===void 0&&(y=!1),V===void 0&&(V=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new s.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new v.d(1,1),this._texelSize=v.d.Zero(),this.onActivateObservable=new C.c,this.onSizeChangedObservable=new C.c,this.onApplyObservable=new C.c,this.onBeforeRenderObservable=new C.c,this.onAfterRenderObservable=new C.c,this.name=n,g!=null?(this._camera=g,this._scene=g.getScene(),g.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):P&&(this._engine=P,this._engine.postProcesses.push(this)),this._options=d,this.renderTargetSamplingMode=O||1,this._reusable=A||!1,this._textureType=L,this._textureFormat=V,this._samplers=h||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=D,this._parameters=f||[],this._parameters.push("scale"),this._indexParameters=U,y||this.updateEffect(b)}return Object.defineProperty(r.prototype,"samples",{get:function(){return this._samples},set:function(n){var a=this;this._samples=Math.min(n,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(f){f.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(f,a._samples)})},enumerable:!1,configurable:!0}),r.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(r.prototype,"onActivate",{set:function(n){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),n&&(this._onActivateObserver=this.onActivateObservable.add(n))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onSizeChanged",{set:function(n){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onApply",{set:function(n){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onBeforeRender",{set:function(n){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onAfterRender",{set:function(n){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(n){this._forcedOutputTexture=n},enumerable:!1,configurable:!0}),r.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},r.prototype.getCamera=function(){return this._camera},Object.defineProperty(r.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),r.prototype.getClassName=function(){return"PostProcess"},r.prototype.getEngine=function(){return this._engine},r.prototype.getEffect=function(){return this._effect},r.prototype.shareOutputWith=function(n){return this._disposeTextures(),this._shareOutputWithPostProcess=n,this},r.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new s.a(2)),this._shareOutputWithPostProcess=null},r.prototype.updateEffect=function(n,a,f,h,d,g,O,P){n===void 0&&(n=null),a===void 0&&(a=null),f===void 0&&(f=null),this._postProcessDefines=n,this._effect=this._engine.createEffect({vertex:O!=null?O:this._vertexUrl,fragment:P!=null?P:this._fragmentUrl},["position"],a||this._parameters,f||this._samplers,n!==null?n:"",void 0,d,g,h||this._indexParameters)},r.prototype.isReusable=function(){return this._reusable},r.prototype.markTextureDirty=function(){this.width=-1},r.prototype._createRenderTargetTexture=function(n,a,f){f===void 0&&(f=0);for(var h=0;h<this._textureCache.length;h++)if(this._textureCache[h].texture.width===n.width&&this._textureCache[h].texture.height===n.height&&this._textureCache[h].postProcessChannel===f)return this._textureCache[h].texture;var d=this._engine.createRenderTargetTexture(n,a);return this._textureCache.push({texture:d,postProcessChannel:f,lastUsedRenderId:-1}),d},r.prototype._flushTextureCache=function(){for(var n=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(n-this._textureCache[a].lastUsedRenderId>100){for(var f=!1,h=0;h<this._textures.length;h++)if(this._textures.data[h]===this._textureCache[a].texture){f=!0;break}f||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},r.prototype._resize=function(n,a,f,h,d){this._textures.length>0&&this._textures.reset(),this.width=n,this.height=a;var g={width:this.width,height:this.height},O={generateMipMaps:h,generateDepthBuffer:d||f._postProcesses.indexOf(this)===0,generateStencilBuffer:(d||f._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(g,O,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(g,O,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},r.prototype.activate=function(n,a,f){var h=this;a===void 0&&(a=null),n=n||this._camera;var d=n.getScene(),g=d.getEngine(),O=g.getCaps().maxTextureSize,P=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,A=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,b=n.parent;b&&(b.leftCamera==n||b.rightCamera==n)&&(P/=2);var L=this._options.width||P,D=this._options.height||A,U=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var y=g.currentViewport;y&&(L*=y.width,D*=y.height)}(U||this.alwaysForcePOT)&&(this._options.width||(L=g.needPOTTextures?_.a.GetExponentOfTwo(L,O,this.scaleMode):L),this._options.height||(D=g.needPOTTextures?_.a.GetExponentOfTwo(D,O,this.scaleMode):D)),(this.width!==L||this.height!==D)&&this._resize(L,D,n,U,f),this._textures.forEach(function(E){E.samples!==h.samples&&h._engine.updateRenderTargetTextureSampleCount(E,h.samples)}),this._flushTextureCache(),this._renderId++}var V;if(this._shareOutputWithPostProcess)V=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)V=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{V=this.inputTexture;for(var I=void 0,x=0;x<this._textureCache.length;x++)if(this._textureCache[x].texture===V){I=this._textureCache[x];break}I&&(I.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(P/L,A/D),this._engine.bindFramebuffer(V,0,P,A,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(V,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(n),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:d.clearColor,d._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),V},Object.defineProperty(r.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),r.prototype.isReady=function(){return this._effect&&this._effect.isReady()},r.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var n;return this._shareOutputWithPostProcess?n=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?n=this._forcedOutputTexture:n=this.inputTexture,this._effect._bindTexture("textureSampler",n),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},r.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},r.prototype._disposeTextureCache=function(){for(var n=this._textureCache.length-1;n>=0;n--)this._engine._releaseTexture(this._textureCache[n].texture);this._textureCache.length=0},r.prototype.setPrePassRenderer=function(n){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=n.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},r.prototype.dispose=function(n){n=n||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!n){if(n.detachPostProcess(this),a=n._postProcesses.indexOf(this),a===0&&n._postProcesses.length>0){var f=this._camera._getFirstPostProcess();f&&f.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},r.prototype.serialize=function(){var n=i.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return n.customType="BABYLON."+this.getClassName(),n.cameraId=a?a.id:null,n.reusable=this._reusable,n.textureType=this._textureType,n.fragmentUrl=this._fragmentUrl,n.parameters=this._parameters,n.samplers=this._samplers,n.options=this._options,n.defines=this._postProcessDefines,n.textureFormat=this._textureFormat,n.vertexUrl=this._vertexUrl,n.indexParameters=this._indexParameters,n},r.prototype.clone=function(){var n=this.serialize();n._engine=this._engine,n.cameraId=null;var a=r.Parse(n,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},r.Parse=function(n,a,f){var h=e.a.GetClass(n.customType);if(!h||!h._Parse)return null;var d=a?a.getCameraByID(n.cameraId):null;return h._Parse(n,d,a,f)},r._Parse=function(n,a,f,h){return i.a.Parse(function(){return new r(n.name,n.fragmentUrl,n.parameters,n.samplers,n.options,a,n.renderTargetSamplingMode,n._engine,n.reusable,n.defines,n.textureType,n.vertexUrl,n.indexParameters,!1,n.textureFormat)},n,f,h)},Object(l.c)([Object(i.c)()],r.prototype,"uniqueId",void 0),Object(l.c)([Object(i.c)()],r.prototype,"name",void 0),Object(l.c)([Object(i.c)()],r.prototype,"width",void 0),Object(l.c)([Object(i.c)()],r.prototype,"height",void 0),Object(l.c)([Object(i.c)()],r.prototype,"renderTargetSamplingMode",void 0),Object(l.c)([Object(i.f)()],r.prototype,"clearColor",void 0),Object(l.c)([Object(i.c)()],r.prototype,"autoClear",void 0),Object(l.c)([Object(i.c)()],r.prototype,"alphaMode",void 0),Object(l.c)([Object(i.c)()],r.prototype,"alphaConstants",void 0),Object(l.c)([Object(i.c)()],r.prototype,"enablePixelPerfectMode",void 0),Object(l.c)([Object(i.c)()],r.prototype,"forceFullscreenViewport",void 0),Object(l.c)([Object(i.c)()],r.prototype,"scaleMode",void 0),Object(l.c)([Object(i.c)()],r.prototype,"alwaysForcePOT",void 0),Object(l.c)([Object(i.c)("samples")],r.prototype,"_samples",void 0),Object(l.c)([Object(i.c)()],r.prototype,"adaptScaleToCurrentViewport",void 0),r}();e.a.RegisteredTypes["BABYLON.PostProcess"]=t},458:function(J,j,o){"use strict";o.d(j,"a",function(){return r});var l=o(434),s=o(438),C=o(443),v=o(436),c=o(442),_=o(590),p=o(591),i=o(500),e=o(522),t=o(445),r=function(n){Object(l.d)(a,n);function a(f,h,d,g,O,P,A,b,L,D,U,y,V,I){O===void 0&&(O=!0),P===void 0&&(P=0),A===void 0&&(A=!1),b===void 0&&(b=c.a.TRILINEAR_SAMPLINGMODE),L===void 0&&(L=!0),D===void 0&&(D=!1),U===void 0&&(U=!1),y===void 0&&(y=5),V===void 0&&(V=!1);var x,E=n.call(this,null,d,!g,void 0,b,void 0,void 0,void 0,void 0,y)||this;return E.renderParticles=!0,E.renderSprites=!1,E.ignoreCameraViewport=!1,E.onBeforeBindObservable=new s.c,E.onAfterUnbindObservable=new s.c,E.onBeforeRenderObservable=new s.c,E.onAfterRenderObservable=new s.c,E.onClearObservable=new s.c,E.onResizeObservable=new s.c,E._currentRefreshId=-1,E._refreshRate=1,E._samples=1,E.boundingBoxPosition=v.e.Zero(),d=E.getScene(),!d||(E._coordinatesMode=c.a.PROJECTION_MODE,E.renderList=new Array,E.name=f,E.isRenderTarget=!0,E._initialSizeParameter=h,E._processSizeParameter(h),E._resizeObserver=E.getScene().getEngine().onResizeObservable.add(function(){}),E._generateMipMaps=!!g,E._doNotChangeAspectRatio=O,E._renderingManager=new p.b(d),E._renderingManager._useSceneAutoClearSetup=!0,U)||(E._renderTargetOptions={generateMipMaps:g,type:P,format:(x=E._format)!==null&&x!==void 0?x:void 0,samplingMode:E.samplingMode,generateDepthBuffer:L,generateStencilBuffer:D,samples:I},E.samplingMode===c.a.NEAREST_SAMPLINGMODE&&(E.wrapU=c.a.CLAMP_ADDRESSMODE,E.wrapV=c.a.CLAMP_ADDRESSMODE),V||(A?(E._texture=d.getEngine().createRenderTargetCubeTexture(E.getRenderSize(),E._renderTargetOptions),E.coordinatesMode=c.a.INVCUBIC_MODE,E._textureMatrix=v.a.Identity()):E._texture=d.getEngine().createRenderTargetTexture(E._size,E._renderTargetOptions),I!==void 0&&(E.samples=I))),E}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(f){this._renderList=f,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(f){var h=this,d=f.push;f.push=function(){for(var O=[],P=0;P<arguments.length;P++)O[P]=arguments[P];var A=f.length===0,b=d.apply(f,O);return A&&h.getScene()&&h.getScene().meshes.forEach(function(L){L._markSubMeshesAsLightDirty()}),b};var g=f.splice;f.splice=function(O,P){var A=g.apply(f,[O,P]);return f.length===0&&h.getScene().meshes.forEach(function(b){b._markSubMeshesAsLightDirty()}),A}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(f){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(f){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(f){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(f){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(f)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(f){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(f))){this._boundingBoxSize=f;var h=this.getScene();h&&h.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var f;return((f=this.getInternalTexture())===null||f===void 0?void 0:f._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(f,h,d,g){var O;f===void 0&&(f=0),h===void 0&&(h=!0),d===void 0&&(d=!1),g===void 0&&(g=1);var P=this.getInternalTexture();if(!(!this.getScene()||!P)){(O=P._depthStencilTexture)===null||O===void 0||O.dispose();var A=this.getScene().getEngine();P._depthStencilTexture=A.createDepthStencilTexture(this._size,{bilinearFiltering:h,comparisonFunction:f,generateStencil:d,isCube:this.isCube,samples:g})}},a.prototype._processSizeParameter=function(f){if(f.ratio){this._sizeRatio=f.ratio;var h=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(h.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(h.getRenderHeight(),this._sizeRatio)}}else this._size=f},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(f){if(this._samples!==f){var h=this.getScene();!h||(this._samples=h.getEngine().updateRenderTargetTextureSampleCount(this._texture,f))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(f){this._refreshRate=f,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(f){if(!this._postProcessManager){var h=this.getScene();if(!h)return;this._postProcessManager=new _.a(h),this._postProcesses=new Array}this._postProcesses.push(f),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(f){if(f===void 0&&(f=!1),!!this._postProcesses){if(f)for(var h=0,d=this._postProcesses;h<d.length;h++){var g=d[h];g.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(f){if(!!this._postProcesses){var h=this._postProcesses.indexOf(f);h!==-1&&(this._postProcesses.splice(h,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var f=this._size.layers;return f||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(f){var h=Math.max(1,this.getRenderSize()*f);this.resize(h)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:n.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(f){var h=this.isCube;this.releaseInternalTexture();var d=this.getScene();!d||(this._processSizeParameter(f),h?this._texture=d.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=d.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(f,h){f===void 0&&(f=!1),h===void 0&&(h=!1);var d=this.getScene();if(!!d){var g=d.getEngine();if(this.useCameraPostProcesses!==void 0&&(f=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var O=0;O<this._waitingRenderList.length;O++){var P=this._waitingRenderList[O],A=d.getMeshByID(P);A&&this.renderList.push(A)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var d=this.getScene();if(!d)return;for(var b=d.meshes,O=0;O<b.length;O++){var L=b[O];this.renderListPredicate(L)&&this.renderList.push(L)}}this.onBeforeBindObservable.notifyObservers(this);var D;if(this.activeCamera?(D=this.activeCamera,g.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==d.activeCamera&&d.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(D=d.activeCamera,D&&g.setViewport(D.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var U=0;U<this.getRenderLayers();U++)this.renderToTarget(0,f,h,U,D),d.incrementRenderId(),d.resetCachedMaterial();else if(this.isCube)for(var y=0;y<6;y++)this.renderToTarget(y,f,h,void 0,D),d.incrementRenderId(),d.resetCachedMaterial();else this.renderToTarget(0,f,h,void 0,D);this.onAfterUnbindObservable.notifyObservers(this),d.activeCamera&&((d.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==d.activeCamera)&&d.setTransformMatrix(d.activeCamera.getViewMatrix(),d.activeCamera.getProjectionMatrix(!0)),g.setViewport(d.activeCamera.viewport)),d.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(f,h){var d=128,g=f*h,O=t.a.NearestPOT(g+d*d/(d+g));return Math.min(t.a.FloorPOT(f),O)},a.prototype._prepareRenderingManager=function(f,h,d,g){var O=this.getScene();if(!!O){this._renderingManager.reset();for(var P=O.getRenderId(),A=0;A<h;A++){var b=f[A];if(b&&!b.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(b,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!b.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!b._internalAbstractMeshDataInfo._currentLODIsUpToDate&&O.activeCamera&&(b._internalAbstractMeshDataInfo._currentLOD=O.customLODSelector?O.customLODSelector(b,O.activeCamera):b.getLOD(O.activeCamera),b._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!b._internalAbstractMeshDataInfo._currentLOD)continue;var L=b._internalAbstractMeshDataInfo._currentLOD;L._preActivateForIntermediateRendering(P);var D=void 0;if(g&&d?D=(b.layerMask&d.layerMask)==0:D=!1,b.isEnabled()&&b.isVisible&&b.subMeshes&&!D&&(L!==b&&L._activate(P,!0),b._activate(P,!0)&&b.subMeshes.length)){b.isAnInstance?b._internalAbstractMeshDataInfo._actAsRegularMesh&&(L=b):L._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,L._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var U=0;U<L.subMeshes.length;U++){var y=L.subMeshes[U];this._renderingManager.dispatch(y,L)}}}}for(var V=0;V<O.particleSystems.length;V++){var I=O.particleSystems[V],x=I.emitter;!I.isStarted()||!x||!x.position||!x.isEnabled()||f.indexOf(x)>=0&&this._renderingManager.dispatchParticles(I)}}},a.prototype._bindFrameBuffer=function(f,h){f===void 0&&(f=0),h===void 0&&(h=0);var d=this.getScene();if(!!d){var g=d.getEngine();this._texture&&g.bindFramebuffer(this._texture,this.isCube?f:void 0,void 0,void 0,this.ignoreCameraViewport,0,h)}},a.prototype.unbindFrameBuffer=function(f,h){var d=this;!this._texture||f.unBindFramebuffer(this._texture,this.isCube,function(){d.onAfterRenderObservable.notifyObservers(h)})},a.prototype._prepareFrame=function(f,h,d,g){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!g||!f.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(h,d)},a.prototype.renderToTarget=function(f,h,d,g,O){g===void 0&&(g=0),O===void 0&&(O=null);var P=this.getScene();if(!!P){var A=P.getEngine();if(!!this._texture){A._debugPushGroup("render to face #"+f+" layer #"+g,1),this._prepareFrame(P,f,g,h),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(g):this.onBeforeRenderObservable.notifyObservers(f);var b=null,L=this.renderList?this.renderList:P.getActiveMeshes().data,D=this.renderList?this.renderList.length:P.getActiveMeshes().length;this.getCustomRenderList&&(b=this.getCustomRenderList(this.is2DArray?g:f,L,D)),b?this._prepareRenderingManager(b,b.length,O,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(L,D,O,!this.renderList),this._defaultRenderListPrepared=!0),b=L);for(var U=0,y=P._beforeRenderTargetClearStage;U<y.length;U++){var V=y[U];V.action(this,f,g)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(A):A.clear(this.clearColor||P.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||P.updateTransformMatrix(!0);for(var I=0,x=P._beforeRenderTargetDrawStage;I<x.length;I++){var V=x[I];V.action(this,f,g)}this._renderingManager.render(this.customRenderFunction,b,this.renderParticles,this.renderSprites);for(var E=0,z=P._afterRenderTargetDrawStage;E<z.length;E++){var V=z[E];V.action(this,f,g)}var H=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,f,this._postProcesses,this.ignoreCameraViewport):h&&P.postProcessManager._finalizeFrame(!1,this._texture,f),this._texture.generateMipMaps=H,this._doNotChangeAspectRatio||P.updateTransformMatrix(!0),d&&C.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),A),this.unbindFrameBuffer(A,f),this.isCube&&f===5&&A.generateMipMapsForCubemap(this._texture),A._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(f,h,d,g){h===void 0&&(h=null),d===void 0&&(d=null),g===void 0&&(g=null),this._renderingManager.setRenderingOrder(f,h,d,g)},a.prototype.setRenderingAutoClearDepthStencil=function(f,h){this._renderingManager.setRenderingAutoClearDepthStencil(f,h),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var f=this.getSize(),h=new a(this.name,f,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return h.hasAlpha=this.hasAlpha,h.level=this.level,h.coordinatesMode=this.coordinatesMode,this.renderList&&(h.renderList=this.renderList.slice(0)),h},a.prototype.serialize=function(){if(!this.name)return null;var f=n.prototype.serialize.call(this);if(f.renderTargetSize=this.getRenderSize(),f.renderList=[],this.renderList)for(var h=0;h<this.renderList.length;h++)f.renderList.push(this.renderList[h].id);return f},a.prototype.disposeFramebufferObjects=function(){var f=this.getInternalTexture(),h=this.getScene();f&&h&&h.getEngine()._releaseFramebufferObjects(f)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var f=this.getScene();if(!!f){var h=f.customRenderTargets.indexOf(this);h>=0&&f.customRenderTargets.splice(h,1);for(var d=0,g=f.cameras;d<g.length;d++){var O=g[d];h=O.customRenderTargets.indexOf(this),h>=0&&O.customRenderTargets.splice(h,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),n.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(c.a);c.a._CreateRenderTargetTexture=function(n,a,f,h){return new r(n,a,f,h)}},466:function(J,j,o){"use strict";o.d(j,"a",function(){return s});var l=o(443),s=function(){function C(v,c,_,p){this._name=c,this._singleInstance=p||!0,this._getPostProcesses=_,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(C.prototype,"isSupported",{get:function(){for(var v in this._postProcesses)if(this._postProcesses.hasOwnProperty(v)){for(var c=this._postProcesses[v],_=0;_<c.length;_++)if(!c[_].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),C.prototype._update=function(){},C.prototype._attachCameras=function(v){var c=this,_,p=l.b.MakeArray(v||this._cameras);if(!!p)for(var i=0;i<p.length;i++){var e=p[i];if(!!e){var t=e.name;if(this._singleInstance?_=0:_=t,!this._postProcesses[_]){var r=this._getPostProcesses();r&&(this._postProcesses[_]=Array.isArray(r)?r:[r])}this._indicesForCamera[t]||(this._indicesForCamera[t]=[]),this._postProcesses[_].forEach(function(n){var a=e.attachPostProcess(n);c._indicesForCamera[t].push(a)}),this._cameras[t]||(this._cameras[t]=e)}}},C.prototype._detachCameras=function(v){var c=l.b.MakeArray(v||this._cameras);if(!!c)for(var _=0;_<c.length;_++){var p=c[_],i=p.name,e=this._postProcesses[this._singleInstance?0:i];e&&e.forEach(function(t){p.detachPostProcess(t)}),this._cameras[i]&&(this._cameras[i]=null)}},C.prototype._enable=function(v){var c=this,_=l.b.MakeArray(v||this._cameras);if(!!_)for(var p=0;p<_.length;p++)for(var i=_[p],e=i.name,t=0;t<this._indicesForCamera[e].length;t++)(i._postProcesses[this._indicesForCamera[e][t]]===void 0||i._postProcesses[this._indicesForCamera[e][t]]===null)&&this._postProcesses[this._singleInstance?0:e].forEach(function(r){_[p].attachPostProcess(r,c._indicesForCamera[e][t])})},C.prototype._disable=function(v){var c=l.b.MakeArray(v||this._cameras);if(!!c)for(var _=0;_<c.length;_++){var p=c[_],i=p.name;this._postProcesses[this._singleInstance?0:i].forEach(function(e){p.detachPostProcess(e)})}},C.prototype.getPostProcesses=function(v){return this._singleInstance?this._postProcesses[0]:v?this._postProcesses[v.name]:null},C}()},472:function(J,j,o){"use strict";o.d(j,"a",function(){return V});var l=o(434),s=o(444),C=o(442),v=o(435),c="kernelBlurVaryingDeclaration",_="varying vec2 sampleCoord{X};";v.a.IncludesShadersStore[c]=_;var p={name:c,shader:_},i=o(535),e="kernelBlurFragment",t=`#ifdef DOF
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
#endif`;v.a.IncludesShadersStore[n]=a;var f={name:n,shader:a},h="kernelBlurPixelShader",d=`
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
}`;v.a.ShadersStore[h]=d;var g={name:h,shader:d},O="kernelBlurVertex",P="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";v.a.IncludesShadersStore[O]=P;var A={name:O,shader:P},b="kernelBlurVertexShader",L=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;v.a.ShadersStore[b]=L;var D={name:b,shader:L},U=o(437),y=o(439),V=function(I){Object(l.d)(x,I);function x(E,z,H,F,Y,Z,le,G,fe,ee,te){Z===void 0&&(Z=C.a.BILINEAR_SAMPLINGMODE),fe===void 0&&(fe=0),ee===void 0&&(ee=""),te===void 0&&(te=!1);var ce=I.call(this,E,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],F,Y,Z,le,G,null,fe,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return ce.blockCompilation=te,ce._packedFloat=!1,ce._staticDefines="",ce._staticDefines=ee,ce.direction=z,ce.onApplyObservable.add(function($){ce._outputTexture?$.setFloat2("delta",1/ce._outputTexture.width*ce.direction.x,1/ce._outputTexture.height*ce.direction.y):$.setFloat2("delta",1/ce.width*ce.direction.x,1/ce.height*ce.direction.y)}),ce.kernel=H,ce}return Object.defineProperty(x.prototype,"kernel",{get:function(){return this._idealKernel},set:function(E){this._idealKernel!==E&&(E=Math.max(E,1),this._idealKernel=E,this._kernel=this._nearestBestKernel(E),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(E){this._packedFloat!==E&&(this._packedFloat=E,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),x.prototype.getClassName=function(){return"BlurPostProcess"},x.prototype.updateEffect=function(E,z,H,F,Y,Z){E===void 0&&(E=null),z===void 0&&(z=null),H===void 0&&(H=null),this._updateParameters(Y,Z)},x.prototype._updateParameters=function(E,z){for(var H=this._kernel,F=(H-1)/2,Y=[],Z=[],le=0,G=0;G<H;G++){var fe=G/(H-1),ee=this._gaussianWeight(fe*2-1);Y[G]=G-F,Z[G]=ee,le+=ee}for(var G=0;G<Z.length;G++)Z[G]/=le;for(var te=[],ce=[],$=[],G=0;G<=F;G+=2){var X=Math.min(G+1,Math.floor(F)),ve=G===X;if(ve)$.push({o:Y[G],w:Z[G]});else{var me=X===F,re=Z[G]+Z[X]*(me?.5:1),he=Y[G]+1/(1+Z[G]/Z[X]);he===0?($.push({o:Y[G],w:Z[G]}),$.push({o:Y[G+1],w:Z[G+1]})):($.push({o:he,w:re}),$.push({o:-he,w:re}))}}for(var G=0;G<$.length;G++)ce[G]=$[G].o,te[G]=$[G].w;Y=ce,Z=te;var ie=this.getEngine().getCaps().maxVaryingVectors,_e=Math.max(ie,0)-1,se=Math.min(Y.length,_e),N="";N+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(N+="#define CENTER_WEIGHT "+this._glslFloat(Z[se-1])+`\r
`,se--);for(var G=0;G<se;G++)N+="#define KERNEL_OFFSET"+G+" "+this._glslFloat(Y[G])+`\r
`,N+="#define KERNEL_WEIGHT"+G+" "+this._glslFloat(Z[G])+`\r
`;for(var m=0,G=_e;G<Y.length;G++)N+="#define KERNEL_DEP_OFFSET"+m+" "+this._glslFloat(Y[G])+`\r
`,N+="#define KERNEL_DEP_WEIGHT"+m+" "+this._glslFloat(Z[G])+`\r
`,m++;this.packedFloat&&(N+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,I.prototype.updateEffect.call(this,N,null,null,{varyingCount:se,depCount:m},E,z)},x.prototype._nearestBestKernel=function(E){for(var z=Math.round(E),H=0,F=[z,z-1,z+1,z-2,z+2];H<F.length;H++){var Y=F[H];if(Y%2!=0&&Math.floor(Y/2)%2==0&&Y>0)return Math.max(Y,3)}return Math.max(z,3)},x.prototype._gaussianWeight=function(E){var z=1/3,H=Math.sqrt(2*Math.PI)*z,F=-(E*E/(2*z*z)),Y=1/H*Math.exp(F);return Y},x.prototype._glslFloat=function(E,z){return z===void 0&&(z=8),E.toFixed(z).replace(/0+$/,"")},x._Parse=function(E,z,H,F){return y.a.Parse(function(){return new x(E.name,E.direction,E.kernel,E.options,z,E.renderTargetSamplingMode,H.getEngine(),E.reusable,E.textureType,void 0,!1)},E,H,F)},Object(l.c)([Object(y.c)("kernel")],x.prototype,"_kernel",void 0),Object(l.c)([Object(y.c)("packedFloat")],x.prototype,"_packedFloat",void 0),Object(l.c)([Object(y.n)()],x.prototype,"direction",void 0),x}(s.a);U.a.RegisteredTypes["BABYLON.BlurPostProcess"]=V},479:function(J,j,o){"use strict";o.d(j,"a",function(){return _});var l=o(434),s=o(440),C=o(442),v=o(532),c=o(596),_=function(p){Object(l.d)(i,p);function i(e,t,r,n,a,f,h){r===void 0&&(r=null),n===void 0&&(n=!1),a===void 0&&(a=3),f===void 0&&(f=5);var d=p.call(this,null,r,!n,h,a,void 0,void 0,void 0,void 0,f)||this;d.name=e,d.wrapU=C.a.CLAMP_ADDRESSMODE,d.wrapV=C.a.CLAMP_ADDRESSMODE,d._generateMipMaps=n;var g=d._getEngine();if(!g)return d;t.getContext?(d._canvas=t,d._texture=g.createDynamicTexture(t.width,t.height,n,a)):(d._canvas=c.a.CreateCanvas(1,1),t.width||t.width===0?d._texture=g.createDynamicTexture(t.width,t.height,n,a):d._texture=g.createDynamicTexture(t,t,n,a));var O=d.getSize();return d._canvas.width=O.width,d._canvas.height=O.height,d._context=d._canvas.getContext("2d"),d}return i.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(i.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),i.prototype._recreate=function(e){this._canvas.width=e.width,this._canvas.height=e.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(e.width,e.height,this._generateMipMaps,this.samplingMode)},i.prototype.scale=function(e){var t=this.getSize();t.width*=e,t.height*=e,this._recreate(t)},i.prototype.scaleTo=function(e,t){var r=this.getSize();r.width=e,r.height=t,this._recreate(r)},i.prototype.getContext=function(){return this._context},i.prototype.clear=function(){var e=this.getSize();this._context.fillRect(0,0,e.width,e.height)},i.prototype.update=function(e,t){t===void 0&&(t=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,e===void 0?!0:e,t,this._format||void 0)},i.prototype.drawText=function(e,t,r,n,a,f,h,d){d===void 0&&(d=!0);var g=this.getSize();if(f&&(this._context.fillStyle=f,this._context.fillRect(0,0,g.width,g.height)),this._context.font=n,t==null){var O=this._context.measureText(e);t=(g.width-O.width)/2}if(r==null){var P=parseInt(n.replace(/\D/g,""));r=g.height/2+P/3.65}this._context.fillStyle=a||"",this._context.fillText(e,t,r),d&&this.update(h)},i.prototype.clone=function(){var e=this.getScene();if(!e)return this;var t=this.getSize(),r=new i(this.name,t,e,this._generateMipMaps);return r.hasAlpha=this.hasAlpha,r.level=this.level,r.wrapU=this.wrapU,r.wrapV=this.wrapV,r},i.prototype.serialize=function(){var e=this.getScene();e&&!e.isReady()&&s.a.Warn("The scene must be ready before serializing the dynamic texture");var t=p.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(t.base64String=this._canvas.toDataURL()),t.invertY=this._invertY,t.samplingMode=this.samplingMode,t},i.prototype._IsCanvasElement=function(e){return e.toDataURL!==void 0},i.prototype._rebuild=function(){this.update()},i}(C.a)},481:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var l=o(434),s=o(443),C=o(439),v=function(){function c(_,p){this.engine=_,this._name=p,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(c.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(c.prototype,"isSupported",{get:function(){for(var _ in this._renderEffects)if(this._renderEffects.hasOwnProperty(_)&&!this._renderEffects[_].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),c.prototype.addEffect=function(_){this._renderEffects[_._name]=_},c.prototype._rebuild=function(){},c.prototype._enableEffect=function(_,p){var i=this._renderEffects[_];!i||i._enable(s.b.MakeArray(p||this._cameras))},c.prototype._disableEffect=function(_,p){var i=this._renderEffects[_];!i||i._disable(s.b.MakeArray(p||this._cameras))},c.prototype._attachCameras=function(_,p){var i=s.b.MakeArray(_||this._cameras);if(!!i){var e=[],t;for(t=0;t<i.length;t++){var r=i[t];if(!!r){var n=r.name;this._cameras.indexOf(r)===-1?this._cameras[n]=r:p&&e.push(t)}}for(t=0;t<e.length;t++)i.splice(e[t],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(i)}},c.prototype._detachCameras=function(_){var p=s.b.MakeArray(_||this._cameras);if(!!p){for(var i in this._renderEffects)this._renderEffects.hasOwnProperty(i)&&this._renderEffects[i]._detachCameras(p);for(var e=0;e<p.length;e++)this._cameras.splice(this._cameras.indexOf(p[e]),1)}},c.prototype._update=function(){for(var _ in this._renderEffects)this._renderEffects.hasOwnProperty(_)&&this._renderEffects[_]._update();for(var p=0;p<this._cameras.length;p++)if(!!this._cameras[p]){var i=this._cameras[p].name;this._renderEffectsForIsolatedPass[i]&&this._renderEffectsForIsolatedPass[i]._update()}},c.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},c.prototype._enableMSAAOnFirstPostProcess=function(_){if(!this.engine._features.supportMSAA)return!1;var p=Object.keys(this._renderEffects);if(p.length>0){var i=this._renderEffects[p[0]].getPostProcesses();i&&(i[0].samples=_)}return!0},c.prototype.setPrePassRenderer=function(_){return!1},c.prototype.dispose=function(){},Object(l.c)([Object(C.c)()],c.prototype,"_name",void 0),c}()},482:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var l=o(452),s=o(548),C=o(449);Object.defineProperty(C.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var c=this._getComponent(l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);c||(c=new v(this),this._addComponent(c)),this._postProcessRenderPipelineManager=new s.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var v=function(){function c(_){this.name=l.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=_}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(l.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},c.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},c.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},c}()},486:function(J,j,o){"use strict";o.d(j,"b",function(){return a}),o.d(j,"a",function(){return f});var l=o(434),s=o(444),C=o(445),v=o(435),c="passPixelShader",_=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;v.a.ShadersStore[c]=_;var p={name:c,shader:_},i="passCubePixelShader",e=`
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
}`;v.a.ShadersStore[i]=e;var t={name:i,shader:e},r=o(437),n=o(439),a=function(h){Object(l.d)(d,h);function d(g,O,P,A,b,L,D,U){return P===void 0&&(P=null),D===void 0&&(D=0),U===void 0&&(U=!1),h.call(this,g,"pass",null,null,O,P,A,b,L,void 0,D,void 0,null,U)||this}return d.prototype.getClassName=function(){return"PassPostProcess"},d._Parse=function(g,O,P,A){return n.a.Parse(function(){return new d(g.name,g.options,O,g.renderTargetSamplingMode,g._engine,g.reusable)},g,P,A)},d}(s.a);r.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var f=function(h){Object(l.d)(d,h);function d(g,O,P,A,b,L,D,U){P===void 0&&(P=null),D===void 0&&(D=0),U===void 0&&(U=!1);var y=h.call(this,g,"passCube",null,null,O,P,A,b,L,"#define POSITIVEX",D,void 0,null,U)||this;return y._face=0,y}return Object.defineProperty(d.prototype,"face",{get:function(){return this._face},set:function(g){if(!(g<0||g>5))switch(this._face=g,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),d.prototype.getClassName=function(){return"PassCubePostProcess"},d._Parse=function(g,O,P,A){return n.a.Parse(function(){return new d(g.name,g.options,O,g.renderTargetSamplingMode,g._engine,g.reusable)},g,P,A)},d}(s.a);C.a._RescalePostProcessFactory=function(h){return new a("rescale",1,null,2,h,!1,0)}},498:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var l=o(434),s=o(439),C=o(436),v=o(441),c=o(453),_=o(484);c.a.AddNodeConstructor("Light_Type_3",function(i,e){return function(){return new p(i,C.e.Zero(),e)}});var p=function(i){Object(l.d)(e,i);function e(t,r,n){var a=i.call(this,t,n)||this;return a.groundColor=new v.a(0,0,0),a.direction=r||C.e.Up(),a}return e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.getClassName=function(){return"HemisphericLight"},e.prototype.setDirectionToTarget=function(t){return this.direction=C.e.Normalize(t.subtract(C.e.Zero())),this.direction},e.prototype.getShadowGenerator=function(){return null},e.prototype.transferToEffect=function(t,r){var n=C.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",n.x,n.y,n.z,0,r),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),r),this},e.prototype.transferToNodeMaterialEffect=function(t,r){var n=C.e.Normalize(this.direction);return t.setFloat3(r,n.x,n.y,n.z),this},e.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=C.a.Identity()),this._worldMatrix},e.prototype.getTypeID=function(){return _.a.LIGHTTYPEID_HEMISPHERICLIGHT},e.prototype.prepareLightSpecificDefines=function(t,r){t["HEMILIGHT"+r]=!0},Object(l.c)([Object(s.e)()],e.prototype,"groundColor",void 0),Object(l.c)([Object(s.o)()],e.prototype,"direction",void 0),e}(_.a)},500:function(J,j,o){"use strict";var l=o(434),s=o(456),C=o(440),v=o(595),c=o(467);c.a.prototype.createRenderTargetTexture=function(_,p){var i=new v.a;p!==void 0&&typeof p=="object"?(i.generateMipMaps=p.generateMipMaps,i.generateDepthBuffer=!!p.generateDepthBuffer,i.generateStencilBuffer=!!p.generateStencilBuffer,i.type=p.type===void 0?0:p.type,i.samplingMode=p.samplingMode===void 0?3:p.samplingMode,i.format=p.format===void 0?5:p.format):(i.generateMipMaps=p,i.generateDepthBuffer=!0,i.generateStencilBuffer=!1,i.type=0,i.samplingMode=3,i.format=5),(i.type===1&&!this._caps.textureFloatLinearFiltering||i.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(i.samplingMode=1),i.type===1&&!this._caps.textureFloat&&(i.type=0,C.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var e=this._gl,t=new s.a(this,s.b.RenderTarget),r=_.width||_,n=_.height||_,a=_.layers||0,f=this._getSamplingParameters(i.samplingMode,!!i.generateMipMaps),h=a!==0?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,d=this._getRGBABufferInternalSizedFormat(i.type,i.format),g=this._getInternalFormat(i.format),O=this._getWebGLTextureType(i.type);this._bindTextureDirectly(h,t),a!==0?(t.is2DArray=!0,e.texImage3D(h,0,d,r,n,a,0,g,O,null)):e.texImage2D(h,0,d,r,n,0,g,O,null),e.texParameteri(h,e.TEXTURE_MAG_FILTER,f.mag),e.texParameteri(h,e.TEXTURE_MIN_FILTER,f.min),e.texParameteri(h,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(h,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i.generateMipMaps&&this._gl.generateMipmap(h),this._bindTextureDirectly(h,null);var P=this._currentFramebuffer,A=e.createFramebuffer();return this._bindUnboundFramebuffer(A),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!i.generateStencilBuffer,i.generateDepthBuffer,r,n),t.is2DArray||e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(P),t._framebuffer=A,t.baseWidth=r,t.baseHeight=n,t.width=r,t.height=n,t.depth=a,t.isReady=!0,t.samples=1,t.generateMipMaps=!!i.generateMipMaps,t.samplingMode=i.samplingMode,t.type=i.type,t.format=i.format,t._generateDepthBuffer=i.generateDepthBuffer,t._generateStencilBuffer=!!i.generateStencilBuffer,this._internalTexturesCache.push(t),t},c.a.prototype.createDepthStencilTexture=function(_,p){if(p.isCube){var i=_.width||_;return this._createDepthStencilCubeTexture(i,p)}else return this._createDepthStencilTexture(_,p)},c.a.prototype._createDepthStencilTexture=function(_,p){var i=this._gl,e=_.layers||0,t=e!==0?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D,r=new s.a(this,s.b.Depth);if(!this._caps.depthTextureExtension)return C.a.Error("Depth texture is not supported by your browser or hardware."),r;var n=Object(l.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},p);this._bindTextureDirectly(t,r,!0),this._setupDepthStencilTexture(r,_,n.generateStencil,n.bilinearFiltering,n.comparisonFunction);var a=n.generateStencil?i.UNSIGNED_INT_24_8:i.UNSIGNED_INT,f=n.generateStencil?i.DEPTH_STENCIL:i.DEPTH_COMPONENT,h=f;return this.webGLVersion>1&&(h=n.generateStencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24),r.is2DArray?i.texImage3D(t,0,h,r.width,r.height,e,0,f,a,null):i.texImage2D(t,0,h,r.width,r.height,0,f,a,null),this._bindTextureDirectly(t,null),r}},502:function(J,j,o){"use strict";o.d(j,"a",function(){return ce});var l=o(436),s=o(447),C=o(442),v=o(538),c=o(454),_=o(441),p=o(455),i=o(533),e=o(476),t=o(459),r=o(435),n="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;r.a.IncludesShadersStore[n]=a;var f={name:n,shader:a},h=o(614),d=o(615),g=o(616),O="geometryPixelShader",P=`#extension GL_EXT_draw_buffers : require
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
`;r.a.ShadersStore[O]=P;var A={name:O,shader:P},b=o(487),L=o(496),D=o(497),U=o(501),y="geometryVertexDeclaration",V=`
uniform mat4 viewProjection;
uniform mat4 view;`;r.a.IncludesShadersStore[y]=V;var I={name:y,shader:V},x=o(674),E="geometryUboDeclaration",z="#include<sceneUboDeclaration>";r.a.IncludesShadersStore[E]=z;var H={name:E,shader:z},F=o(507),Y=o(508),Z=o(488),le=o(489),G=o(675),fe="geometryVertexShader",ee=`precision highp float;
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
`;r.a.ShadersStore[fe]=ee;var te={name:fe,shader:ee},ce=function(){function $(X,ve){ve===void 0&&(ve=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=X,this._ratio=ve,this._useUbo=X.getEngine().supportsUniformBuffers,$._SceneComponentInitialization(this._scene),this._createRenderTargets()}return $.prototype._linkPrePassRenderer=function(X){this._linkedWithPrePass=!0,this._prePassRenderer=X,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(ve){}))},$.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},$.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},$.prototype._forceTextureType=function(X,ve){X===$.POSITION_TEXTURE_TYPE?(this._positionIndex=ve,this._enablePosition=!0):X===$.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=ve,this._enableVelocity=!0):X===$.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=ve,this._enableReflectivity=!0):X===$.DEPTH_TEXTURE_TYPE?this._depthIndex=ve:X===$.NORMAL_TEXTURE_TYPE&&(this._normalIndex=ve)},$.prototype._setAttachments=function(X){this._attachments=X},$.prototype._linkInternalTexture=function(X){this._multiRenderTarget._texture=X},Object.defineProperty($.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(X){this._multiRenderTarget.renderList=X},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),$.prototype.getTextureIndex=function(X){switch(X){case $.POSITION_TEXTURE_TYPE:return this._positionIndex;case $.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case $.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty($.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(X){this._enablePosition=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(X){this._enableVelocity=X,X||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(X){this._enableReflectivity=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),$.prototype.isReady=function(X,ve){var me=X.getMaterial();if(me&&me.disableDepthWrite)return!1;var re=[],he=[s.b.PositionKind,s.b.NormalKind],ie=X.getMesh();if(me){var _e=!1;me.needAlphaTesting()&&me.getAlphaTestTexture()&&(re.push("#define ALPHATEST"),re.push("#define ALPHATEST_UV"+(me.getAlphaTestTexture().coordinatesIndex+1)),_e=!0),me.bumpTexture&&p.a.BumpTextureEnabled&&(re.push("#define BUMP"),re.push("#define BUMP_UV"+(me.bumpTexture.coordinatesIndex+1)),_e=!0),this._enableReflectivity&&(me instanceof p.a&&me.specularTexture?(re.push("#define HAS_SPECULAR"),re.push("#define REFLECTIVITY_UV"+(me.specularTexture.coordinatesIndex+1)),_e=!0):me instanceof i.a&&me.reflectivityTexture&&(re.push("#define HAS_REFLECTIVITY"),re.push("#define REFLECTIVITY_UV"+(me.reflectivityTexture.coordinatesIndex+1)),_e=!0)),_e&&(re.push("#define NEED_UV"),ie.isVerticesDataPresent(s.b.UVKind)&&(he.push(s.b.UVKind),re.push("#define UV1")),ie.isVerticesDataPresent(s.b.UV2Kind)&&(he.push(s.b.UV2Kind),re.push("#define UV2")))}this._linkedWithPrePass&&(re.push("#define PREPASS"),this._depthIndex!==-1&&(re.push("#define DEPTH_INDEX "+this._depthIndex),re.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(re.push("#define NORMAL_INDEX "+this._normalIndex),re.push("#define PREPASS_NORMAL"))),this._enablePosition&&(re.push("#define POSITION"),re.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(re.push("#define VELOCITY"),re.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(ie)===-1&&re.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(re.push("#define REFLECTIVITY"),re.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),ie.useBones&&ie.computeBonesUsingShaders?(he.push(s.b.MatricesIndicesKind),he.push(s.b.MatricesWeightsKind),ie.numBoneInfluencers>4&&(he.push(s.b.MatricesIndicesExtraKind),he.push(s.b.MatricesWeightsExtraKind)),re.push("#define NUM_BONE_INFLUENCERS "+ie.numBoneInfluencers),re.push("#define BonesPerMesh "+(ie.skeleton?ie.skeleton.bones.length+1:0))):re.push("#define NUM_BONE_INFLUENCERS 0");var se=ie.morphTargetManager,N=0;se&&se.numInfluencers>0&&(N=se.numInfluencers,re.push("#define MORPHTARGETS"),re.push("#define NUM_MORPH_INFLUENCERS "+N),se.isUsingTextureForTargets&&re.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(he,ie,N)),ve&&(re.push("#define INSTANCES"),c.a.PushAttributesForInstances(he),X.getRenderingMesh().hasThinInstances&&re.push("#define THIN_INSTANCES")),this._linkedWithPrePass?re.push("#define RENDER_TARGET_COUNT "+this._attachments.length):re.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var m=re.join(`
`);return this._cachedDefines!==m&&(this._cachedDefines=m,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:he,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:m,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:N}},this._scene.getEngine())),this._effect.isReady()},$.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty($.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(X){this._multiRenderTarget.samples=X},enumerable:!1,configurable:!0}),$.prototype.dispose=function(){if(this._resizeObserver){var X=this._scene.getEngine();X.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},$.prototype._assignRenderTargetIndices=function(){var X=2;return this._enablePosition&&(this._positionIndex=X,X++),this._enableVelocity&&(this._velocityIndex=X,X++),this._enableReflectivity&&(this._reflectivityIndex=X,X++),X},$.prototype._createRenderTargets=function(){var X=this,ve=this._scene.getEngine(),me=this._assignRenderTargetIndices();if(this._multiRenderTarget=new v.a("gBuffer",{width:ve.getRenderWidth()*this._ratio,height:ve.getRenderHeight()*this._ratio},me,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=C.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=C.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(he){he.clear(new _.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=ve.onResizeObservable.add(function(){X._multiRenderTarget&&X._multiRenderTarget.resize({width:ve.getRenderWidth()*X._ratio,height:ve.getRenderHeight()*X._ratio})});var re=function(he){var ie=he.getRenderingMesh(),_e=he.getEffectiveMesh(),se=X._scene,N=se.getEngine(),m=he.getMaterial();if(!!m){if(_e._internalAbstractMeshDataInfo._isActiveIntermediate=!1,X._enableVelocity&&!X._previousTransformationMatrices[_e.uniqueId]&&(X._previousTransformationMatrices[_e.uniqueId]={world:l.a.Identity(),viewProjection:se.getTransformMatrix()},ie.skeleton)){var B=ie.skeleton.getTransformMatrices(ie);X._previousBonesTransformationMatrices[ie.uniqueId]=X._copyBonesTransformationMatrices(B,new Float32Array(B.length))}var M=ie._getInstancesRenderList(he._id,!!he.getReplacementMesh());if(!M.mustReturn){var k=N.getCaps().instancedArrays&&(M.visibleInstances[he._id]!==null||ie.hasThinInstances),K=_e.getWorldMatrix();if(X.isReady(he,k)){if(N.enableEffect(X._effect),ie._bind(he,X._effect,m.fillMode),X._useUbo?(c.a.FinalizeSceneUbo(X._scene),c.a.BindSceneUniformBuffer(X._effect,X._scene.getSceneUniformBuffer())):(X._effect.setMatrix("viewProjection",se.getTransformMatrix()),X._effect.setMatrix("view",se.getViewMatrix())),m){var R,q=ie._instanceDataStorage;if(!q.isFrozen&&(m.backFaceCulling||m.overrideMaterialSideOrientation!==null)){var ge=_e._getWorldMatrixDeterminant();R=m.overrideMaterialSideOrientation,R==null&&(R=m.sideOrientation),ge<0&&(R=R===t.a.ClockWiseSideOrientation?t.a.CounterClockWiseSideOrientation:t.a.ClockWiseSideOrientation)}else R=q.sideOrientation;if(m._preBind(X._effect,R),m.needAlphaTesting()){var Te=m.getAlphaTestTexture();Te&&(X._effect.setTexture("diffuseSampler",Te),X._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}m.bumpTexture&&se.getEngine().getCaps().standardDerivatives&&p.a.BumpTextureEnabled&&(X._effect.setFloat3("vBumpInfos",m.bumpTexture.coordinatesIndex,1/m.bumpTexture.level,m.parallaxScaleBias),X._effect.setMatrix("bumpMatrix",m.bumpTexture.getTextureMatrix()),X._effect.setTexture("bumpSampler",m.bumpTexture),X._effect.setFloat2("vTangentSpaceParams",m.invertNormalMapX?-1:1,m.invertNormalMapY?-1:1)),X._enableReflectivity&&(m instanceof p.a&&m.specularTexture?(X._effect.setMatrix("reflectivityMatrix",m.specularTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",m.specularTexture)):m instanceof i.a&&m.reflectivityTexture&&(X._effect.setMatrix("reflectivityMatrix",m.reflectivityTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",m.reflectivityTexture)))}ie.useBones&&ie.computeBonesUsingShaders&&ie.skeleton&&(X._effect.setMatrices("mBones",ie.skeleton.getTransformMatrices(ie)),X._enableVelocity&&X._effect.setMatrices("mPreviousBones",X._previousBonesTransformationMatrices[ie.uniqueId])),c.a.BindMorphTargetParameters(ie,X._effect),ie.morphTargetManager&&ie.morphTargetManager.isUsingTextureForTargets&&ie.morphTargetManager._bind(X._effect),X._enableVelocity&&(X._effect.setMatrix("previousWorld",X._previousTransformationMatrices[_e.uniqueId].world),X._effect.setMatrix("previousViewProjection",X._previousTransformationMatrices[_e.uniqueId].viewProjection)),ie._processRendering(_e,he,X._effect,m.fillMode,M,k,function(Ae,Ce){return X._effect.setMatrix("world",Ce)})}X._enableVelocity&&(X._previousTransformationMatrices[_e.uniqueId].world=K.clone(),X._previousTransformationMatrices[_e.uniqueId].viewProjection=X._scene.getTransformMatrix().clone(),ie.skeleton&&X._copyBonesTransformationMatrices(ie.skeleton.getTransformMatrices(ie),X._previousBonesTransformationMatrices[_e.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(he,ie,_e,se){var N;if(X._linkedWithPrePass){if(!X._prePassRenderer.enabled)return;X._scene.getEngine().bindAttachments(X._attachments)}if(se.length){for(ve.setColorWrite(!1),N=0;N<se.length;N++)re(se.data[N]);ve.setColorWrite(!0)}for(N=0;N<he.length;N++)re(he.data[N]);for(ve.setDepthWrite(!1),N=0;N<ie.length;N++)re(ie.data[N]);if(X.renderTransparentMeshes)for(N=0;N<_e.length;N++)re(_e.data[N]);ve.setDepthWrite(!0)}}},$.prototype._copyBonesTransformationMatrices=function(X,ve){for(var me=0;me<X.length;me++)ve[me]=X[me];return ve},$.DEPTH_TEXTURE_TYPE=0,$.NORMAL_TEXTURE_TYPE=1,$.POSITION_TEXTURE_TYPE=2,$.VELOCITY_TEXTURE_TYPE=3,$.REFLECTIVITY_TEXTURE_TYPE=4,$._SceneComponentInitialization=function(X){throw e.a.WarnImport("GeometryBufferRendererSceneComponent")},$}()},513:function(J,j,o){"use strict";o.d(j,"a",function(){return _}),o.d(j,"b",function(){return p});var l=o(436),s=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],C=[function(i){return 1},function(i){return i.y},function(i){return i.z},function(i){return i.x},function(i){return i.x*i.y},function(i){return i.y*i.z},function(i){return 3*i.z*i.z-1},function(i){return i.x*i.z},function(i){return i.x*i.x-i.y*i.y}],v=function(i,e){return s[i]*C[i](e)},c=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],_=function(){function i(){this.preScaled=!1,this.l00=l.e.Zero(),this.l1_1=l.e.Zero(),this.l10=l.e.Zero(),this.l11=l.e.Zero(),this.l2_2=l.e.Zero(),this.l2_1=l.e.Zero(),this.l20=l.e.Zero(),this.l21=l.e.Zero(),this.l22=l.e.Zero()}return i.prototype.addLight=function(e,t,r){var n=new l.e(t.r,t.g,t.b),a=n.scale(r);this.l00=this.l00.add(a.scale(v(0,e))),this.l1_1=this.l1_1.add(a.scale(v(1,e))),this.l10=this.l10.add(a.scale(v(2,e))),this.l11=this.l11.add(a.scale(v(3,e))),this.l2_2=this.l2_2.add(a.scale(v(4,e))),this.l2_1=this.l2_1.add(a.scale(v(5,e))),this.l20=this.l20.add(a.scale(v(6,e))),this.l21=this.l21.add(a.scale(v(7,e))),this.l22=this.l22.add(a.scale(v(8,e)))},i.prototype.scaleInPlace=function(e){this.l00.scaleInPlace(e),this.l1_1.scaleInPlace(e),this.l10.scaleInPlace(e),this.l11.scaleInPlace(e),this.l2_2.scaleInPlace(e),this.l2_1.scaleInPlace(e),this.l20.scaleInPlace(e),this.l21.scaleInPlace(e),this.l22.scaleInPlace(e)},i.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(c[0]),this.l1_1.scaleInPlace(c[1]),this.l10.scaleInPlace(c[2]),this.l11.scaleInPlace(c[3]),this.l2_2.scaleInPlace(c[4]),this.l2_1.scaleInPlace(c[5]),this.l20.scaleInPlace(c[6]),this.l21.scaleInPlace(c[7]),this.l22.scaleInPlace(c[8])},i.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},i.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(s[0]),this.l1_1.scaleInPlace(s[1]),this.l10.scaleInPlace(s[2]),this.l11.scaleInPlace(s[3]),this.l2_2.scaleInPlace(s[4]),this.l2_1.scaleInPlace(s[5]),this.l20.scaleInPlace(s[6]),this.l21.scaleInPlace(s[7]),this.l22.scaleInPlace(s[8])},i.FromArray=function(e){var t=new i;return l.e.FromArrayToRef(e[0],0,t.l00),l.e.FromArrayToRef(e[1],0,t.l1_1),l.e.FromArrayToRef(e[2],0,t.l10),l.e.FromArrayToRef(e[3],0,t.l11),l.e.FromArrayToRef(e[4],0,t.l2_2),l.e.FromArrayToRef(e[5],0,t.l2_1),l.e.FromArrayToRef(e[6],0,t.l20),l.e.FromArrayToRef(e[7],0,t.l21),l.e.FromArrayToRef(e[8],0,t.l22),t},i.FromPolynomial=function(e){var t=new i;return t.l00=e.xx.scale(.376127).add(e.yy.scale(.376127)).add(e.zz.scale(.376126)),t.l1_1=e.y.scale(.977204),t.l10=e.z.scale(.977204),t.l11=e.x.scale(.977204),t.l2_2=e.xy.scale(1.16538),t.l2_1=e.yz.scale(1.16538),t.l20=e.zz.scale(1.34567).subtract(e.xx.scale(.672834)).subtract(e.yy.scale(.672834)),t.l21=e.zx.scale(1.16538),t.l22=e.xx.scale(1.16538).subtract(e.yy.scale(1.16538)),t.l1_1.scaleInPlace(-1),t.l11.scaleInPlace(-1),t.l2_1.scaleInPlace(-1),t.l21.scaleInPlace(-1),t.scaleInPlace(Math.PI),t},i}(),p=function(){function i(){this.x=l.e.Zero(),this.y=l.e.Zero(),this.z=l.e.Zero(),this.xx=l.e.Zero(),this.yy=l.e.Zero(),this.zz=l.e.Zero(),this.xy=l.e.Zero(),this.yz=l.e.Zero(),this.zx=l.e.Zero()}return Object.defineProperty(i.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=_.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),i.prototype.addAmbient=function(e){var t=new l.e(e.r,e.g,e.b);this.xx=this.xx.add(t),this.yy=this.yy.add(t),this.zz=this.zz.add(t)},i.prototype.scaleInPlace=function(e){this.x.scaleInPlace(e),this.y.scaleInPlace(e),this.z.scaleInPlace(e),this.xx.scaleInPlace(e),this.yy.scaleInPlace(e),this.zz.scaleInPlace(e),this.yz.scaleInPlace(e),this.zx.scaleInPlace(e),this.xy.scaleInPlace(e)},i.FromHarmonics=function(e){var t=new i;return t._harmonics=e,t.x=e.l11.scale(1.02333).scale(-1),t.y=e.l1_1.scale(1.02333).scale(-1),t.z=e.l10.scale(1.02333),t.xx=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).add(e.l22.scale(.429043)),t.yy=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).subtract(e.l22.scale(.429043)),t.zz=e.l00.scale(.886277).add(e.l20.scale(.495417)),t.yz=e.l2_1.scale(.858086).scale(-1),t.zx=e.l21.scale(.858086).scale(-1),t.xy=e.l2_2.scale(.858086),t.scaleInPlace(1/Math.PI),t},i.FromArray=function(e){var t=new i;return l.e.FromArrayToRef(e[0],0,t.x),l.e.FromArrayToRef(e[1],0,t.y),l.e.FromArrayToRef(e[2],0,t.z),l.e.FromArrayToRef(e[3],0,t.xx),l.e.FromArrayToRef(e[4],0,t.yy),l.e.FromArrayToRef(e[5],0,t.zz),l.e.FromArrayToRef(e[6],0,t.yz),l.e.FromArrayToRef(e[7],0,t.zx),l.e.FromArrayToRef(e[8],0,t.xy),t},i}()},514:function(J,j,o){"use strict";o.d(j,"a",function(){return C});var l=o(442),s=o(545),C=function(){function v(){}return v.GetEnvironmentBRDFTexture=function(c){if(!c.environmentBRDFTexture){var _=c.useDelayedTextureLoading;c.useDelayedTextureLoading=!1;var p=c._blockEntityCollection;c._blockEntityCollection=!1;var i=l.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,c,!0,!1,l.a.BILINEAR_SAMPLINGMODE);c._blockEntityCollection=p;var e=c.getEngine().getLoadedTexturesCache(),t=e.indexOf(i.getInternalTexture());t!==-1&&e.splice(t,1),i.isRGBD=!0,i.wrapU=l.a.CLAMP_ADDRESSMODE,i.wrapV=l.a.CLAMP_ADDRESSMODE,c.environmentBRDFTexture=i,c.useDelayedTextureLoading=_,s.a.ExpandRGBDTexture(i)}return c.environmentBRDFTexture},v._instanceNumber=0,v._environmentBRDFBase64Texture="data:image/png;base64,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",v}()},516:function(J,j,o){"use strict";o.d(j,"a",function(){return z});var l=o(434),s=o(439),C=o(443),v=o(438),c=o(441),_=o(445),p=o(448),i=o(447),e=o(442),t=o(458),r=o(459),n=o(454),a=o(435),f="glowMapGenerationPixelShader",h=`#ifdef DIFFUSE
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
}`;a.a.ShadersStore[f]=h;var d={name:f,shader:h},g=o(487),O=o(496),P=o(497),A=o(501),b=o(507),L=o(508),D=o(488),U=o(489),y="glowMapGenerationVertexShader",V=`
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
}`;a.a.ShadersStore[y]=V;var I={name:y,shader:V},x=o(476),E=o(512),z=function(){function H(F,Y){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new c.b},this.neutralColor=new c.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new v.c,this.onBeforeRenderMainTextureObservable=new v.c,this.onBeforeComposeObservable=new v.c,this.onBeforeRenderMeshToEffect=new v.c,this.onAfterRenderMeshToEffect=new v.c,this.onAfterComposeObservable=new v.c,this.onSizeChangedObservable=new v.c,this.name=F,this._scene=Y||p.a.LastCreatedScene,H._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(H.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(H.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(F){this._effectLayerOptions.renderingGroupId=F},enumerable:!1,configurable:!0}),H.prototype._init=function(F){this._effectLayerOptions=Object(l.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},F),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},H.prototype._generateIndexBuffer=function(){var F=[];F.push(0),F.push(1),F.push(2),F.push(0),F.push(2),F.push(3),this._indexBuffer=this._engine.createIndexBuffer(F)},H.prototype._generateVertexBuffer=function(){var F=[];F.push(1,1),F.push(-1,1),F.push(-1,-1),F.push(1,-1);var Y=new i.b(this._engine,F,i.b.PositionKind,!1,!1,2);this._vertexBuffers[i.b.PositionKind]=Y},H.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?_.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?_.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},H.prototype._createMainTexture=function(){var F=this;if(this._mainTexture=new t.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=e.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=e.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(e.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(Z,le,G,fe){F.onBeforeRenderMainTextureObservable.notifyObservers(F);var ee,te=F._scene.getEngine();if(fe.length){for(te.setColorWrite(!1),ee=0;ee<fe.length;ee++)F._renderSubMesh(fe.data[ee]);te.setColorWrite(!0)}for(ee=0;ee<Z.length;ee++)F._renderSubMesh(Z.data[ee]);for(ee=0;ee<le.length;ee++)F._renderSubMesh(le.data[ee]);var ce=te.getAlphaMode();for(ee=0;ee<G.length;ee++)F._renderSubMesh(G.data[ee],!0);te.setAlphaMode(ce)},this._mainTexture.onClearObservable.add(function(Z){Z.clear(F.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var Y=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){F._scene.getBoundingBoxRenderer().enabled=!F.disableBoundingBoxesFromEffectLayer&&Y}),this._mainTexture.onAfterUnbindObservable.add(function(){F._scene.getBoundingBoxRenderer().enabled=Y})}},H.prototype._addCustomEffectDefines=function(F){},H.prototype._isReady=function(F,Y,Z){var le=F.getMaterial();if(!le||!le.isReadyForSubMesh(F.getMesh(),F,Y))return!1;var G=[],fe=[i.b.PositionKind],ee=F.getMesh(),te=!1,ce=!1;if(le){var $=le.needAlphaTesting(),X=le.getAlphaTestTexture(),ve=X&&X.hasAlpha&&(le.useAlphaFromDiffuseTexture||le._useAlphaFromAlbedoTexture);X&&($||ve)&&(G.push("#define DIFFUSE"),ee.isVerticesDataPresent(i.b.UV2Kind)&&X.coordinatesIndex===1?(G.push("#define DIFFUSEUV2"),ce=!0):ee.isVerticesDataPresent(i.b.UVKind)&&(G.push("#define DIFFUSEUV1"),te=!0),$&&(G.push("#define ALPHATEST"),G.push("#define ALPHATESTVALUE 0.4")));var me=le.opacityTexture;me&&(G.push("#define OPACITY"),ee.isVerticesDataPresent(i.b.UV2Kind)&&me.coordinatesIndex===1?(G.push("#define OPACITYUV2"),ce=!0):ee.isVerticesDataPresent(i.b.UVKind)&&(G.push("#define OPACITYUV1"),te=!0))}Z&&(G.push("#define EMISSIVE"),ee.isVerticesDataPresent(i.b.UV2Kind)&&Z.coordinatesIndex===1?(G.push("#define EMISSIVEUV2"),ce=!0):ee.isVerticesDataPresent(i.b.UVKind)&&(G.push("#define EMISSIVEUV1"),te=!0)),ee.isVerticesDataPresent(i.b.ColorKind)&&ee.hasVertexAlpha&&(fe.push(i.b.ColorKind),G.push("#define VERTEXALPHA")),te&&(fe.push(i.b.UVKind),G.push("#define UV1")),ce&&(fe.push(i.b.UV2Kind),G.push("#define UV2"));var re=new E.a;if(ee.useBones&&ee.computeBonesUsingShaders){fe.push(i.b.MatricesIndicesKind),fe.push(i.b.MatricesWeightsKind),ee.numBoneInfluencers>4&&(fe.push(i.b.MatricesIndicesExtraKind),fe.push(i.b.MatricesWeightsExtraKind)),G.push("#define NUM_BONE_INFLUENCERS "+ee.numBoneInfluencers);var he=ee.skeleton;he&&he.isUsingTextureForMatrices?G.push("#define BONETEXTURE"):G.push("#define BonesPerMesh "+(he?he.bones.length+1:0)),ee.numBoneInfluencers>0&&re.addCPUSkinningFallback(0,ee)}else G.push("#define NUM_BONE_INFLUENCERS 0");var ie=ee.morphTargetManager,_e=0;ie&&ie.numInfluencers>0&&(G.push("#define MORPHTARGETS"),_e=ie.numInfluencers,G.push("#define NUM_MORPH_INFLUENCERS "+_e),ie.isUsingTextureForTargets&&G.push("#define MORPHTARGETS_TEXTURE"),n.a.PrepareAttributesForMorphTargetsInfluencers(fe,ee,_e)),Y&&(G.push("#define INSTANCES"),n.a.PushAttributesForInstances(fe),F.getRenderingMesh().hasThinInstances&&G.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(G);var se=G.join(`
`);return this._cachedDefines!==se&&(this._cachedDefines=se,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",fe,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],se,re,void 0,void 0,{maxSimultaneousMorphTargets:_e})),this._effectLayerMapGenerationEffect.isReady()},H.prototype.render=function(){var F=this._mergeEffect;if(!!F.isReady()){for(var Y=0;Y<this._postProcesses.length;Y++)if(!this._postProcesses[Y].isReady())return;var Z=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),Z.enableEffect(F),Z.setState(!1),Z.bindBuffers(this._vertexBuffers,this._indexBuffer,F);var le=Z.getAlphaMode();Z.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(F),Z.setAlphaMode(le),this.onAfterComposeObservable.notifyObservers(this);var G=this._mainTexture.getSize();this._setMainTextureSize(),(G.width!==this._mainTextureDesiredSize.width||G.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},H.prototype.hasMesh=function(F){return this.renderingGroupId===-1||F.renderingGroupId===this.renderingGroupId},H.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},H.prototype._shouldRenderMesh=function(F){return!0},H.prototype._canRenderMesh=function(F,Y){return!Y.needAlphaBlendingForMesh(F)},H.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},H.prototype._renderSubMesh=function(F,Y){var Z=this,le;if(Y===void 0&&(Y=!1),!!this.shouldRender()){var G=F.getMaterial(),fe=F.getMesh(),ee=F.getReplacementMesh(),te=F.getRenderingMesh(),ce=F.getEffectiveMesh(),$=this._scene,X=$.getEngine();if(ce._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!G&&!!this._canRenderMesh(te,G)){var ve=(le=te.overrideMaterialSideOrientation)!==null&&le!==void 0?le:G.sideOrientation,me=te._getWorldMatrixDeterminant();me<0&&(ve=ve===r.a.ClockWiseSideOrientation?r.a.CounterClockWiseSideOrientation:r.a.ClockWiseSideOrientation);var re=ve===r.a.ClockWiseSideOrientation;X.setState(G.backFaceCulling,G.zOffset,void 0,re);var he=te._getInstancesRenderList(F._id,!!ee);if(!he.mustReturn&&!!this._shouldRenderMesh(te)){var ie=he.hardwareInstancedRendering[F._id]||te.hasThinInstances;if(this._setEmissiveTextureAndColor(te,F,G),this.onBeforeRenderMeshToEffect.notifyObservers(fe),this._useMeshMaterial(te))te.render(F,ie,ee||void 0);else if(this._isReady(F,ie,this._emissiveTextureAndColor.texture)){X.enableEffect(this._effectLayerMapGenerationEffect),te._bind(F,this._effectLayerMapGenerationEffect,r.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",$.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",ce.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var _e=G.needAlphaTesting(),se=G.getAlphaTestTexture(),N=se&&se.hasAlpha&&(G.useAlphaFromDiffuseTexture||G._useAlphaFromAlbedoTexture);if(se&&(_e||N)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",se);var m=se.getTextureMatrix();m&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",m)}var B=G.opacityTexture;if(B){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",B),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",B.level);var m=B.getTextureMatrix();m&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",m)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),te.useBones&&te.computeBonesUsingShaders&&te.skeleton){var M=te.skeleton;if(M.isUsingTextureForMatrices){var k=M.getTransformMatrixTexture(te);if(!k)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",k),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(M.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",M.getTransformMatrices(te))}n.a.BindMorphTargetParameters(te,this._effectLayerMapGenerationEffect),te.morphTargetManager&&te.morphTargetManager.isUsingTextureForTargets&&te.morphTargetManager._bind(this._effectLayerMapGenerationEffect),Y&&X.setAlphaMode(G.alphaMode),te._processRendering(ce,F,this._effectLayerMapGenerationEffect,G.fillMode,he,ie,function(K,R){return Z._effectLayerMapGenerationEffect.setMatrix("world",R)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(fe)}}}},H.prototype._useMeshMaterial=function(F){return!1},H.prototype._rebuild=function(){var F=this._vertexBuffers[i.b.PositionKind];F&&F._rebuild(),this._generateIndexBuffer()},H.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var F=0;F<this._postProcesses.length;F++)this._postProcesses[F]&&this._postProcesses[F].dispose();this._postProcesses=[];for(var F=0;F<this._textures.length;F++)this._textures[F]&&this._textures[F].dispose();this._textures=[]},H.prototype.dispose=function(){var F=this._vertexBuffers[i.b.PositionKind];F&&(F.dispose(),this._vertexBuffers[i.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var Y=this._scene.effectLayers.indexOf(this,0);Y>-1&&this._scene.effectLayers.splice(Y,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},H.prototype.getClassName=function(){return"EffectLayer"},H.Parse=function(F,Y,Z){var le=C.b.Instantiate(F.customType);return le.Parse(F,Y,Z)},H._SceneComponentInitialization=function(F){throw x.a.WarnImport("EffectLayerSceneComponent")},Object(l.c)([Object(s.c)()],H.prototype,"name",void 0),Object(l.c)([Object(s.f)()],H.prototype,"neutralColor",void 0),Object(l.c)([Object(s.c)()],H.prototype,"isEnabled",void 0),Object(l.c)([Object(s.d)()],H.prototype,"camera",null),Object(l.c)([Object(s.c)()],H.prototype,"renderingGroupId",null),Object(l.c)([Object(s.c)()],H.prototype,"disableBoundingBoxesFromEffectLayer",void 0),H}()},517:function(J,j,o){"use strict";o.d(j,"a",function(){return a});var l=o(434),s=o(442),C=o(444),v=o(435),c="fxaaPixelShader",_=`uniform sampler2D textureSampler;
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
}`;v.a.ShadersStore[c]=_;var p={name:c,shader:_},i="fxaaVertexShader",e=`
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
}`;v.a.ShadersStore[i]=e;var t={name:i,shader:e},r=o(437),n=o(439),a=function(f){Object(l.d)(h,f);function h(d,g,O,P,A,b,L){O===void 0&&(O=null),L===void 0&&(L=0);var D=f.call(this,d,"fxaa",["texelSize"],null,g,O,P||s.a.BILINEAR_SAMPLINGMODE,A,b,null,L,"fxaa",void 0,!0)||this,U=D._getDefines();return D.updateEffect(U),D.onApplyObservable.add(function(y){var V=D.texelSize;y.setFloat2("texelSize",V.x,V.y)}),D}return h.prototype.getClassName=function(){return"FxaaPostProcess"},h.prototype._getDefines=function(){var d=this.getEngine();if(!d)return null;var g=d.getGlInfo();return g&&g.renderer&&g.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},h._Parse=function(d,g,O,P){return n.a.Parse(function(){return new h(d.name,d.options,g,d.renderTargetSamplingMode,O.getEngine(),d.reusable)},d,O,P)},h}(C.a);r.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var l=o(434),s=o(439),C=o(491),v=o(444),c=o(448),_=o(644),p=o(534),i=function(e){Object(l.d)(t,e);function t(r,n,a,f,h,d,g,O){a===void 0&&(a=null),g===void 0&&(g=0);var P=e.call(this,r,"imageProcessing",[],[],n,a,f,h,d,null,g,"postprocess",null,!0)||this;return P._fromLinearSpace=!0,P._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},O?(O.applyByPostProcess=!0,P._attachImageProcessingConfiguration(O,!0),P.fromLinearSpace=!1):(P._attachImageProcessingConfiguration(null,!0),P.imageProcessingConfiguration.applyByPostProcess=!0),P.onApply=function(A){P.imageProcessingConfiguration.bind(A,P.aspectRatio)},P}return Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(r){r.applyByPostProcess=!0,this._attachImageProcessingConfiguration(r)},enumerable:!1,configurable:!0}),t.prototype._attachImageProcessingConfiguration=function(r,n){var a=this;if(n===void 0&&(n=!1),r!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),r)this._imageProcessingConfiguration=r;else{var f=null,h=this.getEngine(),d=this.getCamera();if(d)f=d.getScene();else if(h&&h.scenes){var g=h.scenes;f=g[g.length-1]}else f=c.a.LastCreatedScene;f?this._imageProcessingConfiguration=f.imageProcessingConfiguration:this._imageProcessingConfiguration=new C.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),n||this._updateParameters()}},Object.defineProperty(t.prototype,"isSupported",{get:function(){var r=this.getEffect();return!r||r.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(r){this.imageProcessingConfiguration.colorCurves=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(r){this.imageProcessingConfiguration.colorCurvesEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(r){this.imageProcessingConfiguration.colorGradingTexture=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(r){this.imageProcessingConfiguration.colorGradingEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(r){this.imageProcessingConfiguration.exposure=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(r){this._imageProcessingConfiguration.toneMappingEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(r){this._imageProcessingConfiguration.toneMappingType=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(r){this.imageProcessingConfiguration.contrast=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(r){this.imageProcessingConfiguration.vignetteStretch=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(r){this.imageProcessingConfiguration.vignetteCentreX=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(r){this.imageProcessingConfiguration.vignetteCentreY=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(r){this.imageProcessingConfiguration.vignetteWeight=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(r){this.imageProcessingConfiguration.vignetteColor=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(r){this.imageProcessingConfiguration.vignetteCameraFov=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(r){this.imageProcessingConfiguration.vignetteBlendMode=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(r){this.imageProcessingConfiguration.vignetteEnabled=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(r){this._fromLinearSpace!==r&&(this._fromLinearSpace=r,this._updateParameters())},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"ImageProcessingPostProcess"},t.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var r="";for(var n in this._defines)this._defines[n]&&(r+="#define "+n+`;\r
`);var a=["textureSampler"],f=["scale"];C.a&&(C.a.PrepareSamplers(a,this._defines),C.a.PrepareUniforms(f,this._defines)),this.updateEffect(r,f,a)},t.prototype.dispose=function(r){e.prototype.dispose.call(this,r),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(l.c)([Object(s.c)()],t.prototype,"_fromLinearSpace",void 0),t}(v.a)},521:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var l=o(436),s=o(450),C=o(513),v=o(515),c=o(441),_=function(){function i(e,t,r,n){this.name=e,this.worldAxisForNormal=t,this.worldAxisForFileX=r,this.worldAxisForFileY=n}return i}(),p=function(){function i(){}return i.ConvertCubeMapTextureToSphericalPolynomial=function(e){var t=this,r;if(!e.isCube)return null;(r=e.getScene())===null||r===void 0||r.getEngine().flushFramebuffer();var n=e.getSize().width,a=e.readPixels(0,void 0,void 0,!1),f=e.readPixels(1,void 0,void 0,!1),h,d;e.isRenderTarget?(h=e.readPixels(3,void 0,void 0,!1),d=e.readPixels(2,void 0,void 0,!1)):(h=e.readPixels(2,void 0,void 0,!1),d=e.readPixels(3,void 0,void 0,!1));var g=e.readPixels(4,void 0,void 0,!1),O=e.readPixels(5,void 0,void 0,!1),P=e.gammaSpace,A=5,b=0;return(e.textureType==1||e.textureType==2)&&(b=1),new Promise(function(L,D){Promise.all([f,a,h,d,g,O]).then(function(U){var y=U[0],V=U[1],I=U[2],x=U[3],E=U[4],z=U[5],H={size:n,right:V,left:y,up:I,down:x,front:E,back:z,format:A,type:b,gammaSpace:P};L(t.ConvertCubeMapToSphericalPolynomial(H))})})},i.ConvertCubeMapToSphericalPolynomial=function(e){for(var t=new C.a,r=0,n=2/e.size,a=n,f=n*.5-1,h=0;h<6;h++)for(var d=this.FileFaces[h],g=e[d.name],O=f,P=e.format===5?4:3,A=0;A<e.size;A++){for(var b=f,L=0;L<e.size;L++){var D=d.worldAxisForFileX.scale(b).add(d.worldAxisForFileY.scale(O)).add(d.worldAxisForNormal);D.normalize();var U=Math.pow(1+b*b+O*O,-3/2),y=g[A*e.size*P+L*P+0],V=g[A*e.size*P+L*P+1],I=g[A*e.size*P+L*P+2];isNaN(y)&&(y=0),isNaN(V)&&(V=0),isNaN(I)&&(I=0),e.type===0&&(y/=255,V/=255,I/=255),e.gammaSpace&&(y=Math.pow(s.a.Clamp(y),v.c),V=Math.pow(s.a.Clamp(V),v.c),I=Math.pow(s.a.Clamp(I),v.c));var x=4096;y=s.a.Clamp(y,0,x),V=s.a.Clamp(V,0,x),I=s.a.Clamp(I,0,x);var E=new c.a(y,V,I);t.addLight(D,E,U),r+=U,b+=n}O+=a}var z=4*Math.PI,H=6,F=z*H/6,Y=F/r;return t.scaleInPlace(Y),t.convertIncidentRadianceToIrradiance(),t.convertIrradianceToLambertianRadiance(),C.b.FromHarmonics(t)},i.FileFaces=[new _("right",new l.e(1,0,0),new l.e(0,0,-1),new l.e(0,-1,0)),new _("left",new l.e(-1,0,0),new l.e(0,0,1),new l.e(0,-1,0)),new _("up",new l.e(0,1,0),new l.e(1,0,0),new l.e(0,0,1)),new _("down",new l.e(0,-1,0),new l.e(1,0,0),new l.e(0,0,-1)),new _("front",new l.e(0,0,1),new l.e(1,0,0),new l.e(0,-1,0)),new _("back",new l.e(0,0,-1),new l.e(-1,0,0),new l.e(0,-1,0))],i}()},522:function(J,j,o){"use strict";var l=o(434),s=o(456),C=o(440),v=o(467);v.a.prototype.createRenderTargetCubeTexture=function(c,_){var p=Object(l.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},_);p.generateStencilBuffer=p.generateDepthBuffer&&p.generateStencilBuffer,(p.type===1&&!this._caps.textureFloatLinearFiltering||p.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(p.samplingMode=1);var i=this._gl,e=new s.a(this,s.b.RenderTarget);this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,e,!0);var t=this._getSamplingParameters(p.samplingMode,p.generateMipMaps);p.type===1&&!this._caps.textureFloat&&(p.type=0,C.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAG_FILTER,t.mag),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MIN_FILTER,t.min),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);for(var r=0;r<6;r++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this._getRGBABufferInternalSizedFormat(p.type,p.format),c,c,0,this._getInternalFormat(p.format),this._getWebGLTextureType(p.type),null);var n=i.createFramebuffer();return this._bindUnboundFramebuffer(n),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(p.generateStencilBuffer,p.generateDepthBuffer,c,c),p.generateMipMaps&&i.generateMipmap(i.TEXTURE_CUBE_MAP),this._bindTextureDirectly(i.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),e._framebuffer=n,e.width=c,e.height=c,e.isReady=!0,e.isCube=!0,e.samples=1,e.generateMipMaps=p.generateMipMaps,e.samplingMode=p.samplingMode,e.type=p.type,e.format=p.format,e._generateDepthBuffer=p.generateDepthBuffer,e._generateStencilBuffer=p.generateStencilBuffer,this._internalTexturesCache.push(e),e}},523:function(J,j,o){"use strict";var l=o(521),s=o(477);Object.defineProperty(s.a.prototype,"sphericalPolynomial",{get:function(){var C=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=l.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(v){C._texture._sphericalPolynomial=v,C._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(C){this._texture&&(this._texture._sphericalPolynomial=C)},enumerable:!0,configurable:!0})},529:function(J,j,o){"use strict";o.d(j,"b",function(){return Be}),o.d(j,"a",function(){return Bt});var l=o(434),s=o(439),C=o(440),v=o(490),c=o(514),_=o(449),p=o(436),i=o(447),e=o(626),t=o(480),r=o(454),n=function(){function W(S){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new p.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=S}return W.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},W.prototype.isReadyForSubMesh=function(S,u){return!(S._areTexturesDirty&&u.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},W.prototype.prepareDefines=function(S,u,T){this._isEnabled?(S.ANISOTROPIC=this._isEnabled,this._isEnabled&&!u.isVerticesDataPresent(i.b.TangentKind)&&(S._needUVs=!0,S.MAINUV1=!0),S._areTexturesDirty&&T.texturesEnabled&&(this._texture&&t.a.AnisotropicTextureEnabled?r.a.PrepareDefinesForMergedUV(this._texture,S,"ANISOTROPIC_TEXTURE"):S.ANISOTROPIC_TEXTURE=!1)):(S.ANISOTROPIC=!1,S.ANISOTROPIC_TEXTURE=!1)},W.prototype.bindForSubMesh=function(S,u,T){(!S.useUbo||!T||!S.isSync)&&(this._texture&&t.a.AnisotropicTextureEnabled&&(S.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),r.a.BindTextureMatrix(this._texture,S,"anisotropy")),S.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),u.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&S.setTexture("anisotropySampler",this._texture)},W.prototype.hasTexture=function(S){return this._texture===S},W.prototype.getActiveTextures=function(S){this._texture&&S.push(this._texture)},W.prototype.getAnimatables=function(S){this._texture&&this._texture.animations&&this._texture.animations.length>0&&S.push(this._texture)},W.prototype.dispose=function(S){S&&this._texture&&this._texture.dispose()},W.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},W.AddFallbacks=function(S,u,T){return S.ANISOTROPIC&&u.addFallback(T++,"ANISOTROPIC"),T},W.AddUniforms=function(S){S.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},W.PrepareUniformBuffer=function(S){S.addUniform("vAnisotropy",3),S.addUniform("vAnisotropyInfos",2),S.addUniform("anisotropyMatrix",16)},W.AddSamplers=function(S){S.push("anisotropySampler")},W.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},W.prototype.serialize=function(){return s.a.Serialize(this)},W.prototype.parse=function(S,u,T){var w=this;s.a.Parse(function(){return w},S,u,T)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)()],W.prototype,"intensity",void 0),Object(l.c)([Object(s.n)()],W.prototype,"direction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"texture",void 0),W}(),a=function(){function W(S){this._useEnergyConservation=W.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=W.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=W.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=W.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=W.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=W.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=W.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=W.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=S}return W.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},W.prototype.prepareDefines=function(S){S.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,S.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,S.SPHERICAL_HARMONICS=this._useSphericalHarmonics,S.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},W.prototype.getClassName=function(){return"PBRBRDFConfiguration"},W.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},W.prototype.serialize=function(){return s.a.Serialize(this)},W.prototype.parse=function(S,u,T){var w=this;s.a.Parse(function(){return w},S,u,T)},W.DEFAULT_USE_ENERGY_CONSERVATION=!0,W.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,W.DEFAULT_USE_SPHERICAL_HARMONICS=!0,W.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],W.prototype,"useEnergyConservation",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],W.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],W.prototype,"useSphericalHarmonics",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],W.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),W}(),f=o(441),h=function(){function W(S){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=f.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=S}return W.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},W.prototype.isReadyForSubMesh=function(S,u){return!(S._areTexturesDirty&&u.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&t.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},W.prototype.prepareDefines=function(S,u){var T;this._isEnabled?(S.SHEEN=this._isEnabled,S.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,S.SHEEN_ROUGHNESS=this._roughness!==null,S.SHEEN_ALBEDOSCALING=this._albedoScaling,S.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,S.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((T=this._textureRoughness)===null||T===void 0?void 0:T._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),S._areTexturesDirty&&u.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled?r.a.PrepareDefinesForMergedUV(this._texture,S,"SHEEN_TEXTURE"):S.SHEEN_TEXTURE=!1,this._textureRoughness&&t.a.SheenTextureEnabled?r.a.PrepareDefinesForMergedUV(this._textureRoughness,S,"SHEEN_TEXTURE_ROUGHNESS"):S.SHEEN_TEXTURE_ROUGHNESS=!1)):(S.SHEEN=!1,S.SHEEN_TEXTURE=!1,S.SHEEN_TEXTURE_ROUGHNESS=!1,S.SHEEN_LINKWITHALBEDO=!1,S.SHEEN_ROUGHNESS=!1,S.SHEEN_ALBEDOSCALING=!1,S.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,S.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},W.prototype.bindForSubMesh=function(S,u,T,w){var ae,pe,ne,Se,oe,Q,de,Ee,Re=w._materialDefines,ue=Re.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!S.useUbo||!T||!S.isSync)&&(ue&&t.a.SheenTextureEnabled?(S.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),r.a.BindTextureMatrix(this._texture,S,"sheen")):(this._texture||this._textureRoughness)&&t.a.SheenTextureEnabled&&(S.updateFloat4("vSheenInfos",(pe=(ae=this._texture)===null||ae===void 0?void 0:ae.coordinatesIndex)!==null&&pe!==void 0?pe:0,(Se=(ne=this._texture)===null||ne===void 0?void 0:ne.level)!==null&&Se!==void 0?Se:0,(Q=(oe=this._textureRoughness)===null||oe===void 0?void 0:oe.coordinatesIndex)!==null&&Q!==void 0?Q:0,(Ee=(de=this._textureRoughness)===null||de===void 0?void 0:de.level)!==null&&Ee!==void 0?Ee:0),this._texture&&r.a.BindTextureMatrix(this._texture,S,"sheen"),this._textureRoughness&&!ue&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&r.a.BindTextureMatrix(this._textureRoughness,S,"sheenRoughness")),S.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&S.updateFloat("vSheenRoughness",this._roughness)),u.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&S.setTexture("sheenSampler",this._texture),this._textureRoughness&&!ue&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&t.a.SheenTextureEnabled&&S.setTexture("sheenRoughnessSampler",this._textureRoughness))},W.prototype.hasTexture=function(S){return this._texture===S||this._textureRoughness===S},W.prototype.getActiveTextures=function(S){this._texture&&S.push(this._texture),this._textureRoughness&&S.push(this._textureRoughness)},W.prototype.getAnimatables=function(S){this._texture&&this._texture.animations&&this._texture.animations.length>0&&S.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&S.push(this._textureRoughness)},W.prototype.dispose=function(S){var u,T;S&&((u=this._texture)===null||u===void 0||u.dispose(),(T=this._textureRoughness)===null||T===void 0||T.dispose())},W.prototype.getClassName=function(){return"PBRSheenConfiguration"},W.AddFallbacks=function(S,u,T){return S.SHEEN&&u.addFallback(T++,"SHEEN"),T},W.AddUniforms=function(S){S.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},W.PrepareUniformBuffer=function(S){S.addUniform("vSheenColor",4),S.addUniform("vSheenRoughness",1),S.addUniform("vSheenInfos",4),S.addUniform("sheenMatrix",16),S.addUniform("sheenRoughnessMatrix",16)},W.AddSamplers=function(S){S.push("sheenSampler"),S.push("sheenRoughnessSampler")},W.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},W.prototype.serialize=function(){return s.a.Serialize(this)},W.prototype.parse=function(S,u,T){var w=this;s.a.Parse(function(){return w},S,u,T)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"linkSheenWithAlbedo",void 0),Object(l.c)([Object(s.c)()],W.prototype,"intensity",void 0),Object(l.c)([Object(s.e)()],W.prototype,"color",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"texture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"roughness",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"textureRoughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"albedoScaling",void 0),W}(),d=o(450),g=function(){function W(S,u,T){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=f.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=f.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=S,this._internalMarkScenePrePassDirty=u,this._scene=T}return Object.defineProperty(W.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(S){!this._scene.enableSubSurfaceForPrePass()||S&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(S))},enumerable:!1,configurable:!0}),Object.defineProperty(W.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(S){S>=1?this._volumeIndexOfRefraction=S:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),W.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},W.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},W.prototype.isReadyForSubMesh=function(S,u){if(S._areTexturesDirty&&u.texturesEnabled){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var T=this._getRefractionTexture(u);if(T&&t.a.RefractionTextureEnabled&&!T.isReadyOrNotBlocking())return!1}return!0},W.prototype.prepareDefines=function(S,u){if(S._areTexturesDirty&&(S.SUBSURFACE=!1,S.SS_TRANSLUCENCY=this._isTranslucencyEnabled,S.SS_SCATTERING=this._isScatteringEnabled,S.SS_THICKNESSANDMASK_TEXTURE=!1,S.SS_MASK_FROM_THICKNESS_TEXTURE=!1,S.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,S.SS_REFRACTION=!1,S.SS_REFRACTIONMAP_3D=!1,S.SS_GAMMAREFRACTION=!1,S.SS_RGBDREFRACTION=!1,S.SS_LINEARSPECULARREFRACTION=!1,S.SS_REFRACTIONMAP_OPPOSITEZ=!1,S.SS_LODINREFRACTIONALPHA=!1,S.SS_LINKREFRACTIONTOTRANSPARENCY=!1,S.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(S.SUBSURFACE=!0,S._areTexturesDirty&&u.texturesEnabled&&this._thicknessTexture&&t.a.ThicknessTextureEnabled&&r.a.PrepareDefinesForMergedUV(this._thicknessTexture,S,"SS_THICKNESSANDMASK_TEXTURE"),S.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,S.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&u.texturesEnabled)){var T=this._getRefractionTexture(u);T&&t.a.RefractionTextureEnabled&&(S.SS_REFRACTION=!0,S.SS_REFRACTIONMAP_3D=T.isCube,S.SS_GAMMAREFRACTION=T.gammaSpace,S.SS_RGBDREFRACTION=T.isRGBD,S.SS_LINEARSPECULARREFRACTION=T.linearSpecularLOD,S.SS_REFRACTIONMAP_OPPOSITEZ=T.invertZ,S.SS_LODINREFRACTIONALPHA=T.lodLevelInAlpha,S.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,S.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},W.prototype.bindForSubMesh=function(S,u,T,w,ae,pe){var ne=this._getRefractionTexture(u);if(!S.useUbo||!w||!S.isSync){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&(S.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),r.a.BindTextureMatrix(this._thicknessTexture,S,"thickness")),S.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),ne&&t.a.RefractionTextureEnabled){S.updateMatrix("refractionMatrix",ne.getReflectionTextureMatrix());var Se=1;ne.isCube||ne.depth&&(Se=ne.depth);var oe=ne.getSize().width,Q=this.volumeIndexOfRefraction;S.updateFloat4("vRefractionInfos",ne.level,1/Q,Se,this._invertRefractionY?-1:1),S.updateFloat3("vRefractionMicrosurfaceInfos",oe,ne.lodGenerationScale,ne.lodGenerationOffset),pe&&S.updateFloat2("vRefractionFilteringInfo",oe,d.a.Log2(oe))}this.isScatteringEnabled&&S.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),S.updateColor3("vDiffusionDistance",this.diffusionDistance),S.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),S.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}u.texturesEnabled&&(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&S.setTexture("thicknessSampler",this._thicknessTexture),ne&&t.a.RefractionTextureEnabled&&(ae?S.setTexture("refractionSampler",ne):(S.setTexture("refractionSampler",ne._lodTextureMid||ne),S.setTexture("refractionSamplerLow",ne._lodTextureLow||ne),S.setTexture("refractionSamplerHigh",ne._lodTextureHigh||ne))))},W.prototype.unbind=function(S){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(S.setTexture("refractionSampler",null),!0):!1},W.prototype._getRefractionTexture=function(S){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?S.environmentTexture:null},Object.defineProperty(W.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),W.prototype.fillRenderTargetTextures=function(S){t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&S.push(this._refractionTexture)},W.prototype.hasTexture=function(S){return this._thicknessTexture===S||this._refractionTexture===S},W.prototype.hasRenderTargetTextures=function(){return!!(t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},W.prototype.getActiveTextures=function(S){this._thicknessTexture&&S.push(this._thicknessTexture),this._refractionTexture&&S.push(this._refractionTexture)},W.prototype.getAnimatables=function(S){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&S.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&S.push(this._refractionTexture)},W.prototype.dispose=function(S){S&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},W.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},W.AddFallbacks=function(S,u,T){return S.SS_SCATTERING&&u.addFallback(T++,"SS_SCATTERING"),S.SS_TRANSLUCENCY&&u.addFallback(T++,"SS_TRANSLUCENCY"),T},W.AddUniforms=function(S){S.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},W.AddSamplers=function(S){S.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},W.PrepareUniformBuffer=function(S){S.addUniform("vRefractionMicrosurfaceInfos",3),S.addUniform("vRefractionFilteringInfo",2),S.addUniform("vRefractionInfos",4),S.addUniform("refractionMatrix",16),S.addUniform("vThicknessInfos",2),S.addUniform("thicknessMatrix",16),S.addUniform("vThicknessParam",2),S.addUniform("vDiffusionDistance",3),S.addUniform("vTintColor",4),S.addUniform("vSubSurfaceIntensity",3),S.addUniform("scatteringDiffusionProfile",1)},W.prototype.copyTo=function(S){s.a.Clone(function(){return S},this)},W.prototype.serialize=function(){return s.a.Serialize(this)},W.prototype.parse=function(S,u,T){var w=this;s.a.Parse(function(){return w},S,u,T)},Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"isRefractionEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"isTranslucencyEnabled",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markScenePrePassDirty")],W.prototype,"isScatteringEnabled",void 0),Object(l.c)([Object(s.c)()],W.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(l.c)([Object(s.c)()],W.prototype,"refractionIntensity",void 0),Object(l.c)([Object(s.c)()],W.prototype,"translucencyIntensity",void 0),Object(l.c)([Object(s.c)()],W.prototype,"useAlbedoToTintRefraction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"thicknessTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"refractionTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(s.c)()],W.prototype,"_volumeIndexOfRefraction",void 0),Object(l.c)([Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"volumeIndexOfRefraction",null),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"invertRefractionY",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"linkRefractionWithTransparency",void 0),Object(l.c)([Object(s.c)()],W.prototype,"minimumThickness",void 0),Object(l.c)([Object(s.c)()],W.prototype,"maximumThickness",void 0),Object(l.c)([Object(s.e)()],W.prototype,"tintColor",void 0),Object(l.c)([Object(s.c)()],W.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(s.e)()],W.prototype,"diffusionDistance",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"useMaskFromThicknessTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],W.prototype,"useMaskFromThicknessTextureGltf",void 0),W}(),O=o(744),P=o(491),A=o(459),b=o(552),L=o(553),D=o(442),U=o(523),y=o(435),V=o(746),I="pbrFragmentDeclaration",x=`uniform vec4 vEyePosition;
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
`;y.a.IncludesShadersStore[I]=x;var E={name:I,shader:x},z=o(674),H=o(745),F="pbrUboDeclaration",Y=`layout(std140,column_major) uniform;





















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
`;y.a.IncludesShadersStore[F]=Y;var Z={name:F,shader:Y},le="pbrFragmentExtraDeclaration",G=`
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
#endif`;y.a.IncludesShadersStore[le]=G;var fe={name:le,shader:G},ee=o(650),te=o(651),ce="pbrFragmentSamplersDeclaration",$=`#ifdef ALBEDO
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
#endif`;y.a.IncludesShadersStore[ce]=$;var X={name:ce,shader:$},ve=o(524),me=o(592),re=o(558),he=o(597),ie=o(457),_e=o(627),se=o(605),N="pbrHelperFunctions",m=`
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
#endif`;y.a.IncludesShadersStore[N]=m;var B={name:N,shader:m},M=o(525),k=o(652),K="harmonicsFunctions",R=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;y.a.IncludesShadersStore[K]=R;var q={name:K,shader:R},ge="pbrDirectLightingSetupFunctions",Te=`
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
}`;y.a.IncludesShadersStore[ge]=Te;var Ae={name:ge,shader:Te},Ce="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
`;y.a.IncludesShadersStore[Xe]=Ye;var zt={name:Xe,shader:Ye},Ke="pbrBlockAlphaFresnel",Qe=`#ifdef ALPHAFRESNEL
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
`;y.a.IncludesShadersStore[Ke]=Qe;var Xt={name:Ke,shader:Qe},ke="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;y.a.IncludesShadersStore[ke]=Ze;var Yt={name:ke,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;y.a.IncludesShadersStore[$e]=et;var Qt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;y.a.IncludesShadersStore[tt]=nt;var kt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;y.a.IncludesShadersStore[ht]=pt;var an={name:ht,shader:pt},vt="pbrBlockReflectance",mt=`#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
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
`;y.a.IncludesShadersStore[vt]=mt;var on={name:vt,shader:mt},gt="pbrBlockDirectLighting",Et=`vec3 diffuseBase=vec3(0.,0.,0.);
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
`;y.a.IncludesShadersStore[gt]=Et;var sn={name:gt,shader:Et},ln=o(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;y.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},St="pbrBlockFinalUnlitComponents",At=`
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
`;y.a.IncludesShadersStore[St]=At;var cn={name:St,shader:At},Rt="pbrBlockFinalColorComposition",Pt=`vec4 finalColor=vec4(
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
`;y.a.IncludesShadersStore[Rt]=Pt;var un={name:Rt,shader:Pt},dn=o(701),hn=o(655),Ct="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




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
`;y.a.ShadersStore[It]=xt;var mn={name:It,shader:xt},Dt="pbrVertexDeclaration",yt=`uniform mat4 view;
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
#endif`;y.a.IncludesShadersStore[Dt]=yt;var gn={name:Dt,shader:yt},En=o(487),_n=o(748),Tn=o(749),Sn=o(593),An=o(656),Rn=o(657),Pn=o(658),Cn=o(496),On=o(497),bn=o(507),Mn=o(508),In=o(488),xn=o(489),Dn=o(750),yn=o(675),Ln=o(551),Fn=o(702),Nn=o(659),Bn=o(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;y.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=o(512),Fe=o(751),De={effect:null,subMesh:null},Be=function(W){Object(l.d)(S,W);function S(){var u=W.call(this)||this;return u.PBR=!0,u.NUM_SAMPLES="0",u.REALTIME_FILTERING=!1,u.MAINUV1=!1,u.MAINUV2=!1,u.UV1=!1,u.UV2=!1,u.ALBEDO=!1,u.GAMMAALBEDO=!1,u.ALBEDODIRECTUV=0,u.VERTEXCOLOR=!1,u.DETAIL=!1,u.DETAILDIRECTUV=0,u.DETAIL_NORMALBLENDMETHOD=0,u.AMBIENT=!1,u.AMBIENTDIRECTUV=0,u.AMBIENTINGRAYSCALE=!1,u.OPACITY=!1,u.VERTEXALPHA=!1,u.OPACITYDIRECTUV=0,u.OPACITYRGB=!1,u.ALPHATEST=!1,u.DEPTHPREPASS=!1,u.ALPHABLEND=!1,u.ALPHAFROMALBEDO=!1,u.ALPHATESTVALUE="0.5",u.SPECULAROVERALPHA=!1,u.RADIANCEOVERALPHA=!1,u.ALPHAFRESNEL=!1,u.LINEARALPHAFRESNEL=!1,u.PREMULTIPLYALPHA=!1,u.EMISSIVE=!1,u.EMISSIVEDIRECTUV=0,u.REFLECTIVITY=!1,u.REFLECTIVITYDIRECTUV=0,u.SPECULARTERM=!1,u.MICROSURFACEFROMREFLECTIVITYMAP=!1,u.MICROSURFACEAUTOMATIC=!1,u.LODBASEDMICROSFURACE=!1,u.MICROSURFACEMAP=!1,u.MICROSURFACEMAPDIRECTUV=0,u.METALLICWORKFLOW=!1,u.ROUGHNESSSTOREINMETALMAPALPHA=!1,u.ROUGHNESSSTOREINMETALMAPGREEN=!1,u.METALLNESSSTOREINMETALMAPBLUE=!1,u.AOSTOREINMETALMAPRED=!1,u.METALLIC_REFLECTANCE=!1,u.METALLIC_REFLECTANCEDIRECTUV=0,u.ENVIRONMENTBRDF=!1,u.ENVIRONMENTBRDF_RGBD=!1,u.NORMAL=!1,u.TANGENT=!1,u.BUMP=!1,u.BUMPDIRECTUV=0,u.OBJECTSPACE_NORMALMAP=!1,u.PARALLAX=!1,u.PARALLAXOCCLUSION=!1,u.NORMALXYSCALE=!0,u.LIGHTMAP=!1,u.LIGHTMAPDIRECTUV=0,u.USELIGHTMAPASSHADOWMAP=!1,u.GAMMALIGHTMAP=!1,u.RGBDLIGHTMAP=!1,u.REFLECTION=!1,u.REFLECTIONMAP_3D=!1,u.REFLECTIONMAP_SPHERICAL=!1,u.REFLECTIONMAP_PLANAR=!1,u.REFLECTIONMAP_CUBIC=!1,u.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,u.REFLECTIONMAP_PROJECTION=!1,u.REFLECTIONMAP_SKYBOX=!1,u.REFLECTIONMAP_EXPLICIT=!1,u.REFLECTIONMAP_EQUIRECTANGULAR=!1,u.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,u.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,u.INVERTCUBICMAP=!1,u.USESPHERICALFROMREFLECTIONMAP=!1,u.USEIRRADIANCEMAP=!1,u.SPHERICAL_HARMONICS=!1,u.USESPHERICALINVERTEX=!1,u.REFLECTIONMAP_OPPOSITEZ=!1,u.LODINREFLECTIONALPHA=!1,u.GAMMAREFLECTION=!1,u.RGBDREFLECTION=!1,u.LINEARSPECULARREFLECTION=!1,u.RADIANCEOCCLUSION=!1,u.HORIZONOCCLUSION=!1,u.INSTANCES=!1,u.THIN_INSTANCES=!1,u.PREPASS=!1,u.PREPASS_IRRADIANCE=!1,u.PREPASS_IRRADIANCE_INDEX=-1,u.PREPASS_ALBEDO=!1,u.PREPASS_ALBEDO_INDEX=-1,u.PREPASS_DEPTH=!1,u.PREPASS_DEPTH_INDEX=-1,u.PREPASS_NORMAL=!1,u.PREPASS_NORMAL_INDEX=-1,u.PREPASS_POSITION=!1,u.PREPASS_POSITION_INDEX=-1,u.PREPASS_VELOCITY=!1,u.PREPASS_VELOCITY_INDEX=-1,u.PREPASS_REFLECTIVITY=!1,u.PREPASS_REFLECTIVITY_INDEX=-1,u.SCENE_MRT_COUNT=0,u.NUM_BONE_INFLUENCERS=0,u.BonesPerMesh=0,u.BONETEXTURE=!1,u.BONES_VELOCITY_ENABLED=!1,u.NONUNIFORMSCALING=!1,u.MORPHTARGETS=!1,u.MORPHTARGETS_NORMAL=!1,u.MORPHTARGETS_TANGENT=!1,u.MORPHTARGETS_UV=!1,u.NUM_MORPH_INFLUENCERS=0,u.MORPHTARGETS_TEXTURE=!1,u.IMAGEPROCESSING=!1,u.VIGNETTE=!1,u.VIGNETTEBLENDMODEMULTIPLY=!1,u.VIGNETTEBLENDMODEOPAQUE=!1,u.TONEMAPPING=!1,u.TONEMAPPING_ACES=!1,u.CONTRAST=!1,u.COLORCURVES=!1,u.COLORGRADING=!1,u.COLORGRADING3D=!1,u.SAMPLER3DGREENDEPTH=!1,u.SAMPLER3DBGRMAP=!1,u.IMAGEPROCESSINGPOSTPROCESS=!1,u.EXPOSURE=!1,u.MULTIVIEW=!1,u.USEPHYSICALLIGHTFALLOFF=!1,u.USEGLTFLIGHTFALLOFF=!1,u.TWOSIDEDLIGHTING=!1,u.SHADOWFLOAT=!1,u.CLIPPLANE=!1,u.CLIPPLANE2=!1,u.CLIPPLANE3=!1,u.CLIPPLANE4=!1,u.CLIPPLANE5=!1,u.CLIPPLANE6=!1,u.POINTSIZE=!1,u.FOG=!1,u.LOGARITHMICDEPTH=!1,u.FORCENORMALFORWARD=!1,u.SPECULARAA=!1,u.CLEARCOAT=!1,u.CLEARCOAT_DEFAULTIOR=!1,u.CLEARCOAT_TEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS=!1,u.CLEARCOAT_TEXTUREDIRECTUV=0,u.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,u.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.CLEARCOAT_BUMP=!1,u.CLEARCOAT_BUMPDIRECTUV=0,u.CLEARCOAT_REMAP_F0=!0,u.CLEARCOAT_TINT=!1,u.CLEARCOAT_TINT_TEXTURE=!1,u.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,u.ANISOTROPIC=!1,u.ANISOTROPIC_TEXTURE=!1,u.ANISOTROPIC_TEXTUREDIRECTUV=0,u.BRDF_V_HEIGHT_CORRELATED=!1,u.MS_BRDF_ENERGY_CONSERVATION=!1,u.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,u.SHEEN=!1,u.SHEEN_TEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS=!1,u.SHEEN_TEXTUREDIRECTUV=0,u.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,u.SHEEN_LINKWITHALBEDO=!1,u.SHEEN_ROUGHNESS=!1,u.SHEEN_ALBEDOSCALING=!1,u.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,u.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,u.SUBSURFACE=!1,u.SS_REFRACTION=!1,u.SS_TRANSLUCENCY=!1,u.SS_SCATTERING=!1,u.SS_THICKNESSANDMASK_TEXTURE=!1,u.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,u.SS_REFRACTIONMAP_3D=!1,u.SS_REFRACTIONMAP_OPPOSITEZ=!1,u.SS_LODINREFRACTIONALPHA=!1,u.SS_GAMMAREFRACTION=!1,u.SS_RGBDREFRACTION=!1,u.SS_LINEARSPECULARREFRACTION=!1,u.SS_LINKREFRACTIONTOTRANSPARENCY=!1,u.SS_ALBEDOFORREFRACTIONTINT=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE=!1,u.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,u.UNLIT=!1,u.DEBUGMODE=0,u.rebuild(),u}return S.prototype.reset=function(){W.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},S}(b.a),Bt=function(W){Object(l.d)(S,W);function S(u,T){var w=W.call(this,u,T)||this;return w._directIntensity=1,w._emissiveIntensity=1,w._environmentIntensity=1,w._specularIntensity=1,w._lightingInfos=new p.f(w._directIntensity,w._emissiveIntensity,w._environmentIntensity,w._specularIntensity),w._disableBumpMap=!1,w._albedoTexture=null,w._ambientTexture=null,w._ambientTextureStrength=1,w._ambientTextureImpactOnAnalyticalLights=S.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,w._opacityTexture=null,w._reflectionTexture=null,w._emissiveTexture=null,w._reflectivityTexture=null,w._metallicTexture=null,w._metallic=null,w._roughness=null,w._metallicF0Factor=1,w._metallicReflectanceColor=f.a.White(),w._metallicReflectanceTexture=null,w._microSurfaceTexture=null,w._bumpTexture=null,w._lightmapTexture=null,w._ambientColor=new f.a(0,0,0),w._albedoColor=new f.a(1,1,1),w._reflectivityColor=new f.a(1,1,1),w._reflectionColor=new f.a(1,1,1),w._emissiveColor=new f.a(0,0,0),w._microSurface=.9,w._useLightmapAsShadowmap=!1,w._useHorizonOcclusion=!0,w._useRadianceOcclusion=!0,w._useAlphaFromAlbedoTexture=!1,w._useSpecularOverAlpha=!0,w._useMicroSurfaceFromReflectivityMapAlpha=!1,w._useRoughnessFromMetallicTextureAlpha=!0,w._useRoughnessFromMetallicTextureGreen=!1,w._useMetallnessFromMetallicTextureBlue=!1,w._useAmbientOcclusionFromMetallicTextureRed=!1,w._useAmbientInGrayScale=!1,w._useAutoMicroSurfaceFromReflectivityMap=!1,w._lightFalloff=S.LIGHTFALLOFF_PHYSICAL,w._useRadianceOverAlpha=!0,w._useObjectSpaceNormalMap=!1,w._useParallax=!1,w._useParallaxOcclusion=!1,w._parallaxScaleBias=.05,w._disableLighting=!1,w._maxSimultaneousLights=4,w._invertNormalMapX=!1,w._invertNormalMapY=!1,w._twoSidedLighting=!1,w._alphaCutOff=.4,w._forceAlphaTest=!1,w._useAlphaFresnel=!1,w._useLinearAlphaFresnel=!1,w._environmentBRDFTexture=null,w._forceIrradianceInFragment=!1,w._realTimeFiltering=!1,w._realTimeFilteringQuality=8,w._forceNormalForward=!1,w._enableSpecularAntiAliasing=!1,w._imageProcessingObserver=null,w._renderTargets=new v.a(16),w._globalAmbientColor=new f.a(0,0,0),w._useLogarithmicDepth=!1,w._unlit=!1,w._debugMode=0,w.debugMode=0,w.debugLimit=-1,w.debugFactor=1,w.clearCoat=new e.a(w._markAllSubMeshesAsTexturesDirty.bind(w)),w.anisotropy=new n(w._markAllSubMeshesAsTexturesDirty.bind(w)),w.brdf=new a(w._markAllSubMeshesAsMiscDirty.bind(w)),w.sheen=new h(w._markAllSubMeshesAsTexturesDirty.bind(w)),w.detailMap=new Fe.a(w._markAllSubMeshesAsTexturesDirty.bind(w)),w._rebuildInParallel=!1,w._attachImageProcessingConfiguration(null),w.getRenderTargetTextures=function(){return w._renderTargets.reset(),t.a.ReflectionTextureEnabled&&w._reflectionTexture&&w._reflectionTexture.isRenderTarget&&w._renderTargets.push(w._reflectionTexture),w.subSurface.fillRenderTargetTextures(w._renderTargets),w._renderTargets},w._environmentBRDFTexture=c.a.GetEnvironmentBRDFTexture(T),w.subSurface=new g(w._markAllSubMeshesAsTexturesDirty.bind(w),w._markScenePrePassDirty.bind(w),T),w.prePassConfiguration=new O.a,w}return Object.defineProperty(S.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(u){this._realTimeFiltering=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(u){this._realTimeFilteringQuality=u,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),S.prototype._attachImageProcessingConfiguration=function(u){var T=this;u!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),u?this._imageProcessingConfiguration=u:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){T._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(S.prototype,"hasRenderTargetTextures",{get:function(){return t.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),S.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(S.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(u){this._useLogarithmicDepth=u&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(S.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===S.PBRMATERIAL_OPAQUE||this._transparencyMode===S.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),S.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},S.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===S.PBRMATERIAL_ALPHATEST)},S.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==S.PBRMATERIAL_OPAQUE},S.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},S.prototype.getAlphaTestTexture=function(){return this._albedoTexture},S.prototype.isReadyForSubMesh=function(u,T,w){if(T.effect&&this.isFrozen&&T.effect._wasPreviouslyReady)return!0;T._materialDefines||(T._materialDefines=new Be);var ae=T._materialDefines;if(this._isReadyForSubMesh(T))return!0;var pe=this.getScene(),ne=pe.getEngine();if(ae._areTexturesDirty&&pe.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&t.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&t.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Se=this._getReflectionTexture();if(Se&&t.a.ReflectionTextureEnabled&&(!Se.isReadyOrNotBlocking()||Se.irradianceTexture&&!Se.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&t.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&t.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(t.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(ne.getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(ae,pe)||!this.clearCoat.isReadyForSubMesh(ae,pe,ne,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(ae,pe)||!this.anisotropy.isReadyForSubMesh(ae,pe)||!this.detailMap.isReadyForSubMesh(ae,pe)||ae._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!ne.getCaps().standardDerivatives&&!u.isVerticesDataPresent(i.b.NormalKind)&&(u.createNormals(!0),C.a.Warn("PBRMaterial: Normals have been created for the mesh: "+u.name));var oe=T.effect,Q=ae._areLightsDisposed,de=this._prepareEffect(u,ae,this.onCompiled,this.onError,w,null,T.getRenderingMesh().hasThinInstances);if(de)if(this._onEffectCreatedObservable&&(De.effect=de,De.subMesh=T,this._onEffectCreatedObservable.notifyObservers(De)),this.allowShaderHotSwapping&&oe&&!de.isReady()){if(de=oe,this._rebuildInParallel=!0,ae.markAsUnprocessed(),Q)return ae._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,pe.resetCachedMaterial(),T.setEffect(de,ae),this.buildUniformLayout();return!T.effect||!T.effect.isReady()?!1:(ae._renderId=pe.getRenderId(),T.effect._wasPreviouslyReady=!0,!0)},S.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},S.prototype._prepareEffect=function(u,T,w,ae,pe,ne,Se){if(w===void 0&&(w=null),ae===void 0&&(ae=null),pe===void 0&&(pe=null),ne===void 0&&(ne=null),this._prepareDefines(u,T,pe,ne,Se),!T.isDirty)return null;T.markAsProcessed();var oe=this.getScene(),Q=oe.getEngine(),de=new Nt.a,Ee=0;T.USESPHERICALINVERTEX&&de.addFallback(Ee++,"USESPHERICALINVERTEX"),T.FOG&&de.addFallback(Ee,"FOG"),T.SPECULARAA&&de.addFallback(Ee,"SPECULARAA"),T.POINTSIZE&&de.addFallback(Ee,"POINTSIZE"),T.LOGARITHMICDEPTH&&de.addFallback(Ee,"LOGARITHMICDEPTH"),T.PARALLAX&&de.addFallback(Ee,"PARALLAX"),T.PARALLAXOCCLUSION&&de.addFallback(Ee++,"PARALLAXOCCLUSION"),Ee=n.AddFallbacks(T,de,Ee),Ee=n.AddFallbacks(T,de,Ee),Ee=g.AddFallbacks(T,de,Ee),Ee=h.AddFallbacks(T,de,Ee),T.ENVIRONMENTBRDF&&de.addFallback(Ee++,"ENVIRONMENTBRDF"),T.TANGENT&&de.addFallback(Ee++,"TANGENT"),T.BUMP&&de.addFallback(Ee++,"BUMP"),Ee=r.a.HandleFallbacksForShadows(T,de,this._maxSimultaneousLights,Ee++),T.SPECULARTERM&&de.addFallback(Ee++,"SPECULARTERM"),T.USESPHERICALFROMREFLECTIONMAP&&de.addFallback(Ee++,"USESPHERICALFROMREFLECTIONMAP"),T.USEIRRADIANCEMAP&&de.addFallback(Ee++,"USEIRRADIANCEMAP"),T.LIGHTMAP&&de.addFallback(Ee++,"LIGHTMAP"),T.NORMAL&&de.addFallback(Ee++,"NORMAL"),T.AMBIENT&&de.addFallback(Ee++,"AMBIENT"),T.EMISSIVE&&de.addFallback(Ee++,"EMISSIVE"),T.VERTEXCOLOR&&de.addFallback(Ee++,"VERTEXCOLOR"),T.MORPHTARGETS&&de.addFallback(Ee++,"MORPHTARGETS"),T.MULTIVIEW&&de.addFallback(0,"MULTIVIEW");var Re=[i.b.PositionKind];T.NORMAL&&Re.push(i.b.NormalKind),T.TANGENT&&Re.push(i.b.TangentKind),T.UV1&&Re.push(i.b.UVKind),T.UV2&&Re.push(i.b.UV2Kind),T.VERTEXCOLOR&&Re.push(i.b.ColorKind),r.a.PrepareAttributesForBones(Re,u,T,de),r.a.PrepareAttributesForInstances(Re,T),r.a.PrepareAttributesForMorphTargets(Re,u,T);var ue="pbr",Pe=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],ye=["Material","Scene","Mesh"];Fe.a.AddUniforms(Pe),Fe.a.AddSamplers(be),g.AddUniforms(Pe),g.AddSamplers(be),e.a.AddUniforms(Pe),e.a.AddSamplers(be),n.AddUniforms(Pe),n.AddSamplers(be),h.AddUniforms(Pe),h.AddSamplers(be),O.a.AddUniforms(Pe),O.a.AddSamplers(Pe),P.a&&(P.a.PrepareUniforms(Pe,T),P.a.PrepareSamplers(be,T)),r.a.PrepareUniformsAndSamplersList({uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:T,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(ue=this.customShaderNameResolve(ue,Pe,ye,be,T,Re,Ne));var Ue=T.toString();return Q.createEffect(ue,{attributes:Re,uniformsNames:Pe,uniformBuffersNames:ye,samplers:be,defines:Ue,fallbacks:de,onCompiled:w,onError:ae,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:T.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:T.PREPASS},Q)},S.prototype._prepareDefines=function(u,T,w,ae,pe){w===void 0&&(w=null),ae===void 0&&(ae=null),pe===void 0&&(pe=!1);var ne=this.getScene(),Se=ne.getEngine();if(r.a.PrepareDefinesForLights(ne,u,T,!0,this._maxSimultaneousLights,this._disableLighting),T._needNormals=!0,r.a.PrepareDefinesForMultiview(ne,T),r.a.PrepareDefinesForPrePass(ne,T,this.canRenderToMRT),T.METALLICWORKFLOW=this.isMetallicWorkflow(),T._areTexturesDirty){if(T._needUVs=!1,ne.texturesEnabled){ne.getEngine().getCaps().textureLOD&&(T.LODBASEDMICROSFURACE=!0),this._albedoTexture&&t.a.DiffuseTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._albedoTexture,T,"ALBEDO"),T.GAMMAALBEDO=this._albedoTexture.gammaSpace):T.ALBEDO=!1,this._ambientTexture&&t.a.AmbientTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._ambientTexture,T,"AMBIENT"),T.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):T.AMBIENT=!1,this._opacityTexture&&t.a.OpacityTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._opacityTexture,T,"OPACITY"),T.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):T.OPACITY=!1;var oe=this._getReflectionTexture();if(oe&&t.a.ReflectionTextureEnabled){switch(T.REFLECTION=!0,T.GAMMAREFLECTION=oe.gammaSpace,T.RGBDREFLECTION=oe.isRGBD,T.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!oe.invertZ:oe.invertZ,T.LODINREFLECTIONALPHA=oe.lodLevelInAlpha,T.LINEARSPECULARREFLECTION=oe.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(T.NUM_SAMPLES=""+this.realTimeFilteringQuality,Se._features.needTypeSuffixInShaderConstants&&(T.NUM_SAMPLES=T.NUM_SAMPLES+"u"),T.REALTIME_FILTERING=!0):T.REALTIME_FILTERING=!1,oe.coordinatesMode===D.a.INVCUBIC_MODE&&(T.INVERTCUBICMAP=!0),T.REFLECTIONMAP_3D=oe.isCube,T.REFLECTIONMAP_CUBIC=!1,T.REFLECTIONMAP_EXPLICIT=!1,T.REFLECTIONMAP_PLANAR=!1,T.REFLECTIONMAP_PROJECTION=!1,T.REFLECTIONMAP_SKYBOX=!1,T.REFLECTIONMAP_SPHERICAL=!1,T.REFLECTIONMAP_EQUIRECTANGULAR=!1,T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,oe.coordinatesMode){case D.a.EXPLICIT_MODE:T.REFLECTIONMAP_EXPLICIT=!0;break;case D.a.PLANAR_MODE:T.REFLECTIONMAP_PLANAR=!0;break;case D.a.PROJECTION_MODE:T.REFLECTIONMAP_PROJECTION=!0;break;case D.a.SKYBOX_MODE:T.REFLECTIONMAP_SKYBOX=!0;break;case D.a.SPHERICAL_MODE:T.REFLECTIONMAP_SPHERICAL=!0;break;case D.a.EQUIRECTANGULAR_MODE:T.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case D.a.FIXED_EQUIRECTANGULAR_MODE:T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case D.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case D.a.CUBIC_MODE:case D.a.INVCUBIC_MODE:default:T.REFLECTIONMAP_CUBIC=!0,T.USE_LOCAL_REFLECTIONMAP_CUBIC=!!oe.boundingBoxSize;break}oe.coordinatesMode!==D.a.SKYBOX_MODE&&(oe.irradianceTexture?(T.USEIRRADIANCEMAP=!0,T.USESPHERICALFROMREFLECTIONMAP=!1):oe.isCube&&(T.USESPHERICALFROMREFLECTIONMAP=!0,T.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||ne.getEngine().getCaps().maxVaryingVectors<=8?T.USESPHERICALINVERTEX=!1:T.USESPHERICALINVERTEX=!0))}else T.REFLECTION=!1,T.REFLECTIONMAP_3D=!1,T.REFLECTIONMAP_SPHERICAL=!1,T.REFLECTIONMAP_PLANAR=!1,T.REFLECTIONMAP_CUBIC=!1,T.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,T.REFLECTIONMAP_PROJECTION=!1,T.REFLECTIONMAP_SKYBOX=!1,T.REFLECTIONMAP_EXPLICIT=!1,T.REFLECTIONMAP_EQUIRECTANGULAR=!1,T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,T.INVERTCUBICMAP=!1,T.USESPHERICALFROMREFLECTIONMAP=!1,T.USEIRRADIANCEMAP=!1,T.USESPHERICALINVERTEX=!1,T.REFLECTIONMAP_OPPOSITEZ=!1,T.LODINREFLECTIONALPHA=!1,T.GAMMAREFLECTION=!1,T.RGBDREFLECTION=!1,T.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&t.a.LightmapTextureEnabled?(r.a.PrepareDefinesForMergedUV(this._lightmapTexture,T,"LIGHTMAP"),T.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,T.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,T.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):T.LIGHTMAP=!1,this._emissiveTexture&&t.a.EmissiveTextureEnabled?r.a.PrepareDefinesForMergedUV(this._emissiveTexture,T,"EMISSIVE"):T.EMISSIVE=!1,t.a.SpecularTextureEnabled?(this._metallicTexture?(r.a.PrepareDefinesForMergedUV(this._metallicTexture,T,"REFLECTIVITY"),T.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,T.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,T.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,T.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(r.a.PrepareDefinesForMergedUV(this._reflectivityTexture,T,"REFLECTIVITY"),T.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,T.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):T.REFLECTIVITY=!1,this._metallicReflectanceTexture?r.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,T,"METALLIC_REFLECTANCE"):T.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?r.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,T,"MICROSURFACEMAP"):T.MICROSURFACEMAP=!1):(T.REFLECTIVITY=!1,T.MICROSURFACEMAP=!1),ne.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap?(r.a.PrepareDefinesForMergedUV(this._bumpTexture,T,"BUMP"),this._useParallax&&this._albedoTexture&&t.a.DiffuseTextureEnabled?(T.PARALLAX=!0,T.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):T.PARALLAX=!1,T.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):T.BUMP=!1,this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled?(T.ENVIRONMENTBRDF=!0,T.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(T.ENVIRONMENTBRDF=!1,T.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?T.ALPHAFROMALBEDO=!0:T.ALPHAFROMALBEDO=!1}T.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===S.LIGHTFALLOFF_STANDARD?(T.USEPHYSICALLIGHTFALLOFF=!1,T.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===S.LIGHTFALLOFF_GLTF?(T.USEPHYSICALLIGHTFALLOFF=!1,T.USEGLTFLIGHTFALLOFF=!0):(T.USEPHYSICALLIGHTFALLOFF=!0,T.USEGLTFLIGHTFALLOFF=!1),T.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?T.TWOSIDEDLIGHTING=!0:T.TWOSIDEDLIGHTING=!1,T.SPECULARAA=ne.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(T._areTexturesDirty||T._areMiscDirty)&&(T.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),T.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,T.ALPHABLEND=this.needAlphaBlendingForMesh(u),T.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,T.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),T._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(T),T.FORCENORMALFORWARD=this._forceNormalForward,T.RADIANCEOCCLUSION=this._useRadianceOcclusion,T.HORIZONOCCLUSION=this._useHorizonOcclusion,T._areMiscDirty&&(r.a.PrepareDefinesForMisc(u,ne,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(u)||this._forceAlphaTest,T),T.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!u.isVerticesDataPresent(i.b.NormalKind),T.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(T,ne),this.subSurface.prepareDefines(T,ne),this.clearCoat.prepareDefines(T,ne),this.anisotropy.prepareDefines(T,u,ne),this.brdf.prepareDefines(T),this.sheen.prepareDefines(T,ne),r.a.PrepareDefinesForFrameBoundValues(ne,Se,T,!!w,ae,pe),r.a.PrepareDefinesForAttributes(u,T,!0,!0,!0,this._transparencyMode!==S.PBRMATERIAL_OPAQUE)},S.prototype.forceCompilation=function(u,T,w){var ae=this,pe=Object(l.a)({clipPlane:!1,useInstances:!1},w),ne=new Be,Se=this._prepareEffect(u,ne,void 0,void 0,pe.useInstances,pe.clipPlane,u.hasThinInstances);this._onEffectCreatedObservable&&(De.effect=Se,De.subMesh=null,this._onEffectCreatedObservable.notifyObservers(De)),Se.isReady()?T&&T(this):Se.onCompileObservable.add(function(){T&&T(ae)})},S.prototype.buildUniformLayout=function(){var u=this._uniformBuffer;u.addUniform("vAlbedoInfos",2),u.addUniform("vAmbientInfos",4),u.addUniform("vOpacityInfos",2),u.addUniform("vEmissiveInfos",2),u.addUniform("vLightmapInfos",2),u.addUniform("vReflectivityInfos",3),u.addUniform("vMicroSurfaceSamplerInfos",2),u.addUniform("vReflectionInfos",2),u.addUniform("vReflectionFilteringInfo",2),u.addUniform("vReflectionPosition",3),u.addUniform("vReflectionSize",3),u.addUniform("vBumpInfos",3),u.addUniform("albedoMatrix",16),u.addUniform("ambientMatrix",16),u.addUniform("opacityMatrix",16),u.addUniform("emissiveMatrix",16),u.addUniform("lightmapMatrix",16),u.addUniform("reflectivityMatrix",16),u.addUniform("microSurfaceSamplerMatrix",16),u.addUniform("bumpMatrix",16),u.addUniform("vTangentSpaceParams",2),u.addUniform("reflectionMatrix",16),u.addUniform("vReflectionColor",3),u.addUniform("vAlbedoColor",4),u.addUniform("vLightingIntensity",4),u.addUniform("vReflectionMicrosurfaceInfos",3),u.addUniform("pointSize",1),u.addUniform("vReflectivityColor",4),u.addUniform("vEmissiveColor",3),u.addUniform("vAmbientColor",3),u.addUniform("vDebugMode",2),u.addUniform("vMetallicReflectanceFactors",4),u.addUniform("vMetallicReflectanceInfos",2),u.addUniform("metallicReflectanceMatrix",16),e.a.PrepareUniformBuffer(u),n.PrepareUniformBuffer(u),h.PrepareUniformBuffer(u),g.PrepareUniformBuffer(u),Fe.a.PrepareUniformBuffer(u),u.addUniform("vSphericalL00",3),u.addUniform("vSphericalL1_1",3),u.addUniform("vSphericalL10",3),u.addUniform("vSphericalL11",3),u.addUniform("vSphericalL2_2",3),u.addUniform("vSphericalL2_1",3),u.addUniform("vSphericalL20",3),u.addUniform("vSphericalL21",3),u.addUniform("vSphericalL22",3),u.addUniform("vSphericalX",3),u.addUniform("vSphericalY",3),u.addUniform("vSphericalZ",3),u.addUniform("vSphericalXX_ZZ",3),u.addUniform("vSphericalYY_ZZ",3),u.addUniform("vSphericalZZ",3),u.addUniform("vSphericalXY",3),u.addUniform("vSphericalYZ",3),u.addUniform("vSphericalZX",3),u.create()},S.prototype.unbind=function(){if(this._activeEffect){var u=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),u=!0),this.subSurface.unbind(this._activeEffect)&&(u=!0),u&&this._markAllSubMeshesAsTexturesDirty()}W.prototype.unbind.call(this)},S.prototype.bindForSubMesh=function(u,T,w){var ae=this.getScene(),pe=w._materialDefines;if(!!pe){var ne=w.effect;if(!!ne){this._activeEffect=ne,T.getMeshUniformBuffer().bindToEffect(ne,"Mesh"),T.transferToEffect(u),this.prePassConfiguration.bindForSubMesh(this._activeEffect,ae,T,u,this.isFrozen),pe.OBJECTSPACE_NORMALMAP&&(u.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Se=this._mustRebind(ae,ne,T.visibility);r.a.BindBonesParameters(T,this._activeEffect,this.prePassConfiguration);var oe=null,Q=this._uniformBuffer;if(Se){var de=ae.getEngine();if(Q.bindToEffect(ne,"Material"),this.bindViewProjection(ne),oe=this._getReflectionTexture(),!Q.useUbo||!this.isFrozen||!Q.isSync){if(ae.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&(Q.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),r.a.BindTextureMatrix(this._albedoTexture,Q,"albedo")),this._ambientTexture&&t.a.AmbientTextureEnabled&&(Q.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),r.a.BindTextureMatrix(this._ambientTexture,Q,"ambient")),this._opacityTexture&&t.a.OpacityTextureEnabled&&(Q.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),r.a.BindTextureMatrix(this._opacityTexture,Q,"opacity")),oe&&t.a.ReflectionTextureEnabled){if(Q.updateMatrix("reflectionMatrix",oe.getReflectionTextureMatrix()),Q.updateFloat2("vReflectionInfos",oe.level,0),oe.boundingBoxSize){var Ee=oe;Q.updateVector3("vReflectionPosition",Ee.boundingBoxPosition),Q.updateVector3("vReflectionSize",Ee.boundingBoxSize)}if(this.realTimeFiltering){var Re=oe.getSize().width;Q.updateFloat2("vReflectionFilteringInfo",Re,d.a.Log2(Re))}if(!pe.USEIRRADIANCEMAP){var ue=oe.sphericalPolynomial;if(pe.USESPHERICALFROMREFLECTIONMAP&&ue)if(pe.SPHERICAL_HARMONICS){var Pe=ue.preScaledHarmonics;Q.updateVector3("vSphericalL00",Pe.l00),Q.updateVector3("vSphericalL1_1",Pe.l1_1),Q.updateVector3("vSphericalL10",Pe.l10),Q.updateVector3("vSphericalL11",Pe.l11),Q.updateVector3("vSphericalL2_2",Pe.l2_2),Q.updateVector3("vSphericalL2_1",Pe.l2_1),Q.updateVector3("vSphericalL20",Pe.l20),Q.updateVector3("vSphericalL21",Pe.l21),Q.updateVector3("vSphericalL22",Pe.l22)}else Q.updateFloat3("vSphericalX",ue.x.x,ue.x.y,ue.x.z),Q.updateFloat3("vSphericalY",ue.y.x,ue.y.y,ue.y.z),Q.updateFloat3("vSphericalZ",ue.z.x,ue.z.y,ue.z.z),Q.updateFloat3("vSphericalXX_ZZ",ue.xx.x-ue.zz.x,ue.xx.y-ue.zz.y,ue.xx.z-ue.zz.z),Q.updateFloat3("vSphericalYY_ZZ",ue.yy.x-ue.zz.x,ue.yy.y-ue.zz.y,ue.yy.z-ue.zz.z),Q.updateFloat3("vSphericalZZ",ue.zz.x,ue.zz.y,ue.zz.z),Q.updateFloat3("vSphericalXY",ue.xy.x,ue.xy.y,ue.xy.z),Q.updateFloat3("vSphericalYZ",ue.yz.x,ue.yz.y,ue.yz.z),Q.updateFloat3("vSphericalZX",ue.zx.x,ue.zx.y,ue.zx.z)}Q.updateFloat3("vReflectionMicrosurfaceInfos",oe.getSize().width,oe.lodGenerationScale,oe.lodGenerationOffset)}this._emissiveTexture&&t.a.EmissiveTextureEnabled&&(Q.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),r.a.BindTextureMatrix(this._emissiveTexture,Q,"emissive")),this._lightmapTexture&&t.a.LightmapTextureEnabled&&(Q.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),r.a.BindTextureMatrix(this._lightmapTexture,Q,"lightmap")),t.a.SpecularTextureEnabled&&(this._metallicTexture?(Q.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),r.a.BindTextureMatrix(this._metallicTexture,Q,"reflectivity")):this._reflectivityTexture&&(Q.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),r.a.BindTextureMatrix(this._reflectivityTexture,Q,"reflectivity")),this._metallicReflectanceTexture&&(Q.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),r.a.BindTextureMatrix(this._metallicReflectanceTexture,Q,"metallicReflectance")),this._microSurfaceTexture&&(Q.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),r.a.BindTextureMatrix(this._microSurfaceTexture,Q,"microSurfaceSampler"))),this._bumpTexture&&de.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&(Q.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),r.a.BindTextureMatrix(this._bumpTexture,Q,"bump"),ae._mirroredCameraPosition?Q.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):Q.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&Q.updateFloat("pointSize",this.pointSize),pe.METALLICWORKFLOW){f.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,f.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,Q.updateColor4("vReflectivityColor",f.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,ye=1,Ne=Math.pow((be-ye)/(be+ye),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,f.c.Color3[0]);var Ue=this._metallicF0Factor;Q.updateColor4("vMetallicReflectanceFactors",f.c.Color3[0],Ue)}else Q.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);Q.updateColor3("vEmissiveColor",t.a.EmissiveTextureEnabled?this._emissiveColor:f.a.BlackReadOnly),Q.updateColor3("vReflectionColor",this._reflectionColor),!pe.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?Q.updateColor4("vAlbedoColor",this._albedoColor,1):Q.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*ae.environmentIntensity,this._lightingInfos.w=this._specularIntensity,Q.updateVector4("vLightingIntensity",this._lightingInfos),ae.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),Q.updateColor3("vAmbientColor",this._globalAmbientColor),Q.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}ae.texturesEnabled&&(this._albedoTexture&&t.a.DiffuseTextureEnabled&&Q.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&t.a.AmbientTextureEnabled&&Q.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.a.OpacityTextureEnabled&&Q.setTexture("opacitySampler",this._opacityTexture),oe&&t.a.ReflectionTextureEnabled&&(pe.LODBASEDMICROSFURACE?Q.setTexture("reflectionSampler",oe):(Q.setTexture("reflectionSampler",oe._lodTextureMid||oe),Q.setTexture("reflectionSamplerLow",oe._lodTextureLow||oe),Q.setTexture("reflectionSamplerHigh",oe._lodTextureHigh||oe)),pe.USEIRRADIANCEMAP&&Q.setTexture("irradianceSampler",oe.irradianceTexture)),pe.ENVIRONMENTBRDF&&Q.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&t.a.EmissiveTextureEnabled&&Q.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.a.LightmapTextureEnabled&&Q.setTexture("lightmapSampler",this._lightmapTexture),t.a.SpecularTextureEnabled&&(this._metallicTexture?Q.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&Q.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&Q.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&Q.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&de.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&Q.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(Q,ae,this.isFrozen),this.subSurface.bindForSubMesh(Q,ae,de,this.isFrozen,pe.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(Q,ae,de,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,w),this.anisotropy.bindForSubMesh(Q,ae,this.isFrozen),this.sheen.bindForSubMesh(Q,ae,this.isFrozen,w),r.a.BindClipPlane(this._activeEffect,ae),this.bindEyePosition(ne)}(Se||!this.isFrozen)&&(ae.lightsEnabled&&!this._disableLighting&&r.a.BindLights(ae,T,this._activeEffect,pe,this._maxSimultaneousLights,this._rebuildInParallel),(ae.fogEnabled&&T.applyFog&&ae.fogMode!==_.a.FOGMODE_NONE||oe)&&this.bindView(ne),r.a.BindFogParameters(ae,T,this._activeEffect,!0),pe.NUM_MORPH_INFLUENCERS&&r.a.BindMorphTargetParameters(T,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),r.a.BindLogDepth(pe,this._activeEffect,ae)),this._afterBind(T,this._activeEffect),Q.update()}}},S.prototype.getAnimatables=function(){var u=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&u.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&u.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&u.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&u.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&u.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?u.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&u.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&u.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&u.push(this._lightmapTexture),this.detailMap.getAnimatables(u),this.subSurface.getAnimatables(u),this.clearCoat.getAnimatables(u),this.sheen.getAnimatables(u),this.anisotropy.getAnimatables(u),u},S.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},S.prototype.getActiveTextures=function(){var u=W.prototype.getActiveTextures.call(this);return this._albedoTexture&&u.push(this._albedoTexture),this._ambientTexture&&u.push(this._ambientTexture),this._opacityTexture&&u.push(this._opacityTexture),this._reflectionTexture&&u.push(this._reflectionTexture),this._emissiveTexture&&u.push(this._emissiveTexture),this._reflectivityTexture&&u.push(this._reflectivityTexture),this._metallicTexture&&u.push(this._metallicTexture),this._metallicReflectanceTexture&&u.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&u.push(this._microSurfaceTexture),this._bumpTexture&&u.push(this._bumpTexture),this._lightmapTexture&&u.push(this._lightmapTexture),this.detailMap.getActiveTextures(u),this.subSurface.getActiveTextures(u),this.clearCoat.getActiveTextures(u),this.sheen.getActiveTextures(u),this.anisotropy.getActiveTextures(u),u},S.prototype.hasTexture=function(u){return W.prototype.hasTexture.call(this,u)||this._albedoTexture===u||this._ambientTexture===u||this._opacityTexture===u||this._reflectionTexture===u||this._reflectivityTexture===u||this._metallicTexture===u||this._metallicReflectanceTexture===u||this._microSurfaceTexture===u||this._bumpTexture===u||this._lightmapTexture===u?!0:this.detailMap.hasTexture(u)||this.subSurface.hasTexture(u)||this.clearCoat.hasTexture(u)||this.sheen.hasTexture(u)||this.anisotropy.hasTexture(u)},S.prototype.setPrePassRenderer=function(u){if(this.subSurface.isScatteringEnabled){var T=this.getScene().enableSubSurfaceForPrePass();return T&&(T.enabled=!0),!0}return!1},S.prototype.dispose=function(u,T){var w,ae,pe,ne,Se,oe,Q,de,Ee,Re,ue;T&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(w=this._albedoTexture)===null||w===void 0||w.dispose(),(ae=this._ambientTexture)===null||ae===void 0||ae.dispose(),(pe=this._opacityTexture)===null||pe===void 0||pe.dispose(),(ne=this._reflectionTexture)===null||ne===void 0||ne.dispose(),(Se=this._emissiveTexture)===null||Se===void 0||Se.dispose(),(oe=this._metallicTexture)===null||oe===void 0||oe.dispose(),(Q=this._reflectivityTexture)===null||Q===void 0||Q.dispose(),(de=this._bumpTexture)===null||de===void 0||de.dispose(),(Ee=this._lightmapTexture)===null||Ee===void 0||Ee.dispose(),(Re=this._metallicReflectanceTexture)===null||Re===void 0||Re.dispose(),(ue=this._microSurfaceTexture)===null||ue===void 0||ue.dispose()),this.detailMap.dispose(T),this.subSurface.dispose(T),this.clearCoat.dispose(T),this.sheen.dispose(T),this.anisotropy.dispose(T),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),W.prototype.dispose.call(this,u,T)},S.PBRMATERIAL_OPAQUE=A.a.MATERIAL_OPAQUE,S.PBRMATERIAL_ALPHATEST=A.a.MATERIAL_ALPHATEST,S.PBRMATERIAL_ALPHABLEND=A.a.MATERIAL_ALPHABLEND,S.PBRMATERIAL_ALPHATESTANDBLEND=A.a.MATERIAL_ALPHATESTANDBLEND,S.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,S.LIGHTFALLOFF_PHYSICAL=0,S.LIGHTFALLOFF_GLTF=1,S.LIGHTFALLOFF_STANDARD=2,Object(l.c)([Object(s.i)()],S.prototype,"_imageProcessingConfiguration",void 0),Object(l.c)([Object(s.b)("_markAllSubMeshesAsMiscDirty")],S.prototype,"debugMode",void 0),Object(l.c)([Object(s.c)()],S.prototype,"useLogarithmicDepth",null),S}(L.a)},530:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var l=o(483),s=o(572),C=o(438),v=o(449),c=o(436),_=o(589),p=o(542),i=function(){function e(t,r,n,a,f,h,d,g,O,P){n===void 0&&(n=0),a===void 0&&(a=100),f===void 0&&(f=!1),h===void 0&&(h=1),P===void 0&&(P=!1),this.target=r,this.fromFrame=n,this.toFrame=a,this.loopAnimation=f,this.onAnimationEnd=d,this.onAnimationLoop=O,this.isAdditive=P,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new C.c,this.onAnimationLoopObservable=new C.c,this._scene=t,g&&this.appendAnimations(r,g),this._speedRatio=h,t._activeAnimatables.push(this)}return Object.defineProperty(e.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._weight},set:function(t){if(t===-1){this._weight=-1;return}this._weight=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(t){for(var r=0;r<this._runtimeAnimations.length;r++){var n=this._runtimeAnimations[r];n._prepareForSpeedRatioChange(t)}this._speedRatio=t},enumerable:!1,configurable:!0}),e.prototype.syncWith=function(t){if(this._syncRoot=t,t){var r=this._scene._activeAnimatables.indexOf(this);r>-1&&(this._scene._activeAnimatables.splice(r,1),this._scene._activeAnimatables.push(this))}return this},e.prototype.getAnimations=function(){return this._runtimeAnimations},e.prototype.appendAnimations=function(t,r){for(var n=this,a=0;a<r.length;a++){var f=r[a],h=new s.a(t,f,this._scene,this);h._onLoop=function(){n.onAnimationLoopObservable.notifyObservers(n),n.onAnimationLoop&&n.onAnimationLoop()},this._runtimeAnimations.push(h)}},e.prototype.getAnimationByTargetProperty=function(t){for(var r=this._runtimeAnimations,n=0;n<r.length;n++)if(r[n].animation.targetProperty===t)return r[n].animation;return null},e.prototype.getRuntimeAnimationByTargetProperty=function(t){for(var r=this._runtimeAnimations,n=0;n<r.length;n++)if(r[n].animation.targetProperty===t)return r[n];return null},e.prototype.reset=function(){for(var t=this._runtimeAnimations,r=0;r<t.length;r++)t[r].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},e.prototype.enableBlending=function(t){for(var r=this._runtimeAnimations,n=0;n<r.length;n++)r[n].animation.enableBlending=!0,r[n].animation.blendingSpeed=t},e.prototype.disableBlending=function(){for(var t=this._runtimeAnimations,r=0;r<t.length;r++)t[r].animation.enableBlending=!1},e.prototype.goToFrame=function(t){var r=this._runtimeAnimations;if(r[0]){var n=r[0].animation.framePerSecond,a=r[0].currentFrame,f=this.speedRatio===0?0:(t-a)/n*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=f}for(var h=0;h<r.length;h++)r[h].goToFrame(t)},e.prototype.pause=function(){this._paused||(this._paused=!0)},e.prototype.restart=function(){this._paused=!1},e.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},e.prototype.stop=function(t,r){if(t||r){var n=this._scene._activeAnimatables.indexOf(this);if(n>-1){for(var a=this._runtimeAnimations,f=a.length-1;f>=0;f--){var h=a[f];t&&h.animation.name!=t||r&&!r(h.target)||(h.dispose(),a.splice(f,1))}a.length==0&&(this._scene._activeAnimatables.splice(n,1),this._raiseOnAnimationEnd())}}else{var f=this._scene._activeAnimatables.indexOf(this);if(f>-1){this._scene._activeAnimatables.splice(f,1);for(var a=this._runtimeAnimations,f=0;f<a.length;f++)a[f].dispose();this._raiseOnAnimationEnd()}}},e.prototype.waitAsync=function(){var t=this;return new Promise(function(r,n){t.onAnimationEndObservable.add(function(){r(t)},void 0,void 0,t,!0)})},e.prototype._animate=function(t){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=t),!0;if(this._localDelayOffset===null?(this._localDelayOffset=t,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=t-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var r=!1,n=this._runtimeAnimations,a;for(a=0;a<n.length;a++){var f=n[a],h=f.animate(t-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);r=r||h}if(this.animationStarted=r,!r){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<n.length;a++)n[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return r},e}();v.a.prototype._animate=function(){if(!!this.animationsEnabled){var e=_.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=e}this.deltaTime=this.useConstantAnimationDeltaTime?16:(e-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=e;var t=this._activeAnimatables;if(t.length!==0){this._animationTime+=this.deltaTime;for(var r=this._animationTime,n=0;n<t.length;n++){var a=t[n];!a._animate(r)&&a.disposeOnEnd&&n--}this._processLateAnimationBindings()}}},v.a.prototype.beginWeightedAnimation=function(e,t,r,n,a,f,h,d,g,O,P){n===void 0&&(n=1),f===void 0&&(f=1),P===void 0&&(P=!1);var A=this.beginAnimation(e,t,r,a,f,h,d,!1,g,O,P);return A.weight=n,A},v.a.prototype.beginAnimation=function(e,t,r,n,a,f,h,d,g,O,P){a===void 0&&(a=1),d===void 0&&(d=!0),P===void 0&&(P=!1),t>r&&a>0&&(a*=-1),d&&this.stopAnimation(e,void 0,g),h||(h=new i(this,e,t,r,n,a,f,void 0,O,P));var A=g?g(e):!0;if(e.animations&&A&&h.appendAnimations(e,e.animations),e.getAnimatables)for(var b=e.getAnimatables(),L=0;L<b.length;L++)this.beginAnimation(b[L],t,r,n,a,f,h,d,g,O);return h.reset(),h},v.a.prototype.beginHierarchyAnimation=function(e,t,r,n,a,f,h,d,g,O,P,A){f===void 0&&(f=1),g===void 0&&(g=!0),A===void 0&&(A=!1);var b=e.getDescendants(t),L=[];L.push(this.beginAnimation(e,r,n,a,f,h,d,g,O,void 0,A));for(var D=0,U=b;D<U.length;D++){var y=U[D];L.push(this.beginAnimation(y,r,n,a,f,h,d,g,O,void 0,A))}return L},v.a.prototype.beginDirectAnimation=function(e,t,r,n,a,f,h,d,g){g===void 0&&(g=!1),f===void 0&&(f=1),r>n&&f>0&&(f*=-1);var O=new i(this,e,r,n,a,f,h,t,d,g);return O},v.a.prototype.beginDirectHierarchyAnimation=function(e,t,r,n,a,f,h,d,g,O){O===void 0&&(O=!1);var P=e.getDescendants(t),A=[];A.push(this.beginDirectAnimation(e,r,n,a,f,h,d,g,O));for(var b=0,L=P;b<L.length;b++){var D=L[b];A.push(this.beginDirectAnimation(D,r,n,a,f,h,d,g,O))}return A},v.a.prototype.getAnimatableByTarget=function(e){for(var t=0;t<this._activeAnimatables.length;t++)if(this._activeAnimatables[t].target===e)return this._activeAnimatables[t];return null},v.a.prototype.getAllAnimatablesByTarget=function(e){for(var t=[],r=0;r<this._activeAnimatables.length;r++)this._activeAnimatables[r].target===e&&t.push(this._activeAnimatables[r]);return t},v.a.prototype.stopAnimation=function(e,t,r){for(var n=this.getAllAnimatablesByTarget(e),a=0,f=n;a<f.length;a++){var h=f[a];h.stop(t,r)}},v.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var e=0;e<this._activeAnimatables.length;e++)this._activeAnimatables[e].stop();this._activeAnimatables=[]}for(var t=0,r=this.animationGroups;t<r.length;t++){var n=r[t];n.stop()}},v.a.prototype._registerTargetForLateAnimationBinding=function(e,t){var r=e.target;this._registeredForLateAnimationBindings.pushNoDuplicate(r),r._lateAnimationHolders||(r._lateAnimationHolders={}),r._lateAnimationHolders[e.targetPath]||(r._lateAnimationHolders[e.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:t}),e.isAdditive?(r._lateAnimationHolders[e.targetPath].additiveAnimations.push(e),r._lateAnimationHolders[e.targetPath].totalAdditiveWeight+=e.weight):(r._lateAnimationHolders[e.targetPath].animations.push(e),r._lateAnimationHolders[e.targetPath].totalWeight+=e.weight)},v.a.prototype._processLateAnimationBindingsForMatrices=function(e){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return e.originalValue;var t=1,r=c.c.Vector3[0],n=c.c.Vector3[1],a=c.c.Quaternion[0],f=0,h=e.animations[0],d=e.originalValue,g=1,O=!1;if(e.totalWeight<1)g=1-e.totalWeight,d.decompose(n,a,r);else{if(f=1,t=e.totalWeight,g=h.weight/t,g==1)if(e.totalAdditiveWeight)O=!0;else return h.currentValue;h.currentValue.decompose(n,a,r)}if(!O){n.scaleInPlace(g),r.scaleInPlace(g),a.scaleInPlace(g);for(var P=f;P<e.animations.length;P++){var A=e.animations[P];if(A.weight!==0){var g=A.weight/t,b=c.c.Vector3[2],L=c.c.Vector3[3],D=c.c.Quaternion[1];A.currentValue.decompose(L,D,b),L.scaleAndAddToRef(g,n),D.scaleAndAddToRef(g,a),b.scaleAndAddToRef(g,r)}}}for(var U=0;U<e.additiveAnimations.length;U++){var A=e.additiveAnimations[U];if(A.weight!==0){var b=c.c.Vector3[2],L=c.c.Vector3[3],D=c.c.Quaternion[1];A.currentValue.decompose(L,D,b),L.multiplyToRef(n,L),c.e.LerpToRef(n,L,A.weight,n),a.multiplyToRef(D,D),c.b.SlerpToRef(a,D,A.weight,a),b.scaleAndAddToRef(A.weight,r)}}var y=h?h._animationState.workValue:c.c.Matrix[0].clone();return c.a.ComposeToRef(n,a,r,y),y},v.a.prototype._processLateAnimationBindingsForQuaternions=function(e,t){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return t;var r=e.animations[0],n=e.originalValue,a=t;if(e.totalWeight===0&&e.totalAdditiveWeight>0)a.copyFrom(n);else if(e.animations.length===1){if(c.b.SlerpToRef(n,r.currentValue,Math.min(1,e.totalWeight),a),e.totalAdditiveWeight===0)return a}else if(e.animations.length>1){var f=1,h=void 0,d=void 0;if(e.totalWeight<1){var g=1-e.totalWeight;h=[],d=[],h.push(n),d.push(g)}else{if(e.animations.length===2&&(c.b.SlerpToRef(e.animations[0].currentValue,e.animations[1].currentValue,e.animations[1].weight/e.totalWeight,t),e.totalAdditiveWeight===0))return t;h=[],d=[],f=e.totalWeight}for(var O=0;O<e.animations.length;O++){var P=e.animations[O];h.push(P.currentValue),d.push(P.weight/f)}for(var A=0,b=0;b<h.length;){if(!b){c.b.SlerpToRef(h[b],h[b+1],d[b+1]/(d[b]+d[b+1]),t),a=t,A=d[b]+d[b+1],b+=2;continue}A+=d[b],c.b.SlerpToRef(a,h[b],d[b]/A,a),b++}}for(var L=0;L<e.additiveAnimations.length;L++){var P=e.additiveAnimations[L];P.weight!==0&&(a.multiplyToRef(P.currentValue,c.c.Quaternion[0]),c.b.SlerpToRef(a,c.c.Quaternion[0],P.weight,a))}return a},v.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var e=0;e<this._registeredForLateAnimationBindings.length;e++){var t=this._registeredForLateAnimationBindings.data[e];for(var r in t._lateAnimationHolders){var n=t._lateAnimationHolders[r],a=n.animations[0],f=n.originalValue,h=l.a.AllowMatrixDecomposeForInterpolation&&f.m,d=t[r];if(h)d=this._processLateAnimationBindingsForMatrices(n);else{var g=f.w!==void 0;if(g)d=this._processLateAnimationBindingsForQuaternions(n,d||c.b.Identity());else{var O=0,P=1;if(n.totalWeight<1)a&&f.scale?d=f.scale(1-n.totalWeight):a?d=f*(1-n.totalWeight):f.clone?d=f.clone():d=f;else if(a){P=n.totalWeight;var A=a.weight/P;A!==1?a.currentValue.scale?d=a.currentValue.scale(A):d=a.currentValue*A:d=a.currentValue,O=1}for(var b=O;b<n.animations.length;b++){var L=n.animations[b],D=L.weight/P;if(D)L.currentValue.scaleAndAddToRef?L.currentValue.scaleAndAddToRef(D,d):d+=L.currentValue*D;else continue}for(var U=0;U<n.additiveAnimations.length;U++){var L=n.additiveAnimations[U],D=L.weight;if(D)L.currentValue.scaleAndAddToRef?L.currentValue.scaleAndAddToRef(D,d):d+=L.currentValue*D;else continue}}}t[r]=d}t._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},p.a.prototype.copyAnimationRange=function(e,t,r,n,a){n===void 0&&(n=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new l.a(this.name,"_matrix",e.animations[0].framePerSecond,l.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var f=e.animations[0].getRange(t);if(!f)return!1;for(var h=f.from,d=f.to,g=e.animations[0].getKeys(),O=e.length,P=e.getParent(),A=this.getParent(),b=n&&P&&O&&this.length&&O!==this.length,L=b&&A&&P?A.length/P.length:1,D=n&&!A&&a&&(a.x!==1||a.y!==1||a.z!==1),U=this.animations[0].getKeys(),y,V,I,x=0,E=g.length;x<E;x++)y=g[x],y.frame>=h&&y.frame<=d&&(n?(I=y.value.clone(),b?(V=I.getTranslation(),I.setTranslation(V.scaleInPlace(L))):D&&a?(V=I.getTranslation(),I.setTranslation(V.multiplyInPlace(a))):I=y.value):I=y.value,U.push({frame:y.frame+r,value:I}));return this.animations[0].createRange(t,h+r,d+r),!0}},532:function(J,j,o){"use strict";var l=o(467),s=o(456);l.a.prototype.createDynamicTexture=function(C,v,c,_){var p=new s.a(this,s.b.Dynamic);return p.baseWidth=C,p.baseHeight=v,c&&(C=this.needPOTTextures?l.a.GetExponentOfTwo(C,this._caps.maxTextureSize):C,v=this.needPOTTextures?l.a.GetExponentOfTwo(v,this._caps.maxTextureSize):v),p.width=C,p.height=v,p.isReady=!1,p.generateMipMaps=c,p.samplingMode=_,this.updateTextureSamplingMode(_,p),this._internalTexturesCache.push(p),p},l.a.prototype.updateDynamicTexture=function(C,v,c,_,p,i){if(_===void 0&&(_=!1),i===void 0&&(i=!1),!!C){var e=this._gl,t=e.TEXTURE_2D,r=this._bindTextureDirectly(t,C,!0,i);this._unpackFlipY(c===void 0?C.invertY:c),_&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var n=this._getWebGLTextureType(C.type),a=this._getInternalFormat(p||C.format),f=this._getRGBABufferInternalSizedFormat(C.type,a);e.texImage2D(t,0,f,a,n,v),C.generateMipMaps&&e.generateMipmap(t),r||this._bindTextureDirectly(t,null),_&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),C.isReady=!0}}},533:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var l=o(434),s=o(439),C=o(514),v=o(441),c=o(529),_=o(437),p=function(i){Object(l.d)(e,i);function e(t,r){var n=i.call(this,t,r)||this;return n.directIntensity=1,n.emissiveIntensity=1,n.environmentIntensity=1,n.specularIntensity=1,n.disableBumpMap=!1,n.ambientTextureStrength=1,n.ambientTextureImpactOnAnalyticalLights=e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,n.metallicF0Factor=1,n.metallicReflectanceColor=v.a.White(),n.ambientColor=new v.a(0,0,0),n.albedoColor=new v.a(1,1,1),n.reflectivityColor=new v.a(1,1,1),n.reflectionColor=new v.a(1,1,1),n.emissiveColor=new v.a(0,0,0),n.microSurface=1,n.useLightmapAsShadowmap=!1,n.useAlphaFromAlbedoTexture=!1,n.forceAlphaTest=!1,n.alphaCutOff=.4,n.useSpecularOverAlpha=!0,n.useMicroSurfaceFromReflectivityMapAlpha=!1,n.useRoughnessFromMetallicTextureAlpha=!0,n.useRoughnessFromMetallicTextureGreen=!1,n.useMetallnessFromMetallicTextureBlue=!1,n.useAmbientOcclusionFromMetallicTextureRed=!1,n.useAmbientInGrayScale=!1,n.useAutoMicroSurfaceFromReflectivityMap=!1,n.useRadianceOverAlpha=!0,n.useObjectSpaceNormalMap=!1,n.useParallax=!1,n.useParallaxOcclusion=!1,n.parallaxScaleBias=.05,n.disableLighting=!1,n.forceIrradianceInFragment=!1,n.maxSimultaneousLights=4,n.invertNormalMapX=!1,n.invertNormalMapY=!1,n.twoSidedLighting=!1,n.useAlphaFresnel=!1,n.useLinearAlphaFresnel=!1,n.environmentBRDFTexture=null,n.forceNormalForward=!1,n.enableSpecularAntiAliasing=!1,n.useHorizonOcclusion=!0,n.useRadianceOcclusion=!0,n.unlit=!1,n._environmentBRDFTexture=C.a.GetEnvironmentBRDFTexture(r),n}return Object.defineProperty(e.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(t){this.subSurface.refractionTexture=t,t?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(t){this.subSurface.indexOfRefraction=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(t){this.subSurface.invertRefractionY=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(t){this.subSurface.linkRefractionWithTransparency=t,t&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_PHYSICAL},set:function(t){t!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=c.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_GLTF},set:function(t){t!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=c.a.LIGHTFALLOFF_GLTF:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(t){this._attachImageProcessingConfiguration(t),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(t){this.imageProcessingConfiguration.colorCurvesEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(t){this.imageProcessingConfiguration.colorGradingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(t){this._imageProcessingConfiguration.toneMappingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(t){this._imageProcessingConfiguration.exposure=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(t){this._imageProcessingConfiguration.contrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(t){this._imageProcessingConfiguration.colorGradingTexture=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(t){this._imageProcessingConfiguration.colorCurves=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"PBRMaterial"},e.prototype.clone=function(t){var r=this,n=s.a.Clone(function(){return new e(t,r.getScene())},this);return n.id=t,n.name=t,this.clearCoat.copyTo(n.clearCoat),this.anisotropy.copyTo(n.anisotropy),this.brdf.copyTo(n.brdf),this.sheen.copyTo(n.sheen),this.subSurface.copyTo(n.subSurface),n},e.prototype.serialize=function(){var t=s.a.Serialize(this);return t.customType="BABYLON.PBRMaterial",t.clearCoat=this.clearCoat.serialize(),t.anisotropy=this.anisotropy.serialize(),t.brdf=this.brdf.serialize(),t.sheen=this.sheen.serialize(),t.subSurface=this.subSurface.serialize(),t},e.Parse=function(t,r,n){var a=s.a.Parse(function(){return new e(t.name,r)},t,r,n);return t.clearCoat&&a.clearCoat.parse(t.clearCoat,r,n),t.anisotropy&&a.anisotropy.parse(t.anisotropy,r,n),t.brdf&&a.brdf.parse(t.brdf,r,n),t.sheen&&a.sheen.parse(t.sheen,r,n),t.subSurface&&a.subSurface.parse(t.subSurface,r,n),a},e.PBRMATERIAL_OPAQUE=c.a.PBRMATERIAL_OPAQUE,e.PBRMATERIAL_ALPHATEST=c.a.PBRMATERIAL_ALPHATEST,e.PBRMATERIAL_ALPHABLEND=c.a.PBRMATERIAL_ALPHABLEND,e.PBRMATERIAL_ALPHATESTANDBLEND=c.a.PBRMATERIAL_ALPHATESTANDBLEND,e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=c.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"directIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"specularIntensity",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"disableBumpMap",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureStrength",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"opacityTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallic",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"roughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicF0Factor",void 0),Object(l.c)([Object(s.e)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceColor",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurfaceTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"bumpTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty",null)],e.prototype,"lightmapTexture",void 0),Object(l.c)([Object(s.e)("ambient"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientColor",void 0),Object(l.c)([Object(s.e)("albedo"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoColor",void 0),Object(l.c)([Object(s.e)("reflectivity"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityColor",void 0),Object(l.c)([Object(s.e)("reflection"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionColor",void 0),Object(l.c)([Object(s.e)("emissive"),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveColor",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurface",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLightmapAsShadowmap",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"useAlphaFromAlbedoTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"forceAlphaTest",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"alphaCutOff",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useSpecularOverAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientInGrayScale",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(l.c)([Object(s.c)()],e.prototype,"usePhysicalLightFalloff",null),Object(l.c)([Object(s.c)()],e.prototype,"useGLTFLightFalloff",null),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOverAlpha",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useObjectSpaceNormalMap",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallax",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallaxOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"parallaxScaleBias",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"disableLighting",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceIrradianceInFragment",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"maxSimultaneousLights",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapX",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapY",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"twoSidedLighting",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAlphaFresnel",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLinearAlphaFresnel",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentBRDFTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceNormalForward",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"enableSpecularAntiAliasing",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useHorizonOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOcclusion",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsMiscDirty")],e.prototype,"unlit",void 0),e}(c.a);_.a.RegisteredTypes["BABYLON.PBRMaterial"]=p},534:function(J,j,o){"use strict";var l=o(435),s="postprocessVertexShader",C=`
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
}`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},538:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(434),s=o(442),C=o(458),v=o(574),c=function(_){Object(l.d)(p,_);function p(i,e,t,r,n){var a=this,f=n&&n.generateMipMaps?n.generateMipMaps:!1,h=n&&n.generateDepthTexture?n.generateDepthTexture:!1,d=!n||n.doNotChangeAspectRatio===void 0?!0:n.doNotChangeAspectRatio,g=n&&n.drawOnlyOnFirstAttachmentByDefault?n.drawOnlyOnFirstAttachmentByDefault:!1;if(a=_.call(this,i,e,r,f,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var O=[],P=[];a._initTypes(t,O,P,n);var A=!n||n.generateDepthBuffer===void 0?!0:n.generateDepthBuffer,b=!n||n.generateStencilBuffer===void 0?!1:n.generateStencilBuffer;return a._size=e,a._multiRenderTargetOptions={samplingModes:P,generateMipMaps:f,generateDepthBuffer:A,generateStencilBuffer:b,generateDepthTexture:h,types:O,textureCount:t},a._count=t,a._drawOnlyOnFirstAttachmentByDefault=g,t>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(p.prototype,"isSupported",{get:function(){var i,e;return(e=(i=this._engine)===null||i===void 0?void 0:i.getCaps().drawBuffersExtension)!==null&&e!==void 0?e:!1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapU",{set:function(i){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapU=i},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapV",{set:function(i){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapV=i},enumerable:!1,configurable:!0}),p.prototype._initTypes=function(i,e,t,r){for(var n=0;n<i;n++)r&&r.types&&r.types[n]!==void 0?e.push(r.types[n]):e.push(r&&r.defaultType?r.defaultType:0),r&&r.samplingModes&&r.samplingModes[n]!==void 0?t.push(r.samplingModes[n]):t.push(s.a.BILINEAR_SAMPLINGMODE)},p.prototype._rebuild=function(i){if(i===void 0&&(i=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),i&&this._createTextures();for(var e=0;e<this._internalTextures.length;e++){var t=this._textures[e];t._texture=this._internalTextures[e]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},p.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},p.prototype._createTextures=function(){this._textures=[];for(var i=0;i<this._internalTextures.length;i++){var e=new s.a(null,this.getScene());e._texture=this._internalTextures[i],this._textures.push(e)}},p.prototype.replaceTexture=function(i,e){i._texture&&(this._textures[e]=i,this._internalTextures[e]=i._texture,e===0&&(this._texture=this._internalTextures[e]))},Object.defineProperty(p.prototype,"samples",{get:function(){return this._samples},set:function(i){this._samples!==i&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,i):this._samples=i)},enumerable:!1,configurable:!0}),p.prototype.resize=function(i){this._size=i,this._rebuild()},p.prototype.updateCount=function(i,e){this._multiRenderTargetOptions.textureCount=i,this._count=i;var t=[],r=[];this._initTypes(i,t,r,e),this._multiRenderTargetOptions.types=t,this._multiRenderTargetOptions.samplingModes=r,this._rebuild(!0)},p.prototype.unbindFrameBuffer=function(i,e){var t=this;i.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){t.onAfterRenderObservable.notifyObservers(e)})},p.prototype.dispose=function(){this.releaseInternalTextures(),_.prototype.dispose.call(this)},p.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var i=this._internalTextures.length-1;i>=0;i--)this._internalTextures[i]!==void 0&&(this._internalTextures[i].dispose(),this._internalTextures.splice(i,1))},p}(C.a)},542:function(J,j,o){"use strict";o.d(j,"a",function(){return _});var l=o(434),s=o(436),C=o(588),v=o(453),c=o(465),_=function(p){Object(l.d)(i,p);function i(e,t,r,n,a,f,h){r===void 0&&(r=null),n===void 0&&(n=null),a===void 0&&(a=null),f===void 0&&(f=null),h===void 0&&(h=null);var d=p.call(this,e,t.getScene())||this;return d.name=e,d.children=new Array,d.animations=new Array,d._index=null,d._absoluteTransform=new s.a,d._invertedAbsoluteTransform=new s.a,d._scalingDeterminant=1,d._worldTransform=new s.a,d._needToDecompose=!0,d._needToCompose=!1,d._linkedTransformNode=null,d._waitingTransformNodeId=null,d._skeleton=t,d._localMatrix=n?n.clone():s.a.Identity(),d._restPose=a||d._localMatrix.clone(),d._bindPose=d._localMatrix.clone(),d._baseMatrix=f||d._localMatrix.clone(),d._index=h,t.bones.push(d),d.setParent(r,!1),(f||n)&&d._updateDifferenceMatrix(),d}return Object.defineProperty(i.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(e){this._localMatrix.copyFrom(e),this._needToDecompose=!0},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"Bone"},i.prototype.getSkeleton=function(){return this._skeleton},i.prototype.getParent=function(){return this._parent},i.prototype.getChildren=function(){return this.children},i.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},i.prototype.setParent=function(e,t){if(t===void 0&&(t=!0),this._parent!==e){if(this._parent){var r=this._parent.children.indexOf(this);r!==-1&&this._parent.children.splice(r,1)}this._parent=e,this._parent&&this._parent.children.push(this),t&&this._updateDifferenceMatrix(),this.markAsDirty()}},i.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},i.prototype.getBaseMatrix=function(){return this._baseMatrix},i.prototype.getRestPose=function(){return this._restPose},i.prototype.setRestPose=function(e){this._restPose.copyFrom(e)},i.prototype.getBindPose=function(){return this._bindPose},i.prototype.setBindPose=function(e){this._bindPose.copyFrom(e)},i.prototype.getWorldMatrix=function(){return this._worldTransform},i.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},i.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},i.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},i.prototype.linkTransformNode=function(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},i.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(i.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.getRotation()},set:function(e){this.setRotation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(e){this.setRotationQuaternion(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"scaling",{get:function(){return this.getScale()},set:function(e){this.setScale(e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),i.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=s.e.Zero(),this._localRotation=s.b.Zero(),this._localPosition=s.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},i.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,s.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},i.prototype.updateMatrix=function(e,t,r){t===void 0&&(t=!0),r===void 0&&(r=!0),this._baseMatrix.copyFrom(e),t&&this._updateDifferenceMatrix(),r?(this._needToCompose=!1,this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose()):this.markAsDirty()},i.prototype._updateDifferenceMatrix=function(e,t){if(t===void 0&&(t=!0),e||(e=this._baseMatrix),this._parent?e.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),t)for(var r=0;r<this.children.length;r++)this.children[r]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},i.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},i.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},i.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},i.prototype.translate=function(e,t,r){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix();if(t==c.c.LOCAL)n.addAtIndex(12,e.x),n.addAtIndex(13,e.y),n.addAtIndex(14,e.z);else{var a=null;r&&(a=r.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0],h=i._tmpVecs[0];this._parent?r&&a?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(a,f)):f.copyFrom(this._parent.getAbsoluteTransform()):s.a.IdentityToRef(f),f.setTranslationFromFloats(0,0,0),f.invert(),s.e.TransformCoordinatesToRef(e,f,h),n.addAtIndex(12,h.x),n.addAtIndex(13,h.y),n.addAtIndex(14,h.z)}this._markAsDirtyAndDecompose()},i.prototype.setPosition=function(e,t,r){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix();if(t==c.c.LOCAL)n.setTranslationFromFloats(e.x,e.y,e.z);else{var a=null;r&&(a=r.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0],h=i._tmpVecs[0];this._parent?(r&&a?(f.copyFrom(this._parent.getAbsoluteTransform()),f.multiplyToRef(a,f)):f.copyFrom(this._parent.getAbsoluteTransform()),f.invert()):s.a.IdentityToRef(f),s.e.TransformCoordinatesToRef(e,f,h),n.setTranslationFromFloats(h.x,h.y,h.z)}this._markAsDirtyAndDecompose()},i.prototype.setAbsolutePosition=function(e,t){this.setPosition(e,c.c.WORLD,t)},i.prototype.scale=function(e,t,r,n){n===void 0&&(n=!1);var a=this.getLocalMatrix(),f=i._tmpMats[0];s.a.ScalingToRef(e,t,r,f),f.multiplyToRef(a,a),f.invert();for(var h=0,d=this.children;h<d.length;h++){var g=d[h],O=g.getLocalMatrix();O.multiplyToRef(f,O),O.multiplyAtIndex(12,e),O.multiplyAtIndex(13,t),O.multiplyAtIndex(14,r),g._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),n)for(var P=0,A=this.children;P<A.length;P++){var g=A[P];g.scale(e,t,r,n)}},i.prototype.setScale=function(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()},i.prototype.getScale=function(){return this._decompose(),this._localScaling},i.prototype.getScaleToRef=function(e){this._decompose(),e.copyFrom(this._localScaling)},i.prototype.setYawPitchRoll=function(e,t,r,n,a){if(n===void 0&&(n=c.c.LOCAL),n===c.c.LOCAL){var f=i._tmpQuat;s.b.RotationYawPitchRollToRef(e,t,r,f),this.setRotationQuaternion(f,n,a);return}var h=i._tmpMats[0];if(!!this._getNegativeRotationToRef(h,a)){var d=i._tmpMats[1];s.a.RotationYawPitchRollToRef(e,t,r,d),h.multiplyToRef(d,d),this._rotateWithMatrix(d,n,a)}},i.prototype.rotate=function(e,t,r,n){r===void 0&&(r=c.c.LOCAL);var a=i._tmpMats[0];a.setTranslationFromFloats(0,0,0),s.a.RotationAxisToRef(e,t,a),this._rotateWithMatrix(a,r,n)},i.prototype.setAxisAngle=function(e,t,r,n){if(r===void 0&&(r=c.c.LOCAL),r===c.c.LOCAL){var a=i._tmpQuat;s.b.RotationAxisToRef(e,t,a),this.setRotationQuaternion(a,r,n);return}var f=i._tmpMats[0];if(!!this._getNegativeRotationToRef(f,n)){var h=i._tmpMats[1];s.a.RotationAxisToRef(e,t,h),f.multiplyToRef(h,h),this._rotateWithMatrix(h,r,n)}},i.prototype.setRotation=function(e,t,r){t===void 0&&(t=c.c.LOCAL),this.setYawPitchRoll(e.y,e.x,e.z,t,r)},i.prototype.setRotationQuaternion=function(e,t,r){if(t===void 0&&(t=c.c.LOCAL),t===c.c.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}var n=i._tmpMats[0];if(!!this._getNegativeRotationToRef(n,r)){var a=i._tmpMats[1];s.a.FromQuaternionToRef(e,a),n.multiplyToRef(a,a),this._rotateWithMatrix(a,t,r)}},i.prototype.setRotationMatrix=function(e,t,r){if(t===void 0&&(t=c.c.LOCAL),t===c.c.LOCAL){var n=i._tmpQuat;s.b.FromRotationMatrixToRef(e,n),this.setRotationQuaternion(n,t,r);return}var a=i._tmpMats[0];if(!!this._getNegativeRotationToRef(a,r)){var f=i._tmpMats[1];f.copyFrom(e),a.multiplyToRef(e,f),this._rotateWithMatrix(f,t,r)}},i.prototype._rotateWithMatrix=function(e,t,r){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix(),a=n.m[12],f=n.m[13],h=n.m[14],d=this.getParent(),g=i._tmpMats[3],O=i._tmpMats[4];d&&t==c.c.WORLD?(r?(g.copyFrom(r.getWorldMatrix()),d.getAbsoluteTransform().multiplyToRef(g,g)):g.copyFrom(d.getAbsoluteTransform()),O.copyFrom(g),O.invert(),n.multiplyToRef(g,n),n.multiplyToRef(e,n),n.multiplyToRef(O,n)):t==c.c.WORLD&&r?(g.copyFrom(r.getWorldMatrix()),O.copyFrom(g),O.invert(),n.multiplyToRef(g,n),n.multiplyToRef(e,n),n.multiplyToRef(O,n)):n.multiplyToRef(e,n),n.setTranslationFromFloats(a,f,h),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},i.prototype._getNegativeRotationToRef=function(e,t){var r=i._tmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),t&&(e.multiplyToRef(t.getWorldMatrix(),e),s.a.ScalingToRef(t.scaling.x,t.scaling.y,t.scaling.z,r)),e.invert(),isNaN(e.m[0])?!1:(r.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(r,e),!0)},i.prototype.getPosition=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var r=s.e.Zero();return this.getPositionToRef(e,t,r),r},i.prototype.getPositionToRef=function(e,t,r){if(e===void 0&&(e=c.c.LOCAL),e==c.c.LOCAL){var n=this.getLocalMatrix();r.x=n.m[12],r.y=n.m[13],r.z=n.m[14]}else{var a=null;t&&(a=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var f=i._tmpMats[0];t&&a?(f.copyFrom(this.getAbsoluteTransform()),f.multiplyToRef(a,f)):f=this.getAbsoluteTransform(),r.x=f.m[12],r.y=f.m[13],r.z=f.m[14]}},i.prototype.getAbsolutePosition=function(e){e===void 0&&(e=null);var t=s.e.Zero();return this.getPositionToRef(c.c.WORLD,e,t),t},i.prototype.getAbsolutePositionToRef=function(e,t){this.getPositionToRef(c.c.WORLD,e,t)},i.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var e=this._skeleton.getPoseMatrix();e&&this._absoluteTransform.multiplyToRef(e,this._absoluteTransform)}for(var t=this.children,r=t.length,n=0;n<r;n++)t[n].computeAbsoluteTransforms()},i.prototype.getDirection=function(e,t){t===void 0&&(t=null);var r=s.e.Zero();return this.getDirectionToRef(e,t,r),r},i.prototype.getDirectionToRef=function(e,t,r){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),t&&n&&a.multiplyToRef(n,a),s.e.TransformNormalToRef(e,a,r),r.normalize()},i.prototype.getRotation=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var r=s.e.Zero();return this.getRotationToRef(e,t,r),r},i.prototype.getRotationToRef=function(e,t,r){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var n=i._tmpQuat;this.getRotationQuaternionToRef(e,t,n),n.toEulerAnglesToRef(r)},i.prototype.getRotationQuaternion=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var r=s.b.Identity();return this.getRotationQuaternionToRef(e,t,r),r},i.prototype.getRotationQuaternionToRef=function(e,t,r){if(e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null),e==c.c.LOCAL)this._decompose(),r.copyFrom(this._localRotation);else{var n=i._tmpMats[0],a=this.getAbsoluteTransform();t?a.multiplyToRef(t.getWorldMatrix(),n):n.copyFrom(a),n.multiplyAtIndex(0,this._scalingDeterminant),n.multiplyAtIndex(1,this._scalingDeterminant),n.multiplyAtIndex(2,this._scalingDeterminant),n.decompose(void 0,r,void 0)}},i.prototype.getRotationMatrix=function(e,t){e===void 0&&(e=c.c.LOCAL);var r=s.a.Identity();return this.getRotationMatrixToRef(e,t,r),r},i.prototype.getRotationMatrixToRef=function(e,t,r){if(e===void 0&&(e=c.c.LOCAL),e==c.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(r);else{var n=i._tmpMats[0],a=this.getAbsoluteTransform();t?a.multiplyToRef(t.getWorldMatrix(),n):n.copyFrom(a),n.multiplyAtIndex(0,this._scalingDeterminant),n.multiplyAtIndex(1,this._scalingDeterminant),n.multiplyAtIndex(2,this._scalingDeterminant),n.getRotationMatrixToRef(r)}},i.prototype.getAbsolutePositionFromLocal=function(e,t){t===void 0&&(t=null);var r=s.e.Zero();return this.getAbsolutePositionFromLocalToRef(e,t,r),r},i.prototype.getAbsolutePositionFromLocalToRef=function(e,t,r){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];t&&n?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(n,a)):a=this.getAbsoluteTransform(),s.e.TransformCoordinatesToRef(e,a,r)},i.prototype.getLocalPositionFromAbsolute=function(e,t){t===void 0&&(t=null);var r=s.e.Zero();return this.getLocalPositionFromAbsoluteToRef(e,t,r),r},i.prototype.getLocalPositionFromAbsoluteToRef=function(e,t,r){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=i._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),t&&n&&a.multiplyToRef(n,a),a.invert(),s.e.TransformCoordinatesToRef(e,a,r)},i.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},i._tmpVecs=C.a.BuildArray(2,s.e.Zero),i._tmpQuat=s.b.Identity(),i._tmpMats=C.a.BuildArray(5,s.a.Identity),i}(v.a)},545:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(444),s=o(625),C=o(500),v=o(566),c=function(){function _(){}return _.ExpandRGBDTexture=function(p){var i=p._texture;if(!(!i||!p.isRGBD)){var e=i.getEngine(),t=e.getCaps(),r=!1;t.textureHalfFloatRender&&t.textureHalfFloatLinearFiltering?(r=!0,i.type=2):t.textureFloatRender&&t.textureFloatLinearFiltering&&(r=!0,i.type=1),r&&(i.isReady=!1,i._isRGBD=!1,i.invertY=!1),p.onLoadObservable.addOnce(function(){if(r){var n=new l.a("rgbdDecode","rgbdDecode",null,null,1,null,3,e,!1,void 0,i.type,void 0,null,!1),a=e.createRenderTargetTexture(i.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i.samplingMode,type:i.type,format:5});n.getEffect().executeWhenCompiled(function(){n.onApply=function(f){f._bindTexture("textureSampler",i),f.setFloat2("scale",1,1)},p.getScene().postProcessManager.directRender([n],a,!0),e.restoreDefaultFramebuffer(),e._releaseTexture(i),e._releaseFramebufferObjects(a),n&&n.dispose(),a._swapAndDie(i),i.isReady=!0})}})}},_.EncodeTextureToRGBD=function(p,i,e){return e===void 0&&(e=0),v.a.ApplyPostProcess("rgbdEncode",p,i,e,1,5)},_}()},547:function(J,j,o){"use strict";o.d(j,"a",function(){return v});var l=o(449),s=o(452),C=o(502);Object.defineProperty(l.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(c){c&&c.isSupported&&(this._geometryBufferRenderer=c)},enumerable:!0,configurable:!0}),l.a.prototype.enableGeometryBufferRenderer=function(c){return c===void 0&&(c=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new C.a(this,c),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},l.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var v=function(){function c(_){this.name=s.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=_}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(s.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){},c.prototype._gatherRenderTargets=function(_){this.scene._geometryBufferRenderer&&_.push(this.scene._geometryBufferRenderer.getGBuffer())},c}();C.a._SceneComponentInitialization=function(c){var _=c._getComponent(s.a.NAME_GEOMETRYBUFFERRENDERER);_||(_=new v(c),c._addComponent(_))}},548:function(J,j,o){"use strict";o.d(j,"a",function(){return l});var l=function(){function s(){this._renderPipelines={}}return Object.defineProperty(s.prototype,"supportedPipelines",{get:function(){var C=[];for(var v in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(v)){var c=this._renderPipelines[v];c.isSupported&&C.push(c)}return C},enumerable:!1,configurable:!0}),s.prototype.addPipeline=function(C){this._renderPipelines[C._name]=C},s.prototype.attachCamerasToRenderPipeline=function(C,v,c){c===void 0&&(c=!1);var _=this._renderPipelines[C];!_||_._attachCameras(v,c)},s.prototype.detachCamerasFromRenderPipeline=function(C,v){var c=this._renderPipelines[C];!c||c._detachCameras(v)},s.prototype.enableEffectInPipeline=function(C,v,c){var _=this._renderPipelines[C];!_||_._enableEffect(v,c)},s.prototype.disableEffectInPipeline=function(C,v,c){var _=this._renderPipelines[C];!_||_._disableEffect(v,c)},s.prototype.update=function(){for(var C in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(C)){var v=this._renderPipelines[C];v.isSupported?v._update():(v.dispose(),delete this._renderPipelines[C])}},s.prototype._rebuild=function(){for(var C in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(C)){var v=this._renderPipelines[C];v._rebuild()}},s.prototype.dispose=function(){for(var C in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(C)){var v=this._renderPipelines[C];v.dispose()}},s}()},549:function(J,j,o){"use strict";o.d(j,"a",function(){return s});const l=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>l()?"webgl2":"webgl"},555:function(J,j,o){"use strict";var l=o(446),s=o(447),C=o(436);l.a.prototype.thinInstanceAdd=function(v,c){c===void 0&&(c=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(v)?v.length:1);var _=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(v))for(var p=0;p<v.length;++p)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v[p],p===v.length-1&&c);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,v,c);return _},l.a.prototype.thinInstanceAddSelf=function(v){return v===void 0&&(v=!0),this.thinInstanceAdd(C.a.IdentityReadOnly,v)},l.a.prototype.thinInstanceRegisterAttribute=function(v,c){this.removeVerticesData(v),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[v]=c,this._userThinInstanceBuffersStorage.sizes[v]=c*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[v]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[v]),this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[v],v,!0,!1,c,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])},l.a.prototype.thinInstanceSetMatrixAt=function(v,c,_){if(_===void 0&&(_=!0),!this._thinInstanceDataStorage.matrixData||v>=this._thinInstanceDataStorage.instancesCount)return!1;var p=this._thinInstanceDataStorage.matrixData;return c.copyToArray(p,v*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[v]=c),_&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},l.a.prototype.thinInstanceSetAttributeAt=function(v,c,_,p){return p===void 0&&(p=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[v]||c>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(v,0),this._userThinInstanceBuffersStorage.data[v].set(_,c*this._userThinInstanceBuffersStorage.strides[v]),p&&this.thinInstanceBufferUpdated(v),!0)},Object.defineProperty(l.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(v){var c,_,p=((_=(c=this._thinInstanceDataStorage.matrixData)===null||c===void 0?void 0:c.length)!==null&&_!==void 0?_:0)/16;v<=p&&(this._thinInstanceDataStorage.instancesCount=v)},enumerable:!0,configurable:!0}),l.a.prototype.thinInstanceSetBuffer=function(v,c,_,p){var i,e;if(_===void 0&&(_=0),p===void 0&&(p=!1),_=_||16,v==="matrix")if((i=this._thinInstanceDataStorage.matrixBuffer)===null||i===void 0||i.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=c?c.length:32*_,this._thinInstanceDataStorage.matrixData=c,this._thinInstanceDataStorage.worldMatrices=null,c!==null){this._thinInstanceDataStorage.instancesCount=c.length/_;var t=new s.a(this.getEngine(),c,!p,_,!1,!0);this._thinInstanceDataStorage.matrixBuffer=t,this.setVerticesBuffer(t.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(t.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(t.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(t.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else c===null?((e=this._userThinInstanceBuffersStorage)===null||e===void 0?void 0:e.data[v])&&(this.removeVerticesData(v),delete this._userThinInstanceBuffersStorage.data[v],delete this._userThinInstanceBuffersStorage.strides[v],delete this._userThinInstanceBuffersStorage.sizes[v],delete this._userThinInstanceBuffersStorage.vertexBuffers[v]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[v]=c,this._userThinInstanceBuffersStorage.strides[v]=_,this._userThinInstanceBuffersStorage.sizes[v]=c.length,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),c,v,!p,!1,_,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v]))},l.a.prototype.thinInstanceBufferUpdated=function(v){var c;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((c=this._userThinInstanceBuffersStorage)===null||c===void 0?void 0:c.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(this._userThinInstanceBuffersStorage.data[v],0)},l.a.prototype.thinInstancePartialBufferUpdate=function(v,c,_){var p;v==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(c,_):((p=this._userThinInstanceBuffersStorage)===null||p===void 0?void 0:p.vertexBuffers[v])&&this._userThinInstanceBuffersStorage.vertexBuffers[v].updateDirectly(c,_)},l.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var v=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var c=0;c<this._thinInstanceDataStorage.instancesCount;++c)this._thinInstanceDataStorage.worldMatrices[c]=C.a.FromArray(v,c*16)}return this._thinInstanceDataStorage.worldMatrices},l.a.prototype.thinInstanceRefreshBoundingInfo=function(v){if(v===void 0&&(v=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var c=this._thinInstanceDataStorage.boundingVectors;v&&(c.length=0,this.refreshBoundingInfo(!0));var _=this.getBoundingInfo(),p=this._thinInstanceDataStorage.matrixData;if(c.length===0)for(var i=0;i<_.boundingBox.vectors.length;++i)c.push(_.boundingBox.vectors[i].clone());C.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),C.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var e=0;e<this._thinInstanceDataStorage.instancesCount;++e){C.a.FromArrayToRef(p,e*16,C.c.Matrix[0]);for(var i=0;i<c.length;++i)C.e.TransformCoordinatesToRef(c[i],C.c.Matrix[0],C.c.Vector3[2]),C.c.Vector3[0].minimizeInPlace(C.c.Vector3[2]),C.c.Vector3[1].maximizeInPlace(C.c.Vector3[2])}_.reConstruct(C.c.Vector3[0],C.c.Vector3[1]),this._updateBoundingInfo()}},l.a.prototype._thinInstanceUpdateBufferSize=function(v,c){var _,p;c===void 0&&(c=1);var i=v==="matrix";if(!(!i&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[v]))){for(var e=i?16:this._userThinInstanceBuffersStorage.strides[v],t=i?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[v],r=i?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[v],n=(this._thinInstanceDataStorage.instancesCount+c)*e,a=t;a<n;)a*=2;if(!r||t!=a){if(!r)r=new Float32Array(a);else{var f=new Float32Array(a);f.set(r,0),r=f}if(i){(_=this._thinInstanceDataStorage.matrixBuffer)===null||_===void 0||_.dispose();var h=new s.a(this.getEngine(),r,!0,e,!1,!0);this._thinInstanceDataStorage.matrixBuffer=h,this._thinInstanceDataStorage.matrixData=r,this._thinInstanceDataStorage.matrixBufferSize=a,this.setVerticesBuffer(h.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(h.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(h.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(h.createVertexBuffer("world3",12,4))}else(p=this._userThinInstanceBuffersStorage.vertexBuffers[v])===null||p===void 0||p.dispose(),this._userThinInstanceBuffersStorage.data[v]=r,this._userThinInstanceBuffersStorage.sizes[v]=a,this._userThinInstanceBuffersStorage.vertexBuffers[v]=new s.b(this.getEngine(),r,v,!0,!1,e,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[v])}}},l.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},l.a.prototype._disposeThinInstanceSpecificData=function(){var v;((v=this._thinInstanceDataStorage)===null||v===void 0?void 0:v.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},566:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(442),s=o(458),C=o(486),v=o(444),c=function(){function _(){}return _.CreateResizedCopy=function(p,i,e,t){t===void 0&&(t=!0);var r=p.getScene(),n=r.getEngine(),a=new s.a("resized"+p.name,{width:i,height:e},r,!p.noMipmap,!0,p._texture.type,!1,p.samplingMode,!1);a.wrapU=p.wrapU,a.wrapV=p.wrapV,a.uOffset=p.uOffset,a.vOffset=p.vOffset,a.uScale=p.uScale,a.vScale=p.vScale,a.uAng=p.uAng,a.vAng=p.vAng,a.wAng=p.wAng,a.coordinatesIndex=p.coordinatesIndex,a.level=p.level,a.anisotropicFilteringLevel=p.anisotropicFilteringLevel,a._texture.isReady=!1,p.wrapU=l.a.CLAMP_ADDRESSMODE,p.wrapV=l.a.CLAMP_ADDRESSMODE;var f=new C.b("pass",1,null,t?l.a.BILINEAR_SAMPLINGMODE:l.a.NEAREST_SAMPLINGMODE,n,!1,0);return f.getEffect().executeWhenCompiled(function(){f.onApply=function(d){d.setTexture("textureSampler",p)};var h=a.getInternalTexture();h&&(r.postProcessManager.directRender([f],h),n.unBindFramebuffer(h),a.disposeFramebufferObjects(),f.dispose(),h.isReady=!0)}),a},_.ApplyPostProcess=function(p,i,e,t,r,n){var a=i.getEngine();return i.isReady=!1,r=r!=null?r:i.samplingMode,t=t!=null?t:i.type,n=n!=null?n:i.format,t===-1&&(t=0),new Promise(function(f){var h=new v.a("postprocess",p,null,null,1,null,r,a,!1,void 0,t,void 0,null,!1,n),d=a.createRenderTargetTexture({width:i.width,height:i.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:r,type:t,format:n});h.getEffect().executeWhenCompiled(function(){h.onApply=function(g){g._bindTexture("textureSampler",i),g.setFloat2("scale",1,1)},e.postProcessManager.directRender([h],d,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(i),a._releaseFramebufferObjects(d),h&&h.dispose(),d._swapAndDie(i),i.type=t,i.format=5,i.isReady=!0,f(i)})})},_}()},570:function(J,j,o){"use strict";o.d(j,"b",function(){return i}),o.d(j,"a",function(){return e});var l=o(434),s=o(436),C=o(442),v=o(466),c=o(582),_=o(580),p=o(583),i;(function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"})(i||(i={}));var e=function(t){Object(l.d)(r,t);function r(n,a,f,h,d){f===void 0&&(f=i.Low),h===void 0&&(h=0),d===void 0&&(d=!1);var g=t.call(this,n.getEngine(),"depth of field",function(){return g._effects},!0)||this;g._effects=[],g._circleOfConfusion=new c.a("circleOfConfusion",a,1,null,C.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,d),g._depthOfFieldBlurY=[],g._depthOfFieldBlurX=[];var O=1,P=15;switch(f){case i.High:{O=3,P=51;break}case i.Medium:{O=2,P=31;break}default:{P=15,O=1;break}}for(var A=P/Math.pow(2,O-1),b=1,L=0;L<O;L++){var D=new _.a("vertical blur",n,new s.d(0,1),A,b,null,g._circleOfConfusion,L==0?g._circleOfConfusion:null,C.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,d);D.autoClear=!1,b=.75/Math.pow(2,L);var U=new _.a("horizontal blur",n,new s.d(1,0),A,b,null,g._circleOfConfusion,null,C.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,d);U.autoClear=!1,g._depthOfFieldBlurY.push(D),g._depthOfFieldBlurX.push(U)}g._effects=[g._circleOfConfusion];for(var L=0;L<g._depthOfFieldBlurX.length;L++)g._effects.push(g._depthOfFieldBlurY[L]),g._effects.push(g._depthOfFieldBlurX[L]);return g._dofMerge=new p.a("dofMerge",g._circleOfConfusion,g._circleOfConfusion,g._depthOfFieldBlurX,b,null,C.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,d),g._dofMerge.autoClear=!1,g._effects.push(g._dofMerge),g}return Object.defineProperty(r.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(n){this._circleOfConfusion.focalLength=n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(n){this._circleOfConfusion.fStop=n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(n){this._circleOfConfusion.focusDistance=n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(n){this._circleOfConfusion.lensSize=n},enumerable:!1,configurable:!0}),r.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(r.prototype,"depthTexture",{set:function(n){this._circleOfConfusion.depthTexture=n},enumerable:!1,configurable:!0}),r.prototype.disposeEffects=function(n){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(n)},r.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},r.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},r}(v.a)},571:function(J,j,o){"use strict";o.d(j,"a",function(){return h});var l=o(434),s=o(440),C=o(436),v=o(444),c=o(502),_=function(){function d(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return d}(),p=o(530),i=o(547),e=o(435),t="motionBlurPixelShader",r=`
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
`;e.a.ShadersStore[t]=r;var n={name:t,shader:r},a=o(439),f=o(437),h=function(d){Object(l.d)(g,d);function g(O,P,A,b,L,D,U,y,V,I){y===void 0&&(y=0),V===void 0&&(V=!1),I===void 0&&(I=!1);var x=d.call(this,O,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],A,b,L,D,U,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,y,void 0,null,V)||this;return x.motionStrength=1,x._motionBlurSamples=32,x._isObjectBased=!0,x._forceGeometryBuffer=!1,x._geometryBufferRenderer=null,x._prePassRenderer=null,x._invViewProjection=null,x._previousViewProjection=null,x._forceGeometryBuffer=I,x._forceGeometryBuffer?(x._geometryBufferRenderer=P.enableGeometryBufferRenderer(),x._geometryBufferRenderer&&(x._geometryBufferRenderer.enableVelocity=!0)):(x._prePassRenderer=P.enablePrePassRenderer(),x._prePassRenderer&&(x._prePassRenderer.markAsDirty(),x._prePassEffectConfiguration=new _)),x._applyMode(),x}return Object.defineProperty(g.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(O){this._motionBlurSamples=O,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(O){this._isObjectBased!==O&&(this._isObjectBased=O,this._applyMode())},enumerable:!1,configurable:!0}),g.prototype.getClassName=function(){return"MotionBlurPostProcess"},g.prototype.excludeSkinnedMesh=function(O){if(O.skeleton){var P=void 0;if(this._geometryBufferRenderer)P=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)P=this._prePassRenderer.excludedSkinnedMesh;else return;P.push(O)}},g.prototype.removeExcludedSkinnedMesh=function(O){if(O.skeleton){var P=void 0;if(this._geometryBufferRenderer)P=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)P=this._prePassRenderer.excludedSkinnedMesh;else return;var A=P.indexOf(O);A!==-1&&P.splice(A,1)}},g.prototype.dispose=function(O){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),d.prototype.dispose.call(this,O)},g.prototype._applyMode=function(){var O=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return s.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(P){return O._onApplyObjectBased(P)}):(this._invViewProjection=C.a.Identity(),this._previousViewProjection=C.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(P){return O._onApplyScreenBased(P)})},g.prototype._onApplyObjectBased=function(O){if(O.setVector2("screenSize",new C.d(this.width,this.height)),O.setFloat("motionScale",this._scene.getAnimationRatio()),O.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var P=this._geometryBufferRenderer.getTextureIndex(c.a.VELOCITY_TEXTURE_TYPE);O.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[P])}else if(this._prePassRenderer){var P=this._prePassRenderer.getIndex(2);O.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[P])}},g.prototype._onApplyScreenBased=function(O){var P=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(P.invertToRef(this._invViewProjection),O.setMatrix("inverseViewProjection",this._invViewProjection),O.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=P,O.setVector2("screenSize",new C.d(this.width,this.height)),O.setFloat("motionScale",this._scene.getAnimationRatio()),O.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var A=this._geometryBufferRenderer.getTextureIndex(c.a.DEPTH_TEXTURE_TYPE);O.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[A])}else if(this._prePassRenderer){var A=this._prePassRenderer.getIndex(5);O.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[A])}},g.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var O=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(O.join(`
`))}},g._Parse=function(O,P,A,b){return a.a.Parse(function(){return new g(O.name,A,O.options,P,O.renderTargetSamplingMode,A.getEngine(),O.reusable,O.textureType,!1)},O,A,b)},Object(l.c)([Object(a.c)()],g.prototype,"motionStrength",void 0),Object(l.c)([Object(a.c)()],g.prototype,"motionBlurSamples",null),Object(l.c)([Object(a.c)()],g.prototype,"isObjectBased",null),g}(v.a);f.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=h},572:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(436),s=o(441),C=o(483),v=o(700),c=Object.freeze(new l.b(0,0,0,0)),_=Object.freeze(l.e.Zero()),p=Object.freeze(l.d.Zero()),i=Object.freeze(v.a.Zero()),e=Object.freeze(s.a.Black()),t=function(){function r(n,a,f,h){var d=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=n,this._scene=f,this._host=h,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===C.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=l.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var g={frame:0,value:this._minValue};this._keys.splice(0,0,g)}if(this._target instanceof Array){for(var O=0,P=0,A=this._target;P<A.length;P++){var b=A[P];this._preparePath(b,O),this._getOriginalValues(O),O++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var L=a.getEvents();L&&L.length>0&&L.forEach(function(D){d._events.push(D._clone())}),this._enableBlending=n&&n.animationPropertiesOverride?n.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(r.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),r.prototype._preparePath=function(n,a){a===void 0&&(a=0);var f=this._animation.targetPropertyPath;if(f.length>1){for(var h=n[f[0]],d=1;d<f.length-1;d++)h=h[f[d]];this._targetPath=f[f.length-1],this._activeTargets[a]=h}else this._targetPath=f[0],this._activeTargets[a]=n},Object.defineProperty(r.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),r.prototype.reset=function(n){if(n===void 0&&(n=!1),n)if(this._target instanceof Array)for(var a=0,f=0,h=this._target;f<h.length;f++){var d=h[f];this._originalValue[a]!==void 0&&this._setValue(d,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},r.prototype.isStopped=function(){return this._stopped},r.prototype.dispose=function(){var n=this._animation.runtimeAnimations.indexOf(this);n>-1&&this._animation.runtimeAnimations.splice(n,1)},r.prototype.setValue=function(n,a){if(this._targetIsArray){for(var f=0;f<this._target.length;f++){var h=this._target[f];this._setValue(h,this._activeTargets[f],n,a,f)}return}this._setValue(this._target,this._directTarget,n,a,0)},r.prototype._getOriginalValues=function(n){n===void 0&&(n=0);var a,f=this._activeTargets[n];f.getRestPose&&this._targetPath==="_matrix"?a=f.getRestPose():a=f[this._targetPath],a&&a.clone?this._originalValue[n]=a.clone():this._originalValue[n]=a},r.prototype._setValue=function(n,a,f,h,d){if(this._currentActiveTarget=a,this._weight=h,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var g=a[this._targetPath];g.clone?this._originalBlendValue=g.clone():this._originalBlendValue=g}this._originalBlendValue.m?C.a.AllowMatrixDecomposeForInterpolation?this._currentValue?l.a.DecomposeLerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.DecomposeLerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue?l.a.LerpToRef(this._originalBlendValue,f,this._blendingFactor,this._currentValue):this._currentValue=l.a.Lerp(this._originalBlendValue,f,this._blendingFactor):this._currentValue=C.a._UniversalLerp(this._originalBlendValue,f,this._blendingFactor);var O=n&&n.animationPropertiesOverride?n.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=O}else this._currentValue=f;h!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[d]):a[this._targetPath]=this._currentValue,n.markAsDirty&&n.markAsDirty(this._animation.targetProperty)},r.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},r.prototype.goToFrame=function(n){var a=this._animation.getKeys();n<a[0].frame?n=a[0].frame:n>a[a.length-1].frame&&(n=a[a.length-1].frame);var f=this._events;if(f.length)for(var h=0;h<f.length;h++)f[h].onlyOnce||(f[h].isDone=f[h].frame<n);this._currentFrame=n;var d=this._animation._interpolate(n,this._animationState);this.setValue(d,-1)},r.prototype._prepareForSpeedRatioChange=function(n){var a=this._previousDelay*(this._animation.framePerSecond*n)/1e3;this._ratioOffset=this._previousRatio-a},r.prototype.animate=function(n,a,f,h,d,g){g===void 0&&(g=-1);var O=this._animation,P=O.targetPropertyPath;if(!P||P.length<1)return this._stopped=!0,!1;var A=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(f<this._minFrame||f>this._maxFrame)&&(f=this._maxFrame);var b=f-a,L,D=n*(O.framePerSecond*d)/1e3+this._ratioOffset,U=0;if(this._previousDelay=n,this._previousRatio=D,!h&&f>=a&&D>=b)A=!1,U=O._getKeyValue(this._maxValue);else if(!h&&a>=f&&D<=b)A=!1,U=O._getKeyValue(this._minValue);else if(this._animationState.loopMode!==C.a.ANIMATIONLOOPMODE_CYCLE){var y=f.toString()+a.toString();if(!this._offsetsCache[y]){this._animationState.repeatCount=0,this._animationState.loopMode=C.a.ANIMATIONLOOPMODE_CYCLE;var V=O._interpolate(a,this._animationState),I=O._interpolate(f,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),O.dataType){case C.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[y]=I-V;break;case C.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[y]=I.subtract(V);break;case C.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[y]=I.subtract(V);break;case C.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[y]=I.subtract(V);break;case C.a.ANIMATIONTYPE_SIZE:this._offsetsCache[y]=I.subtract(V);break;case C.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[y]=I.subtract(V);break;default:break}this._highLimitsCache[y]=I}U=this._highLimitsCache[y],L=this._offsetsCache[y]}if(L===void 0)switch(O.dataType){case C.a.ANIMATIONTYPE_FLOAT:L=0;break;case C.a.ANIMATIONTYPE_QUATERNION:L=c;break;case C.a.ANIMATIONTYPE_VECTOR3:L=_;break;case C.a.ANIMATIONTYPE_VECTOR2:L=p;break;case C.a.ANIMATIONTYPE_SIZE:L=i;break;case C.a.ANIMATIONTYPE_COLOR3:L=e}var x;if(this._host&&this._host.syncRoot){var E=this._host.syncRoot,z=(E.masterFrame-E.fromFrame)/(E.toFrame-E.fromFrame);x=a+(f-a)*z}else x=A&&b!==0?a+D%b:f;var H=this._events;if((b>0&&this.currentFrame>x||b<0&&this.currentFrame<x)&&(this._onLoop(),H.length))for(var F=0;F<H.length;F++)H[F].onlyOnce||(H[F].isDone=!1);this._currentFrame=x,this._animationState.repeatCount=b===0?0:D/b>>0,this._animationState.highLimitValue=U,this._animationState.offsetValue=L;var Y=O._interpolate(x,this._animationState);if(this.setValue(Y,g),H.length){for(var F=0;F<H.length;F++)if(b>0&&x>=H[F].frame&&H[F].frame>=a||b<0&&x<=H[F].frame&&H[F].frame<=a){var Z=H[F];Z.isDone||(Z.onlyOnce&&(H.splice(F,1),F--),Z.isDone=!0,Z.action(x))}}return A||(this._stopped=!0),A},r}()},574:function(J,j,o){"use strict";var l=o(456),s=o(440),C=o(467);C.a.prototype.restoreSingleAttachment=function(){var v=this._gl;this.bindAttachments([v.BACK])},C.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var v=this._gl;this.bindAttachments([v.COLOR_ATTACHMENT0])},C.a.prototype.buildTextureLayout=function(v){for(var c=this._gl,_=[],p=0;p<v.length;p++)v[p]?_.push(c["COLOR_ATTACHMENT"+p]):_.push(c.NONE);return _},C.a.prototype.bindAttachments=function(v){var c=this._gl;c.drawBuffers(v)},C.a.prototype.clearAttachments=function(v,c,_,p,i){if(v.length!==0){var e=this._gl;e.drawBuffers([v[0]]),this.clear(c,c!==null,p,i);var t=v[0];v[0]=e.NONE,e.drawBuffers(v),this.clear(_,_!==null,!1,!1),v[0]=t}},C.a.prototype.unBindMultiColorAttachmentFramebuffer=function(v,c,_){c===void 0&&(c=!1),this._currentRenderTarget=null;var p=this._gl,i=v[0]._attachments,e=i.length;if(v[0]._MSAAFramebuffer){p.bindFramebuffer(p.READ_FRAMEBUFFER,v[0]._MSAAFramebuffer),p.bindFramebuffer(p.DRAW_FRAMEBUFFER,v[0]._framebuffer);for(var t=0;t<e;t++){for(var r=v[t],n=0;n<e;n++)i[n]=p.NONE;i[t]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],p.readBuffer(i[t]),p.drawBuffers(i),p.blitFramebuffer(0,0,r.width,r.height,0,0,r.width,r.height,p.COLOR_BUFFER_BIT,p.NEAREST)}for(var t=0;t<e;t++)i[t]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"];p.drawBuffers(i)}for(var t=0;t<e;t++){var r=v[t];r.generateMipMaps&&!c&&!r.isCube&&(this._bindTextureDirectly(p.TEXTURE_2D,r,!0),p.generateMipmap(p.TEXTURE_2D),this._bindTextureDirectly(p.TEXTURE_2D,null))}_&&(v[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(v[0]._framebuffer),_()),this._bindUnboundFramebuffer(null)},C.a.prototype.createMultipleRenderTarget=function(v,c,_){_===void 0&&(_=!0);var p=!1,i=!0,e=!1,t=!1,r=1,n=0,a=3,f=new Array,h=new Array;c!==void 0&&(p=c.generateMipMaps===void 0?!1:c.generateMipMaps,i=c.generateDepthBuffer===void 0?!0:c.generateDepthBuffer,e=c.generateStencilBuffer===void 0?!1:c.generateStencilBuffer,t=c.generateDepthTexture===void 0?!1:c.generateDepthTexture,r=c.textureCount||1,c.types&&(f=c.types),c.samplingModes&&(h=c.samplingModes));var d=this._gl,g=d.createFramebuffer();this._bindUnboundFramebuffer(g);for(var O=v.width||v,P=v.height||v,A=[],b=[],L=this._setupFramebufferDepthAttachments(e,i,O,P),D=0;D<r;D++){var U=h[D]||a,y=f[D]||n;(y===1&&!this._caps.textureFloatLinearFiltering||y===2&&!this._caps.textureHalfFloatLinearFiltering)&&(U=1);var V=this._getSamplingParameters(U,p);y===1&&!this._caps.textureFloat&&(y=0,s.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var I=new l.a(this,l.b.MultiRenderTarget),x=d[this.webGLVersion>1?"COLOR_ATTACHMENT"+D:"COLOR_ATTACHMENT"+D+"_WEBGL"];A.push(I),b.push(x),d.activeTexture(d["TEXTURE"+D]),d.bindTexture(d.TEXTURE_2D,I._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,V.mag),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,V.min),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(y),O,P,0,d.RGBA,this._getWebGLTextureType(y),null),d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,x,d.TEXTURE_2D,I._hardwareTexture.underlyingResource,0),p&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(d.TEXTURE_2D,null),I._framebuffer=g,I._depthStencilBuffer=L,I.baseWidth=O,I.baseHeight=P,I.width=O,I.height=P,I.isReady=!0,I.samples=1,I.generateMipMaps=p,I.samplingMode=U,I.type=y,I._generateDepthBuffer=i,I._generateStencilBuffer=e,I._attachments=b,I._textureArray=A,this._internalTexturesCache.push(I)}if(t&&this._caps.depthTextureExtension){var E=new l.a(this,l.b.MultiRenderTarget);d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,E._hardwareTexture.underlyingResource),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texImage2D(d.TEXTURE_2D,0,this.webGLVersion<2?d.DEPTH_COMPONENT:d.DEPTH_COMPONENT16,O,P,0,d.DEPTH_COMPONENT,d.UNSIGNED_SHORT,null),d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,E._hardwareTexture.underlyingResource,0),E._framebuffer=g,E.baseWidth=O,E.baseHeight=P,E.width=O,E.height=P,E.isReady=!0,E.samples=1,E.generateMipMaps=p,E.samplingMode=d.NEAREST,E._generateDepthBuffer=i,E._generateStencilBuffer=e,A.push(E),this._internalTexturesCache.push(E)}return _&&d.drawBuffers(b),this._bindUnboundFramebuffer(null),this.resetTextureCache(),A},C.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(v,c,_){if(_===void 0&&(_=!0),this.webGLVersion<2||!v)return 1;if(v[0].samples===c)return c;var p=v[0]._attachments.length;if(p===0)return 1;var i=this._gl;c=Math.min(c,this.getCaps().maxMSAASamples),v[0]._depthStencilBuffer&&(i.deleteRenderbuffer(v[0]._depthStencilBuffer),v[0]._depthStencilBuffer=null),v[0]._MSAAFramebuffer&&(i.deleteFramebuffer(v[0]._MSAAFramebuffer),v[0]._MSAAFramebuffer=null);for(var e=0;e<p;e++)v[e]._MSAARenderBuffer&&(i.deleteRenderbuffer(v[e]._MSAARenderBuffer),v[e]._MSAARenderBuffer=null);if(c>1&&i.renderbufferStorageMultisample){var t=i.createFramebuffer();if(!t)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(t);for(var r=this._setupFramebufferDepthAttachments(v[0]._generateStencilBuffer,v[0]._generateDepthBuffer,v[0].width,v[0].height,c),n=[],e=0;e<p;e++){var a=v[e],f=i[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],h=i.createRenderbuffer();if(!h)throw new Error("Unable to create multi sampled framebuffer");i.bindRenderbuffer(i.RENDERBUFFER,h),i.renderbufferStorageMultisample(i.RENDERBUFFER,c,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,f,i.RENDERBUFFER,h),a._MSAAFramebuffer=t,a._MSAARenderBuffer=h,a.samples=c,a._depthStencilBuffer=r,i.bindRenderbuffer(i.RENDERBUFFER,null),n.push(f)}_&&i.drawBuffers(n)}else this._bindUnboundFramebuffer(v[0]._framebuffer);return this._bindUnboundFramebuffer(null),c}},576:function(J,j,o){"use strict";o.d(j,"a",function(){return c});var l=o(451),s=o(452),C=o(516),v=o(468);v.a.AddParser(s.a.NAME_EFFECTLAYER,function(_,p,i,e){if(_.effectLayers){i.effectLayers||(i.effectLayers=new Array);for(var t=0;t<_.effectLayers.length;t++){var r=C.a.Parse(_.effectLayers[t],p,e);i.effectLayers.push(r)}}}),v.a.prototype.removeEffectLayer=function(_){var p=this.effectLayers.indexOf(_);return p!==-1&&this.effectLayers.splice(p,1),p},v.a.prototype.addEffectLayer=function(_){this.effectLayers.push(_)};var c=function(){function _(p){this.name=s.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=p,this._engine=p.getEngine(),p.effectLayers=new Array}return _.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(s.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(s.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(s.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(s.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(s.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},_.prototype.rebuild=function(){for(var p=this.scene.effectLayers,i=0,e=p;i<e.length;i++){var t=e[i];t._rebuild()}},_.prototype.serialize=function(p){p.effectLayers=[];for(var i=this.scene.effectLayers,e=0,t=i;e<t.length;e++){var r=t[e];r.serialize&&p.effectLayers.push(r.serialize())}},_.prototype.addFromContainer=function(p){var i=this;!p.effectLayers||p.effectLayers.forEach(function(e){i.scene.addEffectLayer(e)})},_.prototype.removeFromContainer=function(p,i){var e=this;!p.effectLayers||p.effectLayers.forEach(function(t){e.scene.removeEffectLayer(t),i&&t.dispose()})},_.prototype.dispose=function(){for(var p=this.scene.effectLayers;p.length;)p[0].dispose()},_.prototype._isReadyForMesh=function(p,i){for(var e=this.scene.effectLayers,t=0,r=e;t<r.length;t++){var n=r[t];if(!!n.hasMesh(p))for(var a=0,f=p.subMeshes;a<f.length;a++){var h=f[a];if(!n.isReady(h,i))return!1}}return!0},_.prototype._renderMainTexture=function(p){this._renderEffects=!1,this._needStencil=!1;var i=!1,e=this.scene.effectLayers;if(e&&e.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var t=0,r=e;t<r.length;t++){var n=r[t];if(n.shouldRender()&&(!n.camera||n.camera.cameraRigMode===l.a.RIG_MODE_NONE&&p===n.camera||n.camera.cameraRigMode!==l.a.RIG_MODE_NONE&&n.camera._rigCameras.indexOf(p)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||n.needStencil();var a=n._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),i=!0)}}this.scene.incrementRenderId()}return i},_.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},_.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},_.prototype._draw=function(p){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var i=this.scene.effectLayers,e=0;e<i.length;e++){var t=i[e];t.renderingGroupId===p&&t.shouldRender()&&t.render()}this._engine.setDepthBuffer(!0)}},_.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},_.prototype._drawRenderingGroup=function(p){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(p)},_}();C.a._SceneComponentInitialization=function(_){var p=_._getComponent(s.a.NAME_EFFECTLAYER);p||(p=new c(_),_._addComponent(p))}},577:function(J,j,o){"use strict";o.d(j,"a",function(){return g});var l=o(434),s=o(439),C=o(436),v=o(447),c=o(442),_=o(458),p=o(459),i=o(472),e=o(516),t=o(468),r=o(437),n=o(445),a=o(441),f=o(646),h=o(647),d=o(576);t.a.prototype.getGlowLayerByName=function(O){for(var P=0;P<this.effectLayers.length;P++)if(this.effectLayers[P].name===O&&this.effectLayers[P].getEffectName()===g.EffectName)return this.effectLayers[P];return null};var g=function(O){Object(l.d)(P,O);function P(A,b,L){var D=O.call(this,A,b)||this;return D._intensity=1,D._includedOnlyMeshes=[],D._excludedMeshes=[],D._meshesUsingTheirOwnMaterials=[],D.neutralColor=new a.b(0,0,0,1),D._options=Object(l.a)({mainTextureRatio:P.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},L),D._init({alphaBlendingMode:1,camera:D._options.camera,mainTextureFixedSize:D._options.mainTextureFixedSize,mainTextureRatio:D._options.mainTextureRatio,renderingGroupId:D._options.renderingGroupId}),D}return Object.defineProperty(P.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(A){this._horizontalBlurPostprocess1.kernel=A,this._verticalBlurPostprocess1.kernel=A,this._horizontalBlurPostprocess2.kernel=A,this._verticalBlurPostprocess2.kernel=A},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"intensity",{get:function(){return this._intensity},set:function(A){this._intensity=A},enumerable:!1,configurable:!0}),P.prototype.getEffectName=function(){return P.EffectName},P.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[v.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},P.prototype._createTextureAndPostProcesses=function(){var A=this,b=this._mainTextureDesiredSize.width,L=this._mainTextureDesiredSize.height;b=this._engine.needPOTTextures?n.a.GetExponentOfTwo(b,this._maxSize):b,L=this._engine.needPOTTextures?n.a.GetExponentOfTwo(L,this._maxSize):L;var D=0;this._engine.getCaps().textureHalfFloatRender?D=2:D=0,this._blurTexture1=new _.a("GlowLayerBlurRTT",{width:b,height:L},this._scene,!1,!0,D),this._blurTexture1.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var U=Math.floor(b/2),y=Math.floor(L/2);this._blurTexture2=new _.a("GlowLayerBlurRTT2",{width:U,height:y},this._scene,!1,!0,D),this._blurTexture2.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new i.a("GlowLayerHBP1",new C.d(1,0),this._options.blurKernelSize/2,{width:b,height:L},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,D),this._horizontalBlurPostprocess1.width=b,this._horizontalBlurPostprocess1.height=L,this._horizontalBlurPostprocess1.onApplyObservable.add(function(V){V.setTexture("textureSampler",A._mainTexture)}),this._verticalBlurPostprocess1=new i.a("GlowLayerVBP1",new C.d(0,1),this._options.blurKernelSize/2,{width:b,height:L},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,D),this._horizontalBlurPostprocess2=new i.a("GlowLayerHBP2",new C.d(1,0),this._options.blurKernelSize/2,{width:U,height:y},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,D),this._horizontalBlurPostprocess2.width=U,this._horizontalBlurPostprocess2.height=y,this._horizontalBlurPostprocess2.onApplyObservable.add(function(V){V.setTexture("textureSampler",A._blurTexture1)}),this._verticalBlurPostprocess2=new i.a("GlowLayerVBP2",new C.d(0,1),this._options.blurKernelSize/2,{width:U,height:y},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,D),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var V=A._blurTexture1.getInternalTexture();if(V){A._scene.postProcessManager.directRender(A._postProcesses1,V,!0);var I=A._blurTexture2.getInternalTexture();I&&A._scene.postProcessManager.directRender(A._postProcesses2,I,!0),A._engine.unBindFramebuffer(I!=null?I:V,!0)}}),this._postProcesses.map(function(V){V.autoClear=!1})},P.prototype.isReady=function(A,b){var L=A.getMaterial(),D=A.getRenderingMesh();if(!L||!D)return!1;var U=L.emissiveTexture;return O.prototype._isReady.call(this,A,b,U)},P.prototype.needStencil=function(){return!1},P.prototype._canRenderMesh=function(A,b){return!0},P.prototype._internalRender=function(A){A.setTexture("textureSampler",this._blurTexture1),A.setTexture("textureSampler2",this._blurTexture2),A.setFloat("offset",this._intensity);var b=this._engine,L=b.getStencilBuffer();b.setStencilBuffer(!1),b.drawElementsType(p.a.TriangleFillMode,0,6),b.setStencilBuffer(L)},P.prototype._setEmissiveTextureAndColor=function(A,b,L){var D=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(A,b,L):L?(this._emissiveTextureAndColor.texture=L.emissiveTexture,this._emissiveTextureAndColor.texture&&(D=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(A,b,L,this._emissiveTextureAndColor.color):L.emissiveColor?this._emissiveTextureAndColor.color.set(L.emissiveColor.r*D,L.emissiveColor.g*D,L.emissiveColor.b*D,L.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},P.prototype._shouldRenderMesh=function(A){return this.hasMesh(A)},P.prototype._addCustomEffectDefines=function(A){A.push("#define GLOW")},P.prototype.addExcludedMesh=function(A){this._excludedMeshes.indexOf(A.uniqueId)===-1&&this._excludedMeshes.push(A.uniqueId)},P.prototype.removeExcludedMesh=function(A){var b=this._excludedMeshes.indexOf(A.uniqueId);b!==-1&&this._excludedMeshes.splice(b,1)},P.prototype.addIncludedOnlyMesh=function(A){this._includedOnlyMeshes.indexOf(A.uniqueId)===-1&&this._includedOnlyMeshes.push(A.uniqueId)},P.prototype.removeIncludedOnlyMesh=function(A){var b=this._includedOnlyMeshes.indexOf(A.uniqueId);b!==-1&&this._includedOnlyMeshes.splice(b,1)},P.prototype.hasMesh=function(A){return O.prototype.hasMesh.call(this,A)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(A.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(A.uniqueId)===-1:!0:!1},P.prototype._useMeshMaterial=function(A){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId)>-1},P.prototype.referenceMeshToUseItsOwnMaterial=function(A){this._meshesUsingTheirOwnMaterials.push(A.uniqueId)},P.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(A){for(var b=this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId);b>=0;)this._meshesUsingTheirOwnMaterials.splice(b,1),b=this._meshesUsingTheirOwnMaterials.indexOf(A.uniqueId)},P.prototype._disposeMesh=function(A){this.removeIncludedOnlyMesh(A),this.removeExcludedMesh(A)},P.prototype.getClassName=function(){return"GlowLayer"},P.prototype.serialize=function(){var A=s.a.Serialize(this);A.customType="BABYLON.GlowLayer";var b;if(A.includedMeshes=[],this._includedOnlyMeshes.length)for(b=0;b<this._includedOnlyMeshes.length;b++){var L=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[b]);L&&A.includedMeshes.push(L.id)}if(A.excludedMeshes=[],this._excludedMeshes.length)for(b=0;b<this._excludedMeshes.length;b++){var L=this._scene.getMeshByUniqueID(this._excludedMeshes[b]);L&&A.excludedMeshes.push(L.id)}return A},P.Parse=function(A,b,L){var D=s.a.Parse(function(){return new P(A.name,b,A.options)},A,b,L),U;for(U=0;U<A.excludedMeshes.length;U++){var y=b.getMeshByID(A.excludedMeshes[U]);y&&D.addExcludedMesh(y)}for(U=0;U<A.includedMeshes.length;U++){var y=b.getMeshByID(A.includedMeshes[U]);y&&D.addIncludedOnlyMesh(y)}return D},P.EffectName="GlowLayer",P.DefaultBlurKernelSize=32,P.DefaultTextureRatio=.5,Object(l.c)([Object(s.c)()],P.prototype,"blurKernelSize",null),Object(l.c)([Object(s.c)()],P.prototype,"intensity",null),Object(l.c)([Object(s.c)("options")],P.prototype,"_options",void 0),P}(e.a);r.a.RegisteredTypes["BABYLON.GlowLayer"]=g},578:function(J,j,o){"use strict";o.d(j,"a",function(){return i});var l=o(434),s=o(466),C=o(584),v=o(472),c=o(585),_=o(436),p=o(442),i=function(e){Object(l.d)(t,e);function t(r,n,a,f,h,d){h===void 0&&(h=0),d===void 0&&(d=!1);var g=e.call(this,r.getEngine(),"bloom",function(){return g._effects},!0)||this;return g.bloomScale=n,g._effects=[],g._downscale=new C.a("highlights",1,null,p.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,d),g._blurX=new v.a("horizontal blur",new _.d(1,0),10,n,null,p.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,void 0,d),g._blurX.alwaysForcePOT=!0,g._blurX.autoClear=!1,g._blurY=new v.a("vertical blur",new _.d(0,1),10,n,null,p.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,void 0,d),g._blurY.alwaysForcePOT=!0,g._blurY.autoClear=!1,g.kernel=f,g._effects=[g._downscale,g._blurX,g._blurY],g._merge=new c.a("bloomMerge",g._downscale,g._blurY,a,n,null,p.a.BILINEAR_SAMPLINGMODE,r.getEngine(),!1,h,d),g._merge.autoClear=!1,g._effects.push(g._merge),g}return Object.defineProperty(t.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(r){this._downscale.threshold=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._merge.weight},set:function(r){this._merge.weight=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(r){this._blurX.kernel=r*this.bloomScale,this._blurY.kernel=r*this.bloomScale},enumerable:!1,configurable:!0}),t.prototype.disposeEffects=function(r){for(var n=0;n<this._effects.length;n++)this._effects[n].dispose(r)},t.prototype._updateEffects=function(){for(var r=0;r<this._effects.length;r++)this._effects[r].updateEffect()},t.prototype._isReady=function(){for(var r=0;r<this._effects.length;r++)if(!this._effects[r].isReady())return!1;return!0},t}(s.a)},579:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var l=o(434),s=o(436),C=o(444),v=o(600),c=o(437),_=o(439),p=function(i){Object(l.d)(e,i);function e(t,r,n,a,f,h,d,g,O,P){O===void 0&&(O=0),P===void 0&&(P=!1);var A=i.call(this,t,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,f,h,d,g,null,O,void 0,null,P)||this;return A.aberrationAmount=30,A.radialIntensity=0,A.direction=new s.d(.707,.707),A.centerPosition=new s.d(.5,.5),A.screenWidth=r,A.screenHeight=n,A.onApplyObservable.add(function(b){b.setFloat("chromatic_aberration",A.aberrationAmount),b.setFloat("screen_width",r),b.setFloat("screen_height",n),b.setFloat("radialIntensity",A.radialIntensity),b.setFloat2("direction",A.direction.x,A.direction.y),b.setFloat2("centerPosition",A.centerPosition.x,A.centerPosition.y)}),A}return e.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},e._Parse=function(t,r,n,a){return _.a.Parse(function(){return new e(t.name,t.screenWidth,t.screenHeight,t.options,r,t.renderTargetSamplingMode,n.getEngine(),t.reusable,t.textureType,!1)},t,n,a)},Object(l.c)([Object(_.c)()],e.prototype,"aberrationAmount",void 0),Object(l.c)([Object(_.c)()],e.prototype,"radialIntensity",void 0),Object(l.c)([Object(_.c)()],e.prototype,"direction",void 0),Object(l.c)([Object(_.c)()],e.prototype,"centerPosition",void 0),Object(l.c)([Object(_.c)()],e.prototype,"screenWidth",void 0),Object(l.c)([Object(_.c)()],e.prototype,"screenHeight",void 0),e}(C.a);c.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=p},580:function(J,j,o){"use strict";o.d(j,"a",function(){return _});var l=o(434),s=o(442),C=o(472),v=o(437),c=o(439),_=function(p){Object(l.d)(i,p);function i(e,t,r,n,a,f,h,d,g,O,P,A,b){d===void 0&&(d=null),g===void 0&&(g=s.a.BILINEAR_SAMPLINGMODE),A===void 0&&(A=0),b===void 0&&(b=!1);var L=p.call(this,e,r,n,a,f,g=2,O,P,A=0,`#define DOF 1\r
`,b)||this;return L.direction=r,L.onApplyObservable.add(function(D){d!=null&&D.setTextureFromPostProcess("textureSampler",d),D.setTextureFromPostProcessOutput("circleOfConfusionSampler",h),t.activeCamera&&D.setFloat2("cameraMinMaxZ",t.activeCamera.minZ,t.activeCamera.maxZ)}),L}return i.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(l.c)([Object(c.c)()],i.prototype,"direction",void 0),i}(C.a);v.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=_},581:function(J,j,o){"use strict";o.d(j,"a",function(){return r});var l=o(434),s=o(444),C=o(502),v=o(439),c=function(){function n(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return n}(),_=o(435),p="screenSpaceReflectionPixelShader",i=`

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
`;_.a.ShadersStore[p]=i;var e={name:p,shader:i},t=o(437),r=function(n){Object(l.d)(a,n);function a(f,h,d,g,O,P,A,b,L,D){b===void 0&&(b=0),L===void 0&&(L=!1),D===void 0&&(D=!1);var U=n.call(this,f,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],d,g,O,P,A,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,b,void 0,null,L)||this;if(U.threshold=1.2,U.strength=1,U.reflectionSpecularFalloffExponent=3,U.step=1,U.roughnessFactor=.2,U._forceGeometryBuffer=!1,U._enableSmoothReflections=!1,U._reflectionSamples=64,U._smoothSteps=5,U._forceGeometryBuffer=D,U._forceGeometryBuffer){var y=h.enableGeometryBufferRenderer();y&&y.isSupported&&(y.enablePosition=!0,y.enableReflectivity=!0,U._geometryBufferRenderer=y)}else U._prePassRenderer=h.enablePrePassRenderer(),U._prePassRenderer.markAsDirty(),U._prePassEffectConfiguration=new c;return U._updateEffectDefines(),U.onApply=function(V){var I=U._geometryBufferRenderer,x=U._prePassRenderer;if(!(!x&&!I)){if(I){var E=I.getTextureIndex(C.a.POSITION_TEXTURE_TYPE),z=I.getTextureIndex(C.a.REFLECTIVITY_TEXTURE_TYPE);V.setTexture("normalSampler",I.getGBuffer().textures[1]),V.setTexture("positionSampler",I.getGBuffer().textures[E]),V.setTexture("reflectivitySampler",I.getGBuffer().textures[z])}else{var E=x.getIndex(1),z=x.getIndex(3),H=x.getIndex(6);V.setTexture("normalSampler",x.getRenderTarget().textures[H]),V.setTexture("positionSampler",x.getRenderTarget().textures[E]),V.setTexture("reflectivitySampler",x.getRenderTarget().textures[z])}var F=h.activeCamera;if(!!F){var Y=F.getViewMatrix(!0),Z=F.getProjectionMatrix(!0);V.setMatrix("projection",Z),V.setMatrix("view",Y),V.setFloat("threshold",U.threshold),V.setFloat("reflectionSpecularFalloffExponent",U.reflectionSpecularFalloffExponent),V.setFloat("strength",U.strength),V.setFloat("step",U.step),V.setFloat("roughnessFactor",U.roughnessFactor)}}},U}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(f){f!==this._enableSmoothReflections&&(this._enableSmoothReflections=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(f){f!==this._reflectionSamples&&(this._reflectionSamples=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(f){f!==this._smoothSteps&&(this._smoothSteps=f,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var f=[];(this._geometryBufferRenderer||this._prePassRenderer)&&f.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&f.push("#define ENABLE_SMOOTH_REFLECTIONS"),f.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),f.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(f.join(`
`))},a._Parse=function(f,h,d,g){return v.a.Parse(function(){return new a(f.name,d,f.options,h,f.renderTargetSamplingMode,d.getEngine(),f.textureType,f.reusable)},f,d,g)},Object(l.c)([Object(v.c)()],a.prototype,"threshold",void 0),Object(l.c)([Object(v.c)()],a.prototype,"strength",void 0),Object(l.c)([Object(v.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(l.c)([Object(v.c)()],a.prototype,"step",void 0),Object(l.c)([Object(v.c)()],a.prototype,"roughnessFactor",void 0),Object(l.c)([Object(v.c)()],a.prototype,"enableSmoothReflections",null),Object(l.c)([Object(v.c)()],a.prototype,"reflectionSamples",null),Object(l.c)([Object(v.c)()],a.prototype,"smoothSteps",null),a}(s.a);t.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=r},582:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(434),s=o(444),C=o(440),v=o(435),c="circleOfConfusionPixelShader",_=`
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
`;v.a.ShadersStore[c]=_;var p={name:c,shader:_},i=o(437),e=o(439),t=function(r){Object(l.d)(n,r);function n(a,f,h,d,g,O,P,A,b){A===void 0&&(A=0),b===void 0&&(b=!1);var L=r.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],h,d,g,O,P,null,A,void 0,null,b)||this;return L.lensSize=50,L.fStop=1.4,L.focusDistance=2e3,L.focalLength=50,L._depthTexture=null,L._depthTexture=f,L.onApplyObservable.add(function(D){if(!L._depthTexture){C.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}D.setTexture("depthSampler",L._depthTexture);var U=L.lensSize/L.fStop,y=U*L.focalLength/(L.focusDistance-L.focalLength);D.setFloat("focusDistance",L.focusDistance),D.setFloat("cocPrecalculation",y),D.setFloat2("cameraMinMaxZ",L._depthTexture.activeCamera.minZ,L._depthTexture.activeCamera.maxZ)}),L}return n.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(n.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(l.c)([Object(e.c)()],n.prototype,"lensSize",void 0),Object(l.c)([Object(e.c)()],n.prototype,"fStop",void 0),Object(l.c)([Object(e.c)()],n.prototype,"focusDistance",void 0),Object(l.c)([Object(e.c)()],n.prototype,"focalLength",void 0),n}(s.a);i.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=t},583:function(J,j,o){"use strict";o.d(j,"b",function(){return p}),o.d(j,"a",function(){return i});var l=o(434),s=o(444),C=o(435),v="depthOfFieldMergePixelShader",c=`uniform sampler2D textureSampler;
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
`;C.a.ShadersStore[v]=c;var _={name:v,shader:c},p=function(){function e(){}return e}(),i=function(e){Object(l.d)(t,e);function t(r,n,a,f,h,d,g,O,P,A,b){A===void 0&&(A=0),b===void 0&&(b=!1);var L=e.call(this,r,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],h,d,g,O,P,null,A,void 0,null,!0)||this;return L.blurSteps=f,L.onApplyObservable.add(function(D){D.setTextureFromPostProcess("textureSampler",n),D.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),f.forEach(function(U,y){D.setTextureFromPostProcessOutput("blurStep"+(f.length-y-1),U)})}),b||L.updateEffect(),L}return t.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},t.prototype.updateEffect=function(r,n,a,f,h,d){r===void 0&&(r=null),n===void 0&&(n=null),a===void 0&&(a=null),r||(r="",r+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),e.prototype.updateEffect.call(this,r,n,a,f,h,d)},t}(s.a)},584:function(J,j,o){"use strict";o.d(j,"a",function(){return r});var l=o(434),s=o(444),C=o(515),v=o(435),c=o(457),_="extractHighlightsPixelShader",p=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;v.a.ShadersStore[_]=p;var i={name:_,shader:p},e=o(439),t=o(437),r=function(n){Object(l.d)(a,n);function a(f,h,d,g,O,P,A,b){A===void 0&&(A=0),b===void 0&&(b=!1);var L=n.call(this,f,"extractHighlights",["threshold","exposure"],null,h,d,g,O,P,null,A,void 0,null,b)||this;return L.threshold=.9,L._exposure=1,L._inputPostProcess=null,L.onApplyObservable.add(function(D){L._inputPostProcess&&D.setTextureFromPostProcess("textureSampler",L._inputPostProcess),D.setFloat("threshold",Math.pow(L.threshold,C.b)),D.setFloat("exposure",L._exposure)}),L}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(l.c)([Object(e.c)()],a.prototype,"threshold",void 0),a}(s.a);t.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=r},585:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var l=o(434),s=o(444),C=o(435),v="bloomMergePixelShader",c=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;C.a.ShadersStore[v]=c;var _={name:v,shader:c},p=o(437),i=o(439),e=function(t){Object(l.d)(r,t);function r(n,a,f,h,d,g,O,P,A,b,L){b===void 0&&(b=0),L===void 0&&(L=!1);var D=t.call(this,n,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],d,g,O,P,A,null,b,void 0,null,!0)||this;return D.weight=1,D.weight=h,D.onApplyObservable.add(function(U){U.setTextureFromPostProcess("textureSampler",a),U.setTextureFromPostProcessOutput("bloomBlur",f),U.setFloat("bloomWeight",D.weight)}),L||D.updateEffect(),D}return r.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(l.c)([Object(i.c)()],r.prototype,"weight",void 0),r}(s.a);p.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=e},586:function(J,j,o){"use strict";o.d(j,"a",function(){return t});var l=o(434),s=o(444),C=o(435),v=o(457),c="grainPixelShader",_=`#include<helperFunctions>

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
}`;C.a.ShadersStore[c]=_;var p={name:c,shader:_},i=o(437),e=o(439),t=function(r){Object(l.d)(n,r);function n(a,f,h,d,g,O,P,A){P===void 0&&(P=0),A===void 0&&(A=!1);var b=r.call(this,a,"grain",["intensity","animatedSeed"],[],f,h,d,g,O,null,P,void 0,null,A)||this;return b.intensity=30,b.animated=!1,b.onApplyObservable.add(function(L){L.setFloat("intensity",b.intensity),L.setFloat("animatedSeed",b.animated?Math.random()+1:1)}),b}return n.prototype.getClassName=function(){return"GrainPostProcess"},n._Parse=function(a,f,h,d){return e.a.Parse(function(){return new n(a.name,a.options,f,a.renderTargetSamplingMode,h.getEngine(),a.reusable)},a,h,d)},Object(l.c)([Object(e.c)()],n.prototype,"intensity",void 0),Object(l.c)([Object(e.c)()],n.prototype,"animated",void 0),n}(s.a);i.a.RegisteredTypes["BABYLON.GrainPostProcess"]=t},587:function(J,j,o){"use strict";o.d(j,"a",function(){return e});var l=o(434),s=o(444),C=o(435),v="sharpenPixelShader",c=`
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
}`;C.a.ShadersStore[v]=c;var _={name:v,shader:c},p=o(437),i=o(439),e=function(t){Object(l.d)(r,t);function r(n,a,f,h,d,g,O,P){O===void 0&&(O=0),P===void 0&&(P=!1);var A=t.call(this,n,"sharpen",["sharpnessAmounts","screenSize"],null,a,f,h,d,g,null,O,void 0,null,P)||this;return A.colorAmount=1,A.edgeAmount=.3,A.onApply=function(b){b.setFloat2("screenSize",A.width,A.height),b.setFloat2("sharpnessAmounts",A.edgeAmount,A.colorAmount)},A}return r.prototype.getClassName=function(){return"SharpenPostProcess"},r._Parse=function(n,a,f,h){return i.a.Parse(function(){return new r(n.name,n.options,a,n.renderTargetSamplingMode,f.getEngine(),n.textureType,n.reusable)},n,f,h)},Object(l.c)([Object(i.c)()],r.prototype,"colorAmount",void 0),Object(l.c)([Object(i.c)()],r.prototype,"edgeAmount",void 0),r}(s.a);p.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=e},594:function(J,j,o){"use strict";o.d(j,"a",function(){return b});var l=o(434),s=o(440),C=o(439),v=o(436),c=o(451),_=o(442),p=o(479),i=o(444),e=o(481),t=o(466),r=o(486),n=o(437),a=o(448),f=function(){function L(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return L}(),h=o(482),d=o(435),g="ssao2PixelShader",O=`
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
`;d.a.ShadersStore[g]=O;var P={name:g,shader:O},A=o(601),b=function(L){Object(l.d)(D,L);function D(U,y,V,I,x){x===void 0&&(x=!1);var E=L.call(this,y.getEngine(),U)||this;if(E.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",E.SSAORenderEffect="SSAORenderEffect",E.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",E.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",E.SSAOCombineRenderEffect="SSAOCombineRenderEffect",E.totalStrength=1,E.maxZ=100,E.minZAspect=.2,E._samples=8,E._textureSamples=1,E._forceGeometryBuffer=!1,E._expensiveBlur=!0,E.radius=2,E.base=0,E._bits=new Uint32Array(1),E._scene=y,E._ratio=V,E._forceGeometryBuffer=x,!E.isSupported)return s.a.Error("The current engine does not support SSAO 2."),E;var z=E._ratio.ssaoRatio||V,H=E._ratio.blurRatio||V;return E._forceGeometryBuffer?y.enableGeometryBufferRenderer():E._prePassRenderer=y.enablePrePassRenderer(),E._createRandomTexture(),E._originalColorPostProcess=new r.b("SSAOOriginalSceneColor",1,null,_.a.BILINEAR_SAMPLINGMODE,y.getEngine(),!1),E._originalColorPostProcess.samples=E.textureSamples,E._createSSAOPostProcess(1),E._createBlurPostProcess(z,H),E._createSSAOCombinePostProcess(H),E.addEffect(new t.a(y.getEngine(),E.SSAOOriginalSceneColorEffect,function(){return E._originalColorPostProcess},!0)),E.addEffect(new t.a(y.getEngine(),E.SSAORenderEffect,function(){return E._ssaoPostProcess},!0)),E.addEffect(new t.a(y.getEngine(),E.SSAOBlurHRenderEffect,function(){return E._blurHPostProcess},!0)),E.addEffect(new t.a(y.getEngine(),E.SSAOBlurVRenderEffect,function(){return E._blurVPostProcess},!0)),E.addEffect(new t.a(y.getEngine(),E.SSAOCombineRenderEffect,function(){return E._ssaoCombinePostProcess},!0)),y.postProcessRenderPipelineManager.addPipeline(E),I&&y.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(U,I),E}return Object.defineProperty(D.prototype,"samples",{get:function(){return this._samples},set:function(U){this._samples=U,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(U){this._textureSamples=U,this._prePassRenderer?this._prePassRenderer.samples=U:this._originalColorPostProcess.samples=U},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(U){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=U},enumerable:!1,configurable:!0}),Object.defineProperty(D,"IsSupported",{get:function(){var U=a.a.LastCreatedEngine;return U?U._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),D.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},D.prototype.dispose=function(U){U===void 0&&(U=!1);for(var y=0;y<this._scene.cameras.length;y++){var V=this._scene.cameras[y];this._originalColorPostProcess.dispose(V),this._ssaoPostProcess.dispose(V),this._blurHPostProcess.dispose(V),this._blurVPostProcess.dispose(V),this._ssaoCombinePostProcess.dispose(V)}this._randomTexture.dispose(),U&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),L.prototype.dispose.call(this)},D.prototype._createBlurPostProcess=function(U,y){var V=this;this._samplerOffsets=[];for(var I=this.expensiveBlur,x=-8;x<8;x++)this._samplerOffsets.push(x*2+.5);this._blurHPostProcess=new i.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],U,null,_.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(I?"1":"0")+`
`),this._blurHPostProcess.onApply=function(E){!V._scene.activeCamera||(E.setFloat("outSize",V._ssaoCombinePostProcess.width>0?V._ssaoCombinePostProcess.width:V._originalColorPostProcess.width),E.setFloat("near",V._scene.activeCamera.minZ),E.setFloat("far",V._scene.activeCamera.maxZ),E.setFloat("radius",V.radius),V._forceGeometryBuffer?E.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):E.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),E.setArray("samplerOffsets",V._samplerOffsets))},this._blurVPostProcess=new i.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],y,null,_.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(I?"1":"0")+`
`),this._blurVPostProcess.onApply=function(E){!V._scene.activeCamera||(E.setFloat("outSize",V._ssaoCombinePostProcess.height>0?V._ssaoCombinePostProcess.height:V._originalColorPostProcess.height),E.setFloat("near",V._scene.activeCamera.minZ),E.setFloat("far",V._scene.activeCamera.maxZ),E.setFloat("radius",V.radius),V._forceGeometryBuffer?E.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):E.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),E.setArray("samplerOffsets",V._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},D.prototype._rebuild=function(){L.prototype._rebuild.call(this)},D.prototype._radicalInverse_VdC=function(U){return this._bits[0]=U,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},D.prototype._hammersley=function(U,y){return[U/y,this._radicalInverse_VdC(U)]},D.prototype._hemisphereSample_uniform=function(U,y){var V=y*2*Math.PI,I=1-(U*.85+.15),x=Math.sqrt(1-I*I);return new v.e(Math.cos(V)*x,Math.sin(V)*x,I)},D.prototype._generateHemisphere=function(){for(var U=this.samples,y=[],V,I=0;I<U;){if(U<16)V=this._hemisphereSample_uniform(Math.random(),Math.random());else{var x=this._hammersley(I,U);V=this._hemisphereSample_uniform(x[0],x[1])}y.push(V.x,V.y,V.z),I++}return y},D.prototype._getDefinesForSSAO=function(){var U="#define SAMPLES "+this.samples+`
#define SSAO`;return U},D.prototype._createSSAOPostProcess=function(U){var y=this;this._sampleSphere=this._generateHemisphere();var V=this._getDefinesForSSAO(),I=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new i.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],I,U,null,_.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,V),this._ssaoPostProcess.onApply=function(x){var E,z,H,F;if(!!y._scene.activeCamera){if(x.setArray3("sampleSphere",y._sampleSphere),x.setFloat("randTextureTiles",32),x.setFloat("samplesFactor",1/y.samples),x.setFloat("totalStrength",y.totalStrength),x.setFloat2("texelSize",1/y._ssaoPostProcess.width,1/y._ssaoPostProcess.height),x.setFloat("radius",y.radius),x.setFloat("maxZ",y.maxZ),x.setFloat("minZAspect",y.minZAspect),x.setFloat("base",y.base),x.setFloat("near",y._scene.activeCamera.minZ),x.setFloat("far",y._scene.activeCamera.maxZ),y._scene.activeCamera.mode===c.a.PERSPECTIVE_CAMERA)x.setMatrix3x3("depthProjection",D.PERSPECTIVE_DEPTH_PROJECTION),x.setFloat("xViewport",Math.tan(y._scene.activeCamera.fov/2)*y._scene.getEngine().getAspectRatio(y._scene.activeCamera,!0)),x.setFloat("yViewport",Math.tan(y._scene.activeCamera.fov/2));else{var Y=y._scene.getEngine().getRenderWidth()/2,Z=y._scene.getEngine().getRenderHeight()/2,le=(E=y._scene.activeCamera.orthoLeft)!==null&&E!==void 0?E:-Y,G=(z=y._scene.activeCamera.orthoRight)!==null&&z!==void 0?z:Y,fe=(H=y._scene.activeCamera.orthoBottom)!==null&&H!==void 0?H:-Z,ee=(F=y._scene.activeCamera.orthoTop)!==null&&F!==void 0?F:Z;x.setMatrix3x3("depthProjection",D.ORTHO_DEPTH_PROJECTION),x.setFloat("xViewport",(G-le)*.5),x.setFloat("yViewport",(ee-fe)*.5)}x.setMatrix("projection",y._scene.getProjectionMatrix()),y._forceGeometryBuffer?(x.setTexture("depthSampler",y._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),x.setTexture("normalSampler",y._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(x.setTexture("depthSampler",y._prePassRenderer.getRenderTarget().textures[y._prePassRenderer.getIndex(5)]),x.setTexture("normalSampler",y._prePassRenderer.getRenderTarget().textures[y._prePassRenderer.getIndex(6)])),x.setTexture("randomSampler",y._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},D.prototype._createSSAOCombinePostProcess=function(U){var y=this;this._ssaoCombinePostProcess=new i.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],U,null,_.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(V){var I=y._scene.activeCamera.viewport;V.setVector4("viewport",v.c.Vector4[0].copyFromFloats(I.x,I.y,I.width,I.height)),V.setTextureFromPostProcessOutput("originalColor",y._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new f)},D.prototype._createRandomTexture=function(){var U=128;this._randomTexture=new p.a("SSAORandomTexture",U,this._scene,!1,_.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=_.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=_.a.WRAP_ADDRESSMODE;for(var y=this._randomTexture.getContext(),V=function(z,H){return Math.random()*(H-z)+z},I=v.e.Zero(),x=0;x<U;x++)for(var E=0;E<U;E++)I.x=V(0,1),I.y=V(0,1),I.z=0,I.normalize(),I.scaleInPlace(255),I.x=Math.floor(I.x),I.y=Math.floor(I.y),y.fillStyle="rgb("+I.x+", "+I.y+", "+I.z+")",y.fillRect(x,E,1,1);this._randomTexture.update(!1)},D.prototype.serialize=function(){var U=C.a.Serialize(this);return U.customType="SSAO2RenderingPipeline",U},D.Parse=function(U,y,V){return C.a.Parse(function(){return new D(U._name,y,U._ratio)},U,y,V)},D.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],D.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(l.c)([Object(C.c)()],D.prototype,"totalStrength",void 0),Object(l.c)([Object(C.c)()],D.prototype,"maxZ",void 0),Object(l.c)([Object(C.c)()],D.prototype,"minZAspect",void 0),Object(l.c)([Object(C.c)("samples")],D.prototype,"_samples",void 0),Object(l.c)([Object(C.c)("textureSamples")],D.prototype,"_textureSamples",void 0),Object(l.c)([Object(C.c)()],D.prototype,"_ratio",void 0),Object(l.c)([Object(C.c)("expensiveBlur")],D.prototype,"_expensiveBlur",void 0),Object(l.c)([Object(C.c)()],D.prototype,"radius",void 0),Object(l.c)([Object(C.c)()],D.prototype,"base",void 0),D}(e.a);n.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=b},600:function(J,j,o){"use strict";var l=o(435),s="chromaticAberrationPixelShader",C=`
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
`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},602:function(J,j,o){"use strict";o.d(j,"a",function(){return P}),o.d(j,"b",function(){return z}),o.d(j,"g",function(){return H.a}),o.d(j,"h",function(){return te}),o.d(j,"i",function(){return ie}),o.d(j,"c",function(){return a.a}),o.d(j,"d",function(){return n.a}),o.d(j,"e",function(){return _e.a}),o.d(j,"f",function(){return O.a});var l=o(434),s=o(439),C=o(438),v=o(440),c=o(442),_=o(577),p=o(587),i=o(518),e=o(579),t=o(586),r=o(517),n=o(481),a=o(466),f=o(570),h=o(578),d=o(437),g=o(448),O=o(482),P=function(se){Object(l.d)(N,se);function N(m,B,M,k,K){m===void 0&&(m=""),B===void 0&&(B=!0),M===void 0&&(M=g.a.LastCreatedScene),K===void 0&&(K=!0);var R=se.call(this,M.getEngine(),m)||this;R._camerasToBeAttached=[],R.SharpenPostProcessId="SharpenPostProcessEffect",R.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",R.FxaaPostProcessId="FxaaPostProcessEffect",R.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",R.GrainPostProcessId="GrainPostProcessEffect",R._glowLayer=null,R.animations=[],R._imageProcessingConfigurationObserver=null,R._sharpenEnabled=!1,R._bloomEnabled=!1,R._depthOfFieldEnabled=!1,R._depthOfFieldBlurLevel=f.b.Low,R._fxaaEnabled=!1,R._imageProcessingEnabled=!0,R._bloomScale=.5,R._chromaticAberrationEnabled=!1,R._grainEnabled=!1,R._buildAllowed=!0,R.onBuildObservable=new C.c,R._resizeObserver=null,R._hardwareScaleLevel=1,R._bloomKernel=64,R._bloomWeight=.15,R._bloomThreshold=.9,R._samples=1,R._hasCleared=!1,R._prevPostProcess=null,R._prevPrevPostProcess=null,R._depthOfFieldSceneObserver=null,R._cameras=k||M.cameras,R._cameras=R._cameras.slice(),R._camerasToBeAttached=R._cameras.slice(),R._buildAllowed=K,R._scene=M;var q=R._scene.getEngine().getCaps();R._hdr=B&&(q.textureHalfFloatRender||q.textureFloatRender),R._hdr?q.textureHalfFloatRender?R._defaultPipelineTextureType=2:q.textureFloatRender&&(R._defaultPipelineTextureType=1):R._defaultPipelineTextureType=0,M.postProcessRenderPipelineManager.addPipeline(R);var ge=R._scene.getEngine();return R.sharpen=new p.a("sharpen",1,null,c.a.BILINEAR_SAMPLINGMODE,ge,!1,R._defaultPipelineTextureType,!0),R._sharpenEffect=new a.a(ge,R.SharpenPostProcessId,function(){return R.sharpen},!0),R.depthOfField=new f.a(R._scene,null,R._depthOfFieldBlurLevel,R._defaultPipelineTextureType,!0),R.bloom=new h.a(R._scene,R._bloomScale,R._bloomWeight,R.bloomKernel,R._defaultPipelineTextureType,!0),R.chromaticAberration=new e.a("ChromaticAberration",ge.getRenderWidth(),ge.getRenderHeight(),1,null,c.a.BILINEAR_SAMPLINGMODE,ge,!1,R._defaultPipelineTextureType,!0),R._chromaticAberrationEffect=new a.a(ge,R.ChromaticAberrationPostProcessId,function(){return R.chromaticAberration},!0),R.grain=new t.a("Grain",1,null,c.a.BILINEAR_SAMPLINGMODE,ge,!1,R._defaultPipelineTextureType,!0),R._grainEffect=new a.a(ge,R.GrainPostProcessId,function(){return R.grain},!0),R._resizeObserver=ge.onResizeObservable.add(function(){R._hardwareScaleLevel=ge.getHardwareScalingLevel(),R.bloomKernel=R.bloomKernel}),R._imageProcessingConfigurationObserver=R._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){R.bloom._downscale._exposure=R._scene.imageProcessingConfiguration.exposure,R.imageProcessingEnabled!==R._scene.imageProcessingConfiguration.isEnabled&&(R._imageProcessingEnabled=R._scene.imageProcessingConfiguration.isEnabled,R._buildPipeline())}),R._buildPipeline(),R}return Object.defineProperty(N.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(m){this._sharpenEnabled!==m&&(this._sharpenEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(m){this._bloomKernel=m,this.bloom.kernel=m/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(m){this._bloomWeight!==m&&(this.bloom.weight=m,this._bloomWeight=m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(m){this._bloomThreshold!==m&&(this.bloom.threshold=m,this._bloomThreshold=m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(m){this._bloomScale!==m&&(this._bloomScale=m,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(m){this._bloomEnabled!==m&&(this._bloomEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),N.prototype._rebuildBloom=function(){var m=this.bloom;this.bloom=new h.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=m.threshold;for(var B=0;B<this._cameras.length;B++)m.disposeEffects(this._cameras[B])},Object.defineProperty(N.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(m){this._depthOfFieldEnabled!==m&&(this._depthOfFieldEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(m){if(this._depthOfFieldBlurLevel!==m){this._depthOfFieldBlurLevel=m;var B=this.depthOfField;this.depthOfField=new f.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=B.focalLength,this.depthOfField.focusDistance=B.focusDistance,this.depthOfField.fStop=B.fStop,this.depthOfField.lensSize=B.lensSize;for(var M=0;M<this._cameras.length;M++)B.disposeEffects(this._cameras[M]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(m){this._fxaaEnabled!==m&&(this._fxaaEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"samples",{get:function(){return this._samples},set:function(m){this._samples!==m&&(this._samples=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(m){this._imageProcessingEnabled!==m&&(this._scene.imageProcessingConfiguration.isEnabled=m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(m){m&&!this._glowLayer?this._glowLayer=new _.a("",this._scene):!m&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(m){this._chromaticAberrationEnabled!==m&&(this._chromaticAberrationEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(m){this._grainEnabled!==m&&(this._grainEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),N.prototype.getClassName=function(){return"DefaultRenderingPipeline"},N.prototype.prepare=function(){var m=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=m},N.prototype._setAutoClearAndTextureSharing=function(m,B){B===void 0&&(B=!1),this._hasCleared?m.autoClear=!1:(m.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),B||(this._prevPrevPostProcess?m.shareOutputWith(this._prevPrevPostProcess):m.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=m)},N.prototype._buildPipeline=function(){var m=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var B=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var M=0,k=this._cameras;M<k.length;M++){var K=k[M],R=this._scene.enableDepthRenderer(K);R.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(q){m._cameras.indexOf(q.activeCamera)>-1&&(m.depthOfField.depthTexture=q.enableDepthRenderer(q.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var R=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=R.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new i.a("imageProcessing",1,null,c.a.BILINEAR_SAMPLINGMODE,B,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(B,this.ImageProcessingPostProcessId,function(){return m.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new r.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,B,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(B,this.FxaaPostProcessId,function(){return m.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},N.prototype._disposePostProcesses=function(m){m===void 0&&(m=!1);for(var B=0;B<this._cameras.length;B++){var M=this._cameras[B];this.imageProcessing&&this.imageProcessing.dispose(M),this.fxaa&&this.fxaa.dispose(M),m&&(this.sharpen&&this.sharpen.dispose(M),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(M)),this.bloom&&this.bloom.disposeEffects(M),this.chromaticAberration&&this.chromaticAberration.dispose(M),this.grain&&this.grain.dispose(M),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,m&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},N.prototype.addCamera=function(m){this._camerasToBeAttached.push(m),this._buildPipeline()},N.prototype.removeCamera=function(m){var B=this._camerasToBeAttached.indexOf(m);this._camerasToBeAttached.splice(B,1),this._buildPipeline()},N.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),se.prototype.dispose.call(this)},N.prototype.serialize=function(){var m=s.a.Serialize(this);return m.customType="DefaultRenderingPipeline",m},N.Parse=function(m,B,M){return s.a.Parse(function(){return new N(m._name,m._name._hdr,B)},m,B,M)},Object(l.c)([Object(s.c)()],N.prototype,"sharpenEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"bloomKernel",null),Object(l.c)([Object(s.c)()],N.prototype,"_bloomWeight",void 0),Object(l.c)([Object(s.c)()],N.prototype,"_bloomThreshold",void 0),Object(l.c)([Object(s.c)()],N.prototype,"_hdr",void 0),Object(l.c)([Object(s.c)()],N.prototype,"bloomWeight",null),Object(l.c)([Object(s.c)()],N.prototype,"bloomThreshold",null),Object(l.c)([Object(s.c)()],N.prototype,"bloomScale",null),Object(l.c)([Object(s.c)()],N.prototype,"bloomEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"depthOfFieldEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"depthOfFieldBlurLevel",null),Object(l.c)([Object(s.c)()],N.prototype,"fxaaEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"samples",null),Object(l.c)([Object(s.c)()],N.prototype,"imageProcessingEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"glowLayerEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"chromaticAberrationEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"grainEnabled",null),N}(n.a);d.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=P;var A=o(479),b=o(444),L=o(600),D=o(435),U="lensHighlightsPixelShader",y=`
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

}`;D.a.ShadersStore[U]=y;var V={name:U,shader:y},I="depthOfFieldPixelShader",x=`




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
`;D.a.ShadersStore[I]=x;var E={name:I,shader:x},z=function(se){Object(l.d)(N,se);function N(m,B,M,k,K){k===void 0&&(k=1);var R=se.call(this,M.getEngine(),m)||this;return R.LensChromaticAberrationEffect="LensChromaticAberrationEffect",R.HighlightsEnhancingEffect="HighlightsEnhancingEffect",R.LensDepthOfFieldEffect="LensDepthOfFieldEffect",R._pentagonBokehIsEnabled=!1,R._scene=M,R._depthTexture=M.enableDepthRenderer().getDepthMap(),B.grain_texture?R._grainTexture=B.grain_texture:R._createGrainTexture(),R._edgeBlur=B.edge_blur?B.edge_blur:0,R._grainAmount=B.grain_amount?B.grain_amount:0,R._chromaticAberration=B.chromatic_aberration?B.chromatic_aberration:0,R._distortion=B.distortion?B.distortion:0,R._highlightsGain=B.dof_gain!==void 0?B.dof_gain:-1,R._highlightsThreshold=B.dof_threshold?B.dof_threshold:1,R._dofDistance=B.dof_focus_distance!==void 0?B.dof_focus_distance:-1,R._dofAperture=B.dof_aperture?B.dof_aperture:1,R._dofDarken=B.dof_darken?B.dof_darken:0,R._dofPentagon=B.dof_pentagon!==void 0?B.dof_pentagon:!0,R._blurNoise=B.blur_noise!==void 0?B.blur_noise:!0,R._createChromaticAberrationPostProcess(k),R._createHighlightsPostProcess(k),R._createDepthOfFieldPostProcess(k/4),R.addEffect(new a.a(M.getEngine(),R.LensChromaticAberrationEffect,function(){return R._chromaticAberrationPostProcess},!0)),R.addEffect(new a.a(M.getEngine(),R.HighlightsEnhancingEffect,function(){return R._highlightsPostProcess},!0)),R.addEffect(new a.a(M.getEngine(),R.LensDepthOfFieldEffect,function(){return R._depthOfFieldPostProcess},!0)),R._highlightsGain===-1&&R._disableEffect(R.HighlightsEnhancingEffect,null),M.postProcessRenderPipelineManager.addPipeline(R),K&&M.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(m,K),R}return N.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(N.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(m){this.setEdgeBlur(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(m){this.setGrainAmount(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(m){this.setChromaticAberration(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(m){this.setAperture(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(m){this.setEdgeDistortion(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(m){this.setFocusDistance(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(m){this.setDarkenOutOfFocus(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(m){this._blurNoise=m},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(m){m?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(m){this.setHighlightsGain(m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(m){this.setHighlightsThreshold(m)},enumerable:!1,configurable:!0}),N.prototype.setEdgeBlur=function(m){this._edgeBlur=m},N.prototype.disableEdgeBlur=function(){this._edgeBlur=0},N.prototype.setGrainAmount=function(m){this._grainAmount=m},N.prototype.disableGrain=function(){this._grainAmount=0},N.prototype.setChromaticAberration=function(m){this._chromaticAberration=m},N.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},N.prototype.setEdgeDistortion=function(m){this._distortion=m},N.prototype.disableEdgeDistortion=function(){this._distortion=0},N.prototype.setFocusDistance=function(m){this._dofDistance=m},N.prototype.disableDepthOfField=function(){this._dofDistance=-1},N.prototype.setAperture=function(m){this._dofAperture=m},N.prototype.setDarkenOutOfFocus=function(m){this._dofDarken=m},N.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},N.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},N.prototype.enableNoiseBlur=function(){this._blurNoise=!0},N.prototype.disableNoiseBlur=function(){this._blurNoise=!1},N.prototype.setHighlightsGain=function(m){this._highlightsGain=m},N.prototype.setHighlightsThreshold=function(m){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=m},N.prototype.disableHighlights=function(){this._highlightsGain=-1},N.prototype.dispose=function(m){m===void 0&&(m=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),m&&this._scene.disableDepthRenderer()},N.prototype._createChromaticAberrationPostProcess=function(m){var B=this;this._chromaticAberrationPostProcess=new b.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(M){M.setFloat("chromatic_aberration",B._chromaticAberration),M.setFloat("screen_width",B._scene.getEngine().getRenderWidth()),M.setFloat("screen_height",B._scene.getEngine().getRenderHeight()),M.setFloat("radialIntensity",1),M.setFloat2("direction",17,17),M.setFloat2("centerPosition",.5,.5)}},N.prototype._createHighlightsPostProcess=function(m){var B=this;this._highlightsPostProcess=new b.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(M){M.setFloat("gain",B._highlightsGain),M.setFloat("threshold",B._highlightsThreshold),M.setTextureFromPostProcess("textureSampler",B._chromaticAberrationPostProcess),M.setFloat("screen_width",B._scene.getEngine().getRenderWidth()),M.setFloat("screen_height",B._scene.getEngine().getRenderHeight())}},N.prototype._createDepthOfFieldPostProcess=function(m){var B=this;this._depthOfFieldPostProcess=new b.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(M){M.setTexture("depthSampler",B._depthTexture),M.setTexture("grainSampler",B._grainTexture),M.setTextureFromPostProcess("textureSampler",B._highlightsPostProcess),M.setTextureFromPostProcess("highlightsSampler",B._depthOfFieldPostProcess),M.setFloat("grain_amount",B._grainAmount),M.setBool("blur_noise",B._blurNoise),M.setFloat("screen_width",B._scene.getEngine().getRenderWidth()),M.setFloat("screen_height",B._scene.getEngine().getRenderHeight()),M.setFloat("distortion",B._distortion),M.setBool("dof_enabled",B._dofDistance!==-1),M.setFloat("screen_distance",1/(.1-1/B._dofDistance)),M.setFloat("aperture",B._dofAperture),M.setFloat("darken",B._dofDarken),M.setFloat("edge_blur",B._edgeBlur),M.setBool("highlights",B._highlightsGain!==-1),B._scene.activeCamera&&(M.setFloat("near",B._scene.activeCamera.minZ),M.setFloat("far",B._scene.activeCamera.maxZ))}},N.prototype._createGrainTexture=function(){var m=512;this._grainTexture=new A.a("LensNoiseTexture",m,this._scene,!1,c.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var B=this._grainTexture.getContext(),M=function(q,ge){return Math.random()*(ge-q)+q},k,K=0;K<m;K++)for(var R=0;R<m;R++)k=Math.floor(M(.42,.58)*255),B.fillStyle="rgb("+k+", "+k+", "+k+")",B.fillRect(K,R,1,1);this._grainTexture.update(!1)},N}(n.a),H=o(594),F=o(436),Y=o(486),Z=o(472),le="ssaoPixelShader",G=`
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
`;D.a.ShadersStore[le]=G;var fe={name:le,shader:G},ee=o(601),te=function(se){Object(l.d)(N,se);function N(m,B,M,k){var K=se.call(this,B.getEngine(),m)||this;K.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",K.SSAORenderEffect="SSAORenderEffect",K.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",K.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",K.SSAOCombineRenderEffect="SSAOCombineRenderEffect",K.totalStrength=1,K.radius=1e-4,K.area=.0075,K.fallOff=1e-6,K.base=.5,K._firstUpdate=!0,K._scene=B,K._createRandomTexture(),K._depthTexture=B.enableDepthRenderer().getDepthMap();var R=M.ssaoRatio||M,q=M.combineRatio||M;return K._originalColorPostProcess=new Y.b("SSAOOriginalSceneColor",q,null,c.a.BILINEAR_SAMPLINGMODE,B.getEngine(),!1),K._createSSAOPostProcess(R),K._createBlurPostProcess(R),K._createSSAOCombinePostProcess(q),K.addEffect(new a.a(B.getEngine(),K.SSAOOriginalSceneColorEffect,function(){return K._originalColorPostProcess},!0)),K.addEffect(new a.a(B.getEngine(),K.SSAORenderEffect,function(){return K._ssaoPostProcess},!0)),K.addEffect(new a.a(B.getEngine(),K.SSAOBlurHRenderEffect,function(){return K._blurHPostProcess},!0)),K.addEffect(new a.a(B.getEngine(),K.SSAOBlurVRenderEffect,function(){return K._blurVPostProcess},!0)),K.addEffect(new a.a(B.getEngine(),K.SSAOCombineRenderEffect,function(){return K._ssaoCombinePostProcess},!0)),B.postProcessRenderPipelineManager.addPipeline(K),k&&B.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(m,k),K}return Object.defineProperty(N.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),N.prototype.getClassName=function(){return"SSAORenderingPipeline"},N.prototype.dispose=function(m){m===void 0&&(m=!1);for(var B=0;B<this._scene.cameras.length;B++){var M=this._scene.cameras[B];this._originalColorPostProcess.dispose(M),this._ssaoPostProcess.dispose(M),this._blurHPostProcess.dispose(M),this._blurVPostProcess.dispose(M),this._ssaoCombinePostProcess.dispose(M)}this._randomTexture.dispose(),m&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),se.prototype.dispose.call(this)},N.prototype._createBlurPostProcess=function(m){var B=this,M=16;this._blurHPostProcess=new Z.a("BlurH",new F.d(1,0),M,m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new Z.a("BlurV",new F.d(0,1),M,m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var k=B._blurHPostProcess.width/B._scene.getEngine().getRenderWidth();B._blurHPostProcess.kernel=M*k}),this._blurVPostProcess.onActivateObservable.add(function(){var k=B._blurVPostProcess.height/B._scene.getEngine().getRenderHeight();B._blurVPostProcess.kernel=M*k})},N.prototype._rebuild=function(){this._firstUpdate=!0,se.prototype._rebuild.call(this)},N.prototype._createSSAOPostProcess=function(m){var B=this,M=16,k=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],K=1/M;this._ssaoPostProcess=new b.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+M+`
#define SSAO`),this._ssaoPostProcess.onApply=function(R){B._firstUpdate&&(R.setArray3("sampleSphere",k),R.setFloat("samplesFactor",K),R.setFloat("randTextureTiles",4)),R.setFloat("totalStrength",B.totalStrength),R.setFloat("radius",B.radius),R.setFloat("area",B.area),R.setFloat("fallOff",B.fallOff),R.setFloat("base",B.base),R.setTexture("textureSampler",B._depthTexture),R.setTexture("randomSampler",B._randomTexture)}},N.prototype._createSSAOCombinePostProcess=function(m){var B=this;this._ssaoCombinePostProcess=new b.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(M){M.setVector4("viewport",F.c.Vector4[0].copyFromFloats(0,0,1,1)),M.setTextureFromPostProcess("originalColor",B._originalColorPostProcess)}},N.prototype._createRandomTexture=function(){var m=512;this._randomTexture=new A.a("SSAORandomTexture",m,this._scene,!1,c.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var B=this._randomTexture.getContext(),M=function(q,ge){return Math.random()*(ge-q)+q},k=F.e.Zero(),K=0;K<m;K++)for(var R=0;R<m;R++)k.x=Math.floor(M(-1,1)*255),k.y=Math.floor(M(-1,1)*255),k.z=Math.floor(M(-1,1)*255),B.fillStyle="rgb("+k.x+", "+k.y+", "+k.z+")",B.fillRect(K,R,1,1);this._randomTexture.update(!1)},Object(l.c)([Object(s.c)()],N.prototype,"totalStrength",void 0),Object(l.c)([Object(s.c)()],N.prototype,"radius",void 0),Object(l.c)([Object(s.c)()],N.prototype,"area",void 0),Object(l.c)([Object(s.c)()],N.prototype,"fallOff",void 0),Object(l.c)([Object(s.c)()],N.prototype,"base",void 0),N}(n.a),ce=o(450),$=o(571),X=o(581),ve=o(535),me="standardPixelShader",re=`uniform sampler2D textureSampler;
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
`;D.a.ShadersStore[me]=re;var he={name:me,shader:re},ie=function(se){Object(l.d)(N,se);function N(m,B,M,k,K){k===void 0&&(k=null);var R=se.call(this,B.getEngine(),m)||this;return R.downSampleX4PostProcess=null,R.brightPassPostProcess=null,R.blurHPostProcesses=[],R.blurVPostProcesses=[],R.textureAdderPostProcess=null,R.volumetricLightPostProcess=null,R.volumetricLightSmoothXPostProcess=null,R.volumetricLightSmoothYPostProcess=null,R.volumetricLightMergePostProces=null,R.volumetricLightFinalPostProcess=null,R.luminancePostProcess=null,R.luminanceDownSamplePostProcesses=[],R.hdrPostProcess=null,R.textureAdderFinalPostProcess=null,R.lensFlareFinalPostProcess=null,R.hdrFinalPostProcess=null,R.lensFlarePostProcess=null,R.lensFlareComposePostProcess=null,R.motionBlurPostProcess=null,R.depthOfFieldPostProcess=null,R.fxaaPostProcess=null,R.screenSpaceReflectionPostProcess=null,R.brightThreshold=1,R.blurWidth=512,R.horizontalBlur=!1,R.lensTexture=null,R.volumetricLightCoefficient=.2,R.volumetricLightPower=4,R.volumetricLightBlurScale=64,R.sourceLight=null,R.hdrMinimumLuminance=1,R.hdrDecreaseRate=.5,R.hdrIncreaseRate=.5,R.lensColorTexture=null,R.lensFlareStrength=20,R.lensFlareGhostDispersal=1.4,R.lensFlareHaloWidth=.7,R.lensFlareDistortionStrength=16,R.lensFlareBlurWidth=512,R.lensStarTexture=null,R.lensFlareDirtTexture=null,R.depthOfFieldDistance=10,R.depthOfFieldBlurWidth=64,R.animations=[],R._currentDepthOfFieldSource=null,R._fixedExposure=1,R._currentExposure=1,R._hdrAutoExposure=!1,R._hdrCurrentLuminance=1,R._motionStrength=1,R._isObjectBasedMotionBlur=!1,R._camerasToBeAttached=[],R._bloomEnabled=!1,R._depthOfFieldEnabled=!1,R._vlsEnabled=!1,R._lensFlareEnabled=!1,R._hdrEnabled=!1,R._motionBlurEnabled=!1,R._fxaaEnabled=!1,R._screenSpaceReflectionsEnabled=!1,R._motionBlurSamples=64,R._volumetricLightStepsCount=50,R._samples=1,R._cameras=K||B.cameras,R._cameras=R._cameras.slice(),R._camerasToBeAttached=R._cameras.slice(),R._scene=B,R._basePostProcess=k,R._ratio=M,R._floatTextureType=B.getEngine().getCaps().textureFloatRender?1:2,B.postProcessRenderPipelineManager.addPipeline(R),R._buildPipeline(),R}return Object.defineProperty(N.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(m){this._fixedExposure=m,this._currentExposure=m},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(m){if(this._hdrAutoExposure=m,this.hdrPostProcess){var B=["#define HDR"];m&&B.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(B.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(m){this._motionStrength=m,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=m)},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(m){var B=this._isObjectBasedMotionBlur!==m;this._isObjectBasedMotionBlur=m,B&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(m){this._bloomEnabled!==m&&(this._bloomEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(m){this._depthOfFieldEnabled!==m&&(this._depthOfFieldEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(m){this._lensFlareEnabled!==m&&(this._lensFlareEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(m){this._hdrEnabled!==m&&(this._hdrEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(m){if(this._vlsEnabled!==m){if(m){var B=this._scene.enableGeometryBufferRenderer();if(!B){v.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=m,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(m){this._motionBlurEnabled!==m&&(this._motionBlurEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(m){this._fxaaEnabled!==m&&(this._fxaaEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(m){this._screenSpaceReflectionsEnabled!==m&&(this._screenSpaceReflectionsEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(m){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+m.toFixed(1)),this._volumetricLightStepsCount=m},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(m){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=m:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+m.toFixed(1))),this._motionBlurSamples=m},enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype,"samples",{get:function(){return this._samples},set:function(m){this._samples!==m&&(this._samples=m,this._buildPipeline())},enumerable:!1,configurable:!0}),N.prototype._buildPipeline=function(){var m=this,B=this._ratio,M=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new X.a("HDRPass",M,B,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){m._currentDepthOfFieldSource=m.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(M.getEngine(),"HDRScreenSpaceReflections",function(){return m.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new b.a("HDRPass","standard",[],[],B,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){m._currentDepthOfFieldSource=m.originalPostProcess}),this.addEffect(new a.a(M.getEngine(),"HDRPassPostProcess",function(){return m.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(M,B/4),this._createBrightPassPostProcess(M,B/4),this._createBlurPostProcesses(M,B/4,1),this._createTextureAdderPostProcess(M,B),this.textureAdderFinalPostProcess=new b.a("HDRDepthOfFieldSource","standard",[],[],B,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRBaseDepthOfFieldSource",function(){return m.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(M,B),this.volumetricLightFinalPostProcess=new b.a("HDRVLSFinal","standard",[],[],B,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRVLSFinal",function(){return m.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(M,B),this.lensFlareFinalPostProcess=new b.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],B,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return m.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(M,this._floatTextureType),this._createHdrPostProcess(M,B),this.hdrFinalPostProcess=new b.a("HDRPostHDReDepthOfFieldSource","standard",[],[],B,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return m.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(M,B/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(M,B)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(M,B),this._fxaaEnabled&&(this.fxaaPostProcess=new r.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,0),this.addEffect(new a.a(M.getEngine(),"HDRFxaa",function(){return m.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},N.prototype._createDownSampleX4PostProcess=function(m,B){var M=this,k=new Array(32);this.downSampleX4PostProcess=new b.a("HDRDownSampleX4","standard",["dsOffsets"],[],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(K){for(var R=0,q=M.downSampleX4PostProcess.width,ge=M.downSampleX4PostProcess.height,Te=-2;Te<2;Te++)for(var Ae=-2;Ae<2;Ae++)k[R]=(Te+.5)*(1/q),k[R+1]=(Ae+.5)*(1/ge),R+=2;K.setArray2("dsOffsets",k)},this.addEffect(new a.a(m.getEngine(),"HDRDownSampleX4",function(){return M.downSampleX4PostProcess},!0))},N.prototype._createBrightPassPostProcess=function(m,B){var M=this,k=new Array(8);this.brightPassPostProcess=new b.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(K){var R=1/M.brightPassPostProcess.width,q=1/M.brightPassPostProcess.height;k[0]=-.5*R,k[1]=.5*q,k[2]=.5*R,k[3]=.5*q,k[4]=-.5*R,k[5]=-.5*q,k[6]=.5*R,k[7]=-.5*q,K.setArray2("dsOffsets",k),K.setFloat("brightThreshold",M.brightThreshold)},this.addEffect(new a.a(m.getEngine(),"HDRBrightPass",function(){return M.brightPassPostProcess},!0))},N.prototype._createBlurPostProcesses=function(m,B,M,k){var K=this;k===void 0&&(k="blurWidth");var R=m.getEngine(),q=new Z.a("HDRBlurH_"+M,new F.d(1,0),this[k],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,this._floatTextureType),ge=new Z.a("HDRBlurV_"+M,new F.d(0,1),this[k],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,this._floatTextureType);q.onActivateObservable.add(function(){var Te=q.width/R.getRenderWidth();q.kernel=K[k]*Te}),ge.onActivateObservable.add(function(){var Te=ge.height/R.getRenderHeight();ge.kernel=K.horizontalBlur?64*Te:K[k]*Te}),this.addEffect(new a.a(m.getEngine(),"HDRBlurH"+M,function(){return q},!0)),this.addEffect(new a.a(m.getEngine(),"HDRBlurV"+M,function(){return ge},!0)),this.blurHPostProcesses.push(q),this.blurVPostProcesses.push(ge)},N.prototype._createTextureAdderPostProcess=function(m,B){var M=this;this.textureAdderPostProcess=new b.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(k){k.setTextureFromPostProcess("otherSampler",M._vlsEnabled?M._currentDepthOfFieldSource:M.originalPostProcess),k.setTexture("lensSampler",M.lensTexture),k.setFloat("exposure",M._currentExposure),M._currentDepthOfFieldSource=M.textureAdderFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDRTextureAdder",function(){return M.textureAdderPostProcess},!0))},N.prototype._createVolumetricLightPostProcess=function(m,B){var M=this,k=m.enableGeometryBufferRenderer();k.enablePosition=!0;var K=k.getGBuffer();this.volumetricLightPostProcess=new b.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],B/8,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var R=F.d.Zero();this.volumetricLightPostProcess.onApply=function(q){if(M.sourceLight&&M.sourceLight.getShadowGenerator()&&M._scene.activeCamera){var ge=M.sourceLight.getShadowGenerator();q.setTexture("shadowMapSampler",ge.getShadowMap()),q.setTexture("positionSampler",K.textures[2]),q.setColor3("sunColor",M.sourceLight.diffuse),q.setVector3("sunDirection",M.sourceLight.getShadowDirection()),q.setVector3("cameraPosition",M._scene.activeCamera.globalPosition),q.setMatrix("shadowViewProjection",ge.getTransformMatrix()),q.setFloat("scatteringCoefficient",M.volumetricLightCoefficient),q.setFloat("scatteringPower",M.volumetricLightPower),R.x=M.sourceLight.getDepthMinZ(M._scene.activeCamera),R.y=M.sourceLight.getDepthMaxZ(M._scene.activeCamera),q.setVector2("depthValues",R)}},this.addEffect(new a.a(m.getEngine(),"HDRVLS",function(){return M.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(m,B/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new b.a("HDRVLSMerge","standard",[],["originalSampler"],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(q){q.setTextureFromPostProcess("originalSampler",M._bloomEnabled?M.textureAdderFinalPostProcess:M.originalPostProcess),M._currentDepthOfFieldSource=M.volumetricLightFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDRVLSMerge",function(){return M.volumetricLightMergePostProces},!0))},N.prototype._createLuminancePostProcesses=function(m,B){var M=this,k=Math.pow(3,N.LuminanceSteps);this.luminancePostProcess=new b.a("HDRLuminance","standard",["lumOffsets"],[],{width:k,height:k},null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LUMINANCE",B);var K=[];this.luminancePostProcess.onApply=function(Ae){var Ce=1/M.luminancePostProcess.width,Oe=1/M.luminancePostProcess.height;K[0]=-.5*Ce,K[1]=.5*Oe,K[2]=.5*Ce,K[3]=.5*Oe,K[4]=-.5*Ce,K[5]=-.5*Oe,K[6]=.5*Ce,K[7]=-.5*Oe,Ae.setArray2("lumOffsets",K)},this.addEffect(new a.a(m.getEngine(),"HDRLuminance",function(){return M.luminancePostProcess},!0));for(var R=N.LuminanceSteps-1;R>=0;R--){var k=Math.pow(3,R),q=`#define LUMINANCE_DOWN_SAMPLE
`;R===0&&(q+="#define FINAL_DOWN_SAMPLER");var ge=new b.a("HDRLuminanceDownSample"+R,"standard",["dsOffsets","halfDestPixelSize"],[],{width:k,height:k},null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,q,B);this.luminanceDownSamplePostProcesses.push(ge)}var Te=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Ae,Ce){var Oe=new Array(18);Ae.onApply=function(Le){if(!!Te){for(var Ie=0,xe=-1;xe<2;xe++)for(var Me=-1;Me<2;Me++)Oe[Ie]=xe/Te.width,Oe[Ie+1]=Me/Te.height,Ie+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Te.width),Ce===M.luminanceDownSamplePostProcesses.length-1?Te=M.luminancePostProcess:Te=Ae}},Ce===M.luminanceDownSamplePostProcesses.length-1&&(Ae.onAfterRender=function(){var Le=m.getEngine().readPixels(0,0,1,1),Ie=new F.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Me=new Uint8Array(xe.buffer);M._hdrCurrentLuminance=(Me[0]*Ie.x+Me[1]*Ie.y+Me[2]*Ie.z+Me[3]*Ie.w)/100})}),M.addEffect(new a.a(m.getEngine(),"HDRLuminanceDownSample"+Ce,function(){return Ae},!0))})},N.prototype._createHdrPostProcess=function(m,B){var M=this,k=["#define HDR"];this._hdrAutoExposure&&k.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new b.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,k.join(`
`),0);var K=1,R=0,q=0;this.hdrPostProcess.onApply=function(ge){if(ge.setTextureFromPostProcess("textureAdderSampler",M._currentDepthOfFieldSource),R+=m.getEngine().getDeltaTime(),K<0)K=M._hdrCurrentLuminance;else{var Te=(q-R)/1e3;M._hdrCurrentLuminance<K+M.hdrDecreaseRate*Te?K+=M.hdrDecreaseRate*Te:M._hdrCurrentLuminance>K-M.hdrIncreaseRate*Te?K-=M.hdrIncreaseRate*Te:K=M._hdrCurrentLuminance}M.hdrAutoExposure?M._currentExposure=M._fixedExposure/K:(K=ce.a.Clamp(K,M.hdrMinimumLuminance,1e20),ge.setFloat("averageLuminance",K)),q=R,M._currentDepthOfFieldSource=M.hdrFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDR",function(){return M.hdrPostProcess},!0))},N.prototype._createLensFlarePostProcess=function(m,B){var M=this;this.lensFlarePostProcess=new b.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],B/2,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(m.getEngine(),"HDRLensFlare",function(){return M.lensFlarePostProcess},!0)),this._createBlurPostProcesses(m,B/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new b.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(m.getEngine(),"HDRLensFlareCompose",function(){return M.lensFlareComposePostProcess},!0));var k=new F.d(0,0);this.lensFlarePostProcess.onApply=function(q){q.setTextureFromPostProcess("textureSampler",M._bloomEnabled?M.blurHPostProcesses[0]:M.originalPostProcess),q.setTexture("lensColorSampler",M.lensColorTexture),q.setFloat("strength",M.lensFlareStrength),q.setFloat("ghostDispersal",M.lensFlareGhostDispersal),q.setFloat("haloWidth",M.lensFlareHaloWidth),k.x=M.lensFlarePostProcess.width,k.y=M.lensFlarePostProcess.height,q.setVector2("resolution",k),q.setFloat("distortionStrength",M.lensFlareDistortionStrength)};var K=F.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),R=F.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(q){if(!!M._scene.activeCamera){q.setTextureFromPostProcess("otherSampler",M.lensFlarePostProcess),q.setTexture("lensDirtSampler",M.lensFlareDirtTexture),q.setTexture("lensStarSampler",M.lensStarTexture);var ge=M._scene.activeCamera.getViewMatrix().getRow(0),Te=M._scene.activeCamera.getViewMatrix().getRow(2),Ae=F.e.Dot(ge.toVector3(),new F.e(1,0,0))+F.e.Dot(Te.toVector3(),new F.e(0,0,1));Ae*=4;var Ce=F.a.FromValues(Math.cos(Ae)*.5,-Math.sin(Ae),0,0,Math.sin(Ae),Math.cos(Ae)*.5,0,0,0,0,1,0,0,0,0,1),Oe=R.multiply(Ce).multiply(K);q.setMatrix("lensStarMatrix",Oe),M._currentDepthOfFieldSource=M.lensFlareFinalPostProcess}}},N.prototype._createDepthOfFieldPostProcess=function(m,B){var M=this;this.depthOfFieldPostProcess=new b.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(k){k.setTextureFromPostProcess("otherSampler",M._currentDepthOfFieldSource),k.setTexture("depthSampler",M._getDepthTexture()),k.setFloat("distance",M.depthOfFieldDistance)},this.addEffect(new a.a(m.getEngine(),"HDRDepthOfField",function(){return M.depthOfFieldPostProcess},!0))},N.prototype._createMotionBlurPostProcess=function(m,B){var M=this;if(this._isObjectBasedMotionBlur){var k=new $.a("HDRMotionBlur",m,B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,0);k.motionStrength=this.motionStrength,k.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=k}else{this.motionBlurPostProcess=new b.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],B,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var K=0,R=F.a.Identity(),q=F.a.Identity(),ge=F.a.Identity(),Te=F.d.Zero();this.motionBlurPostProcess.onApply=function(Ae){ge=m.getProjectionMatrix().multiply(m.getViewMatrix()),ge.invertToRef(q),Ae.setMatrix("inverseViewProjection",q),Ae.setMatrix("prevViewProjection",R),R=ge,Te.x=M.motionBlurPostProcess.width,Te.y=M.motionBlurPostProcess.height,Ae.setVector2("screenSize",Te),K=m.getEngine().getFps()/60,Ae.setFloat("motionScale",K),Ae.setFloat("motionStrength",M.motionStrength),Ae.setTexture("depthSampler",M._getDepthTexture())}}this.addEffect(new a.a(m.getEngine(),"HDRMotionBlur",function(){return M.motionBlurPostProcess},!0))},N.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var m=this._scene.enableGeometryBufferRenderer();return m.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},N.prototype._disposePostProcesses=function(){for(var m=0;m<this._cameras.length;m++){var B=this._cameras[m];this.originalPostProcess&&this.originalPostProcess.dispose(B),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(B),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(B),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(B),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(B),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(B),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(B),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(B),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(B),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(B),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(B),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(B);for(var M=0;M<this.luminanceDownSamplePostProcesses.length;M++)this.luminanceDownSamplePostProcesses[M].dispose(B);this.luminancePostProcess&&this.luminancePostProcess.dispose(B),this.hdrPostProcess&&this.hdrPostProcess.dispose(B),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(B),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(B),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(B),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(B);for(var M=0;M<this.blurHPostProcesses.length;M++)this.blurHPostProcesses[M].dispose(B);for(var M=0;M<this.blurVPostProcesses.length;M++)this.blurVPostProcesses[M].dispose(B)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},N.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),se.prototype.dispose.call(this)},N.prototype.serialize=function(){var m=s.a.Serialize(this);return this.sourceLight&&(m.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(m.screenSpaceReflectionPostProcess=s.a.Serialize(this.screenSpaceReflectionPostProcess)),m.customType="StandardRenderingPipeline",m},N.Parse=function(m,B,M){var k=s.a.Parse(function(){return new N(m._name,B,m._ratio)},m,B,M);return m.sourceLightId&&(k.sourceLight=B.getLightByID(m.sourceLightId)),m.screenSpaceReflectionPostProcess&&s.a.Parse(function(){return k.screenSpaceReflectionPostProcess},m.screenSpaceReflectionPostProcess,B,M),k},N.LuminanceSteps=6,Object(l.c)([Object(s.c)()],N.prototype,"brightThreshold",void 0),Object(l.c)([Object(s.c)()],N.prototype,"blurWidth",void 0),Object(l.c)([Object(s.c)()],N.prototype,"horizontalBlur",void 0),Object(l.c)([Object(s.c)()],N.prototype,"exposure",null),Object(l.c)([Object(s.m)("lensTexture")],N.prototype,"lensTexture",void 0),Object(l.c)([Object(s.c)()],N.prototype,"volumetricLightCoefficient",void 0),Object(l.c)([Object(s.c)()],N.prototype,"volumetricLightPower",void 0),Object(l.c)([Object(s.c)()],N.prototype,"volumetricLightBlurScale",void 0),Object(l.c)([Object(s.c)()],N.prototype,"hdrMinimumLuminance",void 0),Object(l.c)([Object(s.c)()],N.prototype,"hdrDecreaseRate",void 0),Object(l.c)([Object(s.c)()],N.prototype,"hdrIncreaseRate",void 0),Object(l.c)([Object(s.c)()],N.prototype,"hdrAutoExposure",null),Object(l.c)([Object(s.m)("lensColorTexture")],N.prototype,"lensColorTexture",void 0),Object(l.c)([Object(s.c)()],N.prototype,"lensFlareStrength",void 0),Object(l.c)([Object(s.c)()],N.prototype,"lensFlareGhostDispersal",void 0),Object(l.c)([Object(s.c)()],N.prototype,"lensFlareHaloWidth",void 0),Object(l.c)([Object(s.c)()],N.prototype,"lensFlareDistortionStrength",void 0),Object(l.c)([Object(s.c)()],N.prototype,"lensFlareBlurWidth",void 0),Object(l.c)([Object(s.m)("lensStarTexture")],N.prototype,"lensStarTexture",void 0),Object(l.c)([Object(s.m)("lensFlareDirtTexture")],N.prototype,"lensFlareDirtTexture",void 0),Object(l.c)([Object(s.c)()],N.prototype,"depthOfFieldDistance",void 0),Object(l.c)([Object(s.c)()],N.prototype,"depthOfFieldBlurWidth",void 0),Object(l.c)([Object(s.c)()],N.prototype,"motionStrength",null),Object(l.c)([Object(s.c)()],N.prototype,"objectBasedMotionBlur",null),Object(l.c)([Object(s.c)()],N.prototype,"_ratio",void 0),Object(l.c)([Object(s.c)()],N.prototype,"BloomEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"DepthOfFieldEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"LensFlareEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"HDREnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"VLSEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"MotionBlurEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"fxaaEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"screenSpaceReflectionsEnabled",null),Object(l.c)([Object(s.c)()],N.prototype,"volumetricLightStepsCount",null),Object(l.c)([Object(s.c)()],N.prototype,"motionBlurSamples",null),Object(l.c)([Object(s.c)()],N.prototype,"samples",null),N}(n.a);d.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=ie;var _e=o(548)},605:function(J,j,o){"use strict";var l=o(435),s="importanceSampling",C=`




























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
}`;l.a.ShadersStore[C]=v;var c={name:C,shader:v}},626:function(J,j,o){"use strict";o.d(j,"a",function(){return _});var l=o(434),s=o(439),C=o(441),v=o(480),c=o(454),_=function(){function p(i){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=p._DefaultIndexOfRefraction,this.indexOfRefraction=p._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=C.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=i}return p.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},p.prototype.isReadyForSubMesh=function(i,e,t,r){return!(i._areTexturesDirty&&e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&v.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||t.getCaps().standardDerivatives&&this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled&&!r&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},p.prototype.prepareDefines=function(i,e){var t;this._isEnabled?(i.CLEARCOAT=!0,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((t=this._textureRoughness)===null||t===void 0?void 0:t._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),i.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,i._areTexturesDirty&&e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,i,"CLEARCOAT_TEXTURE"):i.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,i,"CLEARCOAT_TEXTURE_ROUGHNESS"):i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled?c.a.PrepareDefinesForMergedUV(this._bumpTexture,i,"CLEARCOAT_BUMP"):i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===p._DefaultIndexOfRefraction,this._isTintEnabled?(i.CLEARCOAT_TINT=!0,this._tintTexture&&v.a.ClearCoatTintTextureEnabled?c.a.PrepareDefinesForMergedUV(this._tintTexture,i,"CLEARCOAT_TINT_TEXTURE"):i.CLEARCOAT_TINT_TEXTURE=!1):(i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1))):(i.CLEARCOAT=!1,i.CLEARCOAT_TEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS=!1,i.CLEARCOAT_BUMP=!1,i.CLEARCOAT_TINT=!1,i.CLEARCOAT_TINT_TEXTURE=!1,i.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,i.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},p.prototype.bindForSubMesh=function(i,e,t,r,n,a,f,h){var d,g,O,P,A,b,L,D,U=h._materialDefines,y=U.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!i.useUbo||!n||!i.isSync){y&&v.a.ClearCoatTextureEnabled?(i.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,i,"clearCoat")):(this._texture||this._textureRoughness)&&v.a.ClearCoatTextureEnabled&&(i.updateFloat4("vClearCoatInfos",(g=(d=this._texture)===null||d===void 0?void 0:d.coordinatesIndex)!==null&&g!==void 0?g:0,(P=(O=this._texture)===null||O===void 0?void 0:O.level)!==null&&P!==void 0?P:0,(b=(A=this._textureRoughness)===null||A===void 0?void 0:A.coordinatesIndex)!==null&&b!==void 0?b:0,(D=(L=this._textureRoughness)===null||L===void 0?void 0:L.level)!==null&&D!==void 0?D:0),this._texture&&c.a.BindTextureMatrix(this._texture,i,"clearCoat"),this._textureRoughness&&!y&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,i,"clearCoatRoughness")),this._bumpTexture&&t.getCaps().standardDerivatives&&v.a.ClearCoatTextureEnabled&&!r&&(i.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),c.a.BindTextureMatrix(this._bumpTexture,i,"clearCoatBump"),e._mirroredCameraPosition?i.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,f?1:-1):i.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,f?-1:1)),this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&(i.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),c.a.BindTextureMatrix(this._tintTexture,i,"clearCoatTint")),i.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var V=1-this._indexOfRefraction,I=1+this._indexOfRefraction,x=Math.pow(-V/I,2),E=1/this._indexOfRefraction;i.updateFloat4("vClearCoatRefractionParams",x,E,V,I),this._isTintEnabled&&(i.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),i.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!y&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&v.a.ClearCoatTextureEnabled&&i.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&t.getCaps().standardDerivatives&&v.a.ClearCoatBumpTextureEnabled&&!r&&i.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&i.setTexture("clearCoatTintSampler",this._tintTexture))},p.prototype.hasTexture=function(i){return this._texture===i||this._textureRoughness===i||this._bumpTexture===i||this._tintTexture===i},p.prototype.getActiveTextures=function(i){this._texture&&i.push(this._texture),this._textureRoughness&&i.push(this._textureRoughness),this._bumpTexture&&i.push(this._bumpTexture),this._tintTexture&&i.push(this._tintTexture)},p.prototype.getAnimatables=function(i){this._texture&&this._texture.animations&&this._texture.animations.length>0&&i.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&i.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&i.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&i.push(this._tintTexture)},p.prototype.dispose=function(i){var e,t,r,n;i&&((e=this._texture)===null||e===void 0||e.dispose(),(t=this._textureRoughness)===null||t===void 0||t.dispose(),(r=this._bumpTexture)===null||r===void 0||r.dispose(),(n=this._tintTexture)===null||n===void 0||n.dispose())},p.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},p.AddFallbacks=function(i,e,t){return i.CLEARCOAT_BUMP&&e.addFallback(t++,"CLEARCOAT_BUMP"),i.CLEARCOAT_TINT&&e.addFallback(t++,"CLEARCOAT_TINT"),i.CLEARCOAT&&e.addFallback(t++,"CLEARCOAT"),t},p.AddUniforms=function(i){i.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},p.AddSamplers=function(i){i.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},p.PrepareUniformBuffer=function(i){i.addUniform("vClearCoatParams",2),i.addUniform("vClearCoatRefractionParams",4),i.addUniform("vClearCoatInfos",4),i.addUniform("clearCoatMatrix",16),i.addUniform("clearCoatRoughnessMatrix",16),i.addUniform("vClearCoatBumpInfos",2),i.addUniform("vClearCoatTangentSpaceParams",2),i.addUniform("clearCoatBumpMatrix",16),i.addUniform("vClearCoatTintParams",4),i.addUniform("clearCoatColorAtDistance",1),i.addUniform("vClearCoatTintInfos",2),i.addUniform("clearCoatTintMatrix",16)},p.prototype.copyTo=function(i){s.a.Clone(function(){return i},this)},p.prototype.serialize=function(){return s.a.Serialize(this)},p.prototype.parse=function(i,e,t){var r=this;s.a.Parse(function(){return r},i,e,t)},p._DefaultIndexOfRefraction=1.5,Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isEnabled",void 0),Object(l.c)([Object(s.c)()],p.prototype,"intensity",void 0),Object(l.c)([Object(s.c)()],p.prototype,"roughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"indexOfRefraction",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"texture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"useRoughnessFromMainTexture",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"textureRoughness",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"remapF0OnInterfaceChange",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"bumpTexture",void 0),Object(l.c)([Object(s.c)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isTintEnabled",void 0),Object(l.c)([Object(s.e)()],p.prototype,"tintColor",void 0),Object(l.c)([Object(s.c)()],p.prototype,"tintColorAtDistance",void 0),Object(l.c)([Object(s.c)()],p.prototype,"tintThickness",void 0),Object(l.c)([Object(s.m)(),Object(s.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"tintTexture",void 0),p}()},627:function(J,j,o){"use strict";var l=o(435),s="subSurfaceScatteringFunctions",C=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;l.a.IncludesShadersStore[s]=C;var v={name:s,shader:C}},644:function(J,j,o){"use strict";var l=o(435),s=o(524),C=o(457),v=o(525),c="imageProcessingPixelShader",_=`
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
}`;l.a.ShadersStore[c]=_;var p={name:c,shader:_}},646:function(J,j,o){"use strict";var l=o(435),s="glowMapMergePixelShader",C=`
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
}`;l.a.ShadersStore[s]=C;var v={name:s,shader:C}},743:function(J,j,o){"use strict";o.d(j,"a",function(){return s});/*! *****************************************************************************
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
***************************************************************************** */var l=function(I,x){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,z){E.__proto__=z}||function(E,z){for(var H in z)Object.prototype.hasOwnProperty.call(z,H)&&(E[H]=z[H])},l(I,x)};function s(I,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");l(I,x);function E(){this.constructor=I}I.prototype=x===null?Object.create(x):(E.prototype=x.prototype,new E)}var C=function(){return C=Object.assign||function(x){for(var E,z=1,H=arguments.length;z<H;z++){E=arguments[z];for(var F in E)Object.prototype.hasOwnProperty.call(E,F)&&(x[F]=E[F])}return x},C.apply(this,arguments)};function v(I,x){var E={};for(var z in I)Object.prototype.hasOwnProperty.call(I,z)&&x.indexOf(z)<0&&(E[z]=I[z]);if(I!=null&&typeof Object.getOwnPropertySymbols=="function")for(var H=0,z=Object.getOwnPropertySymbols(I);H<z.length;H++)x.indexOf(z[H])<0&&Object.prototype.propertyIsEnumerable.call(I,z[H])&&(E[z[H]]=I[z[H]]);return E}function c(I,x,E,z){var H=arguments.length,F=H<3?x:z===null?z=Object.getOwnPropertyDescriptor(x,E):z,Y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")F=Reflect.decorate(I,x,E,z);else for(var Z=I.length-1;Z>=0;Z--)(Y=I[Z])&&(F=(H<3?Y(F):H>3?Y(x,E,F):Y(x,E))||F);return H>3&&F&&Object.defineProperty(x,E,F),F}function _(I,x){return function(E,z){x(E,z,I)}}function p(I,x){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(I,x)}function i(I,x,E,z){function H(F){return F instanceof E?F:new E(function(Y){Y(F)})}return new(E||(E=Promise))(function(F,Y){function Z(fe){try{G(z.next(fe))}catch(ee){Y(ee)}}function le(fe){try{G(z.throw(fe))}catch(ee){Y(ee)}}function G(fe){fe.done?F(fe.value):H(fe.value).then(Z,le)}G((z=z.apply(I,x||[])).next())})}function e(I,x){var E={label:0,sent:function(){if(F[0]&1)throw F[1];return F[1]},trys:[],ops:[]},z,H,F,Y;return Y={next:Z(0),throw:Z(1),return:Z(2)},typeof Symbol=="function"&&(Y[Symbol.iterator]=function(){return this}),Y;function Z(G){return function(fe){return le([G,fe])}}function le(G){if(z)throw new TypeError("Generator is already executing.");for(;E;)try{if(z=1,H&&(F=G[0]&2?H.return:G[0]?H.throw||((F=H.return)&&F.call(H),0):H.next)&&!(F=F.call(H,G[1])).done)return F;switch(H=0,F&&(G=[G[0]&2,F.value]),G[0]){case 0:case 1:F=G;break;case 4:return E.label++,{value:G[1],done:!1};case 5:E.label++,H=G[1],G=[0];continue;case 7:G=E.ops.pop(),E.trys.pop();continue;default:if(F=E.trys,!(F=F.length>0&&F[F.length-1])&&(G[0]===6||G[0]===2)){E=0;continue}if(G[0]===3&&(!F||G[1]>F[0]&&G[1]<F[3])){E.label=G[1];break}if(G[0]===6&&E.label<F[1]){E.label=F[1],F=G;break}if(F&&E.label<F[2]){E.label=F[2],E.ops.push(G);break}F[2]&&E.ops.pop(),E.trys.pop();continue}G=x.call(I,E)}catch(fe){G=[6,fe],H=0}finally{z=F=0}if(G[0]&5)throw G[1];return{value:G[0]?G[1]:void 0,done:!0}}}var t=Object.create?function(I,x,E,z){z===void 0&&(z=E),Object.defineProperty(I,z,{enumerable:!0,get:function(){return x[E]}})}:function(I,x,E,z){z===void 0&&(z=E),I[z]=x[E]};function r(I,x){for(var E in I)E!=="default"&&!Object.prototype.hasOwnProperty.call(x,E)&&t(x,I,E)}function n(I){var x=typeof Symbol=="function"&&Symbol.iterator,E=x&&I[x],z=0;if(E)return E.call(I);if(I&&typeof I.length=="number")return{next:function(){return I&&z>=I.length&&(I=void 0),{value:I&&I[z++],done:!I}}};throw new TypeError(x?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(I,x){var E=typeof Symbol=="function"&&I[Symbol.iterator];if(!E)return I;var z=E.call(I),H,F=[],Y;try{for(;(x===void 0||x-- >0)&&!(H=z.next()).done;)F.push(H.value)}catch(Z){Y={error:Z}}finally{try{H&&!H.done&&(E=z.return)&&E.call(z)}finally{if(Y)throw Y.error}}return F}function f(){for(var I=[],x=0;x<arguments.length;x++)I=I.concat(a(arguments[x]));return I}function h(){for(var I=0,x=0,E=arguments.length;x<E;x++)I+=arguments[x].length;for(var z=Array(I),H=0,x=0;x<E;x++)for(var F=arguments[x],Y=0,Z=F.length;Y<Z;Y++,H++)z[H]=F[Y];return z}function d(I,x){for(var E=0,z=x.length,H=I.length;E<z;E++,H++)I[H]=x[E];return I}function g(I){return this instanceof g?(this.v=I,this):new g(I)}function O(I,x,E){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var z=E.apply(I,x||[]),H,F=[];return H={},Y("next"),Y("throw"),Y("return"),H[Symbol.asyncIterator]=function(){return this},H;function Y(te){z[te]&&(H[te]=function(ce){return new Promise(function($,X){F.push([te,ce,$,X])>1||Z(te,ce)})})}function Z(te,ce){try{le(z[te](ce))}catch($){ee(F[0][3],$)}}function le(te){te.value instanceof g?Promise.resolve(te.value.v).then(G,fe):ee(F[0][2],te)}function G(te){Z("next",te)}function fe(te){Z("throw",te)}function ee(te,ce){te(ce),F.shift(),F.length&&Z(F[0][0],F[0][1])}}function P(I){var x,E;return x={},z("next"),z("throw",function(H){throw H}),z("return"),x[Symbol.iterator]=function(){return this},x;function z(H,F){x[H]=I[H]?function(Y){return(E=!E)?{value:g(I[H](Y)),done:H==="return"}:F?F(Y):Y}:F}}function A(I){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var x=I[Symbol.asyncIterator],E;return x?x.call(I):(I=typeof n=="function"?n(I):I[Symbol.iterator](),E={},z("next"),z("throw"),z("return"),E[Symbol.asyncIterator]=function(){return this},E);function z(F){E[F]=I[F]&&function(Y){return new Promise(function(Z,le){Y=I[F](Y),H(Z,le,Y.done,Y.value)})}}function H(F,Y,Z,le){Promise.resolve(le).then(function(G){F({value:G,done:Z})},Y)}}function b(I,x){return Object.defineProperty?Object.defineProperty(I,"raw",{value:x}):I.raw=x,I}var L=Object.create?function(I,x){Object.defineProperty(I,"default",{enumerable:!0,value:x})}:function(I,x){I.default=x};function D(I){if(I&&I.__esModule)return I;var x={};if(I!=null)for(var E in I)E!=="default"&&Object.prototype.hasOwnProperty.call(I,E)&&t(x,I,E);return L(x,I),x}function U(I){return I&&I.__esModule?I:{default:I}}function y(I,x){if(!x.has(I))throw new TypeError("attempted to get private field on non-instance");return x.get(I)}function V(I,x,E){if(!x.has(I))throw new TypeError("attempted to set private field on non-instance");return x.set(I,E),E}},758:function(J,j,o){"use strict";o.d(j,"a",function(){return p});var l=o(743),s=o(435),C=o(455),v=o(437),c=function(){function i(){}return i}(),_=function(){function i(){}return i}(),p=function(i){Object(l.a)(e,i);function e(t,r){var n=i.call(this,t,r)||this;return n.CustomParts=new _,n.customShaderNameResolve=n.Builder,n.FragmentShader=s.a.ShadersStore.defaultPixelShader,n.VertexShader=s.a.ShadersStore.defaultVertexShader,n}return e.prototype.AttachAfterBind=function(t,r){if(this._newUniformInstances)for(var n in this._newUniformInstances){var a=n.toString().split("-");a[0]=="vec2"?r.setVector2(a[1],this._newUniformInstances[n]):a[0]=="vec3"?r.setVector3(a[1],this._newUniformInstances[n]):a[0]=="vec4"?r.setVector4(a[1],this._newUniformInstances[n]):a[0]=="mat4"?r.setMatrix(a[1],this._newUniformInstances[n]):a[0]=="float"&&r.setFloat(a[1],this._newUniformInstances[n])}if(this._newSamplerInstances)for(var n in this._newSamplerInstances){var a=n.toString().split("-");a[0]=="sampler2D"&&this._newSamplerInstances[n].isReady&&this._newSamplerInstances[n].isReady()&&r.setTexture(a[1],this._newSamplerInstances[n])}},e.prototype.ReviewUniform=function(t,r){if(t=="uniform"&&this._newUniforms)for(var n=0;n<this._newUniforms.length;n++)this._customUniform[n].indexOf("sampler")==-1&&r.push(this._newUniforms[n]);if(t=="sampler"&&this._newUniforms)for(var n=0;n<this._newUniforms.length;n++)this._customUniform[n].indexOf("sampler")!=-1&&r.push(this._newUniforms[n]);return r},e.prototype.Builder=function(t,r,n,a,f,h){var d=this;if(h&&this._customAttributes&&this._customAttributes.length>0&&h.push.apply(h,this._customAttributes),this.ReviewUniform("uniform",r),this.ReviewUniform("sampler",a),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,e.ShaderIndexer++;var g="custom_"+e.ShaderIndexer,O=this._afterBind.bind(this);return this._afterBind=function(P,A){if(!!A){d.AttachAfterBind(P,A);try{O(P,A)}catch(b){}}},s.a.ShadersStore[g+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(s.a.ShadersStore[g+"VertexShader"]=s.a.ShadersStore[g+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),s.a.ShadersStore[g+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(s.a.ShadersStore[g+"PixelShader"]=s.a.ShadersStore[g+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=g,g},e.prototype.AddUniform=function(t,r,n){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),n&&(r.indexOf("sampler")!=-1?this._newSamplerInstances[r+"-"+t]=n:this._newUniformInstances[r+"-"+t]=n),this._customUniform.push("uniform "+r+" "+t+";"),this._newUniforms.push(t),this},e.prototype.AddAttribute=function(t){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(t),this},e.prototype.Fragment_Begin=function(t){return this.CustomParts.Fragment_Begin=t,this},e.prototype.Fragment_Definitions=function(t){return this.CustomParts.Fragment_Definitions=t,this},e.prototype.Fragment_MainBegin=function(t){return this.CustomParts.Fragment_MainBegin=t,this},e.prototype.Fragment_Custom_Diffuse=function(t){return this.CustomParts.Fragment_Custom_Diffuse=t.replace("result","diffuseColor"),this},e.prototype.Fragment_Custom_Alpha=function(t){return this.CustomParts.Fragment_Custom_Alpha=t.replace("result","alpha"),this},e.prototype.Fragment_Before_Lights=function(t){return this.CustomParts.Fragment_Before_Lights=t,this},e.prototype.Fragment_Before_Fog=function(t){return this.CustomParts.Fragment_Before_Fog=t,this},e.prototype.Fragment_Before_FragColor=function(t){return this.CustomParts.Fragment_Before_FragColor=t.replace("result","color"),this},e.prototype.Vertex_Begin=function(t){return this.CustomParts.Vertex_Begin=t,this},e.prototype.Vertex_Definitions=function(t){return this.CustomParts.Vertex_Definitions=t,this},e.prototype.Vertex_MainBegin=function(t){return this.CustomParts.Vertex_MainBegin=t,this},e.prototype.Vertex_Before_PositionUpdated=function(t){return this.CustomParts.Vertex_Before_PositionUpdated=t.replace("result","positionUpdated"),this},e.prototype.Vertex_Before_NormalUpdated=function(t){return this.CustomParts.Vertex_Before_NormalUpdated=t.replace("result","normalUpdated"),this},e.prototype.Vertex_After_WorldPosComputed=function(t){return this.CustomParts.Vertex_After_WorldPosComputed=t,this},e.prototype.Vertex_MainEnd=function(t){return this.CustomParts.Vertex_MainEnd=t,this},e.ShaderIndexer=1,e}(C.a);v.a.RegisteredTypes["BABYLON.CustomMaterial"]=p},95:function(J,j,o){"use strict";o.r(j);var l=o(445),s=o(449),C=o(498),v=o(475),c=o(441),_=o(506),p=o(648),i=o(758),e=o(555),t=o(602),r=o(446),n=o(549),a=o(356),f=o(357),h=o(358),d=o(359),g=o(360),O=(b,L,D)=>new Promise((U,y)=>{var V=E=>{try{x(D.next(E))}catch(z){y(z)}},I=E=>{try{x(D.throw(E))}catch(z){y(z)}},x=E=>E.done?U(E.value):Promise.resolve(E.value).then(V,I);x((D=D.apply(b,L)).next())});const P={animate:!0,context:Object(n.a)()},A=b=>O(void 0,[b],function*({canvas:L,width:D,height:U}){const y=new l.a(L,!0,{preserveDrawingBuffer:!0,stencil:!0}),V=200,I=.125,x=50,E=.25,z=c.a.FromHexString("#10161A"),H=c.a.FromHexString("#F5F8FA"),F=+new Date,Y=new s.a(y);Y.clearColor=z,Y.fogMode=s.a.FOGMODE_EXP2,Y.fogDensity=.0225,Y.fogColor=z;const Z=new _.a("camera",-2,0,50,new v.z(0,0,0),Y);Z.fov=1,Z.minZ=.1;const le=new C.a("hemiLight",new v.z(0,1,0),Y);le.diffuse=new c.a(1,1,1),le.groundColor=new c.a(0,0,0),le.specular=new c.a(0,0,0),le.intensity=1;const G=new i.a("starMaterial",Y);G.specularColor=H,G.emissiveColor=new c.a(.175,.175,.175),G.alpha=.8;const fe=(()=>{const me=[],re=2;for(let ie=0;ie<1;ie+=1/re){const _e=0,se=ie,N=0;me.push(new v.z(_e,se,N))}const he=p.a.CreateTube("tube",{path:me,tessellation:5,radiusFunction:ie=>{const _e=.0125,se=1-(ie+1)/re;return _e*se},cap:r.a.CAP_START,scene:Y,updatable:!1,sideOrientation:r.a.DEFAULTSIDE});return he.material=G,he})(),ee=V*V,te=new Float32Array(16*ee),ce=new Float32Array(ee),$=new Float32Array(ee);let X=0;for(let me=0;me<V;me+=1)for(let re=0;re<V;re+=1){const he=me+(Math.random()-.5),ie=re+(Math.random()-.5);v.k.Translation((he-V/2)*I,0,(ie-V/2)*I).copyToArray(te,X*16),ce[X]=X,$[X]=Math.random(),X+=1}fe.thinInstanceSetBuffer("matrix",te,16),fe.thinInstanceSetBuffer("idx",ce,1),fe.thinInstanceSetBuffer("rFactor1",$,1),G.Vertex_Definitions(a.default),G.Vertex_Before_PositionUpdated(f.default),G.Vertex_After_WorldPosComputed(h.default),G.Fragment_Definitions(d.default),G.Fragment_Custom_Diffuse(g.default),G.AddAttribute("rFactor1"),G.AddAttribute("idx"),G.AddUniform("iTime","float"),G.AddUniform("speedFactor","float"),G.AddUniform("rainHeight","float"),G.onBind=()=>{const me=(+new Date-F)*.001;G.getEffect().setFloat("iTime",me),G.getEffect().setFloat("speedFactor",E),G.getEffect().setFloat("rainHeight",x)};const ve=new t.a("default",!1,Y,[Z]);return ve.fxaaEnabled=!0,ve.samples=8,ve.bloomEnabled=!0,ve.bloomThreshold=.17,ve.bloomWeight=5,ve.bloomKernel=100,ve.bloomScale=.9,{render({time:me,deltaTime:re}){Y.render()},resize({pixelRatio:me,width:re,height:he}){y.resize()},unload(){y.dispose()}}});j.default={sketch:A,settings:P}}}]);
