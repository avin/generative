(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[74,307,308],{118:function(z,C,v){"use strict";v.r(C);var x=v(752),p=v.n(x),M=v(549),w=v(422),h=v(423);const E={context:Object(M.a)(),animate:!0},c=({gl:d,time:f})=>p()({gl:d,frag:w.default,vert:h.default,uniforms:{iTime:({time:s})=>s,iResolution:({width:s,height:y})=>[s,y,1]}});C.default={sketch:c,settings:E}},422:function(z,C,v){"use strict";v.r(C),C.default=`#version 300 es
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
void mainImage(out vec4 c, in vec2 f);

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/stXGRS

#define PI 3.1415926
#define PI2 6.2831852

#define SF 1./min(iResolution.x,iResolution.y)
#define SS(l,s) smoothstep(SF,-SF,l-s)

#define MOD3 vec3(.1031, .11369, .13787)

vec3 hash33(vec3 p3)
{
    p3 = fract(p3 * MOD3);
    p3 += dot(p3, p3.yxz + 19.19);
    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}

float snoise(vec3 p)
{
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
    vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

    return dot(vec4(31.316), n);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord - iResolution.xy * 0.5) / iResolution.y;

    float l = length(uv);

    float result = 0.;

    for(float i=0.; i<30.; i+=1.){
        float zn = .25 + i*.005 + snoise(vec3(uv*i*.5, 10. + iTime*.25))*i*.005;
        float d = SS(l, zn) * SS(zn, l);
        result += d;
    }

    fragColor = vec4(vec3(result), 1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage(color, gl_FragCoord.xy);
    color.w = 1.0;
    outColor = color;
}
`},423:function(z,C,v){"use strict";v.r(C),C.default=`#version 300 es
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
`},549:function(z,C,v){"use strict";v.d(C,"a",function(){return p});const x=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>x()?"webgl2":"webgl"},705:function(z,C){z.exports=function(){for(var v=0;v<arguments.length;v++)if(arguments[v]!==void 0)return arguments[v]}},752:function(z,C,v){var x=v(764),p=v(765),M=v(753),w=v(705);z.exports=h;function h(c){if(c=c||{},!c.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=c.gl,f={gl:d};typeof c.extensions!="undefined"&&(f.extensions=c.extensions),typeof c.optionalExtensions!="undefined"&&(f.optionalExtensions=c.optionalExtensions),typeof c.profile!="undefined"&&(f.profile=c.profile),typeof c.onDone!="undefined"&&(f.onDone=c.onDone);var s=x(f),y=p(),R=new Map,D=c.uniforms||{},F=Object.assign({},D);Object.keys(D).forEach(function(k){var S=D[k];typeof S=="function"?F[k]=function(V,Q,Y){var P=S.call(D,Q,Y);if(E(P))if(R.has(S)){var T=R.get(S);T(P),P=T}else{var U=s.texture(P);R.set(S,U),P=U}return P}:E(S)?F[k]=s.texture(S):F[k]=S});var K;try{K=H()}catch(k){B(k)}var O=w(c.clearColor,"black");if(typeof O=="string"){var W=M(O);if(!W.rgb)throw new Error('Error parsing { clearColor } color string "'+O+'"');O=W.rgb.slice(0,3).map(function(k){return k/255})}else if(O&&(!Array.isArray(O)||O.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var I=w(c.clearAlpha,1),G=O?O.concat([I||0]):!1;return{render:function(k){s.poll(),G&&s.clear({color:G,depth:1,stencil:0}),j(k),d.flush()},regl:s,drawQuad:j,unload:function(){R.clear(),s.destroy()}};function j(k){if(k=k||{},K)try{K(k)}catch(S){B(S)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function H(){return s({scissor:c.scissor?{enable:!0,box:{x:s.prop("scissorX"),y:s.prop("scissorY"),width:s.prop("scissorWidth"),height:s.prop("scissorHeight")}}:!1,uniforms:F,frag:c.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:c.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:c.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function B(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(c){return c&&!Array.isArray(c)&&typeof c=="object"}},753:function(z,C,v){var x=v(754);z.exports=function(p){var M,w,h,E;if(M=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var c=M[1],d=c.replace(/a$/,""),f=d==="cmyk"?4:3;w=x[d],h=M[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,R){return/%$/.test(y)&&R===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),c===d&&h.push(1),E=h[f]===void 0?1:h[f],h=h.slice(0,f),w[d]=function(){return h}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var d=p.replace(/^#/,""),f=d.length;w=x.rgb,h=d.split(f===3?/(.)/:/(..)/),h=h.filter(Boolean).map(function(D){return f===3?parseInt(D+D,16):parseInt(D,16)}),E=1,w.rgb=function(){return h},h[0]||(h[0]=0),h[1]||(h[1]=0),h[2]||(h[2]=0)}else w=x.keyword,w.keyword=function(){return p},h=p,E=1;var s={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{s.rgb=w.rgb(h)}catch(y){}try{s.hsl=w.hsl(h)}catch(y){}try{s.hsv=w.hsv(h)}catch(y){}try{s.cmyk=w.cmyk(h)}catch(y){}try{s.keyword=w.keyword(h)}catch(y){}return s.rgb&&(s.hex="#"+s.rgb.map(function(y){var R=y.toString(16);return R.length===1?"0"+R:R}).join("")),s.rgb&&(s.rgba=s.rgb.concat(E)),s.hsl&&(s.hsla=s.hsl.concat(E)),s.hsv&&(s.hsva=s.hsv.concat(E)),s.cmyk&&(s.cmyka=s.cmyk.concat(E)),s}},754:function(z,C,v){var x=v(755),p=function(){return new c};for(var M in x){p[M+"Raw"]=function(d){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),x[d](f)}}(M);var w=/(\w+)2(\w+)/.exec(M),h=w[1],E=w[2];p[h]=p[h]||{},p[h][E]=p[M]=function(d){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var s=x[d](f);if(typeof s=="string"||s===void 0)return s;for(var y=0;y<s.length;y++)s[y]=Math.round(s[y]);return s}}(M)}var c=function(){this.convs={}};c.prototype.routeSpace=function(d,f){var s=f[0];return s===void 0?this.getValues(d):(typeof s=="number"&&(s=Array.prototype.slice.call(f)),this.setValues(d,s))},c.prototype.setValues=function(d,f){return this.space=d,this.convs={},this.convs[d]=f,this},c.prototype.getValues=function(d){var f=this.convs[d];if(!f){var s=this.space,y=this.convs[s];f=p[s][d](y),this.convs[d]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){c.prototype[d]=function(f){return this.routeSpace(d,arguments)}}),z.exports=p},755:function(z,C){z.exports={rgb2hsl:v,rgb2hsv:x,rgb2hwb:p,rgb2cmyk:M,rgb2keyword:w,rgb2xyz:h,rgb2lab:E,rgb2lch:c,hsl2rgb:d,hsl2hsv:f,hsl2hwb:s,hsl2cmyk:y,hsl2keyword:R,hsv2rgb:D,hsv2hsl:F,hsv2hwb:K,hsv2cmyk:O,hsv2keyword:W,hwb2rgb:I,hwb2hsl:G,hwb2hsv:j,hwb2cmyk:H,hwb2keyword:B,cmyk2rgb:k,cmyk2hsl:S,cmyk2hsv:V,cmyk2hwb:Q,cmyk2keyword:Y,keyword2rgb:L,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ie,keyword2cmyk:oe,keyword2lab:ae,keyword2xyz:le,xyz2rgb:P,xyz2lab:T,xyz2lch:U,lab2xyz:$,lab2rgb:_,lab2lch:q,lch2lab:J,lch2xyz:ee,lch2rgb:ne};function v(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(l,t,n),i=Math.max(l,t,n),a=i-o,u,m,A;return i==o?u=0:l==i?u=(t-n)/a:t==i?u=2+(n-l)/a:n==i&&(u=4+(l-t)/a),u=Math.min(u*60,360),u<0&&(u+=360),A=(o+i)/2,i==o?m=0:A<=.5?m=a/(i+o):m=a/(2-i-o),[u,m*100,A*100]}function x(e){var l=e[0],t=e[1],n=e[2],o=Math.min(l,t,n),i=Math.max(l,t,n),a=i-o,u,m,A;return i==0?m=0:m=a/i*1e3/10,i==o?u=0:l==i?u=(t-n)/a:t==i?u=2+(n-l)/a:n==i&&(u=4+(l-t)/a),u=Math.min(u*60,360),u<0&&(u+=360),A=i/255*1e3/10,[u,m,A]}function p(e){var l=e[0],t=e[1],n=e[2],o=v(e)[0],i=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[o,i*100,n*100]}function M(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o,i,a,u;return u=Math.min(1-l,1-t,1-n),o=(1-l-u)/(1-u)||0,i=(1-t-u)/(1-u)||0,a=(1-n-u)/(1-u)||0,[o*100,i*100,a*100,u*100]}function w(e){return X[JSON.stringify(e)]}function h(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=l*.4124+t*.3576+n*.1805,i=l*.2126+t*.7152+n*.0722,a=l*.0193+t*.1192+n*.9505;return[o*100,i*100,a*100]}function E(e){var l=h(e),t=l[0],n=l[1],o=l[2],i,a,u;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=116*n-16,a=500*(t-n),u=200*(n-o),[i,a,u]}function c(e){return q(E(e))}function d(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o,i,a,u,m;if(t==0)return m=n*255,[m,m,m];n<.5?i=n*(1+t):i=n+t-n*t,o=2*n-i,u=[0,0,0];for(var A=0;A<3;A++)a=l+1/3*-(A-1),a<0&&a++,a>1&&a--,6*a<1?m=o+(i-o)*6*a:2*a<1?m=i:3*a<2?m=o+(i-o)*(2/3-a)*6:m=o,u[A]=m*255;return u}function f(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,i;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,i=(n+t)/2,o=2*t/(n+t),[l,o*100,i*100])}function s(e){return p(d(e))}function y(e){return M(d(e))}function R(e){return w(d(e))}function D(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(l)%6,i=l-Math.floor(l),a=255*n*(1-t),u=255*n*(1-t*i),m=255*n*(1-t*(1-i)),n=255*n;switch(o){case 0:return[n,m,a];case 1:return[u,n,a];case 2:return[a,n,m];case 3:return[a,u,n];case 4:return[m,a,n];case 5:return[n,a,u]}}function F(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,i;return i=(2-t)*n,o=t*n,o/=i<=1?i:2-i,o=o||0,i/=2,[l,o*100,i*100]}function K(e){return p(D(e))}function O(e){return M(D(e))}function W(e){return w(D(e))}function I(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o=t+n,i,a,u,m;switch(o>1&&(t/=o,n/=o),i=Math.floor(6*l),a=1-n,u=6*l-i,(i&1)!=0&&(u=1-u),m=t+u*(a-t),i){default:case 6:case 0:r=a,g=m,b=t;break;case 1:r=m,g=a,b=t;break;case 2:r=t,g=a,b=m;break;case 3:r=t,g=m,b=a;break;case 4:r=m,g=t,b=a;break;case 5:r=a,g=t,b=m;break}return[r*255,g*255,b*255]}function G(e){return v(I(e))}function j(e){return x(I(e))}function H(e){return M(I(e))}function B(e){return w(I(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o=e[3]/100,i,a,u;return i=1-Math.min(1,l*(1-o)+o),a=1-Math.min(1,t*(1-o)+o),u=1-Math.min(1,n*(1-o)+o),[i*255,a*255,u*255]}function S(e){return v(k(e))}function V(e){return x(k(e))}function Q(e){return p(k(e))}function Y(e){return w(k(e))}function P(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o,i,a;return o=l*3.2406+t*-1.5372+n*-.4986,i=l*-.9689+t*1.8758+n*.0415,a=l*.0557+t*-.204+n*1.057,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[o*255,i*255,a*255]}function T(e){var l=e[0],t=e[1],n=e[2],o,i,a;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=116*t-16,i=500*(l-t),a=200*(t-n),[o,i,a]}function U(e){return q(T(e))}function $(e){var l=e[0],t=e[1],n=e[2],o,i,a,u;return l<=8?(i=l*100/903.3,u=7.787*(i/100)+16/116):(i=100*Math.pow((l+16)/116,3),u=Math.pow(i/100,1/3)),o=o/95.047<=.008856?o=95.047*(t/500+u-16/116)/7.787:95.047*Math.pow(t/500+u,3),a=a/108.883<=.008859?a=108.883*(u-n/200-16/116)/7.787:108.883*Math.pow(u-n/200,3),[o,i,a]}function q(e){var l=e[0],t=e[1],n=e[2],o,i,a;return o=Math.atan2(n,t),i=o*360/2/Math.PI,i<0&&(i+=360),a=Math.sqrt(t*t+n*n),[l,a,i]}function _(e){return P($(e))}function J(e){var l=e[0],t=e[1],n=e[2],o,i,a;return a=n/360*2*Math.PI,o=t*Math.cos(a),i=t*Math.sin(a),[l,o,i]}function ee(e){return $(J(e))}function ne(e){return _(J(e))}function L(e){return N[e]}function re(e){return v(L(e))}function te(e){return x(L(e))}function ie(e){return p(L(e))}function oe(e){return M(L(e))}function ae(e){return E(L(e))}function le(e){return h(L(e))}var N={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},X={};for(var Z in N)X[JSON.stringify(N[Z])]=Z}}]);
