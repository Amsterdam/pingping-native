import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';
import {appColors} from '../lib/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: appColors.primary,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    fontSize: 24,
  },
});

const FloatingActionButton = ({onPress}) => {
  return (
    <Button rounded style={styles.button} onPress={onPress}>
      <Icon name="lightbulb-o" type="FontAwesome" style={styles.icon} />
    </Button>
  );
};

export default FloatingActionButton;
