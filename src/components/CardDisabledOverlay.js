import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {commonStyles} from '../config/commonStyles';
import Title from './typography/Title';

const CardDisabledOverlay = ({disabledString = ''}) => {
  return (
    <View style={styles.disabledStyle}>
      <View style={styles.disabledBox}>
        <Title style={styles.disabledText}>{disabledString}</Title>
      </View>
    </View>
  );
};

const styles = {
  disabledStyle: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  disabledText: {
    fontSize: 18,
    textAlign: 'center',
  },
  disabledBox: {
    ...commonStyles.shadow,
    borderRadius: commonStyles.borderRadius,
    backgroundColor: '#fff',
    padding: 20,
    width: '70%',
  },
};

CardDisabledOverlay.propTypes = {
  disabledString: PropTypes.string.isRequired,
};

export default CardDisabledOverlay;
