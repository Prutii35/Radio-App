/* eslint-disable comma-dangle */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import ContactScreen from '../screens/Contact/ContactScreen';
import NewsScreen from '../screens/News/NewsScreen';
import NewsDetailScreen from '../screens/NewsDetail/NewsDetailScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
    Contact: ContactScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {},
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        flex: 1,
        fontFamily: 'FallingSkyCond'
      },
      headerRight: <View />
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);
