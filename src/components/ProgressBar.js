import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-native-progress';
import {appColors, ppBaseColors} from '../lib/colors';

const ProgressBar = ({progress}) => {
  return (
    <Bar
      progress={progress}
      width={50}
      borderWidth={0}
      height={10}
      color={appColors.secondary}
      unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
      useNativeDriver
      animationType="timing"
    />
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
