import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import Title from './typography/Title';

const styles = StyleSheet.create({
  goal: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    flex: 1,
    marginBottom: 20,
  },
  goalIcon: {
    marginRight: 20,
    marginBottom: 5,
    fontSize: 40,
  },
  title: {
    fontSize: 15,
  },
});

const KasboekGoalItem = () => {
  return (
    <View style={styles.goal}>
      <Icon
        name="piggy-bank"
        type="FontAwesome5"
        color="#000"
        style={styles.goalIcon}
      />

      <Title style={styles.title}>{'€ 100 verjaardagsfeestje'}</Title>
    </View>
  );
};

export default KasboekGoalItem;
