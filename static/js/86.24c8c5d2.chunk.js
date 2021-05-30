(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[86,132,133,134,135,136],{253:function(I,m,d){"use strict";d.r(m),m.default=`precision highp float;
#define GLSLIFY 1

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

#define BLACK_COL vec3(24,32,38)/255.
#define WHITE_COL vec3(245,248,250)/255.

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.y;

  vec2 st = vec2(atan(uv.x, uv.y), length(uv));

  st.x += iTime*.1 + floor(st.y * 5. - iTime*1.)*0.3925;

  float g = st.x * 3.82 * 2.;
  float b1 = fract(g);
  float b2 = sin(st.y*100. - iTime * 10.) * .25 + .5;

  float gf = floor(mod(g, 2.)) * .6;
  float m = step(.125 - st.y*.25 * gf, abs(b2 - b1) );

  m = (1.-m) * abs(1. - gf + .1);

  vec3 col = mix(BLACK_COL, WHITE_COL, m);

  fragColor = vec4(col, 1.0);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},254:function(I,m,d){"use strict";d.r(m),m.default=`precision highp float;
#define GLSLIFY 1

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
  vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y;
  vec2 st = vec2(atan(uv.x, uv.y), length(uv));
  uv = vec2(st.x / 6.2831 + iTime * 2.0 - st.y * 5.0, st.y);
  float smf = .1;
  float m = fract(uv.x);
  float mask = smoothstep(0., smf, abs(m-.5)-.25);
  vec3 col = vec3(0.88, 0, 0.52) * mask;
  fragColor = vec4(col, 1.0);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},255:function(I,m,d){"use strict";d.r(m),m.default=`#define GLSLIFY 1
varying vec2 vUv;
varying vec3 vpos;

uniform float iTime;
uniform float pSize;
uniform vec3 camPosition;

void main() {
  vUv = uv;

  vpos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vpos, 1.0 );
}
`},256:function(I,m,d){"use strict";d.r(m),m.default=`precision highp float;
#define GLSLIFY 1

varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float t = iTime*.5 + hp; // \u0414\u0435\u043B\u0430\u0435\u043C \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0442\u043E\u0447\u043A\u0438 \u0442\u0430\u043A\u043E\u0435 \u0436\u0435 \u043A\u0430\u043A \u0432 vertexShader

  float l = length(uv);
  float g = l * pSize/2.;
  float gx = clamp(.05 / smoothstep(.0, pSize, g), 0., 1.0);
  float lim = smoothstep(.5, .3, l);

  // \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043E\u0442 hp3 \u0447\u0442\u043E\u0431 \u0432\u0441\u0435 \u0442\u043E\u0447\u043A\u0438 \u0431\u044B\u043B\u0438 \u0441 \u0440\u0430\u0437\u043D\u043E\u0439 \u044F\u0440\u043A\u043E\u0441\u0442\u044C\u044E
  fragColor = vec4(hue(hp3*.75 + iTime*hp2).rgb, hp3/(pSize*.25)*gx / g * lim);
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},257:function(I,m,d){"use strict";d.r(m),m.default=`#define GLSLIFY 1
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
`},55:function(I,m,d){"use strict";d.r(m),function(T){var C=d(786),b=d.n(C),D=d(253),P=d(254),u=d(255),n=d(256),a=d(257),h=Object.assign;const e=d(777),y=d(791).random;T.THREE=e,d(778);const c=y.createRandom();c.setSeed("415761");const A={animate:!0,context:"webgl"};function H(){const w=new e.MeshLambertMaterial({color:13689840});return w.emissive.setHex(16777215),w.emissiveIntensity=.2,w}function V(){return new e.ShaderMaterial({uniforms:{iTime:{value:0},iResolution:new e.Uniform(new e.Vector2(2e3,2e3))},fragmentShader:D.default,vertexShader:u.default})}function Y(){return new e.ShaderMaterial({uniforms:{iTime:{value:0},iResolution:new e.Uniform(new e.Vector2(100,100))},fragmentShader:P.default,vertexShader:u.default,side:e.DoubleSide})}function Z(){const w=e.ShaderLib.points,E=h(h({},w.uniforms),{iTime:{value:0},pSize:{value:10},camPosition:new e.Uniform(new e.Vector3)});return new e.ShaderMaterial({uniforms:E,transparent:!0,depthWrite:!1,blending:e.AdditiveBlending,fragmentShader:n.default,vertexShader:a.default})}function J(){return new e.MeshLambertMaterial({color:3162189})}function Q(){return new e.MeshPhongMaterial({color:16075147})}function $(){return new e.MeshLambertMaterial({color:16737877})}function q(){return new e.MeshLambertMaterial({color:16739914})}function ee(){return new e.MeshLambertMaterial({color:13397578})}const ne=new e.ShadowMaterial;ne.opacity=.9182;const R=new b.a("b95f61a90da961736c03f659c03cb0cc"),te=({context:w,canvas:E})=>{let j=!1;const U=document.createElement("div");U.innerHTML="Click to let it snow!",U.style.cssText="position: absolute; font-size: 100px; font-weight: bold; cursor:pointer; font-family: cursive;",E.parentNode.appendChild(U),E.parentNode.addEventListener("mousedown",()=>{j||(E.parentNode.removeChild(U),j=!0,R.resolve("https://soundcloud.com/trap-seacrest/let-it-snow-trap-remix",o=>{R.play();const i=R.audio;i.crossOrigin="Anonymous",i.autoplay=!0,i.play()}))});const S=new e.WebGLRenderer({canvas:w.canvas});S.setClearColor("hsl(200, 90%, 10%)",1),S.shadowMap.enabled=!0,S.shadowMap.type=e.PCFSoftShadowMap;const _=new e.PerspectiveCamera(25,2,.01,100);_.position.set(10,5,5);const L=new e.OrbitControls(_,w.canvas);L.minDistance=3,L.maxDistance=40,L.target.set(0,2,0);const v=new e.Scene,F=16777215,oe=new e.HemisphereLight(F,16777215,.42);v.add(oe);const O=new e.SpotLight(F,.98251,30,Math.PI/4,2,2);O.position.set(5,7,5),O.castShadow=!0,v.add(O),[O].forEach(o=>{o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=.15,o.shadow.camera.far=500,o.shadow.bias=1e-4;const i=15;o.shadow.camera.top=i,o.shadow.camera.bottom=-i,o.shadow.camera.left=i,o.shadow.camera.right=-i});const B=V(),X=Y(),N=Z(),k=J(),ie=q();{const o=new e.PlaneGeometry(200,200,100,100),i=new e.Mesh(o,B);i.rotation.x=-Math.PI*.5,v.add(i);const r=new e.Mesh(o,new e.ShadowMaterial({opacity:.5}));r.rotation.x=-Math.PI*.5,r.rotation.y=.01,r.receiveShadow=!0,r.castShadow=!0,v.add(r)}const f=[];{const o=H();for(let i=0;i<3;i+=1){const r=1-i*.22,s=new e.DodecahedronGeometry(r,3);s.vertices.forEach(l=>{l.x+=c.range(-.01,.01),l.y+=c.range(-.01,.01),l.z+=c.range(-.01,.01)});const t=new e.Mesh(s,o);t.castShadow=!0,t.receiveShadow=!0,t.radius=r,t.position.y+=.75+i*1.1,v.add(t),f.push(t)}}{for(let s=0;s<3;s+=1){const t=.075,l=new e.DodecahedronGeometry(t,1);l.vertices.forEach(g=>{const M=t*.05;g.x+=c.range(-M,M),g.y+=c.range(-M,M),g.z+=c.range(-M,M)});const p=new e.Mesh(l,k);p.castShadow=!0;const x=f[1].radius*1.025;p.position.x=x*Math.cos(Math.PI/4-s*(Math.PI/7)-.1),p.position.y=x*Math.sin(Math.PI/4-s*(Math.PI/7)-.1)+f[1].position.y,v.add(p)}const o=f[2].radius*.825;for(let s=-1;s<=1;s+=2){const t=.075,l=new e.DodecahedronGeometry(t,1);l.vertices.forEach(M=>{const z=t*.05;M.x+=c.range(-z,z),M.y+=c.range(-z,z),M.z+=c.range(-z,z)});const p=new e.Mesh(l,B);p.castShadow=!0,p.position.x=o*Math.cos(Math.PI/4-.25),p.position.y=o*Math.sin(Math.PI/4-.25)+f[2].position.y,p.position.x=o*Math.cos(s*.325),p.position.z=o*Math.sin(s*.325),v.add(p);const x=new e.CircleGeometry(t*1.5,20),g=new e.Mesh(x,X);g.rotateY(Math.PI/2),g.castShadow=!0,g.position.copy(p.position),g.position.x+=.09,g.rotateX(-Math.PI/10),v.add(g)}const i=new e.CylinderGeometry(.01,.01,.1,16,10),r=new e.Mesh(i,k);r.castShadow=!0,r.position.x=o*Math.cos(Math.PI/4-.25)+.125,r.position.y=o*Math.sin(Math.PI/4-.25)+f[2].position.y,r.rotateX(Math.PI/2),v.add(r)}{const o=.51,i=new e.CylinderGeometry(0,o*.125,o,16,10);i.vertices.forEach(s=>{const t=o*.015;s.x+=c.range(-t,t),s.y+=c.range(-t,t),s.z+=c.range(-t,t)});const r=new e.Mesh(i,ie);r.castShadow=!0,r.position.y=f[2].position.y,r.position.x=f[2].radius*.95+o/2,r.rotateZ(-Math.PI/2),v.add(r)}{const o=$(),i=.51,r=new e.CylinderGeometry(i*.035,i*.035,i,16,10);r.vertices.forEach(t=>{t.x-=t.y*t.y*1.5,t.z+=t.y*t.y*.25-t.x*t.x*5.25});const s=new e.Mesh(r,o);s.castShadow=!0,s.position.y=f[2].position.y-f[2].radius*.35,s.position.x=f[2].radius*.95,s.rotateZ(-Math.PI/2),s.rotateX(-Math.PI/2),v.add(s);for(let t=-1;t<=1;t+=2){const l=.125,p=new e.CylinderGeometry(l*.1275,l*.1275,l,16,10),x=new e.Mesh(p,o);x.castShadow=!0,x.position.y=f[2].position.y-f[2].radius*.35+i*.175,x.position.x=f[2].radius*.95-i*.075,x.position.z=i/2*t,x.rotateZ(-Math.PI/12),x.rotateX(-Math.PI/10*t),v.add(x)}}{const o=Q(),i=f[2].radius,r=new e.CylinderGeometry(i*.55,i*.5,i,16,10);r.vertices.forEach(t=>{const l=i*.025;t.y>-i/2?(t.x+=c.range(-l,l),t.y+=c.range(-l,l),t.z+=c.range(-l,l)):(t.x*=2,t.z*=2,t.y+=c.range(-l*2,l*2))}),r.center();const s=new e.Mesh(r,o);s.castShadow=!0,s.position.y=f[2].position.y+i/2+f[2].radius*.8,s.rotateX(-Math.PI/11),s.rotateZ(Math.PI/15),s.position.z-=.15,s.position.x-=.1,v.add(s)}const K=[];{const o=ee(),i=.8;for(let r=-1;r<=1;r+=2){const s=new e.CylinderGeometry(.02,.075,i,16,10);s.vertices.forEach(l=>{const p=.1*l.y;l.y+=i/2+c.range(-p,p),l.x+=Math.sin(l.y*10)*.02+c.range(-p,p),l.z+=Math.cos(l.y*10)*.02+c.range(-p,p)});const t=new e.Mesh(s,o);t.castShadow=!0,t.position.y=f[1].position.y*1.2,t.position.z=f[1].radius*.8*r,t.rotateX(-Math.PI/4+Math.PI/3*r),t.rotateX(Math.PI/4),t.originalRotationX=t.rotation.x,t.idx=r,K.push(t),v.add(t)}}const G=new e.Geometry(40,40,50,50);G.vertices=G.vertices.map(o=>(o.x+=(c.value()-.5)*.05,o.y+=(c.value()-.5)*4+6,o.z+=(c.value()-.5)*.05,o));for(let o=0;o<5e4;o+=1)G.vertices.push(new e.Vector3((c.value()-.5)*40,(c.value()-.5)*4+6,(c.value()-.5)*40));const W=new e.Points(G,N);return W.position.y+=4,W.sortParticles=!0,v.add(W),{resize({pixelRatio:o,viewportWidth:i,viewportHeight:r}){S.setPixelRatio(o),S.setSize(i,r,!1),_.aspect=i/r,_.updateProjectionMatrix()},render({time:o}){!j||(K.forEach(i=>{i.rotation.x=i.originalRotationX+Math.sin(o*7)*.3}),B.uniforms.iTime.value=o,X.uniforms.iTime.value=o,N.uniforms.iTime.value=o*.2,N.uniforms.camPosition=new e.Uniform(_.position),_.position.y=Math.max(_.position.y,.1),L.update(),S.render(v,_))},unload(){L.dispose(),S.dispose(),R.stop()}}};m.default={sketch:te,settings:A}}.call(this,d(15))},786:function(I,m,d){"use strict";var T="https://api.soundcloud.com",C,b="protocol hostname host pathname port search hash href".split(" ");function D(n){C||(C=document.createElement("a"));var a={};C.href=n||"";for(var h=0,e=b.length;h<e;h++){var y=b[h];a[y]=C[y]}return a}function P(n,a,h){var e=D(n),y=/\?(?:.*)$/,c=y.test(e.search)?"&":"?",A=e.protocol+"//"+e.host+e.port+e.pathname+e.search+c+a+"="+h+e.hash;return A}function u(n,a){if(!(this instanceof u))return new u(n,a);!n&&!a&&console.info("SoundCloud API requires clientId or custom apiUrl"),this._events={},this._clientId=n,this._baseUrl=a||T,this.playing=!1,this.duration=0,this.audio=document.createElement("audio")}u.prototype.resolve=function(n,a){var h=this._baseUrl+"/resolve.json?url="+encodeURIComponent(n);this._clientId&&(h=P(h,"client_id",this._clientId)),this._json(h,function(e){if(this.cleanData(),Array.isArray(e)&&(e={tracks:e}),e.tracks)e.tracks=e.tracks.map(this._transformTrack.bind(this)),this._playlist=e;else{this._track=this._transformTrack(e);var y=D(n);this._track.stream_url+=y.hash}this.duration=e.duration&&!isNaN(e.duration)?e.duration/1e3:0,a(e)}.bind(this))},u.prototype._jsonp=function(n,a){var h=document.getElementsByTagName("script")[0]||document.head,e=document.createElement("script"),y="jsonp_callback_"+new Date().valueOf()+Math.floor(Math.random()*1e3);window[y]=function(c){e.parentNode&&e.parentNode.removeChild(e),window[y]=function(){},a(c)},e.src=P(n,"callback",y),h.parentNode.insertBefore(e,h)},u.prototype._json=function(n,a){var h=new XMLHttpRequest;h.open("GET",n),h.onreadystatechange=function(){if(h.readyState===4&&h.status===200){var e={};try{e=JSON.parse(h.responseText)}catch(y){}a(e)}},h.send(null)},u.prototype._transformTrack=function(n){return this._baseUrl!==T&&(n.original_stream_url=n.stream_url,n.stream_url=n.stream_url.replace(T,this._baseUrl)),n},u.prototype.on=function(n,a){this._events[n]=a,this.audio.addEventListener(n,a,!1)},u.prototype.off=function(n,a){this._events[n]=null,this.audio.removeEventListener(n,a)},u.prototype.unbindAll=function(){for(var n in this._events){var a=this._events[n];a&&this.off(n,a)}},u.prototype.preload=function(n,a){this._track={stream_url:n},a&&(this.audio.preload=a),this.audio.src=this._clientId?P(n,"client_id",this._clientId):n},u.prototype.play=function(n){n=n||{};var a;if(n.streamUrl)a=n.streamUrl;else if(this._playlist){var h=this._playlist.tracks.length;if(h){if(n.playlistIndex===void 0?this._playlistIndex=this._playlistIndex||0:this._playlistIndex=n.playlistIndex,this._playlistIndex>=h||this._playlistIndex<0){this._playlistIndex=0;return}a=this._playlist.tracks[this._playlistIndex].stream_url}}else this._track&&(a=this._track.stream_url);if(!a)throw new Error("There is no tracks to play, use `streamUrl` option or `load` method");return this._clientId&&(a=P(a,"client_id",this._clientId)),a!==this.audio.src&&(this.audio.src=a),this.playing=a,this.audio.play()},u.prototype.pause=function(){this.audio.pause(),this.playing=!1},u.prototype.stop=function(){this.audio.pause(),this.audio.currentTime=0,this.playing=!1},u.prototype.next=function(n){n=n||{};var a=this._playlist.tracks.length;if(this._playlistIndex>=a-1)if(n.loop)this._playlistIndex=-1;else return;if(this._playlist&&a)return this.play({playlistIndex:++this._playlistIndex})},u.prototype.previous=function(){if(!(this._playlistIndex<=0)&&this._playlist&&this._playlist.tracks.length)return this.play({playlistIndex:--this._playlistIndex})},u.prototype.seek=function(n){if(!this.audio.readyState)return!1;var a=n.offsetX/n.target.offsetWidth||(n.layerX-n.target.offsetLeft)/n.target.offsetWidth;this.audio.currentTime=a*(this.audio.duration||0)},u.prototype.cleanData=function(){this._track=void 0,this._playlist=void 0},u.prototype.setVolume=function(n){!this.audio.readyState||(this.audio.volume=n)},u.prototype.setTime=function(n){!this.audio.readyState||(this.audio.currentTime=n)},I.exports=u}}]);
