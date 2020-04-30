/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon} from 'native-base';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from '../screens/LandingScreen';
import WhatIsItScreen from '../screens/WhatIsItScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import ImportRoutesScreen from '../screens/ImportRouteScreen';
import QuestionScreen from '../screens/QuestionScreen';
import KasboekHomeScreen from '../screens/KasboekHomeScreen';
import KasboekAddGoalScreen from '../screens/KasboekAddGoalScreen';
import RouteHomeScreen from '../screens/RouteHomeScreen';
import YourRouteScreen from '../screens/YourRouteScreen';
import TaskScreen from '../screens/TaskScreen';
import TipScreen from '../screens/TipScreen';
import CityPingsHomeScreen from '../screens/CityPingsHomeScreen';
import YourPerformanceScreen from '../screens/YourPerformanceScreen';
import RewardScreen from '../screens/RewardScreen';
import ClaimRewardScreen from '../screens/ClaimRewardScreen';
import AccountHomeScreen from '../screens/AccountHomeScreen';
import DeleteDataScreen from '../screens/DeleteDataScreen';
import ExportDataScreen from '../screens/ExportDataScreen';
import CompletedQuestionsScreen from '../screens/CompletedQuestionsScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const InitialStackNew = () => (
  <Stack.Navigator initialRouteName="Landing" headerMode="none">
    <Stack.Screen name="Landing" component={LandingScreen} />
    <Stack.Screen name="WhatIsIt" component={WhatIsItScreen} />
    <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="ImportRoutes" component={ImportRoutesScreen} />
    <Stack.Screen name="Question" component={QuestionScreen} />
    <Stack.Screen
      name="CompletedQuestions"
      component={CompletedQuestionsScreen}
    />
  </Stack.Navigator>
);

const KasboekStackNew = () => (
  <Stack.Navigator initialRouteName="KasboekHomeScreen" headerMode="none">
    <Stack.Screen name="KasboekHome" component={KasboekHomeScreen} />
    <Stack.Screen name="KasboekAddGoal" component={KasboekAddGoalScreen} />
  </Stack.Navigator>
);

const RouteStackNew = () => (
  <Stack.Navigator initialRouteName="RouteHome" headerMode="none">
    <Stack.Screen name="RouteHome" component={RouteHomeScreen} />
    <Stack.Screen name="YourRoute" component={YourRouteScreen} />
    <Stack.Screen name="Task" component={TaskScreen} />
    <Stack.Screen name="Tip" component={TipScreen} />
  </Stack.Navigator>
);

const CityPingsStackNew = () => (
  <Stack.Navigator initialRouteName="CityPingsHomeScreen" headerMode="none">
    <Stack.Screen name="CityPingsHome" component={CityPingsHomeScreen} />
    <Stack.Screen name="YourPerformance" component={YourPerformanceScreen} />
    <Stack.Screen name="Reward" component={RewardScreen} />
    <Stack.Screen name="ClaimReward" component={ClaimRewardScreen} />
  </Stack.Navigator>
);

const AccountStackNew = () => (
  <Stack.Navigator initialRouteName="AccountHome" headerMode="none">
    <Stack.Screen name="AccountHome" component={AccountHomeScreen} />
    <Stack.Screen name="ViewPrivacy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="DeleteData" component={DeleteDataScreen} />
    <Stack.Screen name="ExportData" component={ExportDataScreen} />
  </Stack.Navigator>
);

export default function App() {
  SplashScreen.hide(); // hides the splashscreen after bundle load, prevents the flashing splashscreen bug
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontFamily: 'Raleway'},
          }}>
          <Tab.Screen
            name="Routes"
            component={RouteStackNew}
            options={{
              tabBarLabel: 'Je Routes',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="home"
                  type="AntDesign"
                  style={{color: color}}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Kasboek"
            component={KasboekStackNew}
            options={{
              tabBarLabel: 'Kasboek',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="piggy-bank"
                  type="FontAwesome5"
                  style={{color: color}}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CityPings"
            component={CityPingsStackNew}
            options={{
              tabBarLabel: 'Citypings',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="qrcode"
                  type="AntDesign"
                  style={{color: color}}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountStackNew}
            options={{
              tabBarLabel: 'Gegevens',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="dots-vertical"
                  type="MaterialCommunityIcons"
                  style={{color: color}}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <InitialStackNew />
      )}
    </NavigationContainer>
  );
}
