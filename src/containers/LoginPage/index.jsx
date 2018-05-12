import React, { Fragment, Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import { requestLogin } from 'store/auth/actions';
import { authFetchingSelector } from 'store/auth/selectors';

import Form from 'components/Form';


const mapStateToProps = state => ({
  isFetchAuth: authFetchingSelector(state),
});

@connect(mapStateToProps, { requestLogin })

class LoginPage extends Component {
  handleSubmit = (email, password) => {
    const { requestLogin } = this.props;
    requestLogin(email, password);
  }

  render() {
    const { isFetchAuth } = this.props;
    return (
      <Fragment>
        <Form isFetchAuth={isFetchAuth} onSubmitForm={this.handleSubmit} />
      </Fragment>
    );
  }
}

LoginPage.propTypes = {
  isFetchAuth: PropTypes.bool,
  requestLogin: PropTypes.func,
};

export default LoginPage;
