import React from 'react';

import { useQuery } from '@apollo/client';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import linking from './linking';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';

import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import ErrorComponent from '../components/shared/ErrorComponent';
import Loading from '../components/shared/LoadingComponent';
import userStatus from '../helpers/authHelper';
import PushNotificationService from '../services/PushNotificationService';

export default function App() {
	React.useEffect(() => {
		NetInfo.addEventListener(netInfoState => {
			// here we check if there is an internect connection
			// if we have an internet connection we will move with executing functions
			// otherwise we present the user with a no connections screen
			if (
				netInfoState.isInternetReachable === true
			) {
				setConnected(true);
				checkUserStatus(); // this function controls the AuthState of the app, onboarder/loggedin
			}
			if (
				netInfoState.isInternetReachable === false
			) {
				setConnected(false);
			}
		});
	}, [checkUserStatus]);

	const [loggedIn, setLoggedIn] = React.useState(
		false,
	);
	const [
		onboarder,
		setOnboarder,
	] = React.useState(false);
	const [
		connected,
		setConnected,
	] = React.useState(null);
	const [
		backEndIssue,
		setBackEndIssue,
	] = React.useState(false);
	const [
		somethingWentWrong,
		setSomethingWentWrong,
	] = React.useState(false);
	const { refetch } = useQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'network-only',
		skip: 'true',
	});

	const setLogin = async () => {
		setLoggedIn(true);
	};

	//   @todo handle this with context

	const setLogOut = async () => {
		setLoggedIn(false);
		setOnboarder(true);
	};

	const checkUserStatus = React.useCallback(() => {
		userStatus(
			refetch,
			setLoggedIn,
			setOnboarder,
			setBackEndIssue,
			setSomethingWentWrong,
		);
	}, [refetch]);

	const renderApp = () => {
		if (
			connected === false ||
			somethingWentWrong ||
			backEndIssue
		) {
			return (
				<ErrorComponent
					functionToRetry={checkUserStatus}
					onPress={checkUserStatus}
					disconnected={!connected}
					backEndIssue={backEndIssue}
					somethingWentWrong={somethingWentWrong}
					deafultLabelOverRide="Probeer Opnieuw"
				/>
			);
		}
		if (loggedIn) {
			return (
				<PushNotificationService>
					<TabNavigator setLogOut={setLogOut} />
				</PushNotificationService>
			);
		}
		if (onboarder) {
			return (
				<OnboardingStack setLogin={setLogin} />
			);
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
