(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[63,139,140],{260:function(R,A,d){"use strict";d.r(A),A.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/wdGSzt

#define PI		3.14159265359

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void rotate(in float angle, inout vec2 uv)
{
    float ca = cos(angle);
    float sa = sin(angle);
    uv *= mat2(ca, -sa, sa, ca);
}

float map(vec3 p)
{
    return length(mod(p, 2.0) - 1.0) - 1.375;
}

vec3 getNormal(vec3 p)
{
    float t = map(p);
    vec2 d = vec2(.5, 0.0);
    return normalize(vec3(t - map(p + d.xyy), t - map(p + d.yxy), t - map(p + d.yyx)));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord - iResolution.xy * 0.5) / iResolution.y;
    vec2 q = fragCoord.xy / iResolution.xy;

    rotate(iTime*.5, uv);

    float tZ = (sin(iTime) * 0.25 + 0.5) * 0.75 + .25;

    vec3 camDir = normalize(vec3(uv*5. , 1.1));

    // Compute the orientation of the camera
	float yawAngle = PI * (1.2 + 0.2 * cos (iTime * 0.5));
	float pitchAngle = PI * (0.1 * cos (iTime * 0.3) - 0.05);

	yawAngle += 4.0 * PI * iMouse.x / iResolution.x;
	pitchAngle += PI * 0.3 * (1.0 - iMouse.y / iResolution.y);

    float cosYaw = cos (yawAngle);
	float sinYaw = sin (yawAngle);
	float cosPitch = cos (pitchAngle);
	float sinPitch = sin (pitchAngle);

    mat3 cameraOrientation;
	cameraOrientation [0] = vec3 (cosYaw, 0.0, -sinYaw);
	cameraOrientation [1] = vec3 (sinYaw * sinPitch, cosPitch, cosYaw * sinPitch);
	cameraOrientation [2] = vec3 (sinYaw * cosPitch, -sinPitch, cosYaw * cosPitch);

	camDir = cameraOrientation * camDir;

    vec3 camPos = vec3(1.0, 1. , - iTime * 3.);

    float t = 0.0;
    for(int i = 0 ; i < 100; i += 1) {
        t += map(camDir * t + camPos);
    }
    vec3 surf = camDir * t + camPos;
    vec3 light = normalize(vec3(0.0, 0.0, 1.0)) ;
    vec3 normal = getNormal(surf);

    float cg = (camDir * t).x + (camDir * t).y + (camDir * t).z;

    vec3 col = hue(cg*.05 - iTime * .2 ).rgb * clamp(dot(light, normal), .25, 1.);

    // Border dark
    col *= 0.2 + 0.8 * pow(32.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.3);

    fragColor = vec4(col, 1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
`},261:function(R,A,d){"use strict";d.r(A),A.default=`#version 300 es
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
`},549:function(R,A,d){"use strict";d.d(A,"a",function(){return p});const E=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>E()?"webgl2":"webgl"},58:function(R,A,d){"use strict";d.r(A);var E=d(752),p=d.n(E),M=d(549),w=d(260),h=d(261);const C={context:Object(M.a)(),animate:!0},u=({gl:m,time:f,canvas:s})=>{let y=0,O=0,x=0;const I=P=>{if(x){const S=s.getBoundingClientRect();y=P.clientX-S.left,O=P.clientY-S.top}},F=P=>{x=1},D=P=>{x=0};s.addEventListener("mousemove",I),s.addEventListener("mousedown",F),s.addEventListener("mouseup",D),s.addEventListener("mouseleave",D);const W=p()({gl:m,frag:w.default,vert:h.default,uniforms:{iTime:({time:P})=>P,iMouse:P=>[y,O,x,x],iResolution:({width:P,height:S})=>[P,S,1]}}),T=W.unload;return W.unload=(...P)=>{T(...P),s.removeEventListener("mousemove",I),s.removeEventListener("mousedown",F),s.removeEventListener("mouseup",D),s.removeEventListener("mouseleave",D)},W};A.default={sketch:u,settings:C}},705:function(R,A){R.exports=function(){for(var d=0;d<arguments.length;d++)if(arguments[d]!==void 0)return arguments[d]}},752:function(R,A,d){var E=d(764),p=d(765),M=d(753),w=d(705);R.exports=h;function h(u){if(u=u||{},!u.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var m=u.gl,f={gl:m};typeof u.extensions!="undefined"&&(f.extensions=u.extensions),typeof u.optionalExtensions!="undefined"&&(f.optionalExtensions=u.optionalExtensions),typeof u.profile!="undefined"&&(f.profile=u.profile),typeof u.onDone!="undefined"&&(f.onDone=u.onDone);var s=E(f),y=p(),O=new Map,x=u.uniforms||{},I=Object.assign({},x);Object.keys(x).forEach(function(k){var L=x[k];typeof L=="function"?I[k]=function(V,K,H){var Y=L.call(x,K,H);if(C(Y))if(O.has(L)){var G=O.get(L);G(Y),Y=G}else{var U=s.texture(Y);O.set(L,U),Y=U}return Y}:C(L)?I[k]=s.texture(L):I[k]=L});var F;try{F=j()}catch(k){q(k)}var D=w(u.clearColor,"black");if(typeof D=="string"){var W=M(D);if(!W.rgb)throw new Error('Error parsing { clearColor } color string "'+D+'"');D=W.rgb.slice(0,3).map(function(k){return k/255})}else if(D&&(!Array.isArray(D)||D.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var T=w(u.clearAlpha,1),P=D?D.concat([T||0]):!1;return{render:function(k){s.poll(),P&&s.clear({color:P,depth:1,stencil:0}),S(k),m.flush()},regl:s,drawQuad:S,unload:function(){O.clear(),s.destroy()}};function S(k){if(k=k||{},F)try{F(k)}catch(L){q(L)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function j(){return s({scissor:u.scissor?{enable:!0,box:{x:s.prop("scissorX"),y:s.prop("scissorY"),width:s.prop("scissorWidth"),height:s.prop("scissorHeight")}}:!1,uniforms:I,frag:u.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:u.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:u.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function q(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function C(u){return u&&!Array.isArray(u)&&typeof u=="object"}},753:function(R,A,d){var E=d(754);R.exports=function(p){var M,w,h,C;if(M=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var u=M[1],m=u.replace(/a$/,""),f=m==="cmyk"?4:3;w=E[m],h=M[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,O){return/%$/.test(y)&&O===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),u===m&&h.push(1),C=h[f]===void 0?1:h[f],h=h.slice(0,f),w[m]=function(){return h}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var m=p.replace(/^#/,""),f=m.length;w=E.rgb,h=m.split(f===3?/(.)/:/(..)/),h=h.filter(Boolean).map(function(x){return f===3?parseInt(x+x,16):parseInt(x,16)}),C=1,w.rgb=function(){return h},h[0]||(h[0]=0),h[1]||(h[1]=0),h[2]||(h[2]=0)}else w=E.keyword,w.keyword=function(){return p},h=p,C=1;var s={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{s.rgb=w.rgb(h)}catch(y){}try{s.hsl=w.hsl(h)}catch(y){}try{s.hsv=w.hsv(h)}catch(y){}try{s.cmyk=w.cmyk(h)}catch(y){}try{s.keyword=w.keyword(h)}catch(y){}return s.rgb&&(s.hex="#"+s.rgb.map(function(y){var O=y.toString(16);return O.length===1?"0"+O:O}).join("")),s.rgb&&(s.rgba=s.rgb.concat(C)),s.hsl&&(s.hsla=s.hsl.concat(C)),s.hsv&&(s.hsva=s.hsv.concat(C)),s.cmyk&&(s.cmyka=s.cmyk.concat(C)),s}},754:function(R,A,d){var E=d(755),p=function(){return new u};for(var M in E){p[M+"Raw"]=function(m){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),E[m](f)}}(M);var w=/(\w+)2(\w+)/.exec(M),h=w[1],C=w[2];p[h]=p[h]||{},p[h][C]=p[M]=function(m){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var s=E[m](f);if(typeof s=="string"||s===void 0)return s;for(var y=0;y<s.length;y++)s[y]=Math.round(s[y]);return s}}(M)}var u=function(){this.convs={}};u.prototype.routeSpace=function(m,f){var s=f[0];return s===void 0?this.getValues(m):(typeof s=="number"&&(s=Array.prototype.slice.call(f)),this.setValues(m,s))},u.prototype.setValues=function(m,f){return this.space=m,this.convs={},this.convs[m]=f,this},u.prototype.getValues=function(m){var f=this.convs[m];if(!f){var s=this.space,y=this.convs[s];f=p[s][m](y),this.convs[m]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(m){u.prototype[m]=function(f){return this.routeSpace(m,arguments)}}),R.exports=p},755:function(R,A){R.exports={rgb2hsl:d,rgb2hsv:E,rgb2hwb:p,rgb2cmyk:M,rgb2keyword:w,rgb2xyz:h,rgb2lab:C,rgb2lch:u,hsl2rgb:m,hsl2hsv:f,hsl2hwb:s,hsl2cmyk:y,hsl2keyword:O,hsv2rgb:x,hsv2hsl:I,hsv2hwb:F,hsv2cmyk:D,hsv2keyword:W,hwb2rgb:T,hwb2hsl:P,hwb2hsv:S,hwb2cmyk:j,hwb2keyword:q,cmyk2rgb:k,cmyk2hsl:L,cmyk2hsv:V,cmyk2hwb:K,cmyk2keyword:H,keyword2rgb:B,keyword2hsl:re,keyword2hsv:te,keyword2hwb:oe,keyword2cmyk:ie,keyword2lab:ae,keyword2xyz:le,xyz2rgb:Y,xyz2lab:G,xyz2lch:U,lab2xyz:N,lab2rgb:X,lab2lch:Q,lch2lab:$,lch2xyz:ee,lch2rgb:ne};function d(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,i=Math.min(l,t,n),o=Math.max(l,t,n),a=o-i,c,v,z;return o==i?c=0:l==o?c=(t-n)/a:t==o?c=2+(n-l)/a:n==o&&(c=4+(l-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),z=(i+o)/2,o==i?v=0:z<=.5?v=a/(o+i):v=a/(2-o-i),[c,v*100,z*100]}function E(e){var l=e[0],t=e[1],n=e[2],i=Math.min(l,t,n),o=Math.max(l,t,n),a=o-i,c,v,z;return o==0?v=0:v=a/o*1e3/10,o==i?c=0:l==o?c=(t-n)/a:t==o?c=2+(n-l)/a:n==o&&(c=4+(l-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),z=o/255*1e3/10,[c,v,z]}function p(e){var l=e[0],t=e[1],n=e[2],i=d(e)[0],o=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[i,o*100,n*100]}function M(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,i,o,a,c;return c=Math.min(1-l,1-t,1-n),i=(1-l-c)/(1-c)||0,o=(1-t-c)/(1-c)||0,a=(1-n-c)/(1-c)||0,[i*100,o*100,a*100,c*100]}function w(e){return _[JSON.stringify(e)]}function h(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var i=l*.4124+t*.3576+n*.1805,o=l*.2126+t*.7152+n*.0722,a=l*.0193+t*.1192+n*.9505;return[i*100,o*100,a*100]}function C(e){var l=h(e),t=l[0],n=l[1],i=l[2],o,a,c;return t/=95.047,n/=100,i/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,o=116*n-16,a=500*(t-n),c=200*(n-i),[o,a,c]}function u(e){return Q(C(e))}function m(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,i,o,a,c,v;if(t==0)return v=n*255,[v,v,v];n<.5?o=n*(1+t):o=n+t-n*t,i=2*n-o,c=[0,0,0];for(var z=0;z<3;z++)a=l+1/3*-(z-1),a<0&&a++,a>1&&a--,6*a<1?v=i+(o-i)*6*a:2*a<1?v=o:3*a<2?v=i+(o-i)*(2/3-a)*6:v=i,c[z]=v*255;return c}function f(e){var l=e[0],t=e[1]/100,n=e[2]/100,i,o;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,o=(n+t)/2,i=2*t/(n+t),[l,i*100,o*100])}function s(e){return p(m(e))}function y(e){return M(m(e))}function O(e){return w(m(e))}function x(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,i=Math.floor(l)%6,o=l-Math.floor(l),a=255*n*(1-t),c=255*n*(1-t*o),v=255*n*(1-t*(1-o)),n=255*n;switch(i){case 0:return[n,v,a];case 1:return[c,n,a];case 2:return[a,n,v];case 3:return[a,c,n];case 4:return[v,a,n];case 5:return[n,a,c]}}function I(e){var l=e[0],t=e[1]/100,n=e[2]/100,i,o;return o=(2-t)*n,i=t*n,i/=o<=1?o:2-o,i=i||0,o/=2,[l,i*100,o*100]}function F(e){return p(x(e))}function D(e){return M(x(e))}function W(e){return w(x(e))}function T(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,i=t+n,o,a,c,v;switch(i>1&&(t/=i,n/=i),o=Math.floor(6*l),a=1-n,c=6*l-o,(o&1)!=0&&(c=1-c),v=t+c*(a-t),o){default:case 6:case 0:r=a,g=v,b=t;break;case 1:r=v,g=a,b=t;break;case 2:r=t,g=a,b=v;break;case 3:r=t,g=v,b=a;break;case 4:r=v,g=t,b=a;break;case 5:r=a,g=t,b=v;break}return[r*255,g*255,b*255]}function P(e){return d(T(e))}function S(e){return E(T(e))}function j(e){return M(T(e))}function q(e){return w(T(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,i=e[3]/100,o,a,c;return o=1-Math.min(1,l*(1-i)+i),a=1-Math.min(1,t*(1-i)+i),c=1-Math.min(1,n*(1-i)+i),[o*255,a*255,c*255]}function L(e){return d(k(e))}function V(e){return E(k(e))}function K(e){return p(k(e))}function H(e){return w(k(e))}function Y(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,i,o,a;return i=l*3.2406+t*-1.5372+n*-.4986,o=l*-.9689+t*1.8758+n*.0415,a=l*.0557+t*-.204+n*1.057,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[i*255,o*255,a*255]}function G(e){var l=e[0],t=e[1],n=e[2],i,o,a;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=116*t-16,o=500*(l-t),a=200*(t-n),[i,o,a]}function U(e){return Q(G(e))}function N(e){var l=e[0],t=e[1],n=e[2],i,o,a,c;return l<=8?(o=l*100/903.3,c=7.787*(o/100)+16/116):(o=100*Math.pow((l+16)/116,3),c=Math.pow(o/100,1/3)),i=i/95.047<=.008856?i=95.047*(t/500+c-16/116)/7.787:95.047*Math.pow(t/500+c,3),a=a/108.883<=.008859?a=108.883*(c-n/200-16/116)/7.787:108.883*Math.pow(c-n/200,3),[i,o,a]}function Q(e){var l=e[0],t=e[1],n=e[2],i,o,a;return i=Math.atan2(n,t),o=i*360/2/Math.PI,o<0&&(o+=360),a=Math.sqrt(t*t+n*n),[l,a,o]}function X(e){return Y(N(e))}function $(e){var l=e[0],t=e[1],n=e[2],i,o,a;return a=n/360*2*Math.PI,i=t*Math.cos(a),o=t*Math.sin(a),[l,i,o]}function ee(e){return N($(e))}function ne(e){return X($(e))}function B(e){return J[e]}function re(e){return d(B(e))}function te(e){return E(B(e))}function oe(e){return p(B(e))}function ie(e){return M(B(e))}function ae(e){return C(B(e))}function le(e){return h(B(e))}var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},_={};for(var Z in J)_[JSON.stringify(J[Z])]=Z}}]);
