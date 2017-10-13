import React from 'react';
import { List, ListItem, Text } from 'native-base';

const NavLinks = ({ routeNames, navigation }) => (
  <List
    dataArray={routeNames}
    renderRow={routeName => (
      <ListItem button onPress={() => navigation.navigate(routeName)}>
        <Text>{routeName}</Text>
      </ListItem>
    )}
  />
);

export default NavLinks;
