(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[102],{38:function(_,A,l){"use strict";l.r(A);var i=l(767),y=l.n(i),h=l(759),s=l.n(h);const u={dimensions:[512,512],animate:!0},v=({width:P,height:F})=>{const E=P*.1,b=o=>Object(i.lerp)(E,P-E,o),T=o=>Object(i.lerp)(E,F-E,o),g=.01,O=[];for(let o=0;o<1;o+=g){const m=[];for(let d=0;d<1;d+=g)m.push([d+s.a.range(-g,g),o+s.a.range(-g,g),s.a.range(.7,1),s.a.range(.9,1),s.a.value()]);O.push(m)}return({context:o,width:m,height:d,time:w})=>{w=w||0,o.fillStyle="hsl(0, 0%, 98%)",o.fillRect(0,0,m,d);for(const W of O)for(const p of W){const I=s.a.noise2D(p[0]+w/5,p[1],1.5)/2+.5,D=I*Math.PI*2*p[3],R=m*.05*p[2];o.beginPath(),o.lineWidth=(20+I*20)*m*5e-6*(p[4]>.5?1:1.18),o.moveTo(b(p[0]),T(p[1])),o.lineTo(b(p[0])+Math.cos(D)*R,T(p[1])+Math.sin(D)*R),o.stroke()}}};A.default={sketch:v,settings:u}},763:function(_,A){_.exports=l;function l(i,y,h){if(typeof y!="number"||typeof h!="number")throw new TypeError('Must specify "to" and "from" arguments as numbers');if(y>h){var s=y;y=h,h=s}var u=h-y;return u===0?h:i-u*Math.floor((i-y)/u)}},767:function(_,A,l){var i=l(705),y=l(763),h=Number.EPSILON;function s(r,e,n){return e<n?r<e?e:r>n?n:r:r<n?n:r>e?e:r}function u(r){return s(r,0,1)}function v(r,e,n){return r*(1-n)+e*n}function P(r,e,n){return Math.abs(r-e)<h?0:(n-r)/(e-r)}function F(r,e,n){var t=s(P(r,e,n),0,1);return t*t*(3-2*t)}function E(r,e){return e=i(e,0),typeof r=="number"&&isFinite(r)?r:e}function b(r){if(typeof r!="number")throw new TypeError("Expected dims argument");return function(e,n){n=i(n,0);var t;e==null?t=n:typeof e=="number"&&isFinite(e)&&(t=e);var a=[],f;if(t==null)for(f=0;f<r;f++)a[f]=E(e[f],n);else for(f=0;f<r;f++)a[f]=t;return a}}function T(r,e,n,t){if(t=t||[],r.length!==e.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<r.length;a++)t[a]=v(r[a],e[a],n);return t}function g(r,e){if(r=i(r,0),typeof r!="number")throw new TypeError("Expected n argument to be a number");for(var n=[],t=0;t<r;t++)n.push(e);return n}function O(r,e){if(r=i(r,0),typeof r!="number")throw new TypeError("Expected n argument to be a number");e=e||{},typeof e=="boolean"&&(e={endpoint:!0});var n=i(e.offset,0);return e.endpoint?g(r).map(function(t,a){return r<=1?0:(a+n)/(r-1)}):g(r).map(function(t,a){return(a+n)/r})}function o(r,e,n){e=s(e,0,1);var t=r.length-1,a=e*t,f=Math.floor(a),c=a-f,B=Math.min(f+1,t),L=r[f%r.length],M=r[B%r.length];if(typeof L=="number"&&typeof M=="number")return v(L,M,c);if(Array.isArray(L)&&Array.isArray(M))return T(L,M,c,n);throw new TypeError("Mismatch in value type of two array elements: "+f+" and "+B)}function m(r,e){return(r%e+e)%e}function d(r){return r*Math.PI/180}function w(r){return r*180/Math.PI}function W(r){return r-Math.floor(r)}function p(r){return r>0?1:r<0?-1:0}function I(r,e){return r=m(r,e*2),e-Math.abs(r-e)}function D(r,e,n,t){return v(r,e,1-Math.exp(-n*t))}function R(r,e,n,t,a){a=a||[];for(var f=0;f<r.length;f++)a[f]=D(r[f],e[f],n,t);return a}function C(r,e,n,t,a,f){if(Math.abs(e-n)<h)return t;var c=(r-e)/(n-e)*(a-t)+t;return f&&(a<t?c<a?c=a:c>t&&(c=t):c>a?c=a:c<t&&(c=t)),c}_.exports={mod:m,fract:W,sign:p,degToRad:d,radToDeg:w,wrap:y,pingPong:I,linspace:O,lerp:v,lerpArray:T,inverseLerp:P,lerpFrames:o,clamp:s,clamp01:u,smoothstep:F,damp:D,dampArray:R,mapRange:C,expand2D:b(2),expand3D:b(3),expand4D:b(4)}}}]);
