import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import linking from './linking';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';

import UpdateAppModal from '../components/modals/UpdateAppModal';
import ErrorComponent from '../components/shared/ErrorComponent';
import Loading from '../components/shared/LoadingComponent';
import { USER_STATES } from '../config/types';
import useAppContext from '../hooks/useAppContext';
import PushNotificationService from '../services/PushNotificationService';

export default function App() {
	const {
		bootIssue,
		userState,
		retry,
	} = useAppContext();

	const renderApp = () => {
		if (bootIssue) {
			return (
				<ErrorComponent
					functionToRetry={retry}
					error={bootIssue}
				/>
			);
		}
		if (userState === USER_STATES.loggedIn) {
			return (
				<PushNotificationService>
					<TabNavigator />
					<UpdateAppModal />
				</PushNotificationService>
			);
		}
		if (userState === USER_STATES.onboarder) {
			return <OnboardingStack />;
		}
		return <Loading />;
	};

	return (
		<NavigationContainer
			linking={linking}
			onReady={() =>
				RNBootSplash.hide({ fade: true })
			}
		>
			{renderApp()}
		</NavigationContainer>
	);
}
