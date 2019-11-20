import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';

import FactoryScreen from '../screens/FactoryModule/FactoryScreen';
import OtherScreen from '../screens/FactoryModule/OtherScreen/OtherScreen'
import MarketScreen from '../screens/MarketModule/MarketScreen';
import WalletScreen from '../screens/WalletModule/WalletScreen';

const FactoryStack = createStackNavigator({
  Home: FactoryScreen, Other: {
    screen: OtherScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('Home')} name="ios-arrow-back" size={30} />
        )
      };
    }
  }
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
      )
    };
  }
});



const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: FactoryStack,
    navigationOptions: {
      drawerLabel: 'Dashboard-World',
      drawerIcon: () => (
        <Ionicons name="ios-card" size={30} />
      ),
    }
  },
  Personal: {
    screen: FactoryStack,
    navigationOptions: {
      drawerLabel: 'Personl-Space',
      drawerIcon: () => (
        <Ionicons name="ios-person" size={30} />
      ),
    }
  }
},{
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
});

AppDrawerNavigator.navigationOptions = {
  tabBarLabel: 'Factory Coin',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-bowtie'
          : 'ios-bowtie'
      }
    />
  ),
};

const MarketStack = createStackNavigator({
  Market: MarketScreen,
});

MarketStack.navigationOptions = {
  tabBarLabel: 'Market',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'logo-bitcoin' : 'logo-bitcoin'}
    />
  ),
};

const WalletStack = createStackNavigator({
  Wallet: WalletScreen
});

WalletStack.navigationOptions = {
  tabBarLabel: 'My Wallet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack: { screen: AppDrawerNavigator },
  MarketStack,
  WalletStack
});
