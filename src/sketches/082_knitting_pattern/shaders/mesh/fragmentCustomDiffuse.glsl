vec2 uv = vDiffuseUV + uvOffset;
float cDot = dot(normalW, normalize(camPos));
float bz = smoothstep(1.0, .0, fract(uv.y * 2.));

baseColor.rgb = hsv2rgb_smooth(vec3(uv.y + bz + iFrame * .001, .75, 1.));
baseColor *= smoothstep(1.5, .0, cDot * 1.1);
