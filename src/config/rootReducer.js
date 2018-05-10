import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from 'store/auth/reducers';


const rootReducer = combineReducers({
  authReducer,
  router: routerReducer,
});

export default rootReducer;
