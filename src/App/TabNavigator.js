import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';

import AccountStack from './stacks/AccountStack';
import CityPingsStack from './stacks/CityPingsStack';
import routes from './stacks/routes';
import RouteStack from './stacks/RouteStack';

import {testIDs} from '../../e2e/modulesTestIDs';
import {appColors} from '../config/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = ({setLogOut}) => (
  <Tab.Navigator
    initialRouteName={routes.routeStack.name}
    screenOptions={{headerShown: false}}
    tabBarOptions={{
      labelStyle: {fontFamily: 'Raleway-Regular'},
      activeTintColor: appColors.primary,
    }}>
    <Tab.Screen
      name={routes.citypingsStack.name}
      component={CityPingsStack}
      options={{
        tabBarLabel: routes.citypingsStack.label,
        tabBarIcon: function tabBarIcon({color, size}) {
          return (
            <Icon
              name="price-ribbon"
              type="Entypo"
              style={{color: color, fontSize: size}}
            />
          );
        },
      }}
    />

    <Tab.Screen
      name={routes.routeStack.name}
      component={RouteStack}
      options={{
        tabBarLabel: routes.routeStack.label,
        tabBarIcon: function tabBarIcon({color, size}) {
          return (
            <Icon
              name="stars"
              type="MaterialIcons"
              style={{color: color, fontSize: size}}
            />
          );
        },
      }}
    />

    <Tab.Screen
      name={routes.accountStack.name}
      options={{
        tabBarTestID: testIDs.ACCOUNT.TAB_BUTTON,
        tabBarLabel: routes.accountStack.label,
        tabBarIcon: function tabBarIcon({color, size}) {
          return (
            <Icon
              name="user-circle"
              type="FontAwesome"
              style={{color: color, fontSize: size}}
              size={size}
            />
          );
        },
      }}>
      {(props) => <AccountStack {...props} setLogOut={setLogOut} />}
    </Tab.Screen>
  </Tab.Navigator>
);

TabNavigator.propTypes = {
  setLogOut: PropTypes.func.isRequired,
};

export default TabNavigator;
