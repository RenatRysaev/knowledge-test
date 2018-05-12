import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


const ShowError = ({ error }) => (
  error && <p className={styles.error}>{error}</p>
);

ShowError.propTypes = {
  error: PropTypes.string,
};

export default ShowError;
