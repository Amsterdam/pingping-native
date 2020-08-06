import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Title from './typography/Title';
import {appColors} from '../lib/colors';

const CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  circleStepIndicator: {
    backgroundColor: appColors.secondary,
    height: CIRCLE_RADIUS,
    width: CIRCLE_RADIUS,
    borderRadius: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  label: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 16,
  },
  background: {
    backgroundColor: 'rgba(191, 233, 238, 0.3)',
  },
});

const RouteTaskRow = ({step, index}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, index % 2 === 0 && styles.background]}>
        <View style={styles.circleStepIndicator}>
          <Title style={styles.label}>{index}</Title>
        </View>
        <Title style={styles.title}>{step}</Title>
      </View>
    </TouchableOpacity>
  );
};

export default RouteTaskRow;
