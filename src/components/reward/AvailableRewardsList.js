import React from 'react';
import {RefreshControl} from 'react-native';
import {Content} from 'native-base';
import CardSkeleton from '../skeleton/CardSkeleton';
import {View as AnimatableView} from 'react-native-animatable';
import ContentLayout from '../layout/ContentLayout';
import RewardCard from './RewardCard';
import {appColors} from '../../config/colors';

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

export default AvailableRewardsList;
