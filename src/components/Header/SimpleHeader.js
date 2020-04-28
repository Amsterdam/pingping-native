import React from 'react';
import DynamicStatusbar from './DynamicStatusbar';
import {Header} from 'native-base';
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
      <DynamicStatusbar color={color} />
      <HeaderBackButton color={color} navigation={navigation} />
    </Header>
  );
};

export default SimpleHeader;
