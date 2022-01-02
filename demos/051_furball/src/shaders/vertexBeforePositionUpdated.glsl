// ++++++++++++++++++++++++++

float t = 100. + iTime * .75;

vec3 oPos = position;

vR = positionUpdated.y;
vIdx = idx;

// --------------------------

vec4 world1c = world1;

float lp1 = positionUpdated.y * .25 + 100.;
float lp2 = positionUpdated.y * .25 + 1.;

positionUpdated.y *= 3.;

world1c.x += noise(world2.rgb + vec3(-t, 0, 0) + vec3(lp1, 0., 0.)) * (lp2)*.5;
world1c.y += noise(world2.rgb + vec3(0, -t, 0) + vec3(0., lp1, 0.)) * (lp2)*.5;
world1c.z += noise(world2.rgb + vec3(0, 0, -t) + vec3(0., 0., lp1)) * (lp2)*.5;

mat4 finalWorld = mat4(world0, world1c, world2, world3);
finalWorld = world * finalWorld;
vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
mat3 normalWorld = mat3(finalWorld);
vNormalW = normalUpdated / vec3(dot(normalWorld[0], normalWorld[0]), dot(normalWorld[1], normalWorld[1]),
                                dot(normalWorld[2], normalWorld[2]));
vNormalW = normalize(normalWorld * vNormalW);

// Comment below
/*
