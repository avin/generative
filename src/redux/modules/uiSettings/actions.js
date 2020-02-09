import { SET_UI_SETTINGS_VALUES, RESET_UI_SETTINGS, CHANGE_LANGUAGE } from './actionTypes';

/**
 * Выставит язык
 * @param language
 * @returns {{language: *, type: string}}
 */
export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
}

/**
 * Выставить настройки UI
 * @param values
 * @returns {{values: *, type: string}}
 */
export function setUiSettingsValues(values) {
  return {
    type: SET_UI_SETTINGS_VALUES,
    values,
  };
}

/**
 * Сброить все настройки UI для текущей сессии
 * @returns {{type: string}}
 */
export function resetUiSettings() {
  return {
    type: RESET_UI_SETTINGS,
  };
}
