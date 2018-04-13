import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
// import Provider from 'react-redux/es/components/Provider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
