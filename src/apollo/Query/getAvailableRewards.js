import {gql} from '@apollo/client';

const GET_AVAILABLE_REWARDS_QUERY = gql`
  query GET_AVAILABLE_REWARDS_QUERY {
    getAvailableRoutes {
      rewardId
      title
      description
      imageUrl
      price
      status
    }
  }
`;

export default GET_AVAILABLE_REWARDS_QUERY;
