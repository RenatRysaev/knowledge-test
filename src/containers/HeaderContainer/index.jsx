import React, { Component, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import menuList from './menuList';

import { authSelector } from 'store/auth/selectors';


const mapStateToProps = state => ({
  isAuth: authSelector(state),
});

@connect(mapStateToProps, null)

class HeaderContainer extends Component {
  componentDidMount() {}

  render() {
    const { isAuth } = this.props;
    return (
      <Fragment>
        <Header isAuth={isAuth} menuList={menuList} />
      </Fragment>
    );
  }
}

HeaderContainer.propTypes = {
  isAuth: PropTypes.bool,
};

export default HeaderContainer;
