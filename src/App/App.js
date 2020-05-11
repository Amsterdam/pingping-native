import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useMutation} from '@apollo/client';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import InitialStack from './stacks/InitialStack';
import TabNavigator from './TabNavigator';
import DeviceInfo from 'react-native-device-info';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);

  React.useEffect(() => {
    AsyncStorage.clear();
    async function getToken() {
      try {
        const token = await AsyncStorage.getItem('@access_token');
        if (token !== null) {
          SplashScreen.hide(); // hides the splashscreen after bundle load, prevents the flashing splashscreen bug
          setLoggedIn(true);
          return null;
        }
        register();
        SplashScreen.hide();
      } catch (e) {
        // error reading value
      }
    }
    async function register() {
      try {
        const deviceId = DeviceInfo.getUniqueId();
        const deviceType = DeviceInfo.getDeviceType();
        const deviceOs = await DeviceInfo.getSystemName();
        const {
          data: {
            registerDevice: {
              accessToken,
              user: {id},
            },
          },
        } = await registerDevice({
          variables: {
            deviceId,
            deviceType,
            deviceOs,
          },
        });
        await AsyncStorage.setItem('@access_token', accessToken);
        const items = [['@access_token', accessToken], ['@userId', id]];
        AsyncStorage.multiSet(items);
      } catch (error) {
        console.log(error);
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
      {loggedIn ? <TabNavigator /> : <InitialStack setLogin={setLogin} />}
    </NavigationContainer>
  );
}
