import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {ppBaseColors} from '../../config/colors';
import {BASE_URL} from '../../config/initialSettings';

const RewardBlock = ({reward}) => {
  return (
    <View
      style={
        reward.status === 'Earned'
          ? styles.rewardBlock
          : {...styles.rewardBlock, ...styles.disabled}
      }>
      <Image source={{uri: `${BASE_URL}${reward.icon}`}} style={styles.image} />
      <Title style={styles.title}>{reward.title}</Title>
      <Body style={styles.points}>{reward.points} punten</Body>
    </View>
  );
};

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
RewardBlock.propTypes = {
  reward: PropTypes.object.isRequired,
};

export default RewardBlock;
