import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';
import {appColors, ppBaseColors} from '../lib/colors';

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
  disabled: {
    ...buttonBase,
    backgroundColor: 'gray',
  },
  deleteButton: {
    backgroundColor: ppBaseColors.PP_PINK,
  },
});

const OnboardingButton = ({label, disabled, onPress, deleteButton = false}) => {
  return (
    <Button
      style={[
        styles.button,
        !disabled && styles.disabled,
        deleteButton && styles.deleteButton,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Button>
  );
};

export default OnboardingButton;
