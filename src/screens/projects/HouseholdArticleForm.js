import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Content,
  Form,
  H1,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Picker,
  Right,
  Text,
  View,
} from 'native-base';
import Slider from 'react-native-slider';
import AppLayout from '../../layouts/AppLayout';
import AppHeader from '../../layouts/AppHeader';

// TODO: Connect to redux store
class HouseholdArticleForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.params = this.props.navigation.state.params;

    this.state = {
      name: this.params.name,
      description: this.params.description,
      tag: this.params.tag,
      volume: Number(this.params.volume) || 2,
      quantity: Number(this.params.quantity) || 1,
    };
  }

  onChangeQuantity = value => {
    this.setState({ quantity: value });
  };

  onChangeVolume = value => {
    this.setState({ volume: value });
  };

  onChangeTag = value => {
    this.setState({ tag: value });
  };

  render() {
    const { navigation, project } = this.props;

    return (
      <AppLayout>
        <AppHeader
          closeButton
          title={this.state.name}
          subtitle={project.name}
          navigation={navigation}
        >
          <Button transparent>
            <Text>Save</Text>
          </Button>
        </AppHeader>

        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input value={this.state.name} />
            </Item>

            <Item floatingLabel>
              <Label>Description</Label>
              <Input value={this.state.description} />
            </Item>
          </Form>

          <View style={styles.volumeWrapper}>
            <Text>Volume: {this.state.volume}</Text>
            <Slider
              maximumValue={100}
              step={1}
              value={this.state.volume}
              onValueChange={this.onChangeVolume}
            />
          </View>

          <View style={styles.quantityWrapper}>
            <Text>Quantity: {this.state.quantity}</Text>
            <Slider
              maximumValue={25}
              step={1}
              value={this.state.quantity}
              onValueChange={this.onChangeQuantity}
            />
          </View>

          <View style={styles.tagWrapper}>
            <Picker
              note
              iosHeader="Select one"
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.tag}
              onValueChange={this.onChangeTag}
            >
              <Item label="key0" value="key0" />
              <Item label="key1" value="key1" />
              <Item label="key2" value="key2" />
            </Picker>

            <Button transparent>
              <Text>New Tag</Text>
            </Button>
          </View>

          {/* <Text>{JSON.stringify(this.props.navigation.state.params)}</Text> */}
        </Content>
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({
  volumeWrapper: {
    flex: 1,
    paddingTop: 24,
    marginLeft: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  quantityWrapper: {
    flex: 1,
    paddingTop: 24,
    marginLeft: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  tagWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 24,
    marginLeft: 18,
  },
});

const mapStateToProps = state => ({
  project: state.projects[state.selectedProject],
});

export default connect(mapStateToProps)(HouseholdArticleForm);
