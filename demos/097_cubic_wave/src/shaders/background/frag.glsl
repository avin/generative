#include <common>

uniform vec3 iResolution;
uniform float iTime;

#define COL vec3(245, 248, 250) / 255.

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord / iResolution.xy;

    vec3 col = COL;

    col *= 0.5 + 0.5 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.15);

    col = clamp(col, 0.0, 1.0);
    col = col * 0.6 + 0.4 * col * col * (3.0 - 2.0 * col) + vec3(0.0, 0.0, 0.04);

    fragColor = vec4(col, 1.);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
