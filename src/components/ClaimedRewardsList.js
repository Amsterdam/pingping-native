import React from 'react';
import {StyleSheet} from 'react-native';
import {appColors} from '../config/colors';
import ContentLayout from './layout/ContentLayout';
import RewardCard from './RewardCard';

const ClaimedRewardsList = ({claimedRewards, balance, navigation}) => {
  console.log(claimedRewards);
  return (
    <ContentLayout style={styles.content}>
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
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: appColors.almostNotBlue,
    flex: 1,
  },
});

export default ClaimedRewardsList;
