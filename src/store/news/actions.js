import { createAction } from 'redux-act';
import api from 'api';


export const requestNews = createAction('REQUEST_NEWS');
export const successNews = createAction('SUCCESS_NEWS');
export const failureNews = createAction('FAILURE_NEWS');


export const getNews = () => async (dispatch) => {
  try {
    dispatch(requestNews());

    const news = await api.getNews();

    dispatch(successNews(news.data.data));
  } catch (err) {
    dispatch(failureNews(err.message));
  }
};
