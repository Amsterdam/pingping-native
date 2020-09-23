import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {useQuery} from '@apollo/client';
import OnboardingStack from './stacks/OnboardingStack';
import TabNavigator from './TabNavigator';
import PushNotificationService from '../services/PushNotificationService';
import userStatus from '../helpers/autHelper';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import Loading from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';

export default function App() {
  React.useEffect(() => {
    RNBootSplash.hide({duration: 250});
    NetInfo.addEventListener((netInfoState) => {
      console.log(netInfoState); // don't forget to remove this
      // here we check if there is an internect connection
      // if we have an internet connection we will move with executing functions
      // otherwise we present the user with a no connections screen
      if (netInfoState.isConnected && netInfoState.isInternetReachable) {
        setConnected(true);
        userStatus(refetch, setLoggedIn, setOnboarder); // this function controls the AuthState of the app, onboarder/loggedin
      }
    });
  }, [refetch]);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [onboarder, setOnboarder] = React.useState(false);
  const [connected, setConnected] = React.useState(false);

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
    if (!connected) {
      return (
        <ErrorComponent
          functionToRetry={refetch}
          error="connectionProblem"
          label="Probeer opnieuw"
          onPress={() => refetch()}
        />
      );
    }
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
