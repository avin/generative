vec2 uv = vDiffuseUV+uvOffset;
baseColor.rgb = hsv2rgb_smooth(vec3(uv.y - iTime*.1, (sin(uv.x*PI*2. - iTime*5.)*.5+.5)*.25 + .75, 1.));
