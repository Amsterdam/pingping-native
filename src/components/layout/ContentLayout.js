import React, {Children} from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});

const SimpleHeader = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

export default SimpleHeader;
