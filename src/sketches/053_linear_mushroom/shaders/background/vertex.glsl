attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 worldViewProjection;
uniform float time;

varying vec3 vPosition;
varying vec2 vUV;

void main() {
    vec4 p = vec4( position, 1. );
    vPosition = p.xyz;
    vUV = uv;
	gl_Position = worldViewProjection * p;
}
