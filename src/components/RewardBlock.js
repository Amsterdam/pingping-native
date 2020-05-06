import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {ppBaseColors} from '../lib/colors';

const styles = StyleSheet.create({
  rewardBlock: {
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 3,
    width: (Dimensions.get('window').width - 100) / 2,
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
