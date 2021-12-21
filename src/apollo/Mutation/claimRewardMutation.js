import {gql} from '@apollo/client';

import REWARD_FRAGMENT from '../Fragment/rewardFragment';

const CLAIM_REWARD_MUTATION = gql`
	mutation CLAIM_REWARD_MUTATION($rewardId: String!) {
		claimReward(rewardId: $rewardId) {
			id
			reward {
				...RewardFragment
			}
			status
			barcodeImageUrl
			data
		}
	}
	${REWARD_FRAGMENT}
`;

export default CLAIM_REWARD_MUTATION;
