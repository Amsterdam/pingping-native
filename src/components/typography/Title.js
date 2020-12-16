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
  selectable = false,
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
      ellipsizeMode={ellipsizeMode}
      selectable={selectable}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  align: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  numberOfLines: PropTypes.number,
  ellipsizeMode: PropTypes.string,
  selectable: PropTypes.bool,
};

Title.defaultProps = {
  selectable: false,
  align: 'left',
  style: {},
  numberOfLines: 0,
  ellipsizeMode: 'tail',
};

export default Title;
