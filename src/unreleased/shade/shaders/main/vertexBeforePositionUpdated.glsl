// ----------

// vec3 np = position + vec3(iTime);
// float f = .5;

// positionUpdated.x *= 1. + noise(np) * f;
// positionUpdated.y *= 1. + noise(np) * f;
// positionUpdated.z *= 1. + noise(np) * f;
//
// float uc = normalize(dot(position, positionUpdated));
//
// normalUpdated = normalize(uc * normalUpdated);
//
// vNormal = normalUpdated;

float updateTime = iTime / 10.0;
positionUpdated = distortFunct(positionUpdated, 1.0);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
// normalUpdated = normalize(normalUpdated + distortedNormal);
normalUpdated = distortedNormal;

// gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
