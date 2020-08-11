import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import Title from './typography/Title';
import {appColors} from '../lib/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
  icon: {
    color: '#fff',
    fontSize: 14,
  },
});

const TipsChip = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TipScreen')}>
      <Icon
        name="lightbulb-on-outline"
        type="MaterialCommunityIcons"
        style={styles.icon}
      />
      <Title style={styles.title}>Tips</Title>
    </TouchableOpacity>
  );
};

export default TipsChip;
