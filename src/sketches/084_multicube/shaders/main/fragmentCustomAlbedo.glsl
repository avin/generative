vec3 viewDirectionW = normalize(vEyePosition.xyz-vPositionW);
vec3 normalW = normalize(vNormalW);

float r =  dot(normalW, viewDirectionW);
surfaceAlbedo = hsv2rgb_smooth(vec3(r*.8 + .4 + iTime*.1, 1., .5));
