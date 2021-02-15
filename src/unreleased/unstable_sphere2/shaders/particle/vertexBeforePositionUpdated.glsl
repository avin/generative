// ---

float timeSpeed = .1;
float pointTime = iTime*timeSpeed + rFactor1;

vIdx = idx;
vRFactor1 = rFactor1;
vRFactor2 = rFactor2;
vPointTime = pointTime;

float thicknessFactor = hash11(vRFactor1 + 33.3);

float sizeFactor = hash11(vRFactor1 * 14.7) * .5 + .5;

positionUpdated *= sizeFactor;


vec3 spherePos = onSpherePosition(5. + vRFactor2*(.3 * thicknessFactor), idx);
positionUpdated += spherePos;

float moving = clamp(fract(vPointTime)-.5, 0., 1.);


//float xN = abs(noise(spherePos*.1 + vec3(0.,0.,iTime))*.5 + .5);
//float yN = noise(spherePos*.1 + vec3(0.,0.,iTime) + vec3(100.))*.5 + .5;
//float zN = noise(spherePos*.1 + vec3(0.,0.,iTime) + vec3(200.))*.5 + .5;

float mv2 = moving*moving*2.;
positionUpdated.x *= 1. + mv2 * rFactor2;
positionUpdated.y *= 1. + mv2 * rFactor2;
positionUpdated.z *= 1. + mv2 * rFactor2;
