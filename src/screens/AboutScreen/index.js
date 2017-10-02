import React from 'react';
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

class AboutScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <AppLayout>
        <AppHeader title="AboutScreen" navigation={navigation} hasBackButton />
        <Content padder>
          <H1>About Screen</H1>
          <Text>Masatoshi Nishiguchi</Text>
        </Content>
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({});

export default AboutScreen;
