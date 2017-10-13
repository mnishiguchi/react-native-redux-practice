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
  H3,
} from 'native-base';
import AppLayout from '../../layouts/AppLayout';
import AppHeader from '../../layouts/AppHeader';

// TODO
class EditDefaultHouseholdArticleScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;

    return (
      <AppLayout>
        <AppHeader
          title="EditDefaultHouseholdArticleScreen"
          navigation={navigation}
          
        />
        <Content padder>
          <H1>EditDefaultHouseholdArticleScreen</H1>
          <Text>
            Ut se despicationes, aut qui amet quorum enim. Quid expetendis imitarentur ad est do
            familiaritatem, mandaremus ut fugiat in non amet quibusdam. Ea noster constias
            eiusmod.Aute occaecat do vidisse, litteris qui duis mentitum, est ex graviterque si
            mentitum de quis. Noster e consequat, offendit duis ex iudicem cohaerescant. Quid
            aliquip distinguantur, hic tamen cillum ubi deserunt. Eu cillum excepteur in quorum
            eiusmod commodo.
          </Text>
        </Content>
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({});

export default EditDefaultHouseholdArticleScreen;
