// ----here1

vPos = positionUpdated;

int l = 11 - int(floor(length(vPos)));

mat4 rotMatrix = rotMatrixI;

//if (l == 0) rotMatrix = rotMatrix0;
//if (l == 1) rotMatrix = rotMatrix1;
//if (l == 2) rotMatrix = rotMatrix2;
//if (l == 3) rotMatrix = rotMatrix3;
//if (l == 4) rotMatrix = rotMatrix4;
//if (l == 5) rotMatrix = rotMatrix5;
//if (l == 6) rotMatrix = rotMatrix6;
//if (l == 7) rotMatrix = rotMatrix7;
//if (l == 8) rotMatrix = rotMatrix8;
//if (l == 9) rotMatrix = rotMatrix9;

if (l == 0) rotMatrix = rotMatrix9;
if (l == 1) rotMatrix = rotMatrix8;
if (l == 2) rotMatrix = rotMatrix7;
if (l == 3) rotMatrix = rotMatrix6;
if (l == 4) rotMatrix = rotMatrix5;
if (l == 5) rotMatrix = rotMatrix4;
if (l == 6) rotMatrix = rotMatrix3;
if (l == 7) rotMatrix = rotMatrix2;
if (l == 8) rotMatrix = rotMatrix1;
if (l == 9) rotMatrix = rotMatrix0;

mat4 finalWorld = world * rotMatrix;
vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
mat3 normalWorld = mat3(finalWorld);
vNormalW = normalize(normalWorld * normalUpdated);
#define GLSLIFY 1

/*
