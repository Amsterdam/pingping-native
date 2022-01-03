import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import linking from './linking';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';

import UpdateAppModal from '../components/modals/UpdateAppModal';
import ErrorComponent from '../components/shared/ErrorComponent';
import Loading from '../components/shared/LoadingComponent';
import useAppContext from '../hooks/useAppContext';
import PushNotificationService from '../services/PushNotificationService';

export default function App() {
	const {
		connected,
		userState,
		backEndIssue,
		somethingWentWrong,
	} = useAppContext();

	const renderApp = () => {
		if (
			connected === false ||
			somethingWentWrong ||
			backEndIssue
		) {
			return (
				<ErrorComponent
					functionToRetry={() => {}}
					onPress={() => {}}
					disconnected={!connected}
					backEndIssue={backEndIssue}
					somethingWentWrong={somethingWentWrong}
					deafultLabelOverRide="Probeer Opnieuw"
				/>
			);
		}
		if (userState === 'LOGGED_IN') {
			return (
				<PushNotificationService>
					<TabNavigator />
					<UpdateAppModal />
				</PushNotificationService>
			);
		}
		if (userState === 'ONBOARDER') {
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
