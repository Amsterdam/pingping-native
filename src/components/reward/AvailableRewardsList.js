import React from 'react';

import PropTypes from 'prop-types';
import {
	RefreshControl,
	ScrollView,
} from 'react-native';

import RewardCard from './RewardCard';

import theme from '../../config/theme';
import ContentLayout from '../layout/ContentLayout';
import CardSkeleton from '../skeleton/CardSkeleton';

function AvailableRewardsList({
	availableRewards,
	balance,
	navigation,
	refreshing,
	onRefresh,
}) {
	return (
		<ScrollView
			style={{
				backgroundColor:
					theme.colors.almostNotBlue,
			}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					tintColor={theme.colors.primary}
				/>
			}
		>
			<ContentLayout>
				{availableRewards.loading && (
					<CardSkeleton withTitle={false} />
				)}
				{availableRewards.data &&
					availableRewards.data.getAvailableRewards.map(
						reward => (
							<RewardCard
								navigation={navigation}
								reward={reward}
								key={reward.rewardId}
								balance={balance}
							/>
						),
					)}
			</ContentLayout>
		</ScrollView>
	);
}

AvailableRewardsList.propTypes = {
	availableRewards: PropTypes.object.isRequired,
	balance: PropTypes.number,
	navigation: PropTypes.object.isRequired,
	refreshing: PropTypes.bool.isRequired,
	onRefresh: PropTypes.func.isRequired,
};

export default AvailableRewardsList;
