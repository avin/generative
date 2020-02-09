uniform float iTime;
uniform vec2 iResolution;

varying vec3 vpos;
varying vec2 vUv;

#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828

uniform vec4 vFogInfos;
uniform vec3 vFogColor;
varying float fFogDistance;

float CalcFogFactor()
{
  float fogCoeff = 1.0;
  float fogStart = vFogInfos.y;
  float fogEnd = vFogInfos.z;
  float fogDensity = vFogInfos.w;

  if (FOGMODE_LINEAR == vFogInfos.x)
  {
    fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);
  }
  else if (FOGMODE_EXP == vFogInfos.x)
  {
    fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);
  }
  else if (FOGMODE_EXP2 == vFogInfos.x)
  {
    fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);
  }

  return clamp(fogCoeff, 0.0, 1.0);
}

  #define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  float fog = CalcFogFactor();
  vec3 color = hue(vpos.y*.2 + .725).rgb;
  color = fog * color + (1.0 - fog) * vFogColor;
  fragColor = vec4(color, 1.);
}

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
