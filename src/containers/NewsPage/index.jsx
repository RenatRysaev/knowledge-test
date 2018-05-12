import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import { newsSelector, newsFetchSelector } from 'store/news/selectors';
import { getNews } from 'store/news/actions';

import News from 'components/News';
import Loader from 'components/Loader';


const mapStateToProps = state => ({
  isFetchNews: newsFetchSelector(state),
  news: newsSelector(state),
});

@connect(mapStateToProps, { getNews })

class NewsPage extends Component {
  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { news = [], isFetchNews } = this.props;
    return (
      <Fragment>
        <Loader isFetching={isFetchNews}>
          <News newsList={news} />
        </Loader>
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
  getNews: PropTypes.func,
};

export default NewsPage;
