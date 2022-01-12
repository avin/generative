vec3 pos = position;

vec3 spherePos = boxPosToSpherePos(pos, radius);

// float t = sin(iTime) * .5 + .5;
float t = 1.;



float moveTime = iTime*1.;
float moveY = fract(moveTime)*2.;

t = clamp((offset.y + moveY) / 7.5, 0., 1.);
// t = 0.;
vec3 transformed = mix(pos, spherePos, t);

vec3 move = vec3(0., moveY, 0.);

transformed += offset + move;

vNormal = normalMatrix * normalize(mix(objectNormal, spherePos, t));
