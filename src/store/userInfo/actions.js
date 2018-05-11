import { createAction } from 'redux-act';
import api from 'api';
import { userIdSelector } from 'store/auth/selectors';


export const setUserId = createAction('SET_USER_ID');

export const requestUserInfo = createAction('REQUEST_USER_INFO');
export const succesUserInfo = createAction('SUCCESS_USER_INFO');
export const failureUserInfo = createAction('FAILURE_USER_INFO');


export const getUserInfo = () => async (dispatch, getState) => {
  try {
    const userId = userIdSelector(getState());

    dispatch(requestUserInfo());

    const userInfo = await api.getUserInfo(userId);

    dispatch(succesUserInfo(userInfo.data.data));
  } catch (err) {
    failureUserInfo(err.message);
  }
};
