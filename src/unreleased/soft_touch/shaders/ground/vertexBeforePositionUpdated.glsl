positionUpdated = distortFunct(positionUpdated);
vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
normalUpdated = normalize(normalUpdated + distortedNormal);

