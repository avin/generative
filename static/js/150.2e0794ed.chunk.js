(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[150],{271:function(e,n,o){"use strict";o.r(n),n.default=`precision highp float;
#define GLSLIFY 1

uniform float iTime;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec2 vUv;

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/tdjXDd

#define PI 3.1415926
#define TAU 6.2831852
#define BLACK_COL vec3(24,32,38)/255.

#define rand1(p) fract(sin(p* 78.233)* 43758.5453)
#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (fragCoord.xy-iResolution.xy*0.5)/iResolution.y;

    float SIZE = 4. + cos(iTime*0.2)*0.5;
    float r = length(uv) * SIZE;
    r*=floor(iResolution.y/80.);
    float id = ceil(r);
    float s = mod(id, 2.)*2. - 1.; // Direction
    float a = fract(atan(uv.y, uv.x)/TAU + s*(iTime*(rand1(id+400.)*0.5+0.5)*0.2 + id*0.2));
    float inRange = step(3.,id); // Don's draw center arcs
    float sm = (1./iResolution.y * 20.* SIZE);

    inRange *= smoothstep(.0, sm, fract(r)) * smoothstep(1.0, 1.0 - sm, fract(r));
    float arcLength =  (rand1(id)*0.25 + 0.25);

    sm = (sqrt(SIZE)*(1./iResolution.y * 5. / id));
    inRange *= smoothstep(arcLength, arcLength + sm, a) * smoothstep(1.0, 1. - sm, a);

    vec3 col = hue(rand1(id)).rgb;

    col = mix(BLACK_COL, col, inRange);

    fragColor = vec4(col,1.0);
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main()
{
  mainImage(gl_FragColor, vUv * iResolution.xy);
}
`}}]);
