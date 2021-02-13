// ----here1

vPos = positionUpdated;

int l = int(floor(length(vPos)*segments/tubeLength));

mat4 rotMatrix;

vec4 v1 = rotMatrixArr[l * 4 + 0];
vec4 v2 = rotMatrixArr[l * 4 + 1];
vec4 v3 = rotMatrixArr[l * 4 + 2];
vec4 v4 = rotMatrixArr[l * 4 + 3];

rotMatrix[0] = v1;
rotMatrix[1] = v2;
rotMatrix[2] = v3;
rotMatrix[3] = v4;

mat4 finalWorld = world * rotMatrix;
vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
mat3 normalWorld = mat3(finalWorld);
vNormalW = normalize(normalWorld * normalUpdated);
#define GLSLIFY 1

/*
