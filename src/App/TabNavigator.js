import React from 'react';
import {Icon} from 'native-base';
import KasboekStack from './stacks/KasboekStack';
import RouteStack from './stacks/RouteStack';
import CityPingsStack from './stacks/CityPingsStack';
import AccountStack from './stacks/AccountStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {fontFamily: 'Raleway'},
    }}>
    <Tab.Screen
      name="Routes"
      component={RouteStack}
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
      component={KasboekStack}
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
      component={CityPingsStack}
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
      component={AccountStack}
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
);

export default TabNavigator;
