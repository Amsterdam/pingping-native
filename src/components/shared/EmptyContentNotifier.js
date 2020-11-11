import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Body from '../typography/Body';

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

EmptyContentNotifier.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EmptyContentNotifier;
