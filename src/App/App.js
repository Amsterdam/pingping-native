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
    async function getToken() {
      const token = await AsyncStorage.getItem('@access_token'); // GET ACCESS TOKEN
      if (!token) {
        await registerDeviceHelper(registerDevice); // REGISTER DEVICE IF THERE IS NO TOKEN
        console.log('GETTING TOKEN');
        return;
      }
      if (!data && error) {
        ('NO IDEA HOW I GOT HERE');
        registerDeviceHelper(registerDevice); // IF I HAVE A TOKEN BUT IT IS NOT CORRECT, GET A NEW ONE
        return;
      }
      if (data && data.getStatus && !error && !loading) {
        if (data.getStatus.currentTask) {
          // check if decision is made
          console.log('I AM LOGGED IN AND NEED TO GO TO ONBOARDING');
          SplashScreen.hide(); // IF I AM AUTHENTICATED AND HAVE ONBOARDING TASKS OPEN, SEND ME TO THE ONBOARDING
          return;
        }
        SplashScreen.hide();
        return setLogin(true); // I HAVE A VALID ACCESS TOKEN AND AM AUTHORIZED AND I HAVE COMPLETED THE ONBOARDING
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
