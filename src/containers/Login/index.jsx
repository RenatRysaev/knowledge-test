import React, { Fragment, PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth } from 'store/auth/actions';
import { authSelector } from 'store/auth/selectors';

import Form from 'components/Form';

const mapStateToProps = state => ({
  isAuth: authSelector(state),
});

const mapDispatchToProps = {
  auth,
};

class Login extends PureComponent {
  static propTypes = {
    isAuth: PropTypes.bool,
    auth: PropTypes.func,
  }

  state = {
    isSubmitForm: false,
  }

  componentDidMount() {
    this.redirectToProfile(this.props.isAuth);
  }

  componentWillReceiveProps(nextProps) {
    this.redirectToProfile(nextProps.isAuth);
  }

  handleSubmit = ({ login, password }) => {
    const { auth } = this.props;
    auth({ login, password });

    this.setState({ isSubmitForm: true });
  }

  redirectToProfile = (isAuth) => {
    if (isAuth) {
      this.props.history.push('/profile');
    }
  }

  render() {
    const { isAuth } = this.props;
    const { isSubmitForm } = this.state;
    return (
      <Fragment>
        <Form onSubmitForm={this.handleSubmit} />

        {!isAuth && isSubmitForm &&
          <p>Имя пользователя или пароль введены не верно</p>
        }
      </Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);
