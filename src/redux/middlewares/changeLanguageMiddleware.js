import i18n from '@/i18n';

export default store => next => action => {
  const prevLanguage = store.getState().uiSettings.language;

  const result = next(action);

  const nextLanguage = store.getState().uiSettings.language;

  // Если поменялся язык - дергаем метод смены языка
  if (prevLanguage !== nextLanguage) {
    i18n.changeLanguage(nextLanguage);
  }

  return result;
};
