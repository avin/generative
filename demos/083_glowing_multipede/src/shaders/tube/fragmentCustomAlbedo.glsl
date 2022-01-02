float l = (length(vPos) - .25) / tubeLength;

surfaceAlbedo = hsv2rgb_smooth(vec3(l * .25 + .5, .75, 1.)).rgb;

surfaceAlbedo /= sqrt(l)*2.1;

if(length(vPos) > 9.2){
  float g = length(vPos) - 9.2 + .1;
  surfaceAlbedo += g*.5;
}
