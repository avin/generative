(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[45,255,256],{103:function($,W,s){"use strict";s.r(W);var f=s(445),o=s(449),E=s(498),v=s(475),c=s(441),O=s(506),p=s(648),r=s(602),e=s(766),t=s(442),i=s(549),n=s(374),a=s(375),l=(g,A,R)=>new Promise((S,P)=>{var D=F=>{try{U(R.next(F))}catch(V){P(V)}},L=F=>{try{U(R.throw(F))}catch(V){P(V)}},U=F=>F.done?S(F.value):Promise.resolve(F.value).then(D,L);U((R=R.apply(g,A)).next())});const h={animate:!0,context:Object(i.a)()},u=g=>l(void 0,[g],function*({canvas:A,width:R,height:S}){const P=new f.a(A,!0,{preserveDrawingBuffer:!0,stencil:!0}),D=+new Date,L=new o.a(P);L.clearColor=c.b.FromColor3(new c.a(25/255,32/255,38/255));const U=Math.PI/4,F=Math.PI/3,V=new O.a("camera",U,F,30,new v.z(0,0,0),L);V.wheelPrecision=50,V.minZ=.9,V.attachControl(A,!0);const I=new E.a("hemiLight",new v.z(-2,2,0),L);I.diffuse=new c.a(1,1,1),I.specular=new c.a(0,0,0);const x=512,_=.6,G=((Z,fe=0)=>p.a.CreateTube("torus",{path:(()=>{const w=[];for(let se=0;se<=x;se+=1){const ee=se/(x-_*.1),te=16,le=ee*Math.PI*te-fe*500,q=Math.cos(ee*Math.PI*2),X=Math.cos(le)*(q*.5+.5+.5)*5,ge=Math.sin(le)*(q*.5+.5+.5)*5,Ee=Math.cos(ee*(Math.PI*2)+Math.PI/2)*5;w.push(new v.z(X,Ee,ge))}return w})(),radius:_,tessellation:64,updatable:!0,instance:Z}))(),y=new e.a("plastic",L);y.metallic=0,y.roughness=1,y.albedoColor=new c.a(1,0,0),y.albedoTexture=new t.a("none",L),G.material=y,y.Fragment_Definitions(n.default),y.Fragment_Custom_Albedo(a.default),y.AddUniform("iTime","float"),y.onBind=()=>{const Z=(+new Date-D)*.001;y.getEffect().setFloat("iTime",Z)};const Y=new r.a("default",!0,L,[V]);return Y.fxaaEnabled=!0,Y.samples=8,Y.imageProcessingEnabled=!1,Y.chromaticAberrationEnabled=!0,Y.chromaticAberration.aberrationAmount=2.5,{render({time:Z,width:fe,height:w}){G.rotation.y=Z*Math.PI,L.render()},resize({pixelRatio:Z,width:fe,height:w}){P.resize()},unload(){P.dispose()}}});W.default={sketch:u,settings:h}},374:function($,W,s){"use strict";s.r(W),W.default=`#define GLSLIFY 1
vec3 hsv2rgb_smooth( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

	rgb = rgb*rgb*(3.0-2.0*rgb); // cubic smoothing

	return c.z * mix( vec3(1.0), rgb, c.y);
}
`},375:function($,W,s){"use strict";s.r(W),W.default=`#define GLSLIFY 1
vec2 uv =  vAlbedoUV+uvOffset;
surfaceAlbedo.rgb = hsv2rgb_smooth(vec3(uv.y*2. - iTime*.1, .95, 1.));
`},444:function($,W,s){"use strict";s.d(W,"a",function(){return t});var f=s(434),o=s(490),E=s(438),v=s(436),c=s(534),O=s(445),p=s(500),r=s(439),e=s(437),t=function(){function i(n,a,l,h,u,g,A,R,S,P,D,L,U,F,V){A===void 0&&(A=1),P===void 0&&(P=null),D===void 0&&(D=0),L===void 0&&(L="postprocess"),F===void 0&&(F=!1),V===void 0&&(V=5),this.width=-1,this.height=-1,this.nodeMaterialSource=null,this._outputTexture=null,this.autoClear=!0,this.alphaMode=0,this.animations=new Array,this.enablePixelPerfectMode=!1,this.forceFullscreenViewport=!0,this.scaleMode=1,this.alwaysForcePOT=!1,this._samples=1,this.adaptScaleToCurrentViewport=!1,this._reusable=!1,this._renderId=0,this._textures=new o.a(2),this._textureCache=[],this._currentRenderTextureInd=0,this._scaleRatio=new v.d(1,1),this._texelSize=v.d.Zero(),this.onActivateObservable=new E.c,this.onSizeChangedObservable=new E.c,this.onApplyObservable=new E.c,this.onBeforeRenderObservable=new E.c,this.onAfterRenderObservable=new E.c,this.name=n,g!=null?(this._camera=g,this._scene=g.getScene(),g.attachPostProcess(this),this._engine=this._scene.getEngine(),this._scene.postProcesses.push(this),this.uniqueId=this._scene.getUniqueId()):R&&(this._engine=R,this._engine.postProcesses.push(this)),this._options=u,this.renderTargetSamplingMode=A||1,this._reusable=S||!1,this._textureType=D,this._textureFormat=V,this._samplers=h||[],this._samplers.push("textureSampler"),this._fragmentUrl=a,this._vertexUrl=L,this._parameters=l||[],this._parameters.push("scale"),this._indexParameters=U,F||this.updateEffect(P)}return Object.defineProperty(i.prototype,"samples",{get:function(){return this._samples},set:function(n){var a=this;this._samples=Math.min(n,this._engine.getCaps().maxMSAASamples),this._textures.forEach(function(l){l.samples!==a._samples&&a._engine.updateRenderTargetTextureSampleCount(l,a._samples)})},enumerable:!1,configurable:!0}),i.prototype.getEffectName=function(){return this._fragmentUrl},Object.defineProperty(i.prototype,"onActivate",{set:function(n){this._onActivateObserver&&this.onActivateObservable.remove(this._onActivateObserver),n&&(this._onActivateObserver=this.onActivateObservable.add(n))},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onSizeChanged",{set:function(n){this._onSizeChangedObserver&&this.onSizeChangedObservable.remove(this._onSizeChangedObserver),this._onSizeChangedObserver=this.onSizeChangedObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onApply",{set:function(n){this._onApplyObserver&&this.onApplyObservable.remove(this._onApplyObserver),this._onApplyObserver=this.onApplyObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onBeforeRender",{set:function(n){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"onAfterRender",{set:function(n){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(n)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"inputTexture",{get:function(){return this._textures.data[this._currentRenderTextureInd]},set:function(n){this._forcedOutputTexture=n},enumerable:!1,configurable:!0}),i.prototype.restoreDefaultInputTexture=function(){this._forcedOutputTexture&&(this._forcedOutputTexture=null,this.markTextureDirty())},i.prototype.getCamera=function(){return this._camera},Object.defineProperty(i.prototype,"texelSize",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.texelSize:(this._forcedOutputTexture&&this._texelSize.copyFromFloats(1/this._forcedOutputTexture.width,1/this._forcedOutputTexture.height),this._texelSize)},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"PostProcess"},i.prototype.getEngine=function(){return this._engine},i.prototype.getEffect=function(){return this._effect},i.prototype.shareOutputWith=function(n){return this._disposeTextures(),this._shareOutputWithPostProcess=n,this},i.prototype.useOwnOutput=function(){this._textures.length==0&&(this._textures=new o.a(2)),this._shareOutputWithPostProcess=null},i.prototype.updateEffect=function(n,a,l,h,u,g,A,R){n===void 0&&(n=null),a===void 0&&(a=null),l===void 0&&(l=null),this._postProcessDefines=n,this._effect=this._engine.createEffect({vertex:A!=null?A:this._vertexUrl,fragment:R!=null?R:this._fragmentUrl},["position"],a||this._parameters,l||this._samplers,n!==null?n:"",void 0,u,g,h||this._indexParameters)},i.prototype.isReusable=function(){return this._reusable},i.prototype.markTextureDirty=function(){this.width=-1},i.prototype._createRenderTargetTexture=function(n,a,l){l===void 0&&(l=0);for(var h=0;h<this._textureCache.length;h++)if(this._textureCache[h].texture.width===n.width&&this._textureCache[h].texture.height===n.height&&this._textureCache[h].postProcessChannel===l)return this._textureCache[h].texture;var u=this._engine.createRenderTargetTexture(n,a);return this._textureCache.push({texture:u,postProcessChannel:l,lastUsedRenderId:-1}),u},i.prototype._flushTextureCache=function(){for(var n=this._renderId,a=this._textureCache.length-1;a>=0;a--)if(n-this._textureCache[a].lastUsedRenderId>100){for(var l=!1,h=0;h<this._textures.length;h++)if(this._textures.data[h]===this._textureCache[a].texture){l=!0;break}l||(this._engine._releaseTexture(this._textureCache[a].texture),this._textureCache.splice(a,1))}},i.prototype._resize=function(n,a,l,h,u){this._textures.length>0&&this._textures.reset(),this.width=n,this.height=a;var g={width:this.width,height:this.height},A={generateMipMaps:h,generateDepthBuffer:u||l._postProcesses.indexOf(this)===0,generateStencilBuffer:(u||l._postProcesses.indexOf(this)===0)&&this._engine.isStencilEnable,samplingMode:this.renderTargetSamplingMode,type:this._textureType,format:this._textureFormat};this._textures.push(this._createRenderTargetTexture(g,A,0)),this._reusable&&this._textures.push(this._createRenderTargetTexture(g,A,1)),this._texelSize.copyFromFloats(1/this.width,1/this.height),this.onSizeChangedObservable.notifyObservers(this)},i.prototype.activate=function(n,a,l){var h=this;a===void 0&&(a=null),n=n||this._camera;var u=n.getScene(),g=u.getEngine(),A=g.getCaps().maxTextureSize,R=(a?a.width:this._engine.getRenderWidth(!0))*this._options|0,S=(a?a.height:this._engine.getRenderHeight(!0))*this._options|0,P=n.parent;P&&(P.leftCamera==n||P.rightCamera==n)&&(R/=2);var D=this._options.width||R,L=this._options.height||S,U=this.renderTargetSamplingMode!==7&&this.renderTargetSamplingMode!==1&&this.renderTargetSamplingMode!==2;if(!this._shareOutputWithPostProcess&&!this._forcedOutputTexture){if(this.adaptScaleToCurrentViewport){var F=g.currentViewport;F&&(D*=F.width,L*=F.height)}(U||this.alwaysForcePOT)&&(this._options.width||(D=g.needPOTTextures?O.a.GetExponentOfTwo(D,A,this.scaleMode):D),this._options.height||(L=g.needPOTTextures?O.a.GetExponentOfTwo(L,A,this.scaleMode):L)),(this.width!==D||this.height!==L)&&this._resize(D,L,n,U,l),this._textures.forEach(function(_){_.samples!==h.samples&&h._engine.updateRenderTargetTextureSampleCount(_,h.samples)}),this._flushTextureCache(),this._renderId++}var V;if(this._shareOutputWithPostProcess)V=this._shareOutputWithPostProcess.inputTexture;else if(this._forcedOutputTexture)V=this._forcedOutputTexture,this.width=this._forcedOutputTexture.width,this.height=this._forcedOutputTexture.height;else{V=this.inputTexture;for(var I=void 0,x=0;x<this._textureCache.length;x++)if(this._textureCache[x].texture===V){I=this._textureCache[x];break}I&&(I.lastUsedRenderId=this._renderId)}return this.enablePixelPerfectMode?(this._scaleRatio.copyFromFloats(R/D,S/L),this._engine.bindFramebuffer(V,0,R,S,this.forceFullscreenViewport)):(this._scaleRatio.copyFromFloats(1,1),this._engine.bindFramebuffer(V,0,void 0,void 0,this.forceFullscreenViewport)),this._engine._debugInsertMarker("post process "+this.name+" input"),this.onActivateObservable.notifyObservers(n),this.autoClear&&this.alphaMode===0&&this._engine.clear(this.clearColor?this.clearColor:u.clearColor,u._allowPostProcessClearColor,!0,!0),this._reusable&&(this._currentRenderTextureInd=(this._currentRenderTextureInd+1)%2),V},Object.defineProperty(i.prototype,"isSupported",{get:function(){return this._effect.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"aspectRatio",{get:function(){return this._shareOutputWithPostProcess?this._shareOutputWithPostProcess.aspectRatio:this._forcedOutputTexture?this._forcedOutputTexture.width/this._forcedOutputTexture.height:this.width/this.height},enumerable:!1,configurable:!0}),i.prototype.isReady=function(){return this._effect&&this._effect.isReady()},i.prototype.apply=function(){if(!this._effect||!this._effect.isReady())return null;this._engine.enableEffect(this._effect),this._engine.setState(!1),this._engine.setDepthBuffer(!1),this._engine.setDepthWrite(!1),this._engine.setAlphaMode(this.alphaMode),this.alphaConstants&&this.getEngine().setAlphaConstants(this.alphaConstants.r,this.alphaConstants.g,this.alphaConstants.b,this.alphaConstants.a);var n;return this._shareOutputWithPostProcess?n=this._shareOutputWithPostProcess.inputTexture:this._forcedOutputTexture?n=this._forcedOutputTexture:n=this.inputTexture,this._effect._bindTexture("textureSampler",n),this._effect.setVector2("scale",this._scaleRatio),this.onApplyObservable.notifyObservers(this._effect),this._effect},i.prototype._disposeTextures=function(){if(this._shareOutputWithPostProcess||this._forcedOutputTexture){this._disposeTextureCache();return}this._disposeTextureCache(),this._textures.dispose()},i.prototype._disposeTextureCache=function(){for(var n=this._textureCache.length-1;n>=0;n--)this._engine._releaseTexture(this._textureCache[n].texture);this._textureCache.length=0},i.prototype.setPrePassRenderer=function(n){return this._prePassEffectConfiguration?(this._prePassEffectConfiguration=n.addEffectConfiguration(this._prePassEffectConfiguration),this._prePassEffectConfiguration.enabled=!0,!0):!1},i.prototype.dispose=function(n){n=n||this._camera,this._disposeTextures();var a;if(this._scene&&(a=this._scene.postProcesses.indexOf(this),a!==-1&&this._scene.postProcesses.splice(a,1)),a=this._engine.postProcesses.indexOf(this),a!==-1&&this._engine.postProcesses.splice(a,1),!!n){if(n.detachPostProcess(this),a=n._postProcesses.indexOf(this),a===0&&n._postProcesses.length>0){var l=this._camera._getFirstPostProcess();l&&l.markTextureDirty()}this.onActivateObservable.clear(),this.onAfterRenderObservable.clear(),this.onApplyObservable.clear(),this.onBeforeRenderObservable.clear(),this.onSizeChangedObservable.clear()}},i.prototype.serialize=function(){var n=r.a.Serialize(this),a=this.getCamera()||this._scene&&this._scene.activeCamera;return n.customType="BABYLON."+this.getClassName(),n.cameraId=a?a.id:null,n.reusable=this._reusable,n.textureType=this._textureType,n.fragmentUrl=this._fragmentUrl,n.parameters=this._parameters,n.samplers=this._samplers,n.options=this._options,n.defines=this._postProcessDefines,n.textureFormat=this._textureFormat,n.vertexUrl=this._vertexUrl,n.indexParameters=this._indexParameters,n},i.prototype.clone=function(){var n=this.serialize();n._engine=this._engine,n.cameraId=null;var a=i.Parse(n,this._scene,"");return a?(a.onActivateObservable=this.onActivateObservable.clone(),a.onSizeChangedObservable=this.onSizeChangedObservable.clone(),a.onApplyObservable=this.onApplyObservable.clone(),a.onBeforeRenderObservable=this.onBeforeRenderObservable.clone(),a.onAfterRenderObservable=this.onAfterRenderObservable.clone(),a._prePassEffectConfiguration=this._prePassEffectConfiguration,a):null},i.Parse=function(n,a,l){var h=e.a.GetClass(n.customType);if(!h||!h._Parse)return null;var u=a?a.getCameraByID(n.cameraId):null;return h._Parse(n,u,a,l)},i._Parse=function(n,a,l,h){return r.a.Parse(function(){return new i(n.name,n.fragmentUrl,n.parameters,n.samplers,n.options,a,n.renderTargetSamplingMode,n._engine,n.reusable,n.defines,n.textureType,n.vertexUrl,n.indexParameters,!1,n.textureFormat)},n,l,h)},Object(f.c)([Object(r.c)()],i.prototype,"uniqueId",void 0),Object(f.c)([Object(r.c)()],i.prototype,"name",void 0),Object(f.c)([Object(r.c)()],i.prototype,"width",void 0),Object(f.c)([Object(r.c)()],i.prototype,"height",void 0),Object(f.c)([Object(r.c)()],i.prototype,"renderTargetSamplingMode",void 0),Object(f.c)([Object(r.f)()],i.prototype,"clearColor",void 0),Object(f.c)([Object(r.c)()],i.prototype,"autoClear",void 0),Object(f.c)([Object(r.c)()],i.prototype,"alphaMode",void 0),Object(f.c)([Object(r.c)()],i.prototype,"alphaConstants",void 0),Object(f.c)([Object(r.c)()],i.prototype,"enablePixelPerfectMode",void 0),Object(f.c)([Object(r.c)()],i.prototype,"forceFullscreenViewport",void 0),Object(f.c)([Object(r.c)()],i.prototype,"scaleMode",void 0),Object(f.c)([Object(r.c)()],i.prototype,"alwaysForcePOT",void 0),Object(f.c)([Object(r.c)("samples")],i.prototype,"_samples",void 0),Object(f.c)([Object(r.c)()],i.prototype,"adaptScaleToCurrentViewport",void 0),i}();e.a.RegisteredTypes["BABYLON.PostProcess"]=t},458:function($,W,s){"use strict";s.d(W,"a",function(){return i});var f=s(434),o=s(438),E=s(443),v=s(436),c=s(442),O=s(590),p=s(591),r=s(500),e=s(522),t=s(445),i=function(n){Object(f.d)(a,n);function a(l,h,u,g,A,R,S,P,D,L,U,F,V,I){A===void 0&&(A=!0),R===void 0&&(R=0),S===void 0&&(S=!1),P===void 0&&(P=c.a.TRILINEAR_SAMPLINGMODE),D===void 0&&(D=!0),L===void 0&&(L=!1),U===void 0&&(U=!1),F===void 0&&(F=5),V===void 0&&(V=!1);var x,_=n.call(this,null,u,!g,void 0,P,void 0,void 0,void 0,void 0,F)||this;return _.renderParticles=!0,_.renderSprites=!1,_.ignoreCameraViewport=!1,_.onBeforeBindObservable=new o.c,_.onAfterUnbindObservable=new o.c,_.onBeforeRenderObservable=new o.c,_.onAfterRenderObservable=new o.c,_.onClearObservable=new o.c,_.onResizeObservable=new o.c,_._currentRefreshId=-1,_._refreshRate=1,_._samples=1,_.boundingBoxPosition=v.e.Zero(),u=_.getScene(),!u||(_._coordinatesMode=c.a.PROJECTION_MODE,_.renderList=new Array,_.name=l,_.isRenderTarget=!0,_._initialSizeParameter=h,_._processSizeParameter(h),_._resizeObserver=_.getScene().getEngine().onResizeObservable.add(function(){}),_._generateMipMaps=!!g,_._doNotChangeAspectRatio=A,_._renderingManager=new p.b(u),_._renderingManager._useSceneAutoClearSetup=!0,U)||(_._renderTargetOptions={generateMipMaps:g,type:R,format:(x=_._format)!==null&&x!==void 0?x:void 0,samplingMode:_.samplingMode,generateDepthBuffer:D,generateStencilBuffer:L,samples:I},_.samplingMode===c.a.NEAREST_SAMPLINGMODE&&(_.wrapU=c.a.CLAMP_ADDRESSMODE,_.wrapV=c.a.CLAMP_ADDRESSMODE),V||(S?(_._texture=u.getEngine().createRenderTargetCubeTexture(_.getRenderSize(),_._renderTargetOptions),_.coordinatesMode=c.a.INVCUBIC_MODE,_._textureMatrix=v.a.Identity()):_._texture=u.getEngine().createRenderTargetTexture(_._size,_._renderTargetOptions),I!==void 0&&(_.samples=I))),_}return Object.defineProperty(a.prototype,"renderList",{get:function(){return this._renderList},set:function(l){this._renderList=l,this._renderList&&this._hookArray(this._renderList)},enumerable:!1,configurable:!0}),a.prototype._hookArray=function(l){var h=this,u=l.push;l.push=function(){for(var A=[],R=0;R<arguments.length;R++)A[R]=arguments[R];var S=l.length===0,P=u.apply(l,A);return S&&h.getScene()&&h.getScene().meshes.forEach(function(D){D._markSubMeshesAsLightDirty()}),P};var g=l.splice;l.splice=function(A,R){var S=g.apply(l,[A,R]);return l.length===0&&h.getScene().meshes.forEach(function(P){P._markSubMeshesAsLightDirty()}),S}},Object.defineProperty(a.prototype,"postProcesses",{get:function(){return this._postProcesses},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"_prePassEnabled",{get:function(){return!!this._prePassRenderTarget&&this._prePassRenderTarget.enabled},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterUnbind",{set:function(l){this._onAfterUnbindObserver&&this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver),this._onAfterUnbindObserver=this.onAfterUnbindObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onBeforeRender",{set:function(l){this._onBeforeRenderObserver&&this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver),this._onBeforeRenderObserver=this.onBeforeRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onAfterRender",{set:function(l){this._onAfterRenderObserver&&this.onAfterRenderObservable.remove(this._onAfterRenderObserver),this._onAfterRenderObserver=this.onAfterRenderObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"onClear",{set:function(l){this._onClearObserver&&this.onClearObservable.remove(this._onClearObserver),this._onClearObserver=this.onClearObservable.add(l)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"renderTargetOptions",{get:function(){return this._renderTargetOptions},enumerable:!1,configurable:!0}),a.prototype._onRatioRescale=function(){this._sizeRatio&&this.resize(this._initialSizeParameter)},Object.defineProperty(a.prototype,"boundingBoxSize",{get:function(){return this._boundingBoxSize},set:function(l){if(!(this._boundingBoxSize&&this._boundingBoxSize.equals(l))){this._boundingBoxSize=l;var h=this.getScene();h&&h.markAllMaterialsAsDirty(1)}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depthStencilTexture",{get:function(){var l;return((l=this.getInternalTexture())===null||l===void 0?void 0:l._depthStencilTexture)||null},enumerable:!1,configurable:!0}),a.prototype.createDepthStencilTexture=function(l,h,u,g){var A;l===void 0&&(l=0),h===void 0&&(h=!0),u===void 0&&(u=!1),g===void 0&&(g=1);var R=this.getInternalTexture();if(!(!this.getScene()||!R)){(A=R._depthStencilTexture)===null||A===void 0||A.dispose();var S=this.getScene().getEngine();R._depthStencilTexture=S.createDepthStencilTexture(this._size,{bilinearFiltering:h,comparisonFunction:l,generateStencil:u,isCube:this.isCube,samples:g})}},a.prototype._processSizeParameter=function(l){if(l.ratio){this._sizeRatio=l.ratio;var h=this._getEngine();this._size={width:this._bestReflectionRenderTargetDimension(h.getRenderWidth(),this._sizeRatio),height:this._bestReflectionRenderTargetDimension(h.getRenderHeight(),this._sizeRatio)}}else this._size=l},Object.defineProperty(a.prototype,"samples",{get:function(){return this._samples},set:function(l){if(this._samples!==l){var h=this.getScene();!h||(this._samples=h.getEngine().updateRenderTargetTextureSampleCount(this._texture,l))}},enumerable:!1,configurable:!0}),a.prototype.resetRefreshCounter=function(){this._currentRefreshId=-1},Object.defineProperty(a.prototype,"refreshRate",{get:function(){return this._refreshRate},set:function(l){this._refreshRate=l,this.resetRefreshCounter()},enumerable:!1,configurable:!0}),a.prototype.addPostProcess=function(l){if(!this._postProcessManager){var h=this.getScene();if(!h)return;this._postProcessManager=new O.a(h),this._postProcesses=new Array}this._postProcesses.push(l),this._postProcesses[0].autoClear=!1},a.prototype.clearPostProcesses=function(l){if(l===void 0&&(l=!1),!!this._postProcesses){if(l)for(var h=0,u=this._postProcesses;h<u.length;h++){var g=u[h];g.dispose()}this._postProcesses=[]}},a.prototype.removePostProcess=function(l){if(!!this._postProcesses){var h=this._postProcesses.indexOf(l);h!==-1&&(this._postProcesses.splice(h,1),this._postProcesses.length>0&&(this._postProcesses[0].autoClear=!1))}},a.prototype._shouldRender=function(){return this._currentRefreshId===-1?(this._currentRefreshId=1,!0):this.refreshRate===this._currentRefreshId?(this._currentRefreshId=1,!0):(this._currentRefreshId++,!1)},a.prototype.getRenderSize=function(){return this.getRenderWidth()},a.prototype.getRenderWidth=function(){return this._size.width?this._size.width:this._size},a.prototype.getRenderHeight=function(){return this._size.width?this._size.height:this._size},a.prototype.getRenderLayers=function(){var l=this._size.layers;return l||0},Object.defineProperty(a.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.scale=function(l){var h=Math.max(1,this.getRenderSize()*l);this.resize(h)},a.prototype.getReflectionTextureMatrix=function(){return this.isCube?this._textureMatrix:n.prototype.getReflectionTextureMatrix.call(this)},a.prototype.resize=function(l){var h=this.isCube;this.releaseInternalTexture();var u=this.getScene();!u||(this._processSizeParameter(l),h?this._texture=u.getEngine().createRenderTargetCubeTexture(this.getRenderSize(),this._renderTargetOptions):this._texture=u.getEngine().createRenderTargetTexture(this._size,this._renderTargetOptions),this._renderTargetOptions.samples!==void 0&&(this.samples=this._renderTargetOptions.samples),this.onResizeObservable.hasObservers()&&this.onResizeObservable.notifyObservers(this))},a.prototype.render=function(l,h){l===void 0&&(l=!1),h===void 0&&(h=!1);var u=this.getScene();if(!!u){var g=u.getEngine();if(this.useCameraPostProcesses!==void 0&&(l=this.useCameraPostProcesses),this._waitingRenderList){this.renderList=[];for(var A=0;A<this._waitingRenderList.length;A++){var R=this._waitingRenderList[A],S=u.getMeshByID(R);S&&this.renderList.push(S)}this._waitingRenderList=void 0}if(this.renderListPredicate){this.renderList?this.renderList.length=0:this.renderList=[];var u=this.getScene();if(!u)return;for(var P=u.meshes,A=0;A<P.length;A++){var D=P[A];this.renderListPredicate(D)&&this.renderList.push(D)}}this.onBeforeBindObservable.notifyObservers(this);var L;if(this.activeCamera?(L=this.activeCamera,g.setViewport(this.activeCamera.viewport,this.getRenderWidth(),this.getRenderHeight()),this.activeCamera!==u.activeCamera&&u.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix(!0))):(L=u.activeCamera,L&&g.setViewport(L.viewport,this.getRenderWidth(),this.getRenderHeight())),this._defaultRenderListPrepared=!1,this.is2DArray)for(var U=0;U<this.getRenderLayers();U++)this.renderToTarget(0,l,h,U,L),u.incrementRenderId(),u.resetCachedMaterial();else if(this.isCube)for(var F=0;F<6;F++)this.renderToTarget(F,l,h,void 0,L),u.incrementRenderId(),u.resetCachedMaterial();else this.renderToTarget(0,l,h,void 0,L);this.onAfterUnbindObservable.notifyObservers(this),u.activeCamera&&((u.getEngine().scenes.length>1||this.activeCamera&&this.activeCamera!==u.activeCamera)&&u.setTransformMatrix(u.activeCamera.getViewMatrix(),u.activeCamera.getProjectionMatrix(!0)),g.setViewport(u.activeCamera.viewport)),u.resetCachedMaterial()}},a.prototype._bestReflectionRenderTargetDimension=function(l,h){var u=128,g=l*h,A=t.a.NearestPOT(g+u*u/(u+g));return Math.min(t.a.FloorPOT(l),A)},a.prototype._prepareRenderingManager=function(l,h,u,g){var A=this.getScene();if(!!A){this._renderingManager.reset();for(var R=A.getRenderId(),S=0;S<h;S++){var P=l[S];if(P&&!P.isBlocked){if(this.customIsReadyFunction){if(!this.customIsReadyFunction(P,this.refreshRate)){this.resetRefreshCounter();continue}}else if(!P.isReady(this.refreshRate===0)){this.resetRefreshCounter();continue}if(!P._internalAbstractMeshDataInfo._currentLODIsUpToDate&&A.activeCamera&&(P._internalAbstractMeshDataInfo._currentLOD=A.customLODSelector?A.customLODSelector(P,A.activeCamera):P.getLOD(A.activeCamera),P._internalAbstractMeshDataInfo._currentLODIsUpToDate=!0),!P._internalAbstractMeshDataInfo._currentLOD)continue;var D=P._internalAbstractMeshDataInfo._currentLOD;D._preActivateForIntermediateRendering(R);var L=void 0;if(g&&u?L=(P.layerMask&u.layerMask)==0:L=!1,P.isEnabled()&&P.isVisible&&P.subMeshes&&!L&&(D!==P&&D._activate(R,!0),P._activate(R,!0)&&P.subMeshes.length)){P.isAnInstance?P._internalAbstractMeshDataInfo._actAsRegularMesh&&(D=P):D._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!1,D._internalAbstractMeshDataInfo._isActiveIntermediate=!0;for(var U=0;U<D.subMeshes.length;U++){var F=D.subMeshes[U];this._renderingManager.dispatch(F,D)}}}}for(var V=0;V<A.particleSystems.length;V++){var I=A.particleSystems[V],x=I.emitter;!I.isStarted()||!x||!x.position||!x.isEnabled()||l.indexOf(x)>=0&&this._renderingManager.dispatchParticles(I)}}},a.prototype._bindFrameBuffer=function(l,h){l===void 0&&(l=0),h===void 0&&(h=0);var u=this.getScene();if(!!u){var g=u.getEngine();this._texture&&g.bindFramebuffer(this._texture,this.isCube?l:void 0,void 0,void 0,this.ignoreCameraViewport,0,h)}},a.prototype.unbindFrameBuffer=function(l,h){var u=this;!this._texture||l.unBindFramebuffer(this._texture,this.isCube,function(){u.onAfterRenderObservable.notifyObservers(h)})},a.prototype._prepareFrame=function(l,h,u,g){this._postProcessManager?this._prePassEnabled||this._postProcessManager._prepareFrame(this._texture,this._postProcesses):(!g||!l.postProcessManager._prepareFrame(this._texture))&&this._bindFrameBuffer(h,u)},a.prototype.renderToTarget=function(l,h,u,g,A){g===void 0&&(g=0),A===void 0&&(A=null);var R=this.getScene();if(!!R){var S=R.getEngine();if(!!this._texture){S._debugPushGroup("render to face #"+l+" layer #"+g,1),this._prepareFrame(R,l,g,h),this.is2DArray?this.onBeforeRenderObservable.notifyObservers(g):this.onBeforeRenderObservable.notifyObservers(l);var P=null,D=this.renderList?this.renderList:R.getActiveMeshes().data,L=this.renderList?this.renderList.length:R.getActiveMeshes().length;this.getCustomRenderList&&(P=this.getCustomRenderList(this.is2DArray?g:l,D,L)),P?this._prepareRenderingManager(P,P.length,A,!1):(this._defaultRenderListPrepared||(this._prepareRenderingManager(D,L,A,!this.renderList),this._defaultRenderListPrepared=!0),P=D);for(var U=0,F=R._beforeRenderTargetClearStage;U<F.length;U++){var V=F[U];V.action(this,l,g)}this.onClearObservable.hasObservers()?this.onClearObservable.notifyObservers(S):S.clear(this.clearColor||R.clearColor,!0,!0,!0),this._doNotChangeAspectRatio||R.updateTransformMatrix(!0);for(var I=0,x=R._beforeRenderTargetDrawStage;I<x.length;I++){var V=x[I];V.action(this,l,g)}this._renderingManager.render(this.customRenderFunction,P,this.renderParticles,this.renderSprites);for(var _=0,j=R._afterRenderTargetDrawStage;_<j.length;_++){var V=j[_];V.action(this,l,g)}var G=this._texture.generateMipMaps;this._texture.generateMipMaps=!1,this._postProcessManager?this._postProcessManager._finalizeFrame(!1,this._texture,l,this._postProcesses,this.ignoreCameraViewport):h&&R.postProcessManager._finalizeFrame(!1,this._texture,l),this._texture.generateMipMaps=G,this._doNotChangeAspectRatio||R.updateTransformMatrix(!0),u&&E.b.DumpFramebuffer(this.getRenderWidth(),this.getRenderHeight(),S),this.unbindFrameBuffer(S,l),this.isCube&&l===5&&S.generateMipMapsForCubemap(this._texture),S._debugPopGroup(1)}}},a.prototype.setRenderingOrder=function(l,h,u,g){h===void 0&&(h=null),u===void 0&&(u=null),g===void 0&&(g=null),this._renderingManager.setRenderingOrder(l,h,u,g)},a.prototype.setRenderingAutoClearDepthStencil=function(l,h){this._renderingManager.setRenderingAutoClearDepthStencil(l,h),this._renderingManager._useSceneAutoClearSetup=!1},a.prototype.clone=function(){var l=this.getSize(),h=new a(this.name,l,this.getScene(),this._renderTargetOptions.generateMipMaps,this._doNotChangeAspectRatio,this._renderTargetOptions.type,this.isCube,this._renderTargetOptions.samplingMode,this._renderTargetOptions.generateDepthBuffer,this._renderTargetOptions.generateStencilBuffer,void 0,this._renderTargetOptions.format,void 0,this._renderTargetOptions.samples);return h.hasAlpha=this.hasAlpha,h.level=this.level,h.coordinatesMode=this.coordinatesMode,this.renderList&&(h.renderList=this.renderList.slice(0)),h},a.prototype.serialize=function(){if(!this.name)return null;var l=n.prototype.serialize.call(this);if(l.renderTargetSize=this.getRenderSize(),l.renderList=[],this.renderList)for(var h=0;h<this.renderList.length;h++)l.renderList.push(this.renderList[h].id);return l},a.prototype.disposeFramebufferObjects=function(){var l=this.getInternalTexture(),h=this.getScene();l&&h&&h.getEngine()._releaseFramebufferObjects(l)},a.prototype.dispose=function(){this.onResizeObservable.clear(),this.onClearObservable.clear(),this.onAfterRenderObservable.clear(),this.onAfterUnbindObservable.clear(),this.onBeforeBindObservable.clear(),this.onBeforeRenderObservable.clear(),this._postProcessManager&&(this._postProcessManager.dispose(),this._postProcessManager=null),this._prePassRenderTarget&&this._prePassRenderTarget.dispose(),this.clearPostProcesses(!0),this._resizeObserver&&(this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this.renderList=null;var l=this.getScene();if(!!l){var h=l.customRenderTargets.indexOf(this);h>=0&&l.customRenderTargets.splice(h,1);for(var u=0,g=l.cameras;u<g.length;u++){var A=g[u];h=A.customRenderTargets.indexOf(this),h>=0&&A.customRenderTargets.splice(h,1)}this.depthStencilTexture&&this.getScene().getEngine()._releaseTexture(this.depthStencilTexture),n.prototype.dispose.call(this)}},a.prototype._rebuild=function(){this.refreshRate===a.REFRESHRATE_RENDER_ONCE&&(this.refreshRate=a.REFRESHRATE_RENDER_ONCE),this._postProcessManager&&this._postProcessManager._rebuild()},a.prototype.freeRenderingGroups=function(){this._renderingManager&&this._renderingManager.freeRenderingGroups()},a.prototype.getViewCount=function(){return 1},a.REFRESHRATE_RENDER_ONCE=0,a.REFRESHRATE_RENDER_ONEVERYFRAME=1,a.REFRESHRATE_RENDER_ONEVERYTWOFRAMES=2,a}(c.a);c.a._CreateRenderTargetTexture=function(n,a,l,h){return new i(n,a,l,h)}},466:function($,W,s){"use strict";s.d(W,"a",function(){return o});var f=s(443),o=function(){function E(v,c,O,p){this._name=c,this._singleInstance=p||!0,this._getPostProcesses=O,this._cameras={},this._indicesForCamera={},this._postProcesses={}}return Object.defineProperty(E.prototype,"isSupported",{get:function(){for(var v in this._postProcesses)if(this._postProcesses.hasOwnProperty(v)){for(var c=this._postProcesses[v],O=0;O<c.length;O++)if(!c[O].isSupported)return!1}return!0},enumerable:!1,configurable:!0}),E.prototype._update=function(){},E.prototype._attachCameras=function(v){var c=this,O,p=f.b.MakeArray(v||this._cameras);if(!!p)for(var r=0;r<p.length;r++){var e=p[r];if(!!e){var t=e.name;if(this._singleInstance?O=0:O=t,!this._postProcesses[O]){var i=this._getPostProcesses();i&&(this._postProcesses[O]=Array.isArray(i)?i:[i])}this._indicesForCamera[t]||(this._indicesForCamera[t]=[]),this._postProcesses[O].forEach(function(n){var a=e.attachPostProcess(n);c._indicesForCamera[t].push(a)}),this._cameras[t]||(this._cameras[t]=e)}}},E.prototype._detachCameras=function(v){var c=f.b.MakeArray(v||this._cameras);if(!!c)for(var O=0;O<c.length;O++){var p=c[O],r=p.name,e=this._postProcesses[this._singleInstance?0:r];e&&e.forEach(function(t){p.detachPostProcess(t)}),this._cameras[r]&&(this._cameras[r]=null)}},E.prototype._enable=function(v){var c=this,O=f.b.MakeArray(v||this._cameras);if(!!O)for(var p=0;p<O.length;p++)for(var r=O[p],e=r.name,t=0;t<this._indicesForCamera[e].length;t++)(r._postProcesses[this._indicesForCamera[e][t]]===void 0||r._postProcesses[this._indicesForCamera[e][t]]===null)&&this._postProcesses[this._singleInstance?0:e].forEach(function(i){O[p].attachPostProcess(i,c._indicesForCamera[e][t])})},E.prototype._disable=function(v){var c=f.b.MakeArray(v||this._cameras);if(!!c)for(var O=0;O<c.length;O++){var p=c[O],r=p.name;this._postProcesses[this._singleInstance?0:r].forEach(function(e){p.detachPostProcess(e)})}},E.prototype.getPostProcesses=function(v){return this._singleInstance?this._postProcesses[0]:v?this._postProcesses[v.name]:null},E}()},472:function($,W,s){"use strict";s.d(W,"a",function(){return V});var f=s(434),o=s(444),E=s(442),v=s(435),c="kernelBlurVaryingDeclaration",O="varying vec2 sampleCoord{X};";v.a.IncludesShadersStore[c]=O;var p={name:c,shader:O},r=s(535),e="kernelBlurFragment",t=`#ifdef DOF
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
#endif`;v.a.IncludesShadersStore[e]=t;var i={name:e,shader:t},n="kernelBlurFragment2",a=`#ifdef DOF
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
#endif`;v.a.IncludesShadersStore[n]=a;var l={name:n,shader:a},h="kernelBlurPixelShader",u=`
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
}`;v.a.ShadersStore[h]=u;var g={name:h,shader:u},A="kernelBlurVertex",R="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";v.a.IncludesShadersStore[A]=R;var S={name:A,shader:R},P="kernelBlurVertexShader",D=`
attribute vec2 position;

uniform vec2 delta;

varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
void main(void) {
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
}`;v.a.ShadersStore[P]=D;var L={name:P,shader:D},U=s(437),F=s(439),V=function(I){Object(f.d)(x,I);function x(_,j,G,y,Y,Z,fe,w,se,ee,te){Z===void 0&&(Z=E.a.BILINEAR_SAMPLINGMODE),se===void 0&&(se=0),ee===void 0&&(ee=""),te===void 0&&(te=!1);var le=I.call(this,_,"kernelBlur",["delta","direction","cameraMinMaxZ"],["circleOfConfusionSampler"],y,Y,Z,fe,w,null,se,"kernelBlur",{varyingCount:0,depCount:0},!0)||this;return le.blockCompilation=te,le._packedFloat=!1,le._staticDefines="",le._staticDefines=ee,le.direction=j,le.onApplyObservable.add(function(q){le._outputTexture?q.setFloat2("delta",1/le._outputTexture.width*le.direction.x,1/le._outputTexture.height*le.direction.y):q.setFloat2("delta",1/le.width*le.direction.x,1/le.height*le.direction.y)}),le.kernel=G,le}return Object.defineProperty(x.prototype,"kernel",{get:function(){return this._idealKernel},set:function(_){this._idealKernel!==_&&(_=Math.max(_,1),this._idealKernel=_,this._kernel=this._nearestBestKernel(_),this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"packedFloat",{get:function(){return this._packedFloat},set:function(_){this._packedFloat!==_&&(this._packedFloat=_,this.blockCompilation||this._updateParameters())},enumerable:!1,configurable:!0}),x.prototype.getClassName=function(){return"BlurPostProcess"},x.prototype.updateEffect=function(_,j,G,y,Y,Z){_===void 0&&(_=null),j===void 0&&(j=null),G===void 0&&(G=null),this._updateParameters(Y,Z)},x.prototype._updateParameters=function(_,j){for(var G=this._kernel,y=(G-1)/2,Y=[],Z=[],fe=0,w=0;w<G;w++){var se=w/(G-1),ee=this._gaussianWeight(se*2-1);Y[w]=w-y,Z[w]=ee,fe+=ee}for(var w=0;w<Z.length;w++)Z[w]/=fe;for(var te=[],le=[],q=[],w=0;w<=y;w+=2){var X=Math.min(w+1,Math.floor(y)),ge=w===X;if(ge)q.push({o:Y[w],w:Z[w]});else{var Ee=X===y,oe=Z[w]+Z[X]*(Ee?.5:1),me=Y[w]+1/(1+Z[w]/Z[X]);me===0?(q.push({o:Y[w],w:Z[w]}),q.push({o:Y[w+1],w:Z[w+1]})):(q.push({o:me,w:oe}),q.push({o:-me,w:oe}))}}for(var w=0;w<q.length;w++)le[w]=q[w].o,te[w]=q[w].w;Y=le,Z=te;var ae=this.getEngine().getCaps().maxVaryingVectors,_e=Math.max(ae,0)-1,ue=Math.min(Y.length,_e),B="";B+=this._staticDefines,this._staticDefines.indexOf("DOF")!=-1&&(B+="#define CENTER_WEIGHT "+this._glslFloat(Z[ue-1])+`\r
`,ue--);for(var w=0;w<ue;w++)B+="#define KERNEL_OFFSET"+w+" "+this._glslFloat(Y[w])+`\r
`,B+="#define KERNEL_WEIGHT"+w+" "+this._glslFloat(Z[w])+`\r
`;for(var m=0,w=_e;w<Y.length;w++)B+="#define KERNEL_DEP_OFFSET"+m+" "+this._glslFloat(Y[w])+`\r
`,B+="#define KERNEL_DEP_WEIGHT"+m+" "+this._glslFloat(Z[w])+`\r
`,m++;this.packedFloat&&(B+="#define PACKEDFLOAT 1"),this.blockCompilation=!1,I.prototype.updateEffect.call(this,B,null,null,{varyingCount:ue,depCount:m},_,j)},x.prototype._nearestBestKernel=function(_){for(var j=Math.round(_),G=0,y=[j,j-1,j+1,j-2,j+2];G<y.length;G++){var Y=y[G];if(Y%2!=0&&Math.floor(Y/2)%2==0&&Y>0)return Math.max(Y,3)}return Math.max(j,3)},x.prototype._gaussianWeight=function(_){var j=1/3,G=Math.sqrt(2*Math.PI)*j,y=-(_*_/(2*j*j)),Y=1/G*Math.exp(y);return Y},x.prototype._glslFloat=function(_,j){return j===void 0&&(j=8),_.toFixed(j).replace(/0+$/,"")},x._Parse=function(_,j,G,y){return F.a.Parse(function(){return new x(_.name,_.direction,_.kernel,_.options,j,_.renderTargetSamplingMode,G.getEngine(),_.reusable,_.textureType,void 0,!1)},_,G,y)},Object(f.c)([Object(F.c)("kernel")],x.prototype,"_kernel",void 0),Object(f.c)([Object(F.c)("packedFloat")],x.prototype,"_packedFloat",void 0),Object(f.c)([Object(F.n)()],x.prototype,"direction",void 0),x}(o.a);U.a.RegisteredTypes["BABYLON.BlurPostProcess"]=V},479:function($,W,s){"use strict";s.d(W,"a",function(){return O});var f=s(434),o=s(440),E=s(442),v=s(532),c=s(596),O=function(p){Object(f.d)(r,p);function r(e,t,i,n,a,l,h){i===void 0&&(i=null),n===void 0&&(n=!1),a===void 0&&(a=3),l===void 0&&(l=5);var u=p.call(this,null,i,!n,h,a,void 0,void 0,void 0,void 0,l)||this;u.name=e,u.wrapU=E.a.CLAMP_ADDRESSMODE,u.wrapV=E.a.CLAMP_ADDRESSMODE,u._generateMipMaps=n;var g=u._getEngine();if(!g)return u;t.getContext?(u._canvas=t,u._texture=g.createDynamicTexture(t.width,t.height,n,a)):(u._canvas=c.a.CreateCanvas(1,1),t.width||t.width===0?u._texture=g.createDynamicTexture(t.width,t.height,n,a):u._texture=g.createDynamicTexture(t,t,n,a));var A=u.getSize();return u._canvas.width=A.width,u._canvas.height=A.height,u._context=u._canvas.getContext("2d"),u}return r.prototype.getClassName=function(){return"DynamicTexture"},Object.defineProperty(r.prototype,"canRescale",{get:function(){return!0},enumerable:!1,configurable:!0}),r.prototype._recreate=function(e){this._canvas.width=e.width,this._canvas.height=e.height,this.releaseInternalTexture(),this._texture=this._getEngine().createDynamicTexture(e.width,e.height,this._generateMipMaps,this.samplingMode)},r.prototype.scale=function(e){var t=this.getSize();t.width*=e,t.height*=e,this._recreate(t)},r.prototype.scaleTo=function(e,t){var i=this.getSize();i.width=e,i.height=t,this._recreate(i)},r.prototype.getContext=function(){return this._context},r.prototype.clear=function(){var e=this.getSize();this._context.fillRect(0,0,e.width,e.height)},r.prototype.update=function(e,t){t===void 0&&(t=!1),this._getEngine().updateDynamicTexture(this._texture,this._canvas,e===void 0?!0:e,t,this._format||void 0)},r.prototype.drawText=function(e,t,i,n,a,l,h,u){u===void 0&&(u=!0);var g=this.getSize();if(l&&(this._context.fillStyle=l,this._context.fillRect(0,0,g.width,g.height)),this._context.font=n,t==null){var A=this._context.measureText(e);t=(g.width-A.width)/2}if(i==null){var R=parseInt(n.replace(/\D/g,""));i=g.height/2+R/3.65}this._context.fillStyle=a||"",this._context.fillText(e,t,i),u&&this.update(h)},r.prototype.clone=function(){var e=this.getScene();if(!e)return this;var t=this.getSize(),i=new r(this.name,t,e,this._generateMipMaps);return i.hasAlpha=this.hasAlpha,i.level=this.level,i.wrapU=this.wrapU,i.wrapV=this.wrapV,i},r.prototype.serialize=function(){var e=this.getScene();e&&!e.isReady()&&o.a.Warn("The scene must be ready before serializing the dynamic texture");var t=p.prototype.serialize.call(this);return this._IsCanvasElement(this._canvas)&&(t.base64String=this._canvas.toDataURL()),t.invertY=this._invertY,t.samplingMode=this.samplingMode,t},r.prototype._IsCanvasElement=function(e){return e.toDataURL!==void 0},r.prototype._rebuild=function(){this.update()},r}(E.a)},481:function($,W,s){"use strict";s.d(W,"a",function(){return v});var f=s(434),o=s(443),E=s(439),v=function(){function c(O,p){this.engine=O,this._name=p,this._renderEffects={},this._renderEffectsForIsolatedPass=new Array,this._cameras=[]}return Object.defineProperty(c.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"cameras",{get:function(){return this._cameras},enumerable:!1,configurable:!0}),c.prototype.getClassName=function(){return"PostProcessRenderPipeline"},Object.defineProperty(c.prototype,"isSupported",{get:function(){for(var O in this._renderEffects)if(this._renderEffects.hasOwnProperty(O)&&!this._renderEffects[O].isSupported)return!1;return!0},enumerable:!1,configurable:!0}),c.prototype.addEffect=function(O){this._renderEffects[O._name]=O},c.prototype._rebuild=function(){},c.prototype._enableEffect=function(O,p){var r=this._renderEffects[O];!r||r._enable(o.b.MakeArray(p||this._cameras))},c.prototype._disableEffect=function(O,p){var r=this._renderEffects[O];!r||r._disable(o.b.MakeArray(p||this._cameras))},c.prototype._attachCameras=function(O,p){var r=o.b.MakeArray(O||this._cameras);if(!!r){var e=[],t;for(t=0;t<r.length;t++){var i=r[t];if(!!i){var n=i.name;this._cameras.indexOf(i)===-1?this._cameras[n]=i:p&&e.push(t)}}for(t=0;t<e.length;t++)r.splice(e[t],1);for(var a in this._renderEffects)this._renderEffects.hasOwnProperty(a)&&this._renderEffects[a]._attachCameras(r)}},c.prototype._detachCameras=function(O){var p=o.b.MakeArray(O||this._cameras);if(!!p){for(var r in this._renderEffects)this._renderEffects.hasOwnProperty(r)&&this._renderEffects[r]._detachCameras(p);for(var e=0;e<p.length;e++)this._cameras.splice(this._cameras.indexOf(p[e]),1)}},c.prototype._update=function(){for(var O in this._renderEffects)this._renderEffects.hasOwnProperty(O)&&this._renderEffects[O]._update();for(var p=0;p<this._cameras.length;p++)if(!!this._cameras[p]){var r=this._cameras[p].name;this._renderEffectsForIsolatedPass[r]&&this._renderEffectsForIsolatedPass[r]._update()}},c.prototype._reset=function(){this._renderEffects={},this._renderEffectsForIsolatedPass=new Array},c.prototype._enableMSAAOnFirstPostProcess=function(O){if(!this.engine._features.supportMSAA)return!1;var p=Object.keys(this._renderEffects);if(p.length>0){var r=this._renderEffects[p[0]].getPostProcesses();r&&(r[0].samples=O)}return!0},c.prototype.setPrePassRenderer=function(O){return!1},c.prototype.dispose=function(){},Object(f.c)([Object(E.c)()],c.prototype,"_name",void 0),c}()},482:function($,W,s){"use strict";s.d(W,"a",function(){return v});var f=s(452),o=s(548),E=s(449);Object.defineProperty(E.a.prototype,"postProcessRenderPipelineManager",{get:function(){if(!this._postProcessRenderPipelineManager){var c=this._getComponent(f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER);c||(c=new v(this),this._addComponent(c)),this._postProcessRenderPipelineManager=new o.a}return this._postProcessRenderPipelineManager},enumerable:!0,configurable:!0});var v=function(){function c(O){this.name=f.a.NAME_POSTPROCESSRENDERPIPELINEMANAGER,this.scene=O}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(f.a.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager._rebuild()},c.prototype.dispose=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.dispose()},c.prototype._gatherRenderTargets=function(){this.scene._postProcessRenderPipelineManager&&this.scene._postProcessRenderPipelineManager.update()},c}()},486:function($,W,s){"use strict";s.d(W,"b",function(){return a}),s.d(W,"a",function(){return l});var f=s(434),o=s(444),E=s(445),v=s(435),c="passPixelShader",O=`
varying vec2 vUV;
uniform sampler2D textureSampler;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
}`;v.a.ShadersStore[c]=O;var p={name:c,shader:O},r="passCubePixelShader",e=`
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
}`;v.a.ShadersStore[r]=e;var t={name:r,shader:e},i=s(437),n=s(439),a=function(h){Object(f.d)(u,h);function u(g,A,R,S,P,D,L,U){return R===void 0&&(R=null),L===void 0&&(L=0),U===void 0&&(U=!1),h.call(this,g,"pass",null,null,A,R,S,P,D,void 0,L,void 0,null,U)||this}return u.prototype.getClassName=function(){return"PassPostProcess"},u._Parse=function(g,A,R,S){return n.a.Parse(function(){return new u(g.name,g.options,A,g.renderTargetSamplingMode,g._engine,g.reusable)},g,R,S)},u}(o.a);i.a.RegisteredTypes["BABYLON.PassPostProcess"]=a;var l=function(h){Object(f.d)(u,h);function u(g,A,R,S,P,D,L,U){R===void 0&&(R=null),L===void 0&&(L=0),U===void 0&&(U=!1);var F=h.call(this,g,"passCube",null,null,A,R,S,P,D,"#define POSITIVEX",L,void 0,null,U)||this;return F._face=0,F}return Object.defineProperty(u.prototype,"face",{get:function(){return this._face},set:function(g){if(!(g<0||g>5))switch(this._face=g,this._face){case 0:this.updateEffect("#define POSITIVEX");break;case 1:this.updateEffect("#define NEGATIVEX");break;case 2:this.updateEffect("#define POSITIVEY");break;case 3:this.updateEffect("#define NEGATIVEY");break;case 4:this.updateEffect("#define POSITIVEZ");break;case 5:this.updateEffect("#define NEGATIVEZ");break}},enumerable:!1,configurable:!0}),u.prototype.getClassName=function(){return"PassCubePostProcess"},u._Parse=function(g,A,R,S){return n.a.Parse(function(){return new u(g.name,g.options,A,g.renderTargetSamplingMode,g._engine,g.reusable)},g,R,S)},u}(o.a);E.a._RescalePostProcessFactory=function(h){return new a("rescale",1,null,2,h,!1,0)}},498:function($,W,s){"use strict";s.d(W,"a",function(){return p});var f=s(434),o=s(439),E=s(436),v=s(441),c=s(453),O=s(484);c.a.AddNodeConstructor("Light_Type_3",function(r,e){return function(){return new p(r,E.e.Zero(),e)}});var p=function(r){Object(f.d)(e,r);function e(t,i,n){var a=r.call(this,t,n)||this;return a.groundColor=new v.a(0,0,0),a.direction=i||E.e.Up(),a}return e.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},e.prototype.getClassName=function(){return"HemisphericLight"},e.prototype.setDirectionToTarget=function(t){return this.direction=E.e.Normalize(t.subtract(E.e.Zero())),this.direction},e.prototype.getShadowGenerator=function(){return null},e.prototype.transferToEffect=function(t,i){var n=E.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",n.x,n.y,n.z,0,i),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),i),this},e.prototype.transferToNodeMaterialEffect=function(t,i){var n=E.e.Normalize(this.direction);return t.setFloat3(i,n.x,n.y,n.z),this},e.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=E.a.Identity()),this._worldMatrix},e.prototype.getTypeID=function(){return O.a.LIGHTTYPEID_HEMISPHERICLIGHT},e.prototype.prepareLightSpecificDefines=function(t,i){t["HEMILIGHT"+i]=!0},Object(f.c)([Object(o.e)()],e.prototype,"groundColor",void 0),Object(f.c)([Object(o.o)()],e.prototype,"direction",void 0),e}(O.a)},500:function($,W,s){"use strict";var f=s(434),o=s(456),E=s(440),v=s(595),c=s(467);c.a.prototype.createRenderTargetTexture=function(O,p){var r=new v.a;p!==void 0&&typeof p=="object"?(r.generateMipMaps=p.generateMipMaps,r.generateDepthBuffer=!!p.generateDepthBuffer,r.generateStencilBuffer=!!p.generateStencilBuffer,r.type=p.type===void 0?0:p.type,r.samplingMode=p.samplingMode===void 0?3:p.samplingMode,r.format=p.format===void 0?5:p.format):(r.generateMipMaps=p,r.generateDepthBuffer=!0,r.generateStencilBuffer=!1,r.type=0,r.samplingMode=3,r.format=5),(r.type===1&&!this._caps.textureFloatLinearFiltering||r.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(r.samplingMode=1),r.type===1&&!this._caps.textureFloat&&(r.type=0,E.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var e=this._gl,t=new o.a(this,o.b.RenderTarget),i=O.width||O,n=O.height||O,a=O.layers||0,l=this._getSamplingParameters(r.samplingMode,!!r.generateMipMaps),h=a!==0?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D,u=this._getRGBABufferInternalSizedFormat(r.type,r.format),g=this._getInternalFormat(r.format),A=this._getWebGLTextureType(r.type);this._bindTextureDirectly(h,t),a!==0?(t.is2DArray=!0,e.texImage3D(h,0,u,i,n,a,0,g,A,null)):e.texImage2D(h,0,u,i,n,0,g,A,null),e.texParameteri(h,e.TEXTURE_MAG_FILTER,l.mag),e.texParameteri(h,e.TEXTURE_MIN_FILTER,l.min),e.texParameteri(h,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(h,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r.generateMipMaps&&this._gl.generateMipmap(h),this._bindTextureDirectly(h,null);var R=this._currentFramebuffer,S=e.createFramebuffer();return this._bindUnboundFramebuffer(S),t._depthStencilBuffer=this._setupFramebufferDepthAttachments(!!r.generateStencilBuffer,r.generateDepthBuffer,i,n),t.is2DArray||e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t._hardwareTexture.underlyingResource,0),this._bindUnboundFramebuffer(R),t._framebuffer=S,t.baseWidth=i,t.baseHeight=n,t.width=i,t.height=n,t.depth=a,t.isReady=!0,t.samples=1,t.generateMipMaps=!!r.generateMipMaps,t.samplingMode=r.samplingMode,t.type=r.type,t.format=r.format,t._generateDepthBuffer=r.generateDepthBuffer,t._generateStencilBuffer=!!r.generateStencilBuffer,this._internalTexturesCache.push(t),t},c.a.prototype.createDepthStencilTexture=function(O,p){if(p.isCube){var r=O.width||O;return this._createDepthStencilCubeTexture(r,p)}else return this._createDepthStencilTexture(O,p)},c.a.prototype._createDepthStencilTexture=function(O,p){var r=this._gl,e=O.layers||0,t=e!==0?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D,i=new o.a(this,o.b.Depth);if(!this._caps.depthTextureExtension)return E.a.Error("Depth texture is not supported by your browser or hardware."),i;var n=Object(f.a)({bilinearFiltering:!1,comparisonFunction:0,generateStencil:!1},p);this._bindTextureDirectly(t,i,!0),this._setupDepthStencilTexture(i,O,n.generateStencil,n.bilinearFiltering,n.comparisonFunction);var a=n.generateStencil?r.UNSIGNED_INT_24_8:r.UNSIGNED_INT,l=n.generateStencil?r.DEPTH_STENCIL:r.DEPTH_COMPONENT,h=l;return this.webGLVersion>1&&(h=n.generateStencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24),i.is2DArray?r.texImage3D(t,0,h,i.width,i.height,e,0,l,a,null):r.texImage2D(t,0,h,i.width,i.height,0,l,a,null),this._bindTextureDirectly(t,null),i}},502:function($,W,s){"use strict";s.d(W,"a",function(){return le});var f=s(436),o=s(447),E=s(442),v=s(538),c=s(454),O=s(441),p=s(455),r=s(533),e=s(476),t=s(459),i=s(435),n="mrtFragmentDeclaration",a=`#if defined(WEBGL2) || defined(WEBGPU)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;i.a.IncludesShadersStore[n]=a;var l={name:n,shader:a},h=s(614),u=s(615),g=s(616),A="geometryPixelShader",R=`#extension GL_EXT_draw_buffers : require
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
`;i.a.ShadersStore[A]=R;var S={name:A,shader:R},P=s(487),D=s(496),L=s(497),U=s(501),F="geometryVertexDeclaration",V=`
uniform mat4 viewProjection;
uniform mat4 view;`;i.a.IncludesShadersStore[F]=V;var I={name:F,shader:V},x=s(674),_="geometryUboDeclaration",j="#include<sceneUboDeclaration>";i.a.IncludesShadersStore[_]=j;var G={name:_,shader:j},y=s(507),Y=s(508),Z=s(488),fe=s(489),w=s(675),se="geometryVertexShader",ee=`precision highp float;
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
`;i.a.ShadersStore[se]=ee;var te={name:se,shader:ee},le=function(){function q(X,ge){ge===void 0&&(ge=1),this._previousTransformationMatrices={},this._previousBonesTransformationMatrices={},this.excludedSkinnedMeshesFromVelocity=[],this.renderTransparentMeshes=!0,this._resizeObserver=null,this._enablePosition=!1,this._enableVelocity=!1,this._enableReflectivity=!1,this._positionIndex=-1,this._velocityIndex=-1,this._reflectivityIndex=-1,this._depthIndex=-1,this._normalIndex=-1,this._linkedWithPrePass=!1,this._scene=X,this._ratio=ge,this._useUbo=X.getEngine().supportsUniformBuffers,q._SceneComponentInitialization(this._scene),this._createRenderTargets()}return q.prototype._linkPrePassRenderer=function(X){this._linkedWithPrePass=!0,this._prePassRenderer=X,this._multiRenderTarget&&(this._multiRenderTarget.onClearObservable.clear(),this._multiRenderTarget.onClearObservable.add(function(ge){}))},q.prototype._unlinkPrePassRenderer=function(){this._linkedWithPrePass=!1,this._createRenderTargets()},q.prototype._resetLayout=function(){this._enablePosition=!1,this._enableReflectivity=!1,this._enableVelocity=!1,this._attachments=[]},q.prototype._forceTextureType=function(X,ge){X===q.POSITION_TEXTURE_TYPE?(this._positionIndex=ge,this._enablePosition=!0):X===q.VELOCITY_TEXTURE_TYPE?(this._velocityIndex=ge,this._enableVelocity=!0):X===q.REFLECTIVITY_TEXTURE_TYPE?(this._reflectivityIndex=ge,this._enableReflectivity=!0):X===q.DEPTH_TEXTURE_TYPE?this._depthIndex=ge:X===q.NORMAL_TEXTURE_TYPE&&(this._normalIndex=ge)},q.prototype._setAttachments=function(X){this._attachments=X},q.prototype._linkInternalTexture=function(X){this._multiRenderTarget._texture=X},Object.defineProperty(q.prototype,"renderList",{get:function(){return this._multiRenderTarget.renderList},set:function(X){this._multiRenderTarget.renderList=X},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"isSupported",{get:function(){return this._multiRenderTarget.isSupported},enumerable:!1,configurable:!0}),q.prototype.getTextureIndex=function(X){switch(X){case q.POSITION_TEXTURE_TYPE:return this._positionIndex;case q.VELOCITY_TEXTURE_TYPE:return this._velocityIndex;case q.REFLECTIVITY_TEXTURE_TYPE:return this._reflectivityIndex;default:return-1}},Object.defineProperty(q.prototype,"enablePosition",{get:function(){return this._enablePosition},set:function(X){this._enablePosition=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableVelocity",{get:function(){return this._enableVelocity},set:function(X){this._enableVelocity=X,X||(this._previousTransformationMatrices={}),this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"enableReflectivity",{get:function(){return this._enableReflectivity},set:function(X){this._enableReflectivity=X,this._linkedWithPrePass||(this.dispose(),this._createRenderTargets())},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"ratio",{get:function(){return this._ratio},enumerable:!1,configurable:!0}),q.prototype.isReady=function(X,ge){var Ee=X.getMaterial();if(Ee&&Ee.disableDepthWrite)return!1;var oe=[],me=[o.b.PositionKind,o.b.NormalKind],ae=X.getMesh();if(Ee){var _e=!1;Ee.needAlphaTesting()&&Ee.getAlphaTestTexture()&&(oe.push("#define ALPHATEST"),oe.push("#define ALPHATEST_UV"+(Ee.getAlphaTestTexture().coordinatesIndex+1)),_e=!0),Ee.bumpTexture&&p.a.BumpTextureEnabled&&(oe.push("#define BUMP"),oe.push("#define BUMP_UV"+(Ee.bumpTexture.coordinatesIndex+1)),_e=!0),this._enableReflectivity&&(Ee instanceof p.a&&Ee.specularTexture?(oe.push("#define HAS_SPECULAR"),oe.push("#define REFLECTIVITY_UV"+(Ee.specularTexture.coordinatesIndex+1)),_e=!0):Ee instanceof r.a&&Ee.reflectivityTexture&&(oe.push("#define HAS_REFLECTIVITY"),oe.push("#define REFLECTIVITY_UV"+(Ee.reflectivityTexture.coordinatesIndex+1)),_e=!0)),_e&&(oe.push("#define NEED_UV"),ae.isVerticesDataPresent(o.b.UVKind)&&(me.push(o.b.UVKind),oe.push("#define UV1")),ae.isVerticesDataPresent(o.b.UV2Kind)&&(me.push(o.b.UV2Kind),oe.push("#define UV2")))}this._linkedWithPrePass&&(oe.push("#define PREPASS"),this._depthIndex!==-1&&(oe.push("#define DEPTH_INDEX "+this._depthIndex),oe.push("#define PREPASS_DEPTH")),this._normalIndex!==-1&&(oe.push("#define NORMAL_INDEX "+this._normalIndex),oe.push("#define PREPASS_NORMAL"))),this._enablePosition&&(oe.push("#define POSITION"),oe.push("#define POSITION_INDEX "+this._positionIndex)),this._enableVelocity&&(oe.push("#define VELOCITY"),oe.push("#define VELOCITY_INDEX "+this._velocityIndex),this.excludedSkinnedMeshesFromVelocity.indexOf(ae)===-1&&oe.push("#define BONES_VELOCITY_ENABLED")),this._enableReflectivity&&(oe.push("#define REFLECTIVITY"),oe.push("#define REFLECTIVITY_INDEX "+this._reflectivityIndex)),ae.useBones&&ae.computeBonesUsingShaders?(me.push(o.b.MatricesIndicesKind),me.push(o.b.MatricesWeightsKind),ae.numBoneInfluencers>4&&(me.push(o.b.MatricesIndicesExtraKind),me.push(o.b.MatricesWeightsExtraKind)),oe.push("#define NUM_BONE_INFLUENCERS "+ae.numBoneInfluencers),oe.push("#define BonesPerMesh "+(ae.skeleton?ae.skeleton.bones.length+1:0))):oe.push("#define NUM_BONE_INFLUENCERS 0");var ue=ae.morphTargetManager,B=0;ue&&ue.numInfluencers>0&&(B=ue.numInfluencers,oe.push("#define MORPHTARGETS"),oe.push("#define NUM_MORPH_INFLUENCERS "+B),ue.isUsingTextureForTargets&&oe.push("#define MORPHTARGETS_TEXTURE"),c.a.PrepareAttributesForMorphTargetsInfluencers(me,ae,B)),ge&&(oe.push("#define INSTANCES"),c.a.PushAttributesForInstances(me),X.getRenderingMesh().hasThinInstances&&oe.push("#define THIN_INSTANCES")),this._linkedWithPrePass?oe.push("#define RENDER_TARGET_COUNT "+this._attachments.length):oe.push("#define RENDER_TARGET_COUNT "+this._multiRenderTarget.textures.length);var m=oe.join(`
`);return this._cachedDefines!==m&&(this._cachedDefines=m,this._effect=this._scene.getEngine().createEffect("geometry",{attributes:me,uniformsNames:["world","mBones","viewProjection","diffuseMatrix","view","previousWorld","previousViewProjection","mPreviousBones","bumpMatrix","reflectivityMatrix","vTangentSpaceParams","vBumpInfos","morphTargetInfluences","morphTargetTextureInfo","morphTargetTextureIndices"],samplers:["diffuseSampler","bumpSampler","reflectivitySampler","morphTargets"],defines:m,onCompiled:null,fallbacks:null,onError:null,uniformBuffersNames:["Scene"],indexParameters:{buffersCount:this._multiRenderTarget.textures.length-1,maxSimultaneousMorphTargets:B}},this._scene.getEngine())),this._effect.isReady()},q.prototype.getGBuffer=function(){return this._multiRenderTarget},Object.defineProperty(q.prototype,"samples",{get:function(){return this._multiRenderTarget.samples},set:function(X){this._multiRenderTarget.samples=X},enumerable:!1,configurable:!0}),q.prototype.dispose=function(){if(this._resizeObserver){var X=this._scene.getEngine();X.onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null}this.getGBuffer().dispose()},q.prototype._assignRenderTargetIndices=function(){var X=2;return this._enablePosition&&(this._positionIndex=X,X++),this._enableVelocity&&(this._velocityIndex=X,X++),this._enableReflectivity&&(this._reflectivityIndex=X,X++),X},q.prototype._createRenderTargets=function(){var X=this,ge=this._scene.getEngine(),Ee=this._assignRenderTargetIndices();if(this._multiRenderTarget=new v.a("gBuffer",{width:ge.getRenderWidth()*this._ratio,height:ge.getRenderHeight()*this._ratio},Ee,this._scene,{generateMipMaps:!1,generateDepthTexture:!0,defaultType:1}),!!this.isSupported){this._multiRenderTarget.wrapU=E.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.wrapV=E.a.CLAMP_ADDRESSMODE,this._multiRenderTarget.refreshRate=1,this._multiRenderTarget.renderParticles=!1,this._multiRenderTarget.renderList=null,this._multiRenderTarget.onClearObservable.add(function(me){me.clear(new O.b(0,0,0,1),!0,!0,!0)}),this._resizeObserver=ge.onResizeObservable.add(function(){X._multiRenderTarget&&X._multiRenderTarget.resize({width:ge.getRenderWidth()*X._ratio,height:ge.getRenderHeight()*X._ratio})});var oe=function(me){var ae=me.getRenderingMesh(),_e=me.getEffectiveMesh(),ue=X._scene,B=ue.getEngine(),m=me.getMaterial();if(!!m){if(_e._internalAbstractMeshDataInfo._isActiveIntermediate=!1,X._enableVelocity&&!X._previousTransformationMatrices[_e.uniqueId]&&(X._previousTransformationMatrices[_e.uniqueId]={world:f.a.Identity(),viewProjection:ue.getTransformMatrix()},ae.skeleton)){var N=ae.skeleton.getTransformMatrices(ae);X._previousBonesTransformationMatrices[ae.uniqueId]=X._copyBonesTransformationMatrices(N,new Float32Array(N.length))}var M=ae._getInstancesRenderList(me._id,!!me.getReplacementMesh());if(!M.mustReturn){var Q=B.getCaps().instancedArrays&&(M.visibleInstances[me._id]!==null||ae.hasThinInstances),K=_e.getWorldMatrix();if(X.isReady(me,Q)){if(B.enableEffect(X._effect),ae._bind(me,X._effect,m.fillMode),X._useUbo?(c.a.FinalizeSceneUbo(X._scene),c.a.BindSceneUniformBuffer(X._effect,X._scene.getSceneUniformBuffer())):(X._effect.setMatrix("viewProjection",ue.getTransformMatrix()),X._effect.setMatrix("view",ue.getViewMatrix())),m){var b,J=ae._instanceDataStorage;if(!J.isFrozen&&(m.backFaceCulling||m.overrideMaterialSideOrientation!==null)){var pe=_e._getWorldMatrixDeterminant();b=m.overrideMaterialSideOrientation,b==null&&(b=m.sideOrientation),pe<0&&(b=b===t.a.ClockWiseSideOrientation?t.a.CounterClockWiseSideOrientation:t.a.ClockWiseSideOrientation)}else b=J.sideOrientation;if(m._preBind(X._effect,b),m.needAlphaTesting()){var Te=m.getAlphaTestTexture();Te&&(X._effect.setTexture("diffuseSampler",Te),X._effect.setMatrix("diffuseMatrix",Te.getTextureMatrix()))}m.bumpTexture&&ue.getEngine().getCaps().standardDerivatives&&p.a.BumpTextureEnabled&&(X._effect.setFloat3("vBumpInfos",m.bumpTexture.coordinatesIndex,1/m.bumpTexture.level,m.parallaxScaleBias),X._effect.setMatrix("bumpMatrix",m.bumpTexture.getTextureMatrix()),X._effect.setTexture("bumpSampler",m.bumpTexture),X._effect.setFloat2("vTangentSpaceParams",m.invertNormalMapX?-1:1,m.invertNormalMapY?-1:1)),X._enableReflectivity&&(m instanceof p.a&&m.specularTexture?(X._effect.setMatrix("reflectivityMatrix",m.specularTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",m.specularTexture)):m instanceof r.a&&m.reflectivityTexture&&(X._effect.setMatrix("reflectivityMatrix",m.reflectivityTexture.getTextureMatrix()),X._effect.setTexture("reflectivitySampler",m.reflectivityTexture)))}ae.useBones&&ae.computeBonesUsingShaders&&ae.skeleton&&(X._effect.setMatrices("mBones",ae.skeleton.getTransformMatrices(ae)),X._enableVelocity&&X._effect.setMatrices("mPreviousBones",X._previousBonesTransformationMatrices[ae.uniqueId])),c.a.BindMorphTargetParameters(ae,X._effect),ae.morphTargetManager&&ae.morphTargetManager.isUsingTextureForTargets&&ae.morphTargetManager._bind(X._effect),X._enableVelocity&&(X._effect.setMatrix("previousWorld",X._previousTransformationMatrices[_e.uniqueId].world),X._effect.setMatrix("previousViewProjection",X._previousTransformationMatrices[_e.uniqueId].viewProjection)),ae._processRendering(_e,me,X._effect,m.fillMode,M,Q,function(Se,Pe){return X._effect.setMatrix("world",Pe)})}X._enableVelocity&&(X._previousTransformationMatrices[_e.uniqueId].world=K.clone(),X._previousTransformationMatrices[_e.uniqueId].viewProjection=X._scene.getTransformMatrix().clone(),ae.skeleton&&X._copyBonesTransformationMatrices(ae.skeleton.getTransformMatrices(ae),X._previousBonesTransformationMatrices[_e.uniqueId]))}}};this._multiRenderTarget.customRenderFunction=function(me,ae,_e,ue){var B;if(X._linkedWithPrePass){if(!X._prePassRenderer.enabled)return;X._scene.getEngine().bindAttachments(X._attachments)}if(ue.length){for(ge.setColorWrite(!1),B=0;B<ue.length;B++)oe(ue.data[B]);ge.setColorWrite(!0)}for(B=0;B<me.length;B++)oe(me.data[B]);for(ge.setDepthWrite(!1),B=0;B<ae.length;B++)oe(ae.data[B]);if(X.renderTransparentMeshes)for(B=0;B<_e.length;B++)oe(_e.data[B]);ge.setDepthWrite(!0)}}},q.prototype._copyBonesTransformationMatrices=function(X,ge){for(var Ee=0;Ee<X.length;Ee++)ge[Ee]=X[Ee];return ge},q.DEPTH_TEXTURE_TYPE=0,q.NORMAL_TEXTURE_TYPE=1,q.POSITION_TEXTURE_TYPE=2,q.VELOCITY_TEXTURE_TYPE=3,q.REFLECTIVITY_TEXTURE_TYPE=4,q._SceneComponentInitialization=function(X){throw e.a.WarnImport("GeometryBufferRendererSceneComponent")},q}()},513:function($,W,s){"use strict";s.d(W,"a",function(){return O}),s.d(W,"b",function(){return p});var f=s(436),o=[Math.sqrt(1/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(3/(4*Math.PI)),-Math.sqrt(3/(4*Math.PI)),Math.sqrt(15/(4*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(5/(16*Math.PI)),-Math.sqrt(15/(4*Math.PI)),Math.sqrt(15/(16*Math.PI))],E=[function(r){return 1},function(r){return r.y},function(r){return r.z},function(r){return r.x},function(r){return r.x*r.y},function(r){return r.y*r.z},function(r){return 3*r.z*r.z-1},function(r){return r.x*r.z},function(r){return r.x*r.x-r.y*r.y}],v=function(r,e){return o[r]*E[r](e)},c=[Math.PI,2*Math.PI/3,2*Math.PI/3,2*Math.PI/3,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4,Math.PI/4],O=function(){function r(){this.preScaled=!1,this.l00=f.e.Zero(),this.l1_1=f.e.Zero(),this.l10=f.e.Zero(),this.l11=f.e.Zero(),this.l2_2=f.e.Zero(),this.l2_1=f.e.Zero(),this.l20=f.e.Zero(),this.l21=f.e.Zero(),this.l22=f.e.Zero()}return r.prototype.addLight=function(e,t,i){var n=new f.e(t.r,t.g,t.b),a=n.scale(i);this.l00=this.l00.add(a.scale(v(0,e))),this.l1_1=this.l1_1.add(a.scale(v(1,e))),this.l10=this.l10.add(a.scale(v(2,e))),this.l11=this.l11.add(a.scale(v(3,e))),this.l2_2=this.l2_2.add(a.scale(v(4,e))),this.l2_1=this.l2_1.add(a.scale(v(5,e))),this.l20=this.l20.add(a.scale(v(6,e))),this.l21=this.l21.add(a.scale(v(7,e))),this.l22=this.l22.add(a.scale(v(8,e)))},r.prototype.scaleInPlace=function(e){this.l00.scaleInPlace(e),this.l1_1.scaleInPlace(e),this.l10.scaleInPlace(e),this.l11.scaleInPlace(e),this.l2_2.scaleInPlace(e),this.l2_1.scaleInPlace(e),this.l20.scaleInPlace(e),this.l21.scaleInPlace(e),this.l22.scaleInPlace(e)},r.prototype.convertIncidentRadianceToIrradiance=function(){this.l00.scaleInPlace(c[0]),this.l1_1.scaleInPlace(c[1]),this.l10.scaleInPlace(c[2]),this.l11.scaleInPlace(c[3]),this.l2_2.scaleInPlace(c[4]),this.l2_1.scaleInPlace(c[5]),this.l20.scaleInPlace(c[6]),this.l21.scaleInPlace(c[7]),this.l22.scaleInPlace(c[8])},r.prototype.convertIrradianceToLambertianRadiance=function(){this.scaleInPlace(1/Math.PI)},r.prototype.preScaleForRendering=function(){this.preScaled=!0,this.l00.scaleInPlace(o[0]),this.l1_1.scaleInPlace(o[1]),this.l10.scaleInPlace(o[2]),this.l11.scaleInPlace(o[3]),this.l2_2.scaleInPlace(o[4]),this.l2_1.scaleInPlace(o[5]),this.l20.scaleInPlace(o[6]),this.l21.scaleInPlace(o[7]),this.l22.scaleInPlace(o[8])},r.FromArray=function(e){var t=new r;return f.e.FromArrayToRef(e[0],0,t.l00),f.e.FromArrayToRef(e[1],0,t.l1_1),f.e.FromArrayToRef(e[2],0,t.l10),f.e.FromArrayToRef(e[3],0,t.l11),f.e.FromArrayToRef(e[4],0,t.l2_2),f.e.FromArrayToRef(e[5],0,t.l2_1),f.e.FromArrayToRef(e[6],0,t.l20),f.e.FromArrayToRef(e[7],0,t.l21),f.e.FromArrayToRef(e[8],0,t.l22),t},r.FromPolynomial=function(e){var t=new r;return t.l00=e.xx.scale(.376127).add(e.yy.scale(.376127)).add(e.zz.scale(.376126)),t.l1_1=e.y.scale(.977204),t.l10=e.z.scale(.977204),t.l11=e.x.scale(.977204),t.l2_2=e.xy.scale(1.16538),t.l2_1=e.yz.scale(1.16538),t.l20=e.zz.scale(1.34567).subtract(e.xx.scale(.672834)).subtract(e.yy.scale(.672834)),t.l21=e.zx.scale(1.16538),t.l22=e.xx.scale(1.16538).subtract(e.yy.scale(1.16538)),t.l1_1.scaleInPlace(-1),t.l11.scaleInPlace(-1),t.l2_1.scaleInPlace(-1),t.l21.scaleInPlace(-1),t.scaleInPlace(Math.PI),t},r}(),p=function(){function r(){this.x=f.e.Zero(),this.y=f.e.Zero(),this.z=f.e.Zero(),this.xx=f.e.Zero(),this.yy=f.e.Zero(),this.zz=f.e.Zero(),this.xy=f.e.Zero(),this.yz=f.e.Zero(),this.zx=f.e.Zero()}return Object.defineProperty(r.prototype,"preScaledHarmonics",{get:function(){return this._harmonics||(this._harmonics=O.FromPolynomial(this)),this._harmonics.preScaled||this._harmonics.preScaleForRendering(),this._harmonics},enumerable:!1,configurable:!0}),r.prototype.addAmbient=function(e){var t=new f.e(e.r,e.g,e.b);this.xx=this.xx.add(t),this.yy=this.yy.add(t),this.zz=this.zz.add(t)},r.prototype.scaleInPlace=function(e){this.x.scaleInPlace(e),this.y.scaleInPlace(e),this.z.scaleInPlace(e),this.xx.scaleInPlace(e),this.yy.scaleInPlace(e),this.zz.scaleInPlace(e),this.yz.scaleInPlace(e),this.zx.scaleInPlace(e),this.xy.scaleInPlace(e)},r.FromHarmonics=function(e){var t=new r;return t._harmonics=e,t.x=e.l11.scale(1.02333).scale(-1),t.y=e.l1_1.scale(1.02333).scale(-1),t.z=e.l10.scale(1.02333),t.xx=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).add(e.l22.scale(.429043)),t.yy=e.l00.scale(.886277).subtract(e.l20.scale(.247708)).subtract(e.l22.scale(.429043)),t.zz=e.l00.scale(.886277).add(e.l20.scale(.495417)),t.yz=e.l2_1.scale(.858086).scale(-1),t.zx=e.l21.scale(.858086).scale(-1),t.xy=e.l2_2.scale(.858086),t.scaleInPlace(1/Math.PI),t},r.FromArray=function(e){var t=new r;return f.e.FromArrayToRef(e[0],0,t.x),f.e.FromArrayToRef(e[1],0,t.y),f.e.FromArrayToRef(e[2],0,t.z),f.e.FromArrayToRef(e[3],0,t.xx),f.e.FromArrayToRef(e[4],0,t.yy),f.e.FromArrayToRef(e[5],0,t.zz),f.e.FromArrayToRef(e[6],0,t.yz),f.e.FromArrayToRef(e[7],0,t.zx),f.e.FromArrayToRef(e[8],0,t.xy),t},r}()},514:function($,W,s){"use strict";s.d(W,"a",function(){return E});var f=s(442),o=s(545),E=function(){function v(){}return v.GetEnvironmentBRDFTexture=function(c){if(!c.environmentBRDFTexture){var O=c.useDelayedTextureLoading;c.useDelayedTextureLoading=!1;var p=c._blockEntityCollection;c._blockEntityCollection=!1;var r=f.a.CreateFromBase64String(this._environmentBRDFBase64Texture,"EnvironmentBRDFTexture"+this._instanceNumber++,c,!0,!1,f.a.BILINEAR_SAMPLINGMODE);c._blockEntityCollection=p;var e=c.getEngine().getLoadedTexturesCache(),t=e.indexOf(r.getInternalTexture());t!==-1&&e.splice(t,1),r.isRGBD=!0,r.wrapU=f.a.CLAMP_ADDRESSMODE,r.wrapV=f.a.CLAMP_ADDRESSMODE,c.environmentBRDFTexture=r,c.useDelayedTextureLoading=O,o.a.ExpandRGBDTexture(r)}return c.environmentBRDFTexture},v._instanceNumber=0,v._environmentBRDFBase64Texture="data:image/png;base64,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",v}()},516:function($,W,s){"use strict";s.d(W,"a",function(){return j});var f=s(434),o=s(439),E=s(443),v=s(438),c=s(441),O=s(445),p=s(448),r=s(447),e=s(442),t=s(458),i=s(459),n=s(454),a=s(435),l="glowMapGenerationPixelShader",h=`#ifdef DIFFUSE
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
}`;a.a.ShadersStore[l]=h;var u={name:l,shader:h},g=s(487),A=s(496),R=s(497),S=s(501),P=s(507),D=s(508),L=s(488),U=s(489),F="glowMapGenerationVertexShader",V=`
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
}`;a.a.ShadersStore[F]=V;var I={name:F,shader:V},x=s(476),_=s(512),j=function(){function G(y,Y){this._vertexBuffers={},this._maxSize=0,this._mainTextureDesiredSize={width:0,height:0},this._shouldRender=!0,this._postProcesses=[],this._textures=[],this._emissiveTextureAndColor={texture:null,color:new c.b},this.neutralColor=new c.b,this.isEnabled=!0,this.disableBoundingBoxesFromEffectLayer=!1,this.onDisposeObservable=new v.c,this.onBeforeRenderMainTextureObservable=new v.c,this.onBeforeComposeObservable=new v.c,this.onBeforeRenderMeshToEffect=new v.c,this.onAfterRenderMeshToEffect=new v.c,this.onAfterComposeObservable=new v.c,this.onSizeChangedObservable=new v.c,this.name=y,this._scene=Y||p.a.LastCreatedScene,G._SceneComponentInitialization(this._scene),this._engine=this._scene.getEngine(),this._maxSize=this._engine.getCaps().maxTextureSize,this._scene.effectLayers.push(this),this._generateIndexBuffer(),this._generateVertexBuffer()}return Object.defineProperty(G.prototype,"camera",{get:function(){return this._effectLayerOptions.camera},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"renderingGroupId",{get:function(){return this._effectLayerOptions.renderingGroupId},set:function(y){this._effectLayerOptions.renderingGroupId=y},enumerable:!1,configurable:!0}),G.prototype._init=function(y){this._effectLayerOptions=Object(f.a)({mainTextureRatio:.5,alphaBlendingMode:2,camera:null,renderingGroupId:-1},y),this._setMainTextureSize(),this._createMainTexture(),this._createTextureAndPostProcesses(),this._mergeEffect=this._createMergeEffect()},G.prototype._generateIndexBuffer=function(){var y=[];y.push(0),y.push(1),y.push(2),y.push(0),y.push(2),y.push(3),this._indexBuffer=this._engine.createIndexBuffer(y)},G.prototype._generateVertexBuffer=function(){var y=[];y.push(1,1),y.push(-1,1),y.push(-1,-1),y.push(1,-1);var Y=new r.b(this._engine,y,r.b.PositionKind,!1,!1,2);this._vertexBuffers[r.b.PositionKind]=Y},G.prototype._setMainTextureSize=function(){this._effectLayerOptions.mainTextureFixedSize?(this._mainTextureDesiredSize.width=this._effectLayerOptions.mainTextureFixedSize,this._mainTextureDesiredSize.height=this._effectLayerOptions.mainTextureFixedSize):(this._mainTextureDesiredSize.width=this._engine.getRenderWidth()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.height=this._engine.getRenderHeight()*this._effectLayerOptions.mainTextureRatio,this._mainTextureDesiredSize.width=this._engine.needPOTTextures?O.a.GetExponentOfTwo(this._mainTextureDesiredSize.width,this._maxSize):this._mainTextureDesiredSize.width,this._mainTextureDesiredSize.height=this._engine.needPOTTextures?O.a.GetExponentOfTwo(this._mainTextureDesiredSize.height,this._maxSize):this._mainTextureDesiredSize.height),this._mainTextureDesiredSize.width=Math.floor(this._mainTextureDesiredSize.width),this._mainTextureDesiredSize.height=Math.floor(this._mainTextureDesiredSize.height)},G.prototype._createMainTexture=function(){var y=this;if(this._mainTexture=new t.a("HighlightLayerMainRTT",{width:this._mainTextureDesiredSize.width,height:this._mainTextureDesiredSize.height},this._scene,!1,!0,0),this._mainTexture.activeCamera=this._effectLayerOptions.camera,this._mainTexture.wrapU=e.a.CLAMP_ADDRESSMODE,this._mainTexture.wrapV=e.a.CLAMP_ADDRESSMODE,this._mainTexture.anisotropicFilteringLevel=1,this._mainTexture.updateSamplingMode(e.a.BILINEAR_SAMPLINGMODE),this._mainTexture.renderParticles=!1,this._mainTexture.renderList=null,this._mainTexture.ignoreCameraViewport=!0,this._mainTexture.customRenderFunction=function(Z,fe,w,se){y.onBeforeRenderMainTextureObservable.notifyObservers(y);var ee,te=y._scene.getEngine();if(se.length){for(te.setColorWrite(!1),ee=0;ee<se.length;ee++)y._renderSubMesh(se.data[ee]);te.setColorWrite(!0)}for(ee=0;ee<Z.length;ee++)y._renderSubMesh(Z.data[ee]);for(ee=0;ee<fe.length;ee++)y._renderSubMesh(fe.data[ee]);var le=te.getAlphaMode();for(ee=0;ee<w.length;ee++)y._renderSubMesh(w.data[ee],!0);te.setAlphaMode(le)},this._mainTexture.onClearObservable.add(function(Z){Z.clear(y.neutralColor,!0,!0,!0)}),this._scene.getBoundingBoxRenderer){var Y=this._scene.getBoundingBoxRenderer().enabled;this._mainTexture.onBeforeBindObservable.add(function(){y._scene.getBoundingBoxRenderer().enabled=!y.disableBoundingBoxesFromEffectLayer&&Y}),this._mainTexture.onAfterUnbindObservable.add(function(){y._scene.getBoundingBoxRenderer().enabled=Y})}},G.prototype._addCustomEffectDefines=function(y){},G.prototype._isReady=function(y,Y,Z){var fe=y.getMaterial();if(!fe||!fe.isReadyForSubMesh(y.getMesh(),y,Y))return!1;var w=[],se=[r.b.PositionKind],ee=y.getMesh(),te=!1,le=!1;if(fe){var q=fe.needAlphaTesting(),X=fe.getAlphaTestTexture(),ge=X&&X.hasAlpha&&(fe.useAlphaFromDiffuseTexture||fe._useAlphaFromAlbedoTexture);X&&(q||ge)&&(w.push("#define DIFFUSE"),ee.isVerticesDataPresent(r.b.UV2Kind)&&X.coordinatesIndex===1?(w.push("#define DIFFUSEUV2"),le=!0):ee.isVerticesDataPresent(r.b.UVKind)&&(w.push("#define DIFFUSEUV1"),te=!0),q&&(w.push("#define ALPHATEST"),w.push("#define ALPHATESTVALUE 0.4")));var Ee=fe.opacityTexture;Ee&&(w.push("#define OPACITY"),ee.isVerticesDataPresent(r.b.UV2Kind)&&Ee.coordinatesIndex===1?(w.push("#define OPACITYUV2"),le=!0):ee.isVerticesDataPresent(r.b.UVKind)&&(w.push("#define OPACITYUV1"),te=!0))}Z&&(w.push("#define EMISSIVE"),ee.isVerticesDataPresent(r.b.UV2Kind)&&Z.coordinatesIndex===1?(w.push("#define EMISSIVEUV2"),le=!0):ee.isVerticesDataPresent(r.b.UVKind)&&(w.push("#define EMISSIVEUV1"),te=!0)),ee.isVerticesDataPresent(r.b.ColorKind)&&ee.hasVertexAlpha&&(se.push(r.b.ColorKind),w.push("#define VERTEXALPHA")),te&&(se.push(r.b.UVKind),w.push("#define UV1")),le&&(se.push(r.b.UV2Kind),w.push("#define UV2"));var oe=new _.a;if(ee.useBones&&ee.computeBonesUsingShaders){se.push(r.b.MatricesIndicesKind),se.push(r.b.MatricesWeightsKind),ee.numBoneInfluencers>4&&(se.push(r.b.MatricesIndicesExtraKind),se.push(r.b.MatricesWeightsExtraKind)),w.push("#define NUM_BONE_INFLUENCERS "+ee.numBoneInfluencers);var me=ee.skeleton;me&&me.isUsingTextureForMatrices?w.push("#define BONETEXTURE"):w.push("#define BonesPerMesh "+(me?me.bones.length+1:0)),ee.numBoneInfluencers>0&&oe.addCPUSkinningFallback(0,ee)}else w.push("#define NUM_BONE_INFLUENCERS 0");var ae=ee.morphTargetManager,_e=0;ae&&ae.numInfluencers>0&&(w.push("#define MORPHTARGETS"),_e=ae.numInfluencers,w.push("#define NUM_MORPH_INFLUENCERS "+_e),ae.isUsingTextureForTargets&&w.push("#define MORPHTARGETS_TEXTURE"),n.a.PrepareAttributesForMorphTargetsInfluencers(se,ee,_e)),Y&&(w.push("#define INSTANCES"),n.a.PushAttributesForInstances(se),y.getRenderingMesh().hasThinInstances&&w.push("#define THIN_INSTANCES")),this._addCustomEffectDefines(w);var ue=w.join(`
`);return this._cachedDefines!==ue&&(this._cachedDefines=ue,this._effectLayerMapGenerationEffect=this._scene.getEngine().createEffect("glowMapGeneration",se,["world","mBones","viewProjection","glowColor","morphTargetInfluences","boneTextureWidth","diffuseMatrix","emissiveMatrix","opacityMatrix","opacityIntensity","morphTargetTextureInfo","morphTargetTextureIndices"],["diffuseSampler","emissiveSampler","opacitySampler","boneSampler","morphTargets"],ue,oe,void 0,void 0,{maxSimultaneousMorphTargets:_e})),this._effectLayerMapGenerationEffect.isReady()},G.prototype.render=function(){var y=this._mergeEffect;if(!!y.isReady()){for(var Y=0;Y<this._postProcesses.length;Y++)if(!this._postProcesses[Y].isReady())return;var Z=this._scene.getEngine();this.onBeforeComposeObservable.notifyObservers(this),Z.enableEffect(y),Z.setState(!1),Z.bindBuffers(this._vertexBuffers,this._indexBuffer,y);var fe=Z.getAlphaMode();Z.setAlphaMode(this._effectLayerOptions.alphaBlendingMode),this._internalRender(y),Z.setAlphaMode(fe),this.onAfterComposeObservable.notifyObservers(this);var w=this._mainTexture.getSize();this._setMainTextureSize(),(w.width!==this._mainTextureDesiredSize.width||w.height!==this._mainTextureDesiredSize.height)&&(this.onSizeChangedObservable.notifyObservers(this),this._disposeTextureAndPostProcesses(),this._createMainTexture(),this._createTextureAndPostProcesses())}},G.prototype.hasMesh=function(y){return this.renderingGroupId===-1||y.renderingGroupId===this.renderingGroupId},G.prototype.shouldRender=function(){return this.isEnabled&&this._shouldRender},G.prototype._shouldRenderMesh=function(y){return!0},G.prototype._canRenderMesh=function(y,Y){return!Y.needAlphaBlendingForMesh(y)},G.prototype._shouldRenderEmissiveTextureForMesh=function(){return!0},G.prototype._renderSubMesh=function(y,Y){var Z=this,fe;if(Y===void 0&&(Y=!1),!!this.shouldRender()){var w=y.getMaterial(),se=y.getMesh(),ee=y.getReplacementMesh(),te=y.getRenderingMesh(),le=y.getEffectiveMesh(),q=this._scene,X=q.getEngine();if(le._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!!w&&!!this._canRenderMesh(te,w)){var ge=(fe=te.overrideMaterialSideOrientation)!==null&&fe!==void 0?fe:w.sideOrientation,Ee=te._getWorldMatrixDeterminant();Ee<0&&(ge=ge===i.a.ClockWiseSideOrientation?i.a.CounterClockWiseSideOrientation:i.a.ClockWiseSideOrientation);var oe=ge===i.a.ClockWiseSideOrientation;X.setState(w.backFaceCulling,w.zOffset,void 0,oe);var me=te._getInstancesRenderList(y._id,!!ee);if(!me.mustReturn&&!!this._shouldRenderMesh(te)){var ae=me.hardwareInstancedRendering[y._id]||te.hasThinInstances;if(this._setEmissiveTextureAndColor(te,y,w),this.onBeforeRenderMeshToEffect.notifyObservers(se),this._useMeshMaterial(te))te.render(y,ae,ee||void 0);else if(this._isReady(y,ae,this._emissiveTextureAndColor.texture)){X.enableEffect(this._effectLayerMapGenerationEffect),te._bind(y,this._effectLayerMapGenerationEffect,i.a.TriangleFillMode),this._effectLayerMapGenerationEffect.setMatrix("viewProjection",q.getTransformMatrix()),this._effectLayerMapGenerationEffect.setMatrix("world",le.getWorldMatrix()),this._effectLayerMapGenerationEffect.setFloat4("glowColor",this._emissiveTextureAndColor.color.r,this._emissiveTextureAndColor.color.g,this._emissiveTextureAndColor.color.b,this._emissiveTextureAndColor.color.a);var _e=w.needAlphaTesting(),ue=w.getAlphaTestTexture(),B=ue&&ue.hasAlpha&&(w.useAlphaFromDiffuseTexture||w._useAlphaFromAlbedoTexture);if(ue&&(_e||B)){this._effectLayerMapGenerationEffect.setTexture("diffuseSampler",ue);var m=ue.getTextureMatrix();m&&this._effectLayerMapGenerationEffect.setMatrix("diffuseMatrix",m)}var N=w.opacityTexture;if(N){this._effectLayerMapGenerationEffect.setTexture("opacitySampler",N),this._effectLayerMapGenerationEffect.setFloat("opacityIntensity",N.level);var m=N.getTextureMatrix();m&&this._effectLayerMapGenerationEffect.setMatrix("opacityMatrix",m)}if(this._emissiveTextureAndColor.texture&&(this._effectLayerMapGenerationEffect.setTexture("emissiveSampler",this._emissiveTextureAndColor.texture),this._effectLayerMapGenerationEffect.setMatrix("emissiveMatrix",this._emissiveTextureAndColor.texture.getTextureMatrix())),te.useBones&&te.computeBonesUsingShaders&&te.skeleton){var M=te.skeleton;if(M.isUsingTextureForMatrices){var Q=M.getTransformMatrixTexture(te);if(!Q)return;this._effectLayerMapGenerationEffect.setTexture("boneSampler",Q),this._effectLayerMapGenerationEffect.setFloat("boneTextureWidth",4*(M.bones.length+1))}else this._effectLayerMapGenerationEffect.setMatrices("mBones",M.getTransformMatrices(te))}n.a.BindMorphTargetParameters(te,this._effectLayerMapGenerationEffect),te.morphTargetManager&&te.morphTargetManager.isUsingTextureForTargets&&te.morphTargetManager._bind(this._effectLayerMapGenerationEffect),Y&&X.setAlphaMode(w.alphaMode),te._processRendering(le,y,this._effectLayerMapGenerationEffect,w.fillMode,me,ae,function(K,b){return Z._effectLayerMapGenerationEffect.setMatrix("world",b)})}else this._mainTexture.resetRefreshCounter();this.onAfterRenderMeshToEffect.notifyObservers(se)}}}},G.prototype._useMeshMaterial=function(y){return!1},G.prototype._rebuild=function(){var y=this._vertexBuffers[r.b.PositionKind];y&&y._rebuild(),this._generateIndexBuffer()},G.prototype._disposeTextureAndPostProcesses=function(){this._mainTexture.dispose();for(var y=0;y<this._postProcesses.length;y++)this._postProcesses[y]&&this._postProcesses[y].dispose();this._postProcesses=[];for(var y=0;y<this._textures.length;y++)this._textures[y]&&this._textures[y].dispose();this._textures=[]},G.prototype.dispose=function(){var y=this._vertexBuffers[r.b.PositionKind];y&&(y.dispose(),this._vertexBuffers[r.b.PositionKind]=null),this._indexBuffer&&(this._scene.getEngine()._releaseBuffer(this._indexBuffer),this._indexBuffer=null),this._disposeTextureAndPostProcesses();var Y=this._scene.effectLayers.indexOf(this,0);Y>-1&&this._scene.effectLayers.splice(Y,1),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onBeforeRenderMainTextureObservable.clear(),this.onBeforeComposeObservable.clear(),this.onBeforeRenderMeshToEffect.clear(),this.onAfterRenderMeshToEffect.clear(),this.onAfterComposeObservable.clear(),this.onSizeChangedObservable.clear()},G.prototype.getClassName=function(){return"EffectLayer"},G.Parse=function(y,Y,Z){var fe=E.b.Instantiate(y.customType);return fe.Parse(y,Y,Z)},G._SceneComponentInitialization=function(y){throw x.a.WarnImport("EffectLayerSceneComponent")},Object(f.c)([Object(o.c)()],G.prototype,"name",void 0),Object(f.c)([Object(o.f)()],G.prototype,"neutralColor",void 0),Object(f.c)([Object(o.c)()],G.prototype,"isEnabled",void 0),Object(f.c)([Object(o.d)()],G.prototype,"camera",null),Object(f.c)([Object(o.c)()],G.prototype,"renderingGroupId",null),Object(f.c)([Object(o.c)()],G.prototype,"disableBoundingBoxesFromEffectLayer",void 0),G}()},517:function($,W,s){"use strict";s.d(W,"a",function(){return a});var f=s(434),o=s(442),E=s(444),v=s(435),c="fxaaPixelShader",O=`uniform sampler2D textureSampler;
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
}`;v.a.ShadersStore[c]=O;var p={name:c,shader:O},r="fxaaVertexShader",e=`
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
}`;v.a.ShadersStore[r]=e;var t={name:r,shader:e},i=s(437),n=s(439),a=function(l){Object(f.d)(h,l);function h(u,g,A,R,S,P,D){A===void 0&&(A=null),D===void 0&&(D=0);var L=l.call(this,u,"fxaa",["texelSize"],null,g,A,R||o.a.BILINEAR_SAMPLINGMODE,S,P,null,D,"fxaa",void 0,!0)||this,U=L._getDefines();return L.updateEffect(U),L.onApplyObservable.add(function(F){var V=L.texelSize;F.setFloat2("texelSize",V.x,V.y)}),L}return h.prototype.getClassName=function(){return"FxaaPostProcess"},h.prototype._getDefines=function(){var u=this.getEngine();if(!u)return null;var g=u.getGlInfo();return g&&g.renderer&&g.renderer.toLowerCase().indexOf("mali")>-1?`#define MALI 1
`:null},h._Parse=function(u,g,A,R){return n.a.Parse(function(){return new h(u.name,u.options,g,u.renderTargetSamplingMode,A.getEngine(),u.reusable)},u,A,R)},h}(E.a);i.a.RegisteredTypes["BABYLON.FxaaPostProcess"]=a},518:function($,W,s){"use strict";s.d(W,"a",function(){return r});var f=s(434),o=s(439),E=s(491),v=s(444),c=s(448),O=s(644),p=s(534),r=function(e){Object(f.d)(t,e);function t(i,n,a,l,h,u,g,A){a===void 0&&(a=null),g===void 0&&(g=0);var R=e.call(this,i,"imageProcessing",[],[],n,a,l,h,u,null,g,"postprocess",null,!0)||this;return R._fromLinearSpace=!0,R._defines={IMAGEPROCESSING:!1,VIGNETTE:!1,VIGNETTEBLENDMODEMULTIPLY:!1,VIGNETTEBLENDMODEOPAQUE:!1,TONEMAPPING:!1,TONEMAPPING_ACES:!1,CONTRAST:!1,COLORCURVES:!1,COLORGRADING:!1,COLORGRADING3D:!1,FROMLINEARSPACE:!1,SAMPLER3DGREENDEPTH:!1,SAMPLER3DBGRMAP:!1,IMAGEPROCESSINGPOSTPROCESS:!1,EXPOSURE:!1},A?(A.applyByPostProcess=!0,R._attachImageProcessingConfiguration(A,!0),R.fromLinearSpace=!1):(R._attachImageProcessingConfiguration(null,!0),R.imageProcessingConfiguration.applyByPostProcess=!0),R.onApply=function(S){R.imageProcessingConfiguration.bind(S,R.aspectRatio)},R}return Object.defineProperty(t.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(i){i.applyByPostProcess=!0,this._attachImageProcessingConfiguration(i)},enumerable:!1,configurable:!0}),t.prototype._attachImageProcessingConfiguration=function(i,n){var a=this;if(n===void 0&&(n=!1),i!==this._imageProcessingConfiguration){if(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),i)this._imageProcessingConfiguration=i;else{var l=null,h=this.getEngine(),u=this.getCamera();if(u)l=u.getScene();else if(h&&h.scenes){var g=h.scenes;l=g[g.length-1]}else l=c.a.LastCreatedScene;l?this._imageProcessingConfiguration=l.imageProcessingConfiguration:this._imageProcessingConfiguration=new E.a}this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){a._updateParameters()})),n||this._updateParameters()}},Object.defineProperty(t.prototype,"isSupported",{get:function(){var i=this.getEffect();return!i||i.isSupported},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurves",{get:function(){return this.imageProcessingConfiguration.colorCurves},set:function(i){this.imageProcessingConfiguration.colorCurves=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(i){this.imageProcessingConfiguration.colorCurvesEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingTexture",{get:function(){return this.imageProcessingConfiguration.colorGradingTexture},set:function(i){this.imageProcessingConfiguration.colorGradingTexture=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(i){this.imageProcessingConfiguration.colorGradingEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"exposure",{get:function(){return this.imageProcessingConfiguration.exposure},set:function(i){this.imageProcessingConfiguration.exposure=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(i){this._imageProcessingConfiguration.toneMappingEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toneMappingType",{get:function(){return this._imageProcessingConfiguration.toneMappingType},set:function(i){this._imageProcessingConfiguration.toneMappingType=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"contrast",{get:function(){return this.imageProcessingConfiguration.contrast},set:function(i){this.imageProcessingConfiguration.contrast=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteStretch",{get:function(){return this.imageProcessingConfiguration.vignetteStretch},set:function(i){this.imageProcessingConfiguration.vignetteStretch=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreX",{get:function(){return this.imageProcessingConfiguration.vignetteCentreX},set:function(i){this.imageProcessingConfiguration.vignetteCentreX=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCentreY",{get:function(){return this.imageProcessingConfiguration.vignetteCentreY},set:function(i){this.imageProcessingConfiguration.vignetteCentreY=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteWeight",{get:function(){return this.imageProcessingConfiguration.vignetteWeight},set:function(i){this.imageProcessingConfiguration.vignetteWeight=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteColor",{get:function(){return this.imageProcessingConfiguration.vignetteColor},set:function(i){this.imageProcessingConfiguration.vignetteColor=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteCameraFov",{get:function(){return this.imageProcessingConfiguration.vignetteCameraFov},set:function(i){this.imageProcessingConfiguration.vignetteCameraFov=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteBlendMode",{get:function(){return this.imageProcessingConfiguration.vignetteBlendMode},set:function(i){this.imageProcessingConfiguration.vignetteBlendMode=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vignetteEnabled",{get:function(){return this.imageProcessingConfiguration.vignetteEnabled},set:function(i){this.imageProcessingConfiguration.vignetteEnabled=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fromLinearSpace",{get:function(){return this._fromLinearSpace},set:function(i){this._fromLinearSpace!==i&&(this._fromLinearSpace=i,this._updateParameters())},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"ImageProcessingPostProcess"},t.prototype._updateParameters=function(){this._defines.FROMLINEARSPACE=this._fromLinearSpace,this.imageProcessingConfiguration.prepareDefines(this._defines,!0);var i="";for(var n in this._defines)this._defines[n]&&(i+="#define "+n+`;\r
`);var a=["textureSampler"],l=["scale"];E.a&&(E.a.PrepareSamplers(a,this._defines),E.a.PrepareUniforms(l,this._defines)),this.updateEffect(i,l,a)},t.prototype.dispose=function(i){e.prototype.dispose.call(this,i),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),this._imageProcessingConfiguration&&(this.imageProcessingConfiguration.applyByPostProcess=!1)},Object(f.c)([Object(o.c)()],t.prototype,"_fromLinearSpace",void 0),t}(v.a)},521:function($,W,s){"use strict";s.d(W,"a",function(){return p});var f=s(436),o=s(450),E=s(513),v=s(515),c=s(441),O=function(){function r(e,t,i,n){this.name=e,this.worldAxisForNormal=t,this.worldAxisForFileX=i,this.worldAxisForFileY=n}return r}(),p=function(){function r(){}return r.ConvertCubeMapTextureToSphericalPolynomial=function(e){var t=this,i;if(!e.isCube)return null;(i=e.getScene())===null||i===void 0||i.getEngine().flushFramebuffer();var n=e.getSize().width,a=e.readPixels(0,void 0,void 0,!1),l=e.readPixels(1,void 0,void 0,!1),h,u;e.isRenderTarget?(h=e.readPixels(3,void 0,void 0,!1),u=e.readPixels(2,void 0,void 0,!1)):(h=e.readPixels(2,void 0,void 0,!1),u=e.readPixels(3,void 0,void 0,!1));var g=e.readPixels(4,void 0,void 0,!1),A=e.readPixels(5,void 0,void 0,!1),R=e.gammaSpace,S=5,P=0;return(e.textureType==1||e.textureType==2)&&(P=1),new Promise(function(D,L){Promise.all([l,a,h,u,g,A]).then(function(U){var F=U[0],V=U[1],I=U[2],x=U[3],_=U[4],j=U[5],G={size:n,right:V,left:F,up:I,down:x,front:_,back:j,format:S,type:P,gammaSpace:R};D(t.ConvertCubeMapToSphericalPolynomial(G))})})},r.ConvertCubeMapToSphericalPolynomial=function(e){for(var t=new E.a,i=0,n=2/e.size,a=n,l=n*.5-1,h=0;h<6;h++)for(var u=this.FileFaces[h],g=e[u.name],A=l,R=e.format===5?4:3,S=0;S<e.size;S++){for(var P=l,D=0;D<e.size;D++){var L=u.worldAxisForFileX.scale(P).add(u.worldAxisForFileY.scale(A)).add(u.worldAxisForNormal);L.normalize();var U=Math.pow(1+P*P+A*A,-3/2),F=g[S*e.size*R+D*R+0],V=g[S*e.size*R+D*R+1],I=g[S*e.size*R+D*R+2];isNaN(F)&&(F=0),isNaN(V)&&(V=0),isNaN(I)&&(I=0),e.type===0&&(F/=255,V/=255,I/=255),e.gammaSpace&&(F=Math.pow(o.a.Clamp(F),v.c),V=Math.pow(o.a.Clamp(V),v.c),I=Math.pow(o.a.Clamp(I),v.c));var x=4096;F=o.a.Clamp(F,0,x),V=o.a.Clamp(V,0,x),I=o.a.Clamp(I,0,x);var _=new c.a(F,V,I);t.addLight(L,_,U),i+=U,P+=n}A+=a}var j=4*Math.PI,G=6,y=j*G/6,Y=y/i;return t.scaleInPlace(Y),t.convertIncidentRadianceToIrradiance(),t.convertIrradianceToLambertianRadiance(),E.b.FromHarmonics(t)},r.FileFaces=[new O("right",new f.e(1,0,0),new f.e(0,0,-1),new f.e(0,-1,0)),new O("left",new f.e(-1,0,0),new f.e(0,0,1),new f.e(0,-1,0)),new O("up",new f.e(0,1,0),new f.e(1,0,0),new f.e(0,0,1)),new O("down",new f.e(0,-1,0),new f.e(1,0,0),new f.e(0,0,-1)),new O("front",new f.e(0,0,1),new f.e(1,0,0),new f.e(0,-1,0)),new O("back",new f.e(0,0,-1),new f.e(-1,0,0),new f.e(0,-1,0))],r}()},522:function($,W,s){"use strict";var f=s(434),o=s(456),E=s(440),v=s(467);v.a.prototype.createRenderTargetCubeTexture=function(c,O){var p=Object(f.a)({generateMipMaps:!0,generateDepthBuffer:!0,generateStencilBuffer:!1,type:0,samplingMode:3,format:5},O);p.generateStencilBuffer=p.generateDepthBuffer&&p.generateStencilBuffer,(p.type===1&&!this._caps.textureFloatLinearFiltering||p.type===2&&!this._caps.textureHalfFloatLinearFiltering)&&(p.samplingMode=1);var r=this._gl,e=new o.a(this,o.b.RenderTarget);this._bindTextureDirectly(r.TEXTURE_CUBE_MAP,e,!0);var t=this._getSamplingParameters(p.samplingMode,p.generateMipMaps);p.type===1&&!this._caps.textureFloat&&(p.type=0,E.a.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAG_FILTER,t.mag),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MIN_FILTER,t.min),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);for(var i=0;i<6;i++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this._getRGBABufferInternalSizedFormat(p.type,p.format),c,c,0,this._getInternalFormat(p.format),this._getWebGLTextureType(p.type),null);var n=r.createFramebuffer();return this._bindUnboundFramebuffer(n),e._depthStencilBuffer=this._setupFramebufferDepthAttachments(p.generateStencilBuffer,p.generateDepthBuffer,c,c),p.generateMipMaps&&r.generateMipmap(r.TEXTURE_CUBE_MAP),this._bindTextureDirectly(r.TEXTURE_CUBE_MAP,null),this._bindUnboundFramebuffer(null),e._framebuffer=n,e.width=c,e.height=c,e.isReady=!0,e.isCube=!0,e.samples=1,e.generateMipMaps=p.generateMipMaps,e.samplingMode=p.samplingMode,e.type=p.type,e.format=p.format,e._generateDepthBuffer=p.generateDepthBuffer,e._generateStencilBuffer=p.generateStencilBuffer,this._internalTexturesCache.push(e),e}},523:function($,W,s){"use strict";var f=s(521),o=s(477);Object.defineProperty(o.a.prototype,"sphericalPolynomial",{get:function(){var E=this;if(this._texture){if(this._texture._sphericalPolynomial||this._texture._sphericalPolynomialComputed)return this._texture._sphericalPolynomial;if(this._texture.isReady)return this._texture._sphericalPolynomialPromise||(this._texture._sphericalPolynomialPromise=f.a.ConvertCubeMapTextureToSphericalPolynomial(this),this._texture._sphericalPolynomialPromise===null?this._texture._sphericalPolynomialComputed=!0:this._texture._sphericalPolynomialPromise.then(function(v){E._texture._sphericalPolynomial=v,E._texture._sphericalPolynomialComputed=!0})),null}return null},set:function(E){this._texture&&(this._texture._sphericalPolynomial=E)},enumerable:!0,configurable:!0})},529:function($,W,s){"use strict";s.d(W,"b",function(){return Be}),s.d(W,"a",function(){return Bt});var f=s(434),o=s(439),E=s(440),v=s(490),c=s(514),O=s(449),p=s(436),r=s(447),e=s(626),t=s(480),i=s(454),n=function(){function z(C){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.direction=new p.d(1,0),this._texture=null,this.texture=null,this._internalMarkAllSubMeshesAsTexturesDirty=C}return z.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},z.prototype.isReadyForSubMesh=function(C,d){return!(C._areTexturesDirty&&d.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&!this._texture.isReadyOrNotBlocking())},z.prototype.prepareDefines=function(C,d,T){this._isEnabled?(C.ANISOTROPIC=this._isEnabled,this._isEnabled&&!d.isVerticesDataPresent(r.b.TangentKind)&&(C._needUVs=!0,C.MAINUV1=!0),C._areTexturesDirty&&T.texturesEnabled&&(this._texture&&t.a.AnisotropicTextureEnabled?i.a.PrepareDefinesForMergedUV(this._texture,C,"ANISOTROPIC_TEXTURE"):C.ANISOTROPIC_TEXTURE=!1)):(C.ANISOTROPIC=!1,C.ANISOTROPIC_TEXTURE=!1)},z.prototype.bindForSubMesh=function(C,d,T){(!C.useUbo||!T||!C.isSync)&&(this._texture&&t.a.AnisotropicTextureEnabled&&(C.updateFloat2("vAnisotropyInfos",this._texture.coordinatesIndex,this._texture.level),i.a.BindTextureMatrix(this._texture,C,"anisotropy")),C.updateFloat3("vAnisotropy",this.direction.x,this.direction.y,this.intensity)),d.texturesEnabled&&this._texture&&t.a.AnisotropicTextureEnabled&&C.setTexture("anisotropySampler",this._texture)},z.prototype.hasTexture=function(C){return this._texture===C},z.prototype.getActiveTextures=function(C){this._texture&&C.push(this._texture)},z.prototype.getAnimatables=function(C){this._texture&&this._texture.animations&&this._texture.animations.length>0&&C.push(this._texture)},z.prototype.dispose=function(C){C&&this._texture&&this._texture.dispose()},z.prototype.getClassName=function(){return"PBRAnisotropicConfiguration"},z.AddFallbacks=function(C,d,T){return C.ANISOTROPIC&&d.addFallback(T++,"ANISOTROPIC"),T},z.AddUniforms=function(C){C.push("vAnisotropy","vAnisotropyInfos","anisotropyMatrix")},z.PrepareUniformBuffer=function(C){C.addUniform("vAnisotropy",3),C.addUniform("vAnisotropyInfos",2),C.addUniform("anisotropyMatrix",16)},z.AddSamplers=function(C){C.push("anisotropySampler")},z.prototype.copyTo=function(C){o.a.Clone(function(){return C},this)},z.prototype.serialize=function(){return o.a.Serialize(this)},z.prototype.parse=function(C,d,T){var H=this;o.a.Parse(function(){return H},C,d,T)},Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isEnabled",void 0),Object(f.c)([Object(o.c)()],z.prototype,"intensity",void 0),Object(f.c)([Object(o.n)()],z.prototype,"direction",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"texture",void 0),z}(),a=function(){function z(C){this._useEnergyConservation=z.DEFAULT_USE_ENERGY_CONSERVATION,this.useEnergyConservation=z.DEFAULT_USE_ENERGY_CONSERVATION,this._useSmithVisibilityHeightCorrelated=z.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this.useSmithVisibilityHeightCorrelated=z.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED,this._useSphericalHarmonics=z.DEFAULT_USE_SPHERICAL_HARMONICS,this.useSphericalHarmonics=z.DEFAULT_USE_SPHERICAL_HARMONICS,this._useSpecularGlossinessInputEnergyConservation=z.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this.useSpecularGlossinessInputEnergyConservation=z.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION,this._internalMarkAllSubMeshesAsMiscDirty=C}return z.prototype._markAllSubMeshesAsMiscDirty=function(){this._internalMarkAllSubMeshesAsMiscDirty()},z.prototype.prepareDefines=function(C){C.BRDF_V_HEIGHT_CORRELATED=this._useSmithVisibilityHeightCorrelated,C.MS_BRDF_ENERGY_CONSERVATION=this._useEnergyConservation&&this._useSmithVisibilityHeightCorrelated,C.SPHERICAL_HARMONICS=this._useSphericalHarmonics,C.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=this._useSpecularGlossinessInputEnergyConservation},z.prototype.getClassName=function(){return"PBRBRDFConfiguration"},z.prototype.copyTo=function(C){o.a.Clone(function(){return C},this)},z.prototype.serialize=function(){return o.a.Serialize(this)},z.prototype.parse=function(C,d,T){var H=this;o.a.Parse(function(){return H},C,d,T)},z.DEFAULT_USE_ENERGY_CONSERVATION=!0,z.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED=!0,z.DEFAULT_USE_SPHERICAL_HARMONICS=!0,z.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION=!0,Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useEnergyConservation",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useSmithVisibilityHeightCorrelated",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useSphericalHarmonics",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],z.prototype,"useSpecularGlossinessInputEnergyConservation",void 0),z}(),l=s(441),h=function(){function z(C){this._isEnabled=!1,this.isEnabled=!1,this._linkSheenWithAlbedo=!1,this.linkSheenWithAlbedo=!1,this.intensity=1,this.color=l.a.White(),this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._roughness=null,this.roughness=null,this._textureRoughness=null,this.textureRoughness=null,this._albedoScaling=!1,this.albedoScaling=!1,this._internalMarkAllSubMeshesAsTexturesDirty=C}return z.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},z.prototype.isReadyForSubMesh=function(C,d){return!(C._areTexturesDirty&&d.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&t.a.SheenTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()))},z.prototype.prepareDefines=function(C,d){var T;this._isEnabled?(C.SHEEN=this._isEnabled,C.SHEEN_LINKWITHALBEDO=this._linkSheenWithAlbedo,C.SHEEN_ROUGHNESS=this._roughness!==null,C.SHEEN_ALBEDOSCALING=this._albedoScaling,C.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,C.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((T=this._textureRoughness)===null||T===void 0?void 0:T._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),C._areTexturesDirty&&d.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled?i.a.PrepareDefinesForMergedUV(this._texture,C,"SHEEN_TEXTURE"):C.SHEEN_TEXTURE=!1,this._textureRoughness&&t.a.SheenTextureEnabled?i.a.PrepareDefinesForMergedUV(this._textureRoughness,C,"SHEEN_TEXTURE_ROUGHNESS"):C.SHEEN_TEXTURE_ROUGHNESS=!1)):(C.SHEEN=!1,C.SHEEN_TEXTURE=!1,C.SHEEN_TEXTURE_ROUGHNESS=!1,C.SHEEN_LINKWITHALBEDO=!1,C.SHEEN_ROUGHNESS=!1,C.SHEEN_ALBEDOSCALING=!1,C.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,C.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1)},z.prototype.bindForSubMesh=function(C,d,T,H){var re,he,ne,Ae,ie,k,de,ve,Re=H._materialDefines,ce=Re.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL;(!C.useUbo||!T||!C.isSync)&&(ce&&t.a.SheenTextureEnabled?(C.updateFloat4("vSheenInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),i.a.BindTextureMatrix(this._texture,C,"sheen")):(this._texture||this._textureRoughness)&&t.a.SheenTextureEnabled&&(C.updateFloat4("vSheenInfos",(he=(re=this._texture)===null||re===void 0?void 0:re.coordinatesIndex)!==null&&he!==void 0?he:0,(Ae=(ne=this._texture)===null||ne===void 0?void 0:ne.level)!==null&&Ae!==void 0?Ae:0,(k=(ie=this._textureRoughness)===null||ie===void 0?void 0:ie.coordinatesIndex)!==null&&k!==void 0?k:0,(ve=(de=this._textureRoughness)===null||de===void 0?void 0:de.level)!==null&&ve!==void 0?ve:0),this._texture&&i.a.BindTextureMatrix(this._texture,C,"sheen"),this._textureRoughness&&!ce&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&i.a.BindTextureMatrix(this._textureRoughness,C,"sheenRoughness")),C.updateFloat4("vSheenColor",this.color.r,this.color.g,this.color.b,this.intensity),this._roughness!==null&&C.updateFloat("vSheenRoughness",this._roughness)),d.texturesEnabled&&(this._texture&&t.a.SheenTextureEnabled&&C.setTexture("sheenSampler",this._texture),this._textureRoughness&&!ce&&!Re.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE&&t.a.SheenTextureEnabled&&C.setTexture("sheenRoughnessSampler",this._textureRoughness))},z.prototype.hasTexture=function(C){return this._texture===C||this._textureRoughness===C},z.prototype.getActiveTextures=function(C){this._texture&&C.push(this._texture),this._textureRoughness&&C.push(this._textureRoughness)},z.prototype.getAnimatables=function(C){this._texture&&this._texture.animations&&this._texture.animations.length>0&&C.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&C.push(this._textureRoughness)},z.prototype.dispose=function(C){var d,T;C&&((d=this._texture)===null||d===void 0||d.dispose(),(T=this._textureRoughness)===null||T===void 0||T.dispose())},z.prototype.getClassName=function(){return"PBRSheenConfiguration"},z.AddFallbacks=function(C,d,T){return C.SHEEN&&d.addFallback(T++,"SHEEN"),T},z.AddUniforms=function(C){C.push("vSheenColor","vSheenRoughness","vSheenInfos","sheenMatrix","sheenRoughnessMatrix")},z.PrepareUniformBuffer=function(C){C.addUniform("vSheenColor",4),C.addUniform("vSheenRoughness",1),C.addUniform("vSheenInfos",4),C.addUniform("sheenMatrix",16),C.addUniform("sheenRoughnessMatrix",16)},z.AddSamplers=function(C){C.push("sheenSampler"),C.push("sheenRoughnessSampler")},z.prototype.copyTo=function(C){o.a.Clone(function(){return C},this)},z.prototype.serialize=function(){return o.a.Serialize(this)},z.prototype.parse=function(C,d,T){var H=this;o.a.Parse(function(){return H},C,d,T)},Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isEnabled",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"linkSheenWithAlbedo",void 0),Object(f.c)([Object(o.c)()],z.prototype,"intensity",void 0),Object(f.c)([Object(o.e)()],z.prototype,"color",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"texture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"roughness",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"textureRoughness",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"albedoScaling",void 0),z}(),u=s(450),g=function(){function z(C,d,T){this._isRefractionEnabled=!1,this.isRefractionEnabled=!1,this._isTranslucencyEnabled=!1,this.isTranslucencyEnabled=!1,this._isScatteringEnabled=!1,this.isScatteringEnabled=!1,this._scatteringDiffusionProfileIndex=0,this.refractionIntensity=1,this.translucencyIntensity=1,this.useAlbedoToTintRefraction=!1,this._thicknessTexture=null,this.thicknessTexture=null,this._refractionTexture=null,this.refractionTexture=null,this._indexOfRefraction=1.5,this.indexOfRefraction=1.5,this._volumeIndexOfRefraction=-1,this._invertRefractionY=!1,this.invertRefractionY=!1,this._linkRefractionWithTransparency=!1,this.linkRefractionWithTransparency=!1,this.minimumThickness=0,this.maximumThickness=1,this.tintColor=l.a.White(),this.tintColorAtDistance=1,this.diffusionDistance=l.a.White(),this._useMaskFromThicknessTexture=!1,this.useMaskFromThicknessTexture=!1,this._useMaskFromThicknessTextureGltf=!1,this.useMaskFromThicknessTextureGltf=!1,this._internalMarkAllSubMeshesAsTexturesDirty=C,this._internalMarkScenePrePassDirty=d,this._scene=T}return Object.defineProperty(z.prototype,"scatteringDiffusionProfile",{get:function(){return this._scene.subSurfaceConfiguration?this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex]:null},set:function(C){!this._scene.enableSubSurfaceForPrePass()||C&&(this._scatteringDiffusionProfileIndex=this._scene.subSurfaceConfiguration.addDiffusionProfile(C))},enumerable:!1,configurable:!0}),Object.defineProperty(z.prototype,"volumeIndexOfRefraction",{get:function(){return this._volumeIndexOfRefraction>=1?this._volumeIndexOfRefraction:this._indexOfRefraction},set:function(C){C>=1?this._volumeIndexOfRefraction=C:this._volumeIndexOfRefraction=-1},enumerable:!1,configurable:!0}),z.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},z.prototype._markScenePrePassDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty(),this._internalMarkScenePrePassDirty()},z.prototype.isReadyForSubMesh=function(C,d){if(C._areTexturesDirty&&d.texturesEnabled){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&!this._thicknessTexture.isReadyOrNotBlocking())return!1;var T=this._getRefractionTexture(d);if(T&&t.a.RefractionTextureEnabled&&!T.isReadyOrNotBlocking())return!1}return!0},z.prototype.prepareDefines=function(C,d){if(C._areTexturesDirty&&(C.SUBSURFACE=!1,C.SS_TRANSLUCENCY=this._isTranslucencyEnabled,C.SS_SCATTERING=this._isScatteringEnabled,C.SS_THICKNESSANDMASK_TEXTURE=!1,C.SS_MASK_FROM_THICKNESS_TEXTURE=!1,C.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,C.SS_REFRACTION=!1,C.SS_REFRACTIONMAP_3D=!1,C.SS_GAMMAREFRACTION=!1,C.SS_RGBDREFRACTION=!1,C.SS_LINEARSPECULARREFRACTION=!1,C.SS_REFRACTIONMAP_OPPOSITEZ=!1,C.SS_LODINREFRACTIONALPHA=!1,C.SS_LINKREFRACTIONTOTRANSPARENCY=!1,C.SS_ALBEDOFORREFRACTIONTINT=!1,(this._isRefractionEnabled||this._isTranslucencyEnabled||this._isScatteringEnabled)&&(C.SUBSURFACE=!0,C._areTexturesDirty&&d.texturesEnabled&&this._thicknessTexture&&t.a.ThicknessTextureEnabled&&i.a.PrepareDefinesForMergedUV(this._thicknessTexture,C,"SS_THICKNESSANDMASK_TEXTURE"),C.SS_MASK_FROM_THICKNESS_TEXTURE=this._useMaskFromThicknessTexture,C.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=this._useMaskFromThicknessTextureGltf),this._isRefractionEnabled&&d.texturesEnabled)){var T=this._getRefractionTexture(d);T&&t.a.RefractionTextureEnabled&&(C.SS_REFRACTION=!0,C.SS_REFRACTIONMAP_3D=T.isCube,C.SS_GAMMAREFRACTION=T.gammaSpace,C.SS_RGBDREFRACTION=T.isRGBD,C.SS_LINEARSPECULARREFRACTION=T.linearSpecularLOD,C.SS_REFRACTIONMAP_OPPOSITEZ=T.invertZ,C.SS_LODINREFRACTIONALPHA=T.lodLevelInAlpha,C.SS_LINKREFRACTIONTOTRANSPARENCY=this._linkRefractionWithTransparency,C.SS_ALBEDOFORREFRACTIONTINT=this.useAlbedoToTintRefraction)}},z.prototype.bindForSubMesh=function(C,d,T,H,re,he){var ne=this._getRefractionTexture(d);if(!C.useUbo||!H||!C.isSync){if(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&(C.updateFloat2("vThicknessInfos",this._thicknessTexture.coordinatesIndex,this._thicknessTexture.level),i.a.BindTextureMatrix(this._thicknessTexture,C,"thickness")),C.updateFloat2("vThicknessParam",this.minimumThickness,this.maximumThickness-this.minimumThickness),ne&&t.a.RefractionTextureEnabled){C.updateMatrix("refractionMatrix",ne.getReflectionTextureMatrix());var Ae=1;ne.isCube||ne.depth&&(Ae=ne.depth);var ie=ne.getSize().width,k=this.volumeIndexOfRefraction;C.updateFloat4("vRefractionInfos",ne.level,1/k,Ae,this._invertRefractionY?-1:1),C.updateFloat3("vRefractionMicrosurfaceInfos",ie,ne.lodGenerationScale,ne.lodGenerationOffset),he&&C.updateFloat2("vRefractionFilteringInfo",ie,u.a.Log2(ie))}this.isScatteringEnabled&&C.updateFloat("scatteringDiffusionProfile",this._scatteringDiffusionProfileIndex),C.updateColor3("vDiffusionDistance",this.diffusionDistance),C.updateFloat4("vTintColor",this.tintColor.r,this.tintColor.g,this.tintColor.b,this.tintColorAtDistance),C.updateFloat3("vSubSurfaceIntensity",this.refractionIntensity,this.translucencyIntensity,0)}d.texturesEnabled&&(this._thicknessTexture&&t.a.ThicknessTextureEnabled&&C.setTexture("thicknessSampler",this._thicknessTexture),ne&&t.a.RefractionTextureEnabled&&(re?C.setTexture("refractionSampler",ne):(C.setTexture("refractionSampler",ne._lodTextureMid||ne),C.setTexture("refractionSamplerLow",ne._lodTextureLow||ne),C.setTexture("refractionSamplerHigh",ne._lodTextureHigh||ne))))},z.prototype.unbind=function(C){return this._refractionTexture&&this._refractionTexture.isRenderTarget?(C.setTexture("refractionSampler",null),!0):!1},z.prototype._getRefractionTexture=function(C){return this._refractionTexture?this._refractionTexture:this._isRefractionEnabled?C.environmentTexture:null},Object.defineProperty(z.prototype,"disableAlphaBlending",{get:function(){return this.isRefractionEnabled&&this._linkRefractionWithTransparency},enumerable:!1,configurable:!0}),z.prototype.fillRenderTargetTextures=function(C){t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget&&C.push(this._refractionTexture)},z.prototype.hasTexture=function(C){return this._thicknessTexture===C||this._refractionTexture===C},z.prototype.hasRenderTargetTextures=function(){return!!(t.a.RefractionTextureEnabled&&this._refractionTexture&&this._refractionTexture.isRenderTarget)},z.prototype.getActiveTextures=function(C){this._thicknessTexture&&C.push(this._thicknessTexture),this._refractionTexture&&C.push(this._refractionTexture)},z.prototype.getAnimatables=function(C){this._thicknessTexture&&this._thicknessTexture.animations&&this._thicknessTexture.animations.length>0&&C.push(this._thicknessTexture),this._refractionTexture&&this._refractionTexture.animations&&this._refractionTexture.animations.length>0&&C.push(this._refractionTexture)},z.prototype.dispose=function(C){C&&(this._thicknessTexture&&this._thicknessTexture.dispose(),this._refractionTexture&&this._refractionTexture.dispose())},z.prototype.getClassName=function(){return"PBRSubSurfaceConfiguration"},z.AddFallbacks=function(C,d,T){return C.SS_SCATTERING&&d.addFallback(T++,"SS_SCATTERING"),C.SS_TRANSLUCENCY&&d.addFallback(T++,"SS_TRANSLUCENCY"),T},z.AddUniforms=function(C){C.push("vDiffusionDistance","vTintColor","vSubSurfaceIntensity","vRefractionMicrosurfaceInfos","vRefractionFilteringInfo","vRefractionInfos","vThicknessInfos","vThicknessParam","refractionMatrix","thicknessMatrix","scatteringDiffusionProfile")},z.AddSamplers=function(C){C.push("thicknessSampler","refractionSampler","refractionSamplerLow","refractionSamplerHigh")},z.PrepareUniformBuffer=function(C){C.addUniform("vRefractionMicrosurfaceInfos",3),C.addUniform("vRefractionFilteringInfo",2),C.addUniform("vRefractionInfos",4),C.addUniform("refractionMatrix",16),C.addUniform("vThicknessInfos",2),C.addUniform("thicknessMatrix",16),C.addUniform("vThicknessParam",2),C.addUniform("vDiffusionDistance",3),C.addUniform("vTintColor",4),C.addUniform("vSubSurfaceIntensity",3),C.addUniform("scatteringDiffusionProfile",1)},z.prototype.copyTo=function(C){o.a.Clone(function(){return C},this)},z.prototype.serialize=function(){return o.a.Serialize(this)},z.prototype.parse=function(C,d,T){var H=this;o.a.Parse(function(){return H},C,d,T)},Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isRefractionEnabled",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"isTranslucencyEnabled",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markScenePrePassDirty")],z.prototype,"isScatteringEnabled",void 0),Object(f.c)([Object(o.c)()],z.prototype,"_scatteringDiffusionProfileIndex",void 0),Object(f.c)([Object(o.c)()],z.prototype,"refractionIntensity",void 0),Object(f.c)([Object(o.c)()],z.prototype,"translucencyIntensity",void 0),Object(f.c)([Object(o.c)()],z.prototype,"useAlbedoToTintRefraction",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"thicknessTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"refractionTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(o.c)()],z.prototype,"_volumeIndexOfRefraction",void 0),Object(f.c)([Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"volumeIndexOfRefraction",null),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"invertRefractionY",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"linkRefractionWithTransparency",void 0),Object(f.c)([Object(o.c)()],z.prototype,"minimumThickness",void 0),Object(f.c)([Object(o.c)()],z.prototype,"maximumThickness",void 0),Object(f.c)([Object(o.e)()],z.prototype,"tintColor",void 0),Object(f.c)([Object(o.c)()],z.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(o.e)()],z.prototype,"diffusionDistance",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"useMaskFromThicknessTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],z.prototype,"useMaskFromThicknessTextureGltf",void 0),z}(),A=s(744),R=s(491),S=s(459),P=s(552),D=s(553),L=s(442),U=s(523),F=s(435),V=s(746),I="pbrFragmentDeclaration",x=`uniform vec4 vEyePosition;
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
`;F.a.IncludesShadersStore[I]=x;var _={name:I,shader:x},j=s(674),G=s(745),y="pbrUboDeclaration",Y=`layout(std140,column_major) uniform;





















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
`;F.a.IncludesShadersStore[y]=Y;var Z={name:y,shader:Y},fe="pbrFragmentExtraDeclaration",w=`
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
#endif`;F.a.IncludesShadersStore[fe]=w;var se={name:fe,shader:w},ee=s(650),te=s(651),le="pbrFragmentSamplersDeclaration",q=`#ifdef ALBEDO
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
#endif`;F.a.IncludesShadersStore[le]=q;var X={name:le,shader:q},ge=s(524),Ee=s(592),oe=s(558),me=s(597),ae=s(457),_e=s(627),ue=s(605),B="pbrHelperFunctions",m=`
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
#endif`;F.a.IncludesShadersStore[B]=m;var N={name:B,shader:m},M=s(525),Q=s(652),K="harmonicsFunctions",b=`#ifdef USESPHERICALFROMREFLECTIONMAP
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
#endif`;F.a.IncludesShadersStore[K]=b;var J={name:K,shader:b},pe="pbrDirectLightingSetupFunctions",Te=`
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
}`;F.a.IncludesShadersStore[pe]=Te;var Se={name:pe,shader:Te},Pe="pbrDirectLightingFalloffFunctions",Oe=`float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
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
}`;F.a.IncludesShadersStore[Pe]=Oe;var Le={name:Pe,shader:Oe},Ie=s(606),xe=s(607),Me="pbrDirectLightingFunctions",Ve=`#define CLEARCOATREFLECTANCE90 1.0

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
#endif`;F.a.IncludesShadersStore[Ge]=we;var Vt={name:Ge,shader:we},Gt=s(614),wt=s(615),Ht=s(653),He="pbrBlockAlbedoOpacity",je=`struct albedoOpacityOutParams
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
`;F.a.IncludesShadersStore[Xe]=Ye;var zt={name:Xe,shader:Ye},Ke="pbrBlockAlphaFresnel",ke=`#ifdef ALPHAFRESNEL
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
`;F.a.IncludesShadersStore[Ke]=ke;var Xt={name:Ke,shader:ke},Qe="pbrBlockAnisotropic",Ze=`#ifdef ANISOTROPIC
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
`;F.a.IncludesShadersStore[Qe]=Ze;var Yt={name:Qe,shader:Ze},Je="pbrBlockReflection",qe=`#ifdef REFLECTION
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
`;F.a.IncludesShadersStore[$e]=et;var kt={name:$e,shader:et},tt="pbrBlockClearcoat",nt=`struct clearcoatOutParams
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
`;F.a.IncludesShadersStore[tt]=nt;var Qt={name:tt,shader:nt},rt="pbrBlockSubSurface",it=`struct subSurfaceOutParams
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
`;F.a.IncludesShadersStore[rt]=it;var Zt={name:rt,shader:it},Jt=s(550),at="pbrBlockNormalGeometric",ot=`vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;F.a.IncludesShadersStore[at]=ot;var qt={name:at,shader:ot},$t=s(616),st="pbrBlockNormalFinal",lt=`#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
`;F.a.IncludesShadersStore[st]=lt;var en={name:st,shader:lt},tn=s(747),ft="pbrBlockLightmapInit",ct=`#ifdef LIGHTMAP
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
`;F.a.IncludesShadersStore[gt]=Et;var sn={name:gt,shader:Et},ln=s(654),_t="pbrBlockFinalLitComponents",Tt=`



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
`;F.a.IncludesShadersStore[_t]=Tt;var fn={name:_t,shader:Tt},At="pbrBlockFinalUnlitComponents",St=`
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
`;F.a.IncludesShadersStore[At]=St;var cn={name:At,shader:St},Rt="pbrBlockFinalColorComposition",Ct=`vec4 finalColor=vec4(
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
`;F.a.IncludesShadersStore[Rt]=Ct;var un={name:Rt,shader:Ct},dn=s(701),hn=s(655),Pt="pbrBlockImageProcessing",Ot=`#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)




finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#else

finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA

finalColor.rgb*=finalColor.a;
#endif
`;F.a.IncludesShadersStore[Pt]=Ot;var pn={name:Pt,shader:Ot},bt="pbrDebug",Mt=`#if DEBUGMODE>0
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
#endif`;F.a.IncludesShadersStore[yt]=Dt;var gn={name:yt,shader:Dt},En=s(487),_n=s(748),Tn=s(749),An=s(593),Sn=s(656),Rn=s(657),Cn=s(658),Pn=s(496),On=s(497),bn=s(507),Mn=s(508),In=s(488),xn=s(489),yn=s(750),Dn=s(675),Ln=s(551),Fn=s(702),Nn=s(659),Bn=s(703),Lt="pbrVertexShader",Ft=`precision highp float;
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
}`;F.a.ShadersStore[Lt]=Ft;var Un={name:Lt,shader:Ft},Nt=s(512),Fe=s(751),ye={effect:null,subMesh:null},Be=function(z){Object(f.d)(C,z);function C(){var d=z.call(this)||this;return d.PBR=!0,d.NUM_SAMPLES="0",d.REALTIME_FILTERING=!1,d.MAINUV1=!1,d.MAINUV2=!1,d.UV1=!1,d.UV2=!1,d.ALBEDO=!1,d.GAMMAALBEDO=!1,d.ALBEDODIRECTUV=0,d.VERTEXCOLOR=!1,d.DETAIL=!1,d.DETAILDIRECTUV=0,d.DETAIL_NORMALBLENDMETHOD=0,d.AMBIENT=!1,d.AMBIENTDIRECTUV=0,d.AMBIENTINGRAYSCALE=!1,d.OPACITY=!1,d.VERTEXALPHA=!1,d.OPACITYDIRECTUV=0,d.OPACITYRGB=!1,d.ALPHATEST=!1,d.DEPTHPREPASS=!1,d.ALPHABLEND=!1,d.ALPHAFROMALBEDO=!1,d.ALPHATESTVALUE="0.5",d.SPECULAROVERALPHA=!1,d.RADIANCEOVERALPHA=!1,d.ALPHAFRESNEL=!1,d.LINEARALPHAFRESNEL=!1,d.PREMULTIPLYALPHA=!1,d.EMISSIVE=!1,d.EMISSIVEDIRECTUV=0,d.REFLECTIVITY=!1,d.REFLECTIVITYDIRECTUV=0,d.SPECULARTERM=!1,d.MICROSURFACEFROMREFLECTIVITYMAP=!1,d.MICROSURFACEAUTOMATIC=!1,d.LODBASEDMICROSFURACE=!1,d.MICROSURFACEMAP=!1,d.MICROSURFACEMAPDIRECTUV=0,d.METALLICWORKFLOW=!1,d.ROUGHNESSSTOREINMETALMAPALPHA=!1,d.ROUGHNESSSTOREINMETALMAPGREEN=!1,d.METALLNESSSTOREINMETALMAPBLUE=!1,d.AOSTOREINMETALMAPRED=!1,d.METALLIC_REFLECTANCE=!1,d.METALLIC_REFLECTANCEDIRECTUV=0,d.ENVIRONMENTBRDF=!1,d.ENVIRONMENTBRDF_RGBD=!1,d.NORMAL=!1,d.TANGENT=!1,d.BUMP=!1,d.BUMPDIRECTUV=0,d.OBJECTSPACE_NORMALMAP=!1,d.PARALLAX=!1,d.PARALLAXOCCLUSION=!1,d.NORMALXYSCALE=!0,d.LIGHTMAP=!1,d.LIGHTMAPDIRECTUV=0,d.USELIGHTMAPASSHADOWMAP=!1,d.GAMMALIGHTMAP=!1,d.RGBDLIGHTMAP=!1,d.REFLECTION=!1,d.REFLECTIONMAP_3D=!1,d.REFLECTIONMAP_SPHERICAL=!1,d.REFLECTIONMAP_PLANAR=!1,d.REFLECTIONMAP_CUBIC=!1,d.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,d.REFLECTIONMAP_PROJECTION=!1,d.REFLECTIONMAP_SKYBOX=!1,d.REFLECTIONMAP_EXPLICIT=!1,d.REFLECTIONMAP_EQUIRECTANGULAR=!1,d.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,d.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,d.INVERTCUBICMAP=!1,d.USESPHERICALFROMREFLECTIONMAP=!1,d.USEIRRADIANCEMAP=!1,d.SPHERICAL_HARMONICS=!1,d.USESPHERICALINVERTEX=!1,d.REFLECTIONMAP_OPPOSITEZ=!1,d.LODINREFLECTIONALPHA=!1,d.GAMMAREFLECTION=!1,d.RGBDREFLECTION=!1,d.LINEARSPECULARREFLECTION=!1,d.RADIANCEOCCLUSION=!1,d.HORIZONOCCLUSION=!1,d.INSTANCES=!1,d.THIN_INSTANCES=!1,d.PREPASS=!1,d.PREPASS_IRRADIANCE=!1,d.PREPASS_IRRADIANCE_INDEX=-1,d.PREPASS_ALBEDO=!1,d.PREPASS_ALBEDO_INDEX=-1,d.PREPASS_DEPTH=!1,d.PREPASS_DEPTH_INDEX=-1,d.PREPASS_NORMAL=!1,d.PREPASS_NORMAL_INDEX=-1,d.PREPASS_POSITION=!1,d.PREPASS_POSITION_INDEX=-1,d.PREPASS_VELOCITY=!1,d.PREPASS_VELOCITY_INDEX=-1,d.PREPASS_REFLECTIVITY=!1,d.PREPASS_REFLECTIVITY_INDEX=-1,d.SCENE_MRT_COUNT=0,d.NUM_BONE_INFLUENCERS=0,d.BonesPerMesh=0,d.BONETEXTURE=!1,d.BONES_VELOCITY_ENABLED=!1,d.NONUNIFORMSCALING=!1,d.MORPHTARGETS=!1,d.MORPHTARGETS_NORMAL=!1,d.MORPHTARGETS_TANGENT=!1,d.MORPHTARGETS_UV=!1,d.NUM_MORPH_INFLUENCERS=0,d.MORPHTARGETS_TEXTURE=!1,d.IMAGEPROCESSING=!1,d.VIGNETTE=!1,d.VIGNETTEBLENDMODEMULTIPLY=!1,d.VIGNETTEBLENDMODEOPAQUE=!1,d.TONEMAPPING=!1,d.TONEMAPPING_ACES=!1,d.CONTRAST=!1,d.COLORCURVES=!1,d.COLORGRADING=!1,d.COLORGRADING3D=!1,d.SAMPLER3DGREENDEPTH=!1,d.SAMPLER3DBGRMAP=!1,d.IMAGEPROCESSINGPOSTPROCESS=!1,d.EXPOSURE=!1,d.MULTIVIEW=!1,d.USEPHYSICALLIGHTFALLOFF=!1,d.USEGLTFLIGHTFALLOFF=!1,d.TWOSIDEDLIGHTING=!1,d.SHADOWFLOAT=!1,d.CLIPPLANE=!1,d.CLIPPLANE2=!1,d.CLIPPLANE3=!1,d.CLIPPLANE4=!1,d.CLIPPLANE5=!1,d.CLIPPLANE6=!1,d.POINTSIZE=!1,d.FOG=!1,d.LOGARITHMICDEPTH=!1,d.FORCENORMALFORWARD=!1,d.SPECULARAA=!1,d.CLEARCOAT=!1,d.CLEARCOAT_DEFAULTIOR=!1,d.CLEARCOAT_TEXTURE=!1,d.CLEARCOAT_TEXTURE_ROUGHNESS=!1,d.CLEARCOAT_TEXTUREDIRECTUV=0,d.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV=0,d.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,d.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1,d.CLEARCOAT_BUMP=!1,d.CLEARCOAT_BUMPDIRECTUV=0,d.CLEARCOAT_REMAP_F0=!0,d.CLEARCOAT_TINT=!1,d.CLEARCOAT_TINT_TEXTURE=!1,d.CLEARCOAT_TINT_TEXTUREDIRECTUV=0,d.ANISOTROPIC=!1,d.ANISOTROPIC_TEXTURE=!1,d.ANISOTROPIC_TEXTUREDIRECTUV=0,d.BRDF_V_HEIGHT_CORRELATED=!1,d.MS_BRDF_ENERGY_CONSERVATION=!1,d.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION=!1,d.SHEEN=!1,d.SHEEN_TEXTURE=!1,d.SHEEN_TEXTURE_ROUGHNESS=!1,d.SHEEN_TEXTUREDIRECTUV=0,d.SHEEN_TEXTURE_ROUGHNESSDIRECTUV=0,d.SHEEN_LINKWITHALBEDO=!1,d.SHEEN_ROUGHNESS=!1,d.SHEEN_ALBEDOSCALING=!1,d.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,d.SHEEN_TEXTURE_ROUGHNESS_IDENTICAL=!1,d.SUBSURFACE=!1,d.SS_REFRACTION=!1,d.SS_TRANSLUCENCY=!1,d.SS_SCATTERING=!1,d.SS_THICKNESSANDMASK_TEXTURE=!1,d.SS_THICKNESSANDMASK_TEXTUREDIRECTUV=0,d.SS_REFRACTIONMAP_3D=!1,d.SS_REFRACTIONMAP_OPPOSITEZ=!1,d.SS_LODINREFRACTIONALPHA=!1,d.SS_GAMMAREFRACTION=!1,d.SS_RGBDREFRACTION=!1,d.SS_LINEARSPECULARREFRACTION=!1,d.SS_LINKREFRACTIONTOTRANSPARENCY=!1,d.SS_ALBEDOFORREFRACTIONTINT=!1,d.SS_MASK_FROM_THICKNESS_TEXTURE=!1,d.SS_MASK_FROM_THICKNESS_TEXTURE_GLTF=!1,d.UNLIT=!1,d.DEBUGMODE=0,d.rebuild(),d}return C.prototype.reset=function(){z.prototype.reset.call(this),this.ALPHATESTVALUE="0.5",this.PBR=!0},C}(P.a),Bt=function(z){Object(f.d)(C,z);function C(d,T){var H=z.call(this,d,T)||this;return H._directIntensity=1,H._emissiveIntensity=1,H._environmentIntensity=1,H._specularIntensity=1,H._lightingInfos=new p.f(H._directIntensity,H._emissiveIntensity,H._environmentIntensity,H._specularIntensity),H._disableBumpMap=!1,H._albedoTexture=null,H._ambientTexture=null,H._ambientTextureStrength=1,H._ambientTextureImpactOnAnalyticalLights=C.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,H._opacityTexture=null,H._reflectionTexture=null,H._emissiveTexture=null,H._reflectivityTexture=null,H._metallicTexture=null,H._metallic=null,H._roughness=null,H._metallicF0Factor=1,H._metallicReflectanceColor=l.a.White(),H._metallicReflectanceTexture=null,H._microSurfaceTexture=null,H._bumpTexture=null,H._lightmapTexture=null,H._ambientColor=new l.a(0,0,0),H._albedoColor=new l.a(1,1,1),H._reflectivityColor=new l.a(1,1,1),H._reflectionColor=new l.a(1,1,1),H._emissiveColor=new l.a(0,0,0),H._microSurface=.9,H._useLightmapAsShadowmap=!1,H._useHorizonOcclusion=!0,H._useRadianceOcclusion=!0,H._useAlphaFromAlbedoTexture=!1,H._useSpecularOverAlpha=!0,H._useMicroSurfaceFromReflectivityMapAlpha=!1,H._useRoughnessFromMetallicTextureAlpha=!0,H._useRoughnessFromMetallicTextureGreen=!1,H._useMetallnessFromMetallicTextureBlue=!1,H._useAmbientOcclusionFromMetallicTextureRed=!1,H._useAmbientInGrayScale=!1,H._useAutoMicroSurfaceFromReflectivityMap=!1,H._lightFalloff=C.LIGHTFALLOFF_PHYSICAL,H._useRadianceOverAlpha=!0,H._useObjectSpaceNormalMap=!1,H._useParallax=!1,H._useParallaxOcclusion=!1,H._parallaxScaleBias=.05,H._disableLighting=!1,H._maxSimultaneousLights=4,H._invertNormalMapX=!1,H._invertNormalMapY=!1,H._twoSidedLighting=!1,H._alphaCutOff=.4,H._forceAlphaTest=!1,H._useAlphaFresnel=!1,H._useLinearAlphaFresnel=!1,H._environmentBRDFTexture=null,H._forceIrradianceInFragment=!1,H._realTimeFiltering=!1,H._realTimeFilteringQuality=8,H._forceNormalForward=!1,H._enableSpecularAntiAliasing=!1,H._imageProcessingObserver=null,H._renderTargets=new v.a(16),H._globalAmbientColor=new l.a(0,0,0),H._useLogarithmicDepth=!1,H._unlit=!1,H._debugMode=0,H.debugMode=0,H.debugLimit=-1,H.debugFactor=1,H.clearCoat=new e.a(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.anisotropy=new n(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.brdf=new a(H._markAllSubMeshesAsMiscDirty.bind(H)),H.sheen=new h(H._markAllSubMeshesAsTexturesDirty.bind(H)),H.detailMap=new Fe.a(H._markAllSubMeshesAsTexturesDirty.bind(H)),H._rebuildInParallel=!1,H._attachImageProcessingConfiguration(null),H.getRenderTargetTextures=function(){return H._renderTargets.reset(),t.a.ReflectionTextureEnabled&&H._reflectionTexture&&H._reflectionTexture.isRenderTarget&&H._renderTargets.push(H._reflectionTexture),H.subSurface.fillRenderTargetTextures(H._renderTargets),H._renderTargets},H._environmentBRDFTexture=c.a.GetEnvironmentBRDFTexture(T),H.subSurface=new g(H._markAllSubMeshesAsTexturesDirty.bind(H),H._markScenePrePassDirty.bind(H),T),H.prePassConfiguration=new A.a,H}return Object.defineProperty(C.prototype,"realTimeFiltering",{get:function(){return this._realTimeFiltering},set:function(d){this._realTimeFiltering=d,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"realTimeFilteringQuality",{get:function(){return this._realTimeFilteringQuality},set:function(d){this._realTimeFilteringQuality=d,this.markAsDirty(1)},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"canRenderToMRT",{get:function(){return!0},enumerable:!1,configurable:!0}),C.prototype._attachImageProcessingConfiguration=function(d){var T=this;d!==this._imageProcessingConfiguration&&(this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),d?this._imageProcessingConfiguration=d:this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(function(){T._markAllSubMeshesAsImageProcessingDirty()})))},Object.defineProperty(C.prototype,"hasRenderTargetTextures",{get:function(){return t.a.ReflectionTextureEnabled&&this._reflectionTexture&&this._reflectionTexture.isRenderTarget?!0:this.subSurface.hasRenderTargetTextures()},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"isPrePassCapable",{get:function(){return!0},enumerable:!1,configurable:!0}),C.prototype.getClassName=function(){return"PBRBaseMaterial"},Object.defineProperty(C.prototype,"useLogarithmicDepth",{get:function(){return this._useLogarithmicDepth},set:function(d){this._useLogarithmicDepth=d&&this.getScene().getEngine().getCaps().fragmentDepthSupported},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"_disableAlphaBlending",{get:function(){return this.subSurface.disableAlphaBlending||this._transparencyMode===C.PBRMATERIAL_OPAQUE||this._transparencyMode===C.PBRMATERIAL_ALPHATEST},enumerable:!1,configurable:!0}),C.prototype.needAlphaBlending=function(){return this._disableAlphaBlending?!1:this.alpha<1||this._opacityTexture!=null||this._shouldUseAlphaFromAlbedoTexture()},C.prototype.needAlphaTesting=function(){return this._forceAlphaTest?!0:this.subSurface.disableAlphaBlending?!1:this._hasAlphaChannel()&&(this._transparencyMode==null||this._transparencyMode===C.PBRMATERIAL_ALPHATEST)},C.prototype._shouldUseAlphaFromAlbedoTexture=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha&&this._useAlphaFromAlbedoTexture&&this._transparencyMode!==C.PBRMATERIAL_OPAQUE},C.prototype._hasAlphaChannel=function(){return this._albedoTexture!=null&&this._albedoTexture.hasAlpha||this._opacityTexture!=null},C.prototype.getAlphaTestTexture=function(){return this._albedoTexture},C.prototype.isReadyForSubMesh=function(d,T,H){if(T.effect&&this.isFrozen&&T.effect._wasPreviouslyReady)return!0;T._materialDefines||(T._materialDefines=new Be);var re=T._materialDefines;if(this._isReadyForSubMesh(T))return!0;var he=this.getScene(),ne=he.getEngine();if(re._areTexturesDirty&&he.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&!this._albedoTexture.isReadyOrNotBlocking()||this._ambientTexture&&t.a.AmbientTextureEnabled&&!this._ambientTexture.isReadyOrNotBlocking()||this._opacityTexture&&t.a.OpacityTextureEnabled&&!this._opacityTexture.isReadyOrNotBlocking())return!1;var Ae=this._getReflectionTexture();if(Ae&&t.a.ReflectionTextureEnabled&&(!Ae.isReadyOrNotBlocking()||Ae.irradianceTexture&&!Ae.irradianceTexture.isReadyOrNotBlocking())||this._lightmapTexture&&t.a.LightmapTextureEnabled&&!this._lightmapTexture.isReadyOrNotBlocking()||this._emissiveTexture&&t.a.EmissiveTextureEnabled&&!this._emissiveTexture.isReadyOrNotBlocking())return!1;if(t.a.SpecularTextureEnabled){if(this._metallicTexture){if(!this._metallicTexture.isReadyOrNotBlocking())return!1}else if(this._reflectivityTexture&&!this._reflectivityTexture.isReadyOrNotBlocking())return!1;if(this._metallicReflectanceTexture&&!this._metallicReflectanceTexture.isReadyOrNotBlocking()||this._microSurfaceTexture&&!this._microSurfaceTexture.isReadyOrNotBlocking())return!1}if(ne.getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&!this._bumpTexture.isReady()||this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled&&!this._environmentBRDFTexture.isReady())return!1}if(!this.subSurface.isReadyForSubMesh(re,he)||!this.clearCoat.isReadyForSubMesh(re,he,ne,this._disableBumpMap)||!this.sheen.isReadyForSubMesh(re,he)||!this.anisotropy.isReadyForSubMesh(re,he)||!this.detailMap.isReadyForSubMesh(re,he)||re._areImageProcessingDirty&&this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.isReady())return!1;!ne.getCaps().standardDerivatives&&!d.isVerticesDataPresent(r.b.NormalKind)&&(d.createNormals(!0),E.a.Warn("PBRMaterial: Normals have been created for the mesh: "+d.name));var ie=T.effect,k=re._areLightsDisposed,de=this._prepareEffect(d,re,this.onCompiled,this.onError,H,null,T.getRenderingMesh().hasThinInstances);if(de)if(this._onEffectCreatedObservable&&(ye.effect=de,ye.subMesh=T,this._onEffectCreatedObservable.notifyObservers(ye)),this.allowShaderHotSwapping&&ie&&!de.isReady()){if(de=ie,this._rebuildInParallel=!0,re.markAsUnprocessed(),k)return re._areLightsDisposed=!0,!1}else this._rebuildInParallel=!1,he.resetCachedMaterial(),T.setEffect(de,re),this.buildUniformLayout();return!T.effect||!T.effect.isReady()?!1:(re._renderId=he.getRenderId(),T.effect._wasPreviouslyReady=!0,!0)},C.prototype.isMetallicWorkflow=function(){return!!(this._metallic!=null||this._roughness!=null||this._metallicTexture)},C.prototype._prepareEffect=function(d,T,H,re,he,ne,Ae){if(H===void 0&&(H=null),re===void 0&&(re=null),he===void 0&&(he=null),ne===void 0&&(ne=null),this._prepareDefines(d,T,he,ne,Ae),!T.isDirty)return null;T.markAsProcessed();var ie=this.getScene(),k=ie.getEngine(),de=new Nt.a,ve=0;T.USESPHERICALINVERTEX&&de.addFallback(ve++,"USESPHERICALINVERTEX"),T.FOG&&de.addFallback(ve,"FOG"),T.SPECULARAA&&de.addFallback(ve,"SPECULARAA"),T.POINTSIZE&&de.addFallback(ve,"POINTSIZE"),T.LOGARITHMICDEPTH&&de.addFallback(ve,"LOGARITHMICDEPTH"),T.PARALLAX&&de.addFallback(ve,"PARALLAX"),T.PARALLAXOCCLUSION&&de.addFallback(ve++,"PARALLAXOCCLUSION"),ve=n.AddFallbacks(T,de,ve),ve=n.AddFallbacks(T,de,ve),ve=g.AddFallbacks(T,de,ve),ve=h.AddFallbacks(T,de,ve),T.ENVIRONMENTBRDF&&de.addFallback(ve++,"ENVIRONMENTBRDF"),T.TANGENT&&de.addFallback(ve++,"TANGENT"),T.BUMP&&de.addFallback(ve++,"BUMP"),ve=i.a.HandleFallbacksForShadows(T,de,this._maxSimultaneousLights,ve++),T.SPECULARTERM&&de.addFallback(ve++,"SPECULARTERM"),T.USESPHERICALFROMREFLECTIONMAP&&de.addFallback(ve++,"USESPHERICALFROMREFLECTIONMAP"),T.USEIRRADIANCEMAP&&de.addFallback(ve++,"USEIRRADIANCEMAP"),T.LIGHTMAP&&de.addFallback(ve++,"LIGHTMAP"),T.NORMAL&&de.addFallback(ve++,"NORMAL"),T.AMBIENT&&de.addFallback(ve++,"AMBIENT"),T.EMISSIVE&&de.addFallback(ve++,"EMISSIVE"),T.VERTEXCOLOR&&de.addFallback(ve++,"VERTEXCOLOR"),T.MORPHTARGETS&&de.addFallback(ve++,"MORPHTARGETS"),T.MULTIVIEW&&de.addFallback(0,"MULTIVIEW");var Re=[r.b.PositionKind];T.NORMAL&&Re.push(r.b.NormalKind),T.TANGENT&&Re.push(r.b.TangentKind),T.UV1&&Re.push(r.b.UVKind),T.UV2&&Re.push(r.b.UV2Kind),T.VERTEXCOLOR&&Re.push(r.b.ColorKind),i.a.PrepareAttributesForBones(Re,d,T,de),i.a.PrepareAttributesForInstances(Re,T),i.a.PrepareAttributesForMorphTargets(Re,d,T);var ce="pbr",Ce=["world","view","viewProjection","vEyePosition","vLightsType","vAmbientColor","vAlbedoColor","vReflectivityColor","vMetallicReflectanceFactors","vEmissiveColor","visibility","vReflectionColor","vFogInfos","vFogColor","pointSize","vAlbedoInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vReflectionPosition","vReflectionSize","vEmissiveInfos","vReflectivityInfos","vReflectionFilteringInfo","vMetallicReflectanceInfos","vMicroSurfaceSamplerInfos","vBumpInfos","vLightmapInfos","mBones","vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","albedoMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","reflectivityMatrix","normalMatrix","microSurfaceSamplerMatrix","bumpMatrix","lightmapMatrix","metallicReflectanceMatrix","vLightingIntensity","logarithmicDepthConstant","vSphericalX","vSphericalY","vSphericalZ","vSphericalXX_ZZ","vSphericalYY_ZZ","vSphericalZZ","vSphericalXY","vSphericalYZ","vSphericalZX","vSphericalL00","vSphericalL1_1","vSphericalL10","vSphericalL11","vSphericalL2_2","vSphericalL2_1","vSphericalL20","vSphericalL21","vSphericalL22","vReflectionMicrosurfaceInfos","vTangentSpaceParams","boneTextureWidth","vDebugMode","morphTargetTextureInfo","morphTargetTextureIndices"],be=["albedoSampler","reflectivitySampler","ambientSampler","emissiveSampler","bumpSampler","lightmapSampler","opacitySampler","reflectionSampler","reflectionSamplerLow","reflectionSamplerHigh","irradianceSampler","microSurfaceSampler","environmentBrdfSampler","boneSampler","metallicReflectanceSampler","morphTargets"],De=["Material","Scene","Mesh"];Fe.a.AddUniforms(Ce),Fe.a.AddSamplers(be),g.AddUniforms(Ce),g.AddSamplers(be),e.a.AddUniforms(Ce),e.a.AddSamplers(be),n.AddUniforms(Ce),n.AddSamplers(be),h.AddUniforms(Ce),h.AddSamplers(be),A.a.AddUniforms(Ce),A.a.AddSamplers(Ce),R.a&&(R.a.PrepareUniforms(Ce,T),R.a.PrepareSamplers(be,T)),i.a.PrepareUniformsAndSamplersList({uniformsNames:Ce,uniformBuffersNames:De,samplers:be,defines:T,maxSimultaneousLights:this._maxSimultaneousLights});var Ne={};this.customShaderNameResolve&&(ce=this.customShaderNameResolve(ce,Ce,De,be,T,Re,Ne));var Ue=T.toString();return k.createEffect(ce,{attributes:Re,uniformsNames:Ce,uniformBuffersNames:De,samplers:be,defines:Ue,fallbacks:de,onCompiled:H,onError:re,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights,maxSimultaneousMorphTargets:T.NUM_MORPH_INFLUENCERS},processFinalCode:Ne.processFinalCode,multiTarget:T.PREPASS},k)},C.prototype._prepareDefines=function(d,T,H,re,he){H===void 0&&(H=null),re===void 0&&(re=null),he===void 0&&(he=!1);var ne=this.getScene(),Ae=ne.getEngine();if(i.a.PrepareDefinesForLights(ne,d,T,!0,this._maxSimultaneousLights,this._disableLighting),T._needNormals=!0,i.a.PrepareDefinesForMultiview(ne,T),i.a.PrepareDefinesForPrePass(ne,T,this.canRenderToMRT),T.METALLICWORKFLOW=this.isMetallicWorkflow(),T._areTexturesDirty){if(T._needUVs=!1,ne.texturesEnabled){ne.getEngine().getCaps().textureLOD&&(T.LODBASEDMICROSFURACE=!0),this._albedoTexture&&t.a.DiffuseTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._albedoTexture,T,"ALBEDO"),T.GAMMAALBEDO=this._albedoTexture.gammaSpace):T.ALBEDO=!1,this._ambientTexture&&t.a.AmbientTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._ambientTexture,T,"AMBIENT"),T.AMBIENTINGRAYSCALE=this._useAmbientInGrayScale):T.AMBIENT=!1,this._opacityTexture&&t.a.OpacityTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._opacityTexture,T,"OPACITY"),T.OPACITYRGB=this._opacityTexture.getAlphaFromRGB):T.OPACITY=!1;var ie=this._getReflectionTexture();if(ie&&t.a.ReflectionTextureEnabled){switch(T.REFLECTION=!0,T.GAMMAREFLECTION=ie.gammaSpace,T.RGBDREFLECTION=ie.isRGBD,T.REFLECTIONMAP_OPPOSITEZ=this.getScene().useRightHandedSystem?!ie.invertZ:ie.invertZ,T.LODINREFLECTIONALPHA=ie.lodLevelInAlpha,T.LINEARSPECULARREFLECTION=ie.linearSpecularLOD,this.realTimeFiltering&&this.realTimeFilteringQuality>0?(T.NUM_SAMPLES=""+this.realTimeFilteringQuality,Ae._features.needTypeSuffixInShaderConstants&&(T.NUM_SAMPLES=T.NUM_SAMPLES+"u"),T.REALTIME_FILTERING=!0):T.REALTIME_FILTERING=!1,ie.coordinatesMode===L.a.INVCUBIC_MODE&&(T.INVERTCUBICMAP=!0),T.REFLECTIONMAP_3D=ie.isCube,T.REFLECTIONMAP_CUBIC=!1,T.REFLECTIONMAP_EXPLICIT=!1,T.REFLECTIONMAP_PLANAR=!1,T.REFLECTIONMAP_PROJECTION=!1,T.REFLECTIONMAP_SKYBOX=!1,T.REFLECTIONMAP_SPHERICAL=!1,T.REFLECTIONMAP_EQUIRECTANGULAR=!1,T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,ie.coordinatesMode){case L.a.EXPLICIT_MODE:T.REFLECTIONMAP_EXPLICIT=!0;break;case L.a.PLANAR_MODE:T.REFLECTIONMAP_PLANAR=!0;break;case L.a.PROJECTION_MODE:T.REFLECTIONMAP_PROJECTION=!0;break;case L.a.SKYBOX_MODE:T.REFLECTIONMAP_SKYBOX=!0;break;case L.a.SPHERICAL_MODE:T.REFLECTIONMAP_SPHERICAL=!0;break;case L.a.EQUIRECTANGULAR_MODE:T.REFLECTIONMAP_EQUIRECTANGULAR=!0;break;case L.a.FIXED_EQUIRECTANGULAR_MODE:T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!0;break;case L.a.FIXED_EQUIRECTANGULAR_MIRRORED_MODE:T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!0;break;case L.a.CUBIC_MODE:case L.a.INVCUBIC_MODE:default:T.REFLECTIONMAP_CUBIC=!0,T.USE_LOCAL_REFLECTIONMAP_CUBIC=!!ie.boundingBoxSize;break}ie.coordinatesMode!==L.a.SKYBOX_MODE&&(ie.irradianceTexture?(T.USEIRRADIANCEMAP=!0,T.USESPHERICALFROMREFLECTIONMAP=!1):ie.isCube&&(T.USESPHERICALFROMREFLECTIONMAP=!0,T.USEIRRADIANCEMAP=!1,this._forceIrradianceInFragment||this.realTimeFiltering||ne.getEngine().getCaps().maxVaryingVectors<=8?T.USESPHERICALINVERTEX=!1:T.USESPHERICALINVERTEX=!0))}else T.REFLECTION=!1,T.REFLECTIONMAP_3D=!1,T.REFLECTIONMAP_SPHERICAL=!1,T.REFLECTIONMAP_PLANAR=!1,T.REFLECTIONMAP_CUBIC=!1,T.USE_LOCAL_REFLECTIONMAP_CUBIC=!1,T.REFLECTIONMAP_PROJECTION=!1,T.REFLECTIONMAP_SKYBOX=!1,T.REFLECTIONMAP_EXPLICIT=!1,T.REFLECTIONMAP_EQUIRECTANGULAR=!1,T.REFLECTIONMAP_EQUIRECTANGULAR_FIXED=!1,T.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED=!1,T.INVERTCUBICMAP=!1,T.USESPHERICALFROMREFLECTIONMAP=!1,T.USEIRRADIANCEMAP=!1,T.USESPHERICALINVERTEX=!1,T.REFLECTIONMAP_OPPOSITEZ=!1,T.LODINREFLECTIONALPHA=!1,T.GAMMAREFLECTION=!1,T.RGBDREFLECTION=!1,T.LINEARSPECULARREFLECTION=!1;this._lightmapTexture&&t.a.LightmapTextureEnabled?(i.a.PrepareDefinesForMergedUV(this._lightmapTexture,T,"LIGHTMAP"),T.USELIGHTMAPASSHADOWMAP=this._useLightmapAsShadowmap,T.GAMMALIGHTMAP=this._lightmapTexture.gammaSpace,T.RGBDLIGHTMAP=this._lightmapTexture.isRGBD):T.LIGHTMAP=!1,this._emissiveTexture&&t.a.EmissiveTextureEnabled?i.a.PrepareDefinesForMergedUV(this._emissiveTexture,T,"EMISSIVE"):T.EMISSIVE=!1,t.a.SpecularTextureEnabled?(this._metallicTexture?(i.a.PrepareDefinesForMergedUV(this._metallicTexture,T,"REFLECTIVITY"),T.ROUGHNESSSTOREINMETALMAPALPHA=this._useRoughnessFromMetallicTextureAlpha,T.ROUGHNESSSTOREINMETALMAPGREEN=!this._useRoughnessFromMetallicTextureAlpha&&this._useRoughnessFromMetallicTextureGreen,T.METALLNESSSTOREINMETALMAPBLUE=this._useMetallnessFromMetallicTextureBlue,T.AOSTOREINMETALMAPRED=this._useAmbientOcclusionFromMetallicTextureRed):this._reflectivityTexture?(i.a.PrepareDefinesForMergedUV(this._reflectivityTexture,T,"REFLECTIVITY"),T.MICROSURFACEFROMREFLECTIVITYMAP=this._useMicroSurfaceFromReflectivityMapAlpha,T.MICROSURFACEAUTOMATIC=this._useAutoMicroSurfaceFromReflectivityMap):T.REFLECTIVITY=!1,this._metallicReflectanceTexture?i.a.PrepareDefinesForMergedUV(this._metallicReflectanceTexture,T,"METALLIC_REFLECTANCE"):T.METALLIC_REFLECTANCE=!1,this._microSurfaceTexture?i.a.PrepareDefinesForMergedUV(this._microSurfaceTexture,T,"MICROSURFACEMAP"):T.MICROSURFACEMAP=!1):(T.REFLECTIVITY=!1,T.MICROSURFACEMAP=!1),ne.getEngine().getCaps().standardDerivatives&&this._bumpTexture&&t.a.BumpTextureEnabled&&!this._disableBumpMap?(i.a.PrepareDefinesForMergedUV(this._bumpTexture,T,"BUMP"),this._useParallax&&this._albedoTexture&&t.a.DiffuseTextureEnabled?(T.PARALLAX=!0,T.PARALLAXOCCLUSION=!!this._useParallaxOcclusion):T.PARALLAX=!1,T.OBJECTSPACE_NORMALMAP=this._useObjectSpaceNormalMap):T.BUMP=!1,this._environmentBRDFTexture&&t.a.ReflectionTextureEnabled?(T.ENVIRONMENTBRDF=!0,T.ENVIRONMENTBRDF_RGBD=this._environmentBRDFTexture.isRGBD):(T.ENVIRONMENTBRDF=!1,T.ENVIRONMENTBRDF_RGBD=!1),this._shouldUseAlphaFromAlbedoTexture()?T.ALPHAFROMALBEDO=!0:T.ALPHAFROMALBEDO=!1}T.SPECULAROVERALPHA=this._useSpecularOverAlpha,this._lightFalloff===C.LIGHTFALLOFF_STANDARD?(T.USEPHYSICALLIGHTFALLOFF=!1,T.USEGLTFLIGHTFALLOFF=!1):this._lightFalloff===C.LIGHTFALLOFF_GLTF?(T.USEPHYSICALLIGHTFALLOFF=!1,T.USEGLTFLIGHTFALLOFF=!0):(T.USEPHYSICALLIGHTFALLOFF=!0,T.USEGLTFLIGHTFALLOFF=!1),T.RADIANCEOVERALPHA=this._useRadianceOverAlpha,!this.backFaceCulling&&this._twoSidedLighting?T.TWOSIDEDLIGHTING=!0:T.TWOSIDEDLIGHTING=!1,T.SPECULARAA=ne.getEngine().getCaps().standardDerivatives&&this._enableSpecularAntiAliasing}(T._areTexturesDirty||T._areMiscDirty)&&(T.ALPHATESTVALUE=""+this._alphaCutOff+(this._alphaCutOff%1==0?".":""),T.PREMULTIPLYALPHA=this.alphaMode===7||this.alphaMode===8,T.ALPHABLEND=this.needAlphaBlendingForMesh(d),T.ALPHAFRESNEL=this._useAlphaFresnel||this._useLinearAlphaFresnel,T.LINEARALPHAFRESNEL=this._useLinearAlphaFresnel),T._areImageProcessingDirty&&this._imageProcessingConfiguration&&this._imageProcessingConfiguration.prepareDefines(T),T.FORCENORMALFORWARD=this._forceNormalForward,T.RADIANCEOCCLUSION=this._useRadianceOcclusion,T.HORIZONOCCLUSION=this._useHorizonOcclusion,T._areMiscDirty&&(i.a.PrepareDefinesForMisc(d,ne,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(d)||this._forceAlphaTest,T),T.UNLIT=this._unlit||(this.pointsCloud||this.wireframe)&&!d.isVerticesDataPresent(r.b.NormalKind),T.DEBUGMODE=this._debugMode),this.detailMap.prepareDefines(T,ne),this.subSurface.prepareDefines(T,ne),this.clearCoat.prepareDefines(T,ne),this.anisotropy.prepareDefines(T,d,ne),this.brdf.prepareDefines(T),this.sheen.prepareDefines(T,ne),i.a.PrepareDefinesForFrameBoundValues(ne,Ae,T,!!H,re,he),i.a.PrepareDefinesForAttributes(d,T,!0,!0,!0,this._transparencyMode!==C.PBRMATERIAL_OPAQUE)},C.prototype.forceCompilation=function(d,T,H){var re=this,he=Object(f.a)({clipPlane:!1,useInstances:!1},H),ne=new Be,Ae=this._prepareEffect(d,ne,void 0,void 0,he.useInstances,he.clipPlane,d.hasThinInstances);this._onEffectCreatedObservable&&(ye.effect=Ae,ye.subMesh=null,this._onEffectCreatedObservable.notifyObservers(ye)),Ae.isReady()?T&&T(this):Ae.onCompileObservable.add(function(){T&&T(re)})},C.prototype.buildUniformLayout=function(){var d=this._uniformBuffer;d.addUniform("vAlbedoInfos",2),d.addUniform("vAmbientInfos",4),d.addUniform("vOpacityInfos",2),d.addUniform("vEmissiveInfos",2),d.addUniform("vLightmapInfos",2),d.addUniform("vReflectivityInfos",3),d.addUniform("vMicroSurfaceSamplerInfos",2),d.addUniform("vReflectionInfos",2),d.addUniform("vReflectionFilteringInfo",2),d.addUniform("vReflectionPosition",3),d.addUniform("vReflectionSize",3),d.addUniform("vBumpInfos",3),d.addUniform("albedoMatrix",16),d.addUniform("ambientMatrix",16),d.addUniform("opacityMatrix",16),d.addUniform("emissiveMatrix",16),d.addUniform("lightmapMatrix",16),d.addUniform("reflectivityMatrix",16),d.addUniform("microSurfaceSamplerMatrix",16),d.addUniform("bumpMatrix",16),d.addUniform("vTangentSpaceParams",2),d.addUniform("reflectionMatrix",16),d.addUniform("vReflectionColor",3),d.addUniform("vAlbedoColor",4),d.addUniform("vLightingIntensity",4),d.addUniform("vReflectionMicrosurfaceInfos",3),d.addUniform("pointSize",1),d.addUniform("vReflectivityColor",4),d.addUniform("vEmissiveColor",3),d.addUniform("vAmbientColor",3),d.addUniform("vDebugMode",2),d.addUniform("vMetallicReflectanceFactors",4),d.addUniform("vMetallicReflectanceInfos",2),d.addUniform("metallicReflectanceMatrix",16),e.a.PrepareUniformBuffer(d),n.PrepareUniformBuffer(d),h.PrepareUniformBuffer(d),g.PrepareUniformBuffer(d),Fe.a.PrepareUniformBuffer(d),d.addUniform("vSphericalL00",3),d.addUniform("vSphericalL1_1",3),d.addUniform("vSphericalL10",3),d.addUniform("vSphericalL11",3),d.addUniform("vSphericalL2_2",3),d.addUniform("vSphericalL2_1",3),d.addUniform("vSphericalL20",3),d.addUniform("vSphericalL21",3),d.addUniform("vSphericalL22",3),d.addUniform("vSphericalX",3),d.addUniform("vSphericalY",3),d.addUniform("vSphericalZ",3),d.addUniform("vSphericalXX_ZZ",3),d.addUniform("vSphericalYY_ZZ",3),d.addUniform("vSphericalZZ",3),d.addUniform("vSphericalXY",3),d.addUniform("vSphericalYZ",3),d.addUniform("vSphericalZX",3),d.create()},C.prototype.unbind=function(){if(this._activeEffect){var d=!1;this._reflectionTexture&&this._reflectionTexture.isRenderTarget&&(this._activeEffect.setTexture("reflection2DSampler",null),d=!0),this.subSurface.unbind(this._activeEffect)&&(d=!0),d&&this._markAllSubMeshesAsTexturesDirty()}z.prototype.unbind.call(this)},C.prototype.bindForSubMesh=function(d,T,H){var re=this.getScene(),he=H._materialDefines;if(!!he){var ne=H.effect;if(!!ne){this._activeEffect=ne,T.getMeshUniformBuffer().bindToEffect(ne,"Mesh"),T.transferToEffect(d),this.prePassConfiguration.bindForSubMesh(this._activeEffect,re,T,d,this.isFrozen),he.OBJECTSPACE_NORMALMAP&&(d.toNormalMatrix(this._normalMatrix),this.bindOnlyNormalMatrix(this._normalMatrix));var Ae=this._mustRebind(re,ne,T.visibility);i.a.BindBonesParameters(T,this._activeEffect,this.prePassConfiguration);var ie=null,k=this._uniformBuffer;if(Ae){var de=re.getEngine();if(k.bindToEffect(ne,"Material"),this.bindViewProjection(ne),ie=this._getReflectionTexture(),!k.useUbo||!this.isFrozen||!k.isSync){if(re.texturesEnabled){if(this._albedoTexture&&t.a.DiffuseTextureEnabled&&(k.updateFloat2("vAlbedoInfos",this._albedoTexture.coordinatesIndex,this._albedoTexture.level),i.a.BindTextureMatrix(this._albedoTexture,k,"albedo")),this._ambientTexture&&t.a.AmbientTextureEnabled&&(k.updateFloat4("vAmbientInfos",this._ambientTexture.coordinatesIndex,this._ambientTexture.level,this._ambientTextureStrength,this._ambientTextureImpactOnAnalyticalLights),i.a.BindTextureMatrix(this._ambientTexture,k,"ambient")),this._opacityTexture&&t.a.OpacityTextureEnabled&&(k.updateFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),i.a.BindTextureMatrix(this._opacityTexture,k,"opacity")),ie&&t.a.ReflectionTextureEnabled){if(k.updateMatrix("reflectionMatrix",ie.getReflectionTextureMatrix()),k.updateFloat2("vReflectionInfos",ie.level,0),ie.boundingBoxSize){var ve=ie;k.updateVector3("vReflectionPosition",ve.boundingBoxPosition),k.updateVector3("vReflectionSize",ve.boundingBoxSize)}if(this.realTimeFiltering){var Re=ie.getSize().width;k.updateFloat2("vReflectionFilteringInfo",Re,u.a.Log2(Re))}if(!he.USEIRRADIANCEMAP){var ce=ie.sphericalPolynomial;if(he.USESPHERICALFROMREFLECTIONMAP&&ce)if(he.SPHERICAL_HARMONICS){var Ce=ce.preScaledHarmonics;k.updateVector3("vSphericalL00",Ce.l00),k.updateVector3("vSphericalL1_1",Ce.l1_1),k.updateVector3("vSphericalL10",Ce.l10),k.updateVector3("vSphericalL11",Ce.l11),k.updateVector3("vSphericalL2_2",Ce.l2_2),k.updateVector3("vSphericalL2_1",Ce.l2_1),k.updateVector3("vSphericalL20",Ce.l20),k.updateVector3("vSphericalL21",Ce.l21),k.updateVector3("vSphericalL22",Ce.l22)}else k.updateFloat3("vSphericalX",ce.x.x,ce.x.y,ce.x.z),k.updateFloat3("vSphericalY",ce.y.x,ce.y.y,ce.y.z),k.updateFloat3("vSphericalZ",ce.z.x,ce.z.y,ce.z.z),k.updateFloat3("vSphericalXX_ZZ",ce.xx.x-ce.zz.x,ce.xx.y-ce.zz.y,ce.xx.z-ce.zz.z),k.updateFloat3("vSphericalYY_ZZ",ce.yy.x-ce.zz.x,ce.yy.y-ce.zz.y,ce.yy.z-ce.zz.z),k.updateFloat3("vSphericalZZ",ce.zz.x,ce.zz.y,ce.zz.z),k.updateFloat3("vSphericalXY",ce.xy.x,ce.xy.y,ce.xy.z),k.updateFloat3("vSphericalYZ",ce.yz.x,ce.yz.y,ce.yz.z),k.updateFloat3("vSphericalZX",ce.zx.x,ce.zx.y,ce.zx.z)}k.updateFloat3("vReflectionMicrosurfaceInfos",ie.getSize().width,ie.lodGenerationScale,ie.lodGenerationOffset)}this._emissiveTexture&&t.a.EmissiveTextureEnabled&&(k.updateFloat2("vEmissiveInfos",this._emissiveTexture.coordinatesIndex,this._emissiveTexture.level),i.a.BindTextureMatrix(this._emissiveTexture,k,"emissive")),this._lightmapTexture&&t.a.LightmapTextureEnabled&&(k.updateFloat2("vLightmapInfos",this._lightmapTexture.coordinatesIndex,this._lightmapTexture.level),i.a.BindTextureMatrix(this._lightmapTexture,k,"lightmap")),t.a.SpecularTextureEnabled&&(this._metallicTexture?(k.updateFloat3("vReflectivityInfos",this._metallicTexture.coordinatesIndex,this._metallicTexture.level,this._ambientTextureStrength),i.a.BindTextureMatrix(this._metallicTexture,k,"reflectivity")):this._reflectivityTexture&&(k.updateFloat3("vReflectivityInfos",this._reflectivityTexture.coordinatesIndex,this._reflectivityTexture.level,1),i.a.BindTextureMatrix(this._reflectivityTexture,k,"reflectivity")),this._metallicReflectanceTexture&&(k.updateFloat2("vMetallicReflectanceInfos",this._metallicReflectanceTexture.coordinatesIndex,this._metallicReflectanceTexture.level),i.a.BindTextureMatrix(this._metallicReflectanceTexture,k,"metallicReflectance")),this._microSurfaceTexture&&(k.updateFloat2("vMicroSurfaceSamplerInfos",this._microSurfaceTexture.coordinatesIndex,this._microSurfaceTexture.level),i.a.BindTextureMatrix(this._microSurfaceTexture,k,"microSurfaceSampler"))),this._bumpTexture&&de.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&(k.updateFloat3("vBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level,this._parallaxScaleBias),i.a.BindTextureMatrix(this._bumpTexture,k,"bump"),re._mirroredCameraPosition?k.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?1:-1,this._invertNormalMapY?1:-1):k.updateFloat2("vTangentSpaceParams",this._invertNormalMapX?-1:1,this._invertNormalMapY?-1:1))}if(this.pointsCloud&&k.updateFloat("pointSize",this.pointSize),he.METALLICWORKFLOW){l.c.Color3[0].r=this._metallic===void 0||this._metallic===null?1:this._metallic,l.c.Color3[0].g=this._roughness===void 0||this._roughness===null?1:this._roughness,k.updateColor4("vReflectivityColor",l.c.Color3[0],1);var be=this.subSurface.indexOfRefraction,De=1,Ne=Math.pow((be-De)/(be+De),2);this._metallicReflectanceColor.scaleToRef(Ne*this._metallicF0Factor,l.c.Color3[0]);var Ue=this._metallicF0Factor;k.updateColor4("vMetallicReflectanceFactors",l.c.Color3[0],Ue)}else k.updateColor4("vReflectivityColor",this._reflectivityColor,this._microSurface);k.updateColor3("vEmissiveColor",t.a.EmissiveTextureEnabled?this._emissiveColor:l.a.BlackReadOnly),k.updateColor3("vReflectionColor",this._reflectionColor),!he.SS_REFRACTION&&this.subSurface.linkRefractionWithTransparency?k.updateColor4("vAlbedoColor",this._albedoColor,1):k.updateColor4("vAlbedoColor",this._albedoColor,this.alpha),this._lightingInfos.x=this._directIntensity,this._lightingInfos.y=this._emissiveIntensity,this._lightingInfos.z=this._environmentIntensity*re.environmentIntensity,this._lightingInfos.w=this._specularIntensity,k.updateVector4("vLightingIntensity",this._lightingInfos),re.ambientColor.multiplyToRef(this._ambientColor,this._globalAmbientColor),k.updateColor3("vAmbientColor",this._globalAmbientColor),k.updateFloat2("vDebugMode",this.debugLimit,this.debugFactor)}re.texturesEnabled&&(this._albedoTexture&&t.a.DiffuseTextureEnabled&&k.setTexture("albedoSampler",this._albedoTexture),this._ambientTexture&&t.a.AmbientTextureEnabled&&k.setTexture("ambientSampler",this._ambientTexture),this._opacityTexture&&t.a.OpacityTextureEnabled&&k.setTexture("opacitySampler",this._opacityTexture),ie&&t.a.ReflectionTextureEnabled&&(he.LODBASEDMICROSFURACE?k.setTexture("reflectionSampler",ie):(k.setTexture("reflectionSampler",ie._lodTextureMid||ie),k.setTexture("reflectionSamplerLow",ie._lodTextureLow||ie),k.setTexture("reflectionSamplerHigh",ie._lodTextureHigh||ie)),he.USEIRRADIANCEMAP&&k.setTexture("irradianceSampler",ie.irradianceTexture)),he.ENVIRONMENTBRDF&&k.setTexture("environmentBrdfSampler",this._environmentBRDFTexture),this._emissiveTexture&&t.a.EmissiveTextureEnabled&&k.setTexture("emissiveSampler",this._emissiveTexture),this._lightmapTexture&&t.a.LightmapTextureEnabled&&k.setTexture("lightmapSampler",this._lightmapTexture),t.a.SpecularTextureEnabled&&(this._metallicTexture?k.setTexture("reflectivitySampler",this._metallicTexture):this._reflectivityTexture&&k.setTexture("reflectivitySampler",this._reflectivityTexture),this._metallicReflectanceTexture&&k.setTexture("metallicReflectanceSampler",this._metallicReflectanceTexture),this._microSurfaceTexture&&k.setTexture("microSurfaceSampler",this._microSurfaceTexture)),this._bumpTexture&&de.getCaps().standardDerivatives&&t.a.BumpTextureEnabled&&!this._disableBumpMap&&k.setTexture("bumpSampler",this._bumpTexture)),this.detailMap.bindForSubMesh(k,re,this.isFrozen),this.subSurface.bindForSubMesh(k,re,de,this.isFrozen,he.LODBASEDMICROSFURACE,this.realTimeFiltering),this.clearCoat.bindForSubMesh(k,re,de,this._disableBumpMap,this.isFrozen,this._invertNormalMapX,this._invertNormalMapY,H),this.anisotropy.bindForSubMesh(k,re,this.isFrozen),this.sheen.bindForSubMesh(k,re,this.isFrozen,H),i.a.BindClipPlane(this._activeEffect,re),this.bindEyePosition(ne)}(Ae||!this.isFrozen)&&(re.lightsEnabled&&!this._disableLighting&&i.a.BindLights(re,T,this._activeEffect,he,this._maxSimultaneousLights,this._rebuildInParallel),(re.fogEnabled&&T.applyFog&&re.fogMode!==O.a.FOGMODE_NONE||ie)&&this.bindView(ne),i.a.BindFogParameters(re,T,this._activeEffect,!0),he.NUM_MORPH_INFLUENCERS&&i.a.BindMorphTargetParameters(T,this._activeEffect),this._imageProcessingConfiguration.bind(this._activeEffect),i.a.BindLogDepth(he,this._activeEffect,re)),this._afterBind(T,this._activeEffect),k.update()}}},C.prototype.getAnimatables=function(){var d=[];return this._albedoTexture&&this._albedoTexture.animations&&this._albedoTexture.animations.length>0&&d.push(this._albedoTexture),this._ambientTexture&&this._ambientTexture.animations&&this._ambientTexture.animations.length>0&&d.push(this._ambientTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&d.push(this._opacityTexture),this._reflectionTexture&&this._reflectionTexture.animations&&this._reflectionTexture.animations.length>0&&d.push(this._reflectionTexture),this._emissiveTexture&&this._emissiveTexture.animations&&this._emissiveTexture.animations.length>0&&d.push(this._emissiveTexture),this._metallicTexture&&this._metallicTexture.animations&&this._metallicTexture.animations.length>0?d.push(this._metallicTexture):this._reflectivityTexture&&this._reflectivityTexture.animations&&this._reflectivityTexture.animations.length>0&&d.push(this._reflectivityTexture),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&d.push(this._bumpTexture),this._lightmapTexture&&this._lightmapTexture.animations&&this._lightmapTexture.animations.length>0&&d.push(this._lightmapTexture),this.detailMap.getAnimatables(d),this.subSurface.getAnimatables(d),this.clearCoat.getAnimatables(d),this.sheen.getAnimatables(d),this.anisotropy.getAnimatables(d),d},C.prototype._getReflectionTexture=function(){return this._reflectionTexture?this._reflectionTexture:this.getScene().environmentTexture},C.prototype.getActiveTextures=function(){var d=z.prototype.getActiveTextures.call(this);return this._albedoTexture&&d.push(this._albedoTexture),this._ambientTexture&&d.push(this._ambientTexture),this._opacityTexture&&d.push(this._opacityTexture),this._reflectionTexture&&d.push(this._reflectionTexture),this._emissiveTexture&&d.push(this._emissiveTexture),this._reflectivityTexture&&d.push(this._reflectivityTexture),this._metallicTexture&&d.push(this._metallicTexture),this._metallicReflectanceTexture&&d.push(this._metallicReflectanceTexture),this._microSurfaceTexture&&d.push(this._microSurfaceTexture),this._bumpTexture&&d.push(this._bumpTexture),this._lightmapTexture&&d.push(this._lightmapTexture),this.detailMap.getActiveTextures(d),this.subSurface.getActiveTextures(d),this.clearCoat.getActiveTextures(d),this.sheen.getActiveTextures(d),this.anisotropy.getActiveTextures(d),d},C.prototype.hasTexture=function(d){return z.prototype.hasTexture.call(this,d)||this._albedoTexture===d||this._ambientTexture===d||this._opacityTexture===d||this._reflectionTexture===d||this._reflectivityTexture===d||this._metallicTexture===d||this._metallicReflectanceTexture===d||this._microSurfaceTexture===d||this._bumpTexture===d||this._lightmapTexture===d?!0:this.detailMap.hasTexture(d)||this.subSurface.hasTexture(d)||this.clearCoat.hasTexture(d)||this.sheen.hasTexture(d)||this.anisotropy.hasTexture(d)},C.prototype.setPrePassRenderer=function(d){if(this.subSurface.isScatteringEnabled){var T=this.getScene().enableSubSurfaceForPrePass();return T&&(T.enabled=!0),!0}return!1},C.prototype.dispose=function(d,T){var H,re,he,ne,Ae,ie,k,de,ve,Re,ce;T&&(this._environmentBRDFTexture&&this.getScene().environmentBRDFTexture!==this._environmentBRDFTexture&&this._environmentBRDFTexture.dispose(),(H=this._albedoTexture)===null||H===void 0||H.dispose(),(re=this._ambientTexture)===null||re===void 0||re.dispose(),(he=this._opacityTexture)===null||he===void 0||he.dispose(),(ne=this._reflectionTexture)===null||ne===void 0||ne.dispose(),(Ae=this._emissiveTexture)===null||Ae===void 0||Ae.dispose(),(ie=this._metallicTexture)===null||ie===void 0||ie.dispose(),(k=this._reflectivityTexture)===null||k===void 0||k.dispose(),(de=this._bumpTexture)===null||de===void 0||de.dispose(),(ve=this._lightmapTexture)===null||ve===void 0||ve.dispose(),(Re=this._metallicReflectanceTexture)===null||Re===void 0||Re.dispose(),(ce=this._microSurfaceTexture)===null||ce===void 0||ce.dispose()),this.detailMap.dispose(T),this.subSurface.dispose(T),this.clearCoat.dispose(T),this.sheen.dispose(T),this.anisotropy.dispose(T),this._renderTargets.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),z.prototype.dispose.call(this,d,T)},C.PBRMATERIAL_OPAQUE=S.a.MATERIAL_OPAQUE,C.PBRMATERIAL_ALPHATEST=S.a.MATERIAL_ALPHATEST,C.PBRMATERIAL_ALPHABLEND=S.a.MATERIAL_ALPHABLEND,C.PBRMATERIAL_ALPHATESTANDBLEND=S.a.MATERIAL_ALPHATESTANDBLEND,C.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=0,C.LIGHTFALLOFF_PHYSICAL=0,C.LIGHTFALLOFF_GLTF=1,C.LIGHTFALLOFF_STANDARD=2,Object(f.c)([Object(o.i)()],C.prototype,"_imageProcessingConfiguration",void 0),Object(f.c)([Object(o.b)("_markAllSubMeshesAsMiscDirty")],C.prototype,"debugMode",void 0),Object(f.c)([Object(o.c)()],C.prototype,"useLogarithmicDepth",null),C}(D.a)},530:function($,W,s){"use strict";s.d(W,"a",function(){return r});var f=s(483),o=s(572),E=s(438),v=s(449),c=s(436),O=s(589),p=s(542),r=function(){function e(t,i,n,a,l,h,u,g,A,R){n===void 0&&(n=0),a===void 0&&(a=100),l===void 0&&(l=!1),h===void 0&&(h=1),R===void 0&&(R=!1),this.target=i,this.fromFrame=n,this.toFrame=a,this.loopAnimation=l,this.onAnimationEnd=u,this.onAnimationLoop=A,this.isAdditive=R,this._localDelayOffset=null,this._pausedDelay=null,this._runtimeAnimations=new Array,this._paused=!1,this._speedRatio=1,this._weight=-1,this._syncRoot=null,this.disposeOnEnd=!0,this.animationStarted=!1,this.onAnimationEndObservable=new E.c,this.onAnimationLoopObservable=new E.c,this._scene=t,g&&this.appendAnimations(i,g),this._speedRatio=h,t._activeAnimatables.push(this)}return Object.defineProperty(e.prototype,"syncRoot",{get:function(){return this._syncRoot},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"masterFrame",{get:function(){return this._runtimeAnimations.length===0?0:this._runtimeAnimations[0].currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"weight",{get:function(){return this._weight},set:function(t){if(t===-1){this._weight=-1;return}this._weight=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speedRatio",{get:function(){return this._speedRatio},set:function(t){for(var i=0;i<this._runtimeAnimations.length;i++){var n=this._runtimeAnimations[i];n._prepareForSpeedRatioChange(t)}this._speedRatio=t},enumerable:!1,configurable:!0}),e.prototype.syncWith=function(t){if(this._syncRoot=t,t){var i=this._scene._activeAnimatables.indexOf(this);i>-1&&(this._scene._activeAnimatables.splice(i,1),this._scene._activeAnimatables.push(this))}return this},e.prototype.getAnimations=function(){return this._runtimeAnimations},e.prototype.appendAnimations=function(t,i){for(var n=this,a=0;a<i.length;a++){var l=i[a],h=new o.a(t,l,this._scene,this);h._onLoop=function(){n.onAnimationLoopObservable.notifyObservers(n),n.onAnimationLoop&&n.onAnimationLoop()},this._runtimeAnimations.push(h)}},e.prototype.getAnimationByTargetProperty=function(t){for(var i=this._runtimeAnimations,n=0;n<i.length;n++)if(i[n].animation.targetProperty===t)return i[n].animation;return null},e.prototype.getRuntimeAnimationByTargetProperty=function(t){for(var i=this._runtimeAnimations,n=0;n<i.length;n++)if(i[n].animation.targetProperty===t)return i[n];return null},e.prototype.reset=function(){for(var t=this._runtimeAnimations,i=0;i<t.length;i++)t[i].reset(!0);this._localDelayOffset=null,this._pausedDelay=null},e.prototype.enableBlending=function(t){for(var i=this._runtimeAnimations,n=0;n<i.length;n++)i[n].animation.enableBlending=!0,i[n].animation.blendingSpeed=t},e.prototype.disableBlending=function(){for(var t=this._runtimeAnimations,i=0;i<t.length;i++)t[i].animation.enableBlending=!1},e.prototype.goToFrame=function(t){var i=this._runtimeAnimations;if(i[0]){var n=i[0].animation.framePerSecond,a=i[0].currentFrame,l=this.speedRatio===0?0:(t-a)/n*1e3/this.speedRatio;this._localDelayOffset===null&&(this._localDelayOffset=0),this._localDelayOffset-=l}for(var h=0;h<i.length;h++)i[h].goToFrame(t)},e.prototype.pause=function(){this._paused||(this._paused=!0)},e.prototype.restart=function(){this._paused=!1},e.prototype._raiseOnAnimationEnd=function(){this.onAnimationEnd&&this.onAnimationEnd(),this.onAnimationEndObservable.notifyObservers(this)},e.prototype.stop=function(t,i){if(t||i){var n=this._scene._activeAnimatables.indexOf(this);if(n>-1){for(var a=this._runtimeAnimations,l=a.length-1;l>=0;l--){var h=a[l];t&&h.animation.name!=t||i&&!i(h.target)||(h.dispose(),a.splice(l,1))}a.length==0&&(this._scene._activeAnimatables.splice(n,1),this._raiseOnAnimationEnd())}}else{var l=this._scene._activeAnimatables.indexOf(this);if(l>-1){this._scene._activeAnimatables.splice(l,1);for(var a=this._runtimeAnimations,l=0;l<a.length;l++)a[l].dispose();this._raiseOnAnimationEnd()}}},e.prototype.waitAsync=function(){var t=this;return new Promise(function(i,n){t.onAnimationEndObservable.add(function(){i(t)},void 0,void 0,t,!0)})},e.prototype._animate=function(t){if(this._paused)return this.animationStarted=!1,this._pausedDelay===null&&(this._pausedDelay=t),!0;if(this._localDelayOffset===null?(this._localDelayOffset=t,this._pausedDelay=null):this._pausedDelay!==null&&(this._localDelayOffset+=t-this._pausedDelay,this._pausedDelay=null),this._weight===0)return!0;var i=!1,n=this._runtimeAnimations,a;for(a=0;a<n.length;a++){var l=n[a],h=l.animate(t-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this._speedRatio,this._weight);i=i||h}if(this.animationStarted=i,!i){if(this.disposeOnEnd)for(a=this._scene._activeAnimatables.indexOf(this),this._scene._activeAnimatables.splice(a,1),a=0;a<n.length;a++)n[a].dispose();this._raiseOnAnimationEnd(),this.disposeOnEnd&&(this.onAnimationEnd=null,this.onAnimationLoop=null,this.onAnimationLoopObservable.clear(),this.onAnimationEndObservable.clear())}return i},e}();v.a.prototype._animate=function(){if(!!this.animationsEnabled){var e=O.a.Now;if(!this._animationTimeLast){if(this._pendingData.length>0)return;this._animationTimeLast=e}this.deltaTime=this.useConstantAnimationDeltaTime?16:(e-this._animationTimeLast)*this.animationTimeScale,this._animationTimeLast=e;var t=this._activeAnimatables;if(t.length!==0){this._animationTime+=this.deltaTime;for(var i=this._animationTime,n=0;n<t.length;n++){var a=t[n];!a._animate(i)&&a.disposeOnEnd&&n--}this._processLateAnimationBindings()}}},v.a.prototype.beginWeightedAnimation=function(e,t,i,n,a,l,h,u,g,A,R){n===void 0&&(n=1),l===void 0&&(l=1),R===void 0&&(R=!1);var S=this.beginAnimation(e,t,i,a,l,h,u,!1,g,A,R);return S.weight=n,S},v.a.prototype.beginAnimation=function(e,t,i,n,a,l,h,u,g,A,R){a===void 0&&(a=1),u===void 0&&(u=!0),R===void 0&&(R=!1),t>i&&a>0&&(a*=-1),u&&this.stopAnimation(e,void 0,g),h||(h=new r(this,e,t,i,n,a,l,void 0,A,R));var S=g?g(e):!0;if(e.animations&&S&&h.appendAnimations(e,e.animations),e.getAnimatables)for(var P=e.getAnimatables(),D=0;D<P.length;D++)this.beginAnimation(P[D],t,i,n,a,l,h,u,g,A);return h.reset(),h},v.a.prototype.beginHierarchyAnimation=function(e,t,i,n,a,l,h,u,g,A,R,S){l===void 0&&(l=1),g===void 0&&(g=!0),S===void 0&&(S=!1);var P=e.getDescendants(t),D=[];D.push(this.beginAnimation(e,i,n,a,l,h,u,g,A,void 0,S));for(var L=0,U=P;L<U.length;L++){var F=U[L];D.push(this.beginAnimation(F,i,n,a,l,h,u,g,A,void 0,S))}return D},v.a.prototype.beginDirectAnimation=function(e,t,i,n,a,l,h,u,g){g===void 0&&(g=!1),l===void 0&&(l=1),i>n&&l>0&&(l*=-1);var A=new r(this,e,i,n,a,l,h,t,u,g);return A},v.a.prototype.beginDirectHierarchyAnimation=function(e,t,i,n,a,l,h,u,g,A){A===void 0&&(A=!1);var R=e.getDescendants(t),S=[];S.push(this.beginDirectAnimation(e,i,n,a,l,h,u,g,A));for(var P=0,D=R;P<D.length;P++){var L=D[P];S.push(this.beginDirectAnimation(L,i,n,a,l,h,u,g,A))}return S},v.a.prototype.getAnimatableByTarget=function(e){for(var t=0;t<this._activeAnimatables.length;t++)if(this._activeAnimatables[t].target===e)return this._activeAnimatables[t];return null},v.a.prototype.getAllAnimatablesByTarget=function(e){for(var t=[],i=0;i<this._activeAnimatables.length;i++)this._activeAnimatables[i].target===e&&t.push(this._activeAnimatables[i]);return t},v.a.prototype.stopAnimation=function(e,t,i){for(var n=this.getAllAnimatablesByTarget(e),a=0,l=n;a<l.length;a++){var h=l[a];h.stop(t,i)}},v.a.prototype.stopAllAnimations=function(){if(this._activeAnimatables){for(var e=0;e<this._activeAnimatables.length;e++)this._activeAnimatables[e].stop();this._activeAnimatables=[]}for(var t=0,i=this.animationGroups;t<i.length;t++){var n=i[t];n.stop()}},v.a.prototype._registerTargetForLateAnimationBinding=function(e,t){var i=e.target;this._registeredForLateAnimationBindings.pushNoDuplicate(i),i._lateAnimationHolders||(i._lateAnimationHolders={}),i._lateAnimationHolders[e.targetPath]||(i._lateAnimationHolders[e.targetPath]={totalWeight:0,totalAdditiveWeight:0,animations:[],additiveAnimations:[],originalValue:t}),e.isAdditive?(i._lateAnimationHolders[e.targetPath].additiveAnimations.push(e),i._lateAnimationHolders[e.targetPath].totalAdditiveWeight+=e.weight):(i._lateAnimationHolders[e.targetPath].animations.push(e),i._lateAnimationHolders[e.targetPath].totalWeight+=e.weight)},v.a.prototype._processLateAnimationBindingsForMatrices=function(e){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return e.originalValue;var t=1,i=c.c.Vector3[0],n=c.c.Vector3[1],a=c.c.Quaternion[0],l=0,h=e.animations[0],u=e.originalValue,g=1,A=!1;if(e.totalWeight<1)g=1-e.totalWeight,u.decompose(n,a,i);else{if(l=1,t=e.totalWeight,g=h.weight/t,g==1)if(e.totalAdditiveWeight)A=!0;else return h.currentValue;h.currentValue.decompose(n,a,i)}if(!A){n.scaleInPlace(g),i.scaleInPlace(g),a.scaleInPlace(g);for(var R=l;R<e.animations.length;R++){var S=e.animations[R];if(S.weight!==0){var g=S.weight/t,P=c.c.Vector3[2],D=c.c.Vector3[3],L=c.c.Quaternion[1];S.currentValue.decompose(D,L,P),D.scaleAndAddToRef(g,n),L.scaleAndAddToRef(g,a),P.scaleAndAddToRef(g,i)}}}for(var U=0;U<e.additiveAnimations.length;U++){var S=e.additiveAnimations[U];if(S.weight!==0){var P=c.c.Vector3[2],D=c.c.Vector3[3],L=c.c.Quaternion[1];S.currentValue.decompose(D,L,P),D.multiplyToRef(n,D),c.e.LerpToRef(n,D,S.weight,n),a.multiplyToRef(L,L),c.b.SlerpToRef(a,L,S.weight,a),P.scaleAndAddToRef(S.weight,i)}}var F=h?h._animationState.workValue:c.c.Matrix[0].clone();return c.a.ComposeToRef(n,a,i,F),F},v.a.prototype._processLateAnimationBindingsForQuaternions=function(e,t){if(e.totalWeight===0&&e.totalAdditiveWeight===0)return t;var i=e.animations[0],n=e.originalValue,a=t;if(e.totalWeight===0&&e.totalAdditiveWeight>0)a.copyFrom(n);else if(e.animations.length===1){if(c.b.SlerpToRef(n,i.currentValue,Math.min(1,e.totalWeight),a),e.totalAdditiveWeight===0)return a}else if(e.animations.length>1){var l=1,h=void 0,u=void 0;if(e.totalWeight<1){var g=1-e.totalWeight;h=[],u=[],h.push(n),u.push(g)}else{if(e.animations.length===2&&(c.b.SlerpToRef(e.animations[0].currentValue,e.animations[1].currentValue,e.animations[1].weight/e.totalWeight,t),e.totalAdditiveWeight===0))return t;h=[],u=[],l=e.totalWeight}for(var A=0;A<e.animations.length;A++){var R=e.animations[A];h.push(R.currentValue),u.push(R.weight/l)}for(var S=0,P=0;P<h.length;){if(!P){c.b.SlerpToRef(h[P],h[P+1],u[P+1]/(u[P]+u[P+1]),t),a=t,S=u[P]+u[P+1],P+=2;continue}S+=u[P],c.b.SlerpToRef(a,h[P],u[P]/S,a),P++}}for(var D=0;D<e.additiveAnimations.length;D++){var R=e.additiveAnimations[D];R.weight!==0&&(a.multiplyToRef(R.currentValue,c.c.Quaternion[0]),c.b.SlerpToRef(a,c.c.Quaternion[0],R.weight,a))}return a},v.a.prototype._processLateAnimationBindings=function(){if(!!this._registeredForLateAnimationBindings.length){for(var e=0;e<this._registeredForLateAnimationBindings.length;e++){var t=this._registeredForLateAnimationBindings.data[e];for(var i in t._lateAnimationHolders){var n=t._lateAnimationHolders[i],a=n.animations[0],l=n.originalValue,h=f.a.AllowMatrixDecomposeForInterpolation&&l.m,u=t[i];if(h)u=this._processLateAnimationBindingsForMatrices(n);else{var g=l.w!==void 0;if(g)u=this._processLateAnimationBindingsForQuaternions(n,u||c.b.Identity());else{var A=0,R=1;if(n.totalWeight<1)a&&l.scale?u=l.scale(1-n.totalWeight):a?u=l*(1-n.totalWeight):l.clone?u=l.clone():u=l;else if(a){R=n.totalWeight;var S=a.weight/R;S!==1?a.currentValue.scale?u=a.currentValue.scale(S):u=a.currentValue*S:u=a.currentValue,A=1}for(var P=A;P<n.animations.length;P++){var D=n.animations[P],L=D.weight/R;if(L)D.currentValue.scaleAndAddToRef?D.currentValue.scaleAndAddToRef(L,u):u+=D.currentValue*L;else continue}for(var U=0;U<n.additiveAnimations.length;U++){var D=n.additiveAnimations[U],L=D.weight;if(L)D.currentValue.scaleAndAddToRef?D.currentValue.scaleAndAddToRef(L,u):u+=D.currentValue*L;else continue}}}t[i]=u}t._lateAnimationHolders={}}this._registeredForLateAnimationBindings.reset()}},p.a.prototype.copyAnimationRange=function(e,t,i,n,a){n===void 0&&(n=!1),a===void 0&&(a=null),this.animations.length===0&&(this.animations.push(new f.a(this.name,"_matrix",e.animations[0].framePerSecond,f.a.ANIMATIONTYPE_MATRIX,0)),this.animations[0].setKeys([]));var l=e.animations[0].getRange(t);if(!l)return!1;for(var h=l.from,u=l.to,g=e.animations[0].getKeys(),A=e.length,R=e.getParent(),S=this.getParent(),P=n&&R&&A&&this.length&&A!==this.length,D=P&&S&&R?S.length/R.length:1,L=n&&!S&&a&&(a.x!==1||a.y!==1||a.z!==1),U=this.animations[0].getKeys(),F,V,I,x=0,_=g.length;x<_;x++)F=g[x],F.frame>=h&&F.frame<=u&&(n?(I=F.value.clone(),P?(V=I.getTranslation(),I.setTranslation(V.scaleInPlace(D))):L&&a?(V=I.getTranslation(),I.setTranslation(V.multiplyInPlace(a))):I=F.value):I=F.value,U.push({frame:F.frame+i,value:I}));return this.animations[0].createRange(t,h+i,u+i),!0}},532:function($,W,s){"use strict";var f=s(467),o=s(456);f.a.prototype.createDynamicTexture=function(E,v,c,O){var p=new o.a(this,o.b.Dynamic);return p.baseWidth=E,p.baseHeight=v,c&&(E=this.needPOTTextures?f.a.GetExponentOfTwo(E,this._caps.maxTextureSize):E,v=this.needPOTTextures?f.a.GetExponentOfTwo(v,this._caps.maxTextureSize):v),p.width=E,p.height=v,p.isReady=!1,p.generateMipMaps=c,p.samplingMode=O,this.updateTextureSamplingMode(O,p),this._internalTexturesCache.push(p),p},f.a.prototype.updateDynamicTexture=function(E,v,c,O,p,r){if(O===void 0&&(O=!1),r===void 0&&(r=!1),!!E){var e=this._gl,t=e.TEXTURE_2D,i=this._bindTextureDirectly(t,E,!0,r);this._unpackFlipY(c===void 0?E.invertY:c),O&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);var n=this._getWebGLTextureType(E.type),a=this._getInternalFormat(p||E.format),l=this._getRGBABufferInternalSizedFormat(E.type,a);e.texImage2D(t,0,l,a,n,v),E.generateMipMaps&&e.generateMipmap(t),i||this._bindTextureDirectly(t,null),O&&e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),E.isReady=!0}}},533:function($,W,s){"use strict";s.d(W,"a",function(){return p});var f=s(434),o=s(439),E=s(514),v=s(441),c=s(529),O=s(437),p=function(r){Object(f.d)(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.directIntensity=1,n.emissiveIntensity=1,n.environmentIntensity=1,n.specularIntensity=1,n.disableBumpMap=!1,n.ambientTextureStrength=1,n.ambientTextureImpactOnAnalyticalLights=e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,n.metallicF0Factor=1,n.metallicReflectanceColor=v.a.White(),n.ambientColor=new v.a(0,0,0),n.albedoColor=new v.a(1,1,1),n.reflectivityColor=new v.a(1,1,1),n.reflectionColor=new v.a(1,1,1),n.emissiveColor=new v.a(0,0,0),n.microSurface=1,n.useLightmapAsShadowmap=!1,n.useAlphaFromAlbedoTexture=!1,n.forceAlphaTest=!1,n.alphaCutOff=.4,n.useSpecularOverAlpha=!0,n.useMicroSurfaceFromReflectivityMapAlpha=!1,n.useRoughnessFromMetallicTextureAlpha=!0,n.useRoughnessFromMetallicTextureGreen=!1,n.useMetallnessFromMetallicTextureBlue=!1,n.useAmbientOcclusionFromMetallicTextureRed=!1,n.useAmbientInGrayScale=!1,n.useAutoMicroSurfaceFromReflectivityMap=!1,n.useRadianceOverAlpha=!0,n.useObjectSpaceNormalMap=!1,n.useParallax=!1,n.useParallaxOcclusion=!1,n.parallaxScaleBias=.05,n.disableLighting=!1,n.forceIrradianceInFragment=!1,n.maxSimultaneousLights=4,n.invertNormalMapX=!1,n.invertNormalMapY=!1,n.twoSidedLighting=!1,n.useAlphaFresnel=!1,n.useLinearAlphaFresnel=!1,n.environmentBRDFTexture=null,n.forceNormalForward=!1,n.enableSpecularAntiAliasing=!1,n.useHorizonOcclusion=!0,n.useRadianceOcclusion=!0,n.unlit=!1,n._environmentBRDFTexture=E.a.GetEnvironmentBRDFTexture(i),n}return Object.defineProperty(e.prototype,"refractionTexture",{get:function(){return this.subSurface.refractionTexture},set:function(t){this.subSurface.refractionTexture=t,t?this.subSurface.isRefractionEnabled=!0:this.subSurface.linkRefractionWithTransparency||(this.subSurface.isRefractionEnabled=!1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"indexOfRefraction",{get:function(){return this.subSurface.indexOfRefraction},set:function(t){this.subSurface.indexOfRefraction=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"invertRefractionY",{get:function(){return this.subSurface.invertRefractionY},set:function(t){this.subSurface.invertRefractionY=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkRefractionWithTransparency",{get:function(){return this.subSurface.linkRefractionWithTransparency},set:function(t){this.subSurface.linkRefractionWithTransparency=t,t&&(this.subSurface.isRefractionEnabled=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"usePhysicalLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_PHYSICAL},set:function(t){t!==this.usePhysicalLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=c.a.LIGHTFALLOFF_PHYSICAL:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useGLTFLightFalloff",{get:function(){return this._lightFalloff===c.a.LIGHTFALLOFF_GLTF},set:function(t){t!==this.useGLTFLightFalloff&&(this._markAllSubMeshesAsTexturesDirty(),t?this._lightFalloff=c.a.LIGHTFALLOFF_GLTF:this._lightFalloff=c.a.LIGHTFALLOFF_STANDARD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"imageProcessingConfiguration",{get:function(){return this._imageProcessingConfiguration},set:function(t){this._attachImageProcessingConfiguration(t),this._markAllSubMeshesAsTexturesDirty()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurvesEnabled",{get:function(){return this.imageProcessingConfiguration.colorCurvesEnabled},set:function(t){this.imageProcessingConfiguration.colorCurvesEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingEnabled",{get:function(){return this.imageProcessingConfiguration.colorGradingEnabled},set:function(t){this.imageProcessingConfiguration.colorGradingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraToneMappingEnabled",{get:function(){return this._imageProcessingConfiguration.toneMappingEnabled},set:function(t){this._imageProcessingConfiguration.toneMappingEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraExposure",{get:function(){return this._imageProcessingConfiguration.exposure},set:function(t){this._imageProcessingConfiguration.exposure=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraContrast",{get:function(){return this._imageProcessingConfiguration.contrast},set:function(t){this._imageProcessingConfiguration.contrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorGradingTexture",{get:function(){return this._imageProcessingConfiguration.colorGradingTexture},set:function(t){this._imageProcessingConfiguration.colorGradingTexture=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cameraColorCurves",{get:function(){return this._imageProcessingConfiguration.colorCurves},set:function(t){this._imageProcessingConfiguration.colorCurves=t},enumerable:!1,configurable:!0}),e.prototype.getClassName=function(){return"PBRMaterial"},e.prototype.clone=function(t){var i=this,n=o.a.Clone(function(){return new e(t,i.getScene())},this);return n.id=t,n.name=t,this.clearCoat.copyTo(n.clearCoat),this.anisotropy.copyTo(n.anisotropy),this.brdf.copyTo(n.brdf),this.sheen.copyTo(n.sheen),this.subSurface.copyTo(n.subSurface),n},e.prototype.serialize=function(){var t=o.a.Serialize(this);return t.customType="BABYLON.PBRMaterial",t.clearCoat=this.clearCoat.serialize(),t.anisotropy=this.anisotropy.serialize(),t.brdf=this.brdf.serialize(),t.sheen=this.sheen.serialize(),t.subSurface=this.subSurface.serialize(),t},e.Parse=function(t,i,n){var a=o.a.Parse(function(){return new e(t.name,i)},t,i,n);return t.clearCoat&&a.clearCoat.parse(t.clearCoat,i,n),t.anisotropy&&a.anisotropy.parse(t.anisotropy,i,n),t.brdf&&a.brdf.parse(t.brdf,i,n),t.sheen&&a.sheen.parse(t.sheen,i,n),t.subSurface&&a.subSurface.parse(t.subSurface,i,n),a},e.PBRMATERIAL_OPAQUE=c.a.PBRMATERIAL_OPAQUE,e.PBRMATERIAL_ALPHATEST=c.a.PBRMATERIAL_ALPHATEST,e.PBRMATERIAL_ALPHABLEND=c.a.PBRMATERIAL_ALPHABLEND,e.PBRMATERIAL_ALPHATESTANDBLEND=c.a.PBRMATERIAL_ALPHATESTANDBLEND,e.DEFAULT_AO_ON_ANALYTICAL_LIGHTS=c.a.DEFAULT_AO_ON_ANALYTICAL_LIGHTS,Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"directIntensity",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveIntensity",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentIntensity",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"specularIntensity",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"disableBumpMap",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureStrength",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientTextureImpactOnAnalyticalLights",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"opacityTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallic",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"roughness",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicF0Factor",void 0),Object(f.c)([Object(o.e)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceColor",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"metallicReflectanceTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurfaceTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"bumpTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty",null)],e.prototype,"lightmapTexture",void 0),Object(f.c)([Object(o.e)("ambient"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"ambientColor",void 0),Object(f.c)([Object(o.e)("albedo"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"albedoColor",void 0),Object(f.c)([Object(o.e)("reflectivity"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectivityColor",void 0),Object(f.c)([Object(o.e)("reflection"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"reflectionColor",void 0),Object(f.c)([Object(o.e)("emissive"),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"emissiveColor",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"microSurface",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLightmapAsShadowmap",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"useAlphaFromAlbedoTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"forceAlphaTest",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesAndMiscDirty")],e.prototype,"alphaCutOff",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useSpecularOverAlpha",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMicroSurfaceFromReflectivityMapAlpha",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureAlpha",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRoughnessFromMetallicTextureGreen",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useMetallnessFromMetallicTextureBlue",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientOcclusionFromMetallicTextureRed",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAmbientInGrayScale",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAutoMicroSurfaceFromReflectivityMap",void 0),Object(f.c)([Object(o.c)()],e.prototype,"usePhysicalLightFalloff",null),Object(f.c)([Object(o.c)()],e.prototype,"useGLTFLightFalloff",null),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOverAlpha",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useObjectSpaceNormalMap",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallax",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useParallaxOcclusion",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"parallaxScaleBias",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"disableLighting",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceIrradianceInFragment",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsLightsDirty")],e.prototype,"maxSimultaneousLights",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapX",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"invertNormalMapY",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"twoSidedLighting",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useAlphaFresnel",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useLinearAlphaFresnel",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"environmentBRDFTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"forceNormalForward",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"enableSpecularAntiAliasing",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useHorizonOcclusion",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],e.prototype,"useRadianceOcclusion",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsMiscDirty")],e.prototype,"unlit",void 0),e}(c.a);O.a.RegisteredTypes["BABYLON.PBRMaterial"]=p},534:function($,W,s){"use strict";var f=s(435),o="postprocessVertexShader",E=`
attribute vec2 position;
uniform vec2 scale;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=(position*madd+madd)*scale;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[o]=E;var v={name:o,shader:E}},535:function($,W,s){"use strict";var f=s(435),o="packingFunctions",E=`vec4 pack(float depth)
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
}`;f.a.IncludesShadersStore[o]=E;var v={name:o,shader:E}},538:function($,W,s){"use strict";s.d(W,"a",function(){return c});var f=s(434),o=s(442),E=s(458),v=s(574),c=function(O){Object(f.d)(p,O);function p(r,e,t,i,n){var a=this,l=n&&n.generateMipMaps?n.generateMipMaps:!1,h=n&&n.generateDepthTexture?n.generateDepthTexture:!1,u=!n||n.doNotChangeAspectRatio===void 0?!0:n.doNotChangeAspectRatio,g=n&&n.drawOnlyOnFirstAttachmentByDefault?n.drawOnlyOnFirstAttachmentByDefault:!1;if(a=O.call(this,r,e,i,l,u,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0)||this,!a.isSupported){a.dispose();return}var A=[],R=[];a._initTypes(t,A,R,n);var S=!n||n.generateDepthBuffer===void 0?!0:n.generateDepthBuffer,P=!n||n.generateStencilBuffer===void 0?!1:n.generateStencilBuffer;return a._size=e,a._multiRenderTargetOptions={samplingModes:R,generateMipMaps:l,generateDepthBuffer:S,generateStencilBuffer:P,generateDepthTexture:h,types:A,textureCount:t},a._count=t,a._drawOnlyOnFirstAttachmentByDefault=g,t>0&&(a._createInternalTextures(),a._createTextures()),a}return Object.defineProperty(p.prototype,"isSupported",{get:function(){var r,e;return(e=(r=this._engine)===null||r===void 0?void 0:r.getCaps().drawBuffersExtension)!==null&&e!==void 0?e:!1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"textures",{get:function(){return this._textures},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"depthTexture",{get:function(){return this._textures[this._textures.length-1]},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapU",{set:function(r){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapU=r},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"wrapV",{set:function(r){if(this._textures)for(var e=0;e<this._textures.length;e++)this._textures[e].wrapV=r},enumerable:!1,configurable:!0}),p.prototype._initTypes=function(r,e,t,i){for(var n=0;n<r;n++)i&&i.types&&i.types[n]!==void 0?e.push(i.types[n]):e.push(i&&i.defaultType?i.defaultType:0),i&&i.samplingModes&&i.samplingModes[n]!==void 0?t.push(i.samplingModes[n]):t.push(o.a.BILINEAR_SAMPLINGMODE)},p.prototype._rebuild=function(r){if(r===void 0&&(r=!1),!(this._count<1)){this.releaseInternalTextures(),this._createInternalTextures(),r&&this._createTextures();for(var e=0;e<this._internalTextures.length;e++){var t=this._textures[e];t._texture=this._internalTextures[e]}this.samples!==1&&this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,this.samples,!this._drawOnlyOnFirstAttachmentByDefault)}},p.prototype._createInternalTextures=function(){this._internalTextures=this._getEngine().createMultipleRenderTarget(this._size,this._multiRenderTargetOptions,!this._drawOnlyOnFirstAttachmentByDefault),this._texture=this._internalTextures[0]},p.prototype._createTextures=function(){this._textures=[];for(var r=0;r<this._internalTextures.length;r++){var e=new o.a(null,this.getScene());e._texture=this._internalTextures[r],this._textures.push(e)}},p.prototype.replaceTexture=function(r,e){r._texture&&(this._textures[e]=r,this._internalTextures[e]=r._texture,e===0&&(this._texture=this._internalTextures[e]))},Object.defineProperty(p.prototype,"samples",{get:function(){return this._samples},set:function(r){this._samples!==r&&(this._internalTextures?this._samples=this._getEngine().updateMultipleRenderTargetTextureSampleCount(this._internalTextures,r):this._samples=r)},enumerable:!1,configurable:!0}),p.prototype.resize=function(r){this._size=r,this._rebuild()},p.prototype.updateCount=function(r,e){this._multiRenderTargetOptions.textureCount=r,this._count=r;var t=[],i=[];this._initTypes(r,t,i,e),this._multiRenderTargetOptions.types=t,this._multiRenderTargetOptions.samplingModes=i,this._rebuild(!0)},p.prototype.unbindFrameBuffer=function(r,e){var t=this;r.unBindMultiColorAttachmentFramebuffer(this._internalTextures,this.isCube,function(){t.onAfterRenderObservable.notifyObservers(e)})},p.prototype.dispose=function(){this.releaseInternalTextures(),O.prototype.dispose.call(this)},p.prototype.releaseInternalTextures=function(){if(!!this._internalTextures)for(var r=this._internalTextures.length-1;r>=0;r--)this._internalTextures[r]!==void 0&&(this._internalTextures[r].dispose(),this._internalTextures.splice(r,1))},p}(E.a)},542:function($,W,s){"use strict";s.d(W,"a",function(){return O});var f=s(434),o=s(436),E=s(588),v=s(453),c=s(465),O=function(p){Object(f.d)(r,p);function r(e,t,i,n,a,l,h){i===void 0&&(i=null),n===void 0&&(n=null),a===void 0&&(a=null),l===void 0&&(l=null),h===void 0&&(h=null);var u=p.call(this,e,t.getScene())||this;return u.name=e,u.children=new Array,u.animations=new Array,u._index=null,u._absoluteTransform=new o.a,u._invertedAbsoluteTransform=new o.a,u._scalingDeterminant=1,u._worldTransform=new o.a,u._needToDecompose=!0,u._needToCompose=!1,u._linkedTransformNode=null,u._waitingTransformNodeId=null,u._skeleton=t,u._localMatrix=n?n.clone():o.a.Identity(),u._restPose=a||u._localMatrix.clone(),u._bindPose=u._localMatrix.clone(),u._baseMatrix=l||u._localMatrix.clone(),u._index=h,t.bones.push(u),u.setParent(i,!1),(l||n)&&u._updateDifferenceMatrix(),u}return Object.defineProperty(r.prototype,"_matrix",{get:function(){return this._compose(),this._localMatrix},set:function(e){this._localMatrix.copyFrom(e),this._needToDecompose=!0},enumerable:!1,configurable:!0}),r.prototype.getClassName=function(){return"Bone"},r.prototype.getSkeleton=function(){return this._skeleton},r.prototype.getParent=function(){return this._parent},r.prototype.getChildren=function(){return this.children},r.prototype.getIndex=function(){return this._index===null?this.getSkeleton().bones.indexOf(this):this._index},r.prototype.setParent=function(e,t){if(t===void 0&&(t=!0),this._parent!==e){if(this._parent){var i=this._parent.children.indexOf(this);i!==-1&&this._parent.children.splice(i,1)}this._parent=e,this._parent&&this._parent.children.push(this),t&&this._updateDifferenceMatrix(),this.markAsDirty()}},r.prototype.getLocalMatrix=function(){return this._compose(),this._localMatrix},r.prototype.getBaseMatrix=function(){return this._baseMatrix},r.prototype.getRestPose=function(){return this._restPose},r.prototype.setRestPose=function(e){this._restPose.copyFrom(e)},r.prototype.getBindPose=function(){return this._bindPose},r.prototype.setBindPose=function(e){this._bindPose.copyFrom(e)},r.prototype.getWorldMatrix=function(){return this._worldTransform},r.prototype.returnToRest=function(){this._skeleton._numBonesWithLinkedTransformNode>0?this.updateMatrix(this._restPose,!1,!1):this.updateMatrix(this._restPose,!1,!0)},r.prototype.getInvertedAbsoluteTransform=function(){return this._invertedAbsoluteTransform},r.prototype.getAbsoluteTransform=function(){return this._absoluteTransform},r.prototype.linkTransformNode=function(e){this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode--,this._linkedTransformNode=e,this._linkedTransformNode&&this._skeleton._numBonesWithLinkedTransformNode++},r.prototype.getTransformNode=function(){return this._linkedTransformNode},Object.defineProperty(r.prototype,"position",{get:function(){return this._decompose(),this._localPosition},set:function(e){this._decompose(),this._localPosition.copyFrom(e),this._markAsDirtyAndCompose()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotation",{get:function(){return this.getRotation()},set:function(e){this.setRotation(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rotationQuaternion",{get:function(){return this._decompose(),this._localRotation},set:function(e){this.setRotationQuaternion(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"scaling",{get:function(){return this.getScale()},set:function(e){this.setScale(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"animationPropertiesOverride",{get:function(){return this._skeleton.animationPropertiesOverride},enumerable:!1,configurable:!0}),r.prototype._decompose=function(){!this._needToDecompose||(this._needToDecompose=!1,this._localScaling||(this._localScaling=o.e.Zero(),this._localRotation=o.b.Zero(),this._localPosition=o.e.Zero()),this._localMatrix.decompose(this._localScaling,this._localRotation,this._localPosition))},r.prototype._compose=function(){if(!!this._needToCompose){if(!this._localScaling){this._needToCompose=!1;return}this._needToCompose=!1,o.a.ComposeToRef(this._localScaling,this._localRotation,this._localPosition,this._localMatrix)}},r.prototype.updateMatrix=function(e,t,i){t===void 0&&(t=!0),i===void 0&&(i=!0),this._baseMatrix.copyFrom(e),t&&this._updateDifferenceMatrix(),i?(this._needToCompose=!1,this._localMatrix.copyFrom(e),this._markAsDirtyAndDecompose()):this.markAsDirty()},r.prototype._updateDifferenceMatrix=function(e,t){if(t===void 0&&(t=!0),e||(e=this._baseMatrix),this._parent?e.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform):this._absoluteTransform.copyFrom(e),this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform),t)for(var i=0;i<this.children.length;i++)this.children[i]._updateDifferenceMatrix();this._scalingDeterminant=this._absoluteTransform.determinant()<0?-1:1},r.prototype.markAsDirty=function(){this._currentRenderId++,this._childUpdateId++,this._skeleton._markAsDirty()},r.prototype._markAsDirtyAndCompose=function(){this.markAsDirty(),this._needToCompose=!0},r.prototype._markAsDirtyAndDecompose=function(){this.markAsDirty(),this._needToDecompose=!0},r.prototype.translate=function(e,t,i){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix();if(t==c.c.LOCAL)n.addAtIndex(12,e.x),n.addAtIndex(13,e.y),n.addAtIndex(14,e.z);else{var a=null;i&&(a=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=r._tmpMats[0],h=r._tmpVecs[0];this._parent?i&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()):o.a.IdentityToRef(l),l.setTranslationFromFloats(0,0,0),l.invert(),o.e.TransformCoordinatesToRef(e,l,h),n.addAtIndex(12,h.x),n.addAtIndex(13,h.y),n.addAtIndex(14,h.z)}this._markAsDirtyAndDecompose()},r.prototype.setPosition=function(e,t,i){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix();if(t==c.c.LOCAL)n.setTranslationFromFloats(e.x,e.y,e.z);else{var a=null;i&&(a=i.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=r._tmpMats[0],h=r._tmpVecs[0];this._parent?(i&&a?(l.copyFrom(this._parent.getAbsoluteTransform()),l.multiplyToRef(a,l)):l.copyFrom(this._parent.getAbsoluteTransform()),l.invert()):o.a.IdentityToRef(l),o.e.TransformCoordinatesToRef(e,l,h),n.setTranslationFromFloats(h.x,h.y,h.z)}this._markAsDirtyAndDecompose()},r.prototype.setAbsolutePosition=function(e,t){this.setPosition(e,c.c.WORLD,t)},r.prototype.scale=function(e,t,i,n){n===void 0&&(n=!1);var a=this.getLocalMatrix(),l=r._tmpMats[0];o.a.ScalingToRef(e,t,i,l),l.multiplyToRef(a,a),l.invert();for(var h=0,u=this.children;h<u.length;h++){var g=u[h],A=g.getLocalMatrix();A.multiplyToRef(l,A),A.multiplyAtIndex(12,e),A.multiplyAtIndex(13,t),A.multiplyAtIndex(14,i),g._markAsDirtyAndDecompose()}if(this._markAsDirtyAndDecompose(),n)for(var R=0,S=this.children;R<S.length;R++){var g=S[R];g.scale(e,t,i,n)}},r.prototype.setScale=function(e){this._decompose(),this._localScaling.copyFrom(e),this._markAsDirtyAndCompose()},r.prototype.getScale=function(){return this._decompose(),this._localScaling},r.prototype.getScaleToRef=function(e){this._decompose(),e.copyFrom(this._localScaling)},r.prototype.setYawPitchRoll=function(e,t,i,n,a){if(n===void 0&&(n=c.c.LOCAL),n===c.c.LOCAL){var l=r._tmpQuat;o.b.RotationYawPitchRollToRef(e,t,i,l),this.setRotationQuaternion(l,n,a);return}var h=r._tmpMats[0];if(!!this._getNegativeRotationToRef(h,a)){var u=r._tmpMats[1];o.a.RotationYawPitchRollToRef(e,t,i,u),h.multiplyToRef(u,u),this._rotateWithMatrix(u,n,a)}},r.prototype.rotate=function(e,t,i,n){i===void 0&&(i=c.c.LOCAL);var a=r._tmpMats[0];a.setTranslationFromFloats(0,0,0),o.a.RotationAxisToRef(e,t,a),this._rotateWithMatrix(a,i,n)},r.prototype.setAxisAngle=function(e,t,i,n){if(i===void 0&&(i=c.c.LOCAL),i===c.c.LOCAL){var a=r._tmpQuat;o.b.RotationAxisToRef(e,t,a),this.setRotationQuaternion(a,i,n);return}var l=r._tmpMats[0];if(!!this._getNegativeRotationToRef(l,n)){var h=r._tmpMats[1];o.a.RotationAxisToRef(e,t,h),l.multiplyToRef(h,h),this._rotateWithMatrix(h,i,n)}},r.prototype.setRotation=function(e,t,i){t===void 0&&(t=c.c.LOCAL),this.setYawPitchRoll(e.y,e.x,e.z,t,i)},r.prototype.setRotationQuaternion=function(e,t,i){if(t===void 0&&(t=c.c.LOCAL),t===c.c.LOCAL){this._decompose(),this._localRotation.copyFrom(e),this._markAsDirtyAndCompose();return}var n=r._tmpMats[0];if(!!this._getNegativeRotationToRef(n,i)){var a=r._tmpMats[1];o.a.FromQuaternionToRef(e,a),n.multiplyToRef(a,a),this._rotateWithMatrix(a,t,i)}},r.prototype.setRotationMatrix=function(e,t,i){if(t===void 0&&(t=c.c.LOCAL),t===c.c.LOCAL){var n=r._tmpQuat;o.b.FromRotationMatrixToRef(e,n),this.setRotationQuaternion(n,t,i);return}var a=r._tmpMats[0];if(!!this._getNegativeRotationToRef(a,i)){var l=r._tmpMats[1];l.copyFrom(e),a.multiplyToRef(e,l),this._rotateWithMatrix(l,t,i)}},r.prototype._rotateWithMatrix=function(e,t,i){t===void 0&&(t=c.c.LOCAL);var n=this.getLocalMatrix(),a=n.m[12],l=n.m[13],h=n.m[14],u=this.getParent(),g=r._tmpMats[3],A=r._tmpMats[4];u&&t==c.c.WORLD?(i?(g.copyFrom(i.getWorldMatrix()),u.getAbsoluteTransform().multiplyToRef(g,g)):g.copyFrom(u.getAbsoluteTransform()),A.copyFrom(g),A.invert(),n.multiplyToRef(g,n),n.multiplyToRef(e,n),n.multiplyToRef(A,n)):t==c.c.WORLD&&i?(g.copyFrom(i.getWorldMatrix()),A.copyFrom(g),A.invert(),n.multiplyToRef(g,n),n.multiplyToRef(e,n),n.multiplyToRef(A,n)):n.multiplyToRef(e,n),n.setTranslationFromFloats(a,l,h),this.computeAbsoluteTransforms(),this._markAsDirtyAndDecompose()},r.prototype._getNegativeRotationToRef=function(e,t){var i=r._tmpMats[2];return e.copyFrom(this.getAbsoluteTransform()),t&&(e.multiplyToRef(t.getWorldMatrix(),e),o.a.ScalingToRef(t.scaling.x,t.scaling.y,t.scaling.z,i)),e.invert(),isNaN(e.m[0])?!1:(i.multiplyAtIndex(0,this._scalingDeterminant),e.multiplyToRef(i,e),!0)},r.prototype.getPosition=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var i=o.e.Zero();return this.getPositionToRef(e,t,i),i},r.prototype.getPositionToRef=function(e,t,i){if(e===void 0&&(e=c.c.LOCAL),e==c.c.LOCAL){var n=this.getLocalMatrix();i.x=n.m[12],i.y=n.m[13],i.z=n.m[14]}else{var a=null;t&&(a=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var l=r._tmpMats[0];t&&a?(l.copyFrom(this.getAbsoluteTransform()),l.multiplyToRef(a,l)):l=this.getAbsoluteTransform(),i.x=l.m[12],i.y=l.m[13],i.z=l.m[14]}},r.prototype.getAbsolutePosition=function(e){e===void 0&&(e=null);var t=o.e.Zero();return this.getPositionToRef(c.c.WORLD,e,t),t},r.prototype.getAbsolutePositionToRef=function(e,t){this.getPositionToRef(c.c.WORLD,e,t)},r.prototype.computeAbsoluteTransforms=function(){if(this._compose(),this._parent)this._localMatrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);else{this._absoluteTransform.copyFrom(this._localMatrix);var e=this._skeleton.getPoseMatrix();e&&this._absoluteTransform.multiplyToRef(e,this._absoluteTransform)}for(var t=this.children,i=t.length,n=0;n<i;n++)t[n].computeAbsoluteTransforms()},r.prototype.getDirection=function(e,t){t===void 0&&(t=null);var i=o.e.Zero();return this.getDirectionToRef(e,t,i),i},r.prototype.getDirectionToRef=function(e,t,i){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=r._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),t&&n&&a.multiplyToRef(n,a),o.e.TransformNormalToRef(e,a,i),i.normalize()},r.prototype.getRotation=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var i=o.e.Zero();return this.getRotationToRef(e,t,i),i},r.prototype.getRotationToRef=function(e,t,i){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var n=r._tmpQuat;this.getRotationQuaternionToRef(e,t,n),n.toEulerAnglesToRef(i)},r.prototype.getRotationQuaternion=function(e,t){e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null);var i=o.b.Identity();return this.getRotationQuaternionToRef(e,t,i),i},r.prototype.getRotationQuaternionToRef=function(e,t,i){if(e===void 0&&(e=c.c.LOCAL),t===void 0&&(t=null),e==c.c.LOCAL)this._decompose(),i.copyFrom(this._localRotation);else{var n=r._tmpMats[0],a=this.getAbsoluteTransform();t?a.multiplyToRef(t.getWorldMatrix(),n):n.copyFrom(a),n.multiplyAtIndex(0,this._scalingDeterminant),n.multiplyAtIndex(1,this._scalingDeterminant),n.multiplyAtIndex(2,this._scalingDeterminant),n.decompose(void 0,i,void 0)}},r.prototype.getRotationMatrix=function(e,t){e===void 0&&(e=c.c.LOCAL);var i=o.a.Identity();return this.getRotationMatrixToRef(e,t,i),i},r.prototype.getRotationMatrixToRef=function(e,t,i){if(e===void 0&&(e=c.c.LOCAL),e==c.c.LOCAL)this.getLocalMatrix().getRotationMatrixToRef(i);else{var n=r._tmpMats[0],a=this.getAbsoluteTransform();t?a.multiplyToRef(t.getWorldMatrix(),n):n.copyFrom(a),n.multiplyAtIndex(0,this._scalingDeterminant),n.multiplyAtIndex(1,this._scalingDeterminant),n.multiplyAtIndex(2,this._scalingDeterminant),n.getRotationMatrixToRef(i)}},r.prototype.getAbsolutePositionFromLocal=function(e,t){t===void 0&&(t=null);var i=o.e.Zero();return this.getAbsolutePositionFromLocalToRef(e,t,i),i},r.prototype.getAbsolutePositionFromLocalToRef=function(e,t,i){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=r._tmpMats[0];t&&n?(a.copyFrom(this.getAbsoluteTransform()),a.multiplyToRef(n,a)):a=this.getAbsoluteTransform(),o.e.TransformCoordinatesToRef(e,a,i)},r.prototype.getLocalPositionFromAbsolute=function(e,t){t===void 0&&(t=null);var i=o.e.Zero();return this.getLocalPositionFromAbsoluteToRef(e,t,i),i},r.prototype.getLocalPositionFromAbsoluteToRef=function(e,t,i){t===void 0&&(t=null);var n=null;t&&(n=t.getWorldMatrix()),this._skeleton.computeAbsoluteTransforms();var a=r._tmpMats[0];a.copyFrom(this.getAbsoluteTransform()),t&&n&&a.multiplyToRef(n,a),a.invert(),o.e.TransformCoordinatesToRef(e,a,i)},r.prototype.setCurrentPoseAsRest=function(){this.setRestPose(this.getLocalMatrix())},r._tmpVecs=E.a.BuildArray(2,o.e.Zero),r._tmpQuat=o.b.Identity(),r._tmpMats=E.a.BuildArray(5,o.a.Identity),r}(v.a)},545:function($,W,s){"use strict";s.d(W,"a",function(){return c});var f=s(444),o=s(625),E=s(500),v=s(566),c=function(){function O(){}return O.ExpandRGBDTexture=function(p){var r=p._texture;if(!(!r||!p.isRGBD)){var e=r.getEngine(),t=e.getCaps(),i=!1;t.textureHalfFloatRender&&t.textureHalfFloatLinearFiltering?(i=!0,r.type=2):t.textureFloatRender&&t.textureFloatLinearFiltering&&(i=!0,r.type=1),i&&(r.isReady=!1,r._isRGBD=!1,r.invertY=!1),p.onLoadObservable.addOnce(function(){if(i){var n=new f.a("rgbdDecode","rgbdDecode",null,null,1,null,3,e,!1,void 0,r.type,void 0,null,!1),a=e.createRenderTargetTexture(r.width,{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:r.samplingMode,type:r.type,format:5});n.getEffect().executeWhenCompiled(function(){n.onApply=function(l){l._bindTexture("textureSampler",r),l.setFloat2("scale",1,1)},p.getScene().postProcessManager.directRender([n],a,!0),e.restoreDefaultFramebuffer(),e._releaseTexture(r),e._releaseFramebufferObjects(a),n&&n.dispose(),a._swapAndDie(r),r.isReady=!0})}})}},O.EncodeTextureToRGBD=function(p,r,e){return e===void 0&&(e=0),v.a.ApplyPostProcess("rgbdEncode",p,r,e,1,5)},O}()},547:function($,W,s){"use strict";s.d(W,"a",function(){return v});var f=s(449),o=s(452),E=s(502);Object.defineProperty(f.a.prototype,"geometryBufferRenderer",{get:function(){this._geometryBufferRenderer},set:function(c){c&&c.isSupported&&(this._geometryBufferRenderer=c)},enumerable:!0,configurable:!0}),f.a.prototype.enableGeometryBufferRenderer=function(c){return c===void 0&&(c=1),this._geometryBufferRenderer?this._geometryBufferRenderer:(this._geometryBufferRenderer=new E.a(this,c),this._geometryBufferRenderer.isSupported||(this._geometryBufferRenderer=null),this._geometryBufferRenderer)},f.a.prototype.disableGeometryBufferRenderer=function(){!this._geometryBufferRenderer||(this._geometryBufferRenderer.dispose(),this._geometryBufferRenderer=null)};var v=function(){function c(O){this.name=o.a.NAME_GEOMETRYBUFFERRENDERER,this.scene=O}return c.prototype.register=function(){this.scene._gatherRenderTargetsStage.registerStep(o.a.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER,this,this._gatherRenderTargets)},c.prototype.rebuild=function(){},c.prototype.dispose=function(){},c.prototype._gatherRenderTargets=function(O){this.scene._geometryBufferRenderer&&O.push(this.scene._geometryBufferRenderer.getGBuffer())},c}();E.a._SceneComponentInitialization=function(c){var O=c._getComponent(o.a.NAME_GEOMETRYBUFFERRENDERER);O||(O=new v(c),c._addComponent(O))}},548:function($,W,s){"use strict";s.d(W,"a",function(){return f});var f=function(){function o(){this._renderPipelines={}}return Object.defineProperty(o.prototype,"supportedPipelines",{get:function(){var E=[];for(var v in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(v)){var c=this._renderPipelines[v];c.isSupported&&E.push(c)}return E},enumerable:!1,configurable:!0}),o.prototype.addPipeline=function(E){this._renderPipelines[E._name]=E},o.prototype.attachCamerasToRenderPipeline=function(E,v,c){c===void 0&&(c=!1);var O=this._renderPipelines[E];!O||O._attachCameras(v,c)},o.prototype.detachCamerasFromRenderPipeline=function(E,v){var c=this._renderPipelines[E];!c||c._detachCameras(v)},o.prototype.enableEffectInPipeline=function(E,v,c){var O=this._renderPipelines[E];!O||O._enableEffect(v,c)},o.prototype.disableEffectInPipeline=function(E,v,c){var O=this._renderPipelines[E];!O||O._disableEffect(v,c)},o.prototype.update=function(){for(var E in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(E)){var v=this._renderPipelines[E];v.isSupported?v._update():(v.dispose(),delete this._renderPipelines[E])}},o.prototype._rebuild=function(){for(var E in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(E)){var v=this._renderPipelines[E];v._rebuild()}},o.prototype.dispose=function(){for(var E in this._renderPipelines)if(this._renderPipelines.hasOwnProperty(E)){var v=this._renderPipelines[E];v.dispose()}},o}()},549:function($,W,s){"use strict";s.d(W,"a",function(){return o});const f=()=>!!document.createElement("canvas").getContext("webgl2"),o=()=>f()?"webgl2":"webgl"},554:function($,W,s){"use strict";s.d(W,"a",function(){return f});var f=function(){function o(E,v){v===void 0&&(v=20),this.debug=!1,this._sourceCode=E,this._numMaxIterations=v,this._functionDescr=[],this.inlineToken="#define inline"}return Object.defineProperty(o.prototype,"code",{get:function(){return this._sourceCode},enumerable:!1,configurable:!0}),o.prototype.processCode=function(){this.debug&&console.log("Start inlining process (code size="+this._sourceCode.length+")..."),this._collectFunctions(),this._processInlining(this._numMaxIterations),this.debug&&console.log("End of inlining process.")},o.prototype._collectFunctions=function(){for(var E=0;E<this._sourceCode.length;){var v=this._sourceCode.indexOf(this.inlineToken,E);if(v<0)break;var c=this._sourceCode.indexOf("(",v+this.inlineToken.length);if(c<0){this.debug&&console.warn("Could not find the opening parenthesis after the token. startIndex="+E),E=v+this.inlineToken.length;continue}var O=o._RegexpFindFunctionNameAndType.exec(this._sourceCode.substring(v+this.inlineToken.length,c));if(!O){this.debug&&console.warn("Could not extract the name/type of the function from: "+this._sourceCode.substring(v+this.inlineToken.length,c)),E=v+this.inlineToken.length;continue}var p=[O[3],O[4]],r=p[0],e=p[1],t=this._extractBetweenMarkers("(",")",this._sourceCode,c);if(t<0){this.debug&&console.warn("Could not extract the parameters the function '"+e+"' (type="+r+"). funcParamsStartIndex="+c),E=v+this.inlineToken.length;continue}var i=this._sourceCode.substring(c+1,t),n=this._skipWhitespaces(this._sourceCode,t+1);if(n===this._sourceCode.length){this.debug&&console.warn("Could not extract the body of the function '"+e+"' (type="+r+"). funcParamsEndIndex="+t),E=v+this.inlineToken.length;continue}var a=this._extractBetweenMarkers("{","}",this._sourceCode,n);if(a<0){this.debug&&console.warn("Could not extract the body of the function '"+e+"' (type="+r+"). funcBodyStartIndex="+n),E=v+this.inlineToken.length;continue}for(var l=this._sourceCode.substring(n,a+1),h=this._removeComments(i).split(","),u=[],g=0;g<h.length;++g){var A=h[g].trim(),R=A.lastIndexOf(" ");R>=0&&u.push(A.substring(R+1))}r!=="void"&&u.push("return"),this._functionDescr.push({name:e,type:r,parameters:u,body:l,callIndex:0}),E=a+1;var S=v>0?this._sourceCode.substring(0,v):"",P=a+1<this._sourceCode.length-1?this._sourceCode.substring(a+1):"";this._sourceCode=S+P,E-=a+1-v}this.debug&&console.log("Collect functions: "+this._functionDescr.length+" functions found. functionDescr=",this._functionDescr)},o.prototype._processInlining=function(E){for(E===void 0&&(E=20);E-->=0&&this._replaceFunctionCallsByCode(););return this.debug&&console.log("numMaxIterations is "+E+" after inlining process"),E>=0},o.prototype._extractBetweenMarkers=function(E,v,c,O){for(var p=O,r=0,e="";p<c.length;){var t=c.charAt(p);if(e)t===e?e==='"'||e==="'"?c.charAt(p-1)!=="\\"&&(e=""):e="":e==="*/"&&t==="*"&&p+1<c.length&&(c.charAt(p+1)==="/"&&(e=""),e===""&&p++);else switch(t){case E:r++;break;case v:r--;break;case'"':case"'":case"`":e=t;break;case"/":if(p+1<c.length){var i=c.charAt(p+1);i==="/"?e=`
`:i==="*"&&(e="*/")}break}if(p++,r===0)break}return r===0?p-1:-1},o.prototype._skipWhitespaces=function(E,v){for(;v<E.length;){var c=E[v];if(c!==" "&&c!==`
`&&c!=="\r"&&c!=="	"&&c!==`
`&&c!=="\xA0")break;v++}return v},o.prototype._isIdentifierChar=function(E){var v=E.charCodeAt(0);return v>=48&&v<=57||v>=65&&v<=90||v>=97&&v<=122||v==95},o.prototype._removeComments=function(E){for(var v=0,c="",O=!1,p=[];v<E.length;){var r=E.charAt(v);if(c)r===c?c==='"'||c==="'"?(E.charAt(v-1)!=="\\"&&(c=""),p.push(r)):(c="",O=!1):c==="*/"&&r==="*"&&v+1<E.length?(E.charAt(v+1)==="/"&&(c=""),c===""&&(O=!1,v++)):O||p.push(r);else{switch(r){case'"':case"'":case"`":c=r;break;case"/":if(v+1<E.length){var e=E.charAt(v+1);e==="/"?(c=`
`,O=!0):e==="*"&&(c="*/",O=!0)}break}O||p.push(r)}v++}return p.join("")},o.prototype._replaceFunctionCallsByCode=function(){for(var E=this,v=!1,c=0,O=this._functionDescr;c<O.length;c++)for(var p=O[c],r=p.name,e=p.type,t=p.parameters,i=p.body,n=0;n<this._sourceCode.length;){var a=this._sourceCode.indexOf(r,n);if(a<0)break;if(a===0||this._isIdentifierChar(this._sourceCode.charAt(a-1))){n=a+r.length;continue}var l=this._skipWhitespaces(this._sourceCode,a+r.length);if(l===this._sourceCode.length||this._sourceCode.charAt(l)!=="("){n=a+r.length;continue}var h=this._extractBetweenMarkers("(",")",this._sourceCode,l);if(h<0){this.debug&&console.warn("Could not extract the parameters of the function call. Function '"+r+"' (type="+e+"). callParamsStartIndex="+l),n=a+r.length;continue}var u=this._sourceCode.substring(l+1,h),g=function(x){for(var _=[],j=0,G=0;j<x.length;){if(x.charAt(j)==="("){var y=E._extractBetweenMarkers("(",")",x,j);if(y<0)return null;j=y}else x.charAt(j)===","&&(_.push(x.substring(G,j)),G=j+1);j++}return G<j&&_.push(x.substring(G,j)),_},A=g(this._removeComments(u));if(A===null){this.debug&&console.warn("Invalid function call: can't extract the parameters of the function call. Function '"+r+"' (type="+e+"). callParamsStartIndex="+l+", callParams="+u),n=a+r.length;continue}for(var R=[],S=0;S<A.length;++S){var P=A[S].trim();R.push(P)}var D=e!=="void"?r+"_"+p.callIndex++:null;if(D&&R.push(D+" ="),R.length!==t.length){this.debug&&console.warn("Invalid function call: not the same number of parameters for the call than the number expected by the function. Function '"+r+"' (type="+e+"). function parameters="+t+", call parameters="+R),n=a+r.length;continue}n=h+1;var L=this._replaceNames(i,t,R),U=a>0?this._sourceCode.substring(0,a):"",F=h+1<this._sourceCode.length-1?this._sourceCode.substring(h+1):"";if(D){var V=this._findBackward(this._sourceCode,a-1,`
`);U=this._sourceCode.substring(0,V+1);var I=this._sourceCode.substring(V+1,a);this._sourceCode=U+e+" "+D+`;
`+L+`
`+I+D+F,this.debug&&console.log("Replace function call by code. Function '"+r+"' (type="+e+"). injectDeclarationIndex="+V+", call parameters="+R)}else this._sourceCode=U+L+F,n+=L.length-(h+1-a),this.debug&&console.log("Replace function call by code. Function '"+r+"' (type="+e+"). functionCallIndex="+a+", call parameters="+R);v=!0}return v},o.prototype._findBackward=function(E,v,c){for(;v>=0&&E.charAt(v)!==c;)v--;return v},o.prototype._escapeRegExp=function(E){return E.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},o.prototype._replaceNames=function(E,v,c){for(var O=this,p=function(t){var i=new RegExp(r._escapeRegExp(v[t]),"g"),n=v[t].length,a=c[t];E=E.replace(i,function(l){for(var h=[],u=1;u<arguments.length;u++)h[u-1]=arguments[u];var g=h[0];return O._isIdentifierChar(E.charAt(g-1))||O._isIdentifierChar(E.charAt(g+n))?v[t]:a})},r=this,e=0;e<v.length;++e)p(e);return E},o._RegexpFindFunctionNameAndType=/((\s+?)(\w+)\s+(\w+)\s*?)$/,o}()},566:function($,W,s){"use strict";s.d(W,"a",function(){return c});var f=s(442),o=s(458),E=s(486),v=s(444),c=function(){function O(){}return O.CreateResizedCopy=function(p,r,e,t){t===void 0&&(t=!0);var i=p.getScene(),n=i.getEngine(),a=new o.a("resized"+p.name,{width:r,height:e},i,!p.noMipmap,!0,p._texture.type,!1,p.samplingMode,!1);a.wrapU=p.wrapU,a.wrapV=p.wrapV,a.uOffset=p.uOffset,a.vOffset=p.vOffset,a.uScale=p.uScale,a.vScale=p.vScale,a.uAng=p.uAng,a.vAng=p.vAng,a.wAng=p.wAng,a.coordinatesIndex=p.coordinatesIndex,a.level=p.level,a.anisotropicFilteringLevel=p.anisotropicFilteringLevel,a._texture.isReady=!1,p.wrapU=f.a.CLAMP_ADDRESSMODE,p.wrapV=f.a.CLAMP_ADDRESSMODE;var l=new E.b("pass",1,null,t?f.a.BILINEAR_SAMPLINGMODE:f.a.NEAREST_SAMPLINGMODE,n,!1,0);return l.getEffect().executeWhenCompiled(function(){l.onApply=function(u){u.setTexture("textureSampler",p)};var h=a.getInternalTexture();h&&(i.postProcessManager.directRender([l],h),n.unBindFramebuffer(h),a.disposeFramebufferObjects(),l.dispose(),h.isReady=!0)}),a},O.ApplyPostProcess=function(p,r,e,t,i,n){var a=r.getEngine();return r.isReady=!1,i=i!=null?i:r.samplingMode,t=t!=null?t:r.type,n=n!=null?n:r.format,t===-1&&(t=0),new Promise(function(l){var h=new v.a("postprocess",p,null,null,1,null,i,a,!1,void 0,t,void 0,null,!1,n),u=a.createRenderTargetTexture({width:r.width,height:r.height},{generateDepthBuffer:!1,generateMipMaps:!1,generateStencilBuffer:!1,samplingMode:i,type:t,format:n});h.getEffect().executeWhenCompiled(function(){h.onApply=function(g){g._bindTexture("textureSampler",r),g.setFloat2("scale",1,1)},e.postProcessManager.directRender([h],u,!0),a.restoreDefaultFramebuffer(),a._releaseTexture(r),a._releaseFramebufferObjects(u),h&&h.dispose(),u._swapAndDie(r),r.type=t,r.format=5,r.isReady=!0,l(r)})})},O}()},570:function($,W,s){"use strict";s.d(W,"b",function(){return r}),s.d(W,"a",function(){return e});var f=s(434),o=s(436),E=s(442),v=s(466),c=s(582),O=s(580),p=s(583),r;(function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"})(r||(r={}));var e=function(t){Object(f.d)(i,t);function i(n,a,l,h,u){l===void 0&&(l=r.Low),h===void 0&&(h=0),u===void 0&&(u=!1);var g=t.call(this,n.getEngine(),"depth of field",function(){return g._effects},!0)||this;g._effects=[],g._circleOfConfusion=new c.a("circleOfConfusion",a,1,null,E.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u),g._depthOfFieldBlurY=[],g._depthOfFieldBlurX=[];var A=1,R=15;switch(l){case r.High:{A=3,R=51;break}case r.Medium:{A=2,R=31;break}default:{R=15,A=1;break}}for(var S=R/Math.pow(2,A-1),P=1,D=0;D<A;D++){var L=new O.a("vertical blur",n,new o.d(0,1),S,P,null,g._circleOfConfusion,D==0?g._circleOfConfusion:null,E.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u);L.autoClear=!1,P=.75/Math.pow(2,D);var U=new O.a("horizontal blur",n,new o.d(1,0),S,P,null,g._circleOfConfusion,null,E.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u);U.autoClear=!1,g._depthOfFieldBlurY.push(L),g._depthOfFieldBlurX.push(U)}g._effects=[g._circleOfConfusion];for(var D=0;D<g._depthOfFieldBlurX.length;D++)g._effects.push(g._depthOfFieldBlurY[D]),g._effects.push(g._depthOfFieldBlurX[D]);return g._dofMerge=new p.a("dofMerge",g._circleOfConfusion,g._circleOfConfusion,g._depthOfFieldBlurX,P,null,E.a.BILINEAR_SAMPLINGMODE,n.getEngine(),!1,h,u),g._dofMerge.autoClear=!1,g._effects.push(g._dofMerge),g}return Object.defineProperty(i.prototype,"focalLength",{get:function(){return this._circleOfConfusion.focalLength},set:function(n){this._circleOfConfusion.focalLength=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"fStop",{get:function(){return this._circleOfConfusion.fStop},set:function(n){this._circleOfConfusion.fStop=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"focusDistance",{get:function(){return this._circleOfConfusion.focusDistance},set:function(n){this._circleOfConfusion.focusDistance=n},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lensSize",{get:function(){return this._circleOfConfusion.lensSize},set:function(n){this._circleOfConfusion.lensSize=n},enumerable:!1,configurable:!0}),i.prototype.getClassName=function(){return"DepthOfFieldEffect"},Object.defineProperty(i.prototype,"depthTexture",{set:function(n){this._circleOfConfusion.depthTexture=n},enumerable:!1,configurable:!0}),i.prototype.disposeEffects=function(n){for(var a=0;a<this._effects.length;a++)this._effects[a].dispose(n)},i.prototype._updateEffects=function(){for(var n=0;n<this._effects.length;n++)this._effects[n].updateEffect()},i.prototype._isReady=function(){for(var n=0;n<this._effects.length;n++)if(!this._effects[n].isReady())return!1;return!0},i}(v.a)},571:function($,W,s){"use strict";s.d(W,"a",function(){return h});var f=s(434),o=s(440),E=s(436),v=s(444),c=s(502),O=function(){function u(){this.enabled=!1,this.name="motionBlur",this.texturesRequired=[2]}return u}(),p=s(530),r=s(547),e=s(435),t="motionBlurPixelShader",i=`
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
`;e.a.ShadersStore[t]=i;var n={name:t,shader:i},a=s(439),l=s(437),h=function(u){Object(f.d)(g,u);function g(A,R,S,P,D,L,U,F,V,I){F===void 0&&(F=0),V===void 0&&(V=!1),I===void 0&&(I=!1);var x=u.call(this,A,"motionBlur",["motionStrength","motionScale","screenSize","inverseViewProjection","prevViewProjection"],["velocitySampler"],S,P,D,L,U,`#define GEOMETRY_SUPPORTED
#define SAMPLES 64.0
#define OBJECT_BASED`,F,void 0,null,V)||this;return x.motionStrength=1,x._motionBlurSamples=32,x._isObjectBased=!0,x._forceGeometryBuffer=!1,x._geometryBufferRenderer=null,x._prePassRenderer=null,x._invViewProjection=null,x._previousViewProjection=null,x._forceGeometryBuffer=I,x._forceGeometryBuffer?(x._geometryBufferRenderer=R.enableGeometryBufferRenderer(),x._geometryBufferRenderer&&(x._geometryBufferRenderer.enableVelocity=!0)):(x._prePassRenderer=R.enablePrePassRenderer(),x._prePassRenderer&&(x._prePassRenderer.markAsDirty(),x._prePassEffectConfiguration=new O)),x._applyMode(),x}return Object.defineProperty(g.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(A){this._motionBlurSamples=A,this._updateEffect()},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"isObjectBased",{get:function(){return this._isObjectBased},set:function(A){this._isObjectBased!==A&&(this._isObjectBased=A,this._applyMode())},enumerable:!1,configurable:!0}),g.prototype.getClassName=function(){return"MotionBlurPostProcess"},g.prototype.excludeSkinnedMesh=function(A){if(A.skeleton){var R=void 0;if(this._geometryBufferRenderer)R=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)R=this._prePassRenderer.excludedSkinnedMesh;else return;R.push(A)}},g.prototype.removeExcludedSkinnedMesh=function(A){if(A.skeleton){var R=void 0;if(this._geometryBufferRenderer)R=this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity;else if(this._prePassRenderer)R=this._prePassRenderer.excludedSkinnedMesh;else return;var S=R.indexOf(A);S!==-1&&R.splice(S,1)}},g.prototype.dispose=function(A){this._geometryBufferRenderer&&(this._geometryBufferRenderer._previousTransformationMatrices={},this._geometryBufferRenderer._previousBonesTransformationMatrices={},this._geometryBufferRenderer.excludedSkinnedMeshesFromVelocity=[]),u.prototype.dispose.call(this,A)},g.prototype._applyMode=function(){var A=this;if(!this._geometryBufferRenderer&&!this._prePassRenderer)return o.a.Warn("Multiple Render Target support needed to compute object based motion blur"),this.updateEffect();this._updateEffect(),this._invViewProjection=null,this._previousViewProjection=null,this.isObjectBased?(this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=2),this.onApply=function(R){return A._onApplyObjectBased(R)}):(this._invViewProjection=E.a.Identity(),this._previousViewProjection=E.a.Identity(),this._prePassRenderer&&this._prePassEffectConfiguration&&(this._prePassEffectConfiguration.texturesRequired[0]=5),this.onApply=function(R){return A._onApplyScreenBased(R)})},g.prototype._onApplyObjectBased=function(A){if(A.setVector2("screenSize",new E.d(this.width,this.height)),A.setFloat("motionScale",this._scene.getAnimationRatio()),A.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var R=this._geometryBufferRenderer.getTextureIndex(c.a.VELOCITY_TEXTURE_TYPE);A.setTexture("velocitySampler",this._geometryBufferRenderer.getGBuffer().textures[R])}else if(this._prePassRenderer){var R=this._prePassRenderer.getIndex(2);A.setTexture("velocitySampler",this._prePassRenderer.getRenderTarget().textures[R])}},g.prototype._onApplyScreenBased=function(A){var R=this._scene.getProjectionMatrix().multiply(this._scene.getViewMatrix());if(R.invertToRef(this._invViewProjection),A.setMatrix("inverseViewProjection",this._invViewProjection),A.setMatrix("prevViewProjection",this._previousViewProjection),this._previousViewProjection=R,A.setVector2("screenSize",new E.d(this.width,this.height)),A.setFloat("motionScale",this._scene.getAnimationRatio()),A.setFloat("motionStrength",this.motionStrength),this._geometryBufferRenderer){var S=this._geometryBufferRenderer.getTextureIndex(c.a.DEPTH_TEXTURE_TYPE);A.setTexture("depthSampler",this._geometryBufferRenderer.getGBuffer().textures[S])}else if(this._prePassRenderer){var S=this._prePassRenderer.getIndex(5);A.setTexture("depthSampler",this._prePassRenderer.getRenderTarget().textures[S])}},g.prototype._updateEffect=function(){if(this._geometryBufferRenderer||this._prePassRenderer){var A=["#define GEOMETRY_SUPPORTED","#define SAMPLES "+this._motionBlurSamples.toFixed(1),this._isObjectBased?"#define OBJECT_BASED":"#define SCREEN_BASED"];this.updateEffect(A.join(`
`))}},g._Parse=function(A,R,S,P){return a.a.Parse(function(){return new g(A.name,S,A.options,R,A.renderTargetSamplingMode,S.getEngine(),A.reusable,A.textureType,!1)},A,S,P)},Object(f.c)([Object(a.c)()],g.prototype,"motionStrength",void 0),Object(f.c)([Object(a.c)()],g.prototype,"motionBlurSamples",null),Object(f.c)([Object(a.c)()],g.prototype,"isObjectBased",null),g}(v.a);l.a.RegisteredTypes["BABYLON.MotionBlurPostProcess"]=h},572:function($,W,s){"use strict";s.d(W,"a",function(){return t});var f=s(436),o=s(441),E=s(483),v=s(700),c=Object.freeze(new f.b(0,0,0,0)),O=Object.freeze(f.e.Zero()),p=Object.freeze(f.d.Zero()),r=Object.freeze(v.a.Zero()),e=Object.freeze(o.a.Black()),t=function(){function i(n,a,l,h){var u=this;if(this._events=new Array,this._currentFrame=0,this._originalValue=new Array,this._originalBlendValue=null,this._offsetsCache={},this._highLimitsCache={},this._stopped=!1,this._blendingFactor=0,this._currentValue=null,this._currentActiveTarget=null,this._directTarget=null,this._targetPath="",this._weight=1,this._ratioOffset=0,this._previousDelay=0,this._previousRatio=0,this._targetIsArray=!1,this._animation=a,this._target=n,this._scene=l,this._host=h,this._activeTargets=[],a._runtimeAnimations.push(this),this._animationState={key:0,repeatCount:0,loopMode:this._getCorrectLoopMode()},this._animation.dataType===E.a.ANIMATIONTYPE_MATRIX&&(this._animationState.workValue=f.a.Zero()),this._keys=this._animation.getKeys(),this._minFrame=this._keys[0].frame,this._maxFrame=this._keys[this._keys.length-1].frame,this._minValue=this._keys[0].value,this._maxValue=this._keys[this._keys.length-1].value,this._minFrame!==0){var g={frame:0,value:this._minValue};this._keys.splice(0,0,g)}if(this._target instanceof Array){for(var A=0,R=0,S=this._target;R<S.length;R++){var P=S[R];this._preparePath(P,A),this._getOriginalValues(A),A++}this._targetIsArray=!0}else this._preparePath(this._target),this._getOriginalValues(),this._targetIsArray=!1,this._directTarget=this._activeTargets[0];var D=a.getEvents();D&&D.length>0&&D.forEach(function(L){u._events.push(L._clone())}),this._enableBlending=n&&n.animationPropertiesOverride?n.animationPropertiesOverride.enableBlending:this._animation.enableBlending}return Object.defineProperty(i.prototype,"currentFrame",{get:function(){return this._currentFrame},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"weight",{get:function(){return this._weight},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"currentValue",{get:function(){return this._currentValue},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"targetPath",{get:function(){return this._targetPath},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"target",{get:function(){return this._currentActiveTarget},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isAdditive",{get:function(){return this._host&&this._host.isAdditive},enumerable:!1,configurable:!0}),i.prototype._preparePath=function(n,a){a===void 0&&(a=0);var l=this._animation.targetPropertyPath;if(l.length>1){for(var h=n[l[0]],u=1;u<l.length-1;u++)h=h[l[u]];this._targetPath=l[l.length-1],this._activeTargets[a]=h}else this._targetPath=l[0],this._activeTargets[a]=n},Object.defineProperty(i.prototype,"animation",{get:function(){return this._animation},enumerable:!1,configurable:!0}),i.prototype.reset=function(n){if(n===void 0&&(n=!1),n)if(this._target instanceof Array)for(var a=0,l=0,h=this._target;l<h.length;l++){var u=h[l];this._originalValue[a]!==void 0&&this._setValue(u,this._activeTargets[a],this._originalValue[a],-1,a),a++}else this._originalValue[0]!==void 0&&this._setValue(this._target,this._directTarget,this._originalValue[0],-1,0);this._offsetsCache={},this._highLimitsCache={},this._currentFrame=0,this._blendingFactor=0;for(var a=0;a<this._events.length;a++)this._events[a].isDone=!1},i.prototype.isStopped=function(){return this._stopped},i.prototype.dispose=function(){var n=this._animation.runtimeAnimations.indexOf(this);n>-1&&this._animation.runtimeAnimations.splice(n,1)},i.prototype.setValue=function(n,a){if(this._targetIsArray){for(var l=0;l<this._target.length;l++){var h=this._target[l];this._setValue(h,this._activeTargets[l],n,a,l)}return}this._setValue(this._target,this._directTarget,n,a,0)},i.prototype._getOriginalValues=function(n){n===void 0&&(n=0);var a,l=this._activeTargets[n];l.getRestPose&&this._targetPath==="_matrix"?a=l.getRestPose():a=l[this._targetPath],a&&a.clone?this._originalValue[n]=a.clone():this._originalValue[n]=a},i.prototype._setValue=function(n,a,l,h,u){if(this._currentActiveTarget=a,this._weight=h,this._enableBlending&&this._blendingFactor<=1){if(!this._originalBlendValue){var g=a[this._targetPath];g.clone?this._originalBlendValue=g.clone():this._originalBlendValue=g}this._originalBlendValue.m?E.a.AllowMatrixDecomposeForInterpolation?this._currentValue?f.a.DecomposeLerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.DecomposeLerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue?f.a.LerpToRef(this._originalBlendValue,l,this._blendingFactor,this._currentValue):this._currentValue=f.a.Lerp(this._originalBlendValue,l,this._blendingFactor):this._currentValue=E.a._UniversalLerp(this._originalBlendValue,l,this._blendingFactor);var A=n&&n.animationPropertiesOverride?n.animationPropertiesOverride.blendingSpeed:this._animation.blendingSpeed;this._blendingFactor+=A}else this._currentValue=l;h!==-1?this._scene._registerTargetForLateAnimationBinding(this,this._originalValue[u]):a[this._targetPath]=this._currentValue,n.markAsDirty&&n.markAsDirty(this._animation.targetProperty)},i.prototype._getCorrectLoopMode=function(){return this._target&&this._target.animationPropertiesOverride?this._target.animationPropertiesOverride.loopMode:this._animation.loopMode},i.prototype.goToFrame=function(n){var a=this._animation.getKeys();n<a[0].frame?n=a[0].frame:n>a[a.length-1].frame&&(n=a[a.length-1].frame);var l=this._events;if(l.length)for(var h=0;h<l.length;h++)l[h].onlyOnce||(l[h].isDone=l[h].frame<n);this._currentFrame=n;var u=this._animation._interpolate(n,this._animationState);this.setValue(u,-1)},i.prototype._prepareForSpeedRatioChange=function(n){var a=this._previousDelay*(this._animation.framePerSecond*n)/1e3;this._ratioOffset=this._previousRatio-a},i.prototype.animate=function(n,a,l,h,u,g){g===void 0&&(g=-1);var A=this._animation,R=A.targetPropertyPath;if(!R||R.length<1)return this._stopped=!0,!1;var S=!0;(a<this._minFrame||a>this._maxFrame)&&(a=this._minFrame),(l<this._minFrame||l>this._maxFrame)&&(l=this._maxFrame);var P=l-a,D,L=n*(A.framePerSecond*u)/1e3+this._ratioOffset,U=0;if(this._previousDelay=n,this._previousRatio=L,!h&&l>=a&&L>=P)S=!1,U=A._getKeyValue(this._maxValue);else if(!h&&a>=l&&L<=P)S=!1,U=A._getKeyValue(this._minValue);else if(this._animationState.loopMode!==E.a.ANIMATIONLOOPMODE_CYCLE){var F=l.toString()+a.toString();if(!this._offsetsCache[F]){this._animationState.repeatCount=0,this._animationState.loopMode=E.a.ANIMATIONLOOPMODE_CYCLE;var V=A._interpolate(a,this._animationState),I=A._interpolate(l,this._animationState);switch(this._animationState.loopMode=this._getCorrectLoopMode(),A.dataType){case E.a.ANIMATIONTYPE_FLOAT:this._offsetsCache[F]=I-V;break;case E.a.ANIMATIONTYPE_QUATERNION:this._offsetsCache[F]=I.subtract(V);break;case E.a.ANIMATIONTYPE_VECTOR3:this._offsetsCache[F]=I.subtract(V);break;case E.a.ANIMATIONTYPE_VECTOR2:this._offsetsCache[F]=I.subtract(V);break;case E.a.ANIMATIONTYPE_SIZE:this._offsetsCache[F]=I.subtract(V);break;case E.a.ANIMATIONTYPE_COLOR3:this._offsetsCache[F]=I.subtract(V);break;default:break}this._highLimitsCache[F]=I}U=this._highLimitsCache[F],D=this._offsetsCache[F]}if(D===void 0)switch(A.dataType){case E.a.ANIMATIONTYPE_FLOAT:D=0;break;case E.a.ANIMATIONTYPE_QUATERNION:D=c;break;case E.a.ANIMATIONTYPE_VECTOR3:D=O;break;case E.a.ANIMATIONTYPE_VECTOR2:D=p;break;case E.a.ANIMATIONTYPE_SIZE:D=r;break;case E.a.ANIMATIONTYPE_COLOR3:D=e}var x;if(this._host&&this._host.syncRoot){var _=this._host.syncRoot,j=(_.masterFrame-_.fromFrame)/(_.toFrame-_.fromFrame);x=a+(l-a)*j}else x=S&&P!==0?a+L%P:l;var G=this._events;if((P>0&&this.currentFrame>x||P<0&&this.currentFrame<x)&&(this._onLoop(),G.length))for(var y=0;y<G.length;y++)G[y].onlyOnce||(G[y].isDone=!1);this._currentFrame=x,this._animationState.repeatCount=P===0?0:L/P>>0,this._animationState.highLimitValue=U,this._animationState.offsetValue=D;var Y=A._interpolate(x,this._animationState);if(this.setValue(Y,g),G.length){for(var y=0;y<G.length;y++)if(P>0&&x>=G[y].frame&&G[y].frame>=a||P<0&&x<=G[y].frame&&G[y].frame<=a){var Z=G[y];Z.isDone||(Z.onlyOnce&&(G.splice(y,1),y--),Z.isDone=!0,Z.action(x))}}return S||(this._stopped=!0),S},i}()},574:function($,W,s){"use strict";var f=s(456),o=s(440),E=s(467);E.a.prototype.restoreSingleAttachment=function(){var v=this._gl;this.bindAttachments([v.BACK])},E.a.prototype.restoreSingleAttachmentForRenderTarget=function(){var v=this._gl;this.bindAttachments([v.COLOR_ATTACHMENT0])},E.a.prototype.buildTextureLayout=function(v){for(var c=this._gl,O=[],p=0;p<v.length;p++)v[p]?O.push(c["COLOR_ATTACHMENT"+p]):O.push(c.NONE);return O},E.a.prototype.bindAttachments=function(v){var c=this._gl;c.drawBuffers(v)},E.a.prototype.clearAttachments=function(v,c,O,p,r){if(v.length!==0){var e=this._gl;e.drawBuffers([v[0]]),this.clear(c,c!==null,p,r);var t=v[0];v[0]=e.NONE,e.drawBuffers(v),this.clear(O,O!==null,!1,!1),v[0]=t}},E.a.prototype.unBindMultiColorAttachmentFramebuffer=function(v,c,O){c===void 0&&(c=!1),this._currentRenderTarget=null;var p=this._gl,r=v[0]._attachments,e=r.length;if(v[0]._MSAAFramebuffer){p.bindFramebuffer(p.READ_FRAMEBUFFER,v[0]._MSAAFramebuffer),p.bindFramebuffer(p.DRAW_FRAMEBUFFER,v[0]._framebuffer);for(var t=0;t<e;t++){for(var i=v[t],n=0;n<e;n++)r[n]=p.NONE;r[t]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"],p.readBuffer(r[t]),p.drawBuffers(r),p.blitFramebuffer(0,0,i.width,i.height,0,0,i.width,i.height,p.COLOR_BUFFER_BIT,p.NEAREST)}for(var t=0;t<e;t++)r[t]=p[this.webGLVersion>1?"COLOR_ATTACHMENT"+t:"COLOR_ATTACHMENT"+t+"_WEBGL"];p.drawBuffers(r)}for(var t=0;t<e;t++){var i=v[t];i.generateMipMaps&&!c&&!i.isCube&&(this._bindTextureDirectly(p.TEXTURE_2D,i,!0),p.generateMipmap(p.TEXTURE_2D),this._bindTextureDirectly(p.TEXTURE_2D,null))}O&&(v[0]._MSAAFramebuffer&&this._bindUnboundFramebuffer(v[0]._framebuffer),O()),this._bindUnboundFramebuffer(null)},E.a.prototype.createMultipleRenderTarget=function(v,c,O){O===void 0&&(O=!0);var p=!1,r=!0,e=!1,t=!1,i=1,n=0,a=3,l=new Array,h=new Array;c!==void 0&&(p=c.generateMipMaps===void 0?!1:c.generateMipMaps,r=c.generateDepthBuffer===void 0?!0:c.generateDepthBuffer,e=c.generateStencilBuffer===void 0?!1:c.generateStencilBuffer,t=c.generateDepthTexture===void 0?!1:c.generateDepthTexture,i=c.textureCount||1,c.types&&(l=c.types),c.samplingModes&&(h=c.samplingModes));var u=this._gl,g=u.createFramebuffer();this._bindUnboundFramebuffer(g);for(var A=v.width||v,R=v.height||v,S=[],P=[],D=this._setupFramebufferDepthAttachments(e,r,A,R),L=0;L<i;L++){var U=h[L]||a,F=l[L]||n;(F===1&&!this._caps.textureFloatLinearFiltering||F===2&&!this._caps.textureHalfFloatLinearFiltering)&&(U=1);var V=this._getSamplingParameters(U,p);F===1&&!this._caps.textureFloat&&(F=0,o.a.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type"));var I=new f.a(this,f.b.MultiRenderTarget),x=u[this.webGLVersion>1?"COLOR_ATTACHMENT"+L:"COLOR_ATTACHMENT"+L+"_WEBGL"];S.push(I),P.push(x),u.activeTexture(u["TEXTURE"+L]),u.bindTexture(u.TEXTURE_2D,I._hardwareTexture.underlyingResource),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,V.mag),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,V.min),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,this._getRGBABufferInternalSizedFormat(F),A,R,0,u.RGBA,this._getWebGLTextureType(F),null),u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,x,u.TEXTURE_2D,I._hardwareTexture.underlyingResource,0),p&&this._gl.generateMipmap(this._gl.TEXTURE_2D),this._bindTextureDirectly(u.TEXTURE_2D,null),I._framebuffer=g,I._depthStencilBuffer=D,I.baseWidth=A,I.baseHeight=R,I.width=A,I.height=R,I.isReady=!0,I.samples=1,I.generateMipMaps=p,I.samplingMode=U,I.type=F,I._generateDepthBuffer=r,I._generateStencilBuffer=e,I._attachments=P,I._textureArray=S,this._internalTexturesCache.push(I)}if(t&&this._caps.depthTextureExtension){var _=new f.a(this,f.b.MultiRenderTarget);u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,_._hardwareTexture.underlyingResource),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,this.webGLVersion<2?u.DEPTH_COMPONENT:u.DEPTH_COMPONENT16,A,R,0,u.DEPTH_COMPONENT,u.UNSIGNED_SHORT,null),u.framebufferTexture2D(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.TEXTURE_2D,_._hardwareTexture.underlyingResource,0),_._framebuffer=g,_.baseWidth=A,_.baseHeight=R,_.width=A,_.height=R,_.isReady=!0,_.samples=1,_.generateMipMaps=p,_.samplingMode=u.NEAREST,_._generateDepthBuffer=r,_._generateStencilBuffer=e,S.push(_),this._internalTexturesCache.push(_)}return O&&u.drawBuffers(P),this._bindUnboundFramebuffer(null),this.resetTextureCache(),S},E.a.prototype.updateMultipleRenderTargetTextureSampleCount=function(v,c,O){if(O===void 0&&(O=!0),this.webGLVersion<2||!v)return 1;if(v[0].samples===c)return c;var p=v[0]._attachments.length;if(p===0)return 1;var r=this._gl;c=Math.min(c,this.getCaps().maxMSAASamples),v[0]._depthStencilBuffer&&(r.deleteRenderbuffer(v[0]._depthStencilBuffer),v[0]._depthStencilBuffer=null),v[0]._MSAAFramebuffer&&(r.deleteFramebuffer(v[0]._MSAAFramebuffer),v[0]._MSAAFramebuffer=null);for(var e=0;e<p;e++)v[e]._MSAARenderBuffer&&(r.deleteRenderbuffer(v[e]._MSAARenderBuffer),v[e]._MSAARenderBuffer=null);if(c>1&&r.renderbufferStorageMultisample){var t=r.createFramebuffer();if(!t)throw new Error("Unable to create multi sampled framebuffer");this._bindUnboundFramebuffer(t);for(var i=this._setupFramebufferDepthAttachments(v[0]._generateStencilBuffer,v[0]._generateDepthBuffer,v[0].width,v[0].height,c),n=[],e=0;e<p;e++){var a=v[e],l=r[this.webGLVersion>1?"COLOR_ATTACHMENT"+e:"COLOR_ATTACHMENT"+e+"_WEBGL"],h=r.createRenderbuffer();if(!h)throw new Error("Unable to create multi sampled framebuffer");r.bindRenderbuffer(r.RENDERBUFFER,h),r.renderbufferStorageMultisample(r.RENDERBUFFER,c,this._getRGBAMultiSampleBufferFormat(a.type),a.width,a.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,l,r.RENDERBUFFER,h),a._MSAAFramebuffer=t,a._MSAARenderBuffer=h,a.samples=c,a._depthStencilBuffer=i,r.bindRenderbuffer(r.RENDERBUFFER,null),n.push(l)}O&&r.drawBuffers(n)}else this._bindUnboundFramebuffer(v[0]._framebuffer);return this._bindUnboundFramebuffer(null),c}},576:function($,W,s){"use strict";s.d(W,"a",function(){return c});var f=s(451),o=s(452),E=s(516),v=s(468);v.a.AddParser(o.a.NAME_EFFECTLAYER,function(O,p,r,e){if(O.effectLayers){r.effectLayers||(r.effectLayers=new Array);for(var t=0;t<O.effectLayers.length;t++){var i=E.a.Parse(O.effectLayers[t],p,e);r.effectLayers.push(i)}}}),v.a.prototype.removeEffectLayer=function(O){var p=this.effectLayers.indexOf(O);return p!==-1&&this.effectLayers.splice(p,1),p},v.a.prototype.addEffectLayer=function(O){this.effectLayers.push(O)};var c=function(){function O(p){this.name=o.a.NAME_EFFECTLAYER,this._renderEffects=!1,this._needStencil=!1,this._previousStencilState=!1,this.scene=p,this._engine=p.getEngine(),p.effectLayers=new Array}return O.prototype.register=function(){this.scene._isReadyForMeshStage.registerStep(o.a.STEP_ISREADYFORMESH_EFFECTLAYER,this,this._isReadyForMesh),this.scene._cameraDrawRenderTargetStage.registerStep(o.a.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER,this,this._renderMainTexture),this.scene._beforeCameraDrawStage.registerStep(o.a.STEP_BEFORECAMERADRAW_EFFECTLAYER,this,this._setStencil),this.scene._afterRenderingGroupDrawStage.registerStep(o.a.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW,this,this._drawRenderingGroup),this.scene._afterCameraDrawStage.registerStep(o.a.STEP_AFTERCAMERADRAW_EFFECTLAYER,this,this._setStencilBack),this.scene._afterCameraDrawStage.registerStep(o.a.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW,this,this._drawCamera)},O.prototype.rebuild=function(){for(var p=this.scene.effectLayers,r=0,e=p;r<e.length;r++){var t=e[r];t._rebuild()}},O.prototype.serialize=function(p){p.effectLayers=[];for(var r=this.scene.effectLayers,e=0,t=r;e<t.length;e++){var i=t[e];i.serialize&&p.effectLayers.push(i.serialize())}},O.prototype.addFromContainer=function(p){var r=this;!p.effectLayers||p.effectLayers.forEach(function(e){r.scene.addEffectLayer(e)})},O.prototype.removeFromContainer=function(p,r){var e=this;!p.effectLayers||p.effectLayers.forEach(function(t){e.scene.removeEffectLayer(t),r&&t.dispose()})},O.prototype.dispose=function(){for(var p=this.scene.effectLayers;p.length;)p[0].dispose()},O.prototype._isReadyForMesh=function(p,r){for(var e=this.scene.effectLayers,t=0,i=e;t<i.length;t++){var n=i[t];if(!!n.hasMesh(p))for(var a=0,l=p.subMeshes;a<l.length;a++){var h=l[a];if(!n.isReady(h,r))return!1}}return!0},O.prototype._renderMainTexture=function(p){this._renderEffects=!1,this._needStencil=!1;var r=!1,e=this.scene.effectLayers;if(e&&e.length>0){this._previousStencilState=this._engine.getStencilBuffer();for(var t=0,i=e;t<i.length;t++){var n=i[t];if(n.shouldRender()&&(!n.camera||n.camera.cameraRigMode===f.a.RIG_MODE_NONE&&p===n.camera||n.camera.cameraRigMode!==f.a.RIG_MODE_NONE&&n.camera._rigCameras.indexOf(p)>-1)){this._renderEffects=!0,this._needStencil=this._needStencil||n.needStencil();var a=n._mainTexture;a._shouldRender()&&(this.scene.incrementRenderId(),a.render(!1,!1),r=!0)}}this.scene.incrementRenderId()}return r},O.prototype._setStencil=function(){this._needStencil&&this._engine.setStencilBuffer(!0)},O.prototype._setStencilBack=function(){this._needStencil&&this._engine.setStencilBuffer(this._previousStencilState)},O.prototype._draw=function(p){if(this._renderEffects){this._engine.setDepthBuffer(!1);for(var r=this.scene.effectLayers,e=0;e<r.length;e++){var t=r[e];t.renderingGroupId===p&&t.shouldRender()&&t.render()}this._engine.setDepthBuffer(!0)}},O.prototype._drawCamera=function(){this._renderEffects&&this._draw(-1)},O.prototype._drawRenderingGroup=function(p){!this.scene._isInIntermediateRendering()&&this._renderEffects&&this._draw(p)},O}();E.a._SceneComponentInitialization=function(O){var p=O._getComponent(o.a.NAME_EFFECTLAYER);p||(p=new c(O),O._addComponent(p))}},577:function($,W,s){"use strict";s.d(W,"a",function(){return g});var f=s(434),o=s(439),E=s(436),v=s(447),c=s(442),O=s(458),p=s(459),r=s(472),e=s(516),t=s(468),i=s(437),n=s(445),a=s(441),l=s(646),h=s(647),u=s(576);t.a.prototype.getGlowLayerByName=function(A){for(var R=0;R<this.effectLayers.length;R++)if(this.effectLayers[R].name===A&&this.effectLayers[R].getEffectName()===g.EffectName)return this.effectLayers[R];return null};var g=function(A){Object(f.d)(R,A);function R(S,P,D){var L=A.call(this,S,P)||this;return L._intensity=1,L._includedOnlyMeshes=[],L._excludedMeshes=[],L._meshesUsingTheirOwnMaterials=[],L.neutralColor=new a.b(0,0,0,1),L._options=Object(f.a)({mainTextureRatio:R.DefaultTextureRatio,blurKernelSize:32,mainTextureFixedSize:void 0,camera:null,mainTextureSamples:1,renderingGroupId:-1},D),L._init({alphaBlendingMode:1,camera:L._options.camera,mainTextureFixedSize:L._options.mainTextureFixedSize,mainTextureRatio:L._options.mainTextureRatio,renderingGroupId:L._options.renderingGroupId}),L}return Object.defineProperty(R.prototype,"blurKernelSize",{get:function(){return this._horizontalBlurPostprocess1.kernel},set:function(S){this._horizontalBlurPostprocess1.kernel=S,this._verticalBlurPostprocess1.kernel=S,this._horizontalBlurPostprocess2.kernel=S,this._verticalBlurPostprocess2.kernel=S},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"intensity",{get:function(){return this._intensity},set:function(S){this._intensity=S},enumerable:!1,configurable:!0}),R.prototype.getEffectName=function(){return R.EffectName},R.prototype._createMergeEffect=function(){return this._engine.createEffect("glowMapMerge",[v.b.PositionKind],["offset"],["textureSampler","textureSampler2"],`#define EMISSIVE 
`)},R.prototype._createTextureAndPostProcesses=function(){var S=this,P=this._mainTextureDesiredSize.width,D=this._mainTextureDesiredSize.height;P=this._engine.needPOTTextures?n.a.GetExponentOfTwo(P,this._maxSize):P,D=this._engine.needPOTTextures?n.a.GetExponentOfTwo(D,this._maxSize):D;var L=0;this._engine.getCaps().textureHalfFloatRender?L=2:L=0,this._blurTexture1=new O.a("GlowLayerBlurRTT",{width:P,height:D},this._scene,!1,!0,L),this._blurTexture1.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture1.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture1.renderParticles=!1,this._blurTexture1.ignoreCameraViewport=!0;var U=Math.floor(P/2),F=Math.floor(D/2);this._blurTexture2=new O.a("GlowLayerBlurRTT2",{width:U,height:F},this._scene,!1,!0,L),this._blurTexture2.wrapU=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.wrapV=c.a.CLAMP_ADDRESSMODE,this._blurTexture2.updateSamplingMode(c.a.BILINEAR_SAMPLINGMODE),this._blurTexture2.renderParticles=!1,this._blurTexture2.ignoreCameraViewport=!0,this._textures=[this._blurTexture1,this._blurTexture2],this._horizontalBlurPostprocess1=new r.a("GlowLayerHBP1",new E.d(1,0),this._options.blurKernelSize/2,{width:P,height:D},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._horizontalBlurPostprocess1.width=P,this._horizontalBlurPostprocess1.height=D,this._horizontalBlurPostprocess1.onApplyObservable.add(function(V){V.setTexture("textureSampler",S._mainTexture)}),this._verticalBlurPostprocess1=new r.a("GlowLayerVBP1",new E.d(0,1),this._options.blurKernelSize/2,{width:P,height:D},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._horizontalBlurPostprocess2=new r.a("GlowLayerHBP2",new E.d(1,0),this._options.blurKernelSize/2,{width:U,height:F},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._horizontalBlurPostprocess2.width=U,this._horizontalBlurPostprocess2.height=F,this._horizontalBlurPostprocess2.onApplyObservable.add(function(V){V.setTexture("textureSampler",S._blurTexture1)}),this._verticalBlurPostprocess2=new r.a("GlowLayerVBP2",new E.d(0,1),this._options.blurKernelSize/2,{width:U,height:F},null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,L),this._postProcesses=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1,this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._postProcesses1=[this._horizontalBlurPostprocess1,this._verticalBlurPostprocess1],this._postProcesses2=[this._horizontalBlurPostprocess2,this._verticalBlurPostprocess2],this._mainTexture.samples=this._options.mainTextureSamples,this._mainTexture.onAfterUnbindObservable.add(function(){var V=S._blurTexture1.getInternalTexture();if(V){S._scene.postProcessManager.directRender(S._postProcesses1,V,!0);var I=S._blurTexture2.getInternalTexture();I&&S._scene.postProcessManager.directRender(S._postProcesses2,I,!0),S._engine.unBindFramebuffer(I!=null?I:V,!0)}}),this._postProcesses.map(function(V){V.autoClear=!1})},R.prototype.isReady=function(S,P){var D=S.getMaterial(),L=S.getRenderingMesh();if(!D||!L)return!1;var U=D.emissiveTexture;return A.prototype._isReady.call(this,S,P,U)},R.prototype.needStencil=function(){return!1},R.prototype._canRenderMesh=function(S,P){return!0},R.prototype._internalRender=function(S){S.setTexture("textureSampler",this._blurTexture1),S.setTexture("textureSampler2",this._blurTexture2),S.setFloat("offset",this._intensity);var P=this._engine,D=P.getStencilBuffer();P.setStencilBuffer(!1),P.drawElementsType(p.a.TriangleFillMode,0,6),P.setStencilBuffer(D)},R.prototype._setEmissiveTextureAndColor=function(S,P,D){var L=1;this.customEmissiveTextureSelector?this._emissiveTextureAndColor.texture=this.customEmissiveTextureSelector(S,P,D):D?(this._emissiveTextureAndColor.texture=D.emissiveTexture,this._emissiveTextureAndColor.texture&&(L=this._emissiveTextureAndColor.texture.level)):this._emissiveTextureAndColor.texture=null,this.customEmissiveColorSelector?this.customEmissiveColorSelector(S,P,D,this._emissiveTextureAndColor.color):D.emissiveColor?this._emissiveTextureAndColor.color.set(D.emissiveColor.r*L,D.emissiveColor.g*L,D.emissiveColor.b*L,D.alpha):this._emissiveTextureAndColor.color.set(this.neutralColor.r,this.neutralColor.g,this.neutralColor.b,this.neutralColor.a)},R.prototype._shouldRenderMesh=function(S){return this.hasMesh(S)},R.prototype._addCustomEffectDefines=function(S){S.push("#define GLOW")},R.prototype.addExcludedMesh=function(S){this._excludedMeshes.indexOf(S.uniqueId)===-1&&this._excludedMeshes.push(S.uniqueId)},R.prototype.removeExcludedMesh=function(S){var P=this._excludedMeshes.indexOf(S.uniqueId);P!==-1&&this._excludedMeshes.splice(P,1)},R.prototype.addIncludedOnlyMesh=function(S){this._includedOnlyMeshes.indexOf(S.uniqueId)===-1&&this._includedOnlyMeshes.push(S.uniqueId)},R.prototype.removeIncludedOnlyMesh=function(S){var P=this._includedOnlyMeshes.indexOf(S.uniqueId);P!==-1&&this._includedOnlyMeshes.splice(P,1)},R.prototype.hasMesh=function(S){return A.prototype.hasMesh.call(this,S)?this._includedOnlyMeshes.length?this._includedOnlyMeshes.indexOf(S.uniqueId)!==-1:this._excludedMeshes.length?this._excludedMeshes.indexOf(S.uniqueId)===-1:!0:!1},R.prototype._useMeshMaterial=function(S){return this._meshesUsingTheirOwnMaterials.length==0?!1:this._meshesUsingTheirOwnMaterials.indexOf(S.uniqueId)>-1},R.prototype.referenceMeshToUseItsOwnMaterial=function(S){this._meshesUsingTheirOwnMaterials.push(S.uniqueId)},R.prototype.unReferenceMeshFromUsingItsOwnMaterial=function(S){for(var P=this._meshesUsingTheirOwnMaterials.indexOf(S.uniqueId);P>=0;)this._meshesUsingTheirOwnMaterials.splice(P,1),P=this._meshesUsingTheirOwnMaterials.indexOf(S.uniqueId)},R.prototype._disposeMesh=function(S){this.removeIncludedOnlyMesh(S),this.removeExcludedMesh(S)},R.prototype.getClassName=function(){return"GlowLayer"},R.prototype.serialize=function(){var S=o.a.Serialize(this);S.customType="BABYLON.GlowLayer";var P;if(S.includedMeshes=[],this._includedOnlyMeshes.length)for(P=0;P<this._includedOnlyMeshes.length;P++){var D=this._scene.getMeshByUniqueID(this._includedOnlyMeshes[P]);D&&S.includedMeshes.push(D.id)}if(S.excludedMeshes=[],this._excludedMeshes.length)for(P=0;P<this._excludedMeshes.length;P++){var D=this._scene.getMeshByUniqueID(this._excludedMeshes[P]);D&&S.excludedMeshes.push(D.id)}return S},R.Parse=function(S,P,D){var L=o.a.Parse(function(){return new R(S.name,P,S.options)},S,P,D),U;for(U=0;U<S.excludedMeshes.length;U++){var F=P.getMeshByID(S.excludedMeshes[U]);F&&L.addExcludedMesh(F)}for(U=0;U<S.includedMeshes.length;U++){var F=P.getMeshByID(S.includedMeshes[U]);F&&L.addIncludedOnlyMesh(F)}return L},R.EffectName="GlowLayer",R.DefaultBlurKernelSize=32,R.DefaultTextureRatio=.5,Object(f.c)([Object(o.c)()],R.prototype,"blurKernelSize",null),Object(f.c)([Object(o.c)()],R.prototype,"intensity",null),Object(f.c)([Object(o.c)("options")],R.prototype,"_options",void 0),R}(e.a);i.a.RegisteredTypes["BABYLON.GlowLayer"]=g},578:function($,W,s){"use strict";s.d(W,"a",function(){return r});var f=s(434),o=s(466),E=s(584),v=s(472),c=s(585),O=s(436),p=s(442),r=function(e){Object(f.d)(t,e);function t(i,n,a,l,h,u){h===void 0&&(h=0),u===void 0&&(u=!1);var g=e.call(this,i.getEngine(),"bloom",function(){return g._effects},!0)||this;return g.bloomScale=n,g._effects=[],g._downscale=new E.a("highlights",1,null,p.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,h,u),g._blurX=new v.a("horizontal blur",new O.d(1,0),10,n,null,p.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,h,void 0,u),g._blurX.alwaysForcePOT=!0,g._blurX.autoClear=!1,g._blurY=new v.a("vertical blur",new O.d(0,1),10,n,null,p.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,h,void 0,u),g._blurY.alwaysForcePOT=!0,g._blurY.autoClear=!1,g.kernel=l,g._effects=[g._downscale,g._blurX,g._blurY],g._merge=new c.a("bloomMerge",g._downscale,g._blurY,a,n,null,p.a.BILINEAR_SAMPLINGMODE,i.getEngine(),!1,h,u),g._merge.autoClear=!1,g._effects.push(g._merge),g}return Object.defineProperty(t.prototype,"threshold",{get:function(){return this._downscale.threshold},set:function(i){this._downscale.threshold=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"weight",{get:function(){return this._merge.weight},set:function(i){this._merge.weight=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernel",{get:function(){return this._blurX.kernel/this.bloomScale},set:function(i){this._blurX.kernel=i*this.bloomScale,this._blurY.kernel=i*this.bloomScale},enumerable:!1,configurable:!0}),t.prototype.disposeEffects=function(i){for(var n=0;n<this._effects.length;n++)this._effects[n].dispose(i)},t.prototype._updateEffects=function(){for(var i=0;i<this._effects.length;i++)this._effects[i].updateEffect()},t.prototype._isReady=function(){for(var i=0;i<this._effects.length;i++)if(!this._effects[i].isReady())return!1;return!0},t}(o.a)},579:function($,W,s){"use strict";s.d(W,"a",function(){return p});var f=s(434),o=s(436),E=s(444),v=s(600),c=s(437),O=s(439),p=function(r){Object(f.d)(e,r);function e(t,i,n,a,l,h,u,g,A,R){A===void 0&&(A=0),R===void 0&&(R=!1);var S=r.call(this,t,"chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],a,l,h,u,g,null,A,void 0,null,R)||this;return S.aberrationAmount=30,S.radialIntensity=0,S.direction=new o.d(.707,.707),S.centerPosition=new o.d(.5,.5),S.screenWidth=i,S.screenHeight=n,S.onApplyObservable.add(function(P){P.setFloat("chromatic_aberration",S.aberrationAmount),P.setFloat("screen_width",i),P.setFloat("screen_height",n),P.setFloat("radialIntensity",S.radialIntensity),P.setFloat2("direction",S.direction.x,S.direction.y),P.setFloat2("centerPosition",S.centerPosition.x,S.centerPosition.y)}),S}return e.prototype.getClassName=function(){return"ChromaticAberrationPostProcess"},e._Parse=function(t,i,n,a){return O.a.Parse(function(){return new e(t.name,t.screenWidth,t.screenHeight,t.options,i,t.renderTargetSamplingMode,n.getEngine(),t.reusable,t.textureType,!1)},t,n,a)},Object(f.c)([Object(O.c)()],e.prototype,"aberrationAmount",void 0),Object(f.c)([Object(O.c)()],e.prototype,"radialIntensity",void 0),Object(f.c)([Object(O.c)()],e.prototype,"direction",void 0),Object(f.c)([Object(O.c)()],e.prototype,"centerPosition",void 0),Object(f.c)([Object(O.c)()],e.prototype,"screenWidth",void 0),Object(f.c)([Object(O.c)()],e.prototype,"screenHeight",void 0),e}(E.a);c.a.RegisteredTypes["BABYLON.ChromaticAberrationPostProcess"]=p},580:function($,W,s){"use strict";s.d(W,"a",function(){return O});var f=s(434),o=s(442),E=s(472),v=s(437),c=s(439),O=function(p){Object(f.d)(r,p);function r(e,t,i,n,a,l,h,u,g,A,R,S,P){u===void 0&&(u=null),g===void 0&&(g=o.a.BILINEAR_SAMPLINGMODE),S===void 0&&(S=0),P===void 0&&(P=!1);var D=p.call(this,e,i,n,a,l,g=2,A,R,S=0,`#define DOF 1\r
`,P)||this;return D.direction=i,D.onApplyObservable.add(function(L){u!=null&&L.setTextureFromPostProcess("textureSampler",u),L.setTextureFromPostProcessOutput("circleOfConfusionSampler",h),t.activeCamera&&L.setFloat2("cameraMinMaxZ",t.activeCamera.minZ,t.activeCamera.maxZ)}),D}return r.prototype.getClassName=function(){return"DepthOfFieldBlurPostProcess"},Object(f.c)([Object(c.c)()],r.prototype,"direction",void 0),r}(E.a);v.a.RegisteredTypes["BABYLON.DepthOfFieldBlurPostProcess"]=O},581:function($,W,s){"use strict";s.d(W,"a",function(){return i});var f=s(434),o=s(444),E=s(502),v=s(439),c=function(){function n(){this.enabled=!1,this.name="screenSpaceReflections",this.texturesRequired=[6,3,1]}return n}(),O=s(435),p="screenSpaceReflectionPixelShader",r=`

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
`;O.a.ShadersStore[p]=r;var e={name:p,shader:r},t=s(437),i=function(n){Object(f.d)(a,n);function a(l,h,u,g,A,R,S,P,D,L){P===void 0&&(P=0),D===void 0&&(D=!1),L===void 0&&(L=!1);var U=n.call(this,l,"screenSpaceReflection",["projection","view","threshold","reflectionSpecularFalloffExponent","strength","step","roughnessFactor"],["textureSampler","normalSampler","positionSampler","reflectivitySampler"],u,g,A,R,S,`#define SSR_SUPPORTED
#define REFLECTION_SAMPLES 64
#define SMOOTH_STEPS 5
`,P,void 0,null,D)||this;if(U.threshold=1.2,U.strength=1,U.reflectionSpecularFalloffExponent=3,U.step=1,U.roughnessFactor=.2,U._forceGeometryBuffer=!1,U._enableSmoothReflections=!1,U._reflectionSamples=64,U._smoothSteps=5,U._forceGeometryBuffer=L,U._forceGeometryBuffer){var F=h.enableGeometryBufferRenderer();F&&F.isSupported&&(F.enablePosition=!0,F.enableReflectivity=!0,U._geometryBufferRenderer=F)}else U._prePassRenderer=h.enablePrePassRenderer(),U._prePassRenderer.markAsDirty(),U._prePassEffectConfiguration=new c;return U._updateEffectDefines(),U.onApply=function(V){var I=U._geometryBufferRenderer,x=U._prePassRenderer;if(!(!x&&!I)){if(I){var _=I.getTextureIndex(E.a.POSITION_TEXTURE_TYPE),j=I.getTextureIndex(E.a.REFLECTIVITY_TEXTURE_TYPE);V.setTexture("normalSampler",I.getGBuffer().textures[1]),V.setTexture("positionSampler",I.getGBuffer().textures[_]),V.setTexture("reflectivitySampler",I.getGBuffer().textures[j])}else{var _=x.getIndex(1),j=x.getIndex(3),G=x.getIndex(6);V.setTexture("normalSampler",x.getRenderTarget().textures[G]),V.setTexture("positionSampler",x.getRenderTarget().textures[_]),V.setTexture("reflectivitySampler",x.getRenderTarget().textures[j])}var y=h.activeCamera;if(!!y){var Y=y.getViewMatrix(!0),Z=y.getProjectionMatrix(!0);V.setMatrix("projection",Z),V.setMatrix("view",Y),V.setFloat("threshold",U.threshold),V.setFloat("reflectionSpecularFalloffExponent",U.reflectionSpecularFalloffExponent),V.setFloat("strength",U.strength),V.setFloat("step",U.step),V.setFloat("roughnessFactor",U.roughnessFactor)}}},U}return a.prototype.getClassName=function(){return"ScreenSpaceReflectionPostProcess"},Object.defineProperty(a.prototype,"enableSmoothReflections",{get:function(){return this._enableSmoothReflections},set:function(l){l!==this._enableSmoothReflections&&(this._enableSmoothReflections=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"reflectionSamples",{get:function(){return this._reflectionSamples},set:function(l){l!==this._reflectionSamples&&(this._reflectionSamples=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"smoothSteps",{get:function(){return this._smoothSteps},set:function(l){l!==this._smoothSteps&&(this._smoothSteps=l,this._updateEffectDefines())},enumerable:!1,configurable:!0}),a.prototype._updateEffectDefines=function(){var l=[];(this._geometryBufferRenderer||this._prePassRenderer)&&l.push("#define SSR_SUPPORTED"),this._enableSmoothReflections&&l.push("#define ENABLE_SMOOTH_REFLECTIONS"),l.push("#define REFLECTION_SAMPLES "+(this._reflectionSamples>>0)),l.push("#define SMOOTH_STEPS "+(this._smoothSteps>>0)),this.updateEffect(l.join(`
`))},a._Parse=function(l,h,u,g){return v.a.Parse(function(){return new a(l.name,u,l.options,h,l.renderTargetSamplingMode,u.getEngine(),l.textureType,l.reusable)},l,u,g)},Object(f.c)([Object(v.c)()],a.prototype,"threshold",void 0),Object(f.c)([Object(v.c)()],a.prototype,"strength",void 0),Object(f.c)([Object(v.c)()],a.prototype,"reflectionSpecularFalloffExponent",void 0),Object(f.c)([Object(v.c)()],a.prototype,"step",void 0),Object(f.c)([Object(v.c)()],a.prototype,"roughnessFactor",void 0),Object(f.c)([Object(v.c)()],a.prototype,"enableSmoothReflections",null),Object(f.c)([Object(v.c)()],a.prototype,"reflectionSamples",null),Object(f.c)([Object(v.c)()],a.prototype,"smoothSteps",null),a}(o.a);t.a.RegisteredTypes["BABYLON.ScreenSpaceReflectionPostProcess"]=i},582:function($,W,s){"use strict";s.d(W,"a",function(){return t});var f=s(434),o=s(444),E=s(440),v=s(435),c="circleOfConfusionPixelShader",O=`
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
`;v.a.ShadersStore[c]=O;var p={name:c,shader:O},r=s(437),e=s(439),t=function(i){Object(f.d)(n,i);function n(a,l,h,u,g,A,R,S,P){S===void 0&&(S=0),P===void 0&&(P=!1);var D=i.call(this,a,"circleOfConfusion",["cameraMinMaxZ","focusDistance","cocPrecalculation"],["depthSampler"],h,u,g,A,R,null,S,void 0,null,P)||this;return D.lensSize=50,D.fStop=1.4,D.focusDistance=2e3,D.focalLength=50,D._depthTexture=null,D._depthTexture=l,D.onApplyObservable.add(function(L){if(!D._depthTexture){E.a.Warn("No depth texture set on CircleOfConfusionPostProcess");return}L.setTexture("depthSampler",D._depthTexture);var U=D.lensSize/D.fStop,F=U*D.focalLength/(D.focusDistance-D.focalLength);L.setFloat("focusDistance",D.focusDistance),L.setFloat("cocPrecalculation",F),L.setFloat2("cameraMinMaxZ",D._depthTexture.activeCamera.minZ,D._depthTexture.activeCamera.maxZ)}),D}return n.prototype.getClassName=function(){return"CircleOfConfusionPostProcess"},Object.defineProperty(n.prototype,"depthTexture",{set:function(a){this._depthTexture=a},enumerable:!1,configurable:!0}),Object(f.c)([Object(e.c)()],n.prototype,"lensSize",void 0),Object(f.c)([Object(e.c)()],n.prototype,"fStop",void 0),Object(f.c)([Object(e.c)()],n.prototype,"focusDistance",void 0),Object(f.c)([Object(e.c)()],n.prototype,"focalLength",void 0),n}(o.a);r.a.RegisteredTypes["BABYLON.CircleOfConfusionPostProcess"]=t},583:function($,W,s){"use strict";s.d(W,"b",function(){return p}),s.d(W,"a",function(){return r});var f=s(434),o=s(444),E=s(435),v="depthOfFieldMergePixelShader",c=`uniform sampler2D textureSampler;
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
`;E.a.ShadersStore[v]=c;var O={name:v,shader:c},p=function(){function e(){}return e}(),r=function(e){Object(f.d)(t,e);function t(i,n,a,l,h,u,g,A,R,S,P){S===void 0&&(S=0),P===void 0&&(P=!1);var D=e.call(this,i,"depthOfFieldMerge",[],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2"],h,u,g,A,R,null,S,void 0,null,!0)||this;return D.blurSteps=l,D.onApplyObservable.add(function(L){L.setTextureFromPostProcess("textureSampler",n),L.setTextureFromPostProcessOutput("circleOfConfusionSampler",a),l.forEach(function(U,F){L.setTextureFromPostProcessOutput("blurStep"+(l.length-F-1),U)})}),P||D.updateEffect(),D}return t.prototype.getClassName=function(){return"DepthOfFieldMergePostProcess"},t.prototype.updateEffect=function(i,n,a,l,h,u){i===void 0&&(i=null),n===void 0&&(n=null),a===void 0&&(a=null),i||(i="",i+="#define BLUR_LEVEL "+(this.blurSteps.length-1)+`
`),e.prototype.updateEffect.call(this,i,n,a,l,h,u)},t}(o.a)},584:function($,W,s){"use strict";s.d(W,"a",function(){return i});var f=s(434),o=s(444),E=s(515),v=s(435),c=s(457),O="extractHighlightsPixelShader",p=`#include<helperFunctions>

varying vec2 vUV;
uniform sampler2D textureSampler;
uniform float threshold;
uniform float exposure;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
float luma=getLuminance(gl_FragColor.rgb*exposure);
gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;
}`;v.a.ShadersStore[O]=p;var r={name:O,shader:p},e=s(439),t=s(437),i=function(n){Object(f.d)(a,n);function a(l,h,u,g,A,R,S,P){S===void 0&&(S=0),P===void 0&&(P=!1);var D=n.call(this,l,"extractHighlights",["threshold","exposure"],null,h,u,g,A,R,null,S,void 0,null,P)||this;return D.threshold=.9,D._exposure=1,D._inputPostProcess=null,D.onApplyObservable.add(function(L){D._inputPostProcess&&L.setTextureFromPostProcess("textureSampler",D._inputPostProcess),L.setFloat("threshold",Math.pow(D.threshold,E.b)),L.setFloat("exposure",D._exposure)}),D}return a.prototype.getClassName=function(){return"ExtractHighlightsPostProcess"},Object(f.c)([Object(e.c)()],a.prototype,"threshold",void 0),a}(o.a);t.a.RegisteredTypes["BABYLON.ExtractHighlightsPostProcess"]=i},585:function($,W,s){"use strict";s.d(W,"a",function(){return e});var f=s(434),o=s(444),E=s(435),v="bloomMergePixelShader",c=`uniform sampler2D textureSampler;
uniform sampler2D bloomBlur;
varying vec2 vUV;
uniform float bloomWeight;
void main(void)
{
gl_FragColor=texture2D(textureSampler,vUV);
vec3 blurred=texture2D(bloomBlur,vUV).rgb;
gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight);
}
`;E.a.ShadersStore[v]=c;var O={name:v,shader:c},p=s(437),r=s(439),e=function(t){Object(f.d)(i,t);function i(n,a,l,h,u,g,A,R,S,P,D){P===void 0&&(P=0),D===void 0&&(D=!1);var L=t.call(this,n,"bloomMerge",["bloomWeight"],["circleOfConfusionSampler","blurStep0","blurStep1","blurStep2","bloomBlur"],u,g,A,R,S,null,P,void 0,null,!0)||this;return L.weight=1,L.weight=h,L.onApplyObservable.add(function(U){U.setTextureFromPostProcess("textureSampler",a),U.setTextureFromPostProcessOutput("bloomBlur",l),U.setFloat("bloomWeight",L.weight)}),D||L.updateEffect(),L}return i.prototype.getClassName=function(){return"BloomMergePostProcess"},Object(f.c)([Object(r.c)()],i.prototype,"weight",void 0),i}(o.a);p.a.RegisteredTypes["BABYLON.BloomMergePostProcess"]=e},586:function($,W,s){"use strict";s.d(W,"a",function(){return t});var f=s(434),o=s(444),E=s(435),v=s(457),c="grainPixelShader",O=`#include<helperFunctions>

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
}`;E.a.ShadersStore[c]=O;var p={name:c,shader:O},r=s(437),e=s(439),t=function(i){Object(f.d)(n,i);function n(a,l,h,u,g,A,R,S){R===void 0&&(R=0),S===void 0&&(S=!1);var P=i.call(this,a,"grain",["intensity","animatedSeed"],[],l,h,u,g,A,null,R,void 0,null,S)||this;return P.intensity=30,P.animated=!1,P.onApplyObservable.add(function(D){D.setFloat("intensity",P.intensity),D.setFloat("animatedSeed",P.animated?Math.random()+1:1)}),P}return n.prototype.getClassName=function(){return"GrainPostProcess"},n._Parse=function(a,l,h,u){return e.a.Parse(function(){return new n(a.name,a.options,l,a.renderTargetSamplingMode,h.getEngine(),a.reusable)},a,h,u)},Object(f.c)([Object(e.c)()],n.prototype,"intensity",void 0),Object(f.c)([Object(e.c)()],n.prototype,"animated",void 0),n}(o.a);r.a.RegisteredTypes["BABYLON.GrainPostProcess"]=t},587:function($,W,s){"use strict";s.d(W,"a",function(){return e});var f=s(434),o=s(444),E=s(435),v="sharpenPixelShader",c=`
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
}`;E.a.ShadersStore[v]=c;var O={name:v,shader:c},p=s(437),r=s(439),e=function(t){Object(f.d)(i,t);function i(n,a,l,h,u,g,A,R){A===void 0&&(A=0),R===void 0&&(R=!1);var S=t.call(this,n,"sharpen",["sharpnessAmounts","screenSize"],null,a,l,h,u,g,null,A,void 0,null,R)||this;return S.colorAmount=1,S.edgeAmount=.3,S.onApply=function(P){P.setFloat2("screenSize",S.width,S.height),P.setFloat2("sharpnessAmounts",S.edgeAmount,S.colorAmount)},S}return i.prototype.getClassName=function(){return"SharpenPostProcess"},i._Parse=function(n,a,l,h){return r.a.Parse(function(){return new i(n.name,n.options,a,n.renderTargetSamplingMode,l.getEngine(),n.textureType,n.reusable)},n,l,h)},Object(f.c)([Object(r.c)()],i.prototype,"colorAmount",void 0),Object(f.c)([Object(r.c)()],i.prototype,"edgeAmount",void 0),i}(o.a);p.a.RegisteredTypes["BABYLON.SharpenPostProcess"]=e},594:function($,W,s){"use strict";s.d(W,"a",function(){return P});var f=s(434),o=s(440),E=s(439),v=s(436),c=s(451),O=s(442),p=s(479),r=s(444),e=s(481),t=s(466),i=s(486),n=s(437),a=s(448),l=function(){function D(){this.enabled=!1,this.name="ssao2",this.texturesRequired=[6,5]}return D}(),h=s(482),u=s(435),g="ssao2PixelShader",A=`
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
`;u.a.ShadersStore[g]=A;var R={name:g,shader:A},S=s(601),P=function(D){Object(f.d)(L,D);function L(U,F,V,I,x){x===void 0&&(x=!1);var _=D.call(this,F.getEngine(),U)||this;if(_.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",_.SSAORenderEffect="SSAORenderEffect",_.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",_.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",_.SSAOCombineRenderEffect="SSAOCombineRenderEffect",_.totalStrength=1,_.maxZ=100,_.minZAspect=.2,_._samples=8,_._textureSamples=1,_._forceGeometryBuffer=!1,_._expensiveBlur=!0,_.radius=2,_.base=0,_._bits=new Uint32Array(1),_._scene=F,_._ratio=V,_._forceGeometryBuffer=x,!_.isSupported)return o.a.Error("The current engine does not support SSAO 2."),_;var j=_._ratio.ssaoRatio||V,G=_._ratio.blurRatio||V;return _._forceGeometryBuffer?F.enableGeometryBufferRenderer():_._prePassRenderer=F.enablePrePassRenderer(),_._createRandomTexture(),_._originalColorPostProcess=new i.b("SSAOOriginalSceneColor",1,null,O.a.BILINEAR_SAMPLINGMODE,F.getEngine(),!1),_._originalColorPostProcess.samples=_.textureSamples,_._createSSAOPostProcess(1),_._createBlurPostProcess(j,G),_._createSSAOCombinePostProcess(G),_.addEffect(new t.a(F.getEngine(),_.SSAOOriginalSceneColorEffect,function(){return _._originalColorPostProcess},!0)),_.addEffect(new t.a(F.getEngine(),_.SSAORenderEffect,function(){return _._ssaoPostProcess},!0)),_.addEffect(new t.a(F.getEngine(),_.SSAOBlurHRenderEffect,function(){return _._blurHPostProcess},!0)),_.addEffect(new t.a(F.getEngine(),_.SSAOBlurVRenderEffect,function(){return _._blurVPostProcess},!0)),_.addEffect(new t.a(F.getEngine(),_.SSAOCombineRenderEffect,function(){return _._ssaoCombinePostProcess},!0)),F.postProcessRenderPipelineManager.addPipeline(_),I&&F.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(U,I),_}return Object.defineProperty(L.prototype,"samples",{get:function(){return this._samples},set:function(U){this._samples=U,this._ssaoPostProcess.updateEffect(this._getDefinesForSSAO()),this._sampleSphere=this._generateHemisphere()},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"textureSamples",{get:function(){return this._textureSamples},set:function(U){this._textureSamples=U,this._prePassRenderer?this._prePassRenderer.samples=U:this._originalColorPostProcess.samples=U},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"expensiveBlur",{get:function(){return this._expensiveBlur},set:function(U){this._blurHPostProcess.updateEffect(`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._blurVPostProcess.updateEffect(`#define BILATERAL_BLUR
#define SAMPLES 16
#define EXPENSIVE `+(U?"1":"0")+`
`,null,["textureSampler","depthSampler"]),this._expensiveBlur=U},enumerable:!1,configurable:!0}),Object.defineProperty(L,"IsSupported",{get:function(){var U=a.a.LastCreatedEngine;return U?U._features.supportSSAO2:!1},enumerable:!1,configurable:!0}),Object.defineProperty(L.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),L.prototype.getClassName=function(){return"SSAO2RenderingPipeline"},L.prototype.dispose=function(U){U===void 0&&(U=!1);for(var F=0;F<this._scene.cameras.length;F++){var V=this._scene.cameras[F];this._originalColorPostProcess.dispose(V),this._ssaoPostProcess.dispose(V),this._blurHPostProcess.dispose(V),this._blurVPostProcess.dispose(V),this._ssaoCombinePostProcess.dispose(V)}this._randomTexture.dispose(),U&&this._scene.disableGeometryBufferRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),D.prototype.dispose.call(this)},L.prototype._createBlurPostProcess=function(U,F){var V=this;this._samplerOffsets=[];for(var I=this.expensiveBlur,x=-8;x<8;x++)this._samplerOffsets.push(x*2+.5);this._blurHPostProcess=new r.a("BlurH","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],U,null,O.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_H
#define SAMPLES 16
#define EXPENSIVE `+(I?"1":"0")+`
`),this._blurHPostProcess.onApply=function(_){!V._scene.activeCamera||(_.setFloat("outSize",V._ssaoCombinePostProcess.width>0?V._ssaoCombinePostProcess.width:V._originalColorPostProcess.width),_.setFloat("near",V._scene.activeCamera.minZ),_.setFloat("far",V._scene.activeCamera.maxZ),_.setFloat("radius",V.radius),V._forceGeometryBuffer?_.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):_.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),_.setArray("samplerOffsets",V._samplerOffsets))},this._blurVPostProcess=new r.a("BlurV","ssao2",["outSize","samplerOffsets","near","far","radius"],["depthSampler"],F,null,O.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,`#define BILATERAL_BLUR
#define BILATERAL_BLUR_V
#define SAMPLES 16
#define EXPENSIVE `+(I?"1":"0")+`
`),this._blurVPostProcess.onApply=function(_){!V._scene.activeCamera||(_.setFloat("outSize",V._ssaoCombinePostProcess.height>0?V._ssaoCombinePostProcess.height:V._originalColorPostProcess.height),_.setFloat("near",V._scene.activeCamera.minZ),_.setFloat("far",V._scene.activeCamera.maxZ),_.setFloat("radius",V.radius),V._forceGeometryBuffer?_.setTexture("depthSampler",V._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]):_.setTexture("depthSampler",V._prePassRenderer.getRenderTarget().textures[V._prePassRenderer.getIndex(5)]),_.setArray("samplerOffsets",V._samplerOffsets))},this._blurHPostProcess.samples=this.textureSamples,this._blurVPostProcess.samples=this.textureSamples},L.prototype._rebuild=function(){D.prototype._rebuild.call(this)},L.prototype._radicalInverse_VdC=function(U){return this._bits[0]=U,this._bits[0]=(this._bits[0]<<16|this._bits[0]>>16)>>>0,this._bits[0]=(this._bits[0]&1431655765)<<1|(this._bits[0]&2863311530)>>>1>>>0,this._bits[0]=(this._bits[0]&858993459)<<2|(this._bits[0]&3435973836)>>>2>>>0,this._bits[0]=(this._bits[0]&252645135)<<4|(this._bits[0]&4042322160)>>>4>>>0,this._bits[0]=(this._bits[0]&16711935)<<8|(this._bits[0]&4278255360)>>>8>>>0,this._bits[0]*23283064365386963e-26},L.prototype._hammersley=function(U,F){return[U/F,this._radicalInverse_VdC(U)]},L.prototype._hemisphereSample_uniform=function(U,F){var V=F*2*Math.PI,I=1-(U*.85+.15),x=Math.sqrt(1-I*I);return new v.e(Math.cos(V)*x,Math.sin(V)*x,I)},L.prototype._generateHemisphere=function(){for(var U=this.samples,F=[],V,I=0;I<U;){if(U<16)V=this._hemisphereSample_uniform(Math.random(),Math.random());else{var x=this._hammersley(I,U);V=this._hemisphereSample_uniform(x[0],x[1])}F.push(V.x,V.y,V.z),I++}return F},L.prototype._getDefinesForSSAO=function(){var U="#define SAMPLES "+this.samples+`
#define SSAO`;return U},L.prototype._createSSAOPostProcess=function(U){var F=this;this._sampleSphere=this._generateHemisphere();var V=this._getDefinesForSSAO(),I=["randomSampler","depthSampler","normalSampler"];this._ssaoPostProcess=new r.a("ssao2","ssao2",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","base","range","projection","near","far","texelSize","xViewport","yViewport","maxZ","minZAspect","depthProjection"],I,U,null,O.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,V),this._ssaoPostProcess.onApply=function(x){var _,j,G,y;if(!!F._scene.activeCamera){if(x.setArray3("sampleSphere",F._sampleSphere),x.setFloat("randTextureTiles",32),x.setFloat("samplesFactor",1/F.samples),x.setFloat("totalStrength",F.totalStrength),x.setFloat2("texelSize",1/F._ssaoPostProcess.width,1/F._ssaoPostProcess.height),x.setFloat("radius",F.radius),x.setFloat("maxZ",F.maxZ),x.setFloat("minZAspect",F.minZAspect),x.setFloat("base",F.base),x.setFloat("near",F._scene.activeCamera.minZ),x.setFloat("far",F._scene.activeCamera.maxZ),F._scene.activeCamera.mode===c.a.PERSPECTIVE_CAMERA)x.setMatrix3x3("depthProjection",L.PERSPECTIVE_DEPTH_PROJECTION),x.setFloat("xViewport",Math.tan(F._scene.activeCamera.fov/2)*F._scene.getEngine().getAspectRatio(F._scene.activeCamera,!0)),x.setFloat("yViewport",Math.tan(F._scene.activeCamera.fov/2));else{var Y=F._scene.getEngine().getRenderWidth()/2,Z=F._scene.getEngine().getRenderHeight()/2,fe=(_=F._scene.activeCamera.orthoLeft)!==null&&_!==void 0?_:-Y,w=(j=F._scene.activeCamera.orthoRight)!==null&&j!==void 0?j:Y,se=(G=F._scene.activeCamera.orthoBottom)!==null&&G!==void 0?G:-Z,ee=(y=F._scene.activeCamera.orthoTop)!==null&&y!==void 0?y:Z;x.setMatrix3x3("depthProjection",L.ORTHO_DEPTH_PROJECTION),x.setFloat("xViewport",(w-fe)*.5),x.setFloat("yViewport",(ee-se)*.5)}x.setMatrix("projection",F._scene.getProjectionMatrix()),F._forceGeometryBuffer?(x.setTexture("depthSampler",F._scene.enableGeometryBufferRenderer().getGBuffer().textures[0]),x.setTexture("normalSampler",F._scene.enableGeometryBufferRenderer().getGBuffer().textures[1])):(x.setTexture("depthSampler",F._prePassRenderer.getRenderTarget().textures[F._prePassRenderer.getIndex(5)]),x.setTexture("normalSampler",F._prePassRenderer.getRenderTarget().textures[F._prePassRenderer.getIndex(6)])),x.setTexture("randomSampler",F._randomTexture)}},this._ssaoPostProcess.samples=this.textureSamples},L.prototype._createSSAOCombinePostProcess=function(U){var F=this;this._ssaoCombinePostProcess=new r.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],U,null,O.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(V){var I=F._scene.activeCamera.viewport;V.setVector4("viewport",v.c.Vector4[0].copyFromFloats(I.x,I.y,I.width,I.height)),V.setTextureFromPostProcessOutput("originalColor",F._originalColorPostProcess)},this._ssaoCombinePostProcess.samples=this.textureSamples,this._forceGeometryBuffer||(this._ssaoCombinePostProcess._prePassEffectConfiguration=new l)},L.prototype._createRandomTexture=function(){var U=128;this._randomTexture=new p.a("SSAORandomTexture",U,this._scene,!1,O.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=O.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=O.a.WRAP_ADDRESSMODE;for(var F=this._randomTexture.getContext(),V=function(j,G){return Math.random()*(G-j)+j},I=v.e.Zero(),x=0;x<U;x++)for(var _=0;_<U;_++)I.x=V(0,1),I.y=V(0,1),I.z=0,I.normalize(),I.scaleInPlace(255),I.x=Math.floor(I.x),I.y=Math.floor(I.y),F.fillStyle="rgb("+I.x+", "+I.y+", "+I.z+")",F.fillRect(x,_,1,1);this._randomTexture.update(!1)},L.prototype.serialize=function(){var U=E.a.Serialize(this);return U.customType="SSAO2RenderingPipeline",U},L.Parse=function(U,F,V){return E.a.Parse(function(){return new L(U._name,F,U._ratio)},U,F,V)},L.ORTHO_DEPTH_PROJECTION=[1,0,0,0,1,0,0,0,1],L.PERSPECTIVE_DEPTH_PROJECTION=[0,0,0,0,0,0,1,1,1],Object(f.c)([Object(E.c)()],L.prototype,"totalStrength",void 0),Object(f.c)([Object(E.c)()],L.prototype,"maxZ",void 0),Object(f.c)([Object(E.c)()],L.prototype,"minZAspect",void 0),Object(f.c)([Object(E.c)("samples")],L.prototype,"_samples",void 0),Object(f.c)([Object(E.c)("textureSamples")],L.prototype,"_textureSamples",void 0),Object(f.c)([Object(E.c)()],L.prototype,"_ratio",void 0),Object(f.c)([Object(E.c)("expensiveBlur")],L.prototype,"_expensiveBlur",void 0),Object(f.c)([Object(E.c)()],L.prototype,"radius",void 0),Object(f.c)([Object(E.c)()],L.prototype,"base",void 0),L}(e.a);n.a.RegisteredTypes["BABYLON.SSAO2RenderingPipeline"]=P},600:function($,W,s){"use strict";var f=s(435),o="chromaticAberrationPixelShader",E=`
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
}`;f.a.ShadersStore[o]=E;var v={name:o,shader:E}},601:function($,W,s){"use strict";var f=s(435),o="ssaoCombinePixelShader",E=`uniform sampler2D textureSampler;
uniform sampler2D originalColor;
uniform vec4 viewport;
varying vec2 vUV;
void main(void) {
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);
vec4 sceneColor=texture2D(originalColor,vUV);
gl_FragColor=sceneColor*ssaoColor;
}
`;f.a.ShadersStore[o]=E;var v={name:o,shader:E}},602:function($,W,s){"use strict";s.d(W,"a",function(){return R}),s.d(W,"b",function(){return j}),s.d(W,"g",function(){return G.a}),s.d(W,"h",function(){return te}),s.d(W,"i",function(){return ae}),s.d(W,"c",function(){return a.a}),s.d(W,"d",function(){return n.a}),s.d(W,"e",function(){return _e.a}),s.d(W,"f",function(){return A.a});var f=s(434),o=s(439),E=s(438),v=s(440),c=s(442),O=s(577),p=s(587),r=s(518),e=s(579),t=s(586),i=s(517),n=s(481),a=s(466),l=s(570),h=s(578),u=s(437),g=s(448),A=s(482),R=function(ue){Object(f.d)(B,ue);function B(m,N,M,Q,K){m===void 0&&(m=""),N===void 0&&(N=!0),M===void 0&&(M=g.a.LastCreatedScene),K===void 0&&(K=!0);var b=ue.call(this,M.getEngine(),m)||this;b._camerasToBeAttached=[],b.SharpenPostProcessId="SharpenPostProcessEffect",b.ImageProcessingPostProcessId="ImageProcessingPostProcessEffect",b.FxaaPostProcessId="FxaaPostProcessEffect",b.ChromaticAberrationPostProcessId="ChromaticAberrationPostProcessEffect",b.GrainPostProcessId="GrainPostProcessEffect",b._glowLayer=null,b.animations=[],b._imageProcessingConfigurationObserver=null,b._sharpenEnabled=!1,b._bloomEnabled=!1,b._depthOfFieldEnabled=!1,b._depthOfFieldBlurLevel=l.b.Low,b._fxaaEnabled=!1,b._imageProcessingEnabled=!0,b._bloomScale=.5,b._chromaticAberrationEnabled=!1,b._grainEnabled=!1,b._buildAllowed=!0,b.onBuildObservable=new E.c,b._resizeObserver=null,b._hardwareScaleLevel=1,b._bloomKernel=64,b._bloomWeight=.15,b._bloomThreshold=.9,b._samples=1,b._hasCleared=!1,b._prevPostProcess=null,b._prevPrevPostProcess=null,b._depthOfFieldSceneObserver=null,b._cameras=Q||M.cameras,b._cameras=b._cameras.slice(),b._camerasToBeAttached=b._cameras.slice(),b._buildAllowed=K,b._scene=M;var J=b._scene.getEngine().getCaps();b._hdr=N&&(J.textureHalfFloatRender||J.textureFloatRender),b._hdr?J.textureHalfFloatRender?b._defaultPipelineTextureType=2:J.textureFloatRender&&(b._defaultPipelineTextureType=1):b._defaultPipelineTextureType=0,M.postProcessRenderPipelineManager.addPipeline(b);var pe=b._scene.getEngine();return b.sharpen=new p.a("sharpen",1,null,c.a.BILINEAR_SAMPLINGMODE,pe,!1,b._defaultPipelineTextureType,!0),b._sharpenEffect=new a.a(pe,b.SharpenPostProcessId,function(){return b.sharpen},!0),b.depthOfField=new l.a(b._scene,null,b._depthOfFieldBlurLevel,b._defaultPipelineTextureType,!0),b.bloom=new h.a(b._scene,b._bloomScale,b._bloomWeight,b.bloomKernel,b._defaultPipelineTextureType,!0),b.chromaticAberration=new e.a("ChromaticAberration",pe.getRenderWidth(),pe.getRenderHeight(),1,null,c.a.BILINEAR_SAMPLINGMODE,pe,!1,b._defaultPipelineTextureType,!0),b._chromaticAberrationEffect=new a.a(pe,b.ChromaticAberrationPostProcessId,function(){return b.chromaticAberration},!0),b.grain=new t.a("Grain",1,null,c.a.BILINEAR_SAMPLINGMODE,pe,!1,b._defaultPipelineTextureType,!0),b._grainEffect=new a.a(pe,b.GrainPostProcessId,function(){return b.grain},!0),b._resizeObserver=pe.onResizeObservable.add(function(){b._hardwareScaleLevel=pe.getHardwareScalingLevel(),b.bloomKernel=b.bloomKernel}),b._imageProcessingConfigurationObserver=b._scene.imageProcessingConfiguration.onUpdateParameters.add(function(){b.bloom._downscale._exposure=b._scene.imageProcessingConfiguration.exposure,b.imageProcessingEnabled!==b._scene.imageProcessingConfiguration.isEnabled&&(b._imageProcessingEnabled=b._scene.imageProcessingConfiguration.isEnabled,b._buildPipeline())}),b._buildPipeline(),b}return Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"sharpenEnabled",{get:function(){return this._sharpenEnabled},set:function(m){this._sharpenEnabled!==m&&(this._sharpenEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomKernel",{get:function(){return this._bloomKernel},set:function(m){this._bloomKernel=m,this.bloom.kernel=m/this._hardwareScaleLevel},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomWeight",{get:function(){return this._bloomWeight},set:function(m){this._bloomWeight!==m&&(this.bloom.weight=m,this._bloomWeight=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomThreshold",{get:function(){return this._bloomThreshold},set:function(m){this._bloomThreshold!==m&&(this.bloom.threshold=m,this._bloomThreshold=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomScale",{get:function(){return this._bloomScale},set:function(m){this._bloomScale!==m&&(this._bloomScale=m,this._rebuildBloom(),this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"bloomEnabled",{get:function(){return this._bloomEnabled},set:function(m){this._bloomEnabled!==m&&(this._bloomEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype._rebuildBloom=function(){var m=this.bloom;this.bloom=new h.a(this._scene,this.bloomScale,this._bloomWeight,this.bloomKernel,this._defaultPipelineTextureType,!1),this.bloom.threshold=m.threshold;for(var N=0;N<this._cameras.length;N++)m.disposeEffects(this._cameras[N])},Object.defineProperty(B.prototype,"depthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(m){this._depthOfFieldEnabled!==m&&(this._depthOfFieldEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"depthOfFieldBlurLevel",{get:function(){return this._depthOfFieldBlurLevel},set:function(m){if(this._depthOfFieldBlurLevel!==m){this._depthOfFieldBlurLevel=m;var N=this.depthOfField;this.depthOfField=new l.a(this._scene,null,this._depthOfFieldBlurLevel,this._defaultPipelineTextureType,!1),this.depthOfField.focalLength=N.focalLength,this.depthOfField.focusDistance=N.focusDistance,this.depthOfField.fStop=N.fStop,this.depthOfField.lensSize=N.lensSize;for(var M=0;M<this._cameras.length;M++)N.disposeEffects(this._cameras[M]);this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(m){this._fxaaEnabled!==m&&(this._fxaaEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"samples",{get:function(){return this._samples},set:function(m){this._samples!==m&&(this._samples=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"imageProcessingEnabled",{get:function(){return this._imageProcessingEnabled},set:function(m){this._imageProcessingEnabled!==m&&(this._scene.imageProcessingConfiguration.isEnabled=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"glowLayerEnabled",{get:function(){return this._glowLayer!=null},set:function(m){m&&!this._glowLayer?this._glowLayer=new O.a("",this._scene):!m&&this._glowLayer&&(this._glowLayer.dispose(),this._glowLayer=null)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"glowLayer",{get:function(){return this._glowLayer},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"chromaticAberrationEnabled",{get:function(){return this._chromaticAberrationEnabled},set:function(m){this._chromaticAberrationEnabled!==m&&(this._chromaticAberrationEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"grainEnabled",{get:function(){return this._grainEnabled},set:function(m){this._grainEnabled!==m&&(this._grainEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype.getClassName=function(){return"DefaultRenderingPipeline"},B.prototype.prepare=function(){var m=this._buildAllowed;this._buildAllowed=!0,this._buildPipeline(),this._buildAllowed=m},B.prototype._setAutoClearAndTextureSharing=function(m,N){N===void 0&&(N=!1),this._hasCleared?m.autoClear=!1:(m.autoClear=!0,this._scene.autoClear=!1,this._hasCleared=!0),N||(this._prevPrevPostProcess?m.shareOutputWith(this._prevPrevPostProcess):m.useOwnOutput(),this._prevPostProcess&&(this._prevPrevPostProcess=this._prevPostProcess),this._prevPostProcess=m)},B.prototype._buildPipeline=function(){var m=this;if(!!this._buildAllowed){this._scene.autoClear=!0;var N=this._scene.getEngine();if(this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._prevPostProcess=null,this._prevPrevPostProcess=null,this._hasCleared=!1,this.depthOfFieldEnabled){if(this._cameras.length>1){for(var M=0,Q=this._cameras;M<Q.length;M++){var K=Q[M],b=this._scene.enableDepthRenderer(K);b.useOnlyInActiveCamera=!0}this._depthOfFieldSceneObserver=this._scene.onAfterRenderTargetsRenderObservable.add(function(J){m._cameras.indexOf(J.activeCamera)>-1&&(m.depthOfField.depthTexture=J.enableDepthRenderer(J.activeCamera).getDepthMap())})}else{this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);var b=this._scene.enableDepthRenderer(this._cameras[0]);this.depthOfField.depthTexture=b.getDepthMap()}this.depthOfField._isReady()||this.depthOfField._updateEffects(),this.addEffect(this.depthOfField),this._setAutoClearAndTextureSharing(this.depthOfField._effects[0],!0)}else this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver);this.bloomEnabled&&(this.bloom._isReady()||this.bloom._updateEffects(),this.addEffect(this.bloom),this._setAutoClearAndTextureSharing(this.bloom._effects[0],!0)),this._imageProcessingEnabled&&(this.imageProcessing=new r.a("imageProcessing",1,null,c.a.BILINEAR_SAMPLINGMODE,N,!1,this._defaultPipelineTextureType),this._hdr?(this.addEffect(new a.a(N,this.ImageProcessingPostProcessId,function(){return m.imageProcessing},!0)),this._setAutoClearAndTextureSharing(this.imageProcessing)):this._scene.imageProcessingConfiguration.applyByPostProcess=!1,(!this.cameras||this.cameras.length===0)&&(this._scene.imageProcessingConfiguration.applyByPostProcess=!1),this.imageProcessing.getEffect()||this.imageProcessing._updateParameters()),this.sharpenEnabled&&(this.sharpen.isReady()||this.sharpen.updateEffect(),this.addEffect(this._sharpenEffect),this._setAutoClearAndTextureSharing(this.sharpen)),this.grainEnabled&&(this.grain.isReady()||this.grain.updateEffect(),this.addEffect(this._grainEffect),this._setAutoClearAndTextureSharing(this.grain)),this.chromaticAberrationEnabled&&(this.chromaticAberration.isReady()||this.chromaticAberration.updateEffect(),this.addEffect(this._chromaticAberrationEffect),this._setAutoClearAndTextureSharing(this.chromaticAberration)),this.fxaaEnabled&&(this.fxaa=new i.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,N,!1,this._defaultPipelineTextureType),this.addEffect(new a.a(N,this.FxaaPostProcessId,function(){return m.fxaa},!0)),this._setAutoClearAndTextureSharing(this.fxaa,!0)),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),this._scene.activeCameras&&this._scene.activeCameras.length>1&&(this._scene.autoClear=!0),!this._enableMSAAOnFirstPostProcess(this.samples)&&this.samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0"),this.onBuildObservable.notifyObservers(this)}},B.prototype._disposePostProcesses=function(m){m===void 0&&(m=!1);for(var N=0;N<this._cameras.length;N++){var M=this._cameras[N];this.imageProcessing&&this.imageProcessing.dispose(M),this.fxaa&&this.fxaa.dispose(M),m&&(this.sharpen&&this.sharpen.dispose(M),this.depthOfField&&(this._scene.onAfterRenderTargetsRenderObservable.remove(this._depthOfFieldSceneObserver),this.depthOfField.disposeEffects(M)),this.bloom&&this.bloom.disposeEffects(M),this.chromaticAberration&&this.chromaticAberration.dispose(M),this.grain&&this.grain.dispose(M),this._glowLayer&&this._glowLayer.dispose())}this.imageProcessing=null,this.fxaa=null,m&&(this.sharpen=null,this._sharpenEffect=null,this.depthOfField=null,this.bloom=null,this.chromaticAberration=null,this._chromaticAberrationEffect=null,this.grain=null,this._grainEffect=null,this._glowLayer=null)},B.prototype.addCamera=function(m){this._camerasToBeAttached.push(m),this._buildPipeline()},B.prototype.removeCamera=function(m){var N=this._camerasToBeAttached.indexOf(m);this._camerasToBeAttached.splice(N,1),this._buildPipeline()},B.prototype.dispose=function(){this.onBuildObservable.clear(),this._disposePostProcesses(!0),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._scene.autoClear=!0,this._resizeObserver&&(this._scene.getEngine().onResizeObservable.remove(this._resizeObserver),this._resizeObserver=null),this._scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigurationObserver),ue.prototype.dispose.call(this)},B.prototype.serialize=function(){var m=o.a.Serialize(this);return m.customType="DefaultRenderingPipeline",m},B.Parse=function(m,N,M){return o.a.Parse(function(){return new B(m._name,m._name._hdr,N)},m,N,M)},Object(f.c)([Object(o.c)()],B.prototype,"sharpenEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"bloomKernel",null),Object(f.c)([Object(o.c)()],B.prototype,"_bloomWeight",void 0),Object(f.c)([Object(o.c)()],B.prototype,"_bloomThreshold",void 0),Object(f.c)([Object(o.c)()],B.prototype,"_hdr",void 0),Object(f.c)([Object(o.c)()],B.prototype,"bloomWeight",null),Object(f.c)([Object(o.c)()],B.prototype,"bloomThreshold",null),Object(f.c)([Object(o.c)()],B.prototype,"bloomScale",null),Object(f.c)([Object(o.c)()],B.prototype,"bloomEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"depthOfFieldEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"depthOfFieldBlurLevel",null),Object(f.c)([Object(o.c)()],B.prototype,"fxaaEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"samples",null),Object(f.c)([Object(o.c)()],B.prototype,"imageProcessingEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"glowLayerEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"chromaticAberrationEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"grainEnabled",null),B}(n.a);u.a.RegisteredTypes["BABYLON.DefaultRenderingPipeline"]=R;var S=s(479),P=s(444),D=s(600),L=s(435),U="lensHighlightsPixelShader",F=`
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

}`;L.a.ShadersStore[U]=F;var V={name:U,shader:F},I="depthOfFieldPixelShader",x=`




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
`;L.a.ShadersStore[I]=x;var _={name:I,shader:x},j=function(ue){Object(f.d)(B,ue);function B(m,N,M,Q,K){Q===void 0&&(Q=1);var b=ue.call(this,M.getEngine(),m)||this;return b.LensChromaticAberrationEffect="LensChromaticAberrationEffect",b.HighlightsEnhancingEffect="HighlightsEnhancingEffect",b.LensDepthOfFieldEffect="LensDepthOfFieldEffect",b._pentagonBokehIsEnabled=!1,b._scene=M,b._depthTexture=M.enableDepthRenderer().getDepthMap(),N.grain_texture?b._grainTexture=N.grain_texture:b._createGrainTexture(),b._edgeBlur=N.edge_blur?N.edge_blur:0,b._grainAmount=N.grain_amount?N.grain_amount:0,b._chromaticAberration=N.chromatic_aberration?N.chromatic_aberration:0,b._distortion=N.distortion?N.distortion:0,b._highlightsGain=N.dof_gain!==void 0?N.dof_gain:-1,b._highlightsThreshold=N.dof_threshold?N.dof_threshold:1,b._dofDistance=N.dof_focus_distance!==void 0?N.dof_focus_distance:-1,b._dofAperture=N.dof_aperture?N.dof_aperture:1,b._dofDarken=N.dof_darken?N.dof_darken:0,b._dofPentagon=N.dof_pentagon!==void 0?N.dof_pentagon:!0,b._blurNoise=N.blur_noise!==void 0?N.blur_noise:!0,b._createChromaticAberrationPostProcess(Q),b._createHighlightsPostProcess(Q),b._createDepthOfFieldPostProcess(Q/4),b.addEffect(new a.a(M.getEngine(),b.LensChromaticAberrationEffect,function(){return b._chromaticAberrationPostProcess},!0)),b.addEffect(new a.a(M.getEngine(),b.HighlightsEnhancingEffect,function(){return b._highlightsPostProcess},!0)),b.addEffect(new a.a(M.getEngine(),b.LensDepthOfFieldEffect,function(){return b._depthOfFieldPostProcess},!0)),b._highlightsGain===-1&&b._disableEffect(b.HighlightsEnhancingEffect,null),M.postProcessRenderPipelineManager.addPipeline(b),K&&M.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(m,K),b}return B.prototype.getClassName=function(){return"LensRenderingPipeline"},Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"edgeBlur",{get:function(){return this._edgeBlur},set:function(m){this.setEdgeBlur(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"grainAmount",{get:function(){return this._grainAmount},set:function(m){this.setGrainAmount(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"chromaticAberration",{get:function(){return this._chromaticAberration},set:function(m){this.setChromaticAberration(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"dofAperture",{get:function(){return this._dofAperture},set:function(m){this.setAperture(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"edgeDistortion",{get:function(){return this._distortion},set:function(m){this.setEdgeDistortion(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"dofDistortion",{get:function(){return this._dofDistance},set:function(m){this.setFocusDistance(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"darkenOutOfFocus",{get:function(){return this._dofDarken},set:function(m){this.setDarkenOutOfFocus(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"blurNoise",{get:function(){return this._blurNoise},set:function(m){this._blurNoise=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"pentagonBokeh",{get:function(){return this._pentagonBokehIsEnabled},set:function(m){m?this.enablePentagonBokeh():this.disablePentagonBokeh()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"highlightsGain",{get:function(){return this._highlightsGain},set:function(m){this.setHighlightsGain(m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"highlightsThreshold",{get:function(){return this._highlightsThreshold},set:function(m){this.setHighlightsThreshold(m)},enumerable:!1,configurable:!0}),B.prototype.setEdgeBlur=function(m){this._edgeBlur=m},B.prototype.disableEdgeBlur=function(){this._edgeBlur=0},B.prototype.setGrainAmount=function(m){this._grainAmount=m},B.prototype.disableGrain=function(){this._grainAmount=0},B.prototype.setChromaticAberration=function(m){this._chromaticAberration=m},B.prototype.disableChromaticAberration=function(){this._chromaticAberration=0},B.prototype.setEdgeDistortion=function(m){this._distortion=m},B.prototype.disableEdgeDistortion=function(){this._distortion=0},B.prototype.setFocusDistance=function(m){this._dofDistance=m},B.prototype.disableDepthOfField=function(){this._dofDistance=-1},B.prototype.setAperture=function(m){this._dofAperture=m},B.prototype.setDarkenOutOfFocus=function(m){this._dofDarken=m},B.prototype.enablePentagonBokeh=function(){this._highlightsPostProcess.updateEffect(`#define PENTAGON
`),this._pentagonBokehIsEnabled=!0},B.prototype.disablePentagonBokeh=function(){this._pentagonBokehIsEnabled=!1,this._highlightsPostProcess.updateEffect()},B.prototype.enableNoiseBlur=function(){this._blurNoise=!0},B.prototype.disableNoiseBlur=function(){this._blurNoise=!1},B.prototype.setHighlightsGain=function(m){this._highlightsGain=m},B.prototype.setHighlightsThreshold=function(m){this._highlightsGain===-1&&(this._highlightsGain=1),this._highlightsThreshold=m},B.prototype.disableHighlights=function(){this._highlightsGain=-1},B.prototype.dispose=function(m){m===void 0&&(m=!1),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),this._chromaticAberrationPostProcess=null,this._highlightsPostProcess=null,this._depthOfFieldPostProcess=null,this._grainTexture.dispose(),m&&this._scene.disableDepthRenderer()},B.prototype._createChromaticAberrationPostProcess=function(m){var N=this;this._chromaticAberrationPostProcess=new P.a("LensChromaticAberration","chromaticAberration",["chromatic_aberration","screen_width","screen_height","direction","radialIntensity","centerPosition"],[],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._chromaticAberrationPostProcess.onApply=function(M){M.setFloat("chromatic_aberration",N._chromaticAberration),M.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),M.setFloat("screen_height",N._scene.getEngine().getRenderHeight()),M.setFloat("radialIntensity",1),M.setFloat2("direction",17,17),M.setFloat2("centerPosition",.5,.5)}},B.prototype._createHighlightsPostProcess=function(m){var N=this;this._highlightsPostProcess=new P.a("LensHighlights","lensHighlights",["gain","threshold","screen_width","screen_height"],[],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,this._dofPentagon?`#define PENTAGON
`:""),this._highlightsPostProcess.onApply=function(M){M.setFloat("gain",N._highlightsGain),M.setFloat("threshold",N._highlightsThreshold),M.setTextureFromPostProcess("textureSampler",N._chromaticAberrationPostProcess),M.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),M.setFloat("screen_height",N._scene.getEngine().getRenderHeight())}},B.prototype._createDepthOfFieldPostProcess=function(m){var N=this;this._depthOfFieldPostProcess=new P.a("LensDepthOfField","depthOfField",["grain_amount","blur_noise","screen_width","screen_height","distortion","dof_enabled","screen_distance","aperture","darken","edge_blur","highlights","near","far"],["depthSampler","grainSampler","highlightsSampler"],m,null,c.a.TRILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._depthOfFieldPostProcess.onApply=function(M){M.setTexture("depthSampler",N._depthTexture),M.setTexture("grainSampler",N._grainTexture),M.setTextureFromPostProcess("textureSampler",N._highlightsPostProcess),M.setTextureFromPostProcess("highlightsSampler",N._depthOfFieldPostProcess),M.setFloat("grain_amount",N._grainAmount),M.setBool("blur_noise",N._blurNoise),M.setFloat("screen_width",N._scene.getEngine().getRenderWidth()),M.setFloat("screen_height",N._scene.getEngine().getRenderHeight()),M.setFloat("distortion",N._distortion),M.setBool("dof_enabled",N._dofDistance!==-1),M.setFloat("screen_distance",1/(.1-1/N._dofDistance)),M.setFloat("aperture",N._dofAperture),M.setFloat("darken",N._dofDarken),M.setFloat("edge_blur",N._edgeBlur),M.setBool("highlights",N._highlightsGain!==-1),N._scene.activeCamera&&(M.setFloat("near",N._scene.activeCamera.minZ),M.setFloat("far",N._scene.activeCamera.maxZ))}},B.prototype._createGrainTexture=function(){var m=512;this._grainTexture=new S.a("LensNoiseTexture",m,this._scene,!1,c.a.BILINEAR_SAMPLINGMODE),this._grainTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._grainTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var N=this._grainTexture.getContext(),M=function(J,pe){return Math.random()*(pe-J)+J},Q,K=0;K<m;K++)for(var b=0;b<m;b++)Q=Math.floor(M(.42,.58)*255),N.fillStyle="rgb("+Q+", "+Q+", "+Q+")",N.fillRect(K,b,1,1);this._grainTexture.update(!1)},B}(n.a),G=s(594),y=s(436),Y=s(486),Z=s(472),fe="ssaoPixelShader",w=`
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
`;L.a.ShadersStore[fe]=w;var se={name:fe,shader:w},ee=s(601),te=function(ue){Object(f.d)(B,ue);function B(m,N,M,Q){var K=ue.call(this,N.getEngine(),m)||this;K.SSAOOriginalSceneColorEffect="SSAOOriginalSceneColorEffect",K.SSAORenderEffect="SSAORenderEffect",K.SSAOBlurHRenderEffect="SSAOBlurHRenderEffect",K.SSAOBlurVRenderEffect="SSAOBlurVRenderEffect",K.SSAOCombineRenderEffect="SSAOCombineRenderEffect",K.totalStrength=1,K.radius=1e-4,K.area=.0075,K.fallOff=1e-6,K.base=.5,K._firstUpdate=!0,K._scene=N,K._createRandomTexture(),K._depthTexture=N.enableDepthRenderer().getDepthMap();var b=M.ssaoRatio||M,J=M.combineRatio||M;return K._originalColorPostProcess=new Y.b("SSAOOriginalSceneColor",J,null,c.a.BILINEAR_SAMPLINGMODE,N.getEngine(),!1),K._createSSAOPostProcess(b),K._createBlurPostProcess(b),K._createSSAOCombinePostProcess(J),K.addEffect(new a.a(N.getEngine(),K.SSAOOriginalSceneColorEffect,function(){return K._originalColorPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAORenderEffect,function(){return K._ssaoPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAOBlurHRenderEffect,function(){return K._blurHPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAOBlurVRenderEffect,function(){return K._blurVPostProcess},!0)),K.addEffect(new a.a(N.getEngine(),K.SSAOCombineRenderEffect,function(){return K._ssaoCombinePostProcess},!0)),N.postProcessRenderPipelineManager.addPipeline(K),Q&&N.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(m,Q),K}return Object.defineProperty(B.prototype,"scene",{get:function(){return this._scene},enumerable:!1,configurable:!0}),B.prototype.getClassName=function(){return"SSAORenderingPipeline"},B.prototype.dispose=function(m){m===void 0&&(m=!1);for(var N=0;N<this._scene.cameras.length;N++){var M=this._scene.cameras[N];this._originalColorPostProcess.dispose(M),this._ssaoPostProcess.dispose(M),this._blurHPostProcess.dispose(M),this._blurVPostProcess.dispose(M),this._ssaoCombinePostProcess.dispose(M)}this._randomTexture.dispose(),m&&this._scene.disableDepthRenderer(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._scene.cameras),ue.prototype.dispose.call(this)},B.prototype._createBlurPostProcess=function(m){var N=this,M=16;this._blurHPostProcess=new Z.a("BlurH",new y.d(1,0),M,m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurVPostProcess=new Z.a("BlurV",new y.d(0,1),M,m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,0),this._blurHPostProcess.onActivateObservable.add(function(){var Q=N._blurHPostProcess.width/N._scene.getEngine().getRenderWidth();N._blurHPostProcess.kernel=M*Q}),this._blurVPostProcess.onActivateObservable.add(function(){var Q=N._blurVPostProcess.height/N._scene.getEngine().getRenderHeight();N._blurVPostProcess.kernel=M*Q})},B.prototype._rebuild=function(){this._firstUpdate=!0,ue.prototype._rebuild.call(this)},B.prototype._createSSAOPostProcess=function(m){var N=this,M=16,Q=[.5381,.1856,-.4319,.1379,.2486,.443,.3371,.5679,-.0057,-.6999,-.0451,-.0019,.0689,-.1598,-.8547,.056,.0069,-.1843,-.0146,.1402,.0762,.01,-.1924,-.0344,-.3577,-.5301,-.4358,-.3169,.1063,.0158,.0103,-.5869,.0046,-.0897,-.494,.3287,.7119,-.0154,-.0918,-.0533,.0596,-.5411,.0352,-.0631,.546,-.4776,.2847,-.0271],K=1/M;this._ssaoPostProcess=new P.a("ssao","ssao",["sampleSphere","samplesFactor","randTextureTiles","totalStrength","radius","area","fallOff","base","range","viewport"],["randomSampler"],m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1,"#define SAMPLES "+M+`
#define SSAO`),this._ssaoPostProcess.onApply=function(b){N._firstUpdate&&(b.setArray3("sampleSphere",Q),b.setFloat("samplesFactor",K),b.setFloat("randTextureTiles",4)),b.setFloat("totalStrength",N.totalStrength),b.setFloat("radius",N.radius),b.setFloat("area",N.area),b.setFloat("fallOff",N.fallOff),b.setFloat("base",N.base),b.setTexture("textureSampler",N._depthTexture),b.setTexture("randomSampler",N._randomTexture)}},B.prototype._createSSAOCombinePostProcess=function(m){var N=this;this._ssaoCombinePostProcess=new P.a("ssaoCombine","ssaoCombine",[],["originalColor","viewport"],m,null,c.a.BILINEAR_SAMPLINGMODE,this._scene.getEngine(),!1),this._ssaoCombinePostProcess.onApply=function(M){M.setVector4("viewport",y.c.Vector4[0].copyFromFloats(0,0,1,1)),M.setTextureFromPostProcess("originalColor",N._originalColorPostProcess)}},B.prototype._createRandomTexture=function(){var m=512;this._randomTexture=new S.a("SSAORandomTexture",m,this._scene,!1,c.a.TRILINEAR_SAMPLINGMODE),this._randomTexture.wrapU=c.a.WRAP_ADDRESSMODE,this._randomTexture.wrapV=c.a.WRAP_ADDRESSMODE;for(var N=this._randomTexture.getContext(),M=function(J,pe){return Math.random()*(pe-J)+J},Q=y.e.Zero(),K=0;K<m;K++)for(var b=0;b<m;b++)Q.x=Math.floor(M(-1,1)*255),Q.y=Math.floor(M(-1,1)*255),Q.z=Math.floor(M(-1,1)*255),N.fillStyle="rgb("+Q.x+", "+Q.y+", "+Q.z+")",N.fillRect(K,b,1,1);this._randomTexture.update(!1)},Object(f.c)([Object(o.c)()],B.prototype,"totalStrength",void 0),Object(f.c)([Object(o.c)()],B.prototype,"radius",void 0),Object(f.c)([Object(o.c)()],B.prototype,"area",void 0),Object(f.c)([Object(o.c)()],B.prototype,"fallOff",void 0),Object(f.c)([Object(o.c)()],B.prototype,"base",void 0),B}(n.a),le=s(450),q=s(571),X=s(581),ge=s(535),Ee="standardPixelShader",oe=`uniform sampler2D textureSampler;
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
`;L.a.ShadersStore[Ee]=oe;var me={name:Ee,shader:oe},ae=function(ue){Object(f.d)(B,ue);function B(m,N,M,Q,K){Q===void 0&&(Q=null);var b=ue.call(this,N.getEngine(),m)||this;return b.downSampleX4PostProcess=null,b.brightPassPostProcess=null,b.blurHPostProcesses=[],b.blurVPostProcesses=[],b.textureAdderPostProcess=null,b.volumetricLightPostProcess=null,b.volumetricLightSmoothXPostProcess=null,b.volumetricLightSmoothYPostProcess=null,b.volumetricLightMergePostProces=null,b.volumetricLightFinalPostProcess=null,b.luminancePostProcess=null,b.luminanceDownSamplePostProcesses=[],b.hdrPostProcess=null,b.textureAdderFinalPostProcess=null,b.lensFlareFinalPostProcess=null,b.hdrFinalPostProcess=null,b.lensFlarePostProcess=null,b.lensFlareComposePostProcess=null,b.motionBlurPostProcess=null,b.depthOfFieldPostProcess=null,b.fxaaPostProcess=null,b.screenSpaceReflectionPostProcess=null,b.brightThreshold=1,b.blurWidth=512,b.horizontalBlur=!1,b.lensTexture=null,b.volumetricLightCoefficient=.2,b.volumetricLightPower=4,b.volumetricLightBlurScale=64,b.sourceLight=null,b.hdrMinimumLuminance=1,b.hdrDecreaseRate=.5,b.hdrIncreaseRate=.5,b.lensColorTexture=null,b.lensFlareStrength=20,b.lensFlareGhostDispersal=1.4,b.lensFlareHaloWidth=.7,b.lensFlareDistortionStrength=16,b.lensFlareBlurWidth=512,b.lensStarTexture=null,b.lensFlareDirtTexture=null,b.depthOfFieldDistance=10,b.depthOfFieldBlurWidth=64,b.animations=[],b._currentDepthOfFieldSource=null,b._fixedExposure=1,b._currentExposure=1,b._hdrAutoExposure=!1,b._hdrCurrentLuminance=1,b._motionStrength=1,b._isObjectBasedMotionBlur=!1,b._camerasToBeAttached=[],b._bloomEnabled=!1,b._depthOfFieldEnabled=!1,b._vlsEnabled=!1,b._lensFlareEnabled=!1,b._hdrEnabled=!1,b._motionBlurEnabled=!1,b._fxaaEnabled=!1,b._screenSpaceReflectionsEnabled=!1,b._motionBlurSamples=64,b._volumetricLightStepsCount=50,b._samples=1,b._cameras=K||N.cameras,b._cameras=b._cameras.slice(),b._camerasToBeAttached=b._cameras.slice(),b._scene=N,b._basePostProcess=Q,b._ratio=M,b._floatTextureType=N.getEngine().getCaps().textureFloatRender?1:2,N.postProcessRenderPipelineManager.addPipeline(b),b._buildPipeline(),b}return Object.defineProperty(B.prototype,"exposure",{get:function(){return this._fixedExposure},set:function(m){this._fixedExposure=m,this._currentExposure=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"hdrAutoExposure",{get:function(){return this._hdrAutoExposure},set:function(m){if(this._hdrAutoExposure=m,this.hdrPostProcess){var N=["#define HDR"];m&&N.push("#define AUTO_EXPOSURE"),this.hdrPostProcess.updateEffect(N.join(`
`))}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"motionStrength",{get:function(){return this._motionStrength},set:function(m){this._motionStrength=m,this._isObjectBasedMotionBlur&&this.motionBlurPostProcess&&(this.motionBlurPostProcess.motionStrength=m)},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"objectBasedMotionBlur",{get:function(){return this._isObjectBasedMotionBlur},set:function(m){var N=this._isObjectBasedMotionBlur!==m;this._isObjectBasedMotionBlur=m,N&&this._buildPipeline()},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"BloomEnabled",{get:function(){return this._bloomEnabled},set:function(m){this._bloomEnabled!==m&&(this._bloomEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"DepthOfFieldEnabled",{get:function(){return this._depthOfFieldEnabled},set:function(m){this._depthOfFieldEnabled!==m&&(this._depthOfFieldEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"LensFlareEnabled",{get:function(){return this._lensFlareEnabled},set:function(m){this._lensFlareEnabled!==m&&(this._lensFlareEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"HDREnabled",{get:function(){return this._hdrEnabled},set:function(m){this._hdrEnabled!==m&&(this._hdrEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"VLSEnabled",{get:function(){return this._vlsEnabled},set:function(m){if(this._vlsEnabled!==m){if(m){var N=this._scene.enableGeometryBufferRenderer();if(!N){v.a.Warn("Geometry renderer is not supported, cannot create volumetric lights in Standard Rendering Pipeline");return}}this._vlsEnabled=m,this._buildPipeline()}},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"MotionBlurEnabled",{get:function(){return this._motionBlurEnabled},set:function(m){this._motionBlurEnabled!==m&&(this._motionBlurEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"fxaaEnabled",{get:function(){return this._fxaaEnabled},set:function(m){this._fxaaEnabled!==m&&(this._fxaaEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"screenSpaceReflectionsEnabled",{get:function(){return this._screenSpaceReflectionsEnabled},set:function(m){this._screenSpaceReflectionsEnabled!==m&&(this._screenSpaceReflectionsEnabled=m,this._buildPipeline())},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"volumetricLightStepsCount",{get:function(){return this._volumetricLightStepsCount},set:function(m){this.volumetricLightPostProcess&&this.volumetricLightPostProcess.updateEffect(`#define VLS
#define NB_STEPS `+m.toFixed(1)),this._volumetricLightStepsCount=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"motionBlurSamples",{get:function(){return this._motionBlurSamples},set:function(m){this.motionBlurPostProcess&&(this._isObjectBasedMotionBlur?this.motionBlurPostProcess.motionBlurSamples=m:this.motionBlurPostProcess.updateEffect(`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+m.toFixed(1))),this._motionBlurSamples=m},enumerable:!1,configurable:!0}),Object.defineProperty(B.prototype,"samples",{get:function(){return this._samples},set:function(m){this._samples!==m&&(this._samples=m,this._buildPipeline())},enumerable:!1,configurable:!0}),B.prototype._buildPipeline=function(){var m=this,N=this._ratio,M=this._scene;this._disposePostProcesses(),this._cameras!==null&&(this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),this._cameras=this._camerasToBeAttached.slice()),this._reset(),this._screenSpaceReflectionsEnabled&&(this.screenSpaceReflectionPostProcess=new X.a("HDRPass",M,N,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,this._floatTextureType),this.screenSpaceReflectionPostProcess.onApplyObservable.add(function(){m._currentDepthOfFieldSource=m.screenSpaceReflectionPostProcess}),this.addEffect(new a.a(M.getEngine(),"HDRScreenSpaceReflections",function(){return m.screenSpaceReflectionPostProcess},!0))),this._basePostProcess?this.originalPostProcess=this._basePostProcess:this.originalPostProcess=new P.a("HDRPass","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",this._floatTextureType),this.originalPostProcess.autoClear=!this.screenSpaceReflectionPostProcess,this.originalPostProcess.onApplyObservable.add(function(){m._currentDepthOfFieldSource=m.originalPostProcess}),this.addEffect(new a.a(M.getEngine(),"HDRPassPostProcess",function(){return m.originalPostProcess},!0)),this._bloomEnabled&&(this._createDownSampleX4PostProcess(M,N/4),this._createBrightPassPostProcess(M,N/4),this._createBlurPostProcesses(M,N/4,1),this._createTextureAdderPostProcess(M,N),this.textureAdderFinalPostProcess=new P.a("HDRDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRBaseDepthOfFieldSource",function(){return m.textureAdderFinalPostProcess},!0))),this._vlsEnabled&&(this._createVolumetricLightPostProcess(M,N),this.volumetricLightFinalPostProcess=new P.a("HDRVLSFinal","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRVLSFinal",function(){return m.volumetricLightFinalPostProcess},!0))),this._lensFlareEnabled&&(this._createLensFlarePostProcess(M,N),this.lensFlareFinalPostProcess=new P.a("HDRPostLensFlareDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRPostLensFlareDepthOfFieldSource",function(){return m.lensFlareFinalPostProcess},!0))),this._hdrEnabled&&(this._createLuminancePostProcesses(M,this._floatTextureType),this._createHdrPostProcess(M,N),this.hdrFinalPostProcess=new P.a("HDRPostHDReDepthOfFieldSource","standard",[],[],N,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,"#define PASS_POST_PROCESS",0),this.addEffect(new a.a(M.getEngine(),"HDRPostHDReDepthOfFieldSource",function(){return m.hdrFinalPostProcess},!0))),this._depthOfFieldEnabled&&(this._createBlurPostProcesses(M,N/2,3,"depthOfFieldBlurWidth"),this._createDepthOfFieldPostProcess(M,N)),this._motionBlurEnabled&&this._createMotionBlurPostProcess(M,N),this._fxaaEnabled&&(this.fxaaPostProcess=new i.a("fxaa",1,null,c.a.BILINEAR_SAMPLINGMODE,M.getEngine(),!1,0),this.addEffect(new a.a(M.getEngine(),"HDRFxaa",function(){return m.fxaaPostProcess},!0))),this._cameras!==null&&this._scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(this._name,this._cameras),!this._enableMSAAOnFirstPostProcess(this._samples)&&this._samples>1&&v.a.Warn("MSAA failed to enable, MSAA is only supported in browsers that support webGL >= 2.0")},B.prototype._createDownSampleX4PostProcess=function(m,N){var M=this,Q=new Array(32);this.downSampleX4PostProcess=new P.a("HDRDownSampleX4","standard",["dsOffsets"],[],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define DOWN_SAMPLE_X4",this._floatTextureType),this.downSampleX4PostProcess.onApply=function(K){for(var b=0,J=M.downSampleX4PostProcess.width,pe=M.downSampleX4PostProcess.height,Te=-2;Te<2;Te++)for(var Se=-2;Se<2;Se++)Q[b]=(Te+.5)*(1/J),Q[b+1]=(Se+.5)*(1/pe),b+=2;K.setArray2("dsOffsets",Q)},this.addEffect(new a.a(m.getEngine(),"HDRDownSampleX4",function(){return M.downSampleX4PostProcess},!0))},B.prototype._createBrightPassPostProcess=function(m,N){var M=this,Q=new Array(8);this.brightPassPostProcess=new P.a("HDRBrightPass","standard",["dsOffsets","brightThreshold"],[],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define BRIGHT_PASS",this._floatTextureType),this.brightPassPostProcess.onApply=function(K){var b=1/M.brightPassPostProcess.width,J=1/M.brightPassPostProcess.height;Q[0]=-.5*b,Q[1]=.5*J,Q[2]=.5*b,Q[3]=.5*J,Q[4]=-.5*b,Q[5]=-.5*J,Q[6]=.5*b,Q[7]=-.5*J,K.setArray2("dsOffsets",Q),K.setFloat("brightThreshold",M.brightThreshold)},this.addEffect(new a.a(m.getEngine(),"HDRBrightPass",function(){return M.brightPassPostProcess},!0))},B.prototype._createBlurPostProcesses=function(m,N,M,Q){var K=this;Q===void 0&&(Q="blurWidth");var b=m.getEngine(),J=new Z.a("HDRBlurH_"+M,new y.d(1,0),this[Q],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,this._floatTextureType),pe=new Z.a("HDRBlurV_"+M,new y.d(0,1),this[Q],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,this._floatTextureType);J.onActivateObservable.add(function(){var Te=J.width/b.getRenderWidth();J.kernel=K[Q]*Te}),pe.onActivateObservable.add(function(){var Te=pe.height/b.getRenderHeight();pe.kernel=K.horizontalBlur?64*Te:K[Q]*Te}),this.addEffect(new a.a(m.getEngine(),"HDRBlurH"+M,function(){return J},!0)),this.addEffect(new a.a(m.getEngine(),"HDRBlurV"+M,function(){return pe},!0)),this.blurHPostProcesses.push(J),this.blurVPostProcesses.push(pe)},B.prototype._createTextureAdderPostProcess=function(m,N){var M=this;this.textureAdderPostProcess=new P.a("HDRTextureAdder","standard",["exposure"],["otherSampler","lensSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define TEXTURE_ADDER",this._floatTextureType),this.textureAdderPostProcess.onApply=function(Q){Q.setTextureFromPostProcess("otherSampler",M._vlsEnabled?M._currentDepthOfFieldSource:M.originalPostProcess),Q.setTexture("lensSampler",M.lensTexture),Q.setFloat("exposure",M._currentExposure),M._currentDepthOfFieldSource=M.textureAdderFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDRTextureAdder",function(){return M.textureAdderPostProcess},!0))},B.prototype._createVolumetricLightPostProcess=function(m,N){var M=this,Q=m.enableGeometryBufferRenderer();Q.enablePosition=!0;var K=Q.getGBuffer();this.volumetricLightPostProcess=new P.a("HDRVLS","standard",["shadowViewProjection","cameraPosition","sunDirection","sunColor","scatteringCoefficient","scatteringPower","depthValues"],["shadowMapSampler","positionSampler"],N/8,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,`#define VLS
#define NB_STEPS `+this._volumetricLightStepsCount.toFixed(1));var b=y.d.Zero();this.volumetricLightPostProcess.onApply=function(J){if(M.sourceLight&&M.sourceLight.getShadowGenerator()&&M._scene.activeCamera){var pe=M.sourceLight.getShadowGenerator();J.setTexture("shadowMapSampler",pe.getShadowMap()),J.setTexture("positionSampler",K.textures[2]),J.setColor3("sunColor",M.sourceLight.diffuse),J.setVector3("sunDirection",M.sourceLight.getShadowDirection()),J.setVector3("cameraPosition",M._scene.activeCamera.globalPosition),J.setMatrix("shadowViewProjection",pe.getTransformMatrix()),J.setFloat("scatteringCoefficient",M.volumetricLightCoefficient),J.setFloat("scatteringPower",M.volumetricLightPower),b.x=M.sourceLight.getDepthMinZ(M._scene.activeCamera),b.y=M.sourceLight.getDepthMaxZ(M._scene.activeCamera),J.setVector2("depthValues",b)}},this.addEffect(new a.a(m.getEngine(),"HDRVLS",function(){return M.volumetricLightPostProcess},!0)),this._createBlurPostProcesses(m,N/4,0,"volumetricLightBlurScale"),this.volumetricLightMergePostProces=new P.a("HDRVLSMerge","standard",[],["originalSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define VLSMERGE"),this.volumetricLightMergePostProces.onApply=function(J){J.setTextureFromPostProcess("originalSampler",M._bloomEnabled?M.textureAdderFinalPostProcess:M.originalPostProcess),M._currentDepthOfFieldSource=M.volumetricLightFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDRVLSMerge",function(){return M.volumetricLightMergePostProces},!0))},B.prototype._createLuminancePostProcesses=function(m,N){var M=this,Q=Math.pow(3,B.LuminanceSteps);this.luminancePostProcess=new P.a("HDRLuminance","standard",["lumOffsets"],[],{width:Q,height:Q},null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LUMINANCE",N);var K=[];this.luminancePostProcess.onApply=function(Se){var Pe=1/M.luminancePostProcess.width,Oe=1/M.luminancePostProcess.height;K[0]=-.5*Pe,K[1]=.5*Oe,K[2]=.5*Pe,K[3]=.5*Oe,K[4]=-.5*Pe,K[5]=-.5*Oe,K[6]=.5*Pe,K[7]=-.5*Oe,Se.setArray2("lumOffsets",K)},this.addEffect(new a.a(m.getEngine(),"HDRLuminance",function(){return M.luminancePostProcess},!0));for(var b=B.LuminanceSteps-1;b>=0;b--){var Q=Math.pow(3,b),J=`#define LUMINANCE_DOWN_SAMPLE
`;b===0&&(J+="#define FINAL_DOWN_SAMPLER");var pe=new P.a("HDRLuminanceDownSample"+b,"standard",["dsOffsets","halfDestPixelSize"],[],{width:Q,height:Q},null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,J,N);this.luminanceDownSamplePostProcesses.push(pe)}var Te=this.luminancePostProcess;this.luminanceDownSamplePostProcesses.forEach(function(Se,Pe){var Oe=new Array(18);Se.onApply=function(Le){if(!!Te){for(var Ie=0,xe=-1;xe<2;xe++)for(var Me=-1;Me<2;Me++)Oe[Ie]=xe/Te.width,Oe[Ie+1]=Me/Te.height,Ie+=2;Le.setArray2("dsOffsets",Oe),Le.setFloat("halfDestPixelSize",.5/Te.width),Pe===M.luminanceDownSamplePostProcesses.length-1?Te=M.luminancePostProcess:Te=Se}},Pe===M.luminanceDownSamplePostProcesses.length-1&&(Se.onAfterRender=function(){var Le=m.getEngine().readPixels(0,0,1,1),Ie=new y.f(1/(255*255*255),1/(255*255),1/255,1);Le.then(function(xe){var Me=new Uint8Array(xe.buffer);M._hdrCurrentLuminance=(Me[0]*Ie.x+Me[1]*Ie.y+Me[2]*Ie.z+Me[3]*Ie.w)/100})}),M.addEffect(new a.a(m.getEngine(),"HDRLuminanceDownSample"+Pe,function(){return Se},!0))})},B.prototype._createHdrPostProcess=function(m,N){var M=this,Q=["#define HDR"];this._hdrAutoExposure&&Q.push("#define AUTO_EXPOSURE"),this.hdrPostProcess=new P.a("HDR","standard",["averageLuminance"],["textureAdderSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,Q.join(`
`),0);var K=1,b=0,J=0;this.hdrPostProcess.onApply=function(pe){if(pe.setTextureFromPostProcess("textureAdderSampler",M._currentDepthOfFieldSource),b+=m.getEngine().getDeltaTime(),K<0)K=M._hdrCurrentLuminance;else{var Te=(J-b)/1e3;M._hdrCurrentLuminance<K+M.hdrDecreaseRate*Te?K+=M.hdrDecreaseRate*Te:M._hdrCurrentLuminance>K-M.hdrIncreaseRate*Te?K-=M.hdrIncreaseRate*Te:K=M._hdrCurrentLuminance}M.hdrAutoExposure?M._currentExposure=M._fixedExposure/K:(K=le.a.Clamp(K,M.hdrMinimumLuminance,1e20),pe.setFloat("averageLuminance",K)),J=b,M._currentDepthOfFieldSource=M.hdrFinalPostProcess},this.addEffect(new a.a(m.getEngine(),"HDR",function(){return M.hdrPostProcess},!0))},B.prototype._createLensFlarePostProcess=function(m,N){var M=this;this.lensFlarePostProcess=new P.a("HDRLensFlare","standard",["strength","ghostDispersal","haloWidth","resolution","distortionStrength"],["lensColorSampler"],N/2,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LENS_FLARE",0),this.addEffect(new a.a(m.getEngine(),"HDRLensFlare",function(){return M.lensFlarePostProcess},!0)),this._createBlurPostProcesses(m,N/4,2,"lensFlareBlurWidth"),this.lensFlareComposePostProcess=new P.a("HDRLensFlareCompose","standard",["lensStarMatrix"],["otherSampler","lensDirtSampler","lensStarSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define LENS_FLARE_COMPOSE",0),this.addEffect(new a.a(m.getEngine(),"HDRLensFlareCompose",function(){return M.lensFlareComposePostProcess},!0));var Q=new y.d(0,0);this.lensFlarePostProcess.onApply=function(J){J.setTextureFromPostProcess("textureSampler",M._bloomEnabled?M.blurHPostProcesses[0]:M.originalPostProcess),J.setTexture("lensColorSampler",M.lensColorTexture),J.setFloat("strength",M.lensFlareStrength),J.setFloat("ghostDispersal",M.lensFlareGhostDispersal),J.setFloat("haloWidth",M.lensFlareHaloWidth),Q.x=M.lensFlarePostProcess.width,Q.y=M.lensFlarePostProcess.height,J.setVector2("resolution",Q),J.setFloat("distortionStrength",M.lensFlareDistortionStrength)};var K=y.a.FromValues(2,0,-1,0,0,2,-1,0,0,0,1,0,0,0,0,1),b=y.a.FromValues(.5,0,.5,0,0,.5,.5,0,0,0,1,0,0,0,0,1);this.lensFlareComposePostProcess.onApply=function(J){if(!!M._scene.activeCamera){J.setTextureFromPostProcess("otherSampler",M.lensFlarePostProcess),J.setTexture("lensDirtSampler",M.lensFlareDirtTexture),J.setTexture("lensStarSampler",M.lensStarTexture);var pe=M._scene.activeCamera.getViewMatrix().getRow(0),Te=M._scene.activeCamera.getViewMatrix().getRow(2),Se=y.e.Dot(pe.toVector3(),new y.e(1,0,0))+y.e.Dot(Te.toVector3(),new y.e(0,0,1));Se*=4;var Pe=y.a.FromValues(Math.cos(Se)*.5,-Math.sin(Se),0,0,Math.sin(Se),Math.cos(Se)*.5,0,0,0,0,1,0,0,0,0,1),Oe=b.multiply(Pe).multiply(K);J.setMatrix("lensStarMatrix",Oe),M._currentDepthOfFieldSource=M.lensFlareFinalPostProcess}}},B.prototype._createDepthOfFieldPostProcess=function(m,N){var M=this;this.depthOfFieldPostProcess=new P.a("HDRDepthOfField","standard",["distance"],["otherSampler","depthSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,"#define DEPTH_OF_FIELD",0),this.depthOfFieldPostProcess.onApply=function(Q){Q.setTextureFromPostProcess("otherSampler",M._currentDepthOfFieldSource),Q.setTexture("depthSampler",M._getDepthTexture()),Q.setFloat("distance",M.depthOfFieldDistance)},this.addEffect(new a.a(m.getEngine(),"HDRDepthOfField",function(){return M.depthOfFieldPostProcess},!0))},B.prototype._createMotionBlurPostProcess=function(m,N){var M=this;if(this._isObjectBasedMotionBlur){var Q=new q.a("HDRMotionBlur",m,N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,0);Q.motionStrength=this.motionStrength,Q.motionBlurSamples=this.motionBlurSamples,this.motionBlurPostProcess=Q}else{this.motionBlurPostProcess=new P.a("HDRMotionBlur","standard",["inverseViewProjection","prevViewProjection","screenSize","motionScale","motionStrength"],["depthSampler"],N,null,c.a.BILINEAR_SAMPLINGMODE,m.getEngine(),!1,`#define MOTION_BLUR
#define MAX_MOTION_SAMPLES `+this.motionBlurSamples.toFixed(1),0);var K=0,b=y.a.Identity(),J=y.a.Identity(),pe=y.a.Identity(),Te=y.d.Zero();this.motionBlurPostProcess.onApply=function(Se){pe=m.getProjectionMatrix().multiply(m.getViewMatrix()),pe.invertToRef(J),Se.setMatrix("inverseViewProjection",J),Se.setMatrix("prevViewProjection",b),b=pe,Te.x=M.motionBlurPostProcess.width,Te.y=M.motionBlurPostProcess.height,Se.setVector2("screenSize",Te),K=m.getEngine().getFps()/60,Se.setFloat("motionScale",K),Se.setFloat("motionStrength",M.motionStrength),Se.setTexture("depthSampler",M._getDepthTexture())}}this.addEffect(new a.a(m.getEngine(),"HDRMotionBlur",function(){return M.motionBlurPostProcess},!0))},B.prototype._getDepthTexture=function(){if(this._scene.getEngine().getCaps().drawBuffersExtension){var m=this._scene.enableGeometryBufferRenderer();return m.getGBuffer().textures[0]}return this._scene.enableDepthRenderer().getDepthMap()},B.prototype._disposePostProcesses=function(){for(var m=0;m<this._cameras.length;m++){var N=this._cameras[m];this.originalPostProcess&&this.originalPostProcess.dispose(N),this.screenSpaceReflectionPostProcess&&this.screenSpaceReflectionPostProcess.dispose(N),this.downSampleX4PostProcess&&this.downSampleX4PostProcess.dispose(N),this.brightPassPostProcess&&this.brightPassPostProcess.dispose(N),this.textureAdderPostProcess&&this.textureAdderPostProcess.dispose(N),this.volumetricLightPostProcess&&this.volumetricLightPostProcess.dispose(N),this.volumetricLightSmoothXPostProcess&&this.volumetricLightSmoothXPostProcess.dispose(N),this.volumetricLightSmoothYPostProcess&&this.volumetricLightSmoothYPostProcess.dispose(N),this.volumetricLightMergePostProces&&this.volumetricLightMergePostProces.dispose(N),this.volumetricLightFinalPostProcess&&this.volumetricLightFinalPostProcess.dispose(N),this.lensFlarePostProcess&&this.lensFlarePostProcess.dispose(N),this.lensFlareComposePostProcess&&this.lensFlareComposePostProcess.dispose(N);for(var M=0;M<this.luminanceDownSamplePostProcesses.length;M++)this.luminanceDownSamplePostProcesses[M].dispose(N);this.luminancePostProcess&&this.luminancePostProcess.dispose(N),this.hdrPostProcess&&this.hdrPostProcess.dispose(N),this.hdrFinalPostProcess&&this.hdrFinalPostProcess.dispose(N),this.depthOfFieldPostProcess&&this.depthOfFieldPostProcess.dispose(N),this.motionBlurPostProcess&&this.motionBlurPostProcess.dispose(N),this.fxaaPostProcess&&this.fxaaPostProcess.dispose(N);for(var M=0;M<this.blurHPostProcesses.length;M++)this.blurHPostProcesses[M].dispose(N);for(var M=0;M<this.blurVPostProcesses.length;M++)this.blurVPostProcesses[M].dispose(N)}this.originalPostProcess=null,this.downSampleX4PostProcess=null,this.brightPassPostProcess=null,this.textureAdderPostProcess=null,this.textureAdderFinalPostProcess=null,this.volumetricLightPostProcess=null,this.volumetricLightSmoothXPostProcess=null,this.volumetricLightSmoothYPostProcess=null,this.volumetricLightMergePostProces=null,this.volumetricLightFinalPostProcess=null,this.lensFlarePostProcess=null,this.lensFlareComposePostProcess=null,this.luminancePostProcess=null,this.hdrPostProcess=null,this.hdrFinalPostProcess=null,this.depthOfFieldPostProcess=null,this.motionBlurPostProcess=null,this.fxaaPostProcess=null,this.screenSpaceReflectionPostProcess=null,this.luminanceDownSamplePostProcesses=[],this.blurHPostProcesses=[],this.blurVPostProcesses=[]},B.prototype.dispose=function(){this._disposePostProcesses(),this._scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(this._name,this._cameras),ue.prototype.dispose.call(this)},B.prototype.serialize=function(){var m=o.a.Serialize(this);return this.sourceLight&&(m.sourceLightId=this.sourceLight.id),this.screenSpaceReflectionPostProcess&&(m.screenSpaceReflectionPostProcess=o.a.Serialize(this.screenSpaceReflectionPostProcess)),m.customType="StandardRenderingPipeline",m},B.Parse=function(m,N,M){var Q=o.a.Parse(function(){return new B(m._name,N,m._ratio)},m,N,M);return m.sourceLightId&&(Q.sourceLight=N.getLightByID(m.sourceLightId)),m.screenSpaceReflectionPostProcess&&o.a.Parse(function(){return Q.screenSpaceReflectionPostProcess},m.screenSpaceReflectionPostProcess,N,M),Q},B.LuminanceSteps=6,Object(f.c)([Object(o.c)()],B.prototype,"brightThreshold",void 0),Object(f.c)([Object(o.c)()],B.prototype,"blurWidth",void 0),Object(f.c)([Object(o.c)()],B.prototype,"horizontalBlur",void 0),Object(f.c)([Object(o.c)()],B.prototype,"exposure",null),Object(f.c)([Object(o.m)("lensTexture")],B.prototype,"lensTexture",void 0),Object(f.c)([Object(o.c)()],B.prototype,"volumetricLightCoefficient",void 0),Object(f.c)([Object(o.c)()],B.prototype,"volumetricLightPower",void 0),Object(f.c)([Object(o.c)()],B.prototype,"volumetricLightBlurScale",void 0),Object(f.c)([Object(o.c)()],B.prototype,"hdrMinimumLuminance",void 0),Object(f.c)([Object(o.c)()],B.prototype,"hdrDecreaseRate",void 0),Object(f.c)([Object(o.c)()],B.prototype,"hdrIncreaseRate",void 0),Object(f.c)([Object(o.c)()],B.prototype,"hdrAutoExposure",null),Object(f.c)([Object(o.m)("lensColorTexture")],B.prototype,"lensColorTexture",void 0),Object(f.c)([Object(o.c)()],B.prototype,"lensFlareStrength",void 0),Object(f.c)([Object(o.c)()],B.prototype,"lensFlareGhostDispersal",void 0),Object(f.c)([Object(o.c)()],B.prototype,"lensFlareHaloWidth",void 0),Object(f.c)([Object(o.c)()],B.prototype,"lensFlareDistortionStrength",void 0),Object(f.c)([Object(o.c)()],B.prototype,"lensFlareBlurWidth",void 0),Object(f.c)([Object(o.m)("lensStarTexture")],B.prototype,"lensStarTexture",void 0),Object(f.c)([Object(o.m)("lensFlareDirtTexture")],B.prototype,"lensFlareDirtTexture",void 0),Object(f.c)([Object(o.c)()],B.prototype,"depthOfFieldDistance",void 0),Object(f.c)([Object(o.c)()],B.prototype,"depthOfFieldBlurWidth",void 0),Object(f.c)([Object(o.c)()],B.prototype,"motionStrength",null),Object(f.c)([Object(o.c)()],B.prototype,"objectBasedMotionBlur",null),Object(f.c)([Object(o.c)()],B.prototype,"_ratio",void 0),Object(f.c)([Object(o.c)()],B.prototype,"BloomEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"DepthOfFieldEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"LensFlareEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"HDREnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"VLSEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"MotionBlurEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"fxaaEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"screenSpaceReflectionsEnabled",null),Object(f.c)([Object(o.c)()],B.prototype,"volumetricLightStepsCount",null),Object(f.c)([Object(o.c)()],B.prototype,"motionBlurSamples",null),Object(f.c)([Object(o.c)()],B.prototype,"samples",null),B}(n.a);u.a.RegisteredTypes["BABYLON.StandardRenderingPipeline"]=ae;var _e=s(548)},605:function($,W,s){"use strict";var f=s(435),o="importanceSampling",E=`




























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
}`;f.a.IncludesShadersStore[o]=E;var v={name:o,shader:E}},606:function($,W,s){"use strict";var f=s(435),o="pbrBRDFFunctions",E=`
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
`;f.a.IncludesShadersStore[o]=E;var v={name:o,shader:E}},607:function($,W,s){"use strict";var f=s(435),o="hdrFilteringFunctions",E=`#ifdef NUM_SAMPLES
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
#endif`;f.a.IncludesShadersStore[o]=E;var v={name:o,shader:E}},625:function($,W,s){"use strict";var f=s(435),o=s(457),E="rgbdDecodePixelShader",v=`
varying vec2 vUV;
uniform sampler2D textureSampler;
#include<helperFunctions>
void main(void)
{
gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);
}`;f.a.ShadersStore[E]=v;var c={name:E,shader:v}},626:function($,W,s){"use strict";s.d(W,"a",function(){return O});var f=s(434),o=s(439),E=s(441),v=s(480),c=s(454),O=function(){function p(r){this._isEnabled=!1,this.isEnabled=!1,this.intensity=1,this.roughness=0,this._indexOfRefraction=p._DefaultIndexOfRefraction,this.indexOfRefraction=p._DefaultIndexOfRefraction,this._texture=null,this.texture=null,this._useRoughnessFromMainTexture=!0,this.useRoughnessFromMainTexture=!0,this._textureRoughness=null,this.textureRoughness=null,this._remapF0OnInterfaceChange=!0,this.remapF0OnInterfaceChange=!0,this._bumpTexture=null,this.bumpTexture=null,this._isTintEnabled=!1,this.isTintEnabled=!1,this.tintColor=E.a.White(),this.tintColorAtDistance=1,this.tintThickness=1,this._tintTexture=null,this.tintTexture=null,this._internalMarkAllSubMeshesAsTexturesDirty=r}return p.prototype._markAllSubMeshesAsTexturesDirty=function(){this._internalMarkAllSubMeshesAsTexturesDirty()},p.prototype.isReadyForSubMesh=function(r,e,t,i){return!(r._areTexturesDirty&&e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&!this._texture.isReadyOrNotBlocking()||this._textureRoughness&&v.a.ClearCoatTextureEnabled&&!this._textureRoughness.isReadyOrNotBlocking()||t.getCaps().standardDerivatives&&this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled&&!i&&!this._bumpTexture.isReady()||this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&!this._tintTexture.isReadyOrNotBlocking()))},p.prototype.prepareDefines=function(r,e){var t;this._isEnabled?(r.CLEARCOAT=!0,r.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=this._useRoughnessFromMainTexture,r.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=this._texture!==null&&this._texture._texture===((t=this._textureRoughness)===null||t===void 0?void 0:t._texture)&&this._texture.checkTransformsAreIdentical(this._textureRoughness),r.CLEARCOAT_REMAP_F0=this._remapF0OnInterfaceChange,r._areTexturesDirty&&e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._texture,r,"CLEARCOAT_TEXTURE"):r.CLEARCOAT_TEXTURE=!1,this._textureRoughness&&v.a.ClearCoatTextureEnabled?c.a.PrepareDefinesForMergedUV(this._textureRoughness,r,"CLEARCOAT_TEXTURE_ROUGHNESS"):r.CLEARCOAT_TEXTURE_ROUGHNESS=!1,this._bumpTexture&&v.a.ClearCoatBumpTextureEnabled?c.a.PrepareDefinesForMergedUV(this._bumpTexture,r,"CLEARCOAT_BUMP"):r.CLEARCOAT_BUMP=!1,r.CLEARCOAT_DEFAULTIOR=this._indexOfRefraction===p._DefaultIndexOfRefraction,this._isTintEnabled?(r.CLEARCOAT_TINT=!0,this._tintTexture&&v.a.ClearCoatTintTextureEnabled?c.a.PrepareDefinesForMergedUV(this._tintTexture,r,"CLEARCOAT_TINT_TEXTURE"):r.CLEARCOAT_TINT_TEXTURE=!1):(r.CLEARCOAT_TINT=!1,r.CLEARCOAT_TINT_TEXTURE=!1))):(r.CLEARCOAT=!1,r.CLEARCOAT_TEXTURE=!1,r.CLEARCOAT_TEXTURE_ROUGHNESS=!1,r.CLEARCOAT_BUMP=!1,r.CLEARCOAT_TINT=!1,r.CLEARCOAT_TINT_TEXTURE=!1,r.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE=!1,r.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL=!1)},p.prototype.bindForSubMesh=function(r,e,t,i,n,a,l,h){var u,g,A,R,S,P,D,L,U=h._materialDefines,F=U.CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL;if(!r.useUbo||!n||!r.isSync){F&&v.a.ClearCoatTextureEnabled?(r.updateFloat4("vClearCoatInfos",this._texture.coordinatesIndex,this._texture.level,-1,-1),c.a.BindTextureMatrix(this._texture,r,"clearCoat")):(this._texture||this._textureRoughness)&&v.a.ClearCoatTextureEnabled&&(r.updateFloat4("vClearCoatInfos",(g=(u=this._texture)===null||u===void 0?void 0:u.coordinatesIndex)!==null&&g!==void 0?g:0,(R=(A=this._texture)===null||A===void 0?void 0:A.level)!==null&&R!==void 0?R:0,(P=(S=this._textureRoughness)===null||S===void 0?void 0:S.coordinatesIndex)!==null&&P!==void 0?P:0,(L=(D=this._textureRoughness)===null||D===void 0?void 0:D.level)!==null&&L!==void 0?L:0),this._texture&&c.a.BindTextureMatrix(this._texture,r,"clearCoat"),this._textureRoughness&&!F&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&c.a.BindTextureMatrix(this._textureRoughness,r,"clearCoatRoughness")),this._bumpTexture&&t.getCaps().standardDerivatives&&v.a.ClearCoatTextureEnabled&&!i&&(r.updateFloat2("vClearCoatBumpInfos",this._bumpTexture.coordinatesIndex,this._bumpTexture.level),c.a.BindTextureMatrix(this._bumpTexture,r,"clearCoatBump"),e._mirroredCameraPosition?r.updateFloat2("vClearCoatTangentSpaceParams",a?1:-1,l?1:-1):r.updateFloat2("vClearCoatTangentSpaceParams",a?-1:1,l?-1:1)),this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&(r.updateFloat2("vClearCoatTintInfos",this._tintTexture.coordinatesIndex,this._tintTexture.level),c.a.BindTextureMatrix(this._tintTexture,r,"clearCoatTint")),r.updateFloat2("vClearCoatParams",this.intensity,this.roughness);var V=1-this._indexOfRefraction,I=1+this._indexOfRefraction,x=Math.pow(-V/I,2),_=1/this._indexOfRefraction;r.updateFloat4("vClearCoatRefractionParams",x,_,V,I),this._isTintEnabled&&(r.updateFloat4("vClearCoatTintParams",this.tintColor.r,this.tintColor.g,this.tintColor.b,Math.max(1e-5,this.tintThickness)),r.updateFloat("clearCoatColorAtDistance",Math.max(1e-5,this.tintColorAtDistance)))}e.texturesEnabled&&(this._texture&&v.a.ClearCoatTextureEnabled&&r.setTexture("clearCoatSampler",this._texture),this._textureRoughness&&!F&&!U.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE&&v.a.ClearCoatTextureEnabled&&r.setTexture("clearCoatRoughnessSampler",this._textureRoughness),this._bumpTexture&&t.getCaps().standardDerivatives&&v.a.ClearCoatBumpTextureEnabled&&!i&&r.setTexture("clearCoatBumpSampler",this._bumpTexture),this._isTintEnabled&&this._tintTexture&&v.a.ClearCoatTintTextureEnabled&&r.setTexture("clearCoatTintSampler",this._tintTexture))},p.prototype.hasTexture=function(r){return this._texture===r||this._textureRoughness===r||this._bumpTexture===r||this._tintTexture===r},p.prototype.getActiveTextures=function(r){this._texture&&r.push(this._texture),this._textureRoughness&&r.push(this._textureRoughness),this._bumpTexture&&r.push(this._bumpTexture),this._tintTexture&&r.push(this._tintTexture)},p.prototype.getAnimatables=function(r){this._texture&&this._texture.animations&&this._texture.animations.length>0&&r.push(this._texture),this._textureRoughness&&this._textureRoughness.animations&&this._textureRoughness.animations.length>0&&r.push(this._textureRoughness),this._bumpTexture&&this._bumpTexture.animations&&this._bumpTexture.animations.length>0&&r.push(this._bumpTexture),this._tintTexture&&this._tintTexture.animations&&this._tintTexture.animations.length>0&&r.push(this._tintTexture)},p.prototype.dispose=function(r){var e,t,i,n;r&&((e=this._texture)===null||e===void 0||e.dispose(),(t=this._textureRoughness)===null||t===void 0||t.dispose(),(i=this._bumpTexture)===null||i===void 0||i.dispose(),(n=this._tintTexture)===null||n===void 0||n.dispose())},p.prototype.getClassName=function(){return"PBRClearCoatConfiguration"},p.AddFallbacks=function(r,e,t){return r.CLEARCOAT_BUMP&&e.addFallback(t++,"CLEARCOAT_BUMP"),r.CLEARCOAT_TINT&&e.addFallback(t++,"CLEARCOAT_TINT"),r.CLEARCOAT&&e.addFallback(t++,"CLEARCOAT"),t},p.AddUniforms=function(r){r.push("vClearCoatTangentSpaceParams","vClearCoatParams","vClearCoatRefractionParams","vClearCoatTintParams","clearCoatColorAtDistance","clearCoatMatrix","clearCoatRoughnessMatrix","clearCoatBumpMatrix","clearCoatTintMatrix","vClearCoatInfos","vClearCoatBumpInfos","vClearCoatTintInfos")},p.AddSamplers=function(r){r.push("clearCoatSampler","clearCoatRoughnessSampler","clearCoatBumpSampler","clearCoatTintSampler")},p.PrepareUniformBuffer=function(r){r.addUniform("vClearCoatParams",2),r.addUniform("vClearCoatRefractionParams",4),r.addUniform("vClearCoatInfos",4),r.addUniform("clearCoatMatrix",16),r.addUniform("clearCoatRoughnessMatrix",16),r.addUniform("vClearCoatBumpInfos",2),r.addUniform("vClearCoatTangentSpaceParams",2),r.addUniform("clearCoatBumpMatrix",16),r.addUniform("vClearCoatTintParams",4),r.addUniform("clearCoatColorAtDistance",1),r.addUniform("vClearCoatTintInfos",2),r.addUniform("clearCoatTintMatrix",16)},p.prototype.copyTo=function(r){o.a.Clone(function(){return r},this)},p.prototype.serialize=function(){return o.a.Serialize(this)},p.prototype.parse=function(r,e,t){var i=this;o.a.Parse(function(){return i},r,e,t)},p._DefaultIndexOfRefraction=1.5,Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isEnabled",void 0),Object(f.c)([Object(o.c)()],p.prototype,"intensity",void 0),Object(f.c)([Object(o.c)()],p.prototype,"roughness",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"indexOfRefraction",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"texture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"useRoughnessFromMainTexture",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"textureRoughness",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"remapF0OnInterfaceChange",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"bumpTexture",void 0),Object(f.c)([Object(o.c)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"isTintEnabled",void 0),Object(f.c)([Object(o.e)()],p.prototype,"tintColor",void 0),Object(f.c)([Object(o.c)()],p.prototype,"tintColorAtDistance",void 0),Object(f.c)([Object(o.c)()],p.prototype,"tintThickness",void 0),Object(f.c)([Object(o.m)(),Object(o.b)("_markAllSubMeshesAsTexturesDirty")],p.prototype,"tintTexture",void 0),p}()},627:function($,W,s){"use strict";var f=s(435),o="subSurfaceScatteringFunctions",E=`bool testLightingForSSS(float diffusionProfile)
{
return diffusionProfile<1.;
}`;f.a.IncludesShadersStore[o]=E;var v={name:o,shader:E}},644:function($,W,s){"use strict";var f=s(435),o=s(524),E=s(457),v=s(525),c="imageProcessingPixelShader",O=`
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
}`;f.a.ShadersStore[c]=O;var p={name:c,shader:O}},646:function($,W,s){"use strict";var f=s(435),o="glowMapMergePixelShader",E=`
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
}`;f.a.ShadersStore[o]=E;var v={name:o,shader:E}},647:function($,W,s){"use strict";var f=s(435),o="glowMapMergeVertexShader",E=`
attribute vec2 position;

varying vec2 vUV;
const vec2 madd=vec2(0.5,0.5);
void main(void) {
vUV=position*madd+madd;
gl_Position=vec4(position,0.0,1.0);
}`;f.a.ShadersStore[o]=E;var v={name:o,shader:E}},743:function($,W,s){"use strict";s.d(W,"a",function(){return o});/*! *****************************************************************************
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
***************************************************************************** */var f=function(I,x){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,j){_.__proto__=j}||function(_,j){for(var G in j)Object.prototype.hasOwnProperty.call(j,G)&&(_[G]=j[G])},f(I,x)};function o(I,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");f(I,x);function _(){this.constructor=I}I.prototype=x===null?Object.create(x):(_.prototype=x.prototype,new _)}var E=function(){return E=Object.assign||function(x){for(var _,j=1,G=arguments.length;j<G;j++){_=arguments[j];for(var y in _)Object.prototype.hasOwnProperty.call(_,y)&&(x[y]=_[y])}return x},E.apply(this,arguments)};function v(I,x){var _={};for(var j in I)Object.prototype.hasOwnProperty.call(I,j)&&x.indexOf(j)<0&&(_[j]=I[j]);if(I!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,j=Object.getOwnPropertySymbols(I);G<j.length;G++)x.indexOf(j[G])<0&&Object.prototype.propertyIsEnumerable.call(I,j[G])&&(_[j[G]]=I[j[G]]);return _}function c(I,x,_,j){var G=arguments.length,y=G<3?x:j===null?j=Object.getOwnPropertyDescriptor(x,_):j,Y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")y=Reflect.decorate(I,x,_,j);else for(var Z=I.length-1;Z>=0;Z--)(Y=I[Z])&&(y=(G<3?Y(y):G>3?Y(x,_,y):Y(x,_))||y);return G>3&&y&&Object.defineProperty(x,_,y),y}function O(I,x){return function(_,j){x(_,j,I)}}function p(I,x){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(I,x)}function r(I,x,_,j){function G(y){return y instanceof _?y:new _(function(Y){Y(y)})}return new(_||(_=Promise))(function(y,Y){function Z(se){try{w(j.next(se))}catch(ee){Y(ee)}}function fe(se){try{w(j.throw(se))}catch(ee){Y(ee)}}function w(se){se.done?y(se.value):G(se.value).then(Z,fe)}w((j=j.apply(I,x||[])).next())})}function e(I,x){var _={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},j,G,y,Y;return Y={next:Z(0),throw:Z(1),return:Z(2)},typeof Symbol=="function"&&(Y[Symbol.iterator]=function(){return this}),Y;function Z(w){return function(se){return fe([w,se])}}function fe(w){if(j)throw new TypeError("Generator is already executing.");for(;_;)try{if(j=1,G&&(y=w[0]&2?G.return:w[0]?G.throw||((y=G.return)&&y.call(G),0):G.next)&&!(y=y.call(G,w[1])).done)return y;switch(G=0,y&&(w=[w[0]&2,y.value]),w[0]){case 0:case 1:y=w;break;case 4:return _.label++,{value:w[1],done:!1};case 5:_.label++,G=w[1],w=[0];continue;case 7:w=_.ops.pop(),_.trys.pop();continue;default:if(y=_.trys,!(y=y.length>0&&y[y.length-1])&&(w[0]===6||w[0]===2)){_=0;continue}if(w[0]===3&&(!y||w[1]>y[0]&&w[1]<y[3])){_.label=w[1];break}if(w[0]===6&&_.label<y[1]){_.label=y[1],y=w;break}if(y&&_.label<y[2]){_.label=y[2],_.ops.push(w);break}y[2]&&_.ops.pop(),_.trys.pop();continue}w=x.call(I,_)}catch(se){w=[6,se],G=0}finally{j=y=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}}var t=Object.create?function(I,x,_,j){j===void 0&&(j=_),Object.defineProperty(I,j,{enumerable:!0,get:function(){return x[_]}})}:function(I,x,_,j){j===void 0&&(j=_),I[j]=x[_]};function i(I,x){for(var _ in I)_!=="default"&&!Object.prototype.hasOwnProperty.call(x,_)&&t(x,I,_)}function n(I){var x=typeof Symbol=="function"&&Symbol.iterator,_=x&&I[x],j=0;if(_)return _.call(I);if(I&&typeof I.length=="number")return{next:function(){return I&&j>=I.length&&(I=void 0),{value:I&&I[j++],done:!I}}};throw new TypeError(x?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(I,x){var _=typeof Symbol=="function"&&I[Symbol.iterator];if(!_)return I;var j=_.call(I),G,y=[],Y;try{for(;(x===void 0||x-- >0)&&!(G=j.next()).done;)y.push(G.value)}catch(Z){Y={error:Z}}finally{try{G&&!G.done&&(_=j.return)&&_.call(j)}finally{if(Y)throw Y.error}}return y}function l(){for(var I=[],x=0;x<arguments.length;x++)I=I.concat(a(arguments[x]));return I}function h(){for(var I=0,x=0,_=arguments.length;x<_;x++)I+=arguments[x].length;for(var j=Array(I),G=0,x=0;x<_;x++)for(var y=arguments[x],Y=0,Z=y.length;Y<Z;Y++,G++)j[G]=y[Y];return j}function u(I,x){for(var _=0,j=x.length,G=I.length;_<j;_++,G++)I[G]=x[_];return I}function g(I){return this instanceof g?(this.v=I,this):new g(I)}function A(I,x,_){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var j=_.apply(I,x||[]),G,y=[];return G={},Y("next"),Y("throw"),Y("return"),G[Symbol.asyncIterator]=function(){return this},G;function Y(te){j[te]&&(G[te]=function(le){return new Promise(function(q,X){y.push([te,le,q,X])>1||Z(te,le)})})}function Z(te,le){try{fe(j[te](le))}catch(q){ee(y[0][3],q)}}function fe(te){te.value instanceof g?Promise.resolve(te.value.v).then(w,se):ee(y[0][2],te)}function w(te){Z("next",te)}function se(te){Z("throw",te)}function ee(te,le){te(le),y.shift(),y.length&&Z(y[0][0],y[0][1])}}function R(I){var x,_;return x={},j("next"),j("throw",function(G){throw G}),j("return"),x[Symbol.iterator]=function(){return this},x;function j(G,y){x[G]=I[G]?function(Y){return(_=!_)?{value:g(I[G](Y)),done:G==="return"}:y?y(Y):Y}:y}}function S(I){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var x=I[Symbol.asyncIterator],_;return x?x.call(I):(I=typeof n=="function"?n(I):I[Symbol.iterator](),_={},j("next"),j("throw"),j("return"),_[Symbol.asyncIterator]=function(){return this},_);function j(y){_[y]=I[y]&&function(Y){return new Promise(function(Z,fe){Y=I[y](Y),G(Z,fe,Y.done,Y.value)})}}function G(y,Y,Z,fe){Promise.resolve(fe).then(function(w){y({value:w,done:Z})},Y)}}function P(I,x){return Object.defineProperty?Object.defineProperty(I,"raw",{value:x}):I.raw=x,I}var D=Object.create?function(I,x){Object.defineProperty(I,"default",{enumerable:!0,value:x})}:function(I,x){I.default=x};function L(I){if(I&&I.__esModule)return I;var x={};if(I!=null)for(var _ in I)_!=="default"&&Object.prototype.hasOwnProperty.call(I,_)&&t(x,I,_);return D(x,I),x}function U(I){return I&&I.__esModule?I:{default:I}}function F(I,x){if(!x.has(I))throw new TypeError("attempted to get private field on non-instance");return x.get(I)}function V(I,x,_){if(!x.has(I))throw new TypeError("attempted to set private field on non-instance");return x.set(I,_),_}},766:function($,W,s){"use strict";s.d(W,"a",function(){return p});var f=s(743),o=s(435),E=s(533),v=s(437),c=s(554),O=function(){function r(){}return r}(),p=function(r){Object(f.a)(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.CustomParts=new O,n.customShaderNameResolve=n.Builder,n.FragmentShader=o.a.ShadersStore.pbrPixelShader,n.VertexShader=o.a.ShadersStore.pbrVertexShader,n.FragmentShader=n.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g,o.a.IncludesShadersStore.pbrBlockAlbedoOpacity),n.FragmentShader=n.FragmentShader.replace(/#include<pbrBlockReflectivity>/g,o.a.IncludesShadersStore.pbrBlockReflectivity),n.FragmentShader=n.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g,o.a.IncludesShadersStore.pbrBlockFinalColorComposition),n}return e.prototype.AttachAfterBind=function(t,i){if(this._newUniformInstances)for(var n in this._newUniformInstances){var a=n.toString().split("-");a[0]=="vec2"?i.setVector2(a[1],this._newUniformInstances[n]):a[0]=="vec3"?i.setVector3(a[1],this._newUniformInstances[n]):a[0]=="vec4"?i.setVector4(a[1],this._newUniformInstances[n]):a[0]=="mat4"?i.setMatrix(a[1],this._newUniformInstances[n]):a[0]=="float"&&i.setFloat(a[1],this._newUniformInstances[n])}if(this._newSamplerInstances)for(var n in this._newSamplerInstances){var a=n.toString().split("-");a[0]=="sampler2D"&&this._newSamplerInstances[n].isReady&&this._newSamplerInstances[n].isReady()&&i.setTexture(a[1],this._newSamplerInstances[n])}},e.prototype.ReviewUniform=function(t,i){if(t=="uniform"&&this._newUniforms)for(var n=0;n<this._newUniforms.length;n++)this._customUniform[n].indexOf("sampler")==-1&&i.push(this._newUniforms[n]);if(t=="sampler"&&this._newUniforms)for(var n=0;n<this._newUniforms.length;n++)this._customUniform[n].indexOf("sampler")!=-1&&i.push(this._newUniforms[n]);return i},e.prototype.Builder=function(t,i,n,a,l,h,u){var g=this;if(u&&(u.processFinalCode=function(S,P){if(S==="vertex")return P;var D=new c.a(P);return D.inlineToken="#define pbr_inline",D.processCode(),D.code}),h&&this._customAttributes&&this._customAttributes.length>0&&h.push.apply(h,this._customAttributes),this.ReviewUniform("uniform",i),this.ReviewUniform("sampler",a),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,e.ShaderIndexer++;var A="custom_"+e.ShaderIndexer,R=this._afterBind.bind(this);return this._afterBind=function(S,P){if(!!P){g.AttachAfterBind(S,P);try{R(S,P)}catch(D){}}},o.a.ShadersStore[A+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(o.a.ShadersStore[A+"VertexShader"]=o.a.ShadersStore[A+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),o.a.ShadersStore[A+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_ALBEDO",this.CustomParts.Fragment_Custom_Albedo?this.CustomParts.Fragment_Custom_Albedo:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS",this.CustomParts.Fragment_Custom_MetallicRoughness?this.CustomParts.Fragment_Custom_MetallicRoughness:"").replace("#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE",this.CustomParts.Fragment_Custom_MicroSurface?this.CustomParts.Fragment_Custom_MicroSurface:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(o.a.ShadersStore[A+"PixelShader"]=o.a.ShadersStore[A+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=A,A},e.prototype.AddUniform=function(t,i,n){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),n&&(i.indexOf("sampler")!=-1?this._newSamplerInstances[i+"-"+t]=n:this._newUniformInstances[i+"-"+t]=n),this._customUniform.push("uniform "+i+" "+t+";"),this._newUniforms.push(t),this},e.prototype.AddAttribute=function(t){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(t),this},e.prototype.Fragment_Begin=function(t){return this.CustomParts.Fragment_Begin=t,this},e.prototype.Fragment_Definitions=function(t){return this.CustomParts.Fragment_Definitions=t,this},e.prototype.Fragment_MainBegin=function(t){return this.CustomParts.Fragment_MainBegin=t,this},e.prototype.Fragment_Custom_Albedo=function(t){return this.CustomParts.Fragment_Custom_Albedo=t.replace("result","surfaceAlbedo"),this},e.prototype.Fragment_Custom_Alpha=function(t){return this.CustomParts.Fragment_Custom_Alpha=t.replace("result","alpha"),this},e.prototype.Fragment_Before_Lights=function(t){return this.CustomParts.Fragment_Before_Lights=t,this},e.prototype.Fragment_Custom_MetallicRoughness=function(t){return this.CustomParts.Fragment_Custom_MetallicRoughness=t,this},e.prototype.Fragment_Custom_MicroSurface=function(t){return this.CustomParts.Fragment_Custom_MicroSurface=t,this},e.prototype.Fragment_Before_Fog=function(t){return this.CustomParts.Fragment_Before_Fog=t,this},e.prototype.Fragment_Before_FragColor=function(t){return this.CustomParts.Fragment_Before_FragColor=t.replace("result","color"),this},e.prototype.Vertex_Begin=function(t){return this.CustomParts.Vertex_Begin=t,this},e.prototype.Vertex_Definitions=function(t){return this.CustomParts.Vertex_Definitions=t,this},e.prototype.Vertex_MainBegin=function(t){return this.CustomParts.Vertex_MainBegin=t,this},e.prototype.Vertex_Before_PositionUpdated=function(t){return this.CustomParts.Vertex_Before_PositionUpdated=t.replace("result","positionUpdated"),this},e.prototype.Vertex_Before_NormalUpdated=function(t){return this.CustomParts.Vertex_Before_NormalUpdated=t.replace("result","normalUpdated"),this},e.prototype.Vertex_After_WorldPosComputed=function(t){return this.CustomParts.Vertex_After_WorldPosComputed=t,this},e.prototype.Vertex_MainEnd=function(t){return this.CustomParts.Vertex_MainEnd=t,this},e.ShaderIndexer=1,e}(E.a);v.a.RegisteredTypes["BABYLON.PBRCustomMaterial"]=p}}]);
