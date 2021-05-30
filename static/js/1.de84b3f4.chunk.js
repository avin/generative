(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[1],{509:function(D,w,l){"use strict";l.d(w,"a",function(){return S});var P=l(434),T=l(439),v=l(436),p=l(447),m=l(442),g=l(454),F=l(459),V=l(437),E=l(441),j=l(512),C=l(519),b=l(445),R={effect:null,subMesh:null},S=function(d){Object(P.d)(a,d);function a(t,r,o,s){s===void 0&&(s={});var e=d.call(this,t,r)||this;return e._textures={},e._textureArrays={},e._floats={},e._ints={},e._floatsArrays={},e._colors3={},e._colors3Arrays={},e._colors4={},e._colors4Arrays={},e._vectors2={},e._vectors3={},e._vectors4={},e._matrices={},e._matrixArrays={},e._matrices3x3={},e._matrices2x2={},e._vectors2Arrays={},e._vectors3Arrays={},e._vectors4Arrays={},e._cachedWorldViewMatrix=new v.a,e._cachedWorldViewProjectionMatrix=new v.a,e._multiview=!1,e._shaderPath=o,e._options=Object(P.a)({needAlphaBlending:!1,needAlphaTesting:!1,attributes:["position","normal","uv"],uniforms:["worldViewProjection"],uniformBuffers:[],samplers:[],defines:[]},s),e}return Object.defineProperty(a.prototype,"shaderPath",{get:function(){return this._shaderPath},set:function(t){this._shaderPath=t},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"options",{get:function(){return this._options},enumerable:!1,configurable:!0}),a.prototype.getClassName=function(){return"ShaderMaterial"},a.prototype.needAlphaBlending=function(){return this.alpha<1||this._options.needAlphaBlending},a.prototype.needAlphaTesting=function(){return this._options.needAlphaTesting},a.prototype._checkUniform=function(t){this._options.uniforms.indexOf(t)===-1&&this._options.uniforms.push(t)},a.prototype.setTexture=function(t,r){return this._options.samplers.indexOf(t)===-1&&this._options.samplers.push(t),this._textures[t]=r,this},a.prototype.setTextureArray=function(t,r){return this._options.samplers.indexOf(t)===-1&&this._options.samplers.push(t),this._checkUniform(t),this._textureArrays[t]=r,this},a.prototype.setFloat=function(t,r){return this._checkUniform(t),this._floats[t]=r,this},a.prototype.setInt=function(t,r){return this._checkUniform(t),this._ints[t]=r,this},a.prototype.setFloats=function(t,r){return this._checkUniform(t),this._floatsArrays[t]=r,this},a.prototype.setColor3=function(t,r){return this._checkUniform(t),this._colors3[t]=r,this},a.prototype.setColor3Array=function(t,r){return this._checkUniform(t),this._colors3Arrays[t]=r.reduce(function(o,s){return s.toArray(o,o.length),o},[]),this},a.prototype.setColor4=function(t,r){return this._checkUniform(t),this._colors4[t]=r,this},a.prototype.setColor4Array=function(t,r){return this._checkUniform(t),this._colors4Arrays[t]=r.reduce(function(o,s){return s.toArray(o,o.length),o},[]),this},a.prototype.setVector2=function(t,r){return this._checkUniform(t),this._vectors2[t]=r,this},a.prototype.setVector3=function(t,r){return this._checkUniform(t),this._vectors3[t]=r,this},a.prototype.setVector4=function(t,r){return this._checkUniform(t),this._vectors4[t]=r,this},a.prototype.setMatrix=function(t,r){return this._checkUniform(t),this._matrices[t]=r,this},a.prototype.setMatrices=function(t,r){this._checkUniform(t);for(var o=new Float32Array(r.length*16),s=0;s<r.length;s++){var e=r[s];e.copyToArray(o,s*16)}return this._matrixArrays[t]=o,this},a.prototype.setMatrix3x3=function(t,r){return this._checkUniform(t),this._matrices3x3[t]=r,this},a.prototype.setMatrix2x2=function(t,r){return this._checkUniform(t),this._matrices2x2[t]=r,this},a.prototype.setArray2=function(t,r){return this._checkUniform(t),this._vectors2Arrays[t]=r,this},a.prototype.setArray3=function(t,r){return this._checkUniform(t),this._vectors3Arrays[t]=r,this},a.prototype.setArray4=function(t,r){return this._checkUniform(t),this._vectors4Arrays[t]=r,this},a.prototype._checkCache=function(t,r){return t?!(this._effect&&this._effect.defines.indexOf("#define INSTANCES")!==-1!==r):!0},a.prototype.isReadyForSubMesh=function(t,r,o){return this.isReady(t,o)},a.prototype.isReady=function(t,r){var o,s;if(this._effect&&this.isFrozen&&this._effect._wasPreviouslyReady)return!0;var e=this.getScene(),i=e.getEngine();if(!this.checkReadyOnEveryCall&&this._renderId===e.getRenderId()&&this._checkCache(t,r))return!0;var n=[],h=[],u=new j.a,c=this._shaderPath,f=this._options.uniforms,y=this._options.uniformBuffers,A=this._options.samplers;i.getCaps().multiview&&e.activeCamera&&e.activeCamera.outputRenderTarget&&e.activeCamera.outputRenderTarget.getViewCount()>1&&(this._multiview=!0,n.push("#define MULTIVIEW"),this._options.uniforms.indexOf("viewProjection")!==-1&&this._options.uniforms.push("viewProjectionR")===-1&&this._options.uniforms.push("viewProjectionR"));for(var _=0;_<this._options.defines.length;_++)n.push(this._options.defines[_]);for(var _=0;_<this._options.attributes.length;_++)h.push(this._options.attributes[_]);if(t&&t.isVerticesDataPresent(p.b.ColorKind)&&(h.push(p.b.ColorKind),n.push("#define VERTEXCOLOR")),r&&(n.push("#define INSTANCES"),g.a.PushAttributesForInstances(h),(t==null?void 0:t.hasThinInstances)&&n.push("#define THIN_INSTANCES")),t&&t.useBones&&t.computeBonesUsingShaders&&t.skeleton){h.push(p.b.MatricesIndicesKind),h.push(p.b.MatricesWeightsKind),t.numBoneInfluencers>4&&(h.push(p.b.MatricesIndicesExtraKind),h.push(p.b.MatricesWeightsExtraKind));var U=t.skeleton;n.push("#define NUM_BONE_INFLUENCERS "+t.numBoneInfluencers),u.addCPUSkinningFallback(0,t),U.isUsingTextureForMatrices?(n.push("#define BONETEXTURE"),this._options.uniforms.indexOf("boneTextureWidth")===-1&&this._options.uniforms.push("boneTextureWidth"),this._options.samplers.indexOf("boneSampler")===-1&&this._options.samplers.push("boneSampler")):(n.push("#define BonesPerMesh "+(U.bones.length+1)),this._options.uniforms.indexOf("mBones")===-1&&this._options.uniforms.push("mBones"))}else n.push("#define NUM_BONE_INFLUENCERS 0");var x=0,M=t?t.morphTargetManager:null;if(M){var N=M.supportsUVs&&n.indexOf("#define UV1")!==-1,B=M.supportsTangents&&n.indexOf("#define TANGENT")!==-1,I=M.supportsNormals&&n.indexOf("#define NORMAL")!==-1;x=M.numInfluencers,N&&n.push("#define MORPHTARGETS_UV"),B&&n.push("#define MORPHTARGETS_TANGENT"),I&&n.push("#define MORPHTARGETS_NORMAL"),x>0&&n.push("#define MORPHTARGETS"),n.push("#define NUM_MORPH_INFLUENCERS "+x);for(var _=0;_<x;_++)h.push(p.b.PositionKind+_),I&&h.push(p.b.NormalKind+_),B&&h.push(p.b.TangentKind+_),N&&h.push(p.b.UVKind+"_"+_);x>0&&(f=f.slice(),f.push("morphTargetInfluences"),f.push("morphTargetTextureInfo"),f.push("morphTargetTextureIndices"))}else n.push("#define NUM_MORPH_INFLUENCERS 0");for(var k in this._textures)if(!this._textures[k].isReady())return!1;t&&this._shouldTurnAlphaTestOn(t)&&n.push("#define ALPHATEST"),this.customShaderNameResolve&&(f=f.slice(),y=y.slice(),A=A.slice(),c=this.customShaderNameResolve(c,f,y,A,n,h));var L=this._effect,O=n.join(`
`);return this._cachedDefines!==O&&(this._cachedDefines=O,this._effect=i.createEffect(c,{attributes:h,uniformsNames:f,uniformBuffersNames:y,samplers:A,defines:O,fallbacks:u,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousMorphTargets:x}},i),this._onEffectCreatedObservable&&(R.effect=this._effect,this._onEffectCreatedObservable.notifyObservers(R))),((s=!((o=this._effect)===null||o===void 0?void 0:o.isReady()))!==null&&s!==void 0?s:!0)?!1:(L!==this._effect&&e.resetCachedMaterial(),this._renderId=e.getRenderId(),this._effect._wasPreviouslyReady=!0,!0)},a.prototype.bindOnlyWorldMatrix=function(t,r){var o=this.getScene(),s=r!=null?r:this._effect;!s||(this._options.uniforms.indexOf("world")!==-1&&s.setMatrix("world",t),this._options.uniforms.indexOf("worldView")!==-1&&(t.multiplyToRef(o.getViewMatrix(),this._cachedWorldViewMatrix),s.setMatrix("worldView",this._cachedWorldViewMatrix)),this._options.uniforms.indexOf("worldViewProjection")!==-1&&(t.multiplyToRef(o.getTransformMatrix(),this._cachedWorldViewProjectionMatrix),s.setMatrix("worldViewProjection",this._cachedWorldViewProjectionMatrix)))},a.prototype.bindForSubMesh=function(t,r,o){this.bind(t,r,o._effectOverride)},a.prototype.bind=function(t,r,o){this.bindOnlyWorldMatrix(t,o);var s=o!=null?o:this._effect,e=this.getScene().getCachedMaterial()!==this;if(s&&e){this._options.uniforms.indexOf("view")!==-1&&s.setMatrix("view",this.getScene().getViewMatrix()),this._options.uniforms.indexOf("projection")!==-1&&s.setMatrix("projection",this.getScene().getProjectionMatrix()),this._options.uniforms.indexOf("viewProjection")!==-1&&(s.setMatrix("viewProjection",this.getScene().getTransformMatrix()),this._multiview&&s.setMatrix("viewProjectionR",this.getScene()._transformMatrixR)),this.getScene().activeCamera&&this._options.uniforms.indexOf("cameraPosition")!==-1&&s.setVector3("cameraPosition",this.getScene().activeCamera.globalPosition),g.a.BindBonesParameters(r,s);var i;for(i in this._textures)s.setTexture(i,this._textures[i]);for(i in this._textureArrays)s.setTextureArray(i,this._textureArrays[i]);for(i in this._ints)s.setInt(i,this._ints[i]);for(i in this._floats)s.setFloat(i,this._floats[i]);for(i in this._floatsArrays)s.setArray(i,this._floatsArrays[i]);for(i in this._colors3)s.setColor3(i,this._colors3[i]);for(i in this._colors3Arrays)s.setArray3(i,this._colors3Arrays[i]);for(i in this._colors4){var n=this._colors4[i];s.setFloat4(i,n.r,n.g,n.b,n.a)}for(i in this._colors4Arrays)s.setArray4(i,this._colors4Arrays[i]);for(i in this._vectors2)s.setVector2(i,this._vectors2[i]);for(i in this._vectors3)s.setVector3(i,this._vectors3[i]);for(i in this._vectors4)s.setVector4(i,this._vectors4[i]);for(i in this._matrices)s.setMatrix(i,this._matrices[i]);for(i in this._matrixArrays)s.setMatrices(i,this._matrixArrays[i]);for(i in this._matrices3x3)s.setMatrix3x3(i,this._matrices3x3[i]);for(i in this._matrices2x2)s.setMatrix2x2(i,this._matrices2x2[i]);for(i in this._vectors2Arrays)s.setArray2(i,this._vectors2Arrays[i]);for(i in this._vectors3Arrays)s.setArray3(i,this._vectors3Arrays[i]);for(i in this._vectors4Arrays)s.setArray4(i,this._vectors4Arrays[i])}if(s&&r&&(e||!this.isFrozen)){var h=r.morphTargetManager;h&&h.numInfluencers>0&&g.a.BindMorphTargetParameters(r,s)}var u=this._effect;this._effect=s,this._afterBind(r,s),this._effect=u},a.prototype._afterBind=function(t,r){r===void 0&&(r=null),d.prototype._afterBind.call(this,t,r),this.getScene()._cachedEffect=r},a.prototype.getActiveTextures=function(){var t=d.prototype.getActiveTextures.call(this);for(var r in this._textures)t.push(this._textures[r]);for(var r in this._textureArrays)for(var o=this._textureArrays[r],s=0;s<o.length;s++)t.push(o[s]);return t},a.prototype.hasTexture=function(t){if(d.prototype.hasTexture.call(this,t))return!0;for(var r in this._textures)if(this._textures[r]===t)return!0;for(var r in this._textureArrays)for(var o=this._textureArrays[r],s=0;s<o.length;s++)if(o[s]===t)return!0;return!1},a.prototype.clone=function(t){var r=this,o=T.a.Clone(function(){return new a(t,r.getScene(),r._shaderPath,r._options)},this);o.name=t,o.id=t,typeof o._shaderPath=="object"&&(o._shaderPath=Object(P.a)({},o._shaderPath)),this._options=Object(P.a)({},this._options),Object.keys(this._options).forEach(function(e){var i=r._options[e];Array.isArray(i)&&(r._options[e]=i.slice(0))});for(var s in this._textures)o.setTexture(s,this._textures[s]);for(var s in this._floats)o.setFloat(s,this._floats[s]);for(var s in this._floatsArrays)o.setFloats(s,this._floatsArrays[s]);for(var s in this._colors3)o.setColor3(s,this._colors3[s]);for(var s in this._colors4)o.setColor4(s,this._colors4[s]);for(var s in this._vectors2)o.setVector2(s,this._vectors2[s]);for(var s in this._vectors3)o.setVector3(s,this._vectors3[s]);for(var s in this._vectors4)o.setVector4(s,this._vectors4[s]);for(var s in this._matrices)o.setMatrix(s,this._matrices[s]);for(var s in this._matrices3x3)o.setMatrix3x3(s,this._matrices3x3[s]);for(var s in this._matrices2x2)o.setMatrix2x2(s,this._matrices2x2[s]);return o},a.prototype.dispose=function(t,r,o){if(r){var s;for(s in this._textures)this._textures[s].dispose();for(s in this._textureArrays)for(var e=this._textureArrays[s],i=0;i<e.length;i++)e[i].dispose()}this._textures={},d.prototype.dispose.call(this,t,r,o)},a.prototype.serialize=function(){var t=T.a.Serialize(this);t.customType="BABYLON.ShaderMaterial",t.options=this._options,t.shaderPath=this._shaderPath;var r;t.textures={};for(r in this._textures)t.textures[r]=this._textures[r].serialize();t.textureArrays={};for(r in this._textureArrays){t.textureArrays[r]=[];for(var o=this._textureArrays[r],s=0;s<o.length;s++)t.textureArrays[r].push(o[s].serialize())}t.floats={};for(r in this._floats)t.floats[r]=this._floats[r];t.FloatArrays={};for(r in this._floatsArrays)t.FloatArrays[r]=this._floatsArrays[r];t.colors3={};for(r in this._colors3)t.colors3[r]=this._colors3[r].asArray();t.colors3Arrays={};for(r in this._colors3Arrays)t.colors3Arrays[r]=this._colors3Arrays[r];t.colors4={};for(r in this._colors4)t.colors4[r]=this._colors4[r].asArray();t.colors4Arrays={};for(r in this._colors4Arrays)t.colors4Arrays[r]=this._colors4Arrays[r];t.vectors2={};for(r in this._vectors2)t.vectors2[r]=this._vectors2[r].asArray();t.vectors3={};for(r in this._vectors3)t.vectors3[r]=this._vectors3[r].asArray();t.vectors4={};for(r in this._vectors4)t.vectors4[r]=this._vectors4[r].asArray();t.matrices={};for(r in this._matrices)t.matrices[r]=this._matrices[r].asArray();t.matrixArray={};for(r in this._matrixArrays)t.matrixArray[r]=this._matrixArrays[r];t.matrices3x3={};for(r in this._matrices3x3)t.matrices3x3[r]=this._matrices3x3[r];t.matrices2x2={};for(r in this._matrices2x2)t.matrices2x2[r]=this._matrices2x2[r];t.vectors2Arrays={};for(r in this._vectors2Arrays)t.vectors2Arrays[r]=this._vectors2Arrays[r];t.vectors3Arrays={};for(r in this._vectors3Arrays)t.vectors3Arrays[r]=this._vectors3Arrays[r];t.vectors4Arrays={};for(r in this._vectors4Arrays)t.vectors4Arrays[r]=this._vectors4Arrays[r];return t},a.Parse=function(t,r,o){var s=T.a.Parse(function(){return new a(t.name,r,t.shaderPath,t.options)},t,r,o),e;for(e in t.textures)s.setTexture(e,m.a.Parse(t.textures[e],r,o));for(e in t.textureArrays){for(var i=t.textureArrays[e],n=new Array,h=0;h<i.length;h++)n.push(m.a.Parse(i[h],r,o));s.setTextureArray(e,n)}for(e in t.floats)s.setFloat(e,t.floats[e]);for(e in t.floatsArrays)s.setFloats(e,t.floatsArrays[e]);for(e in t.colors3)s.setColor3(e,E.a.FromArray(t.colors3[e]));for(e in t.colors3Arrays){var u=t.colors3Arrays[e].reduce(function(c,f,y){return y%3==0?c.push([f]):c[c.length-1].push(f),c},[]).map(function(c){return E.a.FromArray(c)});s.setColor3Array(e,u)}for(e in t.colors4)s.setColor4(e,E.b.FromArray(t.colors4[e]));for(e in t.colors4Arrays){var u=t.colors4Arrays[e].reduce(function(f,y,A){return A%4==0?f.push([y]):f[f.length-1].push(y),f},[]).map(function(f){return E.b.FromArray(f)});s.setColor4Array(e,u)}for(e in t.vectors2)s.setVector2(e,v.d.FromArray(t.vectors2[e]));for(e in t.vectors3)s.setVector3(e,v.e.FromArray(t.vectors3[e]));for(e in t.vectors4)s.setVector4(e,v.f.FromArray(t.vectors4[e]));for(e in t.matrices)s.setMatrix(e,v.a.FromArray(t.matrices[e]));for(e in t.matrixArray)s._matrixArrays[e]=new Float32Array(t.matrixArray[e]);for(e in t.matrices3x3)s.setMatrix3x3(e,t.matrices3x3[e]);for(e in t.matrices2x2)s.setMatrix2x2(e,t.matrices2x2[e]);for(e in t.vectors2Arrays)s.setArray2(e,t.vectors2Arrays[e]);for(e in t.vectors3Arrays)s.setArray3(e,t.vectors3Arrays[e]);for(e in t.vectors4Arrays)s.setArray4(e,t.vectors4Arrays[e]);return s},a.ParseFromFileAsync=function(t,r,o,s){var e=this;return s===void 0&&(s=""),new Promise(function(i,n){var h=new C.a;h.addEventListener("readystatechange",function(){if(h.readyState==4)if(h.status==200){var u=JSON.parse(h.responseText),c=e.Parse(u,o||b.a.LastCreatedScene,s);t&&(c.name=t),i(c)}else n("Unable to load the ShaderMaterial")}),h.open("GET",r),h.send()})},a.CreateFromSnippetAsync=function(t,r,o){var s=this;return o===void 0&&(o=""),new Promise(function(e,i){var n=new C.a;n.addEventListener("readystatechange",function(){if(n.readyState==4)if(n.status==200){var h=JSON.parse(JSON.parse(n.responseText).jsonPayload),u=JSON.parse(h.shaderMaterial),c=s.Parse(u,r||b.a.LastCreatedScene,o);c.snippetId=t,e(c)}else i("Unable to load the snippet "+t)}),n.open("GET",s.SnippetUrl+"/"+t.replace(/#/g,"/")),n.send()})},a.SnippetUrl="https://snippet.babylonjs.com",a}(F.a);V.a.RegisteredTypes["BABYLON.ShaderMaterial"]=S}}]);
