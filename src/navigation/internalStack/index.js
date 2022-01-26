import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardScreen from '../../containers/dashboard';

const InternalStack = createNativeStackNavigator();
const InternalNavigator = () => {
  return (
    <InternalStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InternalStack.Screen name="Dashboard" component={DashboardScreen} />
    </InternalStack.Navigator>
  );
};

export default InternalNavigator;
