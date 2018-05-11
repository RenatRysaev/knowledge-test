import React, { Fragment, Component } from 'react';
import connect from 'react-redux/es/connect/connect';
// import withRouter from 'react-router-dom/es/withRouter';
import PropTypes from 'prop-types';

import { requestLogin } from 'store/auth/actions';
import { authSelector } from 'store/auth/selectors';

import Form from 'components/Form';


const mapStateToProps = state => ({
  isAuth: authSelector(state),
});

@connect(mapStateToProps, { requestLogin })

class LoginPage extends Component {
  handleSubmit = (email, password) => {
    const { requestLogin } = this.props;
    requestLogin(email, password);
  }

  render() {
    return (
      <Fragment>
        <Form onSubmitForm={this.handleSubmit} />
      </Fragment>
    );
  }
}

LoginPage.propTypes = {
  // isAuth: PropTypes.bool,
  requestLogin: PropTypes.func,
};

export default LoginPage;
