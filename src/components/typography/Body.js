import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

import normalizeValue from '../../helpers/normalizeValue';

/* eslint-disable react-native/no-unused-styles */
const styles = StyleSheet.create({
  base: {
    fontFamily: 'Raleway-Regular',
    lineHeight: normalizeValue(25),
  },
  b1: {fontSize: normalizeValue(20)},
  b2: {fontSize: normalizeValue(18)},
  b3: {fontSize: normalizeValue(16)},
  b4: {fontSize: normalizeValue(14)},
  b5: {fontSize: normalizeValue(12)},
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

/* eslint-enable react-native/no-unused-styles */

const Body = ({
  children = [],
  style = {},
  numberOfLines = 0,
  ellipsizeMode = '',
  variant = 'b1',
  align,
}) => {
  return (
    <Text
      style={[styles.base, styles[variant], styles[align], style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  align: PropTypes.string,
  style: PropTypes.object,
  numberOfLines: PropTypes.number,
  ellipsizeMode: PropTypes.string,
  variant: PropTypes.string,
};

Body.defaultProps = {
  align: 'left',
  style: {},
  numberOfLines: 0,
  ellipsizeMode: 'tail',
  variant: 'b1',
};

export default Body;
