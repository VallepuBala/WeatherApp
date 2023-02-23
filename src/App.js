// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Weather from './Components/Weather';

const App = () => (
  <Provider store={store}>
    <Weather />
  </Provider>
);

export default App;
