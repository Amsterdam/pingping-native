import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useMutation, useQuery} from '@apollo/client';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';
import PushNotificationService from '../services/PushNotificationService';
import userStatus from '../utils/userStatus';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);
  const {data, error, loading} = useQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'cache-and-network',
  });

  React.useEffect(() => {
    SplashScreen.hide();
    userStatus(registerDevice, data, error, loading, setLogin);
  }, [registerDevice, data, error, loading, loggedIn]);

  const setLogin = async () => {
    setLoggedIn(true);
  };

  const setLogOut = async () => {
    setLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <PushNotificationService>
          <TabNavigator setLogOut={setLogOut} />
        </PushNotificationService>
      ) : (
        <OnboardingStack setLogin={setLoggedIn} />
      )}
    </NavigationContainer>
  );
}
