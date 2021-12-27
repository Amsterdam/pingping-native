import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

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
	if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
		navigation.setOptions({tabBarStyle: {display: 'none'}});
	} else {
		setTimeout(() => {
			navigation.setOptions({tabBarStyle: {display: 'flex'}});
		}, 550);
	}
}
