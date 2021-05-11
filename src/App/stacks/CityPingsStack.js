import React from 'react';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import ClaimedRewardModalScreen from '../../screens/ClaimedRewardModalScreen';
import CompletedRouteCelebrationModalScreen from '../../screens/CompletedRouteCelebrationModalScreen';
import RewardDetailModalScreen from '../../screens/RewardDetailModalScreen';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const tabHiddenRoutes = [
  routes.citypingsStack.rewardDetailModalScreen,
  routes.citypingsStack.claimedRewardModalScreen,
];

const CityPingsStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName={routes.citypingsStack.homeScreen}
      headerMode="none">
      <MainStack.Screen
        name={routes.citypingsStack.homeScreen}
        component={CityPingsHomeScreen}
      />
    </MainStack.Navigator>
  );
};

function RootStackScreen({navigation, route}) {
  React.useEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={CityPingsStackScreen} />
      <RootStack.Screen
        name={routes.citypingsStack.rewardDetailModalScreen}
        component={RewardDetailModalScreen}
      />
      <RootStack.Screen
        name={routes.citypingsStack.claimedRewardModalScreen}
        component={ClaimedRewardModalScreen}
      />
      <RootStack.Screen
        name={routes.citypingsStack.completedRouteCelebrationModalScreen}
        component={CompletedRouteCelebrationModalScreen}
      />
    </RootStack.Navigator>
  );
}

RootStackScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default RootStackScreen;
