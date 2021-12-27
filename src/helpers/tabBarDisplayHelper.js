import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Platform} from 'react-native';

import routes from '../App/stacks/routes';

const tabHiddenRoutes = [
	routes.citypingsStack.rewardDetailModalScreen,
	routes.citypingsStack.claimedRewardModalScreen,
	routes.routeStack.routeFeedbackScreen,
	routes.routeStack.taskScreen,
	routes.routeStack.routeDetailsScreen,
	routes.routeStack.tipScreen,
];

export default function tabBarDisplayHelper(navigation, route) {
	const isIos = Platform.OS === 'ios';
	const delay = isIos ? 525 : 100;
	if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
		navigation.setOptions({tabBarStyle: {display: 'none'}});
	} else {
		setTimeout(() => {
			navigation.setOptions({tabBarStyle: {display: 'flex'}});
		}, delay);
	}
}
