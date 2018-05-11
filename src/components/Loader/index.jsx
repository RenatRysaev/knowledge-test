import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';


const Loader = ({ children, isFetching }) => (
  isFetching ? <CircularProgress /> : children
);

Loader.propTypes = {
  children: PropTypes.element,
  isFetching: PropTypes.bool.isRequired,
};

export default Loader;
