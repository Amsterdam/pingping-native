import React from 'react';
import {StatusBar} from 'react-native';
import {Header, Left} from 'native-base';
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
    <Header style={{backgroundColor: headerColor()}} transparent noShadow>
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle="light-content"
      />
      <Left>
        <HeaderBackButton color={color} navigation={navigation} />
      </Left>
    </Header>
  );
};

export default SimpleHeader;
