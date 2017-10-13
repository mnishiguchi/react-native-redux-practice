import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Container, Content, Segment, Text } from 'native-base';
import * as utils from '../../utils';
import TopSpacer from '../TopSpacer';
import NavLinks from './NavLinks';
import ProjectsPane from './ProjectsPane';
import SettingsPane from './SettingsPane';

// Specify all the route names for the sidebar links here.
// See AppNavigator file for the available routes.
const ROUTE_NAMES = ['Home', 'Settings', 'Contact'];

const MODE_PROJECTS = 0;
const MODE_SETTINGS = 1;

class SideBar extends React.PureComponent {
  state = {
    mode: MODE_PROJECTS,
  };

  // Returns an event handler for the specified mode.
  setMode = mode => () => {
    this.setState(prevState => ({ mode }));
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <TopSpacer />
        <Content>
          <View style={styles.contentHeader}>
            <Segment>
              <Button
                first
                active={this.state.mode === MODE_PROJECTS}
                onPress={this.setMode(MODE_PROJECTS)}
              >
                <Text>Projects</Text>
              </Button>
              <Button
                last
                active={this.state.mode === MODE_SETTINGS}
                onPress={this.setMode(MODE_SETTINGS)}
              >
                <Text>Settings</Text>
              </Button>
            </Segment>
          </View>
          {this.state.mode === MODE_PROJECTS ? (
            <ProjectsPane projects={[]} navigation={navigation} />
          ) : (
            <SettingsPane />
          )}
        </Content>
      </Container>
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
