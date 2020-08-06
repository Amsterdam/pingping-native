import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import Title from '../components/typography/Title';

const styles = StyleSheet.create({
  accountMainButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 8,
    width: (Dimensions.get('window').width - 100) / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  image: {
    marginBottom: 20,
    maxWidth: 40,
    maxHeight: 40,
  },
  title: {fontSize: 14, textAlign: 'center'},
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
