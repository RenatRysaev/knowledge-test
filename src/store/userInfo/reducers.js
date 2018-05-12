import { createReducer } from 'redux-act';
import {
  requestUserInfo,
  succesUserInfo,
  failureUserInfo,
} from './actions';


const initialState = {
  isFetch: false,
  userInfo: {},
  error: '',
};

const userInfoReducer = createReducer({
  [requestUserInfo]: state => ({ ...state, isFetch: true }),

  [succesUserInfo]: (state, payload) => ({ ...state, userInfo: payload, isFetch: false }),

  [failureUserInfo]: (state, payload) => ({ ...state, error: payload }),
}, initialState);

export default userInfoReducer;
