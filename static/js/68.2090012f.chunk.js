(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[68,157,158],{278:function(O,C,d){"use strict";d.r(C),C.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/WtlGzS

// Force range [.1, .3]
#define FORCE .28
#define INIT_SPEED 80.
#define AMOUNT 5.
#define WATER_COL vec3(18,140,200)/255.

float rand(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float bubbles( vec2 uv, float size, float speed, float timeOfst, float blur, float time)
{
    vec2 ruv = uv*size  + .05;
    vec2 id = ceil(ruv) + speed;

    float t = (time + timeOfst)*speed;

    ruv.y -= t * (rand(vec2(id.x))*0.5+.5)*.1;
    vec2 guv = fract(ruv) - 0.5;

    ruv = ceil(ruv);
    float g = length(guv);

    float v = rand(ruv)*0.5;
    v *= step(v, clamp(FORCE, .1, .3));

    float m = smoothstep(v,v - blur, g);

    v*=.85;
    m -= smoothstep(v,v- .09, g);

    g = length(guv - vec2(v*.35, v*.35));
    float hlSize = v*.75;
    m += smoothstep(hlSize, 0., g)*.75;

    return m;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - .5*iResolution.xy)/iResolution.y;

    float m = 0.;

    float sizeFactor = iResolution.y / 10.;

    float fstep = .1/AMOUNT;
    for(float i=-1.0; i<=0.; i+=fstep){
        vec2 iuv = uv + vec2(cos(uv.y*2. + i*20. + iTime*.5)*.1, 0.);
        float size = (i*.15+0.2) * sizeFactor + 10.;
        m += bubbles(iuv + vec2(i*.1, 0.), size, INIT_SPEED + i*5., i*10., .3 + i*.25, iTime) * abs(i);
    }

    vec3 col = WATER_COL + m*.4;

    fragColor = vec4(col,1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}
`},279:function(O,C,d){"use strict";d.r(C),C.default=`#version 300 es
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
`},549:function(O,C,d){"use strict";d.d(C,"a",function(){return p});const x=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>x()?"webgl2":"webgl"},69:function(O,C,d){"use strict";d.r(C);var x=d(752),p=d.n(x),M=d(549),w=d(278),f=d(279);const E={context:Object(M.a)(),animate:!0},c=({gl:v,time:h})=>p()({gl:v,frag:w.default,vert:f.default,uniforms:{iTime:({time:s})=>s,iResolution:({width:s,height:y})=>[s,y,1]}});C.default={sketch:c,settings:E}},705:function(O,C){O.exports=function(){for(var d=0;d<arguments.length;d++)if(arguments[d]!==void 0)return arguments[d]}},752:function(O,C,d){var x=d(764),p=d(765),M=d(753),w=d(705);O.exports=f;function f(c){if(c=c||{},!c.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var v=c.gl,h={gl:v};typeof c.extensions!="undefined"&&(h.extensions=c.extensions),typeof c.optionalExtensions!="undefined"&&(h.optionalExtensions=c.optionalExtensions),typeof c.profile!="undefined"&&(h.profile=c.profile),typeof c.onDone!="undefined"&&(h.onDone=c.onDone);var s=x(h),y=p(),z=new Map,D=c.uniforms||{},L=Object.assign({},D);Object.keys(D).forEach(function(k){var R=D[k];typeof R=="function"?L[k]=function(J,_,H){var S=R.call(D,_,H);if(E(S))if(z.has(R)){var W=z.get(R);W(S),S=W}else{var N=s.texture(S);z.set(R,N),S=N}return S}:E(R)?L[k]=s.texture(R):L[k]=R});var F;try{F=K()}catch(k){B(k)}var A=w(c.clearColor,"black");if(typeof A=="string"){var G=M(A);if(!G.rgb)throw new Error('Error parsing { clearColor } color string "'+A+'"');A=G.rgb.slice(0,3).map(function(k){return k/255})}else if(A&&(!Array.isArray(A)||A.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var I=w(c.clearAlpha,1),U=A?A.concat([I||0]):!1;return{render:function(k){s.poll(),U&&s.clear({color:U,depth:1,stencil:0}),j(k),v.flush()},regl:s,drawQuad:j,unload:function(){z.clear(),s.destroy()}};function j(k){if(k=k||{},F)try{F(k)}catch(R){B(R)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function K(){return s({scissor:c.scissor?{enable:!0,box:{x:s.prop("scissorX"),y:s.prop("scissorY"),width:s.prop("scissorWidth"),height:s.prop("scissorHeight")}}:!1,uniforms:L,frag:c.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:c.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:c.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function B(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(c){return c&&!Array.isArray(c)&&typeof c=="object"}},753:function(O,C,d){var x=d(754);O.exports=function(p){var M,w,f,E;if(M=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var c=M[1],v=c.replace(/a$/,""),h=v==="cmyk"?4:3;w=x[v],f=M[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,z){return/%$/.test(y)&&z===h?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),c===v&&f.push(1),E=f[h]===void 0?1:f[h],f=f.slice(0,h),w[v]=function(){return f}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var v=p.replace(/^#/,""),h=v.length;w=x.rgb,f=v.split(h===3?/(.)/:/(..)/),f=f.filter(Boolean).map(function(D){return h===3?parseInt(D+D,16):parseInt(D,16)}),E=1,w.rgb=function(){return f},f[0]||(f[0]=0),f[1]||(f[1]=0),f[2]||(f[2]=0)}else w=x.keyword,w.keyword=function(){return p},f=p,E=1;var s={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{s.rgb=w.rgb(f)}catch(y){}try{s.hsl=w.hsl(f)}catch(y){}try{s.hsv=w.hsv(f)}catch(y){}try{s.cmyk=w.cmyk(f)}catch(y){}try{s.keyword=w.keyword(f)}catch(y){}return s.rgb&&(s.hex="#"+s.rgb.map(function(y){var z=y.toString(16);return z.length===1?"0"+z:z}).join("")),s.rgb&&(s.rgba=s.rgb.concat(E)),s.hsl&&(s.hsla=s.hsl.concat(E)),s.hsv&&(s.hsva=s.hsv.concat(E)),s.cmyk&&(s.cmyka=s.cmyk.concat(E)),s}},754:function(O,C,d){var x=d(755),p=function(){return new c};for(var M in x){p[M+"Raw"]=function(v){return function(h){return typeof h=="number"&&(h=Array.prototype.slice.call(arguments)),x[v](h)}}(M);var w=/(\w+)2(\w+)/.exec(M),f=w[1],E=w[2];p[f]=p[f]||{},p[f][E]=p[M]=function(v){return function(h){typeof h=="number"&&(h=Array.prototype.slice.call(arguments));var s=x[v](h);if(typeof s=="string"||s===void 0)return s;for(var y=0;y<s.length;y++)s[y]=Math.round(s[y]);return s}}(M)}var c=function(){this.convs={}};c.prototype.routeSpace=function(v,h){var s=h[0];return s===void 0?this.getValues(v):(typeof s=="number"&&(s=Array.prototype.slice.call(h)),this.setValues(v,s))},c.prototype.setValues=function(v,h){return this.space=v,this.convs={},this.convs[v]=h,this},c.prototype.getValues=function(v){var h=this.convs[v];if(!h){var s=this.space,y=this.convs[s];h=p[s][v](y),this.convs[v]=h}return h},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(v){c.prototype[v]=function(h){return this.routeSpace(v,arguments)}}),O.exports=p},755:function(O,C){O.exports={rgb2hsl:d,rgb2hsv:x,rgb2hwb:p,rgb2cmyk:M,rgb2keyword:w,rgb2xyz:f,rgb2lab:E,rgb2lch:c,hsl2rgb:v,hsl2hsv:h,hsl2hwb:s,hsl2cmyk:y,hsl2keyword:z,hsv2rgb:D,hsv2hsl:L,hsv2hwb:F,hsv2cmyk:A,hsv2keyword:G,hwb2rgb:I,hwb2hsl:U,hwb2hsv:j,hwb2cmyk:K,hwb2keyword:B,cmyk2rgb:k,cmyk2hsl:R,cmyk2hsv:J,cmyk2hwb:_,cmyk2keyword:H,keyword2rgb:P,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ie,keyword2cmyk:oe,keyword2lab:ae,keyword2xyz:le,xyz2rgb:S,xyz2lab:W,xyz2lch:N,lab2xyz:Q,lab2rgb:V,lab2lch:Y,lch2lab:$,lch2xyz:ee,lch2rgb:ne};function d(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(l,t,n),i=Math.max(l,t,n),a=i-o,u,m,T;return i==o?u=0:l==i?u=(t-n)/a:t==i?u=2+(n-l)/a:n==i&&(u=4+(l-t)/a),u=Math.min(u*60,360),u<0&&(u+=360),T=(o+i)/2,i==o?m=0:T<=.5?m=a/(i+o):m=a/(2-i-o),[u,m*100,T*100]}function x(e){var l=e[0],t=e[1],n=e[2],o=Math.min(l,t,n),i=Math.max(l,t,n),a=i-o,u,m,T;return i==0?m=0:m=a/i*1e3/10,i==o?u=0:l==i?u=(t-n)/a:t==i?u=2+(n-l)/a:n==i&&(u=4+(l-t)/a),u=Math.min(u*60,360),u<0&&(u+=360),T=i/255*1e3/10,[u,m,T]}function p(e){var l=e[0],t=e[1],n=e[2],o=d(e)[0],i=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[o,i*100,n*100]}function M(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o,i,a,u;return u=Math.min(1-l,1-t,1-n),o=(1-l-u)/(1-u)||0,i=(1-t-u)/(1-u)||0,a=(1-n-u)/(1-u)||0,[o*100,i*100,a*100,u*100]}function w(e){return X[JSON.stringify(e)]}function f(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=l*.4124+t*.3576+n*.1805,i=l*.2126+t*.7152+n*.0722,a=l*.0193+t*.1192+n*.9505;return[o*100,i*100,a*100]}function E(e){var l=f(e),t=l[0],n=l[1],o=l[2],i,a,u;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=116*n-16,a=500*(t-n),u=200*(n-o),[i,a,u]}function c(e){return Y(E(e))}function v(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o,i,a,u,m;if(t==0)return m=n*255,[m,m,m];n<.5?i=n*(1+t):i=n+t-n*t,o=2*n-i,u=[0,0,0];for(var T=0;T<3;T++)a=l+1/3*-(T-1),a<0&&a++,a>1&&a--,6*a<1?m=o+(i-o)*6*a:2*a<1?m=i:3*a<2?m=o+(i-o)*(2/3-a)*6:m=o,u[T]=m*255;return u}function h(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,i;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,i=(n+t)/2,o=2*t/(n+t),[l,o*100,i*100])}function s(e){return p(v(e))}function y(e){return M(v(e))}function z(e){return w(v(e))}function D(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(l)%6,i=l-Math.floor(l),a=255*n*(1-t),u=255*n*(1-t*i),m=255*n*(1-t*(1-i)),n=255*n;switch(o){case 0:return[n,m,a];case 1:return[u,n,a];case 2:return[a,n,m];case 3:return[a,u,n];case 4:return[m,a,n];case 5:return[n,a,u]}}function L(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,i;return i=(2-t)*n,o=t*n,o/=i<=1?i:2-i,o=o||0,i/=2,[l,o*100,i*100]}function F(e){return p(D(e))}function A(e){return M(D(e))}function G(e){return w(D(e))}function I(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o=t+n,i,a,u,m;switch(o>1&&(t/=o,n/=o),i=Math.floor(6*l),a=1-n,u=6*l-i,(i&1)!=0&&(u=1-u),m=t+u*(a-t),i){default:case 6:case 0:r=a,g=m,b=t;break;case 1:r=m,g=a,b=t;break;case 2:r=t,g=a,b=m;break;case 3:r=t,g=m,b=a;break;case 4:r=m,g=t,b=a;break;case 5:r=a,g=t,b=m;break}return[r*255,g*255,b*255]}function U(e){return d(I(e))}function j(e){return x(I(e))}function K(e){return M(I(e))}function B(e){return w(I(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o=e[3]/100,i,a,u;return i=1-Math.min(1,l*(1-o)+o),a=1-Math.min(1,t*(1-o)+o),u=1-Math.min(1,n*(1-o)+o),[i*255,a*255,u*255]}function R(e){return d(k(e))}function J(e){return x(k(e))}function _(e){return p(k(e))}function H(e){return w(k(e))}function S(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o,i,a;return o=l*3.2406+t*-1.5372+n*-.4986,i=l*-.9689+t*1.8758+n*.0415,a=l*.0557+t*-.204+n*1.057,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[o*255,i*255,a*255]}function W(e){var l=e[0],t=e[1],n=e[2],o,i,a;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=116*t-16,i=500*(l-t),a=200*(t-n),[o,i,a]}function N(e){return Y(W(e))}function Q(e){var l=e[0],t=e[1],n=e[2],o,i,a,u;return l<=8?(i=l*100/903.3,u=7.787*(i/100)+16/116):(i=100*Math.pow((l+16)/116,3),u=Math.pow(i/100,1/3)),o=o/95.047<=.008856?o=95.047*(t/500+u-16/116)/7.787:95.047*Math.pow(t/500+u,3),a=a/108.883<=.008859?a=108.883*(u-n/200-16/116)/7.787:108.883*Math.pow(u-n/200,3),[o,i,a]}function Y(e){var l=e[0],t=e[1],n=e[2],o,i,a;return o=Math.atan2(n,t),i=o*360/2/Math.PI,i<0&&(i+=360),a=Math.sqrt(t*t+n*n),[l,a,i]}function V(e){return S(Q(e))}function $(e){var l=e[0],t=e[1],n=e[2],o,i,a;return a=n/360*2*Math.PI,o=t*Math.cos(a),i=t*Math.sin(a),[l,o,i]}function ee(e){return Q($(e))}function ne(e){return V($(e))}function P(e){return q[e]}function re(e){return d(P(e))}function te(e){return x(P(e))}function ie(e){return p(P(e))}function oe(e){return M(P(e))}function ae(e){return E(P(e))}function le(e){return f(P(e))}var q={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},X={};for(var Z in q)X[JSON.stringify(q[Z])]=Z}}]);
