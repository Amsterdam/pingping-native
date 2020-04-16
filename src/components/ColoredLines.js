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
  line: {
    height: LINE_HEIGHT,
    flex: 1,
    margin: LINE_MARGIN,
  },
});

const ColoredLines = () => {
  return (
    <View style={styles.lineContainer}>
      {ppLogoColors.map((color, i) => (
        <View
          key={color}
          style={{...styles.line, backgroundColor: ppLogoColors[i]}}
        />
      ))}
    </View>
  );
};

export default ColoredLines;
