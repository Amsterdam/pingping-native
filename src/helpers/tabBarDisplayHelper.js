import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Platform } from 'react-native';

import routes from '../App/stacks/routes';

const tabHiddenRoutes = [
	routes.citypingsStack.screens
		.rewardDetailModalScreen,
	routes.citypingsStack.screens
		.claimedRewardModalScreen,
	routes.citypingsStack.screens
		.completedRouteCelebrationModalScreen,
	routes.routeStack.screens.routeFeedbackScreen,
	routes.routeStack.screens.taskScreen,
	routes.routeStack.screens.routeDetailsScreen,
	routes.routeStack.screens.tipScreen,
];

export default function tabBarDisplayHelper(
	navigation,
	route,
) {
	const isIos = Platform.OS === 'ios';
	const delay = isIos ? 525 : 100;
	if (
		tabHiddenRoutes.includes(
			getFocusedRouteNameFromRoute(route),
		)
	) {
		navigation.setOptions({
			tabBarStyle: { display: 'none' },
		});
	} else {
		setTimeout(() => {
			navigation.setOptions({
				tabBarStyle: { display: 'flex' },
			});
		}, delay);
	}
}
