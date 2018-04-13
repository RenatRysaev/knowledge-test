import combineReducers from 'redux/es/combineReducers';

import authReducer from './store/auth/reducers';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
