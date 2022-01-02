// ---------

if (vUseColor > .5) {
  vec3 col = hue(vIdx / count).rgb;
  baseColor.rgb = col;
}
