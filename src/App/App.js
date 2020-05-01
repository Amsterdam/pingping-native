import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import InitialStack from './stacks/InitialStack';
import TabNavigator from './TabNavigator';

export default function App() {
  SplashScreen.hide(); // hides the splashscreen after bundle load, prevents the flashing splashscreen bug

  const [loggedIn, setLoggedIn] = React.useState(false);

  // here we should check if the user can skip onboarding yes/no
  const setLogin = () => {
    setLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <InitialStack setLogin={setLogin} />}
    </NavigationContainer>
  );
}
