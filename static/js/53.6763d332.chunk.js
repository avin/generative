(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[53,200,201,202,203,204,205,206,207,208,209],{321:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
varying float vR;
varying float vIdx;
varying float vR1Factor;
varying float vR2Factor;
attribute float idx;
attribute float r1Factor;
attribute float r2Factor;

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float nRand(vec2 n) { return fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453); }

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
`},322:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
float t = 100. + iTime * 1.75;

vIdx = idx;
vR1Factor = r1Factor;
vR2Factor = r2Factor;

float nFactor = noise(vec3(-t, idx, 0));

positionUpdated *= .75 + (sin(nFactor) * .5 + .5) * .75;

float pfX = noise(vec3(-t, idx, 0)) * .1;
float pfY = noise(vec3(-t, idx + 333., 0)) * .1;
float pfZ = noise(vec3(-t, idx + 666., 0)) * .1;

positionUpdated += vec3(pfX, pfY, pfZ);
`},323:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
varying float vR;
varying float vIdx;
varying float vR1Factor;
varying float vR2Factor;
`},324:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
diffuseColor = vDiffuseColor.rgb * (.75 + vR1Factor * .5);
`},325:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
varying float vR;
varying float vIdx;
varying float vR1Factor;
varying float vR2Factor;
varying float vPFactor;
attribute float idx;
attribute float r1Factor;
attribute float r2Factor;
attribute float pFactor;

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float nRand(vec2 n) { return fract(sin(dot(n.xy, vec2(12.9898, 78.233))) * 43758.5453); }

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
`},326:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
float t = 100. + iTime * .5;

vIdx = idx;
vR1Factor = r1Factor;
vR2Factor = r2Factor;

float pfX = noise(vec3(-t, idx, pFactor)) * pFactor;
float pfY = noise(vec3(-t, idx + 333., pFactor)) * pFactor;
float pfZ = noise(vec3(-t, idx + 666., pFactor)) * pFactor;

positionUpdated += vec3(pfX, pfY, pfZ)*.25;
`},327:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
varying float vR;
varying float vIdx;
varying float vR1Factor;
varying float vR2Factor;

#define COL1 vec3(72, 175, 240) / 255.0
#define COL2 vec3(255, 179, 102) / 255.0
#define COL3 vec3(255, 102, 161) / 255.0
`},328:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
vec3 col;

if (vR2Factor < .5) {
  col = COL1;
} else if (vR2Factor < .85) {
  col = COL2;
} else {
  col = COL3;
}

diffuseColor = col * (.85 + vR1Factor * .7);
`},329:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
uniform float iTime;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec2 vUV;

#define COL vec3(245, 248, 250) / 255.

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;

  vec3 col = COL;

  col *= 0.5 + 0.5 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.1);

  col = clamp(col, 0.0, 1.0);
  col = col * 0.6 + 0.4 * col * col * (3.0 - 2.0 * col) + vec3(0.0, 0.0, 0.04);

  fragColor = vec4(col, 1.);
}

void main() { mainImage(gl_FragColor, vUV * iResolution.xy); }
`},330:function(P,g,s){"use strict";s.r(g),g.default=`#define GLSLIFY 1
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
`},498:function(P,g,s){"use strict";s.d(g,"a",function(){return _});var y=s(434),D=s(439),I=s(436),r=s(441),i=s(453),p=s(484);i.a.AddNodeConstructor("Light_Type_3",function(v,c){return function(){return new _(v,I.e.Zero(),c)}});var _=function(v){Object(y.d)(c,v);function c(f,m,h){var S=v.call(this,f,h)||this;return S.groundColor=new r.a(0,0,0),S.direction=m||I.e.Up(),S}return c.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},c.prototype.getClassName=function(){return"HemisphericLight"},c.prototype.setDirectionToTarget=function(f){return this.direction=I.e.Normalize(f.subtract(I.e.Zero())),this.direction},c.prototype.getShadowGenerator=function(){return null},c.prototype.transferToEffect=function(f,m){var h=I.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",h.x,h.y,h.z,0,m),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),m),this},c.prototype.transferToNodeMaterialEffect=function(f,m){var h=I.e.Normalize(this.direction);return f.setFloat3(m,h.x,h.y,h.z),this},c.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=I.a.Identity()),this._worldMatrix},c.prototype.getTypeID=function(){return p.a.LIGHTTYPEID_HEMISPHERICLIGHT},c.prototype.prepareLightSpecificDefines=function(f,m){f["HEMILIGHT"+m]=!0},Object(y.c)([Object(D.e)()],c.prototype,"groundColor",void 0),Object(y.c)([Object(D.o)()],c.prototype,"direction",void 0),c}(p.a)},549:function(P,g,s){"use strict";s.d(g,"a",function(){return D});const y=()=>!!document.createElement("canvas").getContext("webgl2"),D=()=>y()?"webgl2":"webgl"},555:function(P,g,s){"use strict";var y=s(446),D=s(447),I=s(436);y.a.prototype.thinInstanceAdd=function(r,i){i===void 0&&(i=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(r)?r.length:1);var p=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(r))for(var _=0;_<r.length;++_)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,r[_],_===r.length-1&&i);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,r,i);return p},y.a.prototype.thinInstanceAddSelf=function(r){return r===void 0&&(r=!0),this.thinInstanceAdd(I.a.IdentityReadOnly,r)},y.a.prototype.thinInstanceRegisterAttribute=function(r,i){this.removeVerticesData(r),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[r]=i,this._userThinInstanceBuffersStorage.sizes[r]=i*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[r]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[r]),this._userThinInstanceBuffersStorage.vertexBuffers[r]=new D.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[r],r,!0,!1,i,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[r])},y.a.prototype.thinInstanceSetMatrixAt=function(r,i,p){if(p===void 0&&(p=!0),!this._thinInstanceDataStorage.matrixData||r>=this._thinInstanceDataStorage.instancesCount)return!1;var _=this._thinInstanceDataStorage.matrixData;return i.copyToArray(_,r*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[r]=i),p&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},y.a.prototype.thinInstanceSetAttributeAt=function(r,i,p,_){return _===void 0&&(_=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[r]||i>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(r,0),this._userThinInstanceBuffersStorage.data[r].set(p,i*this._userThinInstanceBuffersStorage.strides[r]),_&&this.thinInstanceBufferUpdated(r),!0)},Object.defineProperty(y.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(r){var i,p,_=((p=(i=this._thinInstanceDataStorage.matrixData)===null||i===void 0?void 0:i.length)!==null&&p!==void 0?p:0)/16;r<=_&&(this._thinInstanceDataStorage.instancesCount=r)},enumerable:!0,configurable:!0}),y.a.prototype.thinInstanceSetBuffer=function(r,i,p,_){var v,c;if(p===void 0&&(p=0),_===void 0&&(_=!1),p=p||16,r==="matrix")if((v=this._thinInstanceDataStorage.matrixBuffer)===null||v===void 0||v.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=i?i.length:32*p,this._thinInstanceDataStorage.matrixData=i,this._thinInstanceDataStorage.worldMatrices=null,i!==null){this._thinInstanceDataStorage.instancesCount=i.length/p;var f=new D.a(this.getEngine(),i,!_,p,!1,!0);this._thinInstanceDataStorage.matrixBuffer=f,this.setVerticesBuffer(f.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(f.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(f.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(f.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else i===null?((c=this._userThinInstanceBuffersStorage)===null||c===void 0?void 0:c.data[r])&&(this.removeVerticesData(r),delete this._userThinInstanceBuffersStorage.data[r],delete this._userThinInstanceBuffersStorage.strides[r],delete this._userThinInstanceBuffersStorage.sizes[r],delete this._userThinInstanceBuffersStorage.vertexBuffers[r]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[r]=i,this._userThinInstanceBuffersStorage.strides[r]=p,this._userThinInstanceBuffersStorage.sizes[r]=i.length,this._userThinInstanceBuffersStorage.vertexBuffers[r]=new D.b(this.getEngine(),i,r,!_,!1,p,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[r]))},y.a.prototype.thinInstanceBufferUpdated=function(r){var i;r==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((i=this._userThinInstanceBuffersStorage)===null||i===void 0?void 0:i.vertexBuffers[r])&&this._userThinInstanceBuffersStorage.vertexBuffers[r].updateDirectly(this._userThinInstanceBuffersStorage.data[r],0)},y.a.prototype.thinInstancePartialBufferUpdate=function(r,i,p){var _;r==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(i,p):((_=this._userThinInstanceBuffersStorage)===null||_===void 0?void 0:_.vertexBuffers[r])&&this._userThinInstanceBuffersStorage.vertexBuffers[r].updateDirectly(i,p)},y.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var r=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var i=0;i<this._thinInstanceDataStorage.instancesCount;++i)this._thinInstanceDataStorage.worldMatrices[i]=I.a.FromArray(r,i*16)}return this._thinInstanceDataStorage.worldMatrices},y.a.prototype.thinInstanceRefreshBoundingInfo=function(r){if(r===void 0&&(r=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var i=this._thinInstanceDataStorage.boundingVectors;r&&(i.length=0,this.refreshBoundingInfo(!0));var p=this.getBoundingInfo(),_=this._thinInstanceDataStorage.matrixData;if(i.length===0)for(var v=0;v<p.boundingBox.vectors.length;++v)i.push(p.boundingBox.vectors[v].clone());I.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),I.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var c=0;c<this._thinInstanceDataStorage.instancesCount;++c){I.a.FromArrayToRef(_,c*16,I.c.Matrix[0]);for(var v=0;v<i.length;++v)I.e.TransformCoordinatesToRef(i[v],I.c.Matrix[0],I.c.Vector3[2]),I.c.Vector3[0].minimizeInPlace(I.c.Vector3[2]),I.c.Vector3[1].maximizeInPlace(I.c.Vector3[2])}p.reConstruct(I.c.Vector3[0],I.c.Vector3[1]),this._updateBoundingInfo()}},y.a.prototype._thinInstanceUpdateBufferSize=function(r,i){var p,_;i===void 0&&(i=1);var v=r==="matrix";if(!(!v&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[r]))){for(var c=v?16:this._userThinInstanceBuffersStorage.strides[r],f=v?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[r],m=v?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[r],h=(this._thinInstanceDataStorage.instancesCount+i)*c,S=f;S<h;)S*=2;if(!m||f!=S){if(!m)m=new Float32Array(S);else{var W=new Float32Array(S);W.set(m,0),m=W}if(v){(p=this._thinInstanceDataStorage.matrixBuffer)===null||p===void 0||p.dispose();var w=new D.a(this.getEngine(),m,!0,c,!1,!0);this._thinInstanceDataStorage.matrixBuffer=w,this._thinInstanceDataStorage.matrixData=m,this._thinInstanceDataStorage.matrixBufferSize=S,this.setVerticesBuffer(w.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(w.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(w.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(w.createVertexBuffer("world3",12,4))}else(_=this._userThinInstanceBuffersStorage.vertexBuffers[r])===null||_===void 0||_.dispose(),this._userThinInstanceBuffersStorage.data[r]=m,this._userThinInstanceBuffersStorage.sizes[r]=S,this._userThinInstanceBuffersStorage.vertexBuffers[r]=new D.b(this.getEngine(),m,r,!0,!1,c,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[r])}}},y.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},y.a.prototype._disposeThinInstanceSpecificData=function(){var r;((r=this._thinInstanceDataStorage)===null||r===void 0?void 0:r.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},743:function(P,g,s){"use strict";s.d(g,"a",function(){return D});/*! *****************************************************************************
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
***************************************************************************** */var y=function(t,n){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(e[u]=o[u])},y(t,n)};function D(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");y(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}var I=function(){return I=Object.assign||function(n){for(var e,o=1,u=arguments.length;o<u;o++){e=arguments[o];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},I.apply(this,arguments)};function r(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(t);u<o.length;u++)n.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(t,o[u])&&(e[o[u]]=t[o[u]]);return e}function i(t,n,e,o){var u=arguments.length,a=u<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,e):o,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,n,e,o);else for(var B=t.length-1;B>=0;B--)(d=t[B])&&(a=(u<3?d(a):u>3?d(n,e,a):d(n,e))||a);return u>3&&a&&Object.defineProperty(n,e,a),a}function p(t,n){return function(e,o){n(e,o,t)}}function _(t,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,n)}function v(t,n,e,o){function u(a){return a instanceof e?a:new e(function(d){d(a)})}return new(e||(e=Promise))(function(a,d){function B(x){try{l(o.next(x))}catch(b){d(b)}}function M(x){try{l(o.throw(x))}catch(b){d(b)}}function l(x){x.done?a(x.value):u(x.value).then(B,M)}l((o=o.apply(t,n||[])).next())})}function c(t,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,u,a,d;return d={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function B(l){return function(x){return M([l,x])}}function M(l){if(o)throw new TypeError("Generator is already executing.");for(;e;)try{if(o=1,u&&(a=l[0]&2?u.return:l[0]?u.throw||((a=u.return)&&a.call(u),0):u.next)&&!(a=a.call(u,l[1])).done)return a;switch(u=0,a&&(l=[l[0]&2,a.value]),l[0]){case 0:case 1:a=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,u=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){e.label=l[1];break}if(l[0]===6&&e.label<a[1]){e.label=a[1],a=l;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(l);break}a[2]&&e.ops.pop(),e.trys.pop();continue}l=n.call(t,e)}catch(x){l=[6,x],u=0}finally{o=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var f=Object.create?function(t,n,e,o){o===void 0&&(o=e),Object.defineProperty(t,o,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,o){o===void 0&&(o=e),t[o]=n[e]};function m(t,n){for(var e in t)e!=="default"&&!Object.prototype.hasOwnProperty.call(n,e)&&f(n,t,e)}function h(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],o=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function S(t,n){var e=typeof Symbol=="function"&&t[Symbol.iterator];if(!e)return t;var o=e.call(t),u,a=[],d;try{for(;(n===void 0||n-- >0)&&!(u=o.next()).done;)a.push(u.value)}catch(B){d={error:B}}finally{try{u&&!u.done&&(e=o.return)&&e.call(o)}finally{if(d)throw d.error}}return a}function W(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(S(arguments[n]));return t}function w(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;for(var o=Array(t),u=0,n=0;n<e;n++)for(var a=arguments[n],d=0,B=a.length;d<B;d++,u++)o[u]=a[d];return o}function k(t,n){for(var e=0,o=n.length,u=t.length;e<o;e++,u++)t[u]=n[e];return t}function E(t){return this instanceof E?(this.v=t,this):new E(t)}function tt(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=e.apply(t,n||[]),u,a=[];return u={},d("next"),d("throw"),d("return"),u[Symbol.asyncIterator]=function(){return this},u;function d(C){o[C]&&(u[C]=function(L){return new Promise(function(J,Q){a.push([C,L,J,Q])>1||B(C,L)})})}function B(C,L){try{M(o[C](L))}catch(J){b(a[0][3],J)}}function M(C){C.value instanceof E?Promise.resolve(C.value.v).then(l,x):b(a[0][2],C)}function l(C){B("next",C)}function x(C){B("throw",C)}function b(C,L){C(L),a.shift(),a.length&&B(a[0][0],a[0][1])}}function Z(t){var n,e;return n={},o("next"),o("throw",function(u){throw u}),o("return"),n[Symbol.iterator]=function(){return this},n;function o(u,a){n[u]=t[u]?function(d){return(e=!e)?{value:E(t[u](d)),done:u==="return"}:a?a(d):d}:a}}function G(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof h=="function"?h(t):t[Symbol.iterator](),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(a){e[a]=t[a]&&function(d){return new Promise(function(B,M){d=t[a](d),u(B,M,d.done,d.value)})}}function u(a,d,B,M){Promise.resolve(M).then(function(l){a({value:l,done:B})},d)}}function ot(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}var st=Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n};function dt(t){if(t&&t.__esModule)return t;var n={};if(t!=null)for(var e in t)e!=="default"&&Object.prototype.hasOwnProperty.call(t,e)&&f(n,t,e);return st(n,t),n}function _t(t){return t&&t.__esModule?t:{default:t}}function mt(t,n){if(!n.has(t))throw new TypeError("attempted to get private field on non-instance");return n.get(t)}function gt(t,n,e){if(!n.has(t))throw new TypeError("attempted to set private field on non-instance");return n.set(t,e),e}},758:function(P,g,s){"use strict";s.d(g,"a",function(){return _});var y=s(743),D=s(435),I=s(455),r=s(437),i=function(){function v(){}return v}(),p=function(){function v(){}return v}(),_=function(v){Object(y.a)(c,v);function c(f,m){var h=v.call(this,f,m)||this;return h.CustomParts=new p,h.customShaderNameResolve=h.Builder,h.FragmentShader=D.a.ShadersStore.defaultPixelShader,h.VertexShader=D.a.ShadersStore.defaultVertexShader,h}return c.prototype.AttachAfterBind=function(f,m){if(this._newUniformInstances)for(var h in this._newUniformInstances){var S=h.toString().split("-");S[0]=="vec2"?m.setVector2(S[1],this._newUniformInstances[h]):S[0]=="vec3"?m.setVector3(S[1],this._newUniformInstances[h]):S[0]=="vec4"?m.setVector4(S[1],this._newUniformInstances[h]):S[0]=="mat4"?m.setMatrix(S[1],this._newUniformInstances[h]):S[0]=="float"&&m.setFloat(S[1],this._newUniformInstances[h])}if(this._newSamplerInstances)for(var h in this._newSamplerInstances){var S=h.toString().split("-");S[0]=="sampler2D"&&this._newSamplerInstances[h].isReady&&this._newSamplerInstances[h].isReady()&&m.setTexture(S[1],this._newSamplerInstances[h])}},c.prototype.ReviewUniform=function(f,m){if(f=="uniform"&&this._newUniforms)for(var h=0;h<this._newUniforms.length;h++)this._customUniform[h].indexOf("sampler")==-1&&m.push(this._newUniforms[h]);if(f=="sampler"&&this._newUniforms)for(var h=0;h<this._newUniforms.length;h++)this._customUniform[h].indexOf("sampler")!=-1&&m.push(this._newUniforms[h]);return m},c.prototype.Builder=function(f,m,h,S,W,w){var k=this;if(w&&this._customAttributes&&this._customAttributes.length>0&&w.push.apply(w,this._customAttributes),this.ReviewUniform("uniform",m),this.ReviewUniform("sampler",S),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,c.ShaderIndexer++;var E="custom_"+c.ShaderIndexer,tt=this._afterBind.bind(this);return this._afterBind=function(Z,G){if(!!G){k.AttachAfterBind(Z,G);try{tt(Z,G)}catch(ot){}}},D.a.ShadersStore[E+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(D.a.ShadersStore[E+"VertexShader"]=D.a.ShadersStore[E+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),D.a.ShadersStore[E+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(D.a.ShadersStore[E+"PixelShader"]=D.a.ShadersStore[E+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=E,E},c.prototype.AddUniform=function(f,m,h){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),h&&(m.indexOf("sampler")!=-1?this._newSamplerInstances[m+"-"+f]=h:this._newUniformInstances[m+"-"+f]=h),this._customUniform.push("uniform "+m+" "+f+";"),this._newUniforms.push(f),this},c.prototype.AddAttribute=function(f){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(f),this},c.prototype.Fragment_Begin=function(f){return this.CustomParts.Fragment_Begin=f,this},c.prototype.Fragment_Definitions=function(f){return this.CustomParts.Fragment_Definitions=f,this},c.prototype.Fragment_MainBegin=function(f){return this.CustomParts.Fragment_MainBegin=f,this},c.prototype.Fragment_Custom_Diffuse=function(f){return this.CustomParts.Fragment_Custom_Diffuse=f.replace("result","diffuseColor"),this},c.prototype.Fragment_Custom_Alpha=function(f){return this.CustomParts.Fragment_Custom_Alpha=f.replace("result","alpha"),this},c.prototype.Fragment_Before_Lights=function(f){return this.CustomParts.Fragment_Before_Lights=f,this},c.prototype.Fragment_Before_Fog=function(f){return this.CustomParts.Fragment_Before_Fog=f,this},c.prototype.Fragment_Before_FragColor=function(f){return this.CustomParts.Fragment_Before_FragColor=f.replace("result","color"),this},c.prototype.Vertex_Begin=function(f){return this.CustomParts.Vertex_Begin=f,this},c.prototype.Vertex_Definitions=function(f){return this.CustomParts.Vertex_Definitions=f,this},c.prototype.Vertex_MainBegin=function(f){return this.CustomParts.Vertex_MainBegin=f,this},c.prototype.Vertex_Before_PositionUpdated=function(f){return this.CustomParts.Vertex_Before_PositionUpdated=f.replace("result","positionUpdated"),this},c.prototype.Vertex_Before_NormalUpdated=function(f){return this.CustomParts.Vertex_Before_NormalUpdated=f.replace("result","normalUpdated"),this},c.prototype.Vertex_After_WorldPosComputed=function(f){return this.CustomParts.Vertex_After_WorldPosComputed=f,this},c.prototype.Vertex_MainEnd=function(f){return this.CustomParts.Vertex_MainEnd=f,this},c.ShaderIndexer=1,c}(I.a);r.a.RegisteredTypes["BABYLON.CustomMaterial"]=_},85:function(P,g,s){"use strict";s.r(g);var y=s(445),D=s(449),I=s(498),r=s(555),i=s(475),p=s(758),_=s(441),v=s(506),c=s(648),f=s(447),m=s(435),h=s(509),S=s(451),W=s(549),w=s(321),k=s(322),E=s(323),tt=s(324),Z=s(325),G=s(326),ot=s(327),st=s(328),dt=s(329),_t=s(330),mt=(n,e,o)=>new Promise((u,a)=>{var d=l=>{try{M(o.next(l))}catch(x){a(x)}},B=l=>{try{M(o.throw(l))}catch(x){a(x)}},M=l=>l.done?u(l.value):Promise.resolve(l.value).then(d,B);M((o=o.apply(n,e)).next())});const gt={animate:!0,context:Object(W.a)()},t=n=>mt(void 0,[n],function*({canvas:e,width:o,height:u}){const a=new y.a(e,!0),d=.5,B=.75,M=3,l=.5,x=24,b=48,C=.3,L=1.125,J=2,Q=+new Date;m.a.ShadersStore.backgroundVertexShader=_t.default,m.a.ShadersStore.backgroundFragmentShader=dt.default;const Y=new D.a(a),H=new v.a("camera1",0,0,2,i.z.Zero(),Y);H.mode=S.a.ORTHOGRAPHIC_CAMERA,H.orthoTop=1,H.orthoBottom=-1,H.orthoLeft=-1,H.orthoRight=1;const et=new h.a("shader",Y,{vertex:"background",fragment:"background"},{attributes:["position","normal","uv"],uniforms:["world","worldView","worldViewProjection","view","iTime","iResolution"]});et.setVector2("iResolution",new i.y(1,1));const ft=c.a.CreateGround("ground",{width:2,height:2,subdivisions:1},Y);ft.material=et,ft.material.backFaceCulling=!1,ft.rotation.y=-Math.PI/2,Y.registerBeforeRender(()=>{const F=(+new Date-Q)*.001;et.setFloat("iTime",F);const U=Y.getEngine().getAspectRatio(H);et.setVector2("iResolution",new i.y(U,1))});const V=new D.a(a);V.autoClear=!1;const j=new v.a("camera",Math.PI/1.5,Math.PI/2,60,new i.z(0,0,0),V);j.allowUpsideDown=!0,j.lowerRadiusLimit=x*d,j.attachControl(e,!0),j.fov=1,j.minZ=.1,j.useAutoRotationBehavior=!0,j.autoRotationBehavior.idleRotationSpeed=.19;const nt=new I.a("hemiLight",new i.z(-1,1,0),V);nt.intensity=1,nt.diffuse=new _.a(1,1,1),nt.specular=new _.a(.25,.25,.25),nt.groundColor=new _.a(.5,.5,.5);const O=new p.a("bridgeSphereMaterial",V);O.diffuseColor=new _.a(138/255,155/255,168/255),O.specularColor=new _.a(.125,.125,.125),O.freeze();const T=new p.a("capSphereMaterial",V);T.diffuseColor=new _.a(72/255,175/255,240/255),T.specularColor=new _.a(.125,.125,.125),T.freeze();const ct=c.a.CreateIcoSphere("baseSphere",{radius:L,subdivisions:J,updatable:!1,flat:!1});ct.visibility=.25;const rt=ct.geometry.getVerticesData(f.b.PositionKind),pt=rt.length/3;ct.dispose();const N=c.a.CreateSphere("bridgeSphere",{diameter:d,segments:6,updatable:!1},V);N.material=O,N.freezeWorldMatrix(),N.doNotSyncBoundingInfo=!0;const z=c.a.CreateSphere("capSphere",{diameter:l,segments:6,updatable:!1},V);z.material=T,z.freezeWorldMatrix(),z.doNotSyncBoundingInfo=!0;const at=(x-1)*b,vt=new Float32Array(16*at),St=new Float32Array(at),It=new Float32Array(at),yt=new Float32Array(at),$=b*2*2*pt,Bt=new Float32Array(16*$),Dt=new Float32Array($),xt=new Float32Array($),Ct=new Float32Array($),Mt=new Float32Array($),ut=i.r.RotationAxis(new i.z(0,0,1),Math.PI/2),Pt=new i.r,Ft=new i.z(1,1,1);let X=0,K=0;for(let F=0;F<b;F+=1){i.r.RotationAxisToRef(new i.z(0,1,0),F*C,ut);for(let U=1;U<x;U+=1){const A=new i.z;A.y=(F-b/2)*M,A.x=(U-x/2)*d*B,A.rotateByQuaternionToRef(ut,A),i.k.Compose(Ft,Pt,A).copyToArray(vt,16*X),St[X]=X,It[X]=Math.random(),yt[X]=Math.random(),X+=1}for(let U=-1;U<=1;U+=2){const A=new i.z;A.y=(F-b/2)*M,A.x=(x/2*d*B+L)*U,A.rotateByQuaternionToRef(ut,A);for(let it=0;it<=1;it+=1){const ht=1-it*.35,At=new i.z(ht,ht,ht);for(let q=0;q<pt;q+=1){let Et=new i.z(1,1,1),Tt=1;const R=new i.z;if(R.x=rt[q*3+0],R.y=rt[q*3+1],R.z=rt[q*3+2],R.multiplyToRef(At,R),R.x+=(Math.random()-.5)*.751,R.y+=(Math.random()-.5)*.751,R.z+=(Math.random()-.5)*.751,K%20<3){const wt=(Math.random()-.5)*1,bt=(Math.random()-.5)*1,Rt=(Math.random()-.5)*1;R.x+=wt,R.y+=bt,R.z+=Rt;const lt=(Math.random()*.5+.5)*.5;Et=new i.z(lt,lt,lt),Tt=20}const Ot=new i.z;A.addToRef(R,Ot),i.k.Compose(Et,Pt,Ot).copyToArray(Bt,16*K),Dt[K]=K,xt[K]=Math.random(),Ct[K]=Math.random(),Mt[K]=Tt,K+=1}}}}return N.thinInstanceSetBuffer("matrix",vt,16,!0),N.thinInstanceSetBuffer("idx",St,1,!0),N.thinInstanceSetBuffer("r1Factor",It,1,!0),N.thinInstanceSetBuffer("r2Factor",yt,1,!0),z.thinInstanceSetBuffer("matrix",Bt,16,!0),z.thinInstanceSetBuffer("idx",Dt,1,!0),z.thinInstanceSetBuffer("r1Factor",xt,1,!0),z.thinInstanceSetBuffer("r2Factor",Ct,1,!0),z.thinInstanceSetBuffer("pFactor",Mt,1,!0),O.AddAttribute("idx"),O.AddAttribute("r1Factor"),O.AddAttribute("r2Factor"),O.Vertex_Definitions(w.default),O.Vertex_Before_PositionUpdated(k.default),O.Fragment_Definitions(E.default),O.Fragment_Custom_Diffuse(tt.default),T.AddAttribute("idx"),T.AddAttribute("r1Factor"),T.AddAttribute("r2Factor"),T.AddAttribute("pFactor"),T.Vertex_Definitions(Z.default),T.Vertex_Before_PositionUpdated(G.default),T.Fragment_Definitions(ot.default),T.Fragment_Custom_Diffuse(st.default),O.AddUniform("iTime","float"),O.onBind=()=>{const F=(+new Date-Q)*.001;O.getEffect().setFloat("iTime",F)},T.AddUniform("iTime","float"),T.onBind=()=>{const F=(+new Date-Q)*.001;T.getEffect().setFloat("iTime",F)},{render({time:F,width:U,height:A}){Y.render(),V.render()},resize({pixelRatio:F,width:U,height:A}){a.resize()},unload(){a.dispose()}}});g.default={sketch:t,settings:gt}}}]);
