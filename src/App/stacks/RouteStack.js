import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import RouteHomeScreen from '../../screens/RouteHomeScreen';
import RouteDetailsScreen from '../../screens/RouteDetailsScreen';
import RouteFeedbackScreen from '../../screens/RouteFeedbackScreen';
import TaskScreen from '../../screens/TaskScreen';
import TipScreen from '../../screens/TipScreen';
import routes from './routes';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const tabHiddenRoutes = [
  routes.routeStack.routeFeedbackScreen,
  routes.routeStack.taskScreen,
  routes.routeStack.routeDetailsScreen,
  routes.routeStack.tipScreen,
];

const RouteStack = ({navigation, route}) => {
  return (
    <MainStack.Navigator
      initialRouteName={routes.citypingsStack.homeScreen}
      headerMode="none">
      <MainStack.Screen
        name={routes.routeStack.homeScreen}
        component={RouteHomeScreen}
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
      <RootStack.Screen name="Main" component={RouteStack} />
      <RootStack.Screen
        name={routes.routeStack.routeFeedbackScreen}
        component={RouteFeedbackScreen}
      />
      <RootStack.Screen
        name={routes.routeStack.taskScreen}
        component={TaskScreen}
      />
      <MainStack.Screen
        name={routes.routeStack.routeDetailsScreen}
        component={RouteDetailsScreen}
      />
      <RootStack.Screen
        name={routes.routeStack.tipScreen}
        component={TipScreen}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
