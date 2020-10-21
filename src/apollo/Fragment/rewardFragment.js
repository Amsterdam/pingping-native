import {gql} from '@apollo/client';

const REWARD_FRAGMENT = gql`
  fragment RewardFragment on RewardResponse {
    rewardId
    title
    description
    imageUrl
    thumbnailUrl
    price
    status
  }
`;

export default REWARD_FRAGMENT;
