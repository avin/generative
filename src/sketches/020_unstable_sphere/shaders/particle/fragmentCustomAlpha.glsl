float alphaFactor = hash11(vRFactor1 * 27.12) * .75 + .25;

alpha = (sin((fract(vPointTime) - .25) * PI*2.)*.5 + .5) * alphaFactor;
