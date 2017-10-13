import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import HouseholdArticleForm from './screens/projects/HouseholdArticleForm';
import ProjectForm from './screens/projects/ProjectForm';
// import ContactScreen from './screens/ContactScreen';
import ProjectScreen from './screens/projects/ProjectScreen';
import SideBar from './layouts/SideBar';

// Register all the paths here.
const AppNavigator = StackNavigator(
  {
    Drawer: {
      screen: DrawerNavigator(
        {
          // Contact: { screen: ContactScreen },
          ProjectScreen: { screen: ProjectScreen },
        },
        {
          contentComponent: props => <SideBar {...props} />,
        },
      ),
    },
    HouseholdArticleForm: { screen: HouseholdArticleForm },
    ProjectForm: { screen: ProjectForm },
    ProjectScreen: { screen: ProjectScreen },
  },
  {
    headerMode: 'none',
  },
);

// Specify the initial path here.
AppNavigator.initialPath = 'ProjectScreen';

export default AppNavigator;
