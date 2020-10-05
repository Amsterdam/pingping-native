import {gql} from '@apollo/client';

const GET_AVAILABLE_REWARDS_QUERY = gql`
  query GET_AVAILABLE_REWARDS_QUERY {
    getAvailableRewards {
      rewardId
      title
      description
      imageUrl
      thumbnailUrl
      price
      status
    }
  }
`;

export default GET_AVAILABLE_REWARDS_QUERY;
