float timeSpeed = .1;
float pointTime = iTime * timeSpeed + rFactor1;

vIdx = idx;
vRFactor1 = rFactor1;
vRFactor2 = rFactor2;
vPointTime = pointTime;

float thicknessFactor = hash11(vRFactor1 + 33.3);

float sizeFactor = hash11(vRFactor1 * 14.7) * .5 + .5;

positionUpdated *= sizeFactor;

vec3 rand = hash31(idx);

float oU = rand.x;
float oV = rand.y;

float moving = clamp(fract(vPointTime) - .5, 0., 1.);


float radius = 5. + vRFactor2 * (.3 * thicknessFactor);

float speedFactor = hash11(vRFactor1 * 11.37)*2.;

float mv2 = moving * moving * 2. * speedFactor;
radius *= 1. + mv2 * rFactor2;

float u = oU + (noise(vec3(oU*100.+50., oV*100.+50., iTime*.2)*2.))*mv2*.05;
float v = oV;

vec3 spherePos = onSpherePosition(radius, u, v);
positionUpdated += spherePos;
