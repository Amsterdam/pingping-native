import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as NativeBaseButton, Text} from 'native-base';
import {appColors} from '../lib/colors';

const buttonBase = {
  alignSelf: 'stretch',
  justifyContent: 'center',
  marginBottom: 5,
};

const Button = ({
  rounded = false,
  transparent = false,
  bordered = false,
  disabled = false,
  onPress = () => {},
  style = {},
  labelStyle = {},
  color = 'primary',
  label = 'no label',
}) => {
  const styles = StyleSheet.create({
    button: {...buttonBase},
    label: {
      fontFamily: 'Raleway',
      fontSize: 18,
    },
    transparentButton: {
      paddingBottom: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    transparentButtonLabel: {
      fontSize: 15,
      color: '#000',
    },
    disabled: {
      ...buttonBase,
      backgroundColor: 'gray',
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });

  const generateStyles = () => {
    if (transparent) {
      styles.button = {
        ...styles.transparentButton,
        ...styles.button,
        ...style,
      };
      styles.label = {
        textAlign: 'center',
        ...styles.transparentButtonLabel,
        ...labelStyle,
      };
      styles.disabled = {
        ...styles.transparentButton,
        ...styles.button,
        ...styles.disabled,
        ...style,
        backgroundColor: transparent,
      };
      styles.disabledLabel = {
        ...labelStyle,
        color: '#cccccc',
      };
      return;
    }
    switch (color) {
      case 'primary':
        styles.button = {
          backgroundColor: appColors.primaryColor,
          borderColor: bordered && appColors.primaryColor,
          ...styles.button,
          ...style,
        };
        styles.label = {
          ...styles.label,
          ...labelStyle,
          color: bordered ? appColors.primaryColor : '#fff',
        };
        break;
      case 'white':
        styles.button = {
          backgroundColor: '#fff',
          borderColor: bordered && '#cecece',
          ...styles.button,
          ...styles.shadow,
          ...style,
        };
        styles.label = {
          ...styles.label,
          ...labelStyle,
          color: '#000',
        };
        break;
      default:
        break;
    }
  };

  generateStyles();

  return (
    <NativeBaseButton
      style={!disabled ? styles.button : styles.disabled}
      rounded={rounded}
      transparent={transparent}
      bordered={bordered}
      disabled={disabled}
      onPress={onPress}>
      <Text style={disabled ? styles.disabledLabel : styles.label}>
        {label}
      </Text>
    </NativeBaseButton>
  );
};

export default Button;
