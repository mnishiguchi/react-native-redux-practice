import React from 'react';
import * as NB from 'native-base';

const NavLinks = ({ routeNames, navigation }) => (
  <NB.List
    dataArray={routeNames}
    renderRow={routeName => (
      <NB.ListItem button onPress={() => navigation.navigate(routeName)}>
        <NB.Text>{routeName}</NB.Text>
      </NB.ListItem>
    )}
  />
);

export default NavLinks;
