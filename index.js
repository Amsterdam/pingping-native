import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Toast from 'react-native-toast-message';

import client from './src/apollo/apolloClient';
import App from './src/App';
import { name as appName } from './src/App/app.json';
import Context from './src/App/AppContext';

enableScreens();

function PingPingNative() {
	return (
		<ApolloProvider client={client}>
			<Context>
				<App />
			</Context>
			<Toast position="bottom" />
		</ApolloProvider>
	);
}

AppRegistry.registerComponent(appName, () => PingPingNative);
