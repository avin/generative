(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[65,151,152],{272:function(O,E,v){"use strict";v.r(E),E.default=`#version 300 es
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

// Original one hosted on https://www.shadertoy.com/view/3ld3zN

#define BLACK_COL vec3(16,22,26)/255.
#define WHITE_COL vec3(235,241,245)/255.
#define RED_COL vec3(245, 73, 139)/255.

#define SF 1./min(iResolution.x,iResolution.y)

#define MOD3 vec3(.1031,.11369,.13787)

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

float tsin()
{
    float t = iTime * 1.25;
	return sin(t + cos(t*2.))*.5 + .5;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 ouv = (fragCoord - iResolution.xy*.5)/iResolution.y;
    vec2 q = fragCoord.xy / iResolution.xy;

    float COUNT = floor(iResolution.y / 8.);
    float wSize = 5.;

    float sf = SF * COUNT * .75;

    vec2 uv = ouv * vec2(1., COUNT);
    vec2 gid = vec2(uv.x, floor(uv.y));
    vec2 guv = vec2(uv.x, fract(uv.y))  - vec2(0., .5);

    float g = 1.;
    for(float i=-wSize; i<=wSize; i+=1.)
    {
        vec2 iuv = guv + vec2(0,i);
        vec2 iid = gid - vec2(0,i);

        vec2 nuv = iid / vec2(1., COUNT/5.);
        vec2 uv = iuv + simplex_noise(vec3(nuv*COUNT/20., iTime*.5))*wSize/4. - vec2(0., wSize*.5);

        float itsin = tsin()*.3;
        float sss =
            smoothstep(.1 + itsin,.2 + itsin, length(iid / vec2(1., COUNT)));
        uv += vec2(0., sss )* wSize*1.25 ;

        g *= smoothstep(abs(uv.y), .0 , sf*0.75);
    }

    float ctsin = tsin()*.3;
    vec3 backCol = mix(BLACK_COL, RED_COL, smoothstep(.15+ctsin+SF, .15+ctsin, length(ouv)));

    vec3 col = mix(WHITE_COL, backCol, g);

    //-----------------------------------------------------
    // postprocessing
    //-----------------------------------------------------

    // Border dark
    col *= 0.2 + 0.8 * pow(32.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.3);

    // Fade in
    col *= smoothstep(0.0, 1.0, iTime);

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
`},273:function(O,E,v){"use strict";v.r(E),E.default=`#version 300 es
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
`},549:function(O,E,v){"use strict";v.d(E,"a",function(){return p});const M=()=>!!document.createElement("canvas").getContext("webgl2"),p=()=>M()?"webgl2":"webgl"},66:function(O,E,v){"use strict";v.r(E);var M=v(752),p=v.n(M),x=v(549),w=v(272),h=v(273);const C={context:Object(x.a)(),animate:!0},u=({gl:d,time:f})=>p()({gl:d,frag:w.default,vert:h.default,uniforms:{iTime:({time:l})=>l,iResolution:({width:l,height:y})=>[l,y,1]}});E.default={sketch:u,settings:C}},705:function(O,E){O.exports=function(){for(var v=0;v<arguments.length;v++)if(arguments[v]!==void 0)return arguments[v]}},752:function(O,E,v){var M=v(764),p=v(765),x=v(753),w=v(705);O.exports=h;function h(u){if(u=u||{},!u.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=u.gl,f={gl:d};typeof u.extensions!="undefined"&&(f.extensions=u.extensions),typeof u.optionalExtensions!="undefined"&&(f.optionalExtensions=u.optionalExtensions),typeof u.profile!="undefined"&&(f.profile=u.profile),typeof u.onDone!="undefined"&&(f.onDone=u.onDone);var l=M(f),y=p(),D=new Map,z=u.uniforms||{},K=Object.assign({},z);Object.keys(z).forEach(function(k){var R=z[k];typeof R=="function"?K[k]=function(J,G,j){var A=R.call(z,G,j);if(C(A))if(D.has(R)){var F=D.get(R);F(A),A=F}else{var _=l.texture(A);D.set(R,_),A=_}return A}:C(R)?K[k]=l.texture(R):K[k]=R});var P;try{P=q()}catch(k){N(k)}var S=w(u.clearColor,"black");if(typeof S=="string"){var U=x(S);if(!U.rgb)throw new Error('Error parsing { clearColor } color string "'+S+'"');S=U.rgb.slice(0,3).map(function(k){return k/255})}else if(S&&(!Array.isArray(S)||S.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var L=w(u.clearAlpha,1),W=S?S.concat([L||0]):!1;return{render:function(k){l.poll(),W&&l.clear({color:W,depth:1,stencil:0}),B(k),d.flush()},regl:l,drawQuad:B,unload:function(){D.clear(),l.destroy()}};function B(k){if(k=k||{},P)try{P(k)}catch(R){N(R)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function q(){return l({scissor:u.scissor?{enable:!0,box:{x:l.prop("scissorX"),y:l.prop("scissorY"),width:l.prop("scissorWidth"),height:l.prop("scissorHeight")}}:!1,uniforms:K,frag:u.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:u.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:u.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:y.positions},elements:y.cells})}function N(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function C(u){return u&&!Array.isArray(u)&&typeof u=="object"}},753:function(O,E,v){var M=v(754);O.exports=function(p){var x,w,h,C;if(x=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(p)){var u=x[1],d=u.replace(/a$/,""),f=d==="cmyk"?4:3;w=M[d],h=x[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(y,D){return/%$/.test(y)&&D===f?parseFloat(y)/100:(/%$/.test(y),parseFloat(y))}),u===d&&h.push(1),C=h[f]===void 0?1:h[f],h=h.slice(0,f),w[d]=function(){return h}}else if(/^#[A-Fa-f0-9]+$/.test(p)){var d=p.replace(/^#/,""),f=d.length;w=M.rgb,h=d.split(f===3?/(.)/:/(..)/),h=h.filter(Boolean).map(function(z){return f===3?parseInt(z+z,16):parseInt(z,16)}),C=1,w.rgb=function(){return h},h[0]||(h[0]=0),h[1]||(h[1]=0),h[2]||(h[2]=0)}else w=M.keyword,w.keyword=function(){return p},h=p,C=1;var l={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{l.rgb=w.rgb(h)}catch(y){}try{l.hsl=w.hsl(h)}catch(y){}try{l.hsv=w.hsv(h)}catch(y){}try{l.cmyk=w.cmyk(h)}catch(y){}try{l.keyword=w.keyword(h)}catch(y){}return l.rgb&&(l.hex="#"+l.rgb.map(function(y){var D=y.toString(16);return D.length===1?"0"+D:D}).join("")),l.rgb&&(l.rgba=l.rgb.concat(C)),l.hsl&&(l.hsla=l.hsl.concat(C)),l.hsv&&(l.hsva=l.hsv.concat(C)),l.cmyk&&(l.cmyka=l.cmyk.concat(C)),l}},754:function(O,E,v){var M=v(755),p=function(){return new u};for(var x in M){p[x+"Raw"]=function(d){return function(f){return typeof f=="number"&&(f=Array.prototype.slice.call(arguments)),M[d](f)}}(x);var w=/(\w+)2(\w+)/.exec(x),h=w[1],C=w[2];p[h]=p[h]||{},p[h][C]=p[x]=function(d){return function(f){typeof f=="number"&&(f=Array.prototype.slice.call(arguments));var l=M[d](f);if(typeof l=="string"||l===void 0)return l;for(var y=0;y<l.length;y++)l[y]=Math.round(l[y]);return l}}(x)}var u=function(){this.convs={}};u.prototype.routeSpace=function(d,f){var l=f[0];return l===void 0?this.getValues(d):(typeof l=="number"&&(l=Array.prototype.slice.call(f)),this.setValues(d,l))},u.prototype.setValues=function(d,f){return this.space=d,this.convs={},this.convs[d]=f,this},u.prototype.getValues=function(d){var f=this.convs[d];if(!f){var l=this.space,y=this.convs[l];f=p[l][d](y),this.convs[d]=f}return f},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){u.prototype[d]=function(f){return this.routeSpace(d,arguments)}}),O.exports=p},755:function(O,E){O.exports={rgb2hsl:v,rgb2hsv:M,rgb2hwb:p,rgb2cmyk:x,rgb2keyword:w,rgb2xyz:h,rgb2lab:C,rgb2lch:u,hsl2rgb:d,hsl2hsv:f,hsl2hwb:l,hsl2cmyk:y,hsl2keyword:D,hsv2rgb:z,hsv2hsl:K,hsv2hwb:P,hsv2cmyk:S,hsv2keyword:U,hwb2rgb:L,hwb2hsl:W,hwb2hsv:B,hwb2cmyk:q,hwb2keyword:N,cmyk2rgb:k,cmyk2hsl:R,cmyk2hsv:J,cmyk2hwb:G,cmyk2keyword:j,keyword2rgb:I,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ie,keyword2cmyk:oe,keyword2lab:ae,keyword2xyz:se,xyz2rgb:A,xyz2lab:F,xyz2lch:_,lab2xyz:H,lab2rgb:V,lab2lch:Q,lch2lab:Y,lch2xyz:ee,lch2rgb:ne};function v(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(s,t,n),i=Math.max(s,t,n),a=i-o,c,m,T;return i==o?c=0:s==i?c=(t-n)/a:t==i?c=2+(n-s)/a:n==i&&(c=4+(s-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),T=(o+i)/2,i==o?m=0:T<=.5?m=a/(i+o):m=a/(2-i-o),[c,m*100,T*100]}function M(e){var s=e[0],t=e[1],n=e[2],o=Math.min(s,t,n),i=Math.max(s,t,n),a=i-o,c,m,T;return i==0?m=0:m=a/i*1e3/10,i==o?c=0:s==i?c=(t-n)/a:t==i?c=2+(n-s)/a:n==i&&(c=4+(s-t)/a),c=Math.min(c*60,360),c<0&&(c+=360),T=i/255*1e3/10,[c,m,T]}function p(e){var s=e[0],t=e[1],n=e[2],o=v(e)[0],i=1/255*Math.min(s,Math.min(t,n)),n=1-1/255*Math.max(s,Math.max(t,n));return[o,i*100,n*100]}function x(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,o,i,a,c;return c=Math.min(1-s,1-t,1-n),o=(1-s-c)/(1-c)||0,i=(1-t-c)/(1-c)||0,a=(1-n-c)/(1-c)||0,[o*100,i*100,a*100,c*100]}function w(e){return X[JSON.stringify(e)]}function h(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255;s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=s*.4124+t*.3576+n*.1805,i=s*.2126+t*.7152+n*.0722,a=s*.0193+t*.1192+n*.9505;return[o*100,i*100,a*100]}function C(e){var s=h(e),t=s[0],n=s[1],o=s[2],i,a,c;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=116*n-16,a=500*(t-n),c=200*(n-o),[i,a,c]}function u(e){return Q(C(e))}function d(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,o,i,a,c,m;if(t==0)return m=n*255,[m,m,m];n<.5?i=n*(1+t):i=n+t-n*t,o=2*n-i,c=[0,0,0];for(var T=0;T<3;T++)a=s+1/3*-(T-1),a<0&&a++,a>1&&a--,6*a<1?m=o+(i-o)*6*a:2*a<1?m=i:3*a<2?m=o+(i-o)*(2/3-a)*6:m=o,c[T]=m*255;return c}function f(e){var s=e[0],t=e[1]/100,n=e[2]/100,o,i;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,i=(n+t)/2,o=2*t/(n+t),[s,o*100,i*100])}function l(e){return p(d(e))}function y(e){return x(d(e))}function D(e){return w(d(e))}function z(e){var s=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(s)%6,i=s-Math.floor(s),a=255*n*(1-t),c=255*n*(1-t*i),m=255*n*(1-t*(1-i)),n=255*n;switch(o){case 0:return[n,m,a];case 1:return[c,n,a];case 2:return[a,n,m];case 3:return[a,c,n];case 4:return[m,a,n];case 5:return[n,a,c]}}function K(e){var s=e[0],t=e[1]/100,n=e[2]/100,o,i;return i=(2-t)*n,o=t*n,o/=i<=1?i:2-i,o=o||0,i/=2,[s,o*100,i*100]}function P(e){return p(z(e))}function S(e){return x(z(e))}function U(e){return w(z(e))}function L(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,o=t+n,i,a,c,m;switch(o>1&&(t/=o,n/=o),i=Math.floor(6*s),a=1-n,c=6*s-i,(i&1)!=0&&(c=1-c),m=t+c*(a-t),i){default:case 6:case 0:r=a,g=m,b=t;break;case 1:r=m,g=a,b=t;break;case 2:r=t,g=a,b=m;break;case 3:r=t,g=m,b=a;break;case 4:r=m,g=t,b=a;break;case 5:r=a,g=t,b=m;break}return[r*255,g*255,b*255]}function W(e){return v(L(e))}function B(e){return M(L(e))}function q(e){return x(L(e))}function N(e){return w(L(e))}function k(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,o=e[3]/100,i,a,c;return i=1-Math.min(1,s*(1-o)+o),a=1-Math.min(1,t*(1-o)+o),c=1-Math.min(1,n*(1-o)+o),[i*255,a*255,c*255]}function R(e){return v(k(e))}function J(e){return M(k(e))}function G(e){return p(k(e))}function j(e){return w(k(e))}function A(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,o,i,a;return o=s*3.2406+t*-1.5372+n*-.4986,i=s*-.9689+t*1.8758+n*.0415,a=s*.0557+t*-.204+n*1.057,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[o*255,i*255,a*255]}function F(e){var s=e[0],t=e[1],n=e[2],o,i,a;return s/=95.047,t/=100,n/=108.883,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=116*t-16,i=500*(s-t),a=200*(t-n),[o,i,a]}function _(e){return Q(F(e))}function H(e){var s=e[0],t=e[1],n=e[2],o,i,a,c;return s<=8?(i=s*100/903.3,c=7.787*(i/100)+16/116):(i=100*Math.pow((s+16)/116,3),c=Math.pow(i/100,1/3)),o=o/95.047<=.008856?o=95.047*(t/500+c-16/116)/7.787:95.047*Math.pow(t/500+c,3),a=a/108.883<=.008859?a=108.883*(c-n/200-16/116)/7.787:108.883*Math.pow(c-n/200,3),[o,i,a]}function Q(e){var s=e[0],t=e[1],n=e[2],o,i,a;return o=Math.atan2(n,t),i=o*360/2/Math.PI,i<0&&(i+=360),a=Math.sqrt(t*t+n*n),[s,a,i]}function V(e){return A(H(e))}function Y(e){var s=e[0],t=e[1],n=e[2],o,i,a;return a=n/360*2*Math.PI,o=t*Math.cos(a),i=t*Math.sin(a),[s,o,i]}function ee(e){return H(Y(e))}function ne(e){return V(Y(e))}function I(e){return $[e]}function re(e){return v(I(e))}function te(e){return M(I(e))}function ie(e){return p(I(e))}function oe(e){return x(I(e))}function ae(e){return C(I(e))}function se(e){return h(I(e))}var $={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},X={};for(var Z in $)X[JSON.stringify($[Z])]=Z}}]);
