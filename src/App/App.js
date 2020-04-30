import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import InitialStack from './stacks/InitialStack';
import TabNavigator from './TabNavigator';

export default function App() {
  SplashScreen.hide(); // hides the splashscreen after bundle load, prevents the flashing splashscreen bug
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <InitialStack />}
    </NavigationContainer>
  );
}
