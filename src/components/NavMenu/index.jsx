import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'react-router-dom/es/NavLink';
import styles from './styles.css';


const NavMenu = ({ menuList }) => (
  <nav className={styles.nav}>
    {menuList.map(item => (
      <NavLink className={styles.link} to={item.url} key={item.url}>
        {item.name}
      </NavLink>
    ))}
  </nav>
);

NavMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default NavMenu;
