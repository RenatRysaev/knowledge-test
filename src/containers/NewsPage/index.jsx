import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import {
  newsSelector,
  newsFetchSelector,
  newsErrorSelector,
} from 'store/news/selectors';

import { getNews } from 'store/news/actions';

import News from 'components/News';
import Loader from 'components/Loader';
import ShowError from 'components/ShowError';


const mapStateToProps = state => ({
  isFetchNews: newsFetchSelector(state),
  news: newsSelector(state),
  newsError: newsErrorSelector(state),
});

@connect(mapStateToProps, { getNews })

class NewsPage extends Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { news = [], isFetchNews, newsError } = this.props;
    return (
      <Fragment>
        <Loader isFetching={isFetchNews}>
          <News newsList={news} />
        </Loader>

        <ShowError error={newsError} />
      </Fragment>
    );
  }
}

NewsPage.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  })),
  isFetchNews: PropTypes.bool,
  newsError: PropTypes.string,
  getNews: PropTypes.func,
};

export default NewsPage;
