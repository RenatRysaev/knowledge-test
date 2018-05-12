import axios from 'axios';
import { API_URL } from './constants';

export const getNews = () => (
  axios({
    method: 'GET',
    url: `${API_URL}/news`,
  })
);
