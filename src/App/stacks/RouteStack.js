import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LifeEventHomeScreen from '../../screens/LifeEventHomeScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';

const Stack = createStackNavigator();

const RouteStack = () => (
  <Stack.Navigator initialRouteName="LifeEventHomeScreen" headerMode="none">
    <Stack.Screen name="LifeEventHomeScreen" component={LifeEventHomeScreen} />
    <Stack.Screen name="Task" component={TaskScreen} />
    <Stack.Screen name="Tip" component={TipScreen} />
  </Stack.Navigator>
);

export default RouteStack;
