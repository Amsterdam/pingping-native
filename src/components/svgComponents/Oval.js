import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const SvgComponent = props => {
  const styles = StyleSheet.create({
    ovalStyle: {
      position: 'absolute',
      right: props.right,
      bottom: props.bottom,
      left: props.left,
      top: props.top,
      zIndex: props.zIndex,
    },
  });
  return (
    <View style={styles.ovalStyle}>
      <Svg width={328} height={328} viewBox="39 39 328 328">
        <Circle
          opacity={0.401}
          fill="none"
          stroke={props.color}
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
