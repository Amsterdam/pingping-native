import React from 'react';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteStack from './stacks/RouteStack';
import CityPingsStack from './stacks/CityPingsStack';
import AccountStack from './stacks/AccountStack';
import {testIDs} from '../../e2e/modulesTestIDs';
// import KasboekStack from './stacks/KasboekStack';
import {appColors} from '../config/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = ({setLogOut}) => (
  <Tab.Navigator
    initialRouteName="Routes"
    tabBarOptions={{
      labelStyle: {fontFamily: 'Raleway-Regular'},
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
        tabBarLabel: 'Routes',
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
        tabBarTestID: testIDs.ACCOUNT.TAB_BUTTON,
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
      {(props) => <AccountStack {...props} setLogOut={setLogOut} />}
    </Tab.Screen>
  </Tab.Navigator>
);

TabNavigator.propTypes = {
  setLogOut: PropTypes.func.isRequired,
};

export default TabNavigator;
