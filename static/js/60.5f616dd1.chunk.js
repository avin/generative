(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[60,169,170,171],{290:function(D,M,h){"use strict";h.r(M),M.default=`#version 300 es

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
`},291:function(D,M,h){"use strict";h.r(M),M.default=`#version 300 es

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
`},292:function(D,M,h){"use strict";h.r(M),M.default=`#define GLSLIFY 1
// Original one hosted on https://www.shadertoy.com/view/tljSWz

#define BLACK_COL vec3(16, 22, 26) / 255.
#define WHITE_COL vec3(235, 241, 245) / 255.

float rand1(float p)
{
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 ouv = (fragCoord - iResolution.xy * .5) / iResolution.y;

    float angle = 3.1415926 + sin(iTime * .5) * .25;
    ouv *= mat2(cos(angle + vec4(0, 33, 11, 0)));

    float sf = .1 + abs(ouv.y);

    float SIZE = 5. + (sin(iTime * .25) * .5 + .5) * 2.5;

    float m = 0.;
    for (float n = -1.; n <= 1.; n += 1.) {
        vec2 uv = ouv * vec2(1., 1. + .025 * n) * (2. + sin(iTime * .25) * .2);
        uv.y += iTime * .1;

        float foo = 12.22;

        uv = uv * SIZE;
        vec2 gid = floor(uv);
        vec2 guv = fract(uv) - .5;

        for (float y = -1.; y <= 1.; y += 1.) {
            for (float x = -1.; x <= 1.; x += 1.) {
                vec2 iuv = guv + vec2(x, y);
                vec2 iid = gid - vec2(x, y);

                float angle = rand1(iid.x * 25. + iid.y * 41.) * 10. + (iTime * (rand1(iid.x * 10. + iid.y * 60.) + 1.5));

                float ca = cos(angle);
                float sa = sin(angle);
                iuv *= mat2(ca, -sa, sa, ca);

                float size = rand1(iid.x * 50. + iid.y * 25.) * .2 + .5;
                float weight = size * .02;

                float swp = size - weight;
                float m1 = smoothstep(abs(iuv.x), abs(iuv.x) + sf, swp)
                    * smoothstep(abs(iuv.y), abs(iuv.y) + sf, swp);

                swp = size + weight;
                float m2 = smoothstep(abs(iuv.x), abs(iuv.x) + sf, swp)
                    * smoothstep(abs(iuv.y), abs(iuv.y) + sf, swp);

                float rr = rand1(iid.x * 128. + iid.y * 213.);
                m1 *= rr > .075 ? 1.0 : (1. - rr * 5.);

                m += clamp(m2 - m1, 0., 1.);
            }
        }
    }

    vec3 col = mix(BLACK_COL, WHITE_COL, m);

    fragColor = vec4(col, 1.);
}
`},549:function(D,M,h){"use strict";h.d(M,"a",function(){return p});const E=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>E()?"webgl2":"webgl"},705:function(D,M){D.exports=function(){for(var h=0;h<arguments.length;h++)if(arguments[h]!==void 0)return arguments[h]}},75:function(D,M,h){"use strict";h.r(M);var E=h(752),p=h.n(E),x=h(549),w=h(290),d=h(291),C=h(292);const c={context:Object(x.a)(),animate:!0},v=({gl:f,time:u})=>p()({gl:f,frag:w.default.replace("#pragma includeScene",C.default),vert:d.default,uniforms:{iTime:({time:y})=>y,iResolution:({width:y,height:O})=>[y,O,1]}});M.default={sketch:v,settings:c}},752:function(D,M,h){var E=h(764),p=h(765),x=h(753),w=h(705);D.exports=d;function d(c){if(c=c||{},!c.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var v=c.gl,f={gl:v};typeof c.extensions!="undefined"&&(f.extensions=c.extensions),typeof c.optionalExtensions!="undefined"&&(f.optionalExtensions=c.optionalExtensions),typeof c.profile!="undefined"&&(f.profile=c.profile),typeof c.onDone!="undefined"&&(f.onDone=c.onDone);var u=E(f),y=p(),O=new Map,A=c.uniforms||{},P=Object.assign({},A);Object.keys(A).forEach(function(k){var L=A[k];typeof L=="function"?P[k]=function(V,U,Y){var S=L.call(A,U,Y);if(C(S))if(O.has(L)){var F=O.get(L);F(S),S=F}else{var _=u.texture(S);O.set(L,_),S=_}return S}:C(L)?P[k]=u.texture(L):P[k]=L});var W;try{W=H()}catch(k){j(k)}var R=w(c.clearColor,"black");if(typeof R=="string"){var B=x(R);if(!B.rgb)throw new Error('Error parsing { clearColor } color string "'+R+'"');R=B.rgb.slice(0,3).map(function(k){return k/255})}else if(R&&(!Array.isArray(R)||R.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var T=w(c.clearAlpha,1),G=R?R.concat([T||0]):!1;return{render:function(k){u.poll(),G&&u.clear({color:G,depth:1,stencil:0}),K(k),v.flush()},regl:u,drawQuad:K,unload:function(){O.clear(),u.destroy()}};function K(k){if(k=k||{},W)try{W(k)}catch(L){j(L)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function H(){return u({scissor:c.scissor?{enable:!0,box:{x:u.prop("scissorX"),y:u.prop("scissorY"),width:u.prop("scissorWidth"),height:u.prop("scissorHeight")}}:!1,uniforms:P,frag:c.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:c.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:c.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function j(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function C(c){return c&&!Array.isArray(c)&&typeof c=="object"}},753:function(D,M,h){var E=h(754);D.exports=function(p){var x,w,d,C;if(x=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var c=x[1],v=c.replace(/a$/,""),f=v==="cmyk"?4:3;w=E[v],d=x[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,O){return/%$/.test(y)&&O===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),c===v&&d.push(1),C=d[f]===void 0?1:d[f],d=d.slice(0,f),w[v]=function(){return d}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var v=p.replace(/^#/,""),f=v.length;w=E.rgb,d=v.split(f===3?/(.)/:/(..)/),d=d.filter(Boolean).map(function(A){return f===3?parseInt(A+A,16):parseInt(A,16)}),C=1,w.rgb=function(){return d},d[0]||(d[0]=0),d[1]||(d[1]=0),d[2]||(d[2]=0)}else w=E.keyword,w.keyword=function(){return p},d=p,C=1;var u={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{u.rgb=w.rgb(d)}catch(y){}try{u.hsl=w.hsl(d)}catch(y){}try{u.hsv=w.hsv(d)}catch(y){}try{u.cmyk=w.cmyk(d)}catch(y){}try{u.keyword=w.keyword(d)}catch(y){}return u.rgb&&(u.hex="#"+u.rgb.map(function(y){var O=y.toString(16);return O.length===1?"0"+O:O}).join("")),u.rgb&&(u.rgba=u.rgb.concat(C)),u.hsl&&(u.hsla=u.hsl.concat(C)),u.hsv&&(u.hsva=u.hsv.concat(C)),u.cmyk&&(u.cmyka=u.cmyk.concat(C)),u}},754:function(D,M,h){var E=h(755),p=function(){return new c};for(var x in E){p[x+"Raw"]=function(v){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),E[v](f)}}(x);var w=/(\w+)2(\w+)/.exec(x),d=w[1],C=w[2];p[d]=p[d]||{},p[d][C]=p[x]=function(v){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var u=E[v](f);if(typeof u=="string"||u===void 0)return u;for(var y=0;y<u.length;y++)u[y]=Math.round(u[y]);return u}}(x)}var c=function(){this.convs={}};c.prototype.routeSpace=function(v,f){var u=f[0];return u===void 0?this.getValues(v):(typeof u=="number"&&(u=Array.prototype.slice.call(f)),this.setValues(v,u))},c.prototype.setValues=function(v,f){return this.space=v,this.convs={},this.convs[v]=f,this},c.prototype.getValues=function(v){var f=this.convs[v];if(!f){var u=this.space,y=this.convs[u];f=p[u][v](y),this.convs[v]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(v){c.prototype[v]=function(f){return this.routeSpace(v,arguments)}}),D.exports=p},755:function(D,M){D.exports={rgb2hsl:h,rgb2hsv:E,rgb2hwb:p,rgb2cmyk:x,rgb2keyword:w,rgb2xyz:d,rgb2lab:C,rgb2lch:c,hsl2rgb:v,hsl2hsv:f,hsl2hwb:u,hsl2cmyk:y,hsl2keyword:O,hsv2rgb:A,hsv2hsl:P,hsv2hwb:W,hsv2cmyk:R,hsv2keyword:B,hwb2rgb:T,hwb2hsl:G,hwb2hsv:K,hwb2cmyk:H,hwb2keyword:j,cmyk2rgb:k,cmyk2hsl:L,cmyk2hsv:V,cmyk2hwb:U,cmyk2keyword:Y,keyword2rgb:I,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ie,keyword2cmyk:ae,keyword2lab:oe,keyword2xyz:le,xyz2rgb:S,xyz2lab:F,xyz2lch:_,lab2xyz:Q,lab2rgb:q,lab2lch:$,lch2lab:J,lch2xyz:ee,lch2rgb:ne};function h(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,a=Math.min(l,t,n),i=Math.max(l,t,n),o=i-a,s,m,z;return i==a?s=0:l==i?s=(t-n)/o:t==i?s=2+(n-l)/o:n==i&&(s=4+(l-t)/o),s=Math.min(s*60,360),s<0&&(s+=360),z=(a+i)/2,i==a?m=0:z<=.5?m=o/(i+a):m=o/(2-i-a),[s,m*100,z*100]}function E(e){var l=e[0],t=e[1],n=e[2],a=Math.min(l,t,n),i=Math.max(l,t,n),o=i-a,s,m,z;return i==0?m=0:m=o/i*1e3/10,i==a?s=0:l==i?s=(t-n)/o:t==i?s=2+(n-l)/o:n==i&&(s=4+(l-t)/o),s=Math.min(s*60,360),s<0&&(s+=360),z=i/255*1e3/10,[s,m,z]}function p(e){var l=e[0],t=e[1],n=e[2],a=h(e)[0],i=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[a,i*100,n*100]}function x(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,a,i,o,s;return s=Math.min(1-l,1-t,1-n),a=(1-l-s)/(1-s)||0,i=(1-t-s)/(1-s)||0,o=(1-n-s)/(1-s)||0,[a*100,i*100,o*100,s*100]}function w(e){return Z[JSON.stringify(e)]}function d(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var a=l*.4124+t*.3576+n*.1805,i=l*.2126+t*.7152+n*.0722,o=l*.0193+t*.1192+n*.9505;return[a*100,i*100,o*100]}function C(e){var l=d(e),t=l[0],n=l[1],a=l[2],i,o,s;return t/=95.047,n/=100,a/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=116*n-16,o=500*(t-n),s=200*(n-a),[i,o,s]}function c(e){return $(C(e))}function v(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,a,i,o,s,m;if(t==0)return m=n*255,[m,m,m];n<.5?i=n*(1+t):i=n+t-n*t,a=2*n-i,s=[0,0,0];for(var z=0;z<3;z++)o=l+1/3*-(z-1),o<0&&o++,o>1&&o--,6*o<1?m=a+(i-a)*6*o:2*o<1?m=i:3*o<2?m=a+(i-a)*(2/3-o)*6:m=a,s[z]=m*255;return s}function f(e){var l=e[0],t=e[1]/100,n=e[2]/100,a,i;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,i=(n+t)/2,a=2*t/(n+t),[l,a*100,i*100])}function u(e){return p(v(e))}function y(e){return x(v(e))}function O(e){return w(v(e))}function A(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(l)%6,i=l-Math.floor(l),o=255*n*(1-t),s=255*n*(1-t*i),m=255*n*(1-t*(1-i)),n=255*n;switch(a){case 0:return[n,m,o];case 1:return[s,n,o];case 2:return[o,n,m];case 3:return[o,s,n];case 4:return[m,o,n];case 5:return[n,o,s]}}function P(e){var l=e[0],t=e[1]/100,n=e[2]/100,a,i;return i=(2-t)*n,a=t*n,a/=i<=1?i:2-i,a=a||0,i/=2,[l,a*100,i*100]}function W(e){return p(A(e))}function R(e){return x(A(e))}function B(e){return w(A(e))}function T(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,a=t+n,i,o,s,m;switch(a>1&&(t/=a,n/=a),i=Math.floor(6*l),o=1-n,s=6*l-i,(i&1)!=0&&(s=1-s),m=t+s*(o-t),i){default:case 6:case 0:r=o,g=m,b=t;break;case 1:r=m,g=o,b=t;break;case 2:r=t,g=o,b=m;break;case 3:r=t,g=m,b=o;break;case 4:r=m,g=t,b=o;break;case 5:r=o,g=t,b=m;break}return[r*255,g*255,b*255]}function G(e){return h(T(e))}function K(e){return E(T(e))}function H(e){return x(T(e))}function j(e){return w(T(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100,i,o,s;return i=1-Math.min(1,l*(1-a)+a),o=1-Math.min(1,t*(1-a)+a),s=1-Math.min(1,n*(1-a)+a),[i*255,o*255,s*255]}function L(e){return h(k(e))}function V(e){return E(k(e))}function U(e){return p(k(e))}function Y(e){return w(k(e))}function S(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,a,i,o;return a=l*3.2406+t*-1.5372+n*-.4986,i=l*-.9689+t*1.8758+n*.0415,o=l*.0557+t*-.204+n*1.057,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),[a*255,i*255,o*255]}function F(e){var l=e[0],t=e[1],n=e[2],a,i,o;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,a=116*t-16,i=500*(l-t),o=200*(t-n),[a,i,o]}function _(e){return $(F(e))}function Q(e){var l=e[0],t=e[1],n=e[2],a,i,o,s;return l<=8?(i=l*100/903.3,s=7.787*(i/100)+16/116):(i=100*Math.pow((l+16)/116,3),s=Math.pow(i/100,1/3)),a=a/95.047<=.008856?a=95.047*(t/500+s-16/116)/7.787:95.047*Math.pow(t/500+s,3),o=o/108.883<=.008859?o=108.883*(s-n/200-16/116)/7.787:108.883*Math.pow(s-n/200,3),[a,i,o]}function $(e){var l=e[0],t=e[1],n=e[2],a,i,o;return a=Math.atan2(n,t),i=a*360/2/Math.PI,i<0&&(i+=360),o=Math.sqrt(t*t+n*n),[l,o,i]}function q(e){return S(Q(e))}function J(e){var l=e[0],t=e[1],n=e[2],a,i,o;return o=n/360*2*Math.PI,a=t*Math.cos(o),i=t*Math.sin(o),[l,a,i]}function ee(e){return Q(J(e))}function ne(e){return q(J(e))}function I(e){return N[e]}function re(e){return h(I(e))}function te(e){return E(I(e))}function ie(e){return p(I(e))}function ae(e){return x(I(e))}function oe(e){return C(I(e))}function le(e){return d(I(e))}var N={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Z={};for(var X in N)Z[JSON.stringify(N[X])]=X}}]);
