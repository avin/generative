#version 300 es
#ifdef GL_ES
    precision highp float;
    precision highp int;
    precision mediump sampler3D;
#endif
#define HW_PERFORMANCE 1
uniform vec3      iResolution;
uniform float     iTime;
uniform float     iChannelTime[4];
uniform vec4      iMouse;
uniform vec4      iDate;
uniform float     iSampleRate;
uniform vec3      iChannelResolution[4];
uniform int       iFrame;
uniform float     iTimeDelta;
uniform float     iFrameRate;
struct Channel {
    vec3  resolution;
    float time;
};
uniform Channel iChannel[4];
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
void mainImage( out vec4 c, in vec2 f );

// --------- START-SHADER-TOY-CODE-HERE ------------

// Original one hosted on https://www.shadertoy.com/view/wdGSzt

#define PI		3.14159265359

#define hue(h) clamp( abs( fract(h + vec4(3,2,1,0)/3.) * 6. - 3.) -1. , 0., 1.)

void rotate(in float angle, inout vec2 uv)
{
    float ca = cos(angle);
    float sa = sin(angle);
    uv *= mat2(ca, -sa, sa, ca);
}

float map(vec3 p)
{
    return length(mod(p, 2.0) - 1.0) - 1.375;
}

vec3 getNormal(vec3 p)
{
    float t = map(p);
    vec2 d = vec2(.5, 0.0);
    return normalize(vec3(t - map(p + d.xyy), t - map(p + d.yxy), t - map(p + d.yyx)));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = (fragCoord - iResolution.xy * 0.5) / iResolution.y;
    vec2 q = fragCoord.xy / iResolution.xy;

    rotate(iTime*.5, uv);

    float tZ = (sin(iTime) * 0.25 + 0.5) * 0.75 + .25;

    vec3 camDir = normalize(vec3(uv*5. , 1.1));

    // Compute the orientation of the camera
	float yawAngle = PI * (1.2 + 0.2 * cos (iTime * 0.5));
	float pitchAngle = PI * (0.1 * cos (iTime * 0.3) - 0.05);

	yawAngle += 4.0 * PI * iMouse.x / iResolution.x;
	pitchAngle += PI * 0.3 * (1.0 - iMouse.y / iResolution.y);

    float cosYaw = cos (yawAngle);
	float sinYaw = sin (yawAngle);
	float cosPitch = cos (pitchAngle);
	float sinPitch = sin (pitchAngle);

    mat3 cameraOrientation;
	cameraOrientation [0] = vec3 (cosYaw, 0.0, -sinYaw);
	cameraOrientation [1] = vec3 (sinYaw * sinPitch, cosPitch, cosYaw * sinPitch);
	cameraOrientation [2] = vec3 (sinYaw * cosPitch, -sinPitch, cosYaw * cosPitch);

	camDir = cameraOrientation * camDir;

    vec3 camPos = vec3(1.0, 1. , - iTime * 3.);

    float t = 0.0;
    for(int i = 0 ; i < 100; i += 1) {
        t += map(camDir * t + camPos);
    }
    vec3 surf = camDir * t + camPos;
    vec3 light = normalize(vec3(0.0, 0.0, 1.0)) ;
    vec3 normal = getNormal(surf);

    float cg = (camDir * t).x + (camDir * t).y + (camDir * t).z;

    vec3 col = hue(cg*.05 - iTime * .2 ).rgb * clamp(dot(light, normal), .25, 1.);

    // Border dark
    col *= 0.2 + 0.8 * pow(32.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.3);

    fragColor = vec4(col, 1.0);
}


// --------- END-SHADER-TOY-CODE-HERE ------------

out vec4 outColor;
void main( void ) {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    mainImage( color, gl_FragCoord.xy );
    color.w = 1.0;
    outColor = color;
}

// void main()
// {
//   mainImage(gl_FragColor, vUv * iResolution.xy);
// }
