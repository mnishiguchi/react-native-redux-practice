import React from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

const routeNames = ['Home', 'About', 'Contact'];

const navigate = (navigation, routeName) => () =>
  navigation.navigate(routeName);

const SideBar = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Image
          source={{ uri: 'http://lorempixel.com/400/300/abstract/' }}
          style={styles.themeImage}
        >
          <Image
            square
            style={styles.logoImage}
            source={{ uri: 'http://mnishiguchi.com/images/logo_200.png' }}
          />
        </Image>
        <List
          dataArray={routeNames}
          renderRow={routeName => {
            return (
              <ListItem button onPress={navigate(navigation, routeName)}>
                <Text>{routeName}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  themeImage: {
    height: 300,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    height: 200,
    width: 200
  }
});

export default SideBar;
