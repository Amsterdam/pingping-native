import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import RouteDetailsScreen from '../../screens/RouteDetailsScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';

const Stack = createStackNavigator();

const RouteStack = () => (
  <Stack.Navigator initialRouteName="RouteHomeScreen" headerMode="none">
    <Stack.Screen name="RouteHomeScreen" component={RouteHomeScreen} />
    <Stack.Screen name="RouteDetailsScreen" component={RouteDetailsScreen} />
    <Stack.Screen name="TaskScreen" component={TaskScreen} />
    <Stack.Screen name="TipScreen" component={TipScreen} />
  </Stack.Navigator>
);

export default RouteStack;
