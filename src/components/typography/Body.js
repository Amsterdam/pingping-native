import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

const Body = ({children, align = 'left'}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Raleway',
      textAlign: align,
      fontSize: 15,
    },
  });
  return <Text style={styles.text}>{children}</Text>;
};

export default Body;
