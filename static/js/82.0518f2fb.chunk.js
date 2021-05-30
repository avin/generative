(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[82,7,145,146],{266:function(ce,B,_){"use strict";_.r(B),B.default=`#define GLSLIFY 1
attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 opos;
varying vec3 vpos;
varying float size;

uniform float iTime;
uniform float pSize;

uniform mat4 worldViewProjection;
uniform mat4 world;

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289_0(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_0(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_0(vec4 x) {
     return mod289_0(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_0(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289_0(i);
  vec4 p = permute_0( permute_0( permute_0(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt_0(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289_1(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1(vec4 x)
{
  return mod289_1(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289_1(Pi0);
  Pi1 = mod289_1(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute_1(permute_1(ix) + iy);
  vec4 ixy0 = permute_1(ixy + iz0);
  vec4 ixy1 = permute_1(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt_1(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt_1(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

void main() {
  vUv = uv;
  float t = iTime*.1;

  opos = position;
  vpos = position;

  vec3 chTime = vec3(t);
  vpos.xyz *= 1. + snoise(position*1.5 + chTime)*.15;
  vpos.xyz *= 1. + snoise(position*5.5 + chTime)*.075;
  vpos.xyz *= 1. + snoise(position*10.5 + chTime*5.)*.025;

  float rFactor = fract(snoise(opos*100.)) > .5 ? 1.1 : 1.;

  size = pSize;
  gl_PointSize = pSize + (length(vpos)-.75)*10.;

  gl_Position = worldViewProjection * vec4( vpos*rFactor, 1.0 );
}
`},267:function(ce,B,_){"use strict";_.r(B),B.default=`#define GLSLIFY 1
varying vec3 vpos;
varying vec3 opos;
varying float size;

uniform vec2 iResolution;
uniform float iTime;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g_0 = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g_0;
  vec3 i1 = min( g_0.xyz, l.zxy );
  vec3 i2 = max( g_0.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float alpha = .01/smoothstep(.0, 5., length(uv)*5.);

  float g = length(uv);
  float gcl = 1. - length(uv)/size;

  float t = iTime*.2;
  float vposFactor = snoise(opos*2.);
  fragColor = vec4(hue(fract(length(vpos)*size*.25 + t + vposFactor)).rgb, alpha);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},469:function(ce,B,_){"use strict";_.d(B,"a",function(){return A});var D=_(588),r=_(436),K=_(539),M=_(667),b=_(449),O=_(451),A=function(){function o(s,c,t){t===void 0&&(t=Number.MAX_VALUE),this.origin=s,this.direction=c,this.length=t}return o.prototype.intersectsBoxMinMax=function(s,c,t){t===void 0&&(t=0);var a=o._TmpVector3[0].copyFromFloats(s.x-t,s.y-t,s.z-t),i=o._TmpVector3[1].copyFromFloats(c.x+t,c.y+t,c.z+t),u=0,h=Number.MAX_VALUE,l,e,n,f;if(Math.abs(this.direction.x)<1e-7){if(this.origin.x<a.x||this.origin.x>i.x)return!1}else if(l=1/this.direction.x,e=(a.x-this.origin.x)*l,n=(i.x-this.origin.x)*l,n===-Infinity&&(n=Infinity),e>n&&(f=e,e=n,n=f),u=Math.max(e,u),h=Math.min(n,h),u>h)return!1;if(Math.abs(this.direction.y)<1e-7){if(this.origin.y<a.y||this.origin.y>i.y)return!1}else if(l=1/this.direction.y,e=(a.y-this.origin.y)*l,n=(i.y-this.origin.y)*l,n===-Infinity&&(n=Infinity),e>n&&(f=e,e=n,n=f),u=Math.max(e,u),h=Math.min(n,h),u>h)return!1;if(Math.abs(this.direction.z)<1e-7){if(this.origin.z<a.z||this.origin.z>i.z)return!1}else if(l=1/this.direction.z,e=(a.z-this.origin.z)*l,n=(i.z-this.origin.z)*l,n===-Infinity&&(n=Infinity),e>n&&(f=e,e=n,n=f),u=Math.max(e,u),h=Math.min(n,h),u>h)return!1;return!0},o.prototype.intersectsBox=function(s,c){return c===void 0&&(c=0),this.intersectsBoxMinMax(s.minimum,s.maximum,c)},o.prototype.intersectsSphere=function(s,c){c===void 0&&(c=0);var t=s.center.x-this.origin.x,a=s.center.y-this.origin.y,i=s.center.z-this.origin.z,u=t*t+a*a+i*i,h=s.radius+c,l=h*h;if(u<=l)return!0;var e=t*this.direction.x+a*this.direction.y+i*this.direction.z;if(e<0)return!1;var n=u-e*e;return n<=l},o.prototype.intersectsTriangle=function(s,c,t){var a=o._TmpVector3[0],i=o._TmpVector3[1],u=o._TmpVector3[2],h=o._TmpVector3[3],l=o._TmpVector3[4];c.subtractToRef(s,a),t.subtractToRef(s,i),r.e.CrossToRef(this.direction,i,u);var e=r.e.Dot(a,u);if(e===0)return null;var n=1/e;this.origin.subtractToRef(s,h);var f=r.e.Dot(h,u)*n;if(f<0||f>1)return null;r.e.CrossToRef(h,a,l);var v=r.e.Dot(this.direction,l)*n;if(v<0||f+v>1)return null;var d=r.e.Dot(i,l)*n;return d>this.length?null:new M.a(1-f-v,f,d)},o.prototype.intersectsPlane=function(s){var c,t=r.e.Dot(s.normal,this.direction);if(Math.abs(t)<999999997475243e-21)return null;var a=r.e.Dot(s.normal,this.origin);return c=(-s.d-a)/t,c<0?c<-999999997475243e-21?null:0:c},o.prototype.intersectsAxis=function(s,c){switch(c===void 0&&(c=0),s){case"y":var t=(this.origin.y-c)/this.direction.y;return t>0?null:new r.e(this.origin.x+this.direction.x*-t,c,this.origin.z+this.direction.z*-t);case"x":var t=(this.origin.x-c)/this.direction.x;return t>0?null:new r.e(c,this.origin.y+this.direction.y*-t,this.origin.z+this.direction.z*-t);case"z":var t=(this.origin.z-c)/this.direction.z;return t>0?null:new r.e(this.origin.x+this.direction.x*-t,this.origin.y+this.direction.y*-t,c);default:return null}},o.prototype.intersectsMesh=function(s,c){var t=r.c.Matrix[0];return s.getWorldMatrix().invertToRef(t),this._tmpRay?o.TransformToRef(this,t,this._tmpRay):this._tmpRay=o.Transform(this,t),s.intersects(this._tmpRay,c)},o.prototype.intersectsMeshes=function(s,c,t){t?t.length=0:t=[];for(var a=0;a<s.length;a++){var i=this.intersectsMesh(s[a],c);i.hit&&t.push(i)}return t.sort(this._comparePickingInfo),t},o.prototype._comparePickingInfo=function(s,c){return s.distance<c.distance?-1:s.distance>c.distance?1:0},o.prototype.intersectionSegment=function(s,c,t){var a=this.origin,i=r.c.Vector3[0],u=r.c.Vector3[1],h=r.c.Vector3[2],l=r.c.Vector3[3];c.subtractToRef(s,i),this.direction.scaleToRef(o.rayl,h),a.addToRef(h,u),s.subtractToRef(a,l);var e=r.e.Dot(i,i),n=r.e.Dot(i,h),f=r.e.Dot(h,h),v=r.e.Dot(i,l),d=r.e.Dot(h,l),y=e*f-n*n,P,p,g=y,z,T,E=y;y<o.smallnum?(p=0,g=1,T=d,E=f):(p=n*d-f*v,T=e*d-n*v,p<0?(p=0,T=d,E=f):p>g&&(p=g,T=d+n,E=f)),T<0?(T=0,-v<0?p=0:-v>e?p=g:(p=-v,g=e)):T>E&&(T=E,-v+n<0?p=0:-v+n>e?p=g:(p=-v+n,g=e)),P=Math.abs(p)<o.smallnum?0:p/g,z=Math.abs(T)<o.smallnum?0:T/E;var w=r.c.Vector3[4];h.scaleToRef(z,w);var F=r.c.Vector3[5];i.scaleToRef(P,F),F.addInPlace(l);var Z=r.c.Vector3[6];F.subtractToRef(w,Z);var S=z>0&&z<=this.length&&Z.lengthSquared()<t*t;return S?F.length():-1},o.prototype.update=function(s,c,t,a,i,u,h){return this.unprojectRayToRef(s,c,t,a,i,u,h),this},o.Zero=function(){return new o(r.e.Zero(),r.e.Zero())},o.CreateNew=function(s,c,t,a,i,u,h){var l=o.Zero();return l.update(s,c,t,a,i,u,h)},o.CreateNewFromTo=function(s,c,t){t===void 0&&(t=r.a.IdentityReadOnly);var a=c.subtract(s),i=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z);return a.normalize(),o.Transform(new o(s,a,i),t)},o.Transform=function(s,c){var t=new o(new r.e(0,0,0),new r.e(0,0,0));return o.TransformToRef(s,c,t),t},o.TransformToRef=function(s,c,t){r.e.TransformCoordinatesToRef(s.origin,c,t.origin),r.e.TransformNormalToRef(s.direction,c,t.direction),t.length=s.length;var a=t.direction,i=a.length();if(!(i===0||i===1)){var u=1/i;a.x*=u,a.y*=u,a.z*=u,t.length*=i}},o.prototype.unprojectRayToRef=function(s,c,t,a,i,u,h){var l=r.c.Matrix[0];i.multiplyToRef(u,l),l.multiplyToRef(h,l),l.invert();var e=r.c.Vector3[0];e.x=s/t*2-1,e.y=-(c/a*2-1),e.z=-1;var n=r.c.Vector3[1].copyFromFloats(e.x,e.y,1),f=r.c.Vector3[2],v=r.c.Vector3[3];r.e._UnprojectFromInvertedMatrixToRef(e,l,f),r.e._UnprojectFromInvertedMatrixToRef(n,l,v),this.origin.copyFrom(f),v.subtractToRef(f,this.direction),this.direction.normalize()},o._TmpVector3=D.a.BuildArray(6,r.e.Zero),o.smallnum=1e-8,o.rayl=1e9,o}();b.a.prototype.createPickingRay=function(o,s,c,t,a){a===void 0&&(a=!1);var i=A.Zero();return this.createPickingRayToRef(o,s,c,i,t,a),i},b.a.prototype.createPickingRayToRef=function(o,s,c,t,a,i){i===void 0&&(i=!1);var u=this.getEngine();if(!a){if(!this.activeCamera)return this;a=this.activeCamera}var h=a.viewport,l=h.toGlobal(u.getRenderWidth(),u.getRenderHeight());return o=o/u.getHardwareScalingLevel()-l.x,s=s/u.getHardwareScalingLevel()-(u.getRenderHeight()-l.y-l.height),t.update(o,s,l.width,l.height,c||r.a.IdentityReadOnly,i?r.a.IdentityReadOnly:a.getViewMatrix(),a.getProjectionMatrix()),this},b.a.prototype.createPickingRayInCameraSpace=function(o,s,c){var t=A.Zero();return this.createPickingRayInCameraSpaceToRef(o,s,t,c),t},b.a.prototype.createPickingRayInCameraSpaceToRef=function(o,s,c,t){if(!K.a)return this;var a=this.getEngine();if(!t){if(!this.activeCamera)throw new Error("Active camera not set");t=this.activeCamera}var i=t.viewport,u=i.toGlobal(a.getRenderWidth(),a.getRenderHeight()),h=r.a.Identity();return o=o/a.getHardwareScalingLevel()-u.x,s=s/a.getHardwareScalingLevel()-(a.getRenderHeight()-u.y-u.height),c.update(o,s,u.width,u.height,h,h,t.getProjectionMatrix()),this},b.a.prototype._internalPickForMesh=function(o,s,c,t,a,i,u,h){var l=s(t),e=c.intersects(l,a,u,i,t,h);return!e||!e.hit||!a&&o!=null&&e.distance>=o.distance?null:e},b.a.prototype._internalPick=function(o,s,c,t,a){if(!K.a)return null;for(var i=null,u=0;u<this.meshes.length;u++){var h=this.meshes[u];if(s){if(!s(h))continue}else if(!h.isEnabled()||!h.isVisible||!h.isPickable)continue;var l=h.skeleton&&h.skeleton.overrideMesh?h.skeleton.overrideMesh.getWorldMatrix():h.getWorldMatrix();if(h.hasThinInstances&&h.thinInstanceEnablePicking){var e=this._internalPickForMesh(i,o,h,l,!0,!0,a);if(e){if(t)return i;for(var n=r.c.Matrix[1],f=h.thinInstanceGetWorldMatrices(),v=0;v<f.length;v++){var d=f[v];d.multiplyToRef(l,n);var y=this._internalPickForMesh(i,o,h,n,c,t,a,!0);if(y&&(i=y,i.thinInstanceIndex=v,c))return i}}}else{var e=this._internalPickForMesh(i,o,h,l,c,t,a);if(e&&(i=e,c))return i}}return i||new K.a},b.a.prototype._internalMultiPick=function(o,s,c){if(!K.a)return null;for(var t=new Array,a=0;a<this.meshes.length;a++){var i=this.meshes[a];if(s){if(!s(i))continue}else if(!i.isEnabled()||!i.isVisible||!i.isPickable)continue;var u=i.skeleton&&i.skeleton.overrideMesh?i.skeleton.overrideMesh.getWorldMatrix():i.getWorldMatrix();if(i.hasThinInstances&&i.thinInstanceEnablePicking){var h=this._internalPickForMesh(null,o,i,u,!0,!0,c);if(h)for(var l=r.c.Matrix[1],e=i.thinInstanceGetWorldMatrices(),n=0;n<e.length;n++){var f=e[n];f.multiplyToRef(u,l);var v=this._internalPickForMesh(null,o,i,l,!1,!1,c,!0);v&&(v.thinInstanceIndex=n,t.push(v))}}else{var h=this._internalPickForMesh(null,o,i,u,!1,!1,c);h&&t.push(h)}}return t},b.a.prototype.pickWithBoundingInfo=function(o,s,c,t,a){var i=this;if(!K.a)return null;var u=this._internalPick(function(h){return i._tempPickingRay||(i._tempPickingRay=A.Zero()),i.createPickingRayToRef(o,s,h,i._tempPickingRay,a||null),i._tempPickingRay},c,t,!0);return u&&(u.ray=this.createPickingRay(o,s,r.a.Identity(),a||null)),u},b.a.prototype.pick=function(o,s,c,t,a,i){var u=this;if(!K.a)return null;var h=this._internalPick(function(l){return u._tempPickingRay||(u._tempPickingRay=A.Zero()),u.createPickingRayToRef(o,s,l,u._tempPickingRay,a||null),u._tempPickingRay},c,t,!1,i);return h&&(h.ray=this.createPickingRay(o,s,r.a.Identity(),a||null)),h},b.a.prototype.pickWithRay=function(o,s,c,t){var a=this,i=this._internalPick(function(u){return a._pickWithRayInverseMatrix||(a._pickWithRayInverseMatrix=r.a.Identity()),u.invertToRef(a._pickWithRayInverseMatrix),a._cachedRayForTransform||(a._cachedRayForTransform=A.Zero()),A.TransformToRef(o,a._pickWithRayInverseMatrix,a._cachedRayForTransform),a._cachedRayForTransform},s,c,!1,t);return i&&(i.ray=o),i},b.a.prototype.multiPick=function(o,s,c,t,a){var i=this;return this._internalMultiPick(function(u){return i.createPickingRay(o,s,u,t||null)},c,a)},b.a.prototype.multiPickWithRay=function(o,s,c){var t=this;return this._internalMultiPick(function(a){return t._pickWithRayInverseMatrix||(t._pickWithRayInverseMatrix=r.a.Identity()),a.invertToRef(t._pickWithRayInverseMatrix),t._cachedRayForTransform||(t._cachedRayForTransform=A.Zero()),A.TransformToRef(o,t._pickWithRayInverseMatrix,t._cachedRayForTransform),t._cachedRayForTransform},s,c)},O.a.prototype.getForwardRay=function(o,s,c){return o===void 0&&(o=100),this.getForwardRayToRef(new A(r.e.Zero(),r.e.Zero(),o),o,s,c)},O.a.prototype.getForwardRayToRef=function(o,s,c,t){return s===void 0&&(s=100),c||(c=this.getWorldMatrix()),o.length=s,t?o.origin.copyFrom(t):o.origin.copyFrom(this.position),r.c.Vector3[2].set(0,0,this._scene.useRightHandedSystem?-1:1),r.e.TransformNormalToRef(r.c.Vector3[2],c,r.c.Vector3[3]),r.e.NormalizeToRef(r.c.Vector3[3],o.direction),o}},549:function(ce,B,_){"use strict";_.d(B,"a",function(){return r});const D=()=>!!document.createElement("canvas").getContext("webgl2"),r=()=>D()?"webgl2":"webgl"},61:function(ce,B,_){"use strict";_.r(B);var D=_(445),r=_(449),K=_(475),M=_(435),b=_(648),O=_(665),A=_(509),o=_(441),s=_(506),c=_(549),t=_(266),a=_(267),i=(l,e,n)=>new Promise((f,v)=>{var d=p=>{try{P(n.next(p))}catch(g){v(g)}},y=p=>{try{P(n.throw(p))}catch(g){v(g)}},P=p=>p.done?f(p.value):Promise.resolve(p.value).then(d,y);P((n=n.apply(l,e)).next())});const u={animate:!0,context:Object(c.a)()},h=l=>i(void 0,[l],function*({canvas:e,width:n,height:f}){const v=new D.a(e,!0,{preserveDrawingBuffer:!0,stencil:!0}),d=new r.a(v);d.clearColor=o.a.Black;const y=new s.a("Camera",-Math.PI/2,Math.PI/2,2.25,K.z.Zero(),d);y.attachControl(e,!0),y.fov=5,y.allowUpsideDown=!0,y.norotationconstraint=!0,y.lowerBetaLimit=null,y.upperBetaLimit=null,y.lowerRadiusLimit=2.25,y.upperRadiusLimit=2.25,M.a.ShadersStore.customVertexShader=t.default,M.a.ShadersStore.customFragmentShader=a.default;const P=new b.a.CreateIcoSphere("sphere",{radius:1,subdivisions:5},d),p=new O.b("pcs",0,d,{updatable:!1});p.addSurfacePoints(P,1e5,o.a.White);const g=new A.a("shader",d,{vertex:"custom",fragment:"custom"},{attributes:["position","normal","uv"],uniforms:["world","worldView","worldViewProjection","view","iTime","iResolution","pSize"],needAlphaBlending:!0});return g.pointsCloud=!0,g.alphaMode=D.a.ALPHA_ADD,g.backFaceCulling=!1,g.setFloat("iResolution",new K.y(1,1)),g.setFloat("pSize",5),p.buildMeshAsync().then(z=>{p.mesh.material=g,P.dispose()}),{render({time:z}){y.alpha+=.00125,g.setFloat("iTime",z);const T=d.getEngine().getAspectRatio(y);g.setVector2("iResolution",new K.y(T,1)),d.render()},resize({pixelRatio:z,width:T,height:E}){v.resize()},unload(){v.dispose()}}});B.default={sketch:h,settings:u}},610:function(ce,B,_){"use strict";_.d(B,"a",function(){return r}),_.d(B,"b",function(){return K});var D=_(475),r=function(){function M(b,O,A,o,s){this.idx=0,this.color=new D.f(1,1,1,1),this.position=D.z.Zero(),this.rotation=D.z.Zero(),this.uv=new D.y(0,0),this.velocity=D.z.Zero(),this.pivot=D.z.Zero(),this.translateFromPivot=!1,this._pos=0,this._ind=0,this.groupId=0,this.idxInGroup=0,this._stillInvisible=!1,this._rotationMatrix=[1,0,0,0,1,0,0,0,1],this.parentId=null,this._globalPosition=D.z.Zero(),this.idx=b,this._group=O,this.groupId=A,this.idxInGroup=o,this._pcs=s}return Object.defineProperty(M.prototype,"size",{get:function(){return this.size},set:function(b){this.size=b},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"quaternion",{get:function(){return this.rotationQuaternion},set:function(b){this.rotationQuaternion=b},enumerable:!1,configurable:!0}),M.prototype.intersectsMesh=function(b,O){if(!b._boundingInfo)return!1;if(O=O||!1,O)return b.getBoundingInfo().boundingSphere.intersectsPoint(this.position.add(this._pcs.mesh.position));var A=0,o=0,s=0,c=0,t=0,a=0;A=b.getBoundingInfo().boundingBox.maximumWorld.x,o=b.getBoundingInfo().boundingBox.minimumWorld.x,s=b.getBoundingInfo().boundingBox.maximumWorld.y,c=b.getBoundingInfo().boundingBox.minimumWorld.y,t=b.getBoundingInfo().boundingBox.maximumWorld.z,a=b.getBoundingInfo().boundingBox.minimumWorld.z;var i=this.position.x+this._pcs.mesh.position.x,u=this.position.y+this._pcs.mesh.position.y,h=this.position.z+this._pcs.mesh.position.z;return o<=i&&i<=A&&c<=u&&u<=s&&a<=h&&h<=t},M.prototype.getRotationMatrix=function(b){var O;if(this.rotationQuaternion)O=this.rotationQuaternion;else{O=D.v.Quaternion[0];var A=this.rotation;D.r.RotationYawPitchRollToRef(A.y,A.x,A.z,O)}O.toRotationMatrix(b)},M}(),K=function(){function M(b,O){this.groupID=b,this._positionFunction=O}return M}()},665:function(ce,B,_){"use strict";_.d(B,"a",function(){return u}),_.d(B,"b",function(){return h});var D=_(475),r=_(436),K=_(440),M=_(447),b=_(485),O=_(446),A=_(448),o=_(610),s=_(536),c=_(469),t=_(455),a=_(477),i=_(450),u;(function(l){l[l.Color=2]="Color",l[l.UV=1]="UV",l[l.Random=0]="Random",l[l.Stated=3]="Stated"})(u||(u={}));var h=function(){function l(e,n,f,v){this.particles=new Array,this.nbParticles=0,this.counter=0,this.vars={},this._promises=[],this._positions=new Array,this._indices=new Array,this._normals=new Array,this._colors=new Array,this._uvs=new Array,this._updatable=!0,this._isVisibilityBoxLocked=!1,this._alwaysVisible=!1,this._groups=new Array,this._groupCounter=0,this._computeParticleColor=!0,this._computeParticleTexture=!0,this._computeParticleRotation=!0,this._computeBoundingBox=!1,this._isReady=!1,this.name=e,this._size=n,this._scene=f||A.a.LastCreatedScene,v&&v.updatable!==void 0?this._updatable=v.updatable:this._updatable=!0}return l.prototype.buildMeshAsync=function(){var e=this;return Promise.all(this._promises).then(function(){return e._isReady=!0,e._buildMesh()})},l.prototype._buildMesh=function(){this.nbParticles===0&&this.addPoints(1),this._positions32=new Float32Array(this._positions),this._uvs32=new Float32Array(this._uvs),this._colors32=new Float32Array(this._colors);var e=new b.a;e.set(this._positions32,M.b.PositionKind),this._uvs32.length>0&&e.set(this._uvs32,M.b.UVKind);var n=0;this._colors32.length>0&&(n=1,e.set(this._colors32,M.b.ColorKind));var f=new O.a(this.name,this._scene);e.applyToMesh(f,this._updatable),this.mesh=f,this._positions=null,this._uvs=null,this._colors=null,this._updatable||(this.particles.length=0);var v=new t.a("point cloud material",this._scene);return v.emissiveColor=new D.e(n,n,n),v.disableLighting=!0,v.pointsCloud=!0,v.pointSize=this._size,f.material=v,new Promise(function(d){return d(f)})},l.prototype._addParticle=function(e,n,f,v){var d=new o.a(e,n,f,v,this);return this.particles.push(d),d},l.prototype._randomUnitVector=function(e){e.position=new r.e(Math.random(),Math.random(),Math.random()),e.color=new D.f(1,1,1,1)},l.prototype._getColorIndicesForCoord=function(e,n,f,v){var d=e._groupImageData,y=f*(v*4)+n*4,P=[y,y+1,y+2,y+3],p=P[0],g=P[1],z=P[2],T=P[3],E=d[p],w=d[g],F=d[z],Z=d[T];return new D.f(E/255,w/255,F/255,Z)},l.prototype._setPointsColorOrUV=function(e,n,f,v,d,y,P){f&&e.updateFacetData();var p=e.getBoundingInfo(),g=2*p.boundingSphere.radius,z=e.getVerticesData(M.b.PositionKind),T=e.getIndices(),E=e.getVerticesData(M.b.UVKind),w=e.getVerticesData(M.b.ColorKind),F=r.e.Zero();e.computeWorldMatrix();var Z=e.getWorldMatrix();if(!Z.isIdentity())for(var S=0;S<z.length/3;S++)r.e.TransformCoordinatesFromFloatsToRef(z[3*S],z[3*S+1],z[3*S+2],Z,F),z[3*S]=F.x,z[3*S+1]=F.y,z[3*S+2]=F.z;var N=0,L=0,U=0,W=0,C=0,I=0,j=0,V=0,$=0,J=0,m=0,Y=0,ee=0,ne=0,Q=r.e.Zero(),x=r.e.Zero(),H=r.e.Zero(),X=r.e.Zero(),G=r.e.Zero(),q=0,ve=0,te=0,re=0,ie=0,ge=0,ue=r.d.Zero(),le=r.d.Zero(),oe=r.d.Zero(),se=r.d.Zero(),_e=r.d.Zero(),me=0,Oe=0,Fe=0,Le=0,Be=0,Ue=0,We=0,Se=0,Ze=0,Ve=0,Ke=0,je=0,xe=r.f.Zero(),De=r.f.Zero(),ke=r.f.Zero(),Ne=r.f.Zero(),He=r.f.Zero(),ae=0,Pe=0;P=P||0;for(var pe,ze,R=new r.f(0,0,0,0),Re=r.e.Zero(),Ee=r.e.Zero(),Xe=r.e.Zero(),fe=0,Ye=r.e.Zero(),Qe=0,Je=0,be=new c.a(r.e.Zero(),new r.e(1,0,0)),we,Ie=r.e.Zero(),L=0;L<T.length/3;L++){U=T[3*L],W=T[3*L+1],C=T[3*L+2],I=z[3*U],j=z[3*U+1],V=z[3*U+2],$=z[3*W],J=z[3*W+1],m=z[3*W+2],Y=z[3*C],ee=z[3*C+1],ne=z[3*C+2],Q.set(I,j,V),x.set($,J,m),H.set(Y,ee,ne),x.subtractToRef(Q,X),H.subtractToRef(x,G),E&&(q=E[2*U],ve=E[2*U+1],te=E[2*W],re=E[2*W+1],ie=E[2*C],ge=E[2*C+1],ue.set(q,ve),le.set(te,re),oe.set(ie,ge),le.subtractToRef(ue,se),oe.subtractToRef(le,_e)),w&&v&&(me=w[4*U],Oe=w[4*U+1],Fe=w[4*U+2],Le=w[4*U+3],Be=w[4*W],Ue=w[4*W+1],We=w[4*W+2],Se=w[4*W+3],Ze=w[4*C],Ve=w[4*C+1],Ke=w[4*C+2],je=w[4*C+3],xe.set(me,Oe,Fe,Le),De.set(Be,Ue,We,Se),ke.set(Ze,Ve,Ke,je),De.subtractToRef(xe,Ne),ke.subtractToRef(De,He));for(var Me,$e,Ge,qe,en,he,de,Ce,nn=new D.e(0,0,0),Te=new D.e(0,0,0),ye,k,Ae=0;Ae<n._groupDensity[L];Ae++)N=this.particles.length,this._addParticle(N,n,this._groupCounter,L+Ae),k=this.particles[N],ae=i.a.RandomRange(0,1),Pe=i.a.RandomRange(0,1),pe=Q.add(X.scale(ae)).add(G.scale(ae*Pe)),f&&(Re=e.getFacetNormal(L).normalize().scale(-1),Ee=X.clone().normalize(),Xe=r.e.Cross(Re,Ee),fe=i.a.RandomRange(0,2*Math.PI),Ye=Ee.scale(Math.cos(fe)).add(Xe.scale(Math.sin(fe))),fe=i.a.RandomRange(.1,Math.PI/2),Ie=Ye.scale(Math.cos(fe)).add(Re.scale(Math.sin(fe))),be.origin=pe.add(Ie.scale(1e-5)),be.direction=Ie,be.length=g,we=be.intersectsMesh(e),we.hit&&(Je=we.pickedPoint.subtract(pe).length(),Qe=i.a.RandomRange(0,1)*Je,pe.addInPlace(Ie.scale(Qe)))),k.position=pe.clone(),this._positions.push(k.position.x,k.position.y,k.position.z),v!==void 0?E&&(ze=ue.add(se.scale(ae)).add(_e.scale(ae*Pe)),v?d&&n._groupImageData!==null?(Me=n._groupImgWidth,$e=n._groupImgHeight,ye=this._getColorIndicesForCoord(n,Math.round(ze.x*Me),Math.round(ze.y*$e),Me),k.color=ye,this._colors.push(ye.r,ye.g,ye.b,ye.a)):w?(R=xe.add(Ne.scale(ae)).add(He.scale(ae*Pe)),k.color=new D.f(R.x,R.y,R.z,R.w),this._colors.push(R.x,R.y,R.z,R.w)):(R=xe.set(Math.random(),Math.random(),Math.random(),1),k.color=new D.f(R.x,R.y,R.z,R.w),this._colors.push(R.x,R.y,R.z,R.w)):(k.uv=ze.clone(),this._uvs.push(k.uv.x,k.uv.y))):(y?(nn.set(y.r,y.g,y.b),Ge=i.a.RandomRange(-P,P),qe=i.a.RandomRange(-P,P),Ce=nn.toHSV(),en=Ce.r,he=Ce.g+Ge,de=Ce.b+qe,he<0&&(he=0),he>1&&(he=1),de<0&&(de=0),de>1&&(de=1),D.e.HSVtoRGBToRef(en,he,de,Te),R.set(Te.r,Te.g,Te.b,1)):R=xe.set(Math.random(),Math.random(),Math.random(),1),k.color=new D.f(R.x,R.y,R.z,R.w),this._colors.push(R.x,R.y,R.z,R.w))}},l.prototype._colorFromTexture=function(e,n,f){var v=this;if(e.material===null){K.a.Warn(e.name+"has no material."),n._groupImageData=null,this._setPointsColorOrUV(e,n,f,!0,!1);return}var d=e.material,y=d.getActiveTextures();if(y.length===0){K.a.Warn(e.name+"has no usable texture."),n._groupImageData=null,this._setPointsColorOrUV(e,n,f,!0,!1);return}var P=e.clone();P.setEnabled(!1),this._promises.push(new Promise(function(p){a.a.WhenAllReady(y,function(){var g=n._textureNb;g<0&&(g=0),g>y.length-1&&(g=y.length-1);var z=function(){n._groupImgWidth=y[g].getSize().width,n._groupImgHeight=y[g].getSize().height,v._setPointsColorOrUV(P,n,f,!0,!0),P.dispose(),p()};n._groupImageData=null;var T=y[g].readPixels();T?T.then(function(E){n._groupImageData=E,z()}):z()})}))},l.prototype._calculateDensity=function(e,n,f){for(var v=new Array,d,y,P,p,g,z,T,E,w,F,Z,S,N,L=r.e.Zero(),U=r.e.Zero(),W=r.e.Zero(),C=r.e.Zero(),I=r.e.Zero(),j=r.e.Zero(),V,$,J,m,Y,ee=new Array,ne=0,Q=f.length/3,d=0;d<Q;d++)y=f[3*d],P=f[3*d+1],p=f[3*d+2],g=n[3*y],z=n[3*y+1],T=n[3*y+2],E=n[3*P],w=n[3*P+1],F=n[3*P+2],Z=n[3*p],S=n[3*p+1],N=n[3*p+2],L.set(g,z,T),U.set(E,w,F),W.set(Z,S,N),U.subtractToRef(L,C),W.subtractToRef(U,I),W.subtractToRef(L,j),V=C.length(),$=I.length(),J=j.length(),m=(V+$+J)/2,Y=Math.sqrt(m*(m-V)*(m-$)*(m-J)),ne+=Y,ee[d]=Y;for(var x=0,d=0;d<Q;d++)v[d]=Math.floor(e*ee[d]/ne),x+=v[d];var H=e-x,X=Math.floor(H/Q),G=H%Q;X>0&&(v=v.map(function(q){return q+X}));for(var d=0;d<G;d++)v[d]+=1;return v},l.prototype.addPoints=function(e,n){n===void 0&&(n=this._randomUnitVector);for(var f=new o.b(this._groupCounter,n),v,d=this.nbParticles,y=0;y<e;y++)v=this._addParticle(d,f,this._groupCounter,y),f&&f._positionFunction&&f._positionFunction(v,d,y),this._positions.push(v.position.x,v.position.y,v.position.z),v.color&&this._colors.push(v.color.r,v.color.g,v.color.b,v.color.a),v.uv&&this._uvs.push(v.uv.x,v.uv.y),d++;return this.nbParticles+=e,this._groupCounter++,this._groupCounter},l.prototype.addSurfacePoints=function(e,n,f,v,d){var y=f||u.Random;(isNaN(y)||y<0||y>3)&&(y=u.Random);var P=e.getVerticesData(M.b.PositionKind),p=e.getIndices();this._groups.push(this._groupCounter);var g=new o.b(this._groupCounter,null);switch(g._groupDensity=this._calculateDensity(n,P,p),y===u.Color?g._textureNb=v||0:v=v||new D.f(1,1,1,1),y){case u.Color:this._colorFromTexture(e,g,!1);break;case u.UV:this._setPointsColorOrUV(e,g,!1,!1,!1);break;case u.Random:this._setPointsColorOrUV(e,g,!1);break;case u.Stated:this._setPointsColorOrUV(e,g,!1,void 0,void 0,v,d);break}return this.nbParticles+=n,this._groupCounter++,this._groupCounter-1},l.prototype.addVolumePoints=function(e,n,f,v,d){var y=f||u.Random;(isNaN(y)||y<0||y>3)&&(y=u.Random);var P=e.getVerticesData(M.b.PositionKind),p=e.getIndices();this._groups.push(this._groupCounter);var g=new o.b(this._groupCounter,null);switch(g._groupDensity=this._calculateDensity(n,P,p),y===u.Color?g._textureNb=v||0:v=v||new D.f(1,1,1,1),y){case u.Color:this._colorFromTexture(e,g,!0);break;case u.UV:this._setPointsColorOrUV(e,g,!0,!1,!1);break;case u.Random:this._setPointsColorOrUV(e,g,!0);break;case u.Stated:this._setPointsColorOrUV(e,g,!0,void 0,void 0,v,d);break}return this.nbParticles+=n,this._groupCounter++,this._groupCounter-1},l.prototype.setParticles=function(e,n,f){if(e===void 0&&(e=0),n===void 0&&(n=this.nbParticles-1),f===void 0&&(f=!0),!this._updatable||!this._isReady)return this;this.beforeUpdateParticles(e,n,f);var v=r.c.Matrix[0],d=this.mesh,y=this._colors32,P=this._positions32,p=this._uvs32,g=r.c.Vector3,z=g[5].copyFromFloats(1,0,0),T=g[6].copyFromFloats(0,1,0),E=g[7].copyFromFloats(0,0,1),w=g[8].setAll(Number.MAX_VALUE),F=g[9].setAll(-Number.MAX_VALUE);r.a.IdentityToRef(v);var Z=0;if(this.mesh.isFacetDataEnabled&&(this._computeBoundingBox=!0),n=n>=this.nbParticles?this.nbParticles-1:n,this._computeBoundingBox&&(e!=0||n!=this.nbParticles-1)){var S=this.mesh._boundingInfo;S&&(w.copyFrom(S.minimum),F.copyFrom(S.maximum))}for(var Z=0,N=0,L=0,U=0,W=e;W<=n;W++){var C=this.particles[W];Z=C.idx,N=3*Z,L=4*Z,U=2*Z,this.updateParticle(C);var I=C._rotationMatrix,j=C.position,V=C._globalPosition;this._computeParticleRotation&&C.getRotationMatrix(v);var $=C.parentId!==null;if($){var J=this.particles[C.parentId],m=J._rotationMatrix,Y=J._globalPosition,ee=j.x*m[1]+j.y*m[4]+j.z*m[7],ne=j.x*m[0]+j.y*m[3]+j.z*m[6],Q=j.x*m[2]+j.y*m[5]+j.z*m[8];if(V.x=Y.x+ne,V.y=Y.y+ee,V.z=Y.z+Q,this._computeParticleRotation){var x=v.m;I[0]=x[0]*m[0]+x[1]*m[3]+x[2]*m[6],I[1]=x[0]*m[1]+x[1]*m[4]+x[2]*m[7],I[2]=x[0]*m[2]+x[1]*m[5]+x[2]*m[8],I[3]=x[4]*m[0]+x[5]*m[3]+x[6]*m[6],I[4]=x[4]*m[1]+x[5]*m[4]+x[6]*m[7],I[5]=x[4]*m[2]+x[5]*m[5]+x[6]*m[8],I[6]=x[8]*m[0]+x[9]*m[3]+x[10]*m[6],I[7]=x[8]*m[1]+x[9]*m[4]+x[10]*m[7],I[8]=x[8]*m[2]+x[9]*m[5]+x[10]*m[8]}}else if(V.x=0,V.y=0,V.z=0,this._computeParticleRotation){var x=v.m;I[0]=x[0],I[1]=x[1],I[2]=x[2],I[3]=x[4],I[4]=x[5],I[5]=x[6],I[6]=x[8],I[7]=x[9],I[8]=x[10]}var H=g[11];C.translateFromPivot?H.setAll(0):H.copyFrom(C.pivot);var X=g[0];X.copyFrom(C.position);var G=X.x-C.pivot.x,q=X.y-C.pivot.y,ve=X.z-C.pivot.z,te=G*I[0]+q*I[3]+ve*I[6],re=G*I[1]+q*I[4]+ve*I[7],ie=G*I[2]+q*I[5]+ve*I[8];te+=H.x,re+=H.y,ie+=H.z;var ge=P[N]=V.x+z.x*te+T.x*re+E.x*ie,ue=P[N+1]=V.y+z.y*te+T.y*re+E.y*ie,le=P[N+2]=V.z+z.z*te+T.z*re+E.z*ie;if(this._computeBoundingBox&&(w.minimizeInPlaceFromFloats(ge,ue,le),F.maximizeInPlaceFromFloats(ge,ue,le)),this._computeParticleColor&&C.color){var oe=C.color,se=this._colors32;se[L]=oe.r,se[L+1]=oe.g,se[L+2]=oe.b,se[L+3]=oe.a}if(this._computeParticleTexture&&C.uv){var _e=C.uv,me=this._uvs32;me[U]=_e.x,me[U+1]=_e.y}}return f&&(this._computeParticleColor&&d.updateVerticesData(M.b.ColorKind,y,!1,!1),this._computeParticleTexture&&d.updateVerticesData(M.b.UVKind,p,!1,!1),d.updateVerticesData(M.b.PositionKind,P,!1,!1)),this._computeBoundingBox&&(d._boundingInfo?d._boundingInfo.reConstruct(w,F,d._worldMatrix):d._boundingInfo=new s.a(w,F,d._worldMatrix)),this.afterUpdateParticles(e,n,f),this},l.prototype.dispose=function(){this.mesh.dispose(),this.vars=null,this._positions=null,this._indices=null,this._normals=null,this._uvs=null,this._colors=null,this._indices32=null,this._positions32=null,this._uvs32=null,this._colors32=null},l.prototype.refreshVisibleSize=function(){return this._isVisibilityBoxLocked||this.mesh.refreshBoundingInfo(),this},l.prototype.setVisibilityBox=function(e){var n=e/2;this.mesh._boundingInfo=new s.a(new r.e(-n,-n,-n),new r.e(n,n,n))},Object.defineProperty(l.prototype,"isAlwaysVisible",{get:function(){return this._alwaysVisible},set:function(e){this._alwaysVisible=e,this.mesh.alwaysSelectAsActiveMesh=e},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"computeParticleRotation",{set:function(e){this._computeParticleRotation=e},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"computeParticleColor",{get:function(){return this._computeParticleColor},set:function(e){this._computeParticleColor=e},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"computeParticleTexture",{get:function(){return this._computeParticleTexture},set:function(e){this._computeParticleTexture=e},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"computeBoundingBox",{get:function(){return this._computeBoundingBox},set:function(e){this._computeBoundingBox=e},enumerable:!1,configurable:!0}),l.prototype.initParticles=function(){},l.prototype.recycleParticle=function(e){return e},l.prototype.updateParticle=function(e){return e},l.prototype.beforeUpdateParticles=function(e,n,f){},l.prototype.afterUpdateParticles=function(e,n,f){},l}()}}]);
