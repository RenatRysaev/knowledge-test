import axios from 'axios';
import { API_URL } from './constants';


export const getUserInfo = id => (
  axios({
    method: 'GET',
    url: `${API_URL}/user-info/${id}`,
  })
);
