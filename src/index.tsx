import './i18next';
import './index.css';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback="">
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('app')
);
