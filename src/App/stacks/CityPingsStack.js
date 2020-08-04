import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import RewardScreen from '../../screens/RewardScreen';
import ClaimRewardScreen from '../../screens/ClaimRewardScreen';
import RewardDetailModal from '../../components/modals/RewardDetailModal';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const CityPingsStackScreen = () => (
  <MainStack.Navigator initialRouteName="CityPingsHomeScreen" headerMode="none">
    <MainStack.Screen name="CityPingsHome" component={CityPingsHomeScreen} />
    <MainStack.Screen name="Reward" component={RewardScreen} />
    <MainStack.Screen name="ClaimReward" component={ClaimRewardScreen} />
  </MainStack.Navigator>
);

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={CityPingsStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="RewardDetailModal"
        component={RewardDetailModal}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
