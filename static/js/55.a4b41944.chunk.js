(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[55,285,286,287,288,289],{113:function(S,d,o){"use strict";o.r(d);var f=o(445),l=o(449),s=o(555),e=o(498),i=o(599),a=o(475),h=o(441),r=o(506),t=o(648),n=o(435),c=o(549),_=o(455),u=o(509),v=o(400),m=o(401),C=o(402),L=o(403),z=o(404),F=(E,T,A)=>new Promise((G,O)=>{var K=I=>{try{B(A.next(I))}catch(P){O(P)}},g=I=>{try{B(A.throw(I))}catch(P){O(P)}},B=I=>I.done?G(I.value):Promise.resolve(I.value).then(K,g);B((A=A.apply(E,T)).next())});const j={animate:!0,context:Object(c.a)()},b=E=>F(void 0,[E],function*({canvas:T,width:A,height:G}){const O=new f.a(T,!0,{preserveDrawingBuffer:!0,stencil:!0}),K=+new Date,g=new l.a(O);g.clearColor=new h.a(0,0,0);const B=new r.a("camera",Math.PI/4+.3,1.575,10,new a.z(0,2,0),g);B.wheelPrecision=50,B.minZ=.125,B.fov=1;const I=new e.a("hemiLight",new a.z(1,1,0),g);I.diffuse=new h.a(1,1,1),I.groundColor=new h.a(.5,.5,.5),I.intensity=.25;const P=new i.a("dirLight",new a.z(1,-1.5,1),g);P.intensity=1.25,P.position=new a.z(-20,5,-20);const H=40,w=t.a.CreateGround("ocean",{width:1,height:1,subdivisions:H});w.isPickable=!1,w.doNotSyncBoundingInfo=!1,w.freezeWorldMatrix();const Z=t.a.CreateGround("oceanFar",{width:1,height:1,subdivisions:20}),R=new _.a("oceanMaterial",g);w.material=R,Z.material=R;for(let D=0;D<2;D+=1){const M=[],x=[];for(let p=-40;p<40;p+=1)for(let y=-40;y<40;y+=1)D===0?(Math.abs(p)<10||Math.abs(y)<10)&&(M.push(a.k.Translation(p,0,y)),x.push([p,y])):Math.abs(p)<10||Math.abs(y)<10||(M.push(a.k.Translation(p,0,y)),x.push([p,y]));const N=new Float32Array(16*M.length),U=new Float32Array(2*x.length);for(let p=0;p<M.length;p+=1)M[p].copyToArray(N,p*16),U[p*2+0]=x[p][0],U[p*2+1]=x[p][1];D===0?(w.thinInstanceSetBuffer("matrix",N,16),w.thinInstanceSetBuffer("cellPos",U,2)):(Z.thinInstanceSetBuffer("matrix",N,16),Z.thinInstanceSetBuffer("cellPos",U,2))}R.customShaderNameResolve=(D,M,x,N,U,p,y)=>(n.a.ShadersStore.oceanVertexShader=n.a.ShadersStore.defaultVertexShader,n.a.ShadersStore.oceanPixelShader=n.a.ShadersStore.defaultPixelShader,M.push("iTime"),p.push("cellPos"),n.a.ShadersStore.oceanVertexShader=n.a.ShadersStore.oceanVertexShader.replace("#define CUSTOM_VERTEX_DEFINITIONS",v.default).replace("#define CUSTOM_VERTEX_UPDATE_POSITION",C.default),n.a.ShadersStore.oceanPixelShader=n.a.ShadersStore.oceanPixelShader.replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",m.default),"ocean"),R.onBind=()=>{const D=(+new Date-K)*.001;R.getEffect().setFloat("iTime",D)};const W=t.a.CreatePlane("sun",{size:60},g),Y=a.r.RotationAxis(new a.z(0,1,0),Math.PI),X=a.r.RotationAxis(new a.z(0,1,0),Math.PI/4).multiply(Y);W.rotationQuaternion=X,W.position=new a.z(-40,15.5,-40),n.a.ShadersStore.sunVertexShader=z.default,n.a.ShadersStore.sunFragmentShader=L.default;const V=new u.a("shader",g,{vertex:"sun",fragment:"sun"},{attributes:["position","normal","uv"],defines:["precision highp float;"],uniforms:["world","worldView","worldViewProjection","view","iTime","iResolution"]});return V.setVector2("iResolution",new a.y(1,1)),W.material=V,W.material.backFaceCulling=!1,g.registerBeforeRender(()=>{const D=(+new Date-K)*.001;V.setFloat("iTime",D),V.setVector2("iResolution",new a.y(1,1))}),{render({time:D,width:M,height:x}){g.render()},resize({pixelRatio:D,width:M,height:x}){O.resize()},unload(){O.dispose()}}});d.default={sketch:b,settings:j}},400:function(S,d,o){"use strict";o.r(d),d.default=`#define GLSLIFY 1
uniform float iTime;

attribute vec2 cellPos;

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float noise(vec3 p) {
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
  vec4 n = h * h * h * h *
           vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

vec2 wavedx(vec2 position, vec2 direction, float speed, float frequency, float timeshift) {
  float x = dot(direction, position) * frequency + timeshift * speed;
  float wave = exp(sin(x) - 1.0);
  float dx = wave * cos(x);
  return vec2(wave, -dx);
}

float getwaves(vec2 position, int iterations) {
  float iter = 0.0;
  float phase = 6.0;
  float speed = 2.0;
  float weight = 1.0;
  float w = 0.;
  float ws = 0.0;
  for (int i = 0; i < iterations; i++) {
    vec2 p = vec2(sin(iter), cos(iter));
    vec2 res = wavedx(position + vec2(100.), p, speed, phase, iTime * 1.5);
    position += normalize(p) * res.y * weight * 0.088;
    w += res.x * weight;
    iter += 12.0;
    ws += weight;
    weight = mix(weight, 0.0, 0.19);
    phase *= 1.18;
    speed *= 1.07;
  }
  return w / ws;
}

vec3 distortFunct(vec3 pos) {
  float t = iTime * 1.;

  float h = getwaves(pos.xz * 0.25, 25) * 1.0;
  // h += noise(pos * 1.5 + vec3(100., t, 100.)) * .05;

  return pos + vec3(0., h, 0.) * 2.25;
}

vec3 orthogonal(vec3 v) { return cross(v, vec3(1., 1., 1.)); }

vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal) {
  vec3 tangent1 = normalize(orthogonal(normal));
  vec3 tangent2 = normalize(cross(normal, tangent1));
  vec3 nearby1 = position + tangent1 * 0.013;
  vec3 nearby2 = position + tangent2 * 0.013;
  vec3 distorted1 = distortFunct(nearby1);
  vec3 distorted2 = distortFunct(nearby2);
  return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
}
`},401:function(S,d,o){"use strict";o.r(d),d.default=`#define GLSLIFY 1
float l = step(1.0, finalDiffuse.r);
color.rgb = vec3(l);
`},402:function(S,d,o){"use strict";o.r(d),d.default=`#define GLSLIFY 1
float updateTime = iTime * .1;

vec3 s = vec3(cellPos.x, 0., cellPos.y);

vec3 p = positionUpdated + s;
vec3 pp = distortFunct(p);
positionUpdated = pp-s;

vec3 distortedNormal = distortNormal(p, pp, normalUpdated);
// normalUpdated = normalize(normalUpdated + distortedNormal);
normalUpdated = distortedNormal;
`},403:function(S,d,o){"use strict";o.r(d),d.default=`#define GLSLIFY 1
uniform float iTime;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec2 vUV;

// --------- START-SHADER-TOY-CODE-HERE ------------

#define TAU 6.2831852
#define MOD3 vec3(.1031, .11369, .13787)
#define BLACK_COL vec3(0, 0, 0) / 255.

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float simplex_noise(vec3 p) {
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
  vec4 n = h * h * h * h *
           vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.y;

  float a = sin(atan(uv.y, uv.x));
  float am = abs(a - .5) / 4.;
  float l = length(uv * 3.0);

  float m1 = clamp(.1 / smoothstep(.0, 1.75, l), 0., 1.);
  float m2 = clamp(.1 / smoothstep(.42, 0., l), 0., 1.);
  float s1 = (simplex_noise(vec3(uv * 2., 1. + iTime * .525)) * (max(1.0 - l * 1.75, 0.)) + .9);
  float s2 = (simplex_noise(vec3(uv * 5., 15. + iTime * .525)) * (max(.0 + l * 1., .025)) + 1.25);
  float s3 =
      (simplex_noise(vec3(vec2(am, am * 100. + iTime * 3.) * .15, 30. + iTime * .525)) * (max(.0 + l * 1., .25)) + 1.5);
  s3 *= smoothstep(0.0, .3345, l);

  float sh = smoothstep(0.175, .35, l);

  float m = m1 * m1 * m2 * ((s1 * s2 * s3) * (1.0 - l)) * sh;
  // m = smoothstep(0., 1.91, m);

  vec3 col = mix(vec3(0.), (0.5 + 0.5 * cos(iTime + uv.xyx * 3. + vec3(0, 2, 4))), m * m);

  fragColor = vec4(vec3(m * (m / 1.5)), 1.);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main() { mainImage(gl_FragColor, vUV * iResolution.xy); }
`},404:function(S,d,o){"use strict";o.r(d),d.default=`#define GLSLIFY 1
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 worldViewProjection;
uniform float time;

varying vec3 vPosition;
varying vec2 vUV;

void main() {
    vec4 p = vec4( position, 1. );
    vPosition = p.xyz;
    vUV = uv;
	gl_Position = worldViewProjection * p;
}
`},498:function(S,d,o){"use strict";o.d(d,"a",function(){return h});var f=o(434),l=o(439),s=o(436),e=o(441),i=o(453),a=o(484);i.a.AddNodeConstructor("Light_Type_3",function(r,t){return function(){return new h(r,s.e.Zero(),t)}});var h=function(r){Object(f.d)(t,r);function t(n,c,_){var u=r.call(this,n,_)||this;return u.groundColor=new e.a(0,0,0),u.direction=c||s.e.Up(),u}return t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.getClassName=function(){return"HemisphericLight"},t.prototype.setDirectionToTarget=function(n){return this.direction=s.e.Normalize(n.subtract(s.e.Zero())),this.direction},t.prototype.getShadowGenerator=function(){return null},t.prototype.transferToEffect=function(n,c){var _=s.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",_.x,_.y,_.z,0,c),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),c),this},t.prototype.transferToNodeMaterialEffect=function(n,c){var _=s.e.Normalize(this.direction);return n.setFloat3(c,_.x,_.y,_.z),this},t.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=s.a.Identity()),this._worldMatrix},t.prototype.getTypeID=function(){return a.a.LIGHTTYPEID_HEMISPHERICLIGHT},t.prototype.prepareLightSpecificDefines=function(n,c){n["HEMILIGHT"+c]=!0},Object(f.c)([Object(l.e)()],t.prototype,"groundColor",void 0),Object(f.c)([Object(l.o)()],t.prototype,"direction",void 0),t}(a.a)},537:function(S,d,o){"use strict";o.d(d,"a",function(){return a});var f=o(434),l=o(439),s=o(436),e=o(484),i=o(465),a=function(h){Object(f.d)(r,h);function r(){var t=h!==null&&h.apply(this,arguments)||this;return t._needProjectionMatrixCompute=!0,t}return r.prototype._setPosition=function(t){this._position=t},Object.defineProperty(r.prototype,"position",{get:function(){return this._position},set:function(t){this._setPosition(t)},enumerable:!1,configurable:!0}),r.prototype._setDirection=function(t){this._direction=t},Object.defineProperty(r.prototype,"direction",{get:function(){return this._direction},set:function(t){this._setDirection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowMinZ",{get:function(){return this._shadowMinZ},set:function(t){this._shadowMinZ=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"shadowMaxZ",{get:function(){return this._shadowMaxZ},set:function(t){this._shadowMaxZ=t,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),r.prototype.computeTransformedInformation=function(){return this.parent&&this.parent.getWorldMatrix?(this.transformedPosition||(this.transformedPosition=s.e.Zero()),s.e.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=s.e.Zero()),s.e.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),!0):!1},r.prototype.getDepthScale=function(){return 50},r.prototype.getShadowDirection=function(t){return this.transformedDirection?this.transformedDirection:this.direction},r.prototype.getAbsolutePosition=function(){return this.transformedPosition?this.transformedPosition:this.position},r.prototype.setDirectionToTarget=function(t){return this.direction=s.e.Normalize(t.subtract(this.position)),this.direction},r.prototype.getRotation=function(){this.direction.normalize();var t=s.e.Cross(this.direction,i.a.Y),n=s.e.Cross(t,this.direction);return s.e.RotationFromAxis(t,n,this.direction)},r.prototype.needCube=function(){return!1},r.prototype.needProjectionMatrixCompute=function(){return this._needProjectionMatrixCompute},r.prototype.forceProjectionMatrixCompute=function(){this._needProjectionMatrixCompute=!0},r.prototype._initCache=function(){h.prototype._initCache.call(this),this._cache.position=s.e.Zero()},r.prototype._isSynchronized=function(){return!!this._cache.position.equals(this.position)},r.prototype.computeWorldMatrix=function(t){return!t&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=s.a.Identity()),s.a.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)},r.prototype.getDepthMinZ=function(t){return this.shadowMinZ!==void 0?this.shadowMinZ:t.minZ},r.prototype.getDepthMaxZ=function(t){return this.shadowMaxZ!==void 0?this.shadowMaxZ:t.maxZ},r.prototype.setShadowProjectionMatrix=function(t,n,c){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(n,c,t):this._setDefaultShadowProjectionMatrix(t,n,c),this},Object(f.c)([Object(l.o)()],r.prototype,"position",null),Object(f.c)([Object(l.o)()],r.prototype,"direction",null),Object(f.c)([Object(l.c)()],r.prototype,"shadowMinZ",null),Object(f.c)([Object(l.c)()],r.prototype,"shadowMaxZ",null),r}(e.a)},549:function(S,d,o){"use strict";o.d(d,"a",function(){return l});const f=()=>!!document.createElement("canvas").getContext("webgl2"),l=()=>f()?"webgl2":"webgl"},555:function(S,d,o){"use strict";var f=o(446),l=o(447),s=o(436);f.a.prototype.thinInstanceAdd=function(e,i){i===void 0&&(i=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(e)?e.length:1);var a=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(e))for(var h=0;h<e.length;++h)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,e[h],h===e.length-1&&i);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,e,i);return a},f.a.prototype.thinInstanceAddSelf=function(e){return e===void 0&&(e=!0),this.thinInstanceAdd(s.a.IdentityReadOnly,e)},f.a.prototype.thinInstanceRegisterAttribute=function(e,i){this.removeVerticesData(e),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[e]=i,this._userThinInstanceBuffersStorage.sizes[e]=i*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[e]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[e]),this._userThinInstanceBuffersStorage.vertexBuffers[e]=new l.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[e],e,!0,!1,i,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[e])},f.a.prototype.thinInstanceSetMatrixAt=function(e,i,a){if(a===void 0&&(a=!0),!this._thinInstanceDataStorage.matrixData||e>=this._thinInstanceDataStorage.instancesCount)return!1;var h=this._thinInstanceDataStorage.matrixData;return i.copyToArray(h,e*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[e]=i),a&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},f.a.prototype.thinInstanceSetAttributeAt=function(e,i,a,h){return h===void 0&&(h=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[e]||i>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(e,0),this._userThinInstanceBuffersStorage.data[e].set(a,i*this._userThinInstanceBuffersStorage.strides[e]),h&&this.thinInstanceBufferUpdated(e),!0)},Object.defineProperty(f.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(e){var i,a,h=((a=(i=this._thinInstanceDataStorage.matrixData)===null||i===void 0?void 0:i.length)!==null&&a!==void 0?a:0)/16;e<=h&&(this._thinInstanceDataStorage.instancesCount=e)},enumerable:!0,configurable:!0}),f.a.prototype.thinInstanceSetBuffer=function(e,i,a,h){var r,t;if(a===void 0&&(a=0),h===void 0&&(h=!1),a=a||16,e==="matrix")if((r=this._thinInstanceDataStorage.matrixBuffer)===null||r===void 0||r.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=i?i.length:32*a,this._thinInstanceDataStorage.matrixData=i,this._thinInstanceDataStorage.worldMatrices=null,i!==null){this._thinInstanceDataStorage.instancesCount=i.length/a;var n=new l.a(this.getEngine(),i,!h,a,!1,!0);this._thinInstanceDataStorage.matrixBuffer=n,this.setVerticesBuffer(n.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(n.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(n.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(n.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else i===null?((t=this._userThinInstanceBuffersStorage)===null||t===void 0?void 0:t.data[e])&&(this.removeVerticesData(e),delete this._userThinInstanceBuffersStorage.data[e],delete this._userThinInstanceBuffersStorage.strides[e],delete this._userThinInstanceBuffersStorage.sizes[e],delete this._userThinInstanceBuffersStorage.vertexBuffers[e]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[e]=i,this._userThinInstanceBuffersStorage.strides[e]=a,this._userThinInstanceBuffersStorage.sizes[e]=i.length,this._userThinInstanceBuffersStorage.vertexBuffers[e]=new l.b(this.getEngine(),i,e,!h,!1,a,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[e]))},f.a.prototype.thinInstanceBufferUpdated=function(e){var i;e==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((i=this._userThinInstanceBuffersStorage)===null||i===void 0?void 0:i.vertexBuffers[e])&&this._userThinInstanceBuffersStorage.vertexBuffers[e].updateDirectly(this._userThinInstanceBuffersStorage.data[e],0)},f.a.prototype.thinInstancePartialBufferUpdate=function(e,i,a){var h;e==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(i,a):((h=this._userThinInstanceBuffersStorage)===null||h===void 0?void 0:h.vertexBuffers[e])&&this._userThinInstanceBuffersStorage.vertexBuffers[e].updateDirectly(i,a)},f.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var e=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var i=0;i<this._thinInstanceDataStorage.instancesCount;++i)this._thinInstanceDataStorage.worldMatrices[i]=s.a.FromArray(e,i*16)}return this._thinInstanceDataStorage.worldMatrices},f.a.prototype.thinInstanceRefreshBoundingInfo=function(e){if(e===void 0&&(e=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var i=this._thinInstanceDataStorage.boundingVectors;e&&(i.length=0,this.refreshBoundingInfo(!0));var a=this.getBoundingInfo(),h=this._thinInstanceDataStorage.matrixData;if(i.length===0)for(var r=0;r<a.boundingBox.vectors.length;++r)i.push(a.boundingBox.vectors[r].clone());s.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),s.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var t=0;t<this._thinInstanceDataStorage.instancesCount;++t){s.a.FromArrayToRef(h,t*16,s.c.Matrix[0]);for(var r=0;r<i.length;++r)s.e.TransformCoordinatesToRef(i[r],s.c.Matrix[0],s.c.Vector3[2]),s.c.Vector3[0].minimizeInPlace(s.c.Vector3[2]),s.c.Vector3[1].maximizeInPlace(s.c.Vector3[2])}a.reConstruct(s.c.Vector3[0],s.c.Vector3[1]),this._updateBoundingInfo()}},f.a.prototype._thinInstanceUpdateBufferSize=function(e,i){var a,h;i===void 0&&(i=1);var r=e==="matrix";if(!(!r&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[e]))){for(var t=r?16:this._userThinInstanceBuffersStorage.strides[e],n=r?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[e],c=r?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[e],_=(this._thinInstanceDataStorage.instancesCount+i)*t,u=n;u<_;)u*=2;if(!c||n!=u){if(!c)c=new Float32Array(u);else{var v=new Float32Array(u);v.set(c,0),c=v}if(r){(a=this._thinInstanceDataStorage.matrixBuffer)===null||a===void 0||a.dispose();var m=new l.a(this.getEngine(),c,!0,t,!1,!0);this._thinInstanceDataStorage.matrixBuffer=m,this._thinInstanceDataStorage.matrixData=c,this._thinInstanceDataStorage.matrixBufferSize=u,this.setVerticesBuffer(m.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(m.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(m.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(m.createVertexBuffer("world3",12,4))}else(h=this._userThinInstanceBuffersStorage.vertexBuffers[e])===null||h===void 0||h.dispose(),this._userThinInstanceBuffersStorage.data[e]=c,this._userThinInstanceBuffersStorage.sizes[e]=u,this._userThinInstanceBuffersStorage.vertexBuffers[e]=new l.b(this.getEngine(),c,e,!0,!1,t,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[e])}}},f.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},f.a.prototype._disposeThinInstanceSpecificData=function(){var e;((e=this._thinInstanceDataStorage)===null||e===void 0?void 0:e.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},599:function(S,d,o){"use strict";o.d(d,"a",function(){return h});var f=o(434),l=o(439),s=o(436),e=o(453),i=o(484),a=o(537);e.a.AddNodeConstructor("Light_Type_1",function(r,t){return function(){return new h(r,s.e.Zero(),t)}});var h=function(r){Object(f.d)(t,r);function t(n,c,_){var u=r.call(this,n,_)||this;return u._shadowFrustumSize=0,u._shadowOrthoScale=.1,u.autoUpdateExtends=!0,u.autoCalcShadowZBounds=!1,u._orthoLeft=Number.MAX_VALUE,u._orthoRight=Number.MIN_VALUE,u._orthoTop=Number.MIN_VALUE,u._orthoBottom=Number.MAX_VALUE,u.position=c.scale(-1),u.direction=c,u}return Object.defineProperty(t.prototype,"shadowFrustumSize",{get:function(){return this._shadowFrustumSize},set:function(n){this._shadowFrustumSize=n,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"shadowOrthoScale",{get:function(){return this._shadowOrthoScale},set:function(n){this._shadowOrthoScale=n,this.forceProjectionMatrixCompute()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoLeft",{get:function(){return this._orthoLeft},set:function(n){this._orthoLeft=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoRight",{get:function(){return this._orthoRight},set:function(n){this._orthoRight=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoTop",{get:function(){return this._orthoTop},set:function(n){this._orthoTop=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"orthoBottom",{get:function(){return this._orthoBottom},set:function(n){this._orthoBottom=n},enumerable:!1,configurable:!0}),t.prototype.getClassName=function(){return"DirectionalLight"},t.prototype.getTypeID=function(){return i.a.LIGHTTYPEID_DIRECTIONALLIGHT},t.prototype._setDefaultShadowProjectionMatrix=function(n,c,_){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(n):this._setDefaultAutoExtendShadowProjectionMatrix(n,c,_)},t.prototype._setDefaultFixedFrustumShadowProjectionMatrix=function(n){var c=this.getScene().activeCamera;!c||s.a.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,this.shadowMinZ!==void 0?this.shadowMinZ:c.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:c.maxZ,n)},t.prototype._setDefaultAutoExtendShadowProjectionMatrix=function(n,c,_){var u=this.getScene().activeCamera;if(!!u){if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){var v=s.e.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;for(var m=Number.MAX_VALUE,C=Number.MIN_VALUE,L=0;L<_.length;L++){var z=_[L];if(!!z)for(var F=z.getBoundingInfo(),j=F.boundingBox,b=0;b<j.vectorsWorld.length;b++)s.e.TransformCoordinatesToRef(j.vectorsWorld[b],c,v),v.x<this._orthoLeft&&(this._orthoLeft=v.x),v.y<this._orthoBottom&&(this._orthoBottom=v.y),v.x>this._orthoRight&&(this._orthoRight=v.x),v.y>this._orthoTop&&(this._orthoTop=v.y),this.autoCalcShadowZBounds&&(v.z<m&&(m=v.z),v.z>C&&(C=v.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=m,this._shadowMaxZ=C)}var E=this._orthoRight-this._orthoLeft,T=this._orthoTop-this._orthoBottom;s.a.OrthoOffCenterLHToRef(this._orthoLeft-E*this.shadowOrthoScale,this._orthoRight+E*this.shadowOrthoScale,this._orthoBottom-T*this.shadowOrthoScale,this._orthoTop+T*this.shadowOrthoScale,this.shadowMinZ!==void 0?this.shadowMinZ:u.minZ,this.shadowMaxZ!==void 0?this.shadowMaxZ:u.maxZ,n)}},t.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},t.prototype.transferToEffect=function(n,c){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,c),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,c),this)},t.prototype.transferToNodeMaterialEffect=function(n,c){return this.computeTransformedInformation()?(n.setFloat3(c,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(n.setFloat3(c,this.direction.x,this.direction.y,this.direction.z),this)},t.prototype.getDepthMinZ=function(n){return 1},t.prototype.getDepthMaxZ=function(n){return 1},t.prototype.prepareLightSpecificDefines=function(n,c){n["DIRLIGHT"+c]=!0},Object(f.c)([Object(l.c)()],t.prototype,"shadowFrustumSize",null),Object(f.c)([Object(l.c)()],t.prototype,"shadowOrthoScale",null),Object(f.c)([Object(l.c)()],t.prototype,"autoUpdateExtends",void 0),Object(f.c)([Object(l.c)()],t.prototype,"autoCalcShadowZBounds",void 0),Object(f.c)([Object(l.c)("orthoLeft")],t.prototype,"_orthoLeft",void 0),Object(f.c)([Object(l.c)("orthoRight")],t.prototype,"_orthoRight",void 0),Object(f.c)([Object(l.c)("orthoTop")],t.prototype,"_orthoTop",void 0),Object(f.c)([Object(l.c)("orthoBottom")],t.prototype,"_orthoBottom",void 0),t}(a.a)}}]);
