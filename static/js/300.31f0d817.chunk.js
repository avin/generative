(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[300],{412:function(n,r,t){"use strict";t.r(r),r.default=`#define GLSLIFY 1
vPos = positionUpdated;

int l = int(floor(length(vPos)*segments/tubeLength));

mat4 rotMatrix;

// -- rotmatrix-here --

// rotMatrix[0] = rotMatrixArr[l * 4 + 0];
// rotMatrix[1] = rotMatrixArr[l * 4 + 1];
// rotMatrix[2] = rotMatrixArr[l * 4 + 2];
// rotMatrix[3] = rotMatrixArr[l * 4 + 3];

mat4 finalWorld = world * rotMatrix;
vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);
mat3 normalWorld = mat3(finalWorld);
vNormalW = normalize(normalWorld * normalUpdated);
#define GLSLIFY 1

/*
`}}]);
