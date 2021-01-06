float t = iTime * speed;
float k = positionUpdated.z * factor;
positionUpdated.x += sin(k - t) * swingSize;
positionUpdated.y += cos(k - iTime * speed) * swingSize;
