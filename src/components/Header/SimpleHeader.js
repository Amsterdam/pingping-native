import React from 'react';
import StatusbarColor from './StatusbarColor';
import {Header, Left, View} from 'native-base';
import {setHeaderColor} from '../../lib/colors';
import HeaderBackButton from './HeaderBackButton';

const SimpleHeader = ({navigation, color = 'primary'}) => {
  return (
    <Header
      style={{
        backgroundColor: setHeaderColor(color),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      transparent
      noShadow>
      <StatusbarColor color="white" />

      <HeaderBackButton color={color} navigation={navigation} />
    </Header>
  );
};

export default SimpleHeader;
