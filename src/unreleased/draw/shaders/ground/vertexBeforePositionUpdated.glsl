//float updateTime = iTime * .1;
//
//float rv = getRv(positionUpdated);
//
//vRv = rv;

positionUpdated = distortFunct(positionUpdated);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
normalUpdated = normalize(normalUpdated + distortedNormal);
// normalUpdated = distortedNormal;

