import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import SideBar from './shared/SideBar';

const AppNavigator = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    Contact: { screen: ContactScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default AppNavigator;
