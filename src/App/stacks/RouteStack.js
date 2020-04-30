import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import YourRouteScreen from '../../screens/YourRouteScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';

const Stack = createStackNavigator();

const RouteStack = () => (
  <Stack.Navigator initialRouteName="RouteHome" headerMode="none">
    <Stack.Screen name="RouteHome" component={RouteHomeScreen} />
    <Stack.Screen name="YourRoute" component={YourRouteScreen} />
    <Stack.Screen name="Task" component={TaskScreen} />
    <Stack.Screen name="Tip" component={TipScreen} />
  </Stack.Navigator>
);

export default RouteStack;
