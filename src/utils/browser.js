import FocusEngine from './focusEngine';

/**
 * Выставить надстройки окружения в браузере для комфортной работы
 */
export function prepareBrowserEnv() {
  // Делаем фокус только по табу
  const focusEngine = new FocusEngine(document.documentElement, 'focus-disabled');
  focusEngine.start();
}

/**
 * Заинжектить скрипт на страницу
 * @param src
 */
export function injectJs(src) {
  return new Promise((resolve, reject) => {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      resolve();
    };
    script.src = src;
    head.appendChild(script);
  });
}
