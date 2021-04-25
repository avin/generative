vec2 uv = vDiffuseUV+uvOffset;
float cDot = sin(distance(normalW*0.5, normalize(camPos)));
// float cDot = sqrt(dot(normalW, normalize(camPos)));

baseColor.rgb = hsv2rgb_smooth(vec3(cDot, .8, 1.));
