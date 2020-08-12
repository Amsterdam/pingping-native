import React from 'react';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import RouteStack from './stacks/RouteStack';
import CityPingsStack from './stacks/CityPingsStack';
import AccountStack from './stacks/AccountStack';
// import KasboekStack from './stacks/KasboekStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appColors} from '../lib/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = ({setLogin}) => (
  <Tab.Navigator
    initialRouteName="Routes"
    tabBarOptions={{
      labelStyle: {fontFamily: 'Raleway'},
      activeTintColor: appColors.primary,
    }}>
    <Tab.Screen
      name="CityPings"
      component={CityPingsStack}
      options={{
        tabBarLabel: 'Citypings',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="price-ribbon"
            type="Entypo"
            style={{color: color, fontSize: size}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Routes"
      component={RouteStack}
      options={{
        tabBarLabel: 'Life Events',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="stars"
            type="MaterialIcons"
            style={{color: color, fontSize: size}}
          />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Kasboek"
      component={KasboekStack}
      options={{
        tabBarLabel: 'Kasboek',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="piggy-bank"
            type="FontAwesome5"
            style={{color: color,fontSize: size}}
            size={size}
          />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Account"
      options={{
        tabBarLabel: 'Gegevens',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="user-circle"
            type="FontAwesome"
            style={{color: color, fontSize: size}}
            size={size}
          />
        ),
      }}>
      {(props) => <AccountStack {...props} setLogin={setLogin} />}
    </Tab.Screen>
  </Tab.Navigator>
);

TabNavigator.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default TabNavigator;
