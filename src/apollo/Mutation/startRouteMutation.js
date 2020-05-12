import {gql} from '@apollo/client';

const START_ROUTE = gql`
  mutation startRoute {
    startRoute(routeId: "SomeOtherRoute") {
      title
    }
  }
`;

export default START_ROUTE;
