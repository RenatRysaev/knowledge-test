import React from 'react';
import NavLink from 'react-router-dom/es/NavLink';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'react-proptypes';

const Menu = ({ menuList = [], isOpen = true }) => (
  <Drawer open={isOpen}>
    {
      menuList.map(item => (
        <NavLink to={item.url} key={item.id}>
          <MenuItem >
            {item.name}
          </MenuItem>
        </NavLink>
      ))
    }
  </Drawer>
);

Menu.propTypes = {
  menuList: PropTypes.array,
  isOpen: PropTypes.bool,
};

export default Menu;
