vPos = positionUpdated;

int l = int(floor(length(vPos)*segments/tubeLength));

mat4 rotMatrix;

// -- rotmatrix-here --

mat4 finalWorld = world * rotMatrix;
vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
mat3 normalWorld = mat3(finalWorld);
vNormalW = normalize(normalWorld * normalUpdated);
#define GLSLIFY 1

/*
