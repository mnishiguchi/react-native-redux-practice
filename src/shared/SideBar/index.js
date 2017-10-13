import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as NB from 'native-base';
import * as utils from '../../utils';
import TopSpacer from '../TopSpacer';
import NavLinks from './NavLinks';

// Specify all the route names for the sidebar links here.
// See AppNavigator file for the available routes.
const ROUTE_NAMES = ['Home', 'Settings', 'Contact'];

const MODE_PROJECTS = 0;
const MODE_SETTINGS = 1;

class SideBar extends React.PureComponent {
  state = {
    mode: MODE_PROJECTS,
  };

  // Returns an event handler function for the specified mode.
  setMode = mode => () => {
    this.setState(() => ({ mode }));
  };

  render() {
    const { navigation } = this.props;
    return (
      <NB.Container>
        <TopSpacer />
        <NB.Content>
          <View style={styles.contentHeader}>
            <NB.Segment>
              <NB.Button onPress={this.setMode(MODE_PROJECTS)}>
                <NB.Text>Projects</NB.Text>
              </NB.Button>
              <NB.Button onPress={this.setMode(MODE_SETTINGS)}>
                <NB.Text>Settings</NB.Text>
              </NB.Button>
            </NB.Segment>
          </View>
          {this.state.mode === MODE_PROJECTS ? (
            <NavLinks routeNames={ROUTE_NAMES} navigation={navigation} />
          ) : (
            <NB.Text />
          )}
        </NB.Content>
      </NB.Container>
    );
  }
}

const styles = StyleSheet.create({
  contentHeader: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
});

export default SideBar;
