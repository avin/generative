float l = (length(vPos) - 1.) / tubeLength;

diffuseColor = hsv2rgb_smooth(vec3(l * .5 + .5, .75, 1.)).rgb;

diffuseColor *= sqrt(l);
