import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {ppBaseColors} from '../../config/colors';

const StarRating = ({
  numberActive = 0,
  numberOfStars = 0,
  onRate = () => {},
}) => {
  const starElements = [];
  for (let index = 0; index < numberOfStars; index++) {
    const active = index < numberActive;
    starElements.push(
      <TouchableOpacity
        style={styles.button}
        onPress={onRate(index + 1)}
        activeOpacity={0.5}
        key={`${index}-star`}>
        <Icon
          style={[styles.icon, active && styles.activeIcon]}
          name={active ? 'star' : 'staro'}
          type={'AntDesign'}
        />
      </TouchableOpacity>,
    );
  }
  return starElements;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
  activeIcon: {
    color: ppBaseColors.PP_GOLD,
  },
});

export default StarRating;
