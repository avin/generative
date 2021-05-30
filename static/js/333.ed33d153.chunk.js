(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[333],{229:function(e,n,i){"use strict";i.r(n),n.default=`#extension GL_OES_standard_derivatives : enable
#define GLSLIFY 1

varying vec2 vUv;

uniform vec2 iResolution;

#define COL1 vec3(32, 43, 51) / 255.0
#define COL2 vec3(235, 241, 245) / 255.0

float gridThickness = .1;  //.2; //.25; //.02; //.4; //

const vec3 Cfill = vec3(1., 1., .9);  // 1.,1.,1.); //1.,1.,0.); //
const vec3 Cgrid = vec3(0., 0., 0.);  // 1.,0.,1.);
const vec3 Csky = vec3(.8, .9, 1.);

// refactored out the common derivative filtering portion:
// trivial to change to any dimension.
// can ignore the axis not being striped
float filterWidth1(float u) {
  float dx = dFdx(u), dy = dFdy(u);
  return dx * dx + dy * dy + .0001;
}

float filterWidth2(vec2 uv) {
  vec2 dx = dFdx(uv), dy = dFdy(uv);
  return dot(dx, dx) + dot(dy, dy) + .0001;
}

float filterWidth3(vec3 uvw) {
  vec3 dx = dFdx(uvw), dy = dFdy(uvw);
  return dot(dx, dx) + dot(dy, dy) + .0001;
}

float gridSimple(vec2 p) {
  vec2 g = step(gridThickness, fract(gridThickness * .5 - p));
  return 1. - g.x * g.y;
}

float gridUnfiltered(vec2 p) {
  p -= .5 * gridThickness;  // center
  return step(1. - gridThickness, max(fract(p.x), fract(p.y)));
}

float gridAASimple(vec2 p, float gridThickness) {
  vec2 f = fract(p);
  float g = min(min(f.x, 1. - f.x), min(f.y, 1. - f.y)) * 2. - gridThickness, x = step(g, 0.)  // gridUnfiltered(p)
      ,
        w = fwidth(p.x) + fwidth(p.y), r = 2. * iResolution.y,
        l = r * abs(g) / (1. + 1. * r * w)  // can try different functions, divisor controls fade rate with distance
      ,
        s = sqrt(gridThickness)  // gridThickness*gridThickness //gridThickness //
      ,
        t = mix(.5, s, min(w, 1.));
  return mix(t, x, clamp(l, 0., 1.));
}
// still not happy with how it fades out too soon,
// but at least it's basically working.  Better than the others.
float gridSmooth(vec2 p, float gridThickness) {
  vec2 q = p;
  q += .5;
  q -= floor(q);
  q = (gridThickness + 1.) * .5 - abs(q - .5);
  float w = 12. * filterWidth2(p);
  float s = sqrt(gridThickness);
  return smoothstep(.5 - w * s, .5 + w, max(q.x, q.y));
}

// the half sqrt(gridThickness) bias is fairly tricky;
// honestly I shouldn't need to involve smoothstep at all here, hold on
// meh, still not working worth a dern, maybe someday
float gridSmoothLinear(vec2 p, float gridThickness) {
  vec2 q = p;
  q += .5;
  q -= floor(q);
  q = (gridThickness + 1.) * .5 - abs(q - .5);
  float w = 12. * filterWidth2(p);
  float s = gridThickness;
  return clamp((max(q.x, q.y) - .5 - w * s) / (w * (s + 1.)), 0., 1.);
}

// working better now
float gridExp(vec2 p, float gridThickness) {
  const float fadePower = 16.;
  vec2 f = fract(p);
  f = .5 - abs(.5 - f);
  float g = min(f.x, f.y);
  g = max(0., g - .5 * gridThickness);
  g = exp2(-fadePower * g);
  float s = sqrt(gridThickness);
  return mix(g, s, exp2(-.02 / filterWidth2(p)));
}

// for ilyaev
float gridPow(vec2 p, float gridThickness) {
  const float fadePower = 16.;
  vec2 f = fract(p);
  f = .5 - abs(.5 - f);
  f = max(vec2(0), 1. - f + .5 * gridThickness);
  f = pow(f, vec2(fadePower));
  float g = f.x + f.y;  // max(f.x, f.y); //
  float s = sqrt(gridThickness);
  return mix(g, s, exp2(-.01 / filterWidth2(p)));
}

// originally from https://shadertoy.com/view/WlVGDh
// this is just not the way to do grids, blurs
// the corners too much, but it sort of works:
float gridSine(vec2 p, float gridThickness) {
  p *= 3.1415927;
  float g = sin(p.x) * sin(p.y);  // grid texture
  g *= g;
  g = max(0., 1. - g);
  g = pow(g, 8. / gridThickness);
  float s = .75 * sqrt(gridThickness);           // HACK idk
  g = mix(g, s, min(1., 1. * filterWidth2(p)));  // length(fwidth(p)))); // aa
  return g;
}

// similar but with parabola - still just wrong at corners
float gridPara(vec2 p, float gridThickness) {
  vec2 q = fract(p);
  q = max(vec2(0), .5 - gridThickness * .5 - abs(.5 - q));
  q *= 1. - q;
  q = 4. * q;
  float g = 1. - q.x * q.y;
  g = pow(g, 1. / gridThickness);
  float s = sqrt(gridThickness);
  g = mix(g, s, min(1., 4. * filterWidth2(p)));  // length(fwidth(p)))); // aa
  return g;
}

// shown on right side of split screen
float ImageR(vec2 uv, float gridThickness) {
  // return gridAASimple(uv, gridThickness);
     return gridSmooth(uv, gridThickness);
  //    return gridPow(uv, gridThickness);
  //    return gridSine(uv, gridThickness);
  //    return gridExp(uv, gridThickness);
  //    return gridPara(uv, gridThickness);
  //    return gridSmoothLinear(uv, gridThickness);
  //    return gridSimple(uv, gridThickness);
  //    return gridUnfiltered(uv, gridThickness);
}

float proc(vec2 uv) {

  vec2 coord = fract(uv * 100.);

  // vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) / 2.0;
  vec2 grid = abs(fract(coord - .55) - .45) / fwidth(coord) / 2.0;
  float line = min(grid.x, grid.y);

  line = smoothstep(.50, .10, line);

  return line;
}

#define ZOOM_FACTOR 4.
#define ZOOM_SPEED  (1.10 * .5)  // Set this to 0. or 1. or -1., for instance
#define PI          3.14159

float draw_grid(vec2 uv){
  float zoom = 100.;

  float antialias = .5 * zoom / iResolution.y;
  vec2 grid_2D = smoothstep(antialias, .0, abs(sin(PI * zoom * uv)));

  return max(grid_2D.x, grid_2D.y);
}

void mainImage(out vec3 fragColor, in vec2 fragCoord) {
  float cx = ceil(iResolution.x / 2.0);
  float cy = ceil(iResolution.y / 2.0);

  vec2 uv = fragCoord.xy / iResolution.xy;

  float f1 = ImageR(uv * 100., .06);
  float f2 = ImageR(uv * 10., .025);

  float f = max(f1, f2);

  fragColor = mix(COL1, COL2, f);
}
`}}]);
