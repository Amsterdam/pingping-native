import React from 'react';
import {View, StyleSheet} from 'react-native';
import Oval from '../svgComponents/Oval';
import {appColors} from '../../lib/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    position: 'relative',
  },
});

const SimpleHeader = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

export default SimpleHeader;
