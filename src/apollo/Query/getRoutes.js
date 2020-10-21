import {gql} from '@apollo/client';
import ROUTES_FRAGMENT from '../Fragment/routesFragment';

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
  ${ROUTES_FRAGMENT}
`;

export default GET_ROUTES_QUERY;
