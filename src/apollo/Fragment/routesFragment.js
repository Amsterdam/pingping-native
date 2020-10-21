import {gql} from '@apollo/client';

const ROUTES_FRAGMENT = gql`
  fragment RoutesFragment on RouteResponse {
    routeId
    title
    description
    coverImageUrl
    thumbnailUrl
    mainColor
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

export default ROUTES_FRAGMENT;
