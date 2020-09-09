import React from 'react';
import {StatusBar} from 'react-native';
import {setHeaderColor} from '../../config/colors';

const DynamicStatusbar = ({color}) => {
  return (
    <StatusBar
      backgroundColor={setHeaderColor(color)}
      barStyle={color === 'primary' ? 'light-content' : 'dark-content'}
    />
  );
};

export default DynamicStatusbar;
