import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountHomeScreen from '../../screens/AccountHomeScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import DeleteDataScreen from '../../screens/DeleteDataScreen';
import ExportDataScreen from '../../screens/ExportDataScreen';

const Stack = createStackNavigator();

const AccountStack = () => (
  <Stack.Navigator initialRouteName="AccountHome" headerMode="none">
    <Stack.Screen name="AccountHome" component={AccountHomeScreen} />
    <Stack.Screen name="ViewPrivacy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="DeleteData" component={DeleteDataScreen} />
    <Stack.Screen name="ExportData" component={ExportDataScreen} />
  </Stack.Navigator>
);

export default AccountStack;
