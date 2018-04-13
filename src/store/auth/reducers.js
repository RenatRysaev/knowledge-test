import { AUTH } from './constants';
import db from './db';

import { isThereUser } from './helpers';

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH: {
      const isAuth = isThereUser({
        db,
        login: payload.login,
        password: payload.password,
      });

      return { isAuth };
    }

    default:
      return state;
  }
};

export default authReducer;
