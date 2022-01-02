vec3 hueCol = hue(hash11(vIdx*.005) * sin(vR*5.*hash11(vIdx*.00132)) * .25 + .1).rgb;
vec3 col = COL * (hash11(vIdx*.005)*.75 + .5);
diffuseColor = hueCol;
