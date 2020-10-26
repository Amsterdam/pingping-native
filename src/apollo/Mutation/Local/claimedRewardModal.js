import {gql} from '@apollo/client';

const CLAIMED_REWARD_MODAL = gql`
  mutation claimedRewardModal(
    $claimedRewardModalOpen: Boolean!
    $title: String!
    $description: String!
    $imageUrl: String!
    $rewardId: String!
    $data: Object!
  ) {
    claimedRewardModal(
      claimedRewardModalOpen: $claimedRewardModalOpen
      title: $title
      description: $description
      imageUrl: $imageUrl
      rewardId: $rewardId
      data: $data
    ) @client
  }
`;

export default CLAIMED_REWARD_MODAL;
