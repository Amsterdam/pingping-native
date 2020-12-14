import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../typography/Title';

const AccountBlockButton = ({button, navigation}) => {
  return (
    <TouchableOpacity
      testID={button.testID}
      style={styles.accountMainButton}
      onPress={() => navigation.navigate(button.route)}>
      {button.image}
      <Title style={styles.title}>{button.title}</Title>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  accountMainButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  title: {fontSize: 14, textAlign: 'center'},
});

AccountBlockButton.propTypes = {
  button: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default AccountBlockButton;
