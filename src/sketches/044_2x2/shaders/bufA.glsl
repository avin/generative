// Noise pixel size
#define SIZE 5.0
// Lower - more flowing
#define FLUENCY 2.85

float rand(vec2 co) {
  return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 id = ceil(fragCoord/SIZE);
  vec2 rid = vec2(rand(id), rand(id+iResolution.y));

  float ridFactor = rid.x + rid.y;
  float f = ridFactor + iTime * FLUENCY *  (ridFactor);
  float fid = floor(f);
  f = abs(fract(f) - mod(fid, 2.));
  //fragColor = vec4(0.1/f);
  fragColor = clamp(vec4(0.1/f), 0.0, 1.0);
}
