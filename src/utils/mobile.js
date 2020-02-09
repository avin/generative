import memoize from 'lodash/memoize';

/**
 * Определение, что работаем с мобильника
 * @returns {boolean}
 */
function isMobileFunc() {
  return !!(
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
}
export const isMobile = memoize(isMobileFunc);
