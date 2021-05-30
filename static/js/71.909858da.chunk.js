(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[71,167,168],{288:function(D,C,v){"use strict";v.r(C),C.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/WtdXWS

#define SIZE 10.0
#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

#define SF 1./min(iResolution.x,iResolution.y)*SIZE*.5
#define SS(l,s) smoothstep(SF,-SF,l-s)

#define MOD3 vec3(.1031,.11369,.13787)

float hash12(vec2 p)
{
    vec3 p3  = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

vec3 hash33(vec3 p3)
{
	p3 = fract(p3 * MOD3);
    p3 += dot(p3, p3.yxz+19.19);
    return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float simplex_noise(vec3 p)
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
    float hsm = 1.5 / iResolution.y * SIZE * 0.5; // Half-Smooth factor

    uv *= SIZE;
    vec2 id = floor(uv);
    uv = fract(uv) - 0.5;

    float mask = 0.0;
    for(float y =- 1.0; y <= 1.0; y++ ) {
        for(float x =- 1.0; x <= 1.0; x++ ) {
            vec2 rid = id - vec2(x, y);
            vec2 ruv = uv + vec2(x, y) +
                vec2(0, mod(rid, 2.)*.5) +
                vec2(0, sin(simplex_noise(vec3(rid*0.5, iTime))*5.)*.1);

            float l = length(ruv);
            float s = SIZE/500.;

            float d = SS(l, .65) * (ruv.y+.5);

            mask = max(mask, d);
        }
    }

    vec3 col = vec3(1.0);
    col = mix(COL1, COL2, abs(mask));

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
`},289:function(D,C,v){"use strict";v.r(C),C.default=`#version 300 es
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
`},549:function(D,C,v){"use strict";v.d(C,"a",function(){return p});const M=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>M()?"webgl2":"webgl"},705:function(D,C){D.exports=function(){for(var v=0;v<arguments.length;v++)if(arguments[v]!==void 0)return arguments[v]}},74:function(D,C,v){"use strict";v.r(C);var M=v(752),p=v.n(M),x=v(549),w=v(288),h=v(289);const E={context:Object(x.a)(),animate:!0},u=({gl:d,time:f})=>p()({gl:d,frag:w.default,vert:h.default,uniforms:{iTime:({time:s})=>s,iResolution:({width:s,height:y})=>[s,y,1]}});C.default={sketch:u,settings:E}},752:function(D,C,v){var M=v(764),p=v(765),x=v(753),w=v(705);D.exports=h;function h(u){if(u=u||{},!u.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=u.gl,f={gl:d};typeof u.extensions!="undefined"&&(f.extensions=u.extensions),typeof u.optionalExtensions!="undefined"&&(f.optionalExtensions=u.optionalExtensions),typeof u.profile!="undefined"&&(f.profile=u.profile),typeof u.onDone!="undefined"&&(f.onDone=u.onDone);var s=M(f),y=p(),z=new Map,S=u.uniforms||{},F=Object.assign({},S);Object.keys(S).forEach(function(k){var O=S[k];typeof O=="function"?F[k]=function(J,Q,Y){var I=O.call(S,Q,Y);if(E(I))if(z.has(O)){var T=z.get(O);T(I),I=T}else{var H=s.texture(I);z.set(O,H),I=H}return I}:E(O)?F[k]=s.texture(O):F[k]=O});var K;try{K=U()}catch(k){B(k)}var R=w(u.clearColor,"black");if(typeof R=="string"){var W=x(R);if(!W.rgb)throw new Error('Error parsing { clearColor } color string "'+R+'"');R=W.rgb.slice(0,3).map(function(k){return k/255})}else if(R&&(!Array.isArray(R)||R.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var L=w(u.clearAlpha,1),G=R?R.concat([L||0]):!1;return{render:function(k){s.poll(),G&&s.clear({color:G,depth:1,stencil:0}),j(k),d.flush()},regl:s,drawQuad:j,unload:function(){z.clear(),s.destroy()}};function j(k){if(k=k||{},K)try{K(k)}catch(O){B(O)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function U(){return s({scissor:u.scissor?{enable:!0,box:{x:s.prop("scissorX"),y:s.prop("scissorY"),width:s.prop("scissorWidth"),height:s.prop("scissorHeight")}}:!1,uniforms:F,frag:u.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:u.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:u.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function B(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(u){return u&&!Array.isArray(u)&&typeof u=="object"}},753:function(D,C,v){var M=v(754);D.exports=function(p){var x,w,h,E;if(x=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var u=x[1],d=u.replace(/a$/,""),f=d==="cmyk"?4:3;w=M[d],h=x[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,z){return/%$/.test(y)&&z===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),u===d&&h.push(1),E=h[f]===void 0?1:h[f],h=h.slice(0,f),w[d]=function(){return h}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var d=p.replace(/^#/,""),f=d.length;w=M.rgb,h=d.split(f===3?/(.)/:/(..)/),h=h.filter(Boolean).map(function(S){return f===3?parseInt(S+S,16):parseInt(S,16)}),E=1,w.rgb=function(){return h},h[0]||(h[0]=0),h[1]||(h[1]=0),h[2]||(h[2]=0)}else w=M.keyword,w.keyword=function(){return p},h=p,E=1;var s={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{s.rgb=w.rgb(h)}catch(y){}try{s.hsl=w.hsl(h)}catch(y){}try{s.hsv=w.hsv(h)}catch(y){}try{s.cmyk=w.cmyk(h)}catch(y){}try{s.keyword=w.keyword(h)}catch(y){}return s.rgb&&(s.hex="#"+s.rgb.map(function(y){var z=y.toString(16);return z.length===1?"0"+z:z}).join("")),s.rgb&&(s.rgba=s.rgb.concat(E)),s.hsl&&(s.hsla=s.hsl.concat(E)),s.hsv&&(s.hsva=s.hsv.concat(E)),s.cmyk&&(s.cmyka=s.cmyk.concat(E)),s}},754:function(D,C,v){var M=v(755),p=function(){return new u};for(var x in M){p[x+"Raw"]=function(d){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),M[d](f)}}(x);var w=/(\w+)2(\w+)/.exec(x),h=w[1],E=w[2];p[h]=p[h]||{},p[h][E]=p[x]=function(d){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var s=M[d](f);if(typeof s=="string"||s===void 0)return s;for(var y=0;y<s.length;y++)s[y]=Math.round(s[y]);return s}}(x)}var u=function(){this.convs={}};u.prototype.routeSpace=function(d,f){var s=f[0];return s===void 0?this.getValues(d):(typeof s=="number"&&(s=Array.prototype.slice.call(f)),this.setValues(d,s))},u.prototype.setValues=function(d,f){return this.space=d,this.convs={},this.convs[d]=f,this},u.prototype.getValues=function(d){var f=this.convs[d];if(!f){var s=this.space,y=this.convs[s];f=p[s][d](y),this.convs[d]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){u.prototype[d]=function(f){return this.routeSpace(d,arguments)}}),D.exports=p},755:function(D,C){D.exports={rgb2hsl:v,rgb2hsv:M,rgb2hwb:p,rgb2cmyk:x,rgb2keyword:w,rgb2xyz:h,rgb2lab:E,rgb2lch:u,hsl2rgb:d,hsl2hsv:f,hsl2hwb:s,hsl2cmyk:y,hsl2keyword:z,hsv2rgb:S,hsv2hsl:F,hsv2hwb:K,hsv2cmyk:R,hsv2keyword:W,hwb2rgb:L,hwb2hsl:G,hwb2hsv:j,hwb2cmyk:U,hwb2keyword:B,cmyk2rgb:k,cmyk2hsl:O,cmyk2hsv:J,cmyk2hwb:Q,cmyk2keyword:Y,keyword2rgb:P,keyword2hsl:re,keyword2hsv:te,keyword2hwb:oe,keyword2cmyk:ie,keyword2lab:ae,keyword2xyz:le,xyz2rgb:I,xyz2lab:T,xyz2lch:H,lab2xyz:Z,lab2rgb:N,lab2lch:_,lch2lab:$,lch2xyz:ee,lch2rgb:ne};function v(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,i=Math.min(l,t,n),o=Math.max(l,t,n),a=o-i,c,m,A;return o==i?c=0:l==o?c=(t-n)/a:t==o?c=2+(n-l)/a:n==o&&(c=4+(l-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),A=(i+o)/2,o==i?m=0:A<=.5?m=a/(o+i):m=a/(2-o-i),[c,m*100,A*100]}function M(e){var l=e[0],t=e[1],n=e[2],i=Math.min(l,t,n),o=Math.max(l,t,n),a=o-i,c,m,A;return o==0?m=0:m=a/o*1e3/10,o==i?c=0:l==o?c=(t-n)/a:t==o?c=2+(n-l)/a:n==o&&(c=4+(l-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),A=o/255*1e3/10,[c,m,A]}function p(e){var l=e[0],t=e[1],n=e[2],i=v(e)[0],o=1/255*Math.min(l,Math.min(t,n)),n=1-1/255*Math.max(l,Math.max(t,n));return[i,o*100,n*100]}function x(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255,i,o,a,c;return c=Math.min(1-l,1-t,1-n),i=(1-l-c)/(1-c)||0,o=(1-t-c)/(1-c)||0,a=(1-n-c)/(1-c)||0,[i*100,o*100,a*100,c*100]}function w(e){return V[JSON.stringify(e)]}function h(e){var l=e[0]/255,t=e[1]/255,n=e[2]/255;l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var i=l*.4124+t*.3576+n*.1805,o=l*.2126+t*.7152+n*.0722,a=l*.0193+t*.1192+n*.9505;return[i*100,o*100,a*100]}function E(e){var l=h(e),t=l[0],n=l[1],i=l[2],o,a,c;return t/=95.047,n/=100,i/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,o=116*n-16,a=500*(t-n),c=200*(n-i),[o,a,c]}function u(e){return _(E(e))}function d(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,i,o,a,c,m;if(t==0)return m=n*255,[m,m,m];n<.5?o=n*(1+t):o=n+t-n*t,i=2*n-o,c=[0,0,0];for(var A=0;A<3;A++)a=l+1/3*-(A-1),a<0&&a++,a>1&&a--,6*a<1?m=i+(o-i)*6*a:2*a<1?m=o:3*a<2?m=i+(o-i)*(2/3-a)*6:m=i,c[A]=m*255;return c}function f(e){var l=e[0],t=e[1]/100,n=e[2]/100,i,o;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,o=(n+t)/2,i=2*t/(n+t),[l,i*100,o*100])}function s(e){return p(d(e))}function y(e){return x(d(e))}function z(e){return w(d(e))}function S(e){var l=e[0]/60,t=e[1]/100,n=e[2]/100,i=Math.floor(l)%6,o=l-Math.floor(l),a=255*n*(1-t),c=255*n*(1-t*o),m=255*n*(1-t*(1-o)),n=255*n;switch(i){case 0:return[n,m,a];case 1:return[c,n,a];case 2:return[a,n,m];case 3:return[a,c,n];case 4:return[m,a,n];case 5:return[n,a,c]}}function F(e){var l=e[0],t=e[1]/100,n=e[2]/100,i,o;return o=(2-t)*n,i=t*n,i/=o<=1?o:2-o,i=i||0,o/=2,[l,i*100,o*100]}function K(e){return p(S(e))}function R(e){return x(S(e))}function W(e){return w(S(e))}function L(e){var l=e[0]/360,t=e[1]/100,n=e[2]/100,i=t+n,o,a,c,m;switch(i>1&&(t/=i,n/=i),o=Math.floor(6*l),a=1-n,c=6*l-o,(o&1)!=0&&(c=1-c),m=t+c*(a-t),o){default:case 6:case 0:r=a,g=m,b=t;break;case 1:r=m,g=a,b=t;break;case 2:r=t,g=a,b=m;break;case 3:r=t,g=m,b=a;break;case 4:r=m,g=t,b=a;break;case 5:r=a,g=t,b=m;break}return[r*255,g*255,b*255]}function G(e){return v(L(e))}function j(e){return M(L(e))}function U(e){return x(L(e))}function B(e){return w(L(e))}function k(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,i=e[3]/100,o,a,c;return o=1-Math.min(1,l*(1-i)+i),a=1-Math.min(1,t*(1-i)+i),c=1-Math.min(1,n*(1-i)+i),[o*255,a*255,c*255]}function O(e){return v(k(e))}function J(e){return M(k(e))}function Q(e){return p(k(e))}function Y(e){return w(k(e))}function I(e){var l=e[0]/100,t=e[1]/100,n=e[2]/100,i,o,a;return i=l*3.2406+t*-1.5372+n*-.4986,o=l*-.9689+t*1.8758+n*.0415,a=l*.0557+t*-.204+n*1.057,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[i*255,o*255,a*255]}function T(e){var l=e[0],t=e[1],n=e[2],i,o,a;return l/=95.047,t/=100,n/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=116*t-16,o=500*(l-t),a=200*(t-n),[i,o,a]}function H(e){return _(T(e))}function Z(e){var l=e[0],t=e[1],n=e[2],i,o,a,c;return l<=8?(o=l*100/903.3,c=7.787*(o/100)+16/116):(o=100*Math.pow((l+16)/116,3),c=Math.pow(o/100,1/3)),i=i/95.047<=.008856?i=95.047*(t/500+c-16/116)/7.787:95.047*Math.pow(t/500+c,3),a=a/108.883<=.008859?a=108.883*(c-n/200-16/116)/7.787:108.883*Math.pow(c-n/200,3),[i,o,a]}function _(e){var l=e[0],t=e[1],n=e[2],i,o,a;return i=Math.atan2(n,t),o=i*360/2/Math.PI,o<0&&(o+=360),a=Math.sqrt(t*t+n*n),[l,a,o]}function N(e){return I(Z(e))}function $(e){var l=e[0],t=e[1],n=e[2],i,o,a;return a=n/360*2*Math.PI,i=t*Math.cos(a),o=t*Math.sin(a),[l,i,o]}function ee(e){return Z($(e))}function ne(e){return N($(e))}function P(e){return q[e]}function re(e){return v(P(e))}function te(e){return M(P(e))}function oe(e){return p(P(e))}function ie(e){return x(P(e))}function ae(e){return E(P(e))}function le(e){return h(P(e))}var q={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},V={};for(var X in q)V[JSON.stringify(q[X])]=X}}]);
