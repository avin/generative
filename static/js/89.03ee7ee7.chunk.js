(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[89,290,291,292,293],{114:function(h,t,e){"use strict";e.r(t);var p=e(445),E=e(449),T=e(475),i=e(435),z=e(441),D=e(506),C=e(665),U=e(455),x=e(549),_=(m,v,f)=>new Promise((M,c)=>{var s=o=>{try{l(f.next(o))}catch(a){c(a)}},u=o=>{try{l(f.throw(o))}catch(a){c(a)}},l=o=>o.done?M(o.value):Promise.resolve(o.value).then(s,u);l((f=f.apply(m,v)).next())});const L={animate:!0,context:Object(x.a)()},R=m=>_(void 0,[m],function*({canvas:v,width:f,height:M}){const c=new p.a(v,!0,{preserveDrawingBuffer:!0,stencil:!0}),s=new E.a(c);s.clearColor=z.a.FromHexString("#182026");const u=new D.a("camera1",-1.09,1.49,50,new T.z(0,10,0),s);u.attachControl(v,!0);const l=new C.b("pcs",10,s),o=25e4,a=Math.sqrt(o),g=1;l.addPoints(o,(d,r)=>{const P=r/a|0,O=r%a;d.position.x=(O-a/2)*g,d.position.z=(P-a/2)*g});const I=yield l.buildMeshAsync(),n=new U.a("s",s);I.material=n,n.disableLighting=!0,n.pointsCloud=!0,n.pointSize=25,n.alphaMode=p.a.ALPHA_ADD,n.alpha=.5,n.customShaderNameResolve=(d,r,P,O,F,K,b)=>(i.a.ShadersStore.particlesVertexShader=i.a.ShadersStore.defaultVertexShader,i.a.ShadersStore.particlesPixelShader=i.a.ShadersStore.defaultPixelShader,r.push("iTime"),r.push("cameraPosition"),r.push("rowSize"),r.push("renderHeight"),[["CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",e(405)],["CUSTOM_FRAGMENT_DEFINITIONS",e(406)],["CUSTOM_VERTEX_DEFINITIONS",e(407)],["CUSTOM_VERTEX_UPDATE_POSITION",e(408)]].forEach(([S,y])=>{S.startsWith("CUSTOM_VERTEX")&&(i.a.ShadersStore.particlesVertexShader=i.a.ShadersStore.particlesVertexShader.replace(`#define ${S}`,y.default)),S.startsWith("CUSTOM_FRAGMENT")&&(i.a.ShadersStore.particlesPixelShader=i.a.ShadersStore.particlesPixelShader.replace(`#define ${S}`,y.default))}),"particles");const A=+new Date;return n.onBind=()=>{const d=(+new Date-A)*.001;n.getEffect().setVector3("cameraPosition",u.position),n.getEffect().setFloat("iTime",d),n.getEffect().setFloat("rowSize",a),n.getEffect().setFloat("renderHeight",s.getEngine().getRenderHeight())},{render({time:d}){s.render()},resize({pixelRatio:d,width:r,height:P}){c.resize()},unload(){c.dispose()}}});t.default={sketch:R,settings:L}},405:function(h,t,e){"use strict";e.r(t),t.default=`#define GLSLIFY 1
vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

float l = length(uv);
float depth = abs(length(vPos - cameraPosition) * .5 - 30.);
float d = sqrt(depth) * .01;
float blurFactor = renderHeight/350.;
float cl = clamp(smoothstep(.051 + d * blurFactor, .050, l), 0., 1.0);
float af = clamp(sqrt(d) * 3.0, 0., 1.);

color = vec4(vec3(cl), cl*(1. - af)*.5);
`},406:function(h,t,e){"use strict";e.r(t),t.default=`#define GLSLIFY 1
uniform vec3 cameraPosition;
uniform float renderHeight;

varying vec3 vPos;
`},407:function(h,t,e){"use strict";e.r(t),t.default=`#define GLSLIFY 1
uniform float iTime;
uniform float rowSize;

varying vec3 vPos;

#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3)
{
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float noise(vec3 p)
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
`},408:function(h,t,e){"use strict";e.r(t),t.default=`#define GLSLIFY 1
positionUpdated.z -= iTime * 7.;

positionUpdated.z = fract((positionUpdated.z + rowSize / 2.) / rowSize) * rowSize - rowSize / 2.;

vec3 oPos = positionUpdated;

float zt = iTime * 0.5;
float yt = iTime * .125;

float f = 0.;

for (float i = 1.; i < 10.; i++) {
  f += noise(positionUpdated * (i*.015) + vec3(300., yt, zt)) * (.8/i);
}

float l = length(vec2(positionUpdated.x, positionUpdated.z));

positionUpdated.y += f * (cos(oPos.z * .01 + 3.1412526 / 2.) * 20.1);

vPos = positionUpdated;
`},549:function(h,t,e){"use strict";e.d(t,"a",function(){return E});const p=()=>!!document.createElement("canvas").getContext("webgl2"),E=()=>p()?"webgl2":"webgl"}}]);
