import React from 'react';

import {Header} from 'native-base';
import {setHeaderColor} from '../../lib/colors';
import StatusbarColor from './StatusbarColor';

const SimpleHeader = ({style, children, color = 'primary'}) => {
  return (
    <Header
      style={{backgroundColor: setHeaderColor(color), ...style}}
      transparent
      noShadow>
      <StatusbarColor color={color} />
      {children}
    </Header>
  );
};

export default SimpleHeader;
