import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Form extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onSubmitForm } = this.props;

    onSubmitForm(email, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField onChange={this.handleChange} hintText="Email" name="email" />
        <TextField onChange={this.handleChange} hintText="Password" name="password" type="password" />
        <RaisedButton type="submit" label="Login" primary={true} />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default Form;
