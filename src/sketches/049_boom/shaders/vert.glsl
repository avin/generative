precision highp float;

// Attributes
attribute vec3 position;
attribute vec2 uv;
attribute float idx;

// Uniforms
uniform mat4 viewProjection;
uniform float iTime;
uniform float maxSegments;
uniform float meshesCount;

// Varying
varying vec2 vUV;
varying float vIdx;
varying float vR;

#include<instancesDeclaration>

#define PI 3.141592653589
#define E  2.718281828459
#define EPSILON 0.0000001
#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3)
{
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float hash11(float p)
{
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
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

float rad2deg(float r) { return 180.0 * r / PI; }
float deg2rad(float d) { return PI * d / 180.0; }

mat3 rotMat(vec3 u, float angle)
{
    float s = sin(deg2rad(angle));
    float c = cos(deg2rad(angle));
    float i = 1.0-c;

    return mat3(
    c+u.x*u.x*i, u.x*u.y*i-u.z*s, u.x*u.z*i+u.y*s,
    u.y*u.x*i+u.z*s, c+u.y*u.y*i, u.y*u.z*i-u.x*s,
    u.z*u.x*i-u.y*s, u.z*u.y*i+u.x*s, c+u.z*u.z*i
    );
}

vec3 rotAxisAngle(vec3 position, vec3 axis, float angle)
{
    mat3 m = rotMat(axis, angle);
    return m * position;
}

vec3 rotY(vec3 v, float d)
{
    float r = deg2rad(d);
    float c = cos(r);
    float s = sin(r);
    return vec3(v.x*c+v.z*s, v.y, v.z*c+v.x*s);
}

vec3 rotX(vec3 v, float d)
{
    float r = deg2rad(d);
    float c = cos(r);
    float s = sin(r);
    return vec3(v.x, v.y*c+v.z*s, v.z*c+v.y*s);
}

vec3 rotZ(vec3 v, float d)
{
    float r = deg2rad(d);
    float c = cos(r);
    float s = sin(r);
    return vec3(v.x*c+v.y*s, v.y*c+v.x*s, v.z);
}



void main() {
    #include<instancesVertex>

    vIdx = idx;
    vUV = uv;

    vec3 vpos = position;

//    vpos.x = noise(vec3(0,0,(idx*100. + position.x + iTime*100.)*.01))*3.;
//    vpos.y = position.y + noise(vec3(0,0,(idx*200. + position.x + iTime*100.)*.01))*3.;
//    vpos.z = position.z + noise(vec3(0,0,(idx*200. + position.x + iTime*100.)*.01))*3.;

    // float t = mod(iTime*.5, 1.)*2.;
    float t = iTime*.5;

    t+=t;

    // float l = max(vpos.x-(maxSegments-2.) + t*1000., 1.)*.01;
    float k = .1;
    float l = vpos.x*k;

    float maxL = maxSegments * k;

    float lm = l/maxL;
    float lmn = 1.-lm;

    vpos.x = l;

    vpos.x = l + (sin(noise(vec3(-l + 100.,idx,l)))*.5 + .5)*.25;
    vpos.y = vpos.y*lmn + noise(vec3(-l + iTime,idx,l))*.25;
    vpos.z = vpos.z*lmn + noise(vec3(-l + iTime,idx+meshesCount,l))*.25;
    // vpos.z = vpos.z + idx*.5;



    float raX = hash11((idx))*360.;
    float raY = hash11((idx+meshesCount))*360.;
    float raZ = hash11((idx+meshesCount*2.))*360.;

//    vpos = rotX(vpos, idx*10.);
//    vpos = rotY(vpos, idx*10.);
//    vpos = rotZ(vpos, idx*10.);


    mat3 rot = rotMat (vec3(idx*10., idx*10., idx*10.), idx*10.);

    vpos = rotAxisAngle(vpos, vec3(1.,0., 0.), raX);
    vpos = rotAxisAngle(vpos, vec3(0.,1., 0.), raY);
    vpos = rotAxisAngle(vpos, vec3(0.,0., 1.), raZ);


    // vpos.z = position.z + noise(vec3(0,0,(idx*200. + position.x + iTime*100.)*.01))*3.;
    // vpos.z = noise(vec3(0,0,(idx*100. + position.x + iTime*100.)*.01))*3.;
    // vpos.z = noise(vec3(0,0,(idx*300. + position.x + iTime*100.)*.01));
    // vpos.y = noise(vec3(idx*200. + position.x));
    // vpos.z = noise(vec3(idx*300. + position.x));



    gl_Position = viewProjection * finalWorld * vec4(vpos, 1.0);
}
