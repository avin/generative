(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[105],{48:function(T,A,p){"use strict";p.r(A);var o=p(767),y=p.n(o),i=p(759),h=p.n(i),l=Math.pow,w=(b,d,m)=>new Promise((u,_)=>{var P=s=>{try{g(m.next(s))}catch(E){_(E)}},v=s=>{try{g(m.throw(s))}catch(E){_(E)}},g=s=>s.done?u(s.value):Promise.resolve(s.value).then(P,v);g((m=m.apply(b,d)).next())});const D={animate:!0,dimensions:[2048,2048]},L=b=>w(void 0,[b],function*({width:d,height:m}){const u=d*.1,_=s=>Object(o.lerp)(u,d-u,s),P=s=>Object(o.lerp)(u,m-u,s),v=[],g=500;for(let s=0;s<g;s+=1)v.push({f:h.a.range(0,Math.PI),s:h.a.range(-.008,.008),r:h.a.range(1,3),a:h.a.range(.3,.95)});return({context:s,width:E,height:F,time:x})=>{s.fillStyle="hsla(0, 0%, 0%, 0.1)",s.fillRect(0,0,E,F);for(const{f:O,s:B,r:M,a:r}of v){s.fillStyle=`hsla(0, 0%, 98%, ${r})`;const e=.5,t=Math.tan(-x/10+O);let n=Math.sqrt(Math.abs(t));t<0&&(n*=-1);const a=e*((n+l(n,3))/(1+l(n,4)))+.5,f=e*((n-l(n,3))/(1+l(n,4)))+.5+B;s.fillRect(_(a),P(f),M,M)}}});A.default={sketch:L,settings:D}},763:function(T,A){T.exports=p;function p(o,y,i){if(typeof y!="number"||typeof i!="number")throw new TypeError('Must specify "to" and "from" arguments as numbers');if(y>i){var h=y;y=i,i=h}var l=i-y;return l===0?i:o-l*Math.floor((o-y)/l)}},767:function(T,A,p){var o=p(705),y=p(763),i=Number.EPSILON;function h(r,e,t){return e<t?r<e?e:r>t?t:r:r<t?t:r>e?e:r}function l(r){return h(r,0,1)}function w(r,e,t){return r*(1-t)+e*t}function D(r,e,t){return Math.abs(r-e)<i?0:(t-r)/(e-r)}function L(r,e,t){var n=h(D(r,e,t),0,1);return n*n*(3-2*n)}function b(r,e){return e=o(e,0),typeof r=="number"&&isFinite(r)?r:e}function d(r){if(typeof r!="number")throw new TypeError("Expected dims argument");return function(e,t){t=o(t,0);var n;e==null?n=t:typeof e=="number"&&isFinite(e)&&(n=e);var a=[],f;if(n==null)for(f=0;f<r;f++)a[f]=b(e[f],t);else for(f=0;f<r;f++)a[f]=n;return a}}function m(r,e,t,n){if(n=n||[],r.length!==e.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<r.length;a++)n[a]=w(r[a],e[a],t);return n}function u(r,e){if(r=o(r,0),typeof r!="number")throw new TypeError("Expected n argument to be a number");for(var t=[],n=0;n<r;n++)t.push(e);return t}function _(r,e){if(r=o(r,0),typeof r!="number")throw new TypeError("Expected n argument to be a number");e=e||{},typeof e=="boolean"&&(e={endpoint:!0});var t=o(e.offset,0);return e.endpoint?u(r).map(function(n,a){return r<=1?0:(a+t)/(r-1)}):u(r).map(function(n,a){return(a+t)/r})}function P(r,e,t){e=h(e,0,1);var n=r.length-1,a=e*n,f=Math.floor(a),c=a-f,C=Math.min(f+1,n),R=r[f%r.length],I=r[C%r.length];if(typeof R=="number"&&typeof I=="number")return w(R,I,c);if(Array.isArray(R)&&Array.isArray(I))return m(R,I,c,t);throw new TypeError("Mismatch in value type of two array elements: "+f+" and "+C)}function v(r,e){return(r%e+e)%e}function g(r){return r*Math.PI/180}function s(r){return r*180/Math.PI}function E(r){return r-Math.floor(r)}function F(r){return r>0?1:r<0?-1:0}function x(r,e){return r=v(r,e*2),e-Math.abs(r-e)}function O(r,e,t,n){return w(r,e,1-Math.exp(-t*n))}function B(r,e,t,n,a){a=a||[];for(var f=0;f<r.length;f++)a[f]=O(r[f],e[f],t,n);return a}function M(r,e,t,n,a,f){if(Math.abs(e-t)<i)return n;var c=(r-e)/(t-e)*(a-n)+n;return f&&(a<n?c<a?c=a:c>n&&(c=n):c>a?c=a:c<n&&(c=n)),c}T.exports={mod:v,fract:E,sign:F,degToRad:g,radToDeg:s,wrap:y,pingPong:x,linspace:_,lerp:w,lerpArray:m,inverseLerp:D,lerpFrames:P,clamp:h,clamp01:l,smoothstep:L,damp:O,dampArray:B,mapRange:M,expand2D:d(2),expand3D:d(3),expand4D:d(4)}}}]);
