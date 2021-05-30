(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[120],{241:function(o,n,e){"use strict";e.r(n),n.default=`#define GLSLIFY 1
#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

varying vec3 vpos;
varying float vtime;
uniform mat3 uvTransform;

void main() {
    vec2 uv = (uvTransform * vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

    float g = length(uv);

    g = .001 / smoothstep(.0, 20., g);

    gl_FragColor = vec4(vec3(g), g*.0125);
}
`}}]);
