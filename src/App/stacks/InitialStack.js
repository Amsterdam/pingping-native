import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../../screens/LandingScreen';
import WhatIsItScreen from '../../screens/WhatIsItScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import ImportRoutesScreen from '../../screens/ImportRouteScreen';
import QuestionScreen from '../../screens/QuestionScreen';
import CompletedQuestionsScreen from '../../screens/CompletedQuestionsScreen';

const Stack = createStackNavigator();

const InitialStack = () => (
  <Stack.Navigator initialRouteName="Landing" headerMode="none">
    <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="WhatIsIt" component={WhatIsItScreen} />
    <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="ImportRoutes" component={ImportRoutesScreen} />
    <Stack.Screen name="Question" component={QuestionScreen} />
    <Stack.Screen
      name="CompletedQuestions"
      component={CompletedQuestionsScreen}
    />
  </Stack.Navigator>
);

export default InitialStack;
