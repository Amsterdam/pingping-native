import React, {useEffect} from 'react';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import RouteDetailsScreen from '../../screens/RouteDetailsScreen';
import RouteFeedbackScreen from '../../screens/RouteFeedbackScreen';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';

const Stack = createStackNavigator();

const tabHiddenRoutes = [
	routes.routeStack.routeFeedbackScreen,
	routes.routeStack.taskScreen,
	routes.routeStack.routeDetailsScreen,
	routes.routeStack.tipScreen,
];

function RouteStack({navigation, route}) {
	useEffect(() => {
		if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
			navigation.setOptions({tabBarStyle: {display: 'none'}});
		} else {
			setTimeout(() => {
				navigation.setOptions({tabBarStyle: {display: ''}});
			}, 550);
		}
	}, [navigation, route]);

	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Group>
				<Stack.Screen
					name={routes.routeStack.homeScreen}
					component={RouteHomeScreen}
				/>
				<Stack.Screen
					name={routes.routeStack.routeFeedbackScreen}
					component={RouteFeedbackScreen}
				/>
			</Stack.Group>
			<Stack.Group screenOptions={{presentation: 'modal'}}>
				<Stack.Screen
					name={routes.routeStack.taskScreen}
					component={TaskScreen}
				/>
				<Stack.Screen
					name={routes.routeStack.routeDetailsScreen}
					component={RouteDetailsScreen}
				/>
				<Stack.Screen
					name={routes.routeStack.tipScreen}
					component={TipScreen}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
}

RouteStack.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default RouteStack;
