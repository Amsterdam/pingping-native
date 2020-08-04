import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button} from 'native-base';
import colors, {appColors} from '../lib/colors';

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
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 0,
      paddingTop: 0,
    },
    icon: {
      color: '#fff',
      fontSize: iconSize,
      paddingTop: 0,
      marginTop: 1,
      marginLeft: 1,
    },
    color: {
      color: appColors.greyedOut,
    },
  });
  return (
    <Button
      iconLeft
      style={styles.button}
      rounded
      onPress={() => onPress()}
      disabled={disabled}>
      <Icon
        style={[styles.icon, disabled && styles.disabled]}
        name={iconName}
        type={iconType}
      />
    </Button>
  );
};

export default IconButton;
