import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import RewardScreen from '../../screens/RewardScreen';
import ClaimRewardScreen from '../../screens/ClaimRewardScreen';

const Stack = createStackNavigator();

const CityPingsStack = () => (
  <Stack.Navigator initialRouteName="CityPingsHomeScreen" headerMode="none">
    <Stack.Screen name="CityPingsHome" component={CityPingsHomeScreen} />
    <Stack.Screen name="Reward" component={RewardScreen} />
    <Stack.Screen name="ClaimReward" component={ClaimRewardScreen} />
  </Stack.Navigator>
);

export default CityPingsStack;
