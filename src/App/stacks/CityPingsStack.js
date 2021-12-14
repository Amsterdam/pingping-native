import React from 'react';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import routes from './routes';

import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import ClaimedRewardModalScreen from '../../screens/ClaimedRewardModalScreen';
import CompletedRouteCelebrationModalScreen from '../../screens/CompletedRouteCelebrationModalScreen';
import RewardDetailModalScreen from '../../screens/RewardDetailModalScreen';

const RootStack = createStackNavigator();

const tabHiddenRoutes = [
  routes.citypingsStack.rewardDetailModalScreen,
  routes.citypingsStack.claimedRewardModalScreen,
];

function RootStackScreen({navigation, route}) {
  React.useEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Group>
        <RootStack.Screen
          name={routes.citypingsStack.homeScreen}
          component={CityPingsHomeScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
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
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

RootStackScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default RootStackScreen;
