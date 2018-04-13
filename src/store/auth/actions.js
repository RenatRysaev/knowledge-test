import { AUTH } from './constants';

export const auth = ({ login, password }) => ({
  type: AUTH,
  payload: { login, password },
});
