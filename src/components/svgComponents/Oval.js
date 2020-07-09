import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const SvgComponent = ({
  left,
  right,
  bottom,
  top,
  zIndex = 0,
  color = '#000',
}) => {
  const styles = StyleSheet.create({
    ovalStyle: {
      position: 'absolute',
      right: right,
      bottom: bottom,
      left: left,
      top: top,
      zIndex: zIndex,
    },
  });
  return (
    <View style={styles.ovalStyle}>
      <Svg width={328} height={328} viewBox="39 39 328 328">
        <Circle
          opacity={0.401}
          fill="none"
          stroke={color}
          strokeWidth={30}
          cx={203}
          cy={203}
          r={149}
        />
      </Svg>
    </View>
  );
};

export default SvgComponent;
