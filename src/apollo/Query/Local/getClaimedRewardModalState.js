import {gql} from '@apollo/client';

const GET_CLAIMED_REWARD_MODAL = gql`
  query GET_QUESTIONNAIRE_MODAL {
    claimedRewardModalOpen @client
  }
`;

export default GET_CLAIMED_REWARD_MODAL;
