import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  }

  state = {
    login: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    const { onSubmitForm } = this.props;

    onSubmitForm({ login, password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField onChange={this.handleChange} hintText="login" name="login" />
        <TextField onChange={this.handleChange} hintText="password" name="password" type="password" />
        <RaisedButton type="submit" label="auth" primary={true} />
      </form>
    );
  }
}
