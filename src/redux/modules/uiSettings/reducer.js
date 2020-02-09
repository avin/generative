import produce from 'immer';
import i18n from '@/i18n';
import { SET_UI_SETTINGS_VALUES, RESET_UI_SETTINGS, CHANGE_LANGUAGE } from './actionTypes';

const initialState = {
  language: i18n.language,
};

export default function reducer(state = initialState, action = {}) {
  return produce(state, state => {
    switch (action.type) {
      case CHANGE_LANGUAGE: {
        const { language } = action;
        state.language = language;
        break;
      }
      case SET_UI_SETTINGS_VALUES: {
        const { values } = action;
        state = {
          ...state,
          ...values,
        };
        break;
      }
      case RESET_UI_SETTINGS: {
        state = initialState;
        break;
      }
      default:
    }

    return state;
  });
}
