(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[61,172,173,174],{293:function(D,M,h){"use strict";h.r(M),M.default=`#version 300 es

#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#define GLSLIFY 1
#endif

#define HW_PERFORMANCE 1

uniform vec3 iResolution;
uniform float iTime;
uniform float iChannelTime[4];
uniform vec4 iMouse;
uniform vec4 iDate;
uniform float iSampleRate;
uniform vec3 iChannelResolution[4];
uniform int iFrame;
uniform float iTimeDelta;
uniform float iFrameRate;
struct Channel {
    vec3 resolution;
    float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage(out vec4 c, in vec2 f);

// --------- START-SHADER-TOY-CODE-HERE ------------

#pragma includeScene

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void)
{
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage(color, gl_FragCoord.xy);
    color.w = 1.0;
    outColor = color;
}
`},294:function(D,M,h){"use strict";h.r(M),M.default=`#version 300 es

#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#define GLSLIFY 1
#endif

layout(location = 0) in vec3 position;
void main()
{
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`},295:function(D,M,h){"use strict";h.r(M),M.default=`#define GLSLIFY 1
#define SIZE 50.
#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

#define SF 1. / min(iResolution.x, iResolution.y) * SIZE
#define SS(l, s) smoothstep(SF, -SF, l - s)

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
    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;

    uv.y = uv.y * SIZE;
    float yid = floor(uv.y);
    uv.y = fract(uv.y) - .5;

    float mask = 0.;

    for (float ofs = -1.; ofs <= 1.; ofs += 1.) {
        vec2 iuv = uv + vec2(0., ofs);

        float iid = yid - ofs;

        float fx = snoise(vec3(uv.x * 10. + iid * 100., iid, iTime));
        float fx2 = snoise(vec3(uv.x * 10. + (iid - 1.) * 100., (iid - 1.), iTime));

        float m = SS(abs(iuv.y + fx), .35);
        mask = max(mask, m * (fx2 + iuv.y + .5));
    }

    mask = smoothstep(0., 1., mask * .75);

    vec3 col = mix(COL1, COL2, mask);

    fragColor = vec4(col, 1.0);
}
`},549:function(D,M,h){"use strict";h.d(M,"a",function(){return p});const E=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>E()?"webgl2":"webgl"},705:function(D,M){D.exports=function(){for(var h=0;h<arguments.length;h++)if(arguments[h]!==void 0)return arguments[h]}},752:function(D,M,h){var E=h(764),p=h(765),x=h(753),w=h(705);D.exports=d;function d(c){if(c=c||{},!c.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var v=c.gl,f={gl:v};typeof c.extensions!="undefined"&&(f.extensions=c.extensions),typeof c.optionalExtensions!="undefined"&&(f.optionalExtensions=c.optionalExtensions),typeof c.profile!="undefined"&&(f.profile=c.profile),typeof c.onDone!="undefined"&&(f.onDone=c.onDone);var u=E(f),y=p(),O=new Map,S=c.uniforms||{},T=Object.assign({},S);Object.keys(S).forEach(function(k){var z=S[k];typeof z=="function"?T[k]=function(V,Y,Q){var L=z.call(S,Y,Q);if(C(L))if(O.has(z)){var K=O.get(z);K(L),L=K}else{var U=u.texture(L);O.set(z,U),L=U}return L}:C(z)?T[k]=u.texture(z):T[k]=z});var F;try{F=H()}catch(k){j(k)}var R=w(c.clearColor,"black");if(typeof R=="string"){var W=x(R);if(!W.rgb)throw new Error('Error parsing { clearColor } color string "'+R+'"');R=W.rgb.slice(0,3).map(function(k){return k/255})}else if(R&&(!Array.isArray(R)||R.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var I=w(c.clearAlpha,1),G=R?R.concat([I||0]):!1;return{render:function(k){u.poll(),G&&u.clear({color:G,depth:1,stencil:0}),B(k),v.flush()},regl:u,drawQuad:B,unload:function(){O.clear(),u.destroy()}};function B(k){if(k=k||{},F)try{F(k)}catch(z){j(z)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function H(){return u({scissor:c.scissor?{enable:!0,box:{x:u.prop("scissorX"),y:u.prop("scissorY"),width:u.prop("scissorWidth"),height:u.prop("scissorHeight")}}:!1,uniforms:T,frag:c.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:c.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:c.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function j(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function C(c){return c&&!Array.isArray(c)&&typeof c=="object"}},753:function(D,M,h){var E=h(754);D.exports=function(p){var x,w,d,C;if(x=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var c=x[1],v=c.replace(/a$/,""),f=v==="cmyk"?4:3;w=E[v],d=x[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,O){return/%$/.test(y)&&O===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),c===v&&d.push(1),C=d[f]===void 0?1:d[f],d=d.slice(0,f),w[v]=function(){return d}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var v=p.replace(/^#/,""),f=v.length;w=E.rgb,d=v.split(f===3?/(.)/:/(..)/),d=d.filter(Boolean).map(function(S){return f===3?parseInt(S+S,16):parseInt(S,16)}),C=1,w.rgb=function(){return d},d[0]||(d[0]=0),d[1]||(d[1]=0),d[2]||(d[2]=0)}else w=E.keyword,w.keyword=function(){return p},d=p,C=1;var u={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{u.rgb=w.rgb(d)}catch(y){}try{u.hsl=w.hsl(d)}catch(y){}try{u.hsv=w.hsv(d)}catch(y){}try{u.cmyk=w.cmyk(d)}catch(y){}try{u.keyword=w.keyword(d)}catch(y){}return u.rgb&&(u.hex="#"+u.rgb.map(function(y){var O=y.toString(16);return O.length===1?"0"+O:O}).join("")),u.rgb&&(u.rgba=u.rgb.concat(C)),u.hsl&&(u.hsla=u.hsl.concat(C)),u.hsv&&(u.hsva=u.hsv.concat(C)),u.cmyk&&(u.cmyka=u.cmyk.concat(C)),u}},754:function(D,M,h){var E=h(755),p=function(){return new c};for(var x in E){p[x+"Raw"]=function(v){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),E[v](f)}}(x);var w=/(\w+)2(\w+)/.exec(x),d=w[1],C=w[2];p[d]=p[d]||{},p[d][C]=p[x]=function(v){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var u=E[v](f);if(typeof u=="string"||u===void 0)return u;for(var y=0;y<u.length;y++)u[y]=Math.round(u[y]);return u}}(x)}var c=function(){this.convs={}};c.prototype.routeSpace=function(v,f){var u=f[0];return u===void 0?this.getValues(v):(typeof u=="number"&&(u=Array.prototype.slice.call(f)),this.setValues(v,u))},c.prototype.setValues=function(v,f){return this.space=v,this.convs={},this.convs[v]=f,this},c.prototype.getValues=function(v){var f=this.convs[v];if(!f){var u=this.space,y=this.convs[u];f=p[u][v](y),this.convs[v]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(v){c.prototype[v]=function(f){return this.routeSpace(v,arguments)}}),D.exports=p},755:function(D,M){D.exports={rgb2hsl:h,rgb2hsv:E,rgb2hwb:p,rgb2cmyk:x,rgb2keyword:w,rgb2xyz:d,rgb2lab:C,rgb2lch:c,hsl2rgb:v,hsl2hsv:f,hsl2hwb:u,hsl2cmyk:y,hsl2keyword:O,hsv2rgb:S,hsv2hsl:T,hsv2hwb:F,hsv2cmyk:R,hsv2keyword:W,hwb2rgb:I,hwb2hsl:G,hwb2hsv:B,hwb2cmyk:H,hwb2keyword:j,cmyk2rgb:k,cmyk2hsl:z,cmyk2hsv:V,cmyk2hwb:Y,cmyk2keyword:Q,keyword2rgb:P,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ie,keyword2cmyk:oe,keyword2lab:ae,keyword2xyz:le,xyz2rgb:L,xyz2lab:K,xyz2lch:U,lab2xyz:_,lab2rgb:q,lab2lch:$,lch2lab:J,lch2xyz:ee,lch2rgb:ne};function h(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(l,t,n),i=Math.max(l,t,n),a=i-o,s,m,A;return i==o?s=0:l==i?s=(t-n)/a:t==i?s=2+(n-l)/a:n==i&&(s=4+(l-t)/a),s=Math.min(s*60,360),s<0&&(s+=360),A=(o+i)/2,i==o?m=0:A<=.5?m=a/(i+o):m=a/(2-i-o),[s,m*100,A*100]}function E(e){var l=e[0],t=e[1],n=e[2],o=Math.min(l,t,n),i=Math.max(l,t,n),a=i-o,s,m,A;return i==0?m=0:m=a/i*1e3/10,i==o?s=0:l==i?s=(t-n)/a:t==i?s=2+(n-l)/a:n==i&&(s=4+(l-t)/a),s=Math.min(s*60,360),s<0&&(s+=360),A=i/255*1e3/10,[s,m,A]}function p(e){var l=e[0],t=e[1],n=e[2],o=h(e)[0],i=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[o,i*100,n*100]}function x(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o,i,a,s;return s=Math.min(1-l,1-t,1-n),o=(1-l-s)/(1-s)||0,i=(1-t-s)/(1-s)||0,a=(1-n-s)/(1-s)||0,[o*100,i*100,a*100,s*100]}function w(e){return Z[JSON.stringify(e)]}function d(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=l*.4124+t*.3576+n*.1805,i=l*.2126+t*.7152+n*.0722,a=l*.0193+t*.1192+n*.9505;return[o*100,i*100,a*100]}function C(e){var l=d(e),t=l[0],n=l[1],o=l[2],i,a,s;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=116*n-16,a=500*(t-n),s=200*(n-o),[i,a,s]}function c(e){return $(C(e))}function v(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o,i,a,s,m;if(t==0)return m=n*255,[m,m,m];n<.5?i=n*(1+t):i=n+t-n*t,o=2*n-i,s=[0,0,0];for(var A=0;A<3;A++)a=l+1/3*-(A-1),a<0&&a++,a>1&&a--,6*a<1?m=o+(i-o)*6*a:2*a<1?m=i:3*a<2?m=o+(i-o)*(2/3-a)*6:m=o,s[A]=m*255;return s}function f(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,i;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,i=(n+t)/2,o=2*t/(n+t),[l,o*100,i*100])}function u(e){return p(v(e))}function y(e){return x(v(e))}function O(e){return w(v(e))}function S(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(l)%6,i=l-Math.floor(l),a=255*n*(1-t),s=255*n*(1-t*i),m=255*n*(1-t*(1-i)),n=255*n;switch(o){case 0:return[n,m,a];case 1:return[s,n,a];case 2:return[a,n,m];case 3:return[a,s,n];case 4:return[m,a,n];case 5:return[n,a,s]}}function T(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,i;return i=(2-t)*n,o=t*n,o/=i<=1?i:2-i,o=o||0,i/=2,[l,o*100,i*100]}function F(e){return p(S(e))}function R(e){return x(S(e))}function W(e){return w(S(e))}function I(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o=t+n,i,a,s,m;switch(o>1&&(t/=o,n/=o),i=Math.floor(6*l),a=1-n,s=6*l-i,(i&1)!=0&&(s=1-s),m=t+s*(a-t),i){default:case 6:case 0:r=a,g=m,b=t;break;case 1:r=m,g=a,b=t;break;case 2:r=t,g=a,b=m;break;case 3:r=t,g=m,b=a;break;case 4:r=m,g=t,b=a;break;case 5:r=a,g=t,b=m;break}return[r*255,g*255,b*255]}function G(e){return h(I(e))}function B(e){return E(I(e))}function H(e){return x(I(e))}function j(e){return w(I(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o=e[3]/100,i,a,s;return i=1-Math.min(1,l*(1-o)+o),a=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),[i*255,a*255,s*255]}function z(e){return h(k(e))}function V(e){return E(k(e))}function Y(e){return p(k(e))}function Q(e){return w(k(e))}function L(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o,i,a;return o=l*3.2406+t*-1.5372+n*-.4986,i=l*-.9689+t*1.8758+n*.0415,a=l*.0557+t*-.204+n*1.057,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[o*255,i*255,a*255]}function K(e){var l=e[0],t=e[1],n=e[2],o,i,a;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=116*t-16,i=500*(l-t),a=200*(t-n),[o,i,a]}function U(e){return $(K(e))}function _(e){var l=e[0],t=e[1],n=e[2],o,i,a,s;return l<=8?(i=l*100/903.3,s=7.787*(i/100)+16/116):(i=100*Math.pow((l+16)/116,3),s=Math.pow(i/100,1/3)),o=o/95.047<=.008856?o=95.047*(t/500+s-16/116)/7.787:95.047*Math.pow(t/500+s,3),a=a/108.883<=.008859?a=108.883*(s-n/200-16/116)/7.787:108.883*Math.pow(s-n/200,3),[o,i,a]}function $(e){var l=e[0],t=e[1],n=e[2],o,i,a;return o=Math.atan2(n,t),i=o*360/2/Math.PI,i<0&&(i+=360),a=Math.sqrt(t*t+n*n),[l,a,i]}function q(e){return L(_(e))}function J(e){var l=e[0],t=e[1],n=e[2],o,i,a;return a=n/360*2*Math.PI,o=t*Math.cos(a),i=t*Math.sin(a),[l,o,i]}function ee(e){return _(J(e))}function ne(e){return q(J(e))}function P(e){return N[e]}function re(e){return h(P(e))}function te(e){return E(P(e))}function ie(e){return p(P(e))}function oe(e){return x(P(e))}function ae(e){return C(P(e))}function le(e){return d(P(e))}var N={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Z={};for(var X in N)Z[JSON.stringify(N[X])]=X},76:function(D,M,h){"use strict";h.r(M);var E=h(752),p=h.n(E),x=h(549),w=h(293),d=h(294),C=h(295);const c={context:Object(x.a)(),animate:!0},v=({gl:f,time:u})=>p()({gl:f,frag:w.default.replace("#pragma includeScene",C.default),vert:d.default,uniforms:{iTime:({time:y})=>y,iResolution:({width:y,height:O})=>[y,O,1]}});M.default={sketch:v,settings:c}}}]);
