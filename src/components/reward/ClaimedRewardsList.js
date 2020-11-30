import React from 'react';
import {RefreshControl, StyleSheet} from 'react-native';
import {Content} from 'native-base';
import {appColors} from '../../config/colors';
import ContentLayout from '../layout/ContentLayout';
import RewardCard from './RewardCard';

const ClaimedRewardsList = ({
  claimedRewards,
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
        {claimedRewards.map((claimedReward) => (
          <RewardCard
            navigation={navigation}
            reward={claimedReward.reward}
            key={claimedReward.reward.rewardId}
            data={claimedReward.data}
            balance={balance}
            claimed
          />
        ))}
      </ContentLayout>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: appColors.almostNotBlue,
    flex: 1,
  },
});

export default ClaimedRewardsList;
