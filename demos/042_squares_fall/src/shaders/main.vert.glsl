#version 300 es

#ifdef GL_ES
precision highp float;
precision highp int;
precision mediump sampler3D;
#endif

layout(location = 0) in vec3 position;
void main()
{
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
