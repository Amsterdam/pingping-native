import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-native-progress';
import {appColors, ppBaseColors} from '../config/colors';

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
  progress: PropTypes.number,
};
ProgressBar.defaultProps = {
  progress: 0,
};

export default ProgressBar;
