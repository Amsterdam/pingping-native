import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import tabBarDisplayHelper from '../../helpers/tabBarDisplayHelper';
import RouteDetailsScreen from '../../screens/RouteDetailsScreen';
import RouteFeedbackScreen from '../../screens/RouteFeedbackScreen';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';

const Stack = createStackNavigator();

function RouteStack({navigation, route}) {
	// hide tab bar on modal screens
	useEffect(() => {
		// hides tab bar on modal screens
		tabBarDisplayHelper(navigation, route);
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
