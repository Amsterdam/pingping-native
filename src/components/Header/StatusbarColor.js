import React from 'react';
import {StatusBar} from 'react-native';
import {setHeaderColor} from '../../lib/colors';

const StatusbarColor = ({color}) => {
  console.log(color);
  return (
    <StatusBar
      backgroundColor={setHeaderColor(color)}
      barStyle={color === 'primary' ? 'light-content' : 'dark-content'}
    />
  );
};

export default StatusbarColor;
