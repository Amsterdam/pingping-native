import React from 'react';

import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';

import {appColors} from '../../config/colors';
import Body from '../typography/Body';

const MinimalErrorComponent = ({message}) => {
  return (
    <View animation="bounceIn" delay={200} style={styles.container}>
      <Icon name="alert-octagon" type="Feather" style={styles.icon} />
      <Body variant="b3" style={styles.errorMessage}>
        {message}
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: appColors.danger,
    marginRight: 5,
  },
  errorMessage: {
    color: appColors.danger,
  },
});

MinimalErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MinimalErrorComponent;
