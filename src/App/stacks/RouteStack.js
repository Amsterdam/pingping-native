import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import RouteDetailsScreen from '../../screens/RouteDetailsScreen';
import RouteFeedbackScreen from '../../screens/RouteFeedbackScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';
import routes from './routes';

const Stack = createStackNavigator();

const RouteStack = () => (
  <Stack.Navigator
    initialRouteName={routes.routeStack.homeScreen}
    headerMode="none">
    <Stack.Screen
      name={routes.routeStack.homeScreen}
      component={RouteHomeScreen}
    />
    <Stack.Screen
      name={routes.routeStack.routeDetailsScreen}
      component={RouteDetailsScreen}
    />
    <Stack.Screen
      name={routes.routeStack.routeFeedbackScreen}
      component={RouteFeedbackScreen}
    />
    <Stack.Screen name={routes.routeStack.taskScreen} component={TaskScreen} />
    <Stack.Screen name={routes.routeStack.tipScreen} component={TipScreen} />
  </Stack.Navigator>
);

export default RouteStack;
