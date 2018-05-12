import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from 'store/auth/reducers';
import userInfoReducer from 'store/userInfo/reducers';
import newsReducer from 'store/news/reducers';


const rootReducer = combineReducers({
  authReducer,
  userInfoReducer,
  newsReducer,
  router: routerReducer,
});

export default rootReducer;
