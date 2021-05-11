import React from 'react';

import {Content} from 'native-base';
import PropTypes from 'prop-types';
import {RefreshControl} from 'react-native';

import RewardCard from './RewardCard';

import {appColors} from '../../config/colors';
import ContentLayout from '../layout/ContentLayout';

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

ClaimedRewardsList.propTypes = {
  claimedRewards: PropTypes.array,
  balance: PropTypes.number,
  navigation: PropTypes.object.isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

ClaimedRewardsList.defaultProps = {
  claimedRewards: [],
  balance: 0,
};

export default ClaimedRewardsList;
