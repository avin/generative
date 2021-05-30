(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[179],{300:function(e,n,o){"use strict";o.r(n),n.default=`#define GLSLIFY 1
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
`}}]);
