(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[96,122,123],{243:function(s,o,n){"use strict";n.r(o),o.default=`precision highp float;
#define GLSLIFY 1

varying vec3 vpos;

uniform vec2 iResolution;
uniform float iTime;

varying float fogDepth;
varying float size;
uniform float fogDensity;

uniform mat3 uvTransform;

#define PI 3.1415926
#define TAU 6.2831852
#define BLACK_COL vec3(24,32,38)/255.

#define rand1(p) fract(sin(p* 78.233)* 43758.5453)
#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float g = length(uv) * size;

  g = (size*.1) / smoothstep(.0, size*.5, g);

  fragColor = vec4(hue(length(vpos) * size * .75).rgb * g, g*.75);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},244:function(s,o,n){"use strict";n.r(o),o.default=`#define GLSLIFY 1
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
varying float size;

uniform float iTime;
uniform float pSize;

void main() {
  vUv = uv;
  float t = iTime*.025;

  vpos = position;

  vpos.xyz *= 1. + snoise(position*1.5 + vec3(iTime*.5))*.15;
  vpos.xyz *= 1. + snoise(position*5.5 + vec3(iTime*.5))*.075;
  vpos.xyz *= 1. + snoise(position*10.5 + vec3(iTime*.5))*.025;

  size = pSize;
  gl_PointSize = pSize + (length(vpos)-.75)*10.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
`},52:function(s,o,n){"use strict";n.r(o),function(r){var c=n(549),f=n(243),g=n(244),x=Object.assign;const e=n(777);r.THREE=e,n(778);const h={animate:!0,context:"webgl"},z=({context:l})=>{const i=new e.WebGLRenderer({canvas:l.canvas});i.setClearColor("hsl(100, 10%, 10%)",1);const t=new e.PerspectiveCamera(50,1,.01,100);t.position.set(2,-1.5,-1),t.lookAt(new e.Vector3);const d=new e.OrbitControls(t,l.canvas),m=new e.Scene,C=new e.OctahedronGeometry(1,7),b=e.ShaderLib.points,w=x(x({},b.uniforms),{iTime:{value:0},pSize:{value:4}}),p=new e.ShaderMaterial({uniforms:w,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending,fragmentShader:f.default,vertexShader:g.default}),y=new e.Points(C,p);return y.sortParticles=!0,m.add(y),{resize({pixelRatio:v,viewportWidth:a,viewportHeight:u}){i.setPixelRatio(v),i.setSize(a,u,!1),t.aspect=a/u,t.updateProjectionMatrix()},render({time:v,dimensions:a}){p.uniforms.iTime.value=v*.75,d.update(),i.render(m,t)},unload(){d.dispose(),i.dispose()}}};o.default={sketch:z,settings:h}}.call(this,n(15))},549:function(s,o,n){"use strict";n.d(o,"a",function(){return c});const r=()=>!!document.createElement("canvas").getContext("webgl2"),c=()=>r()?"webgl2":"webgl"}}]);
