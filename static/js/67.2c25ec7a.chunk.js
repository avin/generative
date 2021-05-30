(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[67,155,156],{276:function(D,C,v){"use strict";v.r(C),C.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/wtj3RG

#define RADIUS .475
#define ISTEP .015

#define SF 2./min(iResolution.x,iResolution.y)
#define RADIUS_EXP2 RADIUS*RADIUS

#define BLACK_COL vec3(16,22,27)/255.
#define WHITE_COL vec3(245,248,250)/255.

mat2 rot (float a){
	float ca = cos(a);
    float sa = sin(a);
    return mat2(ca,-sa,sa,ca);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;

    uv *= vec2(1.3333, 1.);  // /(.75,1.)

    float m = 0.;
    for(float i = -RADIUS+fract(iTime*.25)*ISTEP; i<RADIUS; i+=ISTEP){

        vec2 iuv = uv - vec2(i, 0.);
        iuv *= rot(iTime*2. - i*10.);

        float l = length(iuv);
        float r = sqrt(RADIUS_EXP2 - i*i);

        m += smoothstep(SF, .0, abs(r-l)) * smoothstep(.0, .075, iuv.y);
    }

    vec3 col = mix(BLACK_COL, WHITE_COL, m);

    fragColor = vec4(col, 1.);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
`},277:function(D,C,v){"use strict";v.r(C),C.default=`#version 300 es
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
`},549:function(D,C,v){"use strict";v.d(C,"a",function(){return p});const x=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>x()?"webgl2":"webgl"},68:function(D,C,v){"use strict";v.r(C);var x=v(752),p=v.n(x),M=v(549),w=v(276),f=v(277);const E={context:Object(M.a)(),animate:!0},c=({gl:d,time:h})=>p()({gl:d,frag:w.default,vert:f.default,uniforms:{iTime:({time:s})=>s,iResolution:({width:s,height:y})=>[s,y,1]}});C.default={sketch:c,settings:E}},705:function(D,C){D.exports=function(){for(var v=0;v<arguments.length;v++)if(arguments[v]!==void 0)return arguments[v]}},752:function(D,C,v){var x=v(764),p=v(765),M=v(753),w=v(705);D.exports=f;function f(c){if(c=c||{},!c.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=c.gl,h={gl:d};typeof c.extensions!="undefined"&&(h.extensions=c.extensions),typeof c.optionalExtensions!="undefined"&&(h.optionalExtensions=c.optionalExtensions),typeof c.profile!="undefined"&&(h.profile=c.profile),typeof c.onDone!="undefined"&&(h.onDone=c.onDone);var s=x(h),y=p(),A=new Map,R=c.uniforms||{},z=Object.assign({},R);Object.keys(R).forEach(function(k){var S=R[k];typeof S=="function"?z[k]=function(N,H,q){var L=S.call(R,H,q);if(E(L))if(A.has(S)){var F=A.get(S);F(L),L=F}else{var K=s.texture(L);A.set(S,K),L=K}return L}:E(S)?z[k]=s.texture(S):z[k]=S});var U;try{U=_()}catch(k){j(k)}var I=w(c.clearColor,"black");if(typeof I=="string"){var W=M(I);if(!W.rgb)throw new Error('Error parsing { clearColor } color string "'+I+'"');I=W.rgb.slice(0,3).map(function(k){return k/255})}else if(I&&(!Array.isArray(I)||I.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var P=w(c.clearAlpha,1),B=I?I.concat([P||0]):!1;return{render:function(k){s.poll(),B&&s.clear({color:B,depth:1,stencil:0}),G(k),d.flush()},regl:s,drawQuad:G,unload:function(){A.clear(),s.destroy()}};function G(k){if(k=k||{},U)try{U(k)}catch(S){j(S)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function _(){return s({scissor:c.scissor?{enable:!0,box:{x:s.prop("scissorX"),y:s.prop("scissorY"),width:s.prop("scissorWidth"),height:s.prop("scissorHeight")}}:!1,uniforms:z,frag:c.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:c.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:c.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function j(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(c){return c&&!Array.isArray(c)&&typeof c=="object"}},753:function(D,C,v){var x=v(754);D.exports=function(p){var M,w,f,E;if(M=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var c=M[1],d=c.replace(/a$/,""),h=d==="cmyk"?4:3;w=x[d],f=M[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,A){return/%$/.test(y)&&A===h?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),c===d&&f.push(1),E=f[h]===void 0?1:f[h],f=f.slice(0,h),w[d]=function(){return f}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var d=p.replace(/^#/,""),h=d.length;w=x.rgb,f=d.split(h===3?/(.)/:/(..)/),f=f.filter(Boolean).map(function(R){return h===3?parseInt(R+R,16):parseInt(R,16)}),E=1,w.rgb=function(){return f},f[0]||(f[0]=0),f[1]||(f[1]=0),f[2]||(f[2]=0)}else w=x.keyword,w.keyword=function(){return p},f=p,E=1;var s={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{s.rgb=w.rgb(f)}catch(y){}try{s.hsl=w.hsl(f)}catch(y){}try{s.hsv=w.hsv(f)}catch(y){}try{s.cmyk=w.cmyk(f)}catch(y){}try{s.keyword=w.keyword(f)}catch(y){}return s.rgb&&(s.hex="#"+s.rgb.map(function(y){var A=y.toString(16);return A.length===1?"0"+A:A}).join("")),s.rgb&&(s.rgba=s.rgb.concat(E)),s.hsl&&(s.hsla=s.hsl.concat(E)),s.hsv&&(s.hsva=s.hsv.concat(E)),s.cmyk&&(s.cmyka=s.cmyk.concat(E)),s}},754:function(D,C,v){var x=v(755),p=function(){return new c};for(var M in x){p[M+"Raw"]=function(d){return function(h){return typeof h=="number"&&(h=Array.prototype.slice.call(arguments)),x[d](h)}}(M);var w=/(\w+)2(\w+)/.exec(M),f=w[1],E=w[2];p[f]=p[f]||{},p[f][E]=p[M]=function(d){return function(h){typeof h=="number"&&(h=Array.prototype.slice.call(arguments));var s=x[d](h);if(typeof s=="string"||s===void 0)return s;for(var y=0;y<s.length;y++)s[y]=Math.round(s[y]);return s}}(M)}var c=function(){this.convs={}};c.prototype.routeSpace=function(d,h){var s=h[0];return s===void 0?this.getValues(d):(typeof s=="number"&&(s=Array.prototype.slice.call(h)),this.setValues(d,s))},c.prototype.setValues=function(d,h){return this.space=d,this.convs={},this.convs[d]=h,this},c.prototype.getValues=function(d){var h=this.convs[d];if(!h){var s=this.space,y=this.convs[s];h=p[s][d](y),this.convs[d]=h}return h},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){c.prototype[d]=function(h){return this.routeSpace(d,arguments)}}),D.exports=p},755:function(D,C){D.exports={rgb2hsl:v,rgb2hsv:x,rgb2hwb:p,rgb2cmyk:M,rgb2keyword:w,rgb2xyz:f,rgb2lab:E,rgb2lch:c,hsl2rgb:d,hsl2hsv:h,hsl2hwb:s,hsl2cmyk:y,hsl2keyword:A,hsv2rgb:R,hsv2hsl:z,hsv2hwb:U,hsv2cmyk:I,hsv2keyword:W,hwb2rgb:P,hwb2hsl:B,hwb2hsv:G,hwb2cmyk:_,hwb2keyword:j,cmyk2rgb:k,cmyk2hsl:S,cmyk2hsv:N,cmyk2hwb:H,cmyk2keyword:q,keyword2rgb:T,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ie,keyword2cmyk:ae,keyword2lab:oe,keyword2xyz:le,xyz2rgb:L,xyz2lab:F,xyz2lch:K,lab2xyz:Q,lab2rgb:V,lab2lch:Y,lch2lab:$,lch2xyz:ee,lch2rgb:ne};function v(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(l,t,n),i=Math.max(l,t,n),o=i-a,u,m,O;return i==a?u=0:l==i?u=(t-n)/o:t==i?u=2+(n-l)/o:n==i&&(u=4+(l-t)/o),u=Math.min(u*60,360),u<0&&(u+=360),O=(a+i)/2,i==a?m=0:O<=.5?m=o/(i+a):m=o/(2-i-a),[u,m*100,O*100]}function x(e){var l=e[0],t=e[1],n=e[2],a=Math.min(l,t,n),i=Math.max(l,t,n),o=i-a,u,m,O;return i==0?m=0:m=o/i*1e3/10,i==a?u=0:l==i?u=(t-n)/o:t==i?u=2+(n-l)/o:n==i&&(u=4+(l-t)/o),u=Math.min(u*60,360),u<0&&(u+=360),O=i/255*1e3/10,[u,m,O]}function p(e){var l=e[0],t=e[1],n=e[2],a=v(e)[0],i=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[a,i*100,n*100]}function M(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,a,i,o,u;return u=Math.min(1-l,1-t,1-n),a=(1-l-u)/(1-u)||0,i=(1-t-u)/(1-u)||0,o=(1-n-u)/(1-u)||0,[a*100,i*100,o*100,u*100]}function w(e){return X[JSON.stringify(e)]}function f(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var a=l*.4124+t*.3576+n*.1805,i=l*.2126+t*.7152+n*.0722,o=l*.0193+t*.1192+n*.9505;return[a*100,i*100,o*100]}function E(e){var l=f(e),t=l[0],n=l[1],a=l[2],i,o,u;return t/=95.047,n/=100,a/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=116*n-16,o=500*(t-n),u=200*(n-a),[i,o,u]}function c(e){return Y(E(e))}function d(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,a,i,o,u,m;if(t==0)return m=n*255,[m,m,m];n<.5?i=n*(1+t):i=n+t-n*t,a=2*n-i,u=[0,0,0];for(var O=0;O<3;O++)o=l+1/3*-(O-1),o<0&&o++,o>1&&o--,6*o<1?m=a+(i-a)*6*o:2*o<1?m=i:3*o<2?m=a+(i-a)*(2/3-o)*6:m=a,u[O]=m*255;return u}function h(e){var l=e[0],t=e[1]/100,n=e[2]/100,a,i;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,i=(n+t)/2,a=2*t/(n+t),[l,a*100,i*100])}function s(e){return p(d(e))}function y(e){return M(d(e))}function A(e){return w(d(e))}function R(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(l)%6,i=l-Math.floor(l),o=255*n*(1-t),u=255*n*(1-t*i),m=255*n*(1-t*(1-i)),n=255*n;switch(a){case 0:return[n,m,o];case 1:return[u,n,o];case 2:return[o,n,m];case 3:return[o,u,n];case 4:return[m,o,n];case 5:return[n,o,u]}}function z(e){var l=e[0],t=e[1]/100,n=e[2]/100,a,i;return i=(2-t)*n,a=t*n,a/=i<=1?i:2-i,a=a||0,i/=2,[l,a*100,i*100]}function U(e){return p(R(e))}function I(e){return M(R(e))}function W(e){return w(R(e))}function P(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,a=t+n,i,o,u,m;switch(a>1&&(t/=a,n/=a),i=Math.floor(6*l),o=1-n,u=6*l-i,(i&1)!=0&&(u=1-u),m=t+u*(o-t),i){default:case 6:case 0:r=o,g=m,b=t;break;case 1:r=m,g=o,b=t;break;case 2:r=t,g=o,b=m;break;case 3:r=t,g=m,b=o;break;case 4:r=m,g=t,b=o;break;case 5:r=o,g=t,b=m;break}return[r*255,g*255,b*255]}function B(e){return v(P(e))}function G(e){return x(P(e))}function _(e){return M(P(e))}function j(e){return w(P(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100,i,o,u;return i=1-Math.min(1,l*(1-a)+a),o=1-Math.min(1,t*(1-a)+a),u=1-Math.min(1,n*(1-a)+a),[i*255,o*255,u*255]}function S(e){return v(k(e))}function N(e){return x(k(e))}function H(e){return p(k(e))}function q(e){return w(k(e))}function L(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,a,i,o;return a=l*3.2406+t*-1.5372+n*-.4986,i=l*-.9689+t*1.8758+n*.0415,o=l*.0557+t*-.204+n*1.057,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),[a*255,i*255,o*255]}function F(e){var l=e[0],t=e[1],n=e[2],a,i,o;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,a=116*t-16,i=500*(l-t),o=200*(t-n),[a,i,o]}function K(e){return Y(F(e))}function Q(e){var l=e[0],t=e[1],n=e[2],a,i,o,u;return l<=8?(i=l*100/903.3,u=7.787*(i/100)+16/116):(i=100*Math.pow((l+16)/116,3),u=Math.pow(i/100,1/3)),a=a/95.047<=.008856?a=95.047*(t/500+u-16/116)/7.787:95.047*Math.pow(t/500+u,3),o=o/108.883<=.008859?o=108.883*(u-n/200-16/116)/7.787:108.883*Math.pow(u-n/200,3),[a,i,o]}function Y(e){var l=e[0],t=e[1],n=e[2],a,i,o;return a=Math.atan2(n,t),i=a*360/2/Math.PI,i<0&&(i+=360),o=Math.sqrt(t*t+n*n),[l,o,i]}function V(e){return L(Q(e))}function $(e){var l=e[0],t=e[1],n=e[2],a,i,o;return o=n/360*2*Math.PI,a=t*Math.cos(o),i=t*Math.sin(o),[l,a,i]}function ee(e){return Q($(e))}function ne(e){return V($(e))}function T(e){return J[e]}function re(e){return v(T(e))}function te(e){return x(T(e))}function ie(e){return p(T(e))}function ae(e){return M(T(e))}function oe(e){return E(T(e))}function le(e){return f(T(e))}var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},X={};for(var Z in J)X[JSON.stringify(J[Z])]=Z}}]);
