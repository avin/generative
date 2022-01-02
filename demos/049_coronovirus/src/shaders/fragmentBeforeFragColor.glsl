vec3 col = hue(hash11(vIdx*.01) * sin(vR*20.*hash11(vIdx*.0132))).rgb;
color = vec4(col, 1.);
