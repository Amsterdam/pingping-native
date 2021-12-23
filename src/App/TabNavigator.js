import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import AccountStack from './stacks/AccountStack';
import CityPingsStack from './stacks/CityPingsStack';
import routes from './stacks/routes';
import RouteStack from './stacks/RouteStack';

import {testIDs} from '../../e2e/modulesTestIDs';
import AccountIcon from '../assets/svg/icons/AccountIcon';
import CityPingsIcon from '../assets/svg/icons/CityPingsIcon ';
import LifeEventsIcon from '../assets/svg/icons/LifeEventsIcon';
import {appColors} from '../config/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = ({setLogOut}) => (
	<Tab.Navigator
		initialRouteName={routes.routeStack.name}
		screenOptions={{
			headerShown: false,
			tabBarLabelStyle: {fontFamily: 'Raleway-Regular'},
			tabBarActiveTintColor: appColors.primary,
		}}>
		<Tab.Screen
			name={routes.citypingsStack.name}
			component={CityPingsStack}
			options={{
				tabBarLabel: routes.citypingsStack.label,
				tabBarIcon: function tabBarIcon({color, size}) {
					return <CityPingsIcon style={{fontSize: size}} color={color} />;
				},
			}}
		/>

		<Tab.Screen
			name={routes.routeStack.name}
			component={RouteStack}
			options={{
				tabBarLabel: routes.routeStack.label,
				tabBarIcon: function tabBarIcon({color, size}) {
					return <LifeEventsIcon style={{fontSize: size}} color={color} />;
				},
			}}
		/>

		<Tab.Screen
			name={routes.accountStack.name}
			options={{
				tabBarTestID: testIDs.ACCOUNT.TAB_BUTTON,
				tabBarLabel: routes.accountStack.label,
				tabBarIcon: function tabBarIcon({color, size}) {
					return <AccountIcon style={{fontSize: size}} color={color} />;
				},
			}}>
			{props => <AccountStack {...props} setLogOut={setLogOut} />}
		</Tab.Screen>
	</Tab.Navigator>
);

TabNavigator.propTypes = {
	setLogOut: PropTypes.func.isRequired,
};

export default TabNavigator;
