import React from 'react';
import PropTypes from 'prop-types';
import {createStackNavigator} from '@react-navigation/stack';
import AccountHomeScreen from '../../screens/AccountHomeScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import DeleteDataScreen from '../../screens/DeleteDataScreen';
import ExportDataScreen from '../../screens/ExportDataScreen';

const Stack = createStackNavigator();

const AccountStack = ({setLogin}) => (
  <Stack.Navigator initialRouteName="AccountHome" headerMode="none">
    <Stack.Screen name="AccountHome" component={AccountHomeScreen} />
    <Stack.Screen name="ViewPrivacy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="DeleteData">
      {(props) => <DeleteDataScreen {...props} setLogin={setLogin} />}
    </Stack.Screen>
    <Stack.Screen name="ExportData" component={ExportDataScreen} />
  </Stack.Navigator>
);

AccountStack.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default AccountStack;
