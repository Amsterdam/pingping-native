import React from 'react';

import PropTypes from 'prop-types';
import {RefreshControl, ScrollView} from 'react-native';

import RewardCard from './RewardCard';

import theme from '../../config/theme';
import ContentLayout from '../layout/ContentLayout';

const ClaimedRewardsList = ({
	claimedRewards,
	balance,
	navigation,
	refreshing,
	onRefresh,
}) => {
	return (
		<ScrollView
			style={{backgroundColor: theme.colors.almostNotBlue}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					tintColor={theme.colors.primary}
				/>
			}>
			<ContentLayout>
				{claimedRewards.map(claimedReward => (
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
		</ScrollView>
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
