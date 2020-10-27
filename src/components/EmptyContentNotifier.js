import React from 'react';
import {View, StyleSheet} from 'react-native';
import Body from '../components/typography/Body';

const EmptyContentNotifier = ({text}) => {
  return (
    <View style={styles.container}>
      <Body style={styles.text}>{text}</Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
  },
});

export default EmptyContentNotifier;
