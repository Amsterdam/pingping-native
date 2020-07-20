import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../../screens/OnboardingScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import QuestionScreen from '../../screens/QuestionScreen';

const Stack = createStackNavigator();

const OnboardingStack = ({setLogin}) => (
  <Stack.Navigator initialRouteName="Landing" headerMode="none">
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;
