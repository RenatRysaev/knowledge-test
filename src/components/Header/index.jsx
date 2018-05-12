import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from 'components/NavMenu';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './style.css';


const Header = ({ menuList, isAuth }) => (
  <header className={styles.header}>
    <NavMenu menuList={menuList} />
    <RaisedButton className={styles.authBtn} label={isAuth ? 'Logout' : 'Login'} />
  </header>
);

Header.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  isAuth: PropTypes.bool,
};

export default Header;
