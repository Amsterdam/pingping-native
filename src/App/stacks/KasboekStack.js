import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import KasboekHomeScreen from '../../screens/KasboekHomeScreen';
import KasboekAddGoalScreen from '../../screens/KasboekAddGoalScreen';

const Stack = createStackNavigator();

const KasboekStack = () => (
  <Stack.Navigator initialRouteName="KasboekHomeScreen" headerMode="none">
    <Stack.Screen name="KasboekHome" component={KasboekHomeScreen} />
    <Stack.Screen name="KasboekAddGoal" component={KasboekAddGoalScreen} />
  </Stack.Navigator>
);

export default KasboekStack;
