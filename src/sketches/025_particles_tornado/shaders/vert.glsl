attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec3 oPos;
varying vec3 pPos;
varying float rSize;

uniform float iTime;
uniform float pSize;
uniform vec3 camPos;

uniform mat4 worldViewProjection;
uniform mat4 world;

#define PI 3.1415926;
#define PI2 6.28318530;
#define MOD3 vec3(.1031,.11369,.13787)
#define rand1(p) fract(sin(p* 78.233)* 43758.5453)

vec3 hash33(vec3 p3)
{
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float noise(vec3 p)
{
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;

  vec3 i = floor(p + (p.x + p.y + p.z) * K1);
  vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);

  vec3 e = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy * (1.0 - e);

  vec3 d1 = d0 - (i1 - 1.0 * K2);
  vec3 d2 = d0 - (i2 - 2.0 * K2);
  vec3 d3 = d0 - (1.0 - 3.0 * K2);

  vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
  vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));

  return dot(vec4(31.316), n);
}

void main()
{
  vUv = uv;

  oPos = position;
  pPos = position;

  float t = fract(iTime/5.)*5.;
  float f = noise(oPos*.5);

  float moveFactor = (oPos.z*.02-(t*.5 + f*.3))*(10. + (pPos.y - oPos.y +50.)*1.)*t*step(pPos.z*.02, t*.5 + f*.3);

  float l = length(oPos.xz);
  float rp = iTime*abs(oPos.x*.05) + rand1(oPos.x)*PI2 + rand1(oPos.z*100.)*PI2;
  pPos.x = cos(rp)*l;
  pPos.z = sin(rp)*l;
  pPos.y += (rand1(oPos.x+oPos.z) - .5)*20.;

float camLength = clamp(length(camPos-pPos), 0., 100.);

rSize = 100. / (camLength*0.65);

gl_PointSize = rSize*2.;

gl_Position = worldViewProjection * vec4( pPos, 1.0 );
}
