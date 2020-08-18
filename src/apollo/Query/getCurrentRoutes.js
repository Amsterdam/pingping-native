import {gql} from '@apollo/client';

const GET_CURRENT_ROUTES_QUERY = gql`
  query GET_CURRENT_ROUTES_QUERY {
    getCurrentRoutes {
      progress
      status
      route {
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
      tasks {
        status
        task {
          taskId
          title
          headerTitle
          description
          media
          choices
          progress
          type
        }
        answer
      }
    }
  }
`;

export default GET_CURRENT_ROUTES_QUERY;
