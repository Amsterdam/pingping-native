import React from 'react';

import {Header} from 'native-base';
import {setHeaderColor} from '../../lib/colors';
import DynamicStatusbar from './DynamicStatusbar';

const SimpleHeader = ({style, children, color = 'primary'}) => {
  return (
    <Header
      style={{backgroundColor: setHeaderColor(color), ...style}}
      transparent
      noShadow>
      <DynamicStatusbar color={color} />
      {children}
    </Header>
  );
};

export default SimpleHeader;
