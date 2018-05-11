import React from 'react';
import connect from 'react-redux/es/connect/connect';
import Route from 'react-router-dom/es/Route';
import Redirect from 'react-router-dom/es/Redirect';
import PropTypes from 'prop-types';

import { authSelector } from 'store/auth/selectors';


const mapStateToProps = state => ({
  isAuth: authSelector(state),
});


const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default connect(mapStateToProps, null)(PrivateRoute);
