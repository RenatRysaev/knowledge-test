import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import {
  userInfoFetchSelector,
  userInfoSelector,
  userInfoErrorSelector,
} from 'store/userInfo/selectors';
import { getUserInfo } from 'store/userInfo/actions';

import UserInfo from 'components/UserInfo';
import Loader from 'components/Loader';
import ShowError from 'components/ShowError';


const mapStateToProps = state => ({
  isFetchUserInfo: userInfoFetchSelector(state),
  userInfo: userInfoSelector(state),
  userInfoError: userInfoErrorSelector(state),
});

@connect(mapStateToProps, { getUserInfo })

class ProfilePage extends Component {
  componentDidMount() {
    const { getUserInfo } = this.props;
    getUserInfo();
  }

  render() {
    const { userInfo = {}, isFetchUserInfo, userInfoError } = this.props;
    return (
      <Fragment>
        <Loader isFetching={isFetchUserInfo}>
          <UserInfo
            city={userInfo.city}
            languages={userInfo.languages}
            social={userInfo.social}
          />
        </Loader>

        <ShowError error={userInfoError} />
      </Fragment>
    );
  }
}

ProfilePage.propTypes = {
  userInfo: PropTypes.shape({
    userId: PropTypes.number,
    city: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    social: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })),
  }),
  isFetchUserInfo: PropTypes.bool,
  userInfoError: PropTypes.string,
  getUserInfo: PropTypes.func,
};

export default ProfilePage;
