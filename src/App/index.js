import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import linking from './linking';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';

import UpdateAppModal from '../components/modals/UpdateAppModal';
import ErrorComponent from '../components/shared/ErrorComponent';
import Loading from '../components/shared/LoadingComponent';
import { USER_STATES } from '../config/constants';
import useAppContext from '../hooks/useAppContext';
import PushNotifications from '../services/PushNotifications';
import StorybookUI from '../storybook';

function App() {
	const { bootIssue, userState, retry } = useAppContext();

	const renderApp = () => {
		if (bootIssue) {
			return <ErrorComponent functionToRetry={retry} error={bootIssue} />;
		}
		if (userState === USER_STATES.loggedIn) {
			return (
				<>
					<TabNavigator />
					<UpdateAppModal />
					<PushNotifications />
				</>
			);
		}
		if (userState === USER_STATES.onboarder) {
			return <OnboardingStack />;
		}
		return <Loading />;
	};

	return (
		<NavigationContainer linking={linking} onReady={() => RNBootSplash.hide({ fade: true })}>
			{renderApp()}
		</NavigationContainer>
	);
}

export default StorybookUI;
