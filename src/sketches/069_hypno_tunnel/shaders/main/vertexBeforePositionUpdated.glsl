float updateTime = iTime * .1;

vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
normalUpdated = distortedNormal;
