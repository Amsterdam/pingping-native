import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Body = ({
  children = [],
  align = 'left',
  style = {},
  numberOfLines = 0,
  ellipsizeMode = '',
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Raleway-Regular',
      textAlign: align,
      fontSize: 15,
      lineHeight: 25,
    },
  });
  return (
    <Text
      style={{...styles.text, ...style}}
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
};

Body.defaultProps = {
  align: 'left',
  style: {},
  numberOfLines: 0,
  ellipsizeMode: 'tail',
};

export default Body;
