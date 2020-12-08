import React from 'react';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteStack from './stacks/RouteStack';
import CityPingsStack from './stacks/CityPingsStack';
import AccountStack from './stacks/AccountStack';
import {testIDs} from '../../e2e/modulesTestIDs';
import {appColors} from '../config/colors';
import routes from './stacks/routes';

const Tab = createBottomTabNavigator();

const TabNavigator = ({setLogOut}) => (
  <Tab.Navigator
    initialRouteName={routes.routeStack.name}
    tabBarOptions={{
      labelStyle: {fontFamily: 'Raleway-Regular'},
      activeTintColor: appColors.primary,
    }}>
    <Tab.Screen
      name={routes.citypingsStack.name}
      component={CityPingsStack}
      options={{
        tabBarLabel: routes.citypingsStack.label,
        tabBarIcon: ({color, size}) => (
          <Icon
            name="price-ribbon"
            type="Entypo"
            style={{color: color, fontSize: size}}
          />
        ),
      }}
    />

    <Tab.Screen
      name={routes.routeStack.name}
      component={RouteStack}
      options={{
        tabBarLabel: routes.routeStack.label,
        tabBarIcon: ({color, size}) => (
          <Icon
            name="stars"
            type="MaterialIcons"
            style={{color: color, fontSize: size}}
          />
        ),
      }}
    />

    <Tab.Screen
      name={routes.accountStack.name}
      options={{
        tabBarTestID: testIDs.ACCOUNT.TAB_BUTTON,
        tabBarLabel: routes.accountStack.label,
        tabBarIcon: ({color, size}) => (
          <Icon
            name="user-circle"
            type="FontAwesome"
            style={{color: color, fontSize: size}}
            size={size}
          />
        ),
      }}>
      {(props) => <AccountStack {...props} setLogOut={setLogOut} />}
    </Tab.Screen>
  </Tab.Navigator>
);

TabNavigator.propTypes = {
  setLogOut: PropTypes.func.isRequired,
};

export default TabNavigator;
