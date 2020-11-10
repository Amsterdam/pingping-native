import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {appColors} from '../../config/colors';
import Card from '../shared/Card';

const RewardCardMini = ({
  navigation,
  reward: {price, description, title, rewardId, cover, status},
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
        cover,
      },
    });
  };

  return (
    <Card
      onPress={doNavigation}
      cover={cover}
      pings={price}
      style={styles.card}
      disabled={status === 'NotAvailable'}
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

RewardCardMini.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
};

export default memo(RewardCardMini);
