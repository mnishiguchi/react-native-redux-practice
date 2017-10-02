import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppRoot from './src/index';

const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

export default App;
