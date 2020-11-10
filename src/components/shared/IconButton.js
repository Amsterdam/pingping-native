import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'native-base';
import {appColors} from '../../config/colors';

const IconButton = ({
  iconName,
  iconType,
  onPress,
  disabled = false,
  size = 'L',
}) => {
  let buttonWidth;
  let buttonHeight;
  let iconSize;
  switch (size) {
    case 'L':
      buttonHeight = 38;
      buttonWidth = 38;
      iconSize = 22;
      break;
    case 'M':
      buttonHeight = 28;
      buttonWidth = 28;
      iconSize = 17;
      break;
    case 'S':
      buttonHeight = 22;
      buttonWidth = 22;
      iconSize = 10;
      break;

    default:
      break;
  }
  const styles = StyleSheet.create({
    button: {
      backgroundColor: appColors.headerColor,
      width: buttonWidth,
      height: buttonHeight,
      borderRadius: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: '#fff',
      fontSize: iconSize,
    },
    color: {
      color: appColors.greyedOut,
    },
  });
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress()}
      activeOpacity={0.5}
      disabled={disabled}>
      <Icon
        style={[styles.icon, disabled && styles.disabled]}
        name={iconName}
        type={iconType}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
