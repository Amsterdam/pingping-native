import {gql} from '@apollo/client';

import ROUTES_FRAGMENT from '../Fragment/routesFragment';

const GET_ROUTE_QUERY = gql`
  query GET_ROUTE_QUERY($routeId: String!) {
    getRoute(routeId: $routeId) {
      ...RoutesFragment
    }
  }
  ${ROUTES_FRAGMENT}
`;

export default GET_ROUTE_QUERY;
