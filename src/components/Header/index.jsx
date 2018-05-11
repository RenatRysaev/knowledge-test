import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from 'components/NavMenu';
import styles from './style.css';

const Header = ({ menuList }) => (
  <header className={styles.header}>
    <NavMenu menuList={menuList} />
  </header>
);

Header.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default Header;
