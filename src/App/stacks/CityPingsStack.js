import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import tabBarDisplayHelper from '../../helpers/tabBarDisplayHelper';
import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import ClaimedRewardModalScreen from '../../screens/ClaimedRewardModalScreen';
import CompletedRouteCelebrationModalScreen from '../../screens/CompletedRouteCelebrationModalScreen';
import RewardDetailModalScreen from '../../screens/RewardDetailModalScreen';

const RootStack = createStackNavigator();
function RootStackScreen({ navigation, route }) {
	useEffect(() => {
		// hides tab bar on modal screens
		tabBarDisplayHelper(navigation, route);
	}, [navigation, route]);

	return (
		<RootStack.Navigator
			screenOptions={{ headerShown: false }}
		>
			<RootStack.Group>
				<RootStack.Screen
					name={routes.citypingsStack.homeScreen}
					component={CityPingsHomeScreen}
				/>
			</RootStack.Group>
			<RootStack.Group
				screenOptions={{ presentation: 'modal' }}
			>
				<RootStack.Screen
					name={
						routes.citypingsStack
							.rewardDetailModalScreen
					}
					component={RewardDetailModalScreen}
				/>
				<RootStack.Screen
					name={
						routes.citypingsStack
							.claimedRewardModalScreen
					}
					component={ClaimedRewardModalScreen}
				/>
				<RootStack.Screen
					name={
						routes.citypingsStack
							.completedRouteCelebrationModalScreen
					}
					component={
						CompletedRouteCelebrationModalScreen
					}
				/>
			</RootStack.Group>
		</RootStack.Navigator>
	);
}

RootStackScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default RootStackScreen;
