
vIdx = idx;
vUseColor = useColor;

float t = iTime * .5;

float moveFactor = noise(vec3(positionUpdated.z * 1.25 * sizeFactor, idx * .15 - t, 1.)) * .25;

moveFactor *= 1. - step(.5, positionUpdated.x);

positionUpdated.x += moveFactor;
