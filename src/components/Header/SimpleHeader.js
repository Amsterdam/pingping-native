import React from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, View} from 'native-base';
import {appColors} from '../../lib/colors';
import HeaderBackButton from './HeaderBackButton';

const SimpleHeader = ({navigation, color = 'primary'}) => {
  const headerColor = () => {
    switch (color) {
      case 'primary':
        return appColors.headerColor;

      case 'white':
        return appColors.white;

      default:
        break;
    }
  };
  return (
    <Header
      style={{
        backgroundColor: headerColor(),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      transparent
      noShadow>
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle={color === 'primary' ? 'light-content' : 'dark-content'}
      />

      <HeaderBackButton color={color} navigation={navigation} />
    </Header>
  );
};

export default SimpleHeader;
