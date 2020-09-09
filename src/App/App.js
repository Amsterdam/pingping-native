import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useQuery} from '@apollo/client';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';
import PushNotificationService from '../services/PushNotificationService';
import userStatus from '../utils/authUtils';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import Loading from '../components/LoadingComponent';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
    userStatus(refetch, setLoggedIn, setOnboarder);
  }, [refetch]);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [onboarder, setOnboarder] = React.useState(false);

  const {refetch} = useQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'cache-and-network',
  });

  const setLogin = async () => {
    setLoggedIn(true);
  };

  const setLogOut = async () => {
    setLoggedIn(false);
    setOnboarder(true);
  };

  const renderApp = () => {
    if (loggedIn) {
      return (
        <PushNotificationService>
          <TabNavigator setLogOut={setLogOut} />
        </PushNotificationService>
      );
    }
    if (onboarder) {
      return <OnboardingStack setLogin={setLogin} />;
    }
    return <Loading />;
  };

  return <NavigationContainer>{renderApp()}</NavigationContainer>;
}
