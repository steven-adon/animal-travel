import React from 'react';
import { View, ActivityIndicator, StatusBar, StyleSheet, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Auth from '../screens/AuthModule/Auth'
import MainTabNavigator from './MainTabNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AuthStack = createStackNavigator({ SignIn: Auth });

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,
  },{
    initialRouteName: 'AuthLoading',
  })
);
