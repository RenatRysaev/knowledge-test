import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './rootReducer';

export const history = createHistory();

const routMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(
    routMiddleware,
    thunkMiddleware,
  ),
);

export default store;
