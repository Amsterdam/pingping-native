import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useMutation, useQuery} from '@apollo/client';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';
import PushNotificationService from '../services/PushNotificationService';
import registerDeviceHelper from '../utils/registerDevice';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);
  const {data, error, loading} = useQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'no-cache',
  });

  React.useEffect(() => {
    SplashScreen.hide();
    // ****important**** before we do anything else we need to check here if the device is connected to the internet
    async function getToken() {
      const token = await AsyncStorage.getItem('@access_token'); // GET ACCESS TOKEN
      if (!token && !loading) {
        await registerDeviceHelper(registerDevice); // REGISTER DEVICE IF THERE IS NO TOKEN
        console.log('GETTING TOKEN');
        return;
      }
      if (!data && error) {
        console.log('My token is invalid or not linked to user');
        registerDeviceHelper(registerDevice); // IF I HAVE A TOKEN BUT IT IS NOT CORRECT, GET A NEW ONE
        return;
      }
      if (data && data.getStatus && !error && !loading) {
        if (
          data.getStatus.currentTask ||
          data.getStatus.device.notificationStatus === 'Initial'
        ) {
          // check if decision is made
          console.log('I AM LOGGED IN AND NEED TO GO TO ONBOARDING');
          return; // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, KEEP ME IN THE ONBOARDING
        }

        return setLogin(); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
      }
    }
    getToken();
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
