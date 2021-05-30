(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[100,315,316],{210:function(i,e,n){"use strict";n.r(e),e.default=`precision highp float;
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
#define BLACK_COL vec3(24, 32, 38) / 255.

#define rand1(p) fract(sin(p * 78.233) * 43758.5453)
#define hue(h) clamp(abs(fract(h + vec4(3, 2, 1, 0) / 3.) * 6. - 3.) - 1., 0., 1.)

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

    float l = length(uv);
    float g = smoothstep(.5, .3, l);

    fragColor = vec4(vec3(g * .1), g);
}

varying vec2 vUv;

void main()
{
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
`},211:function(i,e,n){"use strict";n.r(e),e.default=`#define GLSLIFY 1
varying vec2 vUv;
varying vec3 vpos;
varying float size;

uniform float iTime;
uniform float pSize;

float hash12(vec2 p)
{
  vec3 p3  = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main()
{
    vUv = uv;
    float t = iTime*1.0;

    vpos = position;

    // vpos.x += hash12(position.xy * 100.)*.05 - .025;
    // vpos.y += hash12(position.xy * 200.)*.05 - .025;

    float vv = (position.y + position.x)*2. + sin(t)*7.;

    vv = (smoothstep(-3.0, 3.0, vv)) * 3.1415*.5;
    vv =  sin(vv) * cos(vv);

    vv *= .5;
    vpos.xy += vv;

    size = pSize;
    gl_PointSize = pSize;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vpos, 1.0);
}
`},24:function(i,e,n){"use strict";n.r(e),function(a){var s=n(549),p=n(210),h=n(211),c=Object.assign;const t=n(777);a.THREE=t,n(778);const y={animate:!0,context:Object(s.a)()},x=({context:P,viewportWidth:C,viewportHeight:S})=>{const o=new t.WebGLRenderer({canvas:P.canvas});o.setClearColor("hsl(0, 0%, 98%)",1);const r=new t.OrthographicCamera(-1,1,-1,1,1,1e3),f=new t.Scene,d=new t.PlaneGeometry(2.5,2.5,25,25);d.translate(0,0,-1);const E=t.ShaderLib.points,L=c(c({},E.uniforms),{iTime:{value:0},pSize:{value:10},iResolution:{value:[C,S]}}),u=new t.ShaderMaterial({uniforms:L,transparent:!0,depthWrite:!1,blending:t.NormalBlending,fragmentShader:p.default,vertexShader:h.default}),g=new t.Points(d,u);return g.sortParticles=!0,f.add(g),{resize({pixelRatio:v,viewportWidth:l,viewportHeight:m}){o.setPixelRatio(v),o.setSize(l,m,!1),r.aspect=l/m,r.updateProjectionMatrix()},render({time:v,dimensions:l}){u.uniforms.iTime.value=v,o.render(f,r)},unload(){o.dispose()}}};e.default={sketch:x,settings:y}}.call(this,n(15))},549:function(i,e,n){"use strict";n.d(e,"a",function(){return s});const a=()=>!!document.createElement("canvas").getContext("webgl2"),s=()=>a()?"webgl2":"webgl"}}]);
