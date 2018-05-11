import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from 'store/auth/reducers';
import userInfoReducer from 'store/userInfo/reducers';


const rootReducer = combineReducers({
  authReducer,
  userInfoReducer,
  router: routerReducer,
});

export default rootReducer;
