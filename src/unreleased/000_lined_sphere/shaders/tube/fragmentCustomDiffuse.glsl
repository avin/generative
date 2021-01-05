vec3 hueCol = hue(fract(vIdx*.01 + iTime*.2)).rgb;
diffuseColor = hueCol;
