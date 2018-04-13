import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import Provider from 'react-redux/es/components/Provider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createStore from 'redux/es/createStore';

import rootReducer from './rootReducer';

import App from './App';

import './index.css';

const store = createStore(rootReducer);

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
