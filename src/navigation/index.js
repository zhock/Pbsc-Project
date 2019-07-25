import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import RecoverPassword from '../screens/RecoverPassword';
import RecoverSuccess from '../screens/RecoverSuccess';

const AppNavigator = createStackNavigator({
    Recover: {
      screen: RecoverPassword,
      navigationOptions: {
        header: null,
      }
    },
    Success:{
      screen: RecoverSuccess,
      navigationOptions: {
        headerTitle: 'Recover successful',
      }
    }
  }, 
  {
    initialRouteName: 'Recover' 
  });

export default createAppContainer(AppNavigator);