import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from 'native-base';

const AppLayout = props => (
  <Container>
    <View style={styles.topSpacer} />
    {props.children}
  </Container>
);

const styles = StyleSheet.create({
  topSpacer: {
    height: 24,
    backgroundColor: '#333'
  }
});

export default AppLayout;
