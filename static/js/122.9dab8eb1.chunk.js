(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[122],{243:function(i,n,e){"use strict";e.r(n),n.default=`precision highp float;
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
`}}]);
