vec3 hueCol = hue(fract(vFactor*.01 + iTime*.2)).rgb;
diffuseColor = hueCol;
