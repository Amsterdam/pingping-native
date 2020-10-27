import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {setHeaderColor} from '../../config/colors';

const DynamicStatusbar = ({color}) => {
  return (
    <StatusBar
      backgroundColor={setHeaderColor(color)}
      barStyle={color === 'primary' ? 'light-content' : 'dark-content'}
    />
  );
};

DynamicStatusbar.propTypes = {
  color: PropTypes.string.isRequired,
};

export default DynamicStatusbar;
