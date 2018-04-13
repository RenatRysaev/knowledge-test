import React, { Component, Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import Menu from '../../components/Menu';

import menuList from './menuList';


export default class Header extends Component {
  state = {
    isOpenMenu: false,
  }

  toggleMenu = () => {
    this.setState(({ isOpenMenu }) => ({ isOpenMenu: !isOpenMenu }));
  }

  render() {
    const { isOpenMenu } = this.state;
    return (
      <Fragment>
        <AppBar
          iconElementRight={<IconButton><MenuIcon /></IconButton>}
          iconElementLeft={<div />}
          onRightIconButtonClick={this.toggleMenu}
        />
        <Menu menuList={menuList} isOpen={isOpenMenu} />
      </Fragment>
    );
  }
}
