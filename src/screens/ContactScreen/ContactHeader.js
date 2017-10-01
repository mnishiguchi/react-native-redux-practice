import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  H3,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base';

import Layout from '../../Layout';

const ContactHeader = ({ navigation, title }) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

const styles = StyleSheet.create({});

export default ContactHeader;
