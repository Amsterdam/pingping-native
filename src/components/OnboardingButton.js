import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';
import {appColors} from '../lib/colors';

const buttonBase = {
  backgroundColor: appColors.primary,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  button: {...buttonBase},
  label: {
    paddingTop: 3,
    fontFamily: 'Heavitas',
    fontSize: 14,
    color: appColors.white,
  },
});

const OnboardingButton = ({label, disabled, onPress}) => {
  return (
    <Button style={styles.button} disabled={disabled} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Button>
  );
};

export default OnboardingButton;
