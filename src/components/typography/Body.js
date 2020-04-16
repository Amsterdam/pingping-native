import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

const Body = ({children, align = 'left', style}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Raleway',
      textAlign: align,
      fontSize: 15,
      lineHeight: 25,
    },
  });
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

export default Body;
