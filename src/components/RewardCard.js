import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Title from './typography/Title';
import Body from './typography/Body';
import CityPingsBalance from './CityPingsBalance';
import Card from './Card';
import {appColors} from '../config/colors';

const RewardCard = ({
  navigation,
  reward: {price, description, title, rewardId, imageUrl},
  balance = 0,
}) => {
  const doNavigation = () => {
    navigation.navigate('RewardDetailModal', {
      price,
      balance,
      description,
      title,
      imageUrl,
      rewardId,
    });
  };

  return (
    <Card onPress={doNavigation} pings={price} imageUrl={imageUrl}>
      <View style={styles.descriptionContainer}>
        <Body style={styles.rewardType}>Reward</Body>
        <Title style={styles.description}>{title}</Title>
        <Body numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Body>
        <CityPingsBalance price={price} balance={balance} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 20,
  },
  description: {
    fontSize: 20,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 5,
  },
});

RewardCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
  balance: PropTypes.number,
};

RewardCard.defaultProps = {
  balance: 0,
};

export default memo(RewardCard);
