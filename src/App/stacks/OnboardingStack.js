import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import ImportDataScreen from '../../screens/ImportDataScreen';
import NotificationDecisionScreen from '../../screens/NotificationDecisionScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import QuestionScreen from '../../screens/QuestionScreen';

const Stack = createStackNavigator();

const OnboardingStack = ({setLogin}) => (
  <Stack.Navigator
    initialRouteName={routes.onboardingStack.homeScreen}
    screenOptions={{headerShown: false}}>
    <Stack.Screen
      name={routes.onboardingStack.homeScreen}
      component={OnboardingScreen}
    />
    <Stack.Screen
      name={routes.onboardingStack.privacyPolicyScreen}
      component={PrivacyPolicyScreen}
    />
    <Stack.Screen
      name={routes.onboardingStack.questionScreen}
      component={QuestionScreen}
    />
    <Stack.Screen
      name={routes.onboardingStack.importDataScreen}
      component={ImportDataScreen}
    />
    <Stack.Screen name={routes.onboardingStack.notificationDecisionScreen}>
      {(props) => <NotificationDecisionScreen {...props} setLogin={setLogin} />}
    </Stack.Screen>
  </Stack.Navigator>
);

OnboardingStack.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default OnboardingStack;
