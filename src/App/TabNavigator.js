/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountStack from './stacks/AccountStack';
import CityPingsStack from './stacks/CityPingsStack';
import routes from './stacks/routes';
import RouteStack from './stacks/RouteStack';

import testIDs from '../../e2e/modulesTestIDs';
import AccountIcon from '../assets/svg/icons/AccountIcon';
import CityPingsIcon from '../assets/svg/icons/CityPingsIcon ';
import LifeEventsIcon from '../assets/svg/icons/LifeEventsIcon';
import theme from '../config/theme';

const Tab = createBottomTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName={routes.routeStack.name}
			screenOptions={{
				headerShown: false,
				tabBarLabelStyle: {
					fontFamily: 'Raleway-Regular',
				},
				tabBarActiveTintColor: theme.colors.primary,
			}}
		>
			<Tab.Screen
				name={routes.citypingsStack.name}
				component={CityPingsStack}
				options={{
					tabBarLabel: routes.citypingsStack.label,
					tabBarIcon: ({ color, size }) => (
						<CityPingsIcon style={{ fontSize: size }} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name={routes.routeStack.name}
				component={RouteStack}
				options={{
					tabBarLabel: routes.routeStack.label,
					tabBarIcon: ({ color, size }) => (
						<LifeEventsIcon style={{ fontSize: size }} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name={routes.accountStack.name}
				component={AccountStack}
				options={{
					tabBarTestID: testIDs.ACCOUNT.TAB_BUTTON,
					tabBarLabel: routes.accountStack.label,
					tabBarIcon: ({ color, size }) => (
						<AccountIcon style={{ fontSize: size }} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigator;
