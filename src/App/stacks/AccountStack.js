import React from 'react';
import PropTypes from 'prop-types';
import {createStackNavigator} from '@react-navigation/stack';
import AccountHomeScreen from '../../screens/AccountHomeScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import DeleteDataScreen from '../../screens/DeleteDataScreen';
import ExportDataScreen from '../../screens/ExportDataScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountStack = ({setLogOut}) => (
  <Stack.Navigator
    initialRouteName={routes.accountStack.homeScreen}
    headerMode="none">
    <Stack.Screen
      name={routes.accountStack.homeScreen}
      component={AccountHomeScreen}
    />
    <Stack.Screen
      name={routes.accountStack.privacyPolicyScreen}
      component={PrivacyPolicyScreen}
    />
    <Stack.Screen name={routes.accountStack.deleteDataScreen}>
      {(props) => <DeleteDataScreen {...props} setLogOut={setLogOut} />}
    </Stack.Screen>
    <Stack.Screen name={routes.accountStack.exportDataScreen}>
      {(props) => <ExportDataScreen {...props} setLogOut={setLogOut} />}
    </Stack.Screen>
  </Stack.Navigator>
);

AccountStack.propTypes = {
  setLogOut: PropTypes.func.isRequired,
};

export default AccountStack;
