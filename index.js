import React from 'react';
import {AppRegistry} from 'react-native';
import RootApp from './src/App/App';
import {name as appName} from './src/App/app.json';
import {enableScreens} from 'react-native-screens';
import client from './src/apollo/apolloClient';
import {ApolloProvider} from '@apollo/client';

enableScreens();

const PingPingNative = () => (
  <ApolloProvider client={client}>
    <RootApp />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => PingPingNative);
