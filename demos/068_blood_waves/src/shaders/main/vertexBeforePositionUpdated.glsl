float updateTime = iTime * .1;

if (positionUpdated.y > -.01) {
  positionUpdated = distortFunct(positionUpdated);

  vec3 distortedNormal = distortNormal(position, positionUpdated, normalUpdated);
  // normalUpdated = normalize(normalUpdated + distortedNormal);
  normalUpdated = distortedNormal;
}
