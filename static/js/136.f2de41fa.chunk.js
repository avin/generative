(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[136],{257:function(o,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
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

varying vec2 vUv;
varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform float iTime;
uniform float pSize;
uniform vec3 camPosition;

float hash(vec3 p)// replace this by something better
{
  p  = fract(p*0.3183099+.1);
  p *= 17.0;
  return fract(p.x*p.y*p.z*(p.x+p.y+p.z));
}

void main() {
  vUv = uv;

  hp = hash(position); // \u0420\u0430\u043D\u0434\u043E\u043C\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440 \u0434\u043B\u044F \u0442\u043E\u0447\u043A\u0438 \u043F\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0438
  hp2 = hash(position*3.3); // \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440
  hp3 = hash(position*6.6); // \u0415\u0449\u0435 \u043E\u0434\u0438\u043D \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440

  float t = iTime*.5 + hp; // \u0417\u0430\u043C\u0435\u0434\u043B\u044F\u0435\u043C \u0432\u0440\u0435\u043C\u044F \u0438 \u043F\u0440\u0438\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440 - \u0443 \u044D\u0442\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u0431\u0443\u0434\u0435\u0442 "\u0441\u0432\u043E\u0451" \u0432\u0440\u0435\u043C\u044F

  vpos = position;

  // \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u0435\u044B\u0439 vec3 \u0434\u043B\u044F \u0442\u043E\u0447\u043A\u0438 \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0447\u043A\u0438
  vec3 npp = vec3(hash(position), hash(position*10.), hash(position*20.))*2.;

  // \u0424\u0430\u043A\u0442\u043E\u0440 \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u0448\u0443\u043C
  float nF = snoise((npp + vec3(iTime*.525)) * 1.) * (.25 + fract(t))*.5;

  // \u0414\u0438\u0432\u0433\u0430\u0435\u043C \u0442\u043E\u0447\u043A\u0438
  vpos.y -= (vpos.y * fract(t)*2. );

  // \u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0444\u0430\u043A\u0442\u043E\u0440 \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u044F
  vpos.xyz += nF*2.;

  gl_PointSize = pSize*35. / length(camPosition - vpos);

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
`}}]);
