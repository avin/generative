//--------

float f = smoothstep(.25, .3, abs(fract(vAlbedoUV.y * 20. + iTime - vAlbedoUV.x * 4.) - .5));

surfaceAlbedo = mix(col1, col2, f);

//--------
