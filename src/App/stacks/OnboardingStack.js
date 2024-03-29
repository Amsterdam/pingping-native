import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';

import ImportDataScreen from '../../screens/ImportDataScreen';
import NotificationDecisionScreen from '../../screens/NotificationDecisionScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import QuestionScreen from '../../screens/QuestionScreen';

const Stack = createStackNavigator();

function OnboardingStack() {
	return (
		<Stack.Navigator
			initialRouteName={routes.onboardingStack.screens.homeScreen}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name={routes.onboardingStack.screens.homeScreen}
				component={OnboardingScreen}
			/>
			<Stack.Screen
				name={routes.onboardingStack.screens.privacyPolicyScreen}
				component={PrivacyPolicyScreen}
			/>
			<Stack.Screen
				name={routes.onboardingStack.screens.questionScreen}
				component={QuestionScreen}
			/>
			<Stack.Screen
				name={routes.onboardingStack.screens.importDataScreen}
				component={ImportDataScreen}
			/>
			<Stack.Screen
				name={routes.onboardingStack.screens.notificationDecisionScreen}
				component={NotificationDecisionScreen}
			/>
		</Stack.Navigator>
	);
}

export default OnboardingStack;
