import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import RewardDetailModalScreen from '../../components/modals/RewardDetailModalScreen';
import CompletedRouteCelebrationModalScreen from '../../components/modals/CompletedRouteCelebrationModalScreen';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const CityPingsStackScreen = () => (
  <MainStack.Navigator initialRouteName="CityPingsHomeScreen" headerMode="none">
    <MainStack.Screen name="CityPingsHome" component={CityPingsHomeScreen} />
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
        name="RewardDetailModalScreen"
        component={RewardDetailModalScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="CompletedRouteCelebrationModalScreen"
        component={CompletedRouteCelebrationModalScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
