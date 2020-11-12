import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from 'native-base';
import {appColors, ppBaseColors} from '../../config/colors';

const RoundedButton = ({
  label = '',
  disabled = false,
  onPress = () => {},
  deleteButton = false,
  iconName = null,
  iconType = null,
  style = {},
  loading = false,
  testid = '',
  full = false,
}) => {
  return (
    <Button
      style={[
        styles.button,
        disabled && styles.disabled,
        deleteButton && styles.deleteButton,
        style,
      ]}
      full={full}
      testID={testid}
      disabled={disabled}
      onPress={onPress}>
      <View style={styles.innerContainer}>
        {loading ? (
          <ActivityIndicator color={appColors.danger} />
        ) : (
          <React.Fragment>
            {iconName && iconType && (
              <Icon name={iconName} type={iconType} style={styles.icon} />
            )}
            <Text style={styles.label}>{label}</Text>
          </React.Fragment>
        )}
      </View>
    </Button>
  );
};

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
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RoundedButton;