import React, { Fragment, Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import { requestLogin } from 'store/auth/actions';
import { authFetchingSelector, authErrorSelector } from 'store/auth/selectors';

import Form from 'components/Form';
import ShowError from 'components/ShowError';


const mapStateToProps = state => ({
  isFetchAuth: authFetchingSelector(state),
  authError: authErrorSelector(state),
});

@connect(mapStateToProps, { requestLogin })

class LoginPage extends Component {
  handleSubmit = (email, password) => {
    const { requestLogin } = this.props;
    requestLogin(email, password);
  }

  render() {
    const { isFetchAuth, authError } = this.props;
    return (
      <Fragment>
        <Form isFetchAuth={isFetchAuth} onSubmitForm={this.handleSubmit} />
        <ShowError error={authError} />
      </Fragment>
    );
  }
}

LoginPage.propTypes = {
  isFetchAuth: PropTypes.bool,
  authError: PropTypes.string,
  requestLogin: PropTypes.func,
};

export default LoginPage;
