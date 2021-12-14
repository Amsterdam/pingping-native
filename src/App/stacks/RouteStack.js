import React from 'react';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import RouteDetailsScreen from '../../screens/RouteDetailsScreen';
import RouteFeedbackScreen from '../../screens/RouteFeedbackScreen';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';

const RootStack = createStackNavigator();

const tabHiddenRoutes = [
  routes.routeStack.routeFeedbackScreen,
  routes.routeStack.taskScreen,
  routes.routeStack.routeDetailsScreen,
  routes.routeStack.tipScreen,
];

function RouteStack({navigation, route}) {
  // @todo - hiding tabs need to be reimplemented after react-navigation is updated
  React.useEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Group>
        <RootStack.Screen
          name={routes.routeStack.homeScreen}
          component={RouteHomeScreen}
        />
        <RootStack.Screen
          name={routes.routeStack.routeFeedbackScreen}
          component={RouteFeedbackScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name={routes.routeStack.taskScreen}
          component={TaskScreen}
        />
        <RootStack.Screen
          name={routes.routeStack.routeDetailsScreen}
          component={RouteDetailsScreen}
        />
        <RootStack.Screen
          name={routes.routeStack.tipScreen}
          component={TipScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

RouteStack.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default RouteStack;
