varying vec3 pPos;
varying float rSize;

varying vec2 vUv;

uniform vec2 iResolution;
uniform float iTime;
uniform float stackSize;

#define BLACK_COL vec3(16,22,26)/255.
#define WHITE_COL vec3(235,241,245)/255.

#define SF 2./min(iResolution.x, iResolution.y)
#define SS(l, s) smoothstep(SF, -SF, l - s)

void mainImage( out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (vec3(gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1)).xy - .5;

    float l = length(uv);

    float sf = 2./rSize;

    float circleLimit = smoothstep(.5, .5 - sf, l);

    float ll = .1;
    float g = smoothstep(sf, -sf, abs(l - (.5 - sf * 1.75)));

    float depthFactor = pPos.y / stackSize;

    vec3 col = mix(BLACK_COL, WHITE_COL, g * depthFactor);

    fragColor = vec4(col, circleLimit);
}

void main()
{
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
