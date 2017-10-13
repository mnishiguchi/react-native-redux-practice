import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, Body, Header, Icon, Left, Right, Subtitle, Text, Title } from 'native-base';

// Switch the content of the left side based on props.
const LeftContent = ({ closeButton, drawerToggle, navigation }) => {
  if (closeButton) {
    return (
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="close" />
      </Button>
    );
  } else if (drawerToggle) {
    return (
      <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name="menu" />
      </Button>
    );
  }

  return (
    <Button transparent onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" />
    </Button>
  );
};

const AppHeader = ({
  navigation,
  title,
  closeButton,
  drawerToggle,
  subtitle,
  children,
}) => (
  <Header hasSubtitle={!!subtitle} style={{ backgroundColor: '#3B5998' }}>
    <Left>
      <LeftContent navigation={navigation} closeButton={closeButton} drawerToggle={drawerToggle} />
    </Left>
    <Body>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Body>
    <Right>{children}</Right>
  </Header>
);

const styles = StyleSheet.create({});

AppHeader.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.string,
  backButton: PropTypes.bool,
  drawerToggle: PropTypes.bool,
  subtitle: PropTypes.string,
  children: PropTypes.element,
};

export default AppHeader;
