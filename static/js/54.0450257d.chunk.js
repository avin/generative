(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[54,210,211,212,213,214,215],{331:function(w,S,c){"use strict";c.r(S),S.default=`#define GLSLIFY 1
// attribute vec2 uv;

attribute float idx;

varying float vR;
varying vec2 vUv;

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
`},332:function(w,S,c){"use strict";c.r(S),S.default=`#define GLSLIFY 1
float t = 100. + iTime * 0.125;
// float t = 10.;

vUv = uv;
vR = position.y;

// float l = length(position.xz)*5.;

//float pfX = sin(noise(vec3(vR*.025 + t, position.x*.05, 10.))) * 20.0;
//float pfY = 0.;
//float pfZ = sin(noise(vec3(vR*.025 + t-pfX*.1, position.z*.05+pfX*.1, 80.))) * 20.0;
//
//positionUpdated.x += pfX;
//positionUpdated.y += pfY;
//positionUpdated.z += pfZ;
//
//positionUpdated.xz *= (noise(vec3(vR*.05 + t, 0, 100.))*.5 + 1.0) * 1.0;

float lf = (sin(positionUpdated.y)*.5+.5)*.5 + .5;
positionUpdated.xz *= lf;

float l = length(position.xy + t*10.);
float nf1 = noise(vec3(vR*.5 + t, 0, 100.)) * 1.0;
float yf = sin(l + lf*5.)*nf1;
positionUpdated.y += yf;

positionUpdated.x += sin(vR*0.1 + idx*PI)*8.;
positionUpdated.z += cos(vR*0.1 + idx*PI)*8.;

positionUpdated.y -= idx*3.0;
`},333:function(w,S,c){"use strict";c.r(S),S.default=`#extension GL_OES_standard_derivatives : enable
#define GLSLIFY 1

varying float vR;
varying vec2 vUv;

#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0
`},334:function(w,S,c){"use strict";c.r(S),S.default=`#define GLSLIFY 1
float size = 90.;

vec2 fUV = vec2(vDiffuseUV.x, 0.);

vec2 coord = fract(fUV * size);

// vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) / 2.0;
vec2 grid = abs(fract(coord - .5) - .49999) / fwidth(coord) / 2.0;
float line = min(grid.x, grid.y);

line = smoothstep(.90, .10, line);

diffuseColor = vec3(1.);

baseColor.rgb = mix(COL1, COL2, 1. - line);
`},335:function(w,S,c){"use strict";c.r(S),S.default=`#define GLSLIFY 1
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
`},336:function(w,S,c){"use strict";c.r(S),S.default=`#define GLSLIFY 1
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
`},498:function(w,S,c){"use strict";c.d(S,"a",function(){return g});var y=c(434),D=c(439),I=c(436),r=c(441),o=c(453),m=c(484);o.a.AddNodeConstructor("Light_Type_3",function(p,f){return function(){return new g(p,I.e.Zero(),f)}});var g=function(p){Object(y.d)(f,p);function f(s,d,h){var v=p.call(this,s,h)||this;return v.groundColor=new r.a(0,0,0),v.direction=d||I.e.Up(),v}return f.prototype._buildUniformLayout=function(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()},f.prototype.getClassName=function(){return"HemisphericLight"},f.prototype.setDirectionToTarget=function(s){return this.direction=I.e.Normalize(s.subtract(I.e.Zero())),this.direction},f.prototype.getShadowGenerator=function(){return null},f.prototype.transferToEffect=function(s,d){var h=I.e.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",h.x,h.y,h.z,0,d),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),d),this},f.prototype.transferToNodeMaterialEffect=function(s,d){var h=I.e.Normalize(this.direction);return s.setFloat3(d,h.x,h.y,h.z),this},f.prototype.computeWorldMatrix=function(){return this._worldMatrix||(this._worldMatrix=I.a.Identity()),this._worldMatrix},f.prototype.getTypeID=function(){return m.a.LIGHTTYPEID_HEMISPHERICLIGHT},f.prototype.prepareLightSpecificDefines=function(s,d){s["HEMILIGHT"+d]=!0},Object(y.c)([Object(D.e)()],f.prototype,"groundColor",void 0),Object(y.c)([Object(D.o)()],f.prototype,"direction",void 0),f}(m.a)},549:function(w,S,c){"use strict";c.d(S,"a",function(){return D});const y=()=>!!document.createElement("canvas").getContext("webgl2"),D=()=>y()?"webgl2":"webgl"},555:function(w,S,c){"use strict";var y=c(446),D=c(447),I=c(436);y.a.prototype.thinInstanceAdd=function(r,o){o===void 0&&(o=!0),this._thinInstanceUpdateBufferSize("matrix",Array.isArray(r)?r.length:1);var m=this._thinInstanceDataStorage.instancesCount;if(Array.isArray(r))for(var g=0;g<r.length;++g)this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,r[g],g===r.length-1&&o);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++,r,o);return m},y.a.prototype.thinInstanceAddSelf=function(r){return r===void 0&&(r=!0),this.thinInstanceAdd(I.a.IdentityReadOnly,r)},y.a.prototype.thinInstanceRegisterAttribute=function(r,o){this.removeVerticesData(r),this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.strides[r]=o,this._userThinInstanceBuffersStorage.sizes[r]=o*Math.max(32,this._thinInstanceDataStorage.instancesCount),this._userThinInstanceBuffersStorage.data[r]=new Float32Array(this._userThinInstanceBuffersStorage.sizes[r]),this._userThinInstanceBuffersStorage.vertexBuffers[r]=new D.b(this.getEngine(),this._userThinInstanceBuffersStorage.data[r],r,!0,!1,o,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[r])},y.a.prototype.thinInstanceSetMatrixAt=function(r,o,m){if(m===void 0&&(m=!0),!this._thinInstanceDataStorage.matrixData||r>=this._thinInstanceDataStorage.instancesCount)return!1;var g=this._thinInstanceDataStorage.matrixData;return o.copyToArray(g,r*16),this._thinInstanceDataStorage.worldMatrices&&(this._thinInstanceDataStorage.worldMatrices[r]=o),m&&(this.thinInstanceBufferUpdated("matrix"),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)),!0},y.a.prototype.thinInstanceSetAttributeAt=function(r,o,m,g){return g===void 0&&(g=!0),!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.data[r]||o>=this._thinInstanceDataStorage.instancesCount?!1:(this._thinInstanceUpdateBufferSize(r,0),this._userThinInstanceBuffersStorage.data[r].set(m,o*this._userThinInstanceBuffersStorage.strides[r]),g&&this.thinInstanceBufferUpdated(r),!0)},Object.defineProperty(y.a.prototype,"thinInstanceCount",{get:function(){return this._thinInstanceDataStorage.instancesCount},set:function(r){var o,m,g=((m=(o=this._thinInstanceDataStorage.matrixData)===null||o===void 0?void 0:o.length)!==null&&m!==void 0?m:0)/16;r<=g&&(this._thinInstanceDataStorage.instancesCount=r)},enumerable:!0,configurable:!0}),y.a.prototype.thinInstanceSetBuffer=function(r,o,m,g){var p,f;if(m===void 0&&(m=0),g===void 0&&(g=!1),m=m||16,r==="matrix")if((p=this._thinInstanceDataStorage.matrixBuffer)===null||p===void 0||p.dispose(),this._thinInstanceDataStorage.matrixBuffer=null,this._thinInstanceDataStorage.matrixBufferSize=o?o.length:32*m,this._thinInstanceDataStorage.matrixData=o,this._thinInstanceDataStorage.worldMatrices=null,o!==null){this._thinInstanceDataStorage.instancesCount=o.length/m;var s=new D.a(this.getEngine(),o,!g,m,!1,!0);this._thinInstanceDataStorage.matrixBuffer=s,this.setVerticesBuffer(s.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(s.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(s.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(s.createVertexBuffer("world3",12,4)),this.doNotSyncBoundingInfo||this.thinInstanceRefreshBoundingInfo(!1)}else this._thinInstanceDataStorage.instancesCount=0,this.doNotSyncBoundingInfo||this.refreshBoundingInfo(!0);else o===null?((f=this._userThinInstanceBuffersStorage)===null||f===void 0?void 0:f.data[r])&&(this.removeVerticesData(r),delete this._userThinInstanceBuffersStorage.data[r],delete this._userThinInstanceBuffersStorage.strides[r],delete this._userThinInstanceBuffersStorage.sizes[r],delete this._userThinInstanceBuffersStorage.vertexBuffers[r]):(this._thinInstanceInitializeUserStorage(),this._userThinInstanceBuffersStorage.data[r]=o,this._userThinInstanceBuffersStorage.strides[r]=m,this._userThinInstanceBuffersStorage.sizes[r]=o.length,this._userThinInstanceBuffersStorage.vertexBuffers[r]=new D.b(this.getEngine(),o,r,!g,!1,m,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[r]))},y.a.prototype.thinInstanceBufferUpdated=function(r){var o;r==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData,0,this._thinInstanceDataStorage.instancesCount):((o=this._userThinInstanceBuffersStorage)===null||o===void 0?void 0:o.vertexBuffers[r])&&this._userThinInstanceBuffersStorage.vertexBuffers[r].updateDirectly(this._userThinInstanceBuffersStorage.data[r],0)},y.a.prototype.thinInstancePartialBufferUpdate=function(r,o,m){var g;r==="matrix"?this._thinInstanceDataStorage.matrixBuffer&&this._thinInstanceDataStorage.matrixBuffer.updateDirectly(o,m):((g=this._userThinInstanceBuffersStorage)===null||g===void 0?void 0:g.vertexBuffers[r])&&this._userThinInstanceBuffersStorage.vertexBuffers[r].updateDirectly(o,m)},y.a.prototype.thinInstanceGetWorldMatrices=function(){if(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)return[];var r=this._thinInstanceDataStorage.matrixData;if(!this._thinInstanceDataStorage.worldMatrices){this._thinInstanceDataStorage.worldMatrices=new Array;for(var o=0;o<this._thinInstanceDataStorage.instancesCount;++o)this._thinInstanceDataStorage.worldMatrices[o]=I.a.FromArray(r,o*16)}return this._thinInstanceDataStorage.worldMatrices},y.a.prototype.thinInstanceRefreshBoundingInfo=function(r){if(r===void 0&&(r=!1),!(!this._thinInstanceDataStorage.matrixData||!this._thinInstanceDataStorage.matrixBuffer)){var o=this._thinInstanceDataStorage.boundingVectors;r&&(o.length=0,this.refreshBoundingInfo(!0));var m=this.getBoundingInfo(),g=this._thinInstanceDataStorage.matrixData;if(o.length===0)for(var p=0;p<m.boundingBox.vectors.length;++p)o.push(m.boundingBox.vectors[p].clone());I.c.Vector3[0].setAll(Number.POSITIVE_INFINITY),I.c.Vector3[1].setAll(Number.NEGATIVE_INFINITY);for(var f=0;f<this._thinInstanceDataStorage.instancesCount;++f){I.a.FromArrayToRef(g,f*16,I.c.Matrix[0]);for(var p=0;p<o.length;++p)I.e.TransformCoordinatesToRef(o[p],I.c.Matrix[0],I.c.Vector3[2]),I.c.Vector3[0].minimizeInPlace(I.c.Vector3[2]),I.c.Vector3[1].maximizeInPlace(I.c.Vector3[2])}m.reConstruct(I.c.Vector3[0],I.c.Vector3[1]),this._updateBoundingInfo()}},y.a.prototype._thinInstanceUpdateBufferSize=function(r,o){var m,g;o===void 0&&(o=1);var p=r==="matrix";if(!(!p&&(!this._userThinInstanceBuffersStorage||!this._userThinInstanceBuffersStorage.strides[r]))){for(var f=p?16:this._userThinInstanceBuffersStorage.strides[r],s=p?this._thinInstanceDataStorage.matrixBufferSize:this._userThinInstanceBuffersStorage.sizes[r],d=p?this._thinInstanceDataStorage.matrixData:this._userThinInstanceBuffersStorage.data[r],h=(this._thinInstanceDataStorage.instancesCount+o)*f,v=s;v<h;)v*=2;if(!d||s!=v){if(!d)d=new Float32Array(v);else{var R=new Float32Array(v);R.set(d,0),d=R}if(p){(m=this._thinInstanceDataStorage.matrixBuffer)===null||m===void 0||m.dispose();var U=new D.a(this.getEngine(),d,!0,f,!1,!0);this._thinInstanceDataStorage.matrixBuffer=U,this._thinInstanceDataStorage.matrixData=d,this._thinInstanceDataStorage.matrixBufferSize=v,this.setVerticesBuffer(U.createVertexBuffer("world0",0,4)),this.setVerticesBuffer(U.createVertexBuffer("world1",4,4)),this.setVerticesBuffer(U.createVertexBuffer("world2",8,4)),this.setVerticesBuffer(U.createVertexBuffer("world3",12,4))}else(g=this._userThinInstanceBuffersStorage.vertexBuffers[r])===null||g===void 0||g.dispose(),this._userThinInstanceBuffersStorage.data[r]=d,this._userThinInstanceBuffersStorage.sizes[r]=v,this._userThinInstanceBuffersStorage.vertexBuffers[r]=new D.b(this.getEngine(),d,r,!0,!1,f,!0),this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[r])}}},y.a.prototype._thinInstanceInitializeUserStorage=function(){this._userThinInstanceBuffersStorage||(this._userThinInstanceBuffersStorage={data:{},sizes:{},vertexBuffers:{},strides:{}})},y.a.prototype._disposeThinInstanceSpecificData=function(){var r;((r=this._thinInstanceDataStorage)===null||r===void 0?void 0:r.matrixBuffer)&&(this._thinInstanceDataStorage.matrixBuffer.dispose(),this._thinInstanceDataStorage.matrixBuffer=null)}},743:function(w,S,c){"use strict";c.d(S,"a",function(){return D});/*! *****************************************************************************
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
***************************************************************************** */var y=function(t,e){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(n[u]=a[u])},y(t,e)};function D(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");y(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var I=function(){return I=Object.assign||function(e){for(var n,a=1,u=arguments.length;a<u;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},I.apply(this,arguments)};function r(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(t);u<a.length;u++)e.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(t,a[u])&&(n[a[u]]=t[a[u]]);return n}function o(t,e,n,a){var u=arguments.length,i=u<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,a);else for(var B=t.length-1;B>=0;B--)(_=t[B])&&(i=(u<3?_(i):u>3?_(e,n,i):_(e,n))||i);return u>3&&i&&Object.defineProperty(e,n,i),i}function m(t,e){return function(n,a){e(n,a,t)}}function g(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function p(t,e,n,a){function u(i){return i instanceof n?i:new n(function(_){_(i)})}return new(n||(n=Promise))(function(i,_){function B(E){try{l(a.next(E))}catch(b){_(b)}}function x(E){try{l(a.throw(E))}catch(b){_(b)}}function l(E){E.done?i(E.value):u(E.value).then(B,x)}l((a=a.apply(t,e||[])).next())})}function f(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,u,i,_;return _={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function B(l){return function(E){return x([l,E])}}function x(l){if(a)throw new TypeError("Generator is already executing.");for(;n;)try{if(a=1,u&&(i=l[0]&2?u.return:l[0]?u.throw||((i=u.return)&&i.call(u),0):u.next)&&!(i=i.call(u,l[1])).done)return i;switch(u=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,u=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(E){l=[6,E],u=0}finally{a=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var s=Object.create?function(t,e,n,a){a===void 0&&(a=n),Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,a){a===void 0&&(a=n),t[a]=e[n]};function d(t,e){for(var n in t)n!=="default"&&!Object.prototype.hasOwnProperty.call(e,n)&&s(e,t,n)}function h(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],a=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var a=n.call(t),u,i=[],_;try{for(;(e===void 0||e-- >0)&&!(u=a.next()).done;)i.push(u.value)}catch(B){_={error:B}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(_)throw _.error}}return i}function R(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(v(arguments[e]));return t}function U(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var a=Array(t),u=0,e=0;e<n;e++)for(var i=arguments[e],_=0,B=i.length;_<B;_++,u++)a[u]=i[_];return a}function j(t,e){for(var n=0,a=e.length,u=t.length;n<a;n++,u++)t[u]=e[n];return t}function M(t){return this instanceof M?(this.v=t,this):new M(t)}function N(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=n.apply(t,e||[]),u,i=[];return u={},_("next"),_("throw"),_("return"),u[Symbol.asyncIterator]=function(){return this},u;function _(C){a[C]&&(u[C]=function(P){return new Promise(function(A,T){i.push([C,P,A,T])>1||B(C,P)})})}function B(C,P){try{x(a[C](P))}catch(A){b(i[0][3],A)}}function x(C){C.value instanceof M?Promise.resolve(C.value.v).then(l,E):b(i[0][2],C)}function l(C){B("next",C)}function E(C){B("throw",C)}function b(C,P){C(P),i.shift(),i.length&&B(i[0][0],i[0][1])}}function F(t){var e,n;return e={},a("next"),a("throw",function(u){throw u}),a("return"),e[Symbol.iterator]=function(){return this},e;function a(u,i){e[u]=t[u]?function(_){return(n=!n)?{value:M(t[u](_)),done:u==="return"}:i?i(_):_}:i}}function V(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof h=="function"?h(t):t[Symbol.iterator](),n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n);function a(i){n[i]=t[i]&&function(_){return new Promise(function(B,x){_=t[i](_),u(B,x,_.done,_.value)})}}function u(i,_,B,x){Promise.resolve(x).then(function(l){i({value:l,done:B})},_)}}function G(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var H=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function Z(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&s(e,t,n);return H(e,t),e}function W(t){return t&&t.__esModule?t:{default:t}}function z(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function L(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}},758:function(w,S,c){"use strict";c.d(S,"a",function(){return g});var y=c(743),D=c(435),I=c(455),r=c(437),o=function(){function p(){}return p}(),m=function(){function p(){}return p}(),g=function(p){Object(y.a)(f,p);function f(s,d){var h=p.call(this,s,d)||this;return h.CustomParts=new m,h.customShaderNameResolve=h.Builder,h.FragmentShader=D.a.ShadersStore.defaultPixelShader,h.VertexShader=D.a.ShadersStore.defaultVertexShader,h}return f.prototype.AttachAfterBind=function(s,d){if(this._newUniformInstances)for(var h in this._newUniformInstances){var v=h.toString().split("-");v[0]=="vec2"?d.setVector2(v[1],this._newUniformInstances[h]):v[0]=="vec3"?d.setVector3(v[1],this._newUniformInstances[h]):v[0]=="vec4"?d.setVector4(v[1],this._newUniformInstances[h]):v[0]=="mat4"?d.setMatrix(v[1],this._newUniformInstances[h]):v[0]=="float"&&d.setFloat(v[1],this._newUniformInstances[h])}if(this._newSamplerInstances)for(var h in this._newSamplerInstances){var v=h.toString().split("-");v[0]=="sampler2D"&&this._newSamplerInstances[h].isReady&&this._newSamplerInstances[h].isReady()&&d.setTexture(v[1],this._newSamplerInstances[h])}},f.prototype.ReviewUniform=function(s,d){if(s=="uniform"&&this._newUniforms)for(var h=0;h<this._newUniforms.length;h++)this._customUniform[h].indexOf("sampler")==-1&&d.push(this._newUniforms[h]);if(s=="sampler"&&this._newUniforms)for(var h=0;h<this._newUniforms.length;h++)this._customUniform[h].indexOf("sampler")!=-1&&d.push(this._newUniforms[h]);return d},f.prototype.Builder=function(s,d,h,v,R,U){var j=this;if(U&&this._customAttributes&&this._customAttributes.length>0&&U.push.apply(U,this._customAttributes),this.ReviewUniform("uniform",d),this.ReviewUniform("sampler",v),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,f.ShaderIndexer++;var M="custom_"+f.ShaderIndexer,N=this._afterBind.bind(this);return this._afterBind=function(F,V){if(!!V){j.AttachAfterBind(F,V);try{N(F,V)}catch(G){}}},D.a.ShadersStore[M+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(D.a.ShadersStore[M+"VertexShader"]=D.a.ShadersStore[M+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),D.a.ShadersStore[M+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:""),this.CustomParts.Fragment_Before_Fog&&(D.a.ShadersStore[M+"PixelShader"]=D.a.ShadersStore[M+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=M,M},f.prototype.AddUniform=function(s,d,h){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),h&&(d.indexOf("sampler")!=-1?this._newSamplerInstances[d+"-"+s]=h:this._newUniformInstances[d+"-"+s]=h),this._customUniform.push("uniform "+d+" "+s+";"),this._newUniforms.push(s),this},f.prototype.AddAttribute=function(s){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(s),this},f.prototype.Fragment_Begin=function(s){return this.CustomParts.Fragment_Begin=s,this},f.prototype.Fragment_Definitions=function(s){return this.CustomParts.Fragment_Definitions=s,this},f.prototype.Fragment_MainBegin=function(s){return this.CustomParts.Fragment_MainBegin=s,this},f.prototype.Fragment_Custom_Diffuse=function(s){return this.CustomParts.Fragment_Custom_Diffuse=s.replace("result","diffuseColor"),this},f.prototype.Fragment_Custom_Alpha=function(s){return this.CustomParts.Fragment_Custom_Alpha=s.replace("result","alpha"),this},f.prototype.Fragment_Before_Lights=function(s){return this.CustomParts.Fragment_Before_Lights=s,this},f.prototype.Fragment_Before_Fog=function(s){return this.CustomParts.Fragment_Before_Fog=s,this},f.prototype.Fragment_Before_FragColor=function(s){return this.CustomParts.Fragment_Before_FragColor=s.replace("result","color"),this},f.prototype.Vertex_Begin=function(s){return this.CustomParts.Vertex_Begin=s,this},f.prototype.Vertex_Definitions=function(s){return this.CustomParts.Vertex_Definitions=s,this},f.prototype.Vertex_MainBegin=function(s){return this.CustomParts.Vertex_MainBegin=s,this},f.prototype.Vertex_Before_PositionUpdated=function(s){return this.CustomParts.Vertex_Before_PositionUpdated=s.replace("result","positionUpdated"),this},f.prototype.Vertex_Before_NormalUpdated=function(s){return this.CustomParts.Vertex_Before_NormalUpdated=s.replace("result","normalUpdated"),this},f.prototype.Vertex_After_WorldPosComputed=function(s){return this.CustomParts.Vertex_After_WorldPosComputed=s,this},f.prototype.Vertex_MainEnd=function(s){return this.CustomParts.Vertex_MainEnd=s,this},f.ShaderIndexer=1,f}(I.a);r.a.RegisteredTypes["BABYLON.CustomMaterial"]=g},86:function(w,S,c){"use strict";c.r(S);var y=c(445),D=c(449),I=c(498),r=c(555),o=c(475),m=c(758),g=c(441),p=c(506),f=c(648),s=c(435),d=c(509),h=c(451),v=c(442),R=c(549),U=c(331),j=c(332),M=c(333),N=c(334),F=c(335),V=c(336),G=(W,z,L)=>new Promise((t,e)=>{var n=i=>{try{u(L.next(i))}catch(_){e(_)}},a=i=>{try{u(L.throw(i))}catch(_){e(_)}},u=i=>i.done?t(i.value):Promise.resolve(i.value).then(n,a);u((L=L.apply(W,z)).next())});const H={animate:!0,context:Object(R.a)()},Z=W=>G(void 0,[W],function*({canvas:z,width:L,height:t}){const e=new y.a(z,!0),n=90,a=1e3,u=n/a,i=10,_=100,B=+new Date;s.a.ShadersStore.backgroundVertexShader=V.default,s.a.ShadersStore.backgroundFragmentShader=F.default;const x=new D.a(e),l=new p.a("camera1",0,0,2,o.z.Zero(),x);l.mode=h.a.ORTHOGRAPHIC_CAMERA,l.orthoTop=1,l.orthoBottom=-1,l.orthoLeft=-1,l.orthoRight=1;const E=new d.a("shader",x,{vertex:"background",fragment:"background"},{attributes:["position","normal","uv"],uniforms:["world","worldView","worldViewProjection","view","iTime","iResolution"]});E.setVector2("iResolution",new o.y(1,1));const b=f.a.CreateGround("ground",{width:2,height:2,subdivisions:1},x);b.material=E,b.material.backFaceCulling=!1,b.rotation.y=-Math.PI/2,x.registerBeforeRender(()=>{const O=(+new Date-B)*.001;E.setFloat("iTime",O);const K=x.getEngine().getAspectRatio(l);E.setVector2("iResolution",new o.y(K,1))});const C=new D.a(e);C.autoClear=!1;const P=new p.a("camera",Math.PI/1.5,Math.PI/2+.4,60,new o.z(0,0,0),C);P.lowerBetaLimit=Math.PI/8,P.upperBetaLimit=Math.PI-Math.PI/8,P.lowerRadiusLimit=30,P.upperRadiusLimit=100,P.lowerAlphaLimit=null,P.upperAlphaLimit=null,P.allowUpsideDown=!0,P.allowUpsideDown=!0,P.attachControl(z,!0),P.fov=1,P.minZ=.1,P.useAutoRotationBehavior=!0,P.autoRotationBehavior.idleRotationSpeed=.02;const A=new I.a("hemiLight",new o.z(-1,1,0),C);A.intensity=1.5,A.diffuse=new g.a(1,1,1),A.specular=new g.a(1.25,1.25,1.25),A.groundColor=new g.a(.75,.75,.75);const T=new m.a("tubeMaterial",C);T.diffuseTexture=new v.a("NONE",C),T.diffuseColor=new g.a(138/255,155/255,168/255),T.specularColor=new g.a(0,0,0),T.freeze();const J=[];for(let O=0;O<a;O+=1)J.push(new o.z(0,(O-a/2)*u,0));const Y=f.a.CreateTube("tube",{path:J,radius:i,tessellation:_,updatable:!1});Y.material=T;const X=2,Q=new Float32Array(16*X),$=new Float32Array(X);for(let O=0;O<X;O+=1)o.k.Compose(new o.z(1,1,1),new o.r,new o.z).copyToArray(Q,16*O),$[O]=O;return Y.thinInstanceSetBuffer("matrix",Q,16,!0),Y.thinInstanceSetBuffer("idx",$,1,!0),T.AddAttribute("idx"),T.Vertex_Definitions(U.default),T.Vertex_Before_PositionUpdated(j.default),T.Fragment_Definitions(M.default),T.Fragment_Custom_Diffuse(N.default),T.AddUniform("iTime","float"),T.onBind=()=>{const O=(+new Date-B)*.001;T.getEffect().setFloat("iTime",O)},{render({time:O,width:K,height:q}){x.render(),C.render()},resize({pixelRatio:O,width:K,height:q}){e.resize()},unload(){e.dispose()}}});S.default={sketch:Z,settings:H}}}]);
