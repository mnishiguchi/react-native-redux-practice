import React from 'react';
import { WebView } from 'react-native';
import Layout from '../../Layout';
import ContactHeader from './ContactHeader';

const defaultContactsiteUri = 'https://github.com/mnishiguchi';

const ContactScreen = ({ navigation }) => {
  const uri =
    (navigation.state.params && navigation.state.params.uri) ||
    defaultContactsiteUri;

  return (
    <Layout>
      <ContactHeader title={uri} navigation={navigation} />
      <WebView source={{ uri: uri }} />
    </Layout>
  );
};

export default ContactScreen;
