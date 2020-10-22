import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Title from './typography/Title';
import Body from './typography/Body';
import {appColors} from '../config/colors';
import Card from './Card';

const RewardCard = ({
  navigation,
  reward: {price, description, title, rewardId, imageUrl, thumbnailUrl},
  balance,
}) => {
  const doNavigation = () => {
    navigation.navigate('CityPings', {
      screen: 'RewardDetailModalScreen',
      initial: false,
      params: {
        price,
        balance,
        description,
        title,
        rewardId,
        imageUrl,
      },
    });
  };

  return (
    <Card
      onPress={doNavigation}
      imageUrl={imageUrl}
      pings={price}
      thumbnailUrl={thumbnailUrl}
      style={styles.card}
      mini>
      <View style={styles.descriptionContainer}>
        <Title style={styles.cardFont} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Title>
        <Body numberOfLines={2} ellipsizeMode="tail" style={styles.cardFont}>
          {description}
        </Body>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
  },
  cardFont: {
    fontSize: 12,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 5,
  },
});

RewardCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
};

export default memo(RewardCard);
