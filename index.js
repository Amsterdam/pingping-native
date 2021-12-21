import React from 'react';

import {ApolloProvider} from '@apollo/client';
import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';

import client from './src/apollo/apolloClient';
import RootApp from './src/App/App';
import {name as appName} from './src/App/app.json';

enableScreens();

const PingPingNative = () => (
	<ApolloProvider client={client}>
		<RootApp />
	</ApolloProvider>
);

AppRegistry.registerComponent(appName, () => PingPingNative);
