import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon} from 'native-base';
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
  icon: {
    color: '#fff',
    fontSize: 24,
  },
  disabled: {
    ...buttonBase,
    backgroundColor: 'gray',
  },
  deleteButton: {
    backgroundColor: ppBaseColors.PP_PINK,
  },
});

const OnboardingButton = ({
  label,
  disabled = false,
  onPress,
  deleteButton = false,
  iconName = null,
  iconType = null,
}) => {
  return (
    <Button
      style={[
        styles.button,
        disabled && styles.disabled,
        deleteButton && styles.deleteButton,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {iconName && iconType && (
          <Icon name={iconName} type={iconType} style={styles.icon} />
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
    </Button>
  );
};

export default OnboardingButton;
