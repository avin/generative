#include <common>

uniform vec3 iResolution;
uniform float iTime;

#pragma glslify: noise = require('glsl-noise/simplex/3d')


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord - iResolution.xy*.5)/iResolution.y;

    float l = length(uv);

    float t = iTime;
    float wave = clamp(1. - (floor(l*10. - t)/10. + t/10. + l/3.), 0., 1.);

    float star = clamp(.001 / smoothstep(.85,.1, noise(vec3(uv*40., .5 + .5))) * l, .0, .5);
    vec3 blue = vec3(0.121, 0.294, 0.6);
    vec3 col = mix(blue, blue + vec3(l), star) + wave*.5;

    // Output to screen
    fragColor = vec4(col, 1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
