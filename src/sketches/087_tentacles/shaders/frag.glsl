#version 300 es
#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#endif
#define HW_PERFORMANCE 1
uniform vec3 iResolution;
uniform float iTime;
uniform float iChannelTime[4];
uniform vec4 iMouse;
uniform vec4 iDate;
uniform float iSampleRate;
uniform vec3 iChannelResolution[4];
uniform int iFrame;
uniform float iTimeDelta;
uniform float iFrameRate;
struct Channel {
  vec3 resolution;
  float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage(out vec4 c, in vec2 f);

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/slS3WR

#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

#define SF 1. / min(iResolution.x, iResolution.y) * SIZE * .5
#define SS(l, s) smoothstep(SF, -SF, l - s)

// ---------------------

float hash(vec3 p) {
  p = fract(p * 0.3183099 + .1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(in vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);

  return mix(mix(mix(hash(i + vec3(0, 0, 0)), hash(i + vec3(1, 0, 0)), f.x),
                 mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x),
                 mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
             f.z);
}

// ----------------------

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 ouv = (fragCoord.xy - iResolution.xy * 0.5) / iResolution.x;

  float SIZE = iResolution.x / 125.;

  ouv *= SIZE;

  float mask = 0.0;

  vec2 uv = ouv;
  vec2 id = floor(uv);
  uv = fract(uv) - 0.5;

  float t = iTime * 3.;

  float totalLayers = 30.;
  for (float layer = 0.0; layer <= totalLayers; layer++) {
    uv += vec2(0., -sqrt(sqrt(layer)) * .02);

    float layerFactor1 = layer / totalLayers;
    float layerFactor2 = layerFactor1 * .85 + .15;

    float layerFactorMove = layer * .15;

    for (float y = -1.0; y <= 1.0; y++) {
      for (float x = -1.0; x <= 1.0; x++) {
        vec2 rid = id - vec2(x, y);

        float pf = .1 + layerFactor1 * .25;

        vec2 ruv = uv + vec2(x, y) + vec2(0, mod(rid, 2.) * .5) +
                   vec2(noise(vec3(rid, t - layerFactorMove)) * pf, noise(vec3(rid, t + 2000. - layerFactorMove)) * pf);

        float l = length(ruv);

        float diameter = .70 - layerFactor2 * .675;
        float d = SS(l, diameter);

        mask = max(mask, d * layerFactor1);

        mask -= SS(l + SF * 1.5, diameter);
      }
    }
  }

  vec3 col = vec3(1.0);
  col = mix(COL1, COL2, abs(mask));

  fragColor = vec4(col, 1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main(void) {
  vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
  mainImage(color, gl_FragCoord.xy);
  color.w = 1.0;
  outColor = color;
}
