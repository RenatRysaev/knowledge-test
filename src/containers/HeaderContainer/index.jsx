import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Header from 'components/Header';
import menuList from './menuList';


class HeaderContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Header menuList={menuList} />
      </Fragment>
    );
  }
}

HeaderContainer.propTypes = {};

export default HeaderContainer;
