import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Button, Body, Header, Icon, Left, Right, Title } from 'native-base';

const AboutHeader = ({ navigation, title }) => {
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

export default AboutHeader;
