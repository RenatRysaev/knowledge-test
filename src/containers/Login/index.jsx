import React, { Fragment, PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import { auth } from '../../store/auth/actions';

import Form from '../../components/Form';

const mapDispatchToProps = {
  auth,
};

class Login extends PureComponent {
  static propTypes = {
    auth: PropTypes.func,
  }

  handleSubmit = ({ login, password }) => {
    const { auth } = this.props;
    auth({ login, password });
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Form onSubmitForm={this.handleSubmit} />
      </Fragment>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
