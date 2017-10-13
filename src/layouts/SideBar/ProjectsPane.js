import React from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet } from 'react-native';
import {
  ActionSheet,
  Badge,
  Body,
  Button,
  Content,
  Icon,
  Item,
  Left,
  List,
  ListItem,
  Right,
  Text,
  View,
} from 'native-base';
import _ from 'lodash';
import { selectProject } from '../../actionCreators';

class ProjectsPane extends React.PureComponent {
  handlePressAddProjectButton = () => {
    this.props.navigation.navigate('ProjectForm');
  };

  // Returns a list item press event handler for the specified project.
  handlePressListItem = project => () => {
    this.props.dispatch(selectProject(project.uid));
    this.props.navigation.navigate('DrawerClose');
    this.props.navigation.navigate('ProjectScreen');
  };

  isSelected = project => project.uid === this.props.selectedProject;

  render() {
    const { projects } = this.props;

    // https://github.com/GeekyAnts/NativeBase/issues/698
    const dataArray = _.cloneDeep(projects);

    return (
      <Content>
        <List>
          <ListItem itemDivider style={styles.listItemDivider}>
            <View style={styles.textWithBadge}>
              <Text>Projects</Text>
              <Badge info style={{ marginLeft: 10 }}>
                <Text>{projects.length}</Text>
              </Badge>
            </View>
            <Button transparent onPress={this.handlePressAddProjectButton}>
              <Icon name="add" />
            </Button>
          </ListItem>
        </List>

        <List
          dataArray={dataArray}
          renderRow={project => (
            <ListItem icon button onPress={this.handlePressListItem(project)}>
              <Left>
                <Icon name={this.isSelected(project) ? 'radio-button-on' : 'radio-button-off'} />
              </Left>
              <Body>
                <Text>{project.name}</Text>
              </Body>
              <Right />
            </ListItem>
          )}
        />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  listItemDivider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWithBadge: {
    flex: 1,
    flexDirection: 'row',
  },
});

const mapStateToProps = state => ({
  projects: _.values(state.projects),
  selectedProject: state.selectedProject,
});

export default connect(mapStateToProps)(ProjectsPane);
