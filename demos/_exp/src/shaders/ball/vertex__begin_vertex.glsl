// #include <begin_vertex>

// vec3 offset

vec3 meshPos = offset;

float t = iTime*(rFactor3*.75 + .25)*.25;
meshPos.x = sin(t + rFactor1*PI2) * (5. + 10. * rFactor2);
meshPos.z = cos(t + rFactor1*PI2) * (5. + 10. * rFactor2);

vec3 transformed = vec3(position * (scale) + meshPos);

