import Expo from 'expo';
import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Root } from 'native-base';
import AppNavigator from './AppNavigator';

class AppContainer extends React.PureComponent {
  state = { isReady: false };

  // https://github.com/GeekyAnts/NativeBase#4-getting-started
  // https://github.com/GeekyAnts/NativeBase/blob/031cd958b51a043480f3cc4b665a05640654545d/src/backward/Widgets/Icon.js
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    // https://github.com/GeekyAnts/NativeBase#4-getting-started
    if (!this.state.isReady) return <Expo.AppLoading />;

    // https://reactnavigation.org/docs/guides/redux
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });

    return (
      <Root>
        <AppNavigator navigation={navigation} />
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppContainer);
