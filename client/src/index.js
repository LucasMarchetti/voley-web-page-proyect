
//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store.js';

//Component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
