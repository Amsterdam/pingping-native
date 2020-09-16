import {gql} from '@apollo/client';

const ROUTES_ATTRIBUTES = gql`
  fragment RoutesFragment on RouteResponse {
    routeId
    title
    description
    coverImageUrl
    isSuggested
    numberOfSteps
    totalPoints
    targetAudience
    progress
    tips {
      title
      description
    }
    tasks {
      status
      answer
      task {
        taskId
        title
        headerTitle
        description
        media {
          type
          value
        }
        choices
        progress
      }
    }
  }
`;

export default ROUTES_ATTRIBUTES;
