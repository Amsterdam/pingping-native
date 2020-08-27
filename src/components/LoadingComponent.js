import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  acitivityContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
  },
});

const Loading = () => {
  return (
    <View style={styles.acitivityContainer}>
      <ActivityIndicator size="large" color="#6C63FF" />
    </View>
  );
};

export default Loading;
