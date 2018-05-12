import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
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
    const { isFetchAuth } = this.props;
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
          <RaisedButton
            className={styles.submitBtn}
            type="submit"
            label={!isFetchAuth && 'Login'}
            primary={true}
            disabled={isFetchAuth}
          >
            {isFetchAuth ? <CircularProgress /> : null}
          </RaisedButton>
        </form>
      </Paper>
    );
  }
}

Form.propTypes = {
  isFetchAuth: PropTypes.bool,
  onSubmitForm: PropTypes.func,
};

export default Form;
