(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[70,165,166],{286:function(D,C,v){"use strict";v.r(C),C.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/3tlGRr

#define SIZE 15.0
#define HPI 1.5707963
#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;
    float hsm = 1.5 / iResolution.y * SIZE * 0.5; // Half-Smooth factor

    uv *= SIZE; // Make grid
    vec2 id = floor(uv);
    uv = fract(uv) - 0.5;

    float angle = iTime; // Prepare rotation matrix

    float phase = mod(floor(angle / HPI), 2.0); // Determine what phase is right now

    float mask = 0.0;
    for(float y =- 1.0; y <= 1.0; y++ ) { // Loop to draw neighbour cells
        for(float x =- 1.0; x <= 1.0; x++ ) {
            vec2 ruv = uv + vec2(x, y);
            vec2 rid = id + vec2(x, y);

            // Golfed Rotation https://www.shadertoy.com/view/XlsyWX
            ruv *= mat2(cos( angle + vec4(0,33,11,0)));

            vec2 maskXY = smoothstep(0.5 + hsm, 0.5 - hsm, abs(ruv));
            float maskI = maskXY.x*maskXY.y;

            vec2 idm = mod(rid, 2.0);
            float draw = abs(idm.x*idm.y + (1.-idm.x)*(1.-idm.y) - phase); // Flip depending on phase

            mask += maskI * draw;
        }
    }

    vec3 col = vec3(1.0);
    col = mix(COL1, COL2, abs(mask - phase)); // Color flip depending on phase

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
`},287:function(D,C,v){"use strict";v.r(C),C.default=`#version 300 es
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
`},549:function(D,C,v){"use strict";v.d(C,"a",function(){return p});const M=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>M()?"webgl2":"webgl"},705:function(D,C){D.exports=function(){for(var v=0;v<arguments.length;v++)if(arguments[v]!==void 0)return arguments[v]}},73:function(D,C,v){"use strict";v.r(C);var M=v(752),p=v.n(M),x=v(549),w=v(286),h=v(287);const E={context:Object(x.a)(),animate:!0},c=({gl:d,time:f})=>p()({gl:d,frag:w.default,vert:h.default,uniforms:{iTime:({time:s})=>s,iResolution:({width:s,height:y})=>[s,y,1]}});C.default={sketch:c,settings:E}},752:function(D,C,v){var M=v(764),p=v(765),x=v(753),w=v(705);D.exports=h;function h(c){if(c=c||{},!c.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=c.gl,f={gl:d};typeof c.extensions!="undefined"&&(f.extensions=c.extensions),typeof c.optionalExtensions!="undefined"&&(f.optionalExtensions=c.optionalExtensions),typeof c.profile!="undefined"&&(f.profile=c.profile),typeof c.onDone!="undefined"&&(f.onDone=c.onDone);var s=M(f),y=p(),R=new Map,O=c.uniforms||{},T=Object.assign({},O);Object.keys(O).forEach(function(k){var A=O[k];typeof A=="function"?T[k]=function(N,U,X){var P=A.call(O,U,X);if(E(P))if(R.has(A)){var W=R.get(A);W(P),P=W}else{var Y=s.texture(P);R.set(A,Y),P=Y}return P}:E(A)?T[k]=s.texture(A):T[k]=A});var F;try{F=K()}catch(k){B(k)}var I=w(c.clearColor,"black");if(typeof I=="string"){var G=x(I);if(!G.rgb)throw new Error('Error parsing { clearColor } color string "'+I+'"');I=G.rgb.slice(0,3).map(function(k){return k/255})}else if(I&&(!Array.isArray(I)||I.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var S=w(c.clearAlpha,1),H=I?I.concat([S||0]):!1;return{render:function(k){s.poll(),H&&s.clear({color:H,depth:1,stencil:0}),j(k),d.flush()},regl:s,drawQuad:j,unload:function(){R.clear(),s.destroy()}};function j(k){if(k=k||{},F)try{F(k)}catch(A){B(A)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function K(){return s({scissor:c.scissor?{enable:!0,box:{x:s.prop("scissorX"),y:s.prop("scissorY"),width:s.prop("scissorWidth"),height:s.prop("scissorHeight")}}:!1,uniforms:T,frag:c.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:c.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:c.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function B(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(c){return c&&!Array.isArray(c)&&typeof c=="object"}},753:function(D,C,v){var M=v(754);D.exports=function(p){var x,w,h,E;if(x=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var c=x[1],d=c.replace(/a$/,""),f=d==="cmyk"?4:3;w=M[d],h=x[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,R){return/%$/.test(y)&&R===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),c===d&&h.push(1),E=h[f]===void 0?1:h[f],h=h.slice(0,f),w[d]=function(){return h}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var d=p.replace(/^#/,""),f=d.length;w=M.rgb,h=d.split(f===3?/(.)/:/(..)/),h=h.filter(Boolean).map(function(O){return f===3?parseInt(O+O,16):parseInt(O,16)}),E=1,w.rgb=function(){return h},h[0]||(h[0]=0),h[1]||(h[1]=0),h[2]||(h[2]=0)}else w=M.keyword,w.keyword=function(){return p},h=p,E=1;var s={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{s.rgb=w.rgb(h)}catch(y){}try{s.hsl=w.hsl(h)}catch(y){}try{s.hsv=w.hsv(h)}catch(y){}try{s.cmyk=w.cmyk(h)}catch(y){}try{s.keyword=w.keyword(h)}catch(y){}return s.rgb&&(s.hex="#"+s.rgb.map(function(y){var R=y.toString(16);return R.length===1?"0"+R:R}).join("")),s.rgb&&(s.rgba=s.rgb.concat(E)),s.hsl&&(s.hsla=s.hsl.concat(E)),s.hsv&&(s.hsva=s.hsv.concat(E)),s.cmyk&&(s.cmyka=s.cmyk.concat(E)),s}},754:function(D,C,v){var M=v(755),p=function(){return new c};for(var x in M){p[x+"Raw"]=function(d){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),M[d](f)}}(x);var w=/(\w+)2(\w+)/.exec(x),h=w[1],E=w[2];p[h]=p[h]||{},p[h][E]=p[x]=function(d){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var s=M[d](f);if(typeof s=="string"||s===void 0)return s;for(var y=0;y<s.length;y++)s[y]=Math.round(s[y]);return s}}(x)}var c=function(){this.convs={}};c.prototype.routeSpace=function(d,f){var s=f[0];return s===void 0?this.getValues(d):(typeof s=="number"&&(s=Array.prototype.slice.call(f)),this.setValues(d,s))},c.prototype.setValues=function(d,f){return this.space=d,this.convs={},this.convs[d]=f,this},c.prototype.getValues=function(d){var f=this.convs[d];if(!f){var s=this.space,y=this.convs[s];f=p[s][d](y),this.convs[d]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){c.prototype[d]=function(f){return this.routeSpace(d,arguments)}}),D.exports=p},755:function(D,C){D.exports={rgb2hsl:v,rgb2hsv:M,rgb2hwb:p,rgb2cmyk:x,rgb2keyword:w,rgb2xyz:h,rgb2lab:E,rgb2lch:c,hsl2rgb:d,hsl2hsv:f,hsl2hwb:s,hsl2cmyk:y,hsl2keyword:R,hsv2rgb:O,hsv2hsl:T,hsv2hwb:F,hsv2cmyk:I,hsv2keyword:G,hwb2rgb:S,hwb2hsl:H,hwb2hsv:j,hwb2cmyk:K,hwb2keyword:B,cmyk2rgb:k,cmyk2hsl:A,cmyk2hsv:N,cmyk2hwb:U,cmyk2keyword:X,keyword2rgb:z,keyword2hsl:ne,keyword2hsv:te,keyword2hwb:ae,keyword2cmyk:oe,keyword2lab:ie,keyword2xyz:le,xyz2rgb:P,xyz2lab:W,xyz2lch:Y,lab2xyz:Q,lab2rgb:V,lab2lch:$,lch2lab:q,lch2xyz:ee,lch2rgb:re};function v(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(l,t,n),a=Math.max(l,t,n),i=a-o,u,m,L;return a==o?u=0:l==a?u=(t-n)/i:t==a?u=2+(n-l)/i:n==a&&(u=4+(l-t)/i),u=Math.min(u*60,360),u<0&&(u+=360),L=(o+a)/2,a==o?m=0:L<=.5?m=i/(a+o):m=i/(2-a-o),[u,m*100,L*100]}function M(e){var l=e[0],t=e[1],n=e[2],o=Math.min(l,t,n),a=Math.max(l,t,n),i=a-o,u,m,L;return a==0?m=0:m=i/a*1e3/10,a==o?u=0:l==a?u=(t-n)/i:t==a?u=2+(n-l)/i:n==a&&(u=4+(l-t)/i),u=Math.min(u*60,360),u<0&&(u+=360),L=a/255*1e3/10,[u,m,L]}function p(e){var l=e[0],t=e[1],n=e[2],o=v(e)[0],a=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[o,a*100,n*100]}function x(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,o,a,i,u;return u=Math.min(1-l,1-t,1-n),o=(1-l-u)/(1-u)||0,a=(1-t-u)/(1-u)||0,i=(1-n-u)/(1-u)||0,[o*100,a*100,i*100,u*100]}function w(e){return Z[JSON.stringify(e)]}function h(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=l*.4124+t*.3576+n*.1805,a=l*.2126+t*.7152+n*.0722,i=l*.0193+t*.1192+n*.9505;return[o*100,a*100,i*100]}function E(e){var l=h(e),t=l[0],n=l[1],o=l[2],a,i,u;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,a=116*n-16,i=500*(t-n),u=200*(n-o),[a,i,u]}function c(e){return $(E(e))}function d(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o,a,i,u,m;if(t==0)return m=n*255,[m,m,m];n<.5?a=n*(1+t):a=n+t-n*t,o=2*n-a,u=[0,0,0];for(var L=0;L<3;L++)i=l+1/3*-(L-1),i<0&&i++,i>1&&i--,6*i<1?m=o+(a-o)*6*i:2*i<1?m=a:3*i<2?m=o+(a-o)*(2/3-i)*6:m=o,u[L]=m*255;return u}function f(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,a;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,a=(n+t)/2,o=2*t/(n+t),[l,o*100,a*100])}function s(e){return p(d(e))}function y(e){return x(d(e))}function R(e){return w(d(e))}function O(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(l)%6,a=l-Math.floor(l),i=255*n*(1-t),u=255*n*(1-t*a),m=255*n*(1-t*(1-a)),n=255*n;switch(o){case 0:return[n,m,i];case 1:return[u,n,i];case 2:return[i,n,m];case 3:return[i,u,n];case 4:return[m,i,n];case 5:return[n,i,u]}}function T(e){var l=e[0],t=e[1]/100,n=e[2]/100,o,a;return a=(2-t)*n,o=t*n,o/=a<=1?a:2-a,o=o||0,a/=2,[l,o*100,a*100]}function F(e){return p(O(e))}function I(e){return x(O(e))}function G(e){return w(O(e))}function S(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,o=t+n,a,i,u,m;switch(o>1&&(t/=o,n/=o),a=Math.floor(6*l),i=1-n,u=6*l-a,(a&1)!=0&&(u=1-u),m=t+u*(i-t),a){default:case 6:case 0:r=i,g=m,b=t;break;case 1:r=m,g=i,b=t;break;case 2:r=t,g=i,b=m;break;case 3:r=t,g=m,b=i;break;case 4:r=m,g=t,b=i;break;case 5:r=i,g=t,b=m;break}return[r*255,g*255,b*255]}function H(e){return v(S(e))}function j(e){return M(S(e))}function K(e){return x(S(e))}function B(e){return w(S(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o=e[3]/100,a,i,u;return a=1-Math.min(1,l*(1-o)+o),i=1-Math.min(1,t*(1-o)+o),u=1-Math.min(1,n*(1-o)+o),[a*255,i*255,u*255]}function A(e){return v(k(e))}function N(e){return M(k(e))}function U(e){return p(k(e))}function X(e){return w(k(e))}function P(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,o,a,i;return o=l*3.2406+t*-1.5372+n*-.4986,a=l*-.9689+t*1.8758+n*.0415,i=l*.0557+t*-.204+n*1.057,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[o*255,a*255,i*255]}function W(e){var l=e[0],t=e[1],n=e[2],o,a,i;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=116*t-16,a=500*(l-t),i=200*(t-n),[o,a,i]}function Y(e){return $(W(e))}function Q(e){var l=e[0],t=e[1],n=e[2],o,a,i,u;return l<=8?(a=l*100/903.3,u=7.787*(a/100)+16/116):(a=100*Math.pow((l+16)/116,3),u=Math.pow(a/100,1/3)),o=o/95.047<=.008856?o=95.047*(t/500+u-16/116)/7.787:95.047*Math.pow(t/500+u,3),i=i/108.883<=.008859?i=108.883*(u-n/200-16/116)/7.787:108.883*Math.pow(u-n/200,3),[o,a,i]}function $(e){var l=e[0],t=e[1],n=e[2],o,a,i;return o=Math.atan2(n,t),a=o*360/2/Math.PI,a<0&&(a+=360),i=Math.sqrt(t*t+n*n),[l,i,a]}function V(e){return P(Q(e))}function q(e){var l=e[0],t=e[1],n=e[2],o,a,i;return i=n/360*2*Math.PI,o=t*Math.cos(i),a=t*Math.sin(i),[l,o,a]}function ee(e){return Q(q(e))}function re(e){return V(q(e))}function z(e){return J[e]}function ne(e){return v(z(e))}function te(e){return M(z(e))}function ae(e){return p(z(e))}function oe(e){return x(z(e))}function ie(e){return E(z(e))}function le(e){return h(z(e))}var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Z={};for(var _ in J)Z[JSON.stringify(J[_])]=_}}]);
