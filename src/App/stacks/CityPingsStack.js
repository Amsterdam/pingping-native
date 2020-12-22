import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CityPingsHomeScreen from '../../screens/CityPingsHomeScreen';
import RewardDetailModalScreen from '../../screens/RewardDetailModalScreen';
import CompletedRouteCelebrationModalScreen from '../../screens/CompletedRouteCelebrationModalScreen';
import ClaimedRewardModalScreen from '../../screens/ClaimedRewardModalScreen';
import routes from './routes';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const tabHiddenRoutes = [
  routes.citypingsStack.rewardDetailModalScreen,
  routes.citypingsStack.claimedRewardModalScreen,
];

const CityPingsStackScreen = ({navigation, route}) => {
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
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={CityPingsStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={routes.citypingsStack.rewardDetailModalScreen}
        component={RewardDetailModalScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={routes.citypingsStack.claimedRewardModalScreen}
        component={ClaimedRewardModalScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={routes.citypingsStack.completedRouteCelebrationModalScreen}
        component={CompletedRouteCelebrationModalScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
