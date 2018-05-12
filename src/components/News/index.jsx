import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const News = ({ newsList }) => (
  <Fragment>
    {newsList.map(item => (
      <Card key={item.id}>
        <CardTitle title={item.title} />
        <CardText>{item.text}</CardText>
      </Card>
    ))}
  </Fragment>
);

News.propTypes = {
  newsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default News;
