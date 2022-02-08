import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { NativeBaseProvider } from 'native-base';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';

import client from './src/apollo/apolloClient';
import App from './src/App';
import { name as appName } from './src/App/app.json';
import Context from './src/App/AppContext';

enableScreens();

function PingPingNative() {
	return (
		<ApolloProvider client={client}>
			<NativeBaseProvider>
				<Context>
					<App />
				</Context>
			</NativeBaseProvider>
		</ApolloProvider>
	);
}

AppRegistry.registerComponent(appName, () => PingPingNative);
