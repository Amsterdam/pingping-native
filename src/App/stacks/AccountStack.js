import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';

import AccountHomeScreen from '../../screens/AccountHomeScreen';
import DeleteDataScreen from '../../screens/DeleteDataScreen';
import ExportDataScreen from '../../screens/ExportDataScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';

const Stack = createStackNavigator();

function AccountStack() {
  return <Stack.Navigator
		initialRouteName={
			routes.accountStack.screens.homeScreen
		}
		screenOptions={{ headerShown: false }}
	>
		<Stack.Screen
			name={
				routes.accountStack.screens.homeScreen
			}
			component={AccountHomeScreen}
		/>
		<Stack.Screen
			name={
				routes.accountStack.screens
					.privacyPolicyScreen
			}
			component={PrivacyPolicyScreen}
		/>
		<Stack.Screen
			name={
				routes.accountStack.screens
					.deleteDataScreen
			}
			component={DeleteDataScreen}
		/>
		<Stack.Screen
			name={
				routes.accountStack.screens
					.exportDataScreen
			}
			component={ExportDataScreen}
		/>
	</Stack.Navigator>
}

export default AccountStack;
