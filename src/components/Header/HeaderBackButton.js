/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Icon} from 'native-base';

const HeaderBackButton = ({navigation, style, color = 'white'}) => {
  return (
    <Button
      transparent
      onPress={() => navigation.goBack()}
      testID="Header-Back-Button">
      <Icon
        name="arrowleft"
        type="AntDesign"
        style={{...style, color: color === 'white' ? '#000' : '#fff'}}
      />
    </Button>
  );
};

export default HeaderBackButton;
