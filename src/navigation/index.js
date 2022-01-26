import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {connect} from 'react-redux';

import AuthNavigator from './authStack';
import InternalNavigator from './internalStack';

const AppNavigator = ({userData}) => {
  let isLoggedIn = false;

  if (userData && userData.access_token) {
    isLoggedIn = true;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <InternalNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = ({user}) => {
  let userData = user.userData ? user.userData : {};

  return {userData};
};

export default connect(mapStateToProps, null)(AppNavigator);
