import {gql} from '@apollo/client';

const GET_AVAILABLE_ROUTES_QUERY = gql`
  query GET_AVAILABLE_ROUTES_QUERY {
    getAvailableRoutes {
      routeId
      title
      description
      coverImageUrl
      isSuggested
      numberOfSteps
      totalPoints
      targetAudience
      tips {
        title
        description
      }
    }
  }
`;

export default GET_AVAILABLE_ROUTES_QUERY;
