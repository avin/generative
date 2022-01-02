attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 pPos;
varying float rSize;

uniform float iTime;
uniform float aRatio;
uniform float stackSize;
uniform float sizeStep;
uniform float pSize;
uniform vec3 camPos;

uniform mat4 worldViewProjection;
uniform mat4 world;

#define PI 3.1415926;
#define PI2 6.28318530;
#define rand1(p) fract(sin(p * 78.233) * 43758.5453)

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

void main()
{
    vUv = uv;
    pPos = position;

    gl_PointSize = stackSize * sizeStep - position.y * sizeStep;

    pPos.x += position.y*.01;
    rSize = gl_PointSize;

    float depth = position.y / stackSize;
    float df =  (1. - depth);

    float t = iTime;

    vec3 p  = position * 100.;

    float xf = snoise3(vec3(p.x + depth, depth + t, p.z + depth)) *.15 * depth;
    float zf = snoise3(vec3(p.x + depth + 100., depth + t, p.z + depth)) *.15  * depth;

    pPos.x += xf - depth*.25;
    pPos.z += zf + depth*.125;

    pPos.z /= aRatio;

    gl_Position = worldViewProjection * vec4(pPos, 1.0);

}
