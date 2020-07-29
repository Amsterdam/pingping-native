import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {ppBaseColors} from '../lib/colors';

const styles = StyleSheet.create({
  rewardBlock: {
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    margin: 8,
    width: (Dimensions.get('window').width - 100) / 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  disabled: {
    opacity: 0.4,
  },
  image: {
    marginBottom: 10,
  },
  title: {fontSize: 12},
  points: {color: ppBaseColors.PP_GOLD},
});

const RewardBlock = ({reward}) => {
  return (
    <View
      style={
        reward.acquired
          ? styles.rewardBlock
          : {...styles.rewardBlock, ...styles.disabled}
      }>
      <Image source={reward.image} style={styles.image} />
      <Title style={styles.title}>{reward.title}</Title>
      <Body style={styles.points}>{reward.points} punten</Body>
    </View>
  );
};

export default RewardBlock;
