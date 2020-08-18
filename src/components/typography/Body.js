import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Body = ({
  children,
  align = 'left',
  style,
  numberOfLines,
  ellipsizeMode,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Raleway',
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

export default Body;
