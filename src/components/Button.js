import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as NativeBaseButton, Text} from 'native-base';
import {appColors, ppBaseColors} from '../config/colors';
import commonStyles from '../config/commonStyles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    ...commonStyles.shadow,
    borderColor: appColors.primary,
  },
  activeButton: {
    backgroundColor: ppBaseColors.PP_ORANGE,
    marginBottom: 20,
  },
  activeText: {
    color: '#fff',
  },
  label: {
    paddingTop: 3,
    fontFamily: 'Heavitas',
    fontSize: 14,
    color: appColors.primary,
  },
});

const Button = ({onPress = () => {}, label = 'no label', active = false}) => {
  return (
    <NativeBaseButton
      style={[styles.button, active && styles.activeButton]}
      rounded
      transparent
      bordered
      onPress={onPress}>
      <Text style={[styles.label, active && styles.activeText]}>{label}</Text>
    </NativeBaseButton>
  );
};

export default Button;
