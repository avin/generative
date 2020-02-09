import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/index.scss';
import { prepareBrowserEnv } from '@/utils/browser';
import configureStore from '@/redux/configureStore';
import Root from '@/components/app/Root/Root';
import '@/i18n';

prepareBrowserEnv();

(async () => {
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})();
