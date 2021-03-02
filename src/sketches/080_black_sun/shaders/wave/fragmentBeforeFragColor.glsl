// ----


float l = step(1.0, finalDiffuse.r);
// float l2 = smoothstep(.50, .0,  finalDiffuse.r);

// float g = step(.5, normalW.r-normalW.b);
// color.rgb = vec3(l1 + l2*.1);
color.rgb = vec3(l);




// glFragColor.rgb = vec3(1.);
