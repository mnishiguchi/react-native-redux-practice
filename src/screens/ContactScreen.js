import React from 'react';
import { WebView } from 'react-native';
import AppLayout from '../layouts/AppLayout';
import AppHeader from '../layouts/AppHeader';

const defaultContactsiteUri = 'https://github.com/mnishiguchi';

const ContactScreen = ({ navigation }) => {
  const uri = (navigation.state.params && navigation.state.params.uri) || defaultContactsiteUri;

  return (
    <AppLayout>
      <AppHeader title={uri} navigation={navigation}  />
      <WebView source={{ uri }} />
    </AppLayout>
  );
};

export default ContactScreen;
