#include <common>

varying vec2 vUv;

uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform float uFar;
uniform float focusPoint;
uniform float focusScale;
uniform float radScale;
uniform float depthFactor;
uniform vec2 resolution;

#define DISPLAY_GAMMA 1.5

#define GOLDEN_ANGLE 2.39996323
#define MAX_BLUR_SIZE 20.0

#define iResolution vec2(1000., 1000.)
#include <packing>

float getDepth(const in vec2 screenPosition) {
  float r;
#if DEPTH_PACKING == 1
  r = unpackRGBAToDepth(texture2D(tDepth, screenPosition));
#else
  r = texture2D(tDepth, screenPosition).x;
#endif
  if (r == 1.) {
    return 1.;
  }
  return (1. - r) * depthFactor;
}

float getBlurSize(float depth, float focusPoint, float focusScale) {
  float coc = clamp((1.0 / focusPoint - 1.0 / depth) * focusScale, -1.0, 1.0);
  return abs(coc) * MAX_BLUR_SIZE;
}

vec3 depthOfField(vec2 texCoord, float focusPoint, float focusScale) {
  // vec3 color = texture2D(tColor, texCoord).rgb;
  vec3 color = vec3(getDepth(texCoord));
  float depth = getDepth(texCoord);
  float centerDepth = depth * uFar;
  float centerSize = getBlurSize(centerDepth, focusPoint, focusScale);
  float tot = 1.0;

  vec2 texelSize = 1.0 / resolution.xy;

  float radius = radScale;
  for (float ang = 0.0; radius < MAX_BLUR_SIZE; ang += GOLDEN_ANGLE) {
    vec2 tc = texCoord + vec2(cos(ang), sin(ang)) * texelSize * radius;

    vec3 sampleColor = texture2D(tColor, tc).rgb;
    // vec3 sampleColor = vec3(getDepth(tc));
    float sampleDepth = getDepth(tc) * uFar;
    float sampleSize = getBlurSize(sampleDepth, focusPoint, focusScale);

    if (sampleDepth > centerDepth) {
      sampleSize = clamp(sampleSize, 0.0, centerSize * 2.0);
    }

    float m = smoothstep(radius - 0.5, radius + 0.5, sampleSize);
    color += mix(color / tot, sampleColor, m);
    tot += 1.0;
    radius += radScale / radius;
  }

  return color /= tot;
}

float linearize(float depth) {
  float znear = .5;
  float zfar = 1.0;

  return -zfar * znear / (depth * (zfar - znear) - zfar);
}

void main() {
  vec2 uv = vUv;

  vec3 color = depthOfField(uv, focusPoint, focusScale);

//  // tone mapping
//  color = vec3(1.7, 1.8, 1.9) * color / (1.0 + color);
//
//  //-----------------------------------------------------
//  // postprocessing
//  //-----------------------------------------------------
//
//  // Color control
//  color = 0.5 * color + 0.5 * color * color * (3.0 - 2.0 * color);
//
//  // Border dark
//  color *= 0.2 + 0.8 * pow(32.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.3);
//
//  // Fade in
//  // color *= smoothstep(0.0, 1.0, iTime);
//
//  color.rgb = color;

  // -----------------------------------------------------

  // inverse gamma correction
  gl_FragColor = vec4(pow(color.rgb, vec3(1.0 / DISPLAY_GAMMA)), 1.0);

    float z = getDepth(vUv);
    if(vUv.x > .5){
      z = 1. - z;
    }
    vec3 col = vec3(z);
    gl_FragColor = vec4(col, 1.);
}
