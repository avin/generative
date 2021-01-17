float t = iTime * speedFactor;

float s = (fract(t + rFactor1));

float ps = .1;

float ss = clamp(s, 0., ps);

float r = ss / ps;

vR = r;

positionUpdated.xz *= r;

positionUpdated.y *= (1. - r)*2.;
