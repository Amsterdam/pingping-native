import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {ppLogoColors} from '../lib/colors';

const LINE_MARGIN = 5;
const LINE_HEIGHT = 3;

const styles = StyleSheet.create({
  lineContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
  },
  color1: {
    backgroundColor: ppLogoColors.pp1,
    height: LINE_HEIGHT,
    flex: 1,
    margin: LINE_MARGIN,
  },
  color2: {
    backgroundColor: ppLogoColors.pp2,
    height: LINE_HEIGHT,
    flex: 1,
    margin: LINE_MARGIN,
  },
  color3: {
    backgroundColor: ppLogoColors.pp3,
    height: LINE_HEIGHT,
    flex: 1,
    margin: LINE_MARGIN,
  },
});

const ColoredLines = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.color1} />
      <View style={styles.color2} />
      <View style={styles.color3} />
    </View>
  );
};

export default ColoredLines;
