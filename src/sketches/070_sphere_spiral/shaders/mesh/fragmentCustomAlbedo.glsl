vec2 uv =  vAlbedoUV+uvOffset;
surfaceAlbedo.rgb = hsv2rgb_smooth(vec3(uv.y*2. - iTime*.1, .95, 1.));
