import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import ProgressBar from './ProgressBar';
import Trophy from '../assets/svg/Trohpy';

const TrophyOrProgress = ({progress}) => {
  if (progress === 1) {
    return (
      <Animatable.View animation="bounceIn">
        <Trophy />
      </Animatable.View>
    );
  }
  return <ProgressBar progress={progress} />;
};

TrophyOrProgress.propTypes = {
  progress: PropTypes.number,
};

TrophyOrProgress.defaultProps = {
  progress: 0,
};

export default TrophyOrProgress;
