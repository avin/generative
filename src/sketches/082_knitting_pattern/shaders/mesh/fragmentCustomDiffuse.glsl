vec2 uv = vDiffuseUV+uvOffset;
baseColor.rgb = hsv2rgb_smooth(vec3(uv.y + iFrame*.001, .75, 1.));
