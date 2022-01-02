// vec3 col = vDiffuseColor.rgb * (vR*.75);

float rColFactor = hash11(vIdx * .001);

diffuseColor = vDiffuseColor.rgb * (vR * 1.5) * (.85 + rColFactor * .3);
