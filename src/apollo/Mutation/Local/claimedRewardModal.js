import {gql} from '@apollo/client';

const CLAIMED_REWARD_MODAL = gql`
  mutation claimedRewardModal(
    $claimedRewardModalOpen: Boolean!
    $title: String!
    $description: String!
    $imageUrl: String!
    $rewardId: String!
    $pin: String
    $code: String
    $expiryDate: String
  ) {
    claimedRewardModal(
      claimedRewardModalOpen: $claimedRewardModalOpen
      title: $title
      description: $description
      imageUrl: $imageUrl
      rewardId: $rewardId
      pin: $pin
      code: $code
      expiryDate: $expiryDate
    ) @client
  }
`;

export default CLAIMED_REWARD_MODAL;
