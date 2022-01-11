#include <common>

uniform float iTime;
uniform float radius;

vec3 boxPosToSpherePos(vec3 pos, float radius) {
  vec3 result = vec3(0.);

  float r = radius;
  float r2 = radius * radius;
  float x = pos.x;
  float x2 = pos.x * pos.x;
  float y = pos.y;
  float y2 = pos.y * pos.y;
  float z = pos.z;
  float z2 = pos.z * pos.z;

  result.x = x * sqrt(r2 - y2 / 2. - z2 / 2. + (y2 * z2) / (3. * r2));
  result.y = y * sqrt(r2 - z2 / 2. - x2 / 2. + (z2 * x2) / (3. * r2));
  result.z = z * sqrt(r2 - x2 / 2. - y2 / 2. + (x2 * y2) / (3. * r2));

  return result;
}
