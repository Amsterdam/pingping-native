import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

const Title = ({
  children,
  align = 'left',
  style,
  numberOfLines,
  ellipsizeMode,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Heavitas',
      textAlign: align,
      fontSize: 30,
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

export default Title;
