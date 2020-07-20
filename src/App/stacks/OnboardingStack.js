import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../../screens/OnboardingScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';

const Stack = createStackNavigator();

const OnboardingStack = ({setLogin}) => (
  <Stack.Navigator initialRouteName="Landing" headerMode="none">
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;
