import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import styles from './styles.css';


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
      <Paper className={styles.wrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <TextField
            className={styles.field}
            onChange={this.handleChange}
            hintText="Email"
            name="email"
            type="email"
          />
          <TextField
            className={styles.field}
            onChange={this.handleChange}
            hintText="Password"
            name="password"
            type="password"
          />
          <RaisedButton className={styles.submitBtn} type="submit" label="Login" primary={true} />
        </form>
      </Paper>
    );
  }
}

Form.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default Form;
