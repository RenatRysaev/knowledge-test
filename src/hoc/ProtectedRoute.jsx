import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { authSelector } from '../store/auth/selectors';

const mapStateToProps = state => ({
  isAuth: authSelector(state),
});

export default function ProtectedRoute(WrappedComponent) {
  class Wrapper extends Component {
    static propTypes = {
      isAuth: PropTypes.bool,
    }

    componentDidMount() {
      const { isAuth, history } = this.props;

      if (!isAuth) {
        history.push('/login');
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return withRouter(
    connect(mapStateToProps, null)(Wrapper)
  );
}
