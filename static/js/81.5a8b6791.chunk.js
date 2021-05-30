(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[81,150],{271:function(R,A,y){"use strict";y.r(A),A.default=`precision highp float;
#define GLSLIFY 1

uniform float iTime;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec2 vUv;

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/tdjXDd

#define PI 3.1415926
#define TAU 6.2831852
#define BLACK_COL vec3(24,32,38)/255.

#define rand1(p) fract(sin(p* 78.233)* 43758.5453)
#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord.xy-iResolution.xy*0.5)/iResolution.y;

    float SIZE = 4. + cos(iTime*0.2)*0.5;
    float r = length(uv) * SIZE;
    r*=floor(iResolution.y/80.);
    float id = ceil(r);
    float s = mod(id, 2.)*2. - 1.; // Direction
    float a = fract(atan(uv.y, uv.x)/TAU + s*(iTime*(rand1(id+400.)*0.5+0.5)*0.2 + id*0.2));
    float inRange = step(3.,id); // Don's draw center arcs
    float sm = (1./iResolution.y * 20.* SIZE);

    inRange *= smoothstep(.0, sm, fract(r)) * smoothstep(1.0, 1.0 - sm, fract(r));
    float arcLength =  (rand1(id)*0.25 + 0.25);

    sm = (sqrt(SIZE)*(1./iResolution.y * 5. / id));
    inRange *= smoothstep(arcLength, arcLength + sm, a) * smoothstep(1.0, 1. - sm, a);

    vec3 col = hue(rand1(id)).rgb;

    col = mix(BLACK_COL, col, inRange);

    fragColor = vec4(col,1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},549:function(R,A,y){"use strict";y.d(A,"a",function(){return m});const x=()=>!!document.createElement("canvas").getContext("webgl2"),m=()=>x()?"webgl2":"webgl"},65:function(R,A,y){"use strict";y.r(A);var x=y(752),m=y.n(x),M=y(549),w=y(271);const f={context:Object(M.a)(),animate:!0},E=({gl:h,time:d})=>m()({gl:h,frag:w.default,uniforms:{iTime:({time:c})=>c,iResolution:({width:c,height:u})=>[c,u]}});A.default={sketch:E,settings:f}},705:function(R,A){R.exports=function(){for(var y=0;y<arguments.length;y++)if(arguments[y]!==void 0)return arguments[y]}},752:function(R,A,y){var x=y(764),m=y(765),M=y(753),w=y(705);R.exports=f;function f(h){if(h=h||{},!h.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var d=h.gl,c={gl:d};typeof h.extensions!="undefined"&&(c.extensions=h.extensions),typeof h.optionalExtensions!="undefined"&&(c.optionalExtensions=h.optionalExtensions),typeof h.profile!="undefined"&&(c.profile=h.profile),typeof h.onDone!="undefined"&&(c.onDone=h.onDone);var u=x(c),p=m(),O=new Map,C=h.uniforms||{},T=Object.assign({},C);Object.keys(C).forEach(function(k){var D=C[k];typeof D=="function"?T[k]=function(Z,H,Q){var I=D.call(C,H,Q);if(E(I))if(O.has(D)){var j=O.get(D);j(I),I=j}else{var q=u.texture(I);O.set(D,q),I=q}return I}:E(D)?T[k]=u.texture(D):T[k]=D});var U;try{U=G()}catch(k){F(k)}var z=w(h.clearColor,"black");if(typeof z=="string"){var B=M(z);if(!B.rgb)throw new Error('Error parsing { clearColor } color string "'+z+'"');z=B.rgb.slice(0,3).map(function(k){return k/255})}else if(z&&(!Array.isArray(z)||z.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var S=w(h.clearAlpha,1),W=z?z.concat([S||0]):!1;return{render:function(k){u.poll(),W&&u.clear({color:W,depth:1,stencil:0}),K(k),d.flush()},regl:u,drawQuad:K,unload:function(){O.clear(),u.destroy()}};function K(k){if(k=k||{},U)try{U(k)}catch(D){F(D)&&k==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function G(){return u({scissor:h.scissor?{enable:!0,box:{x:u.prop("scissorX"),y:u.prop("scissorY"),width:u.prop("scissorWidth"),height:u.prop("scissorHeight")}}:!1,uniforms:T,frag:h.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:h.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:h.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:p.positions},elements:p.cells})}function F(k){if(/^\(regl\)/.test(k.message))return!0;throw k}}function E(h){return h&&!Array.isArray(h)&&typeof h=="object"}},753:function(R,A,y){var x=y(754);R.exports=function(m){var M,w,f,E;if(M=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(m)){var h=M[1],d=h.replace(/a$/,""),c=d==="cmyk"?4:3;w=x[d],f=M[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(p,O){return/%$/.test(p)&&O===c?parseFloat(p)/100:(/%$/.test(p),parseFloat(p))}),h===d&&f.push(1),E=f[c]===void 0?1:f[c],f=f.slice(0,c),w[d]=function(){return f}}else if(/^#[A-Fa-f0-9]+$/.test(m)){var d=m.replace(/^#/,""),c=d.length;w=x.rgb,f=d.split(c===3?/(.)/:/(..)/),f=f.filter(Boolean).map(function(C){return c===3?parseInt(C+C,16):parseInt(C,16)}),E=1,w.rgb=function(){return f},f[0]||(f[0]=0),f[1]||(f[1]=0),f[2]||(f[2]=0)}else w=x.keyword,w.keyword=function(){return m},f=m,E=1;var u={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{u.rgb=w.rgb(f)}catch(p){}try{u.hsl=w.hsl(f)}catch(p){}try{u.hsv=w.hsv(f)}catch(p){}try{u.cmyk=w.cmyk(f)}catch(p){}try{u.keyword=w.keyword(f)}catch(p){}return u.rgb&&(u.hex="#"+u.rgb.map(function(p){var O=p.toString(16);return O.length===1?"0"+O:O}).join("")),u.rgb&&(u.rgba=u.rgb.concat(E)),u.hsl&&(u.hsla=u.hsl.concat(E)),u.hsv&&(u.hsva=u.hsv.concat(E)),u.cmyk&&(u.cmyka=u.cmyk.concat(E)),u}},754:function(R,A,y){var x=y(755),m=function(){return new h};for(var M in x){m[M+"Raw"]=function(d){return function(c){return typeof c=="number"&&(c=Array.prototype.slice.call(arguments)),x[d](c)}}(M);var w=/(\w+)2(\w+)/.exec(M),f=w[1],E=w[2];m[f]=m[f]||{},m[f][E]=m[M]=function(d){return function(c){typeof c=="number"&&(c=Array.prototype.slice.call(arguments));var u=x[d](c);if(typeof u=="string"||u===void 0)return u;for(var p=0;p<u.length;p++)u[p]=Math.round(u[p]);return u}}(M)}var h=function(){this.convs={}};h.prototype.routeSpace=function(d,c){var u=c[0];return u===void 0?this.getValues(d):(typeof u=="number"&&(u=Array.prototype.slice.call(c)),this.setValues(d,u))},h.prototype.setValues=function(d,c){return this.space=d,this.convs={},this.convs[d]=c,this},h.prototype.getValues=function(d){var c=this.convs[d];if(!c){var u=this.space,p=this.convs[u];c=m[u][d](p),this.convs[d]=c}return c},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(d){h.prototype[d]=function(c){return this.routeSpace(d,arguments)}}),R.exports=m},755:function(R,A){R.exports={rgb2hsl:y,rgb2hsv:x,rgb2hwb:m,rgb2cmyk:M,rgb2keyword:w,rgb2xyz:f,rgb2lab:E,rgb2lch:h,hsl2rgb:d,hsl2hsv:c,hsl2hwb:u,hsl2cmyk:p,hsl2keyword:O,hsv2rgb:C,hsv2hsl:T,hsv2hwb:U,hsv2cmyk:z,hsv2keyword:B,hwb2rgb:S,hwb2hsl:W,hwb2hsv:K,hwb2cmyk:G,hwb2keyword:F,cmyk2rgb:k,cmyk2hsl:D,cmyk2hsv:Z,cmyk2hwb:H,cmyk2keyword:Q,keyword2rgb:P,keyword2hsl:ne,keyword2hsv:te,keyword2hwb:ae,keyword2cmyk:oe,keyword2lab:ie,keyword2xyz:se,xyz2rgb:I,xyz2lab:j,xyz2lch:q,lab2xyz:$,lab2rgb:N,lab2lch:J,lch2lab:V,lch2xyz:ee,lch2rgb:re};function y(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,o=Math.min(s,t,n),a=Math.max(s,t,n),i=a-o,l,v,L;return a==o?l=0:s==a?l=(t-n)/i:t==a?l=2+(n-s)/i:n==a&&(l=4+(s-t)/i),l=Math.min(l*60,360),l<0&&(l+=360),L=(o+a)/2,a==o?v=0:L<=.5?v=i/(a+o):v=i/(2-a-o),[l,v*100,L*100]}function x(e){var s=e[0],t=e[1],n=e[2],o=Math.min(s,t,n),a=Math.max(s,t,n),i=a-o,l,v,L;return a==0?v=0:v=i/a*1e3/10,a==o?l=0:s==a?l=(t-n)/i:t==a?l=2+(n-s)/i:n==a&&(l=4+(s-t)/i),l=Math.min(l*60,360),l<0&&(l+=360),L=a/255*1e3/10,[l,v,L]}function m(e){var s=e[0],t=e[1],n=e[2],o=y(e)[0],a=1/255*Math.min(s,Math.min(t,n)),n=1-1/255*Math.max(s,Math.max(t,n));return[o,a*100,n*100]}function M(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255,o,a,i,l;return l=Math.min(1-s,1-t,1-n),o=(1-s-l)/(1-l)||0,a=(1-t-l)/(1-l)||0,i=(1-n-l)/(1-l)||0,[o*100,a*100,i*100,l*100]}function w(e){return X[JSON.stringify(e)]}function f(e){var s=e[0]/255,t=e[1]/255,n=e[2]/255;s=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=s*.4124+t*.3576+n*.1805,a=s*.2126+t*.7152+n*.0722,i=s*.0193+t*.1192+n*.9505;return[o*100,a*100,i*100]}function E(e){var s=f(e),t=s[0],n=s[1],o=s[2],a,i,l;return t/=95.047,n/=100,o/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,a=116*n-16,i=500*(t-n),l=200*(n-o),[a,i,l]}function h(e){return J(E(e))}function d(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,o,a,i,l,v;if(t==0)return v=n*255,[v,v,v];n<.5?a=n*(1+t):a=n+t-n*t,o=2*n-a,l=[0,0,0];for(var L=0;L<3;L++)i=s+1/3*-(L-1),i<0&&i++,i>1&&i--,6*i<1?v=o+(a-o)*6*i:2*i<1?v=a:3*i<2?v=o+(a-o)*(2/3-i)*6:v=o,l[L]=v*255;return l}function c(e){var s=e[0],t=e[1]/100,n=e[2]/100,o,a;return n===0?[0,0,0]:(n*=2,t*=n<=1?n:2-n,a=(n+t)/2,o=2*t/(n+t),[s,o*100,a*100])}function u(e){return m(d(e))}function p(e){return M(d(e))}function O(e){return w(d(e))}function C(e){var s=e[0]/60,t=e[1]/100,n=e[2]/100,o=Math.floor(s)%6,a=s-Math.floor(s),i=255*n*(1-t),l=255*n*(1-t*a),v=255*n*(1-t*(1-a)),n=255*n;switch(o){case 0:return[n,v,i];case 1:return[l,n,i];case 2:return[i,n,v];case 3:return[i,l,n];case 4:return[v,i,n];case 5:return[n,i,l]}}function T(e){var s=e[0],t=e[1]/100,n=e[2]/100,o,a;return a=(2-t)*n,o=t*n,o/=a<=1?a:2-a,o=o||0,a/=2,[s,o*100,a*100]}function U(e){return m(C(e))}function z(e){return M(C(e))}function B(e){return w(C(e))}function S(e){var s=e[0]/360,t=e[1]/100,n=e[2]/100,o=t+n,a,i,l,v;switch(o>1&&(t/=o,n/=o),a=Math.floor(6*s),i=1-n,l=6*s-a,(a&1)!=0&&(l=1-l),v=t+l*(i-t),a){default:case 6:case 0:r=i,g=v,b=t;break;case 1:r=v,g=i,b=t;break;case 2:r=t,g=i,b=v;break;case 3:r=t,g=v,b=i;break;case 4:r=v,g=t,b=i;break;case 5:r=i,g=t,b=v;break}return[r*255,g*255,b*255]}function W(e){return y(S(e))}function K(e){return x(S(e))}function G(e){return M(S(e))}function F(e){return w(S(e))}function k(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,o=e[3]/100,a,i,l;return a=1-Math.min(1,s*(1-o)+o),i=1-Math.min(1,t*(1-o)+o),l=1-Math.min(1,n*(1-o)+o),[a*255,i*255,l*255]}function D(e){return y(k(e))}function Z(e){return x(k(e))}function H(e){return m(k(e))}function Q(e){return w(k(e))}function I(e){var s=e[0]/100,t=e[1]/100,n=e[2]/100,o,a,i;return o=s*3.2406+t*-1.5372+n*-.4986,a=s*-.9689+t*1.8758+n*.0415,i=s*.0557+t*-.204+n*1.057,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o=o*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[o*255,a*255,i*255]}function j(e){var s=e[0],t=e[1],n=e[2],o,a,i;return s/=95.047,t/=100,n/=108.883,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=116*t-16,a=500*(s-t),i=200*(t-n),[o,a,i]}function q(e){return J(j(e))}function $(e){var s=e[0],t=e[1],n=e[2],o,a,i,l;return s<=8?(a=s*100/903.3,l=7.787*(a/100)+16/116):(a=100*Math.pow((s+16)/116,3),l=Math.pow(a/100,1/3)),o=o/95.047<=.008856?o=95.047*(t/500+l-16/116)/7.787:95.047*Math.pow(t/500+l,3),i=i/108.883<=.008859?i=108.883*(l-n/200-16/116)/7.787:108.883*Math.pow(l-n/200,3),[o,a,i]}function J(e){var s=e[0],t=e[1],n=e[2],o,a,i;return o=Math.atan2(n,t),a=o*360/2/Math.PI,a<0&&(a+=360),i=Math.sqrt(t*t+n*n),[s,i,a]}function N(e){return I($(e))}function V(e){var s=e[0],t=e[1],n=e[2],o,a,i;return i=n/360*2*Math.PI,o=t*Math.cos(i),a=t*Math.sin(i),[s,o,a]}function ee(e){return $(V(e))}function re(e){return N(V(e))}function P(e){return Y[e]}function ne(e){return y(P(e))}function te(e){return x(P(e))}function ae(e){return m(P(e))}function oe(e){return M(P(e))}function ie(e){return E(P(e))}function se(e){return f(P(e))}var Y={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},X={};for(var _ in Y)X[JSON.stringify(Y[_])]=_}}]);
