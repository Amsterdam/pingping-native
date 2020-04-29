/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Icon} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
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

const navOptionHandler = navigation => ({
  headerShown: false,
});

const InitialStack = createStackNavigator({
  Landing: {screen: LandingScreen, navigationOptions: navOptionHandler},
  WhatIsIt: {
    screen: WhatIsItScreen,
    navigationOptions: navOptionHandler,
  },
  Privacy: {
    screen: PrivacyPolicyScreen,
    navigationOptions: navOptionHandler,
  },
  ImportRoutes: {
    screen: ImportRoutesScreen,
    navigationOptions: navOptionHandler,
  },
  Question: {
    screen: QuestionScreen,
    navigationOptions: navOptionHandler,
  },
  CompletedQuestions: {
    screen: CompletedQuestionsScreen,
    navigationOptions: navOptionHandler,
  },
});

const KasboekStack = createStackNavigator({
  KasboekHome: {screen: KasboekHomeScreen, navigationOptions: navOptionHandler},
  KasboekAddGoal: {
    screen: KasboekAddGoalScreen,
    navigationOptions: navOptionHandler,
  },
});

const RouteStack = createStackNavigator({
  RouteHome: {screen: RouteHomeScreen, navigationOptions: navOptionHandler},
  YourRoute: {
    screen: YourRouteScreen,
    navigationOptions: navOptionHandler,
  },
  Task: {
    screen: TaskScreen,
    navigationOptions: navOptionHandler,
  },
  Tip: {
    screen: TipScreen,
    navigationOptions: navOptionHandler,
  },
  navigationOptions: navOptionHandler,
});

const CityPingsStack = createStackNavigator({
  CityPingsHome: {
    screen: CityPingsHomeScreen,
    navigationOptions: navOptionHandler,
  },
  YourPerformance: {
    screen: YourPerformanceScreen,
    navigationOptions: navOptionHandler,
  },
  Reward: {
    screen: RewardScreen,
    navigationOptions: navOptionHandler,
  },
  ClaimReward: {
    screen: ClaimRewardScreen,
  },
  navigationOptions: navOptionHandler,
});

const AccountStack = createStackNavigator({
  AccountHome: {
    screen: AccountHomeScreen,
    navigationOptions: navOptionHandler,
  },
  ViewPrivacy: {
    screen: PrivacyPolicyScreen,
    navigationOptions: navOptionHandler,
  },
  DeleteData: {
    screen: DeleteDataScreen,
    navigationOptions: navOptionHandler,
  },
  ExportData: {
    screen: ExportDataScreen,
    navigationOptions: navOptionHandler,
  },
});

const MainTabs = createBottomTabNavigator({
  Kasboek: {
    screen: KasboekStack,
    navigationOptions: {
      tabBarLabel: 'Kasboek',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="home"
          style={{color: tintColor, paddingTop: 5}}
          type="AntDesign"
        />
      ),
    },
  },
  Routes: {
    screen: RouteStack,
    navigationOptions: {
      tabBarLabel: 'Je Routes',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="route"
          style={{color: tintColor, paddingTop: 5}}
          type="FontAwesome5"
        />
      ),
    },
  },
  CityPings: {
    screen: CityPingsStack,
    navigationOptions: {
      tabBarLabel: 'City Pings',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="qrcode"
          style={{color: tintColor, paddingTop: 5}}
          type="AntDesign"
        />
      ),
    },
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      tabBarLabel: 'Gegevens',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name="dots-vertical"
          style={{color: tintColor, paddingTop: 5}}
          type="MaterialCommunityIcons"
        />
      ),
    },
  },
});

const MainApp = createSwitchNavigator(
  {
    app: MainTabs,
    initial: InitialStack,
  },
  {initialRouteName: 'app'},
);

export default createAppContainer(MainApp);
