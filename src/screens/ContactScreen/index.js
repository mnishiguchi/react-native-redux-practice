import React from 'react';
import { WebView } from 'react-native';
import AppLayout from '../../AppLayout';
import AppHeader from '../../shared/AppHeader';

const defaultContactsiteUri = 'https://github.com/mnishiguchi';

const ContactScreen = ({ navigation }) => {
  const uri =
    (navigation.state.params && navigation.state.params.uri) ||
    defaultContactsiteUri;

  return (
    <AppLayout>
      <AppHeader title={uri} navigation={navigation} hasBackButton />
      <WebView source={{ uri: uri }} />
    </AppLayout>
  );
};

export default ContactScreen;
