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

import Layout from '../../Layout';
import HomeHeader from './HomeHeader';

class HomeScreen extends React.Component {
  render() {
    return (
      <Layout>
        <HomeHeader title="HomeScreen" {...this.props} />
        <Content padder>
          <H1>Home Screen</H1>
          <Text>This app has a lot of cool features!</Text>
        </Content>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
