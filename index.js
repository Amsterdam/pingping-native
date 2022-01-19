import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { NativeBaseProvider } from 'native-base';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';

import client from './src/apollo/apolloClient';
import RootApp from './src/App/App';
import { name as appName } from './src/App/app.json';
import AppContext from './src/App/AppContext';

enableScreens();

function PingPingNative() {
  return <ApolloProvider client={client}>
		<NativeBaseProvider>
			<AppContext>
				<RootApp />
			</AppContext>
		</NativeBaseProvider>
	</ApolloProvider>
}

AppRegistry.registerComponent(
	appName,
	() => PingPingNative,
);
