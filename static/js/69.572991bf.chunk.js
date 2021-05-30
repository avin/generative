(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[69,161,162],{282:function(E,z,d){"use strict";d.r(z),z.default=`#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#define GLSLIFY 1
#endif
#define HW_PERFORMANCE 1
uniform vec3      iResolution;
uniform float     iTime;
uniform float     iChannelTime[4];
uniform vec4      iMouse;
uniform vec4      iDate;
uniform float     iSampleRate;
uniform vec3      iChannelResolution[4];
uniform int       iFrame;
uniform float     iTimeDelta;
uniform float     iFrameRate;
struct Channel {
    vec3  resolution;
    float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage( out vec4 c, in vec2 f );

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/3d33RN

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;

    float f1 = iResolution.y/50.;
    float f2 = iResolution.y/175.;

    float s = snoise(vec3(uv*f2, iTime*1.25));
    s += length(uv)*f1 - iTime*2.;
    float m = smoothstep(0.25, .0, abs( fract(s) - .25 ) );

    fragColor = vec4(hue(s + length(uv) - iTime*.5)) * m;
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
`},283:function(E,z,d){"use strict";d.r(z),z.default=`#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#define GLSLIFY 1
#endif
layout(location = 0) in vec3 position;
void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`},549:function(E,z,d){"use strict";d.d(z,"a",function(){return p});const M=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>M()?"webgl2":"webgl"},705:function(E,z){E.exports=function(){for(var d=0;d<arguments.length;d++)if(arguments[d]!==void 0)return arguments[d]}},71:function(E,z,d){"use strict";d.r(z);var M=d(752),p=d.n(M),k=d(549),x=d(282),h=d(283);const C={context:Object(k.a)(),animate:!0},u=({gl:v,time:f})=>p()({gl:v,frag:x.default,vert:h.default,uniforms:{iTime:({time:l})=>l,iResolution:({width:l,height:y})=>[l,y,1]}});z.default={sketch:u,settings:C}},752:function(E,z,d){var M=d(764),p=d(765),k=d(753),x=d(705);E.exports=h;function h(u){if(u=u||{},!u.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var v=u.gl,f={gl:v};typeof u.extensions!="undefined"&&(f.extensions=u.extensions),typeof u.optionalExtensions!="undefined"&&(f.optionalExtensions=u.optionalExtensions),typeof u.profile!="undefined"&&(f.profile=u.profile),typeof u.onDone!="undefined"&&(f.onDone=u.onDone);var l=M(f),y=p(),A=new Map,D=u.uniforms||{},P=Object.assign({},D);Object.keys(D).forEach(function(w){var R=D[w];typeof R=="function"?P[w]=function(J,K,U){var S=R.call(D,K,U);if(C(S))if(A.has(R)){var F=A.get(R);F(S),S=F}else{var N=l.texture(S);A.set(R,N),S=N}return S}:C(R)?P[w]=l.texture(R):P[w]=R});var j;try{j=q()}catch(w){B(w)}var O=x(u.clearColor,"black");if(typeof O=="string"){var G=k(O);if(!G.rgb)throw new Error('Error parsing { clearColor } color string "'+O+'"');O=G.rgb.slice(0,3).map(function(w){return w/255})}else if(O&&(!Array.isArray(O)||O.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var T=x(u.clearAlpha,1),W=O?O.concat([T||0]):!1;return{render:function(w){l.poll(),W&&l.clear({color:W,depth:1,stencil:0}),_(w),v.flush()},regl:l,drawQuad:_,unload:function(){A.clear(),l.destroy()}};function _(w){if(w=w||{},j)try{j(w)}catch(R){B(R)&&w==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function q(){return l({scissor:u.scissor?{enable:!0,box:{x:l.prop("scissorX"),y:l.prop("scissorY"),width:l.prop("scissorWidth"),height:l.prop("scissorHeight")}}:!1,uniforms:P,frag:u.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:u.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:u.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function B(w){if(/^\(regl\)/.test(w.message))return!0;throw w}}function C(u){return u&&!Array.isArray(u)&&typeof u=="object"}},753:function(E,z,d){var M=d(754);E.exports=function(p){var k,x,h,C;if(k=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var u=k[1],v=u.replace(/a$/,""),f=v==="cmyk"?4:3;x=M[v],h=k[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,A){return/%$/.test(y)&&A===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),u===v&&h.push(1),C=h[f]===void 0?1:h[f],h=h.slice(0,f),x[v]=function(){return h}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var v=p.replace(/^#/,""),f=v.length;x=M.rgb,h=v.split(f===3?/(.)/:/(..)/),h=h.filter(Boolean).map(function(D){return f===3?parseInt(D+D,16):parseInt(D,16)}),C=1,x.rgb=function(){return h},h[0]||(h[0]=0),h[1]||(h[1]=0),h[2]||(h[2]=0)}else x=M.keyword,x.keyword=function(){return p},h=p,C=1;var l={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{l.rgb=x.rgb(h)}catch(y){}try{l.hsl=x.hsl(h)}catch(y){}try{l.hsv=x.hsv(h)}catch(y){}try{l.cmyk=x.cmyk(h)}catch(y){}try{l.keyword=x.keyword(h)}catch(y){}return l.rgb&&(l.hex="#"+l.rgb.map(function(y){var A=y.toString(16);return A.length===1?"0"+A:A}).join("")),l.rgb&&(l.rgba=l.rgb.concat(C)),l.hsl&&(l.hsla=l.hsl.concat(C)),l.hsv&&(l.hsva=l.hsv.concat(C)),l.cmyk&&(l.cmyka=l.cmyk.concat(C)),l}},754:function(E,z,d){var M=d(755),p=function(){return new u};for(var k in M){p[k+"Raw"]=function(v){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),M[v](f)}}(k);var x=/(\w+)2(\w+)/.exec(k),h=x[1],C=x[2];p[h]=p[h]||{},p[h][C]=p[k]=function(v){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var l=M[v](f);if(typeof l=="string"||l===void 0)return l;for(var y=0;y<l.length;y++)l[y]=Math.round(l[y]);return l}}(k)}var u=function(){this.convs={}};u.prototype.routeSpace=function(v,f){var l=f[0];return l===void 0?this.getValues(v):(typeof l=="number"&&(l=Array.prototype.slice.call(f)),this.setValues(v,l))},u.prototype.setValues=function(v,f){return this.space=v,this.convs={},this.convs[v]=f,this},u.prototype.getValues=function(v){var f=this.convs[v];if(!f){var l=this.space,y=this.convs[l];f=p[l][v](y),this.convs[v]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(v){u.prototype[v]=function(f){return this.routeSpace(v,arguments)}}),E.exports=p},755:function(E,z){E.exports={rgb2hsl:d,rgb2hsv:M,rgb2hwb:p,rgb2cmyk:k,rgb2keyword:x,rgb2xyz:h,rgb2lab:C,rgb2lch:u,hsl2rgb:v,hsl2hsv:f,hsl2hwb:l,hsl2cmyk:y,hsl2keyword:A,hsv2rgb:D,hsv2hsl:P,hsv2hwb:j,hsv2cmyk:O,hsv2keyword:G,hwb2rgb:T,hwb2hsl:W,hwb2hsv:_,hwb2cmyk:q,hwb2keyword:B,cmyk2rgb:w,cmyk2hsl:R,cmyk2hsv:J,cmyk2hwb:K,cmyk2keyword:U,keyword2rgb:I,keyword2hsl:re,keyword2hsv:te,keyword2hwb:oe,keyword2cmyk:ie,keyword2lab:ae,keyword2xyz:se,xyz2rgb:S,xyz2lab:F,xyz2lch:N,lab2xyz:H,lab2rgb:V,lab2lch:Q,lch2lab:Y,lch2xyz:ee,lch2rgb:ne};function d(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,i=Math.min(s,t,n),o=Math.max(s,t,n),a=o-i,c,m,L;return o==i?c=0:s==o?c=(t-n)/a:t==o?c=2+(n-s)/a:n==o&&(c=4+(s-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),L=(i+o)/2,o==i?m=0:L<=.5?m=a/(o+i):m=a/(2-o-i),[c,m*100,L*100]}function M(e){var s=e[0],t=e[1],n=e[2],i=Math.min(s,t,n),o=Math.max(s,t,n),a=o-i,c,m,L;return o==0?m=0:m=a/o*1e3/10,o==i?c=0:s==o?c=(t-n)/a:t==o?c=2+(n-s)/a:n==o&&(c=4+(s-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),L=o/255*1e3/10,[c,m,L]}function p(e){var s=e[0],t=e[1],n=e[2],i=d(e)[0],o=1/255*Math.min(s,Math.min(t,n)),n=1-1/255*Math.max(s,Math.max(t,n));return[i,o*100,n*100]}function k(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,i,o,a,c;return c=Math.min(1-s,1-t,1-n),i=(1-s-c)/(1-c)||0,o=(1-t-c)/(1-c)||0,a=(1-n-c)/(1-c)||0,[i*100,o*100,a*100,c*100]}function x(e){return X[JSON.stringify(e)]}function h(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255;s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var i=s*.4124+t*.3576+n*.1805,o=s*.2126+t*.7152+n*.0722,a=s*.0193+t*.1192+n*.9505;return[i*100,o*100,a*100]}function C(e){var s=h(e),t=s[0],n=s[1],i=s[2],o,a,c;return t/=95.047,n/=100,i/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,o=116*n-16,a=500*(t-n),c=200*(n-i),[o,a,c]}function u(e){return Q(C(e))}function v(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,i,o,a,c,m;if(t==0)return m=n*255,[m,m,m];n<.5?o=n*(1+t):o=n+t-n*t,i=2*n-o,c=[0,0,0];for(var L=0;L<3;L++)a=s+1/3*-(L-1),a<0&&a++,a>1&&a--,6*a<1?m=i+(o-i)*6*a:2*a<1?m=o:3*a<2?m=i+(o-i)*(2/3-a)*6:m=i,c[L]=m*255;return c}function f(e){var s=e[0],t=e[1]/100,n=e[2]/100,i,o;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,o=(n+t)/2,i=2*t/(n+t),[s,i*100,o*100])}function l(e){return p(v(e))}function y(e){return k(v(e))}function A(e){return x(v(e))}function D(e){var s=e[0]/60,t=e[1]/100,n=e[2]/100,i=Math.floor(s)%6,o=s-Math.floor(s),a=255*n*(1-t),c=255*n*(1-t*o),m=255*n*(1-t*(1-o)),n=255*n;switch(i){case 0:return[n,m,a];case 1:return[c,n,a];case 2:return[a,n,m];case 3:return[a,c,n];case 4:return[m,a,n];case 5:return[n,a,c]}}function P(e){var s=e[0],t=e[1]/100,n=e[2]/100,i,o;return o=(2-t)*n,i=t*n,i/=o<=1?o:2-o,i=i||0,o/=2,[s,i*100,o*100]}function j(e){return p(D(e))}function O(e){return k(D(e))}function G(e){return x(D(e))}function T(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,i=t+n,o,a,c,m;switch(i>1&&(t/=i,n/=i),o=Math.floor(6*s),a=1-n,c=6*s-o,(o&1)!=0&&(c=1-c),m=t+c*(a-t),o){default:case 6:case 0:r=a,g=m,b=t;break;case 1:r=m,g=a,b=t;break;case 2:r=t,g=a,b=m;break;case 3:r=t,g=m,b=a;break;case 4:r=m,g=t,b=a;break;case 5:r=a,g=t,b=m;break}return[r*255,g*255,b*255]}function W(e){return d(T(e))}function _(e){return M(T(e))}function q(e){return k(T(e))}function B(e){return x(T(e))}function w(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,i=e[3]/100,o,a,c;return o=1-Math.min(1,s*(1-i)+i),a=1-Math.min(1,t*(1-i)+i),c=1-Math.min(1,n*(1-i)+i),[o*255,a*255,c*255]}function R(e){return d(w(e))}function J(e){return M(w(e))}function K(e){return p(w(e))}function U(e){return x(w(e))}function S(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,i,o,a;return i=s*3.2406+t*-1.5372+n*-.4986,o=s*-.9689+t*1.8758+n*.0415,a=s*.0557+t*-.204+n*1.057,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[i*255,o*255,a*255]}function F(e){var s=e[0],t=e[1],n=e[2],i,o,a;return s/=95.047,t/=100,n/=108.883,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=116*t-16,o=500*(s-t),a=200*(t-n),[i,o,a]}function N(e){return Q(F(e))}function H(e){var s=e[0],t=e[1],n=e[2],i,o,a,c;return s<=8?(o=s*100/903.3,c=7.787*(o/100)+16/116):(o=100*Math.pow((s+16)/116,3),c=Math.pow(o/100,1/3)),i=i/95.047<=.008856?i=95.047*(t/500+c-16/116)/7.787:95.047*Math.pow(t/500+c,3),a=a/108.883<=.008859?a=108.883*(c-n/200-16/116)/7.787:108.883*Math.pow(c-n/200,3),[i,o,a]}function Q(e){var s=e[0],t=e[1],n=e[2],i,o,a;return i=Math.atan2(n,t),o=i*360/2/Math.PI,o<0&&(o+=360),a=Math.sqrt(t*t+n*n),[s,a,o]}function V(e){return S(H(e))}function Y(e){var s=e[0],t=e[1],n=e[2],i,o,a;return a=n/360*2*Math.PI,i=t*Math.cos(a),o=t*Math.sin(a),[s,i,o]}function ee(e){return H(Y(e))}function ne(e){return V(Y(e))}function I(e){return $[e]}function re(e){return d(I(e))}function te(e){return M(I(e))}function oe(e){return p(I(e))}function ie(e){return k(I(e))}function ae(e){return C(I(e))}function se(e){return h(I(e))}var $={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},X={};for(var Z in $)X[JSON.stringify($[Z])]=Z}}]);
