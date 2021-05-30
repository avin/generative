(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[87,175,176,177,178,179],{296:function(i,e,n){"use strict";n.r(e),e.default=`#version 300 es

#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#define GLSLIFY 1
#endif

#define HW_PERFORMANCE 1

uniform vec3 iResolution;
uniform float iTime;
uniform float iChannelTime[4];
uniform vec4 iMouse;
uniform vec4 iDate;
uniform float iSampleRate;
uniform vec3 iChannelResolution[4];
uniform int iFrame;
uniform float iTimeDelta;
uniform float iFrameRate;
struct Channel {
    vec3 resolution;
    float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage(out vec4 c, in vec2 f);

// --------- START-SHADER-TOY-CODE-HERE ------------

#pragma includeScene

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void)
{
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage(color, gl_FragCoord.xy);
    color.w = 1.0;
    outColor = color;
}
`},297:function(i,e,n){"use strict";n.r(e),e.default=`#version 300 es

#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#define GLSLIFY 1
#endif

layout(location = 0) in vec3 position;
void main()
{
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`},298:function(i,e,n){"use strict";n.r(e),e.default=`#define GLSLIFY 1
// Noise pixel size
#define SIZE 5.0
// Lower - more flowing
#define FLUENCY 2.85

float rand(vec2 co) {
  return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 id = ceil(fragCoord/SIZE);
  vec2 rid = vec2(rand(id), rand(id+iResolution.y));

  float ridFactor = rid.x + rid.y;
  float f = ridFactor + iTime * FLUENCY *  (ridFactor);
  float fid = floor(f);
  f = abs(fract(f) - mod(fid, 2.));
  //fragColor = vec4(0.1/f);
  fragColor = clamp(vec4(0.1/f), 0.0, 1.0);
}
`},299:function(i,e,n){"use strict";n.r(e),e.default=`#define GLSLIFY 1
#define PI 3.1415926
#define PI_2 1.5707963
#define PI_4 0.78539815

float roundedRect(vec2 p, float size ){
  float mask =
  smoothstep(size, size-.1, abs(p.x)) *
  smoothstep(size, size-.1, abs(p.y));

  return smoothstep(.45, .5, mask);
}

float roundedCross(vec2 p, float size ){
  vec2 rp = p;
  float result = 0.;

  for(float i= -1.; i<=1.; i+=2.){
    vec2 rp = p;
    rp *= mat2(cos( sin(PI_2 * i*sin(iTime)) + vec4(0,33,11,0)));

    float mask =
    smoothstep(size*2., size*2.0-.05, abs(rp.x))  *
    smoothstep(size, size-.05, abs(rp.y));

    result += smoothstep(.40, .5, mask);
  }

  return result;
}

float evilEye(vec2 p, float dir){
  float result = 0.;
  float l = length(p);
  result += smoothstep(.05, .045, l);

  result -= smoothstep(0.01, 0.02, p.x*dir+p.y*2.);

  return clamp(result, 0., 1.);
}

float mouth(vec2 p, float size){
  float l = length(p);
  float mask = smoothstep(.1*size,.1*size - .005, l);
  p.y -=0.05*size;
  p.x *= .6;
  l = length(p);
  mask -= smoothstep(.09, .085, l);

  return clamp(mask, 0., 1.);
}

float smile(vec2 p){
  float result = 0.;

  //Mouth
  vec2 mP = p;
  mP.y += .03;
  float mask = mouth(mP,1.15) - mouth(mP,1.0);

  result += clamp(mask, 0., 1.);

  //Teeth
  vec2 zP = p;
  zP.y += .1 + sin(zP.x*300.)*(.02 - abs(zP.x*.11)) - abs(zP.x*.3);
  result += smoothstep(0.01, 0.001, abs(zP.y)) * step(abs(zP.x), .09);

  return result;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 ouv = fragCoord/iResolution.xy;
  vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;

  uv *= (sin(iTime *0.33)*.5+.5)*.2 + 0.8;

  float mask = 0.;

  for(float i= -1.; i<=1.; i+=2.){
    vec2 ruv = uv + vec2(.30,0.) * i;

    ruv.y +=sin(iTime)*.02*i;
    ruv *= mat2(cos( (sin(iTime+i*1.5))*.1 + vec4(0,33,11,0)));

    mask += roundedRect(ruv, .25);
    mask -= roundedRect(ruv*1.25, .25);

    for(float i= -1.; i<=1.; i+=2.){
      vec2 euv = ruv;
      euv.x += .08*i;
      euv.y -= .05;
      mask += evilEye(euv, i);
    }

    mask += smile(ruv);
  }

  mask += roundedCross(uv, .05);

  vec3 back = texture(iChannel0, ouv).rgb + .8;
  vec3 col = mix(back, vec3(0.), mask);

  fragColor = vec4(col,1.0);
}
`},300:function(i,e,n){"use strict";n.r(e),e.default=`#define GLSLIFY 1
// Original one hosted on https://www.shadertoy.com/view/WtsGW4

#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 ouv = fragCoord/iResolution.xy;

  float ofstM = .002 * sin(ouv.y*5. + iTime) * rand1(iTime + floor(ouv.y*100.));
  vec3 col = texture(iChannel0, ouv + ofstM).rgb;

  float ofstR = .01 * sin(iTime*5.) * rand1(iTime + floor(ouv.y*10.));

  col.r = texture(iChannel0, ouv-vec2(ofstR, 0.)).r;

  fragColor = vec4(col,1.0);
}
`},549:function(i,e,n){"use strict";n.d(e,"a",function(){return r});const a=()=>!!document.createElement("canvas").getContext("webgl2"),r=()=>a()?"webgl2":"webgl"},77:function(i,e,n){"use strict";n.r(e);var a=n(764),r=n.n(a),h=n(765),C=n.n(h),l=n(296),u=n(297),E=n(298),R=n(299),T=n(300),P=n(549),t=Object.assign;const D={context:Object(P.a)(),animate:!0},O=({gl:s,update:M,render:_,pause:x})=>{const o=r()({gl:s}),v=C()(),p=o.texture(),g=o.texture(),f={blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}},attributes:{position:v.positions},elements:o.elements(v.cells)},y=o(t(t({frag:l.default.replace("#pragma includeScene",E.default),vert:u.default,uniforms:{iTime:o.prop("iTime"),iResolution:o.prop("iResolution")}},f),{depth:{mask:!1,enable:!1}})),L=o(t(t({frag:l.default.replace("#pragma includeScene",R.default),vert:u.default,uniforms:{iTime:o.prop("iTime"),iResolution:o.prop("iResolution"),iChannel0:p}},f),{depth:{mask:!1,enable:!1}})),I=o(t({frag:l.default.replace("#pragma includeScene",T.default),vert:u.default,uniforms:{iTime:o.prop("iTime"),iResolution:o.prop("iResolution"),iChannel0:g}},f));return{render({time:m,width:c,height:d}){o.poll(),s.flush(),y({iTime:m,iResolution:[c,d,1]}),p({copy:!0,min:"linear",mag:"linear"}),s.flush(),L({iTime:m,iResolution:[c,d,1]}),g({copy:!0,min:"linear",mag:"linear"}),s.flush(),I({iTime:m,iResolution:[c,d,1]})}}};e.default={sketch:O,settings:D}}}]);
