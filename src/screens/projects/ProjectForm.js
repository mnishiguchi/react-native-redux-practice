import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Content, Form, H1, Input, Item, Label, Text } from 'native-base';
import AppLayout from '../../layouts/AppLayout';
import AppHeader from '../../layouts/AppHeader';

// TODO: Connect to redux store
class ProjectForm extends React.PureComponent {
  render() {
    const { navigation } = this.props;

    return (
      <AppLayout>
        <AppHeader closeButton title="Add Project" navigation={navigation}>
          <Button transparent>
            <Text>Save</Text>
          </Button>
        </AppHeader>

        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({});

export default ProjectForm;
