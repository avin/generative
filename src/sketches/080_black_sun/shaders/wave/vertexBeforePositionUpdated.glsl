float updateTime = iTime * .1;

vec3 s = vec3(cellPos.x, 0., cellPos.y);

vec3 p = positionUpdated + s;
vec3 pp = distortFunct(p);
positionUpdated = pp-s;

vec3 distortedNormal = distortNormal(p, pp, normalUpdated);
// normalUpdated = normalize(normalUpdated + distortedNormal);
normalUpdated = distortedNormal;
