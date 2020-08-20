import {gql} from '@apollo/client';
import ROUTES_ATTRIBUTES from '../Fragment/routesAttributes';

const GET_ROUTE_QUERY = gql`
  query GET_ROUTE_QUERY($routeId: String!) {
    getRoute(routeId: $routeId) {
      ...RoutesFragment
    }
  }
  ${ROUTES_ATTRIBUTES}
`;

export default GET_ROUTE_QUERY;
