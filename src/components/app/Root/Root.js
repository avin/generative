import React from 'react';
import { Provider } from 'react-redux';
import App from '@/components/app/App/App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
