import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
  ActionSheet,
  Body,
  Button,
  Content,
  Fab,
  H1,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  ScrollableTab,
  Tab,
  Tabs,
  Text,
  Title,
} from 'native-base';
import _ from 'lodash';
import AppLayout from '../../layouts/AppLayout';
import AppHeader from '../../layouts/AppHeader';
import { projectHouseholdArticlesSelector } from '../../selectors';

const ACTIONS = [
  { text: 'Delete', icon: 'trash', iconColor: '#fa213b' },
  { text: 'Cancel', icon: 'close', iconColor: '#25de5b' },
];
const DESTRUCTIVE_INDEX = 0;
const CANCEL_INDEX = 1;

class ProjectScreen extends React.PureComponent {
  handlePressActionButton = () => {
    ActionSheet.show(
      {
        options: ACTIONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: this.props.project.name,
      },
      actionIndex => {
        alert(ACTIONS[actionIndex].text);
      },
    );
  };

  handlePressFab = () => {
    this.props.navigation.navigate('HouseholdArticleForm');
  };

  handlePressListItem = article => () => {
    this.props.navigation.navigate('HouseholdArticleForm', { ...article });
  };

  render() {
    const { navigation, project, householdArticles } = this.props;

    // https://github.com/GeekyAnts/NativeBase/issues/698
    const dataArray = _.cloneDeep(householdArticles);

    return project ? (
      <AppLayout>
        {/* active content */}
        <AppHeader title={project.name} navigation={navigation} drawerToggle hasTabs>
          <Button transparent onPress={this.handlePressActionButton}>
            <Icon name="more" />
          </Button>
        </AppHeader>

        <Content padder>
          <View style={{ marginBottom: 10 }}>
            <H1>{project.name}</H1>
            <Text>{project.description}</Text>
          </View>

          <View style={{ marginBottom: 10 }}>
            <List
              dataArray={dataArray}
              renderRow={article => (
                <ListItem button onPress={this.handlePressListItem(article)}>
                  <Text>{article.name}</Text>
                  <Text>{article.volume}</Text>
                  <Text>{article.quantity}</Text>
                  <Text>{article.tag}</Text>
                  <Text>{article.description}</Text>
                  <Right />
                </ListItem>
              )}
            />
          </View>

          {/* <View>
            <Text>{JSON.stringify(dataArray)}</Text>
          </View> */}
        </Content>

        <View style={{ flex: 1 }}>
          <Fab position="bottomRight" onPress={this.handlePressFab} style={styles.fab}>
            <Icon name="add" />
          </Fab>
        </View>
      </AppLayout>
    ) : (
      <AppLayout>
        {/* inactive content */}
        <AppHeader title="" navigation={navigation} drawerToggle />

        <Content padder>
          <Text>No project is selected</Text>
        </Content>
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({
  fab: { backgroundColor: '#5067FF' },
});

const mapStateToProps = state => {
  const project = state.projects[state.selectedProject];
  const householdArticles = _.values(projectHouseholdArticlesSelector(project));
  return { project, householdArticles };
};

export default connect(mapStateToProps)(ProjectScreen);
