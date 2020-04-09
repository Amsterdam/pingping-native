import React, {Children} from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, Button, Icon} from 'native-base';
import {appColors} from '../../lib/colors';

const SimpleHeader = ({navigation, style, children, color = 'primary'}) => {
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
      style={{backgroundColor: headerColor(), ...style}}
      transparent
      noShadow>
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle="light-content"
      />
      {children}
    </Header>
  );
};

export default SimpleHeader;
