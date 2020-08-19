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
        media
        choices
        progress
      }
    }
  }
`;

const GET_ROUTES_QUERY = gql`
  query GET_ROUTES_QUERY {
    getRoutes {
      currentRoutes {
        ...RoutesFragment
      }
      availableRoutes {
        ...RoutesFragment
      }
      archivedRoutes {
        ...RoutesFragment
      }
    }
  }
  ${ROUTES_ATTRIBUTES}
`;

export default GET_ROUTES_QUERY;
