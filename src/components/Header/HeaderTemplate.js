import React from 'react';
import {StatusBar} from 'react-native';
import {Header} from 'native-base';
import {appColors} from '../../lib/colors';

const SimpleHeader = ({
  style,
  children,
  color = 'primary',
  statusBarColor = 'light-content',
}) => {
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
        barStyle={statusBarColor}
      />
      {children}
    </Header>
  );
};

export default SimpleHeader;
