import createAction from 'redux-act/lib/createAction';
import { replace } from 'react-router-redux';
import api from 'api';


export const login = createAction('LOGIN');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const logout = createAction('LOGOUT');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');


export const requestLogin = (email, password) => async (dispatch) => {
  try {
    dispatch(login());

    const { data } = await api.login(email, password);

    dispatch(loginSuccess(data.id));
    dispatch(replace('/profile'));
  } catch (err) {
    dispatch(loginFailure(err.message));
  }
};
