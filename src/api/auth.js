import axios from 'axios';
import { API_URL } from './constants';

export const login = (email, password) => (
  axios({
    method: 'post',
    url: `${API_URL}/validate`,
    headers: { 'content-type': 'application/json' },
    data: { email, password },
  })
);
