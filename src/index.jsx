import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import Provider from 'react-redux/lib/components/Provider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store, { history } from './config/store';

import './index.css';

import App from './App';


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
