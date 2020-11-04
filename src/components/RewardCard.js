import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useMutation} from '@apollo/client';
import {View as AnimatableView} from 'react-native-animatable';
import Title from './typography/Title';
import Body from './typography/Body';
import CityPingsBalance from './CityPingsBalance';
import Card from './Card';
import {appColors} from '../config/colors';
import ClaimedTickets from '../assets/svg/ClaimedTickets';
import CLAIMED_REWARD_MODAL from '../apollo/Mutation/Local/claimedRewardModal';

const RewardCard = ({
  navigation,
  reward: {price, description, title, rewardId, imageUrl, thumbnailUrl, status},
  data,
  balance = 0,
  claimed = false,
}) => {
  const [claimedRewardModal] = useMutation(CLAIMED_REWARD_MODAL);
  const doNavigation = async () => {
    if (claimed) {
      await claimedRewardModal({
        variables: {
          claimedRewardModalOpen: true,
          data,
          title,
          imageUrl,
          rewardId,
          description,
        },
      });
      return;
    }
    navigation.navigate('RewardDetailModalScreen', {
      price,
      balance,
      description,
      title,
      imageUrl,
      rewardId,
      thumbnailUrl,
    });
  };
  return (
    <Card
      onPress={doNavigation}
      pings={price}
      imageUrl={imageUrl}
      thumbnailUrl={thumbnailUrl}
      disabled={status === 'NotAvailable'}>
      <View style={styles.descriptionContainer}>
        <Body style={styles.rewardType}>Reward</Body>
        <Title style={styles.title}>{title}</Title>
        <Body numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Body>

        {claimed ? (
          <AnimatableView
            animation="bounceIn"
            delay={200}
            style={styles.illustration}>
            <ClaimedTickets />
          </AnimatableView>
        ) : (
          <CityPingsBalance price={price} balance={balance} />
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 10,
  },
  illustration: {alignSelf: 'flex-end'},
});

RewardCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
  balance: PropTypes.number,
  claimed: PropTypes.bool,
};

RewardCard.defaultProps = {
  balance: 0,
  claimed: false,
};

export default memo(RewardCard);
