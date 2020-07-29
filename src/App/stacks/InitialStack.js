import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import ImportRoutesScreen from '../../screens/ImportRouteScreen';
import QuestionScreen from '../../screens/QuestionScreen';
import CompletedQuestionsScreen from '../../screens/CompletedQuestionsScreen';

const Stack = createStackNavigator();

const InitialStack = ({setLogin}) => (
  <Stack.Navigator initialRouteName="Landing" headerMode="none">
    <Stack.Screen name="ImportRoutes" component={ImportRoutesScreen} />
    <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="Question" component={QuestionScreen} />
    <Stack.Screen name="CompletedQuestions">
      {(props) => <CompletedQuestionsScreen {...props} setLogin={setLogin} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default InitialStack;
