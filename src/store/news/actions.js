import { createAction } from 'redux-act';
import api from 'api';


export const requestNews = createAction('REQUEST_NEWS');
export const successNews = createAction('SUCCESS_NEWS');
export const failureNews = createAction('FAILURE_NEWS');


export const getNews = () => async (dispatch) => {
  try {
    dispatch(requestNews());

    const news = await api.getNews();

    if (news.data.status === 'ok') {
      dispatch(successNews(news.data.data));
    } else {
      dispatch(failureNews(news.data.message));
    }
  } catch (err) {
    dispatch(failureNews('500 internal server error'));
  }
};
