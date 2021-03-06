positionUpdated.z -= iTime * 7.;

positionUpdated.z = fract((positionUpdated.z + rowSize / 2.) / rowSize) * rowSize - rowSize / 2.;

vec3 oPos = positionUpdated;

float zt = iTime * 0.5;
float yt = iTime * .125;

float f = 0.;

for (float i = 1.; i < 10.; i++) {
  f += noise(positionUpdated * (i*.015) + vec3(300., yt, zt)) * (.8/i);
}

float l = length(vec2(positionUpdated.x, positionUpdated.z));

positionUpdated.y += f * (cos(oPos.z * .01 + 3.1412526 / 2.) * 20.1);

vPos = positionUpdated;
