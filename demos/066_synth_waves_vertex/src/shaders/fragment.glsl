precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform vec3 backColor;
uniform float count;

varying float vIdx;
varying float vUseColor;

#define DYNAMIC_COLOR 1
#define hue(h) clamp(abs(fract(h + vec4(3, 2, 1, 0) / 3.) * 6. - 3.) - 1., 0., 1.)

void main() {
  vec3 baseColor = backColor;

  if (vUseColor > .5) {
    float hueFactor = vIdx / count;
    if (DYNAMIC_COLOR == 1) {
      hueFactor += iTime * .1;
    }
    vec3 col = hue(hueFactor).rgb;
    baseColor.rgb = col;
  }

  gl_FragColor = vec4(baseColor, 1.);
}
