(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[268],{385:function(c,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
varying vec3 vPos;

vec3 hsv2rgb_smooth( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

	rgb = rgb*rgb*(3.0-2.0*rgb); // cubic smoothing

	return c.z * mix( vec3(1.0), rgb, c.y);
}
`}}]);
