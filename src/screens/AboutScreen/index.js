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
import AboutHeader from './AboutHeader';

class AboutScreen extends React.Component {
  render() {
    return (
      <Layout>
        <AboutHeader title="AboutScreen" {...this.props} />
        <Content padder>
          <H1>About Screen</H1>
          <Text>Masatoshi Nishiguchi</Text>
        </Content>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});

export default AboutScreen;
