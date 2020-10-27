import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from 'native-base';

const Title = ({
  children = [],
  align = 'left',
  style = {},
  numberOfLines = 0,
  ellipsizeMode = 'tail',
  fontSize = 30,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Heavitas',
      textAlign: align,
      fontSize: fontSize,
    },
  });

  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

Title.propTypes = {
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

Title.defaultProps = {
  align: 'left',
  style: {},
  numberOfLines: 0,
  ellipsizeMode: 'tail',
};

export default Title;
