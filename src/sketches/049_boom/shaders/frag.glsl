precision highp float;

varying vec2 vUV;
varying float vIdx;
varying float vR;

uniform float meshesCount;

#define COL vec3(235, 241, 245) / 255.0

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

float hash11(float p)
{
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

void main2(void) {
    vec3 col = hue(hash11(vIdx*.001)*.25+.50).rgb;
    gl_FragColor = vec4(col, 1.);
}












    #define NB_STEPS 4.
    #define PI 3.1415926535897932384626433832795

uniform mat4 shadowViewProjection;
uniform mat4 lightWorld;

uniform vec3 cameraPosition;
uniform vec3 sunDirection;
uniform vec3 sunColor;

uniform vec2 depthValues;

uniform float scatteringCoefficient;
uniform float scatteringPower;

uniform sampler2D shadowMapSampler;
uniform sampler2D positionSampler;

float computeScattering(float lightDotView)
{
    float result = 1.0 - scatteringCoefficient * scatteringCoefficient;
    result /= (4.0 * PI * pow(1.0 + scatteringCoefficient * scatteringCoefficient - (2.0 * scatteringCoefficient) * lightDotView, 1.5));
    return result;
}

void main(void)
{
    // Compute
    vec3 worldPos = texture2D(positionSampler, vUV).rgb;
    vec3 startPosition = cameraPosition;

    vec3 rayVector = worldPos - startPosition;

    float rayLength = length(rayVector);
    vec3 rayDirection = rayVector / rayLength;

    float stepLength = rayLength / NB_STEPS;
    vec3 stepL = rayDirection * stepLength;
    vec3 currentPosition = startPosition;
    vec3 accumFog = vec3(0.0);

    for (int i = 0; i < int(NB_STEPS); i++)
    {
        vec4 worldInShadowCameraSpace = shadowViewProjection * vec4(currentPosition, 1.0);
        float depthMetric =  (worldInShadowCameraSpace.z + depthValues.x) / (depthValues.y);
        float shadowPixelDepth = clamp(depthMetric, 0.0, 1.0);

        worldInShadowCameraSpace.xyz /= worldInShadowCameraSpace.w;
        worldInShadowCameraSpace.xyz = 0.5 * worldInShadowCameraSpace.xyz + vec3(0.5);

        float shadowMapValue = texture2D(shadowMapSampler, worldInShadowCameraSpace.xy).r;

        if (shadowMapValue > shadowPixelDepth)
        accumFog += sunColor * computeScattering(dot(rayDirection, sunDirection));

        currentPosition += stepL;
    }

    accumFog /= NB_STEPS;

    vec3 col = hue(hash11(vIdx*.001)*.25+.50).rgb;

    // vec3 color = accumFog * scatteringPower;
    vec3 color = col*100. * accumFog*10.;
    gl_FragColor = vec4(color * exp(color) , 1.0);
}
