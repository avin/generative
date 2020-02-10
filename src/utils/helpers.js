import set from 'lodash/set';
import isUndefined from 'lodash/isUndefined';

/**
 * Сконвертировать массив в объект по ключевому полю
 * @param arr
 * @param keyField
 * @returns {*}
 */
export function arrayToKeyObject(arr, keyField = 'id') {
  return arr.reduce((result, item) => {
    result[item[keyField]] = item;
    return result;
  }, {});
}

/**
 * Вернуть промис ожидания
 * @param ms
 * @returns {Promise<unknown>}
 */
export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Вернуть бесконечный промис (ждать бесконечность)
 * @returns {Promise<unknown>}
 */
export function waitInfinity() {
  return new Promise(() => {});
}

/**
 * Заинклюдить на страницу внешний скрипт
 * @param src
 * @returns {Promise<unknown>}
 */
export function includeExternalScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

/**
 * Подготовить словари для конкретного языка из общего словаря
 * @param translations
 * @param langKey
 */
export function prepareTranslationObj(translations, langKey) {
  const result = {};
  if (isUndefined(translations[langKey])) {
    Object.keys(translations).forEach(key => {
      const item = translations[key];
      if (isUndefined(item[langKey])) {
        set(result, key, prepareTranslationObj(item, langKey));
      } else {
        set(result, key, item[langKey]);
      }
    });
  }

  return result;
}

/**
 * Запостить данные через сабмит формы
 * @param path
 * @param params
 * @param method
 */
export function postForm(path, params, method = 'post') {
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  Object.keys(params).forEach(paramKey => {
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = paramKey;
    hiddenField.value = params[paramKey];

    form.appendChild(hiddenField);
  });

  document.body.appendChild(form);
  form.submit();
}


/**
 * Load image by url to Image object
 * @param url
 * @returns {Promise<unknown>}
 */
export function loadImageByUrl(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(image);
    };
  });
}
