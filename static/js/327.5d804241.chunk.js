(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[327],{223:function(e,n,o){"use strict";o.r(n),n.default=`#define GLSLIFY 1
varying vec3 oPos;
varying vec3 pPos;
varying float rSize;

varying vec2 vUv;

uniform vec2 iResolution;
uniform float iTime;

// #define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
// #define hue(v)  ( .6 + .6 * cos( 6.3*(v)  + vec4(0,23,21,0)  ) )

void mainImage( out vec4 fragColor, in vec2 fragCoord)
{
//  vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;
//
//  vec3 col = hue(fract(oPos.z)*.4 + .45).rgb;
//
//  float l = length(uv);
//  float rsx = clamp(rSize/10., 0., .5);
//  float g = smoothstep(.5, .45 - rsx, l);
//
//  fragColor = vec4(col * g, 1.-rsx*.1);

  fragColor = vec4(vec3(1.), 1.);
}

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`}}]);
