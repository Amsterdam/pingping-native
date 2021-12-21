import {gql} from '@apollo/client';

const GET_CLAIMED_REWARD_MODAL = gql`
	query GET_QUESTIONNAIRE_MODAL {
		claimedRewardModalOpen @client
		title @client
		description @client
		imageUrl @client
		rewardId @client
		pin @client
		code @client
		expiryDate @client
	}
`;

export default GET_CLAIMED_REWARD_MODAL;
