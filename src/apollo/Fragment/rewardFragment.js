import {gql} from '@apollo/client';
import MEDIA_FRAGMENT from './mediaFragment';

const REWARD_FRAGMENT = gql`
  fragment RewardFragment on RewardResponse {
    rewardId
    title
    description
    price
    status
    cover {
      ...MediaFragment
    }
  }
  ${MEDIA_FRAGMENT}
`;

export default REWARD_FRAGMENT;
