import React, { Component, Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import Menu from '../../components/Menu';

import menuList from './menuList';

const Header1 = () => (
  <Fragment>
    <AppBar iconElementRight={<IconButton><MenuIcon /></IconButton>} />
    <Menu menuList={menuList} />
  </Fragment>
);

// export default Header;

export default class Header extends Component {


  handleClick = () => console.log('test');

  render() {

  }
}
