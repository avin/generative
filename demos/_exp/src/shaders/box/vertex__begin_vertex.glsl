vec3 pos = position;

vec3 spherePos = boxPosToSpherePos(pos, radius);

float t = sin(iTime) * .5 + .5;
vec3 transformed = mix(pos, spherePos, t);

transformed += offset;

vNormal = normalMatrix * normalize(mix(objectNormal, spherePos, t));
