(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[240],{362:function(s,e,i){"use strict";i.r(e),e.default=`#define GLSLIFY 1
vec2 uv = vDiffuseUV+uvOffset;
baseColor.rgb = hsv2rgb_smooth(vec3(uv.y - iTime*.1, (sin(uv.x*PI*2. - iTime*5.)*.5+.5)*.25 + .75, 1.));
`}}]);
