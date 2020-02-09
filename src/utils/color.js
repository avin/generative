/**
 * Get color luminance (0..1)
 * @param r
 * @param g
 * @param b
 * @returns {number}
 */
export function getLuminance(r, g, b) {
  return (0.2126 * r) / 255 + (0.7152 * g) / 255 + (0.0722 * b) / 255;
}

/**
 * Get two color distance
 * Original https://en.wikipedia.org/wiki/Color_difference#Euclidean
 *
 * @param c1
 * @param c2
 * @returns {number}
 */
export function colorDistance(c1, c2) {
  const rbar = (c1[0] + c2[0]) / 2;
  const deltar = c1[0] - c2[0];
  const deltag = c1[1] - c2[1];
  const deltab = c1[2] - c2[2];
  return Math.sqrt(2 * deltar ** 2 + 4 * deltag ** 2 + 3 * deltab ** 2 + (rbar + (deltar ** 2 - deltab ** 2)) / 256);
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param h Number - The hue
 * @param s Number - The saturation
 * @param l Number - The lightness
 * @return Array - The RGB representation
 */
export function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;

  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   r       The red color value
 * @param   g       The green color value
 * @param   b       The blue color value
 * @return  Array           The HSL representation
 */
export function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = h;
  const l = h;

  if (max === min) {
    h = 0;
    s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
    }

    h /= 6;
  }

  return [h, s, l];
}
