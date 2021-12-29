import { gql } from '@apollo/client';

import REWARD_FRAGMENT from '../Fragment/rewardFragment';

const GET_AVAILABLE_REWARDS_QUERY = gql`
	query GET_AVAILABLE_REWARDS_QUERY {
		getAvailableRewards {
			...RewardFragment
		}
	}
	${REWARD_FRAGMENT}
`;

export default GET_AVAILABLE_REWARDS_QUERY;
