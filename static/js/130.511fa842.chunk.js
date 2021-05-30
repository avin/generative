(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[130],{252:function(i,n,o){"use strict";o.r(n),n.default=`precision highp float;
#define GLSLIFY 1

varying vec3 vpos;
varying float hp;
varying float hp2;
varying float hp3;

uniform vec2 iResolution;
uniform float iTime;
uniform float pSize;

uniform mat3 uvTransform;

void mainImage( out vec4 fragColor, in vec2 fragCoord){
  vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

  float t = iTime*.5 + hp; // \u0414\u0435\u043B\u0430\u0435\u043C \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0442\u043E\u0447\u043A\u0438 \u0442\u0430\u043A\u043E\u0435 \u0436\u0435 \u043A\u0430\u043A \u0432 vertexShader

  float g = length(uv) * pSize;
  float gx = clamp(.05 / smoothstep(.0, pSize, g), 0., 1.);

  // \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043E\u0442 hp3 \u0447\u0442\u043E\u0431 \u0432\u0441\u0435 \u0442\u043E\u0447\u043A\u0438 \u0431\u044B\u043B\u0438 \u0441 \u0440\u0430\u0437\u043D\u043E\u0439 \u044F\u0440\u043A\u043E\u0441\u0442\u044C\u044E
  fragColor = vec4(vec3(gx) / g, hp3/(pSize*.25));
}

varying vec2 vUv;

void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`}}]);
