import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';

import routes from '../../App/stacks/routes';
import ClaimedTickets from '../../assets/svg/ClaimedTickets';
import {appColors} from '../../config/colors';
import Card from '../shared/Card';
import CityPingsBalance from '../shared/CityPingsBalance';
import Body from '../typography/Body';
import Title from '../typography/Title';

const RewardCard = ({
  navigation,
  reward: {price, description, title, rewardId, cover, status},
  data,
  balance = 0,
  claimed = false,
}) => {
  const doNavigation = async () => {
    if (claimed) {
      return navigation.navigate(
        routes.citypingsStack.claimedRewardModalScreen,
        {
          title,
          cover,
          rewardId,
          description,
          pin: data.pin,
          code: data.code,
          expiryDate: data.expiryDate,
        },
      );
    }
    return navigation.navigate(routes.citypingsStack.rewardDetailModalScreen, {
      price,
      balance,
      description,
      title,
      cover,
      rewardId,
    });
  };

  return (
    <Card
      onPress={doNavigation}
      pings={price}
      cover={cover}
      disabled={status === 'NotAvailable'}>
      <View style={styles.descriptionContainer}>
        <View style={styles.typeContainer}>
          <Body variant="b3" style={styles.rewardType}>
            Reward
          </Body>
          {data?.expiryDate && (
            <Body variant="b3" style={styles.expiryDate}>
              Geldig tot {data.expiryDate}
            </Body>
          )}
        </View>
        <Title variant="h3" style={styles.title}>
          {title}
        </Title>
        <Body variant="b3" numberOfLines={3} ellipsizeMode="tail">
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
    marginBottom: 10,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 10,
  },
  expiryDate: {
    color: appColors.primary,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  illustration: {alignSelf: 'flex-end'},
});

RewardCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
  balance: PropTypes.number,
  claimed: PropTypes.bool,
  data: PropTypes.object,
};

RewardCard.defaultProps = {
  balance: 0,
  claimed: false,
  data: {},
};

export default memo(RewardCard);
