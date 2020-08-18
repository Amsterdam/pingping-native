import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useMutation} from '@apollo/client';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';
import PushNotificationService from '../services/PushNotificationService';
import _registerDevice from '../utils/registerDevice';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);

  React.useEffect(() => {
    // clear token for testing purposes
    AsyncStorage.clear();
    async function getToken() {
      try {
        const token = await AsyncStorage.getItem('@access_token');
        if (token !== null) {
          SplashScreen.hide(); // hides the splashscreen after bundle load, prevents the flashing splashscreen bug
          setLoggedIn(true);
          return null;
        }
        _registerDevice(registerDevice);
        SplashScreen.hide();
      } catch (e) {
        // error reading value
        console.log(e);
      }
    }
    getToken();
  }, [registerDevice]);
  // here we should check if the user can skip onboarding yes/no
  const setLogin = async () => {
    setLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <PushNotificationService>
          <TabNavigator setLogin={setLoggedIn} />
        </PushNotificationService>
      ) : (
        <OnboardingStack setLogin={setLogin} />
      )}
    </NavigationContainer>
  );
}
