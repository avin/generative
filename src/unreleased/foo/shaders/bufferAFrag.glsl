uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform sampler2D iChannel2;
uniform sampler2D iChannel3;
uniform int iFrame;

varying vec3 vPosition;
varying vec2 vUV;

// --------- START-SHADER-TOY-CODE-HERE ------------

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    int x = int(fragCoord.x);
    float fx = fragCoord.x;
    int y = int(fragCoord.y);

    if(y > 2 || x > COUNT){
    	discard;
    }

    vec2 rt = vec2(iResolution.x / iResolution.y, 1.);

    if(iFrame == 1){
        float ms = sqrt(float(COUNT));
        float yp = floor(float(x) / ms) - ms*.45;
        float xp = mod(float(x), ms) - ms*.45;
        vec2 pos = (vec2(xp,yp)) * (1./ms)*.9;

        pos *= rt;

        vec2 dir = normalize(vec2(hash12(fragCoord*200.)*2.-1., hash12(fragCoord * 100.)*2.-1.));

        if(y==0){
            fragColor = vec4(pos, dir);
        }
        if(y==1){
            fragColor = vec4(0., hash11(float(x)), 0., 0.);
        }

    } else {
        vec4 iPoint = FD(x,0);
        vec2 pos = iPoint.xy;
        vec2 dir = iPoint.zw;


        bool col = false;


        if(iPoint.x <= (-.5*rt.x + RADIUS)){
            dir.x *= -1.;
            col = true;
        }
        if(iPoint.x >= (.5*rt.x - RADIUS)){
            dir.x *= -1.;
            col = true;
        }
        if(iPoint.y <= (-.5*rt.y + RADIUS)){
            dir.y *= -1.;
            col = true;
        }
        if(iPoint.y >= (.5*rt.y - RADIUS)){
            dir.y *= -1.;
            col = true;
        }

        for(int i=0; i<COUNT; i+=1){
            if(i!=x){
                vec4 nPoint = FD(i,0);
                vec2 nPointDir = nPoint.zw;
                if(distance(nPoint.xy, pos) < (RADIUS*2.)){
                    vec2 inV = normalize(nPoint.xy - pos);
                    if(dot(dir, inV) > 0.){
                        dir = reflect(dir, inV);
                    }

                    col = true;
                }
            }
        }

        dir = normalize(dir);

        pos += dir * SPEED
            + vec2(
                snoise(vec3(fx, fx*100., iTime)),
                snoise(vec3(fx*33., fx*78., iTime))
            )*.005;
            // + vec2(sin(iTime*20. + hash11(float(x*25))), cos(iTime*10.  + hash11(float(x*100)))) * SPEED * .5;

        pos.x = min(max(pos.x, -.5*rt.x + RADIUS), .5*rt.x - RADIUS);
        pos.y = min(max(pos.y, -.5*rt.y + RADIUS), .5*rt.y - RADIUS);


        if(y==0){
            fragColor = vec4(pos, dir);
        } else if(y==1){
            float oColFactor = FD(x,1.).y;
            fragColor =  vec4(oColFactor + iTime*.25, oColFactor, 0, 0);
        }

    }
}

// --------- END-SHADER-TOY-CODE-HERE ------------

void main() { mainImage(gl_FragColor, vUV * iResolution.xy); }
