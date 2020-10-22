import {gql} from '@apollo/client';

const CLAIMED_REWARD_MODAL = gql`
  mutation claimedRewardModal($claimedRewardModalOpen: Boolean!) {
    claimedRewardModal(claimedRewardModalOpen: $claimedRewardModalOpen) @client
  }
`;

export default CLAIMED_REWARD_MODAL;
