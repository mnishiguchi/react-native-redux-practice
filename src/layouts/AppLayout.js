import React from 'react';
import { Container } from 'native-base';
import TopSpacer from './TopSpacer';

const AppLayout = props => (
  <Container style={{ backgroundColor: 'white' }}>
    <TopSpacer />
    {props.children}
  </Container>
);

export default AppLayout;
