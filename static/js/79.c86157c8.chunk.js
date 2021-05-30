(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[79,148],{269:function(O,z,y){"use strict";y.r(z),z.default=`precision highp float;
#define GLSLIFY 1

uniform float iTime;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec2 vUv;

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/tsGSzc

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

#define COUNT 22.

vec3 hsv2rgb( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

	return c.z * mix( vec3(1.0), rgb, c.y);
}

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

void rotate(in float angle, inout vec2 uv)
{
    float ca = cos(angle);
    float sa = sin(angle);
    uv *= mat2(ca, -sa, sa, ca);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;
    rotate(.5, uv);
    float t = iTime*.75;

    float sm = (1./iResolution.y * 2.);

    vec3 res = vec3(0.);

    for(float i=0.; i<COUNT;i+=1.){
        vec2 oiuv = uv;
        vec2 iuv = uv;

        iuv.x += rand1(i+COUNT)*.5 - .25;

        iuv.x += simplex_noise(vec3(i, oiuv.y + t, rand1(i+COUNT)))*.25;

        float angle = rand1(i)*.5;
        rotate(angle, iuv);

        float perc = i/COUNT;

        float width = (perc + .5)*.015 - rand1(i+COUNT*3.)*.01;
        float ism = sm; // + (1. - perc)*.025;

    	float g = smoothstep(width + ism, width, abs(iuv.x));

        float gSh = smoothstep(width, width + ism*10., abs(iuv.x));

        res = res*clamp(gSh + .5, .0, 1.);

        vec3 lineCol = hsv2rgb(vec3(.5 + rand1(i+COUNT*2.)*.41, rand1(i)*.5+.25, 1.0)).rgb;

        res = mix(res, lineCol,  g);
    }

    // Output to screen
    fragColor = vec4(res,1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},549:function(O,z,y){"use strict";y.d(z,"a",function(){return m});const M=()=>!!document.createElement("canvas").getContext("webgl2"),m=()=>M()?"webgl2":"webgl"},63:function(O,z,y){"use strict";y.r(z);var M=y(752),m=y.n(M),x=y(549),p=y(269);const f={context:Object(x.a)(),animate:!0},E=({gl:h,time:d})=>m()({gl:h,frag:p.default,uniforms:{iTime:({time:u})=>u,iResolution:({width:u,height:c})=>[u,c]}});z.default={sketch:E,settings:f}},705:function(O,z){O.exports=function(){for(var y=0;y<arguments.length;y++)if(arguments[y]!==void 0)return arguments[y]}},752:function(O,z,y){var M=y(764),m=y(765),x=y(753),p=y(705);O.exports=f;function f(h){if(h=h||{},!h.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=h.gl,u={gl:d};typeof h.extensions!="undefined"&&(u.extensions=h.extensions),typeof h.optionalExtensions!="undefined"&&(u.optionalExtensions=h.optionalExtensions),typeof h.profile!="undefined"&&(u.profile=h.profile),typeof h.onDone!="undefined"&&(u.onDone=h.onDone);var c=M(u),w=m(),A=new Map,C=h.uniforms||{},P=Object.assign({},C);Object.keys(C).forEach(function(k){var D=C[k];typeof D=="function"?P[k]=function(Y,q,H){var U=D.call(C,q,H);if(E(U))if(A.has(D)){var L=A.get(D);L(U),U=L}else{var F=c.texture(U);A.set(D,F),U=F}return U}:E(D)?P[k]=c.texture(D):P[k]=D});var I;try{I=G()}catch(k){B(k)}var R=p(h.clearColor,"black");if(typeof R=="string"){var N=x(R);if(!N.rgb)throw new Error('Error parsing { clearColor } color string "'+R+'"');R=N.rgb.slice(0,3).map(function(k){return k/255})}else if(R&&(!Array.isArray(R)||R.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var S=p(h.clearAlpha,1),W=R?R.concat([S||0]):!1;return{render:function(k){c.poll(),W&&c.clear({color:W,depth:1,stencil:0}),j(k),d.flush()},regl:c,drawQuad:j,unload:function(){A.clear(),c.destroy()}};function j(k){if(k=k||{},I)try{I(k)}catch(D){B(D)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function G(){return c({scissor:h.scissor?{enable:!0,box:{x:c.prop("scissorX"),y:c.prop("scissorY"),width:c.prop("scissorWidth"),height:c.prop("scissorHeight")}}:!1,uniforms:P,frag:h.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:h.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:h.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:w.positions},elements:w.cells})}function B(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(h){return h&&!Array.isArray(h)&&typeof h=="object"}},753:function(O,z,y){var M=y(754);O.exports=function(m){var x,p,f,E;if(x=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(m)){var h=x[1],d=h.replace(/a$/,""),u=d==="cmyk"?4:3;p=M[d],f=x[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(w,A){return/%$/.test(w)&&A===u?parseFloat(w)/100:(/%$/.test(w),parseFloat(w))}),h===d&&f.push(1),E=f[u]===void 0?1:f[u],f=f.slice(0,u),p[d]=function(){return f}}else if(/^#[A-Fa-f0-9]+$/.test(m)){var d=m.replace(/^#/,""),u=d.length;p=M.rgb,f=d.split(u===3?/(.)/:/(..)/),f=f.filter(Boolean).map(function(C){return u===3?parseInt(C+C,16):parseInt(C,16)}),E=1,p.rgb=function(){return f},f[0]||(f[0]=0),f[1]||(f[1]=0),f[2]||(f[2]=0)}else p=M.keyword,p.keyword=function(){return m},f=m,E=1;var c={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{c.rgb=p.rgb(f)}catch(w){}try{c.hsl=p.hsl(f)}catch(w){}try{c.hsv=p.hsv(f)}catch(w){}try{c.cmyk=p.cmyk(f)}catch(w){}try{c.keyword=p.keyword(f)}catch(w){}return c.rgb&&(c.hex="#"+c.rgb.map(function(w){var A=w.toString(16);return A.length===1?"0"+A:A}).join("")),c.rgb&&(c.rgba=c.rgb.concat(E)),c.hsl&&(c.hsla=c.hsl.concat(E)),c.hsv&&(c.hsva=c.hsv.concat(E)),c.cmyk&&(c.cmyka=c.cmyk.concat(E)),c}},754:function(O,z,y){var M=y(755),m=function(){return new h};for(var x in M){m[x+"Raw"]=function(d){return function(u){return typeof u=="number"&&(u=Array.prototype.slice.call(arguments)),M[d](u)}}(x);var p=/(\w+)2(\w+)/.exec(x),f=p[1],E=p[2];m[f]=m[f]||{},m[f][E]=m[x]=function(d){return function(u){typeof u=="number"&&(u=Array.prototype.slice.call(arguments));var c=M[d](u);if(typeof c=="string"||c===void 0)return c;for(var w=0;w<c.length;w++)c[w]=Math.round(c[w]);return c}}(x)}var h=function(){this.convs={}};h.prototype.routeSpace=function(d,u){var c=u[0];return c===void 0?this.getValues(d):(typeof c=="number"&&(c=Array.prototype.slice.call(u)),this.setValues(d,c))},h.prototype.setValues=function(d,u){return this.space=d,this.convs={},this.convs[d]=u,this},h.prototype.getValues=function(d){var u=this.convs[d];if(!u){var c=this.space,w=this.convs[c];u=m[c][d](w),this.convs[d]=u}return u},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){h.prototype[d]=function(u){return this.routeSpace(d,arguments)}}),O.exports=m},755:function(O,z){O.exports={rgb2hsl:y,rgb2hsv:M,rgb2hwb:m,rgb2cmyk:x,rgb2keyword:p,rgb2xyz:f,rgb2lab:E,rgb2lch:h,hsl2rgb:d,hsl2hsv:u,hsl2hwb:c,hsl2cmyk:w,hsl2keyword:A,hsv2rgb:C,hsv2hsl:P,hsv2hwb:I,hsv2cmyk:R,hsv2keyword:N,hwb2rgb:S,hwb2hsl:W,hwb2hsv:j,hwb2cmyk:G,hwb2keyword:B,cmyk2rgb:k,cmyk2hsl:D,cmyk2hsv:Y,cmyk2hwb:q,cmyk2keyword:H,keyword2rgb:K,keyword2hsl:re,keyword2hsv:te,keyword2hwb:ae,keyword2cmyk:ie,keyword2lab:oe,keyword2xyz:se,xyz2rgb:U,xyz2lab:L,xyz2lch:F,lab2xyz:Q,lab2rgb:X,lab2lch:$,lch2lab:J,lch2xyz:ee,lch2rgb:ne};function y(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,i=Math.min(s,t,n),a=Math.max(s,t,n),o=a-i,l,v,T;return a==i?l=0:s==a?l=(t-n)/o:t==a?l=2+(n-s)/o:n==a&&(l=4+(s-t)/o),l=Math.min(l*60,360),l<0&&(l+=360),T=(i+a)/2,a==i?v=0:T<=.5?v=o/(a+i):v=o/(2-a-i),[l,v*100,T*100]}function M(e){var s=e[0],t=e[1],n=e[2],i=Math.min(s,t,n),a=Math.max(s,t,n),o=a-i,l,v,T;return a==0?v=0:v=o/a*1e3/10,a==i?l=0:s==a?l=(t-n)/o:t==a?l=2+(n-s)/o:n==a&&(l=4+(s-t)/o),l=Math.min(l*60,360),l<0&&(l+=360),T=a/255*1e3/10,[l,v,T]}function m(e){var s=e[0],t=e[1],n=e[2],i=y(e)[0],a=1/255*Math.min(s,Math.min(t,n)),n=1-1/255*Math.max(s,Math.max(t,n));return[i,a*100,n*100]}function x(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,i,a,o,l;return l=Math.min(1-s,1-t,1-n),i=(1-s-l)/(1-l)||0,a=(1-t-l)/(1-l)||0,o=(1-n-l)/(1-l)||0,[i*100,a*100,o*100,l*100]}function p(e){return _[JSON.stringify(e)]}function f(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255;s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var i=s*.4124+t*.3576+n*.1805,a=s*.2126+t*.7152+n*.0722,o=s*.0193+t*.1192+n*.9505;return[i*100,a*100,o*100]}function E(e){var s=f(e),t=s[0],n=s[1],i=s[2],a,o,l;return t/=95.047,n/=100,i/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,a=116*n-16,o=500*(t-n),l=200*(n-i),[a,o,l]}function h(e){return $(E(e))}function d(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,i,a,o,l,v;if(t==0)return v=n*255,[v,v,v];n<.5?a=n*(1+t):a=n+t-n*t,i=2*n-a,l=[0,0,0];for(var T=0;T<3;T++)o=s+1/3*-(T-1),o<0&&o++,o>1&&o--,6*o<1?v=i+(a-i)*6*o:2*o<1?v=a:3*o<2?v=i+(a-i)*(2/3-o)*6:v=i,l[T]=v*255;return l}function u(e){var s=e[0],t=e[1]/100,n=e[2]/100,i,a;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,a=(n+t)/2,i=2*t/(n+t),[s,i*100,a*100])}function c(e){return m(d(e))}function w(e){return x(d(e))}function A(e){return p(d(e))}function C(e){var s=e[0]/60,t=e[1]/100,n=e[2]/100,i=Math.floor(s)%6,a=s-Math.floor(s),o=255*n*(1-t),l=255*n*(1-t*a),v=255*n*(1-t*(1-a)),n=255*n;switch(i){case 0:return[n,v,o];case 1:return[l,n,o];case 2:return[o,n,v];case 3:return[o,l,n];case 4:return[v,o,n];case 5:return[n,o,l]}}function P(e){var s=e[0],t=e[1]/100,n=e[2]/100,i,a;return a=(2-t)*n,i=t*n,i/=a<=1?a:2-a,i=i||0,a/=2,[s,i*100,a*100]}function I(e){return m(C(e))}function R(e){return x(C(e))}function N(e){return p(C(e))}function S(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,i=t+n,a,o,l,v;switch(i>1&&(t/=i,n/=i),a=Math.floor(6*s),o=1-n,l=6*s-a,(a&1)!=0&&(l=1-l),v=t+l*(o-t),a){default:case 6:case 0:r=o,g=v,b=t;break;case 1:r=v,g=o,b=t;break;case 2:r=t,g=o,b=v;break;case 3:r=t,g=v,b=o;break;case 4:r=v,g=t,b=o;break;case 5:r=o,g=t,b=v;break}return[r*255,g*255,b*255]}function W(e){return y(S(e))}function j(e){return M(S(e))}function G(e){return x(S(e))}function B(e){return p(S(e))}function k(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,i=e[3]/100,a,o,l;return a=1-Math.min(1,s*(1-i)+i),o=1-Math.min(1,t*(1-i)+i),l=1-Math.min(1,n*(1-i)+i),[a*255,o*255,l*255]}function D(e){return y(k(e))}function Y(e){return M(k(e))}function q(e){return m(k(e))}function H(e){return p(k(e))}function U(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,i,a,o;return i=s*3.2406+t*-1.5372+n*-.4986,a=s*-.9689+t*1.8758+n*.0415,o=s*.0557+t*-.204+n*1.057,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),[i*255,a*255,o*255]}function L(e){var s=e[0],t=e[1],n=e[2],i,a,o;return s/=95.047,t/=100,n/=108.883,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,i=116*t-16,a=500*(s-t),o=200*(t-n),[i,a,o]}function F(e){return $(L(e))}function Q(e){var s=e[0],t=e[1],n=e[2],i,a,o,l;return s<=8?(a=s*100/903.3,l=7.787*(a/100)+16/116):(a=100*Math.pow((s+16)/116,3),l=Math.pow(a/100,1/3)),i=i/95.047<=.008856?i=95.047*(t/500+l-16/116)/7.787:95.047*Math.pow(t/500+l,3),o=o/108.883<=.008859?o=108.883*(l-n/200-16/116)/7.787:108.883*Math.pow(l-n/200,3),[i,a,o]}function $(e){var s=e[0],t=e[1],n=e[2],i,a,o;return i=Math.atan2(n,t),a=i*360/2/Math.PI,a<0&&(a+=360),o=Math.sqrt(t*t+n*n),[s,o,a]}function X(e){return U(Q(e))}function J(e){var s=e[0],t=e[1],n=e[2],i,a,o;return o=n/360*2*Math.PI,i=t*Math.cos(o),a=t*Math.sin(o),[s,i,a]}function ee(e){return Q(J(e))}function ne(e){return X(J(e))}function K(e){return V[e]}function re(e){return y(K(e))}function te(e){return M(K(e))}function ae(e){return m(K(e))}function ie(e){return x(K(e))}function oe(e){return E(K(e))}function se(e){return f(K(e))}var V={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},_={};for(var Z in V)_[JSON.stringify(V[Z])]=Z}}]);
