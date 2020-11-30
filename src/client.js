import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app.js';

/**
 * Hydrate the page to make sure both server
 * and client side pages are identical.
 */
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
