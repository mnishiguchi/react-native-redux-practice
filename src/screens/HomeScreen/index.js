import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  H1,
  H3
} from 'native-base';
import AppLayout from '../../AppLayout';
import AppHeader from '../../shared/AppHeader';

// Cards of all projects
class HomeScreen extends React.Component {
  render() {
    const { projects, navigation } = this.props;

    return (
      <AppLayout>
        <AppHeader title="HomeScreen" navigation={navigation} />
        <Content padder>
          <H1>My projects</H1>
          <Text>{projects.length} projects</Text>

          {projects.map(project => {
            return (
              <Card key={project.uid}>
                <CardItem header>
                  <Text>{project.name}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{project.description}</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>
                    {project.value} {project.tag}
                  </Text>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  projects: Object.values(state.projects)
});

export default connect(mapStateToProps)(HomeScreen);
