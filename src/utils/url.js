import forOwn from 'lodash/forOwn';

/**
 * Получение значения query параметра
 * @param name
 * @param url
 * @returns {*}
 */
export function getUrlQueryParameterByName(name, url = window.location.href) {
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * Перевести объект в строку query-параметров для get-запросов
 * @param obj
 * @param keepEmpty - сохранять элементы со значеием null и undefined
 * @returns {string}
 */
export function objectToQueryString(obj, keepEmpty = false) {
  const results = [];
  forOwn(obj, (value, key) => {
    if (!keepEmpty && (value === null || value === undefined)) {
      return;
    }
    if (Array.isArray(value)) {
      forOwn(value, value => {
        results.push(`${key}[]=${encodeURIComponent(value)}`);
      });
    } else {
      results.push(`${key}=${encodeURIComponent(value)}`);
    }
  });
  return results.join('&');
}
