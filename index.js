import React from 'react';
import {AppRegistry} from 'react-native';
import RootApp from './src/App/App';
import {name as appName} from './src/App/app.json';
import createClient from './src/apollo/apolloClient';
import {ApolloProvider} from '@apollo/client';

const client = createClient();

const App = () => (
  <ApolloProvider client={client}>
    <RootApp />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
