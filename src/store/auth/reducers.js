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
  errors: [],
};

const authReducer = createReducer({
  [login]: state => ({ ...state, isfetch: true }),

  [loginSuccess]: state => ({ ...state, isfetch: false, isAuth: true }),

  [loginFailure]: (state, err) => ({
    ...state,
    isAuth: false,
    isfetch: false,
    errors: [...state.errors, err],
  }),

  [logoutSuccess]: state => ({ ...state, isAuth: false }),

}, initialState);


export default authReducer;
