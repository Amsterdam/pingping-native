import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import Title from '../components/typography/Title';

const styles = StyleSheet.create({
  accountMainButton: {
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 3,
    width: (Dimensions.get('window').width - 100) / 2,
  },
  image: {
    marginBottom: 10,
  },
  title: {fontSize: 14},
});

const AccountBlockButton = ({button, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.accountMainButton}
      onPress={() => navigation.navigate(button.route)}>
      <Image source={button.image} style={styles.image} />
      <Title style={styles.title}>{button.title}</Title>
    </TouchableOpacity>
  );
};

export default AccountBlockButton;
