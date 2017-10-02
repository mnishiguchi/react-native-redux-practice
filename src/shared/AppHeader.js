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

const AppHeader = ({ navigation, title, hasBackButton }) => {
  return (
    <Header>
      {hasBackButton ? (
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : (
        <Left />
      )}
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({});

export default AppHeader;
