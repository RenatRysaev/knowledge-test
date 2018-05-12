import createReducer from 'redux-act/lib/createReducer';
import {
  login,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from './actions';


const initialState = {
  isAuth: false,
  isfetch: false,
  error: '',
  userId: null,
};

const authReducer = createReducer({
  [login]: state => ({ ...state, isfetch: true }),

  [loginSuccess]: (state, payload) => ({
    ...state,
    isfetch: false,
    isAuth: true,
    userId: payload,
  }),

  [loginFailure]: (state, payload) => ({
    ...state,
    isAuth: false,
    isfetch: false,
    error: payload,
  }),

  [logoutSuccess]: state => ({ ...state, isAuth: false }),

}, initialState);


export default authReducer;
