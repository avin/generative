#include <common>

uniform float iTime;

#define hue(v)  ( .6 + .6 * cos( 6.3*(v)  + vec4(0,23,21,0)  ) )

#define COL1 vec3(72, 175, 240) / 255.
#define COL2 vec3(255, 255, 255) / 255.
