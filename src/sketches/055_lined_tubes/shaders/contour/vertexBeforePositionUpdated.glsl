positionUpdated = positionUpdated + normalUpdated * radius * (2.0 + positionUpdated.z * .025);

float t = iTime * speed;
float k = positionUpdated.z * factor;
positionUpdated.x += sin(k - t) * swingSize;
positionUpdated.y += cos(k - t) * swingSize;
