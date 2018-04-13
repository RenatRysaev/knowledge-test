import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
// import Provider from 'react-redux/es/components/Provider';

import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
