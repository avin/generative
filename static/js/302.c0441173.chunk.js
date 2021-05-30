(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[302],{420:function(n,e,i){"use strict";i.r(e),e.default=`#define GLSLIFY 1
vec3 viewDirectionW = normalize(vEyePosition.xyz-vPositionW);
vec3 normalW = normalize(vNormalW);

float r =  dot(normalW, viewDirectionW);
surfaceAlbedo = hsv2rgb_smooth(vec3(r*.8 + .4 + iTime*.1, 1., .5));
`}}]);
