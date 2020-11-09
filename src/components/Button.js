import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Button as NativeBaseButton, Text} from 'native-base';
import {appColors, ppBaseColors} from '../config/colors';
import {BORDER_RADIUS, commonStyles} from '../config/commonStyles';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: BORDER_RADIUS,
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

const Button = ({
  onPress = () => {},
  label = 'no label',
  active = false,
  testid,
}) => {
  return (
    <NativeBaseButton
      testID={testid}
      style={[styles.button, active && styles.activeButton]}
      transparent
      bordered
      full
      onPress={onPress}>
      <Text style={[styles.label, active && styles.activeText]}>{label}</Text>
    </NativeBaseButton>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

Button.defaultProps = {
  active: true,
};

export default Button;
