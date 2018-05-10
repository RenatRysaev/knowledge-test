import React from 'react';
// import connect from 'react-redux/es/connect/connect';
import Route from 'react-router-dom/es/Route';
import Redirect from 'react-router-dom/es/Redirect';
import PropTypes from 'prop-types';


const PrivateRoute = ({ component: Component, isAuth = true, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element,
  isAuth: PropTypes.bool,
};

export default PrivateRoute;
