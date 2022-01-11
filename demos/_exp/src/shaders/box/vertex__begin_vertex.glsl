vec3 pos = position;

vec3 spherePos = boxPosToSpherePos(pos, radius);

float t = sin(iTime) * .5 + .5;
vec3 transformed = mix(pos, spherePos, t);
vNormal = normalize(mix(vNormal, spherePos, t));
