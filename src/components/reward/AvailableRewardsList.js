import React from 'react';

import {Content} from 'native-base';
import PropTypes from 'prop-types';
import {RefreshControl} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';

import RewardCard from './RewardCard';

import {appColors} from '../../config/colors';
import ContentLayout from '../layout/ContentLayout';
import CardSkeleton from '../skeleton/CardSkeleton';

const AvailableRewardsList = ({
  availableRewards,
  balance,
  navigation,
  refreshing,
  onRefresh,
}) => {
  return (
    <Content
      style={{backgroundColor: appColors.almostNotBlue}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={appColors.primary}
        />
      }>
      <ContentLayout>
        {availableRewards.loading && (
          <AnimatableView animation="fadeIn">
            <CardSkeleton withTitle={false} />
          </AnimatableView>
        )}
        {availableRewards.data && (
          <AnimatableView animation="fadeIn">
            {availableRewards.data.getAvailableRewards.map((reward) => (
              <RewardCard
                navigation={navigation}
                reward={reward}
                key={reward.rewardId}
                balance={balance}
              />
            ))}
          </AnimatableView>
        )}
      </ContentLayout>
    </Content>
  );
};

AvailableRewardsList.propTypes = {
  availableRewards: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default AvailableRewardsList;
