import { createReducer } from 'redux-act';
import {
  requestNews,
  successNews,
  failureNews,
} from './actions';


const initialState = {
  isFetch: false,
  news: [],
  error: '',
};

const newsReducer = createReducer({
  [requestNews]: state => ({ ...state, isFetch: true }),

  [successNews]: (state, payload) => ({
    ...state,
    isFetch: false,
    news: payload,
  }),

  [failureNews]: (state, payload) => ({
    ...state,
    isFetch: false,
    error: payload,
  }),
}, initialState);

export default newsReducer;
